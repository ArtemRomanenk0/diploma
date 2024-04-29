import { AnyAction } from 'redux'

import { IStore } from './types'

const initialState = {
  list: [],
}

const categoryReducer = (state: IStore = initialState, action: AnyAction) => {
  switch (action.type) {
    case 'show/setCategory':
      return { ...state, list: [...action.payload] }
    default:
      return state
  }
}

export default categoryReducer
