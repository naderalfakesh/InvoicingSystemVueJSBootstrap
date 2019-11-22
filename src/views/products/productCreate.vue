<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <h5>Ürün tipi</h5>
                        <select v-model="productcreate.type" class="form-control">
                            <option value="" disabled selected>Ürün tipi seçin</option>
                            <option value="motor">Motor</option>
                            <option value="vfd">Hız kontrol</option>
                            <option value="lsd">Yol verici</option>
                        </select>
                    </div>
                    <div class="col-6">
                        <h5>Ürün Kodu</h5>
                        <input v-model="productcreate.materialNumber" placeholder="0123456789" type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5>Serti numarası</h5>
                        <input v-model="productcreate.serialNumber" placeholder="1030000000" type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div v-if="productcreate.type == 'motor' " class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <h5>Marka</h5>
                        <input v-model="productcreate.motor.brand" placeholder="WEG,DEG..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Seri</h5>
                        <input v-model="productcreate.motor.series" placeholder="W22,W21..." type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Biçim</h5>
                        <input v-model="productcreate.motor.type" placeholder="standard,ex,smoke" type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Güç</h5>
                        <input v-model="productcreate.motor.power" placeholder="22,75,315" type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Hız</h5>
                        <input v-model="productcreate.motor.speed" placeholder="3000,1500..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Gerilim</h5>
                        <input v-model="productcreate.motor.voltage" placeholder="400,575..." type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Frekans</h5>
                        <input v-model="productcreate.motor.frequency" placeholder="50,60,84..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Verimlik sınfı</h5>
                        <input v-model="productcreate.motor.effeciency" placeholder="IE2,IE3...." type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Gövde</h5>
                        <input v-model="productcreate.motor.frame" placeholder="315,280,250..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Kutup sayısı</h5>
                        <input v-model="productcreate.motor.pole" placeholder="2,4,6...." type="text" class="form-control">
                    </div>
                </div>
            </div>

        </div>
        <div v-if="productcreate.type == 'vfd' " class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <h5>Marka</h5>
                        <input v-model="productcreate.vfd.brand" placeholder="WEG,DEG..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Seri</h5>
                        <input v-model="productcreate.vfd.series" placeholder="CFW09,CFW08..." type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Biçim</h5>
                        <input v-model="productcreate.vfd.type" placeholder="sürücü,softstarter" type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Güç</h5>
                        <input v-model="productcreate.vfd.voltage" placeholder="315,55,90...." type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Akım</h5>
                        <input v-model="productcreate.vfd.current" placeholder="600,104,360..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Gerilim</h5>
                        <input v-model="productcreate.vfd.power" placeholder="400,690..." type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h5>Gövde</h5>
                        <input v-model="productcreate.vfd.frame" placeholder="10,9,8..." type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div v-if="productcreate.type == 'lsd' " class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-6">
                        <h5>Marka</h5>
                        <input v-model="productcreate.lsd.brand" placeholder="deg,pape..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>İmalat tarihi</h5>
                        <input v-model="productcreate.lsd.productionDate" placeholder="01-01-2019" type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Motor gücü</h5>
                        <input v-model="productcreate.lsd.motorpower" placeholder="630,2800..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Rotor akımı</h5>
                        <input v-model="productcreate.lsd.rotorcurrent" placeholder="856,1205..." type="text" class="form-control">
                    </div>
                </div>
                <div class="row">
                    <div class="col-6">
                        <h5>Rotor gerilimi</h5>
                        <input v-model="productcreate.lsd.rotorvoltage" placeholder="750,1230..." type="text" class="form-control">
                    </div>
                    <div class="col-6">
                        <h5>Seri</h5>
                        <input v-model="productcreate.lsd.series" placeholder="LSDEmini-LSDE2000" type="text" class="form-control">
                    </div>
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
        <button class="btn btn-sm btn-primary" @click="save()">Kaydet</button>
        </div>
    </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name: "productCreate",
    props: ["product"],
    data: function(){
        return {
            productcreate:{
                id: null,
                type: "",
                materialNumber: "",
                serialNumber: "",
                motor: {
                    brand: "", 
                    series: "", 
                    type: "", 
                    power: null,
                    speed: null,
                    voltage: null,
                    frequency: null,
                    effeciency: "",
                    frame: null,
                    pole:   null,
                },
                vfd: {
                        brand: "",
                        series: "",
                        type: "",
                        power: null,
                        current: null,
                        voltage: null,
                        frame: null,
                    },
                lsd: {
                    brand: "",
                    series: "",
                    productionDate: "", 
                    motorpower: null,
                    rotorcurrent: null,
                    rotorvoltage: null
                }

            }
        };
    },
    created: function(){
        if(this.product != null){
            this.productcreate = this.product
        }
    },
    methods: {
        save: function (){

          if(this.product != null){
              this.update()
          }
          else{
              this.create()
          }
      },  
      update: function (){
          axios
          .put('http://localhost:5000/product',{
            id: this.productcreate._id, 
            type: this.productcreate.type, 
            materialNumber: this.productcreate.materialNumber,
            serialNumber: this.productcreate.serialNumber,
            motor: this.productcreate.motor,
            vfd: this.productcreate.vfd,
            lsd: this.productcreate.lsd
          })
          .then(res => {
              console.log( res.data);
              this.$router.push({name: 'productIndex'})
              })
          .catch(err => console.log('Update() ' + err))
      },
      create: function(){
          axios
          .post('http://localhost:5000/product',{
            id: null,
            type: this.productcreate.type, 
            materialNumber: this.productcreate.materialNumber,
            serialNumber: this.productcreate.serialNumber,
            motor: this.productcreate.motor,
            vfd: this.productcreate.vfd,
            lsd: this.productcreate.lsd
          })
          .then(res => {
              console.log( res.data)
              this.$router.push({name: 'productIndex'})
              })
          .catch(err => console.log('Create() ' + err))
      }  
    }

}
</script>

<style>

</style>
