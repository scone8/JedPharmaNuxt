<template>
    <div class="home">
        <Carousel />
        <Services />
        <ContactHome />
    </div>
</template>

<script>
    export default {
    data() {
      return {
        title: 'Home'
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

</style>
