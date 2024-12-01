import {
  r,
  q as M,
  t as Ft,
  y as it,
  p as J,
  A as Ut,
  v as Ge,
  at as Yt,
  au as qt,
  m as U,
  l as Y,
  av as Qt,
  _ as de,
  aw as ae,
  w as Zt,
  o as ot,
  G as Oe,
  ax as Jt,
  K as Ie,
  ay as ea,
  az as ta,
  x as lt,
  aA as aa,
  aB as na,
  a9 as ct,
  Z as ra,
  P as ia,
  Q as p,
  a1 as yt,
  a8 as oa,
  aC as St,
  ab as la,
  ae as ca,
  aD as sa,
  aE as da,
  af as ua,
  aF as va,
  u as xt,
  j as u,
  H as _t,
  R as He,
  C as he,
  aG as fa,
  b as st,
  B as dt,
  T as Ct,
  s as We,
  a as ma,
  i as ba,
} from './index-C0Ym1P--.js'
import './dayjs.min-BjUcqBoK.js'
import './lodash-CkJfpJgw.js'
import { F as ha } from './Table-CEIi7oGT.js'
import { M as ga } from './index-KRi6J7c_.js'
import './index-BMponDaS.js'
const Ne = r.createContext(null)
var pa = function (t) {
    var a = t.activeTabOffset,
      n = t.horizontal,
      i = t.rtl,
      l = t.indicator,
      c = l === void 0 ? {} : l,
      o = c.size,
      s = c.align,
      d = s === void 0 ? 'center' : s,
      f = r.useState(),
      m = M(f, 2),
      $ = m[0],
      T = m[1],
      j = r.useRef(),
      R = Ft.useCallback(
        function (b) {
          return typeof o == 'function' ? o(b) : typeof o == 'number' ? o : b
        },
        [o],
      )
    function L() {
      it.cancel(j.current)
    }
    return (
      r.useEffect(
        function () {
          var b = {}
          if (a)
            if (n) {
              b.width = R(a.width)
              var v = i ? 'right' : 'left'
              d === 'start' && (b[v] = a[v]),
                d === 'center' &&
                  ((b[v] = a[v] + a.width / 2),
                  (b.transform = i ? 'translateX(50%)' : 'translateX(-50%)')),
                d === 'end' &&
                  ((b[v] = a[v] + a.width), (b.transform = 'translateX(-100%)'))
            } else
              (b.height = R(a.height)),
                d === 'start' && (b.top = a.top),
                d === 'center' &&
                  ((b.top = a.top + a.height / 2),
                  (b.transform = 'translateY(-50%)')),
                d === 'end' &&
                  ((b.top = a.top + a.height),
                  (b.transform = 'translateY(-100%)'))
          return (
            L(),
            (j.current = it(function () {
              T(b)
            })),
            L
          )
        },
        [a, n, i, d, R],
      ),
      { style: $ }
    )
  },
  ut = { width: 0, height: 0, left: 0, top: 0 }
function $a(e, t, a) {
  return r.useMemo(
    function () {
      for (
        var n,
          i = new Map(),
          l = t.get((n = e[0]) === null || n === void 0 ? void 0 : n.key) || ut,
          c = l.left + l.width,
          o = 0;
        o < e.length;
        o += 1
      ) {
        var s = e[o].key,
          d = t.get(s)
        if (!d) {
          var f
          d =
            t.get((f = e[o - 1]) === null || f === void 0 ? void 0 : f.key) ||
            ut
        }
        var m = i.get(s) || J({}, d)
        ;(m.right = c - m.left - m.width), i.set(s, m)
      }
      return i
    },
    [
      e
        .map(function (n) {
          return n.key
        })
        .join('_'),
      t,
      a,
    ],
  )
}
function vt(e, t) {
  var a = r.useRef(e),
    n = r.useState({}),
    i = M(n, 2),
    l = i[1]
  function c(o) {
    var s = typeof o == 'function' ? o(a.current) : o
    s !== a.current && t(s, a.current), (a.current = s), l({})
  }
  return [a.current, c]
}
var ya = 0.1,
  ft = 0.01,
  Ee = 20,
  mt = Math.pow(0.995, Ee)
function Sa(e, t) {
  var a = r.useState(),
    n = M(a, 2),
    i = n[0],
    l = n[1],
    c = r.useState(0),
    o = M(c, 2),
    s = o[0],
    d = o[1],
    f = r.useState(0),
    m = M(f, 2),
    $ = m[0],
    T = m[1],
    j = r.useState(),
    R = M(j, 2),
    L = R[0],
    b = R[1],
    v = r.useRef()
  function E(x) {
    var I = x.touches[0],
      y = I.screenX,
      C = I.screenY
    l({ x: y, y: C }), window.clearInterval(v.current)
  }
  function z(x) {
    if (i) {
      var I = x.touches[0],
        y = I.screenX,
        C = I.screenY
      l({ x: y, y: C })
      var h = y - i.x,
        w = C - i.y
      t(h, w)
      var q = Date.now()
      d(q), T(q - s), b({ x: h, y: w })
    }
  }
  function D() {
    if (i && (l(null), b(null), L)) {
      var x = L.x / $,
        I = L.y / $,
        y = Math.abs(x),
        C = Math.abs(I)
      if (Math.max(y, C) < ya) return
      var h = x,
        w = I
      v.current = window.setInterval(function () {
        if (Math.abs(h) < ft && Math.abs(w) < ft) {
          window.clearInterval(v.current)
          return
        }
        ;(h *= mt), (w *= mt), t(h * Ee, w * Ee)
      }, Ee)
    }
  }
  var H = r.useRef()
  function B(x) {
    var I = x.deltaX,
      y = x.deltaY,
      C = 0,
      h = Math.abs(I),
      w = Math.abs(y)
    h === w
      ? (C = H.current === 'x' ? I : y)
      : h > w
        ? ((C = I), (H.current = 'x'))
        : ((C = y), (H.current = 'y')),
      t(-C, -C) && x.preventDefault()
  }
  var _ = r.useRef(null)
  ;(_.current = { onTouchStart: E, onTouchMove: z, onTouchEnd: D, onWheel: B }),
    r.useEffect(function () {
      function x(h) {
        _.current.onTouchStart(h)
      }
      function I(h) {
        _.current.onTouchMove(h)
      }
      function y(h) {
        _.current.onTouchEnd(h)
      }
      function C(h) {
        _.current.onWheel(h)
      }
      return (
        document.addEventListener('touchmove', I, { passive: !1 }),
        document.addEventListener('touchend', y, { passive: !0 }),
        e.current.addEventListener('touchstart', x, { passive: !0 }),
        e.current.addEventListener('wheel', C, { passive: !1 }),
        function () {
          document.removeEventListener('touchmove', I),
            document.removeEventListener('touchend', y)
        }
      )
    }, [])
}
function wt(e) {
  var t = r.useState(0),
    a = M(t, 2),
    n = a[0],
    i = a[1],
    l = r.useRef(0),
    c = r.useRef()
  return (
    (c.current = e),
    Ut(
      function () {
        var o
        ;(o = c.current) === null || o === void 0 || o.call(c)
      },
      [n],
    ),
    function () {
      l.current === n && ((l.current += 1), i(l.current))
    }
  )
}
function xa(e) {
  var t = r.useRef([]),
    a = r.useState({}),
    n = M(a, 2),
    i = n[1],
    l = r.useRef(typeof e == 'function' ? e() : e),
    c = wt(function () {
      var s = l.current
      t.current.forEach(function (d) {
        s = d(s)
      }),
        (t.current = []),
        (l.current = s),
        i({})
    })
  function o(s) {
    t.current.push(s), c()
  }
  return [l.current, o]
}
var bt = { width: 0, height: 0, left: 0, top: 0, right: 0 }
function _a(e, t, a, n, i, l, c) {
  var o = c.tabs,
    s = c.tabPosition,
    d = c.rtl,
    f,
    m,
    $
  return (
    ['top', 'bottom'].includes(s)
      ? ((f = 'width'), (m = d ? 'right' : 'left'), ($ = Math.abs(a)))
      : ((f = 'height'), (m = 'top'), ($ = -a)),
    r.useMemo(
      function () {
        if (!o.length) return [0, 0]
        for (var T = o.length, j = T, R = 0; R < T; R += 1) {
          var L = e.get(o[R].key) || bt
          if (Math.floor(L[m] + L[f]) > Math.floor($ + t)) {
            j = R - 1
            break
          }
        }
        for (var b = 0, v = T - 1; v >= 0; v -= 1) {
          var E = e.get(o[v].key) || bt
          if (E[m] < $) {
            b = v + 1
            break
          }
        }
        return b >= j ? [0, 0] : [b, j]
      },
      [
        e,
        t,
        n,
        i,
        l,
        $,
        s,
        o
          .map(function (T) {
            return T.key
          })
          .join('_'),
        d,
      ],
    )
  )
}
function ht(e) {
  var t
  return (
    e instanceof Map
      ? ((t = {}),
        e.forEach(function (a, n) {
          t[n] = a
        }))
      : (t = e),
    JSON.stringify(t)
  )
}
var Ca = 'TABS_DQ'
function Tt(e) {
  return String(e).replace(/"/g, Ca)
}
function Pt(e, t, a, n) {
  return !(!a || n || e === !1 || (e === void 0 && (t === !1 || t === null)))
}
var Rt = r.forwardRef(function (e, t) {
    var a = e.prefixCls,
      n = e.editable,
      i = e.locale,
      l = e.style
    return !n || n.showAdd === !1
      ? null
      : r.createElement(
          'button',
          {
            ref: t,
            type: 'button',
            className: ''.concat(a, '-nav-add'),
            style: l,
            'aria-label': (i == null ? void 0 : i.addAriaLabel) || 'Add tab',
            onClick: function (o) {
              n.onEdit('add', { event: o })
            },
          },
          n.addIcon || '+',
        )
  }),
  gt = r.forwardRef(function (e, t) {
    var a = e.position,
      n = e.prefixCls,
      i = e.extra
    if (!i) return null
    var l,
      c = {}
    return (
      Ge(i) === 'object' && !r.isValidElement(i) ? (c = i) : (c.right = i),
      a === 'right' && (l = c.right),
      a === 'left' && (l = c.left),
      l
        ? r.createElement(
            'div',
            { className: ''.concat(n, '-extra-content'), ref: t },
            l,
          )
        : null
    )
  }),
  wa = r.forwardRef(function (e, t) {
    var a = e.prefixCls,
      n = e.id,
      i = e.tabs,
      l = e.locale,
      c = e.mobile,
      o = e.more,
      s = o === void 0 ? {} : o,
      d = e.style,
      f = e.className,
      m = e.editable,
      $ = e.tabBarGutter,
      T = e.rtl,
      j = e.removeAriaLabel,
      R = e.onTabClick,
      L = e.getPopupContainer,
      b = e.popupClassName,
      v = r.useState(!1),
      E = M(v, 2),
      z = E[0],
      D = E[1],
      H = r.useState(null),
      B = M(H, 2),
      _ = B[0],
      x = B[1],
      I = s.icon,
      y = I === void 0 ? 'More' : I,
      C = ''.concat(n, '-more-popup'),
      h = ''.concat(a, '-dropdown'),
      w = _ !== null ? ''.concat(C, '-').concat(_) : null,
      q = l == null ? void 0 : l.dropdownAriaLabel
    function ie(P, A) {
      P.preventDefault(),
        P.stopPropagation(),
        m.onEdit('remove', { key: A, event: P })
    }
    var g = r.createElement(
      Yt,
      {
        onClick: function (A) {
          var G = A.key,
            X = A.domEvent
          R(G, X), D(!1)
        },
        prefixCls: ''.concat(h, '-menu'),
        id: C,
        tabIndex: -1,
        role: 'listbox',
        'aria-activedescendant': w,
        selectedKeys: [_],
        'aria-label': q !== void 0 ? q : 'expanded dropdown',
      },
      i.map(function (P) {
        var A = P.closable,
          G = P.disabled,
          X = P.closeIcon,
          F = P.key,
          ee = P.label,
          Z = Pt(A, X, m, G)
        return r.createElement(
          qt,
          {
            key: F,
            id: ''.concat(C, '-').concat(F),
            role: 'option',
            'aria-controls': n && ''.concat(n, '-panel-').concat(F),
            disabled: G,
          },
          r.createElement('span', null, ee),
          Z &&
            r.createElement(
              'button',
              {
                type: 'button',
                'aria-label': j || 'remove',
                tabIndex: 0,
                className: ''.concat(h, '-menu-item-remove'),
                onClick: function (le) {
                  le.stopPropagation(), ie(le, F)
                },
              },
              X || m.removeIcon || '×',
            ),
        )
      }),
    )
    function K(P) {
      for (
        var A = i.filter(function (Z) {
            return !Z.disabled
          }),
          G =
            A.findIndex(function (Z) {
              return Z.key === _
            }) || 0,
          X = A.length,
          F = 0;
        F < X;
        F += 1
      ) {
        G = (G + P + X) % X
        var ee = A[G]
        if (!ee.disabled) {
          x(ee.key)
          return
        }
      }
    }
    function ne(P) {
      var A = P.which
      if (!z) {
        ;[ae.DOWN, ae.SPACE, ae.ENTER].includes(A) &&
          (D(!0), P.preventDefault())
        return
      }
      switch (A) {
        case ae.UP:
          K(-1), P.preventDefault()
          break
        case ae.DOWN:
          K(1), P.preventDefault()
          break
        case ae.ESC:
          D(!1)
          break
        case ae.SPACE:
        case ae.ENTER:
          _ !== null && R(_, P)
          break
      }
    }
    r.useEffect(
      function () {
        var P = document.getElementById(w)
        P && P.scrollIntoView && P.scrollIntoView(!1)
      },
      [_],
    ),
      r.useEffect(
        function () {
          z || x(null)
        },
        [z],
      )
    var W = U({}, T ? 'marginRight' : 'marginLeft', $)
    i.length || ((W.visibility = 'hidden'), (W.order = 1))
    var V = Y(U({}, ''.concat(h, '-rtl'), T)),
      oe = c
        ? null
        : r.createElement(
            Qt,
            de(
              {
                prefixCls: h,
                overlay: g,
                visible: i.length ? z : !1,
                onVisibleChange: D,
                overlayClassName: Y(V, b),
                mouseEnterDelay: 0.1,
                mouseLeaveDelay: 0.1,
                getPopupContainer: L,
              },
              s,
            ),
            r.createElement(
              'button',
              {
                type: 'button',
                className: ''.concat(a, '-nav-more'),
                style: W,
                tabIndex: -1,
                'aria-hidden': 'true',
                'aria-haspopup': 'listbox',
                'aria-controls': C,
                id: ''.concat(n, '-more'),
                'aria-expanded': z,
                onKeyDown: ne,
              },
              y,
            ),
          )
    return r.createElement(
      'div',
      { className: Y(''.concat(a, '-nav-operations'), f), style: d, ref: t },
      oe,
      r.createElement(Rt, { prefixCls: a, locale: l, editable: m }),
    )
  })
const Ta = r.memo(wa, function (e, t) {
  return t.tabMoving
})
var Pa = function (t) {
    var a = t.prefixCls,
      n = t.id,
      i = t.active,
      l = t.tab,
      c = l.key,
      o = l.label,
      s = l.disabled,
      d = l.closeIcon,
      f = l.icon,
      m = t.closable,
      $ = t.renderWrapper,
      T = t.removeAriaLabel,
      j = t.editable,
      R = t.onClick,
      L = t.onFocus,
      b = t.style,
      v = ''.concat(a, '-tab'),
      E = Pt(m, d, j, s)
    function z(_) {
      s || R(_)
    }
    function D(_) {
      _.preventDefault(),
        _.stopPropagation(),
        j.onEdit('remove', { key: c, event: _ })
    }
    var H = r.useMemo(
        function () {
          return f && typeof o == 'string'
            ? r.createElement('span', null, o)
            : o
        },
        [o, f],
      ),
      B = r.createElement(
        'div',
        {
          key: c,
          'data-node-key': Tt(c),
          className: Y(
            v,
            U(
              U(
                U({}, ''.concat(v, '-with-remove'), E),
                ''.concat(v, '-active'),
                i,
              ),
              ''.concat(v, '-disabled'),
              s,
            ),
          ),
          style: b,
          onClick: z,
        },
        r.createElement(
          'div',
          {
            role: 'tab',
            'aria-selected': i,
            id: n && ''.concat(n, '-tab-').concat(c),
            className: ''.concat(v, '-btn'),
            'aria-controls': n && ''.concat(n, '-panel-').concat(c),
            'aria-disabled': s,
            tabIndex: s ? null : 0,
            onClick: function (x) {
              x.stopPropagation(), z(x)
            },
            onKeyDown: function (x) {
              ;[ae.SPACE, ae.ENTER].includes(x.which) &&
                (x.preventDefault(), z(x))
            },
            onFocus: L,
          },
          f && r.createElement('span', { className: ''.concat(v, '-icon') }, f),
          o && H,
        ),
        E &&
          r.createElement(
            'button',
            {
              type: 'button',
              'aria-label': T || 'remove',
              tabIndex: 0,
              className: ''.concat(v, '-remove'),
              onClick: function (x) {
                x.stopPropagation(), D(x)
              },
            },
            d || j.removeIcon || '×',
          ),
      )
    return $ ? $(B) : B
  },
  Ra = function (t, a) {
    var n = t.offsetWidth,
      i = t.offsetHeight,
      l = t.offsetTop,
      c = t.offsetLeft,
      o = t.getBoundingClientRect(),
      s = o.width,
      d = o.height,
      f = o.left,
      m = o.top
    return Math.abs(s - n) < 1 ? [s, d, f - a.left, m - a.top] : [n, i, c, l]
  },
  ge = function (t) {
    var a = t.current || {},
      n = a.offsetWidth,
      i = n === void 0 ? 0 : n,
      l = a.offsetHeight,
      c = l === void 0 ? 0 : l
    if (t.current) {
      var o = t.current.getBoundingClientRect(),
        s = o.width,
        d = o.height
      if (Math.abs(s - i) < 1) return [s, d]
    }
    return [i, c]
  },
  Re = function (t, a) {
    return t[a ? 0 : 1]
  },
  pt = r.forwardRef(function (e, t) {
    var a = e.className,
      n = e.style,
      i = e.id,
      l = e.animated,
      c = e.activeKey,
      o = e.rtl,
      s = e.extra,
      d = e.editable,
      f = e.locale,
      m = e.tabPosition,
      $ = e.tabBarGutter,
      T = e.children,
      j = e.onTabClick,
      R = e.onTabScroll,
      L = e.indicator,
      b = r.useContext(Ne),
      v = b.prefixCls,
      E = b.tabs,
      z = r.useRef(null),
      D = r.useRef(null),
      H = r.useRef(null),
      B = r.useRef(null),
      _ = r.useRef(null),
      x = r.useRef(null),
      I = r.useRef(null),
      y = m === 'top' || m === 'bottom',
      C = vt(0, function (k, S) {
        y && R && R({ direction: k > S ? 'left' : 'right' })
      }),
      h = M(C, 2),
      w = h[0],
      q = h[1],
      ie = vt(0, function (k, S) {
        !y && R && R({ direction: k > S ? 'top' : 'bottom' })
      }),
      g = M(ie, 2),
      K = g[0],
      ne = g[1],
      W = r.useState([0, 0]),
      V = M(W, 2),
      oe = V[0],
      P = V[1],
      A = r.useState([0, 0]),
      G = M(A, 2),
      X = G[0],
      F = G[1],
      ee = r.useState([0, 0]),
      Z = M(ee, 2),
      me = Z[0],
      le = Z[1],
      ue = r.useState([0, 0]),
      be = M(ue, 2),
      N = be[0],
      re = be[1],
      $e = xa(new Map()),
      Ke = M($e, 2),
      Nt = Ke[0],
      Mt = Ke[1],
      xe = $a(E, Nt, X[0]),
      Me = Re(oe, y),
      ye = Re(X, y),
      Le = Re(me, y),
      Xe = Re(N, y),
      Ve = Math.floor(Me) < Math.floor(ye + Le),
      te = Ve ? Me - Xe : Me - Le,
      Lt = ''.concat(v, '-nav-operations-hidden'),
      ce = 0,
      ve = 0
    y && o
      ? ((ce = 0), (ve = Math.max(0, ye - te)))
      : ((ce = Math.min(0, te - ye)), (ve = 0))
    function ze(k) {
      return k < ce ? ce : k > ve ? ve : k
    }
    var je = r.useRef(null),
      zt = r.useState(),
      Fe = M(zt, 2),
      _e = Fe[0],
      Ue = Fe[1]
    function ke() {
      Ue(Date.now())
    }
    function Ae() {
      je.current && clearTimeout(je.current)
    }
    Sa(B, function (k, S) {
      function O(Q, fe) {
        Q(function (se) {
          var Te = ze(se + fe)
          return Te
        })
      }
      return Ve ? (y ? O(q, k) : O(ne, S), Ae(), ke(), !0) : !1
    }),
      r.useEffect(
        function () {
          return (
            Ae(),
            _e &&
              (je.current = setTimeout(function () {
                Ue(0)
              }, 100)),
            Ae
          )
        },
        [_e],
      )
    var jt = _a(xe, te, y ? w : K, ye, Le, Xe, J(J({}, e), {}, { tabs: E })),
      Ye = M(jt, 2),
      kt = Ye[0],
      At = Ye[1],
      qe = Zt(function () {
        var k =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : c,
          S = xe.get(k) || { width: 0, height: 0, left: 0, right: 0, top: 0 }
        if (y) {
          var O = w
          o
            ? S.right < w
              ? (O = S.right)
              : S.right + S.width > w + te && (O = S.right + S.width - te)
            : S.left < -w
              ? (O = -S.left)
              : S.left + S.width > -w + te && (O = -(S.left + S.width - te)),
            ne(0),
            q(ze(O))
        } else {
          var Q = K
          S.top < -K
            ? (Q = -S.top)
            : S.top + S.height > -K + te && (Q = -(S.top + S.height - te)),
            q(0),
            ne(ze(Q))
        }
      }),
      Ce = {}
    m === 'top' || m === 'bottom'
      ? (Ce[o ? 'marginRight' : 'marginLeft'] = $)
      : (Ce.marginTop = $)
    var Qe = E.map(function (k, S) {
        var O = k.key
        return r.createElement(Pa, {
          id: i,
          prefixCls: v,
          key: O,
          tab: k,
          style: S === 0 ? void 0 : Ce,
          closable: k.closable,
          editable: d,
          active: O === c,
          renderWrapper: T,
          removeAriaLabel: f == null ? void 0 : f.removeAriaLabel,
          onClick: function (fe) {
            j(O, fe)
          },
          onFocus: function () {
            qe(O),
              ke(),
              B.current &&
                (o || (B.current.scrollLeft = 0), (B.current.scrollTop = 0))
          },
        })
      }),
      Ze = function () {
        return Mt(function () {
          var S,
            O = new Map(),
            Q =
              (S = _.current) === null || S === void 0
                ? void 0
                : S.getBoundingClientRect()
          return (
            E.forEach(function (fe) {
              var se,
                Te = fe.key,
                rt =
                  (se = _.current) === null || se === void 0
                    ? void 0
                    : se.querySelector('[data-node-key="'.concat(Tt(Te), '"]'))
              if (rt) {
                var Wt = Ra(rt, Q),
                  Pe = M(Wt, 4),
                  Gt = Pe[0],
                  Kt = Pe[1],
                  Xt = Pe[2],
                  Vt = Pe[3]
                O.set(Te, { width: Gt, height: Kt, left: Xt, top: Vt })
              }
            }),
            O
          )
        })
      }
    r.useEffect(
      function () {
        Ze()
      },
      [
        E.map(function (k) {
          return k.key
        }).join('_'),
      ],
    )
    var we = wt(function () {
        var k = ge(z),
          S = ge(D),
          O = ge(H)
        P([k[0] - S[0] - O[0], k[1] - S[1] - O[1]])
        var Q = ge(I)
        le(Q)
        var fe = ge(x)
        re(fe)
        var se = ge(_)
        F([se[0] - Q[0], se[1] - Q[1]]), Ze()
      }),
      Dt = E.slice(0, kt),
      Bt = E.slice(At + 1),
      Je = [].concat(ot(Dt), ot(Bt)),
      et = xe.get(c),
      Ot = pa({ activeTabOffset: et, horizontal: y, indicator: L, rtl: o }),
      Ht = Ot.style
    r.useEffect(
      function () {
        qe()
      },
      [c, ce, ve, ht(et), ht(xe), y],
    ),
      r.useEffect(
        function () {
          we()
        },
        [o],
      )
    var tt = !!Je.length,
      Se = ''.concat(v, '-nav-wrap'),
      De,
      Be,
      at,
      nt
    return (
      y
        ? o
          ? ((Be = w > 0), (De = w !== ve))
          : ((De = w < 0), (Be = w !== ce))
        : ((at = K < 0), (nt = K !== ce)),
      r.createElement(
        Oe,
        { onResize: we },
        r.createElement(
          'div',
          {
            ref: Jt(t, z),
            role: 'tablist',
            className: Y(''.concat(v, '-nav'), a),
            style: n,
            onKeyDown: function () {
              ke()
            },
          },
          r.createElement(gt, {
            ref: D,
            position: 'left',
            extra: s,
            prefixCls: v,
          }),
          r.createElement(
            Oe,
            { onResize: we },
            r.createElement(
              'div',
              {
                className: Y(
                  Se,
                  U(
                    U(
                      U(
                        U({}, ''.concat(Se, '-ping-left'), De),
                        ''.concat(Se, '-ping-right'),
                        Be,
                      ),
                      ''.concat(Se, '-ping-top'),
                      at,
                    ),
                    ''.concat(Se, '-ping-bottom'),
                    nt,
                  ),
                ),
                ref: B,
              },
              r.createElement(
                Oe,
                { onResize: we },
                r.createElement(
                  'div',
                  {
                    ref: _,
                    className: ''.concat(v, '-nav-list'),
                    style: {
                      transform: 'translate('
                        .concat(w, 'px, ')
                        .concat(K, 'px)'),
                      transition: _e ? 'none' : void 0,
                    },
                  },
                  Qe,
                  r.createElement(Rt, {
                    ref: I,
                    prefixCls: v,
                    locale: f,
                    editable: d,
                    style: J(
                      J({}, Qe.length === 0 ? void 0 : Ce),
                      {},
                      { visibility: tt ? 'hidden' : null },
                    ),
                  }),
                  r.createElement('div', {
                    className: Y(
                      ''.concat(v, '-ink-bar'),
                      U({}, ''.concat(v, '-ink-bar-animated'), l.inkBar),
                    ),
                    style: Ht,
                  }),
                ),
              ),
            ),
          ),
          r.createElement(
            Ta,
            de({}, e, {
              removeAriaLabel: f == null ? void 0 : f.removeAriaLabel,
              ref: x,
              prefixCls: v,
              tabs: Je,
              className: !tt && Lt,
              tabMoving: !!_e,
            }),
          ),
          r.createElement(gt, {
            ref: H,
            position: 'right',
            extra: s,
            prefixCls: v,
          }),
        ),
      )
    )
  }),
  Et = r.forwardRef(function (e, t) {
    var a = e.prefixCls,
      n = e.className,
      i = e.style,
      l = e.id,
      c = e.active,
      o = e.tabKey,
      s = e.children
    return r.createElement(
      'div',
      {
        id: l && ''.concat(l, '-panel-').concat(o),
        role: 'tabpanel',
        tabIndex: c ? 0 : -1,
        'aria-labelledby': l && ''.concat(l, '-tab-').concat(o),
        'aria-hidden': !c,
        style: i,
        className: Y(a, c && ''.concat(a, '-active'), n),
        ref: t,
      },
      s,
    )
  }),
  Ea = ['renderTabBar'],
  Ia = ['label', 'key'],
  Na = function (t) {
    var a = t.renderTabBar,
      n = Ie(t, Ea),
      i = r.useContext(Ne),
      l = i.tabs
    if (a) {
      var c = J(
        J({}, n),
        {},
        {
          panes: l.map(function (o) {
            var s = o.label,
              d = o.key,
              f = Ie(o, Ia)
            return r.createElement(Et, de({ tab: s, key: d, tabKey: d }, f))
          }),
        },
      )
      return a(c, pt)
    }
    return r.createElement(pt, n)
  },
  Ma = ['key', 'forceRender', 'style', 'className', 'destroyInactiveTabPane'],
  La = function (t) {
    var a = t.id,
      n = t.activeKey,
      i = t.animated,
      l = t.tabPosition,
      c = t.destroyInactiveTabPane,
      o = r.useContext(Ne),
      s = o.prefixCls,
      d = o.tabs,
      f = i.tabPane,
      m = ''.concat(s, '-tabpane')
    return r.createElement(
      'div',
      { className: Y(''.concat(s, '-content-holder')) },
      r.createElement(
        'div',
        {
          className: Y(
            ''.concat(s, '-content'),
            ''.concat(s, '-content-').concat(l),
            U({}, ''.concat(s, '-content-animated'), f),
          ),
        },
        d.map(function ($) {
          var T = $.key,
            j = $.forceRender,
            R = $.style,
            L = $.className,
            b = $.destroyInactiveTabPane,
            v = Ie($, Ma),
            E = T === n
          return r.createElement(
            ea,
            de(
              {
                key: T,
                visible: E,
                forceRender: j,
                removeOnLeave: !!(c || b),
                leavedClassName: ''.concat(m, '-hidden'),
              },
              i.tabPaneMotion,
            ),
            function (z, D) {
              var H = z.style,
                B = z.className
              return r.createElement(
                Et,
                de({}, v, {
                  prefixCls: m,
                  id: a,
                  tabKey: T,
                  animated: f,
                  active: E,
                  style: J(J({}, R), H),
                  className: Y(L, B),
                  ref: D,
                }),
              )
            },
          )
        }),
      ),
    )
  }
function za() {
  var e =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : { inkBar: !0, tabPane: !1 },
    t
  return (
    e === !1
      ? (t = { inkBar: !1, tabPane: !1 })
      : e === !0
        ? (t = { inkBar: !0, tabPane: !1 })
        : (t = J({ inkBar: !0 }, Ge(e) === 'object' ? e : {})),
    t.tabPaneMotion && t.tabPane === void 0 && (t.tabPane = !0),
    !t.tabPaneMotion && t.tabPane && (t.tabPane = !1),
    t
  )
}
var ja = [
    'id',
    'prefixCls',
    'className',
    'items',
    'direction',
    'activeKey',
    'defaultActiveKey',
    'editable',
    'animated',
    'tabPosition',
    'tabBarGutter',
    'tabBarStyle',
    'tabBarExtraContent',
    'locale',
    'more',
    'destroyInactiveTabPane',
    'renderTabBar',
    'onChange',
    'onTabClick',
    'onTabScroll',
    'getPopupContainer',
    'popupClassName',
    'indicator',
  ],
  $t = 0,
  ka = r.forwardRef(function (e, t) {
    var a = e.id,
      n = e.prefixCls,
      i = n === void 0 ? 'rc-tabs' : n,
      l = e.className,
      c = e.items,
      o = e.direction,
      s = e.activeKey,
      d = e.defaultActiveKey,
      f = e.editable,
      m = e.animated,
      $ = e.tabPosition,
      T = $ === void 0 ? 'top' : $,
      j = e.tabBarGutter,
      R = e.tabBarStyle,
      L = e.tabBarExtraContent,
      b = e.locale,
      v = e.more,
      E = e.destroyInactiveTabPane,
      z = e.renderTabBar,
      D = e.onChange,
      H = e.onTabClick,
      B = e.onTabScroll,
      _ = e.getPopupContainer,
      x = e.popupClassName,
      I = e.indicator,
      y = Ie(e, ja),
      C = r.useMemo(
        function () {
          return (c || []).filter(function (N) {
            return N && Ge(N) === 'object' && 'key' in N
          })
        },
        [c],
      ),
      h = o === 'rtl',
      w = za(m),
      q = r.useState(!1),
      ie = M(q, 2),
      g = ie[0],
      K = ie[1]
    r.useEffect(function () {
      K(ta())
    }, [])
    var ne = lt(
        function () {
          var N
          return (N = C[0]) === null || N === void 0 ? void 0 : N.key
        },
        { value: s, defaultValue: d },
      ),
      W = M(ne, 2),
      V = W[0],
      oe = W[1],
      P = r.useState(function () {
        return C.findIndex(function (N) {
          return N.key === V
        })
      }),
      A = M(P, 2),
      G = A[0],
      X = A[1]
    r.useEffect(
      function () {
        var N = C.findIndex(function ($e) {
          return $e.key === V
        })
        if (N === -1) {
          var re
          ;(N = Math.max(0, Math.min(G, C.length - 1))),
            oe((re = C[N]) === null || re === void 0 ? void 0 : re.key)
        }
        X(N)
      },
      [
        C.map(function (N) {
          return N.key
        }).join('_'),
        V,
        G,
      ],
    )
    var F = lt(null, { value: a }),
      ee = M(F, 2),
      Z = ee[0],
      me = ee[1]
    r.useEffect(function () {
      a || (me('rc-tabs-'.concat($t)), ($t += 1))
    }, [])
    function le(N, re) {
      H == null || H(N, re)
      var $e = N !== V
      oe(N), $e && (D == null || D(N))
    }
    var ue = {
        id: Z,
        activeKey: V,
        animated: w,
        tabPosition: T,
        rtl: h,
        mobile: g,
      },
      be = J(
        J({}, ue),
        {},
        {
          editable: f,
          locale: b,
          more: v,
          tabBarGutter: j,
          onTabClick: le,
          onTabScroll: B,
          extra: L,
          style: R,
          panes: null,
          getPopupContainer: _,
          popupClassName: x,
          indicator: I,
        },
      )
    return r.createElement(
      Ne.Provider,
      { value: { tabs: C, prefixCls: i } },
      r.createElement(
        'div',
        de(
          {
            ref: t,
            id: a,
            className: Y(
              i,
              ''.concat(i, '-').concat(T),
              U(
                U(
                  U({}, ''.concat(i, '-mobile'), g),
                  ''.concat(i, '-editable'),
                  f,
                ),
                ''.concat(i, '-rtl'),
                h,
              ),
              l,
            ),
          },
          y,
        ),
        r.createElement(Na, de({}, be, { renderTabBar: z })),
        r.createElement(
          La,
          de({ destroyInactiveTabPane: E }, ue, { animated: w }),
        ),
      ),
    )
  })
const Aa = { motionAppear: !1, motionEnter: !0, motionLeave: !0 }
function Da(e) {
  let t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { inkBar: !0, tabPane: !1 },
    a
  return (
    t === !1
      ? (a = { inkBar: !1, tabPane: !1 })
      : t === !0
        ? (a = { inkBar: !0, tabPane: !0 })
        : (a = Object.assign({ inkBar: !0 }, typeof t == 'object' ? t : {})),
    a.tabPane &&
      (a.tabPaneMotion = Object.assign(Object.assign({}, Aa), {
        motionName: aa(e, 'switch'),
      })),
    a
  )
}
var Ba = function (e, t) {
  var a = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (a[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (a[n[i]] = e[n[i]])
  return a
}
function Oa(e) {
  return e.filter((t) => t)
}
function Ha(e, t) {
  if (e) return e
  const a = na(t).map((n) => {
    if (r.isValidElement(n)) {
      const { key: i, props: l } = n,
        c = l || {},
        { tab: o } = c,
        s = Ba(c, ['tab'])
      return Object.assign(Object.assign({ key: String(i) }, s), { label: o })
    }
    return null
  })
  return Oa(a)
}
const Wa = (e) => {
    const { componentCls: t, motionDurationSlow: a } = e
    return [
      {
        [t]: {
          [`${t}-switch`]: {
            '&-appear, &-enter': {
              transition: 'none',
              '&-start': { opacity: 0 },
              '&-active': { opacity: 1, transition: `opacity ${a}` },
            },
            '&-leave': {
              position: 'absolute',
              transition: 'none',
              inset: 0,
              '&-start': { opacity: 1 },
              '&-active': { opacity: 0, transition: `opacity ${a}` },
            },
          },
        },
      },
      [ct(e, 'slide-up'), ct(e, 'slide-down')],
    ]
  },
  Ga = (e) => {
    const {
      componentCls: t,
      tabsCardPadding: a,
      cardBg: n,
      cardGutter: i,
      colorBorderSecondary: l,
      itemSelectedColor: c,
    } = e
    return {
      [`${t}-card`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-tab`]: {
            margin: 0,
            padding: a,
            background: n,
            border: `${p(e.lineWidth)} ${e.lineType} ${l}`,
            transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
          },
          [`${t}-tab-active`]: { color: c, background: e.colorBgContainer },
          [`${t}-ink-bar`]: { visibility: 'hidden' },
        },
        [`&${t}-top, &${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginLeft: { _skip_check_: !0, value: p(i) },
            },
          },
        },
        [`&${t}-top`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `${p(e.borderRadiusLG)} ${p(e.borderRadiusLG)} 0 0`,
            },
            [`${t}-tab-active`]: { borderBottomColor: e.colorBgContainer },
          },
        },
        [`&${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: `0 0 ${p(e.borderRadiusLG)} ${p(e.borderRadiusLG)}`,
            },
            [`${t}-tab-active`]: { borderTopColor: e.colorBgContainer },
          },
        },
        [`&${t}-left, &${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: { marginTop: p(i) },
          },
        },
        [`&${t}-left`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${p(e.borderRadiusLG)} 0 0 ${p(e.borderRadiusLG)}`,
              },
            },
            [`${t}-tab-active`]: {
              borderRightColor: { _skip_check_: !0, value: e.colorBgContainer },
            },
          },
        },
        [`&${t}-right`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${p(e.borderRadiusLG)} ${p(e.borderRadiusLG)} 0`,
              },
            },
            [`${t}-tab-active`]: {
              borderLeftColor: { _skip_check_: !0, value: e.colorBgContainer },
            },
          },
        },
      },
    }
  },
  Ka = (e) => {
    const {
      componentCls: t,
      itemHoverColor: a,
      dropdownEdgeChildVerticalPadding: n,
    } = e
    return {
      [`${t}-dropdown`]: Object.assign(Object.assign({}, yt(e)), {
        position: 'absolute',
        top: -9999,
        left: { _skip_check_: !0, value: -9999 },
        zIndex: e.zIndexPopup,
        display: 'block',
        '&-hidden': { display: 'none' },
        [`${t}-dropdown-menu`]: {
          maxHeight: e.tabsDropdownHeight,
          margin: 0,
          padding: `${p(n)} 0`,
          overflowX: 'hidden',
          overflowY: 'auto',
          textAlign: { _skip_check_: !0, value: 'left' },
          listStyleType: 'none',
          backgroundColor: e.colorBgContainer,
          backgroundClip: 'padding-box',
          borderRadius: e.borderRadiusLG,
          outline: 'none',
          boxShadow: e.boxShadowSecondary,
          '&-item': Object.assign(Object.assign({}, oa), {
            display: 'flex',
            alignItems: 'center',
            minWidth: e.tabsDropdownWidth,
            margin: 0,
            padding: `${p(e.paddingXXS)} ${p(e.paddingSM)}`,
            color: e.colorText,
            fontWeight: 'normal',
            fontSize: e.fontSize,
            lineHeight: e.lineHeight,
            cursor: 'pointer',
            transition: `all ${e.motionDurationSlow}`,
            '> span': { flex: 1, whiteSpace: 'nowrap' },
            '&-remove': {
              flex: 'none',
              marginLeft: { _skip_check_: !0, value: e.marginSM },
              color: e.colorTextDescription,
              fontSize: e.fontSizeSM,
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              '&:hover': { color: a },
            },
            '&:hover': { background: e.controlItemBgHover },
            '&-disabled': {
              '&, &:hover': {
                color: e.colorTextDisabled,
                background: 'transparent',
                cursor: 'not-allowed',
              },
            },
          }),
        },
      }),
    }
  },
  Xa = (e) => {
    const {
      componentCls: t,
      margin: a,
      colorBorderSecondary: n,
      horizontalMargin: i,
      verticalItemPadding: l,
      verticalItemMargin: c,
      calc: o,
    } = e
    return {
      [`${t}-top, ${t}-bottom`]: {
        flexDirection: 'column',
        [`> ${t}-nav, > div > ${t}-nav`]: {
          margin: i,
          '&::before': {
            position: 'absolute',
            right: { _skip_check_: !0, value: 0 },
            left: { _skip_check_: !0, value: 0 },
            borderBottom: `${p(e.lineWidth)} ${e.lineType} ${n}`,
            content: "''",
          },
          [`${t}-ink-bar`]: {
            height: e.lineWidthBold,
            '&-animated': {
              transition: `width ${e.motionDurationSlow}, left ${e.motionDurationSlow},
            right ${e.motionDurationSlow}`,
            },
          },
          [`${t}-nav-wrap`]: {
            '&::before, &::after': {
              top: 0,
              bottom: 0,
              width: e.controlHeight,
            },
            '&::before': {
              left: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowLeft,
            },
            '&::after': {
              right: { _skip_check_: !0, value: 0 },
              boxShadow: e.boxShadowTabsOverflowRight,
            },
            [`&${t}-nav-wrap-ping-left::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-right::after`]: { opacity: 1 },
          },
        },
      },
      [`${t}-top`]: {
        [`> ${t}-nav,
        > div > ${t}-nav`]: {
          '&::before': { bottom: 0 },
          [`${t}-ink-bar`]: { bottom: 0 },
        },
      },
      [`${t}-bottom`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          marginTop: a,
          marginBottom: 0,
          '&::before': { top: 0 },
          [`${t}-ink-bar`]: { top: 0 },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: { order: 0 },
      },
      [`${t}-left, ${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          flexDirection: 'column',
          minWidth: o(e.controlHeight).mul(1.25).equal(),
          [`${t}-tab`]: { padding: l, textAlign: 'center' },
          [`${t}-tab + ${t}-tab`]: { margin: c },
          [`${t}-nav-wrap`]: {
            flexDirection: 'column',
            '&::before, &::after': {
              right: { _skip_check_: !0, value: 0 },
              left: { _skip_check_: !0, value: 0 },
              height: e.controlHeight,
            },
            '&::before': { top: 0, boxShadow: e.boxShadowTabsOverflowTop },
            '&::after': { bottom: 0, boxShadow: e.boxShadowTabsOverflowBottom },
            [`&${t}-nav-wrap-ping-top::before`]: { opacity: 1 },
            [`&${t}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
          },
          [`${t}-ink-bar`]: {
            width: e.lineWidthBold,
            '&-animated': {
              transition: `height ${e.motionDurationSlow}, top ${e.motionDurationSlow}`,
            },
          },
          [`${t}-nav-list, ${t}-nav-operations`]: {
            flex: '1 0 auto',
            flexDirection: 'column',
          },
        },
      },
      [`${t}-left`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          marginLeft: {
            _skip_check_: !0,
            value: p(o(e.lineWidth).mul(-1).equal()),
          },
          borderLeft: {
            _skip_check_: !0,
            value: `${p(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingLeft: { _skip_check_: !0, value: e.paddingLG },
          },
        },
      },
      [`${t}-right`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          order: 1,
          [`${t}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
        },
        [`> ${t}-content-holder, > div > ${t}-content-holder`]: {
          order: 0,
          marginRight: {
            _skip_check_: !0,
            value: o(e.lineWidth).mul(-1).equal(),
          },
          borderRight: {
            _skip_check_: !0,
            value: `${p(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          },
          [`> ${t}-content > ${t}-tabpane`]: {
            paddingRight: { _skip_check_: !0, value: e.paddingLG },
          },
        },
      },
    }
  },
  Va = (e) => {
    const {
      componentCls: t,
      cardPaddingSM: a,
      cardPaddingLG: n,
      horizontalItemPaddingSM: i,
      horizontalItemPaddingLG: l,
    } = e
    return {
      [t]: {
        '&-small': {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: i, fontSize: e.titleFontSizeSM },
          },
        },
        '&-large': {
          [`> ${t}-nav`]: {
            [`${t}-tab`]: { padding: l, fontSize: e.titleFontSizeLG },
          },
        },
      },
      [`${t}-card`]: {
        [`&${t}-small`]: {
          [`> ${t}-nav`]: { [`${t}-tab`]: { padding: a } },
          [`&${t}-bottom`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `0 0 ${p(e.borderRadius)} ${p(e.borderRadius)}`,
            },
          },
          [`&${t}-top`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: `${p(e.borderRadius)} ${p(e.borderRadius)} 0 0`,
            },
          },
          [`&${t}-right`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${p(e.borderRadius)} ${p(e.borderRadius)} 0`,
              },
            },
          },
          [`&${t}-left`]: {
            [`> ${t}-nav ${t}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${p(e.borderRadius)} 0 0 ${p(e.borderRadius)}`,
              },
            },
          },
        },
        [`&${t}-large`]: { [`> ${t}-nav`]: { [`${t}-tab`]: { padding: n } } },
      },
    }
  },
  Fa = (e) => {
    const {
        componentCls: t,
        itemActiveColor: a,
        itemHoverColor: n,
        iconCls: i,
        tabsHorizontalItemMargin: l,
        horizontalItemPadding: c,
        itemSelectedColor: o,
        itemColor: s,
      } = e,
      d = `${t}-tab`
    return {
      [d]: {
        position: 'relative',
        WebkitTouchCallout: 'none',
        WebkitTapHighlightColor: 'transparent',
        display: 'inline-flex',
        alignItems: 'center',
        padding: c,
        fontSize: e.titleFontSize,
        background: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        color: s,
        '&-btn, &-remove': Object.assign(
          { '&:focus:not(:focus-visible), &:active': { color: a } },
          St(e),
        ),
        '&-btn': {
          outline: 'none',
          transition: `all ${e.motionDurationSlow}`,
          [`${d}-icon:not(:last-child)`]: { marginInlineEnd: e.marginSM },
        },
        '&-remove': {
          flex: 'none',
          marginRight: {
            _skip_check_: !0,
            value: e.calc(e.marginXXS).mul(-1).equal(),
          },
          marginLeft: { _skip_check_: !0, value: e.marginXS },
          color: e.colorTextDescription,
          fontSize: e.fontSizeSM,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          '&:hover': { color: e.colorTextHeading },
        },
        '&:hover': { color: n },
        [`&${d}-active ${d}-btn`]: {
          color: o,
          textShadow: e.tabsActiveTextShadow,
        },
        [`&${d}-disabled`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
        },
        [`&${d}-disabled ${d}-btn, &${d}-disabled ${t}-remove`]: {
          '&:focus, &:active': { color: e.colorTextDisabled },
        },
        [`& ${d}-remove ${i}`]: { margin: 0 },
        [`${i}:not(:last-child)`]: {
          marginRight: { _skip_check_: !0, value: e.marginSM },
        },
      },
      [`${d} + ${d}`]: { margin: { _skip_check_: !0, value: l } },
    }
  },
  Ua = (e) => {
    const {
      componentCls: t,
      tabsHorizontalItemMarginRTL: a,
      iconCls: n,
      cardGutter: i,
      calc: l,
    } = e
    return {
      [`${t}-rtl`]: {
        direction: 'rtl',
        [`${t}-nav`]: {
          [`${t}-tab`]: {
            margin: { _skip_check_: !0, value: a },
            [`${t}-tab:last-of-type`]: {
              marginLeft: { _skip_check_: !0, value: 0 },
            },
            [n]: {
              marginRight: { _skip_check_: !0, value: 0 },
              marginLeft: { _skip_check_: !0, value: p(e.marginSM) },
            },
            [`${t}-tab-remove`]: {
              marginRight: { _skip_check_: !0, value: p(e.marginXS) },
              marginLeft: {
                _skip_check_: !0,
                value: p(l(e.marginXXS).mul(-1).equal()),
              },
              [n]: { margin: 0 },
            },
          },
        },
        [`&${t}-left`]: {
          [`> ${t}-nav`]: { order: 1 },
          [`> ${t}-content-holder`]: { order: 0 },
        },
        [`&${t}-right`]: {
          [`> ${t}-nav`]: { order: 0 },
          [`> ${t}-content-holder`]: { order: 1 },
        },
        [`&${t}-card${t}-top, &${t}-card${t}-bottom`]: {
          [`> ${t}-nav, > div > ${t}-nav`]: {
            [`${t}-tab + ${t}-tab`]: {
              marginRight: { _skip_check_: !0, value: i },
              marginLeft: { _skip_check_: !0, value: 0 },
            },
          },
        },
      },
      [`${t}-dropdown-rtl`]: { direction: 'rtl' },
      [`${t}-menu-item`]: {
        [`${t}-dropdown-rtl`]: {
          textAlign: { _skip_check_: !0, value: 'right' },
        },
      },
    }
  },
  Ya = (e) => {
    const {
      componentCls: t,
      tabsCardPadding: a,
      cardHeight: n,
      cardGutter: i,
      itemHoverColor: l,
      itemActiveColor: c,
      colorBorderSecondary: o,
    } = e
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, yt(e)), {
            display: 'flex',
            [`> ${t}-nav, > div > ${t}-nav`]: {
              position: 'relative',
              display: 'flex',
              flex: 'none',
              alignItems: 'center',
              [`${t}-nav-wrap`]: {
                position: 'relative',
                display: 'flex',
                flex: 'auto',
                alignSelf: 'stretch',
                overflow: 'hidden',
                whiteSpace: 'nowrap',
                transform: 'translate(0)',
                '&::before, &::after': {
                  position: 'absolute',
                  zIndex: 1,
                  opacity: 0,
                  transition: `opacity ${e.motionDurationSlow}`,
                  content: "''",
                  pointerEvents: 'none',
                },
              },
              [`${t}-nav-list`]: {
                position: 'relative',
                display: 'flex',
                transition: `opacity ${e.motionDurationSlow}`,
              },
              [`${t}-nav-operations`]: {
                display: 'flex',
                alignSelf: 'stretch',
              },
              [`${t}-nav-operations-hidden`]: {
                position: 'absolute',
                visibility: 'hidden',
                pointerEvents: 'none',
              },
              [`${t}-nav-more`]: {
                position: 'relative',
                padding: a,
                background: 'transparent',
                border: 0,
                color: e.colorText,
                '&::after': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  bottom: 0,
                  left: { _skip_check_: !0, value: 0 },
                  height: e.calc(e.controlHeightLG).div(8).equal(),
                  transform: 'translateY(100%)',
                  content: "''",
                },
              },
              [`${t}-nav-add`]: Object.assign(
                {
                  minWidth: n,
                  minHeight: n,
                  marginLeft: { _skip_check_: !0, value: i },
                  padding: `0 ${p(e.paddingXS)}`,
                  background: 'transparent',
                  border: `${p(e.lineWidth)} ${e.lineType} ${o}`,
                  borderRadius: `${p(e.borderRadiusLG)} ${p(e.borderRadiusLG)} 0 0`,
                  outline: 'none',
                  cursor: 'pointer',
                  color: e.colorText,
                  transition: `all ${e.motionDurationSlow} ${e.motionEaseInOut}`,
                  '&:hover': { color: l },
                  '&:active, &:focus:not(:focus-visible)': { color: c },
                },
                St(e),
              ),
            },
            [`${t}-extra-content`]: { flex: 'none' },
            [`${t}-ink-bar`]: {
              position: 'absolute',
              background: e.inkBarColor,
              pointerEvents: 'none',
            },
          }),
          Fa(e),
        ),
        {
          [`${t}-content`]: { position: 'relative', width: '100%' },
          [`${t}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
          [`${t}-tabpane`]: {
            outline: 'none',
            '&-hidden': { display: 'none' },
          },
        },
      ),
      [`${t}-centered`]: {
        [`> ${t}-nav, > div > ${t}-nav`]: {
          [`${t}-nav-wrap`]: {
            [`&:not([class*='${t}-nav-wrap-ping'])`]: {
              justifyContent: 'center',
            },
          },
        },
      },
    }
  },
  qa = (e) => {
    const t = e.controlHeightLG
    return {
      zIndexPopup: e.zIndexPopupBase + 50,
      cardBg: e.colorFillAlter,
      cardHeight: t,
      cardPadding: `${(t - Math.round(e.fontSize * e.lineHeight)) / 2 - e.lineWidth}px ${e.padding}px`,
      cardPaddingSM: `${e.paddingXXS * 1.5}px ${e.padding}px`,
      cardPaddingLG: `${e.paddingXS}px ${e.padding}px ${e.paddingXXS * 1.5}px`,
      titleFontSize: e.fontSize,
      titleFontSizeLG: e.fontSizeLG,
      titleFontSizeSM: e.fontSize,
      inkBarColor: e.colorPrimary,
      horizontalMargin: `0 0 ${e.margin}px 0`,
      horizontalItemGutter: 32,
      horizontalItemMargin: '',
      horizontalItemMarginRTL: '',
      horizontalItemPadding: `${e.paddingSM}px 0`,
      horizontalItemPaddingSM: `${e.paddingXS}px 0`,
      horizontalItemPaddingLG: `${e.padding}px 0`,
      verticalItemPadding: `${e.paddingXS}px ${e.paddingLG}px`,
      verticalItemMargin: `${e.margin}px 0 0 0`,
      itemColor: e.colorText,
      itemSelectedColor: e.colorPrimary,
      itemHoverColor: e.colorPrimaryHover,
      itemActiveColor: e.colorPrimaryActive,
      cardGutter: e.marginXXS / 2,
    }
  },
  Qa = ra(
    'Tabs',
    (e) => {
      const t = ia(e, {
        tabsCardPadding: e.cardPadding,
        dropdownEdgeChildVerticalPadding: e.paddingXXS,
        tabsActiveTextShadow: '0 0 0.25px currentcolor',
        tabsDropdownHeight: 200,
        tabsDropdownWidth: 120,
        tabsHorizontalItemMargin: `0 0 0 ${p(e.horizontalItemGutter)}`,
        tabsHorizontalItemMarginRTL: `0 0 0 ${p(e.horizontalItemGutter)}`,
      })
      return [Va(t), Ua(t), Xa(t), Ka(t), Ga(t), Ya(t), Wa(t)]
    },
    qa,
  ),
  Za = () => null
var Ja = function (e, t) {
  var a = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (a[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, n = Object.getOwnPropertySymbols(e); i < n.length; i++)
      t.indexOf(n[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[i]) &&
        (a[n[i]] = e[n[i]])
  return a
}
const It = (e) => {
  var t, a, n, i, l, c, o, s, d, f, m
  const {
      type: $,
      className: T,
      rootClassName: j,
      size: R,
      onEdit: L,
      hideAdd: b,
      centered: v,
      addIcon: E,
      removeIcon: z,
      moreIcon: D,
      more: H,
      popupClassName: B,
      children: _,
      items: x,
      animated: I,
      style: y,
      indicatorSize: C,
      indicator: h,
    } = e,
    w = Ja(e, [
      'type',
      'className',
      'rootClassName',
      'size',
      'onEdit',
      'hideAdd',
      'centered',
      'addIcon',
      'removeIcon',
      'moreIcon',
      'more',
      'popupClassName',
      'children',
      'items',
      'animated',
      'style',
      'indicatorSize',
      'indicator',
    ]),
    { prefixCls: q } = w,
    {
      direction: ie,
      tabs: g,
      getPrefixCls: K,
      getPopupContainer: ne,
    } = r.useContext(la),
    W = K('tabs', q),
    V = ca(W),
    [oe, P, A] = Qa(W, V)
  let G
  $ === 'editable-card' &&
    (G = {
      onEdit: (ue, be) => {
        let { key: N, event: re } = be
        L == null || L(ue === 'add' ? re : N, ue)
      },
      removeIcon:
        (t = z ?? (g == null ? void 0 : g.removeIcon)) !== null && t !== void 0
          ? t
          : r.createElement(sa, null),
      addIcon:
        (E ?? (g == null ? void 0 : g.addIcon)) || r.createElement(da, null),
      showAdd: b !== !0,
    })
  const X = K(),
    F = ua(R),
    ee = Ha(x, _),
    Z = Da(W, I),
    me = Object.assign(Object.assign({}, g == null ? void 0 : g.style), y),
    le = {
      align:
        (a = h == null ? void 0 : h.align) !== null && a !== void 0
          ? a
          : (n = g == null ? void 0 : g.indicator) === null || n === void 0
            ? void 0
            : n.align,
      size:
        (o =
          (l =
            (i = h == null ? void 0 : h.size) !== null && i !== void 0
              ? i
              : C) !== null && l !== void 0
            ? l
            : (c = g == null ? void 0 : g.indicator) === null || c === void 0
              ? void 0
              : c.size) !== null && o !== void 0
          ? o
          : g == null
            ? void 0
            : g.indicatorSize,
    }
  return oe(
    r.createElement(
      ka,
      Object.assign({ direction: ie, getPopupContainer: ne }, w, {
        items: ee,
        className: Y(
          {
            [`${W}-${F}`]: F,
            [`${W}-card`]: ['card', 'editable-card'].includes($),
            [`${W}-editable-card`]: $ === 'editable-card',
            [`${W}-centered`]: v,
          },
          g == null ? void 0 : g.className,
          T,
          j,
          P,
          A,
          V,
        ),
        popupClassName: Y(B, P, A, V),
        style: me,
        editable: G,
        more: Object.assign(
          {
            icon:
              (m =
                (f =
                  (d =
                    (s = g == null ? void 0 : g.more) === null || s === void 0
                      ? void 0
                      : s.icon) !== null && d !== void 0
                    ? d
                    : g == null
                      ? void 0
                      : g.moreIcon) !== null && f !== void 0
                  ? f
                  : D) !== null && m !== void 0
                ? m
                : r.createElement(va, null),
            transitionName: `${X}-slide-up`,
          },
          H,
        ),
        prefixCls: W,
        animated: Z,
        indicator: le,
      }),
    ),
  )
}
It.TabPane = Za
const { Text: pe } = Ct,
  en = [
    { key: '1', deviceName: 'Device 1', loginTime: '2024-11-29 08:30:00' },
    { key: '2', deviceName: 'Device 2', loginTime: '2024-11-28 15:45:00' },
    { key: '3', deviceName: 'Device 3', loginTime: '2024-11-27 20:00:00' },
  ]
function tn() {
  const { t: e } = xt(),
    [t, a] = r.useState(''),
    [n, i] = r.useState(''),
    [l, c] = r.useState(en),
    [o, s] = r.useState(!1),
    d = () => s(!0),
    f = () => {
      s(!1), We.info(e('Account reset to default')), a(''), i(''), c([])
    },
    m = () => {
      if (!t || !n) {
        We.error(e('Please fill in both fields'))
        return
      }
      We.success(e('Password changed successfully')), a(''), i('')
    },
    $ = [
      { title: e('Device Name'), dataIndex: 'deviceName', key: 'deviceName' },
      { title: e('Login Time'), dataIndex: 'loginTime', key: 'loginTime' },
    ]
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx(_t, {
        children: u.jsx('title', { children: e('Security Profile') }),
      }),
      u.jsxs(He, {
        gutter: [16, 16],
        className: 'mb-6',
        children: [
          u.jsxs(he, {
            span: 12,
            children: [
              u.jsx(pe, { level: 5, children: e('Change Password') }),
              u.jsx('br', {}),
              u.jsx(pe, {
                className: 'text-xs italic opacity-70',
                children: e(
                  'Enter your current password and the new password to change your account password.',
                ),
              }),
            ],
          }),
          u.jsx(he, {
            span: 12,
            children: u.jsxs(fa, {
              direction: 'vertical',
              className: 'w-full',
              children: [
                u.jsx(st.Password, {
                  placeholder: e('Current Password'),
                  value: t,
                  size: 'large',
                  onChange: (T) => a(T.target.value),
                }),
                u.jsx(st.Password, {
                  placeholder: e('New Password'),
                  value: n,
                  size: 'large',
                  onChange: (T) => i(T.target.value),
                }),
                u.jsx(dt, {
                  type: 'primary',
                  onClick: m,
                  block: !0,
                  children: e('Change Password'),
                }),
              ],
            }),
          }),
        ],
      }),
      u.jsxs(He, {
        gutter: [16, 16],
        className: 'mt-10',
        children: [
          u.jsxs(he, {
            span: 12,
            children: [
              u.jsx(pe, { level: 5, children: e('Login History') }),
              u.jsx('br', {}),
              u.jsx(pe, {
                className: 'text-xs italic opacity-70',
                children: e(
                  'View the list of devices and times when your account was accessed.',
                ),
              }),
            ],
          }),
          u.jsx(he, {
            span: 12,
            children: u.jsx(ha, {
              columns: $,
              dataSource: l,
              pagination: !1,
              rowKey: 'key',
              size: 'small',
              bordered: !0,
            }),
          }),
        ],
      }),
      u.jsxs(He, {
        gutter: [16, 16],
        className: 'mt-10',
        children: [
          u.jsxs(he, {
            span: 12,
            children: [
              u.jsx(pe, { level: 5, children: e('Reset Account to Default') }),
              u.jsx('br', {}),
              u.jsx(pe, {
                className: 'text-xs italic opacity-70',
                children: e(
                  'Reset your account to its default settings, clearing all custom configurations and history.',
                ),
              }),
            ],
          }),
          u.jsx(he, {
            span: 12,
            children: u.jsx(dt, {
              type: 'default',
              danger: !0,
              onClick: d,
              block: !0,
              children: e('Reset Account to Default'),
            }),
          }),
        ],
      }),
      u.jsx(ga, {
        title: e('Confirm Reset'),
        visible: o,
        onOk: f,
        onCancel: () => s(!1),
        okText: e('Yes'),
        cancelText: e('No'),
        children: u.jsx('p', {
          children: e(
            'Are you sure you want to reset your account to default?',
          ),
        }),
      }),
    ],
  })
}
const { Title: an, Text: nn } = Ct,
  rn = [
    { key: '1', label: 'My details', children: 'Content of Tab Pane 1' },
    { key: '2', label: 'Access Rights', children: 'Content of Tab Pane 2' },
    { key: '3', label: 'Security', children: u.jsx(tn, {}) },
  ]
function vn({ permissions: e, isMobile: t }) {
  const { t: a } = xt()
  ma(), ba()
  const n = (i) => {
    console.log(i)
  }
  return u.jsxs(u.Fragment, {
    children: [
      u.jsx(_t, {
        children: u.jsxs('title', {
          children: ['ITM - ', a('User Management')],
        }),
      }),
      u.jsx('div', {
        className: 'bg-slate-50 p-2 h-screen overflow-hidden',
        children: u.jsxs('div', {
          className:
            'flex flex-col gap-6 md:grid md:grid-cols-4 md:grid-rows-[auto_1fr] md:gap-6 h-full',
          children: [
            u.jsx('div', {
              className: 'col-start-1 col-end-5 row-start-1 w-full rounded-lg ',
              children: u.jsxs('div', {
                className: 'left-16 flex gap-4 items-end',
                children: [
                  u.jsx('div', {
                    className: 'h-32 w-32 rounded-lg bg-slate-500',
                  }),
                  u.jsxs('div', {
                    children: [
                      u.jsx(an, { level: 4, children: 'Hoang Van Tuan' }),
                      u.jsx(nn, { children: 'VM3240288' }),
                    ],
                  }),
                ],
              }),
            }),
            u.jsx('div', {
              className:
                'col-start-1 col-end-5 row-start-2 w-full h-full rounded-lg   overflow-auto',
              children: u.jsx('div', {
                className: 'w-full h-full ',
                children: u.jsx(It, {
                  defaultActiveKey: '1',
                  type: 'card',
                  size: 'small',
                  items: rn,
                  onChange: n,
                }),
              }),
            }),
          ],
        }),
      }),
    ],
  })
}
export { vn as default }
