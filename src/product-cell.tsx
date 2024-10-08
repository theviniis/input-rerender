import { CellContext } from '@tanstack/react-table'
import { useMemo } from 'react'
import { DataItem } from './types'

export const ProductCell = ({ row }: CellContext<DataItem, unknown>) => {
  const { productId } = useMemo(() => row.original, [row.original])
  return <span>{productId}</span>
}
