import _ from 'lodash'
import { DataItem } from './types'
import { makeData } from './utils'

type State = DataItem[]

type Action =
  | { type: 'RESET' }
  | {
      type: 'UPDATE_BY_INDEX'
      payload: { index: number; data: Partial<DataItem> }
    }
  | {
      type: 'UPDATE_BY_ID'
      payload: { id: string; data: Partial<DataItem> }
    }

export const initialState: State = makeData(5)

export const reducer = (state: State = initialState, action: Action): State => {
  const newState = [...state]
  switch (action.type) {
    case 'UPDATE_BY_INDEX':
      newState[action.payload.index] = _.merge(
        {},
        newState[action.payload.index],
        action.payload.data
      )
      return newState
    case 'UPDATE_BY_ID':
      const index = state.findIndex((item) => item.id === action.payload.id)
      if (index === -1) return state
      newState[index] = _.merge({}, newState[index], action.payload.data)
      return newState
    case 'RESET':
      return initialState
    default:
      return state
  }
}

export const updateByIndex = (
  index: number,
  payload: Partial<DataItem>
): Action => ({
  type: 'UPDATE_BY_INDEX',
  payload: { index, data: payload },
})

export const updateById = (id: string, payload: Partial<DataItem>): Action => ({
  type: 'UPDATE_BY_ID',
  payload: { id, data: payload },
})
