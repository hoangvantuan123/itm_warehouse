export const filterAndSelectColumnsA = (addRows, columnsToSelect, status) => {
  const filteredRows = addRows
    .filter((row) => row.Status === status)  
    .map((row) => {
      const selectedRow = {};
      let isValidRow = false; 

      columnsToSelect.forEach((col) => {
        if (col !== 'Status' && row.hasOwnProperty(col)) {
          const value = row[col];
          
          if (value !== '' && value != null) {
            isValidRow = true;
          }
          if (isValidRow) {
            selectedRow[col] = value;
          }
        }
      });

      return isValidRow ? selectedRow : null;
    })
    .filter(row => row !== null); 

  return filteredRows;
};
