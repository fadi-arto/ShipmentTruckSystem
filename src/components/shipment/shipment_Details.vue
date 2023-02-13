<template>
  <div class="app">
    <div class="sidebar">
      <sliders />
    </div>

    <div class="page-container">
      <headers />

      <main class="main-content bgc-grey-100">
        <div id="mainContent">
          <div class="row gap-20 masonry pos-r">
            <div class="masonry-sizer col-md-8"></div>
            <div class="masonry-item col-md-8">
              <div class="bgc-white p-20 bd">
                <h3 class="c-grey-90A0">Add shipment</h3>
                <div class="mT-30">
                  <form>
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="inputEmail4">Your Email</label>
                        <input type="email" class="form-control" v-model="EmailSource" id="inputEmail4" placeholder="Email" />
                      </div>
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="inputSourceAddress">Source Address</label>
                        <input type="text" class="form-control" v-model="SourceLocation" id="inputSourceAddress" placeholder="Source Address" />
                        <a href="#" class="grey-text modal-trigger" data-target="modal-signup">
                          <i class="fa fa-map-marker" @click="change"></i>
                        </a>
                      </div>
                    </div>
                    <div id="modal-signup" v-if="show">
                      <h2 @click="change"><i class="fa fa-times-circle-o" aria-hidden="true"></i></h2>
                      <v-card class="mx-auto" max-width="544" min-height="500" outlined>
                        <map_location />
                      </v-card>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="inputEmail4">Destination Email</label>
                        <input type="email"  v-model="EmailDistination" class="form-control" id="inputEmail4" placeholder="Email" />
                      </div>
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="inputDestinationAddress">Destination Address</label>
                        <input type="text" class="form-control" v-model="DistinationLocation" id="inputDestinationAddress"
                          placeholder="Destination Address" />
                      </div>
                    </div>
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <v-container fluid grid-list-xl sm6>
                          <v-layout wrap align-center>
                            <v-flex xs12 sm6 d-flex>
                              <v-select style="width: 400px" v-model="Type_Of" :items="Type_Ofs" label="Type Of" chips
                                multiple outline></v-select>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </div>
                      <div class="mb-3 col-md-6">
                        <v-container fluid grid-list-xl>
                          <v-layout wrap align-center>
                            <v-flex xs12 sm6 d-flex>
                              <v-select style="width: 400px" v-model="prioritys" :items="priority"
                                label="Pirority"></v-select>
                            </v-flex>
                          </v-layout>
                        </v-container>
                      </div>
                      <div class="row">
                        <div class="mb-3 col-md-6">
                          <v-form>
                            <v-container>
                              <v-layout wrap>
                                <v-flex xs12>
                                  <v-autocomplete v-model="Services" style="width: 600px" :disabled="isUpdating"
                                    :items="Service"  box chip color="blue-grey lighten-2" label="Select    "
                                    item-text="name" item-value="name" multiple>
                                  </v-autocomplete>
                                </v-flex>
                              </v-layout>
                            </v-container>
                          </v-form>
                        </div>
                        <div class="mb-3 col-md-6">
                        <label class="form-label" for="Weight">Weight KG</label>
                        <input type="text" class="form-control" v-model="Weight" id="Weight"
                          placeholder="Weight KG" />
                      </div>
                      </div>
                      <v-btn color="info" @click="Create">ADD Shipment </v-btn>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footers />
    </div>
  </div>
</template>


<script>
import footers from "../template/footer.vue";
import headers from "../template/header.vue";
import sliders from "../template/slider.vue";
import map_location from "../maps/location_map.vue";
import axios from 'axios';
import {ref} from 'vue';
export default {
  data: () => ({
    Type_Ofs: ["Clothes", "machine", "shosee", "food"],
    priority: ["Very Fast", "Fast", "Nearly", "dont care"],
    selected: "1",
    prioritys: "",
    autoUpdate: true,
    show: false,
    Services: [],
    isUpdating: false,
    name: "Midnight Crew",
    Service: ["Truck", "Expect time ", "QR"],
    title: "The summer breeze",
    SourceLocation:'',
    DistinationLocation:'',
    Weight:'',
    EmailSource:'',
    EmailDistination:'',
    Type_Of:[],
  }),
  setup(){
    return {
    
      name: ref([])
    }

  },
  components: {
    footers,
    headers,
    sliders,
    map_location,
  },
  methods: {
    change() {
      this.show = !this.show;
    },
    async Create() {
         try {
   
           let data = {
            EmailSource: this.EmailSource,
            SourceLocation: this.SourceLocation,
            EmailDistination: this.EmailDistination,
            DistinationLocation  : this.DistinationLocation,
            Type_Of:this.Type_Of,
            priority:this.prioritys,
            Services:this.Services,
            Weight:this.Weight,

           };
           let request = {
             url: "http://localhost:3000/mangecenter/Add_shipment",
             withCredentials: true,
             method: "post",
             headers: {
               "Content-type": "application/json"
             },
             data: JSON.stringify(data)
           };
           const response = await axios(request)
           console.log(response.data);
           return response;
         }
         catch (err) {
           console.log(err);
         }
       }
  }
};
</script>

<style>
@import "https://fonts.googleapis.com/css?family=Material+Icons";
@import "https://use.fontawesome.com/releases/v5.15.4/css/solid.css";
@import "https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css";
/* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"; */
/* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"; */

/* https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css */
</style>