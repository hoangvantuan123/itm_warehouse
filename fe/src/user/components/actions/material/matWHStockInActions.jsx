import { useState } from 'react'
import { Button } from 'antd'
import {
  SaveOutlined
} from '@ant-design/icons'
import { LiveIcon, OffIcon } from '../../icons'

export default function MatWHStockInActions({
  status,
  handleSubmit,
}) {
  return (
    <div className="flex items-center gap-2">
      {status ? (
        <>
          <span className="inline-flex items-center justify-center rounded-lg w-20 bg-emerald-100 px-5 py-[6px] text-emerald-700">
            <p className="whitespace-nowrap text-sm">LIVE</p>
          </span>
        </>
      ) : (
        <>
          <span className="inline-flex items-center justify-center rounded-lg w-20 bg-red-100 px-5 py-[6px] text-red-700">
            <p className="whitespace-nowrap text-sm">OFF</p>
          </span>
        </>
      )}
      <Button
        key="Save"
        type="primary"
        icon={<SaveOutlined />}
        size="middle"
        className="uppercase"
        onClick={handleSubmit}
        style={{ backgroundColor: '#52c41a', borderColor: '#52c41a' }}
      >
        Save
      </Button>
    </div>
  )
}
