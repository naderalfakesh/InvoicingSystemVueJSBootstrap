<template>
    <div>
        <div class="card" >
            <div class="card-body">
                <div class="row">
                    <div class="col" >
                        <h5>İsim : </h5>
                        <p>{{company.name}}</p>
                    </div>
                    <div class="col" >
                        <h5>Tip:</h5>
                        <p>{{company.type}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <h5>Website : </h5>
                        <p>{{company.website}}</p>
                    </div>
                    <div class="col" >
                        <h5>Email:</h5>
                        <p>{{company.email}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <h5>Telefon : </h5>
                        <p>{{company.phone}}</p>
                    </div>
                    <div class="col" >
                        <h5>Fax:</h5>
                        <p>{{company.fax}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <h5>Vergi daires:</h5>
                        <p>{{company.taxAdmin}}</p>
                    </div>
                    <div class="col" >
                        <h5>Vergi numaras: </h5>
                        <p>{{company.taxNumber}}</p>
                    </div>
                </div>
                <div class="row">
                    <div class="col" >
                        <div v-for="(address,i) in company.addresses" v-bind:key="i">
                            <h5>Adres {{i+1}} : {{address.main ? 'varsayılan' : null}}</h5>
                            <p>{{address.address}}</p>
                        </div>

                    </div>
                </div>
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'companyView',
    props: ['company'],
    data: function(){
        return {

        };
    }
}
</script>

<style>

</style>
