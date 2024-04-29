import { Dispatch } from 'redux'
import { IStore } from './types'
import getSearch from 'services/getSearch'

export const setDetail = (filmInfo: IStore) => {
  return {
    type: 'show/setDetail',
    payload: filmInfo,
  }
}

export const loadDetail = (value: string | undefined) => async (dispatch: Dispatch) => {
  try {
    const response = await getSearch(value)

    dispatch(setDetail(response.data))
  } catch (e) {
    console.log('Error: ', e)
  }
}
