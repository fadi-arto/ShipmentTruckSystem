import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import VCalendar from 'v-calendar';
import Vuetify from 'vuetify'
import Vue3Leaflet from 'vue3-leaflet'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import 'leaflet/dist/leaflet.css'
import MyJsFile from '../src/components/Center/Charts/index.js';
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.js'

const vuetify = createVuetify({
  components,
  directives,
})


// Use plugin with default

createApp(App)
.use(VCalendar)
.use(MyJsFile)
.use(vuetify)
.use(Vue3Leaflet)
.use(Vuetify,{
  iconfont: 'mdi'
})
  .use(router)
  .mount('#app')

  
