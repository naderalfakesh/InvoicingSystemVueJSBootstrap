<template>
  <div>
    <div class="container">
      <!-- purchase header information component -->
      <!-- purchase content component -->
      
      <div class="row justify-content-center">
        <h1>{{purchase.type}}</h1>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="row">
            <div class="col-8">
              <h5>Motor bilgileri:</h5>
              <p>{{purchase.product.summary}} </p>
            </div>
            <div class="col-4">
              <h5>Date:</h5>
              <p>{{purchase.date}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <h5>Firma unvanı:</h5>
              <p>
                {{purchase.company.name}}
              </p>
            </div>
            <div class="col-4">
              <h5>Referans :</h5>
              <p>{{purchase.referance}}</p>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <h5>Firma adresi:</h5>
              <p>
                {{purchase.deliveryAddress}}
              </p>
            </div>
            <div class="col-4">
              <h5>Kontak kişi :</h5>
              <p>{{purchase.contact.name}}</p>
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
            <tr v-for="item in purchase.items" :key="item.id">
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
        <p>Note: <u>{{purchase.note}}</u></p>
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
  name: 'purchaseView',
  props: ['purchase'],
  methods: {
    total: function() {
      let tmp = 0;
      this.purchase.items.forEach(fofo);
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
