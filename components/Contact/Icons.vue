<template>
  <div class="icons">
    <ul class="list-unstyled mb-0 icons">
        <li><i class="fas fa-envelope mt-4 fa-2x"></i>
        <p>info@jedpharma.com</p>
        </li>
        <li><i class="fas fa-phone mt-4 fa-2x"></i>
        <p>+353 52 614 6007</p>
        </li>
        <li class=linked>
        <a href="https://ie.linkedin.com/company/jed-pharma" target="_blank" rel="noopener noreferrer">
            <i class="fab fa-linkedin fa-3x"></i>
                <p>JED Pharma LinkedIn</p>
        </a>
        </li>
    </ul>
  </div>
</template>

<script>

  export default {
    name: "Icons",
  }
</script>

<style scoped>
.icons{
  margin-top: 100px;
}
.add {
  margin-bottom:0px
}
.add-block {
  margin-top: 10px;
}
.logo-contact {
  height: 300px;
}
.linked {
  padding-top: 30px;
}
li {
  display: inline-block;
  margin: 0 40px;
}
a { color: inherit; } 

@media only screen and (max-width: 767px) {
  .icons-list {
     max-width: 60%;
    margin: auto;
  }
  li {
  display: block;
  margin: 0 10px;
}
}

</style>
