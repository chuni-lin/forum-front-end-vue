(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5af1f3cb"],{"4c9f":function(t,e,s){"use strict";s("6609")},6609:function(t,e,s){},"9cab":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container py-5"},[s("NavTabs"),t.isLoading?s("Spinner"):[s("h1",{staticClass:"mt-5"},[t._v(" 最新動態 ")]),s("hr"),s("div",{staticClass:"row"},[s("div",{staticClass:"col-md-6"},[s("h3",[t._v("最新餐廳")]),s("NewestRestaurants",{attrs:{rests:t.restaurants}})],1),s("div",{staticClass:"col-md-6"},[s("h3",[t._v("最新評論")]),s("NewestComments",{attrs:{comments:t.comments}})],1)])]],2)},r=[],n=(s("4de4"),s("96cf"),s("1da1")),i=s("8bb1"),c=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v(" 最新餐廳 ")]),s("div",{staticClass:"card-body"},t._l(t.rests,(function(e){return s("div",{key:e.id},[s("h4",[s("router-link",{attrs:{to:{name:"restaurant",params:{id:e.id}}}},[t._v(" "+t._s(e.name)+" ")]),s("small",[t._v(t._s(e.Category?e.Category.name:"未分類"))])],1),s("p",[t._v(t._s(e.description))]),t._v(t._s(t._f("fromNow")(e.createdAt))+" "),s("hr")])})),0)])},o=[],u=s("2708"),d={mixins:[u["b"]],props:{rests:{type:Array,required:!0}}},l=d,m=(s("4c9f"),s("2877")),v=Object(m["a"])(l,c,o,!1,null,"167cb172",null),f=v.exports,_=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card"},[s("div",{staticClass:"card-header"},[t._v(" 最新評論 ")]),s("div",{staticClass:"card-body"},t._l(t.comments,(function(e){return s("div",{key:e.id},[s("h4",[s("router-link",{attrs:{to:{name:"restaurant",params:{id:e.Restaurant.id}}}},[t._v(" "+t._s(e.Restaurant.name)+" ")])],1),s("p",[t._v(t._s(e.text))]),t._v("by "),s("router-link",{attrs:{to:{name:"user",params:{id:e.User.id}}}},[t._v(" "+t._s(e.User.name)+" ")]),t._v(" at "+t._s(t._f("fromNow")(e.createdAt))+" "),s("hr")],1)})),0)])},p=[],h={mixins:[u["b"]],props:{comments:{type:Array,required:!0}}},b=h,w=Object(m["a"])(b,_,p,!1,null,null,null),C=w.exports,y=s("c4c3"),g=s("2fa3"),k=s("2375"),x={components:{NavTabs:i["a"],NewestRestaurants:f,NewestComments:C,Spinner:k["a"]},data:function(){return{restaurants:[],comments:[],isLoading:!0}},created:function(){this.fetchFeeds()},methods:{fetchFeeds:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var s,a,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t.isProcessing=!0,e.next=4,y["a"].getFeeds();case 4:s=e.sent,a=s.data,r=a.restaurants,n=a.comments,t.restaurants=r,t.comments=n.filter((function(t){return t.Restaurant&&t.text})),t.isLoading=!1,e.next=15;break;case 11:e.prev=11,e.t0=e["catch"](0),t.isLoading=!1,g["a"].fire({icon:"error",title:"無法取得餐廳資料，請稍後再試"});case 15:case"end":return e.stop()}}),e,null,[[0,11]])})))()}}},N=x,R=Object(m["a"])(N,a,r,!1,null,null,null);e["default"]=R.exports}}]);
//# sourceMappingURL=chunk-5af1f3cb.3a7dd8eb.js.map