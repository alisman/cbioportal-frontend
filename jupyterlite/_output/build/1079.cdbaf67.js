(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [1079],
    {
        11079: function(t, e, o) {
            !(function(t) {
                'use strict';
                var e =
                        'undefined' != typeof window
                            ? window
                            : void 0 !== o.g
                            ? o.g
                            : 'undefined' != typeof self
                            ? self
                            : {},
                    r = function(t, e) {
                        if (((e = e.split(':')[0]), !(t = +t))) return !1;
                        switch (e) {
                            case 'http':
                            case 'ws':
                                return 80 !== t;
                            case 'https':
                            case 'wss':
                                return 443 !== t;
                            case 'ftp':
                                return 21 !== t;
                            case 'gopher':
                                return 70 !== t;
                            case 'file':
                                return !1;
                        }
                        return 0 !== t;
                    },
                    n = Object.prototype.hasOwnProperty;
                function i(t) {
                    try {
                        return decodeURIComponent(t.replace(/\+/g, ' '));
                    } catch (t) {
                        return null;
                    }
                }
                function s(t) {
                    try {
                        return encodeURIComponent(t);
                    } catch (t) {
                        return null;
                    }
                }
                var a = {
                        stringify: function(t, e) {
                            e = e || '';
                            var o,
                                r,
                                i = [];
                            for (r in ('string' != typeof e && (e = '?'), t))
                                if (n.call(t, r)) {
                                    if (
                                        ((o = t[r]) ||
                                            (null != o && !isNaN(o)) ||
                                            (o = ''),
                                        (r = s(r)),
                                        (o = s(o)),
                                        null === r || null === o)
                                    )
                                        continue;
                                    i.push(r + '=' + o);
                                }
                            return i.length ? e + i.join('&') : '';
                        },
                        parse: function(t) {
                            for (
                                var e, o = /([^=?#&]+)=?([^&]*)/g, r = {};
                                (e = o.exec(t));

                            ) {
                                var n = i(e[1]),
                                    s = i(e[2]);
                                null === n ||
                                    null === s ||
                                    n in r ||
                                    (r[n] = s);
                            }
                            return r;
                        },
                    },
                    c = /^[A-Za-z][A-Za-z0-9+-.]*:\/\//,
                    p = /^([a-z][a-z0-9.+-]*:)?(\/\/)?([\\/]+)?([\S\s]*)/i,
                    u = new RegExp(
                        '^[\\x09\\x0A\\x0B\\x0C\\x0D\\x20\\xA0\\u1680\\u180E\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200A\\u202F\\u205F\\u3000\\u2028\\u2029\\uFEFF]+'
                    );
                function h(t) {
                    return (t || '').toString().replace(u, '');
                }
                var l = [
                        ['#', 'hash'],
                        ['?', 'query'],
                        function(t, e) {
                            return y(e.protocol) ? t.replace(/\\/g, '/') : t;
                        },
                        ['/', 'pathname'],
                        ['@', 'auth', 1],
                        [NaN, 'host', void 0, 1, 1],
                        [/:(\d+)$/, 'port', void 0, 1],
                        [NaN, 'hostname', void 0, 1, 1],
                    ],
                    f = { hash: 1, query: 1 };
                function d(t) {
                    var o,
                        r =
                            ('undefined' != typeof window
                                ? window
                                : void 0 !== e
                                ? e
                                : 'undefined' != typeof self
                                ? self
                                : {}
                            ).location || {},
                        n = {},
                        i = typeof (t = t || r);
                    if ('blob:' === t.protocol)
                        n = new E(unescape(t.pathname), {});
                    else if ('string' === i)
                        for (o in ((n = new E(t, {})), f)) delete n[o];
                    else if ('object' === i) {
                        for (o in t) o in f || (n[o] = t[o]);
                        void 0 === n.slashes && (n.slashes = c.test(t.href));
                    }
                    return n;
                }
                function y(t) {
                    return (
                        'file:' === t ||
                        'ftp:' === t ||
                        'http:' === t ||
                        'https:' === t ||
                        'ws:' === t ||
                        'wss:' === t
                    );
                }
                function v(t, e) {
                    (t = h(t)), (e = e || {});
                    var o,
                        r = p.exec(t),
                        n = r[1] ? r[1].toLowerCase() : '',
                        i = !!r[2],
                        s = !!r[3],
                        a = 0;
                    return (
                        i
                            ? s
                                ? ((o = r[2] + r[3] + r[4]),
                                  (a = r[2].length + r[3].length))
                                : ((o = r[2] + r[4]), (a = r[2].length))
                            : s
                            ? ((o = r[3] + r[4]), (a = r[3].length))
                            : (o = r[4]),
                        'file:' === n
                            ? a >= 2 && (o = o.slice(2))
                            : y(n)
                            ? (o = r[4])
                            : n
                            ? i && (o = o.slice(2))
                            : a >= 2 && y(e.protocol) && (o = r[4]),
                        {
                            protocol: n,
                            slashes: i || y(n),
                            slashesCount: a,
                            rest: o,
                        }
                    );
                }
                function E(t, e, o) {
                    if (((t = h(t)), !(this instanceof E)))
                        return new E(t, e, o);
                    var n,
                        i,
                        s,
                        c,
                        p,
                        u,
                        f = l.slice(),
                        b = typeof e,
                        g = this,
                        m = 0;
                    for (
                        'object' !== b &&
                            'string' !== b &&
                            ((o = e), (e = null)),
                            o && 'function' != typeof o && (o = a.parse),
                            n =
                                !(i = v(t || '', (e = d(e)))).protocol &&
                                !i.slashes,
                            g.slashes = i.slashes || (n && e.slashes),
                            g.protocol = i.protocol || e.protocol || '',
                            t = i.rest,
                            ('file:' === g.protocol ||
                                (!i.slashes &&
                                    (i.protocol ||
                                        i.slashesCount < 2 ||
                                        !y(g.protocol)))) &&
                                (f[3] = [/(.*)/, 'pathname']);
                        m < f.length;
                        m++
                    )
                        'function' != typeof (c = f[m])
                            ? ((s = c[0]),
                              (u = c[1]),
                              s != s
                                  ? (g[u] = t)
                                  : 'string' == typeof s
                                  ? ~(p = t.indexOf(s)) &&
                                    ('number' == typeof c[2]
                                        ? ((g[u] = t.slice(0, p)),
                                          (t = t.slice(p + c[2])))
                                        : ((g[u] = t.slice(p)),
                                          (t = t.slice(0, p))))
                                  : (p = s.exec(t)) &&
                                    ((g[u] = p[1]), (t = t.slice(0, p.index))),
                              (g[u] = g[u] || (n && c[3] && e[u]) || ''),
                              c[4] && (g[u] = g[u].toLowerCase()))
                            : (t = c(t, g));
                    o && (g.query = o(g.query)),
                        n &&
                            e.slashes &&
                            '/' !== g.pathname.charAt(0) &&
                            ('' !== g.pathname || '' !== e.pathname) &&
                            (g.pathname = (function(t, e) {
                                if ('' === t) return e;
                                for (
                                    var o = (e || '/')
                                            .split('/')
                                            .slice(0, -1)
                                            .concat(t.split('/')),
                                        r = o.length,
                                        n = o[r - 1],
                                        i = !1,
                                        s = 0;
                                    r--;

                                )
                                    '.' === o[r]
                                        ? o.splice(r, 1)
                                        : '..' === o[r]
                                        ? (o.splice(r, 1), s++)
                                        : s &&
                                          (0 === r && (i = !0),
                                          o.splice(r, 1),
                                          s--);
                                return (
                                    i && o.unshift(''),
                                    ('.' !== n && '..' !== n) || o.push(''),
                                    o.join('/')
                                );
                            })(g.pathname, e.pathname)),
                        '/' !== g.pathname.charAt(0) &&
                            y(g.protocol) &&
                            (g.pathname = '/' + g.pathname),
                        r(g.port, g.protocol) ||
                            ((g.host = g.hostname), (g.port = '')),
                        (g.username = g.password = ''),
                        g.auth &&
                            ((c = g.auth.split(':')),
                            (g.username = c[0] || ''),
                            (g.password = c[1] || '')),
                        (g.origin =
                            'file:' !== g.protocol && y(g.protocol) && g.host
                                ? g.protocol + '//' + g.host
                                : 'null'),
                        (g.href = g.toString());
                }
                (E.prototype = {
                    set: function(t, e, o) {
                        var n = this;
                        switch (t) {
                            case 'query':
                                'string' == typeof e &&
                                    e.length &&
                                    (e = (o || a.parse)(e)),
                                    (n[t] = e);
                                break;
                            case 'port':
                                (n[t] = e),
                                    r(e, n.protocol)
                                        ? e && (n.host = n.hostname + ':' + e)
                                        : ((n.host = n.hostname), (n[t] = ''));
                                break;
                            case 'hostname':
                                (n[t] = e),
                                    n.port && (e += ':' + n.port),
                                    (n.host = e);
                                break;
                            case 'host':
                                (n[t] = e),
                                    /:\d+$/.test(e)
                                        ? ((e = e.split(':')),
                                          (n.port = e.pop()),
                                          (n.hostname = e.join(':')))
                                        : ((n.hostname = e), (n.port = ''));
                                break;
                            case 'protocol':
                                (n.protocol = e.toLowerCase()),
                                    (n.slashes = !o);
                                break;
                            case 'pathname':
                            case 'hash':
                                if (e) {
                                    var i = 'pathname' === t ? '/' : '#';
                                    n[t] = e.charAt(0) !== i ? i + e : e;
                                } else n[t] = e;
                                break;
                            default:
                                n[t] = e;
                        }
                        for (var s = 0; s < l.length; s++) {
                            var c = l[s];
                            c[4] && (n[c[1]] = n[c[1]].toLowerCase());
                        }
                        return (
                            (n.origin =
                                'file:' !== n.protocol &&
                                y(n.protocol) &&
                                n.host
                                    ? n.protocol + '//' + n.host
                                    : 'null'),
                            (n.href = n.toString()),
                            n
                        );
                    },
                    toString: function(t) {
                        (t && 'function' == typeof t) || (t = a.stringify);
                        var e,
                            o = this,
                            r = o.protocol;
                        r && ':' !== r.charAt(r.length - 1) && (r += ':');
                        var n = r + (o.slashes || y(o.protocol) ? '//' : '');
                        return (
                            o.username &&
                                ((n += o.username),
                                o.password && (n += ':' + o.password),
                                (n += '@')),
                            (n += o.host + o.pathname),
                            (e =
                                'object' == typeof o.query
                                    ? t(o.query)
                                    : o.query) &&
                                (n += '?' !== e.charAt(0) ? '?' + e : e),
                            o.hash && (n += o.hash),
                            n
                        );
                    },
                }),
                    (E.extractProtocol = v),
                    (E.location = d),
                    (E.trimLeft = h),
                    (E.qs = a);
                var b = E;
                function g(t, e) {
                    setTimeout(
                        function(e) {
                            return t.call(e);
                        },
                        4,
                        e
                    );
                }
                function m(t, e) {
                    console[t].call(null, e);
                }
                function S(t, e) {
                    void 0 === t && (t = []);
                    var o = [];
                    return (
                        t.forEach(function(t) {
                            e(t) || o.push(t);
                        }),
                        o
                    );
                }
                var w = function() {
                    this.listeners = {};
                };
                function O(t) {
                    var e = t.indexOf('?');
                    return e >= 0 ? t.slice(0, e) : t;
                }
                (w.prototype.addEventListener = function(t, e) {
                    'function' == typeof e &&
                        (Array.isArray(this.listeners[t]) ||
                            (this.listeners[t] = []),
                        0 ===
                            (function(t, e) {
                                void 0 === t && (t = []);
                                var o = [];
                                return (
                                    t.forEach(function(t) {
                                        e(t) && o.push(t);
                                    }),
                                    o
                                );
                            })(this.listeners[t], function(t) {
                                return t === e;
                            }).length && this.listeners[t].push(e));
                }),
                    (w.prototype.removeEventListener = function(t, e) {
                        var o = this.listeners[t];
                        this.listeners[t] = S(o, function(t) {
                            return t === e;
                        });
                    }),
                    (w.prototype.dispatchEvent = function(t) {
                        for (
                            var e = this, o = [], r = arguments.length - 1;
                            r-- > 0;

                        )
                            o[r] = arguments[r + 1];
                        var n = t.type,
                            i = this.listeners[n];
                        return (
                            !!Array.isArray(i) &&
                            (i.forEach(function(r) {
                                o.length > 0 ? r.apply(e, o) : r.call(e, t);
                            }),
                            !0)
                        );
                    });
                var C = function() {
                    this.urlMap = {};
                };
                (C.prototype.attachWebSocket = function(t, e) {
                    var o = O(e),
                        r = this.urlMap[o];
                    if (r && r.server && -1 === r.websockets.indexOf(t))
                        return r.websockets.push(t), r.server;
                }),
                    (C.prototype.addMembershipToRoom = function(t, e) {
                        var o = this.urlMap[O(t.url)];
                        o &&
                            o.server &&
                            -1 !== o.websockets.indexOf(t) &&
                            (o.roomMemberships[e] ||
                                (o.roomMemberships[e] = []),
                            o.roomMemberships[e].push(t));
                    }),
                    (C.prototype.attachServer = function(t, e) {
                        var o = O(e);
                        if (!this.urlMap[o])
                            return (
                                (this.urlMap[o] = {
                                    server: t,
                                    websockets: [],
                                    roomMemberships: {},
                                }),
                                t
                            );
                    }),
                    (C.prototype.serverLookup = function(t) {
                        var e = O(t),
                            o = this.urlMap[e];
                        if (o) return o.server;
                    }),
                    (C.prototype.websocketsLookup = function(t, e, o) {
                        var r,
                            n = O(t),
                            i = this.urlMap[n];
                        return (
                            (r = i ? i.websockets : []),
                            e && (r = i.roomMemberships[e] || []),
                            o
                                ? r.filter(function(t) {
                                      return t !== o;
                                  })
                                : r
                        );
                    }),
                    (C.prototype.removeServer = function(t) {
                        delete this.urlMap[O(t)];
                    }),
                    (C.prototype.removeWebSocket = function(t, e) {
                        var o = O(e),
                            r = this.urlMap[o];
                        r &&
                            (r.websockets = S(r.websockets, function(e) {
                                return e === t;
                            }));
                    }),
                    (C.prototype.removeMembershipFromRoom = function(t, e) {
                        var o = this.urlMap[O(t.url)],
                            r = o.roomMemberships[e];
                        o &&
                            null !== r &&
                            (o.roomMemberships[e] = S(r, function(e) {
                                return e === t;
                            }));
                    });
                var k = new C(),
                    L = 1e3,
                    R = 1005,
                    T = 1006,
                    N = {
                        CONSTRUCTOR_ERROR: "Failed to construct 'WebSocket':",
                        CLOSE_ERROR:
                            "Failed to execute 'close' on 'WebSocket':",
                        EVENT: {
                            CONSTRUCT: "Failed to construct 'Event':",
                            MESSAGE: "Failed to construct 'MessageEvent':",
                            CLOSE: "Failed to construct 'CloseEvent':",
                        },
                    },
                    _ = function() {};
                (_.prototype.stopPropagation = function() {}),
                    (_.prototype.stopImmediatePropagation = function() {}),
                    (_.prototype.initEvent = function(t, e, o) {
                        void 0 === t && (t = 'undefined'),
                            void 0 === e && (e = !1),
                            void 0 === o && (o = !1),
                            (this.type = '' + t),
                            (this.bubbles = Boolean(e)),
                            (this.cancelable = Boolean(o));
                    });
                var A = (function(t) {
                        function e(e, o) {
                            if ((void 0 === o && (o = {}), t.call(this), !e))
                                throw new TypeError(
                                    N.EVENT_ERROR +
                                        ' 1 argument required, but only 0 present.'
                                );
                            if ('object' != typeof o)
                                throw new TypeError(
                                    N.EVENT_ERROR +
                                        " parameter 2 ('eventInitDict') is not an object."
                                );
                            var r = o.bubbles,
                                n = o.cancelable;
                            (this.type = '' + e),
                                (this.timeStamp = Date.now()),
                                (this.target = null),
                                (this.srcElement = null),
                                (this.returnValue = !0),
                                (this.isTrusted = !1),
                                (this.eventPhase = 0),
                                (this.defaultPrevented = !1),
                                (this.currentTarget = null),
                                (this.cancelable = !!n && Boolean(n)),
                                (this.cancelBubble = !1),
                                (this.bubbles = !!r && Boolean(r));
                        }
                        return (
                            t && (e.__proto__ = t),
                            (e.prototype = Object.create(t && t.prototype)),
                            (e.prototype.constructor = e),
                            e
                        );
                    })(_),
                    I = (function(t) {
                        function e(e, o) {
                            if ((void 0 === o && (o = {}), t.call(this), !e))
                                throw new TypeError(
                                    N.EVENT.MESSAGE +
                                        ' 1 argument required, but only 0 present.'
                                );
                            if ('object' != typeof o)
                                throw new TypeError(
                                    N.EVENT.MESSAGE +
                                        " parameter 2 ('eventInitDict') is not an object"
                                );
                            var r = o.bubbles,
                                n = o.cancelable,
                                i = o.data,
                                s = o.origin,
                                a = o.lastEventId,
                                c = o.ports;
                            (this.type = '' + e),
                                (this.timeStamp = Date.now()),
                                (this.target = null),
                                (this.srcElement = null),
                                (this.returnValue = !0),
                                (this.isTrusted = !1),
                                (this.eventPhase = 0),
                                (this.defaultPrevented = !1),
                                (this.currentTarget = null),
                                (this.cancelable = !!n && Boolean(n)),
                                (this.canncelBubble = !1),
                                (this.bubbles = !!r && Boolean(r)),
                                (this.origin = '' + s),
                                (this.ports = void 0 === c ? null : c),
                                (this.data = void 0 === i ? null : i),
                                (this.lastEventId = '' + (a || ''));
                        }
                        return (
                            t && (e.__proto__ = t),
                            (e.prototype = Object.create(t && t.prototype)),
                            (e.prototype.constructor = e),
                            e
                        );
                    })(_),
                    P = (function(t) {
                        function e(e, o) {
                            if ((void 0 === o && (o = {}), t.call(this), !e))
                                throw new TypeError(
                                    N.EVENT.CLOSE +
                                        ' 1 argument required, but only 0 present.'
                                );
                            if ('object' != typeof o)
                                throw new TypeError(
                                    N.EVENT.CLOSE +
                                        " parameter 2 ('eventInitDict') is not an object"
                                );
                            var r = o.bubbles,
                                n = o.cancelable,
                                i = o.code,
                                s = o.reason,
                                a = o.wasClean;
                            (this.type = '' + e),
                                (this.timeStamp = Date.now()),
                                (this.target = null),
                                (this.srcElement = null),
                                (this.returnValue = !0),
                                (this.isTrusted = !1),
                                (this.eventPhase = 0),
                                (this.defaultPrevented = !1),
                                (this.currentTarget = null),
                                (this.cancelable = !!n && Boolean(n)),
                                (this.cancelBubble = !1),
                                (this.bubbles = !!r && Boolean(r)),
                                (this.code =
                                    'number' == typeof i ? parseInt(i, 10) : 0),
                                (this.reason = '' + (s || '')),
                                (this.wasClean = !!a && Boolean(a));
                        }
                        return (
                            t && (e.__proto__ = t),
                            (e.prototype = Object.create(t && t.prototype)),
                            (e.prototype.constructor = e),
                            e
                        );
                    })(_);
                function j(t) {
                    var e = t.type,
                        o = t.target,
                        r = new A(e);
                    return (
                        o &&
                            ((r.target = o),
                            (r.srcElement = o),
                            (r.currentTarget = o)),
                        r
                    );
                }
                function W(t) {
                    var e = t.type,
                        o = t.origin,
                        r = t.data,
                        n = t.target,
                        i = new I(e, { data: r, origin: o });
                    return (
                        n &&
                            ((i.target = n),
                            (i.srcElement = n),
                            (i.currentTarget = n)),
                        i
                    );
                }
                function x(t) {
                    var e = t.code,
                        o = t.reason,
                        r = t.type,
                        n = t.target,
                        i = t.wasClean;
                    i || (i = e === L || e === R);
                    var s = new P(r, { code: e, reason: o, wasClean: i });
                    return (
                        n &&
                            ((s.target = n),
                            (s.srcElement = n),
                            (s.currentTarget = n)),
                        s
                    );
                }
                function M(t, e, o) {
                    t.readyState = B.CLOSING;
                    var r = k.serverLookup(t.url),
                        n = x({
                            type: 'close',
                            target: t.target,
                            code: e,
                            reason: o,
                        }),
                        i = x({
                            type: 'server::close',
                            target: t,
                            code: e,
                            reason: o,
                        });
                    g(function() {
                        k.removeWebSocket(t, t.url),
                            (t.readyState = B.CLOSED),
                            t.dispatchEvent(n),
                            t.dispatchEvent(i),
                            r && r.dispatchEvent(n, r);
                    }, t);
                }
                function D(t) {
                    return (
                        '[object Blob]' === Object.prototype.toString.call(t) ||
                            t instanceof ArrayBuffer ||
                            (t = String(t)),
                        t
                    );
                }
                var U = new WeakMap();
                function G(t) {
                    if (U.has(t)) return U.get(t);
                    var e = new Proxy(t, {
                        get: function(o, r) {
                            return 'close' === r
                                ? function(t) {
                                      void 0 === t && (t = {});
                                      var o = t.code || L,
                                          r = t.reason || '';
                                      M(e, o, r);
                                  }
                                : 'send' === r
                                ? function(e) {
                                      (e = D(e)),
                                          t.dispatchEvent(
                                              W({
                                                  type: 'message',
                                                  data: e,
                                                  origin: this.url,
                                                  target: t,
                                              })
                                          );
                                  }
                                : 'on' === r
                                ? function(e, o) {
                                      t.addEventListener('server::' + e, o);
                                  }
                                : 'target' === r
                                ? t
                                : o[r];
                        },
                    });
                    return U.set(t, e), e;
                }
                var B = (function(t) {
                    function e(o, r) {
                        t.call(this),
                            (this._onopen = null),
                            (this._onmessage = null),
                            (this._onerror = null),
                            (this._onclose = null),
                            (this.url = (function(t) {
                                var e = new b(t),
                                    o = e.pathname,
                                    r = e.protocol,
                                    n = e.hash;
                                if (!t)
                                    throw new TypeError(
                                        N.CONSTRUCTOR_ERROR +
                                            ' 1 argument required, but only 0 present.'
                                    );
                                if ((o || (e.pathname = '/'), '' === r))
                                    throw new SyntaxError(
                                        N.CONSTRUCTOR_ERROR +
                                            " The URL '" +
                                            e.toString() +
                                            "' is invalid."
                                    );
                                if ('ws:' !== r && 'wss:' !== r)
                                    throw new SyntaxError(
                                        N.CONSTRUCTOR_ERROR +
                                            " The URL's scheme must be either 'ws' or 'wss'. '" +
                                            r +
                                            "' is not allowed."
                                    );
                                if ('' !== n)
                                    throw new SyntaxError(
                                        N.CONSTRUCTOR_ERROR +
                                            " The URL contains a fragment identifier ('" +
                                            n +
                                            "'). Fragment identifiers are not allowed in WebSocket URLs."
                                    );
                                return e.toString();
                            })(o)),
                            (r = (function(t) {
                                if (
                                    (void 0 === t && (t = []),
                                    !Array.isArray(t) && 'string' != typeof t)
                                )
                                    throw new SyntaxError(
                                        N.CONSTRUCTOR_ERROR +
                                            " The subprotocol '" +
                                            t.toString() +
                                            "' is invalid."
                                    );
                                'string' == typeof t && (t = [t]);
                                var e = t
                                        .map(function(t) {
                                            return { count: 1, protocol: t };
                                        })
                                        .reduce(function(t, e) {
                                            return (
                                                (t[e.protocol] =
                                                    (t[e.protocol] || 0) +
                                                    e.count),
                                                t
                                            );
                                        }, {}),
                                    o = Object.keys(e).filter(function(t) {
                                        return e[t] > 1;
                                    });
                                if (o.length > 0)
                                    throw new SyntaxError(
                                        N.CONSTRUCTOR_ERROR +
                                            " The subprotocol '" +
                                            o[0] +
                                            "' is duplicated."
                                    );
                                return t;
                            })(r)),
                            (this.protocol = r[0] || ''),
                            (this.binaryType = 'blob'),
                            (this.readyState = e.CONNECTING);
                        var n = G(this),
                            i = k.attachWebSocket(n, this.url);
                        g(function() {
                            if (i)
                                if (
                                    i.options.verifyClient &&
                                    'function' ==
                                        typeof i.options.verifyClient &&
                                    !i.options.verifyClient()
                                )
                                    (this.readyState = e.CLOSED),
                                        m(
                                            'error',
                                            "WebSocket connection to '" +
                                                this.url +
                                                "' failed: HTTP Authentication failed; no valid credentials available"
                                        ),
                                        k.removeWebSocket(n, this.url),
                                        this.dispatchEvent(
                                            j({ type: 'error', target: this })
                                        ),
                                        this.dispatchEvent(
                                            x({
                                                type: 'close',
                                                target: this,
                                                code: L,
                                            })
                                        );
                                else {
                                    if (
                                        i.options.selectProtocol &&
                                        'function' ==
                                            typeof i.options.selectProtocol
                                    ) {
                                        var t = i.options.selectProtocol(r),
                                            o = '' !== t,
                                            s = -1 !== r.indexOf(t);
                                        if (o && !s)
                                            return (
                                                (this.readyState = e.CLOSED),
                                                m(
                                                    'error',
                                                    "WebSocket connection to '" +
                                                        this.url +
                                                        "' failed: Invalid Sub-Protocol"
                                                ),
                                                k.removeWebSocket(n, this.url),
                                                this.dispatchEvent(
                                                    j({
                                                        type: 'error',
                                                        target: this,
                                                    })
                                                ),
                                                void this.dispatchEvent(
                                                    x({
                                                        type: 'close',
                                                        target: this,
                                                        code: L,
                                                    })
                                                )
                                            );
                                        this.protocol = t;
                                    }
                                    (this.readyState = e.OPEN),
                                        this.dispatchEvent(
                                            j({ type: 'open', target: this })
                                        ),
                                        i.dispatchEvent(
                                            j({ type: 'connection' }),
                                            n
                                        );
                                }
                            else
                                (this.readyState = e.CLOSED),
                                    this.dispatchEvent(
                                        j({ type: 'error', target: this })
                                    ),
                                    this.dispatchEvent(
                                        x({
                                            type: 'close',
                                            target: this,
                                            code: L,
                                        })
                                    ),
                                    m(
                                        'error',
                                        "WebSocket connection to '" +
                                            this.url +
                                            "' failed"
                                    );
                        }, this);
                    }
                    t && (e.__proto__ = t),
                        (e.prototype = Object.create(t && t.prototype)),
                        (e.prototype.constructor = e);
                    var o = {
                        onopen: {},
                        onmessage: {},
                        onclose: {},
                        onerror: {},
                    };
                    return (
                        (o.onopen.get = function() {
                            return this._onopen;
                        }),
                        (o.onmessage.get = function() {
                            return this._onmessage;
                        }),
                        (o.onclose.get = function() {
                            return this._onclose;
                        }),
                        (o.onerror.get = function() {
                            return this._onerror;
                        }),
                        (o.onopen.set = function(t) {
                            this.removeEventListener('open', this._onopen),
                                (this._onopen = t),
                                this.addEventListener('open', t);
                        }),
                        (o.onmessage.set = function(t) {
                            this.removeEventListener(
                                'message',
                                this._onmessage
                            ),
                                (this._onmessage = t),
                                this.addEventListener('message', t);
                        }),
                        (o.onclose.set = function(t) {
                            this.removeEventListener('close', this._onclose),
                                (this._onclose = t),
                                this.addEventListener('close', t);
                        }),
                        (o.onerror.set = function(t) {
                            this.removeEventListener('error', this._onerror),
                                (this._onerror = t),
                                this.addEventListener('error', t);
                        }),
                        (e.prototype.send = function(t) {
                            var o = this;
                            if (
                                this.readyState === e.CLOSING ||
                                this.readyState === e.CLOSED
                            )
                                throw new Error(
                                    'WebSocket is already in CLOSING or CLOSED state'
                                );
                            var r = W({
                                    type: 'server::message',
                                    origin: this.url,
                                    data: D(t),
                                }),
                                n = k.serverLookup(this.url);
                            n &&
                                g(function() {
                                    o.dispatchEvent(r, t);
                                }, n);
                        }),
                        (e.prototype.close = function(t, o) {
                            if (
                                void 0 !== t &&
                                ('number' != typeof t ||
                                    (1e3 !== t && (t < 3e3 || t > 4999)))
                            )
                                throw new TypeError(
                                    N.CLOSE_ERROR +
                                        ' The code must be either 1000, or between 3000 and 4999. ' +
                                        t +
                                        ' is neither.'
                                );
                            if (
                                void 0 !== o &&
                                ((r = o),
                                (n = encodeURIComponent(r).match(/%[89ABab]/g)),
                                r.length + (n ? n.length : 0) > 123)
                            )
                                throw new SyntaxError(
                                    N.CLOSE_ERROR +
                                        ' The message must not be greater than 123 bytes.'
                                );
                            var r, n;
                            if (
                                this.readyState !== e.CLOSING &&
                                this.readyState !== e.CLOSED
                            ) {
                                var i = G(this);
                                this.readyState === e.CONNECTING
                                    ? (function(t, e, o) {
                                          t.readyState = B.CLOSING;
                                          var r = k.serverLookup(t.url),
                                              n = x({
                                                  type: 'close',
                                                  target: t.target,
                                                  code: e,
                                                  reason: o,
                                                  wasClean: !1,
                                              }),
                                              i = x({
                                                  type: 'server::close',
                                                  target: t,
                                                  code: e,
                                                  reason: o,
                                                  wasClean: !1,
                                              }),
                                              s = j({
                                                  type: 'error',
                                                  target: t.target,
                                              });
                                          g(function() {
                                              k.removeWebSocket(t, t.url),
                                                  (t.readyState = B.CLOSED),
                                                  t.dispatchEvent(s),
                                                  t.dispatchEvent(n),
                                                  t.dispatchEvent(i),
                                                  r && r.dispatchEvent(n, r);
                                          }, t);
                                      })(i, t || T, o)
                                    : M(i, t || R, o);
                            }
                        }),
                        Object.defineProperties(e.prototype, o),
                        e
                    );
                })(w);
                (B.CONNECTING = 0),
                    (B.prototype.CONNECTING = B.CONNECTING),
                    (B.OPEN = 1),
                    (B.prototype.OPEN = B.OPEN),
                    (B.CLOSING = 2),
                    (B.prototype.CLOSING = B.CLOSING),
                    (B.CLOSED = 3),
                    (B.prototype.CLOSED = B.CLOSED);
                function q() {
                    return 'undefined' != typeof window
                        ? window
                        : 'object' == typeof o.g
                        ? o.g
                        : this;
                }
                var F = { mock: !0, verifyClient: null, selectProtocol: null },
                    V = (function(t) {
                        function e(e, o) {
                            void 0 === o && (o = F), t.call(this);
                            var r = new b(e);
                            if (
                                (r.pathname || (r.pathname = '/'),
                                (this.url = r.toString()),
                                (this.originalWebSocket = null),
                                !k.attachServer(this, this.url))
                            )
                                throw (this.dispatchEvent(j({ type: 'error' })),
                                new Error(
                                    'A mock server is already listening on this url'
                                ));
                            (this.options = Object.assign({}, F, o)),
                                this.options.mock && this.mockWebsocket();
                        }
                        return (
                            t && (e.__proto__ = t),
                            (e.prototype = Object.create(t && t.prototype)),
                            (e.prototype.constructor = e),
                            (e.prototype.mockWebsocket = function() {
                                var t = q();
                                (this.originalWebSocket = t.WebSocket),
                                    (t.WebSocket = B);
                            }),
                            (e.prototype.restoreWebsocket = function() {
                                var t = q();
                                null !== this.originalWebSocket &&
                                    (t.WebSocket = this.originalWebSocket),
                                    (this.originalWebSocket = null);
                            }),
                            (e.prototype.stop = function(t) {
                                void 0 === t && (t = function() {}),
                                    this.options.mock &&
                                        this.restoreWebsocket(),
                                    k.removeServer(this.url),
                                    'function' == typeof t && t();
                            }),
                            (e.prototype.on = function(t, e) {
                                this.addEventListener(t, e);
                            }),
                            (e.prototype.close = function(t) {
                                void 0 === t && (t = {});
                                var e = t.code,
                                    o = t.reason,
                                    r = t.wasClean,
                                    n = k.websocketsLookup(this.url);
                                k.removeServer(this.url),
                                    n.forEach(function(t) {
                                        (t.readyState = B.CLOSED),
                                            t.dispatchEvent(
                                                x({
                                                    type: 'close',
                                                    target: t.target,
                                                    code: e || L,
                                                    reason: o || '',
                                                    wasClean: r,
                                                })
                                            );
                                    }),
                                    this.dispatchEvent(
                                        x({ type: 'close' }),
                                        this
                                    );
                            }),
                            (e.prototype.emit = function(t, e, o) {
                                var r = this;
                                void 0 === o && (o = {});
                                var n = o.websockets;
                                n || (n = k.websocketsLookup(this.url)),
                                    (e =
                                        'object' != typeof o ||
                                        arguments.length > 3
                                            ? (e = Array.prototype.slice.call(
                                                  arguments,
                                                  1,
                                                  arguments.length
                                              )).map(function(t) {
                                                  return D(t);
                                              })
                                            : D(e)),
                                    n.forEach(function(o) {
                                        Array.isArray(e)
                                            ? o.dispatchEvent.apply(
                                                  o,
                                                  [
                                                      W({
                                                          type: t,
                                                          data: e,
                                                          origin: r.url,
                                                          target: o.target,
                                                      }),
                                                  ].concat(e)
                                              )
                                            : o.dispatchEvent(
                                                  W({
                                                      type: t,
                                                      data: e,
                                                      origin: r.url,
                                                      target: o.target,
                                                  })
                                              );
                                    });
                            }),
                            (e.prototype.clients = function() {
                                return k.websocketsLookup(this.url);
                            }),
                            (e.prototype.to = function(t, e, o) {
                                var r = this;
                                void 0 === o && (o = []);
                                var n = this,
                                    i = o
                                        .concat(
                                            k.websocketsLookup(this.url, t, e)
                                        )
                                        .reduce(function(t, e) {
                                            return t.indexOf(e) > -1
                                                ? t
                                                : t.concat(e);
                                        }, []);
                                return {
                                    to: function(t, e) {
                                        return r.to.call(r, t, e, i);
                                    },
                                    emit: function(t, e) {
                                        n.emit(t, e, { websockets: i });
                                    },
                                };
                            }),
                            (e.prototype.in = function() {
                                for (var t = [], e = arguments.length; e--; )
                                    t[e] = arguments[e];
                                return this.to.apply(null, t);
                            }),
                            (e.prototype.simulate = function(t) {
                                var e = k.websocketsLookup(this.url);
                                'error' === t &&
                                    e.forEach(function(t) {
                                        (t.readyState = B.CLOSED),
                                            t.dispatchEvent(
                                                j({ type: 'error' })
                                            );
                                    });
                            }),
                            e
                        );
                    })(w);
                V.of = function(t) {
                    return new V(t);
                };
                var z = (function(t) {
                    function e(o, r) {
                        var n = this;
                        void 0 === o && (o = 'socket.io'),
                            void 0 === r && (r = ''),
                            t.call(this),
                            (this.binaryType = 'blob');
                        var i = new b(o);
                        i.pathname || (i.pathname = '/'),
                            (this.url = i.toString()),
                            (this.readyState = e.CONNECTING),
                            (this.protocol = ''),
                            (this.target = this),
                            'string' == typeof r ||
                            ('object' == typeof r && null !== r)
                                ? (this.protocol = r)
                                : Array.isArray(r) &&
                                  r.length > 0 &&
                                  (this.protocol = r[0]);
                        var s = k.attachWebSocket(this, this.url);
                        g(function() {
                            s
                                ? ((this.readyState = e.OPEN),
                                  s.dispatchEvent(
                                      j({ type: 'connection' }),
                                      s,
                                      this
                                  ),
                                  s.dispatchEvent(
                                      j({ type: 'connect' }),
                                      s,
                                      this
                                  ),
                                  this.dispatchEvent(
                                      j({ type: 'connect', target: this })
                                  ))
                                : ((this.readyState = e.CLOSED),
                                  this.dispatchEvent(
                                      j({ type: 'error', target: this })
                                  ),
                                  this.dispatchEvent(
                                      x({
                                          type: 'close',
                                          target: this,
                                          code: L,
                                      })
                                  ),
                                  m(
                                      'error',
                                      "Socket.io connection to '" +
                                          this.url +
                                          "' failed"
                                  ));
                        }, this),
                            this.addEventListener('close', function(t) {
                                n.dispatchEvent(
                                    x({
                                        type: 'disconnect',
                                        target: t.target,
                                        code: t.code,
                                    })
                                );
                            });
                    }
                    t && (e.__proto__ = t),
                        (e.prototype = Object.create(t && t.prototype)),
                        (e.prototype.constructor = e);
                    var o = { broadcast: {} };
                    return (
                        (e.prototype.close = function() {
                            if (this.readyState === e.OPEN) {
                                var t = k.serverLookup(this.url);
                                return (
                                    k.removeWebSocket(this, this.url),
                                    (this.readyState = e.CLOSED),
                                    this.dispatchEvent(
                                        x({
                                            type: 'close',
                                            target: this,
                                            code: L,
                                        })
                                    ),
                                    t &&
                                        t.dispatchEvent(
                                            x({
                                                type: 'disconnect',
                                                target: this,
                                                code: L,
                                            }),
                                            t
                                        ),
                                    this
                                );
                            }
                        }),
                        (e.prototype.disconnect = function() {
                            return this.close();
                        }),
                        (e.prototype.emit = function(t) {
                            for (
                                var o = [], r = arguments.length - 1;
                                r-- > 0;

                            )
                                o[r] = arguments[r + 1];
                            if (this.readyState !== e.OPEN)
                                throw new Error(
                                    'SocketIO is already in CLOSING or CLOSED state'
                                );
                            var n = W({ type: t, origin: this.url, data: o }),
                                i = k.serverLookup(this.url);
                            return (
                                i && i.dispatchEvent.apply(i, [n].concat(o)),
                                this
                            );
                        }),
                        (e.prototype.send = function(t) {
                            return this.emit('message', t), this;
                        }),
                        (o.broadcast.get = function() {
                            if (this.readyState !== e.OPEN)
                                throw new Error(
                                    'SocketIO is already in CLOSING or CLOSED state'
                                );
                            var t = this,
                                o = k.serverLookup(this.url);
                            if (!o)
                                throw new Error(
                                    'SocketIO can not find a server at the specified URL (' +
                                        this.url +
                                        ')'
                                );
                            return {
                                emit: function(e, r) {
                                    return (
                                        o.emit(e, r, {
                                            websockets: k.websocketsLookup(
                                                t.url,
                                                null,
                                                t
                                            ),
                                        }),
                                        t
                                    );
                                },
                                to: function(e) {
                                    return o.to(e, t);
                                },
                                in: function(e) {
                                    return o.in(e, t);
                                },
                            };
                        }),
                        (e.prototype.on = function(t, e) {
                            return this.addEventListener(t, e), this;
                        }),
                        (e.prototype.off = function(t, e) {
                            this.removeEventListener(t, e);
                        }),
                        (e.prototype.hasListeners = function(t) {
                            var e = this.listeners[t];
                            return !!Array.isArray(e) && !!e.length;
                        }),
                        (e.prototype.join = function(t) {
                            k.addMembershipToRoom(this, t);
                        }),
                        (e.prototype.leave = function(t) {
                            k.removeMembershipFromRoom(this, t);
                        }),
                        (e.prototype.to = function(t) {
                            return this.broadcast.to(t);
                        }),
                        (e.prototype.in = function() {
                            return this.to.apply(null, arguments);
                        }),
                        (e.prototype.dispatchEvent = function(t) {
                            for (
                                var e = this, o = [], r = arguments.length - 1;
                                r-- > 0;

                            )
                                o[r] = arguments[r + 1];
                            var n = t.type,
                                i = this.listeners[n];
                            if (!Array.isArray(i)) return !1;
                            i.forEach(function(r) {
                                o.length > 0
                                    ? r.apply(e, o)
                                    : r.call(e, t.data ? t.data : t);
                            });
                        }),
                        Object.defineProperties(e.prototype, o),
                        e
                    );
                })(w);
                (z.CONNECTING = 0),
                    (z.OPEN = 1),
                    (z.CLOSING = 2),
                    (z.CLOSED = 3);
                var J = function(t, e) {
                    return new z(t, e);
                };
                J.connect = function(t, e) {
                    return J(t, e);
                };
                var Y = V,
                    Z = B,
                    $ = J;
                (t.Server = Y),
                    (t.WebSocket = Z),
                    (t.SocketIO = $),
                    Object.defineProperty(t, '__esModule', { value: !0 });
            })(e);
        },
    },
]);
//# sourceMappingURL=1079.cdbaf67.js.map
