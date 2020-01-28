import {
    SEARCH_USER
} from './actions';

const initialState = {
    name: ""
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEARCH_USER:
            return {
                ...state,
                name: state.name + 'a'
            };
        default:
            return { ...state };
    }
}

