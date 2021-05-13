import { usersAPI } from "../DAL/api"

let initialState = {
    posts: [
        { id: 1, postContent: 'Hello, everybody, I\'m a new user' },
        { id: 2, postContent: 'Go strave to Front-end with me' },

    ],
    newPostText: 'Hello, it is Redux',
    profile: null,
    isFetching: false
}

const profileReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'ADD-POST':
            let id = state.posts.length
            let text = state.newPostText
            return {
                ...state,
                posts: [...state.posts, { id: id + 1, postContent: text }]
            }
        case 'UPDATE-POST-TEXT':
            return { ...state, newPostText: action.text }
        case 'IS-FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'SET-PROFILE':
            return { ...state, profile: action.profile }
        default: return state
    }


}

export const addPost = () => ({ type: 'ADD-POST' })
export const updatePost = (text) => ({ type: 'UPDATE-POST-TEXT', text })
export const setProfile = (profile) => ({ type: 'SET-PROFILE', profile })
export const toggleFetching = (isFetching) => ({ type: 'IS-FETCHING', isFetching })

export const getProfileThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFetching(true))
        usersAPI.getProfile(userId)
            .then((response) => {
                dispatch(toggleFetching(false))
                dispatch(setProfile(response))
            })
    }
}

export default profileReducer