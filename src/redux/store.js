import { createStore, combineReducers, applyMiddleware } from 'redux'
import localesReducer from './localesDuck'
import thunk from 'redux-thunk'

const rootReducer = combineReducers({
  locales: localesReducer
})

export default function loadStore() {

  let store = createStore(rootReducer, applyMiddleware(thunk))

  return store
}

