<template>
  <div>
    <div class="container">
      <!-- invoice header information component -->
      <!-- invoice content component -->
      
      <div class="row justify-content-center">
        <h1>{{invoice.type}}</h1>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <h5>Motor bilgileri:</h5>
              <p>{{invoice.product.summary}} </p>
            </div>
            <div class="col-4">
              <h5>Date:</h5>
              <p>{{invoice.date}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <h5>Firma unvanı:</h5>
              <p>
                {{invoice.company.name}}
              </p>
            </div>
            <div class="col-4">
              <h5>Referans :</h5>
              <p>{{invoice.referance}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <h5>Firma adresi:</h5>
              <p>
                {{invoice.deliveryAddress}}
              </p>
            </div>
            <div class="col-4">
              <h5>Kontak kişi :</h5>
              <p>{{invoice.contact.name}}</p>
            </div>
          </div>
        </div>
      </div>
      <br>
      <div class="row">
        <table class="table table-sm">
          <thead>
            <tr>
              <th v-for="(itemHeader,index) in itemHeaders" :key="index" scope="col">{{itemHeader}}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in invoice.items" :key="item.id">
              <th scope="row">{{item.id}}</th>
              <td>{{item.materialNumber}}</td>
              <td>{{item.description}}</td>
              <td>{{item.delivery}}</td>
              <td>{{item.unitPrice}}</td>
              <td>{{item.qty}}</td>
              <td>{{item.unitPrice*item.qty}}</td>
            </tr>
            <tr class="table-success">
              <td></td>
              <td></td>
              <td colspan="2">
                <strong>Toplam </strong>
              </td>
              <td colspan="3">
                <strong>
                  <u>{{total()}} Euro + KDV</u>
                </strong>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="row">
        <p>Note: <u>{{invoice.note}}</u></p>
      </div>
      <hr>
      <div class="row">
        <h6>Yetkili :</h6>
        <pre class="text-uppercase"> Nader Alfakesh / Servis müh / nader.alfakesh@dal-group.com</pre>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'invoiceView',
  props: ['invoice'],
  methods: {
    total: function() {
      let tmp = 0;
      this.invoice.items.forEach(fofo);
      function fofo(item) {
        tmp += item.qty * item.unitPrice;
      }
      return tmp;
    }
  },
  data: function() {
    return {
      itemHeaders: [
        "#","Ürün kodu","Açıklama","Termin süresi","Birim fiyatı","Miktar","Tutar",
      ],
      
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
