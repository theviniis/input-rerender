import { CellContext } from '@tanstack/react-table'
import { useCallback, useEffect, useMemo } from 'react'
import { UPDATE_DATA_ON_BLUR } from './services'
import { DataItem, MetaType } from './types'
import { handleFocus } from './utils'

export const SugestedPriceCell = ({
  row,
  table,
}: CellContext<DataItem, unknown>) => {
  const price = useMemo(() => row.original.price, [row.original.price])

  const index = useMemo(() => row.index, [row.index])

  const { onUpdateDataById, onUpdateDataByIndexWithKey } = useMemo(
    () => table.options.meta as MetaType,
    [table.options.meta]
  )

  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { valueAsNumber } = event.target
      onUpdateDataByIndexWithKey(index, { price: valueAsNumber || 0 })
    },
    [onUpdateDataByIndexWithKey, index]
  )

  const onBlur = useCallback(async () => {
    const response = await UPDATE_DATA_ON_BLUR(price)
    response.forEach((item) => {
      onUpdateDataById(item.id, item)
    })
  }, [onUpdateDataById, price])

  useEffect(() => {
    document.addEventListener('keypress', handleFocus)
    return () => document.removeEventListener('keypress', handleFocus)
  }, [])

  return (
    <input
      type="number"
      value={price}
      onChange={handleChange}
      onBlur={onBlur}
      onFocus={(event) => event.target.select()}
    />
  )
}
