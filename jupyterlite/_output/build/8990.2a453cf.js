'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [8990],
    {
        58990: (e, t, o) => {
            function r() {
                return u.keyboardLayout;
            }
            function n(e) {
                u.keyboardLayout = e;
            }
            o.r(t),
                o.d(t, {
                    EN_US: () => a,
                    KeycodeLayout: () => i,
                    getKeyboardLayout: () => r,
                    setKeyboardLayout: () => n,
                });
            var i = (function() {
                function e(t, o, r) {
                    void 0 === r && (r = []),
                        (this.name = t),
                        (this._codes = o),
                        (this._keys = e.extractKeys(o)),
                        (this._modifierKeys = e.convertToKeySet(r));
                }
                return (
                    (e.prototype.keys = function() {
                        return Object.keys(this._keys);
                    }),
                    (e.prototype.isValidKey = function(e) {
                        return e in this._keys;
                    }),
                    (e.prototype.isModifierKey = function(e) {
                        return e in this._modifierKeys;
                    }),
                    (e.prototype.keyForKeydownEvent = function(e) {
                        return this._codes[e.keyCode] || '';
                    }),
                    e
                );
            })();
            !(function(e) {
                (e.extractKeys = function(e) {
                    var t = Object.create(null);
                    for (var o in e) t[e[o]] = !0;
                    return t;
                }),
                    (e.convertToKeySet = function(e) {
                        for (
                            var t = Object(null), o = 0, r = e.length;
                            o < r;
                            ++o
                        )
                            t[e[o]] = !0;
                        return t;
                    });
            })(i || (i = {}));
            var u,
                a = new i(
                    'en-us',
                    {
                        8: 'Backspace',
                        9: 'Tab',
                        13: 'Enter',
                        16: 'Shift',
                        17: 'Ctrl',
                        18: 'Alt',
                        19: 'Pause',
                        27: 'Escape',
                        32: 'Space',
                        33: 'PageUp',
                        34: 'PageDown',
                        35: 'End',
                        36: 'Home',
                        37: 'ArrowLeft',
                        38: 'ArrowUp',
                        39: 'ArrowRight',
                        40: 'ArrowDown',
                        45: 'Insert',
                        46: 'Delete',
                        48: '0',
                        49: '1',
                        50: '2',
                        51: '3',
                        52: '4',
                        53: '5',
                        54: '6',
                        55: '7',
                        56: '8',
                        57: '9',
                        59: ';',
                        61: '=',
                        65: 'A',
                        66: 'B',
                        67: 'C',
                        68: 'D',
                        69: 'E',
                        70: 'F',
                        71: 'G',
                        72: 'H',
                        73: 'I',
                        74: 'J',
                        75: 'K',
                        76: 'L',
                        77: 'M',
                        78: 'N',
                        79: 'O',
                        80: 'P',
                        81: 'Q',
                        82: 'R',
                        83: 'S',
                        84: 'T',
                        85: 'U',
                        86: 'V',
                        87: 'W',
                        88: 'X',
                        89: 'Y',
                        90: 'Z',
                        91: 'Meta',
                        93: 'ContextMenu',
                        96: '0',
                        97: '1',
                        98: '2',
                        99: '3',
                        100: '4',
                        101: '5',
                        102: '6',
                        103: '7',
                        104: '8',
                        105: '9',
                        106: '*',
                        107: '+',
                        109: '-',
                        110: '.',
                        111: '/',
                        112: 'F1',
                        113: 'F2',
                        114: 'F3',
                        115: 'F4',
                        116: 'F5',
                        117: 'F6',
                        118: 'F7',
                        119: 'F8',
                        120: 'F9',
                        121: 'F10',
                        122: 'F11',
                        123: 'F12',
                        173: '-',
                        186: ';',
                        187: '=',
                        188: ',',
                        189: '-',
                        190: '.',
                        191: '/',
                        192: '`',
                        219: '[',
                        220: '\\',
                        221: ']',
                        222: "'",
                        224: 'Meta',
                    },
                    ['Shift', 'Ctrl', 'Alt', 'Meta']
                );
            !(function(e) {
                e.keyboardLayout = a;
            })(u || (u = {}));
        },
    },
]);
//# sourceMappingURL=8990.2a453cf.js.map
