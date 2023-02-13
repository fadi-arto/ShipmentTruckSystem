<template>
    <v-card class="full-screen" style="overflow: auto;" >
        <v-toolbar>
            <headers_Client style="width:100%" @customEvent="handleEvent" />
            {{ tabss }}
        </v-toolbar>
        <v-tabs v-model="tab" color="deep-purple-accent-4" align-tabs="center">
            <v-tab :value="1">Shipment</v-tab>
            <v-tab :value="2">Email</v-tab>
            <v-tab :value="3">Add shipment</v-tab>
            <v-tab :value="4">Add ALL shipment</v-tab>
            <v-tab :value="5">Details Shipment</v-tab>
        </v-tabs>
        <v-window v-model="tab" >
            <v-window-item :value="1">
                <v-container fluid >
                    <Card />
                </v-container>
            </v-window-item>
            <v-window-item :value="2">
                <v-container fluid>
                    <Profile  />
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
            <v-window-item :value="5" style="height: 85vh;overflow: auto;">
                <v-container fluid  style="height: 100%;">
                    <Details_Shipment />
                </v-container>
            </v-window-item>
        </v-window>
    </v-card>
</template>
<script>
import headers_Client from '../components/Client/headers_Client.vue';
import Add_shipment from '../components/Client/Add_shipment.vue'
import Details_Shipment from '../components/Client/Shipment_Details.vue'
import All_shipment from '../components/Client/All_shipment.vue'
import Profile from '../components/Client/Profile.vue'
import Card from '../components/Client/Card-Shipment.vue'
export default {
    props:['tabss'],
    data: () => ({
        tab: null,
    })
    ,
    methods: {
        methods: {
            handleEvent(data) {
                console.log(smfldj);
                console.log(data)
            }
        }
    },
    components: {
        headers_Client,
        Add_shipment,
        Profile,
        Card,
        All_shipment,
        Details_Shipment

    }
}
</script>
<style>
.full-screen {
width: 100%;
height: 100vh;
}

</style>
