import {
  r as l,
  U as Nn,
  l as at,
  d as _e,
  a as ve,
  E as bn,
  v as Wt,
  aj as Ul,
  x as U,
  W as _t,
  t as an,
  b as Ot,
  R as rn,
  f as Ft,
  e as ce,
  ag as Oe,
  b8 as Gl,
  aq as kr,
  F as Kl,
  _ as Ee,
  p as kt,
  T as ql,
  i as Xl,
  b9 as Zl,
  ba as Ja,
  bb as ei,
  k as vn,
  h as Rn,
  o as In,
  w as Nt,
  q as Ql,
  s as Jl,
  bc as ec,
  u as Dn,
  ai as Ca,
  aK as tc,
  aN as nc,
  au as ti,
  ao as Wr,
  y as Zn,
  a2 as rc,
  I as yn,
  L as ac,
  K as ic,
  N as oc,
  M as sc,
  P as pn,
  Q as Jn,
  S as xa,
  bd as ni,
  H as lc,
  al as cc,
  be as uc,
  am as dc,
  b0 as ri,
  X as ai,
  Y as fc,
  Z as Fr,
  a1 as Tn,
  $ as Ln,
  a0 as ii,
  a6 as hc,
  a4 as mc,
  bf as oi,
  a8 as vc,
  a7 as si,
  j as gc,
  bg as pc,
  bh as bc,
  bi as yc,
  aX as Sc,
  aw as li,
  bj as wc,
  bk as _c,
  b5 as er,
  bl as Cc,
  G as xc,
  z as $c,
  bm as tr,
  bn as Mc,
  a_ as $a,
  V as Oc,
  bo as Ec,
  c as ci,
} from './index-DLixwHhI.js'
var Ic = {
    icon: {
      tag: 'svg',
      attrs: {
        'fill-rule': 'evenodd',
        viewBox: '64 64 896 896',
        focusable: 'false',
      },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M799.86 166.31c.02 0 .04.02.08.06l57.69 57.7c.04.03.05.05.06.08a.12.12 0 010 .06c0 .03-.02.05-.06.09L569.93 512l287.7 287.7c.04.04.05.06.06.09a.12.12 0 010 .07c0 .02-.02.04-.06.08l-57.7 57.69c-.03.04-.05.05-.07.06a.12.12 0 01-.07 0c-.03 0-.05-.02-.09-.06L512 569.93l-287.7 287.7c-.04.04-.06.05-.09.06a.12.12 0 01-.07 0c-.02 0-.04-.02-.08-.06l-57.69-57.7c-.04-.03-.05-.05-.06-.07a.12.12 0 010-.07c0-.03.02-.05.06-.09L454.07 512l-287.7-287.7c-.04-.04-.05-.06-.06-.09a.12.12 0 010-.07c0-.02.02-.04.06-.08l57.7-57.69c.03-.04.05-.05.07-.06a.12.12 0 01.07 0c.03 0 .05.02.09.06L512 454.07l287.7-287.7c.04-.04.06-.05.09-.06a.12.12 0 01.07 0z',
          },
        },
      ],
    },
    name: 'close',
    theme: 'outlined',
  },
  Rc = function (r, o) {
    return l.createElement(Nn, at({}, r, { ref: o, icon: Ic }))
  },
  ui = l.forwardRef(Rc),
  Dc = `accept acceptCharset accessKey action allowFullScreen allowTransparency
    alt async autoComplete autoFocus autoPlay capture cellPadding cellSpacing challenge
    charSet checked classID className colSpan cols content contentEditable contextMenu
    controls coords crossOrigin data dateTime default defer dir disabled download draggable
    encType form formAction formEncType formMethod formNoValidate formTarget frameBorder
    headers height hidden high href hrefLang htmlFor httpEquiv icon id inputMode integrity
    is keyParams keyType kind label lang list loop low manifest marginHeight marginWidth max maxLength media
    mediaGroup method min minLength multiple muted name noValidate nonce open
    optimum pattern placeholder poster preload radioGroup readOnly rel required
    reversed role rowSpan rows sandbox scope scoped scrolling seamless selected
    shape size sizes span spellCheck src srcDoc srcLang srcSet start step style
    summary tabIndex target title type useMap value width wmode wrap`,
  Tc = `onCopy onCut onPaste onCompositionEnd onCompositionStart onCompositionUpdate onKeyDown
    onKeyPress onKeyUp onFocus onBlur onChange onInput onSubmit onClick onContextMenu onDoubleClick
    onDrag onDragEnd onDragEnter onDragExit onDragLeave onDragOver onDragStart onDrop onMouseDown
    onMouseEnter onMouseLeave onMouseMove onMouseOut onMouseOver onMouseUp onSelect onTouchCancel
    onTouchEnd onTouchMove onTouchStart onScroll onWheel onAbort onCanPlay onCanPlayThrough
    onDurationChange onEmptied onEncrypted onEnded onError onLoadedData onLoadedMetadata
    onLoadStart onPause onPlay onPlaying onProgress onRateChange onSeeked onSeeking onStalled onSuspend onTimeUpdate onVolumeChange onWaiting onLoad onError`,
  Pc = ''
    .concat(Dc, ' ')
    .concat(Tc)
    .split(/[\s\n]+/),
  Nc = 'aria-',
  Lc = 'data-'
function Ma(t, r) {
  return t.indexOf(r) === 0
}
function Pn(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    o
  r === !1
    ? (o = { aria: !0, data: !0, attr: !0 })
    : r === !0
      ? (o = { aria: !0 })
      : (o = _e({}, r))
  var i = {}
  return (
    Object.keys(t).forEach(function (c) {
      ;((o.aria && (c === 'role' || Ma(c, Nc))) ||
        (o.data && Ma(c, Lc)) ||
        (o.attr && Pc.includes(c))) &&
        (i[c] = t[c])
    }),
    i
  )
}
const nr = (t) => {
    const { prefixCls: r, className: o, style: i, size: c, shape: f } = t,
      h = ve({ [`${r}-lg`]: c === 'large', [`${r}-sm`]: c === 'small' }),
      d = ve({
        [`${r}-circle`]: f === 'circle',
        [`${r}-square`]: f === 'square',
        [`${r}-round`]: f === 'round',
      }),
      m = l.useMemo(
        () =>
          typeof c == 'number'
            ? { width: c, height: c, lineHeight: `${c}px` }
            : {},
        [c],
      )
    return l.createElement('span', {
      className: ve(r, h, d, o),
      style: Object.assign(Object.assign({}, m), i),
    })
  },
  zc = new Ul('ant-skeleton-loading', {
    '0%': { backgroundPosition: '100% 50%' },
    '100%': { backgroundPosition: '0 50%' },
  }),
  rr = (t) => ({ height: t, lineHeight: U(t) }),
  gn = (t) => Object.assign({ width: t }, rr(t)),
  Yc = (t) => ({
    background: t.skeletonLoadingBackground,
    backgroundSize: '400% 100%',
    animationName: zc,
    animationDuration: t.skeletonLoadingMotionDuration,
    animationTimingFunction: 'ease',
    animationIterationCount: 'infinite',
  }),
  Er = (t, r) =>
    Object.assign(
      { width: r(t).mul(5).equal(), minWidth: r(t).mul(5).equal() },
      rr(t),
    ),
  Hc = (t) => {
    const {
      skeletonAvatarCls: r,
      gradientFromColor: o,
      controlHeight: i,
      controlHeightLG: c,
      controlHeightSM: f,
    } = t
    return {
      [r]: Object.assign(
        { display: 'inline-block', verticalAlign: 'top', background: o },
        gn(i),
      ),
      [`${r}${r}-circle`]: { borderRadius: '50%' },
      [`${r}${r}-lg`]: Object.assign({}, gn(c)),
      [`${r}${r}-sm`]: Object.assign({}, gn(f)),
    }
  },
  kc = (t) => {
    const {
      controlHeight: r,
      borderRadiusSM: o,
      skeletonInputCls: i,
      controlHeightLG: c,
      controlHeightSM: f,
      gradientFromColor: h,
      calc: d,
    } = t
    return {
      [i]: Object.assign(
        {
          display: 'inline-block',
          verticalAlign: 'top',
          background: h,
          borderRadius: o,
        },
        Er(r, d),
      ),
      [`${i}-lg`]: Object.assign({}, Er(c, d)),
      [`${i}-sm`]: Object.assign({}, Er(f, d)),
    }
  },
  Oa = (t) => Object.assign({ width: t }, rr(t)),
  Wc = (t) => {
    const {
      skeletonImageCls: r,
      imageSizeBase: o,
      gradientFromColor: i,
      borderRadiusSM: c,
      calc: f,
    } = t
    return {
      [r]: Object.assign(
        Object.assign(
          {
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            verticalAlign: 'middle',
            background: i,
            borderRadius: c,
          },
          Oa(f(o).mul(2).equal()),
        ),
        {
          [`${r}-path`]: { fill: '#bfbfbf' },
          [`${r}-svg`]: Object.assign(Object.assign({}, Oa(o)), {
            maxWidth: f(o).mul(4).equal(),
            maxHeight: f(o).mul(4).equal(),
          }),
          [`${r}-svg${r}-svg-circle`]: { borderRadius: '50%' },
        },
      ),
      [`${r}${r}-circle`]: { borderRadius: '50%' },
    }
  },
  Ir = (t, r, o) => {
    const { skeletonButtonCls: i } = t
    return {
      [`${o}${i}-circle`]: { width: r, minWidth: r, borderRadius: '50%' },
      [`${o}${i}-round`]: { borderRadius: r },
    }
  },
  Rr = (t, r) =>
    Object.assign(
      { width: r(t).mul(2).equal(), minWidth: r(t).mul(2).equal() },
      rr(t),
    ),
  Fc = (t) => {
    const {
      borderRadiusSM: r,
      skeletonButtonCls: o,
      controlHeight: i,
      controlHeightLG: c,
      controlHeightSM: f,
      gradientFromColor: h,
      calc: d,
    } = t
    return Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              {
                [o]: Object.assign(
                  {
                    display: 'inline-block',
                    verticalAlign: 'top',
                    background: h,
                    borderRadius: r,
                    width: d(i).mul(2).equal(),
                    minWidth: d(i).mul(2).equal(),
                  },
                  Rr(i, d),
                ),
              },
              Ir(t, i, o),
            ),
            { [`${o}-lg`]: Object.assign({}, Rr(c, d)) },
          ),
          Ir(t, c, `${o}-lg`),
        ),
        { [`${o}-sm`]: Object.assign({}, Rr(f, d)) },
      ),
      Ir(t, f, `${o}-sm`),
    )
  },
  Ac = (t) => {
    const {
      componentCls: r,
      skeletonAvatarCls: o,
      skeletonTitleCls: i,
      skeletonParagraphCls: c,
      skeletonButtonCls: f,
      skeletonInputCls: h,
      skeletonImageCls: d,
      controlHeight: m,
      controlHeightLG: g,
      controlHeightSM: b,
      gradientFromColor: p,
      padding: C,
      marginSM: y,
      borderRadius: _,
      titleHeight: w,
      blockRadius: S,
      paragraphLiHeight: M,
      controlHeightXS: x,
      paragraphMarginTop: E,
    } = t
    return {
      [r]: {
        display: 'table',
        width: '100%',
        [`${r}-header`]: {
          display: 'table-cell',
          paddingInlineEnd: C,
          verticalAlign: 'top',
          [o]: Object.assign(
            { display: 'inline-block', verticalAlign: 'top', background: p },
            gn(m),
          ),
          [`${o}-circle`]: { borderRadius: '50%' },
          [`${o}-lg`]: Object.assign({}, gn(g)),
          [`${o}-sm`]: Object.assign({}, gn(b)),
        },
        [`${r}-content`]: {
          display: 'table-cell',
          width: '100%',
          verticalAlign: 'top',
          [i]: {
            width: '100%',
            height: w,
            background: p,
            borderRadius: S,
            [`+ ${c}`]: { marginBlockStart: b },
          },
          [c]: {
            padding: 0,
            '> li': {
              width: '100%',
              height: M,
              listStyle: 'none',
              background: p,
              borderRadius: S,
              '+ li': { marginBlockStart: x },
            },
          },
          [`${c}> li:last-child:not(:first-child):not(:nth-child(2))`]: {
            width: '61%',
          },
        },
        [`&-round ${r}-content`]: { [`${i}, ${c} > li`]: { borderRadius: _ } },
      },
      [`${r}-with-avatar ${r}-content`]: {
        [i]: { marginBlockStart: y, [`+ ${c}`]: { marginBlockStart: E } },
      },
      [`${r}${r}-element`]: Object.assign(
        Object.assign(
          Object.assign(
            Object.assign({ display: 'inline-block', width: 'auto' }, Fc(t)),
            Hc(t),
          ),
          kc(t),
        ),
        Wc(t),
      ),
      [`${r}${r}-block`]: {
        width: '100%',
        [f]: { width: '100%' },
        [h]: { width: '100%' },
      },
      [`${r}${r}-active`]: {
        [`
        ${i},
        ${c} > li,
        ${o},
        ${f},
        ${h},
        ${d}
      `]: Object.assign({}, Yc(t)),
      },
    }
  },
  jc = (t) => {
    const { colorFillContent: r, colorFill: o } = t,
      i = r,
      c = o
    return {
      color: i,
      colorGradientEnd: c,
      gradientFromColor: i,
      gradientToColor: c,
      titleHeight: t.controlHeight / 2,
      blockRadius: t.borderRadiusSM,
      paragraphMarginTop: t.marginLG + t.marginXXS,
      paragraphLiHeight: t.controlHeight / 2,
    }
  },
  Sn = bn(
    'Skeleton',
    (t) => {
      const { componentCls: r, calc: o } = t,
        i = Wt(t, {
          skeletonAvatarCls: `${r}-avatar`,
          skeletonTitleCls: `${r}-title`,
          skeletonParagraphCls: `${r}-paragraph`,
          skeletonButtonCls: `${r}-button`,
          skeletonInputCls: `${r}-input`,
          skeletonImageCls: `${r}-image`,
          imageSizeBase: o(t.controlHeight).mul(1.5).equal(),
          borderRadius: 100,
          skeletonLoadingBackground: `linear-gradient(90deg, ${t.gradientFromColor} 25%, ${t.gradientToColor} 37%, ${t.gradientFromColor} 63%)`,
          skeletonLoadingMotionDuration: '1.4s',
        })
      return [Ac(i)]
    },
    jc,
    {
      deprecatedTokens: [
        ['color', 'gradientFromColor'],
        ['colorGradientEnd', 'gradientToColor'],
      ],
    },
  ),
  Bc = (t) => {
    const {
        prefixCls: r,
        className: o,
        rootClassName: i,
        active: c,
        shape: f = 'circle',
        size: h = 'default',
      } = t,
      { getPrefixCls: d } = l.useContext(_t),
      m = d('skeleton', r),
      [g, b, p] = Sn(m),
      C = an(t, ['prefixCls', 'className']),
      y = ve(m, `${m}-element`, { [`${m}-active`]: c }, o, i, b, p)
    return g(
      l.createElement(
        'div',
        { className: y },
        l.createElement(
          nr,
          Object.assign({ prefixCls: `${m}-avatar`, shape: f, size: h }, C),
        ),
      ),
    )
  },
  Vc = (t) => {
    const {
        prefixCls: r,
        className: o,
        rootClassName: i,
        active: c,
        block: f = !1,
        size: h = 'default',
      } = t,
      { getPrefixCls: d } = l.useContext(_t),
      m = d('skeleton', r),
      [g, b, p] = Sn(m),
      C = an(t, ['prefixCls']),
      y = ve(
        m,
        `${m}-element`,
        { [`${m}-active`]: c, [`${m}-block`]: f },
        o,
        i,
        b,
        p,
      )
    return g(
      l.createElement(
        'div',
        { className: y },
        l.createElement(
          nr,
          Object.assign({ prefixCls: `${m}-button`, size: h }, C),
        ),
      ),
    )
  },
  Uc =
    'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
  Gc = (t) => {
    const {
        prefixCls: r,
        className: o,
        rootClassName: i,
        style: c,
        active: f,
      } = t,
      { getPrefixCls: h } = l.useContext(_t),
      d = h('skeleton', r),
      [m, g, b] = Sn(d),
      p = ve(d, `${d}-element`, { [`${d}-active`]: f }, o, i, g, b)
    return m(
      l.createElement(
        'div',
        { className: p },
        l.createElement(
          'div',
          { className: ve(`${d}-image`, o), style: c },
          l.createElement(
            'svg',
            {
              viewBox: '0 0 1098 1024',
              xmlns: 'http://www.w3.org/2000/svg',
              className: `${d}-image-svg`,
            },
            l.createElement('title', null, 'Image placeholder'),
            l.createElement('path', { d: Uc, className: `${d}-image-path` }),
          ),
        ),
      ),
    )
  },
  Kc = (t) => {
    const {
        prefixCls: r,
        className: o,
        rootClassName: i,
        active: c,
        block: f,
        size: h = 'default',
      } = t,
      { getPrefixCls: d } = l.useContext(_t),
      m = d('skeleton', r),
      [g, b, p] = Sn(m),
      C = an(t, ['prefixCls']),
      y = ve(
        m,
        `${m}-element`,
        { [`${m}-active`]: c, [`${m}-block`]: f },
        o,
        i,
        b,
        p,
      )
    return g(
      l.createElement(
        'div',
        { className: y },
        l.createElement(
          nr,
          Object.assign({ prefixCls: `${m}-input`, size: h }, C),
        ),
      ),
    )
  },
  qc = (t) => {
    const {
        prefixCls: r,
        className: o,
        rootClassName: i,
        style: c,
        active: f,
        children: h,
      } = t,
      { getPrefixCls: d } = l.useContext(_t),
      m = d('skeleton', r),
      [g, b, p] = Sn(m),
      C = ve(m, `${m}-element`, { [`${m}-active`]: f }, b, o, i, p)
    return g(
      l.createElement(
        'div',
        { className: C },
        l.createElement('div', { className: ve(`${m}-image`, o), style: c }, h),
      ),
    )
  },
  Xc = (t, r) => {
    const { width: o, rows: i = 2 } = r
    if (Array.isArray(o)) return o[t]
    if (i - 1 === t) return o
  },
  Zc = (t) => {
    const { prefixCls: r, className: o, style: i, rows: c } = t,
      f = Ot(new Array(c)).map((h, d) =>
        l.createElement('li', { key: d, style: { width: Xc(d, t) } }),
      )
    return l.createElement('ul', { className: ve(r, o), style: i }, f)
  },
  Qc = (t) => {
    let { prefixCls: r, className: o, width: i, style: c } = t
    return l.createElement('h3', {
      className: ve(r, o),
      style: Object.assign({ width: i }, c),
    })
  }
function Dr(t) {
  return t && typeof t == 'object' ? t : {}
}
function Jc(t, r) {
  return t && !r
    ? { size: 'large', shape: 'square' }
    : { size: 'large', shape: 'circle' }
}
function eu(t, r) {
  return !t && r ? { width: '38%' } : t && r ? { width: '50%' } : {}
}
function tu(t, r) {
  const o = {}
  return (
    (!t || !r) && (o.width = '61%'), !t && r ? (o.rows = 3) : (o.rows = 2), o
  )
}
const wn = (t) => {
  const {
      prefixCls: r,
      loading: o,
      className: i,
      rootClassName: c,
      style: f,
      children: h,
      avatar: d = !1,
      title: m = !0,
      paragraph: g = !0,
      active: b,
      round: p,
    } = t,
    { getPrefixCls: C, direction: y, skeleton: _ } = l.useContext(_t),
    w = C('skeleton', r),
    [S, M, x] = Sn(w)
  if (o || !('loading' in t)) {
    const E = !!d,
      R = !!m,
      q = !!g
    let G
    if (E) {
      const W = Object.assign(
        Object.assign({ prefixCls: `${w}-avatar` }, Jc(R, q)),
        Dr(d),
      )
      G = l.createElement(
        'div',
        { className: `${w}-header` },
        l.createElement(nr, Object.assign({}, W)),
      )
    }
    let D
    if (R || q) {
      let W
      if (R) {
        const F = Object.assign(
          Object.assign({ prefixCls: `${w}-title` }, eu(E, q)),
          Dr(m),
        )
        W = l.createElement(Qc, Object.assign({}, F))
      }
      let Y
      if (q) {
        const F = Object.assign(
          Object.assign({ prefixCls: `${w}-paragraph` }, tu(E, R)),
          Dr(g),
        )
        Y = l.createElement(Zc, Object.assign({}, F))
      }
      D = l.createElement('div', { className: `${w}-content` }, W, Y)
    }
    const N = ve(
      w,
      {
        [`${w}-with-avatar`]: E,
        [`${w}-active`]: b,
        [`${w}-rtl`]: y === 'rtl',
        [`${w}-round`]: p,
      },
      _ == null ? void 0 : _.className,
      i,
      c,
      M,
      x,
    )
    return S(
      l.createElement(
        'div',
        {
          className: N,
          style: Object.assign(
            Object.assign({}, _ == null ? void 0 : _.style),
            f,
          ),
        },
        G,
        D,
      ),
    )
  }
  return h ?? null
}
wn.Button = Vc
wn.Avatar = Bc
wn.Input = Kc
wn.Image = Gc
wn.Node = qc
var ar = function (r) {
    var o = r.className,
      i = r.customizeIcon,
      c = r.customizeIconProps,
      f = r.children,
      h = r.onMouseDown,
      d = r.onClick,
      m = typeof i == 'function' ? i(c) : i
    return l.createElement(
      'span',
      {
        className: o,
        onMouseDown: function (b) {
          b.preventDefault(), h == null || h(b)
        },
        style: { userSelect: 'none', WebkitUserSelect: 'none' },
        unselectable: 'on',
        onClick: d,
        'aria-hidden': !0,
      },
      m !== void 0
        ? m
        : l.createElement(
            'span',
            {
              className: ve(
                o.split(/\s+/).map(function (g) {
                  return ''.concat(g, '-icon')
                }),
              ),
            },
            f,
          ),
    )
  },
  nu = function (r, o, i, c, f) {
    var h = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : !1,
      d = arguments.length > 6 ? arguments[6] : void 0,
      m = arguments.length > 7 ? arguments[7] : void 0,
      g = rn.useMemo(
        function () {
          if (Ft(c) === 'object') return c.clearIcon
          if (f) return f
        },
        [c, f],
      ),
      b = rn.useMemo(
        function () {
          return !!(
            !h &&
            c &&
            (i.length || d) &&
            !(m === 'combobox' && d === '')
          )
        },
        [c, h, i.length, d, m],
      )
    return {
      allowClear: b,
      clearIcon: rn.createElement(
        ar,
        { className: ''.concat(r, '-clear'), onMouseDown: o, customizeIcon: g },
        '×',
      ),
    }
  },
  di = l.createContext(null)
function ru() {
  return l.useContext(di)
}
function au() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 10,
    r = l.useState(!1),
    o = ce(r, 2),
    i = o[0],
    c = o[1],
    f = l.useRef(null),
    h = function () {
      window.clearTimeout(f.current)
    }
  l.useEffect(function () {
    return h
  }, [])
  var d = function (g, b) {
    h(),
      (f.current = window.setTimeout(function () {
        c(g), b && b()
      }, t))
  }
  return [i, d, h]
}
function fi() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 250,
    r = l.useRef(null),
    o = l.useRef(null)
  l.useEffect(function () {
    return function () {
      window.clearTimeout(o.current)
    }
  }, [])
  function i(c) {
    ;(c || r.current === null) && (r.current = c),
      window.clearTimeout(o.current),
      (o.current = window.setTimeout(function () {
        r.current = null
      }, t))
  }
  return [
    function () {
      return r.current
    },
    i,
  ]
}
function iu(t, r, o, i) {
  var c = l.useRef(null)
  ;(c.current = { open: r, triggerOpen: o, customizedTrigger: i }),
    l.useEffect(function () {
      function f(h) {
        var d
        if (
          !((d = c.current) !== null && d !== void 0 && d.customizedTrigger)
        ) {
          var m = h.target
          m.shadowRoot && h.composed && (m = h.composedPath()[0] || m),
            c.current.open &&
              t()
                .filter(function (g) {
                  return g
                })
                .every(function (g) {
                  return !g.contains(m) && g !== m
                }) &&
              c.current.triggerOpen(!1)
        }
      }
      return (
        window.addEventListener('mousedown', f),
        function () {
          return window.removeEventListener('mousedown', f)
        }
      )
    }, [])
}
function ou(t) {
  return ![
    Oe.ESC,
    Oe.SHIFT,
    Oe.BACKSPACE,
    Oe.TAB,
    Oe.WIN_KEY,
    Oe.ALT,
    Oe.META,
    Oe.WIN_KEY_RIGHT,
    Oe.CTRL,
    Oe.SEMICOLON,
    Oe.EQUALS,
    Oe.CAPS_LOCK,
    Oe.CONTEXT_MENU,
    Oe.F1,
    Oe.F2,
    Oe.F3,
    Oe.F4,
    Oe.F5,
    Oe.F6,
    Oe.F7,
    Oe.F8,
    Oe.F9,
    Oe.F10,
    Oe.F11,
    Oe.F12,
  ].includes(t)
}
var su = function (r, o) {
    var i,
      c = r.prefixCls,
      f = r.id,
      h = r.inputElement,
      d = r.disabled,
      m = r.tabIndex,
      g = r.autoFocus,
      b = r.autoComplete,
      p = r.editable,
      C = r.activeDescendantId,
      y = r.value,
      _ = r.maxLength,
      w = r.onKeyDown,
      S = r.onMouseDown,
      M = r.onChange,
      x = r.onPaste,
      E = r.onCompositionStart,
      R = r.onCompositionEnd,
      q = r.open,
      G = r.attrs,
      D = h || l.createElement('input', null),
      N = D,
      W = N.ref,
      Y = N.props,
      F = Y.onKeyDown,
      T = Y.onChange,
      L = Y.onMouseDown,
      P = Y.onCompositionStart,
      ee = Y.onCompositionEnd,
      se = Y.style
    return (
      Gl(!('maxLength' in D.props)),
      (D = l.cloneElement(
        D,
        _e(
          _e(
            _e({ type: 'search' }, Y),
            {},
            {
              id: f,
              ref: kr(o, W),
              disabled: d,
              tabIndex: m,
              autoComplete: b || 'off',
              autoFocus: g,
              className: ve(
                ''.concat(c, '-selection-search-input'),
                (i = D) === null ||
                  i === void 0 ||
                  (i = i.props) === null ||
                  i === void 0
                  ? void 0
                  : i.className,
              ),
              role: 'combobox',
              'aria-expanded': q || !1,
              'aria-haspopup': 'listbox',
              'aria-owns': ''.concat(f, '_list'),
              'aria-autocomplete': 'list',
              'aria-controls': ''.concat(f, '_list'),
              'aria-activedescendant': q ? C : void 0,
            },
            G,
          ),
          {},
          {
            value: p ? y : '',
            maxLength: _,
            readOnly: !p,
            unselectable: p ? null : 'on',
            style: _e(_e({}, se), {}, { opacity: p ? null : 0 }),
            onKeyDown: function (V) {
              w(V), F && F(V)
            },
            onMouseDown: function (V) {
              S(V), L && L(V)
            },
            onChange: function (V) {
              M(V), T && T(V)
            },
            onCompositionStart: function (V) {
              E(V), P && P(V)
            },
            onCompositionEnd: function (V) {
              R(V), ee && ee(V)
            },
            onPaste: x,
          },
        ),
      )),
      D
    )
  },
  hi = l.forwardRef(su)
function mi(t) {
  return Array.isArray(t) ? t : t !== void 0 ? [t] : []
}
var lu =
    typeof window < 'u' && window.document && window.document.documentElement,
  cu = lu
function uu(t) {
  return t != null
}
function du(t) {
  return !t && t !== 0
}
function Ea(t) {
  return ['string', 'number'].includes(Ft(t))
}
function vi(t) {
  var r = void 0
  return (
    t &&
      (Ea(t.title)
        ? (r = t.title.toString())
        : Ea(t.label) && (r = t.label.toString())),
    r
  )
}
function fu(t, r) {
  cu ? l.useLayoutEffect(t, r) : l.useEffect(t, r)
}
function hu(t) {
  var r
  return (r = t.key) !== null && r !== void 0 ? r : t.value
}
var Ia = function (r) {
    r.preventDefault(), r.stopPropagation()
  },
  mu = function (r) {
    var o = r.id,
      i = r.prefixCls,
      c = r.values,
      f = r.open,
      h = r.searchValue,
      d = r.autoClearSearchValue,
      m = r.inputRef,
      g = r.placeholder,
      b = r.disabled,
      p = r.mode,
      C = r.showSearch,
      y = r.autoFocus,
      _ = r.autoComplete,
      w = r.activeDescendantId,
      S = r.tabIndex,
      M = r.removeIcon,
      x = r.maxTagCount,
      E = r.maxTagTextLength,
      R = r.maxTagPlaceholder,
      q =
        R === void 0
          ? function (be) {
              return '+ '.concat(be.length, ' ...')
            }
          : R,
      G = r.tagRender,
      D = r.onToggleOpen,
      N = r.onRemove,
      W = r.onInputChange,
      Y = r.onInputPaste,
      F = r.onInputKeyDown,
      T = r.onInputMouseDown,
      L = r.onInputCompositionStart,
      P = r.onInputCompositionEnd,
      ee = l.useRef(null),
      se = l.useState(0),
      I = ce(se, 2),
      V = I[0],
      re = I[1],
      z = l.useState(!1),
      Q = ce(z, 2),
      Z = Q[0],
      A = Q[1],
      B = ''.concat(i, '-selection'),
      O = f || (p === 'multiple' && d === !1) || p === 'tags' ? h : '',
      ge = p === 'tags' || (p === 'multiple' && d === !1) || (C && (f || Z))
    fu(
      function () {
        re(ee.current.scrollWidth)
      },
      [O],
    )
    var ie = function (j, de, Ie, Ye, ye) {
        return l.createElement(
          'span',
          {
            title: vi(j),
            className: ve(
              ''.concat(B, '-item'),
              Ee({}, ''.concat(B, '-item-disabled'), Ie),
            ),
          },
          l.createElement(
            'span',
            { className: ''.concat(B, '-item-content') },
            de,
          ),
          Ye &&
            l.createElement(
              ar,
              {
                className: ''.concat(B, '-item-remove'),
                onMouseDown: Ia,
                onClick: ye,
                customizeIcon: M,
              },
              '×',
            ),
        )
      },
      De = function (j, de, Ie, Ye, ye, Ce) {
        var Be = function (Xe) {
          Ia(Xe), D(!f)
        }
        return l.createElement(
          'span',
          { onMouseDown: Be },
          G({
            label: de,
            value: j,
            disabled: Ie,
            closable: Ye,
            onClose: ye,
            isMaxTag: !!Ce,
          }),
        )
      },
      Pe = function (j) {
        var de = j.disabled,
          Ie = j.label,
          Ye = j.value,
          ye = !b && !de,
          Ce = Ie
        if (
          typeof E == 'number' &&
          (typeof Ie == 'string' || typeof Ie == 'number')
        ) {
          var Be = String(Ce)
          Be.length > E && (Ce = ''.concat(Be.slice(0, E), '...'))
        }
        var ze = function (Je) {
          Je && Je.stopPropagation(), N(j)
        }
        return typeof G == 'function'
          ? De(Ye, Ce, de, ye, ze)
          : ie(j, Ce, de, ye, ze)
      },
      J = function (j) {
        var de = typeof q == 'function' ? q(j) : q
        return typeof G == 'function'
          ? De(void 0, de, !1, !1, void 0, !0)
          : ie({ title: de }, de, !1)
      },
      H = l.createElement(
        'div',
        {
          className: ''.concat(B, '-search'),
          style: { width: V },
          onFocus: function () {
            A(!0)
          },
          onBlur: function () {
            A(!1)
          },
        },
        l.createElement(hi, {
          ref: m,
          open: f,
          prefixCls: i,
          id: o,
          inputElement: null,
          disabled: b,
          autoFocus: y,
          autoComplete: _,
          editable: ge,
          activeDescendantId: w,
          value: O,
          onKeyDown: F,
          onMouseDown: T,
          onChange: W,
          onPaste: Y,
          onCompositionStart: L,
          onCompositionEnd: P,
          tabIndex: S,
          attrs: Pn(r, !0),
        }),
        l.createElement(
          'span',
          {
            ref: ee,
            className: ''.concat(B, '-search-mirror'),
            'aria-hidden': !0,
          },
          O,
          ' ',
        ),
      ),
      ae = l.createElement(Kl, {
        prefixCls: ''.concat(B, '-overflow'),
        data: c,
        renderItem: Pe,
        renderRest: J,
        suffix: H,
        itemKey: hu,
        maxCount: x,
      })
    return l.createElement(
      l.Fragment,
      null,
      ae,
      !c.length &&
        !O &&
        l.createElement('span', { className: ''.concat(B, '-placeholder') }, g),
    )
  },
  vu = function (r) {
    var o = r.inputElement,
      i = r.prefixCls,
      c = r.id,
      f = r.inputRef,
      h = r.disabled,
      d = r.autoFocus,
      m = r.autoComplete,
      g = r.activeDescendantId,
      b = r.mode,
      p = r.open,
      C = r.values,
      y = r.placeholder,
      _ = r.tabIndex,
      w = r.showSearch,
      S = r.searchValue,
      M = r.activeValue,
      x = r.maxLength,
      E = r.onInputKeyDown,
      R = r.onInputMouseDown,
      q = r.onInputChange,
      G = r.onInputPaste,
      D = r.onInputCompositionStart,
      N = r.onInputCompositionEnd,
      W = r.title,
      Y = l.useState(!1),
      F = ce(Y, 2),
      T = F[0],
      L = F[1],
      P = b === 'combobox',
      ee = P || w,
      se = C[0],
      I = S || ''
    P && M && !T && (I = M),
      l.useEffect(
        function () {
          P && L(!1)
        },
        [P, M],
      )
    var V = b !== 'combobox' && !p && !w ? !1 : !!I,
      re = W === void 0 ? vi(se) : W,
      z = l.useMemo(
        function () {
          return se
            ? null
            : l.createElement(
                'span',
                {
                  className: ''.concat(i, '-selection-placeholder'),
                  style: V ? { visibility: 'hidden' } : void 0,
                },
                y,
              )
        },
        [se, V, y, i],
      )
    return l.createElement(
      l.Fragment,
      null,
      l.createElement(
        'span',
        { className: ''.concat(i, '-selection-search') },
        l.createElement(hi, {
          ref: f,
          prefixCls: i,
          id: c,
          open: p,
          inputElement: o,
          disabled: h,
          autoFocus: d,
          autoComplete: m,
          editable: ee,
          activeDescendantId: g,
          value: I,
          onKeyDown: E,
          onMouseDown: R,
          onChange: function (Z) {
            L(!0), q(Z)
          },
          onPaste: G,
          onCompositionStart: D,
          onCompositionEnd: N,
          tabIndex: _,
          attrs: Pn(r, !0),
          maxLength: P ? x : void 0,
        }),
      ),
      !P && se
        ? l.createElement(
            'span',
            {
              className: ''.concat(i, '-selection-item'),
              title: re,
              style: V ? { visibility: 'hidden' } : void 0,
            },
            se.label,
          )
        : null,
      z,
    )
  },
  gu = function (r, o) {
    var i = l.useRef(null),
      c = l.useRef(!1),
      f = r.prefixCls,
      h = r.open,
      d = r.mode,
      m = r.showSearch,
      g = r.tokenWithEnter,
      b = r.disabled,
      p = r.autoClearSearchValue,
      C = r.onSearch,
      y = r.onSearchSubmit,
      _ = r.onToggleOpen,
      w = r.onInputKeyDown,
      S = r.domRef
    l.useImperativeHandle(o, function () {
      return {
        focus: function (V) {
          i.current.focus(V)
        },
        blur: function () {
          i.current.blur()
        },
      }
    })
    var M = fi(0),
      x = ce(M, 2),
      E = x[0],
      R = x[1],
      q = function (V) {
        var re = V.which
        ;(re === Oe.UP || re === Oe.DOWN) && V.preventDefault(),
          w && w(V),
          re === Oe.ENTER &&
            d === 'tags' &&
            !c.current &&
            !h &&
            (y == null || y(V.target.value)),
          ou(re) && _(!0)
      },
      G = function () {
        R(!0)
      },
      D = l.useRef(null),
      N = function (V) {
        C(V, !0, c.current) !== !1 && _(!0)
      },
      W = function () {
        c.current = !0
      },
      Y = function (V) {
        ;(c.current = !1), d !== 'combobox' && N(V.target.value)
      },
      F = function (V) {
        var re = V.target.value
        if (g && D.current && /[\r\n]/.test(D.current)) {
          var z = D.current
            .replace(/[\r\n]+$/, '')
            .replace(/\r\n/g, ' ')
            .replace(/[\r\n]/g, ' ')
          re = re.replace(z, D.current)
        }
        ;(D.current = null), N(re)
      },
      T = function (V) {
        var re = V.clipboardData,
          z = re == null ? void 0 : re.getData('text')
        D.current = z || ''
      },
      L = function (V) {
        var re = V.target
        if (re !== i.current) {
          var z = document.body.style.msTouchAction !== void 0
          z
            ? setTimeout(function () {
                i.current.focus()
              })
            : i.current.focus()
        }
      },
      P = function (V) {
        var re = E()
        V.target !== i.current &&
          !re &&
          !(d === 'combobox' && b) &&
          V.preventDefault(),
          ((d !== 'combobox' && (!m || !re)) || !h) &&
            (h && p !== !1 && C('', !0, !1), _())
      },
      ee = {
        inputRef: i,
        onInputKeyDown: q,
        onInputMouseDown: G,
        onInputChange: F,
        onInputPaste: T,
        onInputCompositionStart: W,
        onInputCompositionEnd: Y,
      },
      se =
        d === 'multiple' || d === 'tags'
          ? l.createElement(mu, at({}, r, ee))
          : l.createElement(vu, at({}, r, ee))
    return l.createElement(
      'div',
      {
        ref: S,
        className: ''.concat(f, '-selector'),
        onClick: L,
        onMouseDown: P,
      },
      se,
    )
  },
  pu = l.forwardRef(gu),
  bu = [
    'prefixCls',
    'disabled',
    'visible',
    'children',
    'popupElement',
    'animation',
    'transitionName',
    'dropdownStyle',
    'dropdownClassName',
    'direction',
    'placement',
    'builtinPlacements',
    'dropdownMatchSelectWidth',
    'dropdownRender',
    'dropdownAlign',
    'getPopupContainer',
    'empty',
    'getTriggerDOMNode',
    'onPopupVisibleChange',
    'onPopupMouseEnter',
  ],
  yu = function (r) {
    var o = r === !0 ? 0 : 1
    return {
      bottomLeft: {
        points: ['tl', 'bl'],
        offset: [0, 4],
        overflow: { adjustX: o, adjustY: 1 },
        htmlRegion: 'scroll',
      },
      bottomRight: {
        points: ['tr', 'br'],
        offset: [0, 4],
        overflow: { adjustX: o, adjustY: 1 },
        htmlRegion: 'scroll',
      },
      topLeft: {
        points: ['bl', 'tl'],
        offset: [0, -4],
        overflow: { adjustX: o, adjustY: 1 },
        htmlRegion: 'scroll',
      },
      topRight: {
        points: ['br', 'tr'],
        offset: [0, -4],
        overflow: { adjustX: o, adjustY: 1 },
        htmlRegion: 'scroll',
      },
    }
  },
  Su = function (r, o) {
    var i = r.prefixCls
    r.disabled
    var c = r.visible,
      f = r.children,
      h = r.popupElement,
      d = r.animation,
      m = r.transitionName,
      g = r.dropdownStyle,
      b = r.dropdownClassName,
      p = r.direction,
      C = p === void 0 ? 'ltr' : p,
      y = r.placement,
      _ = r.builtinPlacements,
      w = r.dropdownMatchSelectWidth,
      S = r.dropdownRender,
      M = r.dropdownAlign,
      x = r.getPopupContainer,
      E = r.empty,
      R = r.getTriggerDOMNode,
      q = r.onPopupVisibleChange,
      G = r.onPopupMouseEnter,
      D = kt(r, bu),
      N = ''.concat(i, '-dropdown'),
      W = h
    S && (W = S(h))
    var Y = l.useMemo(
        function () {
          return _ || yu(w)
        },
        [_, w],
      ),
      F = d ? ''.concat(N, '-').concat(d) : m,
      T = typeof w == 'number',
      L = l.useMemo(
        function () {
          return T ? null : w === !1 ? 'minWidth' : 'width'
        },
        [w, T],
      ),
      P = g
    T && (P = _e(_e({}, P), {}, { width: w }))
    var ee = l.useRef(null)
    return (
      l.useImperativeHandle(o, function () {
        return {
          getPopupElement: function () {
            var I
            return (I = ee.current) === null || I === void 0
              ? void 0
              : I.popupElement
          },
        }
      }),
      l.createElement(
        ql,
        at({}, D, {
          showAction: q ? ['click'] : [],
          hideAction: q ? ['click'] : [],
          popupPlacement: y || (C === 'rtl' ? 'bottomRight' : 'bottomLeft'),
          builtinPlacements: Y,
          prefixCls: N,
          popupTransitionName: F,
          popup: l.createElement('div', { onMouseEnter: G }, W),
          ref: ee,
          stretch: L,
          popupAlign: M,
          popupVisible: c,
          getPopupContainer: x,
          popupClassName: ve(b, Ee({}, ''.concat(N, '-empty'), E)),
          popupStyle: P,
          getTriggerDOMNode: R,
          onPopupVisibleChange: q,
        }),
        f,
      )
    )
  },
  wu = l.forwardRef(Su)
function Ra(t, r) {
  var o = t.key,
    i
  return (
    'value' in t && (i = t.value),
    o ?? (i !== void 0 ? i : 'rc-index-key-'.concat(r))
  )
}
function zr(t) {
  return typeof t < 'u' && !Number.isNaN(t)
}
function gi(t, r) {
  var o = t || {},
    i = o.label,
    c = o.value,
    f = o.options,
    h = o.groupLabel,
    d = i || (r ? 'children' : 'label')
  return {
    label: d,
    value: c || 'value',
    options: f || 'options',
    groupLabel: h || d,
  }
}
function _u(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    o = r.fieldNames,
    i = r.childrenAsData,
    c = [],
    f = gi(o, !1),
    h = f.label,
    d = f.value,
    m = f.options,
    g = f.groupLabel
  function b(p, C) {
    Array.isArray(p) &&
      p.forEach(function (y) {
        if (C || !(m in y)) {
          var _ = y[d]
          c.push({
            key: Ra(y, c.length),
            groupOption: C,
            data: y,
            label: y[h],
            value: _,
          })
        } else {
          var w = y[g]
          w === void 0 && i && (w = y.label),
            c.push({ key: Ra(y, c.length), group: !0, data: y, label: w }),
            b(y[m], !0)
        }
      })
  }
  return b(t, !1), c
}
function Yr(t) {
  var r = _e({}, t)
  return (
    'props' in r ||
      Object.defineProperty(r, 'props', {
        get: function () {
          return (
            Xl(
              !1,
              'Return type is option instead of Option instance. Please read value directly instead of reading from `props`.',
            ),
            r
          )
        },
      }),
    r
  )
}
var Cu = function (r, o, i) {
    if (!o || !o.length) return null
    var c = !1,
      f = function d(m, g) {
        var b = Zl(g),
          p = b[0],
          C = b.slice(1)
        if (!p) return [m]
        var y = m.split(p)
        return (
          (c = c || y.length > 1),
          y
            .reduce(function (_, w) {
              return [].concat(Ot(_), Ot(d(w, C)))
            }, [])
            .filter(Boolean)
        )
      },
      h = f(r, o)
    return c ? (typeof i < 'u' ? h.slice(0, i) : h) : null
  },
  Ar = l.createContext(null)
function xu(t) {
  var r = t.visible,
    o = t.values
  if (!r) return null
  var i = 50
  return l.createElement(
    'span',
    {
      'aria-live': 'polite',
      style: {
        width: 0,
        height: 0,
        position: 'absolute',
        overflow: 'hidden',
        opacity: 0,
      },
    },
    ''.concat(
      o
        .slice(0, i)
        .map(function (c) {
          var f = c.label,
            h = c.value
          return ['number', 'string'].includes(Ft(f)) ? f : h
        })
        .join(', '),
    ),
    o.length > i ? ', ...' : null,
  )
}
var $u = [
    'id',
    'prefixCls',
    'className',
    'showSearch',
    'tagRender',
    'direction',
    'omitDomProps',
    'displayValues',
    'onDisplayValuesChange',
    'emptyOptions',
    'notFoundContent',
    'onClear',
    'mode',
    'disabled',
    'loading',
    'getInputElement',
    'getRawInputElement',
    'open',
    'defaultOpen',
    'onDropdownVisibleChange',
    'activeValue',
    'onActiveValueChange',
    'activeDescendantId',
    'searchValue',
    'autoClearSearchValue',
    'onSearch',
    'onSearchSplit',
    'tokenSeparators',
    'allowClear',
    'suffixIcon',
    'clearIcon',
    'OptionList',
    'animation',
    'transitionName',
    'dropdownStyle',
    'dropdownClassName',
    'dropdownMatchSelectWidth',
    'dropdownRender',
    'dropdownAlign',
    'placement',
    'builtinPlacements',
    'getPopupContainer',
    'showAction',
    'onFocus',
    'onBlur',
    'onKeyUp',
    'onKeyDown',
    'onMouseDown',
  ],
  Mu = [
    'value',
    'onChange',
    'removeIcon',
    'placeholder',
    'autoFocus',
    'maxTagCount',
    'maxTagTextLength',
    'maxTagPlaceholder',
    'choiceTransitionName',
    'onInputKeyDown',
    'onPopupScroll',
    'tabIndex',
  ],
  Hr = function (r) {
    return r === 'tags' || r === 'multiple'
  },
  Ou = l.forwardRef(function (t, r) {
    var o,
      i = t.id,
      c = t.prefixCls,
      f = t.className,
      h = t.showSearch,
      d = t.tagRender,
      m = t.direction,
      g = t.omitDomProps,
      b = t.displayValues,
      p = t.onDisplayValuesChange,
      C = t.emptyOptions,
      y = t.notFoundContent,
      _ = y === void 0 ? 'Not Found' : y,
      w = t.onClear,
      S = t.mode,
      M = t.disabled,
      x = t.loading,
      E = t.getInputElement,
      R = t.getRawInputElement,
      q = t.open,
      G = t.defaultOpen,
      D = t.onDropdownVisibleChange,
      N = t.activeValue,
      W = t.onActiveValueChange,
      Y = t.activeDescendantId,
      F = t.searchValue,
      T = t.autoClearSearchValue,
      L = t.onSearch,
      P = t.onSearchSplit,
      ee = t.tokenSeparators,
      se = t.allowClear,
      I = t.suffixIcon,
      V = t.clearIcon,
      re = t.OptionList,
      z = t.animation,
      Q = t.transitionName,
      Z = t.dropdownStyle,
      A = t.dropdownClassName,
      B = t.dropdownMatchSelectWidth,
      O = t.dropdownRender,
      ge = t.dropdownAlign,
      ie = t.placement,
      De = t.builtinPlacements,
      Pe = t.getPopupContainer,
      J = t.showAction,
      H = J === void 0 ? [] : J,
      ae = t.onFocus,
      be = t.onBlur,
      j = t.onKeyUp,
      de = t.onKeyDown,
      Ie = t.onMouseDown,
      Ye = kt(t, $u),
      ye = Hr(S),
      Ce = (h !== void 0 ? h : ye) || S === 'combobox',
      Be = _e({}, Ye)
    Mu.forEach(function (We) {
      delete Be[We]
    }),
      g == null ||
        g.forEach(function (We) {
          delete Be[We]
        })
    var ze = l.useState(!1),
      Xe = ce(ze, 2),
      Je = Xe[0],
      Ue = Xe[1]
    l.useEffect(function () {
      Ue(Ja())
    }, [])
    var ut = l.useRef(null),
      Se = l.useRef(null),
      qe = l.useRef(null),
      Le = l.useRef(null),
      Ge = l.useRef(null),
      xe = l.useRef(!1),
      mt = au(),
      vt = ce(mt, 3),
      Ke = vt[0],
      ot = vt[1],
      gt = vt[2]
    l.useImperativeHandle(r, function () {
      var We, Te
      return {
        focus: (We = Le.current) === null || We === void 0 ? void 0 : We.focus,
        blur: (Te = Le.current) === null || Te === void 0 ? void 0 : Te.blur,
        scrollTo: function (wt) {
          var ct
          return (ct = Ge.current) === null || ct === void 0
            ? void 0
            : ct.scrollTo(wt)
        },
        nativeElement: ut.current || Se.current,
      }
    })
    var Ze = l.useMemo(
        function () {
          var We
          if (S !== 'combobox') return F
          var Te = (We = b[0]) === null || We === void 0 ? void 0 : We.value
          return typeof Te == 'string' || typeof Te == 'number'
            ? String(Te)
            : ''
        },
        [F, S, b],
      ),
      it = (S === 'combobox' && typeof E == 'function' && E()) || null,
      dt = typeof R == 'function' && R(),
      Ct = ei(
        Se,
        dt == null || (o = dt.props) === null || o === void 0 ? void 0 : o.ref,
      ),
      zt = l.useState(!1),
      pt = ce(zt, 2),
      Et = pt[0],
      bt = pt[1]
    vn(function () {
      bt(!0)
    }, [])
    var yt = Rn(!1, { defaultValue: G, value: q }),
      K = ce(yt, 2),
      St = K[0],
      Lt = K[1],
      ke = Et ? St : !1,
      nt = !_ && C
    ;(M || (nt && ke && S === 'combobox')) && (ke = !1)
    var we = nt ? !1 : ke,
      ft = l.useCallback(
        function (We) {
          var Te = We !== void 0 ? We : !ke
          M || (Lt(Te), ke !== Te && (D == null || D(Te)))
        },
        [M, ke, Lt, D],
      ),
      X = l.useMemo(
        function () {
          return (ee || []).some(function (We) {
            return [
              `
`,
              `\r
`,
            ].includes(We)
          })
        },
        [ee],
      ),
      fe = l.useContext(Ar) || {},
      oe = fe.maxCount,
      ue = fe.rawValues,
      pe = function (Te, $t, wt) {
        if (!(ye && zr(oe) && (ue == null ? void 0 : ue.size) >= oe)) {
          var ct = !0,
            lt = Te
          W == null || W(null)
          var Dt = Cu(Te, ee, zr(oe) ? oe - ue.size : void 0),
            Tt = wt ? null : Dt
          return (
            S !== 'combobox' &&
              Tt &&
              ((lt = ''), P == null || P(Tt), ft(!1), (ct = !1)),
            L && Ze !== lt && L(lt, { source: $t ? 'typing' : 'effect' }),
            ct
          )
        }
      },
      Ne = function (Te) {
        !Te || !Te.trim() || L(Te, { source: 'submit' })
      }
    l.useEffect(
      function () {
        !ke && !ye && S !== 'combobox' && pe('', !1, !1)
      },
      [ke],
    ),
      l.useEffect(
        function () {
          St && M && Lt(!1), M && !xe.current && ot(!1)
        },
        [M],
      )
    var Qe = fi(),
      he = ce(Qe, 2),
      me = he[0],
      $e = he[1],
      Ae = l.useRef(!1),
      It = function (Te) {
        var $t = me(),
          wt = Te.key,
          ct = wt === 'Enter'
        if (
          (ct && (S !== 'combobox' && Te.preventDefault(), ke || ft(!0)),
          $e(!!Ze),
          wt === 'Backspace' && !$t && ye && !Ze && b.length)
        ) {
          for (
            var lt = Ot(b), Dt = null, Tt = lt.length - 1;
            Tt >= 0;
            Tt -= 1
          ) {
            var Pt = lt[Tt]
            if (!Pt.disabled) {
              lt.splice(Tt, 1), (Dt = Pt)
              break
            }
          }
          Dt && p(lt, { type: 'remove', values: [Dt] })
        }
        for (
          var Mt = arguments.length,
            jt = new Array(Mt > 1 ? Mt - 1 : 0),
            sn = 1;
          sn < Mt;
          sn++
        )
          jt[sn - 1] = arguments[sn]
        if (ke && (!ct || !Ae.current)) {
          var ln
          ;(ln = Ge.current) === null ||
            ln === void 0 ||
            ln.onKeyDown.apply(ln, [Te].concat(jt))
        }
        ct && (Ae.current = !0), de == null || de.apply(void 0, [Te].concat(jt))
      },
      ht = function (Te) {
        for (
          var $t = arguments.length,
            wt = new Array($t > 1 ? $t - 1 : 0),
            ct = 1;
          ct < $t;
          ct++
        )
          wt[ct - 1] = arguments[ct]
        if (ke) {
          var lt
          ;(lt = Ge.current) === null ||
            lt === void 0 ||
            lt.onKeyUp.apply(lt, [Te].concat(wt))
        }
        Te.key === 'Enter' && (Ae.current = !1),
          j == null || j.apply(void 0, [Te].concat(wt))
      },
      xt = function (Te) {
        var $t = b.filter(function (wt) {
          return wt !== Te
        })
        p($t, { type: 'remove', values: [Te] })
      },
      le = l.useRef(!1),
      ne = function () {
        ot(!0),
          M ||
            (ae && !le.current && ae.apply(void 0, arguments),
            H.includes('focus') && ft(!0)),
          (le.current = !0)
      },
      Me = function () {
        ;(xe.current = !0),
          ot(!1, function () {
            ;(le.current = !1), (xe.current = !1), ft(!1)
          }),
          !M &&
            (Ze &&
              (S === 'tags'
                ? L(Ze, { source: 'submit' })
                : S === 'multiple' && L('', { source: 'blur' })),
            be && be.apply(void 0, arguments))
      },
      He = []
    l.useEffect(function () {
      return function () {
        He.forEach(function (We) {
          return clearTimeout(We)
        }),
          He.splice(0, He.length)
      }
    }, [])
    var st = function (Te) {
        var $t,
          wt = Te.target,
          ct =
            ($t = qe.current) === null || $t === void 0
              ? void 0
              : $t.getPopupElement()
        if (ct && ct.contains(wt)) {
          var lt = setTimeout(function () {
            var Mt = He.indexOf(lt)
            if (
              (Mt !== -1 && He.splice(Mt, 1),
              gt(),
              !Je && !ct.contains(document.activeElement))
            ) {
              var jt
              ;(jt = Le.current) === null || jt === void 0 || jt.focus()
            }
          })
          He.push(lt)
        }
        for (
          var Dt = arguments.length,
            Tt = new Array(Dt > 1 ? Dt - 1 : 0),
            Pt = 1;
          Pt < Dt;
          Pt++
        )
          Tt[Pt - 1] = arguments[Pt]
        Ie == null || Ie.apply(void 0, [Te].concat(Tt))
      },
      qt = l.useState({}),
      Yt = ce(qt, 2),
      _n = Yt[1]
    function et() {
      _n({})
    }
    var At
    dt &&
      (At = function (Te) {
        ft(Te)
      }),
      iu(
        function () {
          var We
          return [
            ut.current,
            (We = qe.current) === null || We === void 0
              ? void 0
              : We.getPopupElement(),
          ]
        },
        we,
        ft,
        !!dt,
      )
    var Jt = l.useMemo(
        function () {
          return _e(
            _e({}, t),
            {},
            {
              notFoundContent: _,
              open: ke,
              triggerOpen: we,
              id: i,
              showSearch: Ce,
              multiple: ye,
              toggleOpen: ft,
            },
          )
        },
        [t, _, we, ke, i, Ce, ye, ft],
      ),
      Cn = !!I || x,
      xn
    Cn &&
      (xn = l.createElement(ar, {
        className: ve(
          ''.concat(c, '-arrow'),
          Ee({}, ''.concat(c, '-arrow-loading'), x),
        ),
        customizeIcon: I,
        customizeIconProps: {
          loading: x,
          searchValue: Ze,
          open: ke,
          focused: Ke,
          showSearch: Ce,
        },
      }))
    var or = function () {
        var Te
        w == null || w(),
          (Te = Le.current) === null || Te === void 0 || Te.focus(),
          p([], { type: 'clear', values: b }),
          pe('', !1, !1)
      },
      Hn = nu(c, or, b, se, V, M, Ze, S),
      sr = Hn.allowClear,
      lr = Hn.clearIcon,
      cr = l.createElement(re, { ref: Ge }),
      ur = ve(
        c,
        f,
        Ee(
          Ee(
            Ee(
              Ee(
                Ee(
                  Ee(
                    Ee(
                      Ee(
                        Ee(
                          Ee({}, ''.concat(c, '-focused'), Ke),
                          ''.concat(c, '-multiple'),
                          ye,
                        ),
                        ''.concat(c, '-single'),
                        !ye,
                      ),
                      ''.concat(c, '-allow-clear'),
                      se,
                    ),
                    ''.concat(c, '-show-arrow'),
                    Cn,
                  ),
                  ''.concat(c, '-disabled'),
                  M,
                ),
                ''.concat(c, '-loading'),
                x,
              ),
              ''.concat(c, '-open'),
              ke,
            ),
            ''.concat(c, '-customize-input'),
            it,
          ),
          ''.concat(c, '-show-search'),
          Ce,
        ),
      ),
      $n = l.createElement(
        wu,
        {
          ref: qe,
          disabled: M,
          prefixCls: c,
          visible: we,
          popupElement: cr,
          animation: z,
          transitionName: Q,
          dropdownStyle: Z,
          dropdownClassName: A,
          direction: m,
          dropdownMatchSelectWidth: B,
          dropdownRender: O,
          dropdownAlign: ge,
          placement: ie,
          builtinPlacements: De,
          getPopupContainer: Pe,
          empty: C,
          getTriggerDOMNode: function (Te) {
            return Se.current || Te
          },
          onPopupVisibleChange: At,
          onPopupMouseEnter: et,
        },
        dt
          ? l.cloneElement(dt, { ref: Ct })
          : l.createElement(
              pu,
              at({}, t, {
                domRef: Se,
                prefixCls: c,
                inputElement: it,
                ref: Le,
                id: i,
                showSearch: Ce,
                autoClearSearchValue: T,
                mode: S,
                activeDescendantId: Y,
                tagRender: d,
                values: b,
                open: ke,
                onToggleOpen: ft,
                activeValue: N,
                searchValue: Ze,
                onSearch: pe,
                onSearchSubmit: Ne,
                onRemove: xt,
                tokenWithEnter: X,
              }),
            ),
      ),
      on
    return (
      dt
        ? (on = $n)
        : (on = l.createElement(
            'div',
            at({ className: ur }, Be, {
              ref: ut,
              onMouseDown: st,
              onKeyDown: It,
              onKeyUp: ht,
              onFocus: ne,
              onBlur: Me,
            }),
            l.createElement(xu, { visible: Ke && !ke, values: b }),
            $n,
            xn,
            sr && lr,
          )),
      l.createElement(di.Provider, { value: Jt }, on)
    )
  }),
  jr = function () {
    return null
  }
jr.isSelectOptGroup = !0
var Br = function () {
  return null
}
Br.isSelectOption = !0
var pi = l.forwardRef(function (t, r) {
  var o = t.height,
    i = t.offsetY,
    c = t.offsetX,
    f = t.children,
    h = t.prefixCls,
    d = t.onInnerResize,
    m = t.innerProps,
    g = t.rtl,
    b = t.extra,
    p = {},
    C = { display: 'flex', flexDirection: 'column' }
  return (
    i !== void 0 &&
      ((p = { height: o, position: 'relative', overflow: 'hidden' }),
      (C = _e(
        _e({}, C),
        {},
        Ee(
          Ee(
            Ee(
              Ee(
                Ee(
                  { transform: 'translateY('.concat(i, 'px)') },
                  g ? 'marginRight' : 'marginLeft',
                  -c,
                ),
                'position',
                'absolute',
              ),
              'left',
              0,
            ),
            'right',
            0,
          ),
          'top',
          0,
        ),
      ))),
    l.createElement(
      'div',
      { style: p },
      l.createElement(
        In,
        {
          onResize: function (_) {
            var w = _.offsetHeight
            w && d && d()
          },
        },
        l.createElement(
          'div',
          at(
            {
              style: C,
              className: ve(Ee({}, ''.concat(h, '-holder-inner'), h)),
              ref: r,
            },
            m,
          ),
          f,
          b,
        ),
      ),
    )
  )
})
pi.displayName = 'Filler'
function Eu(t) {
  var r = t.children,
    o = t.setRef,
    i = l.useCallback(function (c) {
      o(c)
    }, [])
  return l.cloneElement(r, { ref: i })
}
function Iu(t, r, o, i, c, f, h, d) {
  var m = d.getKey
  return t.slice(r, o + 1).map(function (g, b) {
    var p = r + b,
      C = h(g, p, { style: { width: i }, offsetX: c }),
      y = m(g)
    return l.createElement(
      Eu,
      {
        key: y,
        setRef: function (w) {
          return f(g, w)
        },
      },
      C,
    )
  })
}
function Ru(t, r, o) {
  var i = t.length,
    c = r.length,
    f,
    h
  if (i === 0 && c === 0) return null
  i < c ? ((f = t), (h = r)) : ((f = r), (h = t))
  var d = { __EMPTY_ITEM__: !0 }
  function m(_) {
    return _ !== void 0 ? o(_) : d
  }
  for (var g = null, b = Math.abs(i - c) !== 1, p = 0; p < h.length; p += 1) {
    var C = m(f[p]),
      y = m(h[p])
    if (C !== y) {
      ;(g = p), (b = b || C !== m(h[p + 1]))
      break
    }
  }
  return g === null ? null : { index: g, multiple: b }
}
function Du(t, r, o) {
  var i = l.useState(t),
    c = ce(i, 2),
    f = c[0],
    h = c[1],
    d = l.useState(null),
    m = ce(d, 2),
    g = m[0],
    b = m[1]
  return (
    l.useEffect(
      function () {
        var p = Ru(f || [], t || [], r)
        ;(p == null ? void 0 : p.index) !== void 0 && b(t[p.index]), h(t)
      },
      [t],
    ),
    [g]
  )
}
var Da =
  (typeof navigator > 'u' ? 'undefined' : Ft(navigator)) === 'object' &&
  /Firefox/i.test(navigator.userAgent)
const bi = function (t, r, o, i) {
  var c = l.useRef(!1),
    f = l.useRef(null)
  function h() {
    clearTimeout(f.current),
      (c.current = !0),
      (f.current = setTimeout(function () {
        c.current = !1
      }, 50))
  }
  var d = l.useRef({ top: t, bottom: r, left: o, right: i })
  return (
    (d.current.top = t),
    (d.current.bottom = r),
    (d.current.left = o),
    (d.current.right = i),
    function (m, g) {
      var b =
          arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
        p = m
          ? (g < 0 && d.current.left) || (g > 0 && d.current.right)
          : (g < 0 && d.current.top) || (g > 0 && d.current.bottom)
      return (
        b && p
          ? (clearTimeout(f.current), (c.current = !1))
          : (!p || c.current) && h(),
        !c.current && p
      )
    }
  )
}
function Tu(t, r, o, i, c, f, h) {
  var d = l.useRef(0),
    m = l.useRef(null),
    g = l.useRef(null),
    b = l.useRef(!1),
    p = bi(r, o, i, c)
  function C(x, E) {
    if ((Nt.cancel(m.current), !p(!1, E))) {
      var R = x
      if (!R._virtualHandled) R._virtualHandled = !0
      else return
      ;(d.current += E),
        (g.current = E),
        Da || R.preventDefault(),
        (m.current = Nt(function () {
          var q = b.current ? 10 : 1
          h(d.current * q, !1), (d.current = 0)
        }))
    }
  }
  function y(x, E) {
    h(E, !0), Da || x.preventDefault()
  }
  var _ = l.useRef(null),
    w = l.useRef(null)
  function S(x) {
    if (t) {
      Nt.cancel(w.current),
        (w.current = Nt(function () {
          _.current = null
        }, 2))
      var E = x.deltaX,
        R = x.deltaY,
        q = x.shiftKey,
        G = E,
        D = R
      ;(_.current === 'sx' || (!_.current && q && R && !E)) &&
        ((G = R), (D = 0), (_.current = 'sx'))
      var N = Math.abs(G),
        W = Math.abs(D)
      _.current === null && (_.current = f && N > W ? 'x' : 'y'),
        _.current === 'y' ? C(x, D) : y(x, G)
    }
  }
  function M(x) {
    t && (b.current = x.detail === g.current)
  }
  return [S, M]
}
function Pu(t, r, o, i) {
  var c = l.useMemo(
      function () {
        return [new Map(), []]
      },
      [t, o.id, i],
    ),
    f = ce(c, 2),
    h = f[0],
    d = f[1],
    m = function (b) {
      var p =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b,
        C = h.get(b),
        y = h.get(p)
      if (C === void 0 || y === void 0)
        for (var _ = t.length, w = d.length; w < _; w += 1) {
          var S,
            M = t[w],
            x = r(M)
          h.set(x, w)
          var E = (S = o.get(x)) !== null && S !== void 0 ? S : i
          if (
            ((d[w] = (d[w - 1] || 0) + E),
            x === b && (C = w),
            x === p && (y = w),
            C !== void 0 && y !== void 0)
          )
            break
        }
      return { top: d[C - 1] || 0, bottom: d[y] }
    }
  return m
}
var Nu = (function () {
  function t() {
    Jl(this, t),
      Ee(this, 'maps', void 0),
      Ee(this, 'id', 0),
      (this.maps = Object.create(null))
  }
  return (
    Ql(t, [
      {
        key: 'set',
        value: function (o, i) {
          ;(this.maps[o] = i), (this.id += 1)
        },
      },
      {
        key: 'get',
        value: function (o) {
          return this.maps[o]
        },
      },
    ]),
    t
  )
})()
function Lu(t, r, o) {
  var i = l.useState(0),
    c = ce(i, 2),
    f = c[0],
    h = c[1],
    d = l.useRef(new Map()),
    m = l.useRef(new Nu()),
    g = l.useRef()
  function b() {
    Nt.cancel(g.current)
  }
  function p() {
    var y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
    b()
    var _ = function () {
      d.current.forEach(function (S, M) {
        if (S && S.offsetParent) {
          var x = ec(S),
            E = x.offsetHeight
          m.current.get(M) !== E && m.current.set(M, x.offsetHeight)
        }
      }),
        h(function (S) {
          return S + 1
        })
    }
    y ? _() : (g.current = Nt(_))
  }
  function C(y, _) {
    var w = t(y)
    d.current.get(w), _ ? (d.current.set(w, _), p()) : d.current.delete(w)
  }
  return (
    l.useEffect(function () {
      return b
    }, []),
    [C, p, m.current, f]
  )
}
var Ta = 14 / 15
function zu(t, r, o) {
  var i = l.useRef(!1),
    c = l.useRef(0),
    f = l.useRef(0),
    h = l.useRef(null),
    d = l.useRef(null),
    m,
    g = function (y) {
      if (i.current) {
        var _ = Math.ceil(y.touches[0].pageX),
          w = Math.ceil(y.touches[0].pageY),
          S = c.current - _,
          M = f.current - w,
          x = Math.abs(S) > Math.abs(M)
        x ? (c.current = _) : (f.current = w)
        var E = o(x, x ? S : M, !1, y)
        E && y.preventDefault(),
          clearInterval(d.current),
          E &&
            (d.current = setInterval(function () {
              x ? (S *= Ta) : (M *= Ta)
              var R = Math.floor(x ? S : M)
              ;(!o(x, R, !0) || Math.abs(R) <= 0.1) && clearInterval(d.current)
            }, 16))
      }
    },
    b = function () {
      ;(i.current = !1), m()
    },
    p = function (y) {
      m(),
        y.touches.length === 1 &&
          !i.current &&
          ((i.current = !0),
          (c.current = Math.ceil(y.touches[0].pageX)),
          (f.current = Math.ceil(y.touches[0].pageY)),
          (h.current = y.target),
          h.current.addEventListener('touchmove', g, { passive: !1 }),
          h.current.addEventListener('touchend', b, { passive: !0 }))
    }
  ;(m = function () {
    h.current &&
      (h.current.removeEventListener('touchmove', g),
      h.current.removeEventListener('touchend', b))
  }),
    vn(
      function () {
        return (
          t && r.current.addEventListener('touchstart', p, { passive: !0 }),
          function () {
            var C
            ;(C = r.current) === null ||
              C === void 0 ||
              C.removeEventListener('touchstart', p),
              m(),
              clearInterval(d.current)
          }
        )
      },
      [t],
    )
}
var Yu = 10
function Hu(t, r, o, i, c, f, h, d) {
  var m = l.useRef(),
    g = l.useState(null),
    b = ce(g, 2),
    p = b[0],
    C = b[1]
  return (
    vn(
      function () {
        if (p && p.times < Yu) {
          if (!t.current) {
            C(function (re) {
              return _e({}, re)
            })
            return
          }
          f()
          var y = p.targetAlign,
            _ = p.originAlign,
            w = p.index,
            S = p.offset,
            M = t.current.clientHeight,
            x = !1,
            E = y,
            R = null
          if (M) {
            for (
              var q = y || _,
                G = 0,
                D = 0,
                N = 0,
                W = Math.min(r.length - 1, w),
                Y = 0;
              Y <= W;
              Y += 1
            ) {
              var F = c(r[Y])
              D = G
              var T = o.get(F)
              ;(N = D + (T === void 0 ? i : T)), (G = N)
            }
            for (var L = q === 'top' ? S : M - S, P = W; P >= 0; P -= 1) {
              var ee = c(r[P]),
                se = o.get(ee)
              if (se === void 0) {
                x = !0
                break
              }
              if (((L -= se), L <= 0)) break
            }
            switch (q) {
              case 'top':
                R = D - S
                break
              case 'bottom':
                R = N - M + S
                break
              default: {
                var I = t.current.scrollTop,
                  V = I + M
                D < I ? (E = 'top') : N > V && (E = 'bottom')
              }
            }
            R !== null && h(R), R !== p.lastTop && (x = !0)
          }
          x &&
            C(
              _e(
                _e({}, p),
                {},
                { times: p.times + 1, targetAlign: E, lastTop: R },
              ),
            )
        }
      },
      [p, t.current],
    ),
    function (y) {
      if (y == null) {
        d()
        return
      }
      if ((Nt.cancel(m.current), typeof y == 'number')) h(y)
      else if (y && Ft(y) === 'object') {
        var _,
          w = y.align
        'index' in y
          ? (_ = y.index)
          : (_ = r.findIndex(function (x) {
              return c(x) === y.key
            }))
        var S = y.offset,
          M = S === void 0 ? 0 : S
        C({ times: 0, index: _, offset: M, originAlign: w })
      }
    }
  )
}
function Pa(t, r) {
  var o = 'touches' in t ? t.touches[0] : t
  return o[r ? 'pageX' : 'pageY']
}
var Na = l.forwardRef(function (t, r) {
    var o = t.prefixCls,
      i = t.rtl,
      c = t.scrollOffset,
      f = t.scrollRange,
      h = t.onStartMove,
      d = t.onStopMove,
      m = t.onScroll,
      g = t.horizontal,
      b = t.spinSize,
      p = t.containerSize,
      C = t.style,
      y = t.thumbStyle,
      _ = l.useState(!1),
      w = ce(_, 2),
      S = w[0],
      M = w[1],
      x = l.useState(null),
      E = ce(x, 2),
      R = E[0],
      q = E[1],
      G = l.useState(null),
      D = ce(G, 2),
      N = D[0],
      W = D[1],
      Y = !i,
      F = l.useRef(),
      T = l.useRef(),
      L = l.useState(!1),
      P = ce(L, 2),
      ee = P[0],
      se = P[1],
      I = l.useRef(),
      V = function () {
        clearTimeout(I.current),
          se(!0),
          (I.current = setTimeout(function () {
            se(!1)
          }, 3e3))
      },
      re = f - p || 0,
      z = p - b || 0,
      Q = l.useMemo(
        function () {
          if (c === 0 || re === 0) return 0
          var J = c / re
          return J * z
        },
        [c, re, z],
      ),
      Z = function (H) {
        H.stopPropagation(), H.preventDefault()
      },
      A = l.useRef({ top: Q, dragging: S, pageY: R, startTop: N })
    A.current = { top: Q, dragging: S, pageY: R, startTop: N }
    var B = function (H) {
      M(!0),
        q(Pa(H, g)),
        W(A.current.top),
        h(),
        H.stopPropagation(),
        H.preventDefault()
    }
    l.useEffect(function () {
      var J = function (j) {
          j.preventDefault()
        },
        H = F.current,
        ae = T.current
      return (
        H.addEventListener('touchstart', J, { passive: !1 }),
        ae.addEventListener('touchstart', B, { passive: !1 }),
        function () {
          H.removeEventListener('touchstart', J),
            ae.removeEventListener('touchstart', B)
        }
      )
    }, [])
    var O = l.useRef()
    O.current = re
    var ge = l.useRef()
    ;(ge.current = z),
      l.useEffect(
        function () {
          if (S) {
            var J,
              H = function (j) {
                var de = A.current,
                  Ie = de.dragging,
                  Ye = de.pageY,
                  ye = de.startTop
                Nt.cancel(J)
                var Ce = F.current.getBoundingClientRect(),
                  Be = p / (g ? Ce.width : Ce.height)
                if (Ie) {
                  var ze = (Pa(j, g) - Ye) * Be,
                    Xe = ye
                  !Y && g ? (Xe -= ze) : (Xe += ze)
                  var Je = O.current,
                    Ue = ge.current,
                    ut = Ue ? Xe / Ue : 0,
                    Se = Math.ceil(ut * Je)
                  ;(Se = Math.max(Se, 0)),
                    (Se = Math.min(Se, Je)),
                    (J = Nt(function () {
                      m(Se, g)
                    }))
                }
              },
              ae = function () {
                M(!1), d()
              }
            return (
              window.addEventListener('mousemove', H, { passive: !0 }),
              window.addEventListener('touchmove', H, { passive: !0 }),
              window.addEventListener('mouseup', ae, { passive: !0 }),
              window.addEventListener('touchend', ae, { passive: !0 }),
              function () {
                window.removeEventListener('mousemove', H),
                  window.removeEventListener('touchmove', H),
                  window.removeEventListener('mouseup', ae),
                  window.removeEventListener('touchend', ae),
                  Nt.cancel(J)
              }
            )
          }
        },
        [S],
      ),
      l.useEffect(
        function () {
          return (
            V(),
            function () {
              clearTimeout(I.current)
            }
          )
        },
        [c],
      ),
      l.useImperativeHandle(r, function () {
        return { delayHidden: V }
      })
    var ie = ''.concat(o, '-scrollbar'),
      De = { position: 'absolute', visibility: ee ? null : 'hidden' },
      Pe = {
        position: 'absolute',
        background: 'rgba(0, 0, 0, 0.5)',
        borderRadius: 99,
        cursor: 'pointer',
        userSelect: 'none',
      }
    return (
      g
        ? ((De.height = 8),
          (De.left = 0),
          (De.right = 0),
          (De.bottom = 0),
          (Pe.height = '100%'),
          (Pe.width = b),
          Y ? (Pe.left = Q) : (Pe.right = Q))
        : ((De.width = 8),
          (De.top = 0),
          (De.bottom = 0),
          Y ? (De.right = 0) : (De.left = 0),
          (Pe.width = '100%'),
          (Pe.height = b),
          (Pe.top = Q)),
      l.createElement(
        'div',
        {
          ref: F,
          className: ve(
            ie,
            Ee(
              Ee(
                Ee({}, ''.concat(ie, '-horizontal'), g),
                ''.concat(ie, '-vertical'),
                !g,
              ),
              ''.concat(ie, '-visible'),
              ee,
            ),
          ),
          style: _e(_e({}, De), C),
          onMouseDown: Z,
          onMouseMove: V,
        },
        l.createElement('div', {
          ref: T,
          className: ve(
            ''.concat(ie, '-thumb'),
            Ee({}, ''.concat(ie, '-thumb-moving'), S),
          ),
          style: _e(_e({}, Pe), y),
          onMouseDown: B,
        }),
      )
    )
  }),
  ku = 20
function La() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0,
    r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    o = (t / r) * t
  return isNaN(o) && (o = 0), (o = Math.max(o, ku)), Math.floor(o)
}
var Wu = [
    'prefixCls',
    'className',
    'height',
    'itemHeight',
    'fullHeight',
    'style',
    'data',
    'children',
    'itemKey',
    'virtual',
    'direction',
    'scrollWidth',
    'component',
    'onScroll',
    'onVirtualScroll',
    'onVisibleChange',
    'innerProps',
    'extraRender',
    'styles',
  ],
  Fu = [],
  Au = { overflowY: 'auto', overflowAnchor: 'none' }
function ju(t, r) {
  var o = t.prefixCls,
    i = o === void 0 ? 'rc-virtual-list' : o,
    c = t.className,
    f = t.height,
    h = t.itemHeight,
    d = t.fullHeight,
    m = d === void 0 ? !0 : d,
    g = t.style,
    b = t.data,
    p = t.children,
    C = t.itemKey,
    y = t.virtual,
    _ = t.direction,
    w = t.scrollWidth,
    S = t.component,
    M = S === void 0 ? 'div' : S,
    x = t.onScroll,
    E = t.onVirtualScroll,
    R = t.onVisibleChange,
    q = t.innerProps,
    G = t.extraRender,
    D = t.styles,
    N = kt(t, Wu),
    W = l.useCallback(
      function (le) {
        return typeof C == 'function' ? C(le) : le == null ? void 0 : le[C]
      },
      [C],
    ),
    Y = Lu(W),
    F = ce(Y, 4),
    T = F[0],
    L = F[1],
    P = F[2],
    ee = F[3],
    se = !!(y !== !1 && f && h),
    I = l.useMemo(
      function () {
        return Object.values(P.maps).reduce(function (le, ne) {
          return le + ne
        }, 0)
      },
      [P.id, P.maps],
    ),
    V = se && b && (Math.max(h * b.length, I) > f || !!w),
    re = _ === 'rtl',
    z = ve(i, Ee({}, ''.concat(i, '-rtl'), re), c),
    Q = b || Fu,
    Z = l.useRef(),
    A = l.useRef(),
    B = l.useRef(),
    O = l.useState(0),
    ge = ce(O, 2),
    ie = ge[0],
    De = ge[1],
    Pe = l.useState(0),
    J = ce(Pe, 2),
    H = J[0],
    ae = J[1],
    be = l.useState(!1),
    j = ce(be, 2),
    de = j[0],
    Ie = j[1],
    Ye = function () {
      Ie(!0)
    },
    ye = function () {
      Ie(!1)
    },
    Ce = { getKey: W }
  function Be(le) {
    De(function (ne) {
      var Me
      typeof le == 'function' ? (Me = le(ne)) : (Me = le)
      var He = Et(Me)
      return (Z.current.scrollTop = He), He
    })
  }
  var ze = l.useRef({ start: 0, end: Q.length }),
    Xe = l.useRef(),
    Je = Du(Q, W),
    Ue = ce(Je, 1),
    ut = Ue[0]
  Xe.current = ut
  var Se = l.useMemo(
      function () {
        if (!se)
          return {
            scrollHeight: void 0,
            start: 0,
            end: Q.length - 1,
            offset: void 0,
          }
        if (!V) {
          var le
          return {
            scrollHeight:
              ((le = A.current) === null || le === void 0
                ? void 0
                : le.offsetHeight) || 0,
            start: 0,
            end: Q.length - 1,
            offset: void 0,
          }
        }
        for (var ne = 0, Me, He, st, qt = Q.length, Yt = 0; Yt < qt; Yt += 1) {
          var _n = Q[Yt],
            et = W(_n),
            At = P.get(et),
            Jt = ne + (At === void 0 ? h : At)
          Jt >= ie && Me === void 0 && ((Me = Yt), (He = ne)),
            Jt > ie + f && st === void 0 && (st = Yt),
            (ne = Jt)
        }
        return (
          Me === void 0 && ((Me = 0), (He = 0), (st = Math.ceil(f / h))),
          st === void 0 && (st = Q.length - 1),
          (st = Math.min(st + 1, Q.length - 1)),
          { scrollHeight: ne, start: Me, end: st, offset: He }
        )
      },
      [V, se, ie, Q, ee, f],
    ),
    qe = Se.scrollHeight,
    Le = Se.start,
    Ge = Se.end,
    xe = Se.offset
  ;(ze.current.start = Le), (ze.current.end = Ge)
  var mt = l.useState({ width: 0, height: f }),
    vt = ce(mt, 2),
    Ke = vt[0],
    ot = vt[1],
    gt = function (ne) {
      ot({ width: ne.offsetWidth, height: ne.offsetHeight })
    },
    Ze = l.useRef(),
    it = l.useRef(),
    dt = l.useMemo(
      function () {
        return La(Ke.width, w)
      },
      [Ke.width, w],
    ),
    Ct = l.useMemo(
      function () {
        return La(Ke.height, qe)
      },
      [Ke.height, qe],
    ),
    zt = qe - f,
    pt = l.useRef(zt)
  pt.current = zt
  function Et(le) {
    var ne = le
    return (
      Number.isNaN(pt.current) || (ne = Math.min(ne, pt.current)),
      (ne = Math.max(ne, 0)),
      ne
    )
  }
  var bt = ie <= 0,
    yt = ie >= zt,
    K = H <= 0,
    St = H >= w,
    Lt = bi(bt, yt, K, St),
    ke = function () {
      return { x: re ? -H : H, y: ie }
    },
    nt = l.useRef(ke()),
    we = Dn(function (le) {
      if (E) {
        var ne = _e(_e({}, ke()), le)
        ;(nt.current.x !== ne.x || nt.current.y !== ne.y) &&
          (E(ne), (nt.current = ne))
      }
    })
  function ft(le, ne) {
    var Me = le
    ne
      ? (Ca.flushSync(function () {
          ae(Me)
        }),
        we())
      : Be(Me)
  }
  function X(le) {
    var ne = le.currentTarget.scrollTop
    ne !== ie && Be(ne), x == null || x(le), we()
  }
  var fe = function (ne) {
      var Me = ne,
        He = w ? w - Ke.width : 0
      return (Me = Math.max(Me, 0)), (Me = Math.min(Me, He)), Me
    },
    oe = Dn(function (le, ne) {
      ne
        ? (Ca.flushSync(function () {
            ae(function (Me) {
              var He = Me + (re ? -le : le)
              return fe(He)
            })
          }),
          we())
        : Be(function (Me) {
            var He = Me + le
            return He
          })
    }),
    ue = Tu(se, bt, yt, K, St, !!w, oe),
    pe = ce(ue, 2),
    Ne = pe[0],
    Qe = pe[1]
  zu(se, Z, function (le, ne, Me, He) {
    var st = He
    return Lt(le, ne, Me)
      ? !1
      : !st || !st._virtualHandled
        ? (st && (st._virtualHandled = !0),
          Ne({
            preventDefault: function () {},
            deltaX: le ? ne : 0,
            deltaY: le ? 0 : ne,
          }),
          !0)
        : !1
  }),
    vn(
      function () {
        function le(Me) {
          var He = bt && Me.detail < 0,
            st = yt && Me.detail > 0
          se && !He && !st && Me.preventDefault()
        }
        var ne = Z.current
        return (
          ne.addEventListener('wheel', Ne, { passive: !1 }),
          ne.addEventListener('DOMMouseScroll', Qe, { passive: !0 }),
          ne.addEventListener('MozMousePixelScroll', le, { passive: !1 }),
          function () {
            ne.removeEventListener('wheel', Ne),
              ne.removeEventListener('DOMMouseScroll', Qe),
              ne.removeEventListener('MozMousePixelScroll', le)
          }
        )
      },
      [se, bt, yt],
    ),
    vn(
      function () {
        if (w) {
          var le = fe(H)
          ae(le), we({ x: le })
        }
      },
      [Ke.width, w],
    )
  var he = function () {
      var ne, Me
      ;(ne = Ze.current) === null || ne === void 0 || ne.delayHidden(),
        (Me = it.current) === null || Me === void 0 || Me.delayHidden()
    },
    me = Hu(
      Z,
      Q,
      P,
      h,
      W,
      function () {
        return L(!0)
      },
      Be,
      he,
    )
  l.useImperativeHandle(r, function () {
    return {
      nativeElement: B.current,
      getScrollInfo: ke,
      scrollTo: function (ne) {
        function Me(He) {
          return He && Ft(He) === 'object' && ('left' in He || 'top' in He)
        }
        Me(ne) ? (ne.left !== void 0 && ae(fe(ne.left)), me(ne.top)) : me(ne)
      },
    }
  }),
    vn(
      function () {
        if (R) {
          var le = Q.slice(Le, Ge + 1)
          R(le, Q)
        }
      },
      [Le, Ge, Q],
    )
  var $e = Pu(Q, W, P, h),
    Ae =
      G == null
        ? void 0
        : G({
            start: Le,
            end: Ge,
            virtual: V,
            offsetX: H,
            offsetY: xe,
            rtl: re,
            getSize: $e,
          }),
    It = Iu(Q, Le, Ge, w, H, T, p, Ce),
    ht = null
  f &&
    ((ht = _e(Ee({}, m ? 'height' : 'maxHeight', f), Au)),
    se &&
      ((ht.overflowY = 'hidden'),
      w && (ht.overflowX = 'hidden'),
      de && (ht.pointerEvents = 'none')))
  var xt = {}
  return (
    re && (xt.dir = 'rtl'),
    l.createElement(
      'div',
      at(
        {
          ref: B,
          style: _e(_e({}, g), {}, { position: 'relative' }),
          className: z,
        },
        xt,
        N,
      ),
      l.createElement(
        In,
        { onResize: gt },
        l.createElement(
          M,
          {
            className: ''.concat(i, '-holder'),
            style: ht,
            ref: Z,
            onScroll: X,
            onMouseEnter: he,
          },
          l.createElement(
            pi,
            {
              prefixCls: i,
              height: qe,
              offsetX: H,
              offsetY: xe,
              scrollWidth: w,
              onInnerResize: L,
              ref: A,
              innerProps: q,
              rtl: re,
              extra: Ae,
            },
            It,
          ),
        ),
      ),
      V &&
        qe > f &&
        l.createElement(Na, {
          ref: Ze,
          prefixCls: i,
          scrollOffset: ie,
          scrollRange: qe,
          rtl: re,
          onScroll: ft,
          onStartMove: Ye,
          onStopMove: ye,
          spinSize: Ct,
          containerSize: Ke.height,
          style: D == null ? void 0 : D.verticalScrollBar,
          thumbStyle: D == null ? void 0 : D.verticalScrollBarThumb,
        }),
      V &&
        w > Ke.width &&
        l.createElement(Na, {
          ref: it,
          prefixCls: i,
          scrollOffset: H,
          scrollRange: w,
          rtl: re,
          onScroll: ft,
          onStartMove: Ye,
          onStopMove: ye,
          spinSize: dt,
          containerSize: Ke.width,
          horizontal: !0,
          style: D == null ? void 0 : D.horizontalScrollBar,
          thumbStyle: D == null ? void 0 : D.horizontalScrollBarThumb,
        }),
    )
  )
}
var yi = l.forwardRef(ju)
yi.displayName = 'List'
function Bu() {
  return /(mac\sos|macintosh)/i.test(navigator.appVersion)
}
var Vu = ['disabled', 'title', 'children', 'style', 'className']
function za(t) {
  return typeof t == 'string' || typeof t == 'number'
}
var Uu = function (r, o) {
    var i = ru(),
      c = i.prefixCls,
      f = i.id,
      h = i.open,
      d = i.multiple,
      m = i.mode,
      g = i.searchValue,
      b = i.toggleOpen,
      p = i.notFoundContent,
      C = i.onPopupScroll,
      y = l.useContext(Ar),
      _ = y.maxCount,
      w = y.flattenOptions,
      S = y.onActiveValue,
      M = y.defaultActiveFirstOption,
      x = y.onSelect,
      E = y.menuItemSelectedIcon,
      R = y.rawValues,
      q = y.fieldNames,
      G = y.virtual,
      D = y.direction,
      N = y.listHeight,
      W = y.listItemHeight,
      Y = y.optionRender,
      F = ''.concat(c, '-item'),
      T = tc(
        function () {
          return w
        },
        [h, w],
        function (J, H) {
          return H[0] && J[1] !== H[1]
        },
      ),
      L = l.useRef(null),
      P = l.useMemo(
        function () {
          return d && zr(_) && (R == null ? void 0 : R.size) >= _
        },
        [d, _, R == null ? void 0 : R.size],
      ),
      ee = function (H) {
        H.preventDefault()
      },
      se = function (H) {
        var ae
        ;(ae = L.current) === null ||
          ae === void 0 ||
          ae.scrollTo(typeof H == 'number' ? { index: H } : H)
      },
      I = function (H) {
        for (
          var ae =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : 1,
            be = T.length,
            j = 0;
          j < be;
          j += 1
        ) {
          var de = (H + j * ae + be) % be,
            Ie = T[de] || {},
            Ye = Ie.group,
            ye = Ie.data
          if (!Ye && !(ye != null && ye.disabled) && !P) return de
        }
        return -1
      },
      V = l.useState(function () {
        return I(0)
      }),
      re = ce(V, 2),
      z = re[0],
      Q = re[1],
      Z = function (H) {
        var ae =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
        Q(H)
        var be = { source: ae ? 'keyboard' : 'mouse' },
          j = T[H]
        if (!j) {
          S(null, -1, be)
          return
        }
        S(j.value, H, be)
      }
    l.useEffect(
      function () {
        Z(M !== !1 ? I(0) : -1)
      },
      [T.length, g],
    )
    var A = l.useCallback(
      function (J) {
        return R.has(J) && m !== 'combobox'
      },
      [m, Ot(R).toString(), R.size],
    )
    l.useEffect(
      function () {
        var J = setTimeout(function () {
          if (!d && h && R.size === 1) {
            var ae = Array.from(R)[0],
              be = T.findIndex(function (j) {
                var de = j.data
                return de.value === ae
              })
            be !== -1 && (Z(be), se(be))
          }
        })
        if (h) {
          var H
          ;(H = L.current) === null || H === void 0 || H.scrollTo(void 0)
        }
        return function () {
          return clearTimeout(J)
        }
      },
      [h, g],
    )
    var B = function (H) {
      H !== void 0 && x(H, { selected: !R.has(H) }), d || b(!1)
    }
    if (
      (l.useImperativeHandle(o, function () {
        return {
          onKeyDown: function (H) {
            var ae = H.which,
              be = H.ctrlKey
            switch (ae) {
              case Oe.N:
              case Oe.P:
              case Oe.UP:
              case Oe.DOWN: {
                var j = 0
                if (
                  (ae === Oe.UP
                    ? (j = -1)
                    : ae === Oe.DOWN
                      ? (j = 1)
                      : Bu() &&
                        be &&
                        (ae === Oe.N ? (j = 1) : ae === Oe.P && (j = -1)),
                  j !== 0)
                ) {
                  var de = I(z + j, j)
                  se(de), Z(de, !0)
                }
                break
              }
              case Oe.ENTER: {
                var Ie,
                  Ye = T[z]
                Ye &&
                !(
                  Ye != null &&
                  (Ie = Ye.data) !== null &&
                  Ie !== void 0 &&
                  Ie.disabled
                ) &&
                !P
                  ? B(Ye.value)
                  : B(void 0),
                  h && H.preventDefault()
                break
              }
              case Oe.ESC:
                b(!1), h && H.stopPropagation()
            }
          },
          onKeyUp: function () {},
          scrollTo: function (H) {
            se(H)
          },
        }
      }),
      T.length === 0)
    )
      return l.createElement(
        'div',
        {
          role: 'listbox',
          id: ''.concat(f, '_list'),
          className: ''.concat(F, '-empty'),
          onMouseDown: ee,
        },
        p,
      )
    var O = Object.keys(q).map(function (J) {
        return q[J]
      }),
      ge = function (H) {
        return H.label
      }
    function ie(J, H) {
      var ae = J.group
      return {
        role: ae ? 'presentation' : 'option',
        id: ''.concat(f, '_list_').concat(H),
      }
    }
    var De = function (H) {
        var ae = T[H]
        if (!ae) return null
        var be = ae.data || {},
          j = be.value,
          de = ae.group,
          Ie = Pn(be, !0),
          Ye = ge(ae)
        return ae
          ? l.createElement(
              'div',
              at(
                { 'aria-label': typeof Ye == 'string' && !de ? Ye : null },
                Ie,
                { key: H },
                ie(ae, H),
                { 'aria-selected': A(j) },
              ),
              j,
            )
          : null
      },
      Pe = { role: 'listbox', id: ''.concat(f, '_list') }
    return l.createElement(
      l.Fragment,
      null,
      G &&
        l.createElement(
          'div',
          at({}, Pe, { style: { height: 0, width: 0, overflow: 'hidden' } }),
          De(z - 1),
          De(z),
          De(z + 1),
        ),
      l.createElement(
        yi,
        {
          itemKey: 'key',
          ref: L,
          data: T,
          height: N,
          itemHeight: W,
          fullHeight: !1,
          onMouseDown: ee,
          onScroll: C,
          virtual: G,
          direction: D,
          innerProps: G ? null : Pe,
        },
        function (J, H) {
          var ae = J.group,
            be = J.groupOption,
            j = J.data,
            de = J.label,
            Ie = J.value,
            Ye = j.key
          if (ae) {
            var ye,
              Ce =
                (ye = j.title) !== null && ye !== void 0
                  ? ye
                  : za(de)
                    ? de.toString()
                    : void 0
            return l.createElement(
              'div',
              {
                className: ve(F, ''.concat(F, '-group'), j.className),
                title: Ce,
              },
              de !== void 0 ? de : Ye,
            )
          }
          var Be = j.disabled,
            ze = j.title
          j.children
          var Xe = j.style,
            Je = j.className,
            Ue = kt(j, Vu),
            ut = an(Ue, O),
            Se = A(Ie),
            qe = Be || (!Se && P),
            Le = ''.concat(F, '-option'),
            Ge = ve(
              F,
              Le,
              Je,
              Ee(
                Ee(
                  Ee(
                    Ee({}, ''.concat(Le, '-grouped'), be),
                    ''.concat(Le, '-active'),
                    z === H && !qe,
                  ),
                  ''.concat(Le, '-disabled'),
                  qe,
                ),
                ''.concat(Le, '-selected'),
                Se,
              ),
            ),
            xe = ge(J),
            mt = !E || typeof E == 'function' || Se,
            vt = typeof xe == 'number' ? xe : xe || Ie,
            Ke = za(vt) ? vt.toString() : void 0
          return (
            ze !== void 0 && (Ke = ze),
            l.createElement(
              'div',
              at({}, Pn(ut), G ? {} : ie(J, H), {
                'aria-selected': Se,
                className: Ge,
                title: Ke,
                onMouseMove: function () {
                  z === H || qe || Z(H)
                },
                onClick: function () {
                  qe || B(Ie)
                },
                style: Xe,
              }),
              l.createElement(
                'div',
                { className: ''.concat(Le, '-content') },
                typeof Y == 'function' ? Y(J, { index: H }) : vt,
              ),
              l.isValidElement(E) || Se,
              mt &&
                l.createElement(
                  ar,
                  {
                    className: ''.concat(F, '-option-state'),
                    customizeIcon: E,
                    customizeIconProps: {
                      value: Ie,
                      disabled: qe,
                      isSelected: Se,
                    },
                  },
                  Se ? '✓' : null,
                ),
            )
          )
        },
      ),
    )
  },
  Gu = l.forwardRef(Uu)
const Ku = function (t, r) {
  var o = l.useRef({ values: new Map(), options: new Map() }),
    i = l.useMemo(
      function () {
        var f = o.current,
          h = f.values,
          d = f.options,
          m = t.map(function (p) {
            if (p.label === void 0) {
              var C
              return _e(
                _e({}, p),
                {},
                {
                  label:
                    (C = h.get(p.value)) === null || C === void 0
                      ? void 0
                      : C.label,
                },
              )
            }
            return p
          }),
          g = new Map(),
          b = new Map()
        return (
          m.forEach(function (p) {
            g.set(p.value, p), b.set(p.value, r.get(p.value) || d.get(p.value))
          }),
          (o.current.values = g),
          (o.current.options = b),
          m
        )
      },
      [t, r],
    ),
    c = l.useCallback(
      function (f) {
        return r.get(f) || o.current.options.get(f)
      },
      [r],
    )
  return [i, c]
}
function Tr(t, r) {
  return mi(t).join('').toUpperCase().includes(r)
}
const qu = function (t, r, o, i, c) {
  return l.useMemo(
    function () {
      if (!o || i === !1) return t
      var f = r.options,
        h = r.label,
        d = r.value,
        m = [],
        g = typeof i == 'function',
        b = o.toUpperCase(),
        p = g
          ? i
          : function (y, _) {
              return c
                ? Tr(_[c], b)
                : _[f]
                  ? Tr(_[h !== 'children' ? h : 'label'], b)
                  : Tr(_[d], b)
            },
        C = g
          ? function (y) {
              return Yr(y)
            }
          : function (y) {
              return y
            }
      return (
        t.forEach(function (y) {
          if (y[f]) {
            var _ = p(o, C(y))
            if (_) m.push(y)
            else {
              var w = y[f].filter(function (S) {
                return p(o, C(S))
              })
              w.length && m.push(_e(_e({}, y), {}, Ee({}, f, w)))
            }
            return
          }
          p(o, C(y)) && m.push(y)
        }),
        m
      )
    },
    [t, i, c, o, r],
  )
}
var Ya = 0,
  Xu = nc()
function Zu() {
  var t
  return Xu ? ((t = Ya), (Ya += 1)) : (t = 'TEST_OR_SSR'), t
}
function Qu(t) {
  var r = l.useState(),
    o = ce(r, 2),
    i = o[0],
    c = o[1]
  return (
    l.useEffect(function () {
      c('rc_select_'.concat(Zu()))
    }, []),
    t || i
  )
}
var Ju = ['children', 'value'],
  ed = ['children']
function td(t) {
  var r = t,
    o = r.key,
    i = r.props,
    c = i.children,
    f = i.value,
    h = kt(i, Ju)
  return _e({ key: o, value: f !== void 0 ? f : o, children: c }, h)
}
function Si(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
  return ti(t)
    .map(function (o, i) {
      if (!l.isValidElement(o) || !o.type) return null
      var c = o,
        f = c.type.isSelectOptGroup,
        h = c.key,
        d = c.props,
        m = d.children,
        g = kt(d, ed)
      return r || !f
        ? td(o)
        : _e(
            _e(
              {
                key: '__RC_SELECT_GRP__'.concat(h === null ? i : h, '__'),
                label: h,
              },
              g,
            ),
            {},
            { options: Si(m) },
          )
    })
    .filter(function (o) {
      return o
    })
}
var nd = function (r, o, i, c, f) {
  return l.useMemo(
    function () {
      var h = r,
        d = !r
      d && (h = Si(o))
      var m = new Map(),
        g = new Map(),
        b = function (y, _, w) {
          w && typeof w == 'string' && y.set(_[w], _)
        },
        p = function C(y) {
          for (
            var _ =
                arguments.length > 1 && arguments[1] !== void 0
                  ? arguments[1]
                  : !1,
              w = 0;
            w < y.length;
            w += 1
          ) {
            var S = y[w]
            !S[i.options] || _
              ? (m.set(S[i.value], S), b(g, S, i.label), b(g, S, c), b(g, S, f))
              : C(S[i.options], !0)
          }
        }
      return p(h), { options: h, valueOptions: m, labelOptions: g }
    },
    [r, o, i, c, f],
  )
}
function Ha(t) {
  var r = l.useRef()
  r.current = t
  var o = l.useCallback(function () {
    return r.current.apply(r, arguments)
  }, [])
  return o
}
var rd = [
    'id',
    'mode',
    'prefixCls',
    'backfill',
    'fieldNames',
    'inputValue',
    'searchValue',
    'onSearch',
    'autoClearSearchValue',
    'onSelect',
    'onDeselect',
    'dropdownMatchSelectWidth',
    'filterOption',
    'filterSort',
    'optionFilterProp',
    'optionLabelProp',
    'options',
    'optionRender',
    'children',
    'defaultActiveFirstOption',
    'menuItemSelectedIcon',
    'virtual',
    'direction',
    'listHeight',
    'listItemHeight',
    'labelRender',
    'value',
    'defaultValue',
    'labelInValue',
    'onChange',
    'maxCount',
  ],
  ad = ['inputValue']
function id(t) {
  return !t || Ft(t) !== 'object'
}
var od = l.forwardRef(function (t, r) {
    var o = t.id,
      i = t.mode,
      c = t.prefixCls,
      f = c === void 0 ? 'rc-select' : c,
      h = t.backfill,
      d = t.fieldNames,
      m = t.inputValue,
      g = t.searchValue,
      b = t.onSearch,
      p = t.autoClearSearchValue,
      C = p === void 0 ? !0 : p,
      y = t.onSelect,
      _ = t.onDeselect,
      w = t.dropdownMatchSelectWidth,
      S = w === void 0 ? !0 : w,
      M = t.filterOption,
      x = t.filterSort,
      E = t.optionFilterProp,
      R = t.optionLabelProp,
      q = t.options,
      G = t.optionRender,
      D = t.children,
      N = t.defaultActiveFirstOption,
      W = t.menuItemSelectedIcon,
      Y = t.virtual,
      F = t.direction,
      T = t.listHeight,
      L = T === void 0 ? 200 : T,
      P = t.listItemHeight,
      ee = P === void 0 ? 20 : P,
      se = t.labelRender,
      I = t.value,
      V = t.defaultValue,
      re = t.labelInValue,
      z = t.onChange,
      Q = t.maxCount,
      Z = kt(t, rd),
      A = Qu(o),
      B = Hr(i),
      O = !!(!q && D),
      ge = l.useMemo(
        function () {
          return M === void 0 && i === 'combobox' ? !1 : M
        },
        [M, i],
      ),
      ie = l.useMemo(
        function () {
          return gi(d, O)
        },
        [JSON.stringify(d), O],
      ),
      De = Rn('', {
        value: g !== void 0 ? g : m,
        postState: function (fe) {
          return fe || ''
        },
      }),
      Pe = ce(De, 2),
      J = Pe[0],
      H = Pe[1],
      ae = nd(q, D, ie, E, R),
      be = ae.valueOptions,
      j = ae.labelOptions,
      de = ae.options,
      Ie = l.useCallback(
        function (X) {
          var fe = mi(X)
          return fe.map(function (oe) {
            var ue, pe, Ne, Qe, he
            if (id(oe)) ue = oe
            else {
              var me
              ;(Ne = oe.key),
                (pe = oe.label),
                (ue = (me = oe.value) !== null && me !== void 0 ? me : Ne)
            }
            var $e = be.get(ue)
            if ($e) {
              var Ae
              pe === void 0 && (pe = $e == null ? void 0 : $e[R || ie.label]),
                Ne === void 0 &&
                  (Ne =
                    (Ae = $e == null ? void 0 : $e.key) !== null &&
                    Ae !== void 0
                      ? Ae
                      : ue),
                (Qe = $e == null ? void 0 : $e.disabled),
                (he = $e == null ? void 0 : $e.title)
            }
            return { label: pe, value: ue, key: Ne, disabled: Qe, title: he }
          })
        },
        [ie, R, be],
      ),
      Ye = Rn(V, { value: I }),
      ye = ce(Ye, 2),
      Ce = ye[0],
      Be = ye[1],
      ze = l.useMemo(
        function () {
          var X,
            fe = B && Ce === null ? [] : Ce,
            oe = Ie(fe)
          return i === 'combobox' &&
            du((X = oe[0]) === null || X === void 0 ? void 0 : X.value)
            ? []
            : oe
        },
        [Ce, Ie, i, B],
      ),
      Xe = Ku(ze, be),
      Je = ce(Xe, 2),
      Ue = Je[0],
      ut = Je[1],
      Se = l.useMemo(
        function () {
          if (!i && Ue.length === 1) {
            var X = Ue[0]
            if (X.value === null && (X.label === null || X.label === void 0))
              return []
          }
          return Ue.map(function (fe) {
            var oe
            return _e(
              _e({}, fe),
              {},
              {
                label:
                  (oe = typeof se == 'function' ? se(fe) : fe.label) !== null &&
                  oe !== void 0
                    ? oe
                    : fe.value,
              },
            )
          })
        },
        [i, Ue, se],
      ),
      qe = l.useMemo(
        function () {
          return new Set(
            Ue.map(function (X) {
              return X.value
            }),
          )
        },
        [Ue],
      )
    l.useEffect(
      function () {
        if (i === 'combobox') {
          var X,
            fe = (X = Ue[0]) === null || X === void 0 ? void 0 : X.value
          H(uu(fe) ? String(fe) : '')
        }
      },
      [Ue],
    )
    var Le = Ha(function (X, fe) {
        var oe = fe ?? X
        return Ee(Ee({}, ie.value, X), ie.label, oe)
      }),
      Ge = l.useMemo(
        function () {
          if (i !== 'tags') return de
          var X = Ot(de),
            fe = function (ue) {
              return be.has(ue)
            }
          return (
            Ot(Ue)
              .sort(function (oe, ue) {
                return oe.value < ue.value ? -1 : 1
              })
              .forEach(function (oe) {
                var ue = oe.value
                fe(ue) || X.push(Le(ue, oe.label))
              }),
            X
          )
        },
        [Le, de, be, Ue, i],
      ),
      xe = qu(Ge, ie, J, ge, E),
      mt = l.useMemo(
        function () {
          return i !== 'tags' ||
            !J ||
            xe.some(function (X) {
              return X[E || 'value'] === J
            }) ||
            xe.some(function (X) {
              return X[ie.value] === J
            })
            ? xe
            : [Le(J)].concat(Ot(xe))
        },
        [Le, E, i, xe, J, ie],
      ),
      vt = function X(fe) {
        var oe = Ot(fe).sort(function (ue, pe) {
          return x(ue, pe, { searchValue: J })
        })
        return oe.map(function (ue) {
          return Array.isArray(ue.options)
            ? _e(
                _e({}, ue),
                {},
                { options: ue.options.length > 0 ? X(ue.options) : ue.options },
              )
            : ue
        })
      },
      Ke = l.useMemo(
        function () {
          return x ? vt(mt) : mt
        },
        [mt, x, J],
      ),
      ot = l.useMemo(
        function () {
          return _u(Ke, { fieldNames: ie, childrenAsData: O })
        },
        [Ke, ie, O],
      ),
      gt = function (fe) {
        var oe = Ie(fe)
        if (
          (Be(oe),
          z &&
            (oe.length !== Ue.length ||
              oe.some(function (Ne, Qe) {
                var he
                return (
                  ((he = Ue[Qe]) === null || he === void 0
                    ? void 0
                    : he.value) !== (Ne == null ? void 0 : Ne.value)
                )
              })))
        ) {
          var ue = re
              ? oe
              : oe.map(function (Ne) {
                  return Ne.value
                }),
            pe = oe.map(function (Ne) {
              return Yr(ut(Ne.value))
            })
          z(B ? ue : ue[0], B ? pe : pe[0])
        }
      },
      Ze = l.useState(null),
      it = ce(Ze, 2),
      dt = it[0],
      Ct = it[1],
      zt = l.useState(0),
      pt = ce(zt, 2),
      Et = pt[0],
      bt = pt[1],
      yt = N !== void 0 ? N : i !== 'combobox',
      K = l.useCallback(
        function (X, fe) {
          var oe =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : {},
            ue = oe.source,
            pe = ue === void 0 ? 'keyboard' : ue
          bt(fe),
            h &&
              i === 'combobox' &&
              X !== null &&
              pe === 'keyboard' &&
              Ct(String(X))
        },
        [h, i],
      ),
      St = function (fe, oe, ue) {
        var pe = function () {
          var le,
            ne = ut(fe)
          return [
            re
              ? {
                  label: ne == null ? void 0 : ne[ie.label],
                  value: fe,
                  key:
                    (le = ne == null ? void 0 : ne.key) !== null &&
                    le !== void 0
                      ? le
                      : fe,
                }
              : fe,
            Yr(ne),
          ]
        }
        if (oe && y) {
          var Ne = pe(),
            Qe = ce(Ne, 2),
            he = Qe[0],
            me = Qe[1]
          y(he, me)
        } else if (!oe && _ && ue !== 'clear') {
          var $e = pe(),
            Ae = ce($e, 2),
            It = Ae[0],
            ht = Ae[1]
          _(It, ht)
        }
      },
      Lt = Ha(function (X, fe) {
        var oe,
          ue = B ? fe.selected : !0
        ue
          ? (oe = B ? [].concat(Ot(Ue), [X]) : [X])
          : (oe = Ue.filter(function (pe) {
              return pe.value !== X
            })),
          gt(oe),
          St(X, ue),
          i === 'combobox' ? Ct('') : (!Hr || C) && (H(''), Ct(''))
      }),
      ke = function (fe, oe) {
        gt(fe)
        var ue = oe.type,
          pe = oe.values
        ;(ue === 'remove' || ue === 'clear') &&
          pe.forEach(function (Ne) {
            St(Ne.value, !1, ue)
          })
      },
      nt = function (fe, oe) {
        if ((H(fe), Ct(null), oe.source === 'submit')) {
          var ue = (fe || '').trim()
          if (ue) {
            var pe = Array.from(new Set([].concat(Ot(qe), [ue])))
            gt(pe), St(ue, !0), H('')
          }
          return
        }
        oe.source !== 'blur' && (i === 'combobox' && gt(fe), b == null || b(fe))
      },
      we = function (fe) {
        var oe = fe
        i !== 'tags' &&
          (oe = fe
            .map(function (pe) {
              var Ne = j.get(pe)
              return Ne == null ? void 0 : Ne.value
            })
            .filter(function (pe) {
              return pe !== void 0
            }))
        var ue = Array.from(new Set([].concat(Ot(qe), Ot(oe))))
        gt(ue),
          ue.forEach(function (pe) {
            St(pe, !0)
          })
      },
      ft = l.useMemo(
        function () {
          var X = Y !== !1 && S !== !1
          return _e(
            _e({}, ae),
            {},
            {
              flattenOptions: ot,
              onActiveValue: K,
              defaultActiveFirstOption: yt,
              onSelect: Lt,
              menuItemSelectedIcon: W,
              rawValues: qe,
              fieldNames: ie,
              virtual: X,
              direction: F,
              listHeight: L,
              listItemHeight: ee,
              childrenAsData: O,
              maxCount: Q,
              optionRender: G,
            },
          )
        },
        [Q, ae, ot, K, yt, Lt, W, qe, ie, Y, S, F, L, ee, O, G],
      )
    return l.createElement(
      Ar.Provider,
      { value: ft },
      l.createElement(
        Ou,
        at({}, Z, {
          id: A,
          prefixCls: f,
          ref: r,
          omitDomProps: ad,
          mode: i,
          displayValues: Se,
          onDisplayValuesChange: ke,
          direction: F,
          searchValue: J,
          onSearch: nt,
          autoClearSearchValue: C,
          onSearchSplit: we,
          dropdownMatchSelectWidth: S,
          OptionList: Gu,
          emptyOptions: !ot.length,
          activeValue: dt,
          activeDescendantId: ''.concat(A, '_list_').concat(Et),
        }),
      ),
    )
  }),
  Vr = od
Vr.Option = Br
Vr.OptGroup = jr
const sd = () => {
    const [, t] = Wr(),
      o = new Zn(t.colorBgBase).toHsl().l < 0.5 ? { opacity: 0.65 } : {}
    return l.createElement(
      'svg',
      {
        style: o,
        width: '184',
        height: '152',
        viewBox: '0 0 184 152',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      l.createElement('title', null, 'empty image'),
      l.createElement(
        'g',
        { fill: 'none', fillRule: 'evenodd' },
        l.createElement(
          'g',
          { transform: 'translate(24 31.67)' },
          l.createElement('ellipse', {
            fillOpacity: '.8',
            fill: '#F5F5F7',
            cx: '67.797',
            cy: '106.89',
            rx: '67.797',
            ry: '12.668',
          }),
          l.createElement('path', {
            d: 'M122.034 69.674L98.109 40.229c-1.148-1.386-2.826-2.225-4.593-2.225h-51.44c-1.766 0-3.444.839-4.592 2.225L13.56 69.674v15.383h108.475V69.674z',
            fill: '#AEB8C2',
          }),
          l.createElement('path', {
            d: 'M101.537 86.214L80.63 61.102c-1.001-1.207-2.507-1.867-4.048-1.867H31.724c-1.54 0-3.047.66-4.048 1.867L6.769 86.214v13.792h94.768V86.214z',
            fill: 'url(#linearGradient-1)',
            transform: 'translate(13.56)',
          }),
          l.createElement('path', {
            d: 'M33.83 0h67.933a4 4 0 0 1 4 4v93.344a4 4 0 0 1-4 4H33.83a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z',
            fill: '#F5F5F7',
          }),
          l.createElement('path', {
            d: 'M42.678 9.953h50.237a2 2 0 0 1 2 2V36.91a2 2 0 0 1-2 2H42.678a2 2 0 0 1-2-2V11.953a2 2 0 0 1 2-2zM42.94 49.767h49.713a2.262 2.262 0 1 1 0 4.524H42.94a2.262 2.262 0 0 1 0-4.524zM42.94 61.53h49.713a2.262 2.262 0 1 1 0 4.525H42.94a2.262 2.262 0 0 1 0-4.525zM121.813 105.032c-.775 3.071-3.497 5.36-6.735 5.36H20.515c-3.238 0-5.96-2.29-6.734-5.36a7.309 7.309 0 0 1-.222-1.79V69.675h26.318c2.907 0 5.25 2.448 5.25 5.42v.04c0 2.971 2.37 5.37 5.277 5.37h34.785c2.907 0 5.277-2.421 5.277-5.393V75.1c0-2.972 2.343-5.426 5.25-5.426h26.318v33.569c0 .617-.077 1.216-.221 1.789z',
            fill: '#DCE0E6',
          }),
        ),
        l.createElement('path', {
          d: 'M149.121 33.292l-6.83 2.65a1 1 0 0 1-1.317-1.23l1.937-6.207c-2.589-2.944-4.109-6.534-4.109-10.408C138.802 8.102 148.92 0 161.402 0 173.881 0 184 8.102 184 18.097c0 9.995-10.118 18.097-22.599 18.097-4.528 0-8.744-1.066-12.28-2.902z',
          fill: '#DCE0E6',
        }),
        l.createElement(
          'g',
          { transform: 'translate(149.65 15.383)', fill: '#FFF' },
          l.createElement('ellipse', {
            cx: '20.654',
            cy: '3.167',
            rx: '2.849',
            ry: '2.815',
          }),
          l.createElement('path', {
            d: 'M5.698 5.63H0L2.898.704zM9.259.704h4.985V5.63H9.259z',
          }),
        ),
      ),
    )
  },
  ld = () => {
    const [, t] = Wr(),
      {
        colorFill: r,
        colorFillTertiary: o,
        colorFillQuaternary: i,
        colorBgContainer: c,
      } = t,
      {
        borderColor: f,
        shadowColor: h,
        contentColor: d,
      } = l.useMemo(
        () => ({
          borderColor: new Zn(r).onBackground(c).toHexShortString(),
          shadowColor: new Zn(o).onBackground(c).toHexShortString(),
          contentColor: new Zn(i).onBackground(c).toHexShortString(),
        }),
        [r, o, i, c],
      )
    return l.createElement(
      'svg',
      {
        width: '64',
        height: '41',
        viewBox: '0 0 64 41',
        xmlns: 'http://www.w3.org/2000/svg',
      },
      l.createElement('title', null, 'Simple Empty'),
      l.createElement(
        'g',
        { transform: 'translate(0 1)', fill: 'none', fillRule: 'evenodd' },
        l.createElement('ellipse', {
          fill: h,
          cx: '32',
          cy: '33',
          rx: '32',
          ry: '7',
        }),
        l.createElement(
          'g',
          { fillRule: 'nonzero', stroke: f },
          l.createElement('path', {
            d: 'M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z',
          }),
          l.createElement('path', {
            d: 'M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z',
            fill: d,
          }),
        ),
      ),
    )
  },
  cd = (t) => {
    const {
      componentCls: r,
      margin: o,
      marginXS: i,
      marginXL: c,
      fontSize: f,
      lineHeight: h,
    } = t
    return {
      [r]: {
        marginInline: i,
        fontSize: f,
        lineHeight: h,
        textAlign: 'center',
        [`${r}-image`]: {
          height: t.emptyImgHeight,
          marginBottom: i,
          opacity: t.opacityImage,
          img: { height: '100%' },
          svg: { maxWidth: '100%', height: '100%', margin: 'auto' },
        },
        [`${r}-description`]: { color: t.colorTextDescription },
        [`${r}-footer`]: { marginTop: o },
        '&-normal': {
          marginBlock: c,
          color: t.colorTextDescription,
          [`${r}-description`]: { color: t.colorTextDescription },
          [`${r}-image`]: { height: t.emptyImgHeightMD },
        },
        '&-small': {
          marginBlock: i,
          color: t.colorTextDescription,
          [`${r}-image`]: { height: t.emptyImgHeightSM },
        },
      },
    }
  },
  ud = bn('Empty', (t) => {
    const { componentCls: r, controlHeightLG: o, calc: i } = t,
      c = Wt(t, {
        emptyImgCls: `${r}-img`,
        emptyImgHeight: i(o).mul(2.5).equal(),
        emptyImgHeightMD: o,
        emptyImgHeightSM: i(o).mul(0.875).equal(),
      })
    return [cd(c)]
  })
var dd = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
const wi = l.createElement(sd, null),
  _i = l.createElement(ld, null),
  nn = (t) => {
    var {
        className: r,
        rootClassName: o,
        prefixCls: i,
        image: c = wi,
        description: f,
        children: h,
        imageStyle: d,
        style: m,
      } = t,
      g = dd(t, [
        'className',
        'rootClassName',
        'prefixCls',
        'image',
        'description',
        'children',
        'imageStyle',
        'style',
      ])
    const { getPrefixCls: b, direction: p, empty: C } = l.useContext(_t),
      y = b('empty', i),
      [_, w, S] = ud(y),
      [M] = rc('Empty'),
      x = typeof f < 'u' ? f : M == null ? void 0 : M.description,
      E = typeof x == 'string' ? x : 'empty'
    let R = null
    return (
      typeof c == 'string'
        ? (R = l.createElement('img', { alt: E, src: c }))
        : (R = c),
      _(
        l.createElement(
          'div',
          Object.assign(
            {
              className: ve(
                w,
                S,
                y,
                C == null ? void 0 : C.className,
                { [`${y}-normal`]: c === _i, [`${y}-rtl`]: p === 'rtl' },
                r,
                o,
              ),
              style: Object.assign(
                Object.assign({}, C == null ? void 0 : C.style),
                m,
              ),
            },
            g,
          ),
          l.createElement('div', { className: `${y}-image`, style: d }, R),
          x && l.createElement('div', { className: `${y}-description` }, x),
          h && l.createElement('div', { className: `${y}-footer` }, h),
        ),
      )
    )
  }
nn.PRESENTED_IMAGE_DEFAULT = wi
nn.PRESENTED_IMAGE_SIMPLE = _i
const fd = (t) => {
    const { componentName: r } = t,
      { getPrefixCls: o } = l.useContext(_t),
      i = o('empty')
    switch (r) {
      case 'Table':
      case 'List':
        return rn.createElement(nn, { image: nn.PRESENTED_IMAGE_SIMPLE })
      case 'Select':
      case 'TreeSelect':
      case 'Cascader':
      case 'Transfer':
      case 'Mentions':
        return rn.createElement(nn, {
          image: nn.PRESENTED_IMAGE_SIMPLE,
          className: `${i}-small`,
        })
      case 'Table.filter':
        return null
      default:
        return rn.createElement(nn, null)
    }
  },
  hd = (t) => {
    const o = {
      overflow: { adjustX: !0, adjustY: !0, shiftY: !0 },
      htmlRegion: t === 'scroll' ? 'scroll' : 'visible',
      dynamicInset: !0,
    }
    return {
      bottomLeft: Object.assign(Object.assign({}, o), {
        points: ['tl', 'bl'],
        offset: [0, 4],
      }),
      bottomRight: Object.assign(Object.assign({}, o), {
        points: ['tr', 'br'],
        offset: [0, 4],
      }),
      topLeft: Object.assign(Object.assign({}, o), {
        points: ['bl', 'tl'],
        offset: [0, -4],
      }),
      topRight: Object.assign(Object.assign({}, o), {
        points: ['br', 'tr'],
        offset: [0, -4],
      }),
    }
  }
function md(t, r) {
  return t || hd(r)
}
const ka = (t) => {
    const {
      optionHeight: r,
      optionFontSize: o,
      optionLineHeight: i,
      optionPadding: c,
    } = t
    return {
      position: 'relative',
      display: 'block',
      minHeight: r,
      padding: c,
      color: t.colorText,
      fontWeight: 'normal',
      fontSize: o,
      lineHeight: i,
      boxSizing: 'border-box',
    }
  },
  vd = (t) => {
    const { antCls: r, componentCls: o } = t,
      i = `${o}-item`,
      c = `&${r}-slide-up-enter${r}-slide-up-enter-active`,
      f = `&${r}-slide-up-appear${r}-slide-up-appear-active`,
      h = `&${r}-slide-up-leave${r}-slide-up-leave-active`,
      d = `${o}-dropdown-placement-`
    return [
      {
        [`${o}-dropdown`]: Object.assign(Object.assign({}, yn(t)), {
          position: 'absolute',
          top: -9999,
          zIndex: t.zIndexPopup,
          boxSizing: 'border-box',
          padding: t.paddingXXS,
          overflow: 'hidden',
          fontSize: t.fontSize,
          fontVariant: 'initial',
          backgroundColor: t.colorBgElevated,
          borderRadius: t.borderRadiusLG,
          outline: 'none',
          boxShadow: t.boxShadowSecondary,
          [`
          ${c}${d}bottomLeft,
          ${f}${d}bottomLeft
        `]: { animationName: ac },
          [`
          ${c}${d}topLeft,
          ${f}${d}topLeft,
          ${c}${d}topRight,
          ${f}${d}topRight
        `]: { animationName: ic },
          [`${h}${d}bottomLeft`]: { animationName: oc },
          [`
          ${h}${d}topLeft,
          ${h}${d}topRight
        `]: { animationName: sc },
          '&-hidden': { display: 'none' },
          [i]: Object.assign(Object.assign({}, ka(t)), {
            cursor: 'pointer',
            transition: `background ${t.motionDurationSlow} ease`,
            borderRadius: t.borderRadiusSM,
            '&-group': {
              color: t.colorTextDescription,
              fontSize: t.fontSizeSM,
              cursor: 'default',
            },
            '&-option': {
              display: 'flex',
              '&-content': Object.assign({ flex: 'auto' }, pn),
              '&-state': {
                flex: 'none',
                display: 'flex',
                alignItems: 'center',
              },
              [`&-active:not(${i}-option-disabled)`]: {
                backgroundColor: t.optionActiveBg,
              },
              [`&-selected:not(${i}-option-disabled)`]: {
                color: t.optionSelectedColor,
                fontWeight: t.optionSelectedFontWeight,
                backgroundColor: t.optionSelectedBg,
                [`${i}-option-state`]: { color: t.colorPrimary },
                [`&:has(+ ${i}-option-selected:not(${i}-option-disabled))`]: {
                  borderEndStartRadius: 0,
                  borderEndEndRadius: 0,
                  [`& + ${i}-option-selected:not(${i}-option-disabled)`]: {
                    borderStartStartRadius: 0,
                    borderStartEndRadius: 0,
                  },
                },
              },
              '&-disabled': {
                [`&${i}-option-selected`]: {
                  backgroundColor: t.colorBgContainerDisabled,
                },
                color: t.colorTextDisabled,
                cursor: 'not-allowed',
              },
              '&-grouped': {
                paddingInlineStart: t
                  .calc(t.controlPaddingHorizontal)
                  .mul(2)
                  .equal(),
              },
            },
            '&-empty': Object.assign(Object.assign({}, ka(t)), {
              color: t.colorTextDisabled,
            }),
          }),
          '&-rtl': { direction: 'rtl' },
        }),
      },
      Jn(t, 'slide-up'),
      Jn(t, 'slide-down'),
      xa(t, 'move-up'),
      xa(t, 'move-down'),
    ]
  },
  gd = (t) => {
    const {
        multipleSelectItemHeight: r,
        paddingXXS: o,
        lineWidth: i,
        INTERNAL_FIXED_ITEM_MARGIN: c,
      } = t,
      f = t.max(t.calc(o).sub(i).equal(), 0),
      h = t.max(t.calc(f).sub(c).equal(), 0)
    return {
      basePadding: f,
      containerPadding: h,
      itemHeight: U(r),
      itemLineHeight: U(t.calc(r).sub(t.calc(t.lineWidth).mul(2)).equal()),
    }
  },
  pd = (t) => {
    const { multipleSelectItemHeight: r, selectHeight: o, lineWidth: i } = t
    return t.calc(o).sub(r).div(2).sub(i).equal()
  },
  bd = (t) => {
    const {
      componentCls: r,
      iconCls: o,
      borderRadiusSM: i,
      motionDurationSlow: c,
      paddingXS: f,
      multipleItemColorDisabled: h,
      multipleItemBorderColorDisabled: d,
      colorIcon: m,
      colorIconHover: g,
      INTERNAL_FIXED_ITEM_MARGIN: b,
    } = t
    return {
      [`${r}-selection-overflow`]: {
        position: 'relative',
        display: 'flex',
        flex: 'auto',
        flexWrap: 'wrap',
        maxWidth: '100%',
        '&-item': {
          flex: 'none',
          alignSelf: 'center',
          maxWidth: '100%',
          display: 'inline-flex',
        },
        [`${r}-selection-item`]: {
          display: 'flex',
          alignSelf: 'center',
          flex: 'none',
          boxSizing: 'border-box',
          maxWidth: '100%',
          marginBlock: b,
          borderRadius: i,
          cursor: 'default',
          transition: `font-size ${c}, line-height ${c}, height ${c}`,
          marginInlineEnd: t.calc(b).mul(2).equal(),
          paddingInlineStart: f,
          paddingInlineEnd: t.calc(f).div(2).equal(),
          [`${r}-disabled&`]: {
            color: h,
            borderColor: d,
            cursor: 'not-allowed',
          },
          '&-content': {
            display: 'inline-block',
            marginInlineEnd: t.calc(f).div(2).equal(),
            overflow: 'hidden',
            whiteSpace: 'pre',
            textOverflow: 'ellipsis',
          },
          '&-remove': Object.assign(Object.assign({}, ni()), {
            display: 'inline-flex',
            alignItems: 'center',
            color: m,
            fontWeight: 'bold',
            fontSize: 10,
            lineHeight: 'inherit',
            cursor: 'pointer',
            [`> ${o}`]: { verticalAlign: '-0.2em' },
            '&:hover': { color: g },
          }),
        },
      },
    }
  },
  yd = (t, r) => {
    const { componentCls: o, INTERNAL_FIXED_ITEM_MARGIN: i } = t,
      c = `${o}-selection-overflow`,
      f = t.multipleSelectItemHeight,
      h = pd(t),
      d = r ? `${o}-${r}` : '',
      m = gd(t)
    return {
      [`${o}-multiple${d}`]: Object.assign(Object.assign({}, bd(t)), {
        [`${o}-selector`]: {
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          height: '100%',
          paddingInline: m.basePadding,
          paddingBlock: m.containerPadding,
          borderRadius: t.borderRadius,
          [`${o}-disabled&`]: {
            background: t.multipleSelectorBgDisabled,
            cursor: 'not-allowed',
          },
          '&:after': {
            display: 'inline-block',
            width: 0,
            margin: `${U(i)} 0`,
            lineHeight: U(f),
            visibility: 'hidden',
            content: '"\\a0"',
          },
        },
        [`${o}-selection-item`]: {
          height: m.itemHeight,
          lineHeight: U(m.itemLineHeight),
        },
        [`${c}-item + ${c}-item`]: {
          [`${o}-selection-search`]: { marginInlineStart: 0 },
        },
        [`${c}-item-suffix`]: { height: '100%' },
        [`${o}-selection-search`]: {
          display: 'inline-flex',
          position: 'relative',
          maxWidth: '100%',
          marginInlineStart: t
            .calc(t.inputPaddingHorizontalBase)
            .sub(h)
            .equal(),
          '\n          &-input,\n          &-mirror\n        ': {
            height: f,
            fontFamily: t.fontFamily,
            lineHeight: U(f),
            transition: `all ${t.motionDurationSlow}`,
          },
          '&-input': { width: '100%', minWidth: 4.1 },
          '&-mirror': {
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            insetInlineEnd: 'auto',
            zIndex: 999,
            whiteSpace: 'pre',
            visibility: 'hidden',
          },
        },
        [`${o}-selection-placeholder`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: t.inputPaddingHorizontalBase,
          insetInlineEnd: t.inputPaddingHorizontalBase,
          transform: 'translateY(-50%)',
          transition: `all ${t.motionDurationSlow}`,
        },
      }),
    }
  }
function Pr(t, r) {
  const { componentCls: o } = t,
    i = r ? `${o}-${r}` : '',
    c = {
      [`${o}-multiple${i}`]: {
        fontSize: t.fontSize,
        [`${o}-selector`]: { [`${o}-show-search&`]: { cursor: 'text' } },
        [`
        &${o}-show-arrow ${o}-selector,
        &${o}-allow-clear ${o}-selector
      `]: {
          paddingInlineEnd: t
            .calc(t.fontSizeIcon)
            .add(t.controlPaddingHorizontal)
            .equal(),
        },
      },
    }
  return [yd(t, r), c]
}
const Sd = (t) => {
  const { componentCls: r } = t,
    o = Wt(t, {
      selectHeight: t.controlHeightSM,
      multipleSelectItemHeight: t.multipleItemHeightSM,
      borderRadius: t.borderRadiusSM,
      borderRadiusSM: t.borderRadiusXS,
    }),
    i = Wt(t, {
      fontSize: t.fontSizeLG,
      selectHeight: t.controlHeightLG,
      multipleSelectItemHeight: t.multipleItemHeightLG,
      borderRadius: t.borderRadiusLG,
      borderRadiusSM: t.borderRadius,
    })
  return [
    Pr(t),
    Pr(o, 'sm'),
    {
      [`${r}-multiple${r}-sm`]: {
        [`${r}-selection-placeholder`]: {
          insetInline: t
            .calc(t.controlPaddingHorizontalSM)
            .sub(t.lineWidth)
            .equal(),
        },
        [`${r}-selection-search`]: { marginInlineStart: 2 },
      },
    },
    Pr(i, 'lg'),
  ]
}
function Nr(t, r) {
  const {
      componentCls: o,
      inputPaddingHorizontalBase: i,
      borderRadius: c,
      fontSizeIcon: f,
    } = t,
    h = t.calc(t.controlHeight).sub(t.calc(t.lineWidth).mul(2)).equal(),
    d = t.calc(i).add(f).equal(),
    m = r ? `${o}-${r}` : ''
  return {
    [`${o}-single${m}`]: {
      fontSize: t.fontSize,
      height: t.controlHeight,
      [`${o}-selector`]: Object.assign(Object.assign({}, yn(t, !0)), {
        display: 'flex',
        borderRadius: c,
        [`${o}-selection-search`]: {
          position: 'absolute',
          top: 0,
          insetInlineStart: i,
          insetInlineEnd: U(d),
          bottom: 0,
          '&-input': { width: '100%', WebkitAppearance: 'textfield' },
        },
        [`
          ${o}-selection-item,
          ${o}-selection-placeholder
        `]: {
          padding: 0,
          lineHeight: U(h),
          transition: `all ${t.motionDurationSlow}, visibility 0s`,
          alignSelf: 'center',
        },
        [`${o}-selection-placeholder`]: {
          transition: 'none',
          pointerEvents: 'none',
        },
        [[
          '&:after',
          `${o}-selection-item:empty:after`,
          `${o}-selection-placeholder:empty:after`,
        ].join(',')]: {
          display: 'inline-block',
          width: 0,
          visibility: 'hidden',
          content: '"\\a0"',
        },
      }),
      [`
        &${o}-show-arrow ${o}-selection-item,
        &${o}-show-arrow ${o}-selection-placeholder
      `]: { paddingInlineEnd: t.showArrowPaddingInlineEnd },
      [`&${o}-open ${o}-selection-item`]: { color: t.colorTextPlaceholder },
      [`&:not(${o}-customize-input)`]: {
        [`${o}-selector`]: {
          width: '100%',
          height: '100%',
          padding: `0 ${U(i)}`,
          [`${o}-selection-search-input`]: { height: h },
          '&:after': { lineHeight: U(h) },
        },
      },
      [`&${o}-customize-input`]: {
        [`${o}-selector`]: {
          '&:after': { display: 'none' },
          [`${o}-selection-search`]: { position: 'static', width: '100%' },
          [`${o}-selection-placeholder`]: {
            position: 'absolute',
            insetInlineStart: 0,
            insetInlineEnd: 0,
            padding: `0 ${U(i)}`,
            '&:after': { display: 'none' },
          },
        },
      },
    },
  }
}
function wd(t) {
  const { componentCls: r } = t,
    o = t.calc(t.controlPaddingHorizontalSM).sub(t.lineWidth).equal()
  return [
    Nr(t),
    Nr(
      Wt(t, {
        controlHeight: t.controlHeightSM,
        borderRadius: t.borderRadiusSM,
      }),
      'sm',
    ),
    {
      [`${r}-single${r}-sm`]: {
        [`&:not(${r}-customize-input)`]: {
          [`${r}-selection-search`]: { insetInlineStart: o, insetInlineEnd: o },
          [`${r}-selector`]: { padding: `0 ${U(o)}` },
          [`&${r}-show-arrow ${r}-selection-search`]: {
            insetInlineEnd: t.calc(o).add(t.calc(t.fontSize).mul(1.5)).equal(),
          },
          [`
            &${r}-show-arrow ${r}-selection-item,
            &${r}-show-arrow ${r}-selection-placeholder
          `]: { paddingInlineEnd: t.calc(t.fontSize).mul(1.5).equal() },
        },
      },
    },
    Nr(
      Wt(t, {
        controlHeight: t.singleItemHeightLG,
        fontSize: t.fontSizeLG,
        borderRadius: t.borderRadiusLG,
      }),
      'lg',
    ),
  ]
}
const _d = (t) => {
    const {
        fontSize: r,
        lineHeight: o,
        lineWidth: i,
        controlHeight: c,
        controlHeightSM: f,
        controlHeightLG: h,
        paddingXXS: d,
        controlPaddingHorizontal: m,
        zIndexPopupBase: g,
        colorText: b,
        fontWeightStrong: p,
        controlItemBgActive: C,
        controlItemBgHover: y,
        colorBgContainer: _,
        colorFillSecondary: w,
        colorBgContainerDisabled: S,
        colorTextDisabled: M,
        colorPrimaryHover: x,
        colorPrimary: E,
        controlOutline: R,
      } = t,
      q = d * 2,
      G = i * 2,
      D = Math.min(c - q, c - G),
      N = Math.min(f - q, f - G),
      W = Math.min(h - q, h - G)
    return {
      INTERNAL_FIXED_ITEM_MARGIN: Math.floor(d / 2),
      zIndexPopup: g + 50,
      optionSelectedColor: b,
      optionSelectedFontWeight: p,
      optionSelectedBg: C,
      optionActiveBg: y,
      optionPadding: `${(c - r * o) / 2}px ${m}px`,
      optionFontSize: r,
      optionLineHeight: o,
      optionHeight: c,
      selectorBg: _,
      clearBg: _,
      singleItemHeightLG: h,
      multipleItemBg: w,
      multipleItemBorderColor: 'transparent',
      multipleItemHeight: D,
      multipleItemHeightSM: N,
      multipleItemHeightLG: W,
      multipleSelectorBgDisabled: S,
      multipleItemColorDisabled: M,
      multipleItemBorderColorDisabled: 'transparent',
      showArrowPaddingInlineEnd: Math.ceil(t.fontSize * 1.25),
      hoverBorderColor: x,
      activeBorderColor: E,
      activeOutlineColor: R,
    }
  },
  Ci = (t, r) => {
    const { componentCls: o, antCls: i, controlOutlineWidth: c } = t
    return {
      [`&:not(${o}-customize-input) ${o}-selector`]: {
        border: `${U(t.lineWidth)} ${t.lineType} ${r.borderColor}`,
        background: t.selectorBg,
      },
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${i}-pagination-size-changer)`]:
        {
          [`&:hover ${o}-selector`]: { borderColor: r.hoverBorderHover },
          [`${o}-focused& ${o}-selector`]: {
            borderColor: r.activeBorderColor,
            boxShadow: `0 0 0 ${U(c)} ${r.activeOutlineColor}`,
            outline: 0,
          },
        },
    }
  },
  Wa = (t, r) => ({
    [`&${t.componentCls}-status-${r.status}`]: Object.assign({}, Ci(t, r)),
  }),
  Cd = (t) => ({
    '&-outlined': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            Ci(t, {
              borderColor: t.colorBorder,
              hoverBorderHover: t.hoverBorderColor,
              activeBorderColor: t.activeBorderColor,
              activeOutlineColor: t.activeOutlineColor,
            }),
          ),
          Wa(t, {
            status: 'error',
            borderColor: t.colorError,
            hoverBorderHover: t.colorErrorHover,
            activeBorderColor: t.colorError,
            activeOutlineColor: t.colorErrorOutline,
          }),
        ),
        Wa(t, {
          status: 'warning',
          borderColor: t.colorWarning,
          hoverBorderHover: t.colorWarningHover,
          activeBorderColor: t.colorWarning,
          activeOutlineColor: t.colorWarningOutline,
        }),
      ),
      {
        [`&${t.componentCls}-disabled`]: {
          [`&:not(${t.componentCls}-customize-input) ${t.componentCls}-selector`]:
            {
              background: t.colorBgContainerDisabled,
              color: t.colorTextDisabled,
            },
        },
        [`&${t.componentCls}-multiple ${t.componentCls}-selection-item`]: {
          background: t.multipleItemBg,
          border: `${U(t.lineWidth)} ${t.lineType} ${t.multipleItemBorderColor}`,
        },
      },
    ),
  }),
  xi = (t, r) => {
    const { componentCls: o, antCls: i } = t
    return {
      [`&:not(${o}-customize-input) ${o}-selector`]: {
        background: r.bg,
        border: `${U(t.lineWidth)} ${t.lineType} transparent`,
        color: r.color,
      },
      [`&:not(${o}-disabled):not(${o}-customize-input):not(${i}-pagination-size-changer)`]:
        {
          [`&:hover ${o}-selector`]: { background: r.hoverBg },
          [`${o}-focused& ${o}-selector`]: {
            background: t.selectorBg,
            borderColor: r.activeBorderColor,
            outline: 0,
          },
        },
    }
  },
  Fa = (t, r) => ({
    [`&${t.componentCls}-status-${r.status}`]: Object.assign({}, xi(t, r)),
  }),
  xd = (t) => ({
    '&-filled': Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {},
            xi(t, {
              bg: t.colorFillTertiary,
              hoverBg: t.colorFillSecondary,
              activeBorderColor: t.activeBorderColor,
              color: t.colorText,
            }),
          ),
          Fa(t, {
            status: 'error',
            bg: t.colorErrorBg,
            hoverBg: t.colorErrorBgHover,
            activeBorderColor: t.colorError,
            color: t.colorError,
          }),
        ),
        Fa(t, {
          status: 'warning',
          bg: t.colorWarningBg,
          hoverBg: t.colorWarningBgHover,
          activeBorderColor: t.colorWarning,
          color: t.colorWarning,
        }),
      ),
      {
        [`&${t.componentCls}-disabled`]: {
          [`&:not(${t.componentCls}-customize-input) ${t.componentCls}-selector`]:
            {
              borderColor: t.colorBorder,
              background: t.colorBgContainerDisabled,
              color: t.colorTextDisabled,
            },
        },
        [`&${t.componentCls}-multiple ${t.componentCls}-selection-item`]: {
          background: t.colorBgContainer,
          border: `${U(t.lineWidth)} ${t.lineType} ${t.colorSplit}`,
        },
      },
    ),
  }),
  $d = (t) => ({
    '&-borderless': {
      [`${t.componentCls}-selector`]: {
        background: 'transparent',
        borderColor: 'transparent',
      },
      [`&${t.componentCls}-disabled`]: {
        [`&:not(${t.componentCls}-customize-input) ${t.componentCls}-selector`]:
          { color: t.colorTextDisabled },
      },
      [`&${t.componentCls}-multiple ${t.componentCls}-selection-item`]: {
        background: t.multipleItemBg,
        border: `${U(t.lineWidth)} ${t.lineType} ${t.multipleItemBorderColor}`,
      },
      [`&${t.componentCls}-status-error`]: {
        [`${t.componentCls}-selection-item`]: { color: t.colorError },
      },
      [`&${t.componentCls}-status-warning`]: {
        [`${t.componentCls}-selection-item`]: { color: t.colorWarning },
      },
    },
  }),
  Md = (t) => ({
    [t.componentCls]: Object.assign(
      Object.assign(Object.assign({}, Cd(t)), xd(t)),
      $d(t),
    ),
  }),
  Od = (t) => {
    const { componentCls: r } = t
    return {
      position: 'relative',
      transition: `all ${t.motionDurationMid} ${t.motionEaseInOut}`,
      input: { cursor: 'pointer' },
      [`${r}-show-search&`]: {
        cursor: 'text',
        input: { cursor: 'auto', color: 'inherit', height: '100%' },
      },
      [`${r}-disabled&`]: {
        cursor: 'not-allowed',
        input: { cursor: 'not-allowed' },
      },
    }
  },
  Ed = (t) => {
    const { componentCls: r } = t
    return {
      [`${r}-selection-search-input`]: {
        margin: 0,
        padding: 0,
        background: 'transparent',
        border: 'none',
        outline: 'none',
        appearance: 'none',
        fontFamily: 'inherit',
        '&::-webkit-search-cancel-button': {
          display: 'none',
          '-webkit-appearance': 'none',
        },
      },
    }
  },
  Id = (t) => {
    const {
      antCls: r,
      componentCls: o,
      inputPaddingHorizontalBase: i,
      iconCls: c,
    } = t
    return {
      [o]: Object.assign(Object.assign({}, yn(t)), {
        position: 'relative',
        display: 'inline-block',
        cursor: 'pointer',
        [`&:not(${o}-customize-input) ${o}-selector`]: Object.assign(
          Object.assign({}, Od(t)),
          Ed(t),
        ),
        [`${o}-selection-item`]: Object.assign(
          Object.assign(
            {
              flex: 1,
              fontWeight: 'normal',
              position: 'relative',
              userSelect: 'none',
            },
            pn,
          ),
          { [`> ${r}-typography`]: { display: 'inline' } },
        ),
        [`${o}-selection-placeholder`]: Object.assign(Object.assign({}, pn), {
          flex: 1,
          color: t.colorTextPlaceholder,
          pointerEvents: 'none',
        }),
        [`${o}-arrow`]: Object.assign(Object.assign({}, ni()), {
          position: 'absolute',
          top: '50%',
          insetInlineStart: 'auto',
          insetInlineEnd: i,
          height: t.fontSizeIcon,
          marginTop: t.calc(t.fontSizeIcon).mul(-1).div(2).equal(),
          color: t.colorTextQuaternary,
          fontSize: t.fontSizeIcon,
          lineHeight: 1,
          textAlign: 'center',
          pointerEvents: 'none',
          display: 'flex',
          alignItems: 'center',
          transition: `opacity ${t.motionDurationSlow} ease`,
          [c]: {
            verticalAlign: 'top',
            transition: `transform ${t.motionDurationSlow}`,
            '> svg': { verticalAlign: 'top' },
            [`&:not(${o}-suffix)`]: { pointerEvents: 'auto' },
          },
          [`${o}-disabled &`]: { cursor: 'not-allowed' },
          '> *:not(:last-child)': { marginInlineEnd: 8 },
        }),
        [`${o}-clear`]: {
          position: 'absolute',
          top: '50%',
          insetInlineStart: 'auto',
          insetInlineEnd: i,
          zIndex: 1,
          display: 'inline-block',
          width: t.fontSizeIcon,
          height: t.fontSizeIcon,
          marginTop: t.calc(t.fontSizeIcon).mul(-1).div(2).equal(),
          color: t.colorTextQuaternary,
          fontSize: t.fontSizeIcon,
          fontStyle: 'normal',
          lineHeight: 1,
          textAlign: 'center',
          textTransform: 'none',
          cursor: 'pointer',
          opacity: 0,
          transition: `color ${t.motionDurationMid} ease, opacity ${t.motionDurationSlow} ease`,
          textRendering: 'auto',
          '&:before': { display: 'block' },
          '&:hover': { color: t.colorTextTertiary },
        },
        [`&:hover ${o}-clear`]: {
          opacity: 1,
          background: t.colorBgBase,
          borderRadius: '50%',
        },
      }),
      [`${o}-has-feedback`]: {
        [`${o}-clear`]: {
          insetInlineEnd: t.calc(i).add(t.fontSize).add(t.paddingXS).equal(),
        },
      },
    }
  },
  Rd = (t) => {
    const { componentCls: r } = t
    return [
      { [r]: { [`&${r}-in-form-item`]: { width: '100%' } } },
      Id(t),
      wd(t),
      Sd(t),
      vd(t),
      { [`${r}-rtl`]: { direction: 'rtl' } },
      lc(t, { borderElCls: `${r}-selector`, focusElCls: `${r}-focused` }),
    ]
  },
  Dd = bn(
    'Select',
    (t, r) => {
      let { rootPrefixCls: o } = r
      const i = Wt(t, {
        rootPrefixCls: o,
        inputPaddingHorizontalBase: t.calc(t.paddingSM).sub(1).equal(),
        multipleSelectItemHeight: t.multipleItemHeight,
        selectHeight: t.controlHeight,
      })
      return [Rd(i), Md(i)]
    },
    _d,
    { unitless: { optionLineHeight: !0, optionSelectedFontWeight: !0 } },
  )
var Td = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
          },
        },
      ],
    },
    name: 'down',
    theme: 'outlined',
  },
  Pd = function (r, o) {
    return l.createElement(Nn, at({}, r, { ref: o, icon: Td }))
  },
  Nd = l.forwardRef(Pd)
function Ld(t) {
  let {
    suffixIcon: r,
    clearIcon: o,
    menuItemSelectedIcon: i,
    removeIcon: c,
    loading: f,
    multiple: h,
    hasFeedback: d,
    prefixCls: m,
    showSuffixIcon: g,
    feedbackIcon: b,
    showArrow: p,
    componentName: C,
  } = t
  const y = o ?? l.createElement(cc, null),
    _ = (x) =>
      r === null && !d && !p
        ? null
        : l.createElement(l.Fragment, null, g !== !1 && x, d && b)
  let w = null
  if (r !== void 0) w = _(r)
  else if (f) w = _(l.createElement(dc, { spin: !0 }))
  else {
    const x = `${m}-suffix`
    w = (E) => {
      let { open: R, showSearch: q } = E
      return _(
        R && q
          ? l.createElement(ri, { className: x })
          : l.createElement(Nd, { className: x }),
      )
    }
  }
  let S = null
  i !== void 0 ? (S = i) : h ? (S = l.createElement(uc, null)) : (S = null)
  let M = null
  return (
    c !== void 0 ? (M = c) : (M = l.createElement(ui, null)),
    { clearIcon: y, suffixIcon: w, itemIcon: S, removeIcon: M }
  )
}
function zd(t, r) {
  return r !== void 0 ? r : t !== null
}
var Yd = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
const $i = 'SECRET_COMBOBOX_MODE_DO_NOT_USE',
  Hd = (t, r) => {
    var o
    const {
        prefixCls: i,
        bordered: c,
        className: f,
        rootClassName: h,
        getPopupContainer: d,
        popupClassName: m,
        dropdownClassName: g,
        listHeight: b = 256,
        placement: p,
        listItemHeight: C,
        size: y,
        disabled: _,
        notFoundContent: w,
        status: S,
        builtinPlacements: M,
        dropdownMatchSelectWidth: x,
        popupMatchSelectWidth: E,
        direction: R,
        style: q,
        allowClear: G,
        variant: D,
        dropdownStyle: N,
        transitionName: W,
        tagRender: Y,
        maxCount: F,
      } = t,
      T = Yd(t, [
        'prefixCls',
        'bordered',
        'className',
        'rootClassName',
        'getPopupContainer',
        'popupClassName',
        'dropdownClassName',
        'listHeight',
        'placement',
        'listItemHeight',
        'size',
        'disabled',
        'notFoundContent',
        'status',
        'builtinPlacements',
        'dropdownMatchSelectWidth',
        'popupMatchSelectWidth',
        'direction',
        'style',
        'allowClear',
        'variant',
        'dropdownStyle',
        'transitionName',
        'tagRender',
        'maxCount',
      ]),
      {
        getPopupContainer: L,
        getPrefixCls: P,
        renderEmpty: ee,
        direction: se,
        virtual: I,
        popupMatchSelectWidth: V,
        popupOverflow: re,
        select: z,
      } = l.useContext(_t),
      [, Q] = Wr(),
      Z = C ?? (Q == null ? void 0 : Q.controlHeight),
      A = P('select', i),
      B = P(),
      O = R ?? se,
      { compactSize: ge, compactItemClassnames: ie } = ai(A, O),
      [De, Pe] = fc('select', D, c),
      J = Fr(A),
      [H, ae, be] = Dd(A, J),
      j = l.useMemo(() => {
        const { mode: it } = t
        if (it !== 'combobox') return it === $i ? 'combobox' : it
      }, [t.mode]),
      de = j === 'multiple' || j === 'tags',
      Ie = zd(t.suffixIcon, t.showArrow),
      Ye = (o = E ?? x) !== null && o !== void 0 ? o : V,
      {
        status: ye,
        hasFeedback: Ce,
        isFormItemInput: Be,
        feedbackIcon: ze,
      } = l.useContext(Tn),
      Xe = si(ye, S)
    let Je
    w !== void 0
      ? (Je = w)
      : j === 'combobox'
        ? (Je = null)
        : (Je =
            (ee == null ? void 0 : ee('Select')) ||
            l.createElement(fd, { componentName: 'Select' }))
    const {
        suffixIcon: Ue,
        itemIcon: ut,
        removeIcon: Se,
        clearIcon: qe,
      } = Ld(
        Object.assign(Object.assign({}, T), {
          multiple: de,
          hasFeedback: Ce,
          feedbackIcon: ze,
          showSuffixIcon: Ie,
          prefixCls: A,
          componentName: 'Select',
        }),
      ),
      Le = G === !0 ? { clearIcon: qe } : G,
      Ge = an(T, ['suffixIcon', 'itemIcon']),
      xe = ve(m || g, { [`${A}-dropdown-${O}`]: O === 'rtl' }, h, be, J, ae),
      mt = Ln((it) => {
        var dt
        return (dt = y ?? ge) !== null && dt !== void 0 ? dt : it
      }),
      vt = l.useContext(ii),
      Ke = _ ?? vt,
      ot = ve(
        {
          [`${A}-lg`]: mt === 'large',
          [`${A}-sm`]: mt === 'small',
          [`${A}-rtl`]: O === 'rtl',
          [`${A}-${De}`]: Pe,
          [`${A}-in-form-item`]: Be,
        },
        hc(A, Xe, Ce),
        ie,
        z == null ? void 0 : z.className,
        f,
        h,
        be,
        J,
        ae,
      ),
      gt = l.useMemo(
        () => (p !== void 0 ? p : O === 'rtl' ? 'bottomRight' : 'bottomLeft'),
        [p, O],
      ),
      [Ze] = mc('SelectLike', N == null ? void 0 : N.zIndex)
    return H(
      l.createElement(
        Vr,
        Object.assign(
          { ref: r, virtual: I, showSearch: z == null ? void 0 : z.showSearch },
          Ge,
          {
            style: Object.assign(
              Object.assign({}, z == null ? void 0 : z.style),
              q,
            ),
            dropdownMatchSelectWidth: Ye,
            transitionName: oi(B, 'slide-up', W),
            builtinPlacements: md(M, re),
            listHeight: b,
            listItemHeight: Z,
            mode: j,
            prefixCls: A,
            placement: gt,
            direction: O,
            suffixIcon: Ue,
            menuItemSelectedIcon: ut,
            removeIcon: Se,
            allowClear: Le,
            notFoundContent: Je,
            className: ot,
            getPopupContainer: d || L,
            dropdownClassName: xe,
            disabled: Ke,
            dropdownStyle: Object.assign(Object.assign({}, N), { zIndex: Ze }),
            maxCount: de ? F : void 0,
            tagRender: de ? Y : void 0,
          },
        ),
      ),
    )
  },
  zn = l.forwardRef(Hd),
  kd = vc(zn)
zn.SECRET_COMBOBOX_MODE_DO_NOT_USE = $i
zn.Option = Br
zn.OptGroup = jr
zn._InternalPanelDoNotUseOrYouWillBeFired = kd
const ir = l.createContext(null)
var Wd = function (r) {
    var o = r.activeTabOffset,
      i = r.horizontal,
      c = r.rtl,
      f = r.indicator,
      h = f === void 0 ? {} : f,
      d = h.size,
      m = h.align,
      g = m === void 0 ? 'center' : m,
      b = l.useState(),
      p = ce(b, 2),
      C = p[0],
      y = p[1],
      _ = l.useRef(),
      w = rn.useCallback(
        function (M) {
          return typeof d == 'function' ? d(M) : typeof d == 'number' ? d : M
        },
        [d],
      )
    function S() {
      Nt.cancel(_.current)
    }
    return (
      l.useEffect(
        function () {
          var M = {}
          if (o)
            if (i) {
              M.width = w(o.width)
              var x = c ? 'right' : 'left'
              g === 'start' && (M[x] = o[x]),
                g === 'center' &&
                  ((M[x] = o[x] + o.width / 2),
                  (M.transform = c ? 'translateX(50%)' : 'translateX(-50%)')),
                g === 'end' &&
                  ((M[x] = o[x] + o.width), (M.transform = 'translateX(-100%)'))
            } else
              (M.height = w(o.height)),
                g === 'start' && (M.top = o.top),
                g === 'center' &&
                  ((M.top = o.top + o.height / 2),
                  (M.transform = 'translateY(-50%)')),
                g === 'end' &&
                  ((M.top = o.top + o.height),
                  (M.transform = 'translateY(-100%)'))
          return (
            S(),
            (_.current = Nt(function () {
              y(M)
            })),
            S
          )
        },
        [o, i, c, g, w],
      ),
      { style: C }
    )
  },
  Aa = { width: 0, height: 0, left: 0, top: 0 }
function Fd(t, r, o) {
  return l.useMemo(
    function () {
      for (
        var i,
          c = new Map(),
          f = r.get((i = t[0]) === null || i === void 0 ? void 0 : i.key) || Aa,
          h = f.left + f.width,
          d = 0;
        d < t.length;
        d += 1
      ) {
        var m = t[d].key,
          g = r.get(m)
        if (!g) {
          var b
          g =
            r.get((b = t[d - 1]) === null || b === void 0 ? void 0 : b.key) ||
            Aa
        }
        var p = c.get(m) || _e({}, g)
        ;(p.right = h - p.left - p.width), c.set(m, p)
      }
      return c
    },
    [
      t
        .map(function (i) {
          return i.key
        })
        .join('_'),
      r,
      o,
    ],
  )
}
function ja(t, r) {
  var o = l.useRef(t),
    i = l.useState({}),
    c = ce(i, 2),
    f = c[1]
  function h(d) {
    var m = typeof d == 'function' ? d(o.current) : d
    m !== o.current && r(m, o.current), (o.current = m), f({})
  }
  return [o.current, h]
}
var Ad = 0.1,
  Ba = 0.01,
  Qn = 20,
  Va = Math.pow(0.995, Qn)
function jd(t, r) {
  var o = l.useState(),
    i = ce(o, 2),
    c = i[0],
    f = i[1],
    h = l.useState(0),
    d = ce(h, 2),
    m = d[0],
    g = d[1],
    b = l.useState(0),
    p = ce(b, 2),
    C = p[0],
    y = p[1],
    _ = l.useState(),
    w = ce(_, 2),
    S = w[0],
    M = w[1],
    x = l.useRef()
  function E(W) {
    var Y = W.touches[0],
      F = Y.screenX,
      T = Y.screenY
    f({ x: F, y: T }), window.clearInterval(x.current)
  }
  function R(W) {
    if (c) {
      var Y = W.touches[0],
        F = Y.screenX,
        T = Y.screenY
      f({ x: F, y: T })
      var L = F - c.x,
        P = T - c.y
      r(L, P)
      var ee = Date.now()
      g(ee), y(ee - m), M({ x: L, y: P })
    }
  }
  function q() {
    if (c && (f(null), M(null), S)) {
      var W = S.x / C,
        Y = S.y / C,
        F = Math.abs(W),
        T = Math.abs(Y)
      if (Math.max(F, T) < Ad) return
      var L = W,
        P = Y
      x.current = window.setInterval(function () {
        if (Math.abs(L) < Ba && Math.abs(P) < Ba) {
          window.clearInterval(x.current)
          return
        }
        ;(L *= Va), (P *= Va), r(L * Qn, P * Qn)
      }, Qn)
    }
  }
  var G = l.useRef()
  function D(W) {
    var Y = W.deltaX,
      F = W.deltaY,
      T = 0,
      L = Math.abs(Y),
      P = Math.abs(F)
    L === P
      ? (T = G.current === 'x' ? Y : F)
      : L > P
        ? ((T = Y), (G.current = 'x'))
        : ((T = F), (G.current = 'y')),
      r(-T, -T) && W.preventDefault()
  }
  var N = l.useRef(null)
  ;(N.current = { onTouchStart: E, onTouchMove: R, onTouchEnd: q, onWheel: D }),
    l.useEffect(function () {
      function W(L) {
        N.current.onTouchStart(L)
      }
      function Y(L) {
        N.current.onTouchMove(L)
      }
      function F(L) {
        N.current.onTouchEnd(L)
      }
      function T(L) {
        N.current.onWheel(L)
      }
      return (
        document.addEventListener('touchmove', Y, { passive: !1 }),
        document.addEventListener('touchend', F, { passive: !0 }),
        t.current.addEventListener('touchstart', W, { passive: !0 }),
        t.current.addEventListener('wheel', T, { passive: !1 }),
        function () {
          document.removeEventListener('touchmove', Y),
            document.removeEventListener('touchend', F)
        }
      )
    }, [])
}
function Mi(t) {
  var r = l.useState(0),
    o = ce(r, 2),
    i = o[0],
    c = o[1],
    f = l.useRef(0),
    h = l.useRef()
  return (
    (h.current = t),
    gc(
      function () {
        var d
        ;(d = h.current) === null || d === void 0 || d.call(h)
      },
      [i],
    ),
    function () {
      f.current === i && ((f.current += 1), c(f.current))
    }
  )
}
function Bd(t) {
  var r = l.useRef([]),
    o = l.useState({}),
    i = ce(o, 2),
    c = i[1],
    f = l.useRef(typeof t == 'function' ? t() : t),
    h = Mi(function () {
      var m = f.current
      r.current.forEach(function (g) {
        m = g(m)
      }),
        (r.current = []),
        (f.current = m),
        c({})
    })
  function d(m) {
    r.current.push(m), h()
  }
  return [f.current, d]
}
var Ua = { width: 0, height: 0, left: 0, top: 0, right: 0 }
function Vd(t, r, o, i, c, f, h) {
  var d = h.tabs,
    m = h.tabPosition,
    g = h.rtl,
    b,
    p,
    C
  return (
    ['top', 'bottom'].includes(m)
      ? ((b = 'width'), (p = g ? 'right' : 'left'), (C = Math.abs(o)))
      : ((b = 'height'), (p = 'top'), (C = -o)),
    l.useMemo(
      function () {
        if (!d.length) return [0, 0]
        for (var y = d.length, _ = y, w = 0; w < y; w += 1) {
          var S = t.get(d[w].key) || Ua
          if (Math.floor(S[p] + S[b]) > Math.floor(C + r)) {
            _ = w - 1
            break
          }
        }
        for (var M = 0, x = y - 1; x >= 0; x -= 1) {
          var E = t.get(d[x].key) || Ua
          if (E[p] < C) {
            M = x + 1
            break
          }
        }
        return M >= _ ? [0, 0] : [M, _]
      },
      [
        t,
        r,
        i,
        c,
        f,
        C,
        m,
        d
          .map(function (y) {
            return y.key
          })
          .join('_'),
        g,
      ],
    )
  )
}
function Ga(t) {
  var r
  return (
    t instanceof Map
      ? ((r = {}),
        t.forEach(function (o, i) {
          r[i] = o
        }))
      : (r = t),
    JSON.stringify(r)
  )
}
var Ud = 'TABS_DQ'
function Oi(t) {
  return String(t).replace(/"/g, Ud)
}
function Ei(t, r, o, i) {
  return !(!o || i || t === !1 || (t === void 0 && (r === !1 || r === null)))
}
var Ii = l.forwardRef(function (t, r) {
    var o = t.prefixCls,
      i = t.editable,
      c = t.locale,
      f = t.style
    return !i || i.showAdd === !1
      ? null
      : l.createElement(
          'button',
          {
            ref: r,
            type: 'button',
            className: ''.concat(o, '-nav-add'),
            style: f,
            'aria-label': (c == null ? void 0 : c.addAriaLabel) || 'Add tab',
            onClick: function (d) {
              i.onEdit('add', { event: d })
            },
          },
          i.addIcon || '+',
        )
  }),
  Ka = l.forwardRef(function (t, r) {
    var o = t.position,
      i = t.prefixCls,
      c = t.extra
    if (!c) return null
    var f,
      h = {}
    return (
      Ft(c) === 'object' && !l.isValidElement(c) ? (h = c) : (h.right = c),
      o === 'right' && (f = h.right),
      o === 'left' && (f = h.left),
      f
        ? l.createElement(
            'div',
            { className: ''.concat(i, '-extra-content'), ref: r },
            f,
          )
        : null
    )
  }),
  Gd = l.forwardRef(function (t, r) {
    var o = t.prefixCls,
      i = t.id,
      c = t.tabs,
      f = t.locale,
      h = t.mobile,
      d = t.more,
      m = d === void 0 ? {} : d,
      g = t.style,
      b = t.className,
      p = t.editable,
      C = t.tabBarGutter,
      y = t.rtl,
      _ = t.removeAriaLabel,
      w = t.onTabClick,
      S = t.getPopupContainer,
      M = t.popupClassName,
      x = l.useState(!1),
      E = ce(x, 2),
      R = E[0],
      q = E[1],
      G = l.useState(null),
      D = ce(G, 2),
      N = D[0],
      W = D[1],
      Y = m.icon,
      F = Y === void 0 ? 'More' : Y,
      T = ''.concat(i, '-more-popup'),
      L = ''.concat(o, '-dropdown'),
      P = N !== null ? ''.concat(T, '-').concat(N) : null,
      ee = f == null ? void 0 : f.dropdownAriaLabel
    function se(A, B) {
      A.preventDefault(),
        A.stopPropagation(),
        p.onEdit('remove', { key: B, event: A })
    }
    var I = l.createElement(
      pc,
      {
        onClick: function (B) {
          var O = B.key,
            ge = B.domEvent
          w(O, ge), q(!1)
        },
        prefixCls: ''.concat(L, '-menu'),
        id: T,
        tabIndex: -1,
        role: 'listbox',
        'aria-activedescendant': P,
        selectedKeys: [N],
        'aria-label': ee !== void 0 ? ee : 'expanded dropdown',
      },
      c.map(function (A) {
        var B = A.closable,
          O = A.disabled,
          ge = A.closeIcon,
          ie = A.key,
          De = A.label,
          Pe = Ei(B, ge, p, O)
        return l.createElement(
          bc,
          {
            key: ie,
            id: ''.concat(T, '-').concat(ie),
            role: 'option',
            'aria-controls': i && ''.concat(i, '-panel-').concat(ie),
            disabled: O,
          },
          l.createElement('span', null, De),
          Pe &&
            l.createElement(
              'button',
              {
                type: 'button',
                'aria-label': _ || 'remove',
                tabIndex: 0,
                className: ''.concat(L, '-menu-item-remove'),
                onClick: function (H) {
                  H.stopPropagation(), se(H, ie)
                },
              },
              ge || p.removeIcon || '×',
            ),
        )
      }),
    )
    function V(A) {
      for (
        var B = c.filter(function (Pe) {
            return !Pe.disabled
          }),
          O =
            B.findIndex(function (Pe) {
              return Pe.key === N
            }) || 0,
          ge = B.length,
          ie = 0;
        ie < ge;
        ie += 1
      ) {
        O = (O + A + ge) % ge
        var De = B[O]
        if (!De.disabled) {
          W(De.key)
          return
        }
      }
    }
    function re(A) {
      var B = A.which
      if (!R) {
        ;[Oe.DOWN, Oe.SPACE, Oe.ENTER].includes(B) &&
          (q(!0), A.preventDefault())
        return
      }
      switch (B) {
        case Oe.UP:
          V(-1), A.preventDefault()
          break
        case Oe.DOWN:
          V(1), A.preventDefault()
          break
        case Oe.ESC:
          q(!1)
          break
        case Oe.SPACE:
        case Oe.ENTER:
          N !== null && w(N, A)
          break
      }
    }
    l.useEffect(
      function () {
        var A = document.getElementById(P)
        A && A.scrollIntoView && A.scrollIntoView(!1)
      },
      [N],
    ),
      l.useEffect(
        function () {
          R || W(null)
        },
        [R],
      )
    var z = Ee({}, y ? 'marginRight' : 'marginLeft', C)
    c.length || ((z.visibility = 'hidden'), (z.order = 1))
    var Q = ve(Ee({}, ''.concat(L, '-rtl'), y)),
      Z = h
        ? null
        : l.createElement(
            yc,
            at(
              {
                prefixCls: L,
                overlay: I,
                visible: c.length ? R : !1,
                onVisibleChange: q,
                overlayClassName: ve(Q, M),
                mouseEnterDelay: 0.1,
                mouseLeaveDelay: 0.1,
                getPopupContainer: S,
              },
              m,
            ),
            l.createElement(
              'button',
              {
                type: 'button',
                className: ''.concat(o, '-nav-more'),
                style: z,
                tabIndex: -1,
                'aria-hidden': 'true',
                'aria-haspopup': 'listbox',
                'aria-controls': T,
                id: ''.concat(i, '-more'),
                'aria-expanded': R,
                onKeyDown: re,
              },
              F,
            ),
          )
    return l.createElement(
      'div',
      { className: ve(''.concat(o, '-nav-operations'), b), style: g, ref: r },
      Z,
      l.createElement(Ii, { prefixCls: o, locale: f, editable: p }),
    )
  })
const Kd = l.memo(Gd, function (t, r) {
  return r.tabMoving
})
var qd = function (r) {
    var o = r.prefixCls,
      i = r.id,
      c = r.active,
      f = r.tab,
      h = f.key,
      d = f.label,
      m = f.disabled,
      g = f.closeIcon,
      b = f.icon,
      p = r.closable,
      C = r.renderWrapper,
      y = r.removeAriaLabel,
      _ = r.editable,
      w = r.onClick,
      S = r.onFocus,
      M = r.style,
      x = ''.concat(o, '-tab'),
      E = Ei(p, g, _, m)
    function R(N) {
      m || w(N)
    }
    function q(N) {
      N.preventDefault(),
        N.stopPropagation(),
        _.onEdit('remove', { key: h, event: N })
    }
    var G = l.useMemo(
        function () {
          return b && typeof d == 'string'
            ? l.createElement('span', null, d)
            : d
        },
        [d, b],
      ),
      D = l.createElement(
        'div',
        {
          key: h,
          'data-node-key': Oi(h),
          className: ve(
            x,
            Ee(
              Ee(
                Ee({}, ''.concat(x, '-with-remove'), E),
                ''.concat(x, '-active'),
                c,
              ),
              ''.concat(x, '-disabled'),
              m,
            ),
          ),
          style: M,
          onClick: R,
        },
        l.createElement(
          'div',
          {
            role: 'tab',
            'aria-selected': c,
            id: i && ''.concat(i, '-tab-').concat(h),
            className: ''.concat(x, '-btn'),
            'aria-controls': i && ''.concat(i, '-panel-').concat(h),
            'aria-disabled': m,
            tabIndex: m ? null : 0,
            onClick: function (W) {
              W.stopPropagation(), R(W)
            },
            onKeyDown: function (W) {
              ;[Oe.SPACE, Oe.ENTER].includes(W.which) &&
                (W.preventDefault(), R(W))
            },
            onFocus: S,
          },
          b && l.createElement('span', { className: ''.concat(x, '-icon') }, b),
          d && G,
        ),
        E &&
          l.createElement(
            'button',
            {
              type: 'button',
              'aria-label': y || 'remove',
              tabIndex: 0,
              className: ''.concat(x, '-remove'),
              onClick: function (W) {
                W.stopPropagation(), q(W)
              },
            },
            g || _.removeIcon || '×',
          ),
      )
    return C ? C(D) : D
  },
  Xd = function (r, o) {
    var i = r.offsetWidth,
      c = r.offsetHeight,
      f = r.offsetTop,
      h = r.offsetLeft,
      d = r.getBoundingClientRect(),
      m = d.width,
      g = d.height,
      b = d.left,
      p = d.top
    return Math.abs(m - i) < 1 ? [m, g, b - o.left, p - o.top] : [i, c, h, f]
  },
  mn = function (r) {
    var o = r.current || {},
      i = o.offsetWidth,
      c = i === void 0 ? 0 : i,
      f = o.offsetHeight,
      h = f === void 0 ? 0 : f
    if (r.current) {
      var d = r.current.getBoundingClientRect(),
        m = d.width,
        g = d.height
      if (Math.abs(m - c) < 1) return [m, g]
    }
    return [c, h]
  },
  qn = function (r, o) {
    return r[o ? 0 : 1]
  },
  qa = l.forwardRef(function (t, r) {
    var o = t.className,
      i = t.style,
      c = t.id,
      f = t.animated,
      h = t.activeKey,
      d = t.rtl,
      m = t.extra,
      g = t.editable,
      b = t.locale,
      p = t.tabPosition,
      C = t.tabBarGutter,
      y = t.children,
      _ = t.onTabClick,
      w = t.onTabScroll,
      S = t.indicator,
      M = l.useContext(ir),
      x = M.prefixCls,
      E = M.tabs,
      R = l.useRef(null),
      q = l.useRef(null),
      G = l.useRef(null),
      D = l.useRef(null),
      N = l.useRef(null),
      W = l.useRef(null),
      Y = l.useRef(null),
      F = p === 'top' || p === 'bottom',
      T = ja(0, function (he, me) {
        F && w && w({ direction: he > me ? 'left' : 'right' })
      }),
      L = ce(T, 2),
      P = L[0],
      ee = L[1],
      se = ja(0, function (he, me) {
        !F && w && w({ direction: he > me ? 'top' : 'bottom' })
      }),
      I = ce(se, 2),
      V = I[0],
      re = I[1],
      z = l.useState([0, 0]),
      Q = ce(z, 2),
      Z = Q[0],
      A = Q[1],
      B = l.useState([0, 0]),
      O = ce(B, 2),
      ge = O[0],
      ie = O[1],
      De = l.useState([0, 0]),
      Pe = ce(De, 2),
      J = Pe[0],
      H = Pe[1],
      ae = l.useState([0, 0]),
      be = ce(ae, 2),
      j = be[0],
      de = be[1],
      Ie = Bd(new Map()),
      Ye = ce(Ie, 2),
      ye = Ye[0],
      Ce = Ye[1],
      Be = Fd(E, ye, ge[0]),
      ze = qn(Z, F),
      Xe = qn(ge, F),
      Je = qn(J, F),
      Ue = qn(j, F),
      ut = Math.floor(ze) < Math.floor(Xe + Je),
      Se = ut ? ze - Ue : ze - Je,
      qe = ''.concat(x, '-nav-operations-hidden'),
      Le = 0,
      Ge = 0
    F && d
      ? ((Le = 0), (Ge = Math.max(0, Xe - Se)))
      : ((Le = Math.min(0, Se - Xe)), (Ge = 0))
    function xe(he) {
      return he < Le ? Le : he > Ge ? Ge : he
    }
    var mt = l.useRef(null),
      vt = l.useState(),
      Ke = ce(vt, 2),
      ot = Ke[0],
      gt = Ke[1]
    function Ze() {
      gt(Date.now())
    }
    function it() {
      mt.current && clearTimeout(mt.current)
    }
    jd(D, function (he, me) {
      function $e(Ae, It) {
        Ae(function (ht) {
          var xt = xe(ht + It)
          return xt
        })
      }
      return ut ? (F ? $e(ee, he) : $e(re, me), it(), Ze(), !0) : !1
    }),
      l.useEffect(
        function () {
          return (
            it(),
            ot &&
              (mt.current = setTimeout(function () {
                gt(0)
              }, 100)),
            it
          )
        },
        [ot],
      )
    var dt = Vd(Be, Se, F ? P : V, Xe, Je, Ue, _e(_e({}, t), {}, { tabs: E })),
      Ct = ce(dt, 2),
      zt = Ct[0],
      pt = Ct[1],
      Et = Dn(function () {
        var he =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : h,
          me = Be.get(he) || { width: 0, height: 0, left: 0, right: 0, top: 0 }
        if (F) {
          var $e = P
          d
            ? me.right < P
              ? ($e = me.right)
              : me.right + me.width > P + Se && ($e = me.right + me.width - Se)
            : me.left < -P
              ? ($e = -me.left)
              : me.left + me.width > -P + Se &&
                ($e = -(me.left + me.width - Se)),
            re(0),
            ee(xe($e))
        } else {
          var Ae = V
          me.top < -V
            ? (Ae = -me.top)
            : me.top + me.height > -V + Se && (Ae = -(me.top + me.height - Se)),
            ee(0),
            re(xe(Ae))
        }
      }),
      bt = {}
    p === 'top' || p === 'bottom'
      ? (bt[d ? 'marginRight' : 'marginLeft'] = C)
      : (bt.marginTop = C)
    var yt = E.map(function (he, me) {
        var $e = he.key
        return l.createElement(qd, {
          id: c,
          prefixCls: x,
          key: $e,
          tab: he,
          style: me === 0 ? void 0 : bt,
          closable: he.closable,
          editable: g,
          active: $e === h,
          renderWrapper: y,
          removeAriaLabel: b == null ? void 0 : b.removeAriaLabel,
          onClick: function (It) {
            _($e, It)
          },
          onFocus: function () {
            Et($e),
              Ze(),
              D.current &&
                (d || (D.current.scrollLeft = 0), (D.current.scrollTop = 0))
          },
        })
      }),
      K = function () {
        return Ce(function () {
          var me,
            $e = new Map(),
            Ae =
              (me = N.current) === null || me === void 0
                ? void 0
                : me.getBoundingClientRect()
          return (
            E.forEach(function (It) {
              var ht,
                xt = It.key,
                le =
                  (ht = N.current) === null || ht === void 0
                    ? void 0
                    : ht.querySelector('[data-node-key="'.concat(Oi(xt), '"]'))
              if (le) {
                var ne = Xd(le, Ae),
                  Me = ce(ne, 4),
                  He = Me[0],
                  st = Me[1],
                  qt = Me[2],
                  Yt = Me[3]
                $e.set(xt, { width: He, height: st, left: qt, top: Yt })
              }
            }),
            $e
          )
        })
      }
    l.useEffect(
      function () {
        K()
      },
      [
        E.map(function (he) {
          return he.key
        }).join('_'),
      ],
    )
    var St = Mi(function () {
        var he = mn(R),
          me = mn(q),
          $e = mn(G)
        A([he[0] - me[0] - $e[0], he[1] - me[1] - $e[1]])
        var Ae = mn(Y)
        H(Ae)
        var It = mn(W)
        de(It)
        var ht = mn(N)
        ie([ht[0] - Ae[0], ht[1] - Ae[1]]), K()
      }),
      Lt = E.slice(0, zt),
      ke = E.slice(pt + 1),
      nt = [].concat(Ot(Lt), Ot(ke)),
      we = Be.get(h),
      ft = Wd({ activeTabOffset: we, horizontal: F, indicator: S, rtl: d }),
      X = ft.style
    l.useEffect(
      function () {
        Et()
      },
      [h, Le, Ge, Ga(we), Ga(Be), F],
    ),
      l.useEffect(
        function () {
          St()
        },
        [d],
      )
    var fe = !!nt.length,
      oe = ''.concat(x, '-nav-wrap'),
      ue,
      pe,
      Ne,
      Qe
    return (
      F
        ? d
          ? ((pe = P > 0), (ue = P !== Ge))
          : ((ue = P < 0), (pe = P !== Le))
        : ((Ne = V < 0), (Qe = V !== Le)),
      l.createElement(
        In,
        { onResize: St },
        l.createElement(
          'div',
          {
            ref: ei(r, R),
            role: 'tablist',
            className: ve(''.concat(x, '-nav'), o),
            style: i,
            onKeyDown: function () {
              Ze()
            },
          },
          l.createElement(Ka, {
            ref: q,
            position: 'left',
            extra: m,
            prefixCls: x,
          }),
          l.createElement(
            In,
            { onResize: St },
            l.createElement(
              'div',
              {
                className: ve(
                  oe,
                  Ee(
                    Ee(
                      Ee(
                        Ee({}, ''.concat(oe, '-ping-left'), ue),
                        ''.concat(oe, '-ping-right'),
                        pe,
                      ),
                      ''.concat(oe, '-ping-top'),
                      Ne,
                    ),
                    ''.concat(oe, '-ping-bottom'),
                    Qe,
                  ),
                ),
                ref: D,
              },
              l.createElement(
                In,
                { onResize: St },
                l.createElement(
                  'div',
                  {
                    ref: N,
                    className: ''.concat(x, '-nav-list'),
                    style: {
                      transform: 'translate('
                        .concat(P, 'px, ')
                        .concat(V, 'px)'),
                      transition: ot ? 'none' : void 0,
                    },
                  },
                  yt,
                  l.createElement(Ii, {
                    ref: Y,
                    prefixCls: x,
                    locale: b,
                    editable: g,
                    style: _e(
                      _e({}, yt.length === 0 ? void 0 : bt),
                      {},
                      { visibility: fe ? 'hidden' : null },
                    ),
                  }),
                  l.createElement('div', {
                    className: ve(
                      ''.concat(x, '-ink-bar'),
                      Ee({}, ''.concat(x, '-ink-bar-animated'), f.inkBar),
                    ),
                    style: X,
                  }),
                ),
              ),
            ),
          ),
          l.createElement(
            Kd,
            at({}, t, {
              removeAriaLabel: b == null ? void 0 : b.removeAriaLabel,
              ref: W,
              prefixCls: x,
              tabs: nt,
              className: !fe && qe,
              tabMoving: !!ot,
            }),
          ),
          l.createElement(Ka, {
            ref: G,
            position: 'right',
            extra: m,
            prefixCls: x,
          }),
        ),
      )
    )
  }),
  Ri = l.forwardRef(function (t, r) {
    var o = t.prefixCls,
      i = t.className,
      c = t.style,
      f = t.id,
      h = t.active,
      d = t.tabKey,
      m = t.children
    return l.createElement(
      'div',
      {
        id: f && ''.concat(f, '-panel-').concat(d),
        role: 'tabpanel',
        tabIndex: h ? 0 : -1,
        'aria-labelledby': f && ''.concat(f, '-tab-').concat(d),
        'aria-hidden': !h,
        style: c,
        className: ve(o, h && ''.concat(o, '-active'), i),
        ref: r,
      },
      m,
    )
  }),
  Zd = ['renderTabBar'],
  Qd = ['label', 'key'],
  Jd = function (r) {
    var o = r.renderTabBar,
      i = kt(r, Zd),
      c = l.useContext(ir),
      f = c.tabs
    if (o) {
      var h = _e(
        _e({}, i),
        {},
        {
          panes: f.map(function (d) {
            var m = d.label,
              g = d.key,
              b = kt(d, Qd)
            return l.createElement(Ri, at({ tab: m, key: g, tabKey: g }, b))
          }),
        },
      )
      return o(h, qa)
    }
    return l.createElement(qa, i)
  },
  ef = ['key', 'forceRender', 'style', 'className', 'destroyInactiveTabPane'],
  tf = function (r) {
    var o = r.id,
      i = r.activeKey,
      c = r.animated,
      f = r.tabPosition,
      h = r.destroyInactiveTabPane,
      d = l.useContext(ir),
      m = d.prefixCls,
      g = d.tabs,
      b = c.tabPane,
      p = ''.concat(m, '-tabpane')
    return l.createElement(
      'div',
      { className: ve(''.concat(m, '-content-holder')) },
      l.createElement(
        'div',
        {
          className: ve(
            ''.concat(m, '-content'),
            ''.concat(m, '-content-').concat(f),
            Ee({}, ''.concat(m, '-content-animated'), b),
          ),
        },
        g.map(function (C) {
          var y = C.key,
            _ = C.forceRender,
            w = C.style,
            S = C.className,
            M = C.destroyInactiveTabPane,
            x = kt(C, ef),
            E = y === i
          return l.createElement(
            Sc,
            at(
              {
                key: y,
                visible: E,
                forceRender: _,
                removeOnLeave: !!(h || M),
                leavedClassName: ''.concat(p, '-hidden'),
              },
              c.tabPaneMotion,
            ),
            function (R, q) {
              var G = R.style,
                D = R.className
              return l.createElement(
                Ri,
                at({}, x, {
                  prefixCls: p,
                  id: o,
                  tabKey: y,
                  animated: b,
                  active: E,
                  style: _e(_e({}, w), G),
                  className: ve(S, D),
                  ref: q,
                }),
              )
            },
          )
        }),
      ),
    )
  }
function nf() {
  var t =
      arguments.length > 0 && arguments[0] !== void 0
        ? arguments[0]
        : { inkBar: !0, tabPane: !1 },
    r
  return (
    t === !1
      ? (r = { inkBar: !1, tabPane: !1 })
      : t === !0
        ? (r = { inkBar: !0, tabPane: !1 })
        : (r = _e({ inkBar: !0 }, Ft(t) === 'object' ? t : {})),
    r.tabPaneMotion && r.tabPane === void 0 && (r.tabPane = !0),
    !r.tabPaneMotion && r.tabPane && (r.tabPane = !1),
    r
  )
}
var rf = [
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
  Xa = 0,
  af = l.forwardRef(function (t, r) {
    var o = t.id,
      i = t.prefixCls,
      c = i === void 0 ? 'rc-tabs' : i,
      f = t.className,
      h = t.items,
      d = t.direction,
      m = t.activeKey,
      g = t.defaultActiveKey,
      b = t.editable,
      p = t.animated,
      C = t.tabPosition,
      y = C === void 0 ? 'top' : C,
      _ = t.tabBarGutter,
      w = t.tabBarStyle,
      S = t.tabBarExtraContent,
      M = t.locale,
      x = t.more,
      E = t.destroyInactiveTabPane,
      R = t.renderTabBar,
      q = t.onChange,
      G = t.onTabClick,
      D = t.onTabScroll,
      N = t.getPopupContainer,
      W = t.popupClassName,
      Y = t.indicator,
      F = kt(t, rf),
      T = l.useMemo(
        function () {
          return (h || []).filter(function (j) {
            return j && Ft(j) === 'object' && 'key' in j
          })
        },
        [h],
      ),
      L = d === 'rtl',
      P = nf(p),
      ee = l.useState(!1),
      se = ce(ee, 2),
      I = se[0],
      V = se[1]
    l.useEffect(function () {
      V(Ja())
    }, [])
    var re = Rn(
        function () {
          var j
          return (j = T[0]) === null || j === void 0 ? void 0 : j.key
        },
        { value: m, defaultValue: g },
      ),
      z = ce(re, 2),
      Q = z[0],
      Z = z[1],
      A = l.useState(function () {
        return T.findIndex(function (j) {
          return j.key === Q
        })
      }),
      B = ce(A, 2),
      O = B[0],
      ge = B[1]
    l.useEffect(
      function () {
        var j = T.findIndex(function (Ie) {
          return Ie.key === Q
        })
        if (j === -1) {
          var de
          ;(j = Math.max(0, Math.min(O, T.length - 1))),
            Z((de = T[j]) === null || de === void 0 ? void 0 : de.key)
        }
        ge(j)
      },
      [
        T.map(function (j) {
          return j.key
        }).join('_'),
        Q,
        O,
      ],
    )
    var ie = Rn(null, { value: o }),
      De = ce(ie, 2),
      Pe = De[0],
      J = De[1]
    l.useEffect(function () {
      o || (J('rc-tabs-'.concat(Xa)), (Xa += 1))
    }, [])
    function H(j, de) {
      G == null || G(j, de)
      var Ie = j !== Q
      Z(j), Ie && (q == null || q(j))
    }
    var ae = {
        id: Pe,
        activeKey: Q,
        animated: P,
        tabPosition: y,
        rtl: L,
        mobile: I,
      },
      be = _e(
        _e({}, ae),
        {},
        {
          editable: b,
          locale: M,
          more: x,
          tabBarGutter: _,
          onTabClick: H,
          onTabScroll: D,
          extra: S,
          style: w,
          panes: null,
          getPopupContainer: N,
          popupClassName: W,
          indicator: Y,
        },
      )
    return l.createElement(
      ir.Provider,
      { value: { tabs: T, prefixCls: c } },
      l.createElement(
        'div',
        at(
          {
            ref: r,
            id: o,
            className: ve(
              c,
              ''.concat(c, '-').concat(y),
              Ee(
                Ee(
                  Ee({}, ''.concat(c, '-mobile'), I),
                  ''.concat(c, '-editable'),
                  b,
                ),
                ''.concat(c, '-rtl'),
                L,
              ),
              f,
            ),
          },
          F,
        ),
        l.createElement(Jd, at({}, be, { renderTabBar: R })),
        l.createElement(
          tf,
          at({ destroyInactiveTabPane: E }, ae, { animated: P }),
        ),
      ),
    )
  })
const of = { motionAppear: !1, motionEnter: !0, motionLeave: !0 }
function sf(t) {
  let r =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { inkBar: !0, tabPane: !1 },
    o
  return (
    r === !1
      ? (o = { inkBar: !1, tabPane: !1 })
      : r === !0
        ? (o = { inkBar: !0, tabPane: !0 })
        : (o = Object.assign({ inkBar: !0 }, typeof r == 'object' ? r : {})),
    o.tabPane &&
      (o.tabPaneMotion = Object.assign(Object.assign({}, of), {
        motionName: oi(t, 'switch'),
      })),
    o
  )
}
var lf = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
function cf(t) {
  return t.filter((r) => r)
}
function uf(t, r) {
  if (t) return t
  const o = ti(r).map((i) => {
    if (l.isValidElement(i)) {
      const { key: c, props: f } = i,
        h = f || {},
        { tab: d } = h,
        m = lf(h, ['tab'])
      return Object.assign(Object.assign({ key: String(c) }, m), { label: d })
    }
    return null
  })
  return cf(o)
}
const df = (t) => {
    const { componentCls: r, motionDurationSlow: o } = t
    return [
      {
        [r]: {
          [`${r}-switch`]: {
            '&-appear, &-enter': {
              transition: 'none',
              '&-start': { opacity: 0 },
              '&-active': { opacity: 1, transition: `opacity ${o}` },
            },
            '&-leave': {
              position: 'absolute',
              transition: 'none',
              inset: 0,
              '&-start': { opacity: 1 },
              '&-active': { opacity: 0, transition: `opacity ${o}` },
            },
          },
        },
      },
      [Jn(t, 'slide-up'), Jn(t, 'slide-down')],
    ]
  },
  ff = (t) => {
    const {
      componentCls: r,
      tabsCardPadding: o,
      cardBg: i,
      cardGutter: c,
      colorBorderSecondary: f,
      itemSelectedColor: h,
    } = t
    return {
      [`${r}-card`]: {
        [`> ${r}-nav, > div > ${r}-nav`]: {
          [`${r}-tab`]: {
            margin: 0,
            padding: o,
            background: i,
            border: `${U(t.lineWidth)} ${t.lineType} ${f}`,
            transition: `all ${t.motionDurationSlow} ${t.motionEaseInOut}`,
          },
          [`${r}-tab-active`]: { color: h, background: t.colorBgContainer },
          [`${r}-ink-bar`]: { visibility: 'hidden' },
        },
        [`&${r}-top, &${r}-bottom`]: {
          [`> ${r}-nav, > div > ${r}-nav`]: {
            [`${r}-tab + ${r}-tab`]: {
              marginLeft: { _skip_check_: !0, value: U(c) },
            },
          },
        },
        [`&${r}-top`]: {
          [`> ${r}-nav, > div > ${r}-nav`]: {
            [`${r}-tab`]: {
              borderRadius: `${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)} 0 0`,
            },
            [`${r}-tab-active`]: { borderBottomColor: t.colorBgContainer },
          },
        },
        [`&${r}-bottom`]: {
          [`> ${r}-nav, > div > ${r}-nav`]: {
            [`${r}-tab`]: {
              borderRadius: `0 0 ${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)}`,
            },
            [`${r}-tab-active`]: { borderTopColor: t.colorBgContainer },
          },
        },
        [`&${r}-left, &${r}-right`]: {
          [`> ${r}-nav, > div > ${r}-nav`]: {
            [`${r}-tab + ${r}-tab`]: { marginTop: U(c) },
          },
        },
        [`&${r}-left`]: {
          [`> ${r}-nav, > div > ${r}-nav`]: {
            [`${r}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${U(t.borderRadiusLG)} 0 0 ${U(t.borderRadiusLG)}`,
              },
            },
            [`${r}-tab-active`]: {
              borderRightColor: { _skip_check_: !0, value: t.colorBgContainer },
            },
          },
        },
        [`&${r}-right`]: {
          [`> ${r}-nav, > div > ${r}-nav`]: {
            [`${r}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)} 0`,
              },
            },
            [`${r}-tab-active`]: {
              borderLeftColor: { _skip_check_: !0, value: t.colorBgContainer },
            },
          },
        },
      },
    }
  },
  hf = (t) => {
    const {
      componentCls: r,
      itemHoverColor: o,
      dropdownEdgeChildVerticalPadding: i,
    } = t
    return {
      [`${r}-dropdown`]: Object.assign(Object.assign({}, yn(t)), {
        position: 'absolute',
        top: -9999,
        left: { _skip_check_: !0, value: -9999 },
        zIndex: t.zIndexPopup,
        display: 'block',
        '&-hidden': { display: 'none' },
        [`${r}-dropdown-menu`]: {
          maxHeight: t.tabsDropdownHeight,
          margin: 0,
          padding: `${U(i)} 0`,
          overflowX: 'hidden',
          overflowY: 'auto',
          textAlign: { _skip_check_: !0, value: 'left' },
          listStyleType: 'none',
          backgroundColor: t.colorBgContainer,
          backgroundClip: 'padding-box',
          borderRadius: t.borderRadiusLG,
          outline: 'none',
          boxShadow: t.boxShadowSecondary,
          '&-item': Object.assign(Object.assign({}, pn), {
            display: 'flex',
            alignItems: 'center',
            minWidth: t.tabsDropdownWidth,
            margin: 0,
            padding: `${U(t.paddingXXS)} ${U(t.paddingSM)}`,
            color: t.colorText,
            fontWeight: 'normal',
            fontSize: t.fontSize,
            lineHeight: t.lineHeight,
            cursor: 'pointer',
            transition: `all ${t.motionDurationSlow}`,
            '> span': { flex: 1, whiteSpace: 'nowrap' },
            '&-remove': {
              flex: 'none',
              marginLeft: { _skip_check_: !0, value: t.marginSM },
              color: t.colorTextDescription,
              fontSize: t.fontSizeSM,
              background: 'transparent',
              border: 0,
              cursor: 'pointer',
              '&:hover': { color: o },
            },
            '&:hover': { background: t.controlItemBgHover },
            '&-disabled': {
              '&, &:hover': {
                color: t.colorTextDisabled,
                background: 'transparent',
                cursor: 'not-allowed',
              },
            },
          }),
        },
      }),
    }
  },
  mf = (t) => {
    const {
      componentCls: r,
      margin: o,
      colorBorderSecondary: i,
      horizontalMargin: c,
      verticalItemPadding: f,
      verticalItemMargin: h,
      calc: d,
    } = t
    return {
      [`${r}-top, ${r}-bottom`]: {
        flexDirection: 'column',
        [`> ${r}-nav, > div > ${r}-nav`]: {
          margin: c,
          '&::before': {
            position: 'absolute',
            right: { _skip_check_: !0, value: 0 },
            left: { _skip_check_: !0, value: 0 },
            borderBottom: `${U(t.lineWidth)} ${t.lineType} ${i}`,
            content: "''",
          },
          [`${r}-ink-bar`]: {
            height: t.lineWidthBold,
            '&-animated': {
              transition: `width ${t.motionDurationSlow}, left ${t.motionDurationSlow},
            right ${t.motionDurationSlow}`,
            },
          },
          [`${r}-nav-wrap`]: {
            '&::before, &::after': {
              top: 0,
              bottom: 0,
              width: t.controlHeight,
            },
            '&::before': {
              left: { _skip_check_: !0, value: 0 },
              boxShadow: t.boxShadowTabsOverflowLeft,
            },
            '&::after': {
              right: { _skip_check_: !0, value: 0 },
              boxShadow: t.boxShadowTabsOverflowRight,
            },
            [`&${r}-nav-wrap-ping-left::before`]: { opacity: 1 },
            [`&${r}-nav-wrap-ping-right::after`]: { opacity: 1 },
          },
        },
      },
      [`${r}-top`]: {
        [`> ${r}-nav,
        > div > ${r}-nav`]: {
          '&::before': { bottom: 0 },
          [`${r}-ink-bar`]: { bottom: 0 },
        },
      },
      [`${r}-bottom`]: {
        [`> ${r}-nav, > div > ${r}-nav`]: {
          order: 1,
          marginTop: o,
          marginBottom: 0,
          '&::before': { top: 0 },
          [`${r}-ink-bar`]: { top: 0 },
        },
        [`> ${r}-content-holder, > div > ${r}-content-holder`]: { order: 0 },
      },
      [`${r}-left, ${r}-right`]: {
        [`> ${r}-nav, > div > ${r}-nav`]: {
          flexDirection: 'column',
          minWidth: d(t.controlHeight).mul(1.25).equal(),
          [`${r}-tab`]: { padding: f, textAlign: 'center' },
          [`${r}-tab + ${r}-tab`]: { margin: h },
          [`${r}-nav-wrap`]: {
            flexDirection: 'column',
            '&::before, &::after': {
              right: { _skip_check_: !0, value: 0 },
              left: { _skip_check_: !0, value: 0 },
              height: t.controlHeight,
            },
            '&::before': { top: 0, boxShadow: t.boxShadowTabsOverflowTop },
            '&::after': { bottom: 0, boxShadow: t.boxShadowTabsOverflowBottom },
            [`&${r}-nav-wrap-ping-top::before`]: { opacity: 1 },
            [`&${r}-nav-wrap-ping-bottom::after`]: { opacity: 1 },
          },
          [`${r}-ink-bar`]: {
            width: t.lineWidthBold,
            '&-animated': {
              transition: `height ${t.motionDurationSlow}, top ${t.motionDurationSlow}`,
            },
          },
          [`${r}-nav-list, ${r}-nav-operations`]: {
            flex: '1 0 auto',
            flexDirection: 'column',
          },
        },
      },
      [`${r}-left`]: {
        [`> ${r}-nav, > div > ${r}-nav`]: {
          [`${r}-ink-bar`]: { right: { _skip_check_: !0, value: 0 } },
        },
        [`> ${r}-content-holder, > div > ${r}-content-holder`]: {
          marginLeft: {
            _skip_check_: !0,
            value: U(d(t.lineWidth).mul(-1).equal()),
          },
          borderLeft: {
            _skip_check_: !0,
            value: `${U(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,
          },
          [`> ${r}-content > ${r}-tabpane`]: {
            paddingLeft: { _skip_check_: !0, value: t.paddingLG },
          },
        },
      },
      [`${r}-right`]: {
        [`> ${r}-nav, > div > ${r}-nav`]: {
          order: 1,
          [`${r}-ink-bar`]: { left: { _skip_check_: !0, value: 0 } },
        },
        [`> ${r}-content-holder, > div > ${r}-content-holder`]: {
          order: 0,
          marginRight: {
            _skip_check_: !0,
            value: d(t.lineWidth).mul(-1).equal(),
          },
          borderRight: {
            _skip_check_: !0,
            value: `${U(t.lineWidth)} ${t.lineType} ${t.colorBorder}`,
          },
          [`> ${r}-content > ${r}-tabpane`]: {
            paddingRight: { _skip_check_: !0, value: t.paddingLG },
          },
        },
      },
    }
  },
  vf = (t) => {
    const {
      componentCls: r,
      cardPaddingSM: o,
      cardPaddingLG: i,
      horizontalItemPaddingSM: c,
      horizontalItemPaddingLG: f,
    } = t
    return {
      [r]: {
        '&-small': {
          [`> ${r}-nav`]: {
            [`${r}-tab`]: { padding: c, fontSize: t.titleFontSizeSM },
          },
        },
        '&-large': {
          [`> ${r}-nav`]: {
            [`${r}-tab`]: { padding: f, fontSize: t.titleFontSizeLG },
          },
        },
      },
      [`${r}-card`]: {
        [`&${r}-small`]: {
          [`> ${r}-nav`]: { [`${r}-tab`]: { padding: o } },
          [`&${r}-bottom`]: {
            [`> ${r}-nav ${r}-tab`]: {
              borderRadius: `0 0 ${U(t.borderRadius)} ${U(t.borderRadius)}`,
            },
          },
          [`&${r}-top`]: {
            [`> ${r}-nav ${r}-tab`]: {
              borderRadius: `${U(t.borderRadius)} ${U(t.borderRadius)} 0 0`,
            },
          },
          [`&${r}-right`]: {
            [`> ${r}-nav ${r}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `0 ${U(t.borderRadius)} ${U(t.borderRadius)} 0`,
              },
            },
          },
          [`&${r}-left`]: {
            [`> ${r}-nav ${r}-tab`]: {
              borderRadius: {
                _skip_check_: !0,
                value: `${U(t.borderRadius)} 0 0 ${U(t.borderRadius)}`,
              },
            },
          },
        },
        [`&${r}-large`]: { [`> ${r}-nav`]: { [`${r}-tab`]: { padding: i } } },
      },
    }
  },
  gf = (t) => {
    const {
        componentCls: r,
        itemActiveColor: o,
        itemHoverColor: i,
        iconCls: c,
        tabsHorizontalItemMargin: f,
        horizontalItemPadding: h,
        itemSelectedColor: d,
        itemColor: m,
      } = t,
      g = `${r}-tab`
    return {
      [g]: {
        position: 'relative',
        WebkitTouchCallout: 'none',
        WebkitTapHighlightColor: 'transparent',
        display: 'inline-flex',
        alignItems: 'center',
        padding: h,
        fontSize: t.titleFontSize,
        background: 'transparent',
        border: 0,
        outline: 'none',
        cursor: 'pointer',
        color: m,
        '&-btn, &-remove': Object.assign(
          { '&:focus:not(:focus-visible), &:active': { color: o } },
          li(t),
        ),
        '&-btn': {
          outline: 'none',
          transition: `all ${t.motionDurationSlow}`,
          [`${g}-icon:not(:last-child)`]: { marginInlineEnd: t.marginSM },
        },
        '&-remove': {
          flex: 'none',
          marginRight: {
            _skip_check_: !0,
            value: t.calc(t.marginXXS).mul(-1).equal(),
          },
          marginLeft: { _skip_check_: !0, value: t.marginXS },
          color: t.colorTextDescription,
          fontSize: t.fontSizeSM,
          background: 'transparent',
          border: 'none',
          outline: 'none',
          cursor: 'pointer',
          transition: `all ${t.motionDurationSlow}`,
          '&:hover': { color: t.colorTextHeading },
        },
        '&:hover': { color: i },
        [`&${g}-active ${g}-btn`]: {
          color: d,
          textShadow: t.tabsActiveTextShadow,
        },
        [`&${g}-disabled`]: {
          color: t.colorTextDisabled,
          cursor: 'not-allowed',
        },
        [`&${g}-disabled ${g}-btn, &${g}-disabled ${r}-remove`]: {
          '&:focus, &:active': { color: t.colorTextDisabled },
        },
        [`& ${g}-remove ${c}`]: { margin: 0 },
        [`${c}:not(:last-child)`]: {
          marginRight: { _skip_check_: !0, value: t.marginSM },
        },
      },
      [`${g} + ${g}`]: { margin: { _skip_check_: !0, value: f } },
    }
  },
  pf = (t) => {
    const {
      componentCls: r,
      tabsHorizontalItemMarginRTL: o,
      iconCls: i,
      cardGutter: c,
      calc: f,
    } = t
    return {
      [`${r}-rtl`]: {
        direction: 'rtl',
        [`${r}-nav`]: {
          [`${r}-tab`]: {
            margin: { _skip_check_: !0, value: o },
            [`${r}-tab:last-of-type`]: {
              marginLeft: { _skip_check_: !0, value: 0 },
            },
            [i]: {
              marginRight: { _skip_check_: !0, value: 0 },
              marginLeft: { _skip_check_: !0, value: U(t.marginSM) },
            },
            [`${r}-tab-remove`]: {
              marginRight: { _skip_check_: !0, value: U(t.marginXS) },
              marginLeft: {
                _skip_check_: !0,
                value: U(f(t.marginXXS).mul(-1).equal()),
              },
              [i]: { margin: 0 },
            },
          },
        },
        [`&${r}-left`]: {
          [`> ${r}-nav`]: { order: 1 },
          [`> ${r}-content-holder`]: { order: 0 },
        },
        [`&${r}-right`]: {
          [`> ${r}-nav`]: { order: 0 },
          [`> ${r}-content-holder`]: { order: 1 },
        },
        [`&${r}-card${r}-top, &${r}-card${r}-bottom`]: {
          [`> ${r}-nav, > div > ${r}-nav`]: {
            [`${r}-tab + ${r}-tab`]: {
              marginRight: { _skip_check_: !0, value: c },
              marginLeft: { _skip_check_: !0, value: 0 },
            },
          },
        },
      },
      [`${r}-dropdown-rtl`]: { direction: 'rtl' },
      [`${r}-menu-item`]: {
        [`${r}-dropdown-rtl`]: {
          textAlign: { _skip_check_: !0, value: 'right' },
        },
      },
    }
  },
  bf = (t) => {
    const {
      componentCls: r,
      tabsCardPadding: o,
      cardHeight: i,
      cardGutter: c,
      itemHoverColor: f,
      itemActiveColor: h,
      colorBorderSecondary: d,
    } = t
    return {
      [r]: Object.assign(
        Object.assign(
          Object.assign(Object.assign({}, yn(t)), {
            display: 'flex',
            [`> ${r}-nav, > div > ${r}-nav`]: {
              position: 'relative',
              display: 'flex',
              flex: 'none',
              alignItems: 'center',
              [`${r}-nav-wrap`]: {
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
                  transition: `opacity ${t.motionDurationSlow}`,
                  content: "''",
                  pointerEvents: 'none',
                },
              },
              [`${r}-nav-list`]: {
                position: 'relative',
                display: 'flex',
                transition: `opacity ${t.motionDurationSlow}`,
              },
              [`${r}-nav-operations`]: {
                display: 'flex',
                alignSelf: 'stretch',
              },
              [`${r}-nav-operations-hidden`]: {
                position: 'absolute',
                visibility: 'hidden',
                pointerEvents: 'none',
              },
              [`${r}-nav-more`]: {
                position: 'relative',
                padding: o,
                background: 'transparent',
                border: 0,
                color: t.colorText,
                '&::after': {
                  position: 'absolute',
                  right: { _skip_check_: !0, value: 0 },
                  bottom: 0,
                  left: { _skip_check_: !0, value: 0 },
                  height: t.calc(t.controlHeightLG).div(8).equal(),
                  transform: 'translateY(100%)',
                  content: "''",
                },
              },
              [`${r}-nav-add`]: Object.assign(
                {
                  minWidth: i,
                  minHeight: i,
                  marginLeft: { _skip_check_: !0, value: c },
                  padding: `0 ${U(t.paddingXS)}`,
                  background: 'transparent',
                  border: `${U(t.lineWidth)} ${t.lineType} ${d}`,
                  borderRadius: `${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)} 0 0`,
                  outline: 'none',
                  cursor: 'pointer',
                  color: t.colorText,
                  transition: `all ${t.motionDurationSlow} ${t.motionEaseInOut}`,
                  '&:hover': { color: f },
                  '&:active, &:focus:not(:focus-visible)': { color: h },
                },
                li(t),
              ),
            },
            [`${r}-extra-content`]: { flex: 'none' },
            [`${r}-ink-bar`]: {
              position: 'absolute',
              background: t.inkBarColor,
              pointerEvents: 'none',
            },
          }),
          gf(t),
        ),
        {
          [`${r}-content`]: { position: 'relative', width: '100%' },
          [`${r}-content-holder`]: { flex: 'auto', minWidth: 0, minHeight: 0 },
          [`${r}-tabpane`]: {
            outline: 'none',
            '&-hidden': { display: 'none' },
          },
        },
      ),
      [`${r}-centered`]: {
        [`> ${r}-nav, > div > ${r}-nav`]: {
          [`${r}-nav-wrap`]: {
            [`&:not([class*='${r}-nav-wrap-ping'])`]: {
              justifyContent: 'center',
            },
          },
        },
      },
    }
  },
  yf = (t) => {
    const r = t.controlHeightLG
    return {
      zIndexPopup: t.zIndexPopupBase + 50,
      cardBg: t.colorFillAlter,
      cardHeight: r,
      cardPadding: `${(r - Math.round(t.fontSize * t.lineHeight)) / 2 - t.lineWidth}px ${t.padding}px`,
      cardPaddingSM: `${t.paddingXXS * 1.5}px ${t.padding}px`,
      cardPaddingLG: `${t.paddingXS}px ${t.padding}px ${t.paddingXXS * 1.5}px`,
      titleFontSize: t.fontSize,
      titleFontSizeLG: t.fontSizeLG,
      titleFontSizeSM: t.fontSize,
      inkBarColor: t.colorPrimary,
      horizontalMargin: `0 0 ${t.margin}px 0`,
      horizontalItemGutter: 32,
      horizontalItemMargin: '',
      horizontalItemMarginRTL: '',
      horizontalItemPadding: `${t.paddingSM}px 0`,
      horizontalItemPaddingSM: `${t.paddingXS}px 0`,
      horizontalItemPaddingLG: `${t.padding}px 0`,
      verticalItemPadding: `${t.paddingXS}px ${t.paddingLG}px`,
      verticalItemMargin: `${t.margin}px 0 0 0`,
      itemColor: t.colorText,
      itemSelectedColor: t.colorPrimary,
      itemHoverColor: t.colorPrimaryHover,
      itemActiveColor: t.colorPrimaryActive,
      cardGutter: t.marginXXS / 2,
    }
  },
  Sf = bn(
    'Tabs',
    (t) => {
      const r = Wt(t, {
        tabsCardPadding: t.cardPadding,
        dropdownEdgeChildVerticalPadding: t.paddingXXS,
        tabsActiveTextShadow: '0 0 0.25px currentcolor',
        tabsDropdownHeight: 200,
        tabsDropdownWidth: 120,
        tabsHorizontalItemMargin: `0 0 0 ${U(t.horizontalItemGutter)}`,
        tabsHorizontalItemMarginRTL: `0 0 0 ${U(t.horizontalItemGutter)}`,
      })
      return [vf(r), pf(r), mf(r), hf(r), ff(r), bf(r), df(r)]
    },
    yf,
  ),
  wf = () => null
var _f = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
const Di = (t) => {
  var r, o, i, c, f, h, d, m, g, b, p
  const {
      type: C,
      className: y,
      rootClassName: _,
      size: w,
      onEdit: S,
      hideAdd: M,
      centered: x,
      addIcon: E,
      removeIcon: R,
      moreIcon: q,
      more: G,
      popupClassName: D,
      children: N,
      items: W,
      animated: Y,
      style: F,
      indicatorSize: T,
      indicator: L,
    } = t,
    P = _f(t, [
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
    { prefixCls: ee } = P,
    {
      direction: se,
      tabs: I,
      getPrefixCls: V,
      getPopupContainer: re,
    } = l.useContext(_t),
    z = V('tabs', ee),
    Q = Fr(z),
    [Z, A, B] = Sf(z, Q)
  let O
  C === 'editable-card' &&
    (O = {
      onEdit: (ae, be) => {
        let { key: j, event: de } = be
        S == null || S(ae === 'add' ? de : j, ae)
      },
      removeIcon:
        (r = R ?? (I == null ? void 0 : I.removeIcon)) !== null && r !== void 0
          ? r
          : l.createElement(ui, null),
      addIcon:
        (E ?? (I == null ? void 0 : I.addIcon)) || l.createElement(wc, null),
      showAdd: M !== !0,
    })
  const ge = V(),
    ie = Ln(w),
    De = uf(W, N),
    Pe = sf(z, Y),
    J = Object.assign(Object.assign({}, I == null ? void 0 : I.style), F),
    H = {
      align:
        (o = L == null ? void 0 : L.align) !== null && o !== void 0
          ? o
          : (i = I == null ? void 0 : I.indicator) === null || i === void 0
            ? void 0
            : i.align,
      size:
        (d =
          (f =
            (c = L == null ? void 0 : L.size) !== null && c !== void 0
              ? c
              : T) !== null && f !== void 0
            ? f
            : (h = I == null ? void 0 : I.indicator) === null || h === void 0
              ? void 0
              : h.size) !== null && d !== void 0
          ? d
          : I == null
            ? void 0
            : I.indicatorSize,
    }
  return Z(
    l.createElement(
      af,
      Object.assign({ direction: se, getPopupContainer: re }, P, {
        items: De,
        className: ve(
          {
            [`${z}-${ie}`]: ie,
            [`${z}-card`]: ['card', 'editable-card'].includes(C),
            [`${z}-editable-card`]: C === 'editable-card',
            [`${z}-centered`]: x,
          },
          I == null ? void 0 : I.className,
          y,
          _,
          A,
          B,
          Q,
        ),
        popupClassName: ve(D, A, B, Q),
        style: J,
        editable: O,
        more: Object.assign(
          {
            icon:
              (p =
                (b =
                  (g =
                    (m = I == null ? void 0 : I.more) === null || m === void 0
                      ? void 0
                      : m.icon) !== null && g !== void 0
                    ? g
                    : I == null
                      ? void 0
                      : I.moreIcon) !== null && b !== void 0
                  ? b
                  : q) !== null && p !== void 0
                ? p
                : l.createElement(_c, null),
            transitionName: `${ge}-slide-up`,
          },
          G,
        ),
        prefixCls: z,
        animated: Pe,
        indicator: H,
      }),
    ),
  )
}
Di.TabPane = wf
var Cf = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
const Ti = (t) => {
    var { prefixCls: r, className: o, hoverable: i = !0 } = t,
      c = Cf(t, ['prefixCls', 'className', 'hoverable'])
    const { getPrefixCls: f } = l.useContext(_t),
      h = f('card', r),
      d = ve(`${h}-grid`, o, { [`${h}-grid-hoverable`]: i })
    return l.createElement('div', Object.assign({}, c, { className: d }))
  },
  xf = (t) => {
    const {
      antCls: r,
      componentCls: o,
      headerHeight: i,
      cardPaddingBase: c,
      tabsMarginBottom: f,
    } = t
    return Object.assign(
      Object.assign(
        {
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          minHeight: i,
          marginBottom: -1,
          padding: `0 ${U(c)}`,
          color: t.colorTextHeading,
          fontWeight: t.fontWeightStrong,
          fontSize: t.headerFontSize,
          background: t.headerBg,
          borderBottom: `${U(t.lineWidth)} ${t.lineType} ${t.colorBorderSecondary}`,
          borderRadius: `${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)} 0 0`,
        },
        er(),
      ),
      {
        '&-wrapper': { width: '100%', display: 'flex', alignItems: 'center' },
        '&-title': Object.assign(
          Object.assign({ display: 'inline-block', flex: 1 }, pn),
          {
            [`
          > ${o}-typography,
          > ${o}-typography-edit-content
        `]: { insetInlineStart: 0, marginTop: 0, marginBottom: 0 },
          },
        ),
        [`${r}-tabs-top`]: {
          clear: 'both',
          marginBottom: f,
          color: t.colorText,
          fontWeight: 'normal',
          fontSize: t.fontSize,
          '&-bar': {
            borderBottom: `${U(t.lineWidth)} ${t.lineType} ${t.colorBorderSecondary}`,
          },
        },
      },
    )
  },
  $f = (t) => {
    const {
      cardPaddingBase: r,
      colorBorderSecondary: o,
      cardShadow: i,
      lineWidth: c,
    } = t
    return {
      width: '33.33%',
      padding: r,
      border: 0,
      borderRadius: 0,
      boxShadow: `
      ${U(c)} 0 0 0 ${o},
      0 ${U(c)} 0 0 ${o},
      ${U(c)} ${U(c)} 0 0 ${o},
      ${U(c)} 0 0 0 ${o} inset,
      0 ${U(c)} 0 0 ${o} inset;
    `,
      transition: `all ${t.motionDurationMid}`,
      '&-hoverable:hover': { position: 'relative', zIndex: 1, boxShadow: i },
    }
  },
  Mf = (t) => {
    const {
      componentCls: r,
      iconCls: o,
      actionsLiMargin: i,
      cardActionsIconSize: c,
      colorBorderSecondary: f,
      actionsBg: h,
    } = t
    return Object.assign(
      Object.assign(
        {
          margin: 0,
          padding: 0,
          listStyle: 'none',
          background: h,
          borderTop: `${U(t.lineWidth)} ${t.lineType} ${f}`,
          display: 'flex',
          borderRadius: `0 0 ${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)}`,
        },
        er(),
      ),
      {
        '& > li': {
          margin: i,
          color: t.colorTextDescription,
          textAlign: 'center',
          '> span': {
            position: 'relative',
            display: 'block',
            minWidth: t.calc(t.cardActionsIconSize).mul(2).equal(),
            fontSize: t.fontSize,
            lineHeight: t.lineHeight,
            cursor: 'pointer',
            '&:hover': {
              color: t.colorPrimary,
              transition: `color ${t.motionDurationMid}`,
            },
            [`a:not(${r}-btn), > ${o}`]: {
              display: 'inline-block',
              width: '100%',
              color: t.colorTextDescription,
              lineHeight: U(t.fontHeight),
              transition: `color ${t.motionDurationMid}`,
              '&:hover': { color: t.colorPrimary },
            },
            [`> ${o}`]: {
              fontSize: c,
              lineHeight: U(t.calc(c).mul(t.lineHeight).equal()),
            },
          },
          '&:not(:last-child)': {
            borderInlineEnd: `${U(t.lineWidth)} ${t.lineType} ${f}`,
          },
        },
      },
    )
  },
  Of = (t) =>
    Object.assign(
      Object.assign(
        {
          margin: `${U(t.calc(t.marginXXS).mul(-1).equal())} 0`,
          display: 'flex',
        },
        er(),
      ),
      {
        '&-avatar': { paddingInlineEnd: t.padding },
        '&-detail': {
          overflow: 'hidden',
          flex: 1,
          '> div:not(:last-child)': { marginBottom: t.marginXS },
        },
        '&-title': Object.assign(
          {
            color: t.colorTextHeading,
            fontWeight: t.fontWeightStrong,
            fontSize: t.fontSizeLG,
          },
          pn,
        ),
        '&-description': { color: t.colorTextDescription },
      },
    ),
  Ef = (t) => {
    const { componentCls: r, cardPaddingBase: o, colorFillAlter: i } = t
    return {
      [`${r}-head`]: {
        padding: `0 ${U(o)}`,
        background: i,
        '&-title': { fontSize: t.fontSize },
      },
      [`${r}-body`]: { padding: `${U(t.padding)} ${U(o)}` },
    }
  },
  If = (t) => {
    const { componentCls: r } = t
    return { overflow: 'hidden', [`${r}-body`]: { userSelect: 'none' } }
  },
  Rf = (t) => {
    const {
      componentCls: r,
      cardShadow: o,
      cardHeadPadding: i,
      colorBorderSecondary: c,
      boxShadowTertiary: f,
      cardPaddingBase: h,
      extraColor: d,
    } = t
    return {
      [r]: Object.assign(Object.assign({}, yn(t)), {
        position: 'relative',
        background: t.colorBgContainer,
        borderRadius: t.borderRadiusLG,
        [`&:not(${r}-bordered)`]: { boxShadow: f },
        [`${r}-head`]: xf(t),
        [`${r}-extra`]: {
          marginInlineStart: 'auto',
          color: d,
          fontWeight: 'normal',
          fontSize: t.fontSize,
        },
        [`${r}-body`]: Object.assign(
          {
            padding: h,
            borderRadius: `0 0 ${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)}`,
          },
          er(),
        ),
        [`${r}-grid`]: $f(t),
        [`${r}-cover`]: {
          '> *': {
            display: 'block',
            width: '100%',
            borderRadius: `${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)} 0 0`,
          },
        },
        [`${r}-actions`]: Mf(t),
        [`${r}-meta`]: Of(t),
      }),
      [`${r}-bordered`]: {
        border: `${U(t.lineWidth)} ${t.lineType} ${c}`,
        [`${r}-cover`]: {
          marginTop: -1,
          marginInlineStart: -1,
          marginInlineEnd: -1,
        },
      },
      [`${r}-hoverable`]: {
        cursor: 'pointer',
        transition: `box-shadow ${t.motionDurationMid}, border-color ${t.motionDurationMid}`,
        '&:hover': { borderColor: 'transparent', boxShadow: o },
      },
      [`${r}-contain-grid`]: {
        borderRadius: `${U(t.borderRadiusLG)} ${U(t.borderRadiusLG)} 0 0 `,
        [`${r}-body`]: { display: 'flex', flexWrap: 'wrap' },
        [`&:not(${r}-loading) ${r}-body`]: {
          marginBlockStart: t.calc(t.lineWidth).mul(-1).equal(),
          marginInlineStart: t.calc(t.lineWidth).mul(-1).equal(),
          padding: 0,
        },
      },
      [`${r}-contain-tabs`]: {
        [`> div${r}-head`]: {
          minHeight: 0,
          [`${r}-head-title, ${r}-extra`]: { paddingTop: i },
        },
      },
      [`${r}-type-inner`]: Ef(t),
      [`${r}-loading`]: If(t),
      [`${r}-rtl`]: { direction: 'rtl' },
    }
  },
  Df = (t) => {
    const {
      componentCls: r,
      cardPaddingSM: o,
      headerHeightSM: i,
      headerFontSizeSM: c,
    } = t
    return {
      [`${r}-small`]: {
        [`> ${r}-head`]: {
          minHeight: i,
          padding: `0 ${U(o)}`,
          fontSize: c,
          [`> ${r}-head-wrapper`]: {
            [`> ${r}-extra`]: { fontSize: t.fontSize },
          },
        },
        [`> ${r}-body`]: { padding: o },
      },
      [`${r}-small${r}-contain-tabs`]: {
        [`> ${r}-head`]: {
          [`${r}-head-title, ${r}-extra`]: {
            paddingTop: 0,
            display: 'flex',
            alignItems: 'center',
          },
        },
      },
    }
  },
  Tf = (t) => ({
    headerBg: 'transparent',
    headerFontSize: t.fontSizeLG,
    headerFontSizeSM: t.fontSize,
    headerHeight: t.fontSizeLG * t.lineHeightLG + t.padding * 2,
    headerHeightSM: t.fontSize * t.lineHeight + t.paddingXS * 2,
    actionsBg: t.colorBgContainer,
    actionsLiMargin: `${t.paddingSM}px 0`,
    tabsMarginBottom: -t.padding - t.lineWidth,
    extraColor: t.colorText,
  }),
  Pf = bn(
    'Card',
    (t) => {
      const r = Wt(t, {
        cardShadow: t.boxShadowCard,
        cardHeadPadding: t.padding,
        cardPaddingBase: t.paddingLG,
        cardActionsIconSize: t.fontSize,
        cardPaddingSM: 12,
      })
      return [Rf(r), Df(r)]
    },
    Tf,
  )
var Za = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
const Nf = (t) => {
    const { actionClasses: r, actions: o = [], actionStyle: i } = t
    return l.createElement(
      'ul',
      { className: r, style: i },
      o.map((c, f) => {
        const h = `action-${f}`
        return l.createElement(
          'li',
          { style: { width: `${100 / o.length}%` }, key: h },
          l.createElement('span', null, c),
        )
      }),
    )
  },
  Lf = l.forwardRef((t, r) => {
    const {
        prefixCls: o,
        className: i,
        rootClassName: c,
        style: f,
        extra: h,
        headStyle: d = {},
        bodyStyle: m = {},
        title: g,
        loading: b,
        bordered: p = !0,
        size: C,
        type: y,
        cover: _,
        actions: w,
        tabList: S,
        children: M,
        activeTabKey: x,
        defaultActiveTabKey: E,
        tabBarExtraContent: R,
        hoverable: q,
        tabProps: G = {},
        classNames: D,
        styles: N,
      } = t,
      W = Za(t, [
        'prefixCls',
        'className',
        'rootClassName',
        'style',
        'extra',
        'headStyle',
        'bodyStyle',
        'title',
        'loading',
        'bordered',
        'size',
        'type',
        'cover',
        'actions',
        'tabList',
        'children',
        'activeTabKey',
        'defaultActiveTabKey',
        'tabBarExtraContent',
        'hoverable',
        'tabProps',
        'classNames',
        'styles',
      ]),
      { getPrefixCls: Y, direction: F, card: T } = l.useContext(_t),
      L = (ye) => {
        var Ce
        ;(Ce = t.onTabChange) === null || Ce === void 0 || Ce.call(t, ye)
      },
      P = (ye) => {
        var Ce
        return ve(
          (Ce = T == null ? void 0 : T.classNames) === null || Ce === void 0
            ? void 0
            : Ce[ye],
          D == null ? void 0 : D[ye],
        )
      },
      ee = (ye) => {
        var Ce
        return Object.assign(
          Object.assign(
            {},
            (Ce = T == null ? void 0 : T.styles) === null || Ce === void 0
              ? void 0
              : Ce[ye],
          ),
          N == null ? void 0 : N[ye],
        )
      },
      se = l.useMemo(() => {
        let ye = !1
        return (
          l.Children.forEach(M, (Ce) => {
            ;(Ce == null ? void 0 : Ce.type) === Ti && (ye = !0)
          }),
          ye
        )
      }, [M]),
      I = Y('card', o),
      [V, re, z] = Pf(I),
      Q = l.createElement(
        wn,
        { loading: !0, active: !0, paragraph: { rows: 4 }, title: !1 },
        M,
      ),
      Z = x !== void 0,
      A = Object.assign(Object.assign({}, G), {
        [Z ? 'activeKey' : 'defaultActiveKey']: Z ? x : E,
        tabBarExtraContent: R,
      })
    let B
    const O = Ln(C),
      ge = !O || O === 'default' ? 'large' : O,
      ie = S
        ? l.createElement(
            Di,
            Object.assign({ size: ge }, A, {
              className: `${I}-head-tabs`,
              onChange: L,
              items: S.map((ye) => {
                var { tab: Ce } = ye,
                  Be = Za(ye, ['tab'])
                return Object.assign({ label: Ce }, Be)
              }),
            }),
          )
        : null
    if (g || h || ie) {
      const ye = ve(`${I}-head`, P('header')),
        Ce = ve(`${I}-head-title`, P('title')),
        Be = ve(`${I}-extra`, P('extra')),
        ze = Object.assign(Object.assign({}, d), ee('header'))
      B = l.createElement(
        'div',
        { className: ye, style: ze },
        l.createElement(
          'div',
          { className: `${I}-head-wrapper` },
          g && l.createElement('div', { className: Ce, style: ee('title') }, g),
          h && l.createElement('div', { className: Be, style: ee('extra') }, h),
        ),
        ie,
      )
    }
    const De = ve(`${I}-cover`, P('cover')),
      Pe = _
        ? l.createElement('div', { className: De, style: ee('cover') }, _)
        : null,
      J = ve(`${I}-body`, P('body')),
      H = Object.assign(Object.assign({}, m), ee('body')),
      ae = l.createElement('div', { className: J, style: H }, b ? Q : M),
      be = ve(`${I}-actions`, P('actions')),
      j =
        w != null && w.length
          ? l.createElement(Nf, {
              actionClasses: be,
              actionStyle: ee('actions'),
              actions: w,
            })
          : null,
      de = an(W, ['onTabChange']),
      Ie = ve(
        I,
        T == null ? void 0 : T.className,
        {
          [`${I}-loading`]: b,
          [`${I}-bordered`]: p,
          [`${I}-hoverable`]: q,
          [`${I}-contain-grid`]: se,
          [`${I}-contain-tabs`]: S == null ? void 0 : S.length,
          [`${I}-${O}`]: O,
          [`${I}-type-${y}`]: !!y,
          [`${I}-rtl`]: F === 'rtl',
        },
        i,
        c,
        re,
        z,
      ),
      Ye = Object.assign(Object.assign({}, T == null ? void 0 : T.style), f)
    return V(
      l.createElement(
        'div',
        Object.assign({ ref: r }, de, { className: Ie, style: Ye }),
        B,
        Pe,
        ae,
        j,
      ),
    )
  })
var zf = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
const Yf = (t) => {
    const {
        prefixCls: r,
        className: o,
        avatar: i,
        title: c,
        description: f,
      } = t,
      h = zf(t, ['prefixCls', 'className', 'avatar', 'title', 'description']),
      { getPrefixCls: d } = l.useContext(_t),
      m = d('card', r),
      g = ve(`${m}-meta`, o),
      b = i
        ? l.createElement('div', { className: `${m}-meta-avatar` }, i)
        : null,
      p = c
        ? l.createElement('div', { className: `${m}-meta-title` }, c)
        : null,
      C = f
        ? l.createElement('div', { className: `${m}-meta-description` }, f)
        : null,
      y =
        p || C
          ? l.createElement('div', { className: `${m}-meta-detail` }, p, C)
          : null
    return l.createElement('div', Object.assign({}, h, { className: g }), b, y)
  },
  Pi = Lf
Pi.Grid = Ti
Pi.Meta = Yf
const Hf = (t) => {
    const { getPrefixCls: r, direction: o } = l.useContext(_t),
      { prefixCls: i, className: c } = t,
      f = r('input-group', i),
      h = r('input'),
      [d, m] = Cc(h),
      g = ve(
        f,
        {
          [`${f}-lg`]: t.size === 'large',
          [`${f}-sm`]: t.size === 'small',
          [`${f}-compact`]: t.compact,
          [`${f}-rtl`]: o === 'rtl',
        },
        m,
        c,
      ),
      b = l.useContext(Tn),
      p = l.useMemo(
        () => Object.assign(Object.assign({}, b), { isFormItemInput: !1 }),
        [b],
      )
    return d(
      l.createElement(
        'span',
        {
          className: g,
          style: t.style,
          onMouseEnter: t.onMouseEnter,
          onMouseLeave: t.onMouseLeave,
          onFocus: t.onFocus,
          onBlur: t.onBlur,
        },
        l.createElement(Tn.Provider, { value: p }, t.children),
      ),
    )
  },
  kf = (t) => {
    const { componentCls: r, paddingXS: o } = t
    return {
      [r]: {
        display: 'inline-flex',
        alignItems: 'center',
        flexWrap: 'nowrap',
        columnGap: o,
        '&-rtl': { direction: 'rtl' },
        [`${r}-input`]: { textAlign: 'center', paddingInline: t.paddingXXS },
        [`&${r}-sm ${r}-input`]: {
          paddingInline: t.calc(t.paddingXXS).div(2).equal(),
        },
        [`&${r}-lg ${r}-input`]: { paddingInline: t.paddingXS },
      },
    }
  },
  Wf = bn(
    ['Input', 'OTP'],
    (t) => {
      const r = Wt(t, xc(t))
      return [kf(r)]
    },
    $c,
  )
var Ff = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
const Af = l.forwardRef((t, r) => {
  const { value: o, onChange: i, onActiveChange: c, index: f, mask: h } = t,
    d = Ff(t, ['value', 'onChange', 'onActiveChange', 'index', 'mask']),
    m = o && typeof h == 'string' ? h : o,
    g = (_) => {
      i(f, _.target.value)
    },
    b = l.useRef(null)
  l.useImperativeHandle(r, () => b.current)
  const p = () => {
      Nt(() => {
        var _
        const w = (_ = b.current) === null || _ === void 0 ? void 0 : _.input
        document.activeElement === w && w && w.select()
      })
    },
    C = (_) => {
      let { key: w } = _
      w === 'ArrowLeft' ? c(f - 1) : w === 'ArrowRight' && c(f + 1), p()
    },
    y = (_) => {
      _.key === 'Backspace' && !o && c(f - 1), p()
    }
  return l.createElement(
    tr,
    Object.assign({ type: h === !0 ? 'password' : 'text' }, d, {
      ref: b,
      value: m,
      onInput: g,
      onFocus: p,
      onKeyDown: C,
      onKeyUp: y,
      onMouseDown: p,
      onMouseUp: p,
    }),
  )
})
var jf = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
function Xn(t) {
  return (t || '').split('')
}
const Bf = l.forwardRef((t, r) => {
  const {
      prefixCls: o,
      length: i = 6,
      size: c,
      defaultValue: f,
      value: h,
      onChange: d,
      formatter: m,
      variant: g,
      disabled: b,
      status: p,
      autoFocus: C,
      mask: y,
      type: _,
    } = t,
    w = jf(t, [
      'prefixCls',
      'length',
      'size',
      'defaultValue',
      'value',
      'onChange',
      'formatter',
      'variant',
      'disabled',
      'status',
      'autoFocus',
      'mask',
      'type',
    ]),
    { getPrefixCls: S, direction: M } = l.useContext(_t),
    x = S('otp', o),
    E = Pn(w, { aria: !0, data: !0, attr: !0 }),
    R = Fr(x),
    [q, G, D] = Wf(x, R),
    N = Ln((Z) => c ?? Z),
    W = l.useContext(Tn),
    Y = si(W.status, p),
    F = l.useMemo(
      () =>
        Object.assign(Object.assign({}, W), {
          status: Y,
          hasFeedback: !1,
          feedbackIcon: null,
        }),
      [W, Y],
    ),
    T = l.useRef(null),
    L = l.useRef({})
  l.useImperativeHandle(r, () => ({
    focus: () => {
      var Z
      ;(Z = L.current[0]) === null || Z === void 0 || Z.focus()
    },
    blur: () => {
      var Z
      for (let A = 0; A < i; A += 1)
        (Z = L.current[A]) === null || Z === void 0 || Z.blur()
    },
    nativeElement: T.current,
  }))
  const P = (Z) => (m ? m(Z) : Z),
    [ee, se] = l.useState(Xn(P(f || '')))
  l.useEffect(() => {
    h !== void 0 && se(Xn(h))
  }, [h])
  const I = Dn((Z) => {
      se(Z),
        d &&
          Z.length === i &&
          Z.every((A) => A) &&
          Z.some((A, B) => ee[B] !== A) &&
          d(Z.join(''))
    }),
    V = Dn((Z, A) => {
      let B = Ot(ee)
      for (let ge = 0; ge < Z; ge += 1) B[ge] || (B[ge] = '')
      A.length <= 1 ? (B[Z] = A) : (B = B.slice(0, Z).concat(Xn(A))),
        (B = B.slice(0, i))
      for (let ge = B.length - 1; ge >= 0 && !B[ge]; ge -= 1) B.pop()
      const O = P(B.map((ge) => ge || ' ').join(''))
      return (B = Xn(O).map((ge, ie) => (ge === ' ' && !B[ie] ? B[ie] : ge))), B
    }),
    re = (Z, A) => {
      var B
      const O = V(Z, A),
        ge = Math.min(Z + A.length, i - 1)
      ge !== Z && ((B = L.current[ge]) === null || B === void 0 || B.focus()),
        I(O)
    },
    z = (Z) => {
      var A
      ;(A = L.current[Z]) === null || A === void 0 || A.focus()
    },
    Q = { variant: g, disabled: b, status: Y, mask: y, type: _ }
  return q(
    l.createElement(
      'div',
      Object.assign({}, E, {
        ref: T,
        className: ve(
          x,
          {
            [`${x}-sm`]: N === 'small',
            [`${x}-lg`]: N === 'large',
            [`${x}-rtl`]: M === 'rtl',
          },
          D,
          G,
        ),
      }),
      l.createElement(
        Tn.Provider,
        { value: F },
        Array.from({ length: i }).map((Z, A) => {
          const B = `otp-${A}`,
            O = ee[A] || ''
          return l.createElement(
            Af,
            Object.assign(
              {
                ref: (ge) => {
                  L.current[A] = ge
                },
                key: B,
                index: A,
                size: N,
                htmlSize: 1,
                className: `${x}-input`,
                onChange: re,
                value: O,
                onActiveChange: z,
                autoFocus: A === 0 && C,
              },
              Q,
            ),
          )
        }),
      ),
    ),
  )
})
var Vf = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M942.2 486.2Q889.47 375.11 816.7 305l-50.88 50.88C807.31 395.53 843.45 447.4 874.7 512 791.5 684.2 673.4 766 512 766q-72.67 0-133.87-22.38L323 798.75Q408 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 000-51.5zm-63.57-320.64L836 122.88a8 8 0 00-11.32 0L715.31 232.2Q624.86 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 000 51.5q56.69 119.4 136.5 191.41L112.48 835a8 8 0 000 11.31L155.17 889a8 8 0 0011.31 0l712.15-712.12a8 8 0 000-11.32zM149.3 512C232.6 339.8 350.7 258 512 258c54.54 0 104.13 9.36 149.12 28.39l-70.3 70.3a176 176 0 00-238.13 238.13l-83.42 83.42C223.1 637.49 183.3 582.28 149.3 512zm246.7 0a112.11 112.11 0 01146.2-106.69L401.31 546.2A112 112 0 01396 512z',
          },
        },
        {
          tag: 'path',
          attrs: {
            d: 'M508 624c-3.46 0-6.87-.16-10.25-.47l-52.82 52.82a176.09 176.09 0 00227.42-227.42l-52.82 52.82c.31 3.38.47 6.79.47 10.25a111.94 111.94 0 01-112 112z',
          },
        },
      ],
    },
    name: 'eye-invisible',
    theme: 'outlined',
  },
  Uf = function (r, o) {
    return l.createElement(Nn, at({}, r, { ref: o, icon: Vf }))
  },
  Gf = l.forwardRef(Uf),
  Kf = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M942.2 486.2C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 000 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM512 766c-161.3 0-279.4-81.8-362.7-254C232.6 339.8 350.7 258 512 258c161.3 0 279.4 81.8 362.7 254C791.5 684.2 673.4 766 512 766zm-4-430c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm0 288c-61.9 0-112-50.1-112-112s50.1-112 112-112 112 50.1 112 112-50.1 112-112 112z',
          },
        },
      ],
    },
    name: 'eye',
    theme: 'outlined',
  },
  qf = function (r, o) {
    return l.createElement(Nn, at({}, r, { ref: o, icon: Kf }))
  },
  Xf = l.forwardRef(qf),
  Zf = function (t, r) {
    var o = {}
    for (var i in t)
      Object.prototype.hasOwnProperty.call(t, i) &&
        r.indexOf(i) < 0 &&
        (o[i] = t[i])
    if (t != null && typeof Object.getOwnPropertySymbols == 'function')
      for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
        r.indexOf(i[c]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
          (o[i[c]] = t[i[c]])
    return o
  }
const Qf = (t) => (t ? l.createElement(Xf, null) : l.createElement(Gf, null)),
  Jf = { click: 'onClick', hover: 'onMouseOver' },
  eh = l.forwardRef((t, r) => {
    const {
        disabled: o,
        action: i = 'click',
        visibilityToggle: c = !0,
        iconRender: f = Qf,
      } = t,
      h = l.useContext(ii),
      d = o ?? h,
      m = typeof c == 'object' && c.visible !== void 0,
      [g, b] = l.useState(() => (m ? c.visible : !1)),
      p = l.useRef(null)
    l.useEffect(() => {
      m && b(c.visible)
    }, [m, c])
    const C = Mc(p),
      y = () => {
        d ||
          (g && C(),
          b((Y) => {
            var F
            const T = !Y
            return (
              typeof c == 'object' &&
                ((F = c.onVisibleChange) === null ||
                  F === void 0 ||
                  F.call(c, T)),
              T
            )
          }))
      },
      _ = (Y) => {
        const F = Jf[i] || '',
          T = f(g),
          L = {
            [F]: y,
            className: `${Y}-icon`,
            key: 'passwordIcon',
            onMouseDown: (P) => {
              P.preventDefault()
            },
            onMouseUp: (P) => {
              P.preventDefault()
            },
          }
        return l.cloneElement(
          l.isValidElement(T) ? T : l.createElement('span', null, T),
          L,
        )
      },
      { className: w, prefixCls: S, inputPrefixCls: M, size: x } = t,
      E = Zf(t, ['className', 'prefixCls', 'inputPrefixCls', 'size']),
      { getPrefixCls: R } = l.useContext(_t),
      q = R('input', M),
      G = R('input-password', S),
      D = c && _(G),
      N = ve(G, w, { [`${G}-${x}`]: !!x }),
      W = Object.assign(
        Object.assign({}, an(E, ['suffix', 'iconRender', 'visibilityToggle'])),
        {
          type: g ? 'text' : 'password',
          className: N,
          prefixCls: q,
          suffix: D,
        },
      )
    return (
      x && (W.size = x),
      l.createElement(tr, Object.assign({ ref: kr(r, p) }, W))
    )
  })
var th = function (t, r) {
  var o = {}
  for (var i in t)
    Object.prototype.hasOwnProperty.call(t, i) &&
      r.indexOf(i) < 0 &&
      (o[i] = t[i])
  if (t != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var c = 0, i = Object.getOwnPropertySymbols(t); c < i.length; c++)
      r.indexOf(i[c]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(t, i[c]) &&
        (o[i[c]] = t[i[c]])
  return o
}
const nh = l.forwardRef((t, r) => {
    const {
        prefixCls: o,
        inputPrefixCls: i,
        className: c,
        size: f,
        suffix: h,
        enterButton: d = !1,
        addonAfter: m,
        loading: g,
        disabled: b,
        onSearch: p,
        onChange: C,
        onCompositionStart: y,
        onCompositionEnd: _,
      } = t,
      w = th(t, [
        'prefixCls',
        'inputPrefixCls',
        'className',
        'size',
        'suffix',
        'enterButton',
        'addonAfter',
        'loading',
        'disabled',
        'onSearch',
        'onChange',
        'onCompositionStart',
        'onCompositionEnd',
      ]),
      { getPrefixCls: S, direction: M } = l.useContext(_t),
      x = l.useRef(!1),
      E = S('input-search', o),
      R = S('input', i),
      { compactSize: q } = ai(E, M),
      G = Ln((z) => {
        var Q
        return (Q = f ?? q) !== null && Q !== void 0 ? Q : z
      }),
      D = l.useRef(null),
      N = (z) => {
        z != null &&
          z.target &&
          z.type === 'click' &&
          p &&
          p(z.target.value, z, { source: 'clear' }),
          C == null || C(z)
      },
      W = (z) => {
        var Q
        document.activeElement ===
          ((Q = D.current) === null || Q === void 0 ? void 0 : Q.input) &&
          z.preventDefault()
      },
      Y = (z) => {
        var Q, Z
        p &&
          p(
            (Z =
              (Q = D.current) === null || Q === void 0 ? void 0 : Q.input) ===
              null || Z === void 0
              ? void 0
              : Z.value,
            z,
            { source: 'input' },
          )
      },
      F = (z) => {
        x.current || g || Y(z)
      },
      T = typeof d == 'boolean' ? l.createElement(ri, null) : null,
      L = `${E}-button`
    let P
    const ee = d || {},
      se = ee.type && ee.type.__ANT_BUTTON === !0
    se || ee.type === 'button'
      ? (P = $a(
          ee,
          Object.assign(
            {
              onMouseDown: W,
              onClick: (z) => {
                var Q, Z
                ;(Z =
                  (Q = ee == null ? void 0 : ee.props) === null || Q === void 0
                    ? void 0
                    : Q.onClick) === null ||
                  Z === void 0 ||
                  Z.call(Q, z),
                  Y(z)
              },
              key: 'enterButton',
            },
            se ? { className: L, size: G } : {},
          ),
        ))
      : (P = l.createElement(
          Oc,
          {
            className: L,
            type: d ? 'primary' : void 0,
            size: G,
            disabled: b,
            key: 'enterButton',
            onMouseDown: W,
            onClick: Y,
            loading: g,
            icon: T,
          },
          d,
        )),
      m && (P = [P, $a(m, { key: 'addonAfter' })])
    const I = ve(
        E,
        {
          [`${E}-rtl`]: M === 'rtl',
          [`${E}-${G}`]: !!G,
          [`${E}-with-button`]: !!d,
        },
        c,
      ),
      V = (z) => {
        ;(x.current = !0), y == null || y(z)
      },
      re = (z) => {
        ;(x.current = !1), _ == null || _(z)
      }
    return l.createElement(
      tr,
      Object.assign({ ref: kr(D, r), onPressEnter: F }, w, {
        size: G,
        onCompositionStart: V,
        onCompositionEnd: re,
        prefixCls: R,
        addonAfter: P,
        suffix: h,
        onChange: N,
        className: I,
        disabled: b,
      }),
    )
  }),
  Yn = tr
Yn.Group = Hf
Yn.Search = nh
Yn.TextArea = Ec
Yn.Password = eh
Yn.OTP = Bf
var rh = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M893.3 293.3L730.7 130.7c-7.5-7.5-16.7-13-26.7-16V112H144c-17.7 0-32 14.3-32 32v736c0 17.7 14.3 32 32 32h736c17.7 0 32-14.3 32-32V338.5c0-17-6.7-33.2-18.7-45.2zM384 184h256v104H384V184zm456 656H184V184h136v136c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V205.8l136 136V840zM512 442c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144zm0 224c-44.2 0-80-35.8-80-80s35.8-80 80-80 80 35.8 80 80-35.8 80-80 80z',
          },
        },
      ],
    },
    name: 'save',
    theme: 'outlined',
  },
  ah = function (r, o) {
    return l.createElement(Nn, at({}, r, { ref: o, icon: rh }))
  },
  sh = l.forwardRef(ah)
function Ni(t) {
  throw new Error(
    'Could not dynamically require "' +
      t +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  )
}
var Lr = { exports: {} },
  Qa
function ih() {
  return (
    Qa ||
      ((Qa = 1),
      (function (t, r) {
        ;(function (o, i) {
          t.exports = i()
        })(ci, function () {
          var o
          function i() {
            return o.apply(null, arguments)
          }
          function c(e) {
            o = e
          }
          function f(e) {
            return (
              e instanceof Array ||
              Object.prototype.toString.call(e) === '[object Array]'
            )
          }
          function h(e) {
            return (
              e != null &&
              Object.prototype.toString.call(e) === '[object Object]'
            )
          }
          function d(e, n) {
            return Object.prototype.hasOwnProperty.call(e, n)
          }
          function m(e) {
            if (Object.getOwnPropertyNames)
              return Object.getOwnPropertyNames(e).length === 0
            var n
            for (n in e) if (d(e, n)) return !1
            return !0
          }
          function g(e) {
            return e === void 0
          }
          function b(e) {
            return (
              typeof e == 'number' ||
              Object.prototype.toString.call(e) === '[object Number]'
            )
          }
          function p(e) {
            return (
              e instanceof Date ||
              Object.prototype.toString.call(e) === '[object Date]'
            )
          }
          function C(e, n) {
            var a = [],
              s,
              u = e.length
            for (s = 0; s < u; ++s) a.push(n(e[s], s))
            return a
          }
          function y(e, n) {
            for (var a in n) d(n, a) && (e[a] = n[a])
            return (
              d(n, 'toString') && (e.toString = n.toString),
              d(n, 'valueOf') && (e.valueOf = n.valueOf),
              e
            )
          }
          function _(e, n, a, s) {
            return ea(e, n, a, s, !0).utc()
          }
          function w() {
            return {
              empty: !1,
              unusedTokens: [],
              unusedInput: [],
              overflow: -2,
              charsLeftOver: 0,
              nullInput: !1,
              invalidEra: null,
              invalidMonth: null,
              invalidFormat: !1,
              userInvalidated: !1,
              iso: !1,
              parsedDateParts: [],
              era: null,
              meridiem: null,
              rfc2822: !1,
              weekdayMismatch: !1,
            }
          }
          function S(e) {
            return e._pf == null && (e._pf = w()), e._pf
          }
          var M
          Array.prototype.some
            ? (M = Array.prototype.some)
            : (M = function (e) {
                var n = Object(this),
                  a = n.length >>> 0,
                  s
                for (s = 0; s < a; s++)
                  if (s in n && e.call(this, n[s], s, n)) return !0
                return !1
              })
          function x(e) {
            var n = null,
              a = !1,
              s = e._d && !isNaN(e._d.getTime())
            if (
              (s &&
                ((n = S(e)),
                (a = M.call(n.parsedDateParts, function (u) {
                  return u != null
                })),
                (s =
                  n.overflow < 0 &&
                  !n.empty &&
                  !n.invalidEra &&
                  !n.invalidMonth &&
                  !n.invalidWeekday &&
                  !n.weekdayMismatch &&
                  !n.nullInput &&
                  !n.invalidFormat &&
                  !n.userInvalidated &&
                  (!n.meridiem || (n.meridiem && a))),
                e._strict &&
                  (s =
                    s &&
                    n.charsLeftOver === 0 &&
                    n.unusedTokens.length === 0 &&
                    n.bigHour === void 0)),
              Object.isFrozen == null || !Object.isFrozen(e))
            )
              e._isValid = s
            else return s
            return e._isValid
          }
          function E(e) {
            var n = _(NaN)
            return e != null ? y(S(n), e) : (S(n).userInvalidated = !0), n
          }
          var R = (i.momentProperties = []),
            q = !1
          function G(e, n) {
            var a,
              s,
              u,
              v = R.length
            if (
              (g(n._isAMomentObject) ||
                (e._isAMomentObject = n._isAMomentObject),
              g(n._i) || (e._i = n._i),
              g(n._f) || (e._f = n._f),
              g(n._l) || (e._l = n._l),
              g(n._strict) || (e._strict = n._strict),
              g(n._tzm) || (e._tzm = n._tzm),
              g(n._isUTC) || (e._isUTC = n._isUTC),
              g(n._offset) || (e._offset = n._offset),
              g(n._pf) || (e._pf = S(n)),
              g(n._locale) || (e._locale = n._locale),
              v > 0)
            )
              for (a = 0; a < v; a++) (s = R[a]), (u = n[s]), g(u) || (e[s] = u)
            return e
          }
          function D(e) {
            G(this, e),
              (this._d = new Date(e._d != null ? e._d.getTime() : NaN)),
              this.isValid() || (this._d = new Date(NaN)),
              q === !1 && ((q = !0), i.updateOffset(this), (q = !1))
          }
          function N(e) {
            return e instanceof D || (e != null && e._isAMomentObject != null)
          }
          function W(e) {
            i.suppressDeprecationWarnings === !1 &&
              typeof console < 'u' &&
              console.warn &&
              console.warn('Deprecation warning: ' + e)
          }
          function Y(e, n) {
            var a = !0
            return y(function () {
              if (
                (i.deprecationHandler != null && i.deprecationHandler(null, e),
                a)
              ) {
                var s = [],
                  u,
                  v,
                  $,
                  te = arguments.length
                for (v = 0; v < te; v++) {
                  if (((u = ''), typeof arguments[v] == 'object')) {
                    u +=
                      `
[` +
                      v +
                      '] '
                    for ($ in arguments[0])
                      d(arguments[0], $) &&
                        (u += $ + ': ' + arguments[0][$] + ', ')
                    u = u.slice(0, -2)
                  } else u = arguments[v]
                  s.push(u)
                }
                W(
                  e +
                    `
Arguments: ` +
                    Array.prototype.slice.call(s).join('') +
                    `
` +
                    new Error().stack,
                ),
                  (a = !1)
              }
              return n.apply(this, arguments)
            }, n)
          }
          var F = {}
          function T(e, n) {
            i.deprecationHandler != null && i.deprecationHandler(e, n),
              F[e] || (W(n), (F[e] = !0))
          }
          ;(i.suppressDeprecationWarnings = !1), (i.deprecationHandler = null)
          function L(e) {
            return (
              (typeof Function < 'u' && e instanceof Function) ||
              Object.prototype.toString.call(e) === '[object Function]'
            )
          }
          function P(e) {
            var n, a
            for (a in e)
              d(e, a) &&
                ((n = e[a]), L(n) ? (this[a] = n) : (this['_' + a] = n))
            ;(this._config = e),
              (this._dayOfMonthOrdinalParseLenient = new RegExp(
                (this._dayOfMonthOrdinalParse.source ||
                  this._ordinalParse.source) +
                  '|' +
                  /\d{1,2}/.source,
              ))
          }
          function ee(e, n) {
            var a = y({}, e),
              s
            for (s in n)
              d(n, s) &&
                (h(e[s]) && h(n[s])
                  ? ((a[s] = {}), y(a[s], e[s]), y(a[s], n[s]))
                  : n[s] != null
                    ? (a[s] = n[s])
                    : delete a[s])
            for (s in e) d(e, s) && !d(n, s) && h(e[s]) && (a[s] = y({}, a[s]))
            return a
          }
          function se(e) {
            e != null && this.set(e)
          }
          var I
          Object.keys
            ? (I = Object.keys)
            : (I = function (e) {
                var n,
                  a = []
                for (n in e) d(e, n) && a.push(n)
                return a
              })
          var V = {
            sameDay: '[Today at] LT',
            nextDay: '[Tomorrow at] LT',
            nextWeek: 'dddd [at] LT',
            lastDay: '[Yesterday at] LT',
            lastWeek: '[Last] dddd [at] LT',
            sameElse: 'L',
          }
          function re(e, n, a) {
            var s = this._calendar[e] || this._calendar.sameElse
            return L(s) ? s.call(n, a) : s
          }
          function z(e, n, a) {
            var s = '' + Math.abs(e),
              u = n - s.length,
              v = e >= 0
            return (
              (v ? (a ? '+' : '') : '-') +
              Math.pow(10, Math.max(0, u)).toString().substr(1) +
              s
            )
          }
          var Q =
              /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
            Z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
            A = {},
            B = {}
          function O(e, n, a, s) {
            var u = s
            typeof s == 'string' &&
              (u = function () {
                return this[s]()
              }),
              e && (B[e] = u),
              n &&
                (B[n[0]] = function () {
                  return z(u.apply(this, arguments), n[1], n[2])
                }),
              a &&
                (B[a] = function () {
                  return this.localeData().ordinal(u.apply(this, arguments), e)
                })
          }
          function ge(e) {
            return e.match(/\[[\s\S]/)
              ? e.replace(/^\[|\]$/g, '')
              : e.replace(/\\/g, '')
          }
          function ie(e) {
            var n = e.match(Q),
              a,
              s
            for (a = 0, s = n.length; a < s; a++)
              B[n[a]] ? (n[a] = B[n[a]]) : (n[a] = ge(n[a]))
            return function (u) {
              var v = '',
                $
              for ($ = 0; $ < s; $++) v += L(n[$]) ? n[$].call(u, e) : n[$]
              return v
            }
          }
          function De(e, n) {
            return e.isValid()
              ? ((n = Pe(n, e.localeData())), (A[n] = A[n] || ie(n)), A[n](e))
              : e.localeData().invalidDate()
          }
          function Pe(e, n) {
            var a = 5
            function s(u) {
              return n.longDateFormat(u) || u
            }
            for (Z.lastIndex = 0; a >= 0 && Z.test(e); )
              (e = e.replace(Z, s)), (Z.lastIndex = 0), (a -= 1)
            return e
          }
          var J = {
            LTS: 'h:mm:ss A',
            LT: 'h:mm A',
            L: 'MM/DD/YYYY',
            LL: 'MMMM D, YYYY',
            LLL: 'MMMM D, YYYY h:mm A',
            LLLL: 'dddd, MMMM D, YYYY h:mm A',
          }
          function H(e) {
            var n = this._longDateFormat[e],
              a = this._longDateFormat[e.toUpperCase()]
            return n || !a
              ? n
              : ((this._longDateFormat[e] = a
                  .match(Q)
                  .map(function (s) {
                    return s === 'MMMM' ||
                      s === 'MM' ||
                      s === 'DD' ||
                      s === 'dddd'
                      ? s.slice(1)
                      : s
                  })
                  .join('')),
                this._longDateFormat[e])
          }
          var ae = 'Invalid date'
          function be() {
            return this._invalidDate
          }
          var j = '%d',
            de = /\d{1,2}/
          function Ie(e) {
            return this._ordinal.replace('%d', e)
          }
          var Ye = {
            future: 'in %s',
            past: '%s ago',
            s: 'a few seconds',
            ss: '%d seconds',
            m: 'a minute',
            mm: '%d minutes',
            h: 'an hour',
            hh: '%d hours',
            d: 'a day',
            dd: '%d days',
            w: 'a week',
            ww: '%d weeks',
            M: 'a month',
            MM: '%d months',
            y: 'a year',
            yy: '%d years',
          }
          function ye(e, n, a, s) {
            var u = this._relativeTime[a]
            return L(u) ? u(e, n, a, s) : u.replace(/%d/i, e)
          }
          function Ce(e, n) {
            var a = this._relativeTime[e > 0 ? 'future' : 'past']
            return L(a) ? a(n) : a.replace(/%s/i, n)
          }
          var Be = {
            D: 'date',
            dates: 'date',
            date: 'date',
            d: 'day',
            days: 'day',
            day: 'day',
            e: 'weekday',
            weekdays: 'weekday',
            weekday: 'weekday',
            E: 'isoWeekday',
            isoweekdays: 'isoWeekday',
            isoweekday: 'isoWeekday',
            DDD: 'dayOfYear',
            dayofyears: 'dayOfYear',
            dayofyear: 'dayOfYear',
            h: 'hour',
            hours: 'hour',
            hour: 'hour',
            ms: 'millisecond',
            milliseconds: 'millisecond',
            millisecond: 'millisecond',
            m: 'minute',
            minutes: 'minute',
            minute: 'minute',
            M: 'month',
            months: 'month',
            month: 'month',
            Q: 'quarter',
            quarters: 'quarter',
            quarter: 'quarter',
            s: 'second',
            seconds: 'second',
            second: 'second',
            gg: 'weekYear',
            weekyears: 'weekYear',
            weekyear: 'weekYear',
            GG: 'isoWeekYear',
            isoweekyears: 'isoWeekYear',
            isoweekyear: 'isoWeekYear',
            w: 'week',
            weeks: 'week',
            week: 'week',
            W: 'isoWeek',
            isoweeks: 'isoWeek',
            isoweek: 'isoWeek',
            y: 'year',
            years: 'year',
            year: 'year',
          }
          function ze(e) {
            return typeof e == 'string' ? Be[e] || Be[e.toLowerCase()] : void 0
          }
          function Xe(e) {
            var n = {},
              a,
              s
            for (s in e) d(e, s) && ((a = ze(s)), a && (n[a] = e[s]))
            return n
          }
          var Je = {
            date: 9,
            day: 11,
            weekday: 11,
            isoWeekday: 11,
            dayOfYear: 4,
            hour: 13,
            millisecond: 16,
            minute: 14,
            month: 8,
            quarter: 7,
            second: 15,
            weekYear: 1,
            isoWeekYear: 1,
            week: 5,
            isoWeek: 5,
            year: 1,
          }
          function Ue(e) {
            var n = [],
              a
            for (a in e) d(e, a) && n.push({ unit: a, priority: Je[a] })
            return (
              n.sort(function (s, u) {
                return s.priority - u.priority
              }),
              n
            )
          }
          var ut = /\d/,
            Se = /\d\d/,
            qe = /\d{3}/,
            Le = /\d{4}/,
            Ge = /[+-]?\d{6}/,
            xe = /\d\d?/,
            mt = /\d\d\d\d?/,
            vt = /\d\d\d\d\d\d?/,
            Ke = /\d{1,3}/,
            ot = /\d{1,4}/,
            gt = /[+-]?\d{1,6}/,
            Ze = /\d+/,
            it = /[+-]?\d+/,
            dt = /Z|[+-]\d\d:?\d\d/gi,
            Ct = /Z|[+-]\d\d(?::?\d\d)?/gi,
            zt = /[+-]?\d+(\.\d{1,3})?/,
            pt =
              /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
            Et = /^[1-9]\d?/,
            bt = /^([1-9]\d|\d)/,
            yt
          yt = {}
          function K(e, n, a) {
            yt[e] = L(n)
              ? n
              : function (s, u) {
                  return s && a ? a : n
                }
          }
          function St(e, n) {
            return d(yt, e) ? yt[e](n._strict, n._locale) : new RegExp(Lt(e))
          }
          function Lt(e) {
            return ke(
              e
                .replace('\\', '')
                .replace(
                  /\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,
                  function (n, a, s, u, v) {
                    return a || s || u || v
                  },
                ),
            )
          }
          function ke(e) {
            return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
          }
          function nt(e) {
            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
          }
          function we(e) {
            var n = +e,
              a = 0
            return n !== 0 && isFinite(n) && (a = nt(n)), a
          }
          var ft = {}
          function X(e, n) {
            var a,
              s = n,
              u
            for (
              typeof e == 'string' && (e = [e]),
                b(n) &&
                  (s = function (v, $) {
                    $[n] = we(v)
                  }),
                u = e.length,
                a = 0;
              a < u;
              a++
            )
              ft[e[a]] = s
          }
          function fe(e, n) {
            X(e, function (a, s, u, v) {
              ;(u._w = u._w || {}), n(a, u._w, u, v)
            })
          }
          function oe(e, n, a) {
            n != null && d(ft, e) && ft[e](n, a._a, a, e)
          }
          function ue(e) {
            return (e % 4 === 0 && e % 100 !== 0) || e % 400 === 0
          }
          var pe = 0,
            Ne = 1,
            Qe = 2,
            he = 3,
            me = 4,
            $e = 5,
            Ae = 6,
            It = 7,
            ht = 8
          O('Y', 0, 0, function () {
            var e = this.year()
            return e <= 9999 ? z(e, 4) : '+' + e
          }),
            O(0, ['YY', 2], 0, function () {
              return this.year() % 100
            }),
            O(0, ['YYYY', 4], 0, 'year'),
            O(0, ['YYYYY', 5], 0, 'year'),
            O(0, ['YYYYYY', 6, !0], 0, 'year'),
            K('Y', it),
            K('YY', xe, Se),
            K('YYYY', ot, Le),
            K('YYYYY', gt, Ge),
            K('YYYYYY', gt, Ge),
            X(['YYYYY', 'YYYYYY'], pe),
            X('YYYY', function (e, n) {
              n[pe] = e.length === 2 ? i.parseTwoDigitYear(e) : we(e)
            }),
            X('YY', function (e, n) {
              n[pe] = i.parseTwoDigitYear(e)
            }),
            X('Y', function (e, n) {
              n[pe] = parseInt(e, 10)
            })
          function xt(e) {
            return ue(e) ? 366 : 365
          }
          i.parseTwoDigitYear = function (e) {
            return we(e) + (we(e) > 68 ? 1900 : 2e3)
          }
          var le = Me('FullYear', !0)
          function ne() {
            return ue(this.year())
          }
          function Me(e, n) {
            return function (a) {
              return a != null
                ? (st(this, e, a), i.updateOffset(this, n), this)
                : He(this, e)
            }
          }
          function He(e, n) {
            if (!e.isValid()) return NaN
            var a = e._d,
              s = e._isUTC
            switch (n) {
              case 'Milliseconds':
                return s ? a.getUTCMilliseconds() : a.getMilliseconds()
              case 'Seconds':
                return s ? a.getUTCSeconds() : a.getSeconds()
              case 'Minutes':
                return s ? a.getUTCMinutes() : a.getMinutes()
              case 'Hours':
                return s ? a.getUTCHours() : a.getHours()
              case 'Date':
                return s ? a.getUTCDate() : a.getDate()
              case 'Day':
                return s ? a.getUTCDay() : a.getDay()
              case 'Month':
                return s ? a.getUTCMonth() : a.getMonth()
              case 'FullYear':
                return s ? a.getUTCFullYear() : a.getFullYear()
              default:
                return NaN
            }
          }
          function st(e, n, a) {
            var s, u, v, $, te
            if (!(!e.isValid() || isNaN(a))) {
              switch (((s = e._d), (u = e._isUTC), n)) {
                case 'Milliseconds':
                  return void (u
                    ? s.setUTCMilliseconds(a)
                    : s.setMilliseconds(a))
                case 'Seconds':
                  return void (u ? s.setUTCSeconds(a) : s.setSeconds(a))
                case 'Minutes':
                  return void (u ? s.setUTCMinutes(a) : s.setMinutes(a))
                case 'Hours':
                  return void (u ? s.setUTCHours(a) : s.setHours(a))
                case 'Date':
                  return void (u ? s.setUTCDate(a) : s.setDate(a))
                case 'FullYear':
                  break
                default:
                  return
              }
              ;(v = a),
                ($ = e.month()),
                (te = e.date()),
                (te = te === 29 && $ === 1 && !ue(v) ? 28 : te),
                u ? s.setUTCFullYear(v, $, te) : s.setFullYear(v, $, te)
            }
          }
          function qt(e) {
            return (e = ze(e)), L(this[e]) ? this[e]() : this
          }
          function Yt(e, n) {
            if (typeof e == 'object') {
              e = Xe(e)
              var a = Ue(e),
                s,
                u = a.length
              for (s = 0; s < u; s++) this[a[s].unit](e[a[s].unit])
            } else if (((e = ze(e)), L(this[e]))) return this[e](n)
            return this
          }
          function _n(e, n) {
            return ((e % n) + n) % n
          }
          var et
          Array.prototype.indexOf
            ? (et = Array.prototype.indexOf)
            : (et = function (e) {
                var n
                for (n = 0; n < this.length; ++n) if (this[n] === e) return n
                return -1
              })
          function At(e, n) {
            if (isNaN(e) || isNaN(n)) return NaN
            var a = _n(n, 12)
            return (
              (e += (n - a) / 12),
              a === 1 ? (ue(e) ? 29 : 28) : 31 - ((a % 7) % 2)
            )
          }
          O('M', ['MM', 2], 'Mo', function () {
            return this.month() + 1
          }),
            O('MMM', 0, 0, function (e) {
              return this.localeData().monthsShort(this, e)
            }),
            O('MMMM', 0, 0, function (e) {
              return this.localeData().months(this, e)
            }),
            K('M', xe, Et),
            K('MM', xe, Se),
            K('MMM', function (e, n) {
              return n.monthsShortRegex(e)
            }),
            K('MMMM', function (e, n) {
              return n.monthsRegex(e)
            }),
            X(['M', 'MM'], function (e, n) {
              n[Ne] = we(e) - 1
            }),
            X(['MMM', 'MMMM'], function (e, n, a, s) {
              var u = a._locale.monthsParse(e, s, a._strict)
              u != null ? (n[Ne] = u) : (S(a).invalidMonth = e)
            })
          var Jt =
              'January_February_March_April_May_June_July_August_September_October_November_December'.split(
                '_',
              ),
            Cn = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_'),
            xn = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
            or = pt,
            Hn = pt
          function sr(e, n) {
            return e
              ? f(this._months)
                ? this._months[e.month()]
                : this._months[
                    (this._months.isFormat || xn).test(n)
                      ? 'format'
                      : 'standalone'
                  ][e.month()]
              : f(this._months)
                ? this._months
                : this._months.standalone
          }
          function lr(e, n) {
            return e
              ? f(this._monthsShort)
                ? this._monthsShort[e.month()]
                : this._monthsShort[xn.test(n) ? 'format' : 'standalone'][
                    e.month()
                  ]
              : f(this._monthsShort)
                ? this._monthsShort
                : this._monthsShort.standalone
          }
          function cr(e, n, a) {
            var s,
              u,
              v,
              $ = e.toLocaleLowerCase()
            if (!this._monthsParse)
              for (
                this._monthsParse = [],
                  this._longMonthsParse = [],
                  this._shortMonthsParse = [],
                  s = 0;
                s < 12;
                ++s
              )
                (v = _([2e3, s])),
                  (this._shortMonthsParse[s] = this.monthsShort(
                    v,
                    '',
                  ).toLocaleLowerCase()),
                  (this._longMonthsParse[s] = this.months(
                    v,
                    '',
                  ).toLocaleLowerCase())
            return a
              ? n === 'MMM'
                ? ((u = et.call(this._shortMonthsParse, $)),
                  u !== -1 ? u : null)
                : ((u = et.call(this._longMonthsParse, $)), u !== -1 ? u : null)
              : n === 'MMM'
                ? ((u = et.call(this._shortMonthsParse, $)),
                  u !== -1
                    ? u
                    : ((u = et.call(this._longMonthsParse, $)),
                      u !== -1 ? u : null))
                : ((u = et.call(this._longMonthsParse, $)),
                  u !== -1
                    ? u
                    : ((u = et.call(this._shortMonthsParse, $)),
                      u !== -1 ? u : null))
          }
          function ur(e, n, a) {
            var s, u, v
            if (this._monthsParseExact) return cr.call(this, e, n, a)
            for (
              this._monthsParse ||
                ((this._monthsParse = []),
                (this._longMonthsParse = []),
                (this._shortMonthsParse = [])),
                s = 0;
              s < 12;
              s++
            ) {
              if (
                ((u = _([2e3, s])),
                a &&
                  !this._longMonthsParse[s] &&
                  ((this._longMonthsParse[s] = new RegExp(
                    '^' + this.months(u, '').replace('.', '') + '$',
                    'i',
                  )),
                  (this._shortMonthsParse[s] = new RegExp(
                    '^' + this.monthsShort(u, '').replace('.', '') + '$',
                    'i',
                  ))),
                !a &&
                  !this._monthsParse[s] &&
                  ((v =
                    '^' + this.months(u, '') + '|^' + this.monthsShort(u, '')),
                  (this._monthsParse[s] = new RegExp(v.replace('.', ''), 'i'))),
                a && n === 'MMMM' && this._longMonthsParse[s].test(e))
              )
                return s
              if (a && n === 'MMM' && this._shortMonthsParse[s].test(e))
                return s
              if (!a && this._monthsParse[s].test(e)) return s
            }
          }
          function $n(e, n) {
            if (!e.isValid()) return e
            if (typeof n == 'string') {
              if (/^\d+$/.test(n)) n = we(n)
              else if (((n = e.localeData().monthsParse(n)), !b(n))) return e
            }
            var a = n,
              s = e.date()
            return (
              (s = s < 29 ? s : Math.min(s, At(e.year(), a))),
              e._isUTC ? e._d.setUTCMonth(a, s) : e._d.setMonth(a, s),
              e
            )
          }
          function on(e) {
            return e != null
              ? ($n(this, e), i.updateOffset(this, !0), this)
              : He(this, 'Month')
          }
          function We() {
            return At(this.year(), this.month())
          }
          function Te(e) {
            return this._monthsParseExact
              ? (d(this, '_monthsRegex') || wt.call(this),
                e ? this._monthsShortStrictRegex : this._monthsShortRegex)
              : (d(this, '_monthsShortRegex') || (this._monthsShortRegex = or),
                this._monthsShortStrictRegex && e
                  ? this._monthsShortStrictRegex
                  : this._monthsShortRegex)
          }
          function $t(e) {
            return this._monthsParseExact
              ? (d(this, '_monthsRegex') || wt.call(this),
                e ? this._monthsStrictRegex : this._monthsRegex)
              : (d(this, '_monthsRegex') || (this._monthsRegex = Hn),
                this._monthsStrictRegex && e
                  ? this._monthsStrictRegex
                  : this._monthsRegex)
          }
          function wt() {
            function e(Re, Fe) {
              return Fe.length - Re.length
            }
            var n = [],
              a = [],
              s = [],
              u,
              v,
              $,
              te
            for (u = 0; u < 12; u++)
              (v = _([2e3, u])),
                ($ = ke(this.monthsShort(v, ''))),
                (te = ke(this.months(v, ''))),
                n.push($),
                a.push(te),
                s.push(te),
                s.push($)
            n.sort(e),
              a.sort(e),
              s.sort(e),
              (this._monthsRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
              (this._monthsShortRegex = this._monthsRegex),
              (this._monthsStrictRegex = new RegExp(
                '^(' + a.join('|') + ')',
                'i',
              )),
              (this._monthsShortStrictRegex = new RegExp(
                '^(' + n.join('|') + ')',
                'i',
              ))
          }
          function ct(e, n, a, s, u, v, $) {
            var te
            return (
              e < 100 && e >= 0
                ? ((te = new Date(e + 400, n, a, s, u, v, $)),
                  isFinite(te.getFullYear()) && te.setFullYear(e))
                : (te = new Date(e, n, a, s, u, v, $)),
              te
            )
          }
          function lt(e) {
            var n, a
            return (
              e < 100 && e >= 0
                ? ((a = Array.prototype.slice.call(arguments)),
                  (a[0] = e + 400),
                  (n = new Date(Date.UTC.apply(null, a))),
                  isFinite(n.getUTCFullYear()) && n.setUTCFullYear(e))
                : (n = new Date(Date.UTC.apply(null, arguments))),
              n
            )
          }
          function Dt(e, n, a) {
            var s = 7 + n - a,
              u = (7 + lt(e, 0, s).getUTCDay() - n) % 7
            return -u + s - 1
          }
          function Tt(e, n, a, s, u) {
            var v = (7 + a - s) % 7,
              $ = Dt(e, s, u),
              te = 1 + 7 * (n - 1) + v + $,
              Re,
              Fe
            return (
              te <= 0
                ? ((Re = e - 1), (Fe = xt(Re) + te))
                : te > xt(e)
                  ? ((Re = e + 1), (Fe = te - xt(e)))
                  : ((Re = e), (Fe = te)),
              { year: Re, dayOfYear: Fe }
            )
          }
          function Pt(e, n, a) {
            var s = Dt(e.year(), n, a),
              u = Math.floor((e.dayOfYear() - s - 1) / 7) + 1,
              v,
              $
            return (
              u < 1
                ? (($ = e.year() - 1), (v = u + Mt($, n, a)))
                : u > Mt(e.year(), n, a)
                  ? ((v = u - Mt(e.year(), n, a)), ($ = e.year() + 1))
                  : (($ = e.year()), (v = u)),
              { week: v, year: $ }
            )
          }
          function Mt(e, n, a) {
            var s = Dt(e, n, a),
              u = Dt(e + 1, n, a)
            return (xt(e) - s + u) / 7
          }
          O('w', ['ww', 2], 'wo', 'week'),
            O('W', ['WW', 2], 'Wo', 'isoWeek'),
            K('w', xe, Et),
            K('ww', xe, Se),
            K('W', xe, Et),
            K('WW', xe, Se),
            fe(['w', 'ww', 'W', 'WW'], function (e, n, a, s) {
              n[s.substr(0, 1)] = we(e)
            })
          function jt(e) {
            return Pt(e, this._week.dow, this._week.doy).week
          }
          var sn = { dow: 0, doy: 6 }
          function ln() {
            return this._week.dow
          }
          function Li() {
            return this._week.doy
          }
          function zi(e) {
            var n = this.localeData().week(this)
            return e == null ? n : this.add((e - n) * 7, 'd')
          }
          function Yi(e) {
            var n = Pt(this, 1, 4).week
            return e == null ? n : this.add((e - n) * 7, 'd')
          }
          O('d', 0, 'do', 'day'),
            O('dd', 0, 0, function (e) {
              return this.localeData().weekdaysMin(this, e)
            }),
            O('ddd', 0, 0, function (e) {
              return this.localeData().weekdaysShort(this, e)
            }),
            O('dddd', 0, 0, function (e) {
              return this.localeData().weekdays(this, e)
            }),
            O('e', 0, 0, 'weekday'),
            O('E', 0, 0, 'isoWeekday'),
            K('d', xe),
            K('e', xe),
            K('E', xe),
            K('dd', function (e, n) {
              return n.weekdaysMinRegex(e)
            }),
            K('ddd', function (e, n) {
              return n.weekdaysShortRegex(e)
            }),
            K('dddd', function (e, n) {
              return n.weekdaysRegex(e)
            }),
            fe(['dd', 'ddd', 'dddd'], function (e, n, a, s) {
              var u = a._locale.weekdaysParse(e, s, a._strict)
              u != null ? (n.d = u) : (S(a).invalidWeekday = e)
            }),
            fe(['d', 'e', 'E'], function (e, n, a, s) {
              n[s] = we(e)
            })
          function Hi(e, n) {
            return typeof e != 'string'
              ? e
              : isNaN(e)
                ? ((e = n.weekdaysParse(e)), typeof e == 'number' ? e : null)
                : parseInt(e, 10)
          }
          function ki(e, n) {
            return typeof e == 'string'
              ? n.weekdaysParse(e) % 7 || 7
              : isNaN(e)
                ? null
                : e
          }
          function dr(e, n) {
            return e.slice(n, 7).concat(e.slice(0, n))
          }
          var Wi =
              'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
                '_',
              ),
            Ur = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
            Fi = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
            Ai = pt,
            ji = pt,
            Bi = pt
          function Vi(e, n) {
            var a = f(this._weekdays)
              ? this._weekdays
              : this._weekdays[
                  e && e !== !0 && this._weekdays.isFormat.test(n)
                    ? 'format'
                    : 'standalone'
                ]
            return e === !0 ? dr(a, this._week.dow) : e ? a[e.day()] : a
          }
          function Ui(e) {
            return e === !0
              ? dr(this._weekdaysShort, this._week.dow)
              : e
                ? this._weekdaysShort[e.day()]
                : this._weekdaysShort
          }
          function Gi(e) {
            return e === !0
              ? dr(this._weekdaysMin, this._week.dow)
              : e
                ? this._weekdaysMin[e.day()]
                : this._weekdaysMin
          }
          function Ki(e, n, a) {
            var s,
              u,
              v,
              $ = e.toLocaleLowerCase()
            if (!this._weekdaysParse)
              for (
                this._weekdaysParse = [],
                  this._shortWeekdaysParse = [],
                  this._minWeekdaysParse = [],
                  s = 0;
                s < 7;
                ++s
              )
                (v = _([2e3, 1]).day(s)),
                  (this._minWeekdaysParse[s] = this.weekdaysMin(
                    v,
                    '',
                  ).toLocaleLowerCase()),
                  (this._shortWeekdaysParse[s] = this.weekdaysShort(
                    v,
                    '',
                  ).toLocaleLowerCase()),
                  (this._weekdaysParse[s] = this.weekdays(
                    v,
                    '',
                  ).toLocaleLowerCase())
            return a
              ? n === 'dddd'
                ? ((u = et.call(this._weekdaysParse, $)), u !== -1 ? u : null)
                : n === 'ddd'
                  ? ((u = et.call(this._shortWeekdaysParse, $)),
                    u !== -1 ? u : null)
                  : ((u = et.call(this._minWeekdaysParse, $)),
                    u !== -1 ? u : null)
              : n === 'dddd'
                ? ((u = et.call(this._weekdaysParse, $)),
                  u !== -1 ||
                  ((u = et.call(this._shortWeekdaysParse, $)), u !== -1)
                    ? u
                    : ((u = et.call(this._minWeekdaysParse, $)),
                      u !== -1 ? u : null))
                : n === 'ddd'
                  ? ((u = et.call(this._shortWeekdaysParse, $)),
                    u !== -1 ||
                    ((u = et.call(this._weekdaysParse, $)), u !== -1)
                      ? u
                      : ((u = et.call(this._minWeekdaysParse, $)),
                        u !== -1 ? u : null))
                  : ((u = et.call(this._minWeekdaysParse, $)),
                    u !== -1 ||
                    ((u = et.call(this._weekdaysParse, $)), u !== -1)
                      ? u
                      : ((u = et.call(this._shortWeekdaysParse, $)),
                        u !== -1 ? u : null))
          }
          function qi(e, n, a) {
            var s, u, v
            if (this._weekdaysParseExact) return Ki.call(this, e, n, a)
            for (
              this._weekdaysParse ||
                ((this._weekdaysParse = []),
                (this._minWeekdaysParse = []),
                (this._shortWeekdaysParse = []),
                (this._fullWeekdaysParse = [])),
                s = 0;
              s < 7;
              s++
            ) {
              if (
                ((u = _([2e3, 1]).day(s)),
                a &&
                  !this._fullWeekdaysParse[s] &&
                  ((this._fullWeekdaysParse[s] = new RegExp(
                    '^' + this.weekdays(u, '').replace('.', '\\.?') + '$',
                    'i',
                  )),
                  (this._shortWeekdaysParse[s] = new RegExp(
                    '^' + this.weekdaysShort(u, '').replace('.', '\\.?') + '$',
                    'i',
                  )),
                  (this._minWeekdaysParse[s] = new RegExp(
                    '^' + this.weekdaysMin(u, '').replace('.', '\\.?') + '$',
                    'i',
                  ))),
                this._weekdaysParse[s] ||
                  ((v =
                    '^' +
                    this.weekdays(u, '') +
                    '|^' +
                    this.weekdaysShort(u, '') +
                    '|^' +
                    this.weekdaysMin(u, '')),
                  (this._weekdaysParse[s] = new RegExp(
                    v.replace('.', ''),
                    'i',
                  ))),
                a && n === 'dddd' && this._fullWeekdaysParse[s].test(e))
              )
                return s
              if (a && n === 'ddd' && this._shortWeekdaysParse[s].test(e))
                return s
              if (a && n === 'dd' && this._minWeekdaysParse[s].test(e)) return s
              if (!a && this._weekdaysParse[s].test(e)) return s
            }
          }
          function Xi(e) {
            if (!this.isValid()) return e != null ? this : NaN
            var n = He(this, 'Day')
            return e != null
              ? ((e = Hi(e, this.localeData())), this.add(e - n, 'd'))
              : n
          }
          function Zi(e) {
            if (!this.isValid()) return e != null ? this : NaN
            var n = (this.day() + 7 - this.localeData()._week.dow) % 7
            return e == null ? n : this.add(e - n, 'd')
          }
          function Qi(e) {
            if (!this.isValid()) return e != null ? this : NaN
            if (e != null) {
              var n = ki(e, this.localeData())
              return this.day(this.day() % 7 ? n : n - 7)
            } else return this.day() || 7
          }
          function Ji(e) {
            return this._weekdaysParseExact
              ? (d(this, '_weekdaysRegex') || fr.call(this),
                e ? this._weekdaysStrictRegex : this._weekdaysRegex)
              : (d(this, '_weekdaysRegex') || (this._weekdaysRegex = Ai),
                this._weekdaysStrictRegex && e
                  ? this._weekdaysStrictRegex
                  : this._weekdaysRegex)
          }
          function eo(e) {
            return this._weekdaysParseExact
              ? (d(this, '_weekdaysRegex') || fr.call(this),
                e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
              : (d(this, '_weekdaysShortRegex') ||
                  (this._weekdaysShortRegex = ji),
                this._weekdaysShortStrictRegex && e
                  ? this._weekdaysShortStrictRegex
                  : this._weekdaysShortRegex)
          }
          function to(e) {
            return this._weekdaysParseExact
              ? (d(this, '_weekdaysRegex') || fr.call(this),
                e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
              : (d(this, '_weekdaysMinRegex') || (this._weekdaysMinRegex = Bi),
                this._weekdaysMinStrictRegex && e
                  ? this._weekdaysMinStrictRegex
                  : this._weekdaysMinRegex)
          }
          function fr() {
            function e(Rt, Kt) {
              return Kt.length - Rt.length
            }
            var n = [],
              a = [],
              s = [],
              u = [],
              v,
              $,
              te,
              Re,
              Fe
            for (v = 0; v < 7; v++)
              ($ = _([2e3, 1]).day(v)),
                (te = ke(this.weekdaysMin($, ''))),
                (Re = ke(this.weekdaysShort($, ''))),
                (Fe = ke(this.weekdays($, ''))),
                n.push(te),
                a.push(Re),
                s.push(Fe),
                u.push(te),
                u.push(Re),
                u.push(Fe)
            n.sort(e),
              a.sort(e),
              s.sort(e),
              u.sort(e),
              (this._weekdaysRegex = new RegExp('^(' + u.join('|') + ')', 'i')),
              (this._weekdaysShortRegex = this._weekdaysRegex),
              (this._weekdaysMinRegex = this._weekdaysRegex),
              (this._weekdaysStrictRegex = new RegExp(
                '^(' + s.join('|') + ')',
                'i',
              )),
              (this._weekdaysShortStrictRegex = new RegExp(
                '^(' + a.join('|') + ')',
                'i',
              )),
              (this._weekdaysMinStrictRegex = new RegExp(
                '^(' + n.join('|') + ')',
                'i',
              ))
          }
          function hr() {
            return this.hours() % 12 || 12
          }
          function no() {
            return this.hours() || 24
          }
          O('H', ['HH', 2], 0, 'hour'),
            O('h', ['hh', 2], 0, hr),
            O('k', ['kk', 2], 0, no),
            O('hmm', 0, 0, function () {
              return '' + hr.apply(this) + z(this.minutes(), 2)
            }),
            O('hmmss', 0, 0, function () {
              return (
                '' +
                hr.apply(this) +
                z(this.minutes(), 2) +
                z(this.seconds(), 2)
              )
            }),
            O('Hmm', 0, 0, function () {
              return '' + this.hours() + z(this.minutes(), 2)
            }),
            O('Hmmss', 0, 0, function () {
              return (
                '' + this.hours() + z(this.minutes(), 2) + z(this.seconds(), 2)
              )
            })
          function Gr(e, n) {
            O(e, 0, 0, function () {
              return this.localeData().meridiem(this.hours(), this.minutes(), n)
            })
          }
          Gr('a', !0), Gr('A', !1)
          function Kr(e, n) {
            return n._meridiemParse
          }
          K('a', Kr),
            K('A', Kr),
            K('H', xe, bt),
            K('h', xe, Et),
            K('k', xe, Et),
            K('HH', xe, Se),
            K('hh', xe, Se),
            K('kk', xe, Se),
            K('hmm', mt),
            K('hmmss', vt),
            K('Hmm', mt),
            K('Hmmss', vt),
            X(['H', 'HH'], he),
            X(['k', 'kk'], function (e, n, a) {
              var s = we(e)
              n[he] = s === 24 ? 0 : s
            }),
            X(['a', 'A'], function (e, n, a) {
              ;(a._isPm = a._locale.isPM(e)), (a._meridiem = e)
            }),
            X(['h', 'hh'], function (e, n, a) {
              ;(n[he] = we(e)), (S(a).bigHour = !0)
            }),
            X('hmm', function (e, n, a) {
              var s = e.length - 2
              ;(n[he] = we(e.substr(0, s))),
                (n[me] = we(e.substr(s))),
                (S(a).bigHour = !0)
            }),
            X('hmmss', function (e, n, a) {
              var s = e.length - 4,
                u = e.length - 2
              ;(n[he] = we(e.substr(0, s))),
                (n[me] = we(e.substr(s, 2))),
                (n[$e] = we(e.substr(u))),
                (S(a).bigHour = !0)
            }),
            X('Hmm', function (e, n, a) {
              var s = e.length - 2
              ;(n[he] = we(e.substr(0, s))), (n[me] = we(e.substr(s)))
            }),
            X('Hmmss', function (e, n, a) {
              var s = e.length - 4,
                u = e.length - 2
              ;(n[he] = we(e.substr(0, s))),
                (n[me] = we(e.substr(s, 2))),
                (n[$e] = we(e.substr(u)))
            })
          function ro(e) {
            return (e + '').toLowerCase().charAt(0) === 'p'
          }
          var ao = /[ap]\.?m?\.?/i,
            io = Me('Hours', !0)
          function oo(e, n, a) {
            return e > 11 ? (a ? 'pm' : 'PM') : a ? 'am' : 'AM'
          }
          var qr = {
              calendar: V,
              longDateFormat: J,
              invalidDate: ae,
              ordinal: j,
              dayOfMonthOrdinalParse: de,
              relativeTime: Ye,
              months: Jt,
              monthsShort: Cn,
              week: sn,
              weekdays: Wi,
              weekdaysMin: Fi,
              weekdaysShort: Ur,
              meridiemParse: ao,
            },
            rt = {},
            Mn = {},
            On
          function so(e, n) {
            var a,
              s = Math.min(e.length, n.length)
            for (a = 0; a < s; a += 1) if (e[a] !== n[a]) return a
            return s
          }
          function Xr(e) {
            return e && e.toLowerCase().replace('_', '-')
          }
          function lo(e) {
            for (var n = 0, a, s, u, v; n < e.length; ) {
              for (
                v = Xr(e[n]).split('-'),
                  a = v.length,
                  s = Xr(e[n + 1]),
                  s = s ? s.split('-') : null;
                a > 0;

              ) {
                if (((u = kn(v.slice(0, a).join('-'))), u)) return u
                if (s && s.length >= a && so(v, s) >= a - 1) break
                a--
              }
              n++
            }
            return On
          }
          function co(e) {
            return !!(e && e.match('^[^/\\\\]*$'))
          }
          function kn(e) {
            var n = null,
              a
            if (rt[e] === void 0 && t && t.exports && co(e))
              try {
                ;(n = On._abbr), (a = Ni), a('./locale/' + e), Xt(n)
              } catch {
                rt[e] = null
              }
            return rt[e]
          }
          function Xt(e, n) {
            var a
            return (
              e &&
                (g(n) ? (a = Bt(e)) : (a = mr(e, n)),
                a
                  ? (On = a)
                  : typeof console < 'u' &&
                    console.warn &&
                    console.warn(
                      'Locale ' + e + ' not found. Did you forget to load it?',
                    )),
              On._abbr
            )
          }
          function mr(e, n) {
            if (n !== null) {
              var a,
                s = qr
              if (((n.abbr = e), rt[e] != null))
                T(
                  'defineLocaleOverride',
                  'use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info.',
                ),
                  (s = rt[e]._config)
              else if (n.parentLocale != null)
                if (rt[n.parentLocale] != null) s = rt[n.parentLocale]._config
                else if (((a = kn(n.parentLocale)), a != null)) s = a._config
                else
                  return (
                    Mn[n.parentLocale] || (Mn[n.parentLocale] = []),
                    Mn[n.parentLocale].push({ name: e, config: n }),
                    null
                  )
              return (
                (rt[e] = new se(ee(s, n))),
                Mn[e] &&
                  Mn[e].forEach(function (u) {
                    mr(u.name, u.config)
                  }),
                Xt(e),
                rt[e]
              )
            } else return delete rt[e], null
          }
          function uo(e, n) {
            if (n != null) {
              var a,
                s,
                u = qr
              rt[e] != null && rt[e].parentLocale != null
                ? rt[e].set(ee(rt[e]._config, n))
                : ((s = kn(e)),
                  s != null && (u = s._config),
                  (n = ee(u, n)),
                  s == null && (n.abbr = e),
                  (a = new se(n)),
                  (a.parentLocale = rt[e]),
                  (rt[e] = a)),
                Xt(e)
            } else
              rt[e] != null &&
                (rt[e].parentLocale != null
                  ? ((rt[e] = rt[e].parentLocale), e === Xt() && Xt(e))
                  : rt[e] != null && delete rt[e])
            return rt[e]
          }
          function Bt(e) {
            var n
            if (
              (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e)
            )
              return On
            if (!f(e)) {
              if (((n = kn(e)), n)) return n
              e = [e]
            }
            return lo(e)
          }
          function fo() {
            return I(rt)
          }
          function vr(e) {
            var n,
              a = e._a
            return (
              a &&
                S(e).overflow === -2 &&
                ((n =
                  a[Ne] < 0 || a[Ne] > 11
                    ? Ne
                    : a[Qe] < 1 || a[Qe] > At(a[pe], a[Ne])
                      ? Qe
                      : a[he] < 0 ||
                          a[he] > 24 ||
                          (a[he] === 24 &&
                            (a[me] !== 0 || a[$e] !== 0 || a[Ae] !== 0))
                        ? he
                        : a[me] < 0 || a[me] > 59
                          ? me
                          : a[$e] < 0 || a[$e] > 59
                            ? $e
                            : a[Ae] < 0 || a[Ae] > 999
                              ? Ae
                              : -1),
                S(e)._overflowDayOfYear && (n < pe || n > Qe) && (n = Qe),
                S(e)._overflowWeeks && n === -1 && (n = It),
                S(e)._overflowWeekday && n === -1 && (n = ht),
                (S(e).overflow = n)),
              e
            )
          }
          var ho =
              /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            mo =
              /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
            vo = /Z|[+-]\d\d(?::?\d\d)?/,
            Wn = [
              ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
              ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
              ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
              ['GGGG-[W]WW', /\d{4}-W\d\d/, !1],
              ['YYYY-DDD', /\d{4}-\d{3}/],
              ['YYYY-MM', /\d{4}-\d\d/, !1],
              ['YYYYYYMMDD', /[+-]\d{10}/],
              ['YYYYMMDD', /\d{8}/],
              ['GGGG[W]WWE', /\d{4}W\d{3}/],
              ['GGGG[W]WW', /\d{4}W\d{2}/, !1],
              ['YYYYDDD', /\d{7}/],
              ['YYYYMM', /\d{6}/, !1],
              ['YYYY', /\d{4}/, !1],
            ],
            gr = [
              ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
              ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
              ['HH:mm:ss', /\d\d:\d\d:\d\d/],
              ['HH:mm', /\d\d:\d\d/],
              ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
              ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
              ['HHmmss', /\d\d\d\d\d\d/],
              ['HHmm', /\d\d\d\d/],
              ['HH', /\d\d/],
            ],
            go = /^\/?Date\((-?\d+)/i,
            po =
              /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,
            bo = {
              UT: 0,
              GMT: 0,
              EDT: -4 * 60,
              EST: -5 * 60,
              CDT: -5 * 60,
              CST: -6 * 60,
              MDT: -6 * 60,
              MST: -7 * 60,
              PDT: -7 * 60,
              PST: -8 * 60,
            }
          function Zr(e) {
            var n,
              a,
              s = e._i,
              u = ho.exec(s) || mo.exec(s),
              v,
              $,
              te,
              Re,
              Fe = Wn.length,
              Rt = gr.length
            if (u) {
              for (S(e).iso = !0, n = 0, a = Fe; n < a; n++)
                if (Wn[n][1].exec(u[1])) {
                  ;($ = Wn[n][0]), (v = Wn[n][2] !== !1)
                  break
                }
              if ($ == null) {
                e._isValid = !1
                return
              }
              if (u[3]) {
                for (n = 0, a = Rt; n < a; n++)
                  if (gr[n][1].exec(u[3])) {
                    te = (u[2] || ' ') + gr[n][0]
                    break
                  }
                if (te == null) {
                  e._isValid = !1
                  return
                }
              }
              if (!v && te != null) {
                e._isValid = !1
                return
              }
              if (u[4])
                if (vo.exec(u[4])) Re = 'Z'
                else {
                  e._isValid = !1
                  return
                }
              ;(e._f = $ + (te || '') + (Re || '')), br(e)
            } else e._isValid = !1
          }
          function yo(e, n, a, s, u, v) {
            var $ = [
              So(e),
              Cn.indexOf(n),
              parseInt(a, 10),
              parseInt(s, 10),
              parseInt(u, 10),
            ]
            return v && $.push(parseInt(v, 10)), $
          }
          function So(e) {
            var n = parseInt(e, 10)
            return n <= 49 ? 2e3 + n : n <= 999 ? 1900 + n : n
          }
          function wo(e) {
            return e
              .replace(/\([^()]*\)|[\n\t]/g, ' ')
              .replace(/(\s\s+)/g, ' ')
              .replace(/^\s\s*/, '')
              .replace(/\s\s*$/, '')
          }
          function _o(e, n, a) {
            if (e) {
              var s = Ur.indexOf(e),
                u = new Date(n[0], n[1], n[2]).getDay()
              if (s !== u)
                return (S(a).weekdayMismatch = !0), (a._isValid = !1), !1
            }
            return !0
          }
          function Co(e, n, a) {
            if (e) return bo[e]
            if (n) return 0
            var s = parseInt(a, 10),
              u = s % 100,
              v = (s - u) / 100
            return v * 60 + u
          }
          function Qr(e) {
            var n = po.exec(wo(e._i)),
              a
            if (n) {
              if (
                ((a = yo(n[4], n[3], n[2], n[5], n[6], n[7])), !_o(n[1], a, e))
              )
                return
              ;(e._a = a),
                (e._tzm = Co(n[8], n[9], n[10])),
                (e._d = lt.apply(null, e._a)),
                e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                (S(e).rfc2822 = !0)
            } else e._isValid = !1
          }
          function xo(e) {
            var n = go.exec(e._i)
            if (n !== null) {
              e._d = new Date(+n[1])
              return
            }
            if ((Zr(e), e._isValid === !1)) delete e._isValid
            else return
            if ((Qr(e), e._isValid === !1)) delete e._isValid
            else return
            e._strict ? (e._isValid = !1) : i.createFromInputFallback(e)
          }
          i.createFromInputFallback = Y(
            'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.',
            function (e) {
              e._d = new Date(e._i + (e._useUTC ? ' UTC' : ''))
            },
          )
          function cn(e, n, a) {
            return e ?? n ?? a
          }
          function $o(e) {
            var n = new Date(i.now())
            return e._useUTC
              ? [n.getUTCFullYear(), n.getUTCMonth(), n.getUTCDate()]
              : [n.getFullYear(), n.getMonth(), n.getDate()]
          }
          function pr(e) {
            var n,
              a,
              s = [],
              u,
              v,
              $
            if (!e._d) {
              for (
                u = $o(e),
                  e._w && e._a[Qe] == null && e._a[Ne] == null && Mo(e),
                  e._dayOfYear != null &&
                    (($ = cn(e._a[pe], u[pe])),
                    (e._dayOfYear > xt($) || e._dayOfYear === 0) &&
                      (S(e)._overflowDayOfYear = !0),
                    (a = lt($, 0, e._dayOfYear)),
                    (e._a[Ne] = a.getUTCMonth()),
                    (e._a[Qe] = a.getUTCDate())),
                  n = 0;
                n < 3 && e._a[n] == null;
                ++n
              )
                e._a[n] = s[n] = u[n]
              for (; n < 7; n++)
                e._a[n] = s[n] = e._a[n] == null ? (n === 2 ? 1 : 0) : e._a[n]
              e._a[he] === 24 &&
                e._a[me] === 0 &&
                e._a[$e] === 0 &&
                e._a[Ae] === 0 &&
                ((e._nextDay = !0), (e._a[he] = 0)),
                (e._d = (e._useUTC ? lt : ct).apply(null, s)),
                (v = e._useUTC ? e._d.getUTCDay() : e._d.getDay()),
                e._tzm != null &&
                  e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm),
                e._nextDay && (e._a[he] = 24),
                e._w &&
                  typeof e._w.d < 'u' &&
                  e._w.d !== v &&
                  (S(e).weekdayMismatch = !0)
            }
          }
          function Mo(e) {
            var n, a, s, u, v, $, te, Re, Fe
            ;(n = e._w),
              n.GG != null || n.W != null || n.E != null
                ? ((v = 1),
                  ($ = 4),
                  (a = cn(n.GG, e._a[pe], Pt(tt(), 1, 4).year)),
                  (s = cn(n.W, 1)),
                  (u = cn(n.E, 1)),
                  (u < 1 || u > 7) && (Re = !0))
                : ((v = e._locale._week.dow),
                  ($ = e._locale._week.doy),
                  (Fe = Pt(tt(), v, $)),
                  (a = cn(n.gg, e._a[pe], Fe.year)),
                  (s = cn(n.w, Fe.week)),
                  n.d != null
                    ? ((u = n.d), (u < 0 || u > 6) && (Re = !0))
                    : n.e != null
                      ? ((u = n.e + v), (n.e < 0 || n.e > 6) && (Re = !0))
                      : (u = v)),
              s < 1 || s > Mt(a, v, $)
                ? (S(e)._overflowWeeks = !0)
                : Re != null
                  ? (S(e)._overflowWeekday = !0)
                  : ((te = Tt(a, s, u, v, $)),
                    (e._a[pe] = te.year),
                    (e._dayOfYear = te.dayOfYear))
          }
          ;(i.ISO_8601 = function () {}), (i.RFC_2822 = function () {})
          function br(e) {
            if (e._f === i.ISO_8601) {
              Zr(e)
              return
            }
            if (e._f === i.RFC_2822) {
              Qr(e)
              return
            }
            ;(e._a = []), (S(e).empty = !0)
            var n = '' + e._i,
              a,
              s,
              u,
              v,
              $,
              te = n.length,
              Re = 0,
              Fe,
              Rt
            for (
              u = Pe(e._f, e._locale).match(Q) || [], Rt = u.length, a = 0;
              a < Rt;
              a++
            )
              (v = u[a]),
                (s = (n.match(St(v, e)) || [])[0]),
                s &&
                  (($ = n.substr(0, n.indexOf(s))),
                  $.length > 0 && S(e).unusedInput.push($),
                  (n = n.slice(n.indexOf(s) + s.length)),
                  (Re += s.length)),
                B[v]
                  ? (s ? (S(e).empty = !1) : S(e).unusedTokens.push(v),
                    oe(v, s, e))
                  : e._strict && !s && S(e).unusedTokens.push(v)
            ;(S(e).charsLeftOver = te - Re),
              n.length > 0 && S(e).unusedInput.push(n),
              e._a[he] <= 12 &&
                S(e).bigHour === !0 &&
                e._a[he] > 0 &&
                (S(e).bigHour = void 0),
              (S(e).parsedDateParts = e._a.slice(0)),
              (S(e).meridiem = e._meridiem),
              (e._a[he] = Oo(e._locale, e._a[he], e._meridiem)),
              (Fe = S(e).era),
              Fe !== null &&
                (e._a[pe] = e._locale.erasConvertYear(Fe, e._a[pe])),
              pr(e),
              vr(e)
          }
          function Oo(e, n, a) {
            var s
            return a == null
              ? n
              : e.meridiemHour != null
                ? e.meridiemHour(n, a)
                : (e.isPM != null &&
                    ((s = e.isPM(a)),
                    s && n < 12 && (n += 12),
                    !s && n === 12 && (n = 0)),
                  n)
          }
          function Eo(e) {
            var n,
              a,
              s,
              u,
              v,
              $,
              te = !1,
              Re = e._f.length
            if (Re === 0) {
              ;(S(e).invalidFormat = !0), (e._d = new Date(NaN))
              return
            }
            for (u = 0; u < Re; u++)
              (v = 0),
                ($ = !1),
                (n = G({}, e)),
                e._useUTC != null && (n._useUTC = e._useUTC),
                (n._f = e._f[u]),
                br(n),
                x(n) && ($ = !0),
                (v += S(n).charsLeftOver),
                (v += S(n).unusedTokens.length * 10),
                (S(n).score = v),
                te
                  ? v < s && ((s = v), (a = n))
                  : (s == null || v < s || $) &&
                    ((s = v), (a = n), $ && (te = !0))
            y(e, a || n)
          }
          function Io(e) {
            if (!e._d) {
              var n = Xe(e._i),
                a = n.day === void 0 ? n.date : n.day
              ;(e._a = C(
                [n.year, n.month, a, n.hour, n.minute, n.second, n.millisecond],
                function (s) {
                  return s && parseInt(s, 10)
                },
              )),
                pr(e)
            }
          }
          function Ro(e) {
            var n = new D(vr(Jr(e)))
            return n._nextDay && (n.add(1, 'd'), (n._nextDay = void 0)), n
          }
          function Jr(e) {
            var n = e._i,
              a = e._f
            return (
              (e._locale = e._locale || Bt(e._l)),
              n === null || (a === void 0 && n === '')
                ? E({ nullInput: !0 })
                : (typeof n == 'string' && (e._i = n = e._locale.preparse(n)),
                  N(n)
                    ? new D(vr(n))
                    : (p(n) ? (e._d = n) : f(a) ? Eo(e) : a ? br(e) : Do(e),
                      x(e) || (e._d = null),
                      e))
            )
          }
          function Do(e) {
            var n = e._i
            g(n)
              ? (e._d = new Date(i.now()))
              : p(n)
                ? (e._d = new Date(n.valueOf()))
                : typeof n == 'string'
                  ? xo(e)
                  : f(n)
                    ? ((e._a = C(n.slice(0), function (a) {
                        return parseInt(a, 10)
                      })),
                      pr(e))
                    : h(n)
                      ? Io(e)
                      : b(n)
                        ? (e._d = new Date(n))
                        : i.createFromInputFallback(e)
          }
          function ea(e, n, a, s, u) {
            var v = {}
            return (
              (n === !0 || n === !1) && ((s = n), (n = void 0)),
              (a === !0 || a === !1) && ((s = a), (a = void 0)),
              ((h(e) && m(e)) || (f(e) && e.length === 0)) && (e = void 0),
              (v._isAMomentObject = !0),
              (v._useUTC = v._isUTC = u),
              (v._l = a),
              (v._i = e),
              (v._f = n),
              (v._strict = s),
              Ro(v)
            )
          }
          function tt(e, n, a, s) {
            return ea(e, n, a, s, !1)
          }
          var To = Y(
              'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                var e = tt.apply(null, arguments)
                return this.isValid() && e.isValid()
                  ? e < this
                    ? this
                    : e
                  : E()
              },
            ),
            Po = Y(
              'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
              function () {
                var e = tt.apply(null, arguments)
                return this.isValid() && e.isValid()
                  ? e > this
                    ? this
                    : e
                  : E()
              },
            )
          function ta(e, n) {
            var a, s
            if ((n.length === 1 && f(n[0]) && (n = n[0]), !n.length))
              return tt()
            for (a = n[0], s = 1; s < n.length; ++s)
              (!n[s].isValid() || n[s][e](a)) && (a = n[s])
            return a
          }
          function No() {
            var e = [].slice.call(arguments, 0)
            return ta('isBefore', e)
          }
          function Lo() {
            var e = [].slice.call(arguments, 0)
            return ta('isAfter', e)
          }
          var zo = function () {
              return Date.now ? Date.now() : +new Date()
            },
            En = [
              'year',
              'quarter',
              'month',
              'week',
              'day',
              'hour',
              'minute',
              'second',
              'millisecond',
            ]
          function Yo(e) {
            var n,
              a = !1,
              s,
              u = En.length
            for (n in e)
              if (
                d(e, n) &&
                !(et.call(En, n) !== -1 && (e[n] == null || !isNaN(e[n])))
              )
                return !1
            for (s = 0; s < u; ++s)
              if (e[En[s]]) {
                if (a) return !1
                parseFloat(e[En[s]]) !== we(e[En[s]]) && (a = !0)
              }
            return !0
          }
          function Ho() {
            return this._isValid
          }
          function ko() {
            return Ht(NaN)
          }
          function Fn(e) {
            var n = Xe(e),
              a = n.year || 0,
              s = n.quarter || 0,
              u = n.month || 0,
              v = n.week || n.isoWeek || 0,
              $ = n.day || 0,
              te = n.hour || 0,
              Re = n.minute || 0,
              Fe = n.second || 0,
              Rt = n.millisecond || 0
            ;(this._isValid = Yo(n)),
              (this._milliseconds =
                +Rt + Fe * 1e3 + Re * 6e4 + te * 1e3 * 60 * 60),
              (this._days = +$ + v * 7),
              (this._months = +u + s * 3 + a * 12),
              (this._data = {}),
              (this._locale = Bt()),
              this._bubble()
          }
          function An(e) {
            return e instanceof Fn
          }
          function yr(e) {
            return e < 0 ? Math.round(-1 * e) * -1 : Math.round(e)
          }
          function Wo(e, n, a) {
            var s = Math.min(e.length, n.length),
              u = Math.abs(e.length - n.length),
              v = 0,
              $
            for ($ = 0; $ < s; $++) we(e[$]) !== we(n[$]) && v++
            return v + u
          }
          function na(e, n) {
            O(e, 0, 0, function () {
              var a = this.utcOffset(),
                s = '+'
              return (
                a < 0 && ((a = -a), (s = '-')),
                s + z(~~(a / 60), 2) + n + z(~~a % 60, 2)
              )
            })
          }
          na('Z', ':'),
            na('ZZ', ''),
            K('Z', Ct),
            K('ZZ', Ct),
            X(['Z', 'ZZ'], function (e, n, a) {
              ;(a._useUTC = !0), (a._tzm = Sr(Ct, e))
            })
          var Fo = /([\+\-]|\d\d)/gi
          function Sr(e, n) {
            var a = (n || '').match(e),
              s,
              u,
              v
            return a === null
              ? null
              : ((s = a[a.length - 1] || []),
                (u = (s + '').match(Fo) || ['-', 0, 0]),
                (v = +(u[1] * 60) + we(u[2])),
                v === 0 ? 0 : u[0] === '+' ? v : -v)
          }
          function wr(e, n) {
            var a, s
            return n._isUTC
              ? ((a = n.clone()),
                (s =
                  (N(e) || p(e) ? e.valueOf() : tt(e).valueOf()) - a.valueOf()),
                a._d.setTime(a._d.valueOf() + s),
                i.updateOffset(a, !1),
                a)
              : tt(e).local()
          }
          function _r(e) {
            return -Math.round(e._d.getTimezoneOffset())
          }
          i.updateOffset = function () {}
          function Ao(e, n, a) {
            var s = this._offset || 0,
              u
            if (!this.isValid()) return e != null ? this : NaN
            if (e != null) {
              if (typeof e == 'string') {
                if (((e = Sr(Ct, e)), e === null)) return this
              } else Math.abs(e) < 16 && !a && (e = e * 60)
              return (
                !this._isUTC && n && (u = _r(this)),
                (this._offset = e),
                (this._isUTC = !0),
                u != null && this.add(u, 'm'),
                s !== e &&
                  (!n || this._changeInProgress
                    ? oa(this, Ht(e - s, 'm'), 1, !1)
                    : this._changeInProgress ||
                      ((this._changeInProgress = !0),
                      i.updateOffset(this, !0),
                      (this._changeInProgress = null))),
                this
              )
            } else return this._isUTC ? s : _r(this)
          }
          function jo(e, n) {
            return e != null
              ? (typeof e != 'string' && (e = -e), this.utcOffset(e, n), this)
              : -this.utcOffset()
          }
          function Bo(e) {
            return this.utcOffset(0, e)
          }
          function Vo(e) {
            return (
              this._isUTC &&
                (this.utcOffset(0, e),
                (this._isUTC = !1),
                e && this.subtract(_r(this), 'm')),
              this
            )
          }
          function Uo() {
            if (this._tzm != null) this.utcOffset(this._tzm, !1, !0)
            else if (typeof this._i == 'string') {
              var e = Sr(dt, this._i)
              e != null ? this.utcOffset(e) : this.utcOffset(0, !0)
            }
            return this
          }
          function Go(e) {
            return this.isValid()
              ? ((e = e ? tt(e).utcOffset() : 0),
                (this.utcOffset() - e) % 60 === 0)
              : !1
          }
          function Ko() {
            return (
              this.utcOffset() > this.clone().month(0).utcOffset() ||
              this.utcOffset() > this.clone().month(5).utcOffset()
            )
          }
          function qo() {
            if (!g(this._isDSTShifted)) return this._isDSTShifted
            var e = {},
              n
            return (
              G(e, this),
              (e = Jr(e)),
              e._a
                ? ((n = e._isUTC ? _(e._a) : tt(e._a)),
                  (this._isDSTShifted =
                    this.isValid() && Wo(e._a, n.toArray()) > 0))
                : (this._isDSTShifted = !1),
              this._isDSTShifted
            )
          }
          function Xo() {
            return this.isValid() ? !this._isUTC : !1
          }
          function Zo() {
            return this.isValid() ? this._isUTC : !1
          }
          function ra() {
            return this.isValid() ? this._isUTC && this._offset === 0 : !1
          }
          var Qo = /^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,
            Jo =
              /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/
          function Ht(e, n) {
            var a = e,
              s = null,
              u,
              v,
              $
            return (
              An(e)
                ? (a = { ms: e._milliseconds, d: e._days, M: e._months })
                : b(e) || !isNaN(+e)
                  ? ((a = {}), n ? (a[n] = +e) : (a.milliseconds = +e))
                  : (s = Qo.exec(e))
                    ? ((u = s[1] === '-' ? -1 : 1),
                      (a = {
                        y: 0,
                        d: we(s[Qe]) * u,
                        h: we(s[he]) * u,
                        m: we(s[me]) * u,
                        s: we(s[$e]) * u,
                        ms: we(yr(s[Ae] * 1e3)) * u,
                      }))
                    : (s = Jo.exec(e))
                      ? ((u = s[1] === '-' ? -1 : 1),
                        (a = {
                          y: en(s[2], u),
                          M: en(s[3], u),
                          w: en(s[4], u),
                          d: en(s[5], u),
                          h: en(s[6], u),
                          m: en(s[7], u),
                          s: en(s[8], u),
                        }))
                      : a == null
                        ? (a = {})
                        : typeof a == 'object' &&
                          ('from' in a || 'to' in a) &&
                          (($ = es(tt(a.from), tt(a.to))),
                          (a = {}),
                          (a.ms = $.milliseconds),
                          (a.M = $.months)),
              (v = new Fn(a)),
              An(e) && d(e, '_locale') && (v._locale = e._locale),
              An(e) && d(e, '_isValid') && (v._isValid = e._isValid),
              v
            )
          }
          ;(Ht.fn = Fn.prototype), (Ht.invalid = ko)
          function en(e, n) {
            var a = e && parseFloat(e.replace(',', '.'))
            return (isNaN(a) ? 0 : a) * n
          }
          function aa(e, n) {
            var a = {}
            return (
              (a.months = n.month() - e.month() + (n.year() - e.year()) * 12),
              e.clone().add(a.months, 'M').isAfter(n) && --a.months,
              (a.milliseconds = +n - +e.clone().add(a.months, 'M')),
              a
            )
          }
          function es(e, n) {
            var a
            return e.isValid() && n.isValid()
              ? ((n = wr(n, e)),
                e.isBefore(n)
                  ? (a = aa(e, n))
                  : ((a = aa(n, e)),
                    (a.milliseconds = -a.milliseconds),
                    (a.months = -a.months)),
                a)
              : { milliseconds: 0, months: 0 }
          }
          function ia(e, n) {
            return function (a, s) {
              var u, v
              return (
                s !== null &&
                  !isNaN(+s) &&
                  (T(
                    n,
                    'moment().' +
                      n +
                      '(period, number) is deprecated. Please use moment().' +
                      n +
                      '(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.',
                  ),
                  (v = a),
                  (a = s),
                  (s = v)),
                (u = Ht(a, s)),
                oa(this, u, e),
                this
              )
            }
          }
          function oa(e, n, a, s) {
            var u = n._milliseconds,
              v = yr(n._days),
              $ = yr(n._months)
            e.isValid() &&
              ((s = s ?? !0),
              $ && $n(e, He(e, 'Month') + $ * a),
              v && st(e, 'Date', He(e, 'Date') + v * a),
              u && e._d.setTime(e._d.valueOf() + u * a),
              s && i.updateOffset(e, v || $))
          }
          var ts = ia(1, 'add'),
            ns = ia(-1, 'subtract')
          function sa(e) {
            return typeof e == 'string' || e instanceof String
          }
          function rs(e) {
            return (
              N(e) ||
              p(e) ||
              sa(e) ||
              b(e) ||
              is(e) ||
              as(e) ||
              e === null ||
              e === void 0
            )
          }
          function as(e) {
            var n = h(e) && !m(e),
              a = !1,
              s = [
                'years',
                'year',
                'y',
                'months',
                'month',
                'M',
                'days',
                'day',
                'd',
                'dates',
                'date',
                'D',
                'hours',
                'hour',
                'h',
                'minutes',
                'minute',
                'm',
                'seconds',
                'second',
                's',
                'milliseconds',
                'millisecond',
                'ms',
              ],
              u,
              v,
              $ = s.length
            for (u = 0; u < $; u += 1) (v = s[u]), (a = a || d(e, v))
            return n && a
          }
          function is(e) {
            var n = f(e),
              a = !1
            return (
              n &&
                (a =
                  e.filter(function (s) {
                    return !b(s) && sa(e)
                  }).length === 0),
              n && a
            )
          }
          function os(e) {
            var n = h(e) && !m(e),
              a = !1,
              s = [
                'sameDay',
                'nextDay',
                'lastDay',
                'nextWeek',
                'lastWeek',
                'sameElse',
              ],
              u,
              v
            for (u = 0; u < s.length; u += 1) (v = s[u]), (a = a || d(e, v))
            return n && a
          }
          function ss(e, n) {
            var a = e.diff(n, 'days', !0)
            return a < -6
              ? 'sameElse'
              : a < -1
                ? 'lastWeek'
                : a < 0
                  ? 'lastDay'
                  : a < 1
                    ? 'sameDay'
                    : a < 2
                      ? 'nextDay'
                      : a < 7
                        ? 'nextWeek'
                        : 'sameElse'
          }
          function ls(e, n) {
            arguments.length === 1 &&
              (arguments[0]
                ? rs(arguments[0])
                  ? ((e = arguments[0]), (n = void 0))
                  : os(arguments[0]) && ((n = arguments[0]), (e = void 0))
                : ((e = void 0), (n = void 0)))
            var a = e || tt(),
              s = wr(a, this).startOf('day'),
              u = i.calendarFormat(this, s) || 'sameElse',
              v = n && (L(n[u]) ? n[u].call(this, a) : n[u])
            return this.format(v || this.localeData().calendar(u, this, tt(a)))
          }
          function cs() {
            return new D(this)
          }
          function us(e, n) {
            var a = N(e) ? e : tt(e)
            return this.isValid() && a.isValid()
              ? ((n = ze(n) || 'millisecond'),
                n === 'millisecond'
                  ? this.valueOf() > a.valueOf()
                  : a.valueOf() < this.clone().startOf(n).valueOf())
              : !1
          }
          function ds(e, n) {
            var a = N(e) ? e : tt(e)
            return this.isValid() && a.isValid()
              ? ((n = ze(n) || 'millisecond'),
                n === 'millisecond'
                  ? this.valueOf() < a.valueOf()
                  : this.clone().endOf(n).valueOf() < a.valueOf())
              : !1
          }
          function fs(e, n, a, s) {
            var u = N(e) ? e : tt(e),
              v = N(n) ? n : tt(n)
            return this.isValid() && u.isValid() && v.isValid()
              ? ((s = s || '()'),
                (s[0] === '(' ? this.isAfter(u, a) : !this.isBefore(u, a)) &&
                  (s[1] === ')' ? this.isBefore(v, a) : !this.isAfter(v, a)))
              : !1
          }
          function hs(e, n) {
            var a = N(e) ? e : tt(e),
              s
            return this.isValid() && a.isValid()
              ? ((n = ze(n) || 'millisecond'),
                n === 'millisecond'
                  ? this.valueOf() === a.valueOf()
                  : ((s = a.valueOf()),
                    this.clone().startOf(n).valueOf() <= s &&
                      s <= this.clone().endOf(n).valueOf()))
              : !1
          }
          function ms(e, n) {
            return this.isSame(e, n) || this.isAfter(e, n)
          }
          function vs(e, n) {
            return this.isSame(e, n) || this.isBefore(e, n)
          }
          function gs(e, n, a) {
            var s, u, v
            if (!this.isValid()) return NaN
            if (((s = wr(e, this)), !s.isValid())) return NaN
            switch (
              ((u = (s.utcOffset() - this.utcOffset()) * 6e4), (n = ze(n)), n)
            ) {
              case 'year':
                v = jn(this, s) / 12
                break
              case 'month':
                v = jn(this, s)
                break
              case 'quarter':
                v = jn(this, s) / 3
                break
              case 'second':
                v = (this - s) / 1e3
                break
              case 'minute':
                v = (this - s) / 6e4
                break
              case 'hour':
                v = (this - s) / 36e5
                break
              case 'day':
                v = (this - s - u) / 864e5
                break
              case 'week':
                v = (this - s - u) / 6048e5
                break
              default:
                v = this - s
            }
            return a ? v : nt(v)
          }
          function jn(e, n) {
            if (e.date() < n.date()) return -jn(n, e)
            var a = (n.year() - e.year()) * 12 + (n.month() - e.month()),
              s = e.clone().add(a, 'months'),
              u,
              v
            return (
              n - s < 0
                ? ((u = e.clone().add(a - 1, 'months')),
                  (v = (n - s) / (s - u)))
                : ((u = e.clone().add(a + 1, 'months')),
                  (v = (n - s) / (u - s))),
              -(a + v) || 0
            )
          }
          ;(i.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ'),
            (i.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]')
          function ps() {
            return this.clone()
              .locale('en')
              .format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ')
          }
          function bs(e) {
            if (!this.isValid()) return null
            var n = e !== !0,
              a = n ? this.clone().utc() : this
            return a.year() < 0 || a.year() > 9999
              ? De(
                  a,
                  n
                    ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                    : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ',
                )
              : L(Date.prototype.toISOString)
                ? n
                  ? this.toDate().toISOString()
                  : new Date(this.valueOf() + this.utcOffset() * 60 * 1e3)
                      .toISOString()
                      .replace('Z', De(a, 'Z'))
                : De(
                    a,
                    n
                      ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]'
                      : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ',
                  )
          }
          function ys() {
            if (!this.isValid()) return 'moment.invalid(/* ' + this._i + ' */)'
            var e = 'moment',
              n = '',
              a,
              s,
              u,
              v
            return (
              this.isLocal() ||
                ((e =
                  this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone'),
                (n = 'Z')),
              (a = '[' + e + '("]'),
              (s = 0 <= this.year() && this.year() <= 9999 ? 'YYYY' : 'YYYYYY'),
              (u = '-MM-DD[T]HH:mm:ss.SSS'),
              (v = n + '[")]'),
              this.format(a + s + u + v)
            )
          }
          function Ss(e) {
            e || (e = this.isUtc() ? i.defaultFormatUtc : i.defaultFormat)
            var n = De(this, e)
            return this.localeData().postformat(n)
          }
          function ws(e, n) {
            return this.isValid() && ((N(e) && e.isValid()) || tt(e).isValid())
              ? Ht({ to: this, from: e }).locale(this.locale()).humanize(!n)
              : this.localeData().invalidDate()
          }
          function _s(e) {
            return this.from(tt(), e)
          }
          function Cs(e, n) {
            return this.isValid() && ((N(e) && e.isValid()) || tt(e).isValid())
              ? Ht({ from: this, to: e }).locale(this.locale()).humanize(!n)
              : this.localeData().invalidDate()
          }
          function xs(e) {
            return this.to(tt(), e)
          }
          function la(e) {
            var n
            return e === void 0
              ? this._locale._abbr
              : ((n = Bt(e)), n != null && (this._locale = n), this)
          }
          var ca = Y(
            'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
            function (e) {
              return e === void 0 ? this.localeData() : this.locale(e)
            },
          )
          function ua() {
            return this._locale
          }
          var Bn = 1e3,
            un = 60 * Bn,
            Vn = 60 * un,
            da = (365 * 400 + 97) * 24 * Vn
          function dn(e, n) {
            return ((e % n) + n) % n
          }
          function fa(e, n, a) {
            return e < 100 && e >= 0
              ? new Date(e + 400, n, a) - da
              : new Date(e, n, a).valueOf()
          }
          function ha(e, n, a) {
            return e < 100 && e >= 0
              ? Date.UTC(e + 400, n, a) - da
              : Date.UTC(e, n, a)
          }
          function $s(e) {
            var n, a
            if (
              ((e = ze(e)),
              e === void 0 || e === 'millisecond' || !this.isValid())
            )
              return this
            switch (((a = this._isUTC ? ha : fa), e)) {
              case 'year':
                n = a(this.year(), 0, 1)
                break
              case 'quarter':
                n = a(this.year(), this.month() - (this.month() % 3), 1)
                break
              case 'month':
                n = a(this.year(), this.month(), 1)
                break
              case 'week':
                n = a(this.year(), this.month(), this.date() - this.weekday())
                break
              case 'isoWeek':
                n = a(
                  this.year(),
                  this.month(),
                  this.date() - (this.isoWeekday() - 1),
                )
                break
              case 'day':
              case 'date':
                n = a(this.year(), this.month(), this.date())
                break
              case 'hour':
                ;(n = this._d.valueOf()),
                  (n -= dn(n + (this._isUTC ? 0 : this.utcOffset() * un), Vn))
                break
              case 'minute':
                ;(n = this._d.valueOf()), (n -= dn(n, un))
                break
              case 'second':
                ;(n = this._d.valueOf()), (n -= dn(n, Bn))
                break
            }
            return this._d.setTime(n), i.updateOffset(this, !0), this
          }
          function Ms(e) {
            var n, a
            if (
              ((e = ze(e)),
              e === void 0 || e === 'millisecond' || !this.isValid())
            )
              return this
            switch (((a = this._isUTC ? ha : fa), e)) {
              case 'year':
                n = a(this.year() + 1, 0, 1) - 1
                break
              case 'quarter':
                n = a(this.year(), this.month() - (this.month() % 3) + 3, 1) - 1
                break
              case 'month':
                n = a(this.year(), this.month() + 1, 1) - 1
                break
              case 'week':
                n =
                  a(
                    this.year(),
                    this.month(),
                    this.date() - this.weekday() + 7,
                  ) - 1
                break
              case 'isoWeek':
                n =
                  a(
                    this.year(),
                    this.month(),
                    this.date() - (this.isoWeekday() - 1) + 7,
                  ) - 1
                break
              case 'day':
              case 'date':
                n = a(this.year(), this.month(), this.date() + 1) - 1
                break
              case 'hour':
                ;(n = this._d.valueOf()),
                  (n +=
                    Vn -
                    dn(n + (this._isUTC ? 0 : this.utcOffset() * un), Vn) -
                    1)
                break
              case 'minute':
                ;(n = this._d.valueOf()), (n += un - dn(n, un) - 1)
                break
              case 'second':
                ;(n = this._d.valueOf()), (n += Bn - dn(n, Bn) - 1)
                break
            }
            return this._d.setTime(n), i.updateOffset(this, !0), this
          }
          function Os() {
            return this._d.valueOf() - (this._offset || 0) * 6e4
          }
          function Es() {
            return Math.floor(this.valueOf() / 1e3)
          }
          function Is() {
            return new Date(this.valueOf())
          }
          function Rs() {
            var e = this
            return [
              e.year(),
              e.month(),
              e.date(),
              e.hour(),
              e.minute(),
              e.second(),
              e.millisecond(),
            ]
          }
          function Ds() {
            var e = this
            return {
              years: e.year(),
              months: e.month(),
              date: e.date(),
              hours: e.hours(),
              minutes: e.minutes(),
              seconds: e.seconds(),
              milliseconds: e.milliseconds(),
            }
          }
          function Ts() {
            return this.isValid() ? this.toISOString() : null
          }
          function Ps() {
            return x(this)
          }
          function Ns() {
            return y({}, S(this))
          }
          function Ls() {
            return S(this).overflow
          }
          function zs() {
            return {
              input: this._i,
              format: this._f,
              locale: this._locale,
              isUTC: this._isUTC,
              strict: this._strict,
            }
          }
          O('N', 0, 0, 'eraAbbr'),
            O('NN', 0, 0, 'eraAbbr'),
            O('NNN', 0, 0, 'eraAbbr'),
            O('NNNN', 0, 0, 'eraName'),
            O('NNNNN', 0, 0, 'eraNarrow'),
            O('y', ['y', 1], 'yo', 'eraYear'),
            O('y', ['yy', 2], 0, 'eraYear'),
            O('y', ['yyy', 3], 0, 'eraYear'),
            O('y', ['yyyy', 4], 0, 'eraYear'),
            K('N', Cr),
            K('NN', Cr),
            K('NNN', Cr),
            K('NNNN', Gs),
            K('NNNNN', Ks),
            X(['N', 'NN', 'NNN', 'NNNN', 'NNNNN'], function (e, n, a, s) {
              var u = a._locale.erasParse(e, s, a._strict)
              u ? (S(a).era = u) : (S(a).invalidEra = e)
            }),
            K('y', Ze),
            K('yy', Ze),
            K('yyy', Ze),
            K('yyyy', Ze),
            K('yo', qs),
            X(['y', 'yy', 'yyy', 'yyyy'], pe),
            X(['yo'], function (e, n, a, s) {
              var u
              a._locale._eraYearOrdinalRegex &&
                (u = e.match(a._locale._eraYearOrdinalRegex)),
                a._locale.eraYearOrdinalParse
                  ? (n[pe] = a._locale.eraYearOrdinalParse(e, u))
                  : (n[pe] = parseInt(e, 10))
            })
          function Ys(e, n) {
            var a,
              s,
              u,
              v = this._eras || Bt('en')._eras
            for (a = 0, s = v.length; a < s; ++a) {
              switch (typeof v[a].since) {
                case 'string':
                  ;(u = i(v[a].since).startOf('day')),
                    (v[a].since = u.valueOf())
                  break
              }
              switch (typeof v[a].until) {
                case 'undefined':
                  v[a].until = 1 / 0
                  break
                case 'string':
                  ;(u = i(v[a].until).startOf('day').valueOf()),
                    (v[a].until = u.valueOf())
                  break
              }
            }
            return v
          }
          function Hs(e, n, a) {
            var s,
              u,
              v = this.eras(),
              $,
              te,
              Re
            for (e = e.toUpperCase(), s = 0, u = v.length; s < u; ++s)
              if (
                (($ = v[s].name.toUpperCase()),
                (te = v[s].abbr.toUpperCase()),
                (Re = v[s].narrow.toUpperCase()),
                a)
              )
                switch (n) {
                  case 'N':
                  case 'NN':
                  case 'NNN':
                    if (te === e) return v[s]
                    break
                  case 'NNNN':
                    if ($ === e) return v[s]
                    break
                  case 'NNNNN':
                    if (Re === e) return v[s]
                    break
                }
              else if ([$, te, Re].indexOf(e) >= 0) return v[s]
          }
          function ks(e, n) {
            var a = e.since <= e.until ? 1 : -1
            return n === void 0
              ? i(e.since).year()
              : i(e.since).year() + (n - e.offset) * a
          }
          function Ws() {
            var e,
              n,
              a,
              s = this.localeData().eras()
            for (e = 0, n = s.length; e < n; ++e)
              if (
                ((a = this.clone().startOf('day').valueOf()),
                (s[e].since <= a && a <= s[e].until) ||
                  (s[e].until <= a && a <= s[e].since))
              )
                return s[e].name
            return ''
          }
          function Fs() {
            var e,
              n,
              a,
              s = this.localeData().eras()
            for (e = 0, n = s.length; e < n; ++e)
              if (
                ((a = this.clone().startOf('day').valueOf()),
                (s[e].since <= a && a <= s[e].until) ||
                  (s[e].until <= a && a <= s[e].since))
              )
                return s[e].narrow
            return ''
          }
          function As() {
            var e,
              n,
              a,
              s = this.localeData().eras()
            for (e = 0, n = s.length; e < n; ++e)
              if (
                ((a = this.clone().startOf('day').valueOf()),
                (s[e].since <= a && a <= s[e].until) ||
                  (s[e].until <= a && a <= s[e].since))
              )
                return s[e].abbr
            return ''
          }
          function js() {
            var e,
              n,
              a,
              s,
              u = this.localeData().eras()
            for (e = 0, n = u.length; e < n; ++e)
              if (
                ((a = u[e].since <= u[e].until ? 1 : -1),
                (s = this.clone().startOf('day').valueOf()),
                (u[e].since <= s && s <= u[e].until) ||
                  (u[e].until <= s && s <= u[e].since))
              )
                return (this.year() - i(u[e].since).year()) * a + u[e].offset
            return this.year()
          }
          function Bs(e) {
            return (
              d(this, '_erasNameRegex') || xr.call(this),
              e ? this._erasNameRegex : this._erasRegex
            )
          }
          function Vs(e) {
            return (
              d(this, '_erasAbbrRegex') || xr.call(this),
              e ? this._erasAbbrRegex : this._erasRegex
            )
          }
          function Us(e) {
            return (
              d(this, '_erasNarrowRegex') || xr.call(this),
              e ? this._erasNarrowRegex : this._erasRegex
            )
          }
          function Cr(e, n) {
            return n.erasAbbrRegex(e)
          }
          function Gs(e, n) {
            return n.erasNameRegex(e)
          }
          function Ks(e, n) {
            return n.erasNarrowRegex(e)
          }
          function qs(e, n) {
            return n._eraYearOrdinalRegex || Ze
          }
          function xr() {
            var e = [],
              n = [],
              a = [],
              s = [],
              u,
              v,
              $,
              te,
              Re,
              Fe = this.eras()
            for (u = 0, v = Fe.length; u < v; ++u)
              ($ = ke(Fe[u].name)),
                (te = ke(Fe[u].abbr)),
                (Re = ke(Fe[u].narrow)),
                n.push($),
                e.push(te),
                a.push(Re),
                s.push($),
                s.push(te),
                s.push(Re)
            ;(this._erasRegex = new RegExp('^(' + s.join('|') + ')', 'i')),
              (this._erasNameRegex = new RegExp('^(' + n.join('|') + ')', 'i')),
              (this._erasAbbrRegex = new RegExp('^(' + e.join('|') + ')', 'i')),
              (this._erasNarrowRegex = new RegExp(
                '^(' + a.join('|') + ')',
                'i',
              ))
          }
          O(0, ['gg', 2], 0, function () {
            return this.weekYear() % 100
          }),
            O(0, ['GG', 2], 0, function () {
              return this.isoWeekYear() % 100
            })
          function Un(e, n) {
            O(0, [e, e.length], 0, n)
          }
          Un('gggg', 'weekYear'),
            Un('ggggg', 'weekYear'),
            Un('GGGG', 'isoWeekYear'),
            Un('GGGGG', 'isoWeekYear'),
            K('G', it),
            K('g', it),
            K('GG', xe, Se),
            K('gg', xe, Se),
            K('GGGG', ot, Le),
            K('gggg', ot, Le),
            K('GGGGG', gt, Ge),
            K('ggggg', gt, Ge),
            fe(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (e, n, a, s) {
              n[s.substr(0, 2)] = we(e)
            }),
            fe(['gg', 'GG'], function (e, n, a, s) {
              n[s] = i.parseTwoDigitYear(e)
            })
          function Xs(e) {
            return ma.call(
              this,
              e,
              this.week(),
              this.weekday() + this.localeData()._week.dow,
              this.localeData()._week.dow,
              this.localeData()._week.doy,
            )
          }
          function Zs(e) {
            return ma.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4)
          }
          function Qs() {
            return Mt(this.year(), 1, 4)
          }
          function Js() {
            return Mt(this.isoWeekYear(), 1, 4)
          }
          function el() {
            var e = this.localeData()._week
            return Mt(this.year(), e.dow, e.doy)
          }
          function tl() {
            var e = this.localeData()._week
            return Mt(this.weekYear(), e.dow, e.doy)
          }
          function ma(e, n, a, s, u) {
            var v
            return e == null
              ? Pt(this, s, u).year
              : ((v = Mt(e, s, u)),
                n > v && (n = v),
                nl.call(this, e, n, a, s, u))
          }
          function nl(e, n, a, s, u) {
            var v = Tt(e, n, a, s, u),
              $ = lt(v.year, 0, v.dayOfYear)
            return (
              this.year($.getUTCFullYear()),
              this.month($.getUTCMonth()),
              this.date($.getUTCDate()),
              this
            )
          }
          O('Q', 0, 'Qo', 'quarter'),
            K('Q', ut),
            X('Q', function (e, n) {
              n[Ne] = (we(e) - 1) * 3
            })
          function rl(e) {
            return e == null
              ? Math.ceil((this.month() + 1) / 3)
              : this.month((e - 1) * 3 + (this.month() % 3))
          }
          O('D', ['DD', 2], 'Do', 'date'),
            K('D', xe, Et),
            K('DD', xe, Se),
            K('Do', function (e, n) {
              return e
                ? n._dayOfMonthOrdinalParse || n._ordinalParse
                : n._dayOfMonthOrdinalParseLenient
            }),
            X(['D', 'DD'], Qe),
            X('Do', function (e, n) {
              n[Qe] = we(e.match(xe)[0])
            })
          var va = Me('Date', !0)
          O('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear'),
            K('DDD', Ke),
            K('DDDD', qe),
            X(['DDD', 'DDDD'], function (e, n, a) {
              a._dayOfYear = we(e)
            })
          function al(e) {
            var n =
              Math.round(
                (this.clone().startOf('day') - this.clone().startOf('year')) /
                  864e5,
              ) + 1
            return e == null ? n : this.add(e - n, 'd')
          }
          O('m', ['mm', 2], 0, 'minute'),
            K('m', xe, bt),
            K('mm', xe, Se),
            X(['m', 'mm'], me)
          var il = Me('Minutes', !1)
          O('s', ['ss', 2], 0, 'second'),
            K('s', xe, bt),
            K('ss', xe, Se),
            X(['s', 'ss'], $e)
          var ol = Me('Seconds', !1)
          O('S', 0, 0, function () {
            return ~~(this.millisecond() / 100)
          }),
            O(0, ['SS', 2], 0, function () {
              return ~~(this.millisecond() / 10)
            }),
            O(0, ['SSS', 3], 0, 'millisecond'),
            O(0, ['SSSS', 4], 0, function () {
              return this.millisecond() * 10
            }),
            O(0, ['SSSSS', 5], 0, function () {
              return this.millisecond() * 100
            }),
            O(0, ['SSSSSS', 6], 0, function () {
              return this.millisecond() * 1e3
            }),
            O(0, ['SSSSSSS', 7], 0, function () {
              return this.millisecond() * 1e4
            }),
            O(0, ['SSSSSSSS', 8], 0, function () {
              return this.millisecond() * 1e5
            }),
            O(0, ['SSSSSSSSS', 9], 0, function () {
              return this.millisecond() * 1e6
            }),
            K('S', Ke, ut),
            K('SS', Ke, Se),
            K('SSS', Ke, qe)
          var Zt, ga
          for (Zt = 'SSSS'; Zt.length <= 9; Zt += 'S') K(Zt, Ze)
          function sl(e, n) {
            n[Ae] = we(('0.' + e) * 1e3)
          }
          for (Zt = 'S'; Zt.length <= 9; Zt += 'S') X(Zt, sl)
          ;(ga = Me('Milliseconds', !1)),
            O('z', 0, 0, 'zoneAbbr'),
            O('zz', 0, 0, 'zoneName')
          function ll() {
            return this._isUTC ? 'UTC' : ''
          }
          function cl() {
            return this._isUTC ? 'Coordinated Universal Time' : ''
          }
          var k = D.prototype
          ;(k.add = ts),
            (k.calendar = ls),
            (k.clone = cs),
            (k.diff = gs),
            (k.endOf = Ms),
            (k.format = Ss),
            (k.from = ws),
            (k.fromNow = _s),
            (k.to = Cs),
            (k.toNow = xs),
            (k.get = qt),
            (k.invalidAt = Ls),
            (k.isAfter = us),
            (k.isBefore = ds),
            (k.isBetween = fs),
            (k.isSame = hs),
            (k.isSameOrAfter = ms),
            (k.isSameOrBefore = vs),
            (k.isValid = Ps),
            (k.lang = ca),
            (k.locale = la),
            (k.localeData = ua),
            (k.max = Po),
            (k.min = To),
            (k.parsingFlags = Ns),
            (k.set = Yt),
            (k.startOf = $s),
            (k.subtract = ns),
            (k.toArray = Rs),
            (k.toObject = Ds),
            (k.toDate = Is),
            (k.toISOString = bs),
            (k.inspect = ys),
            typeof Symbol < 'u' &&
              Symbol.for != null &&
              (k[Symbol.for('nodejs.util.inspect.custom')] = function () {
                return 'Moment<' + this.format() + '>'
              }),
            (k.toJSON = Ts),
            (k.toString = ps),
            (k.unix = Es),
            (k.valueOf = Os),
            (k.creationData = zs),
            (k.eraName = Ws),
            (k.eraNarrow = Fs),
            (k.eraAbbr = As),
            (k.eraYear = js),
            (k.year = le),
            (k.isLeapYear = ne),
            (k.weekYear = Xs),
            (k.isoWeekYear = Zs),
            (k.quarter = k.quarters = rl),
            (k.month = on),
            (k.daysInMonth = We),
            (k.week = k.weeks = zi),
            (k.isoWeek = k.isoWeeks = Yi),
            (k.weeksInYear = el),
            (k.weeksInWeekYear = tl),
            (k.isoWeeksInYear = Qs),
            (k.isoWeeksInISOWeekYear = Js),
            (k.date = va),
            (k.day = k.days = Xi),
            (k.weekday = Zi),
            (k.isoWeekday = Qi),
            (k.dayOfYear = al),
            (k.hour = k.hours = io),
            (k.minute = k.minutes = il),
            (k.second = k.seconds = ol),
            (k.millisecond = k.milliseconds = ga),
            (k.utcOffset = Ao),
            (k.utc = Bo),
            (k.local = Vo),
            (k.parseZone = Uo),
            (k.hasAlignedHourOffset = Go),
            (k.isDST = Ko),
            (k.isLocal = Xo),
            (k.isUtcOffset = Zo),
            (k.isUtc = ra),
            (k.isUTC = ra),
            (k.zoneAbbr = ll),
            (k.zoneName = cl),
            (k.dates = Y(
              'dates accessor is deprecated. Use date instead.',
              va,
            )),
            (k.months = Y(
              'months accessor is deprecated. Use month instead',
              on,
            )),
            (k.years = Y('years accessor is deprecated. Use year instead', le)),
            (k.zone = Y(
              'moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/',
              jo,
            )),
            (k.isDSTShifted = Y(
              'isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information',
              qo,
            ))
          function ul(e) {
            return tt(e * 1e3)
          }
          function dl() {
            return tt.apply(null, arguments).parseZone()
          }
          function pa(e) {
            return e
          }
          var Ve = se.prototype
          ;(Ve.calendar = re),
            (Ve.longDateFormat = H),
            (Ve.invalidDate = be),
            (Ve.ordinal = Ie),
            (Ve.preparse = pa),
            (Ve.postformat = pa),
            (Ve.relativeTime = ye),
            (Ve.pastFuture = Ce),
            (Ve.set = P),
            (Ve.eras = Ys),
            (Ve.erasParse = Hs),
            (Ve.erasConvertYear = ks),
            (Ve.erasAbbrRegex = Vs),
            (Ve.erasNameRegex = Bs),
            (Ve.erasNarrowRegex = Us),
            (Ve.months = sr),
            (Ve.monthsShort = lr),
            (Ve.monthsParse = ur),
            (Ve.monthsRegex = $t),
            (Ve.monthsShortRegex = Te),
            (Ve.week = jt),
            (Ve.firstDayOfYear = Li),
            (Ve.firstDayOfWeek = ln),
            (Ve.weekdays = Vi),
            (Ve.weekdaysMin = Gi),
            (Ve.weekdaysShort = Ui),
            (Ve.weekdaysParse = qi),
            (Ve.weekdaysRegex = Ji),
            (Ve.weekdaysShortRegex = eo),
            (Ve.weekdaysMinRegex = to),
            (Ve.isPM = ro),
            (Ve.meridiem = oo)
          function Gn(e, n, a, s) {
            var u = Bt(),
              v = _().set(s, n)
            return u[a](v, e)
          }
          function ba(e, n, a) {
            if ((b(e) && ((n = e), (e = void 0)), (e = e || ''), n != null))
              return Gn(e, n, a, 'month')
            var s,
              u = []
            for (s = 0; s < 12; s++) u[s] = Gn(e, s, a, 'month')
            return u
          }
          function $r(e, n, a, s) {
            typeof e == 'boolean'
              ? (b(n) && ((a = n), (n = void 0)), (n = n || ''))
              : ((n = e),
                (a = n),
                (e = !1),
                b(n) && ((a = n), (n = void 0)),
                (n = n || ''))
            var u = Bt(),
              v = e ? u._week.dow : 0,
              $,
              te = []
            if (a != null) return Gn(n, (a + v) % 7, s, 'day')
            for ($ = 0; $ < 7; $++) te[$] = Gn(n, ($ + v) % 7, s, 'day')
            return te
          }
          function fl(e, n) {
            return ba(e, n, 'months')
          }
          function hl(e, n) {
            return ba(e, n, 'monthsShort')
          }
          function ml(e, n, a) {
            return $r(e, n, a, 'weekdays')
          }
          function vl(e, n, a) {
            return $r(e, n, a, 'weekdaysShort')
          }
          function gl(e, n, a) {
            return $r(e, n, a, 'weekdaysMin')
          }
          Xt('en', {
            eras: [
              {
                since: '0001-01-01',
                until: 1 / 0,
                offset: 1,
                name: 'Anno Domini',
                narrow: 'AD',
                abbr: 'AD',
              },
              {
                since: '0000-12-31',
                until: -1 / 0,
                offset: 1,
                name: 'Before Christ',
                narrow: 'BC',
                abbr: 'BC',
              },
            ],
            dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
            ordinal: function (e) {
              var n = e % 10,
                a =
                  we((e % 100) / 10) === 1
                    ? 'th'
                    : n === 1
                      ? 'st'
                      : n === 2
                        ? 'nd'
                        : n === 3
                          ? 'rd'
                          : 'th'
              return e + a
            },
          }),
            (i.lang = Y(
              'moment.lang is deprecated. Use moment.locale instead.',
              Xt,
            )),
            (i.langData = Y(
              'moment.langData is deprecated. Use moment.localeData instead.',
              Bt,
            ))
          var Vt = Math.abs
          function pl() {
            var e = this._data
            return (
              (this._milliseconds = Vt(this._milliseconds)),
              (this._days = Vt(this._days)),
              (this._months = Vt(this._months)),
              (e.milliseconds = Vt(e.milliseconds)),
              (e.seconds = Vt(e.seconds)),
              (e.minutes = Vt(e.minutes)),
              (e.hours = Vt(e.hours)),
              (e.months = Vt(e.months)),
              (e.years = Vt(e.years)),
              this
            )
          }
          function ya(e, n, a, s) {
            var u = Ht(n, a)
            return (
              (e._milliseconds += s * u._milliseconds),
              (e._days += s * u._days),
              (e._months += s * u._months),
              e._bubble()
            )
          }
          function bl(e, n) {
            return ya(this, e, n, 1)
          }
          function yl(e, n) {
            return ya(this, e, n, -1)
          }
          function Sa(e) {
            return e < 0 ? Math.floor(e) : Math.ceil(e)
          }
          function Sl() {
            var e = this._milliseconds,
              n = this._days,
              a = this._months,
              s = this._data,
              u,
              v,
              $,
              te,
              Re
            return (
              (e >= 0 && n >= 0 && a >= 0) ||
                (e <= 0 && n <= 0 && a <= 0) ||
                ((e += Sa(Mr(a) + n) * 864e5), (n = 0), (a = 0)),
              (s.milliseconds = e % 1e3),
              (u = nt(e / 1e3)),
              (s.seconds = u % 60),
              (v = nt(u / 60)),
              (s.minutes = v % 60),
              ($ = nt(v / 60)),
              (s.hours = $ % 24),
              (n += nt($ / 24)),
              (Re = nt(wa(n))),
              (a += Re),
              (n -= Sa(Mr(Re))),
              (te = nt(a / 12)),
              (a %= 12),
              (s.days = n),
              (s.months = a),
              (s.years = te),
              this
            )
          }
          function wa(e) {
            return (e * 4800) / 146097
          }
          function Mr(e) {
            return (e * 146097) / 4800
          }
          function wl(e) {
            if (!this.isValid()) return NaN
            var n,
              a,
              s = this._milliseconds
            if (((e = ze(e)), e === 'month' || e === 'quarter' || e === 'year'))
              switch (
                ((n = this._days + s / 864e5), (a = this._months + wa(n)), e)
              ) {
                case 'month':
                  return a
                case 'quarter':
                  return a / 3
                case 'year':
                  return a / 12
              }
            else
              switch (((n = this._days + Math.round(Mr(this._months))), e)) {
                case 'week':
                  return n / 7 + s / 6048e5
                case 'day':
                  return n + s / 864e5
                case 'hour':
                  return n * 24 + s / 36e5
                case 'minute':
                  return n * 1440 + s / 6e4
                case 'second':
                  return n * 86400 + s / 1e3
                case 'millisecond':
                  return Math.floor(n * 864e5) + s
                default:
                  throw new Error('Unknown unit ' + e)
              }
          }
          function Ut(e) {
            return function () {
              return this.as(e)
            }
          }
          var _a = Ut('ms'),
            _l = Ut('s'),
            Cl = Ut('m'),
            xl = Ut('h'),
            $l = Ut('d'),
            Ml = Ut('w'),
            Ol = Ut('M'),
            El = Ut('Q'),
            Il = Ut('y'),
            Rl = _a
          function Dl() {
            return Ht(this)
          }
          function Tl(e) {
            return (e = ze(e)), this.isValid() ? this[e + 's']() : NaN
          }
          function tn(e) {
            return function () {
              return this.isValid() ? this._data[e] : NaN
            }
          }
          var Pl = tn('milliseconds'),
            Nl = tn('seconds'),
            Ll = tn('minutes'),
            zl = tn('hours'),
            Yl = tn('days'),
            Hl = tn('months'),
            kl = tn('years')
          function Wl() {
            return nt(this.days() / 7)
          }
          var Gt = Math.round,
            fn = { ss: 44, s: 45, m: 45, h: 22, d: 26, w: null, M: 11 }
          function Fl(e, n, a, s, u) {
            return u.relativeTime(n || 1, !!a, e, s)
          }
          function Al(e, n, a, s) {
            var u = Ht(e).abs(),
              v = Gt(u.as('s')),
              $ = Gt(u.as('m')),
              te = Gt(u.as('h')),
              Re = Gt(u.as('d')),
              Fe = Gt(u.as('M')),
              Rt = Gt(u.as('w')),
              Kt = Gt(u.as('y')),
              Qt =
                (v <= a.ss && ['s', v]) ||
                (v < a.s && ['ss', v]) ||
                ($ <= 1 && ['m']) ||
                ($ < a.m && ['mm', $]) ||
                (te <= 1 && ['h']) ||
                (te < a.h && ['hh', te]) ||
                (Re <= 1 && ['d']) ||
                (Re < a.d && ['dd', Re])
            return (
              a.w != null &&
                (Qt = Qt || (Rt <= 1 && ['w']) || (Rt < a.w && ['ww', Rt])),
              (Qt = Qt ||
                (Fe <= 1 && ['M']) ||
                (Fe < a.M && ['MM', Fe]) ||
                (Kt <= 1 && ['y']) || ['yy', Kt]),
              (Qt[2] = n),
              (Qt[3] = +e > 0),
              (Qt[4] = s),
              Fl.apply(null, Qt)
            )
          }
          function jl(e) {
            return e === void 0
              ? Gt
              : typeof e == 'function'
                ? ((Gt = e), !0)
                : !1
          }
          function Bl(e, n) {
            return fn[e] === void 0
              ? !1
              : n === void 0
                ? fn[e]
                : ((fn[e] = n), e === 's' && (fn.ss = n - 1), !0)
          }
          function Vl(e, n) {
            if (!this.isValid()) return this.localeData().invalidDate()
            var a = !1,
              s = fn,
              u,
              v
            return (
              typeof e == 'object' && ((n = e), (e = !1)),
              typeof e == 'boolean' && (a = e),
              typeof n == 'object' &&
                ((s = Object.assign({}, fn, n)),
                n.s != null && n.ss == null && (s.ss = n.s - 1)),
              (u = this.localeData()),
              (v = Al(this, !a, s, u)),
              a && (v = u.pastFuture(+this, v)),
              u.postformat(v)
            )
          }
          var Or = Math.abs
          function hn(e) {
            return (e > 0) - (e < 0) || +e
          }
          function Kn() {
            if (!this.isValid()) return this.localeData().invalidDate()
            var e = Or(this._milliseconds) / 1e3,
              n = Or(this._days),
              a = Or(this._months),
              s,
              u,
              v,
              $,
              te = this.asSeconds(),
              Re,
              Fe,
              Rt,
              Kt
            return te
              ? ((s = nt(e / 60)),
                (u = nt(s / 60)),
                (e %= 60),
                (s %= 60),
                (v = nt(a / 12)),
                (a %= 12),
                ($ = e ? e.toFixed(3).replace(/\.?0+$/, '') : ''),
                (Re = te < 0 ? '-' : ''),
                (Fe = hn(this._months) !== hn(te) ? '-' : ''),
                (Rt = hn(this._days) !== hn(te) ? '-' : ''),
                (Kt = hn(this._milliseconds) !== hn(te) ? '-' : ''),
                Re +
                  'P' +
                  (v ? Fe + v + 'Y' : '') +
                  (a ? Fe + a + 'M' : '') +
                  (n ? Rt + n + 'D' : '') +
                  (u || s || e ? 'T' : '') +
                  (u ? Kt + u + 'H' : '') +
                  (s ? Kt + s + 'M' : '') +
                  (e ? Kt + $ + 'S' : ''))
              : 'P0D'
          }
          var je = Fn.prototype
          ;(je.isValid = Ho),
            (je.abs = pl),
            (je.add = bl),
            (je.subtract = yl),
            (je.as = wl),
            (je.asMilliseconds = _a),
            (je.asSeconds = _l),
            (je.asMinutes = Cl),
            (je.asHours = xl),
            (je.asDays = $l),
            (je.asWeeks = Ml),
            (je.asMonths = Ol),
            (je.asQuarters = El),
            (je.asYears = Il),
            (je.valueOf = Rl),
            (je._bubble = Sl),
            (je.clone = Dl),
            (je.get = Tl),
            (je.milliseconds = Pl),
            (je.seconds = Nl),
            (je.minutes = Ll),
            (je.hours = zl),
            (je.days = Yl),
            (je.weeks = Wl),
            (je.months = Hl),
            (je.years = kl),
            (je.humanize = Vl),
            (je.toISOString = Kn),
            (je.toString = Kn),
            (je.toJSON = Kn),
            (je.locale = la),
            (je.localeData = ua),
            (je.toIsoString = Y(
              'toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)',
              Kn,
            )),
            (je.lang = ca),
            O('X', 0, 0, 'unix'),
            O('x', 0, 0, 'valueOf'),
            K('x', it),
            K('X', zt),
            X('X', function (e, n, a) {
              a._d = new Date(parseFloat(e) * 1e3)
            }),
            X('x', function (e, n, a) {
              a._d = new Date(we(e))
            }) //! moment.js
          return (
            (i.version = '2.30.1'),
            c(tt),
            (i.fn = k),
            (i.min = No),
            (i.max = Lo),
            (i.now = zo),
            (i.utc = _),
            (i.unix = ul),
            (i.months = fl),
            (i.isDate = p),
            (i.locale = Xt),
            (i.invalid = E),
            (i.duration = Ht),
            (i.isMoment = N),
            (i.weekdays = ml),
            (i.parseZone = dl),
            (i.localeData = Bt),
            (i.isDuration = An),
            (i.monthsShort = hl),
            (i.weekdaysMin = gl),
            (i.defineLocale = mr),
            (i.updateLocale = uo),
            (i.locales = fo),
            (i.weekdaysShort = vl),
            (i.normalizeUnits = ze),
            (i.relativeTimeRounding = jl),
            (i.relativeTimeThreshold = Bl),
            (i.calendarFormat = ss),
            (i.prototype = k),
            (i.HTML5_FMT = {
              DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',
              DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',
              DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',
              DATE: 'YYYY-MM-DD',
              TIME: 'HH:mm',
              TIME_SECONDS: 'HH:mm:ss',
              TIME_MS: 'HH:mm:ss.SSS',
              WEEK: 'GGGG-[W]WW',
              MONTH: 'YYYY-MM',
            }),
            i
          )
        })
      })(Lr)),
    Lr.exports
  )
}
;(function (t, r) {
  ;(function (o, i) {
    i(typeof Ni == 'function' ? ih() : o.moment)
  })(ci, function (o) {
    //! moment.js locale configuration
    var i = o.defineLocale('vi', {
      months:
        'tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12'.split(
          '_',
        ),
      monthsShort:
        'Thg 01_Thg 02_Thg 03_Thg 04_Thg 05_Thg 06_Thg 07_Thg 08_Thg 09_Thg 10_Thg 11_Thg 12'.split(
          '_',
        ),
      monthsParseExact: !0,
      weekdays: 'chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy'.split(
        '_',
      ),
      weekdaysShort: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysMin: 'CN_T2_T3_T4_T5_T6_T7'.split('_'),
      weekdaysParseExact: !0,
      meridiemParse: /sa|ch/i,
      isPM: function (c) {
        return /^ch$/i.test(c)
      },
      meridiem: function (c, f, h) {
        return c < 12 ? (h ? 'sa' : 'SA') : h ? 'ch' : 'CH'
      },
      longDateFormat: {
        LT: 'HH:mm',
        LTS: 'HH:mm:ss',
        L: 'DD/MM/YYYY',
        LL: 'D MMMM [năm] YYYY',
        LLL: 'D MMMM [năm] YYYY HH:mm',
        LLLL: 'dddd, D MMMM [năm] YYYY HH:mm',
        l: 'DD/M/YYYY',
        ll: 'D MMM YYYY',
        lll: 'D MMM YYYY HH:mm',
        llll: 'ddd, D MMM YYYY HH:mm',
      },
      calendar: {
        sameDay: '[Hôm nay lúc] LT',
        nextDay: '[Ngày mai lúc] LT',
        nextWeek: 'dddd [tuần tới lúc] LT',
        lastDay: '[Hôm qua lúc] LT',
        lastWeek: 'dddd [tuần trước lúc] LT',
        sameElse: 'L',
      },
      relativeTime: {
        future: '%s tới',
        past: '%s trước',
        s: 'vài giây',
        ss: '%d giây',
        m: 'một phút',
        mm: '%d phút',
        h: 'một giờ',
        hh: '%d giờ',
        d: 'một ngày',
        dd: '%d ngày',
        w: 'một tuần',
        ww: '%d tuần',
        M: 'một tháng',
        MM: '%d tháng',
        y: 'một năm',
        yy: '%d năm',
      },
      dayOfMonthOrdinalParse: /\d{1,2}/,
      ordinal: function (c) {
        return c
      },
      week: { dow: 1, doy: 4 },
    })
    return i
  })
})()
export {
  Pi as C,
  fd as D,
  nn as E,
  Yn as I,
  yi as L,
  sh as R,
  zn as S,
  gd as a,
  ui as b,
  Nd as c,
  bd as g,
  Pn as p,
  Ld as u,
}
