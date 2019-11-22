<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table v-on:show-row="show"
        v-on:edit-row="edit"
        v-on:del-row="del" :table-data="rewinds" :fields="fields" :per-page=25 hover striped bordered  fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table>
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
    name: "rewindIndex",
    components:{cTable},
    data: function(){
        return{
            fields: [
                {key: 'customer', label: 'Müşteri', sortable: true},
                {key: 'power', label: 'Güç', sortable: true},
                {key: 'pole', label: 'kutup sayısı', sortable: true},
                {key: 'voltage', label: 'Gerilim', sortable: true},
                {key: 'frequency', label: 'Frekans', sortable: true},
                {key: 'serialNumber', label: 'Seri numarası', sortable: true},
                {key: 'materialNumber', label: 'ürün kodu', sortable: true},
                'Aksyon',
            ],
            rewinds: []
        }
    },
    created: function(){
        axios
        .get('http://localhost:5000/rewind')
        .then(res => {
            this.rewinds = res.data
            for(let i of this.rewinds){
                i['customer']=i.company.name
                i['power']=i.product.motor.power
                i['pole']=i.product.motor.pole
                i['voltage']=i.product.motor.voltage
                i['frequency']=i.product.motor.frequency
                i['serialNumber']=i.product.serialNumber
                i['materialNumber']=i.product.materialNumber
            }
        })
        .catch(err => console.log(err))
    },
    methods:{
      create: function(){
        this.$router.push({name: 'rewindCreate' , params: { "rewind" : null } })
      },
      show: function(value){
        this.$router.push({name: 'rewindView' , params: { "rewind" : value } })
      },
      edit: function(value){
        this.$router.push({name: 'rewindCreate' , params: { "rewind" : value } })
      },
      del: function(value){
        axios
        .delete('http://localhost:5000/rewind/'+value._id)
        .then(res => {
          console.log(res.data);
          this.rewinds = this.rewinds.filter(function(val){return val._id != value._id})
          
            })
        .catch(err => console.log(err))
      },
    }
}
</script>

<style>

</style>

