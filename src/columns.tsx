import { createColumnHelper } from '@tanstack/react-table'
import { SugestedPriceCell } from './price-cell'
import { ProductCell } from './product-cell'
import { DataItem } from './types'

const columnHelper = createColumnHelper<DataItem>()

export default [
  columnHelper.display({
    header: 'Produto',
    cell: ProductCell,
  }),
  columnHelper.display({
    header: 'Preço',
    cell: SugestedPriceCell,
  }),
]
