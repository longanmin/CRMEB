(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-points_mall-logistics_details"],{2156:function(t,e,i){var n=i("c652");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("4eb28ab8",n,!0,{sourceMap:!1,shadowMode:!1})},"22f5":function(t,e,i){"use strict";i.r(e);var n=i("389d"),o=i("a4f0");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("fcdf");var r,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"2f7414c2",null,!1,n["a"],r);e["default"]=s.exports},"389d":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"recommend",style:t.colorStyle},[i("v-uni-view",{staticClass:"title acea-row row-center-wrapper"},[i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian"}),i("v-uni-text",{staticClass:"name"},[t._v("热门推荐")]),i("v-uni-text",{staticClass:"iconfont icon-zhuangshixian lefticon"})],1),i("v-uni-view",{staticClass:"recommendList acea-row row-between-wrapper"},t._l(t.hostProduct,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item",attrs:{"hover-class":"none"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.goDetail(e)}}},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:e.image}}),e.activity&&"1"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("秒杀")]):t._e(),e.activity&&"2"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("砍价")]):t._e(),e.activity&&"3"===e.activity.type?i("span",{staticClass:"pictrue_log_big pictrue_log_class"},[t._v("拼团")]):t._e()],1),i("v-uni-view",{staticClass:"name line1"},[t._v(t._s(e.store_name))]),i("v-uni-view",{staticClass:"money font-color"},[t._v("￥"),i("v-uni-text",{staticClass:"num"},[t._v(t._s(e.price))])],1)],1)})),1)],1)},a=[]},4729:function(t,e,i){"use strict";i("99af"),i("d3b7"),Object.defineProperty(e,"__esModule",{value:!0}),e.goShopDetail=o,e.goPage=a;var n=getApp();function o(t,e){return new Promise((function(i){t.activity&&"1"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_seckill_details/index?id=".concat(t.activity.id,"&time=").concat(t.activity.time,"&status=1")}):t.activity&&"2"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_bargain_details/index?id=".concat(t.activity.id,"&bargain=").concat(e)}):t.activity&&"3"===t.activity.type?uni.navigateTo({url:"/pages/activity/goods_combination_details/index?id=".concat(t.activity.id)}):i(t)}))}function a(){return new Promise((function(t){if(0!=n.globalData.isIframe)return!1;t(!0)}))}},"4f72":function(t,e,i){"use strict";var n=i("4ea4");i("99af"),Object.defineProperty(e,"__esModule",{value:!0}),e.getCombinationList=a,e.getCombinationDetail=r,e.getCombinationPink=c,e.postCombinationRemove=s,e.getBargainList=u,e.getCombinationBannerList=d,e.getPink=l,e.getBargainUserList=f,e.getBargainDetail=g,e.postBargainStartUser=p,e.postBargainStart=v,e.postBargainHelp=m,e.postBargainHelpPrice=h,e.postBargainHelpList=b,e.postBargainHelpCount=_,e.postBargainShare=w,e.getSeckillIndexTime=y,e.getSeckillList=C,e.getSeckillDetail=x,e.getBargainPoster=L,e.getCombinationPoster=A,e.getBargainUserCancel=P,e.seckillCode=k,e.scombinationCode=I,e.getCombinationPosterData=D,e.getBargainPosterData=T,e.integralOrderConfirm=B,e.integralOrderCreate=z,e.integralOrderDetails=O,e.getIntegralProductDetail=S,e.getStoreIntegralList=$,e.getIntegralOrderList=M,e.getLogisticsDetails=j,e.orderTake=E,e.orderDel=H,e.getPresellList=U;var o=n(i("9011"));function a(t){return o.default.get("combination/list",t,{noAuth:!0})}function r(t){return o.default.get("combination/detail/"+t)}function c(t){return o.default.get("combination/pink/"+t)}function s(t){return o.default.post("combination/remove",t)}function u(t){return o.default.get("bargain/list",t,{noAuth:!0})}function d(t){return o.default.get("combination/banner_list",t,{noAuth:!0})}function l(t){return o.default.get("pink",t,{noAuth:!0})}function f(t){return o.default.get("bargain/user/list",t)}function g(t,e){return o.default.get("bargain/detail/".concat(t,"?bargainUid=").concat(e))}function p(t){return o.default.post("bargain/start/user",t)}function v(t){return o.default.post("bargain/start",{bargainId:t})}function m(t){return o.default.post("bargain/help",t)}function h(t){return o.default.post("bargain/help/price",t)}function b(t){return o.default.post("bargain/help/list",t)}function _(t){return o.default.post("bargain/help/count",t)}function w(t){return o.default.post("bargain/share",{bargainId:t})}function y(){return o.default.get("seckill/index",{},{noAuth:!0})}function C(t,e){return o.default.get("seckill/list/"+t,e,{noAuth:!0})}function x(t,e){return o.default.get("seckill/detail/"+t,e)}function L(t){return o.default.post("bargain/poster",t)}function A(t){return o.default.post("combination/poster",t)}function P(t){return o.default.post("bargain/user/cancel",t)}function k(t,e){return o.default.get("seckill/code/"+t,e)}function I(t){return o.default.get("combination/code/"+t)}function D(t){return o.default.get("combination/poster_info/"+t)}function T(t){return o.default.get("bargain/poster_info/"+t)}function B(t){return o.default.post("store_integral/order/confirm",t)}function z(t){return o.default.post("store_integral/order/create",t)}function O(t){return o.default.get("store_integral/order/detail/".concat(t))}function S(t){return o.default.get("store_integral/detail/"+t,{},{noAuth:!0})}function $(t){return o.default.get("store_integral/list",t)}function M(t){return o.default.get("store_integral/order/list",t)}function j(t){return o.default.get("store_integral/order/express/".concat(t))}function E(t){return o.default.post("store_integral/order/take",t)}function H(t){return o.default.post("store_integral/order/del",t)}function U(t){return o.default.get("advance/list",t)}},"701f":function(t,e,i){"use strict";i.r(e);var n=i("bcbe"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},"8cfc":function(t,e,i){"use strict";var n;i.d(e,"b",(function(){return o})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){return n}));var o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{style:t.colorStyle},[i("v-uni-view",{staticClass:"logistics"},[i("v-uni-view",{staticClass:"header acea-row row-between row-top"},[i("v-uni-view",{staticClass:"pictrue"},[i("v-uni-image",{attrs:{src:t.orderInfo.image}})],1),i("v-uni-view",{staticClass:"text acea-row row-between"},[i("v-uni-view",{staticClass:"name line2"},[t._v(t._s(t.orderInfo.store_name))]),i("v-uni-view",{staticClass:"money"},[i("v-uni-view",[t._v(t._s(t.orderInfo.total_price)+"积分")]),i("v-uni-view",[t._v("x"+t._s(t.orderInfo.total_num))])],1)],1)],1),i("v-uni-view",{staticClass:"logisticsCon"},[i("v-uni-view",{staticClass:"company acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"picTxt acea-row row-between-wrapper"},[i("v-uni-view",{staticClass:"iconfont icon-wuliu"}),i("v-uni-view",{staticClass:"text"},[i("v-uni-view",[i("v-uni-text",{staticClass:"name line1"},[t._v("物流公司：")]),t._v(t._s(t.orderInfo.delivery_name))],1),i("v-uni-view",{staticClass:"express line1"},[i("v-uni-text",{staticClass:"name"},[t._v("快递单号：")]),t._v(t._s(t.orderInfo.delivery_id))],1)],1)],1),i("v-uni-view",{staticClass:"copy copy-data",attrs:{"data-clipboard-text":t.orderInfo.delivery_id}},[t._v("复制单号")])],1),t._l(t.expressList,(function(e,n){return i("v-uni-view",{key:n,staticClass:"item"},[i("v-uni-view",{staticClass:"circular",class:0===n?"on":""}),i("v-uni-view",{staticClass:"text",class:0===n?"on-font on":""},[i("v-uni-view",[t._v(t._s(e.status))]),i("v-uni-view",{staticClass:"data",class:0===n?"on-font on":""},[t._v(t._s(e.time))])],1)],1)}))],2),i("recommend",{attrs:{hostProduct:t.hostProduct}})],1)],1)},a=[]},9530:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("26cb"),a=i("4729"),r=n(i("c83f")),c={computed:(0,o.mapGetters)(["uid"]),props:{hostProduct:{type:Array,default:function(){return[]}}},mixins:[r.default],data:function(){return{}},methods:{goDetail:function(t){(0,a.goShopDetail)(t,this.uid).then((function(e){uni.navigateTo({url:"/pages/goods_details/index?id=".concat(t.id)})}))}}};e.default=c},a4f0:function(t,e,i){"use strict";i.r(e);var n=i("9530"),o=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,(function(){return n[t]}))}(a);e["default"]=o.a},a546:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.logistics .header[data-v-7c6e9b95]{padding:%?23?% %?30?%;background-color:#fff;height:%?166?%;box-sizing:border-box}.logistics .header .pictrue[data-v-7c6e9b95]{width:%?120?%;height:%?120?%}.logistics .header .pictrue uni-image[data-v-7c6e9b95]{width:100%;height:100%;border-radius:%?6?%}.logistics .header .text[data-v-7c6e9b95]{width:%?540?%;font-size:%?28?%;color:#999;margin-top:%?6?%}.logistics .header .text .name[data-v-7c6e9b95]{width:%?365?%;color:#282828}.logistics .header .text .money[data-v-7c6e9b95]{text-align:right}.logistics .logisticsCon[data-v-7c6e9b95]{background-color:#fff;margin:%?12?% 0}.logistics .logisticsCon .company[data-v-7c6e9b95]{height:%?120?%;margin:0 0 %?45?% %?30?%;padding-right:%?30?%;border-bottom:%?1?% solid #f5f5f5}.logistics .logisticsCon .company .picTxt[data-v-7c6e9b95]{width:%?520?%}.logistics .logisticsCon .company .picTxt .iconfont[data-v-7c6e9b95]{width:%?50?%;height:%?50?%;background-color:#666;text-align:center;line-height:%?50?%;color:#fff;font-size:%?35?%}.logistics .logisticsCon .company .picTxt .text[data-v-7c6e9b95]{width:%?450?%;font-size:%?26?%;color:#282828}.logistics .logisticsCon .company .picTxt .text .name[data-v-7c6e9b95]{color:#999}.logistics .logisticsCon .company .picTxt .text .express[data-v-7c6e9b95]{margin-top:%?5?%}.logistics .logisticsCon .company .copy[data-v-7c6e9b95]{font-size:%?20?%;width:%?106?%;text-align:center;border-radius:%?3?%;border:1px solid #999;padding:%?3?% 0}.logistics .logisticsCon .item[data-v-7c6e9b95]{padding:0 %?40?%;position:relative}.logistics .logisticsCon .item .circular[data-v-7c6e9b95]{width:%?20?%;height:%?20?%;border-radius:50%;position:absolute;top:%?-1?%;left:%?31.5?%;background-color:#ddd}.logistics .logisticsCon .item .circular.on[data-v-7c6e9b95]{background-color:var(--view-theme)}.logistics .logisticsCon .item .text.on-font[data-v-7c6e9b95]{color:var(--view-theme)}.logistics .logisticsCon .item .text .data.on-font[data-v-7c6e9b95]{color:var(--view-theme)}.logistics .logisticsCon .item .text[data-v-7c6e9b95]{font-size:%?26?%;color:#666;width:%?615?%;border-left:%?1?% solid #e6e6e6;padding:0 0 %?60?% %?38?%}.logistics .logisticsCon .item .text.on[data-v-7c6e9b95]{border-left-color:var(--view-minorColor)}.logistics .logisticsCon .item .text .data[data-v-7c6e9b95]{font-size:%?24?%;color:#999;margin-top:%?10?%}.logistics .logisticsCon .item .text .data .time[data-v-7c6e9b95]{margin-left:%?15?%}',""]),t.exports=e},a547:function(t,e,i){"use strict";i.r(e);var n=i("8cfc"),o=i("701f");for(var a in o)"default"!==a&&function(t){i.d(e,t,(function(){return o[t]}))}(a);i("ed7f");var r,c=i("f0c5"),s=Object(c["a"])(o["default"],n["b"],n["c"],!1,null,"7c6e9b95",null,!1,n["a"],r);e["default"]=s.exports},bcbe:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=i("f15c"),a=i("4f72"),r=n(i("fd65")),c=i("c6cd3"),s=i("26cb"),u=n(i("22f5")),d=n(i("c83f")),l={components:{recommend:u.default},mixins:[d.default],data:function(){return{orderId:"",product:{productInfo:{}},orderInfo:{},expressList:[],hostProduct:[]}},computed:(0,s.mapGetters)(["isLogin"]),watch:{isLogin:{handler:function(t,e){t&&(this.getExpress(),this.get_host_product())},deep:!0}},onLoad:function(t){if(!t.order_id)return this.$util.Tips({title:"缺少订单号"});this.orderId=t.order_id,this.isLogin?(this.getExpress(),this.get_host_product()):(0,c.toLogin)()},onReady:function(){this.$nextTick((function(){var t=this,e=new r.default(".copy-data");e.on("success",(function(){t.$util.Tips({title:"复制成功"})}))}))},methods:{onLoadFun:function(){this.getExpress(),this.get_host_product()},copyOrderId:function(){uni.setClipboardData({data:this.orderInfo.delivery_id})},getExpress:function(){var t=this,e=this;(0,a.getLogisticsDetails)(e.orderId).then((function(t){var i=t.data.express.result||{};e.$set(e,"orderInfo",t.data.order),e.$set(e,"expressList",i.list||[])})).catch((function(e){t.$util.Tips({title:e})}))},get_host_product:function(){var t=this;(0,o.getProductHot)().then((function(e){t.$set(t,"hostProduct",e.data)}))}}};e.default=l},c652:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-2f7414c2]{background-color:#fff}.recommend .title[data-v-2f7414c2]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-2f7414c2]{margin:0 %?28?%}.recommend .title .iconfont[data-v-2f7414c2]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-2f7414c2]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-2f7414c2]{padding:0 %?30?%}.recommend .recommendList .item[data-v-2f7414c2]{width:%?335?%;margin-bottom:%?30?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?3?% %?10?% %?2?% rgba(0,0,0,.03)}.recommend .recommendList .item .pictrue[data-v-2f7414c2]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue uni-image[data-v-2f7414c2]{width:100%;height:100%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-2f7414c2]{font-size:%?28?%;color:#282828;margin-top:%?20?%;padding:0 %?10?%}.recommend .recommendList .item .money[data-v-2f7414c2]{font-size:%?20?%;margin-top:%?8?%;padding:0 %?10?% %?10?% %?10?%}.recommend .recommendList .item .money .num[data-v-2f7414c2]{font-size:%?28?%}',""]),t.exports=e},e9e4:function(t,e,i){var n=i("a546");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var o=i("4f06").default;o("0d2c3937",n,!0,{sourceMap:!1,shadowMode:!1})},ed7f:function(t,e,i){"use strict";var n=i("e9e4"),o=i.n(n);o.a},f15c:function(t,e,i){"use strict";var n=i("4ea4");Object.defineProperty(e,"__esModule",{value:!0}),e.getProductDetail=a,e.getProductCode=r,e.collectAdd=c,e.collectDel=s,e.postCartAdd=u,e.getCategoryList=d,e.getProductslist=l,e.getProductHot=f,e.collectAll=g,e.getGroomList=p,e.getCollectUserList=v,e.getReplyList=m,e.getReplyConfig=h,e.getSearchKeyword=b,e.storeListApi=_,e.storeDiscountsList=w,e.postCartNum=y,e.create=C,e.getAgentAgreement=x,e.registerVerify=L,e.getCodeApi=A,e.getGoodsDetails=P,e.getAttr=k,e.getHomeProducts=I,e.getPresellProductDetail=D;var o=n(i("9011"));function a(t){return o.default.get("product/detail/"+t,{},{noAuth:!0})}function r(t){return o.default.get("product/code/"+t,{})}function c(t,e){return o.default.post("collect/add",{id:t,product:void 0===e?"product":e})}function s(t,e){return o.default.post("collect/del",{id:t,category:void 0===e?"product":e})}function u(t){return o.default.post("cart/add",t)}function d(){return o.default.get("category",{},{noAuth:!0})}function l(t){return o.default.get("products",t,{noAuth:!0})}function f(t,e){return o.default.get("product/hot",{page:void 0===t?1:t,limit:void 0===e?4:e},{noAuth:!0})}function g(t,e){return o.default.post("collect/all",{id:t,category:void 0===e?"product":e})}function p(t,e){return o.default.get("groom/list/"+t,e,{noAuth:!0})}function v(t){return o.default.get("collect/user",t)}function m(t,e){return o.default.get("reply/list/"+t,e)}function h(t){return o.default.get("reply/config/"+t)}function b(){return o.default.get("search/keyword",{},{noAuth:!0})}function _(t){return o.default.get("store_list",t)}function w(t){return o.default.get("store_discounts/list/"+t,{},{noAuth:!0})}function y(t){return o.default.post("v2/set_cart_num",t)}function C(t){return o.default.post("agent/apply/".concat(t.id),t)}function x(t){return o.default.get("agent/get_agent_agreement",{},{noAuth:!0})}function L(t){return o.default.post("register/verify",t,{noAuth:!0})}function A(){return o.default.get("verify_code",{},{noAuth:!0})}function P(){return o.default.get("agent/apply/info",{},{noAuth:!0})}function k(t,e){return o.default.get("v2/get_attr/"+t+"/"+e)}function I(t){return o.default.get("home/products",t,{noAuth:!0})}function D(t){return o.default.get("advance/detail/"+t)}},fcdf:function(t,e,i){"use strict";var n=i("2156"),o=i.n(n);o.a}}]);