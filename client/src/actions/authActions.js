import fetch from 'isomorphic-fetch';

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
                console.log("user created, about to authenticate")
                authenticate({email: newUser.email, password: newUser.password});
            })
            .catch((errors) => {
                console.log(errors)
                dispatch(authFailure(errors))
            })
    }
}

export const authenticate = (credentials) => {
    console.log("got to authenticate, credentials are:", credentials)
    return dispatch => {
        console.log("got into dispatch")
        dispatch(authRequest())

        return fetch(`${API_URL}/user_token`, {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({auth: credentials})
        })
            .then(res => res.json())
            .then((response) => {
                const token = response.jwt;
                localStorage.setItem('token', token);
                return getUser(credentials)
            })
            .then((user) => {
                dispatch(authSuccess(user, localStorage.token))
            })
            .catch((errors) => {
                console.log(errors);
                dispatch(authFailure(errors))
                localStorage.removeItem('token')
            })
    }
}

const getUser = (credentials) => { 
    const request = new Request('http://localhost:3001/find_user', {
      method: "POST",
      headers: new Headers({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.token}`,
      }),
      body: JSON.stringify({user: credentials})
    })
    
    return fetch(request)
        .then(response => response.json())
        .then(userJson => {return userJson})
        .catch(error => {
            return error;
        });
}

export const logout = () => {
    return dispatch => {
        localStorage.clear();
        return dispatch({type: 'LOGOUT'});
    }
}