<template>
  <div class="app">
    <div id="mapContainer">

      </div>
  </div>
   

</template>

<script>
import axios from 'axios';
import headers from '../template/header.vue';
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import {ref} from 'vue'
import { Icon } from 'leaflet'
import marker from '../../assets/image/icons8-shipment-642.png';
export default {
    name: "LeafletMap",
    data() {
        return {
            map: null,
            value: [],
            item:[]
        };
    },
    components: {
      headers,

  },
  mounted() {
      this.Create()
        this.map = L.map("mapContainer").setView([33.510414, 36.278336], 7);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);    
    },
    methods: {
    async Create () {
      await axios.get('http://localhost:3000/managecar/findalllocation',{ withCredentials: true,}).then((res) => {
        this.item = res.data
        console.log(this.item)
        this.show_centers()
      }).catch((err) => {
        console.log(err)
      })
    },
    async show_centers(){
            const myIcon = new Icon({
            iconUrl: marker,
            iconSize: [40,40]
            })


       for (let i = 0; i < this.item.length; i++) {
            var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + this.item[i].Location
            fetch(url)
                .then(response => response.json())
                .then(data => 
                {
                  const addressArr = data
                  console.log(addressArr[0]);
                  L.marker([addressArr[0].lat, addressArr[0].lon], { icon: myIcon })
                    .bindPopup(`<h1 width="300" height="300" >${33.51340843842325}</h1><h1 width="300" height="300" >${36.27665419318823}</h1>`)
                   .addTo(this.map);

                }
                )
                .catch(err => console.log(err))
        }
    }
  }

};
</script>

<style scoped>
#mapContainer {
        /* width: 80vw; */
        height: 75vh;
    position: relative;
    display: flex;
    /* justify-content: center; */
    /* align-items: center; */
    top: 16vh;
    justify-content: center;
    align-items: center;
    z-index: 100;
    position: absolute;
    right: 5%;
    width: 81%;
}

</style>