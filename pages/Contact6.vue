<template>
  <div class="contact-us banner" :style="{'background-image': 'url(' + require('~/assets/Contact/background2.jpg') + ')'}">
      <!--<img class=logo-contact src="~/assets/Contact/contact-logo.png">-->
      <div class="container-fluid" >
          <div class="heading">
              <!--<h1 class="heading-text">Contact Us</h1>-->
              
          </div>
      </div>
      <h1 class="heading-text">Contact Us</h1>
        <div class="form-row">
          <div class="col-md-8 contact-form">
            <Form />
          </div>
          <div class="col-md-4 hours-comp">
            <Hours />
          </div>
        </div>

      <div class=text-center>
        <Icons />
      </div>
      <div class=map>
       <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.713440601911!2d-7.744125423779016!3d52.35748239873028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48433185c4d16005%3A0x2950ecfe38bfee47!2sJED%20Pharma!5e0!3m2!1sen!2sie!4v1617134969518!5m2!1sen!2sie" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>
      </div>
    </div>
</template>

<script>

  export default {

    name: "Contact",
    data() {
      return {
        title: 'Contact Us',
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Market intermediary, professional services and advisory firm supporting local and global clients in the Irish and UK market.'
        }
        ]
      }
	  }
  }
</script>

<style scoped>
.map {
  margin-top: 100px;
}
.contact-us {
  color:white;
  padding-bottom: 43px;
  margin-bottom: -150px;
  text-align: center;
}
.banner{
  background-position:bottom;
  background-repeat: no-repeat;
  background-size: cover;
}
label{
  font-weight: bold;
}
.logo-contact {
  height: 300px;
}
.form-row{
  max-width: 1000px;
  margin:auto;
  padding-top:75px;
}
.submitbtn {
  width:30%;
  color: #f5f5f5;
  min-width:80px;
  text-align: center;
  margin-top:25px;
}
.heading{
    padding-top:150px;
}
.heading-text {
  margin-top: 70px;
  text-align: center;
    font-size: 3.5em;
    font-weight: lighter;
    margin-bottom:50px;
}
.heading-under {
    text-align: center;
    font-size: 2.5em;
    font-weight: lighter;
    margin-top: 70px;
}
.main-part {
  
}

@media only screen and (max-width: 767px) {
  .contact-us {
    background-position: center;
  }
}

</style>
