<template>
  <div class="app">
  
    <div class="peers ai-s fxw-nw h-100vh">
      <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv imagess"></div>
      <div
        class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r"
        style="min-width: 320px;"
      >
        <h4 class="fw-300 c-grey-900 mB-40">Login</h4>
        <form>
          <div class="mb-3">
            <label class="text-normal text-dark form-label">Email</label>
            <input type="text" v-model="email" class="form-control" placeholder="email Driver" />
          </div>
          <div class="mb-3">
            <label class="text-normal text-dark form-label">Car_Plate</label>
            <input type="text" v-model="Car_Plate" class="form-control" placeholder="John Doe" />
          </div>
          <div class>
            <div class="peers ai-c jc-sb fxw-nw">
              <div class="peer">
                <div class="checkbox checkbox-circle checkbox-info peers ai-c">
                  <input
                    type="checkbox"
                    value="true"
                    id="inputCall1"
                    name="inputCheckboxesCall"
                    class="peer active"  />
              
                </div>
              </div>
              <div class="peer">
                <v-btn color="info" style="background:#2196f3" @click="SignIES">login</v-btn>
              </div>
            </div>  
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
        Car_Plate: "",
        email: ""
    };
  },
  methods: {
    async SignIES() {
      try {
        let data = {
            email: this.email,
          password: this.Car_Plate
        };
        let request = {
          url: "http://localhost:3000/managecar/login",
          withCredentials: true,
          method: "post",
          headers: {
            "Content-type": "application/json"
          },
          data: JSON.stringify(data)
        };
        const response = await axios(request);
        console.log(response.data);
        console.log(response.status);
        if(response.data === 'Signed in Vehicle') {
          this.$router.push({ name: 'Vehicle' })
        }
        else if(response.data === 'Error Signed in') {
          this.$router.push({ name: 'login_Vechile' })
        }
        return response;
      } catch (err) {
        console.log(err);
      }
    }
  }
};

</script>
  <style>
.app {
  width: 90%;
  border-radius: 21%;
  border: solid rgb(208, 208, 255) 2px;
  overflow: hidden;
  box-shadow: 10px 10px 10px 10px #888888;
  align-items: center;
  position: fixed;
  height: 90%;
  left: 5%;
  top: 5%;
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
.imagess {
  background-image: url("../../assets/image/thumbnail.jpg");
}
.spinner {
  width: 40px;
  height: 40px;
  position: absolute;
  top: calc(50% - 20px);
  left: calc(50% - 20px);
  background-color: rgb(102, 57, 57);
  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>