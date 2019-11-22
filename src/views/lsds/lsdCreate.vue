<template>
<div class="container"> 
    <div class="card border-primary">
        <div class="card-header bg-primary text-white">
            <h5>Sipariş detayları</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <label>Müşteri</label>
                    <b-form-select required :state="companyValid" v-model="lsdCreate.company" class="form-control">
                        <option value="0">Firma seçiniz</option>
                        <option v-for="(company,index) in companies" :key="index" :value="company">{{company.name}}</option>
                    </b-form-select>
                </div>
                <div class="col">
                    <label>Sipariş tarihii</label>
                    <b-form-input  v-model="lsdCreate.orderDate" type="date" class="form-control" />
                </div>
                <div class="col">
                    <label>İstenilen tarihi</label>
                    <b-form-input v-model="lsdCreate.wantedDeliveryDate" type="date" class="form-control" />
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <label>Rheosta modeli</label>
                    <b-form-input required :state="modelValid" v-model="lsdCreate.model" type="text" class="form-control" placeholder="Örnek LSDE2000" />
                    <div class="invalid-feedback">Reosta modeli giriniz lütfen</div>
                </div>
                <div class="col">
                    <label>Satış bedeli</label>
                    <input v-model="lsdCreate.salesPrice" type="text" class="form-control" placeholder="1000Euro">
                </div>
                <div class="col">
                    <label>Teslim tarihi</label>
                    <input v-model="lsdCreate.deliveryDate" type="date" class="form-control">
                </div>
                <div class="w-100"></div>
                <div class="col-9 ">
                    <label>Ticari koşullar</label>
                    <textarea v-model="lsdCreate.commercialConditions" class="form-control"  rows="3" placeholder="3 gün devreye alma dahil"></textarea>
                </div>
            </div>
        </div>
    </div>

    <div class="card border-info mt-3">
        <div class="card-header bg-info text-white">
            <h5>Ana Motor detayları</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <label>Marka</label>
                    <b-form-input  required :state="motorValid"  v-model="lsdCreate.motorInfo.brand" type="text" class="form-control" placeholder="WEG" />
                    <div class="invalid-feedback">Motor markası giriniz lütfen</div>
                </div>
                <div class="col">
                    <label>Güç</label>
                    <input v-model="lsdCreate.motorInfo.power" type="text" class="form-control" placeholder="830kw">
                </div>
                <div class="col">
                    <label>Kutup sayısı</label>
                    <input v-model="lsdCreate.motorInfo.poles" type="text" class="form-control" placeholder="04P">
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <label>Stator gerilimi</label>
                    <input v-model="lsdCreate.motorInfo.statorVoltage" type="text" class="form-control" placeholder="6600V">
                </div>
                <div class="col">
                    <label>Rotor gerilmi</label>
                    <input v-model="lsdCreate.motorInfo.rotorVoltage" type="text" class="form-control" placeholder="1250V">
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <label>Stator akımı</label>
                    <input v-model="lsdCreate.motorInfo.statorCurrent" type="text" class="form-control" placeholder="74A">
                </div>
                <div class="col">
                    <label>Rotor akımı</label>
                    <input v-model="lsdCreate.motorInfo.rotorCurrent" type="text" class="form-control" placeholder="585A">
                </div>
                <div class="w-100"></div>
            </div>
        </div>
    </div>
    <div class="card border-success my-3">
        <div class="card-header bg-success text-white">
            <h5>Rheosta detayları</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <label>Elektrod motoru</label>
                    <input v-model="lsdCreate.lsdInfo.motor" type="text" class="form-control" placeholder="Örnek: 0.55kw 04k b14">
                </div>
                <div class="col">
                    <label>Sürücü</label>
                    <input v-model="lsdCreate.lsdInfo.vfd" type="text" class="form-control" placeholder="Örnek: CFW10026S22">
                </div>
                <div class="col">
                    <label>Redüktör</label>
                    <input v-model="lsdCreate.lsdInfo.gearbox" type="text" class="form-control" placeholder="Örnek: DSV 10i">
                </div>
                <div class="w-100"></div>
                    
                <div class="col">
                    <label>Kontaktör</label>
                    <input v-model="lsdCreate.lsdInfo.contactor" type="text" class="form-control" placeholder="Örnek: Homa 900A">
                </div>
                <div class="col">
                    <label>Seri numarası</label>
                    <input v-model="lsdCreate.lsdInfo.serialNumber" type="text" class="form-control" placeholder="Örnek: 19001">
                </div>
                <div class="col">
                    <label>İmalat tarihi</label>
                    <input v-model="lsdCreate.lsdInfo.productionDate" type="text" class="form-control" placeholder="10/2019">
                </div>
                <div class="w-100"></div>
            </div>
        </div>
    </div>
    <div class="card border-warning my-3">
        <div class="card-header bg-warning">
            <h5>Test</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col">
                    <label>Test yapan</label>
                    <input v-model="lsdCreate.testInfo.tester" type="text" class="form-control" placeholder="Örnek: Nader Alfakesh">
                </div>
                <div class="col">
                    <label>Test Tarihi</label>
                    <input v-model="lsdCreate.testInfo.testDate" type="date" class="form-control"  >
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <label>Test sonucu</label>
                    <input v-model="lsdCreate.testInfo.testResult" type="text" class="form-control" placeholder="Örnek: Herşey OK">
                </div>
            </div>
        </div>
    </div>
    <div class="card border-secondary my-3">
        <div class="card-header bg-secondary text-white">
            <h5>Devreya alma</h5>
        </div>
        <div class="card-body">
        <div class="row">
            <div class="col">
                <label>Devreya alan</label>
                <input v-model="lsdCreate.commissioningInfo.commissioner" type="text" class="form-control" placeholder="Örnek: Engin deniz">
            </div>
            <div class="col">
                <label>Son kullanıcı</label>
                <input v-model="lsdCreate.commissioningInfo.enduser" type="text" class="form-control" placeholder="Örnek: Aslan çimento">
            </div>
            <div class="col">
                <label>Adres</label>
                <input v-model="lsdCreate.commissioningInfo.address" type="text" class="form-control" placeholder="Örnek: İzmir falan filan">
            </div>
            <div class="w-100"></div>
            <div class="col">
                <label>Tarih</label>
                <input v-model="lsdCreate.commissioningInfo.commissionDate" type="date" class="form-control">
            </div>
            <div class="col">
                <label>İletkenlik</label>
                <input v-model="lsdCreate.commissioningInfo.conductivity" type="text" class="form-control" placeholder="Örnek: 7,5 ms/cm2">
            </div>
            <div class="col">
                <label>Not</label>
                <input v-model="lsdCreate.commissioningInfo.notes" type="text" class="form-control" placeholder="Şamandıra değiştirldi">
            </div>
            </div>
        </div>
    </div>
    <div class="row m-3">
        <div class="col  text-center">
            <button class="btn btn-primary" @click="save()">Kaydet</button>
        </div>
    </div>

</div>
    
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name: "lsdCreate",
    props: ["lsd"],
    data: function(){
        return {
            lsdCreate:
            {
                company: "",
                orderDate: new Date().toISOString().substr(0, 10), 
                salesPrice: "", 
                commercialConditions: "", 
                wantedDeliveryDate: new Date().toISOString().substr(0, 10), 
                model: "",
                deliveryDate: new Date().toISOString().substr(0, 10),
                status: "",
                motorInfo: {
                    brand: "",
                    power: "",
                    poles:  "",
                    statorVoltage: "",
                    statorCurrent: "",
                    rotorVoltage: "",
                    rotorCurrent: "",
                    burshLifitng: false
                },
                lsdInfo: {
                    motor: "",
                    vfd:    "",
                    gearbox: "",
                    contactor: "",
                    serialNumber: "",
                    productionDate: "",
                },
                testInfo:{
                    tester: "",
                    testDate: new Date().toISOString().substr(0, 10),
                    testResult: ""
                },
                commissioningInfo: {
                    commissioner: "" ,
                    enduser: "",
                    address: "",
                    commissionDate: new Date().toISOString().substr(0, 10),
                    conductivity: "",
                    notes: ""
                }
            },
            companies: []
        };
    },
    computed:{
        companyValid: function(){
            if(this.lsdCreate.company == 0){return false;}
            else {return true;}
        },
        modelValid: function(){
            if(!this.lsdCreate.model){return false;}
            else {return true;}
        },
        motorValid: function(){
            if(!this.lsdCreate.motorInfo.brand){return false;}
            else {return true;}
        },

    },
    methods:{
        save: function (){
            if(!(this.companyValid && this.modelValid && this.motorValid)){return;}
            if(this.lsd != null){
                this.update()
            }
            else{
                this.create()
            }
        },  
        update: function (){
            this.lsdCreate.status = "Update"
            axios
            .put('http://localhost:5000/lsd',{
            lsd : this.lsdCreate
            })
            .then(res => {
                console.log( res.data);
                this.$router.push({name: 'lsdIndex'})
                })
            .catch(err => console.log('Update() ' + err))
        },
        create: function(){
            this.lsdCreate.status = "New"
            axios
            .post('http://localhost:5000/lsd',{
            lsd: this.lsdCreate
            })
            .then(res => {
                console.log( res.data)
                this.$router.push({name: 'lsdIndex'})
                })
            .catch(err => console.log('Create() ' + err))
        },
        
    },
    created: function(){
        if (this.lsd != null) {
            this.lsdCreate = this.lsd;
        }
        axios
        .get('http://localhost:5000/company')
        .then(res => {
        this.companies = res.data
        })
        .catch(err => console.log(err))
    },
}
</script>

<style>

</style>
