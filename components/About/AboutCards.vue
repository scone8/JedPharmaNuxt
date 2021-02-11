<template>
    <div class="about-cards">
        <div class="card-heading">
            <h3 class=about-card-heading>{{aboutinfo[0]}}</h3>
        </div>
        <hr>
        <div class="card-text">
            <p>{{aboutinfo[1]}}</p>
        </div>
    </div>
</template>

<script>
	export default {
		name: "AboutCards",
		props: ['aboutinfo']
    }
</script>

<style scoped>
.about-cards {
  padding:20px;
  margin-top:20px;
}
.about-card-heading{
    font-weight: lighter;
}
</style>
