import * as axios from 'axios'

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '830461ba-b0c0-4074-b98b-d0ddc756d831'
    }
})

export const usersAPI = {
    getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(response => response.data)
    },
    getUnfollow (id) {
        return instance.delete(`follow/${id}`).then(response => response.data)
    },
    getFollow (id) {
        return instance.post(`follow/${id}`, {}).then(response => response.data)
    },
    getProfile (id) {
        return instance.get(`profile/` + id)
    } 
}

export const authAPI = {
    getAuth ( ) {
        return instance.get(`auth/me`)
    }
}
