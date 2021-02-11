<template>
	<div>
		<h1 class=team-heading>Our Team</h1>
		<hr>
		<div class="team-row">
			<div class="row">
				<div v-for="member in TeamMembers" v-bind:key="member[0]" class="col-md-6 col-lg-4 col-sm-12">
					<MemberTemp :member="member" />
				</div>
            </div>
		</div>
    </div>
</template>

<script>
	import TeamMembers from '@/assets/About/TeamMembers.js'

	export default {
		name: "OurTeam",
		data: function() {
			return {
				TeamMembers: TeamMembers
			}
		}
	}
</script>

<style scoped>
.team-row{
	margin-top:30px;
}
.team-heading {
	font-weight: lighter;
}
</style>
