var _JUPYTERLAB;
(() => {
    var e,
        t,
        l,
        a,
        r,
        n,
        o,
        i,
        s,
        u,
        d,
        b,
        m,
        f,
        p,
        c,
        h,
        P,
        y,
        j = {
            304: (e, t, l) => {
                let a = null;
                function r(e) {
                    if (null === a) {
                        let e = {};
                        if ('undefined' != typeof document && document) {
                            const t = document.getElementById(
                                'jupyter-config-data'
                            );
                            t && (e = JSON.parse(t.textContent || '{}'));
                        }
                        a = e;
                    }
                    return a[e] || '';
                }
                (l.p = r('fullStaticUrl') + '/'),
                    (async function() {
                        const e = r('federated_extensions');
                        let t = r('fullLabextensionsUrl');
                        (
                            await Promise.allSettled(
                                e.map(async e => {
                                    await (async function(e, t) {
                                        await (function(e) {
                                            return new Promise((t, l) => {
                                                const a = document.createElement(
                                                    'script'
                                                );
                                                (a.onerror = l),
                                                    (a.onload = t),
                                                    (a.async = !0),
                                                    document.head.appendChild(
                                                        a
                                                    ),
                                                    (a.src = e);
                                            });
                                        })(e),
                                            await l.I('default');
                                        const a = window._JUPYTERLAB[t];
                                        await a.init(l.S.default);
                                    })(`${t}/${e.name}/${e.load}`, e.name);
                                })
                            )
                        ).forEach(e => {
                            'rejected' === e.status && console.error(e.reason);
                        }),
                            (0,
                            (
                                await Promise.all([
                                    l.e(6801),
                                    l.e(2867),
                                    l.e(7901),
                                    l.e(3663),
                                    l.e(93),
                                    l.e(6790),
                                    l.e(6911),
                                    l.e(5214),
                                    l.e(5022),
                                    l.e(1944),
                                    l.e(1408),
                                ]).then(l.bind(l, 31408))
                            ).main)();
                    })();
            },
        },
        g = {};
    function v(e) {
        var t = g[e];
        if (void 0 !== t) return t.exports;
        var l = (g[e] = { id: e, loaded: !1, exports: {} });
        return (
            j[e].call(l.exports, l, l.exports, v), (l.loaded = !0), l.exports
        );
    }
    (v.m = j),
        (v.c = g),
        (v.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return v.d(t, { a: t }), t;
        }),
        (t = Object.getPrototypeOf
            ? e => Object.getPrototypeOf(e)
            : e => e.__proto__),
        (v.t = function(l, a) {
            if ((1 & a && (l = this(l)), 8 & a)) return l;
            if ('object' == typeof l && l) {
                if (4 & a && l.__esModule) return l;
                if (16 & a && 'function' == typeof l.then) return l;
            }
            var r = Object.create(null);
            v.r(r);
            var n = {};
            e = e || [null, t({}), t([]), t(t)];
            for (
                var o = 2 & a && l;
                'object' == typeof o && !~e.indexOf(o);
                o = t(o)
            )
                Object.getOwnPropertyNames(o).forEach(e => (n[e] = () => l[e]));
            return (n.default = () => l), v.d(r, n), r;
        }),
        (v.d = (e, t) => {
            for (var l in t)
                v.o(t, l) &&
                    !v.o(e, l) &&
                    Object.defineProperty(e, l, { enumerable: !0, get: t[l] });
        }),
        (v.f = {}),
        (v.e = e =>
            Promise.all(
                Object.keys(v.f).reduce((t, l) => (v.f[l](e, t), t), [])
            )),
        (v.u = e =>
            e +
            '.' +
            {
                44: '4f8f136',
                56: '20b6cd0',
                61: '2808a0d',
                93: '97c2ef6',
                97: '7f9fb27',
                123: '63ae426',
                129: 'f38d47f',
                152: '0e9a43a',
                160: '5f28731',
                213: 'a3fb0ac',
                217: '90d10e2',
                237: 'f765e77',
                240: 'de53bae',
                261: '54beba8',
                302: '27d2f0b',
                316: 'd93407d',
                330: '126fa98',
                362: 'b4f6f99',
                375: '4a10015',
                400: 'd72234b',
                406: '9b7af92',
                451: 'd9683ad',
                489: 'b981dea',
                490: '5e2b8b0',
                509: 'cb7cf54',
                528: '2262cb0',
                554: 'ac98303',
                555: 'cc26a78',
                582: '21b8e7d',
                590: '082f9c6',
                783: 'c80f5d3',
                812: '06ca8e7',
                814: 'b509ebf',
                816: 'b1bc0f8',
                824: 'e4940f7',
                833: '243d94d',
                901: '47f584a',
                917: '144d8d1',
                920: '15b46fa',
                989: '01c8de4',
                1037: '98d924d',
                1079: 'cdbaf67',
                1084: '8fcd5fb',
                1113: 'bc59eb4',
                1123: 'e3b554a',
                1125: '129d070',
                1163: 'ac28297',
                1214: '2d2e136',
                1221: 'c51249a',
                1245: '0aa0064',
                1261: '199fc1d',
                1272: 'f334098',
                1278: '58412d2',
                1290: '9eebaee',
                1295: '088660d',
                1299: 'f711bd3',
                1310: '23bbe67',
                1313: '3d9d403',
                1320: '21effe3',
                1325: '62e2207',
                1345: '44569d7',
                1408: 'd8c1d3c',
                1440: '7b43723',
                1483: '616d9ab',
                1489: '346e604',
                1507: 'b23a58e',
                1520: '4e2eb21',
                1555: 'e188f3f',
                1559: '282b3b7',
                1604: 'fa35fe9',
                1617: '32786c9',
                1644: '2603a52',
                1667: '3e5bad3',
                1725: 'f151c33',
                1743: '9a29335',
                1767: '21a8263',
                1806: '5819ad0',
                1838: 'a1a9d61',
                1863: 'ad2cf32',
                1881: '8ecf314',
                1895: '6f8bbf8',
                1909: 'd4e26b8',
                1939: 'fdb6262',
                1944: 'eca4669',
                1972: '7226cae',
                1981: '1fd1910',
                1989: '88d258f',
                2030: '7d275ac',
                2047: 'f7098e0',
                2099: '937fa4b',
                2118: '5b65f70',
                2161: 'dcb27b8',
                2169: '635c88e',
                2212: '35ea40b',
                2238: '0dd5707',
                2287: '997c38e',
                2303: '9ff8710',
                2319: 'ede0457',
                2329: '4c5ca6d',
                2351: 'fbd96d8',
                2358: '31b3b42',
                2359: '6451c3e',
                2384: '0196526',
                2431: '95eb275',
                2471: '045af38',
                2527: 'c59d05b',
                2546: '41f6e4f',
                2557: '8d3023c',
                2629: 'c0e1cd6',
                2788: 'fee2efb',
                2798: '8adabb3',
                2834: '942acc6',
                2867: '7e3670f',
                2887: 'cdee592',
                2956: '8880209',
                2973: '38c40c8',
                3004: '255e79c',
                3029: '12b7328',
                3037: '70ee38d',
                3042: '4e0064a',
                3051: '34fac68',
                3074: 'd905c0c',
                3122: '677f56c',
                3151: 'e2ecc26',
                3160: 'f33f9bb',
                3196: '4faa74a',
                3265: '8a8d08e',
                3277: '29d9a9d',
                3349: '10324ab',
                3383: '854f5fa',
                3392: 'ec04e47',
                3413: '480a49d',
                3444: 'ddb36c8',
                3469: '7d14d0b',
                3546: 'fee1bd7',
                3639: '73bee90',
                3663: 'c8c153e',
                3708: '52f7bec',
                3752: '8735345',
                3765: '2068f24',
                3850: '903abc2',
                3880: '18fb819',
                3889: '30bd1b5',
                3892: '2416867',
                3913: 'c831a97',
                3970: '236586f',
                3976: '2c57ea9',
                3979: '1e9b240',
                4018: '1a35967',
                4064: '76ac050',
                4117: '443f848',
                4176: '19ff8e2',
                4182: 'e2430f9',
                4191: 'ad695dc',
                4197: '02f1226',
                4206: 'a5f8bb0',
                4207: '0d0580b',
                4209: '87e2908',
                4226: '6cc86dd',
                4262: 'bb73457',
                4275: '929bc2f',
                4281: '80534d8',
                4298: '0438686',
                4410: 'b41084b',
                4466: 'c31d7dd',
                4507: '8b41ef4',
                4535: '34b060a',
                4565: '4d645a7',
                4569: 'f374f9d',
                4615: 'eb5d40a',
                4658: '5824cee',
                4665: 'aa19a41',
                4668: 'f65690b',
                4670: 'ccacd8e',
                4690: '3dd4096',
                4715: 'a7b45b2',
                4749: '46ebbb2',
                4750: '56c06ab',
                4769: 'dc84614',
                4856: '3d3c94b',
                4875: 'fb27006',
                4905: 'b9a49a1',
                4931: '0345aac',
                4954: 'b5bf313',
                5022: '65ce62e',
                5072: 'c7593de',
                5096: 'b3a2d2a',
                5101: 'b039cdf',
                5126: 'b8f88c1',
                5129: 'e5c10e9',
                5150: '39fd0bd',
                5153: '763d8fa',
                5155: '41720a8',
                5191: '32af1b6',
                5209: 'a6d78e2',
                5213: '3e1a360',
                5214: 'f2d148b',
                5227: '8c8acd8',
                5292: '1cd8654',
                5437: '31236f7',
                5489: '848a8cf',
                5508: 'd736359',
                5573: '63b8954',
                5610: 'b8dd014',
                5666: '0d100c7',
                5710: '70d0b1d',
                5742: '3b910a7',
                5747: '94ad626',
                5823: '5045bdb',
                5851: 'c194a27',
                5878: '557092e',
                5880: '6e73f5c',
                5955: '293e7c5',
                5971: 'a9947f1',
                6080: 'aa0ff24',
                6098: '9ea12e8',
                6136: '0206161',
                6141: '1a45f2e',
                6169: 'ac54f5b',
                6255: 'a81290d',
                6493: 'c3752ca',
                6556: 'a040f87',
                6571: '2c8884e',
                6576: '3ea568e',
                6591: '1efe607',
                6612: '1632879',
                6623: 'fecf5c1',
                6662: '8cbc307',
                6664: '2160109',
                6747: 'df23b73',
                6748: '14d34a1',
                6770: '827ffc2',
                6790: '0d1331d',
                6801: '19a4c60',
                6831: 'a2a3b6b',
                6870: '7940288',
                6879: 'c8367a5',
                6898: '11946a0',
                6911: '72cd417',
                6952: 'f68b818',
                6985: 'cf77135',
                6993: 'fccf6bd',
                6997: 'be19824',
                7041: '0b99981',
                7053: '578bd63',
                7058: '805c88e',
                7174: '262af1c',
                7334: '8859b1b',
                7341: '5490013',
                7343: '7eabc0b',
                7359: '6ee65ec',
                7364: '6cf0074',
                7380: '58a4413',
                7427: 'f9c2017',
                7442: '62b54b0',
                7463: '520b18d',
                7509: '1e0189e',
                7526: '1a303e5',
                7537: '1323a15',
                7642: '5e007f2',
                7692: '33d5169',
                7711: '595f3ba',
                7746: '2461a73',
                7808: '1d582a2',
                7858: '2386e4d',
                7901: '62cdc28',
                7941: 'e07276d',
                7951: '82eea2d',
                8023: 'bce550e',
                8028: '39e2fa1',
                8061: 'd54e614',
                8073: 'b17b957',
                8089: '731f647',
                8099: 'c0f07ca',
                8101: '8ebbb2f',
                8165: '3ef4517',
                8205: '81efc3c',
                8232: '19b0aad',
                8262: 'd7b687b',
                8270: '876589b',
                8300: 'f084e5d',
                8370: 'd24d237',
                8373: '96b0b3a',
                8389: 'ffe031f',
                8412: '1528057',
                8418: 'fddaf55',
                8427: '4923f43',
                8542: 'dcaf157',
                8594: '20243de',
                8656: 'b190cb4',
                8698: '9817d75',
                8732: '37248a3',
                8741: 'b138cb8',
                8785: 'c2812ca',
                8816: 'c80b2e0',
                8828: 'e7d9c9e',
                8883: '80c7b63',
                8976: '3816942',
                8981: 'd20e4be',
                8983: 'e88e2df',
                8990: '2a453cf',
                9035: '2467c10',
                9053: '71d2423',
                9073: 'fb0e3a8',
                9077: 'fefb6ca',
                9116: 'cb05c94',
                9156: '0cefbd3',
                9170: '867f8ca',
                9196: '315f9f9',
                9198: 'c1894bf',
                9201: '99617e5',
                9253: 'de2ce65',
                9266: '39c9783',
                9307: 'eb17eb0',
                9321: '14dc3dc',
                9344: '556793e',
                9438: 'aa9e1cf',
                9440: '1b10b8f',
                9464: 'd2619bd',
                9502: 'efa46e0',
                9602: '62bf0f1',
                9621: 'e2e8b5d',
                9622: '163024d',
                9626: '6022070',
                9647: 'ed91993',
                9657: '7098e09',
                9712: 'a60394f',
                9729: '9014a00',
                9733: '074ea25',
                9737: '7dc8f98',
                9750: 'ce60457',
                9777: 'f30a67b',
                9793: 'cf3d61c',
                9806: 'e279e7a',
                9865: '5381a97',
                9873: '955c8a2',
                9915: '78886f9',
                9934: '37a93b8',
                9943: 'f3f35c7',
                9957: '2d01a2e',
                9958: '6dc74dc',
                9960: '5d03ff3',
            }[e] +
            '.js'),
        (v.g = (function() {
            if ('object' == typeof globalThis) return globalThis;
            try {
                return this || new Function('return this')();
            } catch (e) {
                if ('object' == typeof window) return window;
            }
        })()),
        (v.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t)),
        (l = {}),
        (a = '_JUPYTERLAB.CORE_OUTPUT:'),
        (v.l = (e, t, r, n) => {
            if (l[e]) l[e].push(t);
            else {
                var o, i;
                if (void 0 !== r)
                    for (
                        var s = document.getElementsByTagName('script'), u = 0;
                        u < s.length;
                        u++
                    ) {
                        var d = s[u];
                        if (
                            d.getAttribute('src') == e ||
                            d.getAttribute('data-webpack') == a + r
                        ) {
                            o = d;
                            break;
                        }
                    }
                o ||
                    ((i = !0),
                    ((o = document.createElement('script')).charset = 'utf-8'),
                    (o.timeout = 120),
                    v.nc && o.setAttribute('nonce', v.nc),
                    o.setAttribute('data-webpack', a + r),
                    (o.src = e)),
                    (l[e] = [t]);
                var b = (t, a) => {
                        (o.onerror = o.onload = null), clearTimeout(m);
                        var r = l[e];
                        if (
                            (delete l[e],
                            o.parentNode && o.parentNode.removeChild(o),
                            r && r.forEach(e => e(a)),
                            t)
                        )
                            return t(a);
                    },
                    m = setTimeout(
                        b.bind(null, void 0, { type: 'timeout', target: o }),
                        12e4
                    );
                (o.onerror = b.bind(null, o.onerror)),
                    (o.onload = b.bind(null, o.onload)),
                    i && document.head.appendChild(o);
            }
        }),
        (v.r = e => {
            'undefined' != typeof Symbol &&
                Symbol.toStringTag &&
                Object.defineProperty(e, Symbol.toStringTag, {
                    value: 'Module',
                }),
                Object.defineProperty(e, '__esModule', { value: !0 });
        }),
        (v.nmd = e => ((e.paths = []), e.children || (e.children = []), e)),
        (() => {
            v.S = {};
            var e = {},
                t = {};
            v.I = (l, a) => {
                a || (a = []);
                var r = t[l];
                if ((r || (r = t[l] = {}), !(a.indexOf(r) >= 0))) {
                    if ((a.push(r), e[l])) return e[l];
                    v.o(v.S, l) || (v.S[l] = {});
                    var n = v.S[l],
                        o = '_JUPYTERLAB.CORE_OUTPUT',
                        i = (e, t, l, a) => {
                            var r = (n[e] = n[e] || {}),
                                i = r[t];
                            (!i ||
                                (!i.loaded &&
                                    (!a != !i.eager ? a : o > i.from))) &&
                                (r[t] = { get: l, from: o, eager: !!a });
                        },
                        s = [];
                    return (
                        'default' === l &&
                            (i(
                                '@jupyterlab/application-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(316),
                                        v.e(6169),
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(6098),
                                        v.e(3892),
                                        v.e(9729),
                                        v.e(6801),
                                        v.e(2471),
                                        v.e(3979),
                                        v.e(2867),
                                        v.e(1743),
                                        v.e(4176),
                                        v.e(3889),
                                    ]).then(() => () => v(30316))
                            ),
                            i('@jupyterlab/application', '3.5.2', () =>
                                Promise.all([
                                    v.e(812),
                                    v.e(9198),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(1743),
                                    v.e(814),
                                    v.e(7442),
                                    v.e(1313),
                                    v.e(4064),
                                    v.e(5610),
                                    v.e(9116),
                                    v.e(3765),
                                ]).then(() => () => v(79198))
                            ),
                            i('@jupyterlab/apputils-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(4856),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(6801),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(1743),
                                    v.e(7442),
                                    v.e(5101),
                                    v.e(1313),
                                    v.e(4176),
                                    v.e(375),
                                    v.e(8983),
                                ]).then(() => () => v(74856))
                            ),
                            i('@jupyterlab/apputils', '3.5.2', () =>
                                Promise.all([
                                    v.e(6623),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(3979),
                                    v.e(1743),
                                    v.e(1313),
                                    v.e(4176),
                                    v.e(4064),
                                    v.e(5610),
                                    v.e(9116),
                                    v.e(3349),
                                    v.e(8205),
                                    v.e(375),
                                    v.e(7711),
                                    v.e(3752),
                                ]).then(() => () => v(96623))
                            ),
                            i(
                                '@jupyterlab/cell-toolbar-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(3979),
                                        v.e(5155),
                                    ]).then(() => () => v(15155))
                            ),
                            i('@jupyterlab/cell-toolbar', '3.5.2', () =>
                                Promise.all([
                                    v.e(7343),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(8205),
                                    v.e(362),
                                ]).then(() => () => v(80362))
                            ),
                            i('@jupyterlab/cells', '3.5.2', () =>
                                Promise.all([
                                    v.e(1520),
                                    v.e(4954),
                                    v.e(6169),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(814),
                                    v.e(1313),
                                    v.e(3349),
                                    v.e(1972),
                                    v.e(8205),
                                    v.e(3383),
                                    v.e(7951),
                                    v.e(8262),
                                    v.e(9073),
                                ]).then(() => () => v(14954))
                            ),
                            i('@jupyterlab/celltags-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(8099),
                                    v.e(8981),
                                ]).then(() => () => v(98981))
                            ),
                            i('@jupyterlab/celltags', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(8099),
                                    v.e(6997),
                                ]).then(() => () => v(96997))
                            ),
                            i('@jupyterlab/codeeditor', '3.5.2', () =>
                                Promise.all([
                                    v.e(6747),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(6098),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(8205),
                                    v.e(8262),
                                ]).then(() => () => v(66747))
                            ),
                            i('@jupyterlab/codemirror-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(5101),
                                    v.e(9934),
                                    v.e(1972),
                                    v.e(3160),
                                    v.e(7951),
                                    v.e(1981),
                                    v.e(6493),
                                ]).then(() => () => v(66493))
                            ),
                            i('@jupyterlab/codemirror', '3.5.2', () =>
                                Promise.all([
                                    v.e(5747),
                                    v.e(8373),
                                    v.e(5878),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(1743),
                                    v.e(1313),
                                    v.e(9934),
                                    v.e(1972),
                                    v.e(9915),
                                    v.e(1981),
                                ]).then(() => () => v(95878))
                            ),
                            i('@jupyterlab/completer-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(8099),
                                    v.e(2527),
                                    v.e(3160),
                                    v.e(240),
                                ]).then(() => () => v(10240))
                            ),
                            i('@jupyterlab/completer', '3.5.2', () =>
                                Promise.all([
                                    v.e(4565),
                                    v.e(6169),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(4176),
                                    v.e(4064),
                                    v.e(3349),
                                ]).then(() => () => v(94565))
                            ),
                            i('@jupyterlab/console-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(4117),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(1743),
                                    v.e(814),
                                    v.e(5101),
                                    v.e(2527),
                                    v.e(9116),
                                    v.e(1972),
                                    v.e(8983),
                                    v.e(5150),
                                ]).then(() => () => v(14117))
                            ),
                            i('@jupyterlab/console', '3.5.2', () =>
                                Promise.all([
                                    v.e(3265),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(814),
                                    v.e(8205),
                                    v.e(9873),
                                    v.e(8418),
                                ]).then(() => () => v(53469))
                            ),
                            i('@jupyterlab/coreutils', '5.5.2', () =>
                                Promise.all([
                                    v.e(8101),
                                    v.e(6169),
                                    v.e(2798),
                                    v.e(5126),
                                ]).then(() => () => v(54705))
                            ),
                            i('@jupyterlab/csvviewer-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(2798),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(7442),
                                    v.e(5101),
                                    v.e(917),
                                    v.e(901),
                                    v.e(2238),
                                    v.e(5096),
                                ]).then(() => () => v(15971))
                            ),
                            i('@jupyterlab/csvviewer', '3.5.2', () =>
                                Promise.all([
                                    v.e(2431),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(7442),
                                    v.e(901),
                                ]).then(() => () => v(82431))
                            ),
                            i('@jupyterlab/docmanager-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(3392),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(9934),
                                    v.e(1123),
                                    v.e(8073),
                                ]).then(() => () => v(90509))
                            ),
                            i('@jupyterlab/docmanager', '3.5.2', () =>
                                Promise.all([
                                    v.e(6898),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(1743),
                                    v.e(7442),
                                    v.e(9934),
                                    v.e(4064),
                                    v.e(9116),
                                ]).then(() => () => v(66898))
                            ),
                            i('@jupyterlab/docprovider', '3.5.2', () =>
                                Promise.all([
                                    v.e(6879),
                                    v.e(528),
                                    v.e(1125),
                                    v.e(6169),
                                    v.e(9915),
                                ]).then(() => () => v(51125))
                            ),
                            i('@jupyterlab/docregistry', '3.5.2', () =>
                                Promise.all([
                                    v.e(7941),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(1743),
                                    v.e(814),
                                    v.e(4064),
                                    v.e(1972),
                                    v.e(7951),
                                    v.e(8262),
                                    v.e(8073),
                                ]).then(() => () => v(17941))
                            ),
                            i(
                                '@jupyterlab/documentsearch-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(3979),
                                        v.e(2867),
                                        v.e(917),
                                        v.e(5880),
                                    ]).then(() => () => v(59035))
                            ),
                            i('@jupyterlab/documentsearch', '3.5.2', () =>
                                Promise.all([
                                    v.e(8656),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(2471),
                                    v.e(1743),
                                    v.e(1313),
                                    v.e(8099),
                                    v.e(3160),
                                    v.e(9873),
                                    v.e(7951),
                                    v.e(1981),
                                ]).then(() => () => v(38656))
                            ),
                            i(
                                '@jupyterlab/filebrowser-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(9806),
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(3892),
                                        v.e(9729),
                                        v.e(6801),
                                        v.e(3979),
                                        v.e(2867),
                                        v.e(9934),
                                        v.e(4176),
                                        v.e(1123),
                                        v.e(375),
                                        v.e(8983),
                                    ]).then(() => () => v(59806))
                            ),
                            i('@jupyterlab/filebrowser', '3.5.2', () =>
                                Promise.all([
                                    v.e(1489),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(7442),
                                    v.e(1313),
                                    v.e(9934),
                                    v.e(1123),
                                    v.e(4064),
                                    v.e(5610),
                                    v.e(3349),
                                    v.e(3383),
                                    v.e(8418),
                                ]).then(() => () => v(21489))
                            ),
                            i('@jupyterlab/fileeditor-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(6136),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(9729),
                                    v.e(6801),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(5101),
                                    v.e(9934),
                                    v.e(2527),
                                    v.e(1972),
                                    v.e(3160),
                                    v.e(8983),
                                    v.e(5150),
                                ]).then(() => () => v(46136))
                            ),
                            i('@jupyterlab/fileeditor', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(9729),
                                    v.e(2471),
                                    v.e(7442),
                                    v.e(9934),
                                    v.e(1972),
                                    v.e(9253),
                                ]).then(() => () => v(9253))
                            ),
                            i('@jupyterlab/help-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(6770),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(2867),
                                    v.e(5101),
                                    v.e(5610),
                                    v.e(3383),
                                ]).then(() => () => v(93979))
                            ),
                            i('@jupyterlab/htmlviewer-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(9729),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(5742),
                                    v.e(2384),
                                ]).then(() => () => v(89793))
                            ),
                            i('@jupyterlab/htmlviewer', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(7442),
                                    v.e(4197),
                                ]).then(() => () => v(74197))
                            ),
                            i(
                                '@jupyterlab/imageviewer-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(2867),
                                        v.e(56),
                                        v.e(1290),
                                    ]).then(() => () => v(25129))
                            ),
                            i('@jupyterlab/imageviewer', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(6801),
                                    v.e(7442),
                                    v.e(8165),
                                ]).then(() => () => v(58165))
                            ),
                            i('@jupyterlab/inspector-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(9729),
                                    v.e(2867),
                                    v.e(8099),
                                    v.e(2527),
                                    v.e(5150),
                                    v.e(4209),
                                    v.e(3708),
                                ]).then(() => () => v(17174))
                            ),
                            i('@jupyterlab/inspector', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(814),
                                    v.e(1313),
                                    v.e(4176),
                                    v.e(9321),
                                ]).then(() => () => v(49321))
                            ),
                            i('@jupyterlab/javascript-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(814),
                                    v.e(1113),
                                ]).then(() => () => v(41113))
                            ),
                            i('@jupyterlab/json-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(9729),
                                    v.e(2471),
                                    v.e(7711),
                                    v.e(3880),
                                ]).then(() => () => v(63880))
                            ),
                            i('@jupyterlab/launcher-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2867),
                                    v.e(5150),
                                    v.e(3042),
                                ]).then(() => () => v(79626))
                            ),
                            i('@jupyterlab/launcher', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2471),
                                    v.e(1743),
                                    v.e(9116),
                                    v.e(9053),
                                ]).then(() => () => v(79053))
                            ),
                            i('@jupyterlab/logconsole-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(9266),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(2471),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(814),
                                    v.e(8099),
                                    v.e(9934),
                                    v.e(3639),
                                ]).then(() => () => v(9266))
                            ),
                            i('@jupyterlab/logconsole', '3.5.2', () =>
                                Promise.all([
                                    v.e(3122),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(6098),
                                    v.e(2798),
                                    v.e(814),
                                    v.e(9073),
                                ]).then(() => () => v(3122))
                            ),
                            i('@jupyterlab/mainmenu-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(7463),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(6801),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(5101),
                                    v.e(5610),
                                ]).then(() => () => v(97463))
                            ),
                            i('@jupyterlab/mainmenu', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(5072),
                                ]).then(() => () => v(55072))
                            ),
                            i(
                                '@jupyterlab/markdownviewer-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(6801),
                                        v.e(3979),
                                        v.e(2867),
                                        v.e(814),
                                        v.e(3074),
                                        v.e(3277),
                                    ]).then(() => () => v(46985))
                            ),
                            i('@jupyterlab/markdownviewer', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(6801),
                                    v.e(814),
                                    v.e(7442),
                                    v.e(2358),
                                ]).then(() => () => v(22358))
                            ),
                            i('@jupyterlab/mathjax2-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(6801),
                                    v.e(814),
                                    v.e(7053),
                                    v.e(152),
                                ]).then(() => () => v(60152))
                            ),
                            i('@jupyterlab/mathjax2', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(3469),
                                ]).then(() => () => v(13469))
                            ),
                            i('@jupyterlab/nbformat', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(7526),
                                ]).then(() => () => v(97526))
                            ),
                            i('@jupyterlab/notebook-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(4875),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(6801),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(1743),
                                    v.e(814),
                                    v.e(5101),
                                    v.e(8099),
                                    v.e(9934),
                                    v.e(4176),
                                    v.e(1123),
                                    v.e(4064),
                                    v.e(5610),
                                    v.e(1972),
                                    v.e(8983),
                                    v.e(5150),
                                    v.e(9873),
                                    v.e(3889),
                                    v.e(3639),
                                    v.e(3663),
                                ]).then(() => () => v(94206))
                            ),
                            i('@jupyterlab/notebook', '3.5.2', () =>
                                Promise.all([
                                    v.e(2030),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(7442),
                                    v.e(9934),
                                    v.e(4064),
                                    v.e(5610),
                                    v.e(9116),
                                    v.e(3349),
                                    v.e(1972),
                                    v.e(8205),
                                    v.e(3383),
                                    v.e(9873),
                                    v.e(8418),
                                    v.e(8262),
                                    v.e(4670),
                                ]).then(() => () => v(92030))
                            ),
                            i('@jupyterlab/observables', '4.5.2', () =>
                                Promise.all([
                                    v.e(97),
                                    v.e(6169),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(1743),
                                    v.e(4064),
                                ]).then(() => () => v(60097))
                            ),
                            i('@jupyterlab/outputarea', '3.5.2', () =>
                                Promise.all([
                                    v.e(3196),
                                    v.e(6169),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(814),
                                    v.e(5610),
                                    v.e(9116),
                                    v.e(8205),
                                    v.e(4670),
                                ]).then(() => () => v(13196))
                            ),
                            i('@jupyterlab/pdf-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(6098),
                                    v.e(1743),
                                    v.e(490),
                                ]).then(() => () => v(80490))
                            ),
                            i('@jupyterlab/property-inspector', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(2798),
                                    v.e(1295),
                                ]).then(() => () => v(21295))
                            ),
                            i('@jupyterlab/rendermime-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(814),
                                    v.e(1123),
                                    v.e(824),
                                ]).then(() => () => v(40824))
                            ),
                            i(
                                '@jupyterlab/rendermime-interfaces',
                                '3.5.2',
                                () => v.e(4668).then(() => () => v(64668))
                            ),
                            i('@jupyterlab/rendermime', '3.5.2', () =>
                                Promise.all([
                                    v.e(1520),
                                    v.e(1767),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(8205),
                                    v.e(7951),
                                    v.e(4670),
                                    v.e(9438),
                                ]).then(() => () => v(81767))
                            ),
                            i('@jupyterlab/running-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2867),
                                    v.e(7442),
                                    v.e(3029),
                                    v.e(4466),
                                ]).then(() => () => v(51667))
                            ),
                            i('@jupyterlab/running', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(9729),
                                    v.e(2471),
                                    v.e(1743),
                                    v.e(2319),
                                ]).then(() => () => v(22319))
                            ),
                            i('@jupyterlab/services', '6.5.2', () =>
                                Promise.all([
                                    v.e(6591),
                                    v.e(6169),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(1743),
                                    v.e(1313),
                                    v.e(4176),
                                    v.e(8741),
                                ]).then(() => () => v(76591))
                            ),
                            i(
                                '@jupyterlab/settingeditor-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(6169),
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(9729),
                                        v.e(3979),
                                        v.e(2867),
                                        v.e(814),
                                        v.e(4176),
                                        v.e(1972),
                                        v.e(2973),
                                    ]).then(() => () => v(80989))
                            ),
                            i('@jupyterlab/settingeditor', '3.5.2', () =>
                                Promise.all([
                                    v.e(4658),
                                    v.e(9865),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(2471),
                                    v.e(814),
                                    v.e(1313),
                                    v.e(4176),
                                    v.e(1972),
                                    v.e(4209),
                                    v.e(4665),
                                ]).then(() => () => v(19865))
                            ),
                            i('@jupyterlab/settingregistry', '3.5.2', () =>
                                Promise.all([
                                    v.e(4658),
                                    v.e(7537),
                                    v.e(8270),
                                    v.e(6169),
                                    v.e(2798),
                                    v.e(1743),
                                    v.e(375),
                                ]).then(() => () => v(98270))
                            ),
                            i('@jupyterlab/shared-models', '3.5.2', () =>
                                Promise.all([
                                    v.e(6879),
                                    v.e(528),
                                    v.e(6993),
                                    v.e(6169),
                                    v.e(2798),
                                    v.e(9915),
                                ]).then(() => () => v(56993))
                            ),
                            i('@jupyterlab/shortcuts-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(2212),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2471),
                                    v.e(3979),
                                    v.e(1743),
                                    v.e(3349),
                                    v.e(375),
                                    v.e(6831),
                                    v.e(8300),
                                ]).then(() => () => v(52212))
                            ),
                            i('@jupyterlab/statedb', '3.5.2', () =>
                                Promise.all([
                                    v.e(1325),
                                    v.e(6169),
                                    v.e(2798),
                                    v.e(9116),
                                ]).then(() => () => v(91325))
                            ),
                            i('@jupyterlab/statusbar-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(9729),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(8099),
                                    v.e(9934),
                                    v.e(2527),
                                    v.e(375),
                                    v.e(3160),
                                    v.e(1806),
                                ]).then(() => () => v(54715))
                            ),
                            i('@jupyterlab/statusbar', '3.5.2', () =>
                                Promise.all([
                                    v.e(2161),
                                    v.e(5573),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2471),
                                    v.e(1743),
                                ]).then(() => () => v(65573))
                            ),
                            i('@jupyterlab/theme-dark-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(9307),
                                ]).then(() => () => v(59307))
                            ),
                            i(
                                '@jupyterlab/theme-light-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(7746),
                                    ]).then(() => () => v(37746))
                            ),
                            i('@jupyterlab/toc-extension', '5.5.2', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(9729),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(814),
                                    v.e(8099),
                                    v.e(1123),
                                    v.e(3160),
                                    v.e(9873),
                                    v.e(3074),
                                    v.e(7341),
                                    v.e(2788),
                                ]).then(() => () => v(80833))
                            ),
                            i('@jupyterlab/toc', '5.5.2', () =>
                                Promise.all([
                                    v.e(8828),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(6098),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(8099),
                                    v.e(3349),
                                    v.e(9873),
                                    v.e(7711),
                                ]).then(() => () => v(6598))
                            ),
                            i('@jupyterlab/tooltip-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(6801),
                                    v.e(814),
                                    v.e(8099),
                                    v.e(2527),
                                    v.e(3160),
                                    v.e(129),
                                    v.e(8232),
                                ]).then(() => () => v(28232))
                            ),
                            i('@jupyterlab/tooltip', '3.5.2', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(814),
                                    v.e(1507),
                                ]).then(() => () => v(11507))
                            ),
                            i(
                                '@jupyterlab/translation-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(3979),
                                        v.e(2867),
                                        v.e(5101),
                                        v.e(1440),
                                    ]).then(() => () => v(61440))
                            ),
                            i('@jupyterlab/translation', '3.5.2', () =>
                                Promise.all([
                                    v.e(2047),
                                    v.e(6169),
                                    v.e(6801),
                                    v.e(4176),
                                    v.e(5610),
                                ]).then(() => () => v(52047))
                            ),
                            i(
                                '@jupyterlab/ui-components-extension',
                                '3.5.2',
                                () =>
                                    Promise.all([
                                        v.e(9729),
                                        v.e(9733),
                                    ]).then(() => () => v(69733))
                            ),
                            i('@jupyterlab/ui-components', '3.5.2', () =>
                                Promise.all([
                                    v.e(2161),
                                    v.e(3976),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2471),
                                    v.e(1743),
                                    v.e(3383),
                                    v.e(7711),
                                ]).then(() => () => v(33976))
                            ),
                            i('@jupyterlab/vega5-extension', '3.5.2', () =>
                                Promise.all([
                                    v.e(6098),
                                    v.e(9712),
                                ]).then(() => () => v(79712))
                            ),
                            i(
                                '@jupyterlite/application-extension',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(6571),
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(6098),
                                        v.e(3892),
                                        v.e(9729),
                                        v.e(6801),
                                        v.e(2471),
                                        v.e(2867),
                                        v.e(5101),
                                        v.e(1123),
                                        v.e(8983),
                                        v.e(9201),
                                        v.e(8073),
                                        v.e(2557),
                                    ]).then(() => () => v(2557))
                            ),
                            i('@jupyterlite/application', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(812),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2867),
                                    v.e(1743),
                                    v.e(814),
                                    v.e(7442),
                                    v.e(9116),
                                    v.e(4905),
                                ]).then(() => () => v(54905))
                            ),
                            i('@jupyterlite/contents', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(9737),
                                    v.e(6169),
                                    v.e(6801),
                                    v.e(302),
                                ]).then(() => () => v(40302))
                            ),
                            i(
                                '@jupyterlite/iframe-extension',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(6169),
                                        v.e(6098),
                                        v.e(6141),
                                    ]).then(() => () => v(86141))
                            ),
                            i(
                                '@jupyterlite/javascript-kernel-extension',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(6801),
                                        v.e(6255),
                                        v.e(590),
                                        v.e(1863),
                                    ]).then(() => () => v(91863))
                            ),
                            i(
                                '@jupyterlite/javascript-kernel',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(6169),
                                        v.e(6801),
                                        v.e(6255),
                                        v.e(1939),
                                    ]).then(() => () => v(11939))
                            ),
                            i('@jupyterlite/kernel', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(1079),
                                    v.e(6169),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(5610),
                                    v.e(8205),
                                    v.e(2546),
                                ]).then(() => () => v(52546))
                            ),
                            i('@jupyterlite/licenses', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(6801),
                                    v.e(9777),
                                ]).then(() => () => v(89777))
                            ),
                            i('@jupyterlite/localforage', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(2329),
                                ]).then(() => () => v(2329))
                            ),
                            i(
                                '@jupyterlite/pyolite-kernel-extension',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(6801),
                                        v.e(6255),
                                        v.e(7901),
                                        v.e(4281),
                                        v.e(1604),
                                    ]).then(() => () => v(51604))
                            ),
                            i(
                                '@jupyterlite/repl-extension',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(1345),
                                        v.e(7343),
                                        v.e(6098),
                                        v.e(9729),
                                        v.e(2867),
                                        v.e(2527),
                                        v.e(9201),
                                        v.e(8089),
                                        v.e(8370),
                                    ]).then(() => () => v(8370))
                            ),
                            i(
                                '@jupyterlite/retro-application-extension',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(6098),
                                        v.e(6801),
                                        v.e(1123),
                                        v.e(2527),
                                        v.e(9201),
                                        v.e(5191),
                                        v.e(3444),
                                    ]).then(() => () => v(63444))
                            ),
                            i(
                                '@jupyterlite/server-extension',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(9440),
                                        v.e(6801),
                                        v.e(6255),
                                        v.e(7901),
                                        v.e(4281),
                                        v.e(1299),
                                        v.e(4931),
                                    ]).then(() => () => v(24931))
                            ),
                            i('@jupyterlite/server', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(1079),
                                    v.e(6169),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(5610),
                                    v.e(3765),
                                    v.e(1245),
                                ]).then(() => () => v(71245))
                            ),
                            i('@jupyterlite/session', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(3892),
                                    v.e(6801),
                                    v.e(4298),
                                ]).then(() => () => v(14298))
                            ),
                            i('@jupyterlite/settings', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(7537),
                                    v.e(6169),
                                    v.e(6801),
                                    v.e(3151),
                                ]).then(() => () => v(53151))
                            ),
                            i('@jupyterlite/translation', '0.1.0-beta.18', () =>
                                Promise.all([
                                    v.e(6169),
                                    v.e(6801),
                                    v.e(816),
                                ]).then(() => () => v(90816))
                            ),
                            i(
                                '@jupyterlite/ui-components',
                                '0.1.0-beta.18',
                                () =>
                                    Promise.all([
                                        v.e(9729),
                                        v.e(9958),
                                    ]).then(() => () => v(59958))
                            ),
                            i('@lumino/algorithm', '1.9.2', () =>
                                v.e(9943).then(() => () => v(99943))
                            ),
                            i('@lumino/application', '1.31.0', () =>
                                Promise.all([
                                    v.e(1278),
                                    v.e(6169),
                                    v.e(6098),
                                    v.e(375),
                                ]).then(() => () => v(61278))
                            ),
                            i('@lumino/commands', '1.21.0', () =>
                                Promise.all([
                                    v.e(8061),
                                    v.e(6169),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(1743),
                                    v.e(3349),
                                    v.e(6831),
                                ]).then(() => () => v(38061))
                            ),
                            i('@lumino/coreutils', '1.12.1', () =>
                                v.e(8883).then(() => () => v(28883))
                            ),
                            i('@lumino/datagrid', '0.36.6', () =>
                                Promise.all([
                                    v.e(920),
                                    v.e(6169),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(4064),
                                    v.e(3349),
                                    v.e(8418),
                                    v.e(6831),
                                ]).then(() => () => v(30920))
                            ),
                            i('@lumino/disposable', '1.10.3', () =>
                                Promise.all([
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(5851),
                                ]).then(() => () => v(35851))
                            ),
                            i('@lumino/domutils', '1.8.2', () =>
                                v.e(1310).then(() => () => v(71310))
                            ),
                            i('@lumino/dragdrop', '1.14.3', () =>
                                Promise.all([
                                    v.e(1084),
                                    v.e(1743),
                                ]).then(() => () => v(51084))
                            ),
                            i('@lumino/keyboard', '1.8.2', () =>
                                v.e(8990).then(() => () => v(58990))
                            ),
                            i('@lumino/messaging', '1.10.3', () =>
                                Promise.all([
                                    v.e(3850),
                                    v.e(3892),
                                ]).then(() => () => v(23850))
                            ),
                            i('@lumino/polling', '1.11.3', () =>
                                Promise.all([
                                    v.e(8594),
                                    v.e(6169),
                                    v.e(2798),
                                ]).then(() => () => v(18594))
                            ),
                            i('@lumino/properties', '1.8.2', () =>
                                v.e(1555).then(() => () => v(21555))
                            ),
                            i('@lumino/signaling', '1.11.0', () =>
                                Promise.all([
                                    v.e(3892),
                                    v.e(9116),
                                    v.e(8389),
                                ]).then(() => () => v(38389))
                            ),
                            i('@lumino/virtualdom', '1.14.3', () =>
                                Promise.all([
                                    v.e(5437),
                                    v.e(3892),
                                ]).then(() => () => v(75437))
                            ),
                            i('@lumino/widgets', '1.36.0', () =>
                                Promise.all([
                                    v.e(5666),
                                    v.e(6169),
                                    v.e(3892),
                                    v.e(2798),
                                    v.e(1743),
                                    v.e(4064),
                                    v.e(9116),
                                    v.e(3349),
                                    v.e(375),
                                    v.e(3383),
                                    v.e(8418),
                                    v.e(6831),
                                ]).then(() => () => v(75666))
                            ),
                            i('@retrolab/application-extension', '0.3.21', () =>
                                Promise.all([
                                    v.e(1559),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(6801),
                                    v.e(3979),
                                    v.e(2867),
                                    v.e(1743),
                                    v.e(7442),
                                    v.e(5101),
                                    v.e(1123),
                                    v.e(2527),
                                    v.e(5191),
                                    v.e(4769),
                                ]).then(() => () => v(91559))
                            ),
                            i('@retrolab/application', '0.3.21', () =>
                                Promise.all([
                                    v.e(812),
                                    v.e(6169),
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(3892),
                                    v.e(9729),
                                    v.e(2798),
                                    v.e(6801),
                                    v.e(2867),
                                    v.e(1743),
                                    v.e(814),
                                    v.e(7442),
                                    v.e(1313),
                                    v.e(4064),
                                    v.e(9116),
                                    v.e(6556),
                                ]).then(() => () => v(36556))
                            ),
                            i('@retrolab/help-extension', '0.3.21', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(2471),
                                    v.e(5101),
                                    v.e(4769),
                                    v.e(8785),
                                ]).then(() => () => v(18785))
                            ),
                            i('@retrolab/notebook-extension', '0.3.21', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(6801),
                                    v.e(3979),
                                    v.e(5101),
                                    v.e(1313),
                                    v.e(8099),
                                    v.e(1123),
                                    v.e(5191),
                                    v.e(2099),
                                ]).then(() => () => v(2099))
                            ),
                            i('@retrolab/tree-extension', '0.3.21', () =>
                                Promise.all([
                                    v.e(1345),
                                    v.e(7343),
                                    v.e(6098),
                                    v.e(9729),
                                    v.e(8983),
                                    v.e(3029),
                                    v.e(9170),
                                ]).then(() => () => v(19170))
                            ),
                            i('@retrolab/ui-components', '0.3.21', () =>
                                Promise.all([
                                    v.e(1644),
                                    v.e(9729),
                                ]).then(() => () => v(11644))
                            ),
                            i('codemirror', '5.61.1', () =>
                                v.e(5747).then(() => () => v(25747))
                            ),
                            i('react-dom', '17.0.2', () =>
                                Promise.all([
                                    v.e(2287),
                                    v.e(2471),
                                ]).then(() => () => v(42287))
                            ),
                            i('react-highlighter', '0.4.3', () =>
                                Promise.all([
                                    v.e(7058),
                                    v.e(2471),
                                ]).then(() => () => v(87058))
                            ),
                            i('react-json-tree', '0.15.2', () =>
                                Promise.all([
                                    v.e(4615),
                                    v.e(2471),
                                ]).then(() => () => v(34615))
                            ),
                            i('react', '17.0.2', () =>
                                v.e(7427).then(() => () => v(47427))
                            ),
                            i('typestyle', '2.4.0', () =>
                                v.e(1163).then(() => () => v(91163))
                            ),
                            i('vega-embed', '6.21.0', () =>
                                Promise.all([
                                    v.e(44),
                                    v.e(1214),
                                    v.e(123),
                                ]).then(() => () => v(30044))
                            ),
                            i('vega-lite', '5.5.0', () =>
                                Promise.all([
                                    v.e(61),
                                    v.e(1725),
                                    v.e(1214),
                                    v.e(8542),
                                ]).then(() => () => v(71725))
                            ),
                            i('vega', '5.22.1', () =>
                                Promise.all([
                                    v.e(61),
                                    v.e(1895),
                                    v.e(4191),
                                ]).then(() => () => v(21895))
                            ),
                            i('yjs', '13.5.43', () =>
                                Promise.all([
                                    v.e(6879),
                                    v.e(1221),
                                    v.e(4535),
                                ]).then(() => () => v(61221))
                            )),
                        (e[l] = s.length
                            ? Promise.all(s).then(() => (e[l] = 1))
                            : 1)
                    );
                }
            };
        })(),
        (() => {
            var e;
            v.g.importScripts && (e = v.g.location + '');
            var t = v.g.document;
            if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
                var l = t.getElementsByTagName('script');
                l.length && (e = l[l.length - 1].src);
            }
            if (!e)
                throw new Error(
                    'Automatic publicPath is not supported in this browser'
                );
            (e = e
                .replace(/#.*$/, '')
                .replace(/\?.*$/, '')
                .replace(/\/[^\/]+$/, '/')),
                (v.p = e + '../');
        })(),
        (r = e => {
            var t = e => e.split('.').map(e => (+e == e ? +e : e)),
                l = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
                a = l[1] ? t(l[1]) : [];
            return (
                l[2] && (a.length++, a.push.apply(a, t(l[2]))),
                l[3] && (a.push([]), a.push.apply(a, t(l[3]))),
                a
            );
        }),
        (n = (e, t) => {
            (e = r(e)), (t = r(t));
            for (var l = 0; ; ) {
                if (l >= e.length)
                    return l < t.length && 'u' != (typeof t[l])[0];
                var a = e[l],
                    n = (typeof a)[0];
                if (l >= t.length) return 'u' == n;
                var o = t[l],
                    i = (typeof o)[0];
                if (n != i)
                    return ('o' == n && 'n' == i) || 's' == i || 'u' == n;
                if ('o' != n && 'u' != n && a != o) return a < o;
                l++;
            }
        }),
        (o = e => {
            var t = e[0],
                l = '';
            if (1 === e.length) return '*';
            if (t + 0.5) {
                l +=
                    0 == t
                        ? '>='
                        : -1 == t
                        ? '<'
                        : 1 == t
                        ? '^'
                        : 2 == t
                        ? '~'
                        : t > 0
                        ? '='
                        : '!=';
                for (var a = 1, r = 1; r < e.length; r++)
                    a--,
                        (l +=
                            'u' == (typeof (i = e[r]))[0]
                                ? '-'
                                : (a > 0 ? '.' : '') + ((a = 2), i));
                return l;
            }
            var n = [];
            for (r = 1; r < e.length; r++) {
                var i = e[r];
                n.push(
                    0 === i
                        ? 'not(' + s() + ')'
                        : 1 === i
                        ? '(' + s() + ' || ' + s() + ')'
                        : 2 === i
                        ? n.pop() + ' ' + n.pop()
                        : o(i)
                );
            }
            return s();
            function s() {
                return n.pop().replace(/^\((.+)\)$/, '$1');
            }
        }),
        (i = (e, t) => {
            if (0 in e) {
                t = r(t);
                var l = e[0],
                    a = l < 0;
                a && (l = -l - 1);
                for (var n = 0, o = 1, s = !0; ; o++, n++) {
                    var u,
                        d,
                        b = o < e.length ? (typeof e[o])[0] : '';
                    if (n >= t.length || 'o' == (d = (typeof (u = t[n]))[0]))
                        return !s || ('u' == b ? o > l && !a : ('' == b) != a);
                    if ('u' == d) {
                        if (!s || 'u' != b) return !1;
                    } else if (s)
                        if (b == d)
                            if (o <= l) {
                                if (u != e[o]) return !1;
                            } else {
                                if (a ? u > e[o] : u < e[o]) return !1;
                                u != e[o] && (s = !1);
                            }
                        else if ('s' != b && 'n' != b) {
                            if (a || o <= l) return !1;
                            (s = !1), o--;
                        } else {
                            if (o <= l || d < b != a) return !1;
                            s = !1;
                        }
                    else 's' != b && 'n' != b && ((s = !1), o--);
                }
            }
            var m = [],
                f = m.pop.bind(m);
            for (n = 1; n < e.length; n++) {
                var p = e[n];
                m.push(
                    1 == p ? f() | f() : 2 == p ? f() & f() : p ? i(p, t) : !f()
                );
            }
            return !!f();
        }),
        (s = (e, t) => {
            var l = e[t];
            return Object.keys(l).reduce(
                (e, t) => (!e || (!l[e].loaded && n(e, t)) ? t : e),
                0
            );
        }),
        (u = (e, t, l, a) =>
            'Unsatisfied version ' +
            l +
            ' from ' +
            (l && e[t][l].from) +
            ' of shared singleton module ' +
            t +
            ' (required ' +
            o(a) +
            ')'),
        (d = (e, t, l, a) => {
            var r = s(e, l);
            return (
                i(a, r) ||
                    ('undefined' != typeof console &&
                        console.warn &&
                        console.warn(u(e, l, r, a))),
                m(e[l][r])
            );
        }),
        (b = (e, t, l) => {
            var a = e[t];
            return (
                (t = Object.keys(a).reduce(
                    (e, t) => (!i(l, t) || (e && !n(e, t)) ? e : t),
                    0
                )) && a[t]
            );
        }),
        (m = e => ((e.loaded = 1), e.get())),
        (p = (f = e =>
            function(t, l, a, r) {
                var n = v.I(t);
                return n && n.then
                    ? n.then(e.bind(e, t, v.S[t], l, a, r))
                    : e(t, v.S[t], l, a, r);
            })((e, t, l, a, r) => (t && v.o(t, l) ? d(t, 0, l, a) : r()))),
        (c = f((e, t, l, a, r) => {
            var n = t && v.o(t, l) && b(t, l, a);
            return n ? m(n) : r();
        })),
        (h = {}),
        (P = {
            96801: () =>
                p('default', '@jupyterlab/coreutils', [2, 5, 5, 2], () =>
                    Promise.all([
                        v.e(8101),
                        v.e(6169),
                        v.e(2798),
                        v.e(5126),
                    ]).then(() => () => v(54705))
                ),
            12867: () =>
                p('default', '@jupyterlab/application', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(812),
                        v.e(9198),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2798),
                        v.e(6801),
                        v.e(1743),
                        v.e(814),
                        v.e(7442),
                        v.e(1313),
                        v.e(4064),
                        v.e(5610),
                        v.e(9116),
                        v.e(3765),
                    ]).then(() => () => v(79198))
                ),
            57901: () =>
                c(
                    'default',
                    '@jupyterlite/server',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(1079),
                            v.e(6169),
                            v.e(2798),
                            v.e(5610),
                            v.e(3765),
                            v.e(4410),
                        ]).then(() => () => v(71245))
                ),
            33663: () =>
                c(
                    'default',
                    '@jupyterlab/docmanager-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(3392),
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(6098),
                            v.e(3892),
                            v.e(9729),
                            v.e(2471),
                            v.e(3979),
                            v.e(2867),
                            v.e(9934),
                            v.e(1123),
                            v.e(8073),
                        ]).then(() => () => v(90509))
                ),
            4957: () =>
                c(
                    'default',
                    '@jupyterlab/codemirror-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(3979),
                            v.e(2867),
                            v.e(5101),
                            v.e(9934),
                            v.e(1972),
                            v.e(3160),
                            v.e(7951),
                            v.e(1981),
                            v.e(6493),
                        ]).then(() => () => v(66493))
                ),
            8817: () =>
                c(
                    'default',
                    '@jupyterlab/shortcuts-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(2212),
                            v.e(6169),
                            v.e(1345),
                            v.e(6098),
                            v.e(3892),
                            v.e(9729),
                            v.e(2471),
                            v.e(3979),
                            v.e(1743),
                            v.e(3349),
                            v.e(375),
                            v.e(6831),
                            v.e(8300),
                        ]).then(() => () => v(52212))
                ),
            16478: () =>
                c(
                    'default',
                    '@jupyterlab/mainmenu-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(7463),
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(6098),
                            v.e(3892),
                            v.e(9729),
                            v.e(3979),
                            v.e(2867),
                            v.e(5101),
                            v.e(5610),
                        ]).then(() => () => v(97463))
                ),
            18985: () =>
                c(
                    'default',
                    '@jupyterlab/console-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(4117),
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(3892),
                            v.e(9729),
                            v.e(3979),
                            v.e(2867),
                            v.e(1743),
                            v.e(814),
                            v.e(5101),
                            v.e(2527),
                            v.e(9116),
                            v.e(1972),
                            v.e(8983),
                            v.e(5150),
                        ]).then(() => () => v(14117))
                ),
            28057: () =>
                c(
                    'default',
                    '@jupyterlab/filebrowser-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(9806),
                            v.e(1345),
                            v.e(7343),
                            v.e(3892),
                            v.e(9729),
                            v.e(3979),
                            v.e(2867),
                            v.e(9934),
                            v.e(4176),
                            v.e(1123),
                            v.e(375),
                            v.e(8983),
                        ]).then(() => () => v(59806))
                ),
            41802: () =>
                c(
                    'default',
                    '@jupyterlab/theme-light-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(7746),
                        ]).then(() => () => v(37746))
                ),
            43229: () =>
                c(
                    'default',
                    '@jupyterlab/apputils-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(4856),
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(6098),
                            v.e(3892),
                            v.e(9729),
                            v.e(3979),
                            v.e(2867),
                            v.e(1743),
                            v.e(7442),
                            v.e(5101),
                            v.e(1313),
                            v.e(4176),
                            v.e(375),
                            v.e(8983),
                        ]).then(() => () => v(74856))
                ),
            47791: () =>
                c(
                    'default',
                    '@jupyterlab/translation-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(3979),
                            v.e(2867),
                            v.e(5101),
                            v.e(1440),
                        ]).then(() => () => v(61440))
                ),
            49712: () =>
                c(
                    'default',
                    '@jupyterlab/tooltip-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(6098),
                            v.e(3892),
                            v.e(814),
                            v.e(8099),
                            v.e(2527),
                            v.e(3160),
                            v.e(129),
                            v.e(213),
                        ]).then(() => () => v(28232))
                ),
            63128: () =>
                c(
                    'default',
                    '@jupyterlab/rendermime-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(814),
                            v.e(1123),
                            v.e(824),
                        ]).then(() => () => v(40824))
                ),
            71595: () =>
                c(
                    'default',
                    '@jupyterlite/application-extension',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(6571),
                            v.e(1345),
                            v.e(7343),
                            v.e(6098),
                            v.e(3892),
                            v.e(9729),
                            v.e(2471),
                            v.e(2867),
                            v.e(5101),
                            v.e(1123),
                            v.e(8983),
                            v.e(9201),
                            v.e(8073),
                            v.e(9960),
                        ]).then(() => () => v(2557))
                ),
            71935: () =>
                c(
                    'default',
                    '@jupyterlab/theme-dark-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(9307),
                        ]).then(() => () => v(59307))
                ),
            79649: () =>
                c(
                    'default',
                    '@jupyterlab/mathjax2-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(814),
                            v.e(7053),
                            v.e(9622),
                        ]).then(() => () => v(60152))
                ),
            87001: () =>
                c(
                    'default',
                    '@jupyterlab/completer-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(6098),
                            v.e(3892),
                            v.e(8099),
                            v.e(2527),
                            v.e(3160),
                            v.e(240),
                        ]).then(() => () => v(10240))
                ),
            88902: () =>
                c(
                    'default',
                    '@jupyterlab/application-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(316),
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(6098),
                            v.e(3892),
                            v.e(9729),
                            v.e(2471),
                            v.e(3979),
                            v.e(2867),
                            v.e(1743),
                            v.e(4176),
                            v.e(3889),
                        ]).then(() => () => v(30316))
                ),
            11805: () =>
                c(
                    'default',
                    '@jupyterlab/cell-toolbar-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(3979),
                            v.e(5155),
                        ]).then(() => () => v(15155))
                ),
            3444: () =>
                c(
                    'default',
                    '@jupyterlab/fileeditor-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(6136),
                            v.e(1345),
                            v.e(7343),
                            v.e(6098),
                            v.e(9729),
                            v.e(3979),
                            v.e(2867),
                            v.e(5101),
                            v.e(9934),
                            v.e(2527),
                            v.e(1972),
                            v.e(3160),
                            v.e(8983),
                            v.e(5150),
                        ]).then(() => () => v(46136))
                ),
            1199: () =>
                c(
                    'default',
                    '@jupyterlab/notebook-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(4875),
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(6098),
                            v.e(3892),
                            v.e(9729),
                            v.e(3979),
                            v.e(2867),
                            v.e(1743),
                            v.e(814),
                            v.e(5101),
                            v.e(8099),
                            v.e(9934),
                            v.e(4176),
                            v.e(1123),
                            v.e(4064),
                            v.e(5610),
                            v.e(1972),
                            v.e(8983),
                            v.e(5150),
                            v.e(9873),
                            v.e(3889),
                            v.e(3639),
                        ]).then(() => () => v(94206))
                ),
            36911: () =>
                c(
                    'default',
                    '@jupyterlite/iframe-extension',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(6169),
                            v.e(6098),
                            v.e(6141),
                        ]).then(() => () => v(86141))
                ),
            95214: () =>
                c('default', '@jupyterlab/vega5-extension', [2, 3, 5, 2], () =>
                    Promise.all([v.e(6098), v.e(9712)]).then(() => () =>
                        v(79712)
                    )
                ),
            75022: () =>
                c('default', '@jupyterlab/json-extension', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(9729),
                        v.e(2471),
                        v.e(7711),
                        v.e(3880),
                    ]).then(() => () => v(63880))
                ),
            81944: () =>
                c(
                    'default',
                    '@jupyterlab/javascript-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([v.e(814), v.e(1113)]).then(() => () =>
                            v(41113)
                        )
                ),
            28: () =>
                c(
                    'default',
                    '@jupyterlab/settingeditor-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(9729),
                            v.e(3979),
                            v.e(814),
                            v.e(4176),
                            v.e(1972),
                            v.e(989),
                        ]).then(() => () => v(80989))
                ),
            13453: () =>
                c(
                    'default',
                    '@jupyterlab/celltags-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(8099),
                            v.e(8981),
                        ]).then(() => () => v(98981))
                ),
            26784: () =>
                c(
                    'default',
                    '@jupyterlab/htmlviewer-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(9729),
                            v.e(3979),
                            v.e(5742),
                            v.e(9793),
                        ]).then(() => () => v(89793))
                ),
            34377: () =>
                c('default', '@jupyterlab/pdf-extension', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(6098),
                        v.e(1743),
                        v.e(490),
                    ]).then(() => () => v(80490))
                ),
            35621: () =>
                c(
                    'default',
                    '@jupyterlab/launcher-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(3892),
                            v.e(9729),
                            v.e(5150),
                            v.e(9626),
                        ]).then(() => () => v(79626))
                ),
            37715: () =>
                c(
                    'default',
                    '@jupyterlab/csvviewer-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(2798),
                            v.e(3979),
                            v.e(7442),
                            v.e(5101),
                            v.e(917),
                            v.e(901),
                            v.e(2238),
                            v.e(5971),
                        ]).then(() => () => v(15971))
                ),
            55641: () =>
                c(
                    'default',
                    '@jupyterlab/logconsole-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(9266),
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(9729),
                            v.e(2798),
                            v.e(2471),
                            v.e(3979),
                            v.e(814),
                            v.e(8099),
                            v.e(9934),
                            v.e(3639),
                        ]).then(() => () => v(9266))
                ),
            65256: () =>
                c(
                    'default',
                    '@jupyterlab/imageviewer-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(56),
                            v.e(5129),
                        ]).then(() => () => v(25129))
                ),
            67105: () =>
                c(
                    'default',
                    '@jupyterlab/markdownviewer-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(3979),
                            v.e(814),
                            v.e(3074),
                            v.e(6985),
                        ]).then(() => () => v(46985))
                ),
            67143: () =>
                c('default', '@jupyterlab/help-extension', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6770),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(9729),
                        v.e(2798),
                        v.e(2471),
                        v.e(5101),
                        v.e(5610),
                        v.e(3383),
                    ]).then(() => () => v(93979))
                ),
            68225: () =>
                c(
                    'default',
                    '@jupyterlab/inspector-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(9729),
                            v.e(8099),
                            v.e(2527),
                            v.e(5150),
                            v.e(4209),
                            v.e(7174),
                        ]).then(() => () => v(17174))
                ),
            69953: () =>
                c(
                    'default',
                    '@jupyterlab/documentsearch-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(3979),
                            v.e(917),
                            v.e(9035),
                        ]).then(() => () => v(59035))
                ),
            70141: () =>
                c(
                    'default',
                    '@jupyterlab/statusbar-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(7343),
                            v.e(9729),
                            v.e(3979),
                            v.e(8099),
                            v.e(9934),
                            v.e(2527),
                            v.e(375),
                            v.e(3160),
                            v.e(4715),
                        ]).then(() => () => v(54715))
                ),
            82788: () =>
                c(
                    'default',
                    '@jupyterlab/running-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([
                            v.e(1345),
                            v.e(3892),
                            v.e(9729),
                            v.e(2798),
                            v.e(7442),
                            v.e(3029),
                            v.e(1667),
                        ]).then(() => () => v(51667))
                ),
            84471: () =>
                c('default', '@jupyterlab/toc-extension', [2, 5, 5, 2], () =>
                    Promise.all([
                        v.e(1345),
                        v.e(9729),
                        v.e(3979),
                        v.e(814),
                        v.e(8099),
                        v.e(1123),
                        v.e(3160),
                        v.e(9873),
                        v.e(3074),
                        v.e(7341),
                        v.e(833),
                    ]).then(() => () => v(80833))
                ),
            89908: () =>
                c(
                    'default',
                    '@jupyterlab/ui-components-extension',
                    [2, 3, 5, 2],
                    () =>
                        Promise.all([v.e(9729), v.e(9733)]).then(() => () =>
                            v(69733)
                        )
                ),
            26169: () =>
                p('default', '@lumino/coreutils', [2, 1, 12, 1], () =>
                    v.e(8883).then(() => () => v(28883))
                ),
            61345: () =>
                p('default', '@jupyterlab/translation', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(2047),
                        v.e(6169),
                        v.e(6801),
                        v.e(4176),
                        v.e(5610),
                    ]).then(() => () => v(52047))
                ),
            47343: () =>
                p('default', '@jupyterlab/apputils', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6623),
                        v.e(6169),
                        v.e(1345),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(3979),
                        v.e(1743),
                        v.e(1313),
                        v.e(4176),
                        v.e(4064),
                        v.e(5610),
                        v.e(9116),
                        v.e(3349),
                        v.e(8205),
                        v.e(375),
                        v.e(7711),
                        v.e(3752),
                    ]).then(() => () => v(96623))
                ),
            86098: () =>
                p('default', '@lumino/widgets', [2, 1, 36, 0], () =>
                    Promise.all([
                        v.e(5666),
                        v.e(6169),
                        v.e(3892),
                        v.e(2798),
                        v.e(1743),
                        v.e(4064),
                        v.e(9116),
                        v.e(3349),
                        v.e(375),
                        v.e(3383),
                        v.e(8418),
                        v.e(6831),
                    ]).then(() => () => v(75666))
                ),
            43892: () =>
                p('default', '@lumino/algorithm', [2, 1, 9, 2], () =>
                    v.e(9943).then(() => () => v(99943))
                ),
            99729: () =>
                p('default', '@jupyterlab/ui-components', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(2161),
                        v.e(3976),
                        v.e(6169),
                        v.e(1345),
                        v.e(6098),
                        v.e(3892),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(1743),
                        v.e(3383),
                        v.e(7711),
                    ]).then(() => () => v(33976))
                ),
            62471: () =>
                p('default', 'react', [1, 17, 0, 2], () =>
                    v.e(7427).then(() => () => v(47427))
                ),
            53979: () =>
                p('default', '@jupyterlab/settingregistry', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(4658),
                        v.e(7537),
                        v.e(8270),
                        v.e(6169),
                        v.e(2798),
                        v.e(1743),
                        v.e(375),
                    ]).then(() => () => v(98270))
                ),
            21743: () =>
                p('default', '@lumino/disposable', [2, 1, 10, 3], () =>
                    Promise.all([
                        v.e(3892),
                        v.e(2798),
                        v.e(5851),
                    ]).then(() => () => v(35851))
                ),
            64176: () =>
                p('default', '@jupyterlab/statedb', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(1325),
                        v.e(6169),
                        v.e(2798),
                        v.e(9116),
                    ]).then(() => () => v(91325))
                ),
            93889: () =>
                c(
                    'default',
                    '@jupyterlab/property-inspector',
                    [1, 3, 5, 2],
                    () =>
                        Promise.all([v.e(2798), v.e(9464)]).then(() => () =>
                            v(21295)
                        )
                ),
            32798: () =>
                p('default', '@lumino/signaling', [2, 1, 11, 0], () =>
                    Promise.all([
                        v.e(3892),
                        v.e(9116),
                        v.e(8389),
                    ]).then(() => () => v(38389))
                ),
            80814: () =>
                p('default', '@jupyterlab/rendermime', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(1520),
                        v.e(1767),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(2798),
                        v.e(6801),
                        v.e(8205),
                        v.e(7951),
                        v.e(4670),
                        v.e(9438),
                    ]).then(() => () => v(81767))
                ),
            87442: () =>
                c('default', '@jupyterlab/docregistry', [1, 3, 5, 2], () =>
                    Promise.all([
                        v.e(7941),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2798),
                        v.e(6801),
                        v.e(1743),
                        v.e(814),
                        v.e(4064),
                        v.e(1972),
                        v.e(7951),
                        v.e(8262),
                        v.e(8073),
                    ]).then(() => () => v(17941))
                ),
            61313: () =>
                c('default', '@lumino/polling', [1, 1, 9, 0], () =>
                    Promise.all([
                        v.e(8594),
                        v.e(6169),
                        v.e(2798),
                    ]).then(() => () => v(18594))
                ),
            14064: () =>
                p('default', '@lumino/messaging', [2, 1, 10, 3], () =>
                    v.e(3850).then(() => () => v(23850))
                ),
            55610: () =>
                p('default', '@jupyterlab/services', [2, 6, 5, 2], () =>
                    Promise.all([
                        v.e(6591),
                        v.e(3892),
                        v.e(2798),
                        v.e(6801),
                        v.e(1743),
                        v.e(1313),
                        v.e(4176),
                        v.e(4507),
                    ]).then(() => () => v(76591))
                ),
            89116: () =>
                p('default', '@lumino/properties', [2, 1, 8, 2], () =>
                    v.e(1555).then(() => () => v(21555))
                ),
            63765: () =>
                p('default', '@lumino/application', [2, 1, 31, 0], () =>
                    Promise.all([
                        v.e(1278),
                        v.e(6098),
                        v.e(375),
                    ]).then(() => () => v(61278))
                ),
            55101: () =>
                p('default', '@jupyterlab/mainmenu', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(5072),
                    ]).then(() => () => v(55072))
                ),
            90375: () =>
                p('default', '@lumino/commands', [2, 1, 21, 0], () =>
                    Promise.all([
                        v.e(8061),
                        v.e(6169),
                        v.e(3892),
                        v.e(2798),
                        v.e(1743),
                        v.e(3349),
                        v.e(6831),
                    ]).then(() => () => v(38061))
                ),
            88983: () =>
                p('default', '@jupyterlab/filebrowser', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(1489),
                        v.e(6169),
                        v.e(6098),
                        v.e(3892),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(7442),
                        v.e(1313),
                        v.e(9934),
                        v.e(1123),
                        v.e(4064),
                        v.e(5610),
                        v.e(3349),
                        v.e(3383),
                        v.e(8418),
                    ]).then(() => () => v(21489))
                ),
            33349: () =>
                p('default', '@lumino/domutils', [2, 1, 8, 2], () =>
                    v.e(1310).then(() => () => v(71310))
                ),
            18205: () =>
                c('default', '@jupyterlab/observables', [1, 4, 5, 2], () =>
                    Promise.all([
                        v.e(97),
                        v.e(6169),
                        v.e(3892),
                        v.e(1743),
                        v.e(4064),
                    ]).then(() => () => v(60097))
                ),
            37711: () =>
                p('default', 'react-dom', [1, 17, 0, 2], () =>
                    v.e(2287).then(() => () => v(42287))
                ),
            48402: () =>
                p('default', '@jupyterlab/cell-toolbar', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(3892),
                        v.e(2798),
                        v.e(8205),
                        v.e(5508),
                    ]).then(() => () => v(80362))
                ),
            51972: () =>
                p('default', '@jupyterlab/codeeditor', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6747),
                        v.e(6169),
                        v.e(1345),
                        v.e(6098),
                        v.e(9729),
                        v.e(2798),
                        v.e(8205),
                        v.e(8262),
                    ]).then(() => () => v(66747))
                ),
            93383: () =>
                p('default', '@lumino/virtualdom', [2, 1, 14, 3], () =>
                    Promise.all([v.e(5437), v.e(3892)]).then(() => () =>
                        v(75437)
                    )
                ),
            97951: () =>
                p('default', '@jupyterlab/codemirror', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(5747),
                        v.e(8373),
                        v.e(5878),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(1743),
                        v.e(1313),
                        v.e(9934),
                        v.e(1972),
                        v.e(9915),
                        v.e(1981),
                    ]).then(() => () => v(95878))
                ),
            88262: () =>
                p('default', '@jupyterlab/shared-models', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6879),
                        v.e(528),
                        v.e(6993),
                        v.e(9915),
                    ]).then(() => () => v(56993))
                ),
            9073: () =>
                p('default', '@jupyterlab/outputarea', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(3196),
                        v.e(7343),
                        v.e(3892),
                        v.e(5610),
                        v.e(9116),
                        v.e(8205),
                        v.e(4670),
                    ]).then(() => () => v(13196))
                ),
            58099: () =>
                p('default', '@jupyterlab/notebook', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(2030),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(7442),
                        v.e(9934),
                        v.e(4064),
                        v.e(5610),
                        v.e(9116),
                        v.e(3349),
                        v.e(1972),
                        v.e(8205),
                        v.e(3383),
                        v.e(9873),
                        v.e(8418),
                        v.e(8262),
                        v.e(4670),
                    ]).then(() => () => v(92030))
                ),
            8865: () =>
                c('default', '@jupyterlab/celltags', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2798),
                        v.e(5292),
                    ]).then(() => () => v(96997))
                ),
            89934: () =>
                p('default', '@jupyterlab/statusbar', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(2161),
                        v.e(5573),
                        v.e(6169),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2471),
                        v.e(1743),
                    ]).then(() => () => v(65573))
                ),
            83160: () =>
                p('default', '@jupyterlab/fileeditor', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(9729),
                        v.e(2471),
                        v.e(7442),
                        v.e(9934),
                        v.e(1972),
                        v.e(9253),
                    ]).then(() => () => v(9253))
                ),
            41981: () =>
                c('default', 'codemirror', [2, 5, 61, 0], () =>
                    v.e(5747).then(() => () => v(25747))
                ),
            79915: () =>
                p('default', 'yjs', [1, 13, 5, 43], () =>
                    Promise.all([v.e(6879), v.e(1221)]).then(() => () =>
                        v(61221)
                    )
                ),
            12527: () =>
                p('default', '@jupyterlab/console', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(3265),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2798),
                        v.e(6801),
                        v.e(814),
                        v.e(8205),
                        v.e(9873),
                        v.e(8418),
                    ]).then(() => () => v(53469))
                ),
            43610: () =>
                p('default', '@jupyterlab/completer', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(4565),
                        v.e(6169),
                        v.e(7343),
                        v.e(2798),
                        v.e(6801),
                        v.e(4176),
                        v.e(4064),
                        v.e(3349),
                    ]).then(() => () => v(94565))
                ),
            75150: () =>
                p('default', '@jupyterlab/launcher', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(6098),
                        v.e(3892),
                        v.e(2471),
                        v.e(1743),
                        v.e(9116),
                        v.e(261),
                    ]).then(() => () => v(79053))
                ),
            69873: () =>
                c('default', '@jupyterlab/cells', [1, 3, 5, 2], () =>
                    Promise.all([
                        v.e(1520),
                        v.e(4954),
                        v.e(6169),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(814),
                        v.e(1313),
                        v.e(3349),
                        v.e(1972),
                        v.e(8205),
                        v.e(3383),
                        v.e(7951),
                        v.e(8262),
                        v.e(9073),
                    ]).then(() => () => v(14954))
                ),
            18418: () =>
                p('default', '@lumino/dragdrop', [2, 1, 14, 3], () =>
                    Promise.all([v.e(1084), v.e(1743)]).then(() => () =>
                        v(51084)
                    )
                ),
            917: () =>
                p('default', '@jupyterlab/documentsearch', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(8656),
                        v.e(6169),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2798),
                        v.e(2471),
                        v.e(1743),
                        v.e(1313),
                        v.e(8099),
                        v.e(3160),
                        v.e(9873),
                        v.e(7951),
                        v.e(1981),
                    ]).then(() => () => v(38656))
                ),
            90901: () =>
                c('default', '@lumino/datagrid', [2, 0, 36, 0], () =>
                    Promise.all([
                        v.e(920),
                        v.e(6169),
                        v.e(6098),
                        v.e(3892),
                        v.e(4064),
                        v.e(3349),
                        v.e(8418),
                        v.e(6831),
                    ]).then(() => () => v(30920))
                ),
            22238: () =>
                c('default', '@jupyterlab/csvviewer', [1, 3, 5, 2], () =>
                    Promise.all([
                        v.e(2431),
                        v.e(6169),
                        v.e(6098),
                        v.e(3892),
                        v.e(6801),
                    ]).then(() => () => v(82431))
                ),
            11123: () =>
                p('default', '@jupyterlab/docmanager', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6898),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(1743),
                        v.e(7442),
                        v.e(9934),
                        v.e(4064),
                        v.e(9116),
                    ]).then(() => () => v(66898))
                ),
            78073: () =>
                p('default', '@jupyterlab/docprovider', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6879),
                        v.e(528),
                        v.e(1125),
                        v.e(6169),
                        v.e(9915),
                    ]).then(() => () => v(51125))
                ),
            5742: () =>
                c('default', '@jupyterlab/htmlviewer', [1, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(7442),
                        v.e(1838),
                    ]).then(() => () => v(74197))
                ),
            30056: () =>
                p('default', '@jupyterlab/imageviewer', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(6098),
                        v.e(6801),
                        v.e(7442),
                        v.e(1909),
                    ]).then(() => () => v(58165))
                ),
            14209: () =>
                p('default', '@jupyterlab/inspector', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(6098),
                        v.e(2798),
                        v.e(6801),
                        v.e(814),
                        v.e(1313),
                        v.e(4176),
                        v.e(1037),
                    ]).then(() => () => v(49321))
                ),
            45388: () =>
                c('default', 'react-highlighter', [2, 0, 4, 3], () =>
                    v.e(7058).then(() => () => v(87058))
                ),
            65485: () =>
                c('default', 'react-json-tree', [2, 0, 15, 0], () =>
                    v.e(4615).then(() => () => v(34615))
                ),
            13639: () =>
                p('default', '@jupyterlab/logconsole', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(3122),
                        v.e(6098),
                        v.e(2798),
                        v.e(9073),
                    ]).then(() => () => v(3122))
                ),
            33074: () =>
                p('default', '@jupyterlab/markdownviewer', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(7343),
                        v.e(6098),
                        v.e(6801),
                        v.e(7442),
                        v.e(5955),
                    ]).then(() => () => v(22358))
                ),
            77053: () =>
                c('default', '@jupyterlab/mathjax2', [1, 3, 5, 2], () =>
                    Promise.all([v.e(6169), v.e(3469)]).then(() => () =>
                        v(13469)
                    )
                ),
            44670: () =>
                c('default', '@jupyterlab/nbformat', [1, 3, 5, 2], () =>
                    v.e(6080).then(() => () => v(97526))
                ),
            19438: () =>
                p(
                    'default',
                    '@jupyterlab/rendermime-interfaces',
                    [2, 3, 5, 2],
                    () => v.e(4668).then(() => () => v(64668))
                ),
            63029: () =>
                c('default', '@jupyterlab/running', [1, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(7343),
                        v.e(2471),
                        v.e(1743),
                        v.e(6748),
                    ]).then(() => () => v(22319))
                ),
            46831: () =>
                c('default', '@lumino/keyboard', [1, 1, 8, 1], () =>
                    v.e(8990).then(() => () => v(58990))
                ),
            18300: () =>
                c('default', 'typestyle', [1, 2, 0, 4], () =>
                    v.e(1163).then(() => () => v(91163))
                ),
            27341: () =>
                c('default', '@jupyterlab/toc', [1, 5, 5, 2], () =>
                    Promise.all([
                        v.e(8828),
                        v.e(6169),
                        v.e(6098),
                        v.e(2798),
                        v.e(6801),
                        v.e(2471),
                        v.e(3349),
                        v.e(7711),
                    ]).then(() => () => v(6598))
                ),
            80129: () =>
                p('default', '@jupyterlab/tooltip', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(6169),
                        v.e(7343),
                        v.e(509),
                    ]).then(() => () => v(11507))
                ),
            89201: () =>
                c(
                    'default',
                    '@jupyterlite/ui-components',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([v.e(9729), v.e(9958)]).then(() => () =>
                            v(59958)
                        )
                ),
            56255: () =>
                p(
                    'default',
                    '@jupyterlite/kernel',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(1079),
                            v.e(6169),
                            v.e(2798),
                            v.e(5610),
                            v.e(8205),
                            v.e(2546),
                        ]).then(() => () => v(52546))
                ),
            20590: () =>
                p(
                    'default',
                    '@jupyterlite/javascript-kernel',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([v.e(6169), v.e(4226)]).then(() => () =>
                            v(11939)
                        )
                ),
            54281: () =>
                p(
                    'default',
                    '@jupyterlite/contents',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(9737),
                            v.e(6169),
                            v.e(6801),
                            v.e(302),
                        ]).then(() => () => v(40302))
                ),
            8089: () =>
                c(
                    'default',
                    '@jupyterlite/application',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(812),
                            v.e(6169),
                            v.e(1345),
                            v.e(7343),
                            v.e(6098),
                            v.e(3892),
                            v.e(9729),
                            v.e(2798),
                            v.e(6801),
                            v.e(2867),
                            v.e(1743),
                            v.e(814),
                            v.e(7442),
                            v.e(9116),
                            v.e(4905),
                        ]).then(() => () => v(54905))
                ),
            95191: () =>
                c('default', '@retrolab/application', [2, 0, 3, 21], () =>
                    Promise.all([
                        v.e(812),
                        v.e(6169),
                        v.e(1345),
                        v.e(7343),
                        v.e(6098),
                        v.e(3892),
                        v.e(9729),
                        v.e(2798),
                        v.e(2867),
                        v.e(1743),
                        v.e(814),
                        v.e(7442),
                        v.e(1313),
                        v.e(4064),
                        v.e(9116),
                        v.e(783),
                    ]).then(() => () => v(36556))
                ),
            33743: () =>
                p(
                    'default',
                    '@jupyterlite/licenses',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([v.e(6169), v.e(9502)]).then(() => () =>
                            v(89777)
                        )
                ),
            50146: () =>
                p(
                    'default',
                    '@jupyterlite/localforage',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([v.e(6169), v.e(2329)]).then(() => () =>
                            v(2329)
                        )
                ),
            57392: () =>
                c(
                    'default',
                    '@jupyterlite/session',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(6169),
                            v.e(3892),
                            v.e(2887),
                        ]).then(() => () => v(14298))
                ),
            58856: () =>
                c(
                    'default',
                    '@jupyterlite/translation',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([v.e(6169), v.e(7041)]).then(() => () =>
                            v(90816)
                        )
                ),
            65869: () =>
                c(
                    'default',
                    '@jupyterlite/settings',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(7537),
                            v.e(6169),
                            v.e(555),
                        ]).then(() => () => v(53151))
                ),
            24769: () =>
                c('default', '@retrolab/ui-components', [2, 0, 3, 21], () =>
                    Promise.all([v.e(1644), v.e(9729)]).then(() => () =>
                        v(11644)
                    )
                ),
            11214: () =>
                c('default', 'vega', [1, 5, 20, 0], () =>
                    Promise.all([v.e(61), v.e(1895)]).then(() => () => v(21895))
                ),
            40123: () =>
                c('default', 'vega-lite', [1, 5, 1, 0], () =>
                    Promise.all([v.e(61), v.e(1725)]).then(() => () => v(71725))
                ),
            45209: () =>
                c(
                    'default',
                    '@jupyterlite/javascript-kernel-extension',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(6255),
                            v.e(590),
                            v.e(1617),
                        ]).then(() => () => v(91863))
                ),
            67642: () =>
                c(
                    'default',
                    '@jupyterlite/pyolite-kernel-extension',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(6255),
                            v.e(4281),
                            v.e(8816),
                        ]).then(() => () => v(51604))
                ),
            3913: () =>
                c(
                    'default',
                    '@jupyterlite/server-extension',
                    [2, 0, 1, 0, , 'beta', 18],
                    () =>
                        Promise.all([
                            v.e(9440),
                            v.e(6255),
                            v.e(4281),
                            v.e(1299),
                            v.e(8732),
                        ]).then(() => () => v(24931))
                ),
            61881: () =>
                p('default', '@jupyterlab/settingeditor', [2, 3, 5, 2], () =>
                    Promise.all([
                        v.e(4658),
                        v.e(9865),
                        v.e(6098),
                        v.e(3892),
                        v.e(2798),
                        v.e(2471),
                        v.e(1313),
                        v.e(4209),
                    ]).then(() => () => v(19865))
                ),
            59957: () =>
                c('default', 'vega-embed', [1, 6, 2, 1], () =>
                    Promise.all([v.e(44), v.e(1214), v.e(123)]).then(() => () =>
                        v(30044)
                    )
                ),
        }),
        (y = {
            56: [30056],
            93: [
                4957,
                8817,
                16478,
                18985,
                28057,
                41802,
                43229,
                47791,
                49712,
                63128,
                71595,
                71935,
                79649,
                87001,
                88902,
            ],
            123: [40123],
            129: [80129],
            240: [43610],
            375: [90375],
            590: [20590],
            814: [80814],
            901: [90901],
            917: [917],
            1123: [11123],
            1214: [11214],
            1299: [33743, 50146, 57392, 58856, 65869],
            1313: [61313],
            1345: [61345],
            1408: [
                28,
                13453,
                26784,
                34377,
                35621,
                37715,
                55641,
                65256,
                67105,
                67143,
                68225,
                69953,
                70141,
                82788,
                84471,
                89908,
            ],
            1743: [21743],
            1881: [61881],
            1944: [81944],
            1972: [51972],
            1981: [41981],
            2238: [22238],
            2471: [62471],
            2527: [12527],
            2798: [32798],
            2867: [12867],
            3029: [63029],
            3074: [33074],
            3160: [83160],
            3349: [33349],
            3383: [93383],
            3639: [13639],
            3663: [33663],
            3765: [63765],
            3880: [45388, 65485],
            3889: [93889],
            3892: [43892],
            3913: [3913],
            3979: [53979],
            4064: [14064],
            4176: [64176],
            4209: [14209],
            4281: [54281],
            4670: [44670],
            4769: [24769],
            5022: [75022],
            5101: [55101],
            5150: [75150],
            5155: [48402],
            5191: [95191],
            5209: [45209],
            5214: [95214],
            5610: [55610],
            5742: [5742],
            6098: [86098],
            6169: [26169],
            6255: [56255],
            6790: [11805, 3444, 1199],
            6801: [96801],
            6831: [46831],
            6911: [36911],
            7053: [77053],
            7341: [27341],
            7343: [47343],
            7442: [87442],
            7642: [67642],
            7711: [37711],
            7901: [57901],
            7951: [97951],
            8073: [78073],
            8089: [8089],
            8099: [58099],
            8205: [18205],
            8262: [88262],
            8300: [18300],
            8418: [18418],
            8981: [8865],
            8983: [88983],
            9073: [9073],
            9116: [89116],
            9201: [89201],
            9438: [19438],
            9729: [99729],
            9873: [69873],
            9915: [79915],
            9934: [89934],
            9957: [59957],
        }),
        (v.f.consumes = (e, t) => {
            v.o(y, e) &&
                y[e].forEach(e => {
                    if (v.o(h, e)) return t.push(h[e]);
                    var l = t => {
                            (h[e] = 0),
                                (v.m[e] = l => {
                                    delete v.c[e], (l.exports = t());
                                });
                        },
                        a = t => {
                            delete h[e],
                                (v.m[e] = l => {
                                    throw (delete v.c[e], t);
                                });
                        };
                    try {
                        var r = P[e]();
                        r.then ? t.push((h[e] = r.then(l).catch(a))) : l(r);
                    } catch (e) {
                        a(e);
                    }
                });
        }),
        (() => {
            v.b = document.baseURI || self.location.href;
            var e = { 4109: 0 };
            v.f.j = (t, l) => {
                var a = v.o(e, t) ? e[t] : void 0;
                if (0 !== a)
                    if (a) l.push(a[2]);
                    else if (
                        /^(1(2(14|3|9|99)|9(44|72|81)|(12|31|74)3|345|881)|2(238|471|527|798|867)|3((02|34|63|88|97)9|(38|66|91)3|074|160|75|765|892)|4(064|176|209|281|670|769)|5(1(01|50|91)|022|209|214|6|610|742|90)|6((80|83|91)1|098|169|255|790)|7(34[13]|[46]42|(71|90|95)1|053)|8(0(73|89|99)|14|205|262|300|418|983)|9(9(15|34|57)|(|2)01|(|07|87)3|116|17|438|729))$/.test(
                            t
                        )
                    )
                        e[t] = 0;
                    else {
                        var r = new Promise((l, r) => (a = e[t] = [l, r]));
                        l.push((a[2] = r));
                        var n = v.p + v.u(t),
                            o = new Error();
                        v.l(
                            n,
                            l => {
                                if (
                                    v.o(e, t) &&
                                    (0 !== (a = e[t]) && (e[t] = void 0), a)
                                ) {
                                    var r =
                                            l &&
                                            ('load' === l.type
                                                ? 'missing'
                                                : l.type),
                                        n = l && l.target && l.target.src;
                                    (o.message =
                                        'Loading chunk ' +
                                        t +
                                        ' failed.\n(' +
                                        r +
                                        ': ' +
                                        n +
                                        ')'),
                                        (o.name = 'ChunkLoadError'),
                                        (o.type = r),
                                        (o.request = n),
                                        a[1](o);
                                }
                            },
                            'chunk-' + t,
                            t
                        );
                    }
            };
            var t = (t, l) => {
                    var a,
                        r,
                        [n, o, i] = l,
                        s = 0;
                    if (n.some(t => 0 !== e[t])) {
                        for (a in o) v.o(o, a) && (v.m[a] = o[a]);
                        i && i(v);
                    }
                    for (t && t(l); s < n.length; s++)
                        (r = n[s]), v.o(e, r) && e[r] && e[r][0](), (e[r] = 0);
                },
                l = (self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
                    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []);
            l.forEach(t.bind(null, 0)), (l.push = t.bind(null, l.push.bind(l)));
        })(),
        (v.nc = void 0);
    var x = v(304);
    (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB).CORE_OUTPUT = x;
})();
//# sourceMappingURL=bundle.js.map?_=9e1e38e
