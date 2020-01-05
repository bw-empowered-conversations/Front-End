import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

export const initialState = {
    username: '',
    email: '',
    password: ''
}

export const rootReducer = combineReducers({
    form: formReducer
})
