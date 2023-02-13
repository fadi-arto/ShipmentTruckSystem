<template>
<div class="widget">
            
            <div class="left-panel panel">
                <div class="date">
                    Monday, 20 Aug 2018
                </div>
                <div class="city">
                    Mumbai
                </div>
                <div class="temp">
                   <img src="https://codefrog.tech/cp/wp/ts.png" alt="" width="60">
                   27&deg;
                </div>
            </div>
            <div class="right-panel panel">
                <img src="https://codefrog.tech/cp/wp/mumbai.png" alt="" width="160">
            </div>

        </div>


<a id="btnDownload" href="https://www.codefrog.tech/post/mini-weather-card/" target="_blank">
  <img src="https://newshost24.com/wp-content/uploads/2022/08/Movieswood-Telugu-2022-Tamil-Movies-Telugu-HD-Movies-Download.png" />
</a>        
</template>

<script>
export default {

}
</script>


<style>
*
{
  margin: 0;
  padding: 0;
  outline: none;
}

body
{
  font-family: 'Roboto', sans-serif;
  overflow: hidden;
  background: #009688;;
}

div.widget
{
  position: relative;
  width: 355px;
  height: 125px;
  margin: 150px auto;
  background-color: #fcfdfd;
  border-radius: 9px;
  padding: 25px;
  padding-right: 30px;
  box-shadow: 0px 31px 35px -26px #080c21;
}

div.left-panel
{
  
}

div.date
{
  font-size: 14px;
  font-weight: bold;
  color: rgba(0,0,0,0.5);
}

div.city
{
  font-size: 21px;
  font-weight: bold;
  text-transform: uppercase;
  padding-top: 5px;
  color: rgba(0,0,0,0.7);
}

div.temp
{
  font-size: 81px;
  color: rgba(0,0,0,0.9);
  font-weight: 100;
}

div.panel
{
  display: inline-block;
}

div.right-panel
{
  position: absolute;
  float: right;
  top: 0;
  margin-top: 35px;
  padding-left: 10px;
}


#btnDownload
{
  position: absolute;
  top: 10px;
  right: 10px;
  z-index-: 9999;
}

#btnDownload img
{
  width: 135px;
  
}
</style>