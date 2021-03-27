<template>
  <div>
    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="6000"
      controls
      indicators
      img-width="1024"
      img-height="480"
    >
      <b-carousel-slide v-for="bannerText in BannerInfo" :key="bannerText[0]">
        <template #img>
            <Banner :info="bannerText" />
          </template>
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  import BannerInfo from '@/assets/Home/bannerinfo.js'

  export default {
    name: 'Carousel',
    data() {
      return {
        BannerInfo: BannerInfo,
        slide: 0
      }
    }
  }
</script>