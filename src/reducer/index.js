import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';


export const initialState = {
    email: '',
    password: '',
    isLogging: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
       default:
       return state;

    }
}

export const rootReducer = combineReducers({
    form: formReducer
})
