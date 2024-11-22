import {
  c as ht,
  g as pt,
  n as yr,
  r as o,
  T as xr,
  a as $e,
  _ as ve,
  b as ze,
  d as ie,
  e as j,
  R as en,
  f as Ht,
  u as Ne,
  h as tt,
  w as nt,
  i as kr,
  j as wr,
  k as ut,
  l as Ce,
  m as Mr,
  o as ua,
  p as xt,
  q as $r,
  s as Dr,
  t as ca,
  F as Pr,
  v as Vn,
  x as fe,
  y as tn,
  z as Ir,
  A as Er,
  B as Rr,
  C as Nr,
  D as Or,
  E as Hr,
  G as Tr,
  H as _r,
  I as Zn,
  J as Fr,
  K as Vr,
  L as Yr,
  M as Ar,
  N as Lr,
  O as jr,
  P as Wr,
  Q as Jn,
  S as ea,
  U as Wn,
  V as Yn,
  W as sa,
  X as da,
  Y as fa,
  Z as va,
  $ as ma,
  a0 as ga,
  a1 as ha,
  a2 as pa,
  a3 as Ca,
  a4 as ba,
  a5 as Sa,
  a6 as ya,
  a7 as xa,
  a8 as ka,
  a9 as wa,
  aa as Br,
  ab as pe,
  ac as Ut,
  ad as Et,
  ae as Ma,
  af as zr,
} from './index-DLixwHhI.js'
import {
  p as Bn,
  g as Ur,
  a as qr,
  u as Kr,
  C as Gr,
  I as Xr,
  S as qt,
  R as ta,
} from './vi-BrSzqclF.js'
var $a = { exports: {} }
;(function (e, t) {
  ;(function (n, a) {
    e.exports = a()
  })(ht, function () {
    var n = 1e3,
      a = 6e4,
      r = 36e5,
      l = 'millisecond',
      i = 'second',
      u = 'minute',
      s = 'hour',
      f = 'day',
      c = 'week',
      d = 'month',
      m = 'quarter',
      C = 'year',
      h = 'date',
      S = 'Invalid Date',
      v =
        /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
      g =
        /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
      x = {
        name: 'en',
        weekdays:
          'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_'),
        months:
          'January_February_March_April_May_June_July_August_September_October_November_December'.split(
            '_',
          ),
        ordinal: function (D) {
          var p = ['th', 'st', 'nd', 'rd'],
            b = D % 100
          return '[' + D + (p[(b - 20) % 10] || p[b] || p[0]) + ']'
        },
      },
      k = function (D, p, b) {
        var M = String(D)
        return !M || M.length >= p
          ? D
          : '' + Array(p + 1 - M.length).join(b) + D
      },
      w = {
        s: k,
        z: function (D) {
          var p = -D.utcOffset(),
            b = Math.abs(p),
            M = Math.floor(b / 60),
            y = b % 60
          return (p <= 0 ? '+' : '-') + k(M, 2, '0') + ':' + k(y, 2, '0')
        },
        m: function D(p, b) {
          if (p.date() < b.date()) return -D(b, p)
          var M = 12 * (b.year() - p.year()) + (b.month() - p.month()),
            y = p.clone().add(M, d),
            I = b - y < 0,
            $ = p.clone().add(M + (I ? -1 : 1), d)
          return +(-(M + (b - y) / (I ? y - $ : $ - y)) || 0)
        },
        a: function (D) {
          return D < 0 ? Math.ceil(D) || 0 : Math.floor(D)
        },
        p: function (D) {
          return (
            { M: d, y: C, w: c, d: f, D: h, h: s, m: u, s: i, ms: l, Q: m }[
              D
            ] ||
            String(D || '')
              .toLowerCase()
              .replace(/s$/, '')
          )
        },
        u: function (D) {
          return D === void 0
        },
      },
      R = 'en',
      P = {}
    P[R] = x
    var H = '$isDayjsObject',
      L = function (D) {
        return D instanceof _ || !(!D || !D[H])
      },
      A = function D(p, b, M) {
        var y
        if (!p) return R
        if (typeof p == 'string') {
          var I = p.toLowerCase()
          P[I] && (y = I), b && ((P[I] = b), (y = I))
          var $ = p.split('-')
          if (!y && $.length > 1) return D($[0])
        } else {
          var O = p.name
          ;(P[O] = p), (y = O)
        }
        return !M && y && (R = y), y || (!M && R)
      },
      T = function (D, p) {
        if (L(D)) return D.clone()
        var b = typeof p == 'object' ? p : {}
        return (b.date = D), (b.args = arguments), new _(b)
      },
      N = w
    ;(N.l = A),
      (N.i = L),
      (N.w = function (D, p) {
        return T(D, { locale: p.$L, utc: p.$u, x: p.$x, $offset: p.$offset })
      })
    var _ = (function () {
        function D(b) {
          ;(this.$L = A(b.locale, null, !0)),
            this.parse(b),
            (this.$x = this.$x || b.x || {}),
            (this[H] = !0)
        }
        var p = D.prototype
        return (
          (p.parse = function (b) {
            ;(this.$d = (function (M) {
              var y = M.date,
                I = M.utc
              if (y === null) return new Date(NaN)
              if (N.u(y)) return new Date()
              if (y instanceof Date) return new Date(y)
              if (typeof y == 'string' && !/Z$/i.test(y)) {
                var $ = y.match(v)
                if ($) {
                  var O = $[2] - 1 || 0,
                    E = ($[7] || '0').substring(0, 3)
                  return I
                    ? new Date(
                        Date.UTC(
                          $[1],
                          O,
                          $[3] || 1,
                          $[4] || 0,
                          $[5] || 0,
                          $[6] || 0,
                          E,
                        ),
                      )
                    : new Date(
                        $[1],
                        O,
                        $[3] || 1,
                        $[4] || 0,
                        $[5] || 0,
                        $[6] || 0,
                        E,
                      )
                }
              }
              return new Date(y)
            })(b)),
              this.init()
          }),
          (p.init = function () {
            var b = this.$d
            ;(this.$y = b.getFullYear()),
              (this.$M = b.getMonth()),
              (this.$D = b.getDate()),
              (this.$W = b.getDay()),
              (this.$H = b.getHours()),
              (this.$m = b.getMinutes()),
              (this.$s = b.getSeconds()),
              (this.$ms = b.getMilliseconds())
          }),
          (p.$utils = function () {
            return N
          }),
          (p.isValid = function () {
            return this.$d.toString() !== S
          }),
          (p.isSame = function (b, M) {
            var y = T(b)
            return this.startOf(M) <= y && y <= this.endOf(M)
          }),
          (p.isAfter = function (b, M) {
            return T(b) < this.startOf(M)
          }),
          (p.isBefore = function (b, M) {
            return this.endOf(M) < T(b)
          }),
          (p.$g = function (b, M, y) {
            return N.u(b) ? this[M] : this.set(y, b)
          }),
          (p.unix = function () {
            return Math.floor(this.valueOf() / 1e3)
          }),
          (p.valueOf = function () {
            return this.$d.getTime()
          }),
          (p.startOf = function (b, M) {
            var y = this,
              I = !!N.u(M) || M,
              $ = N.p(b),
              O = function (te, J) {
                var q = N.w(
                  y.$u ? Date.UTC(y.$y, J, te) : new Date(y.$y, J, te),
                  y,
                )
                return I ? q : q.endOf(f)
              },
              E = function (te, J) {
                return N.w(
                  y
                    .toDate()
                    [
                      te
                    ].apply(y.toDate('s'), (I ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(J)),
                  y,
                )
              },
              F = this.$W,
              V = this.$M,
              W = this.$D,
              z = 'set' + (this.$u ? 'UTC' : '')
            switch ($) {
              case C:
                return I ? O(1, 0) : O(31, 11)
              case d:
                return I ? O(1, V) : O(0, V + 1)
              case c:
                var U = this.$locale().weekStart || 0,
                  Z = (F < U ? F + 7 : F) - U
                return O(I ? W - Z : W + (6 - Z), V)
              case f:
              case h:
                return E(z + 'Hours', 0)
              case s:
                return E(z + 'Minutes', 1)
              case u:
                return E(z + 'Seconds', 2)
              case i:
                return E(z + 'Milliseconds', 3)
              default:
                return this.clone()
            }
          }),
          (p.endOf = function (b) {
            return this.startOf(b, !1)
          }),
          (p.$set = function (b, M) {
            var y,
              I = N.p(b),
              $ = 'set' + (this.$u ? 'UTC' : ''),
              O = ((y = {}),
              (y[f] = $ + 'Date'),
              (y[h] = $ + 'Date'),
              (y[d] = $ + 'Month'),
              (y[C] = $ + 'FullYear'),
              (y[s] = $ + 'Hours'),
              (y[u] = $ + 'Minutes'),
              (y[i] = $ + 'Seconds'),
              (y[l] = $ + 'Milliseconds'),
              y)[I],
              E = I === f ? this.$D + (M - this.$W) : M
            if (I === d || I === C) {
              var F = this.clone().set(h, 1)
              F.$d[O](E),
                F.init(),
                (this.$d = F.set(h, Math.min(this.$D, F.daysInMonth())).$d)
            } else O && this.$d[O](E)
            return this.init(), this
          }),
          (p.set = function (b, M) {
            return this.clone().$set(b, M)
          }),
          (p.get = function (b) {
            return this[N.p(b)]()
          }),
          (p.add = function (b, M) {
            var y,
              I = this
            b = Number(b)
            var $ = N.p(M),
              O = function (V) {
                var W = T(I)
                return N.w(W.date(W.date() + Math.round(V * b)), I)
              }
            if ($ === d) return this.set(d, this.$M + b)
            if ($ === C) return this.set(C, this.$y + b)
            if ($ === f) return O(1)
            if ($ === c) return O(7)
            var E = ((y = {}), (y[u] = a), (y[s] = r), (y[i] = n), y)[$] || 1,
              F = this.$d.getTime() + b * E
            return N.w(F, this)
          }),
          (p.subtract = function (b, M) {
            return this.add(-1 * b, M)
          }),
          (p.format = function (b) {
            var M = this,
              y = this.$locale()
            if (!this.isValid()) return y.invalidDate || S
            var I = b || 'YYYY-MM-DDTHH:mm:ssZ',
              $ = N.z(this),
              O = this.$H,
              E = this.$m,
              F = this.$M,
              V = y.weekdays,
              W = y.months,
              z = y.meridiem,
              U = function (J, q, G, X) {
                return (J && (J[q] || J(M, I))) || G[q].slice(0, X)
              },
              Z = function (J) {
                return N.s(O % 12 || 12, J, '0')
              },
              te =
                z ||
                function (J, q, G) {
                  var X = J < 12 ? 'AM' : 'PM'
                  return G ? X.toLowerCase() : X
                }
            return I.replace(g, function (J, q) {
              return (
                q ||
                (function (G) {
                  switch (G) {
                    case 'YY':
                      return String(M.$y).slice(-2)
                    case 'YYYY':
                      return N.s(M.$y, 4, '0')
                    case 'M':
                      return F + 1
                    case 'MM':
                      return N.s(F + 1, 2, '0')
                    case 'MMM':
                      return U(y.monthsShort, F, W, 3)
                    case 'MMMM':
                      return U(W, F)
                    case 'D':
                      return M.$D
                    case 'DD':
                      return N.s(M.$D, 2, '0')
                    case 'd':
                      return String(M.$W)
                    case 'dd':
                      return U(y.weekdaysMin, M.$W, V, 2)
                    case 'ddd':
                      return U(y.weekdaysShort, M.$W, V, 3)
                    case 'dddd':
                      return V[M.$W]
                    case 'H':
                      return String(O)
                    case 'HH':
                      return N.s(O, 2, '0')
                    case 'h':
                      return Z(1)
                    case 'hh':
                      return Z(2)
                    case 'a':
                      return te(O, E, !0)
                    case 'A':
                      return te(O, E, !1)
                    case 'm':
                      return String(E)
                    case 'mm':
                      return N.s(E, 2, '0')
                    case 's':
                      return String(M.$s)
                    case 'ss':
                      return N.s(M.$s, 2, '0')
                    case 'SSS':
                      return N.s(M.$ms, 3, '0')
                    case 'Z':
                      return $
                  }
                  return null
                })(J) ||
                $.replace(':', '')
              )
            })
          }),
          (p.utcOffset = function () {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
          }),
          (p.diff = function (b, M, y) {
            var I,
              $ = this,
              O = N.p(M),
              E = T(b),
              F = (E.utcOffset() - this.utcOffset()) * a,
              V = this - E,
              W = function () {
                return N.m($, E)
              }
            switch (O) {
              case C:
                I = W() / 12
                break
              case d:
                I = W()
                break
              case m:
                I = W() / 3
                break
              case c:
                I = (V - F) / 6048e5
                break
              case f:
                I = (V - F) / 864e5
                break
              case s:
                I = V / r
                break
              case u:
                I = V / a
                break
              case i:
                I = V / n
                break
              default:
                I = V
            }
            return y ? I : N.a(I)
          }),
          (p.daysInMonth = function () {
            return this.endOf(d).$D
          }),
          (p.$locale = function () {
            return P[this.$L]
          }),
          (p.locale = function (b, M) {
            if (!b) return this.$L
            var y = this.clone(),
              I = A(b, M, !0)
            return I && (y.$L = I), y
          }),
          (p.clone = function () {
            return N.w(this.$d, this)
          }),
          (p.toDate = function () {
            return new Date(this.valueOf())
          }),
          (p.toJSON = function () {
            return this.isValid() ? this.toISOString() : null
          }),
          (p.toISOString = function () {
            return this.$d.toISOString()
          }),
          (p.toString = function () {
            return this.$d.toUTCString()
          }),
          D
        )
      })(),
      Y = _.prototype
    return (
      (T.prototype = Y),
      [
        ['$ms', l],
        ['$s', i],
        ['$m', u],
        ['$H', s],
        ['$W', f],
        ['$M', d],
        ['$y', C],
        ['$D', h],
      ].forEach(function (D) {
        Y[D[1]] = function (p) {
          return this.$g(p, D[0], D[1])
        }
      }),
      (T.extend = function (D, p) {
        return D.$i || (D(p, _, T), (D.$i = !0)), T
      }),
      (T.locale = A),
      (T.isDayjs = L),
      (T.unix = function (D) {
        return T(1e3 * D)
      }),
      (T.en = P[R]),
      (T.Ls = P),
      (T.p = {}),
      T
    )
  })
})($a)
var Qr = $a.exports
const Be = pt(Qr)
var Da = { exports: {} }
;(function (e, t) {
  ;(function (n, a) {
    e.exports = a()
  })(ht, function () {
    return function (n, a) {
      a.prototype.weekday = function (r) {
        var l = this.$locale().weekStart || 0,
          i = this.$W,
          u = (i < l ? i + 7 : i) - l
        return this.$utils().u(r) ? u : this.subtract(u, 'day').add(r, 'day')
      }
    }
  })
})(Da)
var Zr = Da.exports
const Jr = pt(Zr)
var Pa = { exports: {} }
;(function (e, t) {
  ;(function (n, a) {
    e.exports = a()
  })(ht, function () {
    return function (n, a, r) {
      var l = a.prototype,
        i = function (d) {
          return d && (d.indexOf ? d : d.s)
        },
        u = function (d, m, C, h, S) {
          var v = d.name ? d : d.$locale(),
            g = i(v[m]),
            x = i(v[C]),
            k =
              g ||
              x.map(function (R) {
                return R.slice(0, h)
              })
          if (!S) return k
          var w = v.weekStart
          return k.map(function (R, P) {
            return k[(P + (w || 0)) % 7]
          })
        },
        s = function () {
          return r.Ls[r.locale()]
        },
        f = function (d, m) {
          return (
            d.formats[m] ||
            (function (C) {
              return C.replace(
                /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                function (h, S, v) {
                  return S || v.slice(1)
                },
              )
            })(d.formats[m.toUpperCase()])
          )
        },
        c = function () {
          var d = this
          return {
            months: function (m) {
              return m ? m.format('MMMM') : u(d, 'months')
            },
            monthsShort: function (m) {
              return m ? m.format('MMM') : u(d, 'monthsShort', 'months', 3)
            },
            firstDayOfWeek: function () {
              return d.$locale().weekStart || 0
            },
            weekdays: function (m) {
              return m ? m.format('dddd') : u(d, 'weekdays')
            },
            weekdaysMin: function (m) {
              return m ? m.format('dd') : u(d, 'weekdaysMin', 'weekdays', 2)
            },
            weekdaysShort: function (m) {
              return m ? m.format('ddd') : u(d, 'weekdaysShort', 'weekdays', 3)
            },
            longDateFormat: function (m) {
              return f(d.$locale(), m)
            },
            meridiem: this.$locale().meridiem,
            ordinal: this.$locale().ordinal,
          }
        }
      ;(l.localeData = function () {
        return c.bind(this)()
      }),
        (r.localeData = function () {
          var d = s()
          return {
            firstDayOfWeek: function () {
              return d.weekStart || 0
            },
            weekdays: function () {
              return r.weekdays()
            },
            weekdaysShort: function () {
              return r.weekdaysShort()
            },
            weekdaysMin: function () {
              return r.weekdaysMin()
            },
            months: function () {
              return r.months()
            },
            monthsShort: function () {
              return r.monthsShort()
            },
            longDateFormat: function (m) {
              return f(d, m)
            },
            meridiem: d.meridiem,
            ordinal: d.ordinal,
          }
        }),
        (r.months = function () {
          return u(s(), 'months')
        }),
        (r.monthsShort = function () {
          return u(s(), 'monthsShort', 'months', 3)
        }),
        (r.weekdays = function (d) {
          return u(s(), 'weekdays', null, null, d)
        }),
        (r.weekdaysShort = function (d) {
          return u(s(), 'weekdaysShort', 'weekdays', 3, d)
        }),
        (r.weekdaysMin = function (d) {
          return u(s(), 'weekdaysMin', 'weekdays', 2, d)
        })
    }
  })
})(Pa)
var eo = Pa.exports
const to = pt(eo)
var Ia = { exports: {} }
;(function (e, t) {
  ;(function (n, a) {
    e.exports = a()
  })(ht, function () {
    var n = 'week',
      a = 'year'
    return function (r, l, i) {
      var u = l.prototype
      ;(u.week = function (s) {
        if ((s === void 0 && (s = null), s !== null))
          return this.add(7 * (s - this.week()), 'day')
        var f = this.$locale().yearStart || 1
        if (this.month() === 11 && this.date() > 25) {
          var c = i(this).startOf(a).add(1, a).date(f),
            d = i(this).endOf(n)
          if (c.isBefore(d)) return 1
        }
        var m = i(this)
            .startOf(a)
            .date(f)
            .startOf(n)
            .subtract(1, 'millisecond'),
          C = this.diff(m, n, !0)
        return C < 0 ? i(this).startOf('week').week() : Math.ceil(C)
      }),
        (u.weeks = function (s) {
          return s === void 0 && (s = null), this.week(s)
        })
    }
  })
})(Ia)
var no = Ia.exports
const ao = pt(no)
var Ea = { exports: {} }
;(function (e, t) {
  ;(function (n, a) {
    e.exports = a()
  })(ht, function () {
    return function (n, a) {
      a.prototype.weekYear = function () {
        var r = this.month(),
          l = this.week(),
          i = this.year()
        return l === 1 && r === 11 ? i + 1 : r === 0 && l >= 52 ? i - 1 : i
      }
    }
  })
})(Ea)
var ro = Ea.exports
const oo = pt(ro)
var Ra = { exports: {} }
;(function (e, t) {
  ;(function (n, a) {
    e.exports = a()
  })(ht, function () {
    return function (n, a) {
      var r = a.prototype,
        l = r.format
      r.format = function (i) {
        var u = this,
          s = this.$locale()
        if (!this.isValid()) return l.bind(this)(i)
        var f = this.$utils(),
          c = (i || 'YYYY-MM-DDTHH:mm:ssZ').replace(
            /\[([^\]]+)]|Q|wo|ww|w|WW|W|zzz|z|gggg|GGGG|Do|X|x|k{1,2}|S/g,
            function (d) {
              switch (d) {
                case 'Q':
                  return Math.ceil((u.$M + 1) / 3)
                case 'Do':
                  return s.ordinal(u.$D)
                case 'gggg':
                  return u.weekYear()
                case 'GGGG':
                  return u.isoWeekYear()
                case 'wo':
                  return s.ordinal(u.week(), 'W')
                case 'w':
                case 'ww':
                  return f.s(u.week(), d === 'w' ? 1 : 2, '0')
                case 'W':
                case 'WW':
                  return f.s(u.isoWeek(), d === 'W' ? 1 : 2, '0')
                case 'k':
                case 'kk':
                  return f.s(
                    String(u.$H === 0 ? 24 : u.$H),
                    d === 'k' ? 1 : 2,
                    '0',
                  )
                case 'X':
                  return Math.floor(u.$d.getTime() / 1e3)
                case 'x':
                  return u.$d.getTime()
                case 'z':
                  return '[' + u.offsetName() + ']'
                case 'zzz':
                  return '[' + u.offsetName('long') + ']'
                default:
                  return d
              }
            },
          )
        return l.bind(this)(c)
      }
    }
  })
})(Ra)
var lo = Ra.exports
const io = pt(lo)
var Na = { exports: {} }
;(function (e, t) {
  ;(function (n, a) {
    e.exports = a()
  })(ht, function () {
    var n = {
        LTS: 'h:mm:ss A',
        LT: 'h:mm A',
        L: 'MM/DD/YYYY',
        LL: 'MMMM D, YYYY',
        LLL: 'MMMM D, YYYY h:mm A',
        LLLL: 'dddd, MMMM D, YYYY h:mm A',
      },
      a =
        /(\[[^[]*\])|([-_:/.,()\s]+)|(A|a|Q|YYYY|YY?|ww?|MM?M?M?|Do|DD?|hh?|HH?|mm?|ss?|S{1,3}|z|ZZ?)/g,
      r = /\d/,
      l = /\d\d/,
      i = /\d\d?/,
      u = /\d*[^-_:/,()\s\d]+/,
      s = {},
      f = function (v) {
        return (v = +v) + (v > 68 ? 1900 : 2e3)
      },
      c = function (v) {
        return function (g) {
          this[v] = +g
        }
      },
      d = [
        /[+-]\d\d:?(\d\d)?|Z/,
        function (v) {
          ;(this.zone || (this.zone = {})).offset = (function (g) {
            if (!g || g === 'Z') return 0
            var x = g.match(/([+-]|\d\d)/g),
              k = 60 * x[1] + (+x[2] || 0)
            return k === 0 ? 0 : x[0] === '+' ? -k : k
          })(v)
        },
      ],
      m = function (v) {
        var g = s[v]
        return g && (g.indexOf ? g : g.s.concat(g.f))
      },
      C = function (v, g) {
        var x,
          k = s.meridiem
        if (k) {
          for (var w = 1; w <= 24; w += 1)
            if (v.indexOf(k(w, 0, g)) > -1) {
              x = w > 12
              break
            }
        } else x = v === (g ? 'pm' : 'PM')
        return x
      },
      h = {
        A: [
          u,
          function (v) {
            this.afternoon = C(v, !1)
          },
        ],
        a: [
          u,
          function (v) {
            this.afternoon = C(v, !0)
          },
        ],
        Q: [
          r,
          function (v) {
            this.month = 3 * (v - 1) + 1
          },
        ],
        S: [
          r,
          function (v) {
            this.milliseconds = 100 * +v
          },
        ],
        SS: [
          l,
          function (v) {
            this.milliseconds = 10 * +v
          },
        ],
        SSS: [
          /\d{3}/,
          function (v) {
            this.milliseconds = +v
          },
        ],
        s: [i, c('seconds')],
        ss: [i, c('seconds')],
        m: [i, c('minutes')],
        mm: [i, c('minutes')],
        H: [i, c('hours')],
        h: [i, c('hours')],
        HH: [i, c('hours')],
        hh: [i, c('hours')],
        D: [i, c('day')],
        DD: [l, c('day')],
        Do: [
          u,
          function (v) {
            var g = s.ordinal,
              x = v.match(/\d+/)
            if (((this.day = x[0]), g))
              for (var k = 1; k <= 31; k += 1)
                g(k).replace(/\[|\]/g, '') === v && (this.day = k)
          },
        ],
        w: [i, c('week')],
        ww: [l, c('week')],
        M: [i, c('month')],
        MM: [l, c('month')],
        MMM: [
          u,
          function (v) {
            var g = m('months'),
              x =
                (
                  m('monthsShort') ||
                  g.map(function (k) {
                    return k.slice(0, 3)
                  })
                ).indexOf(v) + 1
            if (x < 1) throw new Error()
            this.month = x % 12 || x
          },
        ],
        MMMM: [
          u,
          function (v) {
            var g = m('months').indexOf(v) + 1
            if (g < 1) throw new Error()
            this.month = g % 12 || g
          },
        ],
        Y: [/[+-]?\d+/, c('year')],
        YY: [
          l,
          function (v) {
            this.year = f(v)
          },
        ],
        YYYY: [/\d{4}/, c('year')],
        Z: d,
        ZZ: d,
      }
    function S(v) {
      var g, x
      ;(g = v), (x = s && s.formats)
      for (
        var k = (v = g.replace(
            /(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g,
            function (T, N, _) {
              var Y = _ && _.toUpperCase()
              return (
                N ||
                x[_] ||
                n[_] ||
                x[Y].replace(
                  /(\[[^\]]+])|(MMMM|MM|DD|dddd)/g,
                  function (D, p, b) {
                    return p || b.slice(1)
                  },
                )
              )
            },
          )).match(a),
          w = k.length,
          R = 0;
        R < w;
        R += 1
      ) {
        var P = k[R],
          H = h[P],
          L = H && H[0],
          A = H && H[1]
        k[R] = A ? { regex: L, parser: A } : P.replace(/^\[|\]$/g, '')
      }
      return function (T) {
        for (var N = {}, _ = 0, Y = 0; _ < w; _ += 1) {
          var D = k[_]
          if (typeof D == 'string') Y += D.length
          else {
            var p = D.regex,
              b = D.parser,
              M = T.slice(Y),
              y = p.exec(M)[0]
            b.call(N, y), (T = T.replace(y, ''))
          }
        }
        return (
          (function (I) {
            var $ = I.afternoon
            if ($ !== void 0) {
              var O = I.hours
              $ ? O < 12 && (I.hours += 12) : O === 12 && (I.hours = 0),
                delete I.afternoon
            }
          })(N),
          N
        )
      }
    }
    return function (v, g, x) {
      ;(x.p.customParseFormat = !0),
        v && v.parseTwoDigitYear && (f = v.parseTwoDigitYear)
      var k = g.prototype,
        w = k.parse
      k.parse = function (R) {
        var P = R.date,
          H = R.utc,
          L = R.args
        this.$u = H
        var A = L[1]
        if (typeof A == 'string') {
          var T = L[2] === !0,
            N = L[3] === !0,
            _ = T || N,
            Y = L[2]
          N && (Y = L[2]),
            (s = this.$locale()),
            !T && Y && (s = x.Ls[Y]),
            (this.$d = (function (M, y, I, $) {
              try {
                if (['x', 'X'].indexOf(y) > -1)
                  return new Date((y === 'X' ? 1e3 : 1) * M)
                var O = S(y)(M),
                  E = O.year,
                  F = O.month,
                  V = O.day,
                  W = O.hours,
                  z = O.minutes,
                  U = O.seconds,
                  Z = O.milliseconds,
                  te = O.zone,
                  J = O.week,
                  q = new Date(),
                  G = V || (E || F ? 1 : q.getDate()),
                  X = E || q.getFullYear(),
                  ae = 0
                ;(E && !F) || (ae = F > 0 ? F - 1 : q.getMonth())
                var ge,
                  re = W || 0,
                  ee = z || 0,
                  de = U || 0,
                  be = Z || 0
                return te
                  ? new Date(
                      Date.UTC(X, ae, G, re, ee, de, be + 60 * te.offset * 1e3),
                    )
                  : I
                    ? new Date(Date.UTC(X, ae, G, re, ee, de, be))
                    : ((ge = new Date(X, ae, G, re, ee, de, be)),
                      J && (ge = $(ge).week(J).toDate()),
                      ge)
              } catch {
                return new Date('')
              }
            })(P, A, H, x)),
            this.init(),
            Y && Y !== !0 && (this.$L = this.locale(Y).$L),
            _ && P != this.format(A) && (this.$d = new Date('')),
            (s = {})
        } else if (A instanceof Array)
          for (var D = A.length, p = 1; p <= D; p += 1) {
            L[1] = A[p - 1]
            var b = x.apply(this, L)
            if (b.isValid()) {
              ;(this.$d = b.$d), (this.$L = b.$L), this.init()
              break
            }
            p === D && (this.$d = new Date(''))
          }
        else w.call(this, R)
      }
    }
  })
})(Na)
var uo = Na.exports
const co = pt(uo)
Be.extend(co)
Be.extend(io)
Be.extend(Jr)
Be.extend(to)
Be.extend(ao)
Be.extend(oo)
Be.extend(function (e, t) {
  var n = t.prototype,
    a = n.format
  n.format = function (l) {
    var i = (l || '').replace('Wo', 'wo')
    return a.bind(this)(i)
  }
})
var so = {
    bn_BD: 'bn-bd',
    by_BY: 'be',
    en_GB: 'en-gb',
    en_US: 'en',
    fr_BE: 'fr',
    fr_CA: 'fr-ca',
    hy_AM: 'hy-am',
    kmr_IQ: 'ku',
    nl_BE: 'nl-be',
    pt_BR: 'pt-br',
    zh_CN: 'zh-cn',
    zh_HK: 'zh-hk',
    zh_TW: 'zh-tw',
  },
  vt = function (t) {
    var n = so[t]
    return n || t.split('_')[0]
  },
  na = function () {
    yr(!1, 'Not match any format. Please help to fire a issue about this.')
  },
  fo = {
    getNow: function () {
      var t = Be()
      return typeof t.tz == 'function' ? t.tz() : t
    },
    getFixedDate: function (t) {
      return Be(t, ['YYYY-M-DD', 'YYYY-MM-DD'])
    },
    getEndDate: function (t) {
      return t.endOf('month')
    },
    getWeekDay: function (t) {
      var n = t.locale('en')
      return n.weekday() + n.localeData().firstDayOfWeek()
    },
    getYear: function (t) {
      return t.year()
    },
    getMonth: function (t) {
      return t.month()
    },
    getDate: function (t) {
      return t.date()
    },
    getHour: function (t) {
      return t.hour()
    },
    getMinute: function (t) {
      return t.minute()
    },
    getSecond: function (t) {
      return t.second()
    },
    getMillisecond: function (t) {
      return t.millisecond()
    },
    addYear: function (t, n) {
      return t.add(n, 'year')
    },
    addMonth: function (t, n) {
      return t.add(n, 'month')
    },
    addDate: function (t, n) {
      return t.add(n, 'day')
    },
    setYear: function (t, n) {
      return t.year(n)
    },
    setMonth: function (t, n) {
      return t.month(n)
    },
    setDate: function (t, n) {
      return t.date(n)
    },
    setHour: function (t, n) {
      return t.hour(n)
    },
    setMinute: function (t, n) {
      return t.minute(n)
    },
    setSecond: function (t, n) {
      return t.second(n)
    },
    setMillisecond: function (t, n) {
      return t.millisecond(n)
    },
    isAfter: function (t, n) {
      return t.isAfter(n)
    },
    isValidate: function (t) {
      return t.isValid()
    },
    locale: {
      getWeekFirstDay: function (t) {
        return Be().locale(vt(t)).localeData().firstDayOfWeek()
      },
      getWeekFirstDate: function (t, n) {
        return n.locale(vt(t)).weekday(0)
      },
      getWeek: function (t, n) {
        return n.locale(vt(t)).week()
      },
      getShortWeekDays: function (t) {
        return Be().locale(vt(t)).localeData().weekdaysMin()
      },
      getShortMonths: function (t) {
        return Be().locale(vt(t)).localeData().monthsShort()
      },
      format: function (t, n, a) {
        return n.locale(vt(t)).format(a)
      },
      parse: function (t, n, a) {
        for (var r = vt(t), l = 0; l < a.length; l += 1) {
          var i = a[l],
            u = n
          if (i.includes('wo') || i.includes('Wo')) {
            for (
              var s = u.split('-')[0],
                f = u.split('-')[1],
                c = Be(s, 'YYYY').startOf('year').locale(r),
                d = 0;
              d <= 52;
              d += 1
            ) {
              var m = c.add(d, 'week')
              if (m.format('Wo') === f) return m
            }
            return na(), null
          }
          var C = Be(u, i, !0).locale(r)
          if (C.isValid()) return C
        }
        return n && na(), null
      },
    },
  }
function an(e, t) {
  return e !== void 0 ? e : t ? 'bottomRight' : 'bottomLeft'
}
function Oa(e, t) {
  var n = an(e, t),
    a = n == null ? void 0 : n.toLowerCase().endsWith('right'),
    r = a ? 'insetInlineEnd' : 'insetInlineStart'
  return (
    t &&
      (r = ['insetInlineStart', 'insetInlineEnd'].find(function (l) {
        return l !== r
      })),
    r
  )
}
var Xe = o.createContext(null),
  vo = {
    bottomLeft: {
      points: ['tl', 'bl'],
      offset: [0, 4],
      overflow: { adjustX: 1, adjustY: 1 },
    },
    bottomRight: {
      points: ['tr', 'br'],
      offset: [0, 4],
      overflow: { adjustX: 1, adjustY: 1 },
    },
    topLeft: {
      points: ['bl', 'tl'],
      offset: [0, -4],
      overflow: { adjustX: 0, adjustY: 1 },
    },
    topRight: {
      points: ['br', 'tr'],
      offset: [0, -4],
      overflow: { adjustX: 0, adjustY: 1 },
    },
  }
function Ha(e) {
  var t = e.popupElement,
    n = e.popupStyle,
    a = e.popupClassName,
    r = e.popupAlign,
    l = e.transitionName,
    i = e.getPopupContainer,
    u = e.children,
    s = e.range,
    f = e.placement,
    c = e.builtinPlacements,
    d = c === void 0 ? vo : c,
    m = e.direction,
    C = e.visible,
    h = e.onClose,
    S = o.useContext(Xe),
    v = S.prefixCls,
    g = ''.concat(v, '-dropdown'),
    x = an(f, m === 'rtl')
  return o.createElement(
    xr,
    {
      showAction: [],
      hideAction: ['click'],
      popupPlacement: x,
      builtinPlacements: d,
      prefixCls: g,
      popupTransitionName: l,
      popup: t,
      popupAlign: r,
      popupVisible: C,
      popupClassName: $e(
        a,
        ve(
          ve({}, ''.concat(g, '-range'), s),
          ''.concat(g, '-rtl'),
          m === 'rtl',
        ),
      ),
      popupStyle: n,
      stretch: 'minWidth',
      getPopupContainer: i,
      onPopupVisibleChange: function (w) {
        w || h()
      },
    },
    u,
  )
}
function zn(e, t) {
  for (
    var n =
        arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '0',
      a = String(e);
    a.length < t;

  )
    a = ''.concat(n).concat(a)
  return a
}
function Ct(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function Ot(e, t, n) {
  var a = ze(e)
  return (a[t] = n), a
}
function rn(e, t) {
  var n = {},
    a = t || Object.keys(e)
  return (
    a.forEach(function (r) {
      e[r] !== void 0 && (n[r] = e[r])
    }),
    n
  )
}
function Ta(e, t, n) {
  if (n) return n
  switch (e) {
    case 'time':
      return t.fieldTimeFormat
    case 'datetime':
      return t.fieldDateTimeFormat
    case 'month':
      return t.fieldMonthFormat
    case 'year':
      return t.fieldYearFormat
    case 'quarter':
      return t.fieldQuarterFormat
    case 'week':
      return t.fieldWeekFormat
    default:
      return t.fieldDateFormat
  }
}
function _a(e, t, n) {
  var a = n !== void 0 ? n : t[t.length - 1],
    r = t.find(function (l) {
      return e[l]
    })
  return a !== r ? e[r] : void 0
}
function Fa(e) {
  return rn(e, [
    'placement',
    'builtinPlacements',
    'popupAlign',
    'getPopupContainer',
    'transitionName',
    'direction',
  ])
}
function Un(e, t, n, a) {
  var r = o.useMemo(
      function () {
        return (
          e ||
          function (i, u) {
            var s = i
            return t && u.type === 'date'
              ? t(s, u.today)
              : n && u.type === 'month'
                ? n(s, u.locale)
                : u.originNode
          }
        )
      },
      [e, n, t],
    ),
    l = o.useCallback(
      function (i, u) {
        return r(i, ie(ie({}, u), {}, { range: a }))
      },
      [r, a],
    )
  return l
}
function Va(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
    a = o.useState([!1, !1]),
    r = j(a, 2),
    l = r[0],
    i = r[1],
    u = function (c, d) {
      i(function (m) {
        return Ot(m, d, c)
      })
    },
    s = o.useMemo(
      function () {
        return l.map(function (f, c) {
          if (f) return !0
          var d = e[c]
          return d ? !!((!n[c] && !d) || (d && t(d, { activeIndex: c }))) : !1
        })
      },
      [e, l, t, n],
    )
  return [s, u]
}
function Ya(e, t, n, a, r) {
  var l = '',
    i = []
  return (
    e && i.push(r ? 'hh' : 'HH'),
    t && i.push('mm'),
    n && i.push('ss'),
    (l = i.join(':')),
    a && (l += '.SSS'),
    r && (l += ' A'),
    l
  )
}
function mo(e, t, n, a, r, l) {
  var i = e.fieldDateTimeFormat,
    u = e.fieldDateFormat,
    s = e.fieldTimeFormat,
    f = e.fieldMonthFormat,
    c = e.fieldYearFormat,
    d = e.fieldWeekFormat,
    m = e.fieldQuarterFormat,
    C = e.yearFormat,
    h = e.cellYearFormat,
    S = e.cellQuarterFormat,
    v = e.dayFormat,
    g = e.cellDateFormat,
    x = Ya(t, n, a, r, l)
  return ie(
    ie({}, e),
    {},
    {
      fieldDateTimeFormat: i || 'YYYY-MM-DD '.concat(x),
      fieldDateFormat: u || 'YYYY-MM-DD',
      fieldTimeFormat: s || x,
      fieldMonthFormat: f || 'YYYY-MM',
      fieldYearFormat: c || 'YYYY',
      fieldWeekFormat: d || 'gggg-wo',
      fieldQuarterFormat: m || 'YYYY-[Q]Q',
      yearFormat: C || 'YYYY',
      cellYearFormat: h || 'YYYY',
      cellQuarterFormat: S || '[Q]Q',
      cellDateFormat: g || v || 'D',
    },
  )
}
function Aa(e, t) {
  var n = t.showHour,
    a = t.showMinute,
    r = t.showSecond,
    l = t.showMillisecond,
    i = t.use12Hours
  return en.useMemo(
    function () {
      return mo(e, n, a, r, l, i)
    },
    [e, n, a, r, l, i],
  )
}
function Pt(e, t, n) {
  return (
    n ??
    t.some(function (a) {
      return e.includes(a)
    })
  )
}
var go = [
  'showNow',
  'showHour',
  'showMinute',
  'showSecond',
  'showMillisecond',
  'use12Hours',
  'hourStep',
  'minuteStep',
  'secondStep',
  'millisecondStep',
  'hideDisabledOptions',
  'defaultValue',
  'disabledHours',
  'disabledMinutes',
  'disabledSeconds',
  'disabledMilliseconds',
  'disabledTime',
  'changeOnScroll',
  'defaultOpenValue',
]
function ho(e) {
  var t = rn(e, go),
    n = e.format,
    a = e.picker,
    r = null
  return (
    n &&
      ((r = n),
      Array.isArray(r) && (r = r[0]),
      (r = Ht(r) === 'object' ? r.format : r)),
    a === 'time' && (t.format = r),
    [t, r]
  )
}
function po(e) {
  return e && typeof e == 'string'
}
function La(e, t, n, a) {
  return [e, t, n, a].some(function (r) {
    return r !== void 0
  })
}
function ja(e, t, n, a, r) {
  var l = t,
    i = n,
    u = a
  if (!e && !l && !i && !u && !r) (l = !0), (i = !0), (u = !0)
  else if (e) {
    var s,
      f,
      c,
      d = [l, i, u].some(function (h) {
        return h === !1
      }),
      m = [l, i, u].some(function (h) {
        return h === !0
      }),
      C = d ? !0 : !m
    ;(l = (s = l) !== null && s !== void 0 ? s : C),
      (i = (f = i) !== null && f !== void 0 ? f : C),
      (u = (c = u) !== null && c !== void 0 ? c : C)
  }
  return [l, i, u, r]
}
function Wa(e) {
  var t = e.showTime,
    n = ho(e),
    a = j(n, 2),
    r = a[0],
    l = a[1],
    i = t && Ht(t) === 'object' ? t : {},
    u = ie(
      ie({ defaultOpenValue: i.defaultOpenValue || i.defaultValue }, r),
      i,
    ),
    s = u.showMillisecond,
    f = u.showHour,
    c = u.showMinute,
    d = u.showSecond,
    m = La(f, c, d, s),
    C = ja(m, f, c, d, s),
    h = j(C, 3)
  return (
    (f = h[0]),
    (c = h[1]),
    (d = h[2]),
    [
      u,
      ie(
        ie({}, u),
        {},
        { showHour: f, showMinute: c, showSecond: d, showMillisecond: s },
      ),
      u.format,
      l,
    ]
  )
}
function Ba(e, t, n, a, r) {
  var l = e === 'time'
  if (e === 'datetime' || l) {
    for (
      var i = a, u = Ta(e, r, null), s = u, f = [t, n], c = 0;
      c < f.length;
      c += 1
    ) {
      var d = Ct(f[c])[0]
      if (po(d)) {
        s = d
        break
      }
    }
    var m = i.showHour,
      C = i.showMinute,
      h = i.showSecond,
      S = i.showMillisecond,
      v = i.use12Hours,
      g = Pt(s, ['a', 'A', 'LT', 'LLL', 'LTS'], v),
      x = La(m, C, h, S)
    x ||
      ((m = Pt(s, ['H', 'h', 'k', 'LT', 'LLL'])),
      (C = Pt(s, ['m', 'LT', 'LLL'])),
      (h = Pt(s, ['s', 'LTS'])),
      (S = Pt(s, ['SSS'])))
    var k = ja(x, m, C, h, S),
      w = j(k, 3)
    ;(m = w[0]), (C = w[1]), (h = w[2])
    var R = t || Ya(m, C, h, S, g)
    return ie(
      ie({}, i),
      {},
      {
        format: R,
        showHour: m,
        showMinute: C,
        showSecond: h,
        showMillisecond: S,
        use12Hours: g,
      },
    )
  }
  return null
}
function Co(e, t, n) {
  if (t === !1) return null
  var a = t && Ht(t) === 'object' ? t : {}
  return (
    a.clearIcon ||
    n ||
    o.createElement('span', { className: ''.concat(e, '-clear-btn') })
  )
}
var Nn = 7
function ct(e, t, n) {
  return (!e && !t) || e === t ? !0 : !e || !t ? !1 : n()
}
function An(e, t, n) {
  return ct(t, n, function () {
    var a = Math.floor(e.getYear(t) / 10),
      r = Math.floor(e.getYear(n) / 10)
    return a === r
  })
}
function mt(e, t, n) {
  return ct(t, n, function () {
    return e.getYear(t) === e.getYear(n)
  })
}
function aa(e, t) {
  var n = Math.floor(e.getMonth(t) / 3)
  return n + 1
}
function bo(e, t, n) {
  return ct(t, n, function () {
    return mt(e, t, n) && aa(e, t) === aa(e, n)
  })
}
function qn(e, t, n) {
  return ct(t, n, function () {
    return mt(e, t, n) && e.getMonth(t) === e.getMonth(n)
  })
}
function Kn(e, t, n) {
  return ct(t, n, function () {
    return mt(e, t, n) && qn(e, t, n) && e.getDate(t) === e.getDate(n)
  })
}
function za(e, t, n) {
  return ct(t, n, function () {
    return (
      e.getHour(t) === e.getHour(n) &&
      e.getMinute(t) === e.getMinute(n) &&
      e.getSecond(t) === e.getSecond(n)
    )
  })
}
function Ua(e, t, n) {
  return ct(t, n, function () {
    return (
      Kn(e, t, n) && za(e, t, n) && e.getMillisecond(t) === e.getMillisecond(n)
    )
  })
}
function Rt(e, t, n, a) {
  return ct(n, a, function () {
    var r = e.locale.getWeekFirstDate(t, n),
      l = e.locale.getWeekFirstDate(t, a)
    return mt(e, r, l) && e.locale.getWeek(t, n) === e.locale.getWeek(t, a)
  })
}
function Fe(e, t, n, a, r) {
  switch (r) {
    case 'date':
      return Kn(e, n, a)
    case 'week':
      return Rt(e, t.locale, n, a)
    case 'month':
      return qn(e, n, a)
    case 'quarter':
      return bo(e, n, a)
    case 'year':
      return mt(e, n, a)
    case 'decade':
      return An(e, n, a)
    case 'time':
      return za(e, n, a)
    default:
      return Ua(e, n, a)
  }
}
function on(e, t, n, a) {
  return !t || !n || !a ? !1 : e.isAfter(a, t) && e.isAfter(n, a)
}
function Kt(e, t, n, a, r) {
  return Fe(e, t, n, a, r) ? !0 : e.isAfter(n, a)
}
function So(e, t, n) {
  var a = t.locale.getWeekFirstDay(e),
    r = t.setDate(n, 1),
    l = t.getWeekDay(r),
    i = t.addDate(r, a - l)
  return (
    t.getMonth(i) === t.getMonth(n) &&
      t.getDate(i) > 1 &&
      (i = t.addDate(i, -7)),
    i
  )
}
function Re(e, t) {
  var n = t.generateConfig,
    a = t.locale,
    r = t.format
  return e
    ? typeof r == 'function'
      ? r(e)
      : n.locale.format(a.locale, e, r)
    : ''
}
function nn(e, t, n) {
  var a = t,
    r = ['getHour', 'getMinute', 'getSecond', 'getMillisecond'],
    l = ['setHour', 'setMinute', 'setSecond', 'setMillisecond']
  return (
    l.forEach(function (i, u) {
      n ? (a = e[i](a, e[r[u]](n))) : (a = e[i](a, 0))
    }),
    a
  )
}
function yo(e, t, n, a, r) {
  var l = Ne(function (i, u) {
    return !!(
      (n && n(i, u)) ||
      (a && e.isAfter(a, i) && !Fe(e, t, a, i, u.type)) ||
      (r && e.isAfter(i, r) && !Fe(e, t, r, i, u.type))
    )
  })
  return l
}
function xo(e, t, n) {
  return o.useMemo(
    function () {
      var a = Ta(e, t, n),
        r = Ct(a),
        l = r[0],
        i = Ht(l) === 'object' && l.type === 'mask' ? l.format : null
      return [
        r.map(function (u) {
          return typeof u == 'string' || typeof u == 'function' ? u : u.format
        }),
        i,
      ]
    },
    [e, t, n],
  )
}
function ko(e, t, n) {
  return typeof e[0] == 'function' || n ? !0 : t
}
function wo(e, t, n, a) {
  var r = Ne(function (l, i) {
    var u = ie({ type: t }, i)
    if ((delete u.activeIndex, !e.isValidate(l) || (n && n(l, u)))) return !0
    if ((t === 'date' || t === 'time') && a) {
      var s,
        f = i && i.activeIndex === 1 ? 'end' : 'start',
        c =
          ((s = a.disabledTime) === null || s === void 0
            ? void 0
            : s.call(a, l, f, { from: u.from })) || {},
        d = c.disabledHours,
        m = c.disabledMinutes,
        C = c.disabledSeconds,
        h = c.disabledMilliseconds,
        S = a.disabledHours,
        v = a.disabledMinutes,
        g = a.disabledSeconds,
        x = d || S,
        k = m || v,
        w = C || g,
        R = e.getHour(l),
        P = e.getMinute(l),
        H = e.getSecond(l),
        L = e.getMillisecond(l)
      if (
        (x && x().includes(R)) ||
        (k && k(R).includes(P)) ||
        (w && w(R, P).includes(H)) ||
        (h && h(R, P, H).includes(L))
      )
        return !0
    }
    return !1
  })
  return r
}
function Gt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = o.useMemo(
      function () {
        var a = e && Ct(e)
        return t && a && (a[1] = a[1] || a[0]), a
      },
      [e, t],
    )
  return n
}
function qa(e, t) {
  var n = e.generateConfig,
    a = e.locale,
    r = e.picker,
    l = r === void 0 ? 'date' : r,
    i = e.prefixCls,
    u = i === void 0 ? 'rc-picker' : i,
    s = e.styles,
    f = s === void 0 ? {} : s,
    c = e.classNames,
    d = c === void 0 ? {} : c,
    m = e.order,
    C = m === void 0 ? !0 : m,
    h = e.components,
    S = h === void 0 ? {} : h,
    v = e.inputRender,
    g = e.allowClear,
    x = e.clearIcon,
    k = e.needConfirm,
    w = e.multiple,
    R = e.format,
    P = e.inputReadOnly,
    H = e.disabledDate,
    L = e.minDate,
    A = e.maxDate,
    T = e.showTime,
    N = e.value,
    _ = e.defaultValue,
    Y = e.pickerValue,
    D = e.defaultPickerValue,
    p = Gt(N),
    b = Gt(_),
    M = Gt(Y),
    y = Gt(D),
    I = l === 'date' && T ? 'datetime' : l,
    $ = I === 'time' || I === 'datetime',
    O = $ || w,
    E = k ?? $,
    F = Wa(e),
    V = j(F, 4),
    W = V[0],
    z = V[1],
    U = V[2],
    Z = V[3],
    te = Aa(a, z),
    J = o.useMemo(
      function () {
        return Ba(I, U, Z, W, te)
      },
      [I, U, Z, W, te],
    ),
    q = o.useMemo(
      function () {
        return ie(
          ie({}, e),
          {},
          {
            prefixCls: u,
            locale: te,
            picker: l,
            styles: f,
            classNames: d,
            order: C,
            components: ie({ input: v }, S),
            clearIcon: Co(u, g, x),
            showTime: J,
            value: p,
            defaultValue: b,
            pickerValue: M,
            defaultPickerValue: y,
          },
          t == null ? void 0 : t(),
        )
      },
      [e],
    ),
    G = xo(I, te, R),
    X = j(G, 2),
    ae = X[0],
    ge = X[1],
    re = ko(ae, P, w),
    ee = yo(n, a, H, L, A),
    de = wo(n, l, ee, J),
    be = o.useMemo(
      function () {
        return ie(
          ie({}, q),
          {},
          { needConfirm: E, inputReadOnly: re, disabledDate: ee },
        )
      },
      [q, E, re, ee],
    )
  return [be, I, O, ae, ge, de]
}
function Mo(e, t, n) {
  var a = tt(t, { value: e }),
    r = j(a, 2),
    l = r[0],
    i = r[1],
    u = en.useRef(e),
    s = en.useRef(),
    f = function () {
      nt.cancel(s.current)
    },
    c = Ne(function () {
      i(u.current), n && l !== u.current && n(u.current)
    }),
    d = Ne(function (m, C) {
      f(), (u.current = m), m || C ? c() : (s.current = nt(c))
    })
  return (
    en.useEffect(function () {
      return f
    }, []),
    [l, d]
  )
}
function Ka(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : [],
    a = arguments.length > 3 ? arguments[3] : void 0,
    r = n.every(function (c) {
      return c
    })
      ? !1
      : e,
    l = Mo(r, t || !1, a),
    i = j(l, 2),
    u = i[0],
    s = i[1]
  function f(c) {
    var d = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(!d.inherit || u) && s(c, d.force)
  }
  return [u, f]
}
function Ga(e) {
  var t = o.useRef()
  return (
    o.useImperativeHandle(e, function () {
      var n
      return {
        nativeElement:
          (n = t.current) === null || n === void 0 ? void 0 : n.nativeElement,
        focus: function (r) {
          var l
          ;(l = t.current) === null || l === void 0 || l.focus(r)
        },
        blur: function () {
          var r
          ;(r = t.current) === null || r === void 0 || r.blur()
        },
      }
    }),
    t
  )
}
function Xa(e, t) {
  return o.useMemo(
    function () {
      return (
        e ||
        (t
          ? (kr(!1, '`ranges` is deprecated. Please use `presets` instead.'),
            Object.entries(t).map(function (n) {
              var a = j(n, 2),
                r = a[0],
                l = a[1]
              return { label: r, value: l }
            }))
          : [])
      )
    },
    [e, t],
  )
}
function Gn(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
    a = o.useRef(t)
  ;(a.current = t),
    wr(
      function () {
        if (e) a.current(e)
        else {
          var r = nt(function () {
            a.current(e)
          }, n)
          return function () {
            nt.cancel(r)
          }
        }
      },
      [e],
    )
}
function Qa(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    a = o.useState(0),
    r = j(a, 2),
    l = r[0],
    i = r[1],
    u = o.useState(!1),
    s = j(u, 2),
    f = s[0],
    c = s[1],
    d = o.useRef([]),
    m = o.useRef(null),
    C = function (g) {
      c(g)
    },
    h = function (g) {
      return g && (m.current = g), m.current
    },
    S = function (g) {
      var x = d.current,
        k = new Set(
          x.filter(function (R) {
            return g[R] || t[R]
          }),
        ),
        w = x[x.length - 1] === 0 ? 1 : 0
      return k.size >= 2 || e[w] ? null : w
    }
  return (
    Gn(f || n, function () {
      f || (d.current = [])
    }),
    o.useEffect(
      function () {
        f && d.current.push(l)
      },
      [f, l],
    ),
    [f, C, h, l, i, S, d.current]
  )
}
function $o(e, t, n, a, r, l) {
  var i = n[n.length - 1],
    u = function (f, c) {
      var d = j(e, 2),
        m = d[0],
        C = d[1],
        h = ie(ie({}, c), {}, { from: _a(e, n) })
      return (i === 1 &&
        t[0] &&
        m &&
        !Fe(a, r, m, f, h.type) &&
        a.isAfter(m, f)) ||
        (i === 0 && t[1] && C && !Fe(a, r, C, f, h.type) && a.isAfter(f, C))
        ? !0
        : l == null
          ? void 0
          : l(f, h)
    }
  return u
}
function Nt(e, t, n, a) {
  switch (t) {
    case 'date':
    case 'week':
      return e.addMonth(n, a)
    case 'month':
    case 'quarter':
      return e.addYear(n, a)
    case 'year':
      return e.addYear(n, a * 10)
    case 'decade':
      return e.addYear(n, a * 100)
    default:
      return n
  }
}
var On = []
function Za(e, t, n, a, r, l, i, u) {
  var s = arguments.length > 8 && arguments[8] !== void 0 ? arguments[8] : On,
    f = arguments.length > 9 && arguments[9] !== void 0 ? arguments[9] : On,
    c = arguments.length > 10 && arguments[10] !== void 0 ? arguments[10] : On,
    d = arguments.length > 11 ? arguments[11] : void 0,
    m = arguments.length > 12 ? arguments[12] : void 0,
    C = arguments.length > 13 ? arguments[13] : void 0,
    h = i === 'time',
    S = l || 0,
    v = function (M) {
      var y = e.getNow()
      return h && (y = nn(e, y)), s[M] || n[M] || y
    },
    g = j(f, 2),
    x = g[0],
    k = g[1],
    w = tt(
      function () {
        return v(0)
      },
      { value: x },
    ),
    R = j(w, 2),
    P = R[0],
    H = R[1],
    L = tt(
      function () {
        return v(1)
      },
      { value: k },
    ),
    A = j(L, 2),
    T = A[0],
    N = A[1],
    _ = o.useMemo(
      function () {
        var b = [P, T][S]
        return h ? b : nn(e, b, c[S])
      },
      [h, P, T, S, e, c],
    ),
    Y = function (M) {
      var y =
          arguments.length > 1 && arguments[1] !== void 0
            ? arguments[1]
            : 'panel',
        I = [H, N][S]
      I(M)
      var $ = [P, T]
      ;($[S] = M),
        d &&
          (!Fe(e, t, P, $[0], i) || !Fe(e, t, T, $[1], i)) &&
          d($, { source: y, range: S === 1 ? 'end' : 'start', mode: a })
    },
    D = function (M, y) {
      if (u) {
        var I = {
            date: 'month',
            week: 'month',
            month: 'year',
            quarter: 'year',
          },
          $ = I[i]
        if ($ && !Fe(e, t, M, y, $)) return Nt(e, i, y, -1)
        if (i === 'year' && M) {
          var O = Math.floor(e.getYear(M) / 10),
            E = Math.floor(e.getYear(y) / 10)
          if (O !== E) return Nt(e, i, y, -1)
        }
      }
      return y
    },
    p = o.useRef(null)
  return (
    ut(
      function () {
        if (r && !s[S]) {
          var b = h ? null : e.getNow()
          if (
            (p.current !== null && p.current !== S
              ? (b = [P, T][S ^ 1])
              : n[S]
                ? (b = S === 0 ? n[0] : D(n[0], n[1]))
                : n[S ^ 1] && (b = n[S ^ 1]),
            b)
          ) {
            m && e.isAfter(m, b) && (b = m)
            var M = u ? Nt(e, i, b, 1) : b
            C && e.isAfter(M, C) && (b = u ? Nt(e, i, C, -1) : C), Y(b, 'reset')
          }
        }
      },
      [r, S, n[S]],
    ),
    o.useEffect(
      function () {
        r ? (p.current = S) : (p.current = null)
      },
      [r, S],
    ),
    ut(
      function () {
        r && s && s[S] && Y(s[S], 'reset')
      },
      [r, S],
    ),
    [_, Y]
  )
}
function Ja(e, t) {
  var n = o.useRef(e),
    a = o.useState({}),
    r = j(a, 2),
    l = r[1],
    i = function (f) {
      return f && t !== void 0 ? t : n.current
    },
    u = function (f) {
      ;(n.current = f), l({})
    }
  return [i, u, i(!0)]
}
var Do = []
function er(e, t, n) {
  var a = function (i) {
      return i.map(function (u) {
        return Re(u, { generateConfig: e, locale: t, format: n[0] })
      })
    },
    r = function (i, u) {
      for (var s = Math.max(i.length, u.length), f = -1, c = 0; c < s; c += 1) {
        var d = i[c] || null,
          m = u[c] || null
        if (d !== m && !Ua(e, d, m)) {
          f = c
          break
        }
      }
      return [f < 0, f !== 0]
    }
  return [a, r]
}
function tr(e, t) {
  return ze(e).sort(function (n, a) {
    return t.isAfter(n, a) ? 1 : -1
  })
}
function Po(e) {
  var t = Ja(e),
    n = j(t, 2),
    a = n[0],
    r = n[1],
    l = Ne(function () {
      r(e)
    })
  return (
    o.useEffect(
      function () {
        l()
      },
      [e],
    ),
    [a, r]
  )
}
function nr(e, t, n, a, r, l, i, u, s) {
  var f = tt(l, { value: i }),
    c = j(f, 2),
    d = c[0],
    m = c[1],
    C = d || Do,
    h = Po(C),
    S = j(h, 2),
    v = S[0],
    g = S[1],
    x = er(e, t, n),
    k = j(x, 2),
    w = k[0],
    R = k[1],
    P = Ne(function (L) {
      var A = ze(L)
      if (a) for (var T = 0; T < 2; T += 1) A[T] = A[T] || null
      else
        r &&
          (A = tr(
            A.filter(function (b) {
              return b
            }),
            e,
          ))
      var N = R(v(), A),
        _ = j(N, 2),
        Y = _[0],
        D = _[1]
      if (!Y && (g(A), u)) {
        var p = w(A)
        u(A, p, { range: D ? 'end' : 'start' })
      }
    }),
    H = function () {
      s && s(v())
    }
  return [C, m, v, P, H]
}
function ar(e, t, n, a, r, l, i, u, s, f) {
  var c = e.generateConfig,
    d = e.locale,
    m = e.picker,
    C = e.onChange,
    h = e.allowEmpty,
    S = e.order,
    v = l.some(function (Y) {
      return Y
    })
      ? !1
      : S,
    g = er(c, d, i),
    x = j(g, 2),
    k = x[0],
    w = x[1],
    R = Ja(t),
    P = j(R, 2),
    H = P[0],
    L = P[1],
    A = Ne(function () {
      L(t)
    })
  o.useEffect(
    function () {
      A()
    },
    [t],
  )
  var T = Ne(function (Y) {
      var D = Y === null,
        p = ze(Y || H())
      if (D)
        for (var b = Math.max(l.length, p.length), M = 0; M < b; M += 1)
          l[M] || (p[M] = null)
      v && p[0] && p[1] && (p = tr(p, c)), r(p)
      var y = p,
        I = j(y, 2),
        $ = I[0],
        O = I[1],
        E = !$,
        F = !O,
        V = h ? (!E || h[0]) && (!F || h[1]) : !0,
        W = !S || E || F || Fe(c, d, $, O, m) || c.isAfter(O, $),
        z =
          (!$ || !f($, { activeIndex: 0 })) &&
          (!O || !f(O, { from: $, activeIndex: 1 })),
        U = D || (V && W && z)
      if (U) {
        n(p)
        var Z = w(p, t),
          te = j(Z, 1),
          J = te[0]
        C &&
          !J &&
          C(
            D &&
              p.every(function (q) {
                return !q
              })
              ? null
              : p,
            k(p),
          )
      }
      return U
    }),
    N = Ne(function (Y, D) {
      var p = Ot(H(), Y, a()[Y])
      L(p), D && T()
    }),
    _ = !u && !s
  return (
    Gn(
      !_,
      function () {
        _ && (T(), r(t), A())
      },
      2,
    ),
    [N, T]
  )
}
function rr(e, t, n, a, r) {
  return t !== 'date' && t !== 'time'
    ? !1
    : n !== void 0
      ? n
      : a !== void 0
        ? a
        : !r && (e === 'date' || e === 'time')
}
function Io(e, t, n, a, r, l) {
  var i = e
  function u(d, m, C) {
    var h = l[d](i),
      S = C.find(function (k) {
        return k.value === h
      })
    if (!S || S.disabled) {
      var v = C.filter(function (k) {
          return !k.disabled
        }),
        g = ze(v).reverse(),
        x =
          g.find(function (k) {
            return k.value <= h
          }) || v[0]
      x && ((h = x.value), (i = l[m](i, h)))
    }
    return h
  }
  var s = u('getHour', 'setHour', t()),
    f = u('getMinute', 'setMinute', n(s)),
    c = u('getSecond', 'setSecond', a(s, f))
  return u('getMillisecond', 'setMillisecond', r(s, f, c)), i
}
function Xt() {
  return []
}
function Qt(e, t) {
  for (
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1,
      r = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [],
      l = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 2,
      i = [],
      u = n >= 1 ? n | 0 : 1,
      s = e;
    s <= t;
    s += u
  ) {
    var f = r.includes(s)
    ;(!f || !a) && i.push({ label: zn(s, l), value: s, disabled: f })
  }
  return i
}
function Xn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = arguments.length > 2 ? arguments[2] : void 0,
    a = t || {},
    r = a.use12Hours,
    l = a.hourStep,
    i = l === void 0 ? 1 : l,
    u = a.minuteStep,
    s = u === void 0 ? 1 : u,
    f = a.secondStep,
    c = f === void 0 ? 1 : f,
    d = a.millisecondStep,
    m = d === void 0 ? 100 : d,
    C = a.hideDisabledOptions,
    h = a.disabledTime,
    S = a.disabledHours,
    v = a.disabledMinutes,
    g = a.disabledSeconds,
    x = o.useMemo(
      function () {
        return n || e.getNow()
      },
      [n, e],
    ),
    k = o.useCallback(
      function (y) {
        var I = (h == null ? void 0 : h(y)) || {}
        return [
          I.disabledHours || S || Xt,
          I.disabledMinutes || v || Xt,
          I.disabledSeconds || g || Xt,
          I.disabledMilliseconds || Xt,
        ]
      },
      [h, S, v, g],
    ),
    w = o.useMemo(
      function () {
        return k(x)
      },
      [x, k],
    ),
    R = j(w, 4),
    P = R[0],
    H = R[1],
    L = R[2],
    A = R[3],
    T = o.useCallback(
      function (y, I, $, O) {
        var E = Qt(0, 23, i, C, y()),
          F = r
            ? E.map(function (U) {
                return ie(ie({}, U), {}, { label: zn(U.value % 12 || 12, 2) })
              })
            : E,
          V = function (Z) {
            return Qt(0, 59, s, C, I(Z))
          },
          W = function (Z, te) {
            return Qt(0, 59, c, C, $(Z, te))
          },
          z = function (Z, te, J) {
            return Qt(0, 999, m, C, O(Z, te, J), 3)
          }
        return [F, V, W, z]
      },
      [C, i, r, m, s, c],
    ),
    N = o.useMemo(
      function () {
        return T(P, H, L, A)
      },
      [T, P, H, L, A],
    ),
    _ = j(N, 4),
    Y = _[0],
    D = _[1],
    p = _[2],
    b = _[3],
    M = function (I, $) {
      var O = function () {
          return Y
        },
        E = D,
        F = p,
        V = b
      if ($) {
        var W = k($),
          z = j(W, 4),
          U = z[0],
          Z = z[1],
          te = z[2],
          J = z[3],
          q = T(U, Z, te, J),
          G = j(q, 4),
          X = G[0],
          ae = G[1],
          ge = G[2],
          re = G[3]
        ;(O = function () {
          return X
        }),
          (E = ae),
          (F = ge),
          (V = re)
      }
      var ee = Io(I, O, E, F, V, e)
      return ee
    }
  return [M, Y, D, p, b]
}
function Eo(e) {
  var t = e.mode,
    n = e.internalMode,
    a = e.renderExtraFooter,
    r = e.showNow,
    l = e.showTime,
    i = e.onSubmit,
    u = e.onNow,
    s = e.invalid,
    f = e.needConfirm,
    c = e.generateConfig,
    d = e.disabledDate,
    m = o.useContext(Xe),
    C = m.prefixCls,
    h = m.locale,
    S = m.button,
    v = S === void 0 ? 'button' : S,
    g = c.getNow(),
    x = Xn(c, l, g),
    k = j(x, 1),
    w = k[0],
    R = a == null ? void 0 : a(t),
    P = d(g, { type: t }),
    H = function () {
      if (!P) {
        var D = w(g)
        u(D)
      }
    },
    L = ''.concat(C, '-now'),
    A = ''.concat(L, '-btn'),
    T =
      r &&
      o.createElement(
        'li',
        { className: L },
        o.createElement(
          'a',
          {
            className: $e(A, P && ''.concat(A, '-disabled')),
            'aria-disabled': P,
            onClick: H,
          },
          n === 'date' ? h.today : h.now,
        ),
      ),
    N =
      f &&
      o.createElement(
        'li',
        { className: ''.concat(C, '-ok') },
        o.createElement(v, { disabled: s, onClick: i }, h.ok),
      ),
    _ =
      (T || N) &&
      o.createElement('ul', { className: ''.concat(C, '-ranges') }, T, N)
  return !R && !_
    ? null
    : o.createElement(
        'div',
        { className: ''.concat(C, '-footer') },
        R &&
          o.createElement(
            'div',
            { className: ''.concat(C, '-footer-extra') },
            R,
          ),
        _,
      )
}
function or(e, t, n) {
  function a(r, l) {
    var i = r.findIndex(function (s) {
      return Fe(e, t, s, l, n)
    })
    if (i === -1) return [].concat(ze(r), [l])
    var u = ze(r)
    return u.splice(i, 1), u
  }
  return a
}
var bt = o.createContext(null)
function ln() {
  return o.useContext(bt)
}
function kt(e, t) {
  var n = e.prefixCls,
    a = e.generateConfig,
    r = e.locale,
    l = e.disabledDate,
    i = e.minDate,
    u = e.maxDate,
    s = e.cellRender,
    f = e.hoverValue,
    c = e.hoverRangeValue,
    d = e.onHover,
    m = e.values,
    C = e.pickerValue,
    h = e.onSelect,
    S = e.prevIcon,
    v = e.nextIcon,
    g = e.superPrevIcon,
    x = e.superNextIcon,
    k = a.getNow(),
    w = {
      now: k,
      values: m,
      pickerValue: C,
      prefixCls: n,
      disabledDate: l,
      minDate: i,
      maxDate: u,
      cellRender: s,
      hoverValue: f,
      hoverRangeValue: c,
      onHover: d,
      locale: r,
      generateConfig: a,
      onSelect: h,
      panelType: t,
      prevIcon: S,
      nextIcon: v,
      superPrevIcon: g,
      superNextIcon: x,
    }
  return [w, k]
}
var it = o.createContext({})
function Tt(e) {
  for (
    var t = e.rowNum,
      n = e.colNum,
      a = e.baseDate,
      r = e.getCellDate,
      l = e.prefixColumn,
      i = e.rowClassName,
      u = e.titleFormat,
      s = e.getCellText,
      f = e.getCellClassName,
      c = e.headerCells,
      d = e.cellSelection,
      m = d === void 0 ? !0 : d,
      C = e.disabledDate,
      h = ln(),
      S = h.prefixCls,
      v = h.panelType,
      g = h.now,
      x = h.disabledDate,
      k = h.cellRender,
      w = h.onHover,
      R = h.hoverValue,
      P = h.hoverRangeValue,
      H = h.generateConfig,
      L = h.values,
      A = h.locale,
      T = h.onSelect,
      N = C || x,
      _ = ''.concat(S, '-cell'),
      Y = o.useContext(it),
      D = Y.onCellDblClick,
      p = function (F) {
        return L.some(function (V) {
          return V && Fe(H, A, F, V, v)
        })
      },
      b = [],
      M = 0;
    M < t;
    M += 1
  ) {
    for (
      var y = [],
        I = void 0,
        $ = function () {
          var F = M * n + O,
            V = r(a, F),
            W = N == null ? void 0 : N(V, { type: v })
          O === 0 && ((I = V), l && y.push(l(I)))
          var z = !1,
            U = !1,
            Z = !1
          if (m && P) {
            var te = j(P, 2),
              J = te[0],
              q = te[1]
            ;(z = on(H, J, q, V)),
              (U = Fe(H, A, V, J, v)),
              (Z = Fe(H, A, V, q, v))
          }
          var G = u
              ? Re(V, { locale: A, format: u, generateConfig: H })
              : void 0,
            X = o.createElement(
              'div',
              { className: ''.concat(_, '-inner') },
              s(V),
            )
          y.push(
            o.createElement(
              'td',
              {
                key: O,
                title: G,
                className: $e(
                  _,
                  ie(
                    ve(
                      ve(
                        ve(
                          ve(
                            ve(
                              ve({}, ''.concat(_, '-disabled'), W),
                              ''.concat(_, '-hover'),
                              (R || []).some(function (ae) {
                                return Fe(H, A, V, ae, v)
                              }),
                            ),
                            ''.concat(_, '-in-range'),
                            z && !U && !Z,
                          ),
                          ''.concat(_, '-range-start'),
                          U,
                        ),
                        ''.concat(_, '-range-end'),
                        Z,
                      ),
                      ''.concat(S, '-cell-selected'),
                      !P && v !== 'week' && p(V),
                    ),
                    f(V),
                  ),
                ),
                onClick: function () {
                  W || T(V)
                },
                onDoubleClick: function () {
                  !W && D && D()
                },
                onMouseEnter: function () {
                  W || w == null || w(V)
                },
                onMouseLeave: function () {
                  W || w == null || w(null)
                },
              },
              k
                ? k(V, {
                    prefixCls: S,
                    originNode: X,
                    today: g,
                    type: v,
                    locale: A,
                  })
                : X,
            ),
          )
        },
        O = 0;
      O < n;
      O += 1
    )
      $()
    b.push(
      o.createElement(
        'tr',
        { key: M, className: i == null ? void 0 : i(I) },
        y,
      ),
    )
  }
  return o.createElement(
    'div',
    { className: ''.concat(S, '-body') },
    o.createElement(
      'table',
      { className: ''.concat(S, '-content') },
      c && o.createElement('thead', null, o.createElement('tr', null, c)),
      o.createElement('tbody', null, b),
    ),
  )
}
var Zt = { visibility: 'hidden' }
function wt(e) {
  var t = e.offset,
    n = e.superOffset,
    a = e.onChange,
    r = e.getStart,
    l = e.getEnd,
    i = e.children,
    u = ln(),
    s = u.prefixCls,
    f = u.prevIcon,
    c = f === void 0 ? '‹' : f,
    d = u.nextIcon,
    m = d === void 0 ? '›' : d,
    C = u.superPrevIcon,
    h = C === void 0 ? '«' : C,
    S = u.superNextIcon,
    v = S === void 0 ? '»' : S,
    g = u.minDate,
    x = u.maxDate,
    k = u.generateConfig,
    w = u.locale,
    R = u.pickerValue,
    P = u.panelType,
    H = ''.concat(s, '-header'),
    L = o.useContext(it),
    A = L.hidePrev,
    T = L.hideNext,
    N = L.hideHeader,
    _ = o.useMemo(
      function () {
        if (!g || !t || !l) return !1
        var E = l(t(-1, R))
        return !Kt(k, w, E, g, P)
      },
      [g, t, R, l, k, w, P],
    ),
    Y = o.useMemo(
      function () {
        if (!g || !n || !l) return !1
        var E = l(n(-1, R))
        return !Kt(k, w, E, g, P)
      },
      [g, n, R, l, k, w, P],
    ),
    D = o.useMemo(
      function () {
        if (!x || !t || !r) return !1
        var E = r(t(1, R))
        return !Kt(k, w, x, E, P)
      },
      [x, t, R, r, k, w, P],
    ),
    p = o.useMemo(
      function () {
        if (!x || !n || !r) return !1
        var E = r(n(1, R))
        return !Kt(k, w, x, E, P)
      },
      [x, n, R, r, k, w, P],
    ),
    b = function (F) {
      t && a(t(F, R))
    },
    M = function (F) {
      n && a(n(F, R))
    }
  if (N) return null
  var y = ''.concat(H, '-prev-btn'),
    I = ''.concat(H, '-next-btn'),
    $ = ''.concat(H, '-super-prev-btn'),
    O = ''.concat(H, '-super-next-btn')
  return o.createElement(
    'div',
    { className: H },
    n &&
      o.createElement(
        'button',
        {
          type: 'button',
          'aria-label': 'super-prev-year',
          onClick: function () {
            return M(-1)
          },
          tabIndex: -1,
          className: $e($, Y && ''.concat($, '-disabled')),
          disabled: Y,
          style: A ? Zt : {},
        },
        h,
      ),
    t &&
      o.createElement(
        'button',
        {
          type: 'button',
          'aria-label': 'prev-year',
          onClick: function () {
            return b(-1)
          },
          tabIndex: -1,
          className: $e(y, _ && ''.concat(y, '-disabled')),
          disabled: _,
          style: A ? Zt : {},
        },
        c,
      ),
    o.createElement('div', { className: ''.concat(H, '-view') }, i),
    t &&
      o.createElement(
        'button',
        {
          type: 'button',
          'aria-label': 'next-year',
          onClick: function () {
            return b(1)
          },
          tabIndex: -1,
          className: $e(I, D && ''.concat(I, '-disabled')),
          disabled: D,
          style: T ? Zt : {},
        },
        m,
      ),
    n &&
      o.createElement(
        'button',
        {
          type: 'button',
          'aria-label': 'super-next-year',
          onClick: function () {
            return M(1)
          },
          tabIndex: -1,
          className: $e(O, p && ''.concat(O, '-disabled')),
          disabled: p,
          style: T ? Zt : {},
        },
        v,
      ),
  )
}
function un(e) {
  var t = e.prefixCls,
    n = e.panelName,
    a = n === void 0 ? 'date' : n,
    r = e.locale,
    l = e.generateConfig,
    i = e.pickerValue,
    u = e.onPickerValueChange,
    s = e.onModeChange,
    f = e.mode,
    c = f === void 0 ? 'date' : f,
    d = e.disabledDate,
    m = e.onSelect,
    C = e.onHover,
    h = e.showWeek,
    S = ''.concat(t, '-').concat(a, '-panel'),
    v = ''.concat(t, '-cell'),
    g = c === 'week',
    x = kt(e, c),
    k = j(x, 2),
    w = k[0],
    R = k[1],
    P = l.locale.getWeekFirstDay(r.locale),
    H = l.setDate(i, 1),
    L = So(r.locale, l, H),
    A = l.getMonth(i),
    T = h === void 0 ? g : h,
    N = T
      ? function (E) {
          var F = d == null ? void 0 : d(E, { type: 'week' })
          return o.createElement(
            'td',
            {
              key: 'week',
              className: $e(
                v,
                ''.concat(v, '-week'),
                ve({}, ''.concat(v, '-disabled'), F),
              ),
              onClick: function () {
                F || m(E)
              },
              onMouseEnter: function () {
                F || C == null || C(E)
              },
              onMouseLeave: function () {
                F || C == null || C(null)
              },
            },
            o.createElement(
              'div',
              { className: ''.concat(v, '-inner') },
              l.locale.getWeek(r.locale, E),
            ),
          )
        }
      : null,
    _ = [],
    Y =
      r.shortWeekDays ||
      (l.locale.getShortWeekDays ? l.locale.getShortWeekDays(r.locale) : [])
  N &&
    _.push(o.createElement('th', { key: 'empty', 'aria-label': 'empty cell' }))
  for (var D = 0; D < Nn; D += 1)
    _.push(o.createElement('th', { key: D }, Y[(D + P) % Nn]))
  var p = function (F, V) {
      return l.addDate(F, V)
    },
    b = function (F) {
      return Re(F, { locale: r, format: r.cellDateFormat, generateConfig: l })
    },
    M = function (F) {
      var V = ve(
        ve({}, ''.concat(t, '-cell-in-view'), qn(l, F, i)),
        ''.concat(t, '-cell-today'),
        Kn(l, F, R),
      )
      return V
    },
    y =
      r.shortMonths ||
      (l.locale.getShortMonths ? l.locale.getShortMonths(r.locale) : []),
    I = o.createElement(
      'button',
      {
        type: 'button',
        'aria-label': 'year panel',
        key: 'year',
        onClick: function () {
          s('year', i)
        },
        tabIndex: -1,
        className: ''.concat(t, '-year-btn'),
      },
      Re(i, { locale: r, format: r.yearFormat, generateConfig: l }),
    ),
    $ = o.createElement(
      'button',
      {
        type: 'button',
        'aria-label': 'month panel',
        key: 'month',
        onClick: function () {
          s('month', i)
        },
        tabIndex: -1,
        className: ''.concat(t, '-month-btn'),
      },
      r.monthFormat
        ? Re(i, { locale: r, format: r.monthFormat, generateConfig: l })
        : y[A],
    ),
    O = r.monthBeforeYear ? [$, I] : [I, $]
  return o.createElement(
    bt.Provider,
    { value: w },
    o.createElement(
      'div',
      { className: $e(S, h && ''.concat(S, '-show-week')) },
      o.createElement(
        wt,
        {
          offset: function (F) {
            return l.addMonth(i, F)
          },
          superOffset: function (F) {
            return l.addYear(i, F)
          },
          onChange: u,
          getStart: function (F) {
            return l.setDate(F, 1)
          },
          getEnd: function (F) {
            var V = l.setDate(F, 1)
            return (V = l.addMonth(V, 1)), l.addDate(V, -1)
          },
        },
        O,
      ),
      o.createElement(
        Tt,
        Ce({ titleFormat: r.fieldDateFormat }, e, {
          colNum: Nn,
          rowNum: 6,
          baseDate: L,
          headerCells: _,
          getCellDate: p,
          getCellText: b,
          getCellClassName: M,
          prefixColumn: N,
          cellSelection: !g,
        }),
      ),
    ),
  )
}
var Ro = 1 / 3
function No(e, t) {
  var n = o.useRef(!1),
    a = o.useRef(null),
    r = o.useRef(null),
    l = function () {
      return n.current
    },
    i = function () {
      nt.cancel(a.current), (n.current = !1)
    },
    u = o.useRef(),
    s = function () {
      var d = e.current
      if (((r.current = null), (u.current = 0), d)) {
        var m = d.querySelector('[data-value="'.concat(t, '"]')),
          C = d.querySelector('li'),
          h = function S() {
            i(), (n.current = !0), (u.current += 1)
            var v = d.scrollTop,
              g = C.offsetTop,
              x = m.offsetTop,
              k = x - g
            if ((x === 0 && m !== C) || !Mr(d)) {
              u.current <= 5 && (a.current = nt(S))
              return
            }
            var w = v + (k - v) * Ro,
              R = Math.abs(k - w)
            if (r.current !== null && r.current < R) {
              i()
              return
            }
            if (((r.current = R), R <= 1)) {
              ;(d.scrollTop = k), i()
              return
            }
            ;(d.scrollTop = w), (a.current = nt(S))
          }
        m && C && h()
      }
    },
    f = Ne(s)
  return [f, i, l]
}
var Oo = 300
function It(e) {
  var t = e.units,
    n = e.value,
    a = e.optionalValue,
    r = e.type,
    l = e.onChange,
    i = e.onHover,
    u = e.onDblClick,
    s = e.changeOnScroll,
    f = ln(),
    c = f.prefixCls,
    d = f.cellRender,
    m = f.now,
    C = f.locale,
    h = ''.concat(c, '-time-panel'),
    S = ''.concat(c, '-time-panel-cell'),
    v = o.useRef(null),
    g = o.useRef(),
    x = function () {
      clearTimeout(g.current)
    },
    k = No(v, n ?? a),
    w = j(k, 3),
    R = w[0],
    P = w[1],
    H = w[2]
  ut(
    function () {
      return (
        R(),
        x(),
        function () {
          P(), x()
        }
      )
    },
    [n, a, t],
  )
  var L = function (N) {
      x()
      var _ = N.target
      !H() &&
        s &&
        (g.current = setTimeout(function () {
          var Y = v.current,
            D = Y.querySelector('li').offsetTop,
            p = Array.from(Y.querySelectorAll('li')),
            b = p.map(function (O) {
              return O.offsetTop - D
            }),
            M = b.map(function (O, E) {
              return t[E].disabled
                ? Number.MAX_SAFE_INTEGER
                : Math.abs(O - _.scrollTop)
            }),
            y = Math.min.apply(Math, ze(M)),
            I = M.findIndex(function (O) {
              return O === y
            }),
            $ = t[I]
          $ && !$.disabled && l($.value)
        }, Oo))
    },
    A = ''.concat(h, '-column')
  return o.createElement(
    'ul',
    { className: A, ref: v, 'data-type': r, onScroll: L },
    t.map(function (T) {
      var N = T.label,
        _ = T.value,
        Y = T.disabled,
        D = o.createElement('div', { className: ''.concat(S, '-inner') }, N)
      return o.createElement(
        'li',
        {
          key: _,
          className: $e(
            S,
            ve(
              ve({}, ''.concat(S, '-selected'), n === _),
              ''.concat(S, '-disabled'),
              Y,
            ),
          ),
          onClick: function () {
            Y || l(_)
          },
          onDoubleClick: function () {
            !Y && u && u()
          },
          onMouseEnter: function () {
            i(_)
          },
          onMouseLeave: function () {
            i(null)
          },
          'data-value': _,
        },
        d
          ? d(_, {
              prefixCls: c,
              originNode: D,
              today: m,
              type: 'time',
              subType: r,
              locale: C,
            })
          : D,
      )
    }),
  )
}
function lt(e) {
  return e < 12
}
function Ho(e) {
  var t = e.showHour,
    n = e.showMinute,
    a = e.showSecond,
    r = e.showMillisecond,
    l = e.use12Hours,
    i = e.changeOnScroll,
    u = ln(),
    s = u.prefixCls,
    f = u.values,
    c = u.generateConfig,
    d = u.locale,
    m = u.onSelect,
    C = u.onHover,
    h = C === void 0 ? function () {} : C,
    S = u.pickerValue,
    v = (f == null ? void 0 : f[0]) || null,
    g = o.useContext(it),
    x = g.onCellDblClick,
    k = Xn(c, e, v),
    w = j(k, 5),
    R = w[0],
    P = w[1],
    H = w[2],
    L = w[3],
    A = w[4],
    T = function (Q) {
      var ye = v && c[Q](v),
        De = S && c[Q](S)
      return [ye, De]
    },
    N = T('getHour'),
    _ = j(N, 2),
    Y = _[0],
    D = _[1],
    p = T('getMinute'),
    b = j(p, 2),
    M = b[0],
    y = b[1],
    I = T('getSecond'),
    $ = j(I, 2),
    O = $[0],
    E = $[1],
    F = T('getMillisecond'),
    V = j(F, 2),
    W = V[0],
    z = V[1],
    U = Y === null ? null : lt(Y) ? 'am' : 'pm',
    Z = o.useMemo(
      function () {
        return l
          ? lt(Y)
            ? P.filter(function (B) {
                return lt(B.value)
              })
            : P.filter(function (B) {
                return !lt(B.value)
              })
          : P
      },
      [Y, P, l],
    ),
    te = function (Q, ye) {
      var De,
        Ie = Q.filter(function (Ae) {
          return !Ae.disabled
        })
      return (
        ye ??
        (Ie == null || (De = Ie[0]) === null || De === void 0
          ? void 0
          : De.value)
      )
    },
    J = te(P, Y),
    q = o.useMemo(
      function () {
        return H(J)
      },
      [H, J],
    ),
    G = te(q, M),
    X = o.useMemo(
      function () {
        return L(J, G)
      },
      [L, J, G],
    ),
    ae = te(X, O),
    ge = o.useMemo(
      function () {
        return A(J, G, ae)
      },
      [A, J, G, ae],
    ),
    re = te(ge, W),
    ee = o.useMemo(
      function () {
        if (!l) return []
        var B = c.getNow(),
          Q = c.setHour(B, 6),
          ye = c.setHour(B, 18),
          De = function (Ae, qe) {
            var Le = d.cellMeridiemFormat
            return Le
              ? Re(Ae, { generateConfig: c, locale: d, format: Le })
              : qe
          }
        return [
          {
            label: De(Q, 'AM'),
            value: 'am',
            disabled: P.every(function (Ie) {
              return Ie.disabled || !lt(Ie.value)
            }),
          },
          {
            label: De(ye, 'PM'),
            value: 'pm',
            disabled: P.every(function (Ie) {
              return Ie.disabled || lt(Ie.value)
            }),
          },
        ]
      },
      [P, l, c, d],
    ),
    de = function (Q) {
      var ye = R(Q)
      m(ye)
    },
    be = o.useMemo(
      function () {
        var B = v || S || c.getNow(),
          Q = function (De) {
            return De != null
          }
        return (
          Q(Y)
            ? ((B = c.setHour(B, Y)),
              (B = c.setMinute(B, M)),
              (B = c.setSecond(B, O)),
              (B = c.setMillisecond(B, W)))
            : Q(D)
              ? ((B = c.setHour(B, D)),
                (B = c.setMinute(B, y)),
                (B = c.setSecond(B, E)),
                (B = c.setMillisecond(B, z)))
              : Q(J) &&
                ((B = c.setHour(B, J)),
                (B = c.setMinute(B, G)),
                (B = c.setSecond(B, ae)),
                (B = c.setMillisecond(B, re))),
          B
        )
      },
      [v, S, Y, M, O, W, J, G, ae, re, D, y, E, z, c],
    ),
    Pe = function (Q, ye) {
      return Q === null ? null : c[ye](be, Q)
    },
    xe = function (Q) {
      return Pe(Q, 'setHour')
    },
    we = function (Q) {
      return Pe(Q, 'setMinute')
    },
    Ve = function (Q) {
      return Pe(Q, 'setSecond')
    },
    Oe = function (Q) {
      return Pe(Q, 'setMillisecond')
    },
    He = function (Q) {
      return Q === null
        ? null
        : Q === 'am' && !lt(Y)
          ? c.setHour(be, Y - 12)
          : Q === 'pm' && lt(Y)
            ? c.setHour(be, Y + 12)
            : be
    },
    Ye = function (Q) {
      de(xe(Q))
    },
    ke = function (Q) {
      de(we(Q))
    },
    Ue = function (Q) {
      de(Ve(Q))
    },
    Me = function (Q) {
      de(Oe(Q))
    },
    Te = function (Q) {
      de(He(Q))
    },
    _e = function (Q) {
      h(xe(Q))
    },
    Se = function (Q) {
      h(we(Q))
    },
    oe = function (Q) {
      h(Ve(Q))
    },
    K = function (Q) {
      h(Oe(Q))
    },
    ne = function (Q) {
      h(He(Q))
    },
    se = { onDblClick: x, changeOnScroll: i }
  return o.createElement(
    'div',
    { className: ''.concat(s, '-content') },
    t &&
      o.createElement(
        It,
        Ce(
          {
            units: Z,
            value: Y,
            optionalValue: D,
            type: 'hour',
            onChange: Ye,
            onHover: _e,
          },
          se,
        ),
      ),
    n &&
      o.createElement(
        It,
        Ce(
          {
            units: q,
            value: M,
            optionalValue: y,
            type: 'minute',
            onChange: ke,
            onHover: Se,
          },
          se,
        ),
      ),
    a &&
      o.createElement(
        It,
        Ce(
          {
            units: X,
            value: O,
            optionalValue: E,
            type: 'second',
            onChange: Ue,
            onHover: oe,
          },
          se,
        ),
      ),
    r &&
      o.createElement(
        It,
        Ce(
          {
            units: ge,
            value: W,
            optionalValue: z,
            type: 'millisecond',
            onChange: Me,
            onHover: K,
          },
          se,
        ),
      ),
    l &&
      o.createElement(
        It,
        Ce(
          { units: ee, value: U, type: 'meridiem', onChange: Te, onHover: ne },
          se,
        ),
      ),
  )
}
function lr(e) {
  var t = e.prefixCls,
    n = e.value,
    a = e.locale,
    r = e.generateConfig,
    l = e.showTime,
    i = l || {},
    u = i.format,
    s = ''.concat(t, '-time-panel'),
    f = kt(e, 'time'),
    c = j(f, 1),
    d = c[0]
  return o.createElement(
    bt.Provider,
    { value: d },
    o.createElement(
      'div',
      { className: $e(s) },
      o.createElement(
        wt,
        null,
        n ? Re(n, { locale: a, format: u, generateConfig: r }) : ' ',
      ),
      o.createElement(Ho, l),
    ),
  )
}
function To(e) {
  var t = e.prefixCls,
    n = e.generateConfig,
    a = e.showTime,
    r = e.onSelect,
    l = e.value,
    i = e.pickerValue,
    u = e.onHover,
    s = ''.concat(t, '-datetime-panel'),
    f = Xn(n, a),
    c = j(f, 1),
    d = c[0],
    m = function (v) {
      return l ? nn(n, v, l) : nn(n, v, i)
    },
    C = function (v) {
      u == null || u(v && m(v))
    },
    h = function (v) {
      var g = m(v)
      r(d(g, g))
    }
  return o.createElement(
    'div',
    { className: s },
    o.createElement(un, Ce({}, e, { onSelect: h, onHover: C })),
    o.createElement(lr, e),
  )
}
function _o(e) {
  var t = e.prefixCls,
    n = e.locale,
    a = e.generateConfig,
    r = e.pickerValue,
    l = e.disabledDate,
    i = e.onPickerValueChange,
    u = ''.concat(t, '-decade-panel'),
    s = kt(e, 'decade'),
    f = j(s, 1),
    c = f[0],
    d = function (P) {
      var H = Math.floor(a.getYear(r) / 100) * 100
      return a.setYear(P, H)
    },
    m = function (P) {
      var H = d(P)
      return a.addYear(H, 99)
    },
    C = d(r),
    h = m(r),
    S = a.addYear(C, -10),
    v = function (P, H) {
      return a.addYear(P, H * 10)
    },
    g = function (P) {
      var H = n.cellYearFormat,
        L = Re(P, { locale: n, format: H, generateConfig: a }),
        A = Re(a.addYear(P, 9), { locale: n, format: H, generateConfig: a })
      return ''.concat(L, '-').concat(A)
    },
    x = function (P) {
      return ve(
        {},
        ''.concat(t, '-cell-in-view'),
        An(a, P, C) || An(a, P, h) || on(a, C, h, P),
      )
    },
    k = l
      ? function (R, P) {
          var H = a.setDate(R, 1),
            L = a.setMonth(H, 0),
            A = a.setYear(L, Math.floor(a.getYear(L) / 10) * 10),
            T = a.addYear(A, 10),
            N = a.addDate(T, -1)
          return l(A, P) && l(N, P)
        }
      : null,
    w = ''
      .concat(
        Re(C, { locale: n, format: n.yearFormat, generateConfig: a }),
        '-',
      )
      .concat(Re(h, { locale: n, format: n.yearFormat, generateConfig: a }))
  return o.createElement(
    bt.Provider,
    { value: c },
    o.createElement(
      'div',
      { className: u },
      o.createElement(
        wt,
        {
          superOffset: function (P) {
            return a.addYear(r, P * 100)
          },
          onChange: i,
          getStart: d,
          getEnd: m,
        },
        w,
      ),
      o.createElement(
        Tt,
        Ce({}, e, {
          disabledDate: k,
          colNum: 3,
          rowNum: 4,
          baseDate: S,
          getCellDate: v,
          getCellText: g,
          getCellClassName: x,
        }),
      ),
    ),
  )
}
function Fo(e) {
  var t = e.prefixCls,
    n = e.locale,
    a = e.generateConfig,
    r = e.pickerValue,
    l = e.disabledDate,
    i = e.onPickerValueChange,
    u = e.onModeChange,
    s = ''.concat(t, '-month-panel'),
    f = kt(e, 'month'),
    c = j(f, 1),
    d = c[0],
    m = a.setMonth(r, 0),
    C =
      n.shortMonths ||
      (a.locale.getShortMonths ? a.locale.getShortMonths(n.locale) : []),
    h = function (w, R) {
      return a.addMonth(w, R)
    },
    S = function (w) {
      var R = a.getMonth(w)
      return n.monthFormat
        ? Re(w, { locale: n, format: n.monthFormat, generateConfig: a })
        : C[R]
    },
    v = function () {
      return ve({}, ''.concat(t, '-cell-in-view'), !0)
    },
    g = l
      ? function (k, w) {
          var R = a.setDate(k, 1),
            P = a.setMonth(R, a.getMonth(R) + 1),
            H = a.addDate(P, -1)
          return l(R, w) && l(H, w)
        }
      : null,
    x = o.createElement(
      'button',
      {
        type: 'button',
        key: 'year',
        'aria-label': 'year panel',
        onClick: function () {
          u('year')
        },
        tabIndex: -1,
        className: ''.concat(t, '-year-btn'),
      },
      Re(r, { locale: n, format: n.yearFormat, generateConfig: a }),
    )
  return o.createElement(
    bt.Provider,
    { value: d },
    o.createElement(
      'div',
      { className: s },
      o.createElement(
        wt,
        {
          superOffset: function (w) {
            return a.addYear(r, w)
          },
          onChange: i,
          getStart: function (w) {
            return a.setMonth(w, 0)
          },
          getEnd: function (w) {
            return a.setMonth(w, 11)
          },
        },
        x,
      ),
      o.createElement(
        Tt,
        Ce({}, e, {
          disabledDate: g,
          titleFormat: n.fieldMonthFormat,
          colNum: 3,
          rowNum: 4,
          baseDate: m,
          getCellDate: h,
          getCellText: S,
          getCellClassName: v,
        }),
      ),
    ),
  )
}
function Vo(e) {
  var t = e.prefixCls,
    n = e.locale,
    a = e.generateConfig,
    r = e.pickerValue,
    l = e.onPickerValueChange,
    i = e.onModeChange,
    u = ''.concat(t, '-quarter-panel'),
    s = kt(e, 'quarter'),
    f = j(s, 1),
    c = f[0],
    d = a.setMonth(r, 0),
    m = function (g, x) {
      return a.addMonth(g, x * 3)
    },
    C = function (g) {
      return Re(g, {
        locale: n,
        format: n.cellQuarterFormat,
        generateConfig: a,
      })
    },
    h = function () {
      return ve({}, ''.concat(t, '-cell-in-view'), !0)
    },
    S = o.createElement(
      'button',
      {
        type: 'button',
        key: 'year',
        'aria-label': 'year panel',
        onClick: function () {
          i('year')
        },
        tabIndex: -1,
        className: ''.concat(t, '-year-btn'),
      },
      Re(r, { locale: n, format: n.yearFormat, generateConfig: a }),
    )
  return o.createElement(
    bt.Provider,
    { value: c },
    o.createElement(
      'div',
      { className: u },
      o.createElement(
        wt,
        {
          superOffset: function (g) {
            return a.addYear(r, g)
          },
          onChange: l,
          getStart: function (g) {
            return a.setMonth(g, 0)
          },
          getEnd: function (g) {
            return a.setMonth(g, 11)
          },
        },
        S,
      ),
      o.createElement(
        Tt,
        Ce({}, e, {
          titleFormat: n.fieldQuarterFormat,
          colNum: 4,
          rowNum: 1,
          baseDate: d,
          getCellDate: m,
          getCellText: C,
          getCellClassName: h,
        }),
      ),
    ),
  )
}
function Yo(e) {
  var t = e.prefixCls,
    n = e.generateConfig,
    a = e.locale,
    r = e.value,
    l = e.hoverValue,
    i = e.hoverRangeValue,
    u = a.locale,
    s = ''.concat(t, '-week-panel-row'),
    f = function (d) {
      var m = {}
      if (i) {
        var C = j(i, 2),
          h = C[0],
          S = C[1],
          v = Rt(n, u, h, d),
          g = Rt(n, u, S, d)
        ;(m[''.concat(s, '-range-start')] = v),
          (m[''.concat(s, '-range-end')] = g),
          (m[''.concat(s, '-range-hover')] = !v && !g && on(n, h, S, d))
      }
      return (
        l &&
          (m[''.concat(s, '-hover')] = l.some(function (x) {
            return Rt(n, u, d, x)
          })),
        $e(s, ve({}, ''.concat(s, '-selected'), !i && Rt(n, u, r, d)), m)
      )
    }
  return o.createElement(
    un,
    Ce({}, e, { mode: 'week', panelName: 'week', rowClassName: f }),
  )
}
function Ao(e) {
  var t = e.prefixCls,
    n = e.locale,
    a = e.generateConfig,
    r = e.pickerValue,
    l = e.disabledDate,
    i = e.onPickerValueChange,
    u = e.onModeChange,
    s = ''.concat(t, '-year-panel'),
    f = kt(e, 'year'),
    c = j(f, 1),
    d = c[0],
    m = function (H) {
      var L = Math.floor(a.getYear(r) / 10) * 10
      return a.setYear(H, L)
    },
    C = function (H) {
      var L = m(H)
      return a.addYear(L, 9)
    },
    h = m(r),
    S = C(r),
    v = a.addYear(h, -1),
    g = function (H, L) {
      return a.addYear(H, L)
    },
    x = function (H) {
      return Re(H, { locale: n, format: n.cellYearFormat, generateConfig: a })
    },
    k = function (H) {
      return ve(
        {},
        ''.concat(t, '-cell-in-view'),
        mt(a, H, h) || mt(a, H, S) || on(a, h, S, H),
      )
    },
    w = l
      ? function (P, H) {
          var L = a.setMonth(P, 0),
            A = a.setDate(L, 1),
            T = a.addYear(A, 1),
            N = a.addDate(T, -1)
          return l(A, H) && l(N, H)
        }
      : null,
    R = o.createElement(
      'button',
      {
        type: 'button',
        key: 'decade',
        'aria-label': 'decade panel',
        onClick: function () {
          u('decade')
        },
        tabIndex: -1,
        className: ''.concat(t, '-decade-btn'),
      },
      Re(h, { locale: n, format: n.yearFormat, generateConfig: a }),
      '-',
      Re(S, { locale: n, format: n.yearFormat, generateConfig: a }),
    )
  return o.createElement(
    bt.Provider,
    { value: d },
    o.createElement(
      'div',
      { className: s },
      o.createElement(
        wt,
        {
          superOffset: function (H) {
            return a.addYear(r, H * 10)
          },
          onChange: i,
          getStart: m,
          getEnd: C,
        },
        R,
      ),
      o.createElement(
        Tt,
        Ce({}, e, {
          disabledDate: w,
          titleFormat: n.fieldYearFormat,
          colNum: 3,
          rowNum: 4,
          baseDate: v,
          getCellDate: g,
          getCellText: x,
          getCellClassName: k,
        }),
      ),
    ),
  )
}
var Lo = {
  date: un,
  datetime: To,
  week: Yo,
  month: Fo,
  quarter: Vo,
  year: Ao,
  decade: _o,
  time: lr,
}
function jo(e, t) {
  var n,
    a = e.locale,
    r = e.generateConfig,
    l = e.direction,
    i = e.prefixCls,
    u = e.tabIndex,
    s = u === void 0 ? 0 : u,
    f = e.multiple,
    c = e.defaultValue,
    d = e.value,
    m = e.onChange,
    C = e.onSelect,
    h = e.defaultPickerValue,
    S = e.pickerValue,
    v = e.onPickerValueChange,
    g = e.mode,
    x = e.onPanelChange,
    k = e.picker,
    w = k === void 0 ? 'date' : k,
    R = e.showTime,
    P = e.hoverValue,
    H = e.hoverRangeValue,
    L = e.cellRender,
    A = e.dateRender,
    T = e.monthCellRender,
    N = e.components,
    _ = N === void 0 ? {} : N,
    Y = e.hideHeader,
    D =
      ((n = o.useContext(Xe)) === null || n === void 0
        ? void 0
        : n.prefixCls) ||
      i ||
      'rc-picker',
    p = o.useRef()
  o.useImperativeHandle(t, function () {
    return { nativeElement: p.current }
  })
  var b = Wa(e),
    M = j(b, 4),
    y = M[0],
    I = M[1],
    $ = M[2],
    O = M[3],
    E = Aa(a, I),
    F = w === 'date' && R ? 'datetime' : w,
    V = o.useMemo(
      function () {
        return Ba(F, $, O, y, E)
      },
      [F, $, O, y, E],
    ),
    W = r.getNow(),
    z = tt(w, {
      value: g,
      postState: function (ne) {
        return ne || 'date'
      },
    }),
    U = j(z, 2),
    Z = U[0],
    te = U[1],
    J = Z === 'date' && V ? 'datetime' : Z,
    q = or(r, a, F),
    G = tt(c, { value: d }),
    X = j(G, 2),
    ae = X[0],
    ge = X[1],
    re = o.useMemo(
      function () {
        var K = Ct(ae).filter(function (ne) {
          return ne
        })
        return f ? K : K.slice(0, 1)
      },
      [ae, f],
    ),
    ee = Ne(function (K) {
      ge(K),
        m &&
          (K === null ||
            re.length !== K.length ||
            re.some(function (ne, se) {
              return !Fe(r, a, ne, K[se], F)
            })) &&
          (m == null || m(f ? K : K[0]))
    }),
    de = Ne(function (K) {
      if ((C == null || C(K), Z === w)) {
        var ne = f ? q(re, K) : [K]
        ee(ne)
      }
    }),
    be = tt(h || re[0] || W, { value: S }),
    Pe = j(be, 2),
    xe = Pe[0],
    we = Pe[1]
  o.useEffect(
    function () {
      re[0] && !S && we(re[0])
    },
    [re[0]],
  )
  var Ve = function (ne, se) {
      x == null || x(ne || S, se || Z)
    },
    Oe = function (ne) {
      var se =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
      we(ne), v == null || v(ne), se && Ve(ne)
    },
    He = function (ne, se) {
      te(ne), se && Oe(se), Ve(se, ne)
    },
    Ye = function (ne) {
      if ((de(ne), Oe(ne), Z !== w)) {
        var se = ['decade', 'year'],
          B = [].concat(se, ['month']),
          Q = {
            quarter: [].concat(se, ['quarter']),
            week: [].concat(ze(B), ['week']),
            date: [].concat(ze(B), ['date']),
          },
          ye = Q[w] || B,
          De = ye.indexOf(Z),
          Ie = ye[De + 1]
        Ie && He(Ie, ne)
      }
    },
    ke = o.useMemo(
      function () {
        var K, ne
        if (Array.isArray(H)) {
          var se = j(H, 2)
          ;(K = se[0]), (ne = se[1])
        } else K = H
        return !K && !ne
          ? null
          : ((K = K || ne),
            (ne = ne || K),
            r.isAfter(K, ne) ? [ne, K] : [K, ne])
      },
      [H, r],
    ),
    Ue = Un(L, A, T),
    Me = _[J] || Lo[J] || un,
    Te = o.useContext(it),
    _e = o.useMemo(
      function () {
        return ie(ie({}, Te), {}, { hideHeader: Y })
      },
      [Te, Y],
    ),
    Se = ''.concat(D, '-panel'),
    oe = rn(e, [
      'showWeek',
      'prevIcon',
      'nextIcon',
      'superPrevIcon',
      'superNextIcon',
      'disabledDate',
      'minDate',
      'maxDate',
      'onHover',
    ])
  return o.createElement(
    it.Provider,
    { value: _e },
    o.createElement(
      'div',
      {
        ref: p,
        tabIndex: s,
        className: $e(Se, ve({}, ''.concat(Se, '-rtl'), l === 'rtl')),
      },
      o.createElement(
        Me,
        Ce({}, oe, {
          showTime: V,
          prefixCls: D,
          locale: E,
          generateConfig: r,
          onModeChange: He,
          pickerValue: xe,
          onPickerValueChange: function (ne) {
            Oe(ne, !0)
          },
          value: re[0],
          onSelect: Ye,
          values: re,
          cellRender: Ue,
          hoverRangeValue: ke,
          hoverValue: P,
        }),
      ),
    ),
  )
}
var Hn = o.memo(o.forwardRef(jo))
function Wo(e) {
  var t = e.picker,
    n = e.multiplePanel,
    a = e.pickerValue,
    r = e.onPickerValueChange,
    l = e.needConfirm,
    i = e.onSubmit,
    u = e.range,
    s = e.hoverValue,
    f = o.useContext(Xe),
    c = f.prefixCls,
    d = f.generateConfig,
    m = o.useCallback(
      function (x, k) {
        return Nt(d, t, x, k)
      },
      [d, t],
    ),
    C = o.useMemo(
      function () {
        return m(a, 1)
      },
      [a, m],
    ),
    h = function (k) {
      r(m(k, -1))
    },
    S = {
      onCellDblClick: function () {
        l && i()
      },
    },
    v = t === 'time',
    g = ie(
      ie({}, e),
      {},
      { hoverValue: null, hoverRangeValue: null, hideHeader: v },
    )
  return (
    u ? (g.hoverRangeValue = s) : (g.hoverValue = s),
    n
      ? o.createElement(
          'div',
          { className: ''.concat(c, '-panels') },
          o.createElement(
            it.Provider,
            { value: ie(ie({}, S), {}, { hideNext: !0 }) },
            o.createElement(Hn, g),
          ),
          o.createElement(
            it.Provider,
            { value: ie(ie({}, S), {}, { hidePrev: !0 }) },
            o.createElement(
              Hn,
              Ce({}, g, { pickerValue: C, onPickerValueChange: h }),
            ),
          ),
        )
      : o.createElement(
          it.Provider,
          { value: ie({}, S) },
          o.createElement(Hn, g),
        )
  )
}
function ra(e) {
  return typeof e == 'function' ? e() : e
}
function Bo(e) {
  var t = e.prefixCls,
    n = e.presets,
    a = e.onClick,
    r = e.onHover
  return n.length
    ? o.createElement(
        'div',
        { className: ''.concat(t, '-presets') },
        o.createElement(
          'ul',
          null,
          n.map(function (l, i) {
            var u = l.label,
              s = l.value
            return o.createElement(
              'li',
              {
                key: i,
                onClick: function () {
                  a(ra(s))
                },
                onMouseEnter: function () {
                  r(ra(s))
                },
                onMouseLeave: function () {
                  r(null)
                },
              },
              u,
            )
          }),
        ),
      )
    : null
}
function ir(e) {
  var t = e.panelRender,
    n = e.internalMode,
    a = e.picker,
    r = e.showNow,
    l = e.range,
    i = e.multiple,
    u = e.activeOffset,
    s = u === void 0 ? 0 : u,
    f = e.placement,
    c = e.presets,
    d = e.onPresetHover,
    m = e.onPresetSubmit,
    C = e.onFocus,
    h = e.onBlur,
    S = e.onPanelMouseDown,
    v = e.direction,
    g = e.value,
    x = e.onSelect,
    k = e.isInvalid,
    w = e.defaultOpenValue,
    R = e.onOk,
    P = e.onSubmit,
    H = o.useContext(Xe),
    L = H.prefixCls,
    A = ''.concat(L, '-panel'),
    T = v === 'rtl',
    N = o.useRef(null),
    _ = o.useRef(null),
    Y = o.useState(0),
    D = j(Y, 2),
    p = D[0],
    b = D[1],
    M = o.useState(0),
    y = j(M, 2),
    I = y[0],
    $ = y[1],
    O = function (ee) {
      ee.offsetWidth && b(ee.offsetWidth)
    }
  o.useEffect(
    function () {
      if (l) {
        var re,
          ee =
            ((re = N.current) === null || re === void 0
              ? void 0
              : re.offsetWidth) || 0,
          de = p - ee
        s <= de ? $(0) : $(s + ee - p)
      }
    },
    [p, s, l],
  )
  function E(re) {
    return re.filter(function (ee) {
      return ee
    })
  }
  var F = o.useMemo(
      function () {
        return E(Ct(g))
      },
      [g],
    ),
    V = a === 'time' && !F.length,
    W = o.useMemo(
      function () {
        return V ? E([w]) : F
      },
      [V, F, w],
    ),
    z = V ? w : F,
    U = o.useMemo(
      function () {
        return W.length
          ? W.some(function (re) {
              return k(re)
            })
          : !0
      },
      [W, k],
    ),
    Z = function () {
      V && x(w), R(), P()
    },
    te = o.createElement(
      'div',
      { className: ''.concat(L, '-panel-layout') },
      o.createElement(Bo, { prefixCls: L, presets: c, onClick: m, onHover: d }),
      o.createElement(
        'div',
        null,
        o.createElement(Wo, Ce({}, e, { value: z })),
        o.createElement(
          Eo,
          Ce({}, e, { showNow: i ? !1 : r, invalid: U, onSubmit: Z }),
        ),
      ),
    )
  t && (te = t(te))
  var J = ''.concat(A, '-container'),
    q = 'marginLeft',
    G = 'marginRight',
    X = o.createElement(
      'div',
      {
        onMouseDown: S,
        tabIndex: -1,
        className: $e(J, ''.concat(L, '-').concat(n, '-panel-container')),
        style: ve(ve({}, T ? G : q, I), T ? q : G, 'auto'),
        onFocus: C,
        onBlur: h,
      },
      te,
    )
  if (l) {
    var ae = an(f, T),
      ge = Oa(ae, T)
    X = o.createElement(
      'div',
      {
        onMouseDown: S,
        ref: _,
        className: $e(
          ''.concat(L, '-range-wrapper'),
          ''.concat(L, '-').concat(a, '-range-wrapper'),
        ),
      },
      o.createElement('div', {
        ref: N,
        className: ''.concat(L, '-range-arrow'),
        style: ve({}, ge, s),
      }),
      o.createElement(ua, { onResize: O }, X),
    )
  }
  return X
}
function ur(e, t) {
  var n = e.format,
    a = e.maskFormat,
    r = e.generateConfig,
    l = e.locale,
    i = e.preserveInvalidOnBlur,
    u = e.inputReadOnly,
    s = e.required,
    f = e['aria-required'],
    c = e.onSubmit,
    d = e.onFocus,
    m = e.onBlur,
    C = e.onInputChange,
    h = e.onInvalid,
    S = e.open,
    v = e.onOpenChange,
    g = e.onKeyDown,
    x = e.onChange,
    k = e.activeHelp,
    w = e.name,
    R = e.autoComplete,
    P = e.id,
    H = e.value,
    L = e.invalid,
    A = e.placeholder,
    T = e.disabled,
    N = e.activeIndex,
    _ = e.allHelp,
    Y = e.picker,
    D = function (E, F) {
      var V = r.locale.parse(l.locale, E, [F])
      return V && r.isValidate(V) ? V : null
    },
    p = n[0],
    b = o.useCallback(
      function (O) {
        return Re(O, { locale: l, format: p, generateConfig: r })
      },
      [l, r, p],
    ),
    M = o.useMemo(
      function () {
        return H.map(b)
      },
      [H, b],
    ),
    y = o.useMemo(
      function () {
        var O = Y === 'time' ? 8 : 10,
          E = typeof p == 'function' ? p(r.getNow()).length : p.length
        return Math.max(O, E) + 2
      },
      [p, Y, r],
    ),
    I = function (E) {
      for (var F = 0; F < n.length; F += 1) {
        var V = n[F]
        if (typeof V == 'string') {
          var W = D(E, V)
          if (W) return W
        }
      }
      return !1
    },
    $ = function (E) {
      function F(z) {
        return E !== void 0 ? z[E] : z
      }
      var V = Bn(e, { aria: !0, data: !0 }),
        W = ie(
          ie({}, V),
          {},
          {
            format: a,
            validateFormat: function (U) {
              return !!I(U)
            },
            preserveInvalidOnBlur: i,
            readOnly: u,
            required: s,
            'aria-required': f,
            name: w,
            autoComplete: R,
            size: y,
            id: F(P),
            value: F(M) || '',
            invalid: F(L),
            placeholder: F(A),
            active: N === E,
            helped: _ || (k && N === E),
            disabled: F(T),
            onFocus: function (U) {
              d(U, E)
            },
            onBlur: function (U) {
              m(U, E)
            },
            onSubmit: c,
            onChange: function (U) {
              C()
              var Z = I(U)
              if (Z) {
                h(!1, E), x(Z, E)
                return
              }
              h(!!U, E)
            },
            onHelp: function () {
              v(!0, { index: E })
            },
            onKeyDown: function (U) {
              var Z = !1
              if (
                (g == null ||
                  g(U, function () {
                    Z = !0
                  }),
                !U.defaultPrevented && !Z)
              )
                switch (U.key) {
                  case 'Escape':
                    v(!1, { index: E })
                    break
                  case 'Enter':
                    S || v(!0)
                    break
                }
            },
          },
          t == null ? void 0 : t({ valueTexts: M }),
        )
      return (
        Object.keys(W).forEach(function (z) {
          W[z] === void 0 && delete W[z]
        }),
        W
      )
    }
  return [$, b]
}
var zo = ['onMouseEnter', 'onMouseLeave']
function cr(e) {
  return o.useMemo(
    function () {
      return rn(e, zo)
    },
    [e],
  )
}
var Uo = ['icon', 'type'],
  qo = ['onClear']
function cn(e) {
  var t = e.icon,
    n = e.type,
    a = xt(e, Uo),
    r = o.useContext(Xe),
    l = r.prefixCls
  return t
    ? o.createElement(
        'span',
        Ce({ className: ''.concat(l, '-').concat(n) }, a),
        t,
      )
    : null
}
function Ln(e) {
  var t = e.onClear,
    n = xt(e, qo)
  return o.createElement(
    cn,
    Ce({}, n, {
      type: 'clear',
      role: 'button',
      onMouseDown: function (r) {
        r.preventDefault()
      },
      onClick: function (r) {
        r.stopPropagation(), t()
      },
    }),
  )
}
var Tn = ['YYYY', 'MM', 'DD', 'HH', 'mm', 'ss', 'SSS'],
  oa = '顧',
  Ko = (function () {
    function e(t) {
      Dr(this, e),
        ve(this, 'format', void 0),
        ve(this, 'maskFormat', void 0),
        ve(this, 'cells', void 0),
        ve(this, 'maskCells', void 0),
        (this.format = t)
      var n = Tn.map(function (u) {
          return '('.concat(u, ')')
        }).join('|'),
        a = new RegExp(n, 'g')
      this.maskFormat = t.replace(a, function (u) {
        return oa.repeat(u.length)
      })
      var r = new RegExp('('.concat(Tn.join('|'), ')')),
        l = (t.split(r) || []).filter(function (u) {
          return u
        }),
        i = 0
      ;(this.cells = l.map(function (u) {
        var s = Tn.includes(u),
          f = i,
          c = i + u.length
        return (i = c), { text: u, mask: s, start: f, end: c }
      })),
        (this.maskCells = this.cells.filter(function (u) {
          return u.mask
        }))
    }
    return (
      $r(e, [
        {
          key: 'getSelection',
          value: function (n) {
            var a = this.maskCells[n] || {},
              r = a.start,
              l = a.end
            return [r || 0, l || 0]
          },
        },
        {
          key: 'match',
          value: function (n) {
            for (var a = 0; a < this.maskFormat.length; a += 1) {
              var r = this.maskFormat[a],
                l = n[a]
              if (!l || (r !== oa && r !== l)) return !1
            }
            return !0
          },
        },
        {
          key: 'size',
          value: function () {
            return this.maskCells.length
          },
        },
        {
          key: 'getMaskCellIndex',
          value: function (n) {
            for (
              var a = Number.MAX_SAFE_INTEGER, r = 0, l = 0;
              l < this.maskCells.length;
              l += 1
            ) {
              var i = this.maskCells[l],
                u = i.start,
                s = i.end
              if (n >= u && n <= s) return l
              var f = Math.min(Math.abs(n - u), Math.abs(n - s))
              f < a && ((a = f), (r = l))
            }
            return r
          },
        },
      ]),
      e
    )
  })()
function Go(e) {
  var t = {
    YYYY: [0, 9999, new Date().getFullYear()],
    MM: [1, 12],
    DD: [1, 31],
    HH: [0, 23],
    mm: [0, 59],
    ss: [0, 59],
    SSS: [0, 999],
  }
  return t[e]
}
var Xo = [
    'active',
    'showActiveCls',
    'suffixIcon',
    'format',
    'validateFormat',
    'onChange',
    'onInput',
    'helped',
    'onHelp',
    'onSubmit',
    'onKeyDown',
    'preserveInvalidOnBlur',
    'invalid',
    'clearIcon',
  ],
  jn = o.forwardRef(function (e, t) {
    var n = e.active,
      a = e.showActiveCls,
      r = a === void 0 ? !0 : a,
      l = e.suffixIcon,
      i = e.format,
      u = e.validateFormat,
      s = e.onChange
    e.onInput
    var f = e.helped,
      c = e.onHelp,
      d = e.onSubmit,
      m = e.onKeyDown,
      C = e.preserveInvalidOnBlur,
      h = C === void 0 ? !1 : C,
      S = e.invalid,
      v = e.clearIcon,
      g = xt(e, Xo),
      x = e.value,
      k = e.onFocus,
      w = e.onBlur,
      R = e.onMouseUp,
      P = o.useContext(Xe),
      H = P.prefixCls,
      L = P.input,
      A = L === void 0 ? 'input' : L,
      T = ''.concat(H, '-input'),
      N = o.useState(!1),
      _ = j(N, 2),
      Y = _[0],
      D = _[1],
      p = o.useState(x),
      b = j(p, 2),
      M = b[0],
      y = b[1],
      I = o.useState(''),
      $ = j(I, 2),
      O = $[0],
      E = $[1],
      F = o.useState(null),
      V = j(F, 2),
      W = V[0],
      z = V[1],
      U = o.useState(null),
      Z = j(U, 2),
      te = Z[0],
      J = Z[1],
      q = M || ''
    o.useEffect(
      function () {
        y(x)
      },
      [x],
    )
    var G = o.useRef(),
      X = o.useRef()
    o.useImperativeHandle(t, function () {
      return {
        nativeElement: G.current,
        inputElement: X.current,
        focus: function (K) {
          X.current.focus(K)
        },
        blur: function () {
          X.current.blur()
        },
      }
    })
    var ae = o.useMemo(
        function () {
          return new Ko(i || '')
        },
        [i],
      ),
      ge = o.useMemo(
        function () {
          return f ? [0, 0] : ae.getSelection(W)
        },
        [ae, W, f],
      ),
      re = j(ge, 2),
      ee = re[0],
      de = re[1],
      be = function (K) {
        K && K !== i && K !== x && c()
      },
      Pe = Ne(function (oe) {
        u(oe) && s(oe), y(oe), be(oe)
      }),
      xe = function (K) {
        if (!i) {
          var ne = K.target.value
          be(ne), y(ne), s(ne)
        }
      },
      we = function (K) {
        var ne = K.clipboardData.getData('text')
        u(ne) && Pe(ne)
      },
      Ve = o.useRef(!1),
      Oe = function () {
        Ve.current = !0
      },
      He = function (K) {
        var ne = K.target,
          se = ne.selectionStart,
          B = ae.getMaskCellIndex(se)
        z(B), J({}), R == null || R(K), (Ve.current = !1)
      },
      Ye = function (K) {
        D(!0), z(0), E(''), k(K)
      },
      ke = function (K) {
        w(K)
      },
      Ue = function (K) {
        D(!1), ke(K)
      }
    Gn(n, function () {
      !n && !h && y(x)
    })
    var Me = function (K) {
        K.key === 'Enter' && u(q) && d(), m == null || m(K)
      },
      Te = function (K) {
        Me(K)
        var ne = K.key,
          se = null,
          B = null,
          Q = de - ee,
          ye = i.slice(ee, de),
          De = function (Le) {
            z(function (Ke) {
              var je = Ke + Le
              return (
                (je = Math.max(je, 0)), (je = Math.min(je, ae.size() - 1)), je
              )
            })
          },
          Ie = function (Le) {
            var Ke = Go(ye),
              je = j(Ke, 3),
              at = je[0],
              St = je[1],
              st = je[2],
              rt = q.slice(ee, de),
              dt = Number(rt)
            if (isNaN(dt)) return String(st || (Le > 0 ? at : St))
            var yt = dt + Le,
              ft = St - at + 1
            return String(at + ((ft + yt - at) % ft))
          }
        switch (ne) {
          case 'Backspace':
          case 'Delete':
            ;(se = ''), (B = ye)
            break
          case 'ArrowLeft':
            ;(se = ''), De(-1)
            break
          case 'ArrowRight':
            ;(se = ''), De(1)
            break
          case 'ArrowUp':
            ;(se = ''), (B = Ie(1))
            break
          case 'ArrowDown':
            ;(se = ''), (B = Ie(-1))
            break
          default:
            isNaN(Number(ne)) || ((se = O + ne), (B = se))
            break
        }
        if (
          (se !== null && (E(se), se.length >= Q && (De(1), E(''))), B !== null)
        ) {
          var Ae = q.slice(0, ee) + zn(B, Q) + q.slice(de)
          Pe(Ae.slice(0, i.length))
        }
        J({})
      },
      _e = o.useRef()
    ut(
      function () {
        if (!(!Y || !i || Ve.current)) {
          if (!ae.match(q)) {
            Pe(i)
            return
          }
          return (
            X.current.setSelectionRange(ee, de),
            (_e.current = nt(function () {
              X.current.setSelectionRange(ee, de)
            })),
            function () {
              nt.cancel(_e.current)
            }
          )
        }
      },
      [ae, i, Y, q, W, ee, de, te, Pe],
    )
    var Se = i
      ? {
          onFocus: Ye,
          onBlur: Ue,
          onKeyDown: Te,
          onMouseDown: Oe,
          onMouseUp: He,
          onPaste: we,
        }
      : {}
    return o.createElement(
      'div',
      {
        ref: G,
        className: $e(
          T,
          ve(
            ve({}, ''.concat(T, '-active'), n && r),
            ''.concat(T, '-placeholder'),
            f,
          ),
        ),
      },
      o.createElement(
        A,
        Ce(
          { ref: X, 'aria-invalid': S, autoComplete: 'off' },
          g,
          { onKeyDown: Me, onBlur: ke },
          Se,
          { value: q, onChange: xe },
        ),
      ),
      o.createElement(cn, { type: 'suffix', icon: l }),
      v,
    )
  }),
  Qo = [
    'id',
    'clearIcon',
    'suffixIcon',
    'separator',
    'activeIndex',
    'activeHelp',
    'allHelp',
    'focused',
    'onFocus',
    'onBlur',
    'onKeyDown',
    'locale',
    'generateConfig',
    'placeholder',
    'className',
    'style',
    'onClick',
    'onClear',
    'value',
    'onChange',
    'onSubmit',
    'onInputChange',
    'format',
    'maskFormat',
    'preserveInvalidOnBlur',
    'onInvalid',
    'disabled',
    'invalid',
    'inputReadOnly',
    'direction',
    'onOpenChange',
    'onActiveOffset',
    'placement',
    'onMouseDown',
    'required',
    'aria-required',
    'autoFocus',
  ],
  Zo = ['index']
function Jo(e, t) {
  var n = e.id,
    a = e.clearIcon,
    r = e.suffixIcon,
    l = e.separator,
    i = l === void 0 ? '~' : l,
    u = e.activeIndex
  e.activeHelp, e.allHelp
  var s = e.focused
  e.onFocus, e.onBlur, e.onKeyDown, e.locale, e.generateConfig
  var f = e.placeholder,
    c = e.className,
    d = e.style,
    m = e.onClick,
    C = e.onClear,
    h = e.value
  e.onChange,
    e.onSubmit,
    e.onInputChange,
    e.format,
    e.maskFormat,
    e.preserveInvalidOnBlur,
    e.onInvalid
  var S = e.disabled,
    v = e.invalid
  e.inputReadOnly
  var g = e.direction
  e.onOpenChange
  var x = e.onActiveOffset,
    k = e.placement,
    w = e.onMouseDown
  e.required, e['aria-required']
  var R = e.autoFocus,
    P = xt(e, Qo),
    H = g === 'rtl',
    L = o.useContext(Xe),
    A = L.prefixCls,
    T = o.useMemo(
      function () {
        if (typeof n == 'string') return [n]
        var q = n || {}
        return [q.start, q.end]
      },
      [n],
    ),
    N = o.useRef(),
    _ = o.useRef(),
    Y = o.useRef(),
    D = function (G) {
      var X
      return (X = [_, Y][G]) === null || X === void 0 ? void 0 : X.current
    }
  o.useImperativeHandle(t, function () {
    return {
      nativeElement: N.current,
      focus: function (G) {
        if (Ht(G) === 'object') {
          var X,
            ae = G || {},
            ge = ae.index,
            re = ge === void 0 ? 0 : ge,
            ee = xt(ae, Zo)
          ;(X = D(re)) === null || X === void 0 || X.focus(ee)
        } else {
          var de
          ;(de = D(G ?? 0)) === null || de === void 0 || de.focus()
        }
      },
      blur: function () {
        var G, X
        ;(G = D(0)) === null || G === void 0 || G.blur(),
          (X = D(1)) === null || X === void 0 || X.blur()
      },
    }
  })
  var p = cr(P),
    b = o.useMemo(
      function () {
        return Array.isArray(f) ? f : [f, f]
      },
      [f],
    ),
    M = ur(ie(ie({}, e), {}, { id: T, placeholder: b })),
    y = j(M, 1),
    I = y[0],
    $ = an(k, H),
    O = Oa($, H),
    E = $ == null ? void 0 : $.toLowerCase().endsWith('right'),
    F = o.useState({ position: 'absolute', width: 0 }),
    V = j(F, 2),
    W = V[0],
    z = V[1],
    U = Ne(function () {
      var q = D(u)
      if (q) {
        var G = q.nativeElement,
          X = G.offsetWidth,
          ae = G.offsetLeft,
          ge = G.offsetParent,
          re = (ge == null ? void 0 : ge.offsetWidth) || 0,
          ee = E ? re - X - ae : ae
        z(function (de) {
          return ie(ie({}, de), {}, ve({ width: X }, O, ee))
        }),
          x(ee)
      }
    })
  o.useEffect(
    function () {
      U()
    },
    [u],
  )
  var Z = a && ((h[0] && !S[0]) || (h[1] && !S[1])),
    te = R && !S[0],
    J = R && !te && !S[1]
  return o.createElement(
    ua,
    { onResize: U },
    o.createElement(
      'div',
      Ce({}, p, {
        className: $e(
          A,
          ''.concat(A, '-range'),
          ve(
            ve(
              ve(
                ve({}, ''.concat(A, '-focused'), s),
                ''.concat(A, '-disabled'),
                S.every(function (q) {
                  return q
                }),
              ),
              ''.concat(A, '-invalid'),
              v.some(function (q) {
                return q
              }),
            ),
            ''.concat(A, '-rtl'),
            H,
          ),
          c,
        ),
        style: d,
        ref: N,
        onClick: m,
        onMouseDown: function (G) {
          var X = G.target
          X !== _.current.inputElement &&
            X !== Y.current.inputElement &&
            G.preventDefault(),
            w == null || w(G)
        },
      }),
      o.createElement(
        jn,
        Ce({ ref: _ }, I(0), { autoFocus: te, 'date-range': 'start' }),
      ),
      o.createElement(
        'div',
        { className: ''.concat(A, '-range-separator') },
        i,
      ),
      o.createElement(
        jn,
        Ce({ ref: Y }, I(1), { autoFocus: J, 'date-range': 'end' }),
      ),
      o.createElement('div', {
        className: ''.concat(A, '-active-bar'),
        style: W,
      }),
      o.createElement(cn, { type: 'suffix', icon: r }),
      Z && o.createElement(Ln, { icon: a, onClear: C }),
    ),
  )
}
var el = o.forwardRef(Jo)
function la(e, t) {
  var n = e ?? t
  return Array.isArray(n) ? n : [n, n]
}
function Jt(e) {
  return e === 1 ? 'end' : 'start'
}
function tl(e, t) {
  var n = qa(e, function () {
      var he = e.disabled,
        ue = e.allowEmpty,
        me = la(he, !1),
        Ee = la(ue, !1)
      return { disabled: me, allowEmpty: Ee }
    }),
    a = j(n, 6),
    r = a[0],
    l = a[1],
    i = a[2],
    u = a[3],
    s = a[4],
    f = a[5],
    c = r.prefixCls,
    d = r.styles,
    m = r.classNames,
    C = r.placement,
    h = r.defaultValue,
    S = r.value,
    v = r.needConfirm,
    g = r.onKeyDown,
    x = r.disabled,
    k = r.allowEmpty,
    w = r.disabledDate,
    R = r.minDate,
    P = r.maxDate,
    H = r.defaultOpen,
    L = r.open,
    A = r.onOpenChange,
    T = r.locale,
    N = r.generateConfig,
    _ = r.picker,
    Y = r.showNow,
    D = r.showToday,
    p = r.showTime,
    b = r.mode,
    M = r.onPanelChange,
    y = r.onCalendarChange,
    I = r.onOk,
    $ = r.defaultPickerValue,
    O = r.pickerValue,
    E = r.onPickerValueChange,
    F = r.inputReadOnly,
    V = r.suffixIcon,
    W = r.onFocus,
    z = r.onBlur,
    U = r.presets,
    Z = r.ranges,
    te = r.components,
    J = r.cellRender,
    q = r.dateRender,
    G = r.monthCellRender,
    X = r.onClick,
    ae = Ga(t),
    ge = Ka(L, H, x, A),
    re = j(ge, 2),
    ee = re[0],
    de = re[1],
    be = function (ue, me) {
      ;(x.some(function (Ee) {
        return !Ee
      }) ||
        !ue) &&
        de(ue, me)
    },
    Pe = nr(N, T, u, !0, !1, h, S, y, I),
    xe = j(Pe, 5),
    we = xe[0],
    Ve = xe[1],
    Oe = xe[2],
    He = xe[3],
    Ye = xe[4],
    ke = Oe(),
    Ue = Qa(x, k, ee),
    Me = j(Ue, 7),
    Te = Me[0],
    _e = Me[1],
    Se = Me[2],
    oe = Me[3],
    K = Me[4],
    ne = Me[5],
    se = Me[6],
    B = function (ue, me) {
      _e(!0), W == null || W(ue, { range: Jt(me ?? oe) })
    },
    Q = function (ue, me) {
      _e(!1), z == null || z(ue, { range: Jt(me ?? oe) })
    },
    ye = o.useMemo(
      function () {
        if (!p) return null
        var he = p.disabledTime,
          ue = he
            ? function (me) {
                var Ee = Jt(oe),
                  Ge = _a(ke, se, oe)
                return he(me, Ee, { from: Ge })
              }
            : void 0
        return ie(ie({}, p), {}, { disabledTime: ue })
      },
      [p, oe, ke, se],
    ),
    De = tt([_, _], { value: b }),
    Ie = j(De, 2),
    Ae = Ie[0],
    qe = Ie[1],
    Le = Ae[oe] || _,
    Ke = Le === 'date' && ye ? 'datetime' : Le,
    je = Ke === _ && Ke !== 'time',
    at = rr(_, Le, Y, D, !0),
    St = ar(r, we, Ve, Oe, He, x, u, Te, ee, f),
    st = j(St, 2),
    rt = st[0],
    dt = st[1],
    yt = $o(ke, x, se, N, T, w),
    ft = Va(ke, f, k),
    _t = j(ft, 2),
    sn = _t[0],
    dn = _t[1],
    fn = Za(
      N,
      T,
      ke,
      Ae,
      ee,
      oe,
      l,
      je,
      $,
      O,
      ye == null ? void 0 : ye.defaultOpenValue,
      E,
      R,
      P,
    ),
    Mt = j(fn, 2),
    vn = Mt[0],
    mn = Mt[1],
    $t = Ne(function (he, ue, me) {
      var Ee = Ot(Ae, oe, ue)
      if (((Ee[0] !== Ae[0] || Ee[1] !== Ae[1]) && qe(Ee), M && me !== !1)) {
        var Ge = ze(ke)
        he && (Ge[oe] = he), M(Ge, Ee)
      }
    }),
    Qe = function (ue, me) {
      return Ot(ke, me, ue)
    },
    Ze = function (ue, me) {
      var Ee = ke
      ue && (Ee = Qe(ue, oe))
      var Ge = ne(Ee)
      He(Ee),
        rt(oe, Ge === null),
        Ge === null
          ? be(!1, { force: !0 })
          : me || ae.current.focus({ index: Ge })
    },
    gn = function (ue) {
      var me,
        Ee = ue.target.getRootNode()
      if (
        !ae.current.nativeElement.contains(
          (me = Ee.activeElement) !== null && me !== void 0
            ? me
            : document.activeElement,
        )
      ) {
        var Ge = x.findIndex(function (Sr) {
          return !Sr
        })
        Ge >= 0 && ae.current.focus({ index: Ge })
      }
      be(!0), X == null || X(ue)
    },
    hn = function () {
      dt(null), be(!1, { force: !0 })
    },
    Ft = o.useState(null),
    Vt = j(Ft, 2),
    Yt = Vt[0],
    At = Vt[1],
    Lt = o.useState(null),
    Je = j(Lt, 2),
    ot = Je[0],
    Dt = Je[1],
    jt = o.useMemo(
      function () {
        return ot || ke
      },
      [ke, ot],
    )
  o.useEffect(
    function () {
      ee || Dt(null)
    },
    [ee],
  )
  var pn = o.useState(0),
    Wt = j(pn, 2),
    Bt = Wt[0],
    Cn = Wt[1],
    bn = Xa(U, Z),
    Sn = function (ue) {
      Dt(ue), At('preset')
    },
    yn = function (ue) {
      var me = dt(ue)
      me && be(!1, { force: !0 })
    },
    xn = function (ue) {
      Ze(ue)
    },
    kn = function (ue) {
      Dt(ue ? Qe(ue, oe) : null), At('cell')
    },
    wn = function (ue) {
      be(!0), B(ue)
    },
    Mn = function () {
      Se('panel')
    },
    $n = function (ue) {
      var me = Ot(ke, oe, ue)
      He(me), !v && !i && l === Ke && Ze(ue)
    },
    Dn = function () {
      be(!1)
    },
    Pn = Un(J, q, G, Jt(oe)),
    In = ke[oe] || null,
    En = Ne(function (he) {
      return f(he, { activeIndex: oe })
    }),
    Rn = o.useMemo(
      function () {
        var he = Bn(r, !1),
          ue = ca(
            r,
            [].concat(ze(Object.keys(he)), [
              'onChange',
              'onCalendarChange',
              'style',
              'className',
              'onPanelChange',
              'disabledTime',
            ]),
          )
        return ue
      },
      [r],
    ),
    ce = o.createElement(
      ir,
      Ce({}, Rn, {
        showNow: at,
        showTime: ye,
        range: !0,
        multiplePanel: je,
        activeOffset: Bt,
        placement: C,
        disabledDate: yt,
        onFocus: wn,
        onBlur: Q,
        onPanelMouseDown: Mn,
        picker: _,
        mode: Le,
        internalMode: Ke,
        onPanelChange: $t,
        format: s,
        value: In,
        isInvalid: En,
        onChange: null,
        onSelect: $n,
        pickerValue: vn,
        defaultOpenValue: Ct(p == null ? void 0 : p.defaultOpenValue)[oe],
        onPickerValueChange: mn,
        hoverValue: jt,
        onHover: kn,
        needConfirm: v,
        onSubmit: Ze,
        onOk: Ye,
        presets: bn,
        onPresetHover: Sn,
        onPresetSubmit: yn,
        onNow: xn,
        cellRender: Pn,
      }),
    ),
    le = function (ue, me) {
      var Ee = Qe(ue, me)
      He(Ee)
    },
    We = function () {
      Se('input')
    },
    et = function (ue, me) {
      Se('input'),
        be(!0, { inherit: !0 }),
        oe !== me && ee && !v && i && Ze(null, !0),
        K(me),
        B(ue, me)
    },
    zt = function (ue, me) {
      if ((be(!1), !v && Se() === 'input')) {
        var Ee = ne(ke)
        rt(oe, Ee === null)
      }
      Q(ue, me)
    },
    Cr = function (ue, me) {
      ue.key === 'Tab' && Ze(null, !0), g == null || g(ue, me)
    },
    br = o.useMemo(
      function () {
        return {
          prefixCls: c,
          locale: T,
          generateConfig: N,
          button: te.button,
          input: te.input,
        }
      },
      [c, T, N, te.button, te.input],
    )
  return (
    ut(
      function () {
        ee && oe !== void 0 && $t(null, _, !1)
      },
      [ee, oe, _],
    ),
    ut(
      function () {
        var he = Se()
        !ee && he === 'input' && (be(!1), Ze(null, !0)),
          !ee && i && !v && he === 'panel' && (be(!0), Ze())
      },
      [ee],
    ),
    o.createElement(
      Xe.Provider,
      { value: br },
      o.createElement(
        Ha,
        Ce({}, Fa(r), {
          popupElement: ce,
          popupStyle: d.popup,
          popupClassName: m.popup,
          visible: ee,
          onClose: Dn,
          range: !0,
        }),
        o.createElement(
          el,
          Ce({}, r, {
            ref: ae,
            suffixIcon: V,
            activeIndex: Te || ee ? oe : null,
            activeHelp: !!ot,
            allHelp: !!ot && Yt === 'preset',
            focused: Te,
            onFocus: et,
            onBlur: zt,
            onKeyDown: Cr,
            onSubmit: Ze,
            value: jt,
            maskFormat: s,
            onChange: le,
            onInputChange: We,
            format: u,
            inputReadOnly: F,
            disabled: x,
            open: ee,
            onOpenChange: be,
            onClick: gn,
            onClear: hn,
            invalid: sn,
            onInvalid: dn,
            onActiveOffset: Cn,
          }),
        ),
      ),
    )
  )
}
var nl = o.forwardRef(tl)
function al(e) {
  var t = e.prefixCls,
    n = e.value,
    a = e.onRemove,
    r = e.removeIcon,
    l = r === void 0 ? '×' : r,
    i = e.formatDate,
    u = e.disabled,
    s = e.maxTagCount,
    f = e.placeholder,
    c = ''.concat(t, '-selector'),
    d = ''.concat(t, '-selection'),
    m = ''.concat(d, '-overflow')
  function C(v, g) {
    return o.createElement(
      'span',
      {
        className: $e(''.concat(d, '-item')),
        title: typeof v == 'string' ? v : null,
      },
      o.createElement('span', { className: ''.concat(d, '-item-content') }, v),
      !u &&
        g &&
        o.createElement(
          'span',
          {
            onMouseDown: function (k) {
              k.preventDefault()
            },
            onClick: g,
            className: ''.concat(d, '-item-remove'),
          },
          l,
        ),
    )
  }
  function h(v) {
    var g = i(v),
      x = function (w) {
        w && w.stopPropagation(), a(v)
      }
    return C(g, x)
  }
  function S(v) {
    var g = '+ '.concat(v.length, ' ...')
    return C(g)
  }
  return o.createElement(
    'div',
    { className: c },
    o.createElement(Pr, {
      prefixCls: m,
      data: n,
      renderItem: h,
      renderRest: S,
      itemKey: function (g) {
        return i(g)
      },
      maxCount: s,
    }),
    !n.length &&
      o.createElement(
        'span',
        { className: ''.concat(t, '-selection-placeholder') },
        f,
      ),
  )
}
var rl = [
  'id',
  'open',
  'clearIcon',
  'suffixIcon',
  'activeHelp',
  'allHelp',
  'focused',
  'onFocus',
  'onBlur',
  'onKeyDown',
  'locale',
  'generateConfig',
  'placeholder',
  'className',
  'style',
  'onClick',
  'onClear',
  'internalPicker',
  'value',
  'onChange',
  'onSubmit',
  'onInputChange',
  'multiple',
  'maxTagCount',
  'format',
  'maskFormat',
  'preserveInvalidOnBlur',
  'onInvalid',
  'disabled',
  'invalid',
  'inputReadOnly',
  'direction',
  'onOpenChange',
  'onMouseDown',
  'required',
  'aria-required',
  'autoFocus',
  'removeIcon',
]
function ol(e, t) {
  e.id
  var n = e.open,
    a = e.clearIcon,
    r = e.suffixIcon
  e.activeHelp, e.allHelp
  var l = e.focused
  e.onFocus, e.onBlur, e.onKeyDown
  var i = e.locale,
    u = e.generateConfig,
    s = e.placeholder,
    f = e.className,
    c = e.style,
    d = e.onClick,
    m = e.onClear,
    C = e.internalPicker,
    h = e.value,
    S = e.onChange,
    v = e.onSubmit
  e.onInputChange
  var g = e.multiple,
    x = e.maxTagCount
  e.format, e.maskFormat, e.preserveInvalidOnBlur, e.onInvalid
  var k = e.disabled,
    w = e.invalid
  e.inputReadOnly
  var R = e.direction
  e.onOpenChange
  var P = e.onMouseDown
  e.required, e['aria-required']
  var H = e.autoFocus,
    L = e.removeIcon,
    A = xt(e, rl),
    T = R === 'rtl',
    N = o.useContext(Xe),
    _ = N.prefixCls,
    Y = o.useRef(),
    D = o.useRef()
  o.useImperativeHandle(t, function () {
    return {
      nativeElement: Y.current,
      focus: function (W) {
        var z
        ;(z = D.current) === null || z === void 0 || z.focus(W)
      },
      blur: function () {
        var W
        ;(W = D.current) === null || W === void 0 || W.blur()
      },
    }
  })
  var p = cr(A),
    b = function (W) {
      S([W])
    },
    M = function (W) {
      var z = h.filter(function (U) {
        return U && !Fe(u, i, U, W, C)
      })
      S(z), n || v()
    },
    y = ur(ie(ie({}, e), {}, { onChange: b }), function (V) {
      var W = V.valueTexts
      return { value: W[0] || '', active: l }
    }),
    I = j(y, 2),
    $ = I[0],
    O = I[1],
    E = !!(a && h.length && !k),
    F = g
      ? o.createElement(
          o.Fragment,
          null,
          o.createElement(al, {
            prefixCls: _,
            value: h,
            onRemove: M,
            formatDate: O,
            maxTagCount: x,
            disabled: k,
            removeIcon: L,
            placeholder: s,
          }),
          o.createElement('input', {
            className: ''.concat(_, '-multiple-input'),
            value: h.map(O).join(','),
            ref: D,
            readOnly: !0,
            autoFocus: H,
          }),
          o.createElement(cn, { type: 'suffix', icon: r }),
          E && o.createElement(Ln, { icon: a, onClear: m }),
        )
      : o.createElement(
          jn,
          Ce({ ref: D }, $(), {
            autoFocus: H,
            suffixIcon: r,
            clearIcon: E && o.createElement(Ln, { icon: a, onClear: m }),
            showActiveCls: !1,
          }),
        )
  return o.createElement(
    'div',
    Ce({}, p, {
      className: $e(
        _,
        ve(
          ve(
            ve(
              ve(
                ve({}, ''.concat(_, '-multiple'), g),
                ''.concat(_, '-focused'),
                l,
              ),
              ''.concat(_, '-disabled'),
              k,
            ),
            ''.concat(_, '-invalid'),
            w,
          ),
          ''.concat(_, '-rtl'),
          T,
        ),
        f,
      ),
      style: c,
      ref: Y,
      onClick: d,
      onMouseDown: function (W) {
        var z,
          U = W.target
        U !==
          ((z = D.current) === null || z === void 0
            ? void 0
            : z.inputElement) && W.preventDefault(),
          P == null || P(W)
      },
    }),
    F,
  )
}
var ll = o.forwardRef(ol)
function il(e, t) {
  var n = qa(e),
    a = j(n, 6),
    r = a[0],
    l = a[1],
    i = a[2],
    u = a[3],
    s = a[4],
    f = a[5],
    c = r,
    d = c.prefixCls,
    m = c.styles,
    C = c.classNames,
    h = c.order,
    S = c.defaultValue,
    v = c.value,
    g = c.needConfirm,
    x = c.onChange,
    k = c.onKeyDown,
    w = c.disabled,
    R = c.disabledDate,
    P = c.minDate,
    H = c.maxDate,
    L = c.defaultOpen,
    A = c.open,
    T = c.onOpenChange,
    N = c.locale,
    _ = c.generateConfig,
    Y = c.picker,
    D = c.showNow,
    p = c.showToday,
    b = c.showTime,
    M = c.mode,
    y = c.onPanelChange,
    I = c.onCalendarChange,
    $ = c.onOk,
    O = c.multiple,
    E = c.defaultPickerValue,
    F = c.pickerValue,
    V = c.onPickerValueChange,
    W = c.inputReadOnly,
    z = c.suffixIcon,
    U = c.removeIcon,
    Z = c.onFocus,
    te = c.onBlur,
    J = c.presets,
    q = c.components,
    G = c.cellRender,
    X = c.dateRender,
    ae = c.monthCellRender,
    ge = c.onClick,
    re = Ga(t)
  function ee(ce) {
    return ce === null ? null : O ? ce : ce[0]
  }
  var de = or(_, N, l),
    be = Ka(A, L, [w], T),
    Pe = j(be, 2),
    xe = Pe[0],
    we = Pe[1],
    Ve = function (le, We, et) {
      if (I) {
        var zt = ie({}, et)
        delete zt.range, I(ee(le), ee(We), zt)
      }
    },
    Oe = function (le) {
      $ == null || $(ee(le))
    },
    He = nr(_, N, u, !1, h, S, v, Ve, Oe),
    Ye = j(He, 5),
    ke = Ye[0],
    Ue = Ye[1],
    Me = Ye[2],
    Te = Ye[3],
    _e = Ye[4],
    Se = Me(),
    oe = Qa([w]),
    K = j(oe, 4),
    ne = K[0],
    se = K[1],
    B = K[2],
    Q = K[3],
    ye = function (le) {
      se(!0), Z == null || Z(le, {})
    },
    De = function (le) {
      se(!1), te == null || te(le, {})
    },
    Ie = tt(Y, { value: M }),
    Ae = j(Ie, 2),
    qe = Ae[0],
    Le = Ae[1],
    Ke = qe === 'date' && b ? 'datetime' : qe,
    je = rr(Y, qe, D, p),
    at =
      x &&
      function (ce, le) {
        x(ee(ce), ee(le))
      },
    St = ar(
      ie(ie({}, r), {}, { onChange: at }),
      ke,
      Ue,
      Me,
      Te,
      [],
      u,
      ne,
      xe,
      f,
    ),
    st = j(St, 2),
    rt = st[1],
    dt = Va(Se, f),
    yt = j(dt, 2),
    ft = yt[0],
    _t = yt[1],
    sn = o.useMemo(
      function () {
        return ft.some(function (ce) {
          return ce
        })
      },
      [ft],
    ),
    dn = function (le, We) {
      if (V) {
        var et = ie(ie({}, We), {}, { mode: We.mode[0] })
        delete et.range, V(le[0], et)
      }
    },
    fn = Za(
      _,
      N,
      Se,
      [qe],
      xe,
      Q,
      l,
      !1,
      E,
      F,
      Ct(b == null ? void 0 : b.defaultOpenValue),
      dn,
      P,
      H,
    ),
    Mt = j(fn, 2),
    vn = Mt[0],
    mn = Mt[1],
    $t = Ne(function (ce, le, We) {
      if ((Le(le), y && We !== !1)) {
        var et = ce || Se[Se.length - 1]
        y(et, le)
      }
    }),
    Qe = function () {
      rt(Me()), we(!1, { force: !0 })
    },
    Ze = function (le) {
      !w &&
        !re.current.nativeElement.contains(document.activeElement) &&
        re.current.focus(),
        we(!0),
        ge == null || ge(le)
    },
    gn = function () {
      rt(null), we(!1, { force: !0 })
    },
    hn = o.useState(null),
    Ft = j(hn, 2),
    Vt = Ft[0],
    Yt = Ft[1],
    At = o.useState(null),
    Lt = j(At, 2),
    Je = Lt[0],
    ot = Lt[1],
    Dt = o.useMemo(
      function () {
        var ce = [Je].concat(ze(Se)).filter(function (le) {
          return le
        })
        return O ? ce : ce.slice(0, 1)
      },
      [Se, Je, O],
    ),
    jt = o.useMemo(
      function () {
        return !O && Je
          ? [Je]
          : Se.filter(function (ce) {
              return ce
            })
      },
      [Se, Je, O],
    )
  o.useEffect(
    function () {
      xe || ot(null)
    },
    [xe],
  )
  var pn = Xa(J),
    Wt = function (le) {
      ot(le), Yt('preset')
    },
    Bt = function (le) {
      var We = O ? de(Me(), le) : [le],
        et = rt(We)
      et && !O && we(!1, { force: !0 })
    },
    Cn = function (le) {
      Bt(le)
    },
    bn = function (le) {
      ot(le), Yt('cell')
    },
    Sn = function (le) {
      we(!0), ye(le)
    },
    yn = function (le) {
      B('panel')
      var We = O ? de(Me(), le) : [le]
      Te(We), !g && !i && l === Ke && Qe()
    },
    xn = function () {
      we(!1)
    },
    kn = Un(G, X, ae),
    wn = o.useMemo(
      function () {
        var ce = Bn(r, !1),
          le = ca(
            r,
            [].concat(ze(Object.keys(ce)), [
              'onChange',
              'onCalendarChange',
              'style',
              'className',
              'onPanelChange',
            ]),
          )
        return ie(ie({}, le), {}, { multiple: r.multiple })
      },
      [r],
    ),
    Mn = o.createElement(
      ir,
      Ce({}, wn, {
        showNow: je,
        showTime: b,
        disabledDate: R,
        onFocus: Sn,
        onBlur: De,
        picker: Y,
        mode: qe,
        internalMode: Ke,
        onPanelChange: $t,
        format: s,
        value: Se,
        isInvalid: f,
        onChange: null,
        onSelect: yn,
        pickerValue: vn,
        defaultOpenValue: b == null ? void 0 : b.defaultOpenValue,
        onPickerValueChange: mn,
        hoverValue: Dt,
        onHover: bn,
        needConfirm: g,
        onSubmit: Qe,
        onOk: _e,
        presets: pn,
        onPresetHover: Wt,
        onPresetSubmit: Bt,
        onNow: Cn,
        cellRender: kn,
      }),
    ),
    $n = function (le) {
      Te(le)
    },
    Dn = function () {
      B('input')
    },
    Pn = function (le) {
      B('input'), we(!0, { inherit: !0 }), ye(le)
    },
    In = function (le) {
      we(!1), De(le)
    },
    En = function (le, We) {
      le.key === 'Tab' && Qe(), k == null || k(le, We)
    },
    Rn = o.useMemo(
      function () {
        return {
          prefixCls: d,
          locale: N,
          generateConfig: _,
          button: q.button,
          input: q.input,
        }
      },
      [d, N, _, q.button, q.input],
    )
  return (
    ut(
      function () {
        xe && Q !== void 0 && $t(null, Y, !1)
      },
      [xe, Q, Y],
    ),
    ut(
      function () {
        var ce = B()
        !xe && ce === 'input' && (we(!1), Qe()),
          !xe && i && !g && ce === 'panel' && (we(!0), Qe())
      },
      [xe],
    ),
    o.createElement(
      Xe.Provider,
      { value: Rn },
      o.createElement(
        Ha,
        Ce({}, Fa(r), {
          popupElement: Mn,
          popupStyle: m.popup,
          popupClassName: C.popup,
          visible: xe,
          onClose: xn,
        }),
        o.createElement(
          ll,
          Ce({}, r, {
            ref: re,
            suffixIcon: z,
            removeIcon: U,
            activeHelp: !!Je,
            allHelp: !!Je && Vt === 'preset',
            focused: ne,
            onFocus: Pn,
            onBlur: In,
            onKeyDown: En,
            onSubmit: Qe,
            value: jt,
            maskFormat: s,
            onChange: $n,
            onInputChange: Dn,
            internalPicker: l,
            format: u,
            inputReadOnly: W,
            disabled: w,
            open: xe,
            onOpenChange: we,
            onClick: Ze,
            onClear: gn,
            invalid: sn,
            onInvalid: function (le) {
              _t(le, 0)
            },
          }),
        ),
      ),
    )
  )
}
var ul = o.forwardRef(il)
const _n = (e, t) => {
    const { componentCls: n, controlHeight: a } = e,
      r = t ? `${n}-${t}` : '',
      l = qr(e)
    return [
      {
        [`${n}-multiple${r}`]: {
          paddingBlock: l.containerPadding,
          paddingInlineStart: l.basePadding,
          minHeight: a,
          [`${n}-selection-item`]: {
            height: l.itemHeight,
            lineHeight: fe(l.itemLineHeight),
          },
        },
      },
    ]
  },
  cl = (e) => {
    const { componentCls: t, calc: n, lineWidth: a } = e,
      r = Vn(e, {
        fontHeight: e.fontSize,
        selectHeight: e.controlHeightSM,
        multipleSelectItemHeight: e.multipleItemHeightSM,
        borderRadius: e.borderRadiusSM,
        borderRadiusSM: e.borderRadiusXS,
        controlHeight: e.controlHeightSM,
      }),
      l = Vn(e, {
        fontHeight: n(e.multipleItemHeightLG).sub(n(a).mul(2).equal()).equal(),
        fontSize: e.fontSizeLG,
        selectHeight: e.controlHeightLG,
        multipleSelectItemHeight: e.multipleItemHeightLG,
        borderRadius: e.borderRadiusLG,
        borderRadiusSM: e.borderRadius,
        controlHeight: e.controlHeightLG,
      })
    return [
      _n(r, 'small'),
      _n(e),
      _n(l, 'large'),
      {
        [`${t}${t}-multiple`]: Object.assign(
          Object.assign(
            {
              width: '100%',
              cursor: 'text',
              [`${t}-selector`]: {
                flex: 'auto',
                padding: 0,
                position: 'relative',
                '&:after': { margin: 0 },
                [`${t}-selection-placeholder`]: {
                  position: 'absolute',
                  top: '50%',
                  insetInlineStart: e.inputPaddingHorizontalBase,
                  insetInlineEnd: 0,
                  transform: 'translateY(-50%)',
                  transition: `all ${e.motionDurationSlow}`,
                  overflow: 'hidden',
                  whiteSpace: 'nowrap',
                  textOverflow: 'ellipsis',
                  flex: 1,
                  color: e.colorTextPlaceholder,
                  pointerEvents: 'none',
                },
              },
            },
            Ur(e),
          ),
          {
            [`${t}-multiple-input`]: {
              width: 0,
              height: 0,
              border: 0,
              visibility: 'hidden',
              position: 'absolute',
              zIndex: -1,
            },
          },
        ),
      },
    ]
  },
  sl = (e) => {
    const {
      pickerCellCls: t,
      pickerCellInnerCls: n,
      cellHeight: a,
      borderRadiusSM: r,
      motionDurationMid: l,
      cellHoverBg: i,
      lineWidth: u,
      lineType: s,
      colorPrimary: f,
      cellActiveWithRangeBg: c,
      colorTextLightSolid: d,
      colorTextDisabled: m,
      cellBgDisabled: C,
      colorFillSecondary: h,
    } = e
    return {
      '&::before': {
        position: 'absolute',
        top: '50%',
        insetInlineStart: 0,
        insetInlineEnd: 0,
        zIndex: 1,
        height: a,
        transform: 'translateY(-50%)',
        content: '""',
      },
      [n]: {
        position: 'relative',
        zIndex: 2,
        display: 'inline-block',
        minWidth: a,
        height: a,
        lineHeight: fe(a),
        borderRadius: r,
        transition: `background ${l}`,
      },
      [`&:hover:not(${t}-in-view),
    &:hover:not(${t}-selected):not(${t}-range-start):not(${t}-range-end)`]: {
        [n]: { background: i },
      },
      [`&-in-view${t}-today ${n}`]: {
        '&::before': {
          position: 'absolute',
          top: 0,
          insetInlineEnd: 0,
          bottom: 0,
          insetInlineStart: 0,
          zIndex: 1,
          border: `${fe(u)} ${s} ${f}`,
          borderRadius: r,
          content: '""',
        },
      },
      [`&-in-view${t}-in-range,
      &-in-view${t}-range-start,
      &-in-view${t}-range-end`]: {
        position: 'relative',
        [`&:not(${t}-disabled):before`]: { background: c },
      },
      [`&-in-view${t}-selected,
      &-in-view${t}-range-start,
      &-in-view${t}-range-end`]: {
        [`&:not(${t}-disabled) ${n}`]: { color: d, background: f },
        [`&${t}-disabled ${n}`]: { background: h },
      },
      [`&-in-view${t}-range-start:not(${t}-disabled):before`]: {
        insetInlineStart: '50%',
      },
      [`&-in-view${t}-range-end:not(${t}-disabled):before`]: {
        insetInlineEnd: '50%',
      },
      [`&-in-view${t}-range-start:not(${t}-range-end) ${n}`]: {
        borderStartStartRadius: r,
        borderEndStartRadius: r,
        borderStartEndRadius: 0,
        borderEndEndRadius: 0,
      },
      [`&-in-view${t}-range-end:not(${t}-range-start) ${n}`]: {
        borderStartStartRadius: 0,
        borderEndStartRadius: 0,
        borderStartEndRadius: r,
        borderEndEndRadius: r,
      },
      '&-disabled': {
        color: m,
        pointerEvents: 'none',
        [n]: { background: 'transparent' },
        '&::before': { background: C },
      },
      [`&-disabled${t}-today ${n}::before`]: { borderColor: m },
    }
  },
  dl = (e) => {
    const {
        componentCls: t,
        pickerCellCls: n,
        pickerCellInnerCls: a,
        pickerYearMonthCellWidth: r,
        pickerControlIconSize: l,
        cellWidth: i,
        paddingSM: u,
        paddingXS: s,
        paddingXXS: f,
        colorBgContainer: c,
        lineWidth: d,
        lineType: m,
        borderRadiusLG: C,
        colorPrimary: h,
        colorTextHeading: S,
        colorSplit: v,
        pickerControlIconBorderWidth: g,
        colorIcon: x,
        textHeight: k,
        motionDurationMid: w,
        colorIconHover: R,
        fontWeightStrong: P,
        cellHeight: H,
        pickerCellPaddingVertical: L,
        colorTextDisabled: A,
        colorText: T,
        fontSize: N,
        motionDurationSlow: _,
        withoutTimeCellHeight: Y,
        pickerQuarterPanelContentHeight: D,
        borderRadiusSM: p,
        colorTextLightSolid: b,
        cellHoverBg: M,
        timeColumnHeight: y,
        timeColumnWidth: I,
        timeCellHeight: $,
        controlItemBgActive: O,
        marginXXS: E,
        pickerDatePanelPaddingHorizontal: F,
        pickerControlIconMargin: V,
      } = e,
      W = e.calc(i).mul(7).add(e.calc(F).mul(2)).equal()
    return {
      [t]: {
        '&-panel': {
          display: 'inline-flex',
          flexDirection: 'column',
          textAlign: 'center',
          background: c,
          borderRadius: C,
          outline: 'none',
          '&-focused': { borderColor: h },
          '&-rtl': {
            [`${t}-prev-icon,
              ${t}-super-prev-icon`]: { transform: 'rotate(45deg)' },
            [`${t}-next-icon,
              ${t}-super-next-icon`]: { transform: 'rotate(-135deg)' },
            [`${t}-time-panel`]: {
              [`${t}-content`]: {
                direction: 'ltr',
                '> *': { direction: 'rtl' },
              },
            },
          },
        },
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel,\n        &-week-panel,\n        &-date-panel,\n        &-time-panel':
          { display: 'flex', flexDirection: 'column', width: W },
        '&-header': {
          display: 'flex',
          padding: `0 ${fe(s)}`,
          color: S,
          borderBottom: `${fe(d)} ${m} ${v}`,
          '> *': { flex: 'none' },
          button: {
            padding: 0,
            color: x,
            lineHeight: fe(k),
            background: 'transparent',
            border: 0,
            cursor: 'pointer',
            transition: `color ${w}`,
            fontSize: 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
          },
          '> button': {
            minWidth: '1.6em',
            fontSize: N,
            '&:hover': { color: R },
            '&:disabled': { opacity: 0.25, pointerEvents: 'none' },
          },
          '&-view': {
            flex: 'auto',
            fontWeight: P,
            lineHeight: fe(k),
            '> button': {
              color: 'inherit',
              fontWeight: 'inherit',
              '&:not(:first-child)': { marginInlineStart: s },
              '&:hover': { color: h },
            },
          },
        },
        '&-prev-icon,\n        &-next-icon,\n        &-super-prev-icon,\n        &-super-next-icon':
          {
            position: 'relative',
            width: l,
            height: l,
            '&::before': {
              position: 'absolute',
              top: 0,
              insetInlineStart: 0,
              width: l,
              height: l,
              border: '0 solid currentcolor',
              borderBlockWidth: `${fe(g)} 0`,
              borderInlineWidth: `${fe(g)} 0`,
              content: '""',
            },
          },
        '&-super-prev-icon,\n        &-super-next-icon': {
          '&::after': {
            position: 'absolute',
            top: V,
            insetInlineStart: V,
            display: 'inline-block',
            width: l,
            height: l,
            border: '0 solid currentcolor',
            borderBlockWidth: `${fe(g)} 0`,
            borderInlineWidth: `${fe(g)} 0`,
            content: '""',
          },
        },
        '&-prev-icon, &-super-prev-icon': { transform: 'rotate(-45deg)' },
        '&-next-icon, &-super-next-icon': { transform: 'rotate(135deg)' },
        '&-content': {
          width: '100%',
          tableLayout: 'fixed',
          borderCollapse: 'collapse',
          'th, td': { position: 'relative', minWidth: H, fontWeight: 'normal' },
          th: {
            height: e.calc(H).add(e.calc(L).mul(2)).equal(),
            color: T,
            verticalAlign: 'middle',
          },
        },
        '&-cell': Object.assign(
          {
            padding: `${fe(L)} 0`,
            color: A,
            cursor: 'pointer',
            '&-in-view': { color: T },
          },
          sl(e),
        ),
        '&-decade-panel,\n        &-year-panel,\n        &-quarter-panel,\n        &-month-panel':
          {
            [`${t}-content`]: { height: e.calc(Y).mul(4).equal() },
            [a]: { padding: `0 ${fe(s)}` },
          },
        '&-quarter-panel': { [`${t}-content`]: { height: D } },
        '&-decade-panel': {
          [a]: { padding: `0 ${fe(e.calc(s).div(2).equal())}` },
          [`${t}-cell::before`]: { display: 'none' },
        },
        '&-year-panel,\n        &-quarter-panel,\n        &-month-panel': {
          [`${t}-body`]: { padding: `0 ${fe(s)}` },
          [a]: { width: r },
        },
        '&-date-panel': {
          [`${t}-body`]: { padding: `${fe(s)} ${fe(F)}` },
          [`${t}-content th`]: { boxSizing: 'border-box', padding: 0 },
        },
        '&-week-panel': {
          [`${t}-cell`]: {
            [`&:hover ${a},
            &-selected ${a},
            ${a}`]: { background: 'transparent !important' },
          },
          '&-row': {
            td: {
              '&:before': { transition: `background ${w}` },
              '&:first-child:before': {
                borderStartStartRadius: p,
                borderEndStartRadius: p,
              },
              '&:last-child:before': {
                borderStartEndRadius: p,
                borderEndEndRadius: p,
              },
            },
            '&:hover td': { '&:before': { background: M } },
            '&-range-start td, &-range-end td, &-selected td, &-hover td': {
              [`&${n}`]: {
                '&:before': { background: h },
                [`&${t}-cell-week`]: {
                  color: new tn(b).setAlpha(0.5).toHexString(),
                },
                [a]: { color: b },
              },
            },
            '&-range-hover td:before': { background: O },
          },
        },
        '&-week-panel, &-date-panel-show-week': {
          [`${t}-body`]: { padding: `${fe(s)} ${fe(u)}` },
          [`${t}-content th`]: { width: 'auto' },
        },
        '&-datetime-panel': {
          display: 'flex',
          [`${t}-time-panel`]: { borderInlineStart: `${fe(d)} ${m} ${v}` },
          [`${t}-date-panel,
          ${t}-time-panel`]: { transition: `opacity ${_}` },
          '&-active': {
            [`${t}-date-panel,
            ${t}-time-panel`]: { opacity: 0.3, '&-active': { opacity: 1 } },
          },
        },
        '&-time-panel': {
          width: 'auto',
          minWidth: 'auto',
          [`${t}-content`]: { display: 'flex', flex: 'auto', height: y },
          '&-column': {
            flex: '1 0 auto',
            width: I,
            margin: `${fe(f)} 0`,
            padding: 0,
            overflowY: 'hidden',
            textAlign: 'start',
            listStyle: 'none',
            transition: `background ${w}`,
            overflowX: 'hidden',
            '&::-webkit-scrollbar': {
              width: 8,
              backgroundColor: 'transparent',
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: e.colorTextTertiary,
              borderRadius: e.borderRadiusSM,
            },
            '&': {
              scrollbarWidth: 'thin',
              scrollbarColor: `${e.colorTextTertiary} transparent`,
            },
            '&::after': {
              display: 'block',
              height: e.calc('100%').sub($).equal(),
              content: '""',
            },
            '&:not(:first-child)': { borderInlineStart: `${fe(d)} ${m} ${v}` },
            '&-active': { background: new tn(O).setAlpha(0.2).toHexString() },
            '&:hover': { overflowY: 'auto' },
            '> li': {
              margin: 0,
              padding: 0,
              [`&${t}-time-panel-cell`]: {
                marginInline: E,
                [`${t}-time-panel-cell-inner`]: {
                  display: 'block',
                  width: e.calc(I).sub(e.calc(E).mul(2)).equal(),
                  height: $,
                  margin: 0,
                  paddingBlock: 0,
                  paddingInlineEnd: 0,
                  paddingInlineStart: e.calc(I).sub($).div(2).equal(),
                  color: T,
                  lineHeight: fe($),
                  borderRadius: p,
                  cursor: 'pointer',
                  transition: `background ${w}`,
                  '&:hover': { background: M },
                },
                '&-selected': {
                  [`${t}-time-panel-cell-inner`]: { background: O },
                },
                '&-disabled': {
                  [`${t}-time-panel-cell-inner`]: {
                    color: A,
                    background: 'transparent',
                    cursor: 'not-allowed',
                  },
                },
              },
            },
          },
        },
      },
    }
  },
  fl = (e) => {
    const {
      componentCls: t,
      textHeight: n,
      lineWidth: a,
      paddingSM: r,
      antCls: l,
      colorPrimary: i,
      cellActiveWithRangeBg: u,
      colorPrimaryBorder: s,
      lineType: f,
      colorSplit: c,
    } = e
    return {
      [`${t}-dropdown`]: {
        [`${t}-footer`]: {
          borderTop: `${fe(a)} ${f} ${c}`,
          '&-extra': {
            padding: `0 ${fe(r)}`,
            lineHeight: fe(e.calc(n).sub(e.calc(a).mul(2)).equal()),
            textAlign: 'start',
            '&:not(:last-child)': { borderBottom: `${fe(a)} ${f} ${c}` },
          },
        },
        [`${t}-panels + ${t}-footer ${t}-ranges`]: {
          justifyContent: 'space-between',
        },
        [`${t}-ranges`]: {
          marginBlock: 0,
          paddingInline: fe(r),
          overflow: 'hidden',
          textAlign: 'start',
          listStyle: 'none',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          '> li': {
            lineHeight: fe(e.calc(n).sub(e.calc(a).mul(2)).equal()),
            display: 'inline-block',
          },
          [`${t}-now-btn-disabled`]: {
            pointerEvents: 'none',
            color: e.colorTextDisabled,
          },
          [`${t}-preset > ${l}-tag-blue`]: {
            color: i,
            background: u,
            borderColor: s,
            cursor: 'pointer',
          },
          [`${t}-ok`]: {
            paddingBlock: e.calc(a).mul(2).equal(),
            marginInlineStart: 'auto',
          },
        },
      },
    }
  },
  vl = (e) => {
    const { componentCls: t, controlHeightLG: n, paddingXXS: a, padding: r } = e
    return {
      pickerCellCls: `${t}-cell`,
      pickerCellInnerCls: `${t}-cell-inner`,
      pickerYearMonthCellWidth: e.calc(n).mul(1.5).equal(),
      pickerQuarterPanelContentHeight: e.calc(n).mul(1.4).equal(),
      pickerCellPaddingVertical: e.calc(a).add(e.calc(a).div(2)).equal(),
      pickerCellBorderGap: 2,
      pickerControlIconSize: 7,
      pickerControlIconMargin: 4,
      pickerControlIconBorderWidth: 1.5,
      pickerDatePanelPaddingHorizontal: e.calc(r).add(e.calc(a).div(2)).equal(),
    }
  },
  ml = (e) => {
    const {
        colorBgContainerDisabled: t,
        controlHeight: n,
        controlHeightSM: a,
        controlHeightLG: r,
        paddingXXS: l,
        lineWidth: i,
      } = e,
      u = l * 2,
      s = i * 2,
      f = Math.min(n - u, n - s),
      c = Math.min(a - u, a - s),
      d = Math.min(r - u, r - s)
    return {
      INTERNAL_FIXED_ITEM_MARGIN: Math.floor(l / 2),
      cellHoverBg: e.controlItemBgHover,
      cellActiveWithRangeBg: e.controlItemBgActive,
      cellHoverWithRangeBg: new tn(e.colorPrimary).lighten(35).toHexString(),
      cellRangeBorderColor: new tn(e.colorPrimary).lighten(20).toHexString(),
      cellBgDisabled: t,
      timeColumnWidth: r * 1.4,
      timeColumnHeight: 28 * 8,
      timeCellHeight: 28,
      cellWidth: a * 1.5,
      cellHeight: a,
      textHeight: r,
      withoutTimeCellHeight: r * 1.65,
      multipleItemBg: e.colorFillSecondary,
      multipleItemBorderColor: 'transparent',
      multipleItemHeight: f,
      multipleItemHeightSM: c,
      multipleItemHeightLG: d,
      multipleSelectorBgDisabled: t,
      multipleItemColorDisabled: e.colorTextDisabled,
      multipleItemBorderColorDisabled: 'transparent',
    }
  },
  gl = (e) =>
    Object.assign(
      Object.assign(Object.assign(Object.assign({}, Ir(e)), ml(e)), Er(e)),
      {
        presetsWidth: 120,
        presetsMaxWidth: 200,
        zIndexPopup: e.zIndexPopupBase + 50,
      },
    ),
  hl = (e) => {
    const { componentCls: t } = e
    return {
      [t]: [
        Object.assign(Object.assign(Object.assign({}, Rr(e)), Nr(e)), Or(e)),
        {
          '&-outlined': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${fe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
          '&-filled': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.colorBgContainer,
              border: `${fe(e.lineWidth)} ${e.lineType} ${e.colorSplit}`,
            },
          },
          '&-borderless': {
            [`&${t}-multiple ${t}-selection-item`]: {
              background: e.multipleItemBg,
              border: `${fe(e.lineWidth)} ${e.lineType} ${e.multipleItemBorderColor}`,
            },
          },
        },
      ],
    }
  },
  Fn = (e, t, n, a) => {
    const r = e.calc(n).add(2).equal(),
      l = e.max(e.calc(t).sub(r).div(2).equal(), 0),
      i = e.max(e.calc(t).sub(r).sub(l).equal(), 0)
    return { padding: `${fe(l)} ${fe(a)} ${fe(i)}` }
  },
  pl = (e) => {
    const { componentCls: t, colorError: n, colorWarning: a } = e
    return {
      [`${t}:not(${t}-disabled):not([disabled])`]: {
        [`&${t}-status-error`]: { [`${t}-active-bar`]: { background: n } },
        [`&${t}-status-warning`]: { [`${t}-active-bar`]: { background: a } },
      },
    }
  },
  Cl = (e) => {
    const {
      componentCls: t,
      antCls: n,
      controlHeight: a,
      paddingInline: r,
      lineWidth: l,
      lineType: i,
      colorBorder: u,
      borderRadius: s,
      motionDurationMid: f,
      colorTextDisabled: c,
      colorTextPlaceholder: d,
      controlHeightLG: m,
      fontSizeLG: C,
      controlHeightSM: h,
      paddingInlineSM: S,
      paddingXS: v,
      marginXS: g,
      colorTextDescription: x,
      lineWidthBold: k,
      colorPrimary: w,
      motionDurationSlow: R,
      zIndexPopup: P,
      paddingXXS: H,
      sizePopupArrow: L,
      colorBgElevated: A,
      borderRadiusLG: T,
      boxShadowSecondary: N,
      borderRadiusSM: _,
      colorSplit: Y,
      cellHoverBg: D,
      presetsWidth: p,
      presetsMaxWidth: b,
      boxShadowPopoverArrow: M,
      fontHeight: y,
      fontHeightLG: I,
      lineHeightLG: $,
    } = e
    return [
      {
        [t]: Object.assign(
          Object.assign(Object.assign({}, Zn(e)), Fn(e, a, y, r)),
          {
            position: 'relative',
            display: 'inline-flex',
            alignItems: 'center',
            lineHeight: 1,
            borderRadius: s,
            transition: `border ${f}, box-shadow ${f}, background ${f}`,
            [`${t}-input`]: {
              position: 'relative',
              display: 'inline-flex',
              alignItems: 'center',
              width: '100%',
              '> input': Object.assign(
                Object.assign(
                  {
                    position: 'relative',
                    display: 'inline-block',
                    width: '100%',
                    color: 'inherit',
                    fontSize: e.fontSize,
                    lineHeight: e.lineHeight,
                    transition: `all ${f}`,
                  },
                  Fr(d),
                ),
                {
                  flex: 'auto',
                  minWidth: 1,
                  height: 'auto',
                  padding: 0,
                  background: 'transparent',
                  border: 0,
                  fontFamily: 'inherit',
                  '&:focus': { boxShadow: 'none', outline: 0 },
                  '&[disabled]': {
                    background: 'transparent',
                    color: c,
                    cursor: 'not-allowed',
                  },
                },
              ),
              '&-placeholder': { '> input': { color: d } },
            },
            '&-large': Object.assign(Object.assign({}, Fn(e, m, I, r)), {
              [`${t}-input > input`]: { fontSize: C, lineHeight: $ },
            }),
            '&-small': Object.assign({}, Fn(e, h, y, S)),
            [`${t}-suffix`]: {
              display: 'flex',
              flex: 'none',
              alignSelf: 'center',
              marginInlineStart: e.calc(v).div(2).equal(),
              color: c,
              lineHeight: 1,
              pointerEvents: 'none',
              transition: `opacity ${f}, color ${f}`,
              '> *': {
                verticalAlign: 'top',
                '&:not(:last-child)': { marginInlineEnd: g },
              },
            },
            [`${t}-clear`]: {
              position: 'absolute',
              top: '50%',
              insetInlineEnd: 0,
              color: c,
              lineHeight: 1,
              transform: 'translateY(-50%)',
              cursor: 'pointer',
              opacity: 0,
              transition: `opacity ${f}, color ${f}`,
              '> *': { verticalAlign: 'top' },
              '&:hover': { color: x },
            },
            '&:hover': {
              [`${t}-clear`]: { opacity: 1 },
              [`${t}-suffix:not(:last-child)`]: { opacity: 0 },
            },
            [`${t}-separator`]: {
              position: 'relative',
              display: 'inline-block',
              width: '1em',
              height: C,
              color: c,
              fontSize: C,
              verticalAlign: 'top',
              cursor: 'default',
              [`${t}-focused &`]: { color: x },
              [`${t}-range-separator &`]: {
                [`${t}-disabled &`]: { cursor: 'not-allowed' },
              },
            },
            '&-range': {
              position: 'relative',
              display: 'inline-flex',
              [`${t}-active-bar`]: {
                bottom: e.calc(l).mul(-1).equal(),
                height: k,
                background: w,
                opacity: 0,
                transition: `all ${R} ease-out`,
                pointerEvents: 'none',
              },
              [`&${t}-focused`]: { [`${t}-active-bar`]: { opacity: 1 } },
              [`${t}-range-separator`]: {
                alignItems: 'center',
                padding: `0 ${fe(v)}`,
                lineHeight: 1,
              },
            },
            '&-range, &-multiple': {
              [`${t}-clear`]: { insetInlineEnd: r },
              [`&${t}-small`]: { [`${t}-clear`]: { insetInlineEnd: S } },
            },
            '&-dropdown': Object.assign(
              Object.assign(Object.assign({}, Zn(e)), dl(e)),
              {
                pointerEvents: 'none',
                position: 'absolute',
                top: -9999,
                left: { _skip_check_: !0, value: -9999 },
                zIndex: P,
                [`&${t}-dropdown-hidden`]: { display: 'none' },
                '&-rtl': { direction: 'rtl' },
                [`&${t}-dropdown-placement-bottomLeft,
            &${t}-dropdown-placement-bottomRight`]: {
                  [`${t}-range-arrow`]: {
                    top: 0,
                    display: 'block',
                    transform: 'translateY(-100%)',
                  },
                },
                [`&${t}-dropdown-placement-topLeft,
            &${t}-dropdown-placement-topRight`]: {
                  [`${t}-range-arrow`]: {
                    bottom: 0,
                    display: 'block',
                    transform: 'translateY(100%) rotate(180deg)',
                  },
                },
                [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-topRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-topRight`]:
                  { animationName: Vr },
                [`&${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-enter${n}-slide-up-enter-active${t}-dropdown-placement-bottomRight,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-appear${n}-slide-up-appear-active${t}-dropdown-placement-bottomRight`]:
                  { animationName: Yr },
                [`&${n}-slide-up-leave ${t}-panel-container`]: {
                  pointerEvents: 'none',
                },
                [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-topRight`]:
                  { animationName: Ar },
                [`&${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomLeft,
          &${n}-slide-up-leave${n}-slide-up-leave-active${t}-dropdown-placement-bottomRight`]:
                  { animationName: Lr },
                [`${t}-panel > ${t}-time-panel`]: { paddingTop: H },
                [`${t}-range-wrapper`]: {
                  display: 'flex',
                  position: 'relative',
                },
                [`${t}-range-arrow`]: Object.assign(
                  Object.assign(
                    {
                      position: 'absolute',
                      zIndex: 1,
                      display: 'none',
                      paddingInline: e.calc(r).mul(1.5).equal(),
                      boxSizing: 'content-box',
                      transition: `all ${R} ease-out`,
                    },
                    jr(e, A, M),
                  ),
                  {
                    '&:before': {
                      insetInlineStart: e.calc(r).mul(1.5).equal(),
                    },
                  },
                ),
                [`${t}-panel-container`]: {
                  overflow: 'hidden',
                  verticalAlign: 'top',
                  background: A,
                  borderRadius: T,
                  boxShadow: N,
                  transition: `margin ${R}`,
                  display: 'inline-block',
                  pointerEvents: 'auto',
                  [`${t}-panel-layout`]: {
                    display: 'flex',
                    flexWrap: 'nowrap',
                    alignItems: 'stretch',
                  },
                  [`${t}-presets`]: {
                    display: 'flex',
                    flexDirection: 'column',
                    minWidth: p,
                    maxWidth: b,
                    ul: {
                      height: 0,
                      flex: 'auto',
                      listStyle: 'none',
                      overflow: 'auto',
                      margin: 0,
                      padding: v,
                      borderInlineEnd: `${fe(l)} ${i} ${Y}`,
                      li: Object.assign(Object.assign({}, Wr), {
                        borderRadius: _,
                        paddingInline: v,
                        paddingBlock: e.calc(h).sub(y).div(2).equal(),
                        cursor: 'pointer',
                        transition: `all ${R}`,
                        '+ li': { marginTop: g },
                        '&:hover': { background: D },
                      }),
                    },
                  },
                  [`${t}-panels`]: {
                    display: 'inline-flex',
                    flexWrap: 'nowrap',
                    '&:last-child': { [`${t}-panel`]: { borderWidth: 0 } },
                  },
                  [`${t}-panel`]: {
                    verticalAlign: 'top',
                    background: 'transparent',
                    borderRadius: 0,
                    borderWidth: 0,
                    [`${t}-content, table`]: { textAlign: 'center' },
                    '&-focused': { borderColor: u },
                  },
                },
              },
            ),
            '&-dropdown-range': {
              padding: `${fe(e.calc(L).mul(2).div(3).equal())} 0`,
              '&-hidden': { display: 'none' },
            },
            '&-rtl': {
              direction: 'rtl',
              [`${t}-separator`]: { transform: 'rotate(180deg)' },
              [`${t}-footer`]: { '&-extra': { direction: 'rtl' } },
            },
          },
        ),
      },
      Jn(e, 'slide-up'),
      Jn(e, 'slide-down'),
      ea(e, 'move-up'),
      ea(e, 'move-down'),
    ]
  },
  sr = Hr(
    'DatePicker',
    (e) => {
      const t = Vn(Tr(e), vl(e), {
        inputPaddingHorizontalBase: e.calc(e.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: e.multipleItemHeight,
        selectHeight: e.controlHeight,
      })
      return [
        fl(t),
        Cl(t),
        hl(t),
        pl(t),
        cl(t),
        _r(e, { focusElCls: `${e.componentCls}-focused` }),
      ]
    },
    gl,
  )
var bl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M880 184H712v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H384v-64c0-4.4-3.6-8-8-8h-56c-4.4 0-8 3.6-8 8v64H144c-17.7 0-32 14.3-32 32v664c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V216c0-17.7-14.3-32-32-32zm-40 656H184V460h656v380zM184 392V256h128v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h256v48c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8v-48h128v136H184z',
          },
        },
      ],
    },
    name: 'calendar',
    theme: 'outlined',
  },
  Sl = function (t, n) {
    return o.createElement(Wn, Ce({}, t, { ref: n, icon: bl }))
  },
  dr = o.forwardRef(Sl),
  yl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M686.7 638.6L544.1 535.5V288c0-4.4-3.6-8-8-8H488c-4.4 0-8 3.6-8 8v275.4c0 2.6 1.2 5 3.3 6.5l165.4 120.6c3.6 2.6 8.6 1.8 11.2-1.7l28.6-39c2.6-3.7 1.8-8.7-1.8-11.2z',
          },
        },
      ],
    },
    name: 'clock-circle',
    theme: 'outlined',
  },
  xl = function (t, n) {
    return o.createElement(Wn, Ce({}, t, { ref: n, icon: yl }))
  },
  fr = o.forwardRef(xl),
  kl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M873.1 596.2l-164-208A32 32 0 00684 376h-64.8c-6.7 0-10.4 7.7-6.3 13l144.3 183H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h695.9c26.8 0 41.7-30.8 25.2-51.8z',
          },
        },
      ],
    },
    name: 'swap-right',
    theme: 'outlined',
  },
  wl = function (t, n) {
    return o.createElement(Wn, Ce({}, t, { ref: n, icon: kl }))
  },
  Ml = o.forwardRef(wl)
function $l(e, t, n) {
  return n !== void 0
    ? n
    : t === 'year' && e.lang.yearPlaceholder
      ? e.lang.yearPlaceholder
      : t === 'quarter' && e.lang.quarterPlaceholder
        ? e.lang.quarterPlaceholder
        : t === 'month' && e.lang.monthPlaceholder
          ? e.lang.monthPlaceholder
          : t === 'week' && e.lang.weekPlaceholder
            ? e.lang.weekPlaceholder
            : t === 'time' && e.timePickerLocale.placeholder
              ? e.timePickerLocale.placeholder
              : e.lang.placeholder
}
function Dl(e, t, n) {
  return n !== void 0
    ? n
    : t === 'year' && e.lang.yearPlaceholder
      ? e.lang.rangeYearPlaceholder
      : t === 'quarter' && e.lang.quarterPlaceholder
        ? e.lang.rangeQuarterPlaceholder
        : t === 'month' && e.lang.monthPlaceholder
          ? e.lang.rangeMonthPlaceholder
          : t === 'week' && e.lang.weekPlaceholder
            ? e.lang.rangeWeekPlaceholder
            : t === 'time' && e.timePickerLocale.placeholder
              ? e.timePickerLocale.rangePlaceholder
              : e.lang.rangePlaceholder
}
function Qn(e, t) {
  const n = { adjustX: 1, adjustY: 1 }
  switch (t) {
    case 'bottomLeft':
      return { points: ['tl', 'bl'], offset: [0, 4], overflow: n }
    case 'bottomRight':
      return { points: ['tr', 'br'], offset: [0, 4], overflow: n }
    case 'topLeft':
      return { points: ['bl', 'tl'], offset: [0, -4], overflow: n }
    case 'topRight':
      return { points: ['br', 'tr'], offset: [0, -4], overflow: n }
    default:
      return {
        points: e === 'rtl' ? ['tr', 'br'] : ['tl', 'bl'],
        offset: [0, 4],
        overflow: n,
      }
  }
}
function vr(e, t) {
  const { allowClear: n = !0 } = e,
    { clearIcon: a, removeIcon: r } = Kr(
      Object.assign(Object.assign({}, e), {
        prefixCls: t,
        componentName: 'DatePicker',
      }),
    )
  return [
    o.useMemo(
      () =>
        n === !1 ? !1 : Object.assign({ clearIcon: a }, n === !0 ? {} : n),
      [n, a],
    ),
    r,
  ]
}
const [Pl, Il] = ['week', 'WeekPicker'],
  [El, Rl] = ['month', 'MonthPicker'],
  [Nl, Ol] = ['year', 'YearPicker'],
  [Hl, Tl] = ['quarter', 'QuarterPicker'],
  [mr, ia] = ['time', 'TimePicker'],
  _l = (e) =>
    o.createElement(Yn, Object.assign({ size: 'small', type: 'primary' }, e))
function gr(e) {
  return o.useMemo(() => Object.assign({ button: _l }, e), [e])
}
var Fl = function (e, t) {
  var n = {}
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (n[a] = e[a])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
      t.indexOf(a[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
        (n[a[r]] = e[a[r]])
  return n
}
const Vl = (e) =>
  o.forwardRef((n, a) => {
    var r
    const {
        prefixCls: l,
        getPopupContainer: i,
        components: u,
        className: s,
        style: f,
        placement: c,
        size: d,
        disabled: m,
        bordered: C = !0,
        placeholder: h,
        popupClassName: S,
        dropdownClassName: v,
        status: g,
        rootClassName: x,
        variant: k,
        picker: w,
      } = n,
      R = Fl(n, [
        'prefixCls',
        'getPopupContainer',
        'components',
        'className',
        'style',
        'placement',
        'size',
        'disabled',
        'bordered',
        'placeholder',
        'popupClassName',
        'dropdownClassName',
        'status',
        'rootClassName',
        'variant',
        'picker',
      ]),
      P = o.useRef(null),
      {
        getPrefixCls: H,
        direction: L,
        getPopupContainer: A,
        rangePicker: T,
      } = o.useContext(sa),
      N = H('picker', l),
      { compactSize: _, compactItemClassnames: Y } = da(N, L),
      D = H(),
      [p, b] = fa('rangePicker', k, C),
      M = va(N),
      [y, I, $] = sr(N, M),
      [O] = vr(n, N),
      E = gr(u),
      F = ma((ae) => {
        var ge
        return (ge = d ?? _) !== null && ge !== void 0 ? ge : ae
      }),
      V = o.useContext(ga),
      W = m ?? V,
      z = o.useContext(ha),
      { hasFeedback: U, status: Z, feedbackIcon: te } = z,
      J = o.createElement(
        o.Fragment,
        null,
        w === mr ? o.createElement(fr, null) : o.createElement(dr, null),
        U && te,
      )
    o.useImperativeHandle(a, () => P.current)
    const [q] = pa('Calendar', Ca),
      G = Object.assign(Object.assign({}, q), n.locale),
      [X] = ba(
        'DatePicker',
        (r = n.popupStyle) === null || r === void 0 ? void 0 : r.zIndex,
      )
    return y(
      o.createElement(
        Sa,
        { space: !0 },
        o.createElement(
          nl,
          Object.assign(
            {
              separator: o.createElement(
                'span',
                { 'aria-label': 'to', className: `${N}-separator` },
                o.createElement(Ml, null),
              ),
              disabled: W,
              ref: P,
              popupAlign: Qn(L, c),
              placement: c,
              placeholder: Dl(G, w, h),
              suffixIcon: J,
              prevIcon: o.createElement('span', {
                className: `${N}-prev-icon`,
              }),
              nextIcon: o.createElement('span', {
                className: `${N}-next-icon`,
              }),
              superPrevIcon: o.createElement('span', {
                className: `${N}-super-prev-icon`,
              }),
              superNextIcon: o.createElement('span', {
                className: `${N}-super-next-icon`,
              }),
              transitionName: `${D}-slide-up`,
              picker: w,
            },
            R,
            {
              className: $e(
                { [`${N}-${F}`]: F, [`${N}-${p}`]: b },
                ya(N, xa(Z, g), U),
                I,
                Y,
                s,
                T == null ? void 0 : T.className,
                $,
                M,
                x,
              ),
              style: Object.assign(
                Object.assign({}, T == null ? void 0 : T.style),
                f,
              ),
              locale: G.lang,
              prefixCls: N,
              getPopupContainer: i || A,
              generateConfig: e,
              components: E,
              direction: L,
              classNames: { popup: $e(I, S || v, $, M, x) },
              styles: {
                popup: Object.assign(Object.assign({}, n.popupStyle), {
                  zIndex: X,
                }),
              },
              allowClear: O,
            },
          ),
        ),
      ),
    )
  })
var Yl = function (e, t) {
  var n = {}
  for (var a in e)
    Object.prototype.hasOwnProperty.call(e, a) &&
      t.indexOf(a) < 0 &&
      (n[a] = e[a])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var r = 0, a = Object.getOwnPropertySymbols(e); r < a.length; r++)
      t.indexOf(a[r]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, a[r]) &&
        (n[a[r]] = e[a[r]])
  return n
}
const Al = (e) => {
    const t = (s, f) => {
        const c = f === ia ? 'timePicker' : 'datePicker'
        return o.forwardRef((m, C) => {
          var h
          const {
              prefixCls: S,
              getPopupContainer: v,
              components: g,
              style: x,
              className: k,
              rootClassName: w,
              size: R,
              bordered: P,
              placement: H,
              placeholder: L,
              popupClassName: A,
              dropdownClassName: T,
              disabled: N,
              status: _,
              variant: Y,
              onCalendarChange: D,
            } = m,
            p = Yl(m, [
              'prefixCls',
              'getPopupContainer',
              'components',
              'style',
              'className',
              'rootClassName',
              'size',
              'bordered',
              'placement',
              'placeholder',
              'popupClassName',
              'dropdownClassName',
              'disabled',
              'status',
              'variant',
              'onCalendarChange',
            ]),
            {
              getPrefixCls: b,
              direction: M,
              getPopupContainer: y,
              [c]: I,
            } = o.useContext(sa),
            $ = b('picker', S),
            { compactSize: O, compactItemClassnames: E } = da($, M),
            F = o.useRef(null),
            [V, W] = fa('datePicker', Y, P),
            z = va($),
            [U, Z, te] = sr($, z)
          o.useImperativeHandle(C, () => F.current)
          const J = { showToday: !0 },
            q = s || m.picker,
            G = b(),
            { onSelect: X, multiple: ae } = p,
            ge = X && s === 'time' && !ae,
            re = (_e, Se, oe) => {
              D == null || D(_e, Se, oe), ge && X(_e)
            },
            [ee, de] = vr(m, $),
            be = gr(g),
            Pe = ma((_e) => {
              var Se
              return (Se = R ?? O) !== null && Se !== void 0 ? Se : _e
            }),
            xe = o.useContext(ga),
            we = N ?? xe,
            Ve = o.useContext(ha),
            { hasFeedback: Oe, status: He, feedbackIcon: Ye } = Ve,
            ke = o.createElement(
              o.Fragment,
              null,
              q === 'time'
                ? o.createElement(fr, null)
                : o.createElement(dr, null),
              Oe && Ye,
            ),
            [Ue] = pa('DatePicker', Ca),
            Me = Object.assign(Object.assign({}, Ue), m.locale),
            [Te] = ba(
              'DatePicker',
              (h = m.popupStyle) === null || h === void 0 ? void 0 : h.zIndex,
            )
          return U(
            o.createElement(
              Sa,
              { space: !0 },
              o.createElement(
                ul,
                Object.assign(
                  {
                    ref: F,
                    placeholder: $l(Me, q, L),
                    suffixIcon: ke,
                    dropdownAlign: Qn(M, H),
                    placement: H,
                    prevIcon: o.createElement('span', {
                      className: `${$}-prev-icon`,
                    }),
                    nextIcon: o.createElement('span', {
                      className: `${$}-next-icon`,
                    }),
                    superPrevIcon: o.createElement('span', {
                      className: `${$}-super-prev-icon`,
                    }),
                    superNextIcon: o.createElement('span', {
                      className: `${$}-super-next-icon`,
                    }),
                    transitionName: `${G}-slide-up`,
                    picker: s,
                    onCalendarChange: re,
                  },
                  J,
                  p,
                  {
                    locale: Me.lang,
                    className: $e(
                      { [`${$}-${Pe}`]: Pe, [`${$}-${V}`]: W },
                      ya($, xa(He, _), Oe),
                      Z,
                      E,
                      I == null ? void 0 : I.className,
                      k,
                      te,
                      z,
                      w,
                    ),
                    style: Object.assign(
                      Object.assign({}, I == null ? void 0 : I.style),
                      x,
                    ),
                    prefixCls: $,
                    getPopupContainer: v || y,
                    generateConfig: e,
                    components: be,
                    direction: M,
                    disabled: we,
                    classNames: { popup: $e(Z, te, z, w, A || T) },
                    styles: {
                      popup: Object.assign(Object.assign({}, m.popupStyle), {
                        zIndex: Te,
                      }),
                    },
                    allowClear: ee,
                    removeIcon: de,
                  },
                ),
              ),
            ),
          )
        })
      },
      n = t(),
      a = t(Pl, Il),
      r = t(El, Rl),
      l = t(Nl, Ol),
      i = t(Hl, Tl),
      u = t(mr, ia)
    return {
      DatePicker: n,
      WeekPicker: a,
      MonthPicker: r,
      YearPicker: l,
      TimePicker: u,
      QuarterPicker: i,
    }
  },
  hr = (e) => {
    const {
        DatePicker: t,
        WeekPicker: n,
        MonthPicker: a,
        YearPicker: r,
        TimePicker: l,
        QuarterPicker: i,
      } = Al(e),
      u = Vl(e),
      s = t
    return (
      (s.WeekPicker = n),
      (s.MonthPicker = a),
      (s.YearPicker = r),
      (s.RangePicker = u),
      (s.TimePicker = l),
      (s.QuarterPicker = i),
      s
    )
  },
  gt = hr(fo)
function pr(e) {
  const t = Qn(e.direction, e.placement)
  return (
    (t.overflow.adjustY = !1),
    (t.overflow.adjustX = !1),
    Object.assign(Object.assign({}, e), { dropdownAlign: t })
  )
}
const Ll = ka(gt, 'picker', null, pr)
gt._InternalPanelDoNotUseOrYouWillBeFired = Ll
const jl = ka(gt.RangePicker, 'picker', null, pr)
gt._InternalRangePanelDoNotUseOrYouWillBeFired = jl
gt.generatePicker = hr
function Wl({
  handleSearch: e,
  setDateRange: t,
  dateRange: n,
  setDeliveryNo: a,
  setStockIn: r,
}) {
  wa(), Br()
  const [l, i] = o.useState(''),
    [u, s] = o.useState(''),
    [f, c] = o.useState(null),
    [d, m] = o.useState(null),
    C = (g, x) => {
      c(g), t([x, d])
    },
    h = (g, x) => {
      m(g), t([f, x])
    },
    S = (g) => {
      i(g.target.value), a(g.target.value)
    },
    v = (g) => {
      s(g), r(g)
    }
  return pe.jsx('div', {
    className: 'mt-1',
    children: pe.jsxs(Gr, {
      title: 'Query Condition',
      bordered: !1,
      className: 'mb-2',
      style: { width: '100%' },
      size: 'small',
      children: [
        pe.jsxs('div', {
          className: 'flex gap-4 justify-between',
          children: [
            pe.jsxs(Ut, {
              direction: 'vertical',
              size: 12,
              style: { width: '100%' },
              children: [
                pe.jsx(Et.Text, { children: 'Date 1' }),
                pe.jsx(gt, { value: f, onChange: C, style: { width: '100%' } }),
              ],
            }),
            pe.jsxs(Ut, {
              direction: 'vertical',
              size: 12,
              style: { width: '100%' },
              children: [
                pe.jsx(Et.Text, { children: 'Date 2' }),
                pe.jsx(gt, { value: d, onChange: h, style: { width: '100%' } }),
              ],
            }),
            pe.jsxs(Ut, {
              direction: 'vertical',
              size: 12,
              style: { width: '100%' },
              children: [
                pe.jsx(Et.Text, { children: 'Delivery No' }),
                pe.jsx(Xr, {
                  value: l,
                  onChange: S,
                  placeholder: 'Enter Delivery No',
                }),
              ],
            }),
            pe.jsxs(Ut, {
              direction: 'vertical',
              size: 12,
              style: { width: '100%' },
              children: [
                pe.jsx(Et.Text, { children: 'Stock In' }),
                pe.jsxs(qt, {
                  value: u,
                  onChange: v,
                  placeholder: 'Select Stock',
                  style: { width: '100%' },
                  children: [
                    pe.jsx(qt.Option, { value: 'stock1', children: 'Stock 1' }),
                    pe.jsx(qt.Option, { value: 'stock2', children: 'Stock 2' }),
                    pe.jsx(qt.Option, { value: 'stock3', children: 'Stock 3' }),
                  ],
                }),
              ],
            }),
          ],
        }),
        pe.jsxs('div', {
          className: 'flex gap-4 justify-end mt-4',
          children: [
            pe.jsx(Yn, {
              type: 'primary',
              icon: pe.jsx(ta, {}),
              size: 'middle',
              children: 'Search',
            }),
            pe.jsx(Yn, {
              type: 'default',
              icon: pe.jsx(ta, {}),
              size: 'middle',
              children: 'Stock In',
            }),
          ],
        }),
      ],
    }),
  })
}
const { Title: Bl, Text: zl } = Et,
  { Header: Ul, Content: ql, Footer: Kl } = Ma
function Ql({ permissions: e, isMobile: t }) {
  const { t: n } = wa()
  return pe.jsxs(Ma, {
    className: 'h-screen  bg-slate-50',
    children: [
      pe.jsx(zr, {
        children: pe.jsxs('title', {
          children: ['ITM - ', n('Delivery List')],
        }),
      }),
      pe.jsxs('div', {
        className: 'h-[calc(100vh-100px)] overflow-auto',
        children: [
          pe.jsxs(Ul, {
            className: ' bg-slate-50  px-4 h-auto',
            children: [
              pe.jsx(Bl, {
                level: 5,
                className: 'mt-2 uppercase',
                children: n('Delivery List'),
              }),
              pe.jsx(Wl, {}),
            ],
          }),
          pe.jsx(ql, {
            className:
              'flex flex-col  h-auto justify-center items-center bg-slate-50 px-4',
          }),
          pe.jsx(Kl, {
            className: 'text-center h-auto bg-slate-50',
            children: pe.jsx(zl, {
              className: 'text-base',
              children: 'ITM SEMICONDUCTOR CO.,LTD  ©2024',
            }),
          }),
        ],
      }),
    ],
  })
}
export { Ql as default }
