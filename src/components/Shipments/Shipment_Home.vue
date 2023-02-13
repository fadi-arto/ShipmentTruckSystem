<template>
    <div class="app">
      <div>
        <!-- #Left Sidebar ==================== -->
        <div class="sidebar">
          <div class="sidebar-inner">
            <!-- ### $Sidebar Header ### -->
            <div class="sidebar-logo">
              <div class="peers ai-c fxw-nw">
                <div class="peer peer-greed">
                  <a class="sidebar-link td-n" href="/">
                    <div class="peers ai-c fxw-nw">
                      <div class="peer">
                        <div class="logo">
                          <!-- <img src="../../assets/images" alt=""> -->
                        </div>
                      </div>
                      <div class="peer peer-greed">
                     
                        <h5 class="lh-1 mB-0 logo-text"> 
                        <i class="fas fa-yin-yang"></i>
                        Adminator
                        </h5>
                      </div>
                    </div>
                  </a>
                </div>
                <div class="peer">
                  <div class="mobile-toggle sidebar-toggle">
                    <a href="" class="td-n" @click="arrow_sidebar">
                      <i class="ti-arrow-circle-left"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
  
            <!-- ### $Sidebar Menu ### -->
            <ul class="sidebar-menu scrollable pos-r">
              <li class="nav-item">
                <a class="sidebar-link" @click="pages('Add')">
                  <span class="icon-holder">
                    <i class="c-red-600 ti-home"></i>
                                  </span>
                  <span class="title">ADD Center</span>
                </a>
              </li>
              <li class="nav-item">
                <a class="sidebar-link" @click="pages('list')">
                  <span class="icon-holder">
                    <i class="c-orange-500 ti-layout-list-thumb"></i>

                            </span>
                  <span class="title">List vechile</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
  
        <!-- #Main ============================ -->
        <div class="page-container">
          <!-- ### $Topbar ### -->
          <headers />
          <div class="home">
            <main class="main-content">
              <div id="mainContent">
                <div class="add_vechile" v-if="show === 'Add'">
                  <Add_Shipment />
                </div>
                <div class="list_vechile" v-if="show === 'list'">
                  <List_Shipment />
                </div>
              </div>
            </main>
          </div>
  
          <!-- ### $App Screen Content ### -->
  
          <!-- ### $App Screen Footer ### -->
          <footers />
        </div>
      </div>
    </div>
  </template>
      
  <script>
  import footers from "../template/footer.vue";
  import headers from "../template/header.vue";
  import sliders from "../template/slider.vue";
  import Add_Shipment from "../manageCenter/Shipment/Add_Shipment.vue";
  import List_Shipment from "../manageCenter/Shipment/List_Shipment.vue";


  import { ref } from "vue";
  
  export default {
    data() {
      return {};
    },
    setup() {
      let show = ref("Add");
      return { show };
    },
    components: {
      footers,
      headers,
      sliders,
      Add_Shipment,
      List_Shipment,
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
  .sidebar{
    z-index: 9999;
  }
  
  </style>