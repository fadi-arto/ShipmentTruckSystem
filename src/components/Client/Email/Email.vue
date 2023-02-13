<template>
    <main class='main-content bgc-grey-100'>
        <div id='mainContent'>
            <div class="full-container">
                <div class="email-app">
                    <div class="email-side-nav remain-height ov-h">
                        <div class="h-100 layers">
                            <div class="p-20 bgc-grey-100 layer w-100">
                                <a href="compose.html" class="btn btn-danger d-grid"
                                    style="background:#02adf0; border: 2px solid rgb(2, 173, 240);">New Message</a>
                            </div>
                            <div class="scrollable pos-r bdT layer w-100 fxg-1">
                                <ul class="p-20 nav flex-column">
                                    <li class="nav-item">
                                        <a @click="pages('Message')" class="nav-link c-grey-800 cH-blue-500 actived">
                                            <div class="peers ai-c jc-sb">
                                                <div class="peer peer-greed">
                                                    <i class="mR-10 ti-email"></i>
                                                    <span>Inbox</span>
                                                </div>
                                                <div class="peer">
                                                    <span
                                                        class="badge rounded-pill bgc-deep-purple-50 c-deep-purple-700">+99</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a @click="pages('Send_Email')" class="nav-link c-grey-800 cH-blue-500">
                                            <div class="peers ai-c jc-sb">
                                                <div class="peer peer-greed">
                                                    <i class="mR-10 ti-share"></i>
                                                    <span>Sent</span>
                                                </div>
                                                <div class="peer">
                                                    <span class="badge rounded-pill bgc-green-50 c-green-700">12</span>
                                                </div>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="Send_Email" v-if="show === 'Send_Email'">
                        <Send_Email />
                    </div>
                    <div class="Message" v-if="show === 'Message'">
                        <Message />
                    </div>

                </div>
            </div>

        </div>
    </main>
</template>

<script>
import Message from './Message.vue'
import Send_Email from './Send_Email.vue'

import { ref } from 'vue'

export default {
    setup() {
        let show = ref("Send_Email");
        return { show }
    },
    methods: {
        pages(location) {
            console.log("location");

            console.log(location);
            this.show = location;
        },
    },
    components: {
        Send_Email,
        Message
    }
}
</script>

<style>

</style>