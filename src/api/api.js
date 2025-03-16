import axios from "axios"
import apikey from "./apiKey"

const instance = axios.create ({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": {apikey}
    }
})


export const userAPI = {
    
    getUsers (currentPage = 1, pageSize = 5)  {
        return instance.get (`users?page=${currentPage} & count=${pageSize}`)
        .then (response => {return response.data } ) 
        //возвращаем не тот промис, который приходит в get, а промис из response (только data) и subscribe (.then) 
    },
    
    getFollow (userId) {
        return instance.post (`follow/${userId}`)
    },

    getUnfollow (userId) {
        return instance.delete (`follow/${userId}`)
    },

    getProfile (userId)  {
        return instance.get (`profile/` + userId)
    },

}

export const AuthAPI = {
        getAuth ()  {
            return instance.get (`auth/me`) 
        }
}


