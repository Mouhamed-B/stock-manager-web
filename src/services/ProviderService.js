import axios from 'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:9000/providers',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    saveProvider(provider){
        return apiClient.post('/',provider)
    },
    getProviders(){
        return apiClient.get('/')
    },
    getProvider(id){
        return apiClient.get('/'+id)
    },
    updateProvider(id, provider){
        return apiClient.put('/'+id,{
            id:id,
            provider:provider
        })
    },
    deleteProvider(id){
        return apiClient.delete('/'+id)
    }
}
