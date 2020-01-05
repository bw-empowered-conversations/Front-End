import {useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';

const LOGIN_START = 'LOGIN_START';

export const login = () => dispatch => {
    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })
    dispatch({type: LOGIN_START})
    axiosWithAuth()
        .post('/login', credentials)
        .then(res => {
            console.log(res);
        })
        .catch(err => {
            console.log('Data returned an error', err)
        })
}