import {combineReducers, createStore} from "redux";
// !This package is used ONLY for debugging.
// !It should be removed when removing the app
import {composeWithDevTools} from "redux-devtools-extension";

import marketReducer from "./reducers/market";

const rootReducer = combineReducers({
    market: marketReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;