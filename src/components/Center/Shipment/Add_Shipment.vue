<template>
    <div class="page-container">
      <main class="main-content">
        <div id="mainContent">
          <div class="row gap-20 masonry">
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
                        <label class="form-label" for="DistinationCity">Distination City </label>
                        <input type="email" class="form-control" v-model="DistinationCity" id="DistinationCity" placeholder="DistinationCity" />
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
    </div>
</template>


<script>
import map_location from "../../maps/location_map.vue";
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
    DistinationCity:'',
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
            DistinationCity:this.DistinationCity

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
           if(response.data === "added successfully"){
            this.$router.push({ name: 'Centers' })
           }
           return response;
         }
         catch (err) {
           console.log(err);
         }
       }
  }
};
</script>

<style scoped>
@import "https://fonts.googleapis.com/css?family=Material+Icons";
@import "https://use.fontawesome.com/releases/v5.15.4/css/solid.css";
@import "https://use.fontawesome.com/releases/v5.15.4/css/fontawesome.css";
@media screen and (max-width: 991px){
  .main-content {
    padding: 0px 0px 0px;
}

}
.main-content {
    padding: 0px 0px 0px;
}

</style>