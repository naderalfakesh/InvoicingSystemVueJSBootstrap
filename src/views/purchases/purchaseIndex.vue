<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table v-on:show-row="show"
        v-on:edit-row="edit"
        v-on:del-row="del" :table-data="purchases" :fields="fields" :per-page=25 hover striped bordered  fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table>
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
    name: 'purchaseIndex',
    components:{cTable},
    methods:{},
  data: function() {
    return {
      fields: [
          {key: 'referance', label: 'Referans', sortable: true},
          {key: 'date', label: 'Tarih', sortable: true},
          {key: 'companyname', label: 'Firma', sortable: true},
          {key: 'contactname', label: 'Kontak', sortable: true},
          {key: 'productsummary', label: 'Ürün açıklaması', sortable: true},
          {key: 'status', label: 'Statüs', sortable: true},
          'Aksyon',
      ],
      purchases: []
    };
  },
  created: function(){
    axios
    .get('http://localhost:5000/invoice/purchase')
    .then(res => {
        this.purchases = res.data
        for(var i in this.purchases){
          this.purchases[i].companyname = this.purchases[i].company.name
          this.purchases[i].contactname = this.purchases[i].contact.name
          this.purchases[i].productsummary = this.purchases[i].product.summary
        }
        })
    .catch(err => console.log(err))
  },
  methods:{
    create: function(){
        this.$router.push({name: 'purchaseCreate' , params: { "company" : null } })
      },
      show: function(value){
        this.$router.push({name: 'purchaseView' , params: { "purchase" : value } })
      },
      edit: function(value){
        this.$router.push({name: 'purchaseCreate' , params: { "purchase" : value } })
      },
      del: function(value){
        axios
        .delete('http://localhost:5000/purchase/'+value._id)
        .then(res => {
          console.log(res.data);
          this.purchases = this.purchases.filter(function(val){return val._id != value._id})
          
            })
        .catch(err => console.log(err))
      },
    }

};
</script>

<style scoped>
</style>
