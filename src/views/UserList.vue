<template>
  <div id="v-pills-users">
    <div class="overflow-auto" style="max-height: 500px;">
      <table width="100%" class="table table-striped">
        <thead class="bg-primary">
          <tr>
            <th scope="col">Nom</th>
            <th scope="col">Prenom</th>
            <th scope="col">Login</th>
            <th scope="col">Role</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{user.firstName}}</td>
              <td>{{user.lastName}}</td>
              <td>{{user.login}}</td>
              <td>{{user.isAdmin ? 'vendeur' : 'admin'}}</td>
              <td>
                <router-link class="btn-sm btn btn-outline-info d-inline mr-2" :to="route(user.id,'UserDetail')">voir</router-link>
                <button class="btn-sm btn btn-outline-danger" :value="user.id">Supprimer</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import UserService from "../services/UserService"
import Utils  from "../utils"
export default {
  name: 'UserList',

  data(){
    return {
      users : null
    }
  },
  mixins:[Utils],
  created(){
    UserService.getUsers().then((response) => {
      this.users = response.data
    }).catch((err) => {
      console.log(err)
    }); 
  }
}
</script>
