const initialState = {
    isAuthenticated: false,
    isAuthenticating: false,
    currentUser: {},
    token: null,
    errors: []
}

export default (state = initialState, action) => {
    switch(action.type) {

        case 'AUTHENTICATION_REQUEST':
            return {
                ...state,
                isAuthenticating: true
            }

        case 'AUTHENTICATION_SUCCESS':
            return {
                ...state,
                isAuthenticated: true,
                isAuthenticating: false,
                currentUser: action.user,
                token: action.token
            }

        case 'AUTHENTICATION_FAILURE':
            return {
                isAuthenticated: false,
                isAuthenticating: false,
                currentUser: {},
                token: null,
                errors: action.errors || []
            }

        case 'LOGOUT':
            console.log("got to logout reducer")
            return {...state, 
                isAuthenticated: false,
                isAuthenticating: false,
                currentUser: {},
                token: null
            };

        default:
            return state;
        
    }
}