import { AnyAction } from "redux"

import { IStore } from "./types"

const initialState = {
	list: [],
}

const showReducerSearch = (state : IStore = initialState , action : AnyAction) => {
	switch (action.type) {
		case 'show/setShowSearch' :
			return {...state, list: [...action.payload]}
		default:
			return state
	}
}

export default showReducerSearch;