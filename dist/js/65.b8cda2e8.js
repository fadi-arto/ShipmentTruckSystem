"use strict";(self["webpackChunkrelax_client"]=self["webpackChunkrelax_client"]||[]).push([[65],{51065:(t,e,n)=>{n.r(e),n.d(e,{default:()=>Z});var o=n(29269),r=function(t){return(0,o.dD)("data-v-5133e474"),t=t(),(0,o.Cn)(),t},a={class:"app"},i=r((function(){return(0,o._)("div",{id:"mapContainer"},null,-1)})),c=[i];function s(t,e,n,r,i,s){return(0,o.wg)(),(0,o.iD)("div",a,c)}var u=n(76314),p=n(25884),l=(n(10636),n(76312),n(40830)),h=n(94581),m=n(36947),f=n.n(m),d=n(29291);const w={name:"LeafletMap",data:function(){return{map:null,value:[],item:[]}},components:{headers:h.Z},mounted:function(){this.Create(),this.map=f().map("mapContainer").setView([33.510414,36.278336],7),f().tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map)},methods:{Create:function(){var t=this;return(0,p.Z)((0,u.Z)().mark((function e(){return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,l.Z.get("http://localhost:3000/mangecenter/find_centers",{withCredentials:!0}).then((function(e){t.item=e.data,console.log("2"),console.log(t.item),t.show_centers()}))["catch"]((function(t){console.log(t)}));case 2:case"end":return e.stop()}}),e)})))()},show_centers:function(){var t=this;return(0,p.Z)((0,u.Z)().mark((function e(){var n,o,r,a;return(0,u.Z)().wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(n=new m.Icon({iconUrl:d,iconSize:[40,40]}),o=function(e){a="https://nominatim.openstreetmap.org/search?format=json&limit=3&q="+t.item[e].Location,fetch(a).then((function(t){return t.json()})).then((function(o){var r=o;console.log(r[0]),f().marker([r[0].lat,r[0].lon],{icon:n}).bindPopup('<h1 width="300" height="300" >KEY : '.concat(t.item[e].email)).addTo(t.map)}))["catch"]((function(t){return console.log(t)}))},r=0;r<t.item.length;r++)o(r);case 3:case"end":return e.stop()}}),e)})))()}}};var g=n(57617);const v=(0,g.Z)(w,[["render",s],["__scopeId","data-v-5133e474"]]),Z=v}}]);
//# sourceMappingURL=65.b8cda2e8.js.map