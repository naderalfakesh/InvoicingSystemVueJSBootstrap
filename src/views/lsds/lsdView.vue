<template>
    <div>
        <div class="card border-success my-3">
            <div class="card-header text-success">
                <h5>Sipariş bilgileri</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col"><p>Müşteri: <strong>{{lsd.company.name}}</strong></p></div>
                    <div class="col"><p>model: <strong>{{lsd.model}}</strong></p></div>
                    <div class="col"><p>Sipariş tarihi: <strong>{{lsd.orderDate}}</strong></p></div>
                    <div class="col"><p>Statüs: <strong>{{lsd.status}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>İstenilen teslim tarihi: <strong>{{lsd.wantedDeliveryDate}}</strong></p></div>
                    <div class="col"><p>Gerçek teslim tarihi: <strong>{{lsd.deliveryDate}}</strong></p></div>
                    <div class="col"><p>Satış fiyatı: <strong>{{lsd.salesPrice}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Ticari koşulları: <strong>{{lsd.commercialConditions}}</strong></p></div>
                </div>
            </div>
        </div>

        <div class="card border-primary my-3">
            <div class="card-header text-primary">
                <h5>Ana motor bilgileri</h5>
            </div>
            <div class="card-body">
                <div class="row ">
                    <div class="col"><p>Marka: <strong>{{lsd.motorInfo.brand}}</strong></p></div>
                    <div class="col"><p>Güç: <strong>{{lsd.motorInfo.power}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Kutup sayısı: <strong>{{lsd.motorInfo.poles}}</strong></p></div>
                    <div class="col"><p>Fırça kaldırma opsyonu: <strong>{{lsd.motorInfo.burshLifitng}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Gerilim stator: <strong>{{lsd.motorInfo.statorVoltage}}</strong></p></div>
                    <div class="col"><p>Akım stator: <strong>{{lsd.motorInfo.statorCurrent}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Gerilim rotor: <strong>{{lsd.motorInfo.rotorVoltage}}</strong></p></div>
                    <div class="col"><p>Akım rotor <strong>{{lsd.motorInfo.rotorCurrent}}</strong></p></div>
                </div>
            </div>
        </div>

        <div class="card border-info my-3">
            <div class="card-header text-info">
                <h5>Sulu yol verici bilgileri</h5>
            </div>
            <div class="card-body">
                <div class="row ">
                    <div class="col"><p>Model: <strong>{{lsd.model}}</strong></p></div>
                    <div class="col"><p>Seri numarası: <strong>{{lsd.lsdInfo.serialNumber}}</strong></p></div>
                    <div class="col"><p>Ürün kodu: <strong>{{lsd.lsdInfo.productionDate}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Elektrod motoru: <strong>{{lsd.lsdInfo.motor}}</strong></p></div>
                    <div class="col"><p>Sürücü: <strong>{{lsd.lsdInfo.vfd}}</strong></p></div>
                    <div class="col"><p>Redüktör: <strong>{{lsd.lsdInfo.gearbox}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Kontaktor: <strong>{{lsd.lsdInfo.contactor}}</strong></p></div>
                </div>
            </div>
        </div>

        <div class="card border-warning my-3">
            <div class="card-header text-warning">
                <h5>Test bilgileri</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col"><p>Test yetkilisi: <strong>{{lsd.testInfo.tester}}</strong></p></div>
                    <div class="col"><p>Test tarihi: <strong>{{lsd.testInfo.testDate}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Test sonucu: <strong>{{lsd.testInfo.testResult}}</strong></p></div>
                </div>
            </div>
        </div>

        <div class="card border-dark my-3">
            <div class="card-header text-dark">
                <h5>Devreye alma bilgileri</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col"><p>Devreya alan: <strong>{{lsd.commissioningInfo.commissioner}}</strong></p></div>
                    <div class="col"><p>Devrey alma tarihi: <strong>{{lsd.commissioningInfo.commissionDate}}</strong></p></div>
                    <div class="col"><p>İletkenlik: <strong>{{lsd.commissioningInfo.conductivity}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Son kullanıcı: <strong>{{lsd.commissioningInfo.enduser}}</strong></p></div>
                    <div class="col"><p>Adres: <strong>{{lsd.commissioningInfo.address}}</strong></p></div>
                    <div class="w-100"></div>
                    <div class="col"><p>Notlar: <strong>{{lsd.commissioningInfo.notes}}</strong></p></div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    name: "lsdView",
    props: ["lsd"],
    data: function(){
       return {};
    }
}
</script>

<style>

</style>
