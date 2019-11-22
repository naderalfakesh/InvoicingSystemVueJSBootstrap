<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table v-on:show-row="show"
        v-on:edit-row="edit"
        v-on:del-row="del" :table-data="lsds" :fields="fields" :per-page=25 hover striped bordered  fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table>
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
    name: "lsdIndex",
    components:{cTable},
    data: function(){
        return {
            fields: [
                {key: 'orderDate', label: 'Sipariş tarihi', sortable: true},
                {key: 'customer', label: 'Müşteri', sortable: true},
                {key: 'model', label: 'Model', sortable: true},
                {key: 'motorBrand', label: 'Motor markası', sortable: true},
                {key: 'wantedDeliveryDate', label: 'İstenen tarihi', sortable: true},
                {key: 'status', label: 'Statüs', sortable: true},
                'Aksyon',
            ],
            lsds:[],

        };
    },
    created: function(){
        axios
        .get('http://localhost:5000/lsd')
        .then(res => {
            this.lsds = res.data
            for(let lsd of this.lsds){
                lsd['customer']=lsd.company.name
                lsd['motorBrand']=lsd.motorInfo.brand
                lsd['orderDate']=lsd.orderDate.slice(0,10)
                lsd['wantedDeliveryDate']=lsd.wantedDeliveryDate.slice(0,10)
            }
            })
        .catch(err => console.log(err))
    },
    methods:{
      create: function(){
        this.$router.push({name: 'lsdCreate' , params: { "lsd" : null } })
      },
      show: function(value){
        this.$router.push({name: 'lsdView' , params: { "lsd" : value } })
      },
      edit: function(value){
        this.$router.push({name: 'lsdCreate' , params: { "lsd" : value } })
      },
      del: function(value){
        axios
        .delete('http://localhost:5000/lsd/'+value._id)
        .then(res => {
          console.log(res.data);
          this.lsds = this.lsds.filter(function(val){return val._id != value._id})
          
            })
        .catch(err => console.log(err))
      },
    
    }

}
</script>

<style>

</style>
