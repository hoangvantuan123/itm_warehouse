import { useRef, useState, useEffect } from 'react'
import 'tui-grid/dist/tui-grid.css'
import Grid from '@toast-ui/react-grid'
import TuiGrid from 'tui-grid'
import { useNavigate } from 'react-router-dom'
import '../../../../static/css/customTabe.css'
import { encodeBase64Url } from '../../../../utils/decode-JWT'
import CryptoJS from 'crypto-js'

  
function TableUserManagement({
  data,
  loading,
  handleCheck,
  gridRef,
  setKeyPath,
  checkedPath,
  setCheckedPath,
}) {
  const navigate = useNavigate()
  const columns = [
    { name: 'EmpFamilyName', header: 'Họ', sortable: true, filter: 'text',    resizable: true,
        width: 140 },
    { name: 'EmpFirstName', header: 'Tên', sortable: true, filter: 'text',    resizable: true,
        width: 140 },
    {
      name: 'EmpName',
      header: 'Họ và Tên',
      width: 220,
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140
    },
    { name: 'EmpID', header: 'Mã nhân viên', sortable: true, filter: 'text' ,    resizable: true,
        width: 140},
    { name: 'ResidID', header: 'ResidID', sortable: true, filter: 'text',    resizable: true,
        width: 140 },
    {
      name: 'EntDate',
      header: 'Ngày gia nhập',

      sortable: true,
      filter: 'text',
     
      resizable: true,
      width: 140
    },
    {
      name: 'UMEmpType',
      header: 'Loại nhân viên',

      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140
    },
    {
      name: 'BirthDate',
      header: 'Ngày sinh',
      resizable: true,
      width: 140,
      sortable: true
    
    },
    {
      name: 'EmpEngFirstName',
      header: 'Tên Tiếng Anh',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140
    },
    {
      name: 'EmpEngLastName',
      header: 'Họ Tiếng Anh',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 140
    },
    { name: 'Remark', header: 'Ghi chú', sortable: true, filter: 'text' ,   resizable: true,
        width: 140},
  ]


  useEffect(() => {
    if (checkedPath === true) {
      setKeyPath(null)
      setCheckedPath(false)
    }
  }, [checkedPath])

 

  TuiGrid.applyTheme('striped')

  return (
    <div className="w-full gap-1 h-full flex items-center justify-center">
      <div className="w-full h-full flex flex-col border bg-white p-3 rounded-lg overflow-hidden pb-5">
        <Grid
          ref={gridRef}
          data={data}
          columns={columns}
          rowHeight={40}
          bodyHeight="fitToParent"
          rowHeaders={['rowNum', 'checkbox']}
          pagination={{ perPage: 100 }}
          scrollX={true}
          heightResizable={true}
          usageStatistics={true}
          hoverable={true}
          autoResize={true}
          onDblclick={handleCheck}
        />
      </div>
    </div>
  )
}

export default TableUserManagement
