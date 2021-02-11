<template>
  <div class="contact-us" :style="{'background-image': 'url(' + require('~/assets/Contact/contact14.jpg') + ')'}">
    <h1 class="heading">Contact JED Pharma</h1>
    <div class="form-row main-part">
      <div class="col-md-8 mb-md-0 mb-5">
       <div class="contact-form">
         <b-form @submit="onSubmit" class="form-jed">
           <b-form-group id="input-group-1" label="Type of Enquiry:"  label-align="left" label-for="input-1">
             <b-form-select id="input-1" v-model="form.Enquiry" required>
               <option selected value="">Choose one...</option>
               <option value="Business Enquiry">Business enquiry</option>
               <option value="Investor relations/media query">Investor relations/media query</option>
               <option value="Careers@JED enquiry">Careers@JED enquiry</option>
             </b-form-select>
           </b-form-group>

           <b-form-group id="input-group-2" label="Name:" label-align="left" label-for="input-2" >
             <b-form-input id="input-2"
                v-model="form.Name"
                placeholder="Enter name"
                required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Email:" label-align="left" label-for="input-3" >
              <b-form-input id="input-3"
                v-model="form.Email"
                type="email"
                placeholder="Enter email"
                required>
              </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Message:" label-align="left" label-for="input-4" >
              <b-form-textarea id="input-4"
                v-model="form.Message"
                placeholder="Enter message"
                rows="7"
                required>
              </b-form-textarea>
            </b-form-group>
            <div class="button text-center">
              <b-button type="submit"  class="submitbtn" variant="primary">SEND</b-button>
            </div>
          </b-form>
        </div>
      </div>
      <div class="col-md-4 text-center icons-list">
        <ul class="list-unstyled mb-0 icons">
          <li><i class="fas fa-map-marker-alt fa-2x"></i>
            <div class=add-block>
              <p class=add>Questum Business Centre,</p>
              <p class=add>Ballingarrane South,</p>
              <p class=add>Clonmel,</p>
              <p class=add>Co.Tipperary,</p>
              <p class=add>Ireland,</p>
              <p class=add>E91 V329</p>
            </div>
          </li>
          <li><i class="fas fa-envelope mt-4 fa-2x"></i>
            <p>info@jedpharma.com</p>
          </li>
          <li><i class="fas fa-phone mt-4 fa-2x"></i>
            <p>+353 52 614 6007</p>
          </li>
          <a href="https://ie.linkedin.com/company/jed-pharma" target="_blank" rel="noopener noreferrer">
            <li class="linked"><i class="fab fa-linkedin fa-3x"></i>
                <p>JED Pharma LinkedIn</p>
            </li>
          </a>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from 'axios';

  const querystring = require("querystring");
    axios.defaults.headers.common = {
      "Content-Type": "application/json"
  }

  export default {

    name: "Contact",
    data() {
      return {
        title: 'Contact Us',
        form: {
          Enquiry: '',
          Name: '',
          Email: '',
          Message: '',
          _cc: 'e.townsley@jedpharma.com,d.oriordan@jedpharma.com,l.sullivan@jedpharma.com'
        }
      }
    },
    methods: {
      onSubmit() {
        axios.post("https://formspree.io/mvorrrlo",
          querystring.stringify(this.form)
        )
        this.form.Enquiry = '',
        this.form.Name = '',
        this.form.Email = '',
        this.form.Message = '',
        alert('Thank you. We will reply to your message shortly!')
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
label{
  font-weight: bold;
}
.add {
  margin-bottom:0px
}
.add-block {
  margin-top: 10px;
}
.contact-logo {
  height: 200px;
}
.contact-us {
  color: white;
  padding-bottom: 200px;
  padding-right:10px;
  margin-bottom: -150px;
  padding-top: 150px;
  text-align: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

}
.submitbtn {
  width:30%;
  color: white;
  min-width:80px;
  text-align: center;
  margin-top:25px;
}
.heading {
  text-align: center;
  font-size: 3em;
  font-weight: lighter;
  margin-top:50px;
  margin-bottom:20px;
}
.form-row{
  max-width: 800px;
  margin:auto
}
.contact-form {
  max-width:80%;
  margin:auto;
}
.main-part {
  padding-top:20px;
}
.linked {
  padding-top: 25px
}
a { color: inherit; } 

@media only screen and (max-width: 767px) {
	.contact-form{
    max-width: 60%;
    margin: auto;
  }
  .icons-list {
     max-width: 60%;
    margin: auto;
  }
  .contact-us {
    background-position: center;
  }
}

</style>
