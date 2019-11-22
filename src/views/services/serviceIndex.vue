<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table v-on:show-row="show"
        v-on:edit-row="edit"
        v-on:del-row="del" :table-data="services" :fields="fields" :per-page=25 hover striped bordered  fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table>
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
export default {
    name: "serviceIndex",
    components:{cTable},
  data: function() {
    return {
      fields: [
          {key: 'id', label: 'id', sortable: true},
          {key: 'company', label: 'Firma', sortable: true},
          {key: 'name', label: 'İsim', sortable: true},
          {key: 'email', label: 'Email', sortable: true},
          {key: 'phone', label: 'Telefon', sortable: true},
          'Aksyon',
      ],
      services: [
        {
          id: 1,
          company:"company number 1",
          name:"name number 1",
          email:"email number 1",
          phone:"phone number 1" 
        },
        {
          id:2,
          company:"company number 2",
          name:"name number 2",
          email:"email number 2",
          phone:"phone number 2" 
        },
        {
          id:3,
          company:"company number 3",
          name:"name number 3",
          email:"email number 3",
          phone:"phone number 3" 
        }
      ]
    };
  },
  methods:{
    create: function(){
        this.$router.push({name: 'serviceCreate' , params: { "service" : null } })
      },
      show: function(value){
        this.$router.push({name: 'serviceView' , params: { "service" : value } })
      },
      edit: function(value){
        this.$router.push({name: 'serviceCreate' , params: { "service" : value } })
      },
      del: function(value){
        axios
        .delete('http://localhost:5000/service/'+value._id)
        .then(res => {
          console.log(res.data);
          this.services = this.companies.filter(function(val){return val._id != value._id})
          
            })
        .catch(err => console.log(err))
      },
    }
};
</script>

<style scoped>
</style>
