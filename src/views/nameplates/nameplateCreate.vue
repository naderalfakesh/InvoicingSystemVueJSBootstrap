<template>
<div class="row justify-content-center">
    
    <div id="frame">
        <div id="partNumber">
            <!-- <p>{{nameplateCreate.materialNumber}}</p> -->
            <input  v-model="nameplateCreate.materialNumber" type="text" class="text-center custom-input">

        </div>
        <div id="baslik">
            <div id="baslikLeft"><img src="./model.jpg" alt="">
            <!-- <p>{{nameplateCreate.model}}</p> -->
            <input  v-model="nameplateCreate.model" type="text" class="text-center custom-input">
            </div>
            <div id="baslikMiddle">
                <div id="smoke">
                    <p>{{nameplateCreate.teao1}}</p>
                    <p>{{nameplateCreate.teao2}}</p>
                </div>
                <p id="serialNum" >{{nameplateCreate.productionDate}}   {{nameplateCreate.serialNumber}}</p>
            </div>
            <div id="baslikRight">
                <div id="standards">
                    <div id="standardLogos">
                        <img src="./CAE.png" alt="">
                        <img id="eac" src="./EAC.gif" alt="">
                    </div>
                    <p id="caeText">MOD.TE1BF0X0!</p>
                </div>
                <div id="standardIEC">
                    <p>EN12101-3</p>
                    <p>IEC 60034-1</p>
                </div>
            </div>
        </div>
        <div id="tablo">
            <div id="item1">
                <div id="row1">
                    <p>3 ~ {{nameplateCreate.frame}}-{{nameplateCreate.pole}}</p>
                    <p></p>
                    <p>{{nameplateCreate.protectionClass}} INS. CL. {{nameplateCreate.insulationClass}} &Tab; DT {{nameplateCreate.deltaT}}K</p>
                    <p></p>
                    <p>{{nameplateCreate.duty}}</p>
                    <p>SF {{nameplateCreate.serviceFactor}}</p>
                    <p>{{nameplateCreate.smokeClass}}</p>
                </div>
                <div id="row2">
                    <div class="voltage"><p class="center">V</p></div>
                    <div class="frequency"><p class="center">Hz</p></div>
                    <div class="power"><p class="center">kW</p></div>
                    <div class="speed"><p class="center">RPM</p></div>
                    <div class="current"><p class="center">A</p></div>
                    <div class="powerFactor"><p class="center">PF</p></div>
                    <div class="IECode"><p class="center">IE code</p></div>
                    <div class="eff100"><p class="center">100%</p></div>
                    <div class="eff75"><p class="center">75%</p></div>
                    <div class="eff50"><p class="center">50%</p></div>
                </div>
                <div id="row3">
                    <div class="voltage">
                        <div v-for="(v,index) in nameplateCreate.voltage" v-bind:key="index" class="overflow-hidden">
                            <!-- <p>{{v}}</p> -->
                            <input  v-model="nameplateCreate.voltage[index]" type="text" class="text-center custom-input">
                        </div>
                    </div>
                    <div class="frequency">
                        <div v-for="(f,index) in nameplateCreate.frequency" v-bind:key="index">
                            <!-- <p>{{f}}</p> -->
                            <input  v-model="nameplateCreate.frequency[index]" type="text" class="text-center custom-input">
                            </div>
                    </div>
                    <div class="power">
                        <div ><p>{{nameplateCreate.power[0]}}</p></div>
                    </div>
                    <div class="speed">
                        <div v-for="(row,index) in nameplateCreate.speed" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="current">
                        <div v-for="(row,index) in nameplateCreate.current" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="powerFactor">
                        <div v-for="(row,index) in nameplateCreate.powerFactor" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="IECode">
                            <div ><p>{{nameplateCreate.IECode}}</p></div>
                    </div>
                    <div class="eff100">
                        <div v-for="(row,index) in nameplateCreate.eff100" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="eff75">
                        <div v-for="(row,index) in nameplateCreate.eff75" v-bind:key="index"><p>{{row}}</p></div>
                    </div>
                    <div class="eff50">
                        <div v-for="(row,index) in nameplateCreate.eff50" v-bind:key="index"><p>{{row}}</p></div>
                    </div> 
                </div>
            </div>
            <div id="item2">
                <div id="bearings">
                    <div id="motorSymbol"><img src="./motorsimge.jpg" alt=""></div>
                    <div id="DEbearing"><p>  {{nameplateCreate.deBearing}} ({{nameplateCreate.deGreaseQTY}}g)</p></div>
                    <div id="NDEbearing"><p> {{nameplateCreate.ndeBearing}} ({{nameplateCreate.ndeGreaseQTY}}g)</p></div>
                    <div id="greaseType"><p>{{nameplateCreate.grease}}</p><p>{{nameplateCreate.greasePeriod}} h</p></div>
                </div>
                <div id="delta"><img src="./delta.jpg" alt=""></div>
                <div id="star"><img src="./star.jpg" alt=""></div>
                <div id="nema"><p>{{nameplateCreate.nema1}}</p><p>{{nameplateCreate.nema2}}</p></div>
                <div id="altweg"><p>Alt <b>{{nameplateCreate.altitude}}</b> m.a.s.l.    <b>{{nameplateCreate.weight}}</b> kg</p> </div>
            </div>
        </div>
    </div>
        
    <div class="card border-primary w-100 mt-3">
        <div class="card-header bg-primary text-white">
            <h5>Etiket Başlığı</h5>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col">
                    <b>Seri:</b>
                    <input v-model="nameplateCreate.model" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>İmalat tarihi</b>
                    <input v-model="nameplateCreate.productionDate" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Seri numarası</b>
                    <input v-model="nameplateCreate.serialNumber" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Ürün kodu</b>
                    <input v-model="nameplateCreate.materialNumber" type="text" class="form-control">
                </div>
            </div>
        </div>
    </div>
    
    <div class="card border-secondary w-100 mt-3">
        <div class="card-header bg-secondary text-white">
            <h5>Genel özelikleri</h5>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col">
                    <b>Gövde:</b>
                    <input v-model="nameplateCreate.frame" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Kutup sayısı</b>
                    <input v-model="nameplateCreate.pole" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Koruma sınıfı</b>
                    <input v-model="nameplateCreate.protectionClass" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>izöle sınıfı</b>
                    <input v-model="nameplateCreate.insulationClass" type="text" class="form-control">
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <b>Delta T</b>
                    <input v-model="nameplateCreate.deltaT" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Duty</b>
                    <input v-model="nameplateCreate.duty" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Service Factor: </b>
                    <input v-model="nameplateCreate.serviceFactor" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Smoke class: </b>
                    <input v-model="nameplateCreate.smokeClass" type="text" class="form-control">
                </div>
            </div>
        </div>
    </div>
        
    <div class="card border-info w-100 mt-3">
        <div class="card-header bg-info text-white">
            <h5>Genel özelikleri</h5>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col">
                    <b>Voltage:</b>
                    <input v-model="nameplateCreate.voltage[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.voltage[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.voltage[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.voltage[3]" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Frekans</b>
                    <input v-model="nameplateCreate.frequency[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.frequency[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.frequency[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.frequency[3]" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Güç</b>
                    <input v-model="nameplateCreate.power[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.power[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.power[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.power[3]" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Hız</b>
                    <input v-model="nameplateCreate.speed[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.speed[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.speed[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.speed[3]" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Akım</b>
                    <input v-model="nameplateCreate.current[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.current[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.current[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.current[3]" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Güç faktoru</b>
                    <input v-model="nameplateCreate.powerFactor[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.powerFactor[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.powerFactor[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.powerFactor[3]" type="text" class="form-control">
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <b>IE sınıfı: </b>
                    <input v-model="nameplateCreate.IECode" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>100% verimlik: </b>
                    <input v-model="nameplateCreate.eff100[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff100[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff100[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff100[3]" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>75% verimlik: </b>
                    <input v-model="nameplateCreate.eff75[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff75[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff75[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff75[3]" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>50% verimlik: </b>
                    <input v-model="nameplateCreate.eff50[0]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff50[1]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff50[2]" type="text" class="form-control">
                    <input v-model="nameplateCreate.eff50[3]" type="text" class="form-control">
                </div>
            </div>
        </div>
    </div>

    <div class="card border-warning w-100 mt-3">
        <div class="card-header bg-warning text-white">
            <h5>Genel özelikleri</h5>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col">
                    <b>DE rulmanı</b>
                    <input v-model="nameplateCreate.deBearing" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>DE gres miktarı</b>
                    <input v-model="nameplateCreate.deGreaseQTY" type="text" class="form-control">
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <b>NDE rulmanı</b>
                    <input v-model="nameplateCreate.ndeBearing" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>NDE gres miktarı</b>
                    <input v-model="nameplateCreate.ndeGreaseQTY" type="text" class="form-control">
                </div>
                <div class="w-100"></div>
                <div class="col">
                    <b>Gres tipi</b>
                    <input v-model="nameplateCreate.grease" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Gresleme peryodu</b>
                    <input v-model="nameplateCreate.greasePeriod" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Ağırlık</b>
                    <input v-model="nameplateCreate.weight" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Rakım</b>
                    <input v-model="nameplateCreate.altitude" type="text" class="form-control">
                </div>
            </div>
        </div>
    </div>

    <div class="card border-secondary w-100 mt-3">
        <div class="card-header bg-secondary text-white">
            <h5>Genel özelikleri</h5>
        </div>
        <div class="card-body ">
            <div class="row">
                <div class="col">
                    <b>Nema yazısı</b>
                    <input v-model="nameplateCreate.nema1" type="text" class="form-control">
                    <input v-model="nameplateCreate.nema2" type="text" class="form-control">
                </div>
                <div class="col">
                    <b>Smoke yazısı</b>
                    <input v-model="nameplateCreate.teao1" type="text" class="form-control">
                    <input v-model="nameplateCreate.teao2" type="text" class="form-control">
                </div>
            </div>
        </div>
    </div>
    <div class="card w-100 my-3">
        <button @click="save()" class="btn btn-primary" >Kaydet</button>
    </div>

</div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
    name: "nameplateCreate",
    props: ["nameplate"],
    data: function(){
        return {
            nameplateCreate: {
                model:"",
                productionDate: "",
                serialNumber: "",
                materialNumber: "",
                frame: "",
                pole: "",
                protectionClass: "",
                insulationClass: "",
                deltaT: "",
                duty: "",
                serviceFactor: "",
                smokeClass: "",
                voltage:["","","",""],
                frequency:["",""],
                power: [""],
                speed:["","","",""],
                current:["","","",""],
                powerFactor:["","","",""],
                IECode:"",
                eff100:["","",""],
                eff75:["","",""],
                eff50:["","",""],
                deBearing: "",
                ndeBearing: "",
                deGreaseQTY: "",
                ndeGreaseQTY: "",
                grease: "",
                greasePeriod: "",
                nema1: "",
                nema2: "",
                altitude: "",
                weight: "",
                teao1: "",
                teao2: "",
            }
        };
    },
    methods:{
        save: function (){
            if(this.nameplate != null){
                this.update()
            }
            else{
                this.create()
            }
        },  
        update: function (){
            axios
            .put('http://localhost:5000/nameplate',{
            nameplate : this.nameplateCreate
            })
            .then(res => {
                console.log( res.data);
                this.$router.push({name: 'nameplateIndex'})
                })
            .catch(err => console.log('Update() ' + err))
        },
        create: function(){
            axios
            .post('http://localhost:5000/nameplate',{
            nameplate: this.nameplateCreate
            })
            .then(res => {
                console.log( res.data)
                this.$router.push({name: 'nameplateIndex'})
                })
            .catch(err => console.log('Create() ' + err))
        },
    },
    created: function(){
        if (this.nameplate != null) {
            this.nameplateCreate = this.nameplate;
        }
        axios
        .get('http://localhost:5000/company')
        .then(res => {
        this.companies = res.data
        })
        .catch(err => console.log(err))
    }
    
}
</script>

<style scoped>
#frame{
        width: 800px;
        height: 310px;
        line-height: 0px;
        font-size: 11px;
        font-family:  Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 700;
        padding: 3px;
        display: grid;
        border: 2px solid black;
        border-radius: 5px;
        grid-template-areas: "partNumber baslik" 
                             "partNumber tablo" 
                             "partNumber tablo" 
                             "partNumber tablo"; 
        /* grid-gap: 1px; */
        grid-template-columns: 2fr 29fr;
        grid-template-rows: 1fr 3fr;
    }
    #partNumber{
        grid-area: partNumber;
        align-self: center;
        letter-spacing: 1px;
        font-weight: 900;
        transform: rotate(-90deg);
        /* writing-mode: sideways-lr;
        text-orientation: mixed; */
        
    }
    #baslik{
        height: 75px;
        grid-area: baslik;
        display: grid;
        grid-template-columns: 3fr 4fr 3fr;
    }
    #tablo{
        height: 225px;
        grid-area: tablo;
        display: grid;
        border-top: 1px solid black;
        border-left: 1px solid black;
        border-top-left-radius: 8px;
        grid-template-rows: 6fr 4fr;
    }
    #item1{
        height: 157px;
        display:grid;
        border-bottom: 1px solid black;
        grid-template-rows: 1fr 1fr 4fr;
    }
    #item2{
        height: 68px;
        display:grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 6fr 5fr 5fr 11fr;
        grid-template-areas: "bearings delta star nema"
                             "bearings delta star nema"
                             "bearings delta star altweg" 
                             "bearings delta star altweg"
    }
    #row1{
        height: 25px;
        border-bottom: 1px solid black;
        padding-left: 5px;
        /* font-size: 8px; */
            /* display : grid;
            grid-auto-flow: column;
            grid-template-columns: 1fr 4fr 2fr 6fr 4fr 1fr 5fr; */
            display: flex;
            flex-direction: row;
            justify-content: space-between
    }
    #row2{
        height: 25px;
        /* border-bottom:2px solid black; */
        display : grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(50 , 1fr);
    }
    #row3{
        height: 100px;
        display : grid;
        grid-auto-flow: column;
        grid-template-columns: repeat(50 , 1fr);
        grid-template-rows: 1fr;
    }
    #row3 div{
        display: grid; 
    }
    #row3 .frequency , #row3 .power{
        grid-template-rows: 3fr 1fr;
    }
    #row3 .eff100,.eff75,.eff50{
        grid-template-rows: 1fr 2fr 1fr;
    }
    .voltage{
        grid-column-start: 1;
        grid-column-end: 11;
        border-right: 1px solid black;
        
    }
    .frequency{
        grid-column-start: 11;
        grid-column-end: 14;
        border-right: 1px solid black;
       
    }
    .power{
        grid-column-start: 14;
        grid-column-end: 17;
        border-right: 1px solid black;
    }
    .speed{
        grid-column-start: 17;
        grid-column-end: 21;
        border-right: 1px solid black;
    }
    .current{
        grid-column-start: 21;
        grid-column-end: 29;
        border-right: 1px solid black;
    }
    .powerFactor{
        grid-column-start: 29;
        grid-column-end: 34;
        border-right:1px solid black;
    }
    .IECode{
        grid-column-start: 34;
        grid-column-end: 39;
        border-right: 1px solid black;
    }
    .eff100{
        grid-column-start: 39;
        grid-column-end: 43;
        border-right: 1px solid black;
    }
    .eff75{
        grid-column-start: 43;
        grid-column-end: 47;
        border-right: 1px solid black;
    }
    .eff50{
        grid-column-start: 47;
        grid-column-end: 51;
    }
    .center{
        text-align: center;
    }

    
    #bearings{
        grid-area: bearings;
        display: grid;
        grid-template-rows: 1fr 1fr 1fr 1fr;
        grid-template-columns: 1fr 3fr 2fr;
        padding-left: 10Px;
    }
    #bearings #motorSymbol{
        grid-row-start: 1;
        grid-row-end: 3;
        grid-column-start: 1;
        grid-column-end: 2;
        align-self: center;
    }
    #bearings #motorSymbol img{
        width: 40px;
        height: 34px;
    }
    #bearings #DEbearing{
        grid-row-start: 1;
        grid-row-end: 2;
        grid-column-start: 2;
        grid-column-end: 5;
    }
    #bearings #DEbearing p{
        margin-top: 10px;
    }
    #bearings #NDEbearing{
        grid-row-start: 2;
        grid-row-end: 3;
        grid-column-start: 2;
        grid-column-end: 5;
    }
    #bearings #greaseType{
        grid-row-start: 3;
        grid-row-end: 4;
        grid-column-start: 1;
        grid-column-end: end-line;
        font-size: 9px;
        margin-top: -5px;
       
    }
    #bearings #greasePeriod{
        grid-row-start: 4;
        grid-row-end: 5;
        grid-column-start: 1;
        grid-column-end: end-line;
    }

    #delta{
        grid-area: delta;
        border-left: 1px solid black;
    }
    #delta img{
        width: 142px;
        height: 68px;
    }
    #star{
        grid-area: star;
        border-left: 1px solid black;
    }
    #star img{
        width: 142px;
        height: 68px;
    }
    #nema{
        grid-area: nema;
        border-left: 1px solid black;
        display: grid;
        align-items: center;
        word-break: break-word;
        font-size: 9px;
        padding-left: 5px;
        letter-spacing: 1.5px;
    }
    #nema p{
        margin: 0px;
    }
    #altweg{
        grid-area: altweg;
        border-left: 1px solid black;
        border-top: 1px solid black;
        display: grid;
        align-items: center;
        padding-left: 5px;
    }
    #row3 div div {
        display: flex;
        align-items: center;
        justify-content: center;
        border-top: 1px solid black;
    }
    #baslik #baslikLeft{
        height: 75px;
        display: flex;
        padding-left: 20px;
    }
    #baslik #baslikLeft img{
        width: 75px;
        height: 60px
    }
    #baslik #baslikLeft p{
        margin-left: 10px;
    }

    #baslik #baslikMiddle{
        height: 75px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        min-width: 0;
    }
    #baslik #baslikRight{
        height: 75px;
    }

    #baslik #serialNum{
        font-size: 12px;
        font-weight: 900;
        letter-spacing: 1px;
    }
    #baslik #smoke{
        font-size: 9px;
    }
    #standardLogos{
        margin-top: 10px;
    }
    #standardLogos img{
        width: 35px;
        height: 35px
    }
    #eac{
        margin-left: 30px;
    }
    /* #caeText{
       
    } */
    #baslikRight{
        display: flex;
        justify-content: space-between;
    }
    #standardIEC{
        align-self: end;
        
    }
    p{
        margin-top: 11px;
        margin-bottom: 11px;
    }
    .custom-input{
        width: 100%;
        border: 0ch;
        padding: 0%;
        margin: 0%;
        font-size: 11px;
        font-family:  Verdana, Geneva, Tahoma, sans-serif;
        font-weight: 700;
    }
</style>