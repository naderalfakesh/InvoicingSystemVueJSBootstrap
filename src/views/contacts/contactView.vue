<template>
  <div class="container">
    <div class="row justify-content-center">
      <h1>Kontak bilgileri</h1>
    </div>
    <div class="card">
      <div class="card-body">
        <div class="row">
          <hr />
          <div class="col-8">
            <h5>Firma:</h5>
            <p>
              {{contact.company.name}}
            </p>
          </div>
          <div class="col-4">
            <h5>İsim:</h5>
            <p>
              {{contact.name}}
            </p>
          </div>
        </div>
        <div class="row">
          <hr />
          <div class="col-8">
            <h5>Email:</h5>
            <p>
              {{contact.email}}
            </p>
          </div>
          <div class="col-4">
            <h5>Telefone:</h5>
            <p>
             {{contact.phone}}
            </p>
          </div>
        </div>
      </div>
    </div>

    <br />
    
    <hr />
  </div>
</template>

<script>
export default {
    props: ['contact'],
    data: function () {
      return {
        
      }
    },
    methods:{
        
    },
    

}
</script>

<style scoped>
textarea,
input {
  color: green;
}
</style>
