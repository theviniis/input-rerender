import { DataItem } from './types'
import { makeData } from './utils'

export const UPDATE_DATA_ON_BLUR = async (price = 0) => {
  return new Promise<DataItem[]>((resolve) => {
    setTimeout(() => {
      resolve(
        makeData(5).map((item, index) => ({
          ...item,
          price: price * (index + 1),
          wholesale: {
            price: price * 0.7 * (index + 1),
            quantity: item.wholesale.quantity,
          },
        }))
      )
    }, 300)
  })
}
