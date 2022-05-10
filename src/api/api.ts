import axios from 'axios'
import {UserType} from "../types/types";

export const usersAPI = {
    requestUsers: () => {
        return axios.get('https://jsonplaceholder.typicode.com/users')
    },
    requestUser(userId: number) {
        return axios.get<UserType>(`https://jsonplaceholder.typicode.com/users/${userId}`)

    },
}