(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [5878, 4535],
    {
        95878: (e, t, n) => {
            'use strict';
            n.r(t),
                n.d(t, {
                    CodeMirrorEditor: () => S,
                    CodeMirrorEditorFactory: () => L,
                    CodeMirrorMimeTypeService: () => T,
                    EditorSyntaxStatus: () => z,
                    ICodeMirror: () => O,
                    Mode: () => k,
                    editorServices: () => I,
                });
            var r = n(61345),
                i = n(47343),
                o = n(51972),
                a = n(43892),
                s = n(26169),
                l = n(21743),
                c = n(61313),
                u = n(32798),
                d = n(41981),
                m = n.n(d);
            n(76234),
                n(4218),
                n(37643),
                n(52971),
                n(41652),
                n(12575),
                n(74305),
                n(22842),
                n(2450),
                n(11723),
                n(48501),
                n(60762),
                n(38153),
                n(40554),
                n(13439),
                n(41859),
                n(67553),
                n(71633),
                n(97988),
                n(54206),
                n(19306),
                n(24354);
            var f = n(41865),
                p = n(79915),
                h = n(12904);
            const g = e =>
                class {
                    constructor(e) {
                        this._ = e;
                    }
                    destroy() {
                        e(this._);
                    }
                };
            g(clearTimeout),
                g(clearInterval),
                g(
                    e =>
                        'undefined' != typeof requestAnimationFrame &&
                        cancelAnimationFrame(e)
                ),
                g(
                    e =>
                        'undefined' != typeof cancelIdleCallback &&
                        cancelIdleCallback(e)
                );
            var b = n(32549);
            const v = 'y-codemirror',
                x = e => {
                    const t = document.createElement('span');
                    t.setAttribute('style', 'user-select: none;');
                    const n = document.createElement('span');
                    n.insertBefore(document.createTextNode(''), null);
                    const r = document.createElement('span');
                    return (
                        r.setAttribute('class', 'y-line-selection'),
                        r.setAttribute(
                            'style',
                            `display: inline-block; position: absolute; left: 4px; right: 4px; top: 0; bottom: 0; background-color: ${e}70`
                        ),
                        t.insertBefore(r, null),
                        t.insertBefore(n, null),
                        t
                    );
                };
            class y extends b.y {
                constructor(e, t, n = null, { yUndoManager: r = null } = {}) {
                    super();
                    const i = e.doc,
                        o = t.getDoc();
                    if (
                        ((this.doc = i),
                        (this.type = e),
                        (this.cm = t),
                        (this.cmDoc = o),
                        (this.awareness = n || null),
                        (this.yUndoManager = r),
                        (this._onStackItemAdded = ({
                            stackItem: t,
                            changedParentTypes: n,
                        }) => {
                            n.has(e) &&
                                this._beforeChangeSelection &&
                                t.meta.set(this, this._beforeChangeSelection);
                        }),
                        (this._onStackItemPopped = ({ stackItem: e }) => {
                            const n = e.meta.get(this);
                            if (n) {
                                const e = p.createAbsolutePositionFromRelativePosition(
                                        n.anchor,
                                        i
                                    ).index,
                                    r = p.createAbsolutePositionFromRelativePosition(
                                        n.head,
                                        i
                                    ).index;
                                t.setSelection(
                                    t.posFromIndex(e),
                                    t.posFromIndex(r)
                                ),
                                    this._beforeChange();
                            }
                        }),
                        r)
                    ) {
                        r.trackedOrigins.add(this);
                        const e = e => {
                                e.endOperation(), r.undo(), e.startOperation();
                            },
                            n = e => {
                                e.endOperation(), r.redo(), e.startOperation();
                            };
                        t.addKeyMap({
                            'Ctrl-Z': e,
                            'Shift-Ctrl-Z': n,
                            'Ctrl-Y': n,
                            'Cmd-Z': e,
                            'Shift-Cmd-Z': n,
                            'Cmd-Y': n,
                        }),
                            r.on('stack-item-added', this._onStackItemAdded),
                            r.on('stack-item-popped', this._onStackItemPopped);
                    }
                    (this._mux = (() => {
                        let e = !0;
                        return (t, n) => {
                            if (e) {
                                e = !1;
                                try {
                                    t();
                                } finally {
                                    e = !0;
                                }
                            } else void 0 !== n && n();
                        };
                    })()),
                        o.setValue(e.toString()),
                        (this._typeObserver = e =>
                            ((e, t) => {
                                e._mux(() => {
                                    const n = e.cmDoc,
                                        r = n.getEditor();
                                    let i = r.indexFromPos(
                                            r.getCursor('anchor')
                                        ),
                                        o = r.indexFromPos(r.getCursor('head'));
                                    const a = o < i;
                                    if (a) {
                                        const e = o;
                                        (o = i), (i = e);
                                    }
                                    const s = () => {
                                        const e = t.delta;
                                        let r = 0;
                                        for (
                                            let a = 0;
                                            a < t.delta.length;
                                            a++
                                        ) {
                                            const t = e[a];
                                            if (t.retain) r += t.retain;
                                            else if (t.insert) {
                                                (r < i || (i < o && r === i)) &&
                                                    (i += t.insert.length),
                                                    r < o &&
                                                        (o += t.insert.length);
                                                const e = n.posFromIndex(r);
                                                n.replaceRange(
                                                    t.insert,
                                                    e,
                                                    e,
                                                    v
                                                ),
                                                    (r += t.insert.length);
                                            } else if (t.delete) {
                                                r < i &&
                                                    (i = f.Fp(i - t.delete, r)),
                                                    r < o &&
                                                        (o = f.Fp(
                                                            o - t.delete,
                                                            r
                                                        ));
                                                const e = n.posFromIndex(r),
                                                    a = n.posFromIndex(
                                                        r + t.delete
                                                    );
                                                n.replaceRange('', e, a, v);
                                            }
                                        }
                                    };
                                    if ((r ? r.operation(s) : s(), a)) {
                                        const e = o;
                                        (o = i), (i = e);
                                    }
                                    r.setSelection(
                                        r.posFromIndex(i),
                                        r.posFromIndex(o),
                                        { scroll: !1 }
                                    );
                                });
                            })(this, e)),
                        (this._targetObserver = (e, t) => {
                            e.getDoc() === o &&
                                ((e, t) => {
                                    e._mux(() => {
                                        e.doc.transact(() => {
                                            const n =
                                                e.yUndoManager &&
                                                t.some(
                                                    e => 'paste' === e.origin
                                                );
                                            if (
                                                (n &&
                                                    e.yUndoManager.stopCapturing(),
                                                t.length > 1)
                                            ) {
                                                const t = ((e, t) => {
                                                    let n = 0,
                                                        r = 0;
                                                    for (
                                                        ;
                                                        n < e.length &&
                                                        n < t.length &&
                                                        e[n] === t[n];

                                                    )
                                                        n++;
                                                    for (
                                                        ;
                                                        r + n < e.length &&
                                                        r + n < t.length &&
                                                        e[e.length - r - 1] ===
                                                            t[t.length - r - 1];

                                                    )
                                                        r++;
                                                    return {
                                                        index: n,
                                                        remove:
                                                            e.length - n - r,
                                                        insert: t.slice(
                                                            n,
                                                            t.length - r
                                                        ),
                                                    };
                                                })(
                                                    e.type.toString(),
                                                    e.cmDoc.getValue()
                                                );
                                                e.type.delete(
                                                    t.index,
                                                    t.remove
                                                ),
                                                    e.type.insert(
                                                        t.index,
                                                        t.insert
                                                    );
                                            } else {
                                                const n = t[0],
                                                    r = e.cmDoc.indexFromPos(
                                                        n.from
                                                    ),
                                                    i =
                                                        n.removed
                                                            .map(e => e.length)
                                                            .reduce(f.IH) +
                                                        n.removed.length -
                                                        1;
                                                i > 0 && e.type.delete(r, i),
                                                    n.text.length > 0 &&
                                                        e.type.insert(
                                                            r,
                                                            n.text.join('\n')
                                                        );
                                            }
                                            n && e.yUndoManager.stopCapturing();
                                        }, e);
                                    }),
                                        e._pendingCursorEvent &&
                                            ((e._pendingCursorEvent = !1),
                                            e.emit('cursorActivity', [e]));
                                })(this, t);
                        }),
                        (this._cursors = new Map()),
                        (this._changedCursors = new Set()),
                        (this._debounceCursorEvent = (e => {
                            let t = -1;
                            return e => {
                                clearTimeout(t), e && (t = setTimeout(e, 10));
                            };
                        })()),
                        (this._awarenessListener = r => {
                            if (t.getDoc() !== o) return;
                            const a = e => {
                                e !== i.clientID && this._changedCursors.add(e);
                            };
                            r.added.forEach(a),
                                r.removed.forEach(a),
                                r.updated.forEach(a),
                                this._changedCursors.size > 0 &&
                                    this._debounceCursorEvent(() => {
                                        this._changedCursors.forEach(r => {
                                            ((e, t, n, r, i, o) => {
                                                const a = o.getStates().get(i),
                                                    s = r.get(i);
                                                if (
                                                    (void 0 !== s &&
                                                        (s.caret &&
                                                            s.caret.clear(),
                                                        s.sel.forEach(e =>
                                                            e.clear()
                                                        ),
                                                        r.delete(i)),
                                                    void 0 === a)
                                                )
                                                    return;
                                                const l = a.user || {};
                                                null == l.color &&
                                                    (l.color = '#ffa500'),
                                                    null == l.name &&
                                                        (l.name = `User: ${i}`);
                                                const c = a.cursor;
                                                if (
                                                    null == c ||
                                                    null == c.anchor ||
                                                    null == c.head
                                                )
                                                    return;
                                                const u = p.createAbsolutePositionFromRelativePosition(
                                                        JSON.parse(c.anchor),
                                                        e
                                                    ),
                                                    d = p.createAbsolutePositionFromRelativePosition(
                                                        JSON.parse(c.head),
                                                        e
                                                    );
                                                if (
                                                    null !== u &&
                                                    null !== d &&
                                                    u.type === n &&
                                                    d.type === n
                                                ) {
                                                    const e = t.posFromIndex(
                                                            d.index
                                                        ),
                                                        n = t.posFromIndex(
                                                            u.index
                                                        );
                                                    let o, f;
                                                    d.index < u.index
                                                        ? ((o = e), (f = n))
                                                        : ((o = n), (f = e));
                                                    const p = ((e, t) => {
                                                        const n = document.createElement(
                                                            'span'
                                                        );
                                                        n.classList.add(
                                                            'remote-caret'
                                                        ),
                                                            n.setAttribute(
                                                                'style',
                                                                `border-color: ${t}`
                                                            );
                                                        const r = document.createElement(
                                                            'div'
                                                        );
                                                        return (
                                                            r.setAttribute(
                                                                'style',
                                                                `background-color: ${t}`
                                                            ),
                                                            r.insertBefore(
                                                                document.createTextNode(
                                                                    e
                                                                ),
                                                                null
                                                            ),
                                                            n.insertBefore(
                                                                r,
                                                                null
                                                            ),
                                                            setTimeout(() => {
                                                                n.classList.add(
                                                                    'hide-name'
                                                                );
                                                            }, 2e3),
                                                            n
                                                        );
                                                    })(l.name, l.color);
                                                    s &&
                                                        h.UV(
                                                            a.cursor.anchor,
                                                            s.awCursor.anchor
                                                        ) &&
                                                        h.UV(
                                                            a.cursor.head,
                                                            s.awCursor.head
                                                        ) &&
                                                        p.classList.add(
                                                            'hide-name'
                                                        );
                                                    const g = [];
                                                    if (d.index !== u.index) {
                                                        for (
                                                            o.line !== f.line &&
                                                            0 !== o.ch &&
                                                            (g.push(
                                                                t.markText(
                                                                    o,
                                                                    new (m().Pos)(
                                                                        o.line +
                                                                            1,
                                                                        0
                                                                    ),
                                                                    {
                                                                        css: `background-color: ${l.color}70;`,
                                                                        inclusiveRight: !1,
                                                                        inclusiveLeft: !1,
                                                                    }
                                                                )
                                                            ),
                                                            (o = new (m().Pos)(
                                                                o.line + 1,
                                                                0
                                                            )));
                                                            o.line !== f.line;

                                                        )
                                                            g.push(
                                                                t.setBookmark(
                                                                    new (m().Pos)(
                                                                        o.line,
                                                                        0
                                                                    ),
                                                                    {
                                                                        widget: x(
                                                                            l.color
                                                                        ),
                                                                    }
                                                                )
                                                            ),
                                                                (o = new (m().Pos)(
                                                                    o.line + 1,
                                                                    0
                                                                ));
                                                        g.push(
                                                            t.markText(o, f, {
                                                                css: `background-color: ${l.color}70;`,
                                                                inclusiveRight: !1,
                                                                inclusiveLeft: !1,
                                                            })
                                                        );
                                                    }
                                                    const b =
                                                        g.length > 0 &&
                                                        f === e &&
                                                        0 === e.ch
                                                            ? null
                                                            : t.setBookmark(e, {
                                                                  widget: p,
                                                                  insertLeft: !0,
                                                              });
                                                    r.set(i, {
                                                        caret: b,
                                                        sel: g,
                                                        awCursor: c,
                                                    });
                                                }
                                            })(i, t, e, this._cursors, r, n);
                                        }),
                                            this._changedCursors.clear();
                                    });
                        }),
                        (this._pendingCursorEvent = !1),
                        (this._cursorListener = () => {
                            t.getDoc() === o &&
                                ((this._pendingCursorEvent = !0),
                                setTimeout(() => {
                                    this._pendingCursorEvent &&
                                        ((this._pendingCursorEvent = !1),
                                        this.emit('cursorActivity', [t]));
                                }, 0));
                        }),
                        this.on('cursorActivity', () => {
                            ((e, t, n, r) => {
                                const i = r.getLocalState();
                                if (
                                    !t.hasFocus() ||
                                    null == i ||
                                    !t.display.wrapper.ownerDocument.hasFocus()
                                )
                                    return;
                                const o = p.createRelativePositionFromTypeIndex(
                                        n,
                                        t.indexFromPos(t.getCursor('anchor'))
                                    ),
                                    a = p.createRelativePositionFromTypeIndex(
                                        n,
                                        t.indexFromPos(t.getCursor('head'))
                                    );
                                let s = null,
                                    l = null;
                                null != i.cursor &&
                                    ((s = p.createRelativePositionFromJSON(
                                        JSON.parse(i.cursor.anchor)
                                    )),
                                    (l = p.createRelativePositionFromJSON(
                                        JSON.parse(i.cursor.head)
                                    ))),
                                    (null != i.cursor &&
                                        p.compareRelativePositions(s, o) &&
                                        p.compareRelativePositions(l, a)) ||
                                        r.setLocalStateField('cursor', {
                                            anchor: JSON.stringify(o),
                                            head: JSON.stringify(a),
                                        });
                            })(0, t, e, n);
                        }),
                        (this._blurListeer = () =>
                            n.setLocalStateField('cursor', null)),
                        e.observe(this._typeObserver),
                        t.on('changes', this._targetObserver),
                        (this._beforeChangeSelection = null),
                        (this._beforeChange = () => {
                            this._mux(() => {
                                const n = p.createRelativePositionFromTypeIndex(
                                        e,
                                        t.indexFromPos(t.getCursor('anchor'))
                                    ),
                                    r = p.createRelativePositionFromTypeIndex(
                                        e,
                                        t.indexFromPos(t.getCursor('head'))
                                    );
                                this._beforeChangeSelection = {
                                    anchor: n,
                                    head: r,
                                };
                            });
                        }),
                        t.on('beforeChange', this._beforeChange),
                        n &&
                            (t.on('swapDoc', this._blurListeer),
                            n.on('change', this._awarenessListener),
                            t.on('cursorActivity', this._cursorListener),
                            t.on('blur', this._blurListeer),
                            t.on('focus', this._cursorListener));
                }
                destroy() {
                    this.type.unobserve(this._typeObserver),
                        this.cm.off('swapDoc', this._blurListeer),
                        this.cm.off('changes', this._targetObserver),
                        this.cm.off('beforeChange', this._beforeChange),
                        this.cm.off('cursorActivity', this._cursorListener),
                        this.cm.off('focus', this._cursorListener),
                        this.cm.off('blur', this._blurListeer),
                        this.awareness &&
                            this.awareness.off(
                                'change',
                                this._awarenessListener
                            ),
                        this.yUndoManager &&
                            (this.yUndoManager.off(
                                'stack-item-added',
                                this._onStackItemAdded
                            ),
                            this.yUndoManager.off(
                                'stack-item-popped',
                                this._onStackItemPopped
                            ),
                            this.yUndoManager.trackedOrigins.delete(this)),
                        (this.type = null),
                        (this.cm = null),
                        (this.cmDoc = null),
                        super.destroy();
                }
            }
            var k,
                w,
                C = n(96801);
            n(89750),
                n(91434),
                n(1827),
                n(72896),
                n(38269),
                n(15e3),
                n(7385),
                n(80505),
                n(52517),
                n(70390),
                n(67310),
                n(43454),
                m().defineMode(
                    'ipython',
                    (e, t) => {
                        const n = {};
                        for (const e in t) t.hasOwnProperty(e) && (n[e] = t[e]);
                        return (
                            (n.name = 'python'),
                            (n.singleOperators = new RegExp(
                                '^[\\+\\-\\*/%&|@\\^~<>!\\?]'
                            )),
                            (n.identifiers = new RegExp(
                                '^[_A-Za-z¡-￿][_A-Za-z0-9¡-￿]*'
                            )),
                            m().getMode(e, n)
                        );
                    },
                    'python'
                ),
                m().defineMIME('text/x-ipython', 'ipython'),
                m().modeInfo.push({
                    ext: [],
                    mime: 'text/x-ipython',
                    mode: 'ipython',
                    name: 'ipython',
                }),
                n(46865),
                n(79999),
                n(16751),
                m().defineMode(
                    'ipythongfm',
                    (e, t) => {
                        const n = m().getMode(e, {
                                name: 'gfm',
                                tokenTypeOverrides: { list3: 'string-2' },
                            }),
                            r = m().getMode(e, {
                                name: 'stex',
                                inMathMode: !0,
                            });
                        return m().multiplexingMode(
                            n,
                            {
                                open: '<code>',
                                close: '</code>',
                                mode: n,
                                parseDelimiters: !0,
                            },
                            {
                                open: '<pre>',
                                close: '</pre>',
                                mode: n,
                                parseDelimiters: !0,
                            },
                            {
                                open: '```',
                                close: '```',
                                mode: n,
                                parseDelimiters: !0,
                            },
                            {
                                open: '`',
                                close: '`',
                                mode: n,
                                parseDelimiters: !0,
                            },
                            {
                                open: '$$',
                                close: '$$',
                                mode: r,
                                delimStyle: 'delimit',
                            },
                            {
                                open: /\$(?=.*\$)/,
                                close: '$',
                                mode: r,
                                delimStyle: 'delimit',
                            },
                            {
                                open: '\\(',
                                close: '\\)',
                                mode: r,
                                delimStyle: 'delimit',
                            },
                            {
                                open: '\\[',
                                close: '\\]',
                                mode: r,
                                delimStyle: 'delimit',
                            }
                        );
                    },
                    'gfm'
                ),
                m().defineMIME('text/x-ipythongfm', 'ipythongfm'),
                m().modeInfo.push({
                    ext: [],
                    mime: 'text/x-ipythongfm',
                    mode: 'ipythongfm',
                    name: 'ipythongfm',
                }),
                (function(e) {
                    const t = [
                        {
                            loader: async e => m().modes.hasOwnProperty(e.mode),
                            rank: 0,
                        },
                        {
                            loader: function(e) {
                                return new Promise((t, r) => {
                                    Promise.all([n.e(9657), n.e(7364)])
                                        .then(function() {
                                            var r = [
                                                n(27364)(
                                                    `./${e.mode}/${e.mode}.js`
                                                ),
                                            ];
                                            (function() {
                                                t(!0);
                                            }.apply(null, r));
                                        })
                                        .catch(n.oe);
                                });
                            },
                            rank: 99,
                        },
                    ];
                    function r(e) {
                        var t;
                        const n = 'string' == typeof e ? e : e.mode || e.name,
                            r = 'string' != typeof e ? e.mime : n,
                            a =
                                'string' != typeof e &&
                                null !== (t = e.ext) &&
                                void 0 !== t
                                    ? t
                                    : [];
                        return (
                            m().findModeByName(n || '') ||
                            m().findModeByMIME(r || '') ||
                            i(a) ||
                            m().findModeByMIME(
                                o.IEditorMimeTypeService.defaultMimeType
                            ) ||
                            m().findModeByMIME('text/plain')
                        );
                    }
                    function i(e) {
                        if ('string' == typeof e)
                            return m().findModeByExtension(e);
                        for (let t = 0; t < e.length; t++) {
                            const n = m().findModeByExtension(e[t]);
                            if (n) return n;
                        }
                        return null;
                    }
                    (e.getModeInfo = function() {
                        return m().modeInfo;
                    }),
                        (e.run = function(e, t, n) {
                            m().runMode(e, t, n);
                        }),
                        (e.ensure = async function(e) {
                            const n = r(e);
                            for (const e of t) if (await e.loader(n)) return n;
                            return null;
                        }),
                        (e.addSpecLoader = function(e, n) {
                            const r = { loader: e, rank: n },
                                i = a.ArrayExt.upperBound(t, r, w.itemCmp);
                            a.ArrayExt.insert(t, i, r);
                        }),
                        (e.findBest = r),
                        (e.findByMIME = function(e) {
                            return m().findModeByMIME(e);
                        }),
                        (e.findByName = function(e) {
                            return m().findModeByName(e);
                        }),
                        (e.findByFileName = function(e) {
                            const t = C.PathExt.basename(e);
                            return m().findModeByFileName(t);
                        }),
                        (e.findByExtension = i);
                })(k || (k = {})),
                (function(e) {
                    e.itemCmp = function(e, t) {
                        return e.rank - t.rank;
                    };
                })(w || (w = {}));
            const _ = 'jp-mod-readOnly';
            class S {
                constructor(e) {
                    var t;
                    (this.edgeRequested = new u.Signal(this)),
                        (this.selectionMarkers = {}),
                        (this._keydownHandlers = new Array()),
                        (this._changeGuard = !1),
                        (this._uuid = ''),
                        (this._needsRefresh = !1),
                        (this._isDisposed = !1),
                        (this._lastChange = null);
                    const n = (this.host = e.host);
                    (this.translator = e.translator || r.nullTranslator),
                        (this._trans = this.translator.load('jupyterlab')),
                        n.classList.add('jp-CodeMirrorEditor'),
                        n.classList.add('jp-Editor'),
                        n.addEventListener('focus', this, !0),
                        n.addEventListener('blur', this, !0),
                        n.addEventListener('scroll', this, !0),
                        (this._uuid = e.uuid || s.UUID.uuid4());
                    const i = e.selectionStyle || {};
                    this._selectionStyle = Object.assign(
                        Object.assign({}, o.CodeEditor.defaultSelectionStyle),
                        i
                    );
                    const l = (this._model = e.model),
                        d = e.config || {},
                        f = (this._config = Object.assign(
                            Object.assign({}, S.defaultConfig),
                            d
                        )),
                        p = (this._editor = M.createEditor(n, f));
                    this._initializeEditorBinding(),
                        this.model.sharedModelSwitched.connect(
                            this._initializeEditorBinding,
                            this
                        ),
                        p.getDoc(),
                        this._onMimeTypeChanged(),
                        this._onCursorActivity(),
                        (this._poll = new c.Poll({
                            factory: async () => {
                                this._checkSync();
                            },
                            frequency: { interval: 3e3, backoff: !1 },
                            standby: () => !this._lastChange || 'when-hidden',
                        })),
                        l.mimeTypeChanged.connect(
                            this._onMimeTypeChanged,
                            this
                        ),
                        l.selections.changed.connect(
                            this._onSelectionsChanged,
                            this
                        ),
                        m().on(p, 'keydown', (e, t) => {
                            -1 ===
                                a.ArrayExt.findFirstIndex(
                                    this._keydownHandlers,
                                    e =>
                                        !0 === e(this, t) &&
                                        (t.preventDefault(), !0)
                                ) && this.onKeydown(t);
                        }),
                        null === (t = this._yeditorBinding) ||
                            void 0 === t ||
                            t.on('cursorActivity', () =>
                                this._onCursorActivity()
                            ),
                        m().on(p.getDoc(), 'change', (e, t) => {
                            'setValue' === t.origin &&
                                this.hasFocus() &&
                                this.refresh(),
                                (this._lastChange = t);
                        }),
                        p.on('paste', (e, t) => {
                            var n;
                            null === (n = this._config.handlePaste) ||
                                void 0 === n ||
                                n ||
                                (t.codemirrorIgnore = !0);
                        }),
                        p.getWrapperElement().addEventListener('paste', () => {
                            this.hasFocus() && this.refresh();
                        });
                }
                _initializeEditorBinding() {
                    var e;
                    null === (e = this._yeditorBinding) ||
                        void 0 === e ||
                        e.destroy();
                    const t = this.model.sharedModel,
                        n = t.undoManager
                            ? { yUndoManager: t.undoManager }
                            : {},
                        r = t.awareness;
                    this._yeditorBinding = new y(t.ysource, this.editor, r, n);
                }
                get uuid() {
                    return this._uuid;
                }
                set uuid(e) {
                    this._uuid = e;
                }
                get selectionStyle() {
                    return this._selectionStyle;
                }
                set selectionStyle(e) {
                    this._selectionStyle = e;
                }
                get editor() {
                    return this._editor;
                }
                get doc() {
                    return this._editor.getDoc();
                }
                get lineCount() {
                    return this.doc.lineCount();
                }
                get model() {
                    return this._model;
                }
                get lineHeight() {
                    return this._editor.defaultTextHeight();
                }
                get charWidth() {
                    return this._editor.defaultCharWidth();
                }
                get isDisposed() {
                    return this._isDisposed;
                }
                dispose() {
                    this.isDisposed ||
                        ((this._isDisposed = !0),
                        this.host.removeEventListener('focus', this, !0),
                        this.host.removeEventListener('blur', this, !0),
                        this.host.removeEventListener('scroll', this, !0),
                        this._yeditorBinding && this._yeditorBinding.destroy(),
                        (this._keydownHandlers.length = 0),
                        this._poll.dispose(),
                        u.Signal.clearData(this));
                }
                getOption(e) {
                    return this._config[e];
                }
                setOption(e, t) {
                    this._config[e] !== t &&
                        ((this._config[e] = t),
                        M.setOption(this.editor, e, t, this._config));
                }
                setOptions(e) {
                    const t = this._editor;
                    t.startOperation();
                    for (const n in e) {
                        const r = n;
                        t.operation(() => {
                            this.setOption(r, e[r]);
                        });
                    }
                    t.endOperation();
                }
                getLine(e) {
                    return this.doc.getLine(e);
                }
                getOffsetAt(e) {
                    return this.doc.indexFromPos({
                        ch: e.column,
                        line: e.line,
                    });
                }
                getPositionAt(e) {
                    const { ch: t, line: n } = this.doc.posFromIndex(e);
                    return { line: n, column: t };
                }
                undo() {
                    this.model.sharedModel.undo();
                }
                redo() {
                    this.model.sharedModel.redo();
                }
                clearHistory() {
                    var e, t;
                    null ===
                        (t =
                            null === (e = this._yeditorBinding) || void 0 === e
                                ? void 0
                                : e.yUndoManager) ||
                        void 0 === t ||
                        t.clear();
                }
                focus() {
                    this._editor.focus();
                }
                hasFocus() {
                    return this._editor
                        .getWrapperElement()
                        .contains(document.activeElement);
                }
                blur() {
                    this._editor.getInputField().blur();
                }
                refresh() {
                    this._editor.refresh(), (this._needsRefresh = !1);
                }
                resizeToFit() {
                    this.hasFocus()
                        ? this.refresh()
                        : (this._needsRefresh = !0),
                        this._clearHover();
                }
                addOverlay(e, t) {
                    this._editor.addOverlay(e, t);
                }
                removeOverlay(e) {
                    this._editor.removeOverlay(e);
                }
                getSearchCursor(e, t, n) {
                    return this._editor.getDoc().getSearchCursor(e, t, n);
                }
                getCursor(e) {
                    return this._editor.getDoc().getCursor(e);
                }
                get state() {
                    return this._editor.state;
                }
                operation(e) {
                    return this._editor.operation(e);
                }
                firstLine() {
                    return this._editor.getDoc().firstLine();
                }
                lastLine() {
                    return this._editor.getDoc().lastLine();
                }
                scrollIntoView(e, t) {
                    this._editor.scrollIntoView(e, t);
                }
                scrollIntoViewCentered(e) {
                    var t, n;
                    const r = this._editor.charCoords(e, 'local').top,
                        i = this._editor.getWrapperElement().offsetHeight;
                    null === (n = (t = this.host).scrollIntoView) ||
                        void 0 === n ||
                        n.call(t, {
                            behavior: 'auto',
                            block: 'center',
                            inline: 'center',
                        }),
                        this._editor.scrollTo(null, r - i / 2);
                }
                cursorCoords(e, t) {
                    return this._editor.cursorCoords(e, t);
                }
                getRange(e, t, n) {
                    return this._editor.getDoc().getRange(e, t, n);
                }
                addKeydownHandler(e) {
                    return (
                        this._keydownHandlers.push(e),
                        new l.DisposableDelegate(() => {
                            a.ArrayExt.removeAllWhere(
                                this._keydownHandlers,
                                t => t === e
                            );
                        })
                    );
                }
                setSize(e) {
                    e
                        ? this._editor.setSize(e.width, e.height)
                        : this._editor.setSize(null, null),
                        (this._needsRefresh = !1);
                }
                revealPosition(e) {
                    const t = this._toCodeMirrorPosition(e);
                    this._editor.scrollIntoView(t);
                }
                revealSelection(e) {
                    const t = {
                        from: this._toCodeMirrorPosition(e.start),
                        to: this._toCodeMirrorPosition(e.end),
                    };
                    this._editor.scrollIntoView(t);
                }
                getCoordinateForPosition(e) {
                    const t = this._toCodeMirrorPosition(e);
                    return this.editor.charCoords(t, 'page');
                }
                getPositionForCoordinate(e) {
                    return this._toPosition(this.editor.coordsChar(e)) || null;
                }
                getCursorPosition() {
                    const e = this.doc.getCursor();
                    return this._toPosition(e);
                }
                setCursorPosition(e, t) {
                    const n = this._toCodeMirrorPosition(e);
                    this.doc.setCursor(n, void 0, t),
                        this.editor.hasFocus() ||
                            this.model.selections.set(
                                this.uuid,
                                this.getSelections()
                            );
                }
                getSelection() {
                    return this.getSelections()[0];
                }
                setSelection(e) {
                    this.setSelections([e]);
                }
                getSelections() {
                    const e = this.doc.listSelections();
                    if (e.length > 0) return e.map(e => this._toSelection(e));
                    const t = this.doc.getCursor();
                    return [this._toSelection({ anchor: t, head: t })];
                }
                setSelections(e) {
                    const t = this._toCodeMirrorSelections(e);
                    this.doc.setSelections(t, 0);
                }
                replaceSelection(e) {
                    this.doc.replaceSelection(e);
                }
                getTokens() {
                    let e = [];
                    for (let t = 0; t < this.lineCount; ++t) {
                        const n = this.editor
                            .getLineTokens(t)
                            .map(e => ({
                                offset: this.getOffsetAt({
                                    column: e.start,
                                    line: t,
                                }),
                                value: e.string,
                                type: e.type || '',
                            }));
                        e = e.concat(n);
                    }
                    return e;
                }
                getTokenForPosition(e) {
                    var t;
                    const n = this._toCodeMirrorPosition(e),
                        r = this.editor.getTokenAt(n);
                    return {
                        offset: this.getOffsetAt({
                            column: r.start,
                            line: n.line,
                        }),
                        value: r.string,
                        type:
                            null !== (t = r.type) && void 0 !== t ? t : void 0,
                    };
                }
                newIndentedLine() {
                    this.execCommand('newlineAndIndent');
                }
                execCommand(e) {
                    this._editor.execCommand(e);
                }
                onKeydown(e) {
                    const t = this.getCursorPosition(),
                        { line: n, column: r } = t;
                    if (0 === n && 0 === r && 38 === e.keyCode)
                        return e.shiftKey || this.edgeRequested.emit('top'), !1;
                    if (0 === n && 38 === e.keyCode)
                        return (
                            e.shiftKey || this.edgeRequested.emit('topLine'), !1
                        );
                    const i = this.lineCount - 1,
                        o = this.getLine(i).length;
                    return (
                        n === i &&
                        r === o &&
                        40 === e.keyCode &&
                        (e.shiftKey || this.edgeRequested.emit('bottom'), !1)
                    );
                }
                _toCodeMirrorSelections(e) {
                    if (e.length > 0)
                        return e.map(e => this._toCodeMirrorSelection(e));
                    const t = { line: 0, ch: 0 };
                    return [{ anchor: t, head: t }];
                }
                _onMimeTypeChanged() {
                    const e = this._model.mimeType,
                        t = this._editor.getOption('extraKeys') || {};
                    'text/plain' !== e && 'text/x-ipythongfm' !== e
                        ? (t.Backspace = 'delSpaceToPrevTabStop')
                        : delete t.Backspace,
                        this.setOption('extraKeys', t),
                        k.ensure(e).then(e => {
                            var t;
                            this.setOption(
                                'mode',
                                null !== (t = null == e ? void 0 : e.mime) &&
                                    void 0 !== t
                                    ? t
                                    : 'null'
                            );
                        });
                }
                _onSelectionsChanged(e, t) {
                    const n = t.key;
                    n !== this.uuid &&
                        (this._cleanSelections(n),
                        'remove' !== t.type &&
                            t.newValue &&
                            this._markSelections(n, t.newValue));
                }
                _cleanSelections(e) {
                    const t = this.selectionMarkers[e];
                    t &&
                        t.forEach(e => {
                            e.clear();
                        }),
                        delete this.selectionMarkers[e];
                }
                _markSelections(e, t) {
                    const n = [];
                    let r;
                    e === this._hoverId && this._clearHover(),
                        this._model.modelDB.collaborators &&
                            (r = this._model.modelDB.collaborators.get(e)),
                        t.forEach(e => {
                            if (s.JSONExt.deepEqual(e.start, e.end)) {
                                if (r) {
                                    const t = this._getCaret(r);
                                    n.push(
                                        this.doc.setBookmark(
                                            this._toCodeMirrorPosition(e.end),
                                            { widget: t }
                                        )
                                    );
                                }
                            } else {
                                const t =
                                        e.start.line < e.end.line ||
                                        (e.start.line === e.end.line &&
                                            e.start.column <= e.end.column),
                                    i = this._toCodeMirrorPosition(
                                        t ? e.start : e.end
                                    ),
                                    o = this._toCodeMirrorPosition(
                                        t ? e.end : e.start
                                    );
                                let a;
                                (a = r
                                    ? this._toTextMarkerOptions(
                                          Object.assign(
                                              Object.assign({}, e.style),
                                              { color: r.color }
                                          )
                                      )
                                    : this._toTextMarkerOptions(e.style)),
                                    n.push(this.doc.markText(i, o, a));
                            }
                        }),
                        (this.selectionMarkers[e] = n);
                }
                _onCursorActivity() {
                    if (this._editor.hasFocus()) {
                        const e = this.getSelections();
                        this.model.selections.set(this.uuid, e);
                    }
                }
                _toSelection(e) {
                    return {
                        uuid: this.uuid,
                        start: this._toPosition(e.anchor),
                        end: this._toPosition(e.head),
                        style: this.selectionStyle,
                    };
                }
                _toTextMarkerOptions(e) {
                    const t = `background-color: rgba( ${parseInt(
                        e.color.slice(1, 3),
                        16
                    )}, ${parseInt(e.color.slice(3, 5), 16)}, ${parseInt(
                        e.color.slice(5, 7),
                        16
                    )}, 0.15)`;
                    return {
                        className: e.className,
                        title: e.displayName,
                        css: t,
                    };
                }
                _toCodeMirrorSelection(e) {
                    return {
                        anchor: this._toCodeMirrorPosition(e.start),
                        head: this._toCodeMirrorPosition(e.end),
                    };
                }
                _toPosition(e) {
                    return { line: e.line, column: e.ch };
                }
                _toCodeMirrorPosition(e) {
                    return { line: e.line, ch: e.column };
                }
                _onValueChanged(e, t) {
                    if (this._changeGuard) return;
                    this._changeGuard = !0;
                    const n = this.doc;
                    switch (t.type) {
                        case 'insert': {
                            const e = n.posFromIndex(t.start);
                            n.replaceRange(t.value, e, e, '+input');
                            break;
                        }
                        case 'remove': {
                            const e = n.posFromIndex(t.start),
                                r = n.posFromIndex(t.end);
                            n.replaceRange('', e, r, '+input');
                            break;
                        }
                        case 'set':
                            n.setValue(t.value);
                    }
                    this._changeGuard = !1;
                }
                _beforeDocChanged(e, t) {
                    if (this._changeGuard) return;
                    this._changeGuard = !0;
                    const n = this._model.value,
                        r = e.indexFromPos(t.from),
                        i = e.indexFromPos(t.to),
                        o = t.text.join('\n');
                    i !== r && n.remove(r, i),
                        o && n.insert(r, o),
                        (this._changeGuard = !1);
                }
                handleEvent(e) {
                    switch (e.type) {
                        case 'focus':
                            this._evtFocus(e);
                            break;
                        case 'blur':
                            this._evtBlur(e);
                            break;
                        case 'scroll':
                            this._evtScroll();
                    }
                }
                _evtFocus(e) {
                    this._needsRefresh && this.refresh(),
                        this.host.classList.add('jp-mod-focused'),
                        this._onCursorActivity();
                }
                _evtBlur(e) {
                    this.host.classList.remove('jp-mod-focused');
                }
                _evtScroll() {
                    this._clearHover();
                }
                _clearHover() {
                    this._caretHover &&
                        (window.clearTimeout(this._hoverTimeout),
                        document.body.removeChild(this._caretHover),
                        (this._caretHover = null));
                }
                _getCaret(e) {
                    const t = e ? e.displayName : 'Anonymous',
                        n = e ? e.color : this._selectionStyle.color,
                        r = document.createElement('span');
                    return (
                        (r.className = 'jp-CollaboratorCursor'),
                        (r.style.borderBottomColor = n),
                        (r.onmouseenter = () => {
                            this._clearHover(), (this._hoverId = e.sessionId);
                            const i = r.getBoundingClientRect(),
                                o = document.createElement('div');
                            (o.className = 'jp-CollaboratorCursor-hover'),
                                (o.style.left = String(i.left) + 'px'),
                                (o.style.top = String(i.bottom) + 'px'),
                                (o.textContent = t),
                                (o.style.backgroundColor = n),
                                (o.onmouseenter = () => {
                                    window.clearTimeout(this._hoverTimeout);
                                }),
                                (o.onmouseleave = () => {
                                    this._hoverTimeout = window.setTimeout(
                                        () => {
                                            this._clearHover();
                                        },
                                        1e3
                                    );
                                }),
                                (this._caretHover = o),
                                document.body.appendChild(o);
                        }),
                        (r.onmouseleave = () => {
                            this._hoverTimeout = window.setTimeout(() => {
                                this._clearHover();
                            }, 1e3);
                        }),
                        r
                    );
                }
                _checkSync() {
                    const e = this._lastChange;
                    if (!e) return;
                    this._lastChange = null;
                    const t = this._editor,
                        n = t.getDoc();
                    n.getValue() !== this._model.value.text &&
                        ((0, i.showDialog)({
                            title: this._trans.__('Code Editor out of Sync'),
                            body: this._trans.__(
                                'Please open your browser JavaScript console for bug report instructions'
                            ),
                        }),
                        console.warn(
                            'If you are able and willing to publicly share the text or code in your editor, you can help us debug the "Code Editor out of Sync" message by pasting the following to the public issue at https://github.com/jupyterlab/jupyterlab/issues/2951. Please note that the data below includes the text/code in your editor.'
                        ),
                        console.warn(
                            JSON.stringify({
                                model: this._model.value.text,
                                view: n.getValue(),
                                selections: this.getSelections(),
                                cursor: this.getCursorPosition(),
                                lineSep: t.getOption('lineSeparator'),
                                mode: t.getOption('mode'),
                                change: e,
                            })
                        ));
                }
            }
            var M;
            !(function(e) {
                (e.defaultConfig = Object.assign(
                    Object.assign({}, o.CodeEditor.defaultConfig),
                    {
                        mode: 'null',
                        theme: 'jupyter',
                        smartIndent: !0,
                        electricChars: !0,
                        keyMap: 'default',
                        extraKeys: null,
                        gutters: [],
                        fixedGutter: !0,
                        showCursorWhenSelecting: !1,
                        coverGutterNextToScrollbar: !1,
                        dragDrop: !0,
                        lineSeparator: null,
                        scrollbarStyle: 'native',
                        lineWiseCopyCut: !0,
                        scrollPastEnd: !1,
                        styleActiveLine: !1,
                        styleSelectedText: !0,
                        selectionPointer: !1,
                        rulers: [],
                        foldGutter: !1,
                        handlePaste: !0,
                    }
                )),
                    (e.addCommand = function(e, t) {
                        m().commands[e] = t;
                    });
            })(S || (S = {})),
                (function(e) {
                    function t(e, t) {
                        return e.line === t.line && e.ch === t.ch;
                    }
                    function n(e) {
                        const t = {
                            'CodeMirror-linenumbers': 'lineNumbers',
                            'CodeMirror-foldgutter': 'codeFolding',
                        };
                        return Object.keys(t).filter(n => e[t[n]]);
                    }
                    (e.createEditor = function(e, t) {
                        const {
                                autoClosingBrackets: n,
                                fontFamily: r,
                                fontSize: i,
                                insertSpaces: o,
                                lineHeight: a,
                                lineWrap: s,
                                wordWrapColumn: l,
                                tabSize: c,
                                readOnly: u,
                            } = t,
                            d = (function(e, t) {
                                var n = {};
                                for (var r in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        r
                                    ) &&
                                        t.indexOf(r) < 0 &&
                                        (n[r] = e[r]);
                                if (
                                    null != e &&
                                    'function' ==
                                        typeof Object.getOwnPropertySymbols
                                ) {
                                    var i = 0;
                                    for (
                                        r = Object.getOwnPropertySymbols(e);
                                        i < r.length;
                                        i++
                                    )
                                        t.indexOf(r[i]) < 0 &&
                                            Object.prototype.propertyIsEnumerable.call(
                                                e,
                                                r[i]
                                            ) &&
                                            (n[r[i]] = e[r[i]]);
                                }
                                return n;
                            })(t, [
                                'autoClosingBrackets',
                                'fontFamily',
                                'fontSize',
                                'insertSpaces',
                                'lineHeight',
                                'lineWrap',
                                'wordWrapColumn',
                                'tabSize',
                                'readOnly',
                            ]),
                            f = Object.assign(
                                {
                                    autoCloseBrackets: !!n && {},
                                    indentUnit: c,
                                    indentWithTabs: !o,
                                    lineWrapping: 'off' !== s,
                                    readOnly: u,
                                },
                                d
                            );
                        return m()(t => {
                            r && (t.style.fontFamily = r),
                                i && (t.style.fontSize = i + 'px'),
                                a && (t.style.lineHeight = a.toString()),
                                u && t.classList.add(_),
                                'wordWrapColumn' === s &&
                                    (t.querySelector(
                                        '.CodeMirror-lines'
                                    ).style.width = `${l}ch`),
                                'bounded' === s &&
                                    (t.querySelector(
                                        '.CodeMirror-lines'
                                    ).style.maxWidth = `${l}ch`),
                                e.appendChild(t);
                        }, f);
                    }),
                        (e.indentMoreOrinsertTab = function(e) {
                            const n = e.getDoc(),
                                r = n.getCursor('from');
                            if (!t(r, n.getCursor('to')))
                                return void m().commands.indentMore(e);
                            const i = n.getLine(r.line).slice(0, r.ch);
                            /^\s*$/.test(i)
                                ? m().commands.indentMore(e)
                                : e.getOption('indentWithTabs')
                                ? m().commands.insertTab(e)
                                : m().commands.insertSoftTab(e);
                        }),
                        (e.delSpaceToPrevTabStop = function(e) {
                            var n;
                            const r = e.getDoc(),
                                i =
                                    null !== (n = e.getOption('indentUnit')) &&
                                    void 0 !== n
                                        ? n
                                        : 2,
                                o = r.listSelections();
                            for (let n = o.length - 1; n >= 0; n--) {
                                const a = o[n].head,
                                    s = o[n].anchor;
                                if (t(a, s))
                                    if (
                                        null !==
                                        r
                                            .getLine(a.line)
                                            .substring(0, a.ch)
                                            .match(/^\ +$/)
                                    ) {
                                        const e = (Math.ceil(a.ch / i) - 1) * i,
                                            t = m().Pos(a.line, e);
                                        r.replaceRange('', t, a);
                                    } else {
                                        const t = e.findPosH(a, -1, 'char', !1);
                                        r.replaceRange('', t, a);
                                    }
                                else r.replaceRange('', s, a);
                            }
                        }),
                        (e.posEq = t),
                        (e.setOption = function(e, t, r, i) {
                            const o = e.getWrapperElement();
                            switch (t) {
                                case 'cursorBlinkRate':
                                case 'showTrailingSpace':
                                default:
                                    e.setOption(t, r);
                                    break;
                                case 'lineWrap': {
                                    const t = 'off' !== r,
                                        n = o.querySelector(
                                            '.CodeMirror-lines'
                                        ),
                                        a =
                                            'bounded' === r
                                                ? `${i.wordWrapColumn}ch`
                                                : null,
                                        s =
                                            'wordWrapColumn' === r
                                                ? `${i.wordWrapColumn}ch`
                                                : null;
                                    n.style.setProperty('max-width', a),
                                        n.style.setProperty('width', s),
                                        e.setOption('lineWrapping', t);
                                    break;
                                }
                                case 'wordWrapColumn': {
                                    const { lineWrap: e } = i;
                                    if (
                                        'wordWrapColumn' === e ||
                                        'bounded' === e
                                    ) {
                                        const t =
                                            'wordWrapColumn' === e
                                                ? 'width'
                                                : 'maxWidth';
                                        o.querySelector(
                                            '.CodeMirror-lines'
                                        ).style[t] = `${r}ch`;
                                    }
                                    break;
                                }
                                case 'tabSize':
                                    e.setOption('indentUnit', r);
                                    break;
                                case 'insertSpaces':
                                    e.setOption('indentWithTabs', !r);
                                    break;
                                case 'autoClosingBrackets':
                                    e.setOption('autoCloseBrackets', r);
                                    break;
                                case 'rulers': {
                                    const t = r;
                                    e.setOption(
                                        'rulers',
                                        t.map(e => ({
                                            column: e,
                                            className: 'jp-CodeMirror-ruler',
                                        }))
                                    );
                                    break;
                                }
                                case 'readOnly':
                                    o.classList.toggle(_, r), e.setOption(t, r);
                                    break;
                                case 'fontFamily':
                                    o.style.fontFamily = r;
                                    break;
                                case 'fontSize':
                                    o.style.setProperty(
                                        'font-size',
                                        r ? r + 'px' : null
                                    );
                                    break;
                                case 'lineHeight':
                                    o.style.lineHeight = r
                                        ? r.toString()
                                        : null;
                                    break;
                                case 'gutters':
                                    e.setOption(t, n(i));
                                    break;
                                case 'lineNumbers':
                                    e.setOption(t, r),
                                        e.setOption('gutters', n(i));
                                    break;
                                case 'codeFolding':
                                    e.setOption('foldGutter', r),
                                        e.setOption('gutters', n(i));
                            }
                        });
                })(M || (M = {})),
                S.addCommand('delSpaceToPrevTabStop', M.delSpaceToPrevTabStop),
                S.addCommand('indentMoreOrinsertTab', M.indentMoreOrinsertTab);
            class L {
                constructor(e = {}, t) {
                    (this.newInlineEditor = e => (
                        (e.host.dataset.type = 'inline'),
                        new S(
                            Object.assign(Object.assign({}, e), {
                                config: Object.assign(
                                    Object.assign(
                                        {},
                                        this.inlineCodeMirrorConfig
                                    ),
                                    e.config || {}
                                ),
                                translator: this.translator,
                            })
                        )
                    )),
                        (this.newDocumentEditor = e => (
                            (e.host.dataset.type = 'document'),
                            new S(
                                Object.assign(Object.assign({}, e), {
                                    config: Object.assign(
                                        Object.assign(
                                            {},
                                            this.documentCodeMirrorConfig
                                        ),
                                        e.config || {}
                                    ),
                                    translator: this.translator,
                                })
                            )
                        )),
                        (this.translator = t || r.nullTranslator),
                        (this.inlineCodeMirrorConfig = Object.assign(
                            Object.assign(Object.assign({}, S.defaultConfig), {
                                extraKeys: {
                                    'Cmd-Right': 'goLineRight',
                                    End: 'goLineRight',
                                    'Cmd-Left': 'goLineLeft',
                                    Tab: 'indentMoreOrinsertTab',
                                    'Shift-Tab': 'indentLess',
                                    'Cmd-/': e =>
                                        e.toggleComment({ indent: !0 }),
                                    'Ctrl-/': e =>
                                        e.toggleComment({ indent: !0 }),
                                    'Ctrl-G': 'find',
                                    'Cmd-G': 'find',
                                },
                            }),
                            e
                        )),
                        (this.documentCodeMirrorConfig = Object.assign(
                            Object.assign(Object.assign({}, S.defaultConfig), {
                                extraKeys: {
                                    Tab: 'indentMoreOrinsertTab',
                                    'Shift-Tab': 'indentLess',
                                    'Cmd-/': e =>
                                        e.toggleComment({ indent: !0 }),
                                    'Ctrl-/': e =>
                                        e.toggleComment({ indent: !0 }),
                                    'Shift-Enter': () => {},
                                },
                                lineNumbers: !0,
                                scrollPastEnd: !0,
                            }),
                            e
                        ));
                }
            }
            class T {
                getMimeTypeByLanguage(e) {
                    const t = e.file_extension || '';
                    return k.findBest(
                        e.codemirror_mode || {
                            mimetype: e.mimetype,
                            name: e.name,
                            ext: [t.split('.').slice(-1)[0]],
                        }
                    ).mime;
                }
                getMimeTypeByFilePath(e) {
                    const t = C.PathExt.extname(e);
                    return '.ipy' === t
                        ? 'text/x-python'
                        : '.md' === t
                        ? 'text/x-ipythongfm'
                        : (k.findByFileName(e) || k.findBest('')).mime;
                }
            }
            var F = n(89934),
                E = n(86098),
                A = n(62471),
                P = n.n(A);
            function D(e) {
                return P().createElement(F.TextItem, {
                    source: e.mode,
                    onClick: e.handleClick,
                });
            }
            class z extends i.VDomRenderer {
                constructor(e) {
                    super(new z.Model()),
                        (this._handleClick = () => {
                            const e = new E.Menu({ commands: this._commands });
                            this._popup && this._popup.dispose(),
                                k
                                    .getModeInfo()
                                    .sort((e, t) => {
                                        const n = e.name || '',
                                            r = t.name || '';
                                        return n.localeCompare(r);
                                    })
                                    .forEach(t => {
                                        if (0 === t.mode.indexOf('brainf'))
                                            return;
                                        const n = {
                                            insertSpaces: !0,
                                            name: t.name,
                                        };
                                        e.addItem({
                                            command: 'codemirror:change-mode',
                                            args: n,
                                        });
                                    }),
                                (this._popup = (0, F.showPopup)({
                                    body: e,
                                    anchor: this,
                                    align: 'left',
                                }));
                        }),
                        (this._popup = null),
                        (this._commands = e.commands),
                        (this.translator = e.translator || r.nullTranslator);
                    const t = this.translator.load('jupyterlab');
                    this.addClass(F.interactiveItem),
                        (this.title.caption = t.__(
                            'Change text editor syntax highlighting'
                        ));
                }
                render() {
                    return this.model
                        ? P().createElement(D, {
                              mode: this.model.mode,
                              handleClick: this._handleClick,
                          })
                        : null;
                }
            }
            !(function(e) {
                class t extends i.VDomModel {
                    constructor() {
                        super(...arguments),
                            (this._onMIMETypeChange = (e, t) => {
                                const n = this._mode,
                                    r = k.findByMIME(t.newValue);
                                (this._mode = r.name || r.mode),
                                    this._triggerChange(n, this._mode);
                            }),
                            (this._mode = ''),
                            (this._editor = null);
                    }
                    get mode() {
                        return this._mode;
                    }
                    get editor() {
                        return this._editor;
                    }
                    set editor(e) {
                        const t = this._editor;
                        null !== t &&
                            t.model.mimeTypeChanged.disconnect(
                                this._onMIMETypeChange
                            );
                        const n = this._mode;
                        if (((this._editor = e), null === this._editor))
                            this._mode = '';
                        else {
                            const e = k.findByMIME(this._editor.model.mimeType);
                            (this._mode = e.name || e.mode),
                                this._editor.model.mimeTypeChanged.connect(
                                    this._onMIMETypeChange
                                );
                        }
                        this._triggerChange(n, this._mode);
                    }
                    _triggerChange(e, t) {
                        e !== t && this.stateChanged.emit(void 0);
                    }
                }
                e.Model = t;
            })(z || (z = {}));
            const O = new s.Token('@jupyterlab/codemirror:ICodeMirror'),
                I = { factoryService: new L(), mimeTypeService: new T() };
        },
        76234: (e, t, n) => {
            !(function(e) {
                'use strict';
                var t = {},
                    n = /[^\s\u00a0]/,
                    r = e.Pos,
                    i = e.cmpPos;
                function o(e) {
                    var t = e.search(n);
                    return -1 == t ? 0 : t;
                }
                function a(e, t) {
                    var n = e.getMode();
                    return !1 !== n.useInnerComments && n.innerMode
                        ? e.getModeAt(t)
                        : n;
                }
                (e.commands.toggleComment = function(e) {
                    e.toggleComment();
                }),
                    e.defineExtension('toggleComment', function(e) {
                        e || (e = t);
                        for (
                            var n = this,
                                i = 1 / 0,
                                o = this.listSelections(),
                                a = null,
                                s = o.length - 1;
                            s >= 0;
                            s--
                        ) {
                            var l = o[s].from(),
                                c = o[s].to();
                            l.line >= i ||
                                (c.line >= i && (c = r(i, 0)),
                                (i = l.line),
                                null == a
                                    ? n.uncomment(l, c, e)
                                        ? (a = 'un')
                                        : (n.lineComment(l, c, e), (a = 'line'))
                                    : 'un' == a
                                    ? n.uncomment(l, c, e)
                                    : n.lineComment(l, c, e));
                        }
                    }),
                    e.defineExtension('lineComment', function(e, i, s) {
                        s || (s = t);
                        var l,
                            c,
                            u = this,
                            d = a(u, e),
                            m = u.getLine(e.line);
                        if (
                            null != m &&
                            ((l = e),
                            (c = m),
                            !/\bstring\b/.test(
                                u.getTokenTypeAt(r(l.line, 0))
                            ) || /^[\'\"\`]/.test(c))
                        ) {
                            var f = s.lineComment || d.lineComment;
                            if (f) {
                                var p = Math.min(
                                        0 != i.ch || i.line == e.line
                                            ? i.line + 1
                                            : i.line,
                                        u.lastLine() + 1
                                    ),
                                    h = null == s.padding ? ' ' : s.padding,
                                    g = s.commentBlankLines || e.line == i.line;
                                u.operation(function() {
                                    if (s.indent) {
                                        for (
                                            var t = null, i = e.line;
                                            i < p;
                                            ++i
                                        ) {
                                            var a = (l = u.getLine(i)).slice(
                                                0,
                                                o(l)
                                            );
                                            (null == t ||
                                                t.length > a.length) &&
                                                (t = a);
                                        }
                                        for (i = e.line; i < p; ++i) {
                                            var l = u.getLine(i),
                                                c = t.length;
                                            (g || n.test(l)) &&
                                                (l.slice(0, c) != t &&
                                                    (c = o(l)),
                                                u.replaceRange(
                                                    t + f + h,
                                                    r(i, 0),
                                                    r(i, c)
                                                ));
                                        }
                                    } else for (i = e.line; i < p; ++i) (g || n.test(u.getLine(i))) && u.replaceRange(f + h, r(i, 0));
                                });
                            } else
                                (s.blockCommentStart || d.blockCommentStart) &&
                                    ((s.fullLines = !0),
                                    u.blockComment(e, i, s));
                        }
                    }),
                    e.defineExtension('blockComment', function(e, o, s) {
                        s || (s = t);
                        var l = this,
                            c = a(l, e),
                            u = s.blockCommentStart || c.blockCommentStart,
                            d = s.blockCommentEnd || c.blockCommentEnd;
                        if (u && d) {
                            if (
                                !/\bcomment\b/.test(
                                    l.getTokenTypeAt(r(e.line, 0))
                                )
                            ) {
                                var m = Math.min(o.line, l.lastLine());
                                m != e.line &&
                                    0 == o.ch &&
                                    n.test(l.getLine(m)) &&
                                    --m;
                                var f = null == s.padding ? ' ' : s.padding;
                                e.line > m ||
                                    l.operation(function() {
                                        if (0 != s.fullLines) {
                                            var t = n.test(l.getLine(m));
                                            l.replaceRange(f + d, r(m)),
                                                l.replaceRange(
                                                    u + f,
                                                    r(e.line, 0)
                                                );
                                            var a =
                                                s.blockCommentLead ||
                                                c.blockCommentLead;
                                            if (null != a)
                                                for (
                                                    var p = e.line + 1;
                                                    p <= m;
                                                    ++p
                                                )
                                                    (p != m || t) &&
                                                        l.replaceRange(
                                                            a + f,
                                                            r(p, 0)
                                                        );
                                        } else {
                                            var h =
                                                    0 ==
                                                    i(l.getCursor('to'), o),
                                                g = !l.somethingSelected();
                                            l.replaceRange(d, o),
                                                h &&
                                                    l.setSelection(
                                                        g
                                                            ? o
                                                            : l.getCursor(
                                                                  'from'
                                                              ),
                                                        o
                                                    ),
                                                l.replaceRange(u, e);
                                        }
                                    });
                            }
                        } else
                            (s.lineComment || c.lineComment) &&
                                0 != s.fullLines &&
                                l.lineComment(e, o, s);
                    }),
                    e.defineExtension('uncomment', function(e, i, o) {
                        o || (o = t);
                        var s,
                            l = this,
                            c = a(l, e),
                            u = Math.min(
                                0 != i.ch || i.line == e.line
                                    ? i.line
                                    : i.line - 1,
                                l.lastLine()
                            ),
                            d = Math.min(e.line, u),
                            m = o.lineComment || c.lineComment,
                            f = [],
                            p = null == o.padding ? ' ' : o.padding;
                        e: if (m) {
                            for (var h = d; h <= u; ++h) {
                                var g = l.getLine(h),
                                    b = g.indexOf(m);
                                if (
                                    (b > -1 &&
                                        !/comment/.test(
                                            l.getTokenTypeAt(r(h, b + 1))
                                        ) &&
                                        (b = -1),
                                    -1 == b && n.test(g))
                                )
                                    break e;
                                if (b > -1 && n.test(g.slice(0, b))) break e;
                                f.push(g);
                            }
                            if (
                                (l.operation(function() {
                                    for (var e = d; e <= u; ++e) {
                                        var t = f[e - d],
                                            n = t.indexOf(m),
                                            i = n + m.length;
                                        n < 0 ||
                                            (t.slice(i, i + p.length) == p &&
                                                (i += p.length),
                                            (s = !0),
                                            l.replaceRange(
                                                '',
                                                r(e, n),
                                                r(e, i)
                                            ));
                                    }
                                }),
                                s)
                            )
                                return !0;
                        }
                        var v = o.blockCommentStart || c.blockCommentStart,
                            x = o.blockCommentEnd || c.blockCommentEnd;
                        if (!v || !x) return !1;
                        var y = o.blockCommentLead || c.blockCommentLead,
                            k = l.getLine(d),
                            w = k.indexOf(v);
                        if (-1 == w) return !1;
                        var C = u == d ? k : l.getLine(u),
                            _ = C.indexOf(x, u == d ? w + v.length : 0),
                            S = r(d, w + 1),
                            M = r(u, _ + 1);
                        if (
                            -1 == _ ||
                            !/comment/.test(l.getTokenTypeAt(S)) ||
                            !/comment/.test(l.getTokenTypeAt(M)) ||
                            l.getRange(S, M, '\n').indexOf(x) > -1
                        )
                            return !1;
                        var L = k.lastIndexOf(v, e.ch),
                            T =
                                -1 == L
                                    ? -1
                                    : k.slice(0, e.ch).indexOf(x, L + v.length);
                        if (-1 != L && -1 != T && T + x.length != e.ch)
                            return !1;
                        T = C.indexOf(x, i.ch);
                        var F = C.slice(i.ch).lastIndexOf(v, T - i.ch);
                        return (
                            (L = -1 == T || -1 == F ? -1 : i.ch + F),
                            (-1 == T || -1 == L || L == i.ch) &&
                                (l.operation(function() {
                                    l.replaceRange(
                                        '',
                                        r(
                                            u,
                                            _ -
                                                (p &&
                                                C.slice(_ - p.length, _) == p
                                                    ? p.length
                                                    : 0)
                                        ),
                                        r(u, _ + x.length)
                                    );
                                    var e = w + v.length;
                                    if (
                                        (p &&
                                            k.slice(e, e + p.length) == p &&
                                            (e += p.length),
                                        l.replaceRange('', r(d, w), r(d, e)),
                                        y)
                                    )
                                        for (var t = d + 1; t <= u; ++t) {
                                            var i = l.getLine(t),
                                                o = i.indexOf(y);
                                            if (
                                                -1 != o &&
                                                !n.test(i.slice(0, o))
                                            ) {
                                                var a = o + y.length;
                                                p &&
                                                    i.slice(a, a + p.length) ==
                                                        p &&
                                                    (a += p.length),
                                                    l.replaceRange(
                                                        '',
                                                        r(t, o),
                                                        r(t, a)
                                                    );
                                            }
                                        }
                                }),
                                !0)
                        );
                    });
            })(n(25747));
        },
        4218: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(t) {
                    t.state.rulerDiv.textContent = '';
                    var n = t.getOption('rulers'),
                        r = t.defaultCharWidth(),
                        i = t.charCoords(e.Pos(t.firstLine(), 0), 'div').left;
                    t.state.rulerDiv.style.minHeight =
                        t.display.scroller.offsetHeight + 30 + 'px';
                    for (var o = 0; o < n.length; o++) {
                        var a = document.createElement('div');
                        a.className = 'CodeMirror-ruler';
                        var s,
                            l = n[o];
                        'number' == typeof l
                            ? (s = l)
                            : ((s = l.column),
                              l.className && (a.className += ' ' + l.className),
                              l.color && (a.style.borderColor = l.color),
                              l.lineStyle &&
                                  (a.style.borderLeftStyle = l.lineStyle),
                              l.width && (a.style.borderLeftWidth = l.width)),
                            (a.style.left = i + s * r + 'px'),
                            t.state.rulerDiv.appendChild(a);
                    }
                }
                e.defineOption('rulers', !1, function(e, n) {
                    e.state.rulerDiv &&
                        (e.state.rulerDiv.parentElement.removeChild(
                            e.state.rulerDiv
                        ),
                        (e.state.rulerDiv = null),
                        e.off('refresh', t)),
                        n &&
                            n.length &&
                            ((e.state.rulerDiv = e.display.lineSpace.parentElement.insertBefore(
                                document.createElement('div'),
                                e.display.lineSpace
                            )),
                            (e.state.rulerDiv.className = 'CodeMirror-rulers'),
                            t(e),
                            e.on('refresh', t));
                });
            })(n(25747));
        },
        37643: (e, t, n) => {
            !(function(e) {
                var t = {
                        pairs: '()[]{}\'\'""',
                        closeBefore: ')]}\'":;>',
                        triples: '',
                        explode: '[]{}',
                    },
                    n = e.Pos;
                function r(e, n) {
                    return 'pairs' == n && 'string' == typeof e
                        ? e
                        : 'object' == typeof e && null != e[n]
                        ? e[n]
                        : t[n];
                }
                e.defineOption('autoCloseBrackets', !1, function(t, n, a) {
                    a &&
                        a != e.Init &&
                        (t.removeKeyMap(i), (t.state.closeBrackets = null)),
                        n &&
                            (o(r(n, 'pairs')),
                            (t.state.closeBrackets = n),
                            t.addKeyMap(i));
                });
                var i = {
                    Backspace: function(t) {
                        var i = s(t);
                        if (!i || t.getOption('disableInput')) return e.Pass;
                        for (
                            var o = r(i, 'pairs'),
                                a = t.listSelections(),
                                l = 0;
                            l < a.length;
                            l++
                        ) {
                            if (!a[l].empty()) return e.Pass;
                            var c = u(t, a[l].head);
                            if (!c || o.indexOf(c) % 2 != 0) return e.Pass;
                        }
                        for (l = a.length - 1; l >= 0; l--) {
                            var d = a[l].head;
                            t.replaceRange(
                                '',
                                n(d.line, d.ch - 1),
                                n(d.line, d.ch + 1),
                                '+delete'
                            );
                        }
                    },
                    Enter: function(t) {
                        var n = s(t),
                            i = n && r(n, 'explode');
                        if (!i || t.getOption('disableInput')) return e.Pass;
                        for (
                            var o = t.listSelections(), a = 0;
                            a < o.length;
                            a++
                        ) {
                            if (!o[a].empty()) return e.Pass;
                            var c = u(t, o[a].head);
                            if (!c || i.indexOf(c) % 2 != 0) return e.Pass;
                        }
                        t.operation(function() {
                            var e = t.lineSeparator() || '\n';
                            t.replaceSelection(e + e, null),
                                l(t, -1),
                                (o = t.listSelections());
                            for (var n = 0; n < o.length; n++) {
                                var r = o[n].head.line;
                                t.indentLine(r, null, !0),
                                    t.indentLine(r + 1, null, !0);
                            }
                        });
                    },
                };
                function o(e) {
                    for (var t = 0; t < e.length; t++) {
                        var n = e.charAt(t),
                            r = "'" + n + "'";
                        i[r] || (i[r] = a(n));
                    }
                }
                function a(t) {
                    return function(i) {
                        return (function(t, i) {
                            var o = s(t);
                            if (!o || t.getOption('disableInput'))
                                return e.Pass;
                            var a = r(o, 'pairs'),
                                u = a.indexOf(i);
                            if (-1 == u) return e.Pass;
                            for (
                                var m,
                                    f = r(o, 'closeBefore'),
                                    p = r(o, 'triples'),
                                    h = a.charAt(u + 1) == i,
                                    g = t.listSelections(),
                                    b = u % 2 == 0,
                                    v = 0;
                                v < g.length;
                                v++
                            ) {
                                var x,
                                    y = g[v],
                                    k = y.head,
                                    w = t.getRange(k, n(k.line, k.ch + 1));
                                if (b && !y.empty()) x = 'surround';
                                else if ((!h && b) || w != i)
                                    if (
                                        h &&
                                        k.ch > 1 &&
                                        p.indexOf(i) >= 0 &&
                                        t.getRange(n(k.line, k.ch - 2), k) ==
                                            i + i
                                    ) {
                                        if (
                                            k.ch > 2 &&
                                            /\bstring/.test(
                                                t.getTokenTypeAt(
                                                    n(k.line, k.ch - 2)
                                                )
                                            )
                                        )
                                            return e.Pass;
                                        x = 'addFour';
                                    } else if (h) {
                                        var C =
                                            0 == k.ch
                                                ? ' '
                                                : t.getRange(
                                                      n(k.line, k.ch - 1),
                                                      k
                                                  );
                                        if (
                                            e.isWordChar(w) ||
                                            C == i ||
                                            e.isWordChar(C)
                                        )
                                            return e.Pass;
                                        x = 'both';
                                    } else {
                                        if (
                                            !b ||
                                            !(
                                                0 === w.length ||
                                                /\s/.test(w) ||
                                                f.indexOf(w) > -1
                                            )
                                        )
                                            return e.Pass;
                                        x = 'both';
                                    }
                                else
                                    x =
                                        h && d(t, k)
                                            ? 'both'
                                            : p.indexOf(i) >= 0 &&
                                              t.getRange(
                                                  k,
                                                  n(k.line, k.ch + 3)
                                              ) ==
                                                  i + i + i
                                            ? 'skipThree'
                                            : 'skip';
                                if (m) {
                                    if (m != x) return e.Pass;
                                } else m = x;
                            }
                            var _ = u % 2 ? a.charAt(u - 1) : i,
                                S = u % 2 ? i : a.charAt(u + 1);
                            t.operation(function() {
                                if ('skip' == m) l(t, 1);
                                else if ('skipThree' == m) l(t, 3);
                                else if ('surround' == m) {
                                    for (
                                        var e = t.getSelections(), n = 0;
                                        n < e.length;
                                        n++
                                    )
                                        e[n] = _ + e[n] + S;
                                    for (
                                        t.replaceSelections(e, 'around'),
                                            e = t.listSelections().slice(),
                                            n = 0;
                                        n < e.length;
                                        n++
                                    )
                                        e[n] = c(e[n]);
                                    t.setSelections(e);
                                } else
                                    'both' == m
                                        ? (t.replaceSelection(_ + S, null),
                                          t.triggerElectric(_ + S),
                                          l(t, -1))
                                        : 'addFour' == m &&
                                          (t.replaceSelection(
                                              _ + _ + _ + _,
                                              'before'
                                          ),
                                          l(t, 1));
                            });
                        })(i, t);
                    };
                }
                function s(e) {
                    var t = e.state.closeBrackets;
                    return !t || t.override
                        ? t
                        : e.getModeAt(e.getCursor()).closeBrackets || t;
                }
                function l(e, t) {
                    for (
                        var n = [], r = e.listSelections(), i = 0, o = 0;
                        o < r.length;
                        o++
                    ) {
                        var a = r[o];
                        a.head == e.getCursor() && (i = o);
                        var s =
                            a.head.ch || t > 0
                                ? { line: a.head.line, ch: a.head.ch + t }
                                : { line: a.head.line - 1 };
                        n.push({ anchor: s, head: s });
                    }
                    e.setSelections(n, i);
                }
                function c(t) {
                    var r = e.cmpPos(t.anchor, t.head) > 0;
                    return {
                        anchor: new n(
                            t.anchor.line,
                            t.anchor.ch + (r ? -1 : 1)
                        ),
                        head: new n(t.head.line, t.head.ch + (r ? 1 : -1)),
                    };
                }
                function u(e, t) {
                    var r = e.getRange(
                        n(t.line, t.ch - 1),
                        n(t.line, t.ch + 1)
                    );
                    return 2 == r.length ? r : null;
                }
                function d(e, t) {
                    var r = e.getTokenAt(n(t.line, t.ch + 1));
                    return (
                        /\bstring/.test(r.type) &&
                        r.start == t.ch &&
                        (0 == t.ch || !/\bstring/.test(e.getTokenTypeAt(t)))
                    );
                }
                o(t.pairs + '`');
            })(n(25747));
        },
        54206: (e, t, n) => {
            var r;
            (r = n(25747)).defineOption('showTrailingSpace', !1, function(
                e,
                t,
                n
            ) {
                n == r.Init && (n = !1),
                    n && !t
                        ? e.removeOverlay('trailingspace')
                        : !n &&
                          t &&
                          e.addOverlay({
                              token: function(e) {
                                  for (
                                      var t = e.string.length, n = t;
                                      n && /\s/.test(e.string.charAt(n - 1));
                                      --n
                                  );
                                  return n > e.pos
                                      ? ((e.pos = n), null)
                                      : ((e.pos = t), 'trailingspace');
                              },
                              name: 'trailingspace',
                          });
            });
        },
        41652: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.registerHelper('fold', 'brace', function(t, n) {
                    var r,
                        i = n.line,
                        o = t.getLine(i);
                    function a(a) {
                        for (var s = n.ch, l = 0; ; ) {
                            var c = s <= 0 ? -1 : o.lastIndexOf(a, s - 1);
                            if (-1 != c) {
                                if (1 == l && c < n.ch) break;
                                if (
                                    ((r = t.getTokenTypeAt(e.Pos(i, c + 1))),
                                    !/^(comment|string)/.test(r))
                                )
                                    return c + 1;
                                s = c - 1;
                            } else {
                                if (1 == l) break;
                                (l = 1), (s = o.length);
                            }
                        }
                    }
                    var s,
                        l,
                        c,
                        u = a('{'),
                        d = a('[');
                    if (null != u && (null == d || d > u))
                        (c = u), (s = '{'), (l = '}');
                    else {
                        if (null == d) return;
                        (c = d), (s = '['), (l = ']');
                    }
                    var m,
                        f,
                        p = 1,
                        h = t.lastLine();
                    e: for (var g = i; g <= h; ++g)
                        for (var b = t.getLine(g), v = g == i ? c : 0; ; ) {
                            var x = b.indexOf(s, v),
                                y = b.indexOf(l, v);
                            if (
                                (x < 0 && (x = b.length),
                                y < 0 && (y = b.length),
                                (v = Math.min(x, y)) == b.length)
                            )
                                break;
                            if (t.getTokenTypeAt(e.Pos(g, v + 1)) == r)
                                if (v == x) ++p;
                                else if (!--p) {
                                    (m = g), (f = v);
                                    break e;
                                }
                            ++v;
                        }
                    if (null != m && i != m)
                        return { from: e.Pos(i, c), to: e.Pos(m, f) };
                }),
                    e.registerHelper('fold', 'import', function(t, n) {
                        function r(n) {
                            if (n < t.firstLine() || n > t.lastLine())
                                return null;
                            var r = t.getTokenAt(e.Pos(n, 1));
                            if (
                                (/\S/.test(r.string) ||
                                    (r = t.getTokenAt(e.Pos(n, r.end + 1))),
                                'keyword' != r.type || 'import' != r.string)
                            )
                                return null;
                            for (
                                var i = n, o = Math.min(t.lastLine(), n + 10);
                                i <= o;
                                ++i
                            ) {
                                var a = t.getLine(i).indexOf(';');
                                if (-1 != a)
                                    return { startCh: r.end, end: e.Pos(i, a) };
                            }
                        }
                        var i,
                            o = n.line,
                            a = r(o);
                        if (
                            !a ||
                            r(o - 1) ||
                            ((i = r(o - 2)) && i.end.line == o - 1)
                        )
                            return null;
                        for (var s = a.end; ; ) {
                            var l = r(s.line + 1);
                            if (null == l) break;
                            s = l.end;
                        }
                        return {
                            from: t.clipPos(e.Pos(o, a.startCh + 1)),
                            to: s,
                        };
                    }),
                    e.registerHelper('fold', 'include', function(t, n) {
                        function r(n) {
                            if (n < t.firstLine() || n > t.lastLine())
                                return null;
                            var r = t.getTokenAt(e.Pos(n, 1));
                            return (
                                /\S/.test(r.string) ||
                                    (r = t.getTokenAt(e.Pos(n, r.end + 1))),
                                'meta' == r.type &&
                                '#include' == r.string.slice(0, 8)
                                    ? r.start + 8
                                    : void 0
                            );
                        }
                        var i = n.line,
                            o = r(i);
                        if (null == o || null != r(i - 1)) return null;
                        for (var a = i; null != r(a + 1); ) ++a;
                        return {
                            from: e.Pos(i, o + 1),
                            to: t.clipPos(e.Pos(a)),
                        };
                    });
            })(n(25747));
        },
        12575: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.registerGlobalHelper(
                    'fold',
                    'comment',
                    function(e) {
                        return e.blockCommentStart && e.blockCommentEnd;
                    },
                    function(t, n) {
                        var r = t.getModeAt(n),
                            i = r.blockCommentStart,
                            o = r.blockCommentEnd;
                        if (i && o) {
                            for (
                                var a,
                                    s = n.line,
                                    l = t.getLine(s),
                                    c = n.ch,
                                    u = 0;
                                ;

                            ) {
                                var d = c <= 0 ? -1 : l.lastIndexOf(i, c - 1);
                                if (-1 != d) {
                                    if (1 == u && d < n.ch) return;
                                    if (
                                        /comment/.test(
                                            t.getTokenTypeAt(e.Pos(s, d + 1))
                                        ) &&
                                        (0 == d ||
                                            l.slice(d - o.length, d) == o ||
                                            !/comment/.test(
                                                t.getTokenTypeAt(e.Pos(s, d))
                                            ))
                                    ) {
                                        a = d + i.length;
                                        break;
                                    }
                                    c = d - 1;
                                } else {
                                    if (1 == u) return;
                                    (u = 1), (c = l.length);
                                }
                            }
                            var m,
                                f,
                                p = 1,
                                h = t.lastLine();
                            e: for (var g = s; g <= h; ++g)
                                for (
                                    var b = t.getLine(g), v = g == s ? a : 0;
                                    ;

                                ) {
                                    var x = b.indexOf(i, v),
                                        y = b.indexOf(o, v);
                                    if (
                                        (x < 0 && (x = b.length),
                                        y < 0 && (y = b.length),
                                        (v = Math.min(x, y)) == b.length)
                                    )
                                        break;
                                    if (v == x) ++p;
                                    else if (!--p) {
                                        (m = g), (f = v);
                                        break e;
                                    }
                                    ++v;
                                }
                            if (null != m && (s != m || f != a))
                                return { from: e.Pos(s, a), to: e.Pos(m, f) };
                        }
                    }
                );
            })(n(25747));
        },
        74305: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(t, n, i, o) {
                    if (i && i.call) {
                        var a = i;
                        i = null;
                    } else a = r(t, i, 'rangeFinder');
                    'number' == typeof n && (n = e.Pos(n, 0));
                    var s = r(t, i, 'minFoldSize');
                    function l(e) {
                        var r = a(t, n);
                        if (!r || r.to.line - r.from.line < s) return null;
                        for (
                            var i = t.findMarksAt(r.from), l = 0;
                            l < i.length;
                            ++l
                        )
                            if (i[l].__isFold && 'fold' !== o) {
                                if (!e) return null;
                                (r.cleared = !0), i[l].clear();
                            }
                        return r;
                    }
                    var c = l(!0);
                    if (r(t, i, 'scanUp'))
                        for (; !c && n.line > t.firstLine(); )
                            (n = e.Pos(n.line - 1, 0)), (c = l(!1));
                    if (c && !c.cleared && 'unfold' !== o) {
                        var u = (function(e, t, n) {
                            var i = r(e, t, 'widget');
                            if (
                                ('function' == typeof i &&
                                    (i = i(n.from, n.to)),
                                'string' == typeof i)
                            ) {
                                var o = document.createTextNode(i);
                                (i = document.createElement(
                                    'span'
                                )).appendChild(o),
                                    (i.className = 'CodeMirror-foldmarker');
                            } else i && (i = i.cloneNode(!0));
                            return i;
                        })(t, i, c);
                        e.on(u, 'mousedown', function(t) {
                            d.clear(), e.e_preventDefault(t);
                        });
                        var d = t.markText(c.from, c.to, {
                            replacedWith: u,
                            clearOnEnter: r(t, i, 'clearOnEnter'),
                            __isFold: !0,
                        });
                        d.on('clear', function(n, r) {
                            e.signal(t, 'unfold', t, n, r);
                        }),
                            e.signal(t, 'fold', t, c.from, c.to);
                    }
                }
                (e.newFoldFunction = function(e, n) {
                    return function(r, i) {
                        t(r, i, { rangeFinder: e, widget: n });
                    };
                }),
                    e.defineExtension('foldCode', function(e, n, r) {
                        t(this, e, n, r);
                    }),
                    e.defineExtension('isFolded', function(e) {
                        for (
                            var t = this.findMarksAt(e), n = 0;
                            n < t.length;
                            ++n
                        )
                            if (t[n].__isFold) return !0;
                    }),
                    (e.commands.toggleFold = function(e) {
                        e.foldCode(e.getCursor());
                    }),
                    (e.commands.fold = function(e) {
                        e.foldCode(e.getCursor(), null, 'fold');
                    }),
                    (e.commands.unfold = function(e) {
                        e.foldCode(e.getCursor(), null, 'unfold');
                    }),
                    (e.commands.foldAll = function(t) {
                        t.operation(function() {
                            for (
                                var n = t.firstLine(), r = t.lastLine();
                                n <= r;
                                n++
                            )
                                t.foldCode(e.Pos(n, 0), null, 'fold');
                        });
                    }),
                    (e.commands.unfoldAll = function(t) {
                        t.operation(function() {
                            for (
                                var n = t.firstLine(), r = t.lastLine();
                                n <= r;
                                n++
                            )
                                t.foldCode(e.Pos(n, 0), null, 'unfold');
                        });
                    }),
                    e.registerHelper('fold', 'combine', function() {
                        var e = Array.prototype.slice.call(arguments, 0);
                        return function(t, n) {
                            for (var r = 0; r < e.length; ++r) {
                                var i = e[r](t, n);
                                if (i) return i;
                            }
                        };
                    }),
                    e.registerHelper('fold', 'auto', function(e, t) {
                        for (
                            var n = e.getHelpers(t, 'fold'), r = 0;
                            r < n.length;
                            r++
                        ) {
                            var i = n[r](e, t);
                            if (i) return i;
                        }
                    });
                var n = {
                    rangeFinder: e.fold.auto,
                    widget: '↔',
                    minFoldSize: 0,
                    scanUp: !1,
                    clearOnEnter: !0,
                };
                function r(e, t, r) {
                    if (t && void 0 !== t[r]) return t[r];
                    var i = e.options.foldOptions;
                    return i && void 0 !== i[r] ? i[r] : n[r];
                }
                e.defineOption('foldOptions', null),
                    e.defineExtension('foldOption', function(e, t) {
                        return r(this, e, t);
                    });
            })(n(25747));
        },
        22842: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.defineOption('foldGutter', !1, function(t, r, i) {
                    var o;
                    i &&
                        i != e.Init &&
                        (t.clearGutter(t.state.foldGutter.options.gutter),
                        (t.state.foldGutter = null),
                        t.off('gutterClick', l),
                        t.off('changes', c),
                        t.off('viewportChange', u),
                        t.off('fold', d),
                        t.off('unfold', d),
                        t.off('swapDoc', c)),
                        r &&
                            ((t.state.foldGutter = new n(
                                (!0 === (o = r) && (o = {}),
                                null == o.gutter &&
                                    (o.gutter = 'CodeMirror-foldgutter'),
                                null == o.indicatorOpen &&
                                    (o.indicatorOpen =
                                        'CodeMirror-foldgutter-open'),
                                null == o.indicatorFolded &&
                                    (o.indicatorFolded =
                                        'CodeMirror-foldgutter-folded'),
                                o)
                            )),
                            s(t),
                            t.on('gutterClick', l),
                            t.on('changes', c),
                            t.on('viewportChange', u),
                            t.on('fold', d),
                            t.on('unfold', d),
                            t.on('swapDoc', c));
                });
                var t = e.Pos;
                function n(e) {
                    (this.options = e), (this.from = this.to = 0);
                }
                function r(e, n) {
                    for (
                        var r = e.findMarks(t(n, 0), t(n + 1, 0)), i = 0;
                        i < r.length;
                        ++i
                    )
                        if (r[i].__isFold) {
                            var o = r[i].find(-1);
                            if (o && o.line === n) return r[i];
                        }
                }
                function i(e) {
                    if ('string' == typeof e) {
                        var t = document.createElement('div');
                        return (
                            (t.className =
                                e + ' CodeMirror-guttermarker-subtle'),
                            t
                        );
                    }
                    return e.cloneNode(!0);
                }
                function o(e, n, o) {
                    var s = e.state.foldGutter.options,
                        l = n - 1,
                        c = e.foldOption(s, 'minFoldSize'),
                        u = e.foldOption(s, 'rangeFinder'),
                        d =
                            'string' == typeof s.indicatorFolded &&
                            a(s.indicatorFolded),
                        m =
                            'string' == typeof s.indicatorOpen &&
                            a(s.indicatorOpen);
                    e.eachLine(n, o, function(n) {
                        ++l;
                        var o = null,
                            a = n.gutterMarkers;
                        if ((a && (a = a[s.gutter]), r(e, l))) {
                            if (d && a && d.test(a.className)) return;
                            o = i(s.indicatorFolded);
                        } else {
                            var f = t(l, 0),
                                p = u && u(e, f);
                            if (p && p.to.line - p.from.line >= c) {
                                if (m && a && m.test(a.className)) return;
                                o = i(s.indicatorOpen);
                            }
                        }
                        (o || a) && e.setGutterMarker(n, s.gutter, o);
                    });
                }
                function a(e) {
                    return new RegExp('(^|\\s)' + e + '(?:$|\\s)\\s*');
                }
                function s(e) {
                    var t = e.getViewport(),
                        n = e.state.foldGutter;
                    n &&
                        (e.operation(function() {
                            o(e, t.from, t.to);
                        }),
                        (n.from = t.from),
                        (n.to = t.to));
                }
                function l(e, n, i) {
                    var o = e.state.foldGutter;
                    if (o) {
                        var a = o.options;
                        if (i == a.gutter) {
                            var s = r(e, n);
                            s ? s.clear() : e.foldCode(t(n, 0), a);
                        }
                    }
                }
                function c(e) {
                    var t = e.state.foldGutter;
                    if (t) {
                        var n = t.options;
                        (t.from = t.to = 0),
                            clearTimeout(t.changeUpdate),
                            (t.changeUpdate = setTimeout(function() {
                                s(e);
                            }, n.foldOnChangeTimeSpan || 600));
                    }
                }
                function u(e) {
                    var t = e.state.foldGutter;
                    if (t) {
                        var n = t.options;
                        clearTimeout(t.changeUpdate),
                            (t.changeUpdate = setTimeout(function() {
                                var n = e.getViewport();
                                t.from == t.to ||
                                n.from - t.to > 20 ||
                                t.from - n.to > 20
                                    ? s(e)
                                    : e.operation(function() {
                                          n.from < t.from &&
                                              (o(e, n.from, t.from),
                                              (t.from = n.from)),
                                              n.to > t.to &&
                                                  (o(e, t.to, n.to),
                                                  (t.to = n.to));
                                      });
                            }, n.updateViewportTimeSpan || 400));
                    }
                }
                function d(e, t) {
                    var n = e.state.foldGutter;
                    if (n) {
                        var r = t.line;
                        r >= n.from && r < n.to && o(e, r, r + 1);
                    }
                }
            })(n(25747), n(74305));
        },
        2450: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(t, n) {
                    var r = t.getLine(n),
                        i = r.search(/\S/);
                    return -1 == i ||
                        /\bcomment\b/.test(t.getTokenTypeAt(e.Pos(n, i + 1)))
                        ? -1
                        : e.countColumn(r, null, t.getOption('tabSize'));
                }
                e.registerHelper('fold', 'indent', function(n, r) {
                    var i = t(n, r.line);
                    if (!(i < 0)) {
                        for (
                            var o = null, a = r.line + 1, s = n.lastLine();
                            a <= s;
                            ++a
                        ) {
                            var l = t(n, a);
                            if (-1 == l);
                            else {
                                if (!(l > i)) break;
                                o = a;
                            }
                        }
                        return o
                            ? {
                                  from: e.Pos(r.line, n.getLine(r.line).length),
                                  to: e.Pos(o, n.getLine(o).length),
                              }
                            : void 0;
                    }
                });
            })(n(25747));
        },
        11723: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.registerHelper('fold', 'markdown', function(t, n) {
                    function r(n) {
                        var r = t.getTokenTypeAt(e.Pos(n, 0));
                        return r && /\bheader\b/.test(r);
                    }
                    function i(e, t, n) {
                        var i = t && t.match(/^#+/);
                        return i && r(e)
                            ? i[0].length
                            : (i = n && n.match(/^[=\-]+\s*$/)) && r(e + 1)
                            ? '=' == n[0]
                                ? 1
                                : 2
                            : 100;
                    }
                    var o = t.getLine(n.line),
                        a = t.getLine(n.line + 1),
                        s = i(n.line, o, a);
                    if (100 !== s) {
                        for (
                            var l = t.lastLine(),
                                c = n.line,
                                u = t.getLine(c + 2);
                            c < l && !(i(c + 1, a, u) <= s);

                        )
                            ++c, (a = u), (u = t.getLine(c + 2));
                        return {
                            from: e.Pos(n.line, o.length),
                            to: e.Pos(c, t.getLine(c).length),
                        };
                    }
                });
            })(n(25747));
        },
        48501: (e, t, n) => {
            !(function(e) {
                'use strict';
                var t = e.Pos;
                function n(e, t) {
                    return e.line - t.line || e.ch - t.ch;
                }
                var r =
                        'A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD',
                    i = new RegExp(
                        '<(/?)([' +
                            r +
                            '][' +
                            r +
                            '-:.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*)',
                        'g'
                    );
                function o(e, t, n, r) {
                    (this.line = t),
                        (this.ch = n),
                        (this.cm = e),
                        (this.text = e.getLine(t)),
                        (this.min = r
                            ? Math.max(r.from, e.firstLine())
                            : e.firstLine()),
                        (this.max = r
                            ? Math.min(r.to - 1, e.lastLine())
                            : e.lastLine());
                }
                function a(e, n) {
                    var r = e.cm.getTokenTypeAt(t(e.line, n));
                    return r && /\btag\b/.test(r);
                }
                function s(e) {
                    if (!(e.line >= e.max))
                        return (
                            (e.ch = 0), (e.text = e.cm.getLine(++e.line)), !0
                        );
                }
                function l(e) {
                    if (!(e.line <= e.min))
                        return (
                            (e.text = e.cm.getLine(--e.line)),
                            (e.ch = e.text.length),
                            !0
                        );
                }
                function c(e) {
                    for (;;) {
                        var t = e.text.indexOf('>', e.ch);
                        if (-1 == t) {
                            if (s(e)) continue;
                            return;
                        }
                        if (a(e, t + 1)) {
                            var n = e.text.lastIndexOf('/', t),
                                r =
                                    n > -1 &&
                                    !/\S/.test(e.text.slice(n + 1, t));
                            return (e.ch = t + 1), r ? 'selfClose' : 'regular';
                        }
                        e.ch = t + 1;
                    }
                }
                function u(e) {
                    for (;;) {
                        var t = e.ch ? e.text.lastIndexOf('<', e.ch - 1) : -1;
                        if (-1 == t) {
                            if (l(e)) continue;
                            return;
                        }
                        if (a(e, t + 1)) {
                            (i.lastIndex = t), (e.ch = t);
                            var n = i.exec(e.text);
                            if (n && n.index == t) return n;
                        } else e.ch = t;
                    }
                }
                function d(e) {
                    for (;;) {
                        i.lastIndex = e.ch;
                        var t = i.exec(e.text);
                        if (!t) {
                            if (s(e)) continue;
                            return;
                        }
                        if (a(e, t.index + 1))
                            return (e.ch = t.index + t[0].length), t;
                        e.ch = t.index + 1;
                    }
                }
                function m(e) {
                    for (;;) {
                        var t = e.ch ? e.text.lastIndexOf('>', e.ch - 1) : -1;
                        if (-1 == t) {
                            if (l(e)) continue;
                            return;
                        }
                        if (a(e, t + 1)) {
                            var n = e.text.lastIndexOf('/', t),
                                r =
                                    n > -1 &&
                                    !/\S/.test(e.text.slice(n + 1, t));
                            return (e.ch = t + 1), r ? 'selfClose' : 'regular';
                        }
                        e.ch = t;
                    }
                }
                function f(e, n) {
                    for (var r = []; ; ) {
                        var i,
                            o = d(e),
                            a = e.line,
                            s = e.ch - (o ? o[0].length : 0);
                        if (!o || !(i = c(e))) return;
                        if ('selfClose' != i)
                            if (o[1]) {
                                for (var l = r.length - 1; l >= 0; --l)
                                    if (r[l] == o[2]) {
                                        r.length = l;
                                        break;
                                    }
                                if (l < 0 && (!n || n == o[2]))
                                    return {
                                        tag: o[2],
                                        from: t(a, s),
                                        to: t(e.line, e.ch),
                                    };
                            } else r.push(o[2]);
                    }
                }
                function p(e, n) {
                    for (var r = []; ; ) {
                        var i = m(e);
                        if (!i) return;
                        if ('selfClose' != i) {
                            var o = e.line,
                                a = e.ch,
                                s = u(e);
                            if (!s) return;
                            if (s[1]) r.push(s[2]);
                            else {
                                for (var l = r.length - 1; l >= 0; --l)
                                    if (r[l] == s[2]) {
                                        r.length = l;
                                        break;
                                    }
                                if (l < 0 && (!n || n == s[2]))
                                    return {
                                        tag: s[2],
                                        from: t(e.line, e.ch),
                                        to: t(o, a),
                                    };
                            }
                        } else u(e);
                    }
                }
                e.registerHelper('fold', 'xml', function(e, r) {
                    for (var i = new o(e, r.line, 0); ; ) {
                        var a = d(i);
                        if (!a || i.line != r.line) return;
                        var s = c(i);
                        if (!s) return;
                        if (!a[1] && 'selfClose' != s) {
                            var l = t(i.line, i.ch),
                                u = f(i, a[2]);
                            return u && n(u.from, l) > 0
                                ? { from: l, to: u.from }
                                : null;
                        }
                    }
                }),
                    (e.findMatchingTag = function(e, r, i) {
                        var a = new o(e, r.line, r.ch, i);
                        if (
                            -1 != a.text.indexOf('>') ||
                            -1 != a.text.indexOf('<')
                        ) {
                            var s = c(a),
                                l = s && t(a.line, a.ch),
                                d = s && u(a);
                            if (s && d && !(n(a, r) > 0)) {
                                var m = {
                                    from: t(a.line, a.ch),
                                    to: l,
                                    tag: d[2],
                                };
                                return 'selfClose' == s
                                    ? { open: m, close: null, at: 'open' }
                                    : d[1]
                                    ? {
                                          open: p(a, d[2]),
                                          close: m,
                                          at: 'close',
                                      }
                                    : {
                                          open: m,
                                          close: f(
                                              (a = new o(e, l.line, l.ch, i)),
                                              d[2]
                                          ),
                                          at: 'open',
                                      };
                            }
                        }
                    }),
                    (e.findEnclosingTag = function(e, t, n, r) {
                        for (var i = new o(e, t.line, t.ch, n); ; ) {
                            var a = p(i, r);
                            if (!a) break;
                            var s = f(new o(e, t.line, t.ch, n), a.tag);
                            if (s) return { open: a, close: s };
                        }
                    }),
                    (e.scanForClosingTag = function(e, t, n, r) {
                        return f(
                            new o(
                                e,
                                t.line,
                                t.ch,
                                r ? { from: 0, to: r } : null
                            ),
                            n
                        );
                    });
            })(n(25747));
        },
        46865: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.multiplexingMode = function(t) {
                    var n = Array.prototype.slice.call(arguments, 1);
                    function r(e, t, n, r) {
                        if ('string' == typeof t) {
                            var i = e.indexOf(t, n);
                            return r && i > -1 ? i + t.length : i;
                        }
                        var o = t.exec(n ? e.slice(n) : e);
                        return o ? o.index + n + (r ? o[0].length : 0) : -1;
                    }
                    return {
                        startState: function() {
                            return {
                                outer: e.startState(t),
                                innerActive: null,
                                inner: null,
                                startingInner: !1,
                            };
                        },
                        copyState: function(n) {
                            return {
                                outer: e.copyState(t, n.outer),
                                innerActive: n.innerActive,
                                inner:
                                    n.innerActive &&
                                    e.copyState(n.innerActive.mode, n.inner),
                                startingInner: n.startingInner,
                            };
                        },
                        token: function(i, o) {
                            if (o.innerActive) {
                                var a = o.innerActive;
                                if (((c = i.string), !a.close && i.sol()))
                                    return (
                                        (o.innerActive = o.inner = null),
                                        this.token(i, o)
                                    );
                                if (
                                    (d =
                                        a.close && !o.startingInner
                                            ? r(
                                                  c,
                                                  a.close,
                                                  i.pos,
                                                  a.parseDelimiters
                                              )
                                            : -1) == i.pos &&
                                    !a.parseDelimiters
                                )
                                    return (
                                        i.match(a.close),
                                        (o.innerActive = o.inner = null),
                                        a.delimStyle &&
                                            a.delimStyle +
                                                ' ' +
                                                a.delimStyle +
                                                '-close'
                                    );
                                d > -1 && (i.string = c.slice(0, d));
                                var s = a.mode.token(i, o.inner);
                                return (
                                    d > -1
                                        ? (i.string = c)
                                        : i.pos > i.start &&
                                          (o.startingInner = !1),
                                    d == i.pos &&
                                        a.parseDelimiters &&
                                        (o.innerActive = o.inner = null),
                                    a.innerStyle &&
                                        (s = s
                                            ? s + ' ' + a.innerStyle
                                            : a.innerStyle),
                                    s
                                );
                            }
                            for (
                                var l = 1 / 0, c = i.string, u = 0;
                                u < n.length;
                                ++u
                            ) {
                                var d,
                                    m = n[u];
                                if ((d = r(c, m.open, i.pos)) == i.pos) {
                                    m.parseDelimiters || i.match(m.open),
                                        (o.startingInner = !!m.parseDelimiters),
                                        (o.innerActive = m);
                                    var f = 0;
                                    if (t.indent) {
                                        var p = t.indent(o.outer, '', '');
                                        p !== e.Pass && (f = p);
                                    }
                                    return (
                                        (o.inner = e.startState(m.mode, f)),
                                        m.delimStyle &&
                                            m.delimStyle +
                                                ' ' +
                                                m.delimStyle +
                                                '-open'
                                    );
                                }
                                -1 != d && d < l && (l = d);
                            }
                            l != 1 / 0 && (i.string = c.slice(0, l));
                            var h = t.token(i, o.outer);
                            return l != 1 / 0 && (i.string = c), h;
                        },
                        indent: function(n, r, i) {
                            var o = n.innerActive ? n.innerActive.mode : t;
                            return o.indent
                                ? o.indent(
                                      n.innerActive ? n.inner : n.outer,
                                      r,
                                      i
                                  )
                                : e.Pass;
                        },
                        blankLine: function(r) {
                            var i = r.innerActive ? r.innerActive.mode : t;
                            if (
                                (i.blankLine &&
                                    i.blankLine(
                                        r.innerActive ? r.inner : r.outer
                                    ),
                                r.innerActive)
                            )
                                '\n' === r.innerActive.close &&
                                    (r.innerActive = r.inner = null);
                            else
                                for (var o = 0; o < n.length; ++o) {
                                    var a = n[o];
                                    '\n' === a.open &&
                                        ((r.innerActive = a),
                                        (r.inner = e.startState(
                                            a.mode,
                                            i.indent
                                                ? i.indent(r.outer, '', '')
                                                : 0
                                        )));
                                }
                        },
                        electricChars: t.electricChars,
                        innerMode: function(e) {
                            return e.inner
                                ? { state: e.inner, mode: e.innerActive.mode }
                                : { state: e.outer, mode: t };
                        },
                    };
                };
            })(n(25747));
        },
        33694: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.overlayMode = function(t, n, r) {
                    return {
                        startState: function() {
                            return {
                                base: e.startState(t),
                                overlay: e.startState(n),
                                basePos: 0,
                                baseCur: null,
                                overlayPos: 0,
                                overlayCur: null,
                                streamSeen: null,
                            };
                        },
                        copyState: function(r) {
                            return {
                                base: e.copyState(t, r.base),
                                overlay: e.copyState(n, r.overlay),
                                basePos: r.basePos,
                                baseCur: null,
                                overlayPos: r.overlayPos,
                                overlayCur: null,
                            };
                        },
                        token: function(e, i) {
                            return (
                                (e != i.streamSeen ||
                                    Math.min(i.basePos, i.overlayPos) <
                                        e.start) &&
                                    ((i.streamSeen = e),
                                    (i.basePos = i.overlayPos = e.start)),
                                e.start == i.basePos &&
                                    ((i.baseCur = t.token(e, i.base)),
                                    (i.basePos = e.pos)),
                                e.start == i.overlayPos &&
                                    ((e.pos = e.start),
                                    (i.overlayCur = n.token(e, i.overlay)),
                                    (i.overlayPos = e.pos)),
                                (e.pos = Math.min(i.basePos, i.overlayPos)),
                                null == i.overlayCur
                                    ? i.baseCur
                                    : (null != i.baseCur &&
                                          i.overlay.combineTokens) ||
                                      (r && null == i.overlay.combineTokens)
                                    ? i.baseCur + ' ' + i.overlayCur
                                    : i.overlayCur
                            );
                        },
                        indent:
                            t.indent &&
                            function(e, n, r) {
                                return t.indent(e.base, n, r);
                            },
                        electricChars: t.electricChars,
                        innerMode: function(e) {
                            return { state: e.base, mode: t };
                        },
                        blankLine: function(e) {
                            var i, o;
                            return (
                                t.blankLine && (i = t.blankLine(e.base)),
                                n.blankLine && (o = n.blankLine(e.overlay)),
                                null == o ? i : r && null != i ? i + ' ' + o : o
                            );
                        },
                    };
                };
            })(n(25747));
        },
        60762: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e, t) {
                    if (!e.hasOwnProperty(t))
                        throw new Error(
                            'Undefined state ' + t + ' in simple mode'
                        );
                }
                function n(e, t) {
                    if (!e) return /(?:)/;
                    var n = '';
                    return (
                        e instanceof RegExp
                            ? (e.ignoreCase && (n = 'i'),
                              e.unicode && (n += 'u'),
                              (e = e.source))
                            : (e = String(e)),
                        new RegExp((!1 === t ? '' : '^') + '(?:' + e + ')', n)
                    );
                }
                function r(e, r) {
                    (e.next || e.push) && t(r, e.next || e.push),
                        (this.regex = n(e.regex)),
                        (this.token = (function(e) {
                            if (!e) return null;
                            if (e.apply) return e;
                            if ('string' == typeof e)
                                return e.replace(/\./g, ' ');
                            for (var t = [], n = 0; n < e.length; n++)
                                t.push(e[n] && e[n].replace(/\./g, ' '));
                            return t;
                        })(e.token)),
                        (this.data = e);
                }
                function i(e, t) {
                    return function(n, r) {
                        if (r.pending) {
                            var i = r.pending.shift();
                            return (
                                0 == r.pending.length && (r.pending = null),
                                (n.pos += i.text.length),
                                i.token
                            );
                        }
                        if (r.local) {
                            if (r.local.end && n.match(r.local.end)) {
                                var o = r.local.endToken || null;
                                return (r.local = r.localState = null), o;
                            }
                            var s;
                            return (
                                (o = r.local.mode.token(n, r.localState)),
                                r.local.endScan &&
                                    (s = r.local.endScan.exec(n.current())) &&
                                    (n.pos = n.start + s.index),
                                o
                            );
                        }
                        for (var l = e[r.state], c = 0; c < l.length; c++) {
                            var u = l[c],
                                d =
                                    (!u.data.sol || n.sol()) &&
                                    n.match(u.regex);
                            if (d) {
                                u.data.next
                                    ? (r.state = u.data.next)
                                    : u.data.push
                                    ? ((r.stack || (r.stack = [])).push(
                                          r.state
                                      ),
                                      (r.state = u.data.push))
                                    : u.data.pop &&
                                      r.stack &&
                                      r.stack.length &&
                                      (r.state = r.stack.pop()),
                                    u.data.mode &&
                                        a(t, r, u.data.mode, u.token),
                                    u.data.indent &&
                                        r.indent.push(
                                            n.indentation() + t.indentUnit
                                        ),
                                    u.data.dedent && r.indent.pop();
                                var m = u.token;
                                if (
                                    (m && m.apply && (m = m(d)),
                                    d.length > 2 &&
                                        u.token &&
                                        'string' != typeof u.token)
                                ) {
                                    for (var f = 2; f < d.length; f++)
                                        d[f] &&
                                            (
                                                r.pending || (r.pending = [])
                                            ).push({
                                                text: d[f],
                                                token: u.token[f - 1],
                                            });
                                    return (
                                        n.backUp(
                                            d[0].length -
                                                (d[1] ? d[1].length : 0)
                                        ),
                                        m[0]
                                    );
                                }
                                return m && m.join ? m[0] : m;
                            }
                        }
                        return n.next(), null;
                    };
                }
                function o(e, t) {
                    if (e === t) return !0;
                    if (
                        !e ||
                        'object' != typeof e ||
                        !t ||
                        'object' != typeof t
                    )
                        return !1;
                    var n = 0;
                    for (var r in e)
                        if (e.hasOwnProperty(r)) {
                            if (!t.hasOwnProperty(r) || !o(e[r], t[r]))
                                return !1;
                            n++;
                        }
                    for (var r in t) t.hasOwnProperty(r) && n--;
                    return 0 == n;
                }
                function a(t, r, i, a) {
                    var s;
                    if (i.persistent)
                        for (var l = r.persistentStates; l && !s; l = l.next)
                            (i.spec ? o(i.spec, l.spec) : i.mode == l.mode) &&
                                (s = l);
                    var c = s ? s.mode : i.mode || e.getMode(t, i.spec),
                        u = s ? s.state : e.startState(c);
                    i.persistent &&
                        !s &&
                        (r.persistentStates = {
                            mode: c,
                            spec: i.spec,
                            state: u,
                            next: r.persistentStates,
                        }),
                        (r.localState = u),
                        (r.local = {
                            mode: c,
                            end: i.end && n(i.end),
                            endScan: i.end && !1 !== i.forceEnd && n(i.end, !1),
                            endToken: a && a.join ? a[a.length - 1] : a,
                        });
                }
                function s(t, n) {
                    return function(r, i, o) {
                        if (r.local && r.local.mode.indent)
                            return r.local.mode.indent(r.localState, i, o);
                        if (
                            null == r.indent ||
                            r.local ||
                            (n.dontIndentStates &&
                                (function(e, t) {
                                    for (var n = 0; n < t.length; n++)
                                        if (t[n] === e) return !0;
                                })(r.state, n.dontIndentStates) > -1)
                        )
                            return e.Pass;
                        var a = r.indent.length - 1,
                            s = t[r.state];
                        e: for (;;) {
                            for (var l = 0; l < s.length; l++) {
                                var c = s[l];
                                if (
                                    c.data.dedent &&
                                    !1 !== c.data.dedentIfLineStart
                                ) {
                                    var u = c.regex.exec(i);
                                    if (u && u[0]) {
                                        a--,
                                            (c.next || c.push) &&
                                                (s = t[c.next || c.push]),
                                            (i = i.slice(u[0].length));
                                        continue e;
                                    }
                                }
                            }
                            break;
                        }
                        return a < 0 ? 0 : r.indent[a];
                    };
                }
                (e.defineSimpleMode = function(t, n) {
                    e.defineMode(t, function(t) {
                        return e.simpleMode(t, n);
                    });
                }),
                    (e.simpleMode = function(n, o) {
                        t(o, 'start');
                        var a = {},
                            l = o.meta || {},
                            c = !1;
                        for (var u in o)
                            if (u != l && o.hasOwnProperty(u))
                                for (
                                    var d = (a[u] = []), m = o[u], f = 0;
                                    f < m.length;
                                    f++
                                ) {
                                    var p = m[f];
                                    d.push(new r(p, o)),
                                        (p.indent || p.dedent) && (c = !0);
                                }
                        var h = {
                            startState: function() {
                                return {
                                    state: 'start',
                                    pending: null,
                                    local: null,
                                    localState: null,
                                    indent: c ? [] : null,
                                };
                            },
                            copyState: function(t) {
                                var n = {
                                    state: t.state,
                                    pending: t.pending,
                                    local: t.local,
                                    localState: null,
                                    indent: t.indent && t.indent.slice(0),
                                };
                                t.localState &&
                                    (n.localState = e.copyState(
                                        t.local.mode,
                                        t.localState
                                    )),
                                    t.stack && (n.stack = t.stack.slice(0));
                                for (var r = t.persistentStates; r; r = r.next)
                                    n.persistentStates = {
                                        mode: r.mode,
                                        spec: r.spec,
                                        state:
                                            r.state == t.localState
                                                ? n.localState
                                                : e.copyState(r.mode, r.state),
                                        next: n.persistentStates,
                                    };
                                return n;
                            },
                            token: i(a, n),
                            innerMode: function(e) {
                                return (
                                    e.local && {
                                        mode: e.local.mode,
                                        state: e.localState,
                                    }
                                );
                            },
                            indent: s(a, l),
                        };
                        if (l)
                            for (var g in l)
                                l.hasOwnProperty(g) && (h[g] = l[g]);
                        return h;
                    });
            })(n(25747));
        },
        89750: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.runMode = function(t, n, r, i) {
                    var o = e.getMode(e.defaults, n),
                        a = (i && i.tabSize) || e.defaults.tabSize;
                    if (r.appendChild) {
                        var s =
                                /MSIE \d/.test(navigator.userAgent) &&
                                (null == document.documentMode ||
                                    document.documentMode < 9),
                            l = r,
                            c = 0;
                        (l.innerHTML = ''),
                            (r = function(e, t) {
                                if ('\n' == e)
                                    return (
                                        l.appendChild(
                                            document.createTextNode(
                                                s ? '\r' : e
                                            )
                                        ),
                                        void (c = 0)
                                    );
                                for (var n = '', r = 0; ; ) {
                                    var i = e.indexOf('\t', r);
                                    if (-1 == i) {
                                        (n += e.slice(r)), (c += e.length - r);
                                        break;
                                    }
                                    (c += i - r), (n += e.slice(r, i));
                                    var o = a - (c % a);
                                    c += o;
                                    for (var u = 0; u < o; ++u) n += ' ';
                                    r = i + 1;
                                }
                                if (t) {
                                    var d = l.appendChild(
                                        document.createElement('span')
                                    );
                                    (d.className =
                                        'cm-' + t.replace(/ +/g, ' cm-')),
                                        d.appendChild(
                                            document.createTextNode(n)
                                        );
                                } else
                                    l.appendChild(document.createTextNode(n));
                            });
                    }
                    for (
                        var u = e.splitLines(t),
                            d = (i && i.state) || e.startState(o),
                            m = 0,
                            f = u.length;
                        m < f;
                        ++m
                    ) {
                        m && r('\n');
                        var p = new e.StringStream(u[m], null, {
                            lookAhead: function(e) {
                                return u[m + e];
                            },
                            baseToken: function() {},
                        });
                        for (
                            !p.string && o.blankLine && o.blankLine(d);
                            !p.eol();

                        ) {
                            var h = o.token(p, d);
                            r(p.current(), h, m, p.start, d, o),
                                (p.start = p.pos);
                        }
                    }
                };
            })(n(25747));
        },
        38153: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(t, r) {
                    e.changeEnd(r).line == t.lastLine() && n(t);
                }
                function n(e) {
                    var t = '';
                    e.lineCount() > 1 &&
                        (t =
                            e.display.scroller.clientHeight -
                            30 -
                            e.getLineHandle(e.lastLine()).height +
                            'px'),
                        e.state.scrollPastEndPadding != t &&
                            ((e.state.scrollPastEndPadding = t),
                            (e.display.lineSpace.parentNode.style.paddingBottom = t),
                            e.off('refresh', n),
                            e.setSize(),
                            e.on('refresh', n));
                }
                e.defineOption('scrollPastEnd', !1, function(r, i, o) {
                    o &&
                        o != e.Init &&
                        (r.off('change', t),
                        r.off('refresh', n),
                        (r.display.lineSpace.parentNode.style.paddingBottom =
                            ''),
                        (r.state.scrollPastEndPadding = null)),
                        i && (r.on('change', t), r.on('refresh', n), n(r));
                });
            })(n(25747));
        },
        40554: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e, t) {
                    var n = Number(t);
                    return /^[-+]/.test(t) ? e.getCursor().line + n : n - 1;
                }
                e.defineOption('search', { bottom: !1 }),
                    (e.commands.jumpToLine = function(e) {
                        var n = e.getCursor();
                        !(function(e, t, n, r, i) {
                            e.openDialog
                                ? e.openDialog(t, i, {
                                      value: r,
                                      selectValueOnOpen: !0,
                                      bottom: e.options.search.bottom,
                                  })
                                : i(prompt(n, r));
                        })(
                            e,
                            (function(e) {
                                return (
                                    e.phrase('Jump to line:') +
                                    ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
                                    e.phrase(
                                        '(Use line:column or scroll% syntax)'
                                    ) +
                                    '</span>'
                                );
                            })(e),
                            e.phrase('Jump to line:'),
                            n.line + 1 + ':' + n.ch,
                            function(r) {
                                var i;
                                if (r)
                                    if (
                                        (i = /^\s*([\+\-]?\d+)\s*\:\s*(\d+)\s*$/.exec(
                                            r
                                        ))
                                    )
                                        e.setCursor(t(e, i[1]), Number(i[2]));
                                    else if (
                                        (i = /^\s*([\+\-]?\d+(\.\d+)?)\%\s*/.exec(
                                            r
                                        ))
                                    ) {
                                        var o = Math.round(
                                            (e.lineCount() * Number(i[1])) / 100
                                        );
                                        /^[-+]/.test(i[1]) &&
                                            (o = n.line + o + 1),
                                            e.setCursor(o - 1, n.ch);
                                    } else
                                        (i = /^\s*\:?\s*([\+\-]?\d+)\s*/.exec(
                                            r
                                        )) && e.setCursor(t(e, i[1]), n.ch);
                            }
                        );
                    }),
                    (e.keyMap.default['Alt-G'] = 'jumpToLine');
            })(n(25747), n(36804));
        },
        13439: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t() {
                    (this.posFrom = this.posTo = this.lastQuery = this.query = null),
                        (this.overlay = null);
                }
                function n(e) {
                    return e.state.search || (e.state.search = new t());
                }
                function r(e) {
                    return 'string' == typeof e && e == e.toLowerCase();
                }
                function i(e, t, n) {
                    return e.getSearchCursor(t, n, {
                        caseFold: r(t),
                        multiline: !0,
                    });
                }
                function o(e, t, n, r, i) {
                    e.openDialog
                        ? e.openDialog(t, i, {
                              value: r,
                              selectValueOnOpen: !0,
                              bottom: e.options.search.bottom,
                          })
                        : i(prompt(n, r));
                }
                function a(e) {
                    return e.replace(/\\([nrt\\])/g, function(e, t) {
                        return 'n' == t
                            ? '\n'
                            : 'r' == t
                            ? '\r'
                            : 't' == t
                            ? '\t'
                            : '\\' == t
                            ? '\\'
                            : e;
                    });
                }
                function s(e) {
                    var t = e.match(/^\/(.*)\/([a-z]*)$/);
                    if (t)
                        try {
                            e = new RegExp(
                                t[1],
                                -1 == t[2].indexOf('i') ? '' : 'i'
                            );
                        } catch (e) {}
                    else e = a(e);
                    return (
                        ('string' == typeof e ? '' == e : e.test('')) &&
                            (e = /x^/),
                        e
                    );
                }
                function l(e, t, n) {
                    (t.queryText = n),
                        (t.query = s(n)),
                        e.removeOverlay(t.overlay, r(t.query)),
                        (t.overlay = (function(e, t) {
                            return (
                                'string' == typeof e
                                    ? (e = new RegExp(
                                          e.replace(
                                              /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,
                                              '\\$&'
                                          ),
                                          t ? 'gi' : 'g'
                                      ))
                                    : e.global ||
                                      (e = new RegExp(
                                          e.source,
                                          e.ignoreCase ? 'gi' : 'g'
                                      )),
                                {
                                    token: function(t) {
                                        e.lastIndex = t.pos;
                                        var n = e.exec(t.string);
                                        if (n && n.index == t.pos)
                                            return (
                                                (t.pos += n[0].length || 1),
                                                'searching'
                                            );
                                        n ? (t.pos = n.index) : t.skipToEnd();
                                    },
                                }
                            );
                        })(t.query, r(t.query))),
                        e.addOverlay(t.overlay),
                        e.showMatchesOnScrollbar &&
                            (t.annotate &&
                                (t.annotate.clear(), (t.annotate = null)),
                            (t.annotate = e.showMatchesOnScrollbar(
                                t.query,
                                r(t.query)
                            )));
                }
                function c(t, r, i, a) {
                    var s = n(t);
                    if (s.query) return u(t, r);
                    var c = t.getSelection() || s.lastQuery;
                    if (
                        (c instanceof RegExp && 'x^' == c.source && (c = null),
                        i && t.openDialog)
                    ) {
                        var f = null,
                            p = function(n, r) {
                                e.e_stop(r),
                                    n &&
                                        (n != s.queryText &&
                                            (l(t, s, n),
                                            (s.posFrom = s.posTo = t.getCursor())),
                                        f && (f.style.opacity = 1),
                                        u(t, r.shiftKey, function(e, n) {
                                            var r;
                                            n.line < 3 &&
                                                document.querySelector &&
                                                (r = t.display.wrapper.querySelector(
                                                    '.CodeMirror-dialog'
                                                )) &&
                                                r.getBoundingClientRect()
                                                    .bottom -
                                                    4 >
                                                    t.cursorCoords(n, 'window')
                                                        .top &&
                                                ((f = r).style.opacity = 0.4);
                                        }));
                            };
                        (function(e, t, n, r, i) {
                            e.openDialog(t, r, {
                                value: n,
                                selectValueOnOpen: !0,
                                closeOnEnter: !1,
                                onClose: function() {
                                    d(e);
                                },
                                onKeyDown: i,
                                bottom: e.options.search.bottom,
                            });
                        })(t, m(t), c, p, function(r, i) {
                            var o = e.keyName(r),
                                a = t.getOption('extraKeys'),
                                s =
                                    (a && a[o]) ||
                                    e.keyMap[t.getOption('keyMap')][o];
                            'findNext' == s ||
                            'findPrev' == s ||
                            'findPersistentNext' == s ||
                            'findPersistentPrev' == s
                                ? (e.e_stop(r), l(t, n(t), i), t.execCommand(s))
                                : ('find' != s && 'findPersistent' != s) ||
                                  (e.e_stop(r), p(i, r));
                        }),
                            a && c && (l(t, s, c), u(t, r));
                    } else
                        o(t, m(t), 'Search for:', c, function(e) {
                            e &&
                                !s.query &&
                                t.operation(function() {
                                    l(t, s, e),
                                        (s.posFrom = s.posTo = t.getCursor()),
                                        u(t, r);
                                });
                        });
                }
                function u(t, r, o) {
                    t.operation(function() {
                        var a = n(t),
                            s = i(t, a.query, r ? a.posFrom : a.posTo);
                        (s.find(r) ||
                            (s = i(
                                t,
                                a.query,
                                r
                                    ? e.Pos(t.lastLine())
                                    : e.Pos(t.firstLine(), 0)
                            )).find(r)) &&
                            (t.setSelection(s.from(), s.to()),
                            t.scrollIntoView(
                                { from: s.from(), to: s.to() },
                                20
                            ),
                            (a.posFrom = s.from()),
                            (a.posTo = s.to()),
                            o && o(s.from(), s.to()));
                    });
                }
                function d(e) {
                    e.operation(function() {
                        var t = n(e);
                        (t.lastQuery = t.query),
                            t.query &&
                                ((t.query = t.queryText = null),
                                e.removeOverlay(t.overlay),
                                t.annotate &&
                                    (t.annotate.clear(), (t.annotate = null)));
                    });
                }
                function m(e) {
                    return (
                        '<span class="CodeMirror-search-label">' +
                        e.phrase('Search:') +
                        '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
                        e.phrase('(Use /re/ syntax for regexp search)') +
                        '</span>'
                    );
                }
                function f(e, t, n) {
                    e.operation(function() {
                        for (var r = i(e, t); r.findNext(); )
                            if ('string' != typeof t) {
                                var o = e.getRange(r.from(), r.to()).match(t);
                                r.replace(
                                    n.replace(/\$(\d)/g, function(e, t) {
                                        return o[t];
                                    })
                                );
                            } else r.replace(n);
                    });
                }
                function p(e, t) {
                    if (!e.getOption('readOnly')) {
                        var r = e.getSelection() || n(e).lastQuery,
                            l =
                                '<span class="CodeMirror-search-label">' +
                                (t
                                    ? e.phrase('Replace all:')
                                    : e.phrase('Replace:')) +
                                '</span>';
                        o(
                            e,
                            l +
                                (function(e) {
                                    return (
                                        ' <input type="text" style="width: 10em" class="CodeMirror-search-field"/> <span style="color: #888" class="CodeMirror-search-hint">' +
                                        e.phrase(
                                            '(Use /re/ syntax for regexp search)'
                                        ) +
                                        '</span>'
                                    );
                                })(e),
                            l,
                            r,
                            function(n) {
                                n &&
                                    ((n = s(n)),
                                    o(
                                        e,
                                        (function(e) {
                                            return (
                                                '<span class="CodeMirror-search-label">' +
                                                e.phrase('With:') +
                                                '</span> <input type="text" style="width: 10em" class="CodeMirror-search-field"/>'
                                            );
                                        })(e),
                                        e.phrase('Replace with:'),
                                        '',
                                        function(r) {
                                            if (((r = a(r)), t)) f(e, n, r);
                                            else {
                                                d(e);
                                                var o = i(
                                                        e,
                                                        n,
                                                        e.getCursor('from')
                                                    ),
                                                    s = function() {
                                                        var t,
                                                            a = o.from();
                                                        (!(t = o.findNext()) &&
                                                            ((o = i(e, n)),
                                                            !(t = o.findNext()) ||
                                                                (a &&
                                                                    o.from()
                                                                        .line ==
                                                                        a.line &&
                                                                    o.from()
                                                                        .ch ==
                                                                        a.ch))) ||
                                                            (e.setSelection(
                                                                o.from(),
                                                                o.to()
                                                            ),
                                                            e.scrollIntoView({
                                                                from: o.from(),
                                                                to: o.to(),
                                                            }),
                                                            (function(
                                                                e,
                                                                t,
                                                                n,
                                                                r
                                                            ) {
                                                                e.openConfirm
                                                                    ? e.openConfirm(
                                                                          t,
                                                                          r
                                                                      )
                                                                    : confirm(
                                                                          n
                                                                      ) &&
                                                                      r[0]();
                                                            })(
                                                                e,
                                                                (function(e) {
                                                                    return (
                                                                        '<span class="CodeMirror-search-label">' +
                                                                        e.phrase(
                                                                            'Replace?'
                                                                        ) +
                                                                        '</span> <button>' +
                                                                        e.phrase(
                                                                            'Yes'
                                                                        ) +
                                                                        '</button> <button>' +
                                                                        e.phrase(
                                                                            'No'
                                                                        ) +
                                                                        '</button> <button>' +
                                                                        e.phrase(
                                                                            'All'
                                                                        ) +
                                                                        '</button> <button>' +
                                                                        e.phrase(
                                                                            'Stop'
                                                                        ) +
                                                                        '</button> '
                                                                    );
                                                                })(e),
                                                                e.phrase(
                                                                    'Replace?'
                                                                ),
                                                                [
                                                                    function() {
                                                                        l(t);
                                                                    },
                                                                    s,
                                                                    function() {
                                                                        f(
                                                                            e,
                                                                            n,
                                                                            r
                                                                        );
                                                                    },
                                                                ]
                                                            ));
                                                    },
                                                    l = function(e) {
                                                        o.replace(
                                                            'string' == typeof n
                                                                ? r
                                                                : r.replace(
                                                                      /\$(\d)/g,
                                                                      function(
                                                                          t,
                                                                          n
                                                                      ) {
                                                                          return e[
                                                                              n
                                                                          ];
                                                                      }
                                                                  )
                                                        ),
                                                            s();
                                                    };
                                                s();
                                            }
                                        }
                                    ));
                            }
                        );
                    }
                }
                e.defineOption('search', { bottom: !1 }),
                    (e.commands.find = function(e) {
                        d(e), c(e);
                    }),
                    (e.commands.findPersistent = function(e) {
                        d(e), c(e, !1, !0);
                    }),
                    (e.commands.findPersistentNext = function(e) {
                        c(e, !1, !0, !0);
                    }),
                    (e.commands.findPersistentPrev = function(e) {
                        c(e, !0, !0, !0);
                    }),
                    (e.commands.findNext = c),
                    (e.commands.findPrev = function(e) {
                        c(e, !0);
                    }),
                    (e.commands.clearSearch = d),
                    (e.commands.replace = p),
                    (e.commands.replaceAll = function(e) {
                        p(e, !0);
                    });
            })(n(25747), n(41859), n(36804));
        },
        67553: (e, t, n) => {
            !(function(e) {
                'use strict';
                var t = 'CodeMirror-activeline',
                    n = 'CodeMirror-activeline-background',
                    r = 'CodeMirror-activeline-gutter';
                function i(e) {
                    for (var i = 0; i < e.state.activeLines.length; i++)
                        e.removeLineClass(e.state.activeLines[i], 'wrap', t),
                            e.removeLineClass(
                                e.state.activeLines[i],
                                'background',
                                n
                            ),
                            e.removeLineClass(
                                e.state.activeLines[i],
                                'gutter',
                                r
                            );
                }
                function o(e, o) {
                    for (var a = [], s = 0; s < o.length; s++) {
                        var l = o[s],
                            c = e.getOption('styleActiveLine');
                        if (
                            'object' == typeof c && c.nonEmpty
                                ? l.anchor.line == l.head.line
                                : l.empty()
                        ) {
                            var u = e.getLineHandleVisualStart(l.head.line);
                            a[a.length - 1] != u && a.push(u);
                        }
                    }
                    (function(e, t) {
                        if (e.length != t.length) return !1;
                        for (var n = 0; n < e.length; n++)
                            if (e[n] != t[n]) return !1;
                        return !0;
                    })(e.state.activeLines, a) ||
                        e.operation(function() {
                            i(e);
                            for (var o = 0; o < a.length; o++)
                                e.addLineClass(a[o], 'wrap', t),
                                    e.addLineClass(a[o], 'background', n),
                                    e.addLineClass(a[o], 'gutter', r);
                            e.state.activeLines = a;
                        });
                }
                function a(e, t) {
                    o(e, t.ranges);
                }
                e.defineOption('styleActiveLine', !1, function(t, n, r) {
                    var s = r != e.Init && r;
                    n != s &&
                        (s &&
                            (t.off('beforeSelectionChange', a),
                            i(t),
                            delete t.state.activeLines),
                        n &&
                            ((t.state.activeLines = []),
                            o(t, t.listSelections()),
                            t.on('beforeSelectionChange', a)));
                });
            })(n(25747));
        },
        71633: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e) {
                    e.state.markedSelection &&
                        e.operation(function() {
                            !(function(e) {
                                if (!e.somethingSelected()) return a(e);
                                if (e.listSelections().length > 1) return s(e);
                                var t = e.getCursor('start'),
                                    n = e.getCursor('end'),
                                    r = e.state.markedSelection;
                                if (!r.length) return o(e, t, n);
                                var l = r[0].find(),
                                    c = r[r.length - 1].find();
                                if (
                                    !l ||
                                    !c ||
                                    n.line - t.line <= 8 ||
                                    i(t, c.to) >= 0 ||
                                    i(n, l.from) <= 0
                                )
                                    return s(e);
                                for (; i(t, l.from) > 0; )
                                    r.shift().clear(), (l = r[0].find());
                                for (
                                    i(t, l.from) < 0 &&
                                    (l.to.line - t.line < 8
                                        ? (r.shift().clear(), o(e, t, l.to, 0))
                                        : o(e, t, l.from, 0));
                                    i(n, c.to) < 0;

                                )
                                    r.pop().clear(),
                                        (c = r[r.length - 1].find());
                                i(n, c.to) > 0 &&
                                    (n.line - c.from.line < 8
                                        ? (r.pop().clear(), o(e, c.from, n))
                                        : o(e, c.to, n));
                            })(e);
                        });
                }
                function n(e) {
                    e.state.markedSelection &&
                        e.state.markedSelection.length &&
                        e.operation(function() {
                            a(e);
                        });
                }
                e.defineOption('styleSelectedText', !1, function(r, i, o) {
                    var l = o && o != e.Init;
                    i && !l
                        ? ((r.state.markedSelection = []),
                          (r.state.markedSelectionStyle =
                              'string' == typeof i
                                  ? i
                                  : 'CodeMirror-selectedtext'),
                          s(r),
                          r.on('cursorActivity', t),
                          r.on('change', n))
                        : !i &&
                          l &&
                          (r.off('cursorActivity', t),
                          r.off('change', n),
                          a(r),
                          (r.state.markedSelection = r.state.markedSelectionStyle = null));
                });
                var r = e.Pos,
                    i = e.cmpPos;
                function o(e, t, n, o) {
                    if (0 != i(t, n))
                        for (
                            var a = e.state.markedSelection,
                                s = e.state.markedSelectionStyle,
                                l = t.line;
                            ;

                        ) {
                            var c = l == t.line ? t : r(l, 0),
                                u = l + 8,
                                d = u >= n.line,
                                m = d ? n : r(u, 0),
                                f = e.markText(c, m, { className: s });
                            if (
                                (null == o ? a.push(f) : a.splice(o++, 0, f), d)
                            )
                                break;
                            l = u;
                        }
                }
                function a(e) {
                    for (
                        var t = e.state.markedSelection, n = 0;
                        n < t.length;
                        ++n
                    )
                        t[n].clear();
                    t.length = 0;
                }
                function s(e) {
                    a(e);
                    for (var t = e.listSelections(), n = 0; n < t.length; n++)
                        o(e, t[n].from(), t[n].to());
                }
            })(n(25747));
        },
        97988: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e) {
                    (e.state.selectionPointer.rects = null), n(e);
                }
                function n(e) {
                    e.state.selectionPointer.willUpdate ||
                        ((e.state.selectionPointer.willUpdate = !0),
                        setTimeout(function() {
                            (function(e) {
                                var t = e.state.selectionPointer;
                                if (t) {
                                    if (
                                        null == t.rects &&
                                        null != t.mouseX &&
                                        ((t.rects = []), e.somethingSelected())
                                    )
                                        for (
                                            var n =
                                                e.display.selectionDiv
                                                    .firstChild;
                                            n;
                                            n = n.nextSibling
                                        )
                                            t.rects.push(
                                                n.getBoundingClientRect()
                                            );
                                    var r = !1;
                                    if (null != t.mouseX)
                                        for (
                                            var i = 0;
                                            i < t.rects.length;
                                            i++
                                        ) {
                                            var o = t.rects[i];
                                            o.left <= t.mouseX &&
                                                o.right >= t.mouseX &&
                                                o.top <= t.mouseY &&
                                                o.bottom >= t.mouseY &&
                                                (r = !0);
                                        }
                                    var a = r ? t.value : '';
                                    e.display.lineDiv.style.cursor != a &&
                                        (e.display.lineDiv.style.cursor = a);
                                }
                            })(e),
                                (e.state.selectionPointer.willUpdate = !1);
                        }, 50));
                }
                e.defineOption('selectionPointer', !1, function(r, i) {
                    var o = r.state.selectionPointer;
                    o &&
                        (e.off(r.getWrapperElement(), 'mousemove', o.mousemove),
                        e.off(r.getWrapperElement(), 'mouseout', o.mouseout),
                        e.off(window, 'scroll', o.windowScroll),
                        r.off('cursorActivity', t),
                        r.off('scroll', t),
                        (r.state.selectionPointer = null),
                        (r.display.lineDiv.style.cursor = '')),
                        i &&
                            ((o = r.state.selectionPointer = {
                                value: 'string' == typeof i ? i : 'default',
                                mousemove: function(e) {
                                    !(function(e, t) {
                                        var r = e.state.selectionPointer;
                                        (null == t.buttons
                                          ? t.which
                                          : t.buttons)
                                            ? (r.mouseX = r.mouseY = null)
                                            : ((r.mouseX = t.clientX),
                                              (r.mouseY = t.clientY)),
                                            n(e);
                                    })(r, e);
                                },
                                mouseout: function(e) {
                                    !(function(e, t) {
                                        if (
                                            !e
                                                .getWrapperElement()
                                                .contains(t.relatedTarget)
                                        ) {
                                            var r = e.state.selectionPointer;
                                            (r.mouseX = r.mouseY = null), n(e);
                                        }
                                    })(r, e);
                                },
                                windowScroll: function() {
                                    t(r);
                                },
                                rects: null,
                                mouseX: null,
                                mouseY: null,
                                willUpdate: !1,
                            }),
                            e.on(
                                r.getWrapperElement(),
                                'mousemove',
                                o.mousemove
                            ),
                            e.on(r.getWrapperElement(), 'mouseout', o.mouseout),
                            e.on(window, 'scroll', o.windowScroll),
                            r.on('cursorActivity', t),
                            r.on('scroll', t));
                });
            })(n(25747));
        },
        19306: (e, t, n) => {
            !(function(e) {
                'use strict';
                var t = e.commands,
                    n = e.Pos;
                function r(e, t) {
                    return e.line == t.line && e.ch == t.ch;
                }
                var i = [];
                function o(e) {
                    i.push(e), i.length > 50 && i.shift();
                }
                function a(e) {
                    return i[i.length - (e ? Math.min(e, 1) : 1)] || '';
                }
                var s = null;
                function l(e, t, n, a, l) {
                    null == l && (l = e.getRange(t, n)),
                        'grow' == a &&
                        s &&
                        s.cm == e &&
                        r(t, s.pos) &&
                        e.isClean(s.gen)
                            ? (function(e) {
                                  if (!i.length) return o(e);
                                  i[i.length - 1] += e;
                              })(l)
                            : !1 !== a && o(l),
                        e.replaceRange('', t, n, '+delete'),
                        (s =
                            'grow' == a
                                ? { cm: e, pos: t, gen: e.changeGeneration() }
                                : null);
                }
                function c(e, t, n) {
                    return e.findPosH(t, n, 'char', !0);
                }
                function u(e, t, n) {
                    return e.findPosH(t, n, 'word', !0);
                }
                function d(e, t, n) {
                    return e.findPosV(t, n, 'line', e.doc.sel.goalColumn);
                }
                function m(e, t, n) {
                    return e.findPosV(t, n, 'page', e.doc.sel.goalColumn);
                }
                function f(e, t, r) {
                    for (
                        var i = t.line,
                            o = e.getLine(i),
                            a = /\S/.test(
                                r < 0 ? o.slice(0, t.ch) : o.slice(t.ch)
                            ),
                            s = e.firstLine(),
                            l = e.lastLine();
                        ;

                    ) {
                        if ((i += r) < s || i > l)
                            return e.clipPos(n(i - r, r < 0 ? 0 : null));
                        if (((o = e.getLine(i)), /\S/.test(o))) a = !0;
                        else if (a) return n(i, 0);
                    }
                }
                function p(e, t, r) {
                    for (
                        var i = t.line, o = t.ch, a = e.getLine(t.line), s = !1;
                        ;

                    ) {
                        var l = a.charAt(o + (r < 0 ? -1 : 0));
                        if (l) {
                            if (s && /[!?.]/.test(l))
                                return n(i, o + (r > 0 ? 1 : 0));
                            s || (s = /\w/.test(l)), (o += r);
                        } else {
                            if (i == (r < 0 ? e.firstLine() : e.lastLine()))
                                return n(i, o);
                            if (((a = e.getLine(i + r)), !/\S/.test(a)))
                                return n(i, o);
                            (i += r), (o = r < 0 ? a.length : 0);
                        }
                    }
                }
                function h(e, t, i) {
                    var o;
                    if (
                        e.findMatchingBracket &&
                        (o = e.findMatchingBracket(t, { strict: !0 })) &&
                        o.match &&
                        (o.forward ? 1 : -1) == i
                    )
                        return i > 0 ? n(o.to.line, o.to.ch + 1) : o.to;
                    for (var a = !0; ; a = !1) {
                        var s = e.getTokenAt(t),
                            l = n(t.line, i < 0 ? s.start : s.end);
                        if (
                            !(a && i > 0 && s.end == t.ch) &&
                            /\w/.test(s.string)
                        )
                            return l;
                        var c = e.findPosH(l, i, 'char');
                        if (r(l, c)) return t;
                        t = c;
                    }
                }
                function g(e, t) {
                    var n = e.state.emacsPrefix;
                    return n ? (S(e), '-' == n ? -1 : Number(n)) : t ? null : 1;
                }
                function b(e) {
                    var t =
                        'string' == typeof e
                            ? function(t) {
                                  t.execCommand(e);
                              }
                            : e;
                    return function(e) {
                        var n = g(e);
                        t(e);
                        for (var r = 1; r < n; ++r) t(e);
                    };
                }
                function v(e, t, n, i) {
                    var o = g(e);
                    o < 0 && ((i = -i), (o = -o));
                    for (var a = 0; a < o; ++a) {
                        var s = n(e, t, i);
                        if (r(s, t)) break;
                        t = s;
                    }
                    return t;
                }
                function x(e, t) {
                    var n = function(n) {
                        n.extendSelection(v(n, n.getCursor(), e, t));
                    };
                    return (n.motion = !0), n;
                }
                function y(e, t, n, r) {
                    for (var i, o = e.listSelections(), a = o.length; a--; )
                        l(e, (i = o[a].head), v(e, i, t, n), r);
                }
                function k(e, t) {
                    if (e.somethingSelected()) {
                        for (var n, r = e.listSelections(), i = r.length; i--; )
                            l(e, (n = r[i]).anchor, n.head, t);
                        return !0;
                    }
                }
                function w(e, t) {
                    e.state.emacsPrefix
                        ? '-' != t && (e.state.emacsPrefix += t)
                        : ((e.state.emacsPrefix = t),
                          e.on('keyHandled', _),
                          e.on('inputRead', M));
                }
                var C = {
                    'Alt-G': !0,
                    'Ctrl-X': !0,
                    'Ctrl-Q': !0,
                    'Ctrl-U': !0,
                };
                function _(e, t) {
                    e.state.emacsPrefixMap || C.hasOwnProperty(t) || S(e);
                }
                function S(e) {
                    (e.state.emacsPrefix = null),
                        e.off('keyHandled', _),
                        e.off('inputRead', M);
                }
                function M(e, t) {
                    var n = g(e);
                    if (n > 1 && '+input' == t.origin) {
                        for (
                            var r = t.text.join('\n'), i = '', o = 1;
                            o < n;
                            ++o
                        )
                            i += r;
                        e.replaceSelection(i);
                    }
                }
                function L(e, t) {
                    ('string' != typeof t ||
                        (!/^\d$/.test(t) && 'Ctrl-U' != t)) &&
                        (e.removeKeyMap(P),
                        (e.state.emacsPrefixMap = !1),
                        e.off('keyHandled', L),
                        e.off('inputRead', L));
                }
                function T(e) {
                    e.setExtending(!1), e.setCursor(e.getCursor());
                }
                function F(e, t, n) {
                    e.openDialog
                        ? e.openDialog(
                              (function(e) {
                                  var t = document.createDocumentFragment(),
                                      n = document.createElement('input');
                                  return (
                                      n.setAttribute('type', 'text'),
                                      (n.style.width = '10em'),
                                      t.appendChild(
                                          document.createTextNode(e + ': ')
                                      ),
                                      t.appendChild(n),
                                      t
                                  );
                              })(t),
                              n,
                              { bottom: !0 }
                          )
                        : n(prompt(t, ''));
                }
                function E(e, t) {
                    var n = e.getCursor(),
                        r = e.findPosH(n, 1, 'word');
                    e.replaceRange(t(e.getRange(n, r)), n, r), e.setCursor(r);
                }
                (t.setMark = function(e) {
                    e.setCursor(e.getCursor()),
                        e.setExtending(!e.getExtending()),
                        e.on('change', function() {
                            e.setExtending(!1);
                        });
                }),
                    (t.killRegion = function(e) {
                        l(e, e.getCursor('start'), e.getCursor('end'), !0);
                    }),
                    (t.killLineEmacs = b(function(e) {
                        var t = e.getCursor(),
                            r = e.clipPos(n(t.line)),
                            i = e.getRange(t, r);
                        /\S/.test(i) || ((i += '\n'), (r = n(t.line + 1, 0))),
                            l(e, t, r, 'grow', i);
                    })),
                    (t.killRingSave = function(e) {
                        o(e.getSelection()), T(e);
                    }),
                    (t.yank = function(e) {
                        var t = e.getCursor();
                        e.replaceRange(a(g(e)), t, t, 'paste'),
                            e.setSelection(t, e.getCursor());
                    }),
                    (t.yankPop = function(e) {
                        e.replaceSelection(
                            (i.length > 1 && i.pop(), a()),
                            'around',
                            'paste'
                        );
                    }),
                    (t.forwardChar = x(c, 1)),
                    (t.backwardChar = x(c, -1)),
                    (t.deleteChar = function(e) {
                        y(e, c, 1, !1);
                    }),
                    (t.deleteForwardChar = function(e) {
                        k(e, !1) || y(e, c, 1, !1);
                    }),
                    (t.deleteBackwardChar = function(e) {
                        k(e, !1) || y(e, c, -1, !1);
                    }),
                    (t.forwardWord = x(u, 1)),
                    (t.backwardWord = x(u, -1)),
                    (t.killWord = function(e) {
                        y(e, u, 1, 'grow');
                    }),
                    (t.backwardKillWord = function(e) {
                        y(e, u, -1, 'grow');
                    }),
                    (t.nextLine = x(d, 1)),
                    (t.previousLine = x(d, -1)),
                    (t.scrollDownCommand = x(m, 1)),
                    (t.scrollUpCommand = x(m, -1)),
                    (t.backwardParagraph = x(f, -1)),
                    (t.forwardParagraph = x(f, 1)),
                    (t.backwardSentence = x(p, -1)),
                    (t.forwardSentence = x(p, 1)),
                    (t.killSentence = function(e) {
                        y(e, p, 1, 'grow');
                    }),
                    (t.backwardKillSentence = function(e) {
                        l(e, e.getCursor(), p(e, e.getCursor(), 1), 'grow');
                    }),
                    (t.killSexp = function(e) {
                        y(e, h, 1, 'grow');
                    }),
                    (t.backwardKillSexp = function(e) {
                        y(e, h, -1, 'grow');
                    }),
                    (t.forwardSexp = x(h, 1)),
                    (t.backwardSexp = x(h, -1)),
                    (t.markSexp = function(e) {
                        var t = e.getCursor();
                        e.setSelection(v(e, t, h, 1), t);
                    }),
                    (t.transposeSexps = function(e) {
                        var t = h(e, e.getCursor(), -1),
                            n = h(e, t, 1),
                            r = h(e, n, 1),
                            i = h(e, r, -1);
                        e.replaceRange(
                            e.getRange(i, r) +
                                e.getRange(n, i) +
                                e.getRange(t, n),
                            t,
                            r
                        );
                    }),
                    (t.backwardUpList = b(function(e) {
                        for (
                            var t = e.getCursor(), r = t.line, i = t.ch, o = [];
                            r >= e.firstLine();

                        ) {
                            for (
                                var a = e.getLine(r),
                                    s = null == i ? a.length : i;
                                s > 0;

                            )
                                if (')' == (i = a.charAt(--s))) o.push('(');
                                else if (']' == i) o.push('[');
                                else if ('}' == i) o.push('{');
                                else if (
                                    /[\(\{\[]/.test(i) &&
                                    (!o.length || o.pop() != i)
                                )
                                    return e.extendSelection(n(r, s));
                            --r, (i = null);
                        }
                    })),
                    (t.justOneSpace = function(e) {
                        for (
                            var t = e.getCursor(),
                                r = t.ch,
                                i = t.ch,
                                o = e.getLine(t.line);
                            r && /\s/.test(o.charAt(r - 1));

                        )
                            --r;
                        for (; i < o.length && /\s/.test(o.charAt(i)); ) ++i;
                        e.replaceRange(' ', n(t.line, r), n(t.line, i));
                    }),
                    (t.openLine = b(function(e) {
                        e.replaceSelection('\n', 'start');
                    })),
                    (t.transposeCharsRepeatable = b(function(e) {
                        e.execCommand('transposeChars');
                    })),
                    (t.capitalizeWord = b(function(e) {
                        E(e, function(e) {
                            var t = e.search(/\w/);
                            return -1 == t
                                ? e
                                : e.slice(0, t) +
                                      e.charAt(t).toUpperCase() +
                                      e.slice(t + 1).toLowerCase();
                        });
                    })),
                    (t.upcaseWord = b(function(e) {
                        E(e, function(e) {
                            return e.toUpperCase();
                        });
                    })),
                    (t.downcaseWord = b(function(e) {
                        E(e, function(e) {
                            return e.toLowerCase();
                        });
                    })),
                    (t.undoRepeatable = b('undo')),
                    (t.keyboardQuit = function(e) {
                        e.execCommand('clearSearch'), T(e);
                    }),
                    (t.newline = b(function(e) {
                        e.replaceSelection('\n', 'end');
                    })),
                    (t.gotoLine = function(e) {
                        var t = g(e, !0);
                        if (null != t && t > 0) return e.setCursor(t - 1);
                        F(e, 'Goto line', function(t) {
                            var n;
                            t &&
                                !isNaN((n = Number(t))) &&
                                n == (0 | n) &&
                                n > 0 &&
                                e.setCursor(n - 1);
                        });
                    }),
                    (t.indentRigidly = function(e) {
                        e.indentSelection(
                            g(e, !0) || e.getOption('indentUnit')
                        );
                    }),
                    (t.exchangePointAndMark = function(e) {
                        e.setSelection(
                            e.getCursor('head'),
                            e.getCursor('anchor')
                        );
                    }),
                    (t.quotedInsertTab = b('insertTab')),
                    (t.universalArgument = function(e) {
                        (e.state.emacsPrefixMap = !0),
                            e.addKeyMap(P),
                            e.on('keyHandled', L),
                            e.on('inputRead', L);
                    }),
                    (e.emacs = { kill: l, killRegion: k, repeated: b });
                var A = (e.keyMap.emacs = e.normalizeKeyMap({
                        'Ctrl-W': 'killRegion',
                        'Ctrl-K': 'killLineEmacs',
                        'Alt-W': 'killRingSave',
                        'Ctrl-Y': 'yank',
                        'Alt-Y': 'yankPop',
                        'Ctrl-Space': 'setMark',
                        'Ctrl-Shift-2': 'setMark',
                        'Ctrl-F': 'forwardChar',
                        'Ctrl-B': 'backwardChar',
                        Right: 'forwardChar',
                        Left: 'backwardChar',
                        'Ctrl-D': 'deleteChar',
                        Delete: 'deleteForwardChar',
                        'Ctrl-H': 'deleteBackwardChar',
                        Backspace: 'deleteBackwardChar',
                        'Alt-F': 'forwardWord',
                        'Alt-B': 'backwardWord',
                        'Alt-Right': 'forwardWord',
                        'Alt-Left': 'backwardWord',
                        'Alt-D': 'killWord',
                        'Alt-Backspace': 'backwardKillWord',
                        'Ctrl-N': 'nextLine',
                        'Ctrl-P': 'previousLine',
                        Down: 'nextLine',
                        Up: 'previousLine',
                        'Ctrl-A': 'goLineStart',
                        'Ctrl-E': 'goLineEnd',
                        End: 'goLineEnd',
                        Home: 'goLineStart',
                        'Alt-V': 'scrollDownCommand',
                        'Ctrl-V': 'scrollUpCommand',
                        PageUp: 'scrollUpCommand',
                        PageDown: 'scrollDownCommand',
                        'Ctrl-Up': 'backwardParagraph',
                        'Ctrl-Down': 'forwardParagraph',
                        'Alt-{': 'backwardParagraph',
                        'Alt-}': 'forwardParagraph',
                        'Alt-A': 'backwardSentence',
                        'Alt-E': 'forwardSentence',
                        'Alt-K': 'killSentence',
                        'Ctrl-X Delete': 'backwardKillSentence',
                        'Ctrl-Alt-K': 'killSexp',
                        'Ctrl-Alt-Backspace': 'backwardKillSexp',
                        'Ctrl-Alt-F': 'forwardSexp',
                        'Ctrl-Alt-B': 'backwardSexp',
                        'Shift-Ctrl-Alt-2': 'markSexp',
                        'Ctrl-Alt-T': 'transposeSexps',
                        'Ctrl-Alt-U': 'backwardUpList',
                        'Alt-Space': 'justOneSpace',
                        'Ctrl-O': 'openLine',
                        'Ctrl-T': 'transposeCharsRepeatable',
                        'Alt-C': 'capitalizeWord',
                        'Alt-U': 'upcaseWord',
                        'Alt-L': 'downcaseWord',
                        'Alt-;': 'toggleComment',
                        'Ctrl-/': 'undoRepeatable',
                        'Shift-Ctrl--': 'undoRepeatable',
                        'Ctrl-Z': 'undoRepeatable',
                        'Cmd-Z': 'undoRepeatable',
                        'Ctrl-X U': 'undoRepeatable',
                        'Shift-Ctrl-Z': 'redo',
                        'Shift-Alt-,': 'goDocStart',
                        'Shift-Alt-.': 'goDocEnd',
                        'Ctrl-S': 'findPersistentNext',
                        'Ctrl-R': 'findPersistentPrev',
                        'Ctrl-G': 'keyboardQuit',
                        'Shift-Alt-5': 'replace',
                        'Alt-/': 'autocomplete',
                        Enter: 'newlineAndIndent',
                        'Ctrl-J': 'newline',
                        Tab: 'indentAuto',
                        'Alt-G G': 'gotoLine',
                        'Ctrl-X Tab': 'indentRigidly',
                        'Ctrl-X Ctrl-X': 'exchangePointAndMark',
                        'Ctrl-X Ctrl-S': 'save',
                        'Ctrl-X Ctrl-W': 'save',
                        'Ctrl-X S': 'saveAll',
                        'Ctrl-X F': 'open',
                        'Ctrl-X K': 'close',
                        'Ctrl-X H': 'selectAll',
                        'Ctrl-Q Tab': 'quotedInsertTab',
                        'Ctrl-U': 'universalArgument',
                        fallthrough: 'default',
                    })),
                    P = { 'Ctrl-G': S };
                function D(e) {
                    (P[e] = function(t) {
                        w(t, e);
                    }),
                        (A['Ctrl-' + e] = function(t) {
                            w(t, e);
                        }),
                        (C['Ctrl-' + e] = !0);
                }
                for (var z = 0; z < 10; ++z) D(String(z));
                D('-');
            })(n(25747));
        },
        24354: (e, t, n) => {
            !(function(e) {
                'use strict';
                var t = e.commands,
                    n = e.Pos;
                function r(t, r) {
                    t.extendSelectionsBy(function(i) {
                        return t.display.shift || t.doc.extend || i.empty()
                            ? (function(t, r, i) {
                                  if (i < 0 && 0 == r.ch)
                                      return t.clipPos(n(r.line - 1));
                                  var o = t.getLine(r.line);
                                  if (i > 0 && r.ch >= o.length)
                                      return t.clipPos(n(r.line + 1, 0));
                                  for (
                                      var a,
                                          s = 'start',
                                          l = r.ch,
                                          c = l,
                                          u = i < 0 ? 0 : o.length,
                                          d = 0;
                                      c != u;
                                      c += i, d++
                                  ) {
                                      var m = o.charAt(i < 0 ? c - 1 : c),
                                          f =
                                              '_' != m && e.isWordChar(m)
                                                  ? 'w'
                                                  : 'o';
                                      if (
                                          ('w' == f &&
                                              m.toUpperCase() == m &&
                                              (f = 'W'),
                                          'start' == s)
                                      )
                                          'o' != f
                                              ? ((s = 'in'), (a = f))
                                              : (l = c + i);
                                      else if ('in' == s && a != f) {
                                          if (
                                              ('w' == a &&
                                                  'W' == f &&
                                                  i < 0 &&
                                                  c--,
                                              'W' == a && 'w' == f && i > 0)
                                          ) {
                                              if (c == l + 1) {
                                                  a = 'w';
                                                  continue;
                                              }
                                              c--;
                                          }
                                          break;
                                      }
                                  }
                                  return n(r.line, c);
                              })(t.doc, i.head, r)
                            : r < 0
                            ? i.from()
                            : i.to();
                    });
                }
                function i(t, r) {
                    if (t.isReadOnly()) return e.Pass;
                    t.operation(function() {
                        for (
                            var e = t.listSelections().length,
                                i = [],
                                o = -1,
                                a = 0;
                            a < e;
                            a++
                        ) {
                            var s = t.listSelections()[a].head;
                            if (!(s.line <= o)) {
                                var l = n(s.line + (r ? 0 : 1), 0);
                                t.replaceRange('\n', l, null, '+insertLine'),
                                    t.indentLine(l.line, null, !0),
                                    i.push({ head: l, anchor: l }),
                                    (o = s.line + 1);
                            }
                        }
                        t.setSelections(i);
                    }),
                        t.execCommand('indentAuto');
                }
                function o(t, r) {
                    for (
                        var i = r.ch, o = i, a = t.getLine(r.line);
                        i && e.isWordChar(a.charAt(i - 1));

                    )
                        --i;
                    for (; o < a.length && e.isWordChar(a.charAt(o)); ) ++o;
                    return {
                        from: n(r.line, i),
                        to: n(r.line, o),
                        word: a.slice(i, o),
                    };
                }
                function a(e, t) {
                    for (
                        var n = e.listSelections(), r = [], i = 0;
                        i < n.length;
                        i++
                    ) {
                        var o = n[i],
                            a = e.findPosV(
                                o.anchor,
                                t,
                                'line',
                                o.anchor.goalColumn
                            ),
                            s = e.findPosV(
                                o.head,
                                t,
                                'line',
                                o.head.goalColumn
                            );
                        (a.goalColumn =
                            null != o.anchor.goalColumn
                                ? o.anchor.goalColumn
                                : e.cursorCoords(o.anchor, 'div').left),
                            (s.goalColumn =
                                null != o.head.goalColumn
                                    ? o.head.goalColumn
                                    : e.cursorCoords(o.head, 'div').left);
                        var l = { anchor: a, head: s };
                        r.push(o), r.push(l);
                    }
                    e.setSelections(r);
                }
                (t.goSubwordLeft = function(e) {
                    r(e, -1);
                }),
                    (t.goSubwordRight = function(e) {
                        r(e, 1);
                    }),
                    (t.scrollLineUp = function(e) {
                        var t = e.getScrollInfo();
                        if (!e.somethingSelected()) {
                            var n = e.lineAtHeight(
                                t.top + t.clientHeight,
                                'local'
                            );
                            e.getCursor().line >= n &&
                                e.execCommand('goLineUp');
                        }
                        e.scrollTo(null, t.top - e.defaultTextHeight());
                    }),
                    (t.scrollLineDown = function(e) {
                        var t = e.getScrollInfo();
                        if (!e.somethingSelected()) {
                            var n = e.lineAtHeight(t.top, 'local') + 1;
                            e.getCursor().line <= n &&
                                e.execCommand('goLineDown');
                        }
                        e.scrollTo(null, t.top + e.defaultTextHeight());
                    }),
                    (t.splitSelectionByLine = function(e) {
                        for (
                            var t = e.listSelections(), r = [], i = 0;
                            i < t.length;
                            i++
                        )
                            for (
                                var o = t[i].from(), a = t[i].to(), s = o.line;
                                s <= a.line;
                                ++s
                            )
                                (a.line > o.line && s == a.line && 0 == a.ch) ||
                                    r.push({
                                        anchor: s == o.line ? o : n(s, 0),
                                        head: s == a.line ? a : n(s),
                                    });
                        e.setSelections(r, 0);
                    }),
                    (t.singleSelectionTop = function(e) {
                        var t = e.listSelections()[0];
                        e.setSelection(t.anchor, t.head, { scroll: !1 });
                    }),
                    (t.selectLine = function(e) {
                        for (
                            var t = e.listSelections(), r = [], i = 0;
                            i < t.length;
                            i++
                        ) {
                            var o = t[i];
                            r.push({
                                anchor: n(o.from().line, 0),
                                head: n(o.to().line + 1, 0),
                            });
                        }
                        e.setSelections(r);
                    }),
                    (t.insertLineAfter = function(e) {
                        return i(e, !1);
                    }),
                    (t.insertLineBefore = function(e) {
                        return i(e, !0);
                    }),
                    (t.selectNextOccurrence = function(t) {
                        var r = t.getCursor('from'),
                            i = t.getCursor('to'),
                            a = t.state.sublimeFindFullWord == t.doc.sel;
                        if (0 == e.cmpPos(r, i)) {
                            var s = o(t, r);
                            if (!s.word) return;
                            t.setSelection(s.from, s.to), (a = !0);
                        } else {
                            var l = t.getRange(r, i),
                                c = a ? new RegExp('\\b' + l + '\\b') : l,
                                u = t.getSearchCursor(c, i),
                                d = u.findNext();
                            if (
                                (d ||
                                    (d = (u = t.getSearchCursor(
                                        c,
                                        n(t.firstLine(), 0)
                                    )).findNext()),
                                !d ||
                                    (function(t, n, r) {
                                        for (var i = 0; i < t.length; i++)
                                            if (
                                                0 == e.cmpPos(t[i].from(), n) &&
                                                0 == e.cmpPos(t[i].to(), r)
                                            )
                                                return !0;
                                        return !1;
                                    })(t.listSelections(), u.from(), u.to()))
                            )
                                return;
                            t.addSelection(u.from(), u.to());
                        }
                        a && (t.state.sublimeFindFullWord = t.doc.sel);
                    }),
                    (t.skipAndSelectNextOccurrence = function(n) {
                        var r = n.getCursor('anchor'),
                            i = n.getCursor('head');
                        t.selectNextOccurrence(n),
                            0 != e.cmpPos(r, i) &&
                                n.doc.setSelections(
                                    n.doc.listSelections().filter(function(e) {
                                        return e.anchor != r || e.head != i;
                                    })
                                );
                    }),
                    (t.addCursorToPrevLine = function(e) {
                        a(e, -1);
                    }),
                    (t.addCursorToNextLine = function(e) {
                        a(e, 1);
                    });
                var s = '(){}[]';
                function l(t) {
                    for (
                        var r = t.listSelections(), i = [], o = 0;
                        o < r.length;
                        o++
                    ) {
                        var a = r[o],
                            l = a.head,
                            c = t.scanForBracket(l, -1);
                        if (!c) return !1;
                        for (;;) {
                            var u = t.scanForBracket(l, 1);
                            if (!u) return !1;
                            if (u.ch == s.charAt(s.indexOf(c.ch) + 1)) {
                                var d = n(c.pos.line, c.pos.ch + 1);
                                if (
                                    0 != e.cmpPos(d, a.from()) ||
                                    0 != e.cmpPos(u.pos, a.to())
                                ) {
                                    i.push({ anchor: d, head: u.pos });
                                    break;
                                }
                                if (!(c = t.scanForBracket(c.pos, -1)))
                                    return !1;
                            }
                            l = n(u.pos.line, u.pos.ch + 1);
                        }
                    }
                    return t.setSelections(i), !0;
                }
                function c(e) {
                    return e ? (/\bpunctuation\b/.test(e) ? e : void 0) : null;
                }
                function u(t, r, i) {
                    if (t.isReadOnly()) return e.Pass;
                    for (
                        var o, a = t.listSelections(), s = [], l = 0;
                        l < a.length;
                        l++
                    ) {
                        var c = a[l];
                        if (!c.empty()) {
                            for (
                                var u = c.from().line, d = c.to().line;
                                l < a.length - 1 && a[l + 1].from().line == d;

                            )
                                d = a[++l].to().line;
                            a[l].to().ch || d--, s.push(u, d);
                        }
                    }
                    s.length ? (o = !0) : s.push(t.firstLine(), t.lastLine()),
                        t.operation(function() {
                            for (var e = [], a = 0; a < s.length; a += 2) {
                                var l = s[a],
                                    c = s[a + 1],
                                    u = n(l, 0),
                                    d = n(c),
                                    m = t.getRange(u, d, !1);
                                r
                                    ? m.sort(function(e, t) {
                                          return e < t ? -i : e == t ? 0 : i;
                                      })
                                    : m.sort(function(e, t) {
                                          var n = e.toUpperCase(),
                                              r = t.toUpperCase();
                                          return (
                                              n != r && ((e = n), (t = r)),
                                              e < t ? -i : e == t ? 0 : i
                                          );
                                      }),
                                    t.replaceRange(m, u, d),
                                    o &&
                                        e.push({
                                            anchor: u,
                                            head: n(c + 1, 0),
                                        });
                            }
                            o && t.setSelections(e, 0);
                        });
                }
                function d(t, n) {
                    t.operation(function() {
                        for (
                            var r = t.listSelections(), i = [], a = [], s = 0;
                            s < r.length;
                            s++
                        )
                            (c = r[s]).empty()
                                ? (i.push(s), a.push(''))
                                : a.push(n(t.getRange(c.from(), c.to())));
                        var l;
                        for (
                            t.replaceSelections(a, 'around', 'case'),
                                s = i.length - 1;
                            s >= 0;
                            s--
                        ) {
                            var c = r[i[s]];
                            if (!(l && e.cmpPos(c.head, l) > 0)) {
                                var u = o(t, c.head);
                                (l = u.from),
                                    t.replaceRange(n(u.word), u.from, u.to);
                            }
                        }
                    });
                }
                function m(t) {
                    var n = t.getCursor('from'),
                        r = t.getCursor('to');
                    if (0 == e.cmpPos(n, r)) {
                        var i = o(t, n);
                        if (!i.word) return;
                        (n = i.from), (r = i.to);
                    }
                    return { from: n, to: r, query: t.getRange(n, r), word: i };
                }
                function f(e, t) {
                    var r = m(e);
                    if (r) {
                        var i = r.query,
                            o = e.getSearchCursor(i, t ? r.to : r.from);
                        (t
                          ? o.findNext()
                          : o.findPrevious())
                            ? e.setSelection(o.from(), o.to())
                            : ((o = e.getSearchCursor(
                                  i,
                                  t
                                      ? n(e.firstLine(), 0)
                                      : e.clipPos(n(e.lastLine()))
                              )),
                              (t
                                ? o.findNext()
                                : o.findPrevious())
                                  ? e.setSelection(o.from(), o.to())
                                  : r.word && e.setSelection(r.from, r.to));
                    }
                }
                (t.selectScope = function(e) {
                    l(e) || e.execCommand('selectAll');
                }),
                    (t.selectBetweenBrackets = function(t) {
                        if (!l(t)) return e.Pass;
                    }),
                    (t.goToBracket = function(t) {
                        t.extendSelectionsBy(function(r) {
                            var i = t.scanForBracket(
                                r.head,
                                1,
                                c(t.getTokenTypeAt(r.head))
                            );
                            if (i && 0 != e.cmpPos(i.pos, r.head)) return i.pos;
                            var o = t.scanForBracket(
                                r.head,
                                -1,
                                c(
                                    t.getTokenTypeAt(
                                        n(r.head.line, r.head.ch + 1)
                                    )
                                )
                            );
                            return (o && n(o.pos.line, o.pos.ch + 1)) || r.head;
                        });
                    }),
                    (t.swapLineUp = function(t) {
                        if (t.isReadOnly()) return e.Pass;
                        for (
                            var r = t.listSelections(),
                                i = [],
                                o = t.firstLine() - 1,
                                a = [],
                                s = 0;
                            s < r.length;
                            s++
                        ) {
                            var l = r[s],
                                c = l.from().line - 1,
                                u = l.to().line;
                            a.push({
                                anchor: n(l.anchor.line - 1, l.anchor.ch),
                                head: n(l.head.line - 1, l.head.ch),
                            }),
                                0 != l.to().ch || l.empty() || --u,
                                c > o
                                    ? i.push(c, u)
                                    : i.length && (i[i.length - 1] = u),
                                (o = u);
                        }
                        t.operation(function() {
                            for (var e = 0; e < i.length; e += 2) {
                                var r = i[e],
                                    o = i[e + 1],
                                    s = t.getLine(r);
                                t.replaceRange(
                                    '',
                                    n(r, 0),
                                    n(r + 1, 0),
                                    '+swapLine'
                                ),
                                    o > t.lastLine()
                                        ? t.replaceRange(
                                              '\n' + s,
                                              n(t.lastLine()),
                                              null,
                                              '+swapLine'
                                          )
                                        : t.replaceRange(
                                              s + '\n',
                                              n(o, 0),
                                              null,
                                              '+swapLine'
                                          );
                            }
                            t.setSelections(a), t.scrollIntoView();
                        });
                    }),
                    (t.swapLineDown = function(t) {
                        if (t.isReadOnly()) return e.Pass;
                        for (
                            var r = t.listSelections(),
                                i = [],
                                o = t.lastLine() + 1,
                                a = r.length - 1;
                            a >= 0;
                            a--
                        ) {
                            var s = r[a],
                                l = s.to().line + 1,
                                c = s.from().line;
                            0 != s.to().ch || s.empty() || l--,
                                l < o
                                    ? i.push(l, c)
                                    : i.length && (i[i.length - 1] = c),
                                (o = c);
                        }
                        t.operation(function() {
                            for (var e = i.length - 2; e >= 0; e -= 2) {
                                var r = i[e],
                                    o = i[e + 1],
                                    a = t.getLine(r);
                                r == t.lastLine()
                                    ? t.replaceRange(
                                          '',
                                          n(r - 1),
                                          n(r),
                                          '+swapLine'
                                      )
                                    : t.replaceRange(
                                          '',
                                          n(r, 0),
                                          n(r + 1, 0),
                                          '+swapLine'
                                      ),
                                    t.replaceRange(
                                        a + '\n',
                                        n(o, 0),
                                        null,
                                        '+swapLine'
                                    );
                            }
                            t.scrollIntoView();
                        });
                    }),
                    (t.toggleCommentIndented = function(e) {
                        e.toggleComment({ indent: !0 });
                    }),
                    (t.joinLines = function(e) {
                        for (
                            var t = e.listSelections(), r = [], i = 0;
                            i < t.length;
                            i++
                        ) {
                            for (
                                var o = t[i],
                                    a = o.from(),
                                    s = a.line,
                                    l = o.to().line;
                                i < t.length - 1 && t[i + 1].from().line == l;

                            )
                                l = t[++i].to().line;
                            r.push({
                                start: s,
                                end: l,
                                anchor: !o.empty() && a,
                            });
                        }
                        e.operation(function() {
                            for (var t = 0, i = [], o = 0; o < r.length; o++) {
                                for (
                                    var a,
                                        s = r[o],
                                        l =
                                            s.anchor &&
                                            n(s.anchor.line - t, s.anchor.ch),
                                        c = s.start;
                                    c <= s.end;
                                    c++
                                ) {
                                    var u = c - t;
                                    c == s.end &&
                                        (a = n(u, e.getLine(u).length + 1)),
                                        u < e.lastLine() &&
                                            (e.replaceRange(
                                                ' ',
                                                n(u),
                                                n(
                                                    u + 1,
                                                    /^\s*/.exec(
                                                        e.getLine(u + 1)
                                                    )[0].length
                                                )
                                            ),
                                            ++t);
                                }
                                i.push({ anchor: l || a, head: a });
                            }
                            e.setSelections(i, 0);
                        });
                    }),
                    (t.duplicateLine = function(e) {
                        e.operation(function() {
                            for (
                                var t = e.listSelections().length, r = 0;
                                r < t;
                                r++
                            ) {
                                var i = e.listSelections()[r];
                                i.empty()
                                    ? e.replaceRange(
                                          e.getLine(i.head.line) + '\n',
                                          n(i.head.line, 0)
                                      )
                                    : e.replaceRange(
                                          e.getRange(i.from(), i.to()),
                                          i.from()
                                      );
                            }
                            e.scrollIntoView();
                        });
                    }),
                    (t.sortLines = function(e) {
                        u(e, !0, 1);
                    }),
                    (t.reverseSortLines = function(e) {
                        u(e, !0, -1);
                    }),
                    (t.sortLinesInsensitive = function(e) {
                        u(e, !1, 1);
                    }),
                    (t.reverseSortLinesInsensitive = function(e) {
                        u(e, !1, -1);
                    }),
                    (t.nextBookmark = function(e) {
                        var t = e.state.sublimeBookmarks;
                        if (t)
                            for (; t.length; ) {
                                var n = t.shift(),
                                    r = n.find();
                                if (r)
                                    return (
                                        t.push(n), e.setSelection(r.from, r.to)
                                    );
                            }
                    }),
                    (t.prevBookmark = function(e) {
                        var t = e.state.sublimeBookmarks;
                        if (t)
                            for (; t.length; ) {
                                t.unshift(t.pop());
                                var n = t[t.length - 1].find();
                                if (n) return e.setSelection(n.from, n.to);
                                t.pop();
                            }
                    }),
                    (t.toggleBookmark = function(e) {
                        for (
                            var t = e.listSelections(),
                                n =
                                    e.state.sublimeBookmarks ||
                                    (e.state.sublimeBookmarks = []),
                                r = 0;
                            r < t.length;
                            r++
                        ) {
                            for (
                                var i = t[r].from(),
                                    o = t[r].to(),
                                    a = t[r].empty()
                                        ? e.findMarksAt(i)
                                        : e.findMarks(i, o),
                                    s = 0;
                                s < a.length;
                                s++
                            )
                                if (a[s].sublimeBookmark) {
                                    a[s].clear();
                                    for (var l = 0; l < n.length; l++)
                                        n[l] == a[s] && n.splice(l--, 1);
                                    break;
                                }
                            s == a.length &&
                                n.push(
                                    e.markText(i, o, {
                                        sublimeBookmark: !0,
                                        clearWhenEmpty: !1,
                                    })
                                );
                        }
                    }),
                    (t.clearBookmarks = function(e) {
                        var t = e.state.sublimeBookmarks;
                        if (t) for (var n = 0; n < t.length; n++) t[n].clear();
                        t.length = 0;
                    }),
                    (t.selectBookmarks = function(e) {
                        var t = e.state.sublimeBookmarks,
                            n = [];
                        if (t)
                            for (var r = 0; r < t.length; r++) {
                                var i = t[r].find();
                                i
                                    ? n.push({ anchor: i.from, head: i.to })
                                    : t.splice(r--, 0);
                            }
                        n.length && e.setSelections(n, 0);
                    }),
                    (t.smartBackspace = function(t) {
                        if (t.somethingSelected()) return e.Pass;
                        t.operation(function() {
                            for (
                                var r = t.listSelections(),
                                    i = t.getOption('indentUnit'),
                                    o = r.length - 1;
                                o >= 0;
                                o--
                            ) {
                                var a = r[o].head,
                                    s = t.getRange({ line: a.line, ch: 0 }, a),
                                    l = e.countColumn(
                                        s,
                                        null,
                                        t.getOption('tabSize')
                                    ),
                                    c = t.findPosH(a, -1, 'char', !1);
                                if (s && !/\S/.test(s) && l % i == 0) {
                                    var u = new n(
                                        a.line,
                                        e.findColumn(s, l - i, i)
                                    );
                                    u.ch != a.ch && (c = u);
                                }
                                t.replaceRange('', c, a, '+delete');
                            }
                        });
                    }),
                    (t.delLineRight = function(e) {
                        e.operation(function() {
                            for (
                                var t = e.listSelections(), r = t.length - 1;
                                r >= 0;
                                r--
                            )
                                e.replaceRange(
                                    '',
                                    t[r].anchor,
                                    n(t[r].to().line),
                                    '+delete'
                                );
                            e.scrollIntoView();
                        });
                    }),
                    (t.upcaseAtCursor = function(e) {
                        d(e, function(e) {
                            return e.toUpperCase();
                        });
                    }),
                    (t.downcaseAtCursor = function(e) {
                        d(e, function(e) {
                            return e.toLowerCase();
                        });
                    }),
                    (t.setSublimeMark = function(e) {
                        e.state.sublimeMark && e.state.sublimeMark.clear(),
                            (e.state.sublimeMark = e.setBookmark(
                                e.getCursor()
                            ));
                    }),
                    (t.selectToSublimeMark = function(e) {
                        var t =
                            e.state.sublimeMark && e.state.sublimeMark.find();
                        t && e.setSelection(e.getCursor(), t);
                    }),
                    (t.deleteToSublimeMark = function(t) {
                        var n =
                            t.state.sublimeMark && t.state.sublimeMark.find();
                        if (n) {
                            var r = t.getCursor(),
                                i = n;
                            if (e.cmpPos(r, i) > 0) {
                                var o = i;
                                (i = r), (r = o);
                            }
                            (t.state.sublimeKilled = t.getRange(r, i)),
                                t.replaceRange('', r, i);
                        }
                    }),
                    (t.swapWithSublimeMark = function(e) {
                        var t =
                            e.state.sublimeMark && e.state.sublimeMark.find();
                        t &&
                            (e.state.sublimeMark.clear(),
                            (e.state.sublimeMark = e.setBookmark(
                                e.getCursor()
                            )),
                            e.setCursor(t));
                    }),
                    (t.sublimeYank = function(e) {
                        null != e.state.sublimeKilled &&
                            e.replaceSelection(
                                e.state.sublimeKilled,
                                null,
                                'paste'
                            );
                    }),
                    (t.showInCenter = function(e) {
                        var t = e.cursorCoords(null, 'local');
                        e.scrollTo(
                            null,
                            (t.top + t.bottom) / 2 -
                                e.getScrollInfo().clientHeight / 2
                        );
                    }),
                    (t.findUnder = function(e) {
                        f(e, !0);
                    }),
                    (t.findUnderPrevious = function(e) {
                        f(e, !1);
                    }),
                    (t.findAllUnder = function(e) {
                        var t = m(e);
                        if (t) {
                            for (
                                var n = e.getSearchCursor(t.query),
                                    r = [],
                                    i = -1;
                                n.findNext();

                            )
                                r.push({ anchor: n.from(), head: n.to() }),
                                    n.from().line <= t.from.line &&
                                        n.from().ch <= t.from.ch &&
                                        i++;
                            e.setSelections(r, i);
                        }
                    });
                var p = e.keyMap;
                (p.macSublime = {
                    'Cmd-Left': 'goLineStartSmart',
                    'Shift-Tab': 'indentLess',
                    'Shift-Ctrl-K': 'deleteLine',
                    'Alt-Q': 'wrapLines',
                    'Ctrl-Left': 'goSubwordLeft',
                    'Ctrl-Right': 'goSubwordRight',
                    'Ctrl-Alt-Up': 'scrollLineUp',
                    'Ctrl-Alt-Down': 'scrollLineDown',
                    'Cmd-L': 'selectLine',
                    'Shift-Cmd-L': 'splitSelectionByLine',
                    Esc: 'singleSelectionTop',
                    'Cmd-Enter': 'insertLineAfter',
                    'Shift-Cmd-Enter': 'insertLineBefore',
                    'Cmd-D': 'selectNextOccurrence',
                    'Shift-Cmd-Space': 'selectScope',
                    'Shift-Cmd-M': 'selectBetweenBrackets',
                    'Cmd-M': 'goToBracket',
                    'Cmd-Ctrl-Up': 'swapLineUp',
                    'Cmd-Ctrl-Down': 'swapLineDown',
                    'Cmd-/': 'toggleCommentIndented',
                    'Cmd-J': 'joinLines',
                    'Shift-Cmd-D': 'duplicateLine',
                    F5: 'sortLines',
                    'Shift-F5': 'reverseSortLines',
                    'Cmd-F5': 'sortLinesInsensitive',
                    'Shift-Cmd-F5': 'reverseSortLinesInsensitive',
                    F2: 'nextBookmark',
                    'Shift-F2': 'prevBookmark',
                    'Cmd-F2': 'toggleBookmark',
                    'Shift-Cmd-F2': 'clearBookmarks',
                    'Alt-F2': 'selectBookmarks',
                    Backspace: 'smartBackspace',
                    'Cmd-K Cmd-D': 'skipAndSelectNextOccurrence',
                    'Cmd-K Cmd-K': 'delLineRight',
                    'Cmd-K Cmd-U': 'upcaseAtCursor',
                    'Cmd-K Cmd-L': 'downcaseAtCursor',
                    'Cmd-K Cmd-Space': 'setSublimeMark',
                    'Cmd-K Cmd-A': 'selectToSublimeMark',
                    'Cmd-K Cmd-W': 'deleteToSublimeMark',
                    'Cmd-K Cmd-X': 'swapWithSublimeMark',
                    'Cmd-K Cmd-Y': 'sublimeYank',
                    'Cmd-K Cmd-C': 'showInCenter',
                    'Cmd-K Cmd-G': 'clearBookmarks',
                    'Cmd-K Cmd-Backspace': 'delLineLeft',
                    'Cmd-K Cmd-1': 'foldAll',
                    'Cmd-K Cmd-0': 'unfoldAll',
                    'Cmd-K Cmd-J': 'unfoldAll',
                    'Ctrl-Shift-Up': 'addCursorToPrevLine',
                    'Ctrl-Shift-Down': 'addCursorToNextLine',
                    'Cmd-F3': 'findUnder',
                    'Shift-Cmd-F3': 'findUnderPrevious',
                    'Alt-F3': 'findAllUnder',
                    'Shift-Cmd-[': 'fold',
                    'Shift-Cmd-]': 'unfold',
                    'Cmd-I': 'findIncremental',
                    'Shift-Cmd-I': 'findIncrementalReverse',
                    'Cmd-H': 'replace',
                    F3: 'findNext',
                    'Shift-F3': 'findPrev',
                    fallthrough: 'macDefault',
                }),
                    e.normalizeKeyMap(p.macSublime),
                    (p.pcSublime = {
                        'Shift-Tab': 'indentLess',
                        'Shift-Ctrl-K': 'deleteLine',
                        'Alt-Q': 'wrapLines',
                        'Ctrl-T': 'transposeChars',
                        'Alt-Left': 'goSubwordLeft',
                        'Alt-Right': 'goSubwordRight',
                        'Ctrl-Up': 'scrollLineUp',
                        'Ctrl-Down': 'scrollLineDown',
                        'Ctrl-L': 'selectLine',
                        'Shift-Ctrl-L': 'splitSelectionByLine',
                        Esc: 'singleSelectionTop',
                        'Ctrl-Enter': 'insertLineAfter',
                        'Shift-Ctrl-Enter': 'insertLineBefore',
                        'Ctrl-D': 'selectNextOccurrence',
                        'Shift-Ctrl-Space': 'selectScope',
                        'Shift-Ctrl-M': 'selectBetweenBrackets',
                        'Ctrl-M': 'goToBracket',
                        'Shift-Ctrl-Up': 'swapLineUp',
                        'Shift-Ctrl-Down': 'swapLineDown',
                        'Ctrl-/': 'toggleCommentIndented',
                        'Ctrl-J': 'joinLines',
                        'Shift-Ctrl-D': 'duplicateLine',
                        F9: 'sortLines',
                        'Shift-F9': 'reverseSortLines',
                        'Ctrl-F9': 'sortLinesInsensitive',
                        'Shift-Ctrl-F9': 'reverseSortLinesInsensitive',
                        F2: 'nextBookmark',
                        'Shift-F2': 'prevBookmark',
                        'Ctrl-F2': 'toggleBookmark',
                        'Shift-Ctrl-F2': 'clearBookmarks',
                        'Alt-F2': 'selectBookmarks',
                        Backspace: 'smartBackspace',
                        'Ctrl-K Ctrl-D': 'skipAndSelectNextOccurrence',
                        'Ctrl-K Ctrl-K': 'delLineRight',
                        'Ctrl-K Ctrl-U': 'upcaseAtCursor',
                        'Ctrl-K Ctrl-L': 'downcaseAtCursor',
                        'Ctrl-K Ctrl-Space': 'setSublimeMark',
                        'Ctrl-K Ctrl-A': 'selectToSublimeMark',
                        'Ctrl-K Ctrl-W': 'deleteToSublimeMark',
                        'Ctrl-K Ctrl-X': 'swapWithSublimeMark',
                        'Ctrl-K Ctrl-Y': 'sublimeYank',
                        'Ctrl-K Ctrl-C': 'showInCenter',
                        'Ctrl-K Ctrl-G': 'clearBookmarks',
                        'Ctrl-K Ctrl-Backspace': 'delLineLeft',
                        'Ctrl-K Ctrl-1': 'foldAll',
                        'Ctrl-K Ctrl-0': 'unfoldAll',
                        'Ctrl-K Ctrl-J': 'unfoldAll',
                        'Ctrl-Alt-Up': 'addCursorToPrevLine',
                        'Ctrl-Alt-Down': 'addCursorToNextLine',
                        'Ctrl-F3': 'findUnder',
                        'Shift-Ctrl-F3': 'findUnderPrevious',
                        'Alt-F3': 'findAllUnder',
                        'Shift-Ctrl-[': 'fold',
                        'Shift-Ctrl-]': 'unfold',
                        'Ctrl-I': 'findIncremental',
                        'Shift-Ctrl-I': 'findIncrementalReverse',
                        'Ctrl-H': 'replace',
                        F3: 'findNext',
                        'Shift-F3': 'findPrev',
                        fallthrough: 'pcDefault',
                    }),
                    e.normalizeKeyMap(p.pcSublime);
                var h = p.default == p.macDefault;
                p.sublime = h ? p.macSublime : p.pcSublime;
            })(n(25747), n(41859), n(52971));
        },
        91434: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e, t, n, r, i, o) {
                    (this.indented = e),
                        (this.column = t),
                        (this.type = n),
                        (this.info = r),
                        (this.align = i),
                        (this.prev = o);
                }
                function n(e, n, r, i) {
                    var o = e.indented;
                    return (
                        e.context &&
                            'statement' == e.context.type &&
                            'statement' != r &&
                            (o = e.context.indented),
                        (e.context = new t(o, n, r, i, null, e.context))
                    );
                }
                function r(e) {
                    var t = e.context.type;
                    return (
                        (')' != t && ']' != t && '}' != t) ||
                            (e.indented = e.context.indented),
                        (e.context = e.context.prev)
                    );
                }
                function i(e, t, n) {
                    return (
                        'variable' == t.prevToken ||
                        'type' == t.prevToken ||
                        !!/\S(?:[^- ]>|[*\]])\s*$|\*$/.test(
                            e.string.slice(0, n)
                        ) ||
                        !(
                            !t.typeAtEndOfLine || e.column() != e.indentation()
                        ) ||
                        void 0
                    );
                }
                function o(e) {
                    for (;;) {
                        if (!e || 'top' == e.type) return !0;
                        if ('}' == e.type && 'namespace' != e.prev.info)
                            return !1;
                        e = e.prev;
                    }
                }
                function a(e) {
                    for (var t = {}, n = e.split(' '), r = 0; r < n.length; ++r)
                        t[n[r]] = !0;
                    return t;
                }
                function s(e, t) {
                    return 'function' == typeof e
                        ? e(t)
                        : e.propertyIsEnumerable(t);
                }
                e.defineMode('clike', function(a, l) {
                    var c,
                        u,
                        d = a.indentUnit,
                        m = l.statementIndentUnit || d,
                        f = l.dontAlignCalls,
                        p = l.keywords || {},
                        h = l.types || {},
                        g = l.builtin || {},
                        b = l.blockKeywords || {},
                        v = l.defKeywords || {},
                        x = l.atoms || {},
                        y = l.hooks || {},
                        k = l.multiLineStrings,
                        w = !1 !== l.indentStatements,
                        C = !1 !== l.indentSwitch,
                        _ = l.namespaceSeparator,
                        S = l.isPunctuationChar || /[\[\]{}\(\),;\:\.]/,
                        M = l.numberStart || /[\d\.]/,
                        L =
                            l.number ||
                            /^(?:0x[a-f\d]+|0b[01]+|(?:\d+\.?\d*|\.\d+)(?:e[-+]?\d+)?)(u|ll?|l|f)?/i,
                        T = l.isOperatorChar || /[+\-*&%=<>!?|\/]/,
                        F = l.isIdentifierChar || /[\w\$_\xa1-\uffff]/,
                        E = l.isReservedIdentifier || !1;
                    function A(e, t) {
                        var n,
                            r = e.next();
                        if (y[r]) {
                            var i = y[r](e, t);
                            if (!1 !== i) return i;
                        }
                        if ('"' == r || "'" == r)
                            return (
                                (t.tokenize =
                                    ((n = r),
                                    function(e, t) {
                                        for (
                                            var r, i = !1, o = !1;
                                            null != (r = e.next());

                                        ) {
                                            if (r == n && !i) {
                                                o = !0;
                                                break;
                                            }
                                            i = !i && '\\' == r;
                                        }
                                        return (
                                            (o || (!i && !k)) &&
                                                (t.tokenize = null),
                                            'string'
                                        );
                                    })),
                                t.tokenize(e, t)
                            );
                        if (M.test(r)) {
                            if ((e.backUp(1), e.match(L))) return 'number';
                            e.next();
                        }
                        if (S.test(r)) return (c = r), null;
                        if ('/' == r) {
                            if (e.eat('*')) return (t.tokenize = P), P(e, t);
                            if (e.eat('/')) return e.skipToEnd(), 'comment';
                        }
                        if (T.test(r)) {
                            for (; !e.match(/^\/[\/*]/, !1) && e.eat(T); );
                            return 'operator';
                        }
                        if ((e.eatWhile(F), _))
                            for (; e.match(_); ) e.eatWhile(F);
                        var o = e.current();
                        return s(p, o)
                            ? (s(b, o) && (c = 'newstatement'),
                              s(v, o) && (u = !0),
                              'keyword')
                            : s(h, o)
                            ? 'type'
                            : s(g, o) || (E && E(o))
                            ? (s(b, o) && (c = 'newstatement'), 'builtin')
                            : s(x, o)
                            ? 'atom'
                            : 'variable';
                    }
                    function P(e, t) {
                        for (var n, r = !1; (n = e.next()); ) {
                            if ('/' == n && r) {
                                t.tokenize = null;
                                break;
                            }
                            r = '*' == n;
                        }
                        return 'comment';
                    }
                    function D(e, t) {
                        l.typeFirstDefinitions &&
                            e.eol() &&
                            o(t.context) &&
                            (t.typeAtEndOfLine = i(e, t, e.pos));
                    }
                    return {
                        startState: function(e) {
                            return {
                                tokenize: null,
                                context: new t(
                                    (e || 0) - d,
                                    0,
                                    'top',
                                    null,
                                    !1
                                ),
                                indented: 0,
                                startOfLine: !0,
                                prevToken: null,
                            };
                        },
                        token: function(e, t) {
                            var a = t.context;
                            if (
                                (e.sol() &&
                                    (null == a.align && (a.align = !1),
                                    (t.indented = e.indentation()),
                                    (t.startOfLine = !0)),
                                e.eatSpace())
                            )
                                return D(e, t), null;
                            c = u = null;
                            var s = (t.tokenize || A)(e, t);
                            if ('comment' == s || 'meta' == s) return s;
                            if (
                                (null == a.align && (a.align = !0),
                                ';' == c ||
                                    ':' == c ||
                                    (',' == c &&
                                        e.match(/^\s*(?:\/\/.*)?$/, !1)))
                            )
                                for (; 'statement' == t.context.type; ) r(t);
                            else if ('{' == c) n(t, e.column(), '}');
                            else if ('[' == c) n(t, e.column(), ']');
                            else if ('(' == c) n(t, e.column(), ')');
                            else if ('}' == c) {
                                for (; 'statement' == a.type; ) a = r(t);
                                for (
                                    '}' == a.type && (a = r(t));
                                    'statement' == a.type;

                                )
                                    a = r(t);
                            } else
                                c == a.type
                                    ? r(t)
                                    : w &&
                                      ((('}' == a.type || 'top' == a.type) &&
                                          ';' != c) ||
                                          ('statement' == a.type &&
                                              'newstatement' == c)) &&
                                      n(
                                          t,
                                          e.column(),
                                          'statement',
                                          e.current()
                                      );
                            if (
                                ('variable' == s &&
                                    ('def' == t.prevToken ||
                                        (l.typeFirstDefinitions &&
                                            i(e, t, e.start) &&
                                            o(t.context) &&
                                            e.match(/^\s*\(/, !1))) &&
                                    (s = 'def'),
                                y.token)
                            ) {
                                var d = y.token(e, t, s);
                                void 0 !== d && (s = d);
                            }
                            return (
                                'def' == s &&
                                    !1 === l.styleDefs &&
                                    (s = 'variable'),
                                (t.startOfLine = !1),
                                (t.prevToken = u ? 'def' : s || c),
                                D(e, t),
                                s
                            );
                        },
                        indent: function(t, n) {
                            if (
                                (t.tokenize != A && null != t.tokenize) ||
                                t.typeAtEndOfLine
                            )
                                return e.Pass;
                            var r = t.context,
                                i = n && n.charAt(0),
                                o = i == r.type;
                            if (
                                ('statement' == r.type &&
                                    '}' == i &&
                                    (r = r.prev),
                                l.dontIndentStatements)
                            )
                                for (
                                    ;
                                    'statement' == r.type &&
                                    l.dontIndentStatements.test(r.info);

                                )
                                    r = r.prev;
                            if (y.indent) {
                                var a = y.indent(t, r, n, d);
                                if ('number' == typeof a) return a;
                            }
                            var s = r.prev && 'switch' == r.prev.info;
                            if (l.allmanIndentation && /[{(]/.test(i)) {
                                for (; 'top' != r.type && '}' != r.type; )
                                    r = r.prev;
                                return r.indented;
                            }
                            return 'statement' == r.type
                                ? r.indented + ('{' == i ? 0 : m)
                                : !r.align || (f && ')' == r.type)
                                ? ')' != r.type || o
                                    ? r.indented +
                                      (o ? 0 : d) +
                                      (o || !s || /^(?:case|default)\b/.test(n)
                                          ? 0
                                          : d)
                                    : r.indented + m
                                : r.column + (o ? 0 : 1);
                        },
                        electricInput: C
                            ? /^\s*(?:case .*?:|default:|\{\}?|\})$/
                            : /^\s*[{}]$/,
                        blockCommentStart: '/*',
                        blockCommentEnd: '*/',
                        blockCommentContinue: ' * ',
                        lineComment: '//',
                        fold: 'brace',
                    };
                });
                var l =
                        'auto if break case register continue return default do sizeof static else struct switch extern typedef union for goto while enum const volatile inline restrict asm fortran',
                    c =
                        'alignas alignof and and_eq audit axiom bitand bitor catch class compl concept constexpr const_cast decltype delete dynamic_cast explicit export final friend import module mutable namespace new noexcept not not_eq operator or or_eq override private protected public reinterpret_cast requires static_assert static_cast template this thread_local throw try typeid typename using virtual xor xor_eq',
                    u =
                        'bycopy byref in inout oneway out self super atomic nonatomic retain copy readwrite readonly strong weak assign typeof nullable nonnull null_resettable _cmd @interface @implementation @end @protocol @encode @property @synthesize @dynamic @class @public @package @private @protected @required @optional @try @catch @finally @import @selector @encode @defs @synchronized @autoreleasepool @compatibility_alias @available',
                    d =
                        'FOUNDATION_EXPORT FOUNDATION_EXTERN NS_INLINE NS_FORMAT_FUNCTION  NS_RETURNS_RETAINEDNS_ERROR_ENUM NS_RETURNS_NOT_RETAINED NS_RETURNS_INNER_POINTER NS_DESIGNATED_INITIALIZER NS_ENUM NS_OPTIONS NS_REQUIRES_NIL_TERMINATION NS_ASSUME_NONNULL_BEGIN NS_ASSUME_NONNULL_END NS_SWIFT_NAME NS_REFINED_FOR_SWIFT',
                    m = a(
                        'int long char short double float unsigned signed void bool'
                    ),
                    f = a('SEL instancetype id Class Protocol BOOL');
                function p(e) {
                    return s(m, e) || /.+_t$/.test(e);
                }
                function h(e) {
                    return p(e) || s(f, e);
                }
                var g = 'case do else for if switch while struct enum union',
                    b = 'struct enum union';
                function v(e, t) {
                    if (!t.startOfLine) return !1;
                    for (var n, r = null; (n = e.peek()); ) {
                        if ('\\' == n && e.match(/^.$/)) {
                            r = v;
                            break;
                        }
                        if ('/' == n && e.match(/^\/[\/\*]/, !1)) break;
                        e.next();
                    }
                    return (t.tokenize = r), 'meta';
                }
                function x(e, t) {
                    return 'type' == t.prevToken && 'type';
                }
                function y(e) {
                    return !(
                        !e ||
                        e.length < 2 ||
                        '_' != e[0] ||
                        ('_' != e[1] && e[1] === e[1].toLowerCase())
                    );
                }
                function k(e) {
                    return e.eatWhile(/[\w\.']/), 'number';
                }
                function w(e, t) {
                    if ((e.backUp(1), e.match(/^(?:R|u8R|uR|UR|LR)/))) {
                        var n = e.match(/^"([^\s\\()]{0,16})\(/);
                        return (
                            !!n &&
                            ((t.cpp11RawStringDelim = n[1]),
                            (t.tokenize = S),
                            S(e, t))
                        );
                    }
                    return e.match(/^(?:u8|u|U|L)/)
                        ? !!e.match(/^["']/, !1) && 'string'
                        : (e.next(), !1);
                }
                function C(e) {
                    var t = /(\w+)::~?(\w+)$/.exec(e);
                    return t && t[1] == t[2];
                }
                function _(e, t) {
                    for (var n; null != (n = e.next()); )
                        if ('"' == n && !e.eat('"')) {
                            t.tokenize = null;
                            break;
                        }
                    return 'string';
                }
                function S(e, t) {
                    var n = t.cpp11RawStringDelim.replace(/[^\w\s]/g, '\\$&');
                    return (
                        e.match(new RegExp('.*?\\)' + n + '"'))
                            ? (t.tokenize = null)
                            : e.skipToEnd(),
                        'string'
                    );
                }
                function M(t, n) {
                    'string' == typeof t && (t = [t]);
                    var r = [];
                    function i(e) {
                        if (e)
                            for (var t in e) e.hasOwnProperty(t) && r.push(t);
                    }
                    i(n.keywords),
                        i(n.types),
                        i(n.builtin),
                        i(n.atoms),
                        r.length &&
                            ((n.helperType = t[0]),
                            e.registerHelper('hintWords', t[0], r));
                    for (var o = 0; o < t.length; ++o) e.defineMIME(t[o], n);
                }
                function L(e, t) {
                    for (var n = !1; !e.eol(); ) {
                        if (!n && e.match('"""')) {
                            t.tokenize = null;
                            break;
                        }
                        n = '\\' == e.next() && !n;
                    }
                    return 'string';
                }
                function T(e) {
                    return function(t, n) {
                        for (var r; (r = t.next()); ) {
                            if ('*' == r && t.eat('/')) {
                                if (1 == e) {
                                    n.tokenize = null;
                                    break;
                                }
                                return (
                                    (n.tokenize = T(e - 1)), n.tokenize(t, n)
                                );
                            }
                            if ('/' == r && t.eat('*'))
                                return (
                                    (n.tokenize = T(e + 1)), n.tokenize(t, n)
                                );
                        }
                        return 'comment';
                    };
                }
                M(['text/x-csrc', 'text/x-c', 'text/x-chdr'], {
                    name: 'clike',
                    keywords: a(l),
                    types: p,
                    blockKeywords: a(g),
                    defKeywords: a(b),
                    typeFirstDefinitions: !0,
                    atoms: a('NULL true false'),
                    isReservedIdentifier: y,
                    hooks: { '#': v, '*': x },
                    modeProps: { fold: ['brace', 'include'] },
                }),
                    M(['text/x-c++src', 'text/x-c++hdr'], {
                        name: 'clike',
                        keywords: a(l + ' ' + c),
                        types: p,
                        blockKeywords: a(g + ' class try catch'),
                        defKeywords: a(b + ' class namespace'),
                        typeFirstDefinitions: !0,
                        atoms: a('true false NULL nullptr'),
                        dontIndentStatements: /^template$/,
                        isIdentifierChar: /[\w\$_~\xa1-\uffff]/,
                        isReservedIdentifier: y,
                        hooks: {
                            '#': v,
                            '*': x,
                            u: w,
                            U: w,
                            L: w,
                            R: w,
                            0: k,
                            1: k,
                            2: k,
                            3: k,
                            4: k,
                            5: k,
                            6: k,
                            7: k,
                            8: k,
                            9: k,
                            token: function(e, t, n) {
                                if (
                                    'variable' == n &&
                                    '(' == e.peek() &&
                                    (';' == t.prevToken ||
                                        null == t.prevToken ||
                                        '}' == t.prevToken) &&
                                    C(e.current())
                                )
                                    return 'def';
                            },
                        },
                        namespaceSeparator: '::',
                        modeProps: { fold: ['brace', 'include'] },
                    }),
                    M('text/x-java', {
                        name: 'clike',
                        keywords: a(
                            'abstract assert break case catch class const continue default do else enum extends final finally for goto if implements import instanceof interface native new package private protected public return static strictfp super switch synchronized this throw throws transient try volatile while @interface'
                        ),
                        types: a(
                            'byte short int long float double boolean char void Boolean Byte Character Double Float Integer Long Number Object Short String StringBuffer StringBuilder Void'
                        ),
                        blockKeywords: a(
                            'catch class do else finally for if switch try while'
                        ),
                        defKeywords: a('class interface enum @interface'),
                        typeFirstDefinitions: !0,
                        atoms: a('true false null'),
                        number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+\.?\d*|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
                        hooks: {
                            '@': function(e) {
                                return (
                                    !e.match('interface', !1) &&
                                    (e.eatWhile(/[\w\$_]/), 'meta')
                                );
                            },
                        },
                        modeProps: { fold: ['brace', 'import'] },
                    }),
                    M('text/x-csharp', {
                        name: 'clike',
                        keywords: a(
                            'abstract as async await base break case catch checked class const continue default delegate do else enum event explicit extern finally fixed for foreach goto if implicit in interface internal is lock namespace new operator out override params private protected public readonly ref return sealed sizeof stackalloc static struct switch this throw try typeof unchecked unsafe using virtual void volatile while add alias ascending descending dynamic from get global group into join let orderby partial remove select set value var yield'
                        ),
                        types: a(
                            'Action Boolean Byte Char DateTime DateTimeOffset Decimal Double Func Guid Int16 Int32 Int64 Object SByte Single String Task TimeSpan UInt16 UInt32 UInt64 bool byte char decimal double short int long object sbyte float string ushort uint ulong'
                        ),
                        blockKeywords: a(
                            'catch class do else finally for foreach if struct switch try while'
                        ),
                        defKeywords: a('class interface namespace struct var'),
                        typeFirstDefinitions: !0,
                        atoms: a('true false null'),
                        hooks: {
                            '@': function(e, t) {
                                return e.eat('"')
                                    ? ((t.tokenize = _), _(e, t))
                                    : (e.eatWhile(/[\w\$_]/), 'meta');
                            },
                        },
                    }),
                    M('text/x-scala', {
                        name: 'clike',
                        keywords: a(
                            'abstract case catch class def do else extends final finally for forSome if implicit import lazy match new null object override package private protected return sealed super this throw trait try type val var while with yield _ assert assume require print println printf readLine readBoolean readByte readShort readChar readInt readLong readFloat readDouble'
                        ),
                        types: a(
                            'AnyVal App Application Array BufferedIterator BigDecimal BigInt Char Console Either Enumeration Equiv Error Exception Fractional Function IndexedSeq Int Integral Iterable Iterator List Map Numeric Nil NotNull Option Ordered Ordering PartialFunction PartialOrdering Product Proxy Range Responder Seq Serializable Set Specializable Stream StringBuilder StringContext Symbol Throwable Traversable TraversableOnce Tuple Unit Vector Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void'
                        ),
                        multiLineStrings: !0,
                        blockKeywords: a(
                            'catch class enum do else finally for forSome if match switch try while'
                        ),
                        defKeywords: a(
                            'class enum def object package trait type val var'
                        ),
                        atoms: a('true false null'),
                        indentStatements: !1,
                        indentSwitch: !1,
                        isOperatorChar: /[+\-*&%=<>!?|\/#:@]/,
                        hooks: {
                            '@': function(e) {
                                return e.eatWhile(/[\w\$_]/), 'meta';
                            },
                            '"': function(e, t) {
                                return (
                                    !!e.match('""') &&
                                    ((t.tokenize = L), t.tokenize(e, t))
                                );
                            },
                            "'": function(e) {
                                return e.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom';
                            },
                            '=': function(e, n) {
                                var r = n.context;
                                return (
                                    !(
                                        '}' != r.type ||
                                        !r.align ||
                                        !e.eat('>')
                                    ) &&
                                    ((n.context = new t(
                                        r.indented,
                                        r.column,
                                        r.type,
                                        r.info,
                                        null,
                                        r.prev
                                    )),
                                    'operator')
                                );
                            },
                            '/': function(e, t) {
                                return (
                                    !!e.eat('*') &&
                                    ((t.tokenize = T(1)), t.tokenize(e, t))
                                );
                            },
                        },
                        modeProps: {
                            closeBrackets: { pairs: '()[]{}""', triples: '"' },
                        },
                    }),
                    M('text/x-kotlin', {
                        name: 'clike',
                        keywords: a(
                            'package as typealias class interface this super val operator var fun for is in This throw return annotation break continue object if else while do try when !in !is as? file import where by get set abstract enum open inner override private public internal protected catch finally out final vararg reified dynamic companion constructor init sealed field property receiver param sparam lateinit data inline noinline tailrec external annotation crossinline const operator infix suspend actual expect setparam value'
                        ),
                        types: a(
                            'Boolean Byte Character CharSequence Class ClassLoader Cloneable Comparable Compiler Double Exception Float Integer Long Math Number Object Package Pair Process Runtime Runnable SecurityManager Short StackTraceElement StrictMath String StringBuffer System Thread ThreadGroup ThreadLocal Throwable Triple Void Annotation Any BooleanArray ByteArray Char CharArray DeprecationLevel DoubleArray Enum FloatArray Function Int IntArray Lazy LazyThreadSafetyMode LongArray Nothing ShortArray Unit'
                        ),
                        intendSwitch: !1,
                        indentStatements: !1,
                        multiLineStrings: !0,
                        number: /^(?:0x[a-f\d_]+|0b[01_]+|(?:[\d_]+(\.\d+)?|\.\d+)(?:e[-+]?[\d_]+)?)(u|ll?|l|f)?/i,
                        blockKeywords: a(
                            'catch class do else finally for if where try while enum'
                        ),
                        defKeywords: a('class val var object interface fun'),
                        atoms: a('true false null this'),
                        hooks: {
                            '@': function(e) {
                                return e.eatWhile(/[\w\$_]/), 'meta';
                            },
                            '*': function(e, t) {
                                return '.' == t.prevToken
                                    ? 'variable'
                                    : 'operator';
                            },
                            '"': function(e, t) {
                                return (
                                    (t.tokenize =
                                        ((n = e.match('""')),
                                        function(e, t) {
                                            for (
                                                var r, i = !1, o = !1;
                                                !e.eol();

                                            ) {
                                                if (!n && !i && e.match('"')) {
                                                    o = !0;
                                                    break;
                                                }
                                                if (n && e.match('"""')) {
                                                    o = !0;
                                                    break;
                                                }
                                                (r = e.next()),
                                                    !i &&
                                                        '$' == r &&
                                                        e.match('{') &&
                                                        e.skipTo('}'),
                                                    (i = !i && '\\' == r && !n);
                                            }
                                            return (
                                                (!o && n) ||
                                                    (t.tokenize = null),
                                                'string'
                                            );
                                        })),
                                    t.tokenize(e, t)
                                );
                                var n;
                            },
                            '/': function(e, t) {
                                return (
                                    !!e.eat('*') &&
                                    ((t.tokenize = T(1)), t.tokenize(e, t))
                                );
                            },
                            indent: function(e, t, n, r) {
                                var i = n && n.charAt(0);
                                return ('}' != e.prevToken &&
                                    ')' != e.prevToken) ||
                                    '' != n
                                    ? ('operator' == e.prevToken &&
                                          '}' != n &&
                                          '}' != e.context.type) ||
                                      ('variable' == e.prevToken && '.' == i) ||
                                      (('}' == e.prevToken ||
                                          ')' == e.prevToken) &&
                                          '.' == i)
                                        ? 2 * r + t.indented
                                        : t.align && '}' == t.type
                                        ? t.indented +
                                          (e.context.type == (n || '').charAt(0)
                                              ? 0
                                              : r)
                                        : void 0
                                    : e.indented;
                            },
                        },
                        modeProps: { closeBrackets: { triples: '"' } },
                    }),
                    M(['x-shader/x-vertex', 'x-shader/x-fragment'], {
                        name: 'clike',
                        keywords: a(
                            'sampler1D sampler2D sampler3D samplerCube sampler1DShadow sampler2DShadow const attribute uniform varying break continue discard return for while do if else struct in out inout'
                        ),
                        types: a(
                            'float int bool void vec2 vec3 vec4 ivec2 ivec3 ivec4 bvec2 bvec3 bvec4 mat2 mat3 mat4'
                        ),
                        blockKeywords: a('for while do if else struct'),
                        builtin: a(
                            'radians degrees sin cos tan asin acos atan pow exp log exp2 sqrt inversesqrt abs sign floor ceil fract mod min max clamp mix step smoothstep length distance dot cross normalize ftransform faceforward reflect refract matrixCompMult lessThan lessThanEqual greaterThan greaterThanEqual equal notEqual any all not texture1D texture1DProj texture1DLod texture1DProjLod texture2D texture2DProj texture2DLod texture2DProjLod texture3D texture3DProj texture3DLod texture3DProjLod textureCube textureCubeLod shadow1D shadow2D shadow1DProj shadow2DProj shadow1DLod shadow2DLod shadow1DProjLod shadow2DProjLod dFdx dFdy fwidth noise1 noise2 noise3 noise4'
                        ),
                        atoms: a(
                            'true false gl_FragColor gl_SecondaryColor gl_Normal gl_Vertex gl_MultiTexCoord0 gl_MultiTexCoord1 gl_MultiTexCoord2 gl_MultiTexCoord3 gl_MultiTexCoord4 gl_MultiTexCoord5 gl_MultiTexCoord6 gl_MultiTexCoord7 gl_FogCoord gl_PointCoord gl_Position gl_PointSize gl_ClipVertex gl_FrontColor gl_BackColor gl_FrontSecondaryColor gl_BackSecondaryColor gl_TexCoord gl_FogFragCoord gl_FragCoord gl_FrontFacing gl_FragData gl_FragDepth gl_ModelViewMatrix gl_ProjectionMatrix gl_ModelViewProjectionMatrix gl_TextureMatrix gl_NormalMatrix gl_ModelViewMatrixInverse gl_ProjectionMatrixInverse gl_ModelViewProjectionMatrixInverse gl_TextureMatrixTranspose gl_ModelViewMatrixInverseTranspose gl_ProjectionMatrixInverseTranspose gl_ModelViewProjectionMatrixInverseTranspose gl_TextureMatrixInverseTranspose gl_NormalScale gl_DepthRange gl_ClipPlane gl_Point gl_FrontMaterial gl_BackMaterial gl_LightSource gl_LightModel gl_FrontLightModelProduct gl_BackLightModelProduct gl_TextureColor gl_EyePlaneS gl_EyePlaneT gl_EyePlaneR gl_EyePlaneQ gl_FogParameters gl_MaxLights gl_MaxClipPlanes gl_MaxTextureUnits gl_MaxTextureCoords gl_MaxVertexAttribs gl_MaxVertexUniformComponents gl_MaxVaryingFloats gl_MaxVertexTextureImageUnits gl_MaxTextureImageUnits gl_MaxFragmentUniformComponents gl_MaxCombineTextureImageUnits gl_MaxDrawBuffers'
                        ),
                        indentSwitch: !1,
                        hooks: { '#': v },
                        modeProps: { fold: ['brace', 'include'] },
                    }),
                    M('text/x-nesc', {
                        name: 'clike',
                        keywords: a(
                            l +
                                ' as atomic async call command component components configuration event generic implementation includes interface module new norace nx_struct nx_union post provides signal task uses abstract extends'
                        ),
                        types: p,
                        blockKeywords: a(g),
                        atoms: a('null true false'),
                        hooks: { '#': v },
                        modeProps: { fold: ['brace', 'include'] },
                    }),
                    M('text/x-objectivec', {
                        name: 'clike',
                        keywords: a(l + ' ' + u),
                        types: h,
                        builtin: a(d),
                        blockKeywords: a(
                            g +
                                ' @synthesize @try @catch @finally @autoreleasepool @synchronized'
                        ),
                        defKeywords: a(
                            b + ' @interface @implementation @protocol @class'
                        ),
                        dontIndentStatements: /^@.*$/,
                        typeFirstDefinitions: !0,
                        atoms: a('YES NO NULL Nil nil true false nullptr'),
                        isReservedIdentifier: y,
                        hooks: { '#': v, '*': x },
                        modeProps: { fold: ['brace', 'include'] },
                    }),
                    M('text/x-objectivec++', {
                        name: 'clike',
                        keywords: a(l + ' ' + u + ' ' + c),
                        types: h,
                        builtin: a(d),
                        blockKeywords: a(
                            g +
                                ' @synthesize @try @catch @finally @autoreleasepool @synchronized class try catch'
                        ),
                        defKeywords: a(
                            b +
                                ' @interface @implementation @protocol @class class namespace'
                        ),
                        dontIndentStatements: /^@.*$|^template$/,
                        typeFirstDefinitions: !0,
                        atoms: a('YES NO NULL Nil nil true false nullptr'),
                        isReservedIdentifier: y,
                        hooks: {
                            '#': v,
                            '*': x,
                            u: w,
                            U: w,
                            L: w,
                            R: w,
                            0: k,
                            1: k,
                            2: k,
                            3: k,
                            4: k,
                            5: k,
                            6: k,
                            7: k,
                            8: k,
                            9: k,
                            token: function(e, t, n) {
                                if (
                                    'variable' == n &&
                                    '(' == e.peek() &&
                                    (';' == t.prevToken ||
                                        null == t.prevToken ||
                                        '}' == t.prevToken) &&
                                    C(e.current())
                                )
                                    return 'def';
                            },
                        },
                        namespaceSeparator: '::',
                        modeProps: { fold: ['brace', 'include'] },
                    }),
                    M('text/x-squirrel', {
                        name: 'clike',
                        keywords: a(
                            'base break clone continue const default delete enum extends function in class foreach local resume return this throw typeof yield constructor instanceof static'
                        ),
                        types: p,
                        blockKeywords: a(
                            'case catch class else for foreach if switch try while'
                        ),
                        defKeywords: a('function local class'),
                        typeFirstDefinitions: !0,
                        atoms: a('true false null'),
                        hooks: { '#': v },
                        modeProps: { fold: ['brace', 'include'] },
                    });
                var F = null;
                function E(e) {
                    return function(t, n) {
                        for (var r, i = !1, o = !1; !t.eol(); ) {
                            if (
                                !i &&
                                t.match('"') &&
                                ('single' == e || t.match('""'))
                            ) {
                                o = !0;
                                break;
                            }
                            if (!i && t.match('``')) {
                                (F = E(e)), (o = !0);
                                break;
                            }
                            (r = t.next()),
                                (i = 'single' == e && !i && '\\' == r);
                        }
                        return o && (n.tokenize = null), 'string';
                    };
                }
                M('text/x-ceylon', {
                    name: 'clike',
                    keywords: a(
                        'abstracts alias assembly assert assign break case catch class continue dynamic else exists extends finally for function given if import in interface is let module new nonempty object of out outer package return satisfies super switch then this throw try value void while'
                    ),
                    types: function(e) {
                        var t = e.charAt(0);
                        return t === t.toUpperCase() && t !== t.toLowerCase();
                    },
                    blockKeywords: a(
                        'case catch class dynamic else finally for function if interface module new object switch try while'
                    ),
                    defKeywords: a(
                        'class dynamic function interface module object package value'
                    ),
                    builtin: a(
                        'abstract actual aliased annotation by default deprecated doc final formal late license native optional sealed see serializable shared suppressWarnings tagged throws variable'
                    ),
                    isPunctuationChar: /[\[\]{}\(\),;\:\.`]/,
                    isOperatorChar: /[+\-*&%=<>!?|^~:\/]/,
                    numberStart: /[\d#$]/,
                    number: /^(?:#[\da-fA-F_]+|\$[01_]+|[\d_]+[kMGTPmunpf]?|[\d_]+\.[\d_]+(?:[eE][-+]?\d+|[kMGTPmunpf]|)|)/i,
                    multiLineStrings: !0,
                    typeFirstDefinitions: !0,
                    atoms: a(
                        'true false null larger smaller equal empty finished'
                    ),
                    indentSwitch: !1,
                    styleDefs: !1,
                    hooks: {
                        '@': function(e) {
                            return e.eatWhile(/[\w\$_]/), 'meta';
                        },
                        '"': function(e, t) {
                            return (
                                (t.tokenize = E(
                                    e.match('""') ? 'triple' : 'single'
                                )),
                                t.tokenize(e, t)
                            );
                        },
                        '`': function(e, t) {
                            return (
                                !(!F || !e.match('`')) &&
                                ((t.tokenize = F), (F = null), t.tokenize(e, t))
                            );
                        },
                        "'": function(e) {
                            return e.eatWhile(/[\w\$_\xa1-\uffff]/), 'atom';
                        },
                        token: function(e, t, n) {
                            if (
                                ('variable' == n || 'type' == n) &&
                                '.' == t.prevToken
                            )
                                return 'variable-2';
                        },
                    },
                    modeProps: {
                        fold: ['brace', 'import'],
                        closeBrackets: { triples: '"' },
                    },
                });
            })(n(25747));
        },
        1827: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e) {
                    for (var t = {}, n = 0; n < e.length; ++n)
                        t[e[n].toLowerCase()] = !0;
                    return t;
                }
                e.defineMode('css', function(t, n) {
                    var r = n.inline;
                    n.propertyKeywords || (n = e.resolveMode('text/css'));
                    var i,
                        o,
                        a = t.indentUnit,
                        s = n.tokenHooks,
                        l = n.documentTypes || {},
                        c = n.mediaTypes || {},
                        u = n.mediaFeatures || {},
                        d = n.mediaValueKeywords || {},
                        m = n.propertyKeywords || {},
                        f = n.nonStandardPropertyKeywords || {},
                        p = n.fontProperties || {},
                        h = n.counterDescriptors || {},
                        g = n.colorKeywords || {},
                        b = n.valueKeywords || {},
                        v = n.allowNested,
                        x = n.lineComment,
                        y = !0 === n.supportsAtComponent,
                        k = !1 !== t.highlightNonStandardPropertyKeywords;
                    function w(e, t) {
                        return (i = t), e;
                    }
                    function C(e, t) {
                        var n = e.next();
                        if (s[n]) {
                            var r = s[n](e, t);
                            if (!1 !== r) return r;
                        }
                        return '@' == n
                            ? (e.eatWhile(/[\w\\\-]/), w('def', e.current()))
                            : '=' == n || (('~' == n || '|' == n) && e.eat('='))
                            ? w(null, 'compare')
                            : '"' == n || "'" == n
                            ? ((t.tokenize = _(n)), t.tokenize(e, t))
                            : '#' == n
                            ? (e.eatWhile(/[\w\\\-]/), w('atom', 'hash'))
                            : '!' == n
                            ? (e.match(/^\s*\w*/), w('keyword', 'important'))
                            : /\d/.test(n) || ('.' == n && e.eat(/\d/))
                            ? (e.eatWhile(/[\w.%]/), w('number', 'unit'))
                            : '-' !== n
                            ? /[,+>*\/]/.test(n)
                                ? w(null, 'select-op')
                                : '.' == n && e.match(/^-?[_a-z][_a-z0-9-]*/i)
                                ? w('qualifier', 'qualifier')
                                : /[:;{}\[\]\(\)]/.test(n)
                                ? w(null, n)
                                : e.match(/^[\w-.]+(?=\()/)
                                ? (/^(url(-prefix)?|domain|regexp)$/i.test(
                                      e.current()
                                  ) && (t.tokenize = S),
                                  w('variable callee', 'variable'))
                                : /[\w\\\-]/.test(n)
                                ? (e.eatWhile(/[\w\\\-]/),
                                  w('property', 'word'))
                                : w(null, null)
                            : /[\d.]/.test(e.peek())
                            ? (e.eatWhile(/[\w.%]/), w('number', 'unit'))
                            : e.match(/^-[\w\\\-]*/)
                            ? (e.eatWhile(/[\w\\\-]/),
                              e.match(/^\s*:/, !1)
                                  ? w('variable-2', 'variable-definition')
                                  : w('variable-2', 'variable'))
                            : e.match(/^\w+-/)
                            ? w('meta', 'meta')
                            : void 0;
                    }
                    function _(e) {
                        return function(t, n) {
                            for (var r, i = !1; null != (r = t.next()); ) {
                                if (r == e && !i) {
                                    ')' == e && t.backUp(1);
                                    break;
                                }
                                i = !i && '\\' == r;
                            }
                            return (
                                (r == e || (!i && ')' != e)) &&
                                    (n.tokenize = null),
                                w('string', 'string')
                            );
                        };
                    }
                    function S(e, t) {
                        return (
                            e.next(),
                            e.match(/^\s*[\"\')]/, !1)
                                ? (t.tokenize = null)
                                : (t.tokenize = _(')')),
                            w(null, '(')
                        );
                    }
                    function M(e, t, n) {
                        (this.type = e), (this.indent = t), (this.prev = n);
                    }
                    function L(e, t, n, r) {
                        return (
                            (e.context = new M(
                                n,
                                t.indentation() + (!1 === r ? 0 : a),
                                e.context
                            )),
                            n
                        );
                    }
                    function T(e) {
                        return (
                            e.context.prev && (e.context = e.context.prev),
                            e.context.type
                        );
                    }
                    function F(e, t, n) {
                        return P[n.context.type](e, t, n);
                    }
                    function E(e, t, n, r) {
                        for (var i = r || 1; i > 0; i--)
                            n.context = n.context.prev;
                        return F(e, t, n);
                    }
                    function A(e) {
                        var t = e.current().toLowerCase();
                        o = b.hasOwnProperty(t)
                            ? 'atom'
                            : g.hasOwnProperty(t)
                            ? 'keyword'
                            : 'variable';
                    }
                    var P = {
                        top: function(e, t, n) {
                            if ('{' == e) return L(n, t, 'block');
                            if ('}' == e && n.context.prev) return T(n);
                            if (y && /@component/i.test(e))
                                return L(n, t, 'atComponentBlock');
                            if (/^@(-moz-)?document$/i.test(e))
                                return L(n, t, 'documentTypes');
                            if (
                                /^@(media|supports|(-moz-)?document|import)$/i.test(
                                    e
                                )
                            )
                                return L(n, t, 'atBlock');
                            if (/^@(font-face|counter-style)/i.test(e))
                                return (
                                    (n.stateArg = e),
                                    'restricted_atBlock_before'
                                );
                            if (/^@(-(moz|ms|o|webkit)-)?keyframes$/i.test(e))
                                return 'keyframes';
                            if (e && '@' == e.charAt(0)) return L(n, t, 'at');
                            if ('hash' == e) o = 'builtin';
                            else if ('word' == e) o = 'tag';
                            else {
                                if ('variable-definition' == e)
                                    return 'maybeprop';
                                if ('interpolation' == e)
                                    return L(n, t, 'interpolation');
                                if (':' == e) return 'pseudo';
                                if (v && '(' == e) return L(n, t, 'parens');
                            }
                            return n.context.type;
                        },
                        block: function(e, t, n) {
                            if ('word' == e) {
                                var r = t.current().toLowerCase();
                                return m.hasOwnProperty(r)
                                    ? ((o = 'property'), 'maybeprop')
                                    : f.hasOwnProperty(r)
                                    ? ((o = k ? 'string-2' : 'property'),
                                      'maybeprop')
                                    : v
                                    ? ((o = t.match(/^\s*:(?:\s|$)/, !1)
                                          ? 'property'
                                          : 'tag'),
                                      'block')
                                    : ((o += ' error'), 'maybeprop');
                            }
                            return 'meta' == e
                                ? 'block'
                                : v || ('hash' != e && 'qualifier' != e)
                                ? P.top(e, t, n)
                                : ((o = 'error'), 'block');
                        },
                        maybeprop: function(e, t, n) {
                            return ':' == e ? L(n, t, 'prop') : F(e, t, n);
                        },
                        prop: function(e, t, n) {
                            if (';' == e) return T(n);
                            if ('{' == e && v) return L(n, t, 'propBlock');
                            if ('}' == e || '{' == e) return E(e, t, n);
                            if ('(' == e) return L(n, t, 'parens');
                            if (
                                'hash' != e ||
                                /^#([0-9a-fA-f]{3,4}|[0-9a-fA-f]{6}|[0-9a-fA-f]{8})$/.test(
                                    t.current()
                                )
                            ) {
                                if ('word' == e) A(t);
                                else if ('interpolation' == e)
                                    return L(n, t, 'interpolation');
                            } else o += ' error';
                            return 'prop';
                        },
                        propBlock: function(e, t, n) {
                            return '}' == e
                                ? T(n)
                                : 'word' == e
                                ? ((o = 'property'), 'maybeprop')
                                : n.context.type;
                        },
                        parens: function(e, t, n) {
                            return '{' == e || '}' == e
                                ? E(e, t, n)
                                : ')' == e
                                ? T(n)
                                : '(' == e
                                ? L(n, t, 'parens')
                                : 'interpolation' == e
                                ? L(n, t, 'interpolation')
                                : ('word' == e && A(t), 'parens');
                        },
                        pseudo: function(e, t, n) {
                            return 'meta' == e
                                ? 'pseudo'
                                : 'word' == e
                                ? ((o = 'variable-3'), n.context.type)
                                : F(e, t, n);
                        },
                        documentTypes: function(e, t, n) {
                            return 'word' == e && l.hasOwnProperty(t.current())
                                ? ((o = 'tag'), n.context.type)
                                : P.atBlock(e, t, n);
                        },
                        atBlock: function(e, t, n) {
                            if ('(' == e) return L(n, t, 'atBlock_parens');
                            if ('}' == e || ';' == e) return E(e, t, n);
                            if ('{' == e)
                                return T(n) && L(n, t, v ? 'block' : 'top');
                            if ('interpolation' == e)
                                return L(n, t, 'interpolation');
                            if ('word' == e) {
                                var r = t.current().toLowerCase();
                                o =
                                    'only' == r ||
                                    'not' == r ||
                                    'and' == r ||
                                    'or' == r
                                        ? 'keyword'
                                        : c.hasOwnProperty(r)
                                        ? 'attribute'
                                        : u.hasOwnProperty(r)
                                        ? 'property'
                                        : d.hasOwnProperty(r)
                                        ? 'keyword'
                                        : m.hasOwnProperty(r)
                                        ? 'property'
                                        : f.hasOwnProperty(r)
                                        ? k
                                            ? 'string-2'
                                            : 'property'
                                        : b.hasOwnProperty(r)
                                        ? 'atom'
                                        : g.hasOwnProperty(r)
                                        ? 'keyword'
                                        : 'error';
                            }
                            return n.context.type;
                        },
                        atComponentBlock: function(e, t, n) {
                            return '}' == e
                                ? E(e, t, n)
                                : '{' == e
                                ? T(n) && L(n, t, v ? 'block' : 'top', !1)
                                : ('word' == e && (o = 'error'),
                                  n.context.type);
                        },
                        atBlock_parens: function(e, t, n) {
                            return ')' == e
                                ? T(n)
                                : '{' == e || '}' == e
                                ? E(e, t, n, 2)
                                : P.atBlock(e, t, n);
                        },
                        restricted_atBlock_before: function(e, t, n) {
                            return '{' == e
                                ? L(n, t, 'restricted_atBlock')
                                : 'word' == e && '@counter-style' == n.stateArg
                                ? ((o = 'variable'),
                                  'restricted_atBlock_before')
                                : F(e, t, n);
                        },
                        restricted_atBlock: function(e, t, n) {
                            return '}' == e
                                ? ((n.stateArg = null), T(n))
                                : 'word' == e
                                ? ((o =
                                      ('@font-face' == n.stateArg &&
                                          !p.hasOwnProperty(
                                              t.current().toLowerCase()
                                          )) ||
                                      ('@counter-style' == n.stateArg &&
                                          !h.hasOwnProperty(
                                              t.current().toLowerCase()
                                          ))
                                          ? 'error'
                                          : 'property'),
                                  'maybeprop')
                                : 'restricted_atBlock';
                        },
                        keyframes: function(e, t, n) {
                            return 'word' == e
                                ? ((o = 'variable'), 'keyframes')
                                : '{' == e
                                ? L(n, t, 'top')
                                : F(e, t, n);
                        },
                        at: function(e, t, n) {
                            return ';' == e
                                ? T(n)
                                : '{' == e || '}' == e
                                ? E(e, t, n)
                                : ('word' == e
                                      ? (o = 'tag')
                                      : 'hash' == e && (o = 'builtin'),
                                  'at');
                        },
                        interpolation: function(e, t, n) {
                            return '}' == e
                                ? T(n)
                                : '{' == e || ';' == e
                                ? E(e, t, n)
                                : ('word' == e
                                      ? (o = 'variable')
                                      : 'variable' != e &&
                                        '(' != e &&
                                        ')' != e &&
                                        (o = 'error'),
                                  'interpolation');
                        },
                    };
                    return {
                        startState: function(e) {
                            return {
                                tokenize: null,
                                state: r ? 'block' : 'top',
                                stateArg: null,
                                context: new M(
                                    r ? 'block' : 'top',
                                    e || 0,
                                    null
                                ),
                            };
                        },
                        token: function(e, t) {
                            if (!t.tokenize && e.eatSpace()) return null;
                            var n = (t.tokenize || C)(e, t);
                            return (
                                n &&
                                    'object' == typeof n &&
                                    ((i = n[1]), (n = n[0])),
                                (o = n),
                                'comment' != i &&
                                    (t.state = P[t.state](i, e, t)),
                                o
                            );
                        },
                        indent: function(e, t) {
                            var n = e.context,
                                r = t && t.charAt(0),
                                i = n.indent;
                            return (
                                'prop' != n.type ||
                                    ('}' != r && ')' != r) ||
                                    (n = n.prev),
                                n.prev &&
                                    ('}' != r ||
                                    ('block' != n.type &&
                                        'top' != n.type &&
                                        'interpolation' != n.type &&
                                        'restricted_atBlock' != n.type)
                                        ? ((')' != r ||
                                              ('parens' != n.type &&
                                                  'atBlock_parens' !=
                                                      n.type)) &&
                                              ('{' != r ||
                                                  ('at' != n.type &&
                                                      'atBlock' != n.type))) ||
                                          (i = Math.max(0, n.indent - a))
                                        : (i = (n = n.prev).indent)),
                                i
                            );
                        },
                        electricChars: '}',
                        blockCommentStart: '/*',
                        blockCommentEnd: '*/',
                        blockCommentContinue: ' * ',
                        lineComment: x,
                        fold: 'brace',
                    };
                });
                var n = ['domain', 'regexp', 'url', 'url-prefix'],
                    r = t(n),
                    i = [
                        'all',
                        'aural',
                        'braille',
                        'handheld',
                        'print',
                        'projection',
                        'screen',
                        'tty',
                        'tv',
                        'embossed',
                    ],
                    o = t(i),
                    a = [
                        'width',
                        'min-width',
                        'max-width',
                        'height',
                        'min-height',
                        'max-height',
                        'device-width',
                        'min-device-width',
                        'max-device-width',
                        'device-height',
                        'min-device-height',
                        'max-device-height',
                        'aspect-ratio',
                        'min-aspect-ratio',
                        'max-aspect-ratio',
                        'device-aspect-ratio',
                        'min-device-aspect-ratio',
                        'max-device-aspect-ratio',
                        'color',
                        'min-color',
                        'max-color',
                        'color-index',
                        'min-color-index',
                        'max-color-index',
                        'monochrome',
                        'min-monochrome',
                        'max-monochrome',
                        'resolution',
                        'min-resolution',
                        'max-resolution',
                        'scan',
                        'grid',
                        'orientation',
                        'device-pixel-ratio',
                        'min-device-pixel-ratio',
                        'max-device-pixel-ratio',
                        'pointer',
                        'any-pointer',
                        'hover',
                        'any-hover',
                        'prefers-color-scheme',
                    ],
                    s = t(a),
                    l = [
                        'landscape',
                        'portrait',
                        'none',
                        'coarse',
                        'fine',
                        'on-demand',
                        'hover',
                        'interlace',
                        'progressive',
                        'dark',
                        'light',
                    ],
                    c = t(l),
                    u = [
                        'align-content',
                        'align-items',
                        'align-self',
                        'alignment-adjust',
                        'alignment-baseline',
                        'all',
                        'anchor-point',
                        'animation',
                        'animation-delay',
                        'animation-direction',
                        'animation-duration',
                        'animation-fill-mode',
                        'animation-iteration-count',
                        'animation-name',
                        'animation-play-state',
                        'animation-timing-function',
                        'appearance',
                        'azimuth',
                        'backdrop-filter',
                        'backface-visibility',
                        'background',
                        'background-attachment',
                        'background-blend-mode',
                        'background-clip',
                        'background-color',
                        'background-image',
                        'background-origin',
                        'background-position',
                        'background-position-x',
                        'background-position-y',
                        'background-repeat',
                        'background-size',
                        'baseline-shift',
                        'binding',
                        'bleed',
                        'block-size',
                        'bookmark-label',
                        'bookmark-level',
                        'bookmark-state',
                        'bookmark-target',
                        'border',
                        'border-bottom',
                        'border-bottom-color',
                        'border-bottom-left-radius',
                        'border-bottom-right-radius',
                        'border-bottom-style',
                        'border-bottom-width',
                        'border-collapse',
                        'border-color',
                        'border-image',
                        'border-image-outset',
                        'border-image-repeat',
                        'border-image-slice',
                        'border-image-source',
                        'border-image-width',
                        'border-left',
                        'border-left-color',
                        'border-left-style',
                        'border-left-width',
                        'border-radius',
                        'border-right',
                        'border-right-color',
                        'border-right-style',
                        'border-right-width',
                        'border-spacing',
                        'border-style',
                        'border-top',
                        'border-top-color',
                        'border-top-left-radius',
                        'border-top-right-radius',
                        'border-top-style',
                        'border-top-width',
                        'border-width',
                        'bottom',
                        'box-decoration-break',
                        'box-shadow',
                        'box-sizing',
                        'break-after',
                        'break-before',
                        'break-inside',
                        'caption-side',
                        'caret-color',
                        'clear',
                        'clip',
                        'color',
                        'color-profile',
                        'column-count',
                        'column-fill',
                        'column-gap',
                        'column-rule',
                        'column-rule-color',
                        'column-rule-style',
                        'column-rule-width',
                        'column-span',
                        'column-width',
                        'columns',
                        'contain',
                        'content',
                        'counter-increment',
                        'counter-reset',
                        'crop',
                        'cue',
                        'cue-after',
                        'cue-before',
                        'cursor',
                        'direction',
                        'display',
                        'dominant-baseline',
                        'drop-initial-after-adjust',
                        'drop-initial-after-align',
                        'drop-initial-before-adjust',
                        'drop-initial-before-align',
                        'drop-initial-size',
                        'drop-initial-value',
                        'elevation',
                        'empty-cells',
                        'fit',
                        'fit-position',
                        'flex',
                        'flex-basis',
                        'flex-direction',
                        'flex-flow',
                        'flex-grow',
                        'flex-shrink',
                        'flex-wrap',
                        'float',
                        'float-offset',
                        'flow-from',
                        'flow-into',
                        'font',
                        'font-family',
                        'font-feature-settings',
                        'font-kerning',
                        'font-language-override',
                        'font-optical-sizing',
                        'font-size',
                        'font-size-adjust',
                        'font-stretch',
                        'font-style',
                        'font-synthesis',
                        'font-variant',
                        'font-variant-alternates',
                        'font-variant-caps',
                        'font-variant-east-asian',
                        'font-variant-ligatures',
                        'font-variant-numeric',
                        'font-variant-position',
                        'font-variation-settings',
                        'font-weight',
                        'gap',
                        'grid',
                        'grid-area',
                        'grid-auto-columns',
                        'grid-auto-flow',
                        'grid-auto-rows',
                        'grid-column',
                        'grid-column-end',
                        'grid-column-gap',
                        'grid-column-start',
                        'grid-gap',
                        'grid-row',
                        'grid-row-end',
                        'grid-row-gap',
                        'grid-row-start',
                        'grid-template',
                        'grid-template-areas',
                        'grid-template-columns',
                        'grid-template-rows',
                        'hanging-punctuation',
                        'height',
                        'hyphens',
                        'icon',
                        'image-orientation',
                        'image-rendering',
                        'image-resolution',
                        'inline-box-align',
                        'inset',
                        'inset-block',
                        'inset-block-end',
                        'inset-block-start',
                        'inset-inline',
                        'inset-inline-end',
                        'inset-inline-start',
                        'isolation',
                        'justify-content',
                        'justify-items',
                        'justify-self',
                        'left',
                        'letter-spacing',
                        'line-break',
                        'line-height',
                        'line-height-step',
                        'line-stacking',
                        'line-stacking-ruby',
                        'line-stacking-shift',
                        'line-stacking-strategy',
                        'list-style',
                        'list-style-image',
                        'list-style-position',
                        'list-style-type',
                        'margin',
                        'margin-bottom',
                        'margin-left',
                        'margin-right',
                        'margin-top',
                        'marks',
                        'marquee-direction',
                        'marquee-loop',
                        'marquee-play-count',
                        'marquee-speed',
                        'marquee-style',
                        'mask-clip',
                        'mask-composite',
                        'mask-image',
                        'mask-mode',
                        'mask-origin',
                        'mask-position',
                        'mask-repeat',
                        'mask-size',
                        'mask-type',
                        'max-block-size',
                        'max-height',
                        'max-inline-size',
                        'max-width',
                        'min-block-size',
                        'min-height',
                        'min-inline-size',
                        'min-width',
                        'mix-blend-mode',
                        'move-to',
                        'nav-down',
                        'nav-index',
                        'nav-left',
                        'nav-right',
                        'nav-up',
                        'object-fit',
                        'object-position',
                        'offset',
                        'offset-anchor',
                        'offset-distance',
                        'offset-path',
                        'offset-position',
                        'offset-rotate',
                        'opacity',
                        'order',
                        'orphans',
                        'outline',
                        'outline-color',
                        'outline-offset',
                        'outline-style',
                        'outline-width',
                        'overflow',
                        'overflow-style',
                        'overflow-wrap',
                        'overflow-x',
                        'overflow-y',
                        'padding',
                        'padding-bottom',
                        'padding-left',
                        'padding-right',
                        'padding-top',
                        'page',
                        'page-break-after',
                        'page-break-before',
                        'page-break-inside',
                        'page-policy',
                        'pause',
                        'pause-after',
                        'pause-before',
                        'perspective',
                        'perspective-origin',
                        'pitch',
                        'pitch-range',
                        'place-content',
                        'place-items',
                        'place-self',
                        'play-during',
                        'position',
                        'presentation-level',
                        'punctuation-trim',
                        'quotes',
                        'region-break-after',
                        'region-break-before',
                        'region-break-inside',
                        'region-fragment',
                        'rendering-intent',
                        'resize',
                        'rest',
                        'rest-after',
                        'rest-before',
                        'richness',
                        'right',
                        'rotate',
                        'rotation',
                        'rotation-point',
                        'row-gap',
                        'ruby-align',
                        'ruby-overhang',
                        'ruby-position',
                        'ruby-span',
                        'scale',
                        'scroll-behavior',
                        'scroll-margin',
                        'scroll-margin-block',
                        'scroll-margin-block-end',
                        'scroll-margin-block-start',
                        'scroll-margin-bottom',
                        'scroll-margin-inline',
                        'scroll-margin-inline-end',
                        'scroll-margin-inline-start',
                        'scroll-margin-left',
                        'scroll-margin-right',
                        'scroll-margin-top',
                        'scroll-padding',
                        'scroll-padding-block',
                        'scroll-padding-block-end',
                        'scroll-padding-block-start',
                        'scroll-padding-bottom',
                        'scroll-padding-inline',
                        'scroll-padding-inline-end',
                        'scroll-padding-inline-start',
                        'scroll-padding-left',
                        'scroll-padding-right',
                        'scroll-padding-top',
                        'scroll-snap-align',
                        'scroll-snap-type',
                        'shape-image-threshold',
                        'shape-inside',
                        'shape-margin',
                        'shape-outside',
                        'size',
                        'speak',
                        'speak-as',
                        'speak-header',
                        'speak-numeral',
                        'speak-punctuation',
                        'speech-rate',
                        'stress',
                        'string-set',
                        'tab-size',
                        'table-layout',
                        'target',
                        'target-name',
                        'target-new',
                        'target-position',
                        'text-align',
                        'text-align-last',
                        'text-combine-upright',
                        'text-decoration',
                        'text-decoration-color',
                        'text-decoration-line',
                        'text-decoration-skip',
                        'text-decoration-skip-ink',
                        'text-decoration-style',
                        'text-emphasis',
                        'text-emphasis-color',
                        'text-emphasis-position',
                        'text-emphasis-style',
                        'text-height',
                        'text-indent',
                        'text-justify',
                        'text-orientation',
                        'text-outline',
                        'text-overflow',
                        'text-rendering',
                        'text-shadow',
                        'text-size-adjust',
                        'text-space-collapse',
                        'text-transform',
                        'text-underline-position',
                        'text-wrap',
                        'top',
                        'touch-action',
                        'transform',
                        'transform-origin',
                        'transform-style',
                        'transition',
                        'transition-delay',
                        'transition-duration',
                        'transition-property',
                        'transition-timing-function',
                        'translate',
                        'unicode-bidi',
                        'user-select',
                        'vertical-align',
                        'visibility',
                        'voice-balance',
                        'voice-duration',
                        'voice-family',
                        'voice-pitch',
                        'voice-range',
                        'voice-rate',
                        'voice-stress',
                        'voice-volume',
                        'volume',
                        'white-space',
                        'widows',
                        'width',
                        'will-change',
                        'word-break',
                        'word-spacing',
                        'word-wrap',
                        'writing-mode',
                        'z-index',
                        'clip-path',
                        'clip-rule',
                        'mask',
                        'enable-background',
                        'filter',
                        'flood-color',
                        'flood-opacity',
                        'lighting-color',
                        'stop-color',
                        'stop-opacity',
                        'pointer-events',
                        'color-interpolation',
                        'color-interpolation-filters',
                        'color-rendering',
                        'fill',
                        'fill-opacity',
                        'fill-rule',
                        'image-rendering',
                        'marker',
                        'marker-end',
                        'marker-mid',
                        'marker-start',
                        'paint-order',
                        'shape-rendering',
                        'stroke',
                        'stroke-dasharray',
                        'stroke-dashoffset',
                        'stroke-linecap',
                        'stroke-linejoin',
                        'stroke-miterlimit',
                        'stroke-opacity',
                        'stroke-width',
                        'text-rendering',
                        'baseline-shift',
                        'dominant-baseline',
                        'glyph-orientation-horizontal',
                        'glyph-orientation-vertical',
                        'text-anchor',
                        'writing-mode',
                    ],
                    d = t(u),
                    m = [
                        'border-block',
                        'border-block-color',
                        'border-block-end',
                        'border-block-end-color',
                        'border-block-end-style',
                        'border-block-end-width',
                        'border-block-start',
                        'border-block-start-color',
                        'border-block-start-style',
                        'border-block-start-width',
                        'border-block-style',
                        'border-block-width',
                        'border-inline',
                        'border-inline-color',
                        'border-inline-end',
                        'border-inline-end-color',
                        'border-inline-end-style',
                        'border-inline-end-width',
                        'border-inline-start',
                        'border-inline-start-color',
                        'border-inline-start-style',
                        'border-inline-start-width',
                        'border-inline-style',
                        'border-inline-width',
                        'margin-block',
                        'margin-block-end',
                        'margin-block-start',
                        'margin-inline',
                        'margin-inline-end',
                        'margin-inline-start',
                        'padding-block',
                        'padding-block-end',
                        'padding-block-start',
                        'padding-inline',
                        'padding-inline-end',
                        'padding-inline-start',
                        'scroll-snap-stop',
                        'scrollbar-3d-light-color',
                        'scrollbar-arrow-color',
                        'scrollbar-base-color',
                        'scrollbar-dark-shadow-color',
                        'scrollbar-face-color',
                        'scrollbar-highlight-color',
                        'scrollbar-shadow-color',
                        'scrollbar-track-color',
                        'searchfield-cancel-button',
                        'searchfield-decoration',
                        'searchfield-results-button',
                        'searchfield-results-decoration',
                        'shape-inside',
                        'zoom',
                    ],
                    f = t(m),
                    p = t([
                        'font-display',
                        'font-family',
                        'src',
                        'unicode-range',
                        'font-variant',
                        'font-feature-settings',
                        'font-stretch',
                        'font-weight',
                        'font-style',
                    ]),
                    h = t([
                        'additive-symbols',
                        'fallback',
                        'negative',
                        'pad',
                        'prefix',
                        'range',
                        'speak-as',
                        'suffix',
                        'symbols',
                        'system',
                    ]),
                    g = [
                        'aliceblue',
                        'antiquewhite',
                        'aqua',
                        'aquamarine',
                        'azure',
                        'beige',
                        'bisque',
                        'black',
                        'blanchedalmond',
                        'blue',
                        'blueviolet',
                        'brown',
                        'burlywood',
                        'cadetblue',
                        'chartreuse',
                        'chocolate',
                        'coral',
                        'cornflowerblue',
                        'cornsilk',
                        'crimson',
                        'cyan',
                        'darkblue',
                        'darkcyan',
                        'darkgoldenrod',
                        'darkgray',
                        'darkgreen',
                        'darkkhaki',
                        'darkmagenta',
                        'darkolivegreen',
                        'darkorange',
                        'darkorchid',
                        'darkred',
                        'darksalmon',
                        'darkseagreen',
                        'darkslateblue',
                        'darkslategray',
                        'darkturquoise',
                        'darkviolet',
                        'deeppink',
                        'deepskyblue',
                        'dimgray',
                        'dodgerblue',
                        'firebrick',
                        'floralwhite',
                        'forestgreen',
                        'fuchsia',
                        'gainsboro',
                        'ghostwhite',
                        'gold',
                        'goldenrod',
                        'gray',
                        'grey',
                        'green',
                        'greenyellow',
                        'honeydew',
                        'hotpink',
                        'indianred',
                        'indigo',
                        'ivory',
                        'khaki',
                        'lavender',
                        'lavenderblush',
                        'lawngreen',
                        'lemonchiffon',
                        'lightblue',
                        'lightcoral',
                        'lightcyan',
                        'lightgoldenrodyellow',
                        'lightgray',
                        'lightgreen',
                        'lightpink',
                        'lightsalmon',
                        'lightseagreen',
                        'lightskyblue',
                        'lightslategray',
                        'lightsteelblue',
                        'lightyellow',
                        'lime',
                        'limegreen',
                        'linen',
                        'magenta',
                        'maroon',
                        'mediumaquamarine',
                        'mediumblue',
                        'mediumorchid',
                        'mediumpurple',
                        'mediumseagreen',
                        'mediumslateblue',
                        'mediumspringgreen',
                        'mediumturquoise',
                        'mediumvioletred',
                        'midnightblue',
                        'mintcream',
                        'mistyrose',
                        'moccasin',
                        'navajowhite',
                        'navy',
                        'oldlace',
                        'olive',
                        'olivedrab',
                        'orange',
                        'orangered',
                        'orchid',
                        'palegoldenrod',
                        'palegreen',
                        'paleturquoise',
                        'palevioletred',
                        'papayawhip',
                        'peachpuff',
                        'peru',
                        'pink',
                        'plum',
                        'powderblue',
                        'purple',
                        'rebeccapurple',
                        'red',
                        'rosybrown',
                        'royalblue',
                        'saddlebrown',
                        'salmon',
                        'sandybrown',
                        'seagreen',
                        'seashell',
                        'sienna',
                        'silver',
                        'skyblue',
                        'slateblue',
                        'slategray',
                        'snow',
                        'springgreen',
                        'steelblue',
                        'tan',
                        'teal',
                        'thistle',
                        'tomato',
                        'turquoise',
                        'violet',
                        'wheat',
                        'white',
                        'whitesmoke',
                        'yellow',
                        'yellowgreen',
                    ],
                    b = t(g),
                    v = [
                        'above',
                        'absolute',
                        'activeborder',
                        'additive',
                        'activecaption',
                        'afar',
                        'after-white-space',
                        'ahead',
                        'alias',
                        'all',
                        'all-scroll',
                        'alphabetic',
                        'alternate',
                        'always',
                        'amharic',
                        'amharic-abegede',
                        'antialiased',
                        'appworkspace',
                        'arabic-indic',
                        'armenian',
                        'asterisks',
                        'attr',
                        'auto',
                        'auto-flow',
                        'avoid',
                        'avoid-column',
                        'avoid-page',
                        'avoid-region',
                        'axis-pan',
                        'background',
                        'backwards',
                        'baseline',
                        'below',
                        'bidi-override',
                        'binary',
                        'bengali',
                        'blink',
                        'block',
                        'block-axis',
                        'bold',
                        'bolder',
                        'border',
                        'border-box',
                        'both',
                        'bottom',
                        'break',
                        'break-all',
                        'break-word',
                        'bullets',
                        'button',
                        'button-bevel',
                        'buttonface',
                        'buttonhighlight',
                        'buttonshadow',
                        'buttontext',
                        'calc',
                        'cambodian',
                        'capitalize',
                        'caps-lock-indicator',
                        'caption',
                        'captiontext',
                        'caret',
                        'cell',
                        'center',
                        'checkbox',
                        'circle',
                        'cjk-decimal',
                        'cjk-earthly-branch',
                        'cjk-heavenly-stem',
                        'cjk-ideographic',
                        'clear',
                        'clip',
                        'close-quote',
                        'col-resize',
                        'collapse',
                        'color',
                        'color-burn',
                        'color-dodge',
                        'column',
                        'column-reverse',
                        'compact',
                        'condensed',
                        'contain',
                        'content',
                        'contents',
                        'content-box',
                        'context-menu',
                        'continuous',
                        'copy',
                        'counter',
                        'counters',
                        'cover',
                        'crop',
                        'cross',
                        'crosshair',
                        'currentcolor',
                        'cursive',
                        'cyclic',
                        'darken',
                        'dashed',
                        'decimal',
                        'decimal-leading-zero',
                        'default',
                        'default-button',
                        'dense',
                        'destination-atop',
                        'destination-in',
                        'destination-out',
                        'destination-over',
                        'devanagari',
                        'difference',
                        'disc',
                        'discard',
                        'disclosure-closed',
                        'disclosure-open',
                        'document',
                        'dot-dash',
                        'dot-dot-dash',
                        'dotted',
                        'double',
                        'down',
                        'e-resize',
                        'ease',
                        'ease-in',
                        'ease-in-out',
                        'ease-out',
                        'element',
                        'ellipse',
                        'ellipsis',
                        'embed',
                        'end',
                        'ethiopic',
                        'ethiopic-abegede',
                        'ethiopic-abegede-am-et',
                        'ethiopic-abegede-gez',
                        'ethiopic-abegede-ti-er',
                        'ethiopic-abegede-ti-et',
                        'ethiopic-halehame-aa-er',
                        'ethiopic-halehame-aa-et',
                        'ethiopic-halehame-am-et',
                        'ethiopic-halehame-gez',
                        'ethiopic-halehame-om-et',
                        'ethiopic-halehame-sid-et',
                        'ethiopic-halehame-so-et',
                        'ethiopic-halehame-ti-er',
                        'ethiopic-halehame-ti-et',
                        'ethiopic-halehame-tig',
                        'ethiopic-numeric',
                        'ew-resize',
                        'exclusion',
                        'expanded',
                        'extends',
                        'extra-condensed',
                        'extra-expanded',
                        'fantasy',
                        'fast',
                        'fill',
                        'fill-box',
                        'fixed',
                        'flat',
                        'flex',
                        'flex-end',
                        'flex-start',
                        'footnotes',
                        'forwards',
                        'from',
                        'geometricPrecision',
                        'georgian',
                        'graytext',
                        'grid',
                        'groove',
                        'gujarati',
                        'gurmukhi',
                        'hand',
                        'hangul',
                        'hangul-consonant',
                        'hard-light',
                        'hebrew',
                        'help',
                        'hidden',
                        'hide',
                        'higher',
                        'highlight',
                        'highlighttext',
                        'hiragana',
                        'hiragana-iroha',
                        'horizontal',
                        'hsl',
                        'hsla',
                        'hue',
                        'icon',
                        'ignore',
                        'inactiveborder',
                        'inactivecaption',
                        'inactivecaptiontext',
                        'infinite',
                        'infobackground',
                        'infotext',
                        'inherit',
                        'initial',
                        'inline',
                        'inline-axis',
                        'inline-block',
                        'inline-flex',
                        'inline-grid',
                        'inline-table',
                        'inset',
                        'inside',
                        'intrinsic',
                        'invert',
                        'italic',
                        'japanese-formal',
                        'japanese-informal',
                        'justify',
                        'kannada',
                        'katakana',
                        'katakana-iroha',
                        'keep-all',
                        'khmer',
                        'korean-hangul-formal',
                        'korean-hanja-formal',
                        'korean-hanja-informal',
                        'landscape',
                        'lao',
                        'large',
                        'larger',
                        'left',
                        'level',
                        'lighter',
                        'lighten',
                        'line-through',
                        'linear',
                        'linear-gradient',
                        'lines',
                        'list-item',
                        'listbox',
                        'listitem',
                        'local',
                        'logical',
                        'loud',
                        'lower',
                        'lower-alpha',
                        'lower-armenian',
                        'lower-greek',
                        'lower-hexadecimal',
                        'lower-latin',
                        'lower-norwegian',
                        'lower-roman',
                        'lowercase',
                        'ltr',
                        'luminosity',
                        'malayalam',
                        'manipulation',
                        'match',
                        'matrix',
                        'matrix3d',
                        'media-controls-background',
                        'media-current-time-display',
                        'media-fullscreen-button',
                        'media-mute-button',
                        'media-play-button',
                        'media-return-to-realtime-button',
                        'media-rewind-button',
                        'media-seek-back-button',
                        'media-seek-forward-button',
                        'media-slider',
                        'media-sliderthumb',
                        'media-time-remaining-display',
                        'media-volume-slider',
                        'media-volume-slider-container',
                        'media-volume-sliderthumb',
                        'medium',
                        'menu',
                        'menulist',
                        'menulist-button',
                        'menulist-text',
                        'menulist-textfield',
                        'menutext',
                        'message-box',
                        'middle',
                        'min-intrinsic',
                        'mix',
                        'mongolian',
                        'monospace',
                        'move',
                        'multiple',
                        'multiple_mask_images',
                        'multiply',
                        'myanmar',
                        'n-resize',
                        'narrower',
                        'ne-resize',
                        'nesw-resize',
                        'no-close-quote',
                        'no-drop',
                        'no-open-quote',
                        'no-repeat',
                        'none',
                        'normal',
                        'not-allowed',
                        'nowrap',
                        'ns-resize',
                        'numbers',
                        'numeric',
                        'nw-resize',
                        'nwse-resize',
                        'oblique',
                        'octal',
                        'opacity',
                        'open-quote',
                        'optimizeLegibility',
                        'optimizeSpeed',
                        'oriya',
                        'oromo',
                        'outset',
                        'outside',
                        'outside-shape',
                        'overlay',
                        'overline',
                        'padding',
                        'padding-box',
                        'painted',
                        'page',
                        'paused',
                        'persian',
                        'perspective',
                        'pinch-zoom',
                        'plus-darker',
                        'plus-lighter',
                        'pointer',
                        'polygon',
                        'portrait',
                        'pre',
                        'pre-line',
                        'pre-wrap',
                        'preserve-3d',
                        'progress',
                        'push-button',
                        'radial-gradient',
                        'radio',
                        'read-only',
                        'read-write',
                        'read-write-plaintext-only',
                        'rectangle',
                        'region',
                        'relative',
                        'repeat',
                        'repeating-linear-gradient',
                        'repeating-radial-gradient',
                        'repeat-x',
                        'repeat-y',
                        'reset',
                        'reverse',
                        'rgb',
                        'rgba',
                        'ridge',
                        'right',
                        'rotate',
                        'rotate3d',
                        'rotateX',
                        'rotateY',
                        'rotateZ',
                        'round',
                        'row',
                        'row-resize',
                        'row-reverse',
                        'rtl',
                        'run-in',
                        'running',
                        's-resize',
                        'sans-serif',
                        'saturation',
                        'scale',
                        'scale3d',
                        'scaleX',
                        'scaleY',
                        'scaleZ',
                        'screen',
                        'scroll',
                        'scrollbar',
                        'scroll-position',
                        'se-resize',
                        'searchfield',
                        'searchfield-cancel-button',
                        'searchfield-decoration',
                        'searchfield-results-button',
                        'searchfield-results-decoration',
                        'self-start',
                        'self-end',
                        'semi-condensed',
                        'semi-expanded',
                        'separate',
                        'serif',
                        'show',
                        'sidama',
                        'simp-chinese-formal',
                        'simp-chinese-informal',
                        'single',
                        'skew',
                        'skewX',
                        'skewY',
                        'skip-white-space',
                        'slide',
                        'slider-horizontal',
                        'slider-vertical',
                        'sliderthumb-horizontal',
                        'sliderthumb-vertical',
                        'slow',
                        'small',
                        'small-caps',
                        'small-caption',
                        'smaller',
                        'soft-light',
                        'solid',
                        'somali',
                        'source-atop',
                        'source-in',
                        'source-out',
                        'source-over',
                        'space',
                        'space-around',
                        'space-between',
                        'space-evenly',
                        'spell-out',
                        'square',
                        'square-button',
                        'start',
                        'static',
                        'status-bar',
                        'stretch',
                        'stroke',
                        'stroke-box',
                        'sub',
                        'subpixel-antialiased',
                        'svg_masks',
                        'super',
                        'sw-resize',
                        'symbolic',
                        'symbols',
                        'system-ui',
                        'table',
                        'table-caption',
                        'table-cell',
                        'table-column',
                        'table-column-group',
                        'table-footer-group',
                        'table-header-group',
                        'table-row',
                        'table-row-group',
                        'tamil',
                        'telugu',
                        'text',
                        'text-bottom',
                        'text-top',
                        'textarea',
                        'textfield',
                        'thai',
                        'thick',
                        'thin',
                        'threeddarkshadow',
                        'threedface',
                        'threedhighlight',
                        'threedlightshadow',
                        'threedshadow',
                        'tibetan',
                        'tigre',
                        'tigrinya-er',
                        'tigrinya-er-abegede',
                        'tigrinya-et',
                        'tigrinya-et-abegede',
                        'to',
                        'top',
                        'trad-chinese-formal',
                        'trad-chinese-informal',
                        'transform',
                        'translate',
                        'translate3d',
                        'translateX',
                        'translateY',
                        'translateZ',
                        'transparent',
                        'ultra-condensed',
                        'ultra-expanded',
                        'underline',
                        'unidirectional-pan',
                        'unset',
                        'up',
                        'upper-alpha',
                        'upper-armenian',
                        'upper-greek',
                        'upper-hexadecimal',
                        'upper-latin',
                        'upper-norwegian',
                        'upper-roman',
                        'uppercase',
                        'urdu',
                        'url',
                        'var',
                        'vertical',
                        'vertical-text',
                        'view-box',
                        'visible',
                        'visibleFill',
                        'visiblePainted',
                        'visibleStroke',
                        'visual',
                        'w-resize',
                        'wait',
                        'wave',
                        'wider',
                        'window',
                        'windowframe',
                        'windowtext',
                        'words',
                        'wrap',
                        'wrap-reverse',
                        'x-large',
                        'x-small',
                        'xor',
                        'xx-large',
                        'xx-small',
                    ],
                    x = t(v),
                    y = n
                        .concat(i)
                        .concat(a)
                        .concat(l)
                        .concat(u)
                        .concat(m)
                        .concat(g)
                        .concat(v);
                function k(e, t) {
                    for (var n, r = !1; null != (n = e.next()); ) {
                        if (r && '/' == n) {
                            t.tokenize = null;
                            break;
                        }
                        r = '*' == n;
                    }
                    return ['comment', 'comment'];
                }
                e.registerHelper('hintWords', 'css', y),
                    e.defineMIME('text/css', {
                        documentTypes: r,
                        mediaTypes: o,
                        mediaFeatures: s,
                        mediaValueKeywords: c,
                        propertyKeywords: d,
                        nonStandardPropertyKeywords: f,
                        fontProperties: p,
                        counterDescriptors: h,
                        colorKeywords: b,
                        valueKeywords: x,
                        tokenHooks: {
                            '/': function(e, t) {
                                return (
                                    !!e.eat('*') && ((t.tokenize = k), k(e, t))
                                );
                            },
                        },
                        name: 'css',
                    }),
                    e.defineMIME('text/x-scss', {
                        mediaTypes: o,
                        mediaFeatures: s,
                        mediaValueKeywords: c,
                        propertyKeywords: d,
                        nonStandardPropertyKeywords: f,
                        colorKeywords: b,
                        valueKeywords: x,
                        fontProperties: p,
                        allowNested: !0,
                        lineComment: '//',
                        tokenHooks: {
                            '/': function(e, t) {
                                return e.eat('/')
                                    ? (e.skipToEnd(), ['comment', 'comment'])
                                    : e.eat('*')
                                    ? ((t.tokenize = k), k(e, t))
                                    : ['operator', 'operator'];
                            },
                            ':': function(e) {
                                return !!e.match(/^\s*\{/, !1) && [null, null];
                            },
                            $: function(e) {
                                return (
                                    e.match(/^[\w-]+/),
                                    e.match(/^\s*:/, !1)
                                        ? ['variable-2', 'variable-definition']
                                        : ['variable-2', 'variable']
                                );
                            },
                            '#': function(e) {
                                return !!e.eat('{') && [null, 'interpolation'];
                            },
                        },
                        name: 'css',
                        helperType: 'scss',
                    }),
                    e.defineMIME('text/x-less', {
                        mediaTypes: o,
                        mediaFeatures: s,
                        mediaValueKeywords: c,
                        propertyKeywords: d,
                        nonStandardPropertyKeywords: f,
                        colorKeywords: b,
                        valueKeywords: x,
                        fontProperties: p,
                        allowNested: !0,
                        lineComment: '//',
                        tokenHooks: {
                            '/': function(e, t) {
                                return e.eat('/')
                                    ? (e.skipToEnd(), ['comment', 'comment'])
                                    : e.eat('*')
                                    ? ((t.tokenize = k), k(e, t))
                                    : ['operator', 'operator'];
                            },
                            '@': function(e) {
                                return e.eat('{')
                                    ? [null, 'interpolation']
                                    : !e.match(
                                          /^(charset|document|font-face|import|(-(moz|ms|o|webkit)-)?keyframes|media|namespace|page|supports)\b/i,
                                          !1
                                      ) &&
                                          (e.eatWhile(/[\w\\\-]/),
                                          e.match(/^\s*:/, !1)
                                              ? [
                                                    'variable-2',
                                                    'variable-definition',
                                                ]
                                              : ['variable-2', 'variable']);
                            },
                            '&': function() {
                                return ['atom', 'atom'];
                            },
                        },
                        name: 'css',
                        helperType: 'less',
                    }),
                    e.defineMIME('text/x-gss', {
                        documentTypes: r,
                        mediaTypes: o,
                        mediaFeatures: s,
                        propertyKeywords: d,
                        nonStandardPropertyKeywords: f,
                        fontProperties: p,
                        counterDescriptors: h,
                        colorKeywords: b,
                        valueKeywords: x,
                        supportsAtComponent: !0,
                        tokenHooks: {
                            '/': function(e, t) {
                                return (
                                    !!e.eat('*') && ((t.tokenize = k), k(e, t))
                                );
                            },
                        },
                        name: 'css',
                        helperType: 'gss',
                    });
            })(n(25747));
        },
        79999: (e, t, n) => {
            !(function(e) {
                'use strict';
                var t = /^((?:(?:aaas?|about|acap|adiumxtra|af[ps]|aim|apt|attachment|aw|beshare|bitcoin|bolo|callto|cap|chrome(?:-extension)?|cid|coap|com-eventbrite-attendee|content|crid|cvs|data|dav|dict|dlna-(?:playcontainer|playsingle)|dns|doi|dtn|dvb|ed2k|facetime|feed|file|finger|fish|ftp|geo|gg|git|gizmoproject|go|gopher|gtalk|h323|hcp|https?|iax|icap|icon|im|imap|info|ipn|ipp|irc[6s]?|iris(?:\.beep|\.lwz|\.xpc|\.xpcs)?|itms|jar|javascript|jms|keyparc|lastfm|ldaps?|magnet|mailto|maps|market|message|mid|mms|ms-help|msnim|msrps?|mtqp|mumble|mupdate|mvn|news|nfs|nih?|nntp|notes|oid|opaquelocktoken|palm|paparazzi|platform|pop|pres|proxy|psyc|query|res(?:ource)?|rmi|rsync|rtmp|rtsp|secondlife|service|session|sftp|sgn|shttp|sieve|sips?|skype|sm[bs]|snmp|soap\.beeps?|soldat|spotify|ssh|steam|svn|tag|teamspeak|tel(?:net)?|tftp|things|thismessage|tip|tn3270|tv|udp|unreal|urn|ut2004|vemmi|ventrilo|view-source|webcal|wss?|wtai|wyciwyg|xcon(?:-userid)?|xfire|xmlrpc\.beeps?|xmpp|xri|ymsgr|z39\.50[rs]?):(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]|\([^\s()<>]*\))+(?:\([^\s()<>]*\)|[^\s`*!()\[\]{};:'".,<>?«»“”‘’]))/i;
                e.defineMode(
                    'gfm',
                    function(n, r) {
                        var i = 0;
                        var o = {
                                startState: function() {
                                    return {
                                        code: !1,
                                        codeBlock: !1,
                                        ateSpace: !1,
                                    };
                                },
                                copyState: function(e) {
                                    return {
                                        code: e.code,
                                        codeBlock: e.codeBlock,
                                        ateSpace: e.ateSpace,
                                    };
                                },
                                token: function(e, n) {
                                    if (((n.combineTokens = null), n.codeBlock))
                                        return e.match(/^```+/)
                                            ? ((n.codeBlock = !1), null)
                                            : (e.skipToEnd(), null);
                                    if (
                                        (e.sol() && (n.code = !1),
                                        e.sol() && e.match(/^```+/))
                                    )
                                        return (
                                            e.skipToEnd(),
                                            (n.codeBlock = !0),
                                            null
                                        );
                                    if ('`' === e.peek()) {
                                        e.next();
                                        var o = e.pos;
                                        e.eatWhile('`');
                                        var a = 1 + e.pos - o;
                                        return (
                                            n.code
                                                ? a === i && (n.code = !1)
                                                : ((i = a), (n.code = !0)),
                                            null
                                        );
                                    }
                                    if (n.code) return e.next(), null;
                                    if (e.eatSpace())
                                        return (n.ateSpace = !0), null;
                                    if (
                                        (e.sol() || n.ateSpace) &&
                                        ((n.ateSpace = !1),
                                        !1 !== r.gitHubSpice)
                                    ) {
                                        if (
                                            e.match(
                                                /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+@)?(?=.{0,6}\d)(?:[a-f0-9]{7,40}\b)/
                                            )
                                        )
                                            return (
                                                (n.combineTokens = !0), 'link'
                                            );
                                        if (
                                            e.match(
                                                /^(?:[a-zA-Z0-9\-_]+\/)?(?:[a-zA-Z0-9\-_]+)?#[0-9]+\b/
                                            )
                                        )
                                            return (
                                                (n.combineTokens = !0), 'link'
                                            );
                                    }
                                    return e.match(t) &&
                                        '](' !=
                                            e.string.slice(
                                                e.start - 2,
                                                e.start
                                            ) &&
                                        (0 == e.start ||
                                            /\W/.test(
                                                e.string.charAt(e.start - 1)
                                            ))
                                        ? ((n.combineTokens = !0), 'link')
                                        : (e.next(), null);
                                },
                                blankLine: function(e) {
                                    return (e.code = !1), null;
                                },
                            },
                            a = { taskLists: !0, strikethrough: !0, emoji: !0 };
                        for (var s in r) a[s] = r[s];
                        return (
                            (a.name = 'markdown'),
                            e.overlayMode(e.getMode(n, a), o)
                        );
                    },
                    'markdown'
                ),
                    e.defineMIME('text/x-gfm', 'gfm');
            })(n(25747), n(7385), n(33694));
        },
        72896: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.defineMode('javascript', function(t, n) {
                    var r,
                        i,
                        o = t.indentUnit,
                        a = n.statementIndent,
                        s = n.jsonld,
                        l = n.json || s,
                        c = !1 !== n.trackScope,
                        u = n.typescript,
                        d = n.wordCharacters || /[\w$\xa1-\uffff]/,
                        m = (function() {
                            function e(e) {
                                return { type: e, style: 'keyword' };
                            }
                            var t = e('keyword a'),
                                n = e('keyword b'),
                                r = e('keyword c'),
                                i = e('keyword d'),
                                o = e('operator'),
                                a = { type: 'atom', style: 'atom' };
                            return {
                                if: e('if'),
                                while: t,
                                with: t,
                                else: n,
                                do: n,
                                try: n,
                                finally: n,
                                return: i,
                                break: i,
                                continue: i,
                                new: e('new'),
                                delete: r,
                                void: r,
                                throw: r,
                                debugger: e('debugger'),
                                var: e('var'),
                                const: e('var'),
                                let: e('var'),
                                function: e('function'),
                                catch: e('catch'),
                                for: e('for'),
                                switch: e('switch'),
                                case: e('case'),
                                default: e('default'),
                                in: o,
                                typeof: o,
                                instanceof: o,
                                true: a,
                                false: a,
                                null: a,
                                undefined: a,
                                NaN: a,
                                Infinity: a,
                                this: e('this'),
                                class: e('class'),
                                super: e('atom'),
                                yield: r,
                                export: e('export'),
                                import: e('import'),
                                extends: r,
                                await: r,
                            };
                        })(),
                        f = /[+\-*&%=<>!?|~^@]/,
                        p = /^@(context|id|value|language|type|container|list|set|reverse|index|base|vocab|graph)"/;
                    function h(e, t, n) {
                        return (r = e), (i = n), t;
                    }
                    function g(e, t) {
                        var n,
                            r = e.next();
                        if ('"' == r || "'" == r)
                            return (
                                (t.tokenize =
                                    ((n = r),
                                    function(e, t) {
                                        var r,
                                            i = !1;
                                        if (s && '@' == e.peek() && e.match(p))
                                            return (
                                                (t.tokenize = g),
                                                h('jsonld-keyword', 'meta')
                                            );
                                        for (
                                            ;
                                            null != (r = e.next()) &&
                                            (r != n || i);

                                        )
                                            i = !i && '\\' == r;
                                        return (
                                            i || (t.tokenize = g),
                                            h('string', 'string')
                                        );
                                    })),
                                t.tokenize(e, t)
                            );
                        if (
                            '.' == r &&
                            e.match(/^\d[\d_]*(?:[eE][+\-]?[\d_]+)?/)
                        )
                            return h('number', 'number');
                        if ('.' == r && e.match('..'))
                            return h('spread', 'meta');
                        if (/[\[\]{}\(\),;\:\.]/.test(r)) return h(r);
                        if ('=' == r && e.eat('>')) return h('=>', 'operator');
                        if (
                            '0' == r &&
                            e.match(/^(?:x[\dA-Fa-f_]+|o[0-7_]+|b[01_]+)n?/)
                        )
                            return h('number', 'number');
                        if (/\d/.test(r))
                            return (
                                e.match(
                                    /^[\d_]*(?:n|(?:\.[\d_]*)?(?:[eE][+\-]?[\d_]+)?)?/
                                ),
                                h('number', 'number')
                            );
                        if ('/' == r)
                            return e.eat('*')
                                ? ((t.tokenize = b), b(e, t))
                                : e.eat('/')
                                ? (e.skipToEnd(), h('comment', 'comment'))
                                : Ye(e, t, 1)
                                ? ((function(e) {
                                      for (
                                          var t, n = !1, r = !1;
                                          null != (t = e.next());

                                      ) {
                                          if (!n) {
                                              if ('/' == t && !r) return;
                                              '[' == t
                                                  ? (r = !0)
                                                  : r && ']' == t && (r = !1);
                                          }
                                          n = !n && '\\' == t;
                                      }
                                  })(e),
                                  e.match(/^\b(([gimyus])(?![gimyus]*\2))+\b/),
                                  h('regexp', 'string-2'))
                                : (e.eat('='),
                                  h('operator', 'operator', e.current()));
                        if ('`' == r) return (t.tokenize = v), v(e, t);
                        if ('#' == r && '!' == e.peek())
                            return e.skipToEnd(), h('meta', 'meta');
                        if ('#' == r && e.eatWhile(d))
                            return h('variable', 'property');
                        if (
                            ('<' == r && e.match('!--')) ||
                            ('-' == r &&
                                e.match('->') &&
                                !/\S/.test(e.string.slice(0, e.start)))
                        )
                            return e.skipToEnd(), h('comment', 'comment');
                        if (f.test(r))
                            return (
                                ('>' == r &&
                                    t.lexical &&
                                    '>' == t.lexical.type) ||
                                    (e.eat('=')
                                        ? ('!' != r && '=' != r) || e.eat('=')
                                        : /[<>*+\-|&?]/.test(r) &&
                                          (e.eat(r), '>' == r && e.eat(r))),
                                '?' == r && e.eat('.')
                                    ? h('.')
                                    : h('operator', 'operator', e.current())
                            );
                        if (d.test(r)) {
                            e.eatWhile(d);
                            var i = e.current();
                            if ('.' != t.lastType) {
                                if (m.propertyIsEnumerable(i)) {
                                    var o = m[i];
                                    return h(o.type, o.style, i);
                                }
                                if (
                                    'async' == i &&
                                    e.match(
                                        /^(\s|\/\*([^*]|\*(?!\/))*?\*\/)*[\[\(\w]/,
                                        !1
                                    )
                                )
                                    return h('async', 'keyword', i);
                            }
                            return h('variable', 'variable', i);
                        }
                    }
                    function b(e, t) {
                        for (var n, r = !1; (n = e.next()); ) {
                            if ('/' == n && r) {
                                t.tokenize = g;
                                break;
                            }
                            r = '*' == n;
                        }
                        return h('comment', 'comment');
                    }
                    function v(e, t) {
                        for (var n, r = !1; null != (n = e.next()); ) {
                            if (!r && ('`' == n || ('$' == n && e.eat('{')))) {
                                t.tokenize = g;
                                break;
                            }
                            r = !r && '\\' == n;
                        }
                        return h('quasi', 'string-2', e.current());
                    }
                    function x(e, t) {
                        t.fatArrowAt && (t.fatArrowAt = null);
                        var n = e.string.indexOf('=>', e.start);
                        if (!(n < 0)) {
                            if (u) {
                                var r = /:\s*(?:\w+(?:<[^>]*>|\[\])?|\{[^}]*\})\s*$/.exec(
                                    e.string.slice(e.start, n)
                                );
                                r && (n = r.index);
                            }
                            for (var i = 0, o = !1, a = n - 1; a >= 0; --a) {
                                var s = e.string.charAt(a),
                                    l = '([{}])'.indexOf(s);
                                if (l >= 0 && l < 3) {
                                    if (!i) {
                                        ++a;
                                        break;
                                    }
                                    if (0 == --i) {
                                        '(' == s && (o = !0);
                                        break;
                                    }
                                } else if (l >= 3 && l < 6) ++i;
                                else if (d.test(s)) o = !0;
                                else if (/["'\/`]/.test(s))
                                    for (; ; --a) {
                                        if (0 == a) return;
                                        if (
                                            e.string.charAt(a - 1) == s &&
                                            '\\' != e.string.charAt(a - 2)
                                        ) {
                                            a--;
                                            break;
                                        }
                                    }
                                else if (o && !i) {
                                    ++a;
                                    break;
                                }
                            }
                            o && !i && (t.fatArrowAt = a);
                        }
                    }
                    var y = {
                        atom: !0,
                        number: !0,
                        variable: !0,
                        string: !0,
                        regexp: !0,
                        this: !0,
                        import: !0,
                        'jsonld-keyword': !0,
                    };
                    function k(e, t, n, r, i, o) {
                        (this.indented = e),
                            (this.column = t),
                            (this.type = n),
                            (this.prev = i),
                            (this.info = o),
                            null != r && (this.align = r);
                    }
                    function w(e, t) {
                        if (!c) return !1;
                        for (var n = e.localVars; n; n = n.next)
                            if (n.name == t) return !0;
                        for (var r = e.context; r; r = r.prev)
                            for (n = r.vars; n; n = n.next)
                                if (n.name == t) return !0;
                    }
                    function C(e, t, n, r, i) {
                        var o = e.cc;
                        for (
                            _.state = e,
                                _.stream = i,
                                _.marked = null,
                                _.cc = o,
                                _.style = t,
                                e.lexical.hasOwnProperty('align') ||
                                    (e.lexical.align = !0);
                            ;

                        )
                            if ((o.length ? o.pop() : l ? U : N)(n, r)) {
                                for (; o.length && o[o.length - 1].lex; )
                                    o.pop()();
                                return _.marked
                                    ? _.marked
                                    : 'variable' == n && w(e, r)
                                    ? 'variable-2'
                                    : t;
                            }
                    }
                    var _ = {
                        state: null,
                        column: null,
                        marked: null,
                        cc: null,
                    };
                    function S() {
                        for (var e = arguments.length - 1; e >= 0; e--)
                            _.cc.push(arguments[e]);
                    }
                    function M() {
                        return S.apply(null, arguments), !0;
                    }
                    function L(e, t) {
                        for (var n = t; n; n = n.next)
                            if (n.name == e) return !0;
                        return !1;
                    }
                    function T(e) {
                        var t = _.state;
                        if (((_.marked = 'def'), c)) {
                            if (t.context)
                                if (
                                    'var' == t.lexical.info &&
                                    t.context &&
                                    t.context.block
                                ) {
                                    var r = F(e, t.context);
                                    if (null != r) return void (t.context = r);
                                } else if (!L(e, t.localVars))
                                    return void (t.localVars = new P(
                                        e,
                                        t.localVars
                                    ));
                            n.globalVars &&
                                !L(e, t.globalVars) &&
                                (t.globalVars = new P(e, t.globalVars));
                        }
                    }
                    function F(e, t) {
                        if (t) {
                            if (t.block) {
                                var n = F(e, t.prev);
                                return n
                                    ? n == t.prev
                                        ? t
                                        : new A(n, t.vars, !0)
                                    : null;
                            }
                            return L(e, t.vars)
                                ? t
                                : new A(t.prev, new P(e, t.vars), !1);
                        }
                        return null;
                    }
                    function E(e) {
                        return (
                            'public' == e ||
                            'private' == e ||
                            'protected' == e ||
                            'abstract' == e ||
                            'readonly' == e
                        );
                    }
                    function A(e, t, n) {
                        (this.prev = e), (this.vars = t), (this.block = n);
                    }
                    function P(e, t) {
                        (this.name = e), (this.next = t);
                    }
                    var D = new P('this', new P('arguments', null));
                    function z() {
                        (_.state.context = new A(
                            _.state.context,
                            _.state.localVars,
                            !1
                        )),
                            (_.state.localVars = D);
                    }
                    function O() {
                        (_.state.context = new A(
                            _.state.context,
                            _.state.localVars,
                            !0
                        )),
                            (_.state.localVars = null);
                    }
                    function I() {
                        (_.state.localVars = _.state.context.vars),
                            (_.state.context = _.state.context.prev);
                    }
                    function B(e, t) {
                        var n = function() {
                            var n = _.state,
                                r = n.indented;
                            if ('stat' == n.lexical.type)
                                r = n.lexical.indented;
                            else
                                for (
                                    var i = n.lexical;
                                    i && ')' == i.type && i.align;
                                    i = i.prev
                                )
                                    r = i.indented;
                            n.lexical = new k(
                                r,
                                _.stream.column(),
                                e,
                                null,
                                n.lexical,
                                t
                            );
                        };
                        return (n.lex = !0), n;
                    }
                    function j() {
                        var e = _.state;
                        e.lexical.prev &&
                            (')' == e.lexical.type &&
                                (e.indented = e.lexical.indented),
                            (e.lexical = e.lexical.prev));
                    }
                    function q(e) {
                        return function t(n) {
                            return n == e
                                ? M()
                                : ';' == e || '}' == n || ')' == n || ']' == n
                                ? S()
                                : M(t);
                        };
                    }
                    function N(e, t) {
                        return 'var' == e
                            ? M(B('vardef', t), _e, q(';'), j)
                            : 'keyword a' == e
                            ? M(B('form'), W, N, j)
                            : 'keyword b' == e
                            ? M(B('form'), N, j)
                            : 'keyword d' == e
                            ? _.stream.match(/^\s*$/, !1)
                                ? M()
                                : M(B('stat'), H, q(';'), j)
                            : 'debugger' == e
                            ? M(q(';'))
                            : '{' == e
                            ? M(B('}'), O, le, j, I)
                            : ';' == e
                            ? M()
                            : 'if' == e
                            ? ('else' == _.state.lexical.info &&
                                  _.state.cc[_.state.cc.length - 1] == j &&
                                  _.state.cc.pop()(),
                              M(B('form'), W, N, j, Ee))
                            : 'function' == e
                            ? M(ze)
                            : 'for' == e
                            ? M(B('form'), O, Ae, N, I, j)
                            : 'class' == e || (u && 'interface' == t)
                            ? ((_.marked = 'keyword'),
                              M(B('form', 'class' == e ? e : t), qe, j))
                            : 'variable' == e
                            ? u && 'declare' == t
                                ? ((_.marked = 'keyword'), M(N))
                                : u &&
                                  ('module' == t ||
                                      'enum' == t ||
                                      'type' == t) &&
                                  _.stream.match(/^\s*\w/, !1)
                                ? ((_.marked = 'keyword'),
                                  'enum' == t
                                      ? M(Je)
                                      : 'type' == t
                                      ? M(Ie, q('operator'), fe, q(';'))
                                      : M(
                                            B('form'),
                                            Se,
                                            q('{'),
                                            B('}'),
                                            le,
                                            j,
                                            j
                                        ))
                                : u && 'namespace' == t
                                ? ((_.marked = 'keyword'),
                                  M(B('form'), U, N, j))
                                : u && 'abstract' == t
                                ? ((_.marked = 'keyword'), M(N))
                                : M(B('stat'), te)
                            : 'switch' == e
                            ? M(
                                  B('form'),
                                  W,
                                  q('{'),
                                  B('}', 'switch'),
                                  O,
                                  le,
                                  j,
                                  j,
                                  I
                              )
                            : 'case' == e
                            ? M(U, q(':'))
                            : 'default' == e
                            ? M(q(':'))
                            : 'catch' == e
                            ? M(B('form'), z, R, N, j, I)
                            : 'export' == e
                            ? M(B('stat'), $e, j)
                            : 'import' == e
                            ? M(B('stat'), Ke, j)
                            : 'async' == e
                            ? M(N)
                            : '@' == t
                            ? M(U, N)
                            : S(B('stat'), U, q(';'), j);
                    }
                    function R(e) {
                        if ('(' == e) return M(Be, q(')'));
                    }
                    function U(e, t) {
                        return K(e, t, !1);
                    }
                    function $(e, t) {
                        return K(e, t, !0);
                    }
                    function W(e) {
                        return '(' != e ? S() : M(B(')'), H, q(')'), j);
                    }
                    function K(e, t, n) {
                        if (_.state.fatArrowAt == _.stream.start) {
                            var r = n ? Z : J;
                            if ('(' == e)
                                return M(
                                    z,
                                    B(')'),
                                    ae(Be, ')'),
                                    j,
                                    q('=>'),
                                    r,
                                    I
                                );
                            if ('variable' == e) return S(z, Se, q('=>'), r, I);
                        }
                        var i = n ? G : V;
                        return y.hasOwnProperty(e)
                            ? M(i)
                            : 'function' == e
                            ? M(ze, i)
                            : 'class' == e || (u && 'interface' == t)
                            ? ((_.marked = 'keyword'), M(B('form'), je, j))
                            : 'keyword c' == e || 'async' == e
                            ? M(n ? $ : U)
                            : '(' == e
                            ? M(B(')'), H, q(')'), j, i)
                            : 'operator' == e || 'spread' == e
                            ? M(n ? $ : U)
                            : '[' == e
                            ? M(B(']'), Xe, j, i)
                            : '{' == e
                            ? se(re, '}', null, i)
                            : 'quasi' == e
                            ? S(Q, i)
                            : 'new' == e
                            ? M(
                                  (function(e) {
                                      return function(t) {
                                          return '.' == t
                                              ? M(e ? ee : Y)
                                              : 'variable' == t && u
                                              ? M(ke, e ? G : V)
                                              : S(e ? $ : U);
                                      };
                                  })(n)
                              )
                            : M();
                    }
                    function H(e) {
                        return e.match(/[;\}\)\],]/) ? S() : S(U);
                    }
                    function V(e, t) {
                        return ',' == e ? M(H) : G(e, t, !1);
                    }
                    function G(e, t, n) {
                        var r = 0 == n ? V : G,
                            i = 0 == n ? U : $;
                        return '=>' == e
                            ? M(z, n ? Z : J, I)
                            : 'operator' == e
                            ? /\+\+|--/.test(t) || (u && '!' == t)
                                ? M(r)
                                : u &&
                                  '<' == t &&
                                  _.stream.match(/^([^<>]|<[^<>]*>)*>\s*\(/, !1)
                                ? M(B('>'), ae(fe, '>'), j, r)
                                : '?' == t
                                ? M(U, q(':'), i)
                                : M(i)
                            : 'quasi' == e
                            ? S(Q, r)
                            : ';' != e
                            ? '(' == e
                                ? se($, ')', 'call', r)
                                : '.' == e
                                ? M(ne, r)
                                : '[' == e
                                ? M(B(']'), H, q(']'), j, r)
                                : u && 'as' == t
                                ? ((_.marked = 'keyword'), M(fe, r))
                                : 'regexp' == e
                                ? ((_.state.lastType = _.marked = 'operator'),
                                  _.stream.backUp(
                                      _.stream.pos - _.stream.start - 1
                                  ),
                                  M(i))
                                : void 0
                            : void 0;
                    }
                    function Q(e, t) {
                        return 'quasi' != e
                            ? S()
                            : '${' != t.slice(t.length - 2)
                            ? M(Q)
                            : M(U, X);
                    }
                    function X(e) {
                        if ('}' == e)
                            return (
                                (_.marked = 'string-2'),
                                (_.state.tokenize = v),
                                M(Q)
                            );
                    }
                    function J(e) {
                        return x(_.stream, _.state), S('{' == e ? N : U);
                    }
                    function Z(e) {
                        return x(_.stream, _.state), S('{' == e ? N : $);
                    }
                    function Y(e, t) {
                        if ('target' == t) return (_.marked = 'keyword'), M(V);
                    }
                    function ee(e, t) {
                        if ('target' == t) return (_.marked = 'keyword'), M(G);
                    }
                    function te(e) {
                        return ':' == e ? M(j, N) : S(V, q(';'), j);
                    }
                    function ne(e) {
                        if ('variable' == e)
                            return (_.marked = 'property'), M();
                    }
                    function re(e, t) {
                        return 'async' == e
                            ? ((_.marked = 'property'), M(re))
                            : 'variable' == e || 'keyword' == _.style
                            ? ((_.marked = 'property'),
                              'get' == t || 'set' == t
                                  ? M(ie)
                                  : (u &&
                                        _.state.fatArrowAt == _.stream.start &&
                                        (n = _.stream.match(/^\s*:\s*/, !1)) &&
                                        (_.state.fatArrowAt =
                                            _.stream.pos + n[0].length),
                                    M(oe)))
                            : 'number' == e || 'string' == e
                            ? ((_.marked = s
                                  ? 'property'
                                  : _.style + ' property'),
                              M(oe))
                            : 'jsonld-keyword' == e
                            ? M(oe)
                            : u && E(t)
                            ? ((_.marked = 'keyword'), M(re))
                            : '[' == e
                            ? M(U, ce, q(']'), oe)
                            : 'spread' == e
                            ? M($, oe)
                            : '*' == t
                            ? ((_.marked = 'keyword'), M(re))
                            : ':' == e
                            ? S(oe)
                            : void 0;
                        var n;
                    }
                    function ie(e) {
                        return 'variable' != e
                            ? S(oe)
                            : ((_.marked = 'property'), M(ze));
                    }
                    function oe(e) {
                        return ':' == e ? M($) : '(' == e ? S(ze) : void 0;
                    }
                    function ae(e, t, n) {
                        function r(i, o) {
                            if (n ? n.indexOf(i) > -1 : ',' == i) {
                                var a = _.state.lexical;
                                return (
                                    'call' == a.info &&
                                        (a.pos = (a.pos || 0) + 1),
                                    M(function(n, r) {
                                        return n == t || r == t ? S() : S(e);
                                    }, r)
                                );
                            }
                            return i == t || o == t
                                ? M()
                                : n && n.indexOf(';') > -1
                                ? S(e)
                                : M(q(t));
                        }
                        return function(n, i) {
                            return n == t || i == t ? M() : S(e, r);
                        };
                    }
                    function se(e, t, n) {
                        for (var r = 3; r < arguments.length; r++)
                            _.cc.push(arguments[r]);
                        return M(B(t, n), ae(e, t), j);
                    }
                    function le(e) {
                        return '}' == e ? M() : S(N, le);
                    }
                    function ce(e, t) {
                        if (u) {
                            if (':' == e) return M(fe);
                            if ('?' == t) return M(ce);
                        }
                    }
                    function ue(e, t) {
                        if (u && (':' == e || 'in' == t)) return M(fe);
                    }
                    function de(e) {
                        if (u && ':' == e)
                            return _.stream.match(/^\s*\w+\s+is\b/, !1)
                                ? M(U, me, fe)
                                : M(fe);
                    }
                    function me(e, t) {
                        if ('is' == t) return (_.marked = 'keyword'), M();
                    }
                    function fe(e, t) {
                        return 'keyof' == t ||
                            'typeof' == t ||
                            'infer' == t ||
                            'readonly' == t
                            ? ((_.marked = 'keyword'),
                              M('typeof' == t ? $ : fe))
                            : 'variable' == e || 'void' == t
                            ? ((_.marked = 'type'), M(ye))
                            : '|' == t || '&' == t
                            ? M(fe)
                            : 'string' == e || 'number' == e || 'atom' == e
                            ? M(ye)
                            : '[' == e
                            ? M(B(']'), ae(fe, ']', ','), j, ye)
                            : '{' == e
                            ? M(B('}'), he, j, ye)
                            : '(' == e
                            ? M(ae(xe, ')'), pe, ye)
                            : '<' == e
                            ? M(ae(fe, '>'), fe)
                            : 'quasi' == e
                            ? S(be, ye)
                            : void 0;
                    }
                    function pe(e) {
                        if ('=>' == e) return M(fe);
                    }
                    function he(e) {
                        return e.match(/[\}\)\]]/)
                            ? M()
                            : ',' == e || ';' == e
                            ? M(he)
                            : S(ge, he);
                    }
                    function ge(e, t) {
                        return 'variable' == e || 'keyword' == _.style
                            ? ((_.marked = 'property'), M(ge))
                            : '?' == t || 'number' == e || 'string' == e
                            ? M(ge)
                            : ':' == e
                            ? M(fe)
                            : '[' == e
                            ? M(q('variable'), ue, q(']'), ge)
                            : '(' == e
                            ? S(Oe, ge)
                            : e.match(/[;\}\)\],]/)
                            ? void 0
                            : M();
                    }
                    function be(e, t) {
                        return 'quasi' != e
                            ? S()
                            : '${' != t.slice(t.length - 2)
                            ? M(be)
                            : M(fe, ve);
                    }
                    function ve(e) {
                        if ('}' == e)
                            return (
                                (_.marked = 'string-2'),
                                (_.state.tokenize = v),
                                M(be)
                            );
                    }
                    function xe(e, t) {
                        return ('variable' == e &&
                            _.stream.match(/^\s*[?:]/, !1)) ||
                            '?' == t
                            ? M(xe)
                            : ':' == e
                            ? M(fe)
                            : 'spread' == e
                            ? M(xe)
                            : S(fe);
                    }
                    function ye(e, t) {
                        return '<' == t
                            ? M(B('>'), ae(fe, '>'), j, ye)
                            : '|' == t || '.' == e || '&' == t
                            ? M(fe)
                            : '[' == e
                            ? M(fe, q(']'), ye)
                            : 'extends' == t || 'implements' == t
                            ? ((_.marked = 'keyword'), M(fe))
                            : '?' == t
                            ? M(fe, q(':'), fe)
                            : void 0;
                    }
                    function ke(e, t) {
                        if ('<' == t) return M(B('>'), ae(fe, '>'), j, ye);
                    }
                    function we() {
                        return S(fe, Ce);
                    }
                    function Ce(e, t) {
                        if ('=' == t) return M(fe);
                    }
                    function _e(e, t) {
                        return 'enum' == t
                            ? ((_.marked = 'keyword'), M(Je))
                            : S(Se, ce, Te, Fe);
                    }
                    function Se(e, t) {
                        return u && E(t)
                            ? ((_.marked = 'keyword'), M(Se))
                            : 'variable' == e
                            ? (T(t), M())
                            : 'spread' == e
                            ? M(Se)
                            : '[' == e
                            ? se(Le, ']')
                            : '{' == e
                            ? se(Me, '}')
                            : void 0;
                    }
                    function Me(e, t) {
                        return 'variable' != e || _.stream.match(/^\s*:/, !1)
                            ? ('variable' == e && (_.marked = 'property'),
                              'spread' == e
                                  ? M(Se)
                                  : '}' == e
                                  ? S()
                                  : '[' == e
                                  ? M(U, q(']'), q(':'), Me)
                                  : M(q(':'), Se, Te))
                            : (T(t), M(Te));
                    }
                    function Le() {
                        return S(Se, Te);
                    }
                    function Te(e, t) {
                        if ('=' == t) return M($);
                    }
                    function Fe(e) {
                        if (',' == e) return M(_e);
                    }
                    function Ee(e, t) {
                        if ('keyword b' == e && 'else' == t)
                            return M(B('form', 'else'), N, j);
                    }
                    function Ae(e, t) {
                        return 'await' == t
                            ? M(Ae)
                            : '(' == e
                            ? M(B(')'), Pe, j)
                            : void 0;
                    }
                    function Pe(e) {
                        return 'var' == e
                            ? M(_e, De)
                            : 'variable' == e
                            ? M(De)
                            : S(De);
                    }
                    function De(e, t) {
                        return ')' == e
                            ? M()
                            : ';' == e
                            ? M(De)
                            : 'in' == t || 'of' == t
                            ? ((_.marked = 'keyword'), M(U, De))
                            : S(U, De);
                    }
                    function ze(e, t) {
                        return '*' == t
                            ? ((_.marked = 'keyword'), M(ze))
                            : 'variable' == e
                            ? (T(t), M(ze))
                            : '(' == e
                            ? M(z, B(')'), ae(Be, ')'), j, de, N, I)
                            : u && '<' == t
                            ? M(B('>'), ae(we, '>'), j, ze)
                            : void 0;
                    }
                    function Oe(e, t) {
                        return '*' == t
                            ? ((_.marked = 'keyword'), M(Oe))
                            : 'variable' == e
                            ? (T(t), M(Oe))
                            : '(' == e
                            ? M(z, B(')'), ae(Be, ')'), j, de, I)
                            : u && '<' == t
                            ? M(B('>'), ae(we, '>'), j, Oe)
                            : void 0;
                    }
                    function Ie(e, t) {
                        return 'keyword' == e || 'variable' == e
                            ? ((_.marked = 'type'), M(Ie))
                            : '<' == t
                            ? M(B('>'), ae(we, '>'), j)
                            : void 0;
                    }
                    function Be(e, t) {
                        return (
                            '@' == t && M(U, Be),
                            'spread' == e
                                ? M(Be)
                                : u && E(t)
                                ? ((_.marked = 'keyword'), M(Be))
                                : u && 'this' == e
                                ? M(ce, Te)
                                : S(Se, ce, Te)
                        );
                    }
                    function je(e, t) {
                        return 'variable' == e ? qe(e, t) : Ne(e, t);
                    }
                    function qe(e, t) {
                        if ('variable' == e) return T(t), M(Ne);
                    }
                    function Ne(e, t) {
                        return '<' == t
                            ? M(B('>'), ae(we, '>'), j, Ne)
                            : 'extends' == t ||
                              'implements' == t ||
                              (u && ',' == e)
                            ? ('implements' == t && (_.marked = 'keyword'),
                              M(u ? fe : U, Ne))
                            : '{' == e
                            ? M(B('}'), Re, j)
                            : void 0;
                    }
                    function Re(e, t) {
                        return 'async' == e ||
                            ('variable' == e &&
                                ('static' == t ||
                                    'get' == t ||
                                    'set' == t ||
                                    (u && E(t))) &&
                                _.stream.match(/^\s+[\w$\xa1-\uffff]/, !1))
                            ? ((_.marked = 'keyword'), M(Re))
                            : 'variable' == e || 'keyword' == _.style
                            ? ((_.marked = 'property'), M(Ue, Re))
                            : 'number' == e || 'string' == e
                            ? M(Ue, Re)
                            : '[' == e
                            ? M(U, ce, q(']'), Ue, Re)
                            : '*' == t
                            ? ((_.marked = 'keyword'), M(Re))
                            : u && '(' == e
                            ? S(Oe, Re)
                            : ';' == e || ',' == e
                            ? M(Re)
                            : '}' == e
                            ? M()
                            : '@' == t
                            ? M(U, Re)
                            : void 0;
                    }
                    function Ue(e, t) {
                        if ('!' == t) return M(Ue);
                        if ('?' == t) return M(Ue);
                        if (':' == e) return M(fe, Te);
                        if ('=' == t) return M($);
                        var n = _.state.lexical.prev;
                        return S(n && 'interface' == n.info ? Oe : ze);
                    }
                    function $e(e, t) {
                        return '*' == t
                            ? ((_.marked = 'keyword'), M(Qe, q(';')))
                            : 'default' == t
                            ? ((_.marked = 'keyword'), M(U, q(';')))
                            : '{' == e
                            ? M(ae(We, '}'), Qe, q(';'))
                            : S(N);
                    }
                    function We(e, t) {
                        return 'as' == t
                            ? ((_.marked = 'keyword'), M(q('variable')))
                            : 'variable' == e
                            ? S($, We)
                            : void 0;
                    }
                    function Ke(e) {
                        return 'string' == e
                            ? M()
                            : '(' == e
                            ? S(U)
                            : '.' == e
                            ? S(V)
                            : S(He, Ve, Qe);
                    }
                    function He(e, t) {
                        return '{' == e
                            ? se(He, '}')
                            : ('variable' == e && T(t),
                              '*' == t && (_.marked = 'keyword'),
                              M(Ge));
                    }
                    function Ve(e) {
                        if (',' == e) return M(He, Ve);
                    }
                    function Ge(e, t) {
                        if ('as' == t) return (_.marked = 'keyword'), M(He);
                    }
                    function Qe(e, t) {
                        if ('from' == t) return (_.marked = 'keyword'), M(U);
                    }
                    function Xe(e) {
                        return ']' == e ? M() : S(ae($, ']'));
                    }
                    function Je() {
                        return S(
                            B('form'),
                            Se,
                            q('{'),
                            B('}'),
                            ae(Ze, '}'),
                            j,
                            j
                        );
                    }
                    function Ze() {
                        return S(Se, Te);
                    }
                    function Ye(e, t, n) {
                        return (
                            (t.tokenize == g &&
                                /^(?:operator|sof|keyword [bcd]|case|new|export|default|spread|[\[{}\(,;:]|=>)$/.test(
                                    t.lastType
                                )) ||
                            ('quasi' == t.lastType &&
                                /\{\s*$/.test(
                                    e.string.slice(0, e.pos - (n || 0))
                                ))
                        );
                    }
                    return (
                        (I.lex = !0),
                        (j.lex = !0),
                        {
                            startState: function(e) {
                                var t = {
                                    tokenize: g,
                                    lastType: 'sof',
                                    cc: [],
                                    lexical: new k(
                                        (e || 0) - o,
                                        0,
                                        'block',
                                        !1
                                    ),
                                    localVars: n.localVars,
                                    context:
                                        n.localVars && new A(null, null, !1),
                                    indented: e || 0,
                                };
                                return (
                                    n.globalVars &&
                                        'object' == typeof n.globalVars &&
                                        (t.globalVars = n.globalVars),
                                    t
                                );
                            },
                            token: function(e, t) {
                                if (
                                    (e.sol() &&
                                        (t.lexical.hasOwnProperty('align') ||
                                            (t.lexical.align = !1),
                                        (t.indented = e.indentation()),
                                        x(e, t)),
                                    t.tokenize != b && e.eatSpace())
                                )
                                    return null;
                                var n = t.tokenize(e, t);
                                return 'comment' == r
                                    ? n
                                    : ((t.lastType =
                                          'operator' != r ||
                                          ('++' != i && '--' != i)
                                              ? r
                                              : 'incdec'),
                                      C(t, n, r, i, e));
                            },
                            indent: function(t, r) {
                                if (t.tokenize == b || t.tokenize == v)
                                    return e.Pass;
                                if (t.tokenize != g) return 0;
                                var i,
                                    s = r && r.charAt(0),
                                    l = t.lexical;
                                if (!/^\s*else\b/.test(r))
                                    for (var c = t.cc.length - 1; c >= 0; --c) {
                                        var u = t.cc[c];
                                        if (u == j) l = l.prev;
                                        else if (u != Ee && u != I) break;
                                    }
                                for (
                                    ;
                                    ('stat' == l.type || 'form' == l.type) &&
                                    ('}' == s ||
                                        ((i = t.cc[t.cc.length - 1]) &&
                                            (i == V || i == G) &&
                                            !/^[,\.=+\-*:?[\(]/.test(r)));

                                )
                                    l = l.prev;
                                a &&
                                    ')' == l.type &&
                                    'stat' == l.prev.type &&
                                    (l = l.prev);
                                var d = l.type,
                                    m = s == d;
                                return 'vardef' == d
                                    ? l.indented +
                                          ('operator' == t.lastType ||
                                          ',' == t.lastType
                                              ? l.info.length + 1
                                              : 0)
                                    : 'form' == d && '{' == s
                                    ? l.indented
                                    : 'form' == d
                                    ? l.indented + o
                                    : 'stat' == d
                                    ? l.indented +
                                      ((function(e, t) {
                                          return (
                                              'operator' == e.lastType ||
                                              ',' == e.lastType ||
                                              f.test(t.charAt(0)) ||
                                              /[,.]/.test(t.charAt(0))
                                          );
                                      })(t, r)
                                          ? a || o
                                          : 0)
                                    : 'switch' != l.info ||
                                      m ||
                                      0 == n.doubleIndentSwitch
                                    ? l.align
                                        ? l.column + (m ? 0 : 1)
                                        : l.indented + (m ? 0 : o)
                                    : l.indented +
                                      (/^(?:case|default)\b/.test(r)
                                          ? o
                                          : 2 * o);
                            },
                            electricInput: /^\s*(?:case .*?:|default:|\{|\})$/,
                            blockCommentStart: l ? null : '/*',
                            blockCommentEnd: l ? null : '*/',
                            blockCommentContinue: l ? null : ' * ',
                            lineComment: l ? null : '//',
                            fold: 'brace',
                            closeBrackets: '()[]{}\'\'""``',
                            helperType: l ? 'json' : 'javascript',
                            jsonldMode: s,
                            jsonMode: l,
                            expressionAllowed: Ye,
                            skipExpression: function(t) {
                                C(
                                    t,
                                    'atom',
                                    'atom',
                                    'true',
                                    new e.StringStream('', 2, null)
                                );
                            },
                        }
                    );
                }),
                    e.registerHelper('wordChars', 'javascript', /[\w$]/),
                    e.defineMIME('text/javascript', 'javascript'),
                    e.defineMIME('text/ecmascript', 'javascript'),
                    e.defineMIME('application/javascript', 'javascript'),
                    e.defineMIME('application/x-javascript', 'javascript'),
                    e.defineMIME('application/ecmascript', 'javascript'),
                    e.defineMIME('application/json', {
                        name: 'javascript',
                        json: !0,
                    }),
                    e.defineMIME('application/x-json', {
                        name: 'javascript',
                        json: !0,
                    }),
                    e.defineMIME('application/manifest+json', {
                        name: 'javascript',
                        json: !0,
                    }),
                    e.defineMIME('application/ld+json', {
                        name: 'javascript',
                        jsonld: !0,
                    }),
                    e.defineMIME('text/typescript', {
                        name: 'javascript',
                        typescript: !0,
                    }),
                    e.defineMIME('application/typescript', {
                        name: 'javascript',
                        typescript: !0,
                    });
            })(n(25747));
        },
        38269: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e, t, n, r) {
                    (this.state = e),
                        (this.mode = t),
                        (this.depth = n),
                        (this.prev = r);
                }
                function n(r) {
                    return new t(
                        e.copyState(r.mode, r.state),
                        r.mode,
                        r.depth,
                        r.prev && n(r.prev)
                    );
                }
                e.defineMode(
                    'jsx',
                    function(r, i) {
                        var o = e.getMode(r, {
                                name: 'xml',
                                allowMissing: !0,
                                multilineTagIndentPastTag: !1,
                                allowMissingTagName: !0,
                            }),
                            a = e.getMode(r, (i && i.base) || 'javascript');
                        function s(e) {
                            var t = e.tagName;
                            e.tagName = null;
                            var n = o.indent(e, '', '');
                            return (e.tagName = t), n;
                        }
                        function l(n, i) {
                            return i.context.mode == o
                                ? (function(n, i, c) {
                                      if (2 == c.depth)
                                          return (
                                              n.match(/^.*?\*\//)
                                                  ? (c.depth = 1)
                                                  : n.skipToEnd(),
                                              'comment'
                                          );
                                      if ('{' == n.peek()) {
                                          o.skipAttribute(c.state);
                                          var u = s(c.state),
                                              d = c.state.context;
                                          if (d && n.match(/^[^>]*>\s*$/, !1)) {
                                              for (; d.prev && !d.startOfLine; )
                                                  d = d.prev;
                                              d.startOfLine
                                                  ? (u -= r.indentUnit)
                                                  : c.prev.state.lexical &&
                                                    (u =
                                                        c.prev.state.lexical
                                                            .indented);
                                          } else
                                              1 == c.depth &&
                                                  (u += r.indentUnit);
                                          return (
                                              (i.context = new t(
                                                  e.startState(a, u),
                                                  a,
                                                  0,
                                                  i.context
                                              )),
                                              null
                                          );
                                      }
                                      if (1 == c.depth) {
                                          if ('<' == n.peek())
                                              return (
                                                  o.skipAttribute(c.state),
                                                  (i.context = new t(
                                                      e.startState(
                                                          o,
                                                          s(c.state)
                                                      ),
                                                      o,
                                                      0,
                                                      i.context
                                                  )),
                                                  null
                                              );
                                          if (n.match('//'))
                                              return n.skipToEnd(), 'comment';
                                          if (n.match('/*'))
                                              return (c.depth = 2), l(n, i);
                                      }
                                      var m,
                                          f = o.token(n, c.state),
                                          p = n.current();
                                      return (
                                          /\btag\b/.test(f)
                                              ? />$/.test(p)
                                                  ? c.state.context
                                                      ? (c.depth = 0)
                                                      : (i.context =
                                                            i.context.prev)
                                                  : /^</.test(p) &&
                                                    (c.depth = 1)
                                              : !f &&
                                                (m = p.indexOf('{')) > -1 &&
                                                n.backUp(p.length - m),
                                          f
                                      );
                                  })(n, i, i.context)
                                : (function(n, r, i) {
                                      if (
                                          '<' == n.peek() &&
                                          a.expressionAllowed(n, i.state)
                                      )
                                          return (
                                              (r.context = new t(
                                                  e.startState(
                                                      o,
                                                      a.indent(i.state, '', '')
                                                  ),
                                                  o,
                                                  0,
                                                  r.context
                                              )),
                                              a.skipExpression(i.state),
                                              null
                                          );
                                      var s = a.token(n, i.state);
                                      if (!s && null != i.depth) {
                                          var l = n.current();
                                          '{' == l
                                              ? i.depth++
                                              : '}' == l &&
                                                0 == --i.depth &&
                                                (r.context = r.context.prev);
                                      }
                                      return s;
                                  })(n, i, i.context);
                        }
                        return {
                            startState: function() {
                                return { context: new t(e.startState(a), a) };
                            },
                            copyState: function(e) {
                                return { context: n(e.context) };
                            },
                            token: l,
                            indent: function(e, t, n) {
                                return e.context.mode.indent(
                                    e.context.state,
                                    t,
                                    n
                                );
                            },
                            innerMode: function(e) {
                                return e.context;
                            },
                        };
                    },
                    'xml',
                    'javascript'
                ),
                    e.defineMIME('text/jsx', 'jsx'),
                    e.defineMIME('text/typescript-jsx', {
                        name: 'jsx',
                        base: { name: 'javascript', typescript: !0 },
                    });
            })(n(25747), n(89036), n(72896));
        },
        15e3: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.defineMode('julia', function(t, n) {
                    function r(e, t) {
                        return (
                            void 0 === t && (t = '\\b'),
                            new RegExp('^((' + e.join(')|(') + '))' + t)
                        );
                    }
                    var i =
                            n.operators ||
                            r(
                                [
                                    '[<>]:',
                                    '[<>=]=',
                                    '<<=?',
                                    '>>>?=?',
                                    '=>',
                                    '->',
                                    '\\/\\/',
                                    '[\\\\%*+\\-<>!=\\/^|&\\u00F7\\u22BB]=?',
                                    '\\?',
                                    '\\$',
                                    '~',
                                    ':',
                                    '\\u00D7',
                                    '\\u2208',
                                    '\\u2209',
                                    '\\u220B',
                                    '\\u220C',
                                    '\\u2218',
                                    '\\u221A',
                                    '\\u221B',
                                    '\\u2229',
                                    '\\u222A',
                                    '\\u2260',
                                    '\\u2264',
                                    '\\u2265',
                                    '\\u2286',
                                    '\\u2288',
                                    '\\u228A',
                                    '\\u22C5',
                                    '\\b(in|isa)\\b(?!.?\\()',
                                ],
                                ''
                            ),
                        o = n.delimiters || /^[;,()[\]{}]/,
                        a =
                            n.identifiers ||
                            /^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,
                        s = r(
                            [
                                '\\\\[0-7]{1,3}',
                                '\\\\x[A-Fa-f0-9]{1,2}',
                                '\\\\[abefnrtv0%?\'"\\\\]',
                                '([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])',
                            ],
                            "'"
                        ),
                        l = [
                            'if',
                            'else',
                            'elseif',
                            'while',
                            'for',
                            'begin',
                            'let',
                            'end',
                            'do',
                            'try',
                            'catch',
                            'finally',
                            'return',
                            'break',
                            'continue',
                            'global',
                            'local',
                            'const',
                            'export',
                            'import',
                            'importall',
                            'using',
                            'function',
                            'where',
                            'macro',
                            'module',
                            'baremodule',
                            'struct',
                            'type',
                            'mutable',
                            'immutable',
                            'quote',
                            'typealias',
                            'abstract',
                            'primitive',
                            'bitstype',
                        ],
                        c = ['true', 'false', 'nothing', 'NaN', 'Inf'];
                    e.registerHelper('hintWords', 'julia', l.concat(c));
                    var u = r([
                            'begin',
                            'function',
                            'type',
                            'struct',
                            'immutable',
                            'let',
                            'macro',
                            'for',
                            'while',
                            'quote',
                            'if',
                            'else',
                            'elseif',
                            'try',
                            'finally',
                            'catch',
                            'do',
                        ]),
                        d = r(['end', 'else', 'elseif', 'catch', 'finally']),
                        m = r(l),
                        f = r(c),
                        p = /^@[_A-Za-z][\w]*/,
                        h = /^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,
                        g = /^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;
                    function b(e) {
                        return e.nestedArrays > 0;
                    }
                    function v(e, t) {
                        return (
                            void 0 === t && (t = 0),
                            e.scopes.length <= t
                                ? null
                                : e.scopes[e.scopes.length - (t + 1)]
                        );
                    }
                    function x(e, t) {
                        if (e.match('#=', !1))
                            return (t.tokenize = k), t.tokenize(e, t);
                        var n = t.leavingExpr;
                        if (
                            (e.sol() && (n = !1),
                            (t.leavingExpr = !1),
                            n && e.match(/^'+/))
                        )
                            return 'operator';
                        if (e.match(/\.{4,}/)) return 'error';
                        if (e.match(/\.{1,3}/)) return 'operator';
                        if (e.eatSpace()) return null;
                        var r,
                            s = e.peek();
                        if ('#' === s) return e.skipToEnd(), 'comment';
                        if (
                            ('[' === s &&
                                (t.scopes.push('['), t.nestedArrays++),
                            '(' === s &&
                                (t.scopes.push('('), t.nestedGenerators++),
                            b(t) && ']' === s)
                        ) {
                            for (; t.scopes.length && '[' !== v(t); )
                                t.scopes.pop();
                            t.scopes.pop(),
                                t.nestedArrays--,
                                (t.leavingExpr = !0);
                        }
                        if (
                            (function(e) {
                                return e.nestedGenerators > 0;
                            })(t) &&
                            ')' === s
                        ) {
                            for (; t.scopes.length && '(' !== v(t); )
                                t.scopes.pop();
                            t.scopes.pop(),
                                t.nestedGenerators--,
                                (t.leavingExpr = !0);
                        }
                        if (b(t)) {
                            if ('end' == t.lastToken && e.match(':'))
                                return 'operator';
                            if (e.match('end')) return 'number';
                        }
                        if (
                            ((r = e.match(u, !1)) && t.scopes.push(r[0]),
                            e.match(d, !1) && t.scopes.pop(),
                            e.match(/^::(?![:\$])/))
                        )
                            return (t.tokenize = y), t.tokenize(e, t);
                        if (
                            (!n && e.match(h)) ||
                            e.match(
                                /:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/
                            )
                        )
                            return 'builtin';
                        if (e.match(i)) return 'operator';
                        if (e.match(/^\.?\d/, !1)) {
                            var l = RegExp(/^im\b/),
                                c = !1;
                            if (
                                (e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i) &&
                                    (c = !0),
                                e.match(/^0x[0-9a-f_]+/i) && (c = !0),
                                e.match(/^0b[01_]+/i) && (c = !0),
                                e.match(/^0o[0-7_]+/i) && (c = !0),
                                e.match(
                                    /^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i
                                ) && (c = !0),
                                e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i) && (c = !0),
                                c)
                            )
                                return (
                                    e.match(l), (t.leavingExpr = !0), 'number'
                                );
                        }
                        if (e.match("'"))
                            return (t.tokenize = w), t.tokenize(e, t);
                        if (e.match(g))
                            return (
                                (t.tokenize = (function(e) {
                                    function t(t, n) {
                                        if (t.eat('\\')) t.next();
                                        else {
                                            if (t.match(e))
                                                return (
                                                    (n.tokenize = x),
                                                    (n.leavingExpr = !0),
                                                    'string'
                                                );
                                            t.eat(/[`"]/);
                                        }
                                        return t.eatWhile(/[^\\`"]/), 'string';
                                    }
                                    return (
                                        '"""' === e.substr(-3)
                                            ? (e = '"""')
                                            : '"' === e.substr(-1) && (e = '"'),
                                        t
                                    );
                                })(e.current())),
                                t.tokenize(e, t)
                            );
                        if (e.match(p)) return 'meta';
                        if (e.match(o)) return null;
                        if (e.match(m)) return 'keyword';
                        if (e.match(f)) return 'builtin';
                        var C =
                            t.isDefinition ||
                            'function' == t.lastToken ||
                            'macro' == t.lastToken ||
                            'type' == t.lastToken ||
                            'struct' == t.lastToken ||
                            'immutable' == t.lastToken;
                        return e.match(a)
                            ? C
                                ? '.' === e.peek()
                                    ? ((t.isDefinition = !0), 'variable')
                                    : ((t.isDefinition = !1), 'def')
                                : ((t.leavingExpr = !0), 'variable')
                            : (e.next(), 'error');
                    }
                    function y(e, t) {
                        return (
                            e.match(/.*?(?=[,;{}()=\s]|$)/),
                            e.match('{')
                                ? t.nestedParameters++
                                : e.match('}') &&
                                  t.nestedParameters > 0 &&
                                  t.nestedParameters--,
                            t.nestedParameters > 0
                                ? e.match(/.*?(?={|})/) || e.next()
                                : 0 == t.nestedParameters && (t.tokenize = x),
                            'builtin'
                        );
                    }
                    function k(e, t) {
                        return (
                            e.match('#=') && t.nestedComments++,
                            e.match(/.*?(?=(#=|=#))/) || e.skipToEnd(),
                            e.match('=#') &&
                                (t.nestedComments--,
                                0 == t.nestedComments && (t.tokenize = x)),
                            'comment'
                        );
                    }
                    function w(e, t) {
                        var n,
                            r = !1;
                        if (e.match(s)) r = !0;
                        else if ((n = e.match(/\\u([a-f0-9]{1,4})(?=')/i)))
                            ((i = parseInt(n[1], 16)) <= 55295 || i >= 57344) &&
                                ((r = !0), e.next());
                        else if ((n = e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/))) {
                            var i;
                            (i = parseInt(n[1], 16)) <= 1114111 &&
                                ((r = !0), e.next());
                        }
                        return r
                            ? ((t.leavingExpr = !0), (t.tokenize = x), 'string')
                            : (e.match(/^[^']+(?=')/) || e.skipToEnd(),
                              e.match("'") && (t.tokenize = x),
                              'error');
                    }
                    return {
                        startState: function() {
                            return {
                                tokenize: x,
                                scopes: [],
                                lastToken: null,
                                leavingExpr: !1,
                                isDefinition: !1,
                                nestedArrays: 0,
                                nestedComments: 0,
                                nestedGenerators: 0,
                                nestedParameters: 0,
                                firstParenPos: -1,
                            };
                        },
                        token: function(e, t) {
                            var n = t.tokenize(e, t),
                                r = e.current();
                            return r && n && (t.lastToken = r), n;
                        },
                        indent: function(e, n) {
                            var r = 0;
                            return (
                                (']' === n ||
                                    ')' === n ||
                                    /^end\b/.test(n) ||
                                    /^else/.test(n) ||
                                    /^catch\b/.test(n) ||
                                    /^elseif\b/.test(n) ||
                                    /^finally/.test(n)) &&
                                    (r = -1),
                                (e.scopes.length + r) * t.indentUnit
                            );
                        },
                        electricInput: /\b(end|else|catch|finally)\b/,
                        blockCommentStart: '#=',
                        blockCommentEnd: '=#',
                        lineComment: '#',
                        closeBrackets: '()[]{}""',
                        fold: 'indent',
                    };
                }),
                    e.defineMIME('text/x-julia', 'julia');
            })(n(25747));
        },
        7385: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.defineMode(
                    'markdown',
                    function(t, n) {
                        var r = e.getMode(t, 'text/html'),
                            i = 'null' == r.name;
                        void 0 === n.highlightFormatting &&
                            (n.highlightFormatting = !1),
                            void 0 === n.maxBlockquoteDepth &&
                                (n.maxBlockquoteDepth = 0),
                            void 0 === n.taskLists && (n.taskLists = !1),
                            void 0 === n.strikethrough &&
                                (n.strikethrough = !1),
                            void 0 === n.emoji && (n.emoji = !1),
                            void 0 === n.fencedCodeBlockHighlighting &&
                                (n.fencedCodeBlockHighlighting = !0),
                            void 0 === n.fencedCodeBlockDefaultMode &&
                                (n.fencedCodeBlockDefaultMode = 'text/plain'),
                            void 0 === n.xml && (n.xml = !0),
                            void 0 === n.tokenTypeOverrides &&
                                (n.tokenTypeOverrides = {});
                        var o = {
                            header: 'header',
                            code: 'comment',
                            quote: 'quote',
                            list1: 'variable-2',
                            list2: 'variable-3',
                            list3: 'keyword',
                            hr: 'hr',
                            image: 'image',
                            imageAltText: 'image-alt-text',
                            imageMarker: 'image-marker',
                            formatting: 'formatting',
                            linkInline: 'link',
                            linkEmail: 'link',
                            linkText: 'link',
                            linkHref: 'string',
                            em: 'em',
                            strong: 'strong',
                            strikethrough: 'strikethrough',
                            emoji: 'builtin',
                        };
                        for (var a in o)
                            o.hasOwnProperty(a) &&
                                n.tokenTypeOverrides[a] &&
                                (o[a] = n.tokenTypeOverrides[a]);
                        var s = /^([*\-_])(?:\s*\1){2,}\s*$/,
                            l = /^(?:[*\-+]|^[0-9]+([.)]))\s+/,
                            c = /^\[(x| )\](?=\s)/i,
                            u = n.allowAtxHeaderWithoutSpace
                                ? /^(#+)/
                                : /^(#+)(?: |$)/,
                            d = /^ {0,3}(?:\={1,}|-{2,})\s*$/,
                            m = /^[^#!\[\]*_\\<>` "'(~:]+/,
                            f = /^(~~~+|```+)[ \t]*([\w\/+#-]*)[^\n`]*$/,
                            p = /^\s*\[[^\]]+?\]:.*$/,
                            h = /[!"#$%&'()*+,\-.\/:;<=>?@\[\\\]^_`{|}~\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E42\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC9\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDF3C-\uDF3E]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]/;
                        function g(e, t, n) {
                            return (t.f = t.inline = n), n(e, t);
                        }
                        function b(e, t, n) {
                            return (t.f = t.block = n), n(e, t);
                        }
                        function v(t) {
                            if (
                                ((t.linkTitle = !1),
                                (t.linkHref = !1),
                                (t.linkText = !1),
                                (t.em = !1),
                                (t.strong = !1),
                                (t.strikethrough = !1),
                                (t.quote = 0),
                                (t.indentedCode = !1),
                                t.f == y)
                            ) {
                                var n = i;
                                if (!n) {
                                    var o = e.innerMode(r, t.htmlState);
                                    n =
                                        'xml' == o.mode.name &&
                                        null === o.state.tagStart &&
                                        !o.state.context &&
                                        o.state.tokenize.isInText;
                                }
                                n &&
                                    ((t.f = _),
                                    (t.block = x),
                                    (t.htmlState = null));
                            }
                            return (
                                (t.trailingSpace = 0),
                                (t.trailingSpaceNewLine = !1),
                                (t.prevLine = t.thisLine),
                                (t.thisLine = { stream: null }),
                                null
                            );
                        }
                        function x(r, i) {
                            var a,
                                m = r.column() === i.indentation,
                                h =
                                    !(a = i.prevLine.stream) ||
                                    !/\S/.test(a.string),
                                b = i.indentedCode,
                                v = i.prevLine.hr,
                                x = !1 !== i.list,
                                y =
                                    (i.listStack[i.listStack.length - 1] || 0) +
                                    3;
                            i.indentedCode = !1;
                            var C = i.indentation;
                            if (
                                null === i.indentationDiff &&
                                ((i.indentationDiff = i.indentation), x)
                            ) {
                                for (
                                    i.list = null;
                                    C < i.listStack[i.listStack.length - 1];

                                )
                                    i.listStack.pop(),
                                        i.listStack.length
                                            ? (i.indentation =
                                                  i.listStack[
                                                      i.listStack.length - 1
                                                  ])
                                            : (i.list = !1);
                                !1 !== i.list &&
                                    (i.indentationDiff =
                                        C -
                                        i.listStack[i.listStack.length - 1]);
                            }
                            var _ = !(
                                    h ||
                                    v ||
                                    i.prevLine.header ||
                                    (x && b) ||
                                    i.prevLine.fencedCodeEnd
                                ),
                                S =
                                    (!1 === i.list || v || h) &&
                                    i.indentation <= y &&
                                    r.match(s),
                                M = null;
                            if (
                                i.indentationDiff >= 4 &&
                                (b ||
                                    i.prevLine.fencedCodeEnd ||
                                    i.prevLine.header ||
                                    h)
                            )
                                return (
                                    r.skipToEnd(), (i.indentedCode = !0), o.code
                                );
                            if (r.eatSpace()) return null;
                            if (
                                m &&
                                i.indentation <= y &&
                                (M = r.match(u)) &&
                                M[1].length <= 6
                            )
                                return (
                                    (i.quote = 0),
                                    (i.header = M[1].length),
                                    (i.thisLine.header = !0),
                                    n.highlightFormatting &&
                                        (i.formatting = 'header'),
                                    (i.f = i.inline),
                                    w(i)
                                );
                            if (i.indentation <= y && r.eat('>'))
                                return (
                                    (i.quote = m ? 1 : i.quote + 1),
                                    n.highlightFormatting &&
                                        (i.formatting = 'quote'),
                                    r.eatSpace(),
                                    w(i)
                                );
                            if (
                                !S &&
                                !i.setext &&
                                m &&
                                i.indentation <= y &&
                                (M = r.match(l))
                            ) {
                                var L = M[1] ? 'ol' : 'ul';
                                return (
                                    (i.indentation = C + r.current().length),
                                    (i.list = !0),
                                    (i.quote = 0),
                                    i.listStack.push(i.indentation),
                                    (i.em = !1),
                                    (i.strong = !1),
                                    (i.code = !1),
                                    (i.strikethrough = !1),
                                    n.taskLists &&
                                        r.match(c, !1) &&
                                        (i.taskList = !0),
                                    (i.f = i.inline),
                                    n.highlightFormatting &&
                                        (i.formatting = ['list', 'list-' + L]),
                                    w(i)
                                );
                            }
                            return m &&
                                i.indentation <= y &&
                                (M = r.match(f, !0))
                                ? ((i.quote = 0),
                                  (i.fencedEndRE = new RegExp(M[1] + '+ *$')),
                                  (i.localMode =
                                      n.fencedCodeBlockHighlighting &&
                                      (function(n) {
                                          if (e.findModeByName) {
                                              var r = e.findModeByName(n);
                                              r && (n = r.mime || r.mimes[0]);
                                          }
                                          var i = e.getMode(t, n);
                                          return 'null' == i.name ? null : i;
                                      })(M[2] || n.fencedCodeBlockDefaultMode)),
                                  i.localMode &&
                                      (i.localState = e.startState(
                                          i.localMode
                                      )),
                                  (i.f = i.block = k),
                                  n.highlightFormatting &&
                                      (i.formatting = 'code-block'),
                                  (i.code = -1),
                                  w(i))
                                : i.setext ||
                                  (!(
                                      (_ && x) ||
                                      i.quote ||
                                      !1 !== i.list ||
                                      i.code ||
                                      S ||
                                      p.test(r.string)
                                  ) &&
                                      (M = r.lookAhead(1)) &&
                                      (M = M.match(d)))
                                ? (i.setext
                                      ? ((i.header = i.setext),
                                        (i.setext = 0),
                                        r.skipToEnd(),
                                        n.highlightFormatting &&
                                            (i.formatting = 'header'))
                                      : ((i.header =
                                            '=' == M[0].charAt(0) ? 1 : 2),
                                        (i.setext = i.header)),
                                  (i.thisLine.header = !0),
                                  (i.f = i.inline),
                                  w(i))
                                : S
                                ? (r.skipToEnd(),
                                  (i.hr = !0),
                                  (i.thisLine.hr = !0),
                                  o.hr)
                                : '[' === r.peek()
                                ? g(r, i, T)
                                : g(r, i, i.inline);
                        }
                        function y(t, n) {
                            var o = r.token(t, n.htmlState);
                            if (!i) {
                                var a = e.innerMode(r, n.htmlState);
                                (('xml' == a.mode.name &&
                                    null === a.state.tagStart &&
                                    !a.state.context &&
                                    a.state.tokenize.isInText) ||
                                    (n.md_inside &&
                                        t.current().indexOf('>') > -1)) &&
                                    ((n.f = _),
                                    (n.block = x),
                                    (n.htmlState = null));
                            }
                            return o;
                        }
                        function k(e, t) {
                            var r,
                                i = t.listStack[t.listStack.length - 1] || 0,
                                a = t.indentation < i,
                                s = i + 3;
                            return t.fencedEndRE &&
                                t.indentation <= s &&
                                (a || e.match(t.fencedEndRE))
                                ? (n.highlightFormatting &&
                                      (t.formatting = 'code-block'),
                                  a || (r = w(t)),
                                  (t.localMode = t.localState = null),
                                  (t.block = x),
                                  (t.f = _),
                                  (t.fencedEndRE = null),
                                  (t.code = 0),
                                  (t.thisLine.fencedCodeEnd = !0),
                                  a ? b(e, t, t.block) : r)
                                : t.localMode
                                ? t.localMode.token(e, t.localState)
                                : (e.skipToEnd(), o.code);
                        }
                        function w(e) {
                            var t = [];
                            if (e.formatting) {
                                t.push(o.formatting),
                                    'string' == typeof e.formatting &&
                                        (e.formatting = [e.formatting]);
                                for (var r = 0; r < e.formatting.length; r++)
                                    t.push(
                                        o.formatting + '-' + e.formatting[r]
                                    ),
                                        'header' === e.formatting[r] &&
                                            t.push(
                                                o.formatting +
                                                    '-' +
                                                    e.formatting[r] +
                                                    '-' +
                                                    e.header
                                            ),
                                        'quote' === e.formatting[r] &&
                                            (!n.maxBlockquoteDepth ||
                                            n.maxBlockquoteDepth >= e.quote
                                                ? t.push(
                                                      o.formatting +
                                                          '-' +
                                                          e.formatting[r] +
                                                          '-' +
                                                          e.quote
                                                  )
                                                : t.push('error'));
                            }
                            if (e.taskOpen)
                                return (
                                    t.push('meta'),
                                    t.length ? t.join(' ') : null
                                );
                            if (e.taskClosed)
                                return (
                                    t.push('property'),
                                    t.length ? t.join(' ') : null
                                );
                            if (
                                (e.linkHref
                                    ? t.push(o.linkHref, 'url')
                                    : (e.strong && t.push(o.strong),
                                      e.em && t.push(o.em),
                                      e.strikethrough &&
                                          t.push(o.strikethrough),
                                      e.emoji && t.push(o.emoji),
                                      e.linkText && t.push(o.linkText),
                                      e.code && t.push(o.code),
                                      e.image && t.push(o.image),
                                      e.imageAltText &&
                                          t.push(o.imageAltText, 'link'),
                                      e.imageMarker && t.push(o.imageMarker)),
                                e.header &&
                                    t.push(o.header, o.header + '-' + e.header),
                                e.quote &&
                                    (t.push(o.quote),
                                    !n.maxBlockquoteDepth ||
                                    n.maxBlockquoteDepth >= e.quote
                                        ? t.push(o.quote + '-' + e.quote)
                                        : t.push(
                                              o.quote +
                                                  '-' +
                                                  n.maxBlockquoteDepth
                                          )),
                                !1 !== e.list)
                            ) {
                                var i = (e.listStack.length - 1) % 3;
                                i
                                    ? 1 === i
                                        ? t.push(o.list2)
                                        : t.push(o.list3)
                                    : t.push(o.list1);
                            }
                            return (
                                e.trailingSpaceNewLine
                                    ? t.push('trailing-space-new-line')
                                    : e.trailingSpace &&
                                      t.push(
                                          'trailing-space-' +
                                              (e.trailingSpace % 2 ? 'a' : 'b')
                                      ),
                                t.length ? t.join(' ') : null
                            );
                        }
                        function C(e, t) {
                            if (e.match(m, !0)) return w(t);
                        }
                        function _(t, i) {
                            var a = i.text(t, i);
                            if (void 0 !== a) return a;
                            if (i.list) return (i.list = null), w(i);
                            if (i.taskList)
                                return (
                                    ' ' === t.match(c, !0)[1]
                                        ? (i.taskOpen = !0)
                                        : (i.taskClosed = !0),
                                    n.highlightFormatting &&
                                        (i.formatting = 'task'),
                                    (i.taskList = !1),
                                    w(i)
                                );
                            if (
                                ((i.taskOpen = !1),
                                (i.taskClosed = !1),
                                i.header && t.match(/^#+$/, !0))
                            )
                                return (
                                    n.highlightFormatting &&
                                        (i.formatting = 'header'),
                                    w(i)
                                );
                            var s = t.next();
                            if (i.linkTitle) {
                                i.linkTitle = !1;
                                var l = s;
                                '(' === s && (l = ')');
                                var u =
                                    '^\\s*(?:[^' +
                                    (l = (l + '').replace(
                                        /([.?*+^\[\]\\(){}|-])/g,
                                        '\\$1'
                                    )) +
                                    '\\\\]+|\\\\\\\\|\\\\.)' +
                                    l;
                                if (t.match(new RegExp(u), !0))
                                    return o.linkHref;
                            }
                            if ('`' === s) {
                                var d = i.formatting;
                                n.highlightFormatting &&
                                    (i.formatting = 'code'),
                                    t.eatWhile('`');
                                var m = t.current().length;
                                if (0 != i.code || (i.quote && 1 != m)) {
                                    if (m == i.code) {
                                        var f = w(i);
                                        return (i.code = 0), f;
                                    }
                                    return (i.formatting = d), w(i);
                                }
                                return (i.code = m), w(i);
                            }
                            if (i.code) return w(i);
                            if (
                                '\\' === s &&
                                (t.next(), n.highlightFormatting)
                            ) {
                                var p = w(i),
                                    g = o.formatting + '-escape';
                                return p ? p + ' ' + g : g;
                            }
                            if (
                                '!' === s &&
                                t.match(/\[[^\]]*\] ?(?:\(|\[)/, !1)
                            )
                                return (
                                    (i.imageMarker = !0),
                                    (i.image = !0),
                                    n.highlightFormatting &&
                                        (i.formatting = 'image'),
                                    w(i)
                                );
                            if (
                                '[' === s &&
                                i.imageMarker &&
                                t.match(/[^\]]*\](\(.*?\)| ?\[.*?\])/, !1)
                            )
                                return (
                                    (i.imageMarker = !1),
                                    (i.imageAltText = !0),
                                    n.highlightFormatting &&
                                        (i.formatting = 'image'),
                                    w(i)
                                );
                            if (']' === s && i.imageAltText) {
                                n.highlightFormatting &&
                                    (i.formatting = 'image');
                                p = w(i);
                                return (
                                    (i.imageAltText = !1),
                                    (i.image = !1),
                                    (i.inline = i.f = M),
                                    p
                                );
                            }
                            if ('[' === s && !i.image)
                                return (
                                    (i.linkText && t.match(/^.*?\]/)) ||
                                        ((i.linkText = !0),
                                        n.highlightFormatting &&
                                            (i.formatting = 'link')),
                                    w(i)
                                );
                            if (']' === s && i.linkText) {
                                n.highlightFormatting &&
                                    (i.formatting = 'link');
                                p = w(i);
                                return (
                                    (i.linkText = !1),
                                    (i.inline = i.f = t.match(
                                        /\(.*?\)| ?\[.*?\]/,
                                        !1
                                    )
                                        ? M
                                        : _),
                                    p
                                );
                            }
                            if (
                                '<' === s &&
                                t.match(
                                    /^(https?|ftps?):\/\/(?:[^\\>]|\\.)+>/,
                                    !1
                                )
                            )
                                return (
                                    (i.f = i.inline = S),
                                    n.highlightFormatting &&
                                        (i.formatting = 'link'),
                                    (p = w(i)) ? (p += ' ') : (p = ''),
                                    p + o.linkInline
                                );
                            if (
                                '<' === s &&
                                t.match(/^[^> \\]+@(?:[^\\>]|\\.)+>/, !1)
                            )
                                return (
                                    (i.f = i.inline = S),
                                    n.highlightFormatting &&
                                        (i.formatting = 'link'),
                                    (p = w(i)) ? (p += ' ') : (p = ''),
                                    p + o.linkEmail
                                );
                            if (
                                n.xml &&
                                '<' === s &&
                                t.match(
                                    /^(!--|\?|!\[CDATA\[|[a-z][a-z0-9-]*(?:\s+[a-z_:.\-]+(?:\s*=\s*[^>]+)?)*\s*(?:>|$))/i,
                                    !1
                                )
                            ) {
                                var v = t.string.indexOf('>', t.pos);
                                if (-1 != v) {
                                    var x = t.string.substring(t.start, v);
                                    /markdown\s*=\s*('|"){0,1}1('|"){0,1}/.test(
                                        x
                                    ) && (i.md_inside = !0);
                                }
                                return (
                                    t.backUp(1),
                                    (i.htmlState = e.startState(r)),
                                    b(t, i, y)
                                );
                            }
                            if (n.xml && '<' === s && t.match(/^\/\w*?>/))
                                return (i.md_inside = !1), 'tag';
                            if ('*' === s || '_' === s) {
                                for (
                                    var k = 1,
                                        C =
                                            1 == t.pos
                                                ? ' '
                                                : t.string.charAt(t.pos - 2);
                                    k < 3 && t.eat(s);

                                )
                                    k++;
                                var L = t.peek() || ' ',
                                    T =
                                        !/\s/.test(L) &&
                                        (!h.test(L) ||
                                            /\s/.test(C) ||
                                            h.test(C)),
                                    F =
                                        !/\s/.test(C) &&
                                        (!h.test(C) ||
                                            /\s/.test(L) ||
                                            h.test(L)),
                                    E = null,
                                    A = null;
                                if (
                                    (k % 2 &&
                                        (i.em ||
                                        !T ||
                                        ('*' !== s && F && !h.test(C))
                                            ? i.em != s ||
                                              !F ||
                                              ('*' !== s && T && !h.test(L)) ||
                                              (E = !1)
                                            : (E = !0)),
                                    k > 1 &&
                                        (i.strong ||
                                        !T ||
                                        ('*' !== s && F && !h.test(C))
                                            ? i.strong != s ||
                                              !F ||
                                              ('*' !== s && T && !h.test(L)) ||
                                              (A = !1)
                                            : (A = !0)),
                                    null != A || null != E)
                                )
                                    return (
                                        n.highlightFormatting &&
                                            (i.formatting =
                                                null == E
                                                    ? 'strong'
                                                    : null == A
                                                    ? 'em'
                                                    : 'strong em'),
                                        !0 === E && (i.em = s),
                                        !0 === A && (i.strong = s),
                                        (f = w(i)),
                                        !1 === E && (i.em = !1),
                                        !1 === A && (i.strong = !1),
                                        f
                                    );
                            } else if (
                                ' ' === s &&
                                (t.eat('*') || t.eat('_'))
                            ) {
                                if (' ' === t.peek()) return w(i);
                                t.backUp(1);
                            }
                            if (n.strikethrough)
                                if ('~' === s && t.eatWhile(s)) {
                                    if (i.strikethrough)
                                        return (
                                            n.highlightFormatting &&
                                                (i.formatting =
                                                    'strikethrough'),
                                            (f = w(i)),
                                            (i.strikethrough = !1),
                                            f
                                        );
                                    if (t.match(/^[^\s]/, !1))
                                        return (
                                            (i.strikethrough = !0),
                                            n.highlightFormatting &&
                                                (i.formatting =
                                                    'strikethrough'),
                                            w(i)
                                        );
                                } else if (' ' === s && t.match('~~', !0)) {
                                    if (' ' === t.peek()) return w(i);
                                    t.backUp(2);
                                }
                            if (
                                n.emoji &&
                                ':' === s &&
                                t.match(
                                    /^(?:[a-z_\d+][a-z_\d+-]*|\-[a-z_\d+][a-z_\d+-]*):/
                                )
                            ) {
                                (i.emoji = !0),
                                    n.highlightFormatting &&
                                        (i.formatting = 'emoji');
                                var P = w(i);
                                return (i.emoji = !1), P;
                            }
                            return (
                                ' ' === s &&
                                    (t.match(/^ +$/, !1)
                                        ? i.trailingSpace++
                                        : i.trailingSpace &&
                                          (i.trailingSpaceNewLine = !0)),
                                w(i)
                            );
                        }
                        function S(e, t) {
                            if ('>' === e.next()) {
                                (t.f = t.inline = _),
                                    n.highlightFormatting &&
                                        (t.formatting = 'link');
                                var r = w(t);
                                return (
                                    r ? (r += ' ') : (r = ''), r + o.linkInline
                                );
                            }
                            return e.match(/^[^>]+/, !0), o.linkInline;
                        }
                        function M(e, t) {
                            if (e.eatSpace()) return null;
                            var r,
                                i = e.next();
                            return '(' === i || '[' === i
                                ? ((t.f = t.inline =
                                      ((r = '(' === i ? ')' : ']'),
                                      function(e, t) {
                                          if (e.next() === r) {
                                              (t.f = t.inline = _),
                                                  n.highlightFormatting &&
                                                      (t.formatting =
                                                          'link-string');
                                              var i = w(t);
                                              return (t.linkHref = !1), i;
                                          }
                                          return (
                                              e.match(L[r]),
                                              (t.linkHref = !0),
                                              w(t)
                                          );
                                      })),
                                  n.highlightFormatting &&
                                      (t.formatting = 'link-string'),
                                  (t.linkHref = !0),
                                  w(t))
                                : 'error';
                        }
                        var L = {
                            ')': /^(?:[^\\\(\)]|\\.|\((?:[^\\\(\)]|\\.)*\))*?(?=\))/,
                            ']': /^(?:[^\\\[\]]|\\.|\[(?:[^\\\[\]]|\\.)*\])*?(?=\])/,
                        };
                        function T(e, t) {
                            return e.match(/^([^\]\\]|\\.)*\]:/, !1)
                                ? ((t.f = F),
                                  e.next(),
                                  n.highlightFormatting &&
                                      (t.formatting = 'link'),
                                  (t.linkText = !0),
                                  w(t))
                                : g(e, t, _);
                        }
                        function F(e, t) {
                            if (e.match(']:', !0)) {
                                (t.f = t.inline = E),
                                    n.highlightFormatting &&
                                        (t.formatting = 'link');
                                var r = w(t);
                                return (t.linkText = !1), r;
                            }
                            return e.match(/^([^\]\\]|\\.)+/, !0), o.linkText;
                        }
                        function E(e, t) {
                            return e.eatSpace()
                                ? null
                                : (e.match(/^[^\s]+/, !0),
                                  void 0 === e.peek()
                                      ? (t.linkTitle = !0)
                                      : e.match(
                                            /^(?:\s+(?:"(?:[^"\\]|\\.)+"|'(?:[^'\\]|\\.)+'|\((?:[^)\\]|\\.)+\)))?/,
                                            !0
                                        ),
                                  (t.f = t.inline = _),
                                  o.linkHref + ' url');
                        }
                        var A = {
                            startState: function() {
                                return {
                                    f: x,
                                    prevLine: { stream: null },
                                    thisLine: { stream: null },
                                    block: x,
                                    htmlState: null,
                                    indentation: 0,
                                    inline: _,
                                    text: C,
                                    formatting: !1,
                                    linkText: !1,
                                    linkHref: !1,
                                    linkTitle: !1,
                                    code: 0,
                                    em: !1,
                                    strong: !1,
                                    header: 0,
                                    setext: 0,
                                    hr: !1,
                                    taskList: !1,
                                    list: !1,
                                    listStack: [],
                                    quote: 0,
                                    trailingSpace: 0,
                                    trailingSpaceNewLine: !1,
                                    strikethrough: !1,
                                    emoji: !1,
                                    fencedEndRE: null,
                                };
                            },
                            copyState: function(t) {
                                return {
                                    f: t.f,
                                    prevLine: t.prevLine,
                                    thisLine: t.thisLine,
                                    block: t.block,
                                    htmlState:
                                        t.htmlState &&
                                        e.copyState(r, t.htmlState),
                                    indentation: t.indentation,
                                    localMode: t.localMode,
                                    localState: t.localMode
                                        ? e.copyState(t.localMode, t.localState)
                                        : null,
                                    inline: t.inline,
                                    text: t.text,
                                    formatting: !1,
                                    linkText: t.linkText,
                                    linkTitle: t.linkTitle,
                                    linkHref: t.linkHref,
                                    code: t.code,
                                    em: t.em,
                                    strong: t.strong,
                                    strikethrough: t.strikethrough,
                                    emoji: t.emoji,
                                    header: t.header,
                                    setext: t.setext,
                                    hr: t.hr,
                                    taskList: t.taskList,
                                    list: t.list,
                                    listStack: t.listStack.slice(0),
                                    quote: t.quote,
                                    indentedCode: t.indentedCode,
                                    trailingSpace: t.trailingSpace,
                                    trailingSpaceNewLine:
                                        t.trailingSpaceNewLine,
                                    md_inside: t.md_inside,
                                    fencedEndRE: t.fencedEndRE,
                                };
                            },
                            token: function(e, t) {
                                if (
                                    ((t.formatting = !1),
                                    e != t.thisLine.stream)
                                ) {
                                    if (
                                        ((t.header = 0),
                                        (t.hr = !1),
                                        e.match(/^\s*$/, !0))
                                    )
                                        return v(t), null;
                                    if (
                                        ((t.prevLine = t.thisLine),
                                        (t.thisLine = { stream: e }),
                                        (t.taskList = !1),
                                        (t.trailingSpace = 0),
                                        (t.trailingSpaceNewLine = !1),
                                        !t.localState &&
                                            ((t.f = t.block), t.f != y))
                                    ) {
                                        var n = e
                                            .match(/^\s*/, !0)[0]
                                            .replace(/\t/g, '    ').length;
                                        if (
                                            ((t.indentation = n),
                                            (t.indentationDiff = null),
                                            n > 0)
                                        )
                                            return null;
                                    }
                                }
                                return t.f(e, t);
                            },
                            innerMode: function(e) {
                                return e.block == y
                                    ? { state: e.htmlState, mode: r }
                                    : e.localState
                                    ? { state: e.localState, mode: e.localMode }
                                    : { state: e, mode: A };
                            },
                            indent: function(t, n, i) {
                                return t.block == y && r.indent
                                    ? r.indent(t.htmlState, n, i)
                                    : t.localState && t.localMode.indent
                                    ? t.localMode.indent(t.localState, n, i)
                                    : e.Pass;
                            },
                            blankLine: v,
                            getType: w,
                            blockCommentStart: '\x3c!--',
                            blockCommentEnd: '--\x3e',
                            closeBrackets: '()[]{}\'\'""``',
                            fold: 'markdown',
                        };
                        return A;
                    },
                    'xml'
                ),
                    e.defineMIME('text/markdown', 'markdown'),
                    e.defineMIME('text/x-markdown', 'markdown');
            })(n(25747), n(89036), n(80505));
        },
        80505: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.modeInfo = [
                    {
                        name: 'APL',
                        mime: 'text/apl',
                        mode: 'apl',
                        ext: ['dyalog', 'apl'],
                    },
                    {
                        name: 'PGP',
                        mimes: [
                            'application/pgp',
                            'application/pgp-encrypted',
                            'application/pgp-keys',
                            'application/pgp-signature',
                        ],
                        mode: 'asciiarmor',
                        ext: ['asc', 'pgp', 'sig'],
                    },
                    {
                        name: 'ASN.1',
                        mime: 'text/x-ttcn-asn',
                        mode: 'asn.1',
                        ext: ['asn', 'asn1'],
                    },
                    {
                        name: 'Asterisk',
                        mime: 'text/x-asterisk',
                        mode: 'asterisk',
                        file: /^extensions\.conf$/i,
                    },
                    {
                        name: 'Brainfuck',
                        mime: 'text/x-brainfuck',
                        mode: 'brainfuck',
                        ext: ['b', 'bf'],
                    },
                    {
                        name: 'C',
                        mime: 'text/x-csrc',
                        mode: 'clike',
                        ext: ['c', 'h', 'ino'],
                    },
                    {
                        name: 'C++',
                        mime: 'text/x-c++src',
                        mode: 'clike',
                        ext: [
                            'cpp',
                            'c++',
                            'cc',
                            'cxx',
                            'hpp',
                            'h++',
                            'hh',
                            'hxx',
                        ],
                        alias: ['cpp'],
                    },
                    {
                        name: 'Cobol',
                        mime: 'text/x-cobol',
                        mode: 'cobol',
                        ext: ['cob', 'cpy'],
                    },
                    {
                        name: 'C#',
                        mime: 'text/x-csharp',
                        mode: 'clike',
                        ext: ['cs'],
                        alias: ['csharp', 'cs'],
                    },
                    {
                        name: 'Clojure',
                        mime: 'text/x-clojure',
                        mode: 'clojure',
                        ext: ['clj', 'cljc', 'cljx'],
                    },
                    {
                        name: 'ClojureScript',
                        mime: 'text/x-clojurescript',
                        mode: 'clojure',
                        ext: ['cljs'],
                    },
                    {
                        name: 'Closure Stylesheets (GSS)',
                        mime: 'text/x-gss',
                        mode: 'css',
                        ext: ['gss'],
                    },
                    {
                        name: 'CMake',
                        mime: 'text/x-cmake',
                        mode: 'cmake',
                        ext: ['cmake', 'cmake.in'],
                        file: /^CMakeLists\.txt$/,
                    },
                    {
                        name: 'CoffeeScript',
                        mimes: [
                            'application/vnd.coffeescript',
                            'text/coffeescript',
                            'text/x-coffeescript',
                        ],
                        mode: 'coffeescript',
                        ext: ['coffee'],
                        alias: ['coffee', 'coffee-script'],
                    },
                    {
                        name: 'Common Lisp',
                        mime: 'text/x-common-lisp',
                        mode: 'commonlisp',
                        ext: ['cl', 'lisp', 'el'],
                        alias: ['lisp'],
                    },
                    {
                        name: 'Cypher',
                        mime: 'application/x-cypher-query',
                        mode: 'cypher',
                        ext: ['cyp', 'cypher'],
                    },
                    {
                        name: 'Cython',
                        mime: 'text/x-cython',
                        mode: 'python',
                        ext: ['pyx', 'pxd', 'pxi'],
                    },
                    {
                        name: 'Crystal',
                        mime: 'text/x-crystal',
                        mode: 'crystal',
                        ext: ['cr'],
                    },
                    {
                        name: 'CSS',
                        mime: 'text/css',
                        mode: 'css',
                        ext: ['css'],
                    },
                    {
                        name: 'CQL',
                        mime: 'text/x-cassandra',
                        mode: 'sql',
                        ext: ['cql'],
                    },
                    { name: 'D', mime: 'text/x-d', mode: 'd', ext: ['d'] },
                    {
                        name: 'Dart',
                        mimes: ['application/dart', 'text/x-dart'],
                        mode: 'dart',
                        ext: ['dart'],
                    },
                    {
                        name: 'diff',
                        mime: 'text/x-diff',
                        mode: 'diff',
                        ext: ['diff', 'patch'],
                    },
                    { name: 'Django', mime: 'text/x-django', mode: 'django' },
                    {
                        name: 'Dockerfile',
                        mime: 'text/x-dockerfile',
                        mode: 'dockerfile',
                        file: /^Dockerfile$/,
                    },
                    {
                        name: 'DTD',
                        mime: 'application/xml-dtd',
                        mode: 'dtd',
                        ext: ['dtd'],
                    },
                    {
                        name: 'Dylan',
                        mime: 'text/x-dylan',
                        mode: 'dylan',
                        ext: ['dylan', 'dyl', 'intr'],
                    },
                    { name: 'EBNF', mime: 'text/x-ebnf', mode: 'ebnf' },
                    {
                        name: 'ECL',
                        mime: 'text/x-ecl',
                        mode: 'ecl',
                        ext: ['ecl'],
                    },
                    {
                        name: 'edn',
                        mime: 'application/edn',
                        mode: 'clojure',
                        ext: ['edn'],
                    },
                    {
                        name: 'Eiffel',
                        mime: 'text/x-eiffel',
                        mode: 'eiffel',
                        ext: ['e'],
                    },
                    {
                        name: 'Elm',
                        mime: 'text/x-elm',
                        mode: 'elm',
                        ext: ['elm'],
                    },
                    {
                        name: 'Embedded JavaScript',
                        mime: 'application/x-ejs',
                        mode: 'htmlembedded',
                        ext: ['ejs'],
                    },
                    {
                        name: 'Embedded Ruby',
                        mime: 'application/x-erb',
                        mode: 'htmlembedded',
                        ext: ['erb'],
                    },
                    {
                        name: 'Erlang',
                        mime: 'text/x-erlang',
                        mode: 'erlang',
                        ext: ['erl'],
                    },
                    { name: 'Esper', mime: 'text/x-esper', mode: 'sql' },
                    {
                        name: 'Factor',
                        mime: 'text/x-factor',
                        mode: 'factor',
                        ext: ['factor'],
                    },
                    { name: 'FCL', mime: 'text/x-fcl', mode: 'fcl' },
                    {
                        name: 'Forth',
                        mime: 'text/x-forth',
                        mode: 'forth',
                        ext: ['forth', 'fth', '4th'],
                    },
                    {
                        name: 'Fortran',
                        mime: 'text/x-fortran',
                        mode: 'fortran',
                        ext: ['f', 'for', 'f77', 'f90', 'f95'],
                    },
                    {
                        name: 'F#',
                        mime: 'text/x-fsharp',
                        mode: 'mllike',
                        ext: ['fs'],
                        alias: ['fsharp'],
                    },
                    {
                        name: 'Gas',
                        mime: 'text/x-gas',
                        mode: 'gas',
                        ext: ['s'],
                    },
                    {
                        name: 'Gherkin',
                        mime: 'text/x-feature',
                        mode: 'gherkin',
                        ext: ['feature'],
                    },
                    {
                        name: 'GitHub Flavored Markdown',
                        mime: 'text/x-gfm',
                        mode: 'gfm',
                        file: /^(readme|contributing|history)\.md$/i,
                    },
                    { name: 'Go', mime: 'text/x-go', mode: 'go', ext: ['go'] },
                    {
                        name: 'Groovy',
                        mime: 'text/x-groovy',
                        mode: 'groovy',
                        ext: ['groovy', 'gradle'],
                        file: /^Jenkinsfile$/,
                    },
                    {
                        name: 'HAML',
                        mime: 'text/x-haml',
                        mode: 'haml',
                        ext: ['haml'],
                    },
                    {
                        name: 'Haskell',
                        mime: 'text/x-haskell',
                        mode: 'haskell',
                        ext: ['hs'],
                    },
                    {
                        name: 'Haskell (Literate)',
                        mime: 'text/x-literate-haskell',
                        mode: 'haskell-literate',
                        ext: ['lhs'],
                    },
                    {
                        name: 'Haxe',
                        mime: 'text/x-haxe',
                        mode: 'haxe',
                        ext: ['hx'],
                    },
                    {
                        name: 'HXML',
                        mime: 'text/x-hxml',
                        mode: 'haxe',
                        ext: ['hxml'],
                    },
                    {
                        name: 'ASP.NET',
                        mime: 'application/x-aspx',
                        mode: 'htmlembedded',
                        ext: ['aspx'],
                        alias: ['asp', 'aspx'],
                    },
                    {
                        name: 'HTML',
                        mime: 'text/html',
                        mode: 'htmlmixed',
                        ext: ['html', 'htm', 'handlebars', 'hbs'],
                        alias: ['xhtml'],
                    },
                    { name: 'HTTP', mime: 'message/http', mode: 'http' },
                    {
                        name: 'IDL',
                        mime: 'text/x-idl',
                        mode: 'idl',
                        ext: ['pro'],
                    },
                    {
                        name: 'Pug',
                        mime: 'text/x-pug',
                        mode: 'pug',
                        ext: ['jade', 'pug'],
                        alias: ['jade'],
                    },
                    {
                        name: 'Java',
                        mime: 'text/x-java',
                        mode: 'clike',
                        ext: ['java'],
                    },
                    {
                        name: 'Java Server Pages',
                        mime: 'application/x-jsp',
                        mode: 'htmlembedded',
                        ext: ['jsp'],
                        alias: ['jsp'],
                    },
                    {
                        name: 'JavaScript',
                        mimes: [
                            'text/javascript',
                            'text/ecmascript',
                            'application/javascript',
                            'application/x-javascript',
                            'application/ecmascript',
                        ],
                        mode: 'javascript',
                        ext: ['js'],
                        alias: ['ecmascript', 'js', 'node'],
                    },
                    {
                        name: 'JSON',
                        mimes: ['application/json', 'application/x-json'],
                        mode: 'javascript',
                        ext: ['json', 'map'],
                        alias: ['json5'],
                    },
                    {
                        name: 'JSON-LD',
                        mime: 'application/ld+json',
                        mode: 'javascript',
                        ext: ['jsonld'],
                        alias: ['jsonld'],
                    },
                    {
                        name: 'JSX',
                        mime: 'text/jsx',
                        mode: 'jsx',
                        ext: ['jsx'],
                    },
                    {
                        name: 'Jinja2',
                        mime: 'text/jinja2',
                        mode: 'jinja2',
                        ext: ['j2', 'jinja', 'jinja2'],
                    },
                    {
                        name: 'Julia',
                        mime: 'text/x-julia',
                        mode: 'julia',
                        ext: ['jl'],
                        alias: ['jl'],
                    },
                    {
                        name: 'Kotlin',
                        mime: 'text/x-kotlin',
                        mode: 'clike',
                        ext: ['kt'],
                    },
                    {
                        name: 'LESS',
                        mime: 'text/x-less',
                        mode: 'css',
                        ext: ['less'],
                    },
                    {
                        name: 'LiveScript',
                        mime: 'text/x-livescript',
                        mode: 'livescript',
                        ext: ['ls'],
                        alias: ['ls'],
                    },
                    {
                        name: 'Lua',
                        mime: 'text/x-lua',
                        mode: 'lua',
                        ext: ['lua'],
                    },
                    {
                        name: 'Markdown',
                        mime: 'text/x-markdown',
                        mode: 'markdown',
                        ext: ['markdown', 'md', 'mkd'],
                    },
                    { name: 'mIRC', mime: 'text/mirc', mode: 'mirc' },
                    {
                        name: 'MariaDB SQL',
                        mime: 'text/x-mariadb',
                        mode: 'sql',
                    },
                    {
                        name: 'Mathematica',
                        mime: 'text/x-mathematica',
                        mode: 'mathematica',
                        ext: ['m', 'nb', 'wl', 'wls'],
                    },
                    {
                        name: 'Modelica',
                        mime: 'text/x-modelica',
                        mode: 'modelica',
                        ext: ['mo'],
                    },
                    {
                        name: 'MUMPS',
                        mime: 'text/x-mumps',
                        mode: 'mumps',
                        ext: ['mps'],
                    },
                    { name: 'MS SQL', mime: 'text/x-mssql', mode: 'sql' },
                    {
                        name: 'mbox',
                        mime: 'application/mbox',
                        mode: 'mbox',
                        ext: ['mbox'],
                    },
                    { name: 'MySQL', mime: 'text/x-mysql', mode: 'sql' },
                    {
                        name: 'Nginx',
                        mime: 'text/x-nginx-conf',
                        mode: 'nginx',
                        file: /nginx.*\.conf$/i,
                    },
                    {
                        name: 'NSIS',
                        mime: 'text/x-nsis',
                        mode: 'nsis',
                        ext: ['nsh', 'nsi'],
                    },
                    {
                        name: 'NTriples',
                        mimes: [
                            'application/n-triples',
                            'application/n-quads',
                            'text/n-triples',
                        ],
                        mode: 'ntriples',
                        ext: ['nt', 'nq'],
                    },
                    {
                        name: 'Objective-C',
                        mime: 'text/x-objectivec',
                        mode: 'clike',
                        ext: ['m'],
                        alias: ['objective-c', 'objc'],
                    },
                    {
                        name: 'Objective-C++',
                        mime: 'text/x-objectivec++',
                        mode: 'clike',
                        ext: ['mm'],
                        alias: ['objective-c++', 'objc++'],
                    },
                    {
                        name: 'OCaml',
                        mime: 'text/x-ocaml',
                        mode: 'mllike',
                        ext: ['ml', 'mli', 'mll', 'mly'],
                    },
                    {
                        name: 'Octave',
                        mime: 'text/x-octave',
                        mode: 'octave',
                        ext: ['m'],
                    },
                    { name: 'Oz', mime: 'text/x-oz', mode: 'oz', ext: ['oz'] },
                    {
                        name: 'Pascal',
                        mime: 'text/x-pascal',
                        mode: 'pascal',
                        ext: ['p', 'pas'],
                    },
                    {
                        name: 'PEG.js',
                        mime: 'null',
                        mode: 'pegjs',
                        ext: ['jsonld'],
                    },
                    {
                        name: 'Perl',
                        mime: 'text/x-perl',
                        mode: 'perl',
                        ext: ['pl', 'pm'],
                    },
                    {
                        name: 'PHP',
                        mimes: [
                            'text/x-php',
                            'application/x-httpd-php',
                            'application/x-httpd-php-open',
                        ],
                        mode: 'php',
                        ext: ['php', 'php3', 'php4', 'php5', 'php7', 'phtml'],
                    },
                    {
                        name: 'Pig',
                        mime: 'text/x-pig',
                        mode: 'pig',
                        ext: ['pig'],
                    },
                    {
                        name: 'Plain Text',
                        mime: 'text/plain',
                        mode: 'null',
                        ext: ['txt', 'text', 'conf', 'def', 'list', 'log'],
                    },
                    {
                        name: 'PLSQL',
                        mime: 'text/x-plsql',
                        mode: 'sql',
                        ext: ['pls'],
                    },
                    { name: 'PostgreSQL', mime: 'text/x-pgsql', mode: 'sql' },
                    {
                        name: 'PowerShell',
                        mime: 'application/x-powershell',
                        mode: 'powershell',
                        ext: ['ps1', 'psd1', 'psm1'],
                    },
                    {
                        name: 'Properties files',
                        mime: 'text/x-properties',
                        mode: 'properties',
                        ext: ['properties', 'ini', 'in'],
                        alias: ['ini', 'properties'],
                    },
                    {
                        name: 'ProtoBuf',
                        mime: 'text/x-protobuf',
                        mode: 'protobuf',
                        ext: ['proto'],
                    },
                    {
                        name: 'Python',
                        mime: 'text/x-python',
                        mode: 'python',
                        ext: ['BUILD', 'bzl', 'py', 'pyw'],
                        file: /^(BUCK|BUILD)$/,
                    },
                    {
                        name: 'Puppet',
                        mime: 'text/x-puppet',
                        mode: 'puppet',
                        ext: ['pp'],
                    },
                    { name: 'Q', mime: 'text/x-q', mode: 'q', ext: ['q'] },
                    {
                        name: 'R',
                        mime: 'text/x-rsrc',
                        mode: 'r',
                        ext: ['r', 'R'],
                        alias: ['rscript'],
                    },
                    {
                        name: 'reStructuredText',
                        mime: 'text/x-rst',
                        mode: 'rst',
                        ext: ['rst'],
                        alias: ['rst'],
                    },
                    {
                        name: 'RPM Changes',
                        mime: 'text/x-rpm-changes',
                        mode: 'rpm',
                    },
                    {
                        name: 'RPM Spec',
                        mime: 'text/x-rpm-spec',
                        mode: 'rpm',
                        ext: ['spec'],
                    },
                    {
                        name: 'Ruby',
                        mime: 'text/x-ruby',
                        mode: 'ruby',
                        ext: ['rb'],
                        alias: ['jruby', 'macruby', 'rake', 'rb', 'rbx'],
                    },
                    {
                        name: 'Rust',
                        mime: 'text/x-rustsrc',
                        mode: 'rust',
                        ext: ['rs'],
                    },
                    {
                        name: 'SAS',
                        mime: 'text/x-sas',
                        mode: 'sas',
                        ext: ['sas'],
                    },
                    {
                        name: 'Sass',
                        mime: 'text/x-sass',
                        mode: 'sass',
                        ext: ['sass'],
                    },
                    {
                        name: 'Scala',
                        mime: 'text/x-scala',
                        mode: 'clike',
                        ext: ['scala'],
                    },
                    {
                        name: 'Scheme',
                        mime: 'text/x-scheme',
                        mode: 'scheme',
                        ext: ['scm', 'ss'],
                    },
                    {
                        name: 'SCSS',
                        mime: 'text/x-scss',
                        mode: 'css',
                        ext: ['scss'],
                    },
                    {
                        name: 'Shell',
                        mimes: ['text/x-sh', 'application/x-sh'],
                        mode: 'shell',
                        ext: ['sh', 'ksh', 'bash'],
                        alias: ['bash', 'sh', 'zsh'],
                        file: /^PKGBUILD$/,
                    },
                    {
                        name: 'Sieve',
                        mime: 'application/sieve',
                        mode: 'sieve',
                        ext: ['siv', 'sieve'],
                    },
                    {
                        name: 'Slim',
                        mimes: ['text/x-slim', 'application/x-slim'],
                        mode: 'slim',
                        ext: ['slim'],
                    },
                    {
                        name: 'Smalltalk',
                        mime: 'text/x-stsrc',
                        mode: 'smalltalk',
                        ext: ['st'],
                    },
                    {
                        name: 'Smarty',
                        mime: 'text/x-smarty',
                        mode: 'smarty',
                        ext: ['tpl'],
                    },
                    { name: 'Solr', mime: 'text/x-solr', mode: 'solr' },
                    {
                        name: 'SML',
                        mime: 'text/x-sml',
                        mode: 'mllike',
                        ext: ['sml', 'sig', 'fun', 'smackspec'],
                    },
                    {
                        name: 'Soy',
                        mime: 'text/x-soy',
                        mode: 'soy',
                        ext: ['soy'],
                        alias: ['closure template'],
                    },
                    {
                        name: 'SPARQL',
                        mime: 'application/sparql-query',
                        mode: 'sparql',
                        ext: ['rq', 'sparql'],
                        alias: ['sparul'],
                    },
                    {
                        name: 'Spreadsheet',
                        mime: 'text/x-spreadsheet',
                        mode: 'spreadsheet',
                        alias: ['excel', 'formula'],
                    },
                    {
                        name: 'SQL',
                        mime: 'text/x-sql',
                        mode: 'sql',
                        ext: ['sql'],
                    },
                    { name: 'SQLite', mime: 'text/x-sqlite', mode: 'sql' },
                    {
                        name: 'Squirrel',
                        mime: 'text/x-squirrel',
                        mode: 'clike',
                        ext: ['nut'],
                    },
                    {
                        name: 'Stylus',
                        mime: 'text/x-styl',
                        mode: 'stylus',
                        ext: ['styl'],
                    },
                    {
                        name: 'Swift',
                        mime: 'text/x-swift',
                        mode: 'swift',
                        ext: ['swift'],
                    },
                    { name: 'sTeX', mime: 'text/x-stex', mode: 'stex' },
                    {
                        name: 'LaTeX',
                        mime: 'text/x-latex',
                        mode: 'stex',
                        ext: ['text', 'ltx', 'tex'],
                        alias: ['tex'],
                    },
                    {
                        name: 'SystemVerilog',
                        mime: 'text/x-systemverilog',
                        mode: 'verilog',
                        ext: ['v', 'sv', 'svh'],
                    },
                    {
                        name: 'Tcl',
                        mime: 'text/x-tcl',
                        mode: 'tcl',
                        ext: ['tcl'],
                    },
                    {
                        name: 'Textile',
                        mime: 'text/x-textile',
                        mode: 'textile',
                        ext: ['textile'],
                    },
                    {
                        name: 'TiddlyWiki',
                        mime: 'text/x-tiddlywiki',
                        mode: 'tiddlywiki',
                    },
                    { name: 'Tiki wiki', mime: 'text/tiki', mode: 'tiki' },
                    {
                        name: 'TOML',
                        mime: 'text/x-toml',
                        mode: 'toml',
                        ext: ['toml'],
                    },
                    {
                        name: 'Tornado',
                        mime: 'text/x-tornado',
                        mode: 'tornado',
                    },
                    {
                        name: 'troff',
                        mime: 'text/troff',
                        mode: 'troff',
                        ext: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
                    },
                    {
                        name: 'TTCN',
                        mime: 'text/x-ttcn',
                        mode: 'ttcn',
                        ext: ['ttcn', 'ttcn3', 'ttcnpp'],
                    },
                    {
                        name: 'TTCN_CFG',
                        mime: 'text/x-ttcn-cfg',
                        mode: 'ttcn-cfg',
                        ext: ['cfg'],
                    },
                    {
                        name: 'Turtle',
                        mime: 'text/turtle',
                        mode: 'turtle',
                        ext: ['ttl'],
                    },
                    {
                        name: 'TypeScript',
                        mime: 'application/typescript',
                        mode: 'javascript',
                        ext: ['ts'],
                        alias: ['ts'],
                    },
                    {
                        name: 'TypeScript-JSX',
                        mime: 'text/typescript-jsx',
                        mode: 'jsx',
                        ext: ['tsx'],
                        alias: ['tsx'],
                    },
                    { name: 'Twig', mime: 'text/x-twig', mode: 'twig' },
                    {
                        name: 'Web IDL',
                        mime: 'text/x-webidl',
                        mode: 'webidl',
                        ext: ['webidl'],
                    },
                    {
                        name: 'VB.NET',
                        mime: 'text/x-vb',
                        mode: 'vb',
                        ext: ['vb'],
                    },
                    {
                        name: 'VBScript',
                        mime: 'text/vbscript',
                        mode: 'vbscript',
                        ext: ['vbs'],
                    },
                    {
                        name: 'Velocity',
                        mime: 'text/velocity',
                        mode: 'velocity',
                        ext: ['vtl'],
                    },
                    {
                        name: 'Verilog',
                        mime: 'text/x-verilog',
                        mode: 'verilog',
                        ext: ['v'],
                    },
                    {
                        name: 'VHDL',
                        mime: 'text/x-vhdl',
                        mode: 'vhdl',
                        ext: ['vhd', 'vhdl'],
                    },
                    {
                        name: 'Vue.js Component',
                        mimes: ['script/x-vue', 'text/x-vue'],
                        mode: 'vue',
                        ext: ['vue'],
                    },
                    {
                        name: 'XML',
                        mimes: ['application/xml', 'text/xml'],
                        mode: 'xml',
                        ext: ['xml', 'xsl', 'xsd', 'svg'],
                        alias: ['rss', 'wsdl', 'xsd'],
                    },
                    {
                        name: 'XQuery',
                        mime: 'application/xquery',
                        mode: 'xquery',
                        ext: ['xy', 'xquery'],
                    },
                    {
                        name: 'Yacas',
                        mime: 'text/x-yacas',
                        mode: 'yacas',
                        ext: ['ys'],
                    },
                    {
                        name: 'YAML',
                        mimes: ['text/x-yaml', 'text/yaml'],
                        mode: 'yaml',
                        ext: ['yaml', 'yml'],
                        alias: ['yml'],
                    },
                    {
                        name: 'Z80',
                        mime: 'text/x-z80',
                        mode: 'z80',
                        ext: ['z80'],
                    },
                    {
                        name: 'mscgen',
                        mime: 'text/x-mscgen',
                        mode: 'mscgen',
                        ext: ['mscgen', 'mscin', 'msc'],
                    },
                    {
                        name: 'xu',
                        mime: 'text/x-xu',
                        mode: 'mscgen',
                        ext: ['xu'],
                    },
                    {
                        name: 'msgenny',
                        mime: 'text/x-msgenny',
                        mode: 'mscgen',
                        ext: ['msgenny'],
                    },
                    {
                        name: 'WebAssembly',
                        mime: 'text/webassembly',
                        mode: 'wast',
                        ext: ['wat', 'wast'],
                    },
                ];
                for (var t = 0; t < e.modeInfo.length; t++) {
                    var n = e.modeInfo[t];
                    n.mimes && (n.mime = n.mimes[0]);
                }
                (e.findModeByMIME = function(t) {
                    t = t.toLowerCase();
                    for (var n = 0; n < e.modeInfo.length; n++) {
                        var r = e.modeInfo[n];
                        if (r.mime == t) return r;
                        if (r.mimes)
                            for (var i = 0; i < r.mimes.length; i++)
                                if (r.mimes[i] == t) return r;
                    }
                    return /\+xml$/.test(t)
                        ? e.findModeByMIME('application/xml')
                        : /\+json$/.test(t)
                        ? e.findModeByMIME('application/json')
                        : void 0;
                }),
                    (e.findModeByExtension = function(t) {
                        t = t.toLowerCase();
                        for (var n = 0; n < e.modeInfo.length; n++) {
                            var r = e.modeInfo[n];
                            if (r.ext)
                                for (var i = 0; i < r.ext.length; i++)
                                    if (r.ext[i] == t) return r;
                        }
                    }),
                    (e.findModeByFileName = function(t) {
                        for (var n = 0; n < e.modeInfo.length; n++) {
                            var r = e.modeInfo[n];
                            if (r.file && r.file.test(t)) return r;
                        }
                        var i = t.lastIndexOf('.'),
                            o = i > -1 && t.substring(i + 1, t.length);
                        if (o) return e.findModeByExtension(o);
                    }),
                    (e.findModeByName = function(t) {
                        t = t.toLowerCase();
                        for (var n = 0; n < e.modeInfo.length; n++) {
                            var r = e.modeInfo[n];
                            if (r.name.toLowerCase() == t) return r;
                            if (r.alias)
                                for (var i = 0; i < r.alias.length; i++)
                                    if (r.alias[i].toLowerCase() == t) return r;
                        }
                    });
            })(n(25747));
        },
        43454: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e) {
                    return new RegExp('^((' + e.join(')|(') + '))\\b');
                }
                var n = t(['and', 'or', 'not', 'is']),
                    r = [
                        'as',
                        'assert',
                        'break',
                        'class',
                        'continue',
                        'def',
                        'del',
                        'elif',
                        'else',
                        'except',
                        'finally',
                        'for',
                        'from',
                        'global',
                        'if',
                        'import',
                        'lambda',
                        'pass',
                        'raise',
                        'return',
                        'try',
                        'while',
                        'with',
                        'yield',
                        'in',
                    ],
                    i = [
                        'abs',
                        'all',
                        'any',
                        'bin',
                        'bool',
                        'bytearray',
                        'callable',
                        'chr',
                        'classmethod',
                        'compile',
                        'complex',
                        'delattr',
                        'dict',
                        'dir',
                        'divmod',
                        'enumerate',
                        'eval',
                        'filter',
                        'float',
                        'format',
                        'frozenset',
                        'getattr',
                        'globals',
                        'hasattr',
                        'hash',
                        'help',
                        'hex',
                        'id',
                        'input',
                        'int',
                        'isinstance',
                        'issubclass',
                        'iter',
                        'len',
                        'list',
                        'locals',
                        'map',
                        'max',
                        'memoryview',
                        'min',
                        'next',
                        'object',
                        'oct',
                        'open',
                        'ord',
                        'pow',
                        'property',
                        'range',
                        'repr',
                        'reversed',
                        'round',
                        'set',
                        'setattr',
                        'slice',
                        'sorted',
                        'staticmethod',
                        'str',
                        'sum',
                        'super',
                        'tuple',
                        'type',
                        'vars',
                        'zip',
                        '__import__',
                        'NotImplemented',
                        'Ellipsis',
                        '__debug__',
                    ];
                function o(e) {
                    return e.scopes[e.scopes.length - 1];
                }
                e.registerHelper('hintWords', 'python', r.concat(i)),
                    e.defineMode('python', function(a, s) {
                        for (
                            var l = 'error',
                                c =
                                    s.delimiters ||
                                    s.singleDelimiters ||
                                    /^[\(\)\[\]\{\}@,:`=;\.\\]/,
                                u = [
                                    s.singleOperators,
                                    s.doubleOperators,
                                    s.doubleDelimiters,
                                    s.tripleDelimiters,
                                    s.operators ||
                                        /^([-+*/%\/&|^]=?|[<>=]+|\/\/=?|\*\*=?|!=|[~!@]|\.\.\.)/,
                                ],
                                d = 0;
                            d < u.length;
                            d++
                        )
                            u[d] || u.splice(d--, 1);
                        var m = s.hangingIndent || a.indentUnit,
                            f = r,
                            p = i;
                        null != s.extra_keywords &&
                            (f = f.concat(s.extra_keywords)),
                            null != s.extra_builtins &&
                                (p = p.concat(s.extra_builtins));
                        var h = !(s.version && Number(s.version) < 3);
                        if (h) {
                            var g =
                                s.identifiers ||
                                /^[_A-Za-z\u00A1-\uFFFF][_A-Za-z0-9\u00A1-\uFFFF]*/;
                            (f = f.concat([
                                'nonlocal',
                                'False',
                                'True',
                                'None',
                                'async',
                                'await',
                            ])),
                                (p = p.concat([
                                    'ascii',
                                    'bytes',
                                    'exec',
                                    'print',
                                ]));
                            var b = new RegExp(
                                '^(([rbuf]|(br)|(fr))?(\'{3}|"{3}|[\'"]))',
                                'i'
                            );
                        } else (g = s.identifiers || /^[_A-Za-z][_A-Za-z0-9]*/), (f = f.concat(['exec', 'print'])), (p = p.concat(['apply', 'basestring', 'buffer', 'cmp', 'coerce', 'execfile', 'file', 'intern', 'long', 'raw_input', 'reduce', 'reload', 'unichr', 'unicode', 'xrange', 'False', 'True', 'None'])), (b = new RegExp('^(([rubf]|(ur)|(br))?(\'{3}|"{3}|[\'"]))', 'i'));
                        var v = t(f),
                            x = t(p);
                        function y(e, t) {
                            var n = e.sol() && '\\' != t.lastToken;
                            if (
                                (n && (t.indent = e.indentation()),
                                n && 'py' == o(t).type)
                            ) {
                                var r = o(t).offset;
                                if (e.eatSpace()) {
                                    var i = e.indentation();
                                    return (
                                        i > r
                                            ? w(t)
                                            : i < r &&
                                              C(e, t) &&
                                              '#' != e.peek() &&
                                              (t.errorToken = !0),
                                        null
                                    );
                                }
                                var a = k(e, t);
                                return r > 0 && C(e, t) && (a += ' ' + l), a;
                            }
                            return k(e, t);
                        }
                        function k(e, t, r) {
                            if (e.eatSpace()) return null;
                            if (!r && e.match(/^#.*/)) return 'comment';
                            if (e.match(/^[0-9\.]/, !1)) {
                                var i = !1;
                                if (
                                    (e.match(/^[\d_]*\.\d+(e[\+\-]?\d+)?/i) &&
                                        (i = !0),
                                    e.match(/^[\d_]+\.\d*/) && (i = !0),
                                    e.match(/^\.\d+/) && (i = !0),
                                    i)
                                )
                                    return e.eat(/J/i), 'number';
                                var o = !1;
                                if (
                                    (e.match(/^0x[0-9a-f_]+/i) && (o = !0),
                                    e.match(/^0b[01_]+/i) && (o = !0),
                                    e.match(/^0o[0-7_]+/i) && (o = !0),
                                    e.match(/^[1-9][\d_]*(e[\+\-]?[\d_]+)?/) &&
                                        (e.eat(/J/i), (o = !0)),
                                    e.match(/^0(?![\dx])/i) && (o = !0),
                                    o)
                                )
                                    return e.eat(/L/i), 'number';
                            }
                            if (e.match(b))
                                return -1 !==
                                    e
                                        .current()
                                        .toLowerCase()
                                        .indexOf('f')
                                    ? ((t.tokenize = (function(e, t) {
                                          for (
                                              ;
                                              'rubf'.indexOf(
                                                  e.charAt(0).toLowerCase()
                                              ) >= 0;

                                          )
                                              e = e.substr(1);
                                          var n = 1 == e.length,
                                              r = 'string';
                                          function i(e) {
                                              return function(t, n) {
                                                  var r = k(t, n, !0);
                                                  return (
                                                      'punctuation' == r &&
                                                          ('{' == t.current()
                                                              ? (n.tokenize = i(
                                                                    e + 1
                                                                ))
                                                              : '}' ==
                                                                    t.current() &&
                                                                (n.tokenize =
                                                                    e > 1
                                                                        ? i(
                                                                              e -
                                                                                  1
                                                                          )
                                                                        : o)),
                                                      r
                                                  );
                                              };
                                          }
                                          function o(o, a) {
                                              for (; !o.eol(); )
                                                  if (
                                                      (o.eatWhile(
                                                          /[^'"\{\}\\]/
                                                      ),
                                                      o.eat('\\'))
                                                  ) {
                                                      if (
                                                          (o.next(),
                                                          n && o.eol())
                                                      )
                                                          return r;
                                                  } else {
                                                      if (o.match(e))
                                                          return (
                                                              (a.tokenize = t),
                                                              r
                                                          );
                                                      if (o.match('{{'))
                                                          return r;
                                                      if (o.match('{', !1))
                                                          return (
                                                              (a.tokenize = i(
                                                                  0
                                                              )),
                                                              o.current()
                                                                  ? r
                                                                  : a.tokenize(
                                                                        o,
                                                                        a
                                                                    )
                                                          );
                                                      if (o.match('}}'))
                                                          return r;
                                                      if (o.match('}'))
                                                          return l;
                                                      o.eat(/['"]/);
                                                  }
                                              if (n) {
                                                  if (s.singleLineStringErrors)
                                                      return l;
                                                  a.tokenize = t;
                                              }
                                              return r;
                                          }
                                          return (o.isString = !0), o;
                                      })(e.current(), t.tokenize)),
                                      t.tokenize(e, t))
                                    : ((t.tokenize = (function(e, t) {
                                          for (
                                              ;
                                              'rubf'.indexOf(
                                                  e.charAt(0).toLowerCase()
                                              ) >= 0;

                                          )
                                              e = e.substr(1);
                                          var n = 1 == e.length,
                                              r = 'string';
                                          function i(i, o) {
                                              for (; !i.eol(); )
                                                  if (
                                                      (i.eatWhile(/[^'"\\]/),
                                                      i.eat('\\'))
                                                  ) {
                                                      if (
                                                          (i.next(),
                                                          n && i.eol())
                                                      )
                                                          return r;
                                                  } else {
                                                      if (i.match(e))
                                                          return (
                                                              (o.tokenize = t),
                                                              r
                                                          );
                                                      i.eat(/['"]/);
                                                  }
                                              if (n) {
                                                  if (s.singleLineStringErrors)
                                                      return l;
                                                  o.tokenize = t;
                                              }
                                              return r;
                                          }
                                          return (i.isString = !0), i;
                                      })(e.current(), t.tokenize)),
                                      t.tokenize(e, t));
                            for (var a = 0; a < u.length; a++)
                                if (e.match(u[a])) return 'operator';
                            return e.match(c)
                                ? 'punctuation'
                                : '.' == t.lastToken && e.match(g)
                                ? 'property'
                                : e.match(v) || e.match(n)
                                ? 'keyword'
                                : e.match(x)
                                ? 'builtin'
                                : e.match(/^(self|cls)\b/)
                                ? 'variable-2'
                                : e.match(g)
                                ? 'def' == t.lastToken || 'class' == t.lastToken
                                    ? 'def'
                                    : 'variable'
                                : (e.next(), r ? null : l);
                        }
                        function w(e) {
                            for (; 'py' != o(e).type; ) e.scopes.pop();
                            e.scopes.push({
                                offset: o(e).offset + a.indentUnit,
                                type: 'py',
                                align: null,
                            });
                        }
                        function C(e, t) {
                            for (
                                var n = e.indentation();
                                t.scopes.length > 1 && o(t).offset > n;

                            ) {
                                if ('py' != o(t).type) return !0;
                                t.scopes.pop();
                            }
                            return o(t).offset != n;
                        }
                        function _(e, t) {
                            e.sol() && (t.beginningOfLine = !0);
                            var n = t.tokenize(e, t),
                                r = e.current();
                            if (t.beginningOfLine && '@' == r)
                                return e.match(g, !1)
                                    ? 'meta'
                                    : h
                                    ? 'operator'
                                    : l;
                            if (
                                (/\S/.test(r) && (t.beginningOfLine = !1),
                                ('variable' != n && 'builtin' != n) ||
                                    'meta' != t.lastToken ||
                                    (n = 'meta'),
                                ('pass' != r && 'return' != r) ||
                                    (t.dedent += 1),
                                'lambda' == r && (t.lambda = !0),
                                ':' == r &&
                                    !t.lambda &&
                                    'py' == o(t).type &&
                                    e.match(/^\s*(?:#|$)/, !1) &&
                                    w(t),
                                1 == r.length && !/string|comment/.test(n))
                            ) {
                                var i = '[({'.indexOf(r);
                                if (
                                    (-1 != i &&
                                        (function(e, t, n) {
                                            var r = e.match(
                                                /^[\s\[\{\(]*(?:#|$)/,
                                                !1
                                            )
                                                ? null
                                                : e.column() + 1;
                                            t.scopes.push({
                                                offset: t.indent + m,
                                                type: n,
                                                align: r,
                                            });
                                        })(e, t, '])}'.slice(i, i + 1)),
                                    -1 != (i = '])}'.indexOf(r)))
                                ) {
                                    if (o(t).type != r) return l;
                                    t.indent = t.scopes.pop().offset - m;
                                }
                            }
                            return (
                                t.dedent > 0 &&
                                    e.eol() &&
                                    'py' == o(t).type &&
                                    (t.scopes.length > 1 && t.scopes.pop(),
                                    (t.dedent -= 1)),
                                n
                            );
                        }
                        return {
                            startState: function(e) {
                                return {
                                    tokenize: y,
                                    scopes: [
                                        {
                                            offset: e || 0,
                                            type: 'py',
                                            align: null,
                                        },
                                    ],
                                    indent: e || 0,
                                    lastToken: null,
                                    lambda: !1,
                                    dedent: 0,
                                };
                            },
                            token: function(e, t) {
                                var n = t.errorToken;
                                n && (t.errorToken = !1);
                                var r = _(e, t);
                                return (
                                    r &&
                                        'comment' != r &&
                                        (t.lastToken =
                                            'keyword' == r || 'punctuation' == r
                                                ? e.current()
                                                : r),
                                    'punctuation' == r && (r = null),
                                    e.eol() && t.lambda && (t.lambda = !1),
                                    n ? r + ' ' + l : r
                                );
                            },
                            indent: function(t, n) {
                                if (t.tokenize != y)
                                    return t.tokenize.isString ? e.Pass : 0;
                                var r = o(t),
                                    i = r.type == n.charAt(0);
                                return null != r.align
                                    ? r.align - (i ? 1 : 0)
                                    : r.offset - (i ? m : 0);
                            },
                            electricInput: /^\s*[\}\]\)]$/,
                            closeBrackets: { triples: '\'"' },
                            lineComment: '#',
                            fold: 'indent',
                        };
                    }),
                    e.defineMIME('text/x-python', 'python');
                var a;
                e.defineMIME('text/x-cython', {
                    name: 'python',
                    extra_keywords:
                        ((a =
                            'by cdef cimport cpdef ctypedef enum except extern gil include nogil property public readonly struct union DEF IF ELIF ELSE'),
                        a.split(' ')),
                });
            })(n(25747));
        },
        52517: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.registerHelper('wordChars', 'r', /[\w.]/),
                    e.defineMode('r', function(t) {
                        function n(e) {
                            for (var t = {}, n = 0; n < e.length; ++n)
                                t[e[n]] = !0;
                            return t;
                        }
                        var r = [
                                'NULL',
                                'NA',
                                'Inf',
                                'NaN',
                                'NA_integer_',
                                'NA_real_',
                                'NA_complex_',
                                'NA_character_',
                                'TRUE',
                                'FALSE',
                            ],
                            i = [
                                'list',
                                'quote',
                                'bquote',
                                'eval',
                                'return',
                                'call',
                                'parse',
                                'deparse',
                            ],
                            o = [
                                'if',
                                'else',
                                'repeat',
                                'while',
                                'function',
                                'for',
                                'in',
                                'next',
                                'break',
                            ];
                        e.registerHelper('hintWords', 'r', r.concat(i, o));
                        var a,
                            s = n(r),
                            l = n(i),
                            c = n(o),
                            u = n([
                                'if',
                                'else',
                                'repeat',
                                'while',
                                'function',
                                'for',
                            ]),
                            d = /[+\-*\/^<>=!&|~$:]/;
                        function m(e, t) {
                            a = null;
                            var n,
                                r = e.next();
                            if ('#' == r) return e.skipToEnd(), 'comment';
                            if ('0' == r && e.eat('x'))
                                return e.eatWhile(/[\da-f]/i), 'number';
                            if ('.' == r && e.eat(/\d/))
                                return e.match(/\d*(?:e[+\-]?\d+)?/), 'number';
                            if (/\d/.test(r))
                                return (
                                    e.match(/\d*(?:\.\d+)?(?:e[+\-]\d+)?L?/),
                                    'number'
                                );
                            if ("'" == r || '"' == r)
                                return (
                                    (t.tokenize =
                                        ((n = r),
                                        function(e, t) {
                                            if (e.eat('\\')) {
                                                var r = e.next();
                                                return (
                                                    'x' == r
                                                        ? e.match(
                                                              /^[a-f0-9]{2}/i
                                                          )
                                                        : ('u' == r ||
                                                              'U' == r) &&
                                                          e.eat('{') &&
                                                          e.skipTo('}')
                                                        ? e.next()
                                                        : 'u' == r
                                                        ? e.match(
                                                              /^[a-f0-9]{4}/i
                                                          )
                                                        : 'U' == r
                                                        ? e.match(
                                                              /^[a-f0-9]{8}/i
                                                          )
                                                        : /[0-7]/.test(r) &&
                                                          e.match(
                                                              /^[0-7]{1,2}/
                                                          ),
                                                    'string-2'
                                                );
                                            }
                                            for (
                                                var i;
                                                null != (i = e.next());

                                            ) {
                                                if (i == n) {
                                                    t.tokenize = m;
                                                    break;
                                                }
                                                if ('\\' == i) {
                                                    e.backUp(1);
                                                    break;
                                                }
                                            }
                                            return 'string';
                                        })),
                                    'string'
                                );
                            if ('`' == r)
                                return e.match(/[^`]+`/), 'variable-3';
                            if ('.' == r && e.match(/.(?:[.]|\d+)/))
                                return 'keyword';
                            if (/[a-zA-Z\.]/.test(r)) {
                                e.eatWhile(/[\w\.]/);
                                var i = e.current();
                                return s.propertyIsEnumerable(i)
                                    ? 'atom'
                                    : c.propertyIsEnumerable(i)
                                    ? (u.propertyIsEnumerable(i) &&
                                          !e.match(/\s*if(\s+|$)/, !1) &&
                                          (a = 'block'),
                                      'keyword')
                                    : l.propertyIsEnumerable(i)
                                    ? 'builtin'
                                    : 'variable';
                            }
                            return '%' == r
                                ? (e.skipTo('%') && e.next(),
                                  'operator variable-2')
                                : ('<' == r && e.eat('-')) ||
                                  ('<' == r && e.match('<-')) ||
                                  ('-' == r && e.match(/>>?/))
                                ? 'operator arrow'
                                : '=' == r && t.ctx.argList
                                ? 'arg-is'
                                : d.test(r)
                                ? '$' == r
                                    ? 'operator dollar'
                                    : (e.eatWhile(d), 'operator')
                                : /[\(\){}\[\];]/.test(r)
                                ? ((a = r), ';' == r ? 'semi' : null)
                                : null;
                        }
                        function f(e, t, n) {
                            e.ctx = {
                                type: t,
                                indent: e.indent,
                                flags: 0,
                                column: n.column(),
                                prev: e.ctx,
                            };
                        }
                        function p(e, t) {
                            var n = e.ctx;
                            e.ctx = {
                                type: n.type,
                                indent: n.indent,
                                flags: n.flags | t,
                                column: n.column,
                                prev: n.prev,
                            };
                        }
                        function h(e) {
                            (e.indent = e.ctx.indent), (e.ctx = e.ctx.prev);
                        }
                        return {
                            startState: function() {
                                return {
                                    tokenize: m,
                                    ctx: {
                                        type: 'top',
                                        indent: -t.indentUnit,
                                        flags: 2,
                                    },
                                    indent: 0,
                                    afterIdent: !1,
                                };
                            },
                            token: function(e, t) {
                                if (
                                    (e.sol() &&
                                        (0 == (3 & t.ctx.flags) &&
                                            (t.ctx.flags |= 2),
                                        4 & t.ctx.flags && h(t),
                                        (t.indent = e.indentation())),
                                    e.eatSpace())
                                )
                                    return null;
                                var n = t.tokenize(e, t);
                                return (
                                    'comment' != n &&
                                        0 == (2 & t.ctx.flags) &&
                                        p(t, 1),
                                    (';' != a && '{' != a && '}' != a) ||
                                        'block' != t.ctx.type ||
                                        h(t),
                                    '{' == a
                                        ? f(t, '}', e)
                                        : '(' == a
                                        ? (f(t, ')', e),
                                          t.afterIdent && (t.ctx.argList = !0))
                                        : '[' == a
                                        ? f(t, ']', e)
                                        : 'block' == a
                                        ? f(t, 'block', e)
                                        : a == t.ctx.type
                                        ? h(t)
                                        : 'block' == t.ctx.type &&
                                          'comment' != n &&
                                          p(t, 4),
                                    (t.afterIdent =
                                        'variable' == n || 'keyword' == n),
                                    n
                                );
                            },
                            indent: function(e, n) {
                                if (e.tokenize != m) return 0;
                                var r = n && n.charAt(0),
                                    i = e.ctx,
                                    o = r == i.type;
                                return (
                                    4 & i.flags && (i = i.prev),
                                    'block' == i.type
                                        ? i.indent +
                                          ('{' == r ? 0 : t.indentUnit)
                                        : 1 & i.flags
                                        ? i.column + (o ? 0 : 1)
                                        : i.indent + (o ? 0 : t.indentUnit)
                                );
                            },
                            lineComment: '#',
                        };
                    }),
                    e.defineMIME('text/x-rsrc', 'r');
            })(n(25747));
        },
        70390: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.defineMode('shell', function() {
                    var t = {};
                    function n(e, n) {
                        for (var r = 0; r < n.length; r++) t[n[r]] = e;
                    }
                    var r = ['true', 'false'],
                        i = [
                            'if',
                            'then',
                            'do',
                            'else',
                            'elif',
                            'while',
                            'until',
                            'for',
                            'in',
                            'esac',
                            'fi',
                            'fin',
                            'fil',
                            'done',
                            'exit',
                            'set',
                            'unset',
                            'export',
                            'function',
                        ],
                        o = [
                            'ab',
                            'awk',
                            'bash',
                            'beep',
                            'cat',
                            'cc',
                            'cd',
                            'chown',
                            'chmod',
                            'chroot',
                            'clear',
                            'cp',
                            'curl',
                            'cut',
                            'diff',
                            'echo',
                            'find',
                            'gawk',
                            'gcc',
                            'get',
                            'git',
                            'grep',
                            'hg',
                            'kill',
                            'killall',
                            'ln',
                            'ls',
                            'make',
                            'mkdir',
                            'openssl',
                            'mv',
                            'nc',
                            'nl',
                            'node',
                            'npm',
                            'ping',
                            'ps',
                            'restart',
                            'rm',
                            'rmdir',
                            'sed',
                            'service',
                            'sh',
                            'shopt',
                            'shred',
                            'source',
                            'sort',
                            'sleep',
                            'ssh',
                            'start',
                            'stop',
                            'su',
                            'sudo',
                            'svn',
                            'tee',
                            'telnet',
                            'top',
                            'touch',
                            'vi',
                            'vim',
                            'wall',
                            'wc',
                            'wget',
                            'who',
                            'write',
                            'yes',
                            'zsh',
                        ];
                    function a(e, n) {
                        if (e.eatSpace()) return null;
                        var r,
                            i = e.sol(),
                            o = e.next();
                        if ('\\' === o) return e.next(), null;
                        if ("'" === o || '"' === o || '`' === o)
                            return (
                                n.tokens.unshift(
                                    s(o, '`' === o ? 'quote' : 'string')
                                ),
                                u(e, n)
                            );
                        if ('#' === o)
                            return i && e.eat('!')
                                ? (e.skipToEnd(), 'meta')
                                : (e.skipToEnd(), 'comment');
                        if ('$' === o) return n.tokens.unshift(c), u(e, n);
                        if ('+' === o || '=' === o) return 'operator';
                        if ('-' === o)
                            return e.eat('-'), e.eatWhile(/\w/), 'attribute';
                        if ('<' == o) {
                            if (e.match('<<')) return 'operator';
                            var a = e.match(/^<-?\s*['"]?([^'"]*)['"]?/);
                            if (a)
                                return (
                                    n.tokens.unshift(
                                        ((r = a[1]),
                                        function(e, t) {
                                            return (
                                                e.sol() &&
                                                    e.string == r &&
                                                    t.tokens.shift(),
                                                e.skipToEnd(),
                                                'string-2'
                                            );
                                        })
                                    ),
                                    'string-2'
                                );
                        }
                        if (
                            /\d/.test(o) &&
                            (e.eatWhile(/\d/), e.eol() || !/\w/.test(e.peek()))
                        )
                            return 'number';
                        e.eatWhile(/[\w-]/);
                        var l = e.current();
                        return '=' === e.peek() && /\w+/.test(l)
                            ? 'def'
                            : t.hasOwnProperty(l)
                            ? t[l]
                            : null;
                    }
                    function s(e, t) {
                        var n = '(' == e ? ')' : '{' == e ? '}' : e;
                        return function(r, i) {
                            for (var o, a = !1; null != (o = r.next()); ) {
                                if (o === n && !a) {
                                    i.tokens.shift();
                                    break;
                                }
                                if (
                                    '$' === o &&
                                    !a &&
                                    "'" !== e &&
                                    r.peek() != n
                                ) {
                                    (a = !0), r.backUp(1), i.tokens.unshift(c);
                                    break;
                                }
                                if (!a && e !== n && o === e)
                                    return i.tokens.unshift(s(e, t)), u(r, i);
                                if (!a && /['"]/.test(o) && !/['"]/.test(e)) {
                                    i.tokens.unshift(l(o, 'string')),
                                        r.backUp(1);
                                    break;
                                }
                                a = !a && '\\' === o;
                            }
                            return t;
                        };
                    }
                    function l(e, t) {
                        return function(n, r) {
                            return (r.tokens[0] = s(e, t)), n.next(), u(n, r);
                        };
                    }
                    e.registerHelper('hintWords', 'shell', r.concat(i, o)),
                        n('atom', r),
                        n('keyword', i),
                        n('builtin', o);
                    var c = function(e, t) {
                        t.tokens.length > 1 && e.eat('$');
                        var n = e.next();
                        return /['"({]/.test(n)
                            ? ((t.tokens[0] = s(
                                  n,
                                  '(' == n
                                      ? 'quote'
                                      : '{' == n
                                      ? 'def'
                                      : 'string'
                              )),
                              u(e, t))
                            : (/\d/.test(n) || e.eatWhile(/\w/),
                              t.tokens.shift(),
                              'def');
                    };
                    function u(e, t) {
                        return (t.tokens[0] || a)(e, t);
                    }
                    return {
                        startState: function() {
                            return { tokens: [] };
                        },
                        token: function(e, t) {
                            return u(e, t);
                        },
                        closeBrackets: '()[]{}\'\'""``',
                        lineComment: '#',
                        fold: 'brace',
                    };
                }),
                    e.defineMIME('text/x-sh', 'shell'),
                    e.defineMIME('application/x-sh', 'shell');
            })(n(25747));
        },
        67310: (e, t, n) => {
            !(function(e) {
                'use strict';
                function t(e) {
                    for (var t; null != (t = e.next()); )
                        if ('`' == t && !e.eat('`')) return 'variable-2';
                    return (
                        e.backUp(e.current().length - 1),
                        e.eatWhile(/\w/) ? 'variable-2' : null
                    );
                }
                function n(e) {
                    return (
                        e.eat('@') &&
                            (e.match('session.'),
                            e.match('local.'),
                            e.match('global.')),
                        e.eat("'")
                            ? (e.match(/^.*'/), 'variable-2')
                            : e.eat('"')
                            ? (e.match(/^.*"/), 'variable-2')
                            : e.eat('`')
                            ? (e.match(/^.*`/), 'variable-2')
                            : e.match(/^[0-9a-zA-Z$\.\_]+/)
                            ? 'variable-2'
                            : null
                    );
                }
                function r(e) {
                    return e.eat('N')
                        ? 'atom'
                        : e.match(/^[a-zA-Z.#!?]/)
                        ? 'variable-2'
                        : null;
                }
                e.defineMode('sql', function(t, n) {
                    var r = n.client || {},
                        s = n.atoms || { false: !0, true: !0, null: !0 },
                        l = n.builtin || o(a),
                        c = n.keywords || o(i),
                        u = n.operatorChars || /^[*+\-%<>!=&|~^\/]/,
                        d = n.support || {},
                        m = n.hooks || {},
                        f = n.dateSQL || { date: !0, time: !0, timestamp: !0 },
                        p = !1 !== n.backslashStringEscapes,
                        h = n.brackets || /^[\{}\(\)\[\]]/,
                        g = n.punctuation || /^[;.,:]/;
                    function b(e, t) {
                        var n = e.next();
                        if (m[n]) {
                            var i = m[n](e, t);
                            if (!1 !== i) return i;
                        }
                        if (
                            d.hexNumber &&
                            (('0' == n && e.match(/^[xX][0-9a-fA-F]+/)) ||
                                (('x' == n || 'X' == n) &&
                                    e.match(/^'[0-9a-fA-F]+'/)))
                        )
                            return 'number';
                        if (
                            d.binaryNumber &&
                            ((('b' == n || 'B' == n) && e.match(/^'[01]+'/)) ||
                                ('0' == n && e.match(/^b[01]+/)))
                        )
                            return 'number';
                        if (n.charCodeAt(0) > 47 && n.charCodeAt(0) < 58)
                            return (
                                e.match(/^[0-9]*(\.[0-9]+)?([eE][-+]?[0-9]+)?/),
                                d.decimallessFloat && e.match(/^\.(?!\.)/),
                                'number'
                            );
                        if ('?' == n && (e.eatSpace() || e.eol() || e.eat(';')))
                            return 'variable-3';
                        if ("'" == n || ('"' == n && d.doubleQuote))
                            return (t.tokenize = v(n)), t.tokenize(e, t);
                        if (
                            ((d.nCharCast && ('n' == n || 'N' == n)) ||
                                (d.charsetCast &&
                                    '_' == n &&
                                    e.match(/[a-z][a-z0-9]*/i))) &&
                            ("'" == e.peek() || '"' == e.peek())
                        )
                            return 'keyword';
                        if (
                            d.escapeConstant &&
                            ('e' == n || 'E' == n) &&
                            ("'" == e.peek() ||
                                ('"' == e.peek() && d.doubleQuote))
                        )
                            return (
                                (t.tokenize = function(e, t) {
                                    return (t.tokenize = v(e.next(), !0))(e, t);
                                }),
                                'keyword'
                            );
                        if (d.commentSlashSlash && '/' == n && e.eat('/'))
                            return e.skipToEnd(), 'comment';
                        if (
                            (d.commentHash && '#' == n) ||
                            ('-' == n &&
                                e.eat('-') &&
                                (!d.commentSpaceRequired || e.eat(' ')))
                        )
                            return e.skipToEnd(), 'comment';
                        if ('/' == n && e.eat('*'))
                            return (t.tokenize = x(1)), t.tokenize(e, t);
                        if ('.' != n) {
                            if (u.test(n)) return e.eatWhile(u), 'operator';
                            if (h.test(n)) return 'bracket';
                            if (g.test(n)) return e.eatWhile(g), 'punctuation';
                            if (
                                '{' == n &&
                                (e.match(
                                    /^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/
                                ) ||
                                    e.match(
                                        /^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/
                                    ))
                            )
                                return 'number';
                            e.eatWhile(/^[_\w\d]/);
                            var o = e.current().toLowerCase();
                            return f.hasOwnProperty(o) &&
                                (e.match(/^( )+'[^']*'/) ||
                                    e.match(/^( )+"[^"]*"/))
                                ? 'number'
                                : s.hasOwnProperty(o)
                                ? 'atom'
                                : l.hasOwnProperty(o)
                                ? 'builtin'
                                : c.hasOwnProperty(o)
                                ? 'keyword'
                                : r.hasOwnProperty(o)
                                ? 'string-2'
                                : null;
                        }
                        return d.zerolessFloat &&
                            e.match(/^(?:\d+(?:e[+-]?\d+)?)/i)
                            ? 'number'
                            : e.match(/^\.+/)
                            ? null
                            : d.ODBCdotTable && e.match(/^[\w\d_$#]+/)
                            ? 'variable-2'
                            : void 0;
                    }
                    function v(e, t) {
                        return function(n, r) {
                            for (var i, o = !1; null != (i = n.next()); ) {
                                if (i == e && !o) {
                                    r.tokenize = b;
                                    break;
                                }
                                o = (p || t) && !o && '\\' == i;
                            }
                            return 'string';
                        };
                    }
                    function x(e) {
                        return function(t, n) {
                            var r = t.match(/^.*?(\/\*|\*\/)/);
                            return (
                                r
                                    ? '/*' == r[1]
                                        ? (n.tokenize = x(e + 1))
                                        : (n.tokenize = e > 1 ? x(e - 1) : b)
                                    : t.skipToEnd(),
                                'comment'
                            );
                        };
                    }
                    function y(e, t, n) {
                        t.context = {
                            prev: t.context,
                            indent: e.indentation(),
                            col: e.column(),
                            type: n,
                        };
                    }
                    return {
                        startState: function() {
                            return { tokenize: b, context: null };
                        },
                        token: function(e, t) {
                            if (
                                (e.sol() &&
                                    t.context &&
                                    null == t.context.align &&
                                    (t.context.align = !1),
                                t.tokenize == b && e.eatSpace())
                            )
                                return null;
                            var n = t.tokenize(e, t);
                            if ('comment' == n) return n;
                            t.context &&
                                null == t.context.align &&
                                (t.context.align = !0);
                            var r = e.current();
                            return (
                                '(' == r
                                    ? y(e, t, ')')
                                    : '[' == r
                                    ? y(e, t, ']')
                                    : t.context &&
                                      t.context.type == r &&
                                      (function(e) {
                                          (e.indent = e.context.indent),
                                              (e.context = e.context.prev);
                                      })(t),
                                n
                            );
                        },
                        indent: function(n, r) {
                            var i = n.context;
                            if (!i) return e.Pass;
                            var o = r.charAt(0) == i.type;
                            return i.align
                                ? i.col + (o ? 0 : 1)
                                : i.indent + (o ? 0 : t.indentUnit);
                        },
                        blockCommentStart: '/*',
                        blockCommentEnd: '*/',
                        lineComment: d.commentSlashSlash
                            ? '//'
                            : d.commentHash
                            ? '#'
                            : '--',
                        closeBrackets: '()[]{}\'\'""``',
                    };
                });
                var i =
                    'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ';
                function o(e) {
                    for (var t = {}, n = e.split(' '), r = 0; r < n.length; ++r)
                        t[n[r]] = !0;
                    return t;
                }
                var a =
                    'bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric';
                e.defineMIME('text/x-sql', {
                    name: 'sql',
                    keywords: o(i + 'begin'),
                    builtin: o(a),
                    atoms: o('false true null unknown'),
                    dateSQL: o('date time timestamp'),
                    support: o(
                        'ODBCdotTable doubleQuote binaryNumber hexNumber'
                    ),
                }),
                    e.defineMIME('text/x-mssql', {
                        name: 'sql',
                        client: o(
                            '$partition binary_checksum checksum connectionproperty context_info current_request_id error_line error_message error_number error_procedure error_severity error_state formatmessage get_filestream_transaction_context getansinull host_id host_name isnull isnumeric min_active_rowversion newid newsequentialid rowcount_big xact_state object_id'
                        ),
                        keywords: o(
                            i +
                                'begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec go if use index holdlock nolock nowait paglock readcommitted readcommittedlock readpast readuncommitted repeatableread rowlock serializable snapshot tablock tablockx updlock with'
                        ),
                        builtin: o(
                            'bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table '
                        ),
                        atoms: o(
                            'is not null like and or in left right between inner outer join all any some cross unpivot pivot exists'
                        ),
                        operatorChars: /^[*+\-%<>!=^\&|\/]/,
                        brackets: /^[\{}\(\)]/,
                        punctuation: /^[;.,:/]/,
                        backslashStringEscapes: !1,
                        dateSQL: o(
                            'date datetimeoffset datetime2 smalldatetime datetime time'
                        ),
                        hooks: { '@': n },
                    }),
                    e.defineMIME('text/x-mysql', {
                        name: 'sql',
                        client: o(
                            'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee'
                        ),
                        keywords: o(
                            i +
                                'accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat'
                        ),
                        builtin: o(
                            'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric'
                        ),
                        atoms: o('false true null unknown'),
                        operatorChars: /^[*+\-%<>!=&|^]/,
                        dateSQL: o('date time timestamp'),
                        support: o(
                            'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired'
                        ),
                        hooks: { '@': n, '`': t, '\\': r },
                    }),
                    e.defineMIME('text/x-mariadb', {
                        name: 'sql',
                        client: o(
                            'charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee'
                        ),
                        keywords: o(
                            i +
                                'accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat'
                        ),
                        builtin: o(
                            'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric'
                        ),
                        atoms: o('false true null unknown'),
                        operatorChars: /^[*+\-%<>!=&|^]/,
                        dateSQL: o('date time timestamp'),
                        support: o(
                            'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired'
                        ),
                        hooks: { '@': n, '`': t, '\\': r },
                    }),
                    e.defineMIME('text/x-sqlite', {
                        name: 'sql',
                        client: o(
                            'auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width'
                        ),
                        keywords: o(
                            i +
                                'abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without'
                        ),
                        builtin: o(
                            'bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real'
                        ),
                        atoms: o(
                            'null current_date current_time current_timestamp'
                        ),
                        operatorChars: /^[*+\-%<>!=&|/~]/,
                        dateSQL: o('date time timestamp datetime'),
                        support: o('decimallessFloat zerolessFloat'),
                        identifierQuote: '"',
                        hooks: {
                            '@': n,
                            ':': n,
                            '?': n,
                            $: n,
                            '"': function(e) {
                                for (var t; null != (t = e.next()); )
                                    if ('"' == t && !e.eat('"'))
                                        return 'variable-2';
                                return (
                                    e.backUp(e.current().length - 1),
                                    e.eatWhile(/\w/) ? 'variable-2' : null
                                );
                            },
                            '`': t,
                        },
                    }),
                    e.defineMIME('text/x-cassandra', {
                        name: 'sql',
                        client: {},
                        keywords: o(
                            'add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime'
                        ),
                        builtin: o(
                            'ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint'
                        ),
                        atoms: o('false true infinity NaN'),
                        operatorChars: /^[<>=]/,
                        dateSQL: {},
                        support: o('commentSlashSlash decimallessFloat'),
                        hooks: {},
                    }),
                    e.defineMIME('text/x-plsql', {
                        name: 'sql',
                        client: o(
                            'appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap'
                        ),
                        keywords: o(
                            'abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work'
                        ),
                        builtin: o(
                            'abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml'
                        ),
                        operatorChars: /^[*\/+\-%<>!=~]/,
                        dateSQL: o('date time timestamp'),
                        support: o(
                            'doubleQuote nCharCast zerolessFloat binaryNumber hexNumber'
                        ),
                    }),
                    e.defineMIME('text/x-hive', {
                        name: 'sql',
                        keywords: o(
                            'select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with admin authorization char compact compactions conf cube current current_date current_timestamp day decimal defined dependency directories elem_type exchange file following for grouping hour ignore inner interval jar less logical macro minute month more none noscan over owner partialscan preceding pretty principals protection reload rewrite role roles rollup rows second server sets skewed transactions truncate unbounded unset uri user values window year'
                        ),
                        builtin: o(
                            'bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype key_type utctimestamp value_type varchar'
                        ),
                        atoms: o('false true null unknown'),
                        operatorChars: /^[*+\-%<>!=]/,
                        dateSQL: o('date timestamp'),
                        support: o(
                            'ODBCdotTable doubleQuote binaryNumber hexNumber'
                        ),
                    }),
                    e.defineMIME('text/x-pgsql', {
                        name: 'sql',
                        client: o('source'),
                        keywords: o(
                            i +
                                'a abort abs absent absolute access according action ada add admin after aggregate alias all allocate also alter always analyse analyze and any are array array_agg array_max_cardinality as asc asensitive assert assertion assignment asymmetric at atomic attach attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli between bigint binary bit bit_length blob blocked bom boolean both breadth by c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain char char_length character character_length character_set_catalog character_set_name character_set_schema characteristics characters check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column column_name columns command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constant constraint constraint_catalog constraint_name constraint_schema constraints constructor contains content continue control conversion convert copy corr corresponding cost count covar_pop covar_samp create cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datatype date datetime_interval_code datetime_interval_precision day db deallocate debug dec decimal declare default defaults deferrable deferred defined definer degree delete delimiter delimiters dense_rank depends depth deref derived desc describe descriptor detach detail deterministic diagnostics dictionary disable discard disconnect dispatch distinct dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain double drop dump dynamic dynamic_function dynamic_function_code each element else elseif elsif empty enable encoding encrypted end end_frame end_partition endexec enforced enum equals errcode error escape event every except exception exclude excluding exclusive exec execute exists exit exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreach foreign fortran forward found frame_row free freeze from fs full function functions fusion g general generated get global go goto grant granted greatest group grouping groups handler having header hex hierarchy hint hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import in include including increment indent index indexes indicator info inherit inherits initially inline inner inout input insensitive insert instance instantiable instead int integer integrity intersect intersection interval into invoker is isnull isolation join k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like like_regex limit link listen ln load local localtime localtimestamp location locator lock locked log logged loop lower m map mapping match matched materialized max max_cardinality maxvalue member merge message message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized not nothing notice notify notnull nowait nth_value ntile null nullable nullif nulls number numeric object occurrences_regex octet_length octets of off offset oids old on only open operator option options or order ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password path percent percent_rank percentile_cont percentile_disc perform period permission pg_context pg_datatype_name pg_exception_context pg_exception_detail pg_exception_hint placing plans pli policy portion position position_regex power precedes preceding precision prepare prepared preserve primary print_strict_params prior privileges procedural procedure procedures program public publication query quote raise range rank read reads real reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict result result_oid return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns reverse revoke right role rollback rollup routine routine_catalog routine_name routine_schema routines row row_count row_number rows rowtype rule savepoint scale schema schema_name schemas scope scope_catalog scope_name scope_schema scroll search second section security select selective self sensitive sequence sequences serializable server server_name session session_user set setof sets share show similar simple size skip slice smallint snapshot some source space specific specific_name specifictype sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable stacked standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset subscription substring substring_regex succeeds sum symmetric sysid system system_time system_user t table table_name tables tablesample tablespace temp template temporary text then ties time timestamp timezone_hour timezone_minute to token top_level_count trailing transaction transaction_active transactions_committed transactions_rolled_back transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted union unique unknown unlink unlisten unlogged unnamed unnest until untyped update upper uri usage use_column use_variable user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of values var_pop var_samp varbinary varchar variable_conflict variadic varying verbose version versioning view views volatile warning when whenever where while whitespace width_bucket window with within without work wrapper write xml xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes zone'
                        ),
                        builtin: o(
                            'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml'
                        ),
                        atoms: o('false true null unknown'),
                        operatorChars: /^[*\/+\-%<>!=&|^\/#@?~]/,
                        backslashStringEscapes: !1,
                        dateSQL: o('date time timestamp'),
                        support: o(
                            'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast escapeConstant'
                        ),
                    }),
                    e.defineMIME('text/x-gql', {
                        name: 'sql',
                        keywords: o(
                            'ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where'
                        ),
                        atoms: o('false true'),
                        builtin: o(
                            'blob datetime first key __key__ string integer double boolean null'
                        ),
                        operatorChars: /^[*+\-%<>!=]/,
                    }),
                    e.defineMIME('text/x-gpsql', {
                        name: 'sql',
                        client: o('source'),
                        keywords: o(
                            'abort absolute access action active add admin after aggregate all also alter always analyse analyze and any array as asc assertion assignment asymmetric at authorization backward before begin between bigint binary bit boolean both by cache called cascade cascaded case cast chain char character characteristics check checkpoint class close cluster coalesce codegen collate column comment commit committed concurrency concurrently configuration connection constraint constraints contains content continue conversion copy cost cpu_rate_limit create createdb createexttable createrole createuser cross csv cube current current_catalog current_date current_role current_schema current_time current_timestamp current_user cursor cycle data database day deallocate dec decimal declare decode default defaults deferrable deferred definer delete delimiter delimiters deny desc dictionary disable discard distinct distributed do document domain double drop dxl each else enable encoding encrypted end enum errors escape every except exchange exclude excluding exclusive execute exists explain extension external extract false family fetch fields filespace fill filter first float following for force foreign format forward freeze from full function global grant granted greatest group group_id grouping handler hash having header hold host hour identity if ignore ilike immediate immutable implicit in including inclusive increment index indexes inherit inherits initially inline inner inout input insensitive insert instead int integer intersect interval into invoker is isnull isolation join key language large last leading least left level like limit list listen load local localtime localtimestamp location lock log login mapping master match maxvalue median merge minute minvalue missing mode modifies modify month move name names national natural nchar new newline next no nocreatedb nocreateexttable nocreaterole nocreateuser noinherit nologin none noovercommit nosuperuser not nothing notify notnull nowait null nullif nulls numeric object of off offset oids old on only operator option options or order ordered others out outer over overcommit overlaps overlay owned owner parser partial partition partitions passing password percent percentile_cont percentile_disc placing plans position preceding precision prepare prepared preserve primary prior privileges procedural procedure protocol queue quote randomly range read readable reads real reassign recheck recursive ref references reindex reject relative release rename repeatable replace replica reset resource restart restrict returning returns revoke right role rollback rollup rootpartition row rows rule savepoint scatter schema scroll search second security segment select sequence serializable session session_user set setof sets share show similar simple smallint some split sql stable standalone start statement statistics stdin stdout storage strict strip subpartition subpartitions substring superuser symmetric sysid system table tablespace temp template temporary text then threshold ties time timestamp to trailing transaction treat trigger trim true truncate trusted type unbounded uncommitted unencrypted union unique unknown unlisten until update user using vacuum valid validation validator value values varchar variadic varying verbose version view volatile web when where whitespace window with within without work writable write xml xmlattributes xmlconcat xmlelement xmlexists xmlforest xmlparse xmlpi xmlroot xmlserialize year yes zone'
                        ),
                        builtin: o(
                            'bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml'
                        ),
                        atoms: o('false true null unknown'),
                        operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                        dateSQL: o('date time timestamp'),
                        support: o(
                            'ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast'
                        ),
                    }),
                    e.defineMIME('text/x-sparksql', {
                        name: 'sql',
                        keywords: o(
                            'add after all alter analyze and anti archive array as asc at between bucket buckets by cache cascade case cast change clear cluster clustered codegen collection column columns comment commit compact compactions compute concatenate cost create cross cube current current_date current_timestamp database databases data dbproperties defined delete delimited deny desc describe dfs directories distinct distribute drop else end escaped except exchange exists explain export extended external false fields fileformat first following for format formatted from full function functions global grant group grouping having if ignore import in index indexes inner inpath inputformat insert intersect interval into is items join keys last lateral lazy left like limit lines list load local location lock locks logical macro map minus msck natural no not null nulls of on optimize option options or order out outer outputformat over overwrite partition partitioned partitions percent preceding principals purge range recordreader recordwriter recover reduce refresh regexp rename repair replace reset restrict revoke right rlike role roles rollback rollup row rows schema schemas select semi separated serde serdeproperties set sets show skewed sort sorted start statistics stored stratify struct table tables tablesample tblproperties temp temporary terminated then to touch transaction transactions transform true truncate unarchive unbounded uncache union unlock unset use using values view when where window with'
                        ),
                        builtin: o(
                            'tinyint smallint int bigint boolean float double string binary timestamp decimal array map struct uniontype delimited serde sequencefile textfile rcfile inputformat outputformat'
                        ),
                        atoms: o('false true null'),
                        operatorChars: /^[*\/+\-%<>!=~&|^]/,
                        dateSQL: o('date time timestamp'),
                        support: o('ODBCdotTable doubleQuote zerolessFloat'),
                    }),
                    e.defineMIME('text/x-esper', {
                        name: 'sql',
                        client: o('source'),
                        keywords: o(
                            'alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit after all and as at asc avedev avg between by case cast coalesce count create current_timestamp day days delete define desc distinct else end escape events every exists false first from full group having hour hours in inner insert instanceof into irstream is istream join last lastweekday left limit like max match_recognize matches median measures metadatasql min minute minutes msec millisecond milliseconds not null offset on or order outer output partition pattern prev prior regexp retain-union retain-intersection right rstream sec second seconds select set some snapshot sql stddev sum then true unidirectional until update variable weekday when where window'
                        ),
                        builtin: {},
                        atoms: o('false true null'),
                        operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
                        dateSQL: o('time'),
                        support: o(
                            'decimallessFloat zerolessFloat binaryNumber hexNumber'
                        ),
                    });
            })(n(25747));
        },
        16751: (e, t, n) => {
            !(function(e) {
                'use strict';
                e.defineMode('stex', function(e, t) {
                    function n(e, t) {
                        e.cmdState.push(t);
                    }
                    function r(e) {
                        return e.cmdState.length > 0
                            ? e.cmdState[e.cmdState.length - 1]
                            : null;
                    }
                    function i(e, t, n) {
                        return function() {
                            (this.name = e),
                                (this.bracketNo = 0),
                                (this.style = t),
                                (this.styles = n),
                                (this.argument = null),
                                (this.styleIdentifier = function() {
                                    return (
                                        this.styles[this.bracketNo - 1] || null
                                    );
                                }),
                                (this.openBracket = function() {
                                    return this.bracketNo++, 'bracket';
                                }),
                                (this.closeBracket = function() {});
                        };
                    }
                    var o = {};
                    function a(e, t) {
                        e.f = t;
                    }
                    function s(e, t) {
                        var i;
                        if (e.match(/^\\[a-zA-Z@]+/)) {
                            var s = e.current().slice(1);
                            return (
                                n(
                                    t,
                                    (i = new (i = o.hasOwnProperty(s)
                                        ? o[s]
                                        : o.DEFAULT)())
                                ),
                                a(t, c),
                                i.style
                            );
                        }
                        if (e.match(/^\\[$&%#{}_]/)) return 'tag';
                        if (e.match(/^\\[,;!\/\\]/)) return 'tag';
                        if (e.match('\\['))
                            return (
                                a(t, function(e, t) {
                                    return l(e, t, '\\]');
                                }),
                                'keyword'
                            );
                        if (e.match('\\('))
                            return (
                                a(t, function(e, t) {
                                    return l(e, t, '\\)');
                                }),
                                'keyword'
                            );
                        if (e.match('$$'))
                            return (
                                a(t, function(e, t) {
                                    return l(e, t, '$$');
                                }),
                                'keyword'
                            );
                        if (e.match('$'))
                            return (
                                a(t, function(e, t) {
                                    return l(e, t, '$');
                                }),
                                'keyword'
                            );
                        var u = e.next();
                        return '%' == u
                            ? (e.skipToEnd(), 'comment')
                            : '}' == u || ']' == u
                            ? (i = r(t))
                                ? (i.closeBracket(u), a(t, c), 'bracket')
                                : 'error'
                            : '{' == u || '[' == u
                            ? (n(t, (i = new (i = o.DEFAULT)())), 'bracket')
                            : /\d/.test(u)
                            ? (e.eatWhile(/[\w.%]/), 'atom')
                            : (e.eatWhile(/[\w\-_]/),
                              'begin' ==
                                  (i = (function(e) {
                                      for (
                                          var t = e.cmdState, n = t.length - 1;
                                          n >= 0;
                                          n--
                                      ) {
                                          var r = t[n];
                                          if ('DEFAULT' != r.name) return r;
                                      }
                                      return {
                                          styleIdentifier: function() {
                                              return null;
                                          },
                                      };
                                  })(t)).name && (i.argument = e.current()),
                              i.styleIdentifier());
                    }
                    function l(e, t, n) {
                        if (e.eatSpace()) return null;
                        if (n && e.match(n)) return a(t, s), 'keyword';
                        if (e.match(/^\\[a-zA-Z@]+/)) return 'tag';
                        if (e.match(/^[a-zA-Z]+/)) return 'variable-2';
                        if (e.match(/^\\[$&%#{}_]/)) return 'tag';
                        if (e.match(/^\\[,;!\/]/)) return 'tag';
                        if (e.match(/^[\^_&]/)) return 'tag';
                        if (e.match(/^[+\-<>|=,\/@!*:;'"`~#?]/)) return null;
                        if (e.match(/^(\d+\.\d*|\d*\.\d+|\d+)/))
                            return 'number';
                        var r = e.next();
                        return '{' == r ||
                            '}' == r ||
                            '[' == r ||
                            ']' == r ||
                            '(' == r ||
                            ')' == r
                            ? 'bracket'
                            : '%' == r
                            ? (e.skipToEnd(), 'comment')
                            : 'error';
                    }
                    function c(e, t) {
                        var n = e.peek();
                        return '{' == n || '[' == n
                            ? (r(t).openBracket(n),
                              e.eat(n),
                              a(t, s),
                              'bracket')
                            : /[ \t\r]/.test(n)
                            ? (e.eat(n), null)
                            : (a(t, s),
                              (function(e) {
                                  var t = e.cmdState.pop();
                                  t && t.closeBracket();
                              })(t),
                              s(e, t));
                    }
                    return (
                        (o.importmodule = i('importmodule', 'tag', [
                            'string',
                            'builtin',
                        ])),
                        (o.documentclass = i('documentclass', 'tag', [
                            '',
                            'atom',
                        ])),
                        (o.usepackage = i('usepackage', 'tag', ['atom'])),
                        (o.begin = i('begin', 'tag', ['atom'])),
                        (o.end = i('end', 'tag', ['atom'])),
                        (o.label = i('label', 'tag', ['atom'])),
                        (o.ref = i('ref', 'tag', ['atom'])),
                        (o.eqref = i('eqref', 'tag', ['atom'])),
                        (o.cite = i('cite', 'tag', ['atom'])),
                        (o.bibitem = i('bibitem', 'tag', ['atom'])),
                        (o.Bibitem = i('Bibitem', 'tag', ['atom'])),
                        (o.RBibitem = i('RBibitem', 'tag', ['atom'])),
                        (o.DEFAULT = function() {
                            (this.name = 'DEFAULT'),
                                (this.style = 'tag'),
                                (this.styleIdentifier = this.openBracket = this.closeBracket = function() {});
                        }),
                        {
                            startState: function() {
                                return {
                                    cmdState: [],
                                    f: t.inMathMode
                                        ? function(e, t) {
                                              return l(e, t);
                                          }
                                        : s,
                                };
                            },
                            copyState: function(e) {
                                return { cmdState: e.cmdState.slice(), f: e.f };
                            },
                            token: function(e, t) {
                                return t.f(e, t);
                            },
                            blankLine: function(e) {
                                (e.f = s), (e.cmdState.length = 0);
                            },
                            lineComment: '%',
                        }
                    );
                }),
                    e.defineMIME('text/x-stex', 'stex'),
                    e.defineMIME('text/x-latex', 'stex');
            })(n(25747));
        },
        89036: (e, t, n) => {
            !(function(e) {
                'use strict';
                var t = {
                        autoSelfClosers: {
                            area: !0,
                            base: !0,
                            br: !0,
                            col: !0,
                            command: !0,
                            embed: !0,
                            frame: !0,
                            hr: !0,
                            img: !0,
                            input: !0,
                            keygen: !0,
                            link: !0,
                            meta: !0,
                            param: !0,
                            source: !0,
                            track: !0,
                            wbr: !0,
                            menuitem: !0,
                        },
                        implicitlyClosed: {
                            dd: !0,
                            li: !0,
                            optgroup: !0,
                            option: !0,
                            p: !0,
                            rp: !0,
                            rt: !0,
                            tbody: !0,
                            td: !0,
                            tfoot: !0,
                            th: !0,
                            tr: !0,
                        },
                        contextGrabbers: {
                            dd: { dd: !0, dt: !0 },
                            dt: { dd: !0, dt: !0 },
                            li: { li: !0 },
                            option: { option: !0, optgroup: !0 },
                            optgroup: { optgroup: !0 },
                            p: {
                                address: !0,
                                article: !0,
                                aside: !0,
                                blockquote: !0,
                                dir: !0,
                                div: !0,
                                dl: !0,
                                fieldset: !0,
                                footer: !0,
                                form: !0,
                                h1: !0,
                                h2: !0,
                                h3: !0,
                                h4: !0,
                                h5: !0,
                                h6: !0,
                                header: !0,
                                hgroup: !0,
                                hr: !0,
                                menu: !0,
                                nav: !0,
                                ol: !0,
                                p: !0,
                                pre: !0,
                                section: !0,
                                table: !0,
                                ul: !0,
                            },
                            rp: { rp: !0, rt: !0 },
                            rt: { rp: !0, rt: !0 },
                            tbody: { tbody: !0, tfoot: !0 },
                            td: { td: !0, th: !0 },
                            tfoot: { tbody: !0 },
                            th: { td: !0, th: !0 },
                            thead: { tbody: !0, tfoot: !0 },
                            tr: { tr: !0 },
                        },
                        doNotIndent: { pre: !0 },
                        allowUnquoted: !0,
                        allowMissing: !0,
                        caseFold: !0,
                    },
                    n = {
                        autoSelfClosers: {},
                        implicitlyClosed: {},
                        contextGrabbers: {},
                        doNotIndent: {},
                        allowUnquoted: !1,
                        allowMissing: !1,
                        allowMissingTagName: !1,
                        caseFold: !1,
                    };
                e.defineMode('xml', function(r, i) {
                    var o,
                        a,
                        s = r.indentUnit,
                        l = {},
                        c = i.htmlMode ? t : n;
                    for (var u in c) l[u] = c[u];
                    for (var u in i) l[u] = i[u];
                    function d(e, t) {
                        function n(n) {
                            return (t.tokenize = n), n(e, t);
                        }
                        var r = e.next();
                        return '<' == r
                            ? e.eat('!')
                                ? e.eat('[')
                                    ? e.match('CDATA[')
                                        ? n(f('atom', ']]>'))
                                        : null
                                    : e.match('--')
                                    ? n(f('comment', '--\x3e'))
                                    : e.match('DOCTYPE', !0, !0)
                                    ? (e.eatWhile(/[\w\._\-]/), n(p(1)))
                                    : null
                                : e.eat('?')
                                ? (e.eatWhile(/[\w\._\-]/),
                                  (t.tokenize = f('meta', '?>')),
                                  'meta')
                                : ((o = e.eat('/') ? 'closeTag' : 'openTag'),
                                  (t.tokenize = m),
                                  'tag bracket')
                            : '&' == r
                            ? (e.eat('#')
                                ? e.eat('x')
                                    ? e.eatWhile(/[a-fA-F\d]/) && e.eat(';')
                                    : e.eatWhile(/[\d]/) && e.eat(';')
                                : e.eatWhile(/[\w\.\-:]/) && e.eat(';'))
                                ? 'atom'
                                : 'error'
                            : (e.eatWhile(/[^&<]/), null);
                    }
                    function m(e, t) {
                        var n,
                            r,
                            i = e.next();
                        if ('>' == i || ('/' == i && e.eat('>')))
                            return (
                                (t.tokenize = d),
                                (o = '>' == i ? 'endTag' : 'selfcloseTag'),
                                'tag bracket'
                            );
                        if ('=' == i) return (o = 'equals'), null;
                        if ('<' == i) {
                            (t.tokenize = d),
                                (t.state = v),
                                (t.tagName = t.tagStart = null);
                            var a = t.tokenize(e, t);
                            return a ? a + ' tag error' : 'tag error';
                        }
                        return /[\'\"]/.test(i)
                            ? ((t.tokenize =
                                  ((n = i),
                                  (r = function(e, t) {
                                      for (; !e.eol(); )
                                          if (e.next() == n) {
                                              t.tokenize = m;
                                              break;
                                          }
                                      return 'string';
                                  }),
                                  (r.isInAttribute = !0),
                                  r)),
                              (t.stringStartCol = e.column()),
                              t.tokenize(e, t))
                            : (e.match(
                                  /^[^\s\u00a0=<>\"\']*[^\s\u00a0=<>\"\'\/]/
                              ),
                              'word');
                    }
                    function f(e, t) {
                        return function(n, r) {
                            for (; !n.eol(); ) {
                                if (n.match(t)) {
                                    r.tokenize = d;
                                    break;
                                }
                                n.next();
                            }
                            return e;
                        };
                    }
                    function p(e) {
                        return function(t, n) {
                            for (var r; null != (r = t.next()); ) {
                                if ('<' == r)
                                    return (
                                        (n.tokenize = p(e + 1)),
                                        n.tokenize(t, n)
                                    );
                                if ('>' == r) {
                                    if (1 == e) {
                                        n.tokenize = d;
                                        break;
                                    }
                                    return (
                                        (n.tokenize = p(e - 1)),
                                        n.tokenize(t, n)
                                    );
                                }
                            }
                            return 'meta';
                        };
                    }
                    function h(e, t, n) {
                        (this.prev = e.context),
                            (this.tagName = t || ''),
                            (this.indent = e.indented),
                            (this.startOfLine = n),
                            (l.doNotIndent.hasOwnProperty(t) ||
                                (e.context && e.context.noIndent)) &&
                                (this.noIndent = !0);
                    }
                    function g(e) {
                        e.context && (e.context = e.context.prev);
                    }
                    function b(e, t) {
                        for (var n; ; ) {
                            if (!e.context) return;
                            if (
                                ((n = e.context.tagName),
                                !l.contextGrabbers.hasOwnProperty(n) ||
                                    !l.contextGrabbers[n].hasOwnProperty(t))
                            )
                                return;
                            g(e);
                        }
                    }
                    function v(e, t, n) {
                        return 'openTag' == e
                            ? ((n.tagStart = t.column()), x)
                            : 'closeTag' == e
                            ? y
                            : v;
                    }
                    function x(e, t, n) {
                        return 'word' == e
                            ? ((n.tagName = t.current()), (a = 'tag'), C)
                            : l.allowMissingTagName && 'endTag' == e
                            ? ((a = 'tag bracket'), C(e, 0, n))
                            : ((a = 'error'), x);
                    }
                    function y(e, t, n) {
                        if ('word' == e) {
                            var r = t.current();
                            return (
                                n.context &&
                                    n.context.tagName != r &&
                                    l.implicitlyClosed.hasOwnProperty(
                                        n.context.tagName
                                    ) &&
                                    g(n),
                                (n.context && n.context.tagName == r) ||
                                !1 === l.matchClosing
                                    ? ((a = 'tag'), k)
                                    : ((a = 'tag error'), w)
                            );
                        }
                        return l.allowMissingTagName && 'endTag' == e
                            ? ((a = 'tag bracket'), k(e, 0, n))
                            : ((a = 'error'), w);
                    }
                    function k(e, t, n) {
                        return 'endTag' != e ? ((a = 'error'), k) : (g(n), v);
                    }
                    function w(e, t, n) {
                        return (a = 'error'), k(e, 0, n);
                    }
                    function C(e, t, n) {
                        if ('word' == e) return (a = 'attribute'), _;
                        if ('endTag' == e || 'selfcloseTag' == e) {
                            var r = n.tagName,
                                i = n.tagStart;
                            return (
                                (n.tagName = n.tagStart = null),
                                'selfcloseTag' == e ||
                                l.autoSelfClosers.hasOwnProperty(r)
                                    ? b(n, r)
                                    : (b(n, r),
                                      (n.context = new h(
                                          n,
                                          r,
                                          i == n.indented
                                      ))),
                                v
                            );
                        }
                        return (a = 'error'), C;
                    }
                    function _(e, t, n) {
                        return 'equals' == e
                            ? S
                            : (l.allowMissing || (a = 'error'), C(e, 0, n));
                    }
                    function S(e, t, n) {
                        return 'string' == e
                            ? M
                            : 'word' == e && l.allowUnquoted
                            ? ((a = 'string'), C)
                            : ((a = 'error'), C(e, 0, n));
                    }
                    function M(e, t, n) {
                        return 'string' == e ? M : C(e, 0, n);
                    }
                    return (
                        (d.isInText = !0),
                        {
                            startState: function(e) {
                                var t = {
                                    tokenize: d,
                                    state: v,
                                    indented: e || 0,
                                    tagName: null,
                                    tagStart: null,
                                    context: null,
                                };
                                return null != e && (t.baseIndent = e), t;
                            },
                            token: function(e, t) {
                                if (
                                    (!t.tagName &&
                                        e.sol() &&
                                        (t.indented = e.indentation()),
                                    e.eatSpace())
                                )
                                    return null;
                                o = null;
                                var n = t.tokenize(e, t);
                                return (
                                    (n || o) &&
                                        'comment' != n &&
                                        ((a = null),
                                        (t.state = t.state(o || n, e, t)),
                                        a &&
                                            (n =
                                                'error' == a
                                                    ? n + ' error'
                                                    : a)),
                                    n
                                );
                            },
                            indent: function(t, n, r) {
                                var i = t.context;
                                if (t.tokenize.isInAttribute)
                                    return t.tagStart == t.indented
                                        ? t.stringStartCol + 1
                                        : t.indented + s;
                                if (i && i.noIndent) return e.Pass;
                                if (t.tokenize != m && t.tokenize != d)
                                    return r ? r.match(/^(\s*)/)[0].length : 0;
                                if (t.tagName)
                                    return !1 !== l.multilineTagIndentPastTag
                                        ? t.tagStart + t.tagName.length + 2
                                        : t.tagStart +
                                              s *
                                                  (l.multilineTagIndentFactor ||
                                                      1);
                                if (l.alignCDATA && /<!\[CDATA\[/.test(n))
                                    return 0;
                                var o = n && /^<(\/)?([\w_:\.-]*)/.exec(n);
                                if (o && o[1])
                                    for (; i; ) {
                                        if (i.tagName == o[2]) {
                                            i = i.prev;
                                            break;
                                        }
                                        if (
                                            !l.implicitlyClosed.hasOwnProperty(
                                                i.tagName
                                            )
                                        )
                                            break;
                                        i = i.prev;
                                    }
                                else if (o)
                                    for (; i; ) {
                                        var a = l.contextGrabbers[i.tagName];
                                        if (!a || !a.hasOwnProperty(o[2]))
                                            break;
                                        i = i.prev;
                                    }
                                for (; i && i.prev && !i.startOfLine; )
                                    i = i.prev;
                                return i ? i.indent + s : t.baseIndent || 0;
                            },
                            electricInput: /<\/[\s\w:]+>$/,
                            blockCommentStart: '\x3c!--',
                            blockCommentEnd: '--\x3e',
                            configuration: l.htmlMode ? 'html' : 'xml',
                            helperType: l.htmlMode ? 'html' : 'xml',
                            skipAttribute: function(e) {
                                e.state == S && (e.state = C);
                            },
                            xmlCurrentTag: function(e) {
                                return e.tagName
                                    ? {
                                          name: e.tagName,
                                          close: 'closeTag' == e.type,
                                      }
                                    : null;
                            },
                            xmlCurrentContext: function(e) {
                                for (var t = [], n = e.context; n; n = n.prev)
                                    t.push(n.tagName);
                                return t.reverse();
                            },
                        }
                    );
                }),
                    e.defineMIME('text/xml', 'xml'),
                    e.defineMIME('application/xml', 'xml'),
                    e.mimeModes.hasOwnProperty('text/html') ||
                        e.defineMIME('text/html', {
                            name: 'xml',
                            htmlMode: !0,
                        });
            })(n(25747));
        },
        77608: (e, t, n) => {
            'use strict';
            n.d(t, {
                $m: () => a,
                Dp: () => o,
                Z$: () => r,
                kJ: () => s,
                s7: () => i,
            });
            const r = e => e[e.length - 1],
                i = (e, t) => {
                    for (let n = 0; n < t.length; n++) e.push(t[n]);
                },
                o = Array.from,
                a = (e, t) => {
                    return (
                        e.length === t.length &&
                        ((n = (e, n) => e === t[n]), e.every(n))
                    );
                    var n;
                },
                s = Array.isArray;
        },
        12904: (e, t, n) => {
            'use strict';
            n.d(t, { Hi: () => s, PP: () => o, UV: () => a, gB: () => l });
            var r = n(77608),
                i = n(41042);
            const o = (e, t, n = 0) => {
                    try {
                        for (; n < e.length; n++) e[n](...t);
                    } finally {
                        n < e.length && o(e, t, n + 1);
                    }
                },
                a = (e, t) =>
                    e === t ||
                    (null != e &&
                        null != t &&
                        e.constructor === t.constructor &&
                        ((e instanceof Array && r.$m(e, t)) ||
                            ('object' == typeof e && i.$m(e, t)))),
                s = (e, t) => {
                    if (null == e || null == t)
                        return ((e, t) => e === t)(e, t);
                    if (e.constructor !== t.constructor) return !1;
                    if (e === t) return !0;
                    switch (e.constructor) {
                        case ArrayBuffer:
                            (e = new Uint8Array(e)), (t = new Uint8Array(t));
                        case Uint8Array:
                            if (e.byteLength !== t.byteLength) return !1;
                            for (let n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            break;
                        case Set:
                            if (e.size !== t.size) return !1;
                            for (const n of e) if (!t.has(n)) return !1;
                            break;
                        case Map:
                            if (e.size !== t.size) return !1;
                            for (const n of e.keys())
                                if (!t.has(n) || !s(e.get(n), t.get(n)))
                                    return !1;
                            break;
                        case Object:
                            if (i.kE(e) !== i.kE(t)) return !1;
                            for (const n in e)
                                if (!i.l$(e, n) || !s(e[n], t[n])) return !1;
                            break;
                        case Array:
                            if (e.length !== t.length) return !1;
                            for (let n = 0; n < e.length; n++)
                                if (!s(e[n], t[n])) return !1;
                            break;
                        default:
                            return !1;
                    }
                    return !0;
                },
                l = (e, t) => t.includes(e);
        },
        31234: (e, t, n) => {
            'use strict';
            n.d(t, {
                JG: () => i,
                UI: () => a,
                Ue: () => r,
                Yj: () => s,
                Yu: () => o,
            });
            const r = () => new Map(),
                i = e => {
                    const t = r();
                    return (
                        e.forEach((e, n) => {
                            t.set(n, e);
                        }),
                        t
                    );
                },
                o = (e, t, n) => {
                    let r = e.get(t);
                    return void 0 === r && e.set(t, (r = n())), r;
                },
                a = (e, t) => {
                    const n = [];
                    for (const [r, i] of e) n.push(t(i, r));
                    return n;
                },
                s = (e, t) => {
                    for (const [n, r] of e) if (t(r, n)) return !0;
                    return !1;
                };
        },
        41865: (e, t, n) => {
            'use strict';
            n.d(t, {
                Fp: () => s,
                GR: () => c,
                GW: () => r,
                IH: () => o,
                VV: () => a,
                Wn: () => i,
                sQ: () => l,
            });
            const r = Math.floor,
                i = (Math.ceil, Math.abs),
                o =
                    (Math.imul,
                    Math.round,
                    Math.log10,
                    Math.log2,
                    Math.log,
                    Math.sqrt,
                    (e, t) => e + t),
                a = (e, t) => (e < t ? e : t),
                s = (e, t) => (e > t ? e : t),
                l = (Number.isNaN, Math.pow),
                c = (Math.sign, e => (0 !== e ? e < 0 : 1 / e < 0));
        },
        41042: (e, t, n) => {
            'use strict';
            n.d(t, { $m: () => s, UI: () => i, kE: () => o, l$: () => a }),
                Object.assign;
            const r = Object.keys,
                i = (e, t) => {
                    const n = [];
                    for (const r in e) n.push(t(e[r], r));
                    return n;
                },
                o = e => r(e).length,
                a = (e, t) => Object.prototype.hasOwnProperty.call(e, t),
                s = (e, t) =>
                    e === t ||
                    (o(e) === o(t) &&
                        ((e, t) => {
                            for (const n in e) if (!t(e[n], n)) return !1;
                            return !0;
                        })(
                            e,
                            (e, n) => (void 0 !== e || a(t, n)) && t[n] === e
                        ));
        },
        32549: (e, t, n) => {
            'use strict';
            n.d(t, { y: () => a });
            var r = n(31234),
                i = n(64064),
                o = n(77608);
            class a {
                constructor() {
                    this._observers = r.Ue();
                }
                on(e, t) {
                    r.Yu(this._observers, e, i.Ue).add(t);
                }
                once(e, t) {
                    const n = (...r) => {
                        this.off(e, n), t(...r);
                    };
                    this.on(e, n);
                }
                off(e, t) {
                    const n = this._observers.get(e);
                    void 0 !== n &&
                        (n.delete(t),
                        0 === n.size && this._observers.delete(e));
                }
                emit(e, t) {
                    return o
                        .Dp((this._observers.get(e) || r.Ue()).values())
                        .forEach(e => e(...t));
                }
                destroy() {
                    this._observers = r.Ue();
                }
            }
        },
        64064: (e, t, n) => {
            'use strict';
            n.d(t, { Ue: () => r });
            const r = () => new Set();
        },
    },
]);
//# sourceMappingURL=5878.557092e.js.map
