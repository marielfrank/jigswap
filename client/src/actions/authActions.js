import fetch from 'isomorphic-fetch';
// import { reset, SubmissionError } from 'redux-form';

const API_URL = "http://localhost:3001"

const authRequest = () => {
    return {
        type: 'AUTHENTICATION_REQUEST'
    }
}

const authSuccess = (user, token) => {
    return {
        type: 'AUTHENTICATION_SUCCESS',
        user: user,
        token: token
    }
}

const authFailure = (errors) => {
    return {
        type: 'AUTHENTICATION_FAILURE',
        errors: errors
    }
}

export const signup = (user) => {
    const newUser = user
    return dispatch => {
        dispatch(authRequest())
        
        return fetch(`${API_URL}/users`, {
            method: 'post',
            body: JSON.stringify({user: user}),
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then(resp => resp.json())
            .then(jresp => {
                authenticate({email: newUser.email, password: newUser.password});
            })
            .catch((errors) => {
                console.log(errors)
                dispatch(authFailure(errors))
            })
    }
}

export const authenticate = (credentials) => {
    return dispatch => {
        dispatch(authRequest())

        return fetch(`${API_URL}/user_token`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({auth: credentials})
        })
            .then(res => res.json())
            .then((response) => {
                const token = response.token;
                localStorage.setItem('token', token);
                // dispatch(authSuccess(user, token))
            })
            .catch((errors) => {
                console.log(errors);
                dispatch(authFailure(errors))
                localStorage.removeItem('token')
            })
    }
}

