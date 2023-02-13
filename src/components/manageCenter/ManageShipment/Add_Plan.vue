<template>
    <div class="app">

        <main class="main-content bgc-grey-100">
            <div id="mainContent">
                <div class="row gap-20 masonry pos-r">
                    <div class="masonry-sizer col-md-8"></div>
                    <div class="masonry-item col-md-8">
                        <div class="bgc-white p-20 bd">
                            <h3 class="c-grey-90A0">Add Plan</h3>
                            <div class="mT-30">
                                <form>
                                    <div class="row">
                                        <div class="mb-3 col-md-12">
                                            <label class="form-label" for="inputEmail4">Car</label>
                                            <input type="text" class="form-control" id="inputEmail4"
                                                placeholder="Car plate" v-model="Car" />
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="Date">Start Date</label>
                                            <input type="date" class="form-control" id="Date"
                                                placeholder="Date" v-model="Dates" />
                                        </div>
                                        <div class="mb-3 col-md-6">
                                            <label class="form-label" for="Date">Source </label>
                                            <input type="date" class="form-control" id="Date"
                                                placeholder="Date" v-model="Dates" />
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
    data() {
        return {
            Car: '',
            Dates: '',
            Quantity: '',
            Type: ''
        }
    },
    methods: {
        async Create() {
            await axios.post('http://localhost:3000/managecar/create', {
                CaR: this.Car,
                start_time: this.Dates,
                source_location: this.Quantity,
            }
                , {
                    withCredentials: true
                }
            ).then((res) => {
                console.log("");
                console.log(res)
            }).catch((err) => {
                console.log(err)
            })
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