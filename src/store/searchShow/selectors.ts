import { IStore } from "./types"

export const selectShowSearch = (state : { showReducerSearch : IStore}) : IStore['list'] => {
	return state.showReducerSearch.list
} 
