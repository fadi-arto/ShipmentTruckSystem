//<template>
  <div class="home">
    <section class="step-wizard">
        <ul class="step-wizard-list">
            <li class="step-wizard-item">
                <span class="progress-count">1</span>
                <span class="progress-label">Billing Info</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">2</span>
                <span class="progress-label">Payment Method</span>
            </li>
            <li class="step-wizard-item">
                <span class="progress-count">3</span>
                <span class="progress-label ">Checkout</span>
            </li>
            <li class="step-wizard-item current-item" @click="three">
                <span class="progress-count">4</span>
                <span class="progress-label">Success</span>
            </li>
        </ul>
    </section>
    <h1> Socket .  IO : {{variable}} </h1>
    <div>
    <input v-model="value"/>
    <button @click="sendValue">Send Value</button>
  </div>
  </div>
</template>
<script>
import axios from"axios"

const socket = io.connect("http://localhost:3000");
  socket.emit("testsocket", "hello_world");
  
export default {
  data(){
return {
  email:"",
  password: "",
  variable:"",
  value: ''
}
} ,
created(){
  
this.Two()
},
  methods:{
    sendValue() {    
      const socket = io.connect("http://localhost:3000");

    socket.emit('sendValue', this.value)
    },

  Two(){


    const socket = io.connect("http://localhost:3000");
 
    socket.on("connect", () => {
      
   setTimeout(() => {
    socket.connect();
  console.log(socket.id); 
  console.log("socket.id"); // undefined

  }, 100);// x8WIv7-mJelg7on_ALbx
});

 socket.on("disconnect", () => {
  console.log("socket.id"); // undefined
});

socket.on("hello", (arg) => {
  console.log(arg); // world
  this.variable = arg;
});
// socket.emit("testsocket", );
  },
  three(){
    const socket = io.connect("http://localhost:3000");
    socket.emit("testsocket", "hello_world");

  }
 }
}
</script>
<style>
#div {
  width: 50%;
  padding: 30px;
}

#btn {
  position: absolute;
  left: 100px;
}



.step-wizard-list{
    background: #fff;
    box-shadow: 0 15px 25px rgba(0,0,0,0.1);
    color: #333;
    list-style-type: none;
    border-radius: 10px;
    display: flex;
    padding: 20px 10px;
    position: relative;
    z-index: 10;
}

.step-wizard-item{
    padding: 0 20px;
    flex-basis: 0;
    -webkit-box-flex: 1;
    -ms-flex-positive:1;
    flex-grow: 1;
    max-width: 100%;
    display: flex;
    flex-direction: column;
    text-align: center;
    min-width: 170px;
    position: relative;
}
.step-wizard-item + .step-wizard-item:after{
    content: "";
    position: absolute;
    left: 0;
    top: 19px;
    background: #21d4fd;
    width: 100%;
    height: 2px;
    transform: translateX(-50%);
    z-index: -10;
}
.progress-count{
    height: 40px;
    width:40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-weight: 600;
    margin: 0 auto;
    position: relative;
    z-index:10;
    color: transparent;
}
.progress-count:after{
    content: "";
    height: 40px;
    width: 40px;
    background: #21d4fd;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    z-index: -10;
}
.progress-count:before{
    content: "";
    height: 10px;
    width: 20px;
    border-left: 3px solid #fff;
    border-bottom: 3px solid #fff;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -60%) rotate(-45deg);
    transform-origin: center center;
}
.progress-label{
    font-size: 14px;
    font-weight: 600;
    margin-top: 10px;
}
.current-item .progress-count:before,
.current-item ~ .step-wizard-item .progress-count:before{
    display: none;
}
.current-item ~ .step-wizard-item .progress-count:after{
    height:10px;
    width:10px;
}
.current-item ~ .step-wizard-item .progress-label{
    opacity: 0.5;
}
.current-item .progress-count:after{
    background: #fff;
    border: 2px solid #21d4fd;
}
.current-item .progress-count{
    color: #21d4fd;
}
</style>


 