(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{"5YmJ":function(e,s,t){"use strict";t("doap")},doap:function(e,s,t){},wQbG:function(e,s,t){"use strict";t.r(s);var i={data:function(){return{isActive:!1,isFocused:!1}},computed:{toggleClasses:function(){return{active:this.isActive}}},mixins:[{data:()=>({searchTerm:""}),computed:{searchResults(){const e=this.searchTerm;return e.length<3?[]:this.$search.search({query:e,limit:8})}},watch:{$route(e,s){this.searchTerm=""}}}]},c=(t("5YmJ"),t("KHd+")),r=Object(c.a)(i,(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("div",{staticClass:"search-container",class:e.toggleClasses},[t("input",{directives:[{name:"model",rawName:"v-model",value:e.searchTerm,expression:"searchTerm"}],attrs:{id:"search",type:"text",placeholder:"Search",tabindex:"0"},domProps:{value:e.searchTerm},on:{focus:function(s){e.isFocused=!0,e.isActive=!0},blur:function(s){e.isFocused=!1,e.isActive=!1},input:function(s){s.target.composing||(e.searchTerm=s.target.value)}}}),t("div",{staticClass:"searchresults",attrs:{tabindex:"0"},on:{focus:function(s){e.isFocused=!0,e.isActive=!0},blur:function(s){e.isFocused=!1,e.isActive=!1}}},e._l(e.searchResults,(function(s){return t("g-link",{key:s.id,staticClass:"searchresults__item",attrs:{to:s.path}},[e._v("\n        "+e._s(s.title)+"\n      ")])})),1)])}),[],!1,null,null,null);s.default=r.exports}}]);