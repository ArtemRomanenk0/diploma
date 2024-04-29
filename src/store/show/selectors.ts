import { IStore } from './types'

export const selectShow = (state: { showReducer: IStore }): IStore['list'] => {
  return state.showReducer.list
}
