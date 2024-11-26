function checkBarcode(barcode, tableData) {
  if (!barcode || !Array.isArray(tableData)) {
    return {
      success: false,
      message: 'Dữ liệu không hợp lệ hoặc barcode bị thiếu',
    }
  }

  const parts = barcode.split('/')
  if (parts.length < 5) {
    return {
      success: false,
      message: 'Barcode không đúng định dạng',
    }
  }

  const code = parts[0]
  const lot = parts[1] // Lot
  const qty = parseInt(parts[2], 10) // Số lượng quét
  const dc = parts[3] // Date Code
  const reel = parts[4] // Reel

  if (isNaN(qty)) {
    return {
      success: false,
      message: 'Số lượng (qty) trong barcode không hợp lệ',
    }
  }
  const item = tableData.find((row) => row.itemNo === code)
  if (item) {
    if (item.remainQty < qty) {
      return {
        success: false,
        message: `Số lượng quét (${qty}) vượt quá số lượng còn lại (${item.remainQty}) của ItemNo: ${item.itemNo}.`,
      }
    }

    if (item.remainQty > qty)
      return {
        success: true,
        message: `Barcode "${barcode}" khớp với ItemNo: ${item.itemNo}, Số lượng quét: ${qty}.`,
        data: {
          itemNo: code,
          qty,
          lot,
          dc,
          reel,
          barcode,
        },
      }
  }
}

self.onmessage = function (event) {
  const { type, barcode, tableData } = event.data
  let result

  switch (type) {
    case 'CHECK_BARCODE':
      result = checkBarcode(barcode, tableData)
      break

    default:
      result = {
        success: false,
        message: `Loại xử lý "${type}" không được hỗ trợ.`,
      }
  }

  self.postMessage(result)
}
