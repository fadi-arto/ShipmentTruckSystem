<template>
  <div >
    <div id="mapContainer"></div>
  </div>
</template>
          
<script>
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import axios from "axios";
import { Icon } from "leaflet";

import marker from '../../../assets/image/icons8-shipment-642.png';

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
    show_function() {
      this.show = !this.show;
    },
  },
  mounted() {
    this.map = L.map("mapContainer").setView([35, 36], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
    }).addTo(this.map);
  },
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