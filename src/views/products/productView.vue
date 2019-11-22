<template>
    <div>
        <div class="card">
            <div class="card-body">
                <div class="row" >
                    <div class="col">
                        <h5>Ürün tipi:</h5>
                        <p>{{product.type}}</p>
                    </div>
                    <div class="col">
                        <h5>Ürün Kodu:</h5>
                        <p>{{product.materialNumber}}</p>
                    </div>
                </div>
                <div class="row" >
                    <div class="col">
                        <h5>Seri numarası:</h5>
                        <p>{{product.serialNumber}}</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            <div class="card-body">
                <div class="row" >
                    <div class="col">
                        <h3 class="text-center">Özellikler</h3>
                        <ul>
                            <li v-for="(value,index) in detailedAttributes()" v-bind:key="index">
                                <p><b>{{titles[index]}} : </b>{{value[1]}}</p>
                            </li>
                        </ul>
                       
                    </div>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "productView",
    props: ["product"],
    data: function(){
        return {  
            motorTitles: ["Marka","Seri","Biçim","Güç","Hız","Gerilim","Frekans","Verimlik","Gövde","Kutup sayısı"],  
            vfdTitles: ["Marka","Seri","Biçim","Güç","Akım","Gerilim","Gövde"],  
            lsdTitles: ["Marka","Seri","İmalat tarihi","Motor gücü","Rotor akımı","Rotor gerilimi"],
            titles: [],  
        };
    },
    methods:{
        detailedAttributes: function(){
            let attr;
            if (this.product.type == "motor"){
                attr= Object.entries(this.product.motor);
                this.titles = this.motorTitles
            }
            else if (this.product.type == "vfd"){
                attr= Object.entries(this.product.vfd);
                this.titles = this.vfdTitles
            }
            else if (this.product.type == "lsd"){
                attr= Object.entries(this.product.lsd);
                this.titles= this.lsdTitles
            }
            // return Object.entries(this.product.attributes);
            return attr
        }

    }

}
</script>

<style>

</style>
