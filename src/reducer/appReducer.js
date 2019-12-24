
export const initialState = {
    username: '',
    email: '',
    password: ''
}

export const appReducer = (state = initialState,  action) => {
    switch(action.type) {
        default:
        return state;
    }
};

