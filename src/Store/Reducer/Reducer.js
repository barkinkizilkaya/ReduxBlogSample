import react from 'react';
import * as ActionTypes from '../Actions/ActionTypes';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {

    if (action.type == ActionTypes.ADD) {
        return {
            ...state,
            count: state.count + action.value
        }
    }

    if (action.type == ActionTypes.REMOVE) {
        return {
            ...state,
            count: state.count - action.value
        }
    }
    else
        return state;
}

export default reducer;

