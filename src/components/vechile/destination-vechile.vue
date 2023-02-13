<template>
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
                                <th>Email Driver</th>
                                <th>source center </th>
                                <th>destination center</th>
                                <th>time</th>
                                <th>state</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td>Tiger Nixon</td>
                                <td>System Architect</td>
                                <td>Edinburgh</td>
                                <td>61</td>
                                <td>2011/04/25</td>
                                <td class="action" >
                                    <v-btn color="grey" depressed>
                                        State
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>