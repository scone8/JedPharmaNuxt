<template>
    <div class="hours">
        <div class=heading>
            <span class=heading-texts>Opening Hours</span>
        </div>
        <div class=main>
            <p><span class=day>Monday: </span><span class=opening>9am - 4.30pm</span></p>
            <p><span class=day>Tuesday: </span><span class=opening>9am - 4.30pm</span></p>
            <p><span class=day>Wednesday: </span><span class=opening>9am - 4.30pm</span></p>
            <p><span class=day>Thursday: </span><span class=opening>9am - 4.30pm</span></p>
            <p><span class=day>Friday: </span><span class=opening>9am - 4.30pm</span></p>
        </div>
        <div class=extra>
            <span class=heading-texts>Our Address</span>
        </div>
        <div class=add-block>
            <p class=add>Questum Business Centre,</p>
            <p class=add>Ballingarrane South,</p>
            <p class=add>Clonmel,</p>
            <p class=add>Co.Tipperary,</p>
            <p class=add>Ireland,</p>
            <p class=add>E91 V329</p>
        </div>
  </div>
</template>

<script>

  export default {
    name: "Hours",
  }
</script>

<style scoped>
.extra {
    margin-top:40px;
}
.add {
  margin-bottom:0px
}
.add-block {
  margin-top: 10px;
}
.hours { 
 text-align: left;
  margin-left: 20px;
}
.heading-texts{
    font-size: 1.75em;
    font-weight: lighter;
}
.main{
    margin-top:20px;
}


@media only screen and (max-width: 767px) {
   .hours{
        text-align: center;
        margin-left: 0px;
        margin-top:70px;
    }
}

</style>
