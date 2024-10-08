export type Wholesale = {
  price: number
  quantity: number
}

export type DataItem = {
  id: string
  productId: string
  price: number
  wholesale: Wholesale
}

export type MetaType = {
  onUpdateDataByIndexWithKey: (
    index: number,
    payload: Partial<DataItem>
  ) => void
  onUpdateDataById: (id: string, payload: Partial<DataItem>) => void
  getDataById: (id: string) => DataItem
}
