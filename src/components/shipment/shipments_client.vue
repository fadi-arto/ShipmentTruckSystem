<template>
    <div class="app">
         <div>
          <!-- #Left Sidebar ==================== -->
          <div class="sidebar">
          <sliders />
          </div>
    
          <!-- #Main ============================ -->
          <div class="page-container">
            <!-- ### $Topbar ### -->
            <headers />
    
            <!-- ### $App Screen Content ### -->
            <main class='main-content bgc-grey-100'>
              <div id='mainContent'>
                <div class="container-fluid">
                  <h4 class="c-grey-900 mT-10 mB-30">Data Tables</h4>
                  <div class="row">
                    <div class="col-md-12">
                      <div class="bgc-white bd bdrs-3 p-20 mB-20">
                        <h4 class="c-grey-900 mB-20">Bootstrap Data Table</h4>
                        <table id="dataTable" class="table table-striped table-bordered" cellspacing="0" width="100%">
                            <thead>
                              <tr>
                                <th>id</th>
                                <th>Center</th>
                                <th>State</th>
                                <th>Source location</th>
                                <th>Current location</th>
                                <th>Distination location</th>
                                <th>Cost</th>
                                <th>Start</th>
                                <th>Delivery time</th>
                                <th>delay time</th>
                                <th>Exception time</th>
                                <th>QR</th>
                                
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td>$320,800</td>
                              </tr>    
                            </tbody>
                          </table>
                          
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
   
            <!-- ### $App Screen Footer ### -->
                <footers />
          </div>
        </div>
    </div>  
    </template>
    
    <script>
    import footers from '../template/footer.vue';
    import headers from '../template/header.vue';
    import sliders from '../template/slider.vue';
    
    export default {
    components:{
        footers,
        headers,
        sliders
    }
    }
    </script>
    
    <style>
    
    </style>