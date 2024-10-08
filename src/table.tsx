import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { useCallback, useReducer } from 'react'
import columns from './columns'
import * as actions from './reducer'
import { DataItem } from './types'

export const Table = () => {
  const [data, dispatch] = useReducer(actions.reducer, actions.initialState)

  const handleUpdateDataByIndexWithKey = useCallback(
    (index: number, payload: Partial<DataItem>) => {
      dispatch(actions.updateByIndex(index, payload))
    },
    []
  )

  const handleUpdateDataById = useCallback(
    (id: string, payload: Partial<DataItem>) => {
      dispatch(actions.updateById(id, payload))
    },
    []
  )

  const table = useReactTable<DataItem>({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      onUpdateDataById: handleUpdateDataById,
      onUpdateDataByIndexWithKey: handleUpdateDataByIndexWithKey,
    },
  })

  return (
    <table>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th key={header.id}>
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
