import { IStore } from './types'

export const selectDetail = (state: { detailReducer: IStore }): IStore['list'] => {
  return state.detailReducer.list
}
