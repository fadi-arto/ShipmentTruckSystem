<template>
	
	<section class="main-content">
		<div class="container">
			<table class="table">
				<thead>
					<tr>
						<th>City</th>
						<th>Status</th>
						<th>Weight</th>
						<th>Type_Of</th>
						<th>Destination</th>
						<th>Services</th>
						<th>View</th>
					</tr>
				</thead>
				<tbody>
					<tr v-for="items in item" :key="items.id">
						<td>
							<div class="user-info">
								<div class="user-info__img">
									<div class="d-flex align-center justify-space-around">
										<v-avatar color="info" size="x-large">
											<v-img src="../../assets/image/download.png" alt="John"></v-img>
										</v-avatar>
									</div>
								</div>
								<div class="user-info__basic">
									<h6 class="mb-0">{{ items.priority }}</h6>
									<p class="text-muted mb-0">{{ items.createdAt }}</p>
								</div>
							</div>
						</td>
						<td>
							<span class="btn btn-success"
								style="background :#02adf0; color :white ; margin-top: 15%;">{{ items.state }}</span>
						</td>
						<td>
							<h6 class="mb-0" style=" margin-top: 15%;">{{ items.Weight }}</h6>
							<small @load="hello">2 Feb 2021</small>
						</td>
						<td v-for="type in items.Type_Of" :key="type">
							<h6 class="mb-0" style=" margin-top: 10%;">{{ type }}-</h6>
							<a href="#!"><small>Contact</small></a>
						</td>
						<td>
							<h6 class="mb-0" style="    margin-top: 18%;">{{ items.DistinationCity }}</h6>
						</td>
						<td>
							<h6 class="mb-0" style="    margin-top: 18%;" v-for=" servicess in items.Services"
								:key="servicess">{{ servicess }}-</h6>
						</td>
						<td>
							<v-row justify="space-around">
								<v-col cols="auto" style="    transform: translateY(15%); color: white;">
									<v-dialog transition="dialog-bottom-transition">
										<template v-slot:activator="{ props }">
											<v-btn color="#02adf0" v-bind="props">VIEW</v-btn>
										</template>
										<template v-slot:default="{ isActive }">
											<v-card>
												<v-toolbar color="#2196f3" title="DHOW DETAILS"></v-toolbar>
												<v-card-text>
													<Details :idShipment="items._id"/>
												</v-card-text>
												<v-card-actions class="justify-end">
													<v-btn variant="text" @click="isActive.value = false">Close</v-btn>
												</v-card-actions>
											</v-card>
										</template>
									</v-dialog>
								</v-col>
							</v-row>
						</td>
					</tr>

				</tbody>
			</table>

		</div>


	</section>

</template>
<script>
import axios from 'axios'
import { ref } from 'vue'
import Details from './Shipment_Details'
export default {
	name: 'HomeView',
	setup() {

		let item = ref([]);


		return { item };
	},
	mounted() {
		this.Details()
	},
	components:{
		Details
	},
	methods: {
		hello() {
			console.log("sjakalasjfdadksnkhj hello");
		},
		async Details() {
			await axios.get('http://localhost:3000/mangeclint/getShipment', { withCredentials: true })
				.then((res) => {
					console.log(res.data)
					this.item = res.data
				}).catch((err) => {
					console.log(err)
				})
		},
	}
}
</script>
<style>
.table {
	width: 100%;
}

.user-info {
	display: flex;
	align-items: center;
}

.user-info__img {
	width: 50px;
	height: 50px;
	margin-right: 10px;
}

@media (max-width: 767px) {
	.table {
		display: block;
		overflow-x: scroll;
	}

	.user-info {
		flex-direction: column;
		align-items: flex-start;
	}

	.user-info__img {
		margin-bottom: 10px;
	}
}
</style>