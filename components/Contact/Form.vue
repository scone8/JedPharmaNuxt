<template>
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
                
                required>
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Email:" label-align="left" label-for="input-3" >
                <b-form-input id="input-3"
                v-model="form.Email"
                type="email"
                
                required>
                </b-form-input>
            </b-form-group>

            <b-form-group id="input-group-4" label="Message:" label-align="left" label-for="input-4" >
                <b-form-textarea id="input-4"
                v-model="form.Message"
                
                rows="7"
                required>
                </b-form-textarea>
            </b-form-group>
            <div class="button text-center">
                <b-button type="submit"  class="submitbtn" variant="primary">SEND</b-button>
            </div>
        </b-form>
  </div>
</template>

<script>

  export default {

    name: "Contact",
    data() {
      return {
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
          this.form
        )
        this.form.Enquiry = '',
        this.form.Name = '',
        this.form.Email = '',
        this.form.Message = '',
        alert('Thank you. We will reply to your message shortly!')
      }
    }
  }
</script>

<style scoped>
label{
  font-weight: bold;
}
.submitbtn {
  width:30%;
  color: #f5f5f5;
  min-width:80px;
  text-align: center;
  margin-top:25px;
}
.contact-form {
  max-width:80%;
  text-align: left;
  margin:auto;
  margin-right:70px;
}
a { color: inherit; } 

@media only screen and (max-width: 767px) {
    .contact-form{
    max-width: 60%;
    margin: auto;
    text-align: center;
  }
  .contact-us {
    background-position: center;
  }
}

</style>
