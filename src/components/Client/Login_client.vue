<template>
    <div class="app">
        <div id='loader'>
            <div class="spinner"></div>
        </div>
        <div class="peers ai-s fxw-nw h-100vh">
            <div class="d-n@sm- peer peer-greed h-100 pos-r bgr-n bgpX-c bgpY-c bgsz-cv imagess">
            </div>
            <div class="col-12 col-md-4 peer pX-40 pY-80 h-100 bgc-white scrollable pos-r" style="min-width: 320px;">
                <h4 class="fw-300 c-grey-900 mB-40">Login</h4>
                <form>
                    <div class="mb-3">
                        <label class="text-normal text-dark form-label">KEY Shipment</label>
                        <input type="text" v-model="email" class="form-control" placeholder="John Doe">
                    </div>
                    <div class="">
                        <div class="peers ai-c jc-sb fxw-nw">
                            <div class="peer">
                                <v-btn color="info" @click="SignIES">login </v-btn>
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
            password: "12345",
            email: '',
        }
    },
    methods: {
        async SignIES() {
            try {

                let data = {
                    email: this.email,
                    password: this.password,
                };
                let request = {
                    url: "http://localhost:3000/mangecenter/login",
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
window.addEventListener('load', function load() {
    const loader = document.getElementById('loader');
    setTimeout(function () {
        loader.classList.add('fadeOut');
    }, 0);
});
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
    background-image: url('../../assets/image/thumbnail.jpg');
}

.spinner {
    width: 40px;
    height: 40px;
    position: absolute;
    top: calc(50% - 20px);
    left: calc(50% - 20px);
    background-color: rgb(102, 57, 57);
    border-radius: 100%;
    -webkit-animation: sk-scaleout 1.0s infinite ease-in-out;
    animation: sk-scaleout 1.0s infinite ease-in-out;
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