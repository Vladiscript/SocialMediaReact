import { usersAPI } from "../DAL/api";

let initialState = {
    users: [],
    pageSize: 6,
    totalUsers: 25,
    currentPage: 1,
    isFetching: false,
    followingProcess: []
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
            return { ...state, users: [...action.users] }

        case 'SET-CURRENT-PAGE':
            return { ...state, currentPage: action.currentPage }

        case 'SET-TOTAL-USERS':
            return { ...state, totalUsers: action.users }
        case 'IS-FETCHING':
            return { ...state, isFetching: action.isFetching }
        case 'TOGGLE-FOLLOWING':
            return {
                ...state,
                followingProcess: action.isFetching
                    ? [...state.followingProcess, action.userId]
                    : state.followingProcess.filter(id => id !== action.userId)
            }
        default: return state

    }


}

export const followUser = (userId) => ({ type: 'FOLLOW', userId })
export const unFollowUser = (userId) => ({ type: 'UNFOLLOW', userId })
export const setUsers = (users) => ({ type: 'SET-USERS', users })
export const setCurrentPage = (currentPage) => ({ type: 'SET-CURRENT-PAGE', currentPage })
export const setTotalUsers = (users) => ({ type: 'SET-TOTAL-USERS', users })
export const toggleFetching = (isFetching) => ({ type: 'IS-FETCHING', isFetching })
export const toggleFollowing = (isFetching, userId) => ({ type: 'TOGGLE-FOLLOWING', isFetching, userId })

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {

        dispatch(toggleFetching(true))
        usersAPI.getUsers(currentPage, pageSize).then((response) => {
            dispatch(toggleFetching(false))
            dispatch(setUsers(response.items))
            dispatch(setTotalUsers(response.totalCount))
        })
    }
}
export const followThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId))
        usersAPI.follow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(followUser(userId))
            }
            dispatch(toggleFollowing(false, userId))
        })
    }
}
export const unFollowThunk = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowing(true, userId))
        usersAPI.unFollow(userId).then(response => {
            if (response.resultCode === 0) {
                dispatch(unFollowUser(userId))
            }
            dispatch(toggleFollowing(false, userId))
        })
    }
}

export default usersReducer