<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table v-on:show-row="show"
        v-on:edit-row="edit"
        v-on:del-row="del" :table-data="products" :fields="fields" :per-page=25 hover striped bordered  fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table>
      </b-col>
    </b-row>
    <b-row align-h="center">
      <b-button @click="create" size="lg" variant="primary" class="mb-3" >Yeni oluştur</b-button>
    </b-row>
  </div>
</template>

<script>
/* eslint-disable */
import cTable from '../base/Table.vue'
import axios from 'axios'
export default {
    name: "productIndex",
    components:{cTable},
    data: function(){
        return {
            fields: [
                {key: 'materialNumber', label: 'Ürün kodu', sortable: true},
                {key: 'serialNumber', label: 'Seri numarası', sortable: true},
                {key: 'type', label: 'Ürün tipi', sortable: true},
                {key: 'summary', label: 'Genel bilgi', sortable: true},
                'Aksyon',
            ],
            products: []
            ,
        };
    },
    created: function(){
    axios
    .get('http://localhost:5000/product')
    .then(res => {
        this.products = res.data
        for(var i of this.products){
            if(i.type == 'motor'){
                i.info = i.motor.power + "kW " + i.motor.speed + "RPM"
            }
            else if(i.type == 'vfd'){
                i.info = i.vfd.series + " " + i.vfd.current + "A"
            }
            else if(i.type == 'lsd'){
                i.info = i.lsd.series + " " + i.lsd.motorpower + "kW "
            }
        }
        })
    .catch(err => console.log(err))
  },
  methods:{
    create: function(){
        this.$router.push({name: 'productCreate' , params: { "product" : null } })
      },
      show: function(value){
        this.$router.push({name: 'productView' , params: { "product" : value } })
      },
      edit: function(value){
        this.$router.push({name: 'productCreate' , params: { "product" : value } })
      },
      del: function(value){
        axios
        .delete('http://localhost:5000/product/'+value._id)
        .then(res => {
          console.log(res.data);
          this.products = this.products.filter(function(val){return val._id != value._id})
          
            })
        .catch(err => console.log(err))
      },
    }
}
</script>

<style>

</style>
