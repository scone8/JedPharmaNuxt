<template>
	<div class=member-card v-b-modal.modal-center='member.id'>
		<img class="member-picture img-responsive" :src="require('@/assets/About/TeamPictures/' + member.portrait)">
		<header class=head>
			<div class=row>
				<div class=col-10>
					<h5>{{member.fullname}}</h5>
					<span class=role>{{member.role}}</span>
				</div>
				<div v-if="member.linkedIn" class="col-2 list-unstyled mb-0 icons linkedin">
					<a :href="member.linkedIn" target="_blank" rel="noopener noreferrer">
						<li class="linked"><i class="fab fa-linkedin-in fa-x"></i></li>
					</a>
				</div>
			</div>
		</header>
		<b-modal :id="member.id" 
				content-class="info-box"
				centered
				size="xl"
				scrollable 
				hide-footer
				:title=member.role
				hide-title>
			<div class=row>
				<div class="col-lg-4 col-sm-12">
					<div class=member-picture-modal-div>
						<img class="member-picture-modal img-responsive" :src="require('@/assets/About/TeamPictures/' + member.portrait)">
					</div>
				</div>
				<div class="summary col-lg-8 col-sm-12">
					<h4 class=name>{{member.fullname}}</h4>
					<div class=email v-if="member.email">
						<span class=email-text>{{member.email}}</span>
					</div>
					<div class=member-summary>
						<p>{{member.description}}</p>
					</div>
					<div v-if="member.linkedIn" class="col-1 list-unstyled mb-0 icons modal-linkedin-div">
						<a :href="member.linkedIn" target="_blank" rel="noopener noreferrer">
							<li class="modal-linkedin-icon"><i class="fab fa-linkedin-in fa-x"></i></li>
						</a>
					</div>
				</div>
			</div>
		</b-modal>	
	</div>
</template>

<script>
	export default {
		name: "Member",
		props: ['member'],
		data() {
			return{
				isShowing: false
			}
		},
		methods: {
			showSummary() {
				this.isShowing = !this.isShowing;
			}
		}
	}
</script>

<style scoped>
.member {
	margin-bottom:40px;
}
.member-picture {
	width:100%;
	height: auto;
	margin-bottom:10px;
}
a {
  color: inherit;
  text-decoration: none;
}
.head {
	background-color: #343a40;
	color: white;
	padding:10px;
	margin-top:-10px;
}
.linked {
	margin-top: 15px;
	float: right;
}
.member-card {
	margin-bottom:20px
}
/deep/ .role {
	opacity: 0.7;
	font-size: 0.9em;
}
/deep/.info-box {
	border-radius: 0;
}
.name {
	font-weight: bold;
}
.member-picture-modal-div{
	text-align: center
}
.member-picture-modal {
	width:90%;
	height: auto;
	margin-bottom:10px;
}
.email {
	margin-top:10px;
	padding-bottom: 10px;
}
.email-text {
	font-size: 1.1em;
}
.summary {
	margin-top:10px;
}
.env {
	margin-right: 5px;
}
.member-card:focus {
	outline:0;
}
.modal-linkedin-icon {
	margin-left:-15px;
}
/deep/ .modal-backdrop
{
    opacity:0.6 !important;
}
@media (min-width:992px) and (max-width: 1117px) {
	.role{
		font-size: 0.77em;
	}
}
@media (min-width:992px) and (max-width: 1117px) {
	.role{
		font-size: 0.77em;
	}
}
@media only screen and (max-width: 992px) {
	.summary {
		margin-left: 20px;
		padding-right: 45px;
	}
}
</style>