'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [4569],
    {
        86815: (n, o, r) => {
            r.d(o, { Z: () => s });
            var e = r(34663),
                t = r.n(e),
                a = r(7638),
                i = r.n(a)()(t());
            i.push([
                n.id,
                "/*\n * abbott.css\n * A warm, dark theme for prose and code, with pastels and pretty greens.\n *\n * Ported from abbott.vim (https://github.com/bcat/abbott.vim) version 2.1.\n * Original design and CodeMirror port by Jonathan Rascher.\n *\n * This theme shares the following color palette with the Vim color scheme.\n *\n * Brown shades:\n *   bistre: #231c14\n *   chocolate: #3c3022\n *   cocoa: #745d42\n *   vanilla_cream: #fef3b4\n *\n * Red shades:\n *   crimson: #d80450\n *   cinnabar: #f63f05\n *\n * Green shades:\n *   dark_olive: #273900\n *   forest_green: #24a507\n *   chartreuse: #a0ea00\n *   pastel_chartreuse: #d8ff84\n *\n * Yellow shades:\n *   marigold: #fbb32f\n *   lemon_meringue: #fbec5d\n *\n * Blue shades:\n *   cornflower_blue: #3f91f1\n *   periwinkle_blue: #8ccdf0\n *\n * Magenta shades:\n *   french_pink: #ec6c99\n *   lavender: #e6a2f3\n *\n * Cyan shades:\n *   zomp: #39a78d\n *   seafoam_green: #00ff7f\n */\n\n/* Style the UI: */\n\n/* Equivalent to Vim's Normal group. */\n.cm-s-abbott.CodeMirror {\n  background: #231c14 /* bistre */;\n  color: #d8ff84 /* pastel_chartreuse */;\n}\n\n/* Roughly equivalent to Vim's LineNr group. */\n.cm-s-abbott .CodeMirror-gutters {\n  background: #231c14 /* bistre */;\n  border: none;\n}\n.cm-s-abbott .CodeMirror-linenumber { color: #fbec5d /* lemon_meringue */; }\n\n.cm-s-abbott .CodeMirror-guttermarker { color: #f63f05 /* cinnabar */; }\n\n/* Roughly equivalent to Vim's FoldColumn group. */\n.cm-s-abbott .CodeMirror-guttermarker-subtle { color: #fbb32f /* marigold */; }\n\n/*\n * Roughly equivalent to Vim's CursorColumn group. (We use a brighter color\n * since Vim's cursorcolumn option highlights a whole column, whereas\n * CodeMirror's rule just highlights a thin line.)\n */\n.cm-s-abbott .CodeMirror-ruler { border-color: #745d42 /* cocoa */; }\n\n/* Equivalent to Vim's Cursor group in insert mode. */\n.cm-s-abbott .CodeMirror-cursor { border-color: #a0ea00 /* chartreuse */; }\n\n/* Equivalent to Vim's Cursor group in normal mode. */\n.cm-s-abbott.cm-fat-cursor .CodeMirror-cursor,\n.cm-s-abbott .cm-animate-fat-cursor {\n  /*\n   * CodeMirror doesn't allow changing the foreground color of the character\n   * under the cursor, so we can't use a reverse video effect for the cursor.\n   * Instead, make it semitransparent.\n   */\n  background: rgba(160, 234, 0, 0.5) /* chartreuse */;\n}\n.cm-s-abbott.cm-fat-cursor .CodeMirror-cursors {\n  /*\n   * Boost the z-index so the fat cursor shows up on top of text and\n   * matchingbracket/matchingtag highlights.\n   */\n  z-index: 3;\n}\n\n/* Equivalent to Vim's Cursor group in replace mode. */\n.cm-s-abbott .CodeMirror-overwrite .CodeMirror-cursor {\n  border-bottom: 1px solid #a0ea00 /* chartreuse */;\n  border-left: none;\n  width: auto;\n}\n\n/* Roughly equivalent to Vim's CursorIM group. */\n.cm-s-abbott .CodeMirror-secondarycursor {\n  border-color: #00ff7f /* seafoam_green */;\n}\n\n/* Roughly equivalent to Vim's Visual group. */\n.cm-s-abbott .CodeMirror-selected,\n.cm-s-abbott.CodeMirror-focused .CodeMirror-selected {\n  background: #273900 /* dark_olive */;\n}\n.cm-s-abbott .CodeMirror-line::selection,\n.cm-s-abbott .CodeMirror-line > span::selection,\n.cm-s-abbott .CodeMirror-line > span > span::selection {\n  background: #273900 /* dark_olive */;\n}\n.cm-s-abbott .CodeMirror-line::-moz-selection,\n.cm-s-abbott .CodeMirror-line > span::-moz-selection,\n.cm-s-abbott .CodeMirror-line > span > span::-moz-selection {\n  background: #273900 /* dark_olive */;\n}\n\n/* Roughly equivalent to Vim's SpecialKey group. */\n.cm-s-abbott .cm-tab { color: #00ff7f /* seafoam_green */; }\n\n/* Equivalent to Vim's Search group. */\n.cm-s-abbott .cm-searching {\n  background: #fef3b4 /* vanilla_cream */ !important;\n  color: #231c14 /* bistre */ !important;\n}\n\n/* Style syntax highlighting modes: */\n\n/* Equivalent to Vim's Comment group. */\n.cm-s-abbott span.cm-comment {\n  color: #fbb32f /* marigold */;\n  font-style: italic;\n}\n\n/* Equivalent to Vim's String group. */\n.cm-s-abbott span.cm-string,\n.cm-s-abbott span.cm-string-2 {\n  color: #e6a2f3 /* lavender */;\n}\n\n/* Equivalent to Vim's Constant group. */\n.cm-s-abbott span.cm-number,\n.cm-s-abbott span.cm-string.cm-url { color: #f63f05 /* cinnabar */; }\n\n/* Roughly equivalent to Vim's SpecialKey group. */\n.cm-s-abbott span.cm-invalidchar { color: #00ff7f /* seafoam_green */; }\n\n/* Equivalent to Vim's Special group. */\n.cm-s-abbott span.cm-atom { color: #fef3b4 /* vanilla_cream */; }\n\n/* Equivalent to Vim's Delimiter group. */\n.cm-s-abbott span.cm-bracket,\n.cm-s-abbott span.cm-punctuation {\n  color: #fef3b4 /* vanilla_cream */;\n}\n\n/* Equivalent Vim's Operator group. */\n.cm-s-abbott span.cm-operator { font-weight: bold; }\n\n/* Roughly equivalent to Vim's Identifier group. */\n.cm-s-abbott span.cm-def,\n.cm-s-abbott span.cm-variable,\n.cm-s-abbott span.cm-variable-2,\n.cm-s-abbott span.cm-variable-3 {\n  color: #8ccdf0 /* periwinkle_blue */;\n}\n\n/* Roughly equivalent to Vim's Function group. */\n.cm-s-abbott span.cm-builtin,\n.cm-s-abbott span.cm-property,\n.cm-s-abbott span.cm-qualifier {\n  color: #3f91f1 /* cornflower_blue */;\n}\n\n/* Equivalent to Vim's Type group. */\n.cm-s-abbott span.cm-type { color: #24a507 /* forest_green */; }\n\n/* Equivalent to Vim's Keyword group. */\n.cm-s-abbott span.cm-keyword {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's PreProc group. */\n.cm-s-abbott span.cm-meta { color: #ec6c99 /* french_pink */; }\n\n/* Equivalent to Vim's htmlTagName group (linked to Statement). */\n.cm-s-abbott span.cm-tag {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's htmlArg group (linked to Type). */\n.cm-s-abbott span.cm-attribute { color: #24a507 /* forest_green */; }\n\n/* Equivalent to Vim's htmlH1, markdownH1, etc. groups (linked to Title). */\n.cm-s-abbott span.cm-header {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's markdownRule group (linked to PreProc). */\n.cm-s-abbott span.cm-hr { color: #ec6c99 /* french_pink */; }\n\n/* Roughly equivalent to Vim's Underlined group. */\n.cm-s-abbott span.cm-link { color: #e6a2f3 /* lavender */; }\n\n/* Equivalent to Vim's diffRemoved group. */\n.cm-s-abbott span.cm-negative {\n  background: #d80450 /* crimson */;\n  color: #231c14 /* bistre */;\n}\n\n/* Equivalent to Vim's diffAdded group. */\n.cm-s-abbott span.cm-positive {\n  background: #a0ea00 /* chartreuse */;\n  color: #231c14 /* bistre */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's Error group. */\n.cm-s-abbott span.cm-error {\n  background: #d80450 /* crimson */;\n  color: #231c14 /* bistre */;\n}\n\n/* Style addons: */\n\n/* Equivalent to Vim's MatchParen group. */\n.cm-s-abbott span.CodeMirror-matchingbracket {\n  background: #745d42 /* cocoa */ !important;\n  color: #231c14 /* bistre */ !important;\n  font-weight: bold;\n}\n\n/*\n * Roughly equivalent to Vim's Error group. (Vim doesn't seem to have a direct\n * equivalent in its own matchparen plugin, but many syntax highlighting plugins\n * mark mismatched brackets as Error.)\n */\n.cm-s-abbott span.CodeMirror-nonmatchingbracket {\n  background: #d80450 /* crimson */ !important;\n  color: #231c14 /* bistre */ !important;\n}\n\n.cm-s-abbott .CodeMirror-matchingtag,\n.cm-s-abbott .cm-matchhighlight {\n  outline: 1px solid #39a78d /* zomp */;\n}\n\n/* Equivalent to Vim's CursorLine group. */\n.cm-s-abbott .CodeMirror-activeline-background,\n.cm-s-abbott .CodeMirror-activeline-gutter {\n  background: #3c3022 /* chocolate */;\n}\n\n/* Equivalent to Vim's CursorLineNr group. */\n.cm-s-abbott .CodeMirror-activeline-gutter .CodeMirror-linenumber {\n  color: #d8ff84 /* pastel_chartreuse */;\n  font-weight: bold;\n}\n\n/* Roughly equivalent to Vim's Folded group. */\n.cm-s-abbott .CodeMirror-foldmarker {\n  color: #f63f05 /* cinnabar */;\n  text-shadow: none;\n}\n",
                '',
                {
                    version: 3,
                    sources: [
                        'webpack://./../node_modules/codemirror/theme/abbott.css',
                    ],
                    names: [],
                    mappings:
                        'AAAA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;EAwCE;;AAEF,kBAAkB;;AAElB,sCAAsC;AACtC;EACE,gCAAgC;EAChC,sCAAsC;AACxC;;AAEA,8CAA8C;AAC9C;EACE,gCAAgC;EAChC,YAAY;AACd;AACA,sCAAsC,mCAAmC,EAAE;;AAE3E,wCAAwC,6BAA6B,EAAE;;AAEvE,kDAAkD;AAClD,+CAA+C,6BAA6B,EAAE;;AAE9E;;;;EAIE;AACF,iCAAiC,iCAAiC,EAAE;;AAEpE,qDAAqD;AACrD,kCAAkC,sCAAsC,EAAE;;AAE1E,qDAAqD;AACrD;;EAEE;;;;IAIE;EACF,mDAAmD;AACrD;AACA;EACE;;;IAGE;EACF,UAAU;AACZ;;AAEA,sDAAsD;AACtD;EACE,iDAAiD;EACjD,iBAAiB;EACjB,WAAW;AACb;;AAEA,gDAAgD;AAChD;EACE,yCAAyC;AAC3C;;AAEA,8CAA8C;AAC9C;;EAEE,oCAAoC;AACtC;AACA;;;EAGE,oCAAoC;AACtC;AACA;;;EAGE,oCAAoC;AACtC;;AAEA,kDAAkD;AAClD,uBAAuB,kCAAkC,EAAE;;AAE3D,sCAAsC;AACtC;EACE,kDAAkD;EAClD,sCAAsC;AACxC;;AAEA,qCAAqC;;AAErC,uCAAuC;AACvC;EACE,6BAA6B;EAC7B,kBAAkB;AACpB;;AAEA,sCAAsC;AACtC;;EAEE,6BAA6B;AAC/B;;AAEA,wCAAwC;AACxC;qCACqC,6BAA6B,EAAE;;AAEpE,kDAAkD;AAClD,mCAAmC,kCAAkC,EAAE;;AAEvE,uCAAuC;AACvC,4BAA4B,kCAAkC,EAAE;;AAEhE,yCAAyC;AACzC;;EAEE,kCAAkC;AACpC;;AAEA,qCAAqC;AACrC,gCAAgC,iBAAiB,EAAE;;AAEnD,kDAAkD;AAClD;;;;EAIE,oCAAoC;AACtC;;AAEA,gDAAgD;AAChD;;;EAGE,oCAAoC;AACtC;;AAEA,oCAAoC;AACpC,4BAA4B,iCAAiC,EAAE;;AAE/D,uCAAuC;AACvC;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA,uCAAuC;AACvC,4BAA4B,gCAAgC,EAAE;;AAE9D,iEAAiE;AACjE;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA,wDAAwD;AACxD,iCAAiC,iCAAiC,EAAE;;AAEpE,2EAA2E;AAC3E;EACE,4BAA4B;EAC5B,iBAAiB;AACnB;;AAEA,gEAAgE;AAChE,0BAA0B,gCAAgC,EAAE;;AAE5D,kDAAkD;AAClD,4BAA4B,6BAA6B,EAAE;;AAE3D,2CAA2C;AAC3C;EACE,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA,yCAAyC;AACzC;EACE,oCAAoC;EACpC,2BAA2B;EAC3B,iBAAiB;AACnB;;AAEA,qCAAqC;AACrC;EACE,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA,kBAAkB;;AAElB,0CAA0C;AAC1C;EACE,0CAA0C;EAC1C,sCAAsC;EACtC,iBAAiB;AACnB;;AAEA;;;;EAIE;AACF;EACE,4CAA4C;EAC5C,sCAAsC;AACxC;;AAEA;;EAEE,qCAAqC;AACvC;;AAEA,0CAA0C;AAC1C;;EAEE,mCAAmC;AACrC;;AAEA,4CAA4C;AAC5C;EACE,sCAAsC;EACtC,iBAAiB;AACnB;;AAEA,8CAA8C;AAC9C;EACE,6BAA6B;EAC7B,iBAAiB;AACnB',
                    sourcesContent: [
                        "/*\n * abbott.css\n * A warm, dark theme for prose and code, with pastels and pretty greens.\n *\n * Ported from abbott.vim (https://github.com/bcat/abbott.vim) version 2.1.\n * Original design and CodeMirror port by Jonathan Rascher.\n *\n * This theme shares the following color palette with the Vim color scheme.\n *\n * Brown shades:\n *   bistre: #231c14\n *   chocolate: #3c3022\n *   cocoa: #745d42\n *   vanilla_cream: #fef3b4\n *\n * Red shades:\n *   crimson: #d80450\n *   cinnabar: #f63f05\n *\n * Green shades:\n *   dark_olive: #273900\n *   forest_green: #24a507\n *   chartreuse: #a0ea00\n *   pastel_chartreuse: #d8ff84\n *\n * Yellow shades:\n *   marigold: #fbb32f\n *   lemon_meringue: #fbec5d\n *\n * Blue shades:\n *   cornflower_blue: #3f91f1\n *   periwinkle_blue: #8ccdf0\n *\n * Magenta shades:\n *   french_pink: #ec6c99\n *   lavender: #e6a2f3\n *\n * Cyan shades:\n *   zomp: #39a78d\n *   seafoam_green: #00ff7f\n */\n\n/* Style the UI: */\n\n/* Equivalent to Vim's Normal group. */\n.cm-s-abbott.CodeMirror {\n  background: #231c14 /* bistre */;\n  color: #d8ff84 /* pastel_chartreuse */;\n}\n\n/* Roughly equivalent to Vim's LineNr group. */\n.cm-s-abbott .CodeMirror-gutters {\n  background: #231c14 /* bistre */;\n  border: none;\n}\n.cm-s-abbott .CodeMirror-linenumber { color: #fbec5d /* lemon_meringue */; }\n\n.cm-s-abbott .CodeMirror-guttermarker { color: #f63f05 /* cinnabar */; }\n\n/* Roughly equivalent to Vim's FoldColumn group. */\n.cm-s-abbott .CodeMirror-guttermarker-subtle { color: #fbb32f /* marigold */; }\n\n/*\n * Roughly equivalent to Vim's CursorColumn group. (We use a brighter color\n * since Vim's cursorcolumn option highlights a whole column, whereas\n * CodeMirror's rule just highlights a thin line.)\n */\n.cm-s-abbott .CodeMirror-ruler { border-color: #745d42 /* cocoa */; }\n\n/* Equivalent to Vim's Cursor group in insert mode. */\n.cm-s-abbott .CodeMirror-cursor { border-color: #a0ea00 /* chartreuse */; }\n\n/* Equivalent to Vim's Cursor group in normal mode. */\n.cm-s-abbott.cm-fat-cursor .CodeMirror-cursor,\n.cm-s-abbott .cm-animate-fat-cursor {\n  /*\n   * CodeMirror doesn't allow changing the foreground color of the character\n   * under the cursor, so we can't use a reverse video effect for the cursor.\n   * Instead, make it semitransparent.\n   */\n  background: rgba(160, 234, 0, 0.5) /* chartreuse */;\n}\n.cm-s-abbott.cm-fat-cursor .CodeMirror-cursors {\n  /*\n   * Boost the z-index so the fat cursor shows up on top of text and\n   * matchingbracket/matchingtag highlights.\n   */\n  z-index: 3;\n}\n\n/* Equivalent to Vim's Cursor group in replace mode. */\n.cm-s-abbott .CodeMirror-overwrite .CodeMirror-cursor {\n  border-bottom: 1px solid #a0ea00 /* chartreuse */;\n  border-left: none;\n  width: auto;\n}\n\n/* Roughly equivalent to Vim's CursorIM group. */\n.cm-s-abbott .CodeMirror-secondarycursor {\n  border-color: #00ff7f /* seafoam_green */;\n}\n\n/* Roughly equivalent to Vim's Visual group. */\n.cm-s-abbott .CodeMirror-selected,\n.cm-s-abbott.CodeMirror-focused .CodeMirror-selected {\n  background: #273900 /* dark_olive */;\n}\n.cm-s-abbott .CodeMirror-line::selection,\n.cm-s-abbott .CodeMirror-line > span::selection,\n.cm-s-abbott .CodeMirror-line > span > span::selection {\n  background: #273900 /* dark_olive */;\n}\n.cm-s-abbott .CodeMirror-line::-moz-selection,\n.cm-s-abbott .CodeMirror-line > span::-moz-selection,\n.cm-s-abbott .CodeMirror-line > span > span::-moz-selection {\n  background: #273900 /* dark_olive */;\n}\n\n/* Roughly equivalent to Vim's SpecialKey group. */\n.cm-s-abbott .cm-tab { color: #00ff7f /* seafoam_green */; }\n\n/* Equivalent to Vim's Search group. */\n.cm-s-abbott .cm-searching {\n  background: #fef3b4 /* vanilla_cream */ !important;\n  color: #231c14 /* bistre */ !important;\n}\n\n/* Style syntax highlighting modes: */\n\n/* Equivalent to Vim's Comment group. */\n.cm-s-abbott span.cm-comment {\n  color: #fbb32f /* marigold */;\n  font-style: italic;\n}\n\n/* Equivalent to Vim's String group. */\n.cm-s-abbott span.cm-string,\n.cm-s-abbott span.cm-string-2 {\n  color: #e6a2f3 /* lavender */;\n}\n\n/* Equivalent to Vim's Constant group. */\n.cm-s-abbott span.cm-number,\n.cm-s-abbott span.cm-string.cm-url { color: #f63f05 /* cinnabar */; }\n\n/* Roughly equivalent to Vim's SpecialKey group. */\n.cm-s-abbott span.cm-invalidchar { color: #00ff7f /* seafoam_green */; }\n\n/* Equivalent to Vim's Special group. */\n.cm-s-abbott span.cm-atom { color: #fef3b4 /* vanilla_cream */; }\n\n/* Equivalent to Vim's Delimiter group. */\n.cm-s-abbott span.cm-bracket,\n.cm-s-abbott span.cm-punctuation {\n  color: #fef3b4 /* vanilla_cream */;\n}\n\n/* Equivalent Vim's Operator group. */\n.cm-s-abbott span.cm-operator { font-weight: bold; }\n\n/* Roughly equivalent to Vim's Identifier group. */\n.cm-s-abbott span.cm-def,\n.cm-s-abbott span.cm-variable,\n.cm-s-abbott span.cm-variable-2,\n.cm-s-abbott span.cm-variable-3 {\n  color: #8ccdf0 /* periwinkle_blue */;\n}\n\n/* Roughly equivalent to Vim's Function group. */\n.cm-s-abbott span.cm-builtin,\n.cm-s-abbott span.cm-property,\n.cm-s-abbott span.cm-qualifier {\n  color: #3f91f1 /* cornflower_blue */;\n}\n\n/* Equivalent to Vim's Type group. */\n.cm-s-abbott span.cm-type { color: #24a507 /* forest_green */; }\n\n/* Equivalent to Vim's Keyword group. */\n.cm-s-abbott span.cm-keyword {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's PreProc group. */\n.cm-s-abbott span.cm-meta { color: #ec6c99 /* french_pink */; }\n\n/* Equivalent to Vim's htmlTagName group (linked to Statement). */\n.cm-s-abbott span.cm-tag {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's htmlArg group (linked to Type). */\n.cm-s-abbott span.cm-attribute { color: #24a507 /* forest_green */; }\n\n/* Equivalent to Vim's htmlH1, markdownH1, etc. groups (linked to Title). */\n.cm-s-abbott span.cm-header {\n  color: #d80450 /* crimson */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's markdownRule group (linked to PreProc). */\n.cm-s-abbott span.cm-hr { color: #ec6c99 /* french_pink */; }\n\n/* Roughly equivalent to Vim's Underlined group. */\n.cm-s-abbott span.cm-link { color: #e6a2f3 /* lavender */; }\n\n/* Equivalent to Vim's diffRemoved group. */\n.cm-s-abbott span.cm-negative {\n  background: #d80450 /* crimson */;\n  color: #231c14 /* bistre */;\n}\n\n/* Equivalent to Vim's diffAdded group. */\n.cm-s-abbott span.cm-positive {\n  background: #a0ea00 /* chartreuse */;\n  color: #231c14 /* bistre */;\n  font-weight: bold;\n}\n\n/* Equivalent to Vim's Error group. */\n.cm-s-abbott span.cm-error {\n  background: #d80450 /* crimson */;\n  color: #231c14 /* bistre */;\n}\n\n/* Style addons: */\n\n/* Equivalent to Vim's MatchParen group. */\n.cm-s-abbott span.CodeMirror-matchingbracket {\n  background: #745d42 /* cocoa */ !important;\n  color: #231c14 /* bistre */ !important;\n  font-weight: bold;\n}\n\n/*\n * Roughly equivalent to Vim's Error group. (Vim doesn't seem to have a direct\n * equivalent in its own matchparen plugin, but many syntax highlighting plugins\n * mark mismatched brackets as Error.)\n */\n.cm-s-abbott span.CodeMirror-nonmatchingbracket {\n  background: #d80450 /* crimson */ !important;\n  color: #231c14 /* bistre */ !important;\n}\n\n.cm-s-abbott .CodeMirror-matchingtag,\n.cm-s-abbott .cm-matchhighlight {\n  outline: 1px solid #39a78d /* zomp */;\n}\n\n/* Equivalent to Vim's CursorLine group. */\n.cm-s-abbott .CodeMirror-activeline-background,\n.cm-s-abbott .CodeMirror-activeline-gutter {\n  background: #3c3022 /* chocolate */;\n}\n\n/* Equivalent to Vim's CursorLineNr group. */\n.cm-s-abbott .CodeMirror-activeline-gutter .CodeMirror-linenumber {\n  color: #d8ff84 /* pastel_chartreuse */;\n  font-weight: bold;\n}\n\n/* Roughly equivalent to Vim's Folded group. */\n.cm-s-abbott .CodeMirror-foldmarker {\n  color: #f63f05 /* cinnabar */;\n  text-shadow: none;\n}\n",
                    ],
                    sourceRoot: '',
                },
            ]);
            const s = i;
        },
        7638: n => {
            n.exports = function(n) {
                var o = [];
                return (
                    (o.toString = function() {
                        return this.map(function(o) {
                            var r = '',
                                e = void 0 !== o[5];
                            return (
                                o[4] &&
                                    (r += '@supports ('.concat(o[4], ') {')),
                                o[2] && (r += '@media '.concat(o[2], ' {')),
                                e &&
                                    (r += '@layer'.concat(
                                        o[5].length > 0 ? ' '.concat(o[5]) : '',
                                        ' {'
                                    )),
                                (r += n(o)),
                                e && (r += '}'),
                                o[2] && (r += '}'),
                                o[4] && (r += '}'),
                                r
                            );
                        }).join('');
                    }),
                    (o.i = function(n, r, e, t, a) {
                        'string' == typeof n && (n = [[null, n, void 0]]);
                        var i = {};
                        if (e)
                            for (var s = 0; s < this.length; s++) {
                                var c = this[s][0];
                                null != c && (i[c] = !0);
                            }
                        for (var A = 0; A < n.length; A++) {
                            var l = [].concat(n[A]);
                            (e && i[l[0]]) ||
                                (void 0 !== a &&
                                    (void 0 === l[5] ||
                                        (l[1] = '@layer'
                                            .concat(
                                                l[5].length > 0
                                                    ? ' '.concat(l[5])
                                                    : '',
                                                ' {'
                                            )
                                            .concat(l[1], '}')),
                                    (l[5] = a)),
                                r &&
                                    (l[2]
                                        ? ((l[1] = '@media '
                                              .concat(l[2], ' {')
                                              .concat(l[1], '}')),
                                          (l[2] = r))
                                        : (l[2] = r)),
                                t &&
                                    (l[4]
                                        ? ((l[1] = '@supports ('
                                              .concat(l[4], ') {')
                                              .concat(l[1], '}')),
                                          (l[4] = t))
                                        : (l[4] = ''.concat(t))),
                                o.push(l));
                        }
                    }),
                    o
                );
            };
        },
        34663: n => {
            n.exports = function(n) {
                var o = n[1],
                    r = n[3];
                if (!r) return o;
                if ('function' == typeof btoa) {
                    var e = btoa(
                            unescape(encodeURIComponent(JSON.stringify(r)))
                        ),
                        t = 'sourceMappingURL=data:application/json;charset=utf-8;base64,'.concat(
                            e
                        ),
                        a = '/*# '.concat(t, ' */'),
                        i = r.sources.map(function(n) {
                            return '/*# sourceURL='
                                .concat(r.sourceRoot || '')
                                .concat(n, ' */');
                        });
                    return [o]
                        .concat(i)
                        .concat([a])
                        .join('\n');
                }
                return [o].join('\n');
            };
        },
        64569: (n, o, r) => {
            r.r(o), r.d(o, { default: () => g });
            var e = r(1892),
                t = r.n(e),
                a = r(95760),
                i = r.n(a),
                s = r(38311),
                c = r.n(s),
                A = r(58192),
                l = r.n(A),
                m = r(38060),
                u = r.n(m),
                b = r(54865),
                C = r.n(b),
                d = r(86815),
                p = {};
            (p.styleTagTransform = C()),
                (p.setAttributes = l()),
                (p.insert = c().bind(null, 'head')),
                (p.domAPI = i()),
                (p.insertStyleElement = u()),
                t()(d.Z, p);
            const g = d.Z && d.Z.locals ? d.Z.locals : void 0;
        },
        1892: n => {
            var o = [];
            function r(n) {
                for (var r = -1, e = 0; e < o.length; e++)
                    if (o[e].identifier === n) {
                        r = e;
                        break;
                    }
                return r;
            }
            function e(n, e) {
                for (var a = {}, i = [], s = 0; s < n.length; s++) {
                    var c = n[s],
                        A = e.base ? c[0] + e.base : c[0],
                        l = a[A] || 0,
                        m = ''.concat(A, ' ').concat(l);
                    a[A] = l + 1;
                    var u = r(m),
                        b = {
                            css: c[1],
                            media: c[2],
                            sourceMap: c[3],
                            supports: c[4],
                            layer: c[5],
                        };
                    if (-1 !== u) o[u].references++, o[u].updater(b);
                    else {
                        var C = t(b, e);
                        (e.byIndex = s),
                            o.splice(s, 0, {
                                identifier: m,
                                updater: C,
                                references: 1,
                            });
                    }
                    i.push(m);
                }
                return i;
            }
            function t(n, o) {
                var r = o.domAPI(o);
                return (
                    r.update(n),
                    function(o) {
                        if (o) {
                            if (
                                o.css === n.css &&
                                o.media === n.media &&
                                o.sourceMap === n.sourceMap &&
                                o.supports === n.supports &&
                                o.layer === n.layer
                            )
                                return;
                            r.update((n = o));
                        } else r.remove();
                    }
                );
            }
            n.exports = function(n, t) {
                var a = e((n = n || []), (t = t || {}));
                return function(n) {
                    n = n || [];
                    for (var i = 0; i < a.length; i++) {
                        var s = r(a[i]);
                        o[s].references--;
                    }
                    for (var c = e(n, t), A = 0; A < a.length; A++) {
                        var l = r(a[A]);
                        0 === o[l].references &&
                            (o[l].updater(), o.splice(l, 1));
                    }
                    a = c;
                };
            };
        },
        38311: n => {
            var o = {};
            n.exports = function(n, r) {
                var e = (function(n) {
                    if (void 0 === o[n]) {
                        var r = document.querySelector(n);
                        if (
                            window.HTMLIFrameElement &&
                            r instanceof window.HTMLIFrameElement
                        )
                            try {
                                r = r.contentDocument.head;
                            } catch (n) {
                                r = null;
                            }
                        o[n] = r;
                    }
                    return o[n];
                })(n);
                if (!e)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid."
                    );
                e.appendChild(r);
            };
        },
        38060: n => {
            n.exports = function(n) {
                var o = document.createElement('style');
                return (
                    n.setAttributes(o, n.attributes), n.insert(o, n.options), o
                );
            };
        },
        58192: (n, o, r) => {
            n.exports = function(n) {
                var o = r.nc;
                o && n.setAttribute('nonce', o);
            };
        },
        95760: n => {
            n.exports = function(n) {
                var o = n.insertStyleElement(n);
                return {
                    update: function(r) {
                        !(function(n, o, r) {
                            var e = '';
                            r.supports &&
                                (e += '@supports ('.concat(r.supports, ') {')),
                                r.media &&
                                    (e += '@media '.concat(r.media, ' {'));
                            var t = void 0 !== r.layer;
                            t &&
                                (e += '@layer'.concat(
                                    r.layer.length > 0
                                        ? ' '.concat(r.layer)
                                        : '',
                                    ' {'
                                )),
                                (e += r.css),
                                t && (e += '}'),
                                r.media && (e += '}'),
                                r.supports && (e += '}');
                            var a = r.sourceMap;
                            a &&
                                'undefined' != typeof btoa &&
                                (e += '\n/*# sourceMappingURL=data:application/json;base64,'.concat(
                                    btoa(
                                        unescape(
                                            encodeURIComponent(
                                                JSON.stringify(a)
                                            )
                                        )
                                    ),
                                    ' */'
                                )),
                                o.styleTagTransform(e, n, o.options);
                        })(o, n, r);
                    },
                    remove: function() {
                        !(function(n) {
                            if (null === n.parentNode) return !1;
                            n.parentNode.removeChild(n);
                        })(o);
                    },
                };
            };
        },
        54865: n => {
            n.exports = function(n, o) {
                if (o.styleSheet) o.styleSheet.cssText = n;
                else {
                    for (; o.firstChild; ) o.removeChild(o.firstChild);
                    o.appendChild(document.createTextNode(n));
                }
            };
        },
    },
]);
//# sourceMappingURL=4569.f374f9d.js.map
