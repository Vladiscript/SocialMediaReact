
import { setAuthThunk } from "./auth-reducer"

let initialState = {
    initialized: false
}

const appReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'INITIALIZED-SUCCESSED':
            return { ...state, initialized: true }

        default: return state
    }


}

export const initializedSuccessed = () => ({ type: 'INITIALIZED-SUCCESSED' })

export const initializeApp = () => {
    return dispatch => {
        Promise.all([dispatch(setAuthThunk())]).then(() => {
            dispatch(initializedSuccessed())
        })
    }
}

export default appReducer