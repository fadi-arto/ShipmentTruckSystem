<template>
    <div>
        <div id="mapContainer"></div>
        <h1>{{ id }}</h1>
    </div>
</template>
          
<script>
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import axios from "axios";
import { Icon } from "leaflet";

import marker from '../../../assets/image/icons8-shipment-642.png';

export default {
    props:['id'],
    data() {
        return {
            map: null,
            show: false,
            value: [],
            item: []
        };
    },
    mounted() {


        this.map = L.map("mapContainer").setView([35, 36], 13);
        L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
            attribution:
                'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
        }).addTo(this.map);
        console.log(this.id);
        this.Create(this.id)
    },
    methods:{
        async Create(id) {
      await axios.get(`http://localhost:3000/managecar/FindCarByID/${id}`, { withCredentials: true })
        .then(res => {
          this.item = res.data;
          console.log("ok");
          console.log(this.item.Location);
          const myIcon = new Icon({
        iconUrl: marker,
        iconSize: [40, 40]
      });
          const latlng = this.item.Location.split(',')
        L.marker([latlng[0], latlng[1]], { icon: myIcon })
              .bindPopup(`<h1 width="100" height="100" >KEY : ${this.item.Status}`).addTo(this.map);

        })
        .catch(err => {
          console.log(err);
        });
    },
    }
};
</script>
          
<style scoped>
#mapContainer {
    height: 52vh;
    z-index: 100;
    right: 0%;
    width: 100%;
    position: relative;
    top: 0;

}
</style>