
let initialState = {
    users: [
        // {
        //     id: 1, followed: false, avatar: 'https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png',
        //     firstName: 'Dmitriy', lastName: 'Kamasutra', status: ' I am looking for a job right now', address: { country: 'Belarus', city: 'Minsk' }
        // },
        // {
        //     id: 2, followed: false, avatar: 'https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png',
        //     firstName: 'Dmitriy', lastName: 'Kamasutra', status: ' I am looking for a job right now', address: { country: 'Belarus', city: 'Minsk' }
        // },
        // {
        //     id: 3, followed: false, avatar: 'https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png',
        //     firstName: 'Dmitriy', lastName: 'Kamasutra', status: ' I am looking for a job right now', address: { country: 'Belarus', city: 'Minsk' }
        // },
        // {
        //     id: 4, followed: false, avatar: 'https://i.pinimg.com/originals/e9/80/f7/e980f7be96698681e64bac92221cfb7d.png',
        //     firstName: 'Dmitriy', lastName: 'Kamasutra', status: ' I am looking for a job right now', address: { country: 'Ukraine', city: 'Kiev' }
        // },
    ]
}

const usersReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'FOLLOW':
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
                ]
            }


        case 'UNFOLLOW':
            return {
                ...state, users: [...state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
                ]
            }
        case 'SET-USERS':
            return { ...state, users: [...state.users, ...action.users] }
        default: return state
    }


}

export const followAC = (userId) => ({ type: 'FOLLOW', userId })
export const unFollowAC = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsersAC = (users) => ({ type: 'SET-USERS', users })

export default usersReducer