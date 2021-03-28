import {combineReducers, createStore} from "redux";
import mealsReducer from "./reducers/meals";
// !This package is used ONLY for debugging.
// !It should be removed when removing the app
import {composeWithDevTools} from "redux-devtools-extension";

const rootReducer = combineReducers({
    meals: mealsReducer,
})

const store = createStore(rootReducer, composeWithDevTools());

export default store;