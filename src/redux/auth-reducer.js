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
            return { ...state, ...action.data, isAuth: true }
        default: return state
    }


}

export const setProfile = (profile) => ({ type: 'SET-PROFILE', profile })
export const toggleFetching = (isFetching) => ({ type: 'IS-FETCHING', isFetching })
export const setUserData = (id, email, login) => ({ type: 'SET-USER-DATA', data: { id, email, login } })

export const setAuthThunk = () => {
    return dispatch => {
        dispatch(toggleFetching(true))
        authAPI.auth()
            .then((response) => {
                if (response.resultCode === 0) {
                    let { id, email, login } = response.data
                    dispatch(toggleFetching(false))
                    dispatch(setUserData(id, email, login))
                }
            })
    }
}

export default authReducer