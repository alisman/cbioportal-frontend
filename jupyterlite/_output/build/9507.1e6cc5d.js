'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [9507],
    {
        41228: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                ".jp-cell-button .jp-icon3[fill] {\n  fill: var(--jp-inverse-layout-color4);\n}\n\n.jp-cell-button:hover .jp-icon3[fill] {\n  fill: var(--jp-inverse-layout-color2);\n}\n\n.jp-toolbar-overlap .jp-cell-toolbar {\n  display: none;\n}\n\n.jp-cell-toolbar {\n  display: flex;\n  flex-direction: row;\n  padding: 2px 0;\n  min-height: 25px;\n  z-index: 6;\n  position: absolute;\n  top: 5px;\n  right: 8px;\n\n  /* Override .jp-Toolbar */\n  background-color: inherit;\n  border-bottom: inherit;\n  box-shadow: inherit;\n}\n\n/* Overrides for mobile view: Move cell toolbar up, don't hide it if it overlaps */\n@media only screen and (max-width: 760px) {\n  .jp-toolbar-overlap .jp-cell-toolbar {\n    display: flex;\n  }\n\n  .jp-cell-toolbar {\n    top: -5px;\n  }\n}\n\n.jp-cell-menu {\n  display: flex;\n  flex-direction: row;\n}\n\n.jp-cell-menu button.jp-ToolbarButtonComponent {\n  cursor: pointer;\n}\n\n.jp-cell-menu .jp-ToolbarButton button {\n  display: none;\n}\n\n.jp-cell-menu .jp-ToolbarButton .jp-cell-all,\n.jp-CodeCell .jp-ToolbarButton .jp-cell-code,\n.jp-MarkdownCell .jp-ToolbarButton .jp-cell-markdown,\n.jp-RawCell .jp-ToolbarButton .jp-cell-raw {\n  display: block;\n}\n\n.jp-cell-toolbar .jp-Toolbar-spacer {\n  flex: 1 1 auto;\n}\n\n.jp-cell-mod-click {\n  cursor: pointer;\n}\n\n/* Custom styling for rendered markdown cells so that cell toolbar is visible */\n.jp-MarkdownOutput {\n  border-width: var(--jp-border-width);\n  border-color: transparent;\n  border-style: solid;\n}\n\n.jp-mod-active .jp-MarkdownOutput {\n  border-color: var(--jp-cell-editor-border-color);\n}\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/cell-toolbar/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;EACE,qCAAqC;AACvC;;AAEA;EACE,qCAAqC;AACvC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,cAAc;EACd,gBAAgB;EAChB,UAAU;EACV,kBAAkB;EAClB,QAAQ;EACR,UAAU;;EAEV,yBAAyB;EACzB,yBAAyB;EACzB,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA,kFAAkF;AAClF;EACE;IACE,aAAa;EACf;;EAEA;IACE,SAAS;EACX;AACF;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;;;;EAIE,cAAc;AAChB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA,+EAA+E;AAC/E;EACE,oCAAoC;EACpC,yBAAyB;EACzB,mBAAmB;AACrB;;AAEA;EACE,gDAAgD;AAClD',
                    sourcesContent: [
                        ".jp-cell-button .jp-icon3[fill] {\n  fill: var(--jp-inverse-layout-color4);\n}\n\n.jp-cell-button:hover .jp-icon3[fill] {\n  fill: var(--jp-inverse-layout-color2);\n}\n\n.jp-toolbar-overlap .jp-cell-toolbar {\n  display: none;\n}\n\n.jp-cell-toolbar {\n  display: flex;\n  flex-direction: row;\n  padding: 2px 0;\n  min-height: 25px;\n  z-index: 6;\n  position: absolute;\n  top: 5px;\n  right: 8px;\n\n  /* Override .jp-Toolbar */\n  background-color: inherit;\n  border-bottom: inherit;\n  box-shadow: inherit;\n}\n\n/* Overrides for mobile view: Move cell toolbar up, don't hide it if it overlaps */\n@media only screen and (max-width: 760px) {\n  .jp-toolbar-overlap .jp-cell-toolbar {\n    display: flex;\n  }\n\n  .jp-cell-toolbar {\n    top: -5px;\n  }\n}\n\n.jp-cell-menu {\n  display: flex;\n  flex-direction: row;\n}\n\n.jp-cell-menu button.jp-ToolbarButtonComponent {\n  cursor: pointer;\n}\n\n.jp-cell-menu .jp-ToolbarButton button {\n  display: none;\n}\n\n.jp-cell-menu .jp-ToolbarButton .jp-cell-all,\n.jp-CodeCell .jp-ToolbarButton .jp-cell-code,\n.jp-MarkdownCell .jp-ToolbarButton .jp-cell-markdown,\n.jp-RawCell .jp-ToolbarButton .jp-cell-raw {\n  display: block;\n}\n\n.jp-cell-toolbar .jp-Toolbar-spacer {\n  flex: 1 1 auto;\n}\n\n.jp-cell-mod-click {\n  cursor: pointer;\n}\n\n/* Custom styling for rendered markdown cells so that cell toolbar is visible */\n.jp-MarkdownOutput {\n  border-width: var(--jp-border-width);\n  border-color: transparent;\n  border-style: solid;\n}\n\n.jp-mod-active .jp-MarkdownOutput {\n  border-color: var(--jp-cell-editor-border-color);\n}\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        44734: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n#filebrowser.jp-mod-restoring .jp-DirListing-content {\n  display: none;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/filebrowser-extension/style/base.css',
                    ],
                    names: [],
                    mappings: 'AAAA;;;8EAG8E;;AAE9E;EACE,aAAa;AACf',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n#filebrowser.jp-mod-restoring .jp-DirListing-content {\n  display: none;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        49043: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-LogConsolePanel {\n  overflow-y: auto;\n}\n\n.jp-LogConsolePanel .jp-OutputArea-child {\n  border-bottom: 1px solid var(--jp-border-color3);\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt {\n  width: 85px;\n  color: var(--jp-ui-font-color2);\n  font-size: 13px;\n  padding: 2px;\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt[data-log-level='info'] {\n  background-color: var(--jp-info-color1);\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt[data-log-level='warning'] {\n  background-color: var(--jp-warn-color1);\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt[data-log-level='error'] {\n  background-color: var(--jp-error-color1);\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt[data-log-level='critical'] {\n  background-color: var(--jp-error-color0);\n  color: var(--jp-ui-inverse-font-color0);\n}\n\n.jp-LogConsoleListPlaceholder {\n  padding: 5px;\n  font-size: 13px;\n  color: var(--jp-ui-font-color3);\n}\n\n.jp-Scrolling {\n  overflow-y: auto;\n}\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/logconsole/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;EACE,gBAAgB;AAClB;;AAEA;EACE,gDAAgD;AAClD;;AAEA;EACE,WAAW;EACX,+BAA+B;EAC/B,eAAe;EACf,YAAY;AACd;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;EACvC,uCAAuC;AACzC;;AAEA;EACE,wCAAwC;EACxC,uCAAuC;AACzC;;AAEA;EACE,wCAAwC;EACxC,uCAAuC;AACzC;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;AAClB',
                    sourcesContent: [
                        "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-LogConsolePanel {\n  overflow-y: auto;\n}\n\n.jp-LogConsolePanel .jp-OutputArea-child {\n  border-bottom: 1px solid var(--jp-border-color3);\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt {\n  width: 85px;\n  color: var(--jp-ui-font-color2);\n  font-size: 13px;\n  padding: 2px;\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt[data-log-level='info'] {\n  background-color: var(--jp-info-color1);\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt[data-log-level='warning'] {\n  background-color: var(--jp-warn-color1);\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt[data-log-level='error'] {\n  background-color: var(--jp-error-color1);\n  color: var(--jp-ui-inverse-font-color1);\n}\n\n.jp-LogConsolePanel .jp-OutputArea-prompt[data-log-level='critical'] {\n  background-color: var(--jp-error-color0);\n  color: var(--jp-ui-inverse-font-color0);\n}\n\n.jp-LogConsoleListPlaceholder {\n  padding: 5px;\n  font-size: 13px;\n  color: var(--jp-ui-font-color3);\n}\n\n.jp-Scrolling {\n  overflow-y: auto;\n}\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        78962: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-RetroSpacer {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.jp-MainAreaWidget {\n  height: 100%;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@retrolab/application-extension/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;8EAI8E;;AAE9E;EACE,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,YAAY;AACd',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-RetroSpacer {\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.jp-MainAreaWidget {\n  height: 100%;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        14218: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-topbar-height: 28px;\n  /* Override the layout-2 color for the dark theme */\n  --md-grey-800: #323232;\n  --jp-notebook-max-width: 1200px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--jp-layout-color2);\n}\n\n#main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#top-panel-wrapper {\n  min-height: calc(1.5 * var(--jp-private-topbar-height));\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color0);\n  background: var(--jp-layout-color1);\n}\n\n#top-panel {\n  display: flex;\n  min-height: calc(1.5 * var(--jp-private-topbar-height));\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n}\n\n#menu-panel-wrapper {\n  min-height: var(--jp-private-topbar-height);\n  background: var(--jp-layout-color1);\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color0);\n  box-shadow: var(--jp-elevation-z1);\n}\n\n#menu-panel {\n  display: flex;\n  min-height: var(--jp-private-topbar-height);\n  background: var(--jp-layout-color1);\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: var(--jp-notebook-max-width);\n}\n\n#main-panel {\n  box-shadow: var(--jp-elevation-z4);\n  margin-left: auto;\n  margin-right: auto;\n  max-width: var(--jp-notebook-max-width);\n}\n\n#spacer-widget {\n  min-height: 16px;\n}\n\n/* Special case notebooks as document oriented pages */\n\nbody[data-retro='notebooks'] #main-panel {\n  margin-left: unset;\n  margin-right: unset;\n  max-width: unset;\n}\n\nbody[data-retro='notebooks'] #spacer-widget {\n  min-height: unset;\n}\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@retrolab/application/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;EACE,gCAAgC;EAChC,mDAAmD;EACnD,sBAAsB;EACtB,+BAA+B;AACjC;;AAEA;EACE,SAAS;EACT,UAAU;EACV,mCAAmC;AACrC;;AAEA;EACE,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,uDAAuD;EACvD,mEAAmE;EACnE,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,uDAAuD;EACvD,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,2CAA2C;EAC3C,mCAAmC;EACnC,mEAAmE;EACnE,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,2CAA2C;EAC3C,mCAAmC;EACnC,iBAAiB;EACjB,kBAAkB;EAClB,iBAAiB;EACjB,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,kCAAkC;EAClC,iBAAiB;EACjB,kBAAkB;EAClB,uCAAuC;AACzC;;AAEA;EACE,gBAAgB;AAClB;;AAEA,sDAAsD;;AAEtD;EACE,kBAAkB;EAClB,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;AACnB',
                    sourcesContent: [
                        "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-topbar-height: 28px;\n  /* Override the layout-2 color for the dark theme */\n  --md-grey-800: #323232;\n  --jp-notebook-max-width: 1200px;\n}\n\nbody {\n  margin: 0;\n  padding: 0;\n  background: var(--jp-layout-color2);\n}\n\n#main {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n}\n\n#top-panel-wrapper {\n  min-height: calc(1.5 * var(--jp-private-topbar-height));\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color0);\n  background: var(--jp-layout-color1);\n}\n\n#top-panel {\n  display: flex;\n  min-height: calc(1.5 * var(--jp-private-topbar-height));\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: 1200px;\n}\n\n#menu-panel-wrapper {\n  min-height: var(--jp-private-topbar-height);\n  background: var(--jp-layout-color1);\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color0);\n  box-shadow: var(--jp-elevation-z1);\n}\n\n#menu-panel {\n  display: flex;\n  min-height: var(--jp-private-topbar-height);\n  background: var(--jp-layout-color1);\n  padding-left: 5px;\n  padding-right: 5px;\n  margin-left: auto;\n  margin-right: auto;\n  max-width: var(--jp-notebook-max-width);\n}\n\n#main-panel {\n  box-shadow: var(--jp-elevation-z4);\n  margin-left: auto;\n  margin-right: auto;\n  max-width: var(--jp-notebook-max-width);\n}\n\n#spacer-widget {\n  min-height: 16px;\n}\n\n/* Special case notebooks as document oriented pages */\n\nbody[data-retro='notebooks'] #main-panel {\n  margin-left: unset;\n  margin-right: unset;\n  max-width: unset;\n}\n\nbody[data-retro='notebooks'] #spacer-widget {\n  min-height: unset;\n}\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        44869: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                '.jp-Document {\n  height: 100%;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@retrolab/docmanager-extension/style/base.css',
                    ],
                    names: [],
                    mappings: 'AAAA;EACE,YAAY;AACd',
                    sourcesContent: ['.jp-Document {\n  height: 100%;\n}\n'],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        76064: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                '.jp-AboutRetro .jp-Dialog-header {\n  justify-content: center;\n}\n\n.jp-AboutRetro-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: var(--jp-flat-button-padding);\n}\n\n.jp-AboutRetro-header-text {\n  margin-left: 16px;\n}\n\n.jp-AboutRetro-body {\n  display: flex;\n  font-size: var(--jp-ui-font-size2);\n  padding: var(--jp-flat-button-padding);\n  color: var(--jp-ui-font-color1);\n  text-align: left;\n  flex-direction: column;\n  min-width: 360px;\n  overflow: hidden;\n}\n\n.jp-AboutRetro-about-body pre {\n  white-space: pre-wrap;\n}\n\n.jp-AboutRetro-about-externalLinks {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-top: 12px;\n  color: var(--jp-warn-color0);\n}\n\n.jp-AboutRetro-shortcuts {\n  padding: 10px;\n}\n\n.jp-AboutRetro-shortcuts pre {\n  padding: 5px;\n  margin: 0 0 10px;\n  background: var(--jp-layout-color2);\n  border: 1px solid var(--jp-border-color0);\n  border-radius: 2px;\n  word-break: break-all;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@retrolab/help-extension/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;EACE,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,sCAAsC;AACxC;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,kCAAkC;EAClC,sCAAsC;EACtC,+BAA+B;EAC/B,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,2BAA2B;EAC3B,uBAAuB;EACvB,iBAAiB;EACjB,4BAA4B;AAC9B;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,mCAAmC;EACnC,yCAAyC;EACzC,kBAAkB;EAClB,qBAAqB;AACvB',
                    sourcesContent: [
                        '.jp-AboutRetro .jp-Dialog-header {\n  justify-content: center;\n}\n\n.jp-AboutRetro-header {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: var(--jp-flat-button-padding);\n}\n\n.jp-AboutRetro-header-text {\n  margin-left: 16px;\n}\n\n.jp-AboutRetro-body {\n  display: flex;\n  font-size: var(--jp-ui-font-size2);\n  padding: var(--jp-flat-button-padding);\n  color: var(--jp-ui-font-color1);\n  text-align: left;\n  flex-direction: column;\n  min-width: 360px;\n  overflow: hidden;\n}\n\n.jp-AboutRetro-about-body pre {\n  white-space: pre-wrap;\n}\n\n.jp-AboutRetro-about-externalLinks {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: flex-start;\n  padding-top: 12px;\n  color: var(--jp-warn-color0);\n}\n\n.jp-AboutRetro-shortcuts {\n  padding: 10px;\n}\n\n.jp-AboutRetro-shortcuts pre {\n  padding: 5px;\n  margin: 0 0 10px;\n  background: var(--jp-layout-color2);\n  border: 1px solid var(--jp-border-color0);\n  border-radius: 2px;\n  word-break: break-all;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        69023: (n, o, e) => {
            e.d(o, { Z: () => p });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A),
                l = e(38709),
                i = a()(r());
            i.i(l.Z),
                i.push([
                    n.id,
                    "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/* Document oriented look for the notebook (scrollbar to the right of the page) */\n\nbody[data-retro='notebooks'] .jp-NotebookPanel-toolbar {\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n}\n\nbody[data-retro='notebooks'] .jp-Notebook > * {\n  background: var(--jp-layout-color0);\n  padding: var(--jp-notebook-padding);\n}\n\nbody[data-retro='notebooks']\n  .jp-Notebook.jp-mod-commandMode\n  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {\n  background: var(--jp-layout-color0) !important;\n}\n\nbody[data-retro='notebooks'] .jp-Notebook > *:first-child {\n  padding-top: var(--jp-notebook-padding-offset);\n  margin-top: var(--jp-notebook-toolbar-margin-bottom);\n}\n\nbody[data-retro='notebooks'] .jp-Notebook {\n  padding-top: unset;\n  padding-bottom: unset;\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(\n    calc(\n        100% - var(--jp-notebook-max-width) - var(--jp-notebook-padding-offset)\n      ) * 0.5\n  );\n  background: var(--jp-layout-color2);\n}\n\nbody[data-retro='notebooks'] .jp-Notebook.jp-mod-scrollPastEnd::after {\n  background: var(--jp-layout-color0);\n  min-height: var(--jp-notebook-padding);\n}\n\n/* Cell toolbar adjustements */\n\nbody[data-retro='notebooks'] .jp-cell-toolbar {\n  background: unset;\n  top: unset;\n}\n\n/* ---- */\n\n.jp-RetroKernelLogo {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-right: 8px;\n}\n\n.jp-RetroKernelLogo img {\n  max-width: 28px;\n  max-height: 28px;\n  display: flex;\n}\n\n.jp-RetroKernelStatus {\n  margin: 0;\n  font-weight: normal;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: var(--jp-private-title-panel-height);\n  padding-left: var(--jp-kernel-status-padding);\n  padding-right: var(--jp-kernel-status-padding);\n}\n\n.jp-RetroKernelStatus-error {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-RetroKernelStatus-warn {\n  background-color: var(--jp-warn-color0);\n}\n\n.jp-RetroKernelStatus-info {\n  background-color: var(--jp-info-color0);\n}\n\n.jp-RetroKernelStatus-fade {\n  animation: 0.5s fade-out forwards;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n#jp-title h1 {\n  cursor: pointer;\n  font-size: 18px;\n  margin: 0;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n#jp-title h1:hover {\n  background: var(--jp-layout-color2);\n}\n\n.jp-RetroCheckpoint {\n  font-size: 14px;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n/* Mobile View */\n\nbody[data-format='mobile'] .jp-RetroCheckpoint {\n  display: none;\n}\n\nbody[data-format='mobile'] .jp-Notebook > *:first-child {\n  margin-top: 0;\n}\n",
                    '',
                    {
                        version: 3,
                        sources: [
                            'webpack://./../node_modules/@retrolab/notebook-extension/style/base.css',
                        ],
                        names: [],
                        mappings:
                            'AAAA;;;;8EAI8E;;AAI9E,iFAAiF;;AAEjF;EACE,mEAAmE;EACnE,oEAAoE;AACtE;;AAEA;EACE,mCAAmC;EACnC,mCAAmC;AACrC;;AAEA;;;EAGE,8CAA8C;AAChD;;AAEA;EACE,8CAA8C;EAC9C,oDAAoD;AACtD;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,mEAAmE;EACnE;;;;GAIC;EACD,mCAAmC;AACrC;;AAEA;EACE,mCAAmC;EACnC,sCAAsC;AACxC;;AAEA,8BAA8B;;AAE9B;EACE,iBAAiB;EACjB,UAAU;AACZ;;AAEA,SAAS;;AAET;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,aAAa;AACf;;AAEA;EACE,SAAS;EACT,mBAAmB;EACnB,kCAAkC;EAClC,+BAA+B;EAC/B,qCAAqC;EACrC,iDAAiD;EACjD,6CAA6C;EAC7C,8CAA8C;AAChD;;AAEA;EACE,wCAAwC;AAC1C;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,uCAAuC;AACzC;;AAEA;EACE,iCAAiC;AACnC;;AAEA;EACE;IACE,UAAU;EACZ;EACA;IACE,UAAU;EACZ;AACF;;AAEA;EACE,eAAe;EACf,eAAe;EACf,SAAS;EACT,mBAAmB;EACnB,+BAA+B;EAC/B,qCAAqC;EACrC,6DAA6D;EAC7D,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,mBAAmB;EACnB,+BAA+B;EAC/B,qCAAqC;EACrC,6DAA6D;EAC7D,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA,gBAAgB;;AAEhB;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf',
                        sourcesContent: [
                            "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n|\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n@import './variables.css';\n\n/* Document oriented look for the notebook (scrollbar to the right of the page) */\n\nbody[data-retro='notebooks'] .jp-NotebookPanel-toolbar {\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n}\n\nbody[data-retro='notebooks'] .jp-Notebook > * {\n  background: var(--jp-layout-color0);\n  padding: var(--jp-notebook-padding);\n}\n\nbody[data-retro='notebooks']\n  .jp-Notebook.jp-mod-commandMode\n  .jp-Cell.jp-mod-active.jp-mod-selected:not(.jp-mod-multiSelected) {\n  background: var(--jp-layout-color0) !important;\n}\n\nbody[data-retro='notebooks'] .jp-Notebook > *:first-child {\n  padding-top: var(--jp-notebook-padding-offset);\n  margin-top: var(--jp-notebook-toolbar-margin-bottom);\n}\n\nbody[data-retro='notebooks'] .jp-Notebook {\n  padding-top: unset;\n  padding-bottom: unset;\n  padding-left: calc(calc(100% - var(--jp-notebook-max-width)) * 0.5);\n  padding-right: calc(\n    calc(\n        100% - var(--jp-notebook-max-width) - var(--jp-notebook-padding-offset)\n      ) * 0.5\n  );\n  background: var(--jp-layout-color2);\n}\n\nbody[data-retro='notebooks'] .jp-Notebook.jp-mod-scrollPastEnd::after {\n  background: var(--jp-layout-color0);\n  min-height: var(--jp-notebook-padding);\n}\n\n/* Cell toolbar adjustements */\n\nbody[data-retro='notebooks'] .jp-cell-toolbar {\n  background: unset;\n  top: unset;\n}\n\n/* ---- */\n\n.jp-RetroKernelLogo {\n  flex: 0 0 auto;\n  display: flex;\n  align-items: center;\n  text-align: center;\n  margin-right: 8px;\n}\n\n.jp-RetroKernelLogo img {\n  max-width: 28px;\n  max-height: 28px;\n  display: flex;\n}\n\n.jp-RetroKernelStatus {\n  margin: 0;\n  font-weight: normal;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: var(--jp-private-title-panel-height);\n  padding-left: var(--jp-kernel-status-padding);\n  padding-right: var(--jp-kernel-status-padding);\n}\n\n.jp-RetroKernelStatus-error {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-RetroKernelStatus-warn {\n  background-color: var(--jp-warn-color0);\n}\n\n.jp-RetroKernelStatus-info {\n  background-color: var(--jp-info-color0);\n}\n\n.jp-RetroKernelStatus-fade {\n  animation: 0.5s fade-out forwards;\n}\n\n@keyframes fade-out {\n  0% {\n    opacity: 1;\n  }\n  100% {\n    opacity: 0;\n  }\n}\n\n#jp-title h1 {\n  cursor: pointer;\n  font-size: 18px;\n  margin: 0;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n#jp-title h1:hover {\n  background: var(--jp-layout-color2);\n}\n\n.jp-RetroCheckpoint {\n  font-size: 14px;\n  margin-left: 5px;\n  margin-right: 5px;\n  font-weight: normal;\n  color: var(--jp-ui-font-color0);\n  font-family: var(--jp-ui-font-family);\n  line-height: calc(1.5 * var(--jp-private-title-panel-height));\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n/* Mobile View */\n\nbody[data-format='mobile'] .jp-RetroCheckpoint {\n  display: none;\n}\n\nbody[data-format='mobile'] .jp-Notebook > *:first-child {\n  margin-top: 0;\n}\n",
                        ],
                        sourceRoot: '',
                    },
                ]);
            const p = i;
        },
        38709: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                ':root {\n  --jp-notebook-toolbar-margin-bottom: 20px;\n  --jp-notebook-padding-offset: 20px;\n\n  --jp-kernel-status-padding: 5px;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@retrolab/notebook-extension/style/variables.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;EACE,yCAAyC;EACzC,kCAAkC;;EAElC,+BAA+B;AACjC',
                    sourcesContent: [
                        ':root {\n  --jp-notebook-toolbar-margin-bottom: 20px;\n  --jp-notebook-padding-offset: 20px;\n\n  --jp-kernel-status-padding: 5px;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        55962: (n, o, e) => {
            e.d(o, { Z: () => l });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                a = e.n(A)()(r());
            a.push([
                n.id,
                '.jp-FileBrowser {\n  height: 100%;\n}\n\n.lm-TabPanel {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabPanel-tabBar {\n  overflow: visible;\n  min-height: 32px;\n  border-bottom: unset;\n  height: var(--jp-private-toolbar-height);\n}\n\n.jp-TreePanel .lm-TabBar-content {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tab {\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size1);\n  padding-top: 6px;\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tabLabel {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n/* Override the style from upstream JupyterLab */\n.jp-FileBrowser-toolbar.jp-Toolbar\n  .jp-Toolbar-item:first-child\n  .jp-ToolbarButtonComponent {\n  width: auto;\n  background: unset;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.jp-FileBrowser-toolbar.jp-Toolbar\n  .jp-Toolbar-item:first-child\n  .jp-ToolbarButtonComponent:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {\n  width: unset;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@retrolab/tree-extension/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,wCAAwC;AAC1C;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA,gDAAgD;AAChD;;;EAGE,WAAW;EACX,iBAAiB;EACjB,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;;;EAGE,yCAAyC;AAC3C;;AAEA;EACE,YAAY;AACd',
                    sourcesContent: [
                        '.jp-FileBrowser {\n  height: 100%;\n}\n\n.lm-TabPanel {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabPanel-tabBar {\n  overflow: visible;\n  min-height: 32px;\n  border-bottom: unset;\n  height: var(--jp-private-toolbar-height);\n}\n\n.jp-TreePanel .lm-TabBar-content {\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tab {\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size1);\n  padding-top: 6px;\n  height: 100%;\n}\n\n.jp-TreePanel .lm-TabBar-tabLabel {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n/* Override the style from upstream JupyterLab */\n.jp-FileBrowser-toolbar.jp-Toolbar\n  .jp-Toolbar-item:first-child\n  .jp-ToolbarButtonComponent {\n  width: auto;\n  background: unset;\n  padding-left: 5px;\n  padding-right: 5px;\n}\n\n.jp-FileBrowser-toolbar.jp-Toolbar\n  .jp-Toolbar-item:first-child\n  .jp-ToolbarButtonComponent:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-FileBrowser-toolbar.jp-Toolbar .jp-ToolbarButtonComponent {\n  width: unset;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const l = a;
        },
        91778: (n, o, e) => {
            e(7819), e(26473), e(47317), e(1228), e(5316), e(82665);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                a = e.n(A),
                l = e(38311),
                i = e.n(l),
                p = e(58192),
                d = e.n(p),
                s = e(38060),
                C = e.n(s),
                c = e(54865),
                u = e.n(c),
                b = e(41228),
                E = {};
            (E.styleTagTransform = u()),
                (E.setAttributes = d()),
                (E.insert = i().bind(null, 'head')),
                (E.domAPI = a()),
                (E.insertStyleElement = C()),
                r()(b.Z, E),
                b.Z && b.Z.locals && b.Z.locals;
        },
        45010: (n, o, e) => {
            e(47317),
                e(85637),
                e(7819),
                e(13277),
                e(1228),
                e(26473),
                e(56589),
                e(71644),
                e(8542);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                a = e.n(A),
                l = e(38311),
                i = e.n(l),
                p = e(58192),
                d = e.n(p),
                s = e(38060),
                C = e.n(s),
                c = e(54865),
                u = e.n(c),
                b = e(44734),
                E = {};
            (E.styleTagTransform = u()),
                (E.setAttributes = d()),
                (E.insert = i().bind(null, 'head')),
                (E.domAPI = a()),
                (E.insertStyleElement = C()),
                r()(b.Z, E),
                b.Z && b.Z.locals && b.Z.locals;
        },
        38786: (n, o, e) => {
            e(47317),
                e(85637),
                e(7819),
                e(32887),
                e(13277),
                e(27733),
                e(1228),
                e(26473),
                e(71644),
                e(66465),
                e(4168),
                e(8542),
                e(82892);
        },
        1336: (n, o, e) => {
            e(47317), e(98417), e(88754);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                a = e.n(A),
                l = e(38311),
                i = e.n(l),
                p = e(58192),
                d = e.n(p),
                s = e(38060),
                C = e.n(s),
                c = e(54865),
                u = e.n(c),
                b = e(49043),
                E = {};
            (E.styleTagTransform = u()),
                (E.setAttributes = d()),
                (E.insert = i().bind(null, 'head')),
                (E.domAPI = a()),
                (E.insertStyleElement = C()),
                r()(b.Z, E),
                b.Z && b.Z.locals && b.Z.locals;
        },
        70453: (n, o, e) => {
            e(47317), e(85637), e(7819), e(26473), e(82892);
        },
        10389: (n, o, e) => {
            e(47317),
                e(85637),
                e(7819),
                e(32887),
                e(13277),
                e(98417),
                e(1228),
                e(26473),
                e(56589),
                e(71644),
                e(5316),
                e(9123),
                e(8542),
                e(1336),
                e(82892),
                e(82665),
                e(13107);
        },
        72073: (n, o, e) => {
            e(26473), e(82892), e(85637);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                a = e.n(A),
                l = e(38311),
                i = e.n(l),
                p = e(58192),
                d = e.n(p),
                s = e(38060),
                C = e.n(s),
                c = e(54865),
                u = e.n(c),
                b = e(14218),
                E = {};
            (E.styleTagTransform = u()),
                (E.setAttributes = d()),
                (E.insert = i().bind(null, 'head')),
                (E.domAPI = a()),
                (E.insertStyleElement = C()),
                r()(b.Z, E),
                b.Z && b.Z.locals && b.Z.locals,
                e(47317);
            var m = e(78962),
                g = {};
            (g.styleTagTransform = u()),
                (g.setAttributes = d()),
                (g.insert = i().bind(null, 'head')),
                (g.domAPI = a()),
                (g.insertStyleElement = C()),
                r()(m.Z, g),
                m.Z && m.Z.locals && m.Z.locals;
        },
        96587: (n, o, e) => {
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                a = e.n(A),
                l = e(38311),
                i = e.n(l),
                p = e(58192),
                d = e.n(p),
                s = e(38060),
                C = e.n(s),
                c = e(54865),
                u = e.n(c),
                b = e(44869),
                E = {};
            (E.styleTagTransform = u()),
                (E.setAttributes = d()),
                (E.insert = i().bind(null, 'head')),
                (E.domAPI = a()),
                (E.insertStyleElement = C()),
                r()(b.Z, E),
                b.Z && b.Z.locals && b.Z.locals;
        },
        90381: (n, o, e) => {
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                a = e.n(A),
                l = e(38311),
                i = e.n(l),
                p = e(58192),
                d = e.n(p),
                s = e(38060),
                C = e.n(s),
                c = e(54865),
                u = e.n(c),
                b = e(76064),
                E = {};
            (E.styleTagTransform = u()),
                (E.setAttributes = d()),
                (E.insert = i().bind(null, 'head')),
                (E.domAPI = a()),
                (E.insertStyleElement = C()),
                r()(b.Z, E),
                b.Z && b.Z.locals && b.Z.locals;
        },
        28586: (n, o, e) => {
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                a = e.n(A),
                l = e(38311),
                i = e.n(l),
                p = e(58192),
                d = e.n(p),
                s = e(38060),
                C = e.n(s),
                c = e(54865),
                u = e.n(c),
                b = e(69023),
                E = {};
            (E.styleTagTransform = u()),
                (E.setAttributes = d()),
                (E.insert = i().bind(null, 'head')),
                (E.domAPI = a()),
                (E.insertStyleElement = C()),
                r()(b.Z, E),
                b.Z && b.Z.locals && b.Z.locals;
        },
        40250: (n, o, e) => {
            e(71644);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                a = e.n(A),
                l = e(38311),
                i = e.n(l),
                p = e(58192),
                d = e.n(p),
                s = e(38060),
                C = e.n(s),
                c = e(54865),
                u = e.n(c),
                b = e(55962),
                E = {};
            (E.styleTagTransform = u()),
                (E.setAttributes = d()),
                (E.insert = i().bind(null, 'head')),
                (E.domAPI = a()),
                (E.insertStyleElement = C()),
                r()(b.Z, E),
                b.Z && b.Z.locals && b.Z.locals;
        },
    },
]);
//# sourceMappingURL=9507.1e6cc5d.js.map
