'use strict';
(self.webpackChunk_JUPYTERLAB_CORE_OUTPUT =
    self.webpackChunk_JUPYTERLAB_CORE_OUTPUT || []).push([
    [61],
    {
        65880: (u, e, t) => {
            t.d(e, { r: () => o });
            const r = /[[\]{}]/,
                n = {
                    '*': 1,
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
                };
            let A, a;
            function o(u, e, t) {
                return (A = e || 'view'), (a = t || n), s(u.trim()).map(i);
            }
            function F(u, e, t, r, n) {
                const A = u.length;
                let a,
                    o = 0;
                for (; e < A; ++e) {
                    if (((a = u[e]), !o && a === t)) return e;
                    n && n.indexOf(a) >= 0
                        ? --o
                        : r && r.indexOf(a) >= 0 && ++o;
                }
                return e;
            }
            function s(u) {
                const e = [],
                    t = u.length;
                let r = 0,
                    n = 0;
                for (; n < t; )
                    (n = F(u, n, ',', '[{', ']}')),
                        e.push(u.substring(r, n).trim()),
                        (r = ++n);
                if (0 === e.length) throw 'Empty event selector: ' + u;
                return e;
            }
            function i(u) {
                return '[' === u[0]
                    ? (function(u) {
                          const e = u.length;
                          let t,
                              r = 1;
                          if (((r = F(u, r, ']', '[', ']')), r === e))
                              throw 'Empty between selector: ' + u;
                          if (((t = s(u.substring(1, r))), 2 !== t.length))
                              throw 'Between selector must have two elements: ' +
                                  u;
                          if ('>' !== (u = u.slice(r + 1).trim())[0])
                              throw "Expected '>' after between selector: " + u;
                          t = t.map(i);
                          const n = i(u.slice(1).trim());
                          return n.between
                              ? { between: t, stream: n }
                              : ((n.between = t), n);
                      })(u)
                    : (function(u) {
                          const e = { source: A },
                              t = [];
                          let n,
                              o,
                              s = [0, 0],
                              i = 0,
                              C = 0,
                              c = u.length,
                              B = 0;
                          if ('}' === u[c - 1]) {
                              if (((B = u.lastIndexOf('{')), !(B >= 0)))
                                  throw 'Unmatched right brace: ' + u;
                              try {
                                  s = (function(u) {
                                      const e = u.split(',');
                                      if (!u.length || e.length > 2) throw u;
                                      return e.map(e => {
                                          const t = +e;
                                          if (t != t) throw u;
                                          return t;
                                      });
                                  })(u.substring(B + 1, c - 1));
                              } catch (e) {
                                  throw 'Invalid throttle specification: ' + u;
                              }
                              (c = (u = u.slice(0, B).trim()).length), (B = 0);
                          }
                          if (!c) throw u;
                          if (
                              ('@' === u[0] && (i = ++B),
                              (n = F(u, B, ':')),
                              n < c &&
                                  (t.push(u.substring(C, n).trim()),
                                  (C = B = ++n)),
                              (B = F(u, B, '[')),
                              B === c)
                          )
                              t.push(u.substring(C, c).trim());
                          else if (
                              (t.push(u.substring(C, B).trim()),
                              (o = []),
                              (C = ++B),
                              C === c)
                          )
                              throw 'Unmatched left bracket: ' + u;
                          for (; B < c; ) {
                              if (((B = F(u, B, ']')), B === c))
                                  throw 'Unmatched left bracket: ' + u;
                              if (
                                  (o.push(u.substring(C, B).trim()),
                                  B < c - 1 && '[' !== u[++B])
                              )
                                  throw 'Expected left bracket: ' + u;
                              C = ++B;
                          }
                          if (!(c = t.length) || r.test(t[c - 1]))
                              throw 'Invalid event selector: ' + u;
                          var D;
                          return (
                              c > 1
                                  ? ((e.type = t[1]),
                                    i
                                        ? (e.markname = t[0].slice(1))
                                        : ((D = t[0]),
                                          a[D]
                                              ? (e.marktype = t[0])
                                              : (e.source = t[0])))
                                  : (e.type = t[0]),
                              '!' === e.type.slice(-1) &&
                                  ((e.consume = !0),
                                  (e.type = e.type.slice(0, -1))),
                              null != o && (e.filter = o),
                              s[0] && (e.throttle = s[0]),
                              s[1] && (e.debounce = s[1]),
                              e
                          );
                      })(u);
            }
        },
        34358: (u, e, t) => {
            t.d(e, {
                BJ: () => ou,
                Lt: () => A,
                YP: () => iu,
                _G: () => Fu,
                t$: () => n,
                wk: () => su,
            });
            var r = t(68542);
            const n = 'Literal',
                A = 'CallExpression';
            function a(u) {
                this.type = u;
            }
            var o, F, s, i, C;
            (a.prototype.visit = function(u) {
                let e, t, r;
                if (u(this)) return 1;
                for (
                    e = (function(u) {
                        switch (u.type) {
                            case 'ArrayExpression':
                                return u.elements;
                            case 'BinaryExpression':
                            case 'LogicalExpression':
                                return [u.left, u.right];
                            case A:
                                return [u.callee].concat(u.arguments);
                            case 'ConditionalExpression':
                                return [u.test, u.consequent, u.alternate];
                            case 'MemberExpression':
                                return [u.object, u.property];
                            case 'ObjectExpression':
                                return u.properties;
                            case 'Property':
                                return [u.key, u.value];
                            case 'UnaryExpression':
                                return [u.argument];
                            default:
                                return [];
                        }
                    })(this),
                        t = 0,
                        r = e.length;
                    t < r;
                    ++t
                )
                    if (e[t].visit(u)) return 1;
            }),
                ((o = {})[1] = 'Boolean'),
                (o[2] = '<end>'),
                (o[3] = 'Identifier'),
                (o[4] = 'Keyword'),
                (o[5] = 'Null'),
                (o[6] = 'Numeric'),
                (o[7] = 'Punctuator'),
                (o[8] = 'String'),
                (o[9] = 'RegularExpression');
            var c = 'Identifier',
                B = 'Unexpected token %0',
                D = 'Invalid regular expression',
                E = 'Invalid regular expression: missing /',
                l = 'Octal literals are not allowed in strict mode.',
                f = 'ILLEGAL',
                p = 'Disabled.',
                h = new RegExp(
                    '[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0370-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0620-\\u064A\\u066E\\u066F\\u0671-\\u06D3\\u06D5\\u06E5\\u06E6\\u06EE\\u06EF\\u06FA-\\u06FC\\u06FF\\u0710\\u0712-\\u072F\\u074D-\\u07A5\\u07B1\\u07CA-\\u07EA\\u07F4\\u07F5\\u07FA\\u0800-\\u0815\\u081A\\u0824\\u0828\\u0840-\\u0858\\u08A0-\\u08B2\\u0904-\\u0939\\u093D\\u0950\\u0958-\\u0961\\u0971-\\u0980\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BD\\u09CE\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AD0\\u0AE0\\u0AE1\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B71\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BD0\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D\\u0C58\\u0C59\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBD\\u0CDE\\u0CE0\\u0CE1\\u0CF1\\u0CF2\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D\\u0D4E\\u0D60\\u0D61\\u0D7A-\\u0D7F\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0E01-\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E46\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EDC-\\u0EDF\\u0F00\\u0F40-\\u0F47\\u0F49-\\u0F6C\\u0F88-\\u0F8C\\u1000-\\u102A\\u103F\\u1050-\\u1055\\u105A-\\u105D\\u1061\\u1065\\u1066\\u106E-\\u1070\\u1075-\\u1081\\u108E\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1711\\u1720-\\u1731\\u1740-\\u1751\\u1760-\\u176C\\u176E-\\u1770\\u1780-\\u17B3\\u17D7\\u17DC\\u1820-\\u1877\\u1880-\\u18A8\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1950-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19C1-\\u19C7\\u1A00-\\u1A16\\u1A20-\\u1A54\\u1AA7\\u1B05-\\u1B33\\u1B45-\\u1B4B\\u1B83-\\u1BA0\\u1BAE\\u1BAF\\u1BBA-\\u1BE5\\u1C00-\\u1C23\\u1C4D-\\u1C4F\\u1C5A-\\u1C7D\\u1CE9-\\u1CEC\\u1CEE-\\u1CF1\\u1CF5\\u1CF6\\u1D00-\\u1DBF\\u1E00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2071\\u207F\\u2090-\\u209C\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CEE\\u2CF2\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D80-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2E2F\\u3005-\\u3007\\u3021-\\u3029\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA61F\\uA62A\\uA62B\\uA640-\\uA66E\\uA67F-\\uA69D\\uA6A0-\\uA6EF\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA801\\uA803-\\uA805\\uA807-\\uA80A\\uA80C-\\uA822\\uA840-\\uA873\\uA882-\\uA8B3\\uA8F2-\\uA8F7\\uA8FB\\uA90A-\\uA925\\uA930-\\uA946\\uA960-\\uA97C\\uA984-\\uA9B2\\uA9CF\\uA9E0-\\uA9E4\\uA9E6-\\uA9EF\\uA9FA-\\uA9FE\\uAA00-\\uAA28\\uAA40-\\uAA42\\uAA44-\\uAA4B\\uAA60-\\uAA76\\uAA7A\\uAA7E-\\uAAAF\\uAAB1\\uAAB5\\uAAB6\\uAAB9-\\uAABD\\uAAC0\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEA\\uAAF2-\\uAAF4\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABE2\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D\\uFB1F-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF21-\\uFF3A\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]'
                ),
                d = new RegExp(
                    '[\\xAA\\xB5\\xBA\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u02C1\\u02C6-\\u02D1\\u02E0-\\u02E4\\u02EC\\u02EE\\u0300-\\u0374\\u0376\\u0377\\u037A-\\u037D\\u037F\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03F5\\u03F7-\\u0481\\u0483-\\u0487\\u048A-\\u052F\\u0531-\\u0556\\u0559\\u0561-\\u0587\\u0591-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u05C5\\u05C7\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0610-\\u061A\\u0620-\\u0669\\u066E-\\u06D3\\u06D5-\\u06DC\\u06DF-\\u06E8\\u06EA-\\u06FC\\u06FF\\u0710-\\u074A\\u074D-\\u07B1\\u07C0-\\u07F5\\u07FA\\u0800-\\u082D\\u0840-\\u085B\\u08A0-\\u08B2\\u08E4-\\u0963\\u0966-\\u096F\\u0971-\\u0983\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09BC-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CE\\u09D7\\u09DC\\u09DD\\u09DF-\\u09E3\\u09E6-\\u09F1\\u0A01-\\u0A03\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A51\\u0A59-\\u0A5C\\u0A5E\\u0A66-\\u0A75\\u0A81-\\u0A83\\u0A85-\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABC-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0AD0\\u0AE0-\\u0AE3\\u0AE6-\\u0AEF\\u0B01-\\u0B03\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B35-\\u0B39\\u0B3C-\\u0B44\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B5C\\u0B5D\\u0B5F-\\u0B63\\u0B66-\\u0B6F\\u0B71\\u0B82\\u0B83\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB9\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD0\\u0BD7\\u0BE6-\\u0BEF\\u0C00-\\u0C03\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C39\\u0C3D-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C58\\u0C59\\u0C60-\\u0C63\\u0C66-\\u0C6F\\u0C81-\\u0C83\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CBC-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0CDE\\u0CE0-\\u0CE3\\u0CE6-\\u0CEF\\u0CF1\\u0CF2\\u0D01-\\u0D03\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D3A\\u0D3D-\\u0D44\\u0D46-\\u0D48\\u0D4A-\\u0D4E\\u0D57\\u0D60-\\u0D63\\u0D66-\\u0D6F\\u0D7A-\\u0D7F\\u0D82\\u0D83\\u0D85-\\u0D96\\u0D9A-\\u0DB1\\u0DB3-\\u0DBB\\u0DBD\\u0DC0-\\u0DC6\\u0DCA\\u0DCF-\\u0DD4\\u0DD6\\u0DD8-\\u0DDF\\u0DE6-\\u0DEF\\u0DF2\\u0DF3\\u0E01-\\u0E3A\\u0E40-\\u0E4E\\u0E50-\\u0E59\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD-\\u0EB9\\u0EBB-\\u0EBD\\u0EC0-\\u0EC4\\u0EC6\\u0EC8-\\u0ECD\\u0ED0-\\u0ED9\\u0EDC-\\u0EDF\\u0F00\\u0F18\\u0F19\\u0F20-\\u0F29\\u0F35\\u0F37\\u0F39\\u0F3E-\\u0F47\\u0F49-\\u0F6C\\u0F71-\\u0F84\\u0F86-\\u0F97\\u0F99-\\u0FBC\\u0FC6\\u1000-\\u1049\\u1050-\\u109D\\u10A0-\\u10C5\\u10C7\\u10CD\\u10D0-\\u10FA\\u10FC-\\u1248\\u124A-\\u124D\\u1250-\\u1256\\u1258\\u125A-\\u125D\\u1260-\\u1288\\u128A-\\u128D\\u1290-\\u12B0\\u12B2-\\u12B5\\u12B8-\\u12BE\\u12C0\\u12C2-\\u12C5\\u12C8-\\u12D6\\u12D8-\\u1310\\u1312-\\u1315\\u1318-\\u135A\\u135D-\\u135F\\u1380-\\u138F\\u13A0-\\u13F4\\u1401-\\u166C\\u166F-\\u167F\\u1681-\\u169A\\u16A0-\\u16EA\\u16EE-\\u16F8\\u1700-\\u170C\\u170E-\\u1714\\u1720-\\u1734\\u1740-\\u1753\\u1760-\\u176C\\u176E-\\u1770\\u1772\\u1773\\u1780-\\u17D3\\u17D7\\u17DC\\u17DD\\u17E0-\\u17E9\\u180B-\\u180D\\u1810-\\u1819\\u1820-\\u1877\\u1880-\\u18AA\\u18B0-\\u18F5\\u1900-\\u191E\\u1920-\\u192B\\u1930-\\u193B\\u1946-\\u196D\\u1970-\\u1974\\u1980-\\u19AB\\u19B0-\\u19C9\\u19D0-\\u19D9\\u1A00-\\u1A1B\\u1A20-\\u1A5E\\u1A60-\\u1A7C\\u1A7F-\\u1A89\\u1A90-\\u1A99\\u1AA7\\u1AB0-\\u1ABD\\u1B00-\\u1B4B\\u1B50-\\u1B59\\u1B6B-\\u1B73\\u1B80-\\u1BF3\\u1C00-\\u1C37\\u1C40-\\u1C49\\u1C4D-\\u1C7D\\u1CD0-\\u1CD2\\u1CD4-\\u1CF6\\u1CF8\\u1CF9\\u1D00-\\u1DF5\\u1DFC-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u200C\\u200D\\u203F\\u2040\\u2054\\u2071\\u207F\\u2090-\\u209C\\u20D0-\\u20DC\\u20E1\\u20E5-\\u20F0\\u2102\\u2107\\u210A-\\u2113\\u2115\\u2119-\\u211D\\u2124\\u2126\\u2128\\u212A-\\u212D\\u212F-\\u2139\\u213C-\\u213F\\u2145-\\u2149\\u214E\\u2160-\\u2188\\u2C00-\\u2C2E\\u2C30-\\u2C5E\\u2C60-\\u2CE4\\u2CEB-\\u2CF3\\u2D00-\\u2D25\\u2D27\\u2D2D\\u2D30-\\u2D67\\u2D6F\\u2D7F-\\u2D96\\u2DA0-\\u2DA6\\u2DA8-\\u2DAE\\u2DB0-\\u2DB6\\u2DB8-\\u2DBE\\u2DC0-\\u2DC6\\u2DC8-\\u2DCE\\u2DD0-\\u2DD6\\u2DD8-\\u2DDE\\u2DE0-\\u2DFF\\u2E2F\\u3005-\\u3007\\u3021-\\u302F\\u3031-\\u3035\\u3038-\\u303C\\u3041-\\u3096\\u3099\\u309A\\u309D-\\u309F\\u30A1-\\u30FA\\u30FC-\\u30FF\\u3105-\\u312D\\u3131-\\u318E\\u31A0-\\u31BA\\u31F0-\\u31FF\\u3400-\\u4DB5\\u4E00-\\u9FCC\\uA000-\\uA48C\\uA4D0-\\uA4FD\\uA500-\\uA60C\\uA610-\\uA62B\\uA640-\\uA66F\\uA674-\\uA67D\\uA67F-\\uA69D\\uA69F-\\uA6F1\\uA717-\\uA71F\\uA722-\\uA788\\uA78B-\\uA78E\\uA790-\\uA7AD\\uA7B0\\uA7B1\\uA7F7-\\uA827\\uA840-\\uA873\\uA880-\\uA8C4\\uA8D0-\\uA8D9\\uA8E0-\\uA8F7\\uA8FB\\uA900-\\uA92D\\uA930-\\uA953\\uA960-\\uA97C\\uA980-\\uA9C0\\uA9CF-\\uA9D9\\uA9E0-\\uA9FE\\uAA00-\\uAA36\\uAA40-\\uAA4D\\uAA50-\\uAA59\\uAA60-\\uAA76\\uAA7A-\\uAAC2\\uAADB-\\uAADD\\uAAE0-\\uAAEF\\uAAF2-\\uAAF6\\uAB01-\\uAB06\\uAB09-\\uAB0E\\uAB11-\\uAB16\\uAB20-\\uAB26\\uAB28-\\uAB2E\\uAB30-\\uAB5A\\uAB5C-\\uAB5F\\uAB64\\uAB65\\uABC0-\\uABEA\\uABEC\\uABED\\uABF0-\\uABF9\\uAC00-\\uD7A3\\uD7B0-\\uD7C6\\uD7CB-\\uD7FB\\uF900-\\uFA6D\\uFA70-\\uFAD9\\uFB00-\\uFB06\\uFB13-\\uFB17\\uFB1D-\\uFB28\\uFB2A-\\uFB36\\uFB38-\\uFB3C\\uFB3E\\uFB40\\uFB41\\uFB43\\uFB44\\uFB46-\\uFBB1\\uFBD3-\\uFD3D\\uFD50-\\uFD8F\\uFD92-\\uFDC7\\uFDF0-\\uFDFB\\uFE00-\\uFE0F\\uFE20-\\uFE2D\\uFE33\\uFE34\\uFE4D-\\uFE4F\\uFE70-\\uFE74\\uFE76-\\uFEFC\\uFF10-\\uFF19\\uFF21-\\uFF3A\\uFF3F\\uFF41-\\uFF5A\\uFF66-\\uFFBE\\uFFC2-\\uFFC7\\uFFCA-\\uFFCF\\uFFD2-\\uFFD7\\uFFDA-\\uFFDC]'
                );
            function g(u, e) {
                if (!u) throw new Error('ASSERT: ' + e);
            }
            function m(u) {
                return u >= 48 && u <= 57;
            }
            function y(u) {
                return '0123456789abcdefABCDEF'.indexOf(u) >= 0;
            }
            function x(u) {
                return '01234567'.indexOf(u) >= 0;
            }
            function v(u) {
                return (
                    32 === u ||
                    9 === u ||
                    11 === u ||
                    12 === u ||
                    160 === u ||
                    (u >= 5760 &&
                        [
                            5760,
                            6158,
                            8192,
                            8193,
                            8194,
                            8195,
                            8196,
                            8197,
                            8198,
                            8199,
                            8200,
                            8201,
                            8202,
                            8239,
                            8287,
                            12288,
                            65279,
                        ].indexOf(u) >= 0)
                );
            }
            function w(u) {
                return 10 === u || 13 === u || 8232 === u || 8233 === u;
            }
            function b(u) {
                return (
                    36 === u ||
                    95 === u ||
                    (u >= 65 && u <= 90) ||
                    (u >= 97 && u <= 122) ||
                    92 === u ||
                    (u >= 128 && h.test(String.fromCharCode(u)))
                );
            }
            function k(u) {
                return (
                    36 === u ||
                    95 === u ||
                    (u >= 65 && u <= 90) ||
                    (u >= 97 && u <= 122) ||
                    (u >= 48 && u <= 57) ||
                    92 === u ||
                    (u >= 128 && d.test(String.fromCharCode(u)))
                );
            }
            const M = {
                if: 1,
                in: 1,
                do: 1,
                var: 1,
                for: 1,
                new: 1,
                try: 1,
                let: 1,
                this: 1,
                else: 1,
                case: 1,
                void: 1,
                with: 1,
                enum: 1,
                while: 1,
                break: 1,
                catch: 1,
                throw: 1,
                const: 1,
                yield: 1,
                class: 1,
                super: 1,
                return: 1,
                typeof: 1,
                delete: 1,
                switch: 1,
                export: 1,
                import: 1,
                public: 1,
                static: 1,
                default: 1,
                finally: 1,
                extends: 1,
                package: 1,
                private: 1,
                function: 1,
                continue: 1,
                debugger: 1,
                interface: 1,
                protected: 1,
                instanceof: 1,
                implements: 1,
            };
            function U() {
                for (; s < i; ) {
                    const u = F.charCodeAt(s);
                    if (!v(u) && !w(u)) break;
                    ++s;
                }
            }
            function O(u) {
                var e,
                    t,
                    r,
                    n = 0;
                for (t = 'u' === u ? 4 : 2, e = 0; e < t; ++e)
                    s < i && y(F[s])
                        ? ((r = F[s++]),
                          (n =
                              16 * n +
                              '0123456789abcdef'.indexOf(r.toLowerCase())))
                        : V({}, B, f);
                return String.fromCharCode(n);
            }
            function L() {
                var u, e, t, r;
                for (
                    e = 0, '}' === (u = F[s]) && V({}, B, f);
                    s < i && y((u = F[s++]));

                )
                    e = 16 * e + '0123456789abcdef'.indexOf(u.toLowerCase());
                return (
                    (e > 1114111 || '}' !== u) && V({}, B, f),
                    e <= 65535
                        ? String.fromCharCode(e)
                        : ((t = 55296 + ((e - 65536) >> 10)),
                          (r = 56320 + ((e - 65536) & 1023)),
                          String.fromCharCode(t, r))
                );
            }
            function T() {
                var u, e;
                for (
                    u = F.charCodeAt(s++),
                        e = String.fromCharCode(u),
                        92 === u &&
                            (117 !== F.charCodeAt(s) && V({}, B, f),
                            ++s,
                            ((u = O('u')) &&
                                '\\' !== u &&
                                b(u.charCodeAt(0))) ||
                                V({}, B, f),
                            (e = u));
                    s < i && k((u = F.charCodeAt(s)));

                )
                    ++s,
                        (e += String.fromCharCode(u)),
                        92 === u &&
                            ((e = e.substr(0, e.length - 1)),
                            117 !== F.charCodeAt(s) && V({}, B, f),
                            ++s,
                            ((u = O('u')) &&
                                '\\' !== u &&
                                k(u.charCodeAt(0))) ||
                                V({}, B, f),
                            (e += u));
                return e;
            }
            function S() {
                var u,
                    e,
                    t,
                    r,
                    n = s,
                    A = F.charCodeAt(s),
                    a = F[s];
                switch (A) {
                    case 46:
                    case 40:
                    case 41:
                    case 59:
                    case 44:
                    case 123:
                    case 125:
                    case 91:
                    case 93:
                    case 58:
                    case 63:
                    case 126:
                        return (
                            ++s,
                            {
                                type: 7,
                                value: String.fromCharCode(A),
                                start: n,
                                end: s,
                            }
                        );
                    default:
                        if (61 === (u = F.charCodeAt(s + 1)))
                            switch (A) {
                                case 43:
                                case 45:
                                case 47:
                                case 60:
                                case 62:
                                case 94:
                                case 124:
                                case 37:
                                case 38:
                                case 42:
                                    return (
                                        (s += 2),
                                        {
                                            type: 7,
                                            value:
                                                String.fromCharCode(A) +
                                                String.fromCharCode(u),
                                            start: n,
                                            end: s,
                                        }
                                    );
                                case 33:
                                case 61:
                                    return (
                                        (s += 2),
                                        61 === F.charCodeAt(s) && ++s,
                                        {
                                            type: 7,
                                            value: F.slice(n, s),
                                            start: n,
                                            end: s,
                                        }
                                    );
                            }
                }
                return '>>>=' === (r = F.substr(s, 4))
                    ? { type: 7, value: r, start: n, end: (s += 4) }
                    : '>>>' === (t = r.substr(0, 3)) ||
                      '<<=' === t ||
                      '>>=' === t
                    ? { type: 7, value: t, start: n, end: (s += 3) }
                    : (a === (e = t.substr(0, 2))[1] &&
                          '+-<>&|'.indexOf(a) >= 0) ||
                      '=>' === e
                    ? { type: 7, value: e, start: n, end: (s += 2) }
                    : ('//' === e && V({}, B, f),
                      '<>=!+-*%&|^/'.indexOf(a) >= 0
                          ? { type: 7, value: a, start: n, end: ++s }
                          : void V({}, B, f));
            }
            function I() {
                var u, e, t;
                if (
                    (g(
                        m((t = F[s]).charCodeAt(0)) || '.' === t,
                        'Numeric literal must start with a decimal digit or a decimal point'
                    ),
                    (e = s),
                    (u = ''),
                    '.' !== t)
                ) {
                    if (((u = F[s++]), (t = F[s]), '0' === u)) {
                        if ('x' === t || 'X' === t)
                            return (
                                ++s,
                                (function(u) {
                                    let e = '';
                                    for (; s < i && y(F[s]); ) e += F[s++];
                                    return (
                                        0 === e.length && V({}, B, f),
                                        b(F.charCodeAt(s)) && V({}, B, f),
                                        {
                                            type: 6,
                                            value: parseInt('0x' + e, 16),
                                            start: u,
                                            end: s,
                                        }
                                    );
                                })(e)
                            );
                        if (x(t))
                            return (function(u) {
                                let e = '0' + F[s++];
                                for (; s < i && x(F[s]); ) e += F[s++];
                                return (
                                    (b(F.charCodeAt(s)) ||
                                        m(F.charCodeAt(s))) &&
                                        V({}, B, f),
                                    {
                                        type: 6,
                                        value: parseInt(e, 8),
                                        octal: !0,
                                        start: u,
                                        end: s,
                                    }
                                );
                            })(e);
                        t && m(t.charCodeAt(0)) && V({}, B, f);
                    }
                    for (; m(F.charCodeAt(s)); ) u += F[s++];
                    t = F[s];
                }
                if ('.' === t) {
                    for (u += F[s++]; m(F.charCodeAt(s)); ) u += F[s++];
                    t = F[s];
                }
                if ('e' === t || 'E' === t)
                    if (
                        ((u += F[s++]),
                        ('+' !== (t = F[s]) && '-' !== t) || (u += F[s++]),
                        m(F.charCodeAt(s)))
                    )
                        for (; m(F.charCodeAt(s)); ) u += F[s++];
                    else V({}, B, f);
                return (
                    b(F.charCodeAt(s)) && V({}, B, f),
                    { type: 6, value: parseFloat(u), start: e, end: s }
                );
            }
            function N() {
                if ((U(), s >= i)) return { type: 2, start: s, end: s };
                const u = F.charCodeAt(s);
                return b(u)
                    ? ((e = s),
                      (t =
                          92 === F.charCodeAt(s)
                              ? T()
                              : (function() {
                                    var u, e;
                                    for (u = s++; s < i; ) {
                                        if (92 === (e = F.charCodeAt(s)))
                                            return (s = u), T();
                                        if (!k(e)) break;
                                        ++s;
                                    }
                                    return F.slice(u, s);
                                })()),
                      {
                          type:
                              1 === t.length
                                  ? 3
                                  : M.hasOwnProperty(t)
                                  ? 4
                                  : 'null' === t
                                  ? 5
                                  : 'true' === t || 'false' === t
                                  ? 1
                                  : 3,
                          value: t,
                          start: e,
                          end: s,
                      })
                    : 40 === u || 41 === u || 59 === u
                    ? S()
                    : 39 === u || 34 === u
                    ? (function() {
                          var u,
                              e,
                              t,
                              r,
                              n = '',
                              A = !1;
                          for (
                              g(
                                  "'" === (u = F[s]) || '"' === u,
                                  'String literal must starts with a quote'
                              ),
                                  e = s,
                                  ++s;
                              s < i;

                          ) {
                              if ((t = F[s++]) === u) {
                                  u = '';
                                  break;
                              }
                              if ('\\' === t)
                                  if ((t = F[s++]) && w(t.charCodeAt(0)))
                                      '\r' === t && '\n' === F[s] && ++s;
                                  else
                                      switch (t) {
                                          case 'u':
                                          case 'x':
                                              '{' === F[s]
                                                  ? (++s, (n += L()))
                                                  : (n += O(t));
                                              break;
                                          case 'n':
                                              n += '\n';
                                              break;
                                          case 'r':
                                              n += '\r';
                                              break;
                                          case 't':
                                              n += '\t';
                                              break;
                                          case 'b':
                                              n += '\b';
                                              break;
                                          case 'f':
                                              n += '\f';
                                              break;
                                          case 'v':
                                              n += '\v';
                                              break;
                                          default:
                                              x(t)
                                                  ? (0 !==
                                                        (r = '01234567'.indexOf(
                                                            t
                                                        )) && (A = !0),
                                                    s < i &&
                                                        x(F[s]) &&
                                                        ((A = !0),
                                                        (r =
                                                            8 * r +
                                                            '01234567'.indexOf(
                                                                F[s++]
                                                            )),
                                                        '0123'.indexOf(t) >=
                                                            0 &&
                                                            s < i &&
                                                            x(F[s]) &&
                                                            (r =
                                                                8 * r +
                                                                '01234567'.indexOf(
                                                                    F[s++]
                                                                ))),
                                                    (n += String.fromCharCode(
                                                        r
                                                    )))
                                                  : (n += t);
                                      }
                              else {
                                  if (w(t.charCodeAt(0))) break;
                                  n += t;
                              }
                          }
                          return (
                              '' !== u && V({}, B, f),
                              { type: 8, value: n, octal: A, start: e, end: s }
                          );
                      })()
                    : 46 === u
                    ? m(F.charCodeAt(s + 1))
                        ? I()
                        : S()
                    : m(u)
                    ? I()
                    : S();
                var e, t;
            }
            function R() {
                const u = C;
                return (s = u.end), (C = N()), (s = u.end), u;
            }
            function j() {
                const u = s;
                (C = N()), (s = u);
            }
            function P(u, e, t) {
                const r = new a(
                    '||' === u || '&&' === u
                        ? 'LogicalExpression'
                        : 'BinaryExpression'
                );
                return (r.operator = u), (r.left = e), (r.right = t), r;
            }
            function _(u, e) {
                const t = new a('CallExpression');
                return (t.callee = u), (t.arguments = e), t;
            }
            function q(u) {
                const e = new a(c);
                return (e.name = u), e;
            }
            function G(u) {
                const e = new a('Literal');
                return (
                    (e.value = u.value),
                    (e.raw = F.slice(u.start, u.end)),
                    u.regex &&
                        ('//' === e.raw && (e.raw = '/(?:)/'),
                        (e.regex = u.regex)),
                    e
                );
            }
            function Y(u, e, t) {
                const r = new a('MemberExpression');
                return (
                    (r.computed = '[' === u),
                    (r.object = e),
                    (r.property = t),
                    r.computed || (t.member = !0),
                    r
                );
            }
            function Q(u, e, t) {
                const r = new a('Property');
                return (r.key = e), (r.value = t), (r.kind = u), r;
            }
            function V(u, e) {
                var t,
                    r = Array.prototype.slice.call(arguments, 2),
                    n = e.replace(
                        /%(\d)/g,
                        (u, e) => (
                            g(
                                e < r.length,
                                'Message reference must be in range'
                            ),
                            r[e]
                        )
                    );
                throw (((t = new Error(n)).index = s), (t.description = n), t);
            }
            function $(u) {
                2 === u.type && V(u, 'Unexpected end of input'),
                    6 === u.type && V(u, 'Unexpected number'),
                    8 === u.type && V(u, 'Unexpected string'),
                    3 === u.type && V(u, 'Unexpected identifier'),
                    4 === u.type && V(u, 'Unexpected reserved word'),
                    V(u, B, u.value);
            }
            function z(u) {
                const e = R();
                (7 === e.type && e.value === u) || $(e);
            }
            function H(u) {
                return 7 === C.type && C.value === u;
            }
            function J(u) {
                return 4 === C.type && C.value === u;
            }
            function X() {
                s = C.start;
                const u = R();
                return 8 === u.type || 6 === u.type
                    ? (u.octal && V(u, l), G(u))
                    : q(u.value);
            }
            function K() {
                var u, e, t;
                return (
                    (s = C.start),
                    3 === (u = C).type
                        ? ((t = X()), z(':'), Q('init', t, Au()))
                        : 2 !== u.type && 7 !== u.type
                        ? ((e = X()), z(':'), Q('init', e, Au()))
                        : void $(u)
                );
            }
            const W = { if: 1 };
            function Z() {
                var u, e, t, r, n, A, o;
                if (H('('))
                    return (function() {
                        z('(');
                        const u = au();
                        return z(')'), u;
                    })();
                if (H('['))
                    return (function() {
                        const u = [];
                        for (s = C.start, z('['); !H(']'); )
                            H(',')
                                ? (R(), u.push(null))
                                : (u.push(Au()), H(']') || z(','));
                        return (
                            R(),
                            (function(u) {
                                const e = new a('ArrayExpression');
                                return (e.elements = u), e;
                            })(u)
                        );
                    })();
                if (H('{'))
                    return (function() {
                        var u,
                            e,
                            t = [],
                            r = {},
                            n = String;
                        for (s = C.start, z('{'); !H('}'); )
                            (e =
                                '$' +
                                ((u = K()).key.type === c
                                    ? u.key.name
                                    : n(u.key.value))),
                                Object.prototype.hasOwnProperty.call(r, e)
                                    ? V(
                                          {},
                                          'Duplicate data property in object literal not allowed in strict mode'
                                      )
                                    : (r[e] = !0),
                                t.push(u),
                                H('}') || z(',');
                        return (
                            z('}'),
                            (function(u) {
                                const e = new a('ObjectExpression');
                                return (e.properties = u), e;
                            })(t)
                        );
                    })();
                if (((u = C.type), (s = C.start), 3 === u || W[C.value]))
                    t = q(R().value);
                else if (8 === u || 6 === u) C.octal && V(C, l), (t = G(R()));
                else {
                    if (4 === u) throw new Error(p);
                    1 === u
                        ? (((e = R()).value = 'true' === e.value), (t = G(e)))
                        : 5 === u
                        ? (((e = R()).value = null), (t = G(e)))
                        : H('/') || H('/=')
                        ? ((t = G(
                              ((C = null),
                              U(),
                              (r = s),
                              (n = (function() {
                                  var u, e, t, r;
                                  for (
                                      g(
                                          '/' === (u = F[s]),
                                          'Regular expression literal must start with a slash'
                                      ),
                                          e = F[s++],
                                          t = !1,
                                          r = !1;
                                      s < i;

                                  )
                                      if (((e += u = F[s++]), '\\' === u))
                                          w((u = F[s++]).charCodeAt(0)) &&
                                              V({}, E),
                                              (e += u);
                                      else if (w(u.charCodeAt(0))) V({}, E);
                                      else if (t) ']' === u && (t = !1);
                                      else {
                                          if ('/' === u) {
                                              r = !0;
                                              break;
                                          }
                                          '[' === u && (t = !0);
                                      }
                                  return (
                                      r || V({}, E),
                                      {
                                          value: e.substr(1, e.length - 2),
                                          literal: e,
                                      }
                                  );
                              })()),
                              (A = (function() {
                                  var u, e, t;
                                  for (
                                      e = '', t = '';
                                      s < i && k((u = F[s]).charCodeAt(0));

                                  )
                                      ++s,
                                          '\\' === u && s < i
                                              ? V({}, B, f)
                                              : ((t += u), (e += u));
                                  return (
                                      t.search(/[^gimuy]/g) >= 0 && V({}, D, t),
                                      { value: t, literal: e }
                                  );
                              })()),
                              (o = (function(u, e) {
                                  let t = u;
                                  e.indexOf('u') >= 0 &&
                                      (t = t
                                          .replace(
                                              /\\u\{([0-9a-fA-F]+)\}/g,
                                              (u, e) => {
                                                  if (
                                                      parseInt(e, 16) <= 1114111
                                                  )
                                                      return 'x';
                                                  V({}, D);
                                              }
                                          )
                                          .replace(
                                              /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
                                              'x'
                                          ));
                                  try {
                                      new RegExp(t);
                                  } catch (u) {
                                      V({}, D);
                                  }
                                  try {
                                      return new RegExp(u, e);
                                  } catch (u) {
                                      return null;
                                  }
                              })(n.value, A.value)),
                              {
                                  literal: n.literal + A.literal,
                                  value: o,
                                  regex: { pattern: n.value, flags: A.value },
                                  start: r,
                                  end: s,
                              })
                          )),
                          j())
                        : $(R());
                }
                return t;
            }
            function uu() {
                const u = [];
                if ((z('('), !H(')')))
                    for (; s < i && (u.push(Au()), !H(')')); ) z(',');
                return z(')'), u;
            }
            function eu() {
                z('[');
                const u = au();
                return z(']'), u;
            }
            function tu() {
                const u = (function() {
                    var u;
                    for (u = Z(); ; )
                        if (H('.'))
                            u = Y(
                                '.',
                                u,
                                (z('.'),
                                (function() {
                                    s = C.start;
                                    const u = R();
                                    return (
                                        (function(u) {
                                            return (
                                                3 === u.type ||
                                                4 === u.type ||
                                                1 === u.type ||
                                                5 === u.type
                                            );
                                        })(u) || $(u),
                                        q(u.value)
                                    );
                                })())
                            );
                        else if (H('(')) u = _(u, uu());
                        else {
                            if (!H('[')) break;
                            u = Y('[', u, eu());
                        }
                    return u;
                })();
                if (7 === C.type && (H('++') || H('--'))) throw new Error(p);
                return u;
            }
            function ru() {
                var u, e;
                if (7 !== C.type && 4 !== C.type) e = tu();
                else {
                    if (H('++') || H('--')) throw new Error(p);
                    if (H('+') || H('-') || H('~') || H('!'))
                        (u = R()),
                            (e = ru()),
                            (e = (function(u, e) {
                                const t = new a('UnaryExpression');
                                return (
                                    (t.operator = u),
                                    (t.argument = e),
                                    (t.prefix = !0),
                                    t
                                );
                            })(u.value, e));
                    else {
                        if (J('delete') || J('void') || J('typeof'))
                            throw new Error(p);
                        e = tu();
                    }
                }
                return e;
            }
            function nu(u) {
                let e = 0;
                if (7 !== u.type && 4 !== u.type) return 0;
                switch (u.value) {
                    case '||':
                        e = 1;
                        break;
                    case '&&':
                        e = 2;
                        break;
                    case '|':
                        e = 3;
                        break;
                    case '^':
                        e = 4;
                        break;
                    case '&':
                        e = 5;
                        break;
                    case '==':
                    case '!=':
                    case '===':
                    case '!==':
                        e = 6;
                        break;
                    case '<':
                    case '>':
                    case '<=':
                    case '>=':
                    case 'instanceof':
                    case 'in':
                        e = 7;
                        break;
                    case '<<':
                    case '>>':
                    case '>>>':
                        e = 8;
                        break;
                    case '+':
                    case '-':
                        e = 9;
                        break;
                    case '*':
                    case '/':
                    case '%':
                        e = 11;
                }
                return e;
            }
            function Au() {
                var u, e;
                return (
                    (u = (function() {
                        var u, e, t, r, n, A, a, o, F, s;
                        if (((u = C), (F = ru()), 0 === (n = nu((r = C)))))
                            return F;
                        for (
                            r.prec = n, R(), e = [u, C], A = [F, r, (a = ru())];
                            (n = nu(C)) > 0;

                        ) {
                            for (; A.length > 2 && n <= A[A.length - 2].prec; )
                                (a = A.pop()),
                                    (o = A.pop().value),
                                    (F = A.pop()),
                                    e.pop(),
                                    (t = P(o, F, a)),
                                    A.push(t);
                            ((r = R()).prec = n),
                                A.push(r),
                                e.push(C),
                                (t = ru()),
                                A.push(t);
                        }
                        for (t = A[(s = A.length - 1)], e.pop(); s > 1; )
                            e.pop(),
                                (t = P(A[s - 1].value, A[s - 2], t)),
                                (s -= 2);
                        return t;
                    })()),
                    H('?') &&
                        (R(),
                        (e = Au()),
                        z(':'),
                        (u = (function(u, e, t) {
                            const r = new a('ConditionalExpression');
                            return (
                                (r.test = u),
                                (r.consequent = e),
                                (r.alternate = t),
                                r
                            );
                        })(u, e, Au()))),
                    u
                );
            }
            function au() {
                const u = Au();
                if (H(',')) throw new Error(p);
                return u;
            }
            function ou(u) {
                (s = 0), (i = (F = u).length), (C = null), j();
                const e = au();
                if (2 !== C.type)
                    throw new Error('Unexpect token after expression.');
                return e;
            }
            var Fu = {
                NaN: 'NaN',
                E: 'Math.E',
                LN2: 'Math.LN2',
                LN10: 'Math.LN10',
                LOG2E: 'Math.LOG2E',
                LOG10E: 'Math.LOG10E',
                PI: 'Math.PI',
                SQRT1_2: 'Math.SQRT1_2',
                SQRT2: 'Math.SQRT2',
                MIN_VALUE: 'Number.MIN_VALUE',
                MAX_VALUE: 'Number.MAX_VALUE',
            };
            function su(u) {
                function e(e, t, r) {
                    return n =>
                        (function(e, t, r, n) {
                            let A = u(t[0]);
                            return (
                                r &&
                                    ((A = r + '(' + A + ')'),
                                    0 === r.lastIndexOf('new ', 0) &&
                                        (A = '(' + A + ')')),
                                A +
                                    '.' +
                                    e +
                                    (n < 0
                                        ? ''
                                        : 0 === n
                                        ? '()'
                                        : '(' +
                                          t
                                              .slice(1)
                                              .map(u)
                                              .join(',') +
                                          ')')
                            );
                        })(e, n, t, r);
                }
                const t = 'new Date',
                    n = 'String',
                    A = 'RegExp';
                return {
                    isNaN: 'Number.isNaN',
                    isFinite: 'Number.isFinite',
                    abs: 'Math.abs',
                    acos: 'Math.acos',
                    asin: 'Math.asin',
                    atan: 'Math.atan',
                    atan2: 'Math.atan2',
                    ceil: 'Math.ceil',
                    cos: 'Math.cos',
                    exp: 'Math.exp',
                    floor: 'Math.floor',
                    log: 'Math.log',
                    max: 'Math.max',
                    min: 'Math.min',
                    pow: 'Math.pow',
                    random: 'Math.random',
                    round: 'Math.round',
                    sin: 'Math.sin',
                    sqrt: 'Math.sqrt',
                    tan: 'Math.tan',
                    clamp: function(e) {
                        e.length < 3 &&
                            (0, r.vU)('Missing arguments to clamp function.'),
                            e.length > 3 &&
                                (0, r.vU)(
                                    'Too many arguments to clamp function.'
                                );
                        const t = e.map(u);
                        return (
                            'Math.max(' +
                            t[1] +
                            ', Math.min(' +
                            t[2] +
                            ',' +
                            t[0] +
                            '))'
                        );
                    },
                    now: 'Date.now',
                    utc: 'Date.UTC',
                    datetime: t,
                    date: e('getDate', t, 0),
                    day: e('getDay', t, 0),
                    year: e('getFullYear', t, 0),
                    month: e('getMonth', t, 0),
                    hours: e('getHours', t, 0),
                    minutes: e('getMinutes', t, 0),
                    seconds: e('getSeconds', t, 0),
                    milliseconds: e('getMilliseconds', t, 0),
                    time: e('getTime', t, 0),
                    timezoneoffset: e('getTimezoneOffset', t, 0),
                    utcdate: e('getUTCDate', t, 0),
                    utcday: e('getUTCDay', t, 0),
                    utcyear: e('getUTCFullYear', t, 0),
                    utcmonth: e('getUTCMonth', t, 0),
                    utchours: e('getUTCHours', t, 0),
                    utcminutes: e('getUTCMinutes', t, 0),
                    utcseconds: e('getUTCSeconds', t, 0),
                    utcmilliseconds: e('getUTCMilliseconds', t, 0),
                    length: e('length', null, -1),
                    parseFloat: 'parseFloat',
                    parseInt: 'parseInt',
                    upper: e('toUpperCase', n, 0),
                    lower: e('toLowerCase', n, 0),
                    substring: e('substring', n),
                    split: e('split', n),
                    trim: e('trim', n, 0),
                    regexp: A,
                    test: e('test', A),
                    if: function(e) {
                        e.length < 3 &&
                            (0, r.vU)('Missing arguments to if function.'),
                            e.length > 3 &&
                                (0, r.vU)('Too many arguments to if function.');
                        const t = e.map(u);
                        return '(' + t[0] + '?' + t[1] + ':' + t[2] + ')';
                    },
                };
            }
            function iu(u) {
                const e = (u = u || {}).allowed ? (0, r.Rg)(u.allowed) : {},
                    t = u.forbidden ? (0, r.Rg)(u.forbidden) : {},
                    n = u.constants || Fu,
                    A = (u.functions || su)(c),
                    a = u.globalvar,
                    o = u.fieldvar,
                    F = (0, r.mf)(a) ? a : u => `${a}["${u}"]`;
                let s = {},
                    i = {},
                    C = 0;
                function c(u) {
                    if ((0, r.HD)(u)) return u;
                    const e = B[u.type];
                    return (
                        null == e && (0, r.vU)('Unsupported type: ' + u.type),
                        e(u)
                    );
                }
                const B = {
                    Literal: u => u.raw,
                    Identifier: u => {
                        const A = u.name;
                        return C > 0
                            ? A
                            : (0, r.nr)(t, A)
                            ? (0, r.vU)('Illegal identifier: ' + A)
                            : (0, r.nr)(n, A)
                            ? n[A]
                            : (0, r.nr)(e, A)
                            ? A
                            : ((s[A] = 1), F(A));
                    },
                    MemberExpression: u => {
                        const e = !u.computed,
                            t = c(u.object);
                        e && (C += 1);
                        const r = c(u.property);
                        return (
                            t === o &&
                                (i[
                                    (function(u) {
                                        const e = u && u.length - 1;
                                        return e &&
                                            (('"' === u[0] && '"' === u[e]) ||
                                                ("'" === u[0] && "'" === u[e]))
                                            ? u.slice(1, -1)
                                            : u;
                                    })(r)
                                ] = 1),
                            e && (C -= 1),
                            t + (e ? '.' + r : '[' + r + ']')
                        );
                    },
                    CallExpression: u => {
                        'Identifier' !== u.callee.type &&
                            (0, r.vU)('Illegal callee type: ' + u.callee.type);
                        const e = u.callee.name,
                            t = u.arguments,
                            n = (0, r.nr)(A, e) && A[e];
                        return (
                            n || (0, r.vU)('Unrecognized function: ' + e),
                            (0, r.mf)(n)
                                ? n(t)
                                : n + '(' + t.map(c).join(',') + ')'
                        );
                    },
                    ArrayExpression: u =>
                        '[' + u.elements.map(c).join(',') + ']',
                    BinaryExpression: u =>
                        '(' +
                        c(u.left) +
                        ' ' +
                        u.operator +
                        ' ' +
                        c(u.right) +
                        ')',
                    UnaryExpression: u =>
                        '(' + u.operator + c(u.argument) + ')',
                    ConditionalExpression: u =>
                        '(' +
                        c(u.test) +
                        '?' +
                        c(u.consequent) +
                        ':' +
                        c(u.alternate) +
                        ')',
                    LogicalExpression: u =>
                        '(' + c(u.left) + u.operator + c(u.right) + ')',
                    ObjectExpression: u =>
                        '{' + u.properties.map(c).join(',') + '}',
                    Property: u => {
                        C += 1;
                        const e = c(u.key);
                        return (C -= 1), e + ':' + c(u.value);
                    },
                };
                function D(u) {
                    const e = {
                        code: c(u),
                        globals: Object.keys(s),
                        fields: Object.keys(i),
                    };
                    return (s = {}), (i = {}), e;
                }
                return (D.functions = A), (D.constants = n), D;
            }
        },
    },
]);
//# sourceMappingURL=61.2808a0d.js.map
