<template>
    <v-card class="" style="margin: 0px auto;" >
        <v-toolbar>
            <headers_Client style="width:100%" :email="email" />
            {{ tabss }}
        </v-toolbar>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab :value="1">Shipment</v-tab>
            <v-tab :value="2">Email</v-tab>
            <v-tab :value="3">Add shipment</v-tab>
            <v-tab :value="4">ALL shipment</v-tab>
        </v-tabs>
        <v-window v-model="tab" >
            <v-window-item :value="1">
                <v-container fluid >
                    <Card />
                </v-container>
            </v-window-item>
            <v-window-item :value="2">
                <v-container fluid>
                    <Email  />
                </v-container>
            </v-window-item>
            <v-window-item :value="3">
                <v-container fluid>
                    <Add_shipment />
                </v-container>
            </v-window-item>
            <v-window-item :value="4">
                <v-container fluid  >
                    <All_shipment />
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>
<script>
import axios from "axios"
import {ref} from 'vue'
import headers_Client from '../components/Client/headers_Client.vue';
import Add_shipment from '../components/Client/Add_shipment.vue'
import Details_Shipment from '../components/Client/Shipment_Details.vue'
import All_shipment from '../components/Client/All_shipment.vue'
import Profile from '../components/Client/Profile.vue'
import Email from '../components/Client/Email/Email.vue'
import Card from '../components/Client/Card-Shipment.vue'
export default {
    props:['tabss'],
    data: () => ({
        tab: null,
    })
    ,
    setup(){
        let email = ref('')
        return{email}
    },
    mounted() {
        this.Home()
    },
    methods: {
        async Home() {
            await axios
                .get("http://localhost:3000/mangeclint/GetDetailsClient", {
                    withCredentials: true
                })
                .then(res => {
                   console.log(res.data);
                   this.email = res.data.email
                })
                .catch(err => {
                    console.log(err);
                });
        },
    },
    components: {
        headers_Client,
        Add_shipment,
        Profile,
        Card,
        All_shipment,
        Details_Shipment,
        Email

    }
}
</script>
<style>
.full-screen {
width: 100%;
height: 100vh;
}

</style>
