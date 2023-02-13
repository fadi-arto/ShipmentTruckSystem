<template>
  <v-card class="card">
    <v-container style="max-width: none; padding: 2px">
      <v-row>
        <v-col cols="12" md="1"></v-col>
        <v-col cols="12" md="3">
          <h6>MAP PLAN</h6>

        </v-col>
        <v-col cols="12" md="8"></v-col>
      </v-row>
      <v-row>
        <v-col cols="12" md="12">
          <div id="mapContainer_Center"></div>
        </v-col>
      </v-row>
      <v-row>
        <div class="masonry-item w-100">
          <div class="row gap-20">
            <!-- #Toatl Visits ==================== -->
            <div class="col-md-3">
              <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                  <h6 class="lh-1">Total Plan</h6>
                </div>
                <div class="layer w-100">
                  <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                      <span id="sparklinedash"></span>
                    </div>
                    <div class="peer">
                      <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-green-50 c-green-500">+10%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- #Total Page Views ==================== -->
            <div class="col-md-3">
              <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                  <h6 class="lh-1">Total Shipment</h6>
                </div>
                <div class="layer w-100">
                  <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                      <span id="sparklinedash2"></span>
                    </div>
                    <div class="peer">
                      <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-red-50 c-red-500">-7%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- #Unique Visitors ==================== -->
            <div class="col-md-3">
              <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                  <h6 class="lh-1">Unique Visitor</h6>
                </div>
                <div class="layer w-100">
                  <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                      <span id="sparklinedash3"></span>
                    </div>
                    <div class="peer">
                      <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-purple-50 c-purple-500">~12%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- #Bounce Rate ==================== -->
            <div class="col-md-3">
              <div class="layers bd bgc-white p-20">
                <div class="layer w-100 mB-10">
                  <h6 class="lh-1">Bounce Rate</h6>
                </div>
                <div class="layer w-100">
                  <div class="peers ai-sb fxw-nw">
                    <div class="peer peer-greed">
                      <span id="sparklinedash4"></span>
                    </div>
                    <div class="peer">
                      <span class="d-ib lh-0 va-m fw-600 bdrs-10em pX-15 pY-15 bgc-blue-50 c-blue-500">33%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </v-row>
      <v-row>
        <v-col style="height:30%">
          <canvas id="lineChart"></canvas>
        </v-col>
      </v-row>
      <v-row>
        <div class="bd bgc-white" style="    width: 100%;">
          <div class="layers">
            <div class="h2 font-weight-bold">Planing</div>
            <div class="layer w-100">
              <div class="table-responsive p-20">
                <table class="table" style="  border-collapse: collapse;">
                  <thead>
                    <tr style="border-bottom: solid white 30px;">
                      <th scope="col">Number</th>
                      <th scope="col">Date</th>
                      <th scope="col">Time</th>
                      <th scope="col">Status</th>
                      <th scope="col">Destination</th>
                      <th scope="col">Shipment</th>
                      <th scope="col">Destination Centers</th>
                      <th scope="col">Vechile</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr class="bg-blue" style="border-bottom: solid white 10px;" v-for="items in itemplan"
                      :key="items.id">
                      <td>
                        <img src="https://www.freeiconspng.com/thumbs/female-icon/businesswoman-female-icon-19.png"
                          class="rounded-circle" alt />
                        <div class="pl-lg-5 pl-md-3 pl-1 name">{{ items.Company }}</div>
                      </td>
                      <td>{{ items.start_time[0] }}</td>
                      <td>11:00 AM</td>
                      <td>
                        <span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">{{ items.Status }}</span>
                      </td>
                      <td>
                        <span>{{ items.distination_City }}</span>
                      </td>
                      <td>
                        <span>{{ items.shippment.length }}</span>
                      </td>
                      <td>
                        <span v-for="itemsdestination in items.distination_location" :key="itemsdestination">{{
                          itemsdestination
                        }}-</span>
                      </td>
                      <td>
                        <span>{{ items.CaR }}</span>
                      </td>
                      <td>
                        <v-row justify="space-around">
                          <v-col cols="auto">
                            <v-dialog transition="dialog-bottom-transition">
                              <template v-slot:activator="{ props }">
                                <v-btn color="grey-lighten-2" v-bind="props">Edit</v-btn>
                              </template>
                              <template v-slot:default="{ isActive }">
                                <v-card>
                                  <v-toolbar color="primary" title="Opening from the bottom"></v-toolbar>
                                  <v-card-text>
                                    <main>

                                      <div class="bgc-white p-20 bd">
                                        <h3 class="c-grey-90A0">Add To Car</h3>
                                        <div class="mT-30">
                                          <form>
                                            <div class="row">
                                              <div class="col-md-12">
                                                <label class="form-label" for="inputEmail4">
                                                  Car Plate
                                                </label>
                                                <input type="text" class="form-control" id="inputEmail4"
                                                  placeholder="Car plate" v-model="Car" />
                                              </div>
                                            </div>
                                          </form>
                                        </div>
                                      </div>

                                    </main>
                                  </v-card-text>
                                  <v-card-actions class="justify-end">
                                    <v-btn variant="text" @click="isActive.value = false">ADD Vechile</v-btn>
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
        </div>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
import "leaflet/dist/leaflet.css";
import { ref } from 'vue'
import L from "leaflet";
import axios from "axios";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import "leaflet-control-geocoder/dist/Control.Geocoder";
import markers from '../../../assets/image/icons8-shipment-642.png';

export default {
  data() {
    return {
      map: null,
      show: false,
      value: [],
      item: []
    };
  },
  methods: {
    async chart(ctxL) {
      await axios.get('http://localhost:3000/mangecenter/GetDetailsSales', { withCredentials: true })
        .then((res) => {
          var myLineChart = new Chart(ctxL, {
            type: "line",
            data: {
              labels: [
                "January",
                "February",
                "March",
                "April",
                "May",
                "June",
                "July",
                "August",
                "September",
                "October",
                "November",
                "December",
              ],
              datasets: [
                {
                  label: "My First dataset",
                  data: res.data,
                  backgroundColor: ["rgba(105, 0, 132, .2)"],
                  borderColor: ["rgba(200, 99, 132, .7)"],
                  borderWidth: 2,
                },
                {
                  label: "My Second dataset",
                  data: [28, 48, 40, 19, 86, 27, 90, 81, 56, 55, 40, 0],
                  backgroundColor: ["rgba(0, 137, 132, .2)"],
                  borderColor: ["rgba(0, 10, 130, .7)"],
                  borderWidth: 2,
                },
              ],
            },
          });
        }).catch((err) => {
          console.log(err)
        })
    },
    async StartPlan(map) {
      await axios.get('http://localhost:3000/mangecenter/GetPlanDirection', { withCredentials: true })
        .then((res) => {
           console.log(res.data);
           this.plan(map)
        }).catch((err) => {
          console.log(err)
        })
    },
    async plan(map) {
      await axios.get('http://localhost:3000/mangecenter/GetPlanStart', { withCredentials: true })
        .then((res) => {

          this.itemplan = res.data

          this.plan_map(res.data, map)
        }).catch((err) => {
          console.log(err)
        })
    },
    async plan_map(Center, map) {
      var taxiIcon = L.icon({
        iconUrl: markers,
        iconSize: [35, 35]
      })
      // var marker2 = L.marker([33.5072204116006, 36.26578269587441], { icon: taxiIcon }).addTo(map);

      await axios.post('http://localhost:3000/mangecenter/GetPlanTransport', {
        Centers: Center
      }, { withCredentials: true })
        .then(async (res) => {
          console.log("transport");
          console.log(res.data);
          let Source;
          var colors = ['green', 'blue', 'yellow'];
          const response = await axios.get(`https://nominatim.openstreetmap.org/search/${encodeURIComponent(res.data[res.data.length - 1])}?format=json`);
          const latSource = response.data[0].lat;
          const lngSource = response.data[0].lon;
          console.log(' lat, lng: ', latSource, lngSource);
          let waypointes = []
          var router = L.Routing.osrmv1(), waypoints = [], line;
          for (let i = 0; i < res.data.length - 1; i++) {

            waypoints.push({ latLng: L.latLng(latSource, lngSource) });
            L.marker([latSource, lngSource], { icon: taxiIcon }).addTo(map);
            for (let j = 0; j < res.data[i].length; j++) {
              const response = await axios.get(`https://nominatim.openstreetmap.org/search/${encodeURIComponent(res.data[i][j])}?format=json`);
              waypoints.push({ latLng: L.latLng(response.data[0].lat, response.data[0].lon) });
              L.marker([response.data[0].lat, response.data[0].lon], { icon: taxiIcon }).addTo(map);
            }
            waypointes.push(waypoints)
          }
          for (let z = 0; z < waypointes.length; z++) {
            router.route(waypointes[z], function (err, routes) {
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
          }

        }).catch((err) => {
          console.log(err)
        })
    },
    show_function() {
      this.show = !this.show;
    },
  },
  setup() {
    const lng = ref('')
    const lat = ref('')
    const itemplan = ref([])
    return { lng, lat, itemplan }
  },
  async mounted() {
    var map
    map = L.map("mapContainer_Center").setView([35, 36], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }).addTo(map);
    this.plan(map)
    var ctxL = document.getElementById("lineChart").getContext("2d");
    this.chart(ctxL)
    this.StartPlan(map)
  },
};
</script>

<style scoped>
.action {}

a {
  color: white;
  opacity: 0.6;
  text-decoration: none;
}

a:hover,
a:active,
a:focus {
  color: white;
  text-decoration: none;
  opacity: 1;
}

.active {
  color: white;
  text-decoration: none;
  opacity: 1;
}

body {
  background-color: #F4F6F7;
}

#wrapper {
  background-color: #28688C;
  box-shadow: 1px 5px 25px 3px #444;
  border-radius: 10px;
  margin: 100px auto;
  max-width: 720px;
  padding: 0px;
  color: white;
}

#current-weather {
  padding: 15px;
}

#mainTemperature {
  font-size: 5.5em;
  line-height: 0.7;
}

#tempDescription {
  margin-top: 10px;
  text-align: center;
}

.day-weather-box {
  border: 1px solid #28688C;
  background-color: #2E7FA1;
  border-radius: 5px;
  height: 5em;
}

.day-weather-box p {
  margin-bottom: 0;
}

.side-weather-info {
  padding: 0px 10px;
}

.day-weather-inner-box {
  display: inline-flex;
  margin: 14px auto;
  padding: 0px 5px;
}

.forecast-main {
  padding: 0px 0px 0px 30px;
}

.forecast-icon {
  font-size: 25px;
  margin-left: 5px;
}

.modal-body p {
  color: #333;
}

.status {
  background: red;
  padding: 9px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
}

* {
  box-sizing: border-box;
}

body {
  background-color: #d9ecf2;
  font-family: "Poppins", sans-serif;
  color: #666;
}

.h2 {
  color: #444;
  font-family: "PT Sans", sans-serif;
}

thead {
  font-family: "Poppins", sans-serif;
  font-weight: bolder;
  /* font-size: 20px; */
  color: #666;
}

img {
  width: 40px;
  height: 40px;
}

.name {
  display: inline-block;
}

.bg-blue {
  background-color: #ebf5fb;
  border-radius: 8px;
}

.fa-check,
.fa-minus {
  color: blue;
}

.bg-blue:hover {
  background-color: #3e64ff;
  color: #eee;
  cursor: pointer;
}

.bg-blue:hover .fa-check,
.bg-blue:hover .fa-minus {
  background-color: #3e64ff;
  color: #eee;
}

.table thead th,
.table td {
  border: none;
}

.table tbody td:first-child {
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

.table tbody td:last-child {
  border-bottom-right-radius: 10px;
  border-top-right-radius: 10px;
}

#spacing-row {
  height: 10px;
}

@media (max-width: 575px) {
  .container {
    width: 125%;
    padding: 20px 10px;
  }
}

.app_Center {
  width: 100%;
}

#mapContainer_Center {
  /* width: 80vw; */
  height: 36vh;
  /* position: relative; */
  /* display: flex; */
  /* justify-content: center; */
  /* align-items: center; */
  /* top: 16vh;
    justify-content: center;
    align-items: center;
    z-index: 100; */
  /* position: absolute; */
  /* right: 5%; */
  width: 100%;
}
</style>
