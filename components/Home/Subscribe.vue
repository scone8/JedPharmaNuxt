<template>
    <v-parallax src="https://cdn.vuetifyjs.com/images/parallax/material.jpg" height=300>
        <v-row>
            <v-col>
                <b-form-input class=input v-model="email"></b-form-input>
                <b-button type="submit"  class="submitbtn" variant="primary">SEND</b-button>
            </v-col>
        </v-row>
    </v-parallax>
</template>

<script>
export default {
    name: 'Subscribe',
    methods: {
        onSubmit (email){
            alert("Email saved " + email);
        }
    }
}
</script>

<style scoped>
.input{
    width: 400px;
}
.submitbtn{
    float:right
}
.subscribe-form{
    display: block;
}
.subscribe-form {
    height: 300px;
    background-color: white;
    background-size: cover;
    background-attachment: fixed;
}
</style>