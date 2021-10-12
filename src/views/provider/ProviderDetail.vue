<template>
    <Topbar :title="name"/>
    <div v-if="provider">
        {{provider.toString()}}
    </div>
    
</template>

<script>
import ProviderService from "@/services/ProviderService"
import Topbar from "@/components/Topbar.vue"

export default {
    name : 'ProviderDetail',
    components:{
        Topbar
    },
    props:['id'],
    data(){
        return {
            provider: null,
            name: null
        }
    },
    created(){
        ProviderService.getProvider(this.id).then((response) => {
            this.provider=response.data
            this.name = this.provider.name
        }).catch((err) => {
            console.log(err)
        });
    }
    
}
</script>