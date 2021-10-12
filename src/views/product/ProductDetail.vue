<template>
    <Topbar :title="label"/>
    <div class="w-100">
        <div v-if="product" class="row d-block">
            <form class="p-5 mx-auto">
                <div class="form-row">
                    <div class="col-4 form-group">
                        <label for="id" class="form-label">Reference</label>
                        <input type="text" readonly name="id" id="id" v-model="product.id">
                    </div>
                    <div class="offset-2 col-6 form-group">
                        <label for="label" class="form-label">Label</label>
                        <input type="text" name="label" id="label"  disabled v-model="product.label">
                    </div>
                </div>
                <div class="form-row">
                     <div class="col-2 form-group">
                        <label for="price" class="form-label">Price</label>
                        <input type="number" name="price" id="price" disabled v-model.number="product.price">
                    </div>
                    <div class="offset-1 col-2 form-group">
                        <label for="stock" class="form-label">Stock</label>
                        <input type="number" name="stock"  id="stock" disabled v-model.number="product.stock">
                    </div>
                    <div class="offset-1 col-6 form-group">
                        <label for="category" class="form-label">Category</label>
                        <input type="text" name="category" id="category" disabled v-model="product.category">
                    </div>
                </div>
                <div class="form-row d-block">
                    <div class="form-group">
                        <label for="description" class="form">Description</label>
                        <textarea class="form-control" name="description" disabled v-model="product.description" id="description" rows="10"></textarea>
                    </div>
                </div>
                <div class="form-row d-block">
                    <button class="btn btn-primary col-3" @click='save'>Enregistrer</button>
                    <button class="btn btn-warning col-3 offset" @click="toggleEdit">Modifier</button>
                    <button class="btn btn-danger col-3 offset">Supprimer</button>
                </div>
            </form>
        </div>
    </div> 
    
</template>



<script>
import ProductService from "@/services/ProductService"
import Topbar from "@/components/Topbar.vue"

export default {
    name : 'ProductDetail',
    components:{
        Topbar
    },
    props:['id'],
    data(){
        return {
            disabled: true,
            product: null,
            label: null
        }
    },
    methods:{
        toggleEdit(e){
            e?.preventDefault()
            this.disabled = !this.disabled
            
            document.getElementsByTagName('input').forEach(element => {
                element.disabled = this.disabled ? 'true' : undefined
            });
            document.getElementById('description').disabled = this.disabled ? 'true' : undefined
        },
        save(e){
            console.log(this.product)
            e.preventDefault()
            ProductService.updateProduct(this.product.id, this.product).then(response=> {
                if (response.status === 200) {
                    alert('Produit mis à jour')
                    this.toggleEdit()
                }
            }).catch((err) => {
                console.log(err)
            })
        }
    },
    created(){
        ProductService.getProduct(this.id).then((response) => {
            this.product=response.data
            this.label = this.product.label
        }).catch((err) => {
            console.log(err)
        });
    },
    
}
</script>

<style scoped>
    h2{
        color: lightslategrey;
    }
    input{
        border:none;
        border-radius: 0;
        border-bottom: 1px solid lightslategray;
        width: 100%;
    }
    label{
        display: block;
    }
    form{
        width: 85%;
        font-size: larger;
    }
    button.offset{
        margin-left: 12.5%;
        color: white;
    }
</style>