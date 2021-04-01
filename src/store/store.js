import {combineReducers, createStore, applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk';
// !This package is used ONLY for debugging.
// !It should be removed when removing the app
import {composeWithDevTools} from "redux-devtools-extension";

import mealsReducer from "./reducers/meals";

const rootReducer = combineReducers({
    meals: mealsReducer,
})

const store = createStore(rootReducer, applyMiddleware(ReduxThunk), composeWithDevTools());

export default store;
