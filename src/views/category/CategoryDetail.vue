<template>
    <Topbar :title="label"/>
    <div v-if="category">
        {{category.toString()}}
    </div>
</template>

<script>
import CategoryService from "@/services/CategoryService"
import Topbar from "@/components/Topbar.vue"

export default {
    name : 'CategoryDetail',
    components:{
        Topbar
    },
    props:['id'],
    data(){
        return {
            category: null,
            label: null
        }
    },
    created(){
        CategoryService.getCategory(this.id).then((response) => {
            this.category=response.data
            this.label = this.category.label
        }).catch((err) => {
            console.log(err)
        });
    }
}
</script>