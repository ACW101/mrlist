import axios from "axios";

const token = localStorage.getItem('jwt');

function getAxiosInstance() {
    if (token !== null) {
        return axios.create({
            baseURL: '/api',
            headers: { Authorization: "Bearer " + token }
        })
    }
    return null
}

export const TOGGLE_MENU = "TOGGLE_MENU";
export function toggleMenu() {
    return {
        type: TOGGLE_MENU,
        payload: null
    }
}

export const OPEN_LOGINDIALOG = "OPEN_LOGINDIALOG"
export const CLOSE_LOGINDIALOG = "CLOSE_LOGINDIALOG"
export function openLoginDialog() {
    return {
        type: OPEN_LOGINDIALOG,
        payload: null
    }
}
export function closeLoginDialog() {
    return {
        type: CLOSE_LOGINDIALOG,
        payload: null
    }
}

export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
export const SIGN_IN_FAIL = "SIGN_IN_FAIL"

export function signIn(username, password) {
    return (dispatch) => {
        axios.post('/auth/login', {
            username: username,
            password: password
        })
        .then( res => {
            if (res.data.confirmation === 'ok') {
                const token = res.data.token
                localStorage.setItem('jwt', token)
                dispatch({
                    type: SIGN_IN_SUCCESS,
                    payload: null
                })
            } else if (res.data.confirmation === 'fail') {
                console.log(res.data)
                dispatch({
                    type: SIGN_IN_FAIL,
                    PAYLOAD: res.data.info
                })
            }
        })
        .catch((err) => {
            console.log(err)
        })
    }
}

export function register(username, password) {
    return (dispatch) => {
        axios.post('/auth/register', {
            username: username,
            password: password
        })
        .then( res => {
            if (res.data.confirmation === 'ok') {
                const token = res.data.token
                localStorage.setItem('jwt', token)
                dispatch({type: SIGN_IN_SUCCESS})
                dispatch({type: IS_SIGNED_IN})
            } else if  (res.data.confirmation === 'fail') {
                console.log(res.data)
                dispatch({type: SIGN_IN_FAIL, payload: res.data.info})
            } else if (res.data.confirmation === 'err') {
                console.log('signed in error' + res.data.err)
            }
        })
    }
}

export function test() {
    return dispatch => {
        const instance = getAxiosInstance();
        if (getAxiosInstance !== null) {
            instance.get('/test')
            .then(res => {
                dispatch({type: SIGN_IN_SUCCESS, payload: null})
            })
        }
    }
}

export const IS_SIGNED_IN = "IS_SIGNED_IN"
export const NOT_SIGNED_IN = "NOT_SIGNED_IN"
export function checkToken() {
    return token !== null ? { type: IS_SIGNED_IN }
                          : { type: NOT_SIGNED_IN }
}