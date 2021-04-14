
let store = {

    _state: {
        profilePage: {
            posts: [
                { id: 1, postContent: 'Hello, everybody, I\'m a new user' },
                { id: 2, postContent: 'Go strave to Front-end with me' },

            ],
            newPostText: 'Hello, it is Redux'
        },
        messagesPage: {
            messages: [
                { id: 1, message: 'How are you?' },
                { id: 2, message: 'Yo, man' },
                { id: 3, message: 'Good luck' },
                { id: 4, message: 'How old are you?' },
                { id: 5, message: 'JS is cool!' },
            ],
            textMessage: '',
            dialogs: [
                { id: 1, name: 'Vlad' },
                { id: 2, name: 'Sveta' },
                { id: 3, name: 'Leganza' },
                { id: 4, name: 'Moysha' },
                { id: 5, name: 'Nikitos' },
            ]
        }
    },
    _render() { },

    getState() { return this._state },

    subscribe(observer) {
        this._render = observer
    },

    dispatch(action) {

        if (action.type === 'ADD-POST') {
            let postText = this._state.profilePage.newPostText
            let posts = this._state.profilePage.posts
            let id = posts.length
            let post = {
                id: id + 1,
                postContent: postText
            }
            posts.push(post)
            this._render(this.state)
            this._state.profilePage.newPostText = ''

        } else if (action.type === 'UPDATE-POST-TEXT') {
            this._state.profilePage.newPostText = action.text
            this._render(this._state);

        } else if (action.type === 'SEND-MESSAGE') {
            let text = this._state.messagesPage.textMessage
            let messages = this._state.messagesPage.messages
            let id = messages.length
            let messageItem = {
                id: id,
                message: text
            }
            messages.push(messageItem)
            this._render(this.state)
            this._state.messagesPage.textMessage = ''


        } else if (action.type === 'INPUT-MESSAGE') {
            this._state.messagesPage.textMessage = action.text
            this._render(this._state)
        }

    }
}
export const sendMessageActionCreator = () => ({ type: 'SEND-MESSAGE' })
export const inputMessageActionCreator = (text) => ({ type: 'INPUT-MESSAGE', text })

export const addPostActionCreator = () => ({ type: 'ADD-POST' })
export const updatePostActionCreator = (text) => ({ type: 'UPDATE-POST-TEXT', text })

export default store;

// let dialogs = [
//     { id: 1, name: 'Vlad' },
//     { id: 2, name: 'Sveta' },
//     { id: 3, name: 'Leganza' },
//     { id: 4, name: 'Moysha' },
//     { id: 5, name: 'Nikitos' },
// ]

// let messages = [
//     { id: 1, message: 'How are you?' },
//     { id: 2, message: 'Yo, man' },
//     { id: 3, message: 'Good luck' },
//     { id: 4, message: 'How old are you?' },
//     { id: 5, message: 'JS is cool!' },
// ]


// let posts = [
//     { id: 1, postContent: 'Hello, everybody, I\'m a new user' },
//     { id: 2, postContent: 'Go strave to Front-end with me' },

// ];