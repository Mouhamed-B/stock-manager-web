<template>
    <div id="v-pills-categories" aria-labelledby="v-pills-users-tab">
    <div class="overflow-auto" style="max-height: 500px;">
      <table width="100%" class="table table-striped">
        <thead class="bg-primary">
          <tr>
            <th scope="col">Libellé</th>
            <th scope="col">Nombre de Produits</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>

        <tbody>
            <tr v-for="category in categories" :key="category.id">
              <td>{{category.label}}</td>
              <td>{{category.productListCount}}</td>
              <td>
                <router-link class="btn-sm btn btn-outline-info d-inline mr-2" :to="route(category.id,'CategoryDetail')">voir</router-link>
                <button class="btn-sm btn btn-outline-danger" :value="category.id">Supprimer</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>

import CategoryService from "@/services/CategoryService"
import Utils  from "../../utils"

export default {
    name:'CategoryList',
    data(){
        return {
            categories : null
        }
    },
    created(){
        CategoryService.getCategories().then((response) => {
            this.categories=response.data
        }).catch((err) => {
            console.log(err)
        });
    },
    mixins:[Utils],
} 
</script>