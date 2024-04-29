import { Dispatch } from 'redux'
import getSearch from 'services/getSearch'

import { IStore } from './types'

export const setCategoryAction = (list: IStore['list']) => {
  return {
    type: 'show/setCategory',
    payload: list,
  }
}

export const loadCategory = () => async (dispatch: Dispatch) => {
  try {
    const response = await getSearch('?q=animals')
    dispatch(setCategoryAction(response.data))
  } catch (e) {
    console.log('Error: ', e)
  }
}
