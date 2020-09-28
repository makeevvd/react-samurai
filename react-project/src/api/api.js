import * as axios from "axios";

export const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: {"API-KEY": "9e2cf503-0726-4c63-bc52-bce6b48addf7"}
});

export const usersAPI = {
    async getUsers(pageNum = 1, pageSize = 5) {
        let response = await instance.get(`users?page=${pageNum}&count=${pageSize}`);
        return response.data
    },

    async unfollowUser(userId) {
        let response = await instance.delete('follow/' + userId);
        return response.data
    },

    async followUser(userId) {
        let response = await instance.post('follow/' + userId);
        return response.data
    }
}

export const profileAPI = {
    async getProfile(userId) {
        let response = await instance.get(`profile/` + userId)
        return response.data
    },

    async getStatus(userId) {
        let response = await instance.get(`profile/status/` + userId)
        return response.data
    },

    async updateStatus(status) {
        let response = await instance.put(`profile/status`, {status: status})
        return response.data
    },
}

    export const authAPI = {
        async me() {
            let response = await instance.get(`auth/me`)
            return response.data
        },

        async login(email, password, rememberMe = false) {
            let response = await instance.post('auth/login', {email, password, rememberMe})
            return response.data
        },

        async logout() {
            let response = await instance.delete('auth/login')
            return response.data
        }
    }


