<template>
    <div class="header navbar" style="width: max-content; position: absolute; right: 0;border-radius: 20% 0 0 20%;">
        <div class="header-container">
            <ul class="nav-right">  
                <li class="dropdown">
                    <a href class="dropdown-toggle no-after peers fxw-nw ai-c lh-1" data-bs-toggle="dropdown">
                        <div class="peer mR-10">
                            <img class="w-2r bdrs-50p" src="https://randomuser.me/api/portraits/men/10.jpg" alt />
                        </div>
                        <div class="peer">
                            <span class="fsz-sm c-grey-900">{{email }}</span>
                        </div>
                    </a>
                    <ul class="dropdown-menu fsz-sm">
                        <li>
                            <a href class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                <i class="ti-settings mR-10"></i>
                                <span>Setting</span>
                            </a>
                        </li>
                        <li>
                            <a href class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                <i class="ti-user mR-10"></i>
                                <span>Profile</span>
                            </a>
                        </li>
                        <li>
                            <a href="email.html" class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                <i class="ti-email mR-10"></i>
                                <span>Messages</span>
                            </a>
                        </li>
                        <li role="separator" class="divider"></li>
                        <li @click="logout">
                            <a href class="d-b td-n pY-5 bgcH-grey-100 c-grey-700">
                                <i class="ti-power-off mR-10"></i>
                                <span>Logout</span>
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</template>
  
<script>
import axios from 'axios'
export default {
    props:['email'],
    data() {
        return {
            dialog: false
        };
    },
    methods: {
        async logout(e){
            e.preventDefault();
            await axios.get('http://localhost:3000/managecar/Logout', { withCredentials: true })
					.then((res) => {
						console.log(res.data);
                        if(res.data === 'logout'){
                            this.$router.push({name : 'login_Vechile'})
                        }
					}).catch((err) => {
						console.log(err)
					})
        },
        search_toggle(e) {
            $(".search-box, .search-input").toggleClass("active");
            $(".search-input input").focus();

            e.preventDefault();
        },
        sidbar_menu(e) {
            console.log("s");
            e.preventDefault();
            $(".sidebar").toggleClass("active_sidebar");
            $(".sidebar").removeClass("sidebar2");
        },
        arrow_sidebar(e) {
            e.preventDefault();
            $(".sidebar").removeClass("active_sidebar");
        }
    }
};
</script>
  
<style>

</style>