import { homePage } from "../actions/index"

const initialState = {
data: []
};

export const homepageReducer = (state = initialState, action) => {
    switch(action.type) {
        case homePage.GET_HOME_PAGE:
            return {
                ...state,
                data: action.payload
            }
        default:
            return state
    }
}