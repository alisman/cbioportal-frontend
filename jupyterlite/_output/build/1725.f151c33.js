(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1725],
    {
        85850: e => {
            e.exports = {
                name: 'vega-lite',
                author:
                    'Dominik Moritz, Kanit "Ham" Wongsuphasawat, Arvind Satyanarayan, Jeffrey Heer',
                version: '5.5.0',
                collaborators: [
                    'Kanit Wongsuphasawat (http://kanitw.yellowpigz.com)',
                    'Dominik Moritz (https://www.domoritz.de)',
                    'Arvind Satyanarayan (https://arvindsatya.com)',
                    'Jeffrey Heer (https://jheer.org)',
                ],
                homepage: 'https://vega.github.io/vega-lite/',
                description:
                    'Vega-Lite is a concise high-level language for interactive visualization.',
                keywords: ['vega', 'chart', 'visualization'],
                main: 'build/vega-lite.js',
                unpkg: 'build/vega-lite.min.js',
                jsdelivr: 'build/vega-lite.min.js',
                module: 'build/src/index',
                types: 'build/src/index.d.ts',
                bin: {
                    vl2png: './bin/vl2png',
                    vl2svg: './bin/vl2svg',
                    vl2pdf: './bin/vl2pdf',
                    vl2vg: './bin/vl2vg',
                },
                files: ['bin', 'build', 'src', 'vega-lite*', 'tsconfig.json'],
                scripts: {
                    changelog: 'conventional-changelog -p angular -r 2',
                    prebuild: 'yarn clean:build',
                    build: 'yarn build:only',
                    'build:only': 'tsc -p tsconfig.build.json && rollup -c',
                    'prebuild:examples': 'yarn build:only',
                    'build:examples':
                        'yarn data && TZ=America/Los_Angeles scripts/build-examples.sh',
                    'prebuild:examples-full': 'yarn build:only',
                    'build:examples-full':
                        'TZ=America/Los_Angeles scripts/build-examples.sh 1',
                    'build:example':
                        'TZ=America/Los_Angeles scripts/build-example.sh',
                    'build:toc': 'yarn build:jekyll && scripts/generate-toc',
                    'build:site': 'rollup -c site/rollup.config.js',
                    'build:jekyll':
                        'pushd site && bundle exec jekyll build -q && popd',
                    'build:versions': 'scripts/update-version.sh',
                    clean:
                        "yarn clean:build && del-cli 'site/data/*' 'examples/compiled/*.png' && find site/examples ! -name 'index.md' ! -name 'data' -type f -delete",
                    'clean:build':
                        "del-cli 'build/*' !build/vega-lite-schema.json",
                    'predeploy:site': 'yarn presite',
                    'deploy:site': 'gh-pages -d site',
                    data:
                        'rsync -r node_modules/vega-datasets/data/* site/data',
                    schema:
                        'mkdir -p build && ts-json-schema-generator -f tsconfig.json -p src/index.ts -t TopLevelSpec --no-type-check --no-ref-encode > build/vega-lite-schema.json && yarn renameschema && cp build/vega-lite-schema.json site/_data/',
                    renameschema: 'scripts/rename-schema.sh',
                    presite:
                        'yarn data && yarn schema && yarn build:site && yarn build:versions && scripts/create-example-pages.sh',
                    site: 'yarn site:only',
                    'site:only':
                        'pushd site && bundle exec jekyll serve -I -l && popd',
                    prettierbase: "prettier '**/*.{md,css,yml}'",
                    eslintbase: 'eslint .',
                    format:
                        'yarn eslintbase --fix && yarn prettierbase --write',
                    lint: 'yarn eslintbase && yarn prettierbase --check',
                    jest: 'NODE_OPTIONS=--experimental-vm-modules npx jest',
                    test:
                        'yarn jest test/ && yarn lint && yarn schema && yarn jest examples/ && yarn test:runtime',
                    'test:cover': 'yarn jest --collectCoverage test/',
                    'test:inspect':
                        'node --inspect-brk --experimental-vm-modules ./node_modules/.bin/jest --runInBand test',
                    'test:runtime':
                        'NODE_OPTIONS=--experimental-vm-modules TZ=America/Los_Angeles npx jest test-runtime/ --config test-runtime/jest-config.json',
                    'test:runtime:generate':
                        'yarn build:only && del-cli test-runtime/resources && VL_GENERATE_TESTS=true yarn test:runtime',
                    watch: 'tsc -p tsconfig.build.json -w',
                    'watch:site': 'yarn build:site -w',
                    'watch:test': 'yarn jest --watch test/',
                    'watch:test:runtime':
                        'NODE_OPTIONS=--experimental-vm-modules TZ=America/Los_Angeles npx jest --watch test-runtime/ --config test-runtime/jest-config.json',
                    release: 'yarn run prebuild && yarn build && yarn shipit',
                    shipit: 'auto shipit',
                },
                repository: {
                    type: 'git',
                    url: 'https://github.com/vega/vega-lite.git',
                },
                license: 'BSD-3-Clause',
                bugs: { url: 'https://github.com/vega/vega-lite/issues' },
                devDependencies: {
                    '@auto-it/conventional-commits': '^10.37.6',
                    '@auto-it/first-time-contributor': '^10.37.6',
                    '@babel/core': '^7.19.1',
                    '@babel/preset-env': '^7.19.1',
                    '@babel/preset-typescript': '^7.18.6',
                    '@rollup/plugin-alias': '^4.0.0',
                    '@rollup/plugin-babel': '^6.0.0',
                    '@rollup/plugin-commonjs': '^23.0.0',
                    '@rollup/plugin-json': '^4.1.0',
                    '@types/jest': '^27.4.1',
                    '@rollup/plugin-node-resolve': '^14.1.0',
                    '@types/chai': '^4.3.3',
                    '@types/d3': '^7.4.0',
                    '@types/mkdirp': '^1.0.2',
                    '@types/pako': '^2.0.0',
                    '@typescript-eslint/eslint-plugin': '^5.38.0',
                    '@typescript-eslint/parser': '^5.38.0',
                    ajv: '^8.11.0',
                    'ajv-formats': '^2.1.1',
                    auto: '^10.37.6',
                    chai: '^4.3.6',
                    cheerio: '^1.0.0-rc.12',
                    'conventional-changelog-cli': '^2.2.2',
                    d3: '^7.6.1',
                    'del-cli': '^5.0.0',
                    eslint: '^8.23.1',
                    'eslint-config-prettier': '^8.5.0',
                    'eslint-plugin-jest': '^27.0.4',
                    'eslint-plugin-prettier': '^4.2.1',
                    'gh-pages': '^4.0.0',
                    jest: '^27.5.1',
                    'highlight.js': '^11.6.0',
                    'jest-dev-server': '^6.1.1',
                    mkdirp: '^1.0.4',
                    pako: '^2.0.4',
                    prettier: '^2.7.1',
                    puppeteer: '^15.0.0',
                    rollup: '^2.79.1',
                    'rollup-plugin-bundle-size': '^1.0.3',
                    'rollup-plugin-sourcemaps': '^0.6.3',
                    'rollup-plugin-terser': '^7.0.2',
                    serve: '^14.0.1',
                    terser: '^5.15.0',
                    'ts-jest': '^29.0.1',
                    'ts-json-schema-generator': '^1.1.1',
                    'vega-cli': '^5.22.1',
                    typescript: '~4.8.3',
                    'vega-datasets': '~2.5.1',
                    'vega-embed': '^6.21.0',
                    'vega-tooltip': '^0.28.0',
                    'yaml-front-matter': '^4.1.1',
                },
                dependencies: {
                    '@types/clone': '~2.1.1',
                    clone: '~2.1.2',
                    'fast-deep-equal': '~3.1.3',
                    'fast-json-stable-stringify': '~2.1.0',
                    'json-stringify-pretty-compact': '~3.0.0',
                    tslib: '~2.4.0',
                    'vega-event-selector': '~3.0.0',
                    'vega-expression': '~5.0.0',
                    'vega-util': '~1.17.0',
                    yargs: '~17.6.0',
                },
                peerDependencies: { vega: '^5.22.0' },
                engines: { node: '>=12' },
            };
        },
        1457: e => {
            var t = (function() {
                'use strict';
                function e(e, t) {
                    return null != t && e instanceof t;
                }
                var t, n, i;
                try {
                    t = Map;
                } catch (e) {
                    t = function() {};
                }
                try {
                    n = Set;
                } catch (e) {
                    n = function() {};
                }
                try {
                    i = Promise;
                } catch (e) {
                    i = function() {};
                }
                function r(o, a, l, c, u) {
                    'object' == typeof a &&
                        ((l = a.depth),
                        (c = a.prototype),
                        (u = a.includeNonEnumerable),
                        (a = a.circular));
                    var f = [],
                        d = [],
                        p = 'undefined' != typeof Buffer;
                    return (
                        void 0 === a && (a = !0),
                        void 0 === l && (l = 1 / 0),
                        (function o(l, g) {
                            if (null === l) return null;
                            if (0 === g) return l;
                            var m, h;
                            if ('object' != typeof l) return l;
                            if (e(l, t)) m = new t();
                            else if (e(l, n)) m = new n();
                            else if (e(l, i))
                                m = new i(function(e, t) {
                                    l.then(
                                        function(t) {
                                            e(o(t, g - 1));
                                        },
                                        function(e) {
                                            t(o(e, g - 1));
                                        }
                                    );
                                });
                            else if (r.__isArray(l)) m = [];
                            else if (r.__isRegExp(l))
                                (m = new RegExp(l.source, s(l))),
                                    l.lastIndex && (m.lastIndex = l.lastIndex);
                            else if (r.__isDate(l)) m = new Date(l.getTime());
                            else {
                                if (p && Buffer.isBuffer(l))
                                    return (
                                        (m = Buffer.allocUnsafe
                                            ? Buffer.allocUnsafe(l.length)
                                            : new Buffer(l.length)),
                                        l.copy(m),
                                        m
                                    );
                                e(l, Error)
                                    ? (m = Object.create(l))
                                    : void 0 === c
                                    ? ((h = Object.getPrototypeOf(l)),
                                      (m = Object.create(h)))
                                    : ((m = Object.create(c)), (h = c));
                            }
                            if (a) {
                                var b = f.indexOf(l);
                                if (-1 != b) return d[b];
                                f.push(l), d.push(m);
                            }
                            for (var v in (e(l, t) &&
                                l.forEach(function(e, t) {
                                    var n = o(t, g - 1),
                                        i = o(e, g - 1);
                                    m.set(n, i);
                                }),
                            e(l, n) &&
                                l.forEach(function(e) {
                                    var t = o(e, g - 1);
                                    m.add(t);
                                }),
                            l)) {
                                var y;
                                h &&
                                    (y = Object.getOwnPropertyDescriptor(h, v)),
                                    (y && null == y.set) ||
                                        (m[v] = o(l[v], g - 1));
                            }
                            if (Object.getOwnPropertySymbols) {
                                var O = Object.getOwnPropertySymbols(l);
                                for (v = 0; v < O.length; v++) {
                                    var x = O[v];
                                    (!(w = Object.getOwnPropertyDescriptor(
                                        l,
                                        x
                                    )) ||
                                        w.enumerable ||
                                        u) &&
                                        ((m[x] = o(l[x], g - 1)),
                                        w.enumerable ||
                                            Object.defineProperty(m, x, {
                                                enumerable: !1,
                                            }));
                                }
                            }
                            if (u) {
                                var j = Object.getOwnPropertyNames(l);
                                for (v = 0; v < j.length; v++) {
                                    var w,
                                        $ = j[v];
                                    ((w = Object.getOwnPropertyDescriptor(
                                        l,
                                        $
                                    )) &&
                                        w.enumerable) ||
                                        ((m[$] = o(l[$], g - 1)),
                                        Object.defineProperty(m, $, {
                                            enumerable: !1,
                                        }));
                                }
                            }
                            return m;
                        })(o, l)
                    );
                }
                function o(e) {
                    return Object.prototype.toString.call(e);
                }
                function s(e) {
                    var t = '';
                    return (
                        e.global && (t += 'g'),
                        e.ignoreCase && (t += 'i'),
                        e.multiline && (t += 'm'),
                        t
                    );
                }
                return (
                    (r.clonePrototype = function(e) {
                        if (null === e) return null;
                        var t = function() {};
                        return (t.prototype = e), new t();
                    }),
                    (r.__objToStr = o),
                    (r.__isDate = function(e) {
                        return 'object' == typeof e && '[object Date]' === o(e);
                    }),
                    (r.__isArray = function(e) {
                        return (
                            'object' == typeof e && '[object Array]' === o(e)
                        );
                    }),
                    (r.__isRegExp = function(e) {
                        return (
                            'object' == typeof e && '[object RegExp]' === o(e)
                        );
                    }),
                    (r.__getRegExpFlags = s),
                    r
                );
            })();
            e.exports && (e.exports = t);
        },
        64351: e => {
            'use strict';
            e.exports = function e(t, n) {
                if (t === n) return !0;
                if (t && n && 'object' == typeof t && 'object' == typeof n) {
                    if (t.constructor !== n.constructor) return !1;
                    var i, r, o;
                    if (Array.isArray(t)) {
                        if ((i = t.length) != n.length) return !1;
                        for (r = i; 0 != r--; ) if (!e(t[r], n[r])) return !1;
                        return !0;
                    }
                    if (t.constructor === RegExp)
                        return t.source === n.source && t.flags === n.flags;
                    if (t.valueOf !== Object.prototype.valueOf)
                        return t.valueOf() === n.valueOf();
                    if (t.toString !== Object.prototype.toString)
                        return t.toString() === n.toString();
                    if (
                        (i = (o = Object.keys(t)).length) !==
                        Object.keys(n).length
                    )
                        return !1;
                    for (r = i; 0 != r--; )
                        if (!Object.prototype.hasOwnProperty.call(n, o[r]))
                            return !1;
                    for (r = i; 0 != r--; ) {
                        var s = o[r];
                        if (!e(t[s], n[s])) return !1;
                    }
                    return !0;
                }
                return t != t && n != n;
            };
        },
        38377: e => {
            'use strict';
            e.exports = function(e, t) {
                t || (t = {}), 'function' == typeof t && (t = { cmp: t });
                var n,
                    i = 'boolean' == typeof t.cycles && t.cycles,
                    r =
                        t.cmp &&
                        ((n = t.cmp),
                        function(e) {
                            return function(t, i) {
                                var r = { key: t, value: e[t] },
                                    o = { key: i, value: e[i] };
                                return n(r, o);
                            };
                        }),
                    o = [];
                return (function e(t) {
                    if (
                        (t &&
                            t.toJSON &&
                            'function' == typeof t.toJSON &&
                            (t = t.toJSON()),
                        void 0 !== t)
                    ) {
                        if ('number' == typeof t)
                            return isFinite(t) ? '' + t : 'null';
                        if ('object' != typeof t) return JSON.stringify(t);
                        var n, s;
                        if (Array.isArray(t)) {
                            for (s = '[', n = 0; n < t.length; n++)
                                n && (s += ','), (s += e(t[n]) || 'null');
                            return s + ']';
                        }
                        if (null === t) return 'null';
                        if (-1 !== o.indexOf(t)) {
                            if (i) return JSON.stringify('__cycle__');
                            throw new TypeError(
                                'Converting circular structure to JSON'
                            );
                        }
                        var a = o.push(t) - 1,
                            l = Object.keys(t).sort(r && r(t));
                        for (s = '', n = 0; n < l.length; n++) {
                            var c = l[n],
                                u = e(t[c]);
                            u &&
                                (s && (s += ','),
                                (s += JSON.stringify(c) + ':' + u));
                        }
                        return o.splice(a, 1), '{' + s + '}';
                    }
                })(e);
            };
        },
        71725: (e, t, n) => {
            'use strict';
            n.r(t),
                n.d(t, {
                    accessPathDepth: () => Y,
                    accessPathWithDatum: () => B,
                    compile: () => sg,
                    contains: () => k,
                    deepEqual: () => b,
                    deleteNestedProperty: () => U,
                    duplicate: () => v,
                    entries: () => q,
                    every: () => D,
                    fieldIntersection: () => T,
                    flatAccessWithDatum: () => J,
                    getFirstDefined: () => Q,
                    hasIntersection: () => E,
                    hash: () => w,
                    internalField: () => ne,
                    isBoolean: () => R,
                    isEmpty: () => A,
                    isEqual: () => _,
                    isInternalField: () => ie,
                    isNullOrFalse: () => $,
                    isNumeric: () => oe,
                    keys: () => M,
                    logicalExpr: () => I,
                    mergeDeep: () => P,
                    never: () => y,
                    normalize: () => Jl,
                    normalizeAngle: () => re,
                    omit: () => x,
                    pick: () => O,
                    prefixGenerator: () => N,
                    removePathFromField: () => K,
                    replaceAll: () => V,
                    replacePathInField: () => X,
                    resetIdCounter: () => te,
                    setEqual: () => C,
                    some: () => S,
                    stringify: () => j,
                    titleCase: () => H,
                    unique: () => z,
                    uniqueId: () => ee,
                    vals: () => L,
                    varName: () => W,
                    version: () => ag,
                });
            var i = n(85850),
                r = n.n(i),
                o = n(68542),
                s = n(1457),
                a = n.n(s),
                l = n(64351),
                c = n.n(l),
                u = n(38377),
                f = n.n(u);
            function d(e) {
                return !!e.or;
            }
            function p(e) {
                return !!e.and;
            }
            function g(e) {
                return !!e.not;
            }
            function m(e, t) {
                if (g(e)) m(e.not, t);
                else if (p(e)) for (const n of e.and) m(n, t);
                else if (d(e)) for (const n of e.or) m(n, t);
                else t(e);
            }
            function h(e, t) {
                return g(e)
                    ? { not: h(e.not, t) }
                    : p(e)
                    ? { and: e.and.map(e => h(e, t)) }
                    : d(e)
                    ? { or: e.or.map(e => h(e, t)) }
                    : t(e);
            }
            const b = c(),
                v = a();
            function y(e) {
                throw new Error(e);
            }
            function O(e, t) {
                const n = {};
                for (const i of t) (0, o.nr)(e, i) && (n[i] = e[i]);
                return n;
            }
            function x(e, t) {
                const n = Object.assign({}, e);
                for (const e of t) delete n[e];
                return n;
            }
            Set.prototype.toJSON = function() {
                return `Set(${[...this].map(e => f()(e)).join(',')})`;
            };
            const j = f();
            function w(e) {
                if ((0, o.hj)(e)) return e;
                const t = (0, o.HD)(e) ? e : f()(e);
                if (t.length < 250) return t;
                let n = 0;
                for (let e = 0; e < t.length; e++)
                    (n = (n << 5) - n + t.charCodeAt(e)), (n &= n);
                return n;
            }
            function $(e) {
                return !1 === e || null === e;
            }
            function k(e, t) {
                return e.includes(t);
            }
            function S(e, t) {
                let n = 0;
                for (const [i, r] of e.entries()) if (t(r, i, n++)) return !0;
                return !1;
            }
            function D(e, t) {
                let n = 0;
                for (const [i, r] of e.entries()) if (!t(r, i, n++)) return !1;
                return !0;
            }
            function P(e, ...t) {
                for (const n of t) F(e, null != n ? n : {});
                return e;
            }
            function F(e, t) {
                for (const n of M(t)) (0, o.iL)(e, n, t[n], !0);
            }
            function z(e, t) {
                const n = [],
                    i = {};
                let r;
                for (const o of e)
                    (r = t(o)), r in i || ((i[r] = 1), n.push(o));
                return n;
            }
            function _(e, t) {
                const n = M(e),
                    i = M(t);
                if (n.length !== i.length) return !1;
                for (const i of n) if (e[i] !== t[i]) return !1;
                return !0;
            }
            function C(e, t) {
                if (e.size !== t.size) return !1;
                for (const n of e) if (!t.has(n)) return !1;
                return !0;
            }
            function E(e, t) {
                for (const n of e) if (t.has(n)) return !0;
                return !1;
            }
            function N(e) {
                const t = new Set();
                for (const n of e) {
                    const e = (0, o._k)(n).map((e, t) =>
                            0 === t ? e : `[${e}]`
                        ),
                        i = e.map((t, n) => e.slice(0, n + 1).join(''));
                    for (const e of i) t.add(e);
                }
                return t;
            }
            function T(e, t) {
                return void 0 === e || void 0 === t || E(N(e), N(t));
            }
            function A(e) {
                return 0 === M(e).length;
            }
            const M = Object.keys,
                L = Object.values,
                q = Object.entries;
            function R(e) {
                return !0 === e || !1 === e;
            }
            function W(e) {
                const t = e.replace(/\W/g, '_');
                return (e.match(/^\d+/) ? '_' : '') + t;
            }
            function I(e, t) {
                return g(e)
                    ? `!(${I(e.not, t)})`
                    : p(e)
                    ? `(${e.and.map(e => I(e, t)).join(') && (')})`
                    : d(e)
                    ? `(${e.or.map(e => I(e, t)).join(') || (')})`
                    : t(e);
            }
            function U(e, t) {
                if (0 === t.length) return !0;
                const n = t.shift();
                return n in e && U(e[n], t) && delete e[n], A(e);
            }
            function H(e) {
                return e.charAt(0).toUpperCase() + e.substr(1);
            }
            function B(e, t = 'datum') {
                const n = (0, o._k)(e),
                    i = [];
                for (let e = 1; e <= n.length; e++) {
                    const r = `[${n
                        .slice(0, e)
                        .map(o.m8)
                        .join('][')}]`;
                    i.push(`${t}${r}`);
                }
                return i.join(' && ');
            }
            function J(e, t = 'datum') {
                return `${t}[${(0, o.m8)((0, o._k)(e).join('.'))}]`;
            }
            function G(e) {
                return e.replace(/(\[|\]|\.|'|")/g, '\\$1');
            }
            function X(e) {
                return `${(0, o._k)(e)
                    .map(G)
                    .join('\\.')}`;
            }
            function V(e, t, n) {
                return e.replace(
                    new RegExp(t.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g'),
                    n
                );
            }
            function K(e) {
                return `${(0, o._k)(e).join('.')}`;
            }
            function Y(e) {
                return e ? (0, o._k)(e).length : 0;
            }
            function Q(...e) {
                for (const t of e) if (void 0 !== t) return t;
            }
            let Z = 42;
            function ee(e) {
                const t = ++Z;
                return e ? String(e) + t : t;
            }
            function te() {
                Z = 42;
            }
            function ne(e) {
                return ie(e) ? e : `__${e}`;
            }
            function ie(e) {
                return e.startsWith('__');
            }
            function re(e) {
                if (void 0 !== e) return ((e % 360) + 360) % 360;
            }
            function oe(e) {
                return !!(0, o.hj)(e) || (!isNaN(e) && !isNaN(parseFloat(e)));
            }
            var se = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            const ae = 'row',
                le = 'column',
                ce = 'facet',
                ue = 'x',
                fe = 'y',
                de = 'x2',
                pe = 'y2',
                ge = 'xOffset',
                me = 'yOffset',
                he = 'radius',
                be = 'radius2',
                ve = 'theta',
                ye = 'theta2',
                Oe = 'latitude',
                xe = 'longitude',
                je = 'latitude2',
                we = 'longitude2',
                $e = 'color',
                ke = 'fill',
                Se = 'stroke',
                De = 'shape',
                Pe = 'size',
                Fe = 'angle',
                ze = 'opacity',
                _e = 'fillOpacity',
                Ce = 'strokeOpacity',
                Ee = 'strokeWidth',
                Ne = 'strokeDash',
                Te = 'text',
                Ae = 'order',
                Me = 'detail',
                Le = 'key',
                qe = 'tooltip',
                Re = 'href',
                We = 'url',
                Ie = 'description',
                Ue = { theta: 1, theta2: 1, radius: 1, radius2: 1 };
            function He(e) {
                return e in Ue;
            }
            const Be = {
                    longitude: 1,
                    longitude2: 1,
                    latitude: 1,
                    latitude2: 1,
                },
                Je = M(Be),
                Ge = Object.assign(
                    Object.assign(
                        Object.assign(
                            Object.assign({}, { x: 1, y: 1, x2: 1, y2: 1 }),
                            Ue
                        ),
                        Be
                    ),
                    {
                        xOffset: 1,
                        yOffset: 1,
                        color: 1,
                        fill: 1,
                        stroke: 1,
                        opacity: 1,
                        fillOpacity: 1,
                        strokeOpacity: 1,
                        strokeWidth: 1,
                        strokeDash: 1,
                        size: 1,
                        angle: 1,
                        shape: 1,
                        order: 1,
                        text: 1,
                        detail: 1,
                        key: 1,
                        tooltip: 1,
                        href: 1,
                        url: 1,
                        description: 1,
                    }
                );
            function Xe(e) {
                return e === $e || e === ke || e === Se;
            }
            const Ve = { row: 1, column: 1, facet: 1 },
                Ke = M(Ve),
                Ye = Object.assign(Object.assign({}, Ge), Ve),
                Qe = M(Ye),
                { order: Ze, detail: et, tooltip: tt } = Ye,
                nt = se(Ye, ['order', 'detail', 'tooltip']),
                { row: it, column: rt, facet: ot } = nt,
                st = se(nt, ['row', 'column', 'facet']);
            function at(e) {
                return !!Ye[e];
            }
            M(nt), M(st);
            const lt = [de, pe, je, we, ye, be];
            function ct(e) {
                return ut(e) !== e;
            }
            function ut(e) {
                switch (e) {
                    case de:
                        return ue;
                    case pe:
                        return fe;
                    case je:
                        return Oe;
                    case we:
                        return xe;
                    case ye:
                        return ve;
                    case be:
                        return he;
                }
                return e;
            }
            function ft(e) {
                if (He(e))
                    switch (e) {
                        case ve:
                            return 'startAngle';
                        case ye:
                            return 'endAngle';
                        case he:
                            return 'outerRadius';
                        case be:
                            return 'innerRadius';
                    }
                return e;
            }
            function dt(e) {
                switch (e) {
                    case ue:
                        return de;
                    case fe:
                        return pe;
                    case Oe:
                        return je;
                    case xe:
                        return we;
                    case ve:
                        return ye;
                    case he:
                        return be;
                }
            }
            function pt(e) {
                switch (e) {
                    case ue:
                    case de:
                        return 'width';
                    case fe:
                    case pe:
                        return 'height';
                }
            }
            function gt(e) {
                switch (e) {
                    case ue:
                        return 'xOffset';
                    case fe:
                        return 'yOffset';
                }
            }
            function mt(e) {
                switch (e) {
                    case 'xOffset':
                        return 'x';
                    case 'yOffset':
                        return 'y';
                }
            }
            const ht = M(Ge),
                {
                    x: bt,
                    y: vt,
                    x2: yt,
                    y2: Ot,
                    xOffset: xt,
                    yOffset: jt,
                    latitude: wt,
                    longitude: $t,
                    latitude2: kt,
                    longitude2: St,
                    theta: Dt,
                    theta2: Pt,
                    radius: Ft,
                    radius2: zt,
                } = Ge,
                _t = se(Ge, [
                    'x',
                    'y',
                    'x2',
                    'y2',
                    'xOffset',
                    'yOffset',
                    'latitude',
                    'longitude',
                    'latitude2',
                    'longitude2',
                    'theta',
                    'theta2',
                    'radius',
                    'radius2',
                ]),
                Ct = M(_t),
                Et = { x: 1, y: 1 },
                Nt = M(Et);
            function Tt(e) {
                return e in Et;
            }
            const At = { theta: 1, radius: 1 },
                Mt = M(At);
            function Lt(e) {
                return 'width' === e ? ue : fe;
            }
            const qt = { xOffset: 1, yOffset: 1 };
            function Rt(e) {
                return e in qt;
            }
            M(qt);
            const {
                    text: Wt,
                    tooltip: It,
                    href: Ut,
                    url: Ht,
                    description: Bt,
                    detail: Jt,
                    key: Gt,
                    order: Xt,
                } = _t,
                Vt = se(_t, [
                    'text',
                    'tooltip',
                    'href',
                    'url',
                    'description',
                    'detail',
                    'key',
                    'order',
                ]),
                Kt = M(Vt),
                Yt = Object.assign(
                    Object.assign(Object.assign(Object.assign({}, Et), At), qt),
                    Vt
                ),
                Qt = M(Yt);
            function Zt(e) {
                return !!Yt[e];
            }
            const en = {
                    arc: 'always',
                    area: 'always',
                    bar: 'always',
                    circle: 'always',
                    geoshape: 'always',
                    image: 'always',
                    line: 'always',
                    rule: 'always',
                    point: 'always',
                    rect: 'always',
                    square: 'always',
                    trail: 'always',
                    text: 'always',
                    tick: 'always',
                },
                { geoshape: tn } = en,
                nn = se(en, ['geoshape']);
            function rn(e) {
                switch (e) {
                    case ue:
                    case fe:
                    case ve:
                    case he:
                    case ge:
                    case me:
                    case Pe:
                    case Fe:
                    case Ee:
                    case ze:
                    case _e:
                    case Ce:
                    case de:
                    case pe:
                    case ye:
                    case be:
                        return;
                    case ce:
                    case ae:
                    case le:
                    case De:
                    case Ne:
                    case Te:
                    case qe:
                    case Re:
                    case We:
                    case Ie:
                        return 'discrete';
                    case $e:
                    case ke:
                    case Se:
                        return 'flexible';
                    case Oe:
                    case xe:
                    case je:
                    case we:
                    case Me:
                    case Le:
                    case Ae:
                        return;
                }
            }
            const on = {
                    argmax: 1,
                    argmin: 1,
                    average: 1,
                    count: 1,
                    distinct: 1,
                    product: 1,
                    max: 1,
                    mean: 1,
                    median: 1,
                    min: 1,
                    missing: 1,
                    q1: 1,
                    q3: 1,
                    ci0: 1,
                    ci1: 1,
                    stderr: 1,
                    stdev: 1,
                    stdevp: 1,
                    sum: 1,
                    valid: 1,
                    values: 1,
                    variance: 1,
                    variancep: 1,
                },
                sn = { count: 1, min: 1, max: 1 };
            function an(e) {
                return !!e && !!e.argmin;
            }
            function ln(e) {
                return !!e && !!e.argmax;
            }
            function cn(e) {
                return (0, o.HD)(e) && !!on[e];
            }
            const un = new Set(['count', 'valid', 'missing', 'distinct']);
            function fn(e) {
                return (0, o.HD)(e) && un.has(e);
            }
            const dn = new Set([
                    'count',
                    'sum',
                    'distinct',
                    'valid',
                    'missing',
                ]),
                pn = new Set([
                    'mean',
                    'average',
                    'median',
                    'q1',
                    'q3',
                    'min',
                    'max',
                ]);
            function gn(e) {
                return (
                    (0, o.jn)(e) && (e = bs(e, void 0)),
                    'bin' +
                        M(e)
                            .map(t =>
                                vn(e[t])
                                    ? W(`_${t}_${q(e[t])}`)
                                    : W(`_${t}_${e[t]}`)
                            )
                            .join('')
                );
            }
            function mn(e) {
                return !0 === e || (bn(e) && !e.binned);
            }
            function hn(e) {
                return 'binned' === e || (bn(e) && !0 === e.binned);
            }
            function bn(e) {
                return (0, o.Kn)(e);
            }
            function vn(e) {
                return null == e ? void 0 : e.param;
            }
            function yn(e) {
                switch (e) {
                    case ae:
                    case le:
                    case Pe:
                    case $e:
                    case ke:
                    case Se:
                    case Ee:
                    case ze:
                    case _e:
                    case Ce:
                    case De:
                        return 6;
                    case Ne:
                        return 4;
                    default:
                        return 10;
                }
            }
            function On(e) {
                return !!(null == e ? void 0 : e.expr);
            }
            function xn(e) {
                const t = M(e || {}),
                    n = {};
                for (const i of t) n[i] = Cn(e[i]);
                return n;
            }
            function jn(e) {
                const {
                        anchor: t,
                        frame: n,
                        offset: i,
                        orient: r,
                        angle: o,
                        limit: s,
                        color: a,
                        subtitleColor: l,
                        subtitleFont: c,
                        subtitleFontSize: u,
                        subtitleFontStyle: f,
                        subtitleFontWeight: d,
                        subtitleLineHeight: p,
                        subtitlePadding: g,
                    } = e,
                    m = (function(e, t) {
                        var n = {};
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                t.indexOf(i) < 0 &&
                                (n[i] = e[i]);
                        if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                        ) {
                            var r = 0;
                            for (
                                i = Object.getOwnPropertySymbols(e);
                                r < i.length;
                                r++
                            )
                                t.indexOf(i[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        i[r]
                                    ) &&
                                    (n[i[r]] = e[i[r]]);
                        }
                        return n;
                    })(e, [
                        'anchor',
                        'frame',
                        'offset',
                        'orient',
                        'angle',
                        'limit',
                        'color',
                        'subtitleColor',
                        'subtitleFont',
                        'subtitleFontSize',
                        'subtitleFontStyle',
                        'subtitleFontWeight',
                        'subtitleLineHeight',
                        'subtitlePadding',
                    ]),
                    h = Object.assign(
                        Object.assign({}, m),
                        a ? { fill: a } : {}
                    ),
                    b = Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            {},
                                            t ? { anchor: t } : {}
                                        ),
                                        n ? { frame: n } : {}
                                    ),
                                    i ? { offset: i } : {}
                                ),
                                r ? { orient: r } : {}
                            ),
                            void 0 !== o ? { angle: o } : {}
                        ),
                        void 0 !== s ? { limit: s } : {}
                    ),
                    v = Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                {},
                                                l ? { subtitleColor: l } : {}
                                            ),
                                            c ? { subtitleFont: c } : {}
                                        ),
                                        u ? { subtitleFontSize: u } : {}
                                    ),
                                    f ? { subtitleFontStyle: f } : {}
                                ),
                                d ? { subtitleFontWeight: d } : {}
                            ),
                            p ? { subtitleLineHeight: p } : {}
                        ),
                        g ? { subtitlePadding: g } : {}
                    );
                return {
                    titleMarkConfig: h,
                    subtitleMarkConfig: O(e, [
                        'align',
                        'baseline',
                        'dx',
                        'dy',
                        'limit',
                    ]),
                    nonMarkTitleProperties: b,
                    subtitle: v,
                };
            }
            function wn(e) {
                return (0, o.HD)(e) || ((0, o.kJ)(e) && (0, o.HD)(e[0]));
            }
            function $n(e) {
                return !!(null == e ? void 0 : e.signal);
            }
            function kn(e) {
                return !!e.step;
            }
            function Sn(e) {
                return !(0, o.kJ)(e) && 'field' in e && 'data' in e;
            }
            const Dn = M({
                    aria: 1,
                    description: 1,
                    ariaRole: 1,
                    ariaRoleDescription: 1,
                    blend: 1,
                    opacity: 1,
                    fill: 1,
                    fillOpacity: 1,
                    stroke: 1,
                    strokeCap: 1,
                    strokeWidth: 1,
                    strokeOpacity: 1,
                    strokeDash: 1,
                    strokeDashOffset: 1,
                    strokeJoin: 1,
                    strokeOffset: 1,
                    strokeMiterLimit: 1,
                    startAngle: 1,
                    endAngle: 1,
                    padAngle: 1,
                    innerRadius: 1,
                    outerRadius: 1,
                    size: 1,
                    shape: 1,
                    interpolate: 1,
                    tension: 1,
                    orient: 1,
                    align: 1,
                    baseline: 1,
                    text: 1,
                    dir: 1,
                    dx: 1,
                    dy: 1,
                    ellipsis: 1,
                    limit: 1,
                    radius: 1,
                    theta: 1,
                    angle: 1,
                    font: 1,
                    fontSize: 1,
                    fontWeight: 1,
                    fontStyle: 1,
                    lineBreak: 1,
                    lineHeight: 1,
                    cursor: 1,
                    href: 1,
                    tooltip: 1,
                    cornerRadius: 1,
                    cornerRadiusTopLeft: 1,
                    cornerRadiusTopRight: 1,
                    cornerRadiusBottomLeft: 1,
                    cornerRadiusBottomRight: 1,
                    aspect: 1,
                    width: 1,
                    height: 1,
                    url: 1,
                    smooth: 1,
                }),
                Pn = {
                    arc: 1,
                    area: 1,
                    group: 1,
                    image: 1,
                    line: 1,
                    path: 1,
                    rect: 1,
                    rule: 1,
                    shape: 1,
                    symbol: 1,
                    text: 1,
                    trail: 1,
                },
                Fn = [
                    'cornerRadius',
                    'cornerRadiusTopLeft',
                    'cornerRadiusTopRight',
                    'cornerRadiusBottomLeft',
                    'cornerRadiusBottomRight',
                ];
            var zn = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            function _n(e) {
                const t = (0, o.kJ)(e.condition)
                    ? e.condition.map(En)
                    : En(e.condition);
                return Object.assign(Object.assign({}, Cn(e)), {
                    condition: t,
                });
            }
            function Cn(e) {
                if (On(e)) {
                    const { expr: t } = e,
                        n = zn(e, ['expr']);
                    return Object.assign({ signal: t }, n);
                }
                return e;
            }
            function En(e) {
                if (On(e)) {
                    const { expr: t } = e,
                        n = zn(e, ['expr']);
                    return Object.assign({ signal: t }, n);
                }
                return e;
            }
            function Nn(e) {
                if (On(e)) {
                    const { expr: t } = e,
                        n = zn(e, ['expr']);
                    return Object.assign({ signal: t }, n);
                }
                return $n(e) ? e : void 0 !== e ? { value: e } : void 0;
            }
            function Tn(e) {
                return $n(e) ? e.signal : (0, o.m8)(e.value);
            }
            function An(e) {
                return $n(e) ? e.signal : null == e ? null : (0, o.m8)(e);
            }
            function Mn(e) {
                var t;
                return [].concat(
                    e.type,
                    null !== (t = e.style) && void 0 !== t ? t : []
                );
            }
            function Ln(e, t, n, i = {}) {
                const { vgChannel: r, ignoreVgConfig: o } = i;
                return r && void 0 !== t[r]
                    ? t[r]
                    : void 0 !== t[e]
                    ? t[e]
                    : !o || (r && r !== e)
                    ? qn(e, t, n, i)
                    : void 0;
            }
            function qn(e, t, n, { vgChannel: i } = {}) {
                return Q(
                    i ? Rn(e, t, n.style) : void 0,
                    Rn(e, t, n.style),
                    i ? n[t.type][i] : void 0,
                    n[t.type][e],
                    i ? n.mark[i] : n.mark[e]
                );
            }
            function Rn(e, t, n) {
                return Wn(e, Mn(t), n);
            }
            function Wn(e, t, n) {
                let i;
                t = (0, o.IX)(t);
                for (const r of t) {
                    const t = n[r];
                    t && void 0 !== t[e] && (i = t[e]);
                }
                return i;
            }
            function In(e, t) {
                return (0, o.IX)(e).reduce(
                    (e, n) => {
                        var i;
                        return (
                            e.field.push(is(n, t)),
                            e.order.push(
                                null !== (i = n.sort) && void 0 !== i
                                    ? i
                                    : 'ascending'
                            ),
                            e
                        );
                    },
                    { field: [], order: [] }
                );
            }
            function Un(e, t) {
                const n = [...e];
                return (
                    t.forEach(e => {
                        for (const t of n) if (b(t, e)) return;
                        n.push(e);
                    }),
                    n
                );
            }
            function Hn(e, t) {
                return b(e, t) || !t
                    ? e
                    : e
                    ? [...(0, o.IX)(e), ...(0, o.IX)(t)].join(', ')
                    : t;
            }
            function Bn(e, t) {
                const n = e.value,
                    i = t.value;
                if (null == n || null === i)
                    return { explicit: e.explicit, value: null };
                if ((wn(n) || $n(n)) && (wn(i) || $n(i)))
                    return { explicit: e.explicit, value: Hn(n, i) };
                if (wn(n) || $n(n)) return { explicit: e.explicit, value: n };
                if (wn(i) || $n(i)) return { explicit: e.explicit, value: i };
                if (!(wn(n) || $n(n) || wn(i) || $n(i)))
                    return { explicit: e.explicit, value: Un(n, i) };
                throw new Error('It should never reach here');
            }
            function Jn(e) {
                return `Invalid specification ${j(
                    e
                )}. Make sure the specification includes at least one of the following properties: "mark", "layer", "facet", "hconcat", "vconcat", "concat", or "repeat".`;
            }
            function Gn(e) {
                return (
                    ('width' == e ? 'Width' : 'Height') +
                    ' "container" only works for single views and layered views.'
                );
            }
            function Xn(e) {
                return `${
                    'width' == e ? 'Width' : 'Height'
                } "container" only works well with autosize "fit" or "fit-${
                    'width' == e ? 'x' : 'y'
                }".`;
            }
            function Vn(e) {
                return e
                    ? `Dropping "fit-${e}" because spec has discrete ${pt(e)}.`
                    : 'Dropping "fit" because spec has discrete size.';
            }
            function Kn(e) {
                return `Unknown field for ${e}. Cannot calculate view size.`;
            }
            function Yn(e) {
                return `Cannot project a selection on encoding channel "${e}", which has no field.`;
            }
            function Qn(e, t) {
                return `Cannot project a selection on encoding channel "${e}" as it uses an aggregate function ("${t}").`;
            }
            function Zn(e) {
                return `Selection not supported for ${e} yet.`;
            }
            function ei(e) {
                return `The "columns" property cannot be used when "${e}" has nested row/column.`;
            }
            function ti(e, t, n) {
                return `An ancestor parsed field "${e}" as ${n} but a child wants to parse the field as ${t}.`;
            }
            function ni(e) {
                return `Config.customFormatTypes is not true, thus custom format type and format for channel ${e} are dropped.`;
            }
            function ii(e) {
                return `${e}Offset dropped because ${e} is continuous`;
            }
            function ri(e) {
                return `There is no ${e} encoding. Replacing ${e}Offset encoding as ${e}.`;
            }
            function oi(e) {
                return `Invalid field type "${e}".`;
            }
            function si(e, t) {
                const { fill: n, stroke: i } = t;
                return `Dropping color ${e} as the plot also has ${
                    n && i ? 'fill and stroke' : n ? 'fill' : 'stroke'
                }.`;
            }
            function ai(e, t) {
                return `Dropping ${j(
                    e
                )} from channel "${t}" since it does not contain any data field, datum, value, or signal.`;
            }
            function li(e, t, n) {
                return `${e} dropped as it is incompatible with "${t}"${
                    n ? ` when ${n}` : ''
                }.`;
            }
            function ci(e) {
                return `${e} encoding has no scale, so specified scale is ignored.`;
            }
            function ui(e) {
                return `${e} encoding should be discrete (ordinal / nominal / binned).`;
            }
            function fi(e) {
                return `${e} encoding should be discrete (ordinal / nominal / binned) or use a discretizing scale (e.g. threshold).`;
            }
            function di(e, t) {
                return `Using discrete channel "${e}" to encode "${t}" field can be misleading as it does not encode ${
                    'ordinal' === t ? 'order' : 'magnitude'
                }.`;
            }
            function pi(e) {
                return `Using unaggregated domain with raw field has no effect (${j(
                    e
                )}).`;
            }
            function gi(e) {
                return `Unaggregated domain not applicable for "${e}" since it produces values outside the origin domain of the source data.`;
            }
            function mi(e) {
                return `Unaggregated domain is currently unsupported for log scale (${j(
                    e
                )}).`;
            }
            function hi(e, t, n) {
                return `${n}-scale's "${t}" is dropped as it does not work with ${e} scale.`;
            }
            function bi(e) {
                return `The step for "${e}" is dropped because the ${
                    'width' === e ? 'x' : 'y'
                } is continuous.`;
            }
            const vi =
                'Domains that should be unioned has conflicting sort properties. Sort will be set to true.';
            function yi(e, t) {
                return `Invalid ${e}: ${j(t)}.`;
            }
            function Oi(e) {
                return `1D error band does not support ${e}.`;
            }
            function xi(e) {
                return `Channel ${e} is required for "binned" bin.`;
            }
            const ji = (0, o.kg)(o.uU);
            let wi = ji;
            function $i(...e) {
                wi.warn(...e);
            }
            function ki(e) {
                if (e && (0, o.Kn)(e))
                    for (const t of Ei) if (t in e) return !0;
                return !1;
            }
            new WeakMap();
            const Si = [
                    'january',
                    'february',
                    'march',
                    'april',
                    'may',
                    'june',
                    'july',
                    'august',
                    'september',
                    'october',
                    'november',
                    'december',
                ],
                Di = Si.map(e => e.substr(0, 3)),
                Pi = [
                    'sunday',
                    'monday',
                    'tuesday',
                    'wednesday',
                    'thursday',
                    'friday',
                    'saturday',
                ],
                Fi = Pi.map(e => e.substr(0, 3));
            function zi(e, t) {
                const n = [];
                if (
                    (t &&
                        void 0 !== e.day &&
                        M(e).length > 1 &&
                        ($i(
                            (function(e) {
                                return `Dropping day from datetime ${j(
                                    e
                                )} as day cannot be combined with other units.`;
                            })(e)
                        ),
                        delete (e = v(e)).day),
                    void 0 !== e.year ? n.push(e.year) : n.push(2012),
                    void 0 !== e.month)
                ) {
                    const i = t
                        ? (function(e) {
                              if ((oe(e) && (e = +e), (0, o.hj)(e)))
                                  return e - 1;
                              {
                                  const t = e.toLowerCase(),
                                      n = Si.indexOf(t);
                                  if (-1 !== n) return n;
                                  const i = t.substr(0, 3),
                                      r = Di.indexOf(i);
                                  if (-1 !== r) return r;
                                  throw new Error(yi('month', e));
                              }
                          })(e.month)
                        : e.month;
                    n.push(i);
                } else if (void 0 !== e.quarter) {
                    const i = t
                        ? (function(e) {
                              if ((oe(e) && (e = +e), (0, o.hj)(e)))
                                  return e > 4 && $i(yi('quarter', e)), e - 1;
                              throw new Error(yi('quarter', e));
                          })(e.quarter)
                        : e.quarter;
                    n.push((0, o.hj)(i) ? 3 * i : `${i}*3`);
                } else n.push(0);
                if (void 0 !== e.date) n.push(e.date);
                else if (void 0 !== e.day) {
                    const i = t
                        ? (function(e) {
                              if ((oe(e) && (e = +e), (0, o.hj)(e)))
                                  return e % 7;
                              {
                                  const t = e.toLowerCase(),
                                      n = Pi.indexOf(t);
                                  if (-1 !== n) return n;
                                  const i = t.substr(0, 3),
                                      r = Fi.indexOf(i);
                                  if (-1 !== r) return r;
                                  throw new Error(yi('day', e));
                              }
                          })(e.day)
                        : e.day;
                    n.push((0, o.hj)(i) ? i + 1 : `${i}+1`);
                } else n.push(1);
                for (const t of [
                    'hours',
                    'minutes',
                    'seconds',
                    'milliseconds',
                ]) {
                    const i = e[t];
                    n.push(void 0 === i ? 0 : i);
                }
                return n;
            }
            function _i(e) {
                const t = zi(e, !0).join(', ');
                return e.utc ? `utc(${t})` : `datetime(${t})`;
            }
            const Ci = {
                    year: 1,
                    quarter: 1,
                    month: 1,
                    week: 1,
                    day: 1,
                    dayofyear: 1,
                    date: 1,
                    hours: 1,
                    minutes: 1,
                    seconds: 1,
                    milliseconds: 1,
                },
                Ei = M(Ci);
            function Ni(e) {
                return e.startsWith('utc');
            }
            const Ti = {
                'year-month': '%b %Y ',
                'year-month-date': '%b %d, %Y ',
            };
            function Ai(e) {
                return Ei.filter(t => Mi(e, t));
            }
            function Mi(e, t) {
                const n = e.indexOf(t);
                return !(
                    n < 0 ||
                    (n > 0 && 'seconds' === t && 'i' === e.charAt(n - 1)) ||
                    (e.length > n + 3 &&
                        'day' === t &&
                        'o' === e.charAt(n + 3)) ||
                    (n > 0 && 'year' === t && 'f' === e.charAt(n - 1))
                );
            }
            function Li(e) {
                if (!e) return;
                const t = Ai(e);
                return `timeUnitSpecifier(${j(t)}, ${j(Ti)})`;
            }
            function qi(e) {
                if (!e) return;
                let t;
                return (
                    (0, o.HD)(e)
                        ? (t = { unit: e })
                        : (0, o.Kn)(e) &&
                          (t = Object.assign(
                              Object.assign({}, e),
                              e.unit ? { unit: e.unit } : {}
                          )),
                    Ni(t.unit) && ((t.utc = !0), (t.unit = t.unit.substr(3))),
                    t
                );
            }
            function Ri(e) {
                return !!(null == e ? void 0 : e.field) && void 0 !== e.equal;
            }
            function Wi(e) {
                return !!(null == e ? void 0 : e.field) && void 0 !== e.lt;
            }
            function Ii(e) {
                return !!(null == e ? void 0 : e.field) && void 0 !== e.lte;
            }
            function Ui(e) {
                return !!(null == e ? void 0 : e.field) && void 0 !== e.gt;
            }
            function Hi(e) {
                return !!(null == e ? void 0 : e.field) && void 0 !== e.gte;
            }
            function Bi(e) {
                if (null == e ? void 0 : e.field) {
                    if ((0, o.kJ)(e.range) && 2 === e.range.length) return !0;
                    if ($n(e.range)) return !0;
                }
                return !1;
            }
            function Ji(e) {
                return (
                    !!(null == e ? void 0 : e.field) &&
                    ((0, o.kJ)(e.oneOf) || (0, o.kJ)(e.in))
                );
            }
            function Gi(e) {
                return (
                    Ji(e) || Ri(e) || Bi(e) || Wi(e) || Ui(e) || Ii(e) || Hi(e)
                );
            }
            function Xi(e, t) {
                return Os(e, { timeUnit: t, wrapTime: !0 });
            }
            function Vi(e, t = !0) {
                var n;
                const { field: i } = e,
                    r =
                        null === (n = qi(e.timeUnit)) || void 0 === n
                            ? void 0
                            : n.unit,
                    o = r
                        ? `time(${(function(e, t, { end: n } = { end: !1 }) {
                              const i = B(t),
                                  r = Ni(e) ? 'utc' : '';
                              let o;
                              const s = {};
                              for (const t of Ei)
                                  Mi(e, t) &&
                                      ((s[t] =
                                          'quarter' === (a = t)
                                              ? `(${r}quarter(${i})-1)`
                                              : `${r}${a}(${i})`),
                                      (o = t));
                              var a;
                              return (
                                  n && (s[o] += '+1'),
                                  (function(e) {
                                      const t = zi(e, !1).join(', ');
                                      return e.utc
                                          ? `utc(${t})`
                                          : `datetime(${t})`;
                                  })(s)
                              );
                          })(r, i)})`
                        : is(e, { expr: 'datum' });
                if (Ri(e)) return `${o}===${Xi(e.equal, r)}`;
                if (Wi(e)) return `${o}<${Xi(e.lt, r)}`;
                if (Ui(e)) return `${o}>${Xi(e.gt, r)}`;
                if (Ii(e)) return `${o}<=${Xi(e.lte, r)}`;
                if (Hi(e)) return `${o}>=${Xi(e.gte, r)}`;
                if (Ji(e))
                    return `indexof([${(function(e, t) {
                        return e.map(e => Xi(e, t));
                    })(e.oneOf, r).join(',')}], ${o}) !== -1`;
                if (
                    (function(e) {
                        return (
                            !!(null == e ? void 0 : e.field) &&
                            void 0 !== e.valid
                        );
                    })(e)
                )
                    return Ki(o, e.valid);
                if (Bi(e)) {
                    const { range: n } = e,
                        i = $n(n) ? { signal: `${n.signal}[0]` } : n[0],
                        s = $n(n) ? { signal: `${n.signal}[1]` } : n[1];
                    if (null !== i && null !== s && t)
                        return (
                            'inrange(' +
                            o +
                            ', [' +
                            Xi(i, r) +
                            ', ' +
                            Xi(s, r) +
                            '])'
                        );
                    const a = [];
                    return (
                        null !== i && a.push(`${o} >= ${Xi(i, r)}`),
                        null !== s && a.push(`${o} <= ${Xi(s, r)}`),
                        a.length > 0 ? a.join(' && ') : 'true'
                    );
                }
                throw new Error(`Invalid field predicate: ${j(e)}`);
            }
            function Ki(e, t = !0) {
                return t
                    ? `isValid(${e}) && isFinite(+${e})`
                    : `!isValid(${e}) || !isFinite(+${e})`;
            }
            function Yi(e) {
                var t;
                return Gi(e) && e.timeUnit
                    ? Object.assign(Object.assign({}, e), {
                          timeUnit:
                              null === (t = qi(e.timeUnit)) || void 0 === t
                                  ? void 0
                                  : t.unit,
                      })
                    : e;
            }
            var Qi = n(11214);
            const Zi = {
                quantitative: 'quantitative',
                ordinal: 'ordinal',
                temporal: 'temporal',
                nominal: 'nominal',
                geojson: 'geojson',
            };
            function er(e) {
                return 'quantitative' === e || 'temporal' === e;
            }
            function tr(e) {
                return 'ordinal' === e || 'nominal' === e;
            }
            const nr = Zi.quantitative,
                ir = Zi.ordinal,
                rr = Zi.temporal,
                or = Zi.nominal,
                sr = Zi.geojson;
            M(Zi);
            const ar = 'time',
                lr = 'utc',
                cr = 'point',
                ur = 'band',
                fr = {
                    linear: 'numeric',
                    log: 'numeric',
                    pow: 'numeric',
                    sqrt: 'numeric',
                    symlog: 'numeric',
                    identity: 'numeric',
                    sequential: 'numeric',
                    time: 'time',
                    utc: 'time',
                    ordinal: 'ordinal',
                    'bin-ordinal': 'bin-ordinal',
                    point: 'ordinal-position',
                    band: 'ordinal-position',
                    quantile: 'discretizing',
                    quantize: 'discretizing',
                    threshold: 'discretizing',
                };
            function dr(e, t) {
                const n = fr[e],
                    i = fr[t];
                return (
                    n === i ||
                    ('ordinal-position' === n && 'time' === i) ||
                    ('ordinal-position' === i && 'time' === n)
                );
            }
            M(fr);
            const pr = {
                linear: 0,
                log: 1,
                pow: 1,
                sqrt: 1,
                symlog: 1,
                identity: 1,
                sequential: 1,
                time: 0,
                utc: 0,
                point: 10,
                band: 11,
                ordinal: 0,
                'bin-ordinal': 0,
                quantile: 0,
                quantize: 0,
                threshold: 0,
            };
            function gr(e) {
                return pr[e];
            }
            const mr = new Set(['linear', 'log', 'pow', 'sqrt', 'symlog']),
                hr = new Set([...mr, 'time', 'utc']);
            function br(e) {
                return mr.has(e);
            }
            const vr = new Set(['quantile', 'quantize', 'threshold']),
                yr = new Set([...hr, ...vr, 'sequential', 'identity']),
                Or = new Set(['ordinal', 'bin-ordinal', 'point', 'band']);
            function xr(e) {
                return Or.has(e);
            }
            function jr(e) {
                return yr.has(e);
            }
            function wr(e) {
                return hr.has(e);
            }
            function $r(e) {
                return vr.has(e);
            }
            function kr(e) {
                return null == e ? void 0 : e.param;
            }
            new Set(['time', 'utc']);
            const Sr = {
                    type: 1,
                    domain: 1,
                    domainMax: 1,
                    domainMin: 1,
                    domainMid: 1,
                    align: 1,
                    range: 1,
                    rangeMax: 1,
                    rangeMin: 1,
                    scheme: 1,
                    bins: 1,
                    reverse: 1,
                    round: 1,
                    clamp: 1,
                    nice: 1,
                    base: 1,
                    exponent: 1,
                    constant: 1,
                    interpolate: 1,
                    zero: 1,
                    padding: 1,
                    paddingInner: 1,
                    paddingOuter: 1,
                },
                {
                    type: Dr,
                    domain: Pr,
                    range: Fr,
                    rangeMax: zr,
                    rangeMin: _r,
                    scheme: Cr,
                } = (M(Sr), Sr),
                Er = (function(e, t) {
                    var n = {};
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) &&
                            t.indexOf(i) < 0 &&
                            (n[i] = e[i]);
                    if (
                        null != e &&
                        'function' == typeof Object.getOwnPropertySymbols
                    ) {
                        var r = 0;
                        for (
                            i = Object.getOwnPropertySymbols(e);
                            r < i.length;
                            r++
                        )
                            t.indexOf(i[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    i[r]
                                ) &&
                                (n[i[r]] = e[i[r]]);
                    }
                    return n;
                })(Sr, [
                    'type',
                    'domain',
                    'range',
                    'rangeMax',
                    'rangeMin',
                    'scheme',
                ]),
                Nr = M(Er);
            function Tr(e, t) {
                switch (t) {
                    case 'type':
                    case 'domain':
                    case 'reverse':
                    case 'range':
                        return !0;
                    case 'scheme':
                    case 'interpolate':
                        return !['point', 'band', 'identity'].includes(e);
                    case 'bins':
                        return ![
                            'point',
                            'band',
                            'identity',
                            'ordinal',
                        ].includes(e);
                    case 'round':
                        return wr(e) || 'band' === e || 'point' === e;
                    case 'padding':
                    case 'rangeMin':
                    case 'rangeMax':
                        return wr(e) || ['point', 'band'].includes(e);
                    case 'paddingOuter':
                    case 'align':
                        return ['point', 'band'].includes(e);
                    case 'paddingInner':
                        return 'band' === e;
                    case 'domainMax':
                    case 'domainMid':
                    case 'domainMin':
                    case 'clamp':
                        return wr(e);
                    case 'nice':
                        return wr(e) || 'quantize' === e || 'threshold' === e;
                    case 'exponent':
                        return 'pow' === e;
                    case 'base':
                        return 'log' === e;
                    case 'constant':
                        return 'symlog' === e;
                    case 'zero':
                        return (
                            jr(e) &&
                            !k(
                                ['log', 'time', 'utc', 'threshold', 'quantile'],
                                e
                            )
                        );
                }
            }
            function Ar(e, t) {
                switch (t) {
                    case 'interpolate':
                    case 'scheme':
                    case 'domainMid':
                        return Xe(e)
                            ? void 0
                            : `Cannot use the scale property "${t}" with non-color channel.`;
                    case 'align':
                    case 'type':
                    case 'bins':
                    case 'domain':
                    case 'domainMax':
                    case 'domainMin':
                    case 'range':
                    case 'base':
                    case 'exponent':
                    case 'constant':
                    case 'nice':
                    case 'padding':
                    case 'paddingInner':
                    case 'paddingOuter':
                    case 'rangeMax':
                    case 'rangeMin':
                    case 'reverse':
                    case 'round':
                    case 'clamp':
                    case 'zero':
                        return;
                }
            }
            const Mr = {
                    arc: 'arc',
                    area: 'area',
                    bar: 'bar',
                    image: 'image',
                    line: 'line',
                    point: 'point',
                    rect: 'rect',
                    rule: 'rule',
                    text: 'text',
                    tick: 'tick',
                    trail: 'trail',
                    circle: 'circle',
                    square: 'square',
                    geoshape: 'geoshape',
                },
                Lr = Mr.arc,
                qr = Mr.area,
                Rr = Mr.bar,
                Wr = Mr.image,
                Ir = Mr.line,
                Ur = Mr.point,
                Hr = Mr.rect,
                Br = Mr.rule,
                Jr = Mr.text,
                Gr = Mr.tick,
                Xr = Mr.trail,
                Vr = Mr.circle,
                Kr = Mr.square,
                Yr = Mr.geoshape;
            function Qr(e) {
                return ['line', 'area', 'trail'].includes(e);
            }
            function Zr(e) {
                return ['rect', 'bar', 'image', 'arc'].includes(e);
            }
            const eo = new Set(M(Mr));
            function to(e) {
                return e.type;
            }
            const no = [
                    'stroke',
                    'strokeWidth',
                    'strokeDash',
                    'strokeDashOffset',
                    'strokeOpacity',
                    'strokeJoin',
                    'strokeMiterLimit',
                    'fill',
                    'fillOpacity',
                ],
                io = M({
                    color: 1,
                    filled: 1,
                    invalid: 1,
                    order: 1,
                    radius2: 1,
                    theta2: 1,
                    timeUnitBandSize: 1,
                    timeUnitBandPosition: 1,
                }),
                ro = M({
                    mark: 1,
                    arc: 1,
                    area: 1,
                    bar: 1,
                    circle: 1,
                    image: 1,
                    line: 1,
                    point: 1,
                    rect: 1,
                    rule: 1,
                    square: 1,
                    text: 1,
                    tick: 1,
                    trail: 1,
                    geoshape: 1,
                });
            function oo(e) {
                return e && null != e.band;
            }
            const so = {
                horizontal: ['cornerRadiusTopRight', 'cornerRadiusBottomRight'],
                vertical: ['cornerRadiusTopLeft', 'cornerRadiusTopRight'],
            };
            function ao(e) {
                const {
                        channel: t,
                        channelDef: n,
                        markDef: i,
                        scale: r,
                        config: o,
                    } = e,
                    s = po(e);
                return Ho(n) && !fn(n.aggregate) && r && wr(r.get('type'))
                    ? (function({
                          fieldDef: e,
                          channel: t,
                          markDef: n,
                          ref: i,
                          config: r,
                      }) {
                          if (Qr(n.type)) return i;
                          return null === Ln('invalid', n, r)
                              ? [lo(e, t), i]
                              : i;
                      })({
                          fieldDef: n,
                          channel: t,
                          markDef: i,
                          ref: s,
                          config: o,
                      })
                    : s;
            }
            function lo(e, t) {
                const n = co(e, !0),
                    i =
                        'y' === ut(t)
                            ? { field: { group: 'height' } }
                            : { value: 0 };
                return Object.assign({ test: n }, i);
            }
            function co(e, t = !0) {
                return Ki((0, o.HD)(e) ? e : is(e, { expr: 'datum' }), !t);
            }
            function uo(e, t, n, i) {
                const r = {};
                if ((t && (r.scale = t), Jo(e))) {
                    const { datum: t } = e;
                    ki(t)
                        ? (r.signal = _i(t))
                        : $n(t)
                        ? (r.signal = t.signal)
                        : On(t)
                        ? (r.signal = t.expr)
                        : (r.value = t);
                } else r.field = is(e, n);
                if (i) {
                    const { offset: e, band: t } = i;
                    e && (r.offset = e), t && (r.band = t);
                }
                return r;
            }
            function fo({
                scaleName: e,
                fieldOrDatumDef: t,
                fieldOrDatumDef2: n,
                offset: i,
                startSuffix: r,
                bandPosition: o = 0.5,
            }) {
                const s = 0 < o && o < 1 ? 'datum' : void 0,
                    a = is(t, { expr: s, suffix: r }),
                    l =
                        void 0 !== n
                            ? is(n, { expr: s })
                            : is(t, { suffix: 'end', expr: s }),
                    c = {};
                if (0 === o || 1 === o) {
                    c.scale = e;
                    const t = 0 === o ? a : l;
                    c.field = t;
                } else {
                    const t = $n(o)
                        ? `${o.signal} * ${a} + (1-${o.signal}) * ${l}`
                        : `${o} * ${a} + ${1 - o} * ${l}`;
                    c.signal = `scale("${e}", ${t})`;
                }
                return i && (c.offset = i), c;
            }
            function po({
                channel: e,
                channelDef: t,
                channel2Def: n,
                markDef: i,
                config: r,
                scaleName: s,
                scale: a,
                stack: l,
                offset: c,
                defaultRef: u,
                bandPosition: f,
            }) {
                var d;
                if (t) {
                    if (Vo(t)) {
                        const o = null == a ? void 0 : a.get('type');
                        if (Ko(t)) {
                            null != f ||
                                (f = Lo({
                                    fieldDef: t,
                                    fieldDef2: n,
                                    markDef: i,
                                    config: r,
                                }));
                            const { bin: a, timeUnit: u, type: d } = t;
                            if (mn(a) || (f && u && d === rr))
                                return (null == l
                                  ? void 0
                                  : l.impute)
                                    ? uo(
                                          t,
                                          s,
                                          { binSuffix: 'mid' },
                                          { offset: c }
                                      )
                                    : f && !xr(o)
                                    ? fo({
                                          scaleName: s,
                                          fieldOrDatumDef: t,
                                          bandPosition: f,
                                          offset: c,
                                      })
                                    : uo(
                                          t,
                                          s,
                                          js(t, e)
                                              ? { binSuffix: 'range' }
                                              : {},
                                          { offset: c }
                                      );
                            if (hn(a)) {
                                if (Ho(n))
                                    return fo({
                                        scaleName: s,
                                        fieldOrDatumDef: t,
                                        fieldOrDatumDef2: n,
                                        bandPosition: f,
                                        offset: c,
                                    });
                                $i(xi(e === ue ? de : pe));
                            }
                        }
                        return uo(t, s, xr(o) ? { binSuffix: 'range' } : {}, {
                            offset: c,
                            band:
                                'band' === o
                                    ? null !==
                                          (d =
                                              null != f ? f : t.bandPosition) &&
                                      void 0 !== d
                                        ? d
                                        : 0.5
                                    : void 0,
                        });
                    }
                    if (Yo(t)) {
                        const n = t.value,
                            i = c ? { offset: c } : {};
                        return Object.assign(Object.assign({}, go(e, n)), i);
                    }
                }
                return (
                    (0, o.mf)(u) && (u = u()),
                    u
                        ? Object.assign(
                              Object.assign({}, u),
                              c ? { offset: c } : {}
                          )
                        : u
                );
            }
            function go(e, t) {
                return k(['x', 'x2'], e) && 'width' === t
                    ? { field: { group: 'width' } }
                    : k(['y', 'y2'], e) && 'height' === t
                    ? { field: { group: 'height' } }
                    : Nn(t);
            }
            function mo(e) {
                return e && 'number' !== e && 'time' !== e;
            }
            function ho(e, t, n) {
                return `${e}(${t}${n ? `, ${j(n)}` : ''})`;
            }
            function bo({
                fieldOrDatumDef: e,
                format: t,
                formatType: n,
                expr: i,
                normalizeStack: r,
                config: s,
            }) {
                var a, l;
                if (mo(n))
                    return yo({
                        fieldOrDatumDef: e,
                        format: t,
                        formatType: n,
                        expr: i,
                        config: s,
                    });
                const c = vo(e, i, r),
                    u = Bo(e);
                if (void 0 === t && void 0 === n && s.customFormatTypes) {
                    if ('quantitative' === u) {
                        if (r && s.normalizedNumberFormatType)
                            return yo({
                                fieldOrDatumDef: e,
                                format: s.normalizedNumberFormat,
                                formatType: s.normalizedNumberFormatType,
                                expr: i,
                                config: s,
                            });
                        if (s.numberFormatType)
                            return yo({
                                fieldOrDatumDef: e,
                                format: s.numberFormat,
                                formatType: s.numberFormatType,
                                expr: i,
                                config: s,
                            });
                    }
                    if (
                        'temporal' === u &&
                        s.timeFormatType &&
                        Ho(e) &&
                        void 0 === e.timeUnit
                    )
                        return yo({
                            fieldOrDatumDef: e,
                            format: s.timeFormat,
                            formatType: s.timeFormatType,
                            expr: i,
                            config: s,
                        });
                }
                if (ys(e)) {
                    const n = (function({
                        field: e,
                        timeUnit: t,
                        format: n,
                        formatType: i,
                        rawTimeFormat: r,
                        isUTCScale: s,
                    }) {
                        return !t || n
                            ? !t && i
                                ? `${i}(${e}, '${n}')`
                                : `${s ? 'utc' : 'time'}Format(${e}, '${(n = (0,
                                  o.HD)(n)
                                      ? n
                                      : r)}')`
                            : (function(e, t, n) {
                                  if (!e) return;
                                  const i = Li(e);
                                  return `${
                                      n || Ni(e) ? 'utc' : 'time'
                                  }Format(${t}, ${i})`;
                              })(t, e, s);
                    })({
                        field: c,
                        timeUnit: Ho(e)
                            ? null === (a = qi(e.timeUnit)) || void 0 === a
                                ? void 0
                                : a.unit
                            : void 0,
                        format: t,
                        formatType: s.timeFormatType,
                        rawTimeFormat: s.timeFormat,
                        isUTCScale:
                            Qo(e) &&
                            (null === (l = e.scale) || void 0 === l
                                ? void 0
                                : l.type) === lr,
                    });
                    return n ? { signal: n } : void 0;
                }
                return (
                    (t = jo({
                        type: u,
                        specifiedFormat: t,
                        config: s,
                        normalizeStack: r,
                    })),
                    Ho(e) && mn(e.bin)
                        ? {
                              signal: ko(
                                  c,
                                  is(e, { expr: i, binSuffix: 'end' }),
                                  t,
                                  n,
                                  s
                              ),
                          }
                        : t || 'quantitative' === Bo(e)
                        ? { signal: `${wo(c, t)}` }
                        : { signal: `isValid(${c}) ? ${c} : ""+${c}` }
                );
            }
            function vo(e, t, n) {
                return Ho(e)
                    ? n
                        ? `${is(e, { expr: t, suffix: 'end' })}-${is(e, {
                              expr: t,
                              suffix: 'start',
                          })}`
                        : is(e, { expr: t })
                    : (function(e) {
                          const { datum: t } = e;
                          return ki(t) ? _i(t) : `${j(t)}`;
                      })(e);
            }
            function yo({
                fieldOrDatumDef: e,
                format: t,
                formatType: n,
                expr: i,
                normalizeStack: r,
                config: o,
                field: s,
            }) {
                return (
                    null != s || (s = vo(e, i, r)),
                    'datum.value' !== s && Ho(e) && mn(e.bin)
                        ? {
                              signal: ko(
                                  s,
                                  is(e, { expr: i, binSuffix: 'end' }),
                                  t,
                                  n,
                                  o
                              ),
                          }
                        : { signal: ho(n, s, t) }
                );
            }
            function Oo(e, t, n, i, r, o) {
                var s;
                if (!mo(i)) {
                    if (
                        void 0 === n &&
                        void 0 === i &&
                        r.customFormatTypes &&
                        'quantitative' === Bo(e)
                    ) {
                        if (
                            r.normalizedNumberFormatType &&
                            Zo(e) &&
                            'normalize' === e.stack
                        )
                            return;
                        if (r.numberFormatType) return;
                    }
                    if (
                        Zo(e) &&
                        'normalize' === e.stack &&
                        r.normalizedNumberFormat
                    )
                        return jo({
                            type: 'quantitative',
                            config: r,
                            normalizeStack: !0,
                        });
                    if (ys(e)) {
                        const t = Ho(e)
                            ? null === (s = qi(e.timeUnit)) || void 0 === s
                                ? void 0
                                : s.unit
                            : void 0;
                        if (
                            void 0 === t &&
                            r.customFormatTypes &&
                            r.timeFormatType
                        )
                            return;
                        return (function({
                            specifiedFormat: e,
                            timeUnit: t,
                            config: n,
                            omitTimeFormatConfig: i,
                        }) {
                            return (
                                e ||
                                (t
                                    ? { signal: Li(t) }
                                    : i
                                    ? void 0
                                    : n.timeFormat)
                            );
                        })({
                            specifiedFormat: n,
                            timeUnit: t,
                            config: r,
                            omitTimeFormatConfig: o,
                        });
                    }
                    return jo({ type: t, specifiedFormat: n, config: r });
                }
            }
            function xo(e, t, n) {
                var i;
                return e && ($n(e) || 'number' === e || 'time' === e)
                    ? e
                    : ys(t) && 'time' !== n && 'utc' !== n
                    ? Ho(t) &&
                      (null === (i = qi(null == t ? void 0 : t.timeUnit)) ||
                      void 0 === i
                          ? void 0
                          : i.utc)
                        ? 'utc'
                        : 'time'
                    : void 0;
            }
            function jo({
                type: e,
                specifiedFormat: t,
                config: n,
                normalizeStack: i,
            }) {
                return (0, o.HD)(t)
                    ? t
                    : e === nr
                    ? i
                        ? n.normalizedNumberFormat
                        : n.numberFormat
                    : void 0;
            }
            function wo(e, t) {
                return `format(${e}, "${t || ''}")`;
            }
            function $o(e, t, n, i) {
                var r;
                return mo(n)
                    ? ho(n, e, t)
                    : wo(
                          e,
                          null !== (r = (0, o.HD)(t) ? t : void 0) &&
                              void 0 !== r
                              ? r
                              : i.numberFormat
                      );
            }
            function ko(e, t, n, i, r) {
                if (
                    void 0 === n &&
                    void 0 === i &&
                    r.customFormatTypes &&
                    r.numberFormatType
                )
                    return ko(e, t, r.numberFormat, r.numberFormatType, r);
                const o = $o(e, n, i, r),
                    s = $o(t, n, i, r);
                return `${Ki(e, !1)} ? "null" : ${o} + " – " + ${s}`;
            }
            const So = 'min',
                Do = {
                    x: 1,
                    y: 1,
                    color: 1,
                    fill: 1,
                    stroke: 1,
                    strokeWidth: 1,
                    size: 1,
                    shape: 1,
                    fillOpacity: 1,
                    strokeOpacity: 1,
                    opacity: 1,
                    text: 1,
                };
            function Po(e) {
                return e in Do;
            }
            function Fo(e) {
                return !!(null == e ? void 0 : e.encoding);
            }
            function zo(e) {
                return e && ('count' === e.op || !!e.field);
            }
            function _o(e) {
                return e && (0, o.kJ)(e);
            }
            function Co(e) {
                return 'row' in e || 'column' in e;
            }
            function Eo(e) {
                return !!e && 'header' in e;
            }
            function No(e) {
                return 'facet' in e;
            }
            var To = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            function Ao(e) {
                const { field: t, timeUnit: n, bin: i, aggregate: r } = e;
                return Object.assign(
                    Object.assign(
                        Object.assign(
                            Object.assign({}, n ? { timeUnit: n } : {}),
                            i ? { bin: i } : {}
                        ),
                        r ? { aggregate: r } : {}
                    ),
                    { field: t }
                );
            }
            function Mo(e) {
                return 'sort' in e;
            }
            function Lo({ fieldDef: e, fieldDef2: t, markDef: n, config: i }) {
                if (Vo(e) && void 0 !== e.bandPosition) return e.bandPosition;
                if (Ho(e)) {
                    const { timeUnit: r, bin: o } = e;
                    if (r && !t)
                        return Zr(n.type)
                            ? 0
                            : qn('timeUnitBandPosition', n, i);
                    if (mn(o)) return 0.5;
                }
            }
            function qo({
                channel: e,
                fieldDef: t,
                fieldDef2: n,
                markDef: i,
                config: r,
                scaleType: o,
                useVlSizeChannel: s,
            }) {
                var a, l, c;
                const u = pt(e),
                    f = Ln(s ? 'size' : u, i, r, { vgChannel: u });
                if (void 0 !== f) return f;
                if (Ho(t)) {
                    const { timeUnit: e, bin: s } = t;
                    if (e && !n) return { band: qn('timeUnitBandSize', i, r) };
                    if (mn(s) && !xr(o)) return { band: 1 };
                }
                return Zr(i.type)
                    ? o
                        ? xr(o)
                            ? (null === (a = r[i.type]) || void 0 === a
                                  ? void 0
                                  : a.discreteBandSize) || { band: 1 }
                            : null === (l = r[i.type]) || void 0 === l
                            ? void 0
                            : l.continuousBandSize
                        : null === (c = r[i.type]) || void 0 === c
                        ? void 0
                        : c.discreteBandSize
                    : void 0;
            }
            function Ro(e, t, n, i) {
                return (
                    !!(
                        mn(e.bin) ||
                        (e.timeUnit && Ko(e) && 'temporal' === e.type)
                    ) &&
                    void 0 !==
                        Lo({ fieldDef: e, fieldDef2: t, markDef: n, config: i })
                );
            }
            function Wo(e) {
                return e && 'condition' in e;
            }
            function Io(e) {
                const t = null == e ? void 0 : e.condition;
                return !!t && !(0, o.kJ)(t) && Ho(t);
            }
            function Uo(e) {
                const t = null == e ? void 0 : e.condition;
                return !!t && !(0, o.kJ)(t) && Vo(t);
            }
            function Ho(e) {
                return e && (!!e.field || 'count' === e.aggregate);
            }
            function Bo(e) {
                return null == e ? void 0 : e.type;
            }
            function Jo(e) {
                return e && 'datum' in e;
            }
            function Go(e) {
                return (Ko(e) && !rs(e)) || Xo(e);
            }
            function Xo(e) {
                return Jo(e) && (0, o.hj)(e.datum);
            }
            function Vo(e) {
                return Ho(e) || Jo(e);
            }
            function Ko(e) {
                return (
                    e &&
                    ('field' in e || 'count' === e.aggregate) &&
                    'type' in e
                );
            }
            function Yo(e) {
                return e && 'value' in e && 'value' in e;
            }
            function Qo(e) {
                return e && ('scale' in e || 'sort' in e);
            }
            function Zo(e) {
                return e && ('axis' in e || 'stack' in e || 'impute' in e);
            }
            function es(e) {
                return e && 'legend' in e;
            }
            function ts(e) {
                return e && ('format' in e || 'formatType' in e);
            }
            function ns(e) {
                return x(e, ['legend', 'axis', 'header', 'scale']);
            }
            function is(e, t = {}) {
                var n, i, r;
                let o = e.field;
                const s = t.prefix;
                let a = t.suffix,
                    l = '';
                if (
                    (function(e) {
                        return 'count' === e.aggregate;
                    })(e)
                )
                    o = ne('count');
                else {
                    let s;
                    if (!t.nofn)
                        if (
                            (function(e) {
                                return 'op' in e;
                            })(e)
                        )
                            s = e.op;
                        else {
                            const { bin: c, aggregate: u, timeUnit: f } = e;
                            mn(c)
                                ? ((s = gn(c)),
                                  (a =
                                      (null !== (n = t.binSuffix) &&
                                      void 0 !== n
                                          ? n
                                          : '') +
                                      (null !== (i = t.suffix) && void 0 !== i
                                          ? i
                                          : '')))
                                : u
                                ? ln(u)
                                    ? ((l = `["${o}"]`),
                                      (o = `argmax_${u.argmax}`))
                                    : an(u)
                                    ? ((l = `["${o}"]`),
                                      (o = `argmin_${u.argmin}`))
                                    : (s = String(u))
                                : f &&
                                  ((s = (function(e) {
                                      const t = qi(e),
                                          { utc: n } = t,
                                          i = (function(e, t) {
                                              var n = {};
                                              for (var i in e)
                                                  Object.prototype.hasOwnProperty.call(
                                                      e,
                                                      i
                                                  ) &&
                                                      t.indexOf(i) < 0 &&
                                                      (n[i] = e[i]);
                                              if (
                                                  null != e &&
                                                  'function' ==
                                                      typeof Object.getOwnPropertySymbols
                                              ) {
                                                  var r = 0;
                                                  for (
                                                      i = Object.getOwnPropertySymbols(
                                                          e
                                                      );
                                                      r < i.length;
                                                      r++
                                                  )
                                                      t.indexOf(i[r]) < 0 &&
                                                          Object.prototype.propertyIsEnumerable.call(
                                                              e,
                                                              i[r]
                                                          ) &&
                                                          (n[i[r]] = e[i[r]]);
                                              }
                                              return n;
                                          })(t, ['utc']);
                                      return i.unit
                                          ? (n ? 'utc' : '') +
                                                M(i)
                                                    .map(e =>
                                                        W(
                                                            `${
                                                                'unit' === e
                                                                    ? ''
                                                                    : `_${e}_`
                                                            }${i[e]}`
                                                        )
                                                    )
                                                    .join('')
                                          : (n ? 'utc' : '') +
                                                'timeunit' +
                                                M(i)
                                                    .map(e =>
                                                        W(`_${e}_${i[e]}`)
                                                    )
                                                    .join('');
                                  })(f)),
                                  (a =
                                      ((!['range', 'mid'].includes(
                                          t.binSuffix
                                      ) &&
                                          t.binSuffix) ||
                                          '') +
                                      (null !== (r = t.suffix) && void 0 !== r
                                          ? r
                                          : '')));
                        }
                    s && (o = o ? `${s}_${o}` : s);
                }
                return (
                    a && (o = `${o}_${a}`),
                    s && (o = `${s}_${o}`),
                    t.forAs ? K(o) : t.expr ? J(o, t.expr) + l : X(o) + l
                );
            }
            function rs(e) {
                switch (e.type) {
                    case 'nominal':
                    case 'ordinal':
                    case 'geojson':
                        return !0;
                    case 'quantitative':
                        return Ho(e) && !!e.bin;
                    case 'temporal':
                        return !1;
                }
                throw new Error(oi(e.type));
            }
            const os = (e, t) => {
                switch (t.fieldTitle) {
                    case 'plain':
                        return e.field;
                    case 'functional':
                        return (function(e) {
                            const {
                                aggregate: t,
                                bin: n,
                                timeUnit: i,
                                field: r,
                            } = e;
                            if (ln(t)) return `${r} for argmax(${t.argmax})`;
                            if (an(t)) return `${r} for argmin(${t.argmin})`;
                            const o = qi(i),
                                s =
                                    t ||
                                    (null == o ? void 0 : o.unit) ||
                                    ((null == o ? void 0 : o.maxbins) &&
                                        'timeunit') ||
                                    (mn(n) && 'bin');
                            return s ? `${s.toUpperCase()}(${r})` : r;
                        })(e);
                    default:
                        return (function(e, t) {
                            var n;
                            const {
                                field: i,
                                bin: r,
                                timeUnit: o,
                                aggregate: s,
                            } = e;
                            if ('count' === s) return t.countTitle;
                            if (mn(r)) return `${i} (binned)`;
                            if (o) {
                                const e =
                                    null === (n = qi(o)) || void 0 === n
                                        ? void 0
                                        : n.unit;
                                if (e) return `${i} (${Ai(e).join('-')})`;
                            } else if (s)
                                return ln(s)
                                    ? `${i} for max ${s.argmax}`
                                    : an(s)
                                    ? `${i} for min ${s.argmin}`
                                    : `${H(s)} of ${i}`;
                            return i;
                        })(e, t);
                }
            };
            let ss = os;
            function as(e) {
                ss = e;
            }
            function ls(e, t, { allowDisabling: n, includeDefault: i = !0 }) {
                var r, o;
                const s =
                    null === (r = cs(e)) || void 0 === r ? void 0 : r.title;
                if (!Ho(e)) return null != s ? s : e.title;
                const a = e,
                    l = i ? us(a, t) : void 0;
                return n
                    ? Q(s, a.title, l)
                    : null !== (o = null != s ? s : a.title) && void 0 !== o
                    ? o
                    : l;
            }
            function cs(e) {
                return Zo(e) && e.axis
                    ? e.axis
                    : es(e) && e.legend
                    ? e.legend
                    : Eo(e) && e.header
                    ? e.header
                    : void 0;
            }
            function us(e, t) {
                return ss(e, t);
            }
            function fs(e) {
                var t;
                if (ts(e)) {
                    const { format: t, formatType: n } = e;
                    return { format: t, formatType: n };
                }
                {
                    const n = null !== (t = cs(e)) && void 0 !== t ? t : {},
                        { format: i, formatType: r } = n;
                    return { format: i, formatType: r };
                }
            }
            function ds(e) {
                return Ho(e) ? e : Io(e) ? e.condition : void 0;
            }
            function ps(e) {
                return Vo(e) ? e : Uo(e) ? e.condition : void 0;
            }
            function gs(e, t, n, i = {}) {
                return (0, o.HD)(e) || (0, o.hj)(e) || (0, o.jn)(e)
                    ? ($i(
                          (function(e, t, n) {
                              return `Channel ${e} is a ${t}. Converted to {value: ${j(
                                  n
                              )}}.`;
                          })(
                              t,
                              (0, o.HD)(e)
                                  ? 'string'
                                  : (0, o.hj)(e)
                                  ? 'number'
                                  : 'boolean',
                              e
                          )
                      ),
                      { value: e })
                    : Vo(e)
                    ? ms(e, t, n, i)
                    : Uo(e)
                    ? Object.assign(Object.assign({}, e), {
                          condition: ms(e.condition, t, n, i),
                      })
                    : e;
            }
            function ms(e, t, n, i) {
                if (ts(e)) {
                    const { format: r, formatType: o } = e,
                        s = To(e, ['format', 'formatType']);
                    if (mo(o) && !n.customFormatTypes)
                        return $i(ni(t)), ms(s, t, n, i);
                } else {
                    const r = Zo(e)
                        ? 'axis'
                        : es(e)
                        ? 'legend'
                        : Eo(e)
                        ? 'header'
                        : null;
                    if (r && e[r]) {
                        const o = e[r],
                            { format: s, formatType: a } = o,
                            l = To(o, ['format', 'formatType']);
                        if (mo(a) && !n.customFormatTypes)
                            return (
                                $i(ni(t)),
                                ms(
                                    Object.assign(Object.assign({}, e), {
                                        [r]: l,
                                    }),
                                    t,
                                    n,
                                    i
                                )
                            );
                    }
                }
                return Ho(e)
                    ? hs(e, t, i)
                    : (function(e) {
                          let t = e.type;
                          if (t) return e;
                          const { datum: n } = e;
                          return (
                              (t = (0, o.hj)(n)
                                  ? 'quantitative'
                                  : (0, o.HD)(n)
                                  ? 'nominal'
                                  : ki(n)
                                  ? 'temporal'
                                  : void 0),
                              Object.assign(Object.assign({}, e), { type: t })
                          );
                      })(e);
            }
            function hs(e, t, { compositeMark: n = !1 } = {}) {
                const { aggregate: i, timeUnit: r, bin: s, field: a } = e,
                    l = Object.assign({}, e);
                if (
                    (n ||
                        !i ||
                        cn(i) ||
                        ln(i) ||
                        an(i) ||
                        ($i(
                            (function(e) {
                                return `Invalid aggregation operator "${e}".`;
                            })(i)
                        ),
                        delete l.aggregate),
                    r && (l.timeUnit = qi(r)),
                    a && (l.field = `${a}`),
                    mn(s) && (l.bin = bs(s, t)),
                    hn(s) &&
                        !Tt(t) &&
                        $i(
                            (function(e) {
                                return `Channel ${e} should not be used with "binned" bin.`;
                            })(t)
                        ),
                    Ko(l))
                ) {
                    const { type: e } = l,
                        t = (function(e) {
                            if (e)
                                switch ((e = e.toLowerCase())) {
                                    case 'q':
                                    case nr:
                                        return 'quantitative';
                                    case 't':
                                    case rr:
                                        return 'temporal';
                                    case 'o':
                                    case ir:
                                        return 'ordinal';
                                    case 'n':
                                    case or:
                                        return 'nominal';
                                    case sr:
                                        return 'geojson';
                                }
                        })(e);
                    e !== t && (l.type = t),
                        'quantitative' !== e &&
                            fn(i) &&
                            ($i(
                                (function(e, t) {
                                    return `Invalid field type "${e}" for aggregate: "${t}", using "quantitative" instead.`;
                                })(e, i)
                            ),
                            (l.type = 'quantitative'));
                } else if (!ct(t)) {
                    const e = (function(e, t) {
                        var n;
                        switch (t) {
                            case 'latitude':
                            case 'longitude':
                                return 'quantitative';
                            case 'row':
                            case 'column':
                            case 'facet':
                            case 'shape':
                            case 'strokeDash':
                                return 'nominal';
                            case 'order':
                                return 'ordinal';
                        }
                        if (Mo(e) && (0, o.kJ)(e.sort)) return 'ordinal';
                        const { aggregate: i, bin: r, timeUnit: s } = e;
                        if (s) return 'temporal';
                        if (r || (i && !ln(i) && !an(i))) return 'quantitative';
                        if (
                            Qo(e) &&
                            (null === (n = e.scale) || void 0 === n
                                ? void 0
                                : n.type)
                        )
                            switch (fr[e.scale.type]) {
                                case 'numeric':
                                case 'discretizing':
                                    return 'quantitative';
                                case 'time':
                                    return 'temporal';
                            }
                        return 'nominal';
                    })(l, t);
                    l.type = e;
                }
                if (Ko(l)) {
                    const { compatible: e, warning: n } =
                        (function(e, t) {
                            const n = e.type;
                            if ('geojson' === n && 'shape' !== t)
                                return {
                                    compatible: !1,
                                    warning: `Channel ${t} should not be used with a geojson data.`,
                                };
                            switch (t) {
                                case ae:
                                case le:
                                case ce:
                                    return rs(e)
                                        ? vs
                                        : { compatible: !1, warning: ui(t) };
                                case ue:
                                case fe:
                                case ge:
                                case me:
                                case $e:
                                case ke:
                                case Se:
                                case Te:
                                case Me:
                                case Le:
                                case qe:
                                case Re:
                                case We:
                                case Fe:
                                case ve:
                                case he:
                                case Ie:
                                    return vs;
                                case xe:
                                case we:
                                case Oe:
                                case je:
                                    return n !== nr
                                        ? {
                                              compatible: !1,
                                              warning: `Channel ${t} should be used with a quantitative field only, not ${e.type} field.`,
                                          }
                                        : vs;
                                case ze:
                                case _e:
                                case Ce:
                                case Ee:
                                case Pe:
                                case ye:
                                case be:
                                case de:
                                case pe:
                                    return 'nominal' !== n || e.sort
                                        ? vs
                                        : {
                                              compatible: !1,
                                              warning: `Channel ${t} should not be used with an unsorted discrete field.`,
                                          };
                                case De:
                                case Ne:
                                    return rs(e) ||
                                        (Qo((i = e)) &&
                                            $r(
                                                null === (r = i.scale) ||
                                                    void 0 === r
                                                    ? void 0
                                                    : r.type
                                            ))
                                        ? vs
                                        : { compatible: !1, warning: fi(t) };
                                case Ae:
                                    return 'nominal' !== e.type || 'sort' in e
                                        ? vs
                                        : {
                                              compatible: !1,
                                              warning:
                                                  'Channel order is inappropriate for nominal field, which has no inherent order.',
                                          };
                            }
                            var i, r;
                        })(l, t) || {};
                    !1 === e && $i(n);
                }
                if (Mo(l) && (0, o.HD)(l.sort)) {
                    const { sort: e } = l;
                    if (Po(e))
                        return Object.assign(Object.assign({}, l), {
                            sort: { encoding: e },
                        });
                    const t = e.substr(1);
                    if ('-' === e.charAt(0) && Po(t))
                        return Object.assign(Object.assign({}, l), {
                            sort: { encoding: t, order: 'descending' },
                        });
                }
                if (Eo(l)) {
                    const { header: e } = l;
                    if (e) {
                        const { orient: t } = e,
                            n = To(e, ['orient']);
                        if (t)
                            return Object.assign(Object.assign({}, l), {
                                header: Object.assign(Object.assign({}, n), {
                                    labelOrient: e.labelOrient || t,
                                    titleOrient: e.titleOrient || t,
                                }),
                            });
                    }
                }
                return l;
            }
            function bs(e, t) {
                return (0, o.jn)(e)
                    ? { maxbins: yn(t) }
                    : 'binned' === e
                    ? { binned: !0 }
                    : e.maxbins || e.step
                    ? e
                    : Object.assign(Object.assign({}, e), { maxbins: yn(t) });
            }
            const vs = { compatible: !0 };
            function ys(e) {
                const { formatType: t } = fs(e);
                return (
                    'time' === t ||
                    (!t &&
                        (n = e) &&
                        ('temporal' === n.type || (Ho(n) && !!n.timeUnit)))
                );
                var n;
            }
            function Os(
                e,
                {
                    timeUnit: t,
                    type: n,
                    wrapTime: i,
                    undefinedIfExprNotRequired: r,
                }
            ) {
                var s;
                const a =
                    t &&
                    (null === (s = qi(t)) || void 0 === s ? void 0 : s.unit);
                let l,
                    c = a || 'temporal' === n;
                return (
                    On(e)
                        ? (l = e.expr)
                        : $n(e)
                        ? (l = e.signal)
                        : ki(e)
                        ? ((c = !0), (l = _i(e)))
                        : ((0, o.HD)(e) || (0, o.hj)(e)) &&
                          c &&
                          ((l = `datetime(${j(e)})`),
                          (function(e) {
                              return !!Ci[e];
                          })(a) &&
                              (((0, o.hj)(e) && e < 1e4) ||
                                  ((0, o.HD)(e) && isNaN(Date.parse(e)))) &&
                              (l = _i({ [a]: e }))),
                    l ? (i && c ? `time(${l})` : l) : r ? void 0 : j(e)
                );
            }
            function xs(e, t) {
                const { type: n } = e;
                return t.map(t => {
                    const i = Os(t, {
                        timeUnit: Ho(e) ? e.timeUnit : void 0,
                        type: n,
                        undefinedIfExprNotRequired: !0,
                    });
                    return void 0 !== i ? { signal: i } : t;
                });
            }
            function js(e, t) {
                return mn(e.bin)
                    ? Zt(t) && ['ordinal', 'nominal'].includes(e.type)
                    : (console.warn(
                          'Only call this method for binned field defs.'
                      ),
                      !1);
            }
            const ws = {
                labelAlign: { part: 'labels', vgProp: 'align' },
                labelBaseline: { part: 'labels', vgProp: 'baseline' },
                labelColor: { part: 'labels', vgProp: 'fill' },
                labelFont: { part: 'labels', vgProp: 'font' },
                labelFontSize: { part: 'labels', vgProp: 'fontSize' },
                labelFontStyle: { part: 'labels', vgProp: 'fontStyle' },
                labelFontWeight: { part: 'labels', vgProp: 'fontWeight' },
                labelOpacity: { part: 'labels', vgProp: 'opacity' },
                labelOffset: null,
                labelPadding: null,
                gridColor: { part: 'grid', vgProp: 'stroke' },
                gridDash: { part: 'grid', vgProp: 'strokeDash' },
                gridDashOffset: { part: 'grid', vgProp: 'strokeDashOffset' },
                gridOpacity: { part: 'grid', vgProp: 'opacity' },
                gridWidth: { part: 'grid', vgProp: 'strokeWidth' },
                tickColor: { part: 'ticks', vgProp: 'stroke' },
                tickDash: { part: 'ticks', vgProp: 'strokeDash' },
                tickDashOffset: { part: 'ticks', vgProp: 'strokeDashOffset' },
                tickOpacity: { part: 'ticks', vgProp: 'opacity' },
                tickSize: null,
                tickWidth: { part: 'ticks', vgProp: 'strokeWidth' },
            };
            function $s(e) {
                return null == e ? void 0 : e.condition;
            }
            const ks = ['domain', 'grid', 'labels', 'ticks', 'title'],
                Ss = {
                    grid: 'grid',
                    gridCap: 'grid',
                    gridColor: 'grid',
                    gridDash: 'grid',
                    gridDashOffset: 'grid',
                    gridOpacity: 'grid',
                    gridScale: 'grid',
                    gridWidth: 'grid',
                    orient: 'main',
                    bandPosition: 'both',
                    aria: 'main',
                    description: 'main',
                    domain: 'main',
                    domainCap: 'main',
                    domainColor: 'main',
                    domainDash: 'main',
                    domainDashOffset: 'main',
                    domainOpacity: 'main',
                    domainWidth: 'main',
                    format: 'main',
                    formatType: 'main',
                    labelAlign: 'main',
                    labelAngle: 'main',
                    labelBaseline: 'main',
                    labelBound: 'main',
                    labelColor: 'main',
                    labelFlush: 'main',
                    labelFlushOffset: 'main',
                    labelFont: 'main',
                    labelFontSize: 'main',
                    labelFontStyle: 'main',
                    labelFontWeight: 'main',
                    labelLimit: 'main',
                    labelLineHeight: 'main',
                    labelOffset: 'main',
                    labelOpacity: 'main',
                    labelOverlap: 'main',
                    labelPadding: 'main',
                    labels: 'main',
                    labelSeparation: 'main',
                    maxExtent: 'main',
                    minExtent: 'main',
                    offset: 'both',
                    position: 'main',
                    tickCap: 'main',
                    tickColor: 'main',
                    tickDash: 'main',
                    tickDashOffset: 'main',
                    tickMinStep: 'both',
                    tickOffset: 'both',
                    tickOpacity: 'main',
                    tickRound: 'both',
                    ticks: 'main',
                    tickSize: 'main',
                    tickWidth: 'both',
                    title: 'main',
                    titleAlign: 'main',
                    titleAnchor: 'main',
                    titleAngle: 'main',
                    titleBaseline: 'main',
                    titleColor: 'main',
                    titleFont: 'main',
                    titleFontSize: 'main',
                    titleFontStyle: 'main',
                    titleFontWeight: 'main',
                    titleLimit: 'main',
                    titleLineHeight: 'main',
                    titleOpacity: 'main',
                    titlePadding: 'main',
                    titleX: 'main',
                    titleY: 'main',
                    encode: 'both',
                    scale: 'both',
                    tickBand: 'both',
                    tickCount: 'both',
                    tickExtra: 'both',
                    translate: 'both',
                    values: 'both',
                    zindex: 'both',
                },
                Ds = {
                    orient: 1,
                    aria: 1,
                    bandPosition: 1,
                    description: 1,
                    domain: 1,
                    domainCap: 1,
                    domainColor: 1,
                    domainDash: 1,
                    domainDashOffset: 1,
                    domainOpacity: 1,
                    domainWidth: 1,
                    format: 1,
                    formatType: 1,
                    grid: 1,
                    gridCap: 1,
                    gridColor: 1,
                    gridDash: 1,
                    gridDashOffset: 1,
                    gridOpacity: 1,
                    gridWidth: 1,
                    labelAlign: 1,
                    labelAngle: 1,
                    labelBaseline: 1,
                    labelBound: 1,
                    labelColor: 1,
                    labelFlush: 1,
                    labelFlushOffset: 1,
                    labelFont: 1,
                    labelFontSize: 1,
                    labelFontStyle: 1,
                    labelFontWeight: 1,
                    labelLimit: 1,
                    labelLineHeight: 1,
                    labelOffset: 1,
                    labelOpacity: 1,
                    labelOverlap: 1,
                    labelPadding: 1,
                    labels: 1,
                    labelSeparation: 1,
                    maxExtent: 1,
                    minExtent: 1,
                    offset: 1,
                    position: 1,
                    tickBand: 1,
                    tickCap: 1,
                    tickColor: 1,
                    tickCount: 1,
                    tickDash: 1,
                    tickDashOffset: 1,
                    tickExtra: 1,
                    tickMinStep: 1,
                    tickOffset: 1,
                    tickOpacity: 1,
                    tickRound: 1,
                    ticks: 1,
                    tickSize: 1,
                    tickWidth: 1,
                    title: 1,
                    titleAlign: 1,
                    titleAnchor: 1,
                    titleAngle: 1,
                    titleBaseline: 1,
                    titleColor: 1,
                    titleFont: 1,
                    titleFontSize: 1,
                    titleFontStyle: 1,
                    titleFontWeight: 1,
                    titleLimit: 1,
                    titleLineHeight: 1,
                    titleOpacity: 1,
                    titlePadding: 1,
                    titleX: 1,
                    titleY: 1,
                    translate: 1,
                    values: 1,
                    zindex: 1,
                },
                Ps = Object.assign(Object.assign({}, Ds), {
                    style: 1,
                    labelExpr: 1,
                    encoding: 1,
                });
            function Fs(e) {
                return !!Ps[e];
            }
            M(Ps);
            const zs = M({
                axis: 1,
                axisBand: 1,
                axisBottom: 1,
                axisDiscrete: 1,
                axisLeft: 1,
                axisPoint: 1,
                axisQuantitative: 1,
                axisRight: 1,
                axisTemporal: 1,
                axisTop: 1,
                axisX: 1,
                axisXBand: 1,
                axisXDiscrete: 1,
                axisXPoint: 1,
                axisXQuantitative: 1,
                axisXTemporal: 1,
                axisY: 1,
                axisYBand: 1,
                axisYDiscrete: 1,
                axisYPoint: 1,
                axisYQuantitative: 1,
                axisYTemporal: 1,
            });
            function _s(e) {
                return 'mark' in e;
            }
            class Cs {
                constructor(e, t) {
                    (this.name = e), (this.run = t);
                }
                hasMatchingType(e) {
                    return (
                        !!_s(e) && (to((t = e.mark)) ? t.type : t) === this.name
                    );
                    var t;
                }
            }
            function Es(e, t) {
                const n = e && e[t];
                return (
                    !!n &&
                    ((0, o.kJ)(n) ? S(n, e => !!e.field) : Ho(n) || Io(n))
                );
            }
            function Ns(e, t) {
                const n = e && e[t];
                return (
                    !!n &&
                    ((0, o.kJ)(n)
                        ? S(n, e => !!e.field)
                        : Ho(n) || Jo(n) || Uo(n))
                );
            }
            function Ts(e, t) {
                if (Tt(t)) {
                    const n = e[t];
                    if ((Ho(n) || Jo(n)) && tr(n.type)) return Ns(e, gt(t));
                }
                return !1;
            }
            function As(e) {
                return S(Qe, t => {
                    if (Es(e, t)) {
                        const n = e[t];
                        if ((0, o.kJ)(n)) return S(n, e => !!e.aggregate);
                        {
                            const e = ds(n);
                            return e && !!e.aggregate;
                        }
                    }
                    return !1;
                });
            }
            function Ms(e, t) {
                const n = [],
                    i = [],
                    r = [],
                    o = [],
                    s = {};
                return (
                    Rs(e, (a, l) => {
                        if (Ho(a)) {
                            const {
                                    field: c,
                                    aggregate: u,
                                    bin: f,
                                    timeUnit: d,
                                } = a,
                                p = (function(e, t) {
                                    var n = {};
                                    for (var i in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            i
                                        ) &&
                                            t.indexOf(i) < 0 &&
                                            (n[i] = e[i]);
                                    if (
                                        null != e &&
                                        'function' ==
                                            typeof Object.getOwnPropertySymbols
                                    ) {
                                        var r = 0;
                                        for (
                                            i = Object.getOwnPropertySymbols(e);
                                            r < i.length;
                                            r++
                                        )
                                            t.indexOf(i[r]) < 0 &&
                                                Object.prototype.propertyIsEnumerable.call(
                                                    e,
                                                    i[r]
                                                ) &&
                                                (n[i[r]] = e[i[r]]);
                                    }
                                    return n;
                                })(a, [
                                    'field',
                                    'aggregate',
                                    'bin',
                                    'timeUnit',
                                ]);
                            if (u || d || f) {
                                const e = cs(a),
                                    g = null == e ? void 0 : e.title;
                                let m = is(a, { forAs: !0 });
                                const h = Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            {},
                                            g
                                                ? []
                                                : {
                                                      title: ls(a, t, {
                                                          allowDisabling: !0,
                                                      }),
                                                  }
                                        ),
                                        p
                                    ),
                                    { field: m }
                                );
                                if (u) {
                                    let e;
                                    if (
                                        (ln(u)
                                            ? ((e = 'argmax'),
                                              (m = is(
                                                  {
                                                      op: 'argmax',
                                                      field: u.argmax,
                                                  },
                                                  { forAs: !0 }
                                              )),
                                              (h.field = `${m}.${c}`))
                                            : an(u)
                                            ? ((e = 'argmin'),
                                              (m = is(
                                                  {
                                                      op: 'argmin',
                                                      field: u.argmin,
                                                  },
                                                  { forAs: !0 }
                                              )),
                                              (h.field = `${m}.${c}`))
                                            : 'boxplot' !== u &&
                                              'errorbar' !== u &&
                                              'errorband' !== u &&
                                              (e = u),
                                        e)
                                    ) {
                                        const t = { op: e, as: m };
                                        c && (t.field = c), o.push(t);
                                    }
                                } else if ((n.push(m), Ko(a) && mn(f))) {
                                    if (
                                        (i.push({ bin: f, field: c, as: m }),
                                        n.push(is(a, { binSuffix: 'end' })),
                                        js(a, l) &&
                                            n.push(
                                                is(a, { binSuffix: 'range' })
                                            ),
                                        Tt(l))
                                    ) {
                                        const e = { field: `${m}_end` };
                                        s[`${l}2`] = e;
                                    }
                                    (h.bin = 'binned'), ct(l) || (h.type = nr);
                                } else if (d) {
                                    r.push({ timeUnit: d, field: c, as: m });
                                    const e = Ko(a) && a.type !== rr && 'time';
                                    e &&
                                        (l === Te || l === qe
                                            ? (h.formatType = e)
                                            : (function(e) {
                                                  return !!_t[e];
                                              })(l)
                                            ? (h.legend = Object.assign(
                                                  { formatType: e },
                                                  h.legend
                                              ))
                                            : Tt(l) &&
                                              (h.axis = Object.assign(
                                                  { formatType: e },
                                                  h.axis
                                              )));
                                }
                                s[l] = h;
                            } else n.push(c), (s[l] = e[l]);
                        } else s[l] = e[l];
                    }),
                    {
                        bins: i,
                        timeUnits: r,
                        aggregate: o,
                        groupby: n,
                        encoding: s,
                    }
                );
            }
            function Ls(e, t, n) {
                const i = (function(e, t) {
                    return (function(e) {
                        switch (e) {
                            case $e:
                            case ke:
                            case Se:
                            case Ie:
                            case Me:
                            case Le:
                            case qe:
                            case Re:
                            case Ae:
                            case ze:
                            case _e:
                            case Ce:
                            case Ee:
                            case ce:
                            case ae:
                            case le:
                                return en;
                            case ue:
                            case fe:
                            case ge:
                            case me:
                            case Oe:
                            case xe:
                                return nn;
                            case de:
                            case pe:
                            case je:
                            case we:
                                return {
                                    area: 'always',
                                    bar: 'always',
                                    image: 'always',
                                    rect: 'always',
                                    rule: 'always',
                                    circle: 'binned',
                                    point: 'binned',
                                    square: 'binned',
                                    tick: 'binned',
                                    line: 'binned',
                                    trail: 'binned',
                                };
                            case Pe:
                                return {
                                    point: 'always',
                                    tick: 'always',
                                    rule: 'always',
                                    circle: 'always',
                                    square: 'always',
                                    bar: 'always',
                                    text: 'always',
                                    line: 'always',
                                    trail: 'always',
                                };
                            case Ne:
                                return {
                                    line: 'always',
                                    point: 'always',
                                    tick: 'always',
                                    rule: 'always',
                                    circle: 'always',
                                    square: 'always',
                                    bar: 'always',
                                    geoshape: 'always',
                                };
                            case De:
                                return { point: 'always', geoshape: 'always' };
                            case Te:
                                return { text: 'always' };
                            case Fe:
                                return {
                                    point: 'always',
                                    square: 'always',
                                    text: 'always',
                                };
                            case We:
                                return { image: 'always' };
                            case ve:
                            case he:
                                return { text: 'always', arc: 'always' };
                            case ye:
                            case be:
                                return { arc: 'always' };
                        }
                    })(e)[t];
                })(t, n);
                if (!i) return !1;
                if ('binned' === i) {
                    const n = e[t === de ? ue : fe];
                    return !!(Ho(n) && Ho(e[t]) && hn(n.bin));
                }
                return !0;
            }
            function qs(e, t) {
                const n = {};
                for (const i of M(e)) {
                    const r = gs(e[i], i, t, { compositeMark: !0 });
                    n[i] = r;
                }
                return n;
            }
            function Rs(e, t, n) {
                if (e)
                    for (const i of M(e)) {
                        const r = e[i];
                        if ((0, o.kJ)(r)) for (const e of r) t.call(n, e, i);
                        else t.call(n, r, i);
                    }
            }
            function Ws(e, t) {
                return M(t).reduce((n, i) => {
                    switch (i) {
                        case ue:
                        case fe:
                        case Re:
                        case Ie:
                        case We:
                        case de:
                        case pe:
                        case ge:
                        case me:
                        case ve:
                        case ye:
                        case he:
                        case be:
                        case Oe:
                        case xe:
                        case je:
                        case we:
                        case Te:
                        case De:
                        case Fe:
                        case qe:
                            return n;
                        case Ae:
                            if ('line' === e || 'trail' === e) return n;
                        case Me:
                        case Le: {
                            const e = t[i];
                            if ((0, o.kJ)(e) || Ho(e))
                                for (const t of (0, o.IX)(e))
                                    t.aggregate || n.push(is(t, {}));
                            return n;
                        }
                        case Pe:
                            if ('trail' === e) return n;
                        case $e:
                        case ke:
                        case Se:
                        case ze:
                        case _e:
                        case Ce:
                        case Ne:
                        case Ee: {
                            const e = ds(t[i]);
                            return e && !e.aggregate && n.push(is(e, {})), n;
                        }
                    }
                }, []);
            }
            var Is = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            function Us(e, t, n, i = !0) {
                return 'tooltip' in n
                    ? { tooltip: n.tooltip }
                    : {
                          tooltip: [
                              ...e.map(({ fieldPrefix: e, titlePrefix: n }) => {
                                  const r = i ? ` of ${Hs(t)}` : '';
                                  return {
                                      field: e + t.field,
                                      type: t.type,
                                      title: $n(n)
                                          ? { signal: `${n}"${escape(r)}"` }
                                          : n + r,
                                  };
                              }),
                              ...z(
                                  (function(e) {
                                      const t = [];
                                      for (const n of M(e))
                                          if (Es(e, n)) {
                                              const i = e[n],
                                                  r = (0, o.IX)(i);
                                              for (const e of r)
                                                  Ho(e)
                                                      ? t.push(e)
                                                      : Io(e) &&
                                                        t.push(e.condition);
                                          }
                                      return t;
                                  })(n).map(ns),
                                  w
                              ),
                          ],
                      };
            }
            function Hs(e) {
                const { title: t, field: n } = e;
                return Q(t, n);
            }
            function Bs(e, t, n, i, r) {
                const { scale: s, axis: a } = n;
                return ({
                    partName: l,
                    mark: c,
                    positionPrefix: u,
                    endPositionPrefix: f,
                    extraEncoding: d = {},
                }) => {
                    const p = Hs(n);
                    return Js(e, l, r, {
                        mark: c,
                        encoding: Object.assign(
                            Object.assign(
                                Object.assign(
                                    {
                                        [t]: Object.assign(
                                            Object.assign(
                                                Object.assign(
                                                    {
                                                        field: `${u}_${n.field}`,
                                                        type: n.type,
                                                    },
                                                    void 0 !== p
                                                        ? { title: p }
                                                        : {}
                                                ),
                                                void 0 !== s ? { scale: s } : {}
                                            ),
                                            void 0 !== a ? { axis: a } : {}
                                        ),
                                    },
                                    (0, o.HD)(f)
                                        ? {
                                              [`${t}2`]: {
                                                  field: `${f}_${n.field}`,
                                              },
                                          }
                                        : {}
                                ),
                                i
                            ),
                            d
                        ),
                    });
                };
            }
            function Js(e, t, n, i) {
                const { clip: r, color: s, opacity: a } = e,
                    l = e.type;
                return e[t] || (void 0 === e[t] && n[t])
                    ? [
                          Object.assign(Object.assign({}, i), {
                              mark: Object.assign(
                                  Object.assign(
                                      Object.assign(
                                          Object.assign(
                                              Object.assign(
                                                  Object.assign(
                                                      Object.assign({}, n[t]),
                                                      r ? { clip: r } : {}
                                                  ),
                                                  s ? { color: s } : {}
                                              ),
                                              a ? { opacity: a } : {}
                                          ),
                                          to(i.mark) ? i.mark : { type: i.mark }
                                      ),
                                      { style: `${l}-${String(t)}` }
                                  ),
                                  (0, o.jn)(e[t]) ? {} : e[t]
                              ),
                          }),
                      ]
                    : [];
            }
            function Gs(e, t, n) {
                const { encoding: i } = e,
                    r = 'vertical' === t ? 'y' : 'x',
                    o = i[r],
                    s = i[`${r}2`],
                    a = i[`${r}Error`],
                    l = i[`${r}Error2`];
                return {
                    continuousAxisChannelDef: Xs(o, n),
                    continuousAxisChannelDef2: Xs(s, n),
                    continuousAxisChannelDefError: Xs(a, n),
                    continuousAxisChannelDefError2: Xs(l, n),
                    continuousAxis: r,
                };
            }
            function Xs(e, t) {
                if (null == e ? void 0 : e.aggregate) {
                    const { aggregate: n } = e,
                        i = Is(e, ['aggregate']);
                    return (
                        n !== t &&
                            $i(
                                (function(e, t) {
                                    return `Continuous axis should not have customized aggregation function ${e}; ${t} already agregates the axis.`;
                                })(n, t)
                            ),
                        i
                    );
                }
                return e;
            }
            function Vs(e, t) {
                const { mark: n, encoding: i } = e,
                    { x: r, y: o } = i;
                if (to(n) && n.orient) return n.orient;
                if (Go(r)) {
                    if (Go(o)) {
                        const e = Ho(r) && r.aggregate,
                            n = Ho(o) && o.aggregate;
                        if (e || n !== t) {
                            if (n || e !== t) {
                                if (e === t && n === t)
                                    throw new Error(
                                        'Both x and y cannot have aggregate'
                                    );
                                return ys(o) && !ys(r)
                                    ? 'horizontal'
                                    : 'vertical';
                            }
                            return 'horizontal';
                        }
                        return 'vertical';
                    }
                    return 'horizontal';
                }
                if (Go(o)) return 'vertical';
                throw new Error(`Need a valid continuous axis for ${t}s`);
            }
            var Ks = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            const Ys = 'boxplot',
                Qs = new Cs(Ys, ea);
            function Zs(e) {
                return (0, o.hj)(e) ? 'tukey' : e;
            }
            function ea(e, { config: t }) {
                var n, i;
                e = Object.assign(Object.assign({}, e), {
                    encoding: qs(e.encoding, t),
                });
                const { mark: r, encoding: s, params: a, projection: l } = e,
                    c = Ks(e, ['mark', 'encoding', 'params', 'projection']),
                    u = to(r) ? r : { type: r };
                a && $i(Zn('boxplot'));
                const f =
                        null !== (n = u.extent) && void 0 !== n
                            ? n
                            : t.boxplot.extent,
                    d = Ln('size', u, t),
                    p = u.invalid,
                    g = Zs(f),
                    {
                        bins: m,
                        timeUnits: h,
                        transform: b,
                        continuousAxisChannelDef: v,
                        continuousAxis: y,
                        groupby: O,
                        aggregate: j,
                        encodingWithoutContinuousAxis: w,
                        ticksOrient: $,
                        boxOrient: k,
                        customTooltipWithoutAggregatedField: S,
                    } = (function(e, t, n) {
                        const i = Vs(e, Ys),
                            {
                                continuousAxisChannelDef: r,
                                continuousAxis: s,
                            } = Gs(e, i, Ys),
                            a = r.field,
                            l = Zs(t),
                            c = [
                                ...ta(a),
                                { op: 'median', field: a, as: `mid_box_${a}` },
                                {
                                    op: 'min',
                                    field: a,
                                    as:
                                        ('min-max' === l
                                            ? 'lower_whisker_'
                                            : 'min_') + a,
                                },
                                {
                                    op: 'max',
                                    field: a,
                                    as:
                                        ('min-max' === l
                                            ? 'upper_whisker_'
                                            : 'max_') + a,
                                },
                            ],
                            u =
                                'min-max' === l || 'tukey' === l
                                    ? []
                                    : [
                                          {
                                              calculate: `datum["upper_box_${a}"] - datum["lower_box_${a}"]`,
                                              as: `iqr_${a}`,
                                          },
                                          {
                                              calculate: `min(datum["upper_box_${a}"] + datum["iqr_${a}"] * ${t}, datum["max_${a}"])`,
                                              as: `upper_whisker_${a}`,
                                          },
                                          {
                                              calculate: `max(datum["lower_box_${a}"] - datum["iqr_${a}"] * ${t}, datum["min_${a}"])`,
                                              as: `lower_whisker_${a}`,
                                          },
                                      ],
                            f = e.encoding,
                            d = s,
                            p =
                                (f[d],
                                Ks(f, ['symbol' == typeof d ? d : d + ''])),
                            {
                                customTooltipWithoutAggregatedField: g,
                                filteredEncoding: m,
                            } = (function(e) {
                                const { tooltip: t } = e,
                                    n = Is(e, ['tooltip']);
                                if (!t) return { filteredEncoding: n };
                                let i, r;
                                if ((0, o.kJ)(t)) {
                                    for (const e of t)
                                        e.aggregate
                                            ? (i || (i = []), i.push(e))
                                            : (r || (r = []), r.push(e));
                                    i && (n.tooltip = i);
                                } else t.aggregate ? (n.tooltip = t) : (r = t);
                                return (
                                    (0, o.kJ)(r) &&
                                        1 === r.length &&
                                        (r = r[0]),
                                    {
                                        customTooltipWithoutAggregatedField: r,
                                        filteredEncoding: n,
                                    }
                                );
                            })(p),
                            {
                                bins: h,
                                timeUnits: b,
                                aggregate: v,
                                groupby: y,
                                encoding: O,
                            } = Ms(m, n),
                            x = 'vertical' === i ? 'horizontal' : 'vertical',
                            j = i;
                        return {
                            bins: h,
                            timeUnits: b,
                            transform: [
                                ...h,
                                ...b,
                                { aggregate: [...v, ...c], groupby: y },
                                ...u,
                            ],
                            groupby: y,
                            aggregate: v,
                            continuousAxisChannelDef: r,
                            continuousAxis: s,
                            encodingWithoutContinuousAxis: O,
                            ticksOrient: x,
                            boxOrient: j,
                            customTooltipWithoutAggregatedField: g,
                        };
                    })(e, f, t),
                    { color: D, size: P } = w,
                    F = Ks(w, ['color', 'size']),
                    z = e => Bs(u, y, v, e, t.boxplot),
                    _ = z(F),
                    C = z(w),
                    E = z(
                        Object.assign(
                            Object.assign({}, F),
                            P ? { size: P } : {}
                        )
                    ),
                    N = Us(
                        [
                            {
                                fieldPrefix:
                                    'min-max' === g ? 'upper_whisker_' : 'max_',
                                titlePrefix: 'Max',
                            },
                            { fieldPrefix: 'upper_box_', titlePrefix: 'Q3' },
                            { fieldPrefix: 'mid_box_', titlePrefix: 'Median' },
                            { fieldPrefix: 'lower_box_', titlePrefix: 'Q1' },
                            {
                                fieldPrefix:
                                    'min-max' === g ? 'lower_whisker_' : 'min_',
                                titlePrefix: 'Min',
                            },
                        ],
                        v,
                        w
                    ),
                    T = {
                        type: 'tick',
                        color: 'black',
                        opacity: 1,
                        orient: $,
                        invalid: p,
                        aria: !1,
                    },
                    M =
                        'min-max' === g
                            ? N
                            : Us(
                                  [
                                      {
                                          fieldPrefix: 'upper_whisker_',
                                          titlePrefix: 'Upper Whisker',
                                      },
                                      {
                                          fieldPrefix: 'lower_whisker_',
                                          titlePrefix: 'Lower Whisker',
                                      },
                                  ],
                                  v,
                                  w
                              ),
                    L = [
                        ..._({
                            partName: 'rule',
                            mark: { type: 'rule', invalid: p, aria: !1 },
                            positionPrefix: 'lower_whisker',
                            endPositionPrefix: 'lower_box',
                            extraEncoding: M,
                        }),
                        ..._({
                            partName: 'rule',
                            mark: { type: 'rule', invalid: p, aria: !1 },
                            positionPrefix: 'upper_box',
                            endPositionPrefix: 'upper_whisker',
                            extraEncoding: M,
                        }),
                        ..._({
                            partName: 'ticks',
                            mark: T,
                            positionPrefix: 'lower_whisker',
                            extraEncoding: M,
                        }),
                        ..._({
                            partName: 'ticks',
                            mark: T,
                            positionPrefix: 'upper_whisker',
                            extraEncoding: M,
                        }),
                    ],
                    q = [
                        ...('tukey' !== g ? L : []),
                        ...C({
                            partName: 'box',
                            mark: Object.assign(
                                Object.assign(
                                    { type: 'bar' },
                                    d ? { size: d } : {}
                                ),
                                {
                                    orient: k,
                                    invalid: p,
                                    ariaRoleDescription: 'box',
                                }
                            ),
                            positionPrefix: 'lower_box',
                            endPositionPrefix: 'upper_box',
                            extraEncoding: N,
                        }),
                        ...E({
                            partName: 'median',
                            mark: Object.assign(
                                Object.assign(
                                    Object.assign(
                                        { type: 'tick', invalid: p },
                                        (0, o.Kn)(t.boxplot.median) &&
                                            t.boxplot.median.color
                                            ? { color: t.boxplot.median.color }
                                            : {}
                                    ),
                                    d ? { size: d } : {}
                                ),
                                { orient: $, aria: !1 }
                            ),
                            positionPrefix: 'mid_box',
                            extraEncoding: N,
                        }),
                    ];
                if ('min-max' === g)
                    return Object.assign(Object.assign({}, c), {
                        transform: (null !== (i = c.transform) && void 0 !== i
                            ? i
                            : []
                        ).concat(b),
                        layer: q,
                    });
                const R = `datum["lower_box_${v.field}"]`,
                    W = `datum["upper_box_${v.field}"]`,
                    I = `(${W} - ${R})`,
                    U = `${R} - ${f} * ${I}`,
                    H = `${W} + ${f} * ${I}`,
                    B = `datum["${v.field}"]`,
                    J = { joinaggregate: ta(v.field), groupby: O },
                    G = {
                        transform: [
                            { filter: `(${U} <= ${B}) && (${B} <= ${H})` },
                            {
                                aggregate: [
                                    {
                                        op: 'min',
                                        field: v.field,
                                        as: `lower_whisker_${v.field}`,
                                    },
                                    {
                                        op: 'max',
                                        field: v.field,
                                        as: `upper_whisker_${v.field}`,
                                    },
                                    {
                                        op: 'min',
                                        field: `lower_box_${v.field}`,
                                        as: `lower_box_${v.field}`,
                                    },
                                    {
                                        op: 'max',
                                        field: `upper_box_${v.field}`,
                                        as: `upper_box_${v.field}`,
                                    },
                                    ...j,
                                ],
                                groupby: O,
                            },
                        ],
                        layer: L,
                    },
                    { tooltip: X } = F,
                    V = Ks(F, ['tooltip']),
                    { scale: K, axis: Y } = v,
                    Q = Hs(v),
                    Z = x(Y, ['title']),
                    ee = Js(u, 'outliers', t.boxplot, {
                        transform: [
                            { filter: `(${B} < ${U}) || (${B} > ${H})` },
                        ],
                        mark: 'point',
                        encoding: Object.assign(
                            Object.assign(
                                Object.assign(
                                    {
                                        [y]: Object.assign(
                                            Object.assign(
                                                Object.assign(
                                                    {
                                                        field: v.field,
                                                        type: v.type,
                                                    },
                                                    void 0 !== Q
                                                        ? { title: Q }
                                                        : {}
                                                ),
                                                void 0 !== K ? { scale: K } : {}
                                            ),
                                            A(Z) ? {} : { axis: Z }
                                        ),
                                    },
                                    V
                                ),
                                D ? { color: D } : {}
                            ),
                            S ? { tooltip: S } : {}
                        ),
                    })[0];
                let te;
                const ne = [...m, ...h, J];
                return (
                    ee
                        ? (te = { transform: ne, layer: [ee, G] })
                        : ((te = G), te.transform.unshift(...ne)),
                    Object.assign(Object.assign({}, c), {
                        layer: [te, { transform: b, layer: q }],
                    })
                );
            }
            function ta(e) {
                return [
                    { op: 'q1', field: e, as: `lower_box_${e}` },
                    { op: 'q3', field: e, as: `upper_box_${e}` },
                ];
            }
            var na = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            const ia = 'errorbar',
                ra = new Cs(ia, oa);
            function oa(e, { config: t }) {
                e = Object.assign(Object.assign({}, e), {
                    encoding: qs(e.encoding, t),
                });
                const {
                    transform: n,
                    continuousAxisChannelDef: i,
                    continuousAxis: r,
                    encodingWithoutContinuousAxis: o,
                    ticksOrient: s,
                    markDef: a,
                    outerSpec: l,
                    tooltipEncoding: c,
                } = sa(e, ia, t);
                delete o.size;
                const u = Bs(a, r, i, o, t.errorbar),
                    f = a.thickness,
                    d = a.size,
                    p = Object.assign(
                        Object.assign(
                            { type: 'tick', orient: s, aria: !1 },
                            void 0 !== f ? { thickness: f } : {}
                        ),
                        void 0 !== d ? { size: d } : {}
                    ),
                    g = [
                        ...u({
                            partName: 'ticks',
                            mark: p,
                            positionPrefix: 'lower',
                            extraEncoding: c,
                        }),
                        ...u({
                            partName: 'ticks',
                            mark: p,
                            positionPrefix: 'upper',
                            extraEncoding: c,
                        }),
                        ...u({
                            partName: 'rule',
                            mark: Object.assign(
                                {
                                    type: 'rule',
                                    ariaRoleDescription: 'errorbar',
                                },
                                void 0 !== f ? { size: f } : {}
                            ),
                            positionPrefix: 'lower',
                            endPositionPrefix: 'upper',
                            extraEncoding: c,
                        }),
                    ];
                return Object.assign(
                    Object.assign(Object.assign({}, l), { transform: n }),
                    g.length > 1 ? { layer: g } : Object.assign({}, g[0])
                );
            }
            function sa(e, t, n) {
                var i;
                const { mark: r, encoding: o, params: s, projection: a } = e,
                    l = na(e, ['mark', 'encoding', 'params', 'projection']),
                    c = to(r) ? r : { type: r };
                s && $i(Zn(t));
                const { orient: u, inputType: f } = (function(e, t) {
                        const { encoding: n } = e;
                        if (
                            (function(e) {
                                return (
                                    (Vo(e.x) || Vo(e.y)) &&
                                    !Vo(e.x2) &&
                                    !Vo(e.y2) &&
                                    !Vo(e.xError) &&
                                    !Vo(e.xError2) &&
                                    !Vo(e.yError) &&
                                    !Vo(e.yError2)
                                );
                            })(n)
                        )
                            return { orient: Vs(e, t), inputType: 'raw' };
                        const i = (function(e) {
                                return Vo(e.x2) || Vo(e.y2);
                            })(n),
                            r = (function(e) {
                                return (
                                    Vo(e.xError) ||
                                    Vo(e.xError2) ||
                                    Vo(e.yError) ||
                                    Vo(e.yError2)
                                );
                            })(n),
                            o = n.x,
                            s = n.y;
                        if (i) {
                            if (r)
                                throw new Error(
                                    `${t} cannot be both type aggregated-upper-lower and aggregated-error`
                                );
                            const e = n.x2,
                                i = n.y2;
                            if (Vo(e) && Vo(i))
                                throw new Error(
                                    `${t} cannot have both x2 and y2`
                                );
                            if (Vo(e)) {
                                if (Go(o))
                                    return {
                                        orient: 'horizontal',
                                        inputType: 'aggregated-upper-lower',
                                    };
                                throw new Error(
                                    `Both x and x2 have to be quantitative in ${t}`
                                );
                            }
                            if (Vo(i)) {
                                if (Go(s))
                                    return {
                                        orient: 'vertical',
                                        inputType: 'aggregated-upper-lower',
                                    };
                                throw new Error(
                                    `Both y and y2 have to be quantitative in ${t}`
                                );
                            }
                            throw new Error('No ranged axis');
                        }
                        {
                            const e = n.xError,
                                i = n.xError2,
                                r = n.yError,
                                a = n.yError2;
                            if (Vo(i) && !Vo(e))
                                throw new Error(
                                    `${t} cannot have xError2 without xError`
                                );
                            if (Vo(a) && !Vo(r))
                                throw new Error(
                                    `${t} cannot have yError2 without yError`
                                );
                            if (Vo(e) && Vo(r))
                                throw new Error(
                                    `${t} cannot have both xError and yError with both are quantiative`
                                );
                            if (Vo(e)) {
                                if (Go(o))
                                    return {
                                        orient: 'horizontal',
                                        inputType: 'aggregated-error',
                                    };
                                throw new Error(
                                    'All x, xError, and xError2 (if exist) have to be quantitative'
                                );
                            }
                            if (Vo(r)) {
                                if (Go(s))
                                    return {
                                        orient: 'vertical',
                                        inputType: 'aggregated-error',
                                    };
                                throw new Error(
                                    'All y, yError, and yError2 (if exist) have to be quantitative'
                                );
                            }
                            throw new Error('No ranged axis');
                        }
                    })(e, t),
                    {
                        continuousAxisChannelDef: d,
                        continuousAxisChannelDef2: p,
                        continuousAxisChannelDefError: g,
                        continuousAxisChannelDefError2: m,
                        continuousAxis: h,
                    } = Gs(e, u, t),
                    {
                        errorBarSpecificAggregate: b,
                        postAggregateCalculates: v,
                        tooltipSummary: y,
                        tooltipTitleWithFieldName: O,
                    } = (function(e, t, n, i, r, o, s, a) {
                        let l = [],
                            c = [];
                        const u = t.field;
                        let f,
                            d = !1;
                        if ('raw' === o) {
                            const t = e.center
                                    ? e.center
                                    : e.extent
                                    ? 'iqr' === e.extent
                                        ? 'median'
                                        : 'mean'
                                    : a.errorbar.center,
                                n = e.extent
                                    ? e.extent
                                    : 'mean' === t
                                    ? 'stderr'
                                    : 'iqr';
                            if (
                                (('median' === t) != ('iqr' === n) &&
                                    $i(
                                        (function(e, t, n) {
                                            return `${e} is not usually used with ${t} for ${n}.`;
                                        })(t, n, s)
                                    ),
                                'stderr' === n || 'stdev' === n)
                            )
                                (l = [
                                    { op: n, field: u, as: `extent_${u}` },
                                    { op: t, field: u, as: `center_${u}` },
                                ]),
                                    (c = [
                                        {
                                            calculate: `datum["center_${u}"] + datum["extent_${u}"]`,
                                            as: `upper_${u}`,
                                        },
                                        {
                                            calculate: `datum["center_${u}"] - datum["extent_${u}"]`,
                                            as: `lower_${u}`,
                                        },
                                    ]),
                                    (f = [
                                        {
                                            fieldPrefix: 'center_',
                                            titlePrefix: H(t),
                                        },
                                        {
                                            fieldPrefix: 'upper_',
                                            titlePrefix: aa(t, n, '+'),
                                        },
                                        {
                                            fieldPrefix: 'lower_',
                                            titlePrefix: aa(t, n, '-'),
                                        },
                                    ]),
                                    (d = !0);
                            else {
                                let e, t, i;
                                'ci' === n
                                    ? ((e = 'mean'), (t = 'ci0'), (i = 'ci1'))
                                    : ((e = 'median'), (t = 'q1'), (i = 'q3')),
                                    (l = [
                                        { op: t, field: u, as: `lower_${u}` },
                                        { op: i, field: u, as: `upper_${u}` },
                                        { op: e, field: u, as: `center_${u}` },
                                    ]),
                                    (f = [
                                        {
                                            fieldPrefix: 'upper_',
                                            titlePrefix: ls(
                                                {
                                                    field: u,
                                                    aggregate: i,
                                                    type: 'quantitative',
                                                },
                                                a,
                                                { allowDisabling: !1 }
                                            ),
                                        },
                                        {
                                            fieldPrefix: 'lower_',
                                            titlePrefix: ls(
                                                {
                                                    field: u,
                                                    aggregate: t,
                                                    type: 'quantitative',
                                                },
                                                a,
                                                { allowDisabling: !1 }
                                            ),
                                        },
                                        {
                                            fieldPrefix: 'center_',
                                            titlePrefix: ls(
                                                {
                                                    field: u,
                                                    aggregate: e,
                                                    type: 'quantitative',
                                                },
                                                a,
                                                { allowDisabling: !1 }
                                            ),
                                        },
                                    ]);
                            }
                        } else {
                            (e.center || e.extent) &&
                                $i(
                                    ((p = e.center),
                                    `${(g = e.extent) ? 'extent ' : ''}${
                                        g && p ? 'and ' : ''
                                    }${p ? 'center ' : ''}${
                                        g && p ? 'are ' : 'is '
                                    }not needed when data are aggregated.`)
                                ),
                                'aggregated-upper-lower' === o
                                    ? ((f = []),
                                      (c = [
                                          {
                                              calculate: `datum["${n.field}"]`,
                                              as: `upper_${u}`,
                                          },
                                          {
                                              calculate: `datum["${u}"]`,
                                              as: `lower_${u}`,
                                          },
                                      ]))
                                    : 'aggregated-error' === o &&
                                      ((f = [
                                          { fieldPrefix: '', titlePrefix: u },
                                      ]),
                                      (c = [
                                          {
                                              calculate: `datum["${u}"] + datum["${i.field}"]`,
                                              as: `upper_${u}`,
                                          },
                                      ]),
                                      r
                                          ? c.push({
                                                calculate: `datum["${u}"] + datum["${r.field}"]`,
                                                as: `lower_${u}`,
                                            })
                                          : c.push({
                                                calculate: `datum["${u}"] - datum["${i.field}"]`,
                                                as: `lower_${u}`,
                                            }));
                            for (const e of c)
                                f.push({
                                    fieldPrefix: e.as.substring(0, 6),
                                    titlePrefix: V(
                                        V(e.calculate, 'datum["', ''),
                                        '"]',
                                        ''
                                    ),
                                });
                        }
                        var p, g;
                        return {
                            postAggregateCalculates: c,
                            errorBarSpecificAggregate: l,
                            tooltipSummary: f,
                            tooltipTitleWithFieldName: d,
                        };
                    })(c, d, p, g, m, f, t, n),
                    x = o,
                    j = h,
                    w = (x[j], 'x' === h ? 'x2' : 'y2'),
                    $ = (x[w], 'x' === h ? 'xError' : 'yError'),
                    k = (x[$], 'x' === h ? 'xError2' : 'yError2'),
                    S =
                        (x[k],
                        na(x, [
                            'symbol' == typeof j ? j : j + '',
                            'symbol' == typeof w ? w : w + '',
                            'symbol' == typeof $ ? $ : $ + '',
                            'symbol' == typeof k ? k : k + '',
                        ])),
                    {
                        bins: D,
                        timeUnits: P,
                        aggregate: F,
                        groupby: z,
                        encoding: _,
                    } = Ms(S, n),
                    C = [...F, ...b],
                    E = 'raw' !== f ? [] : z,
                    N = Us(y, d, _, O);
                return {
                    transform: [
                        ...(null !== (i = l.transform) && void 0 !== i
                            ? i
                            : []),
                        ...D,
                        ...P,
                        ...(0 === C.length
                            ? []
                            : [{ aggregate: C, groupby: E }]),
                        ...v,
                    ],
                    groupby: E,
                    continuousAxisChannelDef: d,
                    continuousAxis: h,
                    encodingWithoutContinuousAxis: _,
                    ticksOrient: 'vertical' === u ? 'horizontal' : 'vertical',
                    markDef: c,
                    outerSpec: l,
                    tooltipEncoding: N,
                };
            }
            function aa(e, t, n) {
                return `${H(e)} ${n} ${t}`;
            }
            const la = 'errorband',
                ca = new Cs(la, ua);
            function ua(e, { config: t }) {
                e = Object.assign(Object.assign({}, e), {
                    encoding: qs(e.encoding, t),
                });
                const {
                        transform: n,
                        continuousAxisChannelDef: i,
                        continuousAxis: r,
                        encodingWithoutContinuousAxis: o,
                        markDef: s,
                        outerSpec: a,
                        tooltipEncoding: l,
                    } = sa(e, la, t),
                    c = s,
                    u = Bs(c, r, i, o, t.errorband),
                    f = void 0 !== e.encoding.x && void 0 !== e.encoding.y;
                let d = { type: f ? 'area' : 'rect' },
                    p = { type: f ? 'line' : 'rule' };
                const g = Object.assign(
                    Object.assign(
                        {},
                        c.interpolate ? { interpolate: c.interpolate } : {}
                    ),
                    c.tension && c.interpolate ? { tension: c.tension } : {}
                );
                return (
                    f
                        ? ((d = Object.assign(
                              Object.assign(Object.assign({}, d), g),
                              { ariaRoleDescription: 'errorband' }
                          )),
                          (p = Object.assign(
                              Object.assign(Object.assign({}, p), g),
                              { aria: !1 }
                          )))
                        : c.interpolate
                        ? $i(Oi('interpolate'))
                        : c.tension && $i(Oi('tension')),
                    Object.assign(Object.assign({}, a), {
                        transform: n,
                        layer: [
                            ...u({
                                partName: 'band',
                                mark: d,
                                positionPrefix: 'lower',
                                endPositionPrefix: 'upper',
                                extraEncoding: l,
                            }),
                            ...u({
                                partName: 'borders',
                                mark: p,
                                positionPrefix: 'lower',
                                extraEncoding: l,
                            }),
                            ...u({
                                partName: 'borders',
                                mark: p,
                                positionPrefix: 'upper',
                                extraEncoding: l,
                            }),
                        ],
                    })
                );
            }
            const fa = {};
            function da(e, t, n) {
                const i = new Cs(e, t);
                fa[e] = { normalizer: i, parts: n };
            }
            da(Ys, ea, ['box', 'median', 'outliers', 'rule', 'ticks']),
                da(ia, oa, ['ticks', 'rule']),
                da(la, ua, ['band', 'borders']);
            const pa = [
                    'gradientHorizontalMaxLength',
                    'gradientHorizontalMinLength',
                    'gradientVerticalMaxLength',
                    'gradientVerticalMinLength',
                    'unselectedOpacity',
                ],
                ga = {
                    titleAlign: 'align',
                    titleAnchor: 'anchor',
                    titleAngle: 'angle',
                    titleBaseline: 'baseline',
                    titleColor: 'color',
                    titleFont: 'font',
                    titleFontSize: 'fontSize',
                    titleFontStyle: 'fontStyle',
                    titleFontWeight: 'fontWeight',
                    titleLimit: 'limit',
                    titleLineHeight: 'lineHeight',
                    titleOrient: 'orient',
                    titlePadding: 'offset',
                },
                ma = {
                    labelAlign: 'align',
                    labelAnchor: 'anchor',
                    labelAngle: 'angle',
                    labelBaseline: 'baseline',
                    labelColor: 'color',
                    labelFont: 'font',
                    labelFontSize: 'fontSize',
                    labelFontStyle: 'fontStyle',
                    labelFontWeight: 'fontWeight',
                    labelLimit: 'limit',
                    labelLineHeight: 'lineHeight',
                    labelOrient: 'orient',
                    labelPadding: 'offset',
                },
                ha = M(ga),
                ba = M(ma),
                va = M({
                    header: 1,
                    headerRow: 1,
                    headerColumn: 1,
                    headerFacet: 1,
                }),
                ya = [
                    'size',
                    'shape',
                    'fill',
                    'stroke',
                    'strokeDash',
                    'strokeWidth',
                    'opacity',
                ],
                Oa = {
                    aria: 1,
                    clipHeight: 1,
                    columnPadding: 1,
                    columns: 1,
                    cornerRadius: 1,
                    description: 1,
                    direction: 1,
                    fillColor: 1,
                    format: 1,
                    formatType: 1,
                    gradientLength: 1,
                    gradientOpacity: 1,
                    gradientStrokeColor: 1,
                    gradientStrokeWidth: 1,
                    gradientThickness: 1,
                    gridAlign: 1,
                    labelAlign: 1,
                    labelBaseline: 1,
                    labelColor: 1,
                    labelFont: 1,
                    labelFontSize: 1,
                    labelFontStyle: 1,
                    labelFontWeight: 1,
                    labelLimit: 1,
                    labelOffset: 1,
                    labelOpacity: 1,
                    labelOverlap: 1,
                    labelPadding: 1,
                    labelSeparation: 1,
                    legendX: 1,
                    legendY: 1,
                    offset: 1,
                    orient: 1,
                    padding: 1,
                    rowPadding: 1,
                    strokeColor: 1,
                    symbolDash: 1,
                    symbolDashOffset: 1,
                    symbolFillColor: 1,
                    symbolLimit: 1,
                    symbolOffset: 1,
                    symbolOpacity: 1,
                    symbolSize: 1,
                    symbolStrokeColor: 1,
                    symbolStrokeWidth: 1,
                    symbolType: 1,
                    tickCount: 1,
                    tickMinStep: 1,
                    title: 1,
                    titleAlign: 1,
                    titleAnchor: 1,
                    titleBaseline: 1,
                    titleColor: 1,
                    titleFont: 1,
                    titleFontSize: 1,
                    titleFontStyle: 1,
                    titleFontWeight: 1,
                    titleLimit: 1,
                    titleLineHeight: 1,
                    titleOpacity: 1,
                    titleOrient: 1,
                    titlePadding: 1,
                    type: 1,
                    values: 1,
                    zindex: 1,
                },
                xa = (M(Oa), '_vgsid_'),
                ja = {
                    point: {
                        on: 'click',
                        fields: [xa],
                        toggle: 'event.shiftKey',
                        resolve: 'global',
                        clear: 'dblclick',
                    },
                    interval: {
                        on: '[mousedown, window:mouseup] > window:mousemove!',
                        encodings: ['x', 'y'],
                        translate:
                            '[mousedown, window:mouseup] > window:mousemove!',
                        zoom: 'wheel!',
                        mark: {
                            fill: '#333',
                            fillOpacity: 0.125,
                            stroke: 'white',
                        },
                        resolve: 'global',
                        clear: 'dblclick',
                    },
                };
            function wa(e) {
                return 'legend' === e || !!(null == e ? void 0 : e.legend);
            }
            function $a(e) {
                return wa(e) && (0, o.Kn)(e);
            }
            function ka(e) {
                return !!(null == e ? void 0 : e.select);
            }
            var Sa = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            function Da(e) {
                const t = [];
                for (const n of e || []) {
                    if (ka(n)) continue;
                    const { expr: e, bind: i } = n,
                        r = Sa(n, ['expr', 'bind']);
                    if (i && e) {
                        const n = Object.assign(Object.assign({}, r), {
                            bind: i,
                            init: e,
                        });
                        t.push(n);
                    } else {
                        const n = Object.assign(
                            Object.assign(
                                Object.assign({}, r),
                                e ? { update: e } : {}
                            ),
                            i ? { bind: i } : {}
                        );
                        t.push(n);
                    }
                }
                return t;
            }
            function Pa(e) {
                return 'concat' in e;
            }
            function Fa(e) {
                return 'vconcat' in e;
            }
            function za(e) {
                return 'hconcat' in e;
            }
            function _a({ step: e, offsetIsDiscrete: t }) {
                var n;
                return t
                    ? null !== (n = e.for) && void 0 !== n
                        ? n
                        : 'offset'
                    : 'position';
            }
            function Ca(e) {
                return (0, o.Kn)(e) && void 0 !== e.step;
            }
            function Ea(e) {
                return e.view || e.width || e.height;
            }
            const Na = M({
                align: 1,
                bounds: 1,
                center: 1,
                columns: 1,
                spacing: 1,
            });
            function Ta(e, t) {
                var n;
                return null !== (n = e[t]) && void 0 !== n
                    ? n
                    : e['width' === t ? 'continuousWidth' : 'continuousHeight'];
            }
            function Aa(e, t) {
                const n = Ma(e, t);
                return Ca(n) ? n.step : La;
            }
            function Ma(e, t) {
                var n;
                return Q(
                    null !== (n = e[t]) && void 0 !== n
                        ? n
                        : e['width' === t ? 'discreteWidth' : 'discreteHeight'],
                    { step: e.step }
                );
            }
            const La = 20,
                qa = {
                    background: 'white',
                    padding: 5,
                    timeFormat: '%b %d, %Y',
                    countTitle: 'Count of Records',
                    view: {
                        continuousWidth: 200,
                        continuousHeight: 200,
                        step: La,
                    },
                    mark: {
                        color: '#4c78a8',
                        invalid: 'filter',
                        timeUnitBandSize: 1,
                    },
                    arc: {},
                    area: {},
                    bar: {
                        binSpacing: 1,
                        continuousBandSize: 5,
                        timeUnitBandPosition: 0.5,
                    },
                    circle: {},
                    geoshape: {},
                    image: {},
                    line: {},
                    point: {},
                    rect: {
                        binSpacing: 0,
                        continuousBandSize: 5,
                        timeUnitBandPosition: 0.5,
                    },
                    rule: { color: 'black' },
                    square: {},
                    text: { color: 'black' },
                    tick: { thickness: 1 },
                    trail: {},
                    boxplot: {
                        size: 14,
                        extent: 1.5,
                        box: {},
                        median: { color: 'white' },
                        outliers: {},
                        rule: {},
                        ticks: null,
                    },
                    errorbar: { center: 'mean', rule: !0, ticks: !1 },
                    errorband: { band: { opacity: 0.3 }, borders: !1 },
                    scale: {
                        pointPadding: 0.5,
                        barBandPaddingInner: 0.1,
                        rectBandPaddingInner: 0,
                        bandWithNestedOffsetPaddingInner: 0.2,
                        bandWithNestedOffsetPaddingOuter: 0.2,
                        minBandSize: 2,
                        minFontSize: 8,
                        maxFontSize: 40,
                        minOpacity: 0.3,
                        maxOpacity: 0.8,
                        minSize: 9,
                        minStrokeWidth: 1,
                        maxStrokeWidth: 4,
                        quantileCount: 4,
                        quantizeCount: 4,
                        zero: !0,
                    },
                    projection: {},
                    legend: {
                        gradientHorizontalMaxLength: 200,
                        gradientHorizontalMinLength: 100,
                        gradientVerticalMaxLength: 200,
                        gradientVerticalMinLength: 64,
                        unselectedOpacity: 0.35,
                    },
                    header: { titlePadding: 10, labelPadding: 10 },
                    headerColumn: {},
                    headerRow: {},
                    headerFacet: {},
                    selection: ja,
                    style: {},
                    title: {},
                    facet: { spacing: 20 },
                    concat: { spacing: 20 },
                    normalizedNumberFormat: '.0%',
                },
                Ra = [
                    '#4c78a8',
                    '#f58518',
                    '#e45756',
                    '#72b7b2',
                    '#54a24b',
                    '#eeca3b',
                    '#b279a2',
                    '#ff9da6',
                    '#9d755d',
                    '#bab0ac',
                ],
                Wa = {
                    text: 11,
                    guideLabel: 10,
                    guideTitle: 11,
                    groupTitle: 13,
                    groupSubtitle: 12,
                },
                Ia = {
                    blue: Ra[0],
                    orange: Ra[1],
                    red: Ra[2],
                    teal: Ra[3],
                    green: Ra[4],
                    yellow: Ra[5],
                    purple: Ra[6],
                    pink: Ra[7],
                    brown: Ra[8],
                    gray0: '#000',
                    gray1: '#111',
                    gray2: '#222',
                    gray3: '#333',
                    gray4: '#444',
                    gray5: '#555',
                    gray6: '#666',
                    gray7: '#777',
                    gray8: '#888',
                    gray9: '#999',
                    gray10: '#aaa',
                    gray11: '#bbb',
                    gray12: '#ccc',
                    gray13: '#ddd',
                    gray14: '#eee',
                    gray15: '#fff',
                };
            function Ua(e) {
                const t = M(e || {}),
                    n = {};
                for (const i of t) {
                    const t = e[i];
                    n[i] = $s(t) ? _n(t) : Cn(t);
                }
                return n;
            }
            const Ha = [
                ...ro,
                ...zs,
                ...va,
                'background',
                'padding',
                'legend',
                'lineBreak',
                'scale',
                'style',
                'title',
                'view',
            ];
            function Ba(e = {}) {
                const { color: t, font: n, fontSize: i, selection: r } = e,
                    s = (function(e, t) {
                        var n = {};
                        for (var i in e)
                            Object.prototype.hasOwnProperty.call(e, i) &&
                                t.indexOf(i) < 0 &&
                                (n[i] = e[i]);
                        if (
                            null != e &&
                            'function' == typeof Object.getOwnPropertySymbols
                        ) {
                            var r = 0;
                            for (
                                i = Object.getOwnPropertySymbols(e);
                                r < i.length;
                                r++
                            )
                                t.indexOf(i[r]) < 0 &&
                                    Object.prototype.propertyIsEnumerable.call(
                                        e,
                                        i[r]
                                    ) &&
                                    (n[i[r]] = e[i[r]]);
                        }
                        return n;
                    })(e, ['color', 'font', 'fontSize', 'selection']),
                    a = (0, o.fE)(
                        {},
                        v(qa),
                        n
                            ? (function(e) {
                                  return {
                                      text: { font: e },
                                      style: {
                                          'guide-label': { font: e },
                                          'guide-title': { font: e },
                                          'group-title': { font: e },
                                          'group-subtitle': { font: e },
                                      },
                                  };
                              })(n)
                            : {},
                        t
                            ? (function(e = {}) {
                                  return {
                                      signals: [
                                          {
                                              name: 'color',
                                              value: (0, o.Kn)(e)
                                                  ? Object.assign(
                                                        Object.assign({}, Ia),
                                                        e
                                                    )
                                                  : Ia,
                                          },
                                      ],
                                      mark: { color: { signal: 'color.blue' } },
                                      rule: {
                                          color: { signal: 'color.gray0' },
                                      },
                                      text: {
                                          color: { signal: 'color.gray0' },
                                      },
                                      style: {
                                          'guide-label': {
                                              fill: { signal: 'color.gray0' },
                                          },
                                          'guide-title': {
                                              fill: { signal: 'color.gray0' },
                                          },
                                          'group-title': {
                                              fill: { signal: 'color.gray0' },
                                          },
                                          'group-subtitle': {
                                              fill: { signal: 'color.gray0' },
                                          },
                                          cell: {
                                              stroke: { signal: 'color.gray8' },
                                          },
                                      },
                                      axis: {
                                          domainColor: {
                                              signal: 'color.gray13',
                                          },
                                          gridColor: { signal: 'color.gray8' },
                                          tickColor: { signal: 'color.gray13' },
                                      },
                                      range: {
                                          category: [
                                              { signal: 'color.blue' },
                                              { signal: 'color.orange' },
                                              { signal: 'color.red' },
                                              { signal: 'color.teal' },
                                              { signal: 'color.green' },
                                              { signal: 'color.yellow' },
                                              { signal: 'color.purple' },
                                              { signal: 'color.pink' },
                                              { signal: 'color.brown' },
                                              { signal: 'color.grey8' },
                                          ],
                                      },
                                  };
                              })(t)
                            : {},
                        i
                            ? (function(e) {
                                  return {
                                      signals: [
                                          {
                                              name: 'fontSize',
                                              value: (0, o.Kn)(e)
                                                  ? Object.assign(
                                                        Object.assign({}, Wa),
                                                        e
                                                    )
                                                  : Wa,
                                          },
                                      ],
                                      text: {
                                          fontSize: { signal: 'fontSize.text' },
                                      },
                                      style: {
                                          'guide-label': {
                                              fontSize: {
                                                  signal: 'fontSize.guideLabel',
                                              },
                                          },
                                          'guide-title': {
                                              fontSize: {
                                                  signal: 'fontSize.guideTitle',
                                              },
                                          },
                                          'group-title': {
                                              fontSize: {
                                                  signal: 'fontSize.groupTitle',
                                              },
                                          },
                                          'group-subtitle': {
                                              fontSize: {
                                                  signal:
                                                      'fontSize.groupSubtitle',
                                              },
                                          },
                                      },
                                  };
                              })(i)
                            : {},
                        s || {}
                    );
                r && (0, Qi.writeConfig)(a, 'selection', r, !0);
                const l = x(a, Ha);
                for (const e of ['background', 'lineBreak', 'padding'])
                    a[e] && (l[e] = Cn(a[e]));
                for (const e of ro) a[e] && (l[e] = xn(a[e]));
                for (const e of zs) a[e] && (l[e] = Ua(a[e]));
                for (const e of va) a[e] && (l[e] = xn(a[e]));
                return (
                    a.legend && (l.legend = xn(a.legend)),
                    a.scale && (l.scale = xn(a.scale)),
                    a.style &&
                        (l.style = (function(e) {
                            const t = M(e),
                                n = {};
                            for (const i of t) n[i] = Ua(e[i]);
                            return n;
                        })(a.style)),
                    a.title && (l.title = xn(a.title)),
                    a.view && (l.view = xn(a.view)),
                    l
                );
            }
            const Ja = new Set(['view', ...eo]),
                Ga = [
                    'color',
                    'fontSize',
                    'background',
                    'padding',
                    'facet',
                    'concat',
                    'numberFormat',
                    'numberFormatType',
                    'normalizedNumberFormat',
                    'normalizedNumberFormatType',
                    'timeFormat',
                    'countTitle',
                    'header',
                    'axisQuantitative',
                    'axisTemporal',
                    'axisDiscrete',
                    'axisPoint',
                    'axisXBand',
                    'axisXPoint',
                    'axisXDiscrete',
                    'axisXQuantitative',
                    'axisXTemporal',
                    'axisYBand',
                    'axisYPoint',
                    'axisYDiscrete',
                    'axisYQuantitative',
                    'axisYTemporal',
                    'scale',
                    'selection',
                    'overlay',
                ],
                Xa = Object.assign(
                    {
                        view: [
                            'continuousWidth',
                            'continuousHeight',
                            'discreteWidth',
                            'discreteHeight',
                            'step',
                        ],
                    },
                    {
                        area: ['line', 'point'],
                        bar: [
                            'binSpacing',
                            'continuousBandSize',
                            'discreteBandSize',
                        ],
                        rect: [
                            'binSpacing',
                            'continuousBandSize',
                            'discreteBandSize',
                        ],
                        line: ['point'],
                        tick: ['bandSize', 'thickness'],
                    }
                );
            function Va(e, t, n, i) {
                const r = i ? e[t][i] : e[t];
                'view' === t && (n = 'cell');
                const o = Object.assign(
                    Object.assign({}, r),
                    e.style[null != n ? n : t]
                );
                A(o) || (e.style[null != n ? n : t] = o), i || delete e[t];
            }
            function Ka(e) {
                return 'layer' in e;
            }
            class Ya {
                map(e, t) {
                    return No(e)
                        ? this.mapFacet(e, t)
                        : (function(e) {
                              return 'repeat' in e;
                          })(e)
                        ? this.mapRepeat(e, t)
                        : za(e)
                        ? this.mapHConcat(e, t)
                        : Fa(e)
                        ? this.mapVConcat(e, t)
                        : Pa(e)
                        ? this.mapConcat(e, t)
                        : this.mapLayerOrUnit(e, t);
                }
                mapLayerOrUnit(e, t) {
                    if (Ka(e)) return this.mapLayer(e, t);
                    if (_s(e)) return this.mapUnit(e, t);
                    throw new Error(Jn(e));
                }
                mapLayer(e, t) {
                    return Object.assign(Object.assign({}, e), {
                        layer: e.layer.map(e => this.mapLayerOrUnit(e, t)),
                    });
                }
                mapHConcat(e, t) {
                    return Object.assign(Object.assign({}, e), {
                        hconcat: e.hconcat.map(e => this.map(e, t)),
                    });
                }
                mapVConcat(e, t) {
                    return Object.assign(Object.assign({}, e), {
                        vconcat: e.vconcat.map(e => this.map(e, t)),
                    });
                }
                mapConcat(e, t) {
                    const { concat: n } = e,
                        i = (function(e, t) {
                            var n = {};
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    t.indexOf(i) < 0 &&
                                    (n[i] = e[i]);
                            if (
                                null != e &&
                                'function' ==
                                    typeof Object.getOwnPropertySymbols
                            ) {
                                var r = 0;
                                for (
                                    i = Object.getOwnPropertySymbols(e);
                                    r < i.length;
                                    r++
                                )
                                    t.indexOf(i[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(
                                            e,
                                            i[r]
                                        ) &&
                                        (n[i[r]] = e[i[r]]);
                            }
                            return n;
                        })(e, ['concat']);
                    return Object.assign(Object.assign({}, i), {
                        concat: n.map(e => this.map(e, t)),
                    });
                }
                mapFacet(e, t) {
                    return Object.assign(Object.assign({}, e), {
                        spec: this.map(e.spec, t),
                    });
                }
                mapRepeat(e, t) {
                    return Object.assign(Object.assign({}, e), {
                        spec: this.map(e.spec, t),
                    });
                }
            }
            const Qa = { zero: 1, center: 1, normalize: 1 },
                Za = new Set([Lr, Rr, qr, Br, Ur, Vr, Kr, Ir, Jr, Gr]),
                el = new Set([Rr, qr, Lr]);
            function tl(e) {
                return Ho(e) && 'quantitative' === Bo(e) && !e.bin;
            }
            function nl(e, t) {
                var n, i;
                const r = 'x' === t ? 'y' : 'radius',
                    o = e[t],
                    s = e[r];
                if (Ho(o) && Ho(s))
                    if (tl(o) && tl(s)) {
                        if (o.stack) return t;
                        if (s.stack) return r;
                        const e = Ho(o) && !!o.aggregate;
                        if (e !== (Ho(s) && !!s.aggregate)) return e ? t : r;
                        {
                            const e =
                                    null === (n = o.scale) || void 0 === n
                                        ? void 0
                                        : n.type,
                                a =
                                    null === (i = s.scale) || void 0 === i
                                        ? void 0
                                        : i.type;
                            if (e && 'linear' !== e) return r;
                            if (a && 'linear' !== a) return t;
                        }
                    } else {
                        if (tl(o)) return t;
                        if (tl(s)) return r;
                    }
                else {
                    if (tl(o)) return t;
                    if (tl(s)) return r;
                }
            }
            function il(e, t) {
                var n, i;
                const r = to(e) ? e.type : e;
                if (!Za.has(r)) return null;
                const s = nl(t, 'x') || nl(t, 'theta');
                if (!s) return null;
                const a = t[s],
                    l = Ho(a) ? is(a, {}) : void 0,
                    c = (function(e) {
                        switch (e) {
                            case 'x':
                                return 'y';
                            case 'y':
                                return 'x';
                            case 'theta':
                                return 'radius';
                            case 'radius':
                                return 'theta';
                        }
                    })(s),
                    u = [],
                    f = new Set();
                if (t[c]) {
                    const e = t[c],
                        n = Ho(e) ? is(e, {}) : void 0;
                    n && n !== l && (u.push(c), f.add(n));
                    const i = 'x' === c ? 'xOffset' : 'yOffset',
                        r = t[i],
                        o = Ho(r) ? is(r, {}) : void 0;
                    o && o !== l && (u.push(i), f.add(o));
                }
                const d = Ct.reduce((e, n) => {
                    if ('tooltip' !== n && Es(t, n)) {
                        const i = t[n];
                        for (const t of (0, o.IX)(i)) {
                            const i = ds(t);
                            if (i.aggregate) continue;
                            const r = is(i, {});
                            (r && f.has(r)) ||
                                e.push({ channel: n, fieldDef: i });
                        }
                    }
                    return e;
                }, []);
                let p;
                return (
                    void 0 !== a.stack
                        ? (p = (0, o.jn)(a.stack)
                              ? a.stack
                                  ? 'zero'
                                  : null
                              : a.stack)
                        : el.has(r) && (p = 'zero'),
                    p && p in Qa
                        ? As(t) && 0 === d.length
                            ? null
                            : (null === (n = null == a ? void 0 : a.scale) ||
                              void 0 === n
                                  ? void 0
                                  : n.type) &&
                              'linear' !==
                                  (null ===
                                      (i = null == a ? void 0 : a.scale) ||
                                  void 0 === i
                                      ? void 0
                                      : i.type)
                            ? ($i(
                                  (function(e) {
                                      return `Cannot stack non-linear scale (${e}).`;
                                  })(a.scale.type)
                              ),
                              null)
                            : Vo(t[dt(s)])
                            ? (void 0 !== a.stack &&
                                  $i(
                                      `Cannot stack "${(g = s)}" if there is already "${g}2".`
                                  ),
                              null)
                            : (Ho(a) &&
                                  a.aggregate &&
                                  !dn.has(a.aggregate) &&
                                  $i(
                                      `Stacking is applied even though the aggregate function is non-summative ("${a.aggregate}").`
                                  ),
                              {
                                  groupbyChannels: u,
                                  groupbyFields: f,
                                  fieldChannel: s,
                                  impute: null !== a.impute && Qr(r),
                                  stackBy: d,
                                  offset: p,
                              })
                        : null
                );
                var g;
            }
            var rl = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            function ol(e) {
                const { point: t, line: n } = e,
                    i = rl(e, ['point', 'line']);
                return M(i).length > 1 ? i : i.type;
            }
            function sl(e) {
                for (const t of ['line', 'area', 'rule', 'trail'])
                    e[t] &&
                        (e = Object.assign(Object.assign({}, e), {
                            [t]: x(e[t], ['point', 'line']),
                        }));
                return e;
            }
            function al(e, t = {}, n) {
                return 'transparent' === e.point
                    ? { opacity: 0 }
                    : e.point
                    ? (0, o.Kn)(e.point)
                        ? e.point
                        : {}
                    : void 0 !== e.point
                    ? null
                    : t.point || n.shape
                    ? (0, o.Kn)(t.point)
                        ? t.point
                        : {}
                    : void 0;
            }
            function ll(e, t = {}) {
                return e.line
                    ? !0 === e.line
                        ? {}
                        : e.line
                    : void 0 !== e.line
                    ? null
                    : t.line
                    ? !0 === t.line
                        ? {}
                        : t.line
                    : void 0;
            }
            class cl {
                constructor() {
                    this.name = 'path-overlay';
                }
                hasMatchingType(e, t) {
                    if (_s(e)) {
                        const { mark: n, encoding: i } = e,
                            r = to(n) ? n : { type: n };
                        switch (r.type) {
                            case 'line':
                            case 'rule':
                            case 'trail':
                                return !!al(r, t[r.type], i);
                            case 'area':
                                return (
                                    !!al(r, t[r.type], i) || !!ll(r, t[r.type])
                                );
                        }
                    }
                    return !1;
                }
                run(e, t, n) {
                    const { config: i } = t,
                        { params: r, projection: o, mark: s, encoding: a } = e,
                        l = rl(e, ['params', 'projection', 'mark', 'encoding']),
                        c = qs(a, i),
                        u = to(s) ? s : { type: s },
                        f = al(u, i[u.type], c),
                        d = 'area' === u.type && ll(u, i[u.type]),
                        p = [
                            Object.assign(
                                Object.assign({}, r ? { params: r } : {}),
                                {
                                    mark: ol(
                                        Object.assign(
                                            Object.assign(
                                                {},
                                                'area' === u.type &&
                                                    void 0 === u.opacity &&
                                                    void 0 === u.fillOpacity
                                                    ? { opacity: 0.7 }
                                                    : {}
                                            ),
                                            u
                                        )
                                    ),
                                    encoding: x(c, ['shape']),
                                }
                            ),
                        ],
                        g = il(u, c);
                    let m = c;
                    if (g) {
                        const { fieldChannel: e, offset: t } = g;
                        m = Object.assign(Object.assign({}, c), {
                            [e]: Object.assign(
                                Object.assign({}, c[e]),
                                t ? { stack: t } : {}
                            ),
                        });
                    }
                    return (
                        (m = x(m, ['y2', 'x2'])),
                        d &&
                            p.push(
                                Object.assign(
                                    Object.assign(
                                        {},
                                        o ? { projection: o } : {}
                                    ),
                                    {
                                        mark: Object.assign(
                                            Object.assign(
                                                { type: 'line' },
                                                O(u, [
                                                    'clip',
                                                    'interpolate',
                                                    'tension',
                                                    'tooltip',
                                                ])
                                            ),
                                            d
                                        ),
                                        encoding: m,
                                    }
                                )
                            ),
                        f &&
                            p.push(
                                Object.assign(
                                    Object.assign(
                                        {},
                                        o ? { projection: o } : {}
                                    ),
                                    {
                                        mark: Object.assign(
                                            Object.assign(
                                                {
                                                    type: 'point',
                                                    opacity: 1,
                                                    filled: !0,
                                                },
                                                O(u, ['clip', 'tooltip'])
                                            ),
                                            f
                                        ),
                                        encoding: m,
                                    }
                                )
                            ),
                        n(
                            Object.assign(Object.assign({}, l), { layer: p }),
                            Object.assign(Object.assign({}, t), {
                                config: sl(i),
                            })
                        )
                    );
                }
            }
            function ul(e, t) {
                return t ? (Co(e) ? hl(e, t) : pl(e, t)) : e;
            }
            function fl(e, t) {
                return t ? hl(e, t) : e;
            }
            function dl(e, t, n) {
                const i = t[e];
                return (r = i) && !(0, o.HD)(r) && 'repeat' in r
                    ? i.repeat in n
                        ? Object.assign(Object.assign({}, t), {
                              [e]: n[i.repeat],
                          })
                        : void $i(
                              (function(e) {
                                  return `Unknown repeated value "${e}".`;
                              })(i.repeat)
                          )
                    : t;
                var r;
            }
            function pl(e, t) {
                if (void 0 !== (e = dl('field', e, t))) {
                    if (null === e) return null;
                    if (Mo(e) && zo(e.sort)) {
                        const n = dl('field', e.sort, t);
                        e = Object.assign(
                            Object.assign({}, e),
                            n ? { sort: n } : {}
                        );
                    }
                    return e;
                }
            }
            function gl(e, t) {
                if (Ho(e)) return pl(e, t);
                {
                    const n = dl('datum', e, t);
                    return n === e || n.type || (n.type = 'nominal'), n;
                }
            }
            function ml(e, t) {
                if (!Vo(e)) {
                    if (Uo(e)) {
                        const n = gl(e.condition, t);
                        if (n)
                            return Object.assign(Object.assign({}, e), {
                                condition: n,
                            });
                        {
                            const { condition: t } = e;
                            return (function(e, t) {
                                var n = {};
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        i
                                    ) &&
                                        t.indexOf(i) < 0 &&
                                        (n[i] = e[i]);
                                if (
                                    null != e &&
                                    'function' ==
                                        typeof Object.getOwnPropertySymbols
                                ) {
                                    var r = 0;
                                    for (
                                        i = Object.getOwnPropertySymbols(e);
                                        r < i.length;
                                        r++
                                    )
                                        t.indexOf(i[r]) < 0 &&
                                            Object.prototype.propertyIsEnumerable.call(
                                                e,
                                                i[r]
                                            ) &&
                                            (n[i[r]] = e[i[r]]);
                                }
                                return n;
                            })(e, ['condition']);
                        }
                    }
                    return e;
                }
                {
                    const n = gl(e, t);
                    if (n) return n;
                    if (Wo(e)) return { condition: e.condition };
                }
            }
            function hl(e, t) {
                const n = {};
                for (const i in e)
                    if ((0, o.nr)(e, i)) {
                        const r = e[i];
                        if ((0, o.kJ)(r))
                            n[i] = r.map(e => ml(e, t)).filter(e => e);
                        else {
                            const e = ml(r, t);
                            void 0 !== e && (n[i] = e);
                        }
                    }
                return n;
            }
            class bl {
                constructor() {
                    this.name = 'RuleForRangedLine';
                }
                hasMatchingType(e) {
                    if (_s(e)) {
                        const { encoding: t, mark: n } = e;
                        if ('line' === n || (to(n) && 'line' === n.type))
                            for (const e of lt) {
                                const n = t[ut(e)];
                                if (t[e] && ((Ho(n) && !hn(n.bin)) || Jo(n)))
                                    return !0;
                            }
                    }
                    return !1;
                }
                run(e, t, n) {
                    const { encoding: i, mark: r } = e;
                    var s, a;
                    return (
                        $i(
                            ((s = !!i.x2),
                            (a = !!i.y2),
                            `Line mark is for continuous lines and thus cannot be used with ${
                                s && a ? 'x2 and y2' : s ? 'x2' : 'y2'
                            }. We will use the rule mark (line segments) instead.`)
                        ),
                        n(
                            Object.assign(Object.assign({}, e), {
                                mark: (0, o.Kn)(r)
                                    ? Object.assign(Object.assign({}, r), {
                                          type: 'rule',
                                      })
                                    : 'rule',
                            }),
                            t
                        )
                    );
                }
            }
            var vl = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            function yl({ parentEncoding: e, encoding: t = {}, layer: n }) {
                let i = {};
                if (e) {
                    const r = new Set([...M(e), ...M(t)]);
                    for (const s of r) {
                        const r = t[s],
                            a = e[s];
                        if (Vo(r)) {
                            const e = Object.assign(Object.assign({}, a), r);
                            i[s] = e;
                        } else
                            Uo(r)
                                ? (i[s] = Object.assign(Object.assign({}, r), {
                                      condition: Object.assign(
                                          Object.assign({}, a),
                                          r.condition
                                      ),
                                  }))
                                : r || null === r
                                ? (i[s] = r)
                                : (n ||
                                      Yo(a) ||
                                      $n(a) ||
                                      Vo(a) ||
                                      (0, o.kJ)(a)) &&
                                  (i[s] = a);
                    }
                } else i = t;
                return !i || A(i) ? void 0 : i;
            }
            function Ol(e) {
                const { parentProjection: t, projection: n } = e;
                return (
                    t &&
                        n &&
                        $i(
                            (function(e) {
                                const {
                                    parentProjection: t,
                                    projection: n,
                                } = e;
                                return `Layer's shared projection ${j(
                                    t
                                )} is overridden by a child projection ${j(
                                    n
                                )}.`;
                            })({ parentProjection: t, projection: n })
                        ),
                    null != n ? n : t
                );
            }
            function xl(e) {
                return 'filter' in e;
            }
            function jl(e) {
                return 'lookup' in e;
            }
            function wl(e) {
                return 'pivot' in e;
            }
            function $l(e) {
                return 'density' in e;
            }
            function kl(e) {
                return 'quantile' in e;
            }
            function Sl(e) {
                return 'regression' in e;
            }
            function Dl(e) {
                return 'loess' in e;
            }
            function Pl(e) {
                return 'sample' in e;
            }
            function Fl(e) {
                return 'window' in e;
            }
            function zl(e) {
                return 'joinaggregate' in e;
            }
            function _l(e) {
                return 'flatten' in e;
            }
            function Cl(e) {
                return 'calculate' in e;
            }
            function El(e) {
                return 'bin' in e;
            }
            function Nl(e) {
                return 'impute' in e;
            }
            function Tl(e) {
                return 'timeUnit' in e;
            }
            function Al(e) {
                return 'aggregate' in e;
            }
            function Ml(e) {
                return 'stack' in e;
            }
            function Ll(e) {
                return 'fold' in e;
            }
            var ql = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            function Rl(e, t) {
                const { transform: n } = e,
                    i = ql(e, ['transform']);
                if (n) {
                    const e = n.map(e => {
                        if (xl(e)) return { filter: Ul(e, t) };
                        if (El(e) && bn(e.bin))
                            return Object.assign(Object.assign({}, e), {
                                bin: Il(e.bin),
                            });
                        if (jl(e)) {
                            const t = e.from,
                                { selection: n } = t,
                                i = ql(t, ['selection']);
                            return n
                                ? Object.assign(Object.assign({}, e), {
                                      from: Object.assign({ param: n }, i),
                                  })
                                : e;
                        }
                        return e;
                    });
                    return Object.assign(Object.assign({}, i), {
                        transform: e,
                    });
                }
                return e;
            }
            function Wl(e, t) {
                var n, i;
                const r = v(e);
                if (
                    (Ho(r) && bn(r.bin) && (r.bin = Il(r.bin)),
                    Qo(r) &&
                        (null ===
                            (i =
                                null === (n = r.scale) || void 0 === n
                                    ? void 0
                                    : n.domain) || void 0 === i
                            ? void 0
                            : i.selection))
                ) {
                    const e = r.scale.domain,
                        { selection: t } = e,
                        n = ql(e, ['selection']);
                    r.scale.domain = Object.assign(
                        Object.assign({}, n),
                        t ? { param: t } : {}
                    );
                }
                if (Wo(r))
                    if ((0, Qi.isArray)(r.condition))
                        r.condition = r.condition.map(e => {
                            const { selection: n, param: i, test: r } = e,
                                o = ql(e, ['selection', 'param', 'test']);
                            return i
                                ? e
                                : Object.assign(Object.assign({}, o), {
                                      test: Ul(e, t),
                                  });
                        });
                    else {
                        const e = Wl(r.condition, t),
                            { selection: n, param: i, test: o } = e,
                            s = ql(e, ['selection', 'param', 'test']);
                        r.condition = i
                            ? r.condition
                            : Object.assign(Object.assign({}, s), {
                                  test: Ul(r.condition, t),
                              });
                    }
                return r;
            }
            function Il(e) {
                const t = e.extent;
                if (null == t ? void 0 : t.selection) {
                    const { selection: n } = t,
                        i = ql(t, ['selection']);
                    return Object.assign(Object.assign({}, e), {
                        extent: Object.assign(Object.assign({}, i), {
                            param: n,
                        }),
                    });
                }
                return e;
            }
            function Ul(e, t) {
                const n = e =>
                    h(e, e => {
                        var n, i, r;
                        const o = {
                            param: e,
                            empty:
                                null === (n = t.emptySelections[e]) ||
                                void 0 === n ||
                                n,
                        };
                        return (
                            (null !== (i = (r = t.selectionPredicates)[e]) &&
                                void 0 !== i) ||
                                (r[e] = []),
                            t.selectionPredicates[e].push(o),
                            o
                        );
                    });
                return e.selection
                    ? n(e.selection)
                    : h(e.test || e.filter, e =>
                          e.selection ? n(e.selection) : e
                      );
            }
            class Hl extends Ya {
                map(e, t) {
                    var n;
                    const i =
                        null !== (n = t.selections) && void 0 !== n ? n : [];
                    if (e.params && !_s(e)) {
                        const t = [];
                        for (const n of e.params) ka(n) ? i.push(n) : t.push(n);
                        e.params = t;
                    }
                    return (t.selections = i), super.map(e, Bl(e, t));
                }
                mapUnit(e, t) {
                    var n;
                    const i = t.selections;
                    if (!i || !i.length) return e;
                    const r = (null !== (n = t.path) && void 0 !== n
                            ? n
                            : []
                        ).concat(e.name),
                        o = [];
                    for (const t of i)
                        if (t.views && t.views.length)
                            for (const n of t.views)
                                (((0, Qi.isString)(n) &&
                                    (n === e.name || r.indexOf(n) >= 0)) ||
                                    ((0, Qi.isArray)(n) &&
                                        n
                                            .map(e => r.indexOf(e))
                                            .every(
                                                (e, t, n) =>
                                                    -1 !== e &&
                                                    (0 === t || e > n[t - 1])
                                            ))) &&
                                    o.push(t);
                        else o.push(t);
                    return o.length && (e.params = o), e;
                }
            }
            for (const e of [
                'mapFacet',
                'mapRepeat',
                'mapHConcat',
                'mapVConcat',
                'mapLayer',
            ]) {
                const t = Hl.prototype[e];
                Hl.prototype[e] = function(e, n) {
                    return t.call(this, e, Bl(e, n));
                };
            }
            function Bl(e, t) {
                var n;
                return e.name
                    ? Object.assign(Object.assign({}, t), {
                          path: (null !== (n = t.path) && void 0 !== n
                              ? n
                              : []
                          ).concat(e.name),
                      })
                    : t;
            }
            function Jl(e, t) {
                void 0 === t && (t = Ba(e.config));
                const n = (function(e, t = {}) {
                        const n = { config: t };
                        return Vl.map(Gl.map(Xl.map(e, n), n), n);
                    })(e, t),
                    { width: i, height: r } = e,
                    o = (function(e, t, n) {
                        let { width: i, height: r } = t;
                        const o = _s(e) || Ka(e),
                            s = {};
                        o
                            ? 'container' == i && 'container' == r
                                ? ((s.type = 'fit'), (s.contains = 'padding'))
                                : 'container' == i
                                ? ((s.type = 'fit-x'), (s.contains = 'padding'))
                                : 'container' == r &&
                                  ((s.type = 'fit-y'), (s.contains = 'padding'))
                            : ('container' == i &&
                                  ($i(Gn('width')), (i = void 0)),
                              'container' == r &&
                                  ($i(Gn('height')), (r = void 0)));
                        const a = Object.assign(
                            Object.assign(
                                Object.assign({ type: 'pad' }, s),
                                n ? Kl(n.autosize) : {}
                            ),
                            Kl(e.autosize)
                        );
                        if (
                            ('fit' !== a.type ||
                                o ||
                                ($i(
                                    'Autosize "fit" only works for single views and layered views.'
                                ),
                                (a.type = 'pad')),
                            'container' == i &&
                                'fit' != a.type &&
                                'fit-x' != a.type &&
                                $i(Xn('width')),
                            'container' == r &&
                                'fit' != a.type &&
                                'fit-y' != a.type &&
                                $i(Xn('height')),
                            !b(a, { type: 'pad' }))
                        )
                            return a;
                    })(n, { width: i, height: r, autosize: e.autosize }, t);
                return Object.assign(
                    Object.assign({}, n),
                    o ? { autosize: o } : {}
                );
            }
            const Gl = new (class extends Ya {
                    constructor() {
                        super(...arguments),
                            (this.nonFacetUnitNormalizers = [
                                Qs,
                                ra,
                                ca,
                                new cl(),
                                new bl(),
                            ]);
                    }
                    map(e, t) {
                        if (_s(e)) {
                            const n = Es(e.encoding, ae),
                                i = Es(e.encoding, le),
                                r = Es(e.encoding, ce);
                            if (n || i || r) return this.mapFacetedUnit(e, t);
                        }
                        return super.map(e, t);
                    }
                    mapUnit(e, t) {
                        const { parentEncoding: n, parentProjection: i } = t,
                            r = fl(e.encoding, t.repeater),
                            o = Object.assign(
                                Object.assign({}, e),
                                r ? { encoding: r } : {}
                            );
                        if (n || i)
                            return this.mapUnitWithParentEncodingOrProjection(
                                o,
                                t
                            );
                        const s = this.mapLayerOrUnit.bind(this);
                        for (const e of this.nonFacetUnitNormalizers)
                            if (e.hasMatchingType(o, t.config))
                                return e.run(o, t, s);
                        return o;
                    }
                    mapRepeat(e, t) {
                        return (function(e) {
                            return !(0, o.kJ)(e.repeat) && e.repeat.layer;
                        })(e)
                            ? this.mapLayerRepeat(e, t)
                            : this.mapNonLayerRepeat(e, t);
                    }
                    mapLayerRepeat(e, t) {
                        const { repeat: n, spec: i } = e,
                            r = vl(e, ['repeat', 'spec']),
                            { row: o, column: s, layer: a } = n,
                            { repeater: l = {}, repeaterPrefix: c = '' } = t;
                        return o || s
                            ? this.mapRepeat(
                                  Object.assign(Object.assign({}, e), {
                                      repeat: Object.assign(
                                          Object.assign(
                                              {},
                                              o ? { row: o } : {}
                                          ),
                                          s ? { column: s } : {}
                                      ),
                                      spec: { repeat: { layer: a }, spec: i },
                                  }),
                                  t
                              )
                            : Object.assign(Object.assign({}, r), {
                                  layer: a.map(e => {
                                      const n = Object.assign(
                                              Object.assign({}, l),
                                              { layer: e }
                                          ),
                                          r = `${(i.name || '') +
                                              c}child__layer_${W(e)}`,
                                          o = this.mapLayerOrUnit(
                                              i,
                                              Object.assign(
                                                  Object.assign({}, t),
                                                  {
                                                      repeater: n,
                                                      repeaterPrefix: r,
                                                  }
                                              )
                                          );
                                      return (o.name = r), o;
                                  }),
                              });
                    }
                    mapNonLayerRepeat(e, t) {
                        var n;
                        const { repeat: i, spec: r, data: s } = e,
                            a = vl(e, ['repeat', 'spec', 'data']);
                        !(0, o.kJ)(i) &&
                            e.columns &&
                            ((e = x(e, ['columns'])), $i(ei('repeat')));
                        const l = [],
                            { repeater: c = {}, repeaterPrefix: u = '' } = t,
                            f = (!(0, o.kJ)(i) && i.row) || [c ? c.row : null],
                            d = (!(0, o.kJ)(i) && i.column) || [
                                c ? c.column : null,
                            ],
                            p = ((0, o.kJ)(i) && i) || [c ? c.repeat : null];
                        for (const e of p)
                            for (const n of f)
                                for (const s of d) {
                                    const a = {
                                            repeat: e,
                                            row: n,
                                            column: s,
                                            layer: c.layer,
                                        },
                                        f =
                                            (r.name || '') +
                                            u +
                                            'child__' +
                                            ((0, o.kJ)(i)
                                                ? `${W(e)}`
                                                : (i.row ? `row_${W(n)}` : '') +
                                                  (i.column
                                                      ? `column_${W(s)}`
                                                      : '')),
                                        d = this.map(
                                            r,
                                            Object.assign(
                                                Object.assign({}, t),
                                                {
                                                    repeater: a,
                                                    repeaterPrefix: f,
                                                }
                                            )
                                        );
                                    (d.name = f), l.push(x(d, ['data']));
                                }
                        const g = (0, o.kJ)(i)
                            ? e.columns
                            : i.column
                            ? i.column.length
                            : 1;
                        return Object.assign(
                            Object.assign(
                                {
                                    data:
                                        null !== (n = r.data) && void 0 !== n
                                            ? n
                                            : s,
                                    align: 'all',
                                },
                                a
                            ),
                            { columns: g, concat: l }
                        );
                    }
                    mapFacet(e, t) {
                        const { facet: n } = e;
                        return (
                            Co(n) &&
                                e.columns &&
                                ((e = x(e, ['columns'])), $i(ei('facet'))),
                            super.mapFacet(e, t)
                        );
                    }
                    mapUnitWithParentEncodingOrProjection(e, t) {
                        const { encoding: n, projection: i } = e,
                            {
                                parentEncoding: r,
                                parentProjection: o,
                                config: s,
                            } = t,
                            a = Ol({ parentProjection: o, projection: i }),
                            l = yl({
                                parentEncoding: r,
                                encoding: fl(n, t.repeater),
                            });
                        return this.mapUnit(
                            Object.assign(
                                Object.assign(
                                    Object.assign({}, e),
                                    a ? { projection: a } : {}
                                ),
                                l ? { encoding: l } : {}
                            ),
                            { config: s }
                        );
                    }
                    mapFacetedUnit(e, t) {
                        const n = e.encoding,
                            { row: i, column: r, facet: o } = n,
                            s = vl(n, ['row', 'column', 'facet']),
                            {
                                mark: a,
                                width: l,
                                projection: c,
                                height: u,
                                view: f,
                                params: d,
                                encoding: p,
                            } = e,
                            g = vl(e, [
                                'mark',
                                'width',
                                'projection',
                                'height',
                                'view',
                                'params',
                                'encoding',
                            ]),
                            {
                                facetMapping: m,
                                layout: h,
                            } = this.getFacetMappingAndLayout(
                                { row: i, column: r, facet: o },
                                t
                            ),
                            b = fl(s, t.repeater);
                        return this.mapFacet(
                            Object.assign(
                                Object.assign(Object.assign({}, g), h),
                                {
                                    facet: m,
                                    spec: Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                Object.assign(
                                                    Object.assign(
                                                        Object.assign(
                                                            {},
                                                            l
                                                                ? { width: l }
                                                                : {}
                                                        ),
                                                        u ? { height: u } : {}
                                                    ),
                                                    f ? { view: f } : {}
                                                ),
                                                c ? { projection: c } : {}
                                            ),
                                            { mark: a, encoding: b }
                                        ),
                                        d ? { params: d } : {}
                                    ),
                                }
                            ),
                            t
                        );
                    }
                    getFacetMappingAndLayout(e, t) {
                        var n;
                        const { row: i, column: r, facet: o } = e;
                        if (i || r) {
                            o &&
                                $i(
                                    `Facet encoding dropped as ${(s = [
                                        ...(i ? [ae] : []),
                                        ...(r ? [le] : []),
                                    ]).join(' and ')} ${
                                        s.length > 1 ? 'are' : 'is'
                                    } also specified.`
                                );
                            const t = {},
                                a = {};
                            for (const i of [ae, le]) {
                                const r = e[i];
                                if (r) {
                                    const {
                                            align: e,
                                            center: o,
                                            spacing: s,
                                            columns: l,
                                        } = r,
                                        c = vl(r, [
                                            'align',
                                            'center',
                                            'spacing',
                                            'columns',
                                        ]);
                                    t[i] = c;
                                    for (const e of [
                                        'align',
                                        'center',
                                        'spacing',
                                    ])
                                        void 0 !== r[e] &&
                                            ((null !== (n = a[e]) &&
                                                void 0 !== n) ||
                                                (a[e] = {}),
                                            (a[e][i] = r[e]));
                                }
                            }
                            return { facetMapping: t, layout: a };
                        }
                        {
                            const {
                                align: e,
                                center: n,
                                spacing: i,
                                columns: r,
                            } = o;
                            return {
                                facetMapping: ul(
                                    vl(o, [
                                        'align',
                                        'center',
                                        'spacing',
                                        'columns',
                                    ]),
                                    t.repeater
                                ),
                                layout: Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                {},
                                                e ? { align: e } : {}
                                            ),
                                            n ? { center: n } : {}
                                        ),
                                        i ? { spacing: i } : {}
                                    ),
                                    r ? { columns: r } : {}
                                ),
                            };
                        }
                        var s;
                    }
                    mapLayer(e, t) {
                        var { parentEncoding: n, parentProjection: i } = t,
                            r = vl(t, ['parentEncoding', 'parentProjection']);
                        const { encoding: o, projection: s } = e,
                            a = vl(e, ['encoding', 'projection']),
                            l = Object.assign(Object.assign({}, r), {
                                parentEncoding: yl({
                                    parentEncoding: n,
                                    encoding: o,
                                    layer: !0,
                                }),
                                parentProjection: Ol({
                                    parentProjection: i,
                                    projection: s,
                                }),
                            });
                        return super.mapLayer(a, l);
                    }
                })(),
                Xl = new (class extends Ya {
                    map(e, t) {
                        var n, i;
                        return (
                            (null !== (n = t.emptySelections) &&
                                void 0 !== n) ||
                                (t.emptySelections = {}),
                            (null !== (i = t.selectionPredicates) &&
                                void 0 !== i) ||
                                (t.selectionPredicates = {}),
                            (e = Rl(e, t)),
                            super.map(e, t)
                        );
                    }
                    mapLayerOrUnit(e, t) {
                        if ((e = Rl(e, t)).encoding) {
                            const n = {};
                            for (const [i, r] of q(e.encoding)) n[i] = Wl(r, t);
                            e = Object.assign(Object.assign({}, e), {
                                encoding: n,
                            });
                        }
                        return super.mapLayerOrUnit(e, t);
                    }
                    mapUnit(e, t) {
                        const n = e,
                            { selection: i } = n,
                            r = ql(n, ['selection']);
                        return i
                            ? Object.assign(Object.assign({}, r), {
                                  params: q(i).map(([e, n]) => {
                                      var i;
                                      const r = n,
                                          { init: o, bind: s, empty: a } = r,
                                          l = ql(r, ['init', 'bind', 'empty']);
                                      'single' === l.type
                                          ? ((l.type = 'point'),
                                            (l.toggle = !1))
                                          : 'multi' === l.type &&
                                            (l.type = 'point'),
                                          (t.emptySelections[e] = 'none' !== a);
                                      for (const n of L(
                                          null !==
                                              (i = t.selectionPredicates[e]) &&
                                              void 0 !== i
                                              ? i
                                              : {}
                                      ))
                                          n.empty = 'none' !== a;
                                      return {
                                          name: e,
                                          value: o,
                                          select: l,
                                          bind: s,
                                      };
                                  }),
                              })
                            : e;
                    }
                })(),
                Vl = new Hl();
            function Kl(e) {
                return (0, o.HD)(e) ? { type: e } : null != e ? e : {};
            }
            const Yl = ['background', 'padding'];
            function Ql(e, t) {
                const n = {};
                for (const t of Yl) e && void 0 !== e[t] && (n[t] = Cn(e[t]));
                return t && (n.params = e.params), n;
            }
            class Zl {
                constructor(e = {}, t = {}) {
                    (this.explicit = e), (this.implicit = t);
                }
                clone() {
                    return new Zl(v(this.explicit), v(this.implicit));
                }
                combine() {
                    return Object.assign(
                        Object.assign({}, this.explicit),
                        this.implicit
                    );
                }
                get(e) {
                    return Q(this.explicit[e], this.implicit[e]);
                }
                getWithExplicit(e) {
                    return void 0 !== this.explicit[e]
                        ? { explicit: !0, value: this.explicit[e] }
                        : void 0 !== this.implicit[e]
                        ? { explicit: !1, value: this.implicit[e] }
                        : { explicit: !1, value: void 0 };
                }
                setWithExplicit(e, { value: t, explicit: n }) {
                    void 0 !== t && this.set(e, t, n);
                }
                set(e, t, n) {
                    return (
                        delete this[n ? 'implicit' : 'explicit'][e],
                        (this[n ? 'explicit' : 'implicit'][e] = t),
                        this
                    );
                }
                copyKeyFromSplit(e, { explicit: t, implicit: n }) {
                    void 0 !== t[e]
                        ? this.set(e, t[e], !0)
                        : void 0 !== n[e] && this.set(e, n[e], !1);
                }
                copyKeyFromObject(e, t) {
                    void 0 !== t[e] && this.set(e, t[e], !0);
                }
                copyAll(e) {
                    for (const t of M(e.combine())) {
                        const n = e.getWithExplicit(t);
                        this.setWithExplicit(t, n);
                    }
                }
            }
            function ec(e) {
                return { explicit: !0, value: e };
            }
            function tc(e) {
                return { explicit: !1, value: e };
            }
            function nc(e) {
                return (t, n, i, r) => {
                    const o = e(t.value, n.value);
                    return o > 0 ? t : o < 0 ? n : ic(t, n, i, r);
                };
            }
            function ic(e, t, n, i) {
                return (
                    e.explicit &&
                        t.explicit &&
                        $i(
                            (function(e, t, n, i) {
                                return `Conflicting ${t.toString()} property "${e.toString()}" (${j(
                                    n
                                )} and ${j(i)}). Using ${j(n)}.`;
                            })(n, i, e.value, t.value)
                        ),
                    e
                );
            }
            function rc(e, t, n, i, r = ic) {
                return void 0 === e || void 0 === e.value
                    ? t
                    : e.explicit && !t.explicit
                    ? e
                    : t.explicit && !e.explicit
                    ? t
                    : b(e.value, t.value)
                    ? e
                    : r(e, t, n, i);
            }
            class oc extends Zl {
                constructor(e = {}, t = {}, n = !1) {
                    super(e, t),
                        (this.explicit = e),
                        (this.implicit = t),
                        (this.parseNothing = n);
                }
                clone() {
                    const e = super.clone();
                    return (e.parseNothing = this.parseNothing), e;
                }
            }
            function sc(e) {
                return 'url' in e;
            }
            function ac(e) {
                return 'values' in e;
            }
            function lc(e) {
                return 'name' in e && !sc(e) && !ac(e) && !cc(e);
            }
            function cc(e) {
                return e && (uc(e) || fc(e) || dc(e));
            }
            function uc(e) {
                return 'sequence' in e;
            }
            function fc(e) {
                return 'sphere' in e;
            }
            function dc(e) {
                return 'graticule' in e;
            }
            var pc;
            !(function(e) {
                (e[(e.Raw = 0)] = 'Raw'),
                    (e[(e.Main = 1)] = 'Main'),
                    (e[(e.Row = 2)] = 'Row'),
                    (e[(e.Column = 3)] = 'Column'),
                    (e[(e.Lookup = 4)] = 'Lookup');
            })(pc || (pc = {}));
            var gc = n(65880),
                mc = function(e, t) {
                    var n = {};
                    for (var i in e)
                        Object.prototype.hasOwnProperty.call(e, i) &&
                            t.indexOf(i) < 0 &&
                            (n[i] = e[i]);
                    if (
                        null != e &&
                        'function' == typeof Object.getOwnPropertySymbols
                    ) {
                        var r = 0;
                        for (
                            i = Object.getOwnPropertySymbols(e);
                            r < i.length;
                            r++
                        )
                            t.indexOf(i[r]) < 0 &&
                                Object.prototype.propertyIsEnumerable.call(
                                    e,
                                    i[r]
                                ) &&
                                (n[i[r]] = e[i[r]]);
                    }
                    return n;
                };
            function hc(e, t = !0, n = o.yR) {
                if ((0, o.kJ)(e)) {
                    const i = e.map(e => hc(e, t, n));
                    return t ? `[${i.join(', ')}]` : i;
                }
                return ki(e)
                    ? n(
                          t
                              ? _i(e)
                              : (function(e) {
                                    const t = zi(e, !0);
                                    return e.utc
                                        ? +new Date(Date.UTC(...t))
                                        : +new Date(...t);
                                })(e)
                      )
                    : t
                    ? n(j(e))
                    : e;
            }
            function bc(e, t) {
                var n;
                for (const i of L(
                    null !== (n = e.component.selection) && void 0 !== n
                        ? n
                        : {}
                )) {
                    const n = i.name;
                    let r = `${n}${Du}, ${
                        'global' === i.resolve ? 'true' : `{unit: ${_u(e)}}`
                    }`;
                    for (const n of zu)
                        n.defined(i) &&
                            (n.signals && (t = n.signals(e, i, t)),
                            n.modifyExpr && (r = n.modifyExpr(e, i, r)));
                    t.push({
                        name: n + Pu,
                        on: [
                            {
                                events: { signal: i.name + Du },
                                update: `modify(${(0, o.m8)(
                                    i.name + Su
                                )}, ${r})`,
                            },
                        ],
                    });
                }
                return yc(t);
            }
            function vc(e, t) {
                var n;
                for (const i of L(
                    null !== (n = e.component.selection) && void 0 !== n
                        ? n
                        : {}
                ))
                    for (const n of zu)
                        n.defined(i) && n.marks && (t = n.marks(e, i, t));
                return t;
            }
            function yc(e) {
                return e.map(e => (e.on && !e.on.length && delete e.on, e));
            }
            class Oc {
                constructor(e, t) {
                    (this.debugName = t),
                        (this._children = []),
                        (this._parent = null),
                        e && (this.parent = e);
                }
                clone() {
                    throw new Error('Cannot clone node');
                }
                get parent() {
                    return this._parent;
                }
                set parent(e) {
                    (this._parent = e), e && e.addChild(this);
                }
                get children() {
                    return this._children;
                }
                numChildren() {
                    return this._children.length;
                }
                addChild(e, t) {
                    this._children.includes(e)
                        ? $i('Attempt to add the same child twice.')
                        : void 0 !== t
                        ? this._children.splice(t, 0, e)
                        : this._children.push(e);
                }
                removeChild(e) {
                    const t = this._children.indexOf(e);
                    return this._children.splice(t, 1), t;
                }
                remove() {
                    let e = this._parent.removeChild(this);
                    for (const t of this._children)
                        (t._parent = this._parent),
                            this._parent.addChild(t, e++);
                }
                insertAsParentOf(e) {
                    const t = e.parent;
                    t.removeChild(this), (this.parent = t), (e.parent = this);
                }
                swapWithParent() {
                    const e = this._parent,
                        t = e.parent;
                    for (const t of this._children) t.parent = e;
                    (this._children = []), e.removeChild(this);
                    const n = e.parent.removeChild(e);
                    (this._parent = t), t.addChild(this, n), (e.parent = this);
                }
            }
            class xc extends Oc {
                constructor(e, t, n, i) {
                    super(e, t),
                        (this.type = n),
                        (this.refCounts = i),
                        (this._source = this._name = t),
                        this.refCounts &&
                            !(this._name in this.refCounts) &&
                            (this.refCounts[this._name] = 0);
                }
                clone() {
                    const e = new this.constructor();
                    return (
                        (e.debugName = `clone_${this.debugName}`),
                        (e._source = this._source),
                        (e._name = `clone_${this._name}`),
                        (e.type = this.type),
                        (e.refCounts = this.refCounts),
                        (e.refCounts[e._name] = 0),
                        e
                    );
                }
                dependentFields() {
                    return new Set();
                }
                producedFields() {
                    return new Set();
                }
                hash() {
                    return (
                        void 0 === this._hash &&
                            (this._hash = `Output ${ee()}`),
                        this._hash
                    );
                }
                getSource() {
                    return this.refCounts[this._name]++, this._source;
                }
                isRequired() {
                    return !!this.refCounts[this._name];
                }
                setSource(e) {
                    this._source = e;
                }
            }
            var jc = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            class wc extends Oc {
                constructor(e, t) {
                    super(e), (this.formula = t);
                }
                clone() {
                    return new wc(null, v(this.formula));
                }
                static makeFromEncoding(e, t) {
                    const n = t.reduceFieldDef((e, t) => {
                        const { field: n, timeUnit: i } = t;
                        if (i) {
                            const r = is(t, { forAs: !0 });
                            e[w({ as: r, field: n, timeUnit: i })] = {
                                as: r,
                                field: n,
                                timeUnit: i,
                            };
                        }
                        return e;
                    }, {});
                    return A(n) ? null : new wc(e, n);
                }
                static makeFromTransform(e, t) {
                    const n = Object.assign({}, t),
                        { timeUnit: i } = n,
                        r = jc(n, ['timeUnit']),
                        o = qi(i),
                        s = Object.assign(Object.assign({}, r), {
                            timeUnit: o,
                        });
                    return new wc(e, { [w(s)]: s });
                }
                merge(e) {
                    this.formula = Object.assign({}, this.formula);
                    for (const t in e.formula)
                        this.formula[t] || (this.formula[t] = e.formula[t]);
                    for (const t of e.children)
                        e.removeChild(t), (t.parent = this);
                    e.remove();
                }
                removeFormulas(e) {
                    const t = {};
                    for (const [n, i] of q(this.formula))
                        e.has(i.as) || (t[n] = i);
                    this.formula = t;
                }
                producedFields() {
                    return new Set(L(this.formula).map(e => e.as));
                }
                dependentFields() {
                    return new Set(L(this.formula).map(e => e.field));
                }
                hash() {
                    return `TimeUnit ${w(this.formula)}`;
                }
                assemble() {
                    const e = [];
                    for (const t of L(this.formula)) {
                        const { field: n, as: i, timeUnit: r } = t,
                            o = qi(r),
                            { unit: s, utc: a } = o,
                            l = jc(o, ['unit', 'utc']);
                        e.push(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            { field: X(n), type: 'timeunit' },
                                            s ? { units: Ai(s) } : {}
                                        ),
                                        a ? { timezone: 'utc' } : {}
                                    ),
                                    l
                                ),
                                { as: [i, `${i}_end`] }
                            )
                        );
                    }
                    return e;
                }
            }
            const $c = '_tuple_fields';
            class kc {
                constructor(...e) {
                    (this.items = e),
                        (this.hasChannel = {}),
                        (this.hasField = {}),
                        (this.hasSelectionId = !1);
                }
            }
            const Sc = {
                    defined: () => !0,
                    parse: (e, t, n) => {
                        var i;
                        const r = t.name,
                            s =
                                null !== (i = t.project) && void 0 !== i
                                    ? i
                                    : (t.project = new kc()),
                            a = {},
                            l = {},
                            c = new Set(),
                            u = (e, t) => {
                                const n = 'visual' === t ? e.channel : e.field;
                                let i = W(`${r}_${n}`);
                                for (let e = 1; c.has(i); e++)
                                    i = W(`${r}_${n}_${e}`);
                                return c.add(i), { [t]: i };
                            },
                            f = t.type,
                            d = e.config.selection[f],
                            p = void 0 !== n.value ? (0, o.IX)(n.value) : null;
                        let { fields: g, encodings: m } = (0, o.Kn)(n.select)
                            ? n.select
                            : {};
                        if (!g && !m && p)
                            for (const e of p)
                                if ((0, o.Kn)(e))
                                    for (const t of M(e))
                                        st[t]
                                            ? (m || (m = [])).push(t)
                                            : 'interval' === f
                                            ? ($i(
                                                  'Interval selections should be initialized using "x" and/or "y" keys.'
                                              ),
                                              (m = d.encodings))
                                            : (g || (g = [])).push(t);
                        g ||
                            m ||
                            ((m = d.encodings),
                            'fields' in d && (g = d.fields));
                        for (const t of null != m ? m : []) {
                            const n = e.fieldDef(t);
                            if (n) {
                                let i = n.field;
                                if (n.aggregate) {
                                    $i(Qn(t, n.aggregate));
                                    continue;
                                }
                                if (!i) {
                                    $i(Yn(t));
                                    continue;
                                }
                                if (n.timeUnit) {
                                    i = e.vgField(t);
                                    const r = {
                                        timeUnit: n.timeUnit,
                                        as: i,
                                        field: n.field,
                                    };
                                    l[w(r)] = r;
                                }
                                if (!a[i]) {
                                    let r = 'E';
                                    'interval' === f
                                        ? jr(
                                              e.getScaleComponent(t).get('type')
                                          ) && (r = 'R')
                                        : n.bin && (r = 'R-RE');
                                    const o = { field: i, channel: t, type: r };
                                    (o.signals = Object.assign(
                                        Object.assign({}, u(o, 'data')),
                                        u(o, 'visual')
                                    )),
                                        s.items.push((a[i] = o)),
                                        (s.hasField[i] = s.hasChannel[t] =
                                            a[i]),
                                        (s.hasSelectionId =
                                            s.hasSelectionId || i === xa);
                                }
                            } else $i(Yn(t));
                        }
                        for (const e of null != g ? g : []) {
                            if (s.hasField[e]) continue;
                            const t = { type: 'E', field: e };
                            (t.signals = Object.assign({}, u(t, 'data'))),
                                s.items.push(t),
                                (s.hasField[e] = t),
                                (s.hasSelectionId =
                                    s.hasSelectionId || e === xa);
                        }
                        p &&
                            (t.init = p.map(e =>
                                s.items.map(t =>
                                    (0, o.Kn)(e)
                                        ? void 0 !== e[t.channel]
                                            ? e[t.channel]
                                            : e[t.field]
                                        : e
                                )
                            )),
                            A(l) || (s.timeUnit = new wc(null, l));
                    },
                    signals: (e, t, n) => {
                        const i = t.name + $c;
                        return n.filter(e => e.name === i).length > 0 ||
                            t.project.hasSelectionId
                            ? n
                            : n.concat({
                                  name: i,
                                  value: t.project.items.map(e => {
                                      const { signals: t, hasLegend: n } = e,
                                          i = (function(e, t) {
                                              var n = {};
                                              for (var i in e)
                                                  Object.prototype.hasOwnProperty.call(
                                                      e,
                                                      i
                                                  ) &&
                                                      t.indexOf(i) < 0 &&
                                                      (n[i] = e[i]);
                                              if (
                                                  null != e &&
                                                  'function' ==
                                                      typeof Object.getOwnPropertySymbols
                                              ) {
                                                  var r = 0;
                                                  for (
                                                      i = Object.getOwnPropertySymbols(
                                                          e
                                                      );
                                                      r < i.length;
                                                      r++
                                                  )
                                                      t.indexOf(i[r]) < 0 &&
                                                          Object.prototype.propertyIsEnumerable.call(
                                                              e,
                                                              i[r]
                                                          ) &&
                                                          (n[i[r]] = e[i[r]]);
                                              }
                                              return n;
                                          })(e, ['signals', 'hasLegend']);
                                      return (i.field = X(i.field)), i;
                                  }),
                              });
                    },
                },
                Dc = Sc,
                Pc = {
                    defined: e =>
                        'interval' === e.type &&
                        'global' === e.resolve &&
                        e.bind &&
                        'scales' === e.bind,
                    parse: (e, t) => {
                        const n = (t.scales = []);
                        for (const i of t.project.items) {
                            const r = i.channel;
                            if (!Zt(r)) continue;
                            const o = e.getScaleComponent(r),
                                s = o ? o.get('type') : void 0;
                            o && jr(s)
                                ? (o.set(
                                      'selectionExtent',
                                      { param: t.name, field: i.field },
                                      !0
                                  ),
                                  n.push(i))
                                : $i(
                                      'Scale bindings are currently only supported for scales with unbinned, continuous domains.'
                                  );
                        }
                    },
                    topLevelSignals: (e, t, n) => {
                        const i = t.scales.filter(
                            e =>
                                0 ===
                                n.filter(t => t.name === e.signals.data).length
                        );
                        if (!e.parent || _c(e) || 0 === i.length) return n;
                        const r = n.filter(e => e.name === t.name)[0];
                        let s = r.update;
                        if (s.indexOf(Fu) >= 0)
                            r.update = `{${i
                                .map(
                                    e =>
                                        `${(0, o.m8)(X(e.field))}: ${
                                            e.signals.data
                                        }`
                                )
                                .join(', ')}}`;
                        else {
                            for (const e of i) {
                                const t = `${(0, o.m8)(X(e.field))}: ${
                                    e.signals.data
                                }`;
                                s.includes(t) ||
                                    (s = `${s.substring(
                                        0,
                                        s.length - 1
                                    )}, ${t}}`);
                            }
                            r.update = s;
                        }
                        return n.concat(i.map(e => ({ name: e.signals.data })));
                    },
                    signals: (e, t, n) => {
                        if (e.parent && !_c(e))
                            for (const e of t.scales) {
                                const t = n.filter(
                                    t => t.name === e.signals.data
                                )[0];
                                (t.push = 'outer'),
                                    delete t.value,
                                    delete t.update;
                            }
                        return n;
                    },
                },
                Fc = Pc;
            function zc(e, t) {
                return `domain(${(0, o.m8)(e.scaleName(t))})`;
            }
            function _c(e) {
                var t;
                return (
                    e.parent &&
                    gp(e.parent) &&
                    (null !== (t = !e.parent.parent) && void 0 !== t
                        ? t
                        : _c(e.parent.parent))
                );
            }
            const Cc = '_brush',
                Ec = '_scale_trigger',
                Nc = {
                    defined: e => 'interval' === e.type,
                    signals: (e, t, n) => {
                        const i = t.name,
                            r = i + $c,
                            s = Fc.defined(t),
                            a = t.init ? t.init[0] : null,
                            l = [],
                            c = [];
                        if (t.translate && !s) {
                            const e = `!event.item || event.item.mark.name !== ${(0,
                            o.m8)(i + Cc)}`;
                            Ac(t, (t, n) => {
                                var i, r;
                                const s = (0, o.IX)(
                                    null !== (i = (r = n.between[0]).filter) &&
                                        void 0 !== i
                                        ? i
                                        : (r.filter = [])
                                );
                                return s.includes(e) || s.push(e), t;
                            });
                        }
                        t.project.items.forEach((i, r) => {
                            const s = i.channel;
                            if (s !== ue && s !== fe)
                                return void $i(
                                    'Interval selections only support x and y encoding channels.'
                                );
                            const u = a ? a[r] : null,
                                f = (function(e, t, n, i) {
                                    const r = n.channel,
                                        s = n.signals.visual,
                                        a = n.signals.data,
                                        l = Fc.defined(t),
                                        c = (0, o.m8)(e.scaleName(r)),
                                        u = e.getScaleComponent(r),
                                        f = u ? u.get('type') : void 0,
                                        d = e => `scale(${c}, ${e})`,
                                        p = e.getSizeSignalRef(
                                            r === ue ? 'width' : 'height'
                                        ).signal,
                                        g = `${r}(unit)`,
                                        m = Ac(t, (e, t) => [
                                            ...e,
                                            {
                                                events: t.between[0],
                                                update: `[${g}, ${g}]`,
                                            },
                                            {
                                                events: t,
                                                update: `[${s}[0], clamp(${g}, 0, ${p})]`,
                                            },
                                        ]);
                                    return (
                                        m.push({
                                            events: { signal: t.name + Ec },
                                            update: jr(f)
                                                ? `[${d(`${a}[0]`)}, ${d(
                                                      `${a}[1]`
                                                  )}]`
                                                : '[0, 0]',
                                        }),
                                        l
                                            ? [{ name: a, on: [] }]
                                            : [
                                                  Object.assign(
                                                      Object.assign(
                                                          { name: s },
                                                          i
                                                              ? {
                                                                    init: hc(
                                                                        i,
                                                                        !0,
                                                                        d
                                                                    ),
                                                                }
                                                              : { value: [] }
                                                      ),
                                                      { on: m }
                                                  ),
                                                  Object.assign(
                                                      Object.assign(
                                                          { name: a },
                                                          i
                                                              ? { init: hc(i) }
                                                              : {}
                                                      ),
                                                      {
                                                          on: [
                                                              {
                                                                  events: {
                                                                      signal: s,
                                                                  },
                                                                  update: `${s}[0] === ${s}[1] ? null : invert(${c}, ${s})`,
                                                              },
                                                          ],
                                                      }
                                                  ),
                                              ]
                                    );
                                })(e, t, i, u),
                                d = i.signals.data,
                                p = i.signals.visual,
                                g = (0, o.m8)(e.scaleName(s)),
                                m = jr(e.getScaleComponent(s).get('type'))
                                    ? '+'
                                    : '';
                            n.push(...f),
                                l.push(d),
                                c.push({
                                    scaleName: e.scaleName(s),
                                    expr: `(!isArray(${d}) || (${m}invert(${g}, ${p})[0] === ${m}${d}[0] && ${m}invert(${g}, ${p})[1] === ${m}${d}[1]))`,
                                });
                        }),
                            !s &&
                                c.length &&
                                n.push({
                                    name: i + Ec,
                                    value: {},
                                    on: [
                                        {
                                            events: c.map(e => ({
                                                scale: e.scaleName,
                                            })),
                                            update: `${c
                                                .map(e => e.expr)
                                                .join(' && ')} ? ${i +
                                                Ec} : {}`,
                                        },
                                    ],
                                });
                        const u = `unit: ${_u(e)}, fields: ${r}, values`;
                        return n.concat(
                            Object.assign(
                                Object.assign(
                                    { name: i + Du },
                                    a ? { init: `{${u}: ${hc(a)}}` } : {}
                                ),
                                l.length
                                    ? {
                                          on: [
                                              {
                                                  events: [
                                                      {
                                                          signal: l.join(
                                                              ' || '
                                                          ),
                                                      },
                                                  ],
                                                  update: `${l.join(
                                                      ' && '
                                                  )} ? {${u}: [${l}]} : null`,
                                              },
                                          ],
                                      }
                                    : {}
                            )
                        );
                    },
                    marks: (e, t, n) => {
                        const i = t.name,
                            { x: r, y: s } = t.project.hasChannel,
                            a = null == r ? void 0 : r.signals.visual,
                            l = null == s ? void 0 : s.signals.visual,
                            c = `data(${(0, o.m8)(t.name + Su)})`;
                        if (Fc.defined(t) || (!r && !s)) return n;
                        const u = {
                            x:
                                void 0 !== r
                                    ? { signal: `${a}[0]` }
                                    : { value: 0 },
                            y:
                                void 0 !== s
                                    ? { signal: `${l}[0]` }
                                    : { value: 0 },
                            x2:
                                void 0 !== r
                                    ? { signal: `${a}[1]` }
                                    : { field: { group: 'width' } },
                            y2:
                                void 0 !== s
                                    ? { signal: `${l}[1]` }
                                    : { field: { group: 'height' } },
                        };
                        if ('global' === t.resolve)
                            for (const t of M(u))
                                u[t] = [
                                    Object.assign(
                                        {
                                            test: `${c}.length && ${c}[0].unit === ${_u(
                                                e
                                            )}`,
                                        },
                                        u[t]
                                    ),
                                    { value: 0 },
                                ];
                        const f = t.mark,
                            { fill: d, fillOpacity: p, cursor: g } = f,
                            m = (function(e, t) {
                                var n = {};
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        i
                                    ) &&
                                        t.indexOf(i) < 0 &&
                                        (n[i] = e[i]);
                                if (
                                    null != e &&
                                    'function' ==
                                        typeof Object.getOwnPropertySymbols
                                ) {
                                    var r = 0;
                                    for (
                                        i = Object.getOwnPropertySymbols(e);
                                        r < i.length;
                                        r++
                                    )
                                        t.indexOf(i[r]) < 0 &&
                                            Object.prototype.propertyIsEnumerable.call(
                                                e,
                                                i[r]
                                            ) &&
                                            (n[i[r]] = e[i[r]]);
                                }
                                return n;
                            })(f, ['fill', 'fillOpacity', 'cursor']),
                            h = M(m).reduce(
                                (e, t) => (
                                    (e[t] = [
                                        {
                                            test: [
                                                void 0 !== r &&
                                                    `${a}[0] !== ${a}[1]`,
                                                void 0 !== s &&
                                                    `${l}[0] !== ${l}[1]`,
                                            ]
                                                .filter(e => e)
                                                .join(' && '),
                                            value: m[t],
                                        },
                                        { value: null },
                                    ]),
                                    e
                                ),
                                {}
                            );
                        return [
                            {
                                name: `${i + Cc}_bg`,
                                type: 'rect',
                                clip: !0,
                                encode: {
                                    enter: {
                                        fill: { value: d },
                                        fillOpacity: { value: p },
                                    },
                                    update: u,
                                },
                            },
                            ...n,
                            {
                                name: i + Cc,
                                type: 'rect',
                                clip: !0,
                                encode: {
                                    enter: Object.assign(
                                        Object.assign(
                                            {},
                                            g ? { cursor: { value: g } } : {}
                                        ),
                                        { fill: { value: 'transparent' } }
                                    ),
                                    update: Object.assign(
                                        Object.assign({}, u),
                                        h
                                    ),
                                },
                            },
                        ];
                    },
                },
                Tc = Nc;
            function Ac(e, t) {
                return e.events.reduce(
                    (e, n) =>
                        n.between
                            ? t(e, n)
                            : ($i(
                                  `${n} is not an ordered event stream for interval selections.`
                              ),
                              e),
                    []
                );
            }
            const Mc = {
                    defined: e => 'point' === e.type,
                    signals: (e, t, n) => {
                        var i;
                        const r = t.name,
                            s = r + $c,
                            a = t.project,
                            l = '(item().isVoronoi ? datum.datum : datum)',
                            c = L(
                                null !== (i = e.component.selection) &&
                                    void 0 !== i
                                    ? i
                                    : {}
                            )
                                .reduce(
                                    (e, t) =>
                                        'interval' === t.type
                                            ? e.concat(t.name + Cc)
                                            : e,
                                    []
                                )
                                .map(
                                    e => `indexof(item().mark.name, '${e}') < 0`
                                )
                                .join(' && '),
                            u =
                                "datum && item().mark.marktype !== 'group' && indexof(item().mark.role, 'legend') < 0" +
                                (c ? ` && ${c}` : '');
                        let f = `unit: ${_u(e)}, `;
                        t.project.hasSelectionId
                            ? (f += `${xa}: ${l}[${(0, o.m8)(xa)}]`)
                            : (f += `fields: ${s}, values: [${a.items
                                  .map(t => {
                                      const n = e.fieldDef(t.channel);
                                      return (null == n
                                        ? void 0
                                        : n.bin)
                                          ? `[${l}[${(0, o.m8)(
                                                e.vgField(t.channel, {})
                                            )}], ${l}[${(0, o.m8)(
                                                e.vgField(t.channel, {
                                                    binSuffix: 'end',
                                                })
                                            )}]]`
                                          : `${l}[${(0, o.m8)(t.field)}]`;
                                  })
                                  .join(', ')}]`);
                        const d = t.events;
                        return n.concat([
                            {
                                name: r + Du,
                                on: d
                                    ? [
                                          {
                                              events: d,
                                              update: `${u} ? {${f}} : null`,
                                              force: !0,
                                          },
                                      ]
                                    : [],
                            },
                        ]);
                    },
                },
                Lc = Mc;
            function qc(e, t, n, i) {
                const r = Wo(t) && t.condition,
                    s = i(t);
                return r
                    ? {
                          [n]: [
                              ...(0, o.IX)(r).map(t => {
                                  const n = i(t);
                                  if (
                                      (function(e) {
                                          return e.param;
                                      })(t)
                                  ) {
                                      const { param: i, empty: r } = t,
                                          o = qu(e, { param: i, empty: r });
                                      return Object.assign({ test: o }, n);
                                  }
                                  {
                                      const i = Wu(e, t.test);
                                      return Object.assign({ test: i }, n);
                                  }
                              }),
                              ...(void 0 !== s ? [s] : []),
                          ],
                      }
                    : void 0 !== s
                    ? { [n]: s }
                    : {};
            }
            function Rc(e, t = 'text') {
                const n = e.encoding[t];
                return qc(e, n, t, t => Wc(t, e.config));
            }
            function Wc(e, t, n = 'datum') {
                if (e) {
                    if (Yo(e)) return Nn(e.value);
                    if (Vo(e)) {
                        const { format: i, formatType: r } = fs(e);
                        return bo({
                            fieldOrDatumDef: e,
                            format: i,
                            formatType: r,
                            expr: n,
                            config: t,
                        });
                    }
                }
            }
            function Ic(e, t = {}) {
                const { encoding: n, markDef: i, config: r, stack: s } = e,
                    a = n.tooltip;
                if ((0, o.kJ)(a))
                    return { tooltip: Hc({ tooltip: a }, s, r, t) };
                {
                    const l = t.reactiveGeom ? 'datum.datum' : 'datum';
                    return qc(e, a, 'tooltip', e => {
                        const a = Wc(e, r, l);
                        if (a) return a;
                        if (null === e) return;
                        let c = Ln('tooltip', i, r);
                        return (
                            !0 === c && (c = { content: 'encoding' }),
                            (0, o.HD)(c)
                                ? { value: c }
                                : (0, o.Kn)(c)
                                ? $n(c)
                                    ? c
                                    : 'encoding' === c.content
                                    ? Hc(n, s, r, t)
                                    : { signal: l }
                                : void 0
                        );
                    });
                }
            }
            function Uc(e, t, n, { reactiveGeom: i } = {}) {
                const r = {},
                    s = i ? 'datum.datum' : 'datum',
                    a = [];
                function l(i, l) {
                    const c = ut(l),
                        u = Ko(i)
                            ? i
                            : Object.assign(Object.assign({}, i), {
                                  type: e[c].type,
                              }),
                        f = u.title || us(u, n),
                        d = (0, o.IX)(f).join(', ');
                    let p;
                    if (Tt(l)) {
                        const t = 'x' === l ? 'x2' : 'y2',
                            i = ds(e[t]);
                        if (hn(u.bin) && i) {
                            const e = is(u, { expr: s }),
                                o = is(i, { expr: s }),
                                { format: a, formatType: l } = fs(u);
                            (p = ko(e, o, a, l, n)), (r[t] = !0);
                        }
                    }
                    if (
                        (Tt(l) || l === ve || l === he) &&
                        t &&
                        t.fieldChannel === l &&
                        'normalize' === t.offset
                    ) {
                        const { format: e, formatType: t } = fs(u);
                        p = bo({
                            fieldOrDatumDef: u,
                            format: e,
                            formatType: t,
                            expr: s,
                            config: n,
                            normalizeStack: !0,
                        }).signal;
                    }
                    null != p || (p = Wc(u, n, s).signal),
                        a.push({ channel: l, key: d, value: p });
                }
                Rs(e, (e, t) => {
                    Ho(e) ? l(e, t) : Io(e) && l(e.condition, t);
                });
                const c = {};
                for (const { channel: e, key: t, value: n } of a)
                    r[e] || c[t] || (c[t] = n);
                return c;
            }
            function Hc(e, t, n, { reactiveGeom: i } = {}) {
                const r = Uc(e, t, n, { reactiveGeom: i }),
                    o = q(r).map(([e, t]) => `"${e}": ${t}`);
                return o.length > 0 ? { signal: `{${o.join(', ')}}` } : void 0;
            }
            function Bc(e, t, n = {}) {
                const { markDef: i, encoding: r, config: o } = t,
                    { vgChannel: s } = n;
                let { defaultRef: a, defaultValue: l } = n;
                void 0 === a &&
                    (null != l ||
                        (l = Ln(e, i, o, { vgChannel: s, ignoreVgConfig: !0 })),
                    void 0 !== l && (a = Nn(l)));
                const c = r[e];
                return qc(t, c, null != s ? s : e, n =>
                    po({
                        channel: e,
                        channelDef: n,
                        markDef: i,
                        config: o,
                        scaleName: t.scaleName(e),
                        scale: t.getScaleComponent(e),
                        stack: null,
                        defaultRef: a,
                    })
                );
            }
            function Jc(e, t = { filled: void 0 }) {
                var n, i, r, o;
                const { markDef: s, encoding: a, config: l } = e,
                    { type: c } = s,
                    u =
                        null !== (n = t.filled) && void 0 !== n
                            ? n
                            : Ln('filled', s, l),
                    f = k(['bar', 'point', 'circle', 'square', 'geoshape'], c)
                        ? 'transparent'
                        : void 0,
                    d =
                        null !==
                            (r =
                                null !==
                                    (i = Ln(!0 === u ? 'color' : void 0, s, l, {
                                        vgChannel: 'fill',
                                    })) && void 0 !== i
                                    ? i
                                    : l.mark[!0 === u && 'color']) &&
                        void 0 !== r
                            ? r
                            : f,
                    p =
                        null !==
                            (o = Ln(!1 === u ? 'color' : void 0, s, l, {
                                vgChannel: 'stroke',
                            })) && void 0 !== o
                            ? o
                            : l.mark[!1 === u && 'color'],
                    g = u ? 'fill' : 'stroke',
                    m = Object.assign(
                        Object.assign({}, d ? { fill: Nn(d) } : {}),
                        p ? { stroke: Nn(p) } : {}
                    );
                return (
                    s.color &&
                        (u ? s.fill : s.stroke) &&
                        $i(
                            si('property', {
                                fill: 'fill' in s,
                                stroke: 'stroke' in s,
                            })
                        ),
                    Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign({}, m),
                                Bc('color', e, {
                                    vgChannel: g,
                                    defaultValue: u ? d : p,
                                })
                            ),
                            Bc('fill', e, { defaultValue: a.fill ? d : void 0 })
                        ),
                        Bc('stroke', e, { defaultValue: a.stroke ? p : void 0 })
                    )
                );
            }
            function Gc({
                channel: e,
                markDef: t,
                encoding: n = {},
                model: i,
                bandPosition: r,
            }) {
                const o = `${e}Offset`,
                    s = t[o],
                    a = n[o];
                if (('xOffset' === o || 'yOffset' === o) && a)
                    return {
                        offsetType: 'encoding',
                        offset: po({
                            channel: o,
                            channelDef: a,
                            markDef: t,
                            config: null == i ? void 0 : i.config,
                            scaleName: i.scaleName(o),
                            scale: i.getScaleComponent(o),
                            stack: null,
                            defaultRef: Nn(s),
                            bandPosition: r,
                        }),
                    };
                const l = t[o];
                return l ? { offsetType: 'visual', offset: l } : {};
            }
            function Xc(e, t, { defaultPos: n, vgChannel: i }) {
                const { encoding: r, markDef: o, config: s, stack: a } = t,
                    l = r[e],
                    c = r[dt(e)],
                    u = t.scaleName(e),
                    f = t.getScaleComponent(e),
                    { offset: d, offsetType: p } = Gc({
                        channel: e,
                        markDef: o,
                        encoding: r,
                        model: t,
                        bandPosition: 0.5,
                    }),
                    g = Vc({
                        model: t,
                        defaultPos: n,
                        channel: e,
                        scaleName: u,
                        scale: f,
                    }),
                    m =
                        !l && Tt(e) && (r.latitude || r.longitude)
                            ? { field: t.getName(e) }
                            : (function(e) {
                                  const {
                                      channel: t,
                                      channelDef: n,
                                      scaleName: i,
                                      stack: r,
                                      offset: o,
                                      markDef: s,
                                  } = e;
                                  if (Vo(n) && r && t === r.fieldChannel) {
                                      if (Ho(n)) {
                                          let e = n.bandPosition;
                                          if (
                                              (void 0 !== e ||
                                                  'text' !== s.type ||
                                                  ('radius' !== t &&
                                                      'theta' !== t) ||
                                                  (e = 0.5),
                                              void 0 !== e)
                                          )
                                              return fo({
                                                  scaleName: i,
                                                  fieldOrDatumDef: n,
                                                  startSuffix: 'start',
                                                  bandPosition: e,
                                                  offset: o,
                                              });
                                      }
                                      return uo(
                                          n,
                                          i,
                                          { suffix: 'end' },
                                          { offset: o }
                                      );
                                  }
                                  return ao(e);
                              })({
                                  channel: e,
                                  channelDef: l,
                                  channel2Def: c,
                                  markDef: o,
                                  config: s,
                                  scaleName: u,
                                  scale: f,
                                  stack: a,
                                  offset: d,
                                  defaultRef: g,
                                  bandPosition: 'encoding' === p ? 0 : void 0,
                              });
                return m ? { [i || e]: m } : void 0;
            }
            function Vc({
                model: e,
                defaultPos: t,
                channel: n,
                scaleName: i,
                scale: r,
            }) {
                const { markDef: o, config: s } = e;
                return () => {
                    const a = ut(n),
                        l = ft(n),
                        c = Ln(n, o, s, { vgChannel: l });
                    if (void 0 !== c) return go(n, c);
                    switch (t) {
                        case 'zeroOrMin':
                        case 'zeroOrMax':
                            if (i) {
                                const e = r.get('type');
                                if (k(['log', ar, lr], e));
                                else if (r.domainDefinitelyIncludesZero())
                                    return { scale: i, value: 0 };
                            }
                            if ('zeroOrMin' === t)
                                return 'y' === a
                                    ? { field: { group: 'height' } }
                                    : { value: 0 };
                            switch (a) {
                                case 'radius':
                                    return {
                                        signal: `min(${e.width.signal},${e.height.signal})/2`,
                                    };
                                case 'theta':
                                    return { signal: '2*PI' };
                                case 'x':
                                    return { field: { group: 'width' } };
                                case 'y':
                                    return { value: 0 };
                            }
                            break;
                        case 'mid': {
                            const t = e[pt(n)];
                            return Object.assign(Object.assign({}, t), {
                                mult: 0.5,
                            });
                        }
                    }
                };
            }
            const Kc = { left: 'x', center: 'xc', right: 'x2' },
                Yc = { top: 'y', middle: 'yc', bottom: 'y2' };
            function Qc(e, t, n, i = 'middle') {
                if ('radius' === e || 'theta' === e) return ft(e);
                const r = 'x' === e ? 'align' : 'baseline',
                    o = Ln(r, t, n);
                let s;
                return (
                    $n(o)
                        ? ($i(
                              (function(e) {
                                  return `The ${e} for range marks cannot be an expression`;
                              })(r)
                          ),
                          (s = void 0))
                        : (s = o),
                    'x' === e
                        ? Kc[s || ('top' === i ? 'left' : 'center')]
                        : Yc[s || i]
                );
            }
            function Zc(e, t, { defaultPos: n, defaultPos2: i, range: r }) {
                return r
                    ? eu(e, t, { defaultPos: n, defaultPos2: i })
                    : Xc(e, t, { defaultPos: n });
            }
            function eu(e, t, { defaultPos: n, defaultPos2: i }) {
                const { markDef: r, config: o } = t,
                    s = dt(e),
                    a = pt(e),
                    l = (function(e, t, n) {
                        const {
                                encoding: i,
                                mark: r,
                                markDef: o,
                                stack: s,
                                config: a,
                            } = e,
                            l = ut(n),
                            c = pt(n),
                            u = ft(n),
                            f = i[l],
                            d = e.scaleName(l),
                            p = e.getScaleComponent(l),
                            { offset: g } = Gc(
                                n in i || n in o
                                    ? {
                                          channel: n,
                                          markDef: o,
                                          encoding: i,
                                          model: e,
                                      }
                                    : {
                                          channel: l,
                                          markDef: o,
                                          encoding: i,
                                          model: e,
                                      }
                            );
                        if (
                            !f &&
                            ('x2' === n || 'y2' === n) &&
                            (i.latitude || i.longitude)
                        ) {
                            const t = pt(n),
                                i = e.markDef[t];
                            return null != i
                                ? { [t]: { value: i } }
                                : { [u]: { field: e.getName(n) } };
                        }
                        const m = (function({
                            channel: e,
                            channelDef: t,
                            channel2Def: n,
                            markDef: i,
                            config: r,
                            scaleName: o,
                            scale: s,
                            stack: a,
                            offset: l,
                            defaultRef: c,
                        }) {
                            return Vo(t) &&
                                a &&
                                e.charAt(0) === a.fieldChannel.charAt(0)
                                ? uo(t, o, { suffix: 'start' }, { offset: l })
                                : ao({
                                      channel: e,
                                      channelDef: n,
                                      scaleName: o,
                                      scale: s,
                                      stack: a,
                                      markDef: i,
                                      config: r,
                                      offset: l,
                                      defaultRef: c,
                                  });
                        })({
                            channel: n,
                            channelDef: f,
                            channel2Def: i[n],
                            markDef: o,
                            config: a,
                            scaleName: d,
                            scale: p,
                            stack: s,
                            offset: g,
                            defaultRef: void 0,
                        });
                        return void 0 !== m
                            ? { [u]: m }
                            : tu(n, o) ||
                                  tu(n, {
                                      [n]: Rn(n, o, a.style),
                                      [c]: Rn(c, o, a.style),
                                  }) ||
                                  tu(n, a[r]) ||
                                  tu(n, a.mark) || {
                                      [u]: Vc({
                                          model: e,
                                          defaultPos: t,
                                          channel: n,
                                          scaleName: d,
                                          scale: p,
                                      })(),
                                  };
                    })(t, i, s),
                    c = l[a] ? Qc(e, r, o) : ft(e);
                return Object.assign(
                    Object.assign(
                        {},
                        Xc(e, t, { defaultPos: n, vgChannel: c })
                    ),
                    l
                );
            }
            function tu(e, t) {
                const n = pt(e),
                    i = ft(e);
                if (void 0 !== t[i]) return { [i]: go(e, t[i]) };
                if (void 0 !== t[e]) return { [i]: go(e, t[e]) };
                if (t[n]) {
                    const i = t[n];
                    if (!oo(i)) return { [n]: go(e, i) };
                    $i(
                        (function(e) {
                            return `Position range does not support relative band size for ${e}.`;
                        })(n)
                    );
                }
            }
            function nu(e, t) {
                var n, i;
                const { config: r, encoding: s, markDef: a } = e,
                    l = a.type,
                    c = dt(t),
                    u = pt(t),
                    f = s[t],
                    d = s[c],
                    p = e.getScaleComponent(t),
                    g = p ? p.get('type') : void 0,
                    m = a.orient,
                    h =
                        null !==
                            (i =
                                null !== (n = s[u]) && void 0 !== n
                                    ? n
                                    : s.size) && void 0 !== i
                            ? i
                            : Ln('size', a, r, { vgChannel: u }),
                    b =
                        'bar' === l &&
                        ('x' === t ? 'vertical' === m : 'horizontal' === m);
                return !Ho(f) ||
                    !(mn(f.bin) || hn(f.bin) || (f.timeUnit && !d)) ||
                    (h && !oo(h)) ||
                    xr(g)
                    ? ((Vo(f) && xr(g)) || b) && !d
                        ? (function(e, t, n) {
                              const {
                                      markDef: i,
                                      encoding: r,
                                      config: s,
                                      stack: a,
                                  } = n,
                                  l = i.orient,
                                  c = n.scaleName(t),
                                  u = n.getScaleComponent(t),
                                  f = pt(t),
                                  d = dt(t),
                                  p = (function(e) {
                                      switch (e) {
                                          case ue:
                                              return 'xOffset';
                                          case fe:
                                              return 'yOffset';
                                          case de:
                                              return 'x2Offset';
                                          case pe:
                                              return 'y2Offset';
                                          case ve:
                                              return 'thetaOffset';
                                          case he:
                                              return 'radiusOffset';
                                          case ye:
                                              return 'theta2Offset';
                                          case be:
                                              return 'radius2Offset';
                                      }
                                  })(t),
                                  g = n.scaleName(p),
                                  m =
                                      ('horizontal' === l && 'y' === t) ||
                                      ('vertical' === l && 'x' === t);
                              let h;
                              (r.size || i.size) &&
                                  (m
                                      ? (h = Bc('size', n, {
                                            vgChannel: f,
                                            defaultRef: Nn(i.size),
                                        }))
                                      : $i(
                                            (function(e) {
                                                return `Cannot apply size to non-oriented mark "${e}".`;
                                            })(i.type)
                                        ));
                              const b = !!h,
                                  v = qo({
                                      channel: t,
                                      fieldDef: e,
                                      markDef: i,
                                      config: s,
                                      scaleType:
                                          null == u ? void 0 : u.get('type'),
                                      useVlSizeChannel: m,
                                  });
                              h = h || { [f]: iu(f, g || c, u, s, v) };
                              const y = Qc(
                                      t,
                                      i,
                                      s,
                                      'band' ===
                                          (null == u
                                              ? void 0
                                              : u.get('type')) &&
                                          oo(v) &&
                                          !b
                                          ? 'top'
                                          : 'middle'
                                  ),
                                  O = 'xc' === y || 'yc' === y,
                                  { offset: x, offsetType: j } = Gc({
                                      channel: t,
                                      markDef: i,
                                      encoding: r,
                                      model: n,
                                      bandPosition: O ? 0.5 : 0,
                                  }),
                                  w = ao({
                                      channel: t,
                                      channelDef: e,
                                      markDef: i,
                                      config: s,
                                      scaleName: c,
                                      scale: u,
                                      stack: a,
                                      offset: x,
                                      defaultRef: Vc({
                                          model: n,
                                          defaultPos: 'mid',
                                          channel: t,
                                          scaleName: c,
                                          scale: u,
                                      }),
                                      bandPosition: O
                                          ? 'encoding' === j
                                              ? 0
                                              : 0.5
                                          : $n(v)
                                          ? { signal: `(1-${v})/2` }
                                          : oo(v)
                                          ? (1 - v.band) / 2
                                          : 0,
                                  });
                              if (f) return Object.assign({ [y]: w }, h);
                              {
                                  const e = ft(d),
                                      t = h[f],
                                      n = x
                                          ? Object.assign(
                                                Object.assign({}, t),
                                                { offset: x }
                                            )
                                          : t;
                                  return {
                                      [y]: w,
                                      [e]: (0, o.kJ)(w)
                                          ? [
                                                w[0],
                                                Object.assign(
                                                    Object.assign({}, w[1]),
                                                    { offset: n }
                                                ),
                                            ]
                                          : Object.assign(
                                                Object.assign({}, w),
                                                { offset: n }
                                            ),
                                  };
                              }
                          })(f, t, e)
                        : eu(t, e, {
                              defaultPos: 'zeroOrMax',
                              defaultPos2: 'zeroOrMin',
                          })
                    : (function({
                          fieldDef: e,
                          fieldDef2: t,
                          channel: n,
                          model: i,
                      }) {
                          var r, o, s;
                          const { config: a, markDef: l, encoding: c } = i,
                              u = i.getScaleComponent(n),
                              f = i.scaleName(n),
                              d = u ? u.get('type') : void 0,
                              p = u.get('reverse'),
                              g = qo({
                                  channel: n,
                                  fieldDef: e,
                                  markDef: l,
                                  config: a,
                                  scaleType: d,
                              }),
                              m =
                                  null === (r = i.component.axes[n]) ||
                                  void 0 === r
                                      ? void 0
                                      : r[0],
                              h =
                                  null !==
                                      (o =
                                          null == m
                                              ? void 0
                                              : m.get('translate')) &&
                                  void 0 !== o
                                      ? o
                                      : 0.5,
                              b =
                                  Tt(n) &&
                                  null !== (s = Ln('binSpacing', l, a)) &&
                                  void 0 !== s
                                      ? s
                                      : 0,
                              v = dt(n),
                              y = ft(n),
                              O = ft(v),
                              { offset: x } = Gc({
                                  channel: n,
                                  markDef: l,
                                  encoding: c,
                                  model: i,
                                  bandPosition: 0,
                              }),
                              j = $n(g)
                                  ? { signal: `(1-${g.signal})/2` }
                                  : oo(g)
                                  ? (1 - g.band) / 2
                                  : 0.5;
                          if (mn(e.bin) || e.timeUnit)
                              return {
                                  [O]: ou({
                                      fieldDef: e,
                                      scaleName: f,
                                      bandPosition: j,
                                      offset: ru(v, b, p, h, x),
                                  }),
                                  [y]: ou({
                                      fieldDef: e,
                                      scaleName: f,
                                      bandPosition: $n(j)
                                          ? { signal: `1-${j.signal}` }
                                          : 1 - j,
                                      offset: ru(n, b, p, h, x),
                                  }),
                              };
                          if (hn(e.bin)) {
                              const i = uo(
                                  e,
                                  f,
                                  {},
                                  { offset: ru(v, b, p, h, x) }
                              );
                              if (Ho(t))
                                  return {
                                      [O]: i,
                                      [y]: uo(
                                          t,
                                          f,
                                          {},
                                          { offset: ru(n, b, p, h, x) }
                                      ),
                                  };
                              if (bn(e.bin) && e.bin.step)
                                  return {
                                      [O]: i,
                                      [y]: {
                                          signal: `scale("${f}", ${is(e, {
                                              expr: 'datum',
                                          })} + ${e.bin.step})`,
                                          offset: ru(n, b, p, h, x),
                                      },
                                  };
                          }
                          $i(xi(v));
                      })({ fieldDef: f, fieldDef2: d, channel: t, model: e });
            }
            function iu(e, t, n, i, r) {
                if (oo(r)) {
                    if (!n) return { mult: r.band, field: { group: e } };
                    {
                        const e = n.get('type');
                        if ('band' === e) {
                            let e = `bandwidth('${t}')`;
                            return (
                                1 !== r.band && (e = `${r.band} * ${e}`),
                                { signal: `max(0.25, ${e})` }
                            );
                        }
                        1 !== r.band &&
                            ($i(
                                (function(e) {
                                    return `Cannot use the relative band size with ${e} scale.`;
                                })(e)
                            ),
                            (r = void 0));
                    }
                } else {
                    if ($n(r)) return r;
                    if (r) return { value: r };
                }
                if (n) {
                    const e = n.get('range');
                    if (kn(e) && (0, o.hj)(e.step))
                        return { value: e.step - 2 };
                }
                return { value: Aa(i.view, e) - 2 };
            }
            function ru(e, t, n, i, r) {
                if (He(e)) return 0;
                const o = 'x' === e || 'y2' === e ? -t / 2 : t / 2;
                if ($n(n) || $n(r) || $n(i)) {
                    const e = An(n),
                        t = An(r),
                        s = An(i);
                    return {
                        signal:
                            (s ? `${s} + ` : '') +
                            (e ? `(${e} ? -1 : 1) * ` : '') +
                            (t ? `(${t} + ${o})` : o),
                    };
                }
                return (r = r || 0), i + (n ? -r - o : +r + o);
            }
            function ou({
                fieldDef: e,
                scaleName: t,
                bandPosition: n,
                offset: i,
            }) {
                return fo({
                    scaleName: t,
                    fieldOrDatumDef: e,
                    bandPosition: n,
                    offset: i,
                });
            }
            const su = new Set(['aria', 'width', 'height']);
            function au(e, t) {
                const { fill: n, stroke: i } =
                    'include' === t.color ? Jc(e) : {};
                return Object.assign(
                    Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                Object.assign(
                                                    Object.assign(
                                                        Object.assign(
                                                            Object.assign(
                                                                {},
                                                                (function(
                                                                    e,
                                                                    t
                                                                ) {
                                                                    return Dn.reduce(
                                                                        (
                                                                            n,
                                                                            i
                                                                        ) => (
                                                                            su.has(
                                                                                i
                                                                            ) ||
                                                                                void 0 ===
                                                                                    e[
                                                                                        i
                                                                                    ] ||
                                                                                'ignore' ===
                                                                                    t[
                                                                                        i
                                                                                    ] ||
                                                                                (n[
                                                                                    i
                                                                                ] = Nn(
                                                                                    e[
                                                                                        i
                                                                                    ]
                                                                                )),
                                                                            n
                                                                        ),
                                                                        {}
                                                                    );
                                                                })(e.markDef, t)
                                                            ),
                                                            lu(e, 'fill', n)
                                                        ),
                                                        lu(e, 'stroke', i)
                                                    ),
                                                    Bc('opacity', e)
                                                ),
                                                Bc('fillOpacity', e)
                                            ),
                                            Bc('strokeOpacity', e)
                                        ),
                                        Bc('strokeWidth', e)
                                    ),
                                    Bc('strokeDash', e)
                                ),
                                (function(e) {
                                    const { encoding: t, mark: n } = e,
                                        i = t.order;
                                    return !Qr(n) && Yo(i)
                                        ? qc(e, i, 'zindex', e => Nn(e.value))
                                        : {};
                                })(e)
                            ),
                            Ic(e)
                        ),
                        Rc(e, 'href')
                    ),
                    (function(e) {
                        const { markDef: t, config: n } = e,
                            i = Ln('aria', t, n);
                        return !1 === i
                            ? {}
                            : Object.assign(
                                  Object.assign(
                                      Object.assign({}, i ? { aria: i } : {}),
                                      (function(e) {
                                          const {
                                              mark: t,
                                              markDef: n,
                                              config: i,
                                          } = e;
                                          if (!1 === i.aria) return {};
                                          const r = Ln(
                                              'ariaRoleDescription',
                                              n,
                                              i
                                          );
                                          return null != r
                                              ? {
                                                    ariaRoleDescription: {
                                                        value: r,
                                                    },
                                                }
                                              : t in Pn
                                              ? {}
                                              : {
                                                    ariaRoleDescription: {
                                                        value: t,
                                                    },
                                                };
                                      })(e)
                                  ),
                                  (function(e) {
                                      const {
                                              encoding: t,
                                              markDef: n,
                                              config: i,
                                              stack: r,
                                          } = e,
                                          o = t.description;
                                      if (o)
                                          return qc(e, o, 'description', t =>
                                              Wc(t, e.config)
                                          );
                                      const s = Ln('description', n, i);
                                      if (null != s)
                                          return { description: Nn(s) };
                                      if (!1 === i.aria) return {};
                                      const a = Uc(t, r, i);
                                      return A(a)
                                          ? void 0
                                          : {
                                                description: {
                                                    signal: q(a)
                                                        .map(
                                                            ([e, t], n) =>
                                                                `"${
                                                                    n > 0
                                                                        ? '; '
                                                                        : ''
                                                                }${e}: " + (${t})`
                                                        )
                                                        .join(' + '),
                                                },
                                            };
                                  })(e)
                              );
                    })(e)
                );
            }
            function lu(e, t, n) {
                const { config: i, mark: r, markDef: s } = e;
                if ('hide' === Ln('invalid', s, i) && n && !Qr(r)) {
                    const i = (function(e, { invalid: t = !1, channels: n }) {
                        const i = n.reduce((t, n) => {
                                const i = e.getScaleComponent(n);
                                if (i) {
                                    const r = i.get('type'),
                                        o = e.vgField(n, { expr: 'datum' });
                                    o && jr(r) && (t[o] = !0);
                                }
                                return t;
                            }, {}),
                            r = M(i);
                        if (r.length > 0) {
                            const e = t ? '||' : '&&';
                            return r.map(e => co(e, t)).join(` ${e} `);
                        }
                    })(e, { invalid: !0, channels: Qt });
                    if (i)
                        return {
                            [t]: [{ test: i, value: null }, ...(0, o.IX)(n)],
                        };
                }
                return n ? { [t]: n } : {};
            }
            function cu(e) {
                const { config: t, markDef: n } = e;
                if (Ln('invalid', n, t)) {
                    const t = (function(e, { invalid: t = !1, channels: n }) {
                        const i = n.reduce((t, n) => {
                                var i;
                                const r = e.getScaleComponent(n);
                                if (r) {
                                    const o = r.get('type'),
                                        s = e.vgField(n, {
                                            expr: 'datum',
                                            binSuffix: (null ===
                                                (i = e.stack) || void 0 === i
                                              ? void 0
                                              : i.impute)
                                                ? 'mid'
                                                : void 0,
                                        });
                                    s && jr(o) && (t[s] = !0);
                                }
                                return t;
                            }, {}),
                            r = M(i);
                        if (r.length > 0) {
                            const e = t ? '||' : '&&';
                            return r.map(e => co(e, t)).join(` ${e} `);
                        }
                    })(e, { channels: Nt });
                    if (t) return { defined: { signal: t } };
                }
                return {};
            }
            function uu(e, t) {
                if (void 0 !== t) return { [e]: Nn(t) };
            }
            const fu = 'voronoi',
                du = {
                    defined: e => 'point' === e.type && e.nearest,
                    parse: (e, t) => {
                        if (t.events)
                            for (const n of t.events)
                                n.markname = e.getName(fu);
                    },
                    marks: (e, t, n) => {
                        const { x: i, y: r } = t.project.hasChannel,
                            o = e.mark;
                        if (Qr(o))
                            return (
                                $i(
                                    `The "nearest" transform is not supported for ${o} marks.`
                                ),
                                n
                            );
                        const s = {
                            name: e.getName(fu),
                            type: 'path',
                            interactive: !0,
                            from: { data: e.getName('marks') },
                            encode: {
                                update: Object.assign(
                                    {
                                        fill: { value: 'transparent' },
                                        strokeWidth: { value: 0.35 },
                                        stroke: { value: 'transparent' },
                                        isVoronoi: { value: !0 },
                                    },
                                    Ic(e, { reactiveGeom: !0 })
                                ),
                            },
                            transform: [
                                {
                                    type: 'voronoi',
                                    x: {
                                        expr:
                                            i || !r
                                                ? 'datum.datum.x || 0'
                                                : '0',
                                    },
                                    y: {
                                        expr:
                                            r || !i
                                                ? 'datum.datum.y || 0'
                                                : '0',
                                    },
                                    size: [
                                        e.getSizeSignalRef('width'),
                                        e.getSizeSignalRef('height'),
                                    ],
                                },
                            ],
                        };
                        let a = 0,
                            l = !1;
                        return (
                            n.forEach((t, n) => {
                                var i;
                                const r =
                                    null !== (i = t.name) && void 0 !== i
                                        ? i
                                        : '';
                                r === e.component.mark[0].name
                                    ? (a = n)
                                    : r.indexOf(fu) >= 0 && (l = !0);
                            }),
                            l || n.splice(a + 1, 0, s),
                            n
                        );
                    },
                },
                pu = {
                    defined: e =>
                        'point' === e.type &&
                        'global' === e.resolve &&
                        e.bind &&
                        'scales' !== e.bind &&
                        !wa(e.bind),
                    parse: (e, t, n) => Eu(t, n),
                    topLevelSignals: (e, t, n) => {
                        const i = t.name,
                            r = t.project,
                            s = t.bind,
                            a = t.init && t.init[0],
                            l = du.defined(t)
                                ? '(item().isVoronoi ? datum.datum : datum)'
                                : 'datum';
                        return (
                            r.items.forEach((e, r) => {
                                var c, u;
                                const f = W(`${i}_${e.field}`);
                                n.filter(e => e.name === f).length ||
                                    n.unshift(
                                        Object.assign(
                                            Object.assign(
                                                { name: f },
                                                a
                                                    ? { init: hc(a[r]) }
                                                    : { value: null }
                                            ),
                                            {
                                                on: t.events
                                                    ? [
                                                          {
                                                              events: t.events,
                                                              update: `datum && item().mark.marktype !== 'group' ? ${l}[${(0,
                                                              o.m8)(
                                                                  e.field
                                                              )}] : null`,
                                                          },
                                                      ]
                                                    : [],
                                                bind:
                                                    null !==
                                                        (u =
                                                            null !==
                                                                (c =
                                                                    s[
                                                                        e.field
                                                                    ]) &&
                                                            void 0 !== c
                                                                ? c
                                                                : s[
                                                                      e.channel
                                                                  ]) &&
                                                    void 0 !== u
                                                        ? u
                                                        : s,
                                            }
                                        )
                                    );
                            }),
                            n
                        );
                    },
                    signals: (e, t, n) => {
                        const i = t.name,
                            r = t.project,
                            o = n.filter(e => e.name === i + Du)[0],
                            s = i + $c,
                            a = r.items.map(e => W(`${i}_${e.field}`)),
                            l = a.map(e => `${e} !== null`).join(' && ');
                        return (
                            a.length &&
                                (o.update = `${l} ? {fields: ${s}, values: [${a.join(
                                    ', '
                                )}]} : null`),
                            delete o.value,
                            delete o.on,
                            n
                        );
                    },
                },
                gu = '_toggle',
                mu = {
                    defined: e => 'point' === e.type && !!e.toggle,
                    signals: (e, t, n) =>
                        n.concat({
                            name: t.name + gu,
                            value: !1,
                            on: [{ events: t.events, update: t.toggle }],
                        }),
                    modifyExpr: (e, t) => {
                        const n = t.name + Du,
                            i = t.name + gu;
                        return (
                            `${i} ? null : ${n}, ` +
                            ('global' === t.resolve
                                ? `${i} ? null : true, `
                                : `${i} ? null : {unit: ${_u(e)}}, `) +
                            `${i} ? ${n} : null`
                        );
                    },
                },
                hu = {
                    defined: e => void 0 !== e.clear && !1 !== e.clear,
                    parse: (e, t) => {
                        t.clear &&
                            (t.clear = (0, o.HD)(t.clear)
                                ? (0, gc.r)(t.clear, 'view')
                                : t.clear);
                    },
                    topLevelSignals: (e, t, n) => {
                        if (pu.defined(t))
                            for (const e of t.project.items) {
                                const i = n.findIndex(
                                    n => n.name === W(`${t.name}_${e.field}`)
                                );
                                -1 !== i &&
                                    n[i].on.push({
                                        events: t.clear,
                                        update: 'null',
                                    });
                            }
                        return n;
                    },
                    signals: (e, t, n) => {
                        function i(e, i) {
                            -1 !== e &&
                                n[e].on &&
                                n[e].on.push({ events: t.clear, update: i });
                        }
                        if ('interval' === t.type)
                            for (const e of t.project.items) {
                                const t = n.findIndex(
                                    t => t.name === e.signals.visual
                                );
                                i(t, '[0, 0]'),
                                    -1 === t &&
                                        i(
                                            n.findIndex(
                                                t => t.name === e.signals.data
                                            ),
                                            'null'
                                        );
                            }
                        else {
                            let e = n.findIndex(e => e.name === t.name + Du);
                            i(e, 'null'),
                                mu.defined(t) &&
                                    ((e = n.findIndex(
                                        e => e.name === t.name + gu
                                    )),
                                    i(e, 'false'));
                        }
                        return n;
                    },
                },
                bu = {
                    defined: e => {
                        const t =
                                'global' === e.resolve && e.bind && wa(e.bind),
                            n =
                                1 === e.project.items.length &&
                                e.project.items[0].field !== xa;
                        return (
                            t &&
                                !n &&
                                $i(
                                    'Legend bindings are only supported for selections over an individual field or encoding channel.'
                                ),
                            t && n
                        );
                    },
                    parse: (e, t, n) => {
                        var i;
                        const r = v(n);
                        if (
                            ((r.select = (0, o.HD)(r.select)
                                ? { type: r.select, toggle: t.toggle }
                                : Object.assign(Object.assign({}, r.select), {
                                      toggle: t.toggle,
                                  })),
                            Eu(t, r),
                            (0, Qi.isObject)(n.select) &&
                                (n.select.on || n.select.clear))
                        ) {
                            const e =
                                'event.item && indexof(event.item.mark.role, "legend") < 0';
                            for (const n of t.events)
                                (n.filter = (0, o.IX)(
                                    null !== (i = n.filter) && void 0 !== i
                                        ? i
                                        : []
                                )),
                                    n.filter.includes(e) || n.filter.push(e);
                        }
                        const s = $a(t.bind) ? t.bind.legend : 'click',
                            a = (0, o.HD)(s)
                                ? (0, gc.r)(s, 'view')
                                : (0, o.IX)(s);
                        t.bind = { legend: { merge: a } };
                    },
                    topLevelSignals: (e, t, n) => {
                        const i = t.name,
                            r = $a(t.bind) && t.bind.legend,
                            o = e => t => {
                                const n = v(t);
                                return (n.markname = e), n;
                            };
                        for (const e of t.project.items) {
                            if (!e.hasLegend) continue;
                            const s = `${W(e.field)}_legend`,
                                a = `${i}_${s}`;
                            if (0 === n.filter(e => e.name === a).length) {
                                const e = r.merge
                                    .map(o(`${s}_symbols`))
                                    .concat(r.merge.map(o(`${s}_labels`)))
                                    .concat(r.merge.map(o(`${s}_entries`)));
                                n.unshift(
                                    Object.assign(
                                        Object.assign(
                                            { name: a },
                                            t.init ? {} : { value: null }
                                        ),
                                        {
                                            on: [
                                                {
                                                    events: e,
                                                    update:
                                                        'datum.value || item().items[0].items[0].datum.value',
                                                    force: !0,
                                                },
                                                {
                                                    events: r.merge,
                                                    update: `!event.item || !datum ? null : ${a}`,
                                                    force: !0,
                                                },
                                            ],
                                        }
                                    )
                                );
                            }
                        }
                        return n;
                    },
                    signals: (e, t, n) => {
                        const i = t.name,
                            r = t.project,
                            o = n.find(e => e.name === i + Du),
                            s = i + $c,
                            a = r.items
                                .filter(e => e.hasLegend)
                                .map(e => W(`${i}_${W(e.field)}_legend`)),
                            l = `${a
                                .map(e => `${e} !== null`)
                                .join(
                                    ' && '
                                )} ? {fields: ${s}, values: [${a.join(
                                ', '
                            )}]} : null`;
                        t.events && a.length > 0
                            ? o.on.push({
                                  events: a.map(e => ({ signal: e })),
                                  update: l,
                              })
                            : a.length > 0 &&
                              ((o.update = l), delete o.value, delete o.on);
                        const c = n.find(e => e.name === i + gu),
                            u = $a(t.bind) && t.bind.legend;
                        return (
                            c &&
                                (t.events
                                    ? c.on.push(
                                          Object.assign(
                                              Object.assign({}, c.on[0]),
                                              { events: u }
                                          )
                                      )
                                    : (c.on[0].events = u)),
                            n
                        );
                    },
                },
                vu = '_translate_anchor',
                yu = '_translate_delta',
                Ou = {
                    defined: e => 'interval' === e.type && e.translate,
                    signals: (e, t, n) => {
                        const i = t.name,
                            r = Fc.defined(t),
                            o = i + vu,
                            { x: s, y: a } = t.project.hasChannel;
                        let l = (0, gc.r)(t.translate, 'scope');
                        return (
                            r ||
                                (l = l.map(
                                    e => ((e.between[0].markname = i + Cc), e)
                                )),
                            n.push(
                                {
                                    name: o,
                                    value: {},
                                    on: [
                                        {
                                            events: l.map(e => e.between[0]),
                                            update:
                                                '{x: x(unit), y: y(unit)' +
                                                (void 0 !== s
                                                    ? `, extent_x: ${
                                                          r
                                                              ? zc(e, ue)
                                                              : `slice(${s.signals.visual})`
                                                      }`
                                                    : '') +
                                                (void 0 !== a
                                                    ? `, extent_y: ${
                                                          r
                                                              ? zc(e, fe)
                                                              : `slice(${a.signals.visual})`
                                                      }`
                                                    : '') +
                                                '}',
                                        },
                                    ],
                                },
                                {
                                    name: i + yu,
                                    value: {},
                                    on: [
                                        {
                                            events: l,
                                            update: `{x: ${o}.x - x(unit), y: ${o}.y - y(unit)}`,
                                        },
                                    ],
                                }
                            ),
                            void 0 !== s && xu(e, t, s, 'width', n),
                            void 0 !== a && xu(e, t, a, 'height', n),
                            n
                        );
                    },
                };
            function xu(e, t, n, i, r) {
                var o, s;
                const a = t.name,
                    l = a + vu,
                    c = a + yu,
                    u = n.channel,
                    f = Fc.defined(t),
                    d = r.filter(
                        e => e.name === n.signals[f ? 'data' : 'visual']
                    )[0],
                    p = e.getSizeSignalRef(i).signal,
                    g = e.getScaleComponent(u),
                    m = g.get('type'),
                    h = g.get('reverse'),
                    b = `${l}.extent_${u}`,
                    v = `${
                        f
                            ? 'log' === m
                                ? 'panLog'
                                : 'symlog' === m
                                ? 'panSymlog'
                                : 'pow' === m
                                ? 'panPow'
                                : 'panLinear'
                            : 'panLinear'
                    }(${b}, ${
                        f ? (u === ue ? (h ? '' : '-') : h ? '-' : '') : ''
                    }${c}.${u} / ${f ? `${p}` : `span(${b})`}${
                        f
                            ? 'pow' === m
                                ? `, ${
                                      null !== (o = g.get('exponent')) &&
                                      void 0 !== o
                                          ? o
                                          : 1
                                  }`
                                : 'symlog' === m
                                ? `, ${
                                      null !== (s = g.get('constant')) &&
                                      void 0 !== s
                                          ? s
                                          : 1
                                  }`
                                : ''
                            : ''
                    })`;
                d.on.push({
                    events: { signal: c },
                    update: f ? v : `clampRange(${v}, 0, ${p})`,
                });
            }
            const ju = '_zoom_anchor',
                wu = '_zoom_delta',
                $u = {
                    defined: e => 'interval' === e.type && e.zoom,
                    signals: (e, t, n) => {
                        const i = t.name,
                            r = Fc.defined(t),
                            s = i + wu,
                            { x: a, y: l } = t.project.hasChannel,
                            c = (0, o.m8)(e.scaleName(ue)),
                            u = (0, o.m8)(e.scaleName(fe));
                        let f = (0, gc.r)(t.zoom, 'scope');
                        return (
                            r || (f = f.map(e => ((e.markname = i + Cc), e))),
                            n.push(
                                {
                                    name: i + ju,
                                    on: [
                                        {
                                            events: f,
                                            update: r
                                                ? '{' +
                                                  [
                                                      c
                                                          ? `x: invert(${c}, x(unit))`
                                                          : '',
                                                      u
                                                          ? `y: invert(${u}, y(unit))`
                                                          : '',
                                                  ]
                                                      .filter(e => !!e)
                                                      .join(', ') +
                                                  '}'
                                                : '{x: x(unit), y: y(unit)}',
                                        },
                                    ],
                                },
                                {
                                    name: s,
                                    on: [
                                        {
                                            events: f,
                                            force: !0,
                                            update:
                                                'pow(1.001, event.deltaY * pow(16, event.deltaMode))',
                                        },
                                    ],
                                }
                            ),
                            void 0 !== a && ku(e, t, a, 'width', n),
                            void 0 !== l && ku(e, t, l, 'height', n),
                            n
                        );
                    },
                };
            function ku(e, t, n, i, r) {
                var o, s;
                const a = t.name,
                    l = n.channel,
                    c = Fc.defined(t),
                    u = r.filter(
                        e => e.name === n.signals[c ? 'data' : 'visual']
                    )[0],
                    f = e.getSizeSignalRef(i).signal,
                    d = e.getScaleComponent(l),
                    p = d.get('type'),
                    g = c ? zc(e, l) : u.name,
                    m = a + wu,
                    h = `${
                        c
                            ? 'log' === p
                                ? 'zoomLog'
                                : 'symlog' === p
                                ? 'zoomSymlog'
                                : 'pow' === p
                                ? 'zoomPow'
                                : 'zoomLinear'
                            : 'zoomLinear'
                    }(${g}, ${a}${ju}.${l}, ${m}${
                        c
                            ? 'pow' === p
                                ? `, ${
                                      null !== (o = d.get('exponent')) &&
                                      void 0 !== o
                                          ? o
                                          : 1
                                  }`
                                : 'symlog' === p
                                ? `, ${
                                      null !== (s = d.get('constant')) &&
                                      void 0 !== s
                                          ? s
                                          : 1
                                  }`
                                : ''
                            : ''
                    })`;
                u.on.push({
                    events: { signal: m },
                    update: c ? h : `clampRange(${h}, 0, ${f})`,
                });
            }
            const Su = '_store',
                Du = '_tuple',
                Pu = '_modify',
                Fu = 'vlSelectionResolve',
                zu = [Lc, Tc, Dc, mu, pu, Fc, bu, hu, Ou, $u, du];
            function _u(e, { escape: t } = { escape: !0 }) {
                let n = t ? (0, o.m8)(e.name) : e.name;
                const i = (function(e) {
                    let t = e.parent;
                    for (; t && !dp(t); ) t = t.parent;
                    return t;
                })(e);
                if (i) {
                    const { facet: e } = i;
                    for (const t of Ke)
                        e[t] &&
                            (n += ` + '__facet_${t}_' + (facet[${(0, o.m8)(
                                i.vgField(t)
                            )}])`);
                }
                return n;
            }
            function Cu(e) {
                var t;
                return L(
                    null !== (t = e.component.selection) && void 0 !== t
                        ? t
                        : {}
                ).reduce((e, t) => e || t.project.hasSelectionId, !1);
            }
            function Eu(e, t) {
                (!(0, Qi.isString)(t.select) && t.select.on) || delete e.events,
                    (!(0, Qi.isString)(t.select) && t.select.clear) ||
                        delete e.clear,
                    (!(0, Qi.isString)(t.select) && t.select.toggle) ||
                        delete e.toggle;
            }
            var Nu = n(34358);
            function Tu(e) {
                const t = [];
                return 'Identifier' === e.type
                    ? [e.name]
                    : 'Literal' === e.type
                    ? [e.value]
                    : ('MemberExpression' === e.type &&
                          (t.push(...Tu(e.object)), t.push(...Tu(e.property))),
                      t);
            }
            function Au(e) {
                return 'MemberExpression' === e.object.type
                    ? Au(e.object)
                    : 'datum' === e.object.name;
            }
            function Mu(e) {
                const t = (0, Nu.BJ)(e),
                    n = new Set();
                return (
                    t.visit(e => {
                        'MemberExpression' === e.type &&
                            Au(e) &&
                            n.add(
                                Tu(e)
                                    .slice(1)
                                    .join('.')
                            );
                    }),
                    n
                );
            }
            class Lu extends Oc {
                constructor(e, t, n) {
                    super(e),
                        (this.model = t),
                        (this.filter = n),
                        (this.expr = Wu(this.model, this.filter, this)),
                        (this._dependentFields = Mu(this.expr));
                }
                clone() {
                    return new Lu(null, this.model, v(this.filter));
                }
                dependentFields() {
                    return this._dependentFields;
                }
                producedFields() {
                    return new Set();
                }
                assemble() {
                    return { type: 'filter', expr: this.expr };
                }
                hash() {
                    return `Filter ${this.expr}`;
                }
            }
            function qu(e, t, n, i = 'datum') {
                const r = (0, o.HD)(t) ? t : t.param,
                    s = W(r),
                    a = (0, o.m8)(s + Su);
                let l;
                try {
                    l = e.getSelectionComponent(s, r);
                } catch (e) {
                    return `!!${s}`;
                }
                if (l.project.timeUnit) {
                    const t = null != n ? n : e.component.data.raw,
                        i = l.project.timeUnit.clone();
                    t.parent ? i.insertAsParentOf(t) : (t.parent = i);
                }
                const c = `${
                        l.project.hasSelectionId
                            ? 'vlSelectionIdTest('
                            : 'vlSelectionTest('
                    }${a}, ${i}${
                        'global' === l.resolve
                            ? ')'
                            : `, ${(0, o.m8)(l.resolve)})`
                    }`,
                    u = `length(data(${a}))`;
                return !1 === t.empty ? `${u} && ${c}` : `!${u} || ${c}`;
            }
            function Ru(e, t, n) {
                const i = W(t),
                    r = n.encoding;
                let s,
                    a = n.field;
                try {
                    s = e.getSelectionComponent(i, t);
                } catch (e) {
                    return i;
                }
                if (r || a) {
                    if (r && !a) {
                        const e = s.project.items.filter(e => e.channel === r);
                        !e.length || e.length > 1
                            ? ((a = s.project.items[0].field),
                              $i(
                                  (e.length ? 'Multiple ' : 'No ') +
                                      `matching ${(0, o.m8)(
                                          r
                                      )} encoding found for selection ${(0,
                                      o.m8)(n.param)}. ` +
                                      `Using "field": ${(0, o.m8)(a)}.`
                              ))
                            : (a = e[0].field);
                    }
                } else
                    (a = s.project.items[0].field),
                        s.project.items.length > 1 &&
                            $i(
                                `A "field" or "encoding" must be specified when using a selection as a scale domain. Using "field": ${(0,
                                o.m8)(a)}.`
                            );
                return `${s.name}[${(0, o.m8)(X(a))}]`;
            }
            function Wu(e, t, n) {
                return I(t, t =>
                    (0, o.HD)(t)
                        ? t
                        : (function(e) {
                              return null == e ? void 0 : e.param;
                          })(t)
                        ? qu(e, t, n)
                        : Vi(t)
                );
            }
            var Iu = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            function Uu(e, t, n, i) {
                var r, o, s, a, l;
                (null !== (r = e.encode) && void 0 !== r) || (e.encode = {}),
                    (null !== (o = (a = e.encode)[t]) && void 0 !== o) ||
                        (a[t] = {}),
                    (null !== (s = (l = e.encode[t]).update) && void 0 !== s) ||
                        (l.update = {}),
                    (e.encode[t].update[n] = i);
            }
            function Hu(e, t, n, i = { header: !1 }) {
                var r, s;
                const a = e.combine(),
                    {
                        disable: l,
                        orient: c,
                        scale: u,
                        labelExpr: f,
                        title: d,
                        zindex: p,
                    } = a,
                    g = Iu(a, [
                        'disable',
                        'orient',
                        'scale',
                        'labelExpr',
                        'title',
                        'zindex',
                    ]);
                if (!l) {
                    for (const e in g) {
                        const n = Ss[e],
                            i = g[e];
                        if (n && n !== t && 'both' !== n) delete g[e];
                        else if ($s(i)) {
                            const { condition: t } = i,
                                n = Iu(i, ['condition']),
                                r = (0, o.IX)(t),
                                s = ws[e];
                            if (s) {
                                const { vgProp: t, part: i } = s;
                                Uu(g, i, t, [
                                    ...r.map(e => {
                                        const { test: t } = e,
                                            n = Iu(e, ['test']);
                                        return Object.assign(
                                            { test: Wu(null, t) },
                                            n
                                        );
                                    }),
                                    n,
                                ]),
                                    delete g[e];
                            } else if (null === s) {
                                const t = {
                                    signal:
                                        r
                                            .map(e => {
                                                const { test: t } = e,
                                                    n = Iu(e, ['test']);
                                                return `${Wu(null, t)} ? ${Tn(
                                                    n
                                                )} : `;
                                            })
                                            .join('') + Tn(n),
                                };
                                g[e] = t;
                            }
                        } else if ($n(i)) {
                            const t = ws[e];
                            if (t) {
                                const { vgProp: n, part: r } = t;
                                Uu(g, r, n, i), delete g[e];
                            }
                        }
                        k(['labelAlign', 'labelBaseline'], e) &&
                            null === g[e] &&
                            delete g[e];
                    }
                    if ('grid' === t) {
                        if (!g.grid) return;
                        if (g.encode) {
                            const { grid: e } = g.encode;
                            (g.encode = Object.assign(
                                {},
                                e ? { grid: e } : {}
                            )),
                                A(g.encode) && delete g.encode;
                        }
                        return Object.assign(
                            Object.assign({ scale: u, orient: c }, g),
                            {
                                domain: !1,
                                labels: !1,
                                aria: !1,
                                maxExtent: 0,
                                minExtent: 0,
                                ticks: !1,
                                zindex: Q(p, 0),
                            }
                        );
                    }
                    {
                        if (!i.header && e.mainExtracted) return;
                        if (void 0 !== f) {
                            let e = f;
                            (null ===
                                (s =
                                    null === (r = g.encode) || void 0 === r
                                        ? void 0
                                        : r.labels) || void 0 === s
                                ? void 0
                                : s.update) &&
                                $n(g.encode.labels.update.text) &&
                                (e = V(
                                    f,
                                    'datum.label',
                                    g.encode.labels.update.text.signal
                                )),
                                Uu(g, 'labels', 'text', { signal: e });
                        }
                        if (
                            (null === g.labelAlign && delete g.labelAlign,
                            g.encode)
                        ) {
                            for (const t of ks)
                                e.hasAxisPart(t) || delete g.encode[t];
                            A(g.encode) && delete g.encode;
                        }
                        const t = (function(e, t) {
                            if (e)
                                return (0, o.kJ)(e) && !wn(e)
                                    ? e.map(e => us(e, t)).join(', ')
                                    : e;
                        })(d, n);
                        return Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        { scale: u, orient: c, grid: !1 },
                                        t ? { title: t } : {}
                                    ),
                                    g
                                ),
                                !1 === n.aria ? { aria: !1 } : {}
                            ),
                            { zindex: Q(p, 0) }
                        );
                    }
                }
            }
            function Bu(e) {
                const { axes: t } = e.component,
                    n = [];
                for (const i of Nt)
                    if (t[i])
                        for (const r of t[i])
                            if (!r.get('disable') && !r.get('gridScale')) {
                                const t = 'x' === i ? 'height' : 'width',
                                    r = e.getSizeSignalRef(t).signal;
                                t !== r && n.push({ name: t, update: r });
                            }
                return n;
            }
            function Ju(e, t, n, i) {
                return Object.assign.apply(null, [
                    {},
                    ...e.map(e => {
                        if ('axisOrient' === e) {
                            const e = 'x' === n ? 'bottom' : 'left',
                                r =
                                    t['x' === n ? 'axisBottom' : 'axisLeft'] ||
                                    {},
                                o =
                                    t['x' === n ? 'axisTop' : 'axisRight'] ||
                                    {},
                                s = new Set([...M(r), ...M(o)]),
                                a = {};
                            for (const t of s.values())
                                a[t] = {
                                    signal: `${i.signal} === "${e}" ? ${An(
                                        r[t]
                                    )} : ${An(o[t])}`,
                                };
                            return a;
                        }
                        return t[e];
                    }),
                ]);
            }
            function Gu(e, t) {
                var n;
                const i = [{}];
                for (const r of e) {
                    let e =
                        null === (n = t[r]) || void 0 === n ? void 0 : n.style;
                    if (e) {
                        e = (0, o.IX)(e);
                        for (const n of e) i.push(t.style[n]);
                    }
                }
                return Object.assign.apply(null, i);
            }
            function Xu(e, t, n, i = {}) {
                var r;
                const o = Wn(e, n, t);
                if (void 0 !== o)
                    return { configFrom: 'style', configValue: o };
                for (const t of [
                    'vlOnlyAxisConfig',
                    'vgAxisConfig',
                    'axisConfigStyle',
                ])
                    if (
                        void 0 !==
                        (null === (r = i[t]) || void 0 === r ? void 0 : r[e])
                    )
                        return { configFrom: t, configValue: i[t][e] };
                return {};
            }
            const Vu = {
                scale: ({ model: e, channel: t }) => e.scaleName(t),
                format: ({ fieldOrDatumDef: e, config: t, axis: n }) => {
                    const { format: i, formatType: r } = n;
                    return Oo(e, e.type, i, r, t, !0);
                },
                formatType: ({ axis: e, fieldOrDatumDef: t, scaleType: n }) => {
                    const { formatType: i } = e;
                    return xo(i, t, n);
                },
                grid: ({ fieldOrDatumDef: e, axis: t, scaleType: n }) => {
                    var i;
                    return null !== (i = t.grid) && void 0 !== i
                        ? i
                        : (function(e, t) {
                              return (
                                  !xr(e) &&
                                  Ho(t) &&
                                  !mn(null == t ? void 0 : t.bin) &&
                                  !hn(null == t ? void 0 : t.bin)
                              );
                          })(n, e);
                },
                gridScale: ({ model: e, channel: t }) =>
                    (function(e, t) {
                        const n = 'x' === t ? 'y' : 'x';
                        if (e.getScaleComponent(n)) return e.scaleName(n);
                    })(e, t),
                labelAlign: ({
                    axis: e,
                    labelAngle: t,
                    orient: n,
                    channel: i,
                }) => e.labelAlign || Qu(t, n, i),
                labelAngle: ({ labelAngle: e }) => e,
                labelBaseline: ({
                    axis: e,
                    labelAngle: t,
                    orient: n,
                    channel: i,
                }) => e.labelBaseline || Yu(t, n, i),
                labelFlush: ({ axis: e, fieldOrDatumDef: t, channel: n }) => {
                    var i;
                    return null !== (i = e.labelFlush) && void 0 !== i
                        ? i
                        : (function(e, t) {
                              if (
                                  'x' === t &&
                                  k(['quantitative', 'temporal'], e)
                              )
                                  return !0;
                          })(t.type, n);
                },
                labelOverlap: ({
                    axis: e,
                    fieldOrDatumDef: t,
                    scaleType: n,
                }) => {
                    var i;
                    return null !== (i = e.labelOverlap) && void 0 !== i
                        ? i
                        : (function(e, t, n, i) {
                              if (
                                  (n && !(0, o.Kn)(i)) ||
                                  ('nominal' !== e && 'ordinal' !== e)
                              )
                                  return (
                                      ('log' !== t && 'symlog' !== t) ||
                                      'greedy'
                                  );
                          })(
                              t.type,
                              n,
                              Ho(t) && !!t.timeUnit,
                              Ho(t) ? t.sort : void 0
                          );
                },
                orient: ({ orient: e }) => e,
                tickCount: ({
                    channel: e,
                    model: t,
                    axis: n,
                    fieldOrDatumDef: i,
                    scaleType: r,
                }) => {
                    var o;
                    const s =
                            'x' === e ? 'width' : 'y' === e ? 'height' : void 0,
                        a = s ? t.getSizeSignalRef(s) : void 0;
                    return null !== (o = n.tickCount) && void 0 !== o
                        ? o
                        : (function({
                              fieldOrDatumDef: e,
                              scaleType: t,
                              size: n,
                              values: i,
                          }) {
                              var r;
                              if (!i && !xr(t) && 'log' !== t) {
                                  if (Ho(e)) {
                                      if (mn(e.bin))
                                          return {
                                              signal: `ceil(${n.signal}/10)`,
                                          };
                                      if (
                                          e.timeUnit &&
                                          k(
                                              [
                                                  'month',
                                                  'hours',
                                                  'day',
                                                  'quarter',
                                              ],
                                              null === (r = qi(e.timeUnit)) ||
                                                  void 0 === r
                                                  ? void 0
                                                  : r.unit
                                          )
                                      )
                                          return;
                                  }
                                  return { signal: `ceil(${n.signal}/40)` };
                              }
                          })({
                              fieldOrDatumDef: i,
                              scaleType: r,
                              size: a,
                              values: n.values,
                          });
                },
                title: ({ axis: e, model: t, channel: n }) => {
                    if (void 0 !== e.title) return e.title;
                    const i = Zu(t, n);
                    if (void 0 !== i) return i;
                    const r = t.typedFieldDef(n),
                        o = 'x' === n ? 'x2' : 'y2',
                        s = t.fieldDef(o);
                    return Un(r ? [Ao(r)] : [], Ho(s) ? [Ao(s)] : []);
                },
                values: ({ axis: e, fieldOrDatumDef: t }) =>
                    (function(e, t) {
                        const n = e.values;
                        return (0, o.kJ)(n) ? xs(t, n) : $n(n) ? n : void 0;
                    })(e, t),
                zindex: ({ axis: e, fieldOrDatumDef: t, mark: n }) => {
                    var i;
                    return null !== (i = e.zindex) && void 0 !== i
                        ? i
                        : (function(e, t) {
                              return 'rect' === e && rs(t) ? 1 : 0;
                          })(n, t);
                },
            };
            function Ku(e) {
                return `(((${e.signal} % 360) + 360) % 360)`;
            }
            function Yu(e, t, n, i) {
                if (void 0 !== e) {
                    if ('x' === n) {
                        if ($n(e)) {
                            const n = Ku(e);
                            return {
                                signal: `(45 < ${n} && ${n} < 135) || (225 < ${n} && ${n} < 315) ? "middle" :(${n} <= 45 || 315 <= ${n}) === ${
                                    $n(t)
                                        ? `(${t.signal} === "top")`
                                        : 'top' === t
                                } ? "bottom" : "top"`,
                            };
                        }
                        if ((45 < e && e < 135) || (225 < e && e < 315))
                            return 'middle';
                        if ($n(t)) {
                            const n = e <= 45 || 315 <= e ? '===' : '!==';
                            return {
                                signal: `${t.signal} ${n} "top" ? "bottom" : "top"`,
                            };
                        }
                        return (e <= 45 || 315 <= e) == ('top' === t)
                            ? 'bottom'
                            : 'top';
                    }
                    if ($n(e)) {
                        const n = Ku(e);
                        return {
                            signal: `${n} <= 45 || 315 <= ${n} || (135 <= ${n} && ${n} <= 225) ? ${
                                i ? '"middle"' : 'null'
                            } : (45 <= ${n} && ${n} <= 135) === ${
                                $n(t)
                                    ? `(${t.signal} === "left")`
                                    : 'left' === t
                            } ? "top" : "bottom"`,
                        };
                    }
                    if (e <= 45 || 315 <= e || (135 <= e && e <= 225))
                        return i ? 'middle' : null;
                    if ($n(t)) {
                        const n = 45 <= e && e <= 135 ? '===' : '!==';
                        return {
                            signal: `${t.signal} ${n} "left" ? "top" : "bottom"`,
                        };
                    }
                    return (45 <= e && e <= 135) == ('left' === t)
                        ? 'top'
                        : 'bottom';
                }
            }
            function Qu(e, t, n) {
                if (void 0 === e) return;
                const i = 'x' === n,
                    r = i ? 0 : 90,
                    o = i ? 'bottom' : 'left';
                if ($n(e)) {
                    const n = Ku(e);
                    return {
                        signal: `(${r ? `(${n} + 90)` : n} % 180 === 0) ? ${
                            i ? null : '"center"'
                        } :(${r} < ${n} && ${n} < ${180 + r}) === ${
                            $n(t) ? `(${t.signal} === "${o}")` : t === o
                        } ? "left" : "right"`,
                    };
                }
                if ((e + r) % 180 == 0) return i ? null : 'center';
                if ($n(t)) {
                    const n = r < e && e < 180 + r ? '===' : '!==';
                    return {
                        signal: `${t.signal} ${n} "${o}" ? "left" : "right"`,
                    };
                }
                return (r < e && e < 180 + r) == (t === o) ? 'left' : 'right';
            }
            function Zu(e, t) {
                const n = 'x' === t ? 'x2' : 'y2',
                    i = e.fieldDef(t),
                    r = e.fieldDef(n),
                    o = i ? i.title : void 0,
                    s = r ? r.title : void 0;
                return o && s
                    ? Hn(o, s)
                    : o || s || (void 0 !== o ? o : void 0 !== s ? s : void 0);
            }
            class ef extends Oc {
                constructor(e, t) {
                    super(e),
                        (this.transform = t),
                        (this._dependentFields = Mu(this.transform.calculate));
                }
                clone() {
                    return new ef(null, v(this.transform));
                }
                static parseAllForSortIndex(e, t) {
                    return (
                        t.forEachFieldDef((t, n) => {
                            if (Qo(t) && _o(t.sort)) {
                                const { field: i, timeUnit: r } = t,
                                    o = t.sort,
                                    s =
                                        o
                                            .map(
                                                (e, t) =>
                                                    `${Vi({
                                                        field: i,
                                                        timeUnit: r,
                                                        equal: e,
                                                    })} ? ${t} : `
                                            )
                                            .join('') + o.length;
                                e = new ef(e, {
                                    calculate: s,
                                    as: tf(t, n, { forAs: !0 }),
                                });
                            }
                        }),
                        e
                    );
                }
                producedFields() {
                    return new Set([this.transform.as]);
                }
                dependentFields() {
                    return this._dependentFields;
                }
                assemble() {
                    return {
                        type: 'formula',
                        expr: this.transform.calculate,
                        as: this.transform.as,
                    };
                }
                hash() {
                    return `Calculate ${w(this.transform)}`;
                }
            }
            function tf(e, t, n) {
                return is(
                    e,
                    Object.assign(
                        { prefix: t, suffix: 'sort_index' },
                        null != n ? n : {}
                    )
                );
            }
            function nf(e, t) {
                return k(['top', 'bottom'], t)
                    ? 'column'
                    : k(['left', 'right'], t) || 'row' === e
                    ? 'row'
                    : 'column';
            }
            function rf(e, t, n, i) {
                const r =
                    'row' === i
                        ? n.headerRow
                        : 'column' === i
                        ? n.headerColumn
                        : n.headerFacet;
                return Q((t || {})[e], r[e], n.header[e]);
            }
            function of(e, t, n, i) {
                const r = {};
                for (const o of e) {
                    const e = rf(o, t || {}, n, i);
                    void 0 !== e && (r[o] = e);
                }
                return r;
            }
            const sf = ['row', 'column'],
                af = ['header', 'footer'];
            function lf(e, t) {
                const n = e.component.layoutHeaders[t].title,
                    i = e.config ? e.config : void 0,
                    r = e.component.layoutHeaders[t].facetFieldDef
                        ? e.component.layoutHeaders[t].facetFieldDef
                        : void 0,
                    { titleAnchor: o, titleAngle: s, titleOrient: a } = of(
                        ['titleAnchor', 'titleAngle', 'titleOrient'],
                        r.header,
                        i,
                        t
                    ),
                    l = nf(t, a),
                    c = re(s);
                return {
                    name: `${t}-title`,
                    type: 'group',
                    role: `${l}-title`,
                    title: Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        { text: n },
                                        'row' === t ? { orient: 'left' } : {}
                                    ),
                                    { style: 'guide-title' }
                                ),
                                uf(c, l)
                            ),
                            cf(l, c, o)
                        ),
                        bf(i, r, t, ha, ga)
                    ),
                };
            }
            function cf(e, t, n = 'middle') {
                switch (n) {
                    case 'start':
                        return { align: 'left' };
                    case 'end':
                        return { align: 'right' };
                }
                const i = Qu(
                    t,
                    'row' === e ? 'left' : 'top',
                    'row' === e ? 'y' : 'x'
                );
                return i ? { align: i } : {};
            }
            function uf(e, t) {
                const n = Yu(
                    e,
                    'row' === t ? 'left' : 'top',
                    'row' === t ? 'y' : 'x',
                    !0
                );
                return n ? { baseline: n } : {};
            }
            function ff(e, t) {
                const n = e.component.layoutHeaders[t],
                    i = [];
                for (const r of af)
                    if (n[r])
                        for (const o of n[r]) {
                            const s = gf(e, t, r, n, o);
                            null != s && i.push(s);
                        }
                return i;
            }
            function df(e, t) {
                var n;
                const { sort: i } = e;
                return zo(i)
                    ? {
                          field: is(i, { expr: 'datum' }),
                          order:
                              null !== (n = i.order) && void 0 !== n
                                  ? n
                                  : 'ascending',
                      }
                    : (0, o.kJ)(i)
                    ? { field: tf(e, t, { expr: 'datum' }), order: 'ascending' }
                    : {
                          field: is(e, { expr: 'datum' }),
                          order: null != i ? i : 'ascending',
                      };
            }
            function pf(e, t, n) {
                const {
                        format: i,
                        formatType: r,
                        labelAngle: o,
                        labelAnchor: s,
                        labelOrient: a,
                        labelExpr: l,
                    } = of(
                        [
                            'format',
                            'formatType',
                            'labelAngle',
                            'labelAnchor',
                            'labelOrient',
                            'labelExpr',
                        ],
                        e.header,
                        n,
                        t
                    ),
                    c = bo({
                        fieldOrDatumDef: e,
                        format: i,
                        formatType: r,
                        expr: 'parent',
                        config: n,
                    }).signal,
                    u = nf(t, a);
                return Object.assign(
                    Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    {
                                        text: {
                                            signal: l
                                                ? V(
                                                      V(l, 'datum.label', c),
                                                      'datum.value',
                                                      is(e, { expr: 'parent' })
                                                  )
                                                : c,
                                        },
                                    },
                                    'row' === t ? { orient: 'left' } : {}
                                ),
                                { style: 'guide-label', frame: 'group' }
                            ),
                            uf(o, u)
                        ),
                        cf(u, o, s)
                    ),
                    bf(n, e, t, ba, ma)
                );
            }
            function gf(e, t, n, i, r) {
                if (r) {
                    let o = null;
                    const { facetFieldDef: s } = i,
                        a = e.config ? e.config : void 0;
                    if (s && r.labels) {
                        const { labelOrient: e } = of(
                            ['labelOrient'],
                            s.header,
                            a,
                            t
                        );
                        (('row' === t && !k(['top', 'bottom'], e)) ||
                            ('column' === t && !k(['left', 'right'], e))) &&
                            (o = pf(s, t, a));
                    }
                    const l = dp(e) && !Co(e.facet),
                        c = r.axes,
                        u = (null == c ? void 0 : c.length) > 0;
                    if (o || u) {
                        const a = 'row' === t ? 'height' : 'width';
                        return Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            {
                                                name: e.getName(`${t}_${n}`),
                                                type: 'group',
                                                role: `${t}-${n}`,
                                            },
                                            i.facetFieldDef
                                                ? {
                                                      from: {
                                                          data: e.getName(
                                                              `${t}_domain`
                                                          ),
                                                      },
                                                      sort: df(s, t),
                                                  }
                                                : {}
                                        ),
                                        u && l
                                            ? {
                                                  from: {
                                                      data: e.getName(
                                                          `facet_domain_${t}`
                                                      ),
                                                  },
                                              }
                                            : {}
                                    ),
                                    o ? { title: o } : {}
                                ),
                                r.sizeSignal
                                    ? {
                                          encode: {
                                              update: { [a]: r.sizeSignal },
                                          },
                                      }
                                    : {}
                            ),
                            u ? { axes: c } : {}
                        );
                    }
                }
                return null;
            }
            const mf = {
                column: { start: 0, end: 1 },
                row: { start: 1, end: 0 },
            };
            function hf(e, t) {
                return mf[t][e];
            }
            function bf(e, t, n, i, r) {
                const o = {};
                for (const s of i) {
                    if (!r[s]) continue;
                    const i = rf(s, null == t ? void 0 : t.header, e, n);
                    void 0 !== i && (o[r[s]] = i);
                }
                return o;
            }
            function vf(e) {
                return [
                    ...yf(e, 'width'),
                    ...yf(e, 'height'),
                    ...yf(e, 'childWidth'),
                    ...yf(e, 'childHeight'),
                ];
            }
            function yf(e, t) {
                const n = 'width' === t ? 'x' : 'y',
                    i = e.component.layoutSize.get(t);
                if (!i || 'merged' === i) return [];
                const r = e.getSizeSignalRef(t).signal;
                if ('step' === i) {
                    const t = e.getScaleComponent(n);
                    if (t) {
                        const i = t.get('type'),
                            o = t.get('range');
                        if (xr(i) && kn(o)) {
                            const i = e.scaleName(n);
                            return dp(e.parent) &&
                                'independent' ===
                                    e.parent.component.resolve.scale[n]
                                ? [Of(i, o)]
                                : [
                                      Of(i, o),
                                      {
                                          name: r,
                                          update: xf(
                                              i,
                                              t,
                                              `domain('${i}').length`
                                          ),
                                      },
                                  ];
                        }
                    }
                    throw new Error(
                        'layout size is step although width/height is not step.'
                    );
                }
                if ('container' == i) {
                    const t = r.endsWith('width'),
                        n = t ? 'containerSize()[0]' : 'containerSize()[1]',
                        i = `isFinite(${n}) ? ${n} : ${Ta(
                            e.config.view,
                            t ? 'width' : 'height'
                        )}`;
                    return [
                        {
                            name: r,
                            init: i,
                            on: [{ update: i, events: 'window:resize' }],
                        },
                    ];
                }
                return [{ name: r, value: i }];
            }
            function Of(e, t) {
                const n = `${e}_step`;
                return $n(t.step)
                    ? { name: n, update: t.step.signal }
                    : { name: n, value: t.step };
            }
            function xf(e, t, n) {
                const i = t.get('type'),
                    r = t.get('padding'),
                    o = Q(t.get('paddingOuter'), r);
                let s = t.get('paddingInner');
                return (
                    (s = 'band' === i ? (void 0 !== s ? s : r) : 1),
                    `bandspace(${n}, ${An(s)}, ${An(o)}) * ${e}_step`
                );
            }
            function jf(e) {
                return 'childWidth' === e
                    ? 'width'
                    : 'childHeight' === e
                    ? 'height'
                    : e;
            }
            function wf(e, t) {
                return M(e).reduce((n, i) => {
                    const r = e[i];
                    return Object.assign(
                        Object.assign({}, n),
                        qc(t, r, i, e => Nn(e.value))
                    );
                }, {});
            }
            function $f(e, t) {
                if (dp(t)) return 'theta' === e ? 'independent' : 'shared';
                if (gp(t)) return 'shared';
                if (pp(t))
                    return Tt(e) || 'theta' === e || 'radius' === e
                        ? 'independent'
                        : 'shared';
                throw new Error('invalid model type for resolve');
            }
            function kf(e, t) {
                const n = e.scale[t],
                    i = Tt(t) ? 'axis' : 'legend';
                return 'independent' === n
                    ? ('shared' === e[i][t] &&
                          $i(
                              (function(e) {
                                  return `Setting the scale to be independent for "${e}" means we also have to set the guide (axis or legend) to be independent.`;
                              })(t)
                          ),
                      'independent')
                    : e[i][t] || 'shared';
            }
            const Sf = Object.assign(Object.assign({}, Oa), {
                    disable: 1,
                    labelExpr: 1,
                    selections: 1,
                    opacity: 1,
                    shape: 1,
                    stroke: 1,
                    fill: 1,
                    size: 1,
                    strokeWidth: 1,
                    strokeDash: 1,
                    encode: 1,
                }),
                Df = M(Sf);
            class Pf extends Zl {}
            const Ff = {
                symbols: function(
                    e,
                    {
                        fieldOrDatumDef: t,
                        model: n,
                        channel: i,
                        legendCmpt: r,
                        legendType: s,
                    }
                ) {
                    var a, l, c, u, f, d, p, g;
                    if ('symbol' !== s) return;
                    const { markDef: m, encoding: h, config: b, mark: v } = n,
                        y = m.filled && 'trail' !== v;
                    let O = Object.assign(
                        Object.assign(
                            {},
                            (function(e, t, n) {
                                for (const i of n) {
                                    const n = qn(i, t.markDef, t.config);
                                    void 0 !== n && (e[i] = Nn(n));
                                }
                                return e;
                            })({}, n, no)
                        ),
                        Jc(n, { filled: y })
                    );
                    const x =
                            null !== (a = r.get('symbolOpacity')) &&
                            void 0 !== a
                                ? a
                                : b.legend.symbolOpacity,
                        j =
                            null !== (l = r.get('symbolFillColor')) &&
                            void 0 !== l
                                ? l
                                : b.legend.symbolFillColor,
                        w =
                            null !== (c = r.get('symbolStrokeColor')) &&
                            void 0 !== c
                                ? c
                                : b.legend.symbolStrokeColor,
                        $ =
                            void 0 === x
                                ? null !== (u = zf(h.opacity)) && void 0 !== u
                                    ? u
                                    : m.opacity
                                : void 0;
                    if (O.fill)
                        if ('fill' === i || (y && i === $e)) delete O.fill;
                        else if (O.fill.field)
                            j
                                ? delete O.fill
                                : ((O.fill = Nn(
                                      null !==
                                          (f = b.legend.symbolBaseFillColor) &&
                                          void 0 !== f
                                          ? f
                                          : 'black'
                                  )),
                                  (O.fillOpacity = Nn(null != $ ? $ : 1)));
                        else if ((0, o.kJ)(O.fill)) {
                            const e =
                                null !==
                                    (g =
                                        null !==
                                            (p = _f(
                                                null !== (d = h.fill) &&
                                                    void 0 !== d
                                                    ? d
                                                    : h.color
                                            )) && void 0 !== p
                                            ? p
                                            : m.fill) && void 0 !== g
                                    ? g
                                    : y && m.color;
                            e && (O.fill = Nn(e));
                        }
                    if (O.stroke)
                        if ('stroke' === i || (!y && i === $e)) delete O.stroke;
                        else if (O.stroke.field || w) delete O.stroke;
                        else if ((0, o.kJ)(O.stroke)) {
                            const e = Q(
                                _f(h.stroke || h.color),
                                m.stroke,
                                y ? m.color : void 0
                            );
                            e && (O.stroke = { value: e });
                        }
                    if (i !== ze) {
                        const e = Ho(t) && Ef(0, r, t);
                        e
                            ? (O.opacity = [
                                  Object.assign(
                                      { test: e },
                                      Nn(null != $ ? $ : 1)
                                  ),
                                  Nn(b.legend.unselectedOpacity),
                              ])
                            : $ && (O.opacity = Nn($));
                    }
                    return (
                        (O = Object.assign(Object.assign({}, O), e)),
                        A(O) ? void 0 : O
                    );
                },
                gradient: function(
                    e,
                    { model: t, legendType: n, legendCmpt: i }
                ) {
                    var r;
                    if ('gradient' !== n) return;
                    const { config: o, markDef: s, encoding: a } = t;
                    let l = {};
                    const c =
                        void 0 ===
                        (null !== (r = i.get('gradientOpacity')) && void 0 !== r
                            ? r
                            : o.legend.gradientOpacity)
                            ? zf(a.opacity) || s.opacity
                            : void 0;
                    return (
                        c && (l.opacity = Nn(c)),
                        (l = Object.assign(Object.assign({}, l), e)),
                        A(l) ? void 0 : l
                    );
                },
                labels: function(
                    e,
                    { fieldOrDatumDef: t, model: n, channel: i, legendCmpt: r }
                ) {
                    const o = n.legend(i) || {},
                        s = n.config,
                        a = Ho(t) ? Ef(0, r, t) : void 0,
                        l = a
                            ? [
                                  { test: a, value: 1 },
                                  { value: s.legend.unselectedOpacity },
                              ]
                            : void 0,
                        { format: c, formatType: u } = o;
                    let f;
                    mo(u)
                        ? (f = yo({
                              fieldOrDatumDef: t,
                              field: 'datum.value',
                              format: c,
                              formatType: u,
                              config: s,
                          }))
                        : void 0 === c &&
                          void 0 === u &&
                          s.customFormatTypes &&
                          ('quantitative' === t.type && s.numberFormatType
                              ? (f = yo({
                                    fieldOrDatumDef: t,
                                    field: 'datum.value',
                                    format: s.numberFormat,
                                    formatType: s.numberFormatType,
                                    config: s,
                                }))
                              : 'temporal' === t.type &&
                                s.timeFormatType &&
                                Ho(t) &&
                                void 0 === t.timeUnit &&
                                (f = yo({
                                    fieldOrDatumDef: t,
                                    field: 'datum.value',
                                    format: s.timeFormat,
                                    formatType: s.timeFormatType,
                                    config: s,
                                })));
                    const d = Object.assign(
                        Object.assign(
                            Object.assign({}, l ? { opacity: l } : {}),
                            f ? { text: f } : {}
                        ),
                        e
                    );
                    return A(d) ? void 0 : d;
                },
                entries: function(e, { legendCmpt: t }) {
                    const n = t.get('selections');
                    return (null == n
                      ? void 0
                      : n.length)
                        ? Object.assign(Object.assign({}, e), {
                              fill: { value: 'transparent' },
                          })
                        : e;
                },
            };
            function zf(e) {
                return Cf(e, (e, t) => Math.max(e, t.value));
            }
            function _f(e) {
                return Cf(e, (e, t) => Q(e, t.value));
            }
            function Cf(e, t) {
                return (function(e) {
                    const t = null == e ? void 0 : e.condition;
                    return !!t && ((0, o.kJ)(t) || Yo(t));
                })(e)
                    ? (0, o.IX)(e.condition).reduce(t, e.value)
                    : Yo(e)
                    ? e.value
                    : void 0;
            }
            function Ef(e, t, n) {
                const i = t.get('selections');
                if (!(null == i ? void 0 : i.length)) return;
                const r = (0, o.m8)(n.field);
                return i
                    .map(
                        e =>
                            `(!length(data(${(0, o.m8)(
                                W(e) + Su
                            )})) || (${e}[${r}] && indexof(${e}[${r}], datum.value) >= 0))`
                    )
                    .join(' || ');
            }
            const Nf = {
                direction: ({ direction: e }) => e,
                format: ({ fieldOrDatumDef: e, legend: t, config: n }) => {
                    const { format: i, formatType: r } = t;
                    return Oo(e, e.type, i, r, n, !1);
                },
                formatType: ({
                    legend: e,
                    fieldOrDatumDef: t,
                    scaleType: n,
                }) => {
                    const { formatType: i } = e;
                    return xo(i, t, n);
                },
                gradientLength: e => {
                    var t, n;
                    const { legend: i, legendConfig: r } = e;
                    return null !==
                        (n =
                            null !== (t = i.gradientLength) && void 0 !== t
                                ? t
                                : r.gradientLength) && void 0 !== n
                        ? n
                        : (function({
                              legendConfig: e,
                              model: t,
                              direction: n,
                              orient: i,
                              scaleType: r,
                          }) {
                              const {
                                  gradientHorizontalMaxLength: o,
                                  gradientHorizontalMinLength: s,
                                  gradientVerticalMaxLength: a,
                                  gradientVerticalMinLength: l,
                              } = e;
                              if (wr(r))
                                  return 'horizontal' === n
                                      ? 'top' === i || 'bottom' === i
                                          ? Af(t, 'width', s, o)
                                          : s
                                      : Af(t, 'height', l, a);
                          })(e);
                },
                labelOverlap: ({
                    legend: e,
                    legendConfig: t,
                    scaleType: n,
                }) => {
                    var i, r;
                    return null !==
                        (r =
                            null !== (i = e.labelOverlap) && void 0 !== i
                                ? i
                                : t.labelOverlap) && void 0 !== r
                        ? r
                        : (function(e) {
                              if (
                                  k(
                                      [
                                          'quantile',
                                          'threshold',
                                          'log',
                                          'symlog',
                                      ],
                                      e
                                  )
                              )
                                  return 'greedy';
                          })(n);
                },
                symbolType: ({
                    legend: e,
                    markDef: t,
                    channel: n,
                    encoding: i,
                }) => {
                    var r;
                    return null !== (r = e.symbolType) && void 0 !== r
                        ? r
                        : (function(e, t, n, i) {
                              var r;
                              if ('shape' !== t) {
                                  const e =
                                      null !== (r = _f(n)) && void 0 !== r
                                          ? r
                                          : i;
                                  if (e) return e;
                              }
                              switch (e) {
                                  case 'bar':
                                  case 'rect':
                                  case 'image':
                                  case 'square':
                                      return 'square';
                                  case 'line':
                                  case 'trail':
                                  case 'rule':
                                      return 'stroke';
                                  case 'arc':
                                  case 'point':
                                  case 'circle':
                                  case 'tick':
                                  case 'geoshape':
                                  case 'area':
                                  case 'text':
                                      return 'circle';
                              }
                          })(t.type, n, i.shape, t.shape);
                },
                title: ({ fieldOrDatumDef: e, config: t }) =>
                    ls(e, t, { allowDisabling: !0 }),
                type: ({ legendType: e, scaleType: t, channel: n }) => {
                    if (Xe(n) && wr(t)) {
                        if ('gradient' === e) return;
                    } else if ('symbol' === e) return;
                    return e;
                },
                values: ({ fieldOrDatumDef: e, legend: t }) =>
                    (function(e, t) {
                        const n = e.values;
                        return (0, o.kJ)(n) ? xs(t, n) : $n(n) ? n : void 0;
                    })(t, e),
            };
            function Tf({
                legendConfig: e,
                legendType: t,
                orient: n,
                legend: i,
            }) {
                var r, o;
                return null !==
                    (o =
                        null !== (r = i.direction) && void 0 !== r
                            ? r
                            : e[t ? 'gradientDirection' : 'symbolDirection']) &&
                    void 0 !== o
                    ? o
                    : (function(e, t) {
                          switch (e) {
                              case 'top':
                              case 'bottom':
                                  return 'horizontal';
                              case 'left':
                              case 'right':
                              case 'none':
                              case void 0:
                                  return;
                              default:
                                  return 'gradient' === t
                                      ? 'horizontal'
                                      : void 0;
                          }
                      })(n, t);
            }
            function Af(e, t, n, i) {
                return {
                    signal: `clamp(${
                        e.getSizeSignalRef(t).signal
                    }, ${n}, ${i})`,
                };
            }
            function Mf(e) {
                const t = fp(e)
                    ? (function(e) {
                          const { encoding: t } = e,
                              n = {};
                          for (const i of [$e, ...ya]) {
                              const r = ps(t[i]);
                              r &&
                                  e.getScaleComponent(i) &&
                                  ((i === De && Ho(r) && r.type === sr) ||
                                      (n[i] = qf(e, i)));
                          }
                          return n;
                      })(e)
                    : (function(e) {
                          const { legends: t, resolve: n } = e.component;
                          for (const i of e.children) {
                              Mf(i);
                              for (const r of M(i.component.legends))
                                  (n.legend[r] = kf(e.component.resolve, r)),
                                      'shared' === n.legend[r] &&
                                          ((t[r] = Rf(
                                              t[r],
                                              i.component.legends[r]
                                          )),
                                          t[r] ||
                                              ((n.legend[r] = 'independent'),
                                              delete t[r]));
                          }
                          for (const i of M(t))
                              for (const t of e.children)
                                  t.component.legends[i] &&
                                      'shared' === n.legend[i] &&
                                      delete t.component.legends[i];
                          return t;
                      })(e);
                return (e.component.legends = t), t;
            }
            function Lf(e, t, n, i) {
                switch (t) {
                    case 'disable':
                        return void 0 !== n;
                    case 'values':
                        return !!(null == n ? void 0 : n.values);
                    case 'title':
                        if (
                            'title' === t &&
                            e === (null == i ? void 0 : i.title)
                        )
                            return !0;
                }
                return e === (n || {})[t];
            }
            function qf(e, t) {
                var n, i, r;
                let o = e.legend(t);
                const { markDef: s, encoding: a, config: l } = e,
                    c = l.legend,
                    u = new Pf(
                        {},
                        (function(e, t) {
                            const n = e.scaleName(t);
                            if ('trail' === e.mark) {
                                if ('color' === t) return { stroke: n };
                                if ('size' === t) return { strokeWidth: n };
                            }
                            return 'color' === t
                                ? e.markDef.filled
                                    ? { fill: n }
                                    : { stroke: n }
                                : { [t]: n };
                        })(e, t)
                    );
                !(function(e, t, n) {
                    var i, r, o, s;
                    const a =
                        null === (i = e.fieldDef(t)) || void 0 === i
                            ? void 0
                            : i.field;
                    for (const i of L(
                        null !== (r = e.component.selection) && void 0 !== r
                            ? r
                            : {}
                    )) {
                        const e =
                            null !== (o = i.project.hasField[a]) && void 0 !== o
                                ? o
                                : i.project.hasChannel[t];
                        if (e && bu.defined(i)) {
                            const t =
                                null !== (s = n.get('selections')) &&
                                void 0 !== s
                                    ? s
                                    : [];
                            t.push(i.name),
                                n.set('selections', t, !1),
                                (e.hasLegend = !0);
                        }
                    }
                })(e, t, u);
                const f = void 0 !== o ? !o : c.disable;
                if ((u.set('disable', f, void 0 !== o), f)) return u;
                o = o || {};
                const d = e.getScaleComponent(t).get('type'),
                    p = ps(a[t]),
                    g = Ho(p)
                        ? null === (n = qi(p.timeUnit)) || void 0 === n
                            ? void 0
                            : n.unit
                        : void 0,
                    m = o.orient || l.legend.orient || 'right',
                    h = (function(e) {
                        const { legend: t } = e;
                        return Q(
                            t.type,
                            (function({
                                channel: e,
                                timeUnit: t,
                                scaleType: n,
                            }) {
                                if (Xe(e)) {
                                    if (k(['quarter', 'month', 'day'], t))
                                        return 'symbol';
                                    if (wr(n)) return 'gradient';
                                }
                                return 'symbol';
                            })(e)
                        );
                    })({ legend: o, channel: t, timeUnit: g, scaleType: d }),
                    b = {
                        legend: o,
                        channel: t,
                        model: e,
                        markDef: s,
                        encoding: a,
                        fieldOrDatumDef: p,
                        legendConfig: c,
                        config: l,
                        scaleType: d,
                        orient: m,
                        legendType: h,
                        direction: Tf({
                            legend: o,
                            legendType: h,
                            orient: m,
                            legendConfig: c,
                        }),
                    };
                for (const n of Df) {
                    if (
                        ('gradient' === h && n.startsWith('symbol')) ||
                        ('symbol' === h && n.startsWith('gradient'))
                    )
                        continue;
                    const i = n in Nf ? Nf[n](b) : o[n];
                    if (void 0 !== i) {
                        const r = Lf(i, n, o, e.fieldDef(t));
                        (r || void 0 === l.legend[n]) && u.set(n, i, r);
                    }
                }
                const v =
                        null !== (i = null == o ? void 0 : o.encoding) &&
                        void 0 !== i
                            ? i
                            : {},
                    y = u.get('selections'),
                    O = {},
                    x = {
                        fieldOrDatumDef: p,
                        model: e,
                        channel: t,
                        legendCmpt: u,
                        legendType: h,
                    };
                for (const t of [
                    'labels',
                    'legend',
                    'title',
                    'symbols',
                    'gradient',
                    'entries',
                ]) {
                    const n = wf(
                            null !== (r = v[t]) && void 0 !== r ? r : {},
                            e
                        ),
                        i = t in Ff ? Ff[t](n, x) : n;
                    void 0 === i ||
                        A(i) ||
                        (O[t] = Object.assign(
                            Object.assign(
                                Object.assign(
                                    {},
                                    (null == y ? void 0 : y.length) && Ho(p)
                                        ? { name: `${W(p.field)}_legend_${t}` }
                                        : {}
                                ),
                                (null == y
                                  ? void 0
                                  : y.length)
                                    ? { interactive: !!y }
                                    : {}
                            ),
                            { update: i }
                        ));
                }
                return (
                    A(O) ||
                        u.set('encode', O, !!(null == o ? void 0 : o.encoding)),
                    u
                );
            }
            function Rf(e, t) {
                var n, i, r, o;
                if (!e) return t.clone();
                const s = e.getWithExplicit('orient'),
                    a = t.getWithExplicit('orient');
                if (s.explicit && a.explicit && s.value !== a.value) return;
                let l = !1;
                for (const n of Df) {
                    const i = rc(
                        e.getWithExplicit(n),
                        t.getWithExplicit(n),
                        n,
                        'legend',
                        (e, t) => {
                            switch (n) {
                                case 'symbolType':
                                    return (
                                        (i = e),
                                        'circle' === (r = t).value ? r : i
                                    );
                                case 'title':
                                    return Bn(e, t);
                                case 'type':
                                    return (l = !0), tc('symbol');
                            }
                            var i, r;
                            return ic(e, t, n, 'legend');
                        }
                    );
                    e.setWithExplicit(n, i);
                }
                return (
                    l &&
                        ((null ===
                            (i =
                                null === (n = e.implicit) || void 0 === n
                                    ? void 0
                                    : n.encode) || void 0 === i
                            ? void 0
                            : i.gradient) &&
                            U(e.implicit, ['encode', 'gradient']),
                        (null ===
                            (o =
                                null === (r = e.explicit) || void 0 === r
                                    ? void 0
                                    : r.encode) || void 0 === o
                            ? void 0
                            : o.gradient) &&
                            U(e.explicit, ['encode', 'gradient'])),
                    e
                );
            }
            function Wf(e) {
                const t = e.component.legends,
                    n = {};
                for (const i of M(t)) {
                    const r = e.getScaleComponent(i),
                        o = j(r.get('domains'));
                    if (n[o])
                        for (const e of n[o]) Rf(e, t[i]) || n[o].push(t[i]);
                    else n[o] = [t[i].clone()];
                }
                const i = L(n)
                    .flat()
                    .map(t =>
                        (function(e, t) {
                            var n, i, r;
                            const o = e.combine(),
                                { disable: s, labelExpr: a, selections: l } = o,
                                c = (function(e, t) {
                                    var n = {};
                                    for (var i in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            i
                                        ) &&
                                            t.indexOf(i) < 0 &&
                                            (n[i] = e[i]);
                                    if (
                                        null != e &&
                                        'function' ==
                                            typeof Object.getOwnPropertySymbols
                                    ) {
                                        var r = 0;
                                        for (
                                            i = Object.getOwnPropertySymbols(e);
                                            r < i.length;
                                            r++
                                        )
                                            t.indexOf(i[r]) < 0 &&
                                                Object.prototype.propertyIsEnumerable.call(
                                                    e,
                                                    i[r]
                                                ) &&
                                                (n[i[r]] = e[i[r]]);
                                    }
                                    return n;
                                })(o, ['disable', 'labelExpr', 'selections']);
                            if (!s) {
                                if (
                                    (!1 === t.aria &&
                                        null == c.aria &&
                                        (c.aria = !1),
                                    null === (n = c.encode) || void 0 === n
                                        ? void 0
                                        : n.symbols)
                                ) {
                                    const e = c.encode.symbols.update;
                                    !e.fill ||
                                        'transparent' === e.fill.value ||
                                        e.stroke ||
                                        c.stroke ||
                                        (e.stroke = { value: 'transparent' });
                                    for (const t of ya) c[t] && delete e[t];
                                }
                                if ((c.title || delete c.title, void 0 !== a)) {
                                    let e = a;
                                    (null ===
                                        (r =
                                            null === (i = c.encode) ||
                                            void 0 === i
                                                ? void 0
                                                : i.labels) || void 0 === r
                                        ? void 0
                                        : r.update) &&
                                        $n(c.encode.labels.update.text) &&
                                        (e = V(
                                            a,
                                            'datum.label',
                                            c.encode.labels.update.text.signal
                                        )),
                                        (function(e, t, n, i) {
                                            var r, o, s, a, l;
                                            (null !== (r = e.encode) &&
                                                void 0 !== r) ||
                                                (e.encode = {}),
                                                (null !==
                                                    (o = (a = e.encode)[t]) &&
                                                    void 0 !== o) ||
                                                    (a[t] = {}),
                                                (null !==
                                                    (s = (l = e.encode[t])
                                                        .update) &&
                                                    void 0 !== s) ||
                                                    (l.update = {}),
                                                (e.encode[t].update.text = i);
                                        })(c, 'labels', 0, { signal: e });
                                }
                                return c;
                            }
                        })(t, e.config)
                    )
                    .filter(e => void 0 !== e);
                return i;
            }
            function If(e) {
                const t = e.component.projection;
                if (!t || t.merged) return [];
                const n = t.combine(),
                    { name: i } = n;
                if (t.data) {
                    const r = {
                            signal: `[${t.size.map(e => e.signal).join(', ')}]`,
                        },
                        o = t.data.reduce((t, n) => {
                            const i = $n(n)
                                ? n.signal
                                : `data('${e.lookupDataSource(n)}')`;
                            return k(t, i) || t.push(i), t;
                        }, []);
                    if (o.length <= 0)
                        throw new Error(
                            "Projection's fit didn't find any data sources"
                        );
                    return [
                        Object.assign(
                            {
                                name: i,
                                size: r,
                                fit: {
                                    signal:
                                        o.length > 1
                                            ? `[${o.join(', ')}]`
                                            : o[0],
                                },
                            },
                            n
                        ),
                    ];
                }
                return [
                    Object.assign(
                        Object.assign(
                            { name: i },
                            { translate: { signal: '[width / 2, height / 2]' } }
                        ),
                        n
                    ),
                ];
            }
            const Uf = [
                'type',
                'clipAngle',
                'clipExtent',
                'center',
                'rotate',
                'precision',
                'reflectX',
                'reflectY',
                'coefficient',
                'distance',
                'fraction',
                'lobes',
                'parallel',
                'radius',
                'ratio',
                'spacing',
                'tilt',
            ];
            class Hf extends Zl {
                constructor(e, t, n, i) {
                    super(Object.assign({}, t), { name: e }),
                        (this.specifiedProjection = t),
                        (this.size = n),
                        (this.data = i),
                        (this.merged = !1);
                }
                get isFit() {
                    return !!this.data;
                }
            }
            function Bf(e) {
                e.component.projection = fp(e)
                    ? (function(e) {
                          var t;
                          if (e.hasProjection) {
                              const n = xn(e.specifiedProjection),
                                  i = !(
                                      n &&
                                      (null != n.scale || null != n.translate)
                                  ),
                                  r = i
                                      ? [
                                            e.getSizeSignalRef('width'),
                                            e.getSizeSignalRef('height'),
                                        ]
                                      : void 0,
                                  o = i
                                      ? (function(e) {
                                            const t = [],
                                                { encoding: n } = e;
                                            for (const i of [
                                                [xe, Oe],
                                                [we, je],
                                            ])
                                                (ps(n[i[0]]) || ps(n[i[1]])) &&
                                                    t.push({
                                                        signal: e.getName(
                                                            `geojson_${t.length}`
                                                        ),
                                                    });
                                            return (
                                                e.channelHasField(De) &&
                                                    e.typedFieldDef(De).type ===
                                                        sr &&
                                                    t.push({
                                                        signal: e.getName(
                                                            `geojson_${t.length}`
                                                        ),
                                                    }),
                                                0 === t.length &&
                                                    t.push(
                                                        e.requestDataName(
                                                            pc.Main
                                                        )
                                                    ),
                                                t
                                            );
                                        })(e)
                                      : void 0,
                                  s = new Hf(
                                      e.projectionName(!0),
                                      Object.assign(
                                          Object.assign(
                                              {},
                                              null !==
                                                  (t = xn(
                                                      e.config.projection
                                                  )) && void 0 !== t
                                                  ? t
                                                  : {}
                                          ),
                                          null != n ? n : {}
                                      ),
                                      r,
                                      o
                                  );
                              return (
                                  s.get('type') ||
                                      s.set('type', 'equalEarth', !1),
                                  s
                              );
                          }
                      })(e)
                    : (function(e) {
                          if (0 === e.children.length) return;
                          let t;
                          for (const t of e.children) Bf(t);
                          const n = D(e.children, e => {
                              const n = e.component.projection;
                              if (n) {
                                  if (t) {
                                      const e = (function(e, t) {
                                          const n = D(
                                              Uf,
                                              n =>
                                                  (!(0, o.nr)(e.explicit, n) &&
                                                      !(0, o.nr)(
                                                          t.explicit,
                                                          n
                                                      )) ||
                                                  !!(
                                                      (0, o.nr)(
                                                          e.explicit,
                                                          n
                                                      ) &&
                                                      (0, o.nr)(
                                                          t.explicit,
                                                          n
                                                      ) &&
                                                      b(e.get(n), t.get(n))
                                                  )
                                          );
                                          if (b(e.size, t.size)) {
                                              if (n) return e;
                                              if (b(e.explicit, {})) return t;
                                              if (b(t.explicit, {})) return e;
                                          }
                                          return null;
                                      })(t, n);
                                      return e && (t = e), !!e;
                                  }
                                  return (t = n), !0;
                              }
                              return !0;
                          });
                          if (t && n) {
                              const n = e.projectionName(!0),
                                  i = new Hf(
                                      n,
                                      t.specifiedProjection,
                                      t.size,
                                      v(t.data)
                                  );
                              for (const t of e.children) {
                                  const e = t.component.projection;
                                  e &&
                                      (e.isFit &&
                                          i.data.push(
                                              ...t.component.projection.data
                                          ),
                                      t.renameProjection(e.get('name'), n),
                                      (e.merged = !0));
                              }
                              return i;
                          }
                      })(e);
            }
            function Jf(e, t) {
                return `${gn(e)}_${t}`;
            }
            function Gf(e, t, n) {
                var i;
                const r = Jf(
                    null !== (i = bs(n, void 0)) && void 0 !== i ? i : {},
                    t
                );
                return e.getName(`${r}_bins`);
            }
            function Xf(e, t, n) {
                let i, r;
                i = (function(e) {
                    return 'as' in e;
                })(e)
                    ? (0, o.HD)(e.as)
                        ? [e.as, `${e.as}_end`]
                        : [e.as[0], e.as[1]]
                    : [
                          is(e, { forAs: !0 }),
                          is(e, { binSuffix: 'end', forAs: !0 }),
                      ];
                const s = Object.assign({}, bs(t, void 0)),
                    a = Jf(s, e.field),
                    { signal: l, extentSignal: c } = (function(e, t) {
                        return {
                            signal: e.getName(`${t}_bins`),
                            extentSignal: e.getName(`${t}_extent`),
                        };
                    })(n, a);
                if (vn(s.extent)) {
                    const e = s.extent;
                    (r = Ru(n, e.param, e)), delete s.extent;
                }
                return {
                    key: a,
                    binComponent: Object.assign(
                        Object.assign(
                            Object.assign(
                                { bin: s, field: e.field, as: [i] },
                                l ? { signal: l } : {}
                            ),
                            c ? { extentSignal: c } : {}
                        ),
                        r ? { span: r } : {}
                    ),
                };
            }
            class Vf extends Oc {
                constructor(e, t) {
                    super(e), (this.bins = t);
                }
                clone() {
                    return new Vf(null, v(this.bins));
                }
                static makeFromEncoding(e, t) {
                    const n = t.reduceFieldDef((e, n, i) => {
                        if (Ko(n) && mn(n.bin)) {
                            const { key: r, binComponent: o } = Xf(n, n.bin, t);
                            e[r] = Object.assign(
                                Object.assign(Object.assign({}, o), e[r]),
                                (function(e, t, n, i) {
                                    var r, o;
                                    if (js(t, n)) {
                                        const s =
                                                fp(e) &&
                                                null !==
                                                    (o =
                                                        null !==
                                                            (r = e.axis(n)) &&
                                                        void 0 !== r
                                                            ? r
                                                            : e.legend(n)) &&
                                                void 0 !== o
                                                    ? o
                                                    : {},
                                            a = is(t, { expr: 'datum' }),
                                            l = is(t, {
                                                expr: 'datum',
                                                binSuffix: 'end',
                                            });
                                        return {
                                            formulaAs: is(t, {
                                                binSuffix: 'range',
                                                forAs: !0,
                                            }),
                                            formula: ko(
                                                a,
                                                l,
                                                s.format,
                                                s.formatType,
                                                i
                                            ),
                                        };
                                    }
                                    return {};
                                })(t, n, i, t.config)
                            );
                        }
                        return e;
                    }, {});
                    return A(n) ? null : new Vf(e, n);
                }
                static makeFromTransform(e, t, n) {
                    const { key: i, binComponent: r } = Xf(t, t.bin, n);
                    return new Vf(e, { [i]: r });
                }
                merge(e, t) {
                    for (const n of M(e.bins))
                        n in this.bins
                            ? (t(e.bins[n].signal, this.bins[n].signal),
                              (this.bins[n].as = z(
                                  [...this.bins[n].as, ...e.bins[n].as],
                                  w
                              )))
                            : (this.bins[n] = e.bins[n]);
                    for (const t of e.children)
                        e.removeChild(t), (t.parent = this);
                    e.remove();
                }
                producedFields() {
                    return new Set(
                        L(this.bins)
                            .map(e => e.as)
                            .flat(2)
                    );
                }
                dependentFields() {
                    return new Set(L(this.bins).map(e => e.field));
                }
                hash() {
                    return `Bin ${w(this.bins)}`;
                }
                assemble() {
                    return L(this.bins).flatMap(e => {
                        const t = [],
                            [n, ...i] = e.as,
                            r = e.bin,
                            { extent: o } = r,
                            s = (function(e, t) {
                                var n = {};
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        i
                                    ) &&
                                        t.indexOf(i) < 0 &&
                                        (n[i] = e[i]);
                                if (
                                    null != e &&
                                    'function' ==
                                        typeof Object.getOwnPropertySymbols
                                ) {
                                    var r = 0;
                                    for (
                                        i = Object.getOwnPropertySymbols(e);
                                        r < i.length;
                                        r++
                                    )
                                        t.indexOf(i[r]) < 0 &&
                                            Object.prototype.propertyIsEnumerable.call(
                                                e,
                                                i[r]
                                            ) &&
                                            (n[i[r]] = e[i[r]]);
                                }
                                return n;
                            })(r, ['extent']),
                            a = Object.assign(
                                Object.assign(
                                    Object.assign(
                                        {
                                            type: 'bin',
                                            field: X(e.field),
                                            as: n,
                                            signal: e.signal,
                                        },
                                        vn(o) ? { extent: null } : { extent: o }
                                    ),
                                    e.span
                                        ? {
                                              span: {
                                                  signal: `span(${e.span})`,
                                              },
                                          }
                                        : {}
                                ),
                                s
                            );
                        !o &&
                            e.extentSignal &&
                            (t.push({
                                type: 'extent',
                                field: X(e.field),
                                signal: e.extentSignal,
                            }),
                            (a.extent = { signal: e.extentSignal })),
                            t.push(a);
                        for (const e of i)
                            for (let i = 0; i < 2; i++)
                                t.push({
                                    type: 'formula',
                                    expr: is(
                                        { field: n[i] },
                                        { expr: 'datum' }
                                    ),
                                    as: e[i],
                                });
                        return (
                            e.formula &&
                                t.push({
                                    type: 'formula',
                                    expr: e.formula,
                                    as: e.formulaAs,
                                }),
                            t
                        );
                    });
                }
            }
            class Kf extends Oc {
                constructor(e, t, n) {
                    super(e), (this.dimensions = t), (this.measures = n);
                }
                clone() {
                    return new Kf(
                        null,
                        new Set(this.dimensions),
                        v(this.measures)
                    );
                }
                get groupBy() {
                    return this.dimensions;
                }
                static makeFromEncoding(e, t) {
                    let n = !1;
                    t.forEachFieldDef(e => {
                        e.aggregate && (n = !0);
                    });
                    const i = {},
                        r = new Set();
                    return n
                        ? (t.forEachFieldDef((e, n) => {
                              var o, s, a, l;
                              const { aggregate: c, field: u } = e;
                              if (c)
                                  if ('count' === c)
                                      (null !== (o = i['*']) && void 0 !== o) ||
                                          (i['*'] = {}),
                                          (i['*'].count = new Set([
                                              is(e, { forAs: !0 }),
                                          ]));
                                  else {
                                      if (an(c) || ln(c)) {
                                          const e = an(c) ? 'argmin' : 'argmax',
                                              t = c[e];
                                          (null !== (s = i[t]) &&
                                              void 0 !== s) ||
                                              (i[t] = {}),
                                              (i[t][e] = new Set([
                                                  is(
                                                      { op: e, field: t },
                                                      { forAs: !0 }
                                                  ),
                                              ]));
                                      } else
                                          (null !== (a = i[u]) &&
                                              void 0 !== a) ||
                                              (i[u] = {}),
                                              (i[u][c] = new Set([
                                                  is(e, { forAs: !0 }),
                                              ]));
                                      Zt(n) &&
                                          'unaggregated' === t.scaleDomain(n) &&
                                          ((null !== (l = i[u]) &&
                                              void 0 !== l) ||
                                              (i[u] = {}),
                                          (i[u].min = new Set([
                                              is(
                                                  {
                                                      field: u,
                                                      aggregate: 'min',
                                                  },
                                                  { forAs: !0 }
                                              ),
                                          ])),
                                          (i[u].max = new Set([
                                              is(
                                                  {
                                                      field: u,
                                                      aggregate: 'max',
                                                  },
                                                  { forAs: !0 }
                                              ),
                                          ])));
                                  }
                              else
                                  !(function(e, t, n, i) {
                                      var r;
                                      const o = fp(i)
                                          ? i.encoding[dt(t)]
                                          : void 0;
                                      if (
                                          Ko(n) &&
                                          fp(i) &&
                                          Ro(n, o, i.markDef, i.config)
                                      )
                                          e.add(is(n, {})),
                                              e.add(is(n, { suffix: 'end' })),
                                              n.bin &&
                                                  js(n, t) &&
                                                  e.add(
                                                      is(n, {
                                                          binSuffix: 'range',
                                                      })
                                                  );
                                      else if (t in Be) {
                                          const n = (function(e) {
                                              switch (e) {
                                                  case Oe:
                                                      return 'y';
                                                  case je:
                                                      return 'y2';
                                                  case xe:
                                                      return 'x';
                                                  case we:
                                                      return 'x2';
                                              }
                                          })(t);
                                          e.add(i.getName(n));
                                      } else e.add(is(n));
                                      Qo(n) &&
                                          (function(e) {
                                              return (
                                                  (0, Qi.isObject)(e) &&
                                                  'field' in e
                                              );
                                          })(
                                              null === (r = n.scale) ||
                                                  void 0 === r
                                                  ? void 0
                                                  : r.range
                                          ) &&
                                          e.add(n.scale.range.field);
                                  })(r, n, e, t);
                          }),
                          r.size + M(i).length === 0 ? null : new Kf(e, r, i))
                        : null;
                }
                static makeFromTransform(e, t) {
                    var n, i, r;
                    const o = new Set(),
                        s = {};
                    for (const e of t.aggregate) {
                        const { op: t, field: r, as: o } = e;
                        t &&
                            ('count' === t
                                ? ((null !== (n = s['*']) && void 0 !== n) ||
                                      (s['*'] = {}),
                                  (s['*'].count = new Set([
                                      o || is(e, { forAs: !0 }),
                                  ])))
                                : ((null !== (i = s[r]) && void 0 !== i) ||
                                      (s[r] = {}),
                                  (s[r][t] = new Set([
                                      o || is(e, { forAs: !0 }),
                                  ]))));
                    }
                    for (const e of null !== (r = t.groupby) && void 0 !== r
                        ? r
                        : [])
                        o.add(e);
                    return o.size + M(s).length === 0 ? null : new Kf(e, o, s);
                }
                merge(e) {
                    return C(this.dimensions, e.dimensions)
                        ? ((function(e, t) {
                              var n;
                              for (const i of M(t)) {
                                  const r = t[i];
                                  for (const t of M(r))
                                      i in e
                                          ? (e[i][t] = new Set([
                                                ...(null !== (n = e[i][t]) &&
                                                void 0 !== n
                                                    ? n
                                                    : []),
                                                ...r[t],
                                            ]))
                                          : (e[i] = { [t]: r[t] });
                              }
                          })(this.measures, e.measures),
                          !0)
                        : ((function(...e) {
                              wi.debug(...e);
                          })('different dimensions, cannot merge'),
                          !1);
                }
                addDimensions(e) {
                    e.forEach(this.dimensions.add, this.dimensions);
                }
                dependentFields() {
                    return new Set([...this.dimensions, ...M(this.measures)]);
                }
                producedFields() {
                    const e = new Set();
                    for (const t of M(this.measures))
                        for (const n of M(this.measures[t])) {
                            const i = this.measures[t][n];
                            0 === i.size
                                ? e.add(`${n}_${t}`)
                                : i.forEach(e.add, e);
                        }
                    return e;
                }
                hash() {
                    return `Aggregate ${w({
                        dimensions: this.dimensions,
                        measures: this.measures,
                    })}`;
                }
                assemble() {
                    const e = [],
                        t = [],
                        n = [];
                    for (const i of M(this.measures))
                        for (const r of M(this.measures[i]))
                            for (const o of this.measures[i][r])
                                n.push(o),
                                    e.push(r),
                                    t.push('*' === i ? null : X(i));
                    return {
                        type: 'aggregate',
                        groupby: [...this.dimensions].map(X),
                        ops: e,
                        fields: t,
                        as: n,
                    };
                }
            }
            class Yf extends Oc {
                constructor(e, t, n, i) {
                    super(e),
                        (this.model = t),
                        (this.name = n),
                        (this.data = i);
                    for (const e of Ke) {
                        const n = t.facet[e];
                        if (n) {
                            const { bin: i, sort: r } = n;
                            this[e] = Object.assign(
                                {
                                    name: t.getName(`${e}_domain`),
                                    fields: [
                                        is(n),
                                        ...(mn(i)
                                            ? [is(n, { binSuffix: 'end' })]
                                            : []),
                                    ],
                                },
                                zo(r)
                                    ? { sortField: r }
                                    : (0, o.kJ)(r)
                                    ? { sortIndexField: tf(n, e) }
                                    : {}
                            );
                        }
                    }
                    this.childModel = t.child;
                }
                hash() {
                    let e = 'Facet';
                    for (const t of Ke)
                        this[t] && (e += ` ${t.charAt(0)}:${w(this[t])}`);
                    return e;
                }
                get fields() {
                    var e;
                    const t = [];
                    for (const n of Ke)
                        (null === (e = this[n]) || void 0 === e
                            ? void 0
                            : e.fields) && t.push(...this[n].fields);
                    return t;
                }
                dependentFields() {
                    const e = new Set(this.fields);
                    for (const t of Ke)
                        this[t] &&
                            (this[t].sortField &&
                                e.add(this[t].sortField.field),
                            this[t].sortIndexField &&
                                e.add(this[t].sortIndexField));
                    return e;
                }
                producedFields() {
                    return new Set();
                }
                getSource() {
                    return this.name;
                }
                getChildIndependentFieldsWithStep() {
                    const e = {};
                    for (const t of Nt) {
                        const n = this.childModel.component.scales[t];
                        if (n && !n.merged) {
                            const i = n.get('type'),
                                r = n.get('range');
                            if (xr(i) && kn(r)) {
                                const n = Wd(Id(this.childModel, t));
                                n ? (e[t] = n) : $i(Kn(t));
                            }
                        }
                    }
                    return e;
                }
                assembleRowColumnHeaderData(e, t, n) {
                    const i = { row: 'y', column: 'x', facet: void 0 }[e],
                        r = [],
                        o = [],
                        s = [];
                    i &&
                        n &&
                        n[i] &&
                        (t
                            ? (r.push(`distinct_${n[i]}`), o.push('max'))
                            : (r.push(n[i]), o.push('distinct')),
                        s.push(`distinct_${n[i]}`));
                    const { sortField: a, sortIndexField: l } = this[e];
                    if (a) {
                        const { op: e = So, field: t } = a;
                        r.push(t), o.push(e), s.push(is(a, { forAs: !0 }));
                    } else l && (r.push(l), o.push('max'), s.push(l));
                    return {
                        name: this[e].name,
                        source: null != t ? t : this.data,
                        transform: [
                            Object.assign(
                                { type: 'aggregate', groupby: this[e].fields },
                                r.length ? { fields: r, ops: o, as: s } : {}
                            ),
                        ],
                    };
                }
                assembleFacetHeaderData(e) {
                    var t, n;
                    const { columns: i } = this.model.layout,
                        { layoutHeaders: r } = this.model.component,
                        o = [],
                        s = {};
                    for (const e of sf) {
                        for (const i of af) {
                            const o =
                                null !== (t = r[e] && r[e][i]) && void 0 !== t
                                    ? t
                                    : [];
                            for (const t of o)
                                if (
                                    (null === (n = t.axes) || void 0 === n
                                        ? void 0
                                        : n.length) > 0
                                ) {
                                    s[e] = !0;
                                    break;
                                }
                        }
                        if (s[e]) {
                            const t = `length(data("${this.facet.name}"))`,
                                n =
                                    'row' === e
                                        ? i
                                            ? { signal: `ceil(${t} / ${i})` }
                                            : 1
                                        : i
                                        ? { signal: `min(${t}, ${i})` }
                                        : { signal: t };
                            o.push({
                                name: `${this.facet.name}_${e}`,
                                transform: [
                                    { type: 'sequence', start: 0, stop: n },
                                ],
                            });
                        }
                    }
                    const { row: a, column: l } = s;
                    return (
                        (a || l) &&
                            o.unshift(
                                this.assembleRowColumnHeaderData(
                                    'facet',
                                    null,
                                    e
                                )
                            ),
                        o
                    );
                }
                assemble() {
                    var e, t;
                    const n = [];
                    let i = null;
                    const r = this.getChildIndependentFieldsWithStep(),
                        { column: o, row: s, facet: a } = this;
                    if (o && s && (r.x || r.y)) {
                        i = `cross_${this.column.name}_${this.row.name}`;
                        const o = [].concat(
                                null !== (e = r.x) && void 0 !== e ? e : [],
                                null !== (t = r.y) && void 0 !== t ? t : []
                            ),
                            s = o.map(() => 'distinct');
                        n.push({
                            name: i,
                            source: this.data,
                            transform: [
                                {
                                    type: 'aggregate',
                                    groupby: this.fields,
                                    fields: o,
                                    ops: s,
                                },
                            ],
                        });
                    }
                    for (const e of [le, ae])
                        this[e] &&
                            n.push(this.assembleRowColumnHeaderData(e, i, r));
                    if (a) {
                        const e = this.assembleFacetHeaderData(r);
                        e && n.push(...e);
                    }
                    return n;
                }
            }
            function Qf(e) {
                return (e.startsWith("'") && e.endsWith("'")) ||
                    (e.startsWith('"') && e.endsWith('"'))
                    ? e.slice(1, -1)
                    : e;
            }
            function Zf(e) {
                const t = {};
                return (
                    m(e.filter, e => {
                        var n;
                        if (Gi(e)) {
                            let i = null;
                            Ri(e)
                                ? (i = Cn(e.equal))
                                : Ii(e)
                                ? (i = Cn(e.lte))
                                : Wi(e)
                                ? (i = Cn(e.lt))
                                : Ui(e)
                                ? (i = Cn(e.gt))
                                : Hi(e)
                                ? (i = Cn(e.gte))
                                : Bi(e)
                                ? (i = e.range[0])
                                : Ji(e) &&
                                  (i = (null !== (n = e.oneOf) && void 0 !== n
                                      ? n
                                      : e.in)[0]),
                                i &&
                                    (ki(i)
                                        ? (t[e.field] = 'date')
                                        : (0, o.hj)(i)
                                        ? (t[e.field] = 'number')
                                        : (0, o.HD)(i) &&
                                          (t[e.field] = 'string')),
                                e.timeUnit && (t[e.field] = 'date');
                        }
                    }),
                    t
                );
            }
            class ed extends Oc {
                constructor(e, t) {
                    super(e), (this._parse = t);
                }
                clone() {
                    return new ed(null, v(this._parse));
                }
                hash() {
                    return `Parse ${w(this._parse)}`;
                }
                static makeExplicit(e, t, n) {
                    var i;
                    let r = {};
                    const o = t.data;
                    return (
                        !cc(o) &&
                            (null === (i = null == o ? void 0 : o.format) ||
                            void 0 === i
                                ? void 0
                                : i.parse) &&
                            (r = o.format.parse),
                        this.makeWithAncestors(e, r, {}, n)
                    );
                }
                static makeWithAncestors(e, t, n, i) {
                    for (const e of M(n)) {
                        const t = i.getWithExplicit(e);
                        void 0 !== t.value &&
                            (t.explicit ||
                            t.value === n[e] ||
                            'derived' === t.value ||
                            'flatten' === n[e]
                                ? delete n[e]
                                : $i(ti(e, n[e], t.value)));
                    }
                    for (const e of M(t)) {
                        const n = i.get(e);
                        void 0 !== n &&
                            (n === t[e] ? delete t[e] : $i(ti(e, t[e], n)));
                    }
                    const r = new Zl(t, n);
                    i.copyAll(r);
                    const o = {};
                    for (const e of M(r.combine())) {
                        const t = r.get(e);
                        null !== t && (o[e] = t);
                    }
                    return 0 === M(o).length || i.parseNothing
                        ? null
                        : new ed(e, o);
                }
                get parse() {
                    return this._parse;
                }
                merge(e) {
                    (this._parse = Object.assign(
                        Object.assign({}, this._parse),
                        e.parse
                    )),
                        e.remove();
                }
                assembleFormatParse() {
                    const e = {};
                    for (const t of M(this._parse)) {
                        const n = this._parse[t];
                        1 === Y(t) && (e[t] = n);
                    }
                    return e;
                }
                producedFields() {
                    return new Set(M(this._parse));
                }
                dependentFields() {
                    return new Set(M(this._parse));
                }
                assembleTransforms(e = !1) {
                    return M(this._parse)
                        .filter(t => !e || Y(t) > 1)
                        .map(e => {
                            const t = (function(e, t) {
                                const n = B(e);
                                return 'number' === t
                                    ? `toNumber(${n})`
                                    : 'boolean' === t
                                    ? `toBoolean(${n})`
                                    : 'string' === t
                                    ? `toString(${n})`
                                    : 'date' === t
                                    ? `toDate(${n})`
                                    : 'flatten' === t
                                    ? n
                                    : t.startsWith('date:')
                                    ? `timeParse(${n},'${Qf(
                                          t.slice(5, t.length)
                                      )}')`
                                    : t.startsWith('utc:')
                                    ? `utcParse(${n},'${Qf(
                                          t.slice(4, t.length)
                                      )}')`
                                    : ($i(`Unrecognized parse "${t}".`), null);
                            })(e, this._parse[e]);
                            return t
                                ? { type: 'formula', expr: t, as: K(e) }
                                : null;
                        })
                        .filter(e => null !== e);
                }
            }
            class td extends Oc {
                clone() {
                    return new td(null);
                }
                constructor(e) {
                    super(e);
                }
                dependentFields() {
                    return new Set();
                }
                producedFields() {
                    return new Set([xa]);
                }
                hash() {
                    return 'Identifier';
                }
                assemble() {
                    return { type: 'identifier', as: xa };
                }
            }
            class nd extends Oc {
                constructor(e, t) {
                    super(e), (this.params = t);
                }
                clone() {
                    return new nd(null, this.params);
                }
                dependentFields() {
                    return new Set();
                }
                producedFields() {}
                hash() {
                    return `Graticule ${w(this.params)}`;
                }
                assemble() {
                    return Object.assign(
                        { type: 'graticule' },
                        !0 === this.params ? {} : this.params
                    );
                }
            }
            class id extends Oc {
                constructor(e, t) {
                    super(e), (this.params = t);
                }
                clone() {
                    return new id(null, this.params);
                }
                dependentFields() {
                    return new Set();
                }
                producedFields() {
                    var e;
                    return new Set([
                        null !== (e = this.params.as) && void 0 !== e
                            ? e
                            : 'data',
                    ]);
                }
                hash() {
                    return `Hash ${w(this.params)}`;
                }
                assemble() {
                    return Object.assign({ type: 'sequence' }, this.params);
                }
            }
            class rd extends Oc {
                constructor(e) {
                    let t;
                    if (
                        (super(null),
                        null != e || (e = { name: 'source' }),
                        cc(e) ||
                            (t = e.format
                                ? Object.assign({}, x(e.format, ['parse']))
                                : {}),
                        ac(e))
                    )
                        this._data = { values: e.values };
                    else if (sc(e)) {
                        if (((this._data = { url: e.url }), !t.type)) {
                            let n = /(?:\.([^.]+))?$/.exec(e.url)[1];
                            k(['json', 'csv', 'tsv', 'dsv', 'topojson'], n) ||
                                (n = 'json'),
                                (t.type = n);
                        }
                    } else
                        fc(e)
                            ? (this._data = { values: [{ type: 'Sphere' }] })
                            : (lc(e) || cc(e)) && (this._data = {});
                    (this._generator = cc(e)),
                        e.name && (this._name = e.name),
                        t && !A(t) && (this._data.format = t);
                }
                dependentFields() {
                    return new Set();
                }
                producedFields() {}
                get data() {
                    return this._data;
                }
                hasName() {
                    return !!this._name;
                }
                get isGenerator() {
                    return this._generator;
                }
                get dataName() {
                    return this._name;
                }
                set dataName(e) {
                    this._name = e;
                }
                set parent(e) {
                    throw new Error('Source nodes have to be roots.');
                }
                remove() {
                    throw new Error(
                        'Source nodes are roots and cannot be removed.'
                    );
                }
                hash() {
                    throw new Error('Cannot hash sources');
                }
                assemble() {
                    return Object.assign(
                        Object.assign({ name: this._name }, this._data),
                        { transform: [] }
                    );
                }
            }
            var od,
                sd = function(e, t, n, i, r) {
                    if ('m' === i)
                        throw new TypeError('Private method is not writable');
                    if ('a' === i && !r)
                        throw new TypeError(
                            'Private accessor was defined without a setter'
                        );
                    if ('function' == typeof t ? e !== t || !r : !t.has(e))
                        throw new TypeError(
                            'Cannot write private member to an object whose class did not declare it'
                        );
                    return (
                        'a' === i
                            ? r.call(e, n)
                            : r
                            ? (r.value = n)
                            : t.set(e, n),
                        n
                    );
                };
            function ad(e) {
                return e instanceof rd || e instanceof nd || e instanceof id;
            }
            class ld {
                constructor() {
                    od.set(this, void 0), sd(this, od, !1, 'f');
                }
                setModified() {
                    sd(this, od, !0, 'f');
                }
                get modifiedFlag() {
                    return (function(e, t, n, i) {
                        if ('a' === n && !i)
                            throw new TypeError(
                                'Private accessor was defined without a getter'
                            );
                        if ('function' == typeof t ? e !== t || !i : !t.has(e))
                            throw new TypeError(
                                'Cannot read private member from an object whose class did not declare it'
                            );
                        return 'm' === n
                            ? i
                            : 'a' === n
                            ? i.call(e)
                            : i
                            ? i.value
                            : t.get(e);
                    })(this, od, 'f');
                }
            }
            od = new WeakMap();
            class cd extends ld {
                getNodeDepths(e, t, n) {
                    n.set(e, t);
                    for (const i of e.children) this.getNodeDepths(i, t + 1, n);
                    return n;
                }
                optimize(e) {
                    const t = [
                        ...this.getNodeDepths(e, 0, new Map()).entries(),
                    ].sort((e, t) => t[1] - e[1]);
                    for (const e of t) this.run(e[0]);
                    return this.modifiedFlag;
                }
            }
            class ud extends ld {
                optimize(e) {
                    this.run(e);
                    for (const t of e.children) this.optimize(t);
                    return this.modifiedFlag;
                }
            }
            class fd extends ud {
                mergeNodes(e, t) {
                    const n = t.shift();
                    for (const i of t)
                        e.removeChild(i), (i.parent = n), i.remove();
                }
                run(e) {
                    const t = e.children.map(e => e.hash()),
                        n = {};
                    for (let i = 0; i < t.length; i++)
                        void 0 === n[t[i]]
                            ? (n[t[i]] = [e.children[i]])
                            : n[t[i]].push(e.children[i]);
                    for (const t of M(n))
                        n[t].length > 1 &&
                            (this.setModified(), this.mergeNodes(e, n[t]));
                }
            }
            class dd extends ud {
                constructor(e) {
                    super(), (this.requiresSelectionId = e && Cu(e));
                }
                run(e) {
                    e instanceof td &&
                        ((this.requiresSelectionId &&
                            (ad(e.parent) ||
                                e.parent instanceof Kf ||
                                e.parent instanceof ed)) ||
                            (this.setModified(), e.remove()));
                }
            }
            class pd extends ld {
                optimize(e) {
                    return this.run(e, new Set()), this.modifiedFlag;
                }
                run(e, t) {
                    let n = new Set();
                    e instanceof wc &&
                        ((n = e.producedFields()),
                        E(n, t) &&
                            (this.setModified(),
                            e.removeFormulas(t),
                            0 === e.producedFields.length && e.remove()));
                    for (const i of e.children)
                        this.run(i, new Set([...t, ...n]));
                }
            }
            class gd extends ud {
                constructor() {
                    super();
                }
                run(e) {
                    e instanceof xc &&
                        !e.isRequired() &&
                        (this.setModified(), e.remove());
                }
            }
            class md extends cd {
                run(e) {
                    if (!(ad(e) || e.numChildren() > 1))
                        for (const t of e.children)
                            if (t instanceof ed)
                                if (e instanceof ed)
                                    this.setModified(), e.merge(t);
                                else {
                                    if (
                                        T(
                                            e.producedFields(),
                                            t.dependentFields()
                                        )
                                    )
                                        continue;
                                    this.setModified(), t.swapWithParent();
                                }
                }
            }
            class hd extends cd {
                run(e) {
                    const t = [...e.children],
                        n = e.children.filter(e => e instanceof ed);
                    if (e.numChildren() > 1 && n.length >= 1) {
                        const i = {},
                            r = new Set();
                        for (const e of n) {
                            const t = e.parse;
                            for (const e of M(t))
                                e in i
                                    ? i[e] !== t[e] && r.add(e)
                                    : (i[e] = t[e]);
                        }
                        for (const e of r) delete i[e];
                        if (!A(i)) {
                            this.setModified();
                            const n = new ed(e, i);
                            for (const r of t) {
                                if (r instanceof ed)
                                    for (const e of M(i)) delete r.parse[e];
                                e.removeChild(r),
                                    (r.parent = n),
                                    r instanceof ed &&
                                        0 === M(r.parse).length &&
                                        r.remove();
                            }
                        }
                    }
                }
            }
            class bd extends cd {
                run(e) {
                    e instanceof xc ||
                        e.numChildren() > 0 ||
                        e instanceof Yf ||
                        e instanceof rd ||
                        (this.setModified(), e.remove());
                }
            }
            class vd extends cd {
                run(e) {
                    const t = e.children.filter(e => e instanceof wc),
                        n = t.pop();
                    for (const e of t) this.setModified(), n.merge(e);
                }
            }
            class yd extends cd {
                run(e) {
                    const t = e.children.filter(e => e instanceof Kf),
                        n = {};
                    for (const e of t) {
                        const t = w(e.groupBy);
                        t in n || (n[t] = []), n[t].push(e);
                    }
                    for (const t of M(n)) {
                        const i = n[t];
                        if (i.length > 1) {
                            const t = i.pop();
                            for (const n of i)
                                t.merge(n) &&
                                    (e.removeChild(n),
                                    (n.parent = t),
                                    n.remove(),
                                    this.setModified());
                        }
                    }
                }
            }
            class Od extends cd {
                constructor(e) {
                    super(), (this.model = e);
                }
                run(e) {
                    const t = !(
                            ad(e) ||
                            e instanceof Lu ||
                            e instanceof ed ||
                            e instanceof td
                        ),
                        n = [],
                        i = [];
                    for (const r of e.children)
                        r instanceof Vf &&
                            (t && !T(e.producedFields(), r.dependentFields())
                                ? n.push(r)
                                : i.push(r));
                    if (n.length > 0) {
                        const t = n.pop();
                        for (const e of n)
                            t.merge(
                                e,
                                this.model.renameSignal.bind(this.model)
                            );
                        this.setModified(),
                            e instanceof Vf
                                ? e.merge(
                                      t,
                                      this.model.renameSignal.bind(this.model)
                                  )
                                : t.swapWithParent();
                    }
                    if (i.length > 1) {
                        const e = i.pop();
                        for (const t of i)
                            e.merge(
                                t,
                                this.model.renameSignal.bind(this.model)
                            );
                        this.setModified();
                    }
                }
            }
            class xd extends cd {
                run(e) {
                    const t = [...e.children];
                    if (!S(t, e => e instanceof xc) || e.numChildren() <= 1)
                        return;
                    const n = [];
                    let i;
                    for (const r of t)
                        if (r instanceof xc) {
                            let t = r;
                            for (; 1 === t.numChildren(); ) {
                                const [e] = t.children;
                                if (!(e instanceof xc)) break;
                                t = e;
                            }
                            n.push(...t.children),
                                i
                                    ? (e.removeChild(r),
                                      (r.parent = i.parent),
                                      i.parent.removeChild(i),
                                      (i.parent = t),
                                      this.setModified())
                                    : (i = t);
                        } else n.push(r);
                    if (n.length) {
                        this.setModified();
                        for (const e of n)
                            e.parent.removeChild(e), (e.parent = i);
                    }
                }
            }
            class jd extends Oc {
                constructor(e, t) {
                    super(e), (this.transform = t);
                }
                clone() {
                    return new jd(null, v(this.transform));
                }
                addDimensions(e) {
                    this.transform.groupby = z(
                        this.transform.groupby.concat(e),
                        e => e
                    );
                }
                dependentFields() {
                    const e = new Set();
                    return (
                        this.transform.groupby &&
                            this.transform.groupby.forEach(e.add, e),
                        this.transform.joinaggregate
                            .map(e => e.field)
                            .filter(e => void 0 !== e)
                            .forEach(e.add, e),
                        e
                    );
                }
                producedFields() {
                    return new Set(
                        this.transform.joinaggregate.map(this.getDefaultName)
                    );
                }
                getDefaultName(e) {
                    var t;
                    return null !== (t = e.as) && void 0 !== t ? t : is(e);
                }
                hash() {
                    return `JoinAggregateTransform ${w(this.transform)}`;
                }
                assemble() {
                    const e = [],
                        t = [],
                        n = [];
                    for (const i of this.transform.joinaggregate)
                        t.push(i.op),
                            n.push(this.getDefaultName(i)),
                            e.push(void 0 === i.field ? null : i.field);
                    const i = this.transform.groupby;
                    return Object.assign(
                        { type: 'joinaggregate', as: n, ops: t, fields: e },
                        void 0 !== i ? { groupby: i } : {}
                    );
                }
            }
            class wd extends Oc {
                constructor(e, t) {
                    super(e), (this._stack = t);
                }
                clone() {
                    return new wd(null, v(this._stack));
                }
                static makeFromTransform(e, t) {
                    const {
                            stack: n,
                            groupby: i,
                            as: r,
                            offset: s = 'zero',
                        } = t,
                        a = [],
                        l = [];
                    if (void 0 !== t.sort)
                        for (const e of t.sort)
                            a.push(e.field), l.push(Q(e.order, 'ascending'));
                    const c = { field: a, order: l };
                    let u;
                    return (
                        (u = (function(e) {
                            return (
                                (0, o.kJ)(e) &&
                                e.every(e => (0, o.HD)(e)) &&
                                e.length > 1
                            );
                        })(r)
                            ? r
                            : (0, o.HD)(r)
                            ? [r, `${r}_end`]
                            : [`${t.stack}_start`, `${t.stack}_end`]),
                        new wd(e, {
                            dimensionFieldDefs: [],
                            stackField: n,
                            groupby: i,
                            offset: s,
                            sort: c,
                            facetby: [],
                            as: u,
                        })
                    );
                }
                static makeFromEncoding(e, t) {
                    const n = t.stack,
                        { encoding: i } = t;
                    if (!n) return null;
                    const {
                            groupbyChannels: r,
                            fieldChannel: s,
                            offset: a,
                            impute: l,
                        } = n,
                        c = r.map(e => ds(i[e])).filter(e => !!e),
                        u = (function(e) {
                            return e.stack.stackBy.reduce((e, t) => {
                                const n = is(t.fieldDef);
                                return n && e.push(n), e;
                            }, []);
                        })(t),
                        f = t.encoding.order;
                    let d;
                    return (
                        (d =
                            (0, o.kJ)(f) || Ho(f)
                                ? In(f)
                                : u.reduce(
                                      (e, t) => (
                                          e.field.push(t),
                                          e.order.push(
                                              'y' === s
                                                  ? 'descending'
                                                  : 'ascending'
                                          ),
                                          e
                                      ),
                                      { field: [], order: [] }
                                  )),
                        new wd(e, {
                            dimensionFieldDefs: c,
                            stackField: t.vgField(s),
                            facetby: [],
                            stackby: u,
                            sort: d,
                            offset: a,
                            impute: l,
                            as: [
                                t.vgField(s, { suffix: 'start', forAs: !0 }),
                                t.vgField(s, { suffix: 'end', forAs: !0 }),
                            ],
                        })
                    );
                }
                get stack() {
                    return this._stack;
                }
                addDimensions(e) {
                    this._stack.facetby.push(...e);
                }
                dependentFields() {
                    const e = new Set();
                    return (
                        e.add(this._stack.stackField),
                        this.getGroupbyFields().forEach(e.add, e),
                        this._stack.facetby.forEach(e.add, e),
                        this._stack.sort.field.forEach(e.add, e),
                        e
                    );
                }
                producedFields() {
                    return new Set(this._stack.as);
                }
                hash() {
                    return `Stack ${w(this._stack)}`;
                }
                getGroupbyFields() {
                    const {
                        dimensionFieldDefs: e,
                        impute: t,
                        groupby: n,
                    } = this._stack;
                    return e.length > 0
                        ? e
                              .map(e =>
                                  e.bin
                                      ? t
                                          ? [is(e, { binSuffix: 'mid' })]
                                          : [
                                                is(e, {}),
                                                is(e, { binSuffix: 'end' }),
                                            ]
                                      : [is(e)]
                              )
                              .flat()
                        : null != n
                        ? n
                        : [];
                }
                assemble() {
                    const e = [],
                        {
                            facetby: t,
                            dimensionFieldDefs: n,
                            stackField: i,
                            stackby: r,
                            sort: o,
                            offset: s,
                            impute: a,
                            as: l,
                        } = this._stack;
                    if (a)
                        for (const o of n) {
                            const { bandPosition: n = 0.5, bin: s } = o;
                            if (s) {
                                const t = is(o, { expr: 'datum' }),
                                    i = is(o, {
                                        expr: 'datum',
                                        binSuffix: 'end',
                                    });
                                e.push({
                                    type: 'formula',
                                    expr: `${n}*${t}+${1 - n}*${i}`,
                                    as: is(o, { binSuffix: 'mid', forAs: !0 }),
                                });
                            }
                            e.push({
                                type: 'impute',
                                field: i,
                                groupby: [...r, ...t],
                                key: is(o, { binSuffix: 'mid' }),
                                method: 'value',
                                value: 0,
                            });
                        }
                    return (
                        e.push({
                            type: 'stack',
                            groupby: [...this.getGroupbyFields(), ...t],
                            field: i,
                            sort: o,
                            as: l,
                            offset: s,
                        }),
                        e
                    );
                }
            }
            class $d extends Oc {
                constructor(e, t) {
                    super(e), (this.transform = t);
                }
                clone() {
                    return new $d(null, v(this.transform));
                }
                addDimensions(e) {
                    this.transform.groupby = z(
                        this.transform.groupby.concat(e),
                        e => e
                    );
                }
                dependentFields() {
                    var e, t;
                    const n = new Set();
                    return (
                        (null !== (e = this.transform.groupby) && void 0 !== e
                            ? e
                            : []
                        ).forEach(n.add, n),
                        (null !== (t = this.transform.sort) && void 0 !== t
                            ? t
                            : []
                        ).forEach(e => n.add(e.field)),
                        this.transform.window
                            .map(e => e.field)
                            .filter(e => void 0 !== e)
                            .forEach(n.add, n),
                        n
                    );
                }
                producedFields() {
                    return new Set(
                        this.transform.window.map(this.getDefaultName)
                    );
                }
                getDefaultName(e) {
                    var t;
                    return null !== (t = e.as) && void 0 !== t ? t : is(e);
                }
                hash() {
                    return `WindowTransform ${w(this.transform)}`;
                }
                assemble() {
                    var e;
                    const t = [],
                        n = [],
                        i = [],
                        r = [];
                    for (const e of this.transform.window)
                        n.push(e.op),
                            i.push(this.getDefaultName(e)),
                            r.push(void 0 === e.param ? null : e.param),
                            t.push(void 0 === e.field ? null : e.field);
                    const o = this.transform.frame,
                        s = this.transform.groupby;
                    if (
                        o &&
                        null === o[0] &&
                        null === o[1] &&
                        n.every(e => cn(e))
                    )
                        return Object.assign(
                            { type: 'joinaggregate', as: i, ops: n, fields: t },
                            void 0 !== s ? { groupby: s } : {}
                        );
                    const a = [],
                        l = [];
                    if (void 0 !== this.transform.sort)
                        for (const t of this.transform.sort)
                            a.push(t.field),
                                l.push(
                                    null !== (e = t.order) && void 0 !== e
                                        ? e
                                        : 'ascending'
                                );
                    const c = { field: a, order: l },
                        u = this.transform.ignorePeers;
                    return Object.assign(
                        Object.assign(
                            Object.assign(
                                {
                                    type: 'window',
                                    params: r,
                                    as: i,
                                    ops: n,
                                    fields: t,
                                    sort: c,
                                },
                                void 0 !== u ? { ignorePeers: u } : {}
                            ),
                            void 0 !== s ? { groupby: s } : {}
                        ),
                        void 0 !== o ? { frame: o } : {}
                    );
                }
            }
            function kd(e) {
                if (e instanceof Yf)
                    if (1 !== e.numChildren() || e.children[0] instanceof xc) {
                        const n = e.model.component.data.main;
                        Sd(n);
                        const i =
                                ((t = e),
                                function e(n) {
                                    if (!(n instanceof Yf)) {
                                        const i = n.clone();
                                        if (i instanceof xc) {
                                            const e = Dd + i.getSource();
                                            i.setSource(e),
                                                (t.model.component.data.outputNodes[
                                                    e
                                                ] = i);
                                        } else
                                            (i instanceof Kf ||
                                                i instanceof wd ||
                                                i instanceof $d ||
                                                i instanceof jd) &&
                                                i.addDimensions(t.fields);
                                        for (const t of n.children.flatMap(e))
                                            t.parent = i;
                                        return [i];
                                    }
                                    return n.children.flatMap(e);
                                }),
                            r = e.children.map(i).flat();
                        for (const e of r) e.parent = n;
                    } else {
                        const t = e.children[0];
                        (t instanceof Kf ||
                            t instanceof wd ||
                            t instanceof $d ||
                            t instanceof jd) &&
                            t.addDimensions(e.fields),
                            t.swapWithParent(),
                            kd(e);
                    }
                else e.children.map(kd);
                var t;
            }
            function Sd(e) {
                if (
                    e instanceof xc &&
                    e.type === pc.Main &&
                    1 === e.numChildren()
                ) {
                    const t = e.children[0];
                    t instanceof Yf || (t.swapWithParent(), Sd(e));
                }
            }
            const Dd = 'scale_';
            function Pd(e) {
                for (const t of e) {
                    for (const e of t.children) if (e.parent !== t) return !1;
                    if (!Pd(t.children)) return !1;
                }
                return !0;
            }
            function Fd(e, t) {
                let n = !1;
                for (const i of t) n = e.optimize(i) || n;
                return n;
            }
            function zd(e, t, n) {
                let i = e.sources,
                    r = !1;
                return (
                    (r = Fd(new gd(), i) || r),
                    (r = Fd(new dd(t), i) || r),
                    (i = i.filter(e => e.numChildren() > 0)),
                    (r = Fd(new bd(), i) || r),
                    (i = i.filter(e => e.numChildren() > 0)),
                    n ||
                        ((r = Fd(new md(), i) || r),
                        (r = Fd(new Od(t), i) || r),
                        (r = Fd(new pd(), i) || r),
                        (r = Fd(new hd(), i) || r),
                        (r = Fd(new yd(), i) || r),
                        (r = Fd(new vd(), i) || r),
                        (r = Fd(new fd(), i) || r),
                        (r = Fd(new xd(), i) || r)),
                    (e.sources = i),
                    r
                );
            }
            class _d {
                constructor(e) {
                    Object.defineProperty(this, 'signal', {
                        enumerable: !0,
                        get: e,
                    });
                }
                static fromName(e, t) {
                    return new _d(() => e(t));
                }
            }
            function Cd(e) {
                fp(e)
                    ? (function(e) {
                          const t = e.component.scales;
                          for (const n of M(t)) {
                              const i = Ed(e, n);
                              if (
                                  (t[n].setWithExplicit('domains', i),
                                  Md(e, n),
                                  e.component.data.isFaceted)
                              ) {
                                  let t = e;
                                  for (; !dp(t) && t.parent; ) t = t.parent;
                                  if ('shared' === t.component.resolve.scale[n])
                                      for (const e of i.value)
                                          Sn(e) &&
                                              (e.data =
                                                  Dd + e.data.replace(Dd, ''));
                              }
                          }
                      })(e)
                    : (function(e) {
                          for (const t of e.children) Cd(t);
                          const t = e.component.scales;
                          for (const n of M(t)) {
                              let i,
                                  r = null;
                              for (const t of e.children) {
                                  const e = t.component.scales[n];
                                  if (e) {
                                      i =
                                          void 0 === i
                                              ? e.getWithExplicit('domains')
                                              : rc(
                                                    i,
                                                    e.getWithExplicit(
                                                        'domains'
                                                    ),
                                                    'domains',
                                                    'scale',
                                                    qd
                                                );
                                      const t = e.get('selectionExtent');
                                      r &&
                                          t &&
                                          r.param !== t.param &&
                                          $i(
                                              'The same selection must be used to override scale domains in a layered view.'
                                          ),
                                          (r = t);
                                  }
                              }
                              t[n].setWithExplicit('domains', i),
                                  r && t[n].set('selectionExtent', r, !0);
                          }
                      })(e);
            }
            function Ed(e, t) {
                const n = e.getScaleComponent(t).get('type'),
                    { encoding: i } = e,
                    r = (function(e, t, n, i) {
                        if ('unaggregated' === e) {
                            const { valid: e, reason: i } = Ld(t, n);
                            if (!e) return void $i(i);
                        } else if (void 0 === e && i.useUnaggregatedDomain) {
                            const { valid: e } = Ld(t, n);
                            if (e) return 'unaggregated';
                        }
                        return e;
                    })(e.scaleDomain(t), e.typedFieldDef(t), n, e.config.scale);
                return (
                    r !== e.scaleDomain(t) &&
                        (e.specifiedScales[t] = Object.assign(
                            Object.assign({}, e.specifiedScales[t]),
                            { domain: r }
                        )),
                    'x' === t && ps(i.x2)
                        ? ps(i.x)
                            ? rc(
                                  Td(n, r, e, 'x'),
                                  Td(n, r, e, 'x2'),
                                  'domain',
                                  'scale',
                                  qd
                              )
                            : Td(n, r, e, 'x2')
                        : 'y' === t && ps(i.y2)
                        ? ps(i.y)
                            ? rc(
                                  Td(n, r, e, 'y'),
                                  Td(n, r, e, 'y2'),
                                  'domain',
                                  'scale',
                                  qd
                              )
                            : Td(n, r, e, 'y2')
                        : Td(n, r, e, t)
                );
            }
            function Nd(e, t, n) {
                var i;
                const r =
                    null === (i = qi(n)) || void 0 === i ? void 0 : i.unit;
                return 'temporal' === t || r
                    ? (function(e, t, n) {
                          return e.map(e => ({
                              signal: `{data: ${Os(e, {
                                  timeUnit: n,
                                  type: t,
                              })}}`,
                          }));
                      })(e, t, r)
                    : [e];
            }
            function Td(e, t, n, i) {
                const { encoding: r } = n,
                    s = ps(r[i]),
                    { type: a } = s,
                    l = s.timeUnit;
                if (
                    (function(e) {
                        return null == e ? void 0 : e.unionWith;
                    })(t)
                ) {
                    const r = Td(e, void 0, n, i);
                    return ec([...Nd(t.unionWith, a, l), ...r.value]);
                }
                if ($n(t)) return ec([t]);
                if (t && 'unaggregated' !== t && !kr(t)) return ec(Nd(t, a, l));
                const c = n.stack;
                if (c && i === c.fieldChannel) {
                    if ('normalize' === c.offset) return tc([[0, 1]]);
                    const e = n.requestDataName(pc.Main);
                    return tc([
                        { data: e, field: n.vgField(i, { suffix: 'start' }) },
                        { data: e, field: n.vgField(i, { suffix: 'end' }) },
                    ]);
                }
                const u =
                    Zt(i) && Ho(s)
                        ? (function(e, t, n) {
                              if (!xr(n)) return;
                              const i = e.fieldDef(t),
                                  r = i.sort;
                              if (_o(r))
                                  return {
                                      op: 'min',
                                      field: tf(i, t),
                                      order: 'ascending',
                                  };
                              const { stack: o } = e,
                                  s = o
                                      ? new Set([
                                            ...o.groupbyFields,
                                            ...o.stackBy.map(
                                                e => e.fieldDef.field
                                            ),
                                        ])
                                      : void 0;
                              if (zo(r)) return Ad(r, o && !s.has(r.field));
                              if (Fo(r)) {
                                  const { encoding: t, order: n } = r,
                                      i = e.fieldDef(t),
                                      { aggregate: a, field: l } = i,
                                      c = o && !s.has(l);
                                  if (an(a) || ln(a))
                                      return Ad({ field: is(i), order: n }, c);
                                  if (cn(a) || !a)
                                      return Ad(
                                          { op: a, field: l, order: n },
                                          c
                                      );
                              } else {
                                  if ('descending' === r)
                                      return {
                                          op: 'min',
                                          field: e.vgField(t),
                                          order: 'descending',
                                      };
                                  if (k(['ascending', void 0], r)) return !0;
                              }
                          })(n, i, e)
                        : void 0;
                if (Jo(s)) return tc(Nd([s.datum], a, l));
                const f = s;
                if ('unaggregated' === t) {
                    const e = n.requestDataName(pc.Main),
                        { field: t } = s;
                    return tc([
                        { data: e, field: is({ field: t, aggregate: 'min' }) },
                        { data: e, field: is({ field: t, aggregate: 'max' }) },
                    ]);
                }
                if (mn(f.bin)) {
                    if (xr(e))
                        return tc(
                            'bin-ordinal' === e
                                ? []
                                : [
                                      {
                                          data: R(u)
                                              ? n.requestDataName(pc.Main)
                                              : n.requestDataName(pc.Raw),
                                          field: n.vgField(
                                              i,
                                              js(f, i)
                                                  ? { binSuffix: 'range' }
                                                  : {}
                                          ),
                                          sort:
                                              !0 !== u && (0, o.Kn)(u)
                                                  ? u
                                                  : {
                                                        field: n.vgField(i, {}),
                                                        op: 'min',
                                                    },
                                      },
                                  ]
                        );
                    {
                        const { bin: e } = f;
                        if (mn(e)) {
                            const t = Gf(n, f.field, e);
                            return tc([
                                new _d(() => {
                                    const e = n.getSignalName(t);
                                    return `[${e}.start, ${e}.stop]`;
                                }),
                            ]);
                        }
                        return tc([
                            {
                                data: n.requestDataName(pc.Main),
                                field: n.vgField(i, {}),
                            },
                        ]);
                    }
                }
                if (
                    f.timeUnit &&
                    k(['time', 'utc'], e) &&
                    Ro(
                        f,
                        fp(n) ? n.encoding[dt(i)] : void 0,
                        n.markDef,
                        n.config
                    )
                ) {
                    const e = n.requestDataName(pc.Main);
                    return tc([
                        { data: e, field: n.vgField(i) },
                        { data: e, field: n.vgField(i, { suffix: 'end' }) },
                    ]);
                }
                return tc(
                    u
                        ? [
                              {
                                  data: R(u)
                                      ? n.requestDataName(pc.Main)
                                      : n.requestDataName(pc.Raw),
                                  field: n.vgField(i),
                                  sort: u,
                              },
                          ]
                        : [
                              {
                                  data: n.requestDataName(pc.Main),
                                  field: n.vgField(i),
                              },
                          ]
                );
            }
            function Ad(e, t) {
                const { op: n, field: i, order: r } = e;
                return Object.assign(
                    Object.assign(
                        { op: null != n ? n : t ? 'sum' : So },
                        i ? { field: X(i) } : {}
                    ),
                    r ? { order: r } : {}
                );
            }
            function Md(e, t) {
                var n;
                const i = e.component.scales[t],
                    r = e.specifiedScales[t].domain,
                    o =
                        null === (n = e.fieldDef(t)) || void 0 === n
                            ? void 0
                            : n.bin,
                    s = kr(r) && r,
                    a = bn(o) && vn(o.extent) && o.extent;
                (s || a) && i.set('selectionExtent', null != s ? s : a, !0);
            }
            function Ld(e, t) {
                const { aggregate: n, type: i } = e;
                return n
                    ? (0, o.HD)(n) && !pn.has(n)
                        ? { valid: !1, reason: gi(n) }
                        : 'quantitative' === i && 'log' === t
                        ? { valid: !1, reason: mi(e) }
                        : { valid: !0 }
                    : { valid: !1, reason: pi(e) };
            }
            function qd(e, t, n, i) {
                return (
                    e.explicit &&
                        t.explicit &&
                        $i(
                            (function(e, t, n, i) {
                                return `Conflicting ${t.toString()} property "${e.toString()}" (${j(
                                    n
                                )} and ${j(
                                    i
                                )}). Using the union of the two domains.`;
                            })(n, i, e.value, t.value)
                        ),
                    { explicit: e.explicit, value: [...e.value, ...t.value] }
                );
            }
            function Rd(e) {
                const t = z(
                        e.map(e => {
                            if (Sn(e)) {
                                const { sort: t } = e;
                                return (function(e, t) {
                                    var n = {};
                                    for (var i in e)
                                        Object.prototype.hasOwnProperty.call(
                                            e,
                                            i
                                        ) &&
                                            t.indexOf(i) < 0 &&
                                            (n[i] = e[i]);
                                    if (
                                        null != e &&
                                        'function' ==
                                            typeof Object.getOwnPropertySymbols
                                    ) {
                                        var r = 0;
                                        for (
                                            i = Object.getOwnPropertySymbols(e);
                                            r < i.length;
                                            r++
                                        )
                                            t.indexOf(i[r]) < 0 &&
                                                Object.prototype.propertyIsEnumerable.call(
                                                    e,
                                                    i[r]
                                                ) &&
                                                (n[i[r]] = e[i[r]]);
                                    }
                                    return n;
                                })(e, ['sort']);
                            }
                            return e;
                        }),
                        w
                    ),
                    n = z(
                        e
                            .map(e => {
                                if (Sn(e)) {
                                    const t = e.sort;
                                    return (
                                        void 0 === t ||
                                            R(t) ||
                                            ('op' in t &&
                                                'count' === t.op &&
                                                delete t.field,
                                            'ascending' === t.order &&
                                                delete t.order),
                                        t
                                    );
                                }
                            })
                            .filter(e => void 0 !== e),
                        w
                    );
                if (0 === t.length) return;
                if (1 === t.length) {
                    const t = e[0];
                    if (Sn(t) && n.length > 0) {
                        let e = n[0];
                        if (n.length > 1) $i(vi), (e = !0);
                        else if ((0, o.Kn)(e) && 'field' in e) {
                            const n = e.field;
                            t.field === n &&
                                (e = !e.order || { order: e.order });
                        }
                        return Object.assign(Object.assign({}, t), { sort: e });
                    }
                    return t;
                }
                const i = z(
                    n.map(e =>
                        R(e) || !('op' in e) || ((0, o.HD)(e.op) && e.op in sn)
                            ? e
                            : ($i(
                                  (function(e) {
                                      return `Dropping sort property ${j(
                                          e
                                      )} as unioned domains only support boolean or op "count", "min", and "max".`;
                                  })(e)
                              ),
                              !0)
                    ),
                    w
                );
                let r;
                1 === i.length
                    ? (r = i[0])
                    : i.length > 1 && ($i(vi), (r = !0));
                const s = z(
                    e.map(e => (Sn(e) ? e.data : null)),
                    e => e
                );
                return 1 === s.length && null !== s[0]
                    ? Object.assign(
                          { data: s[0], fields: t.map(e => e.field) },
                          r ? { sort: r } : {}
                      )
                    : Object.assign({ fields: t }, r ? { sort: r } : {});
            }
            function Wd(e) {
                if (Sn(e) && (0, o.HD)(e.field)) return e.field;
                if (
                    (function(e) {
                        return !(0, o.kJ)(e) && 'fields' in e && !('data' in e);
                    })(e)
                ) {
                    let t;
                    for (const n of e.fields)
                        if (Sn(n) && (0, o.HD)(n.field))
                            if (t) {
                                if (t !== n.field)
                                    return (
                                        $i(
                                            'Detected faceted independent scales that union domain of multiple fields from different data sources. We will use the first field. The result view size may be incorrect.'
                                        ),
                                        t
                                    );
                            } else t = n.field;
                    return (
                        $i(
                            'Detected faceted independent scales that union domain of the same fields from different source. We will assume that this is the same field from a different fork of the same data source. However, if this is not the case, the result view size may be incorrect.'
                        ),
                        t
                    );
                }
                if (
                    (function(e) {
                        return !(0, o.kJ)(e) && 'fields' in e && 'data' in e;
                    })(e)
                ) {
                    $i(
                        'Detected faceted independent scales that union domain of multiple fields from the same data source. We will use the first field. The result view size may be incorrect.'
                    );
                    const t = e.fields[0];
                    return (0, o.HD)(t) ? t : void 0;
                }
            }
            function Id(e, t) {
                const n = e.component.scales[t]
                    .get('domains')
                    .map(
                        t => (Sn(t) && (t.data = e.lookupDataSource(t.data)), t)
                    );
                return Rd(n);
            }
            function Ud(e) {
                return gp(e) || pp(e)
                    ? e.children.reduce((e, t) => e.concat(Ud(t)), Hd(e))
                    : Hd(e);
            }
            function Hd(e) {
                return M(e.component.scales).reduce((t, n) => {
                    const i = e.component.scales[n];
                    if (i.merged) return t;
                    const r = i.combine(),
                        {
                            name: s,
                            type: a,
                            selectionExtent: l,
                            domains: c,
                            range: u,
                            reverse: f,
                        } = r,
                        d = (function(e, t) {
                            var n = {};
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    t.indexOf(i) < 0 &&
                                    (n[i] = e[i]);
                            if (
                                null != e &&
                                'function' ==
                                    typeof Object.getOwnPropertySymbols
                            ) {
                                var r = 0;
                                for (
                                    i = Object.getOwnPropertySymbols(e);
                                    r < i.length;
                                    r++
                                )
                                    t.indexOf(i[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(
                                            e,
                                            i[r]
                                        ) &&
                                        (n[i[r]] = e[i[r]]);
                            }
                            return n;
                        })(r, [
                            'name',
                            'type',
                            'selectionExtent',
                            'domains',
                            'range',
                            'reverse',
                        ]),
                        p = (function(e, t, n, i) {
                            if (Tt(n)) {
                                if (kn(e))
                                    return { step: { signal: `${t}_step` } };
                            } else if ((0, o.Kn)(e) && Sn(e))
                                return Object.assign(Object.assign({}, e), {
                                    data: i.lookupDataSource(e.data),
                                });
                            return e;
                        })(r.range, s, n, e),
                        g = Id(e, n),
                        m = l
                            ? (function(e, t, n, i) {
                                  const r = Ru(e, t.param, t);
                                  return {
                                      signal:
                                          jr(n.get('type')) &&
                                          (0, o.kJ)(i) &&
                                          i[0] > i[1]
                                              ? `isValid(${r}) && reverse(${r})`
                                              : r,
                                  };
                              })(e, l, i, g)
                            : null;
                    return (
                        t.push(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                { name: s, type: a },
                                                g ? { domain: g } : {}
                                            ),
                                            m ? { domainRaw: m } : {}
                                        ),
                                        { range: p }
                                    ),
                                    void 0 !== f ? { reverse: f } : {}
                                ),
                                d
                            )
                        ),
                        t
                    );
                }, []);
            }
            class Bd extends Zl {
                constructor(e, t) {
                    super({}, { name: e }),
                        (this.merged = !1),
                        this.setWithExplicit('type', t);
                }
                domainDefinitelyIncludesZero() {
                    return (
                        !1 !== this.get('zero') ||
                        S(
                            this.get('domains'),
                            e =>
                                (0, o.kJ)(e) &&
                                2 === e.length &&
                                e[0] <= 0 &&
                                e[1] >= 0
                        )
                    );
                }
            }
            const Jd = ['range', 'scheme'];
            function Gd(e, t) {
                const n = e.fieldDef(t);
                if (null == n ? void 0 : n.bin) {
                    const { bin: i, field: r } = n,
                        s = pt(t),
                        a = e.getName(s);
                    if ((0, o.Kn)(i) && i.binned && void 0 !== i.step)
                        return new _d(() => {
                            const n = e.scaleName(t),
                                r = `(domain("${n}")[1] - domain("${n}")[0]) / ${i.step}`;
                            return `${e.getSignalName(a)} / (${r})`;
                        });
                    if (mn(i)) {
                        const t = Gf(e, r, i);
                        return new _d(() => {
                            const n = e.getSignalName(t),
                                i = `(${n}.stop - ${n}.start) / ${n}.step`;
                            return `${e.getSignalName(a)} / (${i})`;
                        });
                    }
                }
            }
            function Xd(e, t) {
                const n = t.specifiedScales[e],
                    { size: i } = t,
                    r = t.getScaleComponent(e).get('type');
                for (const i of Jd)
                    if (void 0 !== n[i]) {
                        const s = Tr(r, i),
                            a = Ar(e, i);
                        if (s)
                            if (a) $i(a);
                            else
                                switch (i) {
                                    case 'range': {
                                        const i = n.range;
                                        if ((0, o.kJ)(i)) {
                                            if (Tt(e))
                                                return ec(
                                                    i.map(e => {
                                                        if (
                                                            'width' === e ||
                                                            'height' === e
                                                        ) {
                                                            const n = t.getName(
                                                                    e
                                                                ),
                                                                i = t.getSignalName.bind(
                                                                    t
                                                                );
                                                            return _d.fromName(
                                                                i,
                                                                n
                                                            );
                                                        }
                                                        return e;
                                                    })
                                                );
                                        } else if ((0, o.Kn)(i))
                                            return ec({
                                                data: t.requestDataName(
                                                    pc.Main
                                                ),
                                                field: i.field,
                                                sort: {
                                                    op: 'min',
                                                    field: t.vgField(e),
                                                },
                                            });
                                        return ec(i);
                                    }
                                    case 'scheme':
                                        return ec(Vd(n[i]));
                                }
                        else $i(hi(r, i, e));
                    }
                const s = e === ue || 'xOffset' === e ? 'width' : 'height',
                    a = i[s];
                if (Ca(a))
                    if (Tt(e))
                        if (xr(r)) {
                            const n = Kd(a, t, e);
                            if (n) return ec({ step: n });
                        } else $i(bi(s));
                    else if (Rt(e)) {
                        const n = e === ge ? 'x' : 'y';
                        if ('band' === t.getScaleComponent(n).get('type')) {
                            const e = Yd(a, r);
                            if (e) return ec(e);
                        }
                    }
                const { rangeMin: l, rangeMax: c } = n,
                    u = (function(e, t) {
                        const { size: n, config: i, mark: r, encoding: s } = t,
                            a = t.getSignalName.bind(t),
                            { type: l } = ps(s[e]),
                            c = t.getScaleComponent(e).get('type'),
                            { domain: u, domainMid: f } = t.specifiedScales[e];
                        switch (e) {
                            case ue:
                            case fe: {
                                if (k(['point', 'band'], c)) {
                                    const r = Qd(e, n, i.view);
                                    if (Ca(r)) return { step: Kd(r, t, e) };
                                }
                                const r = pt(e),
                                    o = t.getName(r);
                                return e === fe && jr(c)
                                    ? [_d.fromName(a, o), 0]
                                    : [0, _d.fromName(a, o)];
                            }
                            case ge:
                            case me:
                                return (function(e, t, n) {
                                    const i = e === ge ? 'x' : 'y',
                                        r = t.getScaleComponent(i).get('type'),
                                        o = t.scaleName(i);
                                    if ('band' === r) {
                                        const e = Qd(i, t.size, t.config.view);
                                        if (Ca(e)) {
                                            const t = Yd(e, n);
                                            if (t) return t;
                                        }
                                        return [
                                            0,
                                            { signal: `bandwidth('${o}')` },
                                        ];
                                    }
                                    return y(
                                        `Cannot use ${e} scale if ${i} scale is not discrete.`
                                    );
                                })(e, t, c);
                            case Pe: {
                                const s = Zd(
                                        r,
                                        t.component.scales[e].get('zero'),
                                        i
                                    ),
                                    a = (function(e, t, n, i) {
                                        const r = {
                                            x: Gd(n, 'x'),
                                            y: Gd(n, 'y'),
                                        };
                                        switch (e) {
                                            case 'bar':
                                            case 'tick': {
                                                if (
                                                    void 0 !==
                                                    i.scale.maxBandSize
                                                )
                                                    return i.scale.maxBandSize;
                                                const e = tp(t, r, i.view);
                                                return (0, o.hj)(e)
                                                    ? e - 1
                                                    : new _d(
                                                          () =>
                                                              `${e.signal} - 1`
                                                      );
                                            }
                                            case 'line':
                                            case 'trail':
                                            case 'rule':
                                                return i.scale.maxStrokeWidth;
                                            case 'text':
                                                return i.scale.maxFontSize;
                                            case 'point':
                                            case 'square':
                                            case 'circle': {
                                                if (i.scale.maxSize)
                                                    return i.scale.maxSize;
                                                const e = tp(t, r, i.view);
                                                return (0, o.hj)(e)
                                                    ? Math.pow(ep * e, 2)
                                                    : new _d(
                                                          () =>
                                                              `pow(0.95 * ${e.signal}, 2)`
                                                      );
                                            }
                                        }
                                        throw new Error(li('size', e));
                                    })(r, n, t, i);
                                return $r(c)
                                    ? (function(e, t, n) {
                                          const i = () => {
                                              const i = An(t),
                                                  r = An(e),
                                                  o = `(${i} - ${r}) / (${n} - 1)`;
                                              return `sequence(${r}, ${i} + ${o}, ${o})`;
                                          };
                                          return $n(t)
                                              ? new _d(i)
                                              : { signal: i() };
                                      })(
                                          s,
                                          a,
                                          (function(e, t, n, i) {
                                              switch (e) {
                                                  case 'quantile':
                                                      return t.scale
                                                          .quantileCount;
                                                  case 'quantize':
                                                      return t.scale
                                                          .quantizeCount;
                                                  case 'threshold':
                                                      return void 0 !== n &&
                                                          (0, o.kJ)(n)
                                                          ? n.length + 1
                                                          : ($i(
                                                                (function(e) {
                                                                    return `Domain for ${e} is required for threshold scale.`;
                                                                })(i)
                                                            ),
                                                            3);
                                              }
                                          })(c, i, u, e)
                                      )
                                    : [s, a];
                            }
                            case ve:
                                return [0, 2 * Math.PI];
                            case Fe:
                                return [0, 360];
                            case he:
                                return [
                                    0,
                                    new _d(
                                        () =>
                                            `min(${t.getSignalName(
                                                'width'
                                            )},${t.getSignalName('height')})/2`
                                    ),
                                ];
                            case Ee:
                                return [
                                    i.scale.minStrokeWidth,
                                    i.scale.maxStrokeWidth,
                                ];
                            case Ne:
                                return [
                                    [1, 0],
                                    [4, 2],
                                    [2, 1],
                                    [1, 1],
                                    [1, 2, 4, 2],
                                ];
                            case De:
                                return 'symbol';
                            case $e:
                            case ke:
                            case Se:
                                return 'ordinal' === c
                                    ? 'nominal' === l
                                        ? 'category'
                                        : 'ordinal'
                                    : void 0 !== f
                                    ? 'diverging'
                                    : 'rect' === r || 'geoshape' === r
                                    ? 'heatmap'
                                    : 'ramp';
                            case ze:
                            case _e:
                            case Ce:
                                return [i.scale.minOpacity, i.scale.maxOpacity];
                        }
                    })(e, t);
                return (void 0 !== l || void 0 !== c) &&
                    Tr(r, 'rangeMin') &&
                    (0, o.kJ)(u) &&
                    2 === u.length
                    ? ec([null != l ? l : u[0], null != c ? c : u[1]])
                    : tc(u);
            }
            function Vd(e) {
                return (function(e) {
                    return !(0, o.HD)(e) && !!e.name;
                })(e)
                    ? Object.assign({ scheme: e.name }, x(e, ['name']))
                    : { scheme: e };
            }
            function Kd(e, t, n) {
                var i, r, s, a, l;
                const { encoding: c } = t,
                    u = t.getScaleComponent(n),
                    f = gt(n),
                    d = c[f];
                if (
                    'offset' ===
                        _a({
                            step: e,
                            offsetIsDiscrete: Vo(d) && tr(d.type),
                        }) &&
                    Ns(c, f)
                ) {
                    const n = t.getScaleComponent(f);
                    let c = `domain('${t.scaleName(f)}').length`;
                    'band' === n.get('type') &&
                        (c = `bandspace(${c}, ${
                            null !==
                                (r =
                                    null !== (i = n.get('paddingInner')) &&
                                    void 0 !== i
                                        ? i
                                        : n.get('padding')) && void 0 !== r
                                ? r
                                : 0
                        }, ${
                            null !==
                                (a =
                                    null !== (s = n.get('paddingOuter')) &&
                                    void 0 !== s
                                        ? s
                                        : n.get('padding')) && void 0 !== a
                                ? a
                                : 0
                        })`);
                    const d =
                        null !== (l = u.get('paddingInner')) && void 0 !== l
                            ? l
                            : u.get('padding');
                    return {
                        signal: `${e.step} * ${c} / (1-${((p = d),
                        $n(p) ? p.signal : (0, o.m8)(p))})`,
                    };
                }
                return e.step;
                var p;
            }
            function Yd(e, t) {
                if ('offset' === _a({ step: e, offsetIsDiscrete: xr(t) }))
                    return { step: e.step };
            }
            function Qd(e, t, n) {
                const i = e === ue ? 'width' : 'height';
                return t[i] || Ma(n, i);
            }
            function Zd(e, t, n) {
                if (t)
                    return $n(t)
                        ? { signal: `${t.signal} ? 0 : ${Zd(e, !1, n)}` }
                        : 0;
                switch (e) {
                    case 'bar':
                    case 'tick':
                        return n.scale.minBandSize;
                    case 'line':
                    case 'trail':
                    case 'rule':
                        return n.scale.minStrokeWidth;
                    case 'text':
                        return n.scale.minFontSize;
                    case 'point':
                    case 'square':
                    case 'circle':
                        return n.scale.minSize;
                }
                throw new Error(li('size', e));
            }
            const ep = 0.95;
            function tp(e, t, n) {
                const i = Ca(e.width) ? e.width.step : Aa(n, 'width'),
                    r = Ca(e.height) ? e.height.step : Aa(n, 'height');
                return t.x || t.y
                    ? new _d(
                          () =>
                              `min(${[
                                  t.x ? t.x.signal : i,
                                  t.y ? t.y.signal : r,
                              ].join(', ')})`
                      )
                    : Math.min(i, r);
            }
            function np(e, t) {
                fp(e)
                    ? (function(e, t) {
                          const n = e.component.scales,
                              {
                                  config: i,
                                  encoding: r,
                                  markDef: o,
                                  specifiedScales: s,
                              } = e;
                          for (const a of M(n)) {
                              const l = s[a],
                                  c = n[a],
                                  u = e.getScaleComponent(a),
                                  f = ps(r[a]),
                                  d = l[t],
                                  p = u.get('type'),
                                  g = u.get('padding'),
                                  m = u.get('paddingInner'),
                                  h = Tr(p, t),
                                  b = Ar(a, t);
                              if (
                                  (void 0 !== d &&
                                      (h ? b && $i(b) : $i(hi(p, t, a))),
                                  h && void 0 === b)
                              )
                                  if (void 0 !== d) {
                                      const e = f.timeUnit,
                                          n = f.type;
                                      switch (t) {
                                          case 'domainMax':
                                          case 'domainMin':
                                              ki(l[t]) || 'temporal' === n || e
                                                  ? c.set(
                                                        t,
                                                        {
                                                            signal: Os(l[t], {
                                                                type: n,
                                                                timeUnit: e,
                                                            }),
                                                        },
                                                        !0
                                                    )
                                                  : c.set(t, l[t], !0);
                                              break;
                                          default:
                                              c.copyKeyFromObject(t, l);
                                      }
                                  } else {
                                      const n =
                                          t in ip
                                              ? ip[t]({
                                                    model: e,
                                                    channel: a,
                                                    fieldOrDatumDef: f,
                                                    scaleType: p,
                                                    scalePadding: g,
                                                    scalePaddingInner: m,
                                                    domain: l.domain,
                                                    domainMin: l.domainMin,
                                                    domainMax: l.domainMax,
                                                    markDef: o,
                                                    config: i,
                                                    hasNestedOffsetScale: Ts(
                                                        r,
                                                        a
                                                    ),
                                                    hasSecondaryRangeChannel: !!r[
                                                        dt(a)
                                                    ],
                                                })
                                              : i.scale[t];
                                      void 0 !== n && c.set(t, n, !1);
                                  }
                          }
                      })(e, t)
                    : op(e, t);
            }
            const ip = {
                bins: ({ model: e, fieldOrDatumDef: t }) =>
                    Ho(t)
                        ? (function(e, t) {
                              const n = t.bin;
                              if (mn(n)) {
                                  const i = Gf(e, t.field, n);
                                  return new _d(() => e.getSignalName(i));
                              }
                              if (hn(n) && bn(n) && void 0 !== n.step)
                                  return { step: n.step };
                          })(e, t)
                        : void 0,
                interpolate: ({ channel: e, fieldOrDatumDef: t }) =>
                    (function(e, t) {
                        if (k([$e, ke, Se], e) && 'nominal' !== t) return 'hcl';
                    })(e, t.type),
                nice: ({
                    scaleType: e,
                    channel: t,
                    domain: n,
                    domainMin: i,
                    domainMax: r,
                    fieldOrDatumDef: s,
                }) =>
                    (function(e, t, n, i, r, s) {
                        var a;
                        if (
                            !(
                                (null === (a = ds(s)) || void 0 === a
                                    ? void 0
                                    : a.bin) ||
                                (0, o.kJ)(n) ||
                                null != r ||
                                null != i ||
                                k([ar, lr], e)
                            )
                        )
                            return !!Tt(t) || void 0;
                    })(e, t, n, i, r, s),
                padding: ({
                    channel: e,
                    scaleType: t,
                    fieldOrDatumDef: n,
                    markDef: i,
                    config: r,
                }) =>
                    (function(e, t, n, i, r, o) {
                        if (Tt(e)) {
                            if (wr(t)) {
                                if (void 0 !== n.continuousPadding)
                                    return n.continuousPadding;
                                const { type: t, orient: s } = r;
                                if (
                                    'bar' === t &&
                                    (!Ho(i) || (!i.bin && !i.timeUnit)) &&
                                    (('vertical' === s && 'x' === e) ||
                                        ('horizontal' === s && 'y' === e))
                                )
                                    return o.continuousBandSize;
                            }
                            if (t === cr) return n.pointPadding;
                        }
                    })(e, t, r.scale, n, i, r.bar),
                paddingInner: ({
                    scalePadding: e,
                    channel: t,
                    markDef: n,
                    scaleType: i,
                    config: r,
                    hasNestedOffsetScale: o,
                }) =>
                    (function(e, t, n, i, r, o = !1) {
                        if (void 0 === e) {
                            if (Tt(t)) {
                                const {
                                    bandPaddingInner: e,
                                    barBandPaddingInner: t,
                                    rectBandPaddingInner: i,
                                    bandWithNestedOffsetPaddingInner: s,
                                } = r;
                                return o ? s : Q(e, 'bar' === n ? t : i);
                            }
                            return Rt(t) && i === ur
                                ? r.offsetBandPaddingInner
                                : void 0;
                        }
                    })(e, t, n.type, i, r.scale, o),
                paddingOuter: ({
                    scalePadding: e,
                    channel: t,
                    scaleType: n,
                    scalePaddingInner: i,
                    config: r,
                    hasNestedOffsetScale: o,
                }) =>
                    (function(e, t, n, i, r, o = !1) {
                        if (void 0 === e)
                            if (Tt(t)) {
                                const {
                                    bandPaddingOuter: e,
                                    bandWithNestedOffsetPaddingOuter: t,
                                } = r;
                                if (o) return t;
                                if (n === ur)
                                    return Q(
                                        e,
                                        $n(i)
                                            ? { signal: `${i.signal}/2` }
                                            : i / 2
                                    );
                            } else if (Rt(t)) {
                                if (n === cr) return 0.5;
                                if (n === ur) return r.offsetBandPaddingOuter;
                            }
                    })(e, t, n, i, r.scale, o),
                reverse: ({
                    fieldOrDatumDef: e,
                    scaleType: t,
                    channel: n,
                    config: i,
                }) =>
                    (function(e, t, n, i) {
                        return 'x' === n && void 0 !== i.xReverse
                            ? jr(e) && 'descending' === t
                                ? $n(i.xReverse)
                                    ? { signal: `!${i.xReverse.signal}` }
                                    : !i.xReverse
                                : i.xReverse
                            : !(!jr(e) || 'descending' !== t) || void 0;
                    })(t, Ho(e) ? e.sort : void 0, n, i.scale),
                zero: ({
                    channel: e,
                    fieldOrDatumDef: t,
                    domain: n,
                    markDef: i,
                    scaleType: r,
                    config: s,
                    hasSecondaryRangeChannel: a,
                }) =>
                    (function(e, t, n, i, r, s, a) {
                        if (n && 'unaggregated' !== n && jr(r)) {
                            if ((0, o.kJ)(n)) {
                                const e = n[0],
                                    t = n[n.length - 1];
                                if (e <= 0 && t >= 0) return !0;
                            }
                            return !1;
                        }
                        if ('size' === e && 'quantitative' === t.type && !$r(r))
                            return !0;
                        if ((!Ho(t) || !t.bin) && k([...Nt, ...Mt], e)) {
                            const { orient: t, type: n } = i;
                            return (
                                (!k(['bar', 'area', 'line', 'trail'], n) ||
                                    !(
                                        ('horizontal' === t && 'y' === e) ||
                                        ('vertical' === t && 'x' === e)
                                    )) &&
                                (!(!k(['bar', 'area'], n) || a) ||
                                    (null == s ? void 0 : s.zero))
                            );
                        }
                        return !1;
                    })(e, t, n, i, r, s.scale, a),
            };
            function rp(e) {
                fp(e)
                    ? (function(e) {
                          const t = e.component.scales;
                          for (const n of Qt) {
                              const i = t[n];
                              if (!i) continue;
                              const r = Xd(n, e);
                              i.setWithExplicit('range', r);
                          }
                      })(e)
                    : op(e, 'range');
            }
            function op(e, t) {
                const n = e.component.scales;
                for (const n of e.children) 'range' === t ? rp(n) : np(n, t);
                for (const i of M(n)) {
                    let r;
                    for (const n of e.children) {
                        const e = n.component.scales[i];
                        e &&
                            (r = rc(
                                r,
                                e.getWithExplicit(t),
                                t,
                                'scale',
                                nc((e, n) =>
                                    'range' === t && e.step && n.step
                                        ? e.step - n.step
                                        : 0
                                )
                            ));
                    }
                    n[i].setWithExplicit(t, r);
                }
            }
            function sp(e, t, n, i, r = !1) {
                const o = (function(e, t, n, i) {
                        var r;
                        switch (t.type) {
                            case 'nominal':
                            case 'ordinal':
                                if (Xe(e) || 'discrete' === rn(e))
                                    return (
                                        'shape' === e &&
                                            'ordinal' === t.type &&
                                            $i(di(e, 'ordinal')),
                                        'ordinal'
                                    );
                                if (Tt(e) || Rt(e)) {
                                    if (
                                        k(
                                            ['rect', 'bar', 'image', 'rule'],
                                            n.type
                                        )
                                    )
                                        return 'band';
                                    if (i) return 'band';
                                } else if ('arc' === n.type && e in At)
                                    return 'band';
                                return oo(n[pt(e)]) ||
                                    (Zo(t) &&
                                        (null === (r = t.axis) || void 0 === r
                                            ? void 0
                                            : r.tickBand))
                                    ? 'band'
                                    : 'point';
                            case 'temporal':
                                return Xe(e)
                                    ? 'time'
                                    : 'discrete' === rn(e)
                                    ? ($i(di(e, 'temporal')), 'ordinal')
                                    : Ho(t) && t.timeUnit && qi(t.timeUnit).utc
                                    ? 'utc'
                                    : 'time';
                            case 'quantitative':
                                return Xe(e)
                                    ? Ho(t) && mn(t.bin)
                                        ? 'bin-ordinal'
                                        : 'linear'
                                    : 'discrete' === rn(e)
                                    ? ($i(di(e, 'quantitative')), 'ordinal')
                                    : 'linear';
                            case 'geojson':
                                return;
                        }
                        throw new Error(oi(t.type));
                    })(t, n, i, r),
                    { type: s } = e;
                return Zt(t)
                    ? void 0 !== s
                        ? (function(e, t, n = !1) {
                              if (!Zt(e)) return !1;
                              switch (e) {
                                  case ue:
                                  case fe:
                                  case ge:
                                  case me:
                                  case ve:
                                  case he:
                                      return (
                                          !!wr(t) ||
                                          'band' === t ||
                                          ('point' === t && !n)
                                      );
                                  case Pe:
                                  case Ee:
                                  case ze:
                                  case _e:
                                  case Ce:
                                  case Fe:
                                      return (
                                          wr(t) ||
                                          $r(t) ||
                                          k(['band', 'point', 'ordinal'], t)
                                      );
                                  case $e:
                                  case ke:
                                  case Se:
                                      return 'band' !== t;
                                  case Ne:
                                  case De:
                                      return 'ordinal' === t || $r(t);
                              }
                          })(t, s)
                            ? Ho(n) &&
                              ((a = s),
                              (l = n.type),
                              !(k([ir, or], l)
                                  ? void 0 === a || xr(a)
                                  : l === rr
                                  ? k([ar, lr, void 0], a)
                                  : l !== nr || br(a) || $r(a) || void 0 === a))
                                ? ($i(
                                      (function(e, t) {
                                          return `FieldDef does not work with "${e}" scale. We are using "${t}" scale instead.`;
                                      })(s, o)
                                  ),
                                  o)
                                : s
                            : ($i(
                                  (function(e, t, n) {
                                      return `Channel "${e}" does not work with "${t}" scale. We are using "${n}" scale instead.`;
                                  })(t, s, o)
                              ),
                              o)
                        : o
                    : null;
                var a, l;
            }
            function ap(e) {
                fp(e)
                    ? (e.component.scales = (function(e) {
                          const { encoding: t, mark: n, markDef: i } = e,
                              r = {};
                          for (const o of Qt) {
                              const s = ps(t[o]);
                              if (s && n === Yr && o === De && s.type === sr)
                                  continue;
                              let a = s && s.scale;
                              if (!Rt(o) || Ts(t, mt(o))) {
                                  if (s && null !== a && !1 !== a) {
                                      null != a || (a = {});
                                      const n = sp(a, o, s, i, Ts(t, o));
                                      r[o] = new Bd(e.scaleName(`${o}`, !0), {
                                          value: n,
                                          explicit: a.type === n,
                                      });
                                  }
                              } else a && $i(ci(o));
                          }
                          return r;
                      })(e))
                    : (e.component.scales = (function(e) {
                          var t, n;
                          const i = (e.component.scales = {}),
                              r = {},
                              o = e.component.resolve;
                          for (const i of e.children) {
                              ap(i);
                              for (const s of M(i.component.scales))
                                  if (
                                      ((null !== (t = (n = o.scale)[s]) &&
                                          void 0 !== t) ||
                                          (n[s] = $f(s, e)),
                                      'shared' === o.scale[s])
                                  ) {
                                      const e = r[s],
                                          t = i.component.scales[
                                              s
                                          ].getWithExplicit('type');
                                      e
                                          ? dr(e.value, t.value)
                                              ? (r[s] = rc(
                                                    e,
                                                    t,
                                                    'type',
                                                    'scale',
                                                    lp
                                                ))
                                              : ((o.scale[s] = 'independent'),
                                                delete r[s])
                                          : (r[s] = t);
                                  }
                          }
                          for (const t of M(r)) {
                              const n = e.scaleName(t, !0),
                                  o = r[t];
                              i[t] = new Bd(n, o);
                              for (const i of e.children) {
                                  const e = i.component.scales[t];
                                  e &&
                                      (i.renameScale(e.get('name'), n),
                                      (e.merged = !0));
                              }
                          }
                          return i;
                      })(e));
            }
            const lp = nc((e, t) => gr(e) - gr(t));
            var cp = function(e, t) {
                var n = {};
                for (var i in e)
                    Object.prototype.hasOwnProperty.call(e, i) &&
                        t.indexOf(i) < 0 &&
                        (n[i] = e[i]);
                if (
                    null != e &&
                    'function' == typeof Object.getOwnPropertySymbols
                ) {
                    var r = 0;
                    for (i = Object.getOwnPropertySymbols(e); r < i.length; r++)
                        t.indexOf(i[r]) < 0 &&
                            Object.prototype.propertyIsEnumerable.call(
                                e,
                                i[r]
                            ) &&
                            (n[i[r]] = e[i[r]]);
                }
                return n;
            };
            class up {
                constructor() {
                    this.nameMap = {};
                }
                rename(e, t) {
                    this.nameMap[e] = t;
                }
                has(e) {
                    return void 0 !== this.nameMap[e];
                }
                get(e) {
                    for (; this.nameMap[e] && e !== this.nameMap[e]; )
                        e = this.nameMap[e];
                    return e;
                }
            }
            function fp(e) {
                return 'unit' === (null == e ? void 0 : e.type);
            }
            function dp(e) {
                return 'facet' === (null == e ? void 0 : e.type);
            }
            function pp(e) {
                return 'concat' === (null == e ? void 0 : e.type);
            }
            function gp(e) {
                return 'layer' === (null == e ? void 0 : e.type);
            }
            class mp {
                constructor(e, t, n, i, r, s, a) {
                    var l, c;
                    (this.type = t),
                        (this.parent = n),
                        (this.config = r),
                        (this.correctDataNames = e => {
                            var t, n, i;
                            return (
                                (null === (t = e.from) || void 0 === t
                                    ? void 0
                                    : t.data) &&
                                    (e.from.data = this.lookupDataSource(
                                        e.from.data
                                    )),
                                (null ===
                                    (i =
                                        null === (n = e.from) || void 0 === n
                                            ? void 0
                                            : n.facet) || void 0 === i
                                    ? void 0
                                    : i.data) &&
                                    (e.from.facet.data = this.lookupDataSource(
                                        e.from.facet.data
                                    )),
                                e
                            );
                        }),
                        (this.parent = n),
                        (this.config = r),
                        (this.view = xn(a)),
                        (this.name =
                            null !== (l = e.name) && void 0 !== l ? l : i),
                        (this.title = wn(e.title)
                            ? { text: e.title }
                            : e.title
                            ? xn(e.title)
                            : void 0),
                        (this.scaleNameMap = n ? n.scaleNameMap : new up()),
                        (this.projectionNameMap = n
                            ? n.projectionNameMap
                            : new up()),
                        (this.signalNameMap = n ? n.signalNameMap : new up()),
                        (this.data = e.data),
                        (this.description = e.description),
                        (this.transforms = (null !== (c = e.transform) &&
                        void 0 !== c
                            ? c
                            : []
                        ).map(e => (xl(e) ? { filter: h(e.filter, Yi) } : e))),
                        (this.layout =
                            'layer' === t || 'unit' === t
                                ? {}
                                : (function(e, t, n) {
                                      var i, r;
                                      const s = n[t],
                                          a = {},
                                          { spacing: l, columns: c } = s;
                                      void 0 !== l && (a.spacing = l),
                                          void 0 !== c &&
                                              ((No(e) && !Co(e.facet)) ||
                                                  Pa(e)) &&
                                              (a.columns = c),
                                          Fa(e) && (a.columns = 1);
                                      for (const t of Na)
                                          if (void 0 !== e[t])
                                              if ('spacing' === t) {
                                                  const n = e[t];
                                                  a[t] = (0, o.hj)(n)
                                                      ? n
                                                      : {
                                                            row:
                                                                null !==
                                                                    (i =
                                                                        n.row) &&
                                                                void 0 !== i
                                                                    ? i
                                                                    : l,
                                                            column:
                                                                null !==
                                                                    (r =
                                                                        n.column) &&
                                                                void 0 !== r
                                                                    ? r
                                                                    : l,
                                                        };
                                              } else a[t] = e[t];
                                      return a;
                                  })(e, t, r)),
                        (this.component = {
                            data: {
                                sources: n ? n.component.data.sources : [],
                                outputNodes: n
                                    ? n.component.data.outputNodes
                                    : {},
                                outputNodeRefCounts: n
                                    ? n.component.data.outputNodeRefCounts
                                    : {},
                                isFaceted:
                                    No(e) ||
                                    ((null == n
                                        ? void 0
                                        : n.component.data.isFaceted) &&
                                        void 0 === e.data),
                            },
                            layoutSize: new Zl(),
                            layoutHeaders: { row: {}, column: {}, facet: {} },
                            mark: null,
                            resolve: Object.assign(
                                { scale: {}, axis: {}, legend: {} },
                                s ? v(s) : {}
                            ),
                            selection: null,
                            scales: null,
                            projection: null,
                            axes: {},
                            legends: {},
                        });
                }
                get width() {
                    return this.getSizeSignalRef('width');
                }
                get height() {
                    return this.getSizeSignalRef('height');
                }
                parse() {
                    this.parseScale(),
                        this.parseLayoutSize(),
                        this.renameTopLevelLayoutSizeSignal(),
                        this.parseSelections(),
                        this.parseProjection(),
                        this.parseData(),
                        this.parseAxesAndHeaders(),
                        this.parseLegends(),
                        this.parseMarkGroup();
                }
                parseScale() {
                    !(function(e, { ignoreRange: t } = {}) {
                        ap(e), Cd(e);
                        for (const t of Nr) np(e, t);
                        t || rp(e);
                    })(this);
                }
                parseProjection() {
                    Bf(this);
                }
                renameTopLevelLayoutSizeSignal() {
                    'width' !== this.getName('width') &&
                        this.renameSignal(this.getName('width'), 'width'),
                        'height' !== this.getName('height') &&
                            this.renameSignal(this.getName('height'), 'height');
                }
                parseLegends() {
                    Mf(this);
                }
                assembleEncodeFromView(e) {
                    const { style: t } = e,
                        n = cp(e, ['style']),
                        i = {};
                    for (const e of M(n)) {
                        const t = n[e];
                        void 0 !== t && (i[e] = Nn(t));
                    }
                    return i;
                }
                assembleGroupEncodeEntry(e) {
                    let t = {};
                    return (
                        this.view &&
                            (t = this.assembleEncodeFromView(this.view)),
                        e ||
                        (this.description &&
                            (t.description = Nn(this.description)),
                        'unit' !== this.type && 'layer' !== this.type)
                            ? A(t)
                                ? void 0
                                : t
                            : Object.assign(
                                  {
                                      width: this.getSizeSignalRef('width'),
                                      height: this.getSizeSignalRef('height'),
                                  },
                                  null != t ? t : {}
                              )
                    );
                }
                assembleLayout() {
                    if (!this.layout) return;
                    const e = this.layout,
                        { spacing: t } = e,
                        n = cp(e, ['spacing']),
                        { component: i, config: r } = this,
                        o = (function(e, t) {
                            const n = {};
                            for (const i of Ke) {
                                const r = e[i];
                                if (null == r ? void 0 : r.facetFieldDef) {
                                    const {
                                            titleAnchor: e,
                                            titleOrient: o,
                                        } = of(
                                            ['titleAnchor', 'titleOrient'],
                                            r.facetFieldDef.header,
                                            t,
                                            i
                                        ),
                                        s = nf(i, o),
                                        a = hf(e, s);
                                    void 0 !== a && (n[s] = a);
                                }
                            }
                            return A(n) ? void 0 : n;
                        })(i.layoutHeaders, r);
                    return Object.assign(
                        Object.assign(
                            Object.assign(
                                { padding: t },
                                this.assembleDefaultLayout()
                            ),
                            n
                        ),
                        o ? { titleBand: o } : {}
                    );
                }
                assembleDefaultLayout() {
                    return {};
                }
                assembleHeaderMarks() {
                    const { layoutHeaders: e } = this.component;
                    let t = [];
                    for (const n of Ke) e[n].title && t.push(lf(this, n));
                    for (const e of sf) t = t.concat(ff(this, e));
                    return t;
                }
                assembleAxes() {
                    return (function(e, t) {
                        const { x: n = [], y: i = [] } = e;
                        return [
                            ...n.map(e => Hu(e, 'grid', t)),
                            ...i.map(e => Hu(e, 'grid', t)),
                            ...n.map(e => Hu(e, 'main', t)),
                            ...i.map(e => Hu(e, 'main', t)),
                        ].filter(e => e);
                    })(this.component.axes, this.config);
                }
                assembleLegends() {
                    return Wf(this);
                }
                assembleProjections() {
                    return gp((e = this)) || pp(e)
                        ? (function(e) {
                              return e.children.reduce(
                                  (e, t) => e.concat(t.assembleProjections()),
                                  If(e)
                              );
                          })(e)
                        : If(e);
                    var e;
                }
                assembleTitle() {
                    var e, t, n;
                    const i =
                            null !== (e = this.title) && void 0 !== e ? e : {},
                        { encoding: r } = i,
                        o = cp(i, ['encoding']),
                        s = Object.assign(
                            Object.assign(
                                Object.assign(
                                    {},
                                    jn(this.config.title).nonMarkTitleProperties
                                ),
                                o
                            ),
                            r ? { encode: { update: r } } : {}
                        );
                    if (s.text)
                        return (
                            k(['unit', 'layer'], this.type)
                                ? k(['middle', void 0], s.anchor) &&
                                  ((null !== (t = s.frame) && void 0 !== t) ||
                                      (s.frame = 'group'))
                                : (null !== (n = s.anchor) && void 0 !== n) ||
                                  (s.anchor = 'start'),
                            A(s) ? void 0 : s
                        );
                }
                assembleGroup(e = []) {
                    const t = {};
                    (e = e.concat(this.assembleSignals())).length > 0 &&
                        (t.signals = e);
                    const n = this.assembleLayout();
                    n && (t.layout = n),
                        (t.marks = [].concat(
                            this.assembleHeaderMarks(),
                            this.assembleMarks()
                        ));
                    const i = !this.parent || dp(this.parent) ? Ud(this) : [];
                    i.length > 0 && (t.scales = i);
                    const r = this.assembleAxes();
                    r.length > 0 && (t.axes = r);
                    const o = this.assembleLegends();
                    return o.length > 0 && (t.legends = o), t;
                }
                getName(e) {
                    return W((this.name ? `${this.name}_` : '') + e);
                }
                getDataName(e) {
                    return this.getName(pc[e].toLowerCase());
                }
                requestDataName(e) {
                    const t = this.getDataName(e),
                        n = this.component.data.outputNodeRefCounts;
                    return (n[t] = (n[t] || 0) + 1), t;
                }
                getSizeSignalRef(e) {
                    if (dp(this.parent)) {
                        const t = Lt(jf(e)),
                            n = this.component.scales[t];
                        if (n && !n.merged) {
                            const e = n.get('type'),
                                i = n.get('range');
                            if (xr(e) && kn(i)) {
                                const e = n.get('name'),
                                    i = Wd(Id(this, t));
                                return i
                                    ? {
                                          signal: xf(
                                              e,
                                              n,
                                              is(
                                                  {
                                                      aggregate: 'distinct',
                                                      field: i,
                                                  },
                                                  { expr: 'datum' }
                                              )
                                          ),
                                      }
                                    : ($i(Kn(t)), null);
                            }
                        }
                    }
                    return { signal: this.signalNameMap.get(this.getName(e)) };
                }
                lookupDataSource(e) {
                    const t = this.component.data.outputNodes[e];
                    return t ? t.getSource() : e;
                }
                getSignalName(e) {
                    return this.signalNameMap.get(e);
                }
                renameSignal(e, t) {
                    this.signalNameMap.rename(e, t);
                }
                renameScale(e, t) {
                    this.scaleNameMap.rename(e, t);
                }
                renameProjection(e, t) {
                    this.projectionNameMap.rename(e, t);
                }
                scaleName(e, t) {
                    return t
                        ? this.getName(e)
                        : (at(e) && Zt(e) && this.component.scales[e]) ||
                          this.scaleNameMap.has(this.getName(e))
                        ? this.scaleNameMap.get(this.getName(e))
                        : void 0;
                }
                projectionName(e) {
                    return e
                        ? this.getName('projection')
                        : (this.component.projection &&
                              !this.component.projection.merged) ||
                          this.projectionNameMap.has(this.getName('projection'))
                        ? this.projectionNameMap.get(this.getName('projection'))
                        : void 0;
                }
                getScaleComponent(e) {
                    if (!this.component.scales)
                        throw new Error(
                            'getScaleComponent cannot be called before parseScale(). Make sure you have called parseScale or use parseUnitModelWithScale().'
                        );
                    const t = this.component.scales[e];
                    return t && !t.merged
                        ? t
                        : this.parent
                        ? this.parent.getScaleComponent(e)
                        : void 0;
                }
                getSelectionComponent(e, t) {
                    let n = this.component.selection[e];
                    if (
                        (!n &&
                            this.parent &&
                            (n = this.parent.getSelectionComponent(e, t)),
                        !n)
                    )
                        throw new Error(
                            `Cannot find a selection named "${t}".`
                        );
                    return n;
                }
                hasAxisOrientSignalRef() {
                    var e, t;
                    return (
                        (null === (e = this.component.axes.x) || void 0 === e
                            ? void 0
                            : e.some(e => e.hasOrientSignalRef())) ||
                        (null === (t = this.component.axes.y) || void 0 === t
                            ? void 0
                            : t.some(e => e.hasOrientSignalRef()))
                    );
                }
            }
            class hp extends mp {
                vgField(e, t = {}) {
                    const n = this.fieldDef(e);
                    if (n) return is(n, t);
                }
                reduceFieldDef(e, t) {
                    return (function(e, t, n, i) {
                        return e
                            ? M(e).reduce((n, r) => {
                                  const s = e[r];
                                  return (0, o.kJ)(s)
                                      ? s.reduce(
                                            (e, n) => t.call(i, e, n, r),
                                            n
                                        )
                                      : t.call(i, n, s, r);
                              }, n)
                            : n;
                    })(
                        this.getMapping(),
                        (t, n, i) => {
                            const r = ds(n);
                            return r ? e(t, r, i) : t;
                        },
                        t
                    );
                }
                forEachFieldDef(e, t) {
                    Rs(
                        this.getMapping(),
                        (t, n) => {
                            const i = ds(t);
                            i && e(i, n);
                        },
                        t
                    );
                }
            }
            class bp extends Oc {
                constructor(e, t) {
                    var n, i, r;
                    super(e), (this.transform = t), (this.transform = v(t));
                    const o =
                        null !== (n = this.transform.as) && void 0 !== n
                            ? n
                            : [void 0, void 0];
                    (this.transform.as = [
                        null !== (i = o[0]) && void 0 !== i ? i : 'value',
                        null !== (r = o[1]) && void 0 !== r ? r : 'density',
                    ]),
                        t.groupby &&
                            null == t.minsteps &&
                            null == t.maxsteps &&
                            null == t.steps &&
                            (this.transform.steps = 200);
                }
                clone() {
                    return new bp(null, v(this.transform));
                }
                dependentFields() {
                    var e;
                    return new Set([
                        this.transform.density,
                        ...(null !== (e = this.transform.groupby) &&
                        void 0 !== e
                            ? e
                            : []),
                    ]);
                }
                producedFields() {
                    return new Set(this.transform.as);
                }
                hash() {
                    return `DensityTransform ${w(this.transform)}`;
                }
                assemble() {
                    const e = this.transform,
                        { density: t } = e,
                        n = (function(e, t) {
                            var n = {};
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    t.indexOf(i) < 0 &&
                                    (n[i] = e[i]);
                            if (
                                null != e &&
                                'function' ==
                                    typeof Object.getOwnPropertySymbols
                            ) {
                                var r = 0;
                                for (
                                    i = Object.getOwnPropertySymbols(e);
                                    r < i.length;
                                    r++
                                )
                                    t.indexOf(i[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(
                                            e,
                                            i[r]
                                        ) &&
                                        (n[i[r]] = e[i[r]]);
                            }
                            return n;
                        })(e, ['density']);
                    return Object.assign({ type: 'kde', field: t }, n);
                }
            }
            class vp extends Oc {
                constructor(e, t) {
                    super(e), (this.filter = t);
                }
                clone() {
                    return new vp(null, Object.assign({}, this.filter));
                }
                static make(e, t) {
                    const { config: n, mark: i, markDef: r } = t;
                    if ('filter' !== Ln('invalid', r, n)) return null;
                    const o = t.reduceFieldDef((e, n, r) => {
                        const o = Zt(r) && t.getScaleComponent(r);
                        return (
                            o &&
                                jr(o.get('type')) &&
                                'count' !== n.aggregate &&
                                !Qr(i) &&
                                (e[n.field] = n),
                            e
                        );
                    }, {});
                    return M(o).length ? new vp(e, o) : null;
                }
                dependentFields() {
                    return new Set(M(this.filter));
                }
                producedFields() {
                    return new Set();
                }
                hash() {
                    return `FilterInvalid ${w(this.filter)}`;
                }
                assemble() {
                    const e = M(this.filter).reduce((e, t) => {
                        const n = this.filter[t],
                            i = is(n, { expr: 'datum' });
                        return (
                            null !== n &&
                                ('temporal' === n.type
                                    ? e.push(
                                          `(isDate(${i}) || (isValid(${i}) && isFinite(+${i})))`
                                      )
                                    : 'quantitative' === n.type &&
                                      (e.push(`isValid(${i})`),
                                      e.push(`isFinite(+${i})`))),
                            e
                        );
                    }, []);
                    return e.length > 0
                        ? { type: 'filter', expr: e.join(' && ') }
                        : null;
                }
            }
            class yp extends Oc {
                constructor(e, t) {
                    super(e), (this.transform = t), (this.transform = v(t));
                    const { flatten: n, as: i = [] } = this.transform;
                    this.transform.as = n.map((e, t) => {
                        var n;
                        return null !== (n = i[t]) && void 0 !== n ? n : e;
                    });
                }
                clone() {
                    return new yp(this.parent, v(this.transform));
                }
                dependentFields() {
                    return new Set(this.transform.flatten);
                }
                producedFields() {
                    return new Set(this.transform.as);
                }
                hash() {
                    return `FlattenTransform ${w(this.transform)}`;
                }
                assemble() {
                    const { flatten: e, as: t } = this.transform;
                    return { type: 'flatten', fields: e, as: t };
                }
            }
            class Op extends Oc {
                constructor(e, t) {
                    var n, i, r;
                    super(e), (this.transform = t), (this.transform = v(t));
                    const o =
                        null !== (n = this.transform.as) && void 0 !== n
                            ? n
                            : [void 0, void 0];
                    this.transform.as = [
                        null !== (i = o[0]) && void 0 !== i ? i : 'key',
                        null !== (r = o[1]) && void 0 !== r ? r : 'value',
                    ];
                }
                clone() {
                    return new Op(null, v(this.transform));
                }
                dependentFields() {
                    return new Set(this.transform.fold);
                }
                producedFields() {
                    return new Set(this.transform.as);
                }
                hash() {
                    return `FoldTransform ${w(this.transform)}`;
                }
                assemble() {
                    const { fold: e, as: t } = this.transform;
                    return { type: 'fold', fields: e, as: t };
                }
            }
            class xp extends Oc {
                constructor(e, t, n, i) {
                    super(e),
                        (this.fields = t),
                        (this.geojson = n),
                        (this.signal = i);
                }
                clone() {
                    return new xp(
                        null,
                        v(this.fields),
                        this.geojson,
                        this.signal
                    );
                }
                static parseAll(e, t) {
                    if (t.component.projection && !t.component.projection.isFit)
                        return e;
                    let n = 0;
                    for (const i of [
                        [xe, Oe],
                        [we, je],
                    ]) {
                        const r = i.map(e => {
                            const n = ps(t.encoding[e]);
                            return Ho(n)
                                ? n.field
                                : Jo(n)
                                ? { expr: `${n.datum}` }
                                : Yo(n)
                                ? { expr: `${n.value}` }
                                : void 0;
                        });
                        (r[0] || r[1]) &&
                            (e = new xp(
                                e,
                                r,
                                null,
                                t.getName('geojson_' + n++)
                            ));
                    }
                    if (t.channelHasField(De)) {
                        const i = t.typedFieldDef(De);
                        i.type === sr &&
                            (e = new xp(
                                e,
                                null,
                                i.field,
                                t.getName('geojson_' + n++)
                            ));
                    }
                    return e;
                }
                dependentFields() {
                    var e;
                    const t = (null !== (e = this.fields) && void 0 !== e
                        ? e
                        : []
                    ).filter(o.HD);
                    return new Set([
                        ...(this.geojson ? [this.geojson] : []),
                        ...t,
                    ]);
                }
                producedFields() {
                    return new Set();
                }
                hash() {
                    return `GeoJSON ${this.geojson} ${this.signal} ${w(
                        this.fields
                    )}`;
                }
                assemble() {
                    return [
                        ...(this.geojson
                            ? [
                                  {
                                      type: 'filter',
                                      expr: `isValid(datum["${this.geojson}"])`,
                                  },
                              ]
                            : []),
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    { type: 'geojson' },
                                    this.fields ? { fields: this.fields } : {}
                                ),
                                this.geojson ? { geojson: this.geojson } : {}
                            ),
                            { signal: this.signal }
                        ),
                    ];
                }
            }
            class jp extends Oc {
                constructor(e, t, n, i) {
                    super(e),
                        (this.projection = t),
                        (this.fields = n),
                        (this.as = i);
                }
                clone() {
                    return new jp(
                        null,
                        this.projection,
                        v(this.fields),
                        v(this.as)
                    );
                }
                static parseAll(e, t) {
                    if (!t.projectionName()) return e;
                    for (const n of [
                        [xe, Oe],
                        [we, je],
                    ]) {
                        const i = n.map(e => {
                                const n = ps(t.encoding[e]);
                                return Ho(n)
                                    ? n.field
                                    : Jo(n)
                                    ? { expr: `${n.datum}` }
                                    : Yo(n)
                                    ? { expr: `${n.value}` }
                                    : void 0;
                            }),
                            r = n[0] === we ? '2' : '';
                        (i[0] || i[1]) &&
                            (e = new jp(e, t.projectionName(), i, [
                                t.getName(`x${r}`),
                                t.getName(`y${r}`),
                            ]));
                    }
                    return e;
                }
                dependentFields() {
                    return new Set(this.fields.filter(o.HD));
                }
                producedFields() {
                    return new Set(this.as);
                }
                hash() {
                    return `Geopoint ${this.projection} ${w(this.fields)} ${w(
                        this.as
                    )}`;
                }
                assemble() {
                    return {
                        type: 'geopoint',
                        projection: this.projection,
                        fields: this.fields,
                        as: this.as,
                    };
                }
            }
            class wp extends Oc {
                constructor(e, t) {
                    super(e), (this.transform = t);
                }
                clone() {
                    return new wp(null, v(this.transform));
                }
                dependentFields() {
                    var e;
                    return new Set([
                        this.transform.impute,
                        this.transform.key,
                        ...(null !== (e = this.transform.groupby) &&
                        void 0 !== e
                            ? e
                            : []),
                    ]);
                }
                producedFields() {
                    return new Set([this.transform.impute]);
                }
                processSequence(e) {
                    const { start: t = 0, stop: n, step: i } = e;
                    return {
                        signal: `sequence(${[t, n, ...(i ? [i] : [])].join(
                            ','
                        )})`,
                    };
                }
                static makeFromTransform(e, t) {
                    return new wp(e, t);
                }
                static makeFromEncoding(e, t) {
                    const n = t.encoding,
                        i = n.x,
                        r = n.y;
                    if (Ho(i) && Ho(r)) {
                        const o = i.impute ? i : r.impute ? r : void 0;
                        if (void 0 === o) return;
                        const s = i.impute ? r : r.impute ? i : void 0,
                            {
                                method: a,
                                value: l,
                                frame: c,
                                keyvals: u,
                            } = o.impute,
                            f = Ws(t.mark, n);
                        return new wp(
                            e,
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                {
                                                    impute: o.field,
                                                    key: s.field,
                                                },
                                                a ? { method: a } : {}
                                            ),
                                            void 0 !== l ? { value: l } : {}
                                        ),
                                        c ? { frame: c } : {}
                                    ),
                                    void 0 !== u ? { keyvals: u } : {}
                                ),
                                f.length ? { groupby: f } : {}
                            )
                        );
                    }
                    return null;
                }
                hash() {
                    return `Impute ${w(this.transform)}`;
                }
                assemble() {
                    const {
                            impute: e,
                            key: t,
                            keyvals: n,
                            method: i,
                            groupby: r,
                            value: o,
                            frame: s = [null, null],
                        } = this.transform,
                        a = Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        { type: 'impute', field: e, key: t },
                                        n
                                            ? {
                                                  keyvals:
                                                      ((l = n),
                                                      void 0 !==
                                                      (null == l
                                                          ? void 0
                                                          : l.stop)
                                                          ? this.processSequence(
                                                                n
                                                            )
                                                          : n),
                                              }
                                            : {}
                                    ),
                                    { method: 'value' }
                                ),
                                r ? { groupby: r } : {}
                            ),
                            { value: i && 'value' !== i ? null : o }
                        );
                    var l;
                    return i && 'value' !== i
                        ? [
                              a,
                              Object.assign(
                                  {
                                      type: 'window',
                                      as: [`imputed_${e}_value`],
                                      ops: [i],
                                      fields: [e],
                                      frame: s,
                                      ignorePeers: !1,
                                  },
                                  r ? { groupby: r } : {}
                              ),
                              {
                                  type: 'formula',
                                  expr: `datum.${e} === null ? datum.imputed_${e}_value : datum.${e}`,
                                  as: e,
                              },
                          ]
                        : [a];
                }
            }
            class $p extends Oc {
                constructor(e, t) {
                    var n, i, r;
                    super(e), (this.transform = t), (this.transform = v(t));
                    const o =
                        null !== (n = this.transform.as) && void 0 !== n
                            ? n
                            : [void 0, void 0];
                    this.transform.as = [
                        null !== (i = o[0]) && void 0 !== i ? i : t.on,
                        null !== (r = o[1]) && void 0 !== r ? r : t.loess,
                    ];
                }
                clone() {
                    return new $p(null, v(this.transform));
                }
                dependentFields() {
                    var e;
                    return new Set([
                        this.transform.loess,
                        this.transform.on,
                        ...(null !== (e = this.transform.groupby) &&
                        void 0 !== e
                            ? e
                            : []),
                    ]);
                }
                producedFields() {
                    return new Set(this.transform.as);
                }
                hash() {
                    return `LoessTransform ${w(this.transform)}`;
                }
                assemble() {
                    const e = this.transform,
                        { loess: t, on: n } = e,
                        i = (function(e, t) {
                            var n = {};
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    t.indexOf(i) < 0 &&
                                    (n[i] = e[i]);
                            if (
                                null != e &&
                                'function' ==
                                    typeof Object.getOwnPropertySymbols
                            ) {
                                var r = 0;
                                for (
                                    i = Object.getOwnPropertySymbols(e);
                                    r < i.length;
                                    r++
                                )
                                    t.indexOf(i[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(
                                            e,
                                            i[r]
                                        ) &&
                                        (n[i[r]] = e[i[r]]);
                            }
                            return n;
                        })(e, ['loess', 'on']);
                    return Object.assign({ type: 'loess', x: n, y: t }, i);
                }
            }
            class kp extends Oc {
                constructor(e, t, n) {
                    super(e), (this.transform = t), (this.secondary = n);
                }
                clone() {
                    return new kp(null, v(this.transform), this.secondary);
                }
                static make(e, t, n, i) {
                    const r = t.component.data.sources,
                        { from: o } = n;
                    let s = null;
                    if (
                        (function(e) {
                            return 'data' in e;
                        })(o)
                    ) {
                        let e = qp(o.data, r);
                        e || ((e = new rd(o.data)), r.push(e));
                        const n = t.getName(`lookup_${i}`);
                        (s = new xc(
                            e,
                            n,
                            pc.Lookup,
                            t.component.data.outputNodeRefCounts
                        )),
                            (t.component.data.outputNodes[n] = s);
                    } else if (
                        (function(e) {
                            return 'param' in e;
                        })(o)
                    ) {
                        const e = o.param;
                        let i;
                        n = Object.assign({ as: e }, n);
                        try {
                            i = t.getSelectionComponent(W(e), e);
                        } catch (t) {
                            throw new Error(
                                `Lookups can only be performed on selection parameters. "${e}" is a variable parameter.`
                            );
                        }
                        if (((s = i.materialized), !s))
                            throw new Error(
                                `Cannot define and lookup the "${e}" selection in the same view. Try moving the lookup into a second, layered view?`
                            );
                    }
                    return new kp(e, n, s.getSource());
                }
                dependentFields() {
                    return new Set([this.transform.lookup]);
                }
                producedFields() {
                    return new Set(
                        this.transform.as
                            ? (0, o.IX)(this.transform.as)
                            : this.transform.from.fields
                    );
                }
                hash() {
                    return `Lookup ${w({
                        transform: this.transform,
                        secondary: this.secondary,
                    })}`;
                }
                assemble() {
                    let e;
                    if (this.transform.from.fields)
                        e = Object.assign(
                            { values: this.transform.from.fields },
                            this.transform.as
                                ? { as: (0, o.IX)(this.transform.as) }
                                : {}
                        );
                    else {
                        let t = this.transform.as;
                        (0, o.HD)(t) ||
                            ($i(
                                'If "from.fields" is not specified, "as" has to be a string that specifies the key to be used for the data from the secondary source.'
                            ),
                            (t = '_lookup')),
                            (e = { as: [t] });
                    }
                    return Object.assign(
                        Object.assign(
                            {
                                type: 'lookup',
                                from: this.secondary,
                                key: this.transform.from.key,
                                fields: [this.transform.lookup],
                            },
                            e
                        ),
                        this.transform.default
                            ? { default: this.transform.default }
                            : {}
                    );
                }
            }
            class Sp extends Oc {
                constructor(e, t) {
                    var n, i, r;
                    super(e), (this.transform = t), (this.transform = v(t));
                    const o =
                        null !== (n = this.transform.as) && void 0 !== n
                            ? n
                            : [void 0, void 0];
                    this.transform.as = [
                        null !== (i = o[0]) && void 0 !== i ? i : 'prob',
                        null !== (r = o[1]) && void 0 !== r ? r : 'value',
                    ];
                }
                clone() {
                    return new Sp(null, v(this.transform));
                }
                dependentFields() {
                    var e;
                    return new Set([
                        this.transform.quantile,
                        ...(null !== (e = this.transform.groupby) &&
                        void 0 !== e
                            ? e
                            : []),
                    ]);
                }
                producedFields() {
                    return new Set(this.transform.as);
                }
                hash() {
                    return `QuantileTransform ${w(this.transform)}`;
                }
                assemble() {
                    const e = this.transform,
                        { quantile: t } = e,
                        n = (function(e, t) {
                            var n = {};
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    t.indexOf(i) < 0 &&
                                    (n[i] = e[i]);
                            if (
                                null != e &&
                                'function' ==
                                    typeof Object.getOwnPropertySymbols
                            ) {
                                var r = 0;
                                for (
                                    i = Object.getOwnPropertySymbols(e);
                                    r < i.length;
                                    r++
                                )
                                    t.indexOf(i[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(
                                            e,
                                            i[r]
                                        ) &&
                                        (n[i[r]] = e[i[r]]);
                            }
                            return n;
                        })(e, ['quantile']);
                    return Object.assign({ type: 'quantile', field: t }, n);
                }
            }
            class Dp extends Oc {
                constructor(e, t) {
                    var n, i, r;
                    super(e), (this.transform = t), (this.transform = v(t));
                    const o =
                        null !== (n = this.transform.as) && void 0 !== n
                            ? n
                            : [void 0, void 0];
                    this.transform.as = [
                        null !== (i = o[0]) && void 0 !== i ? i : t.on,
                        null !== (r = o[1]) && void 0 !== r ? r : t.regression,
                    ];
                }
                clone() {
                    return new Dp(null, v(this.transform));
                }
                dependentFields() {
                    var e;
                    return new Set([
                        this.transform.regression,
                        this.transform.on,
                        ...(null !== (e = this.transform.groupby) &&
                        void 0 !== e
                            ? e
                            : []),
                    ]);
                }
                producedFields() {
                    return new Set(this.transform.as);
                }
                hash() {
                    return `RegressionTransform ${w(this.transform)}`;
                }
                assemble() {
                    const e = this.transform,
                        { regression: t, on: n } = e,
                        i = (function(e, t) {
                            var n = {};
                            for (var i in e)
                                Object.prototype.hasOwnProperty.call(e, i) &&
                                    t.indexOf(i) < 0 &&
                                    (n[i] = e[i]);
                            if (
                                null != e &&
                                'function' ==
                                    typeof Object.getOwnPropertySymbols
                            ) {
                                var r = 0;
                                for (
                                    i = Object.getOwnPropertySymbols(e);
                                    r < i.length;
                                    r++
                                )
                                    t.indexOf(i[r]) < 0 &&
                                        Object.prototype.propertyIsEnumerable.call(
                                            e,
                                            i[r]
                                        ) &&
                                        (n[i[r]] = e[i[r]]);
                            }
                            return n;
                        })(e, ['regression', 'on']);
                    return Object.assign({ type: 'regression', x: n, y: t }, i);
                }
            }
            class Pp extends Oc {
                constructor(e, t) {
                    super(e), (this.transform = t);
                }
                clone() {
                    return new Pp(null, v(this.transform));
                }
                addDimensions(e) {
                    var t;
                    this.transform.groupby = z(
                        (null !== (t = this.transform.groupby) && void 0 !== t
                            ? t
                            : []
                        ).concat(e),
                        e => e
                    );
                }
                producedFields() {}
                dependentFields() {
                    var e;
                    return new Set([
                        this.transform.pivot,
                        this.transform.value,
                        ...(null !== (e = this.transform.groupby) &&
                        void 0 !== e
                            ? e
                            : []),
                    ]);
                }
                hash() {
                    return `PivotTransform ${w(this.transform)}`;
                }
                assemble() {
                    const {
                        pivot: e,
                        value: t,
                        groupby: n,
                        limit: i,
                        op: r,
                    } = this.transform;
                    return Object.assign(
                        Object.assign(
                            Object.assign(
                                { type: 'pivot', field: e, value: t },
                                void 0 !== i ? { limit: i } : {}
                            ),
                            void 0 !== r ? { op: r } : {}
                        ),
                        void 0 !== n ? { groupby: n } : {}
                    );
                }
            }
            class Fp extends Oc {
                constructor(e, t) {
                    super(e), (this.transform = t);
                }
                clone() {
                    return new Fp(null, v(this.transform));
                }
                dependentFields() {
                    return new Set();
                }
                producedFields() {
                    return new Set();
                }
                hash() {
                    return `SampleTransform ${w(this.transform)}`;
                }
                assemble() {
                    return { type: 'sample', size: this.transform.sample };
                }
            }
            function zp(e) {
                let t = 0;
                return function n(i, r) {
                    var o;
                    if (
                        (i instanceof rd &&
                            !i.isGenerator &&
                            !sc(i.data) &&
                            (e.push(r),
                            (r = {
                                name: null,
                                source: r.name,
                                transform: [],
                            })),
                        i instanceof ed &&
                            (i.parent instanceof rd && !r.source
                                ? ((r.format = Object.assign(
                                      Object.assign(
                                          {},
                                          null !== (o = r.format) &&
                                              void 0 !== o
                                              ? o
                                              : {}
                                      ),
                                      { parse: i.assembleFormatParse() }
                                  )),
                                  r.transform.push(...i.assembleTransforms(!0)))
                                : r.transform.push(...i.assembleTransforms())),
                        i instanceof Yf)
                    )
                        return (
                            r.name || (r.name = 'data_' + t++),
                            !r.source || r.transform.length > 0
                                ? (e.push(r), (i.data = r.name))
                                : (i.data = r.source),
                            void e.push(...i.assemble())
                        );
                    switch (
                        ((i instanceof nd ||
                            i instanceof id ||
                            i instanceof vp ||
                            i instanceof Lu ||
                            i instanceof ef ||
                            i instanceof jp ||
                            i instanceof Kf ||
                            i instanceof kp ||
                            i instanceof $d ||
                            i instanceof jd ||
                            i instanceof Op ||
                            i instanceof yp ||
                            i instanceof bp ||
                            i instanceof $p ||
                            i instanceof Sp ||
                            i instanceof Dp ||
                            i instanceof td ||
                            i instanceof Fp ||
                            i instanceof Pp) &&
                            r.transform.push(i.assemble()),
                        (i instanceof Vf ||
                            i instanceof wc ||
                            i instanceof wp ||
                            i instanceof wd ||
                            i instanceof xp) &&
                            r.transform.push(...i.assemble()),
                        i instanceof xc &&
                            (r.source && 0 === r.transform.length
                                ? i.setSource(r.source)
                                : i.parent instanceof xc
                                ? i.setSource(r.name)
                                : (r.name || (r.name = 'data_' + t++),
                                  i.setSource(r.name),
                                  1 === i.numChildren() &&
                                      (e.push(r),
                                      (r = {
                                          name: null,
                                          source: r.name,
                                          transform: [],
                                      })))),
                        i.numChildren())
                    ) {
                        case 0:
                            i instanceof xc &&
                                (!r.source || r.transform.length > 0) &&
                                e.push(r);
                            break;
                        case 1:
                            n(i.children[0], r);
                            break;
                        default: {
                            r.name || (r.name = 'data_' + t++);
                            let o = r.name;
                            !r.source || r.transform.length > 0
                                ? e.push(r)
                                : (o = r.source);
                            for (const e of i.children)
                                n(e, { name: null, source: o, transform: [] });
                            break;
                        }
                    }
                };
            }
            function _p(e, t) {
                var n;
                const { facet: i, config: r, child: s, component: a } = e;
                if (e.channelHasField(t)) {
                    const l = i[t],
                        c = rf('title', null, r, t);
                    let u = ls(l, r, {
                        allowDisabling: !0,
                        includeDefault: void 0 === c || !!c,
                    });
                    s.component.layoutHeaders[t].title &&
                        ((u = (0, o.kJ)(u) ? u.join(', ') : u),
                        (u += ` / ${s.component.layoutHeaders[t].title}`),
                        (s.component.layoutHeaders[t].title = null));
                    const f = rf('labelOrient', l.header, r, t),
                        d =
                            null !== l.header &&
                            Q(
                                null === (n = l.header) || void 0 === n
                                    ? void 0
                                    : n.labels,
                                r.header.labels,
                                !0
                            ),
                        p = k(['bottom', 'right'], f) ? 'footer' : 'header';
                    a.layoutHeaders[t] = {
                        title: null !== l.header ? u : null,
                        facetFieldDef: l,
                        [p]: 'facet' === t ? [] : [Cp(e, t, d)],
                    };
                }
            }
            function Cp(e, t, n) {
                const i = 'row' === t ? 'height' : 'width';
                return {
                    labels: n,
                    sizeSignal: e.child.component.layoutSize.get(i)
                        ? e.child.getSizeSignalRef(i)
                        : void 0,
                    axes: [],
                };
            }
            function Ep(e, t) {
                var n;
                const { child: i } = e;
                if (i.component.axes[t]) {
                    const { layoutHeaders: o, resolve: s } = e.component;
                    if (((s.axis[t] = kf(s, t)), 'shared' === s.axis[t])) {
                        const s = 'x' === t ? 'column' : 'row',
                            a = o[s];
                        for (const o of i.component.axes[t]) {
                            const t =
                                'top' === (r = o.get('orient')) ||
                                'left' === r ||
                                $n(r)
                                    ? 'header'
                                    : 'footer';
                            (null !== (n = a[t]) && void 0 !== n) ||
                                (a[t] = [Cp(e, s, !1)]);
                            const i = Hu(o, 'main', e.config, { header: !0 });
                            i && a[t][0].axes.push(i), (o.mainExtracted = !0);
                        }
                    }
                }
                var r;
            }
            function Np(e) {
                for (const t of e.children) t.parseLayoutSize();
            }
            function Tp(e, t) {
                var n;
                const i = jf(t),
                    r = Lt(i),
                    o = e.component.resolve,
                    s = e.component.layoutSize;
                let a;
                for (const t of e.children) {
                    const s = t.component.layoutSize.getWithExplicit(i),
                        l =
                            null !== (n = o.scale[r]) && void 0 !== n
                                ? n
                                : $f(r, e);
                    if ('independent' === l && 'step' === s.value) {
                        a = void 0;
                        break;
                    }
                    if (a) {
                        if ('independent' === l && a.value !== s.value) {
                            a = void 0;
                            break;
                        }
                        a = rc(a, s, i, '');
                    } else a = s;
                }
                if (a) {
                    for (const n of e.children)
                        e.renameSignal(n.getName(i), e.getName(t)),
                            n.component.layoutSize.set(i, 'merged', !1);
                    s.setWithExplicit(t, a);
                } else s.setWithExplicit(t, { explicit: !1, value: void 0 });
            }
            function Ap(e, t) {
                const n = 'width' === t ? 'x' : 'y',
                    i = e.config,
                    r = e.getScaleComponent(n);
                if (r) {
                    const e = r.get('type'),
                        n = r.get('range');
                    if (xr(e)) {
                        const e = Ma(i.view, t);
                        return kn(n) || Ca(e) ? 'step' : e;
                    }
                    return Ta(i.view, t);
                }
                if (e.hasProjection || 'arc' === e.mark) return Ta(i.view, t);
                {
                    const e = Ma(i.view, t);
                    return Ca(e) ? e.step : e;
                }
            }
            function Mp(e, t, n) {
                return is(
                    t,
                    Object.assign({ suffix: `by_${is(e)}` }, null != n ? n : {})
                );
            }
            class Lp extends hp {
                constructor(e, t, n, i) {
                    super(e, 'facet', t, n, i, e.resolve),
                        (this.child = og(
                            e.spec,
                            this,
                            this.getName('child'),
                            void 0,
                            i
                        )),
                        (this.children = [this.child]),
                        (this.facet = this.initFacet(e.facet));
                }
                initFacet(e) {
                    if (!Co(e))
                        return { facet: this.initFacetFieldDef(e, 'facet') };
                    const t = M(e),
                        n = {};
                    for (const i of t) {
                        if (![ae, le].includes(i)) {
                            $i(li(i, 'facet'));
                            break;
                        }
                        const t = e[i];
                        if (void 0 === t.field) {
                            $i(ai(t, i));
                            break;
                        }
                        n[i] = this.initFacetFieldDef(t, i);
                    }
                    return n;
                }
                initFacetFieldDef(e, t) {
                    const n = hs(e, t);
                    return (
                        n.header
                            ? (n.header = xn(n.header))
                            : null === n.header && (n.header = null),
                        n
                    );
                }
                channelHasField(e) {
                    return !!this.facet[e];
                }
                fieldDef(e) {
                    return this.facet[e];
                }
                parseData() {
                    (this.component.data = Rp(this)), this.child.parseData();
                }
                parseLayoutSize() {
                    Np(this);
                }
                parseSelections() {
                    this.child.parseSelections(),
                        (this.component.selection = this.child.component.selection);
                }
                parseMarkGroup() {
                    this.child.parseMarkGroup();
                }
                parseAxesAndHeaders() {
                    this.child.parseAxesAndHeaders(),
                        (function(e) {
                            for (const t of Ke) _p(e, t);
                            Ep(e, 'x'), Ep(e, 'y');
                        })(this);
                }
                assembleSelectionTopLevelSignals(e) {
                    return this.child.assembleSelectionTopLevelSignals(e);
                }
                assembleSignals() {
                    return this.child.assembleSignals(), [];
                }
                assembleSelectionData(e) {
                    return this.child.assembleSelectionData(e);
                }
                getHeaderLayoutMixins() {
                    var e, t, n;
                    const i = {};
                    for (const r of Ke)
                        for (const o of af) {
                            const s = this.component.layoutHeaders[r],
                                a = s[o],
                                { facetFieldDef: l } = s;
                            if (l) {
                                const t = rf(
                                    'titleOrient',
                                    l.header,
                                    this.config,
                                    r
                                );
                                if (['right', 'bottom'].includes(t)) {
                                    const n = nf(r, t);
                                    (null !== (e = i.titleAnchor) &&
                                        void 0 !== e) ||
                                        (i.titleAnchor = {}),
                                        (i.titleAnchor[n] = 'end');
                                }
                            }
                            if (null == a ? void 0 : a[0]) {
                                const e = 'row' === r ? 'height' : 'width',
                                    a =
                                        'header' === o
                                            ? 'headerBand'
                                            : 'footerBand';
                                'facet' === r ||
                                    this.child.component.layoutSize.get(e) ||
                                    ((null !== (t = i[a]) && void 0 !== t) ||
                                        (i[a] = {}),
                                    (i[a][r] = 0.5)),
                                    s.title &&
                                        ((null !== (n = i.offset) &&
                                            void 0 !== n) ||
                                            (i.offset = {}),
                                        (i.offset[
                                            'row' === r
                                                ? 'rowTitle'
                                                : 'columnTitle'
                                        ] = 10));
                            }
                        }
                    return i;
                }
                assembleDefaultLayout() {
                    const { column: e, row: t } = this.facet,
                        n = e ? this.columnDistinctSignal() : t ? 1 : void 0;
                    let i = 'all';
                    return (
                        ((t ||
                            'independent' !== this.component.resolve.scale.x) &&
                            (e ||
                                'independent' !==
                                    this.component.resolve.scale.y)) ||
                            (i = 'none'),
                        Object.assign(
                            Object.assign(
                                Object.assign({}, this.getHeaderLayoutMixins()),
                                n ? { columns: n } : {}
                            ),
                            { bounds: 'full', align: i }
                        )
                    );
                }
                assembleLayoutSignals() {
                    return this.child.assembleLayoutSignals();
                }
                columnDistinctSignal() {
                    if (!(this.parent && this.parent instanceof Lp))
                        return {
                            signal: `length(data('${this.getName(
                                'column_domain'
                            )}'))`,
                        };
                }
                assembleGroupStyle() {}
                assembleGroup(e) {
                    return this.parent && this.parent instanceof Lp
                        ? Object.assign(
                              Object.assign(
                                  {},
                                  this.channelHasField('column')
                                      ? {
                                            encode: {
                                                update: {
                                                    columns: {
                                                        field: is(
                                                            this.facet.column,
                                                            {
                                                                prefix:
                                                                    'distinct',
                                                            }
                                                        ),
                                                    },
                                                },
                                            },
                                        }
                                      : {}
                              ),
                              super.assembleGroup(e)
                          )
                        : super.assembleGroup(e);
                }
                getCardinalityAggregateForChild() {
                    const e = [],
                        t = [],
                        n = [];
                    if (this.child instanceof Lp) {
                        if (this.child.channelHasField('column')) {
                            const i = is(this.child.facet.column);
                            e.push(i),
                                t.push('distinct'),
                                n.push(`distinct_${i}`);
                        }
                    } else
                        for (const i of Nt) {
                            const r = this.child.component.scales[i];
                            if (r && !r.merged) {
                                const o = r.get('type'),
                                    s = r.get('range');
                                if (xr(o) && kn(s)) {
                                    const r = Wd(Id(this.child, i));
                                    r
                                        ? (e.push(r),
                                          t.push('distinct'),
                                          n.push(`distinct_${r}`))
                                        : $i(Kn(i));
                                }
                            }
                        }
                    return { fields: e, ops: t, as: n };
                }
                assembleFacet() {
                    const { name: e, data: t } = this.component.data.facetRoot,
                        { row: n, column: i } = this.facet,
                        {
                            fields: r,
                            ops: s,
                            as: a,
                        } = this.getCardinalityAggregateForChild(),
                        l = [];
                    for (const e of Ke) {
                        const t = this.facet[e];
                        if (t) {
                            l.push(is(t));
                            const { bin: c, sort: u } = t;
                            if (
                                (mn(c) && l.push(is(t, { binSuffix: 'end' })),
                                zo(u))
                            ) {
                                const { field: e, op: o = So } = u,
                                    l = Mp(t, u);
                                n && i
                                    ? (r.push(l), s.push('max'), a.push(l))
                                    : (r.push(e), s.push(o), a.push(l));
                            } else if ((0, o.kJ)(u)) {
                                const n = tf(t, e);
                                r.push(n), s.push('max'), a.push(n);
                            }
                        }
                    }
                    const c = !!n && !!i;
                    return Object.assign(
                        { name: e, data: t, groupby: l },
                        c || r.length > 0
                            ? {
                                  aggregate: Object.assign(
                                      Object.assign({}, c ? { cross: c } : {}),
                                      r.length
                                          ? { fields: r, ops: s, as: a }
                                          : {}
                                  ),
                              }
                            : {}
                    );
                }
                facetSortFields(e) {
                    const { facet: t } = this,
                        n = t[e];
                    return n
                        ? zo(n.sort)
                            ? [Mp(n, n.sort, { expr: 'datum' })]
                            : (0, o.kJ)(n.sort)
                            ? [tf(n, e, { expr: 'datum' })]
                            : [is(n, { expr: 'datum' })]
                        : [];
                }
                facetSortOrder(e) {
                    const { facet: t } = this,
                        n = t[e];
                    if (n) {
                        const { sort: e } = n;
                        return [
                            (zo(e) ? e.order : !(0, o.kJ)(e) && e) ||
                                'ascending',
                        ];
                    }
                    return [];
                }
                assembleLabelTitle() {
                    var e;
                    const { facet: t, config: n } = this;
                    if (t.facet) return pf(t.facet, 'facet', n);
                    const i = {
                        row: ['top', 'bottom'],
                        column: ['left', 'right'],
                    };
                    for (const r of sf)
                        if (t[r]) {
                            const o = rf(
                                'labelOrient',
                                null === (e = t[r]) || void 0 === e
                                    ? void 0
                                    : e.header,
                                n,
                                r
                            );
                            if (i[r].includes(o)) return pf(t[r], r, n);
                        }
                }
                assembleMarks() {
                    const { child: e } = this,
                        t = (function(e) {
                            const t = [],
                                n = zp(t);
                            for (const t of e.children)
                                n(t, {
                                    source: e.name,
                                    name: null,
                                    transform: [],
                                });
                            return t;
                        })(this.component.data.facetRoot),
                        n = e.assembleGroupEncodeEntry(!1),
                        i = this.assembleLabelTitle() || e.assembleTitle(),
                        r = e.assembleGroupStyle();
                    return [
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                {
                                                    name: this.getName('cell'),
                                                    type: 'group',
                                                },
                                                i ? { title: i } : {}
                                            ),
                                            r ? { style: r } : {}
                                        ),
                                        {
                                            from: {
                                                facet: this.assembleFacet(),
                                            },
                                            sort: {
                                                field: Ke.map(e =>
                                                    this.facetSortFields(e)
                                                ).flat(),
                                                order: Ke.map(e =>
                                                    this.facetSortOrder(e)
                                                ).flat(),
                                            },
                                        }
                                    ),
                                    t.length > 0 ? { data: t } : {}
                                ),
                                n ? { encode: { update: n } } : {}
                            ),
                            e.assembleGroup(
                                (function(e, t) {
                                    if (
                                        e.component.selection &&
                                        M(e.component.selection).length
                                    ) {
                                        const n = (0, o.m8)(e.getName('cell'));
                                        t.unshift({
                                            name: 'facet',
                                            value: {},
                                            on: [
                                                {
                                                    events: (0, gc.r)(
                                                        'mousemove',
                                                        'scope'
                                                    ),
                                                    update: `isTuple(facet) ? facet : group(${n}).datum`,
                                                },
                                            ],
                                        });
                                    }
                                    return yc(t);
                                })(this, [])
                            )
                        ),
                    ];
                }
                getMapping() {
                    return this.facet;
                }
            }
            function qp(e, t) {
                var n, i, r, o;
                for (const s of t) {
                    const t = s.data;
                    if (e.name && s.hasName() && e.name !== s.dataName)
                        continue;
                    const a =
                            null === (n = e.format) || void 0 === n
                                ? void 0
                                : n.mesh,
                        l =
                            null === (i = t.format) || void 0 === i
                                ? void 0
                                : i.feature;
                    if (a && l) continue;
                    const c =
                        null === (r = e.format) || void 0 === r
                            ? void 0
                            : r.feature;
                    if ((c || l) && c !== l) continue;
                    const u =
                        null === (o = t.format) || void 0 === o
                            ? void 0
                            : o.mesh;
                    if ((!a && !u) || a === u)
                        if (ac(e) && ac(t)) {
                            if (b(e.values, t.values)) return s;
                        } else if (sc(e) && sc(t)) {
                            if (e.url === t.url) return s;
                        } else if (lc(e) && e.name === s.dataName) return s;
                }
                return null;
            }
            function Rp(e) {
                var t, n, i, r, s, a, l, c, u, f;
                let d = (function(e, t) {
                    if (e.data || !e.parent) {
                        if (null === e.data) {
                            const e = new rd({ values: [] });
                            return t.push(e), e;
                        }
                        const n = qp(e.data, t);
                        if (n)
                            return (
                                cc(e.data) ||
                                    (n.data.format = P(
                                        {},
                                        e.data.format,
                                        n.data.format
                                    )),
                                !n.hasName() &&
                                    e.data.name &&
                                    (n.dataName = e.data.name),
                                n
                            );
                        {
                            const n = new rd(e.data);
                            return t.push(n), n;
                        }
                    }
                    return e.parent.component.data.facetRoot
                        ? e.parent.component.data.facetRoot
                        : e.parent.component.data.main;
                })(e, e.component.data.sources);
                const {
                        outputNodes: p,
                        outputNodeRefCounts: g,
                    } = e.component.data,
                    m = e.data,
                    h =
                        (m && (cc(m) || sc(m) || ac(m))) || !e.parent
                            ? new oc()
                            : e.parent.component.data.ancestorParse.clone();
                cc(m)
                    ? (uc(m)
                          ? (d = new id(d, m.sequence))
                          : dc(m) && (d = new nd(d, m.graticule)),
                      (h.parseNothing = !0))
                    : null ===
                          (null === (t = null == m ? void 0 : m.format) ||
                          void 0 === t
                              ? void 0
                              : t.parse) && (h.parseNothing = !0),
                    (d =
                        null !== (n = ed.makeExplicit(d, e, h)) && void 0 !== n
                            ? n
                            : d),
                    (d = new td(d));
                const b = e.parent && gp(e.parent);
                (fp(e) || dp(e)) &&
                    b &&
                    (d =
                        null !== (i = Vf.makeFromEncoding(d, e)) && void 0 !== i
                            ? i
                            : d),
                    e.transforms.length > 0 &&
                        (d = (function(e, t, n) {
                            var i, r;
                            let o = 0;
                            for (const s of t.transforms) {
                                let a, l;
                                if (Cl(s))
                                    (l = e = new ef(e, s)), (a = 'derived');
                                else if (xl(s)) {
                                    const r = Zf(s);
                                    (l = e =
                                        null !==
                                            (i = ed.makeWithAncestors(
                                                e,
                                                {},
                                                r,
                                                n
                                            )) && void 0 !== i
                                            ? i
                                            : e),
                                        (e = new Lu(e, t, s.filter));
                                } else if (El(s))
                                    (l = e = Vf.makeFromTransform(e, s, t)),
                                        (a = 'number');
                                else if (Tl(s))
                                    (a = 'date'),
                                        void 0 ===
                                            n.getWithExplicit(s.field).value &&
                                            ((e = new ed(e, { [s.field]: a })),
                                            n.set(s.field, a, !1)),
                                        (l = e = wc.makeFromTransform(e, s));
                                else if (Al(s))
                                    (l = e = Kf.makeFromTransform(e, s)),
                                        (a = 'number'),
                                        Cu(t) && (e = new td(e));
                                else if (jl(s))
                                    (l = e = kp.make(e, t, s, o++)),
                                        (a = 'derived');
                                else if (Fl(s))
                                    (l = e = new $d(e, s)), (a = 'number');
                                else if (zl(s))
                                    (l = e = new jd(e, s)), (a = 'number');
                                else if (Ml(s))
                                    (l = e = wd.makeFromTransform(e, s)),
                                        (a = 'derived');
                                else if (Ll(s))
                                    (l = e = new Op(e, s)), (a = 'derived');
                                else if (_l(s))
                                    (l = e = new yp(e, s)), (a = 'derived');
                                else if (wl(s))
                                    (l = e = new Pp(e, s)), (a = 'derived');
                                else if (Pl(s)) e = new Fp(e, s);
                                else if (Nl(s))
                                    (l = e = wp.makeFromTransform(e, s)),
                                        (a = 'derived');
                                else if ($l(s))
                                    (l = e = new bp(e, s)), (a = 'derived');
                                else if (kl(s))
                                    (l = e = new Sp(e, s)), (a = 'derived');
                                else if (Sl(s))
                                    (l = e = new Dp(e, s)), (a = 'derived');
                                else {
                                    if (!Dl(s)) {
                                        $i(
                                            `Ignoring an invalid transform: ${j(
                                                s
                                            )}.`
                                        );
                                        continue;
                                    }
                                    (l = e = new $p(e, s)), (a = 'derived');
                                }
                                if (l && void 0 !== a)
                                    for (const e of null !==
                                        (r = l.producedFields()) && void 0 !== r
                                        ? r
                                        : [])
                                        n.set(e, a, !1);
                            }
                            return e;
                        })(d, e, h));
                const v = (function(e) {
                        const t = {};
                        if (fp(e) && e.component.selection)
                            for (const n of M(e.component.selection)) {
                                const i = e.component.selection[n];
                                for (const e of i.project.items)
                                    !e.channel &&
                                        Y(e.field) > 1 &&
                                        (t[e.field] = 'flatten');
                            }
                        return t;
                    })(e),
                    y = (function(e) {
                        const t = {};
                        function n(e) {
                            var n;
                            ys(e)
                                ? (t[e.field] = 'date')
                                : 'quantitative' === e.type &&
                                  ((n = e.aggregate),
                                  (0, o.HD)(n) && k(['min', 'max'], n))
                                ? (t[e.field] = 'number')
                                : Y(e.field) > 1
                                ? e.field in t || (t[e.field] = 'flatten')
                                : Qo(e) &&
                                  zo(e.sort) &&
                                  Y(e.sort.field) > 1 &&
                                  (e.sort.field in t ||
                                      (t[e.sort.field] = 'flatten'));
                        }
                        if (
                            ((fp(e) || dp(e)) &&
                                e.forEachFieldDef((t, i) => {
                                    if (Ko(t)) n(t);
                                    else {
                                        const r = ut(i),
                                            o = e.fieldDef(r);
                                        n(
                                            Object.assign(
                                                Object.assign({}, t),
                                                { type: o.type }
                                            )
                                        );
                                    }
                                }),
                            fp(e))
                        ) {
                            const { mark: n, markDef: i, encoding: r } = e;
                            if (Qr(n) && !e.encoding.order) {
                                const e =
                                    r['horizontal' === i.orient ? 'y' : 'x'];
                                Ho(e) &&
                                    'quantitative' === e.type &&
                                    !(e.field in t) &&
                                    (t[e.field] = 'number');
                            }
                        }
                        return t;
                    })(e);
                (d =
                    null !==
                        (r = ed.makeWithAncestors(
                            d,
                            {},
                            Object.assign(Object.assign({}, v), y),
                            h
                        )) && void 0 !== r
                        ? r
                        : d),
                    fp(e) && ((d = xp.parseAll(d, e)), (d = jp.parseAll(d, e))),
                    (fp(e) || dp(e)) &&
                        (b ||
                            (d =
                                null !== (s = Vf.makeFromEncoding(d, e)) &&
                                void 0 !== s
                                    ? s
                                    : d),
                        (d =
                            null !== (a = wc.makeFromEncoding(d, e)) &&
                            void 0 !== a
                                ? a
                                : d),
                        (d = ef.parseAllForSortIndex(d, e)));
                const O = e.getDataName(pc.Raw),
                    x = new xc(d, O, pc.Raw, g);
                if (((p[O] = x), (d = x), fp(e))) {
                    const t = Kf.makeFromEncoding(d, e);
                    t && ((d = t), Cu(e) && (d = new td(d))),
                        (d =
                            null !== (l = wp.makeFromEncoding(d, e)) &&
                            void 0 !== l
                                ? l
                                : d),
                        (d =
                            null !== (c = wd.makeFromEncoding(d, e)) &&
                            void 0 !== c
                                ? c
                                : d);
                }
                fp(e) &&
                    (d = null !== (u = vp.make(d, e)) && void 0 !== u ? u : d);
                const w = e.getDataName(pc.Main),
                    $ = new xc(d, w, pc.Main, g);
                (p[w] = $),
                    (d = $),
                    fp(e) &&
                        (function(e, t) {
                            var n;
                            for (const [i, r] of q(
                                null !== (n = e.component.selection) &&
                                    void 0 !== n
                                    ? n
                                    : {}
                            )) {
                                const n = e.getName(`lookup_${i}`);
                                e.component.data.outputNodes[
                                    n
                                ] = r.materialized = new xc(
                                    new Lu(t, e, { param: i }),
                                    n,
                                    pc.Lookup,
                                    e.component.data.outputNodeRefCounts
                                );
                            }
                        })(e, $);
                let S = null;
                if (dp(e)) {
                    const t = e.getName('facet');
                    (d =
                        null !==
                            (f = (function(e, t) {
                                const { row: n, column: i } = t;
                                if (n && i) {
                                    let t = null;
                                    for (const r of [n, i])
                                        if (zo(r.sort)) {
                                            const {
                                                field: n,
                                                op: i = So,
                                            } = r.sort;
                                            e = t = new jd(e, {
                                                joinaggregate: [
                                                    {
                                                        op: i,
                                                        field: n,
                                                        as: Mp(r, r.sort, {
                                                            forAs: !0,
                                                        }),
                                                    },
                                                ],
                                                groupby: [is(r)],
                                            });
                                        }
                                    return t;
                                }
                                return null;
                            })(d, e.facet)) && void 0 !== f
                            ? f
                            : d),
                        (S = new Yf(d, e, t, $.getSource())),
                        (p[t] = S);
                }
                return Object.assign(Object.assign({}, e.component.data), {
                    outputNodes: p,
                    outputNodeRefCounts: g,
                    raw: x,
                    main: $,
                    facetRoot: S,
                    ancestorParse: h,
                });
            }
            class Wp extends mp {
                constructor(e, t, n, i) {
                    var r, o, s, a;
                    super(e, 'concat', t, n, i, e.resolve),
                        ('shared' !==
                            (null ===
                                (o =
                                    null === (r = e.resolve) || void 0 === r
                                        ? void 0
                                        : r.axis) || void 0 === o
                                ? void 0
                                : o.x) &&
                            'shared' !==
                                (null ===
                                    (a =
                                        null === (s = e.resolve) || void 0 === s
                                            ? void 0
                                            : s.axis) || void 0 === a
                                    ? void 0
                                    : a.y)) ||
                            $i(
                                'Axes cannot be shared in concatenated or repeated views yet (https://github.com/vega/vega-lite/issues/2415).'
                            ),
                        (this.children = this.getChildren(e).map((e, t) =>
                            og(e, this, this.getName(`concat_${t}`), void 0, i)
                        ));
                }
                parseData() {
                    this.component.data = Rp(this);
                    for (const e of this.children) e.parseData();
                }
                parseSelections() {
                    this.component.selection = {};
                    for (const e of this.children) {
                        e.parseSelections();
                        for (const t of M(e.component.selection))
                            this.component.selection[t] =
                                e.component.selection[t];
                    }
                }
                parseMarkGroup() {
                    for (const e of this.children) e.parseMarkGroup();
                }
                parseAxesAndHeaders() {
                    for (const e of this.children) e.parseAxesAndHeaders();
                }
                getChildren(e) {
                    return Fa(e) ? e.vconcat : za(e) ? e.hconcat : e.concat;
                }
                parseLayoutSize() {
                    !(function(e) {
                        Np(e);
                        const t =
                                1 === e.layout.columns ? 'width' : 'childWidth',
                            n =
                                void 0 === e.layout.columns
                                    ? 'height'
                                    : 'childHeight';
                        Tp(e, t), Tp(e, n);
                    })(this);
                }
                parseAxisGroup() {
                    return null;
                }
                assembleSelectionTopLevelSignals(e) {
                    return this.children.reduce(
                        (e, t) => t.assembleSelectionTopLevelSignals(e),
                        e
                    );
                }
                assembleSignals() {
                    return this.children.forEach(e => e.assembleSignals()), [];
                }
                assembleLayoutSignals() {
                    const e = vf(this);
                    for (const t of this.children)
                        e.push(...t.assembleLayoutSignals());
                    return e;
                }
                assembleSelectionData(e) {
                    return this.children.reduce(
                        (e, t) => t.assembleSelectionData(e),
                        e
                    );
                }
                assembleMarks() {
                    return this.children.map(e => {
                        const t = e.assembleTitle(),
                            n = e.assembleGroupStyle(),
                            i = e.assembleGroupEncodeEntry(!1);
                        return Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        {
                                            type: 'group',
                                            name: e.getName('group'),
                                        },
                                        t ? { title: t } : {}
                                    ),
                                    n ? { style: n } : {}
                                ),
                                i ? { encode: { update: i } } : {}
                            ),
                            e.assembleGroup()
                        );
                    });
                }
                assembleGroupStyle() {}
                assembleDefaultLayout() {
                    const e = this.layout.columns;
                    return Object.assign(
                        Object.assign({}, null != e ? { columns: e } : {}),
                        { bounds: 'full', align: 'each' }
                    );
                }
            }
            const Ip = Object.assign(
                    Object.assign({ disable: 1, gridScale: 1, scale: 1 }, Ds),
                    { labelExpr: 1, encode: 1 }
                ),
                Up = M(Ip);
            class Hp extends Zl {
                constructor(e = {}, t = {}, n = !1) {
                    super(),
                        (this.explicit = e),
                        (this.implicit = t),
                        (this.mainExtracted = n);
                }
                clone() {
                    return new Hp(
                        v(this.explicit),
                        v(this.implicit),
                        this.mainExtracted
                    );
                }
                hasAxisPart(e) {
                    return !(
                        'axis' !== e &&
                        ('grid' === e || 'title' === e
                            ? !this.get(e)
                            : !1 === (t = this.get(e)) || null === t)
                    );
                    var t;
                }
                hasOrientSignalRef() {
                    return $n(this.explicit.orient);
                }
            }
            const Bp = {
                bottom: 'top',
                top: 'bottom',
                left: 'right',
                right: 'left',
            };
            function Jp(e, t) {
                if (!e) return t.map(e => e.clone());
                {
                    if (e.length !== t.length) return;
                    const n = e.length;
                    for (let i = 0; i < n; i++) {
                        const n = e[i],
                            r = t[i];
                        if (!!n != !!r) return;
                        if (n && r) {
                            const t = n.getWithExplicit('orient'),
                                o = r.getWithExplicit('orient');
                            if (t.explicit && o.explicit && t.value !== o.value)
                                return;
                            e[i] = Gp(n, r);
                        }
                    }
                }
                return e;
            }
            function Gp(e, t) {
                for (const n of Up) {
                    const i = rc(
                        e.getWithExplicit(n),
                        t.getWithExplicit(n),
                        n,
                        'axis',
                        (e, t) => {
                            switch (n) {
                                case 'title':
                                    return Bn(e, t);
                                case 'gridScale':
                                    return {
                                        explicit: e.explicit,
                                        value: Q(e.value, t.value),
                                    };
                            }
                            return ic(e, t, n, 'axis');
                        }
                    );
                    e.setWithExplicit(n, i);
                }
                return e;
            }
            function Xp(e, t, n, i, r) {
                if ('disable' === t) return void 0 !== n;
                switch (((n = n || {}), t)) {
                    case 'titleAngle':
                    case 'labelAngle':
                        return (
                            e ===
                            ($n(n.labelAngle) ? n.labelAngle : re(n.labelAngle))
                        );
                    case 'values':
                        return !!n.values;
                    case 'encode':
                        return !!n.encoding || !!n.labelAngle;
                    case 'title':
                        if (e === Zu(i, r)) return !0;
                }
                return e === n[t];
            }
            const Vp = new Set([
                'grid',
                'translate',
                'format',
                'formatType',
                'orient',
                'labelExpr',
                'tickCount',
                'position',
                'tickMinStep',
            ]);
            function Kp(e, t) {
                var n, i, r;
                let o = t.axis(e);
                const s = new Hp(),
                    a = ps(t.encoding[e]),
                    { mark: l, config: c } = t,
                    u =
                        (null == o ? void 0 : o.orient) ||
                        (null === (n = c['x' === e ? 'axisX' : 'axisY']) ||
                        void 0 === n
                            ? void 0
                            : n.orient) ||
                        (null === (i = c.axis) || void 0 === i
                            ? void 0
                            : i.orient) ||
                        (function(e) {
                            return 'x' === e ? 'bottom' : 'left';
                        })(e),
                    f = t.getScaleComponent(e).get('type'),
                    d = (function(e, t, n, i) {
                        const r =
                                'band' === t
                                    ? ['axisDiscrete', 'axisBand']
                                    : 'point' === t
                                    ? ['axisDiscrete', 'axisPoint']
                                    : br(t)
                                    ? ['axisQuantitative']
                                    : 'time' === t || 'utc' === t
                                    ? ['axisTemporal']
                                    : [],
                            o = 'x' === e ? 'axisX' : 'axisY',
                            s = $n(n) ? 'axisOrient' : `axis${H(n)}`,
                            a = [...r, ...r.map(e => o + e.substr(4))],
                            l = ['axis', s, o];
                        return {
                            vlOnlyAxisConfig: Ju(a, i, e, n),
                            vgAxisConfig: Ju(l, i, e, n),
                            axisConfigStyle: Gu([...l, ...a], i),
                        };
                    })(e, f, u, t.config),
                    p =
                        void 0 !== o
                            ? !o
                            : Xu(
                                  'disable',
                                  c.style,
                                  null == o ? void 0 : o.style,
                                  d
                              ).configValue;
                if ((s.set('disable', p, void 0 !== o), p)) return s;
                o = o || {};
                const g = (function(e, t, n, i, r) {
                        const o = null == t ? void 0 : t.labelAngle;
                        if (void 0 !== o) return $n(o) ? o : re(o);
                        {
                            const { configValue: o } = Xu(
                                'labelAngle',
                                i,
                                null == t ? void 0 : t.style,
                                r
                            );
                            return void 0 !== o
                                ? re(o)
                                : n !== ue ||
                                  !k([or, ir], e.type) ||
                                  (Ho(e) && e.timeUnit)
                                ? void 0
                                : 270;
                        }
                    })(a, o, e, c.style, d),
                    m = {
                        fieldOrDatumDef: a,
                        axis: o,
                        channel: e,
                        model: t,
                        scaleType: f,
                        orient: u,
                        labelAngle: g,
                        mark: l,
                        config: c,
                    };
                for (const n of Up) {
                    const i = n in Vu ? Vu[n](m) : Fs(n) ? o[n] : void 0,
                        r = void 0 !== i,
                        a = Xp(i, n, o, t, e);
                    if (r && a) s.set(n, i, a);
                    else {
                        const { configValue: e, configFrom: t } =
                                Fs(n) && 'values' !== n
                                    ? Xu(n, c.style, o.style, d)
                                    : {},
                            l = void 0 !== e;
                        r && !l
                            ? s.set(n, i, a)
                            : ('vgAxisConfig' !== t ||
                                  (Vp.has(n) && l) ||
                                  $s(e) ||
                                  $n(e)) &&
                              s.set(n, e, !1);
                    }
                }
                const h = null !== (r = o.encoding) && void 0 !== r ? r : {},
                    b = ks.reduce((n, i) => {
                        var r;
                        if (!s.hasAxisPart(i)) return n;
                        const o = wf(
                                null !== (r = h[i]) && void 0 !== r ? r : {},
                                t
                            ),
                            a =
                                'labels' === i
                                    ? (function(e, t, n) {
                                          var i;
                                          const { encoding: r, config: o } = e,
                                              s =
                                                  null !== (i = ps(r[t])) &&
                                                  void 0 !== i
                                                      ? i
                                                      : ps(r[dt(t)]),
                                              a = e.axis(t) || {},
                                              { format: l, formatType: c } = a;
                                          if (mo(c))
                                              return Object.assign(
                                                  {
                                                      text: yo({
                                                          fieldOrDatumDef: s,
                                                          field: 'datum.value',
                                                          format: l,
                                                          formatType: c,
                                                          config: o,
                                                      }),
                                                  },
                                                  n
                                              );
                                          if (
                                              void 0 === l &&
                                              void 0 === c &&
                                              o.customFormatTypes
                                          ) {
                                              if ('quantitative' === Bo(s)) {
                                                  if (
                                                      Zo(s) &&
                                                      'normalize' === s.stack &&
                                                      o.normalizedNumberFormatType
                                                  )
                                                      return Object.assign(
                                                          {
                                                              text: yo({
                                                                  fieldOrDatumDef: s,
                                                                  field:
                                                                      'datum.value',
                                                                  format:
                                                                      o.normalizedNumberFormat,
                                                                  formatType:
                                                                      o.normalizedNumberFormatType,
                                                                  config: o,
                                                              }),
                                                          },
                                                          n
                                                      );
                                                  if (o.numberFormatType)
                                                      return Object.assign(
                                                          {
                                                              text: yo({
                                                                  fieldOrDatumDef: s,
                                                                  field:
                                                                      'datum.value',
                                                                  format:
                                                                      o.numberFormat,
                                                                  formatType:
                                                                      o.numberFormatType,
                                                                  config: o,
                                                              }),
                                                          },
                                                          n
                                                      );
                                              }
                                              if (
                                                  'temporal' === Bo(s) &&
                                                  o.timeFormatType &&
                                                  Ho(s) &&
                                                  !s.timeUnit
                                              )
                                                  return Object.assign(
                                                      {
                                                          text: yo({
                                                              fieldOrDatumDef: s,
                                                              field:
                                                                  'datum.value',
                                                              format:
                                                                  o.timeFormat,
                                                              formatType:
                                                                  o.timeFormatType,
                                                              config: o,
                                                          }),
                                                      },
                                                      n
                                                  );
                                          }
                                          return n;
                                      })(t, e, o)
                                    : o;
                        return (
                            void 0 === a || A(a) || (n[i] = { update: a }), n
                        );
                    }, {});
                return (
                    A(b) ||
                        s.set(
                            'encode',
                            b,
                            !!o.encoding || void 0 !== o.labelAngle
                        ),
                    s
                );
            }
            function Yp(e, t) {
                const { config: n } = e;
                return Object.assign(
                    Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        {},
                                        au(e, {
                                            align: 'ignore',
                                            baseline: 'ignore',
                                            color: 'include',
                                            size: 'include',
                                            orient: 'ignore',
                                            theta: 'ignore',
                                        })
                                    ),
                                    Xc('x', e, { defaultPos: 'mid' })
                                ),
                                Xc('y', e, { defaultPos: 'mid' })
                            ),
                            Bc('size', e)
                        ),
                        Bc('angle', e)
                    ),
                    (function(e, t, n) {
                        return n ? { shape: { value: n } } : Bc('shape', e);
                    })(e, 0, t)
                );
            }
            function Qp(e) {
                var t;
                const { config: n, markDef: i } = e,
                    { orient: r } = i,
                    s = 'horizontal' === r ? 'width' : 'height',
                    a = e.getScaleComponent('horizontal' === r ? 'x' : 'y'),
                    l =
                        null !== (t = Ln('size', i, n, { vgChannel: s })) &&
                        void 0 !== t
                            ? t
                            : n.tick.bandSize;
                if (void 0 !== l) return l;
                {
                    const e = a ? a.get('range') : void 0;
                    return e && kn(e) && (0, o.hj)(e.step)
                        ? (3 * e.step) / 4
                        : (3 * Aa(n.view, s)) / 4;
                }
            }
            const Zp = {
                arc: {
                    vgMark: 'arc',
                    encodeEntry: e =>
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            {},
                                            au(e, {
                                                align: 'ignore',
                                                baseline: 'ignore',
                                                color: 'include',
                                                size: 'ignore',
                                                orient: 'ignore',
                                                theta: 'ignore',
                                            })
                                        ),
                                        Xc('x', e, { defaultPos: 'mid' })
                                    ),
                                    Xc('y', e, { defaultPos: 'mid' })
                                ),
                                nu(e, 'radius')
                            ),
                            nu(e, 'theta')
                        ),
                },
                area: {
                    vgMark: 'area',
                    encodeEntry: e =>
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        {},
                                        au(e, {
                                            align: 'ignore',
                                            baseline: 'ignore',
                                            color: 'include',
                                            orient: 'include',
                                            size: 'ignore',
                                            theta: 'ignore',
                                        })
                                    ),
                                    Zc('x', e, {
                                        defaultPos: 'zeroOrMin',
                                        defaultPos2: 'zeroOrMin',
                                        range:
                                            'horizontal' === e.markDef.orient,
                                    })
                                ),
                                Zc('y', e, {
                                    defaultPos: 'zeroOrMin',
                                    defaultPos2: 'zeroOrMin',
                                    range: 'vertical' === e.markDef.orient,
                                })
                            ),
                            cu(e)
                        ),
                },
                bar: {
                    vgMark: 'rect',
                    encodeEntry: e =>
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    {},
                                    au(e, {
                                        align: 'ignore',
                                        baseline: 'ignore',
                                        color: 'include',
                                        orient: 'ignore',
                                        size: 'ignore',
                                        theta: 'ignore',
                                    })
                                ),
                                nu(e, 'x')
                            ),
                            nu(e, 'y')
                        ),
                },
                circle: { vgMark: 'symbol', encodeEntry: e => Yp(e, 'circle') },
                geoshape: {
                    vgMark: 'shape',
                    encodeEntry: e =>
                        Object.assign(
                            {},
                            au(e, {
                                align: 'ignore',
                                baseline: 'ignore',
                                color: 'include',
                                size: 'ignore',
                                orient: 'ignore',
                                theta: 'ignore',
                            })
                        ),
                    postEncodingTransform: e => {
                        const { encoding: t } = e,
                            n = t.shape;
                        return [
                            Object.assign(
                                {
                                    type: 'geoshape',
                                    projection: e.projectionName(),
                                },
                                n && Ho(n) && n.type === sr
                                    ? { field: is(n, { expr: 'datum' }) }
                                    : {}
                            ),
                        ];
                    },
                },
                image: {
                    vgMark: 'image',
                    encodeEntry: e =>
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        {},
                                        au(e, {
                                            align: 'ignore',
                                            baseline: 'ignore',
                                            color: 'ignore',
                                            orient: 'ignore',
                                            size: 'ignore',
                                            theta: 'ignore',
                                        })
                                    ),
                                    nu(e, 'x')
                                ),
                                nu(e, 'y')
                            ),
                            Rc(e, 'url')
                        ),
                },
                line: {
                    vgMark: 'line',
                    encodeEntry: e =>
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            {},
                                            au(e, {
                                                align: 'ignore',
                                                baseline: 'ignore',
                                                color: 'include',
                                                size: 'ignore',
                                                orient: 'ignore',
                                                theta: 'ignore',
                                            })
                                        ),
                                        Xc('x', e, { defaultPos: 'mid' })
                                    ),
                                    Xc('y', e, { defaultPos: 'mid' })
                                ),
                                Bc('size', e, { vgChannel: 'strokeWidth' })
                            ),
                            cu(e)
                        ),
                },
                point: { vgMark: 'symbol', encodeEntry: e => Yp(e) },
                rect: {
                    vgMark: 'rect',
                    encodeEntry: e =>
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    {},
                                    au(e, {
                                        align: 'ignore',
                                        baseline: 'ignore',
                                        color: 'include',
                                        orient: 'ignore',
                                        size: 'ignore',
                                        theta: 'ignore',
                                    })
                                ),
                                nu(e, 'x')
                            ),
                            nu(e, 'y')
                        ),
                },
                rule: {
                    vgMark: 'rule',
                    encodeEntry: e => {
                        const { markDef: t } = e,
                            n = t.orient;
                        return e.encoding.x ||
                            e.encoding.y ||
                            e.encoding.latitude ||
                            e.encoding.longitude
                            ? Object.assign(
                                  Object.assign(
                                      Object.assign(
                                          Object.assign(
                                              {},
                                              au(e, {
                                                  align: 'ignore',
                                                  baseline: 'ignore',
                                                  color: 'include',
                                                  orient: 'ignore',
                                                  size: 'ignore',
                                                  theta: 'ignore',
                                              })
                                          ),
                                          Zc('x', e, {
                                              defaultPos:
                                                  'horizontal' === n
                                                      ? 'zeroOrMax'
                                                      : 'mid',
                                              defaultPos2: 'zeroOrMin',
                                              range: 'vertical' !== n,
                                          })
                                      ),
                                      Zc('y', e, {
                                          defaultPos:
                                              'vertical' === n
                                                  ? 'zeroOrMax'
                                                  : 'mid',
                                          defaultPos2: 'zeroOrMin',
                                          range: 'horizontal' !== n,
                                      })
                                  ),
                                  Bc('size', e, { vgChannel: 'strokeWidth' })
                              )
                            : {};
                    },
                },
                square: { vgMark: 'symbol', encodeEntry: e => Yp(e, 'square') },
                text: {
                    vgMark: 'text',
                    encodeEntry: e => {
                        const { config: t, encoding: n } = e;
                        return Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                Object.assign(
                                                    Object.assign(
                                                        Object.assign(
                                                            Object.assign(
                                                                {},
                                                                au(e, {
                                                                    align:
                                                                        'include',
                                                                    baseline:
                                                                        'include',
                                                                    color:
                                                                        'include',
                                                                    size:
                                                                        'ignore',
                                                                    orient:
                                                                        'ignore',
                                                                    theta:
                                                                        'include',
                                                                })
                                                            ),
                                                            Xc('x', e, {
                                                                defaultPos:
                                                                    'mid',
                                                            })
                                                        ),
                                                        Xc('y', e, {
                                                            defaultPos: 'mid',
                                                        })
                                                    ),
                                                    Rc(e)
                                                ),
                                                Bc('size', e, {
                                                    vgChannel: 'fontSize',
                                                })
                                            ),
                                            Bc('angle', e)
                                        ),
                                        uu(
                                            'align',
                                            (function(e, t, n) {
                                                if (
                                                    void 0 === Ln('align', e, n)
                                                )
                                                    return 'center';
                                            })(e.markDef, 0, t)
                                        )
                                    ),
                                    uu(
                                        'baseline',
                                        (function(e, t, n) {
                                            if (void 0 === Ln('baseline', e, n))
                                                return 'middle';
                                        })(e.markDef, 0, t)
                                    )
                                ),
                                Xc('radius', e, { defaultPos: null })
                            ),
                            Xc('theta', e, { defaultPos: null })
                        );
                    },
                },
                tick: {
                    vgMark: 'rect',
                    encodeEntry: e => {
                        const { config: t, markDef: n } = e,
                            i = n.orient,
                            r = 'horizontal' === i ? 'width' : 'height',
                            o = 'horizontal' === i ? 'height' : 'width';
                        return Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            {},
                                            au(e, {
                                                align: 'ignore',
                                                baseline: 'ignore',
                                                color: 'include',
                                                orient: 'ignore',
                                                size: 'ignore',
                                                theta: 'ignore',
                                            })
                                        ),
                                        Xc('x', e, {
                                            defaultPos: 'mid',
                                            vgChannel: 'xc',
                                        })
                                    ),
                                    Xc('y', e, {
                                        defaultPos: 'mid',
                                        vgChannel: 'yc',
                                    })
                                ),
                                Bc('size', e, {
                                    defaultValue: Qp(e),
                                    vgChannel: r,
                                })
                            ),
                            { [o]: Nn(Ln('thickness', n, t)) }
                        );
                    },
                },
                trail: {
                    vgMark: 'trail',
                    encodeEntry: e =>
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            {},
                                            au(e, {
                                                align: 'ignore',
                                                baseline: 'ignore',
                                                color: 'include',
                                                size: 'include',
                                                orient: 'ignore',
                                                theta: 'ignore',
                                            })
                                        ),
                                        Xc('x', e, { defaultPos: 'mid' })
                                    ),
                                    Xc('y', e, { defaultPos: 'mid' })
                                ),
                                Bc('size', e)
                            ),
                            cu(e)
                        ),
                },
            };
            const eg = 'faceted_path_',
                tg = 'stack_group_';
            function ng(e, t = { fromPrefix: '' }) {
                const { mark: n, markDef: i, encoding: r, config: s } = e,
                    a = Q(
                        i.clip,
                        (function(e) {
                            const t = e.getScaleComponent('x'),
                                n = e.getScaleComponent('y');
                            return (
                                !(
                                    !(null == t
                                        ? void 0
                                        : t.get('selectionExtent')) &&
                                    !(null == n
                                        ? void 0
                                        : n.get('selectionExtent'))
                                ) || void 0
                            );
                        })(e),
                        (function(e) {
                            const t = e.component.projection;
                            return !(!t || t.isFit) || void 0;
                        })(e)
                    ),
                    l = Mn(i),
                    c = r.key,
                    u = (function(e) {
                        var t;
                        const {
                                encoding: n,
                                stack: i,
                                mark: r,
                                markDef: s,
                                config: a,
                            } = e,
                            l = n.order;
                        if (
                            !(
                                (!(0, o.kJ)(l) && Yo(l) && $(l.value)) ||
                                (!l && $(Ln('order', s, a)))
                            )
                        ) {
                            if (((0, o.kJ)(l) || Ho(l)) && !i)
                                return In(l, { expr: 'datum' });
                            if (Qr(r)) {
                                const i = 'horizontal' === s.orient ? 'y' : 'x',
                                    r = n[i];
                                if (Ho(r)) {
                                    const n = r.sort;
                                    return (0, o.kJ)(n)
                                        ? {
                                              field: is(r, {
                                                  prefix: i,
                                                  suffix: 'sort_index',
                                                  expr: 'datum',
                                              }),
                                          }
                                        : zo(n)
                                        ? {
                                              field: is(
                                                  {
                                                      aggregate: As(e.encoding)
                                                          ? n.op
                                                          : void 0,
                                                      field: n.field,
                                                  },
                                                  { expr: 'datum' }
                                              ),
                                          }
                                        : Fo(n)
                                        ? {
                                              field: is(
                                                  e.fieldDef(n.encoding),
                                                  { expr: 'datum' }
                                              ),
                                              order: n.order,
                                          }
                                        : null === n
                                        ? void 0
                                        : {
                                              field: is(r, {
                                                  binSuffix: (null ===
                                                      (t = e.stack) ||
                                                  void 0 === t
                                                    ? void 0
                                                    : t.impute)
                                                      ? 'mid'
                                                      : void 0,
                                                  expr: 'datum',
                                              }),
                                          };
                                }
                            }
                        }
                    })(e),
                    f = (function(e) {
                        if (!e.component.selection) return null;
                        const t = M(e.component.selection).length;
                        let n = t,
                            i = e.parent;
                        for (; i && 0 === n; )
                            (n = M(i.component.selection).length),
                                (i = i.parent);
                        return n
                            ? { interactive: t > 0 || !!e.encoding.tooltip }
                            : null;
                    })(e),
                    d = Ln('aria', i, s),
                    p = Zp[n].postEncodingTransform
                        ? Zp[n].postEncodingTransform(e)
                        : null;
                return [
                    Object.assign(
                        Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                Object.assign(
                                                    {
                                                        name: e.getName(
                                                            'marks'
                                                        ),
                                                        type: Zp[n].vgMark,
                                                    },
                                                    a ? { clip: !0 } : {}
                                                ),
                                                l ? { style: l } : {}
                                            ),
                                            c ? { key: c.field } : {}
                                        ),
                                        u ? { sort: u } : {}
                                    ),
                                    f || {}
                                ),
                                !1 === d ? { aria: d } : {}
                            ),
                            {
                                from: {
                                    data:
                                        t.fromPrefix +
                                        e.requestDataName(pc.Main),
                                },
                                encode: { update: Zp[n].encodeEntry(e) },
                            }
                        ),
                        p ? { transform: p } : {}
                    ),
                ];
            }
            class ig extends hp {
                constructor(e, t, n, i = {}, r) {
                    var s;
                    super(e, 'unit', t, n, r, void 0, Ea(e) ? e.view : void 0),
                        (this.specifiedScales = {}),
                        (this.specifiedAxes = {}),
                        (this.specifiedLegends = {}),
                        (this.specifiedProjection = {}),
                        (this.selection = []),
                        (this.children = []);
                    const a = to(e.mark)
                            ? Object.assign({}, e.mark)
                            : { type: e.mark },
                        l = a.type;
                    void 0 === a.filled &&
                        (a.filled = (function(e, t, { graticule: n }) {
                            if (n) return !1;
                            const i = qn('filled', e, t),
                                r = e.type;
                            return Q(i, r !== Ur && r !== Ir && r !== Br);
                        })(a, r, { graticule: e.data && dc(e.data) }));
                    const c = (this.encoding = (function(e, t, n, i) {
                        const r = {};
                        for (const t of M(e))
                            at(t) ||
                                $i(
                                    `${(s = t)}-encoding is dropped as ${s} is not a valid encoding channel.`
                                );
                        var s;
                        for (let s of ht) {
                            if (!e[s]) continue;
                            const a = e[s];
                            if (Rt(s)) {
                                const e = mt(s),
                                    t = r[e];
                                if (Ho(t)) {
                                    if (er(t.type) && Ho(a)) {
                                        $i(ii(e));
                                        continue;
                                    }
                                } else (s = e), $i(ri(e));
                            }
                            if (
                                ('angle' !== s ||
                                    'arc' !== t ||
                                    e.theta ||
                                    ($i(
                                        'Arc marks uses theta channel rather than angle, replacing angle with theta.'
                                    ),
                                    (s = ve)),
                                Ls(e, s, t))
                            ) {
                                if (s === Pe && 'line' === t) {
                                    const t = ds(e[s]);
                                    if (null == t ? void 0 : t.aggregate) {
                                        $i(
                                            'Line marks cannot encode size with a non-groupby field. You may want to use trail marks instead.'
                                        );
                                        continue;
                                    }
                                }
                                if (
                                    s === $e &&
                                    (n ? 'fill' in e : 'stroke' in e)
                                )
                                    $i(
                                        si('encoding', {
                                            fill: 'fill' in e,
                                            stroke: 'stroke' in e,
                                        })
                                    );
                                else if (
                                    s === Me ||
                                    (s === Ae && !(0, o.kJ)(a) && !Yo(a)) ||
                                    (s === qe && (0, o.kJ)(a))
                                )
                                    a &&
                                        (r[s] = (0, o.IX)(a).reduce(
                                            (e, t) => (
                                                Ho(t)
                                                    ? e.push(hs(t, s))
                                                    : $i(ai(t, s)),
                                                e
                                            ),
                                            []
                                        ));
                                else {
                                    if (s === qe && null === a) r[s] = null;
                                    else if (
                                        !(
                                            Ho(a) ||
                                            Jo(a) ||
                                            Yo(a) ||
                                            Wo(a) ||
                                            $n(a)
                                        )
                                    ) {
                                        $i(ai(a, s));
                                        continue;
                                    }
                                    r[s] = gs(a, s, i);
                                }
                            } else $i(li(s, t));
                        }
                        return r;
                    })(e.encoding || {}, l, a.filled, r));
                    (this.markDef = (function(e, t, n) {
                        const i = xn(e),
                            r = Ln('orient', i, n);
                        if (
                            ((i.orient = (function(e, t, n) {
                                switch (e) {
                                    case Ur:
                                    case Vr:
                                    case Kr:
                                    case Jr:
                                    case Hr:
                                    case Wr:
                                        return;
                                }
                                const { x: i, y: r, x2: o, y2: s } = t;
                                switch (e) {
                                    case Rr:
                                        if (
                                            Ho(i) &&
                                            (hn(i.bin) ||
                                                (Ho(r) &&
                                                    r.aggregate &&
                                                    !i.aggregate))
                                        )
                                            return 'vertical';
                                        if (
                                            Ho(r) &&
                                            (hn(r.bin) ||
                                                (Ho(i) &&
                                                    i.aggregate &&
                                                    !r.aggregate))
                                        )
                                            return 'horizontal';
                                        if (s || o) {
                                            if (n) return n;
                                            if (!o)
                                                return ((Ho(i) &&
                                                    i.type === nr &&
                                                    !mn(i.bin)) ||
                                                    Xo(i)) &&
                                                    Ho(r) &&
                                                    hn(r.bin)
                                                    ? 'horizontal'
                                                    : 'vertical';
                                            if (!s)
                                                return ((Ho(r) &&
                                                    r.type === nr &&
                                                    !mn(r.bin)) ||
                                                    Xo(r)) &&
                                                    Ho(i) &&
                                                    hn(i.bin)
                                                    ? 'vertical'
                                                    : 'horizontal';
                                        }
                                    case Br:
                                        if (
                                            o &&
                                            (!Ho(i) || !hn(i.bin)) &&
                                            s &&
                                            (!Ho(r) || !hn(r.bin))
                                        )
                                            return;
                                    case qr:
                                        if (s)
                                            return Ho(r) && hn(r.bin)
                                                ? 'horizontal'
                                                : 'vertical';
                                        if (o)
                                            return Ho(i) && hn(i.bin)
                                                ? 'vertical'
                                                : 'horizontal';
                                        if (e === Br) {
                                            if (i && !r) return 'vertical';
                                            if (r && !i) return 'horizontal';
                                        }
                                    case Ir:
                                    case Gr: {
                                        const t = Go(i),
                                            o = Go(r);
                                        if (n) return n;
                                        if (t && !o)
                                            return 'tick' !== e
                                                ? 'horizontal'
                                                : 'vertical';
                                        if (!t && o)
                                            return 'tick' !== e
                                                ? 'vertical'
                                                : 'horizontal';
                                        if (t && o) {
                                            const t = i,
                                                n = r,
                                                o = t.type === rr,
                                                s = n.type === rr;
                                            return o && !s
                                                ? 'tick' !== e
                                                    ? 'vertical'
                                                    : 'horizontal'
                                                : !o && s
                                                ? 'tick' !== e
                                                    ? 'horizontal'
                                                    : 'vertical'
                                                : !t.aggregate && n.aggregate
                                                ? 'tick' !== e
                                                    ? 'vertical'
                                                    : 'horizontal'
                                                : t.aggregate &&
                                                  !n.aggregate &&
                                                  'tick' !== e
                                                ? 'horizontal'
                                                : 'vertical';
                                        }
                                        return;
                                    }
                                }
                                return 'vertical';
                            })(i.type, t, r)),
                            void 0 !== r &&
                                r !== i.orient &&
                                $i(
                                    `Specified orient "${i.orient}" overridden with "${r}".`
                                ),
                            'bar' === i.type && i.orient)
                        ) {
                            const e = Ln('cornerRadiusEnd', i, n);
                            if (void 0 !== e) {
                                const n =
                                    ('horizontal' === i.orient && t.x2) ||
                                    ('vertical' === i.orient && t.y2)
                                        ? ['cornerRadius']
                                        : so[i.orient];
                                for (const t of n) i[t] = e;
                                void 0 !== i.cornerRadiusEnd &&
                                    delete i.cornerRadiusEnd;
                            }
                        }
                        return (
                            void 0 === Ln('opacity', i, n) &&
                                (i.opacity = (function(e, t) {
                                    if (k([Ur, Gr, Vr, Kr], e) && !As(t))
                                        return 0.7;
                                })(i.type, t)),
                            void 0 === Ln('cursor', i, n) &&
                                (i.cursor = (function(e, t, n) {
                                    return t.href || e.href || Ln('href', e, n)
                                        ? 'pointer'
                                        : e.cursor;
                                })(i, t, n)),
                            i
                        );
                    })(a, c, r)),
                        (this.size = (function({ encoding: e, size: t }) {
                            for (const n of Nt) {
                                const i = pt(n);
                                Ca(t[i]) &&
                                    Go(e[n]) &&
                                    (delete t[i], $i(bi(i)));
                            }
                            return t;
                        })({
                            encoding: c,
                            size: Ea(e)
                                ? Object.assign(
                                      Object.assign(
                                          Object.assign({}, i),
                                          e.width ? { width: e.width } : {}
                                      ),
                                      e.height ? { height: e.height } : {}
                                  )
                                : i,
                        })),
                        (this.stack = il(l, c)),
                        (this.specifiedScales = this.initScales(l, c)),
                        (this.specifiedAxes = this.initAxes(c)),
                        (this.specifiedLegends = this.initLegends(c)),
                        (this.specifiedProjection = e.projection),
                        (this.selection = (null !== (s = e.params) &&
                        void 0 !== s
                            ? s
                            : []
                        ).filter(e => ka(e)));
                }
                get hasProjection() {
                    const { encoding: e } = this,
                        t = this.mark === Yr,
                        n = e && Je.some(t => Vo(e[t]));
                    return t || n;
                }
                scaleDomain(e) {
                    const t = this.specifiedScales[e];
                    return t ? t.domain : void 0;
                }
                axis(e) {
                    return this.specifiedAxes[e];
                }
                legend(e) {
                    return this.specifiedLegends[e];
                }
                initScales(e, t) {
                    return Qt.reduce((e, n) => {
                        var i;
                        const r = ps(t[n]);
                        return (
                            r &&
                                (e[n] = this.initScale(
                                    null !== (i = r.scale) && void 0 !== i
                                        ? i
                                        : {}
                                )),
                            e
                        );
                    }, {});
                }
                initScale(e) {
                    const { domain: t, range: n } = e,
                        i = xn(e);
                    return (
                        (0, o.kJ)(t) && (i.domain = t.map(Cn)),
                        (0, o.kJ)(n) && (i.range = n.map(Cn)),
                        i
                    );
                }
                initAxes(e) {
                    return Nt.reduce((t, n) => {
                        const i = e[n];
                        if (
                            Vo(i) ||
                            (n === ue && Vo(e.x2)) ||
                            (n === fe && Vo(e.y2))
                        ) {
                            const e = Vo(i) ? i.axis : void 0;
                            t[n] = e ? this.initAxis(Object.assign({}, e)) : e;
                        }
                        return t;
                    }, {});
                }
                initAxis(e) {
                    const t = M(e),
                        n = {};
                    for (const i of t) {
                        const t = e[i];
                        n[i] = $s(t) ? _n(t) : Cn(t);
                    }
                    return n;
                }
                initLegends(e) {
                    return Kt.reduce((t, n) => {
                        const i = ps(e[n]);
                        if (
                            i &&
                            (function(e) {
                                switch (e) {
                                    case $e:
                                    case ke:
                                    case Se:
                                    case Pe:
                                    case De:
                                    case ze:
                                    case Ee:
                                    case Ne:
                                        return !0;
                                    case _e:
                                    case Ce:
                                    case Fe:
                                        return !1;
                                }
                            })(n)
                        ) {
                            const e = i.legend;
                            t[n] = e ? xn(e) : e;
                        }
                        return t;
                    }, {});
                }
                parseData() {
                    this.component.data = Rp(this);
                }
                parseLayoutSize() {
                    !(function(e) {
                        const { size: t, component: n } = e;
                        for (const i of Nt) {
                            const r = pt(i);
                            if (t[r]) {
                                const e = t[r];
                                n.layoutSize.set(r, Ca(e) ? 'step' : e, !0);
                            } else {
                                const t = Ap(e, r);
                                n.layoutSize.set(r, t, !1);
                            }
                        }
                    })(this);
                }
                parseSelections() {
                    this.component.selection = (function(e, t) {
                        var n;
                        const i = {},
                            r = e.config.selection;
                        if (!t || !t.length) return i;
                        for (const s of t) {
                            const t = W(s.name),
                                a = s.select,
                                l = (0, o.HD)(a) ? a : a.type,
                                c = (0, o.Kn)(a) ? v(a) : { type: l },
                                u = r[l];
                            for (const e in u)
                                'fields' !== e &&
                                    'encodings' !== e &&
                                    ('mark' === e &&
                                        (c[e] = Object.assign(
                                            Object.assign({}, u[e]),
                                            c[e]
                                        )),
                                    (void 0 !== c[e] && !0 !== c[e]) ||
                                        (c[e] =
                                            null !== (n = u[e]) && void 0 !== n
                                                ? n
                                                : c[e]));
                            const f = (i[t] = Object.assign(
                                Object.assign({}, c),
                                {
                                    name: t,
                                    type: l,
                                    init: s.value,
                                    bind: s.bind,
                                    events: (0, o.HD)(c.on)
                                        ? (0, gc.r)(c.on, 'scope')
                                        : (0, o.IX)(v(c.on)),
                                }
                            ));
                            for (const t of zu)
                                t.defined(f) && t.parse && t.parse(e, f, s);
                        }
                        return i;
                    })(this, this.selection);
                }
                parseMarkGroup() {
                    this.component.mark = (function(e) {
                        if (k([Ir, qr, Xr], e.mark)) {
                            const t = Ws(e.mark, e.encoding);
                            if (t.length > 0)
                                return (function(e, t) {
                                    return [
                                        {
                                            name: e.getName('pathgroup'),
                                            type: 'group',
                                            from: {
                                                facet: {
                                                    name:
                                                        eg +
                                                        e.requestDataName(
                                                            pc.Main
                                                        ),
                                                    data: e.requestDataName(
                                                        pc.Main
                                                    ),
                                                    groupby: t,
                                                },
                                            },
                                            encode: {
                                                update: {
                                                    width: {
                                                        field: {
                                                            group: 'width',
                                                        },
                                                    },
                                                    height: {
                                                        field: {
                                                            group: 'height',
                                                        },
                                                    },
                                                },
                                            },
                                            marks: ng(e, { fromPrefix: eg }),
                                        },
                                    ];
                                })(e, t);
                        } else if (e.mark === Rr) {
                            const t = Fn.some(t => Ln(t, e.markDef, e.config));
                            if (e.stack && !e.fieldDef('size') && t)
                                return (function(e) {
                                    var t;
                                    const [n] = ng(e, { fromPrefix: tg }),
                                        i = e.scaleName(e.stack.fieldChannel),
                                        r = (t = {}) =>
                                            e.vgField(e.stack.fieldChannel, t),
                                        o = (e, t) =>
                                            `${e}(${[
                                                r({
                                                    prefix: 'min',
                                                    suffix: 'start',
                                                    expr: t,
                                                }),
                                                r({
                                                    prefix: 'max',
                                                    suffix: 'start',
                                                    expr: t,
                                                }),
                                                r({
                                                    prefix: 'min',
                                                    suffix: 'end',
                                                    expr: t,
                                                }),
                                                r({
                                                    prefix: 'max',
                                                    suffix: 'end',
                                                    expr: t,
                                                }),
                                            ]
                                                .map(e => `scale('${i}',${e})`)
                                                .join(',')})`;
                                    let s, a;
                                    'x' === e.stack.fieldChannel
                                        ? ((s = Object.assign(
                                              Object.assign(
                                                  {},
                                                  O(n.encode.update, [
                                                      'y',
                                                      'yc',
                                                      'y2',
                                                      'height',
                                                      ...Fn,
                                                  ])
                                              ),
                                              {
                                                  x: {
                                                      signal: o('min', 'datum'),
                                                  },
                                                  x2: {
                                                      signal: o('max', 'datum'),
                                                  },
                                                  clip: { value: !0 },
                                              }
                                          )),
                                          (a = {
                                              x: {
                                                  field: { group: 'x' },
                                                  mult: -1,
                                              },
                                              height: {
                                                  field: { group: 'height' },
                                              },
                                          }),
                                          (n.encode.update = Object.assign(
                                              Object.assign(
                                                  {},
                                                  x(n.encode.update, [
                                                      'y',
                                                      'yc',
                                                      'y2',
                                                  ])
                                              ),
                                              {
                                                  height: {
                                                      field: {
                                                          group: 'height',
                                                      },
                                                  },
                                              }
                                          )))
                                        : ((s = Object.assign(
                                              Object.assign(
                                                  {},
                                                  O(n.encode.update, [
                                                      'x',
                                                      'xc',
                                                      'x2',
                                                      'width',
                                                  ])
                                              ),
                                              {
                                                  y: {
                                                      signal: o('min', 'datum'),
                                                  },
                                                  y2: {
                                                      signal: o('max', 'datum'),
                                                  },
                                                  clip: { value: !0 },
                                              }
                                          )),
                                          (a = {
                                              y: {
                                                  field: { group: 'y' },
                                                  mult: -1,
                                              },
                                              width: {
                                                  field: { group: 'width' },
                                              },
                                          }),
                                          (n.encode.update = Object.assign(
                                              Object.assign(
                                                  {},
                                                  x(n.encode.update, [
                                                      'x',
                                                      'xc',
                                                      'x2',
                                                  ])
                                              ),
                                              {
                                                  width: {
                                                      field: { group: 'width' },
                                                  },
                                              }
                                          )));
                                    for (const t of Fn) {
                                        const i = qn(t, e.markDef, e.config);
                                        n.encode.update[t]
                                            ? ((s[t] = n.encode.update[t]),
                                              delete n.encode.update[t])
                                            : i && (s[t] = Nn(i)),
                                            i &&
                                                (n.encode.update[t] = {
                                                    value: 0,
                                                });
                                    }
                                    const l = [];
                                    if (
                                        (null ===
                                            (t = e.stack.groupbyChannels) ||
                                        void 0 === t
                                            ? void 0
                                            : t.length) > 0
                                    )
                                        for (const t of e.stack
                                            .groupbyChannels) {
                                            const n = e.fieldDef(t),
                                                i = is(n);
                                            i && l.push(i),
                                                ((null == n ? void 0 : n.bin) ||
                                                    (null == n
                                                        ? void 0
                                                        : n.timeUnit)) &&
                                                    l.push(
                                                        is(n, {
                                                            binSuffix: 'end',
                                                        })
                                                    );
                                        }
                                    return (
                                        (s = [
                                            'stroke',
                                            'strokeWidth',
                                            'strokeJoin',
                                            'strokeCap',
                                            'strokeDash',
                                            'strokeDashOffset',
                                            'strokeMiterLimit',
                                            'strokeOpacity',
                                        ].reduce((t, i) => {
                                            if (n.encode.update[i])
                                                return Object.assign(
                                                    Object.assign({}, t),
                                                    { [i]: n.encode.update[i] }
                                                );
                                            {
                                                const n = qn(
                                                    i,
                                                    e.markDef,
                                                    e.config
                                                );
                                                return void 0 !== n
                                                    ? Object.assign(
                                                          Object.assign({}, t),
                                                          { [i]: Nn(n) }
                                                      )
                                                    : t;
                                            }
                                        }, s)),
                                        s.stroke &&
                                            ((s.strokeForeground = {
                                                value: !0,
                                            }),
                                            (s.strokeOffset = { value: 0 })),
                                        [
                                            {
                                                type: 'group',
                                                from: {
                                                    facet: {
                                                        data: e.requestDataName(
                                                            pc.Main
                                                        ),
                                                        name:
                                                            tg +
                                                            e.requestDataName(
                                                                pc.Main
                                                            ),
                                                        groupby: l,
                                                        aggregate: {
                                                            fields: [
                                                                r({
                                                                    suffix:
                                                                        'start',
                                                                }),
                                                                r({
                                                                    suffix:
                                                                        'start',
                                                                }),
                                                                r({
                                                                    suffix:
                                                                        'end',
                                                                }),
                                                                r({
                                                                    suffix:
                                                                        'end',
                                                                }),
                                                            ],
                                                            ops: [
                                                                'min',
                                                                'max',
                                                                'min',
                                                                'max',
                                                            ],
                                                        },
                                                    },
                                                },
                                                encode: { update: s },
                                                marks: [
                                                    {
                                                        type: 'group',
                                                        encode: { update: a },
                                                        marks: [n],
                                                    },
                                                ],
                                            },
                                        ]
                                    );
                                })(e);
                        }
                        return ng(e);
                    })(this);
                }
                parseAxesAndHeaders() {
                    var e;
                    this.component.axes =
                        ((e = this),
                        Nt.reduce(
                            (t, n) => (
                                e.component.scales[n] && (t[n] = [Kp(n, e)]), t
                            ),
                            {}
                        ));
                }
                assembleSelectionTopLevelSignals(e) {
                    return (function(e, t) {
                        var n;
                        let i = !1;
                        for (const r of L(
                            null !== (n = e.component.selection) && void 0 !== n
                                ? n
                                : {}
                        )) {
                            const n = r.name,
                                s = (0, o.m8)(n + Su);
                            if (0 === t.filter(e => e.name === n).length) {
                                const e =
                                        'global' === r.resolve
                                            ? 'union'
                                            : r.resolve,
                                    n =
                                        'point' === r.type
                                            ? ', true, true)'
                                            : ')';
                                t.push({
                                    name: r.name,
                                    update: `${Fu}(${s}, ${(0, o.m8)(e)}${n}`,
                                });
                            }
                            i = !0;
                            for (const n of zu)
                                n.defined(r) &&
                                    n.topLevelSignals &&
                                    (t = n.topLevelSignals(e, r, t));
                        }
                        return (
                            i &&
                                0 === t.filter(e => 'unit' === e.name).length &&
                                t.unshift({
                                    name: 'unit',
                                    value: {},
                                    on: [
                                        {
                                            events: 'mousemove',
                                            update:
                                                'isTuple(group()) ? group() : unit',
                                        },
                                    ],
                                }),
                            yc(t)
                        );
                    })(this, e);
                }
                assembleSignals() {
                    return [...Bu(this), ...bc(this, [])];
                }
                assembleSelectionData(e) {
                    return (function(e, t) {
                        var n;
                        const i = [...t],
                            r = _u(e, { escape: !1 });
                        for (const t of L(
                            null !== (n = e.component.selection) && void 0 !== n
                                ? n
                                : {}
                        )) {
                            const e = { name: t.name + Su };
                            if (
                                (t.project.hasSelectionId &&
                                    (e.transform = [
                                        {
                                            type: 'collect',
                                            sort: { field: xa },
                                        },
                                    ]),
                                t.init)
                            ) {
                                const n = t.project.items.map(e => {
                                    const { signals: t } = e;
                                    return mc(e, ['signals']);
                                });
                                e.values = t.project.hasSelectionId
                                    ? t.init.map(e => ({
                                          unit: r,
                                          [xa]: hc(e, !1)[0],
                                      }))
                                    : t.init.map(e => ({
                                          unit: r,
                                          fields: n,
                                          values: hc(e, !1),
                                      }));
                            }
                            i.filter(e => e.name === t.name + Su).length ||
                                i.push(e);
                        }
                        return i;
                    })(this, e);
                }
                assembleLayout() {
                    return null;
                }
                assembleLayoutSignals() {
                    return vf(this);
                }
                assembleMarks() {
                    var e;
                    let t =
                        null !== (e = this.component.mark) && void 0 !== e
                            ? e
                            : [];
                    return (
                        (this.parent && gp(this.parent)) || (t = vc(this, t)),
                        t.map(this.correctDataNames)
                    );
                }
                assembleGroupStyle() {
                    const { style: e } = this.view || {};
                    return void 0 !== e
                        ? e
                        : this.encoding.x || this.encoding.y
                        ? 'cell'
                        : void 0;
                }
                getMapping() {
                    return this.encoding;
                }
                get mark() {
                    return this.markDef.type;
                }
                channelHasField(e) {
                    return Es(this.encoding, e);
                }
                fieldDef(e) {
                    return ds(this.encoding[e]);
                }
                typedFieldDef(e) {
                    const t = this.fieldDef(e);
                    return Ko(t) ? t : null;
                }
            }
            class rg extends mp {
                constructor(e, t, n, i, r) {
                    super(e, 'layer', t, n, r, e.resolve, e.view);
                    const o = Object.assign(
                        Object.assign(
                            Object.assign({}, i),
                            e.width ? { width: e.width } : {}
                        ),
                        e.height ? { height: e.height } : {}
                    );
                    this.children = e.layer.map((e, t) => {
                        if (Ka(e))
                            return new rg(
                                e,
                                this,
                                this.getName(`layer_${t}`),
                                o,
                                r
                            );
                        if (_s(e))
                            return new ig(
                                e,
                                this,
                                this.getName(`layer_${t}`),
                                o,
                                r
                            );
                        throw new Error(Jn(e));
                    });
                }
                parseData() {
                    this.component.data = Rp(this);
                    for (const e of this.children) e.parseData();
                }
                parseLayoutSize() {
                    Np(this), Tp(this, 'width'), Tp(this, 'height');
                }
                parseSelections() {
                    this.component.selection = {};
                    for (const e of this.children) {
                        e.parseSelections();
                        for (const t of M(e.component.selection))
                            this.component.selection[t] =
                                e.component.selection[t];
                    }
                }
                parseMarkGroup() {
                    for (const e of this.children) e.parseMarkGroup();
                }
                parseAxesAndHeaders() {
                    !(function(e) {
                        var t;
                        const { axes: n, resolve: i } = e.component,
                            r = { top: 0, bottom: 0, right: 0, left: 0 };
                        for (const t of e.children) {
                            t.parseAxesAndHeaders();
                            for (const r of M(t.component.axes))
                                (i.axis[r] = kf(e.component.resolve, r)),
                                    'shared' === i.axis[r] &&
                                        ((n[r] = Jp(n[r], t.component.axes[r])),
                                        n[r] ||
                                            ((i.axis[r] = 'independent'),
                                            delete n[r]));
                        }
                        for (const o of Nt) {
                            for (const s of e.children)
                                if (s.component.axes[o]) {
                                    if ('independent' === i.axis[o]) {
                                        n[o] = (null !== (t = n[o]) &&
                                        void 0 !== t
                                            ? t
                                            : []
                                        ).concat(s.component.axes[o]);
                                        for (const e of s.component.axes[o]) {
                                            const {
                                                value: t,
                                                explicit: n,
                                            } = e.getWithExplicit('orient');
                                            if (!$n(t)) {
                                                if (r[t] > 0 && !n) {
                                                    const n = Bp[t];
                                                    r[t] > r[n] &&
                                                        e.set('orient', n, !1);
                                                }
                                                r[t]++;
                                            }
                                        }
                                    }
                                    delete s.component.axes[o];
                                }
                            if (
                                'independent' === i.axis[o] &&
                                n[o] &&
                                n[o].length > 1
                            )
                                for (const e of n[o])
                                    e.get('grid') &&
                                        !e.explicit.grid &&
                                        (e.implicit.grid = !1);
                        }
                    })(this);
                }
                assembleSelectionTopLevelSignals(e) {
                    return this.children.reduce(
                        (e, t) => t.assembleSelectionTopLevelSignals(e),
                        e
                    );
                }
                assembleSignals() {
                    return this.children.reduce(
                        (e, t) => e.concat(t.assembleSignals()),
                        Bu(this)
                    );
                }
                assembleLayoutSignals() {
                    return this.children.reduce(
                        (e, t) => e.concat(t.assembleLayoutSignals()),
                        vf(this)
                    );
                }
                assembleSelectionData(e) {
                    return this.children.reduce(
                        (e, t) => t.assembleSelectionData(e),
                        e
                    );
                }
                assembleGroupStyle() {
                    const e = new Set();
                    for (const t of this.children)
                        for (const n of (0, o.IX)(t.assembleGroupStyle()))
                            e.add(n);
                    const t = Array.from(e);
                    return t.length > 1 ? t : 1 === t.length ? t[0] : void 0;
                }
                assembleTitle() {
                    let e = super.assembleTitle();
                    if (e) return e;
                    for (const t of this.children)
                        if (((e = t.assembleTitle()), e)) return e;
                }
                assembleLayout() {
                    return null;
                }
                assembleMarks() {
                    return (function(e, t) {
                        for (const n of e.children) fp(n) && (t = vc(n, t));
                        return t;
                    })(
                        this,
                        this.children.flatMap(e => e.assembleMarks())
                    );
                }
                assembleLegends() {
                    return this.children.reduce(
                        (e, t) => e.concat(t.assembleLegends()),
                        Wf(this)
                    );
                }
            }
            function og(e, t, n, i, r) {
                if (No(e)) return new Lp(e, t, n, r);
                if (Ka(e)) return new rg(e, t, n, i, r);
                if (_s(e)) return new ig(e, t, n, i, r);
                if (
                    (function(e) {
                        return Fa(e) || za(e) || Pa(e);
                    })(e)
                )
                    return new Wp(e, t, n, r);
                throw new Error(Jn(e));
            }
            function sg(e, t = {}) {
                var n;
                t.logger && ((n = t.logger), (wi = n)),
                    t.fieldTitle && as(t.fieldTitle);
                try {
                    const n = Ba((0, o.fE)(t.config, e.config)),
                        i = Jl(e, n),
                        r = og(i, null, '', void 0, n);
                    r.parse(),
                        (function(e, t) {
                            Pd(e.sources);
                            let n = 0,
                                i = 0;
                            for (let i = 0; i < 5 && zd(e, t, !0); i++) n++;
                            e.sources.map(kd);
                            for (let n = 0; n < 5 && zd(e, t, !1); n++) i++;
                            Pd(e.sources),
                                5 === Math.max(n, i) &&
                                    $i('Maximum optimization runs(5) reached.');
                        })(r.component.data, r);
                    const s = (function(e, t, n = {}, i) {
                        const r = e.config
                                ? (function(e) {
                                      e = v(e);
                                      for (const t of Ga) delete e[t];
                                      if (e.axis)
                                          for (const t in e.axis)
                                              $s(e.axis[t]) && delete e.axis[t];
                                      if (e.legend)
                                          for (const t of pa)
                                              delete e.legend[t];
                                      if (e.mark) {
                                          for (const t of io) delete e.mark[t];
                                          e.mark.tooltip &&
                                              (0, o.Kn)(e.mark.tooltip) &&
                                              delete e.mark.tooltip;
                                      }
                                      e.params &&
                                          ((e.signals = (
                                              e.signals || []
                                          ).concat(Da(e.params))),
                                          delete e.params);
                                      for (const t of Ja) {
                                          for (const n of io) delete e[t][n];
                                          const n = Xa[t];
                                          if (n)
                                              for (const i of n) delete e[t][i];
                                          Va(e, t);
                                      }
                                      for (const t of M(fa)) delete e[t];
                                      !(function(e) {
                                          const {
                                              titleMarkConfig: t,
                                              subtitleMarkConfig: n,
                                              subtitle: i,
                                          } = jn(e.title);
                                          A(t) ||
                                              (e.style[
                                                  'group-title'
                                              ] = Object.assign(
                                                  Object.assign(
                                                      {},
                                                      e.style['group-title']
                                                  ),
                                                  t
                                              )),
                                              A(n) ||
                                                  (e.style[
                                                      'group-subtitle'
                                                  ] = Object.assign(
                                                      Object.assign(
                                                          {},
                                                          e.style[
                                                              'group-subtitle'
                                                          ]
                                                      ),
                                                      n
                                                  )),
                                              A(i)
                                                  ? delete e.title
                                                  : (e.title = i);
                                      })(e);
                                      for (const t in e)
                                          (0, o.Kn)(e[t]) &&
                                              A(e[t]) &&
                                              delete e[t];
                                      return A(e) ? void 0 : e;
                                  })(e.config)
                                : void 0,
                            s = [].concat(
                                e.assembleSelectionData([]),
                                (function(e, t) {
                                    var n, i;
                                    const r = [],
                                        o = zp(r);
                                    let s = 0;
                                    for (const t of e.sources) {
                                        t.hasName() ||
                                            (t.dataName = 'source_' + s++);
                                        const e = t.assemble();
                                        o(t, e);
                                    }
                                    for (const e of r)
                                        0 === e.transform.length &&
                                            delete e.transform;
                                    let a = 0;
                                    for (const [e, t] of r.entries())
                                        0 !==
                                            (null !== (n = t.transform) &&
                                            void 0 !== n
                                                ? n
                                                : []
                                            ).length ||
                                            t.source ||
                                            r.splice(a++, 0, r.splice(e, 1)[0]);
                                    for (const t of r)
                                        for (const n of null !==
                                            (i = t.transform) && void 0 !== i
                                            ? i
                                            : [])
                                            'lookup' === n.type &&
                                                (n.from = e.outputNodes[
                                                    n.from
                                                ].getSource());
                                    for (const e of r)
                                        e.name in t && (e.values = t[e.name]);
                                    return r;
                                })(e.component.data, n)
                            ),
                            a = e.assembleProjections(),
                            l = e.assembleTitle(),
                            c = e.assembleGroupStyle(),
                            u = e.assembleGroupEncodeEntry(!0);
                        let f = e.assembleLayoutSignals();
                        f = f.filter(
                            e =>
                                ('width' !== e.name && 'height' !== e.name) ||
                                void 0 === e.value ||
                                ((t[e.name] = +e.value), !1)
                        );
                        const { params: d } = t,
                            p = (function(e, t) {
                                var n = {};
                                for (var i in e)
                                    Object.prototype.hasOwnProperty.call(
                                        e,
                                        i
                                    ) &&
                                        t.indexOf(i) < 0 &&
                                        (n[i] = e[i]);
                                if (
                                    null != e &&
                                    'function' ==
                                        typeof Object.getOwnPropertySymbols
                                ) {
                                    var r = 0;
                                    for (
                                        i = Object.getOwnPropertySymbols(e);
                                        r < i.length;
                                        r++
                                    )
                                        t.indexOf(i[r]) < 0 &&
                                            Object.prototype.propertyIsEnumerable.call(
                                                e,
                                                i[r]
                                            ) &&
                                            (n[i[r]] = e[i[r]]);
                                }
                                return n;
                            })(t, ['params']);
                        return Object.assign(
                            Object.assign(
                                Object.assign(
                                    Object.assign(
                                        Object.assign(
                                            Object.assign(
                                                Object.assign(
                                                    Object.assign(
                                                        Object.assign(
                                                            Object.assign(
                                                                {
                                                                    $schema:
                                                                        'https://vega.github.io/schema/vega/v5.json',
                                                                },
                                                                e.description
                                                                    ? {
                                                                          description:
                                                                              e.description,
                                                                      }
                                                                    : {}
                                                            ),
                                                            p
                                                        ),
                                                        l ? { title: l } : {}
                                                    ),
                                                    c ? { style: c } : {}
                                                ),
                                                u
                                                    ? { encode: { update: u } }
                                                    : {}
                                            ),
                                            { data: s }
                                        ),
                                        a.length > 0 ? { projections: a } : {}
                                    ),
                                    e.assembleGroup([
                                        ...f,
                                        ...e.assembleSelectionTopLevelSignals(
                                            []
                                        ),
                                        ...Da(d),
                                    ])
                                ),
                                r ? { config: r } : {}
                            ),
                            i ? { usermeta: i } : {}
                        );
                    })(
                        r,
                        (function(e, t, n, i) {
                            const r = i.component.layoutSize.get('width'),
                                s = i.component.layoutSize.get('height');
                            if (
                                (void 0 === t
                                    ? ((t = { type: 'pad' }),
                                      i.hasAxisOrientSignalRef() &&
                                          (t.resize = !0))
                                    : (0, o.HD)(t) && (t = { type: t }),
                                r &&
                                    s &&
                                    ('fit' === (a = t.type) ||
                                        'fit-x' === a ||
                                        'fit-y' === a))
                            )
                                if ('step' === r && 'step' === s)
                                    $i(Vn()), (t.type = 'pad');
                                else if ('step' === r || 'step' === s) {
                                    const e = 'step' === r ? 'width' : 'height';
                                    $i(Vn(Lt(e)));
                                    const n =
                                        'width' === e ? 'height' : 'width';
                                    t.type = (function(e) {
                                        return e ? `fit-${Lt(e)}` : 'fit';
                                    })(n);
                                }
                            var a;
                            return Object.assign(
                                Object.assign(
                                    Object.assign(
                                        {},
                                        1 === M(t).length && t.type
                                            ? 'pad' === t.type
                                                ? {}
                                                : { autosize: t.type }
                                            : { autosize: t }
                                    ),
                                    Ql(n, !1)
                                ),
                                Ql(e, !0)
                            );
                        })(e, i.autosize, n, r),
                        e.datasets,
                        e.usermeta
                    );
                    return { spec: s, normalized: i };
                } finally {
                    t.logger && (wi = ji), t.fieldTitle && as(os);
                }
            }
            const ag = r().version;
        },
    },
]);
//# sourceMappingURL=1725.f151c33.js.map
