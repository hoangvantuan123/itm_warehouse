const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f || (m.f = ['assets/users-odAeYwxJ.js', 'assets/users-DOHzVdSD.css']),
) => i.map((i) => d[i])
var Pw = Object.defineProperty
var kw = (e, t, n) =>
  t in e
    ? Pw(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
    : (e[t] = n)
var im = (e, t, n) => kw(e, typeof t != 'symbol' ? t + '' : t, n)
function O0(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n]
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const i in r)
        if (i !== 'default' && !(i in e)) {
          const o = Object.getOwnPropertyDescriptor(r, i)
          o &&
            Object.defineProperty(
              e,
              i,
              o.get ? o : { enumerable: !0, get: () => r[i] },
            )
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
  )
}
;(function () {
  const t = document.createElement('link').relList
  if (t && t.supports && t.supports('modulepreload')) return
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === 'childList')
        for (const a of o.addedNodes)
          a.tagName === 'LINK' && a.rel === 'modulepreload' && r(a)
  }).observe(document, { childList: !0, subtree: !0 })
  function n(i) {
    const o = {}
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === 'use-credentials'
        ? (o.credentials = 'include')
        : i.crossOrigin === 'anonymous'
          ? (o.credentials = 'omit')
          : (o.credentials = 'same-origin'),
      o
    )
  }
  function r(i) {
    if (i.ep) return
    i.ep = !0
    const o = n(i)
    fetch(i.href, o)
  }
})()
var g5 =
  typeof globalThis < 'u'
    ? globalThis
    : typeof window < 'u'
      ? window
      : typeof global < 'u'
        ? global
        : typeof self < 'u'
          ? self
          : {}
function Ji(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default')
    ? e.default
    : e
}
var R0 = { exports: {} },
  Tw = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED',
  Ow = Tw,
  Rw = Ow
function I0() {}
function $0() {}
$0.resetWarningCache = I0
var Iw = function () {
  function e(r, i, o, a, s, l) {
    if (l !== Rw) {
      var u = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types',
      )
      throw ((u.name = 'Invariant Violation'), u)
    }
  }
  e.isRequired = e
  function t() {
    return e
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: $0,
    resetWarningCache: I0,
  }
  return (n.PropTypes = n), n
}
R0.exports = Iw()
var $w = R0.exports
const Xe = Ji($w)
var M0 = { exports: {} },
  fe = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var zs = Symbol.for('react.element'),
  Mw = Symbol.for('react.portal'),
  Nw = Symbol.for('react.fragment'),
  _w = Symbol.for('react.strict_mode'),
  Lw = Symbol.for('react.profiler'),
  Aw = Symbol.for('react.provider'),
  Fw = Symbol.for('react.context'),
  jw = Symbol.for('react.forward_ref'),
  zw = Symbol.for('react.suspense'),
  Dw = Symbol.for('react.memo'),
  Hw = Symbol.for('react.lazy'),
  om = Symbol.iterator
function Vw(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (om && e[om]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var N0 = {
    isMounted: function () {
      return !1
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  _0 = Object.assign,
  L0 = {}
function sa(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = L0),
    (this.updater = n || N0)
}
sa.prototype.isReactComponent = {}
sa.prototype.setState = function (e, t) {
  if (typeof e != 'object' && typeof e != 'function' && e != null)
    throw Error(
      'setState(...): takes an object of state variables to update or a function which returns an object of state variables.',
    )
  this.updater.enqueueSetState(this, e, t, 'setState')
}
sa.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function A0() {}
A0.prototype = sa.prototype
function jp(e, t, n) {
  ;(this.props = e),
    (this.context = t),
    (this.refs = L0),
    (this.updater = n || N0)
}
var zp = (jp.prototype = new A0())
zp.constructor = jp
_0(zp, sa.prototype)
zp.isPureReactComponent = !0
var am = Array.isArray,
  F0 = Object.prototype.hasOwnProperty,
  Dp = { current: null },
  j0 = { key: !0, ref: !0, __self: !0, __source: !0 }
function z0(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  if (t != null)
    for (r in (t.ref !== void 0 && (a = t.ref),
    t.key !== void 0 && (o = '' + t.key),
    t))
      F0.call(t, r) && !j0.hasOwnProperty(r) && (i[r] = t[r])
  var s = arguments.length - 2
  if (s === 1) i.children = n
  else if (1 < s) {
    for (var l = Array(s), u = 0; u < s; u++) l[u] = arguments[u + 2]
    i.children = l
  }
  if (e && e.defaultProps)
    for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r])
  return { $$typeof: zs, type: e, key: o, ref: a, props: i, _owner: Dp.current }
}
function Bw(e, t) {
  return {
    $$typeof: zs,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  }
}
function Hp(e) {
  return typeof e == 'object' && e !== null && e.$$typeof === zs
}
function Uw(e) {
  var t = { '=': '=0', ':': '=2' }
  return (
    '$' +
    e.replace(/[=:]/g, function (n) {
      return t[n]
    })
  )
}
var sm = /\/+/g
function Vc(e, t) {
  return typeof e == 'object' && e !== null && e.key != null
    ? Uw('' + e.key)
    : t.toString(36)
}
function Fl(e, t, n, r, i) {
  var o = typeof e
  ;(o === 'undefined' || o === 'boolean') && (e = null)
  var a = !1
  if (e === null) a = !0
  else
    switch (o) {
      case 'string':
      case 'number':
        a = !0
        break
      case 'object':
        switch (e.$$typeof) {
          case zs:
          case Mw:
            a = !0
        }
    }
  if (a)
    return (
      (a = e),
      (i = i(a)),
      (e = r === '' ? '.' + Vc(a, 0) : r),
      am(i)
        ? ((n = ''),
          e != null && (n = e.replace(sm, '$&/') + '/'),
          Fl(i, t, n, '', function (u) {
            return u
          }))
        : i != null &&
          (Hp(i) &&
            (i = Bw(
              i,
              n +
                (!i.key || (a && a.key === i.key)
                  ? ''
                  : ('' + i.key).replace(sm, '$&/') + '/') +
                e,
            )),
          t.push(i)),
      1
    )
  if (((a = 0), (r = r === '' ? '.' : r + ':'), am(e)))
    for (var s = 0; s < e.length; s++) {
      o = e[s]
      var l = r + Vc(o, s)
      a += Fl(o, t, n, l, i)
    }
  else if (((l = Vw(e)), typeof l == 'function'))
    for (e = l.call(e), s = 0; !(o = e.next()).done; )
      (o = o.value), (l = r + Vc(o, s++)), (a += Fl(o, t, n, l, i))
  else if (o === 'object')
    throw (
      ((t = String(e)),
      Error(
        'Objects are not valid as a React child (found: ' +
          (t === '[object Object]'
            ? 'object with keys {' + Object.keys(e).join(', ') + '}'
            : t) +
          '). If you meant to render a collection of children, use an array instead.',
      ))
    )
  return a
}
function al(e, t, n) {
  if (e == null) return e
  var r = [],
    i = 0
  return (
    Fl(e, r, '', '', function (o) {
      return t.call(n, o, i++)
    }),
    r
  )
}
function Ww(e) {
  if (e._status === -1) {
    var t = e._result
    ;(t = t()),
      t.then(
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n))
        },
        function (n) {
          ;(e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n))
        },
      ),
      e._status === -1 && ((e._status = 0), (e._result = t))
  }
  if (e._status === 1) return e._result.default
  throw e._result
}
var nn = { current: null },
  jl = { transition: null },
  Kw = {
    ReactCurrentDispatcher: nn,
    ReactCurrentBatchConfig: jl,
    ReactCurrentOwner: Dp,
  }
function D0() {
  throw Error('act(...) is not supported in production builds of React.')
}
fe.Children = {
  map: al,
  forEach: function (e, t, n) {
    al(
      e,
      function () {
        t.apply(this, arguments)
      },
      n,
    )
  },
  count: function (e) {
    var t = 0
    return (
      al(e, function () {
        t++
      }),
      t
    )
  },
  toArray: function (e) {
    return (
      al(e, function (t) {
        return t
      }) || []
    )
  },
  only: function (e) {
    if (!Hp(e))
      throw Error(
        'React.Children.only expected to receive a single React element child.',
      )
    return e
  },
}
fe.Component = sa
fe.Fragment = Nw
fe.Profiler = Lw
fe.PureComponent = jp
fe.StrictMode = _w
fe.Suspense = zw
fe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Kw
fe.act = D0
fe.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      'React.cloneElement(...): The argument must be a React element, but you passed ' +
        e +
        '.',
    )
  var r = _0({}, e.props),
    i = e.key,
    o = e.ref,
    a = e._owner
  if (t != null) {
    if (
      (t.ref !== void 0 && ((o = t.ref), (a = Dp.current)),
      t.key !== void 0 && (i = '' + t.key),
      e.type && e.type.defaultProps)
    )
      var s = e.type.defaultProps
    for (l in t)
      F0.call(t, l) &&
        !j0.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && s !== void 0 ? s[l] : t[l])
  }
  var l = arguments.length - 2
  if (l === 1) r.children = n
  else if (1 < l) {
    s = Array(l)
    for (var u = 0; u < l; u++) s[u] = arguments[u + 2]
    r.children = s
  }
  return { $$typeof: zs, type: e.type, key: i, ref: o, props: r, _owner: a }
}
fe.createContext = function (e) {
  return (
    (e = {
      $$typeof: Fw,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Aw, _context: e }),
    (e.Consumer = e)
  )
}
fe.createElement = z0
fe.createFactory = function (e) {
  var t = z0.bind(null, e)
  return (t.type = e), t
}
fe.createRef = function () {
  return { current: null }
}
fe.forwardRef = function (e) {
  return { $$typeof: jw, render: e }
}
fe.isValidElement = Hp
fe.lazy = function (e) {
  return { $$typeof: Hw, _payload: { _status: -1, _result: e }, _init: Ww }
}
fe.memo = function (e, t) {
  return { $$typeof: Dw, type: e, compare: t === void 0 ? null : t }
}
fe.startTransition = function (e) {
  var t = jl.transition
  jl.transition = {}
  try {
    e()
  } finally {
    jl.transition = t
  }
}
fe.unstable_act = D0
fe.useCallback = function (e, t) {
  return nn.current.useCallback(e, t)
}
fe.useContext = function (e) {
  return nn.current.useContext(e)
}
fe.useDebugValue = function () {}
fe.useDeferredValue = function (e) {
  return nn.current.useDeferredValue(e)
}
fe.useEffect = function (e, t) {
  return nn.current.useEffect(e, t)
}
fe.useId = function () {
  return nn.current.useId()
}
fe.useImperativeHandle = function (e, t, n) {
  return nn.current.useImperativeHandle(e, t, n)
}
fe.useInsertionEffect = function (e, t) {
  return nn.current.useInsertionEffect(e, t)
}
fe.useLayoutEffect = function (e, t) {
  return nn.current.useLayoutEffect(e, t)
}
fe.useMemo = function (e, t) {
  return nn.current.useMemo(e, t)
}
fe.useReducer = function (e, t, n) {
  return nn.current.useReducer(e, t, n)
}
fe.useRef = function (e) {
  return nn.current.useRef(e)
}
fe.useState = function (e) {
  return nn.current.useState(e)
}
fe.useSyncExternalStore = function (e, t, n) {
  return nn.current.useSyncExternalStore(e, t, n)
}
fe.useTransition = function () {
  return nn.current.useTransition()
}
fe.version = '18.3.1'
M0.exports = fe
var p = M0.exports
const ze = Ji(p),
  Ds = O0({ __proto__: null, default: ze }, [p])
function qw(e) {
  return e && typeof e == 'object' && 'default' in e ? e.default : e
}
var H0 = p,
  Gw = qw(H0)
function lm(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Xw(e, t) {
  ;(e.prototype = Object.create(t.prototype)),
    (e.prototype.constructor = e),
    (e.__proto__ = t)
}
var Qw = !!(
  typeof window < 'u' &&
  window.document &&
  window.document.createElement
)
function Yw(e, t, n) {
  if (typeof e != 'function')
    throw new Error('Expected reducePropsToState to be a function.')
  if (typeof t != 'function')
    throw new Error('Expected handleStateChangeOnClient to be a function.')
  if (typeof n < 'u' && typeof n != 'function')
    throw new Error(
      'Expected mapStateOnServer to either be undefined or a function.',
    )
  function r(i) {
    return i.displayName || i.name || 'Component'
  }
  return function (o) {
    if (typeof o != 'function')
      throw new Error('Expected WrappedComponent to be a React component.')
    var a = [],
      s
    function l() {
      ;(s = e(
        a.map(function (c) {
          return c.props
        }),
      )),
        u.canUseDOM ? t(s) : n && (s = n(s))
    }
    var u = (function (c) {
      Xw(f, c)
      function f() {
        return c.apply(this, arguments) || this
      }
      ;(f.peek = function () {
        return s
      }),
        (f.rewind = function () {
          if (f.canUseDOM)
            throw new Error(
              'You may only call rewind() on the server. Call peek() to read the current state.',
            )
          var y = s
          return (s = void 0), (a = []), y
        })
      var d = f.prototype
      return (
        (d.UNSAFE_componentWillMount = function () {
          a.push(this), l()
        }),
        (d.componentDidUpdate = function () {
          l()
        }),
        (d.componentWillUnmount = function () {
          var y = a.indexOf(this)
          a.splice(y, 1), l()
        }),
        (d.render = function () {
          return Gw.createElement(o, this.props)
        }),
        f
      )
    })(H0.PureComponent)
    return (
      lm(u, 'displayName', 'SideEffect(' + r(o) + ')'),
      lm(u, 'canUseDOM', Qw),
      u
    )
  }
}
var Zw = Yw
const Jw = Ji(Zw)
var eb = typeof Element < 'u',
  tb = typeof Map == 'function',
  nb = typeof Set == 'function',
  rb = typeof ArrayBuffer == 'function' && !!ArrayBuffer.isView
function zl(e, t) {
  if (e === t) return !0
  if (e && t && typeof e == 'object' && typeof t == 'object') {
    if (e.constructor !== t.constructor) return !1
    var n, r, i
    if (Array.isArray(e)) {
      if (((n = e.length), n != t.length)) return !1
      for (r = n; r-- !== 0; ) if (!zl(e[r], t[r])) return !1
      return !0
    }
    var o
    if (tb && e instanceof Map && t instanceof Map) {
      if (e.size !== t.size) return !1
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1
      for (o = e.entries(); !(r = o.next()).done; )
        if (!zl(r.value[1], t.get(r.value[0]))) return !1
      return !0
    }
    if (nb && e instanceof Set && t instanceof Set) {
      if (e.size !== t.size) return !1
      for (o = e.entries(); !(r = o.next()).done; )
        if (!t.has(r.value[0])) return !1
      return !0
    }
    if (rb && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
      if (((n = e.length), n != t.length)) return !1
      for (r = n; r-- !== 0; ) if (e[r] !== t[r]) return !1
      return !0
    }
    if (e.constructor === RegExp)
      return e.source === t.source && e.flags === t.flags
    if (
      e.valueOf !== Object.prototype.valueOf &&
      typeof e.valueOf == 'function' &&
      typeof t.valueOf == 'function'
    )
      return e.valueOf() === t.valueOf()
    if (
      e.toString !== Object.prototype.toString &&
      typeof e.toString == 'function' &&
      typeof t.toString == 'function'
    )
      return e.toString() === t.toString()
    if (((i = Object.keys(e)), (n = i.length), n !== Object.keys(t).length))
      return !1
    for (r = n; r-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(t, i[r])) return !1
    if (eb && e instanceof Element) return !1
    for (r = n; r-- !== 0; )
      if (
        !(
          (i[r] === '_owner' || i[r] === '__v' || i[r] === '__o') &&
          e.$$typeof
        ) &&
        !zl(e[i[r]], t[i[r]])
      )
        return !1
    return !0
  }
  return e !== e && t !== t
}
var ib = function (t, n) {
  try {
    return zl(t, n)
  } catch (r) {
    if ((r.message || '').match(/stack|recursion/i))
      return console.warn('react-fast-compare cannot handle circular refs'), !1
    throw r
  }
}
const ob = Ji(ib)
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var um = Object.getOwnPropertySymbols,
  ab = Object.prototype.hasOwnProperty,
  sb = Object.prototype.propertyIsEnumerable
function lb(e) {
  if (e == null)
    throw new TypeError('Object.assign cannot be called with null or undefined')
  return Object(e)
}
function ub() {
  try {
    if (!Object.assign) return !1
    var e = new String('abc')
    if (((e[5] = 'de'), Object.getOwnPropertyNames(e)[0] === '5')) return !1
    for (var t = {}, n = 0; n < 10; n++) t['_' + String.fromCharCode(n)] = n
    var r = Object.getOwnPropertyNames(t).map(function (o) {
      return t[o]
    })
    if (r.join('') !== '0123456789') return !1
    var i = {}
    return (
      'abcdefghijklmnopqrst'.split('').forEach(function (o) {
        i[o] = o
      }),
      Object.keys(Object.assign({}, i)).join('') === 'abcdefghijklmnopqrst'
    )
  } catch {
    return !1
  }
}
var cb = ub()
  ? Object.assign
  : function (e, t) {
      for (var n, r = lb(e), i, o = 1; o < arguments.length; o++) {
        n = Object(arguments[o])
        for (var a in n) ab.call(n, a) && (r[a] = n[a])
        if (um) {
          i = um(n)
          for (var s = 0; s < i.length; s++)
            sb.call(n, i[s]) && (r[i[s]] = n[i[s]])
        }
      }
      return r
    }
const fb = Ji(cb)
var Di = {
    BODY: 'bodyAttributes',
    HTML: 'htmlAttributes',
    TITLE: 'titleAttributes',
  },
  se = {
    BASE: 'base',
    BODY: 'body',
    HEAD: 'head',
    HTML: 'html',
    LINK: 'link',
    META: 'meta',
    NOSCRIPT: 'noscript',
    SCRIPT: 'script',
    STYLE: 'style',
    TITLE: 'title',
  }
Object.keys(se).map(function (e) {
  return se[e]
})
var Qe = {
    CHARSET: 'charset',
    CSS_TEXT: 'cssText',
    HREF: 'href',
    HTTPEQUIV: 'http-equiv',
    INNER_HTML: 'innerHTML',
    ITEM_PROP: 'itemprop',
    NAME: 'name',
    PROPERTY: 'property',
    REL: 'rel',
    SRC: 'src',
    TARGET: 'target',
  },
  ou = {
    accesskey: 'accessKey',
    charset: 'charSet',
    class: 'className',
    contenteditable: 'contentEditable',
    contextmenu: 'contextMenu',
    'http-equiv': 'httpEquiv',
    itemprop: 'itemProp',
    tabindex: 'tabIndex',
  },
  is = {
    DEFAULT_TITLE: 'defaultTitle',
    DEFER: 'defer',
    ENCODE_SPECIAL_CHARACTERS: 'encodeSpecialCharacters',
    ON_CHANGE_CLIENT_STATE: 'onChangeClientState',
    TITLE_TEMPLATE: 'titleTemplate',
  },
  db = Object.keys(ou).reduce(function (e, t) {
    return (e[ou[t]] = t), e
  }, {}),
  pb = [se.NOSCRIPT, se.SCRIPT, se.STYLE],
  er = 'data-react-helmet',
  hb =
    typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
      ? function (e) {
          return typeof e
        }
      : function (e) {
          return e &&
            typeof Symbol == 'function' &&
            e.constructor === Symbol &&
            e !== Symbol.prototype
            ? 'symbol'
            : typeof e
        },
  mb = function (e, t) {
    if (!(e instanceof t))
      throw new TypeError('Cannot call a class as a function')
  },
  gb = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var i = n[r]
        ;(i.enumerable = i.enumerable || !1),
          (i.configurable = !0),
          'value' in i && (i.writable = !0),
          Object.defineProperty(t, i.key, i)
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t
    }
  })(),
  on =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t]
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
      }
      return e
    },
  vb = function (e, t) {
    if (typeof t != 'function' && t !== null)
      throw new TypeError(
        'Super expression must either be null or a function, not ' + typeof t,
      )
    ;(e.prototype = Object.create(t && t.prototype, {
      constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
    })),
      t &&
        (Object.setPrototypeOf
          ? Object.setPrototypeOf(e, t)
          : (e.__proto__ = t))
  },
  cm = function (e, t) {
    var n = {}
    for (var r in e)
      t.indexOf(r) >= 0 ||
        (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]))
    return n
  },
  yb = function (e, t) {
    if (!e)
      throw new ReferenceError(
        "this hasn't been initialised - super() hasn't been called",
      )
    return t && (typeof t == 'object' || typeof t == 'function') ? t : e
  },
  jf = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
    return n === !1
      ? String(t)
      : String(t)
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;')
          .replace(/"/g, '&quot;')
          .replace(/'/g, '&#x27;')
  },
  Sb = function (t) {
    var n = Ho(t, se.TITLE),
      r = Ho(t, is.TITLE_TEMPLATE)
    if (r && n)
      return r.replace(/%s/g, function () {
        return Array.isArray(n) ? n.join('') : n
      })
    var i = Ho(t, is.DEFAULT_TITLE)
    return n || i || void 0
  },
  Cb = function (t) {
    return Ho(t, is.ON_CHANGE_CLIENT_STATE) || function () {}
  },
  Bc = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[t] < 'u'
      })
      .map(function (r) {
        return r[t]
      })
      .reduce(function (r, i) {
        return on({}, r, i)
      }, {})
  },
  wb = function (t, n) {
    return n
      .filter(function (r) {
        return typeof r[se.BASE] < 'u'
      })
      .map(function (r) {
        return r[se.BASE]
      })
      .reverse()
      .reduce(function (r, i) {
        if (!r.length)
          for (var o = Object.keys(i), a = 0; a < o.length; a++) {
            var s = o[a],
              l = s.toLowerCase()
            if (t.indexOf(l) !== -1 && i[l]) return r.concat(i)
          }
        return r
      }, [])
  },
  Ca = function (t, n, r) {
    var i = {}
    return r
      .filter(function (o) {
        return Array.isArray(o[t])
          ? !0
          : (typeof o[t] < 'u' &&
              Pb(
                'Helmet: ' +
                  t +
                  ' should be of type "Array". Instead found type "' +
                  hb(o[t]) +
                  '"',
              ),
            !1)
      })
      .map(function (o) {
        return o[t]
      })
      .reverse()
      .reduce(function (o, a) {
        var s = {}
        a.filter(function (d) {
          for (var g = void 0, y = Object.keys(d), S = 0; S < y.length; S++) {
            var C = y[S],
              v = C.toLowerCase()
            n.indexOf(v) !== -1 &&
              !(g === Qe.REL && d[g].toLowerCase() === 'canonical') &&
              !(v === Qe.REL && d[v].toLowerCase() === 'stylesheet') &&
              (g = v),
              n.indexOf(C) !== -1 &&
                (C === Qe.INNER_HTML ||
                  C === Qe.CSS_TEXT ||
                  C === Qe.ITEM_PROP) &&
                (g = C)
          }
          if (!g || !d[g]) return !1
          var h = d[g].toLowerCase()
          return (
            i[g] || (i[g] = {}),
            s[g] || (s[g] = {}),
            i[g][h] ? !1 : ((s[g][h] = !0), !0)
          )
        })
          .reverse()
          .forEach(function (d) {
            return o.push(d)
          })
        for (var l = Object.keys(s), u = 0; u < l.length; u++) {
          var c = l[u],
            f = fb({}, i[c], s[c])
          i[c] = f
        }
        return o
      }, [])
      .reverse()
  },
  Ho = function (t, n) {
    for (var r = t.length - 1; r >= 0; r--) {
      var i = t[r]
      if (i.hasOwnProperty(n)) return i[n]
    }
    return null
  },
  bb = function (t) {
    return {
      baseTag: wb([Qe.HREF, Qe.TARGET], t),
      bodyAttributes: Bc(Di.BODY, t),
      defer: Ho(t, is.DEFER),
      encode: Ho(t, is.ENCODE_SPECIAL_CHARACTERS),
      htmlAttributes: Bc(Di.HTML, t),
      linkTags: Ca(se.LINK, [Qe.REL, Qe.HREF], t),
      metaTags: Ca(
        se.META,
        [Qe.NAME, Qe.CHARSET, Qe.HTTPEQUIV, Qe.PROPERTY, Qe.ITEM_PROP],
        t,
      ),
      noscriptTags: Ca(se.NOSCRIPT, [Qe.INNER_HTML], t),
      onChangeClientState: Cb(t),
      scriptTags: Ca(se.SCRIPT, [Qe.SRC, Qe.INNER_HTML], t),
      styleTags: Ca(se.STYLE, [Qe.CSS_TEXT], t),
      title: Sb(t),
      titleAttributes: Bc(Di.TITLE, t),
    }
  },
  zf = (function () {
    var e = Date.now()
    return function (t) {
      var n = Date.now()
      n - e > 16
        ? ((e = n), t(n))
        : setTimeout(function () {
            zf(t)
          }, 0)
    }
  })(),
  fm = function (t) {
    return clearTimeout(t)
  },
  xb =
    typeof window < 'u'
      ? (window.requestAnimationFrame &&
          window.requestAnimationFrame.bind(window)) ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        zf
      : global.requestAnimationFrame || zf,
  Eb =
    typeof window < 'u'
      ? window.cancelAnimationFrame ||
        window.webkitCancelAnimationFrame ||
        window.mozCancelAnimationFrame ||
        fm
      : global.cancelAnimationFrame || fm,
  Pb = function (t) {
    return console && typeof console.warn == 'function' && console.warn(t)
  },
  wa = null,
  kb = function (t) {
    wa && Eb(wa),
      t.defer
        ? (wa = xb(function () {
            dm(t, function () {
              wa = null
            })
          }))
        : (dm(t), (wa = null))
  },
  dm = function (t, n) {
    var r = t.baseTag,
      i = t.bodyAttributes,
      o = t.htmlAttributes,
      a = t.linkTags,
      s = t.metaTags,
      l = t.noscriptTags,
      u = t.onChangeClientState,
      c = t.scriptTags,
      f = t.styleTags,
      d = t.title,
      g = t.titleAttributes
    Df(se.BODY, i), Df(se.HTML, o), Tb(d, g)
    var y = {
        baseTag: ho(se.BASE, r),
        linkTags: ho(se.LINK, a),
        metaTags: ho(se.META, s),
        noscriptTags: ho(se.NOSCRIPT, l),
        scriptTags: ho(se.SCRIPT, c),
        styleTags: ho(se.STYLE, f),
      },
      S = {},
      C = {}
    Object.keys(y).forEach(function (v) {
      var h = y[v],
        m = h.newTags,
        w = h.oldTags
      m.length && (S[v] = m), w.length && (C[v] = y[v].oldTags)
    }),
      n && n(),
      u(t, S, C)
  },
  V0 = function (t) {
    return Array.isArray(t) ? t.join('') : t
  },
  Tb = function (t, n) {
    typeof t < 'u' && document.title !== t && (document.title = V0(t)),
      Df(se.TITLE, n)
  },
  Df = function (t, n) {
    var r = document.getElementsByTagName(t)[0]
    if (r) {
      for (
        var i = r.getAttribute(er),
          o = i ? i.split(',') : [],
          a = [].concat(o),
          s = Object.keys(n),
          l = 0;
        l < s.length;
        l++
      ) {
        var u = s[l],
          c = n[u] || ''
        r.getAttribute(u) !== c && r.setAttribute(u, c),
          o.indexOf(u) === -1 && o.push(u)
        var f = a.indexOf(u)
        f !== -1 && a.splice(f, 1)
      }
      for (var d = a.length - 1; d >= 0; d--) r.removeAttribute(a[d])
      o.length === a.length
        ? r.removeAttribute(er)
        : r.getAttribute(er) !== s.join(',') && r.setAttribute(er, s.join(','))
    }
  },
  ho = function (t, n) {
    var r = document.head || document.querySelector(se.HEAD),
      i = r.querySelectorAll(t + '[' + er + ']'),
      o = Array.prototype.slice.call(i),
      a = [],
      s = void 0
    return (
      n &&
        n.length &&
        n.forEach(function (l) {
          var u = document.createElement(t)
          for (var c in l)
            if (l.hasOwnProperty(c))
              if (c === Qe.INNER_HTML) u.innerHTML = l.innerHTML
              else if (c === Qe.CSS_TEXT)
                u.styleSheet
                  ? (u.styleSheet.cssText = l.cssText)
                  : u.appendChild(document.createTextNode(l.cssText))
              else {
                var f = typeof l[c] > 'u' ? '' : l[c]
                u.setAttribute(c, f)
              }
          u.setAttribute(er, 'true'),
            o.some(function (d, g) {
              return (s = g), u.isEqualNode(d)
            })
              ? o.splice(s, 1)
              : a.push(u)
        }),
      o.forEach(function (l) {
        return l.parentNode.removeChild(l)
      }),
      a.forEach(function (l) {
        return r.appendChild(l)
      }),
      { oldTags: o, newTags: a }
    )
  },
  B0 = function (t) {
    return Object.keys(t).reduce(function (n, r) {
      var i = typeof t[r] < 'u' ? r + '="' + t[r] + '"' : '' + r
      return n ? n + ' ' + i : i
    }, '')
  },
  Ob = function (t, n, r, i) {
    var o = B0(r),
      a = V0(n)
    return o
      ? '<' + t + ' ' + er + '="true" ' + o + '>' + jf(a, i) + '</' + t + '>'
      : '<' + t + ' ' + er + '="true">' + jf(a, i) + '</' + t + '>'
  },
  Rb = function (t, n, r) {
    return n.reduce(function (i, o) {
      var a = Object.keys(o)
          .filter(function (u) {
            return !(u === Qe.INNER_HTML || u === Qe.CSS_TEXT)
          })
          .reduce(function (u, c) {
            var f = typeof o[c] > 'u' ? c : c + '="' + jf(o[c], r) + '"'
            return u ? u + ' ' + f : f
          }, ''),
        s = o.innerHTML || o.cssText || '',
        l = pb.indexOf(t) === -1
      return (
        i +
        '<' +
        t +
        ' ' +
        er +
        '="true" ' +
        a +
        (l ? '/>' : '>' + s + '</' + t + '>')
      )
    }, '')
  },
  U0 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return Object.keys(t).reduce(function (r, i) {
      return (r[ou[i] || i] = t[i]), r
    }, n)
  },
  Ib = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    return Object.keys(t).reduce(function (r, i) {
      return (r[db[i] || i] = t[i]), r
    }, n)
  },
  $b = function (t, n, r) {
    var i,
      o = ((i = { key: n }), (i[er] = !0), i),
      a = U0(r, o)
    return [ze.createElement(se.TITLE, a, n)]
  },
  Mb = function (t, n) {
    return n.map(function (r, i) {
      var o,
        a = ((o = { key: i }), (o[er] = !0), o)
      return (
        Object.keys(r).forEach(function (s) {
          var l = ou[s] || s
          if (l === Qe.INNER_HTML || l === Qe.CSS_TEXT) {
            var u = r.innerHTML || r.cssText
            a.dangerouslySetInnerHTML = { __html: u }
          } else a[l] = r[s]
        }),
        ze.createElement(t, a)
      )
    })
  },
  Pr = function (t, n, r) {
    switch (t) {
      case se.TITLE:
        return {
          toComponent: function () {
            return $b(t, n.title, n.titleAttributes)
          },
          toString: function () {
            return Ob(t, n.title, n.titleAttributes, r)
          },
        }
      case Di.BODY:
      case Di.HTML:
        return {
          toComponent: function () {
            return U0(n)
          },
          toString: function () {
            return B0(n)
          },
        }
      default:
        return {
          toComponent: function () {
            return Mb(t, n)
          },
          toString: function () {
            return Rb(t, n, r)
          },
        }
    }
  },
  W0 = function (t) {
    var n = t.baseTag,
      r = t.bodyAttributes,
      i = t.encode,
      o = t.htmlAttributes,
      a = t.linkTags,
      s = t.metaTags,
      l = t.noscriptTags,
      u = t.scriptTags,
      c = t.styleTags,
      f = t.title,
      d = f === void 0 ? '' : f,
      g = t.titleAttributes
    return {
      base: Pr(se.BASE, n, i),
      bodyAttributes: Pr(Di.BODY, r, i),
      htmlAttributes: Pr(Di.HTML, o, i),
      link: Pr(se.LINK, a, i),
      meta: Pr(se.META, s, i),
      noscript: Pr(se.NOSCRIPT, l, i),
      script: Pr(se.SCRIPT, u, i),
      style: Pr(se.STYLE, c, i),
      title: Pr(se.TITLE, { title: d, titleAttributes: g }, i),
    }
  },
  Nb = function (t) {
    var n, r
    return (
      (r = n =
        (function (i) {
          vb(o, i)
          function o() {
            return mb(this, o), yb(this, i.apply(this, arguments))
          }
          return (
            (o.prototype.shouldComponentUpdate = function (s) {
              return !ob(this.props, s)
            }),
            (o.prototype.mapNestedChildrenToProps = function (s, l) {
              if (!l) return null
              switch (s.type) {
                case se.SCRIPT:
                case se.NOSCRIPT:
                  return { innerHTML: l }
                case se.STYLE:
                  return { cssText: l }
              }
              throw new Error(
                '<' +
                  s.type +
                  ' /> elements are self-closing and can not contain children. Refer to our API for more information.',
              )
            }),
            (o.prototype.flattenArrayTypeChildren = function (s) {
              var l,
                u = s.child,
                c = s.arrayTypeChildren,
                f = s.newChildProps,
                d = s.nestedChildren
              return on(
                {},
                c,
                ((l = {}),
                (l[u.type] = [].concat(c[u.type] || [], [
                  on({}, f, this.mapNestedChildrenToProps(u, d)),
                ])),
                l),
              )
            }),
            (o.prototype.mapObjectTypeChildren = function (s) {
              var l,
                u,
                c = s.child,
                f = s.newProps,
                d = s.newChildProps,
                g = s.nestedChildren
              switch (c.type) {
                case se.TITLE:
                  return on(
                    {},
                    f,
                    ((l = {}),
                    (l[c.type] = g),
                    (l.titleAttributes = on({}, d)),
                    l),
                  )
                case se.BODY:
                  return on({}, f, { bodyAttributes: on({}, d) })
                case se.HTML:
                  return on({}, f, { htmlAttributes: on({}, d) })
              }
              return on({}, f, ((u = {}), (u[c.type] = on({}, d)), u))
            }),
            (o.prototype.mapArrayTypeChildrenToProps = function (s, l) {
              var u = on({}, l)
              return (
                Object.keys(s).forEach(function (c) {
                  var f
                  u = on({}, u, ((f = {}), (f[c] = s[c]), f))
                }),
                u
              )
            }),
            (o.prototype.warnOnInvalidChildren = function (s, l) {
              return !0
            }),
            (o.prototype.mapChildrenToProps = function (s, l) {
              var u = this,
                c = {}
              return (
                ze.Children.forEach(s, function (f) {
                  if (!(!f || !f.props)) {
                    var d = f.props,
                      g = d.children,
                      y = cm(d, ['children']),
                      S = Ib(y)
                    switch ((u.warnOnInvalidChildren(f, g), f.type)) {
                      case se.LINK:
                      case se.META:
                      case se.NOSCRIPT:
                      case se.SCRIPT:
                      case se.STYLE:
                        c = u.flattenArrayTypeChildren({
                          child: f,
                          arrayTypeChildren: c,
                          newChildProps: S,
                          nestedChildren: g,
                        })
                        break
                      default:
                        l = u.mapObjectTypeChildren({
                          child: f,
                          newProps: l,
                          newChildProps: S,
                          nestedChildren: g,
                        })
                        break
                    }
                  }
                }),
                (l = this.mapArrayTypeChildrenToProps(c, l)),
                l
              )
            }),
            (o.prototype.render = function () {
              var s = this.props,
                l = s.children,
                u = cm(s, ['children']),
                c = on({}, u)
              return (
                l && (c = this.mapChildrenToProps(l, c)), ze.createElement(t, c)
              )
            }),
            gb(o, null, [
              {
                key: 'canUseDOM',
                set: function (s) {
                  t.canUseDOM = s
                },
              },
            ]),
            o
          )
        })(ze.Component)),
      (n.propTypes = {
        base: Xe.object,
        bodyAttributes: Xe.object,
        children: Xe.oneOfType([Xe.arrayOf(Xe.node), Xe.node]),
        defaultTitle: Xe.string,
        defer: Xe.bool,
        encodeSpecialCharacters: Xe.bool,
        htmlAttributes: Xe.object,
        link: Xe.arrayOf(Xe.object),
        meta: Xe.arrayOf(Xe.object),
        noscript: Xe.arrayOf(Xe.object),
        onChangeClientState: Xe.func,
        script: Xe.arrayOf(Xe.object),
        style: Xe.arrayOf(Xe.object),
        title: Xe.string,
        titleAttributes: Xe.object,
        titleTemplate: Xe.string,
      }),
      (n.defaultProps = { defer: !0, encodeSpecialCharacters: !0 }),
      (n.peek = t.peek),
      (n.rewind = function () {
        var i = t.rewind()
        return (
          i ||
            (i = W0({
              baseTag: [],
              bodyAttributes: {},
              encodeSpecialCharacters: !0,
              htmlAttributes: {},
              linkTags: [],
              metaTags: [],
              noscriptTags: [],
              scriptTags: [],
              styleTags: [],
              title: '',
              titleAttributes: {},
            })),
          i
        )
      }),
      r
    )
  },
  _b = function () {
    return null
  },
  Lb = Jw(bb, kb, W0)(_b),
  pm = Nb(Lb)
pm.renderStatic = pm.rewind
var K0 = { exports: {} },
  Xu = {}
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ab = p,
  Fb = Symbol.for('react.element'),
  jb = Symbol.for('react.fragment'),
  zb = Object.prototype.hasOwnProperty,
  Db = Ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Hb = { key: !0, ref: !0, __self: !0, __source: !0 }
function q0(e, t, n) {
  var r,
    i = {},
    o = null,
    a = null
  n !== void 0 && (o = '' + n),
    t.key !== void 0 && (o = '' + t.key),
    t.ref !== void 0 && (a = t.ref)
  for (r in t) zb.call(t, r) && !Hb.hasOwnProperty(r) && (i[r] = t[r])
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
  return { $$typeof: Fb, type: e, key: o, ref: a, props: i, _owner: Db.current }
}
Xu.Fragment = jb
Xu.jsx = q0
Xu.jsxs = q0
K0.exports = Xu
var X = K0.exports,
  G0 = { exports: {} },
  kn = {},
  X0 = { exports: {} },
  Q0 = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
  function t(P, R) {
    var N = P.length
    P.push(R)
    e: for (; 0 < N; ) {
      var j = (N - 1) >>> 1,
        H = P[j]
      if (0 < i(H, R)) (P[j] = R), (P[N] = H), (N = j)
      else break e
    }
  }
  function n(P) {
    return P.length === 0 ? null : P[0]
  }
  function r(P) {
    if (P.length === 0) return null
    var R = P[0],
      N = P.pop()
    if (N !== R) {
      P[0] = N
      e: for (var j = 0, H = P.length, K = H >>> 1; j < K; ) {
        var D = 2 * (j + 1) - 1,
          G = P[D],
          re = D + 1,
          ne = P[re]
        if (0 > i(G, N))
          re < H && 0 > i(ne, G)
            ? ((P[j] = ne), (P[re] = N), (j = re))
            : ((P[j] = G), (P[D] = N), (j = D))
        else if (re < H && 0 > i(ne, N)) (P[j] = ne), (P[re] = N), (j = re)
        else break e
      }
    }
    return R
  }
  function i(P, R) {
    var N = P.sortIndex - R.sortIndex
    return N !== 0 ? N : P.id - R.id
  }
  if (typeof performance == 'object' && typeof performance.now == 'function') {
    var o = performance
    e.unstable_now = function () {
      return o.now()
    }
  } else {
    var a = Date,
      s = a.now()
    e.unstable_now = function () {
      return a.now() - s
    }
  }
  var l = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    g = !1,
    y = !1,
    S = !1,
    C = typeof setTimeout == 'function' ? setTimeout : null,
    v = typeof clearTimeout == 'function' ? clearTimeout : null,
    h = typeof setImmediate < 'u' ? setImmediate : null
  typeof navigator < 'u' &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling)
  function m(P) {
    for (var R = n(u); R !== null; ) {
      if (R.callback === null) r(u)
      else if (R.startTime <= P) r(u), (R.sortIndex = R.expirationTime), t(l, R)
      else break
      R = n(u)
    }
  }
  function w(P) {
    if (((S = !1), m(P), !y))
      if (n(l) !== null) (y = !0), M(b)
      else {
        var R = n(u)
        R !== null && T(w, R.startTime - P)
      }
  }
  function b(P, R) {
    ;(y = !1), S && ((S = !1), v(k), (k = -1)), (g = !0)
    var N = d
    try {
      for (
        m(R), f = n(l);
        f !== null && (!(f.expirationTime > R) || (P && !L()));

      ) {
        var j = f.callback
        if (typeof j == 'function') {
          ;(f.callback = null), (d = f.priorityLevel)
          var H = j(f.expirationTime <= R)
          ;(R = e.unstable_now()),
            typeof H == 'function' ? (f.callback = H) : f === n(l) && r(l),
            m(R)
        } else r(l)
        f = n(l)
      }
      if (f !== null) var K = !0
      else {
        var D = n(u)
        D !== null && T(w, D.startTime - R), (K = !1)
      }
      return K
    } finally {
      ;(f = null), (d = N), (g = !1)
    }
  }
  var x = !1,
    E = null,
    k = -1,
    O = 5,
    I = -1
  function L() {
    return !(e.unstable_now() - I < O)
  }
  function z() {
    if (E !== null) {
      var P = e.unstable_now()
      I = P
      var R = !0
      try {
        R = E(!0, P)
      } finally {
        R ? A() : ((x = !1), (E = null))
      }
    } else x = !1
  }
  var A
  if (typeof h == 'function')
    A = function () {
      h(z)
    }
  else if (typeof MessageChannel < 'u') {
    var F = new MessageChannel(),
      V = F.port2
    ;(F.port1.onmessage = z),
      (A = function () {
        V.postMessage(null)
      })
  } else
    A = function () {
      C(z, 0)
    }
  function M(P) {
    ;(E = P), x || ((x = !0), A())
  }
  function T(P, R) {
    k = C(function () {
      P(e.unstable_now())
    }, R)
  }
  ;(e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (P) {
      P.callback = null
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), M(b))
    }),
    (e.unstable_forceFrameRate = function (P) {
      0 > P || 125 < P
        ? console.error(
            'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported',
          )
        : (O = 0 < P ? Math.floor(1e3 / P) : 5)
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l)
    }),
    (e.unstable_next = function (P) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var R = 3
          break
        default:
          R = d
      }
      var N = d
      d = R
      try {
        return P()
      } finally {
        d = N
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (P, R) {
      switch (P) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break
        default:
          P = 3
      }
      var N = d
      d = P
      try {
        return R()
      } finally {
        d = N
      }
    }),
    (e.unstable_scheduleCallback = function (P, R, N) {
      var j = e.unstable_now()
      switch (
        (typeof N == 'object' && N !== null
          ? ((N = N.delay), (N = typeof N == 'number' && 0 < N ? j + N : j))
          : (N = j),
        P)
      ) {
        case 1:
          var H = -1
          break
        case 2:
          H = 250
          break
        case 5:
          H = 1073741823
          break
        case 4:
          H = 1e4
          break
        default:
          H = 5e3
      }
      return (
        (H = N + H),
        (P = {
          id: c++,
          callback: R,
          priorityLevel: P,
          startTime: N,
          expirationTime: H,
          sortIndex: -1,
        }),
        N > j
          ? ((P.sortIndex = N),
            t(u, P),
            n(l) === null &&
              P === n(u) &&
              (S ? (v(k), (k = -1)) : (S = !0), T(w, N - j)))
          : ((P.sortIndex = H), t(l, P), y || g || ((y = !0), M(b))),
        P
      )
    }),
    (e.unstable_shouldYield = L),
    (e.unstable_wrapCallback = function (P) {
      var R = d
      return function () {
        var N = d
        d = R
        try {
          return P.apply(this, arguments)
        } finally {
          d = N
        }
      }
    })
})(Q0)
X0.exports = Q0
var Vb = X0.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Bb = p,
  En = Vb
function U(e) {
  for (
    var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e, n = 1;
    n < arguments.length;
    n++
  )
    t += '&args[]=' + encodeURIComponent(arguments[n])
  return (
    'Minified React error #' +
    e +
    '; visit ' +
    t +
    ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
  )
}
var Y0 = new Set(),
  os = {}
function eo(e, t) {
  Xo(e, t), Xo(e + 'Capture', t)
}
function Xo(e, t) {
  for (os[e] = t, e = 0; e < t.length; e++) Y0.add(t[e])
}
var Lr = !(
    typeof window > 'u' ||
    typeof window.document > 'u' ||
    typeof window.document.createElement > 'u'
  ),
  Hf = Object.prototype.hasOwnProperty,
  Ub =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  hm = {},
  mm = {}
function Wb(e) {
  return Hf.call(mm, e)
    ? !0
    : Hf.call(hm, e)
      ? !1
      : Ub.test(e)
        ? (mm[e] = !0)
        : ((hm[e] = !0), !1)
}
function Kb(e, t, n, r) {
  if (n !== null && n.type === 0) return !1
  switch (typeof t) {
    case 'function':
    case 'symbol':
      return !0
    case 'boolean':
      return r
        ? !1
        : n !== null
          ? !n.acceptsBooleans
          : ((e = e.toLowerCase().slice(0, 5)), e !== 'data-' && e !== 'aria-')
    default:
      return !1
  }
}
function qb(e, t, n, r) {
  if (t === null || typeof t > 'u' || Kb(e, t, n, r)) return !0
  if (r) return !1
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t
      case 4:
        return t === !1
      case 5:
        return isNaN(t)
      case 6:
        return isNaN(t) || 1 > t
    }
  return !1
}
function rn(e, t, n, r, i, o, a) {
  ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = o),
    (this.removeEmptyString = a)
}
var Ht = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
  .split(' ')
  .forEach(function (e) {
    Ht[e] = new rn(e, 0, !1, e, null, !1, !1)
  })
;[
  ['acceptCharset', 'accept-charset'],
  ['className', 'class'],
  ['htmlFor', 'for'],
  ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
  var t = e[0]
  Ht[t] = new rn(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
  Ht[e] = new rn(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
  'autoReverse',
  'externalResourcesRequired',
  'focusable',
  'preserveAlpha',
].forEach(function (e) {
  Ht[e] = new rn(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
  .split(' ')
  .forEach(function (e) {
    Ht[e] = new rn(e, 3, !1, e.toLowerCase(), null, !1, !1)
  })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
  Ht[e] = new rn(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
  Ht[e] = new rn(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
  Ht[e] = new rn(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
  Ht[e] = new rn(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Vp = /[\-:]([a-z])/g
function Bp(e) {
  return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Vp, Bp)
    Ht[t] = new rn(t, 1, !1, e, null, !1, !1)
  })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
  .split(' ')
  .forEach(function (e) {
    var t = e.replace(Vp, Bp)
    Ht[t] = new rn(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
  })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
  var t = e.replace(Vp, Bp)
  Ht[t] = new rn(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
  Ht[e] = new rn(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
Ht.xlinkHref = new rn(
  'xlinkHref',
  1,
  !1,
  'xlink:href',
  'http://www.w3.org/1999/xlink',
  !0,
  !1,
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
  Ht[e] = new rn(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Up(e, t, n, r) {
  var i = Ht.hasOwnProperty(t) ? Ht[t] : null
  ;(i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== 'o' && t[0] !== 'O') ||
      (t[1] !== 'n' && t[1] !== 'N')) &&
    (qb(t, n, i, r) && (n = null),
    r || i === null
      ? Wb(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
      : i.mustUseProperty
        ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
        : ((t = i.attributeName),
          (r = i.attributeNamespace),
          n === null
            ? e.removeAttribute(t)
            : ((i = i.type),
              (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
              r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Dr = Bb.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  sl = Symbol.for('react.element'),
  ko = Symbol.for('react.portal'),
  To = Symbol.for('react.fragment'),
  Wp = Symbol.for('react.strict_mode'),
  Vf = Symbol.for('react.profiler'),
  Z0 = Symbol.for('react.provider'),
  J0 = Symbol.for('react.context'),
  Kp = Symbol.for('react.forward_ref'),
  Bf = Symbol.for('react.suspense'),
  Uf = Symbol.for('react.suspense_list'),
  qp = Symbol.for('react.memo'),
  Qr = Symbol.for('react.lazy'),
  ey = Symbol.for('react.offscreen'),
  gm = Symbol.iterator
function ba(e) {
  return e === null || typeof e != 'object'
    ? null
    : ((e = (gm && e[gm]) || e['@@iterator']),
      typeof e == 'function' ? e : null)
}
var nt = Object.assign,
  Uc
function Aa(e) {
  if (Uc === void 0)
    try {
      throw Error()
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/)
      Uc = (t && t[1]) || ''
    }
  return (
    `
` +
    Uc +
    e
  )
}
var Wc = !1
function Kc(e, t) {
  if (!e || Wc) return ''
  Wc = !0
  var n = Error.prepareStackTrace
  Error.prepareStackTrace = void 0
  try {
    if (t)
      if (
        ((t = function () {
          throw Error()
        }),
        Object.defineProperty(t.prototype, 'props', {
          set: function () {
            throw Error()
          },
        }),
        typeof Reflect == 'object' && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, [])
        } catch (u) {
          var r = u
        }
        Reflect.construct(e, [], t)
      } else {
        try {
          t.call()
        } catch (u) {
          r = u
        }
        e.call(t.prototype)
      }
    else {
      try {
        throw Error()
      } catch (u) {
        r = u
      }
      e()
    }
  } catch (u) {
    if (u && r && typeof u.stack == 'string') {
      for (
        var i = u.stack.split(`
`),
          o = r.stack.split(`
`),
          a = i.length - 1,
          s = o.length - 1;
        1 <= a && 0 <= s && i[a] !== o[s];

      )
        s--
      for (; 1 <= a && 0 <= s; a--, s--)
        if (i[a] !== o[s]) {
          if (a !== 1 || s !== 1)
            do
              if ((a--, s--, 0 > s || i[a] !== o[s])) {
                var l =
                  `
` + i[a].replace(' at new ', ' at ')
                return (
                  e.displayName &&
                    l.includes('<anonymous>') &&
                    (l = l.replace('<anonymous>', e.displayName)),
                  l
                )
              }
            while (1 <= a && 0 <= s)
          break
        }
    }
  } finally {
    ;(Wc = !1), (Error.prepareStackTrace = n)
  }
  return (e = e ? e.displayName || e.name : '') ? Aa(e) : ''
}
function Gb(e) {
  switch (e.tag) {
    case 5:
      return Aa(e.type)
    case 16:
      return Aa('Lazy')
    case 13:
      return Aa('Suspense')
    case 19:
      return Aa('SuspenseList')
    case 0:
    case 2:
    case 15:
      return (e = Kc(e.type, !1)), e
    case 11:
      return (e = Kc(e.type.render, !1)), e
    case 1:
      return (e = Kc(e.type, !0)), e
    default:
      return ''
  }
}
function Wf(e) {
  if (e == null) return null
  if (typeof e == 'function') return e.displayName || e.name || null
  if (typeof e == 'string') return e
  switch (e) {
    case To:
      return 'Fragment'
    case ko:
      return 'Portal'
    case Vf:
      return 'Profiler'
    case Wp:
      return 'StrictMode'
    case Bf:
      return 'Suspense'
    case Uf:
      return 'SuspenseList'
  }
  if (typeof e == 'object')
    switch (e.$$typeof) {
      case J0:
        return (e.displayName || 'Context') + '.Consumer'
      case Z0:
        return (e._context.displayName || 'Context') + '.Provider'
      case Kp:
        var t = e.render
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ''),
            (e = e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
          e
        )
      case qp:
        return (
          (t = e.displayName || null), t !== null ? t : Wf(e.type) || 'Memo'
        )
      case Qr:
        ;(t = e._payload), (e = e._init)
        try {
          return Wf(e(t))
        } catch {}
    }
  return null
}
function Xb(e) {
  var t = e.type
  switch (e.tag) {
    case 24:
      return 'Cache'
    case 9:
      return (t.displayName || 'Context') + '.Consumer'
    case 10:
      return (t._context.displayName || 'Context') + '.Provider'
    case 18:
      return 'DehydratedFragment'
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ''),
        t.displayName || (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
      )
    case 7:
      return 'Fragment'
    case 5:
      return t
    case 4:
      return 'Portal'
    case 3:
      return 'Root'
    case 6:
      return 'Text'
    case 16:
      return Wf(t)
    case 8:
      return t === Wp ? 'StrictMode' : 'Mode'
    case 22:
      return 'Offscreen'
    case 12:
      return 'Profiler'
    case 21:
      return 'Scope'
    case 13:
      return 'Suspense'
    case 19:
      return 'SuspenseList'
    case 25:
      return 'TracingMarker'
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == 'function') return t.displayName || t.name || null
      if (typeof t == 'string') return t
  }
  return null
}
function gi(e) {
  switch (typeof e) {
    case 'boolean':
    case 'number':
    case 'string':
    case 'undefined':
      return e
    case 'object':
      return e
    default:
      return ''
  }
}
function ty(e) {
  var t = e.type
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === 'input' &&
    (t === 'checkbox' || t === 'radio')
  )
}
function Qb(e) {
  var t = ty(e) ? 'checked' : 'value',
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = '' + e[t]
  if (
    !e.hasOwnProperty(t) &&
    typeof n < 'u' &&
    typeof n.get == 'function' &&
    typeof n.set == 'function'
  ) {
    var i = n.get,
      o = n.set
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this)
        },
        set: function (a) {
          ;(r = '' + a), o.call(this, a)
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r
        },
        setValue: function (a) {
          r = '' + a
        },
        stopTracking: function () {
          ;(e._valueTracker = null), delete e[t]
        },
      }
    )
  }
}
function ll(e) {
  e._valueTracker || (e._valueTracker = Qb(e))
}
function ny(e) {
  if (!e) return !1
  var t = e._valueTracker
  if (!t) return !0
  var n = t.getValue(),
    r = ''
  return (
    e && (r = ty(e) ? (e.checked ? 'true' : 'false') : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  )
}
function au(e) {
  if (((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u'))
    return null
  try {
    return e.activeElement || e.body
  } catch {
    return e.body
  }
}
function Kf(e, t) {
  var n = t.checked
  return nt({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  })
}
function vm(e, t) {
  var n = t.defaultValue == null ? '' : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked
  ;(n = gi(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === 'checkbox' || t.type === 'radio'
          ? t.checked != null
          : t.value != null,
    })
}
function ry(e, t) {
  ;(t = t.checked), t != null && Up(e, 'checked', t, !1)
}
function qf(e, t) {
  ry(e, t)
  var n = gi(t.value),
    r = t.type
  if (n != null)
    r === 'number'
      ? ((n === 0 && e.value === '') || e.value != n) && (e.value = '' + n)
      : e.value !== '' + n && (e.value = '' + n)
  else if (r === 'submit' || r === 'reset') {
    e.removeAttribute('value')
    return
  }
  t.hasOwnProperty('value')
    ? Gf(e, t.type, n)
    : t.hasOwnProperty('defaultValue') && Gf(e, t.type, gi(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked)
}
function ym(e, t, n) {
  if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
    var r = t.type
    if (
      !(
        (r !== 'submit' && r !== 'reset') ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return
    ;(t = '' + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t)
  }
  ;(n = e.name),
    n !== '' && (e.name = ''),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== '' && (e.name = n)
}
function Gf(e, t, n) {
  ;(t !== 'number' || au(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = '' + e._wrapperState.initialValue)
      : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var Fa = Array.isArray
function Vo(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {}
    for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty('$' + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0)
  } else {
    for (n = '' + gi(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
        return
      }
      t !== null || e[i].disabled || (t = e[i])
    }
    t !== null && (t.selected = !0)
  }
}
function Xf(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(U(91))
  return nt({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: '' + e._wrapperState.initialValue,
  })
}
function Sm(e, t) {
  var n = t.value
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(U(92))
      if (Fa(n)) {
        if (1 < n.length) throw Error(U(93))
        n = n[0]
      }
      t = n
    }
    t == null && (t = ''), (n = t)
  }
  e._wrapperState = { initialValue: gi(n) }
}
function iy(e, t) {
  var n = gi(t.value),
    r = gi(t.defaultValue)
  n != null &&
    ((n = '' + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = '' + r)
}
function Cm(e) {
  var t = e.textContent
  t === e._wrapperState.initialValue && t !== '' && t !== null && (e.value = t)
}
function oy(e) {
  switch (e) {
    case 'svg':
      return 'http://www.w3.org/2000/svg'
    case 'math':
      return 'http://www.w3.org/1998/Math/MathML'
    default:
      return 'http://www.w3.org/1999/xhtml'
  }
}
function Qf(e, t) {
  return e == null || e === 'http://www.w3.org/1999/xhtml'
    ? oy(t)
    : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
      ? 'http://www.w3.org/1999/xhtml'
      : e
}
var ul,
  ay = (function (e) {
    return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i)
          })
        }
      : e
  })(function (e, t) {
    if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
      e.innerHTML = t
    else {
      for (
        ul = ul || document.createElement('div'),
          ul.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
          t = ul.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild)
      for (; t.firstChild; ) e.appendChild(t.firstChild)
    }
  })
function as(e, t) {
  if (t) {
    var n = e.firstChild
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t
      return
    }
  }
  e.textContent = t
}
var Va = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  Yb = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(Va).forEach(function (e) {
  Yb.forEach(function (t) {
    ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Va[t] = Va[e])
  })
})
function sy(e, t, n) {
  return t == null || typeof t == 'boolean' || t === ''
    ? ''
    : n || typeof t != 'number' || t === 0 || (Va.hasOwnProperty(e) && Va[e])
      ? ('' + t).trim()
      : t + 'px'
}
function ly(e, t) {
  e = e.style
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf('--') === 0,
        i = sy(n, t[n], r)
      n === 'float' && (n = 'cssFloat'), r ? e.setProperty(n, i) : (e[n] = i)
    }
}
var Zb = nt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  },
)
function Yf(e, t) {
  if (t) {
    if (Zb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(U(137, e))
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(U(60))
      if (
        typeof t.dangerouslySetInnerHTML != 'object' ||
        !('__html' in t.dangerouslySetInnerHTML)
      )
        throw Error(U(61))
    }
    if (t.style != null && typeof t.style != 'object') throw Error(U(62))
  }
}
function Zf(e, t) {
  if (e.indexOf('-') === -1) return typeof t.is == 'string'
  switch (e) {
    case 'annotation-xml':
    case 'color-profile':
    case 'font-face':
    case 'font-face-src':
    case 'font-face-uri':
    case 'font-face-format':
    case 'font-face-name':
    case 'missing-glyph':
      return !1
    default:
      return !0
  }
}
var Jf = null
function Gp(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  )
}
var ed = null,
  Bo = null,
  Uo = null
function wm(e) {
  if ((e = Bs(e))) {
    if (typeof ed != 'function') throw Error(U(280))
    var t = e.stateNode
    t && ((t = ec(t)), ed(e.stateNode, e.type, t))
  }
}
function uy(e) {
  Bo ? (Uo ? Uo.push(e) : (Uo = [e])) : (Bo = e)
}
function cy() {
  if (Bo) {
    var e = Bo,
      t = Uo
    if (((Uo = Bo = null), wm(e), t)) for (e = 0; e < t.length; e++) wm(t[e])
  }
}
function fy(e, t) {
  return e(t)
}
function dy() {}
var qc = !1
function py(e, t, n) {
  if (qc) return e(t, n)
  qc = !0
  try {
    return fy(e, t, n)
  } finally {
    ;(qc = !1), (Bo !== null || Uo !== null) && (dy(), cy())
  }
}
function ss(e, t) {
  var n = e.stateNode
  if (n === null) return null
  var r = ec(n)
  if (r === null) return null
  n = r[t]
  e: switch (t) {
    case 'onClick':
    case 'onClickCapture':
    case 'onDoubleClick':
    case 'onDoubleClickCapture':
    case 'onMouseDown':
    case 'onMouseDownCapture':
    case 'onMouseMove':
    case 'onMouseMoveCapture':
    case 'onMouseUp':
    case 'onMouseUpCapture':
    case 'onMouseEnter':
      ;(r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === 'button' ||
          e === 'input' ||
          e === 'select' ||
          e === 'textarea'
        ))),
        (e = !r)
      break e
    default:
      e = !1
  }
  if (e) return null
  if (n && typeof n != 'function') throw Error(U(231, t, typeof n))
  return n
}
var td = !1
if (Lr)
  try {
    var xa = {}
    Object.defineProperty(xa, 'passive', {
      get: function () {
        td = !0
      },
    }),
      window.addEventListener('test', xa, xa),
      window.removeEventListener('test', xa, xa)
  } catch {
    td = !1
  }
function Jb(e, t, n, r, i, o, a, s, l) {
  var u = Array.prototype.slice.call(arguments, 3)
  try {
    t.apply(n, u)
  } catch (c) {
    this.onError(c)
  }
}
var Ba = !1,
  su = null,
  lu = !1,
  nd = null,
  ex = {
    onError: function (e) {
      ;(Ba = !0), (su = e)
    },
  }
function tx(e, t, n, r, i, o, a, s, l) {
  ;(Ba = !1), (su = null), Jb.apply(ex, arguments)
}
function nx(e, t, n, r, i, o, a, s, l) {
  if ((tx.apply(this, arguments), Ba)) {
    if (Ba) {
      var u = su
      ;(Ba = !1), (su = null)
    } else throw Error(U(198))
    lu || ((lu = !0), (nd = u))
  }
}
function to(e) {
  var t = e,
    n = e
  if (e.alternate) for (; t.return; ) t = t.return
  else {
    e = t
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
    while (e)
  }
  return t.tag === 3 ? n : null
}
function hy(e) {
  if (e.tag === 13) {
    var t = e.memoizedState
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated
  }
  return null
}
function bm(e) {
  if (to(e) !== e) throw Error(U(188))
}
function rx(e) {
  var t = e.alternate
  if (!t) {
    if (((t = to(e)), t === null)) throw Error(U(188))
    return t !== e ? null : e
  }
  for (var n = e, r = t; ; ) {
    var i = n.return
    if (i === null) break
    var o = i.alternate
    if (o === null) {
      if (((r = i.return), r !== null)) {
        n = r
        continue
      }
      break
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === n) return bm(i), e
        if (o === r) return bm(i), t
        o = o.sibling
      }
      throw Error(U(188))
    }
    if (n.return !== r.return) (n = i), (r = o)
    else {
      for (var a = !1, s = i.child; s; ) {
        if (s === n) {
          ;(a = !0), (n = i), (r = o)
          break
        }
        if (s === r) {
          ;(a = !0), (r = i), (n = o)
          break
        }
        s = s.sibling
      }
      if (!a) {
        for (s = o.child; s; ) {
          if (s === n) {
            ;(a = !0), (n = o), (r = i)
            break
          }
          if (s === r) {
            ;(a = !0), (r = o), (n = i)
            break
          }
          s = s.sibling
        }
        if (!a) throw Error(U(189))
      }
    }
    if (n.alternate !== r) throw Error(U(190))
  }
  if (n.tag !== 3) throw Error(U(188))
  return n.stateNode.current === n ? e : t
}
function my(e) {
  return (e = rx(e)), e !== null ? gy(e) : null
}
function gy(e) {
  if (e.tag === 5 || e.tag === 6) return e
  for (e = e.child; e !== null; ) {
    var t = gy(e)
    if (t !== null) return t
    e = e.sibling
  }
  return null
}
var vy = En.unstable_scheduleCallback,
  xm = En.unstable_cancelCallback,
  ix = En.unstable_shouldYield,
  ox = En.unstable_requestPaint,
  pt = En.unstable_now,
  ax = En.unstable_getCurrentPriorityLevel,
  Xp = En.unstable_ImmediatePriority,
  yy = En.unstable_UserBlockingPriority,
  uu = En.unstable_NormalPriority,
  sx = En.unstable_LowPriority,
  Sy = En.unstable_IdlePriority,
  Qu = null,
  Cr = null
function lx(e) {
  if (Cr && typeof Cr.onCommitFiberRoot == 'function')
    try {
      Cr.onCommitFiberRoot(Qu, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var tr = Math.clz32 ? Math.clz32 : fx,
  ux = Math.log,
  cx = Math.LN2
function fx(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((ux(e) / cx) | 0)) | 0
}
var cl = 64,
  fl = 4194304
function ja(e) {
  switch (e & -e) {
    case 1:
      return 1
    case 2:
      return 2
    case 4:
      return 4
    case 8:
      return 8
    case 16:
      return 16
    case 32:
      return 32
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424
    case 134217728:
      return 134217728
    case 268435456:
      return 268435456
    case 536870912:
      return 536870912
    case 1073741824:
      return 1073741824
    default:
      return e
  }
}
function cu(e, t) {
  var n = e.pendingLanes
  if (n === 0) return 0
  var r = 0,
    i = e.suspendedLanes,
    o = e.pingedLanes,
    a = n & 268435455
  if (a !== 0) {
    var s = a & ~i
    s !== 0 ? (r = ja(s)) : ((o &= a), o !== 0 && (r = ja(o)))
  } else (a = n & ~i), a !== 0 ? (r = ja(a)) : o !== 0 && (r = ja(o))
  if (r === 0) return 0
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (o = t & -t), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return t
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - tr(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
  return r
}
function dx(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1
    default:
      return -1
  }
}
function px(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      o = e.pendingLanes;
    0 < o;

  ) {
    var a = 31 - tr(o),
      s = 1 << a,
      l = i[a]
    l === -1
      ? (!(s & n) || s & r) && (i[a] = dx(s, t))
      : l <= t && (e.expiredLanes |= s),
      (o &= ~s)
  }
}
function rd(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  )
}
function Cy() {
  var e = cl
  return (cl <<= 1), !(cl & 4194240) && (cl = 64), e
}
function Gc(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e)
  return t
}
function Hs(e, t, n) {
  ;(e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - tr(t)),
    (e[t] = n)
}
function hx(e, t) {
  var n = e.pendingLanes & ~t
  ;(e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements)
  var r = e.eventTimes
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - tr(n),
      o = 1 << i
    ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~o)
  }
}
function Qp(e, t) {
  var n = (e.entangledLanes |= t)
  for (e = e.entanglements; n; ) {
    var r = 31 - tr(n),
      i = 1 << r
    ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
  }
}
var Ie = 0
function wy(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var by,
  Yp,
  xy,
  Ey,
  Py,
  id = !1,
  dl = [],
  si = null,
  li = null,
  ui = null,
  ls = new Map(),
  us = new Map(),
  Zr = [],
  mx =
    'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
      ' ',
    )
function Em(e, t) {
  switch (e) {
    case 'focusin':
    case 'focusout':
      si = null
      break
    case 'dragenter':
    case 'dragleave':
      li = null
      break
    case 'mouseover':
    case 'mouseout':
      ui = null
      break
    case 'pointerover':
    case 'pointerout':
      ls.delete(t.pointerId)
      break
    case 'gotpointercapture':
    case 'lostpointercapture':
      us.delete(t.pointerId)
  }
}
function Ea(e, t, n, r, i, o) {
  return e === null || e.nativeEvent !== o
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: o,
        targetContainers: [i],
      }),
      t !== null && ((t = Bs(t)), t !== null && Yp(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e)
}
function gx(e, t, n, r, i) {
  switch (t) {
    case 'focusin':
      return (si = Ea(si, e, t, n, r, i)), !0
    case 'dragenter':
      return (li = Ea(li, e, t, n, r, i)), !0
    case 'mouseover':
      return (ui = Ea(ui, e, t, n, r, i)), !0
    case 'pointerover':
      var o = i.pointerId
      return ls.set(o, Ea(ls.get(o) || null, e, t, n, r, i)), !0
    case 'gotpointercapture':
      return (
        (o = i.pointerId), us.set(o, Ea(us.get(o) || null, e, t, n, r, i)), !0
      )
  }
  return !1
}
function ky(e) {
  var t = Li(e.target)
  if (t !== null) {
    var n = to(t)
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = hy(n)), t !== null)) {
          ;(e.blockedOn = t),
            Py(e.priority, function () {
              xy(n)
            })
          return
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
        return
      }
    }
  }
  e.blockedOn = null
}
function Dl(e) {
  if (e.blockedOn !== null) return !1
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = od(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
    if (n === null) {
      n = e.nativeEvent
      var r = new n.constructor(n.type, n)
      ;(Jf = r), n.target.dispatchEvent(r), (Jf = null)
    } else return (t = Bs(n)), t !== null && Yp(t), (e.blockedOn = n), !1
    t.shift()
  }
  return !0
}
function Pm(e, t, n) {
  Dl(e) && n.delete(t)
}
function vx() {
  ;(id = !1),
    si !== null && Dl(si) && (si = null),
    li !== null && Dl(li) && (li = null),
    ui !== null && Dl(ui) && (ui = null),
    ls.forEach(Pm),
    us.forEach(Pm)
}
function Pa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    id ||
      ((id = !0), En.unstable_scheduleCallback(En.unstable_NormalPriority, vx)))
}
function cs(e) {
  function t(i) {
    return Pa(i, e)
  }
  if (0 < dl.length) {
    Pa(dl[0], e)
    for (var n = 1; n < dl.length; n++) {
      var r = dl[n]
      r.blockedOn === e && (r.blockedOn = null)
    }
  }
  for (
    si !== null && Pa(si, e),
      li !== null && Pa(li, e),
      ui !== null && Pa(ui, e),
      ls.forEach(t),
      us.forEach(t),
      n = 0;
    n < Zr.length;
    n++
  )
    (r = Zr[n]), r.blockedOn === e && (r.blockedOn = null)
  for (; 0 < Zr.length && ((n = Zr[0]), n.blockedOn === null); )
    ky(n), n.blockedOn === null && Zr.shift()
}
var Wo = Dr.ReactCurrentBatchConfig,
  fu = !0
function yx(e, t, n, r) {
  var i = Ie,
    o = Wo.transition
  Wo.transition = null
  try {
    ;(Ie = 1), Zp(e, t, n, r)
  } finally {
    ;(Ie = i), (Wo.transition = o)
  }
}
function Sx(e, t, n, r) {
  var i = Ie,
    o = Wo.transition
  Wo.transition = null
  try {
    ;(Ie = 4), Zp(e, t, n, r)
  } finally {
    ;(Ie = i), (Wo.transition = o)
  }
}
function Zp(e, t, n, r) {
  if (fu) {
    var i = od(e, t, n, r)
    if (i === null) of(e, t, r, du, n), Em(e, r)
    else if (gx(i, e, t, n, r)) r.stopPropagation()
    else if ((Em(e, r), t & 4 && -1 < mx.indexOf(e))) {
      for (; i !== null; ) {
        var o = Bs(i)
        if (
          (o !== null && by(o),
          (o = od(e, t, n, r)),
          o === null && of(e, t, r, du, n),
          o === i)
        )
          break
        i = o
      }
      i !== null && r.stopPropagation()
    } else of(e, t, r, null, n)
  }
}
var du = null
function od(e, t, n, r) {
  if (((du = null), (e = Gp(r)), (e = Li(e)), e !== null))
    if (((t = to(e)), t === null)) e = null
    else if (((n = t.tag), n === 13)) {
      if (((e = hy(t)), e !== null)) return e
      e = null
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null
      e = null
    } else t !== e && (e = null)
  return (du = e), null
}
function Ty(e) {
  switch (e) {
    case 'cancel':
    case 'click':
    case 'close':
    case 'contextmenu':
    case 'copy':
    case 'cut':
    case 'auxclick':
    case 'dblclick':
    case 'dragend':
    case 'dragstart':
    case 'drop':
    case 'focusin':
    case 'focusout':
    case 'input':
    case 'invalid':
    case 'keydown':
    case 'keypress':
    case 'keyup':
    case 'mousedown':
    case 'mouseup':
    case 'paste':
    case 'pause':
    case 'play':
    case 'pointercancel':
    case 'pointerdown':
    case 'pointerup':
    case 'ratechange':
    case 'reset':
    case 'resize':
    case 'seeked':
    case 'submit':
    case 'touchcancel':
    case 'touchend':
    case 'touchstart':
    case 'volumechange':
    case 'change':
    case 'selectionchange':
    case 'textInput':
    case 'compositionstart':
    case 'compositionend':
    case 'compositionupdate':
    case 'beforeblur':
    case 'afterblur':
    case 'beforeinput':
    case 'blur':
    case 'fullscreenchange':
    case 'focus':
    case 'hashchange':
    case 'popstate':
    case 'select':
    case 'selectstart':
      return 1
    case 'drag':
    case 'dragenter':
    case 'dragexit':
    case 'dragleave':
    case 'dragover':
    case 'mousemove':
    case 'mouseout':
    case 'mouseover':
    case 'pointermove':
    case 'pointerout':
    case 'pointerover':
    case 'scroll':
    case 'toggle':
    case 'touchmove':
    case 'wheel':
    case 'mouseenter':
    case 'mouseleave':
    case 'pointerenter':
    case 'pointerleave':
      return 4
    case 'message':
      switch (ax()) {
        case Xp:
          return 1
        case yy:
          return 4
        case uu:
        case sx:
          return 16
        case Sy:
          return 536870912
        default:
          return 16
      }
    default:
      return 16
  }
}
var ei = null,
  Jp = null,
  Hl = null
function Oy() {
  if (Hl) return Hl
  var e,
    t = Jp,
    n = t.length,
    r,
    i = 'value' in ei ? ei.value : ei.textContent,
    o = i.length
  for (e = 0; e < n && t[e] === i[e]; e++);
  var a = n - e
  for (r = 1; r <= a && t[n - r] === i[o - r]; r++);
  return (Hl = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Vl(e) {
  var t = e.keyCode
  return (
    'charCode' in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  )
}
function pl() {
  return !0
}
function km() {
  return !1
}
function Tn(e) {
  function t(n, r, i, o, a) {
    ;(this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = o),
      (this.target = a),
      (this.currentTarget = null)
    for (var s in e)
      e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(o) : o[s]))
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? pl
        : km),
      (this.isPropagationStopped = km),
      this
    )
  }
  return (
    nt(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0
        var n = this.nativeEvent
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != 'unknown' && (n.returnValue = !1),
          (this.isDefaultPrevented = pl))
      },
      stopPropagation: function () {
        var n = this.nativeEvent
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != 'unknown' && (n.cancelBubble = !0),
          (this.isPropagationStopped = pl))
      },
      persist: function () {},
      isPersistent: pl,
    }),
    t
  )
}
var la = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now()
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  eh = Tn(la),
  Vs = nt({}, la, { view: 0, detail: 0 }),
  Cx = Tn(Vs),
  Xc,
  Qc,
  ka,
  Yu = nt({}, Vs, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: th,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget
    },
    movementX: function (e) {
      return 'movementX' in e
        ? e.movementX
        : (e !== ka &&
            (ka && e.type === 'mousemove'
              ? ((Xc = e.screenX - ka.screenX), (Qc = e.screenY - ka.screenY))
              : (Qc = Xc = 0),
            (ka = e)),
          Xc)
    },
    movementY: function (e) {
      return 'movementY' in e ? e.movementY : Qc
    },
  }),
  Tm = Tn(Yu),
  wx = nt({}, Yu, { dataTransfer: 0 }),
  bx = Tn(wx),
  xx = nt({}, Vs, { relatedTarget: 0 }),
  Yc = Tn(xx),
  Ex = nt({}, la, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Px = Tn(Ex),
  kx = nt({}, la, {
    clipboardData: function (e) {
      return 'clipboardData' in e ? e.clipboardData : window.clipboardData
    },
  }),
  Tx = Tn(kx),
  Ox = nt({}, la, { data: 0 }),
  Om = Tn(Ox),
  Rx = {
    Esc: 'Escape',
    Spacebar: ' ',
    Left: 'ArrowLeft',
    Up: 'ArrowUp',
    Right: 'ArrowRight',
    Down: 'ArrowDown',
    Del: 'Delete',
    Win: 'OS',
    Menu: 'ContextMenu',
    Apps: 'ContextMenu',
    Scroll: 'ScrollLock',
    MozPrintableKey: 'Unidentified',
  },
  Ix = {
    8: 'Backspace',
    9: 'Tab',
    12: 'Clear',
    13: 'Enter',
    16: 'Shift',
    17: 'Control',
    18: 'Alt',
    19: 'Pause',
    20: 'CapsLock',
    27: 'Escape',
    32: ' ',
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
    144: 'NumLock',
    145: 'ScrollLock',
    224: 'Meta',
  },
  $x = { Alt: 'altKey', Control: 'ctrlKey', Meta: 'metaKey', Shift: 'shiftKey' }
function Mx(e) {
  var t = this.nativeEvent
  return t.getModifierState ? t.getModifierState(e) : (e = $x[e]) ? !!t[e] : !1
}
function th() {
  return Mx
}
var Nx = nt({}, Vs, {
    key: function (e) {
      if (e.key) {
        var t = Rx[e.key] || e.key
        if (t !== 'Unidentified') return t
      }
      return e.type === 'keypress'
        ? ((e = Vl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
        : e.type === 'keydown' || e.type === 'keyup'
          ? Ix[e.keyCode] || 'Unidentified'
          : ''
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: th,
    charCode: function (e) {
      return e.type === 'keypress' ? Vl(e) : 0
    },
    keyCode: function (e) {
      return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
    },
    which: function (e) {
      return e.type === 'keypress'
        ? Vl(e)
        : e.type === 'keydown' || e.type === 'keyup'
          ? e.keyCode
          : 0
    },
  }),
  _x = Tn(Nx),
  Lx = nt({}, Yu, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Rm = Tn(Lx),
  Ax = nt({}, Vs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: th,
  }),
  Fx = Tn(Ax),
  jx = nt({}, la, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  zx = Tn(jx),
  Dx = nt({}, Yu, {
    deltaX: function (e) {
      return 'deltaX' in e ? e.deltaX : 'wheelDeltaX' in e ? -e.wheelDeltaX : 0
    },
    deltaY: function (e) {
      return 'deltaY' in e
        ? e.deltaY
        : 'wheelDeltaY' in e
          ? -e.wheelDeltaY
          : 'wheelDelta' in e
            ? -e.wheelDelta
            : 0
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  Hx = Tn(Dx),
  Vx = [9, 13, 27, 32],
  nh = Lr && 'CompositionEvent' in window,
  Ua = null
Lr && 'documentMode' in document && (Ua = document.documentMode)
var Bx = Lr && 'TextEvent' in window && !Ua,
  Ry = Lr && (!nh || (Ua && 8 < Ua && 11 >= Ua)),
  Im = ' ',
  $m = !1
function Iy(e, t) {
  switch (e) {
    case 'keyup':
      return Vx.indexOf(t.keyCode) !== -1
    case 'keydown':
      return t.keyCode !== 229
    case 'keypress':
    case 'mousedown':
    case 'focusout':
      return !0
    default:
      return !1
  }
}
function $y(e) {
  return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var Oo = !1
function Ux(e, t) {
  switch (e) {
    case 'compositionend':
      return $y(t)
    case 'keypress':
      return t.which !== 32 ? null : (($m = !0), Im)
    case 'textInput':
      return (e = t.data), e === Im && $m ? null : e
    default:
      return null
  }
}
function Wx(e, t) {
  if (Oo)
    return e === 'compositionend' || (!nh && Iy(e, t))
      ? ((e = Oy()), (Hl = Jp = ei = null), (Oo = !1), e)
      : null
  switch (e) {
    case 'paste':
      return null
    case 'keypress':
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char
        if (t.which) return String.fromCharCode(t.which)
      }
      return null
    case 'compositionend':
      return Ry && t.locale !== 'ko' ? null : t.data
    default:
      return null
  }
}
var Kx = {
  color: !0,
  date: !0,
  datetime: !0,
  'datetime-local': !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
}
function Mm(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return t === 'input' ? !!Kx[e.type] : t === 'textarea'
}
function My(e, t, n, r) {
  uy(r),
    (t = pu(t, 'onChange')),
    0 < t.length &&
      ((n = new eh('onChange', 'change', null, n, r)),
      e.push({ event: n, listeners: t }))
}
var Wa = null,
  fs = null
function qx(e) {
  By(e, 0)
}
function Zu(e) {
  var t = $o(e)
  if (ny(t)) return e
}
function Gx(e, t) {
  if (e === 'change') return t
}
var Ny = !1
if (Lr) {
  var Zc
  if (Lr) {
    var Jc = 'oninput' in document
    if (!Jc) {
      var Nm = document.createElement('div')
      Nm.setAttribute('oninput', 'return;'),
        (Jc = typeof Nm.oninput == 'function')
    }
    Zc = Jc
  } else Zc = !1
  Ny = Zc && (!document.documentMode || 9 < document.documentMode)
}
function _m() {
  Wa && (Wa.detachEvent('onpropertychange', _y), (fs = Wa = null))
}
function _y(e) {
  if (e.propertyName === 'value' && Zu(fs)) {
    var t = []
    My(t, fs, e, Gp(e)), py(qx, t)
  }
}
function Xx(e, t, n) {
  e === 'focusin'
    ? (_m(), (Wa = t), (fs = n), Wa.attachEvent('onpropertychange', _y))
    : e === 'focusout' && _m()
}
function Qx(e) {
  if (e === 'selectionchange' || e === 'keyup' || e === 'keydown') return Zu(fs)
}
function Yx(e, t) {
  if (e === 'click') return Zu(t)
}
function Zx(e, t) {
  if (e === 'input' || e === 'change') return Zu(t)
}
function Jx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var or = typeof Object.is == 'function' ? Object.is : Jx
function ds(e, t) {
  if (or(e, t)) return !0
  if (typeof e != 'object' || e === null || typeof t != 'object' || t === null)
    return !1
  var n = Object.keys(e),
    r = Object.keys(t)
  if (n.length !== r.length) return !1
  for (r = 0; r < n.length; r++) {
    var i = n[r]
    if (!Hf.call(t, i) || !or(e[i], t[i])) return !1
  }
  return !0
}
function Lm(e) {
  for (; e && e.firstChild; ) e = e.firstChild
  return e
}
function Am(e, t) {
  var n = Lm(e)
  e = 0
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e }
      e = r
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling
          break e
        }
        n = n.parentNode
      }
      n = void 0
    }
    n = Lm(n)
  }
}
function Ly(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
          ? Ly(e, t.parentNode)
          : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
              ? !!(e.compareDocumentPosition(t) & 16)
              : !1
    : !1
}
function Ay() {
  for (var e = window, t = au(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == 'string'
    } catch {
      n = !1
    }
    if (n) e = t.contentWindow
    else break
    t = au(e.document)
  }
  return t
}
function rh(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase()
  return (
    t &&
    ((t === 'input' &&
      (e.type === 'text' ||
        e.type === 'search' ||
        e.type === 'tel' ||
        e.type === 'url' ||
        e.type === 'password')) ||
      t === 'textarea' ||
      e.contentEditable === 'true')
  )
}
function e2(e) {
  var t = Ay(),
    n = e.focusedElem,
    r = e.selectionRange
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    Ly(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && rh(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        'selectionStart' in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length))
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection()
        var i = n.textContent.length,
          o = Math.min(r.start, i)
        ;(r = r.end === void 0 ? o : Math.min(r.end, i)),
          !e.extend && o > r && ((i = r), (r = o), (o = i)),
          (i = Am(n, o))
        var a = Am(n, r)
        i &&
          a &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== a.node ||
            e.focusOffset !== a.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          o > r
            ? (e.addRange(t), e.extend(a.node, a.offset))
            : (t.setEnd(a.node, a.offset), e.addRange(t)))
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
    for (typeof n.focus == 'function' && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top)
  }
}
var t2 = Lr && 'documentMode' in document && 11 >= document.documentMode,
  Ro = null,
  ad = null,
  Ka = null,
  sd = !1
function Fm(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
  sd ||
    Ro == null ||
    Ro !== au(r) ||
    ((r = Ro),
    'selectionStart' in r && rh(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Ka && ds(Ka, r)) ||
      ((Ka = r),
      (r = pu(ad, 'onSelect')),
      0 < r.length &&
        ((t = new eh('onSelect', 'select', null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Ro))))
}
function hl(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit' + e] = 'webkit' + t),
    (n['Moz' + e] = 'moz' + t),
    n
  )
}
var Io = {
    animationend: hl('Animation', 'AnimationEnd'),
    animationiteration: hl('Animation', 'AnimationIteration'),
    animationstart: hl('Animation', 'AnimationStart'),
    transitionend: hl('Transition', 'TransitionEnd'),
  },
  ef = {},
  Fy = {}
Lr &&
  ((Fy = document.createElement('div').style),
  'AnimationEvent' in window ||
    (delete Io.animationend.animation,
    delete Io.animationiteration.animation,
    delete Io.animationstart.animation),
  'TransitionEvent' in window || delete Io.transitionend.transition)
function Ju(e) {
  if (ef[e]) return ef[e]
  if (!Io[e]) return e
  var t = Io[e],
    n
  for (n in t) if (t.hasOwnProperty(n) && n in Fy) return (ef[e] = t[n])
  return e
}
var jy = Ju('animationend'),
  zy = Ju('animationiteration'),
  Dy = Ju('animationstart'),
  Hy = Ju('transitionend'),
  Vy = new Map(),
  jm =
    'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
      ' ',
    )
function yi(e, t) {
  Vy.set(e, t), eo(t, [e])
}
for (var tf = 0; tf < jm.length; tf++) {
  var nf = jm[tf],
    n2 = nf.toLowerCase(),
    r2 = nf[0].toUpperCase() + nf.slice(1)
  yi(n2, 'on' + r2)
}
yi(jy, 'onAnimationEnd')
yi(zy, 'onAnimationIteration')
yi(Dy, 'onAnimationStart')
yi('dblclick', 'onDoubleClick')
yi('focusin', 'onFocus')
yi('focusout', 'onBlur')
yi(Hy, 'onTransitionEnd')
Xo('onMouseEnter', ['mouseout', 'mouseover'])
Xo('onMouseLeave', ['mouseout', 'mouseover'])
Xo('onPointerEnter', ['pointerout', 'pointerover'])
Xo('onPointerLeave', ['pointerout', 'pointerover'])
eo(
  'onChange',
  'change click focusin focusout input keydown keyup selectionchange'.split(
    ' ',
  ),
)
eo(
  'onSelect',
  'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
    ' ',
  ),
)
eo('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
eo(
  'onCompositionEnd',
  'compositionend focusout keydown keypress keyup mousedown'.split(' '),
)
eo(
  'onCompositionStart',
  'compositionstart focusout keydown keypress keyup mousedown'.split(' '),
)
eo(
  'onCompositionUpdate',
  'compositionupdate focusout keydown keypress keyup mousedown'.split(' '),
)
var za =
    'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
      ' ',
    ),
  i2 = new Set('cancel close invalid load scroll toggle'.split(' ').concat(za))
function zm(e, t, n) {
  var r = e.type || 'unknown-event'
  ;(e.currentTarget = n), nx(r, t, void 0, e), (e.currentTarget = null)
}
function By(e, t) {
  t = (t & 4) !== 0
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event
    r = r.listeners
    e: {
      var o = void 0
      if (t)
        for (var a = r.length - 1; 0 <= a; a--) {
          var s = r[a],
            l = s.instance,
            u = s.currentTarget
          if (((s = s.listener), l !== o && i.isPropagationStopped())) break e
          zm(i, s, u), (o = l)
        }
      else
        for (a = 0; a < r.length; a++) {
          if (
            ((s = r[a]),
            (l = s.instance),
            (u = s.currentTarget),
            (s = s.listener),
            l !== o && i.isPropagationStopped())
          )
            break e
          zm(i, s, u), (o = l)
        }
    }
  }
  if (lu) throw ((e = nd), (lu = !1), (nd = null), e)
}
function Ue(e, t) {
  var n = t[dd]
  n === void 0 && (n = t[dd] = new Set())
  var r = e + '__bubble'
  n.has(r) || (Uy(t, e, 2, !1), n.add(r))
}
function rf(e, t, n) {
  var r = 0
  t && (r |= 4), Uy(n, e, r, t)
}
var ml = '_reactListening' + Math.random().toString(36).slice(2)
function ps(e) {
  if (!e[ml]) {
    ;(e[ml] = !0),
      Y0.forEach(function (n) {
        n !== 'selectionchange' && (i2.has(n) || rf(n, !1, e), rf(n, !0, e))
      })
    var t = e.nodeType === 9 ? e : e.ownerDocument
    t === null || t[ml] || ((t[ml] = !0), rf('selectionchange', !1, t))
  }
}
function Uy(e, t, n, r) {
  switch (Ty(t)) {
    case 1:
      var i = yx
      break
    case 4:
      i = Sx
      break
    default:
      i = Zp
  }
  ;(n = i.bind(null, t, n, e)),
    (i = void 0),
    !td ||
      (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
        ? e.addEventListener(t, n, { passive: i })
        : e.addEventListener(t, n, !1)
}
function of(e, t, n, r, i) {
  var o = r
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return
      var a = r.tag
      if (a === 3 || a === 4) {
        var s = r.stateNode.containerInfo
        if (s === i || (s.nodeType === 8 && s.parentNode === i)) break
        if (a === 4)
          for (a = r.return; a !== null; ) {
            var l = a.tag
            if (
              (l === 3 || l === 4) &&
              ((l = a.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return
            a = a.return
          }
        for (; s !== null; ) {
          if (((a = Li(s)), a === null)) return
          if (((l = a.tag), l === 5 || l === 6)) {
            r = o = a
            continue e
          }
          s = s.parentNode
        }
      }
      r = r.return
    }
  py(function () {
    var u = o,
      c = Gp(n),
      f = []
    e: {
      var d = Vy.get(e)
      if (d !== void 0) {
        var g = eh,
          y = e
        switch (e) {
          case 'keypress':
            if (Vl(n) === 0) break e
          case 'keydown':
          case 'keyup':
            g = _x
            break
          case 'focusin':
            ;(y = 'focus'), (g = Yc)
            break
          case 'focusout':
            ;(y = 'blur'), (g = Yc)
            break
          case 'beforeblur':
          case 'afterblur':
            g = Yc
            break
          case 'click':
            if (n.button === 2) break e
          case 'auxclick':
          case 'dblclick':
          case 'mousedown':
          case 'mousemove':
          case 'mouseup':
          case 'mouseout':
          case 'mouseover':
          case 'contextmenu':
            g = Tm
            break
          case 'drag':
          case 'dragend':
          case 'dragenter':
          case 'dragexit':
          case 'dragleave':
          case 'dragover':
          case 'dragstart':
          case 'drop':
            g = bx
            break
          case 'touchcancel':
          case 'touchend':
          case 'touchmove':
          case 'touchstart':
            g = Fx
            break
          case jy:
          case zy:
          case Dy:
            g = Px
            break
          case Hy:
            g = zx
            break
          case 'scroll':
            g = Cx
            break
          case 'wheel':
            g = Hx
            break
          case 'copy':
          case 'cut':
          case 'paste':
            g = Tx
            break
          case 'gotpointercapture':
          case 'lostpointercapture':
          case 'pointercancel':
          case 'pointerdown':
          case 'pointermove':
          case 'pointerout':
          case 'pointerover':
          case 'pointerup':
            g = Rm
        }
        var S = (t & 4) !== 0,
          C = !S && e === 'scroll',
          v = S ? (d !== null ? d + 'Capture' : null) : d
        S = []
        for (var h = u, m; h !== null; ) {
          m = h
          var w = m.stateNode
          if (
            (m.tag === 5 &&
              w !== null &&
              ((m = w),
              v !== null && ((w = ss(h, v)), w != null && S.push(hs(h, w, m)))),
            C)
          )
            break
          h = h.return
        }
        0 < S.length &&
          ((d = new g(d, y, null, n, c)), f.push({ event: d, listeners: S }))
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === 'mouseover' || e === 'pointerover'),
          (g = e === 'mouseout' || e === 'pointerout'),
          d &&
            n !== Jf &&
            (y = n.relatedTarget || n.fromElement) &&
            (Li(y) || y[Ar]))
        )
          break e
        if (
          (g || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
                ? d.defaultView || d.parentWindow
                : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = u),
              (y = y ? Li(y) : null),
              y !== null &&
                ((C = to(y)), y !== C || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = u)),
          g !== y)
        ) {
          if (
            ((S = Tm),
            (w = 'onMouseLeave'),
            (v = 'onMouseEnter'),
            (h = 'mouse'),
            (e === 'pointerout' || e === 'pointerover') &&
              ((S = Rm),
              (w = 'onPointerLeave'),
              (v = 'onPointerEnter'),
              (h = 'pointer')),
            (C = g == null ? d : $o(g)),
            (m = y == null ? d : $o(y)),
            (d = new S(w, h + 'leave', g, n, c)),
            (d.target = C),
            (d.relatedTarget = m),
            (w = null),
            Li(c) === u &&
              ((S = new S(v, h + 'enter', y, n, c)),
              (S.target = m),
              (S.relatedTarget = C),
              (w = S)),
            (C = w),
            g && y)
          )
            t: {
              for (S = g, v = y, h = 0, m = S; m; m = mo(m)) h++
              for (m = 0, w = v; w; w = mo(w)) m++
              for (; 0 < h - m; ) (S = mo(S)), h--
              for (; 0 < m - h; ) (v = mo(v)), m--
              for (; h--; ) {
                if (S === v || (v !== null && S === v.alternate)) break t
                ;(S = mo(S)), (v = mo(v))
              }
              S = null
            }
          else S = null
          g !== null && Dm(f, d, g, S, !1),
            y !== null && C !== null && Dm(f, C, y, S, !0)
        }
      }
      e: {
        if (
          ((d = u ? $o(u) : window),
          (g = d.nodeName && d.nodeName.toLowerCase()),
          g === 'select' || (g === 'input' && d.type === 'file'))
        )
          var b = Gx
        else if (Mm(d))
          if (Ny) b = Zx
          else {
            b = Qx
            var x = Xx
          }
        else
          (g = d.nodeName) &&
            g.toLowerCase() === 'input' &&
            (d.type === 'checkbox' || d.type === 'radio') &&
            (b = Yx)
        if (b && (b = b(e, u))) {
          My(f, b, n, c)
          break e
        }
        x && x(e, d, u),
          e === 'focusout' &&
            (x = d._wrapperState) &&
            x.controlled &&
            d.type === 'number' &&
            Gf(d, 'number', d.value)
      }
      switch (((x = u ? $o(u) : window), e)) {
        case 'focusin':
          ;(Mm(x) || x.contentEditable === 'true') &&
            ((Ro = x), (ad = u), (Ka = null))
          break
        case 'focusout':
          Ka = ad = Ro = null
          break
        case 'mousedown':
          sd = !0
          break
        case 'contextmenu':
        case 'mouseup':
        case 'dragend':
          ;(sd = !1), Fm(f, n, c)
          break
        case 'selectionchange':
          if (t2) break
        case 'keydown':
        case 'keyup':
          Fm(f, n, c)
      }
      var E
      if (nh)
        e: {
          switch (e) {
            case 'compositionstart':
              var k = 'onCompositionStart'
              break e
            case 'compositionend':
              k = 'onCompositionEnd'
              break e
            case 'compositionupdate':
              k = 'onCompositionUpdate'
              break e
          }
          k = void 0
        }
      else
        Oo
          ? Iy(e, n) && (k = 'onCompositionEnd')
          : e === 'keydown' && n.keyCode === 229 && (k = 'onCompositionStart')
      k &&
        (Ry &&
          n.locale !== 'ko' &&
          (Oo || k !== 'onCompositionStart'
            ? k === 'onCompositionEnd' && Oo && (E = Oy())
            : ((ei = c),
              (Jp = 'value' in ei ? ei.value : ei.textContent),
              (Oo = !0))),
        (x = pu(u, k)),
        0 < x.length &&
          ((k = new Om(k, e, null, n, c)),
          f.push({ event: k, listeners: x }),
          E ? (k.data = E) : ((E = $y(n)), E !== null && (k.data = E)))),
        (E = Bx ? Ux(e, n) : Wx(e, n)) &&
          ((u = pu(u, 'onBeforeInput')),
          0 < u.length &&
            ((c = new Om('onBeforeInput', 'beforeinput', null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = E)))
    }
    By(f, t)
  })
}
function hs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n }
}
function pu(e, t) {
  for (var n = t + 'Capture', r = []; e !== null; ) {
    var i = e,
      o = i.stateNode
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = ss(e, n)),
      o != null && r.unshift(hs(e, o, i)),
      (o = ss(e, t)),
      o != null && r.push(hs(e, o, i))),
      (e = e.return)
  }
  return r
}
function mo(e) {
  if (e === null) return null
  do e = e.return
  while (e && e.tag !== 5)
  return e || null
}
function Dm(e, t, n, r, i) {
  for (var o = t._reactName, a = []; n !== null && n !== r; ) {
    var s = n,
      l = s.alternate,
      u = s.stateNode
    if (l !== null && l === r) break
    s.tag === 5 &&
      u !== null &&
      ((s = u),
      i
        ? ((l = ss(n, o)), l != null && a.unshift(hs(n, l, s)))
        : i || ((l = ss(n, o)), l != null && a.push(hs(n, l, s)))),
      (n = n.return)
  }
  a.length !== 0 && e.push({ event: t, listeners: a })
}
var o2 = /\r\n?/g,
  a2 = /\u0000|\uFFFD/g
function Hm(e) {
  return (typeof e == 'string' ? e : '' + e)
    .replace(
      o2,
      `
`,
    )
    .replace(a2, '')
}
function gl(e, t, n) {
  if (((t = Hm(t)), Hm(e) !== t && n)) throw Error(U(425))
}
function hu() {}
var ld = null,
  ud = null
function cd(e, t) {
  return (
    e === 'textarea' ||
    e === 'noscript' ||
    typeof t.children == 'string' ||
    typeof t.children == 'number' ||
    (typeof t.dangerouslySetInnerHTML == 'object' &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  )
}
var fd = typeof setTimeout == 'function' ? setTimeout : void 0,
  s2 = typeof clearTimeout == 'function' ? clearTimeout : void 0,
  Vm = typeof Promise == 'function' ? Promise : void 0,
  l2 =
    typeof queueMicrotask == 'function'
      ? queueMicrotask
      : typeof Vm < 'u'
        ? function (e) {
            return Vm.resolve(null).then(e).catch(u2)
          }
        : fd
function u2(e) {
  setTimeout(function () {
    throw e
  })
}
function af(e, t) {
  var n = t,
    r = 0
  do {
    var i = n.nextSibling
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === '/$')) {
        if (r === 0) {
          e.removeChild(i), cs(t)
          return
        }
        r--
      } else (n !== '$' && n !== '$?' && n !== '$!') || r++
    n = i
  } while (n)
  cs(t)
}
function ci(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType
    if (t === 1 || t === 3) break
    if (t === 8) {
      if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
      if (t === '/$') return null
    }
  }
  return e
}
function Bm(e) {
  e = e.previousSibling
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data
      if (n === '$' || n === '$!' || n === '$?') {
        if (t === 0) return e
        t--
      } else n === '/$' && t++
    }
    e = e.previousSibling
  }
  return null
}
var ua = Math.random().toString(36).slice(2),
  vr = '__reactFiber$' + ua,
  ms = '__reactProps$' + ua,
  Ar = '__reactContainer$' + ua,
  dd = '__reactEvents$' + ua,
  c2 = '__reactListeners$' + ua,
  f2 = '__reactHandles$' + ua
function Li(e) {
  var t = e[vr]
  if (t) return t
  for (var n = e.parentNode; n; ) {
    if ((t = n[Ar] || n[vr])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Bm(e); e !== null; ) {
          if ((n = e[vr])) return n
          e = Bm(e)
        }
      return t
    }
    ;(e = n), (n = e.parentNode)
  }
  return null
}
function Bs(e) {
  return (
    (e = e[vr] || e[Ar]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  )
}
function $o(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode
  throw Error(U(33))
}
function ec(e) {
  return e[ms] || null
}
var pd = [],
  Mo = -1
function Si(e) {
  return { current: e }
}
function We(e) {
  0 > Mo || ((e.current = pd[Mo]), (pd[Mo] = null), Mo--)
}
function je(e, t) {
  Mo++, (pd[Mo] = e.current), (e.current = t)
}
var vi = {},
  Qt = Si(vi),
  un = Si(!1),
  Wi = vi
function Qo(e, t) {
  var n = e.type.contextTypes
  if (!n) return vi
  var r = e.stateNode
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext
  var i = {},
    o
  for (o in n) i[o] = t[o]
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  )
}
function cn(e) {
  return (e = e.childContextTypes), e != null
}
function mu() {
  We(un), We(Qt)
}
function Um(e, t, n) {
  if (Qt.current !== vi) throw Error(U(168))
  je(Qt, t), je(un, n)
}
function Wy(e, t, n) {
  var r = e.stateNode
  if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
    return n
  r = r.getChildContext()
  for (var i in r) if (!(i in t)) throw Error(U(108, Xb(e) || 'Unknown', i))
  return nt({}, n, r)
}
function gu(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || vi),
    (Wi = Qt.current),
    je(Qt, e),
    je(un, un.current),
    !0
  )
}
function Wm(e, t, n) {
  var r = e.stateNode
  if (!r) throw Error(U(169))
  n
    ? ((e = Wy(e, t, Wi)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      We(un),
      We(Qt),
      je(Qt, e))
    : We(un),
    je(un, n)
}
var Or = null,
  tc = !1,
  sf = !1
function Ky(e) {
  Or === null ? (Or = [e]) : Or.push(e)
}
function d2(e) {
  ;(tc = !0), Ky(e)
}
function Ci() {
  if (!sf && Or !== null) {
    sf = !0
    var e = 0,
      t = Ie
    try {
      var n = Or
      for (Ie = 1; e < n.length; e++) {
        var r = n[e]
        do r = r(!0)
        while (r !== null)
      }
      ;(Or = null), (tc = !1)
    } catch (i) {
      throw (Or !== null && (Or = Or.slice(e + 1)), vy(Xp, Ci), i)
    } finally {
      ;(Ie = t), (sf = !1)
    }
  }
  return null
}
var No = [],
  _o = 0,
  vu = null,
  yu = 0,
  _n = [],
  Ln = 0,
  Ki = null,
  Rr = 1,
  Ir = ''
function Mi(e, t) {
  ;(No[_o++] = yu), (No[_o++] = vu), (vu = e), (yu = t)
}
function qy(e, t, n) {
  ;(_n[Ln++] = Rr), (_n[Ln++] = Ir), (_n[Ln++] = Ki), (Ki = e)
  var r = Rr
  e = Ir
  var i = 32 - tr(r) - 1
  ;(r &= ~(1 << i)), (n += 1)
  var o = 32 - tr(t) + i
  if (30 < o) {
    var a = i - (i % 5)
    ;(o = (r & ((1 << a) - 1)).toString(32)),
      (r >>= a),
      (i -= a),
      (Rr = (1 << (32 - tr(t) + i)) | (n << i) | r),
      (Ir = o + e)
  } else (Rr = (1 << o) | (n << i) | r), (Ir = e)
}
function ih(e) {
  e.return !== null && (Mi(e, 1), qy(e, 1, 0))
}
function oh(e) {
  for (; e === vu; )
    (vu = No[--_o]), (No[_o] = null), (yu = No[--_o]), (No[_o] = null)
  for (; e === Ki; )
    (Ki = _n[--Ln]),
      (_n[Ln] = null),
      (Ir = _n[--Ln]),
      (_n[Ln] = null),
      (Rr = _n[--Ln]),
      (_n[Ln] = null)
}
var xn = null,
  wn = null,
  Ye = !1,
  Jn = null
function Gy(e, t) {
  var n = An(5, null, null, 0)
  ;(n.elementType = 'DELETED'),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Km(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (xn = e), (wn = ci(t.firstChild)), !0)
          : !1
      )
    case 6:
      return (
        (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (xn = e), (wn = null), !0) : !1
      )
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Ki !== null ? { id: Rr, overflow: Ir } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = An(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (xn = e),
            (wn = null),
            !0)
          : !1
      )
    default:
      return !1
  }
}
function hd(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function md(e) {
  if (Ye) {
    var t = wn
    if (t) {
      var n = t
      if (!Km(e, t)) {
        if (hd(e)) throw Error(U(418))
        t = ci(n.nextSibling)
        var r = xn
        t && Km(e, t)
          ? Gy(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (Ye = !1), (xn = e))
      }
    } else {
      if (hd(e)) throw Error(U(418))
      ;(e.flags = (e.flags & -4097) | 2), (Ye = !1), (xn = e)
    }
  }
}
function qm(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return
  xn = e
}
function vl(e) {
  if (e !== xn) return !1
  if (!Ye) return qm(e), (Ye = !0), !1
  var t
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== 'head' && t !== 'body' && !cd(e.type, e.memoizedProps))),
    t && (t = wn))
  ) {
    if (hd(e)) throw (Xy(), Error(U(418)))
    for (; t; ) Gy(e, t), (t = ci(t.nextSibling))
  }
  if ((qm(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(U(317))
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data
          if (n === '/$') {
            if (t === 0) {
              wn = ci(e.nextSibling)
              break e
            }
            t--
          } else (n !== '$' && n !== '$!' && n !== '$?') || t++
        }
        e = e.nextSibling
      }
      wn = null
    }
  } else wn = xn ? ci(e.stateNode.nextSibling) : null
  return !0
}
function Xy() {
  for (var e = wn; e; ) e = ci(e.nextSibling)
}
function Yo() {
  ;(wn = xn = null), (Ye = !1)
}
function ah(e) {
  Jn === null ? (Jn = [e]) : Jn.push(e)
}
var p2 = Dr.ReactCurrentBatchConfig
function Ta(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != 'function' && typeof e != 'object')
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(U(309))
        var r = n.stateNode
      }
      if (!r) throw Error(U(147, e))
      var i = r,
        o = '' + e
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == 'function' &&
        t.ref._stringRef === o
        ? t.ref
        : ((t = function (a) {
            var s = i.refs
            a === null ? delete s[o] : (s[o] = a)
          }),
          (t._stringRef = o),
          t)
    }
    if (typeof e != 'string') throw Error(U(284))
    if (!n._owner) throw Error(U(290, e))
  }
  return e
}
function yl(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      U(
        31,
        e === '[object Object]'
          ? 'object with keys {' + Object.keys(t).join(', ') + '}'
          : e,
      ),
    ))
  )
}
function Gm(e) {
  var t = e._init
  return t(e._payload)
}
function Qy(e) {
  function t(v, h) {
    if (e) {
      var m = v.deletions
      m === null ? ((v.deletions = [h]), (v.flags |= 16)) : m.push(h)
    }
  }
  function n(v, h) {
    if (!e) return null
    for (; h !== null; ) t(v, h), (h = h.sibling)
    return null
  }
  function r(v, h) {
    for (v = new Map(); h !== null; )
      h.key !== null ? v.set(h.key, h) : v.set(h.index, h), (h = h.sibling)
    return v
  }
  function i(v, h) {
    return (v = hi(v, h)), (v.index = 0), (v.sibling = null), v
  }
  function o(v, h, m) {
    return (
      (v.index = m),
      e
        ? ((m = v.alternate),
          m !== null
            ? ((m = m.index), m < h ? ((v.flags |= 2), h) : m)
            : ((v.flags |= 2), h))
        : ((v.flags |= 1048576), h)
    )
  }
  function a(v) {
    return e && v.alternate === null && (v.flags |= 2), v
  }
  function s(v, h, m, w) {
    return h === null || h.tag !== 6
      ? ((h = hf(m, v.mode, w)), (h.return = v), h)
      : ((h = i(h, m)), (h.return = v), h)
  }
  function l(v, h, m, w) {
    var b = m.type
    return b === To
      ? c(v, h, m.props.children, w, m.key)
      : h !== null &&
          (h.elementType === b ||
            (typeof b == 'object' &&
              b !== null &&
              b.$$typeof === Qr &&
              Gm(b) === h.type))
        ? ((w = i(h, m.props)), (w.ref = Ta(v, h, m)), (w.return = v), w)
        : ((w = Xl(m.type, m.key, m.props, null, v.mode, w)),
          (w.ref = Ta(v, h, m)),
          (w.return = v),
          w)
  }
  function u(v, h, m, w) {
    return h === null ||
      h.tag !== 4 ||
      h.stateNode.containerInfo !== m.containerInfo ||
      h.stateNode.implementation !== m.implementation
      ? ((h = mf(m, v.mode, w)), (h.return = v), h)
      : ((h = i(h, m.children || [])), (h.return = v), h)
  }
  function c(v, h, m, w, b) {
    return h === null || h.tag !== 7
      ? ((h = Vi(m, v.mode, w, b)), (h.return = v), h)
      : ((h = i(h, m)), (h.return = v), h)
  }
  function f(v, h, m) {
    if ((typeof h == 'string' && h !== '') || typeof h == 'number')
      return (h = hf('' + h, v.mode, m)), (h.return = v), h
    if (typeof h == 'object' && h !== null) {
      switch (h.$$typeof) {
        case sl:
          return (
            (m = Xl(h.type, h.key, h.props, null, v.mode, m)),
            (m.ref = Ta(v, null, h)),
            (m.return = v),
            m
          )
        case ko:
          return (h = mf(h, v.mode, m)), (h.return = v), h
        case Qr:
          var w = h._init
          return f(v, w(h._payload), m)
      }
      if (Fa(h) || ba(h)) return (h = Vi(h, v.mode, m, null)), (h.return = v), h
      yl(v, h)
    }
    return null
  }
  function d(v, h, m, w) {
    var b = h !== null ? h.key : null
    if ((typeof m == 'string' && m !== '') || typeof m == 'number')
      return b !== null ? null : s(v, h, '' + m, w)
    if (typeof m == 'object' && m !== null) {
      switch (m.$$typeof) {
        case sl:
          return m.key === b ? l(v, h, m, w) : null
        case ko:
          return m.key === b ? u(v, h, m, w) : null
        case Qr:
          return (b = m._init), d(v, h, b(m._payload), w)
      }
      if (Fa(m) || ba(m)) return b !== null ? null : c(v, h, m, w, null)
      yl(v, m)
    }
    return null
  }
  function g(v, h, m, w, b) {
    if ((typeof w == 'string' && w !== '') || typeof w == 'number')
      return (v = v.get(m) || null), s(h, v, '' + w, b)
    if (typeof w == 'object' && w !== null) {
      switch (w.$$typeof) {
        case sl:
          return (v = v.get(w.key === null ? m : w.key) || null), l(h, v, w, b)
        case ko:
          return (v = v.get(w.key === null ? m : w.key) || null), u(h, v, w, b)
        case Qr:
          var x = w._init
          return g(v, h, m, x(w._payload), b)
      }
      if (Fa(w) || ba(w)) return (v = v.get(m) || null), c(h, v, w, b, null)
      yl(h, w)
    }
    return null
  }
  function y(v, h, m, w) {
    for (
      var b = null, x = null, E = h, k = (h = 0), O = null;
      E !== null && k < m.length;
      k++
    ) {
      E.index > k ? ((O = E), (E = null)) : (O = E.sibling)
      var I = d(v, E, m[k], w)
      if (I === null) {
        E === null && (E = O)
        break
      }
      e && E && I.alternate === null && t(v, E),
        (h = o(I, h, k)),
        x === null ? (b = I) : (x.sibling = I),
        (x = I),
        (E = O)
    }
    if (k === m.length) return n(v, E), Ye && Mi(v, k), b
    if (E === null) {
      for (; k < m.length; k++)
        (E = f(v, m[k], w)),
          E !== null &&
            ((h = o(E, h, k)), x === null ? (b = E) : (x.sibling = E), (x = E))
      return Ye && Mi(v, k), b
    }
    for (E = r(v, E); k < m.length; k++)
      (O = g(E, v, k, m[k], w)),
        O !== null &&
          (e && O.alternate !== null && E.delete(O.key === null ? k : O.key),
          (h = o(O, h, k)),
          x === null ? (b = O) : (x.sibling = O),
          (x = O))
    return (
      e &&
        E.forEach(function (L) {
          return t(v, L)
        }),
      Ye && Mi(v, k),
      b
    )
  }
  function S(v, h, m, w) {
    var b = ba(m)
    if (typeof b != 'function') throw Error(U(150))
    if (((m = b.call(m)), m == null)) throw Error(U(151))
    for (
      var x = (b = null), E = h, k = (h = 0), O = null, I = m.next();
      E !== null && !I.done;
      k++, I = m.next()
    ) {
      E.index > k ? ((O = E), (E = null)) : (O = E.sibling)
      var L = d(v, E, I.value, w)
      if (L === null) {
        E === null && (E = O)
        break
      }
      e && E && L.alternate === null && t(v, E),
        (h = o(L, h, k)),
        x === null ? (b = L) : (x.sibling = L),
        (x = L),
        (E = O)
    }
    if (I.done) return n(v, E), Ye && Mi(v, k), b
    if (E === null) {
      for (; !I.done; k++, I = m.next())
        (I = f(v, I.value, w)),
          I !== null &&
            ((h = o(I, h, k)), x === null ? (b = I) : (x.sibling = I), (x = I))
      return Ye && Mi(v, k), b
    }
    for (E = r(v, E); !I.done; k++, I = m.next())
      (I = g(E, v, k, I.value, w)),
        I !== null &&
          (e && I.alternate !== null && E.delete(I.key === null ? k : I.key),
          (h = o(I, h, k)),
          x === null ? (b = I) : (x.sibling = I),
          (x = I))
    return (
      e &&
        E.forEach(function (z) {
          return t(v, z)
        }),
      Ye && Mi(v, k),
      b
    )
  }
  function C(v, h, m, w) {
    if (
      (typeof m == 'object' &&
        m !== null &&
        m.type === To &&
        m.key === null &&
        (m = m.props.children),
      typeof m == 'object' && m !== null)
    ) {
      switch (m.$$typeof) {
        case sl:
          e: {
            for (var b = m.key, x = h; x !== null; ) {
              if (x.key === b) {
                if (((b = m.type), b === To)) {
                  if (x.tag === 7) {
                    n(v, x.sibling),
                      (h = i(x, m.props.children)),
                      (h.return = v),
                      (v = h)
                    break e
                  }
                } else if (
                  x.elementType === b ||
                  (typeof b == 'object' &&
                    b !== null &&
                    b.$$typeof === Qr &&
                    Gm(b) === x.type)
                ) {
                  n(v, x.sibling),
                    (h = i(x, m.props)),
                    (h.ref = Ta(v, x, m)),
                    (h.return = v),
                    (v = h)
                  break e
                }
                n(v, x)
                break
              } else t(v, x)
              x = x.sibling
            }
            m.type === To
              ? ((h = Vi(m.props.children, v.mode, w, m.key)),
                (h.return = v),
                (v = h))
              : ((w = Xl(m.type, m.key, m.props, null, v.mode, w)),
                (w.ref = Ta(v, h, m)),
                (w.return = v),
                (v = w))
          }
          return a(v)
        case ko:
          e: {
            for (x = m.key; h !== null; ) {
              if (h.key === x)
                if (
                  h.tag === 4 &&
                  h.stateNode.containerInfo === m.containerInfo &&
                  h.stateNode.implementation === m.implementation
                ) {
                  n(v, h.sibling),
                    (h = i(h, m.children || [])),
                    (h.return = v),
                    (v = h)
                  break e
                } else {
                  n(v, h)
                  break
                }
              else t(v, h)
              h = h.sibling
            }
            ;(h = mf(m, v.mode, w)), (h.return = v), (v = h)
          }
          return a(v)
        case Qr:
          return (x = m._init), C(v, h, x(m._payload), w)
      }
      if (Fa(m)) return y(v, h, m, w)
      if (ba(m)) return S(v, h, m, w)
      yl(v, m)
    }
    return (typeof m == 'string' && m !== '') || typeof m == 'number'
      ? ((m = '' + m),
        h !== null && h.tag === 6
          ? (n(v, h.sibling), (h = i(h, m)), (h.return = v), (v = h))
          : (n(v, h), (h = hf(m, v.mode, w)), (h.return = v), (v = h)),
        a(v))
      : n(v, h)
  }
  return C
}
var Zo = Qy(!0),
  Yy = Qy(!1),
  Su = Si(null),
  Cu = null,
  Lo = null,
  sh = null
function lh() {
  sh = Lo = Cu = null
}
function uh(e) {
  var t = Su.current
  We(Su), (e._currentValue = t)
}
function gd(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break
    e = e.return
  }
}
function Ko(e, t) {
  ;(Cu = e),
    (sh = Lo = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ln = !0), (e.firstContext = null))
}
function jn(e) {
  var t = e._currentValue
  if (sh !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Lo === null)) {
      if (Cu === null) throw Error(U(308))
      ;(Lo = e), (Cu.dependencies = { lanes: 0, firstContext: e })
    } else Lo = Lo.next = e
  return t
}
var Ai = null
function ch(e) {
  Ai === null ? (Ai = [e]) : Ai.push(e)
}
function Zy(e, t, n, r) {
  var i = t.interleaved
  return (
    i === null ? ((n.next = n), ch(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    Fr(e, r)
  )
}
function Fr(e, t) {
  e.lanes |= t
  var n = e.alternate
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return)
  return n.tag === 3 ? n.stateNode : null
}
var Yr = !1
function fh(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  }
}
function Jy(e, t) {
  ;(e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      })
}
function $r(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  }
}
function fi(e, t, n) {
  var r = e.updateQueue
  if (r === null) return null
  if (((r = r.shared), Ce & 2)) {
    var i = r.pending
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      Fr(e, n)
    )
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), ch(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    Fr(e, n)
  )
}
function Bl(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Qp(e, n)
  }
}
function Xm(e, t) {
  var n = e.updateQueue,
    r = e.alternate
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      o = null
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var a = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        }
        o === null ? (i = o = a) : (o = o.next = a), (n = n.next)
      } while (n !== null)
      o === null ? (i = o = t) : (o = o.next = t)
    } else i = o = t
    ;(n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n)
    return
  }
  ;(e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t)
}
function wu(e, t, n, r) {
  var i = e.updateQueue
  Yr = !1
  var o = i.firstBaseUpdate,
    a = i.lastBaseUpdate,
    s = i.shared.pending
  if (s !== null) {
    i.shared.pending = null
    var l = s,
      u = l.next
    ;(l.next = null), a === null ? (o = u) : (a.next = u), (a = l)
    var c = e.alternate
    c !== null &&
      ((c = c.updateQueue),
      (s = c.lastBaseUpdate),
      s !== a &&
        (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
        (c.lastBaseUpdate = l)))
  }
  if (o !== null) {
    var f = i.baseState
    ;(a = 0), (c = u = l = null), (s = o)
    do {
      var d = s.lane,
        g = s.eventTime
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: g,
              lane: 0,
              tag: s.tag,
              payload: s.payload,
              callback: s.callback,
              next: null,
            })
        e: {
          var y = e,
            S = s
          switch (((d = t), (g = n), S.tag)) {
            case 1:
              if (((y = S.payload), typeof y == 'function')) {
                f = y.call(g, f, d)
                break e
              }
              f = y
              break e
            case 3:
              y.flags = (y.flags & -65537) | 128
            case 0:
              if (
                ((y = S.payload),
                (d = typeof y == 'function' ? y.call(g, f, d) : y),
                d == null)
              )
                break e
              f = nt({}, f, d)
              break e
            case 2:
              Yr = !0
          }
        }
        s.callback !== null &&
          s.lane !== 0 &&
          ((e.flags |= 64),
          (d = i.effects),
          d === null ? (i.effects = [s]) : d.push(s))
      } else
        (g = {
          eventTime: g,
          lane: d,
          tag: s.tag,
          payload: s.payload,
          callback: s.callback,
          next: null,
        }),
          c === null ? ((u = c = g), (l = f)) : (c = c.next = g),
          (a |= d)
      if (((s = s.next), s === null)) {
        if (((s = i.shared.pending), s === null)) break
        ;(d = s),
          (s = d.next),
          (d.next = null),
          (i.lastBaseUpdate = d),
          (i.shared.pending = null)
      }
    } while (!0)
    if (
      (c === null && (l = f),
      (i.baseState = l),
      (i.firstBaseUpdate = u),
      (i.lastBaseUpdate = c),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t
      do (a |= i.lane), (i = i.next)
      while (i !== t)
    } else o === null && (i.shared.lanes = 0)
    ;(Gi |= a), (e.lanes = a), (e.memoizedState = f)
  }
}
function Qm(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != 'function'))
          throw Error(U(191, i))
        i.call(r)
      }
    }
}
var Us = {},
  wr = Si(Us),
  gs = Si(Us),
  vs = Si(Us)
function Fi(e) {
  if (e === Us) throw Error(U(174))
  return e
}
function dh(e, t) {
  switch ((je(vs, t), je(gs, e), je(wr, Us), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qf(null, '')
      break
    default:
      ;(e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qf(t, e))
  }
  We(wr), je(wr, t)
}
function Jo() {
  We(wr), We(gs), We(vs)
}
function e1(e) {
  Fi(vs.current)
  var t = Fi(wr.current),
    n = Qf(t, e.type)
  t !== n && (je(gs, e), je(wr, n))
}
function ph(e) {
  gs.current === e && (We(wr), We(gs))
}
var et = Si(0)
function bu(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === '$?' || n.data === '$!')
      )
        return t
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t
    } else if (t.child !== null) {
      ;(t.child.return = t), (t = t.child)
      continue
    }
    if (t === e) break
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null
      t = t.return
    }
    ;(t.sibling.return = t.return), (t = t.sibling)
  }
  return null
}
var lf = []
function hh() {
  for (var e = 0; e < lf.length; e++) lf[e]._workInProgressVersionPrimary = null
  lf.length = 0
}
var Ul = Dr.ReactCurrentDispatcher,
  uf = Dr.ReactCurrentBatchConfig,
  qi = 0,
  tt = null,
  St = null,
  Pt = null,
  xu = !1,
  qa = !1,
  ys = 0,
  h2 = 0
function Kt() {
  throw Error(U(321))
}
function mh(e, t) {
  if (t === null) return !1
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!or(e[n], t[n])) return !1
  return !0
}
function gh(e, t, n, r, i, o) {
  if (
    ((qi = o),
    (tt = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Ul.current = e === null || e.memoizedState === null ? y2 : S2),
    (e = n(r, i)),
    qa)
  ) {
    o = 0
    do {
      if (((qa = !1), (ys = 0), 25 <= o)) throw Error(U(301))
      ;(o += 1),
        (Pt = St = null),
        (t.updateQueue = null),
        (Ul.current = C2),
        (e = n(r, i))
    } while (qa)
  }
  if (
    ((Ul.current = Eu),
    (t = St !== null && St.next !== null),
    (qi = 0),
    (Pt = St = tt = null),
    (xu = !1),
    t)
  )
    throw Error(U(300))
  return e
}
function vh() {
  var e = ys !== 0
  return (ys = 0), e
}
function mr() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  }
  return Pt === null ? (tt.memoizedState = Pt = e) : (Pt = Pt.next = e), Pt
}
function zn() {
  if (St === null) {
    var e = tt.alternate
    e = e !== null ? e.memoizedState : null
  } else e = St.next
  var t = Pt === null ? tt.memoizedState : Pt.next
  if (t !== null) (Pt = t), (St = e)
  else {
    if (e === null) throw Error(U(310))
    ;(St = e),
      (e = {
        memoizedState: St.memoizedState,
        baseState: St.baseState,
        baseQueue: St.baseQueue,
        queue: St.queue,
        next: null,
      }),
      Pt === null ? (tt.memoizedState = Pt = e) : (Pt = Pt.next = e)
  }
  return Pt
}
function Ss(e, t) {
  return typeof t == 'function' ? t(e) : t
}
function cf(e) {
  var t = zn(),
    n = t.queue
  if (n === null) throw Error(U(311))
  n.lastRenderedReducer = e
  var r = St,
    i = r.baseQueue,
    o = n.pending
  if (o !== null) {
    if (i !== null) {
      var a = i.next
      ;(i.next = o.next), (o.next = a)
    }
    ;(r.baseQueue = i = o), (n.pending = null)
  }
  if (i !== null) {
    ;(o = i.next), (r = r.baseState)
    var s = (a = null),
      l = null,
      u = o
    do {
      var c = u.lane
      if ((qi & c) === c)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action))
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        }
        l === null ? ((s = l = f), (a = r)) : (l = l.next = f),
          (tt.lanes |= c),
          (Gi |= c)
      }
      u = u.next
    } while (u !== null && u !== o)
    l === null ? (a = r) : (l.next = s),
      or(r, t.memoizedState) || (ln = !0),
      (t.memoizedState = r),
      (t.baseState = a),
      (t.baseQueue = l),
      (n.lastRenderedState = r)
  }
  if (((e = n.interleaved), e !== null)) {
    i = e
    do (o = i.lane), (tt.lanes |= o), (Gi |= o), (i = i.next)
    while (i !== e)
  } else i === null && (n.lanes = 0)
  return [t.memoizedState, n.dispatch]
}
function ff(e) {
  var t = zn(),
    n = t.queue
  if (n === null) throw Error(U(311))
  n.lastRenderedReducer = e
  var r = n.dispatch,
    i = n.pending,
    o = t.memoizedState
  if (i !== null) {
    n.pending = null
    var a = (i = i.next)
    do (o = e(o, a.action)), (a = a.next)
    while (a !== i)
    or(o, t.memoizedState) || (ln = !0),
      (t.memoizedState = o),
      t.baseQueue === null && (t.baseState = o),
      (n.lastRenderedState = o)
  }
  return [o, r]
}
function t1() {}
function n1(e, t) {
  var n = tt,
    r = zn(),
    i = t(),
    o = !or(r.memoizedState, i)
  if (
    (o && ((r.memoizedState = i), (ln = !0)),
    (r = r.queue),
    yh(o1.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || o || (Pt !== null && Pt.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Cs(9, i1.bind(null, n, r, i, t), void 0, null),
      kt === null)
    )
      throw Error(U(349))
    qi & 30 || r1(n, t, i)
  }
  return i
}
function r1(e, t, n) {
  ;(e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = tt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (tt.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function i1(e, t, n, r) {
  ;(t.value = n), (t.getSnapshot = r), a1(t) && s1(e)
}
function o1(e, t, n) {
  return n(function () {
    a1(t) && s1(e)
  })
}
function a1(e) {
  var t = e.getSnapshot
  e = e.value
  try {
    var n = t()
    return !or(e, n)
  } catch {
    return !0
  }
}
function s1(e) {
  var t = Fr(e, 1)
  t !== null && nr(t, e, 1, -1)
}
function Ym(e) {
  var t = mr()
  return (
    typeof e == 'function' && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ss,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = v2.bind(null, tt, e)),
    [t.memoizedState, e]
  )
}
function Cs(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = tt.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (tt.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  )
}
function l1() {
  return zn().memoizedState
}
function Wl(e, t, n, r) {
  var i = mr()
  ;(tt.flags |= e),
    (i.memoizedState = Cs(1 | t, n, void 0, r === void 0 ? null : r))
}
function nc(e, t, n, r) {
  var i = zn()
  r = r === void 0 ? null : r
  var o = void 0
  if (St !== null) {
    var a = St.memoizedState
    if (((o = a.destroy), r !== null && mh(r, a.deps))) {
      i.memoizedState = Cs(t, n, o, r)
      return
    }
  }
  ;(tt.flags |= e), (i.memoizedState = Cs(1 | t, n, o, r))
}
function Zm(e, t) {
  return Wl(8390656, 8, e, t)
}
function yh(e, t) {
  return nc(2048, 8, e, t)
}
function u1(e, t) {
  return nc(4, 2, e, t)
}
function c1(e, t) {
  return nc(4, 4, e, t)
}
function f1(e, t) {
  if (typeof t == 'function')
    return (
      (e = e()),
      t(e),
      function () {
        t(null)
      }
    )
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null
      }
    )
}
function d1(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), nc(4, 4, f1.bind(null, t, e), n)
  )
}
function Sh() {}
function p1(e, t) {
  var n = zn()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && mh(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e)
}
function h1(e, t) {
  var n = zn()
  t = t === void 0 ? null : t
  var r = n.memoizedState
  return r !== null && t !== null && mh(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e)
}
function m1(e, t, n) {
  return qi & 21
    ? (or(n, t) || ((n = Cy()), (tt.lanes |= n), (Gi |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ln = !0)), (e.memoizedState = n))
}
function m2(e, t) {
  var n = Ie
  ;(Ie = n !== 0 && 4 > n ? n : 4), e(!0)
  var r = uf.transition
  uf.transition = {}
  try {
    e(!1), t()
  } finally {
    ;(Ie = n), (uf.transition = r)
  }
}
function g1() {
  return zn().memoizedState
}
function g2(e, t, n) {
  var r = pi(e)
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    v1(e))
  )
    y1(t, n)
  else if (((n = Zy(e, t, n, r)), n !== null)) {
    var i = en()
    nr(n, e, r, i), S1(n, t, r)
  }
}
function v2(e, t, n) {
  var r = pi(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }
  if (v1(e)) y1(t, i)
  else {
    var o = e.alternate
    if (
      e.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = t.lastRenderedReducer), o !== null)
    )
      try {
        var a = t.lastRenderedState,
          s = o(a, n)
        if (((i.hasEagerState = !0), (i.eagerState = s), or(s, a))) {
          var l = t.interleaved
          l === null
            ? ((i.next = i), ch(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i)
          return
        }
      } catch {
      } finally {
      }
    ;(n = Zy(e, t, i, r)),
      n !== null && ((i = en()), nr(n, e, r, i), S1(n, t, r))
  }
}
function v1(e) {
  var t = e.alternate
  return e === tt || (t !== null && t === tt)
}
function y1(e, t) {
  qa = xu = !0
  var n = e.pending
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t)
}
function S1(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes
    ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), Qp(e, n)
  }
}
var Eu = {
    readContext: jn,
    useCallback: Kt,
    useContext: Kt,
    useEffect: Kt,
    useImperativeHandle: Kt,
    useInsertionEffect: Kt,
    useLayoutEffect: Kt,
    useMemo: Kt,
    useReducer: Kt,
    useRef: Kt,
    useState: Kt,
    useDebugValue: Kt,
    useDeferredValue: Kt,
    useTransition: Kt,
    useMutableSource: Kt,
    useSyncExternalStore: Kt,
    useId: Kt,
    unstable_isNewReconciler: !1,
  },
  y2 = {
    readContext: jn,
    useCallback: function (e, t) {
      return (mr().memoizedState = [e, t === void 0 ? null : t]), e
    },
    useContext: jn,
    useEffect: Zm,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Wl(4194308, 4, f1.bind(null, t, e), n)
      )
    },
    useLayoutEffect: function (e, t) {
      return Wl(4194308, 4, e, t)
    },
    useInsertionEffect: function (e, t) {
      return Wl(4, 2, e, t)
    },
    useMemo: function (e, t) {
      var n = mr()
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      )
    },
    useReducer: function (e, t, n) {
      var r = mr()
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = g2.bind(null, tt, e)),
        [r.memoizedState, e]
      )
    },
    useRef: function (e) {
      var t = mr()
      return (e = { current: e }), (t.memoizedState = e)
    },
    useState: Ym,
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      return (mr().memoizedState = e)
    },
    useTransition: function () {
      var e = Ym(!1),
        t = e[0]
      return (e = m2.bind(null, e[1])), (mr().memoizedState = e), [t, e]
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = tt,
        i = mr()
      if (Ye) {
        if (n === void 0) throw Error(U(407))
        n = n()
      } else {
        if (((n = t()), kt === null)) throw Error(U(349))
        qi & 30 || r1(r, t, n)
      }
      i.memoizedState = n
      var o = { value: n, getSnapshot: t }
      return (
        (i.queue = o),
        Zm(o1.bind(null, r, o, e), [e]),
        (r.flags |= 2048),
        Cs(9, i1.bind(null, r, o, n, t), void 0, null),
        n
      )
    },
    useId: function () {
      var e = mr(),
        t = kt.identifierPrefix
      if (Ye) {
        var n = Ir,
          r = Rr
        ;(n = (r & ~(1 << (32 - tr(r) - 1))).toString(32) + n),
          (t = ':' + t + 'R' + n),
          (n = ys++),
          0 < n && (t += 'H' + n.toString(32)),
          (t += ':')
      } else (n = h2++), (t = ':' + t + 'r' + n.toString(32) + ':')
      return (e.memoizedState = t)
    },
    unstable_isNewReconciler: !1,
  },
  S2 = {
    readContext: jn,
    useCallback: p1,
    useContext: jn,
    useEffect: yh,
    useImperativeHandle: d1,
    useInsertionEffect: u1,
    useLayoutEffect: c1,
    useMemo: h1,
    useReducer: cf,
    useRef: l1,
    useState: function () {
      return cf(Ss)
    },
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      var t = zn()
      return m1(t, St.memoizedState, e)
    },
    useTransition: function () {
      var e = cf(Ss)[0],
        t = zn().memoizedState
      return [e, t]
    },
    useMutableSource: t1,
    useSyncExternalStore: n1,
    useId: g1,
    unstable_isNewReconciler: !1,
  },
  C2 = {
    readContext: jn,
    useCallback: p1,
    useContext: jn,
    useEffect: yh,
    useImperativeHandle: d1,
    useInsertionEffect: u1,
    useLayoutEffect: c1,
    useMemo: h1,
    useReducer: ff,
    useRef: l1,
    useState: function () {
      return ff(Ss)
    },
    useDebugValue: Sh,
    useDeferredValue: function (e) {
      var t = zn()
      return St === null ? (t.memoizedState = e) : m1(t, St.memoizedState, e)
    },
    useTransition: function () {
      var e = ff(Ss)[0],
        t = zn().memoizedState
      return [e, t]
    },
    useMutableSource: t1,
    useSyncExternalStore: n1,
    useId: g1,
    unstable_isNewReconciler: !1,
  }
function Xn(e, t) {
  if (e && e.defaultProps) {
    ;(t = nt({}, t)), (e = e.defaultProps)
    for (var n in e) t[n] === void 0 && (t[n] = e[n])
    return t
  }
  return t
}
function vd(e, t, n, r) {
  ;(t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : nt({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n)
}
var rc = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? to(e) === e : !1
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals
    var r = en(),
      i = pi(e),
      o = $r(r, i)
    ;(o.payload = t),
      n != null && (o.callback = n),
      (t = fi(e, o, i)),
      t !== null && (nr(t, e, i, r), Bl(t, e, i))
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals
    var r = en(),
      i = pi(e),
      o = $r(r, i)
    ;(o.tag = 1),
      (o.payload = t),
      n != null && (o.callback = n),
      (t = fi(e, o, i)),
      t !== null && (nr(t, e, i, r), Bl(t, e, i))
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals
    var n = en(),
      r = pi(e),
      i = $r(n, r)
    ;(i.tag = 2),
      t != null && (i.callback = t),
      (t = fi(e, i, r)),
      t !== null && (nr(t, e, r, n), Bl(t, e, r))
  },
}
function Jm(e, t, n, r, i, o, a) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == 'function'
      ? e.shouldComponentUpdate(r, o, a)
      : t.prototype && t.prototype.isPureReactComponent
        ? !ds(n, r) || !ds(i, o)
        : !0
  )
}
function C1(e, t, n) {
  var r = !1,
    i = vi,
    o = t.contextType
  return (
    typeof o == 'object' && o !== null
      ? (o = jn(o))
      : ((i = cn(t) ? Wi : Qt.current),
        (r = t.contextTypes),
        (o = (r = r != null) ? Qo(e, i) : vi)),
    (t = new t(n, o)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = rc),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = o)),
    t
  )
}
function eg(e, t, n, r) {
  ;(e = t.state),
    typeof t.componentWillReceiveProps == 'function' &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && rc.enqueueReplaceState(t, t.state, null)
}
function yd(e, t, n, r) {
  var i = e.stateNode
  ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), fh(e)
  var o = t.contextType
  typeof o == 'object' && o !== null
    ? (i.context = jn(o))
    : ((o = cn(t) ? Wi : Qt.current), (i.context = Qo(e, o))),
    (i.state = e.memoizedState),
    (o = t.getDerivedStateFromProps),
    typeof o == 'function' && (vd(e, t, o, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == 'function' ||
      typeof i.getSnapshotBeforeUpdate == 'function' ||
      (typeof i.UNSAFE_componentWillMount != 'function' &&
        typeof i.componentWillMount != 'function') ||
      ((t = i.state),
      typeof i.componentWillMount == 'function' && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == 'function' &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && rc.enqueueReplaceState(i, i.state, null),
      wu(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function ea(e, t) {
  try {
    var n = '',
      r = t
    do (n += Gb(r)), (r = r.return)
    while (r)
    var i = n
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack
  }
  return { value: e, source: t, stack: i, digest: null }
}
function df(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function Sd(e, t) {
  try {
    console.error(t.value)
  } catch (n) {
    setTimeout(function () {
      throw n
    })
  }
}
var w2 = typeof WeakMap == 'function' ? WeakMap : Map
function w1(e, t, n) {
  ;(n = $r(-1, n)), (n.tag = 3), (n.payload = { element: null })
  var r = t.value
  return (
    (n.callback = function () {
      ku || ((ku = !0), (Rd = r)), Sd(e, t)
    }),
    n
  )
}
function b1(e, t, n) {
  ;(n = $r(-1, n)), (n.tag = 3)
  var r = e.type.getDerivedStateFromError
  if (typeof r == 'function') {
    var i = t.value
    ;(n.payload = function () {
      return r(i)
    }),
      (n.callback = function () {
        Sd(e, t)
      })
  }
  var o = e.stateNode
  return (
    o !== null &&
      typeof o.componentDidCatch == 'function' &&
      (n.callback = function () {
        Sd(e, t),
          typeof r != 'function' &&
            (di === null ? (di = new Set([this])) : di.add(this))
        var a = t.stack
        this.componentDidCatch(t.value, { componentStack: a !== null ? a : '' })
      }),
    n
  )
}
function tg(e, t, n) {
  var r = e.pingCache
  if (r === null) {
    r = e.pingCache = new w2()
    var i = new Set()
    r.set(t, i)
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
  i.has(n) || (i.add(n), (e = L2.bind(null, e, t, n)), t.then(e, e))
}
function ng(e) {
  do {
    var t
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e
    e = e.return
  } while (e !== null)
  return null
}
function rg(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = $r(-1, 1)), (t.tag = 2), fi(n, t, 1))),
          (n.lanes |= 1)),
      e)
}
var b2 = Dr.ReactCurrentOwner,
  ln = !1
function Jt(e, t, n, r) {
  t.child = e === null ? Yy(t, null, n, r) : Zo(t, e.child, n, r)
}
function ig(e, t, n, r, i) {
  n = n.render
  var o = t.ref
  return (
    Ko(t, i),
    (r = gh(e, t, n, r, o, i)),
    (n = vh()),
    e !== null && !ln
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        jr(e, t, i))
      : (Ye && n && ih(t), (t.flags |= 1), Jt(e, t, r, i), t.child)
  )
}
function og(e, t, n, r, i) {
  if (e === null) {
    var o = n.type
    return typeof o == 'function' &&
      !Th(o) &&
      o.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = o), x1(e, t, o, r, i))
      : ((e = Xl(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e))
  }
  if (((o = e.child), !(e.lanes & i))) {
    var a = o.memoizedProps
    if (
      ((n = n.compare), (n = n !== null ? n : ds), n(a, r) && e.ref === t.ref)
    )
      return jr(e, t, i)
  }
  return (
    (t.flags |= 1),
    (e = hi(o, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  )
}
function x1(e, t, n, r, i) {
  if (e !== null) {
    var o = e.memoizedProps
    if (ds(o, r) && e.ref === t.ref)
      if (((ln = !1), (t.pendingProps = r = o), (e.lanes & i) !== 0))
        e.flags & 131072 && (ln = !0)
      else return (t.lanes = e.lanes), jr(e, t, i)
  }
  return Cd(e, t, n, r, i)
}
function E1(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    o = e !== null ? e.memoizedState : null
  if (r.mode === 'hidden')
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        je(Fo, Cn),
        (Cn |= n)
    else {
      if (!(n & 1073741824))
        return (
          (e = o !== null ? o.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          je(Fo, Cn),
          (Cn |= e),
          null
        )
      ;(t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = o !== null ? o.baseLanes : n),
        je(Fo, Cn),
        (Cn |= r)
    }
  else
    o !== null ? ((r = o.baseLanes | n), (t.memoizedState = null)) : (r = n),
      je(Fo, Cn),
      (Cn |= r)
  return Jt(e, t, i, n), t.child
}
function P1(e, t) {
  var n = t.ref
  ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152))
}
function Cd(e, t, n, r, i) {
  var o = cn(n) ? Wi : Qt.current
  return (
    (o = Qo(t, o)),
    Ko(t, i),
    (n = gh(e, t, n, r, o, i)),
    (r = vh()),
    e !== null && !ln
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        jr(e, t, i))
      : (Ye && r && ih(t), (t.flags |= 1), Jt(e, t, n, i), t.child)
  )
}
function ag(e, t, n, r, i) {
  if (cn(n)) {
    var o = !0
    gu(t)
  } else o = !1
  if ((Ko(t, i), t.stateNode === null))
    Kl(e, t), C1(t, n, r), yd(t, n, r, i), (r = !0)
  else if (e === null) {
    var a = t.stateNode,
      s = t.memoizedProps
    a.props = s
    var l = a.context,
      u = n.contextType
    typeof u == 'object' && u !== null
      ? (u = jn(u))
      : ((u = cn(n) ? Wi : Qt.current), (u = Qo(t, u)))
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == 'function' || typeof a.getSnapshotBeforeUpdate == 'function'
    f ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== r || l !== u) && eg(t, a, r, u)),
      (Yr = !1)
    var d = t.memoizedState
    ;(a.state = d),
      wu(t, r, a, i),
      (l = t.memoizedState),
      s !== r || d !== l || un.current || Yr
        ? (typeof c == 'function' && (vd(t, n, c, r), (l = t.memoizedState)),
          (s = Yr || Jm(t, n, s, r, d, l, u))
            ? (f ||
                (typeof a.UNSAFE_componentWillMount != 'function' &&
                  typeof a.componentWillMount != 'function') ||
                (typeof a.componentWillMount == 'function' &&
                  a.componentWillMount(),
                typeof a.UNSAFE_componentWillMount == 'function' &&
                  a.UNSAFE_componentWillMount()),
              typeof a.componentDidMount == 'function' && (t.flags |= 4194308))
            : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (a.props = r),
          (a.state = l),
          (a.context = u),
          (r = s))
        : (typeof a.componentDidMount == 'function' && (t.flags |= 4194308),
          (r = !1))
  } else {
    ;(a = t.stateNode),
      Jy(e, t),
      (s = t.memoizedProps),
      (u = t.type === t.elementType ? s : Xn(t.type, s)),
      (a.props = u),
      (f = t.pendingProps),
      (d = a.context),
      (l = n.contextType),
      typeof l == 'object' && l !== null
        ? (l = jn(l))
        : ((l = cn(n) ? Wi : Qt.current), (l = Qo(t, l)))
    var g = n.getDerivedStateFromProps
    ;(c =
      typeof g == 'function' ||
      typeof a.getSnapshotBeforeUpdate == 'function') ||
      (typeof a.UNSAFE_componentWillReceiveProps != 'function' &&
        typeof a.componentWillReceiveProps != 'function') ||
      ((s !== f || d !== l) && eg(t, a, r, l)),
      (Yr = !1),
      (d = t.memoizedState),
      (a.state = d),
      wu(t, r, a, i)
    var y = t.memoizedState
    s !== f || d !== y || un.current || Yr
      ? (typeof g == 'function' && (vd(t, n, g, r), (y = t.memoizedState)),
        (u = Yr || Jm(t, n, u, r, d, y, l) || !1)
          ? (c ||
              (typeof a.UNSAFE_componentWillUpdate != 'function' &&
                typeof a.componentWillUpdate != 'function') ||
              (typeof a.componentWillUpdate == 'function' &&
                a.componentWillUpdate(r, y, l),
              typeof a.UNSAFE_componentWillUpdate == 'function' &&
                a.UNSAFE_componentWillUpdate(r, y, l)),
            typeof a.componentDidUpdate == 'function' && (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate == 'function' && (t.flags |= 1024))
          : (typeof a.componentDidUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof a.getSnapshotBeforeUpdate != 'function' ||
              (s === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (a.props = r),
        (a.state = y),
        (a.context = l),
        (r = u))
      : (typeof a.componentDidUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof a.getSnapshotBeforeUpdate != 'function' ||
          (s === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1))
  }
  return wd(e, t, n, r, o, i)
}
function wd(e, t, n, r, i, o) {
  P1(e, t)
  var a = (t.flags & 128) !== 0
  if (!r && !a) return i && Wm(t, n, !1), jr(e, t, o)
  ;(r = t.stateNode), (b2.current = t)
  var s =
    a && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
  return (
    (t.flags |= 1),
    e !== null && a
      ? ((t.child = Zo(t, e.child, null, o)), (t.child = Zo(t, null, s, o)))
      : Jt(e, t, s, o),
    (t.memoizedState = r.state),
    i && Wm(t, n, !0),
    t.child
  )
}
function k1(e) {
  var t = e.stateNode
  t.pendingContext
    ? Um(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Um(e, t.context, !1),
    dh(e, t.containerInfo)
}
function sg(e, t, n, r, i) {
  return Yo(), ah(i), (t.flags |= 256), Jt(e, t, n, r), t.child
}
var bd = { dehydrated: null, treeContext: null, retryLane: 0 }
function xd(e) {
  return { baseLanes: e, cachePool: null, transitions: null }
}
function T1(e, t, n) {
  var r = t.pendingProps,
    i = et.current,
    o = !1,
    a = (t.flags & 128) !== 0,
    s
  if (
    ((s = a) ||
      (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    s
      ? ((o = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    je(et, i & 1),
    e === null)
  )
    return (
      md(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === '$!'
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((a = r.children),
          (e = r.fallback),
          o
            ? ((r = t.mode),
              (o = t.child),
              (a = { mode: 'hidden', children: a }),
              !(r & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = a))
                : (o = ac(a, r, 0, null)),
              (e = Vi(e, r, n, null)),
              (o.return = t),
              (e.return = t),
              (o.sibling = e),
              (t.child = o),
              (t.child.memoizedState = xd(n)),
              (t.memoizedState = bd),
              e)
            : Ch(t, a))
    )
  if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
    return x2(e, t, a, r, s, i, n)
  if (o) {
    ;(o = r.fallback), (a = t.mode), (i = e.child), (s = i.sibling)
    var l = { mode: 'hidden', children: r.children }
    return (
      !(a & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = hi(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      s !== null ? (o = hi(s, o)) : ((o = Vi(o, a, n, null)), (o.flags |= 2)),
      (o.return = t),
      (r.return = t),
      (r.sibling = o),
      (t.child = r),
      (r = o),
      (o = t.child),
      (a = e.child.memoizedState),
      (a =
        a === null
          ? xd(n)
          : {
              baseLanes: a.baseLanes | n,
              cachePool: null,
              transitions: a.transitions,
            }),
      (o.memoizedState = a),
      (o.childLanes = e.childLanes & ~n),
      (t.memoizedState = bd),
      r
    )
  }
  return (
    (o = e.child),
    (e = o.sibling),
    (r = hi(o, { mode: 'visible', children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  )
}
function Ch(e, t) {
  return (
    (t = ac({ mode: 'visible', children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  )
}
function Sl(e, t, n, r) {
  return (
    r !== null && ah(r),
    Zo(t, e.child, null, n),
    (e = Ch(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  )
}
function x2(e, t, n, r, i, o, a) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = df(Error(U(422)))), Sl(e, t, a, r))
      : t.memoizedState !== null
        ? ((t.child = e.child), (t.flags |= 128), null)
        : ((o = r.fallback),
          (i = t.mode),
          (r = ac({ mode: 'visible', children: r.children }, i, 0, null)),
          (o = Vi(o, i, a, null)),
          (o.flags |= 2),
          (r.return = t),
          (o.return = t),
          (r.sibling = o),
          (t.child = r),
          t.mode & 1 && Zo(t, e.child, null, a),
          (t.child.memoizedState = xd(a)),
          (t.memoizedState = bd),
          o)
  if (!(t.mode & 1)) return Sl(e, t, a, null)
  if (i.data === '$!') {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
    return (r = s), (o = Error(U(419))), (r = df(o, r, void 0)), Sl(e, t, a, r)
  }
  if (((s = (a & e.childLanes) !== 0), ln || s)) {
    if (((r = kt), r !== null)) {
      switch (a & -a) {
        case 4:
          i = 2
          break
        case 16:
          i = 8
          break
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32
          break
        case 536870912:
          i = 268435456
          break
        default:
          i = 0
      }
      ;(i = i & (r.suspendedLanes | a) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Fr(e, i), nr(r, e, i, -1))
    }
    return kh(), (r = df(Error(U(421)))), Sl(e, t, a, r)
  }
  return i.data === '$?'
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = A2.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = o.treeContext),
      (wn = ci(i.nextSibling)),
      (xn = t),
      (Ye = !0),
      (Jn = null),
      e !== null &&
        ((_n[Ln++] = Rr),
        (_n[Ln++] = Ir),
        (_n[Ln++] = Ki),
        (Rr = e.id),
        (Ir = e.overflow),
        (Ki = t)),
      (t = Ch(t, r.children)),
      (t.flags |= 4096),
      t)
}
function lg(e, t, n) {
  e.lanes |= t
  var r = e.alternate
  r !== null && (r.lanes |= t), gd(e.return, t, n)
}
function pf(e, t, n, r, i) {
  var o = e.memoizedState
  o === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((o.isBackwards = t),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = r),
      (o.tail = n),
      (o.tailMode = i))
}
function O1(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    o = r.tail
  if ((Jt(e, t, r.children, n), (r = et.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128)
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && lg(e, n, t)
        else if (e.tag === 19) lg(e, n, t)
        else if (e.child !== null) {
          ;(e.child.return = e), (e = e.child)
          continue
        }
        if (e === t) break e
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e
          e = e.return
        }
        ;(e.sibling.return = e.return), (e = e.sibling)
      }
    r &= 1
  }
  if ((je(et, r), !(t.mode & 1))) t.memoizedState = null
  else
    switch (i) {
      case 'forwards':
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && bu(e) === null && (i = n),
            (n = n.sibling)
        ;(n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          pf(t, !1, i, n, o)
        break
      case 'backwards':
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && bu(e) === null)) {
            t.child = i
            break
          }
          ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
        }
        pf(t, !0, n, null, o)
        break
      case 'together':
        pf(t, !1, null, null, void 0)
        break
      default:
        t.memoizedState = null
    }
  return t.child
}
function Kl(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function jr(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Gi |= t.lanes),
    !(n & t.childLanes))
  )
    return null
  if (e !== null && t.child !== e.child) throw Error(U(153))
  if (t.child !== null) {
    for (
      e = t.child, n = hi(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = hi(e, e.pendingProps)), (n.return = t)
    n.sibling = null
  }
  return t.child
}
function E2(e, t, n) {
  switch (t.tag) {
    case 3:
      k1(t), Yo()
      break
    case 5:
      e1(t)
      break
    case 1:
      cn(t.type) && gu(t)
      break
    case 4:
      dh(t, t.stateNode.containerInfo)
      break
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value
      je(Su, r._currentValue), (r._currentValue = i)
      break
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (je(et, et.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
            ? T1(e, t, n)
            : (je(et, et.current & 1),
              (e = jr(e, t, n)),
              e !== null ? e.sibling : null)
      je(et, et.current & 1)
      break
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return O1(e, t, n)
        t.flags |= 128
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        je(et, et.current),
        r)
      )
        break
      return null
    case 22:
    case 23:
      return (t.lanes = 0), E1(e, t, n)
  }
  return jr(e, t, n)
}
var R1, Ed, I1, $1
R1 = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
    else if (n.tag !== 4 && n.child !== null) {
      ;(n.child.return = n), (n = n.child)
      continue
    }
    if (n === t) break
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return
      n = n.return
    }
    ;(n.sibling.return = n.return), (n = n.sibling)
  }
}
Ed = function () {}
I1 = function (e, t, n, r) {
  var i = e.memoizedProps
  if (i !== r) {
    ;(e = t.stateNode), Fi(wr.current)
    var o = null
    switch (n) {
      case 'input':
        ;(i = Kf(e, i)), (r = Kf(e, r)), (o = [])
        break
      case 'select':
        ;(i = nt({}, i, { value: void 0 })),
          (r = nt({}, r, { value: void 0 })),
          (o = [])
        break
      case 'textarea':
        ;(i = Xf(e, i)), (r = Xf(e, r)), (o = [])
        break
      default:
        typeof i.onClick != 'function' &&
          typeof r.onClick == 'function' &&
          (e.onclick = hu)
    }
    Yf(n, r)
    var a
    n = null
    for (u in i)
      if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
        if (u === 'style') {
          var s = i[u]
          for (a in s) s.hasOwnProperty(a) && (n || (n = {}), (n[a] = ''))
        } else
          u !== 'dangerouslySetInnerHTML' &&
            u !== 'children' &&
            u !== 'suppressContentEditableWarning' &&
            u !== 'suppressHydrationWarning' &&
            u !== 'autoFocus' &&
            (os.hasOwnProperty(u) ? o || (o = []) : (o = o || []).push(u, null))
    for (u in r) {
      var l = r[u]
      if (
        ((s = i != null ? i[u] : void 0),
        r.hasOwnProperty(u) && l !== s && (l != null || s != null))
      )
        if (u === 'style')
          if (s) {
            for (a in s)
              !s.hasOwnProperty(a) ||
                (l && l.hasOwnProperty(a)) ||
                (n || (n = {}), (n[a] = ''))
            for (a in l)
              l.hasOwnProperty(a) &&
                s[a] !== l[a] &&
                (n || (n = {}), (n[a] = l[a]))
          } else n || (o || (o = []), o.push(u, n)), (n = l)
        else
          u === 'dangerouslySetInnerHTML'
            ? ((l = l ? l.__html : void 0),
              (s = s ? s.__html : void 0),
              l != null && s !== l && (o = o || []).push(u, l))
            : u === 'children'
              ? (typeof l != 'string' && typeof l != 'number') ||
                (o = o || []).push(u, '' + l)
              : u !== 'suppressContentEditableWarning' &&
                u !== 'suppressHydrationWarning' &&
                (os.hasOwnProperty(u)
                  ? (l != null && u === 'onScroll' && Ue('scroll', e),
                    o || s === l || (o = []))
                  : (o = o || []).push(u, l))
    }
    n && (o = o || []).push('style', n)
    var u = o
    ;(t.updateQueue = u) && (t.flags |= 4)
  }
}
$1 = function (e, t, n, r) {
  n !== r && (t.flags |= 4)
}
function Oa(e, t) {
  if (!Ye)
    switch (e.tailMode) {
      case 'hidden':
        t = e.tail
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling)
        n === null ? (e.tail = null) : (n.sibling = null)
        break
      case 'collapsed':
        n = e.tail
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling)
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null)
    }
}
function qt(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling)
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling)
  return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function P2(e, t, n) {
  var r = t.pendingProps
  switch ((oh(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return qt(t), null
    case 1:
      return cn(t.type) && mu(), qt(t), null
    case 3:
      return (
        (r = t.stateNode),
        Jo(),
        We(un),
        We(Qt),
        hh(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (vl(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Jn !== null && (Md(Jn), (Jn = null)))),
        Ed(e, t),
        qt(t),
        null
      )
    case 5:
      ph(t)
      var i = Fi(vs.current)
      if (((n = t.type), e !== null && t.stateNode != null))
        I1(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(U(166))
          return qt(t), null
        }
        if (((e = Fi(wr.current)), vl(t))) {
          ;(r = t.stateNode), (n = t.type)
          var o = t.memoizedProps
          switch (((r[vr] = t), (r[ms] = o), (e = (t.mode & 1) !== 0), n)) {
            case 'dialog':
              Ue('cancel', r), Ue('close', r)
              break
            case 'iframe':
            case 'object':
            case 'embed':
              Ue('load', r)
              break
            case 'video':
            case 'audio':
              for (i = 0; i < za.length; i++) Ue(za[i], r)
              break
            case 'source':
              Ue('error', r)
              break
            case 'img':
            case 'image':
            case 'link':
              Ue('error', r), Ue('load', r)
              break
            case 'details':
              Ue('toggle', r)
              break
            case 'input':
              vm(r, o), Ue('invalid', r)
              break
            case 'select':
              ;(r._wrapperState = { wasMultiple: !!o.multiple }),
                Ue('invalid', r)
              break
            case 'textarea':
              Sm(r, o), Ue('invalid', r)
          }
          Yf(n, o), (i = null)
          for (var a in o)
            if (o.hasOwnProperty(a)) {
              var s = o[a]
              a === 'children'
                ? typeof s == 'string'
                  ? r.textContent !== s &&
                    (o.suppressHydrationWarning !== !0 &&
                      gl(r.textContent, s, e),
                    (i = ['children', s]))
                  : typeof s == 'number' &&
                    r.textContent !== '' + s &&
                    (o.suppressHydrationWarning !== !0 &&
                      gl(r.textContent, s, e),
                    (i = ['children', '' + s]))
                : os.hasOwnProperty(a) &&
                  s != null &&
                  a === 'onScroll' &&
                  Ue('scroll', r)
            }
          switch (n) {
            case 'input':
              ll(r), ym(r, o, !0)
              break
            case 'textarea':
              ll(r), Cm(r)
              break
            case 'select':
            case 'option':
              break
            default:
              typeof o.onClick == 'function' && (r.onclick = hu)
          }
          ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
        } else {
          ;(a = i.nodeType === 9 ? i : i.ownerDocument),
            e === 'http://www.w3.org/1999/xhtml' && (e = oy(n)),
            e === 'http://www.w3.org/1999/xhtml'
              ? n === 'script'
                ? ((e = a.createElement('div')),
                  (e.innerHTML = '<script></script>'),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == 'string'
                  ? (e = a.createElement(n, { is: r.is }))
                  : ((e = a.createElement(n)),
                    n === 'select' &&
                      ((a = e),
                      r.multiple
                        ? (a.multiple = !0)
                        : r.size && (a.size = r.size)))
              : (e = a.createElementNS(e, n)),
            (e[vr] = t),
            (e[ms] = r),
            R1(e, t, !1, !1),
            (t.stateNode = e)
          e: {
            switch (((a = Zf(n, r)), n)) {
              case 'dialog':
                Ue('cancel', e), Ue('close', e), (i = r)
                break
              case 'iframe':
              case 'object':
              case 'embed':
                Ue('load', e), (i = r)
                break
              case 'video':
              case 'audio':
                for (i = 0; i < za.length; i++) Ue(za[i], e)
                i = r
                break
              case 'source':
                Ue('error', e), (i = r)
                break
              case 'img':
              case 'image':
              case 'link':
                Ue('error', e), Ue('load', e), (i = r)
                break
              case 'details':
                Ue('toggle', e), (i = r)
                break
              case 'input':
                vm(e, r), (i = Kf(e, r)), Ue('invalid', e)
                break
              case 'option':
                i = r
                break
              case 'select':
                ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = nt({}, r, { value: void 0 })),
                  Ue('invalid', e)
                break
              case 'textarea':
                Sm(e, r), (i = Xf(e, r)), Ue('invalid', e)
                break
              default:
                i = r
            }
            Yf(n, i), (s = i)
            for (o in s)
              if (s.hasOwnProperty(o)) {
                var l = s[o]
                o === 'style'
                  ? ly(e, l)
                  : o === 'dangerouslySetInnerHTML'
                    ? ((l = l ? l.__html : void 0), l != null && ay(e, l))
                    : o === 'children'
                      ? typeof l == 'string'
                        ? (n !== 'textarea' || l !== '') && as(e, l)
                        : typeof l == 'number' && as(e, '' + l)
                      : o !== 'suppressContentEditableWarning' &&
                        o !== 'suppressHydrationWarning' &&
                        o !== 'autoFocus' &&
                        (os.hasOwnProperty(o)
                          ? l != null && o === 'onScroll' && Ue('scroll', e)
                          : l != null && Up(e, o, l, a))
              }
            switch (n) {
              case 'input':
                ll(e), ym(e, r, !1)
                break
              case 'textarea':
                ll(e), Cm(e)
                break
              case 'option':
                r.value != null && e.setAttribute('value', '' + gi(r.value))
                break
              case 'select':
                ;(e.multiple = !!r.multiple),
                  (o = r.value),
                  o != null
                    ? Vo(e, !!r.multiple, o, !1)
                    : r.defaultValue != null &&
                      Vo(e, !!r.multiple, r.defaultValue, !0)
                break
              default:
                typeof i.onClick == 'function' && (e.onclick = hu)
            }
            switch (n) {
              case 'button':
              case 'input':
              case 'select':
              case 'textarea':
                r = !!r.autoFocus
                break e
              case 'img':
                r = !0
                break e
              default:
                r = !1
            }
          }
          r && (t.flags |= 4)
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
      }
      return qt(t), null
    case 6:
      if (e && t.stateNode != null) $1(e, t, e.memoizedProps, r)
      else {
        if (typeof r != 'string' && t.stateNode === null) throw Error(U(166))
        if (((n = Fi(vs.current)), Fi(wr.current), vl(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[vr] = t),
            (o = r.nodeValue !== n) && ((e = xn), e !== null))
          )
            switch (e.tag) {
              case 3:
                gl(r.nodeValue, n, (e.mode & 1) !== 0)
                break
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  gl(r.nodeValue, n, (e.mode & 1) !== 0)
            }
          o && (t.flags |= 4)
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[vr] = t),
            (t.stateNode = r)
      }
      return qt(t), null
    case 13:
      if (
        (We(et),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (Ye && wn !== null && t.mode & 1 && !(t.flags & 128))
          Xy(), Yo(), (t.flags |= 98560), (o = !1)
        else if (((o = vl(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!o) throw Error(U(318))
            if (
              ((o = t.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(U(317))
            o[vr] = t
          } else
            Yo(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4)
          qt(t), (o = !1)
        } else Jn !== null && (Md(Jn), (Jn = null)), (o = !0)
        if (!o) return t.flags & 65536 ? t : null
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || et.current & 1 ? Ct === 0 && (Ct = 3) : kh())),
          t.updateQueue !== null && (t.flags |= 4),
          qt(t),
          null)
    case 4:
      return (
        Jo(), Ed(e, t), e === null && ps(t.stateNode.containerInfo), qt(t), null
      )
    case 10:
      return uh(t.type._context), qt(t), null
    case 17:
      return cn(t.type) && mu(), qt(t), null
    case 19:
      if ((We(et), (o = t.memoizedState), o === null)) return qt(t), null
      if (((r = (t.flags & 128) !== 0), (a = o.rendering), a === null))
        if (r) Oa(o, !1)
        else {
          if (Ct !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((a = bu(e)), a !== null)) {
                for (
                  t.flags |= 128,
                    Oa(o, !1),
                    r = a.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (o = n),
                    (e = r),
                    (o.flags &= 14680066),
                    (a = o.alternate),
                    a === null
                      ? ((o.childLanes = 0),
                        (o.lanes = e),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = a.childLanes),
                        (o.lanes = a.lanes),
                        (o.child = a.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = a.memoizedProps),
                        (o.memoizedState = a.memoizedState),
                        (o.updateQueue = a.updateQueue),
                        (o.type = a.type),
                        (e = a.dependencies),
                        (o.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling)
                return je(et, (et.current & 1) | 2), t.child
              }
              e = e.sibling
            }
          o.tail !== null &&
            pt() > ta &&
            ((t.flags |= 128), (r = !0), Oa(o, !1), (t.lanes = 4194304))
        }
      else {
        if (!r)
          if (((e = bu(a)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Oa(o, !0),
              o.tail === null && o.tailMode === 'hidden' && !a.alternate && !Ye)
            )
              return qt(t), null
          } else
            2 * pt() - o.renderingStartTime > ta &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Oa(o, !1), (t.lanes = 4194304))
        o.isBackwards
          ? ((a.sibling = t.child), (t.child = a))
          : ((n = o.last),
            n !== null ? (n.sibling = a) : (t.child = a),
            (o.last = a))
      }
      return o.tail !== null
        ? ((t = o.tail),
          (o.rendering = t),
          (o.tail = t.sibling),
          (o.renderingStartTime = pt()),
          (t.sibling = null),
          (n = et.current),
          je(et, r ? (n & 1) | 2 : n & 1),
          t)
        : (qt(t), null)
    case 22:
    case 23:
      return (
        Ph(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Cn & 1073741824 && (qt(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : qt(t),
        null
      )
    case 24:
      return null
    case 25:
      return null
  }
  throw Error(U(156, t.tag))
}
function k2(e, t) {
  switch ((oh(t), t.tag)) {
    case 1:
      return (
        cn(t.type) && mu(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 3:
      return (
        Jo(),
        We(un),
        We(Qt),
        hh(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 5:
      return ph(t), null
    case 13:
      if (
        (We(et), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(U(340))
        Yo()
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      )
    case 19:
      return We(et), null
    case 4:
      return Jo(), null
    case 10:
      return uh(t.type._context), null
    case 22:
    case 23:
      return Ph(), null
    case 24:
      return null
    default:
      return null
  }
}
var Cl = !1,
  Xt = !1,
  T2 = typeof WeakSet == 'function' ? WeakSet : Set,
  q = null
function Ao(e, t) {
  var n = e.ref
  if (n !== null)
    if (typeof n == 'function')
      try {
        n(null)
      } catch (r) {
        at(e, t, r)
      }
    else n.current = null
}
function Pd(e, t, n) {
  try {
    n()
  } catch (r) {
    at(e, t, r)
  }
}
var ug = !1
function O2(e, t) {
  if (((ld = fu), (e = Ay()), rh(e))) {
    if ('selectionStart' in e)
      var n = { start: e.selectionStart, end: e.selectionEnd }
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window
        var r = n.getSelection && n.getSelection()
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode
          var i = r.anchorOffset,
            o = r.focusNode
          r = r.focusOffset
          try {
            n.nodeType, o.nodeType
          } catch {
            n = null
            break e
          }
          var a = 0,
            s = -1,
            l = -1,
            u = 0,
            c = 0,
            f = e,
            d = null
          t: for (;;) {
            for (
              var g;
              f !== n || (i !== 0 && f.nodeType !== 3) || (s = a + i),
                f !== o || (r !== 0 && f.nodeType !== 3) || (l = a + r),
                f.nodeType === 3 && (a += f.nodeValue.length),
                (g = f.firstChild) !== null;

            )
              (d = f), (f = g)
            for (;;) {
              if (f === e) break t
              if (
                (d === n && ++u === i && (s = a),
                d === o && ++c === r && (l = a),
                (g = f.nextSibling) !== null)
              )
                break
              ;(f = d), (d = f.parentNode)
            }
            f = g
          }
          n = s === -1 || l === -1 ? null : { start: s, end: l }
        } else n = null
      }
    n = n || { start: 0, end: 0 }
  } else n = null
  for (ud = { focusedElem: e, selectionRange: n }, fu = !1, q = t; q !== null; )
    if (((t = q), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (q = e)
    else
      for (; q !== null; ) {
        t = q
        try {
          var y = t.alternate
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break
              case 1:
                if (y !== null) {
                  var S = y.memoizedProps,
                    C = y.memoizedState,
                    v = t.stateNode,
                    h = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? S : Xn(t.type, S),
                      C,
                    )
                  v.__reactInternalSnapshotBeforeUpdate = h
                }
                break
              case 3:
                var m = t.stateNode.containerInfo
                m.nodeType === 1
                  ? (m.textContent = '')
                  : m.nodeType === 9 &&
                    m.documentElement &&
                    m.removeChild(m.documentElement)
                break
              case 5:
              case 6:
              case 4:
              case 17:
                break
              default:
                throw Error(U(163))
            }
        } catch (w) {
          at(t, t.return, w)
        }
        if (((e = t.sibling), e !== null)) {
          ;(e.return = t.return), (q = e)
          break
        }
        q = t.return
      }
  return (y = ug), (ug = !1), y
}
function Ga(e, t, n) {
  var r = t.updateQueue
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next)
    do {
      if ((i.tag & e) === e) {
        var o = i.destroy
        ;(i.destroy = void 0), o !== void 0 && Pd(t, n, o)
      }
      i = i.next
    } while (i !== r)
  }
}
function ic(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next)
    do {
      if ((n.tag & e) === e) {
        var r = n.create
        n.destroy = r()
      }
      n = n.next
    } while (n !== t)
  }
}
function kd(e) {
  var t = e.ref
  if (t !== null) {
    var n = e.stateNode
    switch (e.tag) {
      case 5:
        e = n
        break
      default:
        e = n
    }
    typeof t == 'function' ? t(e) : (t.current = e)
  }
}
function M1(e) {
  var t = e.alternate
  t !== null && ((e.alternate = null), M1(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[vr], delete t[ms], delete t[dd], delete t[c2], delete t[f2])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null)
}
function N1(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function cg(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || N1(e.return)) return null
      e = e.return
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e
      ;(e.child.return = e), (e = e.child)
    }
    if (!(e.flags & 2)) return e.stateNode
  }
}
function Td(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = hu))
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Td(e, t, n), e = e.sibling; e !== null; ) Td(e, t, n), (e = e.sibling)
}
function Od(e, t, n) {
  var r = e.tag
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
  else if (r !== 4 && ((e = e.child), e !== null))
    for (Od(e, t, n), e = e.sibling; e !== null; ) Od(e, t, n), (e = e.sibling)
}
var At = null,
  Qn = !1
function qr(e, t, n) {
  for (n = n.child; n !== null; ) _1(e, t, n), (n = n.sibling)
}
function _1(e, t, n) {
  if (Cr && typeof Cr.onCommitFiberUnmount == 'function')
    try {
      Cr.onCommitFiberUnmount(Qu, n)
    } catch {}
  switch (n.tag) {
    case 5:
      Xt || Ao(n, t)
    case 6:
      var r = At,
        i = Qn
      ;(At = null),
        qr(e, t, n),
        (At = r),
        (Qn = i),
        At !== null &&
          (Qn
            ? ((e = At),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : At.removeChild(n.stateNode))
      break
    case 18:
      At !== null &&
        (Qn
          ? ((e = At),
            (n = n.stateNode),
            e.nodeType === 8
              ? af(e.parentNode, n)
              : e.nodeType === 1 && af(e, n),
            cs(e))
          : af(At, n.stateNode))
      break
    case 4:
      ;(r = At),
        (i = Qn),
        (At = n.stateNode.containerInfo),
        (Qn = !0),
        qr(e, t, n),
        (At = r),
        (Qn = i)
      break
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !Xt &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next
        do {
          var o = i,
            a = o.destroy
          ;(o = o.tag),
            a !== void 0 && (o & 2 || o & 4) && Pd(n, t, a),
            (i = i.next)
        } while (i !== r)
      }
      qr(e, t, n)
      break
    case 1:
      if (
        !Xt &&
        (Ao(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == 'function')
      )
        try {
          ;(r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount()
        } catch (s) {
          at(n, t, s)
        }
      qr(e, t, n)
      break
    case 21:
      qr(e, t, n)
      break
    case 22:
      n.mode & 1
        ? ((Xt = (r = Xt) || n.memoizedState !== null), qr(e, t, n), (Xt = r))
        : qr(e, t, n)
      break
    default:
      qr(e, t, n)
  }
}
function fg(e) {
  var t = e.updateQueue
  if (t !== null) {
    e.updateQueue = null
    var n = e.stateNode
    n === null && (n = e.stateNode = new T2()),
      t.forEach(function (r) {
        var i = F2.bind(null, e, r)
        n.has(r) || (n.add(r), r.then(i, i))
      })
  }
}
function qn(e, t) {
  var n = t.deletions
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r]
      try {
        var o = e,
          a = t,
          s = a
        e: for (; s !== null; ) {
          switch (s.tag) {
            case 5:
              ;(At = s.stateNode), (Qn = !1)
              break e
            case 3:
              ;(At = s.stateNode.containerInfo), (Qn = !0)
              break e
            case 4:
              ;(At = s.stateNode.containerInfo), (Qn = !0)
              break e
          }
          s = s.return
        }
        if (At === null) throw Error(U(160))
        _1(o, a, i), (At = null), (Qn = !1)
        var l = i.alternate
        l !== null && (l.return = null), (i.return = null)
      } catch (u) {
        at(i, t, u)
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) L1(t, e), (t = t.sibling)
}
function L1(e, t) {
  var n = e.alternate,
    r = e.flags
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((qn(t, e), hr(e), r & 4)) {
        try {
          Ga(3, e, e.return), ic(3, e)
        } catch (S) {
          at(e, e.return, S)
        }
        try {
          Ga(5, e, e.return)
        } catch (S) {
          at(e, e.return, S)
        }
      }
      break
    case 1:
      qn(t, e), hr(e), r & 512 && n !== null && Ao(n, n.return)
      break
    case 5:
      if (
        (qn(t, e),
        hr(e),
        r & 512 && n !== null && Ao(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode
        try {
          as(i, '')
        } catch (S) {
          at(e, e.return, S)
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var o = e.memoizedProps,
          a = n !== null ? n.memoizedProps : o,
          s = e.type,
          l = e.updateQueue
        if (((e.updateQueue = null), l !== null))
          try {
            s === 'input' && o.type === 'radio' && o.name != null && ry(i, o),
              Zf(s, a)
            var u = Zf(s, o)
            for (a = 0; a < l.length; a += 2) {
              var c = l[a],
                f = l[a + 1]
              c === 'style'
                ? ly(i, f)
                : c === 'dangerouslySetInnerHTML'
                  ? ay(i, f)
                  : c === 'children'
                    ? as(i, f)
                    : Up(i, c, f, u)
            }
            switch (s) {
              case 'input':
                qf(i, o)
                break
              case 'textarea':
                iy(i, o)
                break
              case 'select':
                var d = i._wrapperState.wasMultiple
                i._wrapperState.wasMultiple = !!o.multiple
                var g = o.value
                g != null
                  ? Vo(i, !!o.multiple, g, !1)
                  : d !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Vo(i, !!o.multiple, o.defaultValue, !0)
                      : Vo(i, !!o.multiple, o.multiple ? [] : '', !1))
            }
            i[ms] = o
          } catch (S) {
            at(e, e.return, S)
          }
      }
      break
    case 6:
      if ((qn(t, e), hr(e), r & 4)) {
        if (e.stateNode === null) throw Error(U(162))
        ;(i = e.stateNode), (o = e.memoizedProps)
        try {
          i.nodeValue = o
        } catch (S) {
          at(e, e.return, S)
        }
      }
      break
    case 3:
      if (
        (qn(t, e), hr(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          cs(t.containerInfo)
        } catch (S) {
          at(e, e.return, S)
        }
      break
    case 4:
      qn(t, e), hr(e)
      break
    case 13:
      qn(t, e),
        hr(e),
        (i = e.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (xh = pt())),
        r & 4 && fg(e)
      break
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((Xt = (u = Xt) || c), qn(t, e), (Xt = u)) : qn(t, e),
        hr(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (q = e, c = e.child; c !== null; ) {
            for (f = q = c; q !== null; ) {
              switch (((d = q), (g = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ga(4, d, d.return)
                  break
                case 1:
                  Ao(d, d.return)
                  var y = d.stateNode
                  if (typeof y.componentWillUnmount == 'function') {
                    ;(r = d), (n = d.return)
                    try {
                      ;(t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount()
                    } catch (S) {
                      at(r, n, S)
                    }
                  }
                  break
                case 5:
                  Ao(d, d.return)
                  break
                case 22:
                  if (d.memoizedState !== null) {
                    pg(f)
                    continue
                  }
              }
              g !== null ? ((g.return = d), (q = g)) : pg(f)
            }
            c = c.sibling
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f
              try {
                ;(i = f.stateNode),
                  u
                    ? ((o = i.style),
                      typeof o.setProperty == 'function'
                        ? o.setProperty('display', 'none', 'important')
                        : (o.display = 'none'))
                    : ((s = f.stateNode),
                      (l = f.memoizedProps.style),
                      (a =
                        l != null && l.hasOwnProperty('display')
                          ? l.display
                          : null),
                      (s.style.display = sy('display', a)))
              } catch (S) {
                at(e, e.return, S)
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? '' : f.memoizedProps
              } catch (S) {
                at(e, e.return, S)
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            ;(f.child.return = f), (f = f.child)
            continue
          }
          if (f === e) break e
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e
            c === f && (c = null), (f = f.return)
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling)
        }
      }
      break
    case 19:
      qn(t, e), hr(e), r & 4 && fg(e)
      break
    case 21:
      break
    default:
      qn(t, e), hr(e)
  }
}
function hr(e) {
  var t = e.flags
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (N1(n)) {
            var r = n
            break e
          }
          n = n.return
        }
        throw Error(U(160))
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode
          r.flags & 32 && (as(i, ''), (r.flags &= -33))
          var o = cg(e)
          Od(e, o, i)
          break
        case 3:
        case 4:
          var a = r.stateNode.containerInfo,
            s = cg(e)
          Td(e, s, a)
          break
        default:
          throw Error(U(161))
      }
    } catch (l) {
      at(e, e.return, l)
    }
    e.flags &= -3
  }
  t & 4096 && (e.flags &= -4097)
}
function R2(e, t, n) {
  ;(q = e), A1(e)
}
function A1(e, t, n) {
  for (var r = (e.mode & 1) !== 0; q !== null; ) {
    var i = q,
      o = i.child
    if (i.tag === 22 && r) {
      var a = i.memoizedState !== null || Cl
      if (!a) {
        var s = i.alternate,
          l = (s !== null && s.memoizedState !== null) || Xt
        s = Cl
        var u = Xt
        if (((Cl = a), (Xt = l) && !u))
          for (q = i; q !== null; )
            (a = q),
              (l = a.child),
              a.tag === 22 && a.memoizedState !== null
                ? hg(i)
                : l !== null
                  ? ((l.return = a), (q = l))
                  : hg(i)
        for (; o !== null; ) (q = o), A1(o), (o = o.sibling)
        ;(q = i), (Cl = s), (Xt = u)
      }
      dg(e)
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (q = o)) : dg(e)
  }
}
function dg(e) {
  for (; q !== null; ) {
    var t = q
    if (t.flags & 8772) {
      var n = t.alternate
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              Xt || ic(5, t)
              break
            case 1:
              var r = t.stateNode
              if (t.flags & 4 && !Xt)
                if (n === null) r.componentDidMount()
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : Xn(t.type, n.memoizedProps)
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate,
                  )
                }
              var o = t.updateQueue
              o !== null && Qm(t, o, r)
              break
            case 3:
              var a = t.updateQueue
              if (a !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode
                      break
                    case 1:
                      n = t.child.stateNode
                  }
                Qm(t, a, n)
              }
              break
            case 5:
              var s = t.stateNode
              if (n === null && t.flags & 4) {
                n = s
                var l = t.memoizedProps
                switch (t.type) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    l.autoFocus && n.focus()
                    break
                  case 'img':
                    l.src && (n.src = l.src)
                }
              }
              break
            case 6:
              break
            case 4:
              break
            case 12:
              break
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate
                if (u !== null) {
                  var c = u.memoizedState
                  if (c !== null) {
                    var f = c.dehydrated
                    f !== null && cs(f)
                  }
                }
              }
              break
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break
            default:
              throw Error(U(163))
          }
        Xt || (t.flags & 512 && kd(t))
      } catch (d) {
        at(t, t.return, d)
      }
    }
    if (t === e) {
      q = null
      break
    }
    if (((n = t.sibling), n !== null)) {
      ;(n.return = t.return), (q = n)
      break
    }
    q = t.return
  }
}
function pg(e) {
  for (; q !== null; ) {
    var t = q
    if (t === e) {
      q = null
      break
    }
    var n = t.sibling
    if (n !== null) {
      ;(n.return = t.return), (q = n)
      break
    }
    q = t.return
  }
}
function hg(e) {
  for (; q !== null; ) {
    var t = q
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return
          try {
            ic(4, t)
          } catch (l) {
            at(t, n, l)
          }
          break
        case 1:
          var r = t.stateNode
          if (typeof r.componentDidMount == 'function') {
            var i = t.return
            try {
              r.componentDidMount()
            } catch (l) {
              at(t, i, l)
            }
          }
          var o = t.return
          try {
            kd(t)
          } catch (l) {
            at(t, o, l)
          }
          break
        case 5:
          var a = t.return
          try {
            kd(t)
          } catch (l) {
            at(t, a, l)
          }
      }
    } catch (l) {
      at(t, t.return, l)
    }
    if (t === e) {
      q = null
      break
    }
    var s = t.sibling
    if (s !== null) {
      ;(s.return = t.return), (q = s)
      break
    }
    q = t.return
  }
}
var I2 = Math.ceil,
  Pu = Dr.ReactCurrentDispatcher,
  wh = Dr.ReactCurrentOwner,
  Fn = Dr.ReactCurrentBatchConfig,
  Ce = 0,
  kt = null,
  mt = null,
  zt = 0,
  Cn = 0,
  Fo = Si(0),
  Ct = 0,
  ws = null,
  Gi = 0,
  oc = 0,
  bh = 0,
  Xa = null,
  an = null,
  xh = 0,
  ta = 1 / 0,
  Tr = null,
  ku = !1,
  Rd = null,
  di = null,
  wl = !1,
  ti = null,
  Tu = 0,
  Qa = 0,
  Id = null,
  ql = -1,
  Gl = 0
function en() {
  return Ce & 6 ? pt() : ql !== -1 ? ql : (ql = pt())
}
function pi(e) {
  return e.mode & 1
    ? Ce & 2 && zt !== 0
      ? zt & -zt
      : p2.transition !== null
        ? (Gl === 0 && (Gl = Cy()), Gl)
        : ((e = Ie),
          e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Ty(e.type))),
          e)
    : 1
}
function nr(e, t, n, r) {
  if (50 < Qa) throw ((Qa = 0), (Id = null), Error(U(185)))
  Hs(e, n, r),
    (!(Ce & 2) || e !== kt) &&
      (e === kt && (!(Ce & 2) && (oc |= n), Ct === 4 && Jr(e, zt)),
      fn(e, r),
      n === 1 && Ce === 0 && !(t.mode & 1) && ((ta = pt() + 500), tc && Ci()))
}
function fn(e, t) {
  var n = e.callbackNode
  px(e, t)
  var r = cu(e, e === kt ? zt : 0)
  if (r === 0)
    n !== null && xm(n), (e.callbackNode = null), (e.callbackPriority = 0)
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && xm(n), t === 1))
      e.tag === 0 ? d2(mg.bind(null, e)) : Ky(mg.bind(null, e)),
        l2(function () {
          !(Ce & 6) && Ci()
        }),
        (n = null)
    else {
      switch (wy(r)) {
        case 1:
          n = Xp
          break
        case 4:
          n = yy
          break
        case 16:
          n = uu
          break
        case 536870912:
          n = Sy
          break
        default:
          n = uu
      }
      n = U1(n, F1.bind(null, e))
    }
    ;(e.callbackPriority = t), (e.callbackNode = n)
  }
}
function F1(e, t) {
  if (((ql = -1), (Gl = 0), Ce & 6)) throw Error(U(327))
  var n = e.callbackNode
  if (qo() && e.callbackNode !== n) return null
  var r = cu(e, e === kt ? zt : 0)
  if (r === 0) return null
  if (r & 30 || r & e.expiredLanes || t) t = Ou(e, r)
  else {
    t = r
    var i = Ce
    Ce |= 2
    var o = z1()
    ;(kt !== e || zt !== t) && ((Tr = null), (ta = pt() + 500), Hi(e, t))
    do
      try {
        N2()
        break
      } catch (s) {
        j1(e, s)
      }
    while (!0)
    lh(),
      (Pu.current = o),
      (Ce = i),
      mt !== null ? (t = 0) : ((kt = null), (zt = 0), (t = Ct))
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = rd(e)), i !== 0 && ((r = i), (t = $d(e, i)))), t === 1)
    )
      throw ((n = ws), Hi(e, 0), Jr(e, r), fn(e, pt()), n)
    if (t === 6) Jr(e, r)
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !$2(i) &&
          ((t = Ou(e, r)),
          t === 2 && ((o = rd(e)), o !== 0 && ((r = o), (t = $d(e, o)))),
          t === 1))
      )
        throw ((n = ws), Hi(e, 0), Jr(e, r), fn(e, pt()), n)
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(U(345))
        case 2:
          Ni(e, an, Tr)
          break
        case 3:
          if (
            (Jr(e, r), (r & 130023424) === r && ((t = xh + 500 - pt()), 10 < t))
          ) {
            if (cu(e, 0) !== 0) break
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              en(), (e.pingedLanes |= e.suspendedLanes & i)
              break
            }
            e.timeoutHandle = fd(Ni.bind(null, e, an, Tr), t)
            break
          }
          Ni(e, an, Tr)
          break
        case 4:
          if ((Jr(e, r), (r & 4194240) === r)) break
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var a = 31 - tr(r)
            ;(o = 1 << a), (a = t[a]), a > i && (i = a), (r &= ~o)
          }
          if (
            ((r = i),
            (r = pt() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                  ? 480
                  : 1080 > r
                    ? 1080
                    : 1920 > r
                      ? 1920
                      : 3e3 > r
                        ? 3e3
                        : 4320 > r
                          ? 4320
                          : 1960 * I2(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = fd(Ni.bind(null, e, an, Tr), r)
            break
          }
          Ni(e, an, Tr)
          break
        case 5:
          Ni(e, an, Tr)
          break
        default:
          throw Error(U(329))
      }
    }
  }
  return fn(e, pt()), e.callbackNode === n ? F1.bind(null, e) : null
}
function $d(e, t) {
  var n = Xa
  return (
    e.current.memoizedState.isDehydrated && (Hi(e, t).flags |= 256),
    (e = Ou(e, t)),
    e !== 2 && ((t = an), (an = n), t !== null && Md(t)),
    e
  )
}
function Md(e) {
  an === null ? (an = e) : an.push.apply(an, e)
}
function $2(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            o = i.getSnapshot
          i = i.value
          try {
            if (!or(o(), i)) return !1
          } catch {
            return !1
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n)
    else {
      if (t === e) break
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0
        t = t.return
      }
      ;(t.sibling.return = t.return), (t = t.sibling)
    }
  }
  return !0
}
function Jr(e, t) {
  for (
    t &= ~bh,
      t &= ~oc,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - tr(t),
      r = 1 << n
    ;(e[n] = -1), (t &= ~r)
  }
}
function mg(e) {
  if (Ce & 6) throw Error(U(327))
  qo()
  var t = cu(e, 0)
  if (!(t & 1)) return fn(e, pt()), null
  var n = Ou(e, t)
  if (e.tag !== 0 && n === 2) {
    var r = rd(e)
    r !== 0 && ((t = r), (n = $d(e, r)))
  }
  if (n === 1) throw ((n = ws), Hi(e, 0), Jr(e, t), fn(e, pt()), n)
  if (n === 6) throw Error(U(345))
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Ni(e, an, Tr),
    fn(e, pt()),
    null
  )
}
function Eh(e, t) {
  var n = Ce
  Ce |= 1
  try {
    return e(t)
  } finally {
    ;(Ce = n), Ce === 0 && ((ta = pt() + 500), tc && Ci())
  }
}
function Xi(e) {
  ti !== null && ti.tag === 0 && !(Ce & 6) && qo()
  var t = Ce
  Ce |= 1
  var n = Fn.transition,
    r = Ie
  try {
    if (((Fn.transition = null), (Ie = 1), e)) return e()
  } finally {
    ;(Ie = r), (Fn.transition = n), (Ce = t), !(Ce & 6) && Ci()
  }
}
function Ph() {
  ;(Cn = Fo.current), We(Fo)
}
function Hi(e, t) {
  ;(e.finishedWork = null), (e.finishedLanes = 0)
  var n = e.timeoutHandle
  if ((n !== -1 && ((e.timeoutHandle = -1), s2(n)), mt !== null))
    for (n = mt.return; n !== null; ) {
      var r = n
      switch ((oh(r), r.tag)) {
        case 1:
          ;(r = r.type.childContextTypes), r != null && mu()
          break
        case 3:
          Jo(), We(un), We(Qt), hh()
          break
        case 5:
          ph(r)
          break
        case 4:
          Jo()
          break
        case 13:
          We(et)
          break
        case 19:
          We(et)
          break
        case 10:
          uh(r.type._context)
          break
        case 22:
        case 23:
          Ph()
      }
      n = n.return
    }
  if (
    ((kt = e),
    (mt = e = hi(e.current, null)),
    (zt = Cn = t),
    (Ct = 0),
    (ws = null),
    (bh = oc = Gi = 0),
    (an = Xa = null),
    Ai !== null)
  ) {
    for (t = 0; t < Ai.length; t++)
      if (((n = Ai[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null
        var i = r.next,
          o = n.pending
        if (o !== null) {
          var a = o.next
          ;(o.next = i), (r.next = a)
        }
        n.pending = r
      }
    Ai = null
  }
  return e
}
function j1(e, t) {
  do {
    var n = mt
    try {
      if ((lh(), (Ul.current = Eu), xu)) {
        for (var r = tt.memoizedState; r !== null; ) {
          var i = r.queue
          i !== null && (i.pending = null), (r = r.next)
        }
        xu = !1
      }
      if (
        ((qi = 0),
        (Pt = St = tt = null),
        (qa = !1),
        (ys = 0),
        (wh.current = null),
        n === null || n.return === null)
      ) {
        ;(Ct = 1), (ws = t), (mt = null)
        break
      }
      e: {
        var o = e,
          a = n.return,
          s = n,
          l = t
        if (
          ((t = zt),
          (s.flags |= 32768),
          l !== null && typeof l == 'object' && typeof l.then == 'function')
        ) {
          var u = l,
            c = s,
            f = c.tag
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null))
          }
          var g = ng(a)
          if (g !== null) {
            ;(g.flags &= -257),
              rg(g, a, s, o, t),
              g.mode & 1 && tg(o, u, t),
              (t = g),
              (l = u)
            var y = t.updateQueue
            if (y === null) {
              var S = new Set()
              S.add(l), (t.updateQueue = S)
            } else y.add(l)
            break e
          } else {
            if (!(t & 1)) {
              tg(o, u, t), kh()
              break e
            }
            l = Error(U(426))
          }
        } else if (Ye && s.mode & 1) {
          var C = ng(a)
          if (C !== null) {
            !(C.flags & 65536) && (C.flags |= 256),
              rg(C, a, s, o, t),
              ah(ea(l, s))
            break e
          }
        }
        ;(o = l = ea(l, s)),
          Ct !== 4 && (Ct = 2),
          Xa === null ? (Xa = [o]) : Xa.push(o),
          (o = a)
        do {
          switch (o.tag) {
            case 3:
              ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
              var v = w1(o, l, t)
              Xm(o, v)
              break e
            case 1:
              s = l
              var h = o.type,
                m = o.stateNode
              if (
                !(o.flags & 128) &&
                (typeof h.getDerivedStateFromError == 'function' ||
                  (m !== null &&
                    typeof m.componentDidCatch == 'function' &&
                    (di === null || !di.has(m))))
              ) {
                ;(o.flags |= 65536), (t &= -t), (o.lanes |= t)
                var w = b1(o, s, t)
                Xm(o, w)
                break e
              }
          }
          o = o.return
        } while (o !== null)
      }
      H1(n)
    } catch (b) {
      ;(t = b), mt === n && n !== null && (mt = n = n.return)
      continue
    }
    break
  } while (!0)
}
function z1() {
  var e = Pu.current
  return (Pu.current = Eu), e === null ? Eu : e
}
function kh() {
  ;(Ct === 0 || Ct === 3 || Ct === 2) && (Ct = 4),
    kt === null || (!(Gi & 268435455) && !(oc & 268435455)) || Jr(kt, zt)
}
function Ou(e, t) {
  var n = Ce
  Ce |= 2
  var r = z1()
  ;(kt !== e || zt !== t) && ((Tr = null), Hi(e, t))
  do
    try {
      M2()
      break
    } catch (i) {
      j1(e, i)
    }
  while (!0)
  if ((lh(), (Ce = n), (Pu.current = r), mt !== null)) throw Error(U(261))
  return (kt = null), (zt = 0), Ct
}
function M2() {
  for (; mt !== null; ) D1(mt)
}
function N2() {
  for (; mt !== null && !ix(); ) D1(mt)
}
function D1(e) {
  var t = B1(e.alternate, e, Cn)
  ;(e.memoizedProps = e.pendingProps),
    t === null ? H1(e) : (mt = t),
    (wh.current = null)
}
function H1(e) {
  var t = e
  do {
    var n = t.alternate
    if (((e = t.return), t.flags & 32768)) {
      if (((n = k2(n, t)), n !== null)) {
        ;(n.flags &= 32767), (mt = n)
        return
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
      else {
        ;(Ct = 6), (mt = null)
        return
      }
    } else if (((n = P2(n, t, Cn)), n !== null)) {
      mt = n
      return
    }
    if (((t = t.sibling), t !== null)) {
      mt = t
      return
    }
    mt = t = e
  } while (t !== null)
  Ct === 0 && (Ct = 5)
}
function Ni(e, t, n) {
  var r = Ie,
    i = Fn.transition
  try {
    ;(Fn.transition = null), (Ie = 1), _2(e, t, n, r)
  } finally {
    ;(Fn.transition = i), (Ie = r)
  }
  return null
}
function _2(e, t, n, r) {
  do qo()
  while (ti !== null)
  if (Ce & 6) throw Error(U(327))
  n = e.finishedWork
  var i = e.finishedLanes
  if (n === null) return null
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(U(177))
  ;(e.callbackNode = null), (e.callbackPriority = 0)
  var o = n.lanes | n.childLanes
  if (
    (hx(e, o),
    e === kt && ((mt = kt = null), (zt = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      wl ||
      ((wl = !0),
      U1(uu, function () {
        return qo(), null
      })),
    (o = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || o)
  ) {
    ;(o = Fn.transition), (Fn.transition = null)
    var a = Ie
    Ie = 1
    var s = Ce
    ;(Ce |= 4),
      (wh.current = null),
      O2(e, n),
      L1(n, e),
      e2(ud),
      (fu = !!ld),
      (ud = ld = null),
      (e.current = n),
      R2(n),
      ox(),
      (Ce = s),
      (Ie = a),
      (Fn.transition = o)
  } else e.current = n
  if (
    (wl && ((wl = !1), (ti = e), (Tu = i)),
    (o = e.pendingLanes),
    o === 0 && (di = null),
    lx(n.stateNode),
    fn(e, pt()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest })
  if (ku) throw ((ku = !1), (e = Rd), (Rd = null), e)
  return (
    Tu & 1 && e.tag !== 0 && qo(),
    (o = e.pendingLanes),
    o & 1 ? (e === Id ? Qa++ : ((Qa = 0), (Id = e))) : (Qa = 0),
    Ci(),
    null
  )
}
function qo() {
  if (ti !== null) {
    var e = wy(Tu),
      t = Fn.transition,
      n = Ie
    try {
      if (((Fn.transition = null), (Ie = 16 > e ? 16 : e), ti === null))
        var r = !1
      else {
        if (((e = ti), (ti = null), (Tu = 0), Ce & 6)) throw Error(U(331))
        var i = Ce
        for (Ce |= 4, q = e.current; q !== null; ) {
          var o = q,
            a = o.child
          if (q.flags & 16) {
            var s = o.deletions
            if (s !== null) {
              for (var l = 0; l < s.length; l++) {
                var u = s[l]
                for (q = u; q !== null; ) {
                  var c = q
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ga(8, c, o)
                  }
                  var f = c.child
                  if (f !== null) (f.return = c), (q = f)
                  else
                    for (; q !== null; ) {
                      c = q
                      var d = c.sibling,
                        g = c.return
                      if ((M1(c), c === u)) {
                        q = null
                        break
                      }
                      if (d !== null) {
                        ;(d.return = g), (q = d)
                        break
                      }
                      q = g
                    }
                }
              }
              var y = o.alternate
              if (y !== null) {
                var S = y.child
                if (S !== null) {
                  y.child = null
                  do {
                    var C = S.sibling
                    ;(S.sibling = null), (S = C)
                  } while (S !== null)
                }
              }
              q = o
            }
          }
          if (o.subtreeFlags & 2064 && a !== null) (a.return = o), (q = a)
          else
            e: for (; q !== null; ) {
              if (((o = q), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ga(9, o, o.return)
                }
              var v = o.sibling
              if (v !== null) {
                ;(v.return = o.return), (q = v)
                break e
              }
              q = o.return
            }
        }
        var h = e.current
        for (q = h; q !== null; ) {
          a = q
          var m = a.child
          if (a.subtreeFlags & 2064 && m !== null) (m.return = a), (q = m)
          else
            e: for (a = h; q !== null; ) {
              if (((s = q), s.flags & 2048))
                try {
                  switch (s.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ic(9, s)
                  }
                } catch (b) {
                  at(s, s.return, b)
                }
              if (s === a) {
                q = null
                break e
              }
              var w = s.sibling
              if (w !== null) {
                ;(w.return = s.return), (q = w)
                break e
              }
              q = s.return
            }
        }
        if (
          ((Ce = i), Ci(), Cr && typeof Cr.onPostCommitFiberRoot == 'function')
        )
          try {
            Cr.onPostCommitFiberRoot(Qu, e)
          } catch {}
        r = !0
      }
      return r
    } finally {
      ;(Ie = n), (Fn.transition = t)
    }
  }
  return !1
}
function gg(e, t, n) {
  ;(t = ea(n, t)),
    (t = w1(e, t, 1)),
    (e = fi(e, t, 1)),
    (t = en()),
    e !== null && (Hs(e, 1, t), fn(e, t))
}
function at(e, t, n) {
  if (e.tag === 3) gg(e, e, n)
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        gg(t, e, n)
        break
      } else if (t.tag === 1) {
        var r = t.stateNode
        if (
          typeof t.type.getDerivedStateFromError == 'function' ||
          (typeof r.componentDidCatch == 'function' &&
            (di === null || !di.has(r)))
        ) {
          ;(e = ea(n, e)),
            (e = b1(t, e, 1)),
            (t = fi(t, e, 1)),
            (e = en()),
            t !== null && (Hs(t, 1, e), fn(t, e))
          break
        }
      }
      t = t.return
    }
}
function L2(e, t, n) {
  var r = e.pingCache
  r !== null && r.delete(t),
    (t = en()),
    (e.pingedLanes |= e.suspendedLanes & n),
    kt === e &&
      (zt & n) === n &&
      (Ct === 4 || (Ct === 3 && (zt & 130023424) === zt && 500 > pt() - xh)
        ? Hi(e, 0)
        : (bh |= n)),
    fn(e, t)
}
function V1(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = fl), (fl <<= 1), !(fl & 130023424) && (fl = 4194304))
      : (t = 1))
  var n = en()
  ;(e = Fr(e, t)), e !== null && (Hs(e, t, n), fn(e, n))
}
function A2(e) {
  var t = e.memoizedState,
    n = 0
  t !== null && (n = t.retryLane), V1(e, n)
}
function F2(e, t) {
  var n = 0
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState
      i !== null && (n = i.retryLane)
      break
    case 19:
      r = e.stateNode
      break
    default:
      throw Error(U(314))
  }
  r !== null && r.delete(t), V1(e, n)
}
var B1
B1 = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || un.current) ln = !0
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ln = !1), E2(e, t, n)
      ln = !!(e.flags & 131072)
    }
  else (ln = !1), Ye && t.flags & 1048576 && qy(t, yu, t.index)
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type
      Kl(e, t), (e = t.pendingProps)
      var i = Qo(t, Qt.current)
      Ko(t, n), (i = gh(null, t, r, e, i, n))
      var o = vh()
      return (
        (t.flags |= 1),
        typeof i == 'object' &&
        i !== null &&
        typeof i.render == 'function' &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            cn(r) ? ((o = !0), gu(t)) : (o = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            fh(t),
            (i.updater = rc),
            (t.stateNode = i),
            (i._reactInternals = t),
            yd(t, r, e, n),
            (t = wd(null, t, r, !0, o, n)))
          : ((t.tag = 0), Ye && o && ih(t), Jt(null, t, i, n), (t = t.child)),
        t
      )
    case 16:
      r = t.elementType
      e: {
        switch (
          (Kl(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = z2(r)),
          (e = Xn(r, e)),
          i)
        ) {
          case 0:
            t = Cd(null, t, r, e, n)
            break e
          case 1:
            t = ag(null, t, r, e, n)
            break e
          case 11:
            t = ig(null, t, r, e, n)
            break e
          case 14:
            t = og(null, t, r, Xn(r.type, e), n)
            break e
        }
        throw Error(U(306, r, ''))
      }
      return t
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xn(r, i)),
        Cd(e, t, r, i, n)
      )
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xn(r, i)),
        ag(e, t, r, i, n)
      )
    case 3:
      e: {
        if ((k1(t), e === null)) throw Error(U(387))
        ;(r = t.pendingProps),
          (o = t.memoizedState),
          (i = o.element),
          Jy(e, t),
          wu(t, r, null, n)
        var a = t.memoizedState
        if (((r = a.element), o.isDehydrated))
          if (
            ((o = {
              element: r,
              isDehydrated: !1,
              cache: a.cache,
              pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
              transitions: a.transitions,
            }),
            (t.updateQueue.baseState = o),
            (t.memoizedState = o),
            t.flags & 256)
          ) {
            ;(i = ea(Error(U(423)), t)), (t = sg(e, t, r, n, i))
            break e
          } else if (r !== i) {
            ;(i = ea(Error(U(424)), t)), (t = sg(e, t, r, n, i))
            break e
          } else
            for (
              wn = ci(t.stateNode.containerInfo.firstChild),
                xn = t,
                Ye = !0,
                Jn = null,
                n = Yy(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
        else {
          if ((Yo(), r === i)) {
            t = jr(e, t, n)
            break e
          }
          Jt(e, t, r, n)
        }
        t = t.child
      }
      return t
    case 5:
      return (
        e1(t),
        e === null && md(t),
        (r = t.type),
        (i = t.pendingProps),
        (o = e !== null ? e.memoizedProps : null),
        (a = i.children),
        cd(r, i) ? (a = null) : o !== null && cd(r, o) && (t.flags |= 32),
        P1(e, t),
        Jt(e, t, a, n),
        t.child
      )
    case 6:
      return e === null && md(t), null
    case 13:
      return T1(e, t, n)
    case 4:
      return (
        dh(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Zo(t, null, r, n)) : Jt(e, t, r, n),
        t.child
      )
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xn(r, i)),
        ig(e, t, r, i, n)
      )
    case 7:
      return Jt(e, t, t.pendingProps, n), t.child
    case 8:
      return Jt(e, t, t.pendingProps.children, n), t.child
    case 12:
      return Jt(e, t, t.pendingProps.children, n), t.child
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (o = t.memoizedProps),
          (a = i.value),
          je(Su, r._currentValue),
          (r._currentValue = a),
          o !== null)
        )
          if (or(o.value, a)) {
            if (o.children === i.children && !un.current) {
              t = jr(e, t, n)
              break e
            }
          } else
            for (o = t.child, o !== null && (o.return = t); o !== null; ) {
              var s = o.dependencies
              if (s !== null) {
                a = o.child
                for (var l = s.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (o.tag === 1) {
                      ;(l = $r(-1, n & -n)), (l.tag = 2)
                      var u = o.updateQueue
                      if (u !== null) {
                        u = u.shared
                        var c = u.pending
                        c === null
                          ? (l.next = l)
                          : ((l.next = c.next), (c.next = l)),
                          (u.pending = l)
                      }
                    }
                    ;(o.lanes |= n),
                      (l = o.alternate),
                      l !== null && (l.lanes |= n),
                      gd(o.return, n, t),
                      (s.lanes |= n)
                    break
                  }
                  l = l.next
                }
              } else if (o.tag === 10) a = o.type === t.type ? null : o.child
              else if (o.tag === 18) {
                if (((a = o.return), a === null)) throw Error(U(341))
                ;(a.lanes |= n),
                  (s = a.alternate),
                  s !== null && (s.lanes |= n),
                  gd(a, n, t),
                  (a = o.sibling)
              } else a = o.child
              if (a !== null) a.return = o
              else
                for (a = o; a !== null; ) {
                  if (a === t) {
                    a = null
                    break
                  }
                  if (((o = a.sibling), o !== null)) {
                    ;(o.return = a.return), (a = o)
                    break
                  }
                  a = a.return
                }
              o = a
            }
        Jt(e, t, i.children, n), (t = t.child)
      }
      return t
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Ko(t, n),
        (i = jn(i)),
        (r = r(i)),
        (t.flags |= 1),
        Jt(e, t, r, n),
        t.child
      )
    case 14:
      return (
        (r = t.type),
        (i = Xn(r, t.pendingProps)),
        (i = Xn(r.type, i)),
        og(e, t, r, i, n)
      )
    case 15:
      return x1(e, t, t.type, t.pendingProps, n)
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : Xn(r, i)),
        Kl(e, t),
        (t.tag = 1),
        cn(r) ? ((e = !0), gu(t)) : (e = !1),
        Ko(t, n),
        C1(t, r, i),
        yd(t, r, i, n),
        wd(null, t, r, !0, e, n)
      )
    case 19:
      return O1(e, t, n)
    case 22:
      return E1(e, t, n)
  }
  throw Error(U(156, t.tag))
}
function U1(e, t) {
  return vy(e, t)
}
function j2(e, t, n, r) {
  ;(this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null)
}
function An(e, t, n, r) {
  return new j2(e, t, n, r)
}
function Th(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent)
}
function z2(e) {
  if (typeof e == 'function') return Th(e) ? 1 : 0
  if (e != null) {
    if (((e = e.$$typeof), e === Kp)) return 11
    if (e === qp) return 14
  }
  return 2
}
function hi(e, t) {
  var n = e.alternate
  return (
    n === null
      ? ((n = An(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  )
}
function Xl(e, t, n, r, i, o) {
  var a = 2
  if (((r = e), typeof e == 'function')) Th(e) && (a = 1)
  else if (typeof e == 'string') a = 5
  else
    e: switch (e) {
      case To:
        return Vi(n.children, i, o, t)
      case Wp:
        ;(a = 8), (i |= 8)
        break
      case Vf:
        return (e = An(12, n, t, i | 2)), (e.elementType = Vf), (e.lanes = o), e
      case Bf:
        return (e = An(13, n, t, i)), (e.elementType = Bf), (e.lanes = o), e
      case Uf:
        return (e = An(19, n, t, i)), (e.elementType = Uf), (e.lanes = o), e
      case ey:
        return ac(n, i, o, t)
      default:
        if (typeof e == 'object' && e !== null)
          switch (e.$$typeof) {
            case Z0:
              a = 10
              break e
            case J0:
              a = 9
              break e
            case Kp:
              a = 11
              break e
            case qp:
              a = 14
              break e
            case Qr:
              ;(a = 16), (r = null)
              break e
          }
        throw Error(U(130, e == null ? e : typeof e, ''))
    }
  return (
    (t = An(a, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = o), t
  )
}
function Vi(e, t, n, r) {
  return (e = An(7, e, r, t)), (e.lanes = n), e
}
function ac(e, t, n, r) {
  return (
    (e = An(22, e, r, t)),
    (e.elementType = ey),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  )
}
function hf(e, t, n) {
  return (e = An(6, e, null, t)), (e.lanes = n), e
}
function mf(e, t, n) {
  return (
    (t = An(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  )
}
function D2(e, t, n, r, i) {
  ;(this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Gc(0)),
    (this.expirationTimes = Gc(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Gc(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null)
}
function Oh(e, t, n, r, i, o, a, s, l) {
  return (
    (e = new D2(e, t, n, s, l)),
    t === 1 ? ((t = 1), o === !0 && (t |= 8)) : (t = 0),
    (o = An(3, null, null, t)),
    (e.current = o),
    (o.stateNode = e),
    (o.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    fh(o),
    e
  )
}
function H2(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
  return {
    $$typeof: ko,
    key: r == null ? null : '' + r,
    children: e,
    containerInfo: t,
    implementation: n,
  }
}
function W1(e) {
  if (!e) return vi
  e = e._reactInternals
  e: {
    if (to(e) !== e || e.tag !== 1) throw Error(U(170))
    var t = e
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context
          break e
        case 1:
          if (cn(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext
            break e
          }
      }
      t = t.return
    } while (t !== null)
    throw Error(U(171))
  }
  if (e.tag === 1) {
    var n = e.type
    if (cn(n)) return Wy(e, n, t)
  }
  return t
}
function K1(e, t, n, r, i, o, a, s, l) {
  return (
    (e = Oh(n, r, !0, e, i, o, a, s, l)),
    (e.context = W1(null)),
    (n = e.current),
    (r = en()),
    (i = pi(n)),
    (o = $r(r, i)),
    (o.callback = t ?? null),
    fi(n, o, i),
    (e.current.lanes = i),
    Hs(e, i, r),
    fn(e, r),
    e
  )
}
function sc(e, t, n, r) {
  var i = t.current,
    o = en(),
    a = pi(i)
  return (
    (n = W1(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = $r(o, a)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = fi(i, t, a)),
    e !== null && (nr(e, i, a, o), Bl(e, i, a)),
    a
  )
}
function Ru(e) {
  if (((e = e.current), !e.child)) return null
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode
    default:
      return e.child.stateNode
  }
}
function vg(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane
    e.retryLane = n !== 0 && n < t ? n : t
  }
}
function Rh(e, t) {
  vg(e, t), (e = e.alternate) && vg(e, t)
}
function V2() {
  return null
}
var q1 =
  typeof reportError == 'function'
    ? reportError
    : function (e) {
        console.error(e)
      }
function Ih(e) {
  this._internalRoot = e
}
lc.prototype.render = Ih.prototype.render = function (e) {
  var t = this._internalRoot
  if (t === null) throw Error(U(409))
  sc(e, t, null, null)
}
lc.prototype.unmount = Ih.prototype.unmount = function () {
  var e = this._internalRoot
  if (e !== null) {
    this._internalRoot = null
    var t = e.containerInfo
    Xi(function () {
      sc(null, e, null, null)
    }),
      (t[Ar] = null)
  }
}
function lc(e) {
  this._internalRoot = e
}
lc.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = Ey()
    e = { blockedOn: null, target: e, priority: t }
    for (var n = 0; n < Zr.length && t !== 0 && t < Zr[n].priority; n++);
    Zr.splice(n, 0, e), n === 0 && ky(e)
  }
}
function $h(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function uc(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== ' react-mount-point-unstable '))
  )
}
function yg() {}
function B2(e, t, n, r, i) {
  if (i) {
    if (typeof r == 'function') {
      var o = r
      r = function () {
        var u = Ru(a)
        o.call(u)
      }
    }
    var a = K1(t, r, e, 0, null, !1, !1, '', yg)
    return (
      (e._reactRootContainer = a),
      (e[Ar] = a.current),
      ps(e.nodeType === 8 ? e.parentNode : e),
      Xi(),
      a
    )
  }
  for (; (i = e.lastChild); ) e.removeChild(i)
  if (typeof r == 'function') {
    var s = r
    r = function () {
      var u = Ru(l)
      s.call(u)
    }
  }
  var l = Oh(e, 0, !1, null, null, !1, !1, '', yg)
  return (
    (e._reactRootContainer = l),
    (e[Ar] = l.current),
    ps(e.nodeType === 8 ? e.parentNode : e),
    Xi(function () {
      sc(t, l, n, r)
    }),
    l
  )
}
function cc(e, t, n, r, i) {
  var o = n._reactRootContainer
  if (o) {
    var a = o
    if (typeof i == 'function') {
      var s = i
      i = function () {
        var l = Ru(a)
        s.call(l)
      }
    }
    sc(t, a, e, i)
  } else a = B2(n, t, e, i, r)
  return Ru(a)
}
by = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode
      if (t.current.memoizedState.isDehydrated) {
        var n = ja(t.pendingLanes)
        n !== 0 &&
          (Qp(t, n | 1), fn(t, pt()), !(Ce & 6) && ((ta = pt() + 500), Ci()))
      }
      break
    case 13:
      Xi(function () {
        var r = Fr(e, 1)
        if (r !== null) {
          var i = en()
          nr(r, e, 1, i)
        }
      }),
        Rh(e, 1)
  }
}
Yp = function (e) {
  if (e.tag === 13) {
    var t = Fr(e, 134217728)
    if (t !== null) {
      var n = en()
      nr(t, e, 134217728, n)
    }
    Rh(e, 134217728)
  }
}
xy = function (e) {
  if (e.tag === 13) {
    var t = pi(e),
      n = Fr(e, t)
    if (n !== null) {
      var r = en()
      nr(n, e, t, r)
    }
    Rh(e, t)
  }
}
Ey = function () {
  return Ie
}
Py = function (e, t) {
  var n = Ie
  try {
    return (Ie = e), t()
  } finally {
    Ie = n
  }
}
ed = function (e, t, n) {
  switch (t) {
    case 'input':
      if ((qf(e, n), (t = n.name), n.type === 'radio' && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode
        for (
          n = n.querySelectorAll(
            'input[name=' + JSON.stringify('' + t) + '][type="radio"]',
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t]
          if (r !== e && r.form === e.form) {
            var i = ec(r)
            if (!i) throw Error(U(90))
            ny(r), qf(r, i)
          }
        }
      }
      break
    case 'textarea':
      iy(e, n)
      break
    case 'select':
      ;(t = n.value), t != null && Vo(e, !!n.multiple, t, !1)
  }
}
fy = Eh
dy = Xi
var U2 = { usingClientEntryPoint: !1, Events: [Bs, $o, ec, uy, cy, Eh] },
  Ra = {
    findFiberByHostInstance: Li,
    bundleType: 0,
    version: '18.3.1',
    rendererPackageName: 'react-dom',
  },
  W2 = {
    bundleType: Ra.bundleType,
    version: Ra.version,
    rendererPackageName: Ra.rendererPackageName,
    rendererConfig: Ra.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Dr.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = my(e)), e === null ? null : e.stateNode
    },
    findFiberByHostInstance: Ra.findFiberByHostInstance || V2,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
  }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
  var bl = __REACT_DEVTOOLS_GLOBAL_HOOK__
  if (!bl.isDisabled && bl.supportsFiber)
    try {
      ;(Qu = bl.inject(W2)), (Cr = bl)
    } catch {}
}
kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U2
kn.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
  if (!$h(t)) throw Error(U(200))
  return H2(e, t, null, n)
}
kn.createRoot = function (e, t) {
  if (!$h(e)) throw Error(U(299))
  var n = !1,
    r = '',
    i = q1
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Oh(e, 1, !1, null, null, n, !1, r, i)),
    (e[Ar] = t.current),
    ps(e.nodeType === 8 ? e.parentNode : e),
    new Ih(t)
  )
}
kn.findDOMNode = function (e) {
  if (e == null) return null
  if (e.nodeType === 1) return e
  var t = e._reactInternals
  if (t === void 0)
    throw typeof e.render == 'function'
      ? Error(U(188))
      : ((e = Object.keys(e).join(',')), Error(U(268, e)))
  return (e = my(t)), (e = e === null ? null : e.stateNode), e
}
kn.flushSync = function (e) {
  return Xi(e)
}
kn.hydrate = function (e, t, n) {
  if (!uc(t)) throw Error(U(200))
  return cc(null, e, t, !0, n)
}
kn.hydrateRoot = function (e, t, n) {
  if (!$h(e)) throw Error(U(405))
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    o = '',
    a = q1
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (o = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (a = n.onRecoverableError)),
    (t = K1(t, null, e, 1, n ?? null, i, !1, o, a)),
    (e[Ar] = t.current),
    ps(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i)
  return new lc(t)
}
kn.render = function (e, t, n) {
  if (!uc(t)) throw Error(U(200))
  return cc(null, e, t, !1, n)
}
kn.unmountComponentAtNode = function (e) {
  if (!uc(e)) throw Error(U(40))
  return e._reactRootContainer
    ? (Xi(function () {
        cc(null, null, e, !1, function () {
          ;(e._reactRootContainer = null), (e[Ar] = null)
        })
      }),
      !0)
    : !1
}
kn.unstable_batchedUpdates = Eh
kn.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!uc(n)) throw Error(U(200))
  if (e == null || e._reactInternals === void 0) throw Error(U(38))
  return cc(e, t, n, !1, r)
}
kn.version = '18.3.1-next-f1338f8080-20240426'
function G1() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(G1)
    } catch (e) {
      console.error(e)
    }
}
G1(), (G0.exports = kn)
var Ws = G0.exports
const Iu = Ji(Ws),
  v5 = O0({ __proto__: null, default: Iu }, [Ws])
/**
 * @remix-run/router v1.20.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function bs() {
  return (
    (bs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    bs.apply(this, arguments)
  )
}
var ni
;(function (e) {
  ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(ni || (ni = {}))
const Sg = 'popstate'
function K2(e) {
  e === void 0 && (e = {})
  function t(r, i) {
    let { pathname: o, search: a, hash: s } = r.location
    return Nd(
      '',
      { pathname: o, search: a, hash: s },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || 'default',
    )
  }
  function n(r, i) {
    return typeof i == 'string' ? i : $u(i)
  }
  return G2(t, n, null, e)
}
function gt(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function X1(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t)
    try {
      throw new Error(t)
    } catch {}
  }
}
function q2() {
  return Math.random().toString(36).substr(2, 8)
}
function Cg(e, t) {
  return { usr: e.state, key: e.key, idx: t }
}
function Nd(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    bs(
      { pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' },
      typeof t == 'string' ? ca(t) : t,
      { state: n, key: (t && t.key) || r || q2() },
    )
  )
}
function $u(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e
  return (
    n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
    r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
    t
  )
}
function ca(e) {
  let t = {}
  if (e) {
    let n = e.indexOf('#')
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
    let r = e.indexOf('?')
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
      e && (t.pathname = e)
  }
  return t
}
function G2(e, t, n, r) {
  r === void 0 && (r = {})
  let { window: i = document.defaultView, v5Compat: o = !1 } = r,
    a = i.history,
    s = ni.Pop,
    l = null,
    u = c()
  u == null && ((u = 0), a.replaceState(bs({}, a.state, { idx: u }), ''))
  function c() {
    return (a.state || { idx: null }).idx
  }
  function f() {
    s = ni.Pop
    let C = c(),
      v = C == null ? null : C - u
    ;(u = C), l && l({ action: s, location: S.location, delta: v })
  }
  function d(C, v) {
    s = ni.Push
    let h = Nd(S.location, C, v)
    u = c() + 1
    let m = Cg(h, u),
      w = S.createHref(h)
    try {
      a.pushState(m, '', w)
    } catch (b) {
      if (b instanceof DOMException && b.name === 'DataCloneError') throw b
      i.location.assign(w)
    }
    o && l && l({ action: s, location: S.location, delta: 1 })
  }
  function g(C, v) {
    s = ni.Replace
    let h = Nd(S.location, C, v)
    u = c()
    let m = Cg(h, u),
      w = S.createHref(h)
    a.replaceState(m, '', w),
      o && l && l({ action: s, location: S.location, delta: 0 })
  }
  function y(C) {
    let v = i.location.origin !== 'null' ? i.location.origin : i.location.href,
      h = typeof C == 'string' ? C : $u(C)
    return (
      (h = h.replace(/ $/, '%20')),
      gt(
        v,
        'No window.location.(origin|href) available to create URL for href: ' +
          h,
      ),
      new URL(h, v)
    )
  }
  let S = {
    get action() {
      return s
    },
    get location() {
      return e(i, a)
    },
    listen(C) {
      if (l) throw new Error('A history only accepts one active listener')
      return (
        i.addEventListener(Sg, f),
        (l = C),
        () => {
          i.removeEventListener(Sg, f), (l = null)
        }
      )
    },
    createHref(C) {
      return t(i, C)
    },
    createURL: y,
    encodeLocation(C) {
      let v = y(C)
      return { pathname: v.pathname, search: v.search, hash: v.hash }
    },
    push: d,
    replace: g,
    go(C) {
      return a.go(C)
    },
  }
  return S
}
var wg
;(function (e) {
  ;(e.data = 'data'),
    (e.deferred = 'deferred'),
    (e.redirect = 'redirect'),
    (e.error = 'error')
})(wg || (wg = {}))
function X2(e, t, n) {
  return n === void 0 && (n = '/'), Q2(e, t, n, !1)
}
function Q2(e, t, n, r) {
  let i = typeof t == 'string' ? ca(t) : t,
    o = Mh(i.pathname || '/', n)
  if (o == null) return null
  let a = Q1(e)
  Y2(a)
  let s = null
  for (let l = 0; s == null && l < a.length; ++l) {
    let u = lE(o)
    s = aE(a[l], u, r)
  }
  return s
}
function Q1(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
  let i = (o, a, s) => {
    let l = {
      relativePath: s === void 0 ? o.path || '' : s,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: a,
      route: o,
    }
    l.relativePath.startsWith('/') &&
      (gt(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (l.relativePath = l.relativePath.slice(r.length)))
    let u = mi([r, l.relativePath]),
      c = n.concat(l)
    o.children &&
      o.children.length > 0 &&
      (gt(
        o.index !== !0,
        'Index routes must not have child routes. Please remove ' +
          ('all child routes from route path "' + u + '".'),
      ),
      Q1(o.children, t, c, u)),
      !(o.path == null && !o.index) &&
        t.push({ path: u, score: iE(u, o.index), routesMeta: c })
  }
  return (
    e.forEach((o, a) => {
      var s
      if (o.path === '' || !((s = o.path) != null && s.includes('?'))) i(o, a)
      else for (let l of Y1(o.path)) i(o, a, l)
    }),
    t
  )
}
function Y1(e) {
  let t = e.split('/')
  if (t.length === 0) return []
  let [n, ...r] = t,
    i = n.endsWith('?'),
    o = n.replace(/\?$/, '')
  if (r.length === 0) return i ? [o, ''] : [o]
  let a = Y1(r.join('/')),
    s = []
  return (
    s.push(...a.map((l) => (l === '' ? o : [o, l].join('/')))),
    i && s.push(...a),
    s.map((l) => (e.startsWith('/') && l === '' ? '/' : l))
  )
}
function Y2(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : oE(
          t.routesMeta.map((r) => r.childrenIndex),
          n.routesMeta.map((r) => r.childrenIndex),
        ),
  )
}
const Z2 = /^:[\w-]+$/,
  J2 = 3,
  eE = 2,
  tE = 1,
  nE = 10,
  rE = -2,
  bg = (e) => e === '*'
function iE(e, t) {
  let n = e.split('/'),
    r = n.length
  return (
    n.some(bg) && (r += rE),
    t && (r += eE),
    n
      .filter((i) => !bg(i))
      .reduce((i, o) => i + (Z2.test(o) ? J2 : o === '' ? tE : nE), r)
  )
}
function oE(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
    ? e[e.length - 1] - t[t.length - 1]
    : 0
}
function aE(e, t, n) {
  let { routesMeta: r } = e,
    i = {},
    o = '/',
    a = []
  for (let s = 0; s < r.length; ++s) {
    let l = r[s],
      u = s === r.length - 1,
      c = o === '/' ? t : t.slice(o.length) || '/',
      f = xg(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: u },
        c,
      ),
      d = l.route
    if (
      (!f &&
        u &&
        n &&
        !r[r.length - 1].route.index &&
        (f = xg(
          { path: l.relativePath, caseSensitive: l.caseSensitive, end: !1 },
          c,
        )),
      !f)
    )
      return null
    Object.assign(i, f.params),
      a.push({
        params: i,
        pathname: mi([o, f.pathname]),
        pathnameBase: dE(mi([o, f.pathnameBase])),
        route: d,
      }),
      f.pathnameBase !== '/' && (o = mi([o, f.pathnameBase]))
  }
  return a
}
function xg(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
  let [n, r] = sE(e.path, e.caseSensitive, e.end),
    i = t.match(n)
  if (!i) return null
  let o = i[0],
    a = o.replace(/(.)\/+$/, '$1'),
    s = i.slice(1)
  return {
    params: r.reduce((u, c, f) => {
      let { paramName: d, isOptional: g } = c
      if (d === '*') {
        let S = s[f] || ''
        a = o.slice(0, o.length - S.length).replace(/(.)\/+$/, '$1')
      }
      const y = s[f]
      return (
        g && !y ? (u[d] = void 0) : (u[d] = (y || '').replace(/%2F/g, '/')), u
      )
    }, {}),
    pathname: o,
    pathnameBase: a,
    pattern: e,
  }
}
function sE(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    X1(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    )
  let r = [],
    i =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (a, s, l) => (
            r.push({ paramName: s, isOptional: l != null }),
            l ? '/?([^\\/]+)?' : '/([^\\/]+)'
          ),
        )
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }),
        (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (i += '\\/*$')
        : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
    [new RegExp(i, t ? void 0 : 'i'), r]
  )
}
function lE(e) {
  try {
    return e
      .split('/')
      .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/')
  } catch (t) {
    return (
      X1(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    )
  }
}
function Mh(e, t) {
  if (t === '/') return e
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n)
  return r && r !== '/' ? null : e.slice(n) || '/'
}
function uE(e, t) {
  t === void 0 && (t = '/')
  let {
    pathname: n,
    search: r = '',
    hash: i = '',
  } = typeof e == 'string' ? ca(e) : e
  return {
    pathname: n ? (n.startsWith('/') ? n : cE(n, t)) : t,
    search: pE(r),
    hash: hE(i),
  }
}
function cE(e, t) {
  let n = t.replace(/\/+$/, '').split('/')
  return (
    e.split('/').forEach((i) => {
      i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
    }),
    n.length > 1 ? n.join('/') : '/'
  )
}
function gf(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' +
      t +
      '` field [' +
      JSON.stringify(r) +
      '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  )
}
function fE(e) {
  return e.filter(
    (t, n) => n === 0 || (t.route.path && t.route.path.length > 0),
  )
}
function Z1(e, t) {
  let n = fE(e)
  return t
    ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
    : n.map((r) => r.pathnameBase)
}
function J1(e, t, n, r) {
  r === void 0 && (r = !1)
  let i
  typeof e == 'string'
    ? (i = ca(e))
    : ((i = bs({}, e)),
      gt(
        !i.pathname || !i.pathname.includes('?'),
        gf('?', 'pathname', 'search', i),
      ),
      gt(
        !i.pathname || !i.pathname.includes('#'),
        gf('#', 'pathname', 'hash', i),
      ),
      gt(!i.search || !i.search.includes('#'), gf('#', 'search', 'hash', i)))
  let o = e === '' || i.pathname === '',
    a = o ? '/' : i.pathname,
    s
  if (a == null) s = n
  else {
    let f = t.length - 1
    if (!r && a.startsWith('..')) {
      let d = a.split('/')
      for (; d[0] === '..'; ) d.shift(), (f -= 1)
      i.pathname = d.join('/')
    }
    s = f >= 0 ? t[f] : '/'
  }
  let l = uE(i, s),
    u = a && a !== '/' && a.endsWith('/'),
    c = (o || a === '.') && n.endsWith('/')
  return !l.pathname.endsWith('/') && (u || c) && (l.pathname += '/'), l
}
const mi = (e) => e.join('/').replace(/\/\/+/g, '/'),
  dE = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  pE = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  hE = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
function mE(e) {
  return (
    e != null &&
    typeof e.status == 'number' &&
    typeof e.statusText == 'string' &&
    typeof e.internal == 'boolean' &&
    'data' in e
  )
}
const eS = ['post', 'put', 'patch', 'delete']
new Set(eS)
const gE = ['get', ...eS]
new Set(gE)
/**
 * React Router v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function xs() {
  return (
    (xs = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    xs.apply(this, arguments)
  )
}
const Nh = p.createContext(null),
  vE = p.createContext(null),
  no = p.createContext(null),
  fc = p.createContext(null),
  ro = p.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  tS = p.createContext(null)
function yE(e, t) {
  let { relative: n } = t === void 0 ? {} : t
  Ks() || gt(!1)
  let { basename: r, navigator: i } = p.useContext(no),
    { hash: o, pathname: a, search: s } = iS(e, { relative: n }),
    l = a
  return (
    r !== '/' && (l = a === '/' ? r : mi([r, a])),
    i.createHref({ pathname: l, search: s, hash: o })
  )
}
function Ks() {
  return p.useContext(fc) != null
}
function fa() {
  return Ks() || gt(!1), p.useContext(fc).location
}
function nS(e) {
  p.useContext(no).static || p.useLayoutEffect(e)
}
function rS() {
  let { isDataRoute: e } = p.useContext(ro)
  return e ? $E() : SE()
}
function SE() {
  Ks() || gt(!1)
  let e = p.useContext(Nh),
    { basename: t, future: n, navigator: r } = p.useContext(no),
    { matches: i } = p.useContext(ro),
    { pathname: o } = fa(),
    a = JSON.stringify(Z1(i, n.v7_relativeSplatPath)),
    s = p.useRef(!1)
  return (
    nS(() => {
      s.current = !0
    }),
    p.useCallback(
      function (u, c) {
        if ((c === void 0 && (c = {}), !s.current)) return
        if (typeof u == 'number') {
          r.go(u)
          return
        }
        let f = J1(u, JSON.parse(a), o, c.relative === 'path')
        e == null &&
          t !== '/' &&
          (f.pathname = f.pathname === '/' ? t : mi([t, f.pathname])),
          (c.replace ? r.replace : r.push)(f, c.state, c)
      },
      [t, r, a, o, e],
    )
  )
}
function iS(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = p.useContext(no),
    { matches: i } = p.useContext(ro),
    { pathname: o } = fa(),
    a = JSON.stringify(Z1(i, r.v7_relativeSplatPath))
  return p.useMemo(() => J1(e, JSON.parse(a), o, n === 'path'), [e, a, o, n])
}
function CE(e, t) {
  return wE(e, t)
}
function wE(e, t, n, r) {
  Ks() || gt(!1)
  let { navigator: i } = p.useContext(no),
    { matches: o } = p.useContext(ro),
    a = o[o.length - 1],
    s = a ? a.params : {}
  a && a.pathname
  let l = a ? a.pathnameBase : '/'
  a && a.route
  let u = fa(),
    c
  if (t) {
    var f
    let C = typeof t == 'string' ? ca(t) : t
    l === '/' || ((f = C.pathname) != null && f.startsWith(l)) || gt(!1),
      (c = C)
  } else c = u
  let d = c.pathname || '/',
    g = d
  if (l !== '/') {
    let C = l.replace(/^\//, '').split('/')
    g = '/' + d.replace(/^\//, '').split('/').slice(C.length).join('/')
  }
  let y = X2(e, { pathname: g }),
    S = kE(
      y &&
        y.map((C) =>
          Object.assign({}, C, {
            params: Object.assign({}, s, C.params),
            pathname: mi([
              l,
              i.encodeLocation
                ? i.encodeLocation(C.pathname).pathname
                : C.pathname,
            ]),
            pathnameBase:
              C.pathnameBase === '/'
                ? l
                : mi([
                    l,
                    i.encodeLocation
                      ? i.encodeLocation(C.pathnameBase).pathname
                      : C.pathnameBase,
                  ]),
          }),
        ),
      o,
      n,
      r,
    )
  return t && S
    ? p.createElement(
        fc.Provider,
        {
          value: {
            location: xs(
              {
                pathname: '/',
                search: '',
                hash: '',
                state: null,
                key: 'default',
              },
              c,
            ),
            navigationType: ni.Pop,
          },
        },
        S,
      )
    : S
}
function bE() {
  let e = IE(),
    t = mE(e)
      ? e.status + ' ' + e.statusText
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
  return p.createElement(
    p.Fragment,
    null,
    p.createElement('h2', null, 'Unexpected Application Error!'),
    p.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? p.createElement('pre', { style: i }, n) : null,
    null,
  )
}
const xE = p.createElement(bE, null)
class EE extends p.Component {
  constructor(t) {
    super(t),
      (this.state = {
        location: t.location,
        revalidation: t.revalidation,
        error: t.error,
      })
  }
  static getDerivedStateFromError(t) {
    return { error: t }
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location ||
      (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : {
          error: t.error !== void 0 ? t.error : n.error,
          location: n.location,
          revalidation: t.revalidation || n.revalidation,
        }
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n)
  }
  render() {
    return this.state.error !== void 0
      ? p.createElement(
          ro.Provider,
          { value: this.props.routeContext },
          p.createElement(tS.Provider, {
            value: this.state.error,
            children: this.props.component,
          }),
        )
      : this.props.children
  }
}
function PE(e) {
  let { routeContext: t, match: n, children: r } = e,
    i = p.useContext(Nh)
  return (
    i &&
      i.static &&
      i.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = n.route.id),
    p.createElement(ro.Provider, { value: t }, r)
  )
}
function kE(e, t, n, r) {
  var i
  if (
    (t === void 0 && (t = []),
    n === void 0 && (n = null),
    r === void 0 && (r = null),
    e == null)
  ) {
    var o
    if (!n) return null
    if (n.errors) e = n.matches
    else if (
      (o = r) != null &&
      o.v7_partialHydration &&
      t.length === 0 &&
      !n.initialized &&
      n.matches.length > 0
    )
      e = n.matches
    else return null
  }
  let a = e,
    s = (i = n) == null ? void 0 : i.errors
  if (s != null) {
    let c = a.findIndex(
      (f) => f.route.id && (s == null ? void 0 : s[f.route.id]) !== void 0,
    )
    c >= 0 || gt(!1), (a = a.slice(0, Math.min(a.length, c + 1)))
  }
  let l = !1,
    u = -1
  if (n && r && r.v7_partialHydration)
    for (let c = 0; c < a.length; c++) {
      let f = a[c]
      if (
        ((f.route.HydrateFallback || f.route.hydrateFallbackElement) && (u = c),
        f.route.id)
      ) {
        let { loaderData: d, errors: g } = n,
          y =
            f.route.loader &&
            d[f.route.id] === void 0 &&
            (!g || g[f.route.id] === void 0)
        if (f.route.lazy || y) {
          ;(l = !0), u >= 0 ? (a = a.slice(0, u + 1)) : (a = [a[0]])
          break
        }
      }
    }
  return a.reduceRight((c, f, d) => {
    let g,
      y = !1,
      S = null,
      C = null
    n &&
      ((g = s && f.route.id ? s[f.route.id] : void 0),
      (S = f.route.errorElement || xE),
      l &&
        (u < 0 && d === 0
          ? ((y = !0), (C = null))
          : u === d &&
            ((y = !0), (C = f.route.hydrateFallbackElement || null))))
    let v = t.concat(a.slice(0, d + 1)),
      h = () => {
        let m
        return (
          g
            ? (m = S)
            : y
              ? (m = C)
              : f.route.Component
                ? (m = p.createElement(f.route.Component, null))
                : f.route.element
                  ? (m = f.route.element)
                  : (m = c),
          p.createElement(PE, {
            match: f,
            routeContext: { outlet: c, matches: v, isDataRoute: n != null },
            children: m,
          })
        )
      }
    return n && (f.route.ErrorBoundary || f.route.errorElement || d === 0)
      ? p.createElement(EE, {
          location: n.location,
          revalidation: n.revalidation,
          component: S,
          error: g,
          children: h(),
          routeContext: { outlet: null, matches: v, isDataRoute: !0 },
        })
      : h()
  }, null)
}
var oS = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      e
    )
  })(oS || {}),
  Mu = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    )
  })(Mu || {})
function TE(e) {
  let t = p.useContext(Nh)
  return t || gt(!1), t
}
function OE(e) {
  let t = p.useContext(vE)
  return t || gt(!1), t
}
function RE(e) {
  let t = p.useContext(ro)
  return t || gt(!1), t
}
function aS(e) {
  let t = RE(),
    n = t.matches[t.matches.length - 1]
  return n.route.id || gt(!1), n.route.id
}
function IE() {
  var e
  let t = p.useContext(tS),
    n = OE(Mu.UseRouteError),
    r = aS(Mu.UseRouteError)
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function $E() {
  let { router: e } = TE(oS.UseNavigateStable),
    t = aS(Mu.UseNavigateStable),
    n = p.useRef(!1)
  return (
    nS(() => {
      n.current = !0
    }),
    p.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          n.current &&
            (typeof i == 'number'
              ? e.navigate(i)
              : e.navigate(i, xs({ fromRouteId: t }, o)))
      },
      [e, t],
    )
  )
}
function _d(e) {
  gt(!1)
}
function ME(e) {
  let {
    basename: t = '/',
    children: n = null,
    location: r,
    navigationType: i = ni.Pop,
    navigator: o,
    static: a = !1,
    future: s,
  } = e
  Ks() && gt(!1)
  let l = t.replace(/^\/*/, '/'),
    u = p.useMemo(
      () => ({
        basename: l,
        navigator: o,
        static: a,
        future: xs({ v7_relativeSplatPath: !1 }, s),
      }),
      [l, s, o, a],
    )
  typeof r == 'string' && (r = ca(r))
  let {
      pathname: c = '/',
      search: f = '',
      hash: d = '',
      state: g = null,
      key: y = 'default',
    } = r,
    S = p.useMemo(() => {
      let C = Mh(c, l)
      return C == null
        ? null
        : {
            location: { pathname: C, search: f, hash: d, state: g, key: y },
            navigationType: i,
          }
    }, [l, c, f, d, g, y, i])
  return S == null
    ? null
    : p.createElement(
        no.Provider,
        { value: u },
        p.createElement(fc.Provider, { children: n, value: S }),
      )
}
function Eg(e) {
  let { children: t, location: n } = e
  return CE(Ld(t), n)
}
new Promise(() => {})
function Ld(e, t) {
  t === void 0 && (t = [])
  let n = []
  return (
    p.Children.forEach(e, (r, i) => {
      if (!p.isValidElement(r)) return
      let o = [...t, i]
      if (r.type === p.Fragment) {
        n.push.apply(n, Ld(r.props.children, o))
        return
      }
      r.type !== _d && gt(!1), !r.props.index || !r.props.children || gt(!1)
      let a = {
        id: r.props.id || o.join('-'),
        caseSensitive: r.props.caseSensitive,
        element: r.props.element,
        Component: r.props.Component,
        index: r.props.index,
        path: r.props.path,
        loader: r.props.loader,
        action: r.props.action,
        errorElement: r.props.errorElement,
        ErrorBoundary: r.props.ErrorBoundary,
        hasErrorBoundary:
          r.props.ErrorBoundary != null || r.props.errorElement != null,
        shouldRevalidate: r.props.shouldRevalidate,
        handle: r.props.handle,
        lazy: r.props.lazy,
      }
      r.props.children && (a.children = Ld(r.props.children, o)), n.push(a)
    }),
    n
  )
}
/**
 * React Router DOM v6.27.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ad() {
  return (
    (Ad = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    Ad.apply(this, arguments)
  )
}
function NE(e, t) {
  if (e == null) return {}
  var n = {},
    r = Object.keys(e),
    i,
    o
  for (o = 0; o < r.length; o++)
    (i = r[o]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
  return n
}
function _E(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function LE(e, t) {
  return e.button === 0 && (!t || t === '_self') && !_E(e)
}
const AE = [
    'onClick',
    'relative',
    'reloadDocument',
    'replace',
    'state',
    'target',
    'to',
    'preventScrollReset',
    'viewTransition',
  ],
  FE = '6'
try {
  window.__reactRouterVersion = FE
} catch {}
const jE = 'startTransition',
  Pg = Ds[jE]
function zE(e) {
  let { basename: t, children: n, future: r, window: i } = e,
    o = p.useRef()
  o.current == null && (o.current = K2({ window: i, v5Compat: !0 }))
  let a = o.current,
    [s, l] = p.useState({ action: a.action, location: a.location }),
    { v7_startTransition: u } = r || {},
    c = p.useCallback(
      (f) => {
        u && Pg ? Pg(() => l(f)) : l(f)
      },
      [l, u],
    )
  return (
    p.useLayoutEffect(() => a.listen(c), [a, c]),
    p.createElement(ME, {
      basename: t,
      children: n,
      location: s.location,
      navigationType: s.action,
      navigator: a,
      future: r,
    })
  )
}
const DE =
    typeof window < 'u' &&
    typeof window.document < 'u' &&
    typeof window.document.createElement < 'u',
  HE = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  kg = p.forwardRef(function (t, n) {
    let {
        onClick: r,
        relative: i,
        reloadDocument: o,
        replace: a,
        state: s,
        target: l,
        to: u,
        preventScrollReset: c,
        viewTransition: f,
      } = t,
      d = NE(t, AE),
      { basename: g } = p.useContext(no),
      y,
      S = !1
    if (typeof u == 'string' && HE.test(u) && ((y = u), DE))
      try {
        let m = new URL(window.location.href),
          w = u.startsWith('//') ? new URL(m.protocol + u) : new URL(u),
          b = Mh(w.pathname, g)
        w.origin === m.origin && b != null
          ? (u = b + w.search + w.hash)
          : (S = !0)
      } catch {}
    let C = yE(u, { relative: i }),
      v = VE(u, {
        replace: a,
        state: s,
        target: l,
        preventScrollReset: c,
        relative: i,
        viewTransition: f,
      })
    function h(m) {
      r && r(m), m.defaultPrevented || v(m)
    }
    return p.createElement(
      'a',
      Ad({}, d, { href: y || C, onClick: S || o ? r : h, ref: n, target: l }),
    )
  })
var Tg
;(function (e) {
  ;(e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState')
})(Tg || (Tg = {}))
var Og
;(function (e) {
  ;(e.UseFetcher = 'useFetcher'),
    (e.UseFetchers = 'useFetchers'),
    (e.UseScrollRestoration = 'useScrollRestoration')
})(Og || (Og = {}))
function VE(e, t) {
  let {
      target: n,
      replace: r,
      state: i,
      preventScrollReset: o,
      relative: a,
      viewTransition: s,
    } = t === void 0 ? {} : t,
    l = rS(),
    u = fa(),
    c = iS(e, { relative: a })
  return p.useCallback(
    (f) => {
      if (LE(f, n)) {
        f.preventDefault()
        let d = r !== void 0 ? r : $u(u) === $u(c)
        l(e, {
          replace: d,
          state: i,
          preventScrollReset: o,
          relative: a,
          viewTransition: s,
        })
      }
    },
    [u, l, c, r, i, n, e, o, a, s],
  )
}
const BE = 'modulepreload',
  UE = function (e) {
    return '/' + e
  },
  Rg = {},
  WE = function (t, n, r) {
    let i = Promise.resolve()
    if (n && n.length > 0) {
      document.getElementsByTagName('link')
      const a = document.querySelector('meta[property=csp-nonce]'),
        s =
          (a == null ? void 0 : a.nonce) ||
          (a == null ? void 0 : a.getAttribute('nonce'))
      i = Promise.allSettled(
        n.map((l) => {
          if (((l = UE(l)), l in Rg)) return
          Rg[l] = !0
          const u = l.endsWith('.css'),
            c = u ? '[rel="stylesheet"]' : ''
          if (document.querySelector(`link[href="${l}"]${c}`)) return
          const f = document.createElement('link')
          if (
            ((f.rel = u ? 'stylesheet' : BE),
            u || (f.as = 'script'),
            (f.crossOrigin = ''),
            (f.href = l),
            s && f.setAttribute('nonce', s),
            document.head.appendChild(f),
            u)
          )
            return new Promise((d, g) => {
              f.addEventListener('load', d),
                f.addEventListener('error', () =>
                  g(new Error(`Unable to preload CSS for ${l}`)),
                )
            })
        }),
      )
    }
    function o(a) {
      const s = new Event('vite:preloadError', { cancelable: !0 })
      if (((s.payload = a), window.dispatchEvent(s), !s.defaultPrevented))
        throw a
    }
    return i.then((a) => {
      for (const s of a || []) s.status === 'rejected' && o(s.reason)
      return t().catch(o)
    })
  }
var sS = { exports: {} }
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ ;(function (e) {
  ;(function () {
    var t = {}.hasOwnProperty
    function n() {
      for (var o = '', a = 0; a < arguments.length; a++) {
        var s = arguments[a]
        s && (o = i(o, r(s)))
      }
      return o
    }
    function r(o) {
      if (typeof o == 'string' || typeof o == 'number') return o
      if (typeof o != 'object') return ''
      if (Array.isArray(o)) return n.apply(null, o)
      if (
        o.toString !== Object.prototype.toString &&
        !o.toString.toString().includes('[native code]')
      )
        return o.toString()
      var a = ''
      for (var s in o) t.call(o, s) && o[s] && (a = i(a, s))
      return a
    }
    function i(o, a) {
      return a ? (o ? o + ' ' + a : o + a) : o
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n)
  })()
})(sS)
var KE = sS.exports
const oe = Ji(KE)
function ce() {
  return (
    (ce = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t]
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r])
          }
          return e
        }),
    ce.apply(null, arguments)
  )
}
var lS = { exports: {} },
  $e = {}
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _h = Symbol.for('react.element'),
  Lh = Symbol.for('react.portal'),
  dc = Symbol.for('react.fragment'),
  pc = Symbol.for('react.strict_mode'),
  hc = Symbol.for('react.profiler'),
  mc = Symbol.for('react.provider'),
  gc = Symbol.for('react.context'),
  qE = Symbol.for('react.server_context'),
  vc = Symbol.for('react.forward_ref'),
  yc = Symbol.for('react.suspense'),
  Sc = Symbol.for('react.suspense_list'),
  Cc = Symbol.for('react.memo'),
  wc = Symbol.for('react.lazy'),
  GE = Symbol.for('react.offscreen'),
  uS
uS = Symbol.for('react.module.reference')
function Hn(e) {
  if (typeof e == 'object' && e !== null) {
    var t = e.$$typeof
    switch (t) {
      case _h:
        switch (((e = e.type), e)) {
          case dc:
          case hc:
          case pc:
          case yc:
          case Sc:
            return e
          default:
            switch (((e = e && e.$$typeof), e)) {
              case qE:
              case gc:
              case vc:
              case wc:
              case Cc:
              case mc:
                return e
              default:
                return t
            }
        }
      case Lh:
        return t
    }
  }
}
$e.ContextConsumer = gc
$e.ContextProvider = mc
$e.Element = _h
$e.ForwardRef = vc
$e.Fragment = dc
$e.Lazy = wc
$e.Memo = Cc
$e.Portal = Lh
$e.Profiler = hc
$e.StrictMode = pc
$e.Suspense = yc
$e.SuspenseList = Sc
$e.isAsyncMode = function () {
  return !1
}
$e.isConcurrentMode = function () {
  return !1
}
$e.isContextConsumer = function (e) {
  return Hn(e) === gc
}
$e.isContextProvider = function (e) {
  return Hn(e) === mc
}
$e.isElement = function (e) {
  return typeof e == 'object' && e !== null && e.$$typeof === _h
}
$e.isForwardRef = function (e) {
  return Hn(e) === vc
}
$e.isFragment = function (e) {
  return Hn(e) === dc
}
$e.isLazy = function (e) {
  return Hn(e) === wc
}
$e.isMemo = function (e) {
  return Hn(e) === Cc
}
$e.isPortal = function (e) {
  return Hn(e) === Lh
}
$e.isProfiler = function (e) {
  return Hn(e) === hc
}
$e.isStrictMode = function (e) {
  return Hn(e) === pc
}
$e.isSuspense = function (e) {
  return Hn(e) === yc
}
$e.isSuspenseList = function (e) {
  return Hn(e) === Sc
}
$e.isValidElementType = function (e) {
  return (
    typeof e == 'string' ||
    typeof e == 'function' ||
    e === dc ||
    e === hc ||
    e === pc ||
    e === yc ||
    e === Sc ||
    e === GE ||
    (typeof e == 'object' &&
      e !== null &&
      (e.$$typeof === wc ||
        e.$$typeof === Cc ||
        e.$$typeof === mc ||
        e.$$typeof === gc ||
        e.$$typeof === vc ||
        e.$$typeof === uS ||
        e.getModuleId !== void 0))
  )
}
$e.typeOf = Hn
lS.exports = $e
var Ya = lS.exports
function Qi(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = []
  return (
    ze.Children.forEach(e, function (r) {
      ;(r == null && !t.keepEmpty) ||
        (Array.isArray(r)
          ? (n = n.concat(Qi(r)))
          : Ya.isFragment(r) && r.props
            ? (n = n.concat(Qi(r.props.children, t)))
            : n.push(r))
    }),
    n
  )
}
var Fd = {},
  XE = function (t) {}
function QE(e, t) {}
function YE(e, t) {}
function ZE() {
  Fd = {}
}
function cS(e, t, n) {
  !t && !Fd[n] && (e(!1, n), (Fd[n] = !0))
}
function tn(e, t) {
  cS(QE, e, t)
}
function JE(e, t) {
  cS(YE, e, t)
}
tn.preMessage = XE
tn.resetWarned = ZE
tn.noteOnce = JE
function ae(e) {
  '@babel/helpers - typeof'
  return (
    (ae =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t
          }
        : function (t) {
            return t &&
              typeof Symbol == 'function' &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? 'symbol'
              : typeof t
          }),
    ae(e)
  )
}
function eP(e, t) {
  if (ae(e) != 'object' || !e) return e
  var n = e[Symbol.toPrimitive]
  if (n !== void 0) {
    var r = n.call(e, t || 'default')
    if (ae(r) != 'object') return r
    throw new TypeError('@@toPrimitive must return a primitive value.')
  }
  return (t === 'string' ? String : Number)(e)
}
function fS(e) {
  var t = eP(e, 'string')
  return ae(t) == 'symbol' ? t : t + ''
}
function $(e, t, n) {
  return (
    (t = fS(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Ig(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (i) {
        return Object.getOwnPropertyDescriptor(e, i).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function _(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {}
    t % 2
      ? Ig(Object(n), !0).forEach(function (r) {
          $(e, r, n[r])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ig(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r))
          })
  }
  return e
}
function Es(e) {
  return e instanceof HTMLElement || e instanceof SVGElement
}
function tP(e) {
  return e && ae(e) === 'object' && Es(e.nativeElement)
    ? e.nativeElement
    : Es(e)
      ? e
      : null
}
function Ql(e) {
  var t = tP(e)
  if (t) return t
  if (e instanceof ze.Component) {
    var n
    return (n = Iu.findDOMNode) === null || n === void 0
      ? void 0
      : n.call(Iu, e)
  }
  return null
}
function bc(e, t, n) {
  var r = p.useRef({})
  return (
    (!('value' in r.current) || n(r.current.condition, t)) &&
      ((r.current.value = e()), (r.current.condition = t)),
    r.current.value
  )
}
var Ah = function (t, n) {
    typeof t == 'function'
      ? t(n)
      : ae(t) === 'object' && t && 'current' in t && (t.current = n)
  },
  dS = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    var i = n.filter(Boolean)
    return i.length <= 1
      ? i[0]
      : function (o) {
          n.forEach(function (a) {
            Ah(a, o)
          })
        }
  },
  xc = function () {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return bc(
      function () {
        return dS.apply(void 0, n)
      },
      n,
      function (i, o) {
        return (
          i.length !== o.length ||
          i.every(function (a, s) {
            return a !== o[s]
          })
        )
      },
    )
  },
  Ec = function (t) {
    var n,
      r,
      i = Ya.isMemo(t) ? t.type.type : t.type
    return !(
      (typeof i == 'function' &&
        !((n = i.prototype) !== null && n !== void 0 && n.render) &&
        i.$$typeof !== Ya.ForwardRef) ||
      (typeof t == 'function' &&
        !((r = t.prototype) !== null && r !== void 0 && r.render) &&
        t.$$typeof !== Ya.ForwardRef)
    )
  }
function $g(e) {
  return p.isValidElement(e) && !Ya.isFragment(e)
}
Number(p.version.split('.')[0]) >= 19
var jd = p.createContext(null)
function nP(e) {
  var t = e.children,
    n = e.onBatchResize,
    r = p.useRef(0),
    i = p.useRef([]),
    o = p.useContext(jd),
    a = p.useCallback(
      function (s, l, u) {
        r.current += 1
        var c = r.current
        i.current.push({ size: s, element: l, data: u }),
          Promise.resolve().then(function () {
            c === r.current && (n == null || n(i.current), (i.current = []))
          }),
          o == null || o(s, l, u)
      },
      [n, o],
    )
  return p.createElement(jd.Provider, { value: a }, t)
}
var pS = (function () {
    if (typeof Map < 'u') return Map
    function e(t, n) {
      var r = -1
      return (
        t.some(function (i, o) {
          return i[0] === n ? ((r = o), !0) : !1
        }),
        r
      )
    }
    return (function () {
      function t() {
        this.__entries__ = []
      }
      return (
        Object.defineProperty(t.prototype, 'size', {
          get: function () {
            return this.__entries__.length
          },
          enumerable: !0,
          configurable: !0,
        }),
        (t.prototype.get = function (n) {
          var r = e(this.__entries__, n),
            i = this.__entries__[r]
          return i && i[1]
        }),
        (t.prototype.set = function (n, r) {
          var i = e(this.__entries__, n)
          ~i ? (this.__entries__[i][1] = r) : this.__entries__.push([n, r])
        }),
        (t.prototype.delete = function (n) {
          var r = this.__entries__,
            i = e(r, n)
          ~i && r.splice(i, 1)
        }),
        (t.prototype.has = function (n) {
          return !!~e(this.__entries__, n)
        }),
        (t.prototype.clear = function () {
          this.__entries__.splice(0)
        }),
        (t.prototype.forEach = function (n, r) {
          r === void 0 && (r = null)
          for (var i = 0, o = this.__entries__; i < o.length; i++) {
            var a = o[i]
            n.call(r, a[1], a[0])
          }
        }),
        t
      )
    })()
  })(),
  zd =
    typeof window < 'u' &&
    typeof document < 'u' &&
    window.document === document,
  Nu = (function () {
    return typeof global < 'u' && global.Math === Math
      ? global
      : typeof self < 'u' && self.Math === Math
        ? self
        : typeof window < 'u' && window.Math === Math
          ? window
          : Function('return this')()
  })(),
  rP = (function () {
    return typeof requestAnimationFrame == 'function'
      ? requestAnimationFrame.bind(Nu)
      : function (e) {
          return setTimeout(function () {
            return e(Date.now())
          }, 1e3 / 60)
        }
  })(),
  iP = 2
function oP(e, t) {
  var n = !1,
    r = !1,
    i = 0
  function o() {
    n && ((n = !1), e()), r && s()
  }
  function a() {
    rP(o)
  }
  function s() {
    var l = Date.now()
    if (n) {
      if (l - i < iP) return
      r = !0
    } else (n = !0), (r = !1), setTimeout(a, t)
    i = l
  }
  return s
}
var aP = 20,
  sP = ['top', 'right', 'bottom', 'left', 'width', 'height', 'size', 'weight'],
  lP = typeof MutationObserver < 'u',
  uP = (function () {
    function e() {
      ;(this.connected_ = !1),
        (this.mutationEventsAdded_ = !1),
        (this.mutationsObserver_ = null),
        (this.observers_ = []),
        (this.onTransitionEnd_ = this.onTransitionEnd_.bind(this)),
        (this.refresh = oP(this.refresh.bind(this), aP))
    }
    return (
      (e.prototype.addObserver = function (t) {
        ~this.observers_.indexOf(t) || this.observers_.push(t),
          this.connected_ || this.connect_()
      }),
      (e.prototype.removeObserver = function (t) {
        var n = this.observers_,
          r = n.indexOf(t)
        ~r && n.splice(r, 1), !n.length && this.connected_ && this.disconnect_()
      }),
      (e.prototype.refresh = function () {
        var t = this.updateObservers_()
        t && this.refresh()
      }),
      (e.prototype.updateObservers_ = function () {
        var t = this.observers_.filter(function (n) {
          return n.gatherActive(), n.hasActive()
        })
        return (
          t.forEach(function (n) {
            return n.broadcastActive()
          }),
          t.length > 0
        )
      }),
      (e.prototype.connect_ = function () {
        !zd ||
          this.connected_ ||
          (document.addEventListener('transitionend', this.onTransitionEnd_),
          window.addEventListener('resize', this.refresh),
          lP
            ? ((this.mutationsObserver_ = new MutationObserver(this.refresh)),
              this.mutationsObserver_.observe(document, {
                attributes: !0,
                childList: !0,
                characterData: !0,
                subtree: !0,
              }))
            : (document.addEventListener('DOMSubtreeModified', this.refresh),
              (this.mutationEventsAdded_ = !0)),
          (this.connected_ = !0))
      }),
      (e.prototype.disconnect_ = function () {
        !zd ||
          !this.connected_ ||
          (document.removeEventListener('transitionend', this.onTransitionEnd_),
          window.removeEventListener('resize', this.refresh),
          this.mutationsObserver_ && this.mutationsObserver_.disconnect(),
          this.mutationEventsAdded_ &&
            document.removeEventListener('DOMSubtreeModified', this.refresh),
          (this.mutationsObserver_ = null),
          (this.mutationEventsAdded_ = !1),
          (this.connected_ = !1))
      }),
      (e.prototype.onTransitionEnd_ = function (t) {
        var n = t.propertyName,
          r = n === void 0 ? '' : n,
          i = sP.some(function (o) {
            return !!~r.indexOf(o)
          })
        i && this.refresh()
      }),
      (e.getInstance = function () {
        return this.instance_ || (this.instance_ = new e()), this.instance_
      }),
      (e.instance_ = null),
      e
    )
  })(),
  hS = function (e, t) {
    for (var n = 0, r = Object.keys(t); n < r.length; n++) {
      var i = r[n]
      Object.defineProperty(e, i, {
        value: t[i],
        enumerable: !1,
        writable: !1,
        configurable: !0,
      })
    }
    return e
  },
  na = function (e) {
    var t = e && e.ownerDocument && e.ownerDocument.defaultView
    return t || Nu
  },
  mS = Pc(0, 0, 0, 0)
function _u(e) {
  return parseFloat(e) || 0
}
function Mg(e) {
  for (var t = [], n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
  return t.reduce(function (r, i) {
    var o = e['border-' + i + '-width']
    return r + _u(o)
  }, 0)
}
function cP(e) {
  for (
    var t = ['top', 'right', 'bottom', 'left'], n = {}, r = 0, i = t;
    r < i.length;
    r++
  ) {
    var o = i[r],
      a = e['padding-' + o]
    n[o] = _u(a)
  }
  return n
}
function fP(e) {
  var t = e.getBBox()
  return Pc(0, 0, t.width, t.height)
}
function dP(e) {
  var t = e.clientWidth,
    n = e.clientHeight
  if (!t && !n) return mS
  var r = na(e).getComputedStyle(e),
    i = cP(r),
    o = i.left + i.right,
    a = i.top + i.bottom,
    s = _u(r.width),
    l = _u(r.height)
  if (
    (r.boxSizing === 'border-box' &&
      (Math.round(s + o) !== t && (s -= Mg(r, 'left', 'right') + o),
      Math.round(l + a) !== n && (l -= Mg(r, 'top', 'bottom') + a)),
    !hP(e))
  ) {
    var u = Math.round(s + o) - t,
      c = Math.round(l + a) - n
    Math.abs(u) !== 1 && (s -= u), Math.abs(c) !== 1 && (l -= c)
  }
  return Pc(i.left, i.top, s, l)
}
var pP = (function () {
  return typeof SVGGraphicsElement < 'u'
    ? function (e) {
        return e instanceof na(e).SVGGraphicsElement
      }
    : function (e) {
        return e instanceof na(e).SVGElement && typeof e.getBBox == 'function'
      }
})()
function hP(e) {
  return e === na(e).document.documentElement
}
function mP(e) {
  return zd ? (pP(e) ? fP(e) : dP(e)) : mS
}
function gP(e) {
  var t = e.x,
    n = e.y,
    r = e.width,
    i = e.height,
    o = typeof DOMRectReadOnly < 'u' ? DOMRectReadOnly : Object,
    a = Object.create(o.prototype)
  return (
    hS(a, {
      x: t,
      y: n,
      width: r,
      height: i,
      top: n,
      right: t + r,
      bottom: i + n,
      left: t,
    }),
    a
  )
}
function Pc(e, t, n, r) {
  return { x: e, y: t, width: n, height: r }
}
var vP = (function () {
    function e(t) {
      ;(this.broadcastWidth = 0),
        (this.broadcastHeight = 0),
        (this.contentRect_ = Pc(0, 0, 0, 0)),
        (this.target = t)
    }
    return (
      (e.prototype.isActive = function () {
        var t = mP(this.target)
        return (
          (this.contentRect_ = t),
          t.width !== this.broadcastWidth || t.height !== this.broadcastHeight
        )
      }),
      (e.prototype.broadcastRect = function () {
        var t = this.contentRect_
        return (
          (this.broadcastWidth = t.width), (this.broadcastHeight = t.height), t
        )
      }),
      e
    )
  })(),
  yP = (function () {
    function e(t, n) {
      var r = gP(n)
      hS(this, { target: t, contentRect: r })
    }
    return e
  })(),
  SP = (function () {
    function e(t, n, r) {
      if (
        ((this.activeObservations_ = []),
        (this.observations_ = new pS()),
        typeof t != 'function')
      )
        throw new TypeError(
          'The callback provided as parameter 1 is not a function.',
        )
      ;(this.callback_ = t), (this.controller_ = n), (this.callbackCtx_ = r)
    }
    return (
      (e.prototype.observe = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof na(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var n = this.observations_
          n.has(t) ||
            (n.set(t, new vP(t)),
            this.controller_.addObserver(this),
            this.controller_.refresh())
        }
      }),
      (e.prototype.unobserve = function (t) {
        if (!arguments.length)
          throw new TypeError('1 argument required, but only 0 present.')
        if (!(typeof Element > 'u' || !(Element instanceof Object))) {
          if (!(t instanceof na(t).Element))
            throw new TypeError('parameter 1 is not of type "Element".')
          var n = this.observations_
          n.has(t) &&
            (n.delete(t), n.size || this.controller_.removeObserver(this))
        }
      }),
      (e.prototype.disconnect = function () {
        this.clearActive(),
          this.observations_.clear(),
          this.controller_.removeObserver(this)
      }),
      (e.prototype.gatherActive = function () {
        var t = this
        this.clearActive(),
          this.observations_.forEach(function (n) {
            n.isActive() && t.activeObservations_.push(n)
          })
      }),
      (e.prototype.broadcastActive = function () {
        if (this.hasActive()) {
          var t = this.callbackCtx_,
            n = this.activeObservations_.map(function (r) {
              return new yP(r.target, r.broadcastRect())
            })
          this.callback_.call(t, n, t), this.clearActive()
        }
      }),
      (e.prototype.clearActive = function () {
        this.activeObservations_.splice(0)
      }),
      (e.prototype.hasActive = function () {
        return this.activeObservations_.length > 0
      }),
      e
    )
  })(),
  gS = typeof WeakMap < 'u' ? new WeakMap() : new pS(),
  vS = (function () {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError('Cannot call a class as a function.')
      if (!arguments.length)
        throw new TypeError('1 argument required, but only 0 present.')
      var n = uP.getInstance(),
        r = new SP(t, n, this)
      gS.set(this, r)
    }
    return e
  })()
;['observe', 'unobserve', 'disconnect'].forEach(function (e) {
  vS.prototype[e] = function () {
    var t
    return (t = gS.get(this))[e].apply(t, arguments)
  }
})
var CP = (function () {
    return typeof Nu.ResizeObserver < 'u' ? Nu.ResizeObserver : vS
  })(),
  ri = new Map()
function wP(e) {
  e.forEach(function (t) {
    var n,
      r = t.target
    ;(n = ri.get(r)) === null ||
      n === void 0 ||
      n.forEach(function (i) {
        return i(r)
      })
  })
}
var yS = new CP(wP)
function bP(e, t) {
  ri.has(e) || (ri.set(e, new Set()), yS.observe(e)), ri.get(e).add(t)
}
function xP(e, t) {
  ri.has(e) &&
    (ri.get(e).delete(t), ri.get(e).size || (yS.unobserve(e), ri.delete(e)))
}
function Vt(e, t) {
  if (!(e instanceof t))
    throw new TypeError('Cannot call a class as a function')
}
function Ng(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n]
    ;(r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      'value' in r && (r.writable = !0),
      Object.defineProperty(e, fS(r.key), r)
  }
}
function Bt(e, t, n) {
  return (
    t && Ng(e.prototype, t),
    n && Ng(e, n),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    e
  )
}
function Ps(e, t) {
  return (
    (Ps = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (n, r) {
          return (n.__proto__ = r), n
        }),
    Ps(e, t)
  )
}
function wi(e, t) {
  if (typeof t != 'function' && t !== null)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Ps(e, t)
}
function ks(e) {
  return (
    (ks = Object.setPrototypeOf
      ? Object.getPrototypeOf.bind()
      : function (t) {
          return t.__proto__ || Object.getPrototypeOf(t)
        }),
    ks(e)
  )
}
function Fh() {
  try {
    var e = !Boolean.prototype.valueOf.call(
      Reflect.construct(Boolean, [], function () {}),
    )
  } catch {}
  return (Fh = function () {
    return !!e
  })()
}
function ue(e) {
  if (e === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    )
  return e
}
function EP(e, t) {
  if (t && (ae(t) == 'object' || typeof t == 'function')) return t
  if (t !== void 0)
    throw new TypeError(
      'Derived constructors may only return object or undefined',
    )
  return ue(e)
}
function bi(e) {
  var t = Fh()
  return function () {
    var n,
      r = ks(e)
    if (t) {
      var i = ks(this).constructor
      n = Reflect.construct(r, arguments, i)
    } else n = r.apply(this, arguments)
    return EP(this, n)
  }
}
var PP = (function (e) {
  wi(n, e)
  var t = bi(n)
  function n() {
    return Vt(this, n), t.apply(this, arguments)
  }
  return (
    Bt(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children
        },
      },
    ]),
    n
  )
})(p.Component)
function kP(e, t) {
  var n = e.children,
    r = e.disabled,
    i = p.useRef(null),
    o = p.useRef(null),
    a = p.useContext(jd),
    s = typeof n == 'function',
    l = s ? n(i) : n,
    u = p.useRef({ width: -1, height: -1, offsetWidth: -1, offsetHeight: -1 }),
    c = !s && p.isValidElement(l) && Ec(l),
    f = c ? l.ref : null,
    d = xc(f, i),
    g = function () {
      var v
      return (
        Ql(i.current) ||
        (i.current && ae(i.current) === 'object'
          ? Ql(
              (v = i.current) === null || v === void 0
                ? void 0
                : v.nativeElement,
            )
          : null) ||
        Ql(o.current)
      )
    }
  p.useImperativeHandle(t, function () {
    return g()
  })
  var y = p.useRef(e)
  y.current = e
  var S = p.useCallback(function (C) {
    var v = y.current,
      h = v.onResize,
      m = v.data,
      w = C.getBoundingClientRect(),
      b = w.width,
      x = w.height,
      E = C.offsetWidth,
      k = C.offsetHeight,
      O = Math.floor(b),
      I = Math.floor(x)
    if (
      u.current.width !== O ||
      u.current.height !== I ||
      u.current.offsetWidth !== E ||
      u.current.offsetHeight !== k
    ) {
      var L = { width: O, height: I, offsetWidth: E, offsetHeight: k }
      u.current = L
      var z = E === Math.round(b) ? b : E,
        A = k === Math.round(x) ? x : k,
        F = _(_({}, L), {}, { offsetWidth: z, offsetHeight: A })
      a == null || a(F, C, m),
        h &&
          Promise.resolve().then(function () {
            h(F, C)
          })
    }
  }, [])
  return (
    p.useEffect(
      function () {
        var C = g()
        return (
          C && !r && bP(C, S),
          function () {
            return xP(C, S)
          }
        )
      },
      [i.current, r],
    ),
    p.createElement(PP, { ref: o }, c ? p.cloneElement(l, { ref: d }) : l)
  )
}
var TP = p.forwardRef(kP),
  OP = 'rc-observer-key'
function RP(e, t) {
  var n = e.children,
    r = typeof n == 'function' ? [n] : Qi(n)
  return r.map(function (i, o) {
    var a = (i == null ? void 0 : i.key) || ''.concat(OP, '-').concat(o)
    return p.createElement(
      TP,
      ce({}, e, { key: a, ref: o === 0 ? t : void 0 }),
      i,
    )
  })
}
var qs = p.forwardRef(RP)
qs.Collection = nP
function io(e, t) {
  var n = Object.assign({}, e)
  return (
    Array.isArray(t) &&
      t.forEach(function (r) {
        delete n[r]
      }),
    n
  )
}
function Dd(e, t) {
  ;(t == null || t > e.length) && (t = e.length)
  for (var n = 0, r = Array(t); n < t; n++) r[n] = e[n]
  return r
}
function IP(e) {
  if (Array.isArray(e)) return Dd(e)
}
function SS(e) {
  if (
    (typeof Symbol < 'u' && e[Symbol.iterator] != null) ||
    e['@@iterator'] != null
  )
    return Array.from(e)
}
function jh(e, t) {
  if (e) {
    if (typeof e == 'string') return Dd(e, t)
    var n = {}.toString.call(e).slice(8, -1)
    return (
      n === 'Object' && e.constructor && (n = e.constructor.name),
      n === 'Map' || n === 'Set'
        ? Array.from(e)
        : n === 'Arguments' ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? Dd(e, t)
          : void 0
    )
  }
}
function $P() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function J(e) {
  return IP(e) || SS(e) || jh(e) || $P()
}
var CS = function (t) {
    return +setTimeout(t, 16)
  },
  wS = function (t) {
    return clearTimeout(t)
  }
typeof window < 'u' &&
  'requestAnimationFrame' in window &&
  ((CS = function (t) {
    return window.requestAnimationFrame(t)
  }),
  (wS = function (t) {
    return window.cancelAnimationFrame(t)
  }))
var _g = 0,
  zh = new Map()
function bS(e) {
  zh.delete(e)
}
var Mr = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  _g += 1
  var r = _g
  function i(o) {
    if (o === 0) bS(r), t()
    else {
      var a = CS(function () {
        i(o - 1)
      })
      zh.set(r, a)
    }
  }
  return i(n), r
}
Mr.cancel = function (e) {
  var t = zh.get(e)
  return bS(e), wS(t)
}
function xS(e) {
  if (Array.isArray(e)) return e
}
function MP(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < 'u' && e[Symbol.iterator]) || e['@@iterator']
  if (n != null) {
    var r,
      i,
      o,
      a,
      s = [],
      l = !0,
      u = !1
    try {
      if (((o = (n = n.call(e)).next), t === 0)) {
        if (Object(n) !== n) return
        l = !1
      } else
        for (
          ;
          !(l = (r = o.call(n)).done) && (s.push(r.value), s.length !== t);
          l = !0
        );
    } catch (c) {
      ;(u = !0), (i = c)
    } finally {
      try {
        if (!l && n.return != null && ((a = n.return()), Object(a) !== a))
          return
      } finally {
        if (u) throw i
      }
    }
    return s
  }
}
function ES() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
}
function B(e, t) {
  return xS(e) || MP(e, t) || jh(e, t) || ES()
}
function Ts(e) {
  for (var t = 0, n, r = 0, i = e.length; i >= 4; ++r, i -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)))
  switch (i) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8
    case 1:
      ;(t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16))
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  )
}
function Pn() {
  return !!(
    typeof window < 'u' &&
    window.document &&
    window.document.createElement
  )
}
function NP(e, t) {
  if (!e) return !1
  if (e.contains) return e.contains(t)
  for (var n = t; n; ) {
    if (n === e) return !0
    n = n.parentNode
  }
  return !1
}
var Lg = 'data-rc-order',
  Ag = 'data-rc-priority',
  _P = 'rc-util-key',
  Hd = new Map()
function PS() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
    t = e.mark
  return t ? (t.startsWith('data-') ? t : 'data-'.concat(t)) : _P
}
function kc(e) {
  if (e.attachTo) return e.attachTo
  var t = document.querySelector('head')
  return t || document.body
}
function LP(e) {
  return e === 'queue' ? 'prependQueue' : e ? 'prepend' : 'append'
}
function Dh(e) {
  return Array.from((Hd.get(e) || e).children).filter(function (t) {
    return t.tagName === 'STYLE'
  })
}
function kS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
  if (!Pn()) return null
  var n = t.csp,
    r = t.prepend,
    i = t.priority,
    o = i === void 0 ? 0 : i,
    a = LP(r),
    s = a === 'prependQueue',
    l = document.createElement('style')
  l.setAttribute(Lg, a),
    s && o && l.setAttribute(Ag, ''.concat(o)),
    n != null && n.nonce && (l.nonce = n == null ? void 0 : n.nonce),
    (l.innerHTML = e)
  var u = kc(t),
    c = u.firstChild
  if (r) {
    if (s) {
      var f = (t.styles || Dh(u)).filter(function (d) {
        if (!['prepend', 'prependQueue'].includes(d.getAttribute(Lg))) return !1
        var g = Number(d.getAttribute(Ag) || 0)
        return o >= g
      })
      if (f.length) return u.insertBefore(l, f[f.length - 1].nextSibling), l
    }
    u.insertBefore(l, c)
  } else u.appendChild(l)
  return l
}
function TS(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = kc(t)
  return (t.styles || Dh(n)).find(function (r) {
    return r.getAttribute(PS(t)) === e
  })
}
function Os(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = TS(e, t)
  if (n) {
    var r = kc(t)
    r.removeChild(n)
  }
}
function AP(e, t) {
  var n = Hd.get(e)
  if (!n || !NP(document, n)) {
    var r = kS('', t),
      i = r.parentNode
    Hd.set(e, i), e.removeChild(r)
  }
}
function Nr(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = kc(n),
    i = Dh(r),
    o = _(_({}, n), {}, { styles: i })
  AP(r, o)
  var a = TS(t, o)
  if (a) {
    var s, l
    if (
      (s = o.csp) !== null &&
      s !== void 0 &&
      s.nonce &&
      a.nonce !== ((l = o.csp) === null || l === void 0 ? void 0 : l.nonce)
    ) {
      var u
      a.nonce = (u = o.csp) === null || u === void 0 ? void 0 : u.nonce
    }
    return a.innerHTML !== e && (a.innerHTML = e), a
  }
  var c = kS(e, o)
  return c.setAttribute(PS(o), t), c
}
function FP(e, t) {
  if (e == null) return {}
  var n = {}
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue
      n[r] = e[r]
    }
  return n
}
function De(e, t) {
  if (e == null) return {}
  var n,
    r,
    i = FP(e, t)
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e)
    for (r = 0; r < o.length; r++)
      (n = o[r]),
        t.includes(n) || ({}.propertyIsEnumerable.call(e, n) && (i[n] = e[n]))
  }
  return i
}
function Rs(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1,
    r = new Set()
  function i(o, a) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1,
      l = r.has(o)
    if ((tn(!l, 'Warning: There may be circular references'), l)) return !1
    if (o === a) return !0
    if (n && s > 1) return !1
    r.add(o)
    var u = s + 1
    if (Array.isArray(o)) {
      if (!Array.isArray(a) || o.length !== a.length) return !1
      for (var c = 0; c < o.length; c++) if (!i(o[c], a[c], u)) return !1
      return !0
    }
    if (o && a && ae(o) === 'object' && ae(a) === 'object') {
      var f = Object.keys(o)
      return f.length !== Object.keys(a).length
        ? !1
        : f.every(function (d) {
            return i(o[d], a[d], u)
          })
    }
    return !1
  }
  return i(e, t)
}
var jP = '%'
function Vd(e) {
  return e.join(jP)
}
var zP = (function () {
    function e(t) {
      Vt(this, e),
        $(this, 'instanceId', void 0),
        $(this, 'cache', new Map()),
        (this.instanceId = t)
    }
    return (
      Bt(e, [
        {
          key: 'get',
          value: function (n) {
            return this.opGet(Vd(n))
          },
        },
        {
          key: 'opGet',
          value: function (n) {
            return this.cache.get(n) || null
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            return this.opUpdate(Vd(n), r)
          },
        },
        {
          key: 'opUpdate',
          value: function (n, r) {
            var i = this.cache.get(n),
              o = r(i)
            o === null ? this.cache.delete(n) : this.cache.set(n, o)
          },
        },
      ]),
      e
    )
  })(),
  ra = 'data-token-hash',
  rr = 'data-css-hash',
  ii = '__cssinjs_instance__'
function DP() {
  var e = Math.random().toString(12).slice(2)
  if (typeof document < 'u' && document.head && document.body) {
    var t = document.body.querySelectorAll('style['.concat(rr, ']')) || [],
      n = document.head.firstChild
    Array.from(t).forEach(function (i) {
      ;(i[ii] = i[ii] || e), i[ii] === e && document.head.insertBefore(i, n)
    })
    var r = {}
    Array.from(document.querySelectorAll('style['.concat(rr, ']'))).forEach(
      function (i) {
        var o = i.getAttribute(rr)
        if (r[o]) {
          if (i[ii] === e) {
            var a
            ;(a = i.parentNode) === null || a === void 0 || a.removeChild(i)
          }
        } else r[o] = !0
      },
    )
  }
  return new zP(e)
}
var Tc = p.createContext({ hashPriority: 'low', cache: DP(), defaultCache: !0 })
function HP(e, t) {
  if (e.length !== t.length) return !1
  for (var n = 0; n < e.length; n++) if (e[n] !== t[n]) return !1
  return !0
}
var Hh = (function () {
  function e() {
    Vt(this, e),
      $(this, 'cache', void 0),
      $(this, 'keys', void 0),
      $(this, 'cacheCallTimes', void 0),
      (this.cache = new Map()),
      (this.keys = []),
      (this.cacheCallTimes = 0)
  }
  return (
    Bt(e, [
      {
        key: 'size',
        value: function () {
          return this.keys.length
        },
      },
      {
        key: 'internalGet',
        value: function (n) {
          var r,
            i,
            o =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : !1,
            a = { map: this.cache }
          return (
            n.forEach(function (s) {
              if (!a) a = void 0
              else {
                var l
                a =
                  (l = a) === null ||
                  l === void 0 ||
                  (l = l.map) === null ||
                  l === void 0
                    ? void 0
                    : l.get(s)
              }
            }),
            (r = a) !== null &&
              r !== void 0 &&
              r.value &&
              o &&
              (a.value[1] = this.cacheCallTimes++),
            (i = a) === null || i === void 0 ? void 0 : i.value
          )
        },
      },
      {
        key: 'get',
        value: function (n) {
          var r
          return (r = this.internalGet(n, !0)) === null || r === void 0
            ? void 0
            : r[0]
        },
      },
      {
        key: 'has',
        value: function (n) {
          return !!this.internalGet(n)
        },
      },
      {
        key: 'set',
        value: function (n, r) {
          var i = this
          if (!this.has(n)) {
            if (this.size() + 1 > e.MAX_CACHE_SIZE + e.MAX_CACHE_OFFSET) {
              var o = this.keys.reduce(
                  function (u, c) {
                    var f = B(u, 2),
                      d = f[1]
                    return i.internalGet(c)[1] < d
                      ? [c, i.internalGet(c)[1]]
                      : u
                  },
                  [this.keys[0], this.cacheCallTimes],
                ),
                a = B(o, 1),
                s = a[0]
              this.delete(s)
            }
            this.keys.push(n)
          }
          var l = this.cache
          n.forEach(function (u, c) {
            if (c === n.length - 1) l.set(u, { value: [r, i.cacheCallTimes++] })
            else {
              var f = l.get(u)
              f ? f.map || (f.map = new Map()) : l.set(u, { map: new Map() }),
                (l = l.get(u).map)
            }
          })
        },
      },
      {
        key: 'deleteByPath',
        value: function (n, r) {
          var i = n.get(r[0])
          if (r.length === 1) {
            var o
            return (
              i.map ? n.set(r[0], { map: i.map }) : n.delete(r[0]),
              (o = i.value) === null || o === void 0 ? void 0 : o[0]
            )
          }
          var a = this.deleteByPath(i.map, r.slice(1))
          return (!i.map || i.map.size === 0) && !i.value && n.delete(r[0]), a
        },
      },
      {
        key: 'delete',
        value: function (n) {
          if (this.has(n))
            return (
              (this.keys = this.keys.filter(function (r) {
                return !HP(r, n)
              })),
              this.deleteByPath(this.cache, n)
            )
        },
      },
    ]),
    e
  )
})()
$(Hh, 'MAX_CACHE_SIZE', 20)
$(Hh, 'MAX_CACHE_OFFSET', 5)
var Fg = 0,
  OS = (function () {
    function e(t) {
      Vt(this, e),
        $(this, 'derivatives', void 0),
        $(this, 'id', void 0),
        (this.derivatives = Array.isArray(t) ? t : [t]),
        (this.id = Fg),
        t.length === 0 && (t.length > 0, void 0),
        (Fg += 1)
    }
    return (
      Bt(e, [
        {
          key: 'getDerivativeToken',
          value: function (n) {
            return this.derivatives.reduce(
              function (r, i) {
                return i(n, r)
              },
              void 0,
            )
          },
        },
      ]),
      e
    )
  })(),
  vf = new Hh()
function Bd(e) {
  var t = Array.isArray(e) ? e : [e]
  return vf.has(t) || vf.set(t, new OS(t)), vf.get(t)
}
var VP = new WeakMap(),
  yf = {}
function BP(e, t) {
  for (var n = VP, r = 0; r < t.length; r += 1) {
    var i = t[r]
    n.has(i) || n.set(i, new WeakMap()), (n = n.get(i))
  }
  return n.has(yf) || n.set(yf, e()), n.get(yf)
}
var jg = new WeakMap()
function Za(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = jg.get(e) || ''
  return (
    n ||
      (Object.keys(e).forEach(function (r) {
        var i = e[r]
        ;(n += r),
          i instanceof OS
            ? (n += i.id)
            : i && ae(i) === 'object'
              ? (n += Za(i, t))
              : (n += i)
      }),
      t && (n = Ts(n)),
      jg.set(e, n)),
    n
  )
}
function zg(e, t) {
  return Ts(''.concat(t, '_').concat(Za(e, !0)))
}
var Ud = Pn()
function ye(e) {
  return typeof e == 'number' ? ''.concat(e, 'px') : e
}
function Lu(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
    i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
  if (i) return e
  var o = _(_({}, r), {}, $($({}, ra, t), rr, n)),
    a = Object.keys(o)
      .map(function (s) {
        var l = o[s]
        return l ? ''.concat(s, '="').concat(l, '"') : null
      })
      .filter(function (s) {
        return s
      })
      .join(' ')
  return '<style '.concat(a, '>').concat(e, '</style>')
}
var Yl = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    return '--'
      .concat(n ? ''.concat(n, '-') : '')
      .concat(t)
      .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
      .replace(/([A-Z]+)([A-Z][a-z0-9]+)/g, '$1-$2')
      .replace(/([a-z])([A-Z0-9])/g, '$1-$2')
      .toLowerCase()
  },
  UP = function (t, n, r) {
    return Object.keys(t).length
      ? '.'
          .concat(n)
          .concat(r != null && r.scope ? '.'.concat(r.scope) : '', '{')
          .concat(
            Object.entries(t)
              .map(function (i) {
                var o = B(i, 2),
                  a = o[0],
                  s = o[1]
                return ''.concat(a, ':').concat(s, ';')
              })
              .join(''),
            '}',
          )
      : ''
  },
  RS = function (t, n, r) {
    var i = {},
      o = {}
    return (
      Object.entries(t).forEach(function (a) {
        var s,
          l,
          u = B(a, 2),
          c = u[0],
          f = u[1]
        if (r != null && (s = r.preserve) !== null && s !== void 0 && s[c])
          o[c] = f
        else if (
          (typeof f == 'string' || typeof f == 'number') &&
          !(r != null && (l = r.ignore) !== null && l !== void 0 && l[c])
        ) {
          var d,
            g = Yl(c, r == null ? void 0 : r.prefix)
          ;(i[g] =
            typeof f == 'number' &&
            !(r != null && (d = r.unitless) !== null && d !== void 0 && d[c])
              ? ''.concat(f, 'px')
              : String(f)),
            (o[c] = 'var('.concat(g, ')'))
        }
      }),
      [o, UP(i, n, { scope: r == null ? void 0 : r.scope })]
    )
  },
  Dg = Pn() ? p.useLayoutEffect : p.useEffect,
  Ft = function (t, n) {
    var r = p.useRef(!0)
    Dg(function () {
      return t(r.current)
    }, n),
      Dg(function () {
        return (
          (r.current = !1),
          function () {
            r.current = !0
          }
        )
      }, [])
  },
  Hg = function (t, n) {
    Ft(function (r) {
      if (!r) return t()
    }, n)
  },
  WP = _({}, Ds),
  Vg = WP.useInsertionEffect,
  KP = function (t, n, r) {
    p.useMemo(t, r),
      Ft(function () {
        return n(!0)
      }, r)
  },
  qP = Vg
    ? function (e, t, n) {
        return Vg(function () {
          return e(), t()
        }, n)
      }
    : KP,
  GP = _({}, Ds),
  XP = GP.useInsertionEffect,
  QP = function (t) {
    var n = [],
      r = !1
    function i(o) {
      r || n.push(o)
    }
    return (
      p.useEffect(function () {
        return (
          (r = !1),
          function () {
            ;(r = !0),
              n.length &&
                n.forEach(function (o) {
                  return o()
                })
          }
        )
      }, t),
      i
    )
  },
  YP = function () {
    return function (t) {
      t()
    }
  },
  ZP = typeof XP < 'u' ? QP : YP
function Vh(e, t, n, r, i) {
  var o = p.useContext(Tc),
    a = o.cache,
    s = [e].concat(J(t)),
    l = Vd(s),
    u = ZP([l]),
    c = function (y) {
      a.opUpdate(l, function (S) {
        var C = S || [void 0, void 0],
          v = B(C, 2),
          h = v[0],
          m = h === void 0 ? 0 : h,
          w = v[1],
          b = w,
          x = b || n(),
          E = [m, x]
        return y ? y(E) : E
      })
    }
  p.useMemo(
    function () {
      c()
    },
    [l],
  )
  var f = a.opGet(l),
    d = f[1]
  return (
    qP(
      function () {
        i == null || i(d)
      },
      function (g) {
        return (
          c(function (y) {
            var S = B(y, 2),
              C = S[0],
              v = S[1]
            return g && C === 0 && (i == null || i(d)), [C + 1, v]
          }),
          function () {
            a.opUpdate(l, function (y) {
              var S = y || [],
                C = B(S, 2),
                v = C[0],
                h = v === void 0 ? 0 : v,
                m = C[1],
                w = h - 1
              return w === 0
                ? (u(function () {
                    ;(g || !a.opGet(l)) && (r == null || r(m, !1))
                  }),
                  null)
                : [h - 1, m]
            })
          }
        )
      },
      [l],
    ),
    d
  )
}
var JP = {},
  ek = 'css',
  _i = new Map()
function tk(e) {
  _i.set(e, (_i.get(e) || 0) + 1)
}
function nk(e, t) {
  if (typeof document < 'u') {
    var n = document.querySelectorAll('style['.concat(ra, '="').concat(e, '"]'))
    n.forEach(function (r) {
      if (r[ii] === t) {
        var i
        ;(i = r.parentNode) === null || i === void 0 || i.removeChild(r)
      }
    })
  }
}
var rk = 0
function ik(e, t) {
  _i.set(e, (_i.get(e) || 0) - 1)
  var n = Array.from(_i.keys()),
    r = n.filter(function (i) {
      var o = _i.get(i) || 0
      return o <= 0
    })
  n.length - r.length > rk &&
    r.forEach(function (i) {
      nk(i, t), _i.delete(i)
    })
}
var ok = function (t, n, r, i) {
    var o = r.getDerivativeToken(t),
      a = _(_({}, o), n)
    return i && (a = i(a)), a
  },
  IS = 'token'
function ak(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = p.useContext(Tc),
    i = r.cache.instanceId,
    o = r.container,
    a = n.salt,
    s = a === void 0 ? '' : a,
    l = n.override,
    u = l === void 0 ? JP : l,
    c = n.formatToken,
    f = n.getComputedToken,
    d = n.cssVar,
    g = BP(function () {
      return Object.assign.apply(Object, [{}].concat(J(t)))
    }, t),
    y = Za(g),
    S = Za(u),
    C = d ? Za(d) : '',
    v = Vh(
      IS,
      [s, e.id, y, S, C],
      function () {
        var h,
          m = f ? f(g, u, e) : ok(g, u, e, c),
          w = _({}, m),
          b = ''
        if (d) {
          var x = RS(m, d.key, {
              prefix: d.prefix,
              ignore: d.ignore,
              unitless: d.unitless,
              preserve: d.preserve,
            }),
            E = B(x, 2)
          ;(m = E[0]), (b = E[1])
        }
        var k = zg(m, s)
        ;(m._tokenKey = k), (w._tokenKey = zg(w, s))
        var O =
          (h = d == null ? void 0 : d.key) !== null && h !== void 0 ? h : k
        ;(m._themeKey = O), tk(O)
        var I = ''.concat(ek, '-').concat(Ts(k))
        return (m._hashId = I), [m, I, w, b, (d == null ? void 0 : d.key) || '']
      },
      function (h) {
        ik(h[0]._themeKey, i)
      },
      function (h) {
        var m = B(h, 4),
          w = m[0],
          b = m[3]
        if (d && b) {
          var x = Nr(b, Ts('css-variables-'.concat(w._themeKey)), {
            mark: rr,
            prepend: 'queue',
            attachTo: o,
            priority: -999,
          })
          ;(x[ii] = i), x.setAttribute(ra, w._themeKey)
        }
      },
    )
  return v
}
var sk = function (t, n, r) {
    var i = B(t, 5),
      o = i[2],
      a = i[3],
      s = i[4],
      l = r || {},
      u = l.plain
    if (!a) return null
    var c = o._tokenKey,
      f = -999,
      d = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(f) },
      g = Lu(a, s, c, d, u)
    return [f, c, g]
  },
  lk = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  $S = 'comm',
  MS = 'rule',
  NS = 'decl',
  uk = '@import',
  ck = '@keyframes',
  fk = '@layer',
  _S = Math.abs,
  Bh = String.fromCharCode
function LS(e) {
  return e.trim()
}
function Zl(e, t, n) {
  return e.replace(t, n)
}
function dk(e, t, n) {
  return e.indexOf(t, n)
}
function Is(e, t) {
  return e.charCodeAt(t) | 0
}
function ia(e, t, n) {
  return e.slice(t, n)
}
function gr(e) {
  return e.length
}
function pk(e) {
  return e.length
}
function xl(e, t) {
  return t.push(e), e
}
var Oc = 1,
  oa = 1,
  AS = 0,
  Dn = 0,
  ht = 0,
  da = ''
function Uh(e, t, n, r, i, o, a, s) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: i,
    children: o,
    line: Oc,
    column: oa,
    length: a,
    return: '',
    siblings: s,
  }
}
function hk() {
  return ht
}
function mk() {
  return (
    (ht = Dn > 0 ? Is(da, --Dn) : 0), oa--, ht === 10 && ((oa = 1), Oc--), ht
  )
}
function ir() {
  return (
    (ht = Dn < AS ? Is(da, Dn++) : 0), oa++, ht === 10 && ((oa = 1), Oc++), ht
  )
}
function oi() {
  return Is(da, Dn)
}
function Jl() {
  return Dn
}
function Rc(e, t) {
  return ia(da, e, t)
}
function $s(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4
    case 58:
      return 3
    case 34:
    case 39:
    case 40:
    case 91:
      return 2
    case 41:
    case 93:
      return 1
  }
  return 0
}
function gk(e) {
  return (Oc = oa = 1), (AS = gr((da = e))), (Dn = 0), []
}
function vk(e) {
  return (da = ''), e
}
function Sf(e) {
  return LS(Rc(Dn - 1, Wd(e === 91 ? e + 2 : e === 40 ? e + 1 : e)))
}
function yk(e) {
  for (; (ht = oi()) && ht < 33; ) ir()
  return $s(e) > 2 || $s(ht) > 3 ? '' : ' '
}
function Sk(e, t) {
  for (
    ;
    --t &&
    ir() &&
    !(ht < 48 || ht > 102 || (ht > 57 && ht < 65) || (ht > 70 && ht < 97));

  );
  return Rc(e, Jl() + (t < 6 && oi() == 32 && ir() == 32))
}
function Wd(e) {
  for (; ir(); )
    switch (ht) {
      case e:
        return Dn
      case 34:
      case 39:
        e !== 34 && e !== 39 && Wd(ht)
        break
      case 40:
        e === 41 && Wd(e)
        break
      case 92:
        ir()
        break
    }
  return Dn
}
function Ck(e, t) {
  for (; ir() && e + ht !== 57; ) if (e + ht === 84 && oi() === 47) break
  return '/*' + Rc(t, Dn - 1) + '*' + Bh(e === 47 ? e : ir())
}
function wk(e) {
  for (; !$s(oi()); ) ir()
  return Rc(e, Dn)
}
function bk(e) {
  return vk(eu('', null, null, null, [''], (e = gk(e)), 0, [0], e))
}
function eu(e, t, n, r, i, o, a, s, l) {
  for (
    var u = 0,
      c = 0,
      f = a,
      d = 0,
      g = 0,
      y = 0,
      S = 1,
      C = 1,
      v = 1,
      h = 0,
      m = '',
      w = i,
      b = o,
      x = r,
      E = m;
    C;

  )
    switch (((y = h), (h = ir()))) {
      case 40:
        if (y != 108 && Is(E, f - 1) == 58) {
          dk((E += Zl(Sf(h), '&', '&\f')), '&\f', _S(u ? s[u - 1] : 0)) != -1 &&
            (v = -1)
          break
        }
      case 34:
      case 39:
      case 91:
        E += Sf(h)
        break
      case 9:
      case 10:
      case 13:
      case 32:
        E += yk(y)
        break
      case 92:
        E += Sk(Jl() - 1, 7)
        continue
      case 47:
        switch (oi()) {
          case 42:
          case 47:
            xl(xk(Ck(ir(), Jl()), t, n, l), l),
              ($s(y || 1) == 5 || $s(oi() || 1) == 5) &&
                gr(E) &&
                ia(E, -1, void 0) !== ' ' &&
                (E += ' ')
            break
          default:
            E += '/'
        }
        break
      case 123 * S:
        s[u++] = gr(E) * v
      case 125 * S:
      case 59:
      case 0:
        switch (h) {
          case 0:
          case 125:
            C = 0
          case 59 + c:
            v == -1 && (E = Zl(E, /\f/g, '')),
              g > 0 &&
                (gr(E) - f || (S === 0 && y === 47)) &&
                xl(
                  g > 32
                    ? Ug(E + ';', r, n, f - 1, l)
                    : Ug(Zl(E, ' ', '') + ';', r, n, f - 2, l),
                  l,
                )
            break
          case 59:
            E += ';'
          default:
            if (
              (xl(
                (x = Bg(E, t, n, u, c, i, s, m, (w = []), (b = []), f, o)),
                o,
              ),
              h === 123)
            )
              if (c === 0) eu(E, t, x, x, w, o, f, s, b)
              else
                switch (d === 99 && Is(E, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    eu(
                      e,
                      x,
                      x,
                      r && xl(Bg(e, x, x, 0, 0, i, s, m, i, (w = []), f, b), b),
                      i,
                      b,
                      f,
                      s,
                      r ? w : b,
                    )
                    break
                  default:
                    eu(E, x, x, x, [''], b, 0, s, b)
                }
        }
        ;(u = c = g = 0), (S = v = 1), (m = E = ''), (f = a)
        break
      case 58:
        ;(f = 1 + gr(E)), (g = y)
      default:
        if (S < 1) {
          if (h == 123) --S
          else if (h == 125 && S++ == 0 && mk() == 125) continue
        }
        switch (((E += Bh(h)), h * S)) {
          case 38:
            v = c > 0 ? 1 : ((E += '\f'), -1)
            break
          case 44:
            ;(s[u++] = (gr(E) - 1) * v), (v = 1)
            break
          case 64:
            oi() === 45 && (E += Sf(ir())),
              (d = oi()),
              (c = f = gr((m = E += wk(Jl())))),
              h++
            break
          case 45:
            y === 45 && gr(E) == 2 && (S = 0)
        }
    }
  return o
}
function Bg(e, t, n, r, i, o, a, s, l, u, c, f) {
  for (
    var d = i - 1, g = i === 0 ? o : [''], y = pk(g), S = 0, C = 0, v = 0;
    S < r;
    ++S
  )
    for (var h = 0, m = ia(e, d + 1, (d = _S((C = a[S])))), w = e; h < y; ++h)
      (w = LS(C > 0 ? g[h] + ' ' + m : Zl(m, /&\f/g, g[h]))) && (l[v++] = w)
  return Uh(e, t, n, i === 0 ? MS : s, l, u, c, f)
}
function xk(e, t, n, r) {
  return Uh(e, t, n, $S, Bh(hk()), ia(e, 2, -2), 0, r)
}
function Ug(e, t, n, r, i) {
  return Uh(e, t, n, NS, ia(e, 0, r), ia(e, r + 1, -1), r, i)
}
function Kd(e, t) {
  for (var n = '', r = 0; r < e.length; r++) n += t(e[r], r, e, t) || ''
  return n
}
function Ek(e, t, n, r) {
  switch (e.type) {
    case fk:
      if (e.children.length) break
    case uk:
    case NS:
      return (e.return = e.return || e.value)
    case $S:
      return ''
    case ck:
      return (e.return = e.value + '{' + Kd(e.children, r) + '}')
    case MS:
      if (!gr((e.value = e.props.join(',')))) return ''
  }
  return gr((n = Kd(e.children, r))) ? (e.return = e.value + '{' + n + '}') : ''
}
var Wg = 'data-ant-cssinjs-cache-path',
  FS = '_FILE_STYLE__',
  Bi,
  jS = !0
function Pk() {
  if (!Bi && ((Bi = {}), Pn())) {
    var e = document.createElement('div')
    ;(e.className = Wg),
      (e.style.position = 'fixed'),
      (e.style.visibility = 'hidden'),
      (e.style.top = '-9999px'),
      document.body.appendChild(e)
    var t = getComputedStyle(e).content || ''
    ;(t = t.replace(/^"/, '').replace(/"$/, '')),
      t.split(';').forEach(function (i) {
        var o = i.split(':'),
          a = B(o, 2),
          s = a[0],
          l = a[1]
        Bi[s] = l
      })
    var n = document.querySelector('style['.concat(Wg, ']'))
    if (n) {
      var r
      ;(jS = !1),
        (r = n.parentNode) === null || r === void 0 || r.removeChild(n)
    }
    document.body.removeChild(e)
  }
}
function kk(e) {
  return Pk(), !!Bi[e]
}
function Tk(e) {
  var t = Bi[e],
    n = null
  if (t && Pn())
    if (jS) n = FS
    else {
      var r = document.querySelector(
        'style['.concat(rr, '="').concat(Bi[e], '"]'),
      )
      r ? (n = r.innerHTML) : delete Bi[e]
    }
  return [n, t]
}
var Ok = '_skip_check_',
  zS = '_multi_value_'
function tu(e) {
  var t = Kd(bk(e), Ek)
  return t.replace(/\{%%%\:[^;];}/g, ';')
}
function Rk(e) {
  return ae(e) === 'object' && e && (Ok in e || zS in e)
}
function Kg(e, t, n) {
  if (!t) return e
  var r = '.'.concat(t),
    i = n === 'low' ? ':where('.concat(r, ')') : r,
    o = e.split(',').map(function (a) {
      var s,
        l = a.trim().split(/\s+/),
        u = l[0] || '',
        c =
          ((s = u.match(/^\w+/)) === null || s === void 0 ? void 0 : s[0]) || ''
      return (
        (u = ''.concat(c).concat(i).concat(u.slice(c.length))),
        [u].concat(J(l.slice(1))).join(' ')
      )
    })
  return o.join(',')
}
var Ik = function e(t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r =
      arguments.length > 2 && arguments[2] !== void 0
        ? arguments[2]
        : { root: !0, parentSelectors: [] },
    i = r.root,
    o = r.injectHash,
    a = r.parentSelectors,
    s = n.hashId,
    l = n.layer
  n.path
  var u = n.hashPriority,
    c = n.transformers,
    f = c === void 0 ? [] : c
  n.linters
  var d = '',
    g = {}
  function y(v) {
    var h = v.getName(s)
    if (!g[h]) {
      var m = e(v.style, n, { root: !1, parentSelectors: a }),
        w = B(m, 1),
        b = w[0]
      g[h] = '@keyframes '.concat(v.getName(s)).concat(b)
    }
  }
  function S(v) {
    var h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : []
    return (
      v.forEach(function (m) {
        Array.isArray(m) ? S(m, h) : m && h.push(m)
      }),
      h
    )
  }
  var C = S(Array.isArray(t) ? t : [t])
  return (
    C.forEach(function (v) {
      var h = typeof v == 'string' && !i ? {} : v
      if (typeof h == 'string')
        d += ''.concat(
          h,
          `
`,
        )
      else if (h._keyframe) y(h)
      else {
        var m = f.reduce(function (w, b) {
          var x
          return (
            (b == null || (x = b.visit) === null || x === void 0
              ? void 0
              : x.call(b, w)) || w
          )
        }, h)
        Object.keys(m).forEach(function (w) {
          var b = m[w]
          if (
            ae(b) === 'object' &&
            b &&
            (w !== 'animationName' || !b._keyframe) &&
            !Rk(b)
          ) {
            var x = !1,
              E = w.trim(),
              k = !1
            ;(i || o) && s
              ? E.startsWith('@')
                ? (x = !0)
                : E === '&'
                  ? (E = Kg('', s, u))
                  : (E = Kg(w, s, u))
              : i && !s && (E === '&' || E === '') && ((E = ''), (k = !0))
            var O = e(b, n, {
                root: k,
                injectHash: x,
                parentSelectors: [].concat(J(a), [E]),
              }),
              I = B(O, 2),
              L = I[0],
              z = I[1]
            ;(g = _(_({}, g), z)), (d += ''.concat(E).concat(L))
          } else {
            let V = function (M, T) {
              var P = M.replace(/[A-Z]/g, function (N) {
                  return '-'.concat(N.toLowerCase())
                }),
                R = T
              !lk[M] &&
                typeof R == 'number' &&
                R !== 0 &&
                (R = ''.concat(R, 'px')),
                M === 'animationName' &&
                  T !== null &&
                  T !== void 0 &&
                  T._keyframe &&
                  (y(T), (R = T.getName(s))),
                (d += ''.concat(P, ':').concat(R, ';'))
            }
            var A,
              F =
                (A = b == null ? void 0 : b.value) !== null && A !== void 0
                  ? A
                  : b
            ae(b) === 'object' &&
            b !== null &&
            b !== void 0 &&
            b[zS] &&
            Array.isArray(F)
              ? F.forEach(function (M) {
                  V(w, M)
                })
              : V(w, F)
          }
        })
      }
    }),
    i
      ? l &&
        ((d = '@layer '.concat(l.name, ' {').concat(d, '}')),
        l.dependencies &&
          (g['@layer '.concat(l.name)] = l.dependencies.map(function (v) {
            return '@layer '.concat(v, ', ').concat(l.name, ';')
          }).join(`
`)))
      : (d = '{'.concat(d, '}')),
    [d, g]
  )
}
function DS(e, t) {
  return Ts(''.concat(e.join('%')).concat(t))
}
function $k() {
  return null
}
var HS = 'style'
function qd(e, t) {
  var n = e.token,
    r = e.path,
    i = e.hashId,
    o = e.layer,
    a = e.nonce,
    s = e.clientOnly,
    l = e.order,
    u = l === void 0 ? 0 : l,
    c = p.useContext(Tc),
    f = c.autoClear
  c.mock
  var d = c.defaultCache,
    g = c.hashPriority,
    y = c.container,
    S = c.ssrInline,
    C = c.transformers,
    v = c.linters,
    h = c.cache,
    m = c.layer,
    w = n._tokenKey,
    b = [w]
  m && b.push('layer'), b.push.apply(b, J(r))
  var x = Ud,
    E = Vh(
      HS,
      b,
      function () {
        var z = b.join('|')
        if (kk(z)) {
          var A = Tk(z),
            F = B(A, 2),
            V = F[0],
            M = F[1]
          if (V) return [V, w, M, {}, s, u]
        }
        var T = t(),
          P = Ik(T, {
            hashId: i,
            hashPriority: g,
            layer: m ? o : void 0,
            path: r.join('-'),
            transformers: C,
            linters: v,
          }),
          R = B(P, 2),
          N = R[0],
          j = R[1],
          H = tu(N),
          K = DS(b, H)
        return [H, w, K, j, s, u]
      },
      function (z, A) {
        var F = B(z, 3),
          V = F[2]
        ;(A || f) && Ud && Os(V, { mark: rr })
      },
      function (z) {
        var A = B(z, 4),
          F = A[0]
        A[1]
        var V = A[2],
          M = A[3]
        if (x && F !== FS) {
          var T = {
              mark: rr,
              prepend: m ? !1 : 'queue',
              attachTo: y,
              priority: u,
            },
            P = typeof a == 'function' ? a() : a
          P && (T.csp = { nonce: P })
          var R = [],
            N = []
          Object.keys(M).forEach(function (H) {
            H.startsWith('@layer') ? R.push(H) : N.push(H)
          }),
            R.forEach(function (H) {
              Nr(
                tu(M[H]),
                '_layer-'.concat(H),
                _(_({}, T), {}, { prepend: !0 }),
              )
            })
          var j = Nr(F, V, T)
          ;(j[ii] = h.instanceId),
            j.setAttribute(ra, w),
            N.forEach(function (H) {
              Nr(tu(M[H]), '_effect-'.concat(H), T)
            })
        }
      },
    ),
    k = B(E, 3),
    O = k[0],
    I = k[1],
    L = k[2]
  return function (z) {
    var A
    return (
      !S || x || !d
        ? (A = p.createElement($k, null))
        : (A = p.createElement(
            'style',
            ce({}, $($({}, ra, I), rr, L), {
              dangerouslySetInnerHTML: { __html: O },
            }),
          )),
      p.createElement(p.Fragment, null, A, z)
    )
  }
}
var Mk = function (t, n, r) {
    var i = B(t, 6),
      o = i[0],
      a = i[1],
      s = i[2],
      l = i[3],
      u = i[4],
      c = i[5],
      f = r || {},
      d = f.plain
    if (u) return null
    var g = o,
      y = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) }
    return (
      (g = Lu(o, a, s, y, d)),
      l &&
        Object.keys(l).forEach(function (S) {
          if (!n[S]) {
            n[S] = !0
            var C = tu(l[S]),
              v = Lu(C, a, '_effect-'.concat(S), y, d)
            S.startsWith('@layer') ? (g = v + g) : (g += v)
          }
        }),
      [c, s, g]
    )
  },
  VS = 'cssVar',
  Nk = function (t, n) {
    var r = t.key,
      i = t.prefix,
      o = t.unitless,
      a = t.ignore,
      s = t.token,
      l = t.scope,
      u = l === void 0 ? '' : l,
      c = p.useContext(Tc),
      f = c.cache.instanceId,
      d = c.container,
      g = s._tokenKey,
      y = [].concat(J(t.path), [r, u, g]),
      S = Vh(
        VS,
        y,
        function () {
          var C = n(),
            v = RS(C, r, { prefix: i, unitless: o, ignore: a, scope: u }),
            h = B(v, 2),
            m = h[0],
            w = h[1],
            b = DS(y, w)
          return [m, w, b, r]
        },
        function (C) {
          var v = B(C, 3),
            h = v[2]
          Ud && Os(h, { mark: rr })
        },
        function (C) {
          var v = B(C, 3),
            h = v[1],
            m = v[2]
          if (h) {
            var w = Nr(h, m, {
              mark: rr,
              prepend: 'queue',
              attachTo: d,
              priority: -999,
            })
            ;(w[ii] = f), w.setAttribute(ra, r)
          }
        },
      )
    return S
  },
  _k = function (t, n, r) {
    var i = B(t, 4),
      o = i[1],
      a = i[2],
      s = i[3],
      l = r || {},
      u = l.plain
    if (!o) return null
    var c = -999,
      f = { 'data-rc-order': 'prependQueue', 'data-rc-priority': ''.concat(c) },
      d = Lu(o, s, a, f, u)
    return [c, a, d]
  }
$($($({}, HS, Mk), IS, sk), VS, _k)
var st = (function () {
  function e(t, n) {
    Vt(this, e),
      $(this, 'name', void 0),
      $(this, 'style', void 0),
      $(this, '_keyframe', !0),
      (this.name = t),
      (this.style = n)
  }
  return (
    Bt(e, [
      {
        key: 'getName',
        value: function () {
          var n =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
          return n ? ''.concat(n, '-').concat(this.name) : this.name
        },
      },
    ]),
    e
  )
})()
function go(e) {
  return (e.notSplit = !0), e
}
go(['borderTop', 'borderBottom']),
  go(['borderTop']),
  go(['borderBottom']),
  go(['borderLeft', 'borderRight']),
  go(['borderLeft']),
  go(['borderRight'])
var Wh = p.createContext({})
function Lk(e) {
  return xS(e) || SS(e) || jh(e) || ES()
}
function yr(e, t) {
  for (var n = e, r = 0; r < t.length; r += 1) {
    if (n == null) return
    n = n[t[r]]
  }
  return n
}
function BS(e, t, n, r) {
  if (!t.length) return n
  var i = Lk(t),
    o = i[0],
    a = i.slice(1),
    s
  return (
    !e && typeof o == 'number'
      ? (s = [])
      : Array.isArray(e)
        ? (s = J(e))
        : (s = _({}, e)),
    r && n === void 0 && a.length === 1
      ? delete s[o][a[0]]
      : (s[o] = BS(s[o], a, n, r)),
    s
  )
}
function Yn(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1
  return t.length && r && n === void 0 && !yr(e, t.slice(0, -1))
    ? e
    : BS(e, t, n, r)
}
function Ak(e) {
  return (
    ae(e) === 'object' &&
    e !== null &&
    Object.getPrototypeOf(e) === Object.prototype
  )
}
function qg(e) {
  return Array.isArray(e) ? [] : {}
}
var Fk = typeof Reflect > 'u' ? Object.keys : Reflect.ownKeys
function jo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = qg(t[0])
  return (
    t.forEach(function (i) {
      function o(a, s) {
        var l = new Set(s),
          u = yr(i, a),
          c = Array.isArray(u)
        if (c || Ak(u)) {
          if (!l.has(u)) {
            l.add(u)
            var f = yr(r, a)
            c
              ? (r = Yn(r, a, []))
              : (!f || ae(f) !== 'object') && (r = Yn(r, a, qg(u))),
              Fk(u).forEach(function (d) {
                o([].concat(J(a), [d]), l)
              })
          }
        } else r = Yn(r, a, u)
      }
      o([])
    }),
    r
  )
}
function jk() {}
const zk = p.createContext({}),
  US = () => {
    const e = () => {}
    return (e.deprecated = jk), e
  },
  Dk = p.createContext(void 0)
var Hk = {
    items_per_page: '/ page',
    jump_to: 'Go to',
    jump_to_confirm: 'confirm',
    page: 'Page',
    prev_page: 'Previous Page',
    next_page: 'Next Page',
    prev_5: 'Previous 5 Pages',
    next_5: 'Next 5 Pages',
    prev_3: 'Previous 3 Pages',
    next_3: 'Next 3 Pages',
    page_size: 'Page Size',
  },
  Vk = {
    yearFormat: 'YYYY',
    dayFormat: 'D',
    cellMeridiemFormat: 'A',
    monthBeforeYear: !0,
  },
  Bk = _(
    _({}, Vk),
    {},
    {
      locale: 'en_US',
      today: 'Today',
      now: 'Now',
      backToToday: 'Back to today',
      ok: 'OK',
      clear: 'Clear',
      month: 'Month',
      year: 'Year',
      timeSelect: 'select time',
      dateSelect: 'select date',
      weekSelect: 'Choose a week',
      monthSelect: 'Choose a month',
      yearSelect: 'Choose a year',
      decadeSelect: 'Choose a decade',
      dateFormat: 'M/D/YYYY',
      dateTimeFormat: 'M/D/YYYY HH:mm:ss',
      previousMonth: 'Previous month (PageUp)',
      nextMonth: 'Next month (PageDown)',
      previousYear: 'Last year (Control + left)',
      nextYear: 'Next year (Control + right)',
      previousDecade: 'Last decade',
      nextDecade: 'Next decade',
      previousCentury: 'Last century',
      nextCentury: 'Next century',
    },
  )
const WS = {
    placeholder: 'Select time',
    rangePlaceholder: ['Start time', 'End time'],
  },
  Gg = {
    lang: Object.assign(
      {
        placeholder: 'Select date',
        yearPlaceholder: 'Select year',
        quarterPlaceholder: 'Select quarter',
        monthPlaceholder: 'Select month',
        weekPlaceholder: 'Select week',
        rangePlaceholder: ['Start date', 'End date'],
        rangeYearPlaceholder: ['Start year', 'End year'],
        rangeQuarterPlaceholder: ['Start quarter', 'End quarter'],
        rangeMonthPlaceholder: ['Start month', 'End month'],
        rangeWeekPlaceholder: ['Start week', 'End week'],
      },
      Bk,
    ),
    timePickerLocale: Object.assign({}, WS),
  },
  vn = '${label} is not a valid ${type}',
  Ic = {
    locale: 'en',
    Pagination: Hk,
    DatePicker: Gg,
    TimePicker: WS,
    Calendar: Gg,
    global: { placeholder: 'Please select' },
    Table: {
      filterTitle: 'Filter menu',
      filterConfirm: 'OK',
      filterReset: 'Reset',
      filterEmptyText: 'No filters',
      filterCheckall: 'Select all items',
      filterSearchPlaceholder: 'Search in filters',
      emptyText: 'No data',
      selectAll: 'Select current page',
      selectInvert: 'Invert current page',
      selectNone: 'Clear all data',
      selectionAll: 'Select all data',
      sortTitle: 'Sort',
      expand: 'Expand row',
      collapse: 'Collapse row',
      triggerDesc: 'Click to sort descending',
      triggerAsc: 'Click to sort ascending',
      cancelSort: 'Click to cancel sorting',
    },
    Tour: { Next: 'Next', Previous: 'Previous', Finish: 'Finish' },
    Modal: { okText: 'OK', cancelText: 'Cancel', justOkText: 'OK' },
    Popconfirm: { okText: 'OK', cancelText: 'Cancel' },
    Transfer: {
      titles: ['', ''],
      searchPlaceholder: 'Search here',
      itemUnit: 'item',
      itemsUnit: 'items',
      remove: 'Remove',
      selectCurrent: 'Select current page',
      removeCurrent: 'Remove current page',
      selectAll: 'Select all data',
      deselectAll: 'Deselect all data',
      removeAll: 'Remove all data',
      selectInvert: 'Invert current page',
    },
    Upload: {
      uploading: 'Uploading...',
      removeFile: 'Remove file',
      uploadError: 'Upload error',
      previewFile: 'Preview file',
      downloadFile: 'Download file',
    },
    Empty: { description: 'No data' },
    Icon: { icon: 'icon' },
    Text: {
      edit: 'Edit',
      copy: 'Copy',
      copied: 'Copied',
      expand: 'Expand',
      collapse: 'Collapse',
    },
    Form: {
      optional: '(optional)',
      defaultValidateMessages: {
        default: 'Field validation error for ${label}',
        required: 'Please enter ${label}',
        enum: '${label} must be one of [${enum}]',
        whitespace: '${label} cannot be a blank character',
        date: {
          format: '${label} date format is invalid',
          parse: '${label} cannot be converted to a date',
          invalid: '${label} is an invalid date',
        },
        types: {
          string: vn,
          method: vn,
          array: vn,
          object: vn,
          number: vn,
          date: vn,
          boolean: vn,
          integer: vn,
          float: vn,
          regexp: vn,
          email: vn,
          url: vn,
          hex: vn,
        },
        string: {
          len: '${label} must be ${len} characters',
          min: '${label} must be at least ${min} characters',
          max: '${label} must be up to ${max} characters',
          range: '${label} must be between ${min}-${max} characters',
        },
        number: {
          len: '${label} must be equal to ${len}',
          min: '${label} must be minimum ${min}',
          max: '${label} must be maximum ${max}',
          range: '${label} must be between ${min}-${max}',
        },
        array: {
          len: 'Must be ${len} ${label}',
          min: 'At least ${min} ${label}',
          max: 'At most ${max} ${label}',
          range: 'The amount of ${label} must be between ${min}-${max}',
        },
        pattern: { mismatch: '${label} does not match the pattern ${pattern}' },
      },
    },
    Image: { preview: 'Preview' },
    QRCode: {
      expired: 'QR code expired',
      refresh: 'Refresh',
      scanned: 'Scanned',
    },
    ColorPicker: {
      presetEmpty: 'Empty',
      transparent: 'Transparent',
      singleColor: 'Single',
      gradientColor: 'Gradient',
    },
  }
Object.assign({}, Ic.Modal)
let nu = []
const Xg = () =>
  nu.reduce((e, t) => Object.assign(Object.assign({}, e), t), Ic.Modal)
function Uk(e) {
  if (e) {
    const t = Object.assign({}, e)
    return (
      nu.push(t),
      Xg(),
      () => {
        ;(nu = nu.filter((n) => n !== t)), Xg()
      }
    )
  }
  Object.assign({}, Ic.Modal)
}
const KS = p.createContext(void 0),
  Wk = 'internalMark',
  Kk = (e) => {
    const { locale: t = {}, children: n, _ANT_MARK__: r } = e
    p.useEffect(() => Uk(t == null ? void 0 : t.Modal), [t])
    const i = p.useMemo(
      () => Object.assign(Object.assign({}, t), { exist: !0 }),
      [t],
    )
    return p.createElement(KS.Provider, { value: i }, n)
  }
function Dt(e, t) {
  qk(e) && (e = '100%')
  var n = Gk(e)
  return (
    (e = t === 360 ? e : Math.min(t, Math.max(0, parseFloat(e)))),
    n && (e = parseInt(String(e * t), 10) / 100),
    Math.abs(e - t) < 1e-6
      ? 1
      : (t === 360
          ? (e = (e < 0 ? (e % t) + t : e % t) / parseFloat(String(t)))
          : (e = (e % t) / parseFloat(String(t))),
        e)
  )
}
function El(e) {
  return Math.min(1, Math.max(0, e))
}
function qk(e) {
  return typeof e == 'string' && e.indexOf('.') !== -1 && parseFloat(e) === 1
}
function Gk(e) {
  return typeof e == 'string' && e.indexOf('%') !== -1
}
function qS(e) {
  return (e = parseFloat(e)), (isNaN(e) || e < 0 || e > 1) && (e = 1), e
}
function Pl(e) {
  return e <= 1 ? ''.concat(Number(e) * 100, '%') : e
}
function ji(e) {
  return e.length === 1 ? '0' + e : String(e)
}
function Xk(e, t, n) {
  return { r: Dt(e, 255) * 255, g: Dt(t, 255) * 255, b: Dt(n, 255) * 255 }
}
function Qg(e, t, n) {
  ;(e = Dt(e, 255)), (t = Dt(t, 255)), (n = Dt(n, 255))
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = 0,
    a = 0,
    s = (r + i) / 2
  if (r === i) (a = 0), (o = 0)
  else {
    var l = r - i
    switch (((a = s > 0.5 ? l / (2 - r - i) : l / (r + i)), r)) {
      case e:
        o = (t - n) / l + (t < n ? 6 : 0)
        break
      case t:
        o = (n - e) / l + 2
        break
      case n:
        o = (e - t) / l + 4
        break
    }
    o /= 6
  }
  return { h: o, s: a, l: s }
}
function Cf(e, t, n) {
  return (
    n < 0 && (n += 1),
    n > 1 && (n -= 1),
    n < 1 / 6
      ? e + (t - e) * (6 * n)
      : n < 1 / 2
        ? t
        : n < 2 / 3
          ? e + (t - e) * (2 / 3 - n) * 6
          : e
  )
}
function Qk(e, t, n) {
  var r, i, o
  if (((e = Dt(e, 360)), (t = Dt(t, 100)), (n = Dt(n, 100)), t === 0))
    (i = n), (o = n), (r = n)
  else {
    var a = n < 0.5 ? n * (1 + t) : n + t - n * t,
      s = 2 * n - a
    ;(r = Cf(s, a, e + 1 / 3)), (i = Cf(s, a, e)), (o = Cf(s, a, e - 1 / 3))
  }
  return { r: r * 255, g: i * 255, b: o * 255 }
}
function Gd(e, t, n) {
  ;(e = Dt(e, 255)), (t = Dt(t, 255)), (n = Dt(n, 255))
  var r = Math.max(e, t, n),
    i = Math.min(e, t, n),
    o = 0,
    a = r,
    s = r - i,
    l = r === 0 ? 0 : s / r
  if (r === i) o = 0
  else {
    switch (r) {
      case e:
        o = (t - n) / s + (t < n ? 6 : 0)
        break
      case t:
        o = (n - e) / s + 2
        break
      case n:
        o = (e - t) / s + 4
        break
    }
    o /= 6
  }
  return { h: o, s: l, v: a }
}
function Yk(e, t, n) {
  ;(e = Dt(e, 360) * 6), (t = Dt(t, 100)), (n = Dt(n, 100))
  var r = Math.floor(e),
    i = e - r,
    o = n * (1 - t),
    a = n * (1 - i * t),
    s = n * (1 - (1 - i) * t),
    l = r % 6,
    u = [n, a, o, o, s, n][l],
    c = [s, n, n, a, o, o][l],
    f = [o, o, s, n, n, a][l]
  return { r: u * 255, g: c * 255, b: f * 255 }
}
function Xd(e, t, n, r) {
  var i = [
    ji(Math.round(e).toString(16)),
    ji(Math.round(t).toString(16)),
    ji(Math.round(n).toString(16)),
  ]
  return r &&
    i[0].startsWith(i[0].charAt(1)) &&
    i[1].startsWith(i[1].charAt(1)) &&
    i[2].startsWith(i[2].charAt(1))
    ? i[0].charAt(0) + i[1].charAt(0) + i[2].charAt(0)
    : i.join('')
}
function Zk(e, t, n, r, i) {
  var o = [
    ji(Math.round(e).toString(16)),
    ji(Math.round(t).toString(16)),
    ji(Math.round(n).toString(16)),
    ji(Jk(r)),
  ]
  return i &&
    o[0].startsWith(o[0].charAt(1)) &&
    o[1].startsWith(o[1].charAt(1)) &&
    o[2].startsWith(o[2].charAt(1)) &&
    o[3].startsWith(o[3].charAt(1))
    ? o[0].charAt(0) + o[1].charAt(0) + o[2].charAt(0) + o[3].charAt(0)
    : o.join('')
}
function Jk(e) {
  return Math.round(parseFloat(e) * 255).toString(16)
}
function Yg(e) {
  return Sn(e) / 255
}
function Sn(e) {
  return parseInt(e, 16)
}
function eT(e) {
  return { r: e >> 16, g: (e & 65280) >> 8, b: e & 255 }
}
var Qd = {
  aliceblue: '#f0f8ff',
  antiquewhite: '#faebd7',
  aqua: '#00ffff',
  aquamarine: '#7fffd4',
  azure: '#f0ffff',
  beige: '#f5f5dc',
  bisque: '#ffe4c4',
  black: '#000000',
  blanchedalmond: '#ffebcd',
  blue: '#0000ff',
  blueviolet: '#8a2be2',
  brown: '#a52a2a',
  burlywood: '#deb887',
  cadetblue: '#5f9ea0',
  chartreuse: '#7fff00',
  chocolate: '#d2691e',
  coral: '#ff7f50',
  cornflowerblue: '#6495ed',
  cornsilk: '#fff8dc',
  crimson: '#dc143c',
  cyan: '#00ffff',
  darkblue: '#00008b',
  darkcyan: '#008b8b',
  darkgoldenrod: '#b8860b',
  darkgray: '#a9a9a9',
  darkgreen: '#006400',
  darkgrey: '#a9a9a9',
  darkkhaki: '#bdb76b',
  darkmagenta: '#8b008b',
  darkolivegreen: '#556b2f',
  darkorange: '#ff8c00',
  darkorchid: '#9932cc',
  darkred: '#8b0000',
  darksalmon: '#e9967a',
  darkseagreen: '#8fbc8f',
  darkslateblue: '#483d8b',
  darkslategray: '#2f4f4f',
  darkslategrey: '#2f4f4f',
  darkturquoise: '#00ced1',
  darkviolet: '#9400d3',
  deeppink: '#ff1493',
  deepskyblue: '#00bfff',
  dimgray: '#696969',
  dimgrey: '#696969',
  dodgerblue: '#1e90ff',
  firebrick: '#b22222',
  floralwhite: '#fffaf0',
  forestgreen: '#228b22',
  fuchsia: '#ff00ff',
  gainsboro: '#dcdcdc',
  ghostwhite: '#f8f8ff',
  goldenrod: '#daa520',
  gold: '#ffd700',
  gray: '#808080',
  green: '#008000',
  greenyellow: '#adff2f',
  grey: '#808080',
  honeydew: '#f0fff0',
  hotpink: '#ff69b4',
  indianred: '#cd5c5c',
  indigo: '#4b0082',
  ivory: '#fffff0',
  khaki: '#f0e68c',
  lavenderblush: '#fff0f5',
  lavender: '#e6e6fa',
  lawngreen: '#7cfc00',
  lemonchiffon: '#fffacd',
  lightblue: '#add8e6',
  lightcoral: '#f08080',
  lightcyan: '#e0ffff',
  lightgoldenrodyellow: '#fafad2',
  lightgray: '#d3d3d3',
  lightgreen: '#90ee90',
  lightgrey: '#d3d3d3',
  lightpink: '#ffb6c1',
  lightsalmon: '#ffa07a',
  lightseagreen: '#20b2aa',
  lightskyblue: '#87cefa',
  lightslategray: '#778899',
  lightslategrey: '#778899',
  lightsteelblue: '#b0c4de',
  lightyellow: '#ffffe0',
  lime: '#00ff00',
  limegreen: '#32cd32',
  linen: '#faf0e6',
  magenta: '#ff00ff',
  maroon: '#800000',
  mediumaquamarine: '#66cdaa',
  mediumblue: '#0000cd',
  mediumorchid: '#ba55d3',
  mediumpurple: '#9370db',
  mediumseagreen: '#3cb371',
  mediumslateblue: '#7b68ee',
  mediumspringgreen: '#00fa9a',
  mediumturquoise: '#48d1cc',
  mediumvioletred: '#c71585',
  midnightblue: '#191970',
  mintcream: '#f5fffa',
  mistyrose: '#ffe4e1',
  moccasin: '#ffe4b5',
  navajowhite: '#ffdead',
  navy: '#000080',
  oldlace: '#fdf5e6',
  olive: '#808000',
  olivedrab: '#6b8e23',
  orange: '#ffa500',
  orangered: '#ff4500',
  orchid: '#da70d6',
  palegoldenrod: '#eee8aa',
  palegreen: '#98fb98',
  paleturquoise: '#afeeee',
  palevioletred: '#db7093',
  papayawhip: '#ffefd5',
  peachpuff: '#ffdab9',
  peru: '#cd853f',
  pink: '#ffc0cb',
  plum: '#dda0dd',
  powderblue: '#b0e0e6',
  purple: '#800080',
  rebeccapurple: '#663399',
  red: '#ff0000',
  rosybrown: '#bc8f8f',
  royalblue: '#4169e1',
  saddlebrown: '#8b4513',
  salmon: '#fa8072',
  sandybrown: '#f4a460',
  seagreen: '#2e8b57',
  seashell: '#fff5ee',
  sienna: '#a0522d',
  silver: '#c0c0c0',
  skyblue: '#87ceeb',
  slateblue: '#6a5acd',
  slategray: '#708090',
  slategrey: '#708090',
  snow: '#fffafa',
  springgreen: '#00ff7f',
  steelblue: '#4682b4',
  tan: '#d2b48c',
  teal: '#008080',
  thistle: '#d8bfd8',
  tomato: '#ff6347',
  turquoise: '#40e0d0',
  violet: '#ee82ee',
  wheat: '#f5deb3',
  white: '#ffffff',
  whitesmoke: '#f5f5f5',
  yellow: '#ffff00',
  yellowgreen: '#9acd32',
}
function Po(e) {
  var t = { r: 0, g: 0, b: 0 },
    n = 1,
    r = null,
    i = null,
    o = null,
    a = !1,
    s = !1
  return (
    typeof e == 'string' && (e = rT(e)),
    typeof e == 'object' &&
      (kr(e.r) && kr(e.g) && kr(e.b)
        ? ((t = Xk(e.r, e.g, e.b)),
          (a = !0),
          (s = String(e.r).substr(-1) === '%' ? 'prgb' : 'rgb'))
        : kr(e.h) && kr(e.s) && kr(e.v)
          ? ((r = Pl(e.s)),
            (i = Pl(e.v)),
            (t = Yk(e.h, r, i)),
            (a = !0),
            (s = 'hsv'))
          : kr(e.h) &&
            kr(e.s) &&
            kr(e.l) &&
            ((r = Pl(e.s)),
            (o = Pl(e.l)),
            (t = Qk(e.h, r, o)),
            (a = !0),
            (s = 'hsl')),
      Object.prototype.hasOwnProperty.call(e, 'a') && (n = e.a)),
    (n = qS(n)),
    {
      ok: a,
      format: e.format || s,
      r: Math.min(255, Math.max(t.r, 0)),
      g: Math.min(255, Math.max(t.g, 0)),
      b: Math.min(255, Math.max(t.b, 0)),
      a: n,
    }
  )
}
var tT = '[-\\+]?\\d+%?',
  nT = '[-\\+]?\\d*\\.\\d+%?',
  ai = '(?:'.concat(nT, ')|(?:').concat(tT, ')'),
  wf = '[\\s|\\(]+('
    .concat(ai, ')[,|\\s]+(')
    .concat(ai, ')[,|\\s]+(')
    .concat(ai, ')\\s*\\)?'),
  bf = '[\\s|\\(]+('
    .concat(ai, ')[,|\\s]+(')
    .concat(ai, ')[,|\\s]+(')
    .concat(ai, ')[,|\\s]+(')
    .concat(ai, ')\\s*\\)?'),
  Gn = {
    CSS_UNIT: new RegExp(ai),
    rgb: new RegExp('rgb' + wf),
    rgba: new RegExp('rgba' + bf),
    hsl: new RegExp('hsl' + wf),
    hsla: new RegExp('hsla' + bf),
    hsv: new RegExp('hsv' + wf),
    hsva: new RegExp('hsva' + bf),
    hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
    hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
    hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
  }
function rT(e) {
  if (((e = e.trim().toLowerCase()), e.length === 0)) return !1
  var t = !1
  if (Qd[e]) (e = Qd[e]), (t = !0)
  else if (e === 'transparent')
    return { r: 0, g: 0, b: 0, a: 0, format: 'name' }
  var n = Gn.rgb.exec(e)
  return n
    ? { r: n[1], g: n[2], b: n[3] }
    : ((n = Gn.rgba.exec(e)),
      n
        ? { r: n[1], g: n[2], b: n[3], a: n[4] }
        : ((n = Gn.hsl.exec(e)),
          n
            ? { h: n[1], s: n[2], l: n[3] }
            : ((n = Gn.hsla.exec(e)),
              n
                ? { h: n[1], s: n[2], l: n[3], a: n[4] }
                : ((n = Gn.hsv.exec(e)),
                  n
                    ? { h: n[1], s: n[2], v: n[3] }
                    : ((n = Gn.hsva.exec(e)),
                      n
                        ? { h: n[1], s: n[2], v: n[3], a: n[4] }
                        : ((n = Gn.hex8.exec(e)),
                          n
                            ? {
                                r: Sn(n[1]),
                                g: Sn(n[2]),
                                b: Sn(n[3]),
                                a: Yg(n[4]),
                                format: t ? 'name' : 'hex8',
                              }
                            : ((n = Gn.hex6.exec(e)),
                              n
                                ? {
                                    r: Sn(n[1]),
                                    g: Sn(n[2]),
                                    b: Sn(n[3]),
                                    format: t ? 'name' : 'hex',
                                  }
                                : ((n = Gn.hex4.exec(e)),
                                  n
                                    ? {
                                        r: Sn(n[1] + n[1]),
                                        g: Sn(n[2] + n[2]),
                                        b: Sn(n[3] + n[3]),
                                        a: Yg(n[4] + n[4]),
                                        format: t ? 'name' : 'hex8',
                                      }
                                    : ((n = Gn.hex3.exec(e)),
                                      n
                                        ? {
                                            r: Sn(n[1] + n[1]),
                                            g: Sn(n[2] + n[2]),
                                            b: Sn(n[3] + n[3]),
                                            format: t ? 'name' : 'hex',
                                          }
                                        : !1)))))))))
}
function kr(e) {
  return !!Gn.CSS_UNIT.exec(String(e))
}
var jt = (function () {
    function e(t, n) {
      t === void 0 && (t = ''), n === void 0 && (n = {})
      var r
      if (t instanceof e) return t
      typeof t == 'number' && (t = eT(t)), (this.originalInput = t)
      var i = Po(t)
      ;(this.originalInput = t),
        (this.r = i.r),
        (this.g = i.g),
        (this.b = i.b),
        (this.a = i.a),
        (this.roundA = Math.round(100 * this.a) / 100),
        (this.format = (r = n.format) !== null && r !== void 0 ? r : i.format),
        (this.gradientType = n.gradientType),
        this.r < 1 && (this.r = Math.round(this.r)),
        this.g < 1 && (this.g = Math.round(this.g)),
        this.b < 1 && (this.b = Math.round(this.b)),
        (this.isValid = i.ok)
    }
    return (
      (e.prototype.isDark = function () {
        return this.getBrightness() < 128
      }),
      (e.prototype.isLight = function () {
        return !this.isDark()
      }),
      (e.prototype.getBrightness = function () {
        var t = this.toRgb()
        return (t.r * 299 + t.g * 587 + t.b * 114) / 1e3
      }),
      (e.prototype.getLuminance = function () {
        var t = this.toRgb(),
          n,
          r,
          i,
          o = t.r / 255,
          a = t.g / 255,
          s = t.b / 255
        return (
          o <= 0.03928
            ? (n = o / 12.92)
            : (n = Math.pow((o + 0.055) / 1.055, 2.4)),
          a <= 0.03928
            ? (r = a / 12.92)
            : (r = Math.pow((a + 0.055) / 1.055, 2.4)),
          s <= 0.03928
            ? (i = s / 12.92)
            : (i = Math.pow((s + 0.055) / 1.055, 2.4)),
          0.2126 * n + 0.7152 * r + 0.0722 * i
        )
      }),
      (e.prototype.getAlpha = function () {
        return this.a
      }),
      (e.prototype.setAlpha = function (t) {
        return (
          (this.a = qS(t)), (this.roundA = Math.round(100 * this.a) / 100), this
        )
      }),
      (e.prototype.isMonochrome = function () {
        var t = this.toHsl().s
        return t === 0
      }),
      (e.prototype.toHsv = function () {
        var t = Gd(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, v: t.v, a: this.a }
      }),
      (e.prototype.toHsvString = function () {
        var t = Gd(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          i = Math.round(t.v * 100)
        return this.a === 1
          ? 'hsv('.concat(n, ', ').concat(r, '%, ').concat(i, '%)')
          : 'hsva('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(i, '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toHsl = function () {
        var t = Qg(this.r, this.g, this.b)
        return { h: t.h * 360, s: t.s, l: t.l, a: this.a }
      }),
      (e.prototype.toHslString = function () {
        var t = Qg(this.r, this.g, this.b),
          n = Math.round(t.h * 360),
          r = Math.round(t.s * 100),
          i = Math.round(t.l * 100)
        return this.a === 1
          ? 'hsl('.concat(n, ', ').concat(r, '%, ').concat(i, '%)')
          : 'hsla('
              .concat(n, ', ')
              .concat(r, '%, ')
              .concat(i, '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toHex = function (t) {
        return t === void 0 && (t = !1), Xd(this.r, this.g, this.b, t)
      }),
      (e.prototype.toHexString = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex(t)
      }),
      (e.prototype.toHex8 = function (t) {
        return t === void 0 && (t = !1), Zk(this.r, this.g, this.b, this.a, t)
      }),
      (e.prototype.toHex8String = function (t) {
        return t === void 0 && (t = !1), '#' + this.toHex8(t)
      }),
      (e.prototype.toHexShortString = function (t) {
        return (
          t === void 0 && (t = !1),
          this.a === 1 ? this.toHexString(t) : this.toHex8String(t)
        )
      }),
      (e.prototype.toRgb = function () {
        return {
          r: Math.round(this.r),
          g: Math.round(this.g),
          b: Math.round(this.b),
          a: this.a,
        }
      }),
      (e.prototype.toRgbString = function () {
        var t = Math.round(this.r),
          n = Math.round(this.g),
          r = Math.round(this.b)
        return this.a === 1
          ? 'rgb('.concat(t, ', ').concat(n, ', ').concat(r, ')')
          : 'rgba('
              .concat(t, ', ')
              .concat(n, ', ')
              .concat(r, ', ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toPercentageRgb = function () {
        var t = function (n) {
          return ''.concat(Math.round(Dt(n, 255) * 100), '%')
        }
        return { r: t(this.r), g: t(this.g), b: t(this.b), a: this.a }
      }),
      (e.prototype.toPercentageRgbString = function () {
        var t = function (n) {
          return Math.round(Dt(n, 255) * 100)
        }
        return this.a === 1
          ? 'rgb('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%)')
          : 'rgba('
              .concat(t(this.r), '%, ')
              .concat(t(this.g), '%, ')
              .concat(t(this.b), '%, ')
              .concat(this.roundA, ')')
      }),
      (e.prototype.toName = function () {
        if (this.a === 0) return 'transparent'
        if (this.a < 1) return !1
        for (
          var t = '#' + Xd(this.r, this.g, this.b, !1),
            n = 0,
            r = Object.entries(Qd);
          n < r.length;
          n++
        ) {
          var i = r[n],
            o = i[0],
            a = i[1]
          if (t === a) return o
        }
        return !1
      }),
      (e.prototype.toString = function (t) {
        var n = !!t
        t = t ?? this.format
        var r = !1,
          i = this.a < 1 && this.a >= 0,
          o = !n && i && (t.startsWith('hex') || t === 'name')
        return o
          ? t === 'name' && this.a === 0
            ? this.toName()
            : this.toRgbString()
          : (t === 'rgb' && (r = this.toRgbString()),
            t === 'prgb' && (r = this.toPercentageRgbString()),
            (t === 'hex' || t === 'hex6') && (r = this.toHexString()),
            t === 'hex3' && (r = this.toHexString(!0)),
            t === 'hex4' && (r = this.toHex8String(!0)),
            t === 'hex8' && (r = this.toHex8String()),
            t === 'name' && (r = this.toName()),
            t === 'hsl' && (r = this.toHslString()),
            t === 'hsv' && (r = this.toHsvString()),
            r || this.toHexString())
      }),
      (e.prototype.toNumber = function () {
        return (
          (Math.round(this.r) << 16) +
          (Math.round(this.g) << 8) +
          Math.round(this.b)
        )
      }),
      (e.prototype.clone = function () {
        return new e(this.toString())
      }),
      (e.prototype.lighten = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.l += t / 100), (n.l = El(n.l)), new e(n)
      }),
      (e.prototype.brighten = function (t) {
        t === void 0 && (t = 10)
        var n = this.toRgb()
        return (
          (n.r = Math.max(
            0,
            Math.min(255, n.r - Math.round(255 * -(t / 100))),
          )),
          (n.g = Math.max(
            0,
            Math.min(255, n.g - Math.round(255 * -(t / 100))),
          )),
          (n.b = Math.max(
            0,
            Math.min(255, n.b - Math.round(255 * -(t / 100))),
          )),
          new e(n)
        )
      }),
      (e.prototype.darken = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.l -= t / 100), (n.l = El(n.l)), new e(n)
      }),
      (e.prototype.tint = function (t) {
        return t === void 0 && (t = 10), this.mix('white', t)
      }),
      (e.prototype.shade = function (t) {
        return t === void 0 && (t = 10), this.mix('black', t)
      }),
      (e.prototype.desaturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s -= t / 100), (n.s = El(n.s)), new e(n)
      }),
      (e.prototype.saturate = function (t) {
        t === void 0 && (t = 10)
        var n = this.toHsl()
        return (n.s += t / 100), (n.s = El(n.s)), new e(n)
      }),
      (e.prototype.greyscale = function () {
        return this.desaturate(100)
      }),
      (e.prototype.spin = function (t) {
        var n = this.toHsl(),
          r = (n.h + t) % 360
        return (n.h = r < 0 ? 360 + r : r), new e(n)
      }),
      (e.prototype.mix = function (t, n) {
        n === void 0 && (n = 50)
        var r = this.toRgb(),
          i = new e(t).toRgb(),
          o = n / 100,
          a = {
            r: (i.r - r.r) * o + r.r,
            g: (i.g - r.g) * o + r.g,
            b: (i.b - r.b) * o + r.b,
            a: (i.a - r.a) * o + r.a,
          }
        return new e(a)
      }),
      (e.prototype.analogous = function (t, n) {
        t === void 0 && (t = 6), n === void 0 && (n = 30)
        var r = this.toHsl(),
          i = 360 / n,
          o = [this]
        for (r.h = (r.h - ((i * t) >> 1) + 720) % 360; --t; )
          (r.h = (r.h + i) % 360), o.push(new e(r))
        return o
      }),
      (e.prototype.complement = function () {
        var t = this.toHsl()
        return (t.h = (t.h + 180) % 360), new e(t)
      }),
      (e.prototype.monochromatic = function (t) {
        t === void 0 && (t = 6)
        for (
          var n = this.toHsv(), r = n.h, i = n.s, o = n.v, a = [], s = 1 / t;
          t--;

        )
          a.push(new e({ h: r, s: i, v: o })), (o = (o + s) % 1)
        return a
      }),
      (e.prototype.splitcomplement = function () {
        var t = this.toHsl(),
          n = t.h
        return [
          this,
          new e({ h: (n + 72) % 360, s: t.s, l: t.l }),
          new e({ h: (n + 216) % 360, s: t.s, l: t.l }),
        ]
      }),
      (e.prototype.onBackground = function (t) {
        var n = this.toRgb(),
          r = new e(t).toRgb(),
          i = n.a + r.a * (1 - n.a)
        return new e({
          r: (n.r * n.a + r.r * r.a * (1 - n.a)) / i,
          g: (n.g * n.a + r.g * r.a * (1 - n.a)) / i,
          b: (n.b * n.a + r.b * r.a * (1 - n.a)) / i,
          a: i,
        })
      }),
      (e.prototype.triad = function () {
        return this.polyad(3)
      }),
      (e.prototype.tetrad = function () {
        return this.polyad(4)
      }),
      (e.prototype.polyad = function (t) {
        for (
          var n = this.toHsl(), r = n.h, i = [this], o = 360 / t, a = 1;
          a < t;
          a++
        )
          i.push(new e({ h: (r + a * o) % 360, s: n.s, l: n.l }))
        return i
      }),
      (e.prototype.equals = function (t) {
        return this.toRgbString() === new e(t).toRgbString()
      }),
      e
    )
  })(),
  kl = 2,
  Zg = 0.16,
  iT = 0.05,
  oT = 0.05,
  aT = 0.15,
  GS = 5,
  XS = 4,
  sT = [
    { index: 7, opacity: 0.15 },
    { index: 6, opacity: 0.25 },
    { index: 5, opacity: 0.3 },
    { index: 5, opacity: 0.45 },
    { index: 5, opacity: 0.65 },
    { index: 5, opacity: 0.85 },
    { index: 4, opacity: 0.9 },
    { index: 3, opacity: 0.95 },
    { index: 2, opacity: 0.97 },
    { index: 1, opacity: 0.98 },
  ]
function Jg(e) {
  var t = e.r,
    n = e.g,
    r = e.b,
    i = Gd(t, n, r)
  return { h: i.h * 360, s: i.s, v: i.v }
}
function Tl(e) {
  var t = e.r,
    n = e.g,
    r = e.b
  return '#'.concat(Xd(t, n, r, !1))
}
function lT(e, t, n) {
  var r = n / 100,
    i = {
      r: (t.r - e.r) * r + e.r,
      g: (t.g - e.g) * r + e.g,
      b: (t.b - e.b) * r + e.b,
    }
  return i
}
function ev(e, t, n) {
  var r
  return (
    Math.round(e.h) >= 60 && Math.round(e.h) <= 240
      ? (r = n ? Math.round(e.h) - kl * t : Math.round(e.h) + kl * t)
      : (r = n ? Math.round(e.h) + kl * t : Math.round(e.h) - kl * t),
    r < 0 ? (r += 360) : r >= 360 && (r -= 360),
    r
  )
}
function tv(e, t, n) {
  if (e.h === 0 && e.s === 0) return e.s
  var r
  return (
    n ? (r = e.s - Zg * t) : t === XS ? (r = e.s + Zg) : (r = e.s + iT * t),
    r > 1 && (r = 1),
    n && t === GS && r > 0.1 && (r = 0.1),
    r < 0.06 && (r = 0.06),
    Number(r.toFixed(2))
  )
}
function nv(e, t, n) {
  var r
  return (
    n ? (r = e.v + oT * t) : (r = e.v - aT * t),
    r > 1 && (r = 1),
    Number(r.toFixed(2))
  )
}
function Ms(e) {
  for (
    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      n = [],
      r = Po(e),
      i = GS;
    i > 0;
    i -= 1
  ) {
    var o = Jg(r),
      a = Tl(Po({ h: ev(o, i, !0), s: tv(o, i, !0), v: nv(o, i, !0) }))
    n.push(a)
  }
  n.push(Tl(r))
  for (var s = 1; s <= XS; s += 1) {
    var l = Jg(r),
      u = Tl(Po({ h: ev(l, s), s: tv(l, s), v: nv(l, s) }))
    n.push(u)
  }
  return t.theme === 'dark'
    ? sT.map(function (c) {
        var f = c.index,
          d = c.opacity,
          g = Tl(lT(Po(t.backgroundColor || '#141414'), Po(n[f]), d * 100))
        return g
      })
    : n
}
var xf = {
    red: '#F5222D',
    volcano: '#FA541C',
    orange: '#FA8C16',
    gold: '#FAAD14',
    yellow: '#FADB14',
    lime: '#A0D911',
    green: '#52C41A',
    cyan: '#13C2C2',
    blue: '#1677FF',
    geekblue: '#2F54EB',
    purple: '#722ED1',
    magenta: '#EB2F96',
    grey: '#666666',
  },
  Yd = [
    '#fff1f0',
    '#ffccc7',
    '#ffa39e',
    '#ff7875',
    '#ff4d4f',
    '#f5222d',
    '#cf1322',
    '#a8071a',
    '#820014',
    '#5c0011',
  ]
Yd.primary = Yd[5]
var Zd = [
  '#fff2e8',
  '#ffd8bf',
  '#ffbb96',
  '#ff9c6e',
  '#ff7a45',
  '#fa541c',
  '#d4380d',
  '#ad2102',
  '#871400',
  '#610b00',
]
Zd.primary = Zd[5]
var Jd = [
  '#fff7e6',
  '#ffe7ba',
  '#ffd591',
  '#ffc069',
  '#ffa940',
  '#fa8c16',
  '#d46b08',
  '#ad4e00',
  '#873800',
  '#612500',
]
Jd.primary = Jd[5]
var ep = [
  '#fffbe6',
  '#fff1b8',
  '#ffe58f',
  '#ffd666',
  '#ffc53d',
  '#faad14',
  '#d48806',
  '#ad6800',
  '#874d00',
  '#613400',
]
ep.primary = ep[5]
var tp = [
  '#feffe6',
  '#ffffb8',
  '#fffb8f',
  '#fff566',
  '#ffec3d',
  '#fadb14',
  '#d4b106',
  '#ad8b00',
  '#876800',
  '#614700',
]
tp.primary = tp[5]
var np = [
  '#fcffe6',
  '#f4ffb8',
  '#eaff8f',
  '#d3f261',
  '#bae637',
  '#a0d911',
  '#7cb305',
  '#5b8c00',
  '#3f6600',
  '#254000',
]
np.primary = np[5]
var rp = [
  '#f6ffed',
  '#d9f7be',
  '#b7eb8f',
  '#95de64',
  '#73d13d',
  '#52c41a',
  '#389e0d',
  '#237804',
  '#135200',
  '#092b00',
]
rp.primary = rp[5]
var ip = [
  '#e6fffb',
  '#b5f5ec',
  '#87e8de',
  '#5cdbd3',
  '#36cfc9',
  '#13c2c2',
  '#08979c',
  '#006d75',
  '#00474f',
  '#002329',
]
ip.primary = ip[5]
var Au = [
  '#e6f4ff',
  '#bae0ff',
  '#91caff',
  '#69b1ff',
  '#4096ff',
  '#1677ff',
  '#0958d9',
  '#003eb3',
  '#002c8c',
  '#001d66',
]
Au.primary = Au[5]
var op = [
  '#f0f5ff',
  '#d6e4ff',
  '#adc6ff',
  '#85a5ff',
  '#597ef7',
  '#2f54eb',
  '#1d39c4',
  '#10239e',
  '#061178',
  '#030852',
]
op.primary = op[5]
var ap = [
  '#f9f0ff',
  '#efdbff',
  '#d3adf7',
  '#b37feb',
  '#9254de',
  '#722ed1',
  '#531dab',
  '#391085',
  '#22075e',
  '#120338',
]
ap.primary = ap[5]
var sp = [
  '#fff0f6',
  '#ffd6e7',
  '#ffadd2',
  '#ff85c0',
  '#f759ab',
  '#eb2f96',
  '#c41d7f',
  '#9e1068',
  '#780650',
  '#520339',
]
sp.primary = sp[5]
var lp = [
  '#a6a6a6',
  '#999999',
  '#8c8c8c',
  '#808080',
  '#737373',
  '#666666',
  '#404040',
  '#1a1a1a',
  '#000000',
  '#000000',
]
lp.primary = lp[5]
var Ef = {
  red: Yd,
  volcano: Zd,
  orange: Jd,
  gold: ep,
  yellow: tp,
  lime: np,
  green: rp,
  cyan: ip,
  blue: Au,
  geekblue: op,
  purple: ap,
  magenta: sp,
  grey: lp,
}
const QS = {
    blue: '#1677FF',
    purple: '#722ED1',
    cyan: '#13C2C2',
    green: '#52C41A',
    magenta: '#EB2F96',
    pink: '#EB2F96',
    red: '#F5222D',
    orange: '#FA8C16',
    yellow: '#FADB14',
    volcano: '#FA541C',
    geekblue: '#2F54EB',
    gold: '#FAAD14',
    lime: '#A0D911',
  },
  Ns = Object.assign(Object.assign({}, QS), {
    colorPrimary: '#1677ff',
    colorSuccess: '#52c41a',
    colorWarning: '#faad14',
    colorError: '#ff4d4f',
    colorInfo: '#1677ff',
    colorLink: '',
    colorTextBase: '',
    colorBgBase: '',
    fontFamily: `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial,
'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol',
'Noto Color Emoji'`,
    fontFamilyCode:
      "'SFMono-Regular', Consolas, 'Liberation Mono', Menlo, Courier, monospace",
    fontSize: 14,
    lineWidth: 1,
    lineType: 'solid',
    motionUnit: 0.1,
    motionBase: 0,
    motionEaseOutCirc: 'cubic-bezier(0.08, 0.82, 0.17, 1)',
    motionEaseInOutCirc: 'cubic-bezier(0.78, 0.14, 0.15, 0.86)',
    motionEaseOut: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
    motionEaseInOut: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    motionEaseOutBack: 'cubic-bezier(0.12, 0.4, 0.29, 1.46)',
    motionEaseInBack: 'cubic-bezier(0.71, -0.46, 0.88, 0.6)',
    motionEaseInQuint: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
    motionEaseOutQuint: 'cubic-bezier(0.23, 1, 0.32, 1)',
    borderRadius: 6,
    sizeUnit: 4,
    sizeStep: 4,
    sizePopupArrow: 16,
    controlHeight: 32,
    zIndexBase: 0,
    zIndexPopupBase: 1e3,
    opacityImage: 1,
    wireframe: !1,
    motion: !0,
  })
function uT(e, t) {
  let { generateColorPalettes: n, generateNeutralColorPalettes: r } = t
  const {
      colorSuccess: i,
      colorWarning: o,
      colorError: a,
      colorInfo: s,
      colorPrimary: l,
      colorBgBase: u,
      colorTextBase: c,
    } = e,
    f = n(l),
    d = n(i),
    g = n(o),
    y = n(a),
    S = n(s),
    C = r(u, c),
    v = e.colorLink || e.colorInfo,
    h = n(v),
    m = new jt(y[1]).mix(new jt(y[3]), 50).toHexString()
  return Object.assign(Object.assign({}, C), {
    colorPrimaryBg: f[1],
    colorPrimaryBgHover: f[2],
    colorPrimaryBorder: f[3],
    colorPrimaryBorderHover: f[4],
    colorPrimaryHover: f[5],
    colorPrimary: f[6],
    colorPrimaryActive: f[7],
    colorPrimaryTextHover: f[8],
    colorPrimaryText: f[9],
    colorPrimaryTextActive: f[10],
    colorSuccessBg: d[1],
    colorSuccessBgHover: d[2],
    colorSuccessBorder: d[3],
    colorSuccessBorderHover: d[4],
    colorSuccessHover: d[4],
    colorSuccess: d[6],
    colorSuccessActive: d[7],
    colorSuccessTextHover: d[8],
    colorSuccessText: d[9],
    colorSuccessTextActive: d[10],
    colorErrorBg: y[1],
    colorErrorBgHover: y[2],
    colorErrorBgFilledHover: m,
    colorErrorBgActive: y[3],
    colorErrorBorder: y[3],
    colorErrorBorderHover: y[4],
    colorErrorHover: y[5],
    colorError: y[6],
    colorErrorActive: y[7],
    colorErrorTextHover: y[8],
    colorErrorText: y[9],
    colorErrorTextActive: y[10],
    colorWarningBg: g[1],
    colorWarningBgHover: g[2],
    colorWarningBorder: g[3],
    colorWarningBorderHover: g[4],
    colorWarningHover: g[4],
    colorWarning: g[6],
    colorWarningActive: g[7],
    colorWarningTextHover: g[8],
    colorWarningText: g[9],
    colorWarningTextActive: g[10],
    colorInfoBg: S[1],
    colorInfoBgHover: S[2],
    colorInfoBorder: S[3],
    colorInfoBorderHover: S[4],
    colorInfoHover: S[4],
    colorInfo: S[6],
    colorInfoActive: S[7],
    colorInfoTextHover: S[8],
    colorInfoText: S[9],
    colorInfoTextActive: S[10],
    colorLinkHover: h[4],
    colorLink: h[6],
    colorLinkActive: h[7],
    colorBgMask: new jt('#000').setAlpha(0.45).toRgbString(),
    colorWhite: '#fff',
  })
}
const cT = (e) => {
  let t = e,
    n = e,
    r = e,
    i = e
  return (
    e < 6 && e >= 5
      ? (t = e + 1)
      : e < 16 && e >= 6
        ? (t = e + 2)
        : e >= 16 && (t = 16),
    e < 7 && e >= 5
      ? (n = 4)
      : e < 8 && e >= 7
        ? (n = 5)
        : e < 14 && e >= 8
          ? (n = 6)
          : e < 16 && e >= 14
            ? (n = 7)
            : e >= 16 && (n = 8),
    e < 6 && e >= 2 ? (r = 1) : e >= 6 && (r = 2),
    e > 4 && e < 8 ? (i = 4) : e >= 8 && (i = 6),
    {
      borderRadius: e,
      borderRadiusXS: r,
      borderRadiusSM: n,
      borderRadiusLG: t,
      borderRadiusOuter: i,
    }
  )
}
function fT(e) {
  const { motionUnit: t, motionBase: n, borderRadius: r, lineWidth: i } = e
  return Object.assign(
    {
      motionDurationFast: `${(n + t).toFixed(1)}s`,
      motionDurationMid: `${(n + t * 2).toFixed(1)}s`,
      motionDurationSlow: `${(n + t * 3).toFixed(1)}s`,
      lineWidthBold: i + 1,
    },
    cT(r),
  )
}
const dT = (e) => {
  const { controlHeight: t } = e
  return {
    controlHeightSM: t * 0.75,
    controlHeightXS: t * 0.5,
    controlHeightLG: t * 1.25,
  }
}
function pT(e) {
  return (e + 8) / e
}
function hT(e) {
  const t = new Array(10).fill(null).map((n, r) => {
    const i = r - 1,
      o = e * Math.pow(Math.E, i / 5),
      a = r > 1 ? Math.floor(o) : Math.ceil(o)
    return Math.floor(a / 2) * 2
  })
  return (t[1] = e), t.map((n) => ({ size: n, lineHeight: pT(n) }))
}
const mT = (e) => {
  const t = hT(e),
    n = t.map((c) => c.size),
    r = t.map((c) => c.lineHeight),
    i = n[1],
    o = n[0],
    a = n[2],
    s = r[1],
    l = r[0],
    u = r[2]
  return {
    fontSizeSM: o,
    fontSize: i,
    fontSizeLG: a,
    fontSizeXL: n[3],
    fontSizeHeading1: n[6],
    fontSizeHeading2: n[5],
    fontSizeHeading3: n[4],
    fontSizeHeading4: n[3],
    fontSizeHeading5: n[2],
    lineHeight: s,
    lineHeightLG: u,
    lineHeightSM: l,
    fontHeight: Math.round(s * i),
    fontHeightLG: Math.round(u * a),
    fontHeightSM: Math.round(l * o),
    lineHeightHeading1: r[6],
    lineHeightHeading2: r[5],
    lineHeightHeading3: r[4],
    lineHeightHeading4: r[3],
    lineHeightHeading5: r[2],
  }
}
function gT(e) {
  const { sizeUnit: t, sizeStep: n } = e
  return {
    sizeXXL: t * (n + 8),
    sizeXL: t * (n + 4),
    sizeLG: t * (n + 2),
    sizeMD: t * (n + 1),
    sizeMS: t * n,
    size: t * n,
    sizeSM: t * (n - 1),
    sizeXS: t * (n - 2),
    sizeXXS: t * (n - 3),
  }
}
const $n = (e, t) => new jt(e).setAlpha(t).toRgbString(),
  Ia = (e, t) => new jt(e).darken(t).toHexString(),
  vT = (e) => {
    const t = Ms(e)
    return {
      1: t[0],
      2: t[1],
      3: t[2],
      4: t[3],
      5: t[4],
      6: t[5],
      7: t[6],
      8: t[4],
      9: t[5],
      10: t[6],
    }
  },
  yT = (e, t) => {
    const n = e || '#fff',
      r = t || '#000'
    return {
      colorBgBase: n,
      colorTextBase: r,
      colorText: $n(r, 0.88),
      colorTextSecondary: $n(r, 0.65),
      colorTextTertiary: $n(r, 0.45),
      colorTextQuaternary: $n(r, 0.25),
      colorFill: $n(r, 0.15),
      colorFillSecondary: $n(r, 0.06),
      colorFillTertiary: $n(r, 0.04),
      colorFillQuaternary: $n(r, 0.02),
      colorBgSolid: $n(r, 1),
      colorBgSolidHover: $n(r, 0.75),
      colorBgSolidActive: $n(r, 0.95),
      colorBgLayout: Ia(n, 4),
      colorBgContainer: Ia(n, 0),
      colorBgElevated: Ia(n, 0),
      colorBgSpotlight: $n(r, 0.85),
      colorBgBlur: 'transparent',
      colorBorder: Ia(n, 15),
      colorBorderSecondary: Ia(n, 6),
    }
  }
function ST(e) {
  ;(xf.pink = xf.magenta), (Ef.pink = Ef.magenta)
  const t = Object.keys(QS)
    .map((n) => {
      const r = e[n] === xf[n] ? Ef[n] : Ms(e[n])
      return new Array(10)
        .fill(1)
        .reduce(
          (i, o, a) => (
            (i[`${n}-${a + 1}`] = r[a]), (i[`${n}${a + 1}`] = r[a]), i
          ),
          {},
        )
    })
    .reduce((n, r) => ((n = Object.assign(Object.assign({}, n), r)), n), {})
  return Object.assign(
    Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, e), t),
            uT(e, {
              generateColorPalettes: vT,
              generateNeutralColorPalettes: yT,
            }),
          ),
          mT(e.fontSize),
        ),
        gT(e),
      ),
      dT(e),
    ),
    fT(e),
  )
}
const YS = Bd(ST),
  up = { token: Ns, override: { override: Ns }, hashed: !0 },
  ZS = ze.createContext(up),
  Fu = 'ant',
  JS = 'anticon',
  y5 = ['outlined', 'borderless', 'filled'],
  CT = (e, t) => t || (e ? `${Fu}-${e}` : Fu),
  dn = p.createContext({ getPrefixCls: CT, iconPrefixCls: JS }),
  wT = `-ant-${Date.now()}-${Math.random()}`
function bT(e, t) {
  const n = {},
    r = (a, s) => {
      let l = a.clone()
      return (l = (s == null ? void 0 : s(l)) || l), l.toRgbString()
    },
    i = (a, s) => {
      const l = new jt(a),
        u = Ms(l.toRgbString())
      ;(n[`${s}-color`] = r(l)),
        (n[`${s}-color-disabled`] = u[1]),
        (n[`${s}-color-hover`] = u[4]),
        (n[`${s}-color-active`] = u[6]),
        (n[`${s}-color-outline`] = l.clone().setAlpha(0.2).toRgbString()),
        (n[`${s}-color-deprecated-bg`] = u[0]),
        (n[`${s}-color-deprecated-border`] = u[2])
    }
  if (t.primaryColor) {
    i(t.primaryColor, 'primary')
    const a = new jt(t.primaryColor),
      s = Ms(a.toRgbString())
    s.forEach((u, c) => {
      n[`primary-${c + 1}`] = u
    }),
      (n['primary-color-deprecated-l-35'] = r(a, (u) => u.lighten(35))),
      (n['primary-color-deprecated-l-20'] = r(a, (u) => u.lighten(20))),
      (n['primary-color-deprecated-t-20'] = r(a, (u) => u.tint(20))),
      (n['primary-color-deprecated-t-50'] = r(a, (u) => u.tint(50))),
      (n['primary-color-deprecated-f-12'] = r(a, (u) =>
        u.setAlpha(u.getAlpha() * 0.12),
      ))
    const l = new jt(s[0])
    ;(n['primary-color-active-deprecated-f-30'] = r(l, (u) =>
      u.setAlpha(u.getAlpha() * 0.3),
    )),
      (n['primary-color-active-deprecated-d-02'] = r(l, (u) => u.darken(2)))
  }
  return (
    t.successColor && i(t.successColor, 'success'),
    t.warningColor && i(t.warningColor, 'warning'),
    t.errorColor && i(t.errorColor, 'error'),
    t.infoColor && i(t.infoColor, 'info'),
    `
  :root {
    ${Object.keys(n).map((a) => `--${e}-${a}: ${n[a]};`).join(`
`)}
  }
  `.trim()
  )
}
function xT(e, t) {
  const n = bT(e, t)
  Pn() && Nr(n, `${wT}-dynamic-theme`)
}
const cp = p.createContext(!1),
  ET = (e) => {
    let { children: t, disabled: n } = e
    const r = p.useContext(cp)
    return p.createElement(cp.Provider, { value: n ?? r }, t)
  },
  _s = p.createContext(void 0),
  PT = (e) => {
    let { children: t, size: n } = e
    const r = p.useContext(_s)
    return p.createElement(_s.Provider, { value: n || r }, t)
  }
function kT() {
  const e = p.useContext(cp),
    t = p.useContext(_s)
  return { componentDisabled: e, componentSize: t }
}
var eC = Bt(function e() {
    Vt(this, e)
  }),
  tC = 'CALC_UNIT',
  TT = new RegExp(tC, 'g')
function Pf(e) {
  return typeof e == 'number' ? ''.concat(e).concat(tC) : e
}
var OT = (function (e) {
    wi(n, e)
    var t = bi(n)
    function n(r, i) {
      var o
      Vt(this, n),
        (o = t.call(this)),
        $(ue(o), 'result', ''),
        $(ue(o), 'unitlessCssVar', void 0),
        $(ue(o), 'lowPriority', void 0)
      var a = ae(r)
      return (
        (o.unitlessCssVar = i),
        r instanceof n
          ? (o.result = '('.concat(r.result, ')'))
          : a === 'number'
            ? (o.result = Pf(r))
            : a === 'string' && (o.result = r),
        o
      )
    }
    return (
      Bt(n, [
        {
          key: 'add',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' + ')
                    .concat(i.getResult()))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' + ').concat(Pf(i))),
              (this.lowPriority = !0),
              this
            )
          },
        },
        {
          key: 'sub',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' - ')
                    .concat(i.getResult()))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' - ').concat(Pf(i))),
              (this.lowPriority = !0),
              this
            )
          },
        },
        {
          key: 'mul',
          value: function (i) {
            return (
              this.lowPriority && (this.result = '('.concat(this.result, ')')),
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' * ')
                    .concat(i.getResult(!0)))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' * ').concat(i)),
              (this.lowPriority = !1),
              this
            )
          },
        },
        {
          key: 'div',
          value: function (i) {
            return (
              this.lowPriority && (this.result = '('.concat(this.result, ')')),
              i instanceof n
                ? (this.result = ''
                    .concat(this.result, ' / ')
                    .concat(i.getResult(!0)))
                : (typeof i == 'number' || typeof i == 'string') &&
                  (this.result = ''.concat(this.result, ' / ').concat(i)),
              (this.lowPriority = !1),
              this
            )
          },
        },
        {
          key: 'getResult',
          value: function (i) {
            return this.lowPriority || i
              ? '('.concat(this.result, ')')
              : this.result
          },
        },
        {
          key: 'equal',
          value: function (i) {
            var o = this,
              a = i || {},
              s = a.unit,
              l = !0
            return (
              typeof s == 'boolean'
                ? (l = s)
                : Array.from(this.unitlessCssVar).some(function (u) {
                    return o.result.includes(u)
                  }) && (l = !1),
              (this.result = this.result.replace(TT, l ? 'px' : '')),
              typeof this.lowPriority < 'u'
                ? 'calc('.concat(this.result, ')')
                : this.result
            )
          },
        },
      ]),
      n
    )
  })(eC),
  RT = (function (e) {
    wi(n, e)
    var t = bi(n)
    function n(r) {
      var i
      return (
        Vt(this, n),
        (i = t.call(this)),
        $(ue(i), 'result', 0),
        r instanceof n
          ? (i.result = r.result)
          : typeof r == 'number' && (i.result = r),
        i
      )
    }
    return (
      Bt(n, [
        {
          key: 'add',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result += i.result)
                : typeof i == 'number' && (this.result += i),
              this
            )
          },
        },
        {
          key: 'sub',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result -= i.result)
                : typeof i == 'number' && (this.result -= i),
              this
            )
          },
        },
        {
          key: 'mul',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result *= i.result)
                : typeof i == 'number' && (this.result *= i),
              this
            )
          },
        },
        {
          key: 'div',
          value: function (i) {
            return (
              i instanceof n
                ? (this.result /= i.result)
                : typeof i == 'number' && (this.result /= i),
              this
            )
          },
        },
        {
          key: 'equal',
          value: function () {
            return this.result
          },
        },
      ]),
      n
    )
  })(eC),
  IT = function (t, n) {
    var r = t === 'css' ? OT : RT
    return function (i) {
      return new r(i, n)
    }
  },
  rv = function (t, n) {
    return ''.concat(
      [
        n,
        t
          .replace(/([A-Z]+)([A-Z][a-z]+)/g, '$1-$2')
          .replace(/([a-z])([A-Z])/g, '$1-$2'),
      ]
        .filter(Boolean)
        .join('-'),
    )
  }
function sn(e) {
  var t = p.useRef()
  t.current = e
  var n = p.useCallback(function () {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a]
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(o))
  }, [])
  return n
}
function Ls(e) {
  var t = p.useRef(!1),
    n = p.useState(e),
    r = B(n, 2),
    i = r[0],
    o = r[1]
  p.useEffect(function () {
    return (
      (t.current = !1),
      function () {
        t.current = !0
      }
    )
  }, [])
  function a(s, l) {
    ;(l && t.current) || o(s)
  }
  return [i, a]
}
function kf(e) {
  return e !== void 0
}
function Ja(e, t) {
  var n = t || {},
    r = n.defaultValue,
    i = n.value,
    o = n.onChange,
    a = n.postState,
    s = Ls(function () {
      return kf(i)
        ? i
        : kf(r)
          ? typeof r == 'function'
            ? r()
            : r
          : typeof e == 'function'
            ? e()
            : e
    }),
    l = B(s, 2),
    u = l[0],
    c = l[1],
    f = i !== void 0 ? i : u,
    d = a ? a(f) : f,
    g = sn(o),
    y = Ls([f]),
    S = B(y, 2),
    C = S[0],
    v = S[1]
  Hg(
    function () {
      var m = C[0]
      u !== m && g(u, m)
    },
    [C],
  ),
    Hg(
      function () {
        kf(i) || c(i)
      },
      [i],
    )
  var h = sn(function (m, w) {
    c(m, w), v([f], w)
  })
  return [d, h]
}
function iv(e, t, n, r) {
  var i = _({}, t[e])
  if (r != null && r.deprecatedTokens) {
    var o = r.deprecatedTokens
    o.forEach(function (s) {
      var l = B(s, 2),
        u = l[0],
        c = l[1]
      if ((i != null && i[u]) || (i != null && i[c])) {
        var f
        ;((f = i[c]) !== null && f !== void 0) ||
          (i[c] = i == null ? void 0 : i[u])
      }
    })
  }
  var a = _(_({}, n), i)
  return (
    Object.keys(a).forEach(function (s) {
      a[s] === t[s] && delete a[s]
    }),
    a
  )
}
var nC = typeof CSSINJS_STATISTIC < 'u',
  fp = !0
function Yi() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  if (!nC) return Object.assign.apply(Object, [{}].concat(t))
  fp = !1
  var r = {}
  return (
    t.forEach(function (i) {
      if (ae(i) === 'object') {
        var o = Object.keys(i)
        o.forEach(function (a) {
          Object.defineProperty(r, a, {
            configurable: !0,
            enumerable: !0,
            get: function () {
              return i[a]
            },
          })
        })
      }
    }),
    (fp = !0),
    r
  )
}
var ov = {}
function $T() {}
var MT = function (t) {
  var n,
    r = t,
    i = $T
  return (
    nC &&
      typeof Proxy < 'u' &&
      ((n = new Set()),
      (r = new Proxy(t, {
        get: function (a, s) {
          if (fp) {
            var l
            ;(l = n) === null || l === void 0 || l.add(s)
          }
          return a[s]
        },
      })),
      (i = function (a, s) {
        var l
        ov[a] = {
          global: Array.from(n),
          component: _(
            _({}, (l = ov[a]) === null || l === void 0 ? void 0 : l.component),
            s,
          ),
        }
      })),
    { token: r, keys: n, flush: i }
  )
}
function av(e, t, n) {
  if (typeof n == 'function') {
    var r
    return n(Yi(t, (r = t[e]) !== null && r !== void 0 ? r : {}))
  }
  return n ?? {}
}
function NT(e) {
  return e === 'js'
    ? { max: Math.max, min: Math.min }
    : {
        max: function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i]
          return 'max('.concat(
            r
              .map(function (o) {
                return ye(o)
              })
              .join(','),
            ')',
          )
        },
        min: function () {
          for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
            r[i] = arguments[i]
          return 'min('.concat(
            r
              .map(function (o) {
                return ye(o)
              })
              .join(','),
            ')',
          )
        },
      }
}
var _T = 1e3 * 60 * 10,
  LT = (function () {
    function e() {
      Vt(this, e),
        $(this, 'map', new Map()),
        $(this, 'objectIDMap', new WeakMap()),
        $(this, 'nextID', 0),
        $(this, 'lastAccessBeat', new Map()),
        $(this, 'accessBeat', 0)
    }
    return (
      Bt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.clear()
            var i = this.getCompositeKey(n)
            this.map.set(i, r), this.lastAccessBeat.set(i, Date.now())
          },
        },
        {
          key: 'get',
          value: function (n) {
            var r = this.getCompositeKey(n),
              i = this.map.get(r)
            return (
              this.lastAccessBeat.set(r, Date.now()), (this.accessBeat += 1), i
            )
          },
        },
        {
          key: 'getCompositeKey',
          value: function (n) {
            var r = this,
              i = n.map(function (o) {
                return o && ae(o) === 'object'
                  ? 'obj_'.concat(r.getObjectID(o))
                  : ''.concat(ae(o), '_').concat(o)
              })
            return i.join('|')
          },
        },
        {
          key: 'getObjectID',
          value: function (n) {
            if (this.objectIDMap.has(n)) return this.objectIDMap.get(n)
            var r = this.nextID
            return this.objectIDMap.set(n, r), (this.nextID += 1), r
          },
        },
        {
          key: 'clear',
          value: function () {
            var n = this
            if (this.accessBeat > 1e4) {
              var r = Date.now()
              this.lastAccessBeat.forEach(function (i, o) {
                r - i > _T && (n.map.delete(o), n.lastAccessBeat.delete(o))
              }),
                (this.accessBeat = 0)
            }
          },
        },
      ]),
      e
    )
  })(),
  sv = new LT()
function AT(e, t) {
  return ze.useMemo(function () {
    var n = sv.get(t)
    if (n) return n
    var r = e()
    return sv.set(t, r), r
  }, t)
}
var FT = function () {
  return {}
}
function jT(e) {
  var t = e.useCSP,
    n = t === void 0 ? FT : t,
    r = e.useToken,
    i = e.usePrefix,
    o = e.getResetStyles,
    a = e.getCommonStyle,
    s = e.getCompUnitless
  function l(d, g, y, S) {
    var C = Array.isArray(d) ? d[0] : d
    function v(k) {
      return ''
        .concat(String(C))
        .concat(k.slice(0, 1).toUpperCase())
        .concat(k.slice(1))
    }
    var h = (S == null ? void 0 : S.unitless) || {},
      m = typeof s == 'function' ? s(d) : {},
      w = _(_({}, m), {}, $({}, v('zIndexPopup'), !0))
    Object.keys(h).forEach(function (k) {
      w[v(k)] = h[k]
    })
    var b = _(_({}, S), {}, { unitless: w, prefixToken: v }),
      x = c(d, g, y, b),
      E = u(C, y, b)
    return function (k) {
      var O =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : k,
        I = x(k, O),
        L = B(I, 2),
        z = L[1],
        A = E(O),
        F = B(A, 2),
        V = F[0],
        M = F[1]
      return [V, z, M]
    }
  }
  function u(d, g, y) {
    var S = y.unitless,
      C = y.injectStyle,
      v = C === void 0 ? !0 : C,
      h = y.prefixToken,
      m = y.ignore,
      w = function (E) {
        var k = E.rootCls,
          O = E.cssVar,
          I = O === void 0 ? {} : O,
          L = r(),
          z = L.realToken
        return (
          Nk(
            {
              path: [d],
              prefix: I.prefix,
              key: I.key,
              unitless: S,
              ignore: m,
              token: z,
              scope: k,
            },
            function () {
              var A = av(d, z, g),
                F = iv(d, z, A, {
                  deprecatedTokens: y == null ? void 0 : y.deprecatedTokens,
                })
              return (
                Object.keys(A).forEach(function (V) {
                  ;(F[h(V)] = F[V]), delete F[V]
                }),
                F
              )
            },
          ),
          null
        )
      },
      b = function (E) {
        var k = r(),
          O = k.cssVar
        return [
          function (I) {
            return v && O
              ? ze.createElement(
                  ze.Fragment,
                  null,
                  ze.createElement(w, { rootCls: E, cssVar: O, component: d }),
                  I,
                )
              : I
          },
          O == null ? void 0 : O.key,
        ]
      }
    return b
  }
  function c(d, g, y) {
    var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      C = Array.isArray(d) ? d : [d, d],
      v = B(C, 1),
      h = v[0],
      m = C.join('-'),
      w = e.layer || { name: 'antd' }
    return function (b) {
      var x =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b,
        E = r(),
        k = E.theme,
        O = E.realToken,
        I = E.hashId,
        L = E.token,
        z = E.cssVar,
        A = i(),
        F = A.rootPrefixCls,
        V = A.iconPrefixCls,
        M = n(),
        T = z ? 'css' : 'js',
        P = AT(
          function () {
            var D = new Set()
            return (
              z &&
                Object.keys(S.unitless || {}).forEach(function (G) {
                  D.add(Yl(G, z.prefix)), D.add(Yl(G, rv(h, z.prefix)))
                }),
              IT(T, D)
            )
          },
          [T, h, z == null ? void 0 : z.prefix],
        ),
        R = NT(T),
        N = R.max,
        j = R.min,
        H = {
          theme: k,
          token: L,
          hashId: I,
          nonce: function () {
            return M.nonce
          },
          clientOnly: S.clientOnly,
          layer: w,
          order: S.order || -999,
        }
      qd(_(_({}, H), {}, { clientOnly: !1, path: ['Shared', F] }), function () {
        return typeof o == 'function' ? o(L) : []
      })
      var K = qd(_(_({}, H), {}, { path: [m, b, V] }), function () {
        if (S.injectStyle === !1) return []
        var D = MT(L),
          G = D.token,
          re = D.flush,
          ne = av(h, O, y),
          he = '.'.concat(b),
          pe = iv(h, O, ne, { deprecatedTokens: S.deprecatedTokens })
        z &&
          ne &&
          ae(ne) === 'object' &&
          Object.keys(ne).forEach(function (_e) {
            ne[_e] = 'var('.concat(Yl(_e, rv(h, z.prefix)), ')')
          })
        var we = Yi(
            G,
            {
              componentCls: he,
              prefixCls: b,
              iconCls: '.'.concat(V),
              antCls: '.'.concat(F),
              calc: P,
              max: N,
              min: j,
            },
            z ? ne : pe,
          ),
          ke = g(we, {
            hashId: I,
            prefixCls: b,
            rootPrefixCls: F,
            iconPrefixCls: V,
          })
        re(h, pe)
        var be = typeof a == 'function' ? a(we, b, x, S.resetFont) : null
        return [S.resetStyle === !1 ? null : be, ke]
      })
      return [K, I]
    }
  }
  function f(d, g, y) {
    var S = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
      C = c(d, g, y, _({ resetStyle: !1, order: -998 }, S)),
      v = function (m) {
        var w = m.prefixCls,
          b = m.rootCls,
          x = b === void 0 ? w : b
        return C(w, x), null
      }
    return v
  }
  return { genStyleHooks: l, genSubStyleComponent: f, genComponentStyleHook: c }
}
const ju = [
    'blue',
    'purple',
    'cyan',
    'green',
    'magenta',
    'pink',
    'red',
    'orange',
    'yellow',
    'volcano',
    'geekblue',
    'lime',
    'gold',
  ],
  zT = '5.21.4'
function Tf(e) {
  return e >= 0 && e <= 255
}
function Ol(e, t) {
  const { r: n, g: r, b: i, a: o } = new jt(e).toRgb()
  if (o < 1) return e
  const { r: a, g: s, b: l } = new jt(t).toRgb()
  for (let u = 0.01; u <= 1; u += 0.01) {
    const c = Math.round((n - a * (1 - u)) / u),
      f = Math.round((r - s * (1 - u)) / u),
      d = Math.round((i - l * (1 - u)) / u)
    if (Tf(c) && Tf(f) && Tf(d))
      return new jt({
        r: c,
        g: f,
        b: d,
        a: Math.round(u * 100) / 100,
      }).toRgbString()
  }
  return new jt({ r: n, g: r, b: i, a: 1 }).toRgbString()
}
var DT = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
function rC(e) {
  const { override: t } = e,
    n = DT(e, ['override']),
    r = Object.assign({}, t)
  Object.keys(Ns).forEach((d) => {
    delete r[d]
  })
  const i = Object.assign(Object.assign({}, n), r),
    o = 480,
    a = 576,
    s = 768,
    l = 992,
    u = 1200,
    c = 1600
  if (i.motion === !1) {
    const d = '0s'
    ;(i.motionDurationFast = d),
      (i.motionDurationMid = d),
      (i.motionDurationSlow = d)
  }
  return Object.assign(
    Object.assign(Object.assign({}, i), {
      colorFillContent: i.colorFillSecondary,
      colorFillContentHover: i.colorFill,
      colorFillAlter: i.colorFillQuaternary,
      colorBgContainerDisabled: i.colorFillTertiary,
      colorBorderBg: i.colorBgContainer,
      colorSplit: Ol(i.colorBorderSecondary, i.colorBgContainer),
      colorTextPlaceholder: i.colorTextQuaternary,
      colorTextDisabled: i.colorTextQuaternary,
      colorTextHeading: i.colorText,
      colorTextLabel: i.colorTextSecondary,
      colorTextDescription: i.colorTextTertiary,
      colorTextLightSolid: i.colorWhite,
      colorHighlight: i.colorError,
      colorBgTextHover: i.colorFillSecondary,
      colorBgTextActive: i.colorFill,
      colorIcon: i.colorTextTertiary,
      colorIconHover: i.colorText,
      colorErrorOutline: Ol(i.colorErrorBg, i.colorBgContainer),
      colorWarningOutline: Ol(i.colorWarningBg, i.colorBgContainer),
      fontSizeIcon: i.fontSizeSM,
      lineWidthFocus: i.lineWidth * 3,
      lineWidth: i.lineWidth,
      controlOutlineWidth: i.lineWidth * 2,
      controlInteractiveSize: i.controlHeight / 2,
      controlItemBgHover: i.colorFillTertiary,
      controlItemBgActive: i.colorPrimaryBg,
      controlItemBgActiveHover: i.colorPrimaryBgHover,
      controlItemBgActiveDisabled: i.colorFill,
      controlTmpOutline: i.colorFillQuaternary,
      controlOutline: Ol(i.colorPrimaryBg, i.colorBgContainer),
      lineType: i.lineType,
      borderRadius: i.borderRadius,
      borderRadiusXS: i.borderRadiusXS,
      borderRadiusSM: i.borderRadiusSM,
      borderRadiusLG: i.borderRadiusLG,
      fontWeightStrong: 600,
      opacityLoading: 0.65,
      linkDecoration: 'none',
      linkHoverDecoration: 'none',
      linkFocusDecoration: 'none',
      controlPaddingHorizontal: 12,
      controlPaddingHorizontalSM: 8,
      paddingXXS: i.sizeXXS,
      paddingXS: i.sizeXS,
      paddingSM: i.sizeSM,
      padding: i.size,
      paddingMD: i.sizeMD,
      paddingLG: i.sizeLG,
      paddingXL: i.sizeXL,
      paddingContentHorizontalLG: i.sizeLG,
      paddingContentVerticalLG: i.sizeMS,
      paddingContentHorizontal: i.sizeMS,
      paddingContentVertical: i.sizeSM,
      paddingContentHorizontalSM: i.size,
      paddingContentVerticalSM: i.sizeXS,
      marginXXS: i.sizeXXS,
      marginXS: i.sizeXS,
      marginSM: i.sizeSM,
      margin: i.size,
      marginMD: i.sizeMD,
      marginLG: i.sizeLG,
      marginXL: i.sizeXL,
      marginXXL: i.sizeXXL,
      boxShadow: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowSecondary: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTertiary: `
      0 1px 2px 0 rgba(0, 0, 0, 0.03),
      0 1px 6px -1px rgba(0, 0, 0, 0.02),
      0 2px 4px 0 rgba(0, 0, 0, 0.02)
    `,
      screenXS: o,
      screenXSMin: o,
      screenXSMax: a - 1,
      screenSM: a,
      screenSMMin: a,
      screenSMMax: s - 1,
      screenMD: s,
      screenMDMin: s,
      screenMDMax: l - 1,
      screenLG: l,
      screenLGMin: l,
      screenLGMax: u - 1,
      screenXL: u,
      screenXLMin: u,
      screenXLMax: c - 1,
      screenXXL: c,
      screenXXLMin: c,
      boxShadowPopoverArrow: '2px 2px 5px rgba(0, 0, 0, 0.05)',
      boxShadowCard: `
      0 1px 2px -2px ${new jt('rgba(0, 0, 0, 0.16)').toRgbString()},
      0 3px 6px 0 ${new jt('rgba(0, 0, 0, 0.12)').toRgbString()},
      0 5px 12px 4px ${new jt('rgba(0, 0, 0, 0.09)').toRgbString()}
    `,
      boxShadowDrawerRight: `
      -6px 0 16px 0 rgba(0, 0, 0, 0.08),
      -3px 0 6px -4px rgba(0, 0, 0, 0.12),
      -9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerLeft: `
      6px 0 16px 0 rgba(0, 0, 0, 0.08),
      3px 0 6px -4px rgba(0, 0, 0, 0.12),
      9px 0 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerUp: `
      0 6px 16px 0 rgba(0, 0, 0, 0.08),
      0 3px 6px -4px rgba(0, 0, 0, 0.12),
      0 9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowDrawerDown: `
      0 -6px 16px 0 rgba(0, 0, 0, 0.08),
      0 -3px 6px -4px rgba(0, 0, 0, 0.12),
      0 -9px 28px 8px rgba(0, 0, 0, 0.05)
    `,
      boxShadowTabsOverflowLeft: 'inset 10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowRight: 'inset -10px 0 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowTop: 'inset 0 10px 8px -8px rgba(0, 0, 0, 0.08)',
      boxShadowTabsOverflowBottom: 'inset 0 -10px 8px -8px rgba(0, 0, 0, 0.08)',
    }),
    r,
  )
}
var lv = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const iC = {
    lineHeight: !0,
    lineHeightSM: !0,
    lineHeightLG: !0,
    lineHeightHeading1: !0,
    lineHeightHeading2: !0,
    lineHeightHeading3: !0,
    lineHeightHeading4: !0,
    lineHeightHeading5: !0,
    opacityLoading: !0,
    fontWeightStrong: !0,
    zIndexPopupBase: !0,
    zIndexBase: !0,
    opacityImage: !0,
  },
  HT = {
    size: !0,
    sizeSM: !0,
    sizeLG: !0,
    sizeMD: !0,
    sizeXS: !0,
    sizeXXS: !0,
    sizeMS: !0,
    sizeXL: !0,
    sizeXXL: !0,
    sizeUnit: !0,
    sizeStep: !0,
    motionBase: !0,
    motionUnit: !0,
  },
  VT = {
    screenXS: !0,
    screenXSMin: !0,
    screenXSMax: !0,
    screenSM: !0,
    screenSMMin: !0,
    screenSMMax: !0,
    screenMD: !0,
    screenMDMin: !0,
    screenMDMax: !0,
    screenLG: !0,
    screenLGMin: !0,
    screenLGMax: !0,
    screenXL: !0,
    screenXLMin: !0,
    screenXLMax: !0,
    screenXXL: !0,
    screenXXLMin: !0,
  },
  oC = (e, t, n) => {
    const r = n.getDerivativeToken(e),
      { override: i } = t,
      o = lv(t, ['override'])
    let a = Object.assign(Object.assign({}, r), { override: i })
    return (
      (a = rC(a)),
      o &&
        Object.entries(o).forEach((s) => {
          let [l, u] = s
          const { theme: c } = u,
            f = lv(u, ['theme'])
          let d = f
          c &&
            (d = oC(
              Object.assign(Object.assign({}, a), f),
              { override: f },
              c,
            )),
            (a[l] = d)
        }),
      a
    )
  }
function pa() {
  const {
      token: e,
      hashed: t,
      theme: n,
      override: r,
      cssVar: i,
    } = ze.useContext(ZS),
    o = `${zT}-${t || ''}`,
    a = n || YS,
    [s, l, u] = ak(a, [Ns, e], {
      salt: o,
      override: r,
      getComputedToken: oC,
      formatToken: rC,
      cssVar: i && {
        prefix: i.prefix,
        key: i.key,
        unitless: iC,
        ignore: HT,
        preserve: VT,
      },
    })
  return [a, u, t ? l : '', s, i]
}
const BT = {
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
  },
  Kh = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
    return {
      boxSizing: 'border-box',
      margin: 0,
      padding: 0,
      color: e.colorText,
      fontSize: e.fontSize,
      lineHeight: e.lineHeight,
      listStyle: 'none',
      fontFamily: t ? 'inherit' : e.fontFamily,
    }
  },
  aC = () => ({
    display: 'inline-flex',
    alignItems: 'center',
    color: 'inherit',
    fontStyle: 'normal',
    lineHeight: 0,
    textAlign: 'center',
    textTransform: 'none',
    verticalAlign: '-0.125em',
    textRendering: 'optimizeLegibility',
    '-webkit-font-smoothing': 'antialiased',
    '-moz-osx-font-smoothing': 'grayscale',
    '> *': { lineHeight: 1 },
    svg: { display: 'inline-block' },
  }),
  uv = () => ({
    '&::before': { display: 'table', content: '""' },
    '&::after': { display: 'table', clear: 'both', content: '""' },
  }),
  UT = (e) => ({
    a: {
      color: e.colorLink,
      textDecoration: e.linkDecoration,
      backgroundColor: 'transparent',
      outline: 'none',
      cursor: 'pointer',
      transition: `color ${e.motionDurationSlow}`,
      '-webkit-text-decoration-skip': 'objects',
      '&:hover': { color: e.colorLinkHover },
      '&:active': { color: e.colorLinkActive },
      '&:active, &:hover': {
        textDecoration: e.linkHoverDecoration,
        outline: 0,
      },
      '&:focus': { textDecoration: e.linkFocusDecoration, outline: 0 },
      '&[disabled]': { color: e.colorTextDisabled, cursor: 'not-allowed' },
    },
  }),
  WT = (e, t, n, r) => {
    const i = `[class^="${t}"], [class*=" ${t}"]`,
      o = n ? `.${n}` : i,
      a = {
        boxSizing: 'border-box',
        '&::before, &::after': { boxSizing: 'border-box' },
      }
    let s = {}
    return (
      r !== !1 && (s = { fontFamily: e.fontFamily, fontSize: e.fontSize }),
      { [o]: Object.assign(Object.assign(Object.assign({}, s), a), { [i]: a }) }
    )
  },
  sC = (e) => ({
    outline: `${ye(e.lineWidthFocus)} solid ${e.colorPrimaryBorder}`,
    outlineOffset: 1,
    transition: 'outline-offset 0s, outline 0s',
  }),
  S5 = (e) => ({ '&:focus-visible': Object.assign({}, sC(e)) })
const lC = (e, t) => {
    const [n, r] = pa()
    return qd(
      {
        theme: n,
        token: r,
        hashId: '',
        path: ['ant-design-icons', e],
        nonce: () => (t == null ? void 0 : t.nonce),
        layer: { name: 'antd' },
      },
      () => [
        {
          [`.${e}`]: Object.assign(Object.assign({}, aC()), {
            [`.${e} .${e}-icon`]: { display: 'block' },
          }),
        },
      ],
    )
  },
  {
    genStyleHooks: Gs,
    genComponentStyleHook: C5,
    genSubStyleComponent: w5,
  } = jT({
    usePrefix: () => {
      const { getPrefixCls: e, iconPrefixCls: t } = p.useContext(dn)
      return { rootPrefixCls: e(), iconPrefixCls: t }
    },
    useToken: () => {
      const [e, t, n, r, i] = pa()
      return { theme: e, realToken: t, hashId: n, token: r, cssVar: i }
    },
    useCSP: () => {
      const { csp: e, iconPrefixCls: t } = p.useContext(dn)
      return lC(t, e), e ?? {}
    },
    getResetStyles: (e) => [{ '&': UT(e) }],
    getCommonStyle: WT,
    getCompUnitless: () => iC,
  })
function KT(e, t) {
  return ju.reduce((n, r) => {
    const i = e[`${r}1`],
      o = e[`${r}3`],
      a = e[`${r}6`],
      s = e[`${r}7`]
    return Object.assign(
      Object.assign({}, n),
      t(r, { lightColor: i, lightBorderColor: o, darkColor: a, textColor: s }),
    )
  }, {})
}
const qT = Object.assign({}, Ds),
  { useId: cv } = qT,
  GT = () => '',
  XT = typeof cv > 'u' ? GT : cv
function QT(e, t, n) {
  var r
  US()
  const i = e || {},
    o =
      i.inherit === !1 || !t
        ? Object.assign(Object.assign({}, up), {
            hashed:
              (r = t == null ? void 0 : t.hashed) !== null && r !== void 0
                ? r
                : up.hashed,
            cssVar: t == null ? void 0 : t.cssVar,
          })
        : t,
    a = XT()
  return bc(
    () => {
      var s, l
      if (!e) return t
      const u = Object.assign({}, o.components)
      Object.keys(e.components || {}).forEach((d) => {
        u[d] = Object.assign(Object.assign({}, u[d]), e.components[d])
      })
      const c = `css-var-${a.replace(/:/g, '')}`,
        f =
          ((s = i.cssVar) !== null && s !== void 0 ? s : o.cssVar) &&
          Object.assign(
            Object.assign(
              Object.assign(
                { prefix: n == null ? void 0 : n.prefixCls },
                typeof o.cssVar == 'object' ? o.cssVar : {},
              ),
              typeof i.cssVar == 'object' ? i.cssVar : {},
            ),
            {
              key:
                (typeof i.cssVar == 'object' &&
                  ((l = i.cssVar) === null || l === void 0 ? void 0 : l.key)) ||
                c,
            },
          )
      return Object.assign(Object.assign(Object.assign({}, o), i), {
        token: Object.assign(Object.assign({}, o.token), i.token),
        components: u,
        cssVar: f,
      })
    },
    [i, o],
    (s, l) =>
      s.some((u, c) => {
        const f = l[c]
        return !Rs(u, f, !0)
      }),
  )
}
var YT = ['children'],
  uC = p.createContext({})
function ZT(e) {
  var t = e.children,
    n = De(e, YT)
  return p.createElement(uC.Provider, { value: n }, t)
}
var JT = (function (e) {
  wi(n, e)
  var t = bi(n)
  function n() {
    return Vt(this, n), t.apply(this, arguments)
  }
  return (
    Bt(n, [
      {
        key: 'render',
        value: function () {
          return this.props.children
        },
      },
    ]),
    n
  )
})(p.Component)
function eO(e) {
  var t = p.useReducer(function (s) {
      return s + 1
    }, 0),
    n = B(t, 2),
    r = n[1],
    i = p.useRef(e),
    o = sn(function () {
      return i.current
    }),
    a = sn(function (s) {
      ;(i.current = typeof s == 'function' ? s(i.current) : s), r()
    })
  return [o, a]
}
var Xr = 'none',
  Rl = 'appear',
  Il = 'enter',
  $l = 'leave',
  fv = 'none',
  Zn = 'prepare',
  zo = 'start',
  Do = 'active',
  qh = 'end',
  cC = 'prepared'
function dv(e, t) {
  var n = {}
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n['Webkit'.concat(e)] = 'webkit'.concat(t)),
    (n['Moz'.concat(e)] = 'moz'.concat(t)),
    (n['ms'.concat(e)] = 'MS'.concat(t)),
    (n['O'.concat(e)] = 'o'.concat(t.toLowerCase())),
    n
  )
}
function tO(e, t) {
  var n = {
    animationend: dv('Animation', 'AnimationEnd'),
    transitionend: dv('Transition', 'TransitionEnd'),
  }
  return (
    e &&
      ('AnimationEvent' in t || delete n.animationend.animation,
      'TransitionEvent' in t || delete n.transitionend.transition),
    n
  )
}
var nO = tO(Pn(), typeof window < 'u' ? window : {}),
  fC = {}
if (Pn()) {
  var rO = document.createElement('div')
  fC = rO.style
}
var Ml = {}
function dC(e) {
  if (Ml[e]) return Ml[e]
  var t = nO[e]
  if (t)
    for (var n = Object.keys(t), r = n.length, i = 0; i < r; i += 1) {
      var o = n[i]
      if (Object.prototype.hasOwnProperty.call(t, o) && o in fC)
        return (Ml[e] = t[o]), Ml[e]
    }
  return ''
}
var pC = dC('animationend'),
  hC = dC('transitionend'),
  mC = !!(pC && hC),
  pv = pC || 'animationend',
  hv = hC || 'transitionend'
function mv(e, t) {
  if (!e) return null
  if (ae(e) === 'object') {
    var n = t.replace(/-\w/g, function (r) {
      return r[1].toUpperCase()
    })
    return e[n]
  }
  return ''.concat(e, '-').concat(t)
}
const iO = function (e) {
  var t = p.useRef()
  function n(i) {
    i && (i.removeEventListener(hv, e), i.removeEventListener(pv, e))
  }
  function r(i) {
    t.current && t.current !== i && n(t.current),
      i &&
        i !== t.current &&
        (i.addEventListener(hv, e), i.addEventListener(pv, e), (t.current = i))
  }
  return (
    p.useEffect(function () {
      return function () {
        n(t.current)
      }
    }, []),
    [r, n]
  )
}
var gC = Pn() ? p.useLayoutEffect : p.useEffect
const oO = function () {
  var e = p.useRef(null)
  function t() {
    Mr.cancel(e.current)
  }
  function n(r) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2
    t()
    var o = Mr(function () {
      i <= 1
        ? r({
            isCanceled: function () {
              return o !== e.current
            },
          })
        : n(r, i - 1)
    })
    e.current = o
  }
  return (
    p.useEffect(function () {
      return function () {
        t()
      }
    }, []),
    [n, t]
  )
}
var aO = [Zn, zo, Do, qh],
  sO = [Zn, cC],
  vC = !1,
  lO = !0
function yC(e) {
  return e === Do || e === qh
}
const uO = function (e, t, n) {
  var r = Ls(fv),
    i = B(r, 2),
    o = i[0],
    a = i[1],
    s = oO(),
    l = B(s, 2),
    u = l[0],
    c = l[1]
  function f() {
    a(Zn, !0)
  }
  var d = t ? sO : aO
  return (
    gC(
      function () {
        if (o !== fv && o !== qh) {
          var g = d.indexOf(o),
            y = d[g + 1],
            S = n(o)
          S === vC
            ? a(y, !0)
            : y &&
              u(function (C) {
                function v() {
                  C.isCanceled() || a(y, !0)
                }
                S === !0 ? v() : Promise.resolve(S).then(v)
              })
        }
      },
      [e, o],
    ),
    p.useEffect(function () {
      return function () {
        c()
      }
    }, []),
    [f, o]
  )
}
function cO(e, t, n, r) {
  var i = r.motionEnter,
    o = i === void 0 ? !0 : i,
    a = r.motionAppear,
    s = a === void 0 ? !0 : a,
    l = r.motionLeave,
    u = l === void 0 ? !0 : l,
    c = r.motionDeadline,
    f = r.motionLeaveImmediately,
    d = r.onAppearPrepare,
    g = r.onEnterPrepare,
    y = r.onLeavePrepare,
    S = r.onAppearStart,
    C = r.onEnterStart,
    v = r.onLeaveStart,
    h = r.onAppearActive,
    m = r.onEnterActive,
    w = r.onLeaveActive,
    b = r.onAppearEnd,
    x = r.onEnterEnd,
    E = r.onLeaveEnd,
    k = r.onVisibleChanged,
    O = Ls(),
    I = B(O, 2),
    L = I[0],
    z = I[1],
    A = eO(Xr),
    F = B(A, 2),
    V = F[0],
    M = F[1],
    T = Ls(null),
    P = B(T, 2),
    R = P[0],
    N = P[1],
    j = V(),
    H = p.useRef(!1),
    K = p.useRef(null)
  function D() {
    return n()
  }
  var G = p.useRef(!1)
  function re() {
    M(Xr), N(null, !0)
  }
  var ne = sn(function (ge) {
      var le = V()
      if (le !== Xr) {
        var He = D()
        if (!(ge && !ge.deadline && ge.target !== He)) {
          var Y = G.current,
            Fe
          le === Rl && Y
            ? (Fe = b == null ? void 0 : b(He, ge))
            : le === Il && Y
              ? (Fe = x == null ? void 0 : x(He, ge))
              : le === $l && Y && (Fe = E == null ? void 0 : E(He, ge)),
            Y && Fe !== !1 && re()
        }
      }
    }),
    he = iO(ne),
    pe = B(he, 1),
    we = pe[0],
    ke = function (le) {
      switch (le) {
        case Rl:
          return $($($({}, Zn, d), zo, S), Do, h)
        case Il:
          return $($($({}, Zn, g), zo, C), Do, m)
        case $l:
          return $($($({}, Zn, y), zo, v), Do, w)
        default:
          return {}
      }
    },
    be = p.useMemo(
      function () {
        return ke(j)
      },
      [j],
    ),
    _e = uO(j, !e, function (ge) {
      if (ge === Zn) {
        var le = be[Zn]
        return le ? le(D()) : vC
      }
      if (Te in be) {
        var He
        N(
          ((He = be[Te]) === null || He === void 0
            ? void 0
            : He.call(be, D(), null)) || null,
        )
      }
      return (
        Te === Do &&
          j !== Xr &&
          (we(D()),
          c > 0 &&
            (clearTimeout(K.current),
            (K.current = setTimeout(function () {
              ne({ deadline: !0 })
            }, c)))),
        Te === cC && re(),
        lO
      )
    }),
    Se = B(_e, 2),
    Ke = Se[0],
    Te = Se[1],
    Ze = yC(Te)
  ;(G.current = Ze),
    gC(
      function () {
        z(t)
        var ge = H.current
        H.current = !0
        var le
        !ge && t && s && (le = Rl),
          ge && t && o && (le = Il),
          ((ge && !t && u) || (!ge && f && !t && u)) && (le = $l)
        var He = ke(le)
        le && (e || He[Zn]) ? (M(le), Ke()) : M(Xr)
      },
      [t],
    ),
    p.useEffect(
      function () {
        ;((j === Rl && !s) || (j === Il && !o) || (j === $l && !u)) && M(Xr)
      },
      [s, o, u],
    ),
    p.useEffect(function () {
      return function () {
        ;(H.current = !1), clearTimeout(K.current)
      }
    }, [])
  var me = p.useRef(!1)
  p.useEffect(
    function () {
      L && (me.current = !0),
        L !== void 0 &&
          j === Xr &&
          ((me.current || L) && (k == null || k(L)), (me.current = !0))
    },
    [L, j],
  )
  var lt = R
  return (
    be[Zn] && Te === zo && (lt = _({ transition: 'none' }, lt)),
    [j, Te, lt, L ?? t]
  )
}
function fO(e) {
  var t = e
  ae(e) === 'object' && (t = e.transitionSupport)
  function n(i, o) {
    return !!(i.motionName && t && o !== !1)
  }
  var r = p.forwardRef(function (i, o) {
    var a = i.visible,
      s = a === void 0 ? !0 : a,
      l = i.removeOnLeave,
      u = l === void 0 ? !0 : l,
      c = i.forceRender,
      f = i.children,
      d = i.motionName,
      g = i.leavedClassName,
      y = i.eventProps,
      S = p.useContext(uC),
      C = S.motion,
      v = n(i, C),
      h = p.useRef(),
      m = p.useRef()
    function w() {
      try {
        return h.current instanceof HTMLElement ? h.current : Ql(m.current)
      } catch {
        return null
      }
    }
    var b = cO(v, s, w, i),
      x = B(b, 4),
      E = x[0],
      k = x[1],
      O = x[2],
      I = x[3],
      L = p.useRef(I)
    I && (L.current = !0)
    var z = p.useCallback(
        function (R) {
          ;(h.current = R), Ah(o, R)
        },
        [o],
      ),
      A,
      F = _(_({}, y), {}, { visible: s })
    if (!f) A = null
    else if (E === Xr)
      I
        ? (A = f(_({}, F), z))
        : !u && L.current && g
          ? (A = f(_(_({}, F), {}, { className: g }), z))
          : c || (!u && !g)
            ? (A = f(_(_({}, F), {}, { style: { display: 'none' } }), z))
            : (A = null)
    else {
      var V
      k === Zn
        ? (V = 'prepare')
        : yC(k)
          ? (V = 'active')
          : k === zo && (V = 'start')
      var M = mv(d, ''.concat(E, '-').concat(V))
      A = f(
        _(
          _({}, F),
          {},
          {
            className: oe(
              mv(d, E),
              $($({}, M, M && V), d, typeof d == 'string'),
            ),
            style: O,
          },
        ),
        z,
      )
    }
    if (p.isValidElement(A) && Ec(A)) {
      var T = A,
        P = T.ref
      P || (A = p.cloneElement(A, { ref: z }))
    }
    return p.createElement(JT, { ref: m }, A)
  })
  return (r.displayName = 'CSSMotion'), r
}
const $c = fO(mC)
var dp = 'add',
  pp = 'keep',
  hp = 'remove',
  Of = 'removed'
function dO(e) {
  var t
  return (
    e && ae(e) === 'object' && 'key' in e ? (t = e) : (t = { key: e }),
    _(_({}, t), {}, { key: String(t.key) })
  )
}
function mp() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
  return e.map(dO)
}
function pO() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = [],
    r = 0,
    i = t.length,
    o = mp(e),
    a = mp(t)
  o.forEach(function (u) {
    for (var c = !1, f = r; f < i; f += 1) {
      var d = a[f]
      if (d.key === u.key) {
        r < f &&
          ((n = n.concat(
            a.slice(r, f).map(function (g) {
              return _(_({}, g), {}, { status: dp })
            }),
          )),
          (r = f)),
          n.push(_(_({}, d), {}, { status: pp })),
          (r += 1),
          (c = !0)
        break
      }
    }
    c || n.push(_(_({}, u), {}, { status: hp }))
  }),
    r < i &&
      (n = n.concat(
        a.slice(r).map(function (u) {
          return _(_({}, u), {}, { status: dp })
        }),
      ))
  var s = {}
  n.forEach(function (u) {
    var c = u.key
    s[c] = (s[c] || 0) + 1
  })
  var l = Object.keys(s).filter(function (u) {
    return s[u] > 1
  })
  return (
    l.forEach(function (u) {
      ;(n = n.filter(function (c) {
        var f = c.key,
          d = c.status
        return f !== u || d !== hp
      })),
        n.forEach(function (c) {
          c.key === u && (c.status = pp)
        })
    }),
    n
  )
}
var hO = ['component', 'children', 'onVisibleChanged', 'onAllRemoved'],
  mO = ['status'],
  gO = [
    'eventProps',
    'visible',
    'children',
    'motionName',
    'motionAppear',
    'motionEnter',
    'motionLeave',
    'motionLeaveImmediately',
    'motionDeadline',
    'removeOnLeave',
    'leavedClassName',
    'onAppearPrepare',
    'onAppearStart',
    'onAppearActive',
    'onAppearEnd',
    'onEnterStart',
    'onEnterActive',
    'onEnterEnd',
    'onLeaveStart',
    'onLeaveActive',
    'onLeaveEnd',
  ]
function vO(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : $c,
    n = (function (r) {
      wi(o, r)
      var i = bi(o)
      function o() {
        var a
        Vt(this, o)
        for (var s = arguments.length, l = new Array(s), u = 0; u < s; u++)
          l[u] = arguments[u]
        return (
          (a = i.call.apply(i, [this].concat(l))),
          $(ue(a), 'state', { keyEntities: [] }),
          $(ue(a), 'removeKey', function (c) {
            a.setState(
              function (f) {
                var d = f.keyEntities.map(function (g) {
                  return g.key !== c ? g : _(_({}, g), {}, { status: Of })
                })
                return { keyEntities: d }
              },
              function () {
                var f = a.state.keyEntities,
                  d = f.filter(function (g) {
                    var y = g.status
                    return y !== Of
                  }).length
                d === 0 && a.props.onAllRemoved && a.props.onAllRemoved()
              },
            )
          }),
          a
        )
      }
      return (
        Bt(
          o,
          [
            {
              key: 'render',
              value: function () {
                var s = this,
                  l = this.state.keyEntities,
                  u = this.props,
                  c = u.component,
                  f = u.children,
                  d = u.onVisibleChanged
                u.onAllRemoved
                var g = De(u, hO),
                  y = c || p.Fragment,
                  S = {}
                return (
                  gO.forEach(function (C) {
                    ;(S[C] = g[C]), delete g[C]
                  }),
                  delete g.keys,
                  p.createElement(
                    y,
                    g,
                    l.map(function (C, v) {
                      var h = C.status,
                        m = De(C, mO),
                        w = h === dp || h === pp
                      return p.createElement(
                        t,
                        ce({}, S, {
                          key: m.key,
                          visible: w,
                          eventProps: m,
                          onVisibleChanged: function (x) {
                            d == null || d(x, { key: m.key }),
                              x || s.removeKey(m.key)
                          },
                        }),
                        function (b, x) {
                          return f(_(_({}, b), {}, { index: v }), x)
                        },
                      )
                    }),
                  )
                )
              },
            },
          ],
          [
            {
              key: 'getDerivedStateFromProps',
              value: function (s, l) {
                var u = s.keys,
                  c = l.keyEntities,
                  f = mp(u),
                  d = pO(c, f)
                return {
                  keyEntities: d.filter(function (g) {
                    var y = c.find(function (S) {
                      var C = S.key
                      return g.key === C
                    })
                    return !(y && y.status === Of && g.status === hp)
                  }),
                }
              },
            },
          ],
        ),
        o
      )
    })(p.Component)
  return $(n, 'defaultProps', { component: 'div' }), n
}
vO(mC)
function yO(e) {
  const { children: t } = e,
    [, n] = pa(),
    { motion: r } = n,
    i = p.useRef(!1)
  return (
    (i.current = i.current || r === !1),
    i.current ? p.createElement(ZT, { motion: r }, t) : t
  )
}
const SO = () => null
var CO = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const wO = [
  'getTargetContainer',
  'getPopupContainer',
  'renderEmpty',
  'input',
  'pagination',
  'form',
  'select',
  'button',
]
let SC
function bO() {
  return SC || Fu
}
function xO(e) {
  return Object.keys(e).some((t) => t.endsWith('Color'))
}
const EO = (e) => {
    const { prefixCls: t, iconPrefixCls: n, theme: r, holderRender: i } = e
    t !== void 0 && (SC = t), r && xO(r) && xT(bO(), r)
  },
  PO = (e) => {
    const {
        children: t,
        csp: n,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: o,
        form: a,
        locale: s,
        componentSize: l,
        direction: u,
        space: c,
        splitter: f,
        virtual: d,
        dropdownMatchSelectWidth: g,
        popupMatchSelectWidth: y,
        popupOverflow: S,
        legacyLocale: C,
        parentContext: v,
        iconPrefixCls: h,
        theme: m,
        componentDisabled: w,
        segmented: b,
        statistic: x,
        spin: E,
        calendar: k,
        carousel: O,
        cascader: I,
        collapse: L,
        typography: z,
        checkbox: A,
        descriptions: F,
        divider: V,
        drawer: M,
        skeleton: T,
        steps: P,
        image: R,
        layout: N,
        list: j,
        mentions: H,
        modal: K,
        progress: D,
        result: G,
        slider: re,
        breadcrumb: ne,
        menu: he,
        pagination: pe,
        input: we,
        textArea: ke,
        empty: be,
        badge: _e,
        radio: Se,
        rate: Ke,
        switch: Te,
        transfer: Ze,
        avatar: me,
        message: lt,
        tag: ge,
        table: le,
        card: He,
        tabs: Y,
        timeline: Fe,
        timePicker: qe,
        upload: xe,
        notification: bt,
        tree: Tt,
        colorPicker: rt,
        datePicker: Ot,
        rangePicker: vt,
        flex: ut,
        wave: Ve,
        dropdown: ve,
        warning: ct,
        tour: Zt,
        floatButtonGroup: xt,
        variant: Rt,
        inputNumber: lr,
        treeSelect: Vn,
      } = e,
      Ut = p.useCallback(
        (Me, Ee) => {
          const { prefixCls: Mt } = e
          if (Ee) return Ee
          const Et = Mt || v.getPrefixCls('')
          return Me ? `${Et}-${Me}` : Et
        },
        [v.getPrefixCls, e.prefixCls],
      ),
      pn = h || v.iconPrefixCls || JS,
      Je = n || v.csp
    lC(pn, Je)
    const Be = QT(m, v.theme, { prefixCls: Ut('') }),
      It = {
        csp: Je,
        autoInsertSpaceInButton: r,
        alert: i,
        anchor: o,
        locale: s || C,
        direction: u,
        space: c,
        splitter: f,
        virtual: d,
        popupMatchSelectWidth: y ?? g,
        popupOverflow: S,
        getPrefixCls: Ut,
        iconPrefixCls: pn,
        theme: Be,
        segmented: b,
        statistic: x,
        spin: E,
        calendar: k,
        carousel: O,
        cascader: I,
        collapse: L,
        typography: z,
        checkbox: A,
        descriptions: F,
        divider: V,
        drawer: M,
        skeleton: T,
        steps: P,
        image: R,
        input: we,
        textArea: ke,
        layout: N,
        list: j,
        mentions: H,
        modal: K,
        progress: D,
        result: G,
        slider: re,
        breadcrumb: ne,
        menu: he,
        pagination: pe,
        empty: be,
        badge: _e,
        radio: Se,
        rate: Ke,
        switch: Te,
        transfer: Ze,
        avatar: me,
        message: lt,
        tag: ge,
        table: le,
        card: He,
        tabs: Y,
        timeline: Fe,
        timePicker: qe,
        upload: xe,
        notification: bt,
        tree: Tt,
        colorPicker: rt,
        datePicker: Ot,
        rangePicker: vt,
        flex: ut,
        wave: Ve,
        dropdown: ve,
        warning: ct,
        tour: Zt,
        floatButtonGroup: xt,
        variant: Rt,
        inputNumber: lr,
        treeSelect: Vn,
      },
      Re = Object.assign({}, v)
    Object.keys(It).forEach((Me) => {
      It[Me] !== void 0 && (Re[Me] = It[Me])
    }),
      wO.forEach((Me) => {
        const Ee = e[Me]
        Ee && (Re[Me] = Ee)
      }),
      typeof r < 'u' &&
        (Re.button = Object.assign({ autoInsertSpace: r }, Re.button))
    const te = bc(
        () => Re,
        Re,
        (Me, Ee) => {
          const Mt = Object.keys(Me),
            Et = Object.keys(Ee)
          return Mt.length !== Et.length || Mt.some((Wt) => Me[Wt] !== Ee[Wt])
        },
      ),
      Z = p.useMemo(() => ({ prefixCls: pn, csp: Je }), [pn, Je])
    let W = p.createElement(
      p.Fragment,
      null,
      p.createElement(SO, { dropdownMatchSelectWidth: g }),
      t,
    )
    const Le = p.useMemo(() => {
      var Me, Ee, Mt, Et
      return jo(
        ((Me = Ic.Form) === null || Me === void 0
          ? void 0
          : Me.defaultValidateMessages) || {},
        ((Mt =
          (Ee = te.locale) === null || Ee === void 0 ? void 0 : Ee.Form) ===
          null || Mt === void 0
          ? void 0
          : Mt.defaultValidateMessages) || {},
        ((Et = te.form) === null || Et === void 0
          ? void 0
          : Et.validateMessages) || {},
        (a == null ? void 0 : a.validateMessages) || {},
      )
    }, [te, a == null ? void 0 : a.validateMessages])
    Object.keys(Le).length > 0 &&
      (W = p.createElement(Dk.Provider, { value: Le }, W)),
      s && (W = p.createElement(Kk, { locale: s, _ANT_MARK__: Wk }, W)),
      (pn || Je) && (W = p.createElement(Wh.Provider, { value: Z }, W)),
      l && (W = p.createElement(PT, { size: l }, W)),
      (W = p.createElement(yO, null, W))
    const $t = p.useMemo(() => {
      const Me = Be || {},
        { algorithm: Ee, token: Mt, components: Et, cssVar: Wt } = Me,
        Bn = CO(Me, ['algorithm', 'token', 'components', 'cssVar']),
        Hr = Ee && (!Array.isArray(Ee) || Ee.length > 0) ? Bd(Ee) : YS,
        hn = {}
      Object.entries(Et || {}).forEach((ur) => {
        let [On, Un] = ur
        const it = Object.assign({}, Un)
        'algorithm' in it &&
          (it.algorithm === !0
            ? (it.theme = Hr)
            : (Array.isArray(it.algorithm) ||
                typeof it.algorithm == 'function') &&
              (it.theme = Bd(it.algorithm)),
          delete it.algorithm),
          (hn[On] = it)
      })
      const Nt = Object.assign(Object.assign({}, Ns), Mt)
      return Object.assign(Object.assign({}, Bn), {
        theme: Hr,
        token: Nt,
        components: hn,
        override: Object.assign({ override: Nt }, hn),
        cssVar: Wt,
      })
    }, [Be])
    return (
      m && (W = p.createElement(ZS.Provider, { value: $t }, W)),
      te.warning &&
        (W = p.createElement(zk.Provider, { value: te.warning }, W)),
      w !== void 0 && (W = p.createElement(ET, { disabled: w }, W)),
      p.createElement(dn.Provider, { value: te }, W)
    )
  },
  Xs = (e) => {
    const t = p.useContext(dn),
      n = p.useContext(KS)
    return p.createElement(
      PO,
      Object.assign({ parentContext: t, legacyLocale: n }, e),
    )
  }
Xs.ConfigContext = dn
Xs.SizeContext = _s
Xs.config = EO
Xs.useConfig = kT
Object.defineProperty(Xs, 'SizeContext', { get: () => _s })
function CC(e) {
  var t
  return e == null || (t = e.getRootNode) === null || t === void 0
    ? void 0
    : t.call(e)
}
function kO(e) {
  return CC(e) instanceof ShadowRoot
}
function zu(e) {
  return kO(e) ? CC(e) : null
}
function TO(e) {
  return e.replace(/-(.)/g, function (t, n) {
    return n.toUpperCase()
  })
}
function OO(e, t) {
  tn(e, '[@ant-design/icons] '.concat(t))
}
function gv(e) {
  return (
    ae(e) === 'object' &&
    typeof e.name == 'string' &&
    typeof e.theme == 'string' &&
    (ae(e.icon) === 'object' || typeof e.icon == 'function')
  )
}
function vv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n]
    switch (n) {
      case 'class':
        ;(t.className = r), delete t.class
        break
      default:
        delete t[n], (t[TO(n)] = r)
    }
    return t
  }, {})
}
function gp(e, t, n) {
  return n
    ? ze.createElement(
        e.tag,
        _(_({ key: t }, vv(e.attrs)), n),
        (e.children || []).map(function (r, i) {
          return gp(r, ''.concat(t, '-').concat(e.tag, '-').concat(i))
        }),
      )
    : ze.createElement(
        e.tag,
        _({ key: t }, vv(e.attrs)),
        (e.children || []).map(function (r, i) {
          return gp(r, ''.concat(t, '-').concat(e.tag, '-').concat(i))
        }),
      )
}
function wC(e) {
  return Ms(e)[0]
}
function bC(e) {
  return e ? (Array.isArray(e) ? e : [e]) : []
}
var RO = `
.anticon {
  display: inline-flex;
  align-items: center;
  color: inherit;
  font-style: normal;
  line-height: 0;
  text-align: center;
  text-transform: none;
  vertical-align: -0.125em;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.anticon > * {
  line-height: 1;
}

.anticon svg {
  display: inline-block;
}

.anticon::before {
  display: none;
}

.anticon .anticon-icon {
  display: block;
}

.anticon[tabindex] {
  cursor: pointer;
}

.anticon-spin::before,
.anticon-spin {
  display: inline-block;
  -webkit-animation: loadingCircle 1s infinite linear;
  animation: loadingCircle 1s infinite linear;
}

@-webkit-keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes loadingCircle {
  100% {
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
`,
  IO = function (t) {
    var n = p.useContext(Wh),
      r = n.csp,
      i = n.prefixCls,
      o = RO
    i && (o = o.replace(/anticon/g, i)),
      p.useEffect(function () {
        var a = t.current,
          s = zu(a)
        Nr(o, '@ant-design-icons', { prepend: !0, csp: r, attachTo: s })
      }, [])
  },
  $O = [
    'icon',
    'className',
    'onClick',
    'style',
    'primaryColor',
    'secondaryColor',
  ],
  es = { primaryColor: '#333', secondaryColor: '#E6E6E6', calculated: !1 }
function MO(e) {
  var t = e.primaryColor,
    n = e.secondaryColor
  ;(es.primaryColor = t),
    (es.secondaryColor = n || wC(t)),
    (es.calculated = !!n)
}
function NO() {
  return _({}, es)
}
var ha = function (t) {
  var n = t.icon,
    r = t.className,
    i = t.onClick,
    o = t.style,
    a = t.primaryColor,
    s = t.secondaryColor,
    l = De(t, $O),
    u = p.useRef(),
    c = es
  if (
    (a && (c = { primaryColor: a, secondaryColor: s || wC(a) }),
    IO(u),
    OO(gv(n), 'icon should be icon definiton, but got '.concat(n)),
    !gv(n))
  )
    return null
  var f = n
  return (
    f &&
      typeof f.icon == 'function' &&
      (f = _(_({}, f), {}, { icon: f.icon(c.primaryColor, c.secondaryColor) })),
    gp(
      f.icon,
      'svg-'.concat(f.name),
      _(
        _(
          {
            className: r,
            onClick: i,
            style: o,
            'data-icon': f.name,
            width: '1em',
            height: '1em',
            fill: 'currentColor',
            'aria-hidden': 'true',
          },
          l,
        ),
        {},
        { ref: u },
      ),
    )
  )
}
ha.displayName = 'IconReact'
ha.getTwoToneColors = NO
ha.setTwoToneColors = MO
function xC(e) {
  var t = bC(e),
    n = B(t, 2),
    r = n[0],
    i = n[1]
  return ha.setTwoToneColors({ primaryColor: r, secondaryColor: i })
}
function _O() {
  var e = ha.getTwoToneColors()
  return e.calculated ? [e.primaryColor, e.secondaryColor] : e.primaryColor
}
var LO = [
  'className',
  'icon',
  'spin',
  'rotate',
  'tabIndex',
  'onClick',
  'twoToneColor',
]
xC(Au.primary)
var xi = p.forwardRef(function (e, t) {
  var n = e.className,
    r = e.icon,
    i = e.spin,
    o = e.rotate,
    a = e.tabIndex,
    s = e.onClick,
    l = e.twoToneColor,
    u = De(e, LO),
    c = p.useContext(Wh),
    f = c.prefixCls,
    d = f === void 0 ? 'anticon' : f,
    g = c.rootClassName,
    y = oe(
      g,
      d,
      $(
        $({}, ''.concat(d, '-').concat(r.name), !!r.name),
        ''.concat(d, '-spin'),
        !!i || r.name === 'loading',
      ),
      n,
    ),
    S = a
  S === void 0 && s && (S = -1)
  var C = o
      ? {
          msTransform: 'rotate('.concat(o, 'deg)'),
          transform: 'rotate('.concat(o, 'deg)'),
        }
      : void 0,
    v = bC(l),
    h = B(v, 2),
    m = h[0],
    w = h[1]
  return p.createElement(
    'span',
    ce({ role: 'img', 'aria-label': r.name }, u, {
      ref: t,
      tabIndex: S,
      onClick: s,
      className: y,
    }),
    p.createElement(ha, {
      icon: r,
      primaryColor: m,
      secondaryColor: w,
      style: C,
    }),
  )
})
xi.displayName = 'AntdIcon'
xi.getTwoToneColor = _O
xi.setTwoToneColor = xC
function AO(e) {
  return e && ze.isValidElement(e) && e.type === ze.Fragment
}
const FO = (e, t, n) =>
  ze.isValidElement(e)
    ? ze.cloneElement(e, typeof n == 'function' ? n(e.props || {}) : n)
    : t
function Qs(e, t) {
  return FO(e, e, t)
}
const jO = (e) => {
  const [, , , , t] = pa()
  return t ? `${e}-css-var` : ''
}
var ee = {
    MAC_ENTER: 3,
    BACKSPACE: 8,
    TAB: 9,
    NUM_CENTER: 12,
    ENTER: 13,
    SHIFT: 16,
    CTRL: 17,
    ALT: 18,
    PAUSE: 19,
    CAPS_LOCK: 20,
    ESC: 27,
    SPACE: 32,
    PAGE_UP: 33,
    PAGE_DOWN: 34,
    END: 35,
    HOME: 36,
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    PRINT_SCREEN: 44,
    INSERT: 45,
    DELETE: 46,
    ZERO: 48,
    ONE: 49,
    TWO: 50,
    THREE: 51,
    FOUR: 52,
    FIVE: 53,
    SIX: 54,
    SEVEN: 55,
    EIGHT: 56,
    NINE: 57,
    QUESTION_MARK: 63,
    A: 65,
    B: 66,
    C: 67,
    D: 68,
    E: 69,
    F: 70,
    G: 71,
    H: 72,
    I: 73,
    J: 74,
    K: 75,
    L: 76,
    M: 77,
    N: 78,
    O: 79,
    P: 80,
    Q: 81,
    R: 82,
    S: 83,
    T: 84,
    U: 85,
    V: 86,
    W: 87,
    X: 88,
    Y: 89,
    Z: 90,
    META: 91,
    WIN_KEY_RIGHT: 92,
    CONTEXT_MENU: 93,
    NUM_ZERO: 96,
    NUM_ONE: 97,
    NUM_TWO: 98,
    NUM_THREE: 99,
    NUM_FOUR: 100,
    NUM_FIVE: 101,
    NUM_SIX: 102,
    NUM_SEVEN: 103,
    NUM_EIGHT: 104,
    NUM_NINE: 105,
    NUM_MULTIPLY: 106,
    NUM_PLUS: 107,
    NUM_MINUS: 109,
    NUM_PERIOD: 110,
    NUM_DIVISION: 111,
    F1: 112,
    F2: 113,
    F3: 114,
    F4: 115,
    F5: 116,
    F6: 117,
    F7: 118,
    F8: 119,
    F9: 120,
    F10: 121,
    F11: 122,
    F12: 123,
    NUMLOCK: 144,
    SEMICOLON: 186,
    DASH: 189,
    EQUALS: 187,
    COMMA: 188,
    PERIOD: 190,
    SLASH: 191,
    APOSTROPHE: 192,
    SINGLE_QUOTE: 222,
    OPEN_SQUARE_BRACKET: 219,
    BACKSLASH: 220,
    CLOSE_SQUARE_BRACKET: 221,
    WIN_KEY: 224,
    MAC_FF_META: 224,
    WIN_IME: 229,
    isTextModifyingKeyEvent: function (t) {
      var n = t.keyCode
      if ((t.altKey && !t.ctrlKey) || t.metaKey || (n >= ee.F1 && n <= ee.F12))
        return !1
      switch (n) {
        case ee.ALT:
        case ee.CAPS_LOCK:
        case ee.CONTEXT_MENU:
        case ee.CTRL:
        case ee.DOWN:
        case ee.END:
        case ee.ESC:
        case ee.HOME:
        case ee.INSERT:
        case ee.LEFT:
        case ee.MAC_FF_META:
        case ee.META:
        case ee.NUMLOCK:
        case ee.NUM_CENTER:
        case ee.PAGE_DOWN:
        case ee.PAGE_UP:
        case ee.PAUSE:
        case ee.PRINT_SCREEN:
        case ee.RIGHT:
        case ee.SHIFT:
        case ee.UP:
        case ee.WIN_KEY:
        case ee.WIN_KEY_RIGHT:
          return !1
        default:
          return !0
      }
    },
    isCharacterKey: function (t) {
      if (
        (t >= ee.ZERO && t <= ee.NINE) ||
        (t >= ee.NUM_ZERO && t <= ee.NUM_MULTIPLY) ||
        (t >= ee.A && t <= ee.Z) ||
        (window.navigator.userAgent.indexOf('WebKit') !== -1 && t === 0)
      )
        return !0
      switch (t) {
        case ee.SPACE:
        case ee.QUESTION_MARK:
        case ee.NUM_PLUS:
        case ee.NUM_MINUS:
        case ee.NUM_PERIOD:
        case ee.NUM_DIVISION:
        case ee.SEMICOLON:
        case ee.DASH:
        case ee.EQUALS:
        case ee.COMMA:
        case ee.PERIOD:
        case ee.SLASH:
        case ee.APOSTROPHE:
        case ee.SINGLE_QUOTE:
        case ee.OPEN_SQUARE_BRACKET:
        case ee.BACKSLASH:
        case ee.CLOSE_SQUARE_BRACKET:
          return !0
        default:
          return !1
      }
    },
  },
  zO = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M988 548c-19.9 0-36-16.1-36-36 0-59.4-11.6-117-34.6-171.3a440.45 440.45 0 00-94.3-139.9 437.71 437.71 0 00-139.9-94.3C629 83.6 571.4 72 512 72c-19.9 0-36-16.1-36-36s16.1-36 36-36c69.1 0 136.2 13.5 199.3 40.3C772.3 66 827 103 874 150c47 47 83.9 101.8 109.7 162.7 26.7 63.1 40.2 130.2 40.2 199.3.1 19.9-16 36-35.9 36z',
          },
        },
      ],
    },
    name: 'loading',
    theme: 'outlined',
  },
  DO = function (t, n) {
    return p.createElement(xi, ce({}, t, { ref: n, icon: zO }))
  },
  HO = p.forwardRef(DO)
const EC = ze.createContext(void 0),
  Ii = 100,
  PC = {
    Modal: Ii,
    Drawer: Ii,
    Popover: Ii,
    Popconfirm: Ii,
    Tooltip: Ii,
    Tour: Ii,
    FloatButton: Ii,
  },
  VO = {
    SelectLike: 50,
    Dropdown: 50,
    DatePicker: 50,
    Menu: 50,
    ImagePreview: 1,
  }
function BO(e) {
  return e in PC
}
const kC = (e, t) => {
  const [, n] = pa(),
    r = ze.useContext(EC),
    i = BO(e)
  let o
  if (t !== void 0) o = [t, t]
  else {
    let a = r ?? 0
    i ? (a += (r ? 0 : n.zIndexPopupBase) + PC[e]) : (a += VO[e]),
      (o = [r === void 0 ? t : a, a])
  }
  return o
}
function ar() {
  ar = function () {
    return t
  }
  var e,
    t = {},
    n = Object.prototype,
    r = n.hasOwnProperty,
    i =
      Object.defineProperty ||
      function (M, T, P) {
        M[T] = P.value
      },
    o = typeof Symbol == 'function' ? Symbol : {},
    a = o.iterator || '@@iterator',
    s = o.asyncIterator || '@@asyncIterator',
    l = o.toStringTag || '@@toStringTag'
  function u(M, T, P) {
    return (
      Object.defineProperty(M, T, {
        value: P,
        enumerable: !0,
        configurable: !0,
        writable: !0,
      }),
      M[T]
    )
  }
  try {
    u({}, '')
  } catch {
    u = function (P, R, N) {
      return (P[R] = N)
    }
  }
  function c(M, T, P, R) {
    var N = T && T.prototype instanceof v ? T : v,
      j = Object.create(N.prototype),
      H = new F(R || [])
    return i(j, '_invoke', { value: I(M, P, H) }), j
  }
  function f(M, T, P) {
    try {
      return { type: 'normal', arg: M.call(T, P) }
    } catch (R) {
      return { type: 'throw', arg: R }
    }
  }
  t.wrap = c
  var d = 'suspendedStart',
    g = 'suspendedYield',
    y = 'executing',
    S = 'completed',
    C = {}
  function v() {}
  function h() {}
  function m() {}
  var w = {}
  u(w, a, function () {
    return this
  })
  var b = Object.getPrototypeOf,
    x = b && b(b(V([])))
  x && x !== n && r.call(x, a) && (w = x)
  var E = (m.prototype = v.prototype = Object.create(w))
  function k(M) {
    ;['next', 'throw', 'return'].forEach(function (T) {
      u(M, T, function (P) {
        return this._invoke(T, P)
      })
    })
  }
  function O(M, T) {
    function P(N, j, H, K) {
      var D = f(M[N], M, j)
      if (D.type !== 'throw') {
        var G = D.arg,
          re = G.value
        return re && ae(re) == 'object' && r.call(re, '__await')
          ? T.resolve(re.__await).then(
              function (ne) {
                P('next', ne, H, K)
              },
              function (ne) {
                P('throw', ne, H, K)
              },
            )
          : T.resolve(re).then(
              function (ne) {
                ;(G.value = ne), H(G)
              },
              function (ne) {
                return P('throw', ne, H, K)
              },
            )
      }
      K(D.arg)
    }
    var R
    i(this, '_invoke', {
      value: function (j, H) {
        function K() {
          return new T(function (D, G) {
            P(j, H, D, G)
          })
        }
        return (R = R ? R.then(K, K) : K())
      },
    })
  }
  function I(M, T, P) {
    var R = d
    return function (N, j) {
      if (R === y) throw Error('Generator is already running')
      if (R === S) {
        if (N === 'throw') throw j
        return { value: e, done: !0 }
      }
      for (P.method = N, P.arg = j; ; ) {
        var H = P.delegate
        if (H) {
          var K = L(H, P)
          if (K) {
            if (K === C) continue
            return K
          }
        }
        if (P.method === 'next') P.sent = P._sent = P.arg
        else if (P.method === 'throw') {
          if (R === d) throw ((R = S), P.arg)
          P.dispatchException(P.arg)
        } else P.method === 'return' && P.abrupt('return', P.arg)
        R = y
        var D = f(M, T, P)
        if (D.type === 'normal') {
          if (((R = P.done ? S : g), D.arg === C)) continue
          return { value: D.arg, done: P.done }
        }
        D.type === 'throw' && ((R = S), (P.method = 'throw'), (P.arg = D.arg))
      }
    }
  }
  function L(M, T) {
    var P = T.method,
      R = M.iterator[P]
    if (R === e)
      return (
        (T.delegate = null),
        (P === 'throw' &&
          M.iterator.return &&
          ((T.method = 'return'),
          (T.arg = e),
          L(M, T),
          T.method === 'throw')) ||
          (P !== 'return' &&
            ((T.method = 'throw'),
            (T.arg = new TypeError(
              "The iterator does not provide a '" + P + "' method",
            )))),
        C
      )
    var N = f(R, M.iterator, T.arg)
    if (N.type === 'throw')
      return (T.method = 'throw'), (T.arg = N.arg), (T.delegate = null), C
    var j = N.arg
    return j
      ? j.done
        ? ((T[M.resultName] = j.value),
          (T.next = M.nextLoc),
          T.method !== 'return' && ((T.method = 'next'), (T.arg = e)),
          (T.delegate = null),
          C)
        : j
      : ((T.method = 'throw'),
        (T.arg = new TypeError('iterator result is not an object')),
        (T.delegate = null),
        C)
  }
  function z(M) {
    var T = { tryLoc: M[0] }
    1 in M && (T.catchLoc = M[1]),
      2 in M && ((T.finallyLoc = M[2]), (T.afterLoc = M[3])),
      this.tryEntries.push(T)
  }
  function A(M) {
    var T = M.completion || {}
    ;(T.type = 'normal'), delete T.arg, (M.completion = T)
  }
  function F(M) {
    ;(this.tryEntries = [{ tryLoc: 'root' }]),
      M.forEach(z, this),
      this.reset(!0)
  }
  function V(M) {
    if (M || M === '') {
      var T = M[a]
      if (T) return T.call(M)
      if (typeof M.next == 'function') return M
      if (!isNaN(M.length)) {
        var P = -1,
          R = function N() {
            for (; ++P < M.length; )
              if (r.call(M, P)) return (N.value = M[P]), (N.done = !1), N
            return (N.value = e), (N.done = !0), N
          }
        return (R.next = R)
      }
    }
    throw new TypeError(ae(M) + ' is not iterable')
  }
  return (
    (h.prototype = m),
    i(E, 'constructor', { value: m, configurable: !0 }),
    i(m, 'constructor', { value: h, configurable: !0 }),
    (h.displayName = u(m, l, 'GeneratorFunction')),
    (t.isGeneratorFunction = function (M) {
      var T = typeof M == 'function' && M.constructor
      return (
        !!T && (T === h || (T.displayName || T.name) === 'GeneratorFunction')
      )
    }),
    (t.mark = function (M) {
      return (
        Object.setPrototypeOf
          ? Object.setPrototypeOf(M, m)
          : ((M.__proto__ = m), u(M, l, 'GeneratorFunction')),
        (M.prototype = Object.create(E)),
        M
      )
    }),
    (t.awrap = function (M) {
      return { __await: M }
    }),
    k(O.prototype),
    u(O.prototype, s, function () {
      return this
    }),
    (t.AsyncIterator = O),
    (t.async = function (M, T, P, R, N) {
      N === void 0 && (N = Promise)
      var j = new O(c(M, T, P, R), N)
      return t.isGeneratorFunction(T)
        ? j
        : j.next().then(function (H) {
            return H.done ? H.value : j.next()
          })
    }),
    k(E),
    u(E, l, 'Generator'),
    u(E, a, function () {
      return this
    }),
    u(E, 'toString', function () {
      return '[object Generator]'
    }),
    (t.keys = function (M) {
      var T = Object(M),
        P = []
      for (var R in T) P.push(R)
      return (
        P.reverse(),
        function N() {
          for (; P.length; ) {
            var j = P.pop()
            if (j in T) return (N.value = j), (N.done = !1), N
          }
          return (N.done = !0), N
        }
      )
    }),
    (t.values = V),
    (F.prototype = {
      constructor: F,
      reset: function (T) {
        if (
          ((this.prev = 0),
          (this.next = 0),
          (this.sent = this._sent = e),
          (this.done = !1),
          (this.delegate = null),
          (this.method = 'next'),
          (this.arg = e),
          this.tryEntries.forEach(A),
          !T)
        )
          for (var P in this)
            P.charAt(0) === 't' &&
              r.call(this, P) &&
              !isNaN(+P.slice(1)) &&
              (this[P] = e)
      },
      stop: function () {
        this.done = !0
        var T = this.tryEntries[0].completion
        if (T.type === 'throw') throw T.arg
        return this.rval
      },
      dispatchException: function (T) {
        if (this.done) throw T
        var P = this
        function R(G, re) {
          return (
            (H.type = 'throw'),
            (H.arg = T),
            (P.next = G),
            re && ((P.method = 'next'), (P.arg = e)),
            !!re
          )
        }
        for (var N = this.tryEntries.length - 1; N >= 0; --N) {
          var j = this.tryEntries[N],
            H = j.completion
          if (j.tryLoc === 'root') return R('end')
          if (j.tryLoc <= this.prev) {
            var K = r.call(j, 'catchLoc'),
              D = r.call(j, 'finallyLoc')
            if (K && D) {
              if (this.prev < j.catchLoc) return R(j.catchLoc, !0)
              if (this.prev < j.finallyLoc) return R(j.finallyLoc)
            } else if (K) {
              if (this.prev < j.catchLoc) return R(j.catchLoc, !0)
            } else {
              if (!D) throw Error('try statement without catch or finally')
              if (this.prev < j.finallyLoc) return R(j.finallyLoc)
            }
          }
        }
      },
      abrupt: function (T, P) {
        for (var R = this.tryEntries.length - 1; R >= 0; --R) {
          var N = this.tryEntries[R]
          if (
            N.tryLoc <= this.prev &&
            r.call(N, 'finallyLoc') &&
            this.prev < N.finallyLoc
          ) {
            var j = N
            break
          }
        }
        j &&
          (T === 'break' || T === 'continue') &&
          j.tryLoc <= P &&
          P <= j.finallyLoc &&
          (j = null)
        var H = j ? j.completion : {}
        return (
          (H.type = T),
          (H.arg = P),
          j
            ? ((this.method = 'next'), (this.next = j.finallyLoc), C)
            : this.complete(H)
        )
      },
      complete: function (T, P) {
        if (T.type === 'throw') throw T.arg
        return (
          T.type === 'break' || T.type === 'continue'
            ? (this.next = T.arg)
            : T.type === 'return'
              ? ((this.rval = this.arg = T.arg),
                (this.method = 'return'),
                (this.next = 'end'))
              : T.type === 'normal' && P && (this.next = P),
          C
        )
      },
      finish: function (T) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var R = this.tryEntries[P]
          if (R.finallyLoc === T)
            return this.complete(R.completion, R.afterLoc), A(R), C
        }
      },
      catch: function (T) {
        for (var P = this.tryEntries.length - 1; P >= 0; --P) {
          var R = this.tryEntries[P]
          if (R.tryLoc === T) {
            var N = R.completion
            if (N.type === 'throw') {
              var j = N.arg
              A(R)
            }
            return j
          }
        }
        throw Error('illegal catch attempt')
      },
      delegateYield: function (T, P, R) {
        return (
          (this.delegate = { iterator: V(T), resultName: P, nextLoc: R }),
          this.method === 'next' && (this.arg = e),
          C
        )
      },
    }),
    t
  )
}
function yv(e, t, n, r, i, o, a) {
  try {
    var s = e[o](a),
      l = s.value
  } catch (u) {
    return void n(u)
  }
  s.done ? t(l) : Promise.resolve(l).then(r, i)
}
function Ys(e) {
  return function () {
    var t = this,
      n = arguments
    return new Promise(function (r, i) {
      var o = e.apply(t, n)
      function a(l) {
        yv(o, r, i, a, s, 'next', l)
      }
      function s(l) {
        yv(o, r, i, a, s, 'throw', l)
      }
      a(void 0)
    })
  }
}
const Rf = () => ({ height: 0, opacity: 0 }),
  Sv = (e) => {
    const { scrollHeight: t } = e
    return { height: t, opacity: 1 }
  },
  UO = (e) => ({ height: e ? e.offsetHeight : 0 }),
  If = (e, t) =>
    (t == null ? void 0 : t.deadline) === !0 || t.propertyName === 'height',
  WO = function () {
    return {
      motionName: `${arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : Fu}-motion-collapse`,
      onAppearStart: Rf,
      onEnterStart: Rf,
      onAppearActive: Sv,
      onEnterActive: Sv,
      onLeaveStart: UO,
      onLeaveActive: Rf,
      onAppearEnd: If,
      onEnterEnd: If,
      onLeaveEnd: If,
      motionDeadline: 500,
    }
  },
  KO = (e, t, n) => (n !== void 0 ? n : `${e}-${t}`),
  TC = function (e) {
    if (!e) return !1
    if (e instanceof Element) {
      if (e.offsetParent) return !0
      if (e.getBBox) {
        var t = e.getBBox(),
          n = t.width,
          r = t.height
        if (n || r) return !0
      }
      if (e.getBoundingClientRect) {
        var i = e.getBoundingClientRect(),
          o = i.width,
          a = i.height
        if (o || a) return !0
      }
    }
    return !1
  },
  OC = p.createContext(null),
  b5 = (e, t) => {
    const n = p.useContext(OC),
      r = p.useMemo(() => {
        if (!n) return ''
        const { compactDirection: i, isFirstItem: o, isLastItem: a } = n,
          s = i === 'vertical' ? '-vertical-' : '-'
        return oe(`${e}-compact${s}item`, {
          [`${e}-compact${s}first-item`]: o,
          [`${e}-compact${s}last-item`]: a,
          [`${e}-compact${s}item-rtl`]: t === 'rtl',
        })
      }, [e, t, n])
    return {
      compactSize: n == null ? void 0 : n.compactSize,
      compactDirection: n == null ? void 0 : n.compactDirection,
      compactItemClassnames: r,
    }
  },
  qO = (e) => {
    let { children: t } = e
    return p.createElement(OC.Provider, { value: null }, t)
  }
var GO = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M765.7 486.8L314.9 134.7A7.97 7.97 0 00302 141v77.3c0 4.9 2.3 9.6 6.1 12.6l360 281.1-360 281.1c-3.9 3-6.1 7.7-6.1 12.6V883c0 6.7 7.7 10.4 12.9 6.3l450.8-352.1a31.96 31.96 0 000-50.4z',
          },
        },
      ],
    },
    name: 'right',
    theme: 'outlined',
  },
  XO = function (t, n) {
    return p.createElement(xi, ce({}, t, { ref: n, icon: GO }))
  },
  Cv = p.forwardRef(XO)
const QO = (e) => ({
    [e.componentCls]: {
      [`${e.antCls}-motion-collapse-legacy`]: {
        overflow: 'hidden',
        '&-active': {
          transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
        },
      },
      [`${e.antCls}-motion-collapse`]: {
        overflow: 'hidden',
        transition: `height ${e.motionDurationMid} ${e.motionEaseInOut},
        opacity ${e.motionDurationMid} ${e.motionEaseInOut} !important`,
      },
    },
  }),
  YO = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  ZO = (e) => ({ animationDuration: e, animationFillMode: 'both' }),
  RC = function (e, t, n, r) {
    const o = (
      arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !1
    )
      ? '&'
      : ''
    return {
      [`
      ${o}${e}-enter,
      ${o}${e}-appear
    `]: Object.assign(Object.assign({}, YO(r)), {
        animationPlayState: 'paused',
      }),
      [`${o}${e}-leave`]: Object.assign(Object.assign({}, ZO(r)), {
        animationPlayState: 'paused',
      }),
      [`
      ${o}${e}-enter${e}-enter-active,
      ${o}${e}-appear${e}-appear-active
    `]: { animationName: t, animationPlayState: 'running' },
      [`${o}${e}-leave${e}-leave-active`]: {
        animationName: n,
        animationPlayState: 'running',
        pointerEvents: 'none',
      },
    }
  },
  JO = new st('antSlideUpIn', {
    '0%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  eR = new st('antSlideUpOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleY(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  tR = new st('antSlideDownIn', {
    '0%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
    '100%': {
      transform: 'scaleY(1)',
      transformOrigin: '100% 100%',
      opacity: 1,
    },
  }),
  nR = new st('antSlideDownOut', {
    '0%': { transform: 'scaleY(1)', transformOrigin: '100% 100%', opacity: 1 },
    '100%': {
      transform: 'scaleY(0.8)',
      transformOrigin: '100% 100%',
      opacity: 0,
    },
  }),
  rR = new st('antSlideLeftIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
  }),
  iR = new st('antSlideLeftOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '0% 0%', opacity: 1 },
    '100%': { transform: 'scaleX(0.8)', transformOrigin: '0% 0%', opacity: 0 },
  }),
  oR = new st('antSlideRightIn', {
    '0%': { transform: 'scaleX(0.8)', transformOrigin: '100% 0%', opacity: 0 },
    '100%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
  }),
  aR = new st('antSlideRightOut', {
    '0%': { transform: 'scaleX(1)', transformOrigin: '100% 0%', opacity: 1 },
    '100%': {
      transform: 'scaleX(0.8)',
      transformOrigin: '100% 0%',
      opacity: 0,
    },
  }),
  sR = {
    'slide-up': { inKeyframes: JO, outKeyframes: eR },
    'slide-down': { inKeyframes: tR, outKeyframes: nR },
    'slide-left': { inKeyframes: rR, outKeyframes: iR },
    'slide-right': { inKeyframes: oR, outKeyframes: aR },
  },
  wv = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: i, outKeyframes: o } = sR[t]
    return [
      RC(r, i, o, e.motionDurationMid),
      {
        [`
      ${r}-enter,
      ${r}-appear
    `]: {
          transform: 'scale(0)',
          transformOrigin: '0% 0%',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutQuint,
          '&-prepare': { transform: 'scale(1)' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInQuint },
      },
    ]
  },
  lR = new st('antZoomIn', {
    '0%': { transform: 'scale(0.2)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  uR = new st('antZoomOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.2)', opacity: 0 },
  }),
  bv = new st('antZoomBigIn', {
    '0%': { transform: 'scale(0.8)', opacity: 0 },
    '100%': { transform: 'scale(1)', opacity: 1 },
  }),
  xv = new st('antZoomBigOut', {
    '0%': { transform: 'scale(1)' },
    '100%': { transform: 'scale(0.8)', opacity: 0 },
  }),
  cR = new st('antZoomUpIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
  }),
  fR = new st('antZoomUpOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 0%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '50% 0%', opacity: 0 },
  }),
  dR = new st('antZoomLeftIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
  }),
  pR = new st('antZoomLeftOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '0% 50%' },
    '100%': { transform: 'scale(0.8)', transformOrigin: '0% 50%', opacity: 0 },
  }),
  hR = new st('antZoomRightIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '100% 50%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
  }),
  mR = new st('antZoomRightOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '100% 50%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '100% 50%',
      opacity: 0,
    },
  }),
  gR = new st('antZoomDownIn', {
    '0%': { transform: 'scale(0.8)', transformOrigin: '50% 100%', opacity: 0 },
    '100%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
  }),
  vR = new st('antZoomDownOut', {
    '0%': { transform: 'scale(1)', transformOrigin: '50% 100%' },
    '100%': {
      transform: 'scale(0.8)',
      transformOrigin: '50% 100%',
      opacity: 0,
    },
  }),
  yR = {
    zoom: { inKeyframes: lR, outKeyframes: uR },
    'zoom-big': { inKeyframes: bv, outKeyframes: xv },
    'zoom-big-fast': { inKeyframes: bv, outKeyframes: xv },
    'zoom-left': { inKeyframes: dR, outKeyframes: pR },
    'zoom-right': { inKeyframes: hR, outKeyframes: mR },
    'zoom-up': { inKeyframes: cR, outKeyframes: fR },
    'zoom-down': { inKeyframes: gR, outKeyframes: vR },
  },
  IC = (e, t) => {
    const { antCls: n } = e,
      r = `${n}-${t}`,
      { inKeyframes: i, outKeyframes: o } = yR[t]
    return [
      RC(
        r,
        i,
        o,
        t === 'zoom-big-fast' ? e.motionDurationFast : e.motionDurationMid,
      ),
      {
        [`
        ${r}-enter,
        ${r}-appear
      `]: {
          transform: 'scale(0)',
          opacity: 0,
          animationTimingFunction: e.motionEaseOutCirc,
          '&-prepare': { transform: 'none' },
        },
        [`${r}-leave`]: { animationTimingFunction: e.motionEaseInOutCirc },
      },
    ]
  }
var $C = p.createContext(null),
  Ev = []
function SR(e, t) {
  var n = p.useState(function () {
      if (!Pn()) return null
      var y = document.createElement('div')
      return y
    }),
    r = B(n, 1),
    i = r[0],
    o = p.useRef(!1),
    a = p.useContext($C),
    s = p.useState(Ev),
    l = B(s, 2),
    u = l[0],
    c = l[1],
    f =
      a ||
      (o.current
        ? void 0
        : function (y) {
            c(function (S) {
              var C = [y].concat(J(S))
              return C
            })
          })
  function d() {
    i.parentElement || document.body.appendChild(i), (o.current = !0)
  }
  function g() {
    var y
    ;(y = i.parentElement) === null || y === void 0 || y.removeChild(i),
      (o.current = !1)
  }
  return (
    Ft(
      function () {
        return e ? (a ? a(d) : d()) : g(), g
      },
      [e],
    ),
    Ft(
      function () {
        u.length &&
          (u.forEach(function (y) {
            return y()
          }),
          c(Ev))
      },
      [u],
    ),
    [i, f]
  )
}
function CR(e) {
  var t = 'rc-scrollbar-measure-'.concat(
      Math.random().toString(36).substring(7),
    ),
    n = document.createElement('div')
  n.id = t
  var r = n.style
  ;(r.position = 'absolute'),
    (r.left = '0'),
    (r.top = '0'),
    (r.width = '100px'),
    (r.height = '100px'),
    (r.overflow = 'scroll')
  var i, o
  if (e) {
    var a = getComputedStyle(e)
    ;(r.scrollbarColor = a.scrollbarColor),
      (r.scrollbarWidth = a.scrollbarWidth)
    var s = getComputedStyle(e, '::-webkit-scrollbar'),
      l = parseInt(s.width, 10),
      u = parseInt(s.height, 10)
    try {
      var c = l ? 'width: '.concat(s.width, ';') : '',
        f = u ? 'height: '.concat(s.height, ';') : ''
      Nr(
        `
#`
          .concat(
            t,
            `::-webkit-scrollbar {
`,
          )
          .concat(
            c,
            `
`,
          )
          .concat(
            f,
            `
}`,
          ),
        t,
      )
    } catch (y) {
      console.error(y), (i = l), (o = u)
    }
  }
  document.body.appendChild(n)
  var d = e && i && !isNaN(i) ? i : n.offsetWidth - n.clientWidth,
    g = e && o && !isNaN(o) ? o : n.offsetHeight - n.clientHeight
  return document.body.removeChild(n), Os(t), { width: d, height: g }
}
function wR(e) {
  return typeof document > 'u' || !e || !(e instanceof Element)
    ? { width: 0, height: 0 }
    : CR(e)
}
function bR() {
  return (
    document.body.scrollHeight >
      (window.innerHeight || document.documentElement.clientHeight) &&
    window.innerWidth > document.body.offsetWidth
  )
}
var xR = 'rc-util-locker-'.concat(Date.now()),
  Pv = 0
function ER(e) {
  var t = !!e,
    n = p.useState(function () {
      return (Pv += 1), ''.concat(xR, '_').concat(Pv)
    }),
    r = B(n, 1),
    i = r[0]
  Ft(
    function () {
      if (t) {
        var o = wR(document.body).width,
          a = bR()
        Nr(
          `
html body {
  overflow-y: hidden;
  `.concat(
            a ? 'width: calc(100% - '.concat(o, 'px);') : '',
            `
}`,
          ),
          i,
        )
      } else Os(i)
      return function () {
        Os(i)
      }
    },
    [t, i],
  )
}
var PR = !1
function kR(e) {
  return PR
}
var kv = function (t) {
    return t === !1
      ? !1
      : !Pn() || !t
        ? null
        : typeof t == 'string'
          ? document.querySelector(t)
          : typeof t == 'function'
            ? t()
            : t
  },
  MC = p.forwardRef(function (e, t) {
    var n = e.open,
      r = e.autoLock,
      i = e.getContainer
    e.debug
    var o = e.autoDestroy,
      a = o === void 0 ? !0 : o,
      s = e.children,
      l = p.useState(n),
      u = B(l, 2),
      c = u[0],
      f = u[1],
      d = c || n
    p.useEffect(
      function () {
        ;(a || n) && f(n)
      },
      [n, a],
    )
    var g = p.useState(function () {
        return kv(i)
      }),
      y = B(g, 2),
      S = y[0],
      C = y[1]
    p.useEffect(function () {
      var L = kv(i)
      C(L ?? null)
    })
    var v = SR(d && !S),
      h = B(v, 2),
      m = h[0],
      w = h[1],
      b = S ?? m
    ER(r && n && Pn() && (b === m || b === document.body))
    var x = null
    if (s && Ec(s) && t) {
      var E = s
      x = E.ref
    }
    var k = xc(x, t)
    if (!d || !Pn() || S === void 0) return null
    var O = b === !1 || kR(),
      I = s
    return (
      t && (I = p.cloneElement(s, { ref: k })),
      p.createElement($C.Provider, { value: w }, O ? I : Ws.createPortal(I, b))
    )
  })
function TR() {
  var e = _({}, Ds)
  return e.useId
}
var Tv = 0,
  Ov = TR()
const OR = Ov
  ? function (t) {
      var n = Ov()
      return t || n
    }
  : function (t) {
      var n = p.useState('ssr-id'),
        r = B(n, 2),
        i = r[0],
        o = r[1]
      return (
        p.useEffect(function () {
          var a = Tv
          ;(Tv += 1), o('rc_unique_'.concat(a))
        }, []),
        t || i
      )
    }
var zi = 'RC_FORM_INTERNAL_HOOKS',
  Ne = function () {
    tn(
      !1,
      'Can not find FormContext. Please make sure you wrap Field under Form.',
    )
  },
  aa = p.createContext({
    getFieldValue: Ne,
    getFieldsValue: Ne,
    getFieldError: Ne,
    getFieldWarning: Ne,
    getFieldsError: Ne,
    isFieldsTouched: Ne,
    isFieldTouched: Ne,
    isFieldValidating: Ne,
    isFieldsValidating: Ne,
    resetFields: Ne,
    setFields: Ne,
    setFieldValue: Ne,
    setFieldsValue: Ne,
    validateFields: Ne,
    submit: Ne,
    getInternalHooks: function () {
      return (
        Ne(),
        {
          dispatch: Ne,
          initEntityValue: Ne,
          registerField: Ne,
          useSubscribe: Ne,
          setInitialValues: Ne,
          destroyForm: Ne,
          setCallbacks: Ne,
          registerWatch: Ne,
          getFields: Ne,
          setValidateMessages: Ne,
          setPreserve: Ne,
          getInitialValue: Ne,
        }
      )
    },
  }),
  Du = p.createContext(null)
function vp(e) {
  return e == null ? [] : Array.isArray(e) ? e : [e]
}
function RR(e) {
  return e && !!e._init
}
function yp() {
  return {
    default: 'Validation error on field %s',
    required: '%s is required',
    enum: '%s must be one of %s',
    whitespace: '%s cannot be empty',
    date: {
      format: '%s date %s is invalid for format %s',
      parse: '%s date could not be parsed, %s is invalid ',
      invalid: '%s date %s is invalid',
    },
    types: {
      string: '%s is not a %s',
      method: '%s is not a %s (function)',
      array: '%s is not an %s',
      object: '%s is not an %s',
      number: '%s is not a %s',
      date: '%s is not a %s',
      boolean: '%s is not a %s',
      integer: '%s is not an %s',
      float: '%s is not a %s',
      regexp: '%s is not a valid %s',
      email: '%s is not a valid %s',
      url: '%s is not a valid %s',
      hex: '%s is not a valid %s',
    },
    string: {
      len: '%s must be exactly %s characters',
      min: '%s must be at least %s characters',
      max: '%s cannot be longer than %s characters',
      range: '%s must be between %s and %s characters',
    },
    number: {
      len: '%s must equal %s',
      min: '%s cannot be less than %s',
      max: '%s cannot be greater than %s',
      range: '%s must be between %s and %s',
    },
    array: {
      len: '%s must be exactly %s in length',
      min: '%s cannot be less than %s in length',
      max: '%s cannot be greater than %s in length',
      range: '%s must be between %s and %s in length',
    },
    pattern: { mismatch: '%s value %s does not match pattern %s' },
    clone: function () {
      var t = JSON.parse(JSON.stringify(this))
      return (t.clone = this.clone), t
    },
  }
}
var Sp = yp()
function IR(e) {
  try {
    return Function.toString.call(e).indexOf('[native code]') !== -1
  } catch {
    return typeof e == 'function'
  }
}
function $R(e, t, n) {
  if (Fh()) return Reflect.construct.apply(null, arguments)
  var r = [null]
  r.push.apply(r, t)
  var i = new (e.bind.apply(e, r))()
  return n && Ps(i, n.prototype), i
}
function Cp(e) {
  var t = typeof Map == 'function' ? new Map() : void 0
  return (
    (Cp = function (r) {
      if (r === null || !IR(r)) return r
      if (typeof r != 'function')
        throw new TypeError(
          'Super expression must either be null or a function',
        )
      if (t !== void 0) {
        if (t.has(r)) return t.get(r)
        t.set(r, i)
      }
      function i() {
        return $R(r, arguments, ks(this).constructor)
      }
      return (
        (i.prototype = Object.create(r.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Ps(i, r)
      )
    }),
    Cp(e)
  )
}
var MR = /%[sdj%]/g,
  NR = function () {}
function wp(e) {
  if (!e || !e.length) return null
  var t = {}
  return (
    e.forEach(function (n) {
      var r = n.field
      ;(t[r] = t[r] || []), t[r].push(n)
    }),
    t
  )
}
function bn(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r]
  var i = 0,
    o = n.length
  if (typeof e == 'function') return e.apply(null, n)
  if (typeof e == 'string') {
    var a = e.replace(MR, function (s) {
      if (s === '%%') return '%'
      if (i >= o) return s
      switch (s) {
        case '%s':
          return String(n[i++])
        case '%d':
          return Number(n[i++])
        case '%j':
          try {
            return JSON.stringify(n[i++])
          } catch {
            return '[Circular]'
          }
          break
        default:
          return s
      }
    })
    return a
  }
  return e
}
function _R(e) {
  return (
    e === 'string' ||
    e === 'url' ||
    e === 'hex' ||
    e === 'email' ||
    e === 'date' ||
    e === 'pattern'
  )
}
function wt(e, t) {
  return !!(
    e == null ||
    (t === 'array' && Array.isArray(e) && !e.length) ||
    (_R(t) && typeof e == 'string' && !e)
  )
}
function LR(e, t, n) {
  var r = [],
    i = 0,
    o = e.length
  function a(s) {
    r.push.apply(r, J(s || [])), i++, i === o && n(r)
  }
  e.forEach(function (s) {
    t(s, a)
  })
}
function Rv(e, t, n) {
  var r = 0,
    i = e.length
  function o(a) {
    if (a && a.length) {
      n(a)
      return
    }
    var s = r
    ;(r = r + 1), s < i ? t(e[s], o) : n([])
  }
  o([])
}
function AR(e) {
  var t = []
  return (
    Object.keys(e).forEach(function (n) {
      t.push.apply(t, J(e[n] || []))
    }),
    t
  )
}
var Iv = (function (e) {
  wi(n, e)
  var t = bi(n)
  function n(r, i) {
    var o
    return (
      Vt(this, n),
      (o = t.call(this, 'Async Validation Error')),
      $(ue(o), 'errors', void 0),
      $(ue(o), 'fields', void 0),
      (o.errors = r),
      (o.fields = i),
      o
    )
  }
  return Bt(n)
})(Cp(Error))
function FR(e, t, n, r, i) {
  if (t.first) {
    var o = new Promise(function (d, g) {
      var y = function (v) {
          return r(v), v.length ? g(new Iv(v, wp(v))) : d(i)
        },
        S = AR(e)
      Rv(S, n, y)
    })
    return (
      o.catch(function (d) {
        return d
      }),
      o
    )
  }
  var a = t.firstFields === !0 ? Object.keys(e) : t.firstFields || [],
    s = Object.keys(e),
    l = s.length,
    u = 0,
    c = [],
    f = new Promise(function (d, g) {
      var y = function (C) {
        if ((c.push.apply(c, C), u++, u === l))
          return r(c), c.length ? g(new Iv(c, wp(c))) : d(i)
      }
      s.length || (r(c), d(i)),
        s.forEach(function (S) {
          var C = e[S]
          a.indexOf(S) !== -1 ? Rv(C, n, y) : LR(C, n, y)
        })
    })
  return (
    f.catch(function (d) {
      return d
    }),
    f
  )
}
function jR(e) {
  return !!(e && e.message !== void 0)
}
function zR(e, t) {
  for (var n = e, r = 0; r < t.length; r++) {
    if (n == null) return n
    n = n[t[r]]
  }
  return n
}
function $v(e, t) {
  return function (n) {
    var r
    return (
      e.fullFields
        ? (r = zR(t, e.fullFields))
        : (r = t[n.field || e.fullField]),
      jR(n)
        ? ((n.field = n.field || e.fullField), (n.fieldValue = r), n)
        : {
            message: typeof n == 'function' ? n() : n,
            fieldValue: r,
            field: n.field || e.fullField,
          }
    )
  }
}
function Mv(e, t) {
  if (t) {
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = t[n]
        ae(r) === 'object' && ae(e[n]) === 'object'
          ? (e[n] = _(_({}, e[n]), r))
          : (e[n] = r)
      }
  }
  return e
}
var vo = 'enum',
  DR = function (t, n, r, i, o) {
    ;(t[vo] = Array.isArray(t[vo]) ? t[vo] : []),
      t[vo].indexOf(n) === -1 &&
        i.push(bn(o.messages[vo], t.fullField, t[vo].join(', ')))
  },
  HR = function (t, n, r, i, o) {
    if (t.pattern) {
      if (t.pattern instanceof RegExp)
        (t.pattern.lastIndex = 0),
          t.pattern.test(n) ||
            i.push(bn(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      else if (typeof t.pattern == 'string') {
        var a = new RegExp(t.pattern)
        a.test(n) ||
          i.push(bn(o.messages.pattern.mismatch, t.fullField, n, t.pattern))
      }
    }
  },
  VR = function (t, n, r, i, o) {
    var a = typeof t.len == 'number',
      s = typeof t.min == 'number',
      l = typeof t.max == 'number',
      u = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
      c = n,
      f = null,
      d = typeof n == 'number',
      g = typeof n == 'string',
      y = Array.isArray(n)
    if ((d ? (f = 'number') : g ? (f = 'string') : y && (f = 'array'), !f))
      return !1
    y && (c = n.length),
      g && (c = n.replace(u, '_').length),
      a
        ? c !== t.len && i.push(bn(o.messages[f].len, t.fullField, t.len))
        : s && !l && c < t.min
          ? i.push(bn(o.messages[f].min, t.fullField, t.min))
          : l && !s && c > t.max
            ? i.push(bn(o.messages[f].max, t.fullField, t.max))
            : s &&
              l &&
              (c < t.min || c > t.max) &&
              i.push(bn(o.messages[f].range, t.fullField, t.min, t.max))
  },
  NC = function (t, n, r, i, o, a) {
    t.required &&
      (!r.hasOwnProperty(t.field) || wt(n, a || t.type)) &&
      i.push(bn(o.messages.required, t.fullField))
  },
  Nl
const BR = function () {
  if (Nl) return Nl
  var e = '[a-fA-F\\d:]',
    t = function (x) {
      return x && x.includeBoundaries
        ? '(?:(?<=\\s|^)(?='.concat(e, ')|(?<=').concat(e, ')(?=\\s|$))')
        : ''
    },
    n =
      '(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}',
    r = '[a-fA-F\\d]{1,4}',
    i = [
      '(?:'.concat(r, ':){7}(?:').concat(r, '|:)'),
      '(?:'.concat(r, ':){6}(?:').concat(n, '|:').concat(r, '|:)'),
      '(?:'.concat(r, ':){5}(?::').concat(n, '|(?::').concat(r, '){1,2}|:)'),
      '(?:'
        .concat(r, ':){4}(?:(?::')
        .concat(r, '){0,1}:')
        .concat(n, '|(?::')
        .concat(r, '){1,3}|:)'),
      '(?:'
        .concat(r, ':){3}(?:(?::')
        .concat(r, '){0,2}:')
        .concat(n, '|(?::')
        .concat(r, '){1,4}|:)'),
      '(?:'
        .concat(r, ':){2}(?:(?::')
        .concat(r, '){0,3}:')
        .concat(n, '|(?::')
        .concat(r, '){1,5}|:)'),
      '(?:'
        .concat(r, ':){1}(?:(?::')
        .concat(r, '){0,4}:')
        .concat(n, '|(?::')
        .concat(r, '){1,6}|:)'),
      '(?::(?:(?::'
        .concat(r, '){0,5}:')
        .concat(n, '|(?::')
        .concat(r, '){1,7}|:))'),
    ],
    o = '(?:%[0-9a-zA-Z]{1,})?',
    a = '(?:'.concat(i.join('|'), ')').concat(o),
    s = new RegExp('(?:^'.concat(n, '$)|(?:^').concat(a, '$)')),
    l = new RegExp('^'.concat(n, '$')),
    u = new RegExp('^'.concat(a, '$')),
    c = function (x) {
      return x && x.exact
        ? s
        : new RegExp(
            '(?:'
              .concat(t(x))
              .concat(n)
              .concat(t(x), ')|(?:')
              .concat(t(x))
              .concat(a)
              .concat(t(x), ')'),
            'g',
          )
    }
  ;(c.v4 = function (b) {
    return b && b.exact
      ? l
      : new RegExp(''.concat(t(b)).concat(n).concat(t(b)), 'g')
  }),
    (c.v6 = function (b) {
      return b && b.exact
        ? u
        : new RegExp(''.concat(t(b)).concat(a).concat(t(b)), 'g')
    })
  var f = '(?:(?:[a-z]+:)?//)',
    d = '(?:\\S+(?::\\S*)?@)?',
    g = c.v4().source,
    y = c.v6().source,
    S = '(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)',
    C = '(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*',
    v = '(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))',
    h = '(?::\\d{2,5})?',
    m = '(?:[/?#][^\\s"]*)?',
    w = '(?:'
      .concat(f, '|www\\.)')
      .concat(d, '(?:localhost|')
      .concat(g, '|')
      .concat(y, '|')
      .concat(S)
      .concat(C)
      .concat(v, ')')
      .concat(h)
      .concat(m)
  return (Nl = new RegExp('(?:^'.concat(w, '$)'), 'i')), Nl
}
var Nv = {
    email:
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,
    hex: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/i,
  },
  Da = {
    integer: function (t) {
      return Da.number(t) && parseInt(t, 10) === t
    },
    float: function (t) {
      return Da.number(t) && !Da.integer(t)
    },
    array: function (t) {
      return Array.isArray(t)
    },
    regexp: function (t) {
      if (t instanceof RegExp) return !0
      try {
        return !!new RegExp(t)
      } catch {
        return !1
      }
    },
    date: function (t) {
      return (
        typeof t.getTime == 'function' &&
        typeof t.getMonth == 'function' &&
        typeof t.getYear == 'function' &&
        !isNaN(t.getTime())
      )
    },
    number: function (t) {
      return isNaN(t) ? !1 : typeof t == 'number'
    },
    object: function (t) {
      return ae(t) === 'object' && !Da.array(t)
    },
    method: function (t) {
      return typeof t == 'function'
    },
    email: function (t) {
      return typeof t == 'string' && t.length <= 320 && !!t.match(Nv.email)
    },
    url: function (t) {
      return typeof t == 'string' && t.length <= 2048 && !!t.match(BR())
    },
    hex: function (t) {
      return typeof t == 'string' && !!t.match(Nv.hex)
    },
  },
  UR = function (t, n, r, i, o) {
    if (t.required && n === void 0) {
      NC(t, n, r, i, o)
      return
    }
    var a = [
        'integer',
        'float',
        'array',
        'regexp',
        'object',
        'method',
        'email',
        'number',
        'date',
        'url',
        'hex',
      ],
      s = t.type
    a.indexOf(s) > -1
      ? Da[s](n) || i.push(bn(o.messages.types[s], t.fullField, t.type))
      : s &&
        ae(n) !== t.type &&
        i.push(bn(o.messages.types[s], t.fullField, t.type))
  },
  WR = function (t, n, r, i, o) {
    ;(/^\s+$/.test(n) || n === '') &&
      i.push(bn(o.messages.whitespace, t.fullField))
  }
const de = {
  required: NC,
  whitespace: WR,
  type: UR,
  range: VR,
  enum: DR,
  pattern: HR,
}
var KR = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n) && !t.required) return r()
      de.required(t, n, i, a, o)
    }
    r(a)
  },
  qR = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (n == null && !t.required) return r()
      de.required(t, n, i, a, o, 'array'),
        n != null && (de.type(t, n, i, a, o), de.range(t, n, i, a, o))
    }
    r(a)
  },
  GR = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n) && !t.required) return r()
      de.required(t, n, i, a, o), n !== void 0 && de.type(t, n, i, a, o)
    }
    r(a)
  },
  XR = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n, 'date') && !t.required) return r()
      if ((de.required(t, n, i, a, o), !wt(n, 'date'))) {
        var l
        n instanceof Date ? (l = n) : (l = new Date(n)),
          de.type(t, l, i, a, o),
          l && de.range(t, l.getTime(), i, a, o)
      }
    }
    r(a)
  },
  QR = 'enum',
  YR = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n) && !t.required) return r()
      de.required(t, n, i, a, o), n !== void 0 && de[QR](t, n, i, a, o)
    }
    r(a)
  },
  ZR = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n) && !t.required) return r()
      de.required(t, n, i, a, o),
        n !== void 0 && (de.type(t, n, i, a, o), de.range(t, n, i, a, o))
    }
    r(a)
  },
  JR = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n) && !t.required) return r()
      de.required(t, n, i, a, o),
        n !== void 0 && (de.type(t, n, i, a, o), de.range(t, n, i, a, o))
    }
    r(a)
  },
  eI = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n) && !t.required) return r()
      de.required(t, n, i, a, o), n !== void 0 && de.type(t, n, i, a, o)
    }
    r(a)
  },
  tI = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if ((n === '' && (n = void 0), wt(n) && !t.required)) return r()
      de.required(t, n, i, a, o),
        n !== void 0 && (de.type(t, n, i, a, o), de.range(t, n, i, a, o))
    }
    r(a)
  },
  nI = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n) && !t.required) return r()
      de.required(t, n, i, a, o), n !== void 0 && de.type(t, n, i, a, o)
    }
    r(a)
  },
  rI = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n, 'string') && !t.required) return r()
      de.required(t, n, i, a, o), wt(n, 'string') || de.pattern(t, n, i, a, o)
    }
    r(a)
  },
  iI = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n) && !t.required) return r()
      de.required(t, n, i, a, o), wt(n) || de.type(t, n, i, a, o)
    }
    r(a)
  },
  oI = function (t, n, r, i, o) {
    var a = [],
      s = Array.isArray(n) ? 'array' : ae(n)
    de.required(t, n, i, a, o, s), r(a)
  },
  aI = function (t, n, r, i, o) {
    var a = [],
      s = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (s) {
      if (wt(n, 'string') && !t.required) return r()
      de.required(t, n, i, a, o, 'string'),
        wt(n, 'string') ||
          (de.type(t, n, i, a, o),
          de.range(t, n, i, a, o),
          de.pattern(t, n, i, a, o),
          t.whitespace === !0 && de.whitespace(t, n, i, a, o))
    }
    r(a)
  },
  $f = function (t, n, r, i, o) {
    var a = t.type,
      s = [],
      l = t.required || (!t.required && i.hasOwnProperty(t.field))
    if (l) {
      if (wt(n, a) && !t.required) return r()
      de.required(t, n, i, s, o, a), wt(n, a) || de.type(t, n, i, s, o)
    }
    r(s)
  }
const ts = {
  string: aI,
  method: eI,
  number: tI,
  boolean: GR,
  regexp: iI,
  integer: JR,
  float: ZR,
  array: qR,
  object: nI,
  enum: YR,
  pattern: rI,
  date: XR,
  url: $f,
  hex: $f,
  email: $f,
  required: oI,
  any: KR,
}
var Zs = (function () {
  function e(t) {
    Vt(this, e),
      $(this, 'rules', null),
      $(this, '_messages', Sp),
      this.define(t)
  }
  return (
    Bt(e, [
      {
        key: 'define',
        value: function (n) {
          var r = this
          if (!n) throw new Error('Cannot configure a schema with no rules')
          if (ae(n) !== 'object' || Array.isArray(n))
            throw new Error('Rules must be an object')
          ;(this.rules = {}),
            Object.keys(n).forEach(function (i) {
              var o = n[i]
              r.rules[i] = Array.isArray(o) ? o : [o]
            })
        },
      },
      {
        key: 'messages',
        value: function (n) {
          return n && (this._messages = Mv(yp(), n)), this._messages
        },
      },
      {
        key: 'validate',
        value: function (n) {
          var r = this,
            i =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            o =
              arguments.length > 2 && arguments[2] !== void 0
                ? arguments[2]
                : function () {},
            a = n,
            s = i,
            l = o
          if (
            (typeof s == 'function' && ((l = s), (s = {})),
            !this.rules || Object.keys(this.rules).length === 0)
          )
            return l && l(null, a), Promise.resolve(a)
          function u(y) {
            var S = [],
              C = {}
            function v(m) {
              if (Array.isArray(m)) {
                var w
                S = (w = S).concat.apply(w, J(m))
              } else S.push(m)
            }
            for (var h = 0; h < y.length; h++) v(y[h])
            S.length ? ((C = wp(S)), l(S, C)) : l(null, a)
          }
          if (s.messages) {
            var c = this.messages()
            c === Sp && (c = yp()), Mv(c, s.messages), (s.messages = c)
          } else s.messages = this.messages()
          var f = {},
            d = s.keys || Object.keys(this.rules)
          d.forEach(function (y) {
            var S = r.rules[y],
              C = a[y]
            S.forEach(function (v) {
              var h = v
              typeof h.transform == 'function' &&
                (a === n && (a = _({}, a)),
                (C = a[y] = h.transform(C)),
                C != null &&
                  (h.type = h.type || (Array.isArray(C) ? 'array' : ae(C)))),
                typeof h == 'function'
                  ? (h = { validator: h })
                  : (h = _({}, h)),
                (h.validator = r.getValidationMethod(h)),
                h.validator &&
                  ((h.field = y),
                  (h.fullField = h.fullField || y),
                  (h.type = r.getType(h)),
                  (f[y] = f[y] || []),
                  f[y].push({ rule: h, value: C, source: a, field: y }))
            })
          })
          var g = {}
          return FR(
            f,
            s,
            function (y, S) {
              var C = y.rule,
                v =
                  (C.type === 'object' || C.type === 'array') &&
                  (ae(C.fields) === 'object' || ae(C.defaultField) === 'object')
              ;(v = v && (C.required || (!C.required && y.value))),
                (C.field = y.field)
              function h(E, k) {
                return _(
                  _({}, k),
                  {},
                  {
                    fullField: ''.concat(C.fullField, '.').concat(E),
                    fullFields: C.fullFields
                      ? [].concat(J(C.fullFields), [E])
                      : [E],
                  },
                )
              }
              function m() {
                var E =
                    arguments.length > 0 && arguments[0] !== void 0
                      ? arguments[0]
                      : [],
                  k = Array.isArray(E) ? E : [E]
                !s.suppressWarning &&
                  k.length &&
                  e.warning('async-validator:', k),
                  k.length && C.message !== void 0 && (k = [].concat(C.message))
                var O = k.map($v(C, a))
                if (s.first && O.length) return (g[C.field] = 1), S(O)
                if (!v) S(O)
                else {
                  if (C.required && !y.value)
                    return (
                      C.message !== void 0
                        ? (O = [].concat(C.message).map($v(C, a)))
                        : s.error &&
                          (O = [s.error(C, bn(s.messages.required, C.field))]),
                      S(O)
                    )
                  var I = {}
                  C.defaultField &&
                    Object.keys(y.value).map(function (A) {
                      I[A] = C.defaultField
                    }),
                    (I = _(_({}, I), y.rule.fields))
                  var L = {}
                  Object.keys(I).forEach(function (A) {
                    var F = I[A],
                      V = Array.isArray(F) ? F : [F]
                    L[A] = V.map(h.bind(null, A))
                  })
                  var z = new e(L)
                  z.messages(s.messages),
                    y.rule.options &&
                      ((y.rule.options.messages = s.messages),
                      (y.rule.options.error = s.error)),
                    z.validate(y.value, y.rule.options || s, function (A) {
                      var F = []
                      O && O.length && F.push.apply(F, J(O)),
                        A && A.length && F.push.apply(F, J(A)),
                        S(F.length ? F : null)
                    })
                }
              }
              var w
              if (C.asyncValidator)
                w = C.asyncValidator(C, y.value, m, y.source, s)
              else if (C.validator) {
                try {
                  w = C.validator(C, y.value, m, y.source, s)
                } catch (E) {
                  var b, x
                  ;(b = (x = console).error) === null ||
                    b === void 0 ||
                    b.call(x, E),
                    s.suppressValidatorError ||
                      setTimeout(function () {
                        throw E
                      }, 0),
                    m(E.message)
                }
                w === !0
                  ? m()
                  : w === !1
                    ? m(
                        typeof C.message == 'function'
                          ? C.message(C.fullField || C.field)
                          : C.message ||
                              ''.concat(C.fullField || C.field, ' fails'),
                      )
                    : w instanceof Array
                      ? m(w)
                      : w instanceof Error && m(w.message)
              }
              w &&
                w.then &&
                w.then(
                  function () {
                    return m()
                  },
                  function (E) {
                    return m(E)
                  },
                )
            },
            function (y) {
              u(y)
            },
            a,
          )
        },
      },
      {
        key: 'getType',
        value: function (n) {
          if (
            (n.type === void 0 &&
              n.pattern instanceof RegExp &&
              (n.type = 'pattern'),
            typeof n.validator != 'function' &&
              n.type &&
              !ts.hasOwnProperty(n.type))
          )
            throw new Error(bn('Unknown rule type %s', n.type))
          return n.type || 'string'
        },
      },
      {
        key: 'getValidationMethod',
        value: function (n) {
          if (typeof n.validator == 'function') return n.validator
          var r = Object.keys(n),
            i = r.indexOf('message')
          return (
            i !== -1 && r.splice(i, 1),
            r.length === 1 && r[0] === 'required'
              ? ts.required
              : ts[this.getType(n)] || void 0
          )
        },
      },
    ]),
    e
  )
})()
$(Zs, 'register', function (t, n) {
  if (typeof n != 'function')
    throw new Error(
      'Cannot register a validator by type, validator is not a function',
    )
  ts[t] = n
})
$(Zs, 'warning', NR)
$(Zs, 'messages', Sp)
$(Zs, 'validators', ts)
var yn = "'${name}' is not a valid ${type}",
  _C = {
    default: "Validation error on field '${name}'",
    required: "'${name}' is required",
    enum: "'${name}' must be one of [${enum}]",
    whitespace: "'${name}' cannot be empty",
    date: {
      format: "'${name}' is invalid for format date",
      parse: "'${name}' could not be parsed as date",
      invalid: "'${name}' is invalid date",
    },
    types: {
      string: yn,
      method: yn,
      array: yn,
      object: yn,
      number: yn,
      date: yn,
      boolean: yn,
      integer: yn,
      float: yn,
      regexp: yn,
      email: yn,
      url: yn,
      hex: yn,
    },
    string: {
      len: "'${name}' must be exactly ${len} characters",
      min: "'${name}' must be at least ${min} characters",
      max: "'${name}' cannot be longer than ${max} characters",
      range: "'${name}' must be between ${min} and ${max} characters",
    },
    number: {
      len: "'${name}' must equal ${len}",
      min: "'${name}' cannot be less than ${min}",
      max: "'${name}' cannot be greater than ${max}",
      range: "'${name}' must be between ${min} and ${max}",
    },
    array: {
      len: "'${name}' must be exactly ${len} in length",
      min: "'${name}' cannot be less than ${min} in length",
      max: "'${name}' cannot be greater than ${max} in length",
      range: "'${name}' must be between ${min} and ${max} in length",
    },
    pattern: { mismatch: "'${name}' does not match pattern ${pattern}" },
  },
  _v = Zs
function sI(e, t) {
  return e.replace(/\\?\$\{\w+\}/g, function (n) {
    if (n.startsWith('\\')) return n.slice(1)
    var r = n.slice(2, -1)
    return t[r]
  })
}
var Lv = 'CODE_LOGIC_ERROR'
function bp(e, t, n, r, i) {
  return xp.apply(this, arguments)
}
function xp() {
  return (
    (xp = Ys(
      ar().mark(function e(t, n, r, i, o) {
        var a, s, l, u, c, f, d, g, y
        return ar().wrap(
          function (C) {
            for (;;)
              switch ((C.prev = C.next)) {
                case 0:
                  return (
                    (a = _({}, r)),
                    delete a.ruleIndex,
                    (_v.warning = function () {}),
                    a.validator &&
                      ((s = a.validator),
                      (a.validator = function () {
                        try {
                          return s.apply(void 0, arguments)
                        } catch (v) {
                          return console.error(v), Promise.reject(Lv)
                        }
                      })),
                    (l = null),
                    a &&
                      a.type === 'array' &&
                      a.defaultField &&
                      ((l = a.defaultField), delete a.defaultField),
                    (u = new _v($({}, t, [a]))),
                    (c = jo(_C, i.validateMessages)),
                    u.messages(c),
                    (f = []),
                    (C.prev = 10),
                    (C.next = 13),
                    Promise.resolve(u.validate($({}, t, n), _({}, i)))
                  )
                case 13:
                  C.next = 18
                  break
                case 15:
                  ;(C.prev = 15),
                    (C.t0 = C.catch(10)),
                    C.t0.errors &&
                      (f = C.t0.errors.map(function (v, h) {
                        var m = v.message,
                          w = m === Lv ? c.default : m
                        return p.isValidElement(w)
                          ? p.cloneElement(w, { key: 'error_'.concat(h) })
                          : w
                      }))
                case 18:
                  if (!(!f.length && l)) {
                    C.next = 23
                    break
                  }
                  return (
                    (C.next = 21),
                    Promise.all(
                      n.map(function (v, h) {
                        return bp(''.concat(t, '.').concat(h), v, l, i, o)
                      }),
                    )
                  )
                case 21:
                  return (
                    (d = C.sent),
                    C.abrupt(
                      'return',
                      d.reduce(function (v, h) {
                        return [].concat(J(v), J(h))
                      }, []),
                    )
                  )
                case 23:
                  return (
                    (g = _(
                      _({}, r),
                      {},
                      { name: t, enum: (r.enum || []).join(', ') },
                      o,
                    )),
                    (y = f.map(function (v) {
                      return typeof v == 'string' ? sI(v, g) : v
                    })),
                    C.abrupt('return', y)
                  )
                case 26:
                case 'end':
                  return C.stop()
              }
          },
          e,
          null,
          [[10, 15]],
        )
      }),
    )),
    xp.apply(this, arguments)
  )
}
function lI(e, t, n, r, i, o) {
  var a = e.join('.'),
    s = n
      .map(function (c, f) {
        var d = c.validator,
          g = _(_({}, c), {}, { ruleIndex: f })
        return (
          d &&
            (g.validator = function (y, S, C) {
              var v = !1,
                h = function () {
                  for (
                    var b = arguments.length, x = new Array(b), E = 0;
                    E < b;
                    E++
                  )
                    x[E] = arguments[E]
                  Promise.resolve().then(function () {
                    tn(
                      !v,
                      'Your validator function has already return a promise. `callback` will be ignored.',
                    ),
                      v || C.apply(void 0, x)
                  })
                },
                m = d(y, S, h)
              ;(v =
                m &&
                typeof m.then == 'function' &&
                typeof m.catch == 'function'),
                tn(
                  v,
                  '`callback` is deprecated. Please return a promise instead.',
                ),
                v &&
                  m
                    .then(function () {
                      C()
                    })
                    .catch(function (w) {
                      C(w || ' ')
                    })
            }),
          g
        )
      })
      .sort(function (c, f) {
        var d = c.warningOnly,
          g = c.ruleIndex,
          y = f.warningOnly,
          S = f.ruleIndex
        return !!d == !!y ? g - S : d ? 1 : -1
      }),
    l
  if (i === !0)
    l = new Promise(
      (function () {
        var c = Ys(
          ar().mark(function f(d, g) {
            var y, S, C
            return ar().wrap(function (h) {
              for (;;)
                switch ((h.prev = h.next)) {
                  case 0:
                    y = 0
                  case 1:
                    if (!(y < s.length)) {
                      h.next = 12
                      break
                    }
                    return (S = s[y]), (h.next = 5), bp(a, t, S, r, o)
                  case 5:
                    if (((C = h.sent), !C.length)) {
                      h.next = 9
                      break
                    }
                    return g([{ errors: C, rule: S }]), h.abrupt('return')
                  case 9:
                    ;(y += 1), (h.next = 1)
                    break
                  case 12:
                    d([])
                  case 13:
                  case 'end':
                    return h.stop()
                }
            }, f)
          }),
        )
        return function (f, d) {
          return c.apply(this, arguments)
        }
      })(),
    )
  else {
    var u = s.map(function (c) {
      return bp(a, t, c, r, o).then(function (f) {
        return { errors: f, rule: c }
      })
    })
    l = (i ? cI(u) : uI(u)).then(function (c) {
      return Promise.reject(c)
    })
  }
  return (
    l.catch(function (c) {
      return c
    }),
    l
  )
}
function uI(e) {
  return Ep.apply(this, arguments)
}
function Ep() {
  return (
    (Ep = Ys(
      ar().mark(function e(t) {
        return ar().wrap(function (r) {
          for (;;)
            switch ((r.prev = r.next)) {
              case 0:
                return r.abrupt(
                  'return',
                  Promise.all(t).then(function (i) {
                    var o,
                      a = (o = []).concat.apply(o, J(i))
                    return a
                  }),
                )
              case 1:
              case 'end':
                return r.stop()
            }
        }, e)
      }),
    )),
    Ep.apply(this, arguments)
  )
}
function cI(e) {
  return Pp.apply(this, arguments)
}
function Pp() {
  return (
    (Pp = Ys(
      ar().mark(function e(t) {
        var n
        return ar().wrap(function (i) {
          for (;;)
            switch ((i.prev = i.next)) {
              case 0:
                return (
                  (n = 0),
                  i.abrupt(
                    'return',
                    new Promise(function (o) {
                      t.forEach(function (a) {
                        a.then(function (s) {
                          s.errors.length && o([s]),
                            (n += 1),
                            n === t.length && o([])
                        })
                      })
                    }),
                  )
                )
              case 2:
              case 'end':
                return i.stop()
            }
        }, e)
      }),
    )),
    Pp.apply(this, arguments)
  )
}
function dt(e) {
  return vp(e)
}
function Av(e, t) {
  var n = {}
  return (
    t.forEach(function (r) {
      var i = yr(e, r)
      n = Yn(n, r, i)
    }),
    n
  )
}
function Go(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return (
    e &&
    e.some(function (r) {
      return LC(t, r, n)
    })
  )
}
function LC(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1
  return !e || !t || (!n && e.length !== t.length)
    ? !1
    : t.every(function (r, i) {
        return e[i] === r
      })
}
function fI(e, t) {
  if (e === t) return !0
  if (
    (!e && t) ||
    (e && !t) ||
    !e ||
    !t ||
    ae(e) !== 'object' ||
    ae(t) !== 'object'
  )
    return !1
  var n = Object.keys(e),
    r = Object.keys(t),
    i = new Set([].concat(n, r))
  return J(i).every(function (o) {
    var a = e[o],
      s = t[o]
    return typeof a == 'function' && typeof s == 'function' ? !0 : a === s
  })
}
function dI(e) {
  var t = arguments.length <= 1 ? void 0 : arguments[1]
  return t && t.target && ae(t.target) === 'object' && e in t.target
    ? t.target[e]
    : t
}
function Fv(e, t, n) {
  var r = e.length
  if (t < 0 || t >= r || n < 0 || n >= r) return e
  var i = e[t],
    o = t - n
  return o > 0
    ? [].concat(J(e.slice(0, n)), [i], J(e.slice(n, t)), J(e.slice(t + 1, r)))
    : o < 0
      ? [].concat(
          J(e.slice(0, t)),
          J(e.slice(t + 1, n + 1)),
          [i],
          J(e.slice(n + 1, r)),
        )
      : e
}
var pI = ['name'],
  Mn = []
function Mf(e, t, n, r, i, o) {
  return typeof e == 'function'
    ? e(t, n, 'source' in o ? { source: o.source } : {})
    : r !== i
}
var Gh = (function (e) {
  wi(n, e)
  var t = bi(n)
  function n(r) {
    var i
    if (
      (Vt(this, n),
      (i = t.call(this, r)),
      $(ue(i), 'state', { resetCount: 0 }),
      $(ue(i), 'cancelRegisterFunc', null),
      $(ue(i), 'mounted', !1),
      $(ue(i), 'touched', !1),
      $(ue(i), 'dirty', !1),
      $(ue(i), 'validatePromise', void 0),
      $(ue(i), 'prevValidating', void 0),
      $(ue(i), 'errors', Mn),
      $(ue(i), 'warnings', Mn),
      $(ue(i), 'cancelRegister', function () {
        var l = i.props,
          u = l.preserve,
          c = l.isListField,
          f = l.name
        i.cancelRegisterFunc && i.cancelRegisterFunc(c, u, dt(f)),
          (i.cancelRegisterFunc = null)
      }),
      $(ue(i), 'getNamePath', function () {
        var l = i.props,
          u = l.name,
          c = l.fieldContext,
          f = c.prefixName,
          d = f === void 0 ? [] : f
        return u !== void 0 ? [].concat(J(d), J(u)) : []
      }),
      $(ue(i), 'getRules', function () {
        var l = i.props,
          u = l.rules,
          c = u === void 0 ? [] : u,
          f = l.fieldContext
        return c.map(function (d) {
          return typeof d == 'function' ? d(f) : d
        })
      }),
      $(ue(i), 'refresh', function () {
        i.mounted &&
          i.setState(function (l) {
            var u = l.resetCount
            return { resetCount: u + 1 }
          })
      }),
      $(ue(i), 'metaCache', null),
      $(ue(i), 'triggerMetaEvent', function (l) {
        var u = i.props.onMetaChange
        if (u) {
          var c = _(_({}, i.getMeta()), {}, { destroy: l })
          Rs(i.metaCache, c) || u(c), (i.metaCache = c)
        } else i.metaCache = null
      }),
      $(ue(i), 'onStoreChange', function (l, u, c) {
        var f = i.props,
          d = f.shouldUpdate,
          g = f.dependencies,
          y = g === void 0 ? [] : g,
          S = f.onReset,
          C = c.store,
          v = i.getNamePath(),
          h = i.getValue(l),
          m = i.getValue(C),
          w = u && Go(u, v)
        switch (
          (c.type === 'valueUpdate' &&
            c.source === 'external' &&
            !Rs(h, m) &&
            ((i.touched = !0),
            (i.dirty = !0),
            (i.validatePromise = null),
            (i.errors = Mn),
            (i.warnings = Mn),
            i.triggerMetaEvent()),
          c.type)
        ) {
          case 'reset':
            if (!u || w) {
              ;(i.touched = !1),
                (i.dirty = !1),
                (i.validatePromise = void 0),
                (i.errors = Mn),
                (i.warnings = Mn),
                i.triggerMetaEvent(),
                S == null || S(),
                i.refresh()
              return
            }
            break
          case 'remove': {
            if (d && Mf(d, l, C, h, m, c)) {
              i.reRender()
              return
            }
            break
          }
          case 'setField': {
            var b = c.data
            if (w) {
              'touched' in b && (i.touched = b.touched),
                'validating' in b &&
                  !('originRCField' in b) &&
                  (i.validatePromise = b.validating
                    ? Promise.resolve([])
                    : null),
                'errors' in b && (i.errors = b.errors || Mn),
                'warnings' in b && (i.warnings = b.warnings || Mn),
                (i.dirty = !0),
                i.triggerMetaEvent(),
                i.reRender()
              return
            } else if ('value' in b && Go(u, v, !0)) {
              i.reRender()
              return
            }
            if (d && !v.length && Mf(d, l, C, h, m, c)) {
              i.reRender()
              return
            }
            break
          }
          case 'dependenciesUpdate': {
            var x = y.map(dt)
            if (
              x.some(function (E) {
                return Go(c.relatedFields, E)
              })
            ) {
              i.reRender()
              return
            }
            break
          }
          default:
            if (w || ((!y.length || v.length || d) && Mf(d, l, C, h, m, c))) {
              i.reRender()
              return
            }
            break
        }
        d === !0 && i.reRender()
      }),
      $(ue(i), 'validateRules', function (l) {
        var u = i.getNamePath(),
          c = i.getValue(),
          f = l || {},
          d = f.triggerName,
          g = f.validateOnly,
          y = g === void 0 ? !1 : g,
          S = Promise.resolve().then(
            Ys(
              ar().mark(function C() {
                var v, h, m, w, b, x, E
                return ar().wrap(function (O) {
                  for (;;)
                    switch ((O.prev = O.next)) {
                      case 0:
                        if (i.mounted) {
                          O.next = 2
                          break
                        }
                        return O.abrupt('return', [])
                      case 2:
                        if (
                          ((v = i.props),
                          (h = v.validateFirst),
                          (m = h === void 0 ? !1 : h),
                          (w = v.messageVariables),
                          (b = v.validateDebounce),
                          (x = i.getRules()),
                          d &&
                            (x = x
                              .filter(function (I) {
                                return I
                              })
                              .filter(function (I) {
                                var L = I.validateTrigger
                                if (!L) return !0
                                var z = vp(L)
                                return z.includes(d)
                              })),
                          !(b && d))
                        ) {
                          O.next = 10
                          break
                        }
                        return (
                          (O.next = 8),
                          new Promise(function (I) {
                            setTimeout(I, b)
                          })
                        )
                      case 8:
                        if (i.validatePromise === S) {
                          O.next = 10
                          break
                        }
                        return O.abrupt('return', [])
                      case 10:
                        return (
                          (E = lI(u, c, x, l, m, w)),
                          E.catch(function (I) {
                            return I
                          }).then(function () {
                            var I =
                              arguments.length > 0 && arguments[0] !== void 0
                                ? arguments[0]
                                : Mn
                            if (i.validatePromise === S) {
                              var L
                              i.validatePromise = null
                              var z = [],
                                A = []
                              ;(L = I.forEach) === null ||
                                L === void 0 ||
                                L.call(I, function (F) {
                                  var V = F.rule.warningOnly,
                                    M = F.errors,
                                    T = M === void 0 ? Mn : M
                                  V
                                    ? A.push.apply(A, J(T))
                                    : z.push.apply(z, J(T))
                                }),
                                (i.errors = z),
                                (i.warnings = A),
                                i.triggerMetaEvent(),
                                i.reRender()
                            }
                          }),
                          O.abrupt('return', E)
                        )
                      case 13:
                      case 'end':
                        return O.stop()
                    }
                }, C)
              }),
            ),
          )
        return (
          y ||
            ((i.validatePromise = S),
            (i.dirty = !0),
            (i.errors = Mn),
            (i.warnings = Mn),
            i.triggerMetaEvent(),
            i.reRender()),
          S
        )
      }),
      $(ue(i), 'isFieldValidating', function () {
        return !!i.validatePromise
      }),
      $(ue(i), 'isFieldTouched', function () {
        return i.touched
      }),
      $(ue(i), 'isFieldDirty', function () {
        if (i.dirty || i.props.initialValue !== void 0) return !0
        var l = i.props.fieldContext,
          u = l.getInternalHooks(zi),
          c = u.getInitialValue
        return c(i.getNamePath()) !== void 0
      }),
      $(ue(i), 'getErrors', function () {
        return i.errors
      }),
      $(ue(i), 'getWarnings', function () {
        return i.warnings
      }),
      $(ue(i), 'isListField', function () {
        return i.props.isListField
      }),
      $(ue(i), 'isList', function () {
        return i.props.isList
      }),
      $(ue(i), 'isPreserve', function () {
        return i.props.preserve
      }),
      $(ue(i), 'getMeta', function () {
        i.prevValidating = i.isFieldValidating()
        var l = {
          touched: i.isFieldTouched(),
          validating: i.prevValidating,
          errors: i.errors,
          warnings: i.warnings,
          name: i.getNamePath(),
          validated: i.validatePromise === null,
        }
        return l
      }),
      $(ue(i), 'getOnlyChild', function (l) {
        if (typeof l == 'function') {
          var u = i.getMeta()
          return _(
            _(
              {},
              i.getOnlyChild(l(i.getControlled(), u, i.props.fieldContext)),
            ),
            {},
            { isFunction: !0 },
          )
        }
        var c = Qi(l)
        return c.length !== 1 || !p.isValidElement(c[0])
          ? { child: c, isFunction: !1 }
          : { child: c[0], isFunction: !1 }
      }),
      $(ue(i), 'getValue', function (l) {
        var u = i.props.fieldContext.getFieldsValue,
          c = i.getNamePath()
        return yr(l || u(!0), c)
      }),
      $(ue(i), 'getControlled', function () {
        var l =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          u = i.props,
          c = u.name,
          f = u.trigger,
          d = u.validateTrigger,
          g = u.getValueFromEvent,
          y = u.normalize,
          S = u.valuePropName,
          C = u.getValueProps,
          v = u.fieldContext,
          h = d !== void 0 ? d : v.validateTrigger,
          m = i.getNamePath(),
          w = v.getInternalHooks,
          b = v.getFieldsValue,
          x = w(zi),
          E = x.dispatch,
          k = i.getValue(),
          O =
            C ||
            function (F) {
              return $({}, S, F)
            },
          I = l[f],
          L = c !== void 0 ? O(k) : {},
          z = _(_({}, l), L)
        z[f] = function () {
          ;(i.touched = !0), (i.dirty = !0), i.triggerMetaEvent()
          for (var F, V = arguments.length, M = new Array(V), T = 0; T < V; T++)
            M[T] = arguments[T]
          g ? (F = g.apply(void 0, M)) : (F = dI.apply(void 0, [S].concat(M))),
            y && (F = y(F, k, b(!0))),
            E({ type: 'updateValue', namePath: m, value: F }),
            I && I.apply(void 0, M)
        }
        var A = vp(h || [])
        return (
          A.forEach(function (F) {
            var V = z[F]
            z[F] = function () {
              V && V.apply(void 0, arguments)
              var M = i.props.rules
              M &&
                M.length &&
                E({ type: 'validateField', namePath: m, triggerName: F })
            }
          }),
          z
        )
      }),
      r.fieldContext)
    ) {
      var o = r.fieldContext.getInternalHooks,
        a = o(zi),
        s = a.initEntityValue
      s(ue(i))
    }
    return i
  }
  return (
    Bt(n, [
      {
        key: 'componentDidMount',
        value: function () {
          var i = this.props,
            o = i.shouldUpdate,
            a = i.fieldContext
          if (((this.mounted = !0), a)) {
            var s = a.getInternalHooks,
              l = s(zi),
              u = l.registerField
            this.cancelRegisterFunc = u(this)
          }
          o === !0 && this.reRender()
        },
      },
      {
        key: 'componentWillUnmount',
        value: function () {
          this.cancelRegister(), this.triggerMetaEvent(!0), (this.mounted = !1)
        },
      },
      {
        key: 'reRender',
        value: function () {
          this.mounted && this.forceUpdate()
        },
      },
      {
        key: 'render',
        value: function () {
          var i = this.state.resetCount,
            o = this.props.children,
            a = this.getOnlyChild(o),
            s = a.child,
            l = a.isFunction,
            u
          return (
            l
              ? (u = s)
              : p.isValidElement(s)
                ? (u = p.cloneElement(s, this.getControlled(s.props)))
                : (tn(!s, '`children` of Field is not validate ReactElement.'),
                  (u = s)),
            p.createElement(p.Fragment, { key: i }, u)
          )
        },
      },
    ]),
    n
  )
})(p.Component)
$(Gh, 'contextType', aa)
$(Gh, 'defaultProps', { trigger: 'onChange', valuePropName: 'value' })
function AC(e) {
  var t = e.name,
    n = De(e, pI),
    r = p.useContext(aa),
    i = p.useContext(Du),
    o = t !== void 0 ? dt(t) : void 0,
    a = 'keep'
  return (
    n.isListField || (a = '_'.concat((o || []).join('_'))),
    p.createElement(
      Gh,
      ce({ key: a, name: o, isListField: !!i }, n, { fieldContext: r }),
    )
  )
}
function hI(e) {
  var t = e.name,
    n = e.initialValue,
    r = e.children,
    i = e.rules,
    o = e.validateTrigger,
    a = e.isListField,
    s = p.useContext(aa),
    l = p.useContext(Du),
    u = p.useRef({ keys: [], id: 0 }),
    c = u.current,
    f = p.useMemo(
      function () {
        var S = dt(s.prefixName) || []
        return [].concat(J(S), J(dt(t)))
      },
      [s.prefixName, t],
    ),
    d = p.useMemo(
      function () {
        return _(_({}, s), {}, { prefixName: f })
      },
      [s, f],
    ),
    g = p.useMemo(
      function () {
        return {
          getKey: function (C) {
            var v = f.length,
              h = C[v]
            return [c.keys[h], C.slice(v + 1)]
          },
        }
      },
      [f],
    )
  if (typeof r != 'function')
    return tn(!1, 'Form.List only accepts function as children.'), null
  var y = function (C, v, h) {
    var m = h.source
    return m === 'internal' ? !1 : C !== v
  }
  return p.createElement(
    Du.Provider,
    { value: g },
    p.createElement(
      aa.Provider,
      { value: d },
      p.createElement(
        AC,
        {
          name: [],
          shouldUpdate: y,
          rules: i,
          validateTrigger: o,
          initialValue: n,
          isList: !0,
          isListField: a ?? !!l,
        },
        function (S, C) {
          var v = S.value,
            h = v === void 0 ? [] : v,
            m = S.onChange,
            w = s.getFieldValue,
            b = function () {
              var O = w(f || [])
              return O || []
            },
            x = {
              add: function (O, I) {
                var L = b()
                I >= 0 && I <= L.length
                  ? ((c.keys = [].concat(
                      J(c.keys.slice(0, I)),
                      [c.id],
                      J(c.keys.slice(I)),
                    )),
                    m([].concat(J(L.slice(0, I)), [O], J(L.slice(I)))))
                  : ((c.keys = [].concat(J(c.keys), [c.id])),
                    m([].concat(J(L), [O]))),
                  (c.id += 1)
              },
              remove: function (O) {
                var I = b(),
                  L = new Set(Array.isArray(O) ? O : [O])
                L.size <= 0 ||
                  ((c.keys = c.keys.filter(function (z, A) {
                    return !L.has(A)
                  })),
                  m(
                    I.filter(function (z, A) {
                      return !L.has(A)
                    }),
                  ))
              },
              move: function (O, I) {
                if (O !== I) {
                  var L = b()
                  O < 0 ||
                    O >= L.length ||
                    I < 0 ||
                    I >= L.length ||
                    ((c.keys = Fv(c.keys, O, I)), m(Fv(L, O, I)))
                }
              },
            },
            E = h || []
          return (
            Array.isArray(E) || (E = []),
            r(
              E.map(function (k, O) {
                var I = c.keys[O]
                return (
                  I === void 0 &&
                    ((c.keys[O] = c.id), (I = c.keys[O]), (c.id += 1)),
                  { name: O, key: I, isListField: !0 }
                )
              }),
              x,
              C,
            )
          )
        },
      ),
    ),
  )
}
function mI(e) {
  var t = !1,
    n = e.length,
    r = []
  return e.length
    ? new Promise(function (i, o) {
        e.forEach(function (a, s) {
          a.catch(function (l) {
            return (t = !0), l
          }).then(function (l) {
            ;(n -= 1), (r[s] = l), !(n > 0) && (t && o(r), i(r))
          })
        })
      })
    : Promise.resolve([])
}
var FC = '__@field_split__'
function Nf(e) {
  return e
    .map(function (t) {
      return ''.concat(ae(t), ':').concat(t)
    })
    .join(FC)
}
var yo = (function () {
    function e() {
      Vt(this, e), $(this, 'kvs', new Map())
    }
    return (
      Bt(e, [
        {
          key: 'set',
          value: function (n, r) {
            this.kvs.set(Nf(n), r)
          },
        },
        {
          key: 'get',
          value: function (n) {
            return this.kvs.get(Nf(n))
          },
        },
        {
          key: 'update',
          value: function (n, r) {
            var i = this.get(n),
              o = r(i)
            o ? this.set(n, o) : this.delete(n)
          },
        },
        {
          key: 'delete',
          value: function (n) {
            this.kvs.delete(Nf(n))
          },
        },
        {
          key: 'map',
          value: function (n) {
            return J(this.kvs.entries()).map(function (r) {
              var i = B(r, 2),
                o = i[0],
                a = i[1],
                s = o.split(FC)
              return n({
                key: s.map(function (l) {
                  var u = l.match(/^([^:]*):(.*)$/),
                    c = B(u, 3),
                    f = c[1],
                    d = c[2]
                  return f === 'number' ? Number(d) : d
                }),
                value: a,
              })
            })
          },
        },
        {
          key: 'toJSON',
          value: function () {
            var n = {}
            return (
              this.map(function (r) {
                var i = r.key,
                  o = r.value
                return (n[i.join('.')] = o), null
              }),
              n
            )
          },
        },
      ]),
      e
    )
  })(),
  gI = ['name'],
  vI = Bt(function e(t) {
    var n = this
    Vt(this, e),
      $(this, 'formHooked', !1),
      $(this, 'forceRootUpdate', void 0),
      $(this, 'subscribable', !0),
      $(this, 'store', {}),
      $(this, 'fieldEntities', []),
      $(this, 'initialValues', {}),
      $(this, 'callbacks', {}),
      $(this, 'validateMessages', null),
      $(this, 'preserve', null),
      $(this, 'lastValidatePromise', null),
      $(this, 'getForm', function () {
        return {
          getFieldValue: n.getFieldValue,
          getFieldsValue: n.getFieldsValue,
          getFieldError: n.getFieldError,
          getFieldWarning: n.getFieldWarning,
          getFieldsError: n.getFieldsError,
          isFieldsTouched: n.isFieldsTouched,
          isFieldTouched: n.isFieldTouched,
          isFieldValidating: n.isFieldValidating,
          isFieldsValidating: n.isFieldsValidating,
          resetFields: n.resetFields,
          setFields: n.setFields,
          setFieldValue: n.setFieldValue,
          setFieldsValue: n.setFieldsValue,
          validateFields: n.validateFields,
          submit: n.submit,
          _init: !0,
          getInternalHooks: n.getInternalHooks,
        }
      }),
      $(this, 'getInternalHooks', function (r) {
        return r === zi
          ? ((n.formHooked = !0),
            {
              dispatch: n.dispatch,
              initEntityValue: n.initEntityValue,
              registerField: n.registerField,
              useSubscribe: n.useSubscribe,
              setInitialValues: n.setInitialValues,
              destroyForm: n.destroyForm,
              setCallbacks: n.setCallbacks,
              setValidateMessages: n.setValidateMessages,
              getFields: n.getFields,
              setPreserve: n.setPreserve,
              getInitialValue: n.getInitialValue,
              registerWatch: n.registerWatch,
            })
          : (tn(
              !1,
              '`getInternalHooks` is internal usage. Should not call directly.',
            ),
            null)
      }),
      $(this, 'useSubscribe', function (r) {
        n.subscribable = r
      }),
      $(this, 'prevWithoutPreserves', null),
      $(this, 'setInitialValues', function (r, i) {
        if (((n.initialValues = r || {}), i)) {
          var o,
            a = jo(r, n.store)
          ;(o = n.prevWithoutPreserves) === null ||
            o === void 0 ||
            o.map(function (s) {
              var l = s.key
              a = Yn(a, l, yr(r, l))
            }),
            (n.prevWithoutPreserves = null),
            n.updateStore(a)
        }
      }),
      $(this, 'destroyForm', function (r) {
        if (r) n.updateStore({})
        else {
          var i = new yo()
          n.getFieldEntities(!0).forEach(function (o) {
            n.isMergedPreserve(o.isPreserve()) || i.set(o.getNamePath(), !0)
          }),
            (n.prevWithoutPreserves = i)
        }
      }),
      $(this, 'getInitialValue', function (r) {
        var i = yr(n.initialValues, r)
        return r.length ? jo(i) : i
      }),
      $(this, 'setCallbacks', function (r) {
        n.callbacks = r
      }),
      $(this, 'setValidateMessages', function (r) {
        n.validateMessages = r
      }),
      $(this, 'setPreserve', function (r) {
        n.preserve = r
      }),
      $(this, 'watchList', []),
      $(this, 'registerWatch', function (r) {
        return (
          n.watchList.push(r),
          function () {
            n.watchList = n.watchList.filter(function (i) {
              return i !== r
            })
          }
        )
      }),
      $(this, 'notifyWatch', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []
        if (n.watchList.length) {
          var i = n.getFieldsValue(),
            o = n.getFieldsValue(!0)
          n.watchList.forEach(function (a) {
            a(i, o, r)
          })
        }
      }),
      $(this, 'timeoutId', null),
      $(this, 'warningUnhooked', function () {}),
      $(this, 'updateStore', function (r) {
        n.store = r
      }),
      $(this, 'getFieldEntities', function () {
        var r =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1
        return r
          ? n.fieldEntities.filter(function (i) {
              return i.getNamePath().length
            })
          : n.fieldEntities
      }),
      $(this, 'getFieldsMap', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1,
          i = new yo()
        return (
          n.getFieldEntities(r).forEach(function (o) {
            var a = o.getNamePath()
            i.set(a, o)
          }),
          i
        )
      }),
      $(this, 'getFieldEntitiesForNamePathList', function (r) {
        if (!r) return n.getFieldEntities(!0)
        var i = n.getFieldsMap(!0)
        return r.map(function (o) {
          var a = dt(o)
          return i.get(a) || { INVALIDATE_NAME_PATH: dt(o) }
        })
      }),
      $(this, 'getFieldsValue', function (r, i) {
        n.warningUnhooked()
        var o, a, s
        if (
          (r === !0 || Array.isArray(r)
            ? ((o = r), (a = i))
            : r && ae(r) === 'object' && ((s = r.strict), (a = r.filter)),
          o === !0 && !a)
        )
          return n.store
        var l = n.getFieldEntitiesForNamePathList(Array.isArray(o) ? o : null),
          u = []
        return (
          l.forEach(function (c) {
            var f,
              d,
              g =
                'INVALIDATE_NAME_PATH' in c
                  ? c.INVALIDATE_NAME_PATH
                  : c.getNamePath()
            if (s) {
              var y, S
              if ((y = (S = c).isList) !== null && y !== void 0 && y.call(S))
                return
            } else if (
              !o &&
              (f = (d = c).isListField) !== null &&
              f !== void 0 &&
              f.call(d)
            )
              return
            if (!a) u.push(g)
            else {
              var C = 'getMeta' in c ? c.getMeta() : null
              a(C) && u.push(g)
            }
          }),
          Av(n.store, u.map(dt))
        )
      }),
      $(this, 'getFieldValue', function (r) {
        n.warningUnhooked()
        var i = dt(r)
        return yr(n.store, i)
      }),
      $(this, 'getFieldsError', function (r) {
        n.warningUnhooked()
        var i = n.getFieldEntitiesForNamePathList(r)
        return i.map(function (o, a) {
          return o && !('INVALIDATE_NAME_PATH' in o)
            ? {
                name: o.getNamePath(),
                errors: o.getErrors(),
                warnings: o.getWarnings(),
              }
            : { name: dt(r[a]), errors: [], warnings: [] }
        })
      }),
      $(this, 'getFieldError', function (r) {
        n.warningUnhooked()
        var i = dt(r),
          o = n.getFieldsError([i])[0]
        return o.errors
      }),
      $(this, 'getFieldWarning', function (r) {
        n.warningUnhooked()
        var i = dt(r),
          o = n.getFieldsError([i])[0]
        return o.warnings
      }),
      $(this, 'isFieldsTouched', function () {
        n.warningUnhooked()
        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
          i[o] = arguments[o]
        var a = i[0],
          s = i[1],
          l,
          u = !1
        i.length === 0
          ? (l = null)
          : i.length === 1
            ? Array.isArray(a)
              ? ((l = a.map(dt)), (u = !1))
              : ((l = null), (u = a))
            : ((l = a.map(dt)), (u = s))
        var c = n.getFieldEntities(!0),
          f = function (C) {
            return C.isFieldTouched()
          }
        if (!l)
          return u
            ? c.every(function (S) {
                return f(S) || S.isList()
              })
            : c.some(f)
        var d = new yo()
        l.forEach(function (S) {
          d.set(S, [])
        }),
          c.forEach(function (S) {
            var C = S.getNamePath()
            l.forEach(function (v) {
              v.every(function (h, m) {
                return C[m] === h
              }) &&
                d.update(v, function (h) {
                  return [].concat(J(h), [S])
                })
            })
          })
        var g = function (C) {
            return C.some(f)
          },
          y = d.map(function (S) {
            var C = S.value
            return C
          })
        return u ? y.every(g) : y.some(g)
      }),
      $(this, 'isFieldTouched', function (r) {
        return n.warningUnhooked(), n.isFieldsTouched([r])
      }),
      $(this, 'isFieldsValidating', function (r) {
        n.warningUnhooked()
        var i = n.getFieldEntities()
        if (!r)
          return i.some(function (a) {
            return a.isFieldValidating()
          })
        var o = r.map(dt)
        return i.some(function (a) {
          var s = a.getNamePath()
          return Go(o, s) && a.isFieldValidating()
        })
      }),
      $(this, 'isFieldValidating', function (r) {
        return n.warningUnhooked(), n.isFieldsValidating([r])
      }),
      $(this, 'resetWithFieldInitialValue', function () {
        var r =
            arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
          i = new yo(),
          o = n.getFieldEntities(!0)
        o.forEach(function (l) {
          var u = l.props.initialValue,
            c = l.getNamePath()
          if (u !== void 0) {
            var f = i.get(c) || new Set()
            f.add({ entity: l, value: u }), i.set(c, f)
          }
        })
        var a = function (u) {
            u.forEach(function (c) {
              var f = c.props.initialValue
              if (f !== void 0) {
                var d = c.getNamePath(),
                  g = n.getInitialValue(d)
                if (g !== void 0)
                  tn(
                    !1,
                    "Form already set 'initialValues' with path '".concat(
                      d.join('.'),
                      "'. Field can not overwrite it.",
                    ),
                  )
                else {
                  var y = i.get(d)
                  if (y && y.size > 1)
                    tn(
                      !1,
                      "Multiple Field with path '".concat(
                        d.join('.'),
                        "' set 'initialValue'. Can not decide which one to pick.",
                      ),
                    )
                  else if (y) {
                    var S = n.getFieldValue(d),
                      C = c.isListField()
                    !C &&
                      (!r.skipExist || S === void 0) &&
                      n.updateStore(Yn(n.store, d, J(y)[0].value))
                  }
                }
              }
            })
          },
          s
        r.entities
          ? (s = r.entities)
          : r.namePathList
            ? ((s = []),
              r.namePathList.forEach(function (l) {
                var u = i.get(l)
                if (u) {
                  var c
                  ;(c = s).push.apply(
                    c,
                    J(
                      J(u).map(function (f) {
                        return f.entity
                      }),
                    ),
                  )
                }
              }))
            : (s = o),
          a(s)
      }),
      $(this, 'resetFields', function (r) {
        n.warningUnhooked()
        var i = n.store
        if (!r) {
          n.updateStore(jo(n.initialValues)),
            n.resetWithFieldInitialValue(),
            n.notifyObservers(i, null, { type: 'reset' }),
            n.notifyWatch()
          return
        }
        var o = r.map(dt)
        o.forEach(function (a) {
          var s = n.getInitialValue(a)
          n.updateStore(Yn(n.store, a, s))
        }),
          n.resetWithFieldInitialValue({ namePathList: o }),
          n.notifyObservers(i, o, { type: 'reset' }),
          n.notifyWatch(o)
      }),
      $(this, 'setFields', function (r) {
        n.warningUnhooked()
        var i = n.store,
          o = []
        r.forEach(function (a) {
          var s = a.name,
            l = De(a, gI),
            u = dt(s)
          o.push(u),
            'value' in l && n.updateStore(Yn(n.store, u, l.value)),
            n.notifyObservers(i, [u], { type: 'setField', data: a })
        }),
          n.notifyWatch(o)
      }),
      $(this, 'getFields', function () {
        var r = n.getFieldEntities(!0),
          i = r.map(function (o) {
            var a = o.getNamePath(),
              s = o.getMeta(),
              l = _(_({}, s), {}, { name: a, value: n.getFieldValue(a) })
            return Object.defineProperty(l, 'originRCField', { value: !0 }), l
          })
        return i
      }),
      $(this, 'initEntityValue', function (r) {
        var i = r.props.initialValue
        if (i !== void 0) {
          var o = r.getNamePath(),
            a = yr(n.store, o)
          a === void 0 && n.updateStore(Yn(n.store, o, i))
        }
      }),
      $(this, 'isMergedPreserve', function (r) {
        var i = r !== void 0 ? r : n.preserve
        return i ?? !0
      }),
      $(this, 'registerField', function (r) {
        n.fieldEntities.push(r)
        var i = r.getNamePath()
        if ((n.notifyWatch([i]), r.props.initialValue !== void 0)) {
          var o = n.store
          n.resetWithFieldInitialValue({ entities: [r], skipExist: !0 }),
            n.notifyObservers(o, [r.getNamePath()], {
              type: 'valueUpdate',
              source: 'internal',
            })
        }
        return function (a, s) {
          var l =
            arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : []
          if (
            ((n.fieldEntities = n.fieldEntities.filter(function (f) {
              return f !== r
            })),
            !n.isMergedPreserve(s) && (!a || l.length > 1))
          ) {
            var u = a ? void 0 : n.getInitialValue(i)
            if (
              i.length &&
              n.getFieldValue(i) !== u &&
              n.fieldEntities.every(function (f) {
                return !LC(f.getNamePath(), i)
              })
            ) {
              var c = n.store
              n.updateStore(Yn(c, i, u, !0)),
                n.notifyObservers(c, [i], { type: 'remove' }),
                n.triggerDependenciesUpdate(c, i)
            }
          }
          n.notifyWatch([i])
        }
      }),
      $(this, 'dispatch', function (r) {
        switch (r.type) {
          case 'updateValue': {
            var i = r.namePath,
              o = r.value
            n.updateValue(i, o)
            break
          }
          case 'validateField': {
            var a = r.namePath,
              s = r.triggerName
            n.validateFields([a], { triggerName: s })
            break
          }
        }
      }),
      $(this, 'notifyObservers', function (r, i, o) {
        if (n.subscribable) {
          var a = _(_({}, o), {}, { store: n.getFieldsValue(!0) })
          n.getFieldEntities().forEach(function (s) {
            var l = s.onStoreChange
            l(r, i, a)
          })
        } else n.forceRootUpdate()
      }),
      $(this, 'triggerDependenciesUpdate', function (r, i) {
        var o = n.getDependencyChildrenFields(i)
        return (
          o.length && n.validateFields(o),
          n.notifyObservers(r, o, {
            type: 'dependenciesUpdate',
            relatedFields: [i].concat(J(o)),
          }),
          o
        )
      }),
      $(this, 'updateValue', function (r, i) {
        var o = dt(r),
          a = n.store
        n.updateStore(Yn(n.store, o, i)),
          n.notifyObservers(a, [o], {
            type: 'valueUpdate',
            source: 'internal',
          }),
          n.notifyWatch([o])
        var s = n.triggerDependenciesUpdate(a, o),
          l = n.callbacks.onValuesChange
        if (l) {
          var u = Av(n.store, [o])
          l(u, n.getFieldsValue())
        }
        n.triggerOnFieldsChange([o].concat(J(s)))
      }),
      $(this, 'setFieldsValue', function (r) {
        n.warningUnhooked()
        var i = n.store
        if (r) {
          var o = jo(n.store, r)
          n.updateStore(o)
        }
        n.notifyObservers(i, null, { type: 'valueUpdate', source: 'external' }),
          n.notifyWatch()
      }),
      $(this, 'setFieldValue', function (r, i) {
        n.setFields([{ name: r, value: i }])
      }),
      $(this, 'getDependencyChildrenFields', function (r) {
        var i = new Set(),
          o = [],
          a = new yo()
        n.getFieldEntities().forEach(function (l) {
          var u = l.props.dependencies
          ;(u || []).forEach(function (c) {
            var f = dt(c)
            a.update(f, function () {
              var d =
                arguments.length > 0 && arguments[0] !== void 0
                  ? arguments[0]
                  : new Set()
              return d.add(l), d
            })
          })
        })
        var s = function l(u) {
          var c = a.get(u) || new Set()
          c.forEach(function (f) {
            if (!i.has(f)) {
              i.add(f)
              var d = f.getNamePath()
              f.isFieldDirty() && d.length && (o.push(d), l(d))
            }
          })
        }
        return s(r), o
      }),
      $(this, 'triggerOnFieldsChange', function (r, i) {
        var o = n.callbacks.onFieldsChange
        if (o) {
          var a = n.getFields()
          if (i) {
            var s = new yo()
            i.forEach(function (u) {
              var c = u.name,
                f = u.errors
              s.set(c, f)
            }),
              a.forEach(function (u) {
                u.errors = s.get(u.name) || u.errors
              })
          }
          var l = a.filter(function (u) {
            var c = u.name
            return Go(r, c)
          })
          l.length && o(l, a)
        }
      }),
      $(this, 'validateFields', function (r, i) {
        n.warningUnhooked()
        var o, a
        Array.isArray(r) || typeof r == 'string' || typeof i == 'string'
          ? ((o = r), (a = i))
          : (a = r)
        var s = !!o,
          l = s ? o.map(dt) : [],
          u = [],
          c = String(Date.now()),
          f = new Set(),
          d = a || {},
          g = d.recursive,
          y = d.dirty
        n.getFieldEntities(!0).forEach(function (h) {
          if (
            (s || l.push(h.getNamePath()),
            !(!h.props.rules || !h.props.rules.length) &&
              !(y && !h.isFieldDirty()))
          ) {
            var m = h.getNamePath()
            if ((f.add(m.join(c)), !s || Go(l, m, g))) {
              var w = h.validateRules(
                _({ validateMessages: _(_({}, _C), n.validateMessages) }, a),
              )
              u.push(
                w
                  .then(function () {
                    return { name: m, errors: [], warnings: [] }
                  })
                  .catch(function (b) {
                    var x,
                      E = [],
                      k = []
                    return (
                      (x = b.forEach) === null ||
                        x === void 0 ||
                        x.call(b, function (O) {
                          var I = O.rule.warningOnly,
                            L = O.errors
                          I ? k.push.apply(k, J(L)) : E.push.apply(E, J(L))
                        }),
                      E.length
                        ? Promise.reject({ name: m, errors: E, warnings: k })
                        : { name: m, errors: E, warnings: k }
                    )
                  }),
              )
            }
          }
        })
        var S = mI(u)
        ;(n.lastValidatePromise = S),
          S.catch(function (h) {
            return h
          }).then(function (h) {
            var m = h.map(function (w) {
              var b = w.name
              return b
            })
            n.notifyObservers(n.store, m, { type: 'validateFinish' }),
              n.triggerOnFieldsChange(m, h)
          })
        var C = S.then(function () {
          return n.lastValidatePromise === S
            ? Promise.resolve(n.getFieldsValue(l))
            : Promise.reject([])
        }).catch(function (h) {
          var m = h.filter(function (w) {
            return w && w.errors.length
          })
          return Promise.reject({
            values: n.getFieldsValue(l),
            errorFields: m,
            outOfDate: n.lastValidatePromise !== S,
          })
        })
        C.catch(function (h) {
          return h
        })
        var v = l.filter(function (h) {
          return f.has(h.join(c))
        })
        return n.triggerOnFieldsChange(v), C
      }),
      $(this, 'submit', function () {
        n.warningUnhooked(),
          n
            .validateFields()
            .then(function (r) {
              var i = n.callbacks.onFinish
              if (i)
                try {
                  i(r)
                } catch (o) {
                  console.error(o)
                }
            })
            .catch(function (r) {
              var i = n.callbacks.onFinishFailed
              i && i(r)
            })
      }),
      (this.forceRootUpdate = t)
  })
function jC(e) {
  var t = p.useRef(),
    n = p.useState({}),
    r = B(n, 2),
    i = r[1]
  if (!t.current)
    if (e) t.current = e
    else {
      var o = function () {
          i({})
        },
        a = new vI(o)
      t.current = a.getForm()
    }
  return [t.current]
}
var kp = p.createContext({
    triggerFormChange: function () {},
    triggerFormFinish: function () {},
    registerForm: function () {},
    unregisterForm: function () {},
  }),
  yI = function (t) {
    var n = t.validateMessages,
      r = t.onFormChange,
      i = t.onFormFinish,
      o = t.children,
      a = p.useContext(kp),
      s = p.useRef({})
    return p.createElement(
      kp.Provider,
      {
        value: _(
          _({}, a),
          {},
          {
            validateMessages: _(_({}, a.validateMessages), n),
            triggerFormChange: function (u, c) {
              r && r(u, { changedFields: c, forms: s.current }),
                a.triggerFormChange(u, c)
            },
            triggerFormFinish: function (u, c) {
              i && i(u, { values: c, forms: s.current }),
                a.triggerFormFinish(u, c)
            },
            registerForm: function (u, c) {
              u && (s.current = _(_({}, s.current), {}, $({}, u, c))),
                a.registerForm(u, c)
            },
            unregisterForm: function (u) {
              var c = _({}, s.current)
              delete c[u], (s.current = c), a.unregisterForm(u)
            },
          },
        ),
      },
      o,
    )
  },
  SI = [
    'name',
    'initialValues',
    'fields',
    'form',
    'preserve',
    'children',
    'component',
    'validateMessages',
    'validateTrigger',
    'onValuesChange',
    'onFieldsChange',
    'onFinish',
    'onFinishFailed',
    'clearOnDestroy',
  ],
  CI = function (t, n) {
    var r = t.name,
      i = t.initialValues,
      o = t.fields,
      a = t.form,
      s = t.preserve,
      l = t.children,
      u = t.component,
      c = u === void 0 ? 'form' : u,
      f = t.validateMessages,
      d = t.validateTrigger,
      g = d === void 0 ? 'onChange' : d,
      y = t.onValuesChange,
      S = t.onFieldsChange,
      C = t.onFinish,
      v = t.onFinishFailed,
      h = t.clearOnDestroy,
      m = De(t, SI),
      w = p.useRef(null),
      b = p.useContext(kp),
      x = jC(a),
      E = B(x, 1),
      k = E[0],
      O = k.getInternalHooks(zi),
      I = O.useSubscribe,
      L = O.setInitialValues,
      z = O.setCallbacks,
      A = O.setValidateMessages,
      F = O.setPreserve,
      V = O.destroyForm
    p.useImperativeHandle(n, function () {
      return _(_({}, k), {}, { nativeElement: w.current })
    }),
      p.useEffect(
        function () {
          return (
            b.registerForm(r, k),
            function () {
              b.unregisterForm(r)
            }
          )
        },
        [b, k, r],
      ),
      A(_(_({}, b.validateMessages), f)),
      z({
        onValuesChange: y,
        onFieldsChange: function (D) {
          if ((b.triggerFormChange(r, D), S)) {
            for (
              var G = arguments.length,
                re = new Array(G > 1 ? G - 1 : 0),
                ne = 1;
              ne < G;
              ne++
            )
              re[ne - 1] = arguments[ne]
            S.apply(void 0, [D].concat(re))
          }
        },
        onFinish: function (D) {
          b.triggerFormFinish(r, D), C && C(D)
        },
        onFinishFailed: v,
      }),
      F(s)
    var M = p.useRef(null)
    L(i, !M.current),
      M.current || (M.current = !0),
      p.useEffect(function () {
        return function () {
          return V(h)
        }
      }, [])
    var T,
      P = typeof l == 'function'
    if (P) {
      var R = k.getFieldsValue(!0)
      T = l(R, k)
    } else T = l
    I(!P)
    var N = p.useRef()
    p.useEffect(
      function () {
        fI(N.current || [], o || []) || k.setFields(o || []), (N.current = o)
      },
      [o, k],
    )
    var j = p.useMemo(
        function () {
          return _(_({}, k), {}, { validateTrigger: g })
        },
        [k, g],
      ),
      H = p.createElement(
        Du.Provider,
        { value: null },
        p.createElement(aa.Provider, { value: j }, T),
      )
    return c === !1
      ? H
      : p.createElement(
          c,
          ce({}, m, {
            ref: w,
            onSubmit: function (D) {
              D.preventDefault(), D.stopPropagation(), k.submit()
            },
            onReset: function (D) {
              var G
              D.preventDefault(),
                k.resetFields(),
                (G = m.onReset) === null || G === void 0 || G.call(m, D)
            },
          }),
          H,
        )
  }
function jv(e) {
  try {
    return JSON.stringify(e)
  } catch {
    return Math.random()
  }
}
function wI() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  var r = t[0],
    i = t[1],
    o = i === void 0 ? {} : i,
    a = RR(o) ? { form: o } : o,
    s = a.form,
    l = p.useState(),
    u = B(l, 2),
    c = u[0],
    f = u[1],
    d = p.useMemo(
      function () {
        return jv(c)
      },
      [c],
    ),
    g = p.useRef(d)
  g.current = d
  var y = p.useContext(aa),
    S = s || y,
    C = S && S._init,
    v = dt(r),
    h = p.useRef(v)
  return (
    (h.current = v),
    p.useEffect(
      function () {
        if (C) {
          var m = S.getFieldsValue,
            w = S.getInternalHooks,
            b = w(zi),
            x = b.registerWatch,
            E = function (L, z) {
              var A = a.preserve ? z : L
              return typeof r == 'function' ? r(A) : yr(A, h.current)
            },
            k = x(function (I, L) {
              var z = E(I, L),
                A = jv(z)
              g.current !== A && ((g.current = A), f(z))
            }),
            O = E(m(), m(!0))
          return c !== O && f(O), k
        }
      },
      [C],
    ),
    c
  )
}
var bI = p.forwardRef(CI),
  Js = bI
Js.FormProvider = yI
Js.Field = AC
Js.List = hI
Js.useForm = jC
Js.useWatch = wI
const zv = p.createContext({}),
  xI = (e) => {
    let { children: t, status: n, override: r } = e
    const i = p.useContext(zv),
      o = p.useMemo(() => {
        const a = Object.assign({}, i)
        return (
          r && delete a.isFormItemInput,
          n && (delete a.status, delete a.hasFeedback, delete a.feedbackIcon),
          a
        )
      }, [n, r, i])
    return p.createElement(zv.Provider, { value: o }, t)
  },
  x5 = p.createContext(void 0),
  EI = (e) => {
    const { space: t, form: n, children: r } = e
    if (r == null) return null
    let i = r
    return (
      n && (i = ze.createElement(xI, { override: !0, status: !0 }, i)),
      t && (i = ze.createElement(qO, null, i)),
      i
    )
  },
  PI = function () {
    if (typeof navigator > 'u' || typeof window > 'u') return !1
    var e = navigator.userAgent || navigator.vendor || window.opera
    return (
      /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(
        e,
      ) ||
      /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(
        e == null ? void 0 : e.substr(0, 4),
      )
    )
  }
var kI = [
    'prefixCls',
    'invalidate',
    'item',
    'renderItem',
    'responsive',
    'responsiveDisabled',
    'registerSize',
    'itemKey',
    'className',
    'style',
    'children',
    'display',
    'order',
    'component',
  ],
  So = void 0
function TI(e, t) {
  var n = e.prefixCls,
    r = e.invalidate,
    i = e.item,
    o = e.renderItem,
    a = e.responsive,
    s = e.responsiveDisabled,
    l = e.registerSize,
    u = e.itemKey,
    c = e.className,
    f = e.style,
    d = e.children,
    g = e.display,
    y = e.order,
    S = e.component,
    C = S === void 0 ? 'div' : S,
    v = De(e, kI),
    h = a && !g
  function m(k) {
    l(u, k)
  }
  p.useEffect(function () {
    return function () {
      m(null)
    }
  }, [])
  var w = o && i !== So ? o(i) : d,
    b
  r ||
    (b = {
      opacity: h ? 0 : 1,
      height: h ? 0 : So,
      overflowY: h ? 'hidden' : So,
      order: a ? y : So,
      pointerEvents: h ? 'none' : So,
      position: h ? 'absolute' : So,
    })
  var x = {}
  h && (x['aria-hidden'] = !0)
  var E = p.createElement(
    C,
    ce({ className: oe(!r && n, c), style: _(_({}, b), f) }, x, v, { ref: t }),
    w,
  )
  return (
    a &&
      (E = p.createElement(
        qs,
        {
          onResize: function (O) {
            var I = O.offsetWidth
            m(I)
          },
          disabled: s,
        },
        E,
      )),
    E
  )
}
var ns = p.forwardRef(TI)
ns.displayName = 'Item'
function OI(e) {
  if (typeof MessageChannel > 'u') Mr(e)
  else {
    var t = new MessageChannel()
    ;(t.port1.onmessage = function () {
      return e()
    }),
      t.port2.postMessage(void 0)
  }
}
function RI() {
  var e = p.useRef(null),
    t = function (r) {
      e.current ||
        ((e.current = []),
        OI(function () {
          Ws.unstable_batchedUpdates(function () {
            e.current.forEach(function (i) {
              i()
            }),
              (e.current = null)
          })
        })),
        e.current.push(r)
    }
  return t
}
function $a(e, t) {
  var n = p.useState(t),
    r = B(n, 2),
    i = r[0],
    o = r[1],
    a = sn(function (s) {
      e(function () {
        o(s)
      })
    })
  return [i, a]
}
var Hu = ze.createContext(null),
  II = ['component'],
  $I = ['className'],
  MI = ['className'],
  NI = function (t, n) {
    var r = p.useContext(Hu)
    if (!r) {
      var i = t.component,
        o = i === void 0 ? 'div' : i,
        a = De(t, II)
      return p.createElement(o, ce({}, a, { ref: n }))
    }
    var s = r.className,
      l = De(r, $I),
      u = t.className,
      c = De(t, MI)
    return p.createElement(
      Hu.Provider,
      { value: null },
      p.createElement(ns, ce({ ref: n, className: oe(s, u) }, l, c)),
    )
  },
  zC = p.forwardRef(NI)
zC.displayName = 'RawItem'
var _I = [
    'prefixCls',
    'data',
    'renderItem',
    'renderRawItem',
    'itemKey',
    'itemWidth',
    'ssr',
    'style',
    'className',
    'maxCount',
    'renderRest',
    'renderRawRest',
    'suffix',
    'component',
    'itemComponent',
    'onVisibleChange',
  ],
  DC = 'responsive',
  HC = 'invalidate'
function LI(e) {
  return '+ '.concat(e.length, ' ...')
}
function AI(e, t) {
  var n = e.prefixCls,
    r = n === void 0 ? 'rc-overflow' : n,
    i = e.data,
    o = i === void 0 ? [] : i,
    a = e.renderItem,
    s = e.renderRawItem,
    l = e.itemKey,
    u = e.itemWidth,
    c = u === void 0 ? 10 : u,
    f = e.ssr,
    d = e.style,
    g = e.className,
    y = e.maxCount,
    S = e.renderRest,
    C = e.renderRawRest,
    v = e.suffix,
    h = e.component,
    m = h === void 0 ? 'div' : h,
    w = e.itemComponent,
    b = e.onVisibleChange,
    x = De(e, _I),
    E = f === 'full',
    k = RI(),
    O = $a(k, null),
    I = B(O, 2),
    L = I[0],
    z = I[1],
    A = L || 0,
    F = $a(k, new Map()),
    V = B(F, 2),
    M = V[0],
    T = V[1],
    P = $a(k, 0),
    R = B(P, 2),
    N = R[0],
    j = R[1],
    H = $a(k, 0),
    K = B(H, 2),
    D = K[0],
    G = K[1],
    re = $a(k, 0),
    ne = B(re, 2),
    he = ne[0],
    pe = ne[1],
    we = p.useState(null),
    ke = B(we, 2),
    be = ke[0],
    _e = ke[1],
    Se = p.useState(null),
    Ke = B(Se, 2),
    Te = Ke[0],
    Ze = Ke[1],
    me = p.useMemo(
      function () {
        return Te === null && E ? Number.MAX_SAFE_INTEGER : Te || 0
      },
      [Te, L],
    ),
    lt = p.useState(!1),
    ge = B(lt, 2),
    le = ge[0],
    He = ge[1],
    Y = ''.concat(r, '-item'),
    Fe = Math.max(N, D),
    qe = y === DC,
    xe = o.length && qe,
    bt = y === HC,
    Tt = xe || (typeof y == 'number' && o.length > y),
    rt = p.useMemo(
      function () {
        var te = o
        return (
          xe
            ? L === null && E
              ? (te = o)
              : (te = o.slice(0, Math.min(o.length, A / c)))
            : typeof y == 'number' && (te = o.slice(0, y)),
          te
        )
      },
      [o, c, L, y, xe],
    ),
    Ot = p.useMemo(
      function () {
        return xe ? o.slice(me + 1) : o.slice(rt.length)
      },
      [o, rt, xe, me],
    ),
    vt = p.useCallback(
      function (te, Z) {
        var W
        return typeof l == 'function'
          ? l(te)
          : (W = l && (te == null ? void 0 : te[l])) !== null && W !== void 0
            ? W
            : Z
      },
      [l],
    ),
    ut = p.useCallback(
      a ||
        function (te) {
          return te
        },
      [a],
    )
  function Ve(te, Z, W) {
    ;(Te === te && (Z === void 0 || Z === be)) ||
      (Ze(te),
      W || (He(te < o.length - 1), b == null || b(te)),
      Z !== void 0 && _e(Z))
  }
  function ve(te, Z) {
    z(Z.clientWidth)
  }
  function ct(te, Z) {
    T(function (W) {
      var Le = new Map(W)
      return Z === null ? Le.delete(te) : Le.set(te, Z), Le
    })
  }
  function Zt(te, Z) {
    G(Z), j(D)
  }
  function xt(te, Z) {
    pe(Z)
  }
  function Rt(te) {
    return M.get(vt(rt[te], te))
  }
  Ft(
    function () {
      if (A && typeof Fe == 'number' && rt) {
        var te = he,
          Z = rt.length,
          W = Z - 1
        if (!Z) {
          Ve(0, null)
          return
        }
        for (var Le = 0; Le < Z; Le += 1) {
          var $t = Rt(Le)
          if ((E && ($t = $t || 0), $t === void 0)) {
            Ve(Le - 1, void 0, !0)
            break
          }
          if (
            ((te += $t),
            (W === 0 && te <= A) || (Le === W - 1 && te + Rt(W) <= A))
          ) {
            Ve(W, null)
            break
          } else if (te + Fe > A) {
            Ve(Le - 1, te - $t - he + D)
            break
          }
        }
        v && Rt(0) + he > A && _e(null)
      }
    },
    [A, M, D, he, vt, rt],
  )
  var lr = le && !!Ot.length,
    Vn = {}
  be !== null && xe && (Vn = { position: 'absolute', left: be, top: 0 })
  var Ut = { prefixCls: Y, responsive: xe, component: w, invalidate: bt },
    pn = s
      ? function (te, Z) {
          var W = vt(te, Z)
          return p.createElement(
            Hu.Provider,
            {
              key: W,
              value: _(
                _({}, Ut),
                {},
                {
                  order: Z,
                  item: te,
                  itemKey: W,
                  registerSize: ct,
                  display: Z <= me,
                },
              ),
            },
            s(te, Z),
          )
        }
      : function (te, Z) {
          var W = vt(te, Z)
          return p.createElement(
            ns,
            ce({}, Ut, {
              order: Z,
              key: W,
              item: te,
              renderItem: ut,
              itemKey: W,
              registerSize: ct,
              display: Z <= me,
            }),
          )
        },
    Je,
    Be = {
      order: lr ? me : Number.MAX_SAFE_INTEGER,
      className: ''.concat(Y, '-rest'),
      registerSize: Zt,
      display: lr,
    }
  if (C)
    C && (Je = p.createElement(Hu.Provider, { value: _(_({}, Ut), Be) }, C(Ot)))
  else {
    var It = S || LI
    Je = p.createElement(
      ns,
      ce({}, Ut, Be),
      typeof It == 'function' ? It(Ot) : It,
    )
  }
  var Re = p.createElement(
    m,
    ce({ className: oe(!bt && r, g), style: d, ref: t }, x),
    rt.map(pn),
    Tt ? Je : null,
    v &&
      p.createElement(
        ns,
        ce({}, Ut, {
          responsive: qe,
          responsiveDisabled: !xe,
          order: me,
          className: ''.concat(Y, '-suffix'),
          registerSize: xt,
          display: !0,
          style: Vn,
        }),
        v,
      ),
  )
  return (
    qe && (Re = p.createElement(qs, { onResize: ve, disabled: !xe }, Re)), Re
  )
}
var _r = p.forwardRef(AI)
_r.displayName = 'Overflow'
_r.Item = zC
_r.RESPONSIVE = DC
_r.INVALIDATE = HC
function FI(e) {
  var t = e.prefixCls,
    n = e.align,
    r = e.arrow,
    i = e.arrowPos,
    o = r || {},
    a = o.className,
    s = o.content,
    l = i.x,
    u = l === void 0 ? 0 : l,
    c = i.y,
    f = c === void 0 ? 0 : c,
    d = p.useRef()
  if (!n || !n.points) return null
  var g = { position: 'absolute' }
  if (n.autoArrow !== !1) {
    var y = n.points[0],
      S = n.points[1],
      C = y[0],
      v = y[1],
      h = S[0],
      m = S[1]
    C === h || !['t', 'b'].includes(C)
      ? (g.top = f)
      : C === 't'
        ? (g.top = 0)
        : (g.bottom = 0),
      v === m || !['l', 'r'].includes(v)
        ? (g.left = u)
        : v === 'l'
          ? (g.left = 0)
          : (g.right = 0)
  }
  return p.createElement(
    'div',
    { ref: d, className: oe(''.concat(t, '-arrow'), a), style: g },
    s,
  )
}
function jI(e) {
  var t = e.prefixCls,
    n = e.open,
    r = e.zIndex,
    i = e.mask,
    o = e.motion
  return i
    ? p.createElement(
        $c,
        ce({}, o, { motionAppear: !0, visible: n, removeOnLeave: !0 }),
        function (a) {
          var s = a.className
          return p.createElement('div', {
            style: { zIndex: r },
            className: oe(''.concat(t, '-mask'), s),
          })
        },
      )
    : null
}
var zI = p.memo(
    function (e) {
      var t = e.children
      return t
    },
    function (e, t) {
      return t.cache
    },
  ),
  DI = p.forwardRef(function (e, t) {
    var n = e.popup,
      r = e.className,
      i = e.prefixCls,
      o = e.style,
      a = e.target,
      s = e.onVisibleChanged,
      l = e.open,
      u = e.keepDom,
      c = e.fresh,
      f = e.onClick,
      d = e.mask,
      g = e.arrow,
      y = e.arrowPos,
      S = e.align,
      C = e.motion,
      v = e.maskMotion,
      h = e.forceRender,
      m = e.getPopupContainer,
      w = e.autoDestroy,
      b = e.portal,
      x = e.zIndex,
      E = e.onMouseEnter,
      k = e.onMouseLeave,
      O = e.onPointerEnter,
      I = e.ready,
      L = e.offsetX,
      z = e.offsetY,
      A = e.offsetR,
      F = e.offsetB,
      V = e.onAlign,
      M = e.onPrepare,
      T = e.stretch,
      P = e.targetWidth,
      R = e.targetHeight,
      N = typeof n == 'function' ? n() : n,
      j = l || u,
      H = (m == null ? void 0 : m.length) > 0,
      K = p.useState(!m || !H),
      D = B(K, 2),
      G = D[0],
      re = D[1]
    if (
      (Ft(
        function () {
          !G && H && a && re(!0)
        },
        [G, H, a],
      ),
      !G)
    )
      return null
    var ne = 'auto',
      he = { left: '-1000vw', top: '-1000vh', right: ne, bottom: ne }
    if (I || !l) {
      var pe,
        we = S.points,
        ke =
          S.dynamicInset ||
          ((pe = S._experimental) === null || pe === void 0
            ? void 0
            : pe.dynamicInset),
        be = ke && we[0][1] === 'r',
        _e = ke && we[0][0] === 'b'
      be ? ((he.right = A), (he.left = ne)) : ((he.left = L), (he.right = ne)),
        _e ? ((he.bottom = F), (he.top = ne)) : ((he.top = z), (he.bottom = ne))
    }
    var Se = {}
    return (
      T &&
        (T.includes('height') && R
          ? (Se.height = R)
          : T.includes('minHeight') && R && (Se.minHeight = R),
        T.includes('width') && P
          ? (Se.width = P)
          : T.includes('minWidth') && P && (Se.minWidth = P)),
      l || (Se.pointerEvents = 'none'),
      p.createElement(
        b,
        {
          open: h || j,
          getContainer:
            m &&
            function () {
              return m(a)
            },
          autoDestroy: w,
        },
        p.createElement(jI, {
          prefixCls: i,
          open: l,
          zIndex: x,
          mask: d,
          motion: v,
        }),
        p.createElement(qs, { onResize: V, disabled: !l }, function (Ke) {
          return p.createElement(
            $c,
            ce(
              {
                motionAppear: !0,
                motionEnter: !0,
                motionLeave: !0,
                removeOnLeave: !1,
                forceRender: h,
                leavedClassName: ''.concat(i, '-hidden'),
              },
              C,
              {
                onAppearPrepare: M,
                onEnterPrepare: M,
                visible: l,
                onVisibleChanged: function (Ze) {
                  var me
                  C == null ||
                    (me = C.onVisibleChanged) === null ||
                    me === void 0 ||
                    me.call(C, Ze),
                    s(Ze)
                },
              },
            ),
            function (Te, Ze) {
              var me = Te.className,
                lt = Te.style,
                ge = oe(i, me, r)
              return p.createElement(
                'div',
                {
                  ref: dS(Ke, t, Ze),
                  className: ge,
                  style: _(
                    _(
                      _(
                        _(
                          {
                            '--arrow-x': ''.concat(y.x || 0, 'px'),
                            '--arrow-y': ''.concat(y.y || 0, 'px'),
                          },
                          he,
                        ),
                        Se,
                      ),
                      lt,
                    ),
                    {},
                    { boxSizing: 'border-box', zIndex: x },
                    o,
                  ),
                  onMouseEnter: E,
                  onMouseLeave: k,
                  onPointerEnter: O,
                  onClick: f,
                },
                g &&
                  p.createElement(FI, {
                    prefixCls: i,
                    arrow: g,
                    arrowPos: y,
                    align: S,
                  }),
                p.createElement(zI, { cache: !l && !c }, N),
              )
            },
          )
        }),
      )
    )
  }),
  HI = p.forwardRef(function (e, t) {
    var n = e.children,
      r = e.getTriggerDOMNode,
      i = Ec(n),
      o = p.useCallback(
        function (s) {
          Ah(t, r ? r(s) : s)
        },
        [r],
      ),
      a = xc(o, n.ref)
    return i ? p.cloneElement(n, { ref: a }) : n
  }),
  Dv = p.createContext(null)
function Hv(e) {
  return e ? (Array.isArray(e) ? e : [e]) : []
}
function VI(e, t, n, r) {
  return p.useMemo(
    function () {
      var i = Hv(n ?? t),
        o = Hv(r ?? t),
        a = new Set(i),
        s = new Set(o)
      return (
        e &&
          (a.has('hover') && (a.delete('hover'), a.add('click')),
          s.has('hover') && (s.delete('hover'), s.add('click'))),
        [a, s]
      )
    },
    [e, t, n, r],
  )
}
function BI() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    n = arguments.length > 2 ? arguments[2] : void 0
  return n ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1]
}
function UI(e, t, n, r) {
  for (var i = n.points, o = Object.keys(e), a = 0; a < o.length; a += 1) {
    var s,
      l = o[a]
    if (BI((s = e[l]) === null || s === void 0 ? void 0 : s.points, i, r))
      return ''.concat(t, '-placement-').concat(l)
  }
  return ''
}
function Vv(e, t, n, r) {
  return (
    t ||
    (n
      ? { motionName: ''.concat(e, '-').concat(n) }
      : r
        ? { motionName: r }
        : null)
  )
}
function el(e) {
  return e.ownerDocument.defaultView
}
function Tp(e) {
  for (
    var t = [],
      n = e == null ? void 0 : e.parentElement,
      r = ['hidden', 'scroll', 'clip', 'auto'];
    n;

  ) {
    var i = el(n).getComputedStyle(n),
      o = i.overflowX,
      a = i.overflowY,
      s = i.overflow
    ;[o, a, s].some(function (l) {
      return r.includes(l)
    }) && t.push(n),
      (n = n.parentElement)
  }
  return t
}
function As(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1
  return Number.isNaN(e) ? t : e
}
function Ma(e) {
  return As(parseFloat(e), 0)
}
function Bv(e, t) {
  var n = _({}, e)
  return (
    (t || []).forEach(function (r) {
      if (!(r instanceof HTMLBodyElement || r instanceof HTMLHtmlElement)) {
        var i = el(r).getComputedStyle(r),
          o = i.overflow,
          a = i.overflowClipMargin,
          s = i.borderTopWidth,
          l = i.borderBottomWidth,
          u = i.borderLeftWidth,
          c = i.borderRightWidth,
          f = r.getBoundingClientRect(),
          d = r.offsetHeight,
          g = r.clientHeight,
          y = r.offsetWidth,
          S = r.clientWidth,
          C = Ma(s),
          v = Ma(l),
          h = Ma(u),
          m = Ma(c),
          w = As(Math.round((f.width / y) * 1e3) / 1e3),
          b = As(Math.round((f.height / d) * 1e3) / 1e3),
          x = (y - S - h - m) * w,
          E = (d - g - C - v) * b,
          k = C * b,
          O = v * b,
          I = h * w,
          L = m * w,
          z = 0,
          A = 0
        if (o === 'clip') {
          var F = Ma(a)
          ;(z = F * w), (A = F * b)
        }
        var V = f.x + I - z,
          M = f.y + k - A,
          T = V + f.width + 2 * z - I - L - x,
          P = M + f.height + 2 * A - k - O - E
        ;(n.left = Math.max(n.left, V)),
          (n.top = Math.max(n.top, M)),
          (n.right = Math.min(n.right, T)),
          (n.bottom = Math.min(n.bottom, P))
      }
    }),
    n
  )
}
function Uv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    n = ''.concat(t),
    r = n.match(/^(.*)\%$/)
  return r ? e * (parseFloat(r[1]) / 100) : parseFloat(n)
}
function Wv(e, t) {
  var n = t || [],
    r = B(n, 2),
    i = r[0],
    o = r[1]
  return [Uv(e.width, i), Uv(e.height, o)]
}
function Kv() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
  return [e[0], e[1]]
}
function Co(e, t) {
  var n = t[0],
    r = t[1],
    i,
    o
  return (
    n === 't'
      ? (o = e.y)
      : n === 'b'
        ? (o = e.y + e.height)
        : (o = e.y + e.height / 2),
    r === 'l'
      ? (i = e.x)
      : r === 'r'
        ? (i = e.x + e.width)
        : (i = e.x + e.width / 2),
    { x: i, y: o }
  )
}
function Gr(e, t) {
  var n = { t: 'b', b: 't', l: 'r', r: 'l' }
  return e
    .map(function (r, i) {
      return i === t ? n[r] || 'c' : r
    })
    .join('')
}
function WI(e, t, n, r, i, o, a) {
  var s = p.useState({
      ready: !1,
      offsetX: 0,
      offsetY: 0,
      offsetR: 0,
      offsetB: 0,
      arrowX: 0,
      arrowY: 0,
      scaleX: 1,
      scaleY: 1,
      align: i[r] || {},
    }),
    l = B(s, 2),
    u = l[0],
    c = l[1],
    f = p.useRef(0),
    d = p.useMemo(
      function () {
        return t ? Tp(t) : []
      },
      [t],
    ),
    g = p.useRef({}),
    y = function () {
      g.current = {}
    }
  e || y()
  var S = sn(function () {
      if (t && n && e) {
        let In = function (Sa, Er) {
            var Ri =
                arguments.length > 2 && arguments[2] !== void 0
                  ? arguments[2]
                  : Fe,
              nl = D.x + Sa,
              rl = D.y + Er,
              zc = nl + _e,
              Dc = rl + be,
              Q = Math.max(nl, Ri.left),
              ie = Math.max(rl, Ri.top),
              Ge = Math.min(zc, Ri.right),
              ft = Math.min(Dc, Ri.bottom)
            return Math.max(0, (Ge - Q) * (ft - ie))
          },
          po = function () {
            ;(On = D.y + W), (Un = On + be), (it = D.x + Z), (Vr = it + _e)
          }
        var h,
          m,
          w,
          b,
          x = t,
          E = x.ownerDocument,
          k = el(x),
          O = k.getComputedStyle(x),
          I = O.width,
          L = O.height,
          z = O.position,
          A = x.style.left,
          F = x.style.top,
          V = x.style.right,
          M = x.style.bottom,
          T = x.style.overflow,
          P = _(_({}, i[r]), o),
          R = E.createElement('div')
        ;(h = x.parentElement) === null || h === void 0 || h.appendChild(R),
          (R.style.left = ''.concat(x.offsetLeft, 'px')),
          (R.style.top = ''.concat(x.offsetTop, 'px')),
          (R.style.position = z),
          (R.style.height = ''.concat(x.offsetHeight, 'px')),
          (R.style.width = ''.concat(x.offsetWidth, 'px')),
          (x.style.left = '0'),
          (x.style.top = '0'),
          (x.style.right = 'auto'),
          (x.style.bottom = 'auto'),
          (x.style.overflow = 'hidden')
        var N
        if (Array.isArray(n)) N = { x: n[0], y: n[1], width: 0, height: 0 }
        else {
          var j,
            H,
            K = n.getBoundingClientRect()
          ;(K.x = (j = K.x) !== null && j !== void 0 ? j : K.left),
            (K.y = (H = K.y) !== null && H !== void 0 ? H : K.top),
            (N = { x: K.x, y: K.y, width: K.width, height: K.height })
        }
        var D = x.getBoundingClientRect()
        ;(D.x = (m = D.x) !== null && m !== void 0 ? m : D.left),
          (D.y = (w = D.y) !== null && w !== void 0 ? w : D.top)
        var G = E.documentElement,
          re = G.clientWidth,
          ne = G.clientHeight,
          he = G.scrollWidth,
          pe = G.scrollHeight,
          we = G.scrollTop,
          ke = G.scrollLeft,
          be = D.height,
          _e = D.width,
          Se = N.height,
          Ke = N.width,
          Te = { left: 0, top: 0, right: re, bottom: ne },
          Ze = { left: -ke, top: -we, right: he - ke, bottom: pe - we },
          me = P.htmlRegion,
          lt = 'visible',
          ge = 'visibleFirst'
        me !== 'scroll' && me !== ge && (me = lt)
        var le = me === ge,
          He = Bv(Ze, d),
          Y = Bv(Te, d),
          Fe = me === lt ? Y : He,
          qe = le ? Y : Fe
        ;(x.style.left = 'auto'),
          (x.style.top = 'auto'),
          (x.style.right = '0'),
          (x.style.bottom = '0')
        var xe = x.getBoundingClientRect()
        ;(x.style.left = A),
          (x.style.top = F),
          (x.style.right = V),
          (x.style.bottom = M),
          (x.style.overflow = T),
          (b = x.parentElement) === null || b === void 0 || b.removeChild(R)
        var bt = As(Math.round((_e / parseFloat(I)) * 1e3) / 1e3),
          Tt = As(Math.round((be / parseFloat(L)) * 1e3) / 1e3)
        if (bt === 0 || Tt === 0 || (Es(n) && !TC(n))) return
        var rt = P.offset,
          Ot = P.targetOffset,
          vt = Wv(D, rt),
          ut = B(vt, 2),
          Ve = ut[0],
          ve = ut[1],
          ct = Wv(N, Ot),
          Zt = B(ct, 2),
          xt = Zt[0],
          Rt = Zt[1]
        ;(N.x -= xt), (N.y -= Rt)
        var lr = P.points || [],
          Vn = B(lr, 2),
          Ut = Vn[0],
          pn = Vn[1],
          Je = Kv(pn),
          Be = Kv(Ut),
          It = Co(N, Je),
          Re = Co(D, Be),
          te = _({}, P),
          Z = It.x - Re.x + Ve,
          W = It.y - Re.y + ve,
          Le = In(Z, W),
          $t = In(Z, W, Y),
          Me = Co(N, ['t', 'l']),
          Ee = Co(D, ['t', 'l']),
          Mt = Co(N, ['b', 'r']),
          Et = Co(D, ['b', 'r']),
          Wt = P.overflow || {},
          Bn = Wt.adjustX,
          Hr = Wt.adjustY,
          hn = Wt.shiftX,
          Nt = Wt.shiftY,
          ur = function (Er) {
            return typeof Er == 'boolean' ? Er : Er >= 0
          },
          On,
          Un,
          it,
          Vr
        po()
        var cr = ur(Hr),
          oo = Be[0] === Je[0]
        if (cr && Be[0] === 't' && (Un > qe.bottom || g.current.bt)) {
          var yt = W
          oo ? (yt -= be - Se) : (yt = Me.y - Et.y - ve)
          var ao = In(Z, yt),
            ga = In(Z, yt, Y)
          ao > Le || (ao === Le && (!le || ga >= $t))
            ? ((g.current.bt = !0),
              (W = yt),
              (ve = -ve),
              (te.points = [Gr(Be, 0), Gr(Je, 0)]))
            : (g.current.bt = !1)
        }
        if (cr && Be[0] === 'b' && (On < qe.top || g.current.tb)) {
          var fr = W
          oo ? (fr += be - Se) : (fr = Mt.y - Ee.y - ve)
          var dr = In(Z, fr),
            Ei = In(Z, fr, Y)
          dr > Le || (dr === Le && (!le || Ei >= $t))
            ? ((g.current.tb = !0),
              (W = fr),
              (ve = -ve),
              (te.points = [Gr(Be, 0), Gr(Je, 0)]))
            : (g.current.tb = !1)
        }
        var so = ur(Bn),
          lo = Be[1] === Je[1]
        if (so && Be[1] === 'l' && (Vr > qe.right || g.current.rl)) {
          var br = Z
          lo ? (br -= _e - Ke) : (br = Me.x - Et.x - Ve)
          var Pi = In(br, W),
            Wn = In(br, W, Y)
          Pi > Le || (Pi === Le && (!le || Wn >= $t))
            ? ((g.current.rl = !0),
              (Z = br),
              (Ve = -Ve),
              (te.points = [Gr(Be, 1), Gr(Je, 1)]))
            : (g.current.rl = !1)
        }
        if (so && Be[1] === 'r' && (it < qe.left || g.current.lr)) {
          var Kn = Z
          lo ? (Kn += _e - Ke) : (Kn = Mt.x - Ee.x - Ve)
          var uo = In(Kn, W),
            co = In(Kn, W, Y)
          uo > Le || (uo === Le && (!le || co >= $t))
            ? ((g.current.lr = !0),
              (Z = Kn),
              (Ve = -Ve),
              (te.points = [Gr(Be, 1), Gr(Je, 1)]))
            : (g.current.lr = !1)
        }
        po()
        var mn = hn === !0 ? 0 : hn
        typeof mn == 'number' &&
          (it < Y.left &&
            ((Z -= it - Y.left - Ve),
            N.x + Ke < Y.left + mn && (Z += N.x - Y.left + Ke - mn)),
          Vr > Y.right &&
            ((Z -= Vr - Y.right - Ve),
            N.x > Y.right - mn && (Z += N.x - Y.right + mn)))
        var gn = Nt === !0 ? 0 : Nt
        typeof gn == 'number' &&
          (On < Y.top &&
            ((W -= On - Y.top - ve),
            N.y + Se < Y.top + gn && (W += N.y - Y.top + Se - gn)),
          Un > Y.bottom &&
            ((W -= Un - Y.bottom - ve),
            N.y > Y.bottom - gn && (W += N.y - Y.bottom + gn)))
        var Br = D.x + Z,
          Ur = Br + _e,
          Rn = D.y + W,
          va = Rn + be,
          Ae = N.x,
          Pe = Ae + Ke,
          Oe = N.y,
          _t = Oe + Se,
          Lt = Math.max(Br, Ae),
          Wr = Math.min(Ur, Pe),
          Kr = (Lt + Wr) / 2,
          ya = Kr - Br,
          fo = Math.max(Rn, Oe),
          ki = Math.min(va, _t),
          xr = (fo + ki) / 2,
          Ti = xr - Rn
        a == null || a(t, te)
        var Oi = xe.right - D.x - (Z + D.width),
          pr = xe.bottom - D.y - (W + D.height)
        bt === 1 && ((Z = Math.round(Z)), (Oi = Math.round(Oi))),
          Tt === 1 && ((W = Math.round(W)), (pr = Math.round(pr)))
        var jc = {
          ready: !0,
          offsetX: Z / bt,
          offsetY: W / Tt,
          offsetR: Oi / bt,
          offsetB: pr / Tt,
          arrowX: ya / bt,
          arrowY: Ti / Tt,
          scaleX: bt,
          scaleY: Tt,
          align: te,
        }
        c(jc)
      }
    }),
    C = function () {
      f.current += 1
      var m = f.current
      Promise.resolve().then(function () {
        f.current === m && S()
      })
    },
    v = function () {
      c(function (m) {
        return _(_({}, m), {}, { ready: !1 })
      })
    }
  return (
    Ft(v, [r]),
    Ft(
      function () {
        e || v()
      },
      [e],
    ),
    [
      u.ready,
      u.offsetX,
      u.offsetY,
      u.offsetR,
      u.offsetB,
      u.arrowX,
      u.arrowY,
      u.scaleX,
      u.scaleY,
      u.align,
      C,
    ]
  )
}
function KI(e, t, n, r, i) {
  Ft(
    function () {
      if (e && t && n) {
        let f = function () {
          r(), i()
        }
        var o = t,
          a = n,
          s = Tp(o),
          l = Tp(a),
          u = el(a),
          c = new Set([u].concat(J(s), J(l)))
        return (
          c.forEach(function (d) {
            d.addEventListener('scroll', f, { passive: !0 })
          }),
          u.addEventListener('resize', f, { passive: !0 }),
          r(),
          function () {
            c.forEach(function (d) {
              d.removeEventListener('scroll', f),
                u.removeEventListener('resize', f)
            })
          }
        )
      }
    },
    [e, t, n],
  )
}
function qI(e, t, n, r, i, o, a, s) {
  var l = p.useRef(e)
  ;(l.current = e),
    p.useEffect(
      function () {
        if (t && r && (!i || o)) {
          var u = function (g) {
              var y
              l.current &&
                !a(
                  ((y = g.composedPath) === null ||
                  y === void 0 ||
                  (y = y.call(g)) === null ||
                  y === void 0
                    ? void 0
                    : y[0]) || g.target,
                ) &&
                s(!1)
            },
            c = el(r)
          c.addEventListener('mousedown', u, !0),
            c.addEventListener('contextmenu', u, !0)
          var f = zu(n)
          return (
            f &&
              (f.addEventListener('mousedown', u, !0),
              f.addEventListener('contextmenu', u, !0)),
            function () {
              c.removeEventListener('mousedown', u, !0),
                c.removeEventListener('contextmenu', u, !0),
                f &&
                  (f.removeEventListener('mousedown', u, !0),
                  f.removeEventListener('contextmenu', u, !0))
            }
          )
        }
      },
      [t, n, r, i, o],
    )
}
var GI = [
  'prefixCls',
  'children',
  'action',
  'showAction',
  'hideAction',
  'popupVisible',
  'defaultPopupVisible',
  'onPopupVisibleChange',
  'afterPopupVisibleChange',
  'mouseEnterDelay',
  'mouseLeaveDelay',
  'focusDelay',
  'blurDelay',
  'mask',
  'maskClosable',
  'getPopupContainer',
  'forceRender',
  'autoDestroy',
  'destroyPopupOnHide',
  'popup',
  'popupClassName',
  'popupStyle',
  'popupPlacement',
  'builtinPlacements',
  'popupAlign',
  'zIndex',
  'stretch',
  'getPopupClassNameFromAlign',
  'fresh',
  'alignPoint',
  'onPopupClick',
  'onPopupAlign',
  'arrow',
  'popupMotion',
  'maskMotion',
  'popupTransitionName',
  'popupAnimation',
  'maskTransitionName',
  'maskAnimation',
  'className',
  'getTriggerDOMNode',
]
function XI() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : MC,
    t = p.forwardRef(function (n, r) {
      var i = n.prefixCls,
        o = i === void 0 ? 'rc-trigger-popup' : i,
        a = n.children,
        s = n.action,
        l = s === void 0 ? 'hover' : s,
        u = n.showAction,
        c = n.hideAction,
        f = n.popupVisible,
        d = n.defaultPopupVisible,
        g = n.onPopupVisibleChange,
        y = n.afterPopupVisibleChange,
        S = n.mouseEnterDelay,
        C = n.mouseLeaveDelay,
        v = C === void 0 ? 0.1 : C,
        h = n.focusDelay,
        m = n.blurDelay,
        w = n.mask,
        b = n.maskClosable,
        x = b === void 0 ? !0 : b,
        E = n.getPopupContainer,
        k = n.forceRender,
        O = n.autoDestroy,
        I = n.destroyPopupOnHide,
        L = n.popup,
        z = n.popupClassName,
        A = n.popupStyle,
        F = n.popupPlacement,
        V = n.builtinPlacements,
        M = V === void 0 ? {} : V,
        T = n.popupAlign,
        P = n.zIndex,
        R = n.stretch,
        N = n.getPopupClassNameFromAlign,
        j = n.fresh,
        H = n.alignPoint,
        K = n.onPopupClick,
        D = n.onPopupAlign,
        G = n.arrow,
        re = n.popupMotion,
        ne = n.maskMotion,
        he = n.popupTransitionName,
        pe = n.popupAnimation,
        we = n.maskTransitionName,
        ke = n.maskAnimation,
        be = n.className,
        _e = n.getTriggerDOMNode,
        Se = De(n, GI),
        Ke = O || I || !1,
        Te = p.useState(!1),
        Ze = B(Te, 2),
        me = Ze[0],
        lt = Ze[1]
      Ft(function () {
        lt(PI())
      }, [])
      var ge = p.useRef({}),
        le = p.useContext(Dv),
        He = p.useMemo(
          function () {
            return {
              registerSubPopup: function (ie, Ge) {
                ;(ge.current[ie] = Ge),
                  le == null || le.registerSubPopup(ie, Ge)
              },
            }
          },
          [le],
        ),
        Y = OR(),
        Fe = p.useState(null),
        qe = B(Fe, 2),
        xe = qe[0],
        bt = qe[1],
        Tt = p.useRef(null),
        rt = sn(function (Q) {
          ;(Tt.current = Q),
            Es(Q) && xe !== Q && bt(Q),
            le == null || le.registerSubPopup(Y, Q)
        }),
        Ot = p.useState(null),
        vt = B(Ot, 2),
        ut = vt[0],
        Ve = vt[1],
        ve = p.useRef(null),
        ct = sn(function (Q) {
          Es(Q) && ut !== Q && (Ve(Q), (ve.current = Q))
        }),
        Zt = p.Children.only(a),
        xt = (Zt == null ? void 0 : Zt.props) || {},
        Rt = {},
        lr = sn(function (Q) {
          var ie,
            Ge,
            ft = ut
          return (
            (ft == null ? void 0 : ft.contains(Q)) ||
            ((ie = zu(ft)) === null || ie === void 0 ? void 0 : ie.host) ===
              Q ||
            Q === ft ||
            (xe == null ? void 0 : xe.contains(Q)) ||
            ((Ge = zu(xe)) === null || Ge === void 0 ? void 0 : Ge.host) ===
              Q ||
            Q === xe ||
            Object.values(ge.current).some(function (ot) {
              return (ot == null ? void 0 : ot.contains(Q)) || Q === ot
            })
          )
        }),
        Vn = Vv(o, re, pe, he),
        Ut = Vv(o, ne, ke, we),
        pn = p.useState(d || !1),
        Je = B(pn, 2),
        Be = Je[0],
        It = Je[1],
        Re = f ?? Be,
        te = sn(function (Q) {
          f === void 0 && It(Q)
        })
      Ft(
        function () {
          It(f || !1)
        },
        [f],
      )
      var Z = p.useRef(Re)
      Z.current = Re
      var W = p.useRef([])
      W.current = []
      var Le = sn(function (Q) {
          var ie
          te(Q),
            ((ie = W.current[W.current.length - 1]) !== null && ie !== void 0
              ? ie
              : Re) !== Q && (W.current.push(Q), g == null || g(Q))
        }),
        $t = p.useRef(),
        Me = function () {
          clearTimeout($t.current)
        },
        Ee = function (ie) {
          var Ge =
            arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0
          Me(),
            Ge === 0
              ? Le(ie)
              : ($t.current = setTimeout(function () {
                  Le(ie)
                }, Ge * 1e3))
        }
      p.useEffect(function () {
        return Me
      }, [])
      var Mt = p.useState(!1),
        Et = B(Mt, 2),
        Wt = Et[0],
        Bn = Et[1]
      Ft(
        function (Q) {
          ;(!Q || Re) && Bn(!0)
        },
        [Re],
      )
      var Hr = p.useState(null),
        hn = B(Hr, 2),
        Nt = hn[0],
        ur = hn[1],
        On = p.useState(null),
        Un = B(On, 2),
        it = Un[0],
        Vr = Un[1],
        cr = function (ie) {
          Vr([ie.clientX, ie.clientY])
        },
        oo = WI(Re, xe, H && it !== null ? it : ut, F, M, T, D),
        yt = B(oo, 11),
        ao = yt[0],
        ga = yt[1],
        fr = yt[2],
        dr = yt[3],
        Ei = yt[4],
        so = yt[5],
        lo = yt[6],
        br = yt[7],
        Pi = yt[8],
        Wn = yt[9],
        Kn = yt[10],
        uo = VI(me, l, u, c),
        co = B(uo, 2),
        mn = co[0],
        gn = co[1],
        Br = mn.has('click'),
        Ur = gn.has('click') || gn.has('contextMenu'),
        Rn = sn(function () {
          Wt || Kn()
        }),
        va = function () {
          Z.current && H && Ur && Ee(!1)
        }
      KI(Re, ut, xe, Rn, va),
        Ft(
          function () {
            Rn()
          },
          [it, F],
        ),
        Ft(
          function () {
            Re && !(M != null && M[F]) && Rn()
          },
          [JSON.stringify(T)],
        )
      var Ae = p.useMemo(
        function () {
          var Q = UI(M, o, Wn, H)
          return oe(Q, N == null ? void 0 : N(Wn))
        },
        [Wn, N, M, o, H],
      )
      p.useImperativeHandle(r, function () {
        return {
          nativeElement: ve.current,
          popupElement: Tt.current,
          forceAlign: Rn,
        }
      })
      var Pe = p.useState(0),
        Oe = B(Pe, 2),
        _t = Oe[0],
        Lt = Oe[1],
        Wr = p.useState(0),
        Kr = B(Wr, 2),
        ya = Kr[0],
        fo = Kr[1],
        ki = function () {
          if (R && ut) {
            var ie = ut.getBoundingClientRect()
            Lt(ie.width), fo(ie.height)
          }
        },
        xr = function () {
          ki(), Rn()
        },
        Ti = function (ie) {
          Bn(!1), Kn(), y == null || y(ie)
        },
        Oi = function () {
          return new Promise(function (ie) {
            ki(),
              ur(function () {
                return ie
              })
          })
        }
      Ft(
        function () {
          Nt && (Kn(), Nt(), ur(null))
        },
        [Nt],
      )
      function pr(Q, ie, Ge, ft) {
        Rt[Q] = function (ot) {
          var il
          ft == null || ft(ot), Ee(ie, Ge)
          for (
            var Hc = arguments.length,
              rm = new Array(Hc > 1 ? Hc - 1 : 0),
              ol = 1;
            ol < Hc;
            ol++
          )
            rm[ol - 1] = arguments[ol]
          ;(il = xt[Q]) === null ||
            il === void 0 ||
            il.call.apply(il, [xt, ot].concat(rm))
        }
      }
      ;(Br || Ur) &&
        (Rt.onClick = function (Q) {
          var ie
          Z.current && Ur ? Ee(!1) : !Z.current && Br && (cr(Q), Ee(!0))
          for (
            var Ge = arguments.length,
              ft = new Array(Ge > 1 ? Ge - 1 : 0),
              ot = 1;
            ot < Ge;
            ot++
          )
            ft[ot - 1] = arguments[ot]
          ;(ie = xt.onClick) === null ||
            ie === void 0 ||
            ie.call.apply(ie, [xt, Q].concat(ft))
        }),
        qI(Re, Ur, ut, xe, w, x, lr, Ee)
      var jc = mn.has('hover'),
        In = gn.has('hover'),
        po,
        Sa
      jc &&
        (pr('onMouseEnter', !0, S, function (Q) {
          cr(Q)
        }),
        pr('onPointerEnter', !0, S, function (Q) {
          cr(Q)
        }),
        (po = function (ie) {
          ;(Re || Wt) &&
            xe !== null &&
            xe !== void 0 &&
            xe.contains(ie.target) &&
            Ee(!0, S)
        }),
        H &&
          (Rt.onMouseMove = function (Q) {
            var ie
            ;(ie = xt.onMouseMove) === null || ie === void 0 || ie.call(xt, Q)
          })),
        In &&
          (pr('onMouseLeave', !1, v),
          pr('onPointerLeave', !1, v),
          (Sa = function () {
            Ee(!1, v)
          })),
        mn.has('focus') && pr('onFocus', !0, h),
        gn.has('focus') && pr('onBlur', !1, m),
        mn.has('contextMenu') &&
          (Rt.onContextMenu = function (Q) {
            var ie
            Z.current && gn.has('contextMenu') ? Ee(!1) : (cr(Q), Ee(!0)),
              Q.preventDefault()
            for (
              var Ge = arguments.length,
                ft = new Array(Ge > 1 ? Ge - 1 : 0),
                ot = 1;
              ot < Ge;
              ot++
            )
              ft[ot - 1] = arguments[ot]
            ;(ie = xt.onContextMenu) === null ||
              ie === void 0 ||
              ie.call.apply(ie, [xt, Q].concat(ft))
          }),
        be && (Rt.className = oe(xt.className, be))
      var Er = _(_({}, xt), Rt),
        Ri = {},
        nl = [
          'onContextMenu',
          'onClick',
          'onMouseDown',
          'onTouchStart',
          'onMouseEnter',
          'onMouseLeave',
          'onFocus',
          'onBlur',
        ]
      nl.forEach(function (Q) {
        Se[Q] &&
          (Ri[Q] = function () {
            for (
              var ie, Ge = arguments.length, ft = new Array(Ge), ot = 0;
              ot < Ge;
              ot++
            )
              ft[ot] = arguments[ot]
            ;(ie = Er[Q]) === null ||
              ie === void 0 ||
              ie.call.apply(ie, [Er].concat(ft)),
              Se[Q].apply(Se, ft)
          })
      })
      var rl = p.cloneElement(Zt, _(_({}, Er), Ri)),
        zc = { x: so, y: lo },
        Dc = G ? _({}, G !== !0 ? G : {}) : null
      return p.createElement(
        p.Fragment,
        null,
        p.createElement(
          qs,
          { disabled: !Re, ref: ct, onResize: xr },
          p.createElement(HI, { getTriggerDOMNode: _e }, rl),
        ),
        p.createElement(
          Dv.Provider,
          { value: He },
          p.createElement(DI, {
            portal: e,
            ref: rt,
            prefixCls: o,
            popup: L,
            className: oe(z, Ae),
            style: A,
            target: ut,
            onMouseEnter: po,
            onMouseLeave: Sa,
            onPointerEnter: po,
            zIndex: P,
            open: Re,
            keepDom: Wt,
            fresh: j,
            onClick: K,
            mask: w,
            motion: Vn,
            maskMotion: Ut,
            onVisibleChanged: Ti,
            onPrepare: Oi,
            forceRender: k,
            autoDestroy: Ke,
            getPopupContainer: E,
            align: Wn,
            arrow: Dc,
            arrowPos: zc,
            ready: ao,
            offsetX: ga,
            offsetY: fr,
            offsetR: dr,
            offsetB: Ei,
            onAlign: Rn,
            stretch: R,
            targetWidth: _t / br,
            targetHeight: ya / Pi,
          }),
        ),
      )
    })
  return t
}
const VC = XI(MC)
function BC(e) {
  var t = e.children,
    n = e.prefixCls,
    r = e.id,
    i = e.overlayInnerStyle,
    o = e.className,
    a = e.style
  return p.createElement(
    'div',
    { className: oe(''.concat(n, '-content'), o), style: a },
    p.createElement(
      'div',
      { className: ''.concat(n, '-inner'), id: r, role: 'tooltip', style: i },
      typeof t == 'function' ? t() : t,
    ),
  )
}
var wo = { shiftX: 64, adjustY: 1 },
  bo = { adjustX: 1, shiftY: !0 },
  Nn = [0, 0],
  QI = {
    left: {
      points: ['cr', 'cl'],
      overflow: bo,
      offset: [-4, 0],
      targetOffset: Nn,
    },
    right: {
      points: ['cl', 'cr'],
      overflow: bo,
      offset: [4, 0],
      targetOffset: Nn,
    },
    top: {
      points: ['bc', 'tc'],
      overflow: wo,
      offset: [0, -4],
      targetOffset: Nn,
    },
    bottom: {
      points: ['tc', 'bc'],
      overflow: wo,
      offset: [0, 4],
      targetOffset: Nn,
    },
    topLeft: {
      points: ['bl', 'tl'],
      overflow: wo,
      offset: [0, -4],
      targetOffset: Nn,
    },
    leftTop: {
      points: ['tr', 'tl'],
      overflow: bo,
      offset: [-4, 0],
      targetOffset: Nn,
    },
    topRight: {
      points: ['br', 'tr'],
      overflow: wo,
      offset: [0, -4],
      targetOffset: Nn,
    },
    rightTop: {
      points: ['tl', 'tr'],
      overflow: bo,
      offset: [4, 0],
      targetOffset: Nn,
    },
    bottomRight: {
      points: ['tr', 'br'],
      overflow: wo,
      offset: [0, 4],
      targetOffset: Nn,
    },
    rightBottom: {
      points: ['bl', 'br'],
      overflow: bo,
      offset: [4, 0],
      targetOffset: Nn,
    },
    bottomLeft: {
      points: ['tl', 'bl'],
      overflow: wo,
      offset: [0, 4],
      targetOffset: Nn,
    },
    leftBottom: {
      points: ['br', 'bl'],
      overflow: bo,
      offset: [-4, 0],
      targetOffset: Nn,
    },
  },
  YI = [
    'overlayClassName',
    'trigger',
    'mouseEnterDelay',
    'mouseLeaveDelay',
    'overlayStyle',
    'prefixCls',
    'children',
    'onVisibleChange',
    'afterVisibleChange',
    'transitionName',
    'animation',
    'motion',
    'placement',
    'align',
    'destroyTooltipOnHide',
    'defaultVisible',
    'getTooltipContainer',
    'overlayInnerStyle',
    'arrowContent',
    'overlay',
    'id',
    'showArrow',
  ],
  ZI = function (t, n) {
    var r = t.overlayClassName,
      i = t.trigger,
      o = i === void 0 ? ['hover'] : i,
      a = t.mouseEnterDelay,
      s = a === void 0 ? 0 : a,
      l = t.mouseLeaveDelay,
      u = l === void 0 ? 0.1 : l,
      c = t.overlayStyle,
      f = t.prefixCls,
      d = f === void 0 ? 'rc-tooltip' : f,
      g = t.children,
      y = t.onVisibleChange,
      S = t.afterVisibleChange,
      C = t.transitionName,
      v = t.animation,
      h = t.motion,
      m = t.placement,
      w = m === void 0 ? 'right' : m,
      b = t.align,
      x = b === void 0 ? {} : b,
      E = t.destroyTooltipOnHide,
      k = E === void 0 ? !1 : E,
      O = t.defaultVisible,
      I = t.getTooltipContainer,
      L = t.overlayInnerStyle
    t.arrowContent
    var z = t.overlay,
      A = t.id,
      F = t.showArrow,
      V = F === void 0 ? !0 : F,
      M = De(t, YI),
      T = p.useRef(null)
    p.useImperativeHandle(n, function () {
      return T.current
    })
    var P = _({}, M)
    'visible' in t && (P.popupVisible = t.visible)
    var R = function () {
      return p.createElement(
        BC,
        { key: 'content', prefixCls: d, id: A, overlayInnerStyle: L },
        z,
      )
    }
    return p.createElement(
      VC,
      ce(
        {
          popupClassName: r,
          prefixCls: d,
          popup: R,
          action: o,
          builtinPlacements: QI,
          popupPlacement: w,
          ref: T,
          popupAlign: x,
          getPopupContainer: I,
          onPopupVisibleChange: y,
          afterPopupVisibleChange: S,
          popupTransitionName: C,
          popupAnimation: v,
          popupMotion: h,
          defaultPopupVisible: O,
          autoDestroy: k,
          mouseLeaveDelay: u,
          popupStyle: c,
          mouseEnterDelay: s,
          arrow: V,
        },
        P,
      ),
      g,
    )
  }
const JI = p.forwardRef(ZI)
function e$(e) {
  const { sizePopupArrow: t, borderRadiusXS: n, borderRadiusOuter: r } = e,
    i = t / 2,
    o = 0,
    a = i,
    s = (r * 1) / Math.sqrt(2),
    l = i - r * (1 - 1 / Math.sqrt(2)),
    u = i - n * (1 / Math.sqrt(2)),
    c = r * (Math.sqrt(2) - 1) + n * (1 / Math.sqrt(2)),
    f = 2 * i - u,
    d = c,
    g = 2 * i - s,
    y = l,
    S = 2 * i - o,
    C = a,
    v = i * Math.sqrt(2) + r * (Math.sqrt(2) - 2),
    h = r * (Math.sqrt(2) - 1),
    m = `polygon(${h}px 100%, 50% ${h}px, ${2 * i - h}px 100%, ${h}px 100%)`,
    w = `path('M ${o} ${a} A ${r} ${r} 0 0 0 ${s} ${l} L ${u} ${c} A ${n} ${n} 0 0 1 ${f} ${d} L ${g} ${y} A ${r} ${r} 0 0 0 ${S} ${C} Z')`
  return { arrowShadowWidth: v, arrowPath: w, arrowPolygon: m }
}
const t$ = (e, t, n) => {
    const {
      sizePopupArrow: r,
      arrowPolygon: i,
      arrowPath: o,
      arrowShadowWidth: a,
      borderRadiusXS: s,
      calc: l,
    } = e
    return {
      pointerEvents: 'none',
      width: r,
      height: r,
      overflow: 'hidden',
      '&::before': {
        position: 'absolute',
        bottom: 0,
        insetInlineStart: 0,
        width: r,
        height: l(r).div(2).equal(),
        background: t,
        clipPath: { _multi_value_: !0, value: [i, o] },
        content: '""',
      },
      '&::after': {
        content: '""',
        position: 'absolute',
        width: a,
        height: a,
        bottom: 0,
        insetInline: 0,
        margin: 'auto',
        borderRadius: { _skip_check_: !0, value: `0 0 ${ye(s)} 0` },
        transform: 'translateY(50%) rotate(-135deg)',
        boxShadow: n,
        zIndex: 0,
        background: 'transparent',
      },
    }
  },
  UC = 8
function WC(e) {
  const { contentRadius: t, limitVerticalRadius: n } = e,
    r = t > 12 ? t + 2 : 12
  return { arrowOffsetHorizontal: r, arrowOffsetVertical: n ? UC : r }
}
function _l(e, t) {
  return e ? t : {}
}
function n$(e, t, n) {
  const {
      componentCls: r,
      boxShadowPopoverArrow: i,
      arrowOffsetVertical: o,
      arrowOffsetHorizontal: a,
    } = e,
    {
      arrowDistance: s = 0,
      arrowPlacement: l = { left: !0, right: !0, top: !0, bottom: !0 },
    } = {}
  return {
    [r]: Object.assign(
      Object.assign(
        Object.assign(
          Object.assign(
            {
              [`${r}-arrow`]: [
                Object.assign(
                  Object.assign(
                    { position: 'absolute', zIndex: 1, display: 'block' },
                    t$(e, t, i),
                  ),
                  { '&:before': { background: t } },
                ),
              ],
            },
            _l(!!l.top, {
              [[
                `&-placement-top > ${r}-arrow`,
                `&-placement-topLeft > ${r}-arrow`,
                `&-placement-topRight > ${r}-arrow`,
              ].join(',')]: {
                bottom: s,
                transform: 'translateY(100%) rotate(180deg)',
              },
              [`&-placement-top > ${r}-arrow`]: {
                left: { _skip_check_: !0, value: '50%' },
                transform: 'translateX(-50%) translateY(100%) rotate(180deg)',
              },
              '&-placement-topLeft': {
                '--arrow-offset-horizontal': a,
                [`> ${r}-arrow`]: { left: { _skip_check_: !0, value: a } },
              },
              '&-placement-topRight': {
                '--arrow-offset-horizontal': `calc(100% - ${ye(a)})`,
                [`> ${r}-arrow`]: { right: { _skip_check_: !0, value: a } },
              },
            }),
          ),
          _l(!!l.bottom, {
            [[
              `&-placement-bottom > ${r}-arrow`,
              `&-placement-bottomLeft > ${r}-arrow`,
              `&-placement-bottomRight > ${r}-arrow`,
            ].join(',')]: { top: s, transform: 'translateY(-100%)' },
            [`&-placement-bottom > ${r}-arrow`]: {
              left: { _skip_check_: !0, value: '50%' },
              transform: 'translateX(-50%) translateY(-100%)',
            },
            '&-placement-bottomLeft': {
              '--arrow-offset-horizontal': a,
              [`> ${r}-arrow`]: { left: { _skip_check_: !0, value: a } },
            },
            '&-placement-bottomRight': {
              '--arrow-offset-horizontal': `calc(100% - ${ye(a)})`,
              [`> ${r}-arrow`]: { right: { _skip_check_: !0, value: a } },
            },
          }),
        ),
        _l(!!l.left, {
          [[
            `&-placement-left > ${r}-arrow`,
            `&-placement-leftTop > ${r}-arrow`,
            `&-placement-leftBottom > ${r}-arrow`,
          ].join(',')]: {
            right: { _skip_check_: !0, value: s },
            transform: 'translateX(100%) rotate(90deg)',
          },
          [`&-placement-left > ${r}-arrow`]: {
            top: { _skip_check_: !0, value: '50%' },
            transform: 'translateY(-50%) translateX(100%) rotate(90deg)',
          },
          [`&-placement-leftTop > ${r}-arrow`]: { top: o },
          [`&-placement-leftBottom > ${r}-arrow`]: { bottom: o },
        }),
      ),
      _l(!!l.right, {
        [[
          `&-placement-right > ${r}-arrow`,
          `&-placement-rightTop > ${r}-arrow`,
          `&-placement-rightBottom > ${r}-arrow`,
        ].join(',')]: {
          left: { _skip_check_: !0, value: s },
          transform: 'translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-right > ${r}-arrow`]: {
          top: { _skip_check_: !0, value: '50%' },
          transform: 'translateY(-50%) translateX(-100%) rotate(-90deg)',
        },
        [`&-placement-rightTop > ${r}-arrow`]: { top: o },
        [`&-placement-rightBottom > ${r}-arrow`]: { bottom: o },
      }),
    ),
  }
}
function r$(e, t, n, r) {
  if (r === !1) return { adjustX: !1, adjustY: !1 }
  const i = r && typeof r == 'object' ? r : {},
    o = {}
  switch (e) {
    case 'top':
    case 'bottom':
      ;(o.shiftX = t.arrowOffsetHorizontal * 2 + n),
        (o.shiftY = !0),
        (o.adjustY = !0)
      break
    case 'left':
    case 'right':
      ;(o.shiftY = t.arrowOffsetVertical * 2 + n),
        (o.shiftX = !0),
        (o.adjustX = !0)
      break
  }
  const a = Object.assign(Object.assign({}, o), i)
  return a.shiftX || (a.adjustX = !0), a.shiftY || (a.adjustY = !0), a
}
const qv = {
    left: { points: ['cr', 'cl'] },
    right: { points: ['cl', 'cr'] },
    top: { points: ['bc', 'tc'] },
    bottom: { points: ['tc', 'bc'] },
    topLeft: { points: ['bl', 'tl'] },
    leftTop: { points: ['tr', 'tl'] },
    topRight: { points: ['br', 'tr'] },
    rightTop: { points: ['tl', 'tr'] },
    bottomRight: { points: ['tr', 'br'] },
    rightBottom: { points: ['bl', 'br'] },
    bottomLeft: { points: ['tl', 'bl'] },
    leftBottom: { points: ['br', 'bl'] },
  },
  i$ = {
    topLeft: { points: ['bl', 'tc'] },
    leftTop: { points: ['tr', 'cl'] },
    topRight: { points: ['br', 'tc'] },
    rightTop: { points: ['tl', 'cr'] },
    bottomRight: { points: ['tr', 'bc'] },
    rightBottom: { points: ['bl', 'cr'] },
    bottomLeft: { points: ['tl', 'bc'] },
    leftBottom: { points: ['br', 'cl'] },
  },
  o$ = new Set([
    'topLeft',
    'topRight',
    'bottomLeft',
    'bottomRight',
    'leftTop',
    'leftBottom',
    'rightTop',
    'rightBottom',
  ])
function a$(e) {
  const {
      arrowWidth: t,
      autoAdjustOverflow: n,
      arrowPointAtCenter: r,
      offset: i,
      borderRadius: o,
      visibleFirst: a,
    } = e,
    s = t / 2,
    l = {}
  return (
    Object.keys(qv).forEach((u) => {
      const c = (r && i$[u]) || qv[u],
        f = Object.assign(Object.assign({}, c), {
          offset: [0, 0],
          dynamicInset: !0,
        })
      switch (((l[u] = f), o$.has(u) && (f.autoArrow = !1), u)) {
        case 'top':
        case 'topLeft':
        case 'topRight':
          f.offset[1] = -s - i
          break
        case 'bottom':
        case 'bottomLeft':
        case 'bottomRight':
          f.offset[1] = s + i
          break
        case 'left':
        case 'leftTop':
        case 'leftBottom':
          f.offset[0] = -s - i
          break
        case 'right':
        case 'rightTop':
        case 'rightBottom':
          f.offset[0] = s + i
          break
      }
      const d = WC({ contentRadius: o, limitVerticalRadius: !0 })
      if (r)
        switch (u) {
          case 'topLeft':
          case 'bottomLeft':
            f.offset[0] = -d.arrowOffsetHorizontal - s
            break
          case 'topRight':
          case 'bottomRight':
            f.offset[0] = d.arrowOffsetHorizontal + s
            break
          case 'leftTop':
          case 'rightTop':
            f.offset[1] = -d.arrowOffsetHorizontal * 2 + s
            break
          case 'leftBottom':
          case 'rightBottom':
            f.offset[1] = d.arrowOffsetHorizontal * 2 - s
            break
        }
      ;(f.overflow = r$(u, d, t, n)), a && (f.htmlRegion = 'visibleFirst')
    }),
    l
  )
}
const s$ = (e) => {
    const {
      componentCls: t,
      tooltipMaxWidth: n,
      tooltipColor: r,
      tooltipBg: i,
      tooltipBorderRadius: o,
      zIndexPopup: a,
      controlHeight: s,
      boxShadowSecondary: l,
      paddingSM: u,
      paddingXS: c,
    } = e
    return [
      {
        [t]: Object.assign(
          Object.assign(
            Object.assign(Object.assign({}, Kh(e)), {
              position: 'absolute',
              zIndex: a,
              display: 'block',
              width: 'max-content',
              maxWidth: n,
              visibility: 'visible',
              '--valid-offset-x':
                'var(--arrow-offset-horizontal, var(--arrow-x))',
              transformOrigin: [
                'var(--valid-offset-x, 50%)',
                'var(--arrow-y, 50%)',
              ].join(' '),
              '&-hidden': { display: 'none' },
              '--antd-arrow-background-color': i,
              [`${t}-inner`]: {
                minWidth: '1em',
                minHeight: s,
                padding: `${ye(e.calc(u).div(2).equal())} ${ye(c)}`,
                color: r,
                textAlign: 'start',
                textDecoration: 'none',
                wordWrap: 'break-word',
                backgroundColor: i,
                borderRadius: o,
                boxShadow: l,
                boxSizing: 'border-box',
              },
              [[
                '&-placement-left',
                '&-placement-leftTop',
                '&-placement-leftBottom',
                '&-placement-right',
                '&-placement-rightTop',
                '&-placement-rightBottom',
              ].join(',')]: { [`${t}-inner`]: { borderRadius: e.min(o, UC) } },
              [`${t}-content`]: { position: 'relative' },
            }),
            KT(e, (f, d) => {
              let { darkColor: g } = d
              return {
                [`&${t}-${f}`]: {
                  [`${t}-inner`]: { backgroundColor: g },
                  [`${t}-arrow`]: { '--antd-arrow-background-color': g },
                },
              }
            }),
          ),
          { '&-rtl': { direction: 'rtl' } },
        ),
      },
      n$(e, 'var(--antd-arrow-background-color)'),
      {
        [`${t}-pure`]: {
          position: 'relative',
          maxWidth: 'none',
          margin: e.sizePopupArrow,
        },
      },
    ]
  },
  l$ = (e) =>
    Object.assign(
      Object.assign(
        { zIndexPopup: e.zIndexPopupBase + 70 },
        WC({ contentRadius: e.borderRadius, limitVerticalRadius: !0 }),
      ),
      e$(Yi(e, { borderRadiusOuter: Math.min(e.borderRadiusOuter, 4) })),
    ),
  KC = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0
    return Gs(
      'Tooltip',
      (r) => {
        const {
            borderRadius: i,
            colorTextLightSolid: o,
            colorBgSpotlight: a,
          } = r,
          s = Yi(r, {
            tooltipMaxWidth: 250,
            tooltipColor: o,
            tooltipBorderRadius: i,
            tooltipBg: a,
          })
        return [s$(s), IC(r, 'zoom-big-fast')]
      },
      l$,
      { resetStyle: !1, injectStyle: t },
    )(e)
  },
  u$ = ju.map((e) => `${e}-inverse`),
  c$ = ['success', 'processing', 'error', 'default', 'warning']
function f$(e) {
  return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0)
    ? [].concat(J(u$), J(ju)).includes(e)
    : ju.includes(e)
}
function E5(e) {
  return c$.includes(e)
}
function qC(e, t) {
  const n = f$(t),
    r = oe({ [`${e}-${t}`]: t && n }),
    i = {},
    o = {}
  return (
    t && !n && ((i.background = t), (o['--antd-arrow-background-color'] = t)),
    { className: r, overlayStyle: i, arrowStyle: o }
  )
}
const d$ = (e) => {
  const {
      prefixCls: t,
      className: n,
      placement: r = 'top',
      title: i,
      color: o,
      overlayInnerStyle: a,
    } = e,
    { getPrefixCls: s } = p.useContext(dn),
    l = s('tooltip', t),
    [u, c, f] = KC(l),
    d = qC(l, o),
    g = d.arrowStyle,
    y = Object.assign(Object.assign({}, a), d.overlayStyle),
    S = oe(c, f, l, `${l}-pure`, `${l}-placement-${r}`, n, d.className)
  return u(
    p.createElement(
      'div',
      { className: S, style: g },
      p.createElement('div', { className: `${l}-arrow` }),
      p.createElement(
        BC,
        Object.assign({}, e, {
          className: c,
          prefixCls: l,
          overlayInnerStyle: y,
        }),
        i,
      ),
    ),
  )
}
var p$ = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const h$ = p.forwardRef((e, t) => {
    var n, r
    const {
        prefixCls: i,
        openClassName: o,
        getTooltipContainer: a,
        overlayClassName: s,
        color: l,
        overlayInnerStyle: u,
        children: c,
        afterOpenChange: f,
        afterVisibleChange: d,
        destroyTooltipOnHide: g,
        arrow: y = !0,
        title: S,
        overlay: C,
        builtinPlacements: v,
        arrowPointAtCenter: h = !1,
        autoAdjustOverflow: m = !0,
      } = e,
      w = !!y,
      [, b] = pa(),
      {
        getPopupContainer: x,
        getPrefixCls: E,
        direction: k,
      } = p.useContext(dn),
      O = US(),
      I = p.useRef(null),
      L = () => {
        var Y
        ;(Y = I.current) === null || Y === void 0 || Y.forceAlign()
      }
    p.useImperativeHandle(t, () => {
      var Y
      return {
        forceAlign: L,
        forcePopupAlign: () => {
          O.deprecated(!1, 'forcePopupAlign', 'forceAlign'), L()
        },
        nativeElement:
          (Y = I.current) === null || Y === void 0 ? void 0 : Y.nativeElement,
      }
    })
    const [z, A] = Ja(!1, {
        value: (n = e.open) !== null && n !== void 0 ? n : e.visible,
        defaultValue:
          (r = e.defaultOpen) !== null && r !== void 0 ? r : e.defaultVisible,
      }),
      F = !S && !C && S !== 0,
      V = (Y) => {
        var Fe, qe
        A(F ? !1 : Y),
          F ||
            ((Fe = e.onOpenChange) === null || Fe === void 0 || Fe.call(e, Y),
            (qe = e.onVisibleChange) === null || qe === void 0 || qe.call(e, Y))
      },
      M = p.useMemo(() => {
        var Y, Fe
        let qe = h
        return (
          typeof y == 'object' &&
            (qe =
              (Fe =
                (Y = y.pointAtCenter) !== null && Y !== void 0
                  ? Y
                  : y.arrowPointAtCenter) !== null && Fe !== void 0
                ? Fe
                : h),
          v ||
            a$({
              arrowPointAtCenter: qe,
              autoAdjustOverflow: m,
              arrowWidth: w ? b.sizePopupArrow : 0,
              borderRadius: b.borderRadius,
              offset: b.marginXXS,
              visibleFirst: !0,
            })
        )
      }, [h, y, v, b]),
      T = p.useMemo(() => (S === 0 ? S : C || S || ''), [C, S]),
      P = p.createElement(EI, { space: !0 }, typeof T == 'function' ? T() : T),
      {
        getPopupContainer: R,
        placement: N = 'top',
        mouseEnterDelay: j = 0.1,
        mouseLeaveDelay: H = 0.1,
        overlayStyle: K,
        rootClassName: D,
      } = e,
      G = p$(e, [
        'getPopupContainer',
        'placement',
        'mouseEnterDelay',
        'mouseLeaveDelay',
        'overlayStyle',
        'rootClassName',
      ]),
      re = E('tooltip', i),
      ne = E(),
      he = e['data-popover-inject']
    let pe = z
    !('open' in e) && !('visible' in e) && F && (pe = !1)
    const we =
        p.isValidElement(c) && !AO(c) ? c : p.createElement('span', null, c),
      ke = we.props,
      be =
        !ke.className || typeof ke.className == 'string'
          ? oe(ke.className, o || `${re}-open`)
          : ke.className,
      [_e, Se, Ke] = KC(re, !he),
      Te = qC(re, l),
      Ze = Te.arrowStyle,
      me = Object.assign(Object.assign({}, u), Te.overlayStyle),
      lt = oe(s, { [`${re}-rtl`]: k === 'rtl' }, Te.className, D, Se, Ke),
      [ge, le] = kC('Tooltip', G.zIndex),
      He = p.createElement(
        JI,
        Object.assign({}, G, {
          zIndex: ge,
          showArrow: w,
          placement: N,
          mouseEnterDelay: j,
          mouseLeaveDelay: H,
          prefixCls: re,
          overlayClassName: lt,
          overlayStyle: Object.assign(Object.assign({}, Ze), K),
          getTooltipContainer: R || a || x,
          ref: I,
          builtinPlacements: M,
          overlay: P,
          visible: pe,
          onVisibleChange: V,
          afterVisibleChange: f ?? d,
          overlayInnerStyle: me,
          arrowContent: p.createElement('span', {
            className: `${re}-arrow-content`,
          }),
          motion: {
            motionName: KO(ne, 'zoom-big-fast', e.transitionName),
            motionDeadline: 1e3,
          },
          destroyTooltipOnHide: !!g,
        }),
        pe ? Qs(we, { className: be }) : we,
      )
    return _e(p.createElement(EC.Provider, { value: le }, He))
  }),
  GC = h$
GC._InternalPanelDoNotUseOrYouWillBeFired = d$
var XC = p.createContext(null)
function QC(e, t) {
  return e === void 0 ? null : ''.concat(e, '-').concat(t)
}
function YC(e) {
  var t = p.useContext(XC)
  return QC(t, e)
}
var m$ = ['children', 'locked'],
  sr = p.createContext(null)
function g$(e, t) {
  var n = _({}, e)
  return (
    Object.keys(t).forEach(function (r) {
      var i = t[r]
      i !== void 0 && (n[r] = i)
    }),
    n
  )
}
function Fs(e) {
  var t = e.children,
    n = e.locked,
    r = De(e, m$),
    i = p.useContext(sr),
    o = bc(
      function () {
        return g$(i, r)
      },
      [i, r],
      function (a, s) {
        return !n && (a[0] !== s[0] || !Rs(a[1], s[1], !0))
      },
    )
  return p.createElement(sr.Provider, { value: o }, t)
}
var v$ = [],
  ZC = p.createContext(null)
function Mc() {
  return p.useContext(ZC)
}
var JC = p.createContext(v$)
function ma(e) {
  var t = p.useContext(JC)
  return p.useMemo(
    function () {
      return e !== void 0 ? [].concat(J(t), [e]) : t
    },
    [t, e],
  )
}
var ew = p.createContext(null),
  Xh = p.createContext({})
function Gv(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
  if (TC(e)) {
    var n = e.nodeName.toLowerCase(),
      r =
        ['input', 'select', 'textarea', 'button'].includes(n) ||
        e.isContentEditable ||
        (n === 'a' && !!e.getAttribute('href')),
      i = e.getAttribute('tabindex'),
      o = Number(i),
      a = null
    return (
      i && !Number.isNaN(o) ? (a = o) : r && a === null && (a = 0),
      r && e.disabled && (a = null),
      a !== null && (a >= 0 || (t && a < 0))
    )
  }
  return !1
}
function y$(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1,
    n = J(e.querySelectorAll('*')).filter(function (r) {
      return Gv(r, t)
    })
  return Gv(e, t) && n.unshift(e), n
}
var Op = ee.LEFT,
  Rp = ee.RIGHT,
  Ip = ee.UP,
  ru = ee.DOWN,
  iu = ee.ENTER,
  tw = ee.ESC,
  Na = ee.HOME,
  _a = ee.END,
  Xv = [Ip, ru, Op, Rp]
function S$(e, t, n, r) {
  var i,
    o = 'prev',
    a = 'next',
    s = 'children',
    l = 'parent'
  if (e === 'inline' && r === iu) return { inlineTrigger: !0 }
  var u = $($({}, Ip, o), ru, a),
    c = $($($($({}, Op, n ? a : o), Rp, n ? o : a), ru, s), iu, s),
    f = $(
      $($($($($({}, Ip, o), ru, a), iu, s), tw, l), Op, n ? s : l),
      Rp,
      n ? l : s,
    ),
    d = {
      inline: u,
      horizontal: c,
      vertical: f,
      inlineSub: u,
      horizontalSub: f,
      verticalSub: f,
    },
    g =
      (i = d[''.concat(e).concat(t ? '' : 'Sub')]) === null || i === void 0
        ? void 0
        : i[r]
  switch (g) {
    case o:
      return { offset: -1, sibling: !0 }
    case a:
      return { offset: 1, sibling: !0 }
    case l:
      return { offset: -1, sibling: !1 }
    case s:
      return { offset: 1, sibling: !1 }
    default:
      return null
  }
}
function C$(e) {
  for (var t = e; t; ) {
    if (t.getAttribute('data-menu-list')) return t
    t = t.parentElement
  }
  return null
}
function w$(e, t) {
  for (var n = e || document.activeElement; n; ) {
    if (t.has(n)) return n
    n = n.parentElement
  }
  return null
}
function Qh(e, t) {
  var n = y$(e, !0)
  return n.filter(function (r) {
    return t.has(r)
  })
}
function Qv(e, t, n) {
  var r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1
  if (!e) return null
  var i = Qh(e, t),
    o = i.length,
    a = i.findIndex(function (s) {
      return n === s
    })
  return (
    r < 0 ? (a === -1 ? (a = o - 1) : (a -= 1)) : r > 0 && (a += 1),
    (a = (a + o) % o),
    i[a]
  )
}
var $p = function (t, n) {
  var r = new Set(),
    i = new Map(),
    o = new Map()
  return (
    t.forEach(function (a) {
      var s = document.querySelector("[data-menu-id='".concat(QC(n, a), "']"))
      s && (r.add(s), o.set(s, a), i.set(a, s))
    }),
    { elements: r, key2element: i, element2key: o }
  )
}
function b$(e, t, n, r, i, o, a, s, l, u) {
  var c = p.useRef(),
    f = p.useRef()
  f.current = t
  var d = function () {
    Mr.cancel(c.current)
  }
  return (
    p.useEffect(function () {
      return function () {
        d()
      }
    }, []),
    function (g) {
      var y = g.which
      if ([].concat(Xv, [iu, tw, Na, _a]).includes(y)) {
        var S = o(),
          C = $p(S, r),
          v = C,
          h = v.elements,
          m = v.key2element,
          w = v.element2key,
          b = m.get(t),
          x = w$(b, h),
          E = w.get(x),
          k = S$(e, a(E, !0).length === 1, n, y)
        if (!k && y !== Na && y !== _a) return
        ;(Xv.includes(y) || [Na, _a].includes(y)) && g.preventDefault()
        var O = function (T) {
          if (T) {
            var P = T,
              R = T.querySelector('a')
            R != null && R.getAttribute('href') && (P = R)
            var N = w.get(T)
            s(N),
              d(),
              (c.current = Mr(function () {
                f.current === N && P.focus()
              }))
          }
        }
        if ([Na, _a].includes(y) || k.sibling || !x) {
          var I
          !x || e === 'inline' ? (I = i.current) : (I = C$(x))
          var L,
            z = Qh(I, h)
          y === Na
            ? (L = z[0])
            : y === _a
              ? (L = z[z.length - 1])
              : (L = Qv(I, h, x, k.offset)),
            O(L)
        } else if (k.inlineTrigger) l(E)
        else if (k.offset > 0)
          l(E, !0),
            d(),
            (c.current = Mr(function () {
              C = $p(S, r)
              var M = x.getAttribute('aria-controls'),
                T = document.getElementById(M),
                P = Qv(T, C.elements)
              O(P)
            }, 5))
        else if (k.offset < 0) {
          var A = a(E, !0),
            F = A[A.length - 2],
            V = m.get(F)
          l(F, !1), O(V)
        }
      }
      u == null || u(g)
    }
  )
}
function x$(e) {
  Promise.resolve().then(e)
}
var Yh = '__RC_UTIL_PATH_SPLIT__',
  Yv = function (t) {
    return t.join(Yh)
  },
  E$ = function (t) {
    return t.split(Yh)
  },
  Mp = 'rc-menu-more'
function P$() {
  var e = p.useState({}),
    t = B(e, 2),
    n = t[1],
    r = p.useRef(new Map()),
    i = p.useRef(new Map()),
    o = p.useState([]),
    a = B(o, 2),
    s = a[0],
    l = a[1],
    u = p.useRef(0),
    c = p.useRef(!1),
    f = function () {
      c.current || n({})
    },
    d = p.useCallback(function (m, w) {
      var b = Yv(w)
      i.current.set(b, m), r.current.set(m, b), (u.current += 1)
      var x = u.current
      x$(function () {
        x === u.current && f()
      })
    }, []),
    g = p.useCallback(function (m, w) {
      var b = Yv(w)
      i.current.delete(b), r.current.delete(m)
    }, []),
    y = p.useCallback(function (m) {
      l(m)
    }, []),
    S = p.useCallback(
      function (m, w) {
        var b = r.current.get(m) || '',
          x = E$(b)
        return w && s.includes(x[0]) && x.unshift(Mp), x
      },
      [s],
    ),
    C = p.useCallback(
      function (m, w) {
        return m
          .filter(function (b) {
            return b !== void 0
          })
          .some(function (b) {
            var x = S(b, !0)
            return x.includes(w)
          })
      },
      [S],
    ),
    v = function () {
      var w = J(r.current.keys())
      return s.length && w.push(Mp), w
    },
    h = p.useCallback(function (m) {
      var w = ''.concat(r.current.get(m)).concat(Yh),
        b = new Set()
      return (
        J(i.current.keys()).forEach(function (x) {
          x.startsWith(w) && b.add(i.current.get(x))
        }),
        b
      )
    }, [])
  return (
    p.useEffect(function () {
      return function () {
        c.current = !0
      }
    }, []),
    {
      registerPath: d,
      unregisterPath: g,
      refreshOverflowKeys: y,
      isSubPathKey: C,
      getKeyPath: S,
      getKeys: v,
      getSubPathKeys: h,
    }
  )
}
function Ha(e) {
  var t = p.useRef(e)
  t.current = e
  var n = p.useCallback(function () {
    for (var r, i = arguments.length, o = new Array(i), a = 0; a < i; a++)
      o[a] = arguments[a]
    return (r = t.current) === null || r === void 0
      ? void 0
      : r.call.apply(r, [t].concat(o))
  }, [])
  return e ? n : void 0
}
var k$ = Math.random().toFixed(5).toString().slice(2),
  Zv = 0
function T$(e) {
  var t = Ja(e, { value: e }),
    n = B(t, 2),
    r = n[0],
    i = n[1]
  return (
    p.useEffect(function () {
      Zv += 1
      var o = ''.concat(k$, '-').concat(Zv)
      i('rc-menu-uuid-'.concat(o))
    }, []),
    r
  )
}
function nw(e, t, n, r) {
  var i = p.useContext(sr),
    o = i.activeKey,
    a = i.onActive,
    s = i.onInactive,
    l = { active: o === e }
  return (
    t ||
      ((l.onMouseEnter = function (u) {
        n == null || n({ key: e, domEvent: u }), a(e)
      }),
      (l.onMouseLeave = function (u) {
        r == null || r({ key: e, domEvent: u }), s(e)
      })),
    l
  )
}
function rw(e) {
  var t = p.useContext(sr),
    n = t.mode,
    r = t.rtl,
    i = t.inlineIndent
  if (n !== 'inline') return null
  var o = e
  return r ? { paddingRight: o * i } : { paddingLeft: o * i }
}
function iw(e) {
  var t = e.icon,
    n = e.props,
    r = e.children,
    i
  return t === null || t === !1
    ? null
    : (typeof t == 'function'
        ? (i = p.createElement(t, _({}, n)))
        : typeof t != 'boolean' && (i = t),
      i || r || null)
}
var O$ = ['item']
function Vu(e) {
  var t = e.item,
    n = De(e, O$)
  return (
    Object.defineProperty(n, 'item', {
      get: function () {
        return (
          tn(
            !1,
            '`info.item` is deprecated since we will move to function component that not provides React Node instance in future.',
          ),
          t
        )
      },
    }),
    n
  )
}
var R$ = ['title', 'attribute', 'elementRef'],
  I$ = [
    'style',
    'className',
    'eventKey',
    'warnKey',
    'disabled',
    'itemIcon',
    'children',
    'role',
    'onMouseEnter',
    'onMouseLeave',
    'onClick',
    'onKeyDown',
    'onFocus',
  ],
  $$ = ['active'],
  M$ = (function (e) {
    wi(n, e)
    var t = bi(n)
    function n() {
      return Vt(this, n), t.apply(this, arguments)
    }
    return (
      Bt(n, [
        {
          key: 'render',
          value: function () {
            var i = this.props,
              o = i.title,
              a = i.attribute,
              s = i.elementRef,
              l = De(i, R$),
              u = io(l, [
                'eventKey',
                'popupClassName',
                'popupOffset',
                'onTitleClick',
              ])
            return (
              tn(
                !a,
                '`attribute` of Menu.Item is deprecated. Please pass attribute directly.',
              ),
              p.createElement(
                _r.Item,
                ce({}, a, { title: typeof o == 'string' ? o : void 0 }, u, {
                  ref: s,
                }),
              )
            )
          },
        },
      ]),
      n
    )
  })(p.Component),
  N$ = p.forwardRef(function (e, t) {
    var n = e.style,
      r = e.className,
      i = e.eventKey
    e.warnKey
    var o = e.disabled,
      a = e.itemIcon,
      s = e.children,
      l = e.role,
      u = e.onMouseEnter,
      c = e.onMouseLeave,
      f = e.onClick,
      d = e.onKeyDown,
      g = e.onFocus,
      y = De(e, I$),
      S = YC(i),
      C = p.useContext(sr),
      v = C.prefixCls,
      h = C.onItemClick,
      m = C.disabled,
      w = C.overflowDisabled,
      b = C.itemIcon,
      x = C.selectedKeys,
      E = C.onActive,
      k = p.useContext(Xh),
      O = k._internalRenderMenuItem,
      I = ''.concat(v, '-item'),
      L = p.useRef(),
      z = p.useRef(),
      A = m || o,
      F = xc(t, z),
      V = ma(i),
      M = function (pe) {
        return {
          key: i,
          keyPath: J(V).reverse(),
          item: L.current,
          domEvent: pe,
        }
      },
      T = a || b,
      P = nw(i, A, u, c),
      R = P.active,
      N = De(P, $$),
      j = x.includes(i),
      H = rw(V.length),
      K = function (pe) {
        if (!A) {
          var we = M(pe)
          f == null || f(Vu(we)), h(we)
        }
      },
      D = function (pe) {
        if ((d == null || d(pe), pe.which === ee.ENTER)) {
          var we = M(pe)
          f == null || f(Vu(we)), h(we)
        }
      },
      G = function (pe) {
        E(i), g == null || g(pe)
      },
      re = {}
    e.role === 'option' && (re['aria-selected'] = j)
    var ne = p.createElement(
      M$,
      ce(
        {
          ref: L,
          elementRef: F,
          role: l === null ? 'none' : l || 'menuitem',
          tabIndex: o ? null : -1,
          'data-menu-id': w && S ? null : S,
        },
        y,
        N,
        re,
        {
          component: 'li',
          'aria-disabled': o,
          style: _(_({}, H), n),
          className: oe(
            I,
            $(
              $(
                $({}, ''.concat(I, '-active'), R),
                ''.concat(I, '-selected'),
                j,
              ),
              ''.concat(I, '-disabled'),
              A,
            ),
            r,
          ),
          onClick: K,
          onKeyDown: D,
          onFocus: G,
        },
      ),
      s,
      p.createElement(iw, {
        props: _(_({}, e), {}, { isSelected: j }),
        icon: T,
      }),
    )
    return O && (ne = O(ne, e, { selected: j })), ne
  })
function _$(e, t) {
  var n = e.eventKey,
    r = Mc(),
    i = ma(n)
  return (
    p.useEffect(
      function () {
        if (r)
          return (
            r.registerPath(n, i),
            function () {
              r.unregisterPath(n, i)
            }
          )
      },
      [i],
    ),
    r ? null : p.createElement(N$, ce({}, e, { ref: t }))
  )
}
const Nc = p.forwardRef(_$)
var L$ = ['className', 'children'],
  A$ = function (t, n) {
    var r = t.className,
      i = t.children,
      o = De(t, L$),
      a = p.useContext(sr),
      s = a.prefixCls,
      l = a.mode,
      u = a.rtl
    return p.createElement(
      'ul',
      ce(
        {
          className: oe(
            s,
            u && ''.concat(s, '-rtl'),
            ''.concat(s, '-sub'),
            ''.concat(s, '-').concat(l === 'inline' ? 'inline' : 'vertical'),
            r,
          ),
          role: 'menu',
        },
        o,
        { 'data-menu-list': !0, ref: n },
      ),
      i,
    )
  },
  Zh = p.forwardRef(A$)
Zh.displayName = 'SubMenuList'
function Jh(e, t) {
  return Qi(e).map(function (n, r) {
    if (p.isValidElement(n)) {
      var i,
        o,
        a = n.key,
        s =
          (i = (o = n.props) === null || o === void 0 ? void 0 : o.eventKey) !==
            null && i !== void 0
            ? i
            : a,
        l = s == null
      l && (s = 'tmp_key-'.concat([].concat(J(t), [r]).join('-')))
      var u = { key: s, eventKey: s }
      return p.cloneElement(n, u)
    }
    return n
  })
}
var Gt = { adjustX: 1, adjustY: 1 },
  F$ = {
    topLeft: { points: ['bl', 'tl'], overflow: Gt },
    topRight: { points: ['br', 'tr'], overflow: Gt },
    bottomLeft: { points: ['tl', 'bl'], overflow: Gt },
    bottomRight: { points: ['tr', 'br'], overflow: Gt },
    leftTop: { points: ['tr', 'tl'], overflow: Gt },
    leftBottom: { points: ['br', 'bl'], overflow: Gt },
    rightTop: { points: ['tl', 'tr'], overflow: Gt },
    rightBottom: { points: ['bl', 'br'], overflow: Gt },
  },
  j$ = {
    topLeft: { points: ['bl', 'tl'], overflow: Gt },
    topRight: { points: ['br', 'tr'], overflow: Gt },
    bottomLeft: { points: ['tl', 'bl'], overflow: Gt },
    bottomRight: { points: ['tr', 'br'], overflow: Gt },
    rightTop: { points: ['tr', 'tl'], overflow: Gt },
    rightBottom: { points: ['br', 'bl'], overflow: Gt },
    leftTop: { points: ['tl', 'tr'], overflow: Gt },
    leftBottom: { points: ['bl', 'br'], overflow: Gt },
  }
function ow(e, t, n) {
  if (t) return t
  if (n) return n[e] || n.other
}
var z$ = {
  horizontal: 'bottomLeft',
  vertical: 'rightTop',
  'vertical-left': 'rightTop',
  'vertical-right': 'leftTop',
}
function D$(e) {
  var t = e.prefixCls,
    n = e.visible,
    r = e.children,
    i = e.popup,
    o = e.popupStyle,
    a = e.popupClassName,
    s = e.popupOffset,
    l = e.disabled,
    u = e.mode,
    c = e.onVisibleChange,
    f = p.useContext(sr),
    d = f.getPopupContainer,
    g = f.rtl,
    y = f.subMenuOpenDelay,
    S = f.subMenuCloseDelay,
    C = f.builtinPlacements,
    v = f.triggerSubMenuAction,
    h = f.forceSubMenuRender,
    m = f.rootClassName,
    w = f.motion,
    b = f.defaultMotions,
    x = p.useState(!1),
    E = B(x, 2),
    k = E[0],
    O = E[1],
    I = _(g ? _({}, j$) : _({}, F$), C),
    L = z$[u],
    z = ow(u, w, b),
    A = p.useRef(z)
  u !== 'inline' && (A.current = z)
  var F = _(
      _({}, A.current),
      {},
      {
        leavedClassName: ''.concat(t, '-hidden'),
        removeOnLeave: !1,
        motionAppear: !0,
      },
    ),
    V = p.useRef()
  return (
    p.useEffect(
      function () {
        return (
          (V.current = Mr(function () {
            O(n)
          })),
          function () {
            Mr.cancel(V.current)
          }
        )
      },
      [n],
    ),
    p.createElement(
      VC,
      {
        prefixCls: t,
        popupClassName: oe(
          ''.concat(t, '-popup'),
          $({}, ''.concat(t, '-rtl'), g),
          a,
          m,
        ),
        stretch: u === 'horizontal' ? 'minWidth' : null,
        getPopupContainer: d,
        builtinPlacements: I,
        popupPlacement: L,
        popupVisible: k,
        popup: i,
        popupStyle: o,
        popupAlign: s && { offset: s },
        action: l ? [] : [v],
        mouseEnterDelay: y,
        mouseLeaveDelay: S,
        onPopupVisibleChange: c,
        forceRender: h,
        popupMotion: F,
        fresh: !0,
      },
      r,
    )
  )
}
function H$(e) {
  var t = e.id,
    n = e.open,
    r = e.keyPath,
    i = e.children,
    o = 'inline',
    a = p.useContext(sr),
    s = a.prefixCls,
    l = a.forceSubMenuRender,
    u = a.motion,
    c = a.defaultMotions,
    f = a.mode,
    d = p.useRef(!1)
  d.current = f === o
  var g = p.useState(!d.current),
    y = B(g, 2),
    S = y[0],
    C = y[1],
    v = d.current ? n : !1
  p.useEffect(
    function () {
      d.current && C(!1)
    },
    [f],
  )
  var h = _({}, ow(o, u, c))
  r.length > 1 && (h.motionAppear = !1)
  var m = h.onVisibleChanged
  return (
    (h.onVisibleChanged = function (w) {
      return !d.current && !w && C(!0), m == null ? void 0 : m(w)
    }),
    S
      ? null
      : p.createElement(
          Fs,
          { mode: o, locked: !d.current },
          p.createElement(
            $c,
            ce({ visible: v }, h, {
              forceRender: l,
              removeOnLeave: !1,
              leavedClassName: ''.concat(s, '-hidden'),
            }),
            function (w) {
              var b = w.className,
                x = w.style
              return p.createElement(Zh, { id: t, className: b, style: x }, i)
            },
          ),
        )
  )
}
var V$ = [
    'style',
    'className',
    'title',
    'eventKey',
    'warnKey',
    'disabled',
    'internalPopupClose',
    'children',
    'itemIcon',
    'expandIcon',
    'popupClassName',
    'popupOffset',
    'popupStyle',
    'onClick',
    'onMouseEnter',
    'onMouseLeave',
    'onTitleClick',
    'onTitleMouseEnter',
    'onTitleMouseLeave',
  ],
  B$ = ['active'],
  U$ = p.forwardRef(function (e, t) {
    var n = e.style,
      r = e.className,
      i = e.title,
      o = e.eventKey
    e.warnKey
    var a = e.disabled,
      s = e.internalPopupClose,
      l = e.children,
      u = e.itemIcon,
      c = e.expandIcon,
      f = e.popupClassName,
      d = e.popupOffset,
      g = e.popupStyle,
      y = e.onClick,
      S = e.onMouseEnter,
      C = e.onMouseLeave,
      v = e.onTitleClick,
      h = e.onTitleMouseEnter,
      m = e.onTitleMouseLeave,
      w = De(e, V$),
      b = YC(o),
      x = p.useContext(sr),
      E = x.prefixCls,
      k = x.mode,
      O = x.openKeys,
      I = x.disabled,
      L = x.overflowDisabled,
      z = x.activeKey,
      A = x.selectedKeys,
      F = x.itemIcon,
      V = x.expandIcon,
      M = x.onItemClick,
      T = x.onOpenChange,
      P = x.onActive,
      R = p.useContext(Xh),
      N = R._internalRenderSubMenuItem,
      j = p.useContext(ew),
      H = j.isSubPathKey,
      K = ma(),
      D = ''.concat(E, '-submenu'),
      G = I || a,
      re = p.useRef(),
      ne = p.useRef(),
      he = u ?? F,
      pe = c ?? V,
      we = O.includes(o),
      ke = !L && we,
      be = H(A, o),
      _e = nw(o, G, h, m),
      Se = _e.active,
      Ke = De(_e, B$),
      Te = p.useState(!1),
      Ze = B(Te, 2),
      me = Ze[0],
      lt = Ze[1],
      ge = function (ct) {
        G || lt(ct)
      },
      le = function (ct) {
        ge(!0), S == null || S({ key: o, domEvent: ct })
      },
      He = function (ct) {
        ge(!1), C == null || C({ key: o, domEvent: ct })
      },
      Y = p.useMemo(
        function () {
          return Se || (k !== 'inline' ? me || H([z], o) : !1)
        },
        [k, Se, z, me, o, H],
      ),
      Fe = rw(K.length),
      qe = function (ct) {
        G ||
          (v == null || v({ key: o, domEvent: ct }),
          k === 'inline' && T(o, !we))
      },
      xe = Ha(function (ve) {
        y == null || y(Vu(ve)), M(ve)
      }),
      bt = function (ct) {
        k !== 'inline' && T(o, ct)
      },
      Tt = function () {
        P(o)
      },
      rt = b && ''.concat(b, '-popup'),
      Ot = p.createElement(
        'div',
        ce(
          {
            role: 'menuitem',
            style: Fe,
            className: ''.concat(D, '-title'),
            tabIndex: G ? null : -1,
            ref: re,
            title: typeof i == 'string' ? i : null,
            'data-menu-id': L && b ? null : b,
            'aria-expanded': ke,
            'aria-haspopup': !0,
            'aria-controls': rt,
            'aria-disabled': G,
            onClick: qe,
            onFocus: Tt,
          },
          Ke,
        ),
        i,
        p.createElement(
          iw,
          {
            icon: k !== 'horizontal' ? pe : void 0,
            props: _(_({}, e), {}, { isOpen: ke, isSubMenu: !0 }),
          },
          p.createElement('i', { className: ''.concat(D, '-arrow') }),
        ),
      ),
      vt = p.useRef(k)
    if (
      (k !== 'inline' && K.length > 1
        ? (vt.current = 'vertical')
        : (vt.current = k),
      !L)
    ) {
      var ut = vt.current
      Ot = p.createElement(
        D$,
        {
          mode: ut,
          prefixCls: D,
          visible: !s && ke && k !== 'inline',
          popupClassName: f,
          popupOffset: d,
          popupStyle: g,
          popup: p.createElement(
            Fs,
            { mode: ut === 'horizontal' ? 'vertical' : ut },
            p.createElement(Zh, { id: rt, ref: ne }, l),
          ),
          disabled: G,
          onVisibleChange: bt,
        },
        Ot,
      )
    }
    var Ve = p.createElement(
      _r.Item,
      ce({ ref: t, role: 'none' }, w, {
        component: 'li',
        style: n,
        className: oe(
          D,
          ''.concat(D, '-').concat(k),
          r,
          $(
            $(
              $($({}, ''.concat(D, '-open'), ke), ''.concat(D, '-active'), Y),
              ''.concat(D, '-selected'),
              be,
            ),
            ''.concat(D, '-disabled'),
            G,
          ),
        ),
        onMouseEnter: le,
        onMouseLeave: He,
      }),
      Ot,
      !L && p.createElement(H$, { id: rt, open: ke, keyPath: K }, l),
    )
    return (
      N && (Ve = N(Ve, e, { selected: be, active: Y, open: ke, disabled: G })),
      p.createElement(
        Fs,
        {
          onItemClick: xe,
          mode: k === 'horizontal' ? 'vertical' : k,
          itemIcon: he,
          expandIcon: pe,
        },
        Ve,
      )
    )
  }),
  _c = p.forwardRef(function (e, t) {
    var n = e.eventKey,
      r = e.children,
      i = ma(n),
      o = Jh(r, i),
      a = Mc()
    p.useEffect(
      function () {
        if (a)
          return (
            a.registerPath(n, i),
            function () {
              a.unregisterPath(n, i)
            }
          )
      },
      [i],
    )
    var s
    return (
      a ? (s = o) : (s = p.createElement(U$, ce({ ref: t }, e), o)),
      p.createElement(JC.Provider, { value: i }, s)
    )
  })
function em(e) {
  var t = e.className,
    n = e.style,
    r = p.useContext(sr),
    i = r.prefixCls,
    o = Mc()
  return o
    ? null
    : p.createElement('li', {
        role: 'separator',
        className: oe(''.concat(i, '-item-divider'), t),
        style: n,
      })
}
var W$ = ['className', 'title', 'eventKey', 'children'],
  K$ = p.forwardRef(function (e, t) {
    var n = e.className,
      r = e.title
    e.eventKey
    var i = e.children,
      o = De(e, W$),
      a = p.useContext(sr),
      s = a.prefixCls,
      l = ''.concat(s, '-item-group')
    return p.createElement(
      'li',
      ce({ ref: t, role: 'presentation' }, o, {
        onClick: function (c) {
          return c.stopPropagation()
        },
        className: oe(l, n),
      }),
      p.createElement(
        'div',
        {
          role: 'presentation',
          className: ''.concat(l, '-title'),
          title: typeof r == 'string' ? r : void 0,
        },
        r,
      ),
      p.createElement(
        'ul',
        { role: 'group', className: ''.concat(l, '-list') },
        i,
      ),
    )
  }),
  tm = p.forwardRef(function (e, t) {
    var n = e.eventKey,
      r = e.children,
      i = ma(n),
      o = Jh(r, i),
      a = Mc()
    return a ? o : p.createElement(K$, ce({ ref: t }, io(e, ['warnKey'])), o)
  }),
  q$ = ['label', 'children', 'key', 'type', 'extra']
function Np(e, t, n) {
  var r = t.item,
    i = t.group,
    o = t.submenu,
    a = t.divider
  return (e || [])
    .map(function (s, l) {
      if (s && ae(s) === 'object') {
        var u = s,
          c = u.label,
          f = u.children,
          d = u.key,
          g = u.type,
          y = u.extra,
          S = De(u, q$),
          C = d ?? 'tmp-'.concat(l)
        return f || g === 'group'
          ? g === 'group'
            ? p.createElement(i, ce({ key: C }, S, { title: c }), Np(f, t, n))
            : p.createElement(o, ce({ key: C }, S, { title: c }), Np(f, t, n))
          : g === 'divider'
            ? p.createElement(a, ce({ key: C }, S))
            : p.createElement(
                r,
                ce({ key: C }, S),
                c,
                (!!y || y === 0) &&
                  p.createElement(
                    'span',
                    { className: ''.concat(n, '-item-extra') },
                    y,
                  ),
              )
      }
      return null
    })
    .filter(function (s) {
      return s
    })
}
function Jv(e, t, n, r, i) {
  var o = e,
    a = _({ divider: em, item: Nc, group: tm, submenu: _c }, r)
  return t && (o = Np(t, a, i)), Jh(o, n)
}
var G$ = [
    'prefixCls',
    'rootClassName',
    'style',
    'className',
    'tabIndex',
    'items',
    'children',
    'direction',
    'id',
    'mode',
    'inlineCollapsed',
    'disabled',
    'disabledOverflow',
    'subMenuOpenDelay',
    'subMenuCloseDelay',
    'forceSubMenuRender',
    'defaultOpenKeys',
    'openKeys',
    'activeKey',
    'defaultActiveFirst',
    'selectable',
    'multiple',
    'defaultSelectedKeys',
    'selectedKeys',
    'onSelect',
    'onDeselect',
    'inlineIndent',
    'motion',
    'defaultMotions',
    'triggerSubMenuAction',
    'builtinPlacements',
    'itemIcon',
    'expandIcon',
    'overflowedIndicator',
    'overflowedIndicatorPopupClassName',
    'getPopupContainer',
    'onClick',
    'onOpenChange',
    'onKeyDown',
    'openAnimation',
    'openTransitionName',
    '_internalRenderMenuItem',
    '_internalRenderSubMenuItem',
    '_internalComponents',
  ],
  $i = [],
  X$ = p.forwardRef(function (e, t) {
    var n,
      r = e,
      i = r.prefixCls,
      o = i === void 0 ? 'rc-menu' : i,
      a = r.rootClassName,
      s = r.style,
      l = r.className,
      u = r.tabIndex,
      c = u === void 0 ? 0 : u,
      f = r.items,
      d = r.children,
      g = r.direction,
      y = r.id,
      S = r.mode,
      C = S === void 0 ? 'vertical' : S,
      v = r.inlineCollapsed,
      h = r.disabled,
      m = r.disabledOverflow,
      w = r.subMenuOpenDelay,
      b = w === void 0 ? 0.1 : w,
      x = r.subMenuCloseDelay,
      E = x === void 0 ? 0.1 : x,
      k = r.forceSubMenuRender,
      O = r.defaultOpenKeys,
      I = r.openKeys,
      L = r.activeKey,
      z = r.defaultActiveFirst,
      A = r.selectable,
      F = A === void 0 ? !0 : A,
      V = r.multiple,
      M = V === void 0 ? !1 : V,
      T = r.defaultSelectedKeys,
      P = r.selectedKeys,
      R = r.onSelect,
      N = r.onDeselect,
      j = r.inlineIndent,
      H = j === void 0 ? 24 : j,
      K = r.motion,
      D = r.defaultMotions,
      G = r.triggerSubMenuAction,
      re = G === void 0 ? 'hover' : G,
      ne = r.builtinPlacements,
      he = r.itemIcon,
      pe = r.expandIcon,
      we = r.overflowedIndicator,
      ke = we === void 0 ? '...' : we,
      be = r.overflowedIndicatorPopupClassName,
      _e = r.getPopupContainer,
      Se = r.onClick,
      Ke = r.onOpenChange,
      Te = r.onKeyDown
    r.openAnimation, r.openTransitionName
    var Ze = r._internalRenderMenuItem,
      me = r._internalRenderSubMenuItem,
      lt = r._internalComponents,
      ge = De(r, G$),
      le = p.useMemo(
        function () {
          return [Jv(d, f, $i, lt, o), Jv(d, f, $i, {}, o)]
        },
        [d, f, lt],
      ),
      He = B(le, 2),
      Y = He[0],
      Fe = He[1],
      qe = p.useState(!1),
      xe = B(qe, 2),
      bt = xe[0],
      Tt = xe[1],
      rt = p.useRef(),
      Ot = T$(y),
      vt = g === 'rtl',
      ut = Ja(O, {
        value: I,
        postState: function (Pe) {
          return Pe || $i
        },
      }),
      Ve = B(ut, 2),
      ve = Ve[0],
      ct = Ve[1],
      Zt = function (Pe) {
        var Oe =
          arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1
        function _t() {
          ct(Pe), Ke == null || Ke(Pe)
        }
        Oe ? Ws.flushSync(_t) : _t()
      },
      xt = p.useState(ve),
      Rt = B(xt, 2),
      lr = Rt[0],
      Vn = Rt[1],
      Ut = p.useRef(!1),
      pn = p.useMemo(
        function () {
          return (C === 'inline' || C === 'vertical') && v
            ? ['vertical', v]
            : [C, !1]
        },
        [C, v],
      ),
      Je = B(pn, 2),
      Be = Je[0],
      It = Je[1],
      Re = Be === 'inline',
      te = p.useState(Be),
      Z = B(te, 2),
      W = Z[0],
      Le = Z[1],
      $t = p.useState(It),
      Me = B($t, 2),
      Ee = Me[0],
      Mt = Me[1]
    p.useEffect(
      function () {
        Le(Be), Mt(It), Ut.current && (Re ? ct(lr) : Zt($i))
      },
      [Be, It],
    )
    var Et = p.useState(0),
      Wt = B(Et, 2),
      Bn = Wt[0],
      Hr = Wt[1],
      hn = Bn >= Y.length - 1 || W !== 'horizontal' || m
    p.useEffect(
      function () {
        Re && Vn(ve)
      },
      [ve],
    ),
      p.useEffect(function () {
        return (
          (Ut.current = !0),
          function () {
            Ut.current = !1
          }
        )
      }, [])
    var Nt = P$(),
      ur = Nt.registerPath,
      On = Nt.unregisterPath,
      Un = Nt.refreshOverflowKeys,
      it = Nt.isSubPathKey,
      Vr = Nt.getKeyPath,
      cr = Nt.getKeys,
      oo = Nt.getSubPathKeys,
      yt = p.useMemo(
        function () {
          return { registerPath: ur, unregisterPath: On }
        },
        [ur, On],
      ),
      ao = p.useMemo(
        function () {
          return { isSubPathKey: it }
        },
        [it],
      )
    p.useEffect(
      function () {
        Un(
          hn
            ? $i
            : Y.slice(Bn + 1).map(function (Ae) {
                return Ae.key
              }),
        )
      },
      [Bn, hn],
    )
    var ga = Ja(
        L || (z && ((n = Y[0]) === null || n === void 0 ? void 0 : n.key)),
        { value: L },
      ),
      fr = B(ga, 2),
      dr = fr[0],
      Ei = fr[1],
      so = Ha(function (Ae) {
        Ei(Ae)
      }),
      lo = Ha(function () {
        Ei(void 0)
      })
    p.useImperativeHandle(t, function () {
      return {
        list: rt.current,
        focus: function (Pe) {
          var Oe,
            _t = cr(),
            Lt = $p(_t, Ot),
            Wr = Lt.elements,
            Kr = Lt.key2element,
            ya = Lt.element2key,
            fo = Qh(rt.current, Wr),
            ki =
              dr ??
              (fo[0]
                ? ya.get(fo[0])
                : (Oe = Y.find(function (Oi) {
                      return !Oi.props.disabled
                    })) === null || Oe === void 0
                  ? void 0
                  : Oe.key),
            xr = Kr.get(ki)
          if (ki && xr) {
            var Ti
            xr == null ||
              (Ti = xr.focus) === null ||
              Ti === void 0 ||
              Ti.call(xr, Pe)
          }
        },
      }
    })
    var br = Ja(T || [], {
        value: P,
        postState: function (Pe) {
          return Array.isArray(Pe) ? Pe : Pe == null ? $i : [Pe]
        },
      }),
      Pi = B(br, 2),
      Wn = Pi[0],
      Kn = Pi[1],
      uo = function (Pe) {
        if (F) {
          var Oe = Pe.key,
            _t = Wn.includes(Oe),
            Lt
          M
            ? _t
              ? (Lt = Wn.filter(function (Kr) {
                  return Kr !== Oe
                }))
              : (Lt = [].concat(J(Wn), [Oe]))
            : (Lt = [Oe]),
            Kn(Lt)
          var Wr = _(_({}, Pe), {}, { selectedKeys: Lt })
          _t ? N == null || N(Wr) : R == null || R(Wr)
        }
        !M && ve.length && W !== 'inline' && Zt($i)
      },
      co = Ha(function (Ae) {
        Se == null || Se(Vu(Ae)), uo(Ae)
      }),
      mn = Ha(function (Ae, Pe) {
        var Oe = ve.filter(function (Lt) {
          return Lt !== Ae
        })
        if (Pe) Oe.push(Ae)
        else if (W !== 'inline') {
          var _t = oo(Ae)
          Oe = Oe.filter(function (Lt) {
            return !_t.has(Lt)
          })
        }
        Rs(ve, Oe, !0) || Zt(Oe, !0)
      }),
      gn = function (Pe, Oe) {
        var _t = Oe ?? !ve.includes(Pe)
        mn(Pe, _t)
      },
      Br = b$(W, dr, vt, Ot, rt, cr, Vr, Ei, gn, Te)
    p.useEffect(function () {
      Tt(!0)
    }, [])
    var Ur = p.useMemo(
        function () {
          return { _internalRenderMenuItem: Ze, _internalRenderSubMenuItem: me }
        },
        [Ze, me],
      ),
      Rn =
        W !== 'horizontal' || m
          ? Y
          : Y.map(function (Ae, Pe) {
              return p.createElement(
                Fs,
                { key: Ae.key, overflowDisabled: Pe > Bn },
                Ae,
              )
            }),
      va = p.createElement(
        _r,
        ce(
          {
            id: y,
            ref: rt,
            prefixCls: ''.concat(o, '-overflow'),
            component: 'ul',
            itemComponent: Nc,
            className: oe(
              o,
              ''.concat(o, '-root'),
              ''.concat(o, '-').concat(W),
              l,
              $(
                $({}, ''.concat(o, '-inline-collapsed'), Ee),
                ''.concat(o, '-rtl'),
                vt,
              ),
              a,
            ),
            dir: g,
            style: s,
            role: 'menu',
            tabIndex: c,
            data: Rn,
            renderRawItem: function (Pe) {
              return Pe
            },
            renderRawRest: function (Pe) {
              var Oe = Pe.length,
                _t = Oe ? Y.slice(-Oe) : null
              return p.createElement(
                _c,
                {
                  eventKey: Mp,
                  title: ke,
                  disabled: hn,
                  internalPopupClose: Oe === 0,
                  popupClassName: be,
                },
                _t,
              )
            },
            maxCount: W !== 'horizontal' || m ? _r.INVALIDATE : _r.RESPONSIVE,
            ssr: 'full',
            'data-menu-list': !0,
            onVisibleChange: function (Pe) {
              Hr(Pe)
            },
            onKeyDown: Br,
          },
          ge,
        ),
      )
    return p.createElement(
      Xh.Provider,
      { value: Ur },
      p.createElement(
        XC.Provider,
        { value: Ot },
        p.createElement(
          Fs,
          {
            prefixCls: o,
            rootClassName: a,
            mode: W,
            openKeys: ve,
            rtl: vt,
            disabled: h,
            motion: bt ? K : null,
            defaultMotions: bt ? D : null,
            activeKey: dr,
            onActive: so,
            onInactive: lo,
            selectedKeys: Wn,
            inlineIndent: H,
            subMenuOpenDelay: b,
            subMenuCloseDelay: E,
            forceSubMenuRender: k,
            builtinPlacements: ne,
            triggerSubMenuAction: re,
            getPopupContainer: _e,
            itemIcon: he,
            expandIcon: pe,
            onItemClick: co,
            onOpenChange: mn,
          },
          p.createElement(ew.Provider, { value: ao }, va),
          p.createElement(
            'div',
            { style: { display: 'none' }, 'aria-hidden': !0 },
            p.createElement(ZC.Provider, { value: yt }, Fe),
          ),
        ),
      ),
    )
  }),
  tl = X$
tl.Item = Nc
tl.SubMenu = _c
tl.ItemGroup = tm
tl.Divider = em
var Q$ = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '0 0 1024 1024', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M912 192H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 284H328c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h584c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM104 228a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0zm0 284a56 56 0 10112 0 56 56 0 10-112 0z',
          },
        },
      ],
    },
    name: 'bars',
    theme: 'outlined',
  },
  Y$ = function (t, n) {
    return p.createElement(xi, ce({}, t, { ref: n, icon: Q$ }))
  },
  Z$ = p.forwardRef(Y$),
  J$ = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 000 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z',
          },
        },
      ],
    },
    name: 'left',
    theme: 'outlined',
  },
  eM = function (t, n) {
    return p.createElement(xi, ce({}, t, { ref: n, icon: J$ }))
  },
  e0 = p.forwardRef(eM)
const tM = (e) => !isNaN(parseFloat(e)) && isFinite(e),
  aw = p.createContext({
    siderHook: { addSider: () => null, removeSider: () => null },
  }),
  nM = (e) => {
    const {
      antCls: t,
      componentCls: n,
      colorText: r,
      footerBg: i,
      headerHeight: o,
      headerPadding: a,
      headerColor: s,
      footerPadding: l,
      fontSize: u,
      bodyBg: c,
      headerBg: f,
    } = e
    return {
      [n]: {
        display: 'flex',
        flex: 'auto',
        flexDirection: 'column',
        minHeight: 0,
        background: c,
        '&, *': { boxSizing: 'border-box' },
        [`&${n}-has-sider`]: {
          flexDirection: 'row',
          [`> ${n}, > ${n}-content`]: { width: 0 },
        },
        [`${n}-header, &${n}-footer`]: { flex: '0 0 auto' },
        '&-rtl': { direction: 'rtl' },
      },
      [`${n}-header`]: {
        height: o,
        padding: a,
        color: s,
        lineHeight: ye(o),
        background: f,
        [`${t}-menu`]: { lineHeight: 'inherit' },
      },
      [`${n}-footer`]: { padding: l, color: r, fontSize: u, background: i },
      [`${n}-content`]: { flex: 'auto', color: r, minHeight: 0 },
    }
  },
  sw = (e) => {
    const {
        colorBgLayout: t,
        controlHeight: n,
        controlHeightLG: r,
        colorText: i,
        controlHeightSM: o,
        marginXXS: a,
        colorTextLightSolid: s,
        colorBgContainer: l,
      } = e,
      u = r * 1.25
    return {
      colorBgHeader: '#001529',
      colorBgBody: t,
      colorBgTrigger: '#002140',
      bodyBg: t,
      headerBg: '#001529',
      headerHeight: n * 2,
      headerPadding: `0 ${u}px`,
      headerColor: i,
      footerPadding: `${o}px ${u}px`,
      footerBg: t,
      siderBg: '#001529',
      triggerHeight: r + a * 2,
      triggerBg: '#002140',
      triggerColor: s,
      zeroTriggerWidth: r,
      zeroTriggerHeight: r,
      lightSiderBg: l,
      lightTriggerBg: l,
      lightTriggerColor: i,
    }
  },
  lw = [
    ['colorBgBody', 'bodyBg'],
    ['colorBgHeader', 'headerBg'],
    ['colorBgTrigger', 'triggerBg'],
  ],
  uw = Gs('Layout', (e) => [nM(e)], sw, { deprecatedTokens: lw }),
  rM = (e) => {
    const {
      componentCls: t,
      siderBg: n,
      motionDurationMid: r,
      motionDurationSlow: i,
      antCls: o,
      triggerHeight: a,
      triggerColor: s,
      triggerBg: l,
      headerHeight: u,
      zeroTriggerWidth: c,
      zeroTriggerHeight: f,
      borderRadius: d,
      lightSiderBg: g,
      lightTriggerColor: y,
      lightTriggerBg: S,
      bodyBg: C,
    } = e
    return {
      [t]: {
        position: 'relative',
        minWidth: 0,
        background: n,
        transition: `all ${r}, background 0s`,
        '&-has-trigger': { paddingBottom: a },
        '&-right': { order: 1 },
        [`${t}-children`]: {
          height: '100%',
          marginTop: -0.1,
          paddingTop: 0.1,
          [`${o}-menu${o}-menu-inline-collapsed`]: { width: 'auto' },
        },
        [`${t}-trigger`]: {
          position: 'fixed',
          bottom: 0,
          zIndex: 1,
          height: a,
          color: s,
          lineHeight: ye(a),
          textAlign: 'center',
          background: l,
          cursor: 'pointer',
          transition: `all ${r}`,
        },
        '&-zero-width': {
          '> *': { overflow: 'hidden' },
          [`${t}-trigger`]: {
            position: 'absolute',
            top: u,
            insetInlineEnd: e.calc(c).mul(-1).equal(),
            zIndex: 1,
            width: c,
            height: f,
            color: s,
            fontSize: e.fontSizeXL,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: n,
            borderStartStartRadius: 0,
            borderStartEndRadius: d,
            borderEndEndRadius: d,
            borderEndStartRadius: 0,
            cursor: 'pointer',
            transition: `background ${i} ease`,
            '&::after': {
              position: 'absolute',
              inset: 0,
              background: 'transparent',
              transition: `all ${i}`,
              content: '""',
            },
            '&:hover::after': { background: 'rgba(255, 255, 255, 0.2)' },
            '&-right': {
              insetInlineStart: e.calc(c).mul(-1).equal(),
              borderStartStartRadius: d,
              borderStartEndRadius: 0,
              borderEndEndRadius: 0,
              borderEndStartRadius: d,
            },
          },
        },
        '&-light': {
          background: g,
          [`${t}-trigger`]: { color: y, background: S },
          [`${t}-zero-width-trigger`]: {
            color: y,
            background: S,
            border: `1px solid ${C}`,
            borderInlineStart: 0,
          },
        },
      },
    }
  },
  iM = Gs(['Layout', 'Sider'], (e) => [rM(e)], sw, { deprecatedTokens: lw })
var oM = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const t0 = {
    xs: '479.98px',
    sm: '575.98px',
    md: '767.98px',
    lg: '991.98px',
    xl: '1199.98px',
    xxl: '1599.98px',
  },
  Lc = p.createContext({}),
  aM = (() => {
    let e = 0
    return function () {
      let t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : ''
      return (e += 1), `${t}${e}`
    }
  })(),
  cw = p.forwardRef((e, t) => {
    const {
        prefixCls: n,
        className: r,
        trigger: i,
        children: o,
        defaultCollapsed: a = !1,
        theme: s = 'dark',
        style: l = {},
        collapsible: u = !1,
        reverseArrow: c = !1,
        width: f = 200,
        collapsedWidth: d = 80,
        zeroWidthTriggerStyle: g,
        breakpoint: y,
        onCollapse: S,
        onBreakpoint: C,
      } = e,
      v = oM(e, [
        'prefixCls',
        'className',
        'trigger',
        'children',
        'defaultCollapsed',
        'theme',
        'style',
        'collapsible',
        'reverseArrow',
        'width',
        'collapsedWidth',
        'zeroWidthTriggerStyle',
        'breakpoint',
        'onCollapse',
        'onBreakpoint',
      ]),
      { siderHook: h } = p.useContext(aw),
      [m, w] = p.useState('collapsed' in e ? e.collapsed : a),
      [b, x] = p.useState(!1)
    p.useEffect(() => {
      'collapsed' in e && w(e.collapsed)
    }, [e.collapsed])
    const E = (T, P) => {
        'collapsed' in e || w(T), S == null || S(T, P)
      },
      { getPrefixCls: k } = p.useContext(dn),
      O = k('layout-sider', n),
      [I, L, z] = iM(O),
      A = p.useRef()
    ;(A.current = (T) => {
      x(T.matches),
        C == null || C(T.matches),
        m !== T.matches && E(T.matches, 'responsive')
    }),
      p.useEffect(() => {
        function T(R) {
          return A.current(R)
        }
        let P
        if (typeof window < 'u') {
          const { matchMedia: R } = window
          if (R && y && y in t0) {
            P = R(`screen and (max-width: ${t0[y]})`)
            try {
              P.addEventListener('change', T)
            } catch {
              P.addListener(T)
            }
            T(P)
          }
        }
        return () => {
          try {
            P == null || P.removeEventListener('change', T)
          } catch {
            P == null || P.removeListener(T)
          }
        }
      }, [y]),
      p.useEffect(() => {
        const T = aM('ant-sider-')
        return h.addSider(T), () => h.removeSider(T)
      }, [])
    const F = () => {
        E(!m, 'clickTrigger')
      },
      V = () => {
        const T = io(v, ['collapsed']),
          P = m ? d : f,
          R = tM(P) ? `${P}px` : String(P),
          N =
            parseFloat(String(d || 0)) === 0
              ? p.createElement(
                  'span',
                  {
                    onClick: F,
                    className: oe(
                      `${O}-zero-width-trigger`,
                      `${O}-zero-width-trigger-${c ? 'right' : 'left'}`,
                    ),
                    style: g,
                  },
                  i || p.createElement(Z$, null),
                )
              : null,
          K = {
            expanded: c ? p.createElement(Cv, null) : p.createElement(e0, null),
            collapsed: c
              ? p.createElement(e0, null)
              : p.createElement(Cv, null),
          }[m ? 'collapsed' : 'expanded'],
          D =
            i !== null
              ? N ||
                p.createElement(
                  'div',
                  {
                    className: `${O}-trigger`,
                    onClick: F,
                    style: { width: R },
                  },
                  i || K,
                )
              : null,
          G = Object.assign(Object.assign({}, l), {
            flex: `0 0 ${R}`,
            maxWidth: R,
            minWidth: R,
            width: R,
          }),
          re = oe(
            O,
            `${O}-${s}`,
            {
              [`${O}-collapsed`]: !!m,
              [`${O}-has-trigger`]: u && i !== null && !N,
              [`${O}-below`]: !!b,
              [`${O}-zero-width`]: parseFloat(R) === 0,
            },
            r,
            L,
            z,
          )
        return p.createElement(
          'aside',
          Object.assign({ className: re }, T, { style: G, ref: t }),
          p.createElement('div', { className: `${O}-children` }, o),
          u || (b && N) ? D : null,
        )
      },
      M = p.useMemo(() => ({ siderCollapsed: m }), [m])
    return I(p.createElement(Lc.Provider, { value: M }, V()))
  })
var sM = {
    icon: {
      tag: 'svg',
      attrs: { viewBox: '64 64 896 896', focusable: 'false' },
      children: [
        {
          tag: 'path',
          attrs: {
            d: 'M176 511a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0zm280 0a56 56 0 10112 0 56 56 0 10-112 0z',
          },
        },
      ],
    },
    name: 'ellipsis',
    theme: 'outlined',
  },
  lM = function (t, n) {
    return p.createElement(xi, ce({}, t, { ref: n, icon: sM }))
  },
  uM = p.forwardRef(lM)
const Bu = p.createContext({
  prefixCls: '',
  firstLevel: !0,
  inlineCollapsed: !1,
})
var cM = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
const fw = (e) => {
    const { prefixCls: t, className: n, dashed: r } = e,
      i = cM(e, ['prefixCls', 'className', 'dashed']),
      { getPrefixCls: o } = p.useContext(dn),
      a = o('menu', t),
      s = oe({ [`${a}-item-divider-dashed`]: !!r }, n)
    return p.createElement(em, Object.assign({ className: s }, i))
  },
  dw = (e) => {
    var t
    const { className: n, children: r, icon: i, title: o, danger: a } = e,
      {
        prefixCls: s,
        firstLevel: l,
        direction: u,
        disableMenuItemTitleTooltip: c,
        inlineCollapsed: f,
      } = p.useContext(Bu),
      d = (h) => {
        const m = r == null ? void 0 : r[0],
          w = p.createElement('span', { className: `${s}-title-content` }, r)
        return (!i || (p.isValidElement(r) && r.type === 'span')) &&
          r &&
          h &&
          l &&
          typeof m == 'string'
          ? p.createElement(
              'div',
              { className: `${s}-inline-collapsed-noicon` },
              m.charAt(0),
            )
          : w
      },
      { siderCollapsed: g } = p.useContext(Lc)
    let y = o
    typeof o > 'u' ? (y = l ? r : '') : o === !1 && (y = '')
    const S = { title: y }
    !g && !f && ((S.title = null), (S.open = !1))
    const C = Qi(r).length
    let v = p.createElement(
      Nc,
      Object.assign({}, io(e, ['title', 'icon', 'danger']), {
        className: oe(
          {
            [`${s}-item-danger`]: a,
            [`${s}-item-only-child`]: (i ? C + 1 : C) === 1,
          },
          n,
        ),
        title: typeof o == 'string' ? o : void 0,
      }),
      Qs(i, {
        className: oe(
          p.isValidElement(i)
            ? (t = i.props) === null || t === void 0
              ? void 0
              : t.className
            : '',
          `${s}-item-icon`,
        ),
      }),
      d(f),
    )
    return (
      c ||
        (v = p.createElement(
          GC,
          Object.assign({}, S, {
            placement: u === 'rtl' ? 'left' : 'right',
            overlayClassName: `${s}-inline-collapsed-tooltip`,
          }),
          v,
        )),
      v
    )
  },
  n0 = p.createContext(null),
  fM = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      horizontalLineHeight: r,
      colorSplit: i,
      lineWidth: o,
      lineType: a,
      itemPaddingInline: s,
    } = e
    return {
      [`${t}-horizontal`]: {
        lineHeight: r,
        border: 0,
        borderBottom: `${ye(o)} ${a} ${i}`,
        boxShadow: 'none',
        '&::after': {
          display: 'block',
          clear: 'both',
          height: 0,
          content: '"\\20"',
        },
        [`${t}-item, ${t}-submenu`]: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'bottom',
          paddingInline: s,
        },
        [`> ${t}-item:hover,
        > ${t}-item-active,
        > ${t}-submenu ${t}-submenu-title:hover`]: {
          backgroundColor: 'transparent',
        },
        [`${t}-item, ${t}-submenu-title`]: {
          transition: [`border-color ${n}`, `background ${n}`].join(','),
        },
        [`${t}-submenu-arrow`]: { display: 'none' },
      },
    }
  },
  dM = (e) => {
    let { componentCls: t, menuArrowOffset: n, calc: r } = e
    return {
      [`${t}-rtl`]: { direction: 'rtl' },
      [`${t}-submenu-rtl`]: { transformOrigin: '100% 0' },
      [`${t}-rtl${t}-vertical,
    ${t}-submenu-rtl ${t}-vertical`]: {
        [`${t}-submenu-arrow`]: {
          '&::before': {
            transform: `rotate(-45deg) translateY(${ye(r(n).mul(-1).equal())})`,
          },
          '&::after': { transform: `rotate(45deg) translateY(${ye(n)})` },
        },
      },
    }
  },
  r0 = (e) => Object.assign({}, sC(e)),
  i0 = (e, t) => {
    const {
      componentCls: n,
      itemColor: r,
      itemSelectedColor: i,
      groupTitleColor: o,
      itemBg: a,
      subMenuItemBg: s,
      itemSelectedBg: l,
      activeBarHeight: u,
      activeBarWidth: c,
      activeBarBorderWidth: f,
      motionDurationSlow: d,
      motionEaseInOut: g,
      motionEaseOut: y,
      itemPaddingInline: S,
      motionDurationMid: C,
      itemHoverColor: v,
      lineType: h,
      colorSplit: m,
      itemDisabledColor: w,
      dangerItemColor: b,
      dangerItemHoverColor: x,
      dangerItemSelectedColor: E,
      dangerItemActiveBg: k,
      dangerItemSelectedBg: O,
      popupBg: I,
      itemHoverBg: L,
      itemActiveBg: z,
      menuSubMenuBg: A,
      horizontalItemSelectedColor: F,
      horizontalItemSelectedBg: V,
      horizontalItemBorderRadius: M,
      horizontalItemHoverBg: T,
    } = e
    return {
      [`${n}-${t}, ${n}-${t} > ${n}`]: {
        color: r,
        background: a,
        [`&${n}-root:focus-visible`]: Object.assign({}, r0(e)),
        [`${n}-item-group-title`]: { color: o },
        [`${n}-submenu-selected`]: { [`> ${n}-submenu-title`]: { color: i } },
        [`${n}-item, ${n}-submenu-title`]: {
          color: r,
          [`&:not(${n}-item-disabled):focus-visible`]: Object.assign({}, r0(e)),
        },
        [`${n}-item-disabled, ${n}-submenu-disabled`]: {
          color: `${w} !important`,
        },
        [`${n}-item:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
          [`&:hover, > ${n}-submenu-title:hover`]: { color: v },
        },
        [`&:not(${n}-horizontal)`]: {
          [`${n}-item:not(${n}-item-selected)`]: {
            '&:hover': { backgroundColor: L },
            '&:active': { backgroundColor: z },
          },
          [`${n}-submenu-title`]: {
            '&:hover': { backgroundColor: L },
            '&:active': { backgroundColor: z },
          },
        },
        [`${n}-item-danger`]: {
          color: b,
          [`&${n}-item:hover`]: {
            [`&:not(${n}-item-selected):not(${n}-submenu-selected)`]: {
              color: x,
            },
          },
          [`&${n}-item:active`]: { background: k },
        },
        [`${n}-item a`]: { '&, &:hover': { color: 'inherit' } },
        [`${n}-item-selected`]: {
          color: i,
          [`&${n}-item-danger`]: { color: E },
          'a, a:hover': { color: 'inherit' },
        },
        [`& ${n}-item-selected`]: {
          backgroundColor: l,
          [`&${n}-item-danger`]: { backgroundColor: O },
        },
        [`&${n}-submenu > ${n}`]: { backgroundColor: A },
        [`&${n}-popup > ${n}`]: { backgroundColor: I },
        [`&${n}-submenu-popup > ${n}`]: { backgroundColor: I },
        [`&${n}-horizontal`]: Object.assign(
          Object.assign({}, t === 'dark' ? { borderBottom: 0 } : {}),
          {
            [`> ${n}-item, > ${n}-submenu`]: {
              top: f,
              marginTop: e.calc(f).mul(-1).equal(),
              marginBottom: 0,
              borderRadius: M,
              '&::after': {
                position: 'absolute',
                insetInline: S,
                bottom: 0,
                borderBottom: `${ye(u)} solid transparent`,
                transition: `border-color ${d} ${g}`,
                content: '""',
              },
              '&:hover, &-active, &-open': {
                background: T,
                '&::after': { borderBottomWidth: u, borderBottomColor: F },
              },
              '&-selected': {
                color: F,
                backgroundColor: V,
                '&:hover': { backgroundColor: V },
                '&::after': { borderBottomWidth: u, borderBottomColor: F },
              },
            },
          },
        ),
        [`&${n}-root`]: {
          [`&${n}-inline, &${n}-vertical`]: {
            borderInlineEnd: `${ye(f)} ${h} ${m}`,
          },
        },
        [`&${n}-inline`]: {
          [`${n}-sub${n}-inline`]: { background: s },
          [`${n}-item`]: {
            position: 'relative',
            '&::after': {
              position: 'absolute',
              insetBlock: 0,
              insetInlineEnd: 0,
              borderInlineEnd: `${ye(c)} solid ${i}`,
              transform: 'scaleY(0.0001)',
              opacity: 0,
              transition: [`transform ${C} ${y}`, `opacity ${C} ${y}`].join(
                ',',
              ),
              content: '""',
            },
            [`&${n}-item-danger`]: { '&::after': { borderInlineEndColor: E } },
          },
          [`${n}-selected, ${n}-item-selected`]: {
            '&::after': {
              transform: 'scaleY(1)',
              opacity: 1,
              transition: [`transform ${C} ${g}`, `opacity ${C} ${g}`].join(
                ',',
              ),
            },
          },
        },
      },
    }
  },
  o0 = (e) => {
    const {
        componentCls: t,
        itemHeight: n,
        itemMarginInline: r,
        padding: i,
        menuArrowSize: o,
        marginXS: a,
        itemMarginBlock: s,
        itemWidth: l,
        itemPaddingInline: u,
      } = e,
      c = e.calc(o).add(i).add(a).equal()
    return {
      [`${t}-item`]: { position: 'relative', overflow: 'hidden' },
      [`${t}-item, ${t}-submenu-title`]: {
        height: n,
        lineHeight: ye(n),
        paddingInline: u,
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        marginInline: r,
        marginBlock: s,
        width: l,
      },
      [`> ${t}-item,
            > ${t}-submenu > ${t}-submenu-title`]: {
        height: n,
        lineHeight: ye(n),
      },
      [`${t}-item-group-list ${t}-submenu-title,
            ${t}-submenu-title`]: { paddingInlineEnd: c },
    }
  },
  pM = (e) => {
    const {
        componentCls: t,
        iconCls: n,
        itemHeight: r,
        colorTextLightSolid: i,
        dropdownWidth: o,
        controlHeightLG: a,
        motionEaseOut: s,
        paddingXL: l,
        itemMarginInline: u,
        fontSizeLG: c,
        motionDurationFast: f,
        motionDurationSlow: d,
        paddingXS: g,
        boxShadowSecondary: y,
        collapsedWidth: S,
        collapsedIconSize: C,
      } = e,
      v = {
        height: r,
        lineHeight: ye(r),
        listStylePosition: 'inside',
        listStyleType: 'disc',
      }
    return [
      {
        [t]: {
          '&-inline, &-vertical': Object.assign(
            { [`&${t}-root`]: { boxShadow: 'none' } },
            o0(e),
          ),
        },
        [`${t}-submenu-popup`]: {
          [`${t}-vertical`]: Object.assign(Object.assign({}, o0(e)), {
            boxShadow: y,
          }),
        },
      },
      {
        [`${t}-submenu-popup ${t}-vertical${t}-sub`]: {
          minWidth: o,
          maxHeight: `calc(100vh - ${ye(e.calc(a).mul(2.5).equal())})`,
          padding: '0',
          overflow: 'hidden',
          borderInlineEnd: 0,
          "&:not([class*='-active'])": {
            overflowX: 'hidden',
            overflowY: 'auto',
          },
        },
      },
      {
        [`${t}-inline`]: {
          width: '100%',
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu-title`]: {
              display: 'flex',
              alignItems: 'center',
              transition: [
                `border-color ${d}`,
                `background ${d}`,
                `padding ${f} ${s}`,
              ].join(','),
              [`> ${t}-title-content`]: {
                flex: 'auto',
                minWidth: 0,
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              },
              '> *': { flex: 'none' },
            },
          },
          [`${t}-sub${t}-inline`]: {
            padding: 0,
            border: 0,
            borderRadius: 0,
            boxShadow: 'none',
            [`& > ${t}-submenu > ${t}-submenu-title`]: v,
            [`& ${t}-item-group-title`]: { paddingInlineStart: l },
          },
          [`${t}-item`]: v,
        },
      },
      {
        [`${t}-inline-collapsed`]: {
          width: S,
          [`&${t}-root`]: {
            [`${t}-item, ${t}-submenu ${t}-submenu-title`]: {
              [`> ${t}-inline-collapsed-noicon`]: {
                fontSize: c,
                textAlign: 'center',
              },
            },
          },
          [`> ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-item,
          > ${t}-item-group > ${t}-item-group-list > ${t}-submenu > ${t}-submenu-title,
          > ${t}-submenu > ${t}-submenu-title`]: {
            insetInlineStart: 0,
            paddingInline: `calc(50% - ${ye(e.calc(c).div(2).equal())} - ${ye(u)})`,
            textOverflow: 'clip',
            [`
            ${t}-submenu-arrow,
            ${t}-submenu-expand-icon
          `]: { opacity: 0 },
            [`${t}-item-icon, ${n}`]: {
              margin: 0,
              fontSize: C,
              lineHeight: ye(r),
              '+ span': { display: 'inline-block', opacity: 0 },
            },
          },
          [`${t}-item-icon, ${n}`]: { display: 'inline-block' },
          '&-tooltip': {
            pointerEvents: 'none',
            [`${t}-item-icon, ${n}`]: { display: 'none' },
            'a, a:hover': { color: i },
          },
          [`${t}-item-group-title`]: Object.assign(Object.assign({}, BT), {
            paddingInline: g,
          }),
        },
      },
    ]
  },
  a0 = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      motionDurationMid: r,
      motionEaseInOut: i,
      motionEaseOut: o,
      iconCls: a,
      iconSize: s,
      iconMarginInlineEnd: l,
    } = e
    return {
      [`${t}-item, ${t}-submenu-title`]: {
        position: 'relative',
        display: 'block',
        margin: 0,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
        transition: [
          `border-color ${n}`,
          `background ${n}`,
          `padding calc(${n} + 0.1s) ${i}`,
        ].join(','),
        [`${t}-item-icon, ${a}`]: {
          minWidth: s,
          fontSize: s,
          transition: [
            `font-size ${r} ${o}`,
            `margin ${n} ${i}`,
            `color ${n}`,
          ].join(','),
          '+ span': {
            marginInlineStart: l,
            opacity: 1,
            transition: [`opacity ${n} ${i}`, `margin ${n}`, `color ${n}`].join(
              ',',
            ),
          },
        },
        [`${t}-item-icon`]: Object.assign({}, aC()),
        [`&${t}-item-only-child`]: {
          [`> ${a}, > ${t}-item-icon`]: { marginInlineEnd: 0 },
        },
      },
      [`${t}-item-disabled, ${t}-submenu-disabled`]: {
        background: 'none !important',
        cursor: 'not-allowed',
        '&::after': { borderColor: 'transparent !important' },
        a: { color: 'inherit !important' },
        [`> ${t}-submenu-title`]: {
          color: 'inherit !important',
          cursor: 'not-allowed',
        },
      },
    }
  },
  s0 = (e) => {
    const {
      componentCls: t,
      motionDurationSlow: n,
      motionEaseInOut: r,
      borderRadius: i,
      menuArrowSize: o,
      menuArrowOffset: a,
    } = e
    return {
      [`${t}-submenu`]: {
        '&-expand-icon, &-arrow': {
          position: 'absolute',
          top: '50%',
          insetInlineEnd: e.margin,
          width: o,
          color: 'currentcolor',
          transform: 'translateY(-50%)',
          transition: `transform ${n} ${r}, opacity ${n}`,
        },
        '&-arrow': {
          '&::before, &::after': {
            position: 'absolute',
            width: e.calc(o).mul(0.6).equal(),
            height: e.calc(o).mul(0.15).equal(),
            backgroundColor: 'currentcolor',
            borderRadius: i,
            transition: [
              `background ${n} ${r}`,
              `transform ${n} ${r}`,
              `top ${n} ${r}`,
              `color ${n} ${r}`,
            ].join(','),
            content: '""',
          },
          '&::before': {
            transform: `rotate(45deg) translateY(${ye(e.calc(a).mul(-1).equal())})`,
          },
          '&::after': { transform: `rotate(-45deg) translateY(${ye(a)})` },
        },
      },
    }
  },
  hM = (e) => {
    const {
      antCls: t,
      componentCls: n,
      fontSize: r,
      motionDurationSlow: i,
      motionDurationMid: o,
      motionEaseInOut: a,
      paddingXS: s,
      padding: l,
      colorSplit: u,
      lineWidth: c,
      zIndexPopup: f,
      borderRadiusLG: d,
      subMenuItemBorderRadius: g,
      menuArrowSize: y,
      menuArrowOffset: S,
      lineType: C,
      groupTitleLineHeight: v,
      groupTitleFontSize: h,
    } = e
    return [
      {
        '': {
          [n]: Object.assign(Object.assign({}, uv()), {
            '&-hidden': { display: 'none' },
          }),
        },
        [`${n}-submenu-hidden`]: { display: 'none' },
      },
      {
        [n]: Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign(Object.assign({}, Kh(e)), uv()), {
                  marginBottom: 0,
                  paddingInlineStart: 0,
                  fontSize: r,
                  lineHeight: 0,
                  listStyle: 'none',
                  outline: 'none',
                  transition: `width ${i} cubic-bezier(0.2, 0, 0, 1) 0s`,
                  'ul, ol': { margin: 0, padding: 0, listStyle: 'none' },
                  '&-overflow': {
                    display: 'flex',
                    [`${n}-item`]: { flex: 'none' },
                  },
                  [`${n}-item, ${n}-submenu, ${n}-submenu-title`]: {
                    borderRadius: e.itemBorderRadius,
                  },
                  [`${n}-item-group-title`]: {
                    padding: `${ye(s)} ${ye(l)}`,
                    fontSize: h,
                    lineHeight: v,
                    transition: `all ${i}`,
                  },
                  [`&-horizontal ${n}-submenu`]: {
                    transition: [
                      `border-color ${i} ${a}`,
                      `background ${i} ${a}`,
                    ].join(','),
                  },
                  [`${n}-submenu, ${n}-submenu-inline`]: {
                    transition: [
                      `border-color ${i} ${a}`,
                      `background ${i} ${a}`,
                      `padding ${o} ${a}`,
                    ].join(','),
                  },
                  [`${n}-submenu ${n}-sub`]: {
                    cursor: 'initial',
                    transition: [
                      `background ${i} ${a}`,
                      `padding ${i} ${a}`,
                    ].join(','),
                  },
                  [`${n}-title-content`]: {
                    display: 'inline-flex',
                    alignItems: 'center',
                    transition: `color ${i}`,
                    '> a:first-child': { flexGrow: 1 },
                    [`> ${t}-typography-ellipsis-single-line`]: {
                      display: 'inline',
                      verticalAlign: 'unset',
                    },
                    [`${n}-item-extra`]: {
                      marginInlineStart: 'auto',
                      paddingInlineStart: e.padding,
                      fontSize: e.fontSizeSM,
                      color: e.colorTextDescription,
                    },
                  },
                  [`${n}-item a`]: {
                    '&::before': {
                      position: 'absolute',
                      inset: 0,
                      backgroundColor: 'transparent',
                      content: '""',
                    },
                  },
                  [`${n}-item-divider`]: {
                    overflow: 'hidden',
                    lineHeight: 0,
                    borderColor: u,
                    borderStyle: C,
                    borderWidth: 0,
                    borderTopWidth: c,
                    marginBlock: c,
                    padding: 0,
                    '&-dashed': { borderStyle: 'dashed' },
                  },
                }),
                a0(e),
              ),
              {
                [`${n}-item-group`]: {
                  [`${n}-item-group-list`]: {
                    margin: 0,
                    padding: 0,
                    [`${n}-item, ${n}-submenu-title`]: {
                      paddingInline: `${ye(e.calc(r).mul(2).equal())} ${ye(l)}`,
                    },
                  },
                },
                '&-submenu': {
                  '&-popup': {
                    position: 'absolute',
                    zIndex: f,
                    borderRadius: d,
                    boxShadow: 'none',
                    transformOrigin: '0 0',
                    [`&${n}-submenu`]: { background: 'transparent' },
                    '&::before': {
                      position: 'absolute',
                      inset: 0,
                      zIndex: -1,
                      width: '100%',
                      height: '100%',
                      opacity: 0,
                      content: '""',
                    },
                    [`> ${n}`]: Object.assign(
                      Object.assign(
                        Object.assign({ borderRadius: d }, a0(e)),
                        s0(e),
                      ),
                      {
                        [`${n}-item, ${n}-submenu > ${n}-submenu-title`]: {
                          borderRadius: g,
                        },
                        [`${n}-submenu-title::after`]: {
                          transition: `transform ${i} ${a}`,
                        },
                      },
                    ),
                  },
                  '\n          &-placement-leftTop,\n          &-placement-bottomRight,\n          ':
                    { transformOrigin: '100% 0' },
                  '\n          &-placement-leftBottom,\n          &-placement-topRight,\n          ':
                    { transformOrigin: '100% 100%' },
                  '\n          &-placement-rightBottom,\n          &-placement-topLeft,\n          ':
                    { transformOrigin: '0 100%' },
                  '\n          &-placement-bottomLeft,\n          &-placement-rightTop,\n          ':
                    { transformOrigin: '0 0' },
                  '\n          &-placement-leftTop,\n          &-placement-leftBottom\n          ':
                    { paddingInlineEnd: e.paddingXS },
                  '\n          &-placement-rightTop,\n          &-placement-rightBottom\n          ':
                    { paddingInlineStart: e.paddingXS },
                  '\n          &-placement-topRight,\n          &-placement-topLeft\n          ':
                    { paddingBottom: e.paddingXS },
                  '\n          &-placement-bottomRight,\n          &-placement-bottomLeft\n          ':
                    { paddingTop: e.paddingXS },
                },
              },
            ),
            s0(e),
          ),
          {
            [`&-inline-collapsed ${n}-submenu-arrow,
        &-inline ${n}-submenu-arrow`]: {
              '&::before': { transform: `rotate(-45deg) translateX(${ye(S)})` },
              '&::after': {
                transform: `rotate(45deg) translateX(${ye(e.calc(S).mul(-1).equal())})`,
              },
            },
            [`${n}-submenu-open${n}-submenu-inline > ${n}-submenu-title > ${n}-submenu-arrow`]:
              {
                transform: `translateY(${ye(e.calc(y).mul(0.2).mul(-1).equal())})`,
                '&::after': {
                  transform: `rotate(-45deg) translateX(${ye(e.calc(S).mul(-1).equal())})`,
                },
                '&::before': {
                  transform: `rotate(45deg) translateX(${ye(S)})`,
                },
              },
          },
        ),
      },
      { [`${t}-layout-header`]: { [n]: { lineHeight: 'inherit' } } },
    ]
  },
  mM = (e) => {
    var t, n, r
    const {
        colorPrimary: i,
        colorError: o,
        colorTextDisabled: a,
        colorErrorBg: s,
        colorText: l,
        colorTextDescription: u,
        colorBgContainer: c,
        colorFillAlter: f,
        colorFillContent: d,
        lineWidth: g,
        lineWidthBold: y,
        controlItemBgActive: S,
        colorBgTextHover: C,
        controlHeightLG: v,
        lineHeight: h,
        colorBgElevated: m,
        marginXXS: w,
        padding: b,
        fontSize: x,
        controlHeightSM: E,
        fontSizeLG: k,
        colorTextLightSolid: O,
        colorErrorHover: I,
      } = e,
      L = (t = e.activeBarWidth) !== null && t !== void 0 ? t : 0,
      z = (n = e.activeBarBorderWidth) !== null && n !== void 0 ? n : g,
      A = (r = e.itemMarginInline) !== null && r !== void 0 ? r : e.marginXXS,
      F = new jt(O).setAlpha(0.65).toRgbString()
    return {
      dropdownWidth: 160,
      zIndexPopup: e.zIndexPopupBase + 50,
      radiusItem: e.borderRadiusLG,
      itemBorderRadius: e.borderRadiusLG,
      radiusSubMenuItem: e.borderRadiusSM,
      subMenuItemBorderRadius: e.borderRadiusSM,
      colorItemText: l,
      itemColor: l,
      colorItemTextHover: l,
      itemHoverColor: l,
      colorItemTextHoverHorizontal: i,
      horizontalItemHoverColor: i,
      colorGroupTitle: u,
      groupTitleColor: u,
      colorItemTextSelected: i,
      itemSelectedColor: i,
      colorItemTextSelectedHorizontal: i,
      horizontalItemSelectedColor: i,
      colorItemBg: c,
      itemBg: c,
      colorItemBgHover: C,
      itemHoverBg: C,
      colorItemBgActive: d,
      itemActiveBg: S,
      colorSubItemBg: f,
      subMenuItemBg: f,
      colorItemBgSelected: S,
      itemSelectedBg: S,
      colorItemBgSelectedHorizontal: 'transparent',
      horizontalItemSelectedBg: 'transparent',
      colorActiveBarWidth: 0,
      activeBarWidth: L,
      colorActiveBarHeight: y,
      activeBarHeight: y,
      colorActiveBarBorderSize: g,
      activeBarBorderWidth: z,
      colorItemTextDisabled: a,
      itemDisabledColor: a,
      colorDangerItemText: o,
      dangerItemColor: o,
      colorDangerItemTextHover: o,
      dangerItemHoverColor: o,
      colorDangerItemTextSelected: o,
      dangerItemSelectedColor: o,
      colorDangerItemBgActive: s,
      dangerItemActiveBg: s,
      colorDangerItemBgSelected: s,
      dangerItemSelectedBg: s,
      itemMarginInline: A,
      horizontalItemBorderRadius: 0,
      horizontalItemHoverBg: 'transparent',
      itemHeight: v,
      groupTitleLineHeight: h,
      collapsedWidth: v * 2,
      popupBg: m,
      itemMarginBlock: w,
      itemPaddingInline: b,
      horizontalLineHeight: `${v * 1.15}px`,
      iconSize: x,
      iconMarginInlineEnd: E - x,
      collapsedIconSize: k,
      groupTitleFontSize: x,
      darkItemDisabledColor: new jt(O).setAlpha(0.25).toRgbString(),
      darkItemColor: F,
      darkDangerItemColor: o,
      darkItemBg: '#001529',
      darkPopupBg: '#001529',
      darkSubMenuItemBg: '#000c17',
      darkItemSelectedColor: O,
      darkItemSelectedBg: i,
      darkDangerItemSelectedBg: o,
      darkItemHoverBg: 'transparent',
      darkGroupTitleColor: F,
      darkItemHoverColor: O,
      darkDangerItemHoverColor: I,
      darkDangerItemSelectedColor: O,
      darkDangerItemActiveBg: o,
      itemWidth: L ? `calc(100% + ${z}px)` : `calc(100% - ${A * 2}px)`,
    }
  },
  gM = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e,
      n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0
    return Gs(
      'Menu',
      (i) => {
        const {
            colorBgElevated: o,
            controlHeightLG: a,
            fontSize: s,
            darkItemColor: l,
            darkDangerItemColor: u,
            darkItemBg: c,
            darkSubMenuItemBg: f,
            darkItemSelectedColor: d,
            darkItemSelectedBg: g,
            darkDangerItemSelectedBg: y,
            darkItemHoverBg: S,
            darkGroupTitleColor: C,
            darkItemHoverColor: v,
            darkItemDisabledColor: h,
            darkDangerItemHoverColor: m,
            darkDangerItemSelectedColor: w,
            darkDangerItemActiveBg: b,
            popupBg: x,
            darkPopupBg: E,
          } = i,
          k = i.calc(s).div(7).mul(5).equal(),
          O = Yi(i, {
            menuArrowSize: k,
            menuHorizontalHeight: i.calc(a).mul(1.15).equal(),
            menuArrowOffset: i.calc(k).mul(0.25).equal(),
            menuSubMenuBg: o,
            calc: i.calc,
            popupBg: x,
          }),
          I = Yi(O, {
            itemColor: l,
            itemHoverColor: v,
            groupTitleColor: C,
            itemSelectedColor: d,
            itemBg: c,
            popupBg: E,
            subMenuItemBg: f,
            itemActiveBg: 'transparent',
            itemSelectedBg: g,
            activeBarHeight: 0,
            activeBarBorderWidth: 0,
            itemHoverBg: S,
            itemDisabledColor: h,
            dangerItemColor: u,
            dangerItemHoverColor: m,
            dangerItemSelectedColor: w,
            dangerItemActiveBg: b,
            dangerItemSelectedBg: y,
            menuSubMenuBg: f,
            horizontalItemSelectedColor: d,
            horizontalItemSelectedBg: g,
          })
        return [
          hM(O),
          fM(O),
          pM(O),
          i0(O, 'light'),
          i0(I, 'dark'),
          dM(O),
          QO(O),
          wv(O, 'slide-up'),
          wv(O, 'slide-down'),
          IC(O, 'zoom-big'),
        ]
      },
      mM,
      {
        deprecatedTokens: [
          ['colorGroupTitle', 'groupTitleColor'],
          ['radiusItem', 'itemBorderRadius'],
          ['radiusSubMenuItem', 'subMenuItemBorderRadius'],
          ['colorItemText', 'itemColor'],
          ['colorItemTextHover', 'itemHoverColor'],
          ['colorItemTextHoverHorizontal', 'horizontalItemHoverColor'],
          ['colorItemTextSelected', 'itemSelectedColor'],
          ['colorItemTextSelectedHorizontal', 'horizontalItemSelectedColor'],
          ['colorItemTextDisabled', 'itemDisabledColor'],
          ['colorDangerItemText', 'dangerItemColor'],
          ['colorDangerItemTextHover', 'dangerItemHoverColor'],
          ['colorDangerItemTextSelected', 'dangerItemSelectedColor'],
          ['colorDangerItemBgActive', 'dangerItemActiveBg'],
          ['colorDangerItemBgSelected', 'dangerItemSelectedBg'],
          ['colorItemBg', 'itemBg'],
          ['colorItemBgHover', 'itemHoverBg'],
          ['colorSubItemBg', 'subMenuItemBg'],
          ['colorItemBgActive', 'itemActiveBg'],
          ['colorItemBgSelectedHorizontal', 'horizontalItemSelectedBg'],
          ['colorActiveBarWidth', 'activeBarWidth'],
          ['colorActiveBarHeight', 'activeBarHeight'],
          ['colorActiveBarBorderSize', 'activeBarBorderWidth'],
          ['colorItemBgSelected', 'itemSelectedBg'],
        ],
        injectStyle: n,
        unitless: { groupTitleLineHeight: !0 },
      },
    )(e, t)
  },
  pw = (e) => {
    var t
    const { popupClassName: n, icon: r, title: i, theme: o } = e,
      a = p.useContext(Bu),
      { prefixCls: s, inlineCollapsed: l, theme: u } = a,
      c = ma()
    let f
    if (!r)
      f =
        l && !c.length && i && typeof i == 'string'
          ? p.createElement(
              'div',
              { className: `${s}-inline-collapsed-noicon` },
              i.charAt(0),
            )
          : p.createElement('span', { className: `${s}-title-content` }, i)
    else {
      const y = p.isValidElement(i) && i.type === 'span'
      f = p.createElement(
        p.Fragment,
        null,
        Qs(r, {
          className: oe(
            p.isValidElement(r)
              ? (t = r.props) === null || t === void 0
                ? void 0
                : t.className
              : '',
            `${s}-item-icon`,
          ),
        }),
        y ? i : p.createElement('span', { className: `${s}-title-content` }, i),
      )
    }
    const d = p.useMemo(
        () => Object.assign(Object.assign({}, a), { firstLevel: !1 }),
        [a],
      ),
      [g] = kC('Menu')
    return p.createElement(
      Bu.Provider,
      { value: d },
      p.createElement(
        _c,
        Object.assign({}, io(e, ['icon']), {
          title: f,
          popupClassName: oe(s, n, `${s}-${o || u}`),
          popupStyle: Object.assign({ zIndex: g }, e.popupStyle),
        }),
      ),
    )
  }
var vM = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
function _f(e) {
  return e === null || e === !1
}
const yM = { item: dw, submenu: pw, divider: fw },
  SM = p.forwardRef((e, t) => {
    var n
    const r = p.useContext(n0),
      i = r || {},
      {
        getPrefixCls: o,
        getPopupContainer: a,
        direction: s,
        menu: l,
      } = p.useContext(dn),
      u = o(),
      {
        prefixCls: c,
        className: f,
        style: d,
        theme: g = 'light',
        expandIcon: y,
        _internalDisableMenuItemTitleTooltip: S,
        inlineCollapsed: C,
        siderCollapsed: v,
        rootClassName: h,
        mode: m,
        selectable: w,
        onClick: b,
        overflowedIndicatorPopupClassName: x,
      } = e,
      E = vM(e, [
        'prefixCls',
        'className',
        'style',
        'theme',
        'expandIcon',
        '_internalDisableMenuItemTitleTooltip',
        'inlineCollapsed',
        'siderCollapsed',
        'rootClassName',
        'mode',
        'selectable',
        'onClick',
        'overflowedIndicatorPopupClassName',
      ]),
      k = io(E, ['collapsedWidth'])
    ;(n = i.validator) === null || n === void 0 || n.call(i, { mode: m })
    const O = sn(function () {
        var H
        b == null || b.apply(void 0, arguments),
          (H = i.onClick) === null || H === void 0 || H.call(i)
      }),
      I = i.mode || m,
      L = w ?? i.selectable,
      z = p.useMemo(() => (v !== void 0 ? v : C), [C, v]),
      A = {
        horizontal: { motionName: `${u}-slide-up` },
        inline: WO(u),
        other: { motionName: `${u}-zoom-big` },
      },
      F = o('menu', c || i.prefixCls),
      V = jO(F),
      [M, T, P] = gM(F, V, !r),
      R = oe(`${F}-${g}`, l == null ? void 0 : l.className, f),
      N = p.useMemo(() => {
        var H, K
        if (typeof y == 'function' || _f(y)) return y || null
        if (typeof i.expandIcon == 'function' || _f(i.expandIcon))
          return i.expandIcon || null
        if (
          typeof (l == null ? void 0 : l.expandIcon) == 'function' ||
          _f(l == null ? void 0 : l.expandIcon)
        )
          return (l == null ? void 0 : l.expandIcon) || null
        const D =
          (H = y ?? (i == null ? void 0 : i.expandIcon)) !== null &&
          H !== void 0
            ? H
            : l == null
              ? void 0
              : l.expandIcon
        return Qs(D, {
          className: oe(
            `${F}-submenu-expand-icon`,
            p.isValidElement(D)
              ? (K = D.props) === null || K === void 0
                ? void 0
                : K.className
              : void 0,
          ),
        })
      }, [
        y,
        i == null ? void 0 : i.expandIcon,
        l == null ? void 0 : l.expandIcon,
        F,
      ]),
      j = p.useMemo(
        () => ({
          prefixCls: F,
          inlineCollapsed: z || !1,
          direction: s,
          firstLevel: !0,
          theme: g,
          mode: I,
          disableMenuItemTitleTooltip: S,
        }),
        [F, z, s, S, g],
      )
    return M(
      p.createElement(
        n0.Provider,
        { value: null },
        p.createElement(
          Bu.Provider,
          { value: j },
          p.createElement(
            tl,
            Object.assign(
              {
                getPopupContainer: a,
                overflowedIndicator: p.createElement(uM, null),
                overflowedIndicatorPopupClassName: oe(F, `${F}-${g}`, x),
                mode: I,
                selectable: L,
                onClick: O,
              },
              k,
              {
                inlineCollapsed: z,
                style: Object.assign(
                  Object.assign({}, l == null ? void 0 : l.style),
                  d,
                ),
                className: R,
                prefixCls: F,
                direction: s,
                defaultMotions: A,
                expandIcon: N,
                ref: t,
                rootClassName: oe(h, T, i.rootClassName, P, V),
                _internalComponents: yM,
              },
            ),
          ),
        ),
      ),
    )
  }),
  Zi = p.forwardRef((e, t) => {
    const n = p.useRef(null),
      r = p.useContext(Lc)
    return (
      p.useImperativeHandle(t, () => ({
        menu: n.current,
        focus: (i) => {
          var o
          ;(o = n.current) === null || o === void 0 || o.focus(i)
        },
      })),
      p.createElement(SM, Object.assign({ ref: n }, e, r))
    )
  })
Zi.Item = dw
Zi.SubMenu = pw
Zi.Divider = fw
Zi.ItemGroup = tm
function CM(e, t, n) {
  var r = n || {},
    i = r.noTrailing,
    o = i === void 0 ? !1 : i,
    a = r.noLeading,
    s = a === void 0 ? !1 : a,
    l = r.debounceMode,
    u = l === void 0 ? void 0 : l,
    c,
    f = !1,
    d = 0
  function g() {
    c && clearTimeout(c)
  }
  function y(C) {
    var v = C || {},
      h = v.upcomingOnly,
      m = h === void 0 ? !1 : h
    g(), (f = !m)
  }
  function S() {
    for (var C = arguments.length, v = new Array(C), h = 0; h < C; h++)
      v[h] = arguments[h]
    var m = this,
      w = Date.now() - d
    if (f) return
    function b() {
      ;(d = Date.now()), t.apply(m, v)
    }
    function x() {
      c = void 0
    }
    !s && u && !c && b(),
      g(),
      u === void 0 && w > e
        ? s
          ? ((d = Date.now()), o || (c = setTimeout(u ? x : b, e)))
          : b()
        : o !== !0 && (c = setTimeout(u ? x : b, u === void 0 ? e - w : e))
  }
  return (S.cancel = y), S
}
function wM(e, t, n) {
  var r = {},
    i = r.atBegin,
    o = i === void 0 ? !1 : i
  return CM(e, t, { debounceMode: o !== !1 })
}
function bM(e, t, n) {
  return typeof n == 'boolean'
    ? n
    : e.length
      ? !0
      : Qi(t).some((i) => i.type === cw)
}
var hw = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
function Ac(e) {
  let { suffixCls: t, tagName: n, displayName: r } = e
  return (i) =>
    p.forwardRef((a, s) =>
      p.createElement(
        i,
        Object.assign({ ref: s, suffixCls: t, tagName: n }, a),
      ),
    )
}
const nm = p.forwardRef((e, t) => {
    const { prefixCls: n, suffixCls: r, className: i, tagName: o } = e,
      a = hw(e, ['prefixCls', 'suffixCls', 'className', 'tagName']),
      { getPrefixCls: s } = p.useContext(dn),
      l = s('layout', n),
      [u, c, f] = uw(l),
      d = r ? `${l}-${r}` : l
    return u(
      p.createElement(
        o,
        Object.assign({ className: oe(n || d, i, c, f), ref: t }, a),
      ),
    )
  }),
  xM = p.forwardRef((e, t) => {
    const { direction: n } = p.useContext(dn),
      [r, i] = p.useState([]),
      {
        prefixCls: o,
        className: a,
        rootClassName: s,
        children: l,
        hasSider: u,
        tagName: c,
        style: f,
      } = e,
      d = hw(e, [
        'prefixCls',
        'className',
        'rootClassName',
        'children',
        'hasSider',
        'tagName',
        'style',
      ]),
      g = io(d, ['suffixCls']),
      { getPrefixCls: y, layout: S } = p.useContext(dn),
      C = y('layout', o),
      v = bM(r, l, u),
      [h, m, w] = uw(C),
      b = oe(
        C,
        { [`${C}-has-sider`]: v, [`${C}-rtl`]: n === 'rtl' },
        S == null ? void 0 : S.className,
        a,
        s,
        m,
        w,
      ),
      x = p.useMemo(
        () => ({
          siderHook: {
            addSider: (E) => {
              i((k) => [].concat(J(k), [E]))
            },
            removeSider: (E) => {
              i((k) => k.filter((O) => O !== E))
            },
          },
        }),
        [],
      )
    return h(
      p.createElement(
        aw.Provider,
        { value: x },
        p.createElement(
          c,
          Object.assign(
            {
              ref: t,
              className: b,
              style: Object.assign(
                Object.assign({}, S == null ? void 0 : S.style),
                f,
              ),
            },
            g,
          ),
          l,
        ),
      ),
    )
  }),
  EM = Ac({ tagName: 'div', displayName: 'Layout' })(xM),
  PM = Ac({ suffixCls: 'header', tagName: 'header', displayName: 'Header' })(
    nm,
  ),
  kM = Ac({ suffixCls: 'footer', tagName: 'footer', displayName: 'Footer' })(
    nm,
  ),
  TM = Ac({ suffixCls: 'content', tagName: 'main', displayName: 'Content' })(
    nm,
  ),
  zr = EM
zr.Header = PM
zr.Footer = kM
zr.Content = TM
zr.Sider = cw
zr._InternalSiderContext = Lc
const Uu = 100,
  mw = Uu / 5,
  gw = Uu / 2 - mw / 2,
  Lf = gw * 2 * Math.PI,
  l0 = 50,
  u0 = (e) => {
    const { dotClassName: t, style: n, hasCircleCls: r } = e
    return p.createElement('circle', {
      className: oe(`${t}-circle`, { [`${t}-circle-bg`]: r }),
      r: gw,
      cx: l0,
      cy: l0,
      strokeWidth: mw,
      style: n,
    })
  },
  OM = (e) => {
    let { percent: t, prefixCls: n } = e
    const r = `${n}-dot`,
      i = `${r}-holder`,
      o = `${i}-hidden`,
      [a, s] = p.useState(!1)
    Ft(() => {
      t !== 0 && s(!0)
    }, [t !== 0])
    const l = Math.max(Math.min(t, 100), 0)
    if (!a) return null
    const u = {
      strokeDashoffset: `${Lf / 4}`,
      strokeDasharray: `${(Lf * l) / 100} ${(Lf * (100 - l)) / 100}`,
    }
    return p.createElement(
      'span',
      { className: oe(i, `${r}-progress`, l <= 0 && o) },
      p.createElement(
        'svg',
        {
          viewBox: `0 0 ${Uu} ${Uu}`,
          role: 'progressbar',
          'aria-valuemin': 0,
          'aria-valuemax': 100,
          'aria-valuenow': l,
        },
        p.createElement(u0, { dotClassName: r, hasCircleCls: !0 }),
        p.createElement(u0, { dotClassName: r, style: u }),
      ),
    )
  }
function RM(e) {
  const { prefixCls: t, percent: n = 0 } = e,
    r = `${t}-dot`,
    i = `${r}-holder`,
    o = `${i}-hidden`
  return p.createElement(
    p.Fragment,
    null,
    p.createElement(
      'span',
      { className: oe(i, n > 0 && o) },
      p.createElement(
        'span',
        { className: oe(r, `${t}-dot-spin`) },
        [1, 2, 3, 4].map((a) =>
          p.createElement('i', { className: `${t}-dot-item`, key: a }),
        ),
      ),
    ),
    p.createElement(OM, { prefixCls: t, percent: n }),
  )
}
function IM(e) {
  const { prefixCls: t, indicator: n, percent: r } = e,
    i = `${t}-dot`
  return n && p.isValidElement(n)
    ? Qs(n, { className: oe(n.props.className, i), percent: r })
    : p.createElement(RM, { prefixCls: t, percent: r })
}
const $M = new st('antSpinMove', { to: { opacity: 1 } }),
  MM = new st('antRotate', { to: { transform: 'rotate(405deg)' } }),
  NM = (e) => {
    const { componentCls: t, calc: n } = e
    return {
      [t]: Object.assign(Object.assign({}, Kh(e)), {
        position: 'absolute',
        display: 'none',
        color: e.colorPrimary,
        fontSize: 0,
        textAlign: 'center',
        verticalAlign: 'middle',
        opacity: 0,
        transition: `transform ${e.motionDurationSlow} ${e.motionEaseInOutCirc}`,
        '&-spinning': {
          position: 'relative',
          display: 'inline-block',
          opacity: 1,
        },
        [`${t}-text`]: {
          fontSize: e.fontSize,
          paddingTop: n(n(e.dotSize).sub(e.fontSize)).div(2).add(2).equal(),
        },
        '&-fullscreen': {
          position: 'fixed',
          width: '100vw',
          height: '100vh',
          backgroundColor: e.colorBgMask,
          zIndex: e.zIndexPopupBase,
          inset: 0,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
          opacity: 0,
          visibility: 'hidden',
          transition: `all ${e.motionDurationMid}`,
          '&-show': { opacity: 1, visibility: 'visible' },
          [t]: {
            [`${t}-dot-holder`]: { color: e.colorWhite },
            [`${t}-text`]: { color: e.colorTextLightSolid },
          },
        },
        '&-nested-loading': {
          position: 'relative',
          [`> div > ${t}`]: {
            position: 'absolute',
            top: 0,
            insetInlineStart: 0,
            zIndex: 4,
            display: 'block',
            width: '100%',
            height: '100%',
            maxHeight: e.contentHeight,
            [`${t}-dot`]: {
              position: 'absolute',
              top: '50%',
              insetInlineStart: '50%',
              margin: n(e.dotSize).mul(-1).div(2).equal(),
            },
            [`${t}-text`]: {
              position: 'absolute',
              top: '50%',
              width: '100%',
              textShadow: `0 1px 2px ${e.colorBgContainer}`,
            },
            [`&${t}-show-text ${t}-dot`]: {
              marginTop: n(e.dotSize).div(2).mul(-1).sub(10).equal(),
            },
            '&-sm': {
              [`${t}-dot`]: { margin: n(e.dotSizeSM).mul(-1).div(2).equal() },
              [`${t}-text`]: {
                paddingTop: n(n(e.dotSizeSM).sub(e.fontSize))
                  .div(2)
                  .add(2)
                  .equal(),
              },
              [`&${t}-show-text ${t}-dot`]: {
                marginTop: n(e.dotSizeSM).div(2).mul(-1).sub(10).equal(),
              },
            },
            '&-lg': {
              [`${t}-dot`]: { margin: n(e.dotSizeLG).mul(-1).div(2).equal() },
              [`${t}-text`]: {
                paddingTop: n(n(e.dotSizeLG).sub(e.fontSize))
                  .div(2)
                  .add(2)
                  .equal(),
              },
              [`&${t}-show-text ${t}-dot`]: {
                marginTop: n(e.dotSizeLG).div(2).mul(-1).sub(10).equal(),
              },
            },
          },
          [`${t}-container`]: {
            position: 'relative',
            transition: `opacity ${e.motionDurationSlow}`,
            '&::after': {
              position: 'absolute',
              top: 0,
              insetInlineEnd: 0,
              bottom: 0,
              insetInlineStart: 0,
              zIndex: 10,
              width: '100%',
              height: '100%',
              background: e.colorBgContainer,
              opacity: 0,
              transition: `all ${e.motionDurationSlow}`,
              content: '""',
              pointerEvents: 'none',
            },
          },
          [`${t}-blur`]: {
            clear: 'both',
            opacity: 0.5,
            userSelect: 'none',
            pointerEvents: 'none',
            '&::after': { opacity: 0.4, pointerEvents: 'auto' },
          },
        },
        '&-tip': { color: e.spinDotDefault },
        [`${t}-dot-holder`]: {
          width: '1em',
          height: '1em',
          fontSize: e.dotSize,
          display: 'inline-block',
          transition: `transform ${e.motionDurationSlow} ease, opacity ${e.motionDurationSlow} ease`,
          transformOrigin: '50% 50%',
          lineHeight: 1,
          color: e.colorPrimary,
          '&-hidden': { transform: 'scale(0.3)', opacity: 0 },
        },
        [`${t}-dot-progress`]: {
          position: 'absolute',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          insetInlineStart: '50%',
        },
        [`${t}-dot`]: {
          position: 'relative',
          display: 'inline-block',
          fontSize: e.dotSize,
          width: '1em',
          height: '1em',
          '&-item': {
            position: 'absolute',
            display: 'block',
            width: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
            height: n(e.dotSize).sub(n(e.marginXXS).div(2)).div(2).equal(),
            background: 'currentColor',
            borderRadius: '100%',
            transform: 'scale(0.75)',
            transformOrigin: '50% 50%',
            opacity: 0.3,
            animationName: $M,
            animationDuration: '1s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
            animationDirection: 'alternate',
            '&:nth-child(1)': {
              top: 0,
              insetInlineStart: 0,
              animationDelay: '0s',
            },
            '&:nth-child(2)': {
              top: 0,
              insetInlineEnd: 0,
              animationDelay: '0.4s',
            },
            '&:nth-child(3)': {
              insetInlineEnd: 0,
              bottom: 0,
              animationDelay: '0.8s',
            },
            '&:nth-child(4)': {
              bottom: 0,
              insetInlineStart: 0,
              animationDelay: '1.2s',
            },
          },
          '&-spin': {
            transform: 'rotate(45deg)',
            animationName: MM,
            animationDuration: '1.2s',
            animationIterationCount: 'infinite',
            animationTimingFunction: 'linear',
          },
          '&-circle': {
            strokeLinecap: 'round',
            transition: [
              'stroke-dashoffset',
              'stroke-dasharray',
              'stroke',
              'stroke-width',
              'opacity',
            ]
              .map((r) => `${r} ${e.motionDurationSlow} ease`)
              .join(','),
            fillOpacity: 0,
            stroke: 'currentcolor',
          },
          '&-circle-bg': { stroke: e.colorFillSecondary },
        },
        [`&-sm ${t}-dot`]: { '&, &-holder': { fontSize: e.dotSizeSM } },
        [`&-sm ${t}-dot-holder`]: {
          i: {
            width: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2)))
              .div(2)
              .equal(),
            height: n(n(e.dotSizeSM).sub(n(e.marginXXS).div(2)))
              .div(2)
              .equal(),
          },
        },
        [`&-lg ${t}-dot`]: { '&, &-holder': { fontSize: e.dotSizeLG } },
        [`&-lg ${t}-dot-holder`]: {
          i: {
            width: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
            height: n(n(e.dotSizeLG).sub(e.marginXXS)).div(2).equal(),
          },
        },
        [`&${t}-show-text ${t}-text`]: { display: 'block' },
      }),
    }
  },
  _M = (e) => {
    const { controlHeightLG: t, controlHeight: n } = e
    return {
      contentHeight: 400,
      dotSize: t / 2,
      dotSizeSM: t * 0.35,
      dotSizeLG: n,
    }
  },
  LM = Gs(
    'Spin',
    (e) => {
      const t = Yi(e, { spinDotDefault: e.colorTextDescription })
      return [NM(t)]
    },
    _M,
  ),
  AM = 200,
  c0 = [
    [30, 0.05],
    [70, 0.03],
    [96, 0.01],
  ]
function FM(e, t) {
  const [n, r] = p.useState(0),
    i = p.useRef(),
    o = t === 'auto'
  return (
    p.useEffect(
      () => (
        o &&
          e &&
          (r(0),
          (i.current = setInterval(() => {
            r((a) => {
              const s = 100 - a
              for (let l = 0; l < c0.length; l += 1) {
                const [u, c] = c0[l]
                if (a <= u) return a + s * c
              }
              return a
            })
          }, AM))),
        () => {
          clearInterval(i.current)
        }
      ),
      [o, e],
    ),
    o ? n : t
  )
}
var jM = function (e, t) {
  var n = {}
  for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) &&
      t.indexOf(r) < 0 &&
      (n[r] = e[r])
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
      t.indexOf(r[i]) < 0 &&
        Object.prototype.propertyIsEnumerable.call(e, r[i]) &&
        (n[r[i]] = e[r[i]])
  return n
}
let vw
function zM(e, t) {
  return !!e && !!t && !isNaN(Number(t))
}
const yw = (e) => {
  var t
  const {
      prefixCls: n,
      spinning: r = !0,
      delay: i = 0,
      className: o,
      rootClassName: a,
      size: s = 'default',
      tip: l,
      wrapperClassName: u,
      style: c,
      children: f,
      fullscreen: d = !1,
      indicator: g,
      percent: y,
    } = e,
    S = jM(e, [
      'prefixCls',
      'spinning',
      'delay',
      'className',
      'rootClassName',
      'size',
      'tip',
      'wrapperClassName',
      'style',
      'children',
      'fullscreen',
      'indicator',
      'percent',
    ]),
    { getPrefixCls: C, direction: v, spin: h } = p.useContext(dn),
    m = C('spin', n),
    [w, b, x] = LM(m),
    [E, k] = p.useState(() => r && !zM(r, i)),
    O = FM(E, y)
  p.useEffect(() => {
    if (r) {
      const M = wM(i, () => {
        k(!0)
      })
      return (
        M(),
        () => {
          var T
          ;(T = M == null ? void 0 : M.cancel) === null ||
            T === void 0 ||
            T.call(M)
        }
      )
    }
    k(!1)
  }, [i, r])
  const I = p.useMemo(() => typeof f < 'u' && !d, [f, d]),
    L = oe(
      m,
      h == null ? void 0 : h.className,
      {
        [`${m}-sm`]: s === 'small',
        [`${m}-lg`]: s === 'large',
        [`${m}-spinning`]: E,
        [`${m}-show-text`]: !!l,
        [`${m}-rtl`]: v === 'rtl',
      },
      o,
      !d && a,
      b,
      x,
    ),
    z = oe(`${m}-container`, { [`${m}-blur`]: E }),
    A =
      (t = g ?? (h == null ? void 0 : h.indicator)) !== null && t !== void 0
        ? t
        : vw,
    F = Object.assign(Object.assign({}, h == null ? void 0 : h.style), c),
    V = p.createElement(
      'div',
      Object.assign({}, S, {
        style: F,
        className: L,
        'aria-live': 'polite',
        'aria-busy': E,
      }),
      p.createElement(IM, { prefixCls: m, indicator: A, percent: O }),
      l && (I || d)
        ? p.createElement('div', { className: `${m}-text` }, l)
        : null,
    )
  return w(
    I
      ? p.createElement(
          'div',
          Object.assign({}, S, {
            className: oe(`${m}-nested-loading`, u, b, x),
          }),
          E && p.createElement('div', { key: 'loading' }, V),
          p.createElement('div', { className: z, key: 'container' }, f),
        )
      : d
        ? p.createElement(
            'div',
            {
              className: oe(
                `${m}-fullscreen`,
                { [`${m}-fullscreen-show`]: E },
                a,
                b,
                x,
              ),
            },
            V,
          )
        : V,
  )
}
yw.setDefaultIndicator = (e) => {
  vw = e
}
const f0 = () =>
    X.jsx('svg', {
      className: 'w-4 h-4 opacity-60',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: X.jsx('path', {
        d: 'M9 23H15C17.8003 23 19.2004 23 20.27 22.455C21.2108 21.9757 21.9757 21.2108 22.455 20.27C23 19.2004 23 17.8003 23 15V9C23 6.19974 23 4.79961 22.455 3.73005C21.9757 2.78924 21.2108 2.02433 20.27 1.54497C19.2004 1 17.8003 1 15 1H9M9 23C6.19974 23 4.79961 23 3.73005 22.455C2.78924 21.9757 2.02433 21.2108 1.54497 20.27C1 19.2004 1 17.8003 1 15V9C1 6.19974 1 4.79961 1.54497 3.73005C2.02433 2.78924 2.78924 2.02433 3.73005 1.54497C4.79961 1 6.19974 1 9 1M9 23V1',
        stroke: 'black',
        strokeWidth: '2',
        strokeLinecap: 'round',
      }),
    }),
  DM = ({ collapsed: e, toggleSidebar: t }) =>
    X.jsx(X.Fragment, {
      children: X.jsx('div', {
        className: ' flex items-end justify-end cursor-pointer',
        onClick: t,
        children: e ? X.jsx(f0, {}) : X.jsx(f0, {}),
      }),
    })
function HM() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    Ui(t[0]) && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t)
  }
}
const d0 = {}
function _p() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n]
  ;(Ui(t[0]) && d0[t[0]]) || (Ui(t[0]) && (d0[t[0]] = new Date()), HM(...t))
}
const Sw = (e, t) => () => {
    if (e.isInitialized) t()
    else {
      const n = () => {
        setTimeout(() => {
          e.off('initialized', n)
        }, 0),
          t()
      }
      e.on('initialized', n)
    }
  },
  p0 = (e, t, n) => {
    e.loadNamespaces(t, Sw(e, n))
  },
  h0 = (e, t, n, r) => {
    Ui(n) && (n = [n]),
      n.forEach((i) => {
        e.options.ns.indexOf(i) < 0 && e.options.ns.push(i)
      }),
      e.loadLanguages(t, Sw(e, r))
  },
  VM = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const r = t.languages[0],
      i = t.options ? t.options.fallbackLng : !1,
      o = t.languages[t.languages.length - 1]
    if (r.toLowerCase() === 'cimode') return !0
    const a = (s, l) => {
      const u = t.services.backendConnector.state[`${s}|${l}`]
      return u === -1 || u === 2
    }
    return n.bindI18n &&
      n.bindI18n.indexOf('languageChanging') > -1 &&
      t.services.backendConnector.backend &&
      t.isLanguageChangingTo &&
      !a(t.isLanguageChangingTo, e)
      ? !1
      : !!(
          t.hasResourceBundle(r, e) ||
          !t.services.backendConnector.backend ||
          (t.options.resources && !t.options.partialBundledLanguages) ||
          (a(r, e) && (!i || a(o, e)))
        )
  },
  BM = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return !t.languages || !t.languages.length
      ? (_p('i18n.languages were undefined or empty', t.languages), !0)
      : t.options.ignoreJSONStructure !== void 0
        ? t.hasLoadedNamespace(e, {
            lng: n.lng,
            precheck: (i, o) => {
              if (
                n.bindI18n &&
                n.bindI18n.indexOf('languageChanging') > -1 &&
                i.services.backendConnector.backend &&
                i.isLanguageChangingTo &&
                !o(i.isLanguageChangingTo, e)
              )
                return !1
            },
          })
        : VM(e, t, n)
  },
  Ui = (e) => typeof e == 'string',
  UM = (e) => typeof e == 'object' && e !== null,
  WM =
    /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  KM = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  qM = (e) => KM[e],
  GM = (e) => e.replace(WM, qM)
let Lp = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: GM,
}
const XM = function () {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    Lp = { ...Lp, ...e }
  },
  QM = () => Lp
let Cw
const YM = (e) => {
    Cw = e
  },
  ZM = () => Cw,
  JM = {
    type: '3rdParty',
    init(e) {
      XM(e.options.react), YM(e)
    },
  },
  eN = p.createContext()
class tN {
  constructor() {
    im(this, 'getUsedNamespaces', () => Object.keys(this.usedNamespaces))
    this.usedNamespaces = {}
  }
  addUsedNamespaces(t) {
    t.forEach((n) => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0)
    })
  }
}
const nN = (e, t) => {
    const n = p.useRef()
    return (
      p.useEffect(() => {
        n.current = e
      }, [e, t]),
      n.current
    )
  },
  ww = (e, t, n, r) => e.getFixedT(t, n, r),
  rN = (e, t, n, r) => p.useCallback(ww(e, t, n, r), [e, t, n, r]),
  bw = function (e) {
    let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const { i18n: n } = t,
      { i18n: r, defaultNS: i } = p.useContext(eN) || {},
      o = n || r || ZM()
    if ((o && !o.reportNamespaces && (o.reportNamespaces = new tN()), !o)) {
      _p(
        'You will need to pass in an i18next instance by using initReactI18next',
      )
      const w = (x, E) =>
          Ui(E)
            ? E
            : UM(E) && Ui(E.defaultValue)
              ? E.defaultValue
              : Array.isArray(x)
                ? x[x.length - 1]
                : x,
        b = [w, {}, !1]
      return (b.t = w), (b.i18n = {}), (b.ready = !1), b
    }
    o.options.react &&
      o.options.react.wait !== void 0 &&
      _p(
        'It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
      )
    const a = { ...QM(), ...o.options.react, ...t },
      { useSuspense: s, keyPrefix: l } = a
    let u = i || (o.options && o.options.defaultNS)
    ;(u = Ui(u) ? [u] : u || ['translation']),
      o.reportNamespaces.addUsedNamespaces &&
        o.reportNamespaces.addUsedNamespaces(u)
    const c =
        (o.isInitialized || o.initializedStoreOnce) &&
        u.every((w) => BM(w, o, a)),
      f = rN(o, t.lng || null, a.nsMode === 'fallback' ? u : u[0], l),
      d = () => f,
      g = () => ww(o, t.lng || null, a.nsMode === 'fallback' ? u : u[0], l),
      [y, S] = p.useState(d)
    let C = u.join()
    t.lng && (C = `${t.lng}${C}`)
    const v = nN(C),
      h = p.useRef(!0)
    p.useEffect(() => {
      const { bindI18n: w, bindI18nStore: b } = a
      ;(h.current = !0),
        !c &&
          !s &&
          (t.lng
            ? h0(o, t.lng, u, () => {
                h.current && S(g)
              })
            : p0(o, u, () => {
                h.current && S(g)
              })),
        c && v && v !== C && h.current && S(g)
      const x = () => {
        h.current && S(g)
      }
      return (
        w && o && o.on(w, x),
        b && o && o.store.on(b, x),
        () => {
          ;(h.current = !1),
            w && o && w.split(' ').forEach((E) => o.off(E, x)),
            b && o && b.split(' ').forEach((E) => o.store.off(E, x))
        }
      )
    }, [o, C]),
      p.useEffect(() => {
        h.current && c && S(d)
      }, [o, l, c])
    const m = [y, o, c]
    if (((m.t = y), (m.i18n = o), (m.ready = c), c || (!c && !s))) return m
    throw new Promise((w) => {
      t.lng ? h0(o, t.lng, u, () => w()) : p0(o, u, () => w())
    })
  }
/*! js-cookie v3.0.5 | MIT */ function Ll(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t]
    for (var r in n) e[r] = n[r]
  }
  return e
}
var iN = {
  read: function (e) {
    return (
      e[0] === '"' && (e = e.slice(1, -1)),
      e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    )
  },
  write: function (e) {
    return encodeURIComponent(e).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent,
    )
  },
}
function Ap(e, t) {
  function n(i, o, a) {
    if (!(typeof document > 'u')) {
      ;(a = Ll({}, t, a)),
        typeof a.expires == 'number' &&
          (a.expires = new Date(Date.now() + a.expires * 864e5)),
        a.expires && (a.expires = a.expires.toUTCString()),
        (i = encodeURIComponent(i)
          .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
          .replace(/[()]/g, escape))
      var s = ''
      for (var l in a)
        a[l] &&
          ((s += '; ' + l), a[l] !== !0 && (s += '=' + a[l].split(';')[0]))
      return (document.cookie = i + '=' + e.write(o, i) + s)
    }
  }
  function r(i) {
    if (!(typeof document > 'u' || (arguments.length && !i))) {
      for (
        var o = document.cookie ? document.cookie.split('; ') : [],
          a = {},
          s = 0;
        s < o.length;
        s++
      ) {
        var l = o[s].split('='),
          u = l.slice(1).join('=')
        try {
          var c = decodeURIComponent(l[0])
          if (((a[c] = e.read(u, c)), i === c)) break
        } catch {}
      }
      return i ? a[i] : a
    }
  }
  return Object.create(
    {
      set: n,
      get: r,
      remove: function (i, o) {
        n(i, '', Ll({}, o, { expires: -1 }))
      },
      withAttributes: function (i) {
        return Ap(this.converter, Ll({}, this.attributes, i))
      },
      withConverter: function (i) {
        return Ap(Ll({}, this.converter, i), this.attributes)
      },
    },
    {
      attributes: { value: Object.freeze(t) },
      converter: { value: Object.freeze(e) },
    },
  )
}
Ap(iN, { path: '/' })
const oN = (e, t) => e.find((n) => n.key_name === t) || null,
  aN = (e, t, n = 'view') => {
    const r = oN(e, t)
    if (!r) return !1
    const i = `pm_${n}`
    return r[i] ?? !1
  },
  sN = (e, t, n) => aN(e, t, n),
  { Sider: lN, Footer: uN } = zr,
  { SubMenu: cN } = Zi,
  fN = { borderInlineEnd: 'none' },
  dN = () =>
    X.jsxs('svg', {
      className: 'w-5 h-5 opacity-65 ',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        X.jsx('path', {
          d: 'M19.3198 10.75H4.68977C2.79977 10.75 1.25977 9.21002 1.25977 7.32002V4.69002C1.25977 2.80002 2.79977 1.26001 4.68977 1.26001H19.3198C21.2098 1.26001 22.7498 2.80002 22.7498 4.69002V7.32002C22.7498 9.21002 21.2098 10.75 19.3198 10.75ZM4.67976 2.75002C3.60976 2.75002 2.74977 3.62001 2.74977 4.68001V7.31001C2.74977 8.38001 3.61976 9.24002 4.67976 9.24002H19.3098C20.3798 9.24002 21.2398 8.37001 21.2398 7.31001V4.68001C21.2398 3.61001 20.3698 2.75002 19.3098 2.75002H4.67976Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M19.3198 22.75H4.68977C2.79977 22.75 1.25977 21.21 1.25977 19.32V16.69C1.25977 14.8 2.79977 13.26 4.68977 13.26H19.3198C21.2098 13.26 22.7498 14.8 22.7498 16.69V19.32C22.7498 21.21 21.2098 22.75 19.3198 22.75ZM4.67976 14.75C3.60976 14.75 2.74977 15.62 2.74977 16.68V19.31C2.74977 20.38 3.61976 21.24 4.67976 21.24H19.3098C20.3798 21.24 21.2398 20.37 21.2398 19.31V16.68C21.2398 15.61 20.3698 14.75 19.3098 14.75H4.67976Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M6 7.75C5.59 7.75 5.25 7.41 5.25 7V5C5.25 4.59 5.59 4.25 6 4.25C6.41 4.25 6.75 4.59 6.75 5V7C6.75 7.41 6.41 7.75 6 7.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M10 7.75C9.59 7.75 9.25 7.41 9.25 7V5C9.25 4.59 9.59 4.25 10 4.25C10.41 4.25 10.75 4.59 10.75 5V7C10.75 7.41 10.41 7.75 10 7.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M6 19.75C5.59 19.75 5.25 19.41 5.25 19V17C5.25 16.59 5.59 16.25 6 16.25C6.41 16.25 6.75 16.59 6.75 17V19C6.75 19.41 6.41 19.75 6 19.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M10 19.75C9.59 19.75 9.25 19.41 9.25 19V17C9.25 16.59 9.59 16.25 10 16.25C10.41 16.25 10.75 16.59 10.75 17V19C10.75 19.41 10.41 19.75 10 19.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M18 6.75H14C13.59 6.75 13.25 6.41 13.25 6C13.25 5.59 13.59 5.25 14 5.25H18C18.41 5.25 18.75 5.59 18.75 6C18.75 6.41 18.41 6.75 18 6.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M18 18.75H14C13.59 18.75 13.25 18.41 13.25 18C13.25 17.59 13.59 17.25 14 17.25H18C18.41 17.25 18.75 17.59 18.75 18C18.75 18.41 18.41 18.75 18 18.75Z',
          fill: '#292D32',
        }),
      ],
    }),
  m0 = () =>
    X.jsxs('svg', {
      className: 'w-5 h-5 opacity-65 ',
      viewBox: '0 0 24 24',
      fill: 'none',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        X.jsx('path', {
          d: 'M2 9.75C1.59 9.75 1.25 9.41 1.25 9V6.5C1.25 3.6 3.61 1.25 6.5 1.25H9C9.41 1.25 9.75 1.59 9.75 2C9.75 2.41 9.41 2.75 9 2.75H6.5C4.43 2.75 2.75 4.43 2.75 6.5V9C2.75 9.41 2.41 9.75 2 9.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M22 9.75C21.59 9.75 21.25 9.41 21.25 9V6.5C21.25 4.43 19.57 2.75 17.5 2.75H15C14.59 2.75 14.25 2.41 14.25 2C14.25 1.59 14.59 1.25 15 1.25H17.5C20.39 1.25 22.75 3.6 22.75 6.5V9C22.75 9.41 22.41 9.75 22 9.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M17.5 22.75H16C15.59 22.75 15.25 22.41 15.25 22C15.25 21.59 15.59 21.25 16 21.25H17.5C19.57 21.25 21.25 19.57 21.25 17.5V16C21.25 15.59 21.59 15.25 22 15.25C22.41 15.25 22.75 15.59 22.75 16V17.5C22.75 20.4 20.39 22.75 17.5 22.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M9 22.75H6.5C3.61 22.75 1.25 20.4 1.25 17.5V15C1.25 14.59 1.59 14.25 2 14.25C2.41 14.25 2.75 14.59 2.75 15V17.5C2.75 19.57 4.43 21.25 6.5 21.25H9C9.41 21.25 9.75 21.59 9.75 22C9.75 22.41 9.41 22.75 9 22.75Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M14 18.25H10C7.58 18.25 6.25 16.92 6.25 14.5V9.5C6.25 7.08 7.58 5.75 10 5.75H14C16.42 5.75 17.75 7.08 17.75 9.5V14.5C17.75 16.92 16.42 18.25 14 18.25ZM10 7.25C8.42 7.25 7.75 7.92 7.75 9.5V14.5C7.75 16.08 8.42 16.75 10 16.75H14C15.58 16.75 16.25 16.08 16.25 14.5V9.5C16.25 7.92 15.58 7.25 14 7.25H10Z',
          fill: '#292D32',
        }),
        X.jsx('path', {
          d: 'M19 12.75H5C4.59 12.75 4.25 12.41 4.25 12C4.25 11.59 4.59 11.25 5 11.25H19C19.41 11.25 19.75 11.59 19.75 12C19.75 12.41 19.41 12.75 19 12.75Z',
          fill: '#292D32',
        }),
      ],
    }),
  pN = ({ permissions: e }) => {
    const t = fa(),
      n = JSON.parse(localStorage.getItem('userInfo'))
    n != null && n.login
    const [r, i] = p.useState(() => {
        const S = localStorage.getItem('COLLAPSED_STATE')
        return S ? JSON.parse(S) : !1
      }),
      [o, a] = p.useState(!1),
      { t: s } = bw(),
      [l, u] = p.useState(sessionStorage.getItem('current_action_phone')),
      [c, f] = p.useState(sessionStorage.getItem('current_action')),
      d = () => {
        i((S) => {
          const C = !S
          return localStorage.setItem('COLLAPSED_STATE', JSON.stringify(C)), C
        })
      }
    if (
      (p.useEffect(() => {
        const S = () => {
          a(window.innerWidth <= 768)
        }
        return (
          S(),
          window.addEventListener('resize', S),
          () => {
            window.removeEventListener('resize', S)
          }
        )
      }, []),
      t.pathname === '/u/login')
    )
      return null
    const g = (S) => {
        sessionStorage.setItem('current_action', S.key), f(S.key)
      },
      y = (S) => {
        sessionStorage.setItem('current_action_phone', S), u(S)
      }
    return X.jsx(X.Fragment, {
      children: o
        ? X.jsx(uN, {
            className:
              'fixed bottom-0 z-50 w-full bg-white border-t-[1px] border-b-0 pt-3 pb-6 p-0',
            children: X.jsx('div', {
              className: 'flex justify-around w-full space-x-4',
              children: X.jsx('div', {
                className: 'flex-1 text-center',
                children: X.jsxs(kg, {
                  to: '/u/home',
                  className: 'flex flex-col items-center',
                  onClick: () => y('home'),
                  children: [
                    l === 'home' ? X.jsx(m0, {}) : X.jsx(m0, {}),
                    X.jsx('span', {
                      className: `mt-2  text-[10px] ${l === 'home' ? 'text-blue-500' : 'text-gray-500'}`,
                      children: s('Scan'),
                    }),
                  ],
                }),
              }),
            }),
          })
        : X.jsxs(lN, {
            width: 270,
            theme: 'light',
            collapsed: r,
            onCollapse: d,
            className:
              'p-1 border-r-[1px] h-screen overflow-auto scroll-container',
            children: [
              X.jsx(DM, { collapsed: r, toggleSidebar: d }),
              X.jsx('div', { className: 'mb-5' }),
              X.jsx(Zi, {
                style: fN,
                mode: 'inline',
                defaultSelectedKeys: [`${c}`],
                className: 'border-r-0',
                onClick: (S) => g(S),
                children: X.jsx(
                  cN,
                  {
                    title: X.jsxs('span', {
                      className: 'flex items-center gap-3',
                      children: [
                        X.jsx('span', {
                          className: `icon-wrapper ${r ? ' justify-center mt-2' : ''}`,
                          children: X.jsx(dN, {}),
                        }),
                        !r &&
                          X.jsx('span', { children: s('THÔNG TIN NHÂN SỰ') }),
                      ],
                    }),
                    children: X.jsx(
                      Zi.Item,
                      {
                        children: X.jsx(kg, {
                          to: '/u/action=gen-info-1-2/from=view',
                          className: 'flex items-center justify-start',
                          children: s('ĐĂNG KÝ NHÂN VIÊN MỚI'),
                        }),
                      },
                      'gen-info-1-2',
                    ),
                  },
                  'gen-info',
                ),
              }),
            ],
          }),
    })
  },
  hN = '/assets/ItmLogo-CCJA-hdA.png',
  mN = () =>
    X.jsxs('div', {
      className:
        'grid h-screen place-content-center items-center  justify-center bg-slate-50 ',
      children: [
        X.jsx('img', { src: hN, className: ' w-52  opacity-55 h-auto mb-10' }),
        X.jsx(yw, { indicator: X.jsx(HO, { spin: !0 }) }),
      ],
    }),
  g0 = p.lazy(() =>
    WE(
      () => import('./users-odAeYwxJ.js').then((e) => e.u),
      __vite__mapDeps([0, 1]),
    ),
  ),
  { Content: gN } = zr,
  vN = () => {
    bw(), rS(), fa(), p.useState(!1)
    const [e, t] = p.useState([])
    p.useState(!1), p.useState(null), p.useState(!1)
    const [n, r] = p.useState(!1)
    return X.jsx(Eg, {
      children: X.jsx(_d, {
        path: '/*',
        element: X.jsxs(zr, {
          style: { minHeight: '100vh' },
          children: [
            X.jsx(pN, { permissions: e }),
            X.jsx(zr, {
              children: X.jsx(gN, {
                children: X.jsx(p.Suspense, {
                  fallback: X.jsx(mN, {}),
                  children: X.jsx(Eg, {
                    children: X.jsx(_d, {
                      path: 'u/action=gen-info-1-2/from=view',
                      element: sN(e, '', '')
                        ? X.jsx(g0, { permissions: e, isMobile: n })
                        : X.jsx(g0, { permissions: e, isMobile: n }),
                    }),
                  }),
                }),
              }),
            }),
          ],
        }),
      }),
    })
  },
  yN = () => X.jsx(zE, { children: X.jsx(vN, {}) }),
  SN = () =>
    X.jsx('div', {
      className: 'h-screen overflow-hidden ',
      children: X.jsx(yN, {}),
    }),
  CN = {
    type: 'logger',
    log(e) {
      this.output('log', e)
    },
    warn(e) {
      this.output('warn', e)
    },
    error(e) {
      this.output('error', e)
    },
    output(e, t) {
      console && console[e] && console[e].apply(console, t)
    },
  }
class Wu {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    this.init(t, n)
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.prefix = n.prefix || 'i18next:'),
      (this.logger = t || CN),
      (this.options = n),
      (this.debug = n.debug)
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return this.forward(n, 'log', '', !0)
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return this.forward(n, 'warn', '', !0)
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return this.forward(n, 'error', '')
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
      n[r] = arguments[r]
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0)
  }
  forward(t, n, r, i) {
    return i && !this.debug
      ? null
      : (typeof t[0] == 'string' && (t[0] = `${r}${this.prefix} ${t[0]}`),
        this.logger[n](t))
  }
  create(t) {
    return new Wu(this.logger, {
      prefix: `${this.prefix}:${t}:`,
      ...this.options,
    })
  }
  clone(t) {
    return (
      (t = t || this.options),
      (t.prefix = t.prefix || this.prefix),
      new Wu(this.logger, t)
    )
  }
}
var Sr = new Wu()
class Fc {
  constructor() {
    this.observers = {}
  }
  on(t, n) {
    return (
      t.split(' ').forEach((r) => {
        this.observers[r] || (this.observers[r] = new Map())
        const i = this.observers[r].get(n) || 0
        this.observers[r].set(n, i + 1)
      }),
      this
    )
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t]
        return
      }
      this.observers[t].delete(n)
    }
  }
  emit(t) {
    for (
      var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), i = 1;
      i < n;
      i++
    )
      r[i - 1] = arguments[i]
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach((a) => {
        let [s, l] = a
        for (let u = 0; u < l; u++) s(...r)
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach((a) => {
          let [s, l] = a
          for (let u = 0; u < l; u++) s.apply(s, [t, ...r])
        })
  }
}
const La = () => {
    let e, t
    const n = new Promise((r, i) => {
      ;(e = r), (t = i)
    })
    return (n.resolve = e), (n.reject = t), n
  },
  v0 = (e) => (e == null ? '' : '' + e),
  wN = (e, t, n) => {
    e.forEach((r) => {
      t[r] && (n[r] = t[r])
    })
  },
  bN = /###/g,
  y0 = (e) => (e && e.indexOf('###') > -1 ? e.replace(bN, '.') : e),
  S0 = (e) => !e || typeof e == 'string',
  rs = (e, t, n) => {
    const r = typeof t != 'string' ? t : t.split('.')
    let i = 0
    for (; i < r.length - 1; ) {
      if (S0(e)) return {}
      const o = y0(r[i])
      !e[o] && n && (e[o] = new n()),
        Object.prototype.hasOwnProperty.call(e, o) ? (e = e[o]) : (e = {}),
        ++i
    }
    return S0(e) ? {} : { obj: e, k: y0(r[i]) }
  },
  C0 = (e, t, n) => {
    const { obj: r, k: i } = rs(e, t, Object)
    if (r !== void 0 || t.length === 1) {
      r[i] = n
      return
    }
    let o = t[t.length - 1],
      a = t.slice(0, t.length - 1),
      s = rs(e, a, Object)
    for (; s.obj === void 0 && a.length; )
      (o = `${a[a.length - 1]}.${o}`),
        (a = a.slice(0, a.length - 1)),
        (s = rs(e, a, Object)),
        s && s.obj && typeof s.obj[`${s.k}.${o}`] < 'u' && (s.obj = void 0)
    s.obj[`${s.k}.${o}`] = n
  },
  xN = (e, t, n, r) => {
    const { obj: i, k: o } = rs(e, t, Object)
    ;(i[o] = i[o] || []), i[o].push(n)
  },
  Ku = (e, t) => {
    const { obj: n, k: r } = rs(e, t)
    if (n) return n[r]
  },
  EN = (e, t, n) => {
    const r = Ku(e, n)
    return r !== void 0 ? r : Ku(t, n)
  },
  xw = (e, t, n) => {
    for (const r in t)
      r !== '__proto__' &&
        r !== 'constructor' &&
        (r in e
          ? typeof e[r] == 'string' ||
            e[r] instanceof String ||
            typeof t[r] == 'string' ||
            t[r] instanceof String
            ? n && (e[r] = t[r])
            : xw(e[r], t[r], n)
          : (e[r] = t[r]))
    return e
  },
  xo = (e) => e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&')
var PN = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
  '/': '&#x2F;',
}
const kN = (e) =>
  typeof e == 'string' ? e.replace(/[&<>"'\/]/g, (t) => PN[t]) : e
class TN {
  constructor(t) {
    ;(this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = [])
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t)
    if (n !== void 0) return n
    const r = new RegExp(t)
    return (
      this.regExpQueue.length === this.capacity &&
        this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    )
  }
}
const ON = [' ', ',', '?', '!', ';'],
  RN = new TN(20),
  IN = (e, t, n) => {
    ;(t = t || ''), (n = n || '')
    const r = ON.filter((a) => t.indexOf(a) < 0 && n.indexOf(a) < 0)
    if (r.length === 0) return !0
    const i = RN.getRegExp(
      `(${r.map((a) => (a === '?' ? '\\?' : a)).join('|')})`,
    )
    let o = !i.test(e)
    if (!o) {
      const a = e.indexOf(n)
      a > 0 && !i.test(e.substring(0, a)) && (o = !0)
    }
    return o
  },
  Fp = function (e, t) {
    let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.'
    if (!e) return
    if (e[t]) return e[t]
    const r = t.split(n)
    let i = e
    for (let o = 0; o < r.length; ) {
      if (!i || typeof i != 'object') return
      let a,
        s = ''
      for (let l = o; l < r.length; ++l)
        if ((l !== o && (s += n), (s += r[l]), (a = i[s]), a !== void 0)) {
          if (
            ['string', 'number', 'boolean'].indexOf(typeof a) > -1 &&
            l < r.length - 1
          )
            continue
          o += l - o + 1
          break
        }
      i = a
    }
    return i
  },
  qu = (e) => e && e.replace('_', '-')
class w0 extends Fc {
  constructor(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { ns: ['translation'], defaultNS: 'translation' }
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 &&
        (this.options.ignoreJSONStructure = !0)
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t)
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t)
    n > -1 && this.options.ns.splice(n, 1)
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const o =
        i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator,
      a =
        i.ignoreJSONStructure !== void 0
          ? i.ignoreJSONStructure
          : this.options.ignoreJSONStructure
    let s
    t.indexOf('.') > -1
      ? (s = t.split('.'))
      : ((s = [t, n]),
        r &&
          (Array.isArray(r)
            ? s.push(...r)
            : typeof r == 'string' && o
              ? s.push(...r.split(o))
              : s.push(r)))
    const l = Ku(this.data, s)
    return (
      !l &&
        !n &&
        !r &&
        t.indexOf('.') > -1 &&
        ((t = s[0]), (n = s[1]), (r = s.slice(2).join('.'))),
      l || !a || typeof r != 'string'
        ? l
        : Fp(this.data && this.data[t] && this.data[t][n], r, o)
    )
  }
  addResource(t, n, r, i) {
    let o =
      arguments.length > 4 && arguments[4] !== void 0
        ? arguments[4]
        : { silent: !1 }
    const a =
      o.keySeparator !== void 0 ? o.keySeparator : this.options.keySeparator
    let s = [t, n]
    r && (s = s.concat(a ? r.split(a) : r)),
      t.indexOf('.') > -1 && ((s = t.split('.')), (i = n), (n = s[1])),
      this.addNamespaces(n),
      C0(this.data, s, i),
      o.silent || this.emit('added', t, n, r, i)
  }
  addResources(t, n, r) {
    let i =
      arguments.length > 3 && arguments[3] !== void 0
        ? arguments[3]
        : { silent: !1 }
    for (const o in r)
      (typeof r[o] == 'string' || Array.isArray(r[o])) &&
        this.addResource(t, n, o, r[o], { silent: !0 })
    i.silent || this.emit('added', t, n, r)
  }
  addResourceBundle(t, n, r, i, o) {
    let a =
        arguments.length > 5 && arguments[5] !== void 0
          ? arguments[5]
          : { silent: !1, skipCopy: !1 },
      s = [t, n]
    t.indexOf('.') > -1 && ((s = t.split('.')), (i = r), (r = n), (n = s[1])),
      this.addNamespaces(n)
    let l = Ku(this.data, s) || {}
    a.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      i ? xw(l, r, o) : (l = { ...l, ...r }),
      C0(this.data, s, l),
      a.silent || this.emit('added', t, n, r)
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n],
      this.removeNamespaces(n),
      this.emit('removed', t, n)
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS),
      this.options.compatibilityAPI === 'v1'
        ? { ...this.getResource(t, n) }
        : this.getResource(t, n)
    )
  }
  getDataByLanguage(t) {
    return this.data[t]
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t)
    return !!((n && Object.keys(n)) || []).find(
      (i) => n[i] && Object.keys(n[i]).length > 0,
    )
  }
  toJSON() {
    return this.data
  }
}
var Ew = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e
  },
  handle(e, t, n, r, i) {
    return (
      e.forEach((o) => {
        this.processors[o] && (t = this.processors[o].process(t, n, r, i))
      }),
      t
    )
  },
}
const b0 = {}
class Gu extends Fc {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    super(),
      wN(
        [
          'resourceStore',
          'languageUtils',
          'pluralResolver',
          'interpolator',
          'backendConnector',
          'i18nFormat',
          'utils',
        ],
        t,
        this,
      ),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = Sr.create('translator'))
  }
  changeLanguage(t) {
    t && (this.language = t)
  }
  exists(t) {
    let n =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    if (t == null) return !1
    const r = this.resolve(t, n)
    return r && r.res !== void 0
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator
    r === void 0 && (r = ':')
    const i =
      n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator
    let o = n.ns || this.options.defaultNS || []
    const a = r && t.indexOf(r) > -1,
      s =
        !this.options.userDefinedKeySeparator &&
        !n.keySeparator &&
        !this.options.userDefinedNsSeparator &&
        !n.nsSeparator &&
        !IN(t, r, i)
    if (a && !s) {
      const l = t.match(this.interpolator.nestingRegexp)
      if (l && l.length > 0) return { key: t, namespaces: o }
      const u = t.split(r)
      ;(r !== i || (r === i && this.options.ns.indexOf(u[0]) > -1)) &&
        (o = u.shift()),
        (t = u.join(i))
    }
    return typeof o == 'string' && (o = [o]), { key: t, namespaces: o }
  }
  translate(t, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return ''
    Array.isArray(t) || (t = [String(t)])
    const i =
        n.returnDetails !== void 0
          ? n.returnDetails
          : this.options.returnDetails,
      o =
        n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: a, namespaces: s } = this.extractFromKey(t[t.length - 1], n),
      l = s[s.length - 1],
      u = n.lng || this.language,
      c = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode
    if (u && u.toLowerCase() === 'cimode') {
      if (c) {
        const w = n.nsSeparator || this.options.nsSeparator
        return i
          ? {
              res: `${l}${w}${a}`,
              usedKey: a,
              exactUsedKey: a,
              usedLng: u,
              usedNS: l,
              usedParams: this.getUsedParamsDetails(n),
            }
          : `${l}${w}${a}`
      }
      return i
        ? {
            res: a,
            usedKey: a,
            exactUsedKey: a,
            usedLng: u,
            usedNS: l,
            usedParams: this.getUsedParamsDetails(n),
          }
        : a
    }
    const f = this.resolve(t, n)
    let d = f && f.res
    const g = (f && f.usedKey) || a,
      y = (f && f.exactUsedKey) || a,
      S = Object.prototype.toString.apply(d),
      C = ['[object Number]', '[object Function]', '[object RegExp]'],
      v = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      h = !this.i18nFormat || this.i18nFormat.handleAsObject
    if (
      h &&
      d &&
      typeof d != 'string' &&
      typeof d != 'boolean' &&
      typeof d != 'number' &&
      C.indexOf(S) < 0 &&
      !(typeof v == 'string' && Array.isArray(d))
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler ||
          this.logger.warn(
            'accessing an object - but returnObjects options is not enabled!',
          )
        const w = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(g, d, { ...n, ns: s })
          : `key '${a} (${this.language})' returned an object instead of string.`
        return i
          ? ((f.res = w), (f.usedParams = this.getUsedParamsDetails(n)), f)
          : w
      }
      if (o) {
        const w = Array.isArray(d),
          b = w ? [] : {},
          x = w ? y : g
        for (const E in d)
          if (Object.prototype.hasOwnProperty.call(d, E)) {
            const k = `${x}${o}${E}`
            ;(b[E] = this.translate(k, { ...n, joinArrays: !1, ns: s })),
              b[E] === k && (b[E] = d[E])
          }
        d = b
      }
    } else if (h && typeof v == 'string' && Array.isArray(d))
      (d = d.join(v)), d && (d = this.extendTranslation(d, t, n, r))
    else {
      let w = !1,
        b = !1
      const x = n.count !== void 0 && typeof n.count != 'string',
        E = Gu.hasDefaultValue(n),
        k = x ? this.pluralResolver.getSuffix(u, n.count, n) : '',
        O =
          n.ordinal && x
            ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 })
            : '',
        I =
          x &&
          !n.ordinal &&
          n.count === 0 &&
          this.pluralResolver.shouldUseIntlApi(),
        L =
          (I && n[`defaultValue${this.options.pluralSeparator}zero`]) ||
          n[`defaultValue${k}`] ||
          n[`defaultValue${O}`] ||
          n.defaultValue
      !this.isValidLookup(d) && E && ((w = !0), (d = L)),
        this.isValidLookup(d) || ((b = !0), (d = a))
      const A =
          (n.missingKeyNoValueFallbackToKey ||
            this.options.missingKeyNoValueFallbackToKey) &&
          b
            ? void 0
            : d,
        F = E && L !== d && this.options.updateMissing
      if (b || w || F) {
        if (
          (this.logger.log(F ? 'updateKey' : 'missingKey', u, l, a, F ? L : d),
          o)
        ) {
          const P = this.resolve(a, { ...n, keySeparator: !1 })
          P &&
            P.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            )
        }
        let V = []
        const M = this.languageUtils.getFallbackCodes(
          this.options.fallbackLng,
          n.lng || this.language,
        )
        if (this.options.saveMissingTo === 'fallback' && M && M[0])
          for (let P = 0; P < M.length; P++) V.push(M[P])
        else
          this.options.saveMissingTo === 'all'
            ? (V = this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
              ))
            : V.push(n.lng || this.language)
        const T = (P, R, N) => {
          const j = E && N !== d ? N : A
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(P, l, R, j, F, n)
            : this.backendConnector &&
              this.backendConnector.saveMissing &&
              this.backendConnector.saveMissing(P, l, R, j, F, n),
            this.emit('missingKey', P, l, R, d)
        }
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && x
            ? V.forEach((P) => {
                const R = this.pluralResolver.getSuffixes(P, n)
                I &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  R.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  R.push(`${this.options.pluralSeparator}zero`),
                  R.forEach((N) => {
                    T([P], a + N, n[`defaultValue${N}`] || L)
                  })
              })
            : T(V, a, L))
      }
      ;(d = this.extendTranslation(d, t, n, f, r)),
        b &&
          d === a &&
          this.options.appendNamespaceToMissingKey &&
          (d = `${l}:${a}`),
        (b || w) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (d = this.options.parseMissingKeyHandler(
                this.options.appendNamespaceToMissingKey ? `${l}:${a}` : a,
                w ? d : void 0,
              ))
            : (d = this.options.parseMissingKeyHandler(d)))
    }
    return i
      ? ((f.res = d), (f.usedParams = this.getUsedParamsDetails(n)), f)
      : d
  }
  extendTranslation(t, n, r, i, o) {
    var a = this
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || i.usedLng,
        i.usedNS,
        i.usedKey,
        { resolved: i },
      )
    else if (!r.skipInterpolation) {
      r.interpolation &&
        this.interpolator.init({
          ...r,
          interpolation: { ...this.options.interpolation, ...r.interpolation },
        })
      const u =
        typeof t == 'string' &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables)
      let c
      if (u) {
        const d = t.match(this.interpolator.nestingRegexp)
        c = d && d.length
      }
      let f = r.replace && typeof r.replace != 'string' ? r.replace : r
      if (
        (this.options.interpolation.defaultVariables &&
          (f = { ...this.options.interpolation.defaultVariables, ...f }),
        (t = this.interpolator.interpolate(
          t,
          f,
          r.lng || this.language || i.usedLng,
          r,
        )),
        u)
      ) {
        const d = t.match(this.interpolator.nestingRegexp),
          g = d && d.length
        c < g && (r.nest = !1)
      }
      !r.lng &&
        this.options.compatibilityAPI !== 'v1' &&
        i &&
        i.res &&
        (r.lng = this.language || i.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (
                var d = arguments.length, g = new Array(d), y = 0;
                y < d;
                y++
              )
                g[y] = arguments[y]
              return o && o[0] === g[0] && !r.context
                ? (a.logger.warn(
                    `It seems you are nesting recursively key: ${g[0]} in key: ${n[0]}`,
                  ),
                  null)
                : a.translate(...g, n)
            },
            r,
          )),
        r.interpolation && this.interpolator.reset()
    }
    const s = r.postProcess || this.options.postProcess,
      l = typeof s == 'string' ? [s] : s
    return (
      t != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = Ew.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? {
                i18nResolved: {
                  ...i,
                  usedParams: this.getUsedParamsDetails(r),
                },
                ...r,
              }
            : r,
          this,
        )),
      t
    )
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      i,
      o,
      a,
      s
    return (
      typeof t == 'string' && (t = [t]),
      t.forEach((l) => {
        if (this.isValidLookup(r)) return
        const u = this.extractFromKey(l, n),
          c = u.key
        i = c
        let f = u.namespaces
        this.options.fallbackNS && (f = f.concat(this.options.fallbackNS))
        const d = n.count !== void 0 && typeof n.count != 'string',
          g =
            d &&
            !n.ordinal &&
            n.count === 0 &&
            this.pluralResolver.shouldUseIntlApi(),
          y =
            n.context !== void 0 &&
            (typeof n.context == 'string' || typeof n.context == 'number') &&
            n.context !== '',
          S = n.lngs
            ? n.lngs
            : this.languageUtils.toResolveHierarchy(
                n.lng || this.language,
                n.fallbackLng,
              )
        f.forEach((C) => {
          this.isValidLookup(r) ||
            ((s = C),
            !b0[`${S[0]}-${C}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((b0[`${S[0]}-${C}`] = !0),
              this.logger.warn(
                `key "${i}" for languages "${S.join(', ')}" won't get resolved as namespace "${s}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            S.forEach((v) => {
              if (this.isValidLookup(r)) return
              a = v
              const h = [c]
              if (this.i18nFormat && this.i18nFormat.addLookupKeys)
                this.i18nFormat.addLookupKeys(h, c, v, C, n)
              else {
                let w
                d && (w = this.pluralResolver.getSuffix(v, n.count, n))
                const b = `${this.options.pluralSeparator}zero`,
                  x = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`
                if (
                  (d &&
                    (h.push(c + w),
                    n.ordinal &&
                      w.indexOf(x) === 0 &&
                      h.push(c + w.replace(x, this.options.pluralSeparator)),
                    g && h.push(c + b)),
                  y)
                ) {
                  const E = `${c}${this.options.contextSeparator}${n.context}`
                  h.push(E),
                    d &&
                      (h.push(E + w),
                      n.ordinal &&
                        w.indexOf(x) === 0 &&
                        h.push(E + w.replace(x, this.options.pluralSeparator)),
                      g && h.push(E + b))
                }
              }
              let m
              for (; (m = h.pop()); )
                this.isValidLookup(r) ||
                  ((o = m), (r = this.getResource(v, C, m, n)))
            }))
        })
      }),
      { res: r, usedKey: i, exactUsedKey: o, usedLng: a, usedNS: s }
    )
  }
  isValidLookup(t) {
    return (
      t !== void 0 &&
      !(!this.options.returnNull && t === null) &&
      !(!this.options.returnEmptyString && t === '')
    )
  }
  getResource(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, i)
      : this.resourceStore.getResource(t, n, r, i)
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      r = t.replace && typeof t.replace != 'string'
    let i = r ? t.replace : t
    if (
      (r && typeof t.count < 'u' && (i.count = t.count),
      this.options.interpolation.defaultVariables &&
        (i = { ...this.options.interpolation.defaultVariables, ...i }),
      !r)
    ) {
      i = { ...i }
      for (const o of n) delete i[o]
    }
    return i
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue'
    for (const r in t)
      if (
        Object.prototype.hasOwnProperty.call(t, r) &&
        n === r.substring(0, n.length) &&
        t[r] !== void 0
      )
        return !0
    return !1
  }
}
const Af = (e) => e.charAt(0).toUpperCase() + e.slice(1)
class x0 {
  constructor(t) {
    ;(this.options = t),
      (this.supportedLngs = this.options.supportedLngs || !1),
      (this.logger = Sr.create('languageUtils'))
  }
  getScriptPartFromCode(t) {
    if (((t = qu(t)), !t || t.indexOf('-') < 0)) return null
    const n = t.split('-')
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x')
      ? null
      : this.formatLanguageCode(n.join('-'))
  }
  getLanguagePartFromCode(t) {
    if (((t = qu(t)), !t || t.indexOf('-') < 0)) return t
    const n = t.split('-')
    return this.formatLanguageCode(n[0])
  }
  formatLanguageCode(t) {
    if (typeof t == 'string' && t.indexOf('-') > -1) {
      if (typeof Intl < 'u' && typeof Intl.getCanonicalLocales < 'u')
        try {
          let i = Intl.getCanonicalLocales(t)[0]
          if ((i && this.options.lowerCaseLng && (i = i.toLowerCase()), i))
            return i
        } catch {}
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab']
      let r = t.split('-')
      return (
        this.options.lowerCaseLng
          ? (r = r.map((i) => i.toLowerCase()))
          : r.length === 2
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = Af(r[1].toLowerCase())))
            : r.length === 3 &&
              ((r[0] = r[0].toLowerCase()),
              r[1].length === 2 && (r[1] = r[1].toUpperCase()),
              r[0] !== 'sgn' &&
                r[2].length === 2 &&
                (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 &&
                (r[1] = Af(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 &&
                (r[2] = Af(r[2].toLowerCase()))),
        r.join('-')
      )
    }
    return this.options.cleanCode || this.options.lowerCaseLng
      ? t.toLowerCase()
      : t
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' ||
        this.options.nonExplicitSupportedLngs) &&
        (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs ||
        !this.supportedLngs.length ||
        this.supportedLngs.indexOf(t) > -1
    )
  }
  getBestMatchFromCodes(t) {
    if (!t) return null
    let n
    return (
      t.forEach((r) => {
        if (n) return
        const i = this.formatLanguageCode(r)
        ;(!this.options.supportedLngs || this.isSupportedCode(i)) && (n = i)
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach((r) => {
          if (n) return
          const i = this.getLanguagePartFromCode(r)
          if (this.isSupportedCode(i)) return (n = i)
          n = this.options.supportedLngs.find((o) => {
            if (o === i) return o
            if (
              !(o.indexOf('-') < 0 && i.indexOf('-') < 0) &&
              ((o.indexOf('-') > 0 &&
                i.indexOf('-') < 0 &&
                o.substring(0, o.indexOf('-')) === i) ||
                (o.indexOf(i) === 0 && i.length > 1))
            )
              return o
          })
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    )
  }
  getFallbackCodes(t, n) {
    if (!t) return []
    if (
      (typeof t == 'function' && (t = t(n)),
      typeof t == 'string' && (t = [t]),
      Array.isArray(t))
    )
      return t
    if (!n) return t.default || []
    let r = t[n]
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    )
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      i = [],
      o = (a) => {
        a &&
          (this.isSupportedCode(a)
            ? i.push(a)
            : this.logger.warn(
                `rejecting language code not found in supportedLngs: ${a}`,
              ))
      }
    return (
      typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' &&
            o(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' &&
            this.options.load !== 'currentOnly' &&
            o(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' &&
            o(this.getLanguagePartFromCode(t)))
        : typeof t == 'string' && o(this.formatLanguageCode(t)),
      r.forEach((a) => {
        i.indexOf(a) < 0 && o(this.formatLanguageCode(a))
      }),
      i
    )
  }
}
let $N = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    {
      lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'],
      nr: [1, 2, 5],
      fc: 4,
    },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  MN = {
    1: (e) => +(e > 1),
    2: (e) => +(e != 1),
    3: (e) => 0,
    4: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    5: (e) =>
      e == 0
        ? 0
        : e == 1
          ? 1
          : e == 2
            ? 2
            : e % 100 >= 3 && e % 100 <= 10
              ? 3
              : e % 100 >= 11
                ? 4
                : 5,
    6: (e) => (e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2),
    7: (e) =>
      e == 1
        ? 0
        : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    8: (e) => (e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3),
    9: (e) => +(e >= 2),
    10: (e) => (e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4),
    11: (e) =>
      e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3,
    12: (e) => +(e % 10 != 1 || e % 100 == 11),
    13: (e) => +(e !== 0),
    14: (e) => (e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3),
    15: (e) =>
      e % 10 == 1 && e % 100 != 11
        ? 0
        : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20)
          ? 1
          : 2,
    16: (e) => (e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2),
    17: (e) => (e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1),
    18: (e) => (e == 0 ? 0 : e == 1 ? 1 : 2),
    19: (e) =>
      e == 1
        ? 0
        : e == 0 || (e % 100 > 1 && e % 100 < 11)
          ? 1
          : e % 100 > 10 && e % 100 < 20
            ? 2
            : 3,
    20: (e) => (e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2),
    21: (e) =>
      e % 100 == 1
        ? 1
        : e % 100 == 2
          ? 2
          : e % 100 == 3 || e % 100 == 4
            ? 3
            : 0,
    22: (e) =>
      e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3,
  }
const NN = ['v1', 'v2', 'v3'],
  _N = ['v4'],
  E0 = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 },
  LN = () => {
    const e = {}
    return (
      $N.forEach((t) => {
        t.lngs.forEach((n) => {
          e[n] = { numbers: t.nr, plurals: MN[t.fc] }
        })
      }),
      e
    )
  }
class AN {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    ;(this.languageUtils = t),
      (this.options = n),
      (this.logger = Sr.create('pluralResolver')),
      (!this.options.compatibilityJSON ||
        _N.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = LN()),
      (this.pluralRulesCache = {})
  }
  addRule(t, n) {
    this.rules[t] = n
  }
  clearCache() {
    this.pluralRulesCache = {}
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (this.shouldUseIntlApi())
      try {
        const r = qu(t === 'dev' ? 'en' : t),
          i = n.ordinal ? 'ordinal' : 'cardinal',
          o = JSON.stringify({ cleanedCode: r, type: i })
        if (o in this.pluralRulesCache) return this.pluralRulesCache[o]
        const a = new Intl.PluralRules(r, { type: i })
        return (this.pluralRulesCache[o] = a), a
      } catch {
        return
      }
    return (
      this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)]
    )
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const r = this.getRule(t, n)
    return this.shouldUseIntlApi()
      ? r && r.resolvedOptions().pluralCategories.length > 1
      : r && r.numbers.length > 1
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    return this.getSuffixes(t, r).map((i) => `${n}${i}`)
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    const r = this.getRule(t, n)
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((i, o) => E0[i] - E0[o])
            .map(
              (i) =>
                `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${i}`,
            )
        : r.numbers.map((i) => this.getSuffix(t, i, n))
      : []
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}
    const i = this.getRule(t, r)
    return i
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${i.select(n)}`
        : this.getSuffixRetroCompatible(i, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '')
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n))
    let i = t.numbers[r]
    this.options.simplifyPluralSuffix &&
      t.numbers.length === 2 &&
      t.numbers[0] === 1 &&
      (i === 2 ? (i = 'plural') : i === 1 && (i = ''))
    const o = () =>
      this.options.prepend && i.toString()
        ? this.options.prepend + i.toString()
        : i.toString()
    return this.options.compatibilityJSON === 'v1'
      ? i === 1
        ? ''
        : typeof i == 'number'
          ? `_plural_${i.toString()}`
          : o()
      : this.options.compatibilityJSON === 'v2' ||
          (this.options.simplifyPluralSuffix &&
            t.numbers.length === 2 &&
            t.numbers[0] === 1)
        ? o()
        : this.options.prepend && r.toString()
          ? this.options.prepend + r.toString()
          : r.toString()
  }
  shouldUseIntlApi() {
    return !NN.includes(this.options.compatibilityJSON)
  }
}
const P0 = function (e, t, n) {
    let r =
        arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
      o = EN(e, t, n)
    return (
      !o &&
        i &&
        typeof n == 'string' &&
        ((o = Fp(e, n, r)), o === void 0 && (o = Fp(t, n, r))),
      o
    )
  },
  Ff = (e) => e.replace(/\$/g, '$$$$')
class FN {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Sr.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || ((n) => n)),
      this.init(t)
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    t.interpolation || (t.interpolation = { escapeValue: !0 })
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: i,
      prefix: o,
      prefixEscaped: a,
      suffix: s,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: c,
      unescapePrefix: f,
      nestingPrefix: d,
      nestingPrefixEscaped: g,
      nestingSuffix: y,
      nestingSuffixEscaped: S,
      nestingOptionsSeparator: C,
      maxReplaces: v,
      alwaysFormat: h,
    } = t.interpolation
    ;(this.escape = n !== void 0 ? n : kN),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = i !== void 0 ? i : !1),
      (this.prefix = o ? xo(o) : a || '{{'),
      (this.suffix = s ? xo(s) : l || '}}'),
      (this.formatSeparator = u || ','),
      (this.unescapePrefix = c ? '' : f || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : c || ''),
      (this.nestingPrefix = d ? xo(d) : g || xo('$t(')),
      (this.nestingSuffix = y ? xo(y) : S || xo(')')),
      (this.nestingOptionsSeparator = C || ','),
      (this.maxReplaces = v || 1e3),
      (this.alwaysFormat = h !== void 0 ? h : !1),
      this.resetRegExp()
  }
  reset() {
    this.options && this.init(this.options)
  }
  resetRegExp() {
    const t = (n, r) =>
      n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g')
    ;(this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(
        this.regexpUnescape,
        `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`,
      )),
      (this.nestingRegexp = t(
        this.nestingRegexp,
        `${this.nestingPrefix}(.+?)${this.nestingSuffix}`,
      ))
  }
  interpolate(t, n, r, i) {
    let o, a, s
    const l =
        (this.options &&
          this.options.interpolation &&
          this.options.interpolation.defaultVariables) ||
        {},
      u = (g) => {
        if (g.indexOf(this.formatSeparator) < 0) {
          const v = P0(
            n,
            l,
            g,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          )
          return this.alwaysFormat
            ? this.format(v, void 0, r, { ...i, ...n, interpolationkey: g })
            : v
        }
        const y = g.split(this.formatSeparator),
          S = y.shift().trim(),
          C = y.join(this.formatSeparator).trim()
        return this.format(
          P0(
            n,
            l,
            S,
            this.options.keySeparator,
            this.options.ignoreJSONStructure,
          ),
          C,
          r,
          { ...i, ...n, interpolationkey: S },
        )
      }
    this.resetRegExp()
    const c =
        (i && i.missingInterpolationHandler) ||
        this.options.missingInterpolationHandler,
      f =
        i && i.interpolation && i.interpolation.skipOnVariables !== void 0
          ? i.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables
    return (
      [
        { regex: this.regexpUnescape, safeValue: (g) => Ff(g) },
        {
          regex: this.regexp,
          safeValue: (g) => (this.escapeValue ? Ff(this.escape(g)) : Ff(g)),
        },
      ].forEach((g) => {
        for (s = 0; (o = g.regex.exec(t)); ) {
          const y = o[1].trim()
          if (((a = u(y)), a === void 0))
            if (typeof c == 'function') {
              const C = c(t, o, i)
              a = typeof C == 'string' ? C : ''
            } else if (i && Object.prototype.hasOwnProperty.call(i, y)) a = ''
            else if (f) {
              a = o[0]
              continue
            } else
              this.logger.warn(
                `missed to pass in variable ${y} for interpolating ${t}`,
              ),
                (a = '')
          else typeof a != 'string' && !this.useRawValueToEscape && (a = v0(a))
          const S = g.safeValue(a)
          if (
            ((t = t.replace(o[0], S)),
            f
              ? ((g.regex.lastIndex += a.length),
                (g.regex.lastIndex -= o[0].length))
              : (g.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break
        }
      }),
      t
    )
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i,
      o,
      a
    const s = (l, u) => {
      const c = this.nestingOptionsSeparator
      if (l.indexOf(c) < 0) return l
      const f = l.split(new RegExp(`${c}[ ]*{`))
      let d = `{${f[1]}`
      ;(l = f[0]), (d = this.interpolate(d, a))
      const g = d.match(/'/g),
        y = d.match(/"/g)
      ;((g && g.length % 2 === 0 && !y) || y.length % 2 !== 0) &&
        (d = d.replace(/'/g, '"'))
      try {
        ;(a = JSON.parse(d)), u && (a = { ...u, ...a })
      } catch (S) {
        return (
          this.logger.warn(
            `failed parsing options string in nesting for key ${l}`,
            S,
          ),
          `${l}${c}${d}`
        )
      }
      return (
        a.defaultValue &&
          a.defaultValue.indexOf(this.prefix) > -1 &&
          delete a.defaultValue,
        l
      )
    }
    for (; (i = this.nestingRegexp.exec(t)); ) {
      let l = []
      ;(a = { ...r }),
        (a = a.replace && typeof a.replace != 'string' ? a.replace : a),
        (a.applyPostProcessor = !1),
        delete a.defaultValue
      let u = !1
      if (i[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(i[1])) {
        const c = i[1].split(this.formatSeparator).map((f) => f.trim())
        ;(i[1] = c.shift()), (l = c), (u = !0)
      }
      if (
        ((o = n(s.call(this, i[1].trim(), a), a)),
        o && i[0] === t && typeof o != 'string')
      )
        return o
      typeof o != 'string' && (o = v0(o)),
        o ||
          (this.logger.warn(`missed to resolve ${i[1]} for nesting ${t}`),
          (o = '')),
        u &&
          (o = l.reduce(
            (c, f) =>
              this.format(c, f, r.lng, { ...r, interpolationkey: i[1].trim() }),
            o.trim(),
          )),
        (t = t.replace(i[0], o)),
        (this.regexp.lastIndex = 0)
    }
    return t
  }
}
const jN = (e) => {
    let t = e.toLowerCase().trim()
    const n = {}
    if (e.indexOf('(') > -1) {
      const r = e.split('(')
      t = r[0].toLowerCase().trim()
      const i = r[1].substring(0, r[1].length - 1)
      t === 'currency' && i.indexOf(':') < 0
        ? n.currency || (n.currency = i.trim())
        : t === 'relativetime' && i.indexOf(':') < 0
          ? n.range || (n.range = i.trim())
          : i.split(';').forEach((a) => {
              if (a) {
                const [s, ...l] = a.split(':'),
                  u = l
                    .join(':')
                    .trim()
                    .replace(/^'+|'+$/g, ''),
                  c = s.trim()
                n[c] || (n[c] = u),
                  u === 'false' && (n[c] = !1),
                  u === 'true' && (n[c] = !0),
                  isNaN(u) || (n[c] = parseInt(u, 10))
              }
            })
    }
    return { formatName: t, formatOptions: n }
  },
  Eo = (e) => {
    const t = {}
    return (n, r, i) => {
      let o = i
      i &&
        i.interpolationkey &&
        i.formatParams &&
        i.formatParams[i.interpolationkey] &&
        i[i.interpolationkey] &&
        (o = { ...o, [i.interpolationkey]: void 0 })
      const a = r + JSON.stringify(o)
      let s = t[a]
      return s || ((s = e(qu(r), i)), (t[a] = s)), s(n)
    }
  }
class zN {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}
    ;(this.logger = Sr.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: Eo((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r })
          return (o) => i.format(o)
        }),
        currency: Eo((n, r) => {
          const i = new Intl.NumberFormat(n, { ...r, style: 'currency' })
          return (o) => i.format(o)
        }),
        datetime: Eo((n, r) => {
          const i = new Intl.DateTimeFormat(n, { ...r })
          return (o) => i.format(o)
        }),
        relativetime: Eo((n, r) => {
          const i = new Intl.RelativeTimeFormat(n, { ...r })
          return (o) => i.format(o, r.range || 'day')
        }),
        list: Eo((n, r) => {
          const i = new Intl.ListFormat(n, { ...r })
          return (o) => i.format(o)
        }),
      }),
      this.init(t)
  }
  init(t) {
    const r = (
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { interpolation: {} }
    ).interpolation
    this.formatSeparator = r.formatSeparator
      ? r.formatSeparator
      : r.formatSeparator || ','
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = Eo(n)
  }
  format(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    const o = n.split(this.formatSeparator)
    if (
      o.length > 1 &&
      o[0].indexOf('(') > 1 &&
      o[0].indexOf(')') < 0 &&
      o.find((s) => s.indexOf(')') > -1)
    ) {
      const s = o.findIndex((l) => l.indexOf(')') > -1)
      o[0] = [o[0], ...o.splice(1, s)].join(this.formatSeparator)
    }
    return o.reduce((s, l) => {
      const { formatName: u, formatOptions: c } = jN(l)
      if (this.formats[u]) {
        let f = s
        try {
          const d =
              (i && i.formatParams && i.formatParams[i.interpolationkey]) || {},
            g = d.locale || d.lng || i.locale || i.lng || r
          f = this.formats[u](s, g, { ...c, ...i, ...d })
        } catch (d) {
          this.logger.warn(d)
        }
        return f
      } else this.logger.warn(`there was no format function for ${u}`)
      return s
    }, t)
  }
}
const DN = (e, t) => {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--)
}
class HN extends Fc {
  constructor(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = i),
      (this.logger = Sr.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = i.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = i.maxRetries >= 0 ? i.maxRetries : 5),
      (this.retryTimeout = i.retryTimeout >= 1 ? i.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, i.backend, i)
  }
  queueLoad(t, n, r, i) {
    const o = {},
      a = {},
      s = {},
      l = {}
    return (
      t.forEach((u) => {
        let c = !0
        n.forEach((f) => {
          const d = `${u}|${f}`
          !r.reload && this.store.hasResourceBundle(u, f)
            ? (this.state[d] = 2)
            : this.state[d] < 0 ||
              (this.state[d] === 1
                ? a[d] === void 0 && (a[d] = !0)
                : ((this.state[d] = 1),
                  (c = !1),
                  a[d] === void 0 && (a[d] = !0),
                  o[d] === void 0 && (o[d] = !0),
                  l[f] === void 0 && (l[f] = !0)))
        }),
          c || (s[u] = !0)
      }),
      (Object.keys(o).length || Object.keys(a).length) &&
        this.queue.push({
          pending: a,
          pendingCount: Object.keys(a).length,
          loaded: {},
          errors: [],
          callback: i,
        }),
      {
        toLoad: Object.keys(o),
        pending: Object.keys(a),
        toLoadLanguages: Object.keys(s),
        toLoadNamespaces: Object.keys(l),
      }
    )
  }
  loaded(t, n, r) {
    const i = t.split('|'),
      o = i[0],
      a = i[1]
    n && this.emit('failedLoading', o, a, n),
      !n &&
        r &&
        this.store.addResourceBundle(o, a, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2),
      n && r && (this.state[t] = 0)
    const s = {}
    this.queue.forEach((l) => {
      xN(l.loaded, [o], a),
        DN(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach((u) => {
            s[u] || (s[u] = {})
            const c = l.loaded[u]
            c.length &&
              c.forEach((f) => {
                s[u][f] === void 0 && (s[u][f] = !0)
              })
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback())
    }),
      this.emit('loaded', s),
      (this.queue = this.queue.filter((l) => !l.done))
  }
  read(t, n, r) {
    let i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      o =
        arguments.length > 4 && arguments[4] !== void 0
          ? arguments[4]
          : this.retryTimeout,
      a = arguments.length > 5 ? arguments[5] : void 0
    if (!t.length) return a(null, {})
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({
        lng: t,
        ns: n,
        fcName: r,
        tried: i,
        wait: o,
        callback: a,
      })
      return
    }
    this.readingCalls++
    const s = (u, c) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const f = this.waitingReads.shift()
          this.read(f.lng, f.ns, f.fcName, f.tried, f.wait, f.callback)
        }
        if (u && c && i < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, i + 1, o * 2, a)
          }, o)
          return
        }
        a(u, c)
      },
      l = this.backend[r].bind(this.backend)
    if (l.length === 2) {
      try {
        const u = l(t, n)
        u && typeof u.then == 'function'
          ? u.then((c) => s(null, c)).catch(s)
          : s(null, u)
      } catch (u) {
        s(u)
      }
      return
    }
    return l(t, n, s)
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      i = arguments.length > 3 ? arguments[3] : void 0
    if (!this.backend)
      return (
        this.logger.warn(
          'No backend was added via i18next.use. Will not load resources.',
        ),
        i && i()
      )
    typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)),
      typeof n == 'string' && (n = [n])
    const o = this.queueLoad(t, n, r, i)
    if (!o.toLoad.length) return o.pending.length || i(), null
    o.toLoad.forEach((a) => {
      this.loadOne(a)
    })
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r)
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r)
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ''
    const r = t.split('|'),
      i = r[0],
      o = r[1]
    this.read(i, o, 'read', void 0, void 0, (a, s) => {
      a &&
        this.logger.warn(
          `${n}loading namespace ${o} for language ${i} failed`,
          a,
        ),
        !a &&
          s &&
          this.logger.log(`${n}loaded namespace ${o} for language ${i}`, s),
        this.loaded(t, a, s)
    })
  }
  saveMissing(t, n, r, i, o) {
    let a = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      s =
        arguments.length > 6 && arguments[6] !== void 0
          ? arguments[6]
          : () => {}
    if (
      this.services.utils &&
      this.services.utils.hasLoadedNamespace &&
      !this.services.utils.hasLoadedNamespace(n)
    ) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      )
      return
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const l = { ...a, isUpdate: o },
          u = this.backend.create.bind(this.backend)
        if (u.length < 6)
          try {
            let c
            u.length === 5 ? (c = u(t, n, r, i, l)) : (c = u(t, n, r, i)),
              c && typeof c.then == 'function'
                ? c.then((f) => s(null, f)).catch(s)
                : s(null, c)
          } catch (c) {
            s(c)
          }
        else u(t, n, r, i, s, l)
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, i)
    }
  }
}
const k0 = () => ({
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: (e) => {
      let t = {}
      if (
        (typeof e[1] == 'object' && (t = e[1]),
        typeof e[1] == 'string' && (t.defaultValue = e[1]),
        typeof e[2] == 'string' && (t.tDescription = e[2]),
        typeof e[2] == 'object' || typeof e[3] == 'object')
      ) {
        const n = e[3] || e[2]
        Object.keys(n).forEach((r) => {
          t[r] = n[r]
        })
      }
      return t
    },
    interpolation: {
      escapeValue: !0,
      format: (e) => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  }),
  T0 = (e) => (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs &&
      e.supportedLngs.indexOf('cimode') < 0 &&
      (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  ),
  Al = () => {},
  VN = (e) => {
    Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach((n) => {
      typeof e[n] == 'function' && (e[n] = e[n].bind(e))
    })
  }
class js extends Fc {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    if (
      (super(),
      (this.options = T0(t)),
      (this.services = {}),
      (this.logger = Sr),
      (this.modules = { external: [] }),
      VN(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this
      setTimeout(() => {
        this.init(t, n)
      }, 0)
    }
  }
  init() {
    var t = this
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0
    ;(this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == 'string'
          ? (n.defaultNS = n.ns)
          : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]))
    const i = k0()
    ;(this.options = { ...i, ...this.options, ...T0(n) }),
      this.options.compatibilityAPI !== 'v1' &&
        (this.options.interpolation = {
          ...i.interpolation,
          ...this.options.interpolation,
        }),
      n.keySeparator !== void 0 &&
        (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 &&
        (this.options.userDefinedNsSeparator = n.nsSeparator)
    const o = (c) => (c ? (typeof c == 'function' ? new c() : c) : null)
    if (!this.options.isClone) {
      this.modules.logger
        ? Sr.init(o(this.modules.logger), this.options)
        : Sr.init(null, this.options)
      let c
      this.modules.formatter
        ? (c = this.modules.formatter)
        : typeof Intl < 'u' && (c = zN)
      const f = new x0(this.options)
      this.store = new w0(this.options.resources, this.options)
      const d = this.services
      ;(d.logger = Sr),
        (d.resourceStore = this.store),
        (d.languageUtils = f),
        (d.pluralResolver = new AN(f, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        c &&
          (!this.options.interpolation.format ||
            this.options.interpolation.format === i.interpolation.format) &&
          ((d.formatter = o(c)),
          d.formatter.init(d, this.options),
          (this.options.interpolation.format = d.formatter.format.bind(
            d.formatter,
          ))),
        (d.interpolator = new FN(this.options)),
        (d.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (d.backendConnector = new HN(
          o(this.modules.backend),
          d.resourceStore,
          d,
          this.options,
        )),
        d.backendConnector.on('*', function (g) {
          for (
            var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), C = 1;
            C < y;
            C++
          )
            S[C - 1] = arguments[C]
          t.emit(g, ...S)
        }),
        this.modules.languageDetector &&
          ((d.languageDetector = o(this.modules.languageDetector)),
          d.languageDetector.init &&
            d.languageDetector.init(d, this.options.detection, this.options)),
        this.modules.i18nFormat &&
          ((d.i18nFormat = o(this.modules.i18nFormat)),
          d.i18nFormat.init && d.i18nFormat.init(this)),
        (this.translator = new Gu(this.services, this.options)),
        this.translator.on('*', function (g) {
          for (
            var y = arguments.length, S = new Array(y > 1 ? y - 1 : 0), C = 1;
            C < y;
            C++
          )
            S[C - 1] = arguments[C]
          t.emit(g, ...S)
        }),
        this.modules.external.forEach((g) => {
          g.init && g.init(this)
        })
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Al),
      this.options.fallbackLng &&
        !this.services.languageDetector &&
        !this.options.lng)
    ) {
      const c = this.services.languageUtils.getFallbackCodes(
        this.options.fallbackLng,
      )
      c.length > 0 && c[0] !== 'dev' && (this.options.lng = c[0])
    }
    !this.services.languageDetector &&
      !this.options.lng &&
      this.logger.warn(
        'init: no languageDetector is used and no lng is defined',
      ),
      [
        'getResource',
        'hasResourceBundle',
        'getResourceBundle',
        'getDataByLanguage',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments)
        }
      }),
      [
        'addResource',
        'addResources',
        'addResourceBundle',
        'removeResourceBundle',
      ].forEach((c) => {
        this[c] = function () {
          return t.store[c](...arguments), t
        }
      })
    const l = La(),
      u = () => {
        const c = (f, d) => {
          ;(this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn(
                'init: i18next is already initialized. You should call init just once!',
              ),
            (this.isInitialized = !0),
            this.options.isClone ||
              this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            l.resolve(d),
            r(f, d)
        }
        if (
          this.languages &&
          this.options.compatibilityAPI !== 'v1' &&
          !this.isInitialized
        )
          return c(null, this.t.bind(this))
        this.changeLanguage(this.options.lng, c)
      }
    return (
      this.options.resources || !this.options.initImmediate
        ? u()
        : setTimeout(u, 0),
      l
    )
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Al
    const i = typeof t == 'string' ? t : this.language
    if (
      (typeof t == 'function' && (r = t),
      !this.options.resources || this.options.partialBundledLanguages)
    ) {
      if (
        i &&
        i.toLowerCase() === 'cimode' &&
        (!this.options.preload || this.options.preload.length === 0)
      )
        return r()
      const o = [],
        a = (s) => {
          if (!s || s === 'cimode') return
          this.services.languageUtils.toResolveHierarchy(s).forEach((u) => {
            u !== 'cimode' && o.indexOf(u) < 0 && o.push(u)
          })
        }
      i
        ? a(i)
        : this.services.languageUtils
            .getFallbackCodes(this.options.fallbackLng)
            .forEach((l) => a(l)),
        this.options.preload && this.options.preload.forEach((s) => a(s)),
        this.services.backendConnector.load(o, this.options.ns, (s) => {
          !s &&
            !this.resolvedLanguage &&
            this.language &&
            this.setResolvedLanguage(this.language),
            r(s)
        })
    } else r(null)
  }
  reloadResources(t, n, r) {
    const i = La()
    return (
      typeof t == 'function' && ((r = t), (t = void 0)),
      typeof n == 'function' && ((r = n), (n = void 0)),
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Al),
      this.services.backendConnector.reload(t, n, (o) => {
        i.resolve(), r(o)
      }),
      i
    )
  }
  use(t) {
    if (!t)
      throw new Error(
        'You are passing an undefined module! Please check the object you are passing to i18next.use()',
      )
    if (!t.type)
      throw new Error(
        'You are passing a wrong module! Please check the object you are passing to i18next.use()',
      )
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) &&
        (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && Ew.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    )
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n]
        if (
          !(['cimode', 'dev'].indexOf(r) > -1) &&
          this.store.hasLanguageSomeTranslations(r)
        ) {
          this.resolvedLanguage = r
          break
        }
      }
  }
  changeLanguage(t, n) {
    var r = this
    this.isLanguageChangingTo = t
    const i = La()
    this.emit('languageChanging', t)
    const o = (l) => {
        ;(this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l)
      },
      a = (l, u) => {
        u
          ? (o(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', u),
            this.logger.log('languageChanged', u))
          : (this.isLanguageChangingTo = void 0),
          i.resolve(function () {
            return r.t(...arguments)
          }),
          n &&
            n(l, function () {
              return r.t(...arguments)
            })
      },
      s = (l) => {
        !t && !l && this.services.languageDetector && (l = [])
        const u =
          typeof l == 'string'
            ? l
            : this.services.languageUtils.getBestMatchFromCodes(l)
        u &&
          (this.language || o(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, (c) => {
            a(c, u)
          })
      }
    return (
      !t &&
      this.services.languageDetector &&
      !this.services.languageDetector.async
        ? s(this.services.languageDetector.detect())
        : !t &&
            this.services.languageDetector &&
            this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(s)
            : this.services.languageDetector.detect(s)
          : s(t),
      i
    )
  }
  getFixedT(t, n, r) {
    var i = this
    const o = function (a, s) {
      let l
      if (typeof s != 'object') {
        for (
          var u = arguments.length, c = new Array(u > 2 ? u - 2 : 0), f = 2;
          f < u;
          f++
        )
          c[f - 2] = arguments[f]
        l = i.options.overloadTranslationOptionHandler([a, s].concat(c))
      } else l = { ...s }
      ;(l.lng = l.lng || o.lng),
        (l.lngs = l.lngs || o.lngs),
        (l.ns = l.ns || o.ns),
        l.keyPrefix !== '' && (l.keyPrefix = l.keyPrefix || r || o.keyPrefix)
      const d = i.options.keySeparator || '.'
      let g
      return (
        l.keyPrefix && Array.isArray(a)
          ? (g = a.map((y) => `${l.keyPrefix}${d}${y}`))
          : (g = l.keyPrefix ? `${l.keyPrefix}${d}${a}` : a),
        i.t(g, l)
      )
    }
    return (
      typeof t == 'string' ? (o.lng = t) : (o.lngs = t),
      (o.ns = n),
      (o.keyPrefix = r),
      o
    )
  }
  t() {
    return this.translator && this.translator.translate(...arguments)
  }
  exists() {
    return this.translator && this.translator.exists(...arguments)
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
    if (!this.isInitialized)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18next was not initialized',
          this.languages,
        ),
        !1
      )
    if (!this.languages || !this.languages.length)
      return (
        this.logger.warn(
          'hasLoadedNamespace: i18n.languages were undefined or empty',
          this.languages,
        ),
        !1
      )
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      i = this.options ? this.options.fallbackLng : !1,
      o = this.languages[this.languages.length - 1]
    if (r.toLowerCase() === 'cimode') return !0
    const a = (s, l) => {
      const u = this.services.backendConnector.state[`${s}|${l}`]
      return u === -1 || u === 0 || u === 2
    }
    if (n.precheck) {
      const s = n.precheck(this, a)
      if (s !== void 0) return s
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (a(r, t) && (!i || a(o, t)))
    )
  }
  loadNamespaces(t, n) {
    const r = La()
    return this.options.ns
      ? (typeof t == 'string' && (t = [t]),
        t.forEach((i) => {
          this.options.ns.indexOf(i) < 0 && this.options.ns.push(i)
        }),
        this.loadResources((i) => {
          r.resolve(), n && n(i)
        }),
        r)
      : (n && n(), Promise.resolve())
  }
  loadLanguages(t, n) {
    const r = La()
    typeof t == 'string' && (t = [t])
    const i = this.options.preload || [],
      o = t.filter(
        (a) =>
          i.indexOf(a) < 0 && this.services.languageUtils.isSupportedCode(a),
      )
    return o.length
      ? ((this.options.preload = i.concat(o)),
        this.loadResources((a) => {
          r.resolve(), n && n(a)
        }),
        r)
      : (n && n(), Promise.resolve())
  }
  dir(t) {
    if (
      (t ||
        (t =
          this.resolvedLanguage ||
          (this.languages && this.languages.length > 0
            ? this.languages[0]
            : this.language)),
      !t)
    )
      return 'rtl'
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      r = (this.services && this.services.languageUtils) || new x0(k0())
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 ||
      t.toLowerCase().indexOf('-arab') > 1
      ? 'rtl'
      : 'ltr'
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0
    return new js(t, n)
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Al
    const r = t.forkResourceStore
    r && delete t.forkResourceStore
    const i = { ...this.options, ...t, isClone: !0 },
      o = new js(i)
    return (
      (t.debug !== void 0 || t.prefix !== void 0) &&
        (o.logger = o.logger.clone(t)),
      ['store', 'services', 'language'].forEach((s) => {
        o[s] = this[s]
      }),
      (o.services = { ...this.services }),
      (o.services.utils = { hasLoadedNamespace: o.hasLoadedNamespace.bind(o) }),
      r &&
        ((o.store = new w0(this.store.data, i)),
        (o.services.resourceStore = o.store)),
      (o.translator = new Gu(o.services, i)),
      o.translator.on('*', function (s) {
        for (
          var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), c = 1;
          c < l;
          c++
        )
          u[c - 1] = arguments[c]
        o.emit(s, ...u)
      }),
      o.init(i, n),
      (o.translator.options = i),
      (o.translator.backendConnector.services.utils = {
        hasLoadedNamespace: o.hasLoadedNamespace.bind(o),
      }),
      o
    )
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    }
  }
}
const Yt = js.createInstance()
Yt.createInstance = js.createInstance
Yt.createInstance
Yt.dir
Yt.init
Yt.loadResources
Yt.reloadResources
Yt.use
Yt.changeLanguage
Yt.getFixedT
Yt.t
Yt.exists
Yt.setDefaultNamespace
Yt.hasLoadedNamespace
Yt.loadNamespaces
Yt.loadLanguages
const BN = { login: 'Đăng nhập', register: 'Đăng ký' },
  UN = {
    welcome: 'Chào mừng bạn đến với trang web của chúng tôi!',
    buttonLabel: 'Nhấn vào tôi',
  },
  WN = {
    hello: 'Xin chào',
    goodMorning: 'Chào buổi sáng',
    goodAfternoon: 'Chào buổi chiều',
  },
  KN = { helmet_setting: 'Cài đặt' },
  qN = { login: 'Đăng nhập' },
  GN = {
    setting: 'Cài đặt hệ thống',
    general_settings: 'Thiết lập chung',
    users: 'Người dùng',
    groups_users: 'Nhóm người dùng',
    technique_access: 'Quyền truy cập',
    technique_menu: 'Mục Menu',
    home: 'Trang chủ',
    technique: 'Kỹ thuật',
    work: 'Công việc',
    time_tracking: 'Dữ liệu công theo ngày',
    payroll: 'Dữ liệu công theo tháng',
    notifications: 'Thông báo',
    recruitment: 'Tuyển dụng',
    data_recruitment: 'Danh sách nhân sự',
    salary: 'Dữ liệu chấm công',
    import: 'Import',
  },
  XN = {
    CID: 'CID',
    name_user: 'Tên',
    login: 'Đăng nhập',
    language: 'Ngôn ngữ',
    active: 'Trạng thái',
    success: 'Đã kết nối',
    error: 'Chưa kêt nối',
    default: 'Chưa xác định',
    name_group: 'Tên nhóm',
    add_row: 'Thêm hàng mới',
    action: 'Action',
    sequence: 'Trình tự',
    name: 'Menu',
    key_name: 'Key',
    parent_name: 'Menu cha',
    total: 'Tổng',
    item: 'Mục',
    parent_path: 'Parent Path',
    check_pass: 'Trạng thái mật khẩu',
  },
  QN = {
    auth: BN,
    common: UN,
    greetings: WN,
    page_setting: KN,
    page_login: qN,
    side_bar: GN,
    column_table: XN,
  },
  YN = { login: 'Log in', register: 'Register' },
  ZN = { welcome: 'Welcome to our website!', buttonLabel: 'Click me' },
  JN = {
    hello: 'Hello',
    goodMorning: 'Good morning',
    goodAfternoon: 'Good afternoon',
  },
  e5 = { helmet_setting: 'Setting' },
  t5 = { login: 'Log in' },
  n5 = {
    setting: 'System settings',
    general_settings: 'General settings',
    users: 'User',
    groups_users: 'User group',
    technique_access: 'Access',
    technique_menu: 'Section menu',
    home: 'Home',
    technique: 'Technique',
    work: 'Job',
    time_tracking: 'Daily attendance data',
    payroll: 'Monthly attendance data',
    notifications: 'Notification',
    recruitment: 'Recruitment',
    data_recruitment: 'List of personnel',
    salary: 'Timekeeping data',
    import: 'Import',
    payroll_me: 'Personal payroll',
    payrolls: 'Payroll data',
    time_tracking_total: 'General time sheet',
  },
  r5 = {
    CID: 'CID',
    name_user: 'Name',
    login: 'Login',
    language: 'Language',
    active: 'Status',
    success: 'Connected',
    error: 'Not Connected',
    default: 'Undefined',
    name_group: 'Group Name',
    add_row: 'Add New Row',
    action: 'Action',
    sequence: 'Sequence',
    name: 'Menu',
    key_name: 'Key',
    parent_name: 'Parent Menu',
    total: 'Total',
    item: 'Item',
    parent_path: 'Parent Path',
  },
  i5 = {
    auth: YN,
    common: ZN,
    greetings: JN,
    page_setting: e5,
    page_login: t5,
    side_bar: n5,
    column_table: r5,
  },
  o5 = { login: '로그인하십시오', register: '등록하다' },
  a5 = {
    welcome: '당사 웹 사이트에 오신 것을 환영합니다!',
    buttonLabel: '나를 클릭하십시오',
  },
  s5 = {
    hello: '안녕하세요',
    goodMorning: '좋은 아침이에요',
    goodAfternoon: '좋은 오후에요',
  },
  l5 = { helmet_setting: '환경' },
  u5 = { login: '로그인하십시오' },
  c5 = {
    setting: '시스템 설정',
    general_settings: '일반적인 설정',
    users: '사용자',
    groups_users: '사용자 그룹',
    technique_access: '입장',
    technique_menu: '섹션 메뉴',
    home: '집',
    technique: '기술',
    work: '직업',
    time_tracking: '일일 근무 데이터',
    payroll: '월간 근무 데이터',
    notifications: '공고',
    recruitment: '신병 모집',
    data_recruitment: '인원 목록',
    salary: '시간 관리 데이터',
    import: '수입',
  },
  f5 = {
    CID: 'CID',
    name_user: '이름',
    login: '로그인',
    language: '언어',
    active: '상태',
    success: '연결 완료',
    error: '연결되지 않음',
    default: '미정',
    name_group: '그룹 이름',
    add_row: '새 행 추가',
    action: '작업',
    sequence: '순서',
    name: '메뉴',
    key_name: '키',
    parent_name: '상위 메뉴',
    total: '총계',
    item: '항목',
    parent_path: '상위 경로',
  },
  d5 = {
    auth: o5,
    common: a5,
    greetings: s5,
    page_setting: l5,
    page_login: u5,
    side_bar: c5,
    column_table: f5,
  },
  p5 = localStorage.getItem('language') || 'vi'
Yt.use(JM).init({
  resources: {
    vi: { translation: QN },
    en: { translation: i5 },
    ko: { translation: d5 },
  },
  lng: p5,
  fallbackLng: 'vi',
  interpolation: { escapeValue: !1 },
})
const h5 = Iu.createRoot(document.getElementById('root'))
h5.render(X.jsx(ze.StrictMode, { children: X.jsx(SN, {}) }))
export {
  PI as $,
  RC as A,
  Yi as B,
  $c as C,
  pT as D,
  Gs as E,
  ye as F,
  S5 as G,
  w5 as H,
  xi as I,
  cp as J,
  st as K,
  KS as L,
  b5 as M,
  io as N,
  Xs as O,
  Ja as P,
  B as Q,
  v5 as R,
  _s as S,
  ee as T,
  QE as U,
  _r as V,
  VC as W,
  tn as X,
  Lk as Y,
  J as Z,
  ce as _,
  _ as a,
  xc as a0,
  Ft as a1,
  qs as a2,
  Ql as a3,
  Ws as a4,
  bc as a5,
  Pn as a6,
  Qi as a7,
  jt as a8,
  x5 as a9,
  X as aA,
  bw as aB,
  rS as aC,
  GC as aD,
  Iu as aE,
  mN as aF,
  pm as aG,
  zr as aH,
  WE as aI,
  y5 as aa,
  Kh as ab,
  JO as ac,
  tR as ad,
  eR as ae,
  nR as af,
  BT as ag,
  wv as ah,
  aC as ai,
  jO as aj,
  zv as ak,
  kC as al,
  KO as am,
  g5 as an,
  Ji as ao,
  JE as ap,
  Hg as aq,
  uv as ar,
  e$ as as,
  t$ as at,
  EI as au,
  Gg as av,
  KT as aw,
  f$ as ax,
  E5 as ay,
  FO as az,
  Ys as b,
  ar as c,
  ae as d,
  Fu as e,
  dS as f,
  C5 as g,
  oe as h,
  dn as i,
  sn as j,
  ze as k,
  Ic as l,
  Qs as m,
  TC as n,
  AO as o,
  HO as p,
  $ as q,
  p as r,
  Ec as s,
  wi as t,
  pa as u,
  bi as v,
  Mr as w,
  Vt as x,
  Bt as y,
  De as z,
}
