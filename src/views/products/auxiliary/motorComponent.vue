<template>
    <div class="card border-primary my-3">
        <div class="card-header bg-primary text-white">
            <h5>Motor</h5>
        </div>
        <div class="card-body">
            <div class="row">
                <div class="col"><p>Markası: <strong>{{motor.brand}}</strong></p></div>
                <div class="col"><p>Ürün kodu: <strong>{{materialNumber}}</strong></p></div>
                <div class="col"><p>Seri numarası: <strong>{{serialNumber}}</strong></p></div>
                <div class="col"><p>model: <strong>{{motor.series}}</strong></p></div>
                <div class="w-100"></div>
                <div class="col"><p>Çeçit: <strong>{{motor.type}}</strong></p></div>
                <div class="col"><p>Güç: <strong>{{motor.power}}kW</strong></p></div>
                <div class="col"><p>Kutup sayısı: <strong>{{motor.pole}}K</strong></p></div>
                <div class="col"><p>Gövde: <strong>{{motor.frame}}</strong></p></div>
                <div class="w-100"></div>
                <div class="col"><p>Gerilim: <strong>{{motor.voltage}}V</strong></p></div>
                <div class="col"><p>Frekans: <strong>{{motor.frequency}}Hz</strong></p></div>
                <div class="col"><p>Hız: <strong>{{motor.speed}}</strong></p></div>
                <div class="col"><p>Verimlik sınıfı: <strong>{{motor.efficiency}}</strong></p></div>
                <div class="w-100"></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "motorComponent",
    data: function(){
        return {
            id: 1,
            type: "motor",
            materialNumber: "1234567890",
            serialNumber: "0011223344",
            motor: {
                brand: "WEG", 
                series: "W22", 
                type: "Standard", 
                power: 55,
                speed: 1000,
                voltage: 400,
                frequency: 84,
                efficiency: "IE2",
                frame: 225,
                pole:   6,
            }
        };
    }
}
</script>

<style>

</style>
