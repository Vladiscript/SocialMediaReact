import { authAPI } from "../DAL/api"

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    isFetching: false
}

const authReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'IS-FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'SET-USER-DATA':
            return { ...state, ...action.data }
        default: return state
    }


}

export const setProfile = (profile) => ({ type: 'SET-PROFILE', profile })
export const toggleFetching = (isFetching) => ({ type: 'IS-FETCHING', isFetching })
export const setUserData = (userId, login, email, isAuth) => ({ type: 'SET-USER-DATA', data: { userId, login, email, isAuth } })

export const setAuthThunk = () => {
    return dispatch => {
        authAPI.auth()
            .then((response) => {
                console.log(response);
                if (response.resultCode === 0) {
                    let { id, login, email } = response.data
                    dispatch(setUserData(id, login, email, true))
                }
            })
    }
}
export const loginThunk = (email, password, rememberMe) => (dispatch) => {
    authAPI.login(email, password, rememberMe)
        .then((response) => {
            if (response.resultCode === 0) {
                dispatch(setAuthThunk())
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