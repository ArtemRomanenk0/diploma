import { IStore } from './types'

export const selectCategory = (state: { categoryReducer: IStore }): IStore['list'] => {
  return state.categoryReducer.list
}
