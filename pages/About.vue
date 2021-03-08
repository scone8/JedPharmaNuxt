<template>
	<div class="about-page">
		<AboutBanner />
		<div class="about-info container-fluid">
			<div class="row">
				<div class="col-sm-12 col-md-6 column">
					<AboutCards :aboutinfo="AboutDetails[0]" />
				</div>
				<div class="col-sm-12 col-md-6 column">
					<AboutCards :aboutinfo="AboutDetails[1]" />
				</div>
			</div>
			<div class="row">
				<div class="col-sm-12 col-md-6 column">
					<AboutCards :aboutinfo="AboutDetails[2]" />
				</div>
				<div class="col-sm-12 col-md-6 column">
					<AboutCards :aboutinfo="AboutDetails[3]" />
				</div>
			</div>
		</div>
		<div class="our-team container-fluid">
			<OurTeam />
		</div>
	</div>
</template>

<script>
	import AboutDetail from '@/assets/About/AboutDetails.js'

  export default {
      name: "About",
      data: function() {
          return {
              AboutDetails: AboutDetail,
			  title: 'About Us'
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
.about-info {
	margin-top:80px;
	width:80%;
	max-width:1000px;
}
.our-team {
	width:80%;
	margin-top:100px;
}
.column{
  -webkit-box-shadow: 0 8px 2px -6px black;
  border-radius: 30px;
  margin-bottom:20px;
}
</style>
