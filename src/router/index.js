import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/Vehicle',
    name: 'Vehicle',
    component: () => import('../views/Vehicle_Home.vue')  
  },
  {
    path: '/Login_Clients',
    name: 'Login_Client',
    component: () => import('../components/registeraiton/login_client.vue')  
  },
  {
    path: '/center/Home',
    name: 'home_center',
    component: () => import('../views/Center_Home')  
  },
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/Centers',
    name: 'Centers',
    component: () => import('../views/Center') 
    },
  {
    path: '/calendar_shipment',
    name: 'calendar_shipment',
    component: () => import('../components/calendar/calendar_shipment')
  },
  {
    path: '/login_Center',
    name: 'loginCenter',
    component: () => import('../components/registeraiton/login.vue')
  }
  ,
  {
    path: '/login_Vechile',
    name: 'login_Vechile',
    component: () => import('../components/ManageVehicle/Login_Driver.vue')
  }
  ,
  {
    path: '/login-Driverss',
    name: 'login_Driver',
    component: () => import('../components/ManageVehicle/Login_Driver.vue')
  },
  {
    path: '/login_Client_Ship',
    name: 'login_Driver',
    component: () => import('../components/ManageVehicle/Login_Driver.vue')
  },
  {
    path: '/signUp_client',
    name: 'signUp',
    component: () => import('../components/registeraiton/signUp.vue')
  }
  ,
  {
    path: '/client-table',
    name: 'client_table',
    component: () => import('../components/tables/client_table.vue')
  }
  ,
  {
    path: '/data-table',
    name: 'data',
    component: () => import('../components/tables/datatable.vue')
  }
  ,
  {
    path: '/shipment_table',
    name: 'shipment_table',
    component: () => import('../components/shipment/shipments_client.vue')
  }
  ,
  {
    path: '/shipment_deatails',
    name: 'shipment_deatails',
    component: () => import('../components/shipment/shipment_Details.vue')
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('../components/test/test1.vue')
  },

  {
    path: '/add-vechile',
    name: 'add-vechile',
    component: () => import('../components/vechile/Add-vechile')
  }
  ,
  {
    path: '/Map-vechile',
    name: 'Map-vechile',
    component: () => import('../components/vechile/map-vechile')
  }
  ,
  
  {
    path: '/shipment-Center',
    name: 'shipment_Center',
    component: () => import('../components/Center/shipment-Center')
  }
  ,
  {
    path: '/login_company',
    name: 'login_company',
    component: () => import('../components/registeraiton/login_company')
  },
  {
    path: '/signUp_company',
    name: 'signUp_company',
    component: () => import('../components/registeraiton/Register_company')
  },
  {
    path: '/login_Employee',
    name: 'login_centers',
    component: () => import('../components/registeraiton/login_Employee')
  }
  , 
  {
    path: '/weather',
    name: 'wether',
    component: () => import('../components/weather/weather')
  },
  {
    path: '/Client/Home',
    name: 'ClientHome',
    component: () => import('../views/ClientHome.vue')  

  }
  , 
  {
    path: '/CleintHome',
    name: 'CleintHome',
    component: () => import('../views/Client')
  }
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
