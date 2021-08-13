import axios from 'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:9000/users',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    saveUser(user){
        return apiClient.post('/',user)
    },
    getUsers(){
        return apiClient.get('/')
    },
    getUser(id){
        return apiClient.get('/'+id)
    },
    updateUser(id, user){
        return apiClient.put('/'+id,{
            id:id,
            user:user
        })
    },
    deleteUser(id){
        return apiClient.delete('/'+id)
    }
}
