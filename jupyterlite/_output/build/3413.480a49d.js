(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [3413],
    {
        83413: (e, t, r) => {
            !(function(e) {
                'use strict';
                var t = [
                        { keys: '<Left>', type: 'keyToKey', toKeys: 'h' },
                        { keys: '<Right>', type: 'keyToKey', toKeys: 'l' },
                        { keys: '<Up>', type: 'keyToKey', toKeys: 'k' },
                        { keys: '<Down>', type: 'keyToKey', toKeys: 'j' },
                        { keys: '<Space>', type: 'keyToKey', toKeys: 'l' },
                        {
                            keys: '<BS>',
                            type: 'keyToKey',
                            toKeys: 'h',
                            context: 'normal',
                        },
                        {
                            keys: '<Del>',
                            type: 'keyToKey',
                            toKeys: 'x',
                            context: 'normal',
                        },
                        { keys: '<C-Space>', type: 'keyToKey', toKeys: 'W' },
                        {
                            keys: '<C-BS>',
                            type: 'keyToKey',
                            toKeys: 'B',
                            context: 'normal',
                        },
                        { keys: '<S-Space>', type: 'keyToKey', toKeys: 'w' },
                        {
                            keys: '<S-BS>',
                            type: 'keyToKey',
                            toKeys: 'b',
                            context: 'normal',
                        },
                        { keys: '<C-n>', type: 'keyToKey', toKeys: 'j' },
                        { keys: '<C-p>', type: 'keyToKey', toKeys: 'k' },
                        { keys: '<C-[>', type: 'keyToKey', toKeys: '<Esc>' },
                        { keys: '<C-c>', type: 'keyToKey', toKeys: '<Esc>' },
                        {
                            keys: '<C-[>',
                            type: 'keyToKey',
                            toKeys: '<Esc>',
                            context: 'insert',
                        },
                        {
                            keys: '<C-c>',
                            type: 'keyToKey',
                            toKeys: '<Esc>',
                            context: 'insert',
                        },
                        {
                            keys: 's',
                            type: 'keyToKey',
                            toKeys: 'cl',
                            context: 'normal',
                        },
                        {
                            keys: 's',
                            type: 'keyToKey',
                            toKeys: 'c',
                            context: 'visual',
                        },
                        {
                            keys: 'S',
                            type: 'keyToKey',
                            toKeys: 'cc',
                            context: 'normal',
                        },
                        {
                            keys: 'S',
                            type: 'keyToKey',
                            toKeys: 'VdO',
                            context: 'visual',
                        },
                        { keys: '<Home>', type: 'keyToKey', toKeys: '0' },
                        { keys: '<End>', type: 'keyToKey', toKeys: '$' },
                        { keys: '<PageUp>', type: 'keyToKey', toKeys: '<C-b>' },
                        {
                            keys: '<PageDown>',
                            type: 'keyToKey',
                            toKeys: '<C-f>',
                        },
                        {
                            keys: '<CR>',
                            type: 'keyToKey',
                            toKeys: 'j^',
                            context: 'normal',
                        },
                        {
                            keys: '<Ins>',
                            type: 'action',
                            action: 'toggleOverwrite',
                            context: 'insert',
                        },
                        {
                            keys: 'H',
                            type: 'motion',
                            motion: 'moveToTopLine',
                            motionArgs: { linewise: !0, toJumplist: !0 },
                        },
                        {
                            keys: 'M',
                            type: 'motion',
                            motion: 'moveToMiddleLine',
                            motionArgs: { linewise: !0, toJumplist: !0 },
                        },
                        {
                            keys: 'L',
                            type: 'motion',
                            motion: 'moveToBottomLine',
                            motionArgs: { linewise: !0, toJumplist: !0 },
                        },
                        {
                            keys: 'h',
                            type: 'motion',
                            motion: 'moveByCharacters',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: 'l',
                            type: 'motion',
                            motion: 'moveByCharacters',
                            motionArgs: { forward: !0 },
                        },
                        {
                            keys: 'j',
                            type: 'motion',
                            motion: 'moveByLines',
                            motionArgs: { forward: !0, linewise: !0 },
                        },
                        {
                            keys: 'k',
                            type: 'motion',
                            motion: 'moveByLines',
                            motionArgs: { forward: !1, linewise: !0 },
                        },
                        {
                            keys: 'gj',
                            type: 'motion',
                            motion: 'moveByDisplayLines',
                            motionArgs: { forward: !0 },
                        },
                        {
                            keys: 'gk',
                            type: 'motion',
                            motion: 'moveByDisplayLines',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: 'w',
                            type: 'motion',
                            motion: 'moveByWords',
                            motionArgs: { forward: !0, wordEnd: !1 },
                        },
                        {
                            keys: 'W',
                            type: 'motion',
                            motion: 'moveByWords',
                            motionArgs: {
                                forward: !0,
                                wordEnd: !1,
                                bigWord: !0,
                            },
                        },
                        {
                            keys: 'e',
                            type: 'motion',
                            motion: 'moveByWords',
                            motionArgs: {
                                forward: !0,
                                wordEnd: !0,
                                inclusive: !0,
                            },
                        },
                        {
                            keys: 'E',
                            type: 'motion',
                            motion: 'moveByWords',
                            motionArgs: {
                                forward: !0,
                                wordEnd: !0,
                                bigWord: !0,
                                inclusive: !0,
                            },
                        },
                        {
                            keys: 'b',
                            type: 'motion',
                            motion: 'moveByWords',
                            motionArgs: { forward: !1, wordEnd: !1 },
                        },
                        {
                            keys: 'B',
                            type: 'motion',
                            motion: 'moveByWords',
                            motionArgs: {
                                forward: !1,
                                wordEnd: !1,
                                bigWord: !0,
                            },
                        },
                        {
                            keys: 'ge',
                            type: 'motion',
                            motion: 'moveByWords',
                            motionArgs: {
                                forward: !1,
                                wordEnd: !0,
                                inclusive: !0,
                            },
                        },
                        {
                            keys: 'gE',
                            type: 'motion',
                            motion: 'moveByWords',
                            motionArgs: {
                                forward: !1,
                                wordEnd: !0,
                                bigWord: !0,
                                inclusive: !0,
                            },
                        },
                        {
                            keys: '{',
                            type: 'motion',
                            motion: 'moveByParagraph',
                            motionArgs: { forward: !1, toJumplist: !0 },
                        },
                        {
                            keys: '}',
                            type: 'motion',
                            motion: 'moveByParagraph',
                            motionArgs: { forward: !0, toJumplist: !0 },
                        },
                        {
                            keys: '(',
                            type: 'motion',
                            motion: 'moveBySentence',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: ')',
                            type: 'motion',
                            motion: 'moveBySentence',
                            motionArgs: { forward: !0 },
                        },
                        {
                            keys: '<C-f>',
                            type: 'motion',
                            motion: 'moveByPage',
                            motionArgs: { forward: !0 },
                        },
                        {
                            keys: '<C-b>',
                            type: 'motion',
                            motion: 'moveByPage',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: '<C-d>',
                            type: 'motion',
                            motion: 'moveByScroll',
                            motionArgs: { forward: !0, explicitRepeat: !0 },
                        },
                        {
                            keys: '<C-u>',
                            type: 'motion',
                            motion: 'moveByScroll',
                            motionArgs: { forward: !1, explicitRepeat: !0 },
                        },
                        {
                            keys: 'gg',
                            type: 'motion',
                            motion: 'moveToLineOrEdgeOfDocument',
                            motionArgs: {
                                forward: !1,
                                explicitRepeat: !0,
                                linewise: !0,
                                toJumplist: !0,
                            },
                        },
                        {
                            keys: 'G',
                            type: 'motion',
                            motion: 'moveToLineOrEdgeOfDocument',
                            motionArgs: {
                                forward: !0,
                                explicitRepeat: !0,
                                linewise: !0,
                                toJumplist: !0,
                            },
                        },
                        {
                            keys: '0',
                            type: 'motion',
                            motion: 'moveToStartOfLine',
                        },
                        {
                            keys: '^',
                            type: 'motion',
                            motion: 'moveToFirstNonWhiteSpaceCharacter',
                        },
                        {
                            keys: '+',
                            type: 'motion',
                            motion: 'moveByLines',
                            motionArgs: { forward: !0, toFirstChar: !0 },
                        },
                        {
                            keys: '-',
                            type: 'motion',
                            motion: 'moveByLines',
                            motionArgs: { forward: !1, toFirstChar: !0 },
                        },
                        {
                            keys: '_',
                            type: 'motion',
                            motion: 'moveByLines',
                            motionArgs: {
                                forward: !0,
                                toFirstChar: !0,
                                repeatOffset: -1,
                            },
                        },
                        {
                            keys: '$',
                            type: 'motion',
                            motion: 'moveToEol',
                            motionArgs: { inclusive: !0 },
                        },
                        {
                            keys: '%',
                            type: 'motion',
                            motion: 'moveToMatchedSymbol',
                            motionArgs: { inclusive: !0, toJumplist: !0 },
                        },
                        {
                            keys: 'f<character>',
                            type: 'motion',
                            motion: 'moveToCharacter',
                            motionArgs: { forward: !0, inclusive: !0 },
                        },
                        {
                            keys: 'F<character>',
                            type: 'motion',
                            motion: 'moveToCharacter',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: 't<character>',
                            type: 'motion',
                            motion: 'moveTillCharacter',
                            motionArgs: { forward: !0, inclusive: !0 },
                        },
                        {
                            keys: 'T<character>',
                            type: 'motion',
                            motion: 'moveTillCharacter',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: ';',
                            type: 'motion',
                            motion: 'repeatLastCharacterSearch',
                            motionArgs: { forward: !0 },
                        },
                        {
                            keys: ',',
                            type: 'motion',
                            motion: 'repeatLastCharacterSearch',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: "'<character>",
                            type: 'motion',
                            motion: 'goToMark',
                            motionArgs: { toJumplist: !0, linewise: !0 },
                        },
                        {
                            keys: '`<character>',
                            type: 'motion',
                            motion: 'goToMark',
                            motionArgs: { toJumplist: !0 },
                        },
                        {
                            keys: ']`',
                            type: 'motion',
                            motion: 'jumpToMark',
                            motionArgs: { forward: !0 },
                        },
                        {
                            keys: '[`',
                            type: 'motion',
                            motion: 'jumpToMark',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: "]'",
                            type: 'motion',
                            motion: 'jumpToMark',
                            motionArgs: { forward: !0, linewise: !0 },
                        },
                        {
                            keys: "['",
                            type: 'motion',
                            motion: 'jumpToMark',
                            motionArgs: { forward: !1, linewise: !0 },
                        },
                        {
                            keys: ']p',
                            type: 'action',
                            action: 'paste',
                            isEdit: !0,
                            actionArgs: {
                                after: !0,
                                isEdit: !0,
                                matchIndent: !0,
                            },
                        },
                        {
                            keys: '[p',
                            type: 'action',
                            action: 'paste',
                            isEdit: !0,
                            actionArgs: {
                                after: !1,
                                isEdit: !0,
                                matchIndent: !0,
                            },
                        },
                        {
                            keys: ']<character>',
                            type: 'motion',
                            motion: 'moveToSymbol',
                            motionArgs: { forward: !0, toJumplist: !0 },
                        },
                        {
                            keys: '[<character>',
                            type: 'motion',
                            motion: 'moveToSymbol',
                            motionArgs: { forward: !1, toJumplist: !0 },
                        },
                        { keys: '|', type: 'motion', motion: 'moveToColumn' },
                        {
                            keys: 'o',
                            type: 'motion',
                            motion: 'moveToOtherHighlightedEnd',
                            context: 'visual',
                        },
                        {
                            keys: 'O',
                            type: 'motion',
                            motion: 'moveToOtherHighlightedEnd',
                            motionArgs: { sameLine: !0 },
                            context: 'visual',
                        },
                        { keys: 'd', type: 'operator', operator: 'delete' },
                        { keys: 'y', type: 'operator', operator: 'yank' },
                        { keys: 'c', type: 'operator', operator: 'change' },
                        { keys: '=', type: 'operator', operator: 'indentAuto' },
                        {
                            keys: '>',
                            type: 'operator',
                            operator: 'indent',
                            operatorArgs: { indentRight: !0 },
                        },
                        {
                            keys: '<',
                            type: 'operator',
                            operator: 'indent',
                            operatorArgs: { indentRight: !1 },
                        },
                        {
                            keys: 'g~',
                            type: 'operator',
                            operator: 'changeCase',
                        },
                        {
                            keys: 'gu',
                            type: 'operator',
                            operator: 'changeCase',
                            operatorArgs: { toLower: !0 },
                            isEdit: !0,
                        },
                        {
                            keys: 'gU',
                            type: 'operator',
                            operator: 'changeCase',
                            operatorArgs: { toLower: !1 },
                            isEdit: !0,
                        },
                        {
                            keys: 'n',
                            type: 'motion',
                            motion: 'findNext',
                            motionArgs: { forward: !0, toJumplist: !0 },
                        },
                        {
                            keys: 'N',
                            type: 'motion',
                            motion: 'findNext',
                            motionArgs: { forward: !1, toJumplist: !0 },
                        },
                        {
                            keys: 'gn',
                            type: 'motion',
                            motion: 'findAndSelectNextInclusive',
                            motionArgs: { forward: !0 },
                        },
                        {
                            keys: 'gN',
                            type: 'motion',
                            motion: 'findAndSelectNextInclusive',
                            motionArgs: { forward: !1 },
                        },
                        {
                            keys: 'x',
                            type: 'operatorMotion',
                            operator: 'delete',
                            motion: 'moveByCharacters',
                            motionArgs: { forward: !0 },
                            operatorMotionArgs: { visualLine: !1 },
                        },
                        {
                            keys: 'X',
                            type: 'operatorMotion',
                            operator: 'delete',
                            motion: 'moveByCharacters',
                            motionArgs: { forward: !1 },
                            operatorMotionArgs: { visualLine: !0 },
                        },
                        {
                            keys: 'D',
                            type: 'operatorMotion',
                            operator: 'delete',
                            motion: 'moveToEol',
                            motionArgs: { inclusive: !0 },
                            context: 'normal',
                        },
                        {
                            keys: 'D',
                            type: 'operator',
                            operator: 'delete',
                            operatorArgs: { linewise: !0 },
                            context: 'visual',
                        },
                        {
                            keys: 'Y',
                            type: 'operatorMotion',
                            operator: 'yank',
                            motion: 'expandToLine',
                            motionArgs: { linewise: !0 },
                            context: 'normal',
                        },
                        {
                            keys: 'Y',
                            type: 'operator',
                            operator: 'yank',
                            operatorArgs: { linewise: !0 },
                            context: 'visual',
                        },
                        {
                            keys: 'C',
                            type: 'operatorMotion',
                            operator: 'change',
                            motion: 'moveToEol',
                            motionArgs: { inclusive: !0 },
                            context: 'normal',
                        },
                        {
                            keys: 'C',
                            type: 'operator',
                            operator: 'change',
                            operatorArgs: { linewise: !0 },
                            context: 'visual',
                        },
                        {
                            keys: '~',
                            type: 'operatorMotion',
                            operator: 'changeCase',
                            motion: 'moveByCharacters',
                            motionArgs: { forward: !0 },
                            operatorArgs: { shouldMoveCursor: !0 },
                            context: 'normal',
                        },
                        {
                            keys: '~',
                            type: 'operator',
                            operator: 'changeCase',
                            context: 'visual',
                        },
                        {
                            keys: '<C-w>',
                            type: 'operatorMotion',
                            operator: 'delete',
                            motion: 'moveByWords',
                            motionArgs: { forward: !1, wordEnd: !1 },
                            context: 'insert',
                        },
                        { keys: '<C-w>', type: 'idle', context: 'normal' },
                        {
                            keys: '<C-i>',
                            type: 'action',
                            action: 'jumpListWalk',
                            actionArgs: { forward: !0 },
                        },
                        {
                            keys: '<C-o>',
                            type: 'action',
                            action: 'jumpListWalk',
                            actionArgs: { forward: !1 },
                        },
                        {
                            keys: '<C-e>',
                            type: 'action',
                            action: 'scroll',
                            actionArgs: { forward: !0, linewise: !0 },
                        },
                        {
                            keys: '<C-y>',
                            type: 'action',
                            action: 'scroll',
                            actionArgs: { forward: !1, linewise: !0 },
                        },
                        {
                            keys: 'a',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { insertAt: 'charAfter' },
                            context: 'normal',
                        },
                        {
                            keys: 'A',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { insertAt: 'eol' },
                            context: 'normal',
                        },
                        {
                            keys: 'A',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { insertAt: 'endOfSelectedArea' },
                            context: 'visual',
                        },
                        {
                            keys: 'i',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { insertAt: 'inplace' },
                            context: 'normal',
                        },
                        {
                            keys: 'gi',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { insertAt: 'lastEdit' },
                            context: 'normal',
                        },
                        {
                            keys: 'I',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { insertAt: 'firstNonBlank' },
                            context: 'normal',
                        },
                        {
                            keys: 'gI',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { insertAt: 'bol' },
                            context: 'normal',
                        },
                        {
                            keys: 'I',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { insertAt: 'startOfSelectedArea' },
                            context: 'visual',
                        },
                        {
                            keys: 'o',
                            type: 'action',
                            action: 'newLineAndEnterInsertMode',
                            isEdit: !0,
                            interlaceInsertRepeat: !0,
                            actionArgs: { after: !0 },
                            context: 'normal',
                        },
                        {
                            keys: 'O',
                            type: 'action',
                            action: 'newLineAndEnterInsertMode',
                            isEdit: !0,
                            interlaceInsertRepeat: !0,
                            actionArgs: { after: !1 },
                            context: 'normal',
                        },
                        {
                            keys: 'v',
                            type: 'action',
                            action: 'toggleVisualMode',
                        },
                        {
                            keys: 'V',
                            type: 'action',
                            action: 'toggleVisualMode',
                            actionArgs: { linewise: !0 },
                        },
                        {
                            keys: '<C-v>',
                            type: 'action',
                            action: 'toggleVisualMode',
                            actionArgs: { blockwise: !0 },
                        },
                        {
                            keys: '<C-q>',
                            type: 'action',
                            action: 'toggleVisualMode',
                            actionArgs: { blockwise: !0 },
                        },
                        {
                            keys: 'gv',
                            type: 'action',
                            action: 'reselectLastSelection',
                        },
                        {
                            keys: 'J',
                            type: 'action',
                            action: 'joinLines',
                            isEdit: !0,
                        },
                        {
                            keys: 'gJ',
                            type: 'action',
                            action: 'joinLines',
                            actionArgs: { keepSpaces: !0 },
                            isEdit: !0,
                        },
                        {
                            keys: 'p',
                            type: 'action',
                            action: 'paste',
                            isEdit: !0,
                            actionArgs: { after: !0, isEdit: !0 },
                        },
                        {
                            keys: 'P',
                            type: 'action',
                            action: 'paste',
                            isEdit: !0,
                            actionArgs: { after: !1, isEdit: !0 },
                        },
                        {
                            keys: 'r<character>',
                            type: 'action',
                            action: 'replace',
                            isEdit: !0,
                        },
                        {
                            keys: '@<character>',
                            type: 'action',
                            action: 'replayMacro',
                        },
                        {
                            keys: 'q<character>',
                            type: 'action',
                            action: 'enterMacroRecordMode',
                        },
                        {
                            keys: 'R',
                            type: 'action',
                            action: 'enterInsertMode',
                            isEdit: !0,
                            actionArgs: { replace: !0 },
                            context: 'normal',
                        },
                        {
                            keys: 'R',
                            type: 'operator',
                            operator: 'change',
                            operatorArgs: { linewise: !0, fullLine: !0 },
                            context: 'visual',
                            exitVisualBlock: !0,
                        },
                        {
                            keys: 'u',
                            type: 'action',
                            action: 'undo',
                            context: 'normal',
                        },
                        {
                            keys: 'u',
                            type: 'operator',
                            operator: 'changeCase',
                            operatorArgs: { toLower: !0 },
                            context: 'visual',
                            isEdit: !0,
                        },
                        {
                            keys: 'U',
                            type: 'operator',
                            operator: 'changeCase',
                            operatorArgs: { toLower: !1 },
                            context: 'visual',
                            isEdit: !0,
                        },
                        { keys: '<C-r>', type: 'action', action: 'redo' },
                        {
                            keys: 'm<character>',
                            type: 'action',
                            action: 'setMark',
                        },
                        {
                            keys: '"<character>',
                            type: 'action',
                            action: 'setRegister',
                        },
                        {
                            keys: 'zz',
                            type: 'action',
                            action: 'scrollToCursor',
                            actionArgs: { position: 'center' },
                        },
                        {
                            keys: 'z.',
                            type: 'action',
                            action: 'scrollToCursor',
                            actionArgs: { position: 'center' },
                            motion: 'moveToFirstNonWhiteSpaceCharacter',
                        },
                        {
                            keys: 'zt',
                            type: 'action',
                            action: 'scrollToCursor',
                            actionArgs: { position: 'top' },
                        },
                        {
                            keys: 'z<CR>',
                            type: 'action',
                            action: 'scrollToCursor',
                            actionArgs: { position: 'top' },
                            motion: 'moveToFirstNonWhiteSpaceCharacter',
                        },
                        {
                            keys: 'z-',
                            type: 'action',
                            action: 'scrollToCursor',
                            actionArgs: { position: 'bottom' },
                        },
                        {
                            keys: 'zb',
                            type: 'action',
                            action: 'scrollToCursor',
                            actionArgs: { position: 'bottom' },
                            motion: 'moveToFirstNonWhiteSpaceCharacter',
                        },
                        { keys: '.', type: 'action', action: 'repeatLastEdit' },
                        {
                            keys: '<C-a>',
                            type: 'action',
                            action: 'incrementNumberToken',
                            isEdit: !0,
                            actionArgs: { increase: !0, backtrack: !1 },
                        },
                        {
                            keys: '<C-x>',
                            type: 'action',
                            action: 'incrementNumberToken',
                            isEdit: !0,
                            actionArgs: { increase: !1, backtrack: !1 },
                        },
                        {
                            keys: '<C-t>',
                            type: 'action',
                            action: 'indent',
                            actionArgs: { indentRight: !0 },
                            context: 'insert',
                        },
                        {
                            keys: '<C-d>',
                            type: 'action',
                            action: 'indent',
                            actionArgs: { indentRight: !1 },
                            context: 'insert',
                        },
                        {
                            keys: 'a<character>',
                            type: 'motion',
                            motion: 'textObjectManipulation',
                        },
                        {
                            keys: 'i<character>',
                            type: 'motion',
                            motion: 'textObjectManipulation',
                            motionArgs: { textObjectInner: !0 },
                        },
                        {
                            keys: '/',
                            type: 'search',
                            searchArgs: {
                                forward: !0,
                                querySrc: 'prompt',
                                toJumplist: !0,
                            },
                        },
                        {
                            keys: '?',
                            type: 'search',
                            searchArgs: {
                                forward: !1,
                                querySrc: 'prompt',
                                toJumplist: !0,
                            },
                        },
                        {
                            keys: '*',
                            type: 'search',
                            searchArgs: {
                                forward: !0,
                                querySrc: 'wordUnderCursor',
                                wholeWordOnly: !0,
                                toJumplist: !0,
                            },
                        },
                        {
                            keys: '#',
                            type: 'search',
                            searchArgs: {
                                forward: !1,
                                querySrc: 'wordUnderCursor',
                                wholeWordOnly: !0,
                                toJumplist: !0,
                            },
                        },
                        {
                            keys: 'g*',
                            type: 'search',
                            searchArgs: {
                                forward: !0,
                                querySrc: 'wordUnderCursor',
                                toJumplist: !0,
                            },
                        },
                        {
                            keys: 'g#',
                            type: 'search',
                            searchArgs: {
                                forward: !1,
                                querySrc: 'wordUnderCursor',
                                toJumplist: !0,
                            },
                        },
                        { keys: ':', type: 'ex' },
                    ],
                    r = t.length,
                    n = [
                        { name: 'colorscheme', shortName: 'colo' },
                        { name: 'map' },
                        { name: 'imap', shortName: 'im' },
                        { name: 'nmap', shortName: 'nm' },
                        { name: 'vmap', shortName: 'vm' },
                        { name: 'unmap' },
                        { name: 'write', shortName: 'w' },
                        { name: 'undo', shortName: 'u' },
                        { name: 'redo', shortName: 'red' },
                        { name: 'set', shortName: 'se' },
                        { name: 'setlocal', shortName: 'setl' },
                        { name: 'setglobal', shortName: 'setg' },
                        { name: 'sort', shortName: 'sor' },
                        {
                            name: 'substitute',
                            shortName: 's',
                            possiblyAsync: !0,
                        },
                        { name: 'nohlsearch', shortName: 'noh' },
                        { name: 'yank', shortName: 'y' },
                        { name: 'delmarks', shortName: 'delm' },
                        {
                            name: 'registers',
                            shortName: 'reg',
                            excludeFromCommandHistory: !0,
                        },
                        { name: 'vglobal', shortName: 'v' },
                        { name: 'global', shortName: 'g' },
                    ],
                    o = e.Pos;
                e.Vim = (function() {
                    function i(t, r) {
                        this == e.keyMap.vim &&
                            (e.rmClass(t.getWrapperElement(), 'cm-fat-cursor'),
                            'contenteditable' == t.getOption('inputStyle') &&
                                null != document.body.style.caretColor &&
                                ((function(e) {
                                    l(e),
                                        e.off('cursorActivity', s),
                                        (e.state.fatCursorMarks = null);
                                })(t),
                                (t.getInputField().style.caretColor = ''))),
                            (r && r.attach == a) ||
                                (function(t) {
                                    t.setOption('disableInput', !1),
                                        t.off('cursorActivity', et),
                                        e.off(t.getInputField(), 'paste', p(t)),
                                        (t.state.vim = null);
                                })(t);
                    }
                    function a(t, r) {
                        this == e.keyMap.vim &&
                            (e.addClass(t.getWrapperElement(), 'cm-fat-cursor'),
                            'contenteditable' == t.getOption('inputStyle') &&
                                null != document.body.style.caretColor &&
                                ((function(e) {
                                    (e.state.fatCursorMarks = []),
                                        s(e),
                                        e.on('cursorActivity', s);
                                })(t),
                                (t.getInputField().style.caretColor =
                                    'transparent'))),
                            (r && r.attach == a) ||
                                (function(t) {
                                    t.setOption('disableInput', !0),
                                        t.setOption(
                                            'showCursorWhenSelecting',
                                            !1
                                        ),
                                        e.signal(t, 'vim-mode-change', {
                                            mode: 'normal',
                                        }),
                                        t.on('cursorActivity', et),
                                        _(t),
                                        e.on(t.getInputField(), 'paste', p(t));
                                })(t);
                    }
                    function s(e) {
                        if (e.state.fatCursorMarks) {
                            l(e);
                            for (
                                var t = e.listSelections(), r = [], n = 0;
                                n < t.length;
                                n++
                            ) {
                                var i = t[n];
                                if (i.empty()) {
                                    var a = e.getLine(i.anchor.line).length;
                                    i.anchor.ch < a
                                        ? r.push(
                                              e.markText(
                                                  i.anchor,
                                                  o(
                                                      i.anchor.line,
                                                      i.anchor.ch + 1
                                                  ),
                                                  {
                                                      className:
                                                          'cm-fat-cursor-mark',
                                                  }
                                              )
                                          )
                                        : r.push(
                                              e.markText(
                                                  o(i.anchor.line, a - 1),
                                                  o(i.anchor.line, a),
                                                  {
                                                      className:
                                                          'cm-fat-cursor-mark',
                                                  }
                                              )
                                          );
                                }
                            }
                            e.state.fatCursorMarks = r;
                        }
                    }
                    function l(e) {
                        var t = e.state.fatCursorMarks;
                        if (t) for (var r = 0; r < t.length; r++) t[r].clear();
                    }
                    function c(t, r) {
                        if (r) {
                            if (this[t]) return this[t];
                            var n = (function(e) {
                                if ("'" == e.charAt(0)) return e.charAt(1);
                                var t = e.split(/-(?!$)/),
                                    r = t[t.length - 1];
                                if (1 == t.length && 1 == t[0].length)
                                    return !1;
                                if (
                                    2 == t.length &&
                                    'Shift' == t[0] &&
                                    1 == r.length
                                )
                                    return !1;
                                for (var n = !1, o = 0; o < t.length; o++) {
                                    var i = t[o];
                                    i in u ? (t[o] = u[i]) : (n = !0),
                                        i in h && (t[o] = h[i]);
                                }
                                return (
                                    !!n &&
                                    (S(r) &&
                                        (t[t.length - 1] = r.toLowerCase()),
                                    '<' + t.join('-') + '>')
                                );
                            })(t);
                            if (!n) return !1;
                            var o = e.Vim.findKey(r, n);
                            return (
                                'function' == typeof o &&
                                    e.signal(r, 'vim-keypress', n),
                                o
                            );
                        }
                    }
                    e.defineOption('vimMode', !1, function(t, r, n) {
                        r && 'vim' != t.getOption('keyMap')
                            ? t.setOption('keyMap', 'vim')
                            : !r &&
                              n != e.Init &&
                              /^vim/.test(t.getOption('keyMap')) &&
                              t.setOption('keyMap', 'default');
                    });
                    var u = {
                            Shift: 'S',
                            Ctrl: 'C',
                            Alt: 'A',
                            Cmd: 'D',
                            Mod: 'A',
                            CapsLock: '',
                        },
                        h = {
                            Enter: 'CR',
                            Backspace: 'BS',
                            Delete: 'Del',
                            Insert: 'Ins',
                        };
                    function p(e) {
                        var t = e.state.vim;
                        return (
                            t.onPasteFn ||
                                (t.onPasteFn = function() {
                                    t.insertMode ||
                                        (e.setCursor(Z(e.getCursor(), 0, 1)),
                                        z.enterInsertMode(e, {}, t));
                                }),
                            t.onPasteFn
                        );
                    }
                    var f = /[\d]/,
                        d = [
                            e.isWordChar,
                            function(t) {
                                return t && !e.isWordChar(t) && !/\s/.test(t);
                            },
                        ],
                        m = [
                            function(e) {
                                return /\S/.test(e);
                            },
                        ];
                    function g(e, t) {
                        for (var r = [], n = e; n < e + t; n++)
                            r.push(String.fromCharCode(n));
                        return r;
                    }
                    var v = g(65, 26),
                        y = g(97, 26),
                        k = g(48, 10),
                        C = [].concat(v, y, k, ['<', '>']),
                        w = [].concat(v, y, k, ['-', '"', '.', ':', '_', '/']);
                    function x(e, t) {
                        return t >= e.firstLine() && t <= e.lastLine();
                    }
                    function M(e) {
                        return /^[a-z]$/.test(e);
                    }
                    function S(e) {
                        return /^[A-Z]$/.test(e);
                    }
                    function A(e) {
                        return /^\s*$/.test(e);
                    }
                    function b(e) {
                        return -1 != '.?!'.indexOf(e);
                    }
                    function L(e, t) {
                        for (var r = 0; r < t.length; r++)
                            if (t[r] == e) return !0;
                        return !1;
                    }
                    var T = {};
                    function R(e, t, r, n, o) {
                        if (void 0 === t && !o)
                            throw Error(
                                'defaultValue is required unless callback is provided'
                            );
                        if (
                            (r || (r = 'string'),
                            (T[e] = { type: r, defaultValue: t, callback: o }),
                            n)
                        )
                            for (var i = 0; i < n.length; i++) T[n[i]] = T[e];
                        t && E(e, t);
                    }
                    function E(e, t, r, n) {
                        var o = T[e],
                            i = (n = n || {}).scope;
                        if (!o) return new Error('Unknown option: ' + e);
                        if ('boolean' == o.type) {
                            if (t && !0 !== t)
                                return new Error(
                                    'Invalid argument: ' + e + '=' + t
                                );
                            !1 !== t && (t = !0);
                        }
                        o.callback
                            ? ('local' !== i && o.callback(t, void 0),
                              'global' !== i && r && o.callback(t, r))
                            : ('local' !== i &&
                                  (o.value = 'boolean' == o.type ? !!t : t),
                              'global' !== i &&
                                  r &&
                                  (r.state.vim.options[e] = { value: t }));
                    }
                    function O(e, t, r) {
                        var n = T[e],
                            o = (r = r || {}).scope;
                        if (!n) return new Error('Unknown option: ' + e);
                        if (n.callback) {
                            var i = t && n.callback(void 0, t);
                            return 'global' !== o && void 0 !== i
                                ? i
                                : 'local' !== o
                                ? n.callback()
                                : void 0;
                        }
                        return (
                            (i =
                                'global' !== o &&
                                t &&
                                t.state.vim.options[e]) ||
                            ('local' !== o && n) ||
                            {}
                        ).value;
                    }
                    R('filetype', void 0, 'string', ['ft'], function(e, t) {
                        if (void 0 !== t) {
                            if (void 0 === e)
                                return 'null' == (r = t.getOption('mode'))
                                    ? ''
                                    : r;
                            var r = '' == e ? 'null' : e;
                            t.setOption('mode', r);
                        }
                    });
                    var B,
                        I,
                        N = function() {
                            var e = 100,
                                t = -1,
                                r = 0,
                                n = 0,
                                o = new Array(e);
                            function i(i, a) {
                                (t += a) > r ? (t = r) : t < n && (t = n);
                                var s = o[(e + t) % e];
                                if (s && !s.find()) {
                                    var l,
                                        c = a > 0 ? 1 : -1,
                                        u = i.getCursor();
                                    do {
                                        if (
                                            (s = o[(e + (t += c)) % e]) &&
                                            (l = s.find()) &&
                                            !re(u, l)
                                        )
                                            break;
                                    } while (t < r && t > n);
                                }
                                return s;
                            }
                            return {
                                cachedCursor: void 0,
                                add: function(i, a, s) {
                                    var l = o[t % e];
                                    function c(r) {
                                        var n = ++t % e,
                                            a = o[n];
                                        a && a.clear(),
                                            (o[n] = i.setBookmark(r));
                                    }
                                    if (l) {
                                        var u = l.find();
                                        u && !re(u, a) && c(a);
                                    } else c(a);
                                    c(s),
                                        (r = t),
                                        (n = t - e + 1) < 0 && (n = 0);
                                },
                                find: function(e, r) {
                                    var n = t,
                                        o = i(e, r);
                                    return (t = n), o && o.find();
                                },
                                move: i,
                            };
                        },
                        K = function(e) {
                            return e
                                ? {
                                      changes: e.changes,
                                      expectCursorActivityForChange:
                                          e.expectCursorActivityForChange,
                                  }
                                : {
                                      changes: [],
                                      expectCursorActivityForChange: !1,
                                  };
                        };
                    function P() {
                        (this.latestRegister = void 0),
                            (this.isPlaying = !1),
                            (this.isRecording = !1),
                            (this.replaySearchQueries = []),
                            (this.onRecordingDone = void 0),
                            (this.lastInsertModeChanges = K());
                    }
                    function _(e) {
                        return (
                            e.state.vim ||
                                (e.state.vim = {
                                    inputState: new F(),
                                    lastEditInputState: void 0,
                                    lastEditActionCommand: void 0,
                                    lastHPos: -1,
                                    lastHSPos: -1,
                                    lastMotion: null,
                                    marks: {},
                                    fakeCursor: null,
                                    insertMode: !1,
                                    insertModeRepeat: void 0,
                                    visualMode: !1,
                                    visualLine: !1,
                                    visualBlock: !1,
                                    lastSelection: null,
                                    lastPastedText: null,
                                    sel: {},
                                    options: {},
                                }),
                            e.state.vim
                        );
                    }
                    function j() {
                        for (var e in ((B = {
                            searchQuery: null,
                            searchIsReversed: !1,
                            lastSubstituteReplacePart: void 0,
                            jumpList: N(),
                            macroModeState: new P(),
                            lastCharacterSearch: {
                                increment: 0,
                                forward: !0,
                                selectedCharacter: '',
                            },
                            registerController: new V({}),
                            searchHistoryController: new U(),
                            exCommandHistoryController: new U(),
                        }),
                        T)) {
                            var t = T[e];
                            t.value = t.defaultValue;
                        }
                    }
                    P.prototype = {
                        exitMacroRecordMode: function() {
                            var e = B.macroModeState;
                            e.onRecordingDone && e.onRecordingDone(),
                                (e.onRecordingDone = void 0),
                                (e.isRecording = !1);
                        },
                        enterMacroRecordMode: function(e, t) {
                            var r = B.registerController.getRegister(t);
                            r &&
                                (r.clear(),
                                (this.latestRegister = t),
                                e.openDialog &&
                                    (this.onRecordingDone = e.openDialog(
                                        '(recording)[' + t + ']',
                                        null,
                                        { bottom: !0 }
                                    )),
                                (this.isRecording = !0));
                        },
                    };
                    var H = {
                        buildKeyMap: function() {},
                        getRegisterController: function() {
                            return B.registerController;
                        },
                        resetVimGlobalState_: j,
                        getVimGlobalState_: function() {
                            return B;
                        },
                        maybeInitVimState_: _,
                        suppressErrorLogging: !1,
                        InsertModeKey: nt,
                        map: function(e, t, r) {
                            ze.map(e, t, r);
                        },
                        unmap: function(e, t) {
                            ze.unmap(e, t);
                        },
                        noremap: function(e, n, o) {
                            function i(e) {
                                return e ? [e] : ['normal', 'insert', 'visual'];
                            }
                            for (
                                var a = i(o), s = t.length, l = s - r;
                                l < s && a.length;
                                l++
                            ) {
                                var c = t[l];
                                if (
                                    !(
                                        c.keys != n ||
                                        (o && c.context && c.context !== o) ||
                                        'ex' === c.type.substr(0, 2) ||
                                        'key' === c.type.substr(0, 3)
                                    )
                                ) {
                                    var u = {};
                                    for (var h in c) u[h] = c[h];
                                    (u.keys = e),
                                        o && !u.context && (u.context = o),
                                        this._mapCommand(u);
                                    var p = i(c.context);
                                    a = a.filter(function(e) {
                                        return -1 === p.indexOf(e);
                                    });
                                }
                            }
                        },
                        mapclear: function(e) {
                            var n = t.length,
                                o = r,
                                i = t.slice(0, n - o);
                            if (((t = t.slice(n - o)), e))
                                for (var a = i.length - 1; a >= 0; a--) {
                                    var s = i[a];
                                    if (e !== s.context)
                                        if (s.context) this._mapCommand(s);
                                        else {
                                            var l = [
                                                'normal',
                                                'insert',
                                                'visual',
                                            ];
                                            for (var c in l)
                                                if (l[c] !== e) {
                                                    var u = {};
                                                    for (var h in s)
                                                        u[h] = s[h];
                                                    (u.context = l[c]),
                                                        this._mapCommand(u);
                                                }
                                        }
                                }
                        },
                        setOption: E,
                        getOption: O,
                        defineOption: R,
                        defineEx: function(e, t, r) {
                            if (t) {
                                if (0 !== e.indexOf(t))
                                    throw new Error(
                                        '(Vim.defineEx) "' +
                                            t +
                                            '" is not a prefix of "' +
                                            e +
                                            '", command not registered'
                                    );
                            } else t = e;
                            (qe[e] = r),
                                (ze.commandMap_[t] = {
                                    name: e,
                                    shortName: t,
                                    type: 'api',
                                });
                        },
                        handleKey: function(e, t, r) {
                            var n = this.findKey(e, t, r);
                            if ('function' == typeof n) return n();
                        },
                        findKey: function(r, n, o) {
                            var i,
                                a = _(r);
                            function s() {
                                var e = B.macroModeState;
                                if (e.isRecording) {
                                    if ('q' == n)
                                        return (
                                            e.exitMacroRecordMode(), W(r), !0
                                        );
                                    'mapping' != o &&
                                        (function(e, t) {
                                            if (!e.isPlaying) {
                                                var r = e.latestRegister,
                                                    n = B.registerController.getRegister(
                                                        r
                                                    );
                                                n && n.pushText(t);
                                            }
                                        })(e, n);
                                }
                            }
                            function l() {
                                if ('<Esc>' == n)
                                    return (
                                        W(r),
                                        a.visualMode
                                            ? me(r)
                                            : a.insertMode && Ye(r),
                                        !0
                                    );
                            }
                            return !1 ===
                                (i = a.insertMode
                                    ? (function() {
                                          if (l()) return !0;
                                          for (
                                              var e = (a.inputState.keyBuffer =
                                                      a.inputState.keyBuffer +
                                                      n),
                                                  o = 1 == n.length,
                                                  i = $.matchCommand(
                                                      e,
                                                      t,
                                                      a.inputState,
                                                      'insert'
                                                  );
                                              e.length > 1 && 'full' != i.type;

                                          ) {
                                              e = a.inputState.keyBuffer = e.slice(
                                                  1
                                              );
                                              var s = $.matchCommand(
                                                  e,
                                                  t,
                                                  a.inputState,
                                                  'insert'
                                              );
                                              'none' != s.type && (i = s);
                                          }
                                          if ('none' == i.type) return W(r), !1;
                                          if ('partial' == i.type)
                                              return (
                                                  I && window.clearTimeout(I),
                                                  (I = window.setTimeout(
                                                      function() {
                                                          a.insertMode &&
                                                              a.inputState
                                                                  .keyBuffer &&
                                                              W(r);
                                                      },
                                                      O(
                                                          'insertModeEscKeysTimeout'
                                                      )
                                                  )),
                                                  !o
                                              );
                                          if (
                                              (I && window.clearTimeout(I), o)
                                          ) {
                                              for (
                                                  var c = r.listSelections(),
                                                      u = 0;
                                                  u < c.length;
                                                  u++
                                              ) {
                                                  var h = c[u].head;
                                                  r.replaceRange(
                                                      '',
                                                      Z(h, 0, -(e.length - 1)),
                                                      h,
                                                      '+input'
                                                  );
                                              }
                                              B.macroModeState.lastInsertModeChanges.changes.pop();
                                          }
                                          return W(r), i.command;
                                      })()
                                    : (function() {
                                          if (s() || l()) return !0;
                                          var e = (a.inputState.keyBuffer =
                                              a.inputState.keyBuffer + n);
                                          if (/^[1-9]\d*$/.test(e)) return !0;
                                          if (!(o = /^(\d*)(.*)$/.exec(e)))
                                              return W(r), !1;
                                          var o,
                                              i = a.visualMode
                                                  ? 'visual'
                                                  : 'normal',
                                              c = $.matchCommand(
                                                  o[2] || o[1],
                                                  t,
                                                  a.inputState,
                                                  i
                                              );
                                          return 'none' == c.type
                                              ? (W(r), !1)
                                              : 'partial' == c.type ||
                                                    ((a.inputState.keyBuffer =
                                                        ''),
                                                    (o = /^(\d*)(.*)$/.exec(
                                                        e
                                                    ))[1] &&
                                                        '0' != o[1] &&
                                                        a.inputState.pushRepeatDigit(
                                                            o[1]
                                                        ),
                                                    c.command);
                                      })())
                                ? a.insertMode || 1 !== n.length
                                    ? void 0
                                    : function() {
                                          return !0;
                                      }
                                : !0 === i
                                ? function() {
                                      return !0;
                                  }
                                : function() {
                                      return r.operation(function() {
                                          r.curOp.isVimOp = !0;
                                          try {
                                              'keyToKey' == i.type
                                                  ? (function(t) {
                                                        for (var o; t; )
                                                            (o = /<\w+-.+?>|<\w+>|./.exec(
                                                                t
                                                            )),
                                                                (n = o[0]),
                                                                (t = t.substring(
                                                                    o.index +
                                                                        n.length
                                                                )),
                                                                e.Vim.handleKey(
                                                                    r,
                                                                    n,
                                                                    'mapping'
                                                                );
                                                    })(i.toKeys)
                                                  : $.processCommand(r, a, i);
                                          } catch (t) {
                                              throw ((r.state.vim = void 0),
                                              _(r),
                                              e.Vim.suppressErrorLogging ||
                                                  console.log(t),
                                              t);
                                          }
                                          return !0;
                                      });
                                  };
                        },
                        handleEx: function(e, t) {
                            ze.processCommand(e, t);
                        },
                        defineMotion: function(e, t) {
                            J[e] = t;
                        },
                        defineAction: function(e, t) {
                            z[e] = t;
                        },
                        defineOperator: function(e, t) {
                            q[e] = t;
                        },
                        mapCommand: function(e, t, r, n, o) {
                            var i = { keys: e, type: t };
                            for (var a in ((i[t] = r), (i[t + 'Args'] = n), o))
                                i[a] = o[a];
                            Xe(i);
                        },
                        _mapCommand: Xe,
                        defineRegister: function(e, t) {
                            var r = B.registerController.registers;
                            if (!e || 1 != e.length)
                                throw Error(
                                    'Register name must be 1 character'
                                );
                            if (r[e])
                                throw Error('Register already defined ' + e);
                            (r[e] = t), w.push(e);
                        },
                        exitVisualMode: me,
                        exitInsertMode: Ye,
                    };
                    function F() {
                        (this.prefixRepeat = []),
                            (this.motionRepeat = []),
                            (this.operator = null),
                            (this.operatorArgs = null),
                            (this.motion = null),
                            (this.motionArgs = null),
                            (this.keyBuffer = []),
                            (this.registerName = null);
                    }
                    function W(t, r) {
                        (t.state.vim.inputState = new F()),
                            e.signal(t, 'vim-command-done', r);
                    }
                    function D(e, t, r) {
                        this.clear(),
                            (this.keyBuffer = [e || '']),
                            (this.insertModeChanges = []),
                            (this.searchQueries = []),
                            (this.linewise = !!t),
                            (this.blockwise = !!r);
                    }
                    function V(e) {
                        (this.registers = e),
                            (this.unnamedRegister = e['"'] = new D()),
                            (e['.'] = new D()),
                            (e[':'] = new D()),
                            (e['/'] = new D());
                    }
                    function U() {
                        (this.historyBuffer = []),
                            (this.iterator = 0),
                            (this.initialPrefix = null);
                    }
                    (F.prototype.pushRepeatDigit = function(e) {
                        this.operator
                            ? (this.motionRepeat = this.motionRepeat.concat(e))
                            : (this.prefixRepeat = this.prefixRepeat.concat(e));
                    }),
                        (F.prototype.getRepeat = function() {
                            var e = 0;
                            return (
                                (this.prefixRepeat.length > 0 ||
                                    this.motionRepeat.length > 0) &&
                                    ((e = 1),
                                    this.prefixRepeat.length > 0 &&
                                        (e *= parseInt(
                                            this.prefixRepeat.join(''),
                                            10
                                        )),
                                    this.motionRepeat.length > 0 &&
                                        (e *= parseInt(
                                            this.motionRepeat.join(''),
                                            10
                                        ))),
                                e
                            );
                        }),
                        (D.prototype = {
                            setText: function(e, t, r) {
                                (this.keyBuffer = [e || '']),
                                    (this.linewise = !!t),
                                    (this.blockwise = !!r);
                            },
                            pushText: function(e, t) {
                                t &&
                                    (this.linewise || this.keyBuffer.push('\n'),
                                    (this.linewise = !0)),
                                    this.keyBuffer.push(e);
                            },
                            pushInsertModeChanges: function(e) {
                                this.insertModeChanges.push(K(e));
                            },
                            pushSearchQuery: function(e) {
                                this.searchQueries.push(e);
                            },
                            clear: function() {
                                (this.keyBuffer = []),
                                    (this.insertModeChanges = []),
                                    (this.searchQueries = []),
                                    (this.linewise = !1);
                            },
                            toString: function() {
                                return this.keyBuffer.join('');
                            },
                        }),
                        (V.prototype = {
                            pushText: function(e, t, r, n, o) {
                                if ('_' !== e) {
                                    n &&
                                        '\n' !== r.charAt(r.length - 1) &&
                                        (r += '\n');
                                    var i = this.isValidRegister(e)
                                        ? this.getRegister(e)
                                        : null;
                                    if (i)
                                        S(e)
                                            ? i.pushText(r, n)
                                            : i.setText(r, n, o),
                                            this.unnamedRegister.setText(
                                                i.toString(),
                                                n
                                            );
                                    else {
                                        switch (t) {
                                            case 'yank':
                                                this.registers[0] = new D(
                                                    r,
                                                    n,
                                                    o
                                                );
                                                break;
                                            case 'delete':
                                            case 'change':
                                                -1 == r.indexOf('\n')
                                                    ? (this.registers[
                                                          '-'
                                                      ] = new D(r, n))
                                                    : (this.shiftNumericRegisters_(),
                                                      (this.registers[1] = new D(
                                                          r,
                                                          n
                                                      )));
                                        }
                                        this.unnamedRegister.setText(r, n, o);
                                    }
                                }
                            },
                            getRegister: function(e) {
                                return this.isValidRegister(e)
                                    ? ((e = e.toLowerCase()),
                                      this.registers[e] ||
                                          (this.registers[e] = new D()),
                                      this.registers[e])
                                    : this.unnamedRegister;
                            },
                            isValidRegister: function(e) {
                                return e && L(e, w);
                            },
                            shiftNumericRegisters_: function() {
                                for (var e = 9; e >= 2; e--)
                                    this.registers[e] = this.getRegister(
                                        '' + (e - 1)
                                    );
                            },
                        }),
                        (U.prototype = {
                            nextMatch: function(e, t) {
                                var r = this.historyBuffer,
                                    n = t ? -1 : 1;
                                null === this.initialPrefix &&
                                    (this.initialPrefix = e);
                                for (
                                    var o = this.iterator + n;
                                    t ? o >= 0 : o < r.length;
                                    o += n
                                )
                                    for (
                                        var i = r[o], a = 0;
                                        a <= i.length;
                                        a++
                                    )
                                        if (
                                            this.initialPrefix ==
                                            i.substring(0, a)
                                        )
                                            return (this.iterator = o), i;
                                return o >= r.length
                                    ? ((this.iterator = r.length),
                                      this.initialPrefix)
                                    : o < 0
                                    ? e
                                    : void 0;
                            },
                            pushInput: function(e) {
                                var t = this.historyBuffer.indexOf(e);
                                t > -1 && this.historyBuffer.splice(t, 1),
                                    e.length && this.historyBuffer.push(e);
                            },
                            reset: function() {
                                (this.initialPrefix = null),
                                    (this.iterator = this.historyBuffer.length);
                            },
                        });
                    var $ = {
                            matchCommand: function(e, t, r, n) {
                                var o,
                                    i = (function(e, t, r, n) {
                                        for (
                                            var o, i = [], a = [], s = 0;
                                            s < t.length;
                                            s++
                                        ) {
                                            var l = t[s];
                                            ('insert' == r &&
                                                'insert' != l.context) ||
                                                (l.context && l.context != r) ||
                                                (n.operator &&
                                                    'action' == l.type) ||
                                                !(o = G(e, l.keys)) ||
                                                ('partial' == o && i.push(l),
                                                'full' == o && a.push(l));
                                        }
                                        return {
                                            partial: i.length && i,
                                            full: a.length && a,
                                        };
                                    })(e, t, n, r);
                                if (!i.full && !i.partial)
                                    return { type: 'none' };
                                if (!i.full && i.partial)
                                    return { type: 'partial' };
                                for (var a = 0; a < i.full.length; a++) {
                                    var s = i.full[a];
                                    o || (o = s);
                                }
                                if ('<character>' == o.keys.slice(-11)) {
                                    var l = (function(e) {
                                        var t = /^.*(<[^>]+>)$/.exec(e),
                                            r = t ? t[1] : e.slice(-1);
                                        if (r.length > 1)
                                            switch (r) {
                                                case '<CR>':
                                                    r = '\n';
                                                    break;
                                                case '<Space>':
                                                    r = ' ';
                                                    break;
                                                default:
                                                    r = '';
                                            }
                                        return r;
                                    })(e);
                                    if (!l) return { type: 'none' };
                                    r.selectedCharacter = l;
                                }
                                return { type: 'full', command: o };
                            },
                            processCommand: function(e, t, r) {
                                switch (
                                    ((t.inputState.repeatOverride =
                                        r.repeatOverride),
                                    r.type)
                                ) {
                                    case 'motion':
                                        this.processMotion(e, t, r);
                                        break;
                                    case 'operator':
                                        this.processOperator(e, t, r);
                                        break;
                                    case 'operatorMotion':
                                        this.processOperatorMotion(e, t, r);
                                        break;
                                    case 'action':
                                        this.processAction(e, t, r);
                                        break;
                                    case 'search':
                                        this.processSearch(e, t, r);
                                        break;
                                    case 'ex':
                                    case 'keyToEx':
                                        this.processEx(e, t, r);
                                }
                            },
                            processMotion: function(e, t, r) {
                                (t.inputState.motion = r.motion),
                                    (t.inputState.motionArgs = X(r.motionArgs)),
                                    this.evalInput(e, t);
                            },
                            processOperator: function(e, t, r) {
                                var n = t.inputState;
                                if (n.operator) {
                                    if (n.operator == r.operator)
                                        return (
                                            (n.motion = 'expandToLine'),
                                            (n.motionArgs = { linewise: !0 }),
                                            void this.evalInput(e, t)
                                        );
                                    W(e);
                                }
                                (n.operator = r.operator),
                                    (n.operatorArgs = X(r.operatorArgs)),
                                    r.exitVisualBlock &&
                                        ((t.visualBlock = !1), fe(e)),
                                    t.visualMode && this.evalInput(e, t);
                            },
                            processOperatorMotion: function(e, t, r) {
                                var n = t.visualMode,
                                    o = X(r.operatorMotionArgs);
                                o && n && o.visualLine && (t.visualLine = !0),
                                    this.processOperator(e, t, r),
                                    n || this.processMotion(e, t, r);
                            },
                            processAction: function(e, t, r) {
                                var n = t.inputState,
                                    o = n.getRepeat(),
                                    i = !!o,
                                    a = X(r.actionArgs) || {};
                                n.selectedCharacter &&
                                    (a.selectedCharacter = n.selectedCharacter),
                                    r.operator && this.processOperator(e, t, r),
                                    r.motion && this.processMotion(e, t, r),
                                    (r.motion || r.operator) &&
                                        this.evalInput(e, t),
                                    (a.repeat = o || 1),
                                    (a.repeatIsExplicit = i),
                                    (a.registerName = n.registerName),
                                    W(e),
                                    (t.lastMotion = null),
                                    r.isEdit && this.recordLastEdit(t, n, r),
                                    z[r.action](e, a, t);
                            },
                            processSearch: function(t, r, n) {
                                if (t.getSearchCursor) {
                                    var o = n.searchArgs.forward,
                                        i = n.searchArgs.wholeWordOnly;
                                    Re(t).setReversed(!o);
                                    var a = o ? '/' : '?',
                                        s = Re(t).getQuery(),
                                        l = t.getScrollInfo();
                                    switch (n.searchArgs.querySrc) {
                                        case 'prompt':
                                            var c = B.macroModeState;
                                            c.isPlaying
                                                ? f(
                                                      (p = c.replaySearchQueries.shift()),
                                                      !0,
                                                      !1
                                                  )
                                                : _e(t, {
                                                      onClose: function(e) {
                                                          t.scrollTo(
                                                              l.left,
                                                              l.top
                                                          ),
                                                              f(e, !0, !0);
                                                          var r =
                                                              B.macroModeState;
                                                          r.isRecording &&
                                                              (function(e, t) {
                                                                  if (
                                                                      !e.isPlaying
                                                                  ) {
                                                                      var r =
                                                                              e.latestRegister,
                                                                          n = B.registerController.getRegister(
                                                                              r
                                                                          );
                                                                      n &&
                                                                          n.pushSearchQuery &&
                                                                          n.pushSearchQuery(
                                                                              t
                                                                          );
                                                                  }
                                                              })(r, e);
                                                      },
                                                      prefix: a,
                                                      desc:
                                                          '(JavaScript regexp)',
                                                      onKeyUp: function(
                                                          r,
                                                          n,
                                                          i
                                                      ) {
                                                          var a,
                                                              s,
                                                              c,
                                                              u = e.keyName(r);
                                                          'Up' == u ||
                                                          'Down' == u
                                                              ? ((a =
                                                                    'Up' == u),
                                                                (s = r.target
                                                                    ? r.target
                                                                          .selectionEnd
                                                                    : 0),
                                                                i(
                                                                    (n =
                                                                        B.searchHistoryController.nextMatch(
                                                                            n,
                                                                            a
                                                                        ) || '')
                                                                ),
                                                                s &&
                                                                    r.target &&
                                                                    (r.target.selectionEnd = r.target.selectionStart = Math.min(
                                                                        s,
                                                                        r.target
                                                                            .value
                                                                            .length
                                                                    )))
                                                              : 'Left' != u &&
                                                                'Right' != u &&
                                                                'Ctrl' != u &&
                                                                'Alt' != u &&
                                                                'Shift' != u &&
                                                                B.searchHistoryController.reset();
                                                          try {
                                                              c = je(
                                                                  t,
                                                                  n,
                                                                  !0,
                                                                  !0
                                                              );
                                                          } catch (r) {}
                                                          c
                                                              ? t.scrollIntoView(
                                                                    We(
                                                                        t,
                                                                        !o,
                                                                        c
                                                                    ),
                                                                    30
                                                                )
                                                              : (De(t),
                                                                t.scrollTo(
                                                                    l.left,
                                                                    l.top
                                                                ));
                                                      },
                                                      onKeyDown: function(
                                                          r,
                                                          n,
                                                          o
                                                      ) {
                                                          var i = e.keyName(r);
                                                          'Esc' == i ||
                                                          'Ctrl-C' == i ||
                                                          'Ctrl-[' == i ||
                                                          ('Backspace' == i &&
                                                              '' == n)
                                                              ? (B.searchHistoryController.pushInput(
                                                                    n
                                                                ),
                                                                B.searchHistoryController.reset(),
                                                                je(t, s),
                                                                De(t),
                                                                t.scrollTo(
                                                                    l.left,
                                                                    l.top
                                                                ),
                                                                e.e_stop(r),
                                                                W(t),
                                                                o(),
                                                                t.focus())
                                                              : 'Up' == i ||
                                                                'Down' == i
                                                              ? e.e_stop(r)
                                                              : 'Ctrl-U' == i &&
                                                                (e.e_stop(r),
                                                                o(''));
                                                      },
                                                  });
                                            break;
                                        case 'wordUnderCursor':
                                            var u = ve(t, !1, 0, !1, !0),
                                                h = !0;
                                            if (
                                                (u ||
                                                    ((u = ve(t, !1, 0, !1, !1)),
                                                    (h = !1)),
                                                !u)
                                            )
                                                return;
                                            var p = t
                                                .getLine(u.start.line)
                                                .substring(
                                                    u.start.ch,
                                                    u.end.ch
                                                );
                                            (p =
                                                h && i
                                                    ? '\\b' + p + '\\b'
                                                    : p.replace(
                                                          /([.?*+$\[\]\/\\(){}|\-])/g,
                                                          '\\$1'
                                                      )),
                                                (B.jumpList.cachedCursor = t.getCursor()),
                                                t.setCursor(u.start),
                                                f(p, !0, !1);
                                    }
                                }
                                function f(e, o, i) {
                                    B.searchHistoryController.pushInput(e),
                                        B.searchHistoryController.reset();
                                    try {
                                        je(t, e, o, i);
                                    } catch (r) {
                                        return (
                                            Pe(t, 'Invalid regex: ' + e),
                                            void W(t)
                                        );
                                    }
                                    $.processMotion(t, r, {
                                        type: 'motion',
                                        motion: 'findNext',
                                        motionArgs: {
                                            forward: !0,
                                            toJumplist: n.searchArgs.toJumplist,
                                        },
                                    });
                                }
                            },
                            processEx: function(t, r, n) {
                                function o(e) {
                                    B.exCommandHistoryController.pushInput(e),
                                        B.exCommandHistoryController.reset(),
                                        ze.processCommand(t, e);
                                }
                                function i(r, n, o) {
                                    var i,
                                        a,
                                        s = e.keyName(r);
                                    ('Esc' == s ||
                                        'Ctrl-C' == s ||
                                        'Ctrl-[' == s ||
                                        ('Backspace' == s && '' == n)) &&
                                        (B.exCommandHistoryController.pushInput(
                                            n
                                        ),
                                        B.exCommandHistoryController.reset(),
                                        e.e_stop(r),
                                        W(t),
                                        o(),
                                        t.focus()),
                                        'Up' == s || 'Down' == s
                                            ? (e.e_stop(r),
                                              (i = 'Up' == s),
                                              (a = r.target
                                                  ? r.target.selectionEnd
                                                  : 0),
                                              o(
                                                  (n =
                                                      B.exCommandHistoryController.nextMatch(
                                                          n,
                                                          i
                                                      ) || '')
                                              ),
                                              a &&
                                                  r.target &&
                                                  (r.target.selectionEnd = r.target.selectionStart = Math.min(
                                                      a,
                                                      r.target.value.length
                                                  )))
                                            : 'Ctrl-U' == s
                                            ? (e.e_stop(r), o(''))
                                            : 'Left' != s &&
                                              'Right' != s &&
                                              'Ctrl' != s &&
                                              'Alt' != s &&
                                              'Shift' != s &&
                                              B.exCommandHistoryController.reset();
                                }
                                'keyToEx' == n.type
                                    ? ze.processCommand(t, n.exArgs.input)
                                    : r.visualMode
                                    ? _e(t, {
                                          onClose: o,
                                          prefix: ':',
                                          value: "'<,'>",
                                          onKeyDown: i,
                                          selectValueOnOpen: !1,
                                      })
                                    : _e(t, {
                                          onClose: o,
                                          prefix: ':',
                                          onKeyDown: i,
                                      });
                            },
                            evalInput: function(e, t) {
                                var r,
                                    n,
                                    i,
                                    a = t.inputState,
                                    s = a.motion,
                                    l = a.motionArgs || {},
                                    c = a.operator,
                                    u = a.operatorArgs || {},
                                    h = a.registerName,
                                    p = t.sel,
                                    f = te(
                                        t.visualMode
                                            ? Y(e, p.head)
                                            : e.getCursor('head')
                                    ),
                                    d = te(
                                        t.visualMode
                                            ? Y(e, p.anchor)
                                            : e.getCursor('anchor')
                                    ),
                                    m = te(f),
                                    g = te(d);
                                if (
                                    (c && this.recordLastEdit(t, a),
                                    (i =
                                        void 0 !== a.repeatOverride
                                            ? a.repeatOverride
                                            : a.getRepeat()) > 0 &&
                                    l.explicitRepeat
                                        ? (l.repeatIsExplicit = !0)
                                        : (l.noRepeat ||
                                              (!l.explicitRepeat && 0 === i)) &&
                                          ((i = 1), (l.repeatIsExplicit = !1)),
                                    a.selectedCharacter &&
                                        (l.selectedCharacter = u.selectedCharacter =
                                            a.selectedCharacter),
                                    (l.repeat = i),
                                    W(e),
                                    s)
                                ) {
                                    var v = J[s](e, f, l, t, a);
                                    if (((t.lastMotion = J[s]), !v)) return;
                                    if (l.toJumplist) {
                                        var y = B.jumpList,
                                            k = y.cachedCursor;
                                        k
                                            ? (ye(e, k, v),
                                              delete y.cachedCursor)
                                            : ye(e, f, v);
                                    }
                                    v instanceof Array
                                        ? ((n = v[0]), (r = v[1]))
                                        : (r = v),
                                        r || (r = te(f)),
                                        t.visualMode
                                            ? ((t.visualBlock &&
                                                  r.ch === 1 / 0) ||
                                                  (r = Y(e, r)),
                                              n && (n = Y(e, n)),
                                              (n = n || g),
                                              (p.anchor = n),
                                              (p.head = r),
                                              fe(e),
                                              Ae(e, t, '<', ne(n, r) ? n : r),
                                              Ae(e, t, '>', ne(n, r) ? r : n))
                                            : c ||
                                              ((r = Y(e, r)),
                                              e.setCursor(r.line, r.ch));
                                }
                                if (c) {
                                    if (u.lastSel) {
                                        n = g;
                                        var C = u.lastSel,
                                            w = Math.abs(
                                                C.head.line - C.anchor.line
                                            ),
                                            x = Math.abs(
                                                C.head.ch - C.anchor.ch
                                            );
                                        (r = C.visualLine
                                            ? o(g.line + w, g.ch)
                                            : C.visualBlock
                                            ? o(g.line + w, g.ch + x)
                                            : C.head.line == C.anchor.line
                                            ? o(g.line, g.ch + x)
                                            : o(g.line + w, g.ch)),
                                            (t.visualMode = !0),
                                            (t.visualLine = C.visualLine),
                                            (t.visualBlock = C.visualBlock),
                                            (p = t.sel = {
                                                anchor: n,
                                                head: r,
                                            }),
                                            fe(e);
                                    } else
                                        t.visualMode &&
                                            (u.lastSel = {
                                                anchor: te(p.anchor),
                                                head: te(p.head),
                                                visualBlock: t.visualBlock,
                                                visualLine: t.visualLine,
                                            });
                                    var M, S, b, L, T;
                                    if (t.visualMode) {
                                        if (
                                            ((M = oe(p.head, p.anchor)),
                                            (S = ie(p.head, p.anchor)),
                                            (b = t.visualLine || u.linewise),
                                            (T = de(
                                                e,
                                                { anchor: M, head: S },
                                                (L = t.visualBlock
                                                    ? 'block'
                                                    : b
                                                    ? 'line'
                                                    : 'char')
                                            )),
                                            b)
                                        ) {
                                            var R = T.ranges;
                                            if ('block' == L)
                                                for (
                                                    var E = 0;
                                                    E < R.length;
                                                    E++
                                                )
                                                    R[E].head.ch = se(
                                                        e,
                                                        R[E].head.line
                                                    );
                                            else
                                                'line' == L &&
                                                    (R[0].head = o(
                                                        R[0].head.line + 1,
                                                        0
                                                    ));
                                        }
                                    } else {
                                        if (
                                            ((M = te(n || g)),
                                            ne((S = te(r || m)), M))
                                        ) {
                                            var O = M;
                                            (M = S), (S = O);
                                        }
                                        (b = l.linewise || u.linewise)
                                            ? (function(e, t, r) {
                                                  (t.ch = 0),
                                                      (r.ch = 0),
                                                      r.line++;
                                              })(0, M, S)
                                            : l.forward &&
                                              (function(e, t, r) {
                                                  var n = e.getRange(t, r);
                                                  if (/\n\s*$/.test(n)) {
                                                      var o = n.split('\n');
                                                      o.pop();
                                                      for (
                                                          var i = o.pop();
                                                          o.length > 0 &&
                                                          i &&
                                                          A(i);
                                                          i = o.pop()
                                                      )
                                                          r.line--, (r.ch = 0);
                                                      i
                                                          ? (r.line--,
                                                            (r.ch = se(
                                                                e,
                                                                r.line
                                                            )))
                                                          : (r.ch = 0);
                                                  }
                                              })(e, M, S),
                                            (T = de(
                                                e,
                                                { anchor: M, head: S },
                                                (L = 'char'),
                                                !l.inclusive || b
                                            ));
                                    }
                                    e.setSelections(T.ranges, T.primary),
                                        (t.lastMotion = null),
                                        (u.repeat = i),
                                        (u.registerName = h),
                                        (u.linewise = b);
                                    var I = q[c](e, u, T.ranges, g, r);
                                    t.visualMode && me(e, null != I),
                                        I && e.setCursor(I);
                                }
                            },
                            recordLastEdit: function(e, t, r) {
                                var n = B.macroModeState;
                                n.isPlaying ||
                                    ((e.lastEditInputState = t),
                                    (e.lastEditActionCommand = r),
                                    (n.lastInsertModeChanges.changes = []),
                                    (n.lastInsertModeChanges.expectCursorActivityForChange = !1),
                                    (n.lastInsertModeChanges.visualBlock = e.visualBlock
                                        ? e.sel.head.line - e.sel.anchor.line
                                        : 0));
                            },
                        },
                        J = {
                            moveToTopLine: function(e, t, r) {
                                var n = Ue(e).top + r.repeat - 1;
                                return o(n, ge(e.getLine(n)));
                            },
                            moveToMiddleLine: function(e) {
                                var t = Ue(e),
                                    r = Math.floor(0.5 * (t.top + t.bottom));
                                return o(r, ge(e.getLine(r)));
                            },
                            moveToBottomLine: function(e, t, r) {
                                var n = Ue(e).bottom - r.repeat + 1;
                                return o(n, ge(e.getLine(n)));
                            },
                            expandToLine: function(e, t, r) {
                                return o(t.line + r.repeat - 1, 1 / 0);
                            },
                            findNext: function(e, t, r) {
                                var n = Re(e),
                                    o = n.getQuery();
                                if (o) {
                                    var i = !r.forward;
                                    return (
                                        (i = n.isReversed() ? !i : i),
                                        Fe(e, o),
                                        We(e, i, o, r.repeat)
                                    );
                                }
                            },
                            findAndSelectNextInclusive: function(
                                t,
                                r,
                                n,
                                i,
                                a
                            ) {
                                var s = Re(t),
                                    l = s.getQuery();
                                if (l) {
                                    var c = !n.forward,
                                        u = (function(e, t, r, n, i) {
                                            return (
                                                void 0 === n && (n = 1),
                                                e.operation(function() {
                                                    var a = e.getCursor(),
                                                        s = e.getSearchCursor(
                                                            r,
                                                            a
                                                        ),
                                                        l = s.find(!t);
                                                    !i.visualMode &&
                                                        l &&
                                                        re(s.from(), a) &&
                                                        s.find(!t);
                                                    for (var c = 0; c < n; c++)
                                                        if (
                                                            !(l = s.find(t)) &&
                                                            !(s = e.getSearchCursor(
                                                                r,
                                                                t
                                                                    ? o(
                                                                          e.lastLine()
                                                                      )
                                                                    : o(
                                                                          e.firstLine(),
                                                                          0
                                                                      )
                                                            )).find(t)
                                                        )
                                                            return;
                                                    return [s.from(), s.to()];
                                                })
                                            );
                                        })(
                                            t,
                                            (c = s.isReversed() ? !c : c),
                                            l,
                                            n.repeat,
                                            i
                                        );
                                    if (u) {
                                        if (a.operator) return u;
                                        var h = u[0],
                                            p = o(u[1].line, u[1].ch - 1);
                                        if (i.visualMode) {
                                            (i.visualLine || i.visualBlock) &&
                                                ((i.visualLine = !1),
                                                (i.visualBlock = !1),
                                                e.signal(t, 'vim-mode-change', {
                                                    mode: 'visual',
                                                    subMode: '',
                                                }));
                                            var f = i.sel.anchor;
                                            if (f)
                                                return s.isReversed()
                                                    ? n.forward
                                                        ? [f, h]
                                                        : [f, p]
                                                    : n.forward
                                                    ? [f, p]
                                                    : [f, h];
                                        } else
                                            (i.visualMode = !0),
                                                (i.visualLine = !1),
                                                (i.visualBlock = !1),
                                                e.signal(t, 'vim-mode-change', {
                                                    mode: 'visual',
                                                    subMode: '',
                                                });
                                        return c ? [p, h] : [h, p];
                                    }
                                }
                            },
                            goToMark: function(e, t, r, n) {
                                var o = $e(e, n, r.selectedCharacter);
                                return o
                                    ? r.linewise
                                        ? {
                                              line: o.line,
                                              ch: ge(e.getLine(o.line)),
                                          }
                                        : o
                                    : null;
                            },
                            moveToOtherHighlightedEnd: function(e, t, r, n) {
                                if (n.visualBlock && r.sameLine) {
                                    var i = n.sel;
                                    return [
                                        Y(e, o(i.anchor.line, i.head.ch)),
                                        Y(e, o(i.head.line, i.anchor.ch)),
                                    ];
                                }
                                return [n.sel.head, n.sel.anchor];
                            },
                            jumpToMark: function(e, t, r, n) {
                                for (var i = t, a = 0; a < r.repeat; a++) {
                                    var s = i;
                                    for (var l in n.marks)
                                        if (M(l)) {
                                            var c = n.marks[l].find();
                                            if (
                                                !(
                                                    (r.forward
                                                        ? ne(c, s)
                                                        : ne(s, c)) ||
                                                    (r.linewise &&
                                                        c.line == s.line)
                                                )
                                            ) {
                                                var u = re(s, i),
                                                    h = r.forward
                                                        ? ae(s, c, i)
                                                        : ae(i, c, s);
                                                (u || h) && (i = c);
                                            }
                                        }
                                }
                                return (
                                    r.linewise &&
                                        (i = o(i.line, ge(e.getLine(i.line)))),
                                    i
                                );
                            },
                            moveByCharacters: function(e, t, r) {
                                var n = t,
                                    i = r.repeat,
                                    a = r.forward ? n.ch + i : n.ch - i;
                                return o(n.line, a);
                            },
                            moveByLines: function(e, t, r, n) {
                                var i = t,
                                    a = i.ch;
                                switch (n.lastMotion) {
                                    case this.moveByLines:
                                    case this.moveByDisplayLines:
                                    case this.moveByScroll:
                                    case this.moveToColumn:
                                    case this.moveToEol:
                                        a = n.lastHPos;
                                        break;
                                    default:
                                        n.lastHPos = a;
                                }
                                var s = r.repeat + (r.repeatOffset || 0),
                                    l = r.forward ? i.line + s : i.line - s,
                                    c = e.firstLine(),
                                    u = e.lastLine(),
                                    h = e.findPosV(
                                        i,
                                        r.forward ? s : -s,
                                        'line',
                                        n.lastHSPos
                                    );
                                return (
                                    (r.forward ? h.line > l : h.line < l) &&
                                        ((l = h.line), (a = h.ch)),
                                    l < c && i.line == c
                                        ? this.moveToStartOfLine(e, t, r, n)
                                        : l > u && i.line == u
                                        ? Me(e, t, r, n, !0)
                                        : (r.toFirstChar &&
                                              ((a = ge(e.getLine(l))),
                                              (n.lastHPos = a)),
                                          (n.lastHSPos = e.charCoords(
                                              o(l, a),
                                              'div'
                                          ).left),
                                          o(l, a))
                                );
                            },
                            moveByDisplayLines: function(e, t, r, n) {
                                var i = t;
                                switch (n.lastMotion) {
                                    case this.moveByDisplayLines:
                                    case this.moveByScroll:
                                    case this.moveByLines:
                                    case this.moveToColumn:
                                    case this.moveToEol:
                                        break;
                                    default:
                                        n.lastHSPos = e.charCoords(
                                            i,
                                            'div'
                                        ).left;
                                }
                                var a = r.repeat;
                                if (
                                    (l = e.findPosV(
                                        i,
                                        r.forward ? a : -a,
                                        'line',
                                        n.lastHSPos
                                    )).hitSide
                                )
                                    if (r.forward)
                                        var s = {
                                                top:
                                                    e.charCoords(l, 'div').top +
                                                    8,
                                                left: n.lastHSPos,
                                            },
                                            l = e.coordsChar(s, 'div');
                                    else {
                                        var c = e.charCoords(
                                            o(e.firstLine(), 0),
                                            'div'
                                        );
                                        (c.left = n.lastHSPos),
                                            (l = e.coordsChar(c, 'div'));
                                    }
                                return (n.lastHPos = l.ch), l;
                            },
                            moveByPage: function(e, t, r) {
                                var n = t,
                                    o = r.repeat;
                                return e.findPosV(
                                    n,
                                    r.forward ? o : -o,
                                    'page'
                                );
                            },
                            moveByParagraph: function(e, t, r) {
                                var n = r.forward ? 1 : -1;
                                return Le(e, t, r.repeat, n);
                            },
                            moveBySentence: function(e, t, r) {
                                var n = r.forward ? 1 : -1;
                                return (function(e, t, r, n) {
                                    function i(e, t) {
                                        if (
                                            t.pos + t.dir < 0 ||
                                            t.pos + t.dir >= t.line.length
                                        ) {
                                            if (((t.ln += t.dir), !x(e, t.ln)))
                                                return (
                                                    (t.line = null),
                                                    (t.ln = null),
                                                    void (t.pos = null)
                                                );
                                            (t.line = e.getLine(t.ln)),
                                                (t.pos =
                                                    t.dir > 0
                                                        ? 0
                                                        : t.line.length - 1);
                                        } else t.pos += t.dir;
                                    }
                                    function a(e, t, r, n) {
                                        var o = '' === (c = e.getLine(t)),
                                            a = {
                                                line: c,
                                                ln: t,
                                                pos: r,
                                                dir: n,
                                            },
                                            s = { ln: a.ln, pos: a.pos },
                                            l = '' === a.line;
                                        for (i(e, a); null !== a.line; ) {
                                            if (
                                                ((s.ln = a.ln),
                                                (s.pos = a.pos),
                                                '' === a.line && !l)
                                            )
                                                return { ln: a.ln, pos: a.pos };
                                            if (
                                                o &&
                                                '' !== a.line &&
                                                !A(a.line[a.pos])
                                            )
                                                return { ln: a.ln, pos: a.pos };
                                            !b(a.line[a.pos]) ||
                                                o ||
                                                (a.pos !== a.line.length - 1 &&
                                                    !A(a.line[a.pos + 1])) ||
                                                (o = !0),
                                                i(e, a);
                                        }
                                        var c = e.getLine(s.ln);
                                        s.pos = 0;
                                        for (var u = c.length - 1; u >= 0; --u)
                                            if (!A(c[u])) {
                                                s.pos = u;
                                                break;
                                            }
                                        return s;
                                    }
                                    function s(e, t, r, n) {
                                        var o = {
                                                line: (l = e.getLine(t)),
                                                ln: t,
                                                pos: r,
                                                dir: n,
                                            },
                                            a = { ln: o.ln, pos: null },
                                            s = '' === o.line;
                                        for (i(e, o); null !== o.line; ) {
                                            if ('' === o.line && !s)
                                                return null !== a.pos
                                                    ? a
                                                    : { ln: o.ln, pos: o.pos };
                                            if (
                                                b(o.line[o.pos]) &&
                                                null !== a.pos &&
                                                (o.ln !== a.ln ||
                                                    o.pos + 1 !== a.pos)
                                            )
                                                return a;
                                            '' === o.line ||
                                                A(o.line[o.pos]) ||
                                                ((s = !1),
                                                (a = { ln: o.ln, pos: o.pos })),
                                                i(e, o);
                                        }
                                        var l = e.getLine(a.ln);
                                        a.pos = 0;
                                        for (var c = 0; c < l.length; ++c)
                                            if (!A(l[c])) {
                                                a.pos = c;
                                                break;
                                            }
                                        return a;
                                    }
                                    for (
                                        var l = { ln: t.line, pos: t.ch };
                                        r > 0;

                                    )
                                        (l =
                                            n < 0
                                                ? s(e, l.ln, l.pos, n)
                                                : a(e, l.ln, l.pos, n)),
                                            r--;
                                    return o(l.ln, l.pos);
                                })(e, t, r.repeat, n);
                            },
                            moveByScroll: function(e, t, r, n) {
                                var o,
                                    i = e.getScrollInfo(),
                                    a = r.repeat;
                                a ||
                                    (a =
                                        i.clientHeight /
                                        (2 * e.defaultTextHeight()));
                                var s = e.charCoords(t, 'local');
                                if (
                                    ((r.repeat = a),
                                    !(o = J.moveByDisplayLines(e, t, r, n)))
                                )
                                    return null;
                                var l = e.charCoords(o, 'local');
                                return (
                                    e.scrollTo(null, i.top + l.top - s.top), o
                                );
                            },
                            moveByWords: function(e, t, r) {
                                return (function(e, t, r, n, i, a) {
                                    var s = te(t),
                                        l = [];
                                    ((n && !i) || (!n && i)) && r++;
                                    for (var c = !(n && i), u = 0; u < r; u++) {
                                        var h = xe(e, t, n, a, c);
                                        if (!h) {
                                            var p = se(e, e.lastLine());
                                            l.push(
                                                n
                                                    ? {
                                                          line: e.lastLine(),
                                                          from: p,
                                                          to: p,
                                                      }
                                                    : {
                                                          line: 0,
                                                          from: 0,
                                                          to: 0,
                                                      }
                                            );
                                            break;
                                        }
                                        l.push(h),
                                            (t = o(
                                                h.line,
                                                n ? h.to - 1 : h.from
                                            ));
                                    }
                                    var f = l.length != r,
                                        d = l[0],
                                        m = l.pop();
                                    return n && !i
                                        ? (f ||
                                              (d.from == s.ch &&
                                                  d.line == s.line) ||
                                              (m = l.pop()),
                                          o(m.line, m.from))
                                        : n && i
                                        ? o(m.line, m.to - 1)
                                        : !n && i
                                        ? (f ||
                                              (d.to == s.ch &&
                                                  d.line == s.line) ||
                                              (m = l.pop()),
                                          o(m.line, m.to))
                                        : o(m.line, m.from);
                                })(
                                    e,
                                    t,
                                    r.repeat,
                                    !!r.forward,
                                    !!r.wordEnd,
                                    !!r.bigWord
                                );
                            },
                            moveTillCharacter: function(e, t, r) {
                                var n = Se(
                                        e,
                                        r.repeat,
                                        r.forward,
                                        r.selectedCharacter
                                    ),
                                    o = r.forward ? -1 : 1;
                                return ke(o, r), n ? ((n.ch += o), n) : null;
                            },
                            moveToCharacter: function(e, t, r) {
                                var n = r.repeat;
                                return (
                                    ke(0, r),
                                    Se(e, n, r.forward, r.selectedCharacter) ||
                                        t
                                );
                            },
                            moveToSymbol: function(e, t, r) {
                                return (
                                    (function(e, t, r, n) {
                                        var i = te(e.getCursor()),
                                            a = r ? 1 : -1,
                                            s = r ? e.lineCount() : -1,
                                            l = i.ch,
                                            c = i.line,
                                            u = e.getLine(c),
                                            h = {
                                                lineText: u,
                                                nextCh: u.charAt(l),
                                                lastCh: null,
                                                index: l,
                                                symb: n,
                                                reverseSymb: (r
                                                    ? { ')': '(', '}': '{' }
                                                    : { '(': ')', '{': '}' })[
                                                    n
                                                ],
                                                forward: r,
                                                depth: 0,
                                                curMoveThrough: !1,
                                            },
                                            p = Ce[n];
                                        if (!p) return i;
                                        var f = we[p].init,
                                            d = we[p].isComplete;
                                        for (f && f(h); c !== s && t; ) {
                                            if (
                                                ((h.index += a),
                                                (h.nextCh = h.lineText.charAt(
                                                    h.index
                                                )),
                                                !h.nextCh)
                                            ) {
                                                if (
                                                    ((c += a),
                                                    (h.lineText =
                                                        e.getLine(c) || ''),
                                                    a > 0)
                                                )
                                                    h.index = 0;
                                                else {
                                                    var m = h.lineText.length;
                                                    h.index = m > 0 ? m - 1 : 0;
                                                }
                                                h.nextCh = h.lineText.charAt(
                                                    h.index
                                                );
                                            }
                                            d(h) &&
                                                ((i.line = c),
                                                (i.ch = h.index),
                                                t--);
                                        }
                                        return h.nextCh || h.curMoveThrough
                                            ? o(c, h.index)
                                            : i;
                                    })(
                                        e,
                                        r.repeat,
                                        r.forward,
                                        r.selectedCharacter
                                    ) || t
                                );
                            },
                            moveToColumn: function(e, t, r, n) {
                                var i = r.repeat;
                                return (
                                    (n.lastHPos = i - 1),
                                    (n.lastHSPos = e.charCoords(t, 'div').left),
                                    (function(e, t) {
                                        var r = e.getCursor().line;
                                        return Y(e, o(r, t - 1));
                                    })(e, i)
                                );
                            },
                            moveToEol: function(e, t, r, n) {
                                return Me(e, t, r, n, !1);
                            },
                            moveToFirstNonWhiteSpaceCharacter: function(e, t) {
                                var r = t;
                                return o(r.line, ge(e.getLine(r.line)));
                            },
                            moveToMatchedSymbol: function(e, t) {
                                for (
                                    var r,
                                        n = t,
                                        i = n.line,
                                        a = n.ch,
                                        s = e.getLine(i);
                                    a < s.length;
                                    a++
                                )
                                    if (
                                        (r = s.charAt(a)) &&
                                        -1 != '()[]{}'.indexOf(r)
                                    ) {
                                        var l = e.getTokenTypeAt(o(i, a + 1));
                                        if ('string' !== l && 'comment' !== l)
                                            break;
                                    }
                                if (a < s.length) {
                                    var c =
                                        '<' === a || '>' === a
                                            ? /[(){}[\]<>]/
                                            : /[(){}[\]]/;
                                    return e.findMatchingBracket(o(i, a), {
                                        bracketRegex: c,
                                    }).to;
                                }
                                return n;
                            },
                            moveToStartOfLine: function(e, t) {
                                return o(t.line, 0);
                            },
                            moveToLineOrEdgeOfDocument: function(e, t, r) {
                                var n = r.forward
                                    ? e.lastLine()
                                    : e.firstLine();
                                return (
                                    r.repeatIsExplicit &&
                                        (n =
                                            r.repeat -
                                            e.getOption('firstLineNumber')),
                                    o(n, ge(e.getLine(n)))
                                );
                            },
                            textObjectManipulation: function(t, r, n, i) {
                                var a = n.selectedCharacter;
                                'b' == a ? (a = '(') : 'B' == a && (a = '{');
                                var s,
                                    l = !n.textObjectInner;
                                if (
                                    {
                                        '(': ')',
                                        ')': '(',
                                        '{': '}',
                                        '}': '{',
                                        '[': ']',
                                        ']': '[',
                                        '<': '>',
                                        '>': '<',
                                    }[a]
                                )
                                    s = (function(e, t, r, n) {
                                        var i,
                                            a,
                                            s = t,
                                            l = {
                                                '(': /[()]/,
                                                ')': /[()]/,
                                                '[': /[[\]]/,
                                                ']': /[[\]]/,
                                                '{': /[{}]/,
                                                '}': /[{}]/,
                                                '<': /[<>]/,
                                                '>': /[<>]/,
                                            }[r],
                                            c = {
                                                '(': '(',
                                                ')': '(',
                                                '[': '[',
                                                ']': '[',
                                                '{': '{',
                                                '}': '{',
                                                '<': '<',
                                                '>': '<',
                                            }[r],
                                            u =
                                                e
                                                    .getLine(s.line)
                                                    .charAt(s.ch) === c
                                                    ? 1
                                                    : 0;
                                        if (
                                            ((i = e.scanForBracket(
                                                o(s.line, s.ch + u),
                                                -1,
                                                void 0,
                                                { bracketRegex: l }
                                            )),
                                            (a = e.scanForBracket(
                                                o(s.line, s.ch + u),
                                                1,
                                                void 0,
                                                { bracketRegex: l }
                                            )),
                                            !i || !a)
                                        )
                                            return { start: s, end: s };
                                        if (
                                            ((i = i.pos),
                                            (a = a.pos),
                                            (i.line == a.line && i.ch > a.ch) ||
                                                i.line > a.line)
                                        ) {
                                            var h = i;
                                            (i = a), (a = h);
                                        }
                                        return (
                                            n ? (a.ch += 1) : (i.ch += 1),
                                            { start: i, end: a }
                                        );
                                    })(t, r, a, l);
                                else if ({ "'": !0, '"': !0, '`': !0 }[a])
                                    s = (function(e, t, r, n) {
                                        var i,
                                            a,
                                            s,
                                            l,
                                            c = te(t),
                                            u = e.getLine(c.line).split(''),
                                            h = u.indexOf(r);
                                        if (
                                            (c.ch < h
                                                ? (c.ch = h)
                                                : h < c.ch &&
                                                  u[c.ch] == r &&
                                                  ((a = c.ch), --c.ch),
                                            u[c.ch] != r || a)
                                        )
                                            for (s = c.ch; s > -1 && !i; s--)
                                                u[s] == r && (i = s + 1);
                                        else i = c.ch + 1;
                                        if (i && !a)
                                            for (
                                                s = i, l = u.length;
                                                s < l && !a;
                                                s++
                                            )
                                                u[s] == r && (a = s);
                                        return i && a
                                            ? (n && (--i, ++a),
                                              {
                                                  start: o(c.line, i),
                                                  end: o(c.line, a),
                                              })
                                            : { start: c, end: c };
                                    })(t, r, a, l);
                                else if ('W' === a) s = ve(t, l, 0, !0);
                                else if ('w' === a) s = ve(t, l, 0, !1);
                                else if ('p' === a)
                                    if (
                                        ((s = Le(t, r, n.repeat, 0, l)),
                                        (n.linewise = !0),
                                        i.visualMode)
                                    )
                                        i.visualLine || (i.visualLine = !0);
                                    else {
                                        var c = i.inputState.operatorArgs;
                                        c && (c.linewise = !0), s.end.line--;
                                    }
                                else {
                                    if ('t' !== a) return null;
                                    s = (function(t, r, n) {
                                        var o = r;
                                        if (
                                            !e.findMatchingTag ||
                                            !e.findEnclosingTag
                                        )
                                            return { start: o, end: o };
                                        var i =
                                            e.findMatchingTag(t, r) ||
                                            e.findEnclosingTag(t, r);
                                        return i && i.open && i.close
                                            ? n
                                                ? {
                                                      start: i.open.from,
                                                      end: i.close.to,
                                                  }
                                                : {
                                                      start: i.open.to,
                                                      end: i.close.from,
                                                  }
                                            : { start: o, end: o };
                                    })(t, r, l);
                                }
                                return t.state.vim.visualMode
                                    ? (function(e, t, r) {
                                          var n,
                                              i = e.state.vim.sel,
                                              a = i.head,
                                              s = i.anchor;
                                          return (
                                              ne(r, t) &&
                                                  ((n = r), (r = t), (t = n)),
                                              ne(a, s)
                                                  ? ((a = oe(t, a)),
                                                    (s = ie(s, r)))
                                                  : ((s = oe(t, s)),
                                                    -1 ==
                                                        (a = Z(
                                                            (a = ie(a, r)),
                                                            0,
                                                            -1
                                                        )).ch &&
                                                        a.line !=
                                                            e.firstLine() &&
                                                        (a = o(
                                                            a.line - 1,
                                                            se(e, a.line - 1)
                                                        ))),
                                              [s, a]
                                          );
                                      })(t, s.start, s.end)
                                    : [s.start, s.end];
                            },
                            repeatLastCharacterSearch: function(e, t, r) {
                                var n = B.lastCharacterSearch,
                                    o = r.repeat,
                                    i = r.forward === n.forward,
                                    a = (n.increment ? 1 : 0) * (i ? -1 : 1);
                                e.moveH(-a, 'char'), (r.inclusive = !!i);
                                var s = Se(e, o, i, n.selectedCharacter);
                                return s
                                    ? ((s.ch += a), s)
                                    : (e.moveH(a, 'char'), t);
                            },
                        };
                    function Q(e, t) {
                        for (var r = [], n = 0; n < t; n++) r.push(e);
                        return r;
                    }
                    var q = {
                        change: function(t, r, n) {
                            var i,
                                a,
                                s = t.state.vim,
                                l = n[0].anchor,
                                c = n[0].head;
                            if (s.visualMode)
                                if (r.fullLine)
                                    (c.ch = Number.MAX_VALUE),
                                        c.line--,
                                        t.setSelection(l, c),
                                        (a = t.getSelection()),
                                        t.replaceSelection(''),
                                        (i = l);
                                else {
                                    a = t.getSelection();
                                    var u = Q('', n.length);
                                    t.replaceSelections(u),
                                        (i = oe(n[0].head, n[0].anchor));
                                }
                            else {
                                a = t.getRange(l, c);
                                var h = s.lastEditInputState || {};
                                if ('moveByWords' == h.motion && !A(a)) {
                                    var p = /\s+$/.exec(a);
                                    p &&
                                        h.motionArgs &&
                                        h.motionArgs.forward &&
                                        ((c = Z(c, 0, -p[0].length)),
                                        (a = a.slice(0, -p[0].length)));
                                }
                                var f = new o(l.line - 1, Number.MAX_VALUE),
                                    d = t.firstLine() == t.lastLine();
                                c.line > t.lastLine() && r.linewise && !d
                                    ? t.replaceRange('', f, c)
                                    : t.replaceRange('', l, c),
                                    r.linewise &&
                                        (d ||
                                            (t.setCursor(f),
                                            e.commands.newlineAndIndent(t)),
                                        (l.ch = Number.MAX_VALUE)),
                                    (i = l);
                            }
                            B.registerController.pushText(
                                r.registerName,
                                'change',
                                a,
                                r.linewise,
                                n.length > 1
                            ),
                                z.enterInsertMode(t, { head: i }, t.state.vim);
                        },
                        delete: function(e, t, r) {
                            var n,
                                i,
                                a = e.state.vim;
                            if (a.visualBlock) {
                                i = e.getSelection();
                                var s = Q('', r.length);
                                e.replaceSelections(s), (n = r[0].anchor);
                            } else {
                                var l = r[0].anchor,
                                    c = r[0].head;
                                t.linewise &&
                                    c.line != e.firstLine() &&
                                    l.line == e.lastLine() &&
                                    l.line == c.line - 1 &&
                                    (l.line == e.firstLine()
                                        ? (l.ch = 0)
                                        : (l = o(
                                              l.line - 1,
                                              se(e, l.line - 1)
                                          ))),
                                    (i = e.getRange(l, c)),
                                    e.replaceRange('', l, c),
                                    (n = l),
                                    t.linewise &&
                                        (n = J.moveToFirstNonWhiteSpaceCharacter(
                                            e,
                                            l
                                        ));
                            }
                            return (
                                B.registerController.pushText(
                                    t.registerName,
                                    'delete',
                                    i,
                                    t.linewise,
                                    a.visualBlock
                                ),
                                Y(e, n)
                            );
                        },
                        indent: function(e, t, r) {
                            var n = e.state.vim,
                                o = r[0].anchor.line,
                                i = n.visualBlock
                                    ? r[r.length - 1].anchor.line
                                    : r[0].head.line,
                                a = n.visualMode ? t.repeat : 1;
                            t.linewise && i--;
                            for (var s = o; s <= i; s++)
                                for (var l = 0; l < a; l++)
                                    e.indentLine(s, t.indentRight);
                            return J.moveToFirstNonWhiteSpaceCharacter(
                                e,
                                r[0].anchor
                            );
                        },
                        indentAuto: function(e, t, r) {
                            return (
                                e.execCommand('indentAuto'),
                                J.moveToFirstNonWhiteSpaceCharacter(
                                    e,
                                    r[0].anchor
                                )
                            );
                        },
                        changeCase: function(e, t, r, n, o) {
                            for (
                                var i = e.getSelections(),
                                    a = [],
                                    s = t.toLower,
                                    l = 0;
                                l < i.length;
                                l++
                            ) {
                                var c = i[l],
                                    u = '';
                                if (!0 === s) u = c.toLowerCase();
                                else if (!1 === s) u = c.toUpperCase();
                                else
                                    for (var h = 0; h < c.length; h++) {
                                        var p = c.charAt(h);
                                        u += S(p)
                                            ? p.toLowerCase()
                                            : p.toUpperCase();
                                    }
                                a.push(u);
                            }
                            return (
                                e.replaceSelections(a),
                                t.shouldMoveCursor
                                    ? o
                                    : !e.state.vim.visualMode &&
                                      t.linewise &&
                                      r[0].anchor.line + 1 == r[0].head.line
                                    ? J.moveToFirstNonWhiteSpaceCharacter(e, n)
                                    : t.linewise
                                    ? n
                                    : oe(r[0].anchor, r[0].head)
                            );
                        },
                        yank: function(e, t, r, n) {
                            var o = e.state.vim,
                                i = e.getSelection(),
                                a = o.visualMode
                                    ? oe(
                                          o.sel.anchor,
                                          o.sel.head,
                                          r[0].head,
                                          r[0].anchor
                                      )
                                    : n;
                            return (
                                B.registerController.pushText(
                                    t.registerName,
                                    'yank',
                                    i,
                                    t.linewise,
                                    o.visualBlock
                                ),
                                a
                            );
                        },
                    };
                    var z = {
                        jumpListWalk: function(e, t, r) {
                            if (!r.visualMode) {
                                var n = t.repeat,
                                    o = t.forward,
                                    i = B.jumpList.move(e, o ? n : -n),
                                    a = i ? i.find() : void 0;
                                (a = a || e.getCursor()), e.setCursor(a);
                            }
                        },
                        scroll: function(e, t, r) {
                            if (!r.visualMode) {
                                var n = t.repeat || 1,
                                    o = e.defaultTextHeight(),
                                    i = e.getScrollInfo().top,
                                    a = o * n,
                                    s = t.forward ? i + a : i - a,
                                    l = te(e.getCursor()),
                                    c = e.charCoords(l, 'local');
                                if (t.forward)
                                    s > c.top
                                        ? ((l.line += (s - c.top) / o),
                                          (l.line = Math.ceil(l.line)),
                                          e.setCursor(l),
                                          (c = e.charCoords(l, 'local')),
                                          e.scrollTo(null, c.top))
                                        : e.scrollTo(null, s);
                                else {
                                    var u = s + e.getScrollInfo().clientHeight;
                                    u < c.bottom
                                        ? ((l.line -= (c.bottom - u) / o),
                                          (l.line = Math.floor(l.line)),
                                          e.setCursor(l),
                                          (c = e.charCoords(l, 'local')),
                                          e.scrollTo(
                                              null,
                                              c.bottom -
                                                  e.getScrollInfo().clientHeight
                                          ))
                                        : e.scrollTo(null, s);
                                }
                            }
                        },
                        scrollToCursor: function(e, t) {
                            var r = e.getCursor().line,
                                n = e.charCoords(o(r, 0), 'local'),
                                i = e.getScrollInfo().clientHeight,
                                a = n.top,
                                s = n.bottom - a;
                            switch (t.position) {
                                case 'center':
                                    a = a - i / 2 + s;
                                    break;
                                case 'bottom':
                                    a = a - i + s;
                            }
                            e.scrollTo(null, a);
                        },
                        replayMacro: function(e, t, r) {
                            var n = t.selectedCharacter,
                                o = t.repeat,
                                i = B.macroModeState;
                            for (
                                '@' == n
                                    ? (n = i.latestRegister)
                                    : (i.latestRegister = n);
                                o--;

                            )
                                Ze(e, r, i, n);
                        },
                        enterMacroRecordMode: function(e, t) {
                            var r = B.macroModeState,
                                n = t.selectedCharacter;
                            B.registerController.isValidRegister(n) &&
                                r.enterMacroRecordMode(e, n);
                        },
                        toggleOverwrite: function(t) {
                            t.state.overwrite
                                ? (t.toggleOverwrite(!1),
                                  t.setOption('keyMap', 'vim-insert'),
                                  e.signal(t, 'vim-mode-change', {
                                      mode: 'insert',
                                  }))
                                : (t.toggleOverwrite(!0),
                                  t.setOption('keyMap', 'vim-replace'),
                                  e.signal(t, 'vim-mode-change', {
                                      mode: 'replace',
                                  }));
                        },
                        enterInsertMode: function(t, r, n) {
                            if (!t.getOption('readOnly')) {
                                (n.insertMode = !0),
                                    (n.insertModeRepeat = (r && r.repeat) || 1);
                                var i = r ? r.insertAt : null,
                                    a = n.sel,
                                    s = r.head || t.getCursor('head'),
                                    l = t.listSelections().length;
                                if ('eol' == i) s = o(s.line, se(t, s.line));
                                else if ('bol' == i) s = o(s.line, 0);
                                else if ('charAfter' == i) s = Z(s, 0, 1);
                                else if ('firstNonBlank' == i)
                                    s = J.moveToFirstNonWhiteSpaceCharacter(
                                        t,
                                        s
                                    );
                                else if ('startOfSelectedArea' == i) {
                                    if (!n.visualMode) return;
                                    n.visualBlock
                                        ? ((s = o(
                                              Math.min(
                                                  a.head.line,
                                                  a.anchor.line
                                              ),
                                              Math.min(a.head.ch, a.anchor.ch)
                                          )),
                                          (l =
                                              Math.abs(
                                                  a.head.line - a.anchor.line
                                              ) + 1))
                                        : (s =
                                              a.head.line < a.anchor.line
                                                  ? a.head
                                                  : o(a.anchor.line, 0));
                                } else if ('endOfSelectedArea' == i) {
                                    if (!n.visualMode) return;
                                    n.visualBlock
                                        ? ((s = o(
                                              Math.min(
                                                  a.head.line,
                                                  a.anchor.line
                                              ),
                                              Math.max(
                                                  a.head.ch + 1,
                                                  a.anchor.ch
                                              )
                                          )),
                                          (l =
                                              Math.abs(
                                                  a.head.line - a.anchor.line
                                              ) + 1))
                                        : (s =
                                              a.head.line >= a.anchor.line
                                                  ? Z(a.head, 0, 1)
                                                  : o(a.anchor.line, 0));
                                } else if ('inplace' == i) {
                                    if (n.visualMode) return;
                                } else 'lastEdit' == i && (s = Je(t) || s);
                                t.setOption('disableInput', !1),
                                    r && r.replace
                                        ? (t.toggleOverwrite(!0),
                                          t.setOption('keyMap', 'vim-replace'),
                                          e.signal(t, 'vim-mode-change', {
                                              mode: 'replace',
                                          }))
                                        : (t.toggleOverwrite(!1),
                                          t.setOption('keyMap', 'vim-insert'),
                                          e.signal(t, 'vim-mode-change', {
                                              mode: 'insert',
                                          })),
                                    B.macroModeState.isPlaying ||
                                        (t.on('change', Ge),
                                        e.on(t.getInputField(), 'keydown', ot)),
                                    n.visualMode && me(t),
                                    he(t, s, l);
                            }
                        },
                        toggleVisualMode: function(t, r, n) {
                            var i,
                                a = r.repeat,
                                s = t.getCursor();
                            n.visualMode
                                ? n.visualLine ^ r.linewise ||
                                  n.visualBlock ^ r.blockwise
                                    ? ((n.visualLine = !!r.linewise),
                                      (n.visualBlock = !!r.blockwise),
                                      e.signal(t, 'vim-mode-change', {
                                          mode: 'visual',
                                          subMode: n.visualLine
                                              ? 'linewise'
                                              : n.visualBlock
                                              ? 'blockwise'
                                              : '',
                                      }),
                                      fe(t))
                                    : me(t)
                                : ((n.visualMode = !0),
                                  (n.visualLine = !!r.linewise),
                                  (n.visualBlock = !!r.blockwise),
                                  (i = Y(t, o(s.line, s.ch + a - 1))),
                                  (n.sel = { anchor: s, head: i }),
                                  e.signal(t, 'vim-mode-change', {
                                      mode: 'visual',
                                      subMode: n.visualLine
                                          ? 'linewise'
                                          : n.visualBlock
                                          ? 'blockwise'
                                          : '',
                                  }),
                                  fe(t),
                                  Ae(t, n, '<', oe(s, i)),
                                  Ae(t, n, '>', ie(s, i)));
                        },
                        reselectLastSelection: function(t, r, n) {
                            var o = n.lastSelection;
                            if ((n.visualMode && pe(t, n), o)) {
                                var i = o.anchorMark.find(),
                                    a = o.headMark.find();
                                if (!i || !a) return;
                                (n.sel = { anchor: i, head: a }),
                                    (n.visualMode = !0),
                                    (n.visualLine = o.visualLine),
                                    (n.visualBlock = o.visualBlock),
                                    fe(t),
                                    Ae(t, n, '<', oe(i, a)),
                                    Ae(t, n, '>', ie(i, a)),
                                    e.signal(t, 'vim-mode-change', {
                                        mode: 'visual',
                                        subMode: n.visualLine
                                            ? 'linewise'
                                            : n.visualBlock
                                            ? 'blockwise'
                                            : '',
                                    });
                            }
                        },
                        joinLines: function(e, t, r) {
                            var n, i;
                            if (r.visualMode) {
                                if (
                                    ((n = e.getCursor('anchor')),
                                    ne((i = e.getCursor('head')), n))
                                ) {
                                    var a = i;
                                    (i = n), (n = a);
                                }
                                i.ch = se(e, i.line) - 1;
                            } else {
                                var s = Math.max(t.repeat, 2);
                                (n = e.getCursor()),
                                    (i = Y(e, o(n.line + s - 1, 1 / 0)));
                            }
                            for (var l = 0, c = n.line; c < i.line; c++) {
                                (l = se(e, n.line)),
                                    (a = o(n.line + 1, se(e, n.line + 1)));
                                var u = e.getRange(n, a);
                                (u = t.keepSpaces
                                    ? u.replace(/\n\r?/g, '')
                                    : u.replace(/\n\s*/g, ' ')),
                                    e.replaceRange(u, n, a);
                            }
                            var h = o(n.line, l);
                            r.visualMode && me(e, !1), e.setCursor(h);
                        },
                        newLineAndEnterInsertMode: function(t, r, n) {
                            n.insertMode = !0;
                            var i = te(t.getCursor());
                            i.line !== t.firstLine() || r.after
                                ? ((i.line = r.after ? i.line : i.line - 1),
                                  (i.ch = se(t, i.line)),
                                  t.setCursor(i),
                                  (
                                      e.commands
                                          .newlineAndIndentContinueComment ||
                                      e.commands.newlineAndIndent
                                  )(t))
                                : (t.replaceRange('\n', o(t.firstLine(), 0)),
                                  t.setCursor(t.firstLine(), 0)),
                                this.enterInsertMode(
                                    t,
                                    { repeat: r.repeat },
                                    n
                                );
                        },
                        paste: function(e, t, r) {
                            var n = te(e.getCursor()),
                                i = B.registerController.getRegister(
                                    t.registerName
                                );
                            if ((f = i.toString())) {
                                if (t.matchIndent) {
                                    var a = e.getOption('tabSize'),
                                        s = function(e) {
                                            var t = e.split('\t').length - 1,
                                                r = e.split(' ').length - 1;
                                            return t * a + 1 * r;
                                        },
                                        l = e.getLine(e.getCursor().line),
                                        c = s(l.match(/^\s*/)[0]),
                                        u = f.replace(/\n$/, ''),
                                        h = f !== u,
                                        p = s(f.match(/^\s*/)[0]),
                                        f = u.replace(/^\s*/gm, function(t) {
                                            var r = c + (s(t) - p);
                                            if (r < 0) return '';
                                            if (e.getOption('indentWithTabs')) {
                                                var n = Math.floor(r / a);
                                                return Array(n + 1).join('\t');
                                            }
                                            return Array(r + 1).join(' ');
                                        });
                                    f += h ? '\n' : '';
                                }
                                t.repeat > 1 &&
                                    (f = Array(t.repeat + 1).join(f));
                                var d,
                                    m,
                                    g = i.linewise,
                                    v = i.blockwise;
                                if (v) {
                                    (f = f.split('\n')), g && f.pop();
                                    for (var y = 0; y < f.length; y++)
                                        f[y] = '' == f[y] ? ' ' : f[y];
                                    (n.ch += t.after ? 1 : 0),
                                        (n.ch = Math.min(se(e, n.line), n.ch));
                                } else
                                    g
                                        ? r.visualMode
                                            ? (f = r.visualLine
                                                  ? f.slice(0, -1)
                                                  : '\n' +
                                                    f.slice(0, f.length - 1) +
                                                    '\n')
                                            : t.after
                                            ? ((f =
                                                  '\n' +
                                                  f.slice(0, f.length - 1)),
                                              (n.ch = se(e, n.line)))
                                            : (n.ch = 0)
                                        : (n.ch += t.after ? 1 : 0);
                                if (r.visualMode) {
                                    var k;
                                    r.lastPastedText = f;
                                    var C = (function(e, t) {
                                            var r = t.lastSelection,
                                                n = function() {
                                                    var t = e.listSelections(),
                                                        r = t[0],
                                                        n = t[t.length - 1];
                                                    return [
                                                        ne(r.anchor, r.head)
                                                            ? r.anchor
                                                            : r.head,
                                                        ne(n.anchor, n.head)
                                                            ? n.head
                                                            : n.anchor,
                                                    ];
                                                },
                                                i = function() {
                                                    var t = e.getCursor(),
                                                        n = e.getCursor(),
                                                        i = r.visualBlock;
                                                    if (i) {
                                                        var a = i.width,
                                                            s = i.height;
                                                        n = o(
                                                            t.line + s,
                                                            t.ch + a
                                                        );
                                                        for (
                                                            var l = [],
                                                                c = t.line;
                                                            c < n.line;
                                                            c++
                                                        ) {
                                                            var u = {
                                                                anchor: o(
                                                                    c,
                                                                    t.ch
                                                                ),
                                                                head: o(
                                                                    c,
                                                                    n.ch
                                                                ),
                                                            };
                                                            l.push(u);
                                                        }
                                                        e.setSelections(l);
                                                    } else {
                                                        var h = r.anchorMark.find(),
                                                            p = r.headMark.find(),
                                                            f = p.line - h.line,
                                                            d = p.ch - h.ch;
                                                        (n = {
                                                            line: n.line + f,
                                                            ch: f
                                                                ? n.ch
                                                                : d + n.ch,
                                                        }),
                                                            r.visualLine &&
                                                                ((t = o(
                                                                    t.line,
                                                                    0
                                                                )),
                                                                (n = o(
                                                                    n.line,
                                                                    se(
                                                                        e,
                                                                        n.line
                                                                    )
                                                                ))),
                                                            e.setSelection(
                                                                t,
                                                                n
                                                            );
                                                    }
                                                    return [t, n];
                                                };
                                            return t.visualMode ? n() : i();
                                        })(e, r),
                                        w = C[0],
                                        x = C[1],
                                        M = e.getSelection(),
                                        S = e.listSelections(),
                                        A = new Array(S.length)
                                            .join('1')
                                            .split('1');
                                    r.lastSelection &&
                                        (k = r.lastSelection.headMark.find()),
                                        B.registerController.unnamedRegister.setText(
                                            M
                                        ),
                                        v
                                            ? (e.replaceSelections(A),
                                              (x = o(
                                                  w.line + f.length - 1,
                                                  w.ch
                                              )),
                                              e.setCursor(w),
                                              ue(e, x),
                                              e.replaceSelections(f),
                                              (d = w))
                                            : r.visualBlock
                                            ? (e.replaceSelections(A),
                                              e.setCursor(w),
                                              e.replaceRange(f, w, w),
                                              (d = w))
                                            : (e.replaceRange(f, w, x),
                                              (d = e.posFromIndex(
                                                  e.indexFromPos(w) +
                                                      f.length -
                                                      1
                                              ))),
                                        k &&
                                            (r.lastSelection.headMark = e.setBookmark(
                                                k
                                            )),
                                        g && (d.ch = 0);
                                } else if (v) {
                                    for (
                                        e.setCursor(n), y = 0;
                                        y < f.length;
                                        y++
                                    ) {
                                        var b = n.line + y;
                                        b > e.lastLine() &&
                                            e.replaceRange('\n', o(b, 0)),
                                            se(e, b) < n.ch && ce(e, b, n.ch);
                                    }
                                    e.setCursor(n),
                                        ue(e, o(n.line + f.length - 1, n.ch)),
                                        e.replaceSelections(f),
                                        (d = n);
                                } else
                                    e.replaceRange(f, n),
                                        g && t.after
                                            ? (d = o(
                                                  n.line + 1,
                                                  ge(e.getLine(n.line + 1))
                                              ))
                                            : g && !t.after
                                            ? (d = o(
                                                  n.line,
                                                  ge(e.getLine(n.line))
                                              ))
                                            : !g && t.after
                                            ? ((m = e.indexFromPos(n)),
                                              (d = e.posFromIndex(
                                                  m + f.length - 1
                                              )))
                                            : ((m = e.indexFromPos(n)),
                                              (d = e.posFromIndex(
                                                  m + f.length
                                              )));
                                r.visualMode && me(e, !1), e.setCursor(d);
                            }
                        },
                        undo: function(t, r) {
                            t.operation(function() {
                                ee(t, e.commands.undo, r.repeat)(),
                                    t.setCursor(t.getCursor('anchor'));
                            });
                        },
                        redo: function(t, r) {
                            ee(t, e.commands.redo, r.repeat)();
                        },
                        setRegister: function(e, t, r) {
                            r.inputState.registerName = t.selectedCharacter;
                        },
                        setMark: function(e, t, r) {
                            Ae(e, r, t.selectedCharacter, e.getCursor());
                        },
                        replace: function(t, r, n) {
                            var i,
                                a,
                                s = r.selectedCharacter,
                                l = t.getCursor(),
                                c = t.listSelections();
                            if (n.visualMode)
                                (l = t.getCursor('start')),
                                    (a = t.getCursor('end'));
                            else {
                                var u = t.getLine(l.line);
                                (i = l.ch + r.repeat) > u.length &&
                                    (i = u.length),
                                    (a = o(l.line, i));
                            }
                            if ('\n' == s)
                                n.visualMode || t.replaceRange('', l, a),
                                    (
                                        e.commands
                                            .newlineAndIndentContinueComment ||
                                        e.commands.newlineAndIndent
                                    )(t);
                            else {
                                var h = t.getRange(l, a);
                                if (
                                    ((h = h.replace(/[^\n]/g, s)),
                                    n.visualBlock)
                                ) {
                                    var p = new Array(
                                        t.getOption('tabSize') + 1
                                    ).join(' ');
                                    (h = (h = t.getSelection())
                                        .replace(/\t/g, p)
                                        .replace(/[^\n]/g, s)
                                        .split('\n')),
                                        t.replaceSelections(h);
                                } else t.replaceRange(h, l, a);
                                n.visualMode
                                    ? ((l = ne(c[0].anchor, c[0].head)
                                          ? c[0].anchor
                                          : c[0].head),
                                      t.setCursor(l),
                                      me(t, !1))
                                    : t.setCursor(Z(a, 0, -1));
                            }
                        },
                        incrementNumberToken: function(e, t) {
                            for (
                                var r,
                                    n,
                                    i,
                                    a,
                                    s = e.getCursor(),
                                    l = e.getLine(s.line),
                                    c = /(-?)(?:(0x)([\da-f]+)|(0b|0|)(\d+))/gi;
                                null !== (r = c.exec(l)) &&
                                ((i = (n = r.index) + r[0].length),
                                !(s.ch < i));

                            );
                            if ((t.backtrack || !(i <= s.ch)) && r) {
                                var u = r[2] || r[4],
                                    h = r[3] || r[5],
                                    p = t.increase ? 1 : -1,
                                    f = { '0b': 2, 0: 8, '': 10, '0x': 16 }[
                                        u.toLowerCase()
                                    ];
                                a = (
                                    parseInt(r[1] + h, f) +
                                    p * t.repeat
                                ).toString(f);
                                var d = u
                                    ? new Array(
                                          h.length - a.length + 1 + r[1].length
                                      ).join('0')
                                    : '';
                                a =
                                    '-' === a.charAt(0)
                                        ? '-' + u + d + a.substr(1)
                                        : u + d + a;
                                var m = o(s.line, n),
                                    g = o(s.line, i);
                                e.replaceRange(a, m, g),
                                    e.setCursor(o(s.line, n + a.length - 1));
                            }
                        },
                        repeatLastEdit: function(e, t, r) {
                            if (r.lastEditInputState) {
                                var n = t.repeat;
                                n && t.repeatIsExplicit
                                    ? (r.lastEditInputState.repeatOverride = n)
                                    : (n =
                                          r.lastEditInputState.repeatOverride ||
                                          n),
                                    it(e, r, n, !1);
                            }
                        },
                        indent: function(e, t) {
                            e.indentLine(e.getCursor().line, t.indentRight);
                        },
                        exitInsertMode: Ye,
                    };
                    function Y(e, t) {
                        var r = e.state.vim,
                            n = r.insertMode || r.visualMode,
                            i = Math.min(
                                Math.max(e.firstLine(), t.line),
                                e.lastLine()
                            ),
                            a = se(e, i) - 1 + !!n,
                            s = Math.min(Math.max(0, t.ch), a);
                        return o(i, s);
                    }
                    function X(e) {
                        var t = {};
                        for (var r in e) e.hasOwnProperty(r) && (t[r] = e[r]);
                        return t;
                    }
                    function Z(e, t, r) {
                        return (
                            'object' == typeof t && ((r = t.ch), (t = t.line)),
                            o(e.line + t, e.ch + r)
                        );
                    }
                    function G(e, t) {
                        if ('<character>' == t.slice(-11)) {
                            var r = t.length - 11,
                                n = e.slice(0, r),
                                o = t.slice(0, r);
                            return n == o && e.length > r
                                ? 'full'
                                : 0 == o.indexOf(n) && 'partial';
                        }
                        return e == t ? 'full' : 0 == t.indexOf(e) && 'partial';
                    }
                    function ee(e, t, r) {
                        return function() {
                            for (var n = 0; n < r; n++) t(e);
                        };
                    }
                    function te(e) {
                        return o(e.line, e.ch);
                    }
                    function re(e, t) {
                        return e.ch == t.ch && e.line == t.line;
                    }
                    function ne(e, t) {
                        return (
                            e.line < t.line || (e.line == t.line && e.ch < t.ch)
                        );
                    }
                    function oe(e, t) {
                        return (
                            arguments.length > 2 &&
                                (t = oe.apply(
                                    void 0,
                                    Array.prototype.slice.call(arguments, 1)
                                )),
                            ne(e, t) ? e : t
                        );
                    }
                    function ie(e, t) {
                        return (
                            arguments.length > 2 &&
                                (t = ie.apply(
                                    void 0,
                                    Array.prototype.slice.call(arguments, 1)
                                )),
                            ne(e, t) ? t : e
                        );
                    }
                    function ae(e, t, r) {
                        var n = ne(e, t),
                            o = ne(t, r);
                        return n && o;
                    }
                    function se(e, t) {
                        return e.getLine(t).length;
                    }
                    function le(e) {
                        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '');
                    }
                    function ce(e, t, r) {
                        var n = se(e, t),
                            i = new Array(r - n + 1).join(' ');
                        e.setCursor(o(t, n)), e.replaceRange(i, e.getCursor());
                    }
                    function ue(e, t) {
                        var r = [],
                            n = e.listSelections(),
                            i = te(e.clipPos(t)),
                            a = !re(t, i),
                            s = (function(e, t, r) {
                                for (var n = 0; n < e.length; n++) {
                                    var o = 'head' != r && re(e[n].anchor, t),
                                        i = 'anchor' != r && re(e[n].head, t);
                                    if (o || i) return n;
                                }
                                return -1;
                            })(n, e.getCursor('head')),
                            l = re(n[s].head, n[s].anchor),
                            c = n.length - 1,
                            u = c - s > s ? c : 0,
                            h = n[u].anchor,
                            p = Math.min(h.line, i.line),
                            f = Math.max(h.line, i.line),
                            d = h.ch,
                            m = i.ch,
                            g = n[u].head.ch - d,
                            v = m - d;
                        g > 0 && v <= 0
                            ? (d++, a || m--)
                            : g < 0 && v >= 0
                            ? (d--, l || m++)
                            : g < 0 && -1 == v && (d--, m++);
                        for (var y = p; y <= f; y++) {
                            var k = { anchor: new o(y, d), head: new o(y, m) };
                            r.push(k);
                        }
                        return e.setSelections(r), (t.ch = m), (h.ch = d), h;
                    }
                    function he(e, t, r) {
                        for (var n = [], o = 0; o < r; o++) {
                            var i = Z(t, o, 0);
                            n.push({ anchor: i, head: i });
                        }
                        e.setSelections(n, 0);
                    }
                    function pe(e, t) {
                        var r = t.sel.anchor,
                            n = t.sel.head;
                        t.lastPastedText &&
                            ((n = e.posFromIndex(
                                e.indexFromPos(r) + t.lastPastedText.length
                            )),
                            (t.lastPastedText = null)),
                            (t.lastSelection = {
                                anchorMark: e.setBookmark(r),
                                headMark: e.setBookmark(n),
                                anchor: te(r),
                                head: te(n),
                                visualMode: t.visualMode,
                                visualLine: t.visualLine,
                                visualBlock: t.visualBlock,
                            });
                    }
                    function fe(e, t, r) {
                        var n = e.state.vim,
                            o = de(
                                e,
                                (t = t || n.sel),
                                (r =
                                    r || n.visualLine
                                        ? 'line'
                                        : n.visualBlock
                                        ? 'block'
                                        : 'char')
                            );
                        e.setSelections(o.ranges, o.primary), tt(e);
                    }
                    function de(e, t, r, n) {
                        var i = te(t.head),
                            a = te(t.anchor);
                        if ('char' == r) {
                            var s = n || ne(t.head, t.anchor) ? 0 : 1,
                                l = ne(t.head, t.anchor) ? 1 : 0;
                            return (
                                (i = Z(t.head, 0, s)),
                                {
                                    ranges: [
                                        {
                                            anchor: (a = Z(t.anchor, 0, l)),
                                            head: i,
                                        },
                                    ],
                                    primary: 0,
                                }
                            );
                        }
                        if ('line' == r) {
                            if (ne(t.head, t.anchor))
                                (i.ch = 0), (a.ch = se(e, a.line));
                            else {
                                a.ch = 0;
                                var c = e.lastLine();
                                i.line > c && (i.line = c),
                                    (i.ch = se(e, i.line));
                            }
                            return {
                                ranges: [{ anchor: a, head: i }],
                                primary: 0,
                            };
                        }
                        if ('block' == r) {
                            for (
                                var u = Math.min(a.line, i.line),
                                    h = Math.min(a.ch, i.ch),
                                    p = Math.max(a.line, i.line),
                                    f = Math.max(a.ch, i.ch) + 1,
                                    d = p - u + 1,
                                    m = i.line == u ? 0 : d - 1,
                                    g = [],
                                    v = 0;
                                v < d;
                                v++
                            )
                                g.push({
                                    anchor: o(u + v, h),
                                    head: o(u + v, f),
                                });
                            return { ranges: g, primary: m };
                        }
                    }
                    function me(t, r) {
                        var n = t.state.vim;
                        !1 !== r && t.setCursor(Y(t, n.sel.head)),
                            pe(t, n),
                            (n.visualMode = !1),
                            (n.visualLine = !1),
                            (n.visualBlock = !1),
                            n.insertMode ||
                                e.signal(t, 'vim-mode-change', {
                                    mode: 'normal',
                                }),
                            rt(n);
                    }
                    function ge(e) {
                        if (!e) return 0;
                        var t = e.search(/\S/);
                        return -1 == t ? e.length : t;
                    }
                    function ve(e, t, r, n, i) {
                        for (
                            var a = (function(e) {
                                    var t = e.getCursor('head');
                                    return (
                                        1 == e.getSelection().length &&
                                            (t = oe(t, e.getCursor('anchor'))),
                                        t
                                    );
                                })(e),
                                s = e.getLine(a.line),
                                l = a.ch,
                                c = i ? d[0] : m[0];
                            !c(s.charAt(l));

                        )
                            if (++l >= s.length) return null;
                        n ? (c = m[0]) : (c = d[0])(s.charAt(l)) || (c = d[1]);
                        for (var u = l, h = l; c(s.charAt(u)) && u < s.length; )
                            u++;
                        for (; c(s.charAt(h)) && h >= 0; ) h--;
                        if ((h++, t)) {
                            for (
                                var p = u;
                                /\s/.test(s.charAt(u)) && u < s.length;

                            )
                                u++;
                            if (p == u) {
                                for (
                                    var f = h;
                                    /\s/.test(s.charAt(h - 1)) && h > 0;

                                )
                                    h--;
                                h || (h = f);
                            }
                        }
                        return { start: o(a.line, h), end: o(a.line, u) };
                    }
                    function ye(e, t, r) {
                        re(t, r) || B.jumpList.add(e, t, r);
                    }
                    function ke(e, t) {
                        (B.lastCharacterSearch.increment = e),
                            (B.lastCharacterSearch.forward = t.forward),
                            (B.lastCharacterSearch.selectedCharacter =
                                t.selectedCharacter);
                    }
                    var Ce = {
                            '(': 'bracket',
                            ')': 'bracket',
                            '{': 'bracket',
                            '}': 'bracket',
                            '[': 'section',
                            ']': 'section',
                            '*': 'comment',
                            '/': 'comment',
                            m: 'method',
                            M: 'method',
                            '#': 'preprocess',
                        },
                        we = {
                            bracket: {
                                isComplete: function(e) {
                                    if (e.nextCh === e.symb) {
                                        if ((e.depth++, e.depth >= 1))
                                            return !0;
                                    } else
                                        e.nextCh === e.reverseSymb && e.depth--;
                                    return !1;
                                },
                            },
                            section: {
                                init: function(e) {
                                    (e.curMoveThrough = !0),
                                        (e.symb =
                                            (e.forward ? ']' : '[') === e.symb
                                                ? '{'
                                                : '}');
                                },
                                isComplete: function(e) {
                                    return 0 === e.index && e.nextCh === e.symb;
                                },
                            },
                            comment: {
                                isComplete: function(e) {
                                    var t =
                                        '*' === e.lastCh && '/' === e.nextCh;
                                    return (e.lastCh = e.nextCh), t;
                                },
                            },
                            method: {
                                init: function(e) {
                                    (e.symb = 'm' === e.symb ? '{' : '}'),
                                        (e.reverseSymb =
                                            '{' === e.symb ? '}' : '{');
                                },
                                isComplete: function(e) {
                                    return e.nextCh === e.symb;
                                },
                            },
                            preprocess: {
                                init: function(e) {
                                    e.index = 0;
                                },
                                isComplete: function(e) {
                                    if ('#' === e.nextCh) {
                                        var t = e.lineText.match(/^#(\w+)/)[1];
                                        if ('endif' === t) {
                                            if (e.forward && 0 === e.depth)
                                                return !0;
                                            e.depth++;
                                        } else if ('if' === t) {
                                            if (!e.forward && 0 === e.depth)
                                                return !0;
                                            e.depth--;
                                        }
                                        if ('else' === t && 0 === e.depth)
                                            return !0;
                                    }
                                    return !1;
                                },
                            },
                        };
                    function xe(e, t, r, n, o) {
                        var i = t.line,
                            a = t.ch,
                            s = e.getLine(i),
                            l = r ? 1 : -1,
                            c = n ? m : d;
                        if (o && '' == s) {
                            if (((i += l), (s = e.getLine(i)), !x(e, i)))
                                return null;
                            a = r ? 0 : s.length;
                        }
                        for (;;) {
                            if (o && '' == s)
                                return { from: 0, to: 0, line: i };
                            for (
                                var u = l > 0 ? s.length : -1, h = u, p = u;
                                a != u;

                            ) {
                                for (var f = !1, g = 0; g < c.length && !f; ++g)
                                    if (c[g](s.charAt(a))) {
                                        for (
                                            h = a;
                                            a != u && c[g](s.charAt(a));

                                        )
                                            a += l;
                                        if (
                                            ((f = h != (p = a)),
                                            h == t.ch &&
                                                i == t.line &&
                                                p == h + l)
                                        )
                                            continue;
                                        return {
                                            from: Math.min(h, p + 1),
                                            to: Math.max(h, p),
                                            line: i,
                                        };
                                    }
                                f || (a += l);
                            }
                            if (!x(e, (i += l))) return null;
                            (s = e.getLine(i)), (a = l > 0 ? 0 : s.length);
                        }
                    }
                    function Me(e, t, r, n, i) {
                        var a = o(t.line + r.repeat - 1, 1 / 0),
                            s = e.clipPos(a);
                        return (
                            s.ch--,
                            i ||
                                ((n.lastHPos = 1 / 0),
                                (n.lastHSPos = e.charCoords(s, 'div').left)),
                            a
                        );
                    }
                    function Se(e, t, r, n) {
                        for (
                            var i, a = e.getCursor(), s = a.ch, l = 0;
                            l < t;
                            l++
                        ) {
                            if (-1 == (i = be(s, e.getLine(a.line), n, r, !0)))
                                return null;
                            s = i;
                        }
                        return o(e.getCursor().line, i);
                    }
                    function Ae(e, t, r, n) {
                        L(r, C) &&
                            (t.marks[r] && t.marks[r].clear(),
                            (t.marks[r] = e.setBookmark(n)));
                    }
                    function be(e, t, r, n, o) {
                        var i;
                        return (
                            n
                                ? -1 == (i = t.indexOf(r, e + 1)) ||
                                  o ||
                                  (i -= 1)
                                : -1 == (i = t.lastIndexOf(r, e - 1)) ||
                                  o ||
                                  (i += 1),
                            i
                        );
                    }
                    function Le(e, t, r, n, i) {
                        var a,
                            s = t.line,
                            l = e.firstLine(),
                            c = e.lastLine(),
                            u = s;
                        function h(t) {
                            return !e.getLine(t);
                        }
                        function p(e, t, r) {
                            return r ? h(e) != h(e + t) : !h(e) && h(e + t);
                        }
                        if (n) {
                            for (; l <= u && u <= c && r > 0; )
                                p(u, n) && r--, (u += n);
                            return new o(u, 0);
                        }
                        var f = e.state.vim;
                        if (f.visualLine && p(s, 1, !0)) {
                            var d = f.sel.anchor;
                            p(d.line, -1, !0) &&
                                ((i && d.line == s) || (s += 1));
                        }
                        var m = h(s);
                        for (u = s; u <= c && r; u++)
                            p(u, 1, !0) && ((i && h(u) == m) || r--);
                        for (
                            a = new o(u, 0),
                                u > c && !m ? (m = !0) : (i = !1),
                                u = s;
                            u > l &&
                            ((i && h(u) != m && u != s) || !p(u, -1, !0));
                            u--
                        );
                        return { start: new o(u, 0), end: a };
                    }
                    function Te() {}
                    function Re(e) {
                        var t = e.state.vim;
                        return t.searchState_ || (t.searchState_ = new Te());
                    }
                    function Ee(e, t) {
                        var r = Oe(e, t) || [];
                        if (!r.length) return [];
                        var n = [];
                        if (0 === r[0]) {
                            for (var o = 0; o < r.length; o++)
                                'number' == typeof r[o] &&
                                    n.push(e.substring(r[o] + 1, r[o + 1]));
                            return n;
                        }
                    }
                    function Oe(e, t) {
                        t || (t = '/');
                        for (var r = !1, n = [], o = 0; o < e.length; o++) {
                            var i = e.charAt(o);
                            r || i != t || n.push(o), (r = !r && '\\' == i);
                        }
                        return n;
                    }
                    R('pcre', !0, 'boolean'),
                        (Te.prototype = {
                            getQuery: function() {
                                return B.query;
                            },
                            setQuery: function(e) {
                                B.query = e;
                            },
                            getOverlay: function() {
                                return this.searchOverlay;
                            },
                            setOverlay: function(e) {
                                this.searchOverlay = e;
                            },
                            isReversed: function() {
                                return B.isReversed;
                            },
                            setReversed: function(e) {
                                B.isReversed = e;
                            },
                            getScrollbarAnnotate: function() {
                                return this.annotate;
                            },
                            setScrollbarAnnotate: function(e) {
                                this.annotate = e;
                            },
                        });
                    var Be = { '\\n': '\n', '\\r': '\r', '\\t': '\t' };
                    var Ie = {
                        '\\/': '/',
                        '\\\\': '\\',
                        '\\n': '\n',
                        '\\r': '\r',
                        '\\t': '\t',
                        '\\&': '&',
                    };
                    function Ne(e, t, r) {
                        if (
                            (B.registerController.getRegister('/').setText(e),
                            e instanceof RegExp)
                        )
                            return e;
                        var n,
                            o,
                            i = Oe(e, '/');
                        return (
                            i.length
                                ? ((n = e.substring(0, i[0])),
                                  (o = -1 != e.substring(i[0]).indexOf('i')))
                                : (n = e),
                            n
                                ? (O('pcre') ||
                                      (n = (function(e) {
                                          for (
                                              var t = !1, r = [], n = -1;
                                              n < e.length;
                                              n++
                                          ) {
                                              var o = e.charAt(n) || '',
                                                  i = e.charAt(n + 1) || '',
                                                  a =
                                                      i &&
                                                      -1 != '|(){'.indexOf(i);
                                              t
                                                  ? (('\\' === o && a) ||
                                                        r.push(o),
                                                    (t = !1))
                                                  : '\\' === o
                                                  ? ((t = !0),
                                                    i &&
                                                        -1 != '}'.indexOf(i) &&
                                                        (a = !0),
                                                    (a && '\\' !== i) ||
                                                        r.push(o))
                                                  : (r.push(o),
                                                    a &&
                                                        '\\' !== i &&
                                                        r.push('\\'));
                                          }
                                          return r.join('');
                                      })(n)),
                                  r && (t = /^[^A-Z]*$/.test(n)),
                                  new RegExp(n, t || o ? 'i' : void 0))
                                : null
                        );
                    }
                    function Ke(e) {
                        'string' == typeof e && (e = document.createElement(e));
                        for (var t, r = 1; r < arguments.length; r++)
                            if ((t = arguments[r]))
                                if (
                                    ('object' != typeof t &&
                                        (t = document.createTextNode(t)),
                                    t.nodeType)
                                )
                                    e.appendChild(t);
                                else
                                    for (var n in t)
                                        Object.prototype.hasOwnProperty.call(
                                            t,
                                            n
                                        ) &&
                                            ('$' === n[0]
                                                ? (e.style[n.slice(1)] = t[n])
                                                : e.setAttribute(n, t[n]));
                        return e;
                    }
                    function Pe(e, t) {
                        var r = Ke('pre', { $color: 'red' }, t);
                        e.openNotification
                            ? e.openNotification(r, {
                                  bottom: !0,
                                  duration: 5e3,
                              })
                            : alert(r.innerText);
                    }
                    function _e(e, t) {
                        var r,
                            n,
                            o = (t.prefix || '') + ' ' + (t.desc || ''),
                            i =
                                ((r = t.prefix),
                                (n = t.desc),
                                Ke(
                                    document.createDocumentFragment(),
                                    Ke(
                                        'span',
                                        {
                                            $fontFamily: 'monospace',
                                            $whiteSpace: 'pre',
                                        },
                                        r,
                                        Ke('input', {
                                            type: 'text',
                                            autocorrect: 'off',
                                            autocapitalize: 'off',
                                            spellcheck: 'false',
                                        })
                                    ),
                                    n && Ke('span', { $color: '#888' }, n)
                                ));
                        e.openDialog
                            ? e.openDialog(i, t.onClose, {
                                  onKeyDown: t.onKeyDown,
                                  onKeyUp: t.onKeyUp,
                                  bottom: !0,
                                  selectValueOnOpen: !1,
                                  value: t.value,
                              })
                            : t.onClose(prompt(o, ''));
                    }
                    function je(e, t, r, n) {
                        if (t) {
                            var o = Re(e),
                                i = Ne(t, !!r, !!n);
                            if (i)
                                return (
                                    Fe(e, i),
                                    (function(e, t) {
                                        if (
                                            e instanceof RegExp &&
                                            t instanceof RegExp
                                        ) {
                                            for (
                                                var r = [
                                                        'global',
                                                        'multiline',
                                                        'ignoreCase',
                                                        'source',
                                                    ],
                                                    n = 0;
                                                n < r.length;
                                                n++
                                            ) {
                                                var o = r[n];
                                                if (e[o] !== t[o]) return !1;
                                            }
                                            return !0;
                                        }
                                        return !1;
                                    })(i, o.getQuery()) || o.setQuery(i),
                                    i
                                );
                        }
                    }
                    var He = 0;
                    function Fe(e, t) {
                        clearTimeout(He),
                            (He = setTimeout(function() {
                                var r = Re(e),
                                    n = r.getOverlay();
                                (n && t == n.query) ||
                                    (n && e.removeOverlay(n),
                                    (n = (function(e) {
                                        if ('^' == e.source.charAt(0))
                                            var t = !0;
                                        return {
                                            token: function(r) {
                                                if (!t || r.sol()) {
                                                    var n = r.match(e, !1);
                                                    if (n)
                                                        return 0 == n[0].length
                                                            ? (r.next(),
                                                              'searching')
                                                            : r.sol() ||
                                                              (r.backUp(1),
                                                              e.exec(
                                                                  r.next() +
                                                                      n[0]
                                                              ))
                                                            ? (r.match(e),
                                                              'searching')
                                                            : (r.next(), null);
                                                    for (
                                                        ;
                                                        !r.eol() &&
                                                        (r.next(),
                                                        !r.match(e, !1));

                                                    );
                                                } else r.skipToEnd();
                                            },
                                            query: e,
                                        };
                                    })(t)),
                                    e.addOverlay(n),
                                    e.showMatchesOnScrollbar &&
                                        (r.getScrollbarAnnotate() &&
                                            r.getScrollbarAnnotate().clear(),
                                        r.setScrollbarAnnotate(
                                            e.showMatchesOnScrollbar(t)
                                        )),
                                    r.setOverlay(n));
                            }, 50));
                    }
                    function We(e, t, r, n) {
                        return (
                            void 0 === n && (n = 1),
                            e.operation(function() {
                                for (
                                    var i = e.getCursor(),
                                        a = e.getSearchCursor(r, i),
                                        s = 0;
                                    s < n;
                                    s++
                                ) {
                                    var l = a.find(t);
                                    if (
                                        (0 == s &&
                                            l &&
                                            re(a.from(), i) &&
                                            (l = a.find(t)),
                                        !l &&
                                            !(a = e.getSearchCursor(
                                                r,
                                                t
                                                    ? o(e.lastLine())
                                                    : o(e.firstLine(), 0)
                                            )).find(t))
                                    )
                                        return;
                                }
                                return a.from();
                            })
                        );
                    }
                    function De(e) {
                        var t = Re(e);
                        e.removeOverlay(Re(e).getOverlay()),
                            t.setOverlay(null),
                            t.getScrollbarAnnotate() &&
                                (t.getScrollbarAnnotate().clear(),
                                t.setScrollbarAnnotate(null));
                    }
                    function Ve(e, t, r) {
                        return (
                            'number' != typeof e && (e = e.line),
                            t instanceof Array
                                ? L(e, t)
                                : 'number' == typeof r
                                ? e >= t && e <= r
                                : e == t
                        );
                    }
                    function Ue(e) {
                        var t = e.getScrollInfo(),
                            r = e.coordsChar(
                                { left: 0, top: 6 + t.top },
                                'local'
                            ),
                            n = t.clientHeight - 10 + t.top,
                            o = e.coordsChar({ left: 0, top: n }, 'local');
                        return { top: r.line, bottom: o.line };
                    }
                    function $e(e, t, r) {
                        if ("'" == r || '`' == r)
                            return B.jumpList.find(e, -1) || o(0, 0);
                        if ('.' == r) return Je(e);
                        var n = t.marks[r];
                        return n && n.find();
                    }
                    function Je(e) {
                        for (var t = e.doc.history.done, r = t.length; r--; )
                            if (t[r].changes) return te(t[r].changes[0].to);
                    }
                    var Qe = function() {
                        this.buildCommandMap_();
                    };
                    Qe.prototype = {
                        processCommand: function(e, t, r) {
                            var n = this;
                            e.operation(function() {
                                (e.curOp.isVimOp = !0),
                                    n._processCommand(e, t, r);
                            });
                        },
                        _processCommand: function(t, r, n) {
                            var o = t.state.vim,
                                i = B.registerController.getRegister(':'),
                                a = i.toString();
                            o.visualMode && me(t);
                            var s = new e.StringStream(r);
                            i.setText(r);
                            var l,
                                c,
                                u = n || {};
                            u.input = r;
                            try {
                                this.parseInput_(t, s, u);
                            } catch (e) {
                                throw (Pe(t, e.toString()), e);
                            }
                            if (u.commandName) {
                                if ((l = this.matchCommand_(u.commandName))) {
                                    if (
                                        ((c = l.name),
                                        l.excludeFromCommandHistory &&
                                            i.setText(a),
                                        this.parseCommandArgs_(s, u, l),
                                        'exToKey' == l.type)
                                    ) {
                                        for (
                                            var h = 0;
                                            h < l.toKeys.length;
                                            h++
                                        )
                                            e.Vim.handleKey(
                                                t,
                                                l.toKeys[h],
                                                'mapping'
                                            );
                                        return;
                                    }
                                    if ('exToEx' == l.type)
                                        return void this.processCommand(
                                            t,
                                            l.toInput
                                        );
                                }
                            } else void 0 !== u.line && (c = 'move');
                            if (c)
                                try {
                                    qe[c](t, u),
                                        (l && l.possiblyAsync) ||
                                            !u.callback ||
                                            u.callback();
                                } catch (e) {
                                    throw (Pe(t, e.toString()), e);
                                }
                            else Pe(t, 'Not an editor command ":' + r + '"');
                        },
                        parseInput_: function(e, t, r) {
                            t.eatWhile(':'),
                                t.eat('%')
                                    ? ((r.line = e.firstLine()),
                                      (r.lineEnd = e.lastLine()))
                                    : ((r.line = this.parseLineSpec_(e, t)),
                                      void 0 !== r.line &&
                                          t.eat(',') &&
                                          (r.lineEnd = this.parseLineSpec_(
                                              e,
                                              t
                                          )));
                            var n = t.match(/^(\w+|!!|@@|[!#&*<=>@~])/);
                            return (
                                (r.commandName = n ? n[1] : t.match(/.*/)[0]), r
                            );
                        },
                        parseLineSpec_: function(e, t) {
                            var r = t.match(/^(\d+)/);
                            if (r) return parseInt(r[1], 10) - 1;
                            switch (t.next()) {
                                case '.':
                                    return this.parseLineSpecOffset_(
                                        t,
                                        e.getCursor().line
                                    );
                                case '$':
                                    return this.parseLineSpecOffset_(
                                        t,
                                        e.lastLine()
                                    );
                                case "'":
                                    var n = t.next(),
                                        o = $e(e, e.state.vim, n);
                                    if (!o) throw new Error('Mark not set');
                                    return this.parseLineSpecOffset_(t, o.line);
                                case '-':
                                case '+':
                                    return (
                                        t.backUp(1),
                                        this.parseLineSpecOffset_(
                                            t,
                                            e.getCursor().line
                                        )
                                    );
                                default:
                                    return void t.backUp(1);
                            }
                        },
                        parseLineSpecOffset_: function(e, t) {
                            var r = e.match(/^([+-])?(\d+)/);
                            if (r) {
                                var n = parseInt(r[2], 10);
                                '-' == r[1] ? (t -= n) : (t += n);
                            }
                            return t;
                        },
                        parseCommandArgs_: function(e, t, r) {
                            if (!e.eol()) {
                                t.argString = e.match(/.*/)[0];
                                var n = r.argDelimiter || /\s+/,
                                    o = le(t.argString).split(n);
                                o.length && o[0] && (t.args = o);
                            }
                        },
                        matchCommand_: function(e) {
                            for (var t = e.length; t > 0; t--) {
                                var r = e.substring(0, t);
                                if (this.commandMap_[r]) {
                                    var n = this.commandMap_[r];
                                    if (0 === n.name.indexOf(e)) return n;
                                }
                            }
                            return null;
                        },
                        buildCommandMap_: function() {
                            this.commandMap_ = {};
                            for (var e = 0; e < n.length; e++) {
                                var t = n[e],
                                    r = t.shortName || t.name;
                                this.commandMap_[r] = t;
                            }
                        },
                        map: function(e, r, n) {
                            if (':' != e && ':' == e.charAt(0)) {
                                if (n)
                                    throw Error(
                                        'Mode not supported for ex mappings'
                                    );
                                var o = e.substring(1);
                                ':' != r && ':' == r.charAt(0)
                                    ? (this.commandMap_[o] = {
                                          name: o,
                                          type: 'exToEx',
                                          toInput: r.substring(1),
                                          user: !0,
                                      })
                                    : (this.commandMap_[o] = {
                                          name: o,
                                          type: 'exToKey',
                                          toKeys: r,
                                          user: !0,
                                      });
                            } else if (':' != r && ':' == r.charAt(0)) {
                                var i = {
                                    keys: e,
                                    type: 'keyToEx',
                                    exArgs: { input: r.substring(1) },
                                };
                                n && (i.context = n), t.unshift(i);
                            } else
                                (i = { keys: e, type: 'keyToKey', toKeys: r }),
                                    n && (i.context = n),
                                    t.unshift(i);
                        },
                        unmap: function(e, r) {
                            if (':' != e && ':' == e.charAt(0)) {
                                if (r)
                                    throw Error(
                                        'Mode not supported for ex mappings'
                                    );
                                var n = e.substring(1);
                                if (
                                    this.commandMap_[n] &&
                                    this.commandMap_[n].user
                                )
                                    return void delete this.commandMap_[n];
                            } else
                                for (var o = e, i = 0; i < t.length; i++)
                                    if (o == t[i].keys && t[i].context === r)
                                        return void t.splice(i, 1);
                            throw Error('No such mapping.');
                        },
                    };
                    var qe = {
                            colorscheme: function(e, t) {
                                !t.args || t.args.length < 1
                                    ? Pe(e, e.getOption('theme'))
                                    : e.setOption('theme', t.args[0]);
                            },
                            map: function(e, t, r) {
                                var n = t.args;
                                !n || n.length < 2
                                    ? e && Pe(e, 'Invalid mapping: ' + t.input)
                                    : ze.map(n[0], n[1], r);
                            },
                            imap: function(e, t) {
                                this.map(e, t, 'insert');
                            },
                            nmap: function(e, t) {
                                this.map(e, t, 'normal');
                            },
                            vmap: function(e, t) {
                                this.map(e, t, 'visual');
                            },
                            unmap: function(e, t, r) {
                                var n = t.args;
                                !n || n.length < 1
                                    ? e && Pe(e, 'No such mapping: ' + t.input)
                                    : ze.unmap(n[0], r);
                            },
                            move: function(e, t) {
                                $.processCommand(e, e.state.vim, {
                                    type: 'motion',
                                    motion: 'moveToLineOrEdgeOfDocument',
                                    motionArgs: {
                                        forward: !1,
                                        explicitRepeat: !0,
                                        linewise: !0,
                                    },
                                    repeatOverride: t.line + 1,
                                });
                            },
                            set: function(e, t) {
                                var r = t.args,
                                    n = t.setCfg || {};
                                if (!r || r.length < 1)
                                    e && Pe(e, 'Invalid mapping: ' + t.input);
                                else {
                                    var o = r[0].split('='),
                                        i = o[0],
                                        a = o[1],
                                        s = !1;
                                    if ('?' == i.charAt(i.length - 1)) {
                                        if (a)
                                            throw Error(
                                                'Trailing characters: ' +
                                                    t.argString
                                            );
                                        (i = i.substring(0, i.length - 1)),
                                            (s = !0);
                                    }
                                    void 0 === a &&
                                        'no' == i.substring(0, 2) &&
                                        ((i = i.substring(2)), (a = !1));
                                    var l = T[i] && 'boolean' == T[i].type;
                                    if (
                                        (l && null == a && (a = !0),
                                        (!l && void 0 === a) || s)
                                    ) {
                                        var c = O(i, e, n);
                                        c instanceof Error
                                            ? Pe(e, c.message)
                                            : Pe(
                                                  e,
                                                  !0 === c || !1 === c
                                                      ? ' ' +
                                                            (c ? '' : 'no') +
                                                            i
                                                      : '  ' + i + '=' + c
                                              );
                                    } else {
                                        var u = E(i, a, e, n);
                                        u instanceof Error && Pe(e, u.message);
                                    }
                                }
                            },
                            setlocal: function(e, t) {
                                (t.setCfg = { scope: 'local' }), this.set(e, t);
                            },
                            setglobal: function(e, t) {
                                (t.setCfg = { scope: 'global' }),
                                    this.set(e, t);
                            },
                            registers: function(e, t) {
                                var r = t.args,
                                    n = B.registerController.registers,
                                    o = '----------Registers----------\n\n';
                                if (r) {
                                    r = r.join('');
                                    for (var i = 0; i < r.length; i++)
                                        (a = r.charAt(i)),
                                            B.registerController.isValidRegister(
                                                a
                                            ) &&
                                                (o +=
                                                    '"' +
                                                    a +
                                                    '    ' +
                                                    (
                                                        n[a] || new D()
                                                    ).toString() +
                                                    '\n');
                                } else
                                    for (var a in n) {
                                        var s = n[a].toString();
                                        s.length &&
                                            (o += '"' + a + '    ' + s + '\n');
                                    }
                                Pe(e, o);
                            },
                            sort: function(t, r) {
                                var n, i, a, s, l;
                                var c = (function() {
                                    if (r.argString) {
                                        var t = new e.StringStream(r.argString);
                                        if ((t.eat('!') && (n = !0), t.eol()))
                                            return;
                                        if (!t.eatSpace())
                                            return 'Invalid arguments';
                                        var o = t.match(
                                            /([dinuox]+)?\s*(\/.+\/)?\s*/
                                        );
                                        if (!o && !t.eol())
                                            return 'Invalid arguments';
                                        if (o[1]) {
                                            (i = -1 != o[1].indexOf('i')),
                                                (a = -1 != o[1].indexOf('u'));
                                            var c =
                                                    -1 != o[1].indexOf('d') ||
                                                    (-1 != o[1].indexOf('n') &&
                                                        1),
                                                u =
                                                    -1 != o[1].indexOf('x') &&
                                                    1,
                                                h =
                                                    -1 != o[1].indexOf('o') &&
                                                    1;
                                            if (c + u + h > 1)
                                                return 'Invalid arguments';
                                            s =
                                                (c ? 'decimal' : u && 'hex') ||
                                                (h && 'octal');
                                        }
                                        o[2] &&
                                            (l = new RegExp(
                                                o[2].substr(1, o[2].length - 2),
                                                i ? 'i' : ''
                                            ));
                                    }
                                })();
                                if (c) Pe(t, c + ': ' + r.argString);
                                else {
                                    var u = r.line || t.firstLine(),
                                        h = r.lineEnd || r.line || t.lastLine();
                                    if (u != h) {
                                        var p = o(u, 0),
                                            f = o(h, se(t, h)),
                                            d = t.getRange(p, f).split('\n'),
                                            m =
                                                l ||
                                                ('decimal' == s
                                                    ? /(-?)([\d]+)/
                                                    : 'hex' == s
                                                    ? /(-?)(?:0x)?([0-9a-f]+)/i
                                                    : 'octal' == s
                                                    ? /([0-7]+)/
                                                    : null),
                                            g =
                                                'decimal' == s
                                                    ? 10
                                                    : 'hex' == s
                                                    ? 16
                                                    : 'octal' == s
                                                    ? 8
                                                    : null,
                                            v = [],
                                            y = [];
                                        if (s || l)
                                            for (var k = 0; k < d.length; k++) {
                                                var C = l
                                                    ? d[k].match(l)
                                                    : null;
                                                C && '' != C[0]
                                                    ? v.push(C)
                                                    : !l && m.exec(d[k])
                                                    ? v.push(d[k])
                                                    : y.push(d[k]);
                                            }
                                        else y = d;
                                        if (
                                            (v.sort(
                                                l
                                                    ? function(e, t) {
                                                          var r;
                                                          return (
                                                              n &&
                                                                  ((r = e),
                                                                  (e = t),
                                                                  (t = r)),
                                                              i &&
                                                                  ((e[0] = e[0].toLowerCase()),
                                                                  (t[0] = t[0].toLowerCase())),
                                                              e[0] < t[0]
                                                                  ? -1
                                                                  : 1
                                                          );
                                                      }
                                                    : M
                                            ),
                                            l)
                                        )
                                            for (k = 0; k < v.length; k++)
                                                v[k] = v[k].input;
                                        else s || y.sort(M);
                                        if (
                                            ((d = n
                                                ? v.concat(y)
                                                : y.concat(v)),
                                            a)
                                        ) {
                                            var w,
                                                x = d;
                                            for (
                                                d = [], k = 0;
                                                k < x.length;
                                                k++
                                            )
                                                x[k] != w && d.push(x[k]),
                                                    (w = x[k]);
                                        }
                                        t.replaceRange(d.join('\n'), p, f);
                                    }
                                }
                                function M(e, t) {
                                    var r;
                                    n && ((r = e), (e = t), (t = r)),
                                        i &&
                                            ((e = e.toLowerCase()),
                                            (t = t.toLowerCase()));
                                    var o = s && m.exec(e),
                                        a = s && m.exec(t);
                                    return o
                                        ? (o = parseInt(
                                              (o[1] + o[2]).toLowerCase(),
                                              g
                                          )) -
                                              (a = parseInt(
                                                  (a[1] + a[2]).toLowerCase(),
                                                  g
                                              ))
                                        : e < t
                                        ? -1
                                        : 1;
                                }
                            },
                            vglobal: function(e, t) {
                                this.global(e, t);
                            },
                            global: function(e, t) {
                                var r = t.argString;
                                if (r) {
                                    var n,
                                        o = 'v' === t.commandName[0],
                                        i =
                                            void 0 !== t.line
                                                ? t.line
                                                : e.firstLine(),
                                        a = t.lineEnd || t.line || e.lastLine(),
                                        s = (function(e) {
                                            return Ee(e, '/');
                                        })(r),
                                        l = r;
                                    if (
                                        (s.length &&
                                            ((l = s[0]),
                                            (n = s
                                                .slice(1, s.length)
                                                .join('/'))),
                                        l)
                                    )
                                        try {
                                            je(e, l, !0, !0);
                                        } catch (t) {
                                            return void Pe(
                                                e,
                                                'Invalid regex: ' + l
                                            );
                                        }
                                    for (
                                        var c = Re(e).getQuery(), u = [], h = i;
                                        h <= a;
                                        h++
                                    ) {
                                        var p = e.getLineHandle(h);
                                        c.test(p.text) !== o &&
                                            u.push(n ? p : p.text);
                                    }
                                    if (n) {
                                        var f = 0,
                                            d = function() {
                                                if (f < u.length) {
                                                    var t = u[f++],
                                                        r = e.getLineNumber(t);
                                                    if (null == r)
                                                        return void d();
                                                    var o = r + 1 + n;
                                                    ze.processCommand(e, o, {
                                                        callback: d,
                                                    });
                                                }
                                            };
                                        d();
                                    } else Pe(e, u.join('\n'));
                                } else
                                    Pe(
                                        e,
                                        'Regular Expression missing from global'
                                    );
                            },
                            substitute: function(t, r) {
                                if (!t.getSearchCursor)
                                    throw new Error(
                                        'Search feature not available. Requires searchcursor.js or any other getSearchCursor implementation.'
                                    );
                                var n,
                                    i,
                                    a,
                                    s,
                                    l = r.argString,
                                    c = l ? Ee(l, l[0]) : [],
                                    u = '',
                                    h = !1,
                                    p = !1;
                                if (c.length)
                                    (n = c[0]),
                                        O('pcre') &&
                                            '' !== n &&
                                            (n = new RegExp(n).source),
                                        (u = c[1]),
                                        /(^|[^\\])(\\\\)*\$$/.test(n) &&
                                            ((n = n.slice(0, -1) + '\\n'),
                                            (u = (u || '') + '\n')),
                                        void 0 !== u &&
                                            ((u = O('pcre')
                                                ? (function(t) {
                                                      for (
                                                          var r = new e.StringStream(
                                                                  t
                                                              ),
                                                              n = [];
                                                          !r.eol();

                                                      ) {
                                                          for (
                                                              ;
                                                              r.peek() &&
                                                              '\\' != r.peek();

                                                          )
                                                              n.push(r.next());
                                                          var o = !1;
                                                          for (var i in Ie)
                                                              if (
                                                                  r.match(i, !0)
                                                              ) {
                                                                  (o = !0),
                                                                      n.push(
                                                                          Ie[i]
                                                                      );
                                                                  break;
                                                              }
                                                          o || n.push(r.next());
                                                      }
                                                      return n.join('');
                                                  })(
                                                      u.replace(
                                                          /([^\\])&/g,
                                                          '$1$$&'
                                                      )
                                                  )
                                                : (function(e) {
                                                      for (
                                                          var t = !1,
                                                              r = [],
                                                              n = -1;
                                                          n < e.length;
                                                          n++
                                                      ) {
                                                          var o =
                                                                  e.charAt(n) ||
                                                                  '',
                                                              i =
                                                                  e.charAt(
                                                                      n + 1
                                                                  ) || '';
                                                          Be[o + i]
                                                              ? (r.push(
                                                                    Be[o + i]
                                                                ),
                                                                n++)
                                                              : t
                                                              ? (r.push(o),
                                                                (t = !1))
                                                              : '\\' === o
                                                              ? ((t = !0),
                                                                (a = i),
                                                                f.test(a) ||
                                                                '$' === i
                                                                    ? r.push(
                                                                          '$'
                                                                      )
                                                                    : '/' !==
                                                                          i &&
                                                                      '\\' !==
                                                                          i &&
                                                                      r.push(
                                                                          '\\'
                                                                      ))
                                                              : ('$' === o &&
                                                                    r.push('$'),
                                                                r.push(o),
                                                                '/' === i &&
                                                                    r.push(
                                                                        '\\'
                                                                    ));
                                                      }
                                                      var a;
                                                      return r.join('');
                                                  })(u)),
                                            (B.lastSubstituteReplacePart = u)),
                                        (i = c[2] ? c[2].split(' ') : []);
                                else if (l && l.length)
                                    return void Pe(
                                        t,
                                        'Substitutions should be of the form :s/pattern/replace/'
                                    );
                                if (
                                    (i &&
                                        ((a = i[0]),
                                        (s = parseInt(i[1])),
                                        a &&
                                            (-1 != a.indexOf('c') && (h = !0),
                                            -1 != a.indexOf('g') && (p = !0),
                                            (n = O('pcre')
                                                ? n + '/' + a
                                                : n.replace(/\//g, '\\/') +
                                                  '/' +
                                                  a))),
                                    n)
                                )
                                    try {
                                        je(t, n, !0, !0);
                                    } catch (e) {
                                        return void Pe(
                                            t,
                                            'Invalid regex: ' + n
                                        );
                                    }
                                if (
                                    void 0 !==
                                    (u = u || B.lastSubstituteReplacePart)
                                ) {
                                    var d = Re(t).getQuery(),
                                        m =
                                            void 0 !== r.line
                                                ? r.line
                                                : t.getCursor().line,
                                        g = r.lineEnd || m;
                                    m == t.firstLine() &&
                                        g == t.lastLine() &&
                                        (g = 1 / 0),
                                        s && (g = (m = g) + s - 1);
                                    var v = Y(t, o(m, 0)),
                                        y = t.getSearchCursor(d, v);
                                    !(function(t, r, n, o, i, a, s, l, c) {
                                        t.state.vim.exMode = !0;
                                        var u,
                                            h,
                                            p,
                                            f = !1;
                                        function d() {
                                            t.operation(function() {
                                                for (; !f; ) m(), g();
                                                v();
                                            });
                                        }
                                        function m() {
                                            var e = t
                                                    .getRange(a.from(), a.to())
                                                    .replace(s, l),
                                                r = a.to().line;
                                            a.replace(e),
                                                (h = a.to().line),
                                                (i += h - r),
                                                (p = h < r);
                                        }
                                        function g() {
                                            for (
                                                ;
                                                a.findNext() &&
                                                Ve(a.from(), o, i);

                                            )
                                                if (
                                                    n ||
                                                    a.from().line != h ||
                                                    p
                                                )
                                                    return (
                                                        t.scrollIntoView(
                                                            a.from(),
                                                            30
                                                        ),
                                                        t.setSelection(
                                                            a.from(),
                                                            a.to()
                                                        ),
                                                        (u = a.from()),
                                                        void (f = !1)
                                                    );
                                            f = !0;
                                        }
                                        function v(e) {
                                            if ((e && e(), t.focus(), u)) {
                                                t.setCursor(u);
                                                var r = t.state.vim;
                                                (r.exMode = !1),
                                                    (r.lastHPos = r.lastHSPos =
                                                        u.ch);
                                            }
                                            c && c();
                                        }
                                        function y(r, n, o) {
                                            switch (
                                                (e.e_stop(r), e.keyName(r))
                                            ) {
                                                case 'Y':
                                                    m(), g();
                                                    break;
                                                case 'N':
                                                    g();
                                                    break;
                                                case 'A':
                                                    var i = c;
                                                    (c = void 0),
                                                        t.operation(d),
                                                        (c = i);
                                                    break;
                                                case 'L':
                                                    m();
                                                case 'Q':
                                                case 'Esc':
                                                case 'Ctrl-C':
                                                case 'Ctrl-[':
                                                    v(o);
                                            }
                                            return f && v(o), !0;
                                        }
                                        if ((g(), !f))
                                            return r
                                                ? void _e(t, {
                                                      prefix: Ke(
                                                          'span',
                                                          'replace with ',
                                                          Ke('strong', l),
                                                          ' (y/n/a/q/l)'
                                                      ),
                                                      onKeyDown: y,
                                                  })
                                                : (d(), void (c && c()));
                                        Pe(t, 'No matches for ' + s.source);
                                    })(t, h, p, m, g, y, d, u, r.callback);
                                } else
                                    Pe(
                                        t,
                                        'No previous substitute regular expression'
                                    );
                            },
                            redo: e.commands.redo,
                            undo: e.commands.undo,
                            write: function(t) {
                                e.commands.save
                                    ? e.commands.save(t)
                                    : t.save && t.save();
                            },
                            nohlsearch: function(e) {
                                De(e);
                            },
                            yank: function(e) {
                                var t = te(e.getCursor()).line,
                                    r = e.getLine(t);
                                B.registerController.pushText(
                                    '0',
                                    'yank',
                                    r,
                                    !0,
                                    !0
                                );
                            },
                            delmarks: function(t, r) {
                                if (r.argString && le(r.argString))
                                    for (
                                        var n = t.state.vim,
                                            o = new e.StringStream(
                                                le(r.argString)
                                            );
                                        !o.eol();

                                    ) {
                                        o.eatSpace();
                                        var i = o.pos;
                                        if (!o.match(/[a-zA-Z]/, !1))
                                            return void Pe(
                                                t,
                                                'Invalid argument: ' +
                                                    r.argString.substring(i)
                                            );
                                        var a = o.next();
                                        if (o.match('-', !0)) {
                                            if (!o.match(/[a-zA-Z]/, !1))
                                                return void Pe(
                                                    t,
                                                    'Invalid argument: ' +
                                                        r.argString.substring(i)
                                                );
                                            var s = a,
                                                l = o.next();
                                            if (
                                                !(
                                                    (M(s) && M(l)) ||
                                                    (S(s) && S(l))
                                                )
                                            )
                                                return void Pe(
                                                    t,
                                                    'Invalid argument: ' +
                                                        s +
                                                        '-'
                                                );
                                            var c = s.charCodeAt(0),
                                                u = l.charCodeAt(0);
                                            if (c >= u)
                                                return void Pe(
                                                    t,
                                                    'Invalid argument: ' +
                                                        r.argString.substring(i)
                                                );
                                            for (var h = 0; h <= u - c; h++) {
                                                var p = String.fromCharCode(
                                                    c + h
                                                );
                                                delete n.marks[p];
                                            }
                                        } else delete n.marks[a];
                                    }
                                else Pe(t, 'Argument required');
                            },
                        },
                        ze = new Qe();
                    function Ye(t) {
                        var r = t.state.vim,
                            n = B.macroModeState,
                            o = B.registerController.getRegister('.'),
                            i = n.isPlaying,
                            a = n.lastInsertModeChanges;
                        i ||
                            (t.off('change', Ge),
                            e.off(t.getInputField(), 'keydown', ot)),
                            !i &&
                                r.insertModeRepeat > 1 &&
                                (it(t, r, r.insertModeRepeat - 1, !0),
                                (r.lastEditInputState.repeatOverride =
                                    r.insertModeRepeat)),
                            delete r.insertModeRepeat,
                            (r.insertMode = !1),
                            t.setCursor(
                                t.getCursor().line,
                                t.getCursor().ch - 1
                            ),
                            t.setOption('keyMap', 'vim'),
                            t.setOption('disableInput', !0),
                            t.toggleOverwrite(!1),
                            o.setText(a.changes.join('')),
                            e.signal(t, 'vim-mode-change', { mode: 'normal' }),
                            n.isRecording &&
                                (function(e) {
                                    if (!e.isPlaying) {
                                        var t = e.latestRegister,
                                            r = B.registerController.getRegister(
                                                t
                                            );
                                        r &&
                                            r.pushInsertModeChanges &&
                                            r.pushInsertModeChanges(
                                                e.lastInsertModeChanges
                                            );
                                    }
                                })(n);
                    }
                    function Xe(e) {
                        t.unshift(e);
                    }
                    function Ze(t, r, n, o) {
                        var i = B.registerController.getRegister(o);
                        if (':' == o)
                            return (
                                i.keyBuffer[0] &&
                                    ze.processCommand(t, i.keyBuffer[0]),
                                void (n.isPlaying = !1)
                            );
                        var a = i.keyBuffer,
                            s = 0;
                        (n.isPlaying = !0),
                            (n.replaySearchQueries = i.searchQueries.slice(0));
                        for (var l = 0; l < a.length; l++)
                            for (var c, u, h = a[l]; h; )
                                if (
                                    ((u = (c = /<\w+-.+?>|<\w+>|./.exec(h))[0]),
                                    (h = h.substring(c.index + u.length)),
                                    e.Vim.handleKey(t, u, 'macro'),
                                    r.insertMode)
                                ) {
                                    var p = i.insertModeChanges[s++].changes;
                                    (B.macroModeState.lastInsertModeChanges.changes = p),
                                        at(t, p, 1),
                                        Ye(t);
                                }
                        n.isPlaying = !1;
                    }
                    function Ge(e, t) {
                        var r = B.macroModeState,
                            n = r.lastInsertModeChanges;
                        if (!r.isPlaying)
                            for (; t; ) {
                                if (
                                    ((n.expectCursorActivityForChange = !0),
                                    n.ignoreCount > 1)
                                )
                                    n.ignoreCount--;
                                else if (
                                    '+input' == t.origin ||
                                    'paste' == t.origin ||
                                    void 0 === t.origin
                                ) {
                                    var o = e.listSelections().length;
                                    o > 1 && (n.ignoreCount = o);
                                    var i = t.text.join('\n');
                                    n.maybeReset &&
                                        ((n.changes = []), (n.maybeReset = !1)),
                                        i &&
                                            (e.state.overwrite && !/\n/.test(i)
                                                ? n.changes.push([i])
                                                : n.changes.push(i));
                                }
                                t = t.next;
                            }
                    }
                    function et(t) {
                        var r = t.state.vim;
                        if (r.insertMode) {
                            var n = B.macroModeState;
                            if (n.isPlaying) return;
                            var o = n.lastInsertModeChanges;
                            o.expectCursorActivityForChange
                                ? (o.expectCursorActivityForChange = !1)
                                : (o.maybeReset = !0);
                        } else
                            t.curOp.isVimOp ||
                                (function(t, r) {
                                    var n = t.getCursor('anchor'),
                                        o = t.getCursor('head');
                                    if (
                                        (r.visualMode && !t.somethingSelected()
                                            ? me(t, !1)
                                            : r.visualMode ||
                                              r.insertMode ||
                                              !t.somethingSelected() ||
                                              ((r.visualMode = !0),
                                              (r.visualLine = !1),
                                              e.signal(t, 'vim-mode-change', {
                                                  mode: 'visual',
                                              })),
                                        r.visualMode)
                                    ) {
                                        var i = ne(o, n) ? 0 : -1,
                                            a = ne(o, n) ? -1 : 0;
                                        (o = Z(o, 0, i)),
                                            (n = Z(n, 0, a)),
                                            (r.sel = { anchor: n, head: o }),
                                            Ae(t, r, '<', oe(o, n)),
                                            Ae(t, r, '>', ie(o, n));
                                    } else
                                        r.insertMode ||
                                            (r.lastHPos = t.getCursor().ch);
                                })(t, r);
                        r.visualMode && tt(t);
                    }
                    function tt(e) {
                        var t = 'cm-animate-fat-cursor',
                            r = e.state.vim,
                            n = Y(e, te(r.sel.head)),
                            o = Z(n, 0, 1);
                        if ((rt(r), n.ch == e.getLine(n.line).length)) {
                            var i = Ke('span', { class: t }, ' ');
                            r.fakeCursorBookmark = e.setBookmark(n, {
                                widget: i,
                            });
                        } else
                            r.fakeCursor = e.markText(n, o, { className: t });
                    }
                    function rt(e) {
                        e.fakeCursor &&
                            (e.fakeCursor.clear(), (e.fakeCursor = null)),
                            e.fakeCursorBookmark &&
                                (e.fakeCursorBookmark.clear(),
                                (e.fakeCursorBookmark = null));
                    }
                    function nt(e) {
                        this.keyName = e;
                    }
                    function ot(t) {
                        var r = B.macroModeState.lastInsertModeChanges,
                            n = e.keyName(t);
                        n &&
                            ((-1 == n.indexOf('Delete') &&
                                -1 == n.indexOf('Backspace')) ||
                                e.lookupKey(n, 'vim-insert', function() {
                                    return (
                                        r.maybeReset &&
                                            ((r.changes = []),
                                            (r.maybeReset = !1)),
                                        r.changes.push(new nt(n)),
                                        !0
                                    );
                                }));
                    }
                    function it(e, t, r, n) {
                        var o = B.macroModeState;
                        o.isPlaying = !0;
                        var i = !!t.lastEditActionCommand,
                            a = t.inputState;
                        function s() {
                            i
                                ? $.processAction(e, t, t.lastEditActionCommand)
                                : $.evalInput(e, t);
                        }
                        function l(r) {
                            if (o.lastInsertModeChanges.changes.length > 0) {
                                r = t.lastEditActionCommand ? r : 1;
                                var n = o.lastInsertModeChanges;
                                at(e, n.changes, r);
                            }
                        }
                        if (
                            ((t.inputState = t.lastEditInputState),
                            i && t.lastEditActionCommand.interlaceInsertRepeat)
                        )
                            for (var c = 0; c < r; c++) s(), l(1);
                        else n || s(), l(r);
                        (t.inputState = a),
                            t.insertMode && !n && Ye(e),
                            (o.isPlaying = !1);
                    }
                    function at(t, r, n) {
                        function o(r) {
                            return (
                                'string' == typeof r ? e.commands[r](t) : r(t),
                                !0
                            );
                        }
                        var i = t.getCursor('head'),
                            a =
                                B.macroModeState.lastInsertModeChanges
                                    .visualBlock;
                        a &&
                            (he(t, i, a + 1),
                            (n = t.listSelections().length),
                            t.setCursor(i));
                        for (var s = 0; s < n; s++) {
                            a && t.setCursor(Z(i, s, 0));
                            for (var l = 0; l < r.length; l++) {
                                var c = r[l];
                                if (c instanceof nt)
                                    e.lookupKey(c.keyName, 'vim-insert', o);
                                else if ('string' == typeof c) {
                                    var u = t.getCursor();
                                    t.replaceRange(c, u, u);
                                } else {
                                    var h = t.getCursor(),
                                        p = Z(h, 0, c[0].length);
                                    t.replaceRange(c[0], h, p);
                                }
                            }
                        }
                        a && t.setCursor(Z(i, 0, 1));
                    }
                    return (
                        (e.keyMap.vim = { attach: a, detach: i, call: c }),
                        R('insertModeEscKeysTimeout', 200, 'number'),
                        (e.keyMap['vim-insert'] = {
                            fallthrough: ['default'],
                            attach: a,
                            detach: i,
                            call: c,
                        }),
                        (e.keyMap['vim-replace'] = {
                            Backspace: 'goCharLeft',
                            fallthrough: ['vim-insert'],
                            attach: a,
                            detach: i,
                            call: c,
                        }),
                        j(),
                        H
                    );
                })();
            })(r(25747), r(41859), r(36804), r(52971));
        },
    },
]);
//# sourceMappingURL=3413.480a49d.js.map
