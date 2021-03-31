<template>
  <div class="page">
    <nav class="navbar navbar-expand-sm py-0 navbar-dark"
          :style="{'margin-top': margin}"
          :class="{ 'fixed-top': isTransparent, 'sticky-top': isSticky, 'bg-dark': isDark }">
      <div class="container-fluid">
        <nuxt-link class="navbar-brand" data-toggle="collapse" to="/">
              <img src="@/assets/logo.png" alt="" class="logo img-responsive">
            </nuxt-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarResponsive" data-toggle="collapse" data-target=".navbar-collapse">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <nuxt-link class="nav-link" data-toggle="collapse" to="/" active-class="active" exact>Home
                    <span class="sr-only">(current)</span>
                  </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" data-toggle="collapse" to="/about" active-class="active">About Us</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" data-toggle="collapse" to="/contact2" active-class="active">Contact Us</nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link class="nav-link" data-toggle="collapse" to="/contact6" active-class="active">Contact 2</nuxt-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    <nuxt />
    
    <vue-cookie-accept-decline
        :ref="'cookePanel'"
        :elementId="'cookePanel'"
        :debug="false"
        :position="'bottom-right'"
        :type="'floating'"
        :disableDecline="true"
        :transitionName="'slideFromBottom'"
        :showPostponeButton="false">
        <div slot="message">
            We use cookies to ensure you get the best experience on our website and see where to improve.
        </div>
    
        <div slot="acceptContent" class=got-it>
            GOT IT!
        </div>
    </vue-cookie-accept-decline>

    <Footer />
  </div>
</template>
<script>

export default {
  created () {
    if(process.browser){
      window.addEventListener('scroll', this.handleScroll);
      this.controlNavbar(this.$route.path)
    }
  },
  beforeUpdate () {
    if (process.browser) {
      window.addEventListener('scroll', this.handleScroll)
    }
  },
  destroyed () {
    if(process.browser){
      window.removeEventListener('scroll', this.handleScroll);
    }
  },
  methods: {
    handleScroll () {
      /*if (this.$route.path == '/contact') {
        this.isTransparent = false
        this.isSticky = true
        this.isDark = true
        this.margin = '-100px'
      }
      else*/ if(window.scrollY > 100){
        this.isTransparent = false
        this.isSticky = true
        this.isDark = true
        this.margin = '-100px'
      }
      else {
        this.isTransparent = true
        this.isSticky = false
        this.isDark = false
        this.margin = '0'
      }
    },
    controlNavbar (path) {
      if (path === '' && window.scrollY > 200) {
        this.isTransparent = false
        this.isSticky = true
        this.isDark = true
        this.margin = '100px'
        window.addEventListener('scroll', this.handleScroll);
      }
      /*else if (path === '/contact') {
        this.isTransparent = false
        this.isSticky = true
        this.isDark = true
        this.margin = '-100px'
        window.removeEventListener('scroll', this.handleScroll);
      }*/
      else if (path === '/about' && window.scrollY > 200) {
        this.isTransparent = false
        this.isSticky = true
        this.isDark = true
        this.margin = '100px'
        window.addEventListener('scroll', this.handleScroll);
      } 
      else {
        this.isTransparent = true
        this.isSticky = false
        this.isDark = false
        this.margin = '0px'
        window.addEventListener('scroll', this.handleScroll);
      }
    }
  },
  watch: {
    '$route' () {
      this.controlNavbar(this.$route.path)
    }
  },
  data () {
    return {
      margin:'',
      isTransparent: true,
      isSticky: false,
      isDark: false
    }
  }

}
//#f5f5f5
</script>


<style>
body {
  background-color: #f5f5f5;
  color:#343a40;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  height: 100%;
}
.logo{
  height: 80px;
}
footer {
  background-color: #343a40;
  font-size: 12px;
  color: white;
  bottom: 0;
  width: 100%;
}
.fade-enter-active,
.fade-leave-active {
  transition-duration: 0.1s;
  transition-property: opacity;
  transition-timing-function: ease;
}

.fade-enter,
.fade-leave-active {
  opacity: 0
}
</style>