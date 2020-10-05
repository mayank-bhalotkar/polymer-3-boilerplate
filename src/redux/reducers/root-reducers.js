import { combineReducers } from 'redux';
import { homeReducer } from "./homepage-reducer"

export const rootReducer = combineReducers({
    // all reducers goes here.
    homeReducer
});