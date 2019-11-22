<template>
    <div>
        <div class="card border-primary">
            <div class="card-header text-primary">
                <h5>Motor bilgileri</h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col"><b>Sarım tarihi</b></div>
                    <div class="col"><b>Firma</b></div>
                    <div class="col"><b>Marka</b></div>
                    <div class="col"><b>Ürün kodu</b></div>
                    <div class="col"><b>Seri numarası</b></div>
                    <div class="col"><b>Güç</b></div>
                    <div class="col"><b>kutup sayısı</b></div>
                    <div class="col"><b>Frekans</b></div>
                </div>
                <div class="row">
                    <div class="col">{{rewind.createdAt}}</div>
                    <div class="col">{{rewind.company.name}}</div>
                    <div class="col">{{rewind.product.motor.brand}}</div>
                    <div class="col">{{rewind.product.materialNumber}}</div>
                    <div class="col">{{rewind.product.serialNumber}}</div>
                    <div class="col">{{rewind.product.motor.power}} Kw</div>
                    <div class="col">{{rewind.product.motor.pole}} K</div>
                    <div class="col">{{rewind.product.motor.frequency}} Hz</div>
                </div>
            </div>
        </div>
        <div class="card border-info mt-3">
            <div class="card-header text-info">
               <h5> Sarım bilgileri </h5>
            </div>
            <div class="card-body">
                <div class="row">
                    <div class="col"> </div>
                    <div class="col"><b>Orijinal</b></div>
                    <div class="col"><b>Yeni</b></div>
                    <div class="w-100"></div>
                    <div class="col"><b>Gerilim</b></div>
                    <div class="col">{{rewind.actualVoltage}} V</div>
                    <div class="col">{{rewind.newVoltage}} V</div>
                    <div class="w-100"></div>
                    <div class="col"><b>Frekans</b></div>
                    <div class="col">{{rewind.actualFrequency}} Hz</div>
                    <div class="col">{{rewind.newFrequency}} Hz</div>
                    <div class="w-100"></div>
                    <div class="col"><b>Akım</b></div>
                    <div class="col">{{rewind.actualCurrent}} A</div>
                    <div class="col">{{rewind.newCurrent}} A</div>
                    <div class="w-100"></div>
                    <div class="col"><b>Teller</b></div>
                    <div class="col">{{rewind.actualWire[0].quantity}} x {{rewind.actualWire[0].guage}}mm
                        {{rewind.actualWire.length >1 ? " & "+ rewind.actualWire[1].quantity +" x "+ rewind.actualWire[1].guage+"mm" : "" }}
                    </div>
                    <div class="col">{{rewind.newWire[0].quantity}} x {{rewind.newWire[0].guage}}mm
                        {{rewind.newWire.length >1 ? " & "+rewind.newWire[1].quantity +" x "+ rewind.newWire[1].guage+"mm" : "" }}
                    </div>
                    <div class="w-100"></div>
                    <div class="col"><b>Tür sayısı</b></div>
                    <div class="col">{{rewind.actualNumberOfTurns}}</div>
                    <div class="col">{{rewind.newNumberOfTurns}} </div>
                    <div class="w-100"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "rewindView",
    props: ["rewind"],
    data:function(){
        return {};
    }
}
</script>

<style>

</style>
