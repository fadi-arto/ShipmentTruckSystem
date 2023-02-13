<template>
 <div class="email-wrapper row remain-height pos-r scrollable bgc-white">
                <div class="email-content open no-inbox-view">
                  <div class="email-compose">
                    <div class="d-n@md+ p-20">
                      <a class="email-side-toggle c-grey-900 cH-blue-500 td-n" href="javascript:void(0)">
                        <i class="ti-menu"></i>
                      </a>
                    </div>
                    <form class="email-compose-body">
                      <h4 class="mB-20">Send Message</h4>
                      <div class="send-header">
                        <div class="mb-3">
                          <input type="email" v-model="TOemail"  class='form-control' placeholder="To">
                        </div>
                        <div class="mb-3">
                          <input type="text"  class='form-control' placeholder="CC">
                        </div>
                        <div class="mb-3">
                          <input class="form-control" v-model="title"   placeholder="Email Subject">
                        </div>
                        <div class="mb-3">
                          <textarea name="compose" v-model="Text"  class="form-control" placeholder="Say Hi..." rows='10'></textarea>
                        </div>
                      </div>
                      <div id="compose-area"></div>
                      <div class="text-end mrg-top-30">
                        <p class="btn btn-danger btn-color" @click="Send" style="background :#02adf0; border: none;">Send</p>
                      </div>
                    </form>
                  </div>
                </div>
              </div>  
</template>

<script>
import axios from 'axios'
export default {
  data(){
    return{
      Text:"",
      title:"",
      TOemail:""
    }
  },
  methods:{
    async Send(){
    await axios.post('http://localhost:3000/mangecenter/addNotfication' , { 
      Text : this.Text,
      title : this.title,
      TOemail : this.TOemail
    }, { withCredentials: true })
                .then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
  }
  }

}
</script>

<style>

</style>