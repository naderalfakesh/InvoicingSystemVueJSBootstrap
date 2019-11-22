<template>
  <div class="animated fadeIn">
    <form novalidate>
    <b-row>
      <b-col sm="12">
          <b-card>
          <div slot="header">
              <strong>Kontak </strong><small>Form</small>
          </div>
          <b-row>
            <b-col sm="6">
            <label for="company">Şirket</label>
              <b-form-select required :state="companyValid" class="form-control" v-model="contactcreate.company._id" >
                    <option disabled value="0" selected>Firma seçin</option>
                    <option v-for="(company,i) in companies" v-bind:key="i" :value="company._id">{{company.name}}</option>
                </b-form-select>
                <div class="invalid-feedback"> Firma seçiniz lütfen. </div>
            </b-col>
            <b-col sm="6">
              <label for="name">Kontak tam adı</label>
              <b-form-input 
                  required
                  :state="nameValid"
                  type="text"
                  class="form-control"
                  v-model="contactcreate.name"
                  placeholder="Örnek: Nader Alfakesh" />
              <div class="invalid-feedback"> Adı girinizi lütfen. </div>
            </b-col>
          </b-row>
          <b-row>
          <b-col sm="6">
            <label for="email">Email adresi</label>
            <input
              type="text"
              class="form-control"
              v-model="contactcreate.email"
              placeholder="Örnek: info@dal-group.com"
            />
          </b-col>   
          <b-col sm="6">
            <label for="phone">Telefon numarası</label>
            <input
              type="text"
              class="form-control"
              v-model="contactcreate.phone"
              placeholder="Örnek : +90 530 306 0000"
            />
          </b-col>   
          </b-row> 
            <b-row class="mt-2">
              <b-col sm="8">
                  <b-button block @click.prevent="save()"  type="submit"  variant="primary"><i class="fa fa-dot-circle-o"></i> Kaydet</b-button>
              </b-col>
              <b-col sm="4">
                  <b-button block @click.prevent="$router.go(-1)" type="reset"  variant="danger"><i class="fa fa-ban"></i> İptal</b-button>
              </b-col>
          </b-row>
          </b-card>
      </b-col>
    </b-row>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'contactCreate',
    props: ['contact'],
    data: function () {
      return {
        contactcreate: {
            id: null, 
            name: "", 
            email: "",
            phone: "",
            company: {_id: 0 , name: 'company'},
        },
        companies: [{_id: 0 , name: 'company'}]
      }
    },
    computed: {
      companyValid: function(){
        if(this.contactcreate.company._id == 0){return false;}
        else{return true;}
        },
      nameValid: function(){
        if(!this.contactcreate.name){return false;}
        else{return true;}
      },
    },
    created: function() {
      if (this.contact != null) {
        this.contactcreate = this.contact;
      }
      axios
        .get('http://localhost:5000/company')
        .then(res => {
            this.companies = res.data
            })
        .catch(err => console.log(err))
    },
    methods:{
      save: function (){
          if (!this.nameValid || !this.companyValid){
            console.log(!this.nameValid ); 
            console.log(!this.companyValid); 
            console.log(!this.nameValid || !this.companyValid); 
            return ;
            }
          if(this.contact != null){
              this.update()
          }
          else{
              this.create()
          }
      },  
      update: function (){
          axios
          .put('http://localhost:5000/contact',{
            id: this.contactcreate._id, 
            name: this.contactcreate.name, 
            email: this.contactcreate.email,
            phone: this.contactcreate.phone,
            company: this.contactcreate.company._id,
          })
          .then(res => {
              console.log( res.data);
              this.$router.push({name: 'contactIndex'})
              })
          .catch(err => console.log('Update() ' + err))
      },
      create: function(){
          axios
          .post('http://localhost:5000/contact',{
            id: null, 
            name: this.contactcreate.name, 
            email: this.contactcreate.email,
            phone: this.contactcreate.phone,
            company: this.contactcreate.company._id,
          })
          .then(res => {
              console.log( res.data)
              this.$router.push({name: 'contactIndex'})
              })
          .catch(err => console.log('Create() ' + err))
      }  
     
    },

}
</script>

<style scoped>
textarea,
input {
  color: green;
}
</style>
