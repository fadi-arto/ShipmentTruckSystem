<template>
  <div>
    <div class="bd bgc-white">
      <div class="layers">
        <div class="layer w-100 p-20">
          <h6 class="lh-1">Plan Report Done</h6>
        </div>
        <div class="layer w-100">
          <div class="c-white p-20" style="background:#02adf0">

          </div>
          <div class="table-responsive p-20">
            <table class="table">
              <thead style="font-size: 15px">
                <tr>
                  <th class="bdwT-0">Company</th>
                  <th class="bdwT-0">Vechile plate</th>
                  <th class="bdwT-0">Destination City</th>
                  <th class="bdwT-0">Destination</th>
                  <th class="bdwT-0">Source Location</th>
                  <th class="bdwT-0">Start_time</th>
                  <th class="bdwT-0">Action</th>
                  <th class="bdwT-0">Done Plan</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="items in item" :key="items.id">
                  <td class="fw-600">{{ items.Company }}</td>
                  <td>
                    <span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">
                      {{ items.CaR }}
                    </span>
                  </td>
                  <td>
                    <span class="fw-600">{{ items.distination_City }}</span>
                  </td>
                  <td>
                    <span class="fw-600" v-for="itemes in items.distination_location" :key="itemes">{{ itemes }}-</span>
                  </td>
                  <td>
                    <span class="fw-600">{{ items.source_location[0] }}</span>
                  </td>
                  <td>
                    <span class="text-primary">{{ items.start_time[0] }}</span>
                  </td>
                  <td>
                    <v-row justify="space-around">
                      <v-col cols="auto">
                        <v-dialog transition="dialog-bottom-transition">
                          <template v-slot:activator="{ props }">
                            <v-btn :loading="loading[4]" v-bind="props" :disabled="loading[4]" color="blue-grey"
                              icon="mdi-thumb-up" @click="load(4, items._id)"></v-btn>
                          </template>
                          <template v-slot:default="{ isActive }">
                            <v-card>
                              <v-toolbar color="primary" title="Shipment Done"></v-toolbar>
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
                                      <tr v-for="shipments in itemShipment" :key="shipments.id">
                                        <td>{{ shipments.DistinationCity }}</td>
                                        <td>{{ shipments.DistinationLocation }}</td>

                                        <td>
                                          <span v-for="Servicess in shipments.Services" :key="Servicess">
                                            {{ Servicess }} -
                                          </span>
                                        </td>
                                        <td>{{ shipments.Weight }}</td>
                                        <td>{{ shipments.Status }}</td>
                                        <td>{{ shipments.priority }}</td>
                                        <td>
                                          <span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">
                                            {{ shipments.state }}
                                          </span>
                                        </td>
                                        <td>
                                          <v-row justify="space-around">
                                            <v-col cols="auto">
                                              <v-dialog transition="dialog-bottom-transition">
                                                <template v-slot:activator="{ props }">
                                                  <v-btn :color="colors" v-bind="props">Received</v-btn>
                                                </template>
                                                <template v-slot:default="{ isActive }">
                                                  <v-card>
                                                    <v-toolbar color="primary" title="Are you sure"></v-toolbar>
                                                    <v-card-text>
                                                      <main>
                                                        <div class="bgc-white p-20 bd">
                                                          <h3 class="c-grey-90A0">
                                                            The shipment is over
                                                          </h3>
                                                        </div>
                                                      </main>
                                                    </v-card-text>
                                                    <v-card-actions class="justify-end">
                                                      <div @click="check(shipments._id, items._id)">
                                                        <v-btn variant="text" @click="isActive.value = false">
                                                          Received
                                                        </v-btn>
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
                                <v-btn variant="text" @click="isActive.value = false">Received</v-btn>
                              </v-card-actions>
                            </v-card>
                          </template>
                        </v-dialog>
                      </v-col>
                    </v-row>
                  </td>
                  <td style="padding-top: 2%;">
                    <v-row justify="center">
                      <v-dialog v-model="dialog2" persistent>
                        <template v-slot:activator="{ props }">
                          <v-btn color="rgb(2, 173, 240)" v-bind="props">
                            Done Plan
                          </v-btn>
                        </template>
                        <v-card>
                          <div class="c-white p-20" style="background:#02adf0">
                            <v-card-title class="text-h5">
                            Are You Sure Plan Done?
                          </v-card-title>
                          </div>
                         
                          <v-card-text>If Click Agree you cannot back.</v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn color="green-darken-1" variant="text" @click="dialog2 = false">
                              Disagree
                            </v-btn>
                            <v-btn color="green-darken-1" variant="text" @click="UpdatePlane(items._id)">
                              Agree
                            </v-btn>
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </v-row>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ta-c bdT w-100 p-20">
        <a href="#">Check all the sales</a>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { ref } from "vue";

export default {
  data() {
    return {
      loading: [],
      dialog2: false
    };
  },
  setup() {
    let item = ref([]);
    let colors = ref('primary');
    let itemShipment = ref([]);
    return {
      item,
      itemShipment,
      colors
    };
  },
  mounted() {
    this.Create();
  },
  methods: {
    async UpdatePlane(id){
      await axios
        .put(`http://localhost:3000/mangecenter/UpdatePlanStatus/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          this.Create()
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async check(id, plan) {
      await axios
        .get(`http://localhost:3000/mangecenter/UpdateShipmentStatus/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          if (res.data === 'success') {
            this.colors = 'green-darken-2'
            this.load(4, plan)
          }

        })
        .catch((err) => {
          console.log(err);
        });
    },
    async load(i, id) {
      console.log(id);
      await axios
        .get(`http://localhost:3000/mangecenter/GetShipmentPlan/${id}`, {
          withCredentials: true,
        })
        .then((res) => {
          console.log(res.data);
          this.itemShipment = res.data;
        })
        .catch((err) => {
          console.log(err);
        });
      this.loading[i] = true;
      setTimeout(() => (this.loading[i] = false), 3000);
    },
    async Create() {
      await axios
        .get("http://localhost:3000/mangecenter/GetWaitShipmentDone", {
          withCredentials: true,
        })
        .then((res) => {
          this.item = res.data;
          console.log(this.item);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    async DeleteOrder(id) {
      console.log(id);
      try {
        await axios.delete(`http://localhost:3000/mangecenter/deletcenter/${id}`);
        this.Create();
      } catch (err) {
        console.log(err);
      }
    },
  },
};
</script>

<style>
.app {
  position: absolute;
  right: 10%;
  width: 40%;
}

.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}

@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@-o-keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}

@keyframes loader {
  from {
    transform: rotate(0);
  }

  to {
    transform: rotate(360deg);
  }
}
</style>
