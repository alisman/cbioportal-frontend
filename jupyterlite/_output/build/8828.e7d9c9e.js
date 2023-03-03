'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8828],
    {
        6598: (e, t, n) => {
            n.r(t),
                n.d(t, {
                    ITableOfContentsRegistry: () => K,
                    RunningStatus: () => T,
                    TOCItem: () => Z,
                    TableOfContents: () => te,
                    TableOfContentsRegistry: () => J,
                    createLatexGenerator: () => l,
                    createMarkdownGenerator: () => w,
                    createNotebookGenerator: () => F,
                    createPythonGenerator: () => q,
                    createRenderedMarkdownGenerator: () => v,
                    isNotebookHeading: () => S,
                });
            const s = {
                part: 1,
                chapter: 1,
                section: 1,
                subsection: 2,
                subsubsection: 3,
                paragraph: 4,
                subparagraph: 5,
            };
            function r(e) {
                let t = e.content.model.mimeType;
                return 'text/x-latex' === t || 'text/x-stex' === t;
            }
            function i(e) {
                let t = e.content.model.value.text.split('\n');
                t = (function(e) {
                    for (let t = 0; t < e.length; t++) e[t] = [e[t], t];
                    return e;
                })(t);
                let n = [];
                for (let e = 0; e < t.length; e++) {
                    const i = /^\s*\\(section|subsection|subsubsection){(.+)}/,
                        l = t[e][0].match(i);
                    l &&
                        n.push({
                            text: l[2],
                            level: s[l[1]],
                            onClick: r(t[e][1]),
                        });
                }
                return n;
                function r(t) {
                    return () => {
                        e.content.editor.setCursorPosition({
                            line: t,
                            column: 0,
                        });
                    };
                }
            }
            function l(e) {
                return { tracker: e, usesLatex: !0, isEnabled: r, generate: i };
            }
            var o = n(61345);
            function a(e) {
                return (
                    'text/x-ipythongfm' === e ||
                    'text/x-markdown' === e ||
                    'text/x-gfm' === e ||
                    'text/markdown' === e
                );
            }
            class c {
                constructor(e, t) {
                    (this._numbering = t.numbering),
                        (this._numberingH1 = t.numberingH1),
                        (this._widget = e),
                        (this.translator = t.translator || o.nullTranslator),
                        (this.sanitizer = t.sanitizer);
                }
                set numbering(e) {
                    (this._numbering = e), this._widget.update();
                }
                get numbering() {
                    return this._numbering;
                }
                set numberingH1(e) {
                    this._numberingH1 != e &&
                        ((this._numberingH1 = e), this._widget.update());
                }
                get numberingH1() {
                    return this._numberingH1;
                }
                initializeOptions(e, t) {
                    (this._numbering = e),
                        (this._numberingH1 = t),
                        this._widget.update();
                }
            }
            var h = n(62471);
            const d = {
                allowedTags: [
                    'p',
                    'blockquote',
                    'b',
                    'i',
                    'strong',
                    'em',
                    'strike',
                    'code',
                    'br',
                    'div',
                    'span',
                    'pre',
                    'del',
                ],
                allowedAttributes: {
                    code: ['class'],
                    span: ['class'],
                    div: ['class'],
                    p: ['class'],
                    pre: ['class'],
                },
            };
            function u(e, t) {
                let n,
                    s = 'toc-level-size-' + t.level,
                    r = t.numbering && e.numbering ? t.numbering : '';
                if (t.html) {
                    let i = e.sanitizer.sanitize(t.html, d);
                    n = h.createElement('span', {
                        dangerouslySetInnerHTML: { __html: r + i },
                        className: 'toc-markdown-cell ' + s,
                    });
                } else
                    n = h.createElement(
                        'span',
                        { className: s },
                        ' ',
                        r + t.text
                    );
                return n;
            }
            var g = n(99729);
            function m(e) {
                return class extends h.Component {
                    constructor(t) {
                        super(t),
                            (this.state = { numbering: !1 }),
                            e.initializeOptions(!1, e.numberingH1),
                            (this._trans = e.translator.load('jupyterlab'));
                    }
                    render() {
                        const t = () => {
                                (e.numbering = !e.numbering),
                                    this.setState({ numbering: e.numbering });
                            },
                            n = h.createElement(
                                'div',
                                {
                                    onClick: e => t(),
                                    role: 'text',
                                    'aria-label': this._trans.__(
                                        'Toggle Auto-Numbering'
                                    ),
                                    title: this._trans.__(
                                        'Toggle Auto-Numbering'
                                    ),
                                    className: this.state.numbering
                                        ? 'toc-toolbar-icon-selected'
                                        : 'toc-toolbar-icon',
                                },
                                h.createElement(g.numberingIcon.react, null)
                            );
                        return h.createElement(
                            'div',
                            null,
                            h.createElement(
                                'div',
                                { className: 'toc-toolbar' },
                                n
                            )
                        );
                    }
                };
            }
            function p(e, t) {
                if (null === e) return;
                let n = '';
                if (
                    ((e = (function(e, t) {
                        for (let n = t + 1; n <= 6; n++)
                            void 0 !== e[n] && (e[n] = void 0);
                        return void 0 === e[t] ? (e[t] = 1) : (e[t] += 1), e;
                    })(e, t)),
                    t >= 1)
                ) {
                    for (let s = 1; s <= t; s++)
                        n += (void 0 === e[s] ? '0' : e[s]) + '.';
                    n += ' ';
                }
                return n;
            }
            function _(e) {
                const t = e.split('\n');
                let n = t[0].match(/^([#]{1,6}) (.*)/);
                return n
                    ? {
                          text: n[2].replace(/\[(.+)\]\(.+\)/g, '$1'),
                          level: n[1].length,
                          type: 'markdown',
                      }
                    : t.length > 1 &&
                      ((n = t[1].match(/^ {0,3}([=]{2,}|[-]{2,})\s*$/)), n)
                    ? {
                          text: t[0].replace(/\[(.+)\]\(.+\)/g, '$1'),
                          level: '=' === n[1][0] ? 1 : 2,
                          type: 'markdown-alt',
                      }
                    : ((n = t[0].match(/<h([1-6]).*>(.*)<\/h\1>/i)),
                      n
                          ? {
                                text: n[2],
                                level: parseInt(n[1], 10),
                                type: 'html',
                            }
                          : null);
            }
            function f(e) {
                return () => {
                    e.scrollIntoView();
                };
            }
            function b(e) {
                return a(e.content.model.mimeType);
            }
            function C(e, t) {
                let n = !0;
                return (
                    void 0 !== t && (n = t.numberingH1),
                    (function(e, t, n, s) {
                        const r = e.split('\n');
                        let i,
                            l = [];
                        for (let e = 0; e < r.length; e++) {
                            let o = r[e];
                            if ((0 === o.indexOf('```') && (i = !i), i))
                                continue;
                            o += r[e + 1] ? '\n' + r[e + 1] : '';
                            const a = _(o);
                            if (a) {
                                let r = a.level;
                                s || (r -= 1),
                                    l.push({
                                        text: a.text,
                                        numbering: p(n, r),
                                        level: a.level,
                                        onClick: t(e),
                                    });
                            }
                        }
                        return l;
                    })(
                        e.content.model.value.text,
                        function(t) {
                            return () => {
                                e.content.editor.setCursorPosition({
                                    line: t,
                                    column: 0,
                                });
                            };
                        },
                        {},
                        n
                    )
                );
            }
            function w(e, t, n, s, r) {
                let i = !0;
                r && (i = r.composite.numberingH1);
                const l = new c(t, {
                    numbering: !0,
                    numberingH1: i,
                    sanitizer: n,
                    translator: s || o.nullTranslator,
                });
                return (
                    r &&
                        r.changed.connect(() => {
                            l.numberingH1 = r.composite.numberingH1;
                        }),
                    {
                        tracker: e,
                        usesLatex: !0,
                        options: l,
                        toolbarGenerator: function() {
                            return m(l);
                        },
                        itemRenderer: function(e) {
                            return u(l, e);
                        },
                        isEnabled: b,
                        generate: C,
                    }
                );
            }
            function v(e, t, n, s, r) {
                let i = !0;
                r && (i = r.composite.numberingH1);
                const l = new c(t, {
                    numbering: !0,
                    numberingH1: i,
                    sanitizer: n,
                    translator: s || o.nullTranslator,
                });
                return (
                    r &&
                        r.changed.connect(() => {
                            l.numberingH1 = r.composite.numberingH1;
                        }),
                    {
                        tracker: e,
                        usesLatex: !0,
                        options: l,
                        toolbarGenerator: function() {
                            return m(l);
                        },
                        itemRenderer: function(e) {
                            return u(l, e);
                        },
                        generate: function(e) {
                            return (function(e, t, n, s = !0, r = !0) {
                                let i = e.querySelectorAll(
                                        'h1, h2, h3, h4, h5, h6'
                                    ),
                                    l = [];
                                for (let e = 0; e < i.length; e++) {
                                    const o = i[e];
                                    let a = parseInt(o.tagName[1], 10),
                                        c = o.textContent ? o.textContent : '',
                                        h = !s;
                                    o.getElementsByClassName('numbering-entry')
                                        .length > 0 &&
                                        o.removeChild(
                                            o.getElementsByClassName(
                                                'numbering-entry'
                                            )[0]
                                        );
                                    let u = t.sanitize(o.innerHTML, d);
                                    (u = u.replace('¶', '')), r || (a -= 1);
                                    let g = p(n, a),
                                        m = '';
                                    h ||
                                        (m =
                                            '<span class="numbering-entry">' +
                                            g +
                                            '</span>'),
                                        (o.innerHTML = m + u),
                                        l.push({
                                            level: a,
                                            text: c.replace('¶', ''),
                                            numbering: g,
                                            html: u,
                                            onClick: f(o),
                                        });
                                }
                                return l;
                            })(
                                e.content.node,
                                n,
                                {},
                                l.numbering,
                                l.numberingH1
                            );
                        },
                    }
                );
            }
            var T,
                x = n(69873),
                k = n(58099);
            function y(e, t) {
                if (0 === t.length) return !1;
                if (e && e.cellRef) {
                    let n = e.cellRef.model.metadata.get('tags');
                    if (n)
                        for (let e = 0; e < n.length; e++) {
                            let s = n[e];
                            for (let e = 0; e < t.length; e++)
                                if (t[e] === s) return !1;
                        }
                }
                return !0;
            }
            function E(e, t, n, s, r) {
                if (t && !y(t, r) && t.text) {
                    if (n && 'header' === n.type)
                        for (let t = e.length - 1; t >= 0; t--)
                            e[t] === n && (e[t].hasChild = !0);
                    s < 0 && e.push(t), (n = t);
                }
                return [e, n];
            }
            function N(e, t, n, s, r, i, l, o) {
                return (
                    e && 'markdown' === e.type && l
                        ? ([t, n] = E(t, e, n, s, r))
                        : e &&
                          'header' === e.type &&
                          ([t, n, s] = (function(e, t, n, s, r, i, l) {
                              const o = e.length;
                              if (y(t, r)) {
                                  if (n && t.level <= n.level) {
                                      let r = !1,
                                          i = o - 1;
                                      for (; i >= 0; i--)
                                          if (e[i].level < t.level) {
                                              (n = e[i]), (r = !0);
                                              break;
                                          }
                                      r
                                          ? (s = e[
                                                i + 1
                                            ].cellRef.model.metadata.get(l)
                                                ? e[i + 1].level
                                                : -1)
                                          : ((n = null), (s = -1));
                                  }
                              } else {
                                  if (
                                      n &&
                                      'header' === n.type &&
                                      n.level < t.level
                                  )
                                      for (let t = o - 1; t >= 0; t--)
                                          e[t] === n && (e[t].hasChild = !0);
                                  (s >= t.level || s < 0) &&
                                      (e.push(t), (s = i ? t.level : -1)),
                                      (n = t);
                              }
                              return [e, n, s];
                          })(t, e, n, s, r, i, o)),
                    [t, n, s]
                );
            }
            function S(e) {
                return void 0 !== e.type && void 0 !== e.cellRef;
            }
            function R(e, t, n, s, r, i = -1, l = T.Idle) {
                let o = [];
                if (
                    (-1 === i &&
                        console.warn(
                            'Deprecation warning! index argument will become mandatory in the next version'
                        ),
                    e)
                ) {
                    const a = e.split('\n'),
                        c = Math.min(a.length, 3);
                    let h = '',
                        d = 0;
                    for (; d < c - 1; d++) h += a[d] + '\n';
                    (h += a[d]),
                        o.push({
                            text: h,
                            level: s + 1,
                            onClick: t(0),
                            type: 'code',
                            prompt: n,
                            cellRef: r,
                            hasChild: !1,
                            index: i,
                            isRunning: l,
                        });
                }
                return o[0];
            }
            function H(e) {
                if (e.length > 0) {
                    let t = e.length - 1;
                    for (; t >= 0; ) {
                        if ('header' === e[t].type) return e[t].level;
                        t -= 1;
                    }
                }
                return 0;
            }
            function M(e, t, n, s, r, i = -1, l = T.Idle) {
                const o = t(0);
                let a = [];
                -1 === i &&
                    console.warn(
                        'Deprecation warning! index argument will become mandatory in the next version'
                    );
                for (const t of e.split('\n'))
                    if (t) {
                        const e = _(t);
                        e
                            ? a.push({
                                  text: e.text,
                                  level: e.level,
                                  numbering: p(n, e.level),
                                  onClick: o,
                                  type: 'header',
                                  cellRef: r,
                                  hasChild: !1,
                                  isRunning: l,
                                  index: i,
                              })
                            : a.push({
                                  text: t,
                                  level: s + 1,
                                  onClick: o,
                                  type: 'markdown',
                                  cellRef: r,
                                  hasChild: !1,
                                  isRunning: l,
                                  index: i,
                              });
                    }
                return a;
            }
            function A(e, t, n, s, r, i = !1, l = !0, o, a = -1, c = T.Idle) {
                let h = e.querySelectorAll('h1, h2, h3, h4, h5, h6, p');
                -1 === a &&
                    console.warn(
                        'Deprecation warning! index argument will become mandatory in the next version'
                    );
                let u = [];
                for (const e of h) {
                    if (e.classList.contains('jp-toc-ignore')) continue;
                    if ('p' === e.nodeName.toLowerCase()) {
                        if (e.innerHTML) {
                            let s = n.sanitize(e.innerHTML, d);
                            u.push({
                                level: r + 1,
                                html: s.replace('¶', ''),
                                text: e.textContent ? e.textContent : '',
                                onClick: t(e),
                                type: 'markdown',
                                cellRef: o,
                                hasChild: !1,
                                index: a,
                                isRunning: c,
                            });
                        }
                        continue;
                    }
                    e.getElementsByClassName('numbering-entry').length > 0 &&
                        e.removeChild(
                            e.getElementsByClassName('numbering-entry')[0]
                        );
                    let h = n.sanitize(e.innerHTML, d);
                    h = h.replace('¶', '');
                    let g = parseInt(e.tagName[1], 10);
                    l || (g -= 1);
                    let m = p(s, g);
                    if (i) {
                        const t = document.createElement('span');
                        t.classList.add('numbering-entry'),
                            (t.textContent = null != m ? m : ''),
                            e.insertBefore(t, e.firstChild);
                    }
                    u.push({
                        level: g,
                        text: e.textContent ? e.textContent : '',
                        numbering: m,
                        html: h,
                        onClick: t(e),
                        type: 'header',
                        cellRef: o,
                        hasChild: !1,
                        index: a,
                        isRunning: c,
                    });
                }
                return u;
            }
            !(function(e) {
                (e[(e.Idle = -1)] = 'Idle'),
                    (e[(e.Scheduled = 0)] = 'Scheduled'),
                    (e[(e.Running = 1)] = 'Running');
            })(T || (T = {}));
            var O = n(32798);
            class W {
                constructor(e, t, n) {
                    (this._preRenderedToolbar = null),
                        (this._filtered = []),
                        (this._showCode = !1),
                        (this._showMarkdown = !1),
                        (this._showTags = !1),
                        (this._tagTool = null),
                        (this._numbering = n.numbering),
                        (this._numberingH1 = n.numberingH1),
                        (this._includeOutput = n.includeOutput),
                        (this._syncCollapseState = n.syncCollapseState),
                        (this._widget = e),
                        (this._notebook = t),
                        (this.sanitizer = n.sanitizer),
                        (this.storeTags = []),
                        (this.translator = n.translator || o.nullTranslator),
                        (this._collapseChanged = new O.Signal(this));
                }
                set tagTool(e) {
                    this._tagTool = e;
                }
                get tagTool() {
                    return this._tagTool;
                }
                set notebookMetadata(e) {
                    null != this._notebook.currentWidget &&
                        this._notebook.currentWidget.model.metadata.set(
                            e[0],
                            e[1]
                        );
                }
                set numbering(e) {
                    (this._numbering = e),
                        this._widget.update(),
                        (this.notebookMetadata = [
                            'toc-autonumbering',
                            this._numbering,
                        ]);
                }
                get numbering() {
                    return this._numbering;
                }
                set numberingH1(e) {
                    this._numberingH1 != e &&
                        ((this._numberingH1 = e), this._widget.update());
                }
                get numberingH1() {
                    return this._numberingH1;
                }
                set includeOutput(e) {
                    this._includeOutput != e &&
                        ((this._includeOutput = e), this._widget.update());
                }
                get includeOutput() {
                    return this._includeOutput;
                }
                set syncCollapseState(e) {
                    this._syncCollapseState != e &&
                        ((this._syncCollapseState = e), this._widget.update());
                }
                get syncCollapseState() {
                    return this._syncCollapseState;
                }
                set showCode(e) {
                    (this._showCode = e),
                        (this.notebookMetadata = [
                            'toc-showcode',
                            this._showCode,
                        ]),
                        this._widget.update();
                }
                get showCode() {
                    return this._showCode;
                }
                set showMarkdown(e) {
                    (this._showMarkdown = e),
                        (this.notebookMetadata = [
                            'toc-showmarkdowntxt',
                            this._showMarkdown,
                        ]),
                        this._widget.update();
                }
                get showMarkdown() {
                    return this._showMarkdown;
                }
                get collapseChanged() {
                    return this._collapseChanged;
                }
                set showTags(e) {
                    (this._showTags = e),
                        (this.notebookMetadata = [
                            'toc-showtags',
                            this._showTags,
                        ]),
                        this._widget.update();
                }
                get showTags() {
                    return this._showTags;
                }
                get filtered() {
                    return (
                        this.tagTool
                            ? (this._filtered = this.tagTool.filtered)
                            : this.storeTags.length > 0
                            ? (this._filtered = this.storeTags)
                            : (this._filtered = []),
                        this._filtered
                    );
                }
                set preRenderedToolbar(e) {
                    this._preRenderedToolbar = e;
                }
                get preRenderedToolbar() {
                    return this._preRenderedToolbar;
                }
                updateWidget() {
                    this._widget.update();
                }
                updateAndCollapse(e) {
                    this._collapseChanged.emit(e), this._widget.update();
                }
                initializeOptions(e, t, n, s, r, i, l) {
                    (this._numbering = e),
                        (this._numberingH1 = t),
                        (this._includeOutput = n),
                        (this._syncCollapseState = s),
                        (this._showCode = r),
                        (this._showMarkdown = i),
                        (this._showTags = l),
                        this._widget.update();
                }
            }
            var I = n(33349);
            class z extends h.Component {
                constructor(e) {
                    super(e), (this.state = { heading: e.heading });
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.setState({ heading: e.heading });
                }
                render() {
                    let e = this.state.heading.cellRef.editor.host.innerHTML;
                    return (
                        (e = this.props.sanitizer.sanitize(e, d)),
                        h.createElement('div', {
                            className: 'cm-toc',
                            dangerouslySetInnerHTML: { __html: e },
                        })
                    );
                }
            }
            function L(e, t, n) {
                if (t.index > -1 || (null == n ? void 0 : n.length)) {
                    let s = e.currentWidget.content.activeCellIndex;
                    if (t.index < s) {
                        let e = n.indexOf(t) + 1;
                        if (e >= n.length) return !0;
                        if ((null == n ? void 0 : n[e].index) > s) return !0;
                    }
                }
                return !1;
            }
            function j(e) {
                const t = h.useRef(null),
                    n = e.isActive;
                return (
                    h.useEffect(() => {
                        n &&
                            t.current &&
                            e.area &&
                            I.ElementExt.scrollIntoViewIfNeeded(
                                e.area,
                                t.current.parentElement
                            );
                    }, [n]),
                    h.createElement(
                        'div',
                        {
                            ref: t,
                            className: (0, g.classes)(
                                e.className,
                                n ? 'toc-active-cell' : ''
                            ),
                            'data-running': e.isRunning,
                        },
                        e.children
                    )
                );
            }
            class P extends h.Component {
                constructor(e) {
                    super(e);
                }
                render() {
                    const e = this.props.tag;
                    return h.createElement(
                        'div',
                        null,
                        h.createElement(
                            'label',
                            {
                                className: 'toc-tag-label',
                                key: new Date().toLocaleTimeString(),
                            },
                            e
                        )
                    );
                }
            }
            class D extends h.Component {
                constructor(e) {
                    super(e),
                        (this.selectedTagWithName = e => {
                            this.props.selectedTags.indexOf(e) >= 0
                                ? this.props.selectionStateHandler(e, !1)
                                : this.props.selectionStateHandler(e, !0);
                        }),
                        (this.renderTagComponents = e => {
                            const t = this.props.selectedTags,
                                n = this.selectedTagWithName;
                            return e.map((e, s) => {
                                const r =
                                    t.indexOf(e) >= 0
                                        ? 'toc-selected-tag toc-tag'
                                        : 'toc-unselected-tag toc-tag';
                                return h.createElement(
                                    'div',
                                    {
                                        key: e,
                                        className: r,
                                        onClick: t => {
                                            n(e);
                                        },
                                        tabIndex: 0,
                                    },
                                    h.createElement(P, {
                                        selectionStateHandler: this.props
                                            .selectionStateHandler,
                                        selectedTags: this.props.selectedTags,
                                        tag: e,
                                    })
                                );
                            });
                        }),
                        (this.state = { selected: this.props.selectedTags });
                }
                render() {
                    let e = this.props.tags,
                        t = null;
                    return (
                        e && (t = this.renderTagComponents(e)),
                        h.createElement(
                            'div',
                            { className: 'toc-tag-holder' },
                            t
                        )
                    );
                }
            }
            class G extends h.Component {
                constructor(e) {
                    super(e),
                        (this.changeSelectionState = (e, t) => {
                            let n = this.state.selected;
                            if (t)
                                n.push(e),
                                    this.setState({ selected: n }),
                                    this.filterTags(n);
                            else {
                                let t = [];
                                for (let s = 0; s < n.length; s++)
                                    n[s] !== e && t.push(n[s]);
                                this.setState({ selected: t }),
                                    this.filterTags(t);
                            }
                        }),
                        (this.deselectAll = () => {
                            this.setState({ selected: [] }),
                                this.props.options.updateWidget();
                        }),
                        (this.selectAllCellsWithCurrentTags = () => {
                            const e = this.state.selected,
                                t = this.props.tracker.currentWidget,
                                n = null == t ? void 0 : t.content.widgets;
                            null == t || t.content.deselectAll();
                            let s = !1;
                            null == n ||
                                n.forEach((n, r) => {
                                    e.every(e => this.containsTag(e, n)) &&
                                        (s ||
                                            (t &&
                                                (t.content.activeCellIndex = r),
                                            (s = !0)),
                                        null == t || t.content.select(n));
                                });
                        }),
                        (this.filterTags = e => {
                            this.setState({ selected: e }),
                                this.props.options.updateWidget();
                        }),
                        (this.updateFilters = () => {
                            let e = [],
                                t = 0,
                                n = !1;
                            for (let s = 0; s < this.state.selected.length; s++)
                                this.props.tags.indexOf(
                                    this.state.selected[s]
                                ) > -1
                                    ? ((e[t] = this.state.selected[s]),
                                      (t += 1))
                                    : !0 === this.props.options.showTags &&
                                      (n = !0);
                            n &&
                                (this.filterTags(e),
                                this.setState({ selected: e }));
                        }),
                        (this.state = { selected: this.props.inputFilter });
                    const t = this.props.translator || o.nullTranslator;
                    this._trans = t.load('jupyterlab');
                }
                get filtered() {
                    return this.state.selected;
                }
                containsTag(e, t) {
                    if (null === t) return !1;
                    let n = t.model.metadata.get('tags');
                    if (n) {
                        for (let t = 0; t < n.length; t++)
                            if (n[t] === e) return !0;
                        return !1;
                    }
                }
                UNSAFE_componentWillUpdate() {
                    this.updateFilters();
                }
                render() {
                    let e,
                        t,
                        n = h.createElement(
                            'div',
                            { className: 'toc-no-tags-div' },
                            this._trans.__('No Tags Available')
                        );
                    return (
                        (e =
                            0 === this.state.selected.length
                                ? h.createElement(
                                      'span',
                                      { className: 'toc-filter-button-na' },
                                      this._trans.__('Clear Filters')
                                  )
                                : 1 === this.state.selected.length
                                ? h.createElement(
                                      'span',
                                      {
                                          className: 'toc-filter-button',
                                          onClick: () => this.deselectAll(),
                                      },
                                      ' ',
                                      'Clear 1 Filter',
                                      ' '
                                  )
                                : h.createElement(
                                      'span',
                                      {
                                          className: 'toc-filter-button',
                                          onClick: () => this.deselectAll(),
                                      },
                                      ' ',
                                      'Clear ',
                                      this.state.selected.length,
                                      ' Filters',
                                      ' '
                                  )),
                        (t =
                            0 === this.state.selected.length
                                ? h.createElement(
                                      'span',
                                      {
                                          className: 'toc-filter-button-na',
                                          role: 'text',
                                          'aria-label': this._trans.__(
                                              'Select All Cells With Current Tags'
                                          ),
                                          title: this._trans.__(
                                              'Select All Cells With Current Tags'
                                          ),
                                      },
                                      this._trans.__(
                                          'Select All Cells With Current Tags'
                                      )
                                  )
                                : h.createElement(
                                      'span',
                                      {
                                          className: 'toc-filter-button',
                                          role: 'button',
                                          'aria-label': this._trans.__(
                                              'Select All Cells With Current Tags'
                                          ),
                                          title: this._trans.__(
                                              'Select All Cells With Current Tags'
                                          ),
                                          onClick: this
                                              .selectAllCellsWithCurrentTags,
                                          onKeyDown: this
                                              .selectAllCellsWithCurrentTags,
                                      },
                                      this._trans.__(
                                          'Select All Cells With Current Tags'
                                      )
                                  )),
                        this.props.tags &&
                            this.props.tags.length > 0 &&
                            (n = h.createElement(
                                'div',
                                { className: 'toc-tags-container' },
                                h.createElement(D, {
                                    tags: this.props.tags,
                                    selectionStateHandler: this
                                        .changeSelectionState,
                                    selectedTags: this.state.selected,
                                }),
                                e,
                                t
                            )),
                        n
                    );
                }
            }
            function F(e, t, n, s, r) {
                return new U(e, t, n, s, r);
            }
            class U {
                constructor(e, t, n, s, r) {
                    (this.itemRenderer = (e, t = []) =>
                        (function(e, t, n, s, r = []) {
                            if ('markdown' === s.type || 'header' === s.type) {
                                const l =
                                        'header' === s.type
                                            ? `toc-level-size-${s.level}`
                                            : 'toc-level-size-default',
                                    o =
                                        s.numbering && e.numbering
                                            ? s.numbering
                                            : '',
                                    a = e.syncCollapseState
                                        ? x.MARKDOWN_HEADING_COLLAPSED
                                        : 'toc-hr-collapsed';
                                if ('header' === s.type || e.showMarkdown) {
                                    const c = s.html
                                        ? h.createElement('span', {
                                              dangerouslySetInnerHTML: {
                                                  __html:
                                                      o +
                                                      e.sanitizer.sanitize(
                                                          s.html,
                                                          d
                                                      ),
                                              },
                                              className: `${s.type}-cell toc-cell-item`,
                                          })
                                        : h.createElement(
                                              'span',
                                              {
                                                  className: `${s.type}-cell toc-cell-item`,
                                              },
                                              o + s.text
                                          );
                                    if ('header' === s.type) {
                                        let e,
                                            o = h.createElement(
                                                'div',
                                                {
                                                    className:
                                                        'jp-Collapser p-Widget lm-Widget',
                                                    onClick: e => {
                                                        e.stopPropagation(),
                                                            i(t, a, s);
                                                    },
                                                },
                                                h.createElement('div', {
                                                    className:
                                                        'toc-Collapser-child',
                                                })
                                            );
                                        s.cellRef.model.metadata.has(a) &&
                                            (e = s.cellRef.model.metadata.get(
                                                a
                                            ));
                                        let d = e
                                            ? h.createElement(
                                                  'div',
                                                  {
                                                      className: 'toc-Ellipses',
                                                      onClick: e => {
                                                          e.stopPropagation(),
                                                              i(t, a, s);
                                                      },
                                                  },
                                                  h.createElement(
                                                      g.ellipsesIcon.react,
                                                      null
                                                  )
                                              )
                                            : null;
                                        return h.createElement(
                                            j,
                                            {
                                                isActive:
                                                    t.activeCell ===
                                                        s.cellRef || L(t, s, r),
                                                className:
                                                    'toc-entry-holder ' +
                                                    l +
                                                    (t.activeCell ===
                                                        s.cellRef || L(t, s, r)
                                                        ? ' toc-active-cell'
                                                        : ''),
                                                isRunning: s.isRunning,
                                                area: n.node.querySelector(
                                                    '.jp-TableOfContents-content'
                                                ),
                                            },
                                            o,
                                            c,
                                            d
                                        );
                                    }
                                    return c;
                                }
                            }
                            return e.showCode && 'code' === s.type
                                ? h.createElement(
                                      'div',
                                      { className: 'toc-code-cell-div' },
                                      h.createElement(
                                          'div',
                                          { className: 'toc-code-cell-prompt' },
                                          s.prompt
                                      ),
                                      h.createElement(
                                          'span',
                                          { className: 'toc-code-span' },
                                          h.createElement(z, {
                                              sanitizer: e.sanitizer,
                                              heading: s,
                                          })
                                      )
                                  )
                                : null;
                            function i(t, n, s) {
                                let r = !1,
                                    i = e.syncCollapseState;
                                s.cellRef.model.metadata.get(n) &&
                                    (r = s.cellRef.model.metadata.get(n)),
                                    s
                                        ? (i
                                              ? t.currentWidget &&
                                                k.NotebookActions.setHeadingCollapse(
                                                    s.cellRef,
                                                    !r,
                                                    t.currentWidget.content
                                                )
                                              : r
                                              ? s.cellRef.model.metadata.delete(
                                                    n
                                                )
                                              : s.cellRef.model.metadata.set(
                                                    n,
                                                    !0
                                                ),
                                          e.updateAndCollapse({
                                              heading: s,
                                              collapsedState: r,
                                              tocType: 'notebook',
                                          }))
                                        : e.updateWidget();
                            }
                        })(this.options, this.tracker, this.widget, e, t)),
                        (this.sanitizer = n),
                        (this.tracker = e),
                        (this.widget = t),
                        (this._runningCells = new Array());
                    let i = !0,
                        l = !0,
                        a = !1;
                    r &&
                        ((i = r.composite.numberingH1),
                        (l = r.composite.includeOutput),
                        (a = r.composite.syncCollapseState));
                    const c = (this.options = new W(t, e, {
                        numbering: !1,
                        numberingH1: i,
                        includeOutput: l,
                        syncCollapseState: a,
                        sanitizer: n,
                        translator: s || o.nullTranslator,
                    }));
                    r &&
                        r.changed.connect(() => {
                            (c.numberingH1 = r.composite.numberingH1),
                                (c.includeOutput = r.composite.includeOutput),
                                (c.syncCollapseState =
                                    r.composite.syncCollapseState);
                        }),
                        e.activeCellChanged.connect((e, n) => {
                            t.update();
                        }),
                        k.NotebookActions.executionScheduled.connect((e, t) => {
                            this._runningCells.includes(t.cell) ||
                                this._runningCells.push(t.cell);
                        }),
                        k.NotebookActions.executed.connect((e, t) => {
                            this._runningCells.forEach((e, n) => {
                                e === t.cell && this._runningCells.splice(n, 1);
                            });
                        });
                }
                get collapseChanged() {
                    return this.options.collapseChanged;
                }
                toolbarGenerator() {
                    return (
                        (e = this.options),
                        (t = this.tracker),
                        class extends h.Component {
                            constructor(n) {
                                super(n),
                                    (this._trans = e.translator.load(
                                        'jupyterlab'
                                    )),
                                    (this.tagTool = null),
                                    (this.state = {
                                        showCode: !0,
                                        showMarkdown: !1,
                                        showTags: !1,
                                        numbering: !1,
                                    }),
                                    t.currentWidget &&
                                        t.currentWidget.context.ready.then(
                                            () => {
                                                if (t.currentWidget) {
                                                    t.currentWidget.content.activeCellChanged.connect(
                                                        () => {
                                                            e.updateWidget();
                                                        }
                                                    );
                                                    const n = t.currentWidget.model.metadata.get(
                                                            'toc-autonumbering'
                                                        ),
                                                        s = t.currentWidget.model.metadata.get(
                                                            'toc-showcode'
                                                        ),
                                                        r = t.currentWidget.model.metadata.get(
                                                            'toc-showmarkdowntxt'
                                                        ),
                                                        i = t.currentWidget.model.metadata.get(
                                                            'toc-showtags'
                                                        );
                                                    e.initializeOptions(
                                                        n || e.numbering,
                                                        e.numberingH1,
                                                        e.includeOutput,
                                                        e.syncCollapseState,
                                                        s || e.showCode,
                                                        r || e.showMarkdown,
                                                        i || e.showTags
                                                    ),
                                                        this.setState({
                                                            showCode:
                                                                e.showCode,
                                                            showMarkdown:
                                                                e.showMarkdown,
                                                            showTags:
                                                                e.showTags,
                                                            numbering:
                                                                e.numbering,
                                                        }),
                                                        (this.tags = []);
                                                }
                                            }
                                        );
                            }
                            toggleCode() {
                                (e.showCode = !e.showCode),
                                    this.setState({ showCode: e.showCode });
                            }
                            toggleMarkdown() {
                                (e.showMarkdown = !e.showMarkdown),
                                    this.setState({
                                        showMarkdown: e.showMarkdown,
                                    });
                            }
                            toggleNumbering() {
                                (e.numbering = !e.numbering),
                                    this.setState({ numbering: e.numbering });
                            }
                            toggleTagDropdown() {
                                e.showTags &&
                                    this.tagTool &&
                                    (e.storeTags = this.tagTool.state.selected),
                                    (e.showTags = !e.showTags),
                                    this.setState({ showTags: e.showTags });
                            }
                            loadTags() {
                                const e = t.currentWidget;
                                if (e) {
                                    const t = e.model.cells,
                                        n = new Set();
                                    this.tags = [];
                                    for (let e = 0; e < t.length; e++) {
                                        const s = t.get(e).metadata.get('tags');
                                        Array.isArray(s) &&
                                            s.forEach(e => e && n.add(e));
                                    }
                                    this.tags = Array.from(n);
                                }
                            }
                            render() {
                                const n = h.createElement(
                                        'div',
                                        {
                                            onClick: e => this.toggleCode(),
                                            role: 'text',
                                            'aria-label': this._trans.__(
                                                'Toggle Code Cells'
                                            ),
                                            title: this._trans.__(
                                                'Toggle Code Cells'
                                            ),
                                            className: this.state.showCode
                                                ? 'toc-toolbar-code-icon toc-toolbar-icon-selected'
                                                : 'toc-toolbar-code-icon toc-toolbar-icon',
                                        },
                                        h.createElement(g.codeIcon.react, null)
                                    ),
                                    s = h.createElement(
                                        'div',
                                        {
                                            onClick: e => this.toggleMarkdown(),
                                            role: 'text',
                                            'aria-label': this._trans.__(
                                                'Toggle Markdown Text Cells'
                                            ),
                                            title: this._trans.__(
                                                'Toggle Markdown Text Cells'
                                            ),
                                            className: this.state.showMarkdown
                                                ? 'toc-toolbar-icon-selected'
                                                : 'toc-toolbar-icon',
                                        },
                                        h.createElement(
                                            g.markdownIcon.react,
                                            null
                                        )
                                    ),
                                    r = h.createElement(
                                        'div',
                                        {
                                            onClick: e =>
                                                this.toggleNumbering(),
                                            role: 'text',
                                            'aria-label': this._trans.__(
                                                'Toggle Auto-Numbering'
                                            ),
                                            title: this._trans.__(
                                                'Toggle Auto-Numbering'
                                            ),
                                            className: this.state.numbering
                                                ? 'toc-toolbar-icon-selected'
                                                : 'toc-toolbar-icon',
                                        },
                                        h.createElement(
                                            g.numberingIcon.react,
                                            null
                                        )
                                    );
                                let i = h.createElement('div', null),
                                    l = h.createElement(
                                        'div',
                                        {
                                            role: 'text',
                                            'aria-label': this._trans.__(
                                                'Show Tags Menu'
                                            ),
                                            title: this._trans.__(
                                                'Show Tags Menu'
                                            ),
                                            className: this.state.showTags
                                                ? 'toc-toolbar-icon-selected'
                                                : 'toc-toolbar-icon',
                                        },
                                        h.createElement(g.tagIcon.react, null)
                                    );
                                if (this.state.showTags) {
                                    this.loadTags();
                                    const n = h.createElement(G, {
                                        tags: this.tags,
                                        tracker: t,
                                        options: e,
                                        inputFilter: e.storeTags,
                                        translator: e.translator,
                                        ref: e => (this.tagTool = e),
                                    });
                                    (e.tagTool = this.tagTool),
                                        (i = h.createElement(
                                            'div',
                                            { className: 'toc-tag-dropdown' },
                                            ' ',
                                            n,
                                            ' '
                                        ));
                                }
                                return h.createElement(
                                    'div',
                                    null,
                                    h.createElement(
                                        'div',
                                        { className: 'toc-toolbar' },
                                        n,
                                        s,
                                        r,
                                        h.createElement(
                                            'div',
                                            {
                                                className:
                                                    'toc-tag-dropdown-button',
                                                onClick: e =>
                                                    this.toggleTagDropdown(),
                                            },
                                            l
                                        )
                                    ),
                                    i
                                );
                            }
                        }
                    );
                    var e, t;
                }
                generate(e) {
                    var t;
                    let n = [],
                        s = -1,
                        r = {},
                        i = null;
                    for (let l = 0; l < e.content.widgets.length; l++) {
                        let o = e.content.widgets[l],
                            c = o.model,
                            h = this.options.syncCollapseState
                                ? x.MARKDOWN_HEADING_COLLAPSED
                                : 'toc-hr-collapsed';
                        const d =
                                null !== (t = c.metadata.get(h)) &&
                                void 0 !== t &&
                                t,
                            u = this._runningCells.includes(o)
                                ? this._runningCells[0] === o
                                    ? T.Running
                                    : T.Scheduled
                                : T.Idle;
                        switch (c.type) {
                            case 'code':
                                if (
                                    !this.widget ||
                                    (this.widget && this.options.showCode)
                                ) {
                                    const t = t => () => {
                                            (e.content.activeCellIndex = l),
                                                o.node.scrollIntoView();
                                        },
                                        r = o.model.executionCount;
                                    let a = `[${
                                            null != r
                                                ? r
                                                : u !== T.Idle
                                                ? '*'
                                                : ' '
                                        }]: `,
                                        h = R(
                                            c.value.text,
                                            t,
                                            a,
                                            H(n),
                                            o,
                                            l,
                                            u
                                        );
                                    [n, i] = E(
                                        n,
                                        h,
                                        i,
                                        s,
                                        this.options.filtered
                                    );
                                }
                                if (this.options.includeOutput)
                                    for (let t = 0; t < c.outputs.length; t++) {
                                        const g = c.outputs.get(t);
                                        let m = Object.keys(g.data);
                                        if (
                                            ((m = m.filter(e => {
                                                return (
                                                    a(e) ||
                                                    'application/vdom.v1+json' ===
                                                        (t = e) ||
                                                    'text/html' === t
                                                );
                                                var t;
                                            })),
                                            !m.length)
                                        )
                                            continue;
                                        const p = t => () => {
                                            (e.content.activeCellIndex = l),
                                                (e.content.mode = 'command'),
                                                t.scrollIntoView();
                                        };
                                        let _ = A(
                                            o.outputArea.widgets[t].node,
                                            p,
                                            this.sanitizer,
                                            r,
                                            H(n),
                                            this.options.numbering,
                                            this.options.numberingH1,
                                            o,
                                            l,
                                            u
                                        );
                                        for (const e of _)
                                            [n, i, s] = N(
                                                e,
                                                n,
                                                i,
                                                s,
                                                this.options.filtered,
                                                d,
                                                this.options.showMarkdown,
                                                h
                                            );
                                    }
                                break;
                            case 'markdown': {
                                let t,
                                    a = o,
                                    g = H(n);
                                if (a.rendered && !a.inputHidden) {
                                    const c = t => () => {
                                            a.rendered
                                                ? ((e.content.mode = 'command'),
                                                  o.node.scrollIntoView(),
                                                  (e.content.activeCellIndex = l))
                                                : ((e.content.activeCellIndex = l),
                                                  t.scrollIntoView());
                                        },
                                        m = A(
                                            o.node,
                                            c,
                                            this.sanitizer,
                                            r,
                                            g,
                                            this.options.numbering,
                                            this.options.numberingH1,
                                            o,
                                            l,
                                            u
                                        );
                                    for (t of m)
                                        [n, i, s] = N(
                                            t,
                                            n,
                                            i,
                                            s,
                                            this.options.filtered,
                                            d,
                                            this.options.showMarkdown,
                                            h
                                        );
                                } else {
                                    const a = t => () => {
                                            (e.content.activeCellIndex = l),
                                                o.node.scrollIntoView();
                                        },
                                        m = M(c.value.text, a, r, g, o, l, u);
                                    for (t of m)
                                        [n, i, s] = N(
                                            t,
                                            n,
                                            i,
                                            s,
                                            this.options.filtered,
                                            d,
                                            this.options.showMarkdown,
                                            h
                                        );
                                }
                                break;
                            }
                        }
                        const g = n[n.length - 1];
                        g && (g.isRunning = Math.max(g.isRunning, u));
                    }
                    return n;
                }
            }
            function $(e) {
                let t = 'toc-level-size-' + e.level;
                return h.createElement(
                    'div',
                    { className: t + ' toc-entry-holder' },
                    h.createElement(
                        'div',
                        { className: 'jp-Collapser p-Widget lm-Widget' },
                        h.createElement('div', {
                            className: 'toc-Collapser-child',
                        })
                    ),
                    h.createElement(
                        'span',
                        { className: 'header-cell toc-cell-item' },
                        ' ',
                        e.text,
                        ' '
                    )
                );
            }
            function B(e) {
                let t = e.content.model.value.text.split('\n'),
                    n = [],
                    s = !1;
                for (let e = 0; e < t.length; e++) {
                    let i = t[e].trim();
                    0 === i.indexOf('def ')
                        ? ((s = !1),
                          n.push({
                              text: i.slice(0, -1),
                              level: 2,
                              onClick: r(e),
                          }))
                        : 0 === i.indexOf('class ')
                        ? ((s = !1),
                          n.push({
                              text: i.slice(0, -1),
                              level: 1,
                              onClick: r(e),
                          }))
                        : 0 != i.indexOf('import ') ||
                          s ||
                          ((s = !0),
                          n.push({ text: i, level: 2, onClick: r(e) }));
                }
                return n;
                function r(t) {
                    return () => {
                        e.content.editor.setCursorPosition({
                            line: t,
                            column: 0,
                        });
                    };
                }
            }
            function V(e) {
                let t = e.content.model.mimeType;
                return (
                    'application/x-python-code' === t || 'text/x-python' === t
                );
            }
            function q(e) {
                return {
                    tracker: e,
                    isEnabled: V,
                    itemRenderer: $,
                    generate: B,
                };
            }
            const K = new (n(26169).Token)(
                '@jupyterlab/toc:ITableOfContentsRegistry'
            );
            class J {
                constructor() {
                    (this._collapseChanged = new O.Signal(this)),
                        (this._generators = []);
                }
                find(e) {
                    for (let t = 0; t < this._generators.length; t++) {
                        const n = this._generators[t];
                        if (n.tracker.has(e)) {
                            if (n.isEnabled && !n.isEnabled(e)) continue;
                            return n;
                        }
                    }
                }
                add(e) {
                    e.collapseChanged &&
                        e.collapseChanged.connect((e, t) => {
                            this._collapseChanged.emit(t);
                        }),
                        this._generators.push(e);
                }
                get collapseChanged() {
                    return this._collapseChanged;
                }
            }
            var Y = n(96801),
                Q = n(86098),
                X = n(37711);
            class Z extends h.Component {
                render() {
                    const { heading: e, toc: t } = this.props;
                    let n = this.props.itemRenderer(e, t);
                    return n
                        ? h.createElement(
                              'li',
                              {
                                  className: 'jp-tocItem',
                                  onClick: t => {
                                      var n;
                                      t.preventDefault(),
                                          t.stopPropagation(),
                                          null ===
                                              (n = this.props.entryClicked) ||
                                              void 0 === n ||
                                              n.emit(this),
                                          e.onClick();
                                  },
                                  onContextMenu: t => {
                                      var n;
                                      null === (n = this.props.entryClicked) ||
                                          void 0 === n ||
                                          n.emit(this),
                                          e.onClick();
                                  },
                              },
                              n
                          )
                        : null;
                }
            }
            class ee extends h.Component {
                render() {
                    const e = this.props.toolbar;
                    let t = 0,
                        n = this.props.toc.map(e =>
                            h.createElement(Z, {
                                heading: e,
                                toc: this.props.toc,
                                entryClicked: this.props.entryClicked,
                                itemRenderer: this.props.itemRenderer,
                                key: `${e.text}-${e.level}-${t++}`,
                            })
                        );
                    return h.createElement(
                        'div',
                        { className: 'jp-TableOfContents' },
                        h.createElement(
                            'div',
                            { className: 'jp-stack-panel-header' },
                            this.props.title
                        ),
                        e && h.createElement(e, null),
                        h.createElement(
                            'ul',
                            { className: 'jp-TableOfContents-content' },
                            n
                        )
                    );
                }
            }
            class te extends Q.Widget {
                constructor(e) {
                    super(),
                        (this.translator = e.translator || o.nullTranslator),
                        (this._docmanager = e.docmanager),
                        (this._rendermime = e.rendermime),
                        (this._trans = this.translator.load('jupyterlab')),
                        (this._headings = []),
                        (this._entryClicked = new O.Signal(this)),
                        this._entryClicked.connect((e, t) => {
                            this.activeEntry = t.props.heading;
                        }),
                        this._current &&
                            (this._headings = this._current.generator.generate(
                                this._current.widget,
                                this._current.generator.options
                            ));
                }
                get current() {
                    return this._current;
                }
                set current(e) {
                    if (
                        e &&
                        this._current &&
                        this._current.widget === e.widget &&
                        this._current.generator === e.generator
                    )
                        return;
                    if (
                        ((this._current = e),
                        this.generator &&
                            (this.generator.toolbarGenerator
                                ? (this._toolbar = this.generator.toolbarGenerator())
                                : (this._toolbar = null)),
                        this._monitor &&
                            (this._monitor.dispose(), (this._monitor = null)),
                        !this._current)
                    )
                        return void this.update();
                    const t = this._docmanager.contextForWidget(
                        this._current.widget
                    );
                    if (!t || !t.model)
                        throw Error(
                            'Could not find a context for the Table of Contents'
                        );
                    (this._monitor = new Y.ActivityMonitor({
                        signal: t.model.contentChanged,
                        timeout: 1e3,
                    })),
                        this._monitor.activityStopped.connect(
                            this.update,
                            this
                        ),
                        this.update();
                }
                get generator() {
                    return this._current ? this._current.generator : null;
                }
                onUpdateRequest(e) {
                    if (this.isHidden) return;
                    let t = this._trans.__('Table of Contents');
                    if (this._current) {
                        this._headings = this._current.generator.generate(
                            this._current.widget,
                            this._current.generator.options
                        );
                        const e = this._docmanager.contextForWidget(
                            this._current.widget
                        );
                        e && (t = Y.PathExt.basename(e.localPath));
                    }
                    let n = e => h.createElement('span', null, e.text);
                    this._current &&
                        this._current.generator.itemRenderer &&
                        (n = this._current.generator.itemRenderer);
                    let s = h.createElement(
                        'div',
                        { className: 'jp-TableOfContents' },
                        h.createElement(
                            'div',
                            { className: 'jp-stack-panel-header' },
                            t
                        )
                    );
                    this._current &&
                        this._current.generator &&
                        (s = h.createElement(ee, {
                            title: t,
                            toc: this._headings,
                            entryClicked: this._entryClicked,
                            generator: this.generator,
                            itemRenderer: n,
                            toolbar: this._toolbar,
                        })),
                        X.render(s, this.node, () => {
                            this._current &&
                                !0 === this._current.generator.usesLatex &&
                                this._rendermime.latexTypesetter &&
                                this._rendermime.latexTypesetter.typeset(
                                    this.node
                                );
                        });
                }
                get activeEntry() {
                    return this._activeEntry;
                }
                set activeEntry(e) {
                    this._activeEntry = e;
                }
                get headings() {
                    return this._headings;
                }
                onAfterShow(e) {
                    this.update();
                }
            }
        },
    },
]);
//# sourceMappingURL=8828.e7d9c9e.js.map
