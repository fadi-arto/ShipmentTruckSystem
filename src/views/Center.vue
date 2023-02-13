<template>
    <div>
        <div class="sidebar">
            <div class="sidebar-inner">
                <div class="sidebar-logo">
                    <div class="peers ai-c fxw-nw">
                        <div class="peer peer-greed">
                            <a class="sidebar-link td-n" href="/">
                                <div class="peers ai-c fxw-nw">
                                    <div class="peer">
                                        <div class="logo">

                                            <v-img src="./STSB.png" alt="John"></v-img>

                                        </div>
                                    </div>
                                    <div class="peer peer-greed">
                                        <h5 class="lh-1 mB-0 logo-text">TRACKING</h5>
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
                    <li class="nav-item mT-30">
                        <a class="sidebar-link" @click="pages('Dashboard')">
                            <span class="icon-holder">
                                <i class="c-blue-500 ti-home"></i>
                            </span>
                            <span class="title">Dashboard</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="sidebar-link" @click="pages('Calender')">
                            <span class="icon-holder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-calendar-date" viewBox="0 0 16 16">
                                    <path
                                        d="M6.445 11.688V6.354h-.633A12.6 12.6 0 0 0 4.5 7.16v.695c.375-.257.969-.62 1.258-.777h.012v4.61h.675zm1.188-1.305c.047.64.594 1.406 1.703 1.406 1.258 0 2-1.066 2-2.871 0-1.934-.781-2.668-1.953-2.668-.926 0-1.797.672-1.797 1.809 0 1.16.824 1.77 1.676 1.77.746 0 1.23-.376 1.383-.79h.027c-.004 1.316-.461 2.164-1.305 2.164-.664 0-1.008-.45-1.05-.82h-.684zm2.953-2.317c0 .696-.559 1.18-1.184 1.18-.601 0-1.144-.383-1.144-1.2 0-.823.582-1.21 1.168-1.21.633 0 1.16.398 1.16 1.23z" />
                                    <path
                                        d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z" />
                                </svg>
                            </span>
                            <span class="title">Calender</span>
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class='sidebar-link' @click="pages('Email')">
                            <span class="icon-holder">
                                <i class="c-brown-500 ti-email"></i>
                            </span>
                            <span class="title">Email</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown open1" @click="getopen1">
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
                            <li @click="pages('Chart_Line')">
                                <a class='sidebar-link'>Transporting Shipment Rate</a>
                            </li>
                            <li @click="pages('All_Chart')">
                                <a class='sidebar-link'>Shiping Monthley</a>
                            </li>
                            <li @click="pages('Chart_Area')">
                                <a class='sidebar-link'>Type Shipment Report</a>
                            </li>

                        </ul>
                    </li>
                    <li class="nav-item dropdown open2" @click="getopen2">
                        <a class="dropdown-toggle">
                            <span class="icon-holder">
                                <i class="c-orange-500 ti-truck"></i>
                            </span>
                            <span class="title">Vechile</span>
                            <span class="arrow">
                                <i class="ti-angle-right"></i>
                            </span>
                        </a>
                        <ul class="dropdown-menu tabless">
                            <li>
                                <a class='sidebar-link' @click="pages('List_Vechile')">List vechile</a>
                            </li>
                            <li>
                                <a class='sidebar-link' @click="pages('Map_Vechile')">Map vechile</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown open3" @click="getopen3">
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
                                <a class='sidebar-link' @click="pages('List_Centers')">List Centers</a>
                            </li>
                            <li>
                                <a class='sidebar-link' @click="pages('Map_Center')">Map Centers</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item dropdown open4" @click="getopen4">
                        <a class="dropdown-toggle" aria-expanded="false">
                            <span class="icon-holder">
                                <i class="c-red-600 ti-package"></i>
                            </span>
                            <span class="title">Shipment</span>
                            <span class="arrow">
                                <i class="ti-angle-right"></i>
                            </span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class='sidebar-link' @click="pages('Add_Shipment')">Add Shipment</a>
                            </li>
                            <li>
                                <a class='sidebar-link' @click="pages('List_Shipment')">List Shipment </a>
                            </li>

                        </ul>
                    </li>
                    <li class="nav-item">
                        <a class="sidebar-link" @click="pages('Client')">
                            <span class="icon-holder">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                    class="bi bi-people-fill" viewBox="0 0 16 16">
                                    <path
                                        d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                </svg>

                            </span>
                            <span class="title">Client</span>
                        </a>
                    </li>
                    <li class="nav-item dropdown open5" @click="getopen5">
                        <a class="dropdown-toggle" aria-expanded="false">
                            <span class="icon-holder">
                                <i class="c-red-600 ti-home"></i>
                            </span>
                            <span class="title">Plan Shipment</span>
                            <span class="arrow">
                                <i class="ti-angle-right"></i>
                            </span>
                        </a>
                        <ul class="dropdown-menu">
                            <li>
                                <a class='sidebar-link' @click="pages('Add_Plan')">Add Plan</a>
                            </li>
                            <li>
                                <a class='sidebar-link' @click="pages('List_Plan')">List Plan</a>
                            </li>
                            <li>
                                <a class='sidebar-link' @click="pages('List_Plan_Done')">List Plan Done</a>
                            </li>

                        </ul>
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
        </div>
        <div class="page-container">
            <headers :image="image" :Name="Name" />
            <div class="home">
                <main class="main-content">
                    <div id="mainContent">
                        <div class="All_Chart" v-if="show === 'All_Chart'">
                            <All_Chart />
                        </div>
                        <div class="Email" v-if="show === 'Email'">
                            <Email />
                        </div>
                        <div class="chart_Line" style="margin: 11px;" v-if="show === 'Chart_Line'">
                            <Chart_Lines />
                        </div>
                        <div class="list_vechile" style="margin: 11px;" v-if="show === 'Chart_Area'">
                            <Chart_Areas />
                        </div>
                        <div class="list_vechile" style="margin: 11px;" v-if="show === 'List_Vechile'">
                            <List_Vechile />
                        </div>
                        <div class="Map_Vechile" v-if="show === 'Map_Vechile'">
                            <Map_Vechile />
                        </div>
                        <div class="Add_Shipment" style="margin: 11px;" v-if="show === 'Add_Shipment'">
                            <Add_Shipment />
                        </div>
                        <div class="List_Shipment" style="margin: 11px;" v-if="show === 'List_Shipment'">
                            <List_Shipment />
                        </div>
                        <div class="Add_Plan" v-if="show === 'Add_Plan'">
                            <Add_Plan />
                        </div>
                        <div class="List_Plan" v-if="show === 'List_Plan'">
                            <List_Plan />
                        </div>
                        <div class="Calender" v-if="show === 'Calender'">
                            <Calender />
                        </div>
                        <div class="Dashboard" style="margin: 11px;" v-if="show === 'Dashboard'">
                            <Dashboard />
                        </div>
                        <div class="List_Centers" style="margin: 11px;" v-if="show === 'List_Centers'">
                            <List_Centers />
                        </div>
                        <div class="Map_Center" style="margin: 11px;" v-if="show === 'Map_Center'">
                            <Map_Center />
                        </div>
                        <div class="List_Plan_Done" style="margin: 11px;" v-if="show === 'List_Plan_Done'">
                            <List_Plan_Done />
                        </div>
                        <div class="Client" style="margin: 11px;" v-if="show === 'Client'">
                            <Client />
                        </div>
                    </div>
                </main>

            </div>
        </div>
    </div>
</template>

<script>
import $ from 'jquery';
import { ref } from 'vue'
import footers from '../components/template/footer.vue';
import headers from '../components/template/header_center.vue';
import sliders from '../components/template/slider_center.vue';
import Chart_Areas from '../components/Center/Charts/Chart_Area'
import Chart_Lines from '../components/Center/Charts/Cart_Line.vue';
import List_Vechile from '../components/Center/Vechile/List_Vechile.vue'
import Map_Vechile from '../components/Center/Vechile/Map_Vechile.vue'
import Add_Shipment from '../components/Center/Shipment/Add_Shipment'
import List_Shipment from '../components/Center/Shipment/List_Shipment'
import Add_Plan from '../components/Center/ManageShipment/Add_Plan.vue'
import List_Plan from '../components/Center/ManageShipment/List_Plan.vue'
import List_Plan_Done from '../components/Center/ManageShipment/PlanDone.vue'
import All_Chart from '../components/Center/Charts/Chart.vue'
import Email from '../components/Center/Email/Email.vue'
import Calender from '../components/Center/Calender/Calender.vue'
import Dashboard from '../components/Center/Dashboard/Dashboard.vue'
import List_Centers from '../components/Center/Centers/list-Center.vue'
import Map_Center from '../components/Center/Centers/map-Center.vue'
import Client from '../components/registeraiton/signUp'
import axios from 'axios'
export default {
    name: 'HomeView',
    setup() {

        let image = ref('');
        let Name = ref('');
        let show = ref('Dashboard');

        return { show, image, Name };
    },
    mounted() {
        this.images()
    },
    async beforeMount() {
        await axios.get('http://localhost:3000/mangecenter/Authorization', { withCredentials: true })
            .then((res) => {
                console.log(res)
                if (res.data === "not authenticated like Center") {
                    this.$router.push({ name: "loginCenter" });
                }
                if (res.data === "sory you are not Center") {
                    this.$router.push({ name: "loginCenter" });
                }
            }).catch((err) => {
                console.log(err)
            })
    },
    methods: {

        async images() {
            await axios.get('http://localhost:3000/mangecenter/GET_IMAGE', { withCredentials: true })
                .then((res) => {
                    console.log(res)
                    this.image = res.data.Image
                    this.Name = res.data.email
                }).catch((err) => {
                    console.log(err)
                })
        },
        pages(location) {
            this.show = location;
            console.log("this.show is equal " + this.show);
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

        },
        getopen1(e) {
            $(".open1").toggleClass('open');
        },
        getopen2(e) {
            $(".open2").toggleClass('open');
        },
        getopen3(e) {
            $(".open3").toggleClass('open');
        },
        getopen4(e) {
            $(".open4").toggleClass('open');
        },
        getopen5(e) {
            $(".open5").toggleClass('open');
        },

    },
    components: {
        footers,
        headers,
        Map_Center,
        sliders,
        Email,
        Dashboard,
        Chart_Lines,
        Calender,
        List_Vechile,
        Map_Vechile,
        Add_Shipment,
        List_Centers,
        Client,
        All_Chart,
        List_Shipment,
        List_Plan_Done,
        List_Plan,
        Add_Plan,
        Chart_Areas
    }
}
</script>

<style scoped>
@media screen and (min-width: 992px) and (max-width: 1439px) {
    .header {
        width: calc(100% - 64px);
    }
}
</style>
