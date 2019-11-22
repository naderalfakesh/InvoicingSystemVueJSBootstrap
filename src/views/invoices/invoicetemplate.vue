<template>
  <div class="container py-3 d-flex flex-row">
    <!-- left bar WEG logos component -->
    <left-bar></left-bar>
    <div>
      <!-- Dal Elektrik  header logo and address -->
      <logo-head></logo-head>
      <hr />
      <invoice-index></invoice-index>
      <!-- Invoice view -->
      <invoice-view :invoiceHeadInfo="invoiceHeadInfo" :itemHeaders="itemHeaders" :items="items"></invoice-view>
      <invoice-create :invoiceHeadInfo="{}" :itemHeaders="itemHeaders" :items="[]"></invoice-create>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import leftBar from "./leftbar";
import logoHead from "./logohead";
import invoiceView from "./invoiceView";
import invoiceCreate from "./invoiceCreate";
import invoiceIndex from "./invoiceIndex";

export default {
  components: {
    leftBar,
    logoHead,
    invoiceView,
    invoiceCreate,
    invoiceIndex
  },
  data: function() {
    return {
      invoiceHeadInfo:{
        type: "Ticari Fatura",
        motorInfo: "250kw 315SM-04 84hz 1029055831",
        date: "27/05/2019",
        referance: "DAL20190101",
        note: "Fatura muhasebe tarafından kesilecektir",
        company: {
          name: "DALGAKIRAN MAKİNE SANAYİ VE TİCARET ANONİM ŞİRKETİ.",
          address:"Eyüp Sultan Mahallesi, Eyüpsultan Mah. Müminler Cad. No:70 SANCAKTEPE, 34885 			   SANCAKTEPE/Sancaktepe/İstanbu",
          contact: "Fatih kömürcü"
        }
      },
      itemHeaders: [
        "#","Ürün kodu","Açıklama","Termin süresi","Birim fiyatı","Miktar","Tutar",
      ],
      items: [
        {
          id: 1,
          materialNumber: "1029055831",
          description: "250kw 1029055831 motor bakımı ve rulman değişimi",
          delivery: "4 ay",
          unitPrice: 448,
          qty: 1
        },
        {
          id: 2,
          materialNumber: "bilrsiz",
          description: "Sarım bedeli",
          delivery: "4 ay",
          unitPrice: 617,
          qty: 1
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>
