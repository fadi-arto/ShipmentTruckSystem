<template>
  <div>
    <v-alert type="error" style="   position: absolute;right: 0px; border-radius: 20% 0% 0% 20%;" v-if="showingerr">{{
      error
    }}</v-alert>
    <v-alert type="info" v-if="ShowingResult">{{ Result }}</v-alert>
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
                      <label class="form-label" for="City">City</label>
                      <label class="form-label" for="ERROR">{{ error }}</label>


                      <input type="text" class="form-control" id="City" placeholder="City" v-model="City" required />
                      <p v-if="show" style="color:red">{{ error }}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label class="form-label" for="Location">Location</label>
                      <input type="text" class="form-control" id="Location" placeholder="Location" v-model="Location"
                        required />
                      <p v-if="show" style="color:red">{{ error }}</p>
                    </div>
                  </div>
                  <div class="row">
                    <div class="mb-3 col-md-6">
                      <label class="form-label" for="KEY">KEY</label>
                      <input type="text" class="form-control" id="KEY" placeholder="KEY" v-model="email" required />
                    </div>
                  </div>

                  <div class="row">
                    <div class="mb-3">
                      <v-btn color="info" @click="Create">ADD Ceneter </v-btn>
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
import { ref } from 'vue';

export default {
  data() {
    return {
      Location: '',
      email: '',
      City: ''
    }
  },
  setup() {
    return {
      Result: ref(''),
      ShowingResult: ref(false),
      showingerr: ref(false),
      error: ref(''),
      show: ref(false)
    }

  },
  methods: {
    async Create() {

   
      var address = document.querySelector("#Location")

      var url = "https://nominatim.openstreetmap.org/search?format=json&limit=3&q=" + address.value
      fetch(url)
        .then(response => response.json())
        .then(async data => {
          let naddress = data
          if (naddress.length == 0) {
            this.error = "the address is not available"
            this.show = true
          }
          else {
            this.show = false
            await axios.post('http://localhost:3000/mangecompany/create_center', {
              Location: this.Location,
              email: this.email,
              City: this.City
            }, {
              withCredentials: true,
            }).then((res) => {
              console.log(res)
              if (res.data === 'the email aleady exist') {
                this.error = 'the email aleady exist'
                this.ShowingResult = false
                this.showingerr = true
              }
              else if (res.data === 'Succucfully') {
                this.showingerr = false
                this.ShowingResult = true
                this.Result = 'Succucfully'
              }

            }).catch((err) => {
              console.log(err)
            })
          }
        })
        .catch(err => console.log(err))


    }
  }
}
</script>


<style>

</style>