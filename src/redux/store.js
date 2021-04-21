import messagesReducer from "./messsages-reducer copy"
import profileReducer from "./profile-reducer copy 2"
import sidebarReducer from "./sidebar-reducer"

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
        },
        sideBar: {}
    },
    _render() { },

    getState() { return this._state },

    subscribe(observer) {
        this._render = observer
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action)
        this._state.sideBar = sidebarReducer(this._state.sideBar, action)

        this._render(this._state);

    }
}



export default store;
