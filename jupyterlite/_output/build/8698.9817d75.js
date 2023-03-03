'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8698],
    {
        41228: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
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
            const a = i;
        },
        58288: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                '.tag {\n  height: 20px;\n  border-radius: 10px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  padding: 0px 8px;\n  font-size: var(--jp-ui-font-size1);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  max-width: calc(100% - 25px);\n  border: 1px solid var(--jp-border-color1);\n  color: var(--jp-ui-font-color1);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.unapplied-tag {\n  background-color: var(--jp-layout-color2);\n}\n\n.applied-tag {\n  background-color: var(--jp-layout-color3);\n}\n\n.add-tag {\n  white-space: nowrap;\n  overflow: hidden;\n  border: none;\n  outline: none;\n  resize: horizontal;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color2);\n}\n\n.tag-holder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tag-label {\n  flex: 0 0 auto;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color1);\n  padding: 0px 12px;\n}\n\n/* Need a more specific selector to override another rule on .jp-NotebookTools children. */\n.jp-NotebookTools .tag-label {\n  margin: 0px;\n}\n\n/* Need a more specific selector to override another rule .jp-NotebookTools children. */\n.jp-NotebookTools div.jp-TagTool {\n  margin-top: 4px;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/celltags/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;EACE,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,mBAAmB;EACnB,gBAAgB;EAChB,kCAAkC;EAClC,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,yCAAyC;EACzC,+BAA+B;EAC/B,2BAA2B;EAC3B,yBAAyB;EACzB,wBAAwB;EACxB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;EAChB,YAAY;EACZ,aAAa;EACb,kBAAkB;EAClB,kCAAkC;EAClC,+BAA+B;EAC/B,mCAAmC;AACrC;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,kCAAkC;EAClC,+BAA+B;EAC/B,iBAAiB;AACnB;;AAEA,0FAA0F;AAC1F;EACE,WAAW;AACb;;AAEA,uFAAuF;AACvF;EACE,eAAe;AACjB',
                    sourcesContent: [
                        '.tag {\n  height: 20px;\n  border-radius: 10px;\n  margin-right: 5px;\n  margin-bottom: 10px;\n  padding: 0px 8px;\n  font-size: var(--jp-ui-font-size1);\n  display: inline-flex;\n  justify-content: center;\n  align-items: center;\n  max-width: calc(100% - 25px);\n  border: 1px solid var(--jp-border-color1);\n  color: var(--jp-ui-font-color1);\n  -webkit-touch-callout: none;\n  -webkit-user-select: none;\n  -khtml-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.unapplied-tag {\n  background-color: var(--jp-layout-color2);\n}\n\n.applied-tag {\n  background-color: var(--jp-layout-color3);\n}\n\n.add-tag {\n  white-space: nowrap;\n  overflow: hidden;\n  border: none;\n  outline: none;\n  resize: horizontal;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color2);\n}\n\n.tag-holder {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.tag-label {\n  flex: 0 0 auto;\n  font-size: var(--jp-ui-font-size1);\n  color: var(--jp-ui-font-color1);\n  padding: 0px 12px;\n}\n\n/* Need a more specific selector to override another rule on .jp-NotebookTools children. */\n.jp-NotebookTools .tag-label {\n  margin: 0px;\n}\n\n/* Need a more specific selector to override another rule .jp-NotebookTools children. */\n.jp-NotebookTools div.jp-TagTool {\n  margin-top: 4px;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        27766: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-CSVViewer {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  /* This is needed so that all font sizing of children done in ems is\n   * relative to this base size */\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-CSVDelimiter {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  border: none;\n  min-height: 24px;\n  background: var(--jp-toolbar-background);\n  z-index: 1;\n}\n\n.jp-CSVDelimiter .jp-CSVDelimiter-label {\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.jp-CSVDelimiter .jp-CSVDelimiter-dropdown {\n  flex: 0 0 auto;\n  vertical-align: middle;\n  border-radius: 0;\n  outline: none;\n  height: 20px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.jp-CSVDelimiter .jp-CSVDelimiter-dropdown select.jp-mod-styled {\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color1);\n  font-size: var(--jp-ui-font-size1);\n  height: 20px;\n  padding-right: 20px;\n}\n\n.jp-CSVViewer-grid {\n  flex: 1 1 auto;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/csvviewer/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb;iCAC+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,aAAa;EACb,cAAc;EACd,mBAAmB;EACnB,YAAY;EACZ,gBAAgB;EAChB,wCAAwC;EACxC,UAAU;AACZ;;AAEA;EACE,+BAA+B;EAC/B,kCAAkC;EAClC,iBAAiB;EACjB,kBAAkB;AACpB;;AAEA;EACE,cAAc;EACd,sBAAsB;EACtB,gBAAgB;EAChB,aAAa;EACb,YAAY;EACZ,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,mCAAmC;EACnC,kCAAkC;EAClC,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,cAAc;AAChB',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-CSVViewer {\n  display: flex;\n  flex-direction: column;\n  outline: none;\n  /* This is needed so that all font sizing of children done in ems is\n   * relative to this base size */\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-CSVDelimiter {\n  display: flex;\n  flex: 0 0 auto;\n  flex-direction: row;\n  border: none;\n  min-height: 24px;\n  background: var(--jp-toolbar-background);\n  z-index: 1;\n}\n\n.jp-CSVDelimiter .jp-CSVDelimiter-label {\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  padding-left: 8px;\n  padding-right: 8px;\n}\n\n.jp-CSVDelimiter .jp-CSVDelimiter-dropdown {\n  flex: 0 0 auto;\n  vertical-align: middle;\n  border-radius: 0;\n  outline: none;\n  height: 20px;\n  margin-top: 2px;\n  margin-bottom: 2px;\n}\n\n.jp-CSVDelimiter .jp-CSVDelimiter-dropdown select.jp-mod-styled {\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color1);\n  font-size: var(--jp-ui-font-size1);\n  height: 20px;\n  padding-right: 20px;\n}\n\n.jp-CSVViewer-grid {\n  flex: 1 1 auto;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        23263: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n.jp-DocumentSearch-input {\n  border: none;\n  outline: none;\n  font-size: var(--jp-ui-font-size1);\n  background-color: var(--jp-layout-color0);\n}\n\n.jp-DocumentSearch-overlay {\n  position: absolute;\n  background-color: var(--jp-toolbar-background);\n  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);\n  border-left: var(--jp-border-width) solid var(--jp-toolbar-border-color);\n  top: 0;\n  right: 0;\n  z-index: 7;\n  min-width: 405px;\n  padding: 2px;\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-DocumentSearch-overlay button {\n  background-color: var(--jp-toolbar-background);\n  outline: 0;\n}\n\n.jp-DocumentSearch-overlay button:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-overlay button:active {\n  background-color: var(--jp-layout-color3);\n}\n\n.jp-DocumentSearch-overlay-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n}\n\n.jp-DocumentSearch-overlay * {\n  color: var(--jp-ui-font-color0);\n  background-position: center;\n}\n\n.jp-DocumentSearch-button-content {\n  display: inline-block;\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n\n.jp-DocumentSearch-input-wrapper {\n  border: var(--jp-border-width) solid var(--jp-border-color0);\n  display: flex;\n  background-color: var(--jp-layout-color0);\n  margin: 2px;\n}\n\n.jp-DocumentSearch-focused-input {\n  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);\n}\n\n.jp-DocumentSearch-input-wrapper * {\n  background-color: var(--jp-layout-color0);\n}\n\n.jp-DocumentSearch-toggle-wrapper,\n.jp-DocumentSearch-button-wrapper {\n  all: initial;\n  overflow: hidden;\n  display: inline-block;\n  border: none;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n}\n\n.jp-DocumentSearch-toggle-wrapper {\n  width: 14px;\n  height: 14px;\n}\n\n.jp-DocumentSearch-button-wrapper {\n  width: 20px;\n  height: 20px;\n}\n\n.jp-DocumentSearch-toggle-wrapper:focus,\n.jp-DocumentSearch-button-wrapper:focus {\n  outline: var(--jp-border-width) solid\n    var(--jp-cell-editor-active-border-color);\n  outline-offset: -1px;\n}\n\n.jp-DocumentSearch-toggle-wrapper,\n.jp-DocumentSearch-button-wrapper,\n.jp-DocumentSearch-button-content:focus {\n  outline: none;\n}\n\n.jp-DocumentSearch-toggle-placeholder {\n  width: 5px;\n}\n\n.jp-DocumentSearch-input-button:before {\n  display: block;\n  padding-top: 100%;\n}\n\n.jp-DocumentSearch-input-button-off {\n  opacity: var(--jp-search-toggle-off-opacity);\n}\n\n.jp-DocumentSearch-input-button-off:hover {\n  opacity: var(--jp-search-toggle-hover-opacity);\n}\n\n.jp-DocumentSearch-input-button-on {\n  opacity: var(--jp-search-toggle-on-opacity);\n}\n\n.jp-DocumentSearch-index-counter {\n  padding-left: 10px;\n  padding-right: 10px;\n  user-select: none;\n  min-width: 43px;\n  display: inline-block;\n}\n\n.jp-DocumentSearch-up-down-wrapper {\n  display: inline-block;\n  padding-right: 2px;\n  margin-left: auto;\n  white-space: nowrap;\n}\n\n.jp-DocumentSearch-spacer {\n  margin-left: auto;\n}\n\n.jp-DocumentSearch-up-down-wrapper button {\n  outline: 0;\n  border: none;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: middle;\n  margin: 1px 5px 2px;\n}\n\n.jp-DocumentSearch-up-down-button {\n  border-radius: var(--jp-border-radius);\n}\n\n.jp-DocumentSearch-up-down-button:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-up-down-button:active {\n  background-color: var(--jp-layout-color3);\n}\n\n.jp-DocumentSearch-ellipses-button {\n  border-radius: var(--jp-border-radius);\n}\n\n.jp-DocumentSearch-ellipses-button:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-ellipses-button-enabled {\n  background-color: var(--jp-layout-color3);\n}\n\n.jp-DocumentSearch-ellipses-button-enabled:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-search-options {\n  padding: 0 8px;\n  margin-left: 3px;\n  width: 200px;\n  display: grid;\n}\n.jp-DocumentSearch-search-options-disabled {\n  color: var(--jp-ui-font-color2);\n}\n\n.jp-DocumentSearch-search-options input {\n  float: right;\n}\n\n.jp-DocumentSearch-regex-error {\n  color: var(--jp-error-color0);\n}\n\n.jp-DocumentSearch-replace-entry {\n  border: var(--jp-border-width) solid var(--jp-border-color0);\n  display: flex;\n  background-color: var(--jp-layout-color0);\n  font-size: var(--jp-ui-font-size1);\n  margin: 2px;\n}\n\n.jp-DocumentSearch-replace-button-wrapper {\n  overflow: hidden;\n  display: inline-block;\n  box-sizing: border-box;\n  border: var(--jp-border-width) solid var(--jp-border-color0);\n  margin: 2px;\n}\n\n.jp-DocumentSearch-replace-entry:focus,\n.jp-DocumentSearch-replace-button-wrapper:focus {\n  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);\n}\n\n.jp-DocumentSearch-replace-button {\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  color: var(--jp-font-color1);\n  width: 100%;\n  height: 100%;\n}\n\n.jp-DocumentSearch-replace-button:focus {\n  outline: none;\n}\n\n.jp-DocumentSearch-replace-wrapper-class {\n  margin-left: 14px;\n  display: flex;\n}\n\n.jp-DocumentSearch-replace-toggle {\n  border: none;\n  background-color: var(--jp-toolbar-background);\n  border-radius: var(--jp-border-radius);\n}\n\n.jp-DocumentSearch-replace-toggle:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-document-loaded .jp-DocumentSearch-document-loading {\n  display: block !important;\n}\n\n.jp-DocumentSearch-document-loading {\n  display: none;\n  margin: 5px;\n  color: var(--jp-ui-font-color2);\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/documentsearch/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;AAC9E;EACE,YAAY;EACZ,aAAa;EACb,kCAAkC;EAClC,yCAAyC;AAC3C;;AAEA;EACE,kBAAkB;EAClB,8CAA8C;EAC9C,0EAA0E;EAC1E,wEAAwE;EACxE,MAAM;EACN,QAAQ;EACR,UAAU;EACV,gBAAgB;EAChB,YAAY;EACZ,kCAAkC;AACpC;;AAEA;EACE,8CAA8C;EAC9C,UAAU;AACZ;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,kBAAkB;AACpB;;AAEA;EACE,+BAA+B;EAC/B,2BAA2B;AAC7B;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,sBAAsB;EACtB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,4DAA4D;EAC5D,aAAa;EACb,yCAAyC;EACzC,WAAW;AACb;;AAEA;EACE,8EAA8E;AAChF;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;;EAEE,YAAY;EACZ,gBAAgB;EAChB,qBAAqB;EACrB,YAAY;EACZ,sBAAsB;EACtB,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;;EAEE;6CAC2C;EAC3C,oBAAoB;AACtB;;AAEA;;;EAGE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA;EACE,cAAc;EACd,iBAAiB;AACnB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,8CAA8C;AAChD;;AAEA;EACE,2CAA2C;AAC7C;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,eAAe;EACf,qBAAqB;AACvB;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,4BAA4B;EAC5B,2BAA2B;EAC3B,sBAAsB;EACtB,mBAAmB;AACrB;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,sCAAsC;AACxC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,YAAY;EACZ,aAAa;AACf;AACA;EACE,+BAA+B;AACjC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;EACE,4DAA4D;EAC5D,aAAa;EACb,yCAAyC;EACzC,kCAAkC;EAClC,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,qBAAqB;EACrB,sBAAsB;EACtB,4DAA4D;EAC5D,WAAW;AACb;;AAEA;;EAEE,8EAA8E;AAChF;;AAEA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,eAAe;EACf,sBAAsB;EACtB,4BAA4B;EAC5B,WAAW;EACX,YAAY;AACd;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,iBAAiB;EACjB,aAAa;AACf;;AAEA;EACE,YAAY;EACZ,8CAA8C;EAC9C,sCAAsC;AACxC;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,WAAW;EACX,+BAA+B;AACjC',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n.jp-DocumentSearch-input {\n  border: none;\n  outline: none;\n  font-size: var(--jp-ui-font-size1);\n  background-color: var(--jp-layout-color0);\n}\n\n.jp-DocumentSearch-overlay {\n  position: absolute;\n  background-color: var(--jp-toolbar-background);\n  border-bottom: var(--jp-border-width) solid var(--jp-toolbar-border-color);\n  border-left: var(--jp-border-width) solid var(--jp-toolbar-border-color);\n  top: 0;\n  right: 0;\n  z-index: 7;\n  min-width: 405px;\n  padding: 2px;\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-DocumentSearch-overlay button {\n  background-color: var(--jp-toolbar-background);\n  outline: 0;\n}\n\n.jp-DocumentSearch-overlay button:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-overlay button:active {\n  background-color: var(--jp-layout-color3);\n}\n\n.jp-DocumentSearch-overlay-row {\n  display: flex;\n  align-items: center;\n  margin-bottom: 2px;\n}\n\n.jp-DocumentSearch-overlay * {\n  color: var(--jp-ui-font-color0);\n  background-position: center;\n}\n\n.jp-DocumentSearch-button-content {\n  display: inline-block;\n  cursor: pointer;\n  box-sizing: border-box;\n  width: 100%;\n  height: 100%;\n}\n\n.jp-DocumentSearch-input-wrapper {\n  border: var(--jp-border-width) solid var(--jp-border-color0);\n  display: flex;\n  background-color: var(--jp-layout-color0);\n  margin: 2px;\n}\n\n.jp-DocumentSearch-focused-input {\n  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);\n}\n\n.jp-DocumentSearch-input-wrapper * {\n  background-color: var(--jp-layout-color0);\n}\n\n.jp-DocumentSearch-toggle-wrapper,\n.jp-DocumentSearch-button-wrapper {\n  all: initial;\n  overflow: hidden;\n  display: inline-block;\n  border: none;\n  box-sizing: border-box;\n  background-repeat: no-repeat;\n}\n\n.jp-DocumentSearch-toggle-wrapper {\n  width: 14px;\n  height: 14px;\n}\n\n.jp-DocumentSearch-button-wrapper {\n  width: 20px;\n  height: 20px;\n}\n\n.jp-DocumentSearch-toggle-wrapper:focus,\n.jp-DocumentSearch-button-wrapper:focus {\n  outline: var(--jp-border-width) solid\n    var(--jp-cell-editor-active-border-color);\n  outline-offset: -1px;\n}\n\n.jp-DocumentSearch-toggle-wrapper,\n.jp-DocumentSearch-button-wrapper,\n.jp-DocumentSearch-button-content:focus {\n  outline: none;\n}\n\n.jp-DocumentSearch-toggle-placeholder {\n  width: 5px;\n}\n\n.jp-DocumentSearch-input-button:before {\n  display: block;\n  padding-top: 100%;\n}\n\n.jp-DocumentSearch-input-button-off {\n  opacity: var(--jp-search-toggle-off-opacity);\n}\n\n.jp-DocumentSearch-input-button-off:hover {\n  opacity: var(--jp-search-toggle-hover-opacity);\n}\n\n.jp-DocumentSearch-input-button-on {\n  opacity: var(--jp-search-toggle-on-opacity);\n}\n\n.jp-DocumentSearch-index-counter {\n  padding-left: 10px;\n  padding-right: 10px;\n  user-select: none;\n  min-width: 43px;\n  display: inline-block;\n}\n\n.jp-DocumentSearch-up-down-wrapper {\n  display: inline-block;\n  padding-right: 2px;\n  margin-left: auto;\n  white-space: nowrap;\n}\n\n.jp-DocumentSearch-spacer {\n  margin-left: auto;\n}\n\n.jp-DocumentSearch-up-down-wrapper button {\n  outline: 0;\n  border: none;\n  width: 20px;\n  height: 20px;\n  background-repeat: no-repeat;\n  background-position: center;\n  vertical-align: middle;\n  margin: 1px 5px 2px;\n}\n\n.jp-DocumentSearch-up-down-button {\n  border-radius: var(--jp-border-radius);\n}\n\n.jp-DocumentSearch-up-down-button:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-up-down-button:active {\n  background-color: var(--jp-layout-color3);\n}\n\n.jp-DocumentSearch-ellipses-button {\n  border-radius: var(--jp-border-radius);\n}\n\n.jp-DocumentSearch-ellipses-button:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-ellipses-button-enabled {\n  background-color: var(--jp-layout-color3);\n}\n\n.jp-DocumentSearch-ellipses-button-enabled:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-search-options {\n  padding: 0 8px;\n  margin-left: 3px;\n  width: 200px;\n  display: grid;\n}\n.jp-DocumentSearch-search-options-disabled {\n  color: var(--jp-ui-font-color2);\n}\n\n.jp-DocumentSearch-search-options input {\n  float: right;\n}\n\n.jp-DocumentSearch-regex-error {\n  color: var(--jp-error-color0);\n}\n\n.jp-DocumentSearch-replace-entry {\n  border: var(--jp-border-width) solid var(--jp-border-color0);\n  display: flex;\n  background-color: var(--jp-layout-color0);\n  font-size: var(--jp-ui-font-size1);\n  margin: 2px;\n}\n\n.jp-DocumentSearch-replace-button-wrapper {\n  overflow: hidden;\n  display: inline-block;\n  box-sizing: border-box;\n  border: var(--jp-border-width) solid var(--jp-border-color0);\n  margin: 2px;\n}\n\n.jp-DocumentSearch-replace-entry:focus,\n.jp-DocumentSearch-replace-button-wrapper:focus {\n  border: var(--jp-border-width) solid var(--jp-cell-editor-active-border-color);\n}\n\n.jp-DocumentSearch-replace-button {\n  display: inline-block;\n  text-align: center;\n  cursor: pointer;\n  box-sizing: border-box;\n  color: var(--jp-font-color1);\n  width: 100%;\n  height: 100%;\n}\n\n.jp-DocumentSearch-replace-button:focus {\n  outline: none;\n}\n\n.jp-DocumentSearch-replace-wrapper-class {\n  margin-left: 14px;\n  display: flex;\n}\n\n.jp-DocumentSearch-replace-toggle {\n  border: none;\n  background-color: var(--jp-toolbar-background);\n  border-radius: var(--jp-border-radius);\n}\n\n.jp-DocumentSearch-replace-toggle:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-DocumentSearch-document-loaded .jp-DocumentSearch-document-loading {\n  display: block !important;\n}\n\n.jp-DocumentSearch-document-loading {\n  display: none;\n  margin: 5px;\n  color: var(--jp-ui-font-color2);\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        44734: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
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
            const a = i;
        },
        66983: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/* Document styles */\n.jp-HTMLViewer {\n  overflow: hidden;\n}\n\n.jp-HTMLViewer {\n  min-width: 100px;\n  min-height: 100px;\n  width: 100%;\n  height: 100%;\n}\n\n.jp-HTMLViewer > iframe {\n  border: none;\n}\n\n/*\nWhen drag events occur, `p-mod-override-cursor` is added to the body.\nBecause iframes steal all cursor events, the following two rules are necessary\nto suppress pointer events while resize drags are occurring. There may be a\nbetter solution to this problem.\n*/\nbody.lm-mod-override-cursor .jp-HTMLViewer {\n  position: relative;\n}\n\nbody.lm-mod-override-cursor .jp-HTMLViewer:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n}\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/htmlviewer/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E,oBAAoB;AACpB;EACE,gBAAgB;AAClB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;EACjB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;;;;;CAKC;AACD;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,uBAAuB;AACzB',
                    sourcesContent: [
                        "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/* Document styles */\n.jp-HTMLViewer {\n  overflow: hidden;\n}\n\n.jp-HTMLViewer {\n  min-width: 100px;\n  min-height: 100px;\n  width: 100%;\n  height: 100%;\n}\n\n.jp-HTMLViewer > iframe {\n  border: none;\n}\n\n/*\nWhen drag events occur, `p-mod-override-cursor` is added to the body.\nBecause iframes steal all cursor events, the following two rules are necessary\nto suppress pointer events while resize drags are occurring. There may be a\nbetter solution to this problem.\n*/\nbody.lm-mod-override-cursor .jp-HTMLViewer {\n  position: relative;\n}\n\nbody.lm-mod-override-cursor .jp-HTMLViewer:before {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n}\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        51813: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-ImageViewer {\n  overflow: auto;\n}\n\n.jp-ImageViewer > img {\n  box-sizing: border-box;\n  transform-origin: top left;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/imageviewer/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;EACE,cAAc;AAChB;;AAEA;EACE,sBAAsB;EACtB,0BAA0B;AAC5B',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-ImageViewer {\n  overflow: auto;\n}\n\n.jp-ImageViewer > img {\n  box-sizing: border-box;\n  transform-origin: top left;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        22581: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/*-----------------------------------------------------------------------------\n| Variables\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-inspector-tab-height: 24px;\n  --jp-private-inspector-tab-width: 60px;\n}\n\n/*-----------------------------------------------------------------------------\n| Inspector\n|----------------------------------------------------------------------------*/\n\n.jp-Inspector {\n  outline: none;\n  min-width: 120px;\n  min-height: 120px;\n}\n\n.jp-Inspector-content {\n  background: var(--jp-layout-color1);\n  border: none;\n}\n\n.jp-Inspector-content {\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.jp-Inspector-content pre {\n  font-size: var(--jp-code-font-size);\n  line-height: var(--jp-code-line-height);\n  margin: 0;\n  white-space: pre-wrap;\n}\n\n.jp-Inspector-default-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: xx-large;\n  font-style: italic;\n  color: darkgray;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/inspector/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;;8EAE8E;;AAE9E;EACE,uCAAuC;EACvC,sCAAsC;AACxC;;AAEA;;8EAE8E;;AAE9E;EACE,aAAa;EACb,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,mCAAmC;EACnC,uCAAuC;EACvC,SAAS;EACT,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,eAAe;AACjB',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/*-----------------------------------------------------------------------------\n| Variables\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-inspector-tab-height: 24px;\n  --jp-private-inspector-tab-width: 60px;\n}\n\n/*-----------------------------------------------------------------------------\n| Inspector\n|----------------------------------------------------------------------------*/\n\n.jp-Inspector {\n  outline: none;\n  min-width: 120px;\n  min-height: 120px;\n}\n\n.jp-Inspector-content {\n  background: var(--jp-layout-color1);\n  border: none;\n}\n\n.jp-Inspector-content {\n  padding: 8px;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n}\n\n.jp-Inspector-content pre {\n  font-size: var(--jp-code-font-size);\n  line-height: var(--jp-code-line-height);\n  margin: 0;\n  white-space: pre-wrap;\n}\n\n.jp-Inspector-default-content {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: xx-large;\n  font-style: italic;\n  color: darkgray;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        43720: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n@keyframes flash {\n  0% {\n    background-color: var(--jp-brand-color1);\n  }\n  50% {\n    color: unset;\n    background-color: unset;\n  }\n  100% {\n    background-color: var(--jp-brand-color1);\n  }\n}\n\n.jp-LogConsoleStatusItem.jp-LogConsole-flash {\n  animation: flash 300ms both;\n}\n\n.jp-LogConsoleStatusItem.jp-mod-selected {\n  background-color: var(--jp-brand-color1);\n}\n\n/* Need to be very specific to override the typestyle styles on status bar components */\n.jp-LogConsoleStatusItem.jp-mod-selected,\n.jp-LogConsoleStatusItem.jp-mod-selected div,\n.jp-LogConsoleStatusItem.jp-mod-selected div span {\n  color: white;\n}\n\n.jp-LogConsole .jp-ClearIcon {\n  transform: rotate(90deg);\n  margin-top: -1px;\n  padding: 0px 8px;\n}\n\n.jp-Toolbar-item.jp-LogConsole-toolbarLogLevel {\n  align-items: center;\n  padding: 0px 6px;\n}\n\n/* Matches the disabled style elsewhere in JupyterLab */\n.jp-LogConsole-toolbarLogLevel-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n/* Copied from the notebook cell type dropdown styling */\n.jp-LogConsole-toolbarLogLevelDropdown select {\n  height: 24px;\n  font-size: var(--jp-ui-font-size1);\n  line-height: 14px;\n  border-radius: 0;\n  display: block;\n}\n\n/* Copied from the notebook cell type dropdown styling */\n.jp-LogConsole-toolbarLogLevelDropdown span {\n  top: 5px !important;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/logconsole-extension/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;EACE;IACE,wCAAwC;EAC1C;EACA;IACE,YAAY;IACZ,uBAAuB;EACzB;EACA;IACE,wCAAwC;EAC1C;AACF;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,wCAAwC;AAC1C;;AAEA,uFAAuF;AACvF;;;EAGE,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,gBAAgB;EAChB,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;EACnB,gBAAgB;AAClB;;AAEA,uDAAuD;AACvD;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA,wDAAwD;AACxD;EACE,YAAY;EACZ,kCAAkC;EAClC,iBAAiB;EACjB,gBAAgB;EAChB,cAAc;AAChB;;AAEA,wDAAwD;AACxD;EACE,mBAAmB;AACrB',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n@keyframes flash {\n  0% {\n    background-color: var(--jp-brand-color1);\n  }\n  50% {\n    color: unset;\n    background-color: unset;\n  }\n  100% {\n    background-color: var(--jp-brand-color1);\n  }\n}\n\n.jp-LogConsoleStatusItem.jp-LogConsole-flash {\n  animation: flash 300ms both;\n}\n\n.jp-LogConsoleStatusItem.jp-mod-selected {\n  background-color: var(--jp-brand-color1);\n}\n\n/* Need to be very specific to override the typestyle styles on status bar components */\n.jp-LogConsoleStatusItem.jp-mod-selected,\n.jp-LogConsoleStatusItem.jp-mod-selected div,\n.jp-LogConsoleStatusItem.jp-mod-selected div span {\n  color: white;\n}\n\n.jp-LogConsole .jp-ClearIcon {\n  transform: rotate(90deg);\n  margin-top: -1px;\n  padding: 0px 8px;\n}\n\n.jp-Toolbar-item.jp-LogConsole-toolbarLogLevel {\n  align-items: center;\n  padding: 0px 6px;\n}\n\n/* Matches the disabled style elsewhere in JupyterLab */\n.jp-LogConsole-toolbarLogLevel-disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n/* Copied from the notebook cell type dropdown styling */\n.jp-LogConsole-toolbarLogLevelDropdown select {\n  height: 24px;\n  font-size: var(--jp-ui-font-size1);\n  line-height: 14px;\n  border-radius: 0;\n  display: block;\n}\n\n/* Copied from the notebook cell type dropdown styling */\n.jp-LogConsole-toolbarLogLevelDropdown span {\n  top: 5px !important;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        49043: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
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
            const a = i;
        },
        93206: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-markdownviewer-padding: 32px;\n}\n\n.jp-Document .jp-MarkdownViewer .jp-RenderedMarkdown {\n  padding-top: var(--jp-private-markdownviewer-padding);\n  padding-right: var(--jp-private-markdownviewer-padding);\n  padding-bottom: var(--jp-private-markdownviewer-padding);\n  padding-left: var(--jp-private-markdownviewer-padding);\n  overflow: auto;\n}\n\n/*-----------------------------------------------------------------------------\n| Presentation Mode (.jp-mod-presentationMode)\n|----------------------------------------------------------------------------*/\n\n.jp-mod-presentationMode .jp-MarkdownViewer .jp-RenderedHTMLCommon {\n  --jp-content-font-size1: var(--jp-content-presentation-font-size1);\n  --jp-code-font-size: var(--jp-code-presentation-font-size);\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/markdownviewer/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;EACE,yCAAyC;AAC3C;;AAEA;EACE,qDAAqD;EACrD,uDAAuD;EACvD,wDAAwD;EACxD,sDAAsD;EACtD,cAAc;AAChB;;AAEA;;8EAE8E;;AAE9E;EACE,kEAAkE;EAClE,0DAA0D;AAC5D',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-markdownviewer-padding: 32px;\n}\n\n.jp-Document .jp-MarkdownViewer .jp-RenderedMarkdown {\n  padding-top: var(--jp-private-markdownviewer-padding);\n  padding-right: var(--jp-private-markdownviewer-padding);\n  padding-bottom: var(--jp-private-markdownviewer-padding);\n  padding-left: var(--jp-private-markdownviewer-padding);\n  overflow: auto;\n}\n\n/*-----------------------------------------------------------------------------\n| Presentation Mode (.jp-mod-presentationMode)\n|----------------------------------------------------------------------------*/\n\n.jp-mod-presentationMode .jp-MarkdownViewer .jp-RenderedHTMLCommon {\n  --jp-content-font-size1: var(--jp-content-presentation-font-size1);\n  --jp-code-font-size: var(--jp-code-presentation-font-size);\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        33924: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-PDFContainer iframe {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.jp-OutputArea .jp-PDFContainer {\n  min-height: 512px;\n}\n\n/*\nWhen drag events occur, `p-mod-override-cursor` is added to the body.\nThis reuses the same CSS selector logic as jp-IFrame to prevent embedded\nPDFs from swallowing cursor events.\n*/\nbody.lm-mod-override-cursor .jp-PDFContainer {\n  position: relative;\n}\n\nbody.lm-mod-override-cursor .jp-PDFContainer:before {\n  content: '';\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n}\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/pdf-extension/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;EACE,kBAAkB;EAClB,UAAU;EACV,MAAM;EACN,QAAQ;EACR,WAAW;EACX,YAAY;AACd;;AAEA;EACE,iBAAiB;AACnB;;AAEA;;;;CAIC;AACD;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,uBAAuB;AACzB',
                    sourcesContent: [
                        "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-PDFContainer iframe {\n  position: absolute;\n  z-index: 0;\n  top: 0;\n  right: 0;\n  width: 100%;\n  height: 100%;\n}\n\n.jp-OutputArea .jp-PDFContainer {\n  min-height: 512px;\n}\n\n/*\nWhen drag events occur, `p-mod-override-cursor` is added to the body.\nThis reuses the same CSS selector logic as jp-IFrame to prevent embedded\nPDFs from swallowing cursor events.\n*/\nbody.lm-mod-override-cursor .jp-PDFContainer {\n  position: relative;\n}\n\nbody.lm-mod-override-cursor .jp-PDFContainer:before {\n  content: '';\n  position: absolute;\n  z-index: 10;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: transparent;\n}\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        34729: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                '/*-----------------------------------------------------------------------------\n| Variables\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-running-button-height: 28px;\n  --jp-private-running-button-width: 48px;\n  --jp-private-running-item-height: 24px;\n  --jp-private-running-shutdown-button-height: 24px;\n}\n\n/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-RunningSessions {\n  display: flex;\n  flex-direction: column;\n  min-width: var(--jp-sidebar-min-width);\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color1);\n  /* This is needed so that all font sizing of children done in ems is\n   * relative to this base size */\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-RunningSessions-header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.jp-RunningSessions-section {\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.jp-RunningSessions-sectionHeader {\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: space-between;\n  height: 28px;\n  display: flex;\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  margin-top: 8px;\n}\n\n.jp-RunningSessions-sectionHeader h2 {\n  flex: 0 0 auto;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: var(--jp-ui-font-size0);\n  padding: 8px 8px 8px 12px;\n  margin: 0px;\n}\n\n.jp-RunningSessions-sectionHeader .jp-ToolbarButtonComponent {\n  flex: 0 0 auto;\n}\n\n.jp-RunningSessions-sectionContainer {\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n}\n\n.jp-RunningSessions-sectionList {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.jp-RunningSessions-item {\n  display: flex;\n  flex-direction: row;\n  color: var(--jp-ui-font-color1);\n  height: var(--jp-private-running-item-height);\n  line-height: var(--jp-private-running-item-height);\n  padding: 0 8px 0 8px;\n}\n\n.jp-RunningSessions-item:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-RunningSessions-itemLabel {\n  font-size: var(--jp-ui-font-size1);\n  flex: 1 1 55%;\n  padding: 0 4px 0 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-RunningSessions-itemLabel:focus {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-RunningSessions-itemDetail {\n  font-size: var(--jp-ui-font-size1);\n  flex: 1 1 45%;\n  padding: 0 4px 0 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-RunningSessions-item .jp-RunningSessions-itemShutdown {\n  border-radius: 0px;\n}\n\n.jp-RunningSessions-item:not(:hover) .jp-RunningSessions-itemShutdown {\n  visibility: hidden;\n  /* display: none; */\n}\n\n.jp-RunningSessions-sectionList\n  .jp-RunningSessions-item\n  .jp-Button.jp-RunningSessions-itemShutdown:hover {\n  background: var(--jp-layout-color3);\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled {\n  margin: 0px 8px;\n  color: var(--jp-warn-color1);\n  background-color: transparent;\n  height: var(--jp-private-running-shutdown-button-height);\n  line-height: var(--jp-private-running-shutdown-button-height);\n  border-radius: 2px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled:focus {\n  border: none;\n  box-shadow: none;\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled.jp-mod-disabled {\n  color: var(--jp-ui-font-color2);\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled.jp-mod-disabled:hover {\n  background: none;\n}\n',
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/running/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;8EAE8E;;AAE9E;EACE,wCAAwC;EACxC,uCAAuC;EACvC,sCAAsC;EACtC,iDAAiD;AACnD;;AAEA;;;8EAG8E;;AAE9E;EACE,aAAa;EACb,sBAAsB;EACtB,sCAAsC;EACtC,+BAA+B;EAC/B,mCAAmC;EACnC;iCAC+B;EAC/B,kCAAkC;AACpC;;AAEA;EACE,cAAc;EACd,aAAa;EACb,mBAAmB;EACnB,yBAAyB;AAC3B;;AAEA;EACE,aAAa;EACb,cAAc;EACd,sBAAsB;EACtB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,8BAA8B;EAC9B,YAAY;EACZ,aAAa;EACb,mEAAmE;EACnE,eAAe;AACjB;;AAEA;EACE,cAAc;EACd,gBAAgB;EAChB,yBAAyB;EACzB,mBAAmB;EACnB,kCAAkC;EAClC,yBAAyB;EACzB,WAAW;AACb;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,SAAS;EACT,UAAU;EACV,cAAc;AAChB;;AAEA;EACE,SAAS;EACT,UAAU;EACV,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,+BAA+B;EAC/B,6CAA6C;EAC7C,kDAAkD;EAClD,oBAAoB;AACtB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,kCAAkC;EAClC,aAAa;EACb,oBAAoB;EACpB,uBAAuB;EACvB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;;;EAGE,mCAAmC;AACrC;;AAEA;EACE,eAAe;EACf,4BAA4B;EAC5B,6BAA6B;EAC7B,wDAAwD;EACxD,6DAA6D;EAC7D,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,yCAAyC;AAC3C;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;AAClB',
                    sourcesContent: [
                        '/*-----------------------------------------------------------------------------\n| Variables\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-running-button-height: 28px;\n  --jp-private-running-button-width: 48px;\n  --jp-private-running-item-height: 24px;\n  --jp-private-running-shutdown-button-height: 24px;\n}\n\n/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n.jp-RunningSessions {\n  display: flex;\n  flex-direction: column;\n  min-width: var(--jp-sidebar-min-width);\n  color: var(--jp-ui-font-color1);\n  background: var(--jp-layout-color1);\n  /* This is needed so that all font sizing of children done in ems is\n   * relative to this base size */\n  font-size: var(--jp-ui-font-size1);\n}\n\n.jp-RunningSessions-header {\n  flex: 0 0 auto;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-end;\n}\n\n.jp-RunningSessions-section {\n  display: flex;\n  flex: 0 1 auto;\n  flex-direction: column;\n  overflow: auto;\n}\n\n.jp-RunningSessions-sectionHeader {\n  flex: 0 0 auto;\n  align-items: center;\n  justify-content: space-between;\n  height: 28px;\n  display: flex;\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  margin-top: 8px;\n}\n\n.jp-RunningSessions-sectionHeader h2 {\n  flex: 0 0 auto;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: var(--jp-ui-font-size0);\n  padding: 8px 8px 8px 12px;\n  margin: 0px;\n}\n\n.jp-RunningSessions-sectionHeader .jp-ToolbarButtonComponent {\n  flex: 0 0 auto;\n}\n\n.jp-RunningSessions-sectionContainer {\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 0;\n  overflow: auto;\n}\n\n.jp-RunningSessions-sectionList {\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n}\n\n.jp-RunningSessions-item {\n  display: flex;\n  flex-direction: row;\n  color: var(--jp-ui-font-color1);\n  height: var(--jp-private-running-item-height);\n  line-height: var(--jp-private-running-item-height);\n  padding: 0 8px 0 8px;\n}\n\n.jp-RunningSessions-item:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-RunningSessions-itemLabel {\n  font-size: var(--jp-ui-font-size1);\n  flex: 1 1 55%;\n  padding: 0 4px 0 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-RunningSessions-itemLabel:focus {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-RunningSessions-itemDetail {\n  font-size: var(--jp-ui-font-size1);\n  flex: 1 1 45%;\n  padding: 0 4px 0 4px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap;\n}\n\n.jp-RunningSessions-item .jp-RunningSessions-itemShutdown {\n  border-radius: 0px;\n}\n\n.jp-RunningSessions-item:not(:hover) .jp-RunningSessions-itemShutdown {\n  visibility: hidden;\n  /* display: none; */\n}\n\n.jp-RunningSessions-sectionList\n  .jp-RunningSessions-item\n  .jp-Button.jp-RunningSessions-itemShutdown:hover {\n  background: var(--jp-layout-color3);\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled {\n  margin: 0px 8px;\n  color: var(--jp-warn-color1);\n  background-color: transparent;\n  height: var(--jp-private-running-shutdown-button-height);\n  line-height: var(--jp-private-running-shutdown-button-height);\n  border-radius: 2px;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled:hover {\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled:focus {\n  border: none;\n  box-shadow: none;\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled.jp-mod-disabled {\n  color: var(--jp-ui-font-color2);\n}\n\n.jp-RunningSessions-shutdownAll.jp-mod-styled.jp-mod-disabled:hover {\n  background: none;\n}\n',
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        36761: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-settingeditor-debug-height: 28px;\n  --jp-private-settingeditor-key-width: 150px;\n  --jp-private-settingeditor-legend-height: 16px;\n  --jp-private-settingeditor-row-height: 16px;\n  --jp-private-settingeditor-toolbar-height: 28px;\n  --jp-private-settingeditor-type-width: 75px;\n  --jp-private-settingeditor-modifier-indent: 5px;\n}\n\n.jp-SettingsPanel,\n#json-setting-editor {\n  min-width: 360px;\n  min-height: 240px;\n  background-color: var(--jp-layout-color0);\n  margin-top: -1px;\n  outline: none;\n  color: var(--jp-content-font-color1) !important;\n  /* This is needed so that all font sizing of children done in ems is\n   * relative to this base size */\n  font-size: var(--jp-ui-font-size1);\n}\n\n#setting-editor > .lm-Widget,\n#json-setting-editor > .lm-Widget {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n#setting-editor .lm-SplitPanel-handle,\n#json-setting-editor .lm-SplitPanel-handle {\n  background-color: var(--jp-border-color2);\n}\n\n#json-setting-editor .jp-SettingEditorInstructions {\n  text-align: center;\n}\n\n#json-setting-editor .jp-SettingEditorInstructions-icon {\n  display: inline-block;\n  height: 78px;\n  margin: 2px 5px 2px 8px;\n  width: 60px;\n}\n\n#json-setting-editor .jp-SettingEditorInstructions-title {\n  color: var(--jp-ui-font-color0);\n  font-size: 32px;\n  font-weight: 200;\n  line-height: 78px;\n  vertical-align: top;\n}\n\n#json-setting-editor .jp-SettingEditorInstructions-text {\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size2);\n}\n\n.jp-PluginList {\n  min-width: 175px;\n  max-width: 275px;\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-PluginList-wrapper {\n  overflow-y: auto;\n  height: 100%;\n}\n\n.jp-PluginList ul {\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.jp-PluginList .jp-SettingsHeader {\n  display: flex;\n  flex-basis: 100%;\n}\n\n.jp-PluginList .jp-SettingsHeader button {\n  color: var(--jp-private-notebook-selected-color);\n  white-space: nowrap;\n}\n\n.jp-PluginList .jp-PluginList-header {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  border-top: var(--jp-border-width) solid var(--jp-border-color2);\n}\n\n.jp-PluginList .jp-PluginList-noResults,\n.jp-PluginList .jp-PluginList-header {\n  flex: 0 0 auto;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: var(--jp-ui-font-size0);\n  padding: 8px 8px 8px 12px;\n  margin: 10px;\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  border-top: var(--jp-border-width) solid var(--jp-border-color2);\n  color: var(--jp-content-font-color1);\n}\n\n.jp-PluginList .jp-SelectedIndicator {\n  width: 3px;\n  background-color: var(--jp-brand-color1);\n  height: var(--jp-cell-collapser-min-height);\n  visibility: hidden;\n}\n\n.jp-PluginList .jp-mod-selected .jp-SelectedIndicator {\n  visibility: inherit;\n}\n\n.jp-PluginList .jp-ErrorPlugin .jp-SelectedIndicator {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-PluginList button.jp-mod-selected.jp-ErrorPlugin span {\n  color: var(--jp-error-color0);\n}\n\n.jp-PluginList button.jp-mod-selected span {\n  font-weight: var(--jp-content-heading-font-weight);\n  color: var(--jp-brand-color1);\n}\n\n.jp-PluginList button span {\n  color: var(--jp-content-font-color1);\n  line-height: var(--jp-cell-collapser-min-height);\n}\n\n.jp-FormComponent li span {\n  overflow: hidden;\n}\n\n.jp-SettingEditor-header {\n  font-size: var(--jp-content-font-size4);\n  font-weight: var(--jp-content-heading-font-weight);\n  color: var(--jp-ui-font-color0);\n  padding: 20px 0 10px 20px;\n  border-bottom: 1px solid var(--jp-border-color2);\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: var(--jp-layout-color0);\n}\n\n.jp-PluginList-Searcher {\n  margin: 5px;\n}\n\nul.jp-PluginList li.jp-mod-selected span.jp-PluginList-icon.jp-FileIcon {\n  background-image: var(--jp-icon-file-selected);\n}\n\n.jp-PluginList-icon {\n  display: flex;\n  height: 20px;\n  width: 20px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.jp-SettingsRawEditor .jp-Toolbar {\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size1);\n  height: var(--jp-private-settingeditor-toolbar-height);\n  max-height: var(--jp-private-settingeditor-toolbar-height);\n}\n\n.jp-SettingsRawEditor .jp-Toolbar .jp-ToolbarButtonComponent-label {\n  display: none;\n}\n\n.jp-SettingsRawEditor .jp-Toolbar-item {\n  margin-top: 1px;\n  align-items: center;\n}\n\n.jp-ToolbarButtonComponent-label\n  .jp-SettingsRawEditor.jp-mod-error\n  .jp-Toolbar-item.jp-BugIcon::after {\n  color: red;\n  content: '\\25CF'; /* Unicode circle character (error dot) */\n  font-size: 7px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 4px;\n  left: 6px;\n}\n\n.jp-SettingsRawEditor .jp-Inspector {\n  border-top: 2px solid var(--jp-layout-color2);\n  min-height: var(--jp-private-settingeditor-debug-height);\n  max-height: var(--jp-private-settingeditor-debug-height);\n}\n\n.jp-SettingsRawEditor .jp-Inspector.jp-SettingsDebug .jp-RenderedHTMLCommon {\n  padding: 2px 5px 2px 0;\n  width: 100%;\n}\n\n.jp-SettingsRawEditor .jp-Inspector.jp-SettingsDebug .jp-RenderedHTMLCommon p {\n  text-align: right;\n}\n\n.jp-SettingsPanel fieldset input,\n.jp-SettingsPanel fieldset select,\n.jp-SettingsPanel fieldset textarea {\n  font-size: var(--jp-content-font-size2);\n  border-color: var(--jp-input-border-color);\n  border-style: solid;\n  border-radius: 5px;\n  border-width: 1px;\n  padding: 6px 8px;\n  background: none;\n  color: var(--jp-content-font-color0);\n  height: inherit;\n}\n\n.jp-SettingsPanel fieldset input[type='checkbox'] {\n  position: relative;\n  top: 2px;\n  margin-left: 0;\n}\n\n/** copy of `input.jp-mod-styled:focus` style */\n.jp-SettingsPanel fieldset input:focus {\n  border: var(--jp-border-width) solid var(--md-blue-500);\n  box-shadow: inset 0 0 4px var(--md-blue-300);\n}\n\n.jp-SettingsPanel .checkbox label {\n  cursor: pointer;\n  font-size: var(--jp-content-font-size1);\n}\n\n.jp-SettingsPanel .checkbox p {\n  font-size: var(--jp-content-font-size1);\n}\n\n.jp-SettingsPanel .checkbox {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.jp-SettingsPanel .checkbox .field-description {\n  /* Disable default description field for checkbox:\n   because other widgets do not have description fields,\n   we add descriptions to each widget on the field level.\n  */\n  display: none;\n}\n\n.jp-SettingsPanel button[type='submit'] {\n  display: none;\n}\n\n.jp-SettingsPanel .form-group {\n  display: flex;\n  padding: 4px 8px 4px var(--jp-private-settingeditor-modifier-indent);\n  margin-top: 5px;\n}\n\n.jp-SettingsPanel .jp-objectFieldWrapper .form-group {\n  padding: 2px 8px 2px var(--jp-private-settingeditor-modifier-indent);\n  margin-top: 2px;\n}\n\n.jp-ArrayOperations {\n  margin-left: 8px;\n}\n\n.jp-SettingsPanel .jp-FormGroup-content {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.jp-SettingsPanel .jp-FormGroup-contentItem {\n  margin-left: 7px;\n}\n\n.jp-SettingsPanel .jp-FormGroup-description {\n  flex-basis: 100%;\n  padding: 4px 7px;\n}\n\n.jp-SettingsPanel .jp-FormGroup-default {\n  flex-basis: 100%;\n  padding: 4px 7px;\n}\n\n.jp-SettingsPanel #root__description {\n  display: none;\n}\n\n.jp-SettingsPanel fieldset {\n  border: none;\n  padding: 0;\n}\n\n.jp-SettingsPanel fieldset:not(:first-child) {\n  margin-left: 7px;\n}\n\n.jp-SettingsPanel .jp-SaveSettingsBanner {\n  position: absolute;\n  bottom: 0;\n  padding: 20px;\n  width: 100%;\n  background: var(--jp-border-color3);\n}\n\n.jp-SettingsPanel .jp-SaveSettingsBanner button {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  color: var(--jp-brand-color1);\n  font-size: var(--jp-ui-font-size1);\n  cursor: pointer;\n}\n\n.jp-SettingsPanel .jp-SaveSettingsBanner button:hover {\n  color: var(--jp-brand-color0);\n}\n\n.jp-SettingsPanel .form-group.small-field:hover {\n  background: var(--jp-border-color3);\n}\n\n.jp-SettingsPanel button.jp-mod-styled {\n  cursor: pointer;\n}\n\n.jp-SettingsPanel button.jp-mod-styled:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.jp-SettingsPanel .array-item button {\n  margin: 2px;\n}\n\n.jp-openJSONSettingsEditor {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.jp-openJSONSettingsEditor button {\n  border: 1px solid var(--jp-border-color1);\n  color: var(--jp-ui-font-color0);\n  padding: 5px;\n  margin: 5px;\n  cursor: pointer;\n  background-color: var(--jp-border-color2);\n  display: flex;\n  align-items: center;\n}\n\n.jp-openJSONSettingsEditor button > div {\n  display: flex;\n}\n\n.jp-openJSONSettingsEditor svg#icon {\n  height: 1.5em;\n}\n\n.jp-SettingsPanel .array-item {\n  border: 1px solid var(--jp-border-color2);\n  border-radius: 4px;\n  margin: 4px;\n}\n\n.jp-SettingsPanel .field-array-of-string .array-item {\n  /* Display `jp-ArrayOperations` buttons side-by-side with content except\n    for small screens where flex-wrap will place them one below the other.\n  */\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.jp-SettingsPanel .jp-root > fieldset > legend {\n  display: none;\n}\n\n.jp-SettingsPanel .jp-root > fieldset > p {\n  display: none;\n}\n\n.jp-SettingsPanel .jp-SettingsHeader h2 {\n  font-size: var(--jp-content-font-size3);\n  color: var(--jp-ui-font-color0);\n  font-weight: 300;\n  margin: 1em;\n}\n\n.jp-SettingsPanel .jp-SettingsHeader-description {\n  font-size: var(--jp-content-font-size2);\n  color: var(--jp-ui-font-color1);\n  font-weight: 200;\n  margin: 1em;\n  line-height: var(--jp-content-font-size3);\n}\n\n.jp-SettingsPanel legend {\n  font-size: var(--jp-content-font-size2);\n  color: var(--jp-ui-font-color0);\n  flex-basis: 100%;\n  padding: 4px 0;\n  font-weight: var(--jp-content-header-font-weight);\n  border-bottom: 1px solid var(--jp-border-color2);\n}\n\n.jp-SettingsPanel .field-description {\n  padding: 4px 0;\n  white-space: pre-wrap;\n}\n\n.jp-SettingsPanel .jp-SettingsTitle {\n  display: flex;\n  align-items: center;\n  padding-left: 1em;\n}\n\n.jp-SettingsPanel .jp-SettingsTitle-caret {\n  width: 2em;\n  flex-shrink: 0;\n}\n\n.jp-SettingsForm {\n  position: relative;\n}\n\n.jp-SettingsPanel .jp-SettingsHeader {\n  display: flex;\n  flex: auto;\n  justify-content: space-between;\n  cursor: pointer;\n  border: 1px solid var(--jp-border-color2);\n}\n\n.jp-PluginList .jp-FilterBox {\n  margin: 8px 12px 0px 12px;\n}\n\n.jp-PluginList mark {\n  background-color: transparent;\n  font-weight: bold;\n  color: var(--jp-ui-font-color1);\n}\n\n.jp-PluginList-entry {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid transparent;\n  background: transparent;\n  overflow: hidden;\n  padding: 4px 0 4px 4px;\n  white-space: nowrap;\n}\n\n.jp-PluginList-entry li {\n  margin-left: 27px;\n  margin-top: 5px;\n  color: var(--jp-ui-font-color1);\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.jp-pluginList-entry-label {\n  display: flex;\n}\n\n.jp-pluginList-entry-label span {\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n}\n\n.jp-SettingsPanel .jp-SettingsHeader-Name {\n  text-transform: inherit;\n  font-size: var(--jp-content-font-size3);\n}\n\n.jp-SettingsPanel .jp-modifiedIndicator {\n  width: 5px;\n  background-color: var(--jp-brand-color2);\n  margin-top: 0;\n  margin-left: calc(var(--jp-private-settingeditor-modifier-indent) * -1);\n  flex-shrink: 0;\n}\n\n.jp-SettingsPanel .jp-FormGroup-fieldLabel {\n  font-size: var(--jp-content-font-size1);\n  font-weight: normal;\n  min-width: 120px;\n}\n\n.jp-SettingsPanel .jp-modifiedIndicator.jp-errorIndicator {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-SettingsPanel .validationErrors {\n  color: var(--jp-error-color0);\n}\n\n.jp-SettingsPanel .panel.errors {\n  display: none;\n}\n\n.jp-SettingsPanel .jp-SettingsEditor {\n  padding: 20px;\n}\n\n.jp-SettingsPanel .jp-SettingEditor-Switch .jp-switch {\n  position: absolute;\n  bottom: 0;\n  z-index: 999;\n  background-color: var(--jp-border-color3);\n  border: 1px solid var(--jp-border-color1);\n}\n\n.jp-SettingsPanel {\n  overflow-y: auto;\n  height: 100%;\n}\n\n.jp-SettingsForm button.jp-RestoreButton {\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  font-size: var(--jp-content-font-size2);\n  color: var(--jp-brand-color1);\n  cursor: pointer;\n  margin-right: 5px;\n}\n\n.jp-PluginEditor {\n  overflow: auto;\n}\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/settingeditor/style/base.css',
                    ],
                    names: [],
                    mappings:
                        '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',
                    sourcesContent: [
                        "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n:root {\n  --jp-private-settingeditor-debug-height: 28px;\n  --jp-private-settingeditor-key-width: 150px;\n  --jp-private-settingeditor-legend-height: 16px;\n  --jp-private-settingeditor-row-height: 16px;\n  --jp-private-settingeditor-toolbar-height: 28px;\n  --jp-private-settingeditor-type-width: 75px;\n  --jp-private-settingeditor-modifier-indent: 5px;\n}\n\n.jp-SettingsPanel,\n#json-setting-editor {\n  min-width: 360px;\n  min-height: 240px;\n  background-color: var(--jp-layout-color0);\n  margin-top: -1px;\n  outline: none;\n  color: var(--jp-content-font-color1) !important;\n  /* This is needed so that all font sizing of children done in ems is\n   * relative to this base size */\n  font-size: var(--jp-ui-font-size1);\n}\n\n#setting-editor > .lm-Widget,\n#json-setting-editor > .lm-Widget {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n#setting-editor .lm-SplitPanel-handle,\n#json-setting-editor .lm-SplitPanel-handle {\n  background-color: var(--jp-border-color2);\n}\n\n#json-setting-editor .jp-SettingEditorInstructions {\n  text-align: center;\n}\n\n#json-setting-editor .jp-SettingEditorInstructions-icon {\n  display: inline-block;\n  height: 78px;\n  margin: 2px 5px 2px 8px;\n  width: 60px;\n}\n\n#json-setting-editor .jp-SettingEditorInstructions-title {\n  color: var(--jp-ui-font-color0);\n  font-size: 32px;\n  font-weight: 200;\n  line-height: 78px;\n  vertical-align: top;\n}\n\n#json-setting-editor .jp-SettingEditorInstructions-text {\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size2);\n}\n\n.jp-PluginList {\n  min-width: 175px;\n  max-width: 275px;\n  background-color: var(--jp-layout-color2);\n}\n\n.jp-PluginList-wrapper {\n  overflow-y: auto;\n  height: 100%;\n}\n\n.jp-PluginList ul {\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  list-style-type: none;\n  margin: 0;\n  padding: 0;\n  overflow-y: auto;\n  position: relative;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n}\n\n.jp-PluginList .jp-SettingsHeader {\n  display: flex;\n  flex-basis: 100%;\n}\n\n.jp-PluginList .jp-SettingsHeader button {\n  color: var(--jp-private-notebook-selected-color);\n  white-space: nowrap;\n}\n\n.jp-PluginList .jp-PluginList-header {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  border-top: var(--jp-border-width) solid var(--jp-border-color2);\n}\n\n.jp-PluginList .jp-PluginList-noResults,\n.jp-PluginList .jp-PluginList-header {\n  flex: 0 0 auto;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n  font-size: var(--jp-ui-font-size0);\n  padding: 8px 8px 8px 12px;\n  margin: 10px;\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  border-top: var(--jp-border-width) solid var(--jp-border-color2);\n  color: var(--jp-content-font-color1);\n}\n\n.jp-PluginList .jp-SelectedIndicator {\n  width: 3px;\n  background-color: var(--jp-brand-color1);\n  height: var(--jp-cell-collapser-min-height);\n  visibility: hidden;\n}\n\n.jp-PluginList .jp-mod-selected .jp-SelectedIndicator {\n  visibility: inherit;\n}\n\n.jp-PluginList .jp-ErrorPlugin .jp-SelectedIndicator {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-PluginList button.jp-mod-selected.jp-ErrorPlugin span {\n  color: var(--jp-error-color0);\n}\n\n.jp-PluginList button.jp-mod-selected span {\n  font-weight: var(--jp-content-heading-font-weight);\n  color: var(--jp-brand-color1);\n}\n\n.jp-PluginList button span {\n  color: var(--jp-content-font-color1);\n  line-height: var(--jp-cell-collapser-min-height);\n}\n\n.jp-FormComponent li span {\n  overflow: hidden;\n}\n\n.jp-SettingEditor-header {\n  font-size: var(--jp-content-font-size4);\n  font-weight: var(--jp-content-heading-font-weight);\n  color: var(--jp-ui-font-color0);\n  padding: 20px 0 10px 20px;\n  border-bottom: 1px solid var(--jp-border-color2);\n  position: sticky;\n  top: 0;\n  z-index: 999;\n  background-color: var(--jp-layout-color0);\n}\n\n.jp-PluginList-Searcher {\n  margin: 5px;\n}\n\nul.jp-PluginList li.jp-mod-selected span.jp-PluginList-icon.jp-FileIcon {\n  background-image: var(--jp-icon-file-selected);\n}\n\n.jp-PluginList-icon {\n  display: flex;\n  height: 20px;\n  width: 20px;\n  margin-right: 3px;\n  position: relative;\n}\n\n.jp-SettingsRawEditor .jp-Toolbar {\n  color: var(--jp-ui-font-color0);\n  font-size: var(--jp-ui-font-size1);\n  height: var(--jp-private-settingeditor-toolbar-height);\n  max-height: var(--jp-private-settingeditor-toolbar-height);\n}\n\n.jp-SettingsRawEditor .jp-Toolbar .jp-ToolbarButtonComponent-label {\n  display: none;\n}\n\n.jp-SettingsRawEditor .jp-Toolbar-item {\n  margin-top: 1px;\n  align-items: center;\n}\n\n.jp-ToolbarButtonComponent-label\n  .jp-SettingsRawEditor.jp-mod-error\n  .jp-Toolbar-item.jp-BugIcon::after {\n  color: red;\n  content: '\\25CF'; /* Unicode circle character (error dot) */\n  font-size: 7px;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  top: 4px;\n  left: 6px;\n}\n\n.jp-SettingsRawEditor .jp-Inspector {\n  border-top: 2px solid var(--jp-layout-color2);\n  min-height: var(--jp-private-settingeditor-debug-height);\n  max-height: var(--jp-private-settingeditor-debug-height);\n}\n\n.jp-SettingsRawEditor .jp-Inspector.jp-SettingsDebug .jp-RenderedHTMLCommon {\n  padding: 2px 5px 2px 0;\n  width: 100%;\n}\n\n.jp-SettingsRawEditor .jp-Inspector.jp-SettingsDebug .jp-RenderedHTMLCommon p {\n  text-align: right;\n}\n\n.jp-SettingsPanel fieldset input,\n.jp-SettingsPanel fieldset select,\n.jp-SettingsPanel fieldset textarea {\n  font-size: var(--jp-content-font-size2);\n  border-color: var(--jp-input-border-color);\n  border-style: solid;\n  border-radius: 5px;\n  border-width: 1px;\n  padding: 6px 8px;\n  background: none;\n  color: var(--jp-content-font-color0);\n  height: inherit;\n}\n\n.jp-SettingsPanel fieldset input[type='checkbox'] {\n  position: relative;\n  top: 2px;\n  margin-left: 0;\n}\n\n/** copy of `input.jp-mod-styled:focus` style */\n.jp-SettingsPanel fieldset input:focus {\n  border: var(--jp-border-width) solid var(--md-blue-500);\n  box-shadow: inset 0 0 4px var(--md-blue-300);\n}\n\n.jp-SettingsPanel .checkbox label {\n  cursor: pointer;\n  font-size: var(--jp-content-font-size1);\n}\n\n.jp-SettingsPanel .checkbox p {\n  font-size: var(--jp-content-font-size1);\n}\n\n.jp-SettingsPanel .checkbox {\n  display: flex;\n  flex-direction: column-reverse;\n}\n\n.jp-SettingsPanel .checkbox .field-description {\n  /* Disable default description field for checkbox:\n   because other widgets do not have description fields,\n   we add descriptions to each widget on the field level.\n  */\n  display: none;\n}\n\n.jp-SettingsPanel button[type='submit'] {\n  display: none;\n}\n\n.jp-SettingsPanel .form-group {\n  display: flex;\n  padding: 4px 8px 4px var(--jp-private-settingeditor-modifier-indent);\n  margin-top: 5px;\n}\n\n.jp-SettingsPanel .jp-objectFieldWrapper .form-group {\n  padding: 2px 8px 2px var(--jp-private-settingeditor-modifier-indent);\n  margin-top: 2px;\n}\n\n.jp-ArrayOperations {\n  margin-left: 8px;\n}\n\n.jp-SettingsPanel .jp-FormGroup-content {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.jp-SettingsPanel .jp-FormGroup-contentItem {\n  margin-left: 7px;\n}\n\n.jp-SettingsPanel .jp-FormGroup-description {\n  flex-basis: 100%;\n  padding: 4px 7px;\n}\n\n.jp-SettingsPanel .jp-FormGroup-default {\n  flex-basis: 100%;\n  padding: 4px 7px;\n}\n\n.jp-SettingsPanel #root__description {\n  display: none;\n}\n\n.jp-SettingsPanel fieldset {\n  border: none;\n  padding: 0;\n}\n\n.jp-SettingsPanel fieldset:not(:first-child) {\n  margin-left: 7px;\n}\n\n.jp-SettingsPanel .jp-SaveSettingsBanner {\n  position: absolute;\n  bottom: 0;\n  padding: 20px;\n  width: 100%;\n  background: var(--jp-border-color3);\n}\n\n.jp-SettingsPanel .jp-SaveSettingsBanner button {\n  box-shadow: none;\n  outline: none;\n  border: none;\n  color: var(--jp-brand-color1);\n  font-size: var(--jp-ui-font-size1);\n  cursor: pointer;\n}\n\n.jp-SettingsPanel .jp-SaveSettingsBanner button:hover {\n  color: var(--jp-brand-color0);\n}\n\n.jp-SettingsPanel .form-group.small-field:hover {\n  background: var(--jp-border-color3);\n}\n\n.jp-SettingsPanel button.jp-mod-styled {\n  cursor: pointer;\n}\n\n.jp-SettingsPanel button.jp-mod-styled:disabled {\n  cursor: not-allowed;\n  opacity: 0.5;\n}\n\n.jp-SettingsPanel .array-item button {\n  margin: 2px;\n}\n\n.jp-openJSONSettingsEditor {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n\n.jp-openJSONSettingsEditor button {\n  border: 1px solid var(--jp-border-color1);\n  color: var(--jp-ui-font-color0);\n  padding: 5px;\n  margin: 5px;\n  cursor: pointer;\n  background-color: var(--jp-border-color2);\n  display: flex;\n  align-items: center;\n}\n\n.jp-openJSONSettingsEditor button > div {\n  display: flex;\n}\n\n.jp-openJSONSettingsEditor svg#icon {\n  height: 1.5em;\n}\n\n.jp-SettingsPanel .array-item {\n  border: 1px solid var(--jp-border-color2);\n  border-radius: 4px;\n  margin: 4px;\n}\n\n.jp-SettingsPanel .field-array-of-string .array-item {\n  /* Display `jp-ArrayOperations` buttons side-by-side with content except\n    for small screens where flex-wrap will place them one below the other.\n  */\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n}\n\n.jp-SettingsPanel .jp-root > fieldset > legend {\n  display: none;\n}\n\n.jp-SettingsPanel .jp-root > fieldset > p {\n  display: none;\n}\n\n.jp-SettingsPanel .jp-SettingsHeader h2 {\n  font-size: var(--jp-content-font-size3);\n  color: var(--jp-ui-font-color0);\n  font-weight: 300;\n  margin: 1em;\n}\n\n.jp-SettingsPanel .jp-SettingsHeader-description {\n  font-size: var(--jp-content-font-size2);\n  color: var(--jp-ui-font-color1);\n  font-weight: 200;\n  margin: 1em;\n  line-height: var(--jp-content-font-size3);\n}\n\n.jp-SettingsPanel legend {\n  font-size: var(--jp-content-font-size2);\n  color: var(--jp-ui-font-color0);\n  flex-basis: 100%;\n  padding: 4px 0;\n  font-weight: var(--jp-content-header-font-weight);\n  border-bottom: 1px solid var(--jp-border-color2);\n}\n\n.jp-SettingsPanel .field-description {\n  padding: 4px 0;\n  white-space: pre-wrap;\n}\n\n.jp-SettingsPanel .jp-SettingsTitle {\n  display: flex;\n  align-items: center;\n  padding-left: 1em;\n}\n\n.jp-SettingsPanel .jp-SettingsTitle-caret {\n  width: 2em;\n  flex-shrink: 0;\n}\n\n.jp-SettingsForm {\n  position: relative;\n}\n\n.jp-SettingsPanel .jp-SettingsHeader {\n  display: flex;\n  flex: auto;\n  justify-content: space-between;\n  cursor: pointer;\n  border: 1px solid var(--jp-border-color2);\n}\n\n.jp-PluginList .jp-FilterBox {\n  margin: 8px 12px 0px 12px;\n}\n\n.jp-PluginList mark {\n  background-color: transparent;\n  font-weight: bold;\n  color: var(--jp-ui-font-color1);\n}\n\n.jp-PluginList-entry {\n  display: flex;\n  flex-direction: column;\n  border: 1px solid transparent;\n  background: transparent;\n  overflow: hidden;\n  padding: 4px 0 4px 4px;\n  white-space: nowrap;\n}\n\n.jp-PluginList-entry li {\n  margin-left: 27px;\n  margin-top: 5px;\n  color: var(--jp-ui-font-color1);\n  overflow-x: hidden;\n  text-overflow: ellipsis;\n}\n\n.jp-pluginList-entry-label {\n  display: flex;\n}\n\n.jp-pluginList-entry-label span {\n  text-overflow: ellipsis;\n  overflow-x: hidden;\n  white-space: nowrap;\n}\n\n.jp-SettingsPanel .jp-SettingsHeader-Name {\n  text-transform: inherit;\n  font-size: var(--jp-content-font-size3);\n}\n\n.jp-SettingsPanel .jp-modifiedIndicator {\n  width: 5px;\n  background-color: var(--jp-brand-color2);\n  margin-top: 0;\n  margin-left: calc(var(--jp-private-settingeditor-modifier-indent) * -1);\n  flex-shrink: 0;\n}\n\n.jp-SettingsPanel .jp-FormGroup-fieldLabel {\n  font-size: var(--jp-content-font-size1);\n  font-weight: normal;\n  min-width: 120px;\n}\n\n.jp-SettingsPanel .jp-modifiedIndicator.jp-errorIndicator {\n  background-color: var(--jp-error-color0);\n}\n\n.jp-SettingsPanel .validationErrors {\n  color: var(--jp-error-color0);\n}\n\n.jp-SettingsPanel .panel.errors {\n  display: none;\n}\n\n.jp-SettingsPanel .jp-SettingsEditor {\n  padding: 20px;\n}\n\n.jp-SettingsPanel .jp-SettingEditor-Switch .jp-switch {\n  position: absolute;\n  bottom: 0;\n  z-index: 999;\n  background-color: var(--jp-border-color3);\n  border: 1px solid var(--jp-border-color1);\n}\n\n.jp-SettingsPanel {\n  overflow-y: auto;\n  height: 100%;\n}\n\n.jp-SettingsForm button.jp-RestoreButton {\n  white-space: nowrap;\n  background: none;\n  border: none;\n  outline: none;\n  box-shadow: none;\n  font-size: var(--jp-content-font-size2);\n  color: var(--jp-brand-color1);\n  cursor: pointer;\n  margin-right: 5px;\n}\n\n.jp-PluginEditor {\n  overflow: auto;\n}\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        82122: (n, o, e) => {
            e.d(o, { Z: () => a });
            var t = e(34663),
                r = e.n(t),
                A = e(7638),
                i = e.n(A)()(r());
            i.push([
                n.id,
                "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/*-----------------------------------------------------------------------------\n| Table of Contents\n|----------------------------------------------------------------------------*/\n\n.jp-TableOfContents-content {\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  overflow: auto;\n  background-color: var(--jp-layout-color1);\n}\n\n.jp-TableOfContents-content li {\n  display: flex;\n  flex-direction: row;\n  padding: 4px 12px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.jp-TableOfContents {\n  display: flex;\n  flex-direction: column;\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  height: 100%;\n}\n\n.jp-TableOfContents .jp-stack-panel-header {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  flex: 0 0 auto;\n  font-size: var(--jp-ui-font-size0);\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin: 0px;\n  padding: 8px 12px;\n  text-transform: uppercase;\n}\n\n.jp-TableOfContents-codeContainer {\n  overflow: hidden;\n}\n\n.jp-TableOfContents-code {\n  font-size: 9px;\n  max-height: 70px;\n}\n\n.cm-toc .CodeMirror {\n  font-size: 9px;\n  z-index: 0;\n  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);\n  border-radius: 0px;\n  background: var(--jp-cell-editor-background);\n  max-width: 100%;\n  max-height: 36px;\n}\n\n.toc-code-span {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.cm-toc .CodeMirror-scroll {\n  overflow: hidden !important;\n}\n\n.CodeMirror-scroll::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n.toc-toolbar-icon,\n.toc-toolbar-icon-selected {\n  float: left;\n  padding: 0px;\n  margin: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-color: none;\n  background-size: 100%;\n  background-position: center;\n  height: 24px;\n  width: 24px;\n  margin: 4px;\n  border-radius: 2px;\n}\n\n[data-jp-theme-light='true'] .toc-toolbar-icon:hover {\n  background-color: var(--jp-input-background);\n}\n\n[data-jp-theme-light='false'] .toc-toolbar-icon:hover {\n  background-color: #3a3a3a;\n}\n\n[data-jp-theme-light='true'] .toc-toolbar-icon-selected {\n  background-color: var(--jp-layout-color2);\n}\n\n[data-jp-theme-light='false'] .toc-toolbar-icon-selected {\n  background-color: #565656;\n}\n\n.toc-code-cell-prompt {\n  flex: 0 0 27px;\n  color: var(--jp-cell-prompt-not-active-font-color);\n  opacity: var(--jp-cell-prompt-not-active-opacity);\n  font-family: var(--jp-cell-prompt-font-family);\n  padding: var(--jp-code-padding);\n  padding-right: 0px;\n  padding-left: 0px;\n  letter-spacing: var(--jp-cell-prompt-letter-spacing);\n  line-height: var(--jp-code-line-height);\n  font-size: 8px;\n  border: var(--jp-border-width) solid transparent;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.toc-toolbar {\n  position: relative;\n  width: 100%;\n  margin: 0px;\n  user-select: none;\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  height: 36px;\n  display: flex;\n  align-items: center;\n}\n\n.toc-code-cell-div {\n  display: inline-flex;\n  width: 100%;\n}\n\n.toc-entry-holder {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  padding: 0px;\n  margin: 0px;\n  overflow: visible;\n}\n\n.toc-Collapser-child {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n}\n\n.toc-entry-holder:hover .toc-Collapser-child {\n  box-shadow: var(--jp-elevation-z2);\n  background: var(--jp-brand-color1);\n  opacity: var(--jp-cell-collapser-not-active-hover-opacity);\n}\n\n.toc-active-cell .toc-Collapser-child {\n  background: var(--jp-brand-color1);\n}\n\n.toc-active-cell .toc-Collapser-child:hover {\n  background: var(--jp-brand-color0);\n  opacity: 1;\n}\n\n.toc-active-cell:hover .toc-Collapser-child {\n  background: var(--jp-brand-color0);\n  opacity: 1;\n}\n\n.toc-Collapser-child {\n  background: transparent;\n}\n\n.toc-Collapser-child:hover {\n  box-shadow: var(--jp-elevation-z2);\n  background: var(--jp-brand-color1);\n  opacity: var(--jp-cell-collapser-not-active-hover-opacity);\n}\n\n.toc-twist-placeholder {\n  max-width: 10px;\n  opacity: 0;\n  overflow: hidden;\n}\n\n.cm-toc-plain-span {\n  width: 100%;\n  white-space: pre-wrap;\n  display: block;\n}\n\n.cm-toc-plain-textarea {\n  font-size: 9px;\n  z-index: 0;\n  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color2);\n  border-radius: 0px;\n  background: var(--jp-cell-editor-background);\n  width: calc(100% - 9px);\n  overflow: hidden;\n  max-height: 74px;\n  resize: none;\n  font-family: var(--jp-code-font-family);\n  outline: none;\n  user-select: none;\n  white-space: pre;\n  padding: var(--jp-code-padding);\n}\n\n.cm-toc .CodeMirror-sizer {\n  min-width: 0px !important;\n  min-height: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.cm-toc .CodeMirror-line {\n  white-space: pre-wrap;\n  cursor: pointer;\n}\n\n.cm-toc .CodeMirror-lines {\n  cursor: pointer;\n}\n\n.toc-tag-dropdown {\n  display: flex;\n  width: 100%;\n}\n\n.toc-tag-dropdown-button {\n  margin-left: auto;\n}\n\n.toc-tags-container {\n  padding: 4px;\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n}\n\n.toc-clear-button {\n  font-size: 12px;\n  color: var(--jp-ui-font-color1);\n  padding-left: 15px;\n  user-select: none;\n  float: right;\n}\n\n.toc-clear-button:hover {\n  font-size: 12px;\n  color: var(--jp-ui-font-color2);\n  padding-left: 15px;\n  user-select: none;\n}\n\n.toc-filter-button {\n  background-color: var(--jp-layout-color1);\n  border: solid 1px var(--jp-layout-color4);\n  border-radius: 3px;\n  width: fit-content;\n  padding: 5px;\n  padding-left: 6px;\n  padding-right: 6px;\n  margin-right: 17px;\n  color: var(--jp-layout-color5);\n  float: right;\n  font-size: 12px;\n  user-select: none;\n  margin-bottom: 13px;\n}\n\n.toc-filter-button:hover {\n  background-color: var(--jp-layout-color4);\n  border: solid 1px var(--jp-layout-color4);\n  color: var(--jp-layout-color1);\n}\n\n.toc-filter-button-na {\n  background-color: var(--jp-layout-color1);\n  border: solid 1px var(--jp-ui-font-color3);\n  border-radius: 3px;\n  width: fit-content;\n  padding: 5px;\n  padding-left: 6px;\n  padding-right: 6px;\n  margin-right: 17px;\n  color: var(--jp-ui-font-color3);\n  float: right;\n  font-size: 12px;\n  user-select: none;\n  margin-bottom: 13px;\n}\n\n.toc-no-tags-div {\n  font-size: 12px;\n  padding: 3px;\n  padding-bottom: 6px;\n  margin: auto;\n  color: var(--jp-layout-color4);\n}\n\n.toc-tags-container {\n  width: 100%;\n}\n\n.jp-TableOfContents-content code {\n  font-size: inherit;\n}\n\n.toc-cell-item {\n  padding-left: 10px;\n  font-size: var(--jp-ui-font-size1);\n  /* Push ellipse button and execution indicator to right */\n  margin-right: auto;\n}\n\n/* styles for tags */\n\n.toc-tag-label {\n  font-size: 11px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  display: inline-block;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding-top: 0px;\n  margin-top: -1px;\n  margin-bottom: 0px;\n  user-select: none;\n}\n\n.toc-tag {\n  box-sizing: border-box;\n  height: 24px;\n  border-radius: 20px;\n  padding: 10px;\n  padding-bottom: 4px;\n  padding-top: 5px;\n  margin: 3px;\n  width: fit-content;\n  max-width: calc(100% - 25px);\n}\n\n.toc-selected-tag {\n  color: white;\n  background-color: #2196f3;\n  outline: none;\n}\n\n.toc-unselected-tag {\n  background-color: var(--jp-layout-color2);\n  outline: none;\n}\n\n.toc-tag-holder {\n  display: flex;\n  flex-wrap: wrap;\n  height: fit-content;\n  padding-bottom: 6px;\n  padding-right: 20px;\n  padding-left: 9px;\n  padding-top: 6px;\n}\n\n.toc-Ellipses {\n  box-sizing: border-box;\n  height: 16px;\n}\n\n.toc-Ellipses:hover {\n  border: var(--jp-border-width) solid var(--jp-border-color1);\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);\n  background-color: var(--jp-layout-color0);\n}\n\n/*\n * Execution indicator\n */\n.toc-entry-holder::after {\n  content: '';\n  /* Must be identical to form a circle */\n  width: 12px;\n  height: 12px;\n  margin: 2px;\n  background: none;\n  border: none;\n}\n\n.toc-entry-holder[data-running='0']::after {\n  border-radius: 50%;\n  border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);\n  background: none;\n}\n\n.toc-entry-holder[data-running='1']::after {\n  border-radius: 50%;\n  border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);\n  background-color: var(--jp-inverse-layout-color3);\n}\n\n/* \n * Indentation levels\n */\n\n.toc-level-size-2 {\n  margin-left: 16px;\n}\n\n.toc-level-size-3 {\n  margin-left: 36px;\n}\n\n.toc-level-size-4 {\n  margin-left: 56px;\n}\n\n.toc-level-size-5 {\n  margin-left: 76px;\n}\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/@jupyterlab/toc/style/base.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;8EAG8E;;AAE9E;;8EAE8E;;AAE9E;EACE,cAAc;EACd,SAAS;EACT,UAAU;EACV,qBAAqB;EACrB,cAAc;EACd,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;EACjB,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mCAAmC;EACnC,+BAA+B;EAC/B,kCAAkC;EAClC,YAAY;AACd;;AAEA;EACE,mEAAmE;EACnE,cAAc;EACd,kCAAkC;EAClC,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;EACX,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,gBAAgB;AAClB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,uEAAuE;EACvE,kBAAkB;EAClB,4CAA4C;EAC5C,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,eAAe;EACf,gBAAgB;AAClB;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,6BAA6B;AAC/B;;AAEA;;EAEE,WAAW;EACX,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,4BAA4B;EAC5B,sBAAsB;EACtB,qBAAqB;EACrB,2BAA2B;EAC3B,YAAY;EACZ,WAAW;EACX,WAAW;EACX,kBAAkB;AACpB;;AAEA;EACE,4CAA4C;AAC9C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,yCAAyC;AAC3C;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,cAAc;EACd,kDAAkD;EAClD,iDAAiD;EACjD,8CAA8C;EAC9C,+BAA+B;EAC/B,kBAAkB;EAClB,iBAAiB;EACjB,oDAAoD;EACpD,uCAAuC;EACvC,cAAc;EACd,gDAAgD;EAChD,gBAAgB;EAChB,mBAAmB;EACnB,gBAAgB;EAChB,uBAAuB;EACvB,yBAAyB;EACzB,sBAAsB;EACtB,qBAAqB;EACrB,iBAAiB;AACnB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,WAAW;EACX,iBAAiB;EACjB,mEAAmE;EACnE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,oBAAoB;EACpB,WAAW;AACb;;AAEA;EACE,WAAW;EACX,aAAa;EACb,mBAAmB;EACnB,YAAY;EACZ,WAAW;EACX,iBAAiB;AACnB;;AAEA;EACE,cAAc;EACd,WAAW;EACX,sBAAsB;EACtB,kBAAkB;EAClB,QAAQ;EACR,WAAW;AACb;;AAEA;EACE,kCAAkC;EAClC,kCAAkC;EAClC,0DAA0D;AAC5D;;AAEA;EACE,kCAAkC;AACpC;;AAEA;EACE,kCAAkC;EAClC,UAAU;AACZ;;AAEA;EACE,kCAAkC;EAClC,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,kCAAkC;EAClC,kCAAkC;EAClC,0DAA0D;AAC5D;;AAEA;EACE,eAAe;EACf,UAAU;EACV,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,qBAAqB;EACrB,cAAc;AAChB;;AAEA;EACE,cAAc;EACd,UAAU;EACV,wEAAwE;EACxE,kBAAkB;EAClB,4CAA4C;EAC5C,uBAAuB;EACvB,gBAAgB;EAChB,gBAAgB;EAChB,YAAY;EACZ,uCAAuC;EACvC,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAChB,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,0BAA0B;EAC1B,6BAA6B;AAC/B;;AAEA;EACE,qBAAqB;EACrB,eAAe;AACjB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,WAAW;AACb;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,mEAAmE;AACrE;;AAEA;EACE,eAAe;EACf,+BAA+B;EAC/B,kBAAkB;EAClB,iBAAiB;EACjB,YAAY;AACd;;AAEA;EACE,eAAe;EACf,+BAA+B;EAC/B,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,yCAAyC;EACzC,yCAAyC;EACzC,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,8BAA8B;EAC9B,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,yCAAyC;EACzC,yCAAyC;EACzC,8BAA8B;AAChC;;AAEA;EACE,yCAAyC;EACzC,0CAA0C;EAC1C,kBAAkB;EAClB,kBAAkB;EAClB,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,+BAA+B;EAC/B,YAAY;EACZ,eAAe;EACf,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;EACE,eAAe;EACf,YAAY;EACZ,mBAAmB;EACnB,YAAY;EACZ,8BAA8B;AAChC;;AAEA;EACE,WAAW;AACb;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,kCAAkC;EAClC,yDAAyD;EACzD,kBAAkB;AACpB;;AAEA,oBAAoB;;AAEpB;EACE,eAAe;EACf,eAAe;EACf,uBAAuB;EACvB,qBAAqB;EACrB,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,gBAAgB;EAChB,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,sBAAsB;EACtB,YAAY;EACZ,mBAAmB;EACnB,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,kBAAkB;EAClB,4BAA4B;AAC9B;;AAEA;EACE,YAAY;EACZ,yBAAyB;EACzB,aAAa;AACf;;AAEA;EACE,yCAAyC;EACzC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA;EACE,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,4DAA4D;EAC5D,+CAA+C;EAC/C,yCAAyC;AAC3C;;AAEA;;EAEE;AACF;EACE,WAAW;EACX,uCAAuC;EACvC,WAAW;EACX,YAAY;EACZ,WAAW;EACX,gBAAgB;EAChB,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,oEAAoE;EACpE,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,oEAAoE;EACpE,iDAAiD;AACnD;;AAEA;;EAEE;;AAEF;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,iBAAiB;AACnB',
                    sourcesContent: [
                        "/*-----------------------------------------------------------------------------\n| Copyright (c) Jupyter Development Team.\n| Distributed under the terms of the Modified BSD License.\n|----------------------------------------------------------------------------*/\n\n/*-----------------------------------------------------------------------------\n| Table of Contents\n|----------------------------------------------------------------------------*/\n\n.jp-TableOfContents-content {\n  flex: 1 1 auto;\n  margin: 0;\n  padding: 0;\n  list-style-type: none;\n  overflow: auto;\n  background-color: var(--jp-layout-color1);\n}\n\n.jp-TableOfContents-content li {\n  display: flex;\n  flex-direction: row;\n  padding: 4px 12px;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  cursor: pointer;\n  padding-top: 8px;\n  padding-bottom: 8px;\n}\n\n.jp-TableOfContents {\n  display: flex;\n  flex-direction: column;\n  background: var(--jp-layout-color1);\n  color: var(--jp-ui-font-color1);\n  font-size: var(--jp-ui-font-size1);\n  height: 100%;\n}\n\n.jp-TableOfContents .jp-stack-panel-header {\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  flex: 0 0 auto;\n  font-size: var(--jp-ui-font-size0);\n  font-weight: 600;\n  letter-spacing: 1px;\n  margin: 0px;\n  padding: 8px 12px;\n  text-transform: uppercase;\n}\n\n.jp-TableOfContents-codeContainer {\n  overflow: hidden;\n}\n\n.jp-TableOfContents-code {\n  font-size: 9px;\n  max-height: 70px;\n}\n\n.cm-toc .CodeMirror {\n  font-size: 9px;\n  z-index: 0;\n  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color);\n  border-radius: 0px;\n  background: var(--jp-cell-editor-background);\n  max-width: 100%;\n  max-height: 36px;\n}\n\n.toc-code-span {\n  width: 100%;\n  max-width: 100%;\n  overflow: hidden;\n}\n\n.cm-toc .CodeMirror-scroll {\n  overflow: hidden !important;\n}\n\n.CodeMirror-scroll::-webkit-scrollbar-track {\n  background-color: transparent;\n}\n\n.toc-toolbar-icon,\n.toc-toolbar-icon-selected {\n  float: left;\n  padding: 0px;\n  margin: 4px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  background-repeat: no-repeat;\n  background-color: none;\n  background-size: 100%;\n  background-position: center;\n  height: 24px;\n  width: 24px;\n  margin: 4px;\n  border-radius: 2px;\n}\n\n[data-jp-theme-light='true'] .toc-toolbar-icon:hover {\n  background-color: var(--jp-input-background);\n}\n\n[data-jp-theme-light='false'] .toc-toolbar-icon:hover {\n  background-color: #3a3a3a;\n}\n\n[data-jp-theme-light='true'] .toc-toolbar-icon-selected {\n  background-color: var(--jp-layout-color2);\n}\n\n[data-jp-theme-light='false'] .toc-toolbar-icon-selected {\n  background-color: #565656;\n}\n\n.toc-code-cell-prompt {\n  flex: 0 0 27px;\n  color: var(--jp-cell-prompt-not-active-font-color);\n  opacity: var(--jp-cell-prompt-not-active-opacity);\n  font-family: var(--jp-cell-prompt-font-family);\n  padding: var(--jp-code-padding);\n  padding-right: 0px;\n  padding-left: 0px;\n  letter-spacing: var(--jp-cell-prompt-letter-spacing);\n  line-height: var(--jp-code-line-height);\n  font-size: 8px;\n  border: var(--jp-border-width) solid transparent;\n  text-align: left;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.toc-toolbar {\n  position: relative;\n  width: 100%;\n  margin: 0px;\n  user-select: none;\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n  height: 36px;\n  display: flex;\n  align-items: center;\n}\n\n.toc-code-cell-div {\n  display: inline-flex;\n  width: 100%;\n}\n\n.toc-entry-holder {\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  padding: 0px;\n  margin: 0px;\n  overflow: visible;\n}\n\n.toc-Collapser-child {\n  display: block;\n  width: 100%;\n  box-sizing: border-box;\n  position: absolute;\n  top: 0px;\n  bottom: 0px;\n}\n\n.toc-entry-holder:hover .toc-Collapser-child {\n  box-shadow: var(--jp-elevation-z2);\n  background: var(--jp-brand-color1);\n  opacity: var(--jp-cell-collapser-not-active-hover-opacity);\n}\n\n.toc-active-cell .toc-Collapser-child {\n  background: var(--jp-brand-color1);\n}\n\n.toc-active-cell .toc-Collapser-child:hover {\n  background: var(--jp-brand-color0);\n  opacity: 1;\n}\n\n.toc-active-cell:hover .toc-Collapser-child {\n  background: var(--jp-brand-color0);\n  opacity: 1;\n}\n\n.toc-Collapser-child {\n  background: transparent;\n}\n\n.toc-Collapser-child:hover {\n  box-shadow: var(--jp-elevation-z2);\n  background: var(--jp-brand-color1);\n  opacity: var(--jp-cell-collapser-not-active-hover-opacity);\n}\n\n.toc-twist-placeholder {\n  max-width: 10px;\n  opacity: 0;\n  overflow: hidden;\n}\n\n.cm-toc-plain-span {\n  width: 100%;\n  white-space: pre-wrap;\n  display: block;\n}\n\n.cm-toc-plain-textarea {\n  font-size: 9px;\n  z-index: 0;\n  border: var(--jp-border-width) solid var(--jp-cell-editor-border-color2);\n  border-radius: 0px;\n  background: var(--jp-cell-editor-background);\n  width: calc(100% - 9px);\n  overflow: hidden;\n  max-height: 74px;\n  resize: none;\n  font-family: var(--jp-code-font-family);\n  outline: none;\n  user-select: none;\n  white-space: pre;\n  padding: var(--jp-code-padding);\n}\n\n.cm-toc .CodeMirror-sizer {\n  min-width: 0px !important;\n  min-height: 0px !important;\n  margin-bottom: 0px !important;\n}\n\n.cm-toc .CodeMirror-line {\n  white-space: pre-wrap;\n  cursor: pointer;\n}\n\n.cm-toc .CodeMirror-lines {\n  cursor: pointer;\n}\n\n.toc-tag-dropdown {\n  display: flex;\n  width: 100%;\n}\n\n.toc-tag-dropdown-button {\n  margin-left: auto;\n}\n\n.toc-tags-container {\n  padding: 4px;\n  border-bottom: var(--jp-border-width) solid var(--jp-border-color2);\n}\n\n.toc-clear-button {\n  font-size: 12px;\n  color: var(--jp-ui-font-color1);\n  padding-left: 15px;\n  user-select: none;\n  float: right;\n}\n\n.toc-clear-button:hover {\n  font-size: 12px;\n  color: var(--jp-ui-font-color2);\n  padding-left: 15px;\n  user-select: none;\n}\n\n.toc-filter-button {\n  background-color: var(--jp-layout-color1);\n  border: solid 1px var(--jp-layout-color4);\n  border-radius: 3px;\n  width: fit-content;\n  padding: 5px;\n  padding-left: 6px;\n  padding-right: 6px;\n  margin-right: 17px;\n  color: var(--jp-layout-color5);\n  float: right;\n  font-size: 12px;\n  user-select: none;\n  margin-bottom: 13px;\n}\n\n.toc-filter-button:hover {\n  background-color: var(--jp-layout-color4);\n  border: solid 1px var(--jp-layout-color4);\n  color: var(--jp-layout-color1);\n}\n\n.toc-filter-button-na {\n  background-color: var(--jp-layout-color1);\n  border: solid 1px var(--jp-ui-font-color3);\n  border-radius: 3px;\n  width: fit-content;\n  padding: 5px;\n  padding-left: 6px;\n  padding-right: 6px;\n  margin-right: 17px;\n  color: var(--jp-ui-font-color3);\n  float: right;\n  font-size: 12px;\n  user-select: none;\n  margin-bottom: 13px;\n}\n\n.toc-no-tags-div {\n  font-size: 12px;\n  padding: 3px;\n  padding-bottom: 6px;\n  margin: auto;\n  color: var(--jp-layout-color4);\n}\n\n.toc-tags-container {\n  width: 100%;\n}\n\n.jp-TableOfContents-content code {\n  font-size: inherit;\n}\n\n.toc-cell-item {\n  padding-left: 10px;\n  font-size: var(--jp-ui-font-size1);\n  /* Push ellipse button and execution indicator to right */\n  margin-right: auto;\n}\n\n/* styles for tags */\n\n.toc-tag-label {\n  font-size: 11px;\n  max-width: 100%;\n  text-overflow: ellipsis;\n  display: inline-block;\n  overflow: hidden;\n  box-sizing: border-box;\n  padding-top: 0px;\n  margin-top: -1px;\n  margin-bottom: 0px;\n  user-select: none;\n}\n\n.toc-tag {\n  box-sizing: border-box;\n  height: 24px;\n  border-radius: 20px;\n  padding: 10px;\n  padding-bottom: 4px;\n  padding-top: 5px;\n  margin: 3px;\n  width: fit-content;\n  max-width: calc(100% - 25px);\n}\n\n.toc-selected-tag {\n  color: white;\n  background-color: #2196f3;\n  outline: none;\n}\n\n.toc-unselected-tag {\n  background-color: var(--jp-layout-color2);\n  outline: none;\n}\n\n.toc-tag-holder {\n  display: flex;\n  flex-wrap: wrap;\n  height: fit-content;\n  padding-bottom: 6px;\n  padding-right: 20px;\n  padding-left: 9px;\n  padding-top: 6px;\n}\n\n.toc-Ellipses {\n  box-sizing: border-box;\n  height: 16px;\n}\n\n.toc-Ellipses:hover {\n  border: var(--jp-border-width) solid var(--jp-border-color1);\n  box-shadow: 0px 0px 2px 0px rgba(0, 0, 0, 0.25);\n  background-color: var(--jp-layout-color0);\n}\n\n/*\n * Execution indicator\n */\n.toc-entry-holder::after {\n  content: '';\n  /* Must be identical to form a circle */\n  width: 12px;\n  height: 12px;\n  margin: 2px;\n  background: none;\n  border: none;\n}\n\n.toc-entry-holder[data-running='0']::after {\n  border-radius: 50%;\n  border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);\n  background: none;\n}\n\n.toc-entry-holder[data-running='1']::after {\n  border-radius: 50%;\n  border: var(--jp-border-width) solid var(--jp-inverse-layout-color3);\n  background-color: var(--jp-inverse-layout-color3);\n}\n\n/* \n * Indentation levels\n */\n\n.toc-level-size-2 {\n  margin-left: 16px;\n}\n\n.toc-level-size-3 {\n  margin-left: 36px;\n}\n\n.toc-level-size-4 {\n  margin-left: 56px;\n}\n\n.toc-level-size-5 {\n  margin-left: 76px;\n}\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const a = i;
        },
        91778: (n, o, e) => {
            e(7819), e(26473), e(47317), e(1228), e(5316), e(82665);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(41228),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        45324: (n, o, e) => {
            e(26473), e(82665), e(47317), e(85637), e(5316);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(58288),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        90294: (n, o, e) => {
            e(47317), e(7819), e(1228), e(26473);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(27766),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals,
                e(57210),
                e(82892);
        },
        85436: (n, o, e) => {
            e(47317), e(7819), e(26473), e(57210);
        },
        57210: (n, o, e) => {
            e(47317), e(85637), e(7819);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(23263),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
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
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(44734),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
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
        23562: (n, o, e) => {
            e(85637), e(7819), e(1228), e(26473), e(47317);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(66983),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        49419: (n, o, e) => {
            e(7819), e(1228), e(26473), e(47317);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(51813),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        44376: (n, o, e) => {
            e(85637), e(7819), e(26473), e(66465), e(4070), e(8542), e(82665);
        },
        4070: (n, o, e) => {
            e(47317), e(7819), e(32887), e(98417);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(22581),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        27469: (n, o, e) => {
            e(47317), e(85637), e(7819), e(26473), e(8542);
        },
        24420: (n, o, e) => {
            e(47317),
                e(85637),
                e(7819),
                e(13277),
                e(98417),
                e(26473),
                e(1336),
                e(82665);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(43720),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        1336: (n, o, e) => {
            e(47317), e(98417), e(88754);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(49043),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        70453: (n, o, e) => {
            e(47317), e(85637), e(7819), e(26473), e(82892);
        },
        97027: (n, o, e) => {
            e(7819), e(98417), e(26473), e(96457);
        },
        96457: (n, o, e) => {
            e(47317), e(7819), e(98417), e(1228);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(93206),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
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
        4759: (n, o, e) => {
            e(47317);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(33924),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        12652: (n, o, e) => {
            e(47317), e(85637), e(1228), e(26473), e(7819);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(34729),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        8736: (n, o, e) => {
            e(85637), e(7819), e(32887), e(98417), e(26473), e(47317), e(4070);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(36761),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        8259: (n, o, e) => {
            e(47317),
                e(85637),
                e(7819),
                e(13277),
                e(1228),
                e(26473),
                e(5316),
                e(66465),
                e(4168),
                e(82665);
        },
        65790: (n, o, e) => {
            e(85637),
                e(98417),
                e(26473),
                e(56589),
                e(5316),
                e(4168),
                e(96457),
                e(82665),
                e(47317),
                e(7819),
                e(1228);
            var t = e(1892),
                r = e.n(t),
                A = e(95760),
                i = e.n(A),
                a = e(38311),
                p = e.n(a),
                l = e(58192),
                s = e.n(l),
                d = e(38060),
                c = e.n(d),
                C = e(54865),
                E = e.n(C),
                u = e(82122),
                g = {};
            (g.styleTagTransform = E()),
                (g.setAttributes = s()),
                (g.insert = p().bind(null, 'head')),
                (g.domAPI = i()),
                (g.insertStyleElement = c()),
                r()(u.Z, g),
                u.Z && u.Z.locals && u.Z.locals;
        },
        42188: (n, o, e) => {
            e(85637), e(26473);
        },
    },
]);
//# sourceMappingURL=8698.9817d75.js.map
