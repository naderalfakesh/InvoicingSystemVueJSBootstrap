<template>
  <div class="animated fadeIn">
    <b-row>
      <b-col sm="12">
        <c-table v-on:show-row="show"
        v-on:edit-row="edit"
        v-on:del-row="del"
         :table-data="contacts" :fields="fields" :per-page=10 hover  bordered  fixed caption="<i class='fa fa-align-justify'></i> Combined All Table"></c-table>
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
  name: "contactIndex",
  components:{cTable},
  data: () => {
    return {
      fields: [
        {key: 'companyname', label: 'Firma', sortable: true},
        {key: 'name', label: 'İsim', sortable: true},
        {key: 'email', label: 'Email', sortable: true},
        {key: 'phone', label: 'Telefon', sortable: true},
        'Aksyon',
      ],
      contacts: []
    };
  },
  created: function(){
      axios
      .get('http://localhost:5000/contact')
      .then(res => {
          this.contacts = res.data
          for(var i in this.contacts){
            this.contacts[i].companyname = this.contacts[i].company.name
          }
          })
      .catch(err => console.log(err))
       
  },
  methods:{
    create: function(){
        this.$router.push({name: 'contactCreate' , params: { "contact" : null } })
    },
    show: function(value){
      this.$router.push({name: 'contactView' , params: { "contact" : value } })
    },
    edit: function(value){
      this.$router.push({name: 'contactCreate' , params: { "contact" : value } })
    },
    del: function(value){
      axios
        .delete('http://localhost:5000/contact/'+value._id)
        .then(res => {
          console.log(res.data);
          this.contacts = this.contacts.filter(function(val){return val._id != value._id})
          })
        .catch(err => console.log(err))
    },
  }

};
</script>

<style scoped>
</style>
