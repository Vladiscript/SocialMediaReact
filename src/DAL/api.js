import * as axios from 'axios'

const instance = axios.create(
    {
        withCredentials: true,
        baseURL: 'https://social-network.samuraijs.com/api/1.0/',
        headers: {
            "API-KEY": '379d4067-bb66-470a-abd2-25c7d4de21ec'
        }
    }
)

export const usersAPI = {

    getUsers(currentPage = 1, pageSize = 6) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },

    getFollows(currentPage = 1, pageSize = 6) {
        return instance.get(`follow?page=${currentPage}&count=${pageSize}`)
            .then((response) => response.data)
    },
    getProfile(id) {
        return instance.get(`profile/` + id)
            .then((response) => response.data)
    },
    follow(userId) {
        return instance.post(`follow/${userId}`)
            .then((response) => response.data)
    },
    unFollow(userId) {
        return instance.delete(`follow/${userId}`)
            .then((response) => response.data)
    }
}

export const authAPI = {
    auth() {
        return instance.get('auth/me')
            .then(response => response.data)
    }

}