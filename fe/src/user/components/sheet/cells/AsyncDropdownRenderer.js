import CustomRenderer, {
  getMiddleCenterBias,
  GridCellKind,
  TextCellEntry,
  useTheme,
} from '@glideapps/glide-data-grid'

import { Select } from 'antd'

const { Option } = Select

const Wrap = (props) => {
  return <div>{props.children}</div>
}

const ReadOnlyWrap = (props) => {
  return <div>{props.children}</div>
}

const PortalWrap = (props) => {
  return <div>{props.children}</div>
}

const Editor = (p) => {
  const { value: cell, onFinishedEditing, initialValue } = p
  const { allowedValues = [], value: valueIn, loadOptions } = cell.data

  const [inputValue, setInputValue] = React.useState(initialValue ?? '')

  const theme = useTheme()

  const values = React.useMemo(
    () =>
      allowedValues.map((x) => ({
        value: x,
        label: x,
      })),
    [allowedValues],
  )

  if (cell.readonly) {
    return (
      <ReadOnlyWrap>
        <TextCellEntry
          highlight={true}
          autoFocus={false}
          disabled={true}
          value={valueIn ?? ''}
          onChange={() => undefined}
        />
      </ReadOnlyWrap>
    )
  }

  return (
    <Wrap>
      <Select
        className="glide-select"
        style={{ width: '100%' }}
        value={valueIn}
        showSearch
        placeholder=""
        onSearch={setInputValue}
        onChange={async (e) => {
          if (e === null) return
          await new Promise((r) => window.requestAnimationFrame(r))
          onFinishedEditing({
            ...cell,
            data: {
              ...cell.data,
              value: e,
            },
          })
        }}
        filterOption={(input, option) =>
          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
        }
        options={values.map(({ value, label }) => ({
          value,
          label,
        }))}
      />
    </Wrap>
  )
}

export const AsyncDropdownCellRenderer = {
  kind: GridCellKind.Custom,
  isMatch: (c) => c.data.kind === 'async-dropdown-cell',
  draw: (args, cell) => {
    const { ctx, theme, rect } = args
    const { value } = cell.data
    if (value) {
      ctx.fillStyle = theme.textDark
      ctx.fillText(
        value,
        rect.x + theme.cellHorizontalPadding,
        rect.y + rect.height / 2 + getMiddleCenterBias(ctx, theme),
      )
    }
    return true
  },
  measure: (ctx, cell) => {
    const { value } = cell.data
    if (value) {
      return ctx.measureText(value).width + 16
    } else {
      return 16
    }
  },
  provideEditor: () => ({
    editor: Editor,
    disablePadding: true,
    deletedValue: (v) => ({
      ...v,
      copyData: '',
      data: {
        ...v.data,
        value: '',
      },
    }),
  }),
  onPaste: (v, d) => ({
    ...d,
    value: d.allowedValues.includes(v) ? v : d.value,
  }),
}
