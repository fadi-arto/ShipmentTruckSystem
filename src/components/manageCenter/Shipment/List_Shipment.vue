<template>
  <div >
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
                  <th class="bdwT-0">Location</th>
                  <th class="bdwT-0">state</th>
                  <th class="bdwT-0">Car plate</th>
                  <th class="bdwT-0">Evaloation</th>
                  <th class="bdwT-0">Type_Of</th>
                  <th class="bdwT-0">Cost</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="items in item" :key="items.id">
                  <td class="fw-600">{{items.SourceLocation}}</td>
                  <td><span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">{{items.state}}</span>
                  </td>
                  <td><span class="text-success">{{items.Car_plate}}</span></td>
                  <td><span class="text-success">{{items.Evaloation}}</span></td>
                  <td><span class="text-success">{{items.Type_Of}}</span></td>
                  <td><span class="text-success">{{items.cost}}</span></td>
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
      await axios.get('http://localhost:3000/mangecenter/shipment_center',{withCredentials: true}).then((res) => {
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