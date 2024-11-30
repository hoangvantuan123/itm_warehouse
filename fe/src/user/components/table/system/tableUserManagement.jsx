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
    {
      name: 'UserSeq',
      header: 'UserSeq',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 240
    },
    {
      name: 'UserName',
      header: 'UserName',
      sortable: true,
      filter: 'text',
      resizable: true,
      width: 240
    },
    {
      name: 'UserId', header: 'UserId', sortable: true, filter: 'text', resizable: true,
      width: 200
    },
    {
      name: 'DeptSeq', header: 'DeptSeq', sortable: true, filter: 'text', resizable: true,
      width: 200
    },
    {
      name: 'Remark', header: 'Remark', sortable: true, filter: 'text', resizable: true,
      width: 200
    },
    {
      name: 'LoginDate', header: 'LoginDate', sortable: true, filter: 'text', resizable: true,
      width: 200
    },
    {
      name: 'LoginStatus', header: 'LoginStatus', sortable: true, filter: 'text', resizable: true,
      width: 200
    },
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
