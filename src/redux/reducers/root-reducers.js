import { combineReducers } from 'redux';
import { homepageReducer } from "./homepage-reducer"

export const rootReducer = combineReducers({
    // all reducers goes here.
    homepageReducer
});