import {
  r as l,
  U as at,
  l as re,
  w as kn,
  e as ue,
  f as rt,
  a as X,
  _ as T,
  ag as Ge,
  R as J,
  ah as Va,
  p as ut,
  d as H,
  b as ve,
  ai as Mo,
  E as mn,
  v as gn,
  aj as Zn,
  I as Rt,
  ak as Ua,
  W as ht,
  Z as hn,
  al as Xa,
  am as Bo,
  an as Dn,
  ao as Mn,
  k as Ht,
  x as j,
  ap as un,
  aq as Ga,
  a1 as Ya,
  a0 as Qa,
  ar as Ja,
  as as Za,
  at as ei,
  h as Rn,
  $ as vr,
  i as kt,
  au as Lo,
  t as jo,
  av as jr,
  aw as ti,
  z as ni,
  G as ri,
  ax as oi,
  ay as ai,
  az as ii,
  aA as li,
  aB as si,
  a2 as ci,
  aC as di,
  aD as zr,
  aE as Hr,
  aF as ui,
  aG as fi,
  aH as pi,
  u as It,
  aI as fn,
  aJ as _r,
  aK as zo,
  aL as mr,
  o as gr,
  aM as Ar,
  aN as vi,
  aO as Fr,
  m as mi,
  aP as Wr,
  aQ as gi,
  aR as hi,
  aS as Ho,
  aT as _o,
  s as Ao,
  aU as _,
  q as Fo,
  aV as In,
  aW as Wo,
  aX as yi,
  aY as bi,
  aZ as xi,
  a_ as qr,
  a$ as Ci,
  b0 as Si,
  V as On,
  b1 as Ei,
  b2 as $i,
  b3 as Vr,
  P as wi,
  b4 as Ni,
  b5 as ki,
  y as ln,
  b6 as Ri,
  b7 as Ii,
  a9 as qo,
  aa as Oi,
  ab as Ne,
  ac as er,
  ad as tr,
  ae as Vo,
  af as Pi,
} from './index-DLixwHhI.js'
import {
  p as _t,
  b as Ki,
  S as Bn,
  L as Uo,
  c as Ti,
  I as Pn,
  E as Ur,
  D as Di,
  C as Mi,
  R as Xr,
} from './vi-BrSzqclF.js'
var Bi = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 01-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z',
          },
        },
      ],
    },
    name: 'check-circle',
    theme: 'filled',
  },
  Li = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: Bi }))
  },
  ji = l.forwardRef(Li),
  zi = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm-32 232c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V296zm32 440a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
          },
        },
      ],
    },
    name: 'exclamation-circle',
    theme: 'filled',
  },
  Hi = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: zi }))
  },
  _i = l.forwardRef(Hi),
  Ai = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm32 664c0 4.4-3.6 8-8 8h-48c-4.4 0-8-3.6-8-8V456c0-4.4 3.6-8 8-8h48c4.4 0 8 3.6 8 8v272zm-32-344a48.01 48.01 0 010-96 48.01 48.01 0 010 96z',
          },
        },
      ],
    },
    name: 'info-circle',
    theme: 'filled',
  },
  Fi = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: Ai }))
  },
  Wi = l.forwardRef(Fi)
function nr(e) {
  return e != null && e === e.window
}
const qi = (e) => {
  var t, r
  if (typeof window > 'u') return 0
  let n = 0
  return (
    nr(e)
      ? (n = e.pageYOffset)
      : e instanceof Document
        ? (n = e.documentElement.scrollTop)
        : (e instanceof HTMLElement || e) && (n = e.scrollTop),
    e &&
      !nr(e) &&
      typeof n != 'number' &&
      (n =
        (r = ((t = e.ownerDocument) !== null && t !== void 0 ? t : e)
          .documentElement) === null || r === void 0
          ? void 0
          : r.scrollTop),
    n
  )
}
function Vi(e, t, r, n) {
  const o = r - t
  return (
    (e /= n / 2),
    e < 1 ? (o / 2) * e * e * e + t : (o / 2) * ((e -= 2) * e * e + 2) + t
  )
}
function Ui(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  const { getContainer: r = () => window, callback: n, duration: o = 450 } = t,
    i = r(),
    d = qi(i),
    a = Date.now(),
    s = () => {
      const f = Date.now() - a,
        p = Vi(f > o ? o : f, d, e, o)
      nr(i)
        ? i.scrollTo(window.pageXOffset, p)
        : i instanceof Document || i.constructor.name === 'HTMLDocument'
          ? (i.documentElement.scrollTop = p)
          : (i.scrollTop = p),
        f < o ? kn(s) : typeof n == 'function' && n()
    }
  kn(s)
}
var Xo = l.forwardRef(function (e, t) {
    var r = e.prefixCls,
      n = e.style,
      o = e.className,
      i = e.duration,
      d = i === void 0 ? 4.5 : i,
      a = e.showProgress,
      s = e.pauseOnHover,
      c = s === void 0 ? !0 : s,
      f = e.eventKey,
      p = e.content,
      u = e.closable,
      v = e.closeIcon,
      m = v === void 0 ? 'x' : v,
      h = e.props,
      g = e.onClick,
      y = e.onNoticeClose,
      b = e.times,
      x = e.hovering,
      C = l.useState(!1),
      S = ue(C, 2),
      $ = S[0],
      R = S[1],
      w = l.useState(0),
      E = ue(w, 2),
      N = E[0],
      k = E[1],
      I = l.useState(0),
      O = ue(I, 2),
      P = O[0],
      K = O[1],
      D = x || $,
      L = d > 0 && a,
      B = function () {
        y(f)
      },
      M = function (Q) {
        ;(Q.key === 'Enter' || Q.code === 'Enter' || Q.keyCode === Ge.ENTER) &&
          B()
      }
    l.useEffect(
      function () {
        if (!D && d > 0) {
          var me = Date.now() - P,
            Q = setTimeout(
              function () {
                B()
              },
              d * 1e3 - P,
            )
          return function () {
            c && clearTimeout(Q), K(Date.now() - me)
          }
        }
      },
      [d, D, b],
    ),
      l.useEffect(
        function () {
          if (!D && L && (c || P === 0)) {
            var me = performance.now(),
              Q,
              he = function te() {
                cancelAnimationFrame(Q),
                  (Q = requestAnimationFrame(function (ie) {
                    var $e = ie + P - me,
                      ee = Math.min($e / (d * 1e3), 1)
                    k(ee * 100), ee < 1 && te()
                  }))
              }
            return (
              he(),
              function () {
                c && cancelAnimationFrame(Q)
              }
            )
          }
        },
        [d, P, D, L, b],
      )
    var U = l.useMemo(
        function () {
          return rt(u) === 'object' && u !== null
            ? u
            : u
              ? { closeIcon: m }
              : {}
        },
        [u, m],
      ),
      z = _t(U, !0),
      oe = 100 - (!N || N < 0 ? 0 : N > 100 ? 100 : N),
      Z = ''.concat(r, '-notice')
    return l.createElement(
      'div',
      re({}, h, {
        ref: t,
        className: X(Z, o, T({}, ''.concat(Z, '-closable'), u)),
        style: n,
        onMouseEnter: function (Q) {
          var he
          R(!0),
            h == null ||
              (he = h.onMouseEnter) === null ||
              he === void 0 ||
              he.call(h, Q)
        },
        onMouseLeave: function (Q) {
          var he
          R(!1),
            h == null ||
              (he = h.onMouseLeave) === null ||
              he === void 0 ||
              he.call(h, Q)
        },
        onClick: g,
      }),
      l.createElement('div', { className: ''.concat(Z, '-content') }, p),
      u &&
        l.createElement(
          'a',
          re(
            {
              tabIndex: 0,
              className: ''.concat(Z, '-close'),
              onKeyDown: M,
              'aria-label': 'Close',
            },
            z,
            {
              onClick: function (Q) {
                Q.preventDefault(), Q.stopPropagation(), B()
              },
            },
          ),
          U.closeIcon,
        ),
      L &&
        l.createElement(
          'progress',
          { className: ''.concat(Z, '-progress'), max: '100', value: oe },
          oe + '%',
        ),
    )
  }),
  Go = J.createContext({}),
  Xi = function (t) {
    var r = t.children,
      n = t.classNames
    return J.createElement(Go.Provider, { value: { classNames: n } }, r)
  },
  Gr = 8,
  Yr = 3,
  Qr = 16,
  Gi = function (t) {
    var r = { offset: Gr, threshold: Yr, gap: Qr }
    if (t && rt(t) === 'object') {
      var n, o, i
      ;(r.offset = (n = t.offset) !== null && n !== void 0 ? n : Gr),
        (r.threshold = (o = t.threshold) !== null && o !== void 0 ? o : Yr),
        (r.gap = (i = t.gap) !== null && i !== void 0 ? i : Qr)
    }
    return [!!t, r]
  },
  Yi = ['className', 'style', 'classNames', 'styles'],
  Qi = function (t) {
    var r = t.configList,
      n = t.placement,
      o = t.prefixCls,
      i = t.className,
      d = t.style,
      a = t.motion,
      s = t.onAllNoticeRemoved,
      c = t.onNoticeClose,
      f = t.stack,
      p = l.useContext(Go),
      u = p.classNames,
      v = l.useRef({}),
      m = l.useState(null),
      h = ue(m, 2),
      g = h[0],
      y = h[1],
      b = l.useState([]),
      x = ue(b, 2),
      C = x[0],
      S = x[1],
      $ = r.map(function (D) {
        return { config: D, key: String(D.key) }
      }),
      R = Gi(f),
      w = ue(R, 2),
      E = w[0],
      N = w[1],
      k = N.offset,
      I = N.threshold,
      O = N.gap,
      P = E && (C.length > 0 || $.length <= I),
      K = typeof a == 'function' ? a(n) : a
    return (
      l.useEffect(
        function () {
          E &&
            C.length > 1 &&
            S(function (D) {
              return D.filter(function (L) {
                return $.some(function (B) {
                  var M = B.key
                  return L === M
                })
              })
            })
        },
        [C, $, E],
      ),
      l.useEffect(
        function () {
          var D
          if (
            E &&
            v.current[
              (D = $[$.length - 1]) === null || D === void 0 ? void 0 : D.key
            ]
          ) {
            var L
            y(
              v.current[
                (L = $[$.length - 1]) === null || L === void 0 ? void 0 : L.key
              ],
            )
          }
        },
        [$, E],
      ),
      J.createElement(
        Va,
        re(
          {
            key: n,
            className: X(
              o,
              ''.concat(o, '-').concat(n),
              u == null ? void 0 : u.list,
              i,
              T(
                T({}, ''.concat(o, '-stack'), !!E),
                ''.concat(o, '-stack-expanded'),
                P,
              ),
            ),
            style: d,
            keys: $,
            motionAppear: !0,
          },
          K,
          {
            onAllRemoved: function () {
              s(n)
            },
          },
        ),
        function (D, L) {
          var B = D.config,
            M = D.className,
            U = D.style,
            z = D.index,
            oe = B,
            Z = oe.key,
            me = oe.times,
            Q = String(Z),
            he = B,
            te = he.className,
            ie = he.style,
            $e = he.classNames,
            ee = he.styles,
            Y = ut(he, Yi),
            F = $.findIndex(function (xe) {
              return xe.key === Q
            }),
            A = {}
          if (E) {
            var q = $.length - 1 - (F > -1 ? F : z - 1),
              se = n === 'top' || n === 'bottom' ? '-50%' : '0'
            if (q > 0) {
              var V, ne, W
              A.height = P
                ? (V = v.current[Q]) === null || V === void 0
                  ? void 0
                  : V.offsetHeight
                : g == null
                  ? void 0
                  : g.offsetHeight
              for (var de = 0, G = 0; G < q; G++) {
                var ge
                de +=
                  ((ge = v.current[$[$.length - 1 - G].key]) === null ||
                  ge === void 0
                    ? void 0
                    : ge.offsetHeight) + O
              }
              var le = (P ? de : q * k) * (n.startsWith('top') ? 1 : -1),
                we =
                  !P &&
                  g !== null &&
                  g !== void 0 &&
                  g.offsetWidth &&
                  (ne = v.current[Q]) !== null &&
                  ne !== void 0 &&
                  ne.offsetWidth
                    ? ((g == null ? void 0 : g.offsetWidth) -
                        k * 2 * (q < 3 ? q : 3)) /
                      ((W = v.current[Q]) === null || W === void 0
                        ? void 0
                        : W.offsetWidth)
                    : 1
              A.transform = 'translate3d('
                .concat(se, ', ')
                .concat(le, 'px, 0) scaleX(')
                .concat(we, ')')
            } else A.transform = 'translate3d('.concat(se, ', 0, 0)')
          }
          return J.createElement(
            'div',
            {
              ref: L,
              className: X(
                ''.concat(o, '-notice-wrapper'),
                M,
                $e == null ? void 0 : $e.wrapper,
              ),
              style: H(H(H({}, U), A), ee == null ? void 0 : ee.wrapper),
              onMouseEnter: function () {
                return S(function (fe) {
                  return fe.includes(Q) ? fe : [].concat(ve(fe), [Q])
                })
              },
              onMouseLeave: function () {
                return S(function (fe) {
                  return fe.filter(function (Oe) {
                    return Oe !== Q
                  })
                })
              },
            },
            J.createElement(
              Xo,
              re({}, Y, {
                ref: function (fe) {
                  F > -1 ? (v.current[Q] = fe) : delete v.current[Q]
                },
                prefixCls: o,
                classNames: $e,
                styles: ee,
                className: X(te, u == null ? void 0 : u.notice),
                style: ie,
                times: me,
                key: Z,
                eventKey: Z,
                onNoticeClose: c,
                hovering: E && C.length > 0,
              }),
            ),
          )
        },
      )
    )
  },
  Ji = l.forwardRef(function (e, t) {
    var r = e.prefixCls,
      n = r === void 0 ? 'rc-notification' : r,
      o = e.container,
      i = e.motion,
      d = e.maxCount,
      a = e.className,
      s = e.style,
      c = e.onAllRemoved,
      f = e.stack,
      p = e.renderNotifications,
      u = l.useState([]),
      v = ue(u, 2),
      m = v[0],
      h = v[1],
      g = function (E) {
        var N,
          k = m.find(function (I) {
            return I.key === E
          })
        k == null || (N = k.onClose) === null || N === void 0 || N.call(k),
          h(function (I) {
            return I.filter(function (O) {
              return O.key !== E
            })
          })
      }
    l.useImperativeHandle(t, function () {
      return {
        open: function (E) {
          h(function (N) {
            var k = ve(N),
              I = k.findIndex(function (K) {
                return K.key === E.key
              }),
              O = H({}, E)
            if (I >= 0) {
              var P
              ;(O.times =
                (((P = N[I]) === null || P === void 0 ? void 0 : P.times) ||
                  0) + 1),
                (k[I] = O)
            } else (O.times = 0), k.push(O)
            return d > 0 && k.length > d && (k = k.slice(-d)), k
          })
        },
        close: function (E) {
          g(E)
        },
        destroy: function () {
          h([])
        },
      }
    })
    var y = l.useState({}),
      b = ue(y, 2),
      x = b[0],
      C = b[1]
    l.useEffect(
      function () {
        var w = {}
        m.forEach(function (E) {
          var N = E.placement,
            k = N === void 0 ? 'topRight' : N
          k && ((w[k] = w[k] || []), w[k].push(E))
        }),
          Object.keys(x).forEach(function (E) {
            w[E] = w[E] || []
          }),
          C(w)
      },
      [m],
    )
    var S = function (E) {
        C(function (N) {
          var k = H({}, N),
            I = k[E] || []
          return I.length || delete k[E], k
        })
      },
      $ = l.useRef(!1)
    if (
      (l.useEffect(
        function () {
          Object.keys(x).length > 0
            ? ($.current = !0)
            : $.current && (c == null || c(), ($.current = !1))
        },
        [x],
      ),
      !o)
    )
      return null
    var R = Object.keys(x)
    return Mo.createPortal(
      l.createElement(
        l.Fragment,
        null,
        R.map(function (w) {
          var E = x[w],
            N = l.createElement(Qi, {
              key: w,
              configList: E,
              placement: w,
              prefixCls: n,
              className: a == null ? void 0 : a(w),
              style: s == null ? void 0 : s(w),
              motion: i,
              onNoticeClose: g,
              onAllNoticeRemoved: S,
              stack: f,
            })
          return p ? p(N, { prefixCls: n, key: w }) : N
        }),
      ),
      o,
    )
  }),
  Zi = [
    'getContainer',
    'motion',
    'prefixCls',
    'maxCount',
    'className',
    'style',
    'onAllRemoved',
    'stack',
    'renderNotifications',
  ],
  el = function () {
    return document.body
  },
  Jr = 0
function tl() {
  for (var e = {}, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
    r[n] = arguments[n]
  return (
    r.forEach(function (o) {
      o &&
        Object.keys(o).forEach(function (i) {
          var d = o[i]
          d !== void 0 && (e[i] = d)
        })
    }),
    e
  )
}
function nl() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.getContainer,
    r = t === void 0 ? el : t,
    n = e.motion,
    o = e.prefixCls,
    i = e.maxCount,
    d = e.className,
    a = e.style,
    s = e.onAllRemoved,
    c = e.stack,
    f = e.renderNotifications,
    p = ut(e, Zi),
    u = l.useState(),
    v = ue(u, 2),
    m = v[0],
    h = v[1],
    g = l.useRef(),
    y = l.createElement(Ji, {
      container: m,
      ref: g,
      prefixCls: o,
      motion: n,
      maxCount: i,
      className: d,
      style: a,
      onAllRemoved: s,
      stack: c,
      renderNotifications: f,
    }),
    b = l.useState([]),
    x = ue(b, 2),
    C = x[0],
    S = x[1],
    $ = l.useMemo(function () {
      return {
        open: function (w) {
          var E = tl(p, w)
          ;(E.key === null || E.key === void 0) &&
            ((E.key = 'rc-notification-'.concat(Jr)), (Jr += 1)),
            S(function (N) {
              return [].concat(ve(N), [{ type: 'open', config: E }])
            })
        },
        close: function (w) {
          S(function (E) {
            return [].concat(ve(E), [{ type: 'close', key: w }])
          })
        },
        destroy: function () {
          S(function (w) {
            return [].concat(ve(w), [{ type: 'destroy' }])
          })
        },
      }
    }, [])
  return (
    l.useEffect(function () {
      h(r())
    }),
    l.useEffect(
      function () {
        g.current &&
          C.length &&
          (C.forEach(function (R) {
            switch (R.type) {
              case 'open':
                g.current.open(R.config)
                break
              case 'close':
                g.current.close(R.key)
                break
              case 'destroy':
                g.current.destroy()
                break
            }
          }),
          S(function (R) {
            return R.filter(function (w) {
              return !C.includes(w)
            })
          }))
      },
      [C],
    ),
    [$, y]
  )
}
const rl = (e) => {
    const {
        componentCls: t,
        iconCls: r,
        boxShadow: n,
        colorText: o,
        colorSuccess: i,
        colorError: d,
        colorWarning: a,
        colorInfo: s,
        fontSizeLG: c,
        motionEaseInOutCirc: f,
        motionDurationSlow: p,
        marginXS: u,
        paddingXS: v,
        borderRadiusLG: m,
        zIndexPopup: h,
        contentPadding: g,
        contentBg: y,
      } = e,
      b = `${t}-notice`,
      x = new Zn('MessageMoveIn', {
        '0%': { padding: 0, transform: 'translateY(-100%)', opacity: 0 },
        '100%': { padding: v, transform: 'translateY(0)', opacity: 1 },
      }),
      C = new Zn('MessageMoveOut', {
        '0%': { maxHeight: e.height, padding: v, opacity: 1 },
        '100%': { maxHeight: 0, padding: 0, opacity: 0 },
      }),
      S = {
        padding: v,
        textAlign: 'center',
        [`${t}-custom-content`]: { display: 'flex', alignItems: 'center' },
        [`${t}-custom-content > ${r}`]: { marginInlineEnd: u, fontSize: c },
        [`${b}-content`]: {
          display: 'inline-block',
          padding: g,
          background: y,
          borderRadius: m,
          boxShadow: n,
          pointerEvents: 'all',
        },
        [`${t}-success > ${r}`]: { color: i },
        [`${t}-error > ${r}`]: { color: d },
        [`${t}-warning > ${r}`]: { color: a },
        [`${t}-info > ${r},
      ${t}-loading > ${r}`]: { color: s },
      }
    return [
      {
        [t]: Object.assign(Object.assign({}, Rt(e)), {
          color: o,
          position: 'fixed',
          top: u,
          width: '100%',
          pointerEvents: 'none',
          zIndex: h,
          [`${t}-move-up`]: { animationFillMode: 'forwards' },
          [`
        ${t}-move-up-appear,
        ${t}-move-up-enter
      `]: {
            animationName: x,
            animationDuration: p,
            animationPlayState: 'paused',
            animationTimingFunction: f,
          },
          [`
        ${t}-move-up-appear${t}-move-up-appear-active,
        ${t}-move-up-enter${t}-move-up-enter-active
      `]: { animationPlayState: 'running' },
          [`${t}-move-up-leave`]: {
            animationName: C,
            animationDuration: p,
            animationPlayState: 'paused',
            animationTimingFunction: f,
          },
          [`${t}-move-up-leave${t}-move-up-leave-active`]: {
            animationPlayState: 'running',
          },
          '&-rtl': { direction: 'rtl', span: { direction: 'rtl' } },
        }),
      },
      { [t]: { [`${b}-wrapper`]: Object.assign({}, S) } },
      {
        [`${t}-notice-pure-panel`]: Object.assign(Object.assign({}, S), {
          padding: 0,
          textAlign: 'start',
        }),
      },
    ]
  },
  ol = (e) => ({
    zIndexPopup: e.zIndexPopupBase + Ua + 10,
    contentBg: e.colorBgElevated,
    contentPadding: `${(e.controlHeightLG - e.fontSize * e.lineHeight) / 2}px ${e.paddingSM}px`,
  }),
  Yo = mn(
    'Message',
    (e) => {
      const t = gn(e, { height: 150 })
      return [rl(t)]
    },
    ol,
  )
var al = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const il = {
    info: l.createElement(Wi, null),
    success: l.createElement(ji, null),
    error: l.createElement(Xa, null),
    warning: l.createElement(_i, null),
    loading: l.createElement(Bo, null),
  },
  Qo = (e) => {
    let { prefixCls: t, type: r, icon: n, children: o } = e
    return l.createElement(
      'div',
      { className: X(`${t}-custom-content`, `${t}-${r}`) },
      n || il[r],
      l.createElement('span', null, o),
    )
  },
  ll = (e) => {
    const { prefixCls: t, className: r, type: n, icon: o, content: i } = e,
      d = al(e, ['prefixCls', 'className', 'type', 'icon', 'content']),
      { getPrefixCls: a } = l.useContext(ht),
      s = t || a('message'),
      c = hn(s),
      [f, p, u] = Yo(s, c)
    return f(
      l.createElement(
        Xo,
        Object.assign({}, d, {
          prefixCls: s,
          className: X(r, p, `${s}-notice-pure-panel`, u, c),
          eventKey: 'pure',
          duration: null,
          content: l.createElement(Qo, { prefixCls: s, type: n, icon: o }, i),
        }),
      ),
    )
  }
function sl(e, t) {
  return { motionName: t ?? `${e}-move-up` }
}
function hr(e) {
  let t
  const r = new Promise((o) => {
      t = e(() => {
        o(!0)
      })
    }),
    n = () => {
      t == null || t()
    }
  return (n.then = (o, i) => r.then(o, i)), (n.promise = r), n
}
var cl = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const dl = 8,
  ul = 3,
  fl = (e) => {
    let { children: t, prefixCls: r } = e
    const n = hn(r),
      [o, i, d] = Yo(r, n)
    return o(l.createElement(Xi, { classNames: { list: X(i, d, n) } }, t))
  },
  pl = (e, t) => {
    let { prefixCls: r, key: n } = t
    return l.createElement(fl, { prefixCls: r, key: n }, e)
  },
  vl = l.forwardRef((e, t) => {
    const {
        top: r,
        prefixCls: n,
        getContainer: o,
        maxCount: i,
        duration: d = ul,
        rtl: a,
        transitionName: s,
        onAllRemoved: c,
      } = e,
      {
        getPrefixCls: f,
        getPopupContainer: p,
        message: u,
        direction: v,
      } = l.useContext(ht),
      m = n || f('message'),
      h = () => ({ left: '50%', transform: 'translateX(-50%)', top: r ?? dl }),
      g = () => X({ [`${m}-rtl`]: a ?? v === 'rtl' }),
      y = () => sl(m, s),
      b = l.createElement(
        'span',
        { className: `${m}-close-x` },
        l.createElement(Ki, { className: `${m}-close-icon` }),
      ),
      [x, C] = nl({
        prefixCls: m,
        style: h,
        className: g,
        motion: y,
        closable: !1,
        closeIcon: b,
        duration: d,
        getContainer: () =>
          (o == null ? void 0 : o()) ||
          (p == null ? void 0 : p()) ||
          document.body,
        maxCount: i,
        onAllRemoved: c,
        renderNotifications: pl,
      })
    return (
      l.useImperativeHandle(t, () =>
        Object.assign(Object.assign({}, x), { prefixCls: m, message: u }),
      ),
      C
    )
  })
let Zr = 0
function Jo(e) {
  const t = l.useRef(null)
  return (
    Dn(),
    [
      l.useMemo(() => {
        const n = (s) => {
            var c
            ;(c = t.current) === null || c === void 0 || c.close(s)
          },
          o = (s) => {
            if (!t.current) {
              const $ = () => {}
              return ($.then = () => {}), $
            }
            const { open: c, prefixCls: f, message: p } = t.current,
              u = `${f}-notice`,
              {
                content: v,
                icon: m,
                type: h,
                key: g,
                className: y,
                style: b,
                onClose: x,
              } = s,
              C = cl(s, [
                'content',
                'icon',
                'type',
                'key',
                'className',
                'style',
                'onClose',
              ])
            let S = g
            return (
              S == null && ((Zr += 1), (S = `antd-message-${Zr}`)),
              hr(
                ($) => (
                  c(
                    Object.assign(Object.assign({}, C), {
                      key: S,
                      content: l.createElement(
                        Qo,
                        { prefixCls: f, type: h, icon: m },
                        v,
                      ),
                      placement: 'top',
                      className: X(
                        h && `${u}-${h}`,
                        y,
                        p == null ? void 0 : p.className,
                      ),
                      style: Object.assign(
                        Object.assign({}, p == null ? void 0 : p.style),
                        b,
                      ),
                      onClose: () => {
                        x == null || x(), $()
                      },
                    }),
                  ),
                  () => {
                    n(S)
                  }
                ),
              )
            )
          },
          d = {
            open: o,
            destroy: (s) => {
              var c
              s !== void 0
                ? n(s)
                : (c = t.current) === null || c === void 0 || c.destroy()
            },
          }
        return (
          ['info', 'success', 'warning', 'error', 'loading'].forEach((s) => {
            const c = (f, p, u) => {
              let v
              f && typeof f == 'object' && 'content' in f
                ? (v = f)
                : (v = { content: f })
              let m, h
              typeof p == 'function' ? (h = p) : ((m = p), (h = u))
              const g = Object.assign(
                Object.assign({ onClose: h, duration: m }, v),
                { type: s },
              )
              return o(g)
            }
            d[s] = c
          }),
          d
        )
      }, []),
      l.createElement(
        vl,
        Object.assign({ key: 'message-holder' }, e, { ref: t }),
      ),
    ]
  )
}
function ml(e) {
  return Jo(e)
}
const gl = J.createContext({}),
  hl = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
  yl = (e) => ({
    xs: `(max-width: ${e.screenXSMax}px)`,
    sm: `(min-width: ${e.screenSM}px)`,
    md: `(min-width: ${e.screenMD}px)`,
    lg: `(min-width: ${e.screenLG}px)`,
    xl: `(min-width: ${e.screenXL}px)`,
    xxl: `(min-width: ${e.screenXXL}px)`,
  }),
  bl = (e) => {
    const t = e,
      r = [].concat(hl).reverse()
    return (
      r.forEach((n, o) => {
        const i = n.toUpperCase(),
          d = `screen${i}Min`,
          a = `screen${i}`
        if (!(t[d] <= t[a]))
          throw new Error(`${d}<=${a} fails : !(${t[d]}<=${t[a]})`)
        if (o < r.length - 1) {
          const s = `screen${i}Max`
          if (!(t[a] <= t[s]))
            throw new Error(`${a}<=${s} fails : !(${t[a]}<=${t[s]})`)
          const f = `screen${r[o + 1].toUpperCase()}Min`
          if (!(t[s] <= t[f]))
            throw new Error(`${s}<=${f} fails : !(${t[s]}<=${t[f]})`)
        }
      }),
      e
    )
  }
function xl() {
  const [, e] = Mn(),
    t = yl(bl(e))
  return J.useMemo(() => {
    const r = new Map()
    let n = -1,
      o = {}
    return {
      matchHandlers: {},
      dispatch(i) {
        return (o = i), r.forEach((d) => d(o)), r.size >= 1
      },
      subscribe(i) {
        return r.size || this.register(), (n += 1), r.set(n, i), i(o), n
      },
      unsubscribe(i) {
        r.delete(i), r.size || this.unregister()
      },
      unregister() {
        Object.keys(t).forEach((i) => {
          const d = t[i],
            a = this.matchHandlers[d]
          a == null || a.mql.removeListener(a == null ? void 0 : a.listener)
        }),
          r.clear()
      },
      register() {
        Object.keys(t).forEach((i) => {
          const d = t[i],
            a = (c) => {
              let { matches: f } = c
              this.dispatch(Object.assign(Object.assign({}, o), { [i]: f }))
            },
            s = window.matchMedia(d)
          s.addListener(a),
            (this.matchHandlers[d] = { mql: s, listener: a }),
            a(s)
        })
      },
      responsiveMap: t,
    }
  }, [e])
}
function Zo() {
  const [, e] = l.useReducer((t) => t + 1, 0)
  return e
}
function ea() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0
  const t = l.useRef({}),
    r = Zo(),
    n = xl()
  return (
    Ht(() => {
      const o = n.subscribe((i) => {
        ;(t.current = i), e && r()
      })
      return () => n.unsubscribe(o)
    }, []),
    t.current
  )
}
const ta = l.createContext(null),
  Cl = ta.Provider,
  na = l.createContext(null),
  Sl = na.Provider,
  El = (e) => {
    const { componentCls: t, antCls: r } = e,
      n = `${t}-group`
    return {
      [n]: Object.assign(Object.assign({}, Rt(e)), {
        display: 'inline-block',
        fontSize: 0,
        [`&${n}-rtl`]: { direction: 'rtl' },
        [`&${n}-block`]: { display: 'flex' },
        [`${r}-badge ${r}-badge-count`]: { zIndex: 1 },
        [`> ${r}-badge:not(:first-child) > ${r}-button-wrapper`]: {
          borderInlineStart: 'none',
        },
      }),
    }
  },
  $l = (e) => {
    const {
        componentCls: t,
        wrapperMarginInlineEnd: r,
        colorPrimary: n,
        radioSize: o,
        motionDurationSlow: i,
        motionDurationMid: d,
        motionEaseInOutCirc: a,
        colorBgContainer: s,
        colorBorder: c,
        lineWidth: f,
        colorBgContainerDisabled: p,
        colorTextDisabled: u,
        paddingXS: v,
        dotColorDisabled: m,
        lineType: h,
        radioColor: g,
        radioBgColor: y,
        calc: b,
      } = e,
      x = `${t}-inner`,
      S = b(o).sub(b(4).mul(2)),
      $ = b(1).mul(o).equal({ unit: !0 })
    return {
      [`${t}-wrapper`]: Object.assign(Object.assign({}, Rt(e)), {
        display: 'inline-flex',
        alignItems: 'baseline',
        marginInlineStart: 0,
        marginInlineEnd: r,
        cursor: 'pointer',
        [`&${t}-wrapper-rtl`]: { direction: 'rtl' },
        '&-disabled': { cursor: 'not-allowed', color: e.colorTextDisabled },
        '&::after': {
          display: 'inline-block',
          width: 0,
          overflow: 'hidden',
          content: '"\\a0"',
        },
        '&-block': { flex: 1, justifyContent: 'center' },
        [`${t}-checked::after`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          width: '100%',
          height: '100%',
          border: `${j(f)} ${h} ${n}`,
          borderRadius: '50%',
          visibility: 'hidden',
          opacity: 0,
          content: '""',
        },
        [t]: Object.assign(Object.assign({}, Rt(e)), {
          position: 'relative',
          display: 'inline-block',
          outline: 'none',
          cursor: 'pointer',
          alignSelf: 'center',
          borderRadius: '50%',
        }),
        [`${t}-wrapper:hover &,
        &:hover ${x}`]: { borderColor: n },
        [`${t}-input:focus-visible + ${x}`]: Object.assign({}, un(e)),
        [`${t}:hover::after, ${t}-wrapper:hover &::after`]: {
          visibility: 'visible',
        },
        [`${t}-inner`]: {
          '&::after': {
            boxSizing: 'border-box',
            position: 'absolute',
            insetBlockStart: '50%',
            insetInlineStart: '50%',
            display: 'block',
            width: $,
            height: $,
            marginBlockStart: b(1).mul(o).div(-2).equal({ unit: !0 }),
            marginInlineStart: b(1).mul(o).div(-2).equal({ unit: !0 }),
            backgroundColor: g,
            borderBlockStart: 0,
            borderInlineStart: 0,
            borderRadius: $,
            transform: 'scale(0)',
            opacity: 0,
            transition: `all ${i} ${a}`,
            content: '""',
          },
          boxSizing: 'border-box',
          position: 'relative',
          insetBlockStart: 0,
          insetInlineStart: 0,
          display: 'block',
          width: $,
          height: $,
          backgroundColor: s,
          borderColor: c,
          borderStyle: 'solid',
          borderWidth: f,
          borderRadius: '50%',
          transition: `all ${d}`,
        },
        [`${t}-input`]: {
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          cursor: 'pointer',
          opacity: 0,
        },
        [`${t}-checked`]: {
          [x]: {
            borderColor: n,
            backgroundColor: y,
            '&::after': {
              transform: `scale(${e.calc(e.dotSize).div(o).equal()})`,
              opacity: 1,
              transition: `all ${i} ${a}`,
            },
          },
        },
        [`${t}-disabled`]: {
          cursor: 'not-allowed',
          [x]: {
            backgroundColor: p,
            borderColor: c,
            cursor: 'not-allowed',
            '&::after': { backgroundColor: m },
          },
          [`${t}-input`]: { cursor: 'not-allowed' },
          [`${t}-disabled + span`]: { color: u, cursor: 'not-allowed' },
          [`&${t}-checked`]: {
            [x]: { '&::after': { transform: `scale(${b(S).div(o).equal()})` } },
          },
        },
        [`span${t} + *`]: { paddingInlineStart: v, paddingInlineEnd: v },
      }),
    }
  },
  wl = (e) => {
    const {
      buttonColor: t,
      controlHeight: r,
      componentCls: n,
      lineWidth: o,
      lineType: i,
      colorBorder: d,
      motionDurationSlow: a,
      motionDurationMid: s,
      buttonPaddingInline: c,
      fontSize: f,
      buttonBg: p,
      fontSizeLG: u,
      controlHeightLG: v,
      controlHeightSM: m,
      paddingXS: h,
      borderRadius: g,
      borderRadiusSM: y,
      borderRadiusLG: b,
      buttonCheckedBg: x,
      buttonSolidCheckedColor: C,
      colorTextDisabled: S,
      colorBgContainerDisabled: $,
      buttonCheckedBgDisabled: R,
      buttonCheckedColorDisabled: w,
      colorPrimary: E,
      colorPrimaryHover: N,
      colorPrimaryActive: k,
      buttonSolidCheckedBg: I,
      buttonSolidCheckedHoverBg: O,
      buttonSolidCheckedActiveBg: P,
      calc: K,
    } = e
    return {
      [`${n}-button-wrapper`]: {
        position: 'relative',
        display: 'inline-block',
        height: r,
        margin: 0,
        paddingInline: c,
        paddingBlock: 0,
        color: t,
        fontSize: f,
        lineHeight: j(K(r).sub(K(o).mul(2)).equal()),
        background: p,
        border: `${j(o)} ${i} ${d}`,
        borderBlockStartWidth: K(o).add(0.02).equal(),
        borderInlineStartWidth: 0,
        borderInlineEndWidth: o,
        cursor: 'pointer',
        transition: [`color ${s}`, `background ${s}`, `box-shadow ${s}`].join(
          ',',
        ),
        a: { color: t },
        [`> ${n}-button`]: {
          position: 'absolute',
          insetBlockStart: 0,
          insetInlineStart: 0,
          zIndex: -1,
          width: '100%',
          height: '100%',
        },
        '&:not(:first-child)': {
          '&::before': {
            position: 'absolute',
            insetBlockStart: K(o).mul(-1).equal(),
            insetInlineStart: K(o).mul(-1).equal(),
            display: 'block',
            boxSizing: 'content-box',
            width: 1,
            height: '100%',
            paddingBlock: o,
            paddingInline: 0,
            backgroundColor: d,
            transition: `background-color ${a}`,
            content: '""',
          },
        },
        '&:first-child': {
          borderInlineStart: `${j(o)} ${i} ${d}`,
          borderStartStartRadius: g,
          borderEndStartRadius: g,
        },
        '&:last-child': { borderStartEndRadius: g, borderEndEndRadius: g },
        '&:first-child:last-child': { borderRadius: g },
        [`${n}-group-large &`]: {
          height: v,
          fontSize: u,
          lineHeight: j(K(v).sub(K(o).mul(2)).equal()),
          '&:first-child': {
            borderStartStartRadius: b,
            borderEndStartRadius: b,
          },
          '&:last-child': { borderStartEndRadius: b, borderEndEndRadius: b },
        },
        [`${n}-group-small &`]: {
          height: m,
          paddingInline: K(h).sub(o).equal(),
          paddingBlock: 0,
          lineHeight: j(K(m).sub(K(o).mul(2)).equal()),
          '&:first-child': {
            borderStartStartRadius: y,
            borderEndStartRadius: y,
          },
          '&:last-child': { borderStartEndRadius: y, borderEndEndRadius: y },
        },
        '&:hover': { position: 'relative', color: E },
        '&:has(:focus-visible)': Object.assign({}, un(e)),
        [`${n}-inner, input[type='checkbox'], input[type='radio']`]: {
          width: 0,
          height: 0,
          opacity: 0,
          pointerEvents: 'none',
        },
        [`&-checked:not(${n}-button-wrapper-disabled)`]: {
          zIndex: 1,
          color: E,
          background: x,
          borderColor: E,
          '&::before': { backgroundColor: E },
          '&:first-child': { borderColor: E },
          '&:hover': {
            color: N,
            borderColor: N,
            '&::before': { backgroundColor: N },
          },
          '&:active': {
            color: k,
            borderColor: k,
            '&::before': { backgroundColor: k },
          },
        },
        [`${n}-group-solid &-checked:not(${n}-button-wrapper-disabled)`]: {
          color: C,
          background: I,
          borderColor: I,
          '&:hover': { color: C, background: O, borderColor: O },
          '&:active': { color: C, background: P, borderColor: P },
        },
        '&-disabled': {
          color: S,
          backgroundColor: $,
          borderColor: d,
          cursor: 'not-allowed',
          '&:first-child, &:hover': {
            color: S,
            backgroundColor: $,
            borderColor: d,
          },
        },
        [`&-disabled${n}-button-wrapper-checked`]: {
          color: w,
          backgroundColor: R,
          borderColor: d,
          boxShadow: 'none',
        },
        '&-block': { flex: 1, textAlign: 'center' },
      },
    }
  },
  Nl = (e) => {
    const {
        wireframe: t,
        padding: r,
        marginXS: n,
        lineWidth: o,
        fontSizeLG: i,
        colorText: d,
        colorBgContainer: a,
        colorTextDisabled: s,
        controlItemBgActiveDisabled: c,
        colorTextLightSolid: f,
        colorPrimary: p,
        colorPrimaryHover: u,
        colorPrimaryActive: v,
        colorWhite: m,
      } = e,
      h = 4,
      g = i,
      y = t ? g - h * 2 : g - (h + o) * 2
    return {
      radioSize: g,
      dotSize: y,
      dotColorDisabled: s,
      buttonSolidCheckedColor: f,
      buttonSolidCheckedBg: p,
      buttonSolidCheckedHoverBg: u,
      buttonSolidCheckedActiveBg: v,
      buttonBg: a,
      buttonCheckedBg: a,
      buttonColor: d,
      buttonCheckedBgDisabled: c,
      buttonCheckedColorDisabled: s,
      buttonPaddingInline: r - o,
      wrapperMarginInlineEnd: n,
      radioColor: t ? p : m,
      radioBgColor: t ? a : p,
    }
  },
  ra = mn(
    'Radio',
    (e) => {
      const { controlOutline: t, controlOutlineWidth: r } = e,
        n = `0 0 0 ${j(r)} ${t}`,
        i = gn(e, { radioFocusShadow: n, radioButtonFocusShadow: n })
      return [El(i), $l(i), wl(i)]
    },
    Nl,
    { unitless: { radioSize: !0, dotSize: !0 } },
  )
var kl = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const Rl = (e, t) => {
    var r, n
    const o = l.useContext(ta),
      i = l.useContext(na),
      { getPrefixCls: d, direction: a, radio: s } = l.useContext(ht),
      c = l.useRef(null),
      f = Ga(t, c),
      { isFormItemInput: p } = l.useContext(Ya),
      u = (P) => {
        var K, D
        ;(K = e.onChange) === null || K === void 0 || K.call(e, P),
          (D = o == null ? void 0 : o.onChange) === null ||
            D === void 0 ||
            D.call(o, P)
      },
      {
        prefixCls: v,
        className: m,
        rootClassName: h,
        children: g,
        style: y,
        title: b,
      } = e,
      x = kl(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'children',
        'style',
        'title',
      ]),
      C = d('radio', v),
      S = ((o == null ? void 0 : o.optionType) || i) === 'button',
      $ = S ? `${C}-button` : C,
      R = hn(C),
      [w, E, N] = ra(C, R),
      k = Object.assign({}, x),
      I = l.useContext(Qa)
    o &&
      ((k.name = o.name),
      (k.onChange = u),
      (k.checked = e.value === o.value),
      (k.disabled =
        (r = k.disabled) !== null && r !== void 0 ? r : o.disabled)),
      (k.disabled = (n = k.disabled) !== null && n !== void 0 ? n : I)
    const O = X(
      `${$}-wrapper`,
      {
        [`${$}-wrapper-checked`]: k.checked,
        [`${$}-wrapper-disabled`]: k.disabled,
        [`${$}-wrapper-rtl`]: a === 'rtl',
        [`${$}-wrapper-in-form-item`]: p,
        [`${$}-wrapper-block`]: !!(o != null && o.block),
      },
      s == null ? void 0 : s.className,
      m,
      h,
      E,
      N,
      R,
    )
    return w(
      l.createElement(
        Ja,
        { component: 'Radio', disabled: k.disabled },
        l.createElement(
          'label',
          {
            className: O,
            style: Object.assign(
              Object.assign({}, s == null ? void 0 : s.style),
              y,
            ),
            onMouseEnter: e.onMouseEnter,
            onMouseLeave: e.onMouseLeave,
            title: b,
          },
          l.createElement(
            Za,
            Object.assign({}, k, {
              className: X(k.className, { [ei]: !S }),
              type: 'radio',
              prefixCls: $,
              ref: f,
            }),
          ),
          g !== void 0 ? l.createElement('span', null, g) : null,
        ),
      ),
    )
  },
  Kn = l.forwardRef(Rl),
  Il = l.forwardRef((e, t) => {
    const { getPrefixCls: r, direction: n } = l.useContext(ht),
      {
        prefixCls: o,
        className: i,
        rootClassName: d,
        options: a,
        buttonStyle: s = 'outline',
        disabled: c,
        children: f,
        size: p,
        style: u,
        id: v,
        optionType: m,
        name: h,
        defaultValue: g,
        value: y,
        block: b = !1,
        onChange: x,
        onMouseEnter: C,
        onMouseLeave: S,
        onFocus: $,
        onBlur: R,
      } = e,
      [w, E] = Rn(g, { value: y }),
      N = l.useCallback(
        (z) => {
          const oe = w,
            Z = z.target.value
          'value' in e || E(Z), Z !== oe && (x == null || x(z))
        },
        [w, E, x],
      ),
      k = r('radio', o),
      I = `${k}-group`,
      O = hn(k),
      [P, K, D] = ra(k, O)
    let L = f
    a &&
      a.length > 0 &&
      (L = a.map((z) =>
        typeof z == 'string' || typeof z == 'number'
          ? l.createElement(
              Kn,
              {
                key: z.toString(),
                prefixCls: k,
                disabled: c,
                value: z,
                checked: w === z,
              },
              z,
            )
          : l.createElement(
              Kn,
              {
                key: `radio-group-value-options-${z.value}`,
                prefixCls: k,
                disabled: z.disabled || c,
                value: z.value,
                checked: w === z.value,
                title: z.title,
                style: z.style,
                id: z.id,
                required: z.required,
              },
              z.label,
            ),
      ))
    const B = vr(p),
      M = X(
        I,
        `${I}-${s}`,
        { [`${I}-${B}`]: B, [`${I}-rtl`]: n === 'rtl', [`${I}-block`]: b },
        i,
        d,
        K,
        D,
        O,
      ),
      U = l.useMemo(
        () => ({
          onChange: N,
          value: w,
          disabled: c,
          name: h,
          optionType: m,
          block: b,
        }),
        [N, w, c, h, m, b],
      )
    return P(
      l.createElement(
        'div',
        Object.assign({}, _t(e, { aria: !0, data: !0 }), {
          className: M,
          style: u,
          onMouseEnter: C,
          onMouseLeave: S,
          onFocus: $,
          onBlur: R,
          id: v,
          ref: t,
        }),
        l.createElement(Cl, { value: U }, L),
      ),
    )
  }),
  Ol = l.memo(Il)
var Pl = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const Kl = (e, t) => {
    const { getPrefixCls: r } = l.useContext(ht),
      { prefixCls: n } = e,
      o = Pl(e, ['prefixCls']),
      i = r('radio', n)
    return l.createElement(
      Sl,
      { value: 'button' },
      l.createElement(
        Kn,
        Object.assign({ prefixCls: i }, o, { type: 'radio', ref: t }),
      ),
    )
  },
  Tl = l.forwardRef(Kl),
  yn = Kn
yn.Button = Tl
yn.Group = Ol
yn.__ANT_RADIO = !0
function ct(e, t) {
  return e[t]
}
var Dl = ['children']
function oa(e, t) {
  return ''.concat(e, '-').concat(t)
}
function Ml(e) {
  return e && e.type && e.type.isTreeNode
}
function bn(e, t) {
  return e ?? t
}
function Xt(e) {
  var t = e || {},
    r = t.title,
    n = t._title,
    o = t.key,
    i = t.children,
    d = r || 'title'
  return {
    title: d,
    _title: n || [d],
    key: o || 'key',
    children: i || 'children',
  }
}
function aa(e) {
  function t(r) {
    var n = Lo(r)
    return n
      .map(function (o) {
        if (!Ml(o))
          return (
            kt(!o, 'Tree/TreeNode can only accept TreeNode as children.'), null
          )
        var i = o.key,
          d = o.props,
          a = d.children,
          s = ut(d, Dl),
          c = H({ key: i }, s),
          f = t(a)
        return f.length && (c.children = f), c
      })
      .filter(function (o) {
        return o
      })
  }
  return t(e)
}
function Un(e, t, r) {
  var n = Xt(r),
    o = n._title,
    i = n.key,
    d = n.children,
    a = new Set(t === !0 ? [] : t),
    s = []
  function c(f) {
    var p =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null
    return f.map(function (u, v) {
      for (
        var m = oa(p ? p.pos : '0', v), h = bn(u[i], m), g, y = 0;
        y < o.length;
        y += 1
      ) {
        var b = o[y]
        if (u[b] !== void 0) {
          g = u[b]
          break
        }
      }
      var x = Object.assign(jo(u, [].concat(ve(o), [i, d])), {
        title: g,
        key: h,
        parent: p,
        pos: m,
        children: null,
        data: u,
        isStart: [].concat(ve(p ? p.isStart : []), [v === 0]),
        isEnd: [].concat(ve(p ? p.isEnd : []), [v === f.length - 1]),
      })
      return (
        s.push(x),
        t === !0 || a.has(h)
          ? (x.children = c(u[d] || [], x))
          : (x.children = []),
        x
      )
    })
  }
  return c(e), s
}
function Bl(e, t, r) {
  var n = {}
  rt(r) === 'object' ? (n = r) : (n = { externalGetKey: r }), (n = n || {})
  var o = n,
    i = o.childrenPropName,
    d = o.externalGetKey,
    a = o.fieldNames,
    s = Xt(a),
    c = s.key,
    f = s.children,
    p = i || f,
    u
  d
    ? typeof d == 'string'
      ? (u = function (h) {
          return h[d]
        })
      : typeof d == 'function' &&
        (u = function (h) {
          return d(h)
        })
    : (u = function (h, g) {
        return bn(h[c], g)
      })
  function v(m, h, g, y) {
    var b = m ? m[p] : e,
      x = m ? oa(g.pos, h) : '0',
      C = m ? [].concat(ve(y), [m]) : []
    if (m) {
      var S = u(m, x),
        $ = {
          node: m,
          index: h,
          pos: x,
          key: S,
          parentPos: g.node ? g.pos : null,
          level: g.level + 1,
          nodes: C,
        }
      t($)
    }
    b &&
      b.forEach(function (R, w) {
        v(R, w, { node: m, pos: x, level: g ? g.level + 1 : -1 }, C)
      })
  }
  v(null)
}
function yr(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = t.initWrapper,
    n = t.processEntity,
    o = t.onProcessFinished,
    i = t.externalGetKey,
    d = t.childrenPropName,
    a = t.fieldNames,
    s = arguments.length > 2 ? arguments[2] : void 0,
    c = i || s,
    f = {},
    p = {},
    u = { posEntities: f, keyEntities: p }
  return (
    r && (u = r(u) || u),
    Bl(
      e,
      function (v) {
        var m = v.node,
          h = v.index,
          g = v.pos,
          y = v.key,
          b = v.parentPos,
          x = v.level,
          C = v.nodes,
          S = { node: m, nodes: C, index: h, key: y, pos: g, level: x },
          $ = bn(y, g)
        ;(f[g] = S),
          (p[$] = S),
          (S.parent = f[b]),
          S.parent &&
            ((S.parent.children = S.parent.children || []),
            S.parent.children.push(S)),
          n && n(S, u)
      },
      { externalGetKey: c, childrenPropName: d, fieldNames: a },
    ),
    o && o(u),
    u
  )
}
function cn(e, t) {
  var r = t.expandedKeys,
    n = t.selectedKeys,
    o = t.loadedKeys,
    i = t.loadingKeys,
    d = t.checkedKeys,
    a = t.halfCheckedKeys,
    s = t.dragOverNodeKey,
    c = t.dropPosition,
    f = t.keyEntities,
    p = ct(f, e),
    u = {
      eventKey: e,
      expanded: r.indexOf(e) !== -1,
      selected: n.indexOf(e) !== -1,
      loaded: o.indexOf(e) !== -1,
      loading: i.indexOf(e) !== -1,
      checked: d.indexOf(e) !== -1,
      halfChecked: a.indexOf(e) !== -1,
      pos: String(p ? p.pos : ''),
      dragOver: s === e && c === 0,
      dragOverGapTop: s === e && c === -1,
      dragOverGapBottom: s === e && c === 1,
    }
  return u
}
function Fe(e) {
  var t = e.data,
    r = e.expanded,
    n = e.selected,
    o = e.checked,
    i = e.loaded,
    d = e.loading,
    a = e.halfChecked,
    s = e.dragOver,
    c = e.dragOverGapTop,
    f = e.dragOverGapBottom,
    p = e.pos,
    u = e.active,
    v = e.eventKey,
    m = H(
      H({}, t),
      {},
      {
        expanded: r,
        selected: n,
        checked: o,
        loaded: i,
        loading: d,
        halfChecked: a,
        dragOver: s,
        dragOverGapTop: c,
        dragOverGapBottom: f,
        pos: p,
        active: u,
        key: v,
      },
    )
  return (
    'props' in m ||
      Object.defineProperty(m, 'props', {
        get: function () {
          return (
            kt(
              !1,
              'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.',
            ),
            e
          )
        },
      }),
    m
  )
}
function ia(e, t) {
  var r = new Set()
  return (
    e.forEach(function (n) {
      t.has(n) || r.add(n)
    }),
    r
  )
}
function Ll(e) {
  var t = e || {},
    r = t.disabled,
    n = t.disableCheckbox,
    o = t.checkable
  return !!(r || n) || o === !1
}
function jl(e, t, r, n) {
  for (var o = new Set(e), i = new Set(), d = 0; d <= r; d += 1) {
    var a = t.get(d) || new Set()
    a.forEach(function (p) {
      var u = p.key,
        v = p.node,
        m = p.children,
        h = m === void 0 ? [] : m
      o.has(u) &&
        !n(v) &&
        h
          .filter(function (g) {
            return !n(g.node)
          })
          .forEach(function (g) {
            o.add(g.key)
          })
    })
  }
  for (var s = new Set(), c = r; c >= 0; c -= 1) {
    var f = t.get(c) || new Set()
    f.forEach(function (p) {
      var u = p.parent,
        v = p.node
      if (!(n(v) || !p.parent || s.has(p.parent.key))) {
        if (n(p.parent.node)) {
          s.add(u.key)
          return
        }
        var m = !0,
          h = !1
        ;(u.children || [])
          .filter(function (g) {
            return !n(g.node)
          })
          .forEach(function (g) {
            var y = g.key,
              b = o.has(y)
            m && !b && (m = !1), !h && (b || i.has(y)) && (h = !0)
          }),
          m && o.add(u.key),
          h && i.add(u.key),
          s.add(u.key)
      }
    })
  }
  return { checkedKeys: Array.from(o), halfCheckedKeys: Array.from(ia(i, o)) }
}
function zl(e, t, r, n, o) {
  for (var i = new Set(e), d = new Set(t), a = 0; a <= n; a += 1) {
    var s = r.get(a) || new Set()
    s.forEach(function (u) {
      var v = u.key,
        m = u.node,
        h = u.children,
        g = h === void 0 ? [] : h
      !i.has(v) &&
        !d.has(v) &&
        !o(m) &&
        g
          .filter(function (y) {
            return !o(y.node)
          })
          .forEach(function (y) {
            i.delete(y.key)
          })
    })
  }
  d = new Set()
  for (var c = new Set(), f = n; f >= 0; f -= 1) {
    var p = r.get(f) || new Set()
    p.forEach(function (u) {
      var v = u.parent,
        m = u.node
      if (!(o(m) || !u.parent || c.has(u.parent.key))) {
        if (o(u.parent.node)) {
          c.add(v.key)
          return
        }
        var h = !0,
          g = !1
        ;(v.children || [])
          .filter(function (y) {
            return !o(y.node)
          })
          .forEach(function (y) {
            var b = y.key,
              x = i.has(b)
            h && !x && (h = !1), !g && (x || d.has(b)) && (g = !0)
          }),
          h || i.delete(v.key),
          g && d.add(v.key),
          c.add(v.key)
      }
    })
  }
  return { checkedKeys: Array.from(i), halfCheckedKeys: Array.from(ia(d, i)) }
}
function Vt(e, t, r, n) {
  var o = [],
    i
  n ? (i = n) : (i = Ll)
  var d = new Set(
      e.filter(function (f) {
        var p = !!ct(r, f)
        return p || o.push(f), p
      }),
    ),
    a = new Map(),
    s = 0
  Object.keys(r).forEach(function (f) {
    var p = r[f],
      u = p.level,
      v = a.get(u)
    v || ((v = new Set()), a.set(u, v)), v.add(p), (s = Math.max(s, u))
  }),
    kt(
      !o.length,
      'Tree missing follow keys: '.concat(
        o
          .slice(0, 100)
          .map(function (f) {
            return "'".concat(f, "'")
          })
          .join(', '),
      ),
    )
  var c
  return (
    t === !0 ? (c = jl(d, a, s, i)) : (c = zl(d, t.halfCheckedKeys, a, s, i)), c
  )
}
function eo(e) {
  var t = e.getBoundingClientRect(),
    r = document.documentElement
  return {
    left:
      t.left +
      (window.pageXOffset || r.scrollLeft) -
      (r.clientLeft || document.body.clientLeft || 0),
    top:
      t.top +
      (window.pageYOffset || r.scrollTop) -
      (r.clientTop || document.body.clientTop || 0),
  }
}
function Sn(e, t, r, n) {
  var o = jr.unstable_batchedUpdates
    ? function (d) {
        jr.unstable_batchedUpdates(r, d)
      }
    : r
  return (
    e != null && e.addEventListener && e.addEventListener(t, o, n),
    {
      remove: function () {
        e != null && e.removeEventListener && e.removeEventListener(t, o, n)
      },
    }
  )
}
const Hl = function () {
  const e = Object.assign({}, arguments.length <= 0 ? void 0 : arguments[0])
  for (let t = 1; t < arguments.length; t++) {
    const r = t < 0 || arguments.length <= t ? void 0 : arguments[t]
    r &&
      Object.keys(r).forEach((n) => {
        const o = r[n]
        o !== void 0 && (e[n] = o)
      })
  }
  return e
}
var _l = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M272.9 512l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L186.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H532c6.7 0 10.4-7.7 6.3-12.9L272.9 512zm304 0l265.4-339.1c4.1-5.2.4-12.9-6.3-12.9h-77.3c-4.9 0-9.6 2.3-12.6 6.1L490.8 492.3a31.99 31.99 0 000 39.5l255.3 326.1c3 3.9 7.7 6.1 12.6 6.1H836c6.7 0 10.4-7.7 6.3-12.9L576.9 512z',
          },
        },
      ],
    },
    name: 'double-left',
    theme: 'outlined',
  },
  Al = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: _l }))
  },
  to = l.forwardRef(Al),
  Fl = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M533.2 492.3L277.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H188c-6.7 0-10.4 7.7-6.3 12.9L447.1 512 181.7 851.1A7.98 7.98 0 00188 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5zm304 0L581.9 166.1c-3-3.9-7.7-6.1-12.6-6.1H492c-6.7 0-10.4 7.7-6.3 12.9L751.1 512 485.7 851.1A7.98 7.98 0 00492 864h77.3c4.9 0 9.6-2.3 12.6-6.1l255.3-326.1c9.1-11.7 9.1-27.9 0-39.5z',
          },
        },
      ],
    },
    name: 'double-right',
    theme: 'outlined',
  },
  Wl = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: Fl }))
  },
  no = l.forwardRef(Wl),
  ql = {
    items_per_page: '条/页',
    jump_to: '跳至',
    jump_to_confirm: '确定',
    page: '页',
    prev_page: '上一页',
    next_page: '下一页',
    prev_5: '向前 5 页',
    next_5: '向后 5 页',
    prev_3: '向前 3 页',
    next_3: '向后 3 页',
    page_size: '页码',
  },
  Vl = ['10', '20', '50', '100'],
  Ul = function (t) {
    var r = t.pageSizeOptions,
      n = r === void 0 ? Vl : r,
      o = t.locale,
      i = t.changeSize,
      d = t.pageSize,
      a = t.goButton,
      s = t.quickGo,
      c = t.rootPrefixCls,
      f = t.selectComponentClass,
      p = t.selectPrefixCls,
      u = t.disabled,
      v = t.buildOptionText,
      m = t.showSizeChanger,
      h = J.useState(''),
      g = ue(h, 2),
      y = g[0],
      b = g[1],
      x = function () {
        return !y || Number.isNaN(y) ? void 0 : Number(y)
      },
      C =
        typeof v == 'function'
          ? v
          : function (B) {
              return ''.concat(B, ' ').concat(o.items_per_page)
            },
      S = function (M, U) {
        if ((i == null || i(Number(M)), rt(m) === 'object')) {
          var z
          ;(z = m.onChange) === null || z === void 0 || z.call(m, M, U)
        }
      },
      $ = function (M) {
        b(M.target.value)
      },
      R = function (M) {
        a ||
          y === '' ||
          (b(''),
          !(
            M.relatedTarget &&
            (M.relatedTarget.className.indexOf(''.concat(c, '-item-link')) >=
              0 ||
              M.relatedTarget.className.indexOf(''.concat(c, '-item')) >= 0)
          ) &&
            (s == null || s(x())))
      },
      w = function (M) {
        y !== '' &&
          (M.keyCode === Ge.ENTER || M.type === 'click') &&
          (b(''), s == null || s(x()))
      },
      E = function () {
        return n.some(function (M) {
          return M.toString() === d.toString()
        })
          ? n
          : n.concat([d.toString()]).sort(function (M, U) {
              var z = Number.isNaN(Number(M)) ? 0 : Number(M),
                oe = Number.isNaN(Number(U)) ? 0 : Number(U)
              return z - oe
            })
      },
      N = ''.concat(c, '-options')
    if (!m && !s) return null
    var k = null,
      I = null,
      O = null
    if (m && f) {
      var P = rt(m) === 'object' ? m : {},
        K = P.options,
        D = P.className,
        L = K
          ? void 0
          : E().map(function (B, M) {
              return J.createElement(
                f.Option,
                { key: M, value: B.toString() },
                C(B),
              )
            })
      k = J.createElement(
        f,
        re(
          {
            disabled: u,
            prefixCls: p,
            showSearch: !1,
            optionLabelProp: K ? 'label' : 'children',
            popupMatchSelectWidth: !1,
            value: (d || n[0]).toString(),
            getPopupContainer: function (M) {
              return M.parentNode
            },
            'aria-label': o.page_size,
            defaultOpen: !1,
          },
          rt(m) === 'object' ? m : null,
          {
            className: X(''.concat(N, '-size-changer'), D),
            options: K,
            onChange: S,
          },
        ),
        L,
      )
    }
    return (
      s &&
        (a &&
          (O =
            typeof a == 'boolean'
              ? J.createElement(
                  'button',
                  {
                    type: 'button',
                    onClick: w,
                    onKeyUp: w,
                    disabled: u,
                    className: ''.concat(N, '-quick-jumper-button'),
                  },
                  o.jump_to_confirm,
                )
              : J.createElement('span', { onClick: w, onKeyUp: w }, a)),
        (I = J.createElement(
          'div',
          { className: ''.concat(N, '-quick-jumper') },
          o.jump_to,
          J.createElement('input', {
            disabled: u,
            type: 'text',
            value: y,
            onChange: $,
            onKeyUp: w,
            onBlur: R,
            'aria-label': o.page,
          }),
          o.page,
          O,
        ))),
      J.createElement('li', { className: N }, k, I)
    )
  },
  sn = function (t) {
    var r = t.rootPrefixCls,
      n = t.page,
      o = t.active,
      i = t.className,
      d = t.showTitle,
      a = t.onClick,
      s = t.onKeyPress,
      c = t.itemRender,
      f = ''.concat(r, '-item'),
      p = X(
        f,
        ''.concat(f, '-').concat(n),
        T(T({}, ''.concat(f, '-active'), o), ''.concat(f, '-disabled'), !n),
        i,
      ),
      u = function () {
        a(n)
      },
      v = function (g) {
        s(g, a, n)
      },
      m = c(n, 'page', J.createElement('a', { rel: 'nofollow' }, n))
    return m
      ? J.createElement(
          'li',
          {
            title: d ? String(n) : null,
            className: p,
            onClick: u,
            onKeyDown: v,
            tabIndex: 0,
          },
          m,
        )
      : null
  },
  Xl = function (t, r, n) {
    return n
  }
function ro() {}
function oo(e) {
  var t = Number(e)
  return (
    typeof t == 'number' &&
    !Number.isNaN(t) &&
    isFinite(t) &&
    Math.floor(t) === t
  )
}
function jt(e, t, r) {
  var n = typeof e > 'u' ? t : e
  return Math.floor((r - 1) / n) + 1
}
var Gl = function (t) {
  var r = t.prefixCls,
    n = r === void 0 ? 'rc-pagination' : r,
    o = t.selectPrefixCls,
    i = o === void 0 ? 'rc-select' : o,
    d = t.className,
    a = t.selectComponentClass,
    s = t.current,
    c = t.defaultCurrent,
    f = c === void 0 ? 1 : c,
    p = t.total,
    u = p === void 0 ? 0 : p,
    v = t.pageSize,
    m = t.defaultPageSize,
    h = m === void 0 ? 10 : m,
    g = t.onChange,
    y = g === void 0 ? ro : g,
    b = t.hideOnSinglePage,
    x = t.align,
    C = t.showPrevNextJumpers,
    S = C === void 0 ? !0 : C,
    $ = t.showQuickJumper,
    R = t.showLessItems,
    w = t.showTitle,
    E = w === void 0 ? !0 : w,
    N = t.onShowSizeChange,
    k = N === void 0 ? ro : N,
    I = t.locale,
    O = I === void 0 ? ql : I,
    P = t.style,
    K = t.totalBoundaryShowSizeChanger,
    D = K === void 0 ? 50 : K,
    L = t.disabled,
    B = t.simple,
    M = t.showTotal,
    U = t.showSizeChanger,
    z = U === void 0 ? u > D : U,
    oe = t.pageSizeOptions,
    Z = t.itemRender,
    me = Z === void 0 ? Xl : Z,
    Q = t.jumpPrevIcon,
    he = t.jumpNextIcon,
    te = t.prevIcon,
    ie = t.nextIcon,
    $e = J.useRef(null),
    ee = Rn(10, { value: v, defaultValue: h }),
    Y = ue(ee, 2),
    F = Y[0],
    A = Y[1],
    q = Rn(1, {
      value: s,
      defaultValue: f,
      postState: function (Se) {
        return Math.max(1, Math.min(Se, jt(void 0, F, u)))
      },
    }),
    se = ue(q, 2),
    V = se[0],
    ne = se[1],
    W = J.useState(V),
    de = ue(W, 2),
    G = de[0],
    ge = de[1]
  l.useEffect(
    function () {
      ge(V)
    },
    [V],
  )
  var le = Math.max(1, V - (R ? 3 : 5)),
    we = Math.min(jt(void 0, F, u), V + (R ? 3 : 5))
  function xe(ae, Se) {
    var ze =
      ae ||
      J.createElement('button', {
        type: 'button',
        'aria-label': Se,
        className: ''.concat(n, '-item-link'),
      })
    return typeof ae == 'function' && (ze = J.createElement(ae, H({}, t))), ze
  }
  function fe(ae) {
    var Se = ae.target.value,
      ze = jt(void 0, F, u),
      yt
    return (
      Se === ''
        ? (yt = Se)
        : Number.isNaN(Number(Se))
          ? (yt = G)
          : Se >= ze
            ? (yt = ze)
            : (yt = Number(Se)),
      yt
    )
  }
  function Oe(ae) {
    return oo(ae) && ae !== V && oo(u) && u > 0
  }
  var He = u > F ? $ : !1
  function ot(ae) {
    ;(ae.keyCode === Ge.UP || ae.keyCode === Ge.DOWN) && ae.preventDefault()
  }
  function Pe(ae) {
    var Se = fe(ae)
    switch ((Se !== G && ge(Se), ae.keyCode)) {
      case Ge.ENTER:
        ye(Se)
        break
      case Ge.UP:
        ye(Se - 1)
        break
      case Ge.DOWN:
        ye(Se + 1)
        break
    }
  }
  function Ce(ae) {
    ye(fe(ae))
  }
  function Ie(ae) {
    var Se = jt(ae, F, u),
      ze = V > Se && Se !== 0 ? Se : V
    A(ae), ge(ze), k == null || k(V, ae), ne(ze), y == null || y(ze, ae)
  }
  function ye(ae) {
    if (Oe(ae) && !L) {
      var Se = jt(void 0, F, u),
        ze = ae
      return (
        ae > Se ? (ze = Se) : ae < 1 && (ze = 1),
        ze !== G && ge(ze),
        ne(ze),
        y == null || y(ze, F),
        ze
      )
    }
    return V
  }
  var Me = V > 1,
    Te = V < jt(void 0, F, u)
  function ke() {
    Me && ye(V - 1)
  }
  function Ae() {
    Te && ye(V + 1)
  }
  function _e() {
    ye(le)
  }
  function Le() {
    ye(we)
  }
  function qe(ae, Se) {
    if (
      ae.key === 'Enter' ||
      ae.charCode === Ge.ENTER ||
      ae.keyCode === Ge.ENTER
    ) {
      for (
        var ze = arguments.length, yt = new Array(ze > 2 ? ze - 2 : 0), Mt = 2;
        Mt < ze;
        Mt++
      )
        yt[Mt - 2] = arguments[Mt]
      Se.apply(void 0, yt)
    }
  }
  function dt(ae) {
    qe(ae, ke)
  }
  function Et(ae) {
    qe(ae, Ae)
  }
  function Ke(ae) {
    qe(ae, _e)
  }
  function Pt(ae) {
    qe(ae, Le)
  }
  function et(ae) {
    var Se = me(ae, 'prev', xe(te, 'prev page'))
    return J.isValidElement(Se) ? J.cloneElement(Se, { disabled: !Me }) : Se
  }
  function lt(ae) {
    var Se = me(ae, 'next', xe(ie, 'next page'))
    return J.isValidElement(Se) ? J.cloneElement(Se, { disabled: !Te }) : Se
  }
  function tt(ae) {
    ;(ae.type === 'click' || ae.keyCode === Ge.ENTER) && ye(G)
  }
  var vt = null,
    Ve = _t(t, { aria: !0, data: !0 }),
    Ue =
      M &&
      J.createElement(
        'li',
        { className: ''.concat(n, '-total-text') },
        M(u, [u === 0 ? 0 : (V - 1) * F + 1, V * F > u ? u : V * F]),
      ),
    st = null,
    De = jt(void 0, F, u)
  if (b && u <= F) return null
  var je = [],
    nt = {
      rootPrefixCls: n,
      onClick: ye,
      onKeyPress: qe,
      showTitle: E,
      itemRender: me,
      page: -1,
    },
    en = V - 1 > 0 ? V - 1 : 0,
    tn = V + 1 < De ? V + 1 : De,
    Ct = $ && $.goButton,
    nn = rt(B) === 'object' ? B.readOnly : !B,
    ce = Ct,
    pe = null
  B &&
    (Ct &&
      (typeof Ct == 'boolean'
        ? (ce = J.createElement(
            'button',
            { type: 'button', onClick: tt, onKeyUp: tt },
            O.jump_to_confirm,
          ))
        : (ce = J.createElement('span', { onClick: tt, onKeyUp: tt }, Ct)),
      (ce = J.createElement(
        'li',
        {
          title: E ? ''.concat(O.jump_to).concat(V, '/').concat(De) : null,
          className: ''.concat(n, '-simple-pager'),
        },
        ce,
      ))),
    (pe = J.createElement(
      'li',
      {
        title: E ? ''.concat(V, '/').concat(De) : null,
        className: ''.concat(n, '-simple-pager'),
      },
      nn
        ? G
        : J.createElement('input', {
            type: 'text',
            value: G,
            disabled: L,
            onKeyDown: ot,
            onKeyUp: Pe,
            onChange: Pe,
            onBlur: Ce,
            size: 3,
          }),
      J.createElement('span', { className: ''.concat(n, '-slash') }, '/'),
      De,
    )))
  var Re = R ? 1 : 2
  if (De <= 3 + Re * 2) {
    De ||
      je.push(
        J.createElement(
          sn,
          re({}, nt, {
            key: 'noPager',
            page: 1,
            className: ''.concat(n, '-item-disabled'),
          }),
        ),
      )
    for (var Be = 1; Be <= De; Be += 1)
      je.push(
        J.createElement(
          sn,
          re({}, nt, { key: Be, page: Be, active: V === Be }),
        ),
      )
  } else {
    var Xe = R ? O.prev_3 : O.prev_5,
      Ye = R ? O.next_3 : O.next_5,
      mt = me(le, 'jump-prev', xe(Q, 'prev page')),
      We = me(we, 'jump-next', xe(he, 'next page'))
    S &&
      ((vt = mt
        ? J.createElement(
            'li',
            {
              title: E ? Xe : null,
              key: 'prev',
              onClick: _e,
              tabIndex: 0,
              onKeyDown: Ke,
              className: X(
                ''.concat(n, '-jump-prev'),
                T({}, ''.concat(n, '-jump-prev-custom-icon'), !!Q),
              ),
            },
            mt,
          )
        : null),
      (st = We
        ? J.createElement(
            'li',
            {
              title: E ? Ye : null,
              key: 'next',
              onClick: Le,
              tabIndex: 0,
              onKeyDown: Pt,
              className: X(
                ''.concat(n, '-jump-next'),
                T({}, ''.concat(n, '-jump-next-custom-icon'), !!he),
              ),
            },
            We,
          )
        : null))
    var Ft = Math.max(1, V - Re),
      rn = Math.min(V + Re, De)
    V - 1 <= Re && (rn = 1 + Re * 2), De - V <= Re && (Ft = De - Re * 2)
    for (var $t = Ft; $t <= rn; $t += 1)
      je.push(
        J.createElement(
          sn,
          re({}, nt, { key: $t, page: $t, active: V === $t }),
        ),
      )
    if (
      (V - 1 >= Re * 2 &&
        V !== 3 &&
        ((je[0] = J.cloneElement(je[0], {
          className: X(
            ''.concat(n, '-item-after-jump-prev'),
            je[0].props.className,
          ),
        })),
        je.unshift(vt)),
      De - V >= Re * 2 && V !== De - 2)
    ) {
      var Kt = je[je.length - 1]
      ;(je[je.length - 1] = J.cloneElement(Kt, {
        className: X(
          ''.concat(n, '-item-before-jump-next'),
          Kt.props.className,
        ),
      })),
        je.push(st)
    }
    Ft !== 1 &&
      je.unshift(J.createElement(sn, re({}, nt, { key: 1, page: 1 }))),
      rn !== De &&
        je.push(J.createElement(sn, re({}, nt, { key: De, page: De })))
  }
  var gt = et(en)
  if (gt) {
    var on = !Me || !De
    gt = J.createElement(
      'li',
      {
        title: E ? O.prev_page : null,
        onClick: ke,
        tabIndex: on ? null : 0,
        onKeyDown: dt,
        className: X(
          ''.concat(n, '-prev'),
          T({}, ''.concat(n, '-disabled'), on),
        ),
        'aria-disabled': on,
      },
      gt,
    )
  }
  var Tt = lt(tn)
  if (Tt) {
    var Dt, Wt
    B
      ? ((Dt = !Te), (Wt = Me ? 0 : null))
      : ((Dt = !Te || !De), (Wt = Dt ? null : 0)),
      (Tt = J.createElement(
        'li',
        {
          title: E ? O.next_page : null,
          onClick: Ae,
          tabIndex: Wt,
          onKeyDown: Et,
          className: X(
            ''.concat(n, '-next'),
            T({}, ''.concat(n, '-disabled'), Dt),
          ),
          'aria-disabled': Dt,
        },
        Tt,
      ))
  }
  var _n = X(
    n,
    d,
    T(
      T(
        T(
          T(
            T({}, ''.concat(n, '-start'), x === 'start'),
            ''.concat(n, '-center'),
            x === 'center',
          ),
          ''.concat(n, '-end'),
          x === 'end',
        ),
        ''.concat(n, '-simple'),
        B,
      ),
      ''.concat(n, '-disabled'),
      L,
    ),
  )
  return J.createElement(
    'ul',
    re({ className: _n, style: P, ref: $e }, Ve),
    Ue,
    gt,
    B ? pe : je,
    Tt,
    J.createElement(Ul, {
      locale: O,
      rootPrefixCls: n,
      disabled: L,
      selectComponentClass: a,
      selectPrefixCls: i,
      changeSize: Ie,
      pageSize: F,
      pageSizeOptions: oe,
      quickGo: He ? ye : null,
      goButton: ce,
      showSizeChanger: z,
    }),
  )
}
const la = (e) =>
    l.createElement(
      Bn,
      Object.assign({}, e, { showSearch: !0, size: 'small' }),
    ),
  sa = (e) =>
    l.createElement(
      Bn,
      Object.assign({}, e, { showSearch: !0, size: 'middle' }),
    )
la.Option = Bn.Option
sa.Option = Bn.Option
const Yl = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-disabled`]: {
        '&, &:hover': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
          },
        },
        '&:focus-visible': {
          cursor: 'not-allowed',
          [`${t}-item-link`]: {
            color: e.colorTextDisabled,
            cursor: 'not-allowed',
          },
        },
      },
      [`&${t}-disabled`]: {
        cursor: 'not-allowed',
        [`${t}-item`]: {
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          a: {
            color: e.colorTextDisabled,
            backgroundColor: 'transparent',
            border: 'none',
            cursor: 'not-allowed',
          },
          '&-active': {
            borderColor: e.colorBorder,
            backgroundColor: e.itemActiveBgDisabled,
            '&:hover, &:active': { backgroundColor: e.itemActiveBgDisabled },
            a: { color: e.itemActiveColorDisabled },
          },
        },
        [`${t}-item-link`]: {
          color: e.colorTextDisabled,
          cursor: 'not-allowed',
          '&:hover, &:active': { backgroundColor: 'transparent' },
          [`${t}-simple&`]: {
            backgroundColor: 'transparent',
            '&:hover, &:active': { backgroundColor: 'transparent' },
          },
        },
        [`${t}-simple-pager`]: { color: e.colorTextDisabled },
        [`${t}-jump-prev, ${t}-jump-next`]: {
          [`${t}-item-link-icon`]: { opacity: 0 },
          [`${t}-item-ellipsis`]: { opacity: 1 },
        },
      },
      [`&${t}-simple`]: {
        [`${t}-prev, ${t}-next`]: {
          [`&${t}-disabled ${t}-item-link`]: {
            '&:hover, &:active': { backgroundColor: 'transparent' },
          },
        },
      },
    }
  },
  Ql = (e) => {
    const { componentCls: t } = e
    return {
      [`&${t}-mini ${t}-total-text, &${t}-mini ${t}-simple-pager`]: {
        height: e.itemSizeSM,
        lineHeight: j(e.itemSizeSM),
      },
      [`&${t}-mini ${t}-item`]: {
        minWidth: e.itemSizeSM,
        height: e.itemSizeSM,
        margin: 0,
        lineHeight: j(e.calc(e.itemSizeSM).sub(2).equal()),
      },
      [`&${t}-mini:not(${t}-disabled) ${t}-item:not(${t}-item-active)`]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&:hover': { backgroundColor: e.colorBgTextHover },
        '&:active': { backgroundColor: e.colorBgTextActive },
      },
      [`&${t}-mini ${t}-prev, &${t}-mini ${t}-next`]: {
        minWidth: e.itemSizeSM,
        height: e.itemSizeSM,
        margin: 0,
        lineHeight: j(e.itemSizeSM),
      },
      [`&${t}-mini:not(${t}-disabled)`]: {
        [`${t}-prev, ${t}-next`]: {
          [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
          [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
          [`&${t}-disabled:hover ${t}-item-link`]: {
            backgroundColor: 'transparent',
          },
        },
      },
      [`
    &${t}-mini ${t}-prev ${t}-item-link,
    &${t}-mini ${t}-next ${t}-item-link
    `]: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        '&::after': { height: e.itemSizeSM, lineHeight: j(e.itemSizeSM) },
      },
      [`&${t}-mini ${t}-jump-prev, &${t}-mini ${t}-jump-next`]: {
        height: e.itemSizeSM,
        marginInlineEnd: 0,
        lineHeight: j(e.itemSizeSM),
      },
      [`&${t}-mini ${t}-options`]: {
        marginInlineStart: e.paginationMiniOptionsMarginInlineStart,
        '&-size-changer': { top: e.miniOptionsSizeChangerTop },
        '&-quick-jumper': {
          height: e.itemSizeSM,
          lineHeight: j(e.itemSizeSM),
          input: Object.assign(Object.assign({}, oi(e)), {
            width: e.paginationMiniQuickJumperInputWidth,
            height: e.controlHeightSM,
          }),
        },
      },
    }
  },
  Jl = (e) => {
    const { componentCls: t } = e
    return {
      [`
    &${t}-simple ${t}-prev,
    &${t}-simple ${t}-next
    `]: {
        height: e.itemSizeSM,
        lineHeight: j(e.itemSizeSM),
        verticalAlign: 'top',
        [`${t}-item-link`]: {
          height: e.itemSizeSM,
          backgroundColor: 'transparent',
          border: 0,
          '&:hover': { backgroundColor: e.colorBgTextHover },
          '&:active': { backgroundColor: e.colorBgTextActive },
          '&::after': { height: e.itemSizeSM, lineHeight: j(e.itemSizeSM) },
        },
      },
      [`&${t}-simple ${t}-simple-pager`]: {
        display: 'inline-block',
        height: e.itemSizeSM,
        marginInlineEnd: e.marginXS,
        input: {
          boxSizing: 'border-box',
          height: '100%',
          padding: `0 ${j(e.paginationItemPaddingInline)}`,
          textAlign: 'center',
          backgroundColor: e.itemInputBg,
          border: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `border-color ${e.motionDurationMid}`,
          color: 'inherit',
          '&:hover': { borderColor: e.colorPrimary },
          '&:focus': {
            borderColor: e.colorPrimaryHover,
            boxShadow: `${j(e.inputOutlineOffset)} 0 ${j(e.controlOutlineWidth)} ${e.controlOutline}`,
          },
          '&[disabled]': {
            color: e.colorTextDisabled,
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            cursor: 'not-allowed',
          },
        },
      },
    }
  },
  Zl = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-jump-prev, ${t}-jump-next`]: {
        outline: 0,
        [`${t}-item-container`]: {
          position: 'relative',
          [`${t}-item-link-icon`]: {
            color: e.colorPrimary,
            fontSize: e.fontSizeSM,
            opacity: 0,
            transition: `all ${e.motionDurationMid}`,
            '&-svg': {
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              margin: 'auto',
            },
          },
          [`${t}-item-ellipsis`]: {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: 0,
            insetInlineStart: 0,
            display: 'block',
            margin: 'auto',
            color: e.colorTextDisabled,
            letterSpacing: e.paginationEllipsisLetterSpacing,
            textAlign: 'center',
            textIndent: e.paginationEllipsisTextIndent,
            opacity: 1,
            transition: `all ${e.motionDurationMid}`,
          },
        },
        '&:hover': {
          [`${t}-item-link-icon`]: { opacity: 1 },
          [`${t}-item-ellipsis`]: { opacity: 0 },
        },
      },
      [`
    ${t}-prev,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: { marginInlineEnd: e.marginXS },
      [`
    ${t}-prev,
    ${t}-next,
    ${t}-jump-prev,
    ${t}-jump-next
    `]: {
        display: 'inline-block',
        minWidth: e.itemSize,
        height: e.itemSize,
        color: e.colorText,
        fontFamily: e.fontFamily,
        lineHeight: j(e.itemSize),
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        borderRadius: e.borderRadius,
        cursor: 'pointer',
        transition: `all ${e.motionDurationMid}`,
      },
      [`${t}-prev, ${t}-next`]: {
        outline: 0,
        button: { color: e.colorText, cursor: 'pointer', userSelect: 'none' },
        [`${t}-item-link`]: {
          display: 'block',
          width: '100%',
          height: '100%',
          padding: 0,
          fontSize: e.fontSizeSM,
          textAlign: 'center',
          backgroundColor: 'transparent',
          border: `${j(e.lineWidth)} ${e.lineType} transparent`,
          borderRadius: e.borderRadius,
          outline: 'none',
          transition: `all ${e.motionDurationMid}`,
        },
        [`&:hover ${t}-item-link`]: { backgroundColor: e.colorBgTextHover },
        [`&:active ${t}-item-link`]: { backgroundColor: e.colorBgTextActive },
        [`&${t}-disabled:hover`]: {
          [`${t}-item-link`]: { backgroundColor: 'transparent' },
        },
      },
      [`${t}-slash`]: {
        marginInlineEnd: e.paginationSlashMarginInlineEnd,
        marginInlineStart: e.paginationSlashMarginInlineStart,
      },
      [`${t}-options`]: {
        display: 'inline-block',
        marginInlineStart: e.margin,
        verticalAlign: 'middle',
        '&-size-changer': { display: 'inline-block', width: 'auto' },
        '&-quick-jumper': {
          display: 'inline-block',
          height: e.controlHeight,
          marginInlineStart: e.marginXS,
          lineHeight: j(e.controlHeight),
          verticalAlign: 'top',
          input: Object.assign(
            Object.assign(
              Object.assign({}, ai(e)),
              ii(e, {
                borderColor: e.colorBorder,
                hoverBorderColor: e.colorPrimaryHover,
                activeBorderColor: e.colorPrimary,
                activeShadow: e.activeShadow,
              }),
            ),
            {
              '&[disabled]': Object.assign({}, li(e)),
              width: e.calc(e.controlHeightLG).mul(1.25).equal(),
              height: e.controlHeight,
              boxSizing: 'border-box',
              margin: 0,
              marginInlineStart: e.marginXS,
              marginInlineEnd: e.marginXS,
            },
          ),
        },
      },
    }
  },
  es = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-item`]: {
        display: 'inline-block',
        minWidth: e.itemSize,
        height: e.itemSize,
        marginInlineEnd: e.marginXS,
        fontFamily: e.fontFamily,
        lineHeight: j(e.calc(e.itemSize).sub(2).equal()),
        textAlign: 'center',
        verticalAlign: 'middle',
        listStyle: 'none',
        backgroundColor: e.itemBg,
        border: `${j(e.lineWidth)} ${e.lineType} transparent`,
        borderRadius: e.borderRadius,
        outline: 0,
        cursor: 'pointer',
        userSelect: 'none',
        a: {
          display: 'block',
          padding: `0 ${j(e.paginationItemPaddingInline)}`,
          color: e.colorText,
          '&:hover': { textDecoration: 'none' },
        },
        [`&:not(${t}-item-active)`]: {
          '&:hover': {
            transition: `all ${e.motionDurationMid}`,
            backgroundColor: e.colorBgTextHover,
          },
          '&:active': { backgroundColor: e.colorBgTextActive },
        },
        '&-active': {
          fontWeight: e.fontWeightStrong,
          backgroundColor: e.itemActiveBg,
          borderColor: e.colorPrimary,
          a: { color: e.colorPrimary },
          '&:hover': { borderColor: e.colorPrimaryHover },
          '&:hover a': { color: e.colorPrimaryHover },
        },
      },
    }
  },
  ts = (e) => {
    const { componentCls: t } = e
    return {
      [t]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(
                  Object.assign(Object.assign({}, Rt(e)), {
                    display: 'flex',
                    '&-start': { justifyContent: 'start' },
                    '&-center': { justifyContent: 'center' },
                    '&-end': { justifyContent: 'end' },
                    'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                    '&::after': {
                      display: 'block',
                      clear: 'both',
                      height: 0,
                      overflow: 'hidden',
                      visibility: 'hidden',
                      content: '""',
                    },
                    [`${t}-total-text`]: {
                      display: 'inline-block',
                      height: e.itemSize,
                      marginInlineEnd: e.marginXS,
                      lineHeight: j(e.calc(e.itemSize).sub(2).equal()),
                      verticalAlign: 'middle',
                    },
                  }),
                  es(e),
                ),
                Zl(e),
              ),
              Jl(e),
            ),
            Ql(e),
          ),
          Yl(e),
        ),
        {
          [`@media only screen and (max-width: ${e.screenLG}px)`]: {
            [`${t}-item`]: {
              '&-after-jump-prev, &-before-jump-next': { display: 'none' },
            },
          },
          [`@media only screen and (max-width: ${e.screenSM}px)`]: {
            [`${t}-options`]: { display: 'none' },
          },
        },
      ),
      [`&${e.componentCls}-rtl`]: { direction: 'rtl' },
    }
  },
  ns = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}:not(${t}-disabled)`]: {
        [`${t}-item`]: Object.assign({}, ti(e)),
        [`${t}-jump-prev, ${t}-jump-next`]: {
          '&:focus-visible': Object.assign(
            {
              [`${t}-item-link-icon`]: { opacity: 1 },
              [`${t}-item-ellipsis`]: { opacity: 0 },
            },
            un(e),
          ),
        },
        [`${t}-prev, ${t}-next`]: {
          [`&:focus-visible ${t}-item-link`]: Object.assign({}, un(e)),
        },
      },
    }
  },
  ca = (e) =>
    Object.assign(
      {
        itemBg: e.colorBgContainer,
        itemSize: e.controlHeight,
        itemSizeSM: e.controlHeightSM,
        itemActiveBg: e.colorBgContainer,
        itemLinkBg: e.colorBgContainer,
        itemActiveColorDisabled: e.colorTextDisabled,
        itemActiveBgDisabled: e.controlItemBgActiveDisabled,
        itemInputBg: e.colorBgContainer,
        miniOptionsSizeChangerTop: 0,
      },
      ni(e),
    ),
  da = (e) =>
    gn(
      e,
      {
        inputOutlineOffset: 0,
        paginationMiniOptionsMarginInlineStart: e
          .calc(e.marginXXS)
          .div(2)
          .equal(),
        paginationMiniQuickJumperInputWidth: e
          .calc(e.controlHeightLG)
          .mul(1.1)
          .equal(),
        paginationItemPaddingInline: e.calc(e.marginXXS).mul(1.5).equal(),
        paginationEllipsisLetterSpacing: e.calc(e.marginXXS).div(2).equal(),
        paginationSlashMarginInlineStart: e.marginSM,
        paginationSlashMarginInlineEnd: e.marginSM,
        paginationEllipsisTextIndent: '0.13em',
      },
      ri(e),
    ),
  rs = mn(
    'Pagination',
    (e) => {
      const t = da(e)
      return [ts(t), ns(t)]
    },
    ca,
  ),
  os = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}${t}-bordered${t}-disabled:not(${t}-mini)`]: {
        '&, &:hover': { [`${t}-item-link`]: { borderColor: e.colorBorder } },
        '&:focus-visible': {
          [`${t}-item-link`]: { borderColor: e.colorBorder },
        },
        [`${t}-item, ${t}-item-link`]: {
          backgroundColor: e.colorBgContainerDisabled,
          borderColor: e.colorBorder,
          [`&:hover:not(${t}-item-active)`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            a: { color: e.colorTextDisabled },
          },
          [`&${t}-item-active`]: { backgroundColor: e.itemActiveBgDisabled },
        },
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
            color: e.colorTextDisabled,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.colorBgContainerDisabled,
            borderColor: e.colorBorder,
          },
        },
      },
      [`${t}${t}-bordered:not(${t}-mini)`]: {
        [`${t}-prev, ${t}-next`]: {
          '&:hover button': {
            borderColor: e.colorPrimaryHover,
            backgroundColor: e.itemBg,
          },
          [`${t}-item-link`]: {
            backgroundColor: e.itemLinkBg,
            borderColor: e.colorBorder,
          },
          [`&:hover ${t}-item-link`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.itemBg,
            color: e.colorPrimary,
          },
          [`&${t}-disabled`]: {
            [`${t}-item-link`]: {
              borderColor: e.colorBorder,
              color: e.colorTextDisabled,
            },
          },
        },
        [`${t}-item`]: {
          backgroundColor: e.itemBg,
          border: `${j(e.lineWidth)} ${e.lineType} ${e.colorBorder}`,
          [`&:hover:not(${t}-item-active)`]: {
            borderColor: e.colorPrimary,
            backgroundColor: e.itemBg,
            a: { color: e.colorPrimary },
          },
          '&-active': { borderColor: e.colorPrimary },
        },
      },
    }
  },
  as = si(
    ['Pagination', 'bordered'],
    (e) => {
      const t = da(e)
      return [os(t)]
    },
    ca,
  )
var is = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const ls = (e) => {
  const {
      align: t,
      prefixCls: r,
      selectPrefixCls: n,
      className: o,
      rootClassName: i,
      style: d,
      size: a,
      locale: s,
      selectComponentClass: c,
      responsive: f,
      showSizeChanger: p,
    } = e,
    u = is(e, [
      'align',
      'prefixCls',
      'selectPrefixCls',
      'className',
      'rootClassName',
      'style',
      'size',
      'locale',
      'selectComponentClass',
      'responsive',
      'showSizeChanger',
    ]),
    { xs: v } = ea(f),
    [, m] = Mn(),
    { getPrefixCls: h, direction: g, pagination: y = {} } = l.useContext(ht),
    b = h('pagination', r),
    [x, C, S] = rs(b),
    $ = p ?? y.showSizeChanger,
    R = l.useMemo(() => {
      const K = l.createElement(
          'span',
          { className: `${b}-item-ellipsis` },
          '•••',
        ),
        D = l.createElement(
          'button',
          { className: `${b}-item-link`, type: 'button', tabIndex: -1 },
          g === 'rtl' ? l.createElement(zr, null) : l.createElement(Hr, null),
        ),
        L = l.createElement(
          'button',
          { className: `${b}-item-link`, type: 'button', tabIndex: -1 },
          g === 'rtl' ? l.createElement(Hr, null) : l.createElement(zr, null),
        ),
        B = l.createElement(
          'a',
          { className: `${b}-item-link` },
          l.createElement(
            'div',
            { className: `${b}-item-container` },
            g === 'rtl'
              ? l.createElement(no, { className: `${b}-item-link-icon` })
              : l.createElement(to, { className: `${b}-item-link-icon` }),
            K,
          ),
        ),
        M = l.createElement(
          'a',
          { className: `${b}-item-link` },
          l.createElement(
            'div',
            { className: `${b}-item-container` },
            g === 'rtl'
              ? l.createElement(to, { className: `${b}-item-link-icon` })
              : l.createElement(no, { className: `${b}-item-link-icon` }),
            K,
          ),
        )
      return { prevIcon: D, nextIcon: L, jumpPrevIcon: B, jumpNextIcon: M }
    }, [g, b]),
    [w] = ci('Pagination', di),
    E = Object.assign(Object.assign({}, w), s),
    N = vr(a),
    k = N === 'small' || !!(v && !N && f),
    I = h('select', n),
    O = X(
      {
        [`${b}-${t}`]: !!t,
        [`${b}-mini`]: k,
        [`${b}-rtl`]: g === 'rtl',
        [`${b}-bordered`]: m.wireframe,
      },
      y == null ? void 0 : y.className,
      o,
      i,
      C,
      S,
    ),
    P = Object.assign(Object.assign({}, y == null ? void 0 : y.style), d)
  return x(
    l.createElement(
      l.Fragment,
      null,
      m.wireframe && l.createElement(as, { prefixCls: b }),
      l.createElement(
        Gl,
        Object.assign({}, R, u, {
          style: P,
          prefixCls: b,
          selectPrefixCls: I,
          className: O,
          selectComponentClass: c || (k ? la : sa),
          locale: E,
          showSizeChanger: $,
        }),
      ),
    ),
  )
}
let pt = null,
  zt = (e) => e(),
  pn = [],
  vn = {}
function ao() {
  const { getContainer: e, duration: t, rtl: r, maxCount: n, top: o } = vn,
    i = (e == null ? void 0 : e()) || document.body
  return { getContainer: () => i, duration: t, rtl: r, maxCount: n, top: o }
}
const ss = J.forwardRef((e, t) => {
    const { messageConfig: r, sync: n } = e,
      { getPrefixCls: o } = l.useContext(ht),
      i = vn.prefixCls || o('message'),
      d = l.useContext(gl),
      [a, s] = Jo(
        Object.assign(
          Object.assign(Object.assign({}, r), { prefixCls: i }),
          d.message,
        ),
      )
    return (
      J.useImperativeHandle(t, () => {
        const c = Object.assign({}, a)
        return (
          Object.keys(c).forEach((f) => {
            c[f] = function () {
              return n(), a[f].apply(a, arguments)
            }
          }),
          { instance: c, sync: n }
        )
      }),
      s
    )
  }),
  cs = J.forwardRef((e, t) => {
    const [r, n] = J.useState(ao),
      o = () => {
        n(ao)
      }
    J.useEffect(o, [])
    const i = pi(),
      d = i.getRootPrefixCls(),
      a = i.getIconPrefixCls(),
      s = i.getTheme(),
      c = J.createElement(ss, { ref: t, sync: o, messageConfig: r })
    return J.createElement(
      fi,
      { prefixCls: d, iconPrefixCls: a, theme: s },
      i.holderRender ? i.holderRender(c) : c,
    )
  })
function Ln() {
  if (!pt) {
    const e = document.createDocumentFragment(),
      t = { fragment: e }
    ;(pt = t),
      zt(() => {
        ui(
          J.createElement(cs, {
            ref: (r) => {
              const { instance: n, sync: o } = r || {}
              Promise.resolve().then(() => {
                !t.instance && n && ((t.instance = n), (t.sync = o), Ln())
              })
            },
          }),
          e,
        )
      })
    return
  }
  pt.instance &&
    (pn.forEach((e) => {
      const { type: t, skipped: r } = e
      if (!r)
        switch (t) {
          case 'open': {
            zt(() => {
              const n = pt.instance.open(
                Object.assign(Object.assign({}, vn), e.config),
              )
              n == null || n.then(e.resolve), e.setCloseFn(n)
            })
            break
          }
          case 'destroy':
            zt(() => {
              pt == null || pt.instance.destroy(e.key)
            })
            break
          default:
            zt(() => {
              var n
              const o = (n = pt.instance)[t].apply(n, ve(e.args))
              o == null || o.then(e.resolve), e.setCloseFn(o)
            })
        }
    }),
    (pn = []))
}
function ds(e) {
  ;(vn = Object.assign(Object.assign({}, vn), e)),
    zt(() => {
      var t
      ;(t = pt == null ? void 0 : pt.sync) === null ||
        t === void 0 ||
        t.call(pt)
    })
}
function us(e) {
  const t = hr((r) => {
    let n
    const o = {
      type: 'open',
      config: e,
      resolve: r,
      setCloseFn: (i) => {
        n = i
      },
    }
    return (
      pn.push(o),
      () => {
        n
          ? zt(() => {
              n()
            })
          : (o.skipped = !0)
      }
    )
  })
  return Ln(), t
}
function fs(e, t) {
  const r = hr((n) => {
    let o
    const i = {
      type: e,
      args: t,
      resolve: n,
      setCloseFn: (d) => {
        o = d
      },
    }
    return (
      pn.push(i),
      () => {
        o
          ? zt(() => {
              o()
            })
          : (i.skipped = !0)
      }
    )
  })
  return Ln(), r
}
const ps = (e) => {
    pn.push({ type: 'destroy', key: e }), Ln()
  },
  vs = ['success', 'info', 'warning', 'error', 'loading'],
  ms = {
    open: us,
    destroy: ps,
    config: ds,
    useMessage: ml,
    _InternalPanelDoNotUseOrYouWillBeFired: ll,
  },
  wn = ms
vs.forEach((e) => {
  wn[e] = function () {
    for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n]
    return fs(e, r)
  }
})
var gs = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
          },
        },
      ],
    },
    name: 'caret-down',
    theme: 'filled',
  },
  hs = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: gs }))
  },
  ys = l.forwardRef(hs),
  bs = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M840.4 300H183.6c-19.7 0-30.7 20.8-18.5 35l328.4 380.8c9.4 10.9 27.5 10.9 37 0L858.9 335c12.2-14.2 1.2-35-18.5-35z',
          },
        },
      ],
    },
    name: 'caret-down',
    theme: 'outlined',
  },
  xs = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: bs }))
  },
  Cs = l.forwardRef(xs),
  Ss = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M858.9 689L530.5 308.2c-9.4-10.9-27.5-10.9-37 0L165.1 689c-12.2 14.2-1.2 35 18.5 35h656.8c19.7 0 30.7-20.8 18.5-35z',
          },
        },
      ],
    },
    name: 'caret-up',
    theme: 'outlined',
  },
  Es = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: Ss }))
  },
  $s = l.forwardRef(Es),
  ws = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494z',
          },
        },
      ],
    },
    name: 'file',
    theme: 'outlined',
  },
  Ns = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: ws }))
  },
  ua = l.forwardRef(Ns),
  ks = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M349 838c0 17.7 14.2 32 31.8 32h262.4c17.6 0 31.8-14.3 31.8-32V642H349v196zm531.1-684H143.9c-24.5 0-39.8 26.7-27.5 48l221.3 376h348.8l221.3-376c12.1-21.3-3.2-48-27.7-48z',
          },
        },
      ],
    },
    name: 'filter',
    theme: 'filled',
  },
  Rs = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: ks }))
  },
  Is = l.forwardRef(Rs),
  Os = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M928 444H820V330.4c0-17.7-14.3-32-32-32H473L355.7 186.2a8.15 8.15 0 00-5.5-2.2H96c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h698c13 0 24.8-7.9 29.7-20l134-332c1.5-3.8 2.3-7.9 2.3-12 0-17.7-14.3-32-32-32zM136 256h188.5l119.6 114.4H748V444H238c-13 0-24.8 7.9-29.7 20L136 643.2V256zm635.3 512H159l103.3-256h612.4L771.3 768z',
          },
        },
      ],
    },
    name: 'folder-open',
    theme: 'outlined',
  },
  Ps = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: Os }))
  },
  Ks = l.forwardRef(Ps),
  Ts = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M880 298.4H521L403.7 186.2a8.15 8.15 0 00-5.5-2.2H144c-17.7 0-32 14.3-32 32v592c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V330.4c0-17.7-14.3-32-32-32zM840 768H184V256h188.5l119.6 114.4H840V768z',
          },
        },
      ],
    },
    name: 'folder',
    theme: 'outlined',
  },
  Ds = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: Ts }))
  },
  Ms = l.forwardRef(Ds),
  Bs = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M300 276.5a56 56 0 1056-97 56 56 0 00-56 97zm0 284a56 56 0 1056-97 56 56 0 00-56 97zM640 228a56 56 0 10112 0 56 56 0 00-112 0zm0 284a56 56 0 10112 0 56 56 0 00-112 0zM300 844.5a56 56 0 1056-97 56 56 0 00-56 97zM640 796a56 56 0 10112 0 56 56 0 00-112 0z',
          },
        },
      ],
    },
    name: 'holder',
    theme: 'outlined',
  },
  Ls = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: Bs }))
  },
  js = l.forwardRef(Ls),
  zs = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M328 544h368c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z',
          },
        },
      ],
    },
    name: 'minus-square',
    theme: 'outlined',
  },
  Hs = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: zs }))
  },
  _s = l.forwardRef(Hs),
  As = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M328 544h152v152c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V544h152c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H544V328c0-4.4-3.6-8-8-8h-48c-4.4 0-8 3.6-8 8v152H328c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M880 112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32zm-40 728H184V184h656v656z',
          },
        },
      ],
    },
    name: 'plus-square',
    theme: 'outlined',
  },
  Fs = function (t, r) {
    return l.createElement(at, re({}, t, { ref: r, icon: As }))
  },
  Ws = l.forwardRef(Fs),
  Nt = {},
  xn = 'rc-table-internal-hook'
function br(e) {
  var t = l.createContext(void 0),
    r = function (o) {
      var i = o.value,
        d = o.children,
        a = l.useRef(i)
      a.current = i
      var s = l.useState(function () {
          return {
            getValue: function () {
              return a.current
            },
            listeners: new Set(),
          }
        }),
        c = ue(s, 1),
        f = c[0]
      return (
        Ht(
          function () {
            Mo.unstable_batchedUpdates(function () {
              f.listeners.forEach(function (p) {
                p(i)
              })
            })
          },
          [i],
        ),
        l.createElement(t.Provider, { value: f }, d)
      )
    }
  return { Context: t, Provider: r, defaultValue: e }
}
function Ze(e, t) {
  var r = It(
      typeof t == 'function'
        ? t
        : function (p) {
            if (t === void 0) return p
            if (!Array.isArray(t)) return p[t]
            var u = {}
            return (
              t.forEach(function (v) {
                u[v] = p[v]
              }),
              u
            )
          },
    ),
    n = l.useContext(e == null ? void 0 : e.Context),
    o = n || {},
    i = o.listeners,
    d = o.getValue,
    a = l.useRef()
  a.current = r(n ? d() : e == null ? void 0 : e.defaultValue)
  var s = l.useState({}),
    c = ue(s, 2),
    f = c[1]
  return (
    Ht(
      function () {
        if (!n) return
        function p(u) {
          var v = r(u)
          fn(a.current, v, !0) || f({})
        }
        return (
          i.add(p),
          function () {
            i.delete(p)
          }
        )
      },
      [n],
    ),
    a.current
  )
}
function qs() {
  var e = l.createContext(null)
  function t() {
    return l.useContext(e)
  }
  function r(o, i) {
    var d = _r(o),
      a = function (c, f) {
        var p = d ? { ref: f } : {},
          u = l.useRef(0),
          v = l.useRef(c),
          m = t()
        return m !== null
          ? l.createElement(o, re({}, c, p))
          : ((!i || i(v.current, c)) && (u.current += 1),
            (v.current = c),
            l.createElement(
              e.Provider,
              { value: u.current },
              l.createElement(o, re({}, c, p)),
            ))
      }
    return d ? l.forwardRef(a) : a
  }
  function n(o, i) {
    var d = _r(o),
      a = function (c, f) {
        var p = d ? { ref: f } : {}
        return t(), l.createElement(o, re({}, c, p))
      }
    return d ? l.memo(l.forwardRef(a), i) : l.memo(a, i)
  }
  return { makeImmutable: r, responseImmutable: n, useImmutableMark: t }
}
var xr = qs(),
  fa = xr.makeImmutable,
  Yt = xr.responseImmutable,
  Vs = xr.useImmutableMark,
  it = br(),
  pa = l.createContext({ renderWithProps: !1 }),
  Us = 'RC_TABLE_KEY'
function Xs(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function jn(e) {
  var t = [],
    r = {}
  return (
    e.forEach(function (n) {
      for (
        var o = n || {},
          i = o.key,
          d = o.dataIndex,
          a = i || Xs(d).join('-') || Us;
        r[a];

      )
        a = ''.concat(a, '_next')
      ;(r[a] = !0), t.push(a)
    }),
    t
  )
}
function rr(e) {
  return e != null
}
function Gs(e) {
  return typeof e == 'number' && !Number.isNaN(e)
}
function Ys(e) {
  return e && rt(e) === 'object' && !Array.isArray(e) && !l.isValidElement(e)
}
function Qs(e, t, r, n, o, i) {
  var d = l.useContext(pa),
    a = Vs(),
    s = zo(
      function () {
        if (rr(n)) return [n]
        var c = t == null || t === '' ? [] : Array.isArray(t) ? t : [t],
          f = mr(e, c),
          p = f,
          u = void 0
        if (o) {
          var v = o(f, e, r)
          Ys(v)
            ? ((p = v.children), (u = v.props), (d.renderWithProps = !0))
            : (p = v)
        }
        return [p, u]
      },
      [a, e, n, t, o, r],
      function (c, f) {
        if (i) {
          var p = ue(c, 2),
            u = p[1],
            v = ue(f, 2),
            m = v[1]
          return i(m, u)
        }
        return d.renderWithProps ? !0 : !fn(c, f, !0)
      },
    )
  return s
}
function Js(e, t, r, n) {
  var o = e + t - 1
  return e <= n && o >= r
}
function Zs(e, t) {
  return Ze(it, function (r) {
    var n = Js(e, t || 1, r.hoverStartRow, r.hoverEndRow)
    return [n, r.onHover]
  })
}
var ec = function (t) {
  var r = t.ellipsis,
    n = t.rowType,
    o = t.children,
    i,
    d = r === !0 ? { showTitle: !0 } : r
  return (
    d &&
      (d.showTitle || n === 'header') &&
      (typeof o == 'string' || typeof o == 'number'
        ? (i = o.toString())
        : l.isValidElement(o) &&
          typeof o.props.children == 'string' &&
          (i = o.props.children)),
    i
  )
}
function tc(e) {
  var t,
    r,
    n,
    o,
    i,
    d,
    a,
    s,
    c = e.component,
    f = e.children,
    p = e.ellipsis,
    u = e.scope,
    v = e.prefixCls,
    m = e.className,
    h = e.align,
    g = e.record,
    y = e.render,
    b = e.dataIndex,
    x = e.renderIndex,
    C = e.shouldCellUpdate,
    S = e.index,
    $ = e.rowType,
    R = e.colSpan,
    w = e.rowSpan,
    E = e.fixLeft,
    N = e.fixRight,
    k = e.firstFixLeft,
    I = e.lastFixLeft,
    O = e.firstFixRight,
    P = e.lastFixRight,
    K = e.appendNode,
    D = e.additionalProps,
    L = D === void 0 ? {} : D,
    B = e.isSticky,
    M = ''.concat(v, '-cell'),
    U = Ze(it, ['supportSticky', 'allColumnsFixedLeft', 'rowHoverable']),
    z = U.supportSticky,
    oe = U.allColumnsFixedLeft,
    Z = U.rowHoverable,
    me = Qs(g, b, x, f, y, C),
    Q = ue(me, 2),
    he = Q[0],
    te = Q[1],
    ie = {},
    $e = typeof E == 'number' && z,
    ee = typeof N == 'number' && z
  $e && ((ie.position = 'sticky'), (ie.left = E)),
    ee && ((ie.position = 'sticky'), (ie.right = N))
  var Y =
      (t =
        (r =
          (n = te == null ? void 0 : te.colSpan) !== null && n !== void 0
            ? n
            : L.colSpan) !== null && r !== void 0
          ? r
          : R) !== null && t !== void 0
        ? t
        : 1,
    F =
      (o =
        (i =
          (d = te == null ? void 0 : te.rowSpan) !== null && d !== void 0
            ? d
            : L.rowSpan) !== null && i !== void 0
          ? i
          : w) !== null && o !== void 0
        ? o
        : 1,
    A = Zs(S, F),
    q = ue(A, 2),
    se = q[0],
    V = q[1],
    ne = It(function (xe) {
      var fe
      g && V(S, S + F - 1),
        L == null ||
          (fe = L.onMouseEnter) === null ||
          fe === void 0 ||
          fe.call(L, xe)
    }),
    W = It(function (xe) {
      var fe
      g && V(-1, -1),
        L == null ||
          (fe = L.onMouseLeave) === null ||
          fe === void 0 ||
          fe.call(L, xe)
    })
  if (Y === 0 || F === 0) return null
  var de =
      (a = L.title) !== null && a !== void 0
        ? a
        : ec({ rowType: $, ellipsis: p, children: he }),
    G = X(
      M,
      m,
      ((s = {}),
      T(
        T(
          T(
            T(
              T(
                T(
                  T(
                    T(
                      T(
                        T(s, ''.concat(M, '-fix-left'), $e && z),
                        ''.concat(M, '-fix-left-first'),
                        k && z,
                      ),
                      ''.concat(M, '-fix-left-last'),
                      I && z,
                    ),
                    ''.concat(M, '-fix-left-all'),
                    I && oe && z,
                  ),
                  ''.concat(M, '-fix-right'),
                  ee && z,
                ),
                ''.concat(M, '-fix-right-first'),
                O && z,
              ),
              ''.concat(M, '-fix-right-last'),
              P && z,
            ),
            ''.concat(M, '-ellipsis'),
            p,
          ),
          ''.concat(M, '-with-append'),
          K,
        ),
        ''.concat(M, '-fix-sticky'),
        ($e || ee) && B && z,
      ),
      T(s, ''.concat(M, '-row-hover'), !te && se)),
      L.className,
      te == null ? void 0 : te.className,
    ),
    ge = {}
  h && (ge.textAlign = h)
  var le = H(H(H(H({}, ie), L.style), ge), te == null ? void 0 : te.style),
    we = he
  return (
    rt(we) === 'object' &&
      !Array.isArray(we) &&
      !l.isValidElement(we) &&
      (we = null),
    p &&
      (I || O) &&
      (we = l.createElement(
        'span',
        { className: ''.concat(M, '-content') },
        we,
      )),
    l.createElement(
      c,
      re({}, te, L, {
        className: G,
        style: le,
        title: de,
        scope: u,
        onMouseEnter: Z ? ne : void 0,
        onMouseLeave: Z ? W : void 0,
        colSpan: Y !== 1 ? Y : null,
        rowSpan: F !== 1 ? F : null,
      }),
      K,
      we,
    )
  )
}
const Qt = l.memo(tc)
function Cr(e, t, r, n, o) {
  var i = r[e] || {},
    d = r[t] || {},
    a,
    s
  i.fixed === 'left'
    ? (a = n.left[o === 'rtl' ? t : e])
    : d.fixed === 'right' && (s = n.right[o === 'rtl' ? e : t])
  var c = !1,
    f = !1,
    p = !1,
    u = !1,
    v = r[t + 1],
    m = r[e - 1],
    h =
      (v && !v.fixed) ||
      (m && !m.fixed) ||
      r.every(function (C) {
        return C.fixed === 'left'
      })
  if (o === 'rtl') {
    if (a !== void 0) {
      var g = m && m.fixed === 'left'
      u = !g && h
    } else if (s !== void 0) {
      var y = v && v.fixed === 'right'
      p = !y && h
    }
  } else if (a !== void 0) {
    var b = v && v.fixed === 'left'
    c = !b && h
  } else if (s !== void 0) {
    var x = m && m.fixed === 'right'
    f = !x && h
  }
  return {
    fixLeft: a,
    fixRight: s,
    lastFixLeft: c,
    firstFixRight: f,
    lastFixRight: p,
    firstFixLeft: u,
    isSticky: n.isSticky,
  }
}
var va = l.createContext({})
function nc(e) {
  var t = e.className,
    r = e.index,
    n = e.children,
    o = e.colSpan,
    i = o === void 0 ? 1 : o,
    d = e.rowSpan,
    a = e.align,
    s = Ze(it, ['prefixCls', 'direction']),
    c = s.prefixCls,
    f = s.direction,
    p = l.useContext(va),
    u = p.scrollColumnIndex,
    v = p.stickyOffsets,
    m = p.flattenColumns,
    h = r + i - 1,
    g = h + 1 === u ? i + 1 : i,
    y = Cr(r, r + g - 1, m, v, f)
  return l.createElement(
    Qt,
    re(
      {
        className: t,
        index: r,
        component: 'td',
        prefixCls: c,
        record: null,
        dataIndex: null,
        align: a,
        colSpan: g,
        rowSpan: d,
        render: function () {
          return n
        },
      },
      y,
    ),
  )
}
var rc = ['children']
function oc(e) {
  var t = e.children,
    r = ut(e, rc)
  return l.createElement('tr', r, t)
}
function zn(e) {
  var t = e.children
  return t
}
zn.Row = oc
zn.Cell = nc
function ac(e) {
  var t = e.children,
    r = e.stickyOffsets,
    n = e.flattenColumns,
    o = Ze(it, 'prefixCls'),
    i = n.length - 1,
    d = n[i],
    a = l.useMemo(
      function () {
        return {
          stickyOffsets: r,
          flattenColumns: n,
          scrollColumnIndex: d != null && d.scrollbar ? i : null,
        }
      },
      [d, n, i, r],
    )
  return l.createElement(
    va.Provider,
    { value: a },
    l.createElement('tfoot', { className: ''.concat(o, '-summary') }, t),
  )
}
const En = Yt(ac)
var ma = zn
function ic(e) {
  return null
}
function lc(e) {
  return null
}
function ga(e, t, r, n, o, i, d) {
  e.push({ record: t, indent: r, index: d })
  var a = i(t),
    s = o == null ? void 0 : o.has(a)
  if (t && Array.isArray(t[n]) && s)
    for (var c = 0; c < t[n].length; c += 1) ga(e, t[n][c], r + 1, n, o, i, c)
}
function ha(e, t, r, n) {
  var o = l.useMemo(
    function () {
      if (r != null && r.size) {
        for (var i = [], d = 0; d < (e == null ? void 0 : e.length); d += 1) {
          var a = e[d]
          ga(i, a, 0, t, r, n, d)
        }
        return i
      }
      return e == null
        ? void 0
        : e.map(function (s, c) {
            return { record: s, indent: 0, index: c }
          })
    },
    [e, t, r, n],
  )
  return o
}
function ya(e, t, r, n) {
  var o = Ze(it, [
      'prefixCls',
      'fixedInfoList',
      'flattenColumns',
      'expandableType',
      'expandRowByClick',
      'onTriggerExpand',
      'rowClassName',
      'expandedRowClassName',
      'indentSize',
      'expandIcon',
      'expandedRowRender',
      'expandIconColumnIndex',
      'expandedKeys',
      'childrenColumnName',
      'rowExpandable',
      'onRow',
    ]),
    i = o.flattenColumns,
    d = o.expandableType,
    a = o.expandedKeys,
    s = o.childrenColumnName,
    c = o.onTriggerExpand,
    f = o.rowExpandable,
    p = o.onRow,
    u = o.expandRowByClick,
    v = o.rowClassName,
    m = d === 'nest',
    h = d === 'row' && (!f || f(e)),
    g = h || m,
    y = a && a.has(t),
    b = s && e && e[s],
    x = It(c),
    C = p == null ? void 0 : p(e, r),
    S = C == null ? void 0 : C.onClick,
    $ = function (N) {
      u && g && c(e, N)
      for (
        var k = arguments.length, I = new Array(k > 1 ? k - 1 : 0), O = 1;
        O < k;
        O++
      )
        I[O - 1] = arguments[O]
      S == null || S.apply(void 0, [N].concat(I))
    },
    R
  typeof v == 'string' ? (R = v) : typeof v == 'function' && (R = v(e, r, n))
  var w = jn(i)
  return H(
    H({}, o),
    {},
    {
      columnsKey: w,
      nestExpandable: m,
      expanded: y,
      hasNestChildren: b,
      record: e,
      onTriggerExpand: x,
      rowSupportExpand: h,
      expandable: g,
      rowProps: H(
        H({}, C),
        {},
        { className: X(R, C == null ? void 0 : C.className), onClick: $ },
      ),
    },
  )
}
function ba(e) {
  var t = e.prefixCls,
    r = e.children,
    n = e.component,
    o = e.cellComponent,
    i = e.className,
    d = e.expanded,
    a = e.colSpan,
    s = e.isEmpty,
    c = Ze(it, [
      'scrollbarSize',
      'fixHeader',
      'fixColumn',
      'componentWidth',
      'horizonScroll',
    ]),
    f = c.scrollbarSize,
    p = c.fixHeader,
    u = c.fixColumn,
    v = c.componentWidth,
    m = c.horizonScroll,
    h = r
  return (
    (s ? m && v : u) &&
      (h = l.createElement(
        'div',
        {
          style: {
            width: v - (p && !s ? f : 0),
            position: 'sticky',
            left: 0,
            overflow: 'hidden',
          },
          className: ''.concat(t, '-expanded-row-fixed'),
        },
        h,
      )),
    l.createElement(
      n,
      { className: i, style: { display: d ? null : 'none' } },
      l.createElement(Qt, { component: o, prefixCls: t, colSpan: a }, h),
    )
  )
}
function xa(e, t, r, n, o) {
  var i = e.record,
    d = e.prefixCls,
    a = e.columnsKey,
    s = e.fixedInfoList,
    c = e.expandIconColumnIndex,
    f = e.nestExpandable,
    p = e.indentSize,
    u = e.expandIcon,
    v = e.expanded,
    m = e.hasNestChildren,
    h = e.onTriggerExpand,
    g = a[r],
    y = s[r],
    b
  r === (c || 0) &&
    f &&
    (b = l.createElement(
      l.Fragment,
      null,
      l.createElement('span', {
        style: { paddingLeft: ''.concat(p * n, 'px') },
        className: ''.concat(d, '-row-indent indent-level-').concat(n),
      }),
      u({ prefixCls: d, expanded: v, expandable: m, record: i, onExpand: h }),
    ))
  var x
  return (
    t.onCell && (x = t.onCell(i, o)),
    { key: g, fixedInfo: y, appendCellNode: b, additionalCellProps: x || {} }
  )
}
function sc(e) {
  var t = e.className,
    r = e.style,
    n = e.record,
    o = e.index,
    i = e.renderIndex,
    d = e.rowKey,
    a = e.indent,
    s = a === void 0 ? 0 : a,
    c = e.rowComponent,
    f = e.cellComponent,
    p = e.scopeCellComponent,
    u = ya(n, d, o, s),
    v = u.prefixCls,
    m = u.flattenColumns,
    h = u.expandedRowClassName,
    g = u.expandedRowRender,
    y = u.rowProps,
    b = u.expanded,
    x = u.rowSupportExpand,
    C = l.useRef(!1)
  C.current || (C.current = b)
  var S = h && h(n, o, s),
    $ = l.createElement(
      c,
      re({}, y, {
        'data-row-key': d,
        className: X(
          t,
          ''.concat(v, '-row'),
          ''.concat(v, '-row-level-').concat(s),
          y == null ? void 0 : y.className,
          s >= 1 ? S : '',
        ),
        style: H(H({}, r), y == null ? void 0 : y.style),
      }),
      m.map(function (E, N) {
        var k = E.render,
          I = E.dataIndex,
          O = E.className,
          P = xa(u, E, N, s, o),
          K = P.key,
          D = P.fixedInfo,
          L = P.appendCellNode,
          B = P.additionalCellProps
        return l.createElement(
          Qt,
          re(
            {
              className: O,
              ellipsis: E.ellipsis,
              align: E.align,
              scope: E.rowScope,
              component: E.rowScope ? p : f,
              prefixCls: v,
              key: K,
              record: n,
              index: o,
              renderIndex: i,
              dataIndex: I,
              render: k,
              shouldCellUpdate: E.shouldCellUpdate,
            },
            D,
            { appendNode: L, additionalProps: B },
          ),
        )
      }),
    ),
    R
  if (x && (C.current || b)) {
    var w = g(n, o, s + 1, b)
    R = l.createElement(
      ba,
      {
        expanded: b,
        className: X(
          ''.concat(v, '-expanded-row'),
          ''.concat(v, '-expanded-row-level-').concat(s + 1),
          S,
        ),
        prefixCls: v,
        component: c,
        cellComponent: f,
        colSpan: m.length,
        isEmpty: !1,
      },
      w,
    )
  }
  return l.createElement(l.Fragment, null, $, R)
}
const cc = Yt(sc)
function dc(e) {
  var t = e.columnKey,
    r = e.onColumnResize,
    n = l.useRef()
  return (
    l.useEffect(function () {
      n.current && r(t, n.current.offsetWidth)
    }, []),
    l.createElement(
      gr,
      { data: t },
      l.createElement(
        'td',
        { ref: n, style: { padding: 0, border: 0, height: 0 } },
        l.createElement(
          'div',
          { style: { height: 0, overflow: 'hidden' } },
          ' ',
        ),
      ),
    )
  )
}
function uc(e) {
  var t = e.prefixCls,
    r = e.columnsKey,
    n = e.onColumnResize
  return l.createElement(
    'tr',
    {
      'aria-hidden': 'true',
      className: ''.concat(t, '-measure-row'),
      style: { height: 0, fontSize: 0 },
    },
    l.createElement(
      gr.Collection,
      {
        onBatchResize: function (i) {
          i.forEach(function (d) {
            var a = d.data,
              s = d.size
            n(a, s.offsetWidth)
          })
        },
      },
      r.map(function (o) {
        return l.createElement(dc, { key: o, columnKey: o, onColumnResize: n })
      }),
    ),
  )
}
function fc(e) {
  var t = e.data,
    r = e.measureColumnWidth,
    n = Ze(it, [
      'prefixCls',
      'getComponent',
      'onColumnResize',
      'flattenColumns',
      'getRowKey',
      'expandedKeys',
      'childrenColumnName',
      'emptyNode',
    ]),
    o = n.prefixCls,
    i = n.getComponent,
    d = n.onColumnResize,
    a = n.flattenColumns,
    s = n.getRowKey,
    c = n.expandedKeys,
    f = n.childrenColumnName,
    p = n.emptyNode,
    u = ha(t, f, c, s),
    v = l.useRef({ renderWithProps: !1 }),
    m = i(['body', 'wrapper'], 'tbody'),
    h = i(['body', 'row'], 'tr'),
    g = i(['body', 'cell'], 'td'),
    y = i(['body', 'cell'], 'th'),
    b
  t.length
    ? (b = u.map(function (C, S) {
        var $ = C.record,
          R = C.indent,
          w = C.index,
          E = s($, S)
        return l.createElement(cc, {
          key: E,
          rowKey: E,
          record: $,
          index: S,
          renderIndex: w,
          rowComponent: h,
          cellComponent: g,
          scopeCellComponent: y,
          getRowKey: s,
          indent: R,
        })
      }))
    : (b = l.createElement(
        ba,
        {
          expanded: !0,
          className: ''.concat(o, '-placeholder'),
          prefixCls: o,
          component: h,
          cellComponent: g,
          colSpan: a.length,
          isEmpty: !0,
        },
        p,
      ))
  var x = jn(a)
  return l.createElement(
    pa.Provider,
    { value: v.current },
    l.createElement(
      m,
      { className: ''.concat(o, '-tbody') },
      r &&
        l.createElement(uc, { prefixCls: o, columnsKey: x, onColumnResize: d }),
      b,
    ),
  )
}
const pc = Yt(fc)
var vc = ['expandable'],
  dn = 'RC_TABLE_INTERNAL_COL_DEFINE'
function mc(e) {
  var t = e.expandable,
    r = ut(e, vc),
    n
  return (
    'expandable' in e ? (n = H(H({}, r), t)) : (n = r),
    n.showExpandColumn === !1 && (n.expandIconColumnIndex = -1),
    n
  )
}
var gc = ['columnType']
function Ca(e) {
  for (
    var t = e.colWidths,
      r = e.columns,
      n = e.columCount,
      o = Ze(it, ['tableLayout']),
      i = o.tableLayout,
      d = [],
      a = n || r.length,
      s = !1,
      c = a - 1;
    c >= 0;
    c -= 1
  ) {
    var f = t[c],
      p = r && r[c],
      u = void 0,
      v = void 0
    if (
      (p && ((u = p[dn]), i === 'auto' && (v = p.minWidth)), f || v || u || s)
    ) {
      var m = u || {}
      m.columnType
      var h = ut(m, gc)
      d.unshift(
        l.createElement(
          'col',
          re({ key: c, style: { width: f, minWidth: v } }, h),
        ),
      ),
        (s = !0)
    }
  }
  return l.createElement('colgroup', null, d)
}
var hc = [
  'className',
  'noData',
  'columns',
  'flattenColumns',
  'colWidths',
  'columCount',
  'stickyOffsets',
  'direction',
  'fixHeader',
  'stickyTopOffset',
  'stickyBottomOffset',
  'stickyClassName',
  'onScroll',
  'maxContentScroll',
  'children',
]
function yc(e, t) {
  return l.useMemo(
    function () {
      for (var r = [], n = 0; n < t; n += 1) {
        var o = e[n]
        if (o !== void 0) r[n] = o
        else return null
      }
      return r
    },
    [e.join('_'), t],
  )
}
var bc = l.forwardRef(function (e, t) {
  var r = e.className,
    n = e.noData,
    o = e.columns,
    i = e.flattenColumns,
    d = e.colWidths,
    a = e.columCount,
    s = e.stickyOffsets,
    c = e.direction,
    f = e.fixHeader,
    p = e.stickyTopOffset,
    u = e.stickyBottomOffset,
    v = e.stickyClassName,
    m = e.onScroll,
    h = e.maxContentScroll,
    g = e.children,
    y = ut(e, hc),
    b = Ze(it, ['prefixCls', 'scrollbarSize', 'isSticky', 'getComponent']),
    x = b.prefixCls,
    C = b.scrollbarSize,
    S = b.isSticky,
    $ = b.getComponent,
    R = $(['header', 'table'], 'table'),
    w = S && !f ? 0 : C,
    E = l.useRef(null),
    N = l.useCallback(function (B) {
      Ar(t, B), Ar(E, B)
    }, [])
  l.useEffect(function () {
    var B
    function M(U) {
      var z = U,
        oe = z.currentTarget,
        Z = z.deltaX
      Z &&
        (m({ currentTarget: oe, scrollLeft: oe.scrollLeft + Z }),
        U.preventDefault())
    }
    return (
      (B = E.current) === null ||
        B === void 0 ||
        B.addEventListener('wheel', M, { passive: !1 }),
      function () {
        var U
        ;(U = E.current) === null ||
          U === void 0 ||
          U.removeEventListener('wheel', M)
      }
    )
  }, [])
  var k = l.useMemo(
      function () {
        return i.every(function (B) {
          return B.width
        })
      },
      [i],
    ),
    I = i[i.length - 1],
    O = {
      fixed: I ? I.fixed : null,
      scrollbar: !0,
      onHeaderCell: function () {
        return { className: ''.concat(x, '-cell-scrollbar') }
      },
    },
    P = l.useMemo(
      function () {
        return w ? [].concat(ve(o), [O]) : o
      },
      [w, o],
    ),
    K = l.useMemo(
      function () {
        return w ? [].concat(ve(i), [O]) : i
      },
      [w, i],
    ),
    D = l.useMemo(
      function () {
        var B = s.right,
          M = s.left
        return H(
          H({}, s),
          {},
          {
            left:
              c === 'rtl'
                ? [].concat(
                    ve(
                      M.map(function (U) {
                        return U + w
                      }),
                    ),
                    [0],
                  )
                : M,
            right:
              c === 'rtl'
                ? B
                : [].concat(
                    ve(
                      B.map(function (U) {
                        return U + w
                      }),
                    ),
                    [0],
                  ),
            isSticky: S,
          },
        )
      },
      [w, s, S],
    ),
    L = yc(d, a)
  return l.createElement(
    'div',
    {
      style: H({ overflow: 'hidden' }, S ? { top: p, bottom: u } : {}),
      ref: N,
      className: X(r, T({}, v, !!v)),
    },
    l.createElement(
      R,
      { style: { tableLayout: 'fixed', visibility: n || L ? null : 'hidden' } },
      (!n || !h || k) &&
        l.createElement(Ca, {
          colWidths: L ? [].concat(ve(L), [w]) : [],
          columCount: a + 1,
          columns: K,
        }),
      g(H(H({}, y), {}, { stickyOffsets: D, columns: P, flattenColumns: K })),
    ),
  )
})
const io = l.memo(bc)
var xc = function (t) {
  var r = t.cells,
    n = t.stickyOffsets,
    o = t.flattenColumns,
    i = t.rowComponent,
    d = t.cellComponent,
    a = t.onHeaderRow,
    s = t.index,
    c = Ze(it, ['prefixCls', 'direction']),
    f = c.prefixCls,
    p = c.direction,
    u
  a &&
    (u = a(
      r.map(function (m) {
        return m.column
      }),
      s,
    ))
  var v = jn(
    r.map(function (m) {
      return m.column
    }),
  )
  return l.createElement(
    i,
    u,
    r.map(function (m, h) {
      var g = m.column,
        y = Cr(m.colStart, m.colEnd, o, n, p),
        b
      return (
        g && g.onHeaderCell && (b = m.column.onHeaderCell(g)),
        l.createElement(
          Qt,
          re(
            {},
            m,
            {
              scope: g.title ? (m.colSpan > 1 ? 'colgroup' : 'col') : null,
              ellipsis: g.ellipsis,
              align: g.align,
              component: d,
              prefixCls: f,
              key: v[h],
            },
            y,
            { additionalProps: b, rowType: 'header' },
          ),
        )
      )
    }),
  )
}
function Cc(e) {
  var t = []
  function r(d, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0
    t[s] = t[s] || []
    var c = a,
      f = d.filter(Boolean).map(function (p) {
        var u = {
            key: p.key,
            className: p.className || '',
            children: p.title,
            column: p,
            colStart: c,
          },
          v = 1,
          m = p.children
        return (
          m &&
            m.length > 0 &&
            ((v = r(m, c, s + 1).reduce(function (h, g) {
              return h + g
            }, 0)),
            (u.hasSubColumns = !0)),
          'colSpan' in p && (v = p.colSpan),
          'rowSpan' in p && (u.rowSpan = p.rowSpan),
          (u.colSpan = v),
          (u.colEnd = u.colStart + v - 1),
          t[s].push(u),
          (c += v),
          v
        )
      })
    return f
  }
  r(e, 0)
  for (
    var n = t.length,
      o = function (a) {
        t[a].forEach(function (s) {
          !('rowSpan' in s) && !s.hasSubColumns && (s.rowSpan = n - a)
        })
      },
      i = 0;
    i < n;
    i += 1
  )
    o(i)
  return t
}
var Sc = function (t) {
  var r = t.stickyOffsets,
    n = t.columns,
    o = t.flattenColumns,
    i = t.onHeaderRow,
    d = Ze(it, ['prefixCls', 'getComponent']),
    a = d.prefixCls,
    s = d.getComponent,
    c = l.useMemo(
      function () {
        return Cc(n)
      },
      [n],
    ),
    f = s(['header', 'wrapper'], 'thead'),
    p = s(['header', 'row'], 'tr'),
    u = s(['header', 'cell'], 'th')
  return l.createElement(
    f,
    { className: ''.concat(a, '-thead') },
    c.map(function (v, m) {
      var h = l.createElement(xc, {
        key: m,
        flattenColumns: o,
        cells: v,
        stickyOffsets: r,
        rowComponent: p,
        cellComponent: u,
        onHeaderRow: i,
        index: m,
      })
      return h
    }),
  )
}
const lo = Yt(Sc)
function so(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
  return typeof t == 'number'
    ? t
    : t.endsWith('%')
      ? (e * parseFloat(t)) / 100
      : null
}
function Ec(e, t, r) {
  return l.useMemo(
    function () {
      if (t && t > 0) {
        var n = 0,
          o = 0
        e.forEach(function (u) {
          var v = so(t, u.width)
          v ? (n += v) : (o += 1)
        })
        var i = Math.max(t, r),
          d = Math.max(i - n, o),
          a = o,
          s = d / o,
          c = 0,
          f = e.map(function (u) {
            var v = H({}, u),
              m = so(t, v.width)
            if (m) v.width = m
            else {
              var h = Math.floor(s)
              ;(v.width = a === 1 ? d : h), (d -= h), (a -= 1)
            }
            return (c += v.width), v
          })
        if (c < i) {
          var p = i / c
          ;(d = i),
            f.forEach(function (u, v) {
              var m = Math.floor(u.width * p)
              ;(u.width = v === f.length - 1 ? d : m), (d -= m)
            })
        }
        return [f, Math.max(c, i)]
      }
      return [e, t]
    },
    [e, t, r],
  )
}
var $c = ['children'],
  wc = ['fixed']
function Sr(e) {
  return Lo(e)
    .filter(function (t) {
      return l.isValidElement(t)
    })
    .map(function (t) {
      var r = t.key,
        n = t.props,
        o = n.children,
        i = ut(n, $c),
        d = H({ key: r }, i)
      return o && (d.children = Sr(o)), d
    })
}
function Sa(e) {
  return e
    .filter(function (t) {
      return t && rt(t) === 'object' && !t.hidden
    })
    .map(function (t) {
      var r = t.children
      return r && r.length > 0 ? H(H({}, t), {}, { children: Sa(r) }) : t
    })
}
function or(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'key'
  return e
    .filter(function (r) {
      return r && rt(r) === 'object'
    })
    .reduce(function (r, n, o) {
      var i = n.fixed,
        d = i === !0 ? 'left' : i,
        a = ''.concat(t, '-').concat(o),
        s = n.children
      return s && s.length > 0
        ? [].concat(
            ve(r),
            ve(
              or(s, a).map(function (c) {
                return H({ fixed: d }, c)
              }),
            ),
          )
        : [].concat(ve(r), [H(H({ key: a }, n), {}, { fixed: d })])
    }, [])
}
function Nc(e) {
  return e.map(function (t) {
    var r = t.fixed,
      n = ut(t, wc),
      o = r
    return (
      r === 'left' ? (o = 'right') : r === 'right' && (o = 'left'),
      H({ fixed: o }, n)
    )
  })
}
function kc(e, t) {
  var r = e.prefixCls,
    n = e.columns,
    o = e.children,
    i = e.expandable,
    d = e.expandedKeys,
    a = e.columnTitle,
    s = e.getRowKey,
    c = e.onTriggerExpand,
    f = e.expandIcon,
    p = e.rowExpandable,
    u = e.expandIconColumnIndex,
    v = e.direction,
    m = e.expandRowByClick,
    h = e.columnWidth,
    g = e.fixed,
    y = e.scrollWidth,
    b = e.clientWidth,
    x = l.useMemo(
      function () {
        var I = n || Sr(o) || []
        return Sa(I.slice())
      },
      [n, o],
    ),
    C = l.useMemo(
      function () {
        if (i) {
          var I = x.slice()
          if (!I.includes(Nt)) {
            var O = u || 0
            O >= 0 && I.splice(O, 0, Nt)
          }
          var P = I.indexOf(Nt)
          I = I.filter(function (B, M) {
            return B !== Nt || M === P
          })
          var K = x[P],
            D
          ;(g === 'left' || g) && !u
            ? (D = 'left')
            : (g === 'right' || g) && u === x.length
              ? (D = 'right')
              : (D = K ? K.fixed : null)
          var L = T(
            T(
              T(
                T(
                  T(
                    T({}, dn, {
                      className: ''.concat(r, '-expand-icon-col'),
                      columnType: 'EXPAND_COLUMN',
                    }),
                    'title',
                    a,
                  ),
                  'fixed',
                  D,
                ),
                'className',
                ''.concat(r, '-row-expand-icon-cell'),
              ),
              'width',
              h,
            ),
            'render',
            function (M, U, z) {
              var oe = s(U, z),
                Z = d.has(oe),
                me = p ? p(U) : !0,
                Q = f({
                  prefixCls: r,
                  expanded: Z,
                  expandable: me,
                  record: U,
                  onExpand: c,
                })
              return m
                ? l.createElement(
                    'span',
                    {
                      onClick: function (te) {
                        return te.stopPropagation()
                      },
                    },
                    Q,
                  )
                : Q
            },
          )
          return I.map(function (B) {
            return B === Nt ? L : B
          })
        }
        return x.filter(function (B) {
          return B !== Nt
        })
      },
      [i, x, s, d, f, v],
    ),
    S = l.useMemo(
      function () {
        var I = C
        return (
          t && (I = t(I)),
          I.length ||
            (I = [
              {
                render: function () {
                  return null
                },
              },
            ]),
          I
        )
      },
      [t, C, v],
    ),
    $ = l.useMemo(
      function () {
        return v === 'rtl' ? Nc(or(S)) : or(S)
      },
      [S, v, y],
    ),
    R = l.useMemo(
      function () {
        for (var I = -1, O = $.length - 1; O >= 0; O -= 1) {
          var P = $[O].fixed
          if (P === 'left' || P === !0) {
            I = O
            break
          }
        }
        if (I >= 0)
          for (var K = 0; K <= I; K += 1) {
            var D = $[K].fixed
            if (D !== 'left' && D !== !0) return !0
          }
        var L = $.findIndex(function (U) {
          var z = U.fixed
          return z === 'right'
        })
        if (L >= 0)
          for (var B = L; B < $.length; B += 1) {
            var M = $[B].fixed
            if (M !== 'right') return !0
          }
        return !1
      },
      [$],
    ),
    w = Ec($, y, b),
    E = ue(w, 2),
    N = E[0],
    k = E[1]
  return [S, N, k, R]
}
function Rc(e) {
  var t = e.prefixCls,
    r = e.record,
    n = e.onExpand,
    o = e.expanded,
    i = e.expandable,
    d = ''.concat(t, '-row-expand-icon')
  if (!i)
    return l.createElement('span', {
      className: X(d, ''.concat(t, '-row-spaced')),
    })
  var a = function (c) {
    n(r, c), c.stopPropagation()
  }
  return l.createElement('span', {
    className: X(
      d,
      T(
        T({}, ''.concat(t, '-row-expanded'), o),
        ''.concat(t, '-row-collapsed'),
        !o,
      ),
    ),
    onClick: a,
  })
}
function Ic(e, t, r) {
  var n = []
  function o(i) {
    ;(i || []).forEach(function (d, a) {
      n.push(t(d, a)), o(d[r])
    })
  }
  return o(e), n
}
function Oc(e, t, r) {
  var n = mc(e),
    o = n.expandIcon,
    i = n.expandedRowKeys,
    d = n.defaultExpandedRowKeys,
    a = n.defaultExpandAllRows,
    s = n.expandedRowRender,
    c = n.onExpand,
    f = n.onExpandedRowsChange,
    p = n.childrenColumnName,
    u = o || Rc,
    v = p || 'children',
    m = l.useMemo(
      function () {
        return s
          ? 'row'
          : (e.expandable &&
                e.internalHooks === xn &&
                e.expandable.__PARENT_RENDER_ICON__) ||
              t.some(function (S) {
                return S && rt(S) === 'object' && S[v]
              })
            ? 'nest'
            : !1
      },
      [!!s, t],
    ),
    h = l.useState(function () {
      return d || (a ? Ic(t, r, v) : [])
    }),
    g = ue(h, 2),
    y = g[0],
    b = g[1],
    x = l.useMemo(
      function () {
        return new Set(i || y || [])
      },
      [i, y],
    ),
    C = l.useCallback(
      function (S) {
        var $ = r(S, t.indexOf(S)),
          R,
          w = x.has($)
        w ? (x.delete($), (R = ve(x))) : (R = [].concat(ve(x), [$])),
          b(R),
          c && c(!w, S),
          f && f(R)
      },
      [r, x, t, c, f],
    )
  return [n, m, x, u, v, C]
}
function Pc(e, t, r) {
  var n = e.map(function (o, i) {
    return Cr(i, i, e, t, r)
  })
  return zo(
    function () {
      return n
    },
    [n],
    function (o, i) {
      return !fn(o, i)
    },
  )
}
function Ea(e) {
  var t = l.useRef(e),
    r = l.useState({}),
    n = ue(r, 2),
    o = n[1],
    i = l.useRef(null),
    d = l.useRef([])
  function a(s) {
    d.current.push(s)
    var c = Promise.resolve()
    ;(i.current = c),
      c.then(function () {
        if (i.current === c) {
          var f = d.current,
            p = t.current
          ;(d.current = []),
            f.forEach(function (u) {
              t.current = u(t.current)
            }),
            (i.current = null),
            p !== t.current && o({})
        }
      })
  }
  return (
    l.useEffect(function () {
      return function () {
        i.current = null
      }
    }, []),
    [t.current, a]
  )
}
function Kc(e) {
  var t = l.useRef(null),
    r = l.useRef()
  function n() {
    window.clearTimeout(r.current)
  }
  function o(d) {
    ;(t.current = d),
      n(),
      (r.current = window.setTimeout(function () {
        ;(t.current = null), (r.current = void 0)
      }, 100))
  }
  function i() {
    return t.current
  }
  return (
    l.useEffect(function () {
      return n
    }, []),
    [o, i]
  )
}
function Tc() {
  var e = l.useState(-1),
    t = ue(e, 2),
    r = t[0],
    n = t[1],
    o = l.useState(-1),
    i = ue(o, 2),
    d = i[0],
    a = i[1],
    s = l.useCallback(function (c, f) {
      n(c), a(f)
    }, [])
  return [r, d, s]
}
var co = vi() ? window : null
function Dc(e, t) {
  var r = rt(e) === 'object' ? e : {},
    n = r.offsetHeader,
    o = n === void 0 ? 0 : n,
    i = r.offsetSummary,
    d = i === void 0 ? 0 : i,
    a = r.offsetScroll,
    s = a === void 0 ? 0 : a,
    c = r.getContainer,
    f =
      c === void 0
        ? function () {
            return co
          }
        : c,
    p = f() || co,
    u = !!e
  return l.useMemo(
    function () {
      return {
        isSticky: u,
        stickyClassName: u ? ''.concat(t, '-sticky-holder') : '',
        offsetHeader: o,
        offsetSummary: d,
        offsetScroll: s,
        container: p,
      }
    },
    [u, s, o, d, t, p],
  )
}
function Mc(e, t, r) {
  var n = l.useMemo(
    function () {
      var o = t.length,
        i = function (c, f, p) {
          for (var u = [], v = 0, m = c; m !== f; m += p)
            u.push(v), t[m].fixed && (v += e[m] || 0)
          return u
        },
        d = i(0, o, 1),
        a = i(o - 1, -1, -1).reverse()
      return r === 'rtl' ? { left: a, right: d } : { left: d, right: a }
    },
    [e, t, r],
  )
  return n
}
function uo(e) {
  var t = e.className,
    r = e.children
  return l.createElement('div', { className: t }, r)
}
var Bc = function (t, r) {
  var n,
    o,
    i = t.scrollBodyRef,
    d = t.onScroll,
    a = t.offsetScroll,
    s = t.container,
    c = Ze(it, 'prefixCls'),
    f =
      ((n = i.current) === null || n === void 0 ? void 0 : n.scrollWidth) || 0,
    p =
      ((o = i.current) === null || o === void 0 ? void 0 : o.clientWidth) || 0,
    u = f && p * (p / f),
    v = l.useRef(),
    m = Ea({ scrollLeft: 0, isHiddenScrollBar: !0 }),
    h = ue(m, 2),
    g = h[0],
    y = h[1],
    b = l.useRef({ delta: 0, x: 0 }),
    x = l.useState(!1),
    C = ue(x, 2),
    S = C[0],
    $ = C[1],
    R = l.useRef(null)
  l.useEffect(function () {
    return function () {
      kn.cancel(R.current)
    }
  }, [])
  var w = function () {
      $(!1)
    },
    E = function (P) {
      P.persist(),
        (b.current.delta = P.pageX - g.scrollLeft),
        (b.current.x = 0),
        $(!0),
        P.preventDefault()
    },
    N = function (P) {
      var K,
        D = P || ((K = window) === null || K === void 0 ? void 0 : K.event),
        L = D.buttons
      if (!S || L === 0) {
        S && $(!1)
        return
      }
      var B = b.current.x + P.pageX - b.current.x - b.current.delta
      B <= 0 && (B = 0),
        B + u >= p && (B = p - u),
        d({ scrollLeft: (B / p) * (f + 2) }),
        (b.current.x = P.pageX)
    },
    k = function () {
      R.current = kn(function () {
        if (i.current) {
          var P = eo(i.current).top,
            K = P + i.current.offsetHeight,
            D =
              s === window
                ? document.documentElement.scrollTop + window.innerHeight
                : eo(s).top + s.clientHeight
          K - Fr() <= D || P >= D - a
            ? y(function (L) {
                return H(H({}, L), {}, { isHiddenScrollBar: !0 })
              })
            : y(function (L) {
                return H(H({}, L), {}, { isHiddenScrollBar: !1 })
              })
        }
      })
    },
    I = function (P) {
      y(function (K) {
        return H(H({}, K), {}, { scrollLeft: (P / f) * p || 0 })
      })
    }
  return (
    l.useImperativeHandle(r, function () {
      return { setScrollLeft: I, checkScrollBarVisible: k }
    }),
    l.useEffect(
      function () {
        var O = Sn(document.body, 'mouseup', w, !1),
          P = Sn(document.body, 'mousemove', N, !1)
        return (
          k(),
          function () {
            O.remove(), P.remove()
          }
        )
      },
      [u, S],
    ),
    l.useEffect(
      function () {
        var O = Sn(s, 'scroll', k, !1),
          P = Sn(window, 'resize', k, !1)
        return function () {
          O.remove(), P.remove()
        }
      },
      [s],
    ),
    l.useEffect(
      function () {
        g.isHiddenScrollBar ||
          y(function (O) {
            var P = i.current
            return P
              ? H(
                  H({}, O),
                  {},
                  {
                    scrollLeft: (P.scrollLeft / P.scrollWidth) * P.clientWidth,
                  },
                )
              : O
          })
      },
      [g.isHiddenScrollBar],
    ),
    f <= p || !u || g.isHiddenScrollBar
      ? null
      : l.createElement(
          'div',
          {
            style: { height: Fr(), width: p, bottom: a },
            className: ''.concat(c, '-sticky-scroll'),
          },
          l.createElement('div', {
            onMouseDown: E,
            ref: v,
            className: X(
              ''.concat(c, '-sticky-scroll-bar'),
              T({}, ''.concat(c, '-sticky-scroll-bar-active'), S),
            ),
            style: {
              width: ''.concat(u, 'px'),
              transform: 'translate3d('.concat(g.scrollLeft, 'px, 0, 0)'),
            },
          }),
        )
  )
}
const Lc = l.forwardRef(Bc)
var $a = 'rc-table',
  jc = [],
  zc = {}
function Hc() {
  return 'No Data'
}
function _c(e, t) {
  var r = H({ rowKey: 'key', prefixCls: $a, emptyText: Hc }, e),
    n = r.prefixCls,
    o = r.className,
    i = r.rowClassName,
    d = r.style,
    a = r.data,
    s = r.rowKey,
    c = r.scroll,
    f = r.tableLayout,
    p = r.direction,
    u = r.title,
    v = r.footer,
    m = r.summary,
    h = r.caption,
    g = r.id,
    y = r.showHeader,
    b = r.components,
    x = r.emptyText,
    C = r.onRow,
    S = r.onHeaderRow,
    $ = r.onScroll,
    R = r.internalHooks,
    w = r.transformColumns,
    E = r.internalRefs,
    N = r.tailor,
    k = r.getContainerWidth,
    I = r.sticky,
    O = r.rowHoverable,
    P = O === void 0 ? !0 : O,
    K = a || jc,
    D = !!K.length,
    L = R === xn,
    B = l.useCallback(
      function (be, Ee) {
        return mr(b, be) || Ee
      },
      [b],
    ),
    M = l.useMemo(
      function () {
        return typeof s == 'function'
          ? s
          : function (be) {
              var Ee = be && be[s]
              return Ee
            }
      },
      [s],
    ),
    U = B(['body']),
    z = Tc(),
    oe = ue(z, 3),
    Z = oe[0],
    me = oe[1],
    Q = oe[2],
    he = Oc(r, K, M),
    te = ue(he, 6),
    ie = te[0],
    $e = te[1],
    ee = te[2],
    Y = te[3],
    F = te[4],
    A = te[5],
    q = c == null ? void 0 : c.x,
    se = l.useState(0),
    V = ue(se, 2),
    ne = V[0],
    W = V[1],
    de = kc(
      H(
        H(H({}, r), ie),
        {},
        {
          expandable: !!ie.expandedRowRender,
          columnTitle: ie.columnTitle,
          expandedKeys: ee,
          getRowKey: M,
          onTriggerExpand: A,
          expandIcon: Y,
          expandIconColumnIndex: ie.expandIconColumnIndex,
          direction: p,
          scrollWidth: L && N && typeof q == 'number' ? q : null,
          clientWidth: ne,
        },
      ),
      L ? w : null,
    ),
    G = ue(de, 4),
    ge = G[0],
    le = G[1],
    we = G[2],
    xe = G[3],
    fe = we ?? q,
    Oe = l.useMemo(
      function () {
        return { columns: ge, flattenColumns: le }
      },
      [ge, le],
    ),
    He = l.useRef(),
    ot = l.useRef(),
    Pe = l.useRef(),
    Ce = l.useRef()
  l.useImperativeHandle(t, function () {
    return {
      nativeElement: He.current,
      scrollTo: function (Ee) {
        var Qe
        if (Pe.current instanceof HTMLElement) {
          var ft = Ee.index,
            Je = Ee.top,
            qt = Ee.key
          if (Gs(Je)) {
            var Bt
            ;(Bt = Pe.current) === null ||
              Bt === void 0 ||
              Bt.scrollTo({ top: Je })
          } else {
            var Lt,
              an = qt ?? M(K[ft])
            ;(Lt = Pe.current.querySelector(
              '[data-row-key="'.concat(an, '"]'),
            )) === null ||
              Lt === void 0 ||
              Lt.scrollIntoView()
          }
        } else
          (Qe = Pe.current) !== null &&
            Qe !== void 0 &&
            Qe.scrollTo &&
            Pe.current.scrollTo(Ee)
      },
    }
  })
  var Ie = l.useRef(),
    ye = l.useState(!1),
    Me = ue(ye, 2),
    Te = Me[0],
    ke = Me[1],
    Ae = l.useState(!1),
    _e = ue(Ae, 2),
    Le = _e[0],
    qe = _e[1],
    dt = Ea(new Map()),
    Et = ue(dt, 2),
    Ke = Et[0],
    Pt = Et[1],
    et = jn(le),
    lt = et.map(function (be) {
      return Ke.get(be)
    }),
    tt = l.useMemo(
      function () {
        return lt
      },
      [lt.join('_')],
    ),
    vt = Mc(tt, le, p),
    Ve = c && rr(c.y),
    Ue = (c && rr(fe)) || !!ie.fixed,
    st =
      Ue &&
      le.some(function (be) {
        var Ee = be.fixed
        return Ee
      }),
    De = l.useRef(),
    je = Dc(I, n),
    nt = je.isSticky,
    en = je.offsetHeader,
    tn = je.offsetSummary,
    Ct = je.offsetScroll,
    nn = je.stickyClassName,
    ce = je.container,
    pe = l.useMemo(
      function () {
        return m == null ? void 0 : m(K)
      },
      [m, K],
    ),
    Re = (Ve || nt) && l.isValidElement(pe) && pe.type === zn && pe.props.fixed,
    Be,
    Xe,
    Ye
  Ve && (Xe = { overflowY: D ? 'scroll' : 'auto', maxHeight: c.y }),
    Ue &&
      ((Be = { overflowX: 'auto' }),
      Ve || (Xe = { overflowY: 'hidden' }),
      (Ye = { width: fe === !0 ? 'auto' : fe, minWidth: '100%' }))
  var mt = l.useCallback(function (be, Ee) {
      mi(He.current) &&
        Pt(function (Qe) {
          if (Qe.get(be) !== Ee) {
            var ft = new Map(Qe)
            return ft.set(be, Ee), ft
          }
          return Qe
        })
    }, []),
    We = Kc(),
    Ft = ue(We, 2),
    rn = Ft[0],
    $t = Ft[1]
  function Kt(be, Ee) {
    Ee &&
      (typeof Ee == 'function'
        ? Ee(be)
        : Ee.scrollLeft !== be &&
          ((Ee.scrollLeft = be),
          Ee.scrollLeft !== be &&
            setTimeout(function () {
              Ee.scrollLeft = be
            }, 0)))
  }
  var gt = It(function (be) {
      var Ee = be.currentTarget,
        Qe = be.scrollLeft,
        ft = p === 'rtl',
        Je = typeof Qe == 'number' ? Qe : Ee.scrollLeft,
        qt = Ee || zc
      if (!$t() || $t() === qt) {
        var Bt
        rn(qt),
          Kt(Je, ot.current),
          Kt(Je, Pe.current),
          Kt(Je, Ie.current),
          Kt(
            Je,
            (Bt = De.current) === null || Bt === void 0
              ? void 0
              : Bt.setScrollLeft,
          )
      }
      var Lt = Ee || ot.current
      if (Lt) {
        var an = typeof fe == 'number' ? fe : Lt.scrollWidth,
          Vn = Lt.clientWidth
        if (an === Vn) {
          ke(!1), qe(!1)
          return
        }
        ft ? (ke(-Je < an - Vn), qe(-Je > 0)) : (ke(Je > 0), qe(Je < an - Vn))
      }
    }),
    on = It(function (be) {
      gt(be), $ == null || $(be)
    }),
    Tt = function () {
      if (Ue && Pe.current) {
        var Ee
        gt({
          currentTarget: hi(Pe.current),
          scrollLeft:
            (Ee = Pe.current) === null || Ee === void 0
              ? void 0
              : Ee.scrollLeft,
        })
      } else ke(!1), qe(!1)
    },
    Dt = function (Ee) {
      var Qe,
        ft = Ee.width
      ;(Qe = De.current) === null || Qe === void 0 || Qe.checkScrollBarVisible()
      var Je = He.current ? He.current.offsetWidth : ft
      L && k && He.current && (Je = k(He.current, Je) || Je),
        Je !== ne && (Tt(), W(Je))
    },
    Wt = l.useRef(!1)
  l.useEffect(
    function () {
      Wt.current && Tt()
    },
    [Ue, a, ge.length],
  ),
    l.useEffect(function () {
      Wt.current = !0
    }, [])
  var _n = l.useState(0),
    ae = ue(_n, 2),
    Se = ae[0],
    ze = ae[1],
    yt = l.useState(!0),
    Mt = ue(yt, 2),
    Ir = Mt[0],
    _a = Mt[1]
  l.useEffect(function () {
    ;(!N || !L) &&
      (Pe.current instanceof Element
        ? ze(Wr(Pe.current).width)
        : ze(Wr(Ce.current).width)),
      _a(gi('position', 'sticky'))
  }, []),
    l.useEffect(function () {
      L && E && (E.body.current = Pe.current)
    })
  var Aa = l.useCallback(
      function (be) {
        return l.createElement(
          l.Fragment,
          null,
          l.createElement(lo, be),
          Re === 'top' && l.createElement(En, be, pe),
        )
      },
      [Re, pe],
    ),
    Fa = l.useCallback(
      function (be) {
        return l.createElement(En, be, pe)
      },
      [pe],
    ),
    Or = B(['table'], 'table'),
    Cn = l.useMemo(
      function () {
        return (
          f ||
          (st
            ? fe === 'max-content'
              ? 'auto'
              : 'fixed'
            : Ve ||
                nt ||
                le.some(function (be) {
                  var Ee = be.ellipsis
                  return Ee
                })
              ? 'fixed'
              : 'auto')
        )
      },
      [Ve, st, le, f, nt],
    ),
    An,
    Fn = {
      colWidths: tt,
      columCount: le.length,
      stickyOffsets: vt,
      onHeaderRow: S,
      fixHeader: Ve,
      scroll: c,
    },
    Pr = l.useMemo(
      function () {
        return D ? null : typeof x == 'function' ? x() : x
      },
      [D, x],
    ),
    Kr = l.createElement(pc, { data: K, measureColumnWidth: Ve || Ue || nt }),
    Tr = l.createElement(Ca, {
      colWidths: le.map(function (be) {
        var Ee = be.width
        return Ee
      }),
      columns: le,
    }),
    Dr =
      h != null
        ? l.createElement('caption', { className: ''.concat(n, '-caption') }, h)
        : void 0,
    Wa = _t(r, { data: !0 }),
    Mr = _t(r, { aria: !0 })
  if (Ve || nt) {
    var Wn
    typeof U == 'function'
      ? ((Wn = U(K, { scrollbarSize: Se, ref: Pe, onScroll: gt })),
        (Fn.colWidths = le.map(function (be, Ee) {
          var Qe = be.width,
            ft = Ee === le.length - 1 ? Qe - Se : Qe
          return typeof ft == 'number' && !Number.isNaN(ft) ? ft : 0
        })))
      : (Wn = l.createElement(
          'div',
          {
            style: H(H({}, Be), Xe),
            onScroll: on,
            ref: Pe,
            className: X(''.concat(n, '-body')),
          },
          l.createElement(
            Or,
            re({ style: H(H({}, Ye), {}, { tableLayout: Cn }) }, Mr),
            Dr,
            Tr,
            Kr,
            !Re &&
              pe &&
              l.createElement(
                En,
                { stickyOffsets: vt, flattenColumns: le },
                pe,
              ),
          ),
        ))
    var Br = H(
      H(
        H(
          { noData: !K.length, maxContentScroll: Ue && fe === 'max-content' },
          Fn,
        ),
        Oe,
      ),
      {},
      { direction: p, stickyClassName: nn, onScroll: gt },
    )
    An = l.createElement(
      l.Fragment,
      null,
      y !== !1 &&
        l.createElement(
          io,
          re({}, Br, {
            stickyTopOffset: en,
            className: ''.concat(n, '-header'),
            ref: ot,
          }),
          Aa,
        ),
      Wn,
      Re &&
        Re !== 'top' &&
        l.createElement(
          io,
          re({}, Br, {
            stickyBottomOffset: tn,
            className: ''.concat(n, '-summary'),
            ref: Ie,
          }),
          Fa,
        ),
      nt &&
        Pe.current &&
        Pe.current instanceof Element &&
        l.createElement(Lc, {
          ref: De,
          offsetScroll: Ct,
          scrollBodyRef: Pe,
          onScroll: gt,
          container: ce,
        }),
    )
  } else
    An = l.createElement(
      'div',
      {
        style: H(H({}, Be), Xe),
        className: X(''.concat(n, '-content')),
        onScroll: gt,
        ref: Pe,
      },
      l.createElement(
        Or,
        re({ style: H(H({}, Ye), {}, { tableLayout: Cn }) }, Mr),
        Dr,
        Tr,
        y !== !1 && l.createElement(lo, re({}, Fn, Oe)),
        Kr,
        pe &&
          l.createElement(En, { stickyOffsets: vt, flattenColumns: le }, pe),
      ),
    )
  var qn = l.createElement(
    'div',
    re(
      {
        className: X(
          n,
          o,
          T(
            T(
              T(
                T(
                  T(
                    T(
                      T(
                        T(
                          T(
                            T({}, ''.concat(n, '-rtl'), p === 'rtl'),
                            ''.concat(n, '-ping-left'),
                            Te,
                          ),
                          ''.concat(n, '-ping-right'),
                          Le,
                        ),
                        ''.concat(n, '-layout-fixed'),
                        f === 'fixed',
                      ),
                      ''.concat(n, '-fixed-header'),
                      Ve,
                    ),
                    ''.concat(n, '-fixed-column'),
                    st,
                  ),
                  ''.concat(n, '-fixed-column-gapped'),
                  st && xe,
                ),
                ''.concat(n, '-scroll-horizontal'),
                Ue,
              ),
              ''.concat(n, '-has-fix-left'),
              le[0] && le[0].fixed,
            ),
            ''.concat(n, '-has-fix-right'),
            le[le.length - 1] && le[le.length - 1].fixed === 'right',
          ),
        ),
        style: d,
        id: g,
        ref: He,
      },
      Wa,
    ),
    u && l.createElement(uo, { className: ''.concat(n, '-title') }, u(K)),
    l.createElement(
      'div',
      { ref: Ce, className: ''.concat(n, '-container') },
      An,
    ),
    v && l.createElement(uo, { className: ''.concat(n, '-footer') }, v(K)),
  )
  Ue && (qn = l.createElement(gr, { onResize: Dt }, qn))
  var Lr = Pc(le, vt, p),
    qa = l.useMemo(
      function () {
        return {
          scrollX: fe,
          prefixCls: n,
          getComponent: B,
          scrollbarSize: Se,
          direction: p,
          fixedInfoList: Lr,
          isSticky: nt,
          supportSticky: Ir,
          componentWidth: ne,
          fixHeader: Ve,
          fixColumn: st,
          horizonScroll: Ue,
          tableLayout: Cn,
          rowClassName: i,
          expandedRowClassName: ie.expandedRowClassName,
          expandIcon: Y,
          expandableType: $e,
          expandRowByClick: ie.expandRowByClick,
          expandedRowRender: ie.expandedRowRender,
          onTriggerExpand: A,
          expandIconColumnIndex: ie.expandIconColumnIndex,
          indentSize: ie.indentSize,
          allColumnsFixedLeft: le.every(function (be) {
            return be.fixed === 'left'
          }),
          emptyNode: Pr,
          columns: ge,
          flattenColumns: le,
          onColumnResize: mt,
          hoverStartRow: Z,
          hoverEndRow: me,
          onHover: Q,
          rowExpandable: ie.rowExpandable,
          onRow: C,
          getRowKey: M,
          expandedKeys: ee,
          childrenColumnName: F,
          rowHoverable: P,
        }
      },
      [
        fe,
        n,
        B,
        Se,
        p,
        Lr,
        nt,
        Ir,
        ne,
        Ve,
        st,
        Ue,
        Cn,
        i,
        ie.expandedRowClassName,
        Y,
        $e,
        ie.expandRowByClick,
        ie.expandedRowRender,
        A,
        ie.expandIconColumnIndex,
        ie.indentSize,
        Pr,
        ge,
        le,
        mt,
        Z,
        me,
        Q,
        ie.rowExpandable,
        C,
        M,
        ee,
        F,
        P,
      ],
    )
  return l.createElement(it.Provider, { value: qa }, qn)
}
var Ac = l.forwardRef(_c)
function wa(e) {
  return fa(Ac, e)
}
var Jt = wa()
Jt.EXPAND_COLUMN = Nt
Jt.INTERNAL_HOOKS = xn
Jt.Column = ic
Jt.ColumnGroup = lc
Jt.Summary = ma
var Er = br(null),
  Na = br(null)
function Fc(e, t, r) {
  var n = t || 1
  return r[e + n] - (r[e] || 0)
}
function Wc(e) {
  var t = e.rowInfo,
    r = e.column,
    n = e.colIndex,
    o = e.indent,
    i = e.index,
    d = e.component,
    a = e.renderIndex,
    s = e.record,
    c = e.style,
    f = e.className,
    p = e.inverse,
    u = e.getHeight,
    v = r.render,
    m = r.dataIndex,
    h = r.className,
    g = r.width,
    y = Ze(Na, ['columnsOffset']),
    b = y.columnsOffset,
    x = xa(t, r, n, o, i),
    C = x.key,
    S = x.fixedInfo,
    $ = x.appendCellNode,
    R = x.additionalCellProps,
    w = R.style,
    E = R.colSpan,
    N = E === void 0 ? 1 : E,
    k = R.rowSpan,
    I = k === void 0 ? 1 : k,
    O = n - 1,
    P = Fc(O, N, b),
    K = N > 1 ? g - P : 0,
    D = H(
      H(H({}, w), c),
      {},
      {
        flex: '0 0 '.concat(P, 'px'),
        width: ''.concat(P, 'px'),
        marginRight: K,
        pointerEvents: 'auto',
      },
    ),
    L = l.useMemo(
      function () {
        return p ? I <= 1 : N === 0 || I === 0 || I > 1
      },
      [I, N, p],
    )
  L ? (D.visibility = 'hidden') : p && (D.height = u == null ? void 0 : u(I))
  var B = L
      ? function () {
          return null
        }
      : v,
    M = {}
  return (
    (I === 0 || N === 0) && ((M.rowSpan = 1), (M.colSpan = 1)),
    l.createElement(
      Qt,
      re(
        {
          className: X(h, f),
          ellipsis: r.ellipsis,
          align: r.align,
          scope: r.rowScope,
          component: d,
          prefixCls: t.prefixCls,
          key: C,
          record: s,
          index: i,
          renderIndex: a,
          dataIndex: m,
          render: B,
          shouldCellUpdate: r.shouldCellUpdate,
        },
        S,
        { appendNode: $, additionalProps: H(H({}, R), {}, { style: D }, M) },
      ),
    )
  )
}
var qc = [
    'data',
    'index',
    'className',
    'rowKey',
    'style',
    'extra',
    'getHeight',
  ],
  Vc = l.forwardRef(function (e, t) {
    var r = e.data,
      n = e.index,
      o = e.className,
      i = e.rowKey,
      d = e.style,
      a = e.extra,
      s = e.getHeight,
      c = ut(e, qc),
      f = r.record,
      p = r.indent,
      u = r.index,
      v = Ze(it, [
        'prefixCls',
        'flattenColumns',
        'fixColumn',
        'componentWidth',
        'scrollX',
      ]),
      m = v.scrollX,
      h = v.flattenColumns,
      g = v.prefixCls,
      y = v.fixColumn,
      b = v.componentWidth,
      x = Ze(Er, ['getComponent']),
      C = x.getComponent,
      S = ya(f, i, n, p),
      $ = C(['body', 'row'], 'div'),
      R = C(['body', 'cell'], 'div'),
      w = S.rowSupportExpand,
      E = S.expanded,
      N = S.rowProps,
      k = S.expandedRowRender,
      I = S.expandedRowClassName,
      O
    if (w && E) {
      var P = k(f, n, p + 1, E),
        K = I == null ? void 0 : I(f, n, p),
        D = {}
      y && (D = { style: T({}, '--virtual-width', ''.concat(b, 'px')) })
      var L = ''.concat(g, '-expanded-row-cell')
      O = l.createElement(
        $,
        {
          className: X(
            ''.concat(g, '-expanded-row'),
            ''.concat(g, '-expanded-row-level-').concat(p + 1),
            K,
          ),
        },
        l.createElement(
          Qt,
          {
            component: R,
            prefixCls: g,
            className: X(L, T({}, ''.concat(L, '-fixed'), y)),
            additionalProps: D,
          },
          P,
        ),
      )
    }
    var B = H(H({}, d), {}, { width: m })
    a && ((B.position = 'absolute'), (B.pointerEvents = 'none'))
    var M = l.createElement(
      $,
      re({}, N, c, {
        'data-row-key': i,
        ref: w ? null : t,
        className: X(
          o,
          ''.concat(g, '-row'),
          N == null ? void 0 : N.className,
          T({}, ''.concat(g, '-row-extra'), a),
        ),
        style: H(H({}, B), N == null ? void 0 : N.style),
      }),
      h.map(function (U, z) {
        return l.createElement(Wc, {
          key: z,
          component: R,
          rowInfo: S,
          column: U,
          colIndex: z,
          indent: p,
          index: n,
          renderIndex: u,
          record: f,
          inverse: a,
          getHeight: s,
        })
      }),
    )
    return w ? l.createElement('div', { ref: t }, M, O) : M
  }),
  fo = Yt(Vc),
  Uc = l.forwardRef(function (e, t) {
    var r = e.data,
      n = e.onScroll,
      o = Ze(it, [
        'flattenColumns',
        'onColumnResize',
        'getRowKey',
        'prefixCls',
        'expandedKeys',
        'childrenColumnName',
        'scrollX',
      ]),
      i = o.flattenColumns,
      d = o.onColumnResize,
      a = o.getRowKey,
      s = o.expandedKeys,
      c = o.prefixCls,
      f = o.childrenColumnName,
      p = o.scrollX,
      u = Ze(Er),
      v = u.sticky,
      m = u.scrollY,
      h = u.listItemHeight,
      g = u.getComponent,
      y = u.onScroll,
      b = l.useRef(),
      x = ha(r, f, s, a),
      C = l.useMemo(
        function () {
          var I = 0
          return i.map(function (O) {
            var P = O.width,
              K = O.key
            return (I += P), [K, P, I]
          })
        },
        [i],
      ),
      S = l.useMemo(
        function () {
          return C.map(function (I) {
            return I[2]
          })
        },
        [C],
      )
    l.useEffect(
      function () {
        C.forEach(function (I) {
          var O = ue(I, 2),
            P = O[0],
            K = O[1]
          d(P, K)
        })
      },
      [C],
    ),
      l.useImperativeHandle(t, function () {
        var I,
          O = {
            scrollTo: function (K) {
              var D
              ;(D = b.current) === null || D === void 0 || D.scrollTo(K)
            },
            nativeElement:
              (I = b.current) === null || I === void 0
                ? void 0
                : I.nativeElement,
          }
        return (
          Object.defineProperty(O, 'scrollLeft', {
            get: function () {
              var K
              return (
                ((K = b.current) === null || K === void 0
                  ? void 0
                  : K.getScrollInfo().x) || 0
              )
            },
            set: function (K) {
              var D
              ;(D = b.current) === null ||
                D === void 0 ||
                D.scrollTo({ left: K })
            },
          }),
          O
        )
      })
    var $ = function (O, P) {
        var K,
          D = (K = x[P]) === null || K === void 0 ? void 0 : K.record,
          L = O.onCell
        if (L) {
          var B,
            M = L(D, P)
          return (B = M == null ? void 0 : M.rowSpan) !== null && B !== void 0
            ? B
            : 1
        }
        return 1
      },
      R = function (O) {
        var P = O.start,
          K = O.end,
          D = O.getSize,
          L = O.offsetY
        if (K < 0) return null
        for (
          var B = i.filter(function (ee) {
              return $(ee, P) === 0
            }),
            M = P,
            U = function (Y) {
              if (
                ((B = B.filter(function (F) {
                  return $(F, Y) === 0
                })),
                !B.length)
              )
                return (M = Y), 1
            },
            z = P;
          z >= 0 && !U(z);
          z -= 1
        );
        for (
          var oe = i.filter(function (ee) {
              return $(ee, K) !== 1
            }),
            Z = K,
            me = function (Y) {
              if (
                ((oe = oe.filter(function (F) {
                  return $(F, Y) !== 1
                })),
                !oe.length)
              )
                return (Z = Math.max(Y - 1, K)), 1
            },
            Q = K;
          Q < x.length && !me(Q);
          Q += 1
        );
        for (
          var he = [],
            te = function (Y) {
              var F = x[Y]
              if (!F) return 1
              i.some(function (A) {
                return $(A, Y) > 1
              }) && he.push(Y)
            },
            ie = M;
          ie <= Z;
          ie += 1
        )
          te(ie)
        var $e = he.map(function (ee) {
          var Y = x[ee],
            F = a(Y.record, ee),
            A = function (V) {
              var ne = ee + V - 1,
                W = a(x[ne].record, ne),
                de = D(F, W)
              return de.bottom - de.top
            },
            q = D(F)
          return l.createElement(fo, {
            key: ee,
            data: Y,
            rowKey: F,
            index: ee,
            style: { top: -L + q.top },
            extra: !0,
            getHeight: A,
          })
        })
        return $e
      },
      w = l.useMemo(
        function () {
          return { columnsOffset: S }
        },
        [S],
      ),
      E = ''.concat(c, '-tbody'),
      N = g(['body', 'wrapper']),
      k = {}
    return (
      v &&
        ((k.position = 'sticky'),
        (k.bottom = 0),
        rt(v) === 'object' && v.offsetScroll && (k.bottom = v.offsetScroll)),
      l.createElement(
        Na.Provider,
        { value: w },
        l.createElement(
          Uo,
          {
            fullHeight: !1,
            ref: b,
            prefixCls: ''.concat(E, '-virtual'),
            styles: { horizontalScrollBar: k },
            className: E,
            height: m,
            itemHeight: h || 24,
            data: x,
            itemKey: function (O) {
              return a(O.record)
            },
            component: N,
            scrollWidth: p,
            onVirtualScroll: function (O) {
              var P,
                K = O.x
              n({
                currentTarget:
                  (P = b.current) === null || P === void 0
                    ? void 0
                    : P.nativeElement,
                scrollLeft: K,
              })
            },
            onScroll: y,
            extraRender: R,
          },
          function (I, O, P) {
            var K = a(I.record, O)
            return l.createElement(fo, {
              data: I,
              rowKey: K,
              index: O,
              style: P.style,
            })
          },
        ),
      )
    )
  }),
  Xc = Yt(Uc),
  Gc = function (t, r) {
    var n = r.ref,
      o = r.onScroll
    return l.createElement(Xc, { ref: n, data: t, onScroll: o })
  }
function Yc(e, t) {
  var r = e.data,
    n = e.columns,
    o = e.scroll,
    i = e.sticky,
    d = e.prefixCls,
    a = d === void 0 ? $a : d,
    s = e.className,
    c = e.listItemHeight,
    f = e.components,
    p = e.onScroll,
    u = o || {},
    v = u.x,
    m = u.y
  typeof v != 'number' && (v = 1), typeof m != 'number' && (m = 500)
  var h = It(function (b, x) {
      return mr(f, b) || x
    }),
    g = It(p),
    y = l.useMemo(
      function () {
        return {
          sticky: i,
          scrollY: m,
          listItemHeight: c,
          getComponent: h,
          onScroll: g,
        }
      },
      [i, m, c, h, g],
    )
  return l.createElement(
    Er.Provider,
    { value: y },
    l.createElement(
      Jt,
      re({}, e, {
        className: X(s, ''.concat(a, '-virtual')),
        scroll: H(H({}, o), {}, { x: v }),
        components: H(
          H({}, f),
          {},
          { body: r != null && r.length ? Gc : void 0 },
        ),
        columns: n,
        internalHooks: xn,
        tailor: !0,
        ref: t,
      }),
    ),
  )
}
var Qc = l.forwardRef(Yc)
function ka(e) {
  return fa(Qc, e)
}
ka()
const Jc = (e) => null,
  Zc = (e) => null
var $r = l.createContext(null),
  ed = function (t) {
    for (
      var r = t.prefixCls,
        n = t.level,
        o = t.isStart,
        i = t.isEnd,
        d = ''.concat(r, '-indent-unit'),
        a = [],
        s = 0;
      s < n;
      s += 1
    )
      a.push(
        l.createElement('span', {
          key: s,
          className: X(
            d,
            T(T({}, ''.concat(d, '-start'), o[s]), ''.concat(d, '-end'), i[s]),
          ),
        }),
      )
    return l.createElement(
      'span',
      { 'aria-hidden': 'true', className: ''.concat(r, '-indent') },
      a,
    )
  }
const td = l.memo(ed)
var nd = [
    'eventKey',
    'className',
    'style',
    'dragOver',
    'dragOverGapTop',
    'dragOverGapBottom',
    'isLeaf',
    'isStart',
    'isEnd',
    'expanded',
    'selected',
    'checked',
    'halfChecked',
    'loading',
    'domRef',
    'active',
    'data',
    'onMouseMove',
    'selectable',
  ],
  po = 'open',
  vo = 'close',
  rd = '---',
  od = (function (e) {
    Ho(r, e)
    var t = _o(r)
    function r() {
      var n
      Ao(this, r)
      for (var o = arguments.length, i = new Array(o), d = 0; d < o; d++)
        i[d] = arguments[d]
      return (
        (n = t.call.apply(t, [this].concat(i))),
        T(_(n), 'state', { dragNodeHighlight: !1 }),
        T(_(n), 'selectHandle', void 0),
        T(_(n), 'cacheIndent', void 0),
        T(_(n), 'onSelectorClick', function (a) {
          var s = n.props.context.onNodeClick
          s(a, Fe(n.props)), n.isSelectable() ? n.onSelect(a) : n.onCheck(a)
        }),
        T(_(n), 'onSelectorDoubleClick', function (a) {
          var s = n.props.context.onNodeDoubleClick
          s(a, Fe(n.props))
        }),
        T(_(n), 'onSelect', function (a) {
          if (!n.isDisabled()) {
            var s = n.props.context.onNodeSelect
            s(a, Fe(n.props))
          }
        }),
        T(_(n), 'onCheck', function (a) {
          if (!n.isDisabled()) {
            var s = n.props,
              c = s.disableCheckbox,
              f = s.checked,
              p = n.props.context.onNodeCheck
            if (!(!n.isCheckable() || c)) {
              var u = !f
              p(a, Fe(n.props), u)
            }
          }
        }),
        T(_(n), 'onMouseEnter', function (a) {
          var s = n.props.context.onNodeMouseEnter
          s(a, Fe(n.props))
        }),
        T(_(n), 'onMouseLeave', function (a) {
          var s = n.props.context.onNodeMouseLeave
          s(a, Fe(n.props))
        }),
        T(_(n), 'onContextMenu', function (a) {
          var s = n.props.context.onNodeContextMenu
          s(a, Fe(n.props))
        }),
        T(_(n), 'onDragStart', function (a) {
          var s = n.props.context.onNodeDragStart
          a.stopPropagation(), n.setState({ dragNodeHighlight: !0 }), s(a, _(n))
          try {
            a.dataTransfer.setData('text/plain', '')
          } catch {}
        }),
        T(_(n), 'onDragEnter', function (a) {
          var s = n.props.context.onNodeDragEnter
          a.preventDefault(), a.stopPropagation(), s(a, _(n))
        }),
        T(_(n), 'onDragOver', function (a) {
          var s = n.props.context.onNodeDragOver
          a.preventDefault(), a.stopPropagation(), s(a, _(n))
        }),
        T(_(n), 'onDragLeave', function (a) {
          var s = n.props.context.onNodeDragLeave
          a.stopPropagation(), s(a, _(n))
        }),
        T(_(n), 'onDragEnd', function (a) {
          var s = n.props.context.onNodeDragEnd
          a.stopPropagation(), n.setState({ dragNodeHighlight: !1 }), s(a, _(n))
        }),
        T(_(n), 'onDrop', function (a) {
          var s = n.props.context.onNodeDrop
          a.preventDefault(),
            a.stopPropagation(),
            n.setState({ dragNodeHighlight: !1 }),
            s(a, _(n))
        }),
        T(_(n), 'onExpand', function (a) {
          var s = n.props,
            c = s.loading,
            f = s.context.onNodeExpand
          c || f(a, Fe(n.props))
        }),
        T(_(n), 'setSelectHandle', function (a) {
          n.selectHandle = a
        }),
        T(_(n), 'getNodeState', function () {
          var a = n.props.expanded
          return n.isLeaf() ? null : a ? po : vo
        }),
        T(_(n), 'hasChildren', function () {
          var a = n.props.eventKey,
            s = n.props.context.keyEntities,
            c = ct(s, a) || {},
            f = c.children
          return !!(f || []).length
        }),
        T(_(n), 'isLeaf', function () {
          var a = n.props,
            s = a.isLeaf,
            c = a.loaded,
            f = n.props.context.loadData,
            p = n.hasChildren()
          return s === !1 ? !1 : s || (!f && !p) || (f && c && !p)
        }),
        T(_(n), 'isDisabled', function () {
          var a = n.props.disabled,
            s = n.props.context.disabled
          return !!(s || a)
        }),
        T(_(n), 'isCheckable', function () {
          var a = n.props.checkable,
            s = n.props.context.checkable
          return !s || a === !1 ? !1 : s
        }),
        T(_(n), 'syncLoadData', function (a) {
          var s = a.expanded,
            c = a.loading,
            f = a.loaded,
            p = n.props.context,
            u = p.loadData,
            v = p.onNodeLoad
          c || (u && s && !n.isLeaf() && !f && v(Fe(n.props)))
        }),
        T(_(n), 'isDraggable', function () {
          var a = n.props,
            s = a.data,
            c = a.context.draggable
          return !!(c && (!c.nodeDraggable || c.nodeDraggable(s)))
        }),
        T(_(n), 'renderDragHandler', function () {
          var a = n.props.context,
            s = a.draggable,
            c = a.prefixCls
          return s != null && s.icon
            ? l.createElement(
                'span',
                { className: ''.concat(c, '-draggable-icon') },
                s.icon,
              )
            : null
        }),
        T(_(n), 'renderSwitcherIconDom', function (a) {
          var s = n.props.switcherIcon,
            c = n.props.context.switcherIcon,
            f = s || c
          return typeof f == 'function'
            ? f(H(H({}, n.props), {}, { isLeaf: a }))
            : f
        }),
        T(_(n), 'renderSwitcher', function () {
          var a = n.props.expanded,
            s = n.props.context.prefixCls
          if (n.isLeaf()) {
            var c = n.renderSwitcherIconDom(!0)
            return c !== !1
              ? l.createElement(
                  'span',
                  {
                    className: X(
                      ''.concat(s, '-switcher'),
                      ''.concat(s, '-switcher-noop'),
                    ),
                  },
                  c,
                )
              : null
          }
          var f = X(
              ''.concat(s, '-switcher'),
              ''.concat(s, '-switcher_').concat(a ? po : vo),
            ),
            p = n.renderSwitcherIconDom(!1)
          return p !== !1
            ? l.createElement('span', { onClick: n.onExpand, className: f }, p)
            : null
        }),
        T(_(n), 'renderCheckbox', function () {
          var a = n.props,
            s = a.checked,
            c = a.halfChecked,
            f = a.disableCheckbox,
            p = n.props.context.prefixCls,
            u = n.isDisabled(),
            v = n.isCheckable()
          if (!v) return null
          var m = typeof v != 'boolean' ? v : null
          return l.createElement(
            'span',
            {
              className: X(
                ''.concat(p, '-checkbox'),
                s && ''.concat(p, '-checkbox-checked'),
                !s && c && ''.concat(p, '-checkbox-indeterminate'),
                (u || f) && ''.concat(p, '-checkbox-disabled'),
              ),
              onClick: n.onCheck,
            },
            m,
          )
        }),
        T(_(n), 'renderIcon', function () {
          var a = n.props.loading,
            s = n.props.context.prefixCls
          return l.createElement('span', {
            className: X(
              ''.concat(s, '-iconEle'),
              ''.concat(s, '-icon__').concat(n.getNodeState() || 'docu'),
              a && ''.concat(s, '-icon_loading'),
            ),
          })
        }),
        T(_(n), 'renderSelector', function () {
          var a = n.state.dragNodeHighlight,
            s = n.props,
            c = s.title,
            f = c === void 0 ? rd : c,
            p = s.selected,
            u = s.icon,
            v = s.loading,
            m = s.data,
            h = n.props.context,
            g = h.prefixCls,
            y = h.showIcon,
            b = h.icon,
            x = h.loadData,
            C = h.titleRender,
            S = n.isDisabled(),
            $ = ''.concat(g, '-node-content-wrapper'),
            R
          if (y) {
            var w = u || b
            R = w
              ? l.createElement(
                  'span',
                  {
                    className: X(
                      ''.concat(g, '-iconEle'),
                      ''.concat(g, '-icon__customize'),
                    ),
                  },
                  typeof w == 'function' ? w(n.props) : w,
                )
              : n.renderIcon()
          } else x && v && (R = n.renderIcon())
          var E
          typeof f == 'function' ? (E = f(m)) : C ? (E = C(m)) : (E = f)
          var N = l.createElement(
            'span',
            { className: ''.concat(g, '-title') },
            E,
          )
          return l.createElement(
            'span',
            {
              ref: n.setSelectHandle,
              title: typeof f == 'string' ? f : '',
              className: X(
                ''.concat($),
                ''.concat($, '-').concat(n.getNodeState() || 'normal'),
                !S && (p || a) && ''.concat(g, '-node-selected'),
              ),
              onMouseEnter: n.onMouseEnter,
              onMouseLeave: n.onMouseLeave,
              onContextMenu: n.onContextMenu,
              onClick: n.onSelectorClick,
              onDoubleClick: n.onSelectorDoubleClick,
            },
            R,
            N,
            n.renderDropIndicator(),
          )
        }),
        T(_(n), 'renderDropIndicator', function () {
          var a = n.props,
            s = a.disabled,
            c = a.eventKey,
            f = n.props.context,
            p = f.draggable,
            u = f.dropLevelOffset,
            v = f.dropPosition,
            m = f.prefixCls,
            h = f.indent,
            g = f.dropIndicatorRender,
            y = f.dragOverNodeKey,
            b = f.direction,
            x = !!p,
            C = !s && x && y === c,
            S = h ?? n.cacheIndent
          return (
            (n.cacheIndent = h),
            C
              ? g({
                  dropPosition: v,
                  dropLevelOffset: u,
                  indent: S,
                  prefixCls: m,
                  direction: b,
                })
              : null
          )
        }),
        n
      )
    }
    return (
      Fo(r, [
        {
          key: 'componentDidMount',
          value: function () {
            this.syncLoadData(this.props)
          },
        },
        {
          key: 'componentDidUpdate',
          value: function () {
            this.syncLoadData(this.props)
          },
        },
        {
          key: 'isSelectable',
          value: function () {
            var o = this.props.selectable,
              i = this.props.context.selectable
            return typeof o == 'boolean' ? o : i
          },
        },
        {
          key: 'render',
          value: function () {
            var o,
              i = this.props,
              d = i.eventKey,
              a = i.className,
              s = i.style,
              c = i.dragOver,
              f = i.dragOverGapTop,
              p = i.dragOverGapBottom,
              u = i.isLeaf,
              v = i.isStart,
              m = i.isEnd,
              h = i.expanded,
              g = i.selected,
              y = i.checked,
              b = i.halfChecked,
              x = i.loading,
              C = i.domRef,
              S = i.active
            i.data
            var $ = i.onMouseMove,
              R = i.selectable,
              w = ut(i, nd),
              E = this.props.context,
              N = E.prefixCls,
              k = E.filterTreeNode,
              I = E.keyEntities,
              O = E.dropContainerKey,
              P = E.dropTargetKey,
              K = E.draggingNodeKey,
              D = this.isDisabled(),
              L = _t(w, { aria: !0, data: !0 }),
              B = ct(I, d) || {},
              M = B.level,
              U = m[m.length - 1],
              z = this.isDraggable(),
              oe = !D && z,
              Z = K === d,
              me = R !== void 0 ? { 'aria-selected': !!R } : void 0
            return l.createElement(
              'div',
              re(
                {
                  ref: C,
                  className: X(
                    a,
                    ''.concat(N, '-treenode'),
                    ((o = {}),
                    T(
                      T(
                        T(
                          T(
                            T(
                              T(
                                T(
                                  T(
                                    T(
                                      T(
                                        o,
                                        ''.concat(N, '-treenode-disabled'),
                                        D,
                                      ),
                                      ''
                                        .concat(N, '-treenode-switcher-')
                                        .concat(h ? 'open' : 'close'),
                                      !u,
                                    ),
                                    ''.concat(N, '-treenode-checkbox-checked'),
                                    y,
                                  ),
                                  ''.concat(
                                    N,
                                    '-treenode-checkbox-indeterminate',
                                  ),
                                  b,
                                ),
                                ''.concat(N, '-treenode-selected'),
                                g,
                              ),
                              ''.concat(N, '-treenode-loading'),
                              x,
                            ),
                            ''.concat(N, '-treenode-active'),
                            S,
                          ),
                          ''.concat(N, '-treenode-leaf-last'),
                          U,
                        ),
                        ''.concat(N, '-treenode-draggable'),
                        z,
                      ),
                      'dragging',
                      Z,
                    ),
                    T(
                      T(
                        T(
                          T(
                            T(
                              T(o, 'drop-target', P === d),
                              'drop-container',
                              O === d,
                            ),
                            'drag-over',
                            !D && c,
                          ),
                          'drag-over-gap-top',
                          !D && f,
                        ),
                        'drag-over-gap-bottom',
                        !D && p,
                      ),
                      'filter-node',
                      k && k(Fe(this.props)),
                    )),
                  ),
                  style: s,
                  draggable: oe,
                  'aria-grabbed': Z,
                  onDragStart: oe ? this.onDragStart : void 0,
                  onDragEnter: z ? this.onDragEnter : void 0,
                  onDragOver: z ? this.onDragOver : void 0,
                  onDragLeave: z ? this.onDragLeave : void 0,
                  onDrop: z ? this.onDrop : void 0,
                  onDragEnd: z ? this.onDragEnd : void 0,
                  onMouseMove: $,
                },
                me,
                L,
              ),
              l.createElement(td, {
                prefixCls: N,
                level: M,
                isStart: v,
                isEnd: m,
              }),
              this.renderDragHandler(),
              this.renderSwitcher(),
              this.renderCheckbox(),
              this.renderSelector(),
            )
          },
        },
      ]),
      r
    )
  })(l.Component),
  Gt = function (t) {
    return l.createElement($r.Consumer, null, function (r) {
      return l.createElement(od, re({}, t, { context: r }))
    })
  }
Gt.displayName = 'TreeNode'
Gt.isTreeNode = 1
function bt(e, t) {
  if (!e) return []
  var r = e.slice(),
    n = r.indexOf(t)
  return n >= 0 && r.splice(n, 1), r
}
function St(e, t) {
  var r = (e || []).slice()
  return r.indexOf(t) === -1 && r.push(t), r
}
function wr(e) {
  return e.split('-')
}
function ad(e, t) {
  var r = [],
    n = ct(t, e)
  function o() {
    var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
    i.forEach(function (d) {
      var a = d.key,
        s = d.children
      r.push(a), o(s)
    })
  }
  return o(n.children), r
}
function id(e) {
  if (e.parent) {
    var t = wr(e.pos)
    return Number(t[t.length - 1]) === e.parent.children.length - 1
  }
  return !1
}
function ld(e) {
  var t = wr(e.pos)
  return Number(t[t.length - 1]) === 0
}
function mo(e, t, r, n, o, i, d, a, s, c) {
  var f,
    p = e.clientX,
    u = e.clientY,
    v = e.target.getBoundingClientRect(),
    m = v.top,
    h = v.height,
    g = (c === 'rtl' ? -1 : 1) * (((o == null ? void 0 : o.x) || 0) - p),
    y = (g - 12) / n,
    b = s.filter(function (D) {
      var L
      return (L = a[D]) === null ||
        L === void 0 ||
        (L = L.children) === null ||
        L === void 0
        ? void 0
        : L.length
    }),
    x = ct(a, r.props.eventKey)
  if (u < m + h / 2) {
    var C = d.findIndex(function (D) {
        return D.key === x.key
      }),
      S = C <= 0 ? 0 : C - 1,
      $ = d[S].key
    x = ct(a, $)
  }
  var R = x.key,
    w = x,
    E = x.key,
    N = 0,
    k = 0
  if (!b.includes(R))
    for (var I = 0; I < y && id(x); I += 1) (x = x.parent), (k += 1)
  var O = t.props.data,
    P = x.node,
    K = !0
  return (
    ld(x) &&
    x.level === 0 &&
    u < m + h / 2 &&
    i({ dragNode: O, dropNode: P, dropPosition: -1 }) &&
    x.key === r.props.eventKey
      ? (N = -1)
      : (w.children || []).length && b.includes(E)
        ? i({ dragNode: O, dropNode: P, dropPosition: 0 })
          ? (N = 0)
          : (K = !1)
        : k === 0
          ? y > -1.5
            ? i({ dragNode: O, dropNode: P, dropPosition: 1 })
              ? (N = 1)
              : (K = !1)
            : i({ dragNode: O, dropNode: P, dropPosition: 0 })
              ? (N = 0)
              : i({ dragNode: O, dropNode: P, dropPosition: 1 })
                ? (N = 1)
                : (K = !1)
          : i({ dragNode: O, dropNode: P, dropPosition: 1 })
            ? (N = 1)
            : (K = !1),
    {
      dropPosition: N,
      dropLevelOffset: k,
      dropTargetKey: x.key,
      dropTargetPos: x.pos,
      dragOverNodeKey: E,
      dropContainerKey:
        N === 0
          ? null
          : ((f = x.parent) === null || f === void 0 ? void 0 : f.key) || null,
      dropAllowed: K,
    }
  )
}
function go(e, t) {
  if (e) {
    var r = t.multiple
    return r ? e.slice() : e.length ? [e[0]] : e
  }
}
function Xn(e) {
  if (!e) return null
  var t
  if (Array.isArray(e)) t = { checkedKeys: e, halfCheckedKeys: void 0 }
  else if (rt(e) === 'object')
    t = {
      checkedKeys: e.checked || void 0,
      halfCheckedKeys: e.halfChecked || void 0,
    }
  else return kt(!1, '`checkedKeys` is not an array or an object'), null
  return t
}
function ar(e, t) {
  var r = new Set()
  function n(o) {
    if (!r.has(o)) {
      var i = ct(t, o)
      if (i) {
        r.add(o)
        var d = i.parent,
          a = i.node
        a.disabled || (d && n(d.key))
      }
    }
  }
  return (
    (e || []).forEach(function (o) {
      n(o)
    }),
    ve(r)
  )
}
function sd(e) {
  const [t, r] = l.useState(null)
  return [
    l.useCallback(
      (i, d, a) => {
        const s = t ?? i,
          c = Math.min(s || 0, i),
          f = Math.max(s || 0, i),
          p = d.slice(c, f + 1).map((m) => e(m)),
          u = p.some((m) => !a.has(m)),
          v = []
        return (
          p.forEach((m) => {
            u ? (a.has(m) || v.push(m), a.add(m)) : (a.delete(m), v.push(m))
          }),
          r(u ? f : null),
          v
        )
      },
      [t],
    ),
    (i) => {
      r(i)
    },
  ]
}
const wt = {},
  ir = 'SELECT_ALL',
  lr = 'SELECT_INVERT',
  sr = 'SELECT_NONE',
  ho = [],
  Ra = (e, t) => {
    let r = []
    return (
      (t || []).forEach((n) => {
        r.push(n),
          n &&
            typeof n == 'object' &&
            e in n &&
            (r = [].concat(ve(r), ve(Ra(e, n[e]))))
      }),
      r
    )
  },
  cd = (e, t) => {
    const {
        preserveSelectedRowKeys: r,
        selectedRowKeys: n,
        defaultSelectedRowKeys: o,
        getCheckboxProps: i,
        onChange: d,
        onSelect: a,
        onSelectAll: s,
        onSelectInvert: c,
        onSelectNone: f,
        onSelectMultiple: p,
        columnWidth: u,
        type: v,
        selections: m,
        fixed: h,
        renderCell: g,
        hideSelectAll: y,
        checkStrictly: b = !0,
      } = t || {},
      {
        prefixCls: x,
        data: C,
        pageData: S,
        getRecordByKey: $,
        getRowKey: R,
        expandType: w,
        childrenColumnName: E,
        locale: N,
        getPopupContainer: k,
      } = e,
      I = Dn(),
      [O, P] = sd((Y) => Y),
      [K, D] = Rn(n || o || ho, { value: n }),
      L = l.useRef(new Map()),
      B = l.useCallback(
        (Y) => {
          if (r) {
            const F = new Map()
            Y.forEach((A) => {
              let q = $(A)
              !q && L.current.has(A) && (q = L.current.get(A)), F.set(A, q)
            }),
              (L.current = F)
          }
        },
        [$, r],
      )
    l.useEffect(() => {
      B(K)
    }, [K])
    const M = l.useMemo(() => Ra(E, S), [E, S]),
      { keyEntities: U } = l.useMemo(() => {
        if (b) return { keyEntities: null }
        let Y = C
        if (r) {
          const F = new Set(M.map((q, se) => R(q, se))),
            A = Array.from(L.current).reduce((q, se) => {
              let [V, ne] = se
              return F.has(V) ? q : q.concat(ne)
            }, [])
          Y = [].concat(ve(Y), ve(A))
        }
        return yr(Y, { externalGetKey: R, childrenPropName: E })
      }, [C, R, b, E, r, M]),
      z = l.useMemo(() => {
        const Y = new Map()
        return (
          M.forEach((F, A) => {
            const q = R(F, A),
              se = (i ? i(F) : null) || {}
            Y.set(q, se)
          }),
          Y
        )
      }, [M, R, i]),
      oe = l.useCallback(
        (Y) => {
          var F
          return !!(!((F = z.get(R(Y))) === null || F === void 0) && F.disabled)
        },
        [z, R],
      ),
      [Z, me] = l.useMemo(() => {
        if (b) return [K || [], []]
        const { checkedKeys: Y, halfCheckedKeys: F } = Vt(K, !0, U, oe)
        return [Y || [], F]
      }, [K, b, U, oe]),
      Q = l.useMemo(() => {
        const Y = v === 'radio' ? Z.slice(0, 1) : Z
        return new Set(Y)
      }, [Z, v]),
      he = l.useMemo(() => (v === 'radio' ? new Set() : new Set(me)), [me, v])
    l.useEffect(() => {
      t || D(ho)
    }, [!!t])
    const te = l.useCallback(
        (Y, F) => {
          let A, q
          B(Y),
            r
              ? ((A = Y), (q = Y.map((se) => L.current.get(se))))
              : ((A = []),
                (q = []),
                Y.forEach((se) => {
                  const V = $(se)
                  V !== void 0 && (A.push(se), q.push(V))
                })),
            D(A),
            d == null || d(A, q, { type: F })
        },
        [D, $, d, r],
      ),
      ie = l.useCallback(
        (Y, F, A, q) => {
          if (a) {
            const se = A.map((V) => $(V))
            a($(Y), F, se, q)
          }
          te(A, 'single')
        },
        [a, $, te],
      ),
      $e = l.useMemo(
        () =>
          !m || y
            ? null
            : (m === !0 ? [ir, lr, sr] : m)
                .map((F) =>
                  F === ir
                    ? {
                        key: 'all',
                        text: N.selectionAll,
                        onSelect() {
                          te(
                            C.map((A, q) => R(A, q)).filter((A) => {
                              const q = z.get(A)
                              return !(q != null && q.disabled) || Q.has(A)
                            }),
                            'all',
                          )
                        },
                      }
                    : F === lr
                      ? {
                          key: 'invert',
                          text: N.selectInvert,
                          onSelect() {
                            const A = new Set(Q)
                            S.forEach((se, V) => {
                              const ne = R(se, V),
                                W = z.get(ne)
                              ;(W != null && W.disabled) ||
                                (A.has(ne) ? A.delete(ne) : A.add(ne))
                            })
                            const q = Array.from(A)
                            c &&
                              (I.deprecated(!1, 'onSelectInvert', 'onChange'),
                              c(q)),
                              te(q, 'invert')
                          },
                        }
                      : F === sr
                        ? {
                            key: 'none',
                            text: N.selectNone,
                            onSelect() {
                              f == null || f(),
                                te(
                                  Array.from(Q).filter((A) => {
                                    const q = z.get(A)
                                    return q == null ? void 0 : q.disabled
                                  }),
                                  'none',
                                )
                            },
                          }
                        : F,
                )
                .map((F) =>
                  Object.assign(Object.assign({}, F), {
                    onSelect: function () {
                      for (
                        var A,
                          q,
                          se = arguments.length,
                          V = new Array(se),
                          ne = 0;
                        ne < se;
                        ne++
                      )
                        V[ne] = arguments[ne]
                      ;(q = F.onSelect) === null ||
                        q === void 0 ||
                        (A = q).call.apply(A, [F].concat(V)),
                        P(null)
                    },
                  }),
                ),
        [m, Q, S, R, c, te],
      )
    return [
      l.useCallback(
        (Y) => {
          var F
          if (!t) return Y.filter((Ce) => Ce !== wt)
          let A = ve(Y)
          const q = new Set(Q),
            se = M.map(R).filter((Ce) => !z.get(Ce).disabled),
            V = se.every((Ce) => q.has(Ce)),
            ne = se.some((Ce) => q.has(Ce)),
            W = () => {
              const Ce = []
              V
                ? se.forEach((ye) => {
                    q.delete(ye), Ce.push(ye)
                  })
                : se.forEach((ye) => {
                    q.has(ye) || (q.add(ye), Ce.push(ye))
                  })
              const Ie = Array.from(q)
              s == null ||
                s(
                  !V,
                  Ie.map((ye) => $(ye)),
                  Ce.map((ye) => $(ye)),
                ),
                te(Ie, 'all'),
                P(null)
            }
          let de, G
          if (v !== 'radio') {
            let Ce
            if ($e) {
              const ke = {
                getPopupContainer: k,
                items: $e.map((Ae, _e) => {
                  const { key: Le, text: qe, onSelect: dt } = Ae
                  return {
                    key: Le ?? _e,
                    onClick: () => {
                      dt == null || dt(se)
                    },
                    label: qe,
                  }
                }),
              }
              Ce = l.createElement(
                'div',
                { className: `${x}-selection-extra` },
                l.createElement(
                  Wo,
                  { menu: ke, getPopupContainer: k },
                  l.createElement('span', null, l.createElement(Ti, null)),
                ),
              )
            }
            const Ie = M.map((ke, Ae) => {
                const _e = R(ke, Ae),
                  Le = z.get(_e) || {}
                return Object.assign({ checked: q.has(_e) }, Le)
              }).filter((ke) => {
                let { disabled: Ae } = ke
                return Ae
              }),
              ye = !!Ie.length && Ie.length === M.length,
              Me =
                ye &&
                Ie.every((ke) => {
                  let { checked: Ae } = ke
                  return Ae
                }),
              Te =
                ye &&
                Ie.some((ke) => {
                  let { checked: Ae } = ke
                  return Ae
                })
            ;(G = l.createElement(In, {
              checked: ye ? Me : !!M.length && V,
              indeterminate: ye ? !Me && Te : !V && ne,
              onChange: W,
              disabled: M.length === 0 || ye,
              'aria-label': Ce ? 'Custom selection' : 'Select all',
              skipGroup: !0,
            })),
              (de =
                !y &&
                l.createElement('div', { className: `${x}-selection` }, G, Ce))
          }
          let ge
          v === 'radio'
            ? (ge = (Ce, Ie, ye) => {
                const Me = R(Ie, ye),
                  Te = q.has(Me)
                return {
                  node: l.createElement(
                    yn,
                    Object.assign({}, z.get(Me), {
                      checked: Te,
                      onClick: (ke) => ke.stopPropagation(),
                      onChange: (ke) => {
                        q.has(Me) || ie(Me, !0, [Me], ke.nativeEvent)
                      },
                    }),
                  ),
                  checked: Te,
                }
              })
            : (ge = (Ce, Ie, ye) => {
                var Me
                const Te = R(Ie, ye),
                  ke = q.has(Te),
                  Ae = he.has(Te),
                  _e = z.get(Te)
                let Le
                return (
                  w === 'nest'
                    ? (Le = Ae)
                    : (Le =
                        (Me = _e == null ? void 0 : _e.indeterminate) !==
                          null && Me !== void 0
                          ? Me
                          : Ae),
                  {
                    node: l.createElement(
                      In,
                      Object.assign({}, _e, {
                        indeterminate: Le,
                        checked: ke,
                        skipGroup: !0,
                        onClick: (qe) => qe.stopPropagation(),
                        onChange: (qe) => {
                          let { nativeEvent: dt } = qe
                          const { shiftKey: Et } = dt,
                            Ke = se.findIndex((et) => et === Te),
                            Pt = Z.some((et) => se.includes(et))
                          if (Et && b && Pt) {
                            const et = O(Ke, se, q),
                              lt = Array.from(q)
                            p == null ||
                              p(
                                !ke,
                                lt.map((tt) => $(tt)),
                                et.map((tt) => $(tt)),
                              ),
                              te(lt, 'multiple')
                          } else {
                            const et = Z
                            if (b) {
                              const lt = ke ? bt(et, Te) : St(et, Te)
                              ie(Te, !ke, lt, dt)
                            } else {
                              const lt = Vt([].concat(ve(et), [Te]), !0, U, oe),
                                { checkedKeys: tt, halfCheckedKeys: vt } = lt
                              let Ve = tt
                              if (ke) {
                                const Ue = new Set(tt)
                                Ue.delete(Te),
                                  (Ve = Vt(
                                    Array.from(Ue),
                                    { checked: !1, halfCheckedKeys: vt },
                                    U,
                                    oe,
                                  ).checkedKeys)
                              }
                              ie(Te, !ke, Ve, dt)
                            }
                          }
                          P(ke ? null : Ke)
                        },
                      }),
                    ),
                    checked: ke,
                  }
                )
              })
          const le = (Ce, Ie, ye) => {
            const { node: Me, checked: Te } = ge(Ce, Ie, ye)
            return g ? g(Te, Ie, ye, Me) : Me
          }
          if (!A.includes(wt))
            if (
              A.findIndex((Ce) => {
                var Ie
                return (
                  ((Ie = Ce[dn]) === null || Ie === void 0
                    ? void 0
                    : Ie.columnType) === 'EXPAND_COLUMN'
                )
              }) === 0
            ) {
              const [Ce, ...Ie] = A
              A = [Ce, wt].concat(ve(Ie))
            } else A = [wt].concat(ve(A))
          const we = A.indexOf(wt)
          A = A.filter((Ce, Ie) => Ce !== wt || Ie === we)
          const xe = A[we - 1],
            fe = A[we + 1]
          let Oe = h
          Oe === void 0 &&
            ((fe == null ? void 0 : fe.fixed) !== void 0
              ? (Oe = fe.fixed)
              : (xe == null ? void 0 : xe.fixed) !== void 0 && (Oe = xe.fixed)),
            Oe &&
              xe &&
              ((F = xe[dn]) === null || F === void 0
                ? void 0
                : F.columnType) === 'EXPAND_COLUMN' &&
              xe.fixed === void 0 &&
              (xe.fixed = Oe)
          const He = X(`${x}-selection-col`, {
              [`${x}-selection-col-with-dropdown`]: m && v === 'checkbox',
            }),
            ot = () =>
              t != null && t.columnTitle
                ? typeof t.columnTitle == 'function'
                  ? t.columnTitle(G)
                  : t.columnTitle
                : de,
            Pe = {
              fixed: Oe,
              width: u,
              className: `${x}-selection-column`,
              title: ot(),
              render: le,
              onCell: t.onCell,
              [dn]: { className: He },
            }
          return A.map((Ce) => (Ce === wt ? Pe : Ce))
        },
        [R, M, t, Z, Q, he, u, $e, w, z, p, ie, oe],
      ),
      Q,
    ]
  }
function dd(e, t) {
  return (
    (e._antProxy = e._antProxy || {}),
    Object.keys(t).forEach((r) => {
      if (!(r in e._antProxy)) {
        const n = e[r]
        ;(e._antProxy[r] = n), (e[r] = t[r])
      }
    }),
    e
  )
}
function ud(e, t) {
  return l.useImperativeHandle(e, () => {
    const r = t(),
      { nativeElement: n } = r
    return typeof Proxy < 'u'
      ? new Proxy(n, {
          get(o, i) {
            return r[i] ? r[i] : Reflect.get(o, i)
          },
        })
      : dd(n, r)
  })
}
function fd(e) {
  return (t) => {
    const {
        prefixCls: r,
        onExpand: n,
        record: o,
        expanded: i,
        expandable: d,
      } = t,
      a = `${r}-row-expand-icon`
    return l.createElement('button', {
      type: 'button',
      onClick: (s) => {
        n(o, s), s.stopPropagation()
      },
      className: X(a, {
        [`${a}-spaced`]: !d,
        [`${a}-expanded`]: d && i,
        [`${a}-collapsed`]: d && !i,
      }),
      'aria-label': i ? e.collapse : e.expand,
      'aria-expanded': i,
    })
  }
}
function pd(e) {
  return (r, n) => {
    const o = r.querySelector(`.${e}-container`)
    let i = n
    if (o) {
      const d = getComputedStyle(o),
        a = parseInt(d.borderLeftWidth, 10),
        s = parseInt(d.borderRightWidth, 10)
      i = n - a - s
    }
    return i
  }
}
const Ot = (e, t) =>
  'key' in e && e.key !== void 0 && e.key !== null
    ? e.key
    : e.dataIndex
      ? Array.isArray(e.dataIndex)
        ? e.dataIndex.join('.')
        : e.dataIndex
      : t
function Zt(e, t) {
  return t ? `${t}-${e}` : `${e}`
}
const Hn = (e, t) => (typeof e == 'function' ? e(t) : e),
  vd = (e, t) => {
    const r = Hn(e, t)
    return Object.prototype.toString.call(r) === '[object Object]' ? '' : r
  }
function md(e) {
  const t = l.useRef(e),
    r = Zo()
  return [
    () => t.current,
    (n) => {
      ;(t.current = n), r()
    },
  ]
}
function gd(e) {
  var t = e.dropPosition,
    r = e.dropLevelOffset,
    n = e.indent,
    o = {
      pointerEvents: 'none',
      position: 'absolute',
      right: 0,
      backgroundColor: 'red',
      height: 2,
    }
  switch (t) {
    case -1:
      ;(o.top = 0), (o.left = -r * n)
      break
    case 1:
      ;(o.bottom = 0), (o.left = -r * n)
      break
    case 0:
      ;(o.bottom = 0), (o.left = n)
      break
  }
  return l.createElement('div', { style: o })
}
function Ia(e) {
  if (e == null) throw new TypeError('Cannot destructure ' + e)
}
function hd(e, t) {
  var r = l.useState(!1),
    n = ue(r, 2),
    o = n[0],
    i = n[1]
  Ht(
    function () {
      if (o)
        return (
          e(),
          function () {
            t()
          }
        )
    },
    [o],
  ),
    Ht(function () {
      return (
        i(!0),
        function () {
          i(!1)
        }
      )
    }, [])
}
var yd = [
    'className',
    'style',
    'motion',
    'motionNodes',
    'motionType',
    'onMotionStart',
    'onMotionEnd',
    'active',
    'treeNodeRequiredProps',
  ],
  Oa = function (t, r) {
    var n = t.className,
      o = t.style,
      i = t.motion,
      d = t.motionNodes,
      a = t.motionType,
      s = t.onMotionStart,
      c = t.onMotionEnd,
      f = t.active,
      p = t.treeNodeRequiredProps,
      u = ut(t, yd),
      v = l.useState(!0),
      m = ue(v, 2),
      h = m[0],
      g = m[1],
      y = l.useContext($r),
      b = y.prefixCls,
      x = d && a !== 'hide'
    Ht(
      function () {
        d && x !== h && g(x)
      },
      [d],
    )
    var C = function () {
        d && s()
      },
      S = l.useRef(!1),
      $ = function () {
        d && !S.current && ((S.current = !0), c())
      }
    hd(C, $)
    var R = function (E) {
      x === E && $()
    }
    return d
      ? l.createElement(
          yi,
          re({ ref: r, visible: h }, i, {
            motionAppear: a === 'show',
            onVisibleChanged: R,
          }),
          function (w, E) {
            var N = w.className,
              k = w.style
            return l.createElement(
              'div',
              {
                ref: E,
                className: X(''.concat(b, '-treenode-motion'), N),
                style: k,
              },
              d.map(function (I) {
                var O = Object.assign({}, (Ia(I.data), I.data)),
                  P = I.title,
                  K = I.key,
                  D = I.isStart,
                  L = I.isEnd
                delete O.children
                var B = cn(K, p)
                return l.createElement(
                  Gt,
                  re({}, O, B, {
                    title: P,
                    active: f,
                    data: I.data,
                    key: K,
                    isStart: D,
                    isEnd: L,
                  }),
                )
              }),
            )
          },
        )
      : l.createElement(
          Gt,
          re({ domRef: r, className: n, style: o }, u, { active: f }),
        )
  }
Oa.displayName = 'MotionTreeNode'
var bd = l.forwardRef(Oa)
function xd() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    r = e.length,
    n = t.length
  if (Math.abs(r - n) !== 1) return { add: !1, key: null }
  function o(i, d) {
    var a = new Map()
    i.forEach(function (c) {
      a.set(c, !0)
    })
    var s = d.filter(function (c) {
      return !a.has(c)
    })
    return s.length === 1 ? s[0] : null
  }
  return r < n ? { add: !0, key: o(e, t) } : { add: !1, key: o(t, e) }
}
function yo(e, t, r) {
  var n = e.findIndex(function (a) {
      return a.key === r
    }),
    o = e[n + 1],
    i = t.findIndex(function (a) {
      return a.key === r
    })
  if (o) {
    var d = t.findIndex(function (a) {
      return a.key === o.key
    })
    return t.slice(i + 1, d)
  }
  return t.slice(i + 1)
}
var Cd = [
    'prefixCls',
    'data',
    'selectable',
    'checkable',
    'expandedKeys',
    'selectedKeys',
    'checkedKeys',
    'loadedKeys',
    'loadingKeys',
    'halfCheckedKeys',
    'keyEntities',
    'disabled',
    'dragging',
    'dragOverNodeKey',
    'dropPosition',
    'motion',
    'height',
    'itemHeight',
    'virtual',
    'focusable',
    'activeItem',
    'focused',
    'tabIndex',
    'onKeyDown',
    'onFocus',
    'onBlur',
    'onActiveChange',
    'onListChangeStart',
    'onListChangeEnd',
  ],
  bo = {
    width: 0,
    height: 0,
    display: 'flex',
    overflow: 'hidden',
    opacity: 0,
    border: 0,
    padding: 0,
    margin: 0,
  },
  Sd = function () {},
  At = 'RC_TREE_MOTION_'.concat(Math.random()),
  cr = { key: At },
  Pa = { key: At, level: 0, index: 0, pos: '0', node: cr, nodes: [cr] },
  xo = {
    parent: null,
    children: [],
    pos: Pa.pos,
    data: cr,
    title: null,
    key: At,
    isStart: [],
    isEnd: [],
  }
function Co(e, t, r, n) {
  return t === !1 || !r ? e : e.slice(0, Math.ceil(r / n) + 1)
}
function So(e) {
  var t = e.key,
    r = e.pos
  return bn(t, r)
}
function Ed(e) {
  for (var t = String(e.data.key), r = e; r.parent; )
    (r = r.parent), (t = ''.concat(r.data.key, ' > ').concat(t))
  return t
}
var Ka = l.forwardRef(function (e, t) {
  var r = e.prefixCls,
    n = e.data
  e.selectable, e.checkable
  var o = e.expandedKeys,
    i = e.selectedKeys,
    d = e.checkedKeys,
    a = e.loadedKeys,
    s = e.loadingKeys,
    c = e.halfCheckedKeys,
    f = e.keyEntities,
    p = e.disabled,
    u = e.dragging,
    v = e.dragOverNodeKey,
    m = e.dropPosition,
    h = e.motion,
    g = e.height,
    y = e.itemHeight,
    b = e.virtual,
    x = e.focusable,
    C = e.activeItem,
    S = e.focused,
    $ = e.tabIndex,
    R = e.onKeyDown,
    w = e.onFocus,
    E = e.onBlur,
    N = e.onActiveChange,
    k = e.onListChangeStart,
    I = e.onListChangeEnd,
    O = ut(e, Cd),
    P = l.useRef(null),
    K = l.useRef(null)
  l.useImperativeHandle(t, function () {
    return {
      scrollTo: function (ge) {
        P.current.scrollTo(ge)
      },
      getIndentWidth: function () {
        return K.current.offsetWidth
      },
    }
  })
  var D = l.useState(o),
    L = ue(D, 2),
    B = L[0],
    M = L[1],
    U = l.useState(n),
    z = ue(U, 2),
    oe = z[0],
    Z = z[1],
    me = l.useState(n),
    Q = ue(me, 2),
    he = Q[0],
    te = Q[1],
    ie = l.useState([]),
    $e = ue(ie, 2),
    ee = $e[0],
    Y = $e[1],
    F = l.useState(null),
    A = ue(F, 2),
    q = A[0],
    se = A[1],
    V = l.useRef(n)
  V.current = n
  function ne() {
    var G = V.current
    Z(G), te(G), Y([]), se(null), I()
  }
  Ht(
    function () {
      M(o)
      var G = xd(B, o)
      if (G.key !== null)
        if (G.add) {
          var ge = oe.findIndex(function (He) {
              var ot = He.key
              return ot === G.key
            }),
            le = Co(yo(oe, n, G.key), b, g, y),
            we = oe.slice()
          we.splice(ge + 1, 0, xo), te(we), Y(le), se('show')
        } else {
          var xe = n.findIndex(function (He) {
              var ot = He.key
              return ot === G.key
            }),
            fe = Co(yo(n, oe, G.key), b, g, y),
            Oe = n.slice()
          Oe.splice(xe + 1, 0, xo), te(Oe), Y(fe), se('hide')
        }
      else oe !== n && (Z(n), te(n))
    },
    [o, n],
  ),
    l.useEffect(
      function () {
        u || ne()
      },
      [u],
    )
  var W = h ? he : n,
    de = {
      expandedKeys: o,
      selectedKeys: i,
      loadedKeys: a,
      loadingKeys: s,
      checkedKeys: d,
      halfCheckedKeys: c,
      dragOverNodeKey: v,
      dropPosition: m,
      keyEntities: f,
    }
  return l.createElement(
    l.Fragment,
    null,
    S &&
      C &&
      l.createElement('span', { style: bo, 'aria-live': 'assertive' }, Ed(C)),
    l.createElement(
      'div',
      null,
      l.createElement('input', {
        style: bo,
        disabled: x === !1 || p,
        tabIndex: x !== !1 ? $ : null,
        onKeyDown: R,
        onFocus: w,
        onBlur: E,
        value: '',
        onChange: Sd,
        'aria-label': 'for screen reader',
      }),
    ),
    l.createElement(
      'div',
      {
        className: ''.concat(r, '-treenode'),
        'aria-hidden': !0,
        style: {
          position: 'absolute',
          pointerEvents: 'none',
          visibility: 'hidden',
          height: 0,
          overflow: 'hidden',
          border: 0,
          padding: 0,
        },
      },
      l.createElement(
        'div',
        { className: ''.concat(r, '-indent') },
        l.createElement('div', {
          ref: K,
          className: ''.concat(r, '-indent-unit'),
        }),
      ),
    ),
    l.createElement(
      Uo,
      re({}, O, {
        data: W,
        itemKey: So,
        height: g,
        fullHeight: !1,
        virtual: b,
        itemHeight: y,
        prefixCls: ''.concat(r, '-list'),
        ref: P,
        onVisibleChange: function (ge) {
          ge.every(function (le) {
            return So(le) !== At
          }) && ne()
        },
      }),
      function (G) {
        var ge = G.pos,
          le = Object.assign({}, (Ia(G.data), G.data)),
          we = G.title,
          xe = G.key,
          fe = G.isStart,
          Oe = G.isEnd,
          He = bn(xe, ge)
        delete le.key, delete le.children
        var ot = cn(He, de)
        return l.createElement(
          bd,
          re({}, le, ot, {
            title: we,
            active: !!C && xe === C.key,
            pos: ge,
            data: G.data,
            isStart: fe,
            isEnd: Oe,
            motion: h,
            motionNodes: xe === At ? ee : null,
            motionType: q,
            onMotionStart: k,
            onMotionEnd: ne,
            treeNodeRequiredProps: de,
            onMouseMove: function () {
              N(null)
            },
          }),
        )
      },
    ),
  )
})
Ka.displayName = 'NodeList'
var $d = 10,
  Nr = (function (e) {
    Ho(r, e)
    var t = _o(r)
    function r() {
      var n
      Ao(this, r)
      for (var o = arguments.length, i = new Array(o), d = 0; d < o; d++)
        i[d] = arguments[d]
      return (
        (n = t.call.apply(t, [this].concat(i))),
        T(_(n), 'destroyed', !1),
        T(_(n), 'delayedDragEnterLogic', void 0),
        T(_(n), 'loadingRetryTimes', {}),
        T(_(n), 'state', {
          keyEntities: {},
          indent: null,
          selectedKeys: [],
          checkedKeys: [],
          halfCheckedKeys: [],
          loadedKeys: [],
          loadingKeys: [],
          expandedKeys: [],
          draggingNodeKey: null,
          dragChildrenKeys: [],
          dropTargetKey: null,
          dropPosition: null,
          dropContainerKey: null,
          dropLevelOffset: null,
          dropTargetPos: null,
          dropAllowed: !0,
          dragOverNodeKey: null,
          treeData: [],
          flattenNodes: [],
          focused: !1,
          activeKey: null,
          listChanging: !1,
          prevProps: null,
          fieldNames: Xt(),
        }),
        T(_(n), 'dragStartMousePosition', null),
        T(_(n), 'dragNode', void 0),
        T(_(n), 'currentMouseOverDroppableNodeKey', null),
        T(_(n), 'listRef', l.createRef()),
        T(_(n), 'onNodeDragStart', function (a, s) {
          var c = n.state,
            f = c.expandedKeys,
            p = c.keyEntities,
            u = n.props.onDragStart,
            v = s.props.eventKey
          ;(n.dragNode = s),
            (n.dragStartMousePosition = { x: a.clientX, y: a.clientY })
          var m = bt(f, v)
          n.setState({
            draggingNodeKey: v,
            dragChildrenKeys: ad(v, p),
            indent: n.listRef.current.getIndentWidth(),
          }),
            n.setExpandedKeys(m),
            window.addEventListener('dragend', n.onWindowDragEnd),
            u == null || u({ event: a, node: Fe(s.props) })
        }),
        T(_(n), 'onNodeDragEnter', function (a, s) {
          var c = n.state,
            f = c.expandedKeys,
            p = c.keyEntities,
            u = c.dragChildrenKeys,
            v = c.flattenNodes,
            m = c.indent,
            h = n.props,
            g = h.onDragEnter,
            y = h.onExpand,
            b = h.allowDrop,
            x = h.direction,
            C = s.props,
            S = C.pos,
            $ = C.eventKey,
            R = _(n),
            w = R.dragNode
          if (
            (n.currentMouseOverDroppableNodeKey !== $ &&
              (n.currentMouseOverDroppableNodeKey = $),
            !w)
          ) {
            n.resetDragState()
            return
          }
          var E = mo(a, w, s, m, n.dragStartMousePosition, b, v, p, f, x),
            N = E.dropPosition,
            k = E.dropLevelOffset,
            I = E.dropTargetKey,
            O = E.dropContainerKey,
            P = E.dropTargetPos,
            K = E.dropAllowed,
            D = E.dragOverNodeKey
          if (u.indexOf(I) !== -1 || !K) {
            n.resetDragState()
            return
          }
          if (
            (n.delayedDragEnterLogic || (n.delayedDragEnterLogic = {}),
            Object.keys(n.delayedDragEnterLogic).forEach(function (L) {
              clearTimeout(n.delayedDragEnterLogic[L])
            }),
            w.props.eventKey !== s.props.eventKey &&
              (a.persist(),
              (n.delayedDragEnterLogic[S] = window.setTimeout(function () {
                if (n.state.draggingNodeKey !== null) {
                  var L = ve(f),
                    B = ct(p, s.props.eventKey)
                  B &&
                    (B.children || []).length &&
                    (L = St(f, s.props.eventKey)),
                    'expandedKeys' in n.props || n.setExpandedKeys(L),
                    y == null ||
                      y(L, {
                        node: Fe(s.props),
                        expanded: !0,
                        nativeEvent: a.nativeEvent,
                      })
                }
              }, 800))),
            w.props.eventKey === I && k === 0)
          ) {
            n.resetDragState()
            return
          }
          n.setState({
            dragOverNodeKey: D,
            dropPosition: N,
            dropLevelOffset: k,
            dropTargetKey: I,
            dropContainerKey: O,
            dropTargetPos: P,
            dropAllowed: K,
          }),
            g == null || g({ event: a, node: Fe(s.props), expandedKeys: f })
        }),
        T(_(n), 'onNodeDragOver', function (a, s) {
          var c = n.state,
            f = c.dragChildrenKeys,
            p = c.flattenNodes,
            u = c.keyEntities,
            v = c.expandedKeys,
            m = c.indent,
            h = n.props,
            g = h.onDragOver,
            y = h.allowDrop,
            b = h.direction,
            x = _(n),
            C = x.dragNode
          if (C) {
            var S = mo(a, C, s, m, n.dragStartMousePosition, y, p, u, v, b),
              $ = S.dropPosition,
              R = S.dropLevelOffset,
              w = S.dropTargetKey,
              E = S.dropContainerKey,
              N = S.dropAllowed,
              k = S.dropTargetPos,
              I = S.dragOverNodeKey
            f.indexOf(w) !== -1 ||
              !N ||
              (C.props.eventKey === w && R === 0
                ? (n.state.dropPosition === null &&
                    n.state.dropLevelOffset === null &&
                    n.state.dropTargetKey === null &&
                    n.state.dropContainerKey === null &&
                    n.state.dropTargetPos === null &&
                    n.state.dropAllowed === !1 &&
                    n.state.dragOverNodeKey === null) ||
                  n.resetDragState()
                : ($ === n.state.dropPosition &&
                    R === n.state.dropLevelOffset &&
                    w === n.state.dropTargetKey &&
                    E === n.state.dropContainerKey &&
                    k === n.state.dropTargetPos &&
                    N === n.state.dropAllowed &&
                    I === n.state.dragOverNodeKey) ||
                  n.setState({
                    dropPosition: $,
                    dropLevelOffset: R,
                    dropTargetKey: w,
                    dropContainerKey: E,
                    dropTargetPos: k,
                    dropAllowed: N,
                    dragOverNodeKey: I,
                  }),
              g == null || g({ event: a, node: Fe(s.props) }))
          }
        }),
        T(_(n), 'onNodeDragLeave', function (a, s) {
          n.currentMouseOverDroppableNodeKey === s.props.eventKey &&
            !a.currentTarget.contains(a.relatedTarget) &&
            (n.resetDragState(), (n.currentMouseOverDroppableNodeKey = null))
          var c = n.props.onDragLeave
          c == null || c({ event: a, node: Fe(s.props) })
        }),
        T(_(n), 'onWindowDragEnd', function (a) {
          n.onNodeDragEnd(a, null, !0),
            window.removeEventListener('dragend', n.onWindowDragEnd)
        }),
        T(_(n), 'onNodeDragEnd', function (a, s) {
          var c = n.props.onDragEnd
          n.setState({ dragOverNodeKey: null }),
            n.cleanDragState(),
            c == null || c({ event: a, node: Fe(s.props) }),
            (n.dragNode = null),
            window.removeEventListener('dragend', n.onWindowDragEnd)
        }),
        T(_(n), 'onNodeDrop', function (a, s) {
          var c,
            f =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : !1,
            p = n.state,
            u = p.dragChildrenKeys,
            v = p.dropPosition,
            m = p.dropTargetKey,
            h = p.dropTargetPos,
            g = p.dropAllowed
          if (g) {
            var y = n.props.onDrop
            if (
              (n.setState({ dragOverNodeKey: null }),
              n.cleanDragState(),
              m !== null)
            ) {
              var b = H(
                  H({}, cn(m, n.getTreeNodeRequiredProps())),
                  {},
                  {
                    active:
                      ((c = n.getActiveItem()) === null || c === void 0
                        ? void 0
                        : c.key) === m,
                    data: ct(n.state.keyEntities, m).node,
                  },
                ),
                x = u.indexOf(m) !== -1
              kt(
                !x,
                "Can not drop to dragNode's children node. This is a bug of rc-tree. Please report an issue.",
              )
              var C = wr(h),
                S = {
                  event: a,
                  node: Fe(b),
                  dragNode: n.dragNode ? Fe(n.dragNode.props) : null,
                  dragNodesKeys: [n.dragNode.props.eventKey].concat(u),
                  dropToGap: v !== 0,
                  dropPosition: v + Number(C[C.length - 1]),
                }
              f || y == null || y(S), (n.dragNode = null)
            }
          }
        }),
        T(_(n), 'cleanDragState', function () {
          var a = n.state.draggingNodeKey
          a !== null &&
            n.setState({
              draggingNodeKey: null,
              dropPosition: null,
              dropContainerKey: null,
              dropTargetKey: null,
              dropLevelOffset: null,
              dropAllowed: !0,
              dragOverNodeKey: null,
            }),
            (n.dragStartMousePosition = null),
            (n.currentMouseOverDroppableNodeKey = null)
        }),
        T(_(n), 'triggerExpandActionExpand', function (a, s) {
          var c = n.state,
            f = c.expandedKeys,
            p = c.flattenNodes,
            u = s.expanded,
            v = s.key,
            m = s.isLeaf
          if (!(m || a.shiftKey || a.metaKey || a.ctrlKey)) {
            var h = p.filter(function (y) {
                return y.key === v
              })[0],
              g = Fe(
                H(
                  H({}, cn(v, n.getTreeNodeRequiredProps())),
                  {},
                  { data: h.data },
                ),
              )
            n.setExpandedKeys(u ? bt(f, v) : St(f, v)), n.onNodeExpand(a, g)
          }
        }),
        T(_(n), 'onNodeClick', function (a, s) {
          var c = n.props,
            f = c.onClick,
            p = c.expandAction
          p === 'click' && n.triggerExpandActionExpand(a, s),
            f == null || f(a, s)
        }),
        T(_(n), 'onNodeDoubleClick', function (a, s) {
          var c = n.props,
            f = c.onDoubleClick,
            p = c.expandAction
          p === 'doubleClick' && n.triggerExpandActionExpand(a, s),
            f == null || f(a, s)
        }),
        T(_(n), 'onNodeSelect', function (a, s) {
          var c = n.state.selectedKeys,
            f = n.state,
            p = f.keyEntities,
            u = f.fieldNames,
            v = n.props,
            m = v.onSelect,
            h = v.multiple,
            g = s.selected,
            y = s[u.key],
            b = !g
          b ? (h ? (c = St(c, y)) : (c = [y])) : (c = bt(c, y))
          var x = c
            .map(function (C) {
              var S = ct(p, C)
              return S ? S.node : null
            })
            .filter(function (C) {
              return C
            })
          n.setUncontrolledState({ selectedKeys: c }),
            m == null ||
              m(c, {
                event: 'select',
                selected: b,
                node: s,
                selectedNodes: x,
                nativeEvent: a.nativeEvent,
              })
        }),
        T(_(n), 'onNodeCheck', function (a, s, c) {
          var f = n.state,
            p = f.keyEntities,
            u = f.checkedKeys,
            v = f.halfCheckedKeys,
            m = n.props,
            h = m.checkStrictly,
            g = m.onCheck,
            y = s.key,
            b,
            x = {
              event: 'check',
              node: s,
              checked: c,
              nativeEvent: a.nativeEvent,
            }
          if (h) {
            var C = c ? St(u, y) : bt(u, y),
              S = bt(v, y)
            ;(b = { checked: C, halfChecked: S }),
              (x.checkedNodes = C.map(function (k) {
                return ct(p, k)
              })
                .filter(function (k) {
                  return k
                })
                .map(function (k) {
                  return k.node
                })),
              n.setUncontrolledState({ checkedKeys: C })
          } else {
            var $ = Vt([].concat(ve(u), [y]), !0, p),
              R = $.checkedKeys,
              w = $.halfCheckedKeys
            if (!c) {
              var E = new Set(R)
              E.delete(y)
              var N = Vt(Array.from(E), { checked: !1, halfCheckedKeys: w }, p)
              ;(R = N.checkedKeys), (w = N.halfCheckedKeys)
            }
            ;(b = R),
              (x.checkedNodes = []),
              (x.checkedNodesPositions = []),
              (x.halfCheckedKeys = w),
              R.forEach(function (k) {
                var I = ct(p, k)
                if (I) {
                  var O = I.node,
                    P = I.pos
                  x.checkedNodes.push(O),
                    x.checkedNodesPositions.push({ node: O, pos: P })
                }
              }),
              n.setUncontrolledState({ checkedKeys: R }, !1, {
                halfCheckedKeys: w,
              })
          }
          g == null || g(b, x)
        }),
        T(_(n), 'onNodeLoad', function (a) {
          var s,
            c = a.key,
            f = n.state.keyEntities,
            p = ct(f, c)
          if (
            !(
              p != null &&
              (s = p.children) !== null &&
              s !== void 0 &&
              s.length
            )
          ) {
            var u = new Promise(function (v, m) {
              n.setState(function (h) {
                var g = h.loadedKeys,
                  y = g === void 0 ? [] : g,
                  b = h.loadingKeys,
                  x = b === void 0 ? [] : b,
                  C = n.props,
                  S = C.loadData,
                  $ = C.onLoad
                if (!S || y.indexOf(c) !== -1 || x.indexOf(c) !== -1)
                  return null
                var R = S(a)
                return (
                  R.then(function () {
                    var w = n.state.loadedKeys,
                      E = St(w, c)
                    $ == null || $(E, { event: 'load', node: a }),
                      n.setUncontrolledState({ loadedKeys: E }),
                      n.setState(function (N) {
                        return { loadingKeys: bt(N.loadingKeys, c) }
                      }),
                      v()
                  }).catch(function (w) {
                    if (
                      (n.setState(function (N) {
                        return { loadingKeys: bt(N.loadingKeys, c) }
                      }),
                      (n.loadingRetryTimes[c] =
                        (n.loadingRetryTimes[c] || 0) + 1),
                      n.loadingRetryTimes[c] >= $d)
                    ) {
                      var E = n.state.loadedKeys
                      kt(
                        !1,
                        'Retry for `loadData` many times but still failed. No more retry.',
                      ),
                        n.setUncontrolledState({ loadedKeys: St(E, c) }),
                        v()
                    }
                    m(w)
                  }),
                  { loadingKeys: St(x, c) }
                )
              })
            })
            return u.catch(function () {}), u
          }
        }),
        T(_(n), 'onNodeMouseEnter', function (a, s) {
          var c = n.props.onMouseEnter
          c == null || c({ event: a, node: s })
        }),
        T(_(n), 'onNodeMouseLeave', function (a, s) {
          var c = n.props.onMouseLeave
          c == null || c({ event: a, node: s })
        }),
        T(_(n), 'onNodeContextMenu', function (a, s) {
          var c = n.props.onRightClick
          c && (a.preventDefault(), c({ event: a, node: s }))
        }),
        T(_(n), 'onFocus', function () {
          var a = n.props.onFocus
          n.setState({ focused: !0 })
          for (var s = arguments.length, c = new Array(s), f = 0; f < s; f++)
            c[f] = arguments[f]
          a == null || a.apply(void 0, c)
        }),
        T(_(n), 'onBlur', function () {
          var a = n.props.onBlur
          n.setState({ focused: !1 }), n.onActiveChange(null)
          for (var s = arguments.length, c = new Array(s), f = 0; f < s; f++)
            c[f] = arguments[f]
          a == null || a.apply(void 0, c)
        }),
        T(_(n), 'getTreeNodeRequiredProps', function () {
          var a = n.state,
            s = a.expandedKeys,
            c = a.selectedKeys,
            f = a.loadedKeys,
            p = a.loadingKeys,
            u = a.checkedKeys,
            v = a.halfCheckedKeys,
            m = a.dragOverNodeKey,
            h = a.dropPosition,
            g = a.keyEntities
          return {
            expandedKeys: s || [],
            selectedKeys: c || [],
            loadedKeys: f || [],
            loadingKeys: p || [],
            checkedKeys: u || [],
            halfCheckedKeys: v || [],
            dragOverNodeKey: m,
            dropPosition: h,
            keyEntities: g,
          }
        }),
        T(_(n), 'setExpandedKeys', function (a) {
          var s = n.state,
            c = s.treeData,
            f = s.fieldNames,
            p = Un(c, a, f)
          n.setUncontrolledState({ expandedKeys: a, flattenNodes: p }, !0)
        }),
        T(_(n), 'onNodeExpand', function (a, s) {
          var c = n.state.expandedKeys,
            f = n.state,
            p = f.listChanging,
            u = f.fieldNames,
            v = n.props,
            m = v.onExpand,
            h = v.loadData,
            g = s.expanded,
            y = s[u.key]
          if (!p) {
            var b = c.indexOf(y),
              x = !g
            if (
              (kt(
                (g && b !== -1) || (!g && b === -1),
                'Expand state not sync with index check',
              ),
              x ? (c = St(c, y)) : (c = bt(c, y)),
              n.setExpandedKeys(c),
              m == null ||
                m(c, { node: s, expanded: x, nativeEvent: a.nativeEvent }),
              x && h)
            ) {
              var C = n.onNodeLoad(s)
              C &&
                C.then(function () {
                  var S = Un(n.state.treeData, c, u)
                  n.setUncontrolledState({ flattenNodes: S })
                }).catch(function () {
                  var S = n.state.expandedKeys,
                    $ = bt(S, y)
                  n.setExpandedKeys($)
                })
            }
          }
        }),
        T(_(n), 'onListChangeStart', function () {
          n.setUncontrolledState({ listChanging: !0 })
        }),
        T(_(n), 'onListChangeEnd', function () {
          setTimeout(function () {
            n.setUncontrolledState({ listChanging: !1 })
          })
        }),
        T(_(n), 'onActiveChange', function (a) {
          var s = n.state.activeKey,
            c = n.props,
            f = c.onActiveChange,
            p = c.itemScrollOffset,
            u = p === void 0 ? 0 : p
          s !== a &&
            (n.setState({ activeKey: a }),
            a !== null && n.scrollTo({ key: a, offset: u }),
            f == null || f(a))
        }),
        T(_(n), 'getActiveItem', function () {
          var a = n.state,
            s = a.activeKey,
            c = a.flattenNodes
          return s === null
            ? null
            : c.find(function (f) {
                var p = f.key
                return p === s
              }) || null
        }),
        T(_(n), 'offsetActiveKey', function (a) {
          var s = n.state,
            c = s.flattenNodes,
            f = s.activeKey,
            p = c.findIndex(function (m) {
              var h = m.key
              return h === f
            })
          p === -1 && a < 0 && (p = c.length),
            (p = (p + a + c.length) % c.length)
          var u = c[p]
          if (u) {
            var v = u.key
            n.onActiveChange(v)
          } else n.onActiveChange(null)
        }),
        T(_(n), 'onKeyDown', function (a) {
          var s = n.state,
            c = s.activeKey,
            f = s.expandedKeys,
            p = s.checkedKeys,
            u = s.fieldNames,
            v = n.props,
            m = v.onKeyDown,
            h = v.checkable,
            g = v.selectable
          switch (a.which) {
            case Ge.UP: {
              n.offsetActiveKey(-1), a.preventDefault()
              break
            }
            case Ge.DOWN: {
              n.offsetActiveKey(1), a.preventDefault()
              break
            }
          }
          var y = n.getActiveItem()
          if (y && y.data) {
            var b = n.getTreeNodeRequiredProps(),
              x = y.data.isLeaf === !1 || !!(y.data[u.children] || []).length,
              C = Fe(H(H({}, cn(c, b)), {}, { data: y.data, active: !0 }))
            switch (a.which) {
              case Ge.LEFT: {
                x && f.includes(c)
                  ? n.onNodeExpand({}, C)
                  : y.parent && n.onActiveChange(y.parent.key),
                  a.preventDefault()
                break
              }
              case Ge.RIGHT: {
                x && !f.includes(c)
                  ? n.onNodeExpand({}, C)
                  : y.children &&
                    y.children.length &&
                    n.onActiveChange(y.children[0].key),
                  a.preventDefault()
                break
              }
              case Ge.ENTER:
              case Ge.SPACE: {
                h && !C.disabled && C.checkable !== !1 && !C.disableCheckbox
                  ? n.onNodeCheck({}, C, !p.includes(c))
                  : !h &&
                    g &&
                    !C.disabled &&
                    C.selectable !== !1 &&
                    n.onNodeSelect({}, C)
                break
              }
            }
          }
          m == null || m(a)
        }),
        T(_(n), 'setUncontrolledState', function (a) {
          var s =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            c =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : null
          if (!n.destroyed) {
            var f = !1,
              p = !0,
              u = {}
            Object.keys(a).forEach(function (v) {
              if (v in n.props) {
                p = !1
                return
              }
              ;(f = !0), (u[v] = a[v])
            }),
              f && (!s || p) && n.setState(H(H({}, u), c))
          }
        }),
        T(_(n), 'scrollTo', function (a) {
          n.listRef.current.scrollTo(a)
        }),
        n
      )
    }
    return (
      Fo(
        r,
        [
          {
            key: 'componentDidMount',
            value: function () {
              ;(this.destroyed = !1), this.onUpdated()
            },
          },
          {
            key: 'componentDidUpdate',
            value: function () {
              this.onUpdated()
            },
          },
          {
            key: 'onUpdated',
            value: function () {
              var o = this.props,
                i = o.activeKey,
                d = o.itemScrollOffset,
                a = d === void 0 ? 0 : d
              i !== void 0 &&
                i !== this.state.activeKey &&
                (this.setState({ activeKey: i }),
                i !== null && this.scrollTo({ key: i, offset: a }))
            },
          },
          {
            key: 'componentWillUnmount',
            value: function () {
              window.removeEventListener('dragend', this.onWindowDragEnd),
                (this.destroyed = !0)
            },
          },
          {
            key: 'resetDragState',
            value: function () {
              this.setState({
                dragOverNodeKey: null,
                dropPosition: null,
                dropLevelOffset: null,
                dropTargetKey: null,
                dropContainerKey: null,
                dropTargetPos: null,
                dropAllowed: !1,
              })
            },
          },
          {
            key: 'render',
            value: function () {
              var o = this.state,
                i = o.focused,
                d = o.flattenNodes,
                a = o.keyEntities,
                s = o.draggingNodeKey,
                c = o.activeKey,
                f = o.dropLevelOffset,
                p = o.dropContainerKey,
                u = o.dropTargetKey,
                v = o.dropPosition,
                m = o.dragOverNodeKey,
                h = o.indent,
                g = this.props,
                y = g.prefixCls,
                b = g.className,
                x = g.style,
                C = g.showLine,
                S = g.focusable,
                $ = g.tabIndex,
                R = $ === void 0 ? 0 : $,
                w = g.selectable,
                E = g.showIcon,
                N = g.icon,
                k = g.switcherIcon,
                I = g.draggable,
                O = g.checkable,
                P = g.checkStrictly,
                K = g.disabled,
                D = g.motion,
                L = g.loadData,
                B = g.filterTreeNode,
                M = g.height,
                U = g.itemHeight,
                z = g.virtual,
                oe = g.titleRender,
                Z = g.dropIndicatorRender,
                me = g.onContextMenu,
                Q = g.onScroll,
                he = g.direction,
                te = g.rootClassName,
                ie = g.rootStyle,
                $e = _t(this.props, { aria: !0, data: !0 }),
                ee
              return (
                I &&
                  (rt(I) === 'object'
                    ? (ee = I)
                    : typeof I == 'function'
                      ? (ee = { nodeDraggable: I })
                      : (ee = {})),
                l.createElement(
                  $r.Provider,
                  {
                    value: {
                      prefixCls: y,
                      selectable: w,
                      showIcon: E,
                      icon: N,
                      switcherIcon: k,
                      draggable: ee,
                      draggingNodeKey: s,
                      checkable: O,
                      checkStrictly: P,
                      disabled: K,
                      keyEntities: a,
                      dropLevelOffset: f,
                      dropContainerKey: p,
                      dropTargetKey: u,
                      dropPosition: v,
                      dragOverNodeKey: m,
                      indent: h,
                      direction: he,
                      dropIndicatorRender: Z,
                      loadData: L,
                      filterTreeNode: B,
                      titleRender: oe,
                      onNodeClick: this.onNodeClick,
                      onNodeDoubleClick: this.onNodeDoubleClick,
                      onNodeExpand: this.onNodeExpand,
                      onNodeSelect: this.onNodeSelect,
                      onNodeCheck: this.onNodeCheck,
                      onNodeLoad: this.onNodeLoad,
                      onNodeMouseEnter: this.onNodeMouseEnter,
                      onNodeMouseLeave: this.onNodeMouseLeave,
                      onNodeContextMenu: this.onNodeContextMenu,
                      onNodeDragStart: this.onNodeDragStart,
                      onNodeDragEnter: this.onNodeDragEnter,
                      onNodeDragOver: this.onNodeDragOver,
                      onNodeDragLeave: this.onNodeDragLeave,
                      onNodeDragEnd: this.onNodeDragEnd,
                      onNodeDrop: this.onNodeDrop,
                    },
                  },
                  l.createElement(
                    'div',
                    {
                      role: 'tree',
                      className: X(
                        y,
                        b,
                        te,
                        T(
                          T(
                            T({}, ''.concat(y, '-show-line'), C),
                            ''.concat(y, '-focused'),
                            i,
                          ),
                          ''.concat(y, '-active-focused'),
                          c !== null,
                        ),
                      ),
                      style: ie,
                    },
                    l.createElement(
                      Ka,
                      re(
                        {
                          ref: this.listRef,
                          prefixCls: y,
                          style: x,
                          data: d,
                          disabled: K,
                          selectable: w,
                          checkable: !!O,
                          motion: D,
                          dragging: s !== null,
                          height: M,
                          itemHeight: U,
                          virtual: z,
                          focusable: S,
                          focused: i,
                          tabIndex: R,
                          activeItem: this.getActiveItem(),
                          onFocus: this.onFocus,
                          onBlur: this.onBlur,
                          onKeyDown: this.onKeyDown,
                          onActiveChange: this.onActiveChange,
                          onListChangeStart: this.onListChangeStart,
                          onListChangeEnd: this.onListChangeEnd,
                          onContextMenu: me,
                          onScroll: Q,
                        },
                        this.getTreeNodeRequiredProps(),
                        $e,
                      ),
                    ),
                  ),
                )
              )
            },
          },
        ],
        [
          {
            key: 'getDerivedStateFromProps',
            value: function (o, i) {
              var d = i.prevProps,
                a = { prevProps: o }
              function s(R) {
                return (!d && R in o) || (d && d[R] !== o[R])
              }
              var c,
                f = i.fieldNames
              if (
                (s('fieldNames') &&
                  ((f = Xt(o.fieldNames)), (a.fieldNames = f)),
                s('treeData')
                  ? (c = o.treeData)
                  : s('children') &&
                    (kt(
                      !1,
                      '`children` of Tree is deprecated. Please use `treeData` instead.',
                    ),
                    (c = aa(o.children))),
                c)
              ) {
                a.treeData = c
                var p = yr(c, { fieldNames: f })
                a.keyEntities = H(T({}, At, Pa), p.keyEntities)
              }
              var u = a.keyEntities || i.keyEntities
              if (s('expandedKeys') || (d && s('autoExpandParent')))
                a.expandedKeys =
                  o.autoExpandParent || (!d && o.defaultExpandParent)
                    ? ar(o.expandedKeys, u)
                    : o.expandedKeys
              else if (!d && o.defaultExpandAll) {
                var v = H({}, u)
                delete v[At]
                var m = []
                Object.keys(v).forEach(function (R) {
                  var w = v[R]
                  w.children && w.children.length && m.push(w.key)
                }),
                  (a.expandedKeys = m)
              } else
                !d &&
                  o.defaultExpandedKeys &&
                  (a.expandedKeys =
                    o.autoExpandParent || o.defaultExpandParent
                      ? ar(o.defaultExpandedKeys, u)
                      : o.defaultExpandedKeys)
              if (
                (a.expandedKeys || delete a.expandedKeys, c || a.expandedKeys)
              ) {
                var h = Un(c || i.treeData, a.expandedKeys || i.expandedKeys, f)
                a.flattenNodes = h
              }
              if (
                (o.selectable &&
                  (s('selectedKeys')
                    ? (a.selectedKeys = go(o.selectedKeys, o))
                    : !d &&
                      o.defaultSelectedKeys &&
                      (a.selectedKeys = go(o.defaultSelectedKeys, o))),
                o.checkable)
              ) {
                var g
                if (
                  (s('checkedKeys')
                    ? (g = Xn(o.checkedKeys) || {})
                    : !d && o.defaultCheckedKeys
                      ? (g = Xn(o.defaultCheckedKeys) || {})
                      : c &&
                        (g = Xn(o.checkedKeys) || {
                          checkedKeys: i.checkedKeys,
                          halfCheckedKeys: i.halfCheckedKeys,
                        }),
                  g)
                ) {
                  var y = g,
                    b = y.checkedKeys,
                    x = b === void 0 ? [] : b,
                    C = y.halfCheckedKeys,
                    S = C === void 0 ? [] : C
                  if (!o.checkStrictly) {
                    var $ = Vt(x, !0, u)
                    ;(x = $.checkedKeys), (S = $.halfCheckedKeys)
                  }
                  ;(a.checkedKeys = x), (a.halfCheckedKeys = S)
                }
              }
              return s('loadedKeys') && (a.loadedKeys = o.loadedKeys), a
            },
          },
        ],
      ),
      r
    )
  })(l.Component)
T(Nr, 'defaultProps', {
  prefixCls: 'rc-tree',
  showLine: !1,
  showIcon: !0,
  selectable: !0,
  multiple: !1,
  checkable: !1,
  disabled: !1,
  checkStrictly: !1,
  draggable: !1,
  defaultExpandParent: !0,
  autoExpandParent: !1,
  defaultExpandAll: !1,
  defaultExpandedKeys: [],
  defaultCheckedKeys: [],
  defaultSelectedKeys: [],
  dropIndicatorRender: gd,
  allowDrop: function () {
    return !0
  },
  expandAction: !1,
})
T(Nr, 'TreeNode', Gt)
const wd = new Zn('ant-tree-node-fx-do-not-use', {
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
  }),
  Nd = (e, t) => ({
    [`.${e}-switcher-icon`]: {
      display: 'inline-block',
      fontSize: 10,
      verticalAlign: 'baseline',
      svg: { transition: `transform ${t.motionDurationSlow}` },
    },
  }),
  kd = (e, t) => ({
    [`.${e}-drop-indicator`]: {
      position: 'absolute',
      zIndex: 1,
      height: 2,
      backgroundColor: t.colorPrimary,
      borderRadius: 1,
      pointerEvents: 'none',
      '&:after': {
        position: 'absolute',
        top: -3,
        insetInlineStart: -6,
        width: 8,
        height: 8,
        backgroundColor: 'transparent',
        border: `${j(t.lineWidthBold)} solid ${t.colorPrimary}`,
        borderRadius: '50%',
        content: '""',
      },
    },
  }),
  Rd = (e, t) => {
    const {
        treeCls: r,
        treeNodeCls: n,
        treeNodePadding: o,
        titleHeight: i,
        nodeSelectedBg: d,
        nodeHoverBg: a,
      } = t,
      s = t.paddingXS
    return {
      [r]: Object.assign(Object.assign({}, Rt(t)), {
        background: t.colorBgContainer,
        borderRadius: t.borderRadius,
        transition: `background-color ${t.motionDurationSlow}`,
        [`&${r}-rtl`]: {
          [`${r}-switcher`]: {
            '&_close': {
              [`${r}-switcher-icon`]: { svg: { transform: 'rotate(90deg)' } },
            },
          },
        },
        [`&-focused:not(:hover):not(${r}-active-focused)`]: Object.assign(
          {},
          un(t),
        ),
        [`${r}-list-holder-inner`]: { alignItems: 'flex-start' },
        [`&${r}-block-node`]: {
          [`${r}-list-holder-inner`]: {
            alignItems: 'stretch',
            [`${r}-node-content-wrapper`]: { flex: 'auto' },
            [`${n}.dragging`]: {
              position: 'relative',
              '&:after': {
                position: 'absolute',
                top: 0,
                insetInlineEnd: 0,
                bottom: o,
                insetInlineStart: 0,
                border: `1px solid ${t.colorPrimary}`,
                opacity: 0,
                animationName: wd,
                animationDuration: t.motionDurationSlow,
                animationPlayState: 'running',
                animationFillMode: 'forwards',
                content: '""',
                pointerEvents: 'none',
              },
            },
          },
        },
        [n]: {
          display: 'flex',
          alignItems: 'flex-start',
          padding: `0 0 ${j(o)} 0`,
          outline: 'none',
          '&-rtl': { direction: 'rtl' },
          '&-disabled': {
            [`${r}-node-content-wrapper`]: {
              color: t.colorTextDisabled,
              cursor: 'not-allowed',
              '&:hover': { background: 'transparent' },
            },
          },
          [`&-active ${r}-node-content-wrapper`]: {
            background: t.controlItemBgHover,
          },
          [`&:not(${n}-disabled).filter-node ${r}-title`]: {
            color: t.colorPrimary,
            fontWeight: 500,
          },
          '&-draggable': {
            cursor: 'grab',
            [`${r}-draggable-icon`]: {
              flexShrink: 0,
              width: i,
              lineHeight: j(i),
              textAlign: 'center',
              visibility: 'visible',
              opacity: 0.2,
              transition: `opacity ${t.motionDurationSlow}`,
              [`${n}:hover &`]: { opacity: 0.45 },
            },
            [`&${n}-disabled`]: {
              [`${r}-draggable-icon`]: { visibility: 'hidden' },
            },
          },
        },
        [`${r}-indent`]: {
          alignSelf: 'stretch',
          whiteSpace: 'nowrap',
          userSelect: 'none',
          '&-unit': { display: 'inline-block', width: i },
        },
        [`${r}-draggable-icon`]: { visibility: 'hidden' },
        [`${r}-switcher`]: Object.assign(Object.assign({}, Nd(e, t)), {
          position: 'relative',
          flex: 'none',
          alignSelf: 'stretch',
          width: i,
          margin: 0,
          lineHeight: j(i),
          textAlign: 'center',
          cursor: 'pointer',
          userSelect: 'none',
          transition: `all ${t.motionDurationSlow}`,
          marginInlineEnd: t
            .calc(t.calc(i).sub(t.controlInteractiveSize))
            .div(2)
            .equal(),
          '&-noop': { cursor: 'unset' },
          '&:before': {
            pointerEvents: 'none',
            content: '""',
            width: i,
            height: i,
            position: 'absolute',
            left: { _skip_check_: !0, value: 0 },
            top: 0,
            borderRadius: t.borderRadius,
            transition: `all ${t.motionDurationSlow}`,
          },
          [`&:not(${r}-switcher-noop):hover:before`]: {
            backgroundColor: t.colorBgTextHover,
          },
          '&_close': {
            [`${r}-switcher-icon`]: { svg: { transform: 'rotate(-90deg)' } },
          },
          '&-loading-icon': { color: t.colorPrimary },
          '&-leaf-line': {
            position: 'relative',
            zIndex: 1,
            display: 'inline-block',
            width: '100%',
            height: '100%',
            '&:before': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: t.calc(i).div(2).equal(),
              bottom: t.calc(o).mul(-1).equal(),
              marginInlineStart: -1,
              borderInlineEnd: `1px solid ${t.colorBorder}`,
              content: '""',
            },
            '&:after': {
              position: 'absolute',
              width: t.calc(t.calc(i).div(2).equal()).mul(0.8).equal(),
              height: t.calc(i).div(2).equal(),
              borderBottom: `1px solid ${t.colorBorder}`,
              content: '""',
            },
          },
        }),
        [`${r}-checkbox`]: {
          top: 'initial',
          marginInlineEnd: s,
          alignSelf: 'flex-start',
          marginTop: t.marginXXS,
        },
        [`${r}-node-content-wrapper, ${r}-checkbox + span`]: {
          position: 'relative',
          zIndex: 'auto',
          minHeight: i,
          margin: 0,
          padding: `0 ${j(t.calc(t.paddingXS).div(2).equal())}`,
          color: 'inherit',
          lineHeight: j(i),
          background: 'transparent',
          borderRadius: t.borderRadius,
          cursor: 'pointer',
          transition: `all ${t.motionDurationMid}, border 0s, line-height 0s, box-shadow 0s`,
          '&:hover': { backgroundColor: a },
          [`&${r}-node-selected`]: { backgroundColor: d },
          [`${r}-iconEle`]: {
            display: 'inline-block',
            width: i,
            height: i,
            lineHeight: j(i),
            textAlign: 'center',
            verticalAlign: 'top',
            '&:empty': { display: 'none' },
          },
        },
        [`${r}-unselectable ${r}-node-content-wrapper:hover`]: {
          backgroundColor: 'transparent',
        },
        [`${r}-node-content-wrapper`]: Object.assign(
          { lineHeight: j(i), userSelect: 'none' },
          kd(e, t),
        ),
        [`${n}.drop-container`]: {
          '> [draggable]': { boxShadow: `0 0 0 2px ${t.colorPrimary}` },
        },
        '&-show-line': {
          [`${r}-indent`]: {
            '&-unit': {
              position: 'relative',
              height: '100%',
              '&:before': {
                position: 'absolute',
                top: 0,
                insetInlineEnd: t.calc(i).div(2).equal(),
                bottom: t.calc(o).mul(-1).equal(),
                borderInlineEnd: `1px solid ${t.colorBorder}`,
                content: '""',
              },
              '&-end': { '&:before': { display: 'none' } },
            },
          },
          [`${r}-switcher`]: {
            background: 'transparent',
            '&-line-icon': { verticalAlign: '-0.15em' },
          },
        },
        [`${n}-leaf-last`]: {
          [`${r}-switcher`]: {
            '&-leaf-line': {
              '&:before': {
                top: 'auto !important',
                bottom: 'auto !important',
                height: `${j(t.calc(i).div(2).equal())} !important`,
              },
            },
          },
        },
      }),
    }
  },
  Id = (e) => {
    const {
      treeCls: t,
      treeNodeCls: r,
      treeNodePadding: n,
      directoryNodeSelectedBg: o,
      directoryNodeSelectedColor: i,
    } = e
    return {
      [`${t}${t}-directory`]: {
        [r]: {
          position: 'relative',
          '&:before': {
            position: 'absolute',
            top: 0,
            insetInlineEnd: 0,
            bottom: n,
            insetInlineStart: 0,
            transition: `background-color ${e.motionDurationMid}`,
            content: '""',
            pointerEvents: 'none',
          },
          '&:hover': { '&:before': { background: e.controlItemBgHover } },
          '> *': { zIndex: 1 },
          [`${t}-switcher`]: { transition: `color ${e.motionDurationMid}` },
          [`${t}-node-content-wrapper`]: {
            borderRadius: 0,
            userSelect: 'none',
            '&:hover': { background: 'transparent' },
            [`&${t}-node-selected`]: { color: i, background: 'transparent' },
          },
          '&-selected': {
            '\n            &:hover::before,\n            &::before\n          ':
              { background: o },
            [`${t}-switcher`]: { color: i },
            [`${t}-node-content-wrapper`]: {
              color: i,
              background: 'transparent',
            },
          },
        },
      },
    }
  },
  Od = (e, t) => {
    const r = `.${e}`,
      n = `${r}-treenode`,
      o = t.calc(t.paddingXS).div(2).equal(),
      i = gn(t, { treeCls: r, treeNodeCls: n, treeNodePadding: o })
    return [Rd(e, i), Id(i)]
  },
  Pd = (e) => {
    const { controlHeightSM: t } = e
    return {
      titleHeight: t,
      nodeHoverBg: e.controlItemBgHover,
      nodeSelectedBg: e.controlItemBgActive,
    }
  },
  Kd = (e) => {
    const { colorTextLightSolid: t, colorPrimary: r } = e
    return Object.assign(Object.assign({}, Pd(e)), {
      directoryNodeSelectedColor: t,
      directoryNodeSelectedBg: r,
    })
  },
  Td = mn(
    'Tree',
    (e, t) => {
      let { prefixCls: r } = t
      return [{ [e.componentCls]: bi(`${r}-checkbox`, e) }, Od(r, e), xi(e)]
    },
    Kd,
  ),
  Eo = 4
function Dd(e) {
  const {
      dropPosition: t,
      dropLevelOffset: r,
      prefixCls: n,
      indent: o,
      direction: i = 'ltr',
    } = e,
    d = i === 'ltr' ? 'left' : 'right',
    a = i === 'ltr' ? 'right' : 'left',
    s = { [d]: -r * o + Eo, [a]: 0 }
  switch (t) {
    case -1:
      s.top = -3
      break
    case 1:
      s.bottom = -3
      break
    default:
      ;(s.bottom = -3), (s[d] = o + Eo)
      break
  }
  return J.createElement('div', { style: s, className: `${n}-drop-indicator` })
}
const Md = (e) => {
    const {
        prefixCls: t,
        switcherIcon: r,
        treeNodeProps: n,
        showLine: o,
        switcherLoadingIcon: i,
      } = e,
      { isLeaf: d, expanded: a, loading: s } = n
    if (s)
      return l.isValidElement(i)
        ? i
        : l.createElement(Bo, { className: `${t}-switcher-loading-icon` })
    let c
    if ((o && typeof o == 'object' && (c = o.showLeafIcon), d)) {
      if (!o) return null
      if (typeof c != 'boolean' && c) {
        const u = typeof c == 'function' ? c(n) : c,
          v = `${t}-switcher-line-custom-icon`
        return l.isValidElement(u)
          ? qr(u, { className: X(u.props.className || '', v) })
          : u
      }
      return c
        ? l.createElement(ua, { className: `${t}-switcher-line-icon` })
        : l.createElement('span', { className: `${t}-switcher-leaf-line` })
    }
    const f = `${t}-switcher-icon`,
      p = typeof r == 'function' ? r(n) : r
    return l.isValidElement(p)
      ? qr(p, { className: X(p.props.className || '', f) })
      : p !== void 0
        ? p
        : o
          ? a
            ? l.createElement(_s, { className: `${t}-switcher-line-icon` })
            : l.createElement(Ws, { className: `${t}-switcher-line-icon` })
          : l.createElement(ys, { className: f })
  },
  Ta = J.forwardRef((e, t) => {
    var r
    const {
        getPrefixCls: n,
        direction: o,
        virtual: i,
        tree: d,
      } = J.useContext(ht),
      {
        prefixCls: a,
        className: s,
        showIcon: c = !1,
        showLine: f,
        switcherIcon: p,
        switcherLoadingIcon: u,
        blockNode: v = !1,
        children: m,
        checkable: h = !1,
        selectable: g = !0,
        draggable: y,
        motion: b,
        style: x,
      } = e,
      C = n('tree', a),
      S = n(),
      $ = b ?? Object.assign(Object.assign({}, Ci(S)), { motionAppear: !1 }),
      R = Object.assign(Object.assign({}, e), {
        checkable: h,
        selectable: g,
        showIcon: c,
        motion: $,
        blockNode: v,
        showLine: !!f,
        dropIndicatorRender: Dd,
      }),
      [w, E, N] = Td(C),
      [, k] = Mn(),
      I =
        k.paddingXS / 2 +
        (((r = k.Tree) === null || r === void 0 ? void 0 : r.titleHeight) ||
          k.controlHeightSM),
      O = J.useMemo(() => {
        if (!y) return !1
        let K = {}
        switch (typeof y) {
          case 'function':
            K.nodeDraggable = y
            break
          case 'object':
            K = Object.assign({}, y)
            break
        }
        return (
          K.icon !== !1 && (K.icon = K.icon || J.createElement(js, null)), K
        )
      }, [y]),
      P = (K) =>
        J.createElement(Md, {
          prefixCls: C,
          switcherIcon: p,
          switcherLoadingIcon: u,
          treeNodeProps: K,
          showLine: f,
        })
    return w(
      J.createElement(
        Nr,
        Object.assign({ itemHeight: I, ref: t, virtual: i }, R, {
          style: Object.assign(
            Object.assign({}, d == null ? void 0 : d.style),
            x,
          ),
          prefixCls: C,
          className: X(
            {
              [`${C}-icon-hide`]: !c,
              [`${C}-block-node`]: v,
              [`${C}-unselectable`]: !g,
              [`${C}-rtl`]: o === 'rtl',
            },
            d == null ? void 0 : d.className,
            s,
            E,
            N,
          ),
          direction: o,
          checkable:
            h && J.createElement('span', { className: `${C}-checkbox-inner` }),
          selectable: g,
          switcherIcon: P,
          draggable: O,
        }),
        m,
      ),
    )
  }),
  $o = 0,
  Gn = 1,
  wo = 2
function kr(e, t, r) {
  const { key: n, children: o } = r
  function i(d) {
    const a = d[n],
      s = d[o]
    t(a, d) !== !1 && kr(s || [], t, r)
  }
  e.forEach(i)
}
function Bd(e) {
  let {
    treeData: t,
    expandedKeys: r,
    startKey: n,
    endKey: o,
    fieldNames: i,
  } = e
  const d = []
  let a = $o
  if (n && n === o) return [n]
  if (!n || !o) return []
  function s(c) {
    return c === n || c === o
  }
  return (
    kr(
      t,
      (c) => {
        if (a === wo) return !1
        if (s(c)) {
          if ((d.push(c), a === $o)) a = Gn
          else if (a === Gn) return (a = wo), !1
        } else a === Gn && d.push(c)
        return r.includes(c)
      },
      Xt(i),
    ),
    d
  )
}
function Yn(e, t, r) {
  const n = ve(t),
    o = []
  return (
    kr(
      e,
      (i, d) => {
        const a = n.indexOf(i)
        return a !== -1 && (o.push(d), n.splice(a, 1)), !!n.length
      },
      Xt(r),
    ),
    o
  )
}
var No = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
function Ld(e) {
  const { isLeaf: t, expanded: r } = e
  return t
    ? l.createElement(ua, null)
    : r
      ? l.createElement(Ks, null)
      : l.createElement(Ms, null)
}
function ko(e) {
  let { treeData: t, children: r } = e
  return t || aa(r)
}
const jd = (e, t) => {
    var {
        defaultExpandAll: r,
        defaultExpandParent: n,
        defaultExpandedKeys: o,
      } = e,
      i = No(e, [
        'defaultExpandAll',
        'defaultExpandParent',
        'defaultExpandedKeys',
      ])
    const d = l.useRef(),
      a = l.useRef(),
      s = () => {
        const { keyEntities: w } = yr(ko(i))
        let E
        return (
          r
            ? (E = Object.keys(w))
            : n
              ? (E = ar(i.expandedKeys || o || [], w))
              : (E = i.expandedKeys || o || []),
          E
        )
      },
      [c, f] = l.useState(i.selectedKeys || i.defaultSelectedKeys || []),
      [p, u] = l.useState(() => s())
    l.useEffect(() => {
      'selectedKeys' in i && f(i.selectedKeys)
    }, [i.selectedKeys]),
      l.useEffect(() => {
        'expandedKeys' in i && u(i.expandedKeys)
      }, [i.expandedKeys])
    const v = (w, E) => {
        var N
        return (
          'expandedKeys' in i || u(w),
          (N = i.onExpand) === null || N === void 0 ? void 0 : N.call(i, w, E)
        )
      },
      m = (w, E) => {
        var N
        const { multiple: k, fieldNames: I } = i,
          { node: O, nativeEvent: P } = E,
          { key: K = '' } = O,
          D = ko(i),
          L = Object.assign(Object.assign({}, E), { selected: !0 }),
          B =
            (P == null ? void 0 : P.ctrlKey) ||
            (P == null ? void 0 : P.metaKey),
          M = P == null ? void 0 : P.shiftKey
        let U
        k && B
          ? ((U = w),
            (d.current = K),
            (a.current = U),
            (L.selectedNodes = Yn(D, U, I)))
          : k && M
            ? ((U = Array.from(
                new Set(
                  [].concat(
                    ve(a.current || []),
                    ve(
                      Bd({
                        treeData: D,
                        expandedKeys: p,
                        startKey: K,
                        endKey: d.current,
                        fieldNames: I,
                      }),
                    ),
                  ),
                ),
              )),
              (L.selectedNodes = Yn(D, U, I)))
            : ((U = [K]),
              (d.current = K),
              (a.current = U),
              (L.selectedNodes = Yn(D, U, I))),
          (N = i.onSelect) === null || N === void 0 || N.call(i, U, L),
          'selectedKeys' in i || f(U)
      },
      { getPrefixCls: h, direction: g } = l.useContext(ht),
      {
        prefixCls: y,
        className: b,
        showIcon: x = !0,
        expandAction: C = 'click',
      } = i,
      S = No(i, ['prefixCls', 'className', 'showIcon', 'expandAction']),
      $ = h('tree', y),
      R = X(`${$}-directory`, { [`${$}-directory-rtl`]: g === 'rtl' }, b)
    return l.createElement(
      Ta,
      Object.assign({ icon: Ld, ref: t, blockNode: !0 }, S, {
        showIcon: x,
        expandAction: C,
        prefixCls: $,
        className: R,
        expandedKeys: p,
        selectedKeys: c,
        onSelect: m,
        onExpand: v,
      }),
    )
  },
  zd = l.forwardRef(jd),
  Rr = Ta
Rr.DirectoryTree = zd
Rr.TreeNode = Gt
const Ro = (e) => {
    const {
      value: t,
      filterSearch: r,
      tablePrefixCls: n,
      locale: o,
      onChange: i,
    } = e
    return r
      ? l.createElement(
          'div',
          { className: `${n}-filter-dropdown-search` },
          l.createElement(Pn, {
            prefix: l.createElement(Si, null),
            placeholder: o.filterSearchPlaceholder,
            onChange: i,
            value: t,
            htmlSize: 1,
            className: `${n}-filter-dropdown-search-input`,
          }),
        )
      : null
  },
  Hd = (e) => {
    const { keyCode: t } = e
    t === Ge.ENTER && e.stopPropagation()
  },
  _d = l.forwardRef((e, t) =>
    l.createElement(
      'div',
      {
        className: e.className,
        onClick: (r) => r.stopPropagation(),
        onKeyDown: Hd,
        ref: t,
      },
      e.children,
    ),
  )
function Ut(e) {
  let t = []
  return (
    (e || []).forEach((r) => {
      let { value: n, children: o } = r
      t.push(n), o && (t = [].concat(ve(t), ve(Ut(o))))
    }),
    t
  )
}
function Ad(e) {
  return e.some((t) => {
    let { children: r } = t
    return r
  })
}
function Da(e, t) {
  return typeof t == 'string' || typeof t == 'number'
    ? t == null
      ? void 0
      : t.toString().toLowerCase().includes(e.trim().toLowerCase())
    : !1
}
function Ma(e) {
  let {
    filters: t,
    prefixCls: r,
    filteredKeys: n,
    filterMultiple: o,
    searchValue: i,
    filterSearch: d,
  } = e
  return t.map((a, s) => {
    const c = String(a.value)
    if (a.children)
      return {
        key: c || s,
        label: a.text,
        popupClassName: `${r}-dropdown-submenu`,
        children: Ma({
          filters: a.children,
          prefixCls: r,
          filteredKeys: n,
          filterMultiple: o,
          searchValue: i,
          filterSearch: d,
        }),
      }
    const f = o ? In : yn,
      p = {
        key: a.value !== void 0 ? c : s,
        label: l.createElement(
          l.Fragment,
          null,
          l.createElement(f, { checked: n.includes(c) }),
          l.createElement('span', null, a.text),
        ),
      }
    return i.trim()
      ? typeof d == 'function'
        ? d(i, a)
          ? p
          : null
        : Da(i, a.text)
          ? p
          : null
      : p
  })
}
function Qn(e) {
  return e || []
}
const Fd = (e) => {
    var t, r
    const {
        tablePrefixCls: n,
        prefixCls: o,
        column: i,
        dropdownPrefixCls: d,
        columnKey: a,
        filterOnClose: s,
        filterMultiple: c,
        filterMode: f = 'menu',
        filterSearch: p = !1,
        filterState: u,
        triggerFilter: v,
        locale: m,
        children: h,
        getPopupContainer: g,
        rootClassName: y,
      } = e,
      {
        filterDropdownOpen: b,
        onFilterDropdownOpenChange: x,
        filterResetToDefaultFilteredValue: C,
        defaultFilteredValue: S,
        filterDropdownVisible: $,
        onFilterDropdownVisibleChange: R,
      } = i,
      [w, E] = l.useState(!1),
      N = !!(
        u &&
        ((!((t = u.filteredKeys) === null || t === void 0) && t.length) ||
          u.forceFiltered)
      ),
      k = (W) => {
        E(W), x == null || x(W), R == null || R(W)
      },
      I = (r = b ?? $) !== null && r !== void 0 ? r : w,
      O = u == null ? void 0 : u.filteredKeys,
      [P, K] = md(Qn(O)),
      D = (W) => {
        let { selectedKeys: de } = W
        K(de)
      },
      L = (W, de) => {
        let { node: G, checked: ge } = de
        D(
          c
            ? { selectedKeys: W }
            : { selectedKeys: ge && G.key ? [G.key] : [] },
        )
      }
    l.useEffect(() => {
      w && D({ selectedKeys: Qn(O) })
    }, [O])
    const [B, M] = l.useState([]),
      U = (W) => {
        M(W)
      },
      [z, oe] = l.useState(''),
      Z = (W) => {
        const { value: de } = W.target
        oe(de)
      }
    l.useEffect(() => {
      w || oe('')
    }, [w])
    const me = (W) => {
        const de = W != null && W.length ? W : null
        if (
          (de === null && (!u || !u.filteredKeys)) ||
          fn(de, u == null ? void 0 : u.filteredKeys, !0)
        )
          return null
        v({ column: i, key: a, filteredKeys: de })
      },
      Q = () => {
        k(!1), me(P())
      },
      he = function () {
        let { confirm: W, closeDropdown: de } =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { confirm: !1, closeDropdown: !1 }
        W && me([]),
          de && k(!1),
          oe(''),
          K(C ? (S || []).map((G) => String(G)) : [])
      },
      te = function () {
        let { closeDropdown: W } =
          arguments.length > 0 && arguments[0] !== void 0
            ? arguments[0]
            : { closeDropdown: !0 }
        W && k(!1), me(P())
      },
      ie = (W, de) => {
        de.source === 'trigger' &&
          (W && O !== void 0 && K(Qn(O)),
          k(W),
          !W && !i.filterDropdown && s && Q())
      },
      $e = X({ [`${d}-menu-without-submenu`]: !Ad(i.filters || []) }),
      ee = (W) => {
        if (W.target.checked) {
          const de = Ut(i == null ? void 0 : i.filters).map((G) => String(G))
          K(de)
        } else K([])
      },
      Y = (W) => {
        let { filters: de } = W
        return (de || []).map((G, ge) => {
          const le = String(G.value),
            we = { title: G.text, key: G.value !== void 0 ? le : String(ge) }
          return G.children && (we.children = Y({ filters: G.children })), we
        })
      },
      F = (W) => {
        var de
        return Object.assign(Object.assign({}, W), {
          text: W.title,
          value: W.key,
          children:
            ((de = W.children) === null || de === void 0
              ? void 0
              : de.map((G) => F(G))) || [],
        })
      }
    let A
    const { direction: q, renderEmpty: se } = l.useContext(ht)
    if (typeof i.filterDropdown == 'function')
      A = i.filterDropdown({
        prefixCls: `${d}-custom`,
        setSelectedKeys: (W) => D({ selectedKeys: W }),
        selectedKeys: P(),
        confirm: te,
        clearFilters: he,
        filters: i.filters,
        visible: I,
        close: () => {
          k(!1)
        },
      })
    else if (i.filterDropdown) A = i.filterDropdown
    else {
      const W = P() || [],
        de = () => {
          var ge
          const le =
            (ge = se == null ? void 0 : se('Table.filter')) !== null &&
            ge !== void 0
              ? ge
              : l.createElement(Ur, {
                  image: Ur.PRESENTED_IMAGE_SIMPLE,
                  description: m.filterEmptyText,
                  imageStyle: { height: 24 },
                  style: { margin: 0, padding: '16px 0' },
                })
          if ((i.filters || []).length === 0) return le
          if (f === 'tree')
            return l.createElement(
              l.Fragment,
              null,
              l.createElement(Ro, {
                filterSearch: p,
                value: z,
                onChange: Z,
                tablePrefixCls: n,
                locale: m,
              }),
              l.createElement(
                'div',
                { className: `${n}-filter-dropdown-tree` },
                c
                  ? l.createElement(
                      In,
                      {
                        checked: W.length === Ut(i.filters).length,
                        indeterminate:
                          W.length > 0 && W.length < Ut(i.filters).length,
                        className: `${n}-filter-dropdown-checkall`,
                        onChange: ee,
                      },
                      m.filterCheckall,
                    )
                  : null,
                l.createElement(Rr, {
                  checkable: !0,
                  selectable: !1,
                  blockNode: !0,
                  multiple: c,
                  checkStrictly: !c,
                  className: `${d}-menu`,
                  onCheck: L,
                  checkedKeys: W,
                  selectedKeys: W,
                  showIcon: !1,
                  treeData: Y({ filters: i.filters }),
                  autoExpandParent: !0,
                  defaultExpandAll: !0,
                  filterTreeNode: z.trim()
                    ? (fe) =>
                        typeof p == 'function' ? p(z, F(fe)) : Da(z, fe.title)
                    : void 0,
                }),
              ),
            )
          const we = Ma({
              filters: i.filters || [],
              filterSearch: p,
              prefixCls: o,
              filteredKeys: P(),
              filterMultiple: c,
              searchValue: z,
            }),
            xe = we.every((fe) => fe === null)
          return l.createElement(
            l.Fragment,
            null,
            l.createElement(Ro, {
              filterSearch: p,
              value: z,
              onChange: Z,
              tablePrefixCls: n,
              locale: m,
            }),
            xe
              ? le
              : l.createElement(Ei, {
                  selectable: !0,
                  multiple: c,
                  prefixCls: `${d}-menu`,
                  className: $e,
                  onSelect: D,
                  onDeselect: D,
                  selectedKeys: W,
                  getPopupContainer: g,
                  openKeys: B,
                  onOpenChange: U,
                  items: we,
                }),
          )
        },
        G = () =>
          C
            ? fn(
                (S || []).map((ge) => String(ge)),
                W,
                !0,
              )
            : W.length === 0
      A = l.createElement(
        l.Fragment,
        null,
        de(),
        l.createElement(
          'div',
          { className: `${o}-dropdown-btns` },
          l.createElement(
            On,
            { type: 'link', size: 'small', disabled: G(), onClick: () => he() },
            m.filterReset,
          ),
          l.createElement(
            On,
            { type: 'primary', size: 'small', onClick: Q },
            m.filterConfirm,
          ),
        ),
      )
    }
    i.filterDropdown && (A = l.createElement($i, { selectable: void 0 }, A))
    const V = () => l.createElement(_d, { className: `${o}-dropdown` }, A)
    let ne
    return (
      typeof i.filterIcon == 'function'
        ? (ne = i.filterIcon(N))
        : i.filterIcon
          ? (ne = i.filterIcon)
          : (ne = l.createElement(Is, null)),
      l.createElement(
        'div',
        { className: `${o}-column` },
        l.createElement('span', { className: `${n}-column-title` }, h),
        l.createElement(
          Wo,
          {
            dropdownRender: V,
            trigger: ['click'],
            open: I,
            onOpenChange: ie,
            getPopupContainer: g,
            placement: q === 'rtl' ? 'bottomLeft' : 'bottomRight',
            rootClassName: y,
          },
          l.createElement(
            'span',
            {
              role: 'button',
              tabIndex: -1,
              className: X(`${o}-trigger`, { active: N }),
              onClick: (W) => {
                W.stopPropagation()
              },
            },
            ne,
          ),
        ),
      )
    )
  },
  dr = (e, t, r) => {
    let n = []
    return (
      (e || []).forEach((o, i) => {
        var d
        const a = Zt(i, r)
        if (o.filters || 'filterDropdown' in o || 'onFilter' in o)
          if ('filteredValue' in o) {
            let s = o.filteredValue
            'filterDropdown' in o ||
              (s =
                (d = s == null ? void 0 : s.map(String)) !== null &&
                d !== void 0
                  ? d
                  : s),
              n.push({
                column: o,
                key: Ot(o, a),
                filteredKeys: s,
                forceFiltered: o.filtered,
              })
          } else
            n.push({
              column: o,
              key: Ot(o, a),
              filteredKeys:
                t && o.defaultFilteredValue ? o.defaultFilteredValue : void 0,
              forceFiltered: o.filtered,
            })
        'children' in o && (n = [].concat(ve(n), ve(dr(o.children, t, a))))
      }),
      n
    )
  }
function Ba(e, t, r, n, o, i, d, a, s) {
  return r.map((c, f) => {
    const p = Zt(f, a),
      {
        filterOnClose: u = !0,
        filterMultiple: v = !0,
        filterMode: m,
        filterSearch: h,
      } = c
    let g = c
    if (g.filters || g.filterDropdown) {
      const y = Ot(g, p),
        b = n.find((x) => {
          let { key: C } = x
          return y === C
        })
      g = Object.assign(Object.assign({}, g), {
        title: (x) =>
          l.createElement(
            Fd,
            {
              tablePrefixCls: e,
              prefixCls: `${e}-filter`,
              dropdownPrefixCls: t,
              column: g,
              columnKey: y,
              filterState: b,
              filterOnClose: u,
              filterMultiple: v,
              filterMode: m,
              filterSearch: h,
              triggerFilter: i,
              locale: o,
              getPopupContainer: d,
              rootClassName: s,
            },
            Hn(c.title, x),
          ),
      })
    }
    return (
      'children' in g &&
        (g = Object.assign(Object.assign({}, g), {
          children: Ba(e, t, g.children, n, o, i, d, p, s),
        })),
      g
    )
  })
}
const Io = (e) => {
    const t = {}
    return (
      e.forEach((r) => {
        let { key: n, filteredKeys: o, column: i } = r
        const d = n,
          { filters: a, filterDropdown: s } = i
        if (s) t[d] = o || null
        else if (Array.isArray(o)) {
          const c = Ut(a)
          t[d] = c.filter((f) => o.includes(String(f)))
        } else t[d] = null
      }),
      t
    )
  },
  ur = (e, t, r) =>
    t.reduce((o, i) => {
      const {
        column: { onFilter: d, filters: a },
        filteredKeys: s,
      } = i
      return d && s && s.length
        ? o
            .map((c) => Object.assign({}, c))
            .filter((c) =>
              s.some((f) => {
                const p = Ut(a),
                  u = p.findIndex((m) => String(m) === String(f)),
                  v = u !== -1 ? p[u] : f
                return c[r] && (c[r] = ur(c[r], t, r)), d(v, c)
              }),
            )
        : o
    }, e),
  La = (e) =>
    e.flatMap((t) =>
      'children' in t ? [t].concat(ve(La(t.children || []))) : [t],
    ),
  Wd = (e) => {
    const {
      prefixCls: t,
      dropdownPrefixCls: r,
      mergedColumns: n,
      onFilterChange: o,
      getPopupContainer: i,
      locale: d,
      rootClassName: a,
    } = e
    Dn()
    const s = l.useMemo(() => La(n || []), [n]),
      [c, f] = l.useState(() => dr(s, !0)),
      p = l.useMemo(() => {
        const h = dr(s, !1)
        if (h.length === 0) return h
        let g = !0
        if (
          (h.forEach((y) => {
            let { filteredKeys: b } = y
            b !== void 0 && (g = !1)
          }),
          g)
        ) {
          const y = (s || []).map((b, x) => Ot(b, Zt(x)))
          return c
            .filter((b) => {
              let { key: x } = b
              return y.includes(x)
            })
            .map((b) => {
              const x = s[y.findIndex((C) => C === b.key)]
              return Object.assign(Object.assign({}, b), {
                column: Object.assign(Object.assign({}, b.column), x),
                forceFiltered: x.filtered,
              })
            })
        }
        return h
      }, [s, c]),
      u = l.useMemo(() => Io(p), [p]),
      v = (h) => {
        const g = p.filter((y) => {
          let { key: b } = y
          return b !== h.key
        })
        g.push(h), f(g), o(Io(g), g)
      }
    return [(h) => Ba(t, r, h, p, d, v, i, void 0, a), p, u]
  },
  qd = (e, t, r) => {
    const n = l.useRef({})
    function o(i) {
      var d
      if (
        !n.current ||
        n.current.data !== e ||
        n.current.childrenColumnName !== t ||
        n.current.getRowKey !== r
      ) {
        let s = function (c) {
          c.forEach((f, p) => {
            const u = r(f, p)
            a.set(u, f), f && typeof f == 'object' && t in f && s(f[t] || [])
          })
        }
        const a = new Map()
        s(e),
          (n.current = {
            data: e,
            childrenColumnName: t,
            kvMap: a,
            getRowKey: r,
          })
      }
      return (d = n.current.kvMap) === null || d === void 0 ? void 0 : d.get(i)
    }
    return [o]
  }
var Vd = function (e, t) {
  var r = {}
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) &&
      t.indexOf(n) < 0 &&
      (r[n] = e[n])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var o = 0, n = Object.getOwnPropertySymbols(e); o < n.length; o++)
      t.indexOf(n[o]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, n[o]) &&
        (r[n[o]] = e[n[o]])
  return r
}
const ja = 10
function Ud(e, t) {
  const r = { current: e.current, pageSize: e.pageSize }
  return (
    Object.keys(t && typeof t == 'object' ? t : {}).forEach((o) => {
      const i = e[o]
      typeof i != 'function' && (r[o] = i)
    }),
    r
  )
}
function Xd(e, t, r) {
  const n = r && typeof r == 'object' ? r : {},
    { total: o = 0 } = n,
    i = Vd(n, ['total']),
    [d, a] = l.useState(() => ({
      current: 'defaultCurrent' in i ? i.defaultCurrent : 1,
      pageSize: 'defaultPageSize' in i ? i.defaultPageSize : ja,
    })),
    s = Hl(d, i, { total: o > 0 ? o : e }),
    c = Math.ceil((o || e) / s.pageSize)
  s.current > c && (s.current = c || 1)
  const f = (u, v) => {
      a({ current: u ?? 1, pageSize: v || s.pageSize })
    },
    p = (u, v) => {
      var m
      r && ((m = r.onChange) === null || m === void 0 || m.call(r, u, v)),
        f(u, v),
        t(u, v || (s == null ? void 0 : s.pageSize))
    }
  return r === !1
    ? [{}, () => {}]
    : [Object.assign(Object.assign({}, s), { onChange: p }), f]
}
const Nn = 'ascend',
  Jn = 'descend',
  Tn = (e) =>
    typeof e.sorter == 'object' && typeof e.sorter.multiple == 'number'
      ? e.sorter.multiple
      : !1,
  Oo = (e) =>
    typeof e == 'function'
      ? e
      : e && typeof e == 'object' && e.compare
        ? e.compare
        : !1,
  Gd = (e, t) => (t ? e[e.indexOf(t) + 1] : e[0]),
  fr = (e, t, r) => {
    let n = []
    const o = (i, d) => {
      n.push({
        column: i,
        key: Ot(i, d),
        multiplePriority: Tn(i),
        sortOrder: i.sortOrder,
      })
    }
    return (
      (e || []).forEach((i, d) => {
        const a = Zt(d, r)
        i.children
          ? ('sortOrder' in i && o(i, a),
            (n = [].concat(ve(n), ve(fr(i.children, t, a)))))
          : i.sorter &&
            ('sortOrder' in i
              ? o(i, a)
              : t &&
                i.defaultSortOrder &&
                n.push({
                  column: i,
                  key: Ot(i, a),
                  multiplePriority: Tn(i),
                  sortOrder: i.defaultSortOrder,
                }))
      }),
      n
    )
  },
  za = (e, t, r, n, o, i, d, a) =>
    (t || []).map((c, f) => {
      const p = Zt(f, a)
      let u = c
      if (u.sorter) {
        const v = u.sortDirections || o,
          m = u.showSorterTooltip === void 0 ? d : u.showSorterTooltip,
          h = Ot(u, p),
          g = r.find((E) => {
            let { key: N } = E
            return N === h
          }),
          y = g ? g.sortOrder : null,
          b = Gd(v, y)
        let x
        if (c.sortIcon) x = c.sortIcon({ sortOrder: y })
        else {
          const E =
              v.includes(Nn) &&
              l.createElement($s, {
                className: X(`${e}-column-sorter-up`, { active: y === Nn }),
              }),
            N =
              v.includes(Jn) &&
              l.createElement(Cs, {
                className: X(`${e}-column-sorter-down`, { active: y === Jn }),
              })
          x = l.createElement(
            'span',
            {
              className: X(`${e}-column-sorter`, {
                [`${e}-column-sorter-full`]: !!(E && N),
              }),
            },
            l.createElement(
              'span',
              { className: `${e}-column-sorter-inner`, 'aria-hidden': 'true' },
              E,
              N,
            ),
          )
        }
        const { cancelSort: C, triggerAsc: S, triggerDesc: $ } = i || {}
        let R = C
        b === Jn ? (R = $) : b === Nn && (R = S)
        const w =
          typeof m == 'object' ? Object.assign({ title: R }, m) : { title: R }
        u = Object.assign(Object.assign({}, u), {
          className: X(u.className, { [`${e}-column-sort`]: y }),
          title: (E) => {
            const N = `${e}-column-sorters`,
              k = l.createElement(
                'span',
                { className: `${e}-column-title` },
                Hn(c.title, E),
              ),
              I = l.createElement('div', { className: N }, k, x)
            return m
              ? typeof m != 'boolean' &&
                (m == null ? void 0 : m.target) === 'sorter-icon'
                ? l.createElement(
                    'div',
                    {
                      className: `${N} ${e}-column-sorters-tooltip-target-sorter`,
                    },
                    k,
                    l.createElement(Vr, Object.assign({}, w), x),
                  )
                : l.createElement(Vr, Object.assign({}, w), I)
              : I
          },
          onHeaderCell: (E) => {
            var N
            const k =
                ((N = c.onHeaderCell) === null || N === void 0
                  ? void 0
                  : N.call(c, E)) || {},
              I = k.onClick,
              O = k.onKeyDown
            ;(k.onClick = (D) => {
              n({ column: c, key: h, sortOrder: b, multiplePriority: Tn(c) }),
                I == null || I(D)
            }),
              (k.onKeyDown = (D) => {
                D.keyCode === Ge.ENTER &&
                  (n({
                    column: c,
                    key: h,
                    sortOrder: b,
                    multiplePriority: Tn(c),
                  }),
                  O == null || O(D))
              })
            const P = vd(c.title, {}),
              K = P == null ? void 0 : P.toString()
            return (
              y
                ? (k['aria-sort'] = y === 'ascend' ? 'ascending' : 'descending')
                : (k['aria-label'] = K || ''),
              (k.className = X(k.className, `${e}-column-has-sorters`)),
              (k.tabIndex = 0),
              c.ellipsis && (k.title = (P ?? '').toString()),
              k
            )
          },
        })
      }
      return (
        'children' in u &&
          (u = Object.assign(Object.assign({}, u), {
            children: za(e, u.children, r, n, o, i, d, p),
          })),
        u
      )
    }),
  Po = (e) => {
    const { column: t, sortOrder: r } = e
    return { column: t, order: r, field: t.dataIndex, columnKey: t.key }
  },
  Ko = (e) => {
    const t = e
      .filter((r) => {
        let { sortOrder: n } = r
        return n
      })
      .map(Po)
    if (t.length === 0 && e.length) {
      const r = e.length - 1
      return Object.assign(Object.assign({}, Po(e[r])), {
        column: void 0,
        order: void 0,
        field: void 0,
        columnKey: void 0,
      })
    }
    return t.length <= 1 ? t[0] || {} : t
  },
  pr = (e, t, r) => {
    const n = t.slice().sort((d, a) => a.multiplePriority - d.multiplePriority),
      o = e.slice(),
      i = n.filter((d) => {
        let {
          column: { sorter: a },
          sortOrder: s,
        } = d
        return Oo(a) && s
      })
    return i.length
      ? o
          .sort((d, a) => {
            for (let s = 0; s < i.length; s += 1) {
              const c = i[s],
                {
                  column: { sorter: f },
                  sortOrder: p,
                } = c,
                u = Oo(f)
              if (u && p) {
                const v = u(d, a, p)
                if (v !== 0) return p === Nn ? v : -v
              }
            }
            return 0
          })
          .map((d) => {
            const a = d[r]
            return a
              ? Object.assign(Object.assign({}, d), { [r]: pr(a, t, r) })
              : d
          })
      : o
  },
  Yd = (e) => {
    const {
        prefixCls: t,
        mergedColumns: r,
        sortDirections: n,
        tableLocale: o,
        showSorterTooltip: i,
        onSorterChange: d,
      } = e,
      [a, s] = l.useState(fr(r, !0)),
      c = (h, g) => {
        const y = []
        return (
          h.forEach((b, x) => {
            const C = Zt(x, g)
            if ((y.push(Ot(b, C)), Array.isArray(b.children))) {
              const S = c(b.children, C)
              y.push.apply(y, ve(S))
            }
          }),
          y
        )
      },
      f = l.useMemo(() => {
        let h = !0
        const g = fr(r, !1)
        if (!g.length) {
          const C = c(r)
          return a.filter((S) => {
            let { key: $ } = S
            return C.includes($)
          })
        }
        const y = []
        function b(C) {
          h
            ? y.push(C)
            : y.push(Object.assign(Object.assign({}, C), { sortOrder: null }))
        }
        let x = null
        return (
          g.forEach((C) => {
            x === null
              ? (b(C),
                C.sortOrder &&
                  (C.multiplePriority === !1 ? (h = !1) : (x = !0)))
              : ((x && C.multiplePriority !== !1) || (h = !1), b(C))
          }),
          y
        )
      }, [r, a]),
      p = l.useMemo(() => {
        var h, g
        const y = f.map((b) => {
          let { column: x, sortOrder: C } = b
          return { column: x, order: C }
        })
        return {
          sortColumns: y,
          sortColumn: (h = y[0]) === null || h === void 0 ? void 0 : h.column,
          sortOrder: (g = y[0]) === null || g === void 0 ? void 0 : g.order,
        }
      }, [f]),
      u = (h) => {
        let g
        h.multiplePriority === !1 || !f.length || f[0].multiplePriority === !1
          ? (g = [h])
          : (g = [].concat(
              ve(
                f.filter((y) => {
                  let { key: b } = y
                  return b !== h.key
                }),
              ),
              [h],
            )),
          s(g),
          d(Ko(g), g)
      }
    return [(h) => za(t, h, f, u, n, o, i), f, p, () => Ko(f)]
  },
  Ha = (e, t) =>
    e.map((n) => {
      const o = Object.assign({}, n)
      return (
        (o.title = Hn(n.title, t)),
        'children' in o && (o.children = Ha(o.children, t)),
        o
      )
    }),
  Qd = (e) => [l.useCallback((r) => Ha(r, e), [e])],
  Jd = wa((e, t) => {
    const { _renderTimes: r } = e,
      { _renderTimes: n } = t
    return r !== n
  }),
  Zd = ka((e, t) => {
    const { _renderTimes: r } = e,
      { _renderTimes: n } = t
    return r !== n
  }),
  eu = (e) => {
    const {
        componentCls: t,
        lineWidth: r,
        lineType: n,
        tableBorderColor: o,
        tableHeaderBg: i,
        tablePaddingVertical: d,
        tablePaddingHorizontal: a,
        calc: s,
      } = e,
      c = `${j(r)} ${n} ${o}`,
      f = (p, u, v) => ({
        [`&${t}-${p}`]: {
          [`> ${t}-container`]: {
            [`> ${t}-content, > ${t}-body`]: {
              '\n            > table > tbody > tr > th,\n            > table > tbody > tr > td\n          ':
                {
                  [`> ${t}-expanded-row-fixed`]: {
                    margin: `${j(s(u).mul(-1).equal())}
              ${j(s(s(v).add(r)).mul(-1).equal())}`,
                  },
                },
            },
          },
        },
      })
    return {
      [`${t}-wrapper`]: {
        [`${t}${t}-bordered`]: Object.assign(
          Object.assign(
            Object.assign(
              {
                [`> ${t}-title`]: { border: c, borderBottom: 0 },
                [`> ${t}-container`]: {
                  borderInlineStart: c,
                  borderTop: c,
                  [`
            > ${t}-content,
            > ${t}-header,
            > ${t}-body,
            > ${t}-summary
          `]: {
                    '> table': {
                      '\n                > thead > tr > th,\n                > thead > tr > td,\n                > tbody > tr > th,\n                > tbody > tr > td,\n                > tfoot > tr > th,\n                > tfoot > tr > td\n              ':
                        { borderInlineEnd: c },
                      '> thead': {
                        '> tr:not(:last-child) > th': { borderBottom: c },
                        '> tr > th::before': {
                          backgroundColor: 'transparent !important',
                        },
                      },
                      '\n                > thead > tr,\n                > tbody > tr,\n                > tfoot > tr\n              ':
                        {
                          [`> ${t}-cell-fix-right-first::after`]: {
                            borderInlineEnd: c,
                          },
                        },
                      '\n                > tbody > tr > th,\n                > tbody > tr > td\n              ':
                        {
                          [`> ${t}-expanded-row-fixed`]: {
                            margin: `${j(s(d).mul(-1).equal())} ${j(s(s(a).add(r)).mul(-1).equal())}`,
                            '&::after': {
                              position: 'absolute',
                              top: 0,
                              insetInlineEnd: r,
                              bottom: 0,
                              borderInlineEnd: c,
                              content: '""',
                            },
                          },
                        },
                    },
                  },
                },
                [`&${t}-scroll-horizontal`]: {
                  [`> ${t}-container > ${t}-body`]: {
                    '> table > tbody': {
                      [`
                > tr${t}-expanded-row,
                > tr${t}-placeholder
              `]: { '> th, > td': { borderInlineEnd: 0 } },
                    },
                  },
                },
              },
              f(
                'middle',
                e.tablePaddingVerticalMiddle,
                e.tablePaddingHorizontalMiddle,
              ),
            ),
            f(
              'small',
              e.tablePaddingVerticalSmall,
              e.tablePaddingHorizontalSmall,
            ),
          ),
          { [`> ${t}-footer`]: { border: c, borderTop: 0 } },
        ),
        [`${t}-cell`]: {
          [`${t}-container:first-child`]: { borderTop: 0 },
          '&-scrollbar:not([rowspan])': {
            boxShadow: `0 ${j(r)} 0 ${j(r)} ${i}`,
          },
        },
        [`${t}-bordered ${t}-cell-scrollbar`]: { borderInlineEnd: c },
      },
    }
  },
  tu = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-cell-ellipsis`]: Object.assign(Object.assign({}, wi), {
          wordBreak: 'keep-all',
          [`
          &${t}-cell-fix-left-last,
          &${t}-cell-fix-right-first
        `]: {
            overflow: 'visible',
            [`${t}-cell-content`]: {
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            },
          },
          [`${t}-column-title`]: {
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            wordBreak: 'keep-all',
          },
        }),
      },
    }
  },
  nu = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-tbody > tr${t}-placeholder`]: {
          textAlign: 'center',
          color: e.colorTextDisabled,
          '\n          &:hover > th,\n          &:hover > td,\n        ': {
            background: e.colorBgContainer,
          },
        },
      },
    }
  },
  ru = (e) => {
    const {
        componentCls: t,
        antCls: r,
        motionDurationSlow: n,
        lineWidth: o,
        paddingXS: i,
        lineType: d,
        tableBorderColor: a,
        tableExpandIconBg: s,
        tableExpandColumnWidth: c,
        borderRadius: f,
        tablePaddingVertical: p,
        tablePaddingHorizontal: u,
        tableExpandedRowBg: v,
        paddingXXS: m,
        expandIconMarginTop: h,
        expandIconSize: g,
        expandIconHalfInner: y,
        expandIconScale: b,
        calc: x,
      } = e,
      C = `${j(o)} ${d} ${a}`,
      S = x(m).sub(o).equal()
    return {
      [`${t}-wrapper`]: {
        [`${t}-expand-icon-col`]: { width: c },
        [`${t}-row-expand-icon-cell`]: {
          textAlign: 'center',
          [`${t}-row-expand-icon`]: {
            display: 'inline-flex',
            float: 'none',
            verticalAlign: 'sub',
          },
        },
        [`${t}-row-indent`]: { height: 1, float: 'left' },
        [`${t}-row-expand-icon`]: Object.assign(Object.assign({}, Ni(e)), {
          position: 'relative',
          float: 'left',
          width: g,
          height: g,
          color: 'inherit',
          lineHeight: j(g),
          background: s,
          border: C,
          borderRadius: f,
          transform: `scale(${b})`,
          '&:focus, &:hover, &:active': { borderColor: 'currentcolor' },
          '&::before, &::after': {
            position: 'absolute',
            background: 'currentcolor',
            transition: `transform ${n} ease-out`,
            content: '""',
          },
          '&::before': {
            top: y,
            insetInlineEnd: S,
            insetInlineStart: S,
            height: o,
          },
          '&::after': {
            top: S,
            bottom: S,
            insetInlineStart: y,
            width: o,
            transform: 'rotate(90deg)',
          },
          '&-collapsed::before': { transform: 'rotate(-180deg)' },
          '&-collapsed::after': { transform: 'rotate(0deg)' },
          '&-spaced': {
            '&::before, &::after': { display: 'none', content: 'none' },
            background: 'transparent',
            border: 0,
            visibility: 'hidden',
          },
        }),
        [`${t}-row-indent + ${t}-row-expand-icon`]: {
          marginTop: h,
          marginInlineEnd: i,
        },
        [`tr${t}-expanded-row`]: {
          '&, &:hover': { '> th, > td': { background: v } },
          [`${r}-descriptions-view`]: {
            display: 'flex',
            table: { flex: 'auto', width: '100%' },
          },
        },
        [`${t}-expanded-row-fixed`]: {
          position: 'relative',
          margin: `${j(x(p).mul(-1).equal())} ${j(x(u).mul(-1).equal())}`,
          padding: `${j(p)} ${j(u)}`,
        },
      },
    }
  },
  ou = (e) => {
    const {
        componentCls: t,
        antCls: r,
        iconCls: n,
        tableFilterDropdownWidth: o,
        tableFilterDropdownSearchWidth: i,
        paddingXXS: d,
        paddingXS: a,
        colorText: s,
        lineWidth: c,
        lineType: f,
        tableBorderColor: p,
        headerIconColor: u,
        fontSizeSM: v,
        tablePaddingHorizontal: m,
        borderRadius: h,
        motionDurationSlow: g,
        colorTextDescription: y,
        colorPrimary: b,
        tableHeaderFilterActiveBg: x,
        colorTextDisabled: C,
        tableFilterDropdownBg: S,
        tableFilterDropdownHeight: $,
        controlItemBgHover: R,
        controlItemBgActive: w,
        boxShadowSecondary: E,
        filterDropdownMenuBg: N,
        calc: k,
      } = e,
      I = `${r}-dropdown`,
      O = `${t}-filter-dropdown`,
      P = `${r}-tree`,
      K = `${j(c)} ${f} ${p}`
    return [
      {
        [`${t}-wrapper`]: {
          [`${t}-filter-column`]: {
            display: 'flex',
            justifyContent: 'space-between',
          },
          [`${t}-filter-trigger`]: {
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            marginBlock: k(d).mul(-1).equal(),
            marginInline: `${j(d)} ${j(k(m).div(2).mul(-1).equal())}`,
            padding: `0 ${j(d)}`,
            color: u,
            fontSize: v,
            borderRadius: h,
            cursor: 'pointer',
            transition: `all ${g}`,
            '&:hover': { color: y, background: x },
            '&.active': { color: b },
          },
        },
      },
      {
        [`${r}-dropdown`]: {
          [O]: Object.assign(Object.assign({}, Rt(e)), {
            minWidth: o,
            backgroundColor: S,
            borderRadius: h,
            boxShadow: E,
            overflow: 'hidden',
            [`${I}-menu`]: {
              maxHeight: $,
              overflowX: 'hidden',
              border: 0,
              boxShadow: 'none',
              borderRadius: 'unset',
              backgroundColor: N,
              '&:empty::after': {
                display: 'block',
                padding: `${j(a)} 0`,
                color: C,
                fontSize: v,
                textAlign: 'center',
                content: '"Not Found"',
              },
            },
            [`${O}-tree`]: {
              paddingBlock: `${j(a)} 0`,
              paddingInline: a,
              [P]: { padding: 0 },
              [`${P}-treenode ${P}-node-content-wrapper:hover`]: {
                backgroundColor: R,
              },
              [`${P}-treenode-checkbox-checked ${P}-node-content-wrapper`]: {
                '&, &:hover': { backgroundColor: w },
              },
            },
            [`${O}-search`]: {
              padding: a,
              borderBottom: K,
              '&-input': { input: { minWidth: i }, [n]: { color: C } },
            },
            [`${O}-checkall`]: {
              width: '100%',
              marginBottom: d,
              marginInlineStart: d,
            },
            [`${O}-btns`]: {
              display: 'flex',
              justifyContent: 'space-between',
              padding: `${j(k(a).sub(c).equal())} ${j(a)}`,
              overflow: 'hidden',
              borderTop: K,
            },
          }),
        },
      },
      {
        [`${r}-dropdown ${O}, ${O}-submenu`]: {
          [`${r}-checkbox-wrapper + span`]: { paddingInlineStart: a, color: s },
          '> ul': {
            maxHeight: 'calc(100vh - 130px)',
            overflowX: 'hidden',
            overflowY: 'auto',
          },
        },
      },
    ]
  },
  au = (e) => {
    const {
        componentCls: t,
        lineWidth: r,
        colorSplit: n,
        motionDurationSlow: o,
        zIndexTableFixed: i,
        tableBg: d,
        zIndexTableSticky: a,
        calc: s,
      } = e,
      c = n
    return {
      [`${t}-wrapper`]: {
        [`
        ${t}-cell-fix-left,
        ${t}-cell-fix-right
      `]: { position: 'sticky !important', zIndex: i, background: d },
        [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after
      `]: {
          position: 'absolute',
          top: 0,
          right: { _skip_check_: !0, value: 0 },
          bottom: s(r).mul(-1).equal(),
          width: 30,
          transform: 'translateX(100%)',
          transition: `box-shadow ${o}`,
          content: '""',
          pointerEvents: 'none',
        },
        [`${t}-cell-fix-left-all::after`]: { display: 'none' },
        [`
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: {
          position: 'absolute',
          top: 0,
          bottom: s(r).mul(-1).equal(),
          left: { _skip_check_: !0, value: 0 },
          width: 30,
          transform: 'translateX(-100%)',
          transition: `box-shadow ${o}`,
          content: '""',
          pointerEvents: 'none',
        },
        [`${t}-container`]: {
          position: 'relative',
          '&::before, &::after': {
            position: 'absolute',
            top: 0,
            bottom: 0,
            zIndex: s(a).add(1).equal({ unit: !1 }),
            width: 30,
            transition: `box-shadow ${o}`,
            content: '""',
            pointerEvents: 'none',
          },
          '&::before': { insetInlineStart: 0 },
          '&::after': { insetInlineEnd: 0 },
        },
        [`${t}-ping-left`]: {
          [`&:not(${t}-has-fix-left) ${t}-container::before`]: {
            boxShadow: `inset 10px 0 8px -8px ${c}`,
          },
          [`
          ${t}-cell-fix-left-first::after,
          ${t}-cell-fix-left-last::after
        `]: { boxShadow: `inset 10px 0 8px -8px ${c}` },
          [`${t}-cell-fix-left-last::before`]: {
            backgroundColor: 'transparent !important',
          },
        },
        [`${t}-ping-right`]: {
          [`&:not(${t}-has-fix-right) ${t}-container::after`]: {
            boxShadow: `inset -10px 0 8px -8px ${c}`,
          },
          [`
          ${t}-cell-fix-right-first::after,
          ${t}-cell-fix-right-last::after
        `]: { boxShadow: `inset -10px 0 8px -8px ${c}` },
        },
        [`${t}-fixed-column-gapped`]: {
          [`
        ${t}-cell-fix-left-first::after,
        ${t}-cell-fix-left-last::after,
        ${t}-cell-fix-right-first::after,
        ${t}-cell-fix-right-last::after
      `]: { boxShadow: 'none' },
        },
      },
    }
  },
  iu = (e) => {
    const { componentCls: t, antCls: r, margin: n } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-pagination${r}-pagination`]: { margin: `${j(n)} 0` },
        [`${t}-pagination`]: {
          display: 'flex',
          flexWrap: 'wrap',
          rowGap: e.paddingXS,
          '> *': { flex: 'none' },
          '&-left': { justifyContent: 'flex-start' },
          '&-center': { justifyContent: 'center' },
          '&-right': { justifyContent: 'flex-end' },
        },
      },
    }
  },
  lu = (e) => {
    const { componentCls: t, tableRadius: r } = e
    return {
      [`${t}-wrapper`]: {
        [t]: {
          [`${t}-title, ${t}-header`]: { borderRadius: `${j(r)} ${j(r)} 0 0` },
          [`${t}-title + ${t}-container`]: {
            borderStartStartRadius: 0,
            borderStartEndRadius: 0,
            [`${t}-header, table`]: { borderRadius: 0 },
            'table > thead > tr:first-child': {
              'th:first-child, th:last-child, td:first-child, td:last-child': {
                borderRadius: 0,
              },
            },
          },
          '&-container': {
            borderStartStartRadius: r,
            borderStartEndRadius: r,
            'table > thead > tr:first-child': {
              '> *:first-child': { borderStartStartRadius: r },
              '> *:last-child': { borderStartEndRadius: r },
            },
          },
          '&-footer': { borderRadius: `0 0 ${j(r)} ${j(r)}` },
        },
      },
    }
  },
  su = (e) => {
    const { componentCls: t } = e
    return {
      [`${t}-wrapper-rtl`]: {
        direction: 'rtl',
        table: { direction: 'rtl' },
        [`${t}-pagination-left`]: { justifyContent: 'flex-end' },
        [`${t}-pagination-right`]: { justifyContent: 'flex-start' },
        [`${t}-row-expand-icon`]: {
          float: 'right',
          '&::after': { transform: 'rotate(-90deg)' },
          '&-collapsed::before': { transform: 'rotate(180deg)' },
          '&-collapsed::after': { transform: 'rotate(0deg)' },
        },
        [`${t}-container`]: {
          '&::before': { insetInlineStart: 'unset', insetInlineEnd: 0 },
          '&::after': { insetInlineStart: 0, insetInlineEnd: 'unset' },
          [`${t}-row-indent`]: { float: 'right' },
        },
      },
    }
  },
  cu = (e) => {
    const {
      componentCls: t,
      antCls: r,
      iconCls: n,
      fontSizeIcon: o,
      padding: i,
      paddingXS: d,
      headerIconColor: a,
      headerIconHoverColor: s,
      tableSelectionColumnWidth: c,
      tableSelectedRowBg: f,
      tableSelectedRowHoverBg: p,
      tableRowHoverBg: u,
      tablePaddingHorizontal: v,
      calc: m,
    } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-selection-col`]: {
          width: c,
          [`&${t}-selection-col-with-dropdown`]: {
            width: m(c).add(o).add(m(i).div(4)).equal(),
          },
        },
        [`${t}-bordered ${t}-selection-col`]: {
          width: m(c).add(m(d).mul(2)).equal(),
          [`&${t}-selection-col-with-dropdown`]: {
            width: m(c).add(o).add(m(i).div(4)).add(m(d).mul(2)).equal(),
          },
        },
        [`
        table tr th${t}-selection-column,
        table tr td${t}-selection-column,
        ${t}-selection-column
      `]: {
          paddingInlineEnd: e.paddingXS,
          paddingInlineStart: e.paddingXS,
          textAlign: 'center',
          [`${r}-radio-wrapper`]: { marginInlineEnd: 0 },
        },
        [`table tr th${t}-selection-column${t}-cell-fix-left`]: {
          zIndex: m(e.zIndexTableFixed).add(1).equal({ unit: !1 }),
        },
        [`table tr th${t}-selection-column::after`]: {
          backgroundColor: 'transparent !important',
        },
        [`${t}-selection`]: {
          position: 'relative',
          display: 'inline-flex',
          flexDirection: 'column',
        },
        [`${t}-selection-extra`]: {
          position: 'absolute',
          top: 0,
          zIndex: 1,
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}`,
          marginInlineStart: '100%',
          paddingInlineStart: j(m(v).div(4).equal()),
          [n]: {
            color: a,
            fontSize: o,
            verticalAlign: 'baseline',
            '&:hover': { color: s },
          },
        },
        [`${t}-tbody`]: {
          [`${t}-row`]: {
            [`&${t}-row-selected`]: {
              [`> ${t}-cell`]: {
                background: f,
                '&-row-hover': { background: p },
              },
            },
            [`> ${t}-cell-row-hover`]: { background: u },
          },
        },
      },
    }
  },
  du = (e) => {
    const { componentCls: t, tableExpandColumnWidth: r, calc: n } = e,
      o = (i, d, a, s) => ({
        [`${t}${t}-${i}`]: {
          fontSize: s,
          [`
        ${t}-title,
        ${t}-footer,
        ${t}-cell,
        ${t}-thead > tr > th,
        ${t}-tbody > tr > th,
        ${t}-tbody > tr > td,
        tfoot > tr > th,
        tfoot > tr > td
      `]: { padding: `${j(d)} ${j(a)}` },
          [`${t}-filter-trigger`]: {
            marginInlineEnd: j(n(a).div(2).mul(-1).equal()),
          },
          [`${t}-expanded-row-fixed`]: {
            margin: `${j(n(d).mul(-1).equal())} ${j(n(a).mul(-1).equal())}`,
          },
          [`${t}-tbody`]: {
            [`${t}-wrapper:only-child ${t}`]: {
              marginBlock: j(n(d).mul(-1).equal()),
              marginInline: `${j(n(r).sub(a).equal())} ${j(n(a).mul(-1).equal())}`,
            },
          },
          [`${t}-selection-extra`]: {
            paddingInlineStart: j(n(a).div(4).equal()),
          },
        },
      })
    return {
      [`${t}-wrapper`]: Object.assign(
        Object.assign(
          {},
          o(
            'middle',
            e.tablePaddingVerticalMiddle,
            e.tablePaddingHorizontalMiddle,
            e.tableFontSizeMiddle,
          ),
        ),
        o(
          'small',
          e.tablePaddingVerticalSmall,
          e.tablePaddingHorizontalSmall,
          e.tableFontSizeSmall,
        ),
      ),
    }
  },
  uu = (e) => {
    const {
      componentCls: t,
      marginXXS: r,
      fontSizeIcon: n,
      headerIconColor: o,
      headerIconHoverColor: i,
    } = e
    return {
      [`${t}-wrapper`]: {
        [`${t}-thead th${t}-column-has-sorters`]: {
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${e.motionDurationSlow}, left 0s`,
          '&:hover': {
            background: e.tableHeaderSortHoverBg,
            '&::before': { backgroundColor: 'transparent !important' },
          },
          '&:focus-visible': { color: e.colorPrimary },
          [`
          &${t}-cell-fix-left:hover,
          &${t}-cell-fix-right:hover
        `]: { background: e.tableFixedHeaderSortActiveBg },
        },
        [`${t}-thead th${t}-column-sort`]: {
          background: e.tableHeaderSortBg,
          '&::before': { backgroundColor: 'transparent !important' },
        },
        [`td${t}-column-sort`]: { background: e.tableBodySortBg },
        [`${t}-column-title`]: { position: 'relative', zIndex: 1, flex: 1 },
        [`${t}-column-sorters`]: {
          display: 'flex',
          flex: 'auto',
          alignItems: 'center',
          justifyContent: 'space-between',
          '&::after': {
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            content: '""',
          },
        },
        [`${t}-column-sorters-tooltip-target-sorter`]: {
          '&::after': { content: 'none' },
        },
        [`${t}-column-sorter`]: {
          marginInlineStart: r,
          color: o,
          fontSize: 0,
          transition: `color ${e.motionDurationSlow}`,
          '&-inner': {
            display: 'inline-flex',
            flexDirection: 'column',
            alignItems: 'center',
          },
          '&-up, &-down': {
            fontSize: n,
            '&.active': { color: e.colorPrimary },
          },
          [`${t}-column-sorter-up + ${t}-column-sorter-down`]: {
            marginTop: '-0.3em',
          },
        },
        [`${t}-column-sorters:hover ${t}-column-sorter`]: { color: i },
      },
    }
  },
  fu = (e) => {
    const {
        componentCls: t,
        opacityLoading: r,
        tableScrollThumbBg: n,
        tableScrollThumbBgHover: o,
        tableScrollThumbSize: i,
        tableScrollBg: d,
        zIndexTableSticky: a,
        stickyScrollBarBorderRadius: s,
        lineWidth: c,
        lineType: f,
        tableBorderColor: p,
      } = e,
      u = `${j(c)} ${f} ${p}`
    return {
      [`${t}-wrapper`]: {
        [`${t}-sticky`]: {
          '&-holder': {
            position: 'sticky',
            zIndex: a,
            background: e.colorBgContainer,
          },
          '&-scroll': {
            position: 'sticky',
            bottom: 0,
            height: `${j(i)} !important`,
            zIndex: a,
            display: 'flex',
            alignItems: 'center',
            background: d,
            borderTop: u,
            opacity: r,
            '&:hover': { transformOrigin: 'center bottom' },
            '&-bar': {
              height: i,
              backgroundColor: n,
              borderRadius: s,
              transition: `all ${e.motionDurationSlow}, transform none`,
              position: 'absolute',
              bottom: 0,
              '&:hover, &-active': { backgroundColor: o },
            },
          },
        },
      },
    }
  },
  To = (e) => {
    const { componentCls: t, lineWidth: r, tableBorderColor: n, calc: o } = e,
      i = `${j(r)} ${e.lineType} ${n}`
    return {
      [`${t}-wrapper`]: {
        [`${t}-summary`]: {
          position: 'relative',
          zIndex: e.zIndexTableFixed,
          background: e.tableBg,
          '> tr': { '> th, > td': { borderBottom: i } },
        },
        [`div${t}-summary`]: {
          boxShadow: `0 ${j(o(r).mul(-1).equal())} 0 ${n}`,
        },
      },
    }
  },
  pu = (e) => {
    const {
        componentCls: t,
        motionDurationMid: r,
        lineWidth: n,
        lineType: o,
        tableBorderColor: i,
        calc: d,
      } = e,
      a = `${j(n)} ${o} ${i}`,
      s = `${t}-expanded-row-cell`
    return {
      [`${t}-wrapper`]: {
        [`${t}-tbody-virtual`]: {
          [`${t}-tbody-virtual-holder-inner`]: {
            [`
            & > ${t}-row, 
            & > div:not(${t}-row) > ${t}-row
          `]: { display: 'flex', boxSizing: 'border-box', width: '100%' },
          },
          [`${t}-cell`]: { borderBottom: a, transition: `background ${r}` },
          [`${t}-expanded-row`]: {
            [`${s}${s}-fixed`]: {
              position: 'sticky',
              insetInlineStart: 0,
              overflow: 'hidden',
              width: `calc(var(--virtual-width) - ${j(n)})`,
              borderInlineEnd: 'none',
            },
          },
        },
        [`${t}-bordered`]: {
          [`${t}-tbody-virtual`]: {
            '&:after': {
              content: '""',
              insetInline: 0,
              bottom: 0,
              borderBottom: a,
              position: 'absolute',
            },
            [`${t}-cell`]: {
              borderInlineEnd: a,
              [`&${t}-cell-fix-right-first:before`]: {
                content: '""',
                position: 'absolute',
                insetBlock: 0,
                insetInlineStart: d(n).mul(-1).equal(),
                borderInlineStart: a,
              },
            },
          },
          [`&${t}-virtual`]: {
            [`${t}-placeholder ${t}-cell`]: {
              borderInlineEnd: a,
              borderBottom: a,
            },
          },
        },
      },
    }
  },
  vu = (e) => {
    const {
        componentCls: t,
        fontWeightStrong: r,
        tablePaddingVertical: n,
        tablePaddingHorizontal: o,
        tableExpandColumnWidth: i,
        lineWidth: d,
        lineType: a,
        tableBorderColor: s,
        tableFontSize: c,
        tableBg: f,
        tableRadius: p,
        tableHeaderTextColor: u,
        motionDurationMid: v,
        tableHeaderBg: m,
        tableHeaderCellSplitColor: h,
        tableFooterTextColor: g,
        tableFooterBg: y,
        calc: b,
      } = e,
      x = `${j(d)} ${a} ${s}`
    return {
      [`${t}-wrapper`]: Object.assign(
        Object.assign({ clear: 'both', maxWidth: '100%' }, ki()),
        {
          [t]: Object.assign(Object.assign({}, Rt(e)), {
            fontSize: c,
            background: f,
            borderRadius: `${j(p)} ${j(p)} 0 0`,
            scrollbarColor: `${e.tableScrollThumbBg} ${e.tableScrollBg}`,
          }),
          table: {
            width: '100%',
            textAlign: 'start',
            borderRadius: `${j(p)} ${j(p)} 0 0`,
            borderCollapse: 'separate',
            borderSpacing: 0,
          },
          [`
          ${t}-cell,
          ${t}-thead > tr > th,
          ${t}-tbody > tr > th,
          ${t}-tbody > tr > td,
          tfoot > tr > th,
          tfoot > tr > td
        `]: {
            position: 'relative',
            padding: `${j(n)} ${j(o)}`,
            overflowWrap: 'break-word',
          },
          [`${t}-title`]: { padding: `${j(n)} ${j(o)}` },
          [`${t}-thead`]: {
            '\n          > tr > th,\n          > tr > td\n        ': {
              position: 'relative',
              color: u,
              fontWeight: r,
              textAlign: 'start',
              background: m,
              borderBottom: x,
              transition: `background ${v} ease`,
              "&[colspan]:not([colspan='1'])": { textAlign: 'center' },
              [`&:not(:last-child):not(${t}-selection-column):not(${t}-row-expand-icon-cell):not([colspan])::before`]:
                {
                  position: 'absolute',
                  top: '50%',
                  insetInlineEnd: 0,
                  width: 1,
                  height: '1.6em',
                  backgroundColor: h,
                  transform: 'translateY(-50%)',
                  transition: `background-color ${v}`,
                  content: '""',
                },
            },
            '> tr:not(:last-child) > th[colspan]': { borderBottom: 0 },
          },
          [`${t}-tbody`]: {
            '> tr': {
              '> th, > td': {
                transition: `background ${v}, border-color ${v}`,
                borderBottom: x,
                [`
              > ${t}-wrapper:only-child,
              > ${t}-expanded-row-fixed > ${t}-wrapper:only-child
            `]: {
                  [t]: {
                    marginBlock: j(b(n).mul(-1).equal()),
                    marginInline: `${j(b(i).sub(o).equal())}
                ${j(b(o).mul(-1).equal())}`,
                    [`${t}-tbody > tr:last-child > td`]: {
                      borderBottom: 0,
                      '&:first-child, &:last-child': { borderRadius: 0 },
                    },
                  },
                },
              },
              '> th': {
                position: 'relative',
                color: u,
                fontWeight: r,
                textAlign: 'start',
                background: m,
                borderBottom: x,
                transition: `background ${v} ease`,
              },
            },
          },
          [`${t}-footer`]: {
            padding: `${j(n)} ${j(o)}`,
            color: g,
            background: y,
          },
        },
      ),
    }
  },
  mu = (e) => {
    const {
        colorFillAlter: t,
        colorBgContainer: r,
        colorTextHeading: n,
        colorFillSecondary: o,
        colorFillContent: i,
        controlItemBgActive: d,
        controlItemBgActiveHover: a,
        padding: s,
        paddingSM: c,
        paddingXS: f,
        colorBorderSecondary: p,
        borderRadiusLG: u,
        controlHeight: v,
        colorTextPlaceholder: m,
        fontSize: h,
        fontSizeSM: g,
        lineHeight: y,
        lineWidth: b,
        colorIcon: x,
        colorIconHover: C,
        opacityLoading: S,
        controlInteractiveSize: $,
      } = e,
      R = new ln(o).onBackground(r).toHexShortString(),
      w = new ln(i).onBackground(r).toHexShortString(),
      E = new ln(t).onBackground(r).toHexShortString(),
      N = new ln(x),
      k = new ln(C),
      I = $ / 2 - b,
      O = I * 2 + b * 3
    return {
      headerBg: E,
      headerColor: n,
      headerSortActiveBg: R,
      headerSortHoverBg: w,
      bodySortBg: E,
      rowHoverBg: E,
      rowSelectedBg: d,
      rowSelectedHoverBg: a,
      rowExpandedBg: t,
      cellPaddingBlock: s,
      cellPaddingInline: s,
      cellPaddingBlockMD: c,
      cellPaddingInlineMD: f,
      cellPaddingBlockSM: f,
      cellPaddingInlineSM: f,
      borderColor: p,
      headerBorderRadius: u,
      footerBg: E,
      footerColor: n,
      cellFontSize: h,
      cellFontSizeMD: h,
      cellFontSizeSM: h,
      headerSplitColor: p,
      fixedHeaderSortActiveBg: R,
      headerFilterHoverBg: i,
      filterDropdownMenuBg: r,
      filterDropdownBg: r,
      expandIconBg: r,
      selectionColumnWidth: v,
      stickyScrollBarBg: m,
      stickyScrollBarBorderRadius: 100,
      expandIconMarginTop:
        (h * y - b * 3) / 2 - Math.ceil((g * 1.4 - b * 3) / 2),
      headerIconColor: N.clone()
        .setAlpha(N.getAlpha() * S)
        .toRgbString(),
      headerIconHoverColor: k
        .clone()
        .setAlpha(k.getAlpha() * S)
        .toRgbString(),
      expandIconHalfInner: I,
      expandIconSize: O,
      expandIconScale: $ / O,
    }
  },
  Do = 2,
  gu = mn(
    'Table',
    (e) => {
      const {
          colorTextHeading: t,
          colorSplit: r,
          colorBgContainer: n,
          controlInteractiveSize: o,
          headerBg: i,
          headerColor: d,
          headerSortActiveBg: a,
          headerSortHoverBg: s,
          bodySortBg: c,
          rowHoverBg: f,
          rowSelectedBg: p,
          rowSelectedHoverBg: u,
          rowExpandedBg: v,
          cellPaddingBlock: m,
          cellPaddingInline: h,
          cellPaddingBlockMD: g,
          cellPaddingInlineMD: y,
          cellPaddingBlockSM: b,
          cellPaddingInlineSM: x,
          borderColor: C,
          footerBg: S,
          footerColor: $,
          headerBorderRadius: R,
          cellFontSize: w,
          cellFontSizeMD: E,
          cellFontSizeSM: N,
          headerSplitColor: k,
          fixedHeaderSortActiveBg: I,
          headerFilterHoverBg: O,
          filterDropdownBg: P,
          expandIconBg: K,
          selectionColumnWidth: D,
          stickyScrollBarBg: L,
          calc: B,
        } = e,
        M = gn(e, {
          tableFontSize: w,
          tableBg: n,
          tableRadius: R,
          tablePaddingVertical: m,
          tablePaddingHorizontal: h,
          tablePaddingVerticalMiddle: g,
          tablePaddingHorizontalMiddle: y,
          tablePaddingVerticalSmall: b,
          tablePaddingHorizontalSmall: x,
          tableBorderColor: C,
          tableHeaderTextColor: d,
          tableHeaderBg: i,
          tableFooterTextColor: $,
          tableFooterBg: S,
          tableHeaderCellSplitColor: k,
          tableHeaderSortBg: a,
          tableHeaderSortHoverBg: s,
          tableBodySortBg: c,
          tableFixedHeaderSortActiveBg: I,
          tableHeaderFilterActiveBg: O,
          tableFilterDropdownBg: P,
          tableRowHoverBg: f,
          tableSelectedRowBg: p,
          tableSelectedRowHoverBg: u,
          zIndexTableFixed: Do,
          zIndexTableSticky: B(Do).add(1).equal({ unit: !1 }),
          tableFontSizeMiddle: E,
          tableFontSizeSmall: N,
          tableSelectionColumnWidth: D,
          tableExpandIconBg: K,
          tableExpandColumnWidth: B(o).add(B(e.padding).mul(2)).equal(),
          tableExpandedRowBg: v,
          tableFilterDropdownWidth: 120,
          tableFilterDropdownHeight: 264,
          tableFilterDropdownSearchWidth: 140,
          tableScrollThumbSize: 8,
          tableScrollThumbBg: L,
          tableScrollThumbBgHover: t,
          tableScrollBg: r,
        })
      return [
        vu(M),
        iu(M),
        To(M),
        uu(M),
        ou(M),
        eu(M),
        lu(M),
        ru(M),
        To(M),
        nu(M),
        cu(M),
        au(M),
        fu(M),
        tu(M),
        du(M),
        su(M),
        pu(M),
      ]
    },
    mu,
    { unitless: { expandIconScale: !0 } },
  ),
  hu = [],
  yu = (e, t) => {
    var r, n
    const {
      prefixCls: o,
      className: i,
      rootClassName: d,
      style: a,
      size: s,
      bordered: c,
      dropdownPrefixCls: f,
      dataSource: p,
      pagination: u,
      rowSelection: v,
      rowKey: m = 'key',
      rowClassName: h,
      columns: g,
      children: y,
      childrenColumnName: b,
      onChange: x,
      getPopupContainer: C,
      loading: S,
      expandIcon: $,
      expandable: R,
      expandedRowRender: w,
      expandIconColumnIndex: E,
      indentSize: N,
      scroll: k,
      sortDirections: I,
      locale: O,
      showSorterTooltip: P = { target: 'full-header' },
      virtual: K,
    } = e
    Dn()
    const D = l.useMemo(() => g || Sr(y), [g, y]),
      L = l.useMemo(() => D.some((ce) => ce.responsive), [D]),
      B = ea(L),
      M = l.useMemo(() => {
        const ce = new Set(Object.keys(B).filter((pe) => B[pe]))
        return D.filter(
          (pe) => !pe.responsive || pe.responsive.some((Re) => ce.has(Re)),
        )
      }, [D, B]),
      U = jo(e, ['className', 'style', 'columns']),
      {
        locale: z = Ii,
        direction: oe,
        table: Z,
        renderEmpty: me,
        getPrefixCls: Q,
        getPopupContainer: he,
      } = l.useContext(ht),
      te = vr(s),
      ie = Object.assign(Object.assign({}, z.Table), O),
      $e = p || hu,
      ee = Q('table', o),
      Y = Q('dropdown', f),
      [, F] = Mn(),
      A = hn(ee),
      [q, se, V] = gu(ee, A),
      ne = Object.assign(
        Object.assign({ childrenColumnName: b, expandIconColumnIndex: E }, R),
        {
          expandIcon:
            (r = R == null ? void 0 : R.expandIcon) !== null && r !== void 0
              ? r
              : (n = Z == null ? void 0 : Z.expandable) === null || n === void 0
                ? void 0
                : n.expandIcon,
        },
      ),
      { childrenColumnName: W = 'children' } = ne,
      de = l.useMemo(
        () =>
          $e.some((ce) => (ce == null ? void 0 : ce[W]))
            ? 'nest'
            : w || (R != null && R.expandedRowRender)
              ? 'row'
              : null,
        [$e],
      ),
      G = { body: l.useRef() },
      ge = pd(ee),
      le = l.useRef(null),
      we = l.useRef(null)
    ud(t, () =>
      Object.assign(Object.assign({}, we.current), {
        nativeElement: le.current,
      }),
    )
    const xe = l.useMemo(
        () =>
          typeof m == 'function' ? m : (ce) => (ce == null ? void 0 : ce[m]),
        [m],
      ),
      [fe] = qd($e, W, xe),
      Oe = {},
      He = function (ce, pe) {
        let Re =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
        var Be, Xe, Ye, mt
        const We = Object.assign(Object.assign({}, Oe), ce)
        Re &&
          ((Be = Oe.resetPagination) === null || Be === void 0 || Be.call(Oe),
          !((Xe = We.pagination) === null || Xe === void 0) &&
            Xe.current &&
            (We.pagination.current = 1),
          u &&
            ((Ye = u.onChange) === null ||
              Ye === void 0 ||
              Ye.call(
                u,
                1,
                (mt = We.pagination) === null || mt === void 0
                  ? void 0
                  : mt.pageSize,
              ))),
          k &&
            k.scrollToFirstRowOnChange !== !1 &&
            G.body.current &&
            Ui(0, { getContainer: () => G.body.current }),
          x == null ||
            x(We.pagination, We.filters, We.sorter, {
              currentDataSource: ur(
                pr($e, We.sorterStates, W),
                We.filterStates,
                W,
              ),
              action: pe,
            })
      },
      ot = (ce, pe) => {
        He({ sorter: ce, sorterStates: pe }, 'sort', !1)
      },
      [Pe, Ce, Ie, ye] = Yd({
        prefixCls: ee,
        mergedColumns: M,
        onSorterChange: ot,
        sortDirections: I || ['ascend', 'descend'],
        tableLocale: ie,
        showSorterTooltip: P,
      }),
      Me = l.useMemo(() => pr($e, Ce, W), [$e, Ce])
    ;(Oe.sorter = ye()), (Oe.sorterStates = Ce)
    const Te = (ce, pe) => {
        He({ filters: ce, filterStates: pe }, 'filter', !0)
      },
      [ke, Ae, _e] = Wd({
        prefixCls: ee,
        locale: ie,
        dropdownPrefixCls: Y,
        mergedColumns: M,
        onFilterChange: Te,
        getPopupContainer: C || he,
        rootClassName: X(d, A),
      }),
      Le = ur(Me, Ae, W)
    ;(Oe.filters = _e), (Oe.filterStates = Ae)
    const qe = l.useMemo(() => {
        const ce = {}
        return (
          Object.keys(_e).forEach((pe) => {
            _e[pe] !== null && (ce[pe] = _e[pe])
          }),
          Object.assign(Object.assign({}, Ie), { filters: ce })
        )
      }, [Ie, _e]),
      [dt] = Qd(qe),
      Et = (ce, pe) => {
        He(
          {
            pagination: Object.assign(Object.assign({}, Oe.pagination), {
              current: ce,
              pageSize: pe,
            }),
          },
          'paginate',
        )
      },
      [Ke, Pt] = Xd(Le.length, Et, u)
    ;(Oe.pagination = u === !1 ? {} : Ud(Ke, u)), (Oe.resetPagination = Pt)
    const et = l.useMemo(() => {
        if (u === !1 || !Ke.pageSize) return Le
        const { current: ce = 1, total: pe, pageSize: Re = ja } = Ke
        return Le.length < pe
          ? Le.length > Re
            ? Le.slice((ce - 1) * Re, ce * Re)
            : Le
          : Le.slice((ce - 1) * Re, ce * Re)
      }, [
        !!u,
        Le,
        Ke == null ? void 0 : Ke.current,
        Ke == null ? void 0 : Ke.pageSize,
        Ke == null ? void 0 : Ke.total,
      ]),
      [lt, tt] = cd(
        {
          prefixCls: ee,
          data: Le,
          pageData: et,
          getRowKey: xe,
          getRecordByKey: fe,
          expandType: de,
          childrenColumnName: W,
          locale: ie,
          getPopupContainer: C || he,
        },
        v,
      ),
      vt = (ce, pe, Re) => {
        let Be
        return (
          typeof h == 'function' ? (Be = X(h(ce, pe, Re))) : (Be = X(h)),
          X({ [`${ee}-row-selected`]: tt.has(xe(ce, pe)) }, Be)
        )
      }
    ;(ne.__PARENT_RENDER_ICON__ = ne.expandIcon),
      (ne.expandIcon = ne.expandIcon || $ || fd(ie)),
      de === 'nest' && ne.expandIconColumnIndex === void 0
        ? (ne.expandIconColumnIndex = v ? 1 : 0)
        : ne.expandIconColumnIndex > 0 && v && (ne.expandIconColumnIndex -= 1),
      typeof ne.indentSize != 'number' &&
        (ne.indentSize = typeof N == 'number' ? N : 15)
    const Ve = l.useCallback((ce) => dt(lt(ke(Pe(ce)))), [Pe, ke, lt])
    let Ue, st
    if (u !== !1 && Ke != null && Ke.total) {
      let ce
      Ke.size
        ? (ce = Ke.size)
        : (ce = te === 'small' || te === 'middle' ? 'small' : void 0)
      const pe = (Xe) =>
          l.createElement(
            ls,
            Object.assign({}, Ke, {
              className: X(
                `${ee}-pagination ${ee}-pagination-${Xe}`,
                Ke.className,
              ),
              size: ce,
            }),
          ),
        Re = oe === 'rtl' ? 'left' : 'right',
        { position: Be } = Ke
      if (Be !== null && Array.isArray(Be)) {
        const Xe = Be.find((We) => We.includes('top')),
          Ye = Be.find((We) => We.includes('bottom')),
          mt = Be.every((We) => `${We}` == 'none')
        !Xe && !Ye && !mt && (st = pe(Re)),
          Xe && (Ue = pe(Xe.toLowerCase().replace('top', ''))),
          Ye && (st = pe(Ye.toLowerCase().replace('bottom', '')))
      } else st = pe(Re)
    }
    let De
    typeof S == 'boolean'
      ? (De = { spinning: S })
      : typeof S == 'object' && (De = Object.assign({ spinning: !0 }, S))
    const je = X(
        V,
        A,
        `${ee}-wrapper`,
        Z == null ? void 0 : Z.className,
        { [`${ee}-wrapper-rtl`]: oe === 'rtl' },
        i,
        d,
        se,
      ),
      nt = Object.assign(Object.assign({}, Z == null ? void 0 : Z.style), a),
      en =
        typeof (O == null ? void 0 : O.emptyText) < 'u'
          ? O.emptyText
          : (me == null ? void 0 : me('Table')) ||
            l.createElement(Di, { componentName: 'Table' }),
      tn = K ? Zd : Jd,
      Ct = {},
      nn = l.useMemo(() => {
        const {
            fontSize: ce,
            lineHeight: pe,
            padding: Re,
            paddingXS: Be,
            paddingSM: Xe,
          } = F,
          Ye = Math.floor(ce * pe)
        switch (te) {
          case 'large':
            return Re * 2 + Ye
          case 'small':
            return Be * 2 + Ye
          default:
            return Xe * 2 + Ye
        }
      }, [F, te])
    return (
      K && (Ct.listItemHeight = nn),
      q(
        l.createElement(
          'div',
          { ref: le, className: je, style: nt },
          l.createElement(
            Ri,
            Object.assign({ spinning: !1 }, De),
            Ue,
            l.createElement(
              tn,
              Object.assign({}, Ct, U, {
                ref: we,
                columns: M,
                direction: oe,
                expandable: ne,
                prefixCls: ee,
                className: X(
                  {
                    [`${ee}-middle`]: te === 'middle',
                    [`${ee}-small`]: te === 'small',
                    [`${ee}-bordered`]: c,
                    [`${ee}-empty`]: $e.length === 0,
                  },
                  V,
                  A,
                  se,
                ),
                data: et,
                rowKey: xe,
                rowClassName: vt,
                emptyText: en,
                internalHooks: xn,
                internalRefs: G,
                transformColumns: Ve,
                getContainerWidth: ge,
              }),
            ),
            st,
          ),
        ),
      )
    )
  },
  bu = l.forwardRef(yu),
  xu = (e, t) => {
    const r = l.useRef(0)
    return (
      (r.current += 1),
      l.createElement(
        bu,
        Object.assign({}, e, { ref: t, _renderTimes: r.current }),
      )
    )
  },
  xt = l.forwardRef(xu)
xt.SELECTION_COLUMN = wt
xt.EXPAND_COLUMN = Nt
xt.SELECTION_ALL = ir
xt.SELECTION_INVERT = lr
xt.SELECTION_NONE = sr
xt.Column = Jc
xt.ColumnGroup = Zc
xt.Summary = ma
function Cu({
  handleSearch: e,
  setDateRange: t,
  dateRange: r,
  setDeliveryNo: n,
  setStockIn: o,
}) {
  qo(), Oi()
  const [i, d] = l.useState('')
  l.useState(''), l.useState(null), l.useState(null)
  const a = (s) => {
    d(s.target.value), n(s.target.value)
  }
  return Ne.jsx('div', {
    className: 'mt-1',
    children: Ne.jsxs(Mi, {
      bordered: !1,
      className: 'mb-2',
      style: { width: '100%' },
      size: 'small',
      children: [
        Ne.jsxs('div', {
          className: 'flex gap-4 justify-between',
          children: [
            Ne.jsxs(er, {
              direction: 'vertical',
              size: 12,
              style: { width: '100%' },
              children: [
                Ne.jsx(tr.Text, { children: 'YYWW' }),
                Ne.jsx(Pn, {
                  value: i,
                  onChange: a,
                  placeholder: 'Enter Delivery No',
                }),
              ],
            }),
            Ne.jsxs(er, {
              direction: 'vertical',
              size: 12,
              style: { width: '100%' },
              children: [
                Ne.jsx(tr.Text, { children: 'YYYYMM' }),
                Ne.jsx(Pn, {
                  value: i,
                  onChange: a,
                  placeholder: 'Enter Delivery No',
                }),
              ],
            }),
          ],
        }),
        Ne.jsxs('div', {
          className: 'flex gap-4 justify-end mt-4',
          children: [
            Ne.jsx(On, {
              type: 'primary',
              icon: Ne.jsx(Xr, {}),
              size: 'middle',
              children: 'Search',
            }),
            Ne.jsx(On, {
              type: 'default',
              icon: Ne.jsx(Xr, {}),
              size: 'middle',
              children: 'Stock In',
            }),
          ],
        }),
      ],
    }),
  })
}
const { Title: $n, Text: Su } = tr,
  { Header: Eu, Content: $u, Footer: wu } = Vo,
  Nu = [
    {
      id: 1,
      code: 'A001',
      quantity: 100,
      quantityOut: 0,
      quantityRemaining: 100,
    },
    {
      id: 2,
      code: 'A002',
      quantity: 200,
      quantityOut: 0,
      quantityRemaining: 200,
    },
    {
      id: 3,
      code: 'A003',
      quantity: 150,
      quantityOut: 0,
      quantityRemaining: 150,
    },
    {
      id: 4,
      code: 'A004',
      quantity: 300,
      quantityOut: 0,
      quantityRemaining: 300,
    },
    {
      id: 5,
      code: 'A005',
      quantity: 50,
      quantityOut: 0,
      quantityRemaining: 50,
    },
    {
      id: 6,
      code: 'A006',
      quantity: 120,
      quantityOut: 0,
      quantityRemaining: 120,
    },
    {
      id: 7,
      code: 'A007',
      quantity: 180,
      quantityOut: 0,
      quantityRemaining: 180,
    },
    {
      id: 8,
      code: 'A008',
      quantity: 75,
      quantityOut: 0,
      quantityRemaining: 75,
    },
    {
      id: 67,
      code: 'A067',
      quantity: 400,
      quantityOut: 0,
      quantityRemaining: 400,
    },
  ]
function Iu({ permissions: e, isMobile: t }) {
  const { t: r } = qo(),
    n = l.useRef(null),
    o = l.useRef(null),
    [i, d] = l.useState(!1),
    [a, s] = l.useState(''),
    [c, f] = l.useState(0),
    [p, u] = l.useState([]),
    [v, m] = l.useState([]),
    [h, g] = l.useState(Nu)
  l.useEffect(
    () => (
      (n.current = new Worker(
        new URL('/assets/workerWatingIqcStockIn-CxJatQZV.js', import.meta.url),
      )),
      (n.current.onmessage = (S) => {
        const { type: $, payload: R } = S.data
        $ === 'processedData' &&
          (R.error
            ? wn.error(R.error)
            : (g(R.updatedData),
              m((w) => [...w, R.processedData]),
              u((w) => [...w, { key: Math.random(), ...R.processedData }])),
          d(!1))
      }),
      (n.current.onerror = (S) => {
        console.error('Worker Error:', S),
          wn.error('Đã xảy ra lỗi khi xử lý!'),
          d(!1)
      }),
      o.current && o.current.focus(),
      () => {
        n.current.terminate()
      }
    ),
    [],
  )
  const y = (S) => {
      const $ = S.target.value
      if ((s($), $.includes('/'))) {
        const [R, w] = $.split('/')
        w && !isNaN(w) && Number(w) > 0 && (f(Number(w)), s(R), b(R, Number(w)))
      }
    },
    b = (S, $) => {
      if (!S || $ <= 0) {
        wn.error('Vui lòng nhập mã và số lượng hợp lệ!')
        return
      }
      n.current.postMessage({
        type: 'processData',
        payload: { dataTest: h, code: S, quantity: $ },
      }),
        d(!0)
    },
    x = (S) => {
      S.key === 'Enter' && b(a, c)
    },
    C = [
      { title: 'Mã', dataIndex: 'code', key: 'code' },
      { title: 'Số lượng đã nhập', dataIndex: 'quantity', key: 'quantity' },
    ]
  return Ne.jsxs(Vo, {
    className: 'h-screen bg-slate-50',
    children: [
      Ne.jsx(Pi, {
        children: Ne.jsxs('title', {
          children: ['ITM - ', r('Waiting Iqc Stock In')],
        }),
      }),
      Ne.jsxs('div', {
        className: 'h-[calc(100vh-100px)] overflow-auto',
        children: [
          Ne.jsxs(Eu, {
            className: 'bg-slate-50 px-4 h-auto',
            children: [
              Ne.jsx($n, {
                level: 5,
                className: 'mt-2 uppercase',
                children: r('Waiting Iqc Stock In'),
              }),
              Ne.jsx(Cu, {}),
            ],
          }),
          Ne.jsxs($u, {
            className:
              'flex h-auto justify-center items-center bg-slate-50 px-4',
            children: [
              Ne.jsxs('div', {
                style: { marginBottom: 20, width: '100%' },
                children: [
                  Ne.jsx($n, { level: 4, children: 'Nhập mã và số lượng' }),
                  Ne.jsx(er, {
                    style: { display: 'flex', marginBottom: 20 },
                    children: Ne.jsx(Pn, {
                      ref: o,
                      value: a,
                      onChange: y,
                      onKeyDown: x,
                      placeholder: 'Nhập mã/số lượng (Ví dụ: A001/50)',
                      style: { width: '150px' },
                    }),
                  }),
                ],
              }),
              Ne.jsxs('div', {
                style: { marginTop: 40 },
                children: [
                  Ne.jsx($n, { level: 4, children: 'Dữ liệu gốc' }),
                  Ne.jsx(xt, {
                    style: { marginTop: 20 },
                    columns: [
                      { title: 'Mã', dataIndex: 'code', key: 'code' },
                      {
                        title: 'Số lượng còn lại',
                        dataIndex: 'quantityRemaining',
                        key: 'quantityRemaining',
                      },
                    ],
                    dataSource: h,
                    pagination: !1,
                  }),
                ],
              }),
              Ne.jsxs('div', {
                style: { marginTop: 40 },
                children: [
                  Ne.jsx($n, {
                    level: 4,
                    children: 'Dữ liệu mới (Số lượng đã nhập)',
                  }),
                  Ne.jsx(xt, {
                    style: { marginTop: 20 },
                    columns: C,
                    dataSource: v,
                    pagination: !1,
                  }),
                ],
              }),
            ],
          }),
          Ne.jsx(wu, {
            className: 'text-center h-auto bg-slate-50',
            children: Ne.jsx(Su, {
              className: 'text-base',
              children: 'ITM SEMICONDUCTOR CO.,LTD ©2024',
            }),
          }),
        ],
      }),
    ],
  })
}
export { Iu as default }
