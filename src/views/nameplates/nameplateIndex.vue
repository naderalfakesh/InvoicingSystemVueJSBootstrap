<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table v-on:show-row="show"
        v-on:edit-row="edit"
        v-on:del-row="del" :table-data="nameplates" :fields="fields" :per-page=25 hover striped bordered  fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table>
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
    name: "nameplateIndex",
    components:{cTable},
    data: function(){
        return {
            fields: [
                {key: 'materialNumber', label: 'Ürün kodu', sortable: true},
                {key: 'model', label: 'Model', sortable: true},
                {key: 'powers', label: 'Güç', sortable: true},
                {key: 'frame', label: 'Gövde', sortable: true},
                {key: 'pole', label: 'kutup sayısı', sortable: true},
                {key: 'serialNumber', label: 'Seri numarası', sortable: true},
                'Aksyon',
            ],
            nameplates:[]
        };
    },
    created: function(){
        axios
        .get('http://localhost:5000/nameplate')
        .then(res => {
            this.nameplates = res.data
            for(let nameplate of this.nameplates){
                nameplate['powers']=nameplate.power[0]+"kW"
            }
            })
        .catch(err => console.log(err))
    },
    methods:{
      create: function(){
        this.$router.push({name: 'nameplateCreate' , params: { "nameplate" : null } })
      },
      show: function(value){
        this.$router.push({name: 'nameplateView' , params: { "nameplate" : value } })
      },
      edit: function(value){
        this.$router.push({name: 'nameplateCreate' , params: { "nameplate" : value } })
      },
      del: function(value){
        axios
        .delete('http://localhost:5000/nameplate/'+value._id)
        .then(res => {
          console.log(res.data);
          this.nameplates = this.nameplates.filter(function(val){return val._id != value._id})
          
            })
        .catch(err => console.log(err))
      },
    }
}
</script>

<style>

</style>
