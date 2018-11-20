(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{189:function(t,e,i){"use strict";i.d(e,"b",function(){return s}),i.d(e,"a",function(){return n});const s=t=>{const e=["under-maintenance","major-outage","partial-outage","degraded-performance","operational"];let i;t&&(i=e.reduce((e,i)=>(e[i]=t(`statuses.${i}`),e),{}));return{keys:e,i18nKeys:i,icons:{"under-maintenance":"clock-solid","degraded-performance":"exclamation-circle-solid","partial-outage":"minus-circle-solid","major-outage":"times-circle-solid",operational:"check-circle-solid"}}},n=(t,e)=>{const i=s(t);return{title:i.i18nKeys[e],icon:i.icons[e]}}},190:function(t,e,i){"use strict";var s={props:{date:{type:String,required:!0},format:{default:"short",validator:function(t){return-1!==["short","long","month"].indexOf(t)}}},computed:{label:function(){var t=this.$t.bind(this);return this.$statusfy.dayjs(this.date).locale(this.$i18n.locale).format(t("dates.formats.".concat(this.format)))}}},n=i(4),a=Object(n.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("time",{attrs:{datetime:this.date}},[this._v("\n  "+this._s(this.label)+"\n")])},[],!1,null,null,null);a.options.__file="NiceDate.vue";e.a=a.exports},191:function(t,e,i){"use strict";var s=i(76);i.n(s).a.register({"fortawesome/clock-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm57.1 350.1L224.9 294c-3.1-2.3-4.9-5.9-4.9-9.7V116c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v137.7l63.5 46.2c5.4 3.9 6.5 11.4 2.6 16.8l-28.2 38.8c-3.9 5.3-11.4 6.5-16.8 2.6z"/>'}})},192:function(t,e,i){"use strict";var s=i(76);i.n(s).a.register({"fortawesome/exclamation-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z"/>'}})},193:function(t,e,i){"use strict";var s=i(76);i.n(s).a.register({"fortawesome/minus-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z"/>'}})},194:function(t,e,i){"use strict";var s=i(76);i.n(s).a.register({"fortawesome/times-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z"/>'}})},195:function(t,e,i){"use strict";var s=i(76);i.n(s).a.register({"fortawesome/check-circle-solid":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z"/>'}})},196:function(t,e,i){"use strict";i.d(e,"a",function(){return s});class s{constructor(t,e){this.axios=t,this.lang=e,this.isStatic=!0,this.basePath="/api/v0"}buildUrl(t,e={}){const i=Object.keys(e);let s,n=`${this.basePath}${t}`;if(this.isStatic)n="/static/content"+n,n+=(s=i.map(t=>`${t}-${e[t]}`).join("."))?`.${s}`:"",n+=`.${this.lang}.json`;else{let t=i.map(t=>`${t}=${e[t]}`).join("&");n+=t?`?${t}`:""}return n}async getSystems(){return this.axios.$get(this.buildUrl("/systems"))}async getIncidents(t=1){return this.axios.$get(this.buildUrl("/incidents",{page:t}))}async getIncident(t){return this.axios.$get(this.buildUrl(`/incidents/${t}`))}async getIncidentsHistory(t=1){return this.axios.$get(this.buildUrl("/incidents/history",{page:t}))}async getIncidentsTimeline(){return this.axios.$get(this.buildUrl("/incidents/timeline"))}}},197:function(t,e,i){"use strict";var s=i(3),n=i(16),a=i(21),r=i(110),c=i(52),l=i(11),o=i(53).f,u=i(78).f,d=i(10).f,f=i(198).trim,v=s.Number,h=v,m=v.prototype,p="Number"==a(i(77)(m)),y="trim"in String.prototype,_=function(t){var e=c(t,!1);if("string"==typeof e&&e.length>2){var i,s,n,a=(e=y?e.trim():f(e,3)).charCodeAt(0);if(43===a||45===a){if(88===(i=e.charCodeAt(2))||120===i)return NaN}else if(48===a){switch(e.charCodeAt(1)){case 66:case 98:s=2,n=49;break;case 79:case 111:s=8,n=55;break;default:return+e}for(var r,l=e.slice(2),o=0,u=l.length;o<u;o++)if((r=l.charCodeAt(o))<48||r>n)return NaN;return parseInt(l,s)}}return+e};if(!v(" 0o1")||!v("0b1")||v("+0x1")){v=function(t){var e=arguments.length<1?0:t,i=this;return i instanceof v&&(p?l(function(){m.valueOf.call(i)}):"Number"!=a(i))?r(new h(_(e)),i,v):_(e)};for(var g,b=i(6)?o(h):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),C=0;b.length>C;C++)n(h,g=b[C])&&!n(v,g)&&d(v,g,u(h,g));v.prototype=m,m.constructor=v,i(12)(s,"Number",v)}},198:function(t,e,i){var s=i(9),n=i(20),a=i(11),r=i(199),c="["+r+"]",l=RegExp("^"+c+c+"*"),o=RegExp(c+c+"*$"),u=function(t,e,i){var n={},c=a(function(){return!!r[t]()||"​"!="​"[t]()}),l=n[t]=c?e(d):r[t];i&&(n[i]=l),s(s.P+s.F*c,"String",n)},d=u.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(l,"")),2&e&&(t=t.replace(o,"")),t};t.exports=u},199:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},202:function(t,e,i){"use strict";i(19);var s=i(25),n=i.n(s),a=(i(197),i(189)),r=(i(191),i(192),i(193),i(194),i(195),i(76));i.n(r).a.register({"fortawesome/external-link-alt-solid":{width:16,height:16,viewBox:"0 0 576 512",data:'<path pid="0" _fill="currentColor" d="M576 24v127.984c0 21.461-25.96 31.98-40.971 16.971l-35.707-35.709-243.523 243.523c-9.373 9.373-24.568 9.373-33.941 0l-22.627-22.627c-9.373-9.373-9.373-24.569 0-33.941L442.756 76.676l-35.703-35.705C391.982 25.9 402.656 0 424.024 0H552c13.255 0 24 10.745 24 24zM407.029 270.794l-16 16A23.999 23.999 0 0 0 384 303.765V448H64V128h264a24.003 24.003 0 0 0 16.97-7.029l16-16C376.089 89.851 365.381 64 344 64H48C21.49 64 0 85.49 0 112v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V287.764c0-21.382-25.852-32.09-40.971-16.97z"/>'}});var c={components:{NiceDate:i(190).a},props:{incident:{type:Object,required:!0},summary:{type:Boolean,default:!1},level:{type:Number,default:4,validator:function(t){return-1!==[0,3,4].indexOf(t)}}},data:function(){return{content:""}},computed:{status:function(){var t=this.$t.bind(this);return Object(a.a)(t,this.incident.severity)},resolved:function(){var t=this.$t.bind(this),e=this.incident.resolved?"operational":this.incident.severity;return n()({value:this.incident.resolved},Object(a.a)(t,e))}},mounted:function(){var t=this,e=this.$t.bind(this);if(this.$refs.content){var i=this.$refs.content.querySelectorAll(".update-block"),s=this.$refs.content.querySelectorAll("a.external"),n=this.$refs["external-link-icon"].$el;i.forEach(function(i,s){var n=i.querySelectorAll(".update-block-date")[0],a=t.$statusfy.dayjs(n.innerHTML);n.innerHTML=a.locale(t.$i18n.locale).format(e("dates.formats.long"))}),s.forEach(function(t,e){t.appendChild(n)})}}},l=i(4),o=Object(l.a)(c,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"incident",class:t.incident.severity+" "+(t.resolved.value?"resolved":"unresolved")},[i("div",{staticClass:"incident-header",class:"level-"+t.level},[i("div",{staticClass:"incident-title"},[i("span",{staticClass:"badge"},[t._v("\n        "+t._s(t.resolved.value?t.$t("incidents.resolved"):t.$t("incidents.unresolved"))+"\n      ")]),t._v(" "),t.level>0?i("nuxt-link",{attrs:{to:t.localePath({name:"incidents-id",params:{id:t.incident.id}})}},[i("h"+t.level,{tag:"component"},[t._v("\n          "+t._s(t.incident.title)+"\n        ")])],1):t._e()],1),t._v(" "),i("div",{staticClass:"incident-systems"},t._l(t.incident.affectedsystems,function(e){return i("span",{key:e,staticClass:"badge"},[t._v("\n        "+t._s(t.$t("systems.items."+e+".title"))+"\n      ")])}))]),t._v(" "),i("div",{staticClass:"incident-subtitle"},[i("div",{staticClass:"status"},[i("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}}),t._v("\n      "+t._s(t.status.title)+"\n    ")],1),t._v(" "),i("div",[i("nice-date",{attrs:{date:t.incident.date,format:"long"}})],1)]),t._v(" "),i("div",{staticClass:"incident-body"},[t.summary?i("div",[t.incident.description?i("div",[t._v(t._s(t.incident.description))]):t._e()]):i("div",{ref:"content",staticClass:"markdown",domProps:{innerHTML:t._s(t.incident.content)}})]),t._v(" "),i("div",{staticClass:"hidden"},[i("svgicon",{ref:"external-link-icon",staticClass:"svg-inline--fa fa-w-12 ml-1",attrs:{name:"fortawesome/external-link-alt-solid"}})],1)])},[],!1,null,null,null);o.options.__file="Incident.vue";e.a=o.exports},213:function(t,e,i){"use strict";i.r(e);i(17);var s=i(1),n=i.n(s),a=i(196),r=(i(54),i(55),i(19),i(189)),c=i(202),l=i(190),o={components:{Incident:c.a,NiceDate:l.a},props:{data:{type:Object,required:!0}},computed:{days:function(){var t=this.data.days.slice(0),e=!0,i=!1,s=void 0;try{for(var n,a=t[Symbol.iterator]();!(e=(n=a.next()).done);e=!0){var r=n.value;r.status=this.getDayStatus(r.incidents)}}catch(t){i=!0,s=t}finally{try{e||null==a.return||a.return()}finally{if(i)throw s}}return t}},methods:{getDayStatus:function(t){var e=this.$t.bind(this),i=Object(r.b)(e),s="operational",n=!0,a=!1,c=void 0;try{for(var l,o=i.keys[Symbol.iterator]();!(n=(l=o.next()).done);n=!0){var u=l.value,d=!0,f=!1,v=void 0;try{for(var h,m=t[Symbol.iterator]();!(d=(h=m.next()).done);d=!0){if(h.value.severity===u){s=u;break}}}catch(t){f=!0,v=t}finally{try{d||null==m.return||m.return()}finally{if(f)throw v}}}}catch(t){a=!0,c=t}finally{try{n||null==o.return||o.return()}finally{if(a)throw c}}return{key:s,title:i.i18nKeys[s],icon:i.icons[s]}}}},u=i(4),d=Object(u.a)(o,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"timeline-container"},[i("h2",[t._v(t._s(t.$t("incidents.latest-incidents")))]),t._v(" "),i("ul",{staticClass:"timeline"},t._l(t.days,function(e){return i("li",{key:e.date,staticClass:"timeline-incident",class:e.status.key},[i("h3",{staticClass:"timeline-incident-title"},[i("nice-date",{attrs:{date:e.date}})],1),t._v(" "),i("div",{staticClass:"timeline-incident-body"},[0===e.incidents.length?i("div",{staticClass:"message"},[t._v("\n          "+t._s(t.$t("incidents.no-incidents"))+"\n        ")]):t._e(),t._v(" "),t._l(e.incidents,function(t){return i("incident",{key:t.id,attrs:{incident:t}})})],2)])})),t._v(" "),i("div",{staticClass:"text-center"},[i("nuxt-link",{staticClass:"btn mb-4",attrs:{to:t.localePath("history")}},[t._v("\n      "+t._s(t.$t("incidents.incidents-history"))+"\n    ")])],1)])},[],!1,null,null,null);d.options.__file="IncidentsTimeline.vue";var f=d.exports,v=(i(37),i(18),i(76));i.n(v).a.register({"fortawesome/question-circle-regular":{width:16,height:16,viewBox:"0 0 512 512",data:'<path pid="0" _fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 448c-110.532 0-200-89.431-200-200 0-110.495 89.472-200 200-200 110.491 0 200 89.471 200 200 0 110.53-89.431 200-200 200zm107.244-255.2c0 67.052-72.421 68.084-72.421 92.863V300c0 6.627-5.373 12-12 12h-45.647c-6.627 0-12-5.373-12-12v-8.659c0-35.745 27.1-50.034 47.579-61.516 17.561-9.845 28.324-16.541 28.324-29.579 0-17.246-21.999-28.693-39.784-28.693-23.189 0-33.894 10.977-48.942 29.969-4.057 5.12-11.46 6.071-16.666 2.124l-27.824-21.098c-5.107-3.872-6.251-11.066-2.644-16.363C184.846 131.491 214.94 112 261.794 112c49.071 0 101.45 38.304 101.45 88.8zM298 368c0 23.159-18.841 42-42 42s-42-18.841-42-42 18.841-42 42-42 42 18.841 42 42z"/>'}});i(191),i(192),i(193),i(194),i(195);var h={components:{"v-popover":function(){return i.e(13).then(i.bind(null,212)).then(function(t){return t.VPopover})}},props:{system:{type:Object,required:!0}},computed:{description:function(){var t=this.$t.bind(this),e=this.$te.bind(this),i="systems.items.".concat(this.system.name,".description");return e(i)?t(i):null},status:function(){var t=this.$t.bind(this);return Object(r.a)(t,this.system.status)}}},m=Object(u.a)(h,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"system flex flex-row justify-between",class:t.system.status},[i("div",{staticClass:"system-title flex-1"},[t._v("\n    "+t._s(t.$t("systems.items."+t.system.name+".title"))+"\n\n    "),t.description?i("v-popover",{staticClass:"hidden sm:inline",attrs:{trigger:"hover focus",placement:"top","popover-class":"popover"}},[i("span",{staticClass:"system-title-info"},[i("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/question-circle-regular"}})],1),t._v(" "),i("template",{slot:"popover"},[t._v(t._s(t.description))])],2):t._e()],1),t._v(" "),i("div",{staticClass:"system-status flex-1"},[i("span",{staticClass:"hidden sm:inline"},[t._v(t._s(t.status.title))]),t._v(" "),i("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}})],1)])},[],!1,null,null,null);m.options.__file="System.vue";var p={components:{System:m.exports},props:{systems:{type:Array,require:!0,default:function(){return[]}}},computed:{status:function(){var t=this,e=this.$t.bind(this),i=Object(r.b)(e),s="operational",n=!0,a=!1,c=void 0;try{for(var l,o=function(){var e=l.value;if(t.systems.find(function(t){return t.status===e}))return s=e,"break"},u=i.keys[Symbol.iterator]();!(n=(l=u.next()).done);n=!0){if("break"===o())break}}catch(t){a=!0,c=t}finally{try{n||null==u.return||u.return()}finally{if(a)throw c}}return{title:i.i18nKeys[s],icon:i.icons[s],key:s}}}},y=Object(u.a)(p,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"global-status flex justify-center",class:t.status.key},[i("span",[t._v(t._s(t.status.title))]),t._v(" "),i("span",{staticClass:"global-status-icon"},[i("svgicon",{staticClass:"svg-inline--fa fa-w-16",attrs:{name:"fortawesome/"+t.status.icon}})],1)]),t._v(" "),i("div",{staticClass:"systems-container flex flex-col"},t._l(t.systems,function(t){return i("system",{key:t.name,attrs:{system:t}})}))])},[],!1,null,null,null);y.options.__file="SystemStatus.vue";var _,g={layout:"home",components:{IncidentsTimeline:f,SystemStatus:y.exports},asyncData:(_=n()(regeneratorRuntime.mark(function t(e){var i,s,n,r;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return i=e.app,s=new a.a(i.$axios,i.i18n.locale),t.next=4,s.getSystems();case 4:return n=t.sent,t.next=7,s.getIncidentsTimeline();case 7:return r=t.sent,t.abrupt("return",{systems:n,timelineData:r});case 9:case"end":return t.stop()}},t,this)})),function(t){return _.apply(this,arguments)}),head:function(){var t=this.$t.bind(this);return{title:t("incidents.current-status"),meta:[{hid:"description",name:"description",content:t("incidents.current-status-description")}]}}},b=Object(u.a)(g,function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("system-status",{attrs:{systems:this.systems}}),this._v(" "),e("incidents-timeline",{attrs:{data:this.timelineData}})],1)},[],!1,null,null,null);b.options.__file="index.vue";e.default=b.exports}}]);