<template>
  <div>
    
    <div class="pages">
      <header_Vehicle :email="email"/>
      <main>
        <div id="mapContainer">

        </div>

      </main>
    </div>
  </div>
</template>
  
<script>
import { ref } from 'vue'
import header_Vehicle from "../components/template/header_Vehicle.vue";
import Profile from "../components/ManageVehicle/Profile.vue";
import axios from "axios";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine.css";
import "leaflet-routing-machine/dist/leaflet-routing-machine";
import "leaflet-control-geocoder/dist/Control.Geocoder";
import { Icon } from "leaflet";
import markers from "../assets/image/icons8-shipment-642.png";
import markers2 from "../assets/image/icons8-shipment-64.png";
import $ from 'jquery';
export default {
  name: "LeafletMap",
  data() {
    return {
      dialog: false,
      value: [],
      item: [],
   
    };
  },
  components: {
    header_Vehicle,
    Profile
  },
  setup() {
let map = null
let    email = ref('')
return{map ,email }
  },
  async mounted() {
    this.map = L.map('mapContainer').setView([33.51340843842325, 36.27665419318823], 13);
    var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    });
    osm.addTo(this.map);
    this.showlocation(this.map)
    this.Create(this.map)
  },
  methods: {
    async Create() {
      await axios
        .get("http://localhost:3000/managecar/GetlocationVechile", {
          withCredentials: true
        })
        .then(res => {
          console.log(res.data);
          this.email = res.data.Email
          var taxiIcon = L.icon({
          iconUrl: markers2,
          iconSize: [25, 25]
        })
        var marker = L.marker([res.data.Location.lat, res.data.Location.lng], { icon: taxiIcon })
          .bindPopup(`<h1 width="300" height="300" >${33.51340843842325}</h1><h1 width="300" height="300" >${36.27665419318823}</h1>`)
          .addTo(map);
        })
        .catch(err => {
          console.log(err);
        });
    },
    async show_centers() {
      const myIcon = new Icon({
        iconUrl: markers,
        iconSize: [40, 40]
      });

      for (let i = 0; i < this.item.length; i++) {
        var url =
          "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
          this.item[i].Location;
        fetch(url)
          .then(response => response.json())
          .then(data => {
            const addressArr = data;
            console.log(addressArr[0]);
            L.marker([addressArr[0].lat, addressArr[0].lon], { icon: myIcon })
              .bindPopup(
                `<h1 width="300" height="300" >KEY : ${this.item[i].email}`
              )
              .addTo(this.map);
          })
          .catch(err => console.log(err));
      }
    },
    async showlocation(map) {
      if ("geolocation" in navigator) {
        console.log("1");
       navigator.geolocation.getCurrentPosition(async function (position) {
          let lat = position.coords.latitude;
          let lng = position.coords.longitude;
          await axios
            .get("http://localhost:3000/managecar/getCredentials", {
              withCredentials: true
            })
            .then(res => {

              const socket = io.connect("http://localhost:3000", {
                query: {
                  token: res.data
                }
              });
              socket.emit("latitude", { lat, lng });
            })
            .catch(err => {
              console.log(err);
            });
        // Create a Leaflet map centered on the user's location
        var taxiIcon = L.icon({
          iconUrl: markers2,
          iconSize: [25, 25]
        })
        var marker = L.marker([lat, lng], { icon: taxiIcon })
          .bindPopup(`<h1 width="300" height="300" >${33.51340843842325}</h1><h1 width="300" height="300" >${36.27665419318823}</h1>`)
          .addTo(map);
      });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
  }
}
};



        // // socket.io commit
        // const socket = io.connect("http://localhost:3000", {
        //   query: {
        //     token: '1234567w8'
        //   }
        // });
        // socket.emit("latitude", { lat, lng });

        // // ,{withCredentials: true}

        // // revise socket
        // socket.on("latitude", (arg) => {
        //   console.log(arg);
</script>
  
<style>
@import "../assets/style/style2.css";

.fotterss {
  z-index: 1000;
  position: fixed;
  bottom: 0;
}

#mapContainer {
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  position: absolute;
  width: 100%;
}
</style>
