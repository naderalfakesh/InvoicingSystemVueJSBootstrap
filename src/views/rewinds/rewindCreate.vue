<template>
  <div>
    <div>
      <select v-model="rewindCreate.product" class="form-control col-6" @change="copyMotorValues()">
        <option >choose</option>
        <option v-for="(product,index) in products" :key="index" :value="product">{{product.summary}}</option>
      </select>
      <select v-model="rewindCreate.company" class="form-control col-6" >
        <option >choose</option>
        <option v-for="(company,index) in companies" :key="index" :value="company">{{company.name}}</option>
      </select>
    </div>
    <div class="row">
      <table class="table table-sm">
        <thead>
          <th scope="col"></th>
          <th scope="col">Gerilim</th>
          <th scope="col">Frekans</th>
          <th scope="col">Akım</th>
          <th scope="col">Spir sayısı</th>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Asıl</th>
            <td><input v-model="rewindCreate.actualVoltage" type="text" class="form-control" /></td>
            <td><input v-model="rewindCreate.actualFrequency" type="text" class="form-control" /></td>
            <td><input v-model="rewindCreate.actualCurrent" type="text" class="form-control" /></td>
            <td><input v-model="rewindCreate.actualNumberOfTurns" type="text" class="form-control" /></td>
          </tr>
          <tr>
            <th scope="row">Sarılacak</th>
            <td><input v-model="rewindCreate.newVoltage" type="text" class="form-control" /></td>
            <td><input v-model="rewindCreate.newFrequency" type="text" class="form-control" /></td>
            <td>{{calculatedCurrent}}</td>
            <td>{{calculatedTurns}}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="row mt-3">
      <div class="col">
        <p>Tel adedi:</p>
      </div>
      <div class="col">
        <label for>tel çapı</label>
      </div>
      <div class="col">
        <p>Tel kesidi:</p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <input v-model="rewindCreate.actualWire[0].quantity" type="number" step="1" class="form-control" />
      </div>
      <div class="col">
        <input v-model="rewindCreate.actualWire[0].guage" type="number" step="0.05" class="form-control" />
      </div>
      <div class="col">
        <p>{{sectioncalc(rewindCreate.actualWire[0].guage)}} mm</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <input v-model="rewindCreate.actualWire[1].quantity" type="number" step="1" class="form-control" />
      </div>
      <div class="col">
        <input v-model="rewindCreate.actualWire[1].guage" type="number" step="0.05" class="form-control" />
      </div>
      <div class="col">
        <p>{{sectioncalc(rewindCreate.actualWire[1].guage)}} mm</p>
      </div>
    </div>


    <div class="row">
      <div class="col">
        <input v-model="rewindCreate.newWire[0].quantity" type="number" step="1" class="form-control" />
      </div>
      <div class="col">
        <input v-model="rewindCreate.newWire[0].guage" type="number" step="0.05" class="form-control" />
      </div>
      <div class="col">
        <p>{{sectioncalc(rewindCreate.newWire[0].guage)}} mm</p>
      </div>

    </div>
    <div class="row">
      <div class="col">
        <input v-model="rewindCreate.newWire[1].quantity" type="number" step="1" class="form-control" />
      </div>
      <div class="col">
        <input v-model="rewindCreate.newWire[1].guage" type="number" step="0.05" class="form-control" />
      </div>
      <div class="col">
        <p>{{sectioncalc(rewindCreate.newWire[1].guage)}} mm</p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <p>Mevcut toplam kesidi: </p>
      </div>
      <div class="col text-white bg-dark">
        <p>{{totalsectioncalc(0)}}</p>
      </div>
    </div>
    
    <div class="row mt-3">
      <div class="col">
        <p>Yeni gerekli toplam kesidi: </p>
      </div>
      <div class="col text-white bg-info">
        <p >{{newWireSection}}</p>
      </div>
    </div>

    <div class="row mt-3">
      <div class="col">
        <p>Yeni  toplam kesidi: </p>
      </div>
      <div class="col text-white" v-bind:class=" wireSectionValid() ? 'bg-success' : 'bg-danger' ">
        <p >{{totalsectioncalc(1)}}</p>
      </div>
    </div>


      <button @click="newWireCalc()" class="btn btn-primary mt-3">Tahmini tel hesapla</button>
      <div class="card border-success my-3" v-if="result.length>0">
        <div class="card-header">
          <h6>Otomatik hesaplanmış teller</h6>
        </div>
        <div class="card-body">
          <div class="row">
            <div class="col"><b>#</b></div>
            <div class="col"><b>Adet 1</b></div>
            <div class="col"><b>Tel çapı 1</b></div>
            <div class="col"><b>Adet 2</b></div>
            <div class="col"><b>Tel çapı 1</b></div>
            <div class="col"><b>Toplam kesidi</b></div>
            <div class="col"><b>Uyum oranı</b></div>
          </div>
          <div class="row" v-for="(result,index) in result" v-bind:key="index" >
            <div class="col"> <input v-bind="selectedradio" @click="chooseWire(index)" class="form-control-sm" type="radio" name="radio" id="" ></div>
            <div class="col">{{result[0].quantity}}</div>
            <div class="col">{{result[0].guage}}</div>
            <div class="col">{{result.length > 1 ? result[1].quantity : '0'}}</div>
            <div class="col">{{result.length > 1 ? result[1].guage : '0'}}</div>
            <div class="col">{{result.length > 1 ? (result[0].section + result[1].section).toFixed(4) : result[0].section.toFixed(4)}}</div>
            <div class="col">{{result.length > 1 ? result[1].guage : '0'}}</div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
        <div class="card bg-light my-3 text-center">
          <div class="card-body ">
            <button @click="save()" class="btn btn-primary">Kaydet</button>
          </div>
        </div>
        </div>
      </div>

  </div>
</template>

<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: "rewindCreate",
  props: ["rewind"],
  created: function(){
    if (this.rewind != null) {
      this.rewindCreate = this.rewind;
    }
    axios
    .get('http://localhost:5000/product/motors')
    .then(res => {
      this.products = res.data
    })
    .catch(err => console.log(err))
    axios
    .get('http://localhost:5000/company')
    .then(res => {
      this.companies = res.data
    })
    .catch(err => console.log(err))

  },
  data: function() {
    return {
      rewindCreate: {
        company: "",
        product:{motor:{}},
        serialNumber: "",
        materialNumber: "",
        productionDate: "",
        actualWire: [
          {
            quantity: 0,
            guage: 0,
            section: 0
          },
          {
            quantity: 0,
            guage: 0,
            section: 0
          }
        ],
        actualVoltage: 0,
        actualCurrent: 0,
        actualFrequency: 0,
        actualNumberOfTurns: 0,
        actualWireSection: 0,
        newVoltage: 0,
        newCurrent: 0,
        newFrequency: 0,
        newNumberOfTurns: 0,
        newWire: [
          {
            quantity: 0,
            guage: 0,
            section: 0
          },
          {
            quantity: 0,
            guage: 0,
            section: 0
          }
        ],
      },
      wires:[0.5,0.55,0.6,0.65,0.7,0.75,0.8,0.85,0.90,0.95,1,1.05,1.1,1.15,1.2,1.25,1.3,1.35,1.4],
      result: [],
      selectedradio: false,
      products: [],
      companies: [],
    };
  },
  methods:{
    copyMotorValues: function(){
      this.rewindCreate.actualVoltage = this.rewindCreate.product.motor.voltage
      this.rewindCreate.actualFrequency = this.rewindCreate.product.motor.frequency
    },
      chooseWire : function(index){
        if(this.result[index].length > 1){
          this.rewindCreate.newWire = this.result[index].concat();
        }
        else {
          Object.assign(this.rewindCreate.newWire[0],this.result[index][0]);
          Object.assign(this.rewindCreate.newWire[1],{ quantity: 0,guage: 0,section: 0});
        }
      },
      // calculating section of a wire
      sectioncalc: function(diameter){
        if(diameter){
          let x = Math.PI * Math.pow( diameter/2 , 2) ;
          return x.toFixed(3);
        }
        return 0;
          
      },
      // calculating total section of wire combination param [0 actual wire] [1 new wire]
      totalsectioncalc: function(actual){
        let x = 0;
        if(actual==0 && this.rewindCreate.actualWire && this.rewindCreate.newWire ){
          x = this.rewindCreate.actualWire[0].quantity*this.sectioncalc(this.rewindCreate.actualWire[0].guage) + this.rewindCreate.actualWire[1].quantity*this.sectioncalc(this.rewindCreate.actualWire[1].guage)
        }
        else if(actual==1 && this.rewindCreate.actualWire && this.rewindCreate.newWire) {
          x = this.rewindCreate.newWire[0].quantity*this.sectioncalc(this.rewindCreate.newWire[0].guage) + this.rewindCreate.newWire[1].quantity*this.sectioncalc(this.rewindCreate.newWire[1].guage)
        }
        else {
          x= 0
        }
        x =  x.toFixed(4);
        return x;
      },
      wireSectionValid: function(){
        if(Math.abs(this.totalsectioncalc(1) / this.newWireSection -1 ) <= 0.015 ){
          return true
        }
        else{
          return false
        }
        
      },
      newWireCalc: function() {
        let avr,biggertwo,smallertwo,fullarr,quantity;
        let result = Array();
        //calculate average of two used wires
        avr = (Number(this.rewindCreate.actualWire[0].guage) + Number(this.rewindCreate.actualWire[1].guage)) / 2;
        //getting the bigger two wire guages
        biggertwo = this.wires.filter(function(wire) {
          return wire > avr; 
        });
        biggertwo = biggertwo.slice(0,2);
        // getting the smaller two wire guages
        smallertwo = this.wires.filter(function(wire) {
          return wire <= avr; 
        });
        smallertwo = smallertwo.reverse().slice(0,2);
        // merging and sorting both arrays
        fullarr = smallertwo.concat(biggertwo).sort();
        
        // calculate possible wire using only one wire 
        for(let wire of fullarr){

          quantity = Math.ceil(this.newWireSection / this.sectioncalc(wire));

          if(Math.abs(quantity * this.sectioncalc(wire) / this.newWireSection - 1) <= 0.015 ){
            result.push([{'quantity':quantity , 'guage': wire , 'section':quantity * this.sectioncalc(wire)}])
          }
          else if(Math.abs((quantity-1)*this.sectioncalc(wire) / this.newWireSection - 1) <= 0.015){
            result.push([{'quantity':quantity-1 , 'guage': wire , 'section':(quantity-1) * this.sectioncalc(wire)}])
          }
          else if(Math.abs((quantity+1)*this.sectioncalc(wire) / this.newWireSection - 1) <= 0.015){
            result.push([{'quantity':quantity+1 , 'guage': wire , 'section':(quantity+1) * this.sectioncalc(wire)}])
          }
        }
        
        //calculate possible rtwo wire compination 
        let ttlsect,newsectpercent,i,j,k;
        for(i=1; i <= 20; i++ ){
          for (j= 1; j < 20 ; j++) {
            for(k= 0; k < 3 ; k++){
              ttlsect = i * this.sectioncalc(fullarr[k]) + j * this.sectioncalc(fullarr[k+1]);
              newsectpercent = Math.abs(ttlsect / this.newWireSection -1 );
              if (newsectpercent <= 0.015 ) {
                result.push([
                  {'quantity':i , 'guage': fullarr[k] , 'section':i * this.sectioncalc(fullarr[k])},
                  {'quantity':j , 'guage': fullarr[k+1]  , 'section':j * this.sectioncalc(fullarr[k+1])}
                ])
              }
            }
          }
        }
        this.selectedradio= false;
        this.result=result;
      },
      save: function (){
        if(this.rewind != null){
            this.update()
        }
        else{
            this.create()
        }
    },  
    update: function (){
      this.rewindCreate.newNumberOfTurns = this.calculatedTurns
      this.rewindCreate.newCurrent = this.calculatedCurrent
        axios
        .put('http://localhost:5000/rewind',{
          rewind : this.rewindCreate
        })
        .then(res => {
            console.log( res.data);
            this.$router.push({name: 'rewindIndex'})
            })
        .catch(err => console.log('Update() ' + err))
    },
    create: function(){
      this.rewindCreate.newNumberOfTurns = this.calculatedTurns
      this.rewindCreate.newCurrent = this.calculatedCurrent
        axios
        .post('http://localhost:5000/rewind',{
          rewind : this.rewindCreate
        })
        .then(res => {
            console.log( res.data)
            this.$router.push({name: 'rewindIndex'})
            })
        .catch(err => console.log('Create() ' + err))
    },
    
  },
  computed:{
    // calculating the new section for the new rewind data
    newWireSection: function(){
      if(this.rewindCreate.actualVoltage > 0 && this.rewindCreate.newVoltage > 0){
        let x = this.totalsectioncalc(0) * this.rewindCreate.actualVoltage/this.rewindCreate.newVoltage;
      x = x.toFixed(4)
     return x;
      }
      else {
        let x=0
        return x.toFixed(4)
      }
    },
    //Automatic calculation for the new current.
    calculatedCurrent: function(){
      if(this.rewindCreate.actualCurrent > 0 && this.rewindCreate.actualVoltage > 0 && this.rewindCreate.newVoltage > 0 ){
        let x= this.rewindCreate.actualCurrent * this.rewindCreate.actualVoltage / this.rewindCreate.newVoltage
        return x.toFixed(2)
      }
      else
      return 0
    },
    //Automatic calculation for the new number of turns.
    calculatedTurns: function(){
      if(this.rewindCreate.actualNumberOfTurns > 0 && this.rewindCreate.actualVoltage > 0 && this.rewindCreate.newVoltage > 0 ){
        let x= this.rewindCreate.actualNumberOfTurns * this.rewindCreate.newVoltage / this.rewindCreate.actualVoltage
        return Math.ceil(x)
      }
      else
      return 0
    },
  },

};
</script>

<style>
</style>
