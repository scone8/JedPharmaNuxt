<template>
  <!-- Footer -->
  <footer
>
  <div class=container>
    <div class=row
      no-gutters
    >
      <div class="col button-row">
        <b-btn
            v-for="link in links"
            :key="link[0]"
          
            variant="dark"
            :to=link[1]
            rounded
            class="my-2"
          >
          {{ link[0] }}
        </b-btn>
      </div>
    </div>
    <hr>
    <div class="row center-row">
      <div class="footer-details col-md-6 col-sm-12">
        <div class="row footer-image">
          <img src="@/assets/logo.png" alt="" class="logo2 img-responsive">
        </div>
        <div class="row footer-email">
          <span class=email-text>info@jedpharma.com</span>
        </div>
        <div class="row footer-wda">
            <span>Wholesale Distribution Authorisation Number: W12685/00001</span>
        </div>
        <div class="row footer-hmpbr">
            <span>Human Medicinal Product Brokers Registration Number: FP-B 12738/00001</span>
        </div>
      </div>
      <div class="col linked list-unstyled mb-0 icons ">
        <a href="https://ie.linkedin.com/company/jed-pharma" target="_blank" rel="noopener noreferrer">
          <li class="bigScreen icon"><i class="fab fa-linkedin fa-3x"></i></li>
          <li class="smallScreen icon"><i class="fab fa-linkedin fa-2x"></i></li>
        </a>
      </div>
    </div>
    <hr>
    <div class=row>
      <div class="col primary lighten-2 py-4 text-center white--text"
        cols="12"
      >
        © {{ new Date().getFullYear() }} Copyright— <strong>JED Pharma</strong>
      </div>
    </div>
  </div>
  </footer>
  <!-- Footer -->
</template>
<script>
export default {
  data () {
    return {
      links: [
        ['Home', '/'],
        ['About Us','/about'],
        ['Contact Us','/contact']
      ]
    }
  }
}
</script>

<style scoped>
.linked {
  color: white;
  font-size:1.35em;
  margin:10px;
  text-decoration: none;
  text-align:right;
  margin-top:40px;
}

.button-row {
  margin-top: 10px;
}
footer {
  background-color: #343a40;
  font-size: 0.8em;
  margin-top:100px
}
.row {
  text-align: center;
}
.email-text{
  font-size: 1.25em;
}
.center-row{
  text-align: center;
}
.footer-email{
  margin-bottom: 15px;
}
.logo2 {
  height:110px;
}
.bigScreen {
  margin-top:30px
}
.icon {
  color:white;
}

@media only screen and (max-width: 767px) {
	.footer-image {
    justify-content: center;
  }
  .footer-email {
    justify-content: center;
  }
  .footer-hmpbr {
    justify-content: center;
  }
  .footer-wda {
    justify-content: center;
  }
  .linked {
    text-align: center;
  }
}
@media only screen and (max-width: 767px) {
  .bigScreen {
    display:none;
  }
  .smallScreen {
    display:block;
  }
}

@media (min-width: 768px) {
  .bigScreen {
    display:block;
  }
  .smallScreen {
    display:none;
  }
}
</style>