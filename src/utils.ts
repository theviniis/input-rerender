import { DataItem } from './types'

export const makeData = (count: number): DataItem[] => {
  return Array.from({ length: count }).map((_, index) => ({
    id: `id-${index}`,
    productId: `productId-${index}`,
    description: `description-${index}`,
    price: 2 * index,
    wholesale: {
      price: 2 * index * 0.7,
      quantity: 3,
    },
  }))
}

export const handleFocus = (e: KeyboardEvent) => {
  let nextInput: HTMLInputElement
  if (e.key === 'Enter') {
    const nodeList = document.querySelectorAll('input')
    const currentIndex = Array.from(nodeList).indexOf(
      e.target as HTMLInputElement
    )
    const nextIndex = currentIndex + 1
    if (nextIndex < nodeList.length) {
      nextInput = nodeList[nextIndex] as HTMLInputElement
      nextInput.focus()
    }
  }
}
