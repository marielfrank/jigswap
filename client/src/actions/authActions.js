import fetch from 'isomorphic-fetch';
// import { reset, SubmissionError } from 'redux-form';

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

    return dispatch => {
        dispatch(authRequest())
        
        return fetch('https://localhost:3001/users', {
            method: 'post',
            body: JSON.stringify(user),
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then(resp => resp.json())
            .then(jresp => {
                debugger
                console.log(jresp)
                const { user, jwt } = jresp
                localStorage.setItem('token', jwt)
                dispatch(authSuccess(user, jwt))
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

export const login = (user) => {

    const body = JSON.stringify(user)

    return dispatch => {
        dispatch(authRequest());

        return fetch("https://mondex-api.herokuapp.com/login", {
            method: 'post',
            body: body,
            headers: {
                "Accept":"application/json",
                "Content-Type":"application/json"
            }
        })
            .then((res) => res.json())
            .then((response) => {
                const { user, token } = response;
                localStorage.setItem('token', token);
                dispatch(authSuccess(user, token))
                // dispatch(reset('login'))
                // router.history.replace('/')
            })
            .catch((errors) => {
                console.log(errors)
                dispatch(authFailure(errors))
                // throw new SubmissionError(errors)
            })
    }
}

export const authenticate = (token) => {
    return dispatch => {
        dispatch(authRequest())

        const headers = {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer: ${token}`
        }

        return fetch('https://mondex-api.herokuapp.com/auth/refresh', {
            method: 'post',
            headers: headers,
            body: JSON.stringify({})
        })
            .then(res => res.json())
            .then((response) => {
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

