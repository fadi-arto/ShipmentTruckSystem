<template>
<div >
    <div class="bd bgc-white">
      <div class="layers">
        <div class="layer w-100 p-20">
          <h6 class="lh-1">LIST CENTERS</h6>
        </div>
        <div class="layer w-100">
          <div class="c-white p-20" style="background:#02adf0">
            
          </div>
          <div class="table-responsive p-20">
            <table class="table">
              <thead style="font-size:15px">
                <tr>
                  <th class="bdwT-0">Center KEY</th>
                  <th class="bdwT-0">Location</th>
                  <th class="bdwT-0">Branch</th>
                  <th class="bdwT-0">Create</th>
                  <th class="bdwT-0">Comapny name</th>
                  <th class="bdwT-0">City</th>
                  <th class="bdwT-0">Action </th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="items in item" :key="items.id">
                  <td class="fw-600">Item # {{ items.email }}</td>
                  <td><span class="badge bgc-red-50 c-red-700 p-10 lh-0 tt-c rounded-pill">{{ items.Location }}</span>
                  </td>                  
                  <td>{{ items.branch }}</td>
                  <td>{{ items.createdAt }}</td>
                  <td style="    text-align: center;">{{ items.Company }}</td>
                  <td><span class="text-success">{{items.City}}</span></td>
                  <td >
                                    <v-btn color="gray" @click="DeleteOrder(items._id)" depressed>
                                     <p  >Delete</p>   
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
import {ref} from 'vue';

export default {
  data () {
    return {

    }
  },
  setup(){
    return {
    
      item: ref([])
    }

  },
  mounted () {
    this.Create()
  },
  methods: {
    async Create () {
      await axios.get('http://localhost:3000/mangecenter/findAllcenters',{
                            withCredentials: true,
                          }).then((res) => {
        this.item = res.data
        console.log(this.item)
      }).catch((err) => {
        console.log(err)
      })
    },
    async DeleteOrder(id){
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
.action{
    display: flex;
    justify-content: center;
}
</style>