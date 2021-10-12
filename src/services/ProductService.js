import axios from 'axios'

const apiClient = axios.create({
    baseURL:'http://localhost:9000/products',
    withCredentials:false,
    headers:{
        Accept: 'application/json',
        'Content-Type':'application/json'
    }
})

export default {
    saveProduct(product){
        return apiClient.post('/',product)
    },
    getProducts(){
        return apiClient.get('/')
    },
    getProduct(id){
        return apiClient.get('/'+id)
    },
    updateProduct(id, product){
        return apiClient.put('/'+id,product)
    },
    deleteProduct(id){
        return apiClient.delete('/'+id)
    }
}
