(window.webpackJsonp=window.webpackJsonp||[]).push([[9,1],{375:function(e,t,l){"use strict";l.r(t);l(25);var o=l(171),n=(l(125),{components:{VueDatamaps:o.a},data:function(){return{scope:"world",fills:{passive:"#E1AD01",active:"rgb(148, 0, 0)",defaultFill:"#dddddd"},data:{ARE:{fillKey:"passive"},DJI:{fillKey:"passive"},IRQ:{fillKey:"passive"},JOR:{fillKey:"active"},KWT:{fillKey:"passive"},LBN:{fillKey:"passive"},LBY:{fillKey:"passive"},MRT:{fillKey:"passive"},OMN:{fillKey:"passive"},ISR:{fillKey:"passive"},QAT:{fillKey:"passive"},SAU:{fillKey:"passive"},SYR:{fillKey:"passive"},YEM:{fillKey:"passive"},TUR:{fillKey:"active"},MAR:{fillKey:"passive"},EGY:{fillKey:"active"},DZA:{fillKey:"active"},SSD:{fillKey:"passive"},SDN:{fillKey:"passive"},SOM:{fillKey:"passive"},TUN:{fillKey:"passive"},PSE:{fillKey:"passive"},"-99":{fillKey:"passive"}},popupData:{name:"",test:"xyz"}}},methods:{popupTemplate:function(e){var t=e.datum;this.popupData.name="Bubble for ".concat(t.name)},setProjection:function(e){return{zoom:function(e,element){var t=e.geoEquirectangular().center([22,15]).rotate([5,0]).scale(element.offsetHeight).translate([element.offsetWidth/2.5,element.offsetHeight/2]);return{path:e.geoPath().projection(t),projection:t}}}[e]}}}),r=l(30),c=l(104),v=l.n(c),f=l(419),component=Object(r.a)(n,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-col",{staticClass:"rounded-xl",attrs:{col:"12"}},[l("vue-datamaps",{staticClass:"rounded-xl",attrs:{scope:e.scope,data:e.data,fills:e.fills,bubblesConfig:e.bubblesConfig,bubbles:"",setProjection:e.setProjection("zoom")},on:{"custom:popup-bubble":e.popupTemplate}},[l("div",{staticClass:"hoverinfo",staticStyle:{"text-align":"center"},attrs:{slot:"hoverBubbleInfo"},slot:"hoverBubbleInfo"},[e._v("\n            "+e._s(e.popupData.name)+"\n        ")])])],1)}),[],!1,null,null,null);t.default=component.exports;v()(component,{VCol:f.a})},425:function(e,t,l){"use strict";l.r(t);l(6);var o={components:{dmap:function(){return Promise.resolve().then(l.bind(null,375))},TRmap:function(){return l.e(0).then(l.bind(null,426))}},data:function(){return{}}},n=l(30),r=l(104),c=l.n(r),v=l(376),f=l(359),d=l(419),m=l(369),y=l(420),component=Object(n.a)(o,(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-card",{staticClass:"col-12 mx-auto ma-2 rounded-xl",attrs:{outlined:""}},[l("v-card-title",[l("v-icon",{attrs:{large:"",left:""}},[e._v("mdi-earth")]),e._v(" "),l("span",{staticClass:"title font-weight-light"},[e._v("MENA")])],1),e._v(" "),l("v-row",[l("v-col",{staticClass:"col-12",attrs:{md:"8"}},[l("dmap")],1),e._v(" "),l("v-col",{staticClass:"col-12",attrs:{md:"4"}},[l("v-row",[l("v-col",{staticClass:"col-6",attrs:{md:"12"}},[l("h1",{staticStyle:{color:"rgb(148, 0, 0)"}},[e._v("Situation")]),e._v(" "),l("h2",[e._v("6 Campus Experts")]),e._v(" "),l("h2",[e._v("6 Universities")]),e._v(" "),l("h2",[e._v("4 Countries")])]),e._v(" "),l("v-col",{staticClass:"col-6",attrs:{md:"12"}},[l("h1",{staticStyle:{color:"#e1ad01"}},[e._v("Possibilities")]),e._v(" "),l("h2",[e._v("22+ Countries")])])],1)],1)],1)],1)}),[],!1,null,null,null);t.default=component.exports;c()(component,{Dmap:l(375).default}),c()(component,{VCard:v.a,VCardTitle:f.b,VCol:d.a,VIcon:m.a,VRow:y.a})}}]);