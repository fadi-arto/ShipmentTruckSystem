<template>
    <div id="mapContainer">
      
    </div>
    

  </template>
  
  <script>
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";
  
  export default {
    name: "LeafletMap",
    data() {
      return {
        map: null,
        value:[]
      };
    },
    mounted() {
      this.map = L.map("mapContainer").setView([33.510414, 36.278336], 12);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
              attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          }).addTo(this.map);

          var taxiIcon = L.icon({
            iconUrl: '../',
            iconSize: [40, 40]
        })

        // var marker = L.marker([e.latlng.lat, e.latlng.lng], { icon: taxiIcon })
        //     .bindPopup(`<h1 width="300" height="300" >${33.51340843842325}</h1><h1 width="300" height="300" >${36.27665419318823}</h1>`)
        //     .addTo(this.map);

        var marker2 = L.marker([33.510414, 36.278336], { icon: taxiIcon }).addTo(this.map);
        console.log(marker2._latlng.lat);
          
      this.map.on('click', function (e) {
      

  console.log(e.latlng)
  this.value = e.latlng
  console.log(this.value);
  })
  
  
    },
  
  };
  </script>
  
  <style scoped>
  #mapContainer {
    width: 100vw;
    height: 100vh;
  }
  </style>
  