webpackJsonp([3],{"9bBU":function(e,t,n){n("mClu");var a=n("FeBl").Object;e.exports=function(e,t,n){return a.defineProperty(e,t,n)}},C4MV:function(e,t,n){e.exports={default:n("9bBU"),__esModule:!0}},Qt9A:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("bOdI"),o=n.n(a),s=n("Xxa5"),i=n.n(s),r=n("exGp"),c=n.n(r),l=n("Dd8w"),u=n.n(l),d=n("NYxO"),h=(n("mtWM"),n("3mzj")),p=n("VdBz"),v=n("4Azw"),m=n("ZYmg"),f=o()({name:"index",components:{Header:h.a,Footer:p.a,upBtn:v.a},data:function(){return{showStyle:!1,isRun:!1,slogan:null,enterAnimate:"animated fadeIn",leaveAnimate:"animated fadeOut",isScroll:!1,nowTime:"",top:0,elm:"",fixStyle:"",vedioCanPlay:"",randomSrc:"s1",searchtxt:"",showProgress:!1,fadeOut:!1,pcShow:!0,searchList:["站内","谷歌","百度","必应","淘宝","知乎"],searchType:"站内"}},watch:{$route:function(e,t){this.nowTime=(new Date).getTime()}},mounted:function(){var e=this;this.checkLogin(),this.randomSrc=""+this.$config.url.indexVideoSrc+Math.floor(17*Math.random()+1)+".mp4",window.addEventListener("scroll",this.handleScroll,!0),window.onresize=function(){var t=document.body.clientWidth,n=document.body.clientHeight,a=void 0,o=void 0;n/t<.5625?(o=.5625*(a=t),e.fixStyle={height:.5625*t+"px",width:t+"px","margin-bottom":(n-o)/2+"px","margin-left":"initial"}):(a=(o=n)/.5625,e.fixStyle={height:n+"px",width:n/.5625+"px","margin-left":(t-a)/2+"px","margin-bottom":"initial"})},window.onresize()},methods:u()({},Object(d.b)(["checkLogin","getPermissions"]),{showUpBtn:function(){},canplay:function(){this.vedioCanPlay=!0},srcollDown:function(){this.scrollAnimation(0,1100)},scrollAnimation:function(e,t){var n=this,a=t-e,o=e;setTimeout(function(){var s=Math.ceil(a/10);o+=s,window.scrollTo(o,e),a>10||a<-10?n.scrollAnimation(o,t):window.scrollTo(o,t)},1)},handleScroll:function(){var e=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop,t=e-this.i;this.i=e,this.elm=t<0?"scrollToDown":"scrollToTop"},fnsearch:function(){var e=this;return c()(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:t.t0=e.searchType,t.next="站内"===t.t0?3:"百度"===t.t0?7:"谷歌"===t.t0?8:"必应"===t.t0?9:"淘宝"===t.t0?11:"知乎"===t.t0?13:15;break;case 3:return t.next=5,m.a.searchBlogbyTitleAndBody(e.searchtxt,1,6);case 5:""!=t.sent.data?e.$router.push({path:"/searchBlog",query:{searchtxt:e.searchtxt}}):e.$message("没有搜索到相关内容");case 7:window.open("https://www.baidu.com/s?wd="+e.searchtxt);case 8:window.open("https://www.google.com/search?q="+e.searchtxt);case 9:return window.open(" https://cn.bing.com/search?q="+e.searchtxt),t.abrupt("break",15);case 11:return window.open(" https://s.taobao.com/search?q="+e.searchtxt),t.abrupt("break",15);case 13:return window.open(" https://www.zhihu.com/search?type=content&q="+e.searchtxt),t.abrupt("break",15);case 15:case"end":return t.stop()}},t,e)}))()}}),computed:u()({},Object(d.c)(["isLogin","user","progress"]))},"watch",{progress:function(e){var t=this;e.show?(this.fadeOut=!1,this.showProgress=!0):(this.fadeOut=!0,setTimeout(function(){t.showProgress=!1,t.fadeOut=!1},500))}}),x={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.showProgress?n("lottieLoading",{class:e.fadeOut?"animated fadeOut":""}):e._e(),e._v(" "),n("el-container",{staticStyle:{height:"100%"}},[n("el-header",{staticClass:"el-header",class:e.elm,staticStyle:{"z-index":"1002",background:"#2e3033"},style:e.$pcShow?"":"padding: 0;"},[n("Header")],1),e._v(" "),"/"==e.$route.path&&e.$pcShow?n("div",{staticStyle:{width:"100%",height:"100vh",position:"relative"}},[n("div",{staticClass:"video-container"},[n("div",{staticClass:"filter",style:e.fixStyle}),e._v(" "),n("video",{staticClass:"fillWidth",style:e.fixStyle,attrs:{autoplay:"",loop:"",type:"video/mp4",src:e.randomSrc,muted:""},domProps:{muted:!0},on:{canplay:e.canplay}}),e._v(" "),e.vedioCanPlay?e._e():n("div",{staticClass:"poster hidden"})]),e._v(" "),n("img",{staticClass:"logoImg",attrs:{src:e.$config.common.indexLogo,alt:""}}),e._v(" "),n("p",{staticClass:"logo_text",staticStyle:{"font-family":"Cousine"}},[e._v(" "+e._s(e.$config.common.indexDescription))]),e._v(" "),n("div",{staticClass:"logoInput"},[n("div",{staticClass:"seachType",staticStyle:{position:"absolute",top:"-25px",color:"white"}},e._l(e.searchList,function(t){return n("span",{key:t,staticStyle:{padding:"4px 13px 13px 13px",cursor:"pointer","user-select":"none"},style:e.searchType==t?"background: white;color: black;border-radius: 2px;":"",on:{click:function(n){e.searchType=t}}},[e._v(e._s(t))])})),e._v(" "),n("i",{staticClass:"iconfont icon-sousuo",staticStyle:{float:"left",height:"50px","line-height":"50px","margin-left":"10px"}}),e._v(" "),"站内"==e.searchType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchtxt,expression:"searchtxt"}],attrs:{type:"text",placeholder:"输入博客内容或者博客名"},domProps:{value:e.searchtxt},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.fnsearch(t):null},input:function(t){t.target.composing||(e.searchtxt=t.target.value)}}}):e._e(),e._v(" "),"百度"==e.searchType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchtxt,expression:"searchtxt"}],attrs:{type:"text",placeholder:"百度一下,你就知道"},domProps:{value:e.searchtxt},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.fnsearch(t):null},input:function(t){t.target.composing||(e.searchtxt=t.target.value)}}}):e._e(),e._v(" "),"谷歌"==e.searchType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchtxt,expression:"searchtxt"}],attrs:{type:"text",placeholder:"Google搜索"},domProps:{value:e.searchtxt},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.fnsearch(t):null},input:function(t){t.target.composing||(e.searchtxt=t.target.value)}}}):e._e(),e._v(" "),"必应"==e.searchType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchtxt,expression:"searchtxt"}],attrs:{type:"text",placeholder:"Bing搜索"},domProps:{value:e.searchtxt},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.fnsearch(t):null},input:function(t){t.target.composing||(e.searchtxt=t.target.value)}}}):e._e(),e._v(" "),"淘宝"==e.searchType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchtxt,expression:"searchtxt"}],attrs:{type:"text",placeholder:"淘宝"},domProps:{value:e.searchtxt},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.fnsearch(t):null},input:function(t){t.target.composing||(e.searchtxt=t.target.value)}}}):e._e(),e._v(" "),"知乎"==e.searchType?n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchtxt,expression:"searchtxt"}],attrs:{type:"text",placeholder:"知乎"},domProps:{value:e.searchtxt},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.fnsearch(t):null},input:function(t){t.target.composing||(e.searchtxt=t.target.value)}}}):e._e(),e._v(" "),"站内"==e.searchType?n("div",{staticClass:"searchBtn",on:{click:e.fnsearch}},[e._v("搜索")]):e._e(),e._v(" "),"百度"==e.searchType?n("div",{staticClass:"searchBtn",staticStyle:{width:"99px",background:"rgba(51, 133, 255, 1)"},on:{click:e.fnsearch}},[e._v("百度一下")]):e._e(),e._v(" "),"谷歌"==e.searchType?n("div",{staticClass:"searchBtn",staticStyle:{width:"80px",background:"rgb(234,67, 53)"},on:{click:e.fnsearch}},[e._v("Google")]):e._e(),e._v(" "),"必应"==e.searchType?n("div",{staticClass:"searchBtn",staticStyle:{width:"92px",background:"rgb(12, 132, 132)"},on:{click:e.fnsearch}},[e._v("Bing")]):e._e(),e._v(" "),"淘宝"==e.searchType?n("div",{staticClass:"searchBtn",staticStyle:{width:"73px",background:"rgb(255, 68, 0)"},on:{click:e.fnsearch}},[e._v("淘宝")]):e._e(),e._v(" "),"知乎"==e.searchType?n("div",{staticClass:"searchBtn",staticStyle:{width:"75px",background:"rgb(12, 137, 255)"},on:{click:e.fnsearch}},[e._v("知乎")]):e._e()]),e._v(" "),n("i",{staticClass:"iconfont icon-xiangxiajiantou downarrow",on:{click:function(t){e.srcollDown()}}})]):e._e(),e._v(" "),"/"!=e.$route.path||e.$pcShow?e._e():n("div",{staticStyle:{position:"absolute",top:"60px",width:"100%",left:"0",border:"0",background:"#2b2b2b",height:"50px"}},[n("i",{staticClass:"iconfont icon-sousuo",staticStyle:{float:"left",height:"50px","line-height":"50px","margin-left":"10px",color:"white"}}),e._v(" "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchtxt,expression:"searchtxt"}],staticStyle:{color:"white",height:"94%",width:"60%",border:"none",background:"#2b2b2b",outline:"none",display:"inline","padding-left":"10px"},attrs:{type:"text",placeholder:"请在这里输入您想要的博客"},domProps:{value:e.searchtxt},on:{input:function(t){t.target.composing||(e.searchtxt=t.target.value)}}}),e._v(" "),n("div",{staticClass:"searchBtn",on:{click:e.fnsearch}},[e._v("搜索")])]),e._v(" "),n("el-main",[n("transition",{attrs:{name:"custom-classes-transition","enter-active-class":e.enterAnimate}},[n("keep-alive",{attrs:{include:"blogList"}},[n("router-view",{key:e.nowTime,ref:"routerView",staticClass:"child-view"})],1)],1),e._v(" "),n("upBtn",{ref:"upBtn"})],1),e._v(" "),n("el-footer",[n("Footer")],1)],1)],1)},staticRenderFns:[]};var g=n("VU/8")(f,x,!1,function(e){n("lavY")},"data-v-4def8fb2",null);t.default=g.exports},bOdI:function(e,t,n){"use strict";t.__esModule=!0;var a,o=n("C4MV"),s=(a=o)&&a.__esModule?a:{default:a};t.default=function(e,t,n){return t in e?(0,s.default)(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lavY:function(e,t){},mClu:function(e,t,n){var a=n("kM2E");a(a.S+a.F*!n("+E39"),"Object",{defineProperty:n("evD5").f})}});
//# sourceMappingURL=3.c08975d59a99b8e1eac3.js.map