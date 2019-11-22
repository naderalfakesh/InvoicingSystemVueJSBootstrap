<template>
    <div class="animated fadeIn">
    <form novalidate >
        <b-row>
            <b-col sm="12">
                <b-card>
                <div slot="header">
                    <strong>Şirket </strong><small>Form</small>
                </div>
                <b-form-group>
                    <label for="company">Şirket adı *</label>
                    <b-form-input :state="namevalid"   v-model.trim="companyCreate.name" type="text" id="company" placeholder="Örnek : Dal Elektrik A.Ş ... " required></b-form-input>
                    <b-form-invalid-feedback>Firma ismi giriniz lütfen...</b-form-invalid-feedback>
                </b-form-group>
                <b-row>
                    <b-col sm="6">
                        <label for="website">Websitesi</label>
                        <b-form-input v-model="companyCreate.website" type="text" id="website" placeholder="Örnek: www.dal.com" ></b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <label for="email">Ana Eposta</label>
                        <b-form-input v-model="companyCreate.email" type="text" id="email" placeholder="Örnek: info@dal.com"></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="6">
                        <label for="phone">Telefone</label>
                        <b-form-input v-model="companyCreate.phone" type="text" id="phone" placeholder="Örnek: +90 530 306 5849"></b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <label for="fax">Faks</label>
                        <b-form-input v-model="companyCreate.fax" type="text" id="fax" placeholder="Örnek: +90 530 306 5849"></b-form-input>
                    </b-col>
                </b-row>
                <b-row>
                    <b-col sm="6">
                        <label for="taxAdmin">Vergi dairesi</label>
                        <b-form-input v-model="companyCreate.taxAdmin" type="text" id="taxAdmin" placeholder="Örnek: Kocasinan"></b-form-input>
                    </b-col>
                    <b-col sm="6">
                        <label for="taxNumber">Vergi numarası</label>
                        <b-form-input v-model="companyCreate.taxNumber" type="text" id="taxNumber" placeholder="Örnek: 123456789"></b-form-input>
                    </b-col>
                </b-row>
                <b-row class="mt-2">
                    <b-col sm="1"></b-col>
                    <b-col sm="6"><label for="address">Address</label></b-col>
                    <b-col sm="2"><label for="main">Varsayılan adress</label></b-col>
                </b-row>
                <b-row  align-v="center" class="mt-1" v-for="(adres,i) in companyCreate.addresses" v-bind:key="i" >
                    <b-col sm="1">
                        <button v-if="i <= 0" class="btn btn-info " @click.prevent="addAddress"><i class="icon-plus font-2xl"></i></button>
                        <button v-if="i > 0" class="btn btn-danger" @click.prevent="delAddress(i)"><i class="icon-close font-2xl"></i></button> 
                    </b-col>
                    <b-col sm="6">
                        <b-form-textarea
                            id="address"
                            v-model="adres.address"
                            placeholder="Örnek : Adnan kahveci bulvarı ... "
                            rows="2"
                            no-resize
                        ></b-form-textarea>
                    </b-col>
                    <b-col sm="1" >
                        <c-switch id="main" class="mx-1" color="success" v-model="adres.main"  :value="true" :uncheckedValue="false"/>
                    </b-col>
                </b-row>
                <b-row class="mt-5">
                    <b-col sm="8">
                        <b-button block @click.prevent="save" type="submit"  variant="primary"><i class="fa fa-dot-circle-o"></i> Kaydet</b-button>
                    </b-col>
                    <b-col sm="4">
                        <b-button block @click="$router.go(-1)"    variant="danger"><i class="fa fa-ban"></i> İptal</b-button>
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
import { Switch as cSwitch } from '@coreui/vue'
import axios from 'axios'
export default {
    name: 'companyCreate',
    props: ['company'],
    components: {
        cSwitch
    },
    data: function(){
        return{
            companyCreate:{
                id: null,
                name: "",
                type: "",
                email: "",
                website: "",
                phone: "",
                fax: "",
                taxAdmin:"",
                taxNumber:"",
                addresses: [{main: true , address: ""}] ,
            }
        };
    },
    computed: {
        namevalid: function (){
            if(this.companyCreate.name){return true}
            else {return false}
            },
    },
    created: function(){
        if(this.company != null){
            Object.assign(this.companyCreate , this.company) 
        }
    },
    methods:{
        addAddress: function(){
            this.companyCreate.addresses.push({main: false , address: ""})
        },
        delAddress: function(index){
            this.companyCreate.addresses.splice(index,1)
        },
      save: function (){
          if (!this.namevalid){return}
          if(this.company != null){
              this.update()
          }
          else{
              this.create()
          }
      },  
      update: function (){
          axios
          .put('http://localhost:5000/company',{
            id: this.companyCreate._id,
            name: this.companyCreate.name,
            type: this.companyCreate.type,
            email: this.companyCreate.email,
            website: this.companyCreate.website,
            phone: this.companyCreate.phone,
            fax: this.companyCreate.fax,
            taxAdmin: this.companyCreate.taxAdmin,
            taxNumber: this.companyCreate.taxNumber,
            addresses: this.companyCreate.addresses
          })
          .then(res => {
              this.$router.push({name: 'companyIndex'})
              })
      },
      create: function(){
          axios
          .post('http://localhost:5000/company',{
            id: null,
            name: this.companyCreate.name,
            type: this.companyCreate.type,
            email: this.companyCreate.email,
            website: this.companyCreate.website,
            phone: this.companyCreate.phone,
            fax: this.companyCreate.fax,
            taxAdmin: this.companyCreate.taxAdmin,
            taxNumber: this.companyCreate.taxNumber,
            addresses: this.companyCreate.addresses
          })
          .then(res => {
              this.$router.push({name: 'companyIndex'})
              })
      }  
    },
}
</script>

<style>

</style>
