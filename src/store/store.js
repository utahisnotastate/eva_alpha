import { createStore } from 'redux'
import allReducers from './reducers/eva.reducers'
import { composeWithDevTools } from '@redux-devtools/extension'

const store = createStore(allReducers, composeWithDevTools())

export default store
