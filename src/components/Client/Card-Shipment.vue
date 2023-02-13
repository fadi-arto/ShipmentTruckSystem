<template>
  <div @click="how">
    <v-row>
      <v-col cols="12">

        <v-card-text>
          <v-autocomplete v-model="model" :items="items" label="Shipment" prepend-icon="mdi-city">
            <template v-slot:append>
              <v-slide-x-reverse-transition mode="out-in">
                <v-icon icon="mdi-circle-edit-outline" @click="showes"></v-icon>
              </v-slide-x-reverse-transition>
            </template>
          </v-autocomplete>

        </v-card-text>
      </v-col>

    </v-row>
    <v-row justify="space-around" style="display:block">
      <v-card>
        <v-card-text>
          <div class="row">
            <div class="col-lg-12">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title mb-5">Horizontal Timeline</h4>

                  <div class="hori-timeline" dir="ltr">
                    <v-progress-linear :model-value="percent" color="red-darken-2" rounded></v-progress-linear>

                    <ul class="list-inline events">
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date bg-soft-primary text-primary" v-if="WAIT">Wait</div>
                          <div class="event-date bg-soft-danger " v-if="!WAIT">Wait</div>
                          <!-- <h5 class="font-size-16"></h5> -->

                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date bg-soft-success text-success" v-if="Start">Start</div>
                          <div class="event-date bg-soft-danger " v-if="!Start">Start</div>
                          <!-- <h5 class="font-size-16">Event Two</h5> -->


                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date  text-white" style="background: #353533;opacity: 0.6;" v-if="Delivery">
                            Deliver</div>
                          <div class="event-date bg-soft-danger " v-if="!Delivery">Deliver</div>
                          <!-- <h5 class="font-size-16">Event Three</h5> -->


                        </div>
                      </li>
                      <li class="list-inline-item event-list">
                        <div class="px-4">
                          <div class="event-date bg-soft-warning text-warning" v-if="Done">Done</div>
                          <div class="event-date bg-soft-danger " v-if="!Done">Done</div>
                          <!-- <h5 class="font-size-16">Event Four</h5> -->


                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- end card -->
            </div>
          </div>
        </v-card-text>
        <div id="mapContainers"></div>
      </v-card>
    </v-row>
  </div>
  <!-- <v-card>
            <v-timeline align="start">
                <v-timeline-item v-for="(item, i) in items" :key="i" :dot-color="item.color" :icon="item.icon" fill-dot>
                    <v-card>
                        <v-card-title :class="['text-h6', `bg-${item.color}`]">
                            Lorem Ipsum Dolor
                        </v-card-title>
                        
                    </v-card>
                </v-timeline-item>
            </v-timeline>
        <div id="mapContainers"></div>
    </v-card> -->

</template>
          
<script>
import axios from "axios";
import headers from "../template/header.vue";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ref } from "vue";
import { Icon } from "leaflet";
import marker from "../../assets/image/icons8-shipment-64.png";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import "leaflet-control-geocoder/dist/Control.Geocoder";
import markers from '../../assets/image/icons8-shipment-642.png';
export default {
  name: "LeafletMap",
  data() {
    return {
      map: null,
      value: [],
      item: [],
      values: 'foo',
      value: null,
      isEditing: false,
      model: null
    };
  },
  setup() {
    let items = ref([])
    let values = 'foo'
    let value = null
    let itemed = null
    let WAIT = ref(false)
    let Start = ref(false)
    let Delivery = ref(false)
    let Done = ref(false)
    let latlng = ref([])
    let percent = ref(0)
    // let  model = null
    console.log(itemed);
    return { items, percent , values, value, itemed, WAIT, Start, Delivery, Done, latlng }
  },
  updated() {
    console.log("111");
  },
  components: {
    headers
  },
  computed: {
    activeItems() {
      return this.items.filter(item => item.status === 'Active');
    },
  },
  mounted() {
    this.Create()

  },
  methods: {
    how() { console.log(this.WAIT) },
    async showes() {
      console.log("1");
      console.log(this.model);
      const key = this.model.split("(")[1];
      const key2 = key.split(" ")[1]
      console.log(key2);
      console.log(key);
      await axios.get(`http://localhost:3000/mangeclint/GetShipmentDetails/${key2}`, { withCredentials: true }).then((res) => {
        console.log(res.data[0])
        if (res.data[0].state === "WAIT") {
          this.WAIT = true
          this.percent = 10
        }
        if (res.data[0].state === "Start") {
          this.WAIT = true
          this.Start = true
          this.percent = 20

        }
        if (res.data[0].state === "Deliver") {
          this.WAIT = true
          this.Start = true
          this.percent = 60
          this.Delivery = true
        }
        if (res.data[0].state === "Done") {
          this.WAIT = true
          this.Start = true
          this.percent = 100

          this.Delivery = true
          this.Done = true
        }
        // console.log();
        this.Mapes(res.data[0])
      }).catch((err) => {
        console.log(err)
      })
    },
    async Mapes(Details) {
      console.log("Details");
      console.log(Details);
      const DetailsCenter = Details.DistinationCenters
      console.log(DetailsCenter);
      await axios.post(`http://localhost:3000/mangeclint/GetShipmentDetailsMap`, {
        Destination: Details.DistinationCenters,
        Source: Details.center
      }, { withCredentials: true }).then(async (res) => {
        console.log(res.data)
        let map = null
        map = L.map("mapContainers").setView([33.510414, 36.278336], 4);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
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
        this.LocationShipment(Details.Car_plate, map)
      }).catch((err) => {
        console.log(err)
      })
    },
    async LocationShipment(id, map) {
      var taxiIcon = L.icon({
        iconUrl: marker,
        iconSize: [35, 35]
      })
      console.log(id);
      const socket = io.connect("http://localhost:3000");
      setInterval(() => {
        socket.timeout(5000).emit("testsocket", id);
      }, 5000);
      socket.on("updateCarLocation", (arg) => {
        map.removeLayer([arg.Location.lat, arg.Location.lng], { icon: taxiIcon });
        const marker = L.marker([arg.Location.lat, arg.Location.lng], { icon: taxiIcon }).addTo(map);
        map.setView([arg.Location.lat, arg.Location.lng]);
      });

    },
    async Create() {
      await axios.get('http://localhost:3000/mangeclint/GetShipmentNotDone', { withCredentials: true }).then((res) => {
        console.log(res.data)
        for (let i = 0; i < res.data.length; i++) {
          const location = res.data[i].DistinationLocation + " " + res.data[i].DistinationCity + " " + "(" + " " + res.data[i].Key + " " + ")"
          const id = res.data[i]._id
          this.items.push(location)
        }
        console.log(this.items);
      }).catch((err) => {
        console.log(err)
      })
    }
  }
};
</script>
          
<style scoped>
/* @import url("https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"); */

.timeline {
  width: 100%;
}

@media (min-width: 600px) {
  .timeline {

    margin: 0 auto;
  }
}

@media (max-width:980) {
  .secu {
    background: red;
  }
}

#mapContainers {
  height: 35vh;
  /* width: 100%; */
}

body {
  background: #eee;
  margin-top: 20px;
}

.hori-timeline .events {
  border-top: 3px solid #e9ecef;
}

.hori-timeline .events .event-list {
  display: block;
  position: relative;
  text-align: center;
  padding-top: 70px;
  margin-right: 0;
}

.hori-timeline .events .event-list:before {
  content: "";
  position: absolute;
  height: 36px;
  border-right: 2px dashed #dee2e6;
  top: 0;
}

.hori-timeline .events .event-list .event-date {
  position: absolute;
  top: 38px;
  left: 0;
  right: 0;
  width: 75px;
  margin: 0 auto;
  border-radius: 4px;
  padding: 2px 4px;
}

@media (min-width: 1140px) {
  .hori-timeline .events .event-list {
    display: inline-block;
    width: 24%;
    padding-top: 45px;
  }

}

.bg-soft-primary {
  background-color: rgba(64, 144, 203, .3) !important;
}

.bg-soft-success {
  background-color: rgba(71, 189, 154, .3) !important;
}

.bg-soft-danger {
  background-color: rgba(231, 76, 94, .3) !important;
}

.bg-soft-warning {
  background-color: rgba(249, 213, 112, .3) !important;
}

.card {
  border: none;
  margin-bottom: 24px;
  -webkit-box-shadow: 0 0 13px 0 rgba(236, 236, 241, .44);
  box-shadow: 0 0 13px 0 rgba(236, 236, 241, .44);
}
</style>