<template>
  <div>
    <v-alert v-if="results" border="top" color="blue" dismissible elevation="24" outlined shaped text type="success"
      style="z-index: 10;width: 20%; float: right;border-radius: 10px 38px 10px 38px;">
      {{ message }}
    </v-alert>
    <div class="email-wrapper row remain-height pos-r scrollable bgc-white">
      <div class="email-content open no-inbox-view">
        <div class="email-compose">
          <div class="d-n@md+ p-20">
            <a class="email-side-toggle c-grey-900 cH-blue-500 td-n" href="javascript:void(0)">
              <i class="ti-menu"></i>
            </a>
          </div>
          <form class="email-compose-body">
            <h4 class="c-grey-900 mB-20">Send Message</h4>
            <div class="send-header">
              <div class="mb-3">
                <textarea name="compose" v-model="message" class="form-control" placeholder="Say Hi..."
                  rows='10'></textarea>
              </div>
            </div>
            <div id="compose-area"></div>
            <div class="text-end mrg-top-30">
              <button class="btn btn-danger btn-color" style="background :#2196f3; border: none;"
                @click="SendEmail">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import * as $ from 'jquery';
import axios from 'axios';
import { ref } from 'vue'
export default {
  data() {
    return {

    }
  },
  setup() {
    let message = ref('')
    let results = ref(false)
    return { message, results }
  },
  mounted() {
    $('.email-side-toggle').on('click', e => {
      $('.email-app').toggleClass('side-active');
      e.preventDefault();
    });

    $('.email-list-item, .back-to-mailbox').on('click', e => {
      $('.email-content').toggleClass('open');
      e.preventDefault();
    });
  },
  methods: {
    async SendEmail(e) {
      e.preventDefault();
      await axios.post('http://localhost:3000/mangecenter/addNotfication', { data: this.message }
        , { withCredentials: true }).then((res) => {
          console.log(res.data)
          if (res.data === "the message Sender") {
            this.results = true
            this.message = 'Done'
          }
        }).catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>