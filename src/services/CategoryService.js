import axios from 'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:9000/categories',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    saveCategory(category){
        return apiClient.post('/',category)
    },
    getCategories(){
        return apiClient.get('/')
    },
    getCategory(id){
        return apiClient.get('/'+id)
    },
    updateCategory(id, category){
        return apiClient.put('/'+id,{
            id:id,
            category:category
        })
    },
    deleteCategory(id){
        return apiClient.delete('/'+id)
    }
}
