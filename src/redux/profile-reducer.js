import { profileAPI } from "../DAL/api"

let initialState = {
    posts: [
        { id: 1, postContent: 'Hello, everybody, I\'m a new user' },
        { id: 2, postContent: 'Go strave to Front-end with me' },

    ],
    profile: null,
    isFetching: false,
    error: '',
    status: '',
    profileInfo: {},
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'ADD-POST':
            let id = state.posts.length
            return {
                ...state,
                posts: [...state.posts, { id: id + 1, postContent: action.text }]
            }
        case 'IS-FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'SET-PROFILE':
            return { ...state, profile: action.profile }
        case 'SET-STATUS':
            return { ...state, status: action.status }
        case 'SET-PHOTO-SUCCESS':
            return { ...state, profile: { ...state.profile, photos: action.photos } }
        case 'SET-PROFILE-INFO':
            return { ...state, profileInfo: { ...action.info } }
        case 'SET-ERROR':
            return { ...state, error: action.error }
        default: return state
    }


}

export const addPost = (text) => ({ type: 'ADD-POST', text })
export const setProfile = (profile) => ({ type: 'SET-PROFILE', profile })
export const toggleFetching = (isFetching) => ({ type: 'IS-FETCHING', isFetching })
export const setStatus = (status) => ({ type: 'SET-STATUS', status })
export const setPhotoSuccess = (photos) => ({ type: 'SET-PHOTO-SUCCESS', photos })
const setProfileData = (info) => ({ type: 'SET-PROFILE-INFO', info })
const setError = (error) => ({ type: 'SET-ERROR', error })


export const saveProfile = (profileData) => {
    return async (dispatch, getState) => {

        const userId = getState().auth.userId
        const response = await profileAPI.setProfileInfo(profileData)

        if (response.data.resultCode === 0) {
            dispatch(setProfileData(profileData))
            dispatch(getProfileThunk(userId))

        } else {
            dispatch(setError(response.data.messages[0]))
            return Promise.reject(response.data.messages[0])
        }
    }
}

export const setPhotoThunk = (photo) => {
    return async (dispatch) => {
        const response = await profileAPI.setPhoto(photo)
        if (response.data.resultCode === 0) {
            dispatch(setPhotoSuccess(response.data.data.photos))
        }
    }
}

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        profileAPI.getProfile(userId)
            .then((response) => {
                dispatch(toggleFetching(false))
                dispatch(setProfile(response))
            })
    }
}
export const updateStatusThunk = (status) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        profileAPI.updateStatus(status)
            .then((response) => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status))
                }
            })
    }
}
export const getStatusThunk = (id) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        profileAPI.getStatus(id)
            .then((response) => {

                dispatch(setStatus(response.data))
            }
            )
    }
}


export default profileReducer