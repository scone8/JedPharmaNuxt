<template>
  <div class="card"
      :style="{'background-color': service[4]}">  
    <div class="text-center heading-div">
      <span class=heading>{{service[1]}}</span>
    </div>
    <div class="text-center">
      <i class="fas fa-ellipsis-h"></i>
    </div>
    <div class="service-text text-center" >
      <p>{{service[2]}}</p>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ServiceCard",
    props:['service']
  }
</script>

<style scoped>
.heading{
  font-size: 2em;
  font-weight: lighter;
}
.heading-div {
  padding:5%;
}
.card {
  height: 380px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: #f5f5f5;
  border-radius: 0px;
  border: 0px;
}
.service-text{
  padding:5%;
}
@media only screen and (max-width: 767px) {
	.card {
    height: 325px;
  }
}
</style>
