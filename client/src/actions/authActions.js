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
    const new_user = user
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
                debugger
                authenticate({email: new_user.email, password: new_user.password});
                // const { user, jwt } = jresp
                // localStorage.setItem('token', jwt)
                // dispatch(authSuccess(user, jwt))
                // dispatch(reset('signup'))
                // router.history.replace('/')
            })
            .catch((errors) => {
                console.log(errors)
                dispatch(authFailure(errors))
                // throw new SubmissionError(errors)
            })
    }
}

export const authenticate = (credentials) => {
    return dispatch => {
        // dispatch(authRequest())

        const headers = {
            'Content-Type': 'application/json',
        }

        return fetch(`${API_URL}/user_token`, {
            method: 'post',
            headers: headers,
            body: JSON.stringify({auth: credentials})
        })
            .then(res => res.json())
            .then((response) => {
                // debugger
                const { user, token } = response
                localStorage.setItem('token', token)
                dispatch(authSuccess(user, token))
            })
            .catch((errors) => {
                console.log(errors);
                dispatch(authFailure(errors))
                localStorage.removeItem('token')
            })
    }
}

