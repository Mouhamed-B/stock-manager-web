<template>
<div id="contenu" class="m-auto shadow-lg rounded">
  <h1 align='center'>Stock Manager - Dashboard</h1>
  <hr>
  <div class="row">
    <div class="col-md-2 col-sm-12 menu">
      <Sidebar :links="links"/>
    </div>
    <div class="tab-content col-md-10 col-sm-12" id="v-pills-tabContent">
      <router-view/>
    </div>
  </div>
</div>
  
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import "bootstrap-icons/font/bootstrap-icons.css"
export default {
  name:'App',
  components:{
    Sidebar
  },
  data(){
    return {
      links: [
        {
          short:'users',
          text :'Utilisateurs',
          route:{
            name:'UserList'
          }
        },
        {
          short:'prov',
          text :'Fournisseurs',
          route:{
            name:'ProviderList'
          }
        },
        {
          short:'catg',
          text :'Categories',
          route:{
            name:'CategoryList'
          }
        },
        {
          short:'prod',
          text :'Produits',
          route:{
            name:'ProductList'
          }
        }
      ]
    }
  }
}
</script>