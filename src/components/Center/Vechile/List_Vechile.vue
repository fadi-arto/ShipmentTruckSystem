<template>
  <div>

    <section class="main-content">
      
      <div class="container">
        <table class="table">
          
          <thead>

            <tr>
              <th>Driver Name</th>
              <th>Status</th>
              <th>Type</th>
              <th>Car_Plate</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>

            <tr style="border-top: 1px solid; border-bottom: 1px solid;" v-for="items in item" :key="items.id">
              <td>
                <div class="user-info">
                  <div class="user-info__img">
                    <div class="">
                      <v-avatar color="info" size="x-large">
                        <v-img :src="image" alt="John"></v-img>
                      </v-avatar>
                    </div>
                  </div>
                  <div class="user-info__basic">
                    <h5 class="mb-0">{{ items.Email }}</h5>
                  </div>
                </div>
              </td>
              <td>
                <span class="btn btn-success" style="background :rgb(2 173 240); color :white ; margin-top: 15%;">{{
                  items.Status
                }}</span>
              </td>
              <td>
                <h6 class="mb-0" style=" margin-top: 15%;">{{ items.Quantity }}</h6>
                <small>{{ items.createdAt }}</small>
              </td>
              <td>
                <h6 class="mb-0" style=" margin-top: 10%;">{{ items.Car_plate }}</h6>
                <a href="#!"><small>{{ items.Type }}</small></a>
              </td>

              <td>

                <span>

                  <v-row justify="space-around" style=" margin: 9px;">
                    <v-col cols="auto">
                      <v-dialog transition="dialog-bottom-transition">
                        <template v-slot:activator="{ props }">
                          <v-btn color="rgb(2 173 240)" v-bind="props" @click="Show_location(items._id)">Location</v-btn>
                        </template>
                        <template v-slot:default="{ isActive }">
                          <v-card>
                            
                            <v-card-text>
                            <Details :id="items._id" />
                            </v-card-text>
                            <v-card-actions class="justify-end">
                              <v-btn variant="text" @click="isActive.value = false">Close</v-btn>
                            </v-card-actions>
                          </v-card>
                        </template>
                      </v-dialog>
                    </v-col>

                  </v-row>
                </span>
              </td>
              <hr>
            </tr>


          </tbody>
        </table>

      </div>


    </section>
  </div>

</template>

<script>
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import axios from "axios";
import { Icon } from "leaflet";

import marker from '../../../assets/image/icons8-shipment-642.png';
import Details from './Details.vue'
export default {
  props:['image'],
  data() {
    return {
      map: null,
      value: [],
      item: [],
      img: 'https://cdn.vuetifyjs.com/images/john.jpg'
    };
  },
  components:{
    Details
  },
  mounted() {
    this.Create()

  },
  methods: {
    async Create() {
      await axios.get("http://localhost:3000/managecar/Car_Company", { withCredentials: true })
        .then(res => {
          this.item = res.data;
          console.log(this.item);

        })
        .catch(err => {
          console.log(err);
        });
    },
    async Show_location(id) {
      console.log(this.isActive);
      console.log(id);
  

    },
  }
};
</script>

<style>
@import url('../style.scss');

</style>