<template>
    <v-card>
        <v-card-title>
            <span class="text-h5">Add Shipment</span>
        </v-card-title>
        <v-card-text>
            <v-container style="    max-width: 78%;">
                <v-row>
                    <v-col cols="12" sm="6" md="4">
                        <v-text-field label="Source location*" v-model="Source_Location" required></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <v-text-field label="Destination Email" hint="example of helper text only on focus"
                            v-model="Destination_Email"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                        <v-text-field label="Destination location" hint="example of helper text only on focus"
                            v-model="Destination_Location"></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                        <v-select :items="['important', 'Very_Important', 'Dont_care']" v-model="Priority"
                            label="Priority*" required></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-select :items="['0-5', '5-15', '15-34', '34+']" label="Age*" required
                            v-model="weight"></v-select>
                    </v-col>
                    <v-col cols="12" sm="6">
                        <v-autocomplete
                            :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                            label="Type" v-model="Type" multiple></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="12">
                        <v-autocomplete :items="['Truck', 'Expect time', 'Expect Cost', 'QR']" label="Services"
                            v-model="Servives" multiple></v-autocomplete>
                    </v-col>
                </v-row>
            </v-container>
            <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn class="buttom" color="white" variant="text" @click="ages">
                Add Shipment
            </v-btn>

        </v-card-actions>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        age: '',
        Source_Location:'',
        Destination_Location:'',
        Priority:'',
        weight:'',
        Type:'',
        Servives:'',
        Destination_Email:'',
        dialog: true,

    }),

    methods: {
        ages() {
            this.dialog = !this.dialog;
            console.log(this.age);
        },
    submitForm() {
            axios.post('localhost:3000/mangecenter/Add_shipment', {
                Source_Location: this.Source_Location,
                Destination_Location: this.Destination_Location,
                EmailDistination:this.Destination_Email,
                Priority: this.Priority,
                weight: this.weight,
                Type: this.Type,
                Servives: this.Servives
            })
                .then(response => {
                    console.log(response.data)
                })
                .catch(error => {
                    console.log(error)
                })

        }
    }
}
</script>
<style>
.buttom {
    background: #751fec;
    padding: 28px;
    display: flex;
    position: relative;
    left: 10px;
    top: 10px;
}
</style>