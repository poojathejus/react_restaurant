import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import { restaurantlistreducer } from "./reducers/restreducer";

const reducer=combineReducers({
    restReducer : restaurantlistreducer
})

const middleware=[thunk]
const store = createStore(reducer,applyMiddleware(...middleware))

export default store
