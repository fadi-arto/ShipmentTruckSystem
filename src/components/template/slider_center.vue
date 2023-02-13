<template>
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
                  <h5 class="lh-1 mB-0 logo-text">Adminator</h5>
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
      <ul class="sidebar-menu scrollable pos-r" style="padding:0">
        <li class="nav-item mT-30 actived">
          <a class="sidebar-link" href="/">
            <span class="icon-holder">
              <i class="c-blue-500 ti-home"></i>
            </span>
            <span class="title">Dashboard</span>
          </a>
        </li>
        <li class="nav-item">
          <a class='sidebar-link' href="email.html">
            <span class="icon-holder">
              <i class="c-brown-500 ti-email"></i>
            </span>
            <span class="title">Email</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle">
            <span class="icon-holder">
              <i class="c-indigo-500 ti-bar-chart"></i>
            </span>
            <span class="title">Chart</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu tabless">
            <li>
              <a class='sidebar-link' href="center/Chart">Shipment Monthley</a>
            </li>
            <li>
              <a class='sidebar-link' href="center/Chart_Area">Type Shipment Report</a>
            </li>
           
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" >
            <span class="icon-holder">
              <i class="c-orange-500 ti-layout-list-thumb"></i>
            </span>
            <span class="title">Vechile</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu tabless">
            <li>
              <a class='sidebar-link' href="vechile-List">List vechile</a>
            </li>
            <li>
              <a class='sidebar-link' href="Map-vechile">Map vechile</a>
            </li>
            <li>
              <a class='sidebar-link' href="add-vechile">ADD vechile</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle">
            <span class="icon-holder">
              <i class="c-red-600 ti-home"></i>
            </span>
            <span class="title">Center</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu tabless">
            <li>
              <a class='sidebar-link' href="List-Centers">List Centers</a>
            </li>
            <li>
              <a class='sidebar-link' href="Map-Center">Map Centers</a>
            </li>
            <li>
              <a class='sidebar-link' href="Add-Center">ADD Center</a>
            </li>
            <li>
              <a class='sidebar-link' href="shipment-Center">Shipment Center</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" 
            aria-expanded="false">
            <span class="icon-holder">
              <i class="c-red-600 ti-home"></i>
            </span>
            <span class="title">Shipment</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu" >
            <li>
              <a class='sidebar-link' href="Add-Shipment">Add Shipment</a>
            </li>
            <li>
              <a class='sidebar-link' href="List-Center">List Centers</a>
            </li>
  
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="sidebar-link" href="ui.html">
            <span class="icon-holder">
              <i class="c-pink-500 ti-palette"></i>
            </span>
            <span class="title">UI Elements</span>
          </a>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle">
            <span class="icon-holder">
              <i class="c-orange-500 ti-layout-list-thumb"></i>
            </span>
            <span class="title">Tables</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu tabless">
            <li>
              <a class='sidebar-link' href="basic-table.html">Basic Table</a>
            </li>
            <li>
              <a class='sidebar-link' href="datatable.html">Data Table</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="icon-holder">
              <i class="c-purple-500 ti-map"></i>
            </span>
            <span class="title">Maps</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a href="google-maps.html">Google Map</a>
            </li>
            <li>
              <a href="vector-maps.html">Vector Map</a>
            </li>
          </ul>
        </li>
        <li class="nav-item dropdown">
          <a class="dropdown-toggle" href="javascript:void(0);">
            <span class="icon-holder">
              <i class="c-red-500 ti-files"></i>
            </span>
            <span class="title">Pages</span>
            <span class="arrow">
              <i class="ti-angle-right"></i>
            </span>
          </a>
          <ul class="dropdown-menu">
            <li>
              <a class='sidebar-link' href="blank.html">Blank</a>
            </li>
            <li>
              <a class='sidebar-link' href="404.html">404</a>
            </li>
            <li>
              <a class='sidebar-link' href="500.html">500</a>
            </li>
            <li>
              <a class='sidebar-link' href="signin.html">Sign In</a>
            </li>
            <li>
              <a class='sidebar-link' href="signup.html">Sign Up</a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  
  $(document).ready(function(){
    $('.sidebar .sidebar-menu li').on('click', function () {
      $(this).toggleClass('open')
    });
  });
  export default {
     methods: {
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
  }
  </script>
  
  <style>
  @import url('../../assets/style/style.css');
  
  .fa-house-user:before {
    content: "\e065";
  }
  
  .active_dropdown {
    display: block;
  }
  </style>
