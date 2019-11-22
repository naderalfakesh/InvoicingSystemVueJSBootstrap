<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1>{{offercreate.type}}</h1>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <hr />
          <div class="col-8">
            <h5>Motor bilgileri:</h5>
            <p>
              <select v-model="offercreate.product"  class="form-control">
                <option value="0" selected disabled >Ürün seçiniz</option>
                <option v-for="(product,index) in products" :key="index" :value="product">{{product.type + " " + product.summary}}</option>
              </select>
            </p>
          </div>
          <div class="col-4">
            <h5>Tarih:</h5>
            <p>
              <input
                type="text"
                class="form-control"
                v-model="offercreate.date"
                placeholder="01/01/2019"
              />
            </p>
          </div>
        </div>

        <div class="row">
          <div class="col-8">
            <h5>Firma unvanı:</h5>
            <p>
              <select v-model="offercreate.company"  class="form-control">
                <option value="0" selected disabled>Firma seçiniz</option>
                <option v-for="(company,index) in companies" :key="index" :value="company">{{company.name}}</option>
              </select>
            </p>
          </div>
          <div class="col-4">
            <h5>Referans :</h5>
            <p>
              <input
                type="text"
                class="form-control"
                v-model="offercreate.referance"
                placeholder="Dal20190101"
              />
            </p>
          </div>
        </div>
        <div class="row">
          <div class="col-8">
            <h5>Adres :</h5>
            <p>
              <select v-model="offercreate.deliveryAddress"  class="form-control">
                <option value="0" selected disabled>address seçiniz</option>
                <option v-for="(address,index) in offercreate.company.addresses" :key="index" :value="address._id">{{address.address}}</option>
              </select>
            </p>
          </div>
          <div class="col-4">
            <h5>kontak kişi :</h5>
            <p>
              <select v-model="offercreate.contact"  class="form-control">
                <option value="0" selected disabled>kontak seçiniz</option>
                <option v-for="(contact,index) in contacts" :key="index" :value="contact">{{contact.name}}</option>
              </select>
            </p>
          </div>
        </div>
      </div>
    </div>
    <br />

    <div class="row">
      <table class="table table-sm" id="offerTable">
        <thead>
          <tr>
            <th v-for="(itemHeader,index) in itemHeaders" :key="index" scope="col">{{itemHeader}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index ) in offercreate.items" v-bind:key="index">
            <th scope="row">
              <button
                v-if="index>0"
                type="button"
                class="btn btn-sm btn-danger"
                @click="deleteRow(index)"
              >X</button>
            </th>
            <td>
              <input
                v-model="item.materialNumber"
                type="text"
                class="form-control"
                placeholder="0123456789"
              />
            </td>
            <td>
              <input
                v-model="item.description"
                type="text"
                class="form-control"
                placeholder="4kw 0p W22 motor"
              />
            </td>
            <td>
              <input v-model="item.delivery" type="text" class="form-control" placeholder="4 ay" />
            </td>
            <td>
              <input v-model="item.unitPrice" type="text" class="form-control" placeholder="0" />
            </td>
            <td>
              <input v-model="item.qty" type="text" class="form-control" placeholder="0" />
            </td>
            <td>{{item.unitPrice*item.qty}}</td>
          </tr>

          <tr class="table-success">
            <td>
              <button class="btn btn-sm btn-primary" type="button" @click="addrow()">+</button>
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
      <h5>Notes</h5>
      <textarea v-model="offercreate.note" class="form-control" cols="20" rows="3"></textarea>
    </div>
    <br />
    <div class="row justify-content-center">
      <button class="btn btn-success" @click="save()">Kaydet</button>
    </div>
    <hr />
    <div class="row">
      <h6>Yetkili :</h6>
      <pre class="text-uppercase"> Nader Alfakesh / Servis müh / nader.alfakesh@dal-group.com</pre>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'

export default {
  name: "offerCreate",
  props: ["offer"],
  components: {},
  
  created: function() {
    if (this.offer != null) {
      this.offercreate = this.offer;
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
      offercreate: {
        type: "",
        date: "",
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
        this.offercreate.items.forEach(fofo);
        function fofo(item) {
          tmp += item.qty * item.unitPrice;
        }
      } catch (error) {
        console.log(error)
      }
      
      return tmp;
    },
    addrow: function() {
      this.offercreate.items.push({
        id: "",
        materialNumber: "",
        description: "",
        unitPrice: "",
        qty: ""
      });
    },
    deleteRow: function(index) {
      this.offercreate.items.splice(index, 1);
    },
    save: function (){

        if(this.offer != null){
            this.update()
        }
        else{
            this.create()
        }
    },  
    update: function (){
        axios
        .put('http://localhost:5000/invoice',{
          id: this.offercreate._id, 
          type: "offer", 
          date: this.offercreate.date,
          referance: this.offercreate.referance,
          note: this.offercreate.note,
          status:  "updated",
          items: this.offercreate.items,
          deliveryAddress: this.offercreate.deliveryAddress,
          company: this.offercreate.company._id,
          product: this.offercreate.product._id,
          contact: this.offercreate.contact._id,
        })
        .then(res => {
            console.log( res.data);
            this.$router.push({name: 'offerIndex'})
            })
        .catch(err => console.log('Update() ' + err))
    },
    create: function(){
        axios
        .post('http://localhost:5000/invoice',{
          id: null, 
          type: "offer", 
          date: this.offercreate.date,
          referance: this.offercreate.referance,
          note: this.offercreate.note,
          status: "new",
          items: this.offercreate.items,
          deliveryAddress: this.offercreate.deliveryAddress,
          company: this.offercreate.company._id,
          product: this.offercreate.product._id,
          contact: this.offercreate.contact._id,
        })
        .then(res => {
            console.log( res.data)
            this.$router.push({name: 'offerIndex'})
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
