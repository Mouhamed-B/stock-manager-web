<template>
     <table class="table table-striped" width="100%">
        <thead class="bg-primary">
            <tr>
                <th>
                    <router-link :to="prev" class="btn btn-sm"><i class="bi bi-arrow-left mr-auto"></i></router-link>
                </th>
                <th>
                    <span v-if="title">{{title}}</span>
                </th>
            </tr>
        </thead>
    </table>
</template>

<script>
export default {
    name:'Topbar',
    props:{
        title:String
    },
    data(){
        return {
            prev : null
        }
    },
    created(){
        this.prev=window.history.state.back
    }
}
</script>
<style scoped>
.bi{
    color: white;
}
th{
    text-align: left;
}
th span{
    margin-left: 25%;
}
</style> 