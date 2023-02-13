<template>
  <div>
    <v-btn color="success" @click="change">Success</v-btn>
    <v-card v-if="!show" class="mx-auto" color="#26c6da" dark max-width="400">


      <v-card-text class="headline font-weight-bold">
        <!-- <div id="map" style="width:100%; height: 100vh"></div> -->
<h1>fsjozdflisdjls</h1>
      </v-card-text>

 
    </v-card>
  </div>
</template>

<script>
   var map = L.map('map').setView([33.510414, 36.278336], 16)
        var osm = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        });
        
        osm.addTo(map);


        // print the current location i click
        map.on('click', function (e) {

            console.log(e.latlng)
        })


export default {
  data() {
    return {
      show: true
    }
  },
  setup() {

  },
  methods: {
    change() {
      this.show = !this.show;
      console.log('change')
    }
  }
}
</script>

<style>

</style>