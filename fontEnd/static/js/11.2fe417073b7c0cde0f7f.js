webpackJsonp([11],{QlWu:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=s("Xxa5"),a=s.n(r),n=s("exGp"),i=s.n(n),o=s("Dd8w"),u=s.n(o),c=s("NYxO"),g=s("Pfph"),l=s("3mzj"),m=s("VdBz"),p={name:"index",components:{Header:l.a,Footer:m.a},data:function(){return{signInName:JSON.parse(localStorage.getItem("loginRemeber"))?JSON.parse(localStorage.getItem("loginRemeber")).name:"",signInPassword:"",registerName:"",registerPassword:"",registerPassword2:"",Auth:"",registerEmail:"",time:0,timeInterval:"",registercode:"",showRegister:!1}},mounted:function(){console.log(this.$route),this.$pcShow&&document.querySelector(".img__btn").addEventListener("click",function(){document.querySelector(".cont").classList.toggle("s--signup")})},methods:u()({},Object(c.b)(["login","checkLogin","logout","getPermissions"]),{showBtn:function(){},loginGit:function(){window.location.href="https://github.com/login/oauth/authorize?client_id=97115b7345ed4bf40f56&redirect_uri=http://dlhtx.zicp.vip:9090/redirect"},fnshowRegister:function(){this.showRegister?this.showRegister=!1:this.showRegister=!0},getCode:function(){var e=this;return i()(a.a.mark(function t(){return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(/^[\da-zA-Z_\u4e00-\u9f5a]{3,16}$/.test(e.registerName)){t.next=3;break}return t.abrupt("return",e.$message({message:"用户名为3到16位中英文(可包含中文,数字,字母和下划线)",type:"warning"}));case 3:if(/^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/.test(e.registerEmail)){t.next=6;break}return t.abrupt("return",e.$message("邮箱格式错误"));case 6:if(""!=e.registerName){t.next=8;break}return t.abrupt("return",e.$message("用户名不可为空"));case 8:if(""!=e.registerEmail){t.next=10;break}return t.abrupt("return",e.$message("邮箱不可为空"));case 10:e.time=60,e.timeInterval=setInterval(function(){e.time--,0==e.time&&clearInterval(e.timeInterval)},1e3),g.a.getCode(e.registerName,e.registerEmail).then(function(t){t.success&&e.$message.success("验证码发送成功")}).catch(function(t){e.$message.error(t.errorMsg),clearInterval(e.timeInterval),e.time=0});case 13:case"end":return t.stop()}},t,e)}))()},fnLogin:function(){var e=this;return i()(a.a.mark(function t(){var s,r;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(""!=e.signInName){t.next=2;break}return t.abrupt("return",e.$message.error({message:"用户名不可为空"}));case 2:return t.prev=2,t.next=5,e.login({name:e.signInName,password:e.$md5(e.signInPassword)});case 5:(s=t.sent)?e.$route.query.redirect?(r=e.$route.query.redirect,console.log(r),e.$router.push(r)):e.$router.push({path:"/"}):e.$message.error({message:s.errorMsg}),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(2),console.log(t.t0),e.$message.error({message:"登录失败"});case 13:case"end":return t.stop()}},t,e,[[2,9]])}))()},fnregister:function(){var e=this;return i()(a.a.mark(function t(){var s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(console.log("fnregister"),s=/^[\da-zA-Z_\u4e00-\u9f5a]{3,16}$/,e.registerPassword==e.registerPassword2){t.next=4;break}return t.abrupt("return",e.$message({message:"两次密码不一致",type:"warning"}));case 4:if(s.test(e.registerName)){t.next=6;break}return t.abrupt("return",e.$message({message:"用户名为3到16位中英文(可包含中文,数字,字母和下划线)",type:"warning"}));case 6:if(""!=e.registercode){t.next=8;break}return t.abrupt("return",e.$message({message:"请输入验证码",type:"warning"}));case 8:if(t.prev=8,""!=e.registerName&&""!=e.registerPassword){t.next=11;break}return t.abrupt("return",e.$message({message:"用户名或密码不可为空",type:"warning"}));case 11:return t.next=13,g.a.register({name:e.registerName,password:e.$md5(e.registerPassword),code:e.registercode});case 13:t.sent.success&&(e.$message({message:"注册成功",type:"success"}),e.signInName=e.registerName,e.$pcShow?document.querySelector(".cont").classList.toggle("s--signup"):e.fnshowRegister()),t.next=21;break;case 17:t.prev=17,t.t0=t.catch(8),console.log(t.t0),e.$message.error({message:t.t0.errorMsg});case 21:case"end":return t.stop()}},t,e,[[8,17]])}))()},goRegister:function(){this.$router.push("/register")}}),computed:u()({},Object(c.c)(["isLogin","user"]))},v={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("p",{staticClass:"tip"},[e._v("DLHTX,欢迎您的加入")]),e._v(" "),e.$pcShow?s("div",{staticClass:"cont"},[s("div",{staticClass:"form sign-in"},[s("h2",[e._v("欢迎回来")]),e._v(" "),s("label",[s("span",[e._v("用户名/邮箱")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.signInName,expression:"signInName"}],attrs:{type:"text",AUTOCOMPLETE:"on"},domProps:{value:e.signInName},on:{input:function(t){t.target.composing||(e.signInName=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.signInPassword,expression:"signInPassword"}],attrs:{type:"password",AUTOCOMPLETE:"on"},domProps:{value:e.signInPassword},on:{input:function(t){t.target.composing||(e.signInPassword=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"forgot-pass"},[e._v("忘记密码?")]),e._v(" "),s("button",{staticClass:"submit",attrs:{type:"button"},on:{click:function(t){e.fnLogin()}}},[e._v("登录")]),e._v(" "),s("button",{staticClass:"fb-btn",attrs:{type:"button"},on:{click:function(t){e.loginGit()}}},[e._v("\n                快速登录\n                "),s("span",[e._v("GitHub")])])]),e._v(" "),s("div",{staticClass:"sub-cont"},[e._m(0),e._v(" "),s("div",{staticClass:"form sign-up"},[s("h2",[e._v("赶快注册吧")]),e._v(" "),s("label",[s("span",[e._v("用户名")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerName,expression:"registerName"}],attrs:{type:"text"},domProps:{value:e.registerName},on:{input:function(t){t.target.composing||(e.registerName=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("邮箱")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerEmail,expression:"registerEmail"}],attrs:{type:"email"},domProps:{value:e.registerEmail},on:{input:function(t){t.target.composing||(e.registerEmail=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword,expression:"registerPassword"}],attrs:{type:"password"},domProps:{value:e.registerPassword},on:{input:function(t){t.target.composing||(e.registerPassword=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("确认密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword2,expression:"registerPassword2"}],attrs:{type:"password"},domProps:{value:e.registerPassword2},on:{input:function(t){t.target.composing||(e.registerPassword2=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("验证码")]),e._v(" "),0==e.time?s("span",{staticStyle:{background:"#4f504c",color:"white",padding:"3px 10px","border-radius":"16PX",cursor:"pointer"},on:{click:function(t){e.getCode()}}},[e._v("获取验证码")]):e._e(),e._v(" "),e.time>=1&&e.time<=60?s("span",{staticStyle:{background:"#717171",color:"white!important",padding:"3px 10px","border-radius":"16PX",cursor:"pointer"}},[e._v(e._s(e.time)+"秒后获取")]):e._e(),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registercode,expression:"registercode"}],attrs:{type:"number"},domProps:{value:e.registercode},on:{input:function(t){t.target.composing||(e.registercode=t.target.value)}}})]),e._v(" "),s("button",{staticClass:"submit",attrs:{type:"button"},on:{click:function(t){e.fnregister()}}},[e._v("注册")]),e._v(" "),e._m(1)])])]):s("div",{staticStyle:{width:"100%",height:"100%"}},[e.showRegister?e._e():s("div",{staticClass:"form sign-in",staticStyle:{width:"100%"}},[s("h2",[e._v("欢迎回来")]),e._v(" "),s("label",[s("span",[e._v("用户名/邮箱")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.signInName,expression:"signInName"}],attrs:{type:"text"},domProps:{value:e.signInName},on:{input:function(t){t.target.composing||(e.signInName=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.signInPassword,expression:"signInPassword"}],attrs:{type:"password"},domProps:{value:e.signInPassword},on:{keyup:function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.fnLogin(t):null},input:function(t){t.target.composing||(e.signInPassword=t.target.value)}}})]),e._v(" "),s("p",{staticClass:"forgot-pass"},[e._v("忘记密码?")]),e._v(" "),s("button",{staticClass:"submit",attrs:{type:"button"},on:{click:function(t){e.fnLogin()}}},[e._v("登录")]),e._v(" "),s("button",{staticClass:"fb-btn",attrs:{type:"button"},on:{click:function(t){e.fnshowRegister()}}},[e._v("注册")]),e._v(" "),s("button",{staticClass:"fb-btn",staticStyle:{"margin-top":"20px",background:"#eaeaea"},attrs:{type:"button"},on:{click:function(t){e.loginGit()}}},[e._v("\n                快速登录\n                "),s("span",[e._v("GitHub")])])]),e._v(" "),e.showRegister?s("div",{staticClass:"form sign-up",staticStyle:{width:"1000px",height:"1000px",position:"fixed",top:"6%","z-index":"999",left:"148%"}},[s("h2",[e._v("赶快注册吧")]),e._v(" "),s("label",[s("span",[e._v("用户名")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerName,expression:"registerName"}],attrs:{type:"text"},domProps:{value:e.registerName},on:{input:function(t){t.target.composing||(e.registerName=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("邮箱")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerEmail,expression:"registerEmail"}],attrs:{type:"email"},domProps:{value:e.registerEmail},on:{input:function(t){t.target.composing||(e.registerEmail=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword,expression:"registerPassword"}],attrs:{type:"password"},domProps:{value:e.registerPassword},on:{input:function(t){t.target.composing||(e.registerPassword=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("确认密码")]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registerPassword2,expression:"registerPassword2"}],attrs:{type:"password"},domProps:{value:e.registerPassword2},on:{input:function(t){t.target.composing||(e.registerPassword2=t.target.value)}}})]),e._v(" "),s("label",[s("span",[e._v("验证码")]),e._v(" "),0==e.time?s("span",{staticStyle:{background:"#4f504c",color:"white",padding:"3px 10px","border-radius":"16PX",cursor:"pointer"},on:{click:function(t){e.getCode()}}},[e._v("获取验证码")]):e._e(),e._v(" "),e.time>=1&&e.time<=60?s("span",{staticStyle:{background:"#717171",color:"white!important",padding:"3px 10px","border-radius":"16PX",cursor:"pointer"}},[e._v(e._s(e.time)+"秒后获取")]):e._e(),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.registercode,expression:"registercode"}],attrs:{type:"number"},domProps:{value:e.registercode},on:{input:function(t){t.target.composing||(e.registercode=t.target.value)}}})]),e._v(" "),s("button",{staticClass:"submit",attrs:{type:"button"},on:{click:function(t){e.fnregister()}}},[e._v("注册")]),e._v(" "),s("button",{staticClass:"fb-btn",attrs:{type:"button"},on:{click:function(t){e.fnshowRegister()}}},[e._v("登录")])]):e._e()])])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"img"},[s("div",{staticClass:"img__text m--up"},[s("h2",[e._v("新用户?")]),e._v(" "),s("p",[e._v("赶快登录和探索我们的DLHTX博客吧!")])]),e._v(" "),s("div",{staticClass:"img__text m--in"},[s("h2",[e._v("已经有账号了?")]),e._v(" "),s("p",[e._v("如果你已经有我们的账号了,那么你还在等什么,赶快登录吧!")])]),e._v(" "),s("div",{staticClass:"img__btn"},[s("span",{staticClass:"m--up"},[e._v("注册")]),e._v(" "),s("span",{staticClass:"m--in"},[e._v("登录")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("button",{staticClass:"fb-btn",attrs:{type:"button"}},[this._v("\n                    快速登录\n                    "),t("span",[this._v("GitHub")])])}]};var d=s("VU/8")(p,v,!1,function(e){s("sPAl")},"data-v-49d3760d",null);t.default=d.exports},sPAl:function(e,t){}});
//# sourceMappingURL=11.2fe417073b7c0cde0f7f.js.map