<template>
  <div class="app">
    <div>
      <!-- #Left Sidebar ==================== -->
      <div class="page-container">

        <div class="home">
          <main class="main-content bgc-grey-100">
            <div id="mainContent">
              <div class="map_vechile" v-if="show === 'map'">
                <map_Center />
              </div>
              <div class="map_vechile" v-if="show === 'Shipment'">
                <shipment_Center />
              </div>
              <div class="add_vechile" v-if="show === 'Add'">
                <add_Center />
              </div>
              <div class="list_vechile" v-if="show === 'list'">
                <list_Centers />
              </div>
            </div>
          </main>
        </div>

        <!-- ### $App Screen Content ### -->

        <!-- ### $App Screen Footer ### -->
      </div>
    </div>
  </div>
</template>
    
<script>

import add_Center from "../Company/Centers/Add_Center.vue";
import list_Centers from "./Centers/list-Center.vue";
import shipment_Center from "./shipment-Center";
import map_Center from "./map-Center";

import { ref } from "vue";

export default {
  data() {
    return {};
  },
  setup() {
    let show = ref("Shipment");
    return { show };
  },

  methods: {
    pages(location) {
      console.log("location");

      console.log(location);
      this.show = location;
    },
    search_toggle(e) {
      $('.search-box, .search-input').toggleClass('active');
      $('.search-input input').focus();

      e.preventDefault();
    },
    sidbar_menu(e) {
      console.log("s");
      e.preventDefault();
      $('.sidebar').toggleClass('active_sidebar');
      $('.sidebar').removeClass('sidebar2')

    },
    arrow_sidebar(e) {
      e.preventDefault();
      $('.sidebar').removeClass('active_sidebar')

    }
  },

};
</script>
    
<style>
.sidebar {
  z-index: 9999;
}
</style>