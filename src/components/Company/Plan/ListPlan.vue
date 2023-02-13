<template>
    <div>
        <div class="bd bgc-white">
            <div class="layers">
                <div class="layer w-100 p-20">
                    <h6 class="lh-1">Plan Report</h6>
                </div>
                <div class="layer w-100">
                    <div class="c-white p-20" style="background:#02adf0">

                    </div>
                    <div class="table-responsive p-20">
                        <table class="table">
                            <thead style="font-size:15px">
                                <tr>

                                    <th class="bdwT-0">Company</th>
                                    <th class="bdwT-0">Vechile plate</th>
                                    <th class="bdwT-0">Destination City</th>
                                    <th class="bdwT-0">Destination</th>
                                    <th class="bdwT-0">Source Location</th>
                                    <th class="bdwT-0">Start_time</th>
                                    <th class="bdwT-0"> Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="items in item" :key="items.id">
                                    <td class="fw-600">{{ items.Company }}</td>
                                    <td><span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">{{
                                        items.CaR
                                    }}</span>
                                    </td>
                                    <td><span class="fw-600">{{ items.distination_City }}</span></td>
                                    <td><span class="fw-600" v-for="itemes in items.distination_location"
                                            :key="itemes">{{ itemes }}-</span></td>
                                    <td><span class="fw-600">{{ items.source_location[0] }}</span></td>
                                    <td><span class="text-primary">{{ items.start_time[0] }}</span></td>
                                    <td>
                                        <v-row justify="space-around">
                                            <v-col cols="auto">
                                                <v-dialog transition="dialog-bottom-transition">
                                                    <template v-slot:activator="{ props }">
                                                        <v-btn style="background:#02adf0; color:black" v-bind="props"
                                                            @click="Add_shipment(items.distination_City)">Shipment</v-btn>
                                                    </template>
                                                    <template v-slot:default="{ isActive }">
                                                        <v-card>
                                                            <v-toolbar color="primary"
                                                                title="Opening from the bottom"></v-toolbar>
                                                            <v-card-text>
                                                                <main>
                                                                    <table class="table table-hover">
                                                                        <thead>
                                                                            <tr>
                                                                                <th>#</th>
                                                                                <th>Location</th>
                                                                                <th>Services</th>
                                                                                <th>Weight</th>
                                                                                <th>priority</th>
                                                                                <th>status</th>
                                                                                <th>ADD</th>
                                                                                <th>Status</th>
                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr v-for="shipments in shipment"
                                                                                :key="shipments.id">
                                                                                <td>{{ shipments.DistinationCity }}</td>
                                                                                <td>{{ shipments.DistinationLocation }}
                                                                                </td>

                                                                                <td> <span
                                                                                        v-for="Servicess in shipments.Services"
                                                                                        :key="Servicess">{{
                                                                                            Servicess
                                                                                        }} - </span></td>
                                                                                <td>{{ shipments.Weight }}</td>
                                                                                <td> {{ shipments.Status }}</td>
                                                                                <td>{{ shipments.priority }}</td>
                                                                                <td><span
                                                                                        class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">{{
                                                                                            shipments.state
                                                                                        }}</span></td>
                                                                                <td>
                                                                                    <v-row justify="space-around">
                                                                                        <v-col cols="auto">
                                                                                            <v-dialog
                                                                                                transition="dialog-bottom-transition">
                                                                                                <template
                                                                                                    v-slot:activator="{ props }">
                                                                                                    <v-btn
                                                                                                        color="primary"
                                                                                                        v-bind="props">ADD</v-btn>
                                                                                                </template>
                                                                                                <template
                                                                                                    v-slot:default="{ isActive }">
                                                                                                    <v-card>
                                                                                                        <v-toolbar
                                                                                                            color="primary"
                                                                                                            title="Are you sure"></v-toolbar>
                                                                                                        <v-card-text>
                                                                                                            <main>

                                                                                                                <div
                                                                                                                    class="bgc-white p-20 bd">
                                                                                                                    <h3
                                                                                                                        class="c-grey-90A0">
                                                                                                                        Add
                                                                                                                        To
                                                                                                                        Plan
                                                                                                                    </h3>

                                                                                                                </div>

                                                                                                            </main>
                                                                                                        </v-card-text>
                                                                                                        <v-card-actions
                                                                                                            class="justify-end">
                                                                                                            <div
                                                                                                                @click="check(shipments, items)">
                                                                                                                <v-btn
                                                                                                                    variant="text"
                                                                                                                    @click="isActive.value = false">ADD
                                                                                                                    Shipment</v-btn>
                                                                                                            </div>
                                                                                                        </v-card-actions>
                                                                                                    </v-card>
                                                                                                </template>
                                                                                            </v-dialog>
                                                                                        </v-col>
                                                                                    </v-row>
                                                                                </td>
                                                                            </tr>

                                                                        </tbody>
                                                                    </table>

                                                                </main>
                                                            </v-card-text>
                                                            <v-card-actions class="justify-end">
                                                                <v-btn variant="text"
                                                                    @click="isActive.value = false">ADD Vechile</v-btn>
                                                            </v-card-actions>
                                                        </v-card>
                                                    </template>
                                                </v-dialog>
                                            </v-col>
                                        </v-row>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <div class="ta-c bdT w-100 p-20"><a href="#">Check all the sales</a></div>
        </div>

    </div>
</template>
  
<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
    data() {
        return {

        }
    },
    setup() {
        return {

            item: ref([]),
            shipment: ref([])
        }

    },
    mounted() {
        this.Create()
    },
    methods: {
        async check(shipments, items) {
            console.log("hello");
            console.log(shipments._id);
            console.log(items._id);
            await axios.post('http://localhost:3000/mangecenter/add_shipment_to_plan', {
                Shipments: shipments._id,
                Plan: items._id
            }
                , {
                    withCredentials: true
                }
            ).then((res) => {
                console.log(res)
                this.shipment = res.data
                if (res.data === "OK") {
                    console.log(res.data);
                    this.Add_shipment(items.distination_City)
                }


            }).catch((err) => {
                console.log(err)
            })

        },
        async Add_shipment(City) {
            console.log(City);
            await axios.post('http://localhost:3000/mangecenter/Find_shipment_city', {
                City: City,
            }
                , {
                    withCredentials: true
                }
            ).then((res) => {
                console.log(res)
                this.shipment = res.data
            }).catch((err) => {
                console.log(err)
            })
        },
        async Create() {
            await axios.get('http://localhost:3000/mangecompany/PlanCompany', { withCredentials: true }).then((res) => {
                this.item = res.data
                console.log(this.item)
            }).catch((err) => {
                console.log(err)
            })
        },
        async DeleteOrder(id) {
            console.log(id);
            try {
                await axios.delete(`http://localhost:3000/mangecenter/deletcenter/${id}`);
                this.Create()
            } catch (err) {
                console.log(err);
            }
        }
    }

}
</script>

  
<style>
.app {
    position: absolute;
    right: 10%;
    width: 70%;
}
</style>