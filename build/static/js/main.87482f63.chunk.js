(this.webpackJsonpthermometer=this.webpackJsonpthermometer||[]).push([[0],{44:function(e,a,t){e.exports=t(58)},58:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(23),i=t(87),o=t(94),c=t(98),m=t(91),s=t(60),d=t(92),u=t(95),p=t(96),f=t(37),b=t.n(f),h=t(38),v=t.n(h),g=t(89),E=t(90),y=t(93),k=t(97),w=t(29),x=(t(46),Object(i.a)((function(e){return{root:{flexGrow:1,marginTop:100},margin:{height:e.spacing(3)},slider:{margin:50,width:"94%"},media:{height:150,width:150},card:{maxWidth:325,margin:5},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},paperContent:{maxWidth:380,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})));function j(){var e=x(),a=r.a.useState([]),t=Object(l.a)(a,2),i=t[0],f=t[1],h=Object(n.useState)(0),j=Object(l.a)(h,2),N=j[0],O=j[1],B=Object(n.useState)(0),I=Object(l.a)(B,2),S=I[0],z=I[1];r.a.useEffect((function(){w.initializeApp({apiKey:"AIzaSyCJQcNik2gERYZpyf3Q3B7B-0MB8Z6YfeQ",authDomain:"thermometer-54b6f.firebaseapp.com",databaseURL:"https://thermometer-54b6f.firebaseio.com",projectId:"thermometer-54b6f",storageBucket:"thermometer-54b6f.appspot.com",messagingSenderId:"607991062616",appId:"1:607991062616:web:83c1f3dd63506f5c93ea2d"}),w.firestore().collection("thermometer").get().then((function(e){var a=[];e.forEach((function(e){a.push({id:e.id,data:e.data()})})),f(a)}))}),[]);return r.a.createElement("div",{className:e.root},r.a.createElement("div",{className:e.margin}),r.a.createElement(g.a,{position:"fixed",color:"inherit"},r.a.createElement(E.a,{variant:"regular"},r.a.createElement(c.a,{className:e.slider,defaultValue:N,value:N,step:S,marks:[{value:-100,label:"gift puppy"},{value:-65,label:"tickle"},{value:-40,label:"ffff"},{value:-15,label:"surprise"},{value:0,label:"0"},{value:20,label:"hands"},{value:37,label:"arms"},{value:55,label:"feets"},{value:65,label:"legs"},{value:80,label:"back"},{value:100,label:"YOU DIED"}],min:-100,valueLabelDisplay:"on"}))),r.a.createElement(s.a,{color:"secondary",size:"large",className:e.paper},i.map((function(a){return r.a.createElement(m.a,{color:"secondary",className:e.card,key:a.id},r.a.createElement(d.a,{className:e.media,image:a.data.image,title:"Contemplative Reptile"}),r.a.createElement(y.a,null,r.a.createElement(o.a,{variant:"body2",color:"textSecondary",component:"p"},a.data.name)),r.a.createElement(u.a,null,r.a.createElement(k.a,{title:a.data.points,"aria-label":"remove"},r.a.createElement(p.a,{size:"small",color:a.data.points>0?"secondary":"primary","aria-label":"remove",onClick:function(){return function(e){var a=0;e<0&&(a=e-N),(a=N-e)>100&&(a=100),a<-100&&(a=-100),O(a),z(e)}(a.data.points)}},r.a.createElement(b.a,null))),r.a.createElement(k.a,{title:a.data.points,"aria-label":"add"},r.a.createElement(p.a,{size:"small",color:a.data.points>0?"secondary":"primary","aria-label":"add",onClick:function(){return function(e){var a=0;e>0&&(a=N+e),(a=N- -e)>100&&(a=100),a<-100&&(a=-100),O(a),z(e)}(a.data.points)}},r.a.createElement(v.a,null)))))}))))}var N=function(){return r.a.createElement("div",null,r.a.createElement(j,null))},O=t(11),B=t.n(O);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));B.a.render(r.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.87482f63.chunk.js.map