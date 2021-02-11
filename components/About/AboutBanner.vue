<template>
    <div class="jumbotron about-banner jumbotron-fluid"
        :style="{'background-image': 'url(' + require('~/assets/About/about-banner.png') + ')'}">
        <div class="heading">
            <h1 class="heading-text">About Us</h1>
            <h3 class=about-under>Expertise – Innovation – Trust</h3>
        </div>
    </div>
</template>

<script>
	export default {
		name: "Banner"
    }
</script>

<style scoped>
.about-banner {
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    height:30em;
}
.heading-text {
    text-align: center;
    color: white;
    font-size: 3.5em;
    font-weight: lighter;
    margin-top:100px;
    margin-bottom:30px;
}
.about-under {
    text-align: center;
    color: white;
    font-size: 2em;
    font-weight: lighter;
    margin-top: 50px;
}
@media only screen and (max-width: 578px) {
    .about-banner {
        padding-top:175px;
        height: 40em
    }
}
</style>
