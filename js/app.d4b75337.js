(function(t){function e(e){for(var s,n,r=e[0],c=e[1],l=e[2],u=0,v=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&v.push(o[n][0]),o[n]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(v.length)v.shift()();return i.push.apply(i,l||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],s=!0,r=1;r<a.length;r++){var c=a[r];0!==o[c]&&(s=!1)}s&&(i.splice(e--,1),t=n(n.s=a[0]))}return t}var s={},o={app:0},i=[];function n(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=t,n.c=s,n.d=function(t,e,a){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(n.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)n.d(a,s,function(e){return t[e]}.bind(null,s));return a},n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var d=c;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("8a23"),o=a.n(s);o.a},"05a2":function(t,e,a){"use strict";var s=a("31e3"),o=a.n(s);o.a},"10ad":function(t,e,a){"use strict";var s=a("446a"),o=a.n(s);o.a},2207:function(t,e,a){t.exports=a.p+"img/browser.7fbd2dd9.png"},"31e3":function(t,e,a){},"446a":function(t,e,a){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-app-bar",{staticClass:"high-zindex toolbar-color",attrs:{app:"",dark:""}},[a("v-app-bar-nav-icon",{staticClass:"hide-sm-and-up",on:{click:function(e){t.drawer=!0}}}),a("div",{staticClass:"d-flex align-center"},[a("a",{staticClass:"brand",attrs:{href:"/"}},[t._v("Versobyte")])]),a("v-spacer"),t._l(t.menuItems,(function(e){return a("v-btn",{key:e.title,staticClass:"ma-2 hidden-sm-and-down",attrs:{text:"",to:e.link}},[a("span",[t._v(t._s(e.title))]),a("v-icon",{attrs:{dark:"",right:""}},[t._v("mdi-"+t._s(e.icon))])],1)}))],2),a("v-navigation-drawer",{staticClass:"toolbar-color fixed",attrs:{absolute:"",temporary:"",dark:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[a("v-list-item",[a("v-list-item-content",[a("v-list-item-title",[t._v("Navigation")])],1)],1),a("v-divider"),a("v-list",{attrs:{dense:""}},t._l(t.menuItems,(function(e){return a("v-list-item",{key:e.title,attrs:{to:e.link,link:""}},[a("v-list-item-icon",[a("v-icon",[t._v("mdi-"+t._s(e.icon))])],1),a("v-list-item-content",[a("v-list-item-title",[t._v(t._s(e.title))])],1)],1)})),1)],1),a("v-content",[a("router-view")],1),a("v-footer",{staticClass:"ft-footer",attrs:{height:"auto"}},[a("v-layout",{attrs:{"justify-center":"",row:"",wrap:""}},[a("v-flex",{staticClass:"footer",attrs:{primary:"","lighten-2":"","py-3":"","text-xs-center":"","white--text":"",xs12:""}},[t._v("Copyright © Versobyte, All Rights Reserved.")])],1)],1)],1)},i=[],n={name:"App",components:{},data:function(){return{menuItems:[{title:"Home",link:"/",icon:"home-variant"}],drawer:null}},watch:{$route:function(t){document.title=t.meta.title||"Versobyte"}},mounted:function(){document.title="Versobyte"}},r=n,c=(a("034f"),a("05a2"),a("2877")),l=a("6544"),d=a.n(l),u=a("7496"),v=a("40dc"),p=a("5bc1"),m=a("8336"),f=a("a75b"),b=a("ce7e"),h=a("0e8f"),w=a("553a"),g=a("132d"),y=a("a722"),C=a("8860"),_=a("da13"),k=a("5d23"),x=a("34c3"),V=a("f774"),O=a("2fa4"),j=Object(c["a"])(r,o,i,!1,null,"0804a12a",null),P=j.exports;d()(j,{VApp:u["a"],VAppBar:v["a"],VAppBarNavIcon:p["a"],VBtn:m["a"],VContent:f["a"],VDivider:b["a"],VFlex:h["a"],VFooter:w["a"],VIcon:g["a"],VLayout:y["a"],VList:C["a"],VListItem:_["a"],VListItemContent:k["a"],VListItemIcon:x["a"],VListItemTitle:k["b"],VNavigationDrawer:V["a"],VSpacer:O["a"]});var I=a("8c4f"),S=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"header-container"},[s("div",{staticClass:"header"},[s("v-container",[s("div",{staticClass:"header-content"},[s("h1",{staticClass:"header-title"},[t._v("Welcome to the cloud")]),s("p",{staticClass:"header-description"},[t._v("We develop tools and products to enhance people and organizations. Quickly scale up your business or projects using applications by Versobyte.")])])])],1)]),s("div",{staticClass:"feature-section"},[s("v-container",[s("v-row",[s("div",{staticClass:"row-box"},[s("v-icon",{staticClass:"f-icon"},[t._v("mdi-code-tags")]),s("h3",[t._v("Active Development")]),s("p",[t._v("Versobyte is constantly working to push out updates and new features to applications")])],1),s("div",{staticClass:"row-box"},[s("v-icon",{staticClass:"f-icon"},[t._v("mdi-lock-open-check")]),s("h3",[t._v("Embracing Open-source")]),s("p",[t._v("Versobyte is continuing to embrace in the open-source community by keeping as much of the applications open-source.")])],1),s("div",{staticClass:"row-box"},[s("v-icon",{staticClass:"f-icon"},[t._v("mdi-currency-usd")]),s("h3",[t._v("Low Cost")]),s("p",[t._v("Versobyte believes in low cost solutions. We are always in the best interests of our users.")])],1)])],1)],1),s("div",{staticClass:"cards-section p-5"},[s("v-container",[s("div",{staticClass:"container-app mb-5"},[s("div",{staticClass:"row double-container"},[s("div",{staticClass:"col-lg-7 col-md-12 text-center double"},[s("img",{attrs:{src:a("a74c"),alt:"Mobile Optimizations"}})]),s("div",{staticClass:"col-lg-5 col-md-12 mb-4 text-left"},[s("h1",{staticClass:"google-sans my-5"},[t._v("Mobile Optimization")]),s("p",[t._v("To create a website, you must keep in mind about the browser. On average, consumer devices are 200 USD or less, and it isn't new that people leave websites because of the speculation that it is not working but is actually slow. Versobyte wants to improve this by making websites as friendly as possible on mobile networks and lower-end devices.")])])])]),s("div",{staticClass:"container-app mb-5"},[s("div",{staticClass:"row mobile-reverse double-container"},[s("div",{staticClass:"col-lg-7 col-md-12 text-center double"},[s("img",{attrs:{src:a("2207"),alt:"Browser Audience"}})]),s("div",{staticClass:"col-lg-5 col-md-12 mb-4 text-left"},[s("h1",{staticClass:"google-sans my-5"},[t._v("Browser Compatibility")]),s("p",{staticClass:"mb-4"},[t._v("Depending on your content and what your audience may be, it is recommended to have good compatibility, including slightly older browsers. Similar to major websites, we keep compatibility on the sites we make.")])])])]),s("div",{staticClass:"container-app mb-5"},[s("div",{staticClass:"row double-container"},[s("div",{staticClass:"col-lg-7 col-md-12 text-center double"},[s("img",{attrs:{src:a("6e33"),alt:"Material Design Demostration"}})]),s("div",{staticClass:"col-lg-5 col-md-12 mb-4 text-left"},[s("h1",{staticClass:"google-sans my-5"},[t._v("Modern, Intuitive Design")]),s("p",{staticClass:"mb-4"},[t._v("The sites we make utilizes known frameworks that everyone sees in their browsing. We want to keep that so viewing a new website can be easy and fast. Old and slow websites tend to quirk viewers because of their weird design or speed (Contabo).")])])])])])],1),s("div",{staticClass:"project-section"},[s("v-container",[s("h1",{staticClass:"text-center mt-5"},[t._v("Projects")]),s("v-row",{staticClass:"row-center"},[s("div",{staticClass:"f-box"},[s("img",{staticClass:"f-img",attrs:{src:"https://camo.githubusercontent.com/5285bfcbe4cbda63612d8d291638f0b37788b242/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f69636f6e732f3632383633333839383738373739393034312f38653366373533333461656331636361666466383466306139333232623630662e776562703f73697a653d313238",alt:"HorizonPanel Logo"}}),s("h3",[t._v("HorizonPanel")]),s("p",[t._v("HorizonPanel is an open-source billing panel intended for hosting companies. It is built on the latest Laravel PHP 7 framework designed for performance.")]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({attrs:{icon:""}},a),[s("a",{staticClass:"f-link",attrs:{href:"https://github.com/AnushK-Fro/HorizonPanel"}},[s("v-icon",{attrs:{color:"lighten-1"}},[t._v("mdi-github")])],1)])]}}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("span",[t._v("View Github repository")])]),s("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(e){var a=e.on;return[s("v-btn",t._g({attrs:{icon:""}},a),[s("a",{staticClass:"f-link",attrs:{href:"https://discord.gg/69mX9Tr"}},[s("v-icon",{attrs:{color:"lighten-1"}},[t._v("mdi-discord")])],1)])]}}]),model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[s("span",[t._v("Join Discord Server")])])],1)])],1)],1),s("div",{staticClass:"contact-section pt-5 pb-8 text-center"},[s("v-container",[s("h1",{staticClass:"text-center"},[t._v("Contact Me")]),s("v-row",{staticClass:"mt-5 row-center"},[s("v-icon",[t._v("mdi-discord")]),s("p",{staticClass:"mb-0 ml-4"},[t._v("Syntax#9468")])],1),s("iframe",{staticClass:"mt-5",attrs:{src:"https://discordapp.com/widget?id=371085360098312193&theme=dark",width:"350",height:"500",allowtransparency:"true",frameborder:"0"}})],1)],1)])},z=[],D={name:"Home"},H=D,L=(a("10ad"),a("a523")),M=a("0fd9"),A=a("3a2f"),T=Object(c["a"])(H,S,z,!1,null,"2737d3ea",null),B=T.exports;d()(T,{VBtn:m["a"],VContainer:L["a"],VIcon:g["a"],VRow:M["a"],VTooltip:A["a"]}),s["a"].use(I["a"]);var W=[{path:"/",name:"Home",component:B,meta:{title:"Home"}}],$=new I["a"]({mode:"history",base:"/",routes:W}),E=$,F=a("f309");s["a"].use(F["a"]);var J=new F["a"]({});s["a"].config.productionTip=!1,new s["a"]({router:E,vuetify:J,render:function(t){return t(P)}}).$mount("#app")},"6e33":function(t,e,a){t.exports=a.p+"img/modern.fd2bf19c.png"},"8a23":function(t,e,a){},a74c:function(t,e,a){t.exports=a.p+"img/mobile.3332f87d.png"}});
//# sourceMappingURL=app.d4b75337.js.map