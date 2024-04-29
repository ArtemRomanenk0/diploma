import getShow from 'services'

import { Dispatch } from 'redux'
import { IStore } from './types'

export const setShowAction = (list: IStore['list']) => {
  return {
    type: 'show/setShow',
    payload: list,
  }
}

export const loadShow = () => async (dispatch: Dispatch) => {
  try {
    const response = await getShow('girls')
    dispatch(setShowAction(response.data))
  } catch (e) {
    console.log(e, 'произошла ошибка')
  }
}
