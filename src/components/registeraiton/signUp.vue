<template>
  <div class="apps">
  
    <div class="peers ai-s fxw-nw h-100vh">
      <div class="peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv imagess">
      </div>
      <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style="min-width: 320px;">
        <h4 class="fw-300 c-grey-900 mB-40">Register</h4>
        <form>
          <div class="mb-3">
            <label class="form-label text-normal text-dark">Username</label>
            <input v-model="Name" type="text" class="form-control" Placeholder='John Doe'>
          </div>
          <div class="mb-3">
            <label class="form-label text-normal text-dark">Email Address</label>
            <input v-model="email" type="email" class="form-control" Placeholder='name@email.com'>
          </div>
          <div class="mb-3">
            <label class="form-label text-normal text-dark">phone Number</label>
            <input v-model="phone" type="phone" class="form-control" Placeholder='+963932095951'>
          </div>
          <div class="mb-3">
            <label class="form-label text-normal text-dark">Password</label>
            <input v-model="password" type="password" class="form-control" placeholder="Password">
          </div>
          <div class="mb-3">
            <label class="form-label text-normal text-dark">Confirm Password</label>
            <input v-model="confirm_password" type="password" class="form-control" placeholder="Password">
          </div>
          <div class="mb-3">
            <v-select v-model="selectedGender" :items="genders" label="Select Gender">{{  selectedGender}}</v-select>
          </div>
          <div class="mb-3">
            <v-btn color="info" @click="Signup">Register </v-btn>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      Name: "",
      phone: "",
      gender: "",
      password: "",
      email: '',
      confirm_password: '',
      selectedGender: '',
      genders: ["Male", "Female"]
        }
  },
  methods: {
    async Signup() {
      try {

        let data = {
          Name: this.Name,
          email: this.email,
          phone: this.phone,
          gender: this.gender,
          password: this.password,
          confirm_password: this.confirm_password
        };
        let request = {
          url: "http://localhost:3000/mangeclint/Add_Client",
          withCredentials: true,
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          data: JSON.stringify(data)
        };
        const response = await axios(request)
        console.log(response.data);
        return response;
      }
      catch (err) {
        console.log(err);
      }
    }
  }
}

</script>

<style>
.apps {
  width: 90%;
    display: inline-block;
    /* border-radius: 21%; */
    /* border: solid rgb(208, 208, 255) 2px; */
    /* overflow: hidden; */
    /* box-shadow: 10px 10px 10px 10px #888888; */
    align-items: center;
    /* position: fixed; */
    height: 8%;
    left: 5%;
    /* display: contents; */
    /* top: 5%; */
    position: fixed;
    top: 0;
}

#loader {
  transition: all 0.3s ease-in-out;
  opacity: 1;
  visibility: visible;
  position: fixed;
  height: 100vh;
  width: 100%;
  background: #fff;
  z-index: 90000;
}

#loader.fadeOut {
  opacity: 0;
  visibility: hidden;
}

.spinner {
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
  animation: sk-scaleout 1.0s infinite ease-in-out;
}

.imagess {
  background-image: url("../../assets/image/pexels-lara-jameson-8828638.jpg");
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0)
  }

  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }

  100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>