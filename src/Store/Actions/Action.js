import react from 'react';
import * as ActionTypes from '../Actions/ActionTypes';


export const Add = (val) =>{
    return{
        type:ActionTypes.ADD,
        value:val
    }
}

export const AddAsync = (val) =>{
    return dispatch =>{
       setTimeout(() => {
           dispatch(Add(val))
       }, 5000);
    }
}

export const Remove = (val) =>{
    return{
        type:ActionTypes.REMOVE,
        value:val
    }
}