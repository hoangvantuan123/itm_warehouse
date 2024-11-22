;(function () {
  'use strict'
  self.onmessage = function (n) {
    const { type: a, payload: e } = n.data
    if (a === 'processData') {
      const t = i(e.dataTest, e.code, e.quantity)
      self.postMessage({ type: 'processedData', payload: t })
    }
  }
  function i(n, a, e) {
    const t = n.findIndex((s) => s.code === a)
    if (t === -1) return { error: 'Mã không hợp lệ!' }
    const o = n[t]
    return e > o.quantityRemaining
      ? {
          error: `Số lượng nhập vượt quá số lượng còn lại (${o.quantityRemaining})!`,
        }
      : ((n[t].quantityRemaining -= e),
        (n[t].quantityOut += e),
        console.log(n[t].quantityRemaining),
        { updatedData: n, processedData: { code: a, quantity: e } })
  }
})()
