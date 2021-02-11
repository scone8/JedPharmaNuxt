<template>
	<div class="jumbotron home-banner jumbotron-fluid"
				:style="{'background-image': 'url(' + require('~/assets/Home/'+ info[2]) + ')'}">
		<div class="banner-logo">
			<img class="home-logo" :src="getImageSrc(info[3])" alt="Home JED Pharma logo">
		</div>
		<div class="description">
			<p class="banner-text" :style="{'color': info[4]}">{{info[1]}}</p>
		</div>
	</div>
</template>

<script>
    export default {
      name: "Banner",
      props: ['info'],
      methods: {
        getImageSrc: function(service_src) {
           return require('@/assets/' + service_src);
        }
      },
    }
</script>

<style scoped>
.home-banner {
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
	height: 850px;
	padding-top:200px;
	margin-bottom: -10px;
}

.banner-logo{
	margin:auto;
	text-align: center;
}
.home-logo{
	width:60%;
	max-width:450px;
	height: auto;
}
.description{
	max-width:700px;
	padding-right: 10px;
	padding-left: 10px;
	margin:auto;
	padding-top:40px;
}
.banner-text {
	text-align: center;
	font-weight: lighter;
	font-size: 2.5em;
}
@media only screen and (max-width: 850px) {
	.banner-text {
		font-size:2.5em;
		padding-left: 5%;
		padding-right: 5%;
	}
	.banner-logo{
		margin-top: 100px;
	}
	.home-banner {
		padding-top: 150px;
		padding-bottom: 150px;
		padding-right: 0px;
		padding-left: 0px;
	}
}

@media only screen and (max-width: 578px) {
	.home-banner {
		background-attachment: scroll;
	}
	.banner-text {
		font-size:2em;
		padding-left: 5%;
		padding-right: 5%;
	}
}

</style>
