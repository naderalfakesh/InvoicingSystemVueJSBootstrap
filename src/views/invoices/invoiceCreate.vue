<template>
  <div class="container">
    <!-- <div class="row justify-content-center">
      <h1>{{invoicecreate.type}}</h1>
    </div> -->
    <form novalidate >
    <div class="card">
      <div class="card-body">
        <div class="row">
          <hr />
          <div class="col-8">
            <label>Ürün bilgileri:</label>
            
              <b-form-select required :state="productValid" v-model="invoicecreate.product" >
                <option value="0" selected disabled >Ürün seçiniz</option>
                <option v-for="(product,index) in products" :key="index" :value="product">{{product.type + " " + product.summary}}</option>
              </b-form-select>
              <div class="invalid-feedback">Ürün seçiniz lütfen.</div>
            
          </div>
          <div class="col-4">
            <label>Tarih:</label>
            
              <input
                type="date"
                class="form-control"
                v-model="invoicecreate.date"
                placeholder="01/01/2019"
              />
            
          </div>
        </div>

        <div class="row">
          <div class="col-8">
            <label>Firma unvanı:</label>
            
              <b-form-select required :state="companyValid" v-model="invoicecreate.company" >
                <option value="0" selected disabled>Firma seçiniz</option>
                <option v-for="(company,index) in companies" :key="index" :value="company">{{company.name}}</option>
              </b-form-select>
              <div class="invalid-feedback">Firma seçiniz lütfen.</div>
            
          </div>
          <div class="col-4">
            <label>Referans :</label>
            
              <b-form-input
                required
                :state="referanceValid"
                type="text"
                class="form-control"
                v-model="invoicecreate.referance"
                placeholder="Örnek: Dal20190101"
              />
              <div class="invalid-feedback">Referans yazınız lütfen.</div>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <label>Adres :</label>
            
              <b-form-select v-model="invoicecreate.deliveryAddress"  class="form-control">
                <option value="0" selected disabled>address seçiniz</option>
                <option v-for="(address,index) in invoicecreate.company.addresses" :key="index" :value="address._id">{{address.address}}</option>
              </b-form-select>
            
          </div>
          <div class="col-4">
            <label>kontak kişi :</label>
            
              <b-form-select required :state="contactValid"  v-model="invoicecreate.contact"  >
                <option value="0" selected disabled>kontak seçiniz</option>
                <option v-for="(contact,index) in contacts" :key="index" :value="contact">{{contact.name}}</option>
              </b-form-select>
              <div class="invalid-feedback">Kontak seçiniz lütfen.</div>
            
          </div>
        </div>
      </div>
    </div>
    <br />

    <div class="row">
      <table class="table table-sm" id="invoiceTable">
        <thead>
          <tr>
            <th v-for="(itemHeader,index) in itemHeaders" :key="index" scope="col">{{itemHeader}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index ) in invoicecreate.items" v-bind:key="index">
            <th scope="row">
              <button
                v-if="index>0"
                type="button"
                class="btn btn-sm btn-danger"
                @click="deleteRow(index)"
              >
              <i class="icon-close"></i>
              </button>
            </th>
            <td>
              <input
                v-model="item.materialNumber"
                type="text"
                class="form-control"
                placeholder="Örnek: 0123456789"
              />
            </td>
            <td>
              <input
                v-model="item.description"
                type="text"
                class="form-control"
                placeholder="Örnek: 4kw 2p W22 motor soğutma fanı"
              />
            </td>
            <td>
              <input v-model="item.delivery" type="text" class="form-control" placeholder="Örnek: 4 ay" />
            </td>
            <td>
              <input v-model="item.unitPrice" type="text" class="form-control" placeholder="Örnek: 100" />
            </td>
            <td>
              <input v-model="item.qty" type="number" step="1"  class="form-control" placeholder="Örnek: 1" />
            </td>
            <td>{{item.unitPrice*item.qty}}</td>
          </tr>

          <tr class="table-success">
            <td>
              <button class="btn btn-sm btn-primary" type="button" @click="addrow()">
                <i class="icon-plus"></i>
              </button>
            </td>
            <td colspan="3">
              <strong class="d-flex justify-content-center">Toplam</strong>
            </td>
            <td colspan="3">
              <strong class="d-flex justify-content-center">
                <u>{{total()}} Euro + KDV</u>
              </strong>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <label>Notes</label>
      <textarea v-model="invoicecreate.note" class="form-control" cols="20" rows="3"></textarea>
    </div>
    <br />
    <div class="row justify-content-center">
      <button class="btn btn-success" @click.prevent="save()">Kaydet</button>
    </div>
    <hr />
    <div class="row">
      <h6>Yetkili :</h6>
      <pre class="text-uppercase"> Nader Alfakesh / Servis müh / nader.alfakesh@dal-group.com</pre>
    </div>
    </form>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: "invoiceCreate",
  props: ["invoice"],
  components: {},
  computed:{
    productValid: function(){
      if(this.invoicecreate.product == 0 ){return false;}
      else {return true;}
      },
    companyValid: function(){
      if(this.invoicecreate.company == 0 ){return false;}
      else {return true;}
    },
    contactValid: function(){
      if(this.invoicecreate.contact == 0 )return false;
      else {return true;}
    },
    referanceValid: function(){
      if(!this.invoicecreate.referance)return false;
      else {return true;}
    },
  },
  created: function() {
    if (this.invoice != null) {
      this.invoicecreate = this.invoice;
    }
    axios
    .get('http://localhost:5000/company')
    .then(res => {
        this.companies = res.data
        })
    .catch(err => console.log(err))
    axios
    .get('http://localhost:5000/product')
    .then(res => {
        this.products = res.data
        })
    .catch(err => console.log(err))
    axios
    .get('http://localhost:5000/contact')
    .then(res => {
        this.contacts = res.data
        })
    .catch(err => console.log(err))
  },
  data: function() {
    return {
      invoicecreate: {
        type: "",
        date: Date.now(),
        referance: "",
        note: "",
        status: "",
        deliveryAddress: 0,
        product: 0,
        company: 0,
        contact: 0,
        items: [
          {
            id: null,
            materialNumber: "",
            description: "",
            delivery: "",
            unitPrice: null,
            qty: null
          }
        ]
      },
      companies: [{_id: 0 , name: 'company'}],
      products: [{_id: 0 , type: 'motor'}],
      contacts: [{_id: 0 , type: 'motor'}],
      itemHeaders: [
        "#",
        "Ürün kodu",
        "Açıklama",
        "Termin süresi",
        "Birim fiyatı",
        "Miktar",
        "Tutar"
      ]
    };
  },
  methods:{
    total: function() {
      let tmp = 0;
      try {
        this.invoicecreate.items.forEach(fofo);
        function fofo(item) {
          tmp += item.qty * item.unitPrice;
        }
      } catch (error) {
        console.log(error)
      }
      
      return tmp;
    },
    addrow: function() {
      this.invoicecreate.items.push({
        id: "",
        materialNumber: "",
        description: "",
        unitPrice: "",
        qty: ""
      });
    },
    deleteRow: function(index) {
      this.invoicecreate.items.splice(index, 1);
    },
    save: function (){
        if(!(this.productValid && this.companyValid && this.contactValid && this.referanceValid ))return;
        if(this.invoice != null){
            this.update()
        }
        else{
            this.create()
        }
    },  
    update: function (){
        axios
        .put('http://localhost:5000/invoice',{
          id: this.invoicecreate._id,
          type: "invoice",
          date: this.invoicecreate.date,
          referance: this.invoicecreate.referance,
          note: this.invoicecreate.note,
          status: this.invoicecreate.status,
          items: this.invoicecreate.items,
          deliveryAddress: this.invoicecreate.deliveryAddress,
          company: this.invoicecreate.company._id,
          product: this.invoicecreate.product._id,
          contact: this.invoicecreate.contact._id,
        })
        .then(res => {
            console.log( res.data);
            this.$router.push({name: 'invoiceIndex'})
            })
        .catch(err => console.log('Update() ' + err))
    },
    create: function(){
      this.invoicecreate.status = 'new'
        axios
        .post('http://localhost:5000/invoice',{
          id: null, 
          type: "invoice", 
          date: this.invoicecreate.date,
          referance: this.invoicecreate.referance,
          note: this.invoicecreate.note,
          status: this.invoicecreate.status,
          items: this.invoicecreate.items,
          deliveryAddress: this.invoicecreate.deliveryAddress,
          company: this.invoicecreate.company._id,
          product: this.invoicecreate.product._id,
          contact: this.invoicecreate.contact._id,
        })
        .then(res => {
            console.log( res.data)
            this.$router.push({name: 'invoiceIndex'})
            })
        .catch(err => console.log('Create() ' + err))
    }  
    
  },


};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.dallogo {
  height: 50px;
  width: auto;
}
.weglogo {
  height: 50px;
  width: auto;
}
textarea,
input {
  color: green;
}
</style>
