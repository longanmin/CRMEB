(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-activity-bargain-index"],{"0820":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"time",style:t.justifyLeft},[t.tipText?a("v-uni-text",{staticClass:"red"},[t._v(t._s(t.tipText))]):t._e(),!0===t.isDay?a("v-uni-text",{staticClass:"styleAll",style:"background-color:"+t.bgColor+";color:"+t.colors+";"},[t._v(t._s(t.day))]):t._e(),t.dayText?a("v-uni-text",{staticClass:"timeTxt red"},[t._v(t._s(t.dayText))]):t._e(),a("v-uni-text",{staticClass:"styleAll",style:"background-color:"+t.bgColor+";color:"+t.colors+";"},[t._v(t._s(t.hour))]),t.hourText?a("v-uni-text",{staticClass:"timeTxt red"},[t._v(t._s(t.hourText))]):t._e(),a("v-uni-text",{staticClass:"styleAll",style:"background-color:"+t.bgColor+";color:"+t.colors+";"},[t._v(t._s(t.minute))]),t.minuteText?a("v-uni-text",{staticClass:"timeTxt red"},[t._v(t._s(t.minuteText))]):t._e(),a("v-uni-text",{staticClass:"styleAll",style:"background-color:"+t.bgColor+";color:"+t.colors+";"},[t._v(t._s(t.second))]),t.secondText?a("v-uni-text",{staticClass:"timeTxt red"},[t._v(t._s(t.secondText))]):t._e()],1)},r=[]},"087a":function(t,e,a){var n=a("84a3");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("28395c59",n,!0,{sourceMap:!1,shadowMode:!1})},"09c9":function(t,e,a){"use strict";var n=a("6a8c"),i=a.n(n);i.a},"146b":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".Loads[data-v-0e755555]{height:%?80?%;font-size:%?25?%;color:#000}.Loads .iconfont[data-v-0e755555]{font-size:%?30?%;margin-right:%?10?%;height:%?32?%;line-height:%?32?%}\n/*加载动画*/@-webkit-keyframes load-data-v-0e755555{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-data-v-0e755555{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loadingpic[data-v-0e755555]{-webkit-animation:load-data-v-0e755555 3s linear 1s infinite;animation:load-data-v-0e755555 3s linear 1s infinite}.loading[data-v-0e755555]{-webkit-animation:load-data-v-0e755555 linear 1s infinite;animation:load-data-v-0e755555 linear 1s infinite}",""]),t.exports=e},"19a6":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.empty-box[data-v-6b1a6701]{display:flex;flex-direction:column;justify-content:center;align-items:center;margin-top:%?200?%}.empty-box uni-image[data-v-6b1a6701]{width:%?414?%;height:%?240?%}.empty-box .txt[data-v-6b1a6701]{font-size:%?26?%;color:#999}',""]),t.exports=e},"207e":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(a("2a88")),r=n(a("e972")),o=a("4f72"),s=a("3474"),c=n(a("48b9")),u=n(a("f497")),d=n(a("c83f")),l={name:"BargainRecord",components:{CountDown:i.default,Loading:c.default,emptyPage:r.default,home:u.default},props:{},mixins:[d.default],data:function(){return{bargain:[],status:!1,loadingList:!1,page:1,limit:20,userInfo:{}}},onLoad:function(){this.getBargainUserList(),this.getUserInfo()},methods:{goDetail:function(t){uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t,"&bargain=").concat(this.userInfo.uid)})},goList:function(){uni.navigateTo({url:"/pages/activity/goods_bargain/index"})},getBargainUserList:function(){var t=this;t.loadingList||t.status||(0,o.getBargainUserList)({page:t.page,limit:t.limit}).then((function(e){t.status=e.data.length<t.limit,t.bargain.push.apply(t.bargain,e.data),t.page++,t.loadingList=!1})).catch((function(e){t.$util.Tips({title:e})}))},getBargainUserCancel:function(t){var e=this;(0,o.getBargainUserCancel)({bargainId:t}).then((function(t){e.status=!1,e.loadingList=!1,e.page=1,e.bargain=[],e.getBargainUserList(),e.$util.Tips({title:t.msg})})).catch((function(t){e.$util.Tips({title:t})}))},getUserInfo:function(){var t=this;(0,s.getUserInfo)().then((function(e){t.userInfo=e.data}))}},onReachBottom:function(){this.getBargainUserList()}};e.default=l},2178:function(t,e,a){"use strict";a.r(e);var n=a("5d8f"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"24b4":function(t,e,a){"use strict";var n=a("bfb3"),i=a.n(n);i.a},"251a":function(t,e,a){"use strict";a.r(e);var n=a("e9d3"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"2a17":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".pictrueBox[data-v-a68dde36]{width:%?130?%;height:%?120?%}\n\n/*返回主页按钮*/.home[data-v-a68dde36]{position:fixed;color:#fff;text-align:center;z-index:999;right:%?15?%;display:flex}.home .homeCon[data-v-a68dde36]{border-radius:%?50?%;opacity:0;height:0;color:var(--view-theme);width:0}.home .homeCon.on[data-v-a68dde36]{opacity:1;-webkit-animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);animation:bounceInRight .5s cubic-bezier(.215,.61,.355,1);width:%?300?%;height:%?86?%;margin-bottom:%?20?%;display:flex;justify-content:center;align-items:center;background:var(--view-theme)!important}.home .homeCon .iconfont[data-v-a68dde36]{font-size:%?48?%;color:#fff;display:inline-block;margin:0 auto}.home .pictrue[data-v-a68dde36]{width:%?86?%;height:%?86?%;border-radius:50%;margin:0 auto;background-color:var(--view-theme)}.home .pictrue .image[data-v-a68dde36]{width:100%;height:100%;border-radius:50%;-webkit-transform:rotate(90deg);transform:rotate(90deg);ms-transform:rotate(90deg);moz-transform:rotate(90deg);webkit-transform:rotate(90deg);o-transform:rotate(90deg)}",""]),t.exports=e},"2a88":function(t,e,a){"use strict";a.r(e);var n=a("0820"),i=a("8ddf");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("d029");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"13279574",null,!1,n["a"],o);e["default"]=c.exports},"450c":function(t,e,a){"use strict";a.r(e);var n=a("207e"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"48b9":function(t,e,a){"use strict";a.r(e);var n=a("9dfb"),i=a("251a");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("09c9");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"0e755555",null,!1,n["a"],o);e["default"]=c.exports},"4f72":function(t,e,a){"use strict";var n=a("4ea4");a("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=r,e.getCombinationDetail=o,e.getCombinationPink=s,e.postCombinationRemove=c,e.getBargainList=u,e.getCombinationBannerList=d,e.getPink=l,e.getBargainUserList=f,e.getBargainDetail=g,e.postBargainStartUser=v,e.postBargainStart=p,e.postBargainHelp=m,e.postBargainHelpPrice=b,e.postBargainHelpList=h,e.postBargainHelpCount=x,e.postBargainShare=y,e.getSeckillIndexTime=_,e.getSeckillList=w,e.getSeckillDetail=C,e.getBargainPoster=T,e.getCombinationPoster=k,e.getBargainUserCancel=L,e.seckillCode=B,e.scombinationCode=M,e.getCombinationPosterData=S,e.getBargainPosterData=A,e.integralOrderConfirm=O,e.integralOrderCreate=j,e.integralOrderDetails=D,e.getIntegralProductDetail=z,e.getStoreIntegralList=P,e.getIntegralOrderList=U,e.getLogisticsDetails=I,e.orderTake=E,e.orderDel=$,e.getPresellList=H;var i=n(a("9011"));function r(t){return i.default.get("combination/list",t,{noAuth:!0})}function o(t){return i.default.get("combination/detail/"+t)}function s(t){return i.default.get("combination/pink/"+t)}function c(t){return i.default.post("combination/remove",t)}function u(t){return i.default.get("bargain/list",t,{noAuth:!0})}function d(t){return i.default.get("combination/banner_list",t,{noAuth:!0})}function l(t){return i.default.get("pink",t,{noAuth:!0})}function f(t){return i.default.get("bargain/user/list",t)}function g(t,e){return i.default.get("bargain/detail/".concat(t,"?bargainUid=").concat(e))}function v(t){return i.default.post("bargain/start/user",t)}function p(t){return i.default.post("bargain/start",{bargainId:t})}function m(t){return i.default.post("bargain/help",t)}function b(t){return i.default.post("bargain/help/price",t)}function h(t){return i.default.post("bargain/help/list",t)}function x(t){return i.default.post("bargain/help/count",t)}function y(t){return i.default.post("bargain/share",{bargainId:t})}function _(){return i.default.get("seckill/index",{},{noAuth:!0})}function w(t,e){return i.default.get("seckill/list/"+t,e,{noAuth:!0})}function C(t,e){return i.default.get("seckill/detail/"+t,e)}function T(t){return i.default.post("bargain/poster",t)}function k(t){return i.default.post("combination/poster",t)}function L(t){return i.default.post("bargain/user/cancel",t)}function B(t,e){return i.default.get("seckill/code/"+t,e)}function M(t){return i.default.get("combination/code/"+t)}function S(t){return i.default.get("combination/poster_info/"+t)}function A(t){return i.default.get("bargain/poster_info/"+t)}function O(t){return i.default.post("store_integral/order/confirm",t)}function j(t){return i.default.post("store_integral/order/create",t)}function D(t){return i.default.get("store_integral/order/detail/".concat(t))}function z(t){return i.default.get("store_integral/detail/"+t,{},{noAuth:!0})}function P(t){return i.default.get("store_integral/list",t)}function U(t){return i.default.get("store_integral/order/list",t)}function I(t){return i.default.get("store_integral/order/express/".concat(t))}function E(t){return i.default.post("store_integral/order/take",t)}function $(t){return i.default.post("store_integral/order/del",t)}function H(t){return i.default.get("advance/list",t)}},"5d8f":function(t,e,a){"use strict";var n=a("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a("26cb"),r=n(a("c83f")),o={name:"Home",props:{},mixins:[r.default],data:function(){return{top:"545"}},computed:(0,i.mapGetters)(["homeActive"]),methods:{setTouchMove:function(t){var e=this;t.touches[0].clientY<545&&t.touches[0].clientY>66&&(e.top=t.touches[0].clientY)},open:function(){this.homeActive?this.$store.commit("CLOSE_HOME"):this.$store.commit("OPEN_HOME")}},created:function(){},beforeDestroy:function(){this.$store.commit("CLOSE_HOME")}};e.default=o},"5f42":function(t,e,a){"use strict";a("a9e3"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"countDown",props:{justifyLeft:{type:String,default:""},tipText:{type:String,default:"倒计时"},dayText:{type:String,default:"天"},hourText:{type:String,default:"时"},minuteText:{type:String,default:"分"},secondText:{type:String,default:"秒"},datatime:{type:Number,default:0},isDay:{type:Boolean,default:!0},bgColor:{type:String,default:""},colors:{type:String,default:""}},data:function(){return{day:"00",hour:"00",minute:"00",second:"00"}},created:function(){this.show_time()},mounted:function(){},methods:{show_time:function(){var t=this;function e(){var e=t.datatime-Date.parse(new Date)/1e3,a=0,n=0,i=0,r=0;e>0?(a=!0===t.isDay?Math.floor(e/86400):0,n=Math.floor(e/3600)-24*a,i=Math.floor(e/60)-24*a*60-60*n,r=Math.floor(e)-24*a*60*60-60*n*60-60*i,n<=9&&(n="0"+n),i<=9&&(i="0"+i),r<=9&&(r="0"+r),t.day=a,t.hour=n,t.minute=i,t.second=r):(t.day="00",t.hour="00",t.minute="00",t.second="00")}e(),setInterval(e,1e3)}}};e.default=n},"676c":function(t,e,a){"use strict";a.r(e);var n=a("887b"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"6a8c":function(t,e,a){var n=a("146b");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("23f02c57",n,!0,{sourceMap:!1,shadowMode:!1})},"7e3e":function(t,e,a){var n=a("f87e");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("144b735b",n,!0,{sourceMap:!1,shadowMode:!1})},"84a3":function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,".time[data-v-13279574]{display:flex;justify-content:center}.red[data-v-13279574]{color:var(--view-theme);margin:0 %?4?%}",""]),t.exports=e},"887b":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{title:{type:String,default:"暂无记录"}}};e.default=n},"8c5c":function(t,e,a){var n=a("2a17");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("f58c1430",n,!0,{sourceMap:!1,shadowMode:!1})},"8ddf":function(t,e,a){"use strict";a.r(e);var n=a("5f42"),i=a.n(n);for(var r in n)"default"!==r&&function(t){a.d(e,t,(function(){return n[t]}))}(r);e["default"]=i.a},"9a28":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:t.colorStyle},[t.bargain.length>0?[a("div",{ref:"container",staticClass:"bargain-record"},[t._l(t.bargain,(function(e,n){return a("div",{key:n,staticClass:"item"},[a("div",{staticClass:"picTxt acea-row row-between-wrapper"},[a("div",{staticClass:"pictrue"},[a("v-uni-image",{attrs:{src:e.image}})],1),a("div",{staticClass:"text acea-row row-column-around"},[a("div",{staticClass:"line1",staticStyle:{width:"100%"}},[t._v(t._s(e.title))]),1===e.status?a("count-down",{attrs:{"justify-left":"justify-content:left","is-day":!0,"tip-text":"倒计时 ","day-text":" 天 ","hour-text":" 时 ","minute-text":" 分 ","second-text":" 秒",datatime:e.datatime}}):3===e.status?a("div",{staticClass:"successTxt font-num"},[t._v("砍价成功")]):a("div",{staticClass:"endTxt"},[t._v("活动已结束")]),a("div",{staticClass:"money font-num"},[t._v("已砍至"),a("span",{staticClass:"symbol"},[t._v("￥")]),a("span",{staticClass:"num"},[t._v(t._s(e.residue_price))])])],1)]),a("div",{staticClass:"bottom acea-row row-between-wrapper"},[1===e.status?a("div",{staticClass:"purple"},[t._v("活动进行中")]):3===e.status?a("div",{staticClass:"success"},[t._v("砍价成功")]):a("div",{staticClass:"end"},[t._v("活动已结束")]),a("div",{staticClass:"acea-row row-middle row-right"},[1===e.status?a("div",{staticClass:"bnt cancel",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.getBargainUserCancel(e.bargain_id)}}},[t._v("取消活动")]):t._e(),1===e.status?a("div",{staticClass:"bnt bg-color-red",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.goDetail(e.bargain_id)}}},[t._v("继续砍价")]):t._e()])])])})),a("Loading",{attrs:{loaded:t.status,loading:t.loadingList}})],2)]:t._e(),0==t.bargain.length?[a("emptyPage",{attrs:{title:"暂无砍价记录～"}})]:t._e(),a("home")],2)},r=[]},"9dfb":function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[t.loading&&!t.loaded?a("v-uni-view",{staticClass:"Loads acea-row row-center-wrapper",staticStyle:{"margin-top":".2rem"}},[t.loading?a("v-uni-view",[a("v-uni-view",{staticClass:"iconfont icon-jiazai loading acea-row row-center-wrapper"}),t._v("正在加载中")],1):a("v-uni-view",[t._v("上拉加载更多")])],1):t._e()],1)},r=[]},"9e7f":function(t,e,a){"use strict";a.r(e);var n=a("9a28"),i=a("450c");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("c16c");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"39411a06",null,!1,n["a"],o);e["default"]=c.exports},bfb3:function(t,e,a){var n=a("19a6");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=a("4f06").default;i("d466477a",n,!0,{sourceMap:!1,shadowMode:!1})},c16c:function(t,e,a){"use strict";var n=a("7e3e"),i=a.n(n);i.a},d029:function(t,e,a){"use strict";var n=a("087a"),i=a.n(n);i.a},e972:function(t,e,a){"use strict";a.r(e);var n=a("eca9"),i=a("676c");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("24b4");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6b1a6701",null,!1,n["a"],o);e["default"]=c.exports},e9d3:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"Loading",props:{loaded:{type:Boolean,default:!1},loading:{type:Boolean,default:!1}}};e.default=n},eca9:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"empty-box"},[a("v-uni-image",{attrs:{src:"/static/images/empty-box.png"}}),a("v-uni-view",{staticClass:"txt"},[t._v(t._s(t.title))])],1)},r=[]},f497:function(t,e,a){"use strict";a.r(e);var n=a("f51e"),i=a("2178");for(var r in i)"default"!==r&&function(t){a.d(e,t,(function(){return i[t]}))}(r);a("f969");var o,s=a("f0c5"),c=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"a68dde36",null,!1,n["a"],o);e["default"]=c.exports},f51e:function(t,e,a){"use strict";var n;a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return n}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{style:t.colorStyle},[a("v-uni-view",{staticStyle:{"touch-action":"none"}},[a("v-uni-view",{staticClass:"home",staticStyle:{position:"fixed"},style:{top:t.top+"px"},attrs:{id:"right-nav"},on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.setTouchMove.apply(void 0,arguments)}}},[t.homeActive?a("v-uni-view",{staticClass:"homeCon bg-color",class:!0===t.homeActive?"on":""},[a("v-uni-navigator",{staticClass:"iconfont icon-shouye-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/index/index"}}),a("v-uni-navigator",{staticClass:"iconfont icon-caigou-xianxing",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/order_addcart/order_addcart"}}),a("v-uni-navigator",{staticClass:"iconfont icon-yonghu1",attrs:{"hover-class":"none","open-type":"switchTab",url:"/pages/user/index"}})],1):t._e(),a("v-uni-view",{staticClass:"pictrueBox",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.open.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"pictrue"},[a("v-uni-image",{staticClass:"image",attrs:{src:!0===t.homeActive?"/static/images/close.gif":"/static/images/open.gif"}})],1)],1)],1)],1)],1)},r=[]},f87e:function(t,e,a){var n=a("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/*砍价记录*/.bargain-record .item .picTxt .text .time .styleAll[data-v-39411a06]{color:#fc4141;font-size:%?24?%}.bargain-record .item .picTxt .text .time .red[data-v-39411a06]{color:#999;font-size:%?24?%}.bargain-record .item[data-v-39411a06]{background-color:#fff;margin-bottom:%?12?%}.bargain-record .item .picTxt[data-v-39411a06]{height:%?210?%;border-bottom:1px solid #f0f0f0;padding:0 %?30?%}.bargain-record .item .picTxt .pictrue[data-v-39411a06]{width:%?150?%;height:%?150?%}.bargain-record .item .picTxt .pictrue uni-image[data-v-39411a06]{width:100%;height:100%;border-radius:%?6?%}.bargain-record .item .picTxt .text[data-v-39411a06]{width:%?515?%;font-size:%?30?%;color:#282828;height:%?150?%}.bargain-record .item .picTxt .text .time[data-v-39411a06]{font-size:%?24?%;color:#868686;justify-content:left!important}.bargain-record .item .picTxt .text .successTxt[data-v-39411a06]{font-size:%?24?%}.bargain-record .item .picTxt .text .endTxt[data-v-39411a06]{font-size:%?24?%;color:#999}.bargain-record .item .picTxt .text .money[data-v-39411a06]{font-size:%?24?%}.bargain-record .item .picTxt .text .money .num[data-v-39411a06]{font-size:%?32?%;font-weight:700}.bargain-record .item .picTxt .text .money .symbol[data-v-39411a06]{font-weight:700}.bargain-record .item .bottom[data-v-39411a06]{height:%?100?%;padding:0 %?30?%;font-size:%?27?%}.bargain-record .item .bottom .purple[data-v-39411a06]{color:#f78513}.bargain-record .item .bottom .end[data-v-39411a06]{color:#999}.bargain-record .item .bottom .success[data-v-39411a06]{color:#e93323}.bargain-record .item .bottom .bnt[data-v-39411a06]{font-size:%?27?%;color:#fff;width:%?176?%;height:%?60?%;border-radius:%?32?%;text-align:center;line-height:%?60?%}.bargain-record .item .bottom .bnt.cancel[data-v-39411a06]{color:#aaa;border:1px solid #ddd}.bargain-record .item .bottom .bnt ~ .bnt[data-v-39411a06]{margin-left:%?18?%}',""]),t.exports=e},f969:function(t,e,a){"use strict";var n=a("8c5c"),i=a.n(n);i.a}}]);