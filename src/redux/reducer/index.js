import {createStore,combineReducers,applyMiddleware} from 'redux'
import loginReducer from "./auth"
import alluserReducer from "./users"
import thunk from 'redux-thunk'

const rootreducer = combineReducers({
    auth:loginReducer,
    users:alluserReducer
})

const store = createStore(rootreducer,applyMiddleware(thunk))

export default store