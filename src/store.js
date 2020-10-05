import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./redux/reducers/root-reducers"

export const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
);
