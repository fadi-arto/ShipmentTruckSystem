<template>
    <v-card class="card" style="    overflow-y: auto;" >
        <v-container>
            <v-row>

                <v-col cols="12" md="4">
                    <v-card-title>{{ shipment.name }}</v-card-title>
                    <v-card-text>

                        <div class="card" style="width: 18rem;">
                            <ul class="list-group list-group-flush">
                                <li class="list-group-item">Location: {{ shipment.Location }}</li>
                                <li class="list-group-item">City: {{ shipment.City }}</li>
                                <li class="list-group-item">Center Destination : {{ shipment.DistinationCenters }}</li>
                                <li class="list-group-item">Date Start : {{ Dates }}</li>
                                <li class="list-group-item">Expect Delivery: {{ shipment.ExceptionTime }}</li>
                                <li class="list-group-item">Cost: {{ shipment.cost }}</li>
                                <li class="list-group-item">Status: {{ shipment.state }}</li>
                                <v-rating v-model="rate" hover color="blue" half-increments></v-rating>

                            </ul>

                        </div>
                    </v-card-text>
                </v-col>
                <v-col cols="12" md="8">
                    <div>
                        <div id="mapContainer"></div>
                    </div>
                </v-col>

            </v-row>

            <v-row>
                <v-col cols="12" md="9">
                </v-col>
            </v-row>
        </v-container>
    </v-card>
</template>

<script>
import { LMap, LTileLayer, LMarker } from 'vue3-leaflet';
import { ref } from 'vue'
import axios from 'axios'
import L from "leaflet";
// import axios from "axios";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import "leaflet-control-geocoder/dist/Control.Geocoder";
import markers from '../../assets/image/icons8-shipment-642.png';

export default {
    props: ['idShipment'],
    components: {
        LMap,
        LTileLayer,
        LMarker,
    },
    setup() {
        let rate = ref(3.5)
        let shipment = ref({})
        let Dates = ref('')
        let latlng = ref([])
        return { rate, shipment, latlng }
    },
    mounted() {
        this.map = L.map("mapContainer").setView([35, 36], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        }).addTo(this.map);
        console.log(this.idShipment);
        this.GetDetailsShipment(this.idShipment, this.map)
    },
    methods: {
        async GetDetailsShipment(id, map) {
            await axios
                .get(`http://localhost:3000/mangeclint/GetDetailsShipment/${id}`, {
                    withCredentials: true
                })
                .then(res => {
                    console.log(res.data);
                    this.shipment = res.data
                    var date = new Date(res.data.createdAt);

                    var year = date.getFullYear();
                    var month = date.getMonth() + 1; // Note: January is 0
                    var day = date.getDate();
                    this.Dates = year + "/" + month + "/" + day
                })
                .catch(err => {
                    console.log(err);
                });
            await axios
                .get(`http://localhost:3000/mangeclint/GetShipmentDirect/${id}`, {
                    withCredentials: true
                })
                .then(async res => {
                    console.log(res.data);
                    var taxiIcon = L.icon({
                        iconUrl: markers,
                        iconSize: [35, 35]
                    })
                    let waypointes = []
                    var router = L.Routing.osrmv1(), waypoints = [], line;
                    for (let i = 0; i < res.data.length; i++) {
                        const response = await axios.get(`https://nominatim.openstreetmap.org/search/${encodeURIComponent(res.data[i])}?format=json`);
                        const lat = response.data[0].lat;
                        const lng = response.data[0].lon;
                        console.log(' lat, lng: ', lat, lng);
                        this.latlng.push({ lat, lng })
                    }
                    for (let j = 0; j < this.latlng.length; j++) {
                        waypoints.push({ latLng: L.latLng(this.latlng[j].lat, this.latlng[j].lng) });
                        L.marker([this.latlng[j].lat, this.latlng[j].lng], { icon: taxiIcon }).addTo(map);
                        waypointes.push(waypoints)
                    }
                    map.setView([this.latlng[0].lat, this.latlng[0].lng], 13);
                    router.route(waypointes[0], function (err, routes) {
                        if (line) {
                            map.removeLayer(line);
                        }
                        else if (err) {
                            console.log(err)
                        } else {
                            L.Routing.line(routes[0]
                                , {
                                    styles: [{ color: '#90CAF9', opacity: 0.8, weight: 5 }]
                                }
                            ).addTo(map);
                        }
                    });
                    console.log(this.latlng);
                })
                .catch(err => {
                    console.log(err);
                });
        }
    },
    data() {
        return {
            showMap: false,
            map: null,
        };
    }
};
</script>
<style>
 @media (max-width: 576px) {
    .card {
      width: 100%;
    }
  }
@media (max-width: 600px) {
    .card p {
        font-size: 14px;
    }
}

#mapContainer {
    /* width: 80vw; */
    height: 90%;
    position: absolute;
    width: 81%;

}
.card {
  margin: 1rem;
}

@media (max-width: 992px) {
  .card {
    width: 100%;
    margin: 0;
  }

  #mapContainer {
    height: 200px;
  }
}
</style>