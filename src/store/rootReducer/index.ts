import { combineReducers } from 'redux'
import categoryReducer from 'store/category/reducer'
import detailReducer from 'store/detail/reducer'
import showReducer from 'store/show/reducer'
import showReducerSearch from 'store/searchShow/reducer'

export const rootReducer = combineReducers({
  showReducer,
  detailReducer,
  categoryReducer,
  showReducerSearch,
})
