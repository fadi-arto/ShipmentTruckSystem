<template>
  <div class="app" style="position: absolute;right: 10%;width: 70%;">
    <div class="bd bgc-white">
      <div class="layers">
        <div class="layer w-100 p-20">
          <h6 class="lh-1">Sales Report</h6>
        </div>
        <div class="layer w-100">
          <div class="bgc-light-blue-500 c-white p-20">
            <div class="peers ai-c jc-sb gap-40">
              <div class="peer peer-greed">
                <h5>November 2017</h5>
                <p class="mB-0">Sales Report</p>
              </div>
              <div class="peer">
                <h3 class="text-end">$6,000</h3>
              </div>
            </div>
          </div>
          <div class="table-responsive p-20">
            <table class="table">
              <thead>
                <tr>
                
                                <th class="bdwT-0">Email Driver</th>
                                <th class="bdwT-0">Destination</th>
                                <th class="bdwT-0">Car_plate</th>
                                <th class="bdwT-0">DateStart</th>
                        
                                <th class="bdwT-0">Price</th>
                                <th class="bdwT-0">Status</th>

                </tr>
              </thead>
              <tbody>
                <tr v-for="items in item" :key="items.id">
                  <td class="fw-600">#{{ items.key }} {{items.EmailSource}}</td>
                  <td><span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">{{ items.DistinationLocation }}</span>
                  </td>
                  <td>{{ items.Car_plate }}</td>
                  <td>{{ items.DateStart }}</td>
                  <td><span class="text-success">{{ items.cost }}</span></td>
                  <td><span class="badge bgc-blue-50 c-blue-700 p-10 lh-0 tt-c rounded-pill">{{ items.state }}</span>
                  </td>
                </tr>
             
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="ta-c bdT w-100 p-20"><a href="#">Check all the sales</a></div>
    </div>

  </div>
</template>
  
<script>
import axios from 'axios';
import { ref } from 'vue';

export default {
  data() {
    return {

    }
  },
  setup() {
    return {

      item: ref([])
    }

  },
  mounted() {
    this.Create()
  },
  methods: {
    async Create() {
      await axios.get('http://localhost:3000/mangecenter/find_centers_shipment',{ withCredentials: true,}).then((res) => {
        this.item = res.data
        console.log(this.item)
      }).catch((err) => {
        console.log(err)
      })
    },
    async DeleteOrder(id) {
      console.log(id);
      try {
        await axios.delete(`http://localhost:3000/mangecenter/deletcenter/${id}`);
        this.Create()
      } catch (err) {
        console.log(err);
      }
    }
  }

}
</script>

  
<style>
.app {
  position: absolute;
  right: 10%;
  width: 70%;
}
</style>
                          
                    
                  
  