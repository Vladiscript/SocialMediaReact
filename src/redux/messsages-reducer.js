
let initialState = {
    messages: [
        { id: 1, message: 'How are you?' },
        { id: 2, message: 'Yo, man' },
        { id: 3, message: 'Good luck' }
    ],
    dialogs: [
        { id: 1, name: 'Vlad' },
        { id: 2, name: 'Sveta' },
        { id: 3, name: 'Alexey' },
        { id: 4, name: 'Mikhail' },
        { id: 5, name: 'Nikita' },
    ]
}

const messagesReducer = (state = initialState, action) => {

    switch (action.type) {
        case 'SEND-MESSAGE':
            let id = state.messages.length
            return {
                ...state,
                messages: [...state.messages, { id: id + 1, message: action.text }]
            }
        default: return state
    }
}

export const sendMessageAC = (text) => ({ type: 'SEND-MESSAGE', text })

export default messagesReducer