import { authAPI, securityAPI } from "../DAL/api"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false,
    captchaURL: null,
    error: ''
}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'IS-FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'SET-USER-DATA':
            return { ...state, ...action.data }
        case 'SET-ERROR':
            return { ...state, error: action.error }
        case 'GET-CAPTCHA_SUCCSESS':
            return { ...state, captchaURL: action.captchaURL }
        case 'DELETE-ERROR':
            return { ...state, error: '' }
        default: return state
    }
}

export const setProfile = (profile) => ({ type: 'SET-PROFILE', profile })
export const toggleFetching = (isFetching) => ({ type: 'IS-FETCHING', isFetching })
export const setUserData = (userId, login, email, isAuth) => ({ type: 'SET-USER-DATA', data: { userId, login, email, isAuth } })
export const setError = (error) => ({ type: 'SET-ERROR', error })
const deleteError = () => ({ type: 'DELETE-ERROR' })
const getCaptchaSuccsess = (captchaURL) => ({ type: 'GET-CAPTCHA_SUCCSESS', captchaURL })

export const setAuthThunk = () => {
    return dispatch => {
        authAPI.auth()
            .then((response) => {
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data
                    dispatch(setUserData(id, login, email, true))
                }
            })
    }
}
export const getCaptchaURL = () => {
    return async dispatch => {
        const response = await securityAPI.getCaptcha()
        const captchaURl = response.data.url
        dispatch(getCaptchaSuccsess(captchaURl))


    }
}
export const loginThunk = (email, password, rememberMe, captcha = null) => (dispatch) => {
    authAPI.login(email, password, rememberMe, captcha)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthThunk())
                dispatch(deleteError())
            } else {
                if (response.resultCode === 10) {
                    dispatch(getCaptchaURL())
                }
                dispatch(setError(response.messages[0]))
            }
        })
}
export const logoutThunk = () => (dispatch) => {
    authAPI.logout()
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setUserData(null, null, null, false))
            }
        })
}

export default authReducer