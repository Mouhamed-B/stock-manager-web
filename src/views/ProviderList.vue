<template>
  <div id="v-pills-providers">
    <div class="overflow-auto" style="max-height: 500px;">
      <table width="100%" class="table table-striped">
        <thead class="bg-primary">
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Email</th>
            <th scope="col">Téléphone</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
            <tr v-for="provider in providers" :key="provider.id">
              <td>{{provider.name}}</td>
              <td>{{provider.email}}</td>
              <td>{{provider.phoneNumber}}</td>
              <td>
                <router-link class="btn-sm btn btn-outline-info d-inline mr-2" :to="route(provider.id,'ProviderDetail')">voir</router-link>
                <button class="btn-sm btn btn-outline-danger" :value="provider.id">Supprimer</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ProviderService from "../services/ProviderService"
import Utils  from "../utils"
export default {
  name: 'ProviderList',

  data(){
    return {
      providers : null
    }
  },
  mixins:[Utils],
  created(){
    ProviderService.getProviders().then((response) => {
      this.providers = response.data
    }).catch((err) => {
      console.log(err)
    }); 
  }
}
</script>
