<template>
  <div class="nav flex-column nav-justified nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
    <router-link v-for="link in links" :key="link.short"
     :class="{'nav-link':true}" 
     :id="'v-pills-'+link.short+'-tab'" data-toggle="pill" 
     @load="setActive" :to="link.route">{{link.text}}</router-link>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    links : Array
  },
  data(){
    return {
      isActive:true
    }
  },
  methods:{
    setActive(){
      this.isActive = false
    }
  }
}
</script>

