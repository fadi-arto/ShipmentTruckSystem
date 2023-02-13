<template>
  <div class="app">
    <div class="bd bgc-white">
      <div class="layers">
        <div class="layer w-100 p-20">
          <h6 class="lh-1">ALL Vehicle</h6>
        </div>
        <div class="layer w-100">
          <div class="bgc-light-blue-500 c-white p-20">
            <div class="peers ai-c jc-sb gap-40">
              <div class="peer peer-greed">

              </div>

            </div>
          </div>
          <div class="table-responsive p-20">
            <table class="table">
              <thead>
                <tr>
                  <th class="bdwT-0">Car_plate</th>
                  <th class="bdwT-0">Status</th>
                  <th class="bdwT-0">Driver Email</th>
                  <th class="bdwT-0">Type</th>
                  <th class="bdwT-0">Action</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="items in item" :key="items.id">
                  <td class="fw-600">Item #1 {{ items.Car_plate }}</td>
                  <td><span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">Unavailable</span>
                  </td>
                  <td>{{ items.Email }}</td>
                  <td><span class="text-success">{{ items.Type }}</span></td>
                  <td>
                    <v-btn color="gray" @click="DeleteOrder(items._id)" depressed>
                      <p>Delete</p>
                    </v-btn>
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
  props: ['image'],
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
      await axios.get('http://localhost:3000/managecar/Car_Company', {
        withCredentials: true
      }).then((res) => {
        this.item = res.data
        console.log(this.item)
      }).catch((err) => {
        console.log(err)
      })
    },
    async DeleteOrder(id) {
      console.log(id);
      try {
        await axios.delete(`http://localhost:3000/managecar/deletcar/${id}`);
        this.Create()
      } catch (err) {
        console.log(err);
      }
    }
  }

}
</script>

<style>
.action {
  display: flex;
  justify-content: center;
}

.app {
  position: absolute;
  right: 10%;
  width: 70%;
}
</style>