(this.webpackJsonpthermometer=this.webpackJsonpthermometer||[]).push([[0],{44:function(e,a,t){e.exports=t(58)},58:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),l=t(23),r=t(87),i=t(94),c=t(98),s=t(91),d=t(60),m=t(92),u=t(95),p=t(96),f=t(37),b=t.n(f),g=t(38),h=t.n(g),v=t(89),E=t(90),y=t(93),k=t(97),w=t(17),x=(t(46),Object(r.a)((function(e){return{root:{flexGrow:1,marginTop:100},margin:{height:e.spacing(3)},slider:{margin:50,width:"94%"},media:{height:150,width:150},card:{maxWidth:325,margin:5},paper:{padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary},paperContent:{maxWidth:380,padding:e.spacing(2),textAlign:"center",color:e.palette.text.secondary}}})));function j(){var e=x(),a=o.a.useState([]),t=Object(l.a)(a,2),r=t[0],f=t[1],g=Object(n.useState)({id:null,count:0}),j=Object(l.a)(g,2),O=j[0],N=j[1],S=Object(n.useState)(0),B=Object(l.a)(S,2),I=B[0],z=B[1],C=Object(n.useState)(0),_=Object(l.a)(C,2),A=_[0];_[1];o.a.useEffect((function(){w.initializeApp({apiKey:"AIzaSyCJQcNik2gERYZpyf3Q3B7B-0MB8Z6YfeQ",authDomain:"thermometer-54b6f.firebaseapp.com",databaseURL:"https://thermometer-54b6f.firebaseio.com",projectId:"thermometer-54b6f",storageBucket:"thermometer-54b6f.appspot.com",messagingSenderId:"607991062616",appId:"1:607991062616:web:83c1f3dd63506f5c93ea2d"});var e=w.firestore();e.collection("thermometer").get().then((function(e){var a=[];e.forEach((function(e){a.push({id:e.id,data:e.data()})})),f(a)})),e.collection("total_points").get().then((function(e){e.forEach((function(e){console.log(e.data()),N({id:e.id,count:A+e.data().total})}))}))}),[]);return o.a.createElement("div",{className:e.root},o.a.createElement("div",{className:e.margin}),o.a.createElement(v.a,{position:"fixed",color:"inherit"},o.a.createElement(E.a,{variant:"regular"},o.a.createElement(c.a,{className:e.slider,defaultValue:O.count,value:O.count,step:I,marks:[{value:-100,label:"gift puppy"},{value:-65,label:"tickle"},{value:-40,label:"hugs"},{value:-15,label:"surprise"},{value:0,label:"0"},{value:20,label:"hands"},{value:37,label:"arms"},{value:55,label:"feets"},{value:65,label:"legs"},{value:80,label:"back"},{value:100,label:"YOU DIED"}],min:-100,max:100,valueLabelDisplay:"on"}))),o.a.createElement(d.a,{color:"secondary",size:"large",className:e.paper},r.map((function(a){return o.a.createElement(s.a,{color:"secondary",className:e.card,key:a.id},o.a.createElement(m.a,{className:e.media,image:a.data.image,title:"Contemplative Reptile"}),o.a.createElement(y.a,null,o.a.createElement(i.a,{variant:"body2",color:"textSecondary",component:"p"},a.data.name)),o.a.createElement(u.a,null,o.a.createElement(k.a,{title:a.data.points,"aria-label":"remove"},o.a.createElement(p.a,{size:"small",color:a.data.points>0?"secondary":"primary","aria-label":"remove",onClick:function(){return function(e){var a=O.count-e.data.points;console.log(a),O.count<=-100?(a=-100,w.firestore().collection("total_points").doc(O.id).update({total:a})):w.firestore().collection("total_points").doc(O.id).update({total:-100}),N({id:O.id,count:a}),z(e.data.points)}(a)}},o.a.createElement(b.a,null))),o.a.createElement(k.a,{title:a.data.points,"aria-label":"add"},o.a.createElement(p.a,{size:"small",color:a.data.points>0?"secondary":"primary","aria-label":"add",onClick:function(){return function(e){var a=O.count+e.data.points;console.log(a),O.count>=100?(a=100,w.firestore().collection("total_points").doc(O.id).update({total:a})):w.firestore().collection("total_points").doc(O.id).update({total:100}),N({id:O.id,count:a}),z(e.data.points)}(a)}},o.a.createElement(h.a,null)))))}))))}var O=function(){return o.a.createElement("div",null,o.a.createElement(j,null))},N=t(11),S=t.n(N);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));S.a.render(o.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[44,1,2]]]);
//# sourceMappingURL=main.d402042e.chunk.js.map