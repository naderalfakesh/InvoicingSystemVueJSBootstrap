<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table 
        v-on:show-row="show"
        v-on:edit-row="edit"
        v-on:del-row="del"
         :table-data="companies"
          :fields="fields"
           :per-page=10
             striped
              bordered
               fixed 
               caption="<i class='fa fa-align-justify'></i> Şirketler" >
        </c-table>
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
  name: 'companyIndex',
  components: {cTable},
  data: () => {
    return {
      fields: [
        {key: 'name', label: 'Firma', sortable: true},
        {key: 'email', label: 'Eposta', sortable: true},
        {key: 'website', label: 'Websitesi', sortable: true},
        {key: 'phone', label: 'Tel', sortable: true},
        {key: 'fax', label: 'Fax', sortable: true},
        'Aksyon',
      ],
      companies: [],
    }
  },
  created: function() {
        axios
        .get('http://localhost:5000/company')
        .then((res) => {
            this.companies = res.data
            })
        .catch(err => console.log(err))
    },
    methods:{
      create: function(){
        this.$router.push({name: 'companyCreate' , params: { "company" : null } })
      },
      show: function(value){
        this.$router.push({name: 'companyView' , params: { "company" : value } })
      },
      edit: function(value){
        this.$router.push({name: 'companyCreate' , params: { "company" : value } })
      },
      del: function(value){
        axios
        .delete('http://localhost:5000/company/'+value._id)
        .then(res => {
          console.log(res.data);
          this.companies = this.companies.filter(function(val){return val._id != value._id})
          
            })
        .catch(err => console.log(err))
      },
    }
}


</script>

<style>

</style>
