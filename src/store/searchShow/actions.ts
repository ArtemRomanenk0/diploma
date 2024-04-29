import { Dispatch } from "redux"


import { IStore } from "./types"
import getShow from "services"

export const setShowSearchAction = (list : IStore['list']) => {
	return {
		type: 'show/setShowSearch',
		payload: list,
	}
}

export const loadShowSearch = (value: string | undefined) => async (dispatch : Dispatch) => {
	try {
		const response = await getShow(value)
		dispatch(setShowSearchAction(response.data))

	} catch(e) {
		console.log('Error: ', e)
	}
}
