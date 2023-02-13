<template>
<div class="app">

     <main class="main-content bgc-grey-100">
        <div id="mainContent">
          <div class="row gap-20 masonry pos-r">
            <div class="masonry-sizer col-md-8"></div>
            <div class="masonry-item col-md-8">
              <div class="bgc-white p-20 bd">
                <h3 class="c-grey-90A0">Add vechile</h3>
                <div class="mT-30">
                  <form>
                    <div class="row">
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="inputEmail4">Your Driver Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" v-model="Email"/>
                      </div>
                      <div class="mb-3 col-md-6">
                        <label class="form-label" for="Car_plate">Car_plate</label>
                        <input type="text" class="form-control" id="Car_plate" placeholder="Car_plate" v-model="Car_plate" />
                      </div>
                    </div>
                   
                    <div class="row">
                      <div class="mb-3">
                        <label class="form-label" for="Quantity">Quantity KG</label>
                        <input type="number" class="form-control" id="Quantity" placeholder="Quantity" v-model="Quantity" />
                      </div>
                   
                    </div>
                    <div class="row">
                      <div class="mb-3">
                        <label class="form-label" for="Type">Type</label>
                        <input type="text" class="form-control" id="Type" placeholder="Type" v-model="Type" />
                      </div>
                   
                    </div>
                    <div class="row">
                      <div class="mb-3">
                        <v-btn color="info" @click="Create">ADD Vechile </v-btn>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
</div>
</template>

<script>
import axios from 'axios';

export default {
  data () {
    return {
      Email: '',
      Car_plate:'',
      Quantity:'',
      Type:''
    }
  },
  methods: {
    async Create () {
      await axios.post('http://localhost:3000/managecar/create', {
        Email: this.Email,
        Car_plate: this.Car_plate,
        Quantity: this.Quantity,
        Type: this.Type
      }
      , {
          withCredentials: true
        }
        ).then((res) => {
        console.log(res)
      }).catch((err) => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
.app{
  position: absolute;
  right: 10%;
  width: 70%;
}
</style>