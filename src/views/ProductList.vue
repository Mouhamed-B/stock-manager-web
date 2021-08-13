<template>
  <div id="v-pills-products">
    <div class="overflow-auto" style="max-height: 500px;">
      <table width="100%" class="table table-striped">
        <thead class="bg-primary">
          <tr>
            <th scope="col">libellé</th>
            <th scope="col">Catégorie</th>
            <th scope="col">stock</th>
            <th scope="col">prix</th>
            <th scope="col">actions</th>
          </tr>
        </thead>

        <tbody>
            <tr v-for="product in products" :key="product.id">
              <td>{{product.label}}</td>
              <td>{{product.category}}</td>
              <td>{{product.stock}}</td>
              <td>{{product.price}}</td>
              <td>
                <router-link class="btn-sm btn btn-outline-info d-inline mr-2" :to="route(product.id,'ProductDetail')">voir</router-link>
                <button class="btn-sm btn btn-outline-danger" :value="product.id">Supprimer</button>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
    
  </div>
</template>

<script>
// @ is an alias to /src
import ProductService from "../services/ProductService"
import Utils  from "../utils"
export default {
  name: 'ProductList',

  data(){
    return {
      products : null
    }
  },
  mixins:[Utils],
  created(){
    ProductService.getProducts().then((response) => {
      this.products = response.data
    }).catch((err) => {
      console.log(err)
    }); 
  }
}
</script>
