<template>
  <div >
    <div id="mapContainer"></div>
  </div>
</template>
        
<script>
import axios from "axios";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { ref } from "vue";
import { Icon } from "leaflet";
import marker from "./icons8-shipment-642.png";
export default {
  name: "LeafletMap",
  data() {
    return {
      map: null,
      value: [],
      item: []
    };
  },
  components: {
    
  },
  mounted() {
    this.Create();
    this.map = L.map("mapContainer").setView([33.510414, 36.278336], 7);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  },
  methods: {
    async Create() {
      await axios
        .get("http://localhost:3000/mangecenter/find_centers", {
          withCredentials: true
        })
        .then(res => {
          this.item = res.data;
          console.log("2");
          console.log(this.item);
          this.show_centers();
        })
        .catch(err => {
          console.log(err);
        });
    },
    async show_centers() {
      const myIcon = new Icon({
        iconUrl: marker,
        iconSize: [40, 40]
      });
let arr = [ ]
      for (let i = 0; i < this.item.length; i++) {
                  arr.push(this.item[i].City);
                    arr.push(this.item[i].Location);
                    let textss = arr.join(",");
                    console.log(textss);
        var url =
          "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" +
          textss;
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
          arr = []
      }
    }
  }
};
</script>
        
<style scoped>
#mapContainer {
  /* width: 80vw; */
  height: 70vh;
  width: 100%;
}
</style>