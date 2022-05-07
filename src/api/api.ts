import axios from 'axios'

export const requestUsers = () => {
    return axios.get('https://jsonplaceholder.typicode.com/users')
}