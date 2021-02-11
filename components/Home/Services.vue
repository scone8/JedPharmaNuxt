<template>
  <div class="services">
    <p class="service-heading">Our Services</p>
    <div class=text>
      <span class=description>We are a pharmaceutical market intermediary, professional services and advisory firm supporting local and global clients in the Irish and UK market.</span>
    </div>
    <div class=background >
      <div class="service-card row">
          <div class="col-md-4 col-sm-12 padding-0" v-for="service in ServicesDetails" v-bind:key="service[1]">
            <ServiceCard :service="service" />
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  import ServicesDetail from '@/assets/ServicesDetails.js'

  export default {
    name: "Service",
    data: function(){
      return {
        ServicesDetails: ServicesDetail
      }
    }
  }
</script>

<style scoped>
.service-card{
  margin-top: 150px;
  margin-right:0px
}
.about-banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.text {
  font-size: 1.5em;
  text-align: center;
  max-width: 60%;
  margin:auto;
  margin-top: 45px;
}
.service-heading {
  text-align: center;
  font-size: 3em;
  margin-top: 150px;
  font-weight: lighter;
}
.padding-0{
   padding:0;
}
@media only screen and (max-width: 767px) {
	.service-card {
    margin: 0;
    margin-top:100px;
  }
  .text {
    font-size: 1.25em;
    text-align: center;
    max-width: 80%;
    margin:auto;
    margin-top: 45px;
  }
  .service-heading {
    text-align: center;
    font-size: 2.75em;
    margin-top:90px;
  }
}

</style>
