<template>
    <Topbar :title="fullName"/>
    <div v-if="user">
        {{user.toString()}}
    </div>
    
</template>

<script>
import UserService from "@/services/UserService"
import Topbar from "@/components/Topbar.vue"

export default {
    name : 'UserDetail',
    components:{
        Topbar
    },
    props:['id'],
    data(){
        return {
            user: null,
            fullName: null
        }
    },
    created(){
        UserService.getUser(this.id).then((response) => {
            this.user=response.data
            this.fullName = this.user.firstName+' '+this.user.lastName
        }).catch((err) => {
            console.log(err)
        });
    }
    
}
</script>