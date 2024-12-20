import { v4 as uuidv4 } from 'uuid' // Sử dụng thư viện uuid để tạo ID duy nhất

export const onRowAppended = (
  cols,
  setGridData,
  setNumRows,
  setAddedRows,
  numRowsToAdd,
) => {
  if (numRowsToAdd <= 0) {
    return
  }

  const newRows = []

  for (let i = 0; i < numRowsToAdd; i++) {
    const newRow = {}

    cols.forEach((col) => {
      if (col.id === 'Status') {
        newRow[col.id] = 'A'
      } else {
        newRow[col.id] = ''
      }
    })

    newRow.Id = uuidv4()

    newRows.push(newRow)
  }

  setGridData((prevData) => {
    const newData = [...prevData, ...newRows]
    setNumRows((prev) => prev + numRowsToAdd)
    return newData
  })
  setAddedRows((prevAddedRows) => [...prevAddedRows, ...newRows])
}
