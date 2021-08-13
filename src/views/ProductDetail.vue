<template>
    <Topbar :title="label"/>
    <div v-if="product">
        {{product.toString()}}
    </div>
    
</template>

<script>
import ProductService from "@/services/ProductService"
import Topbar from "@/components/Topbar.vue"

export default {
    name : 'ProductDetail',
    components:{
        Topbar
    },
    props:['id'],
    data(){
        return {
            product: null,
            label: null
        }
    },
    created(){
        ProductService.getProduct(this.id).then((response) => {
            this.product=response.data
            this.label = this.product.label
        }).catch((err) => {
            console.log(err)
        });
    }
    
}
</script>