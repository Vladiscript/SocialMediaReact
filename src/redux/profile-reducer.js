
let initialState = {
    posts: [
        { id: 1, postContent: 'Hello, everybody, I\'m a new user' },
        { id: 2, postContent: 'Go strave to Front-end with me' },

    ],
    newPostText: 'Hello, it is Redux'
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
            return {
                ...state, newPostText: action.text
            }

        default: return state
    }


}

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updatePostActionCreator = (text) => ({ type: 'UPDATE-POST-TEXT', text })

export default profileReducer