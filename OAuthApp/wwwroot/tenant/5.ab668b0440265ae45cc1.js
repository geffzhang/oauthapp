(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"0ylO":function(t,e,i){"use strict";i.r(e),i.d(e,"AuthModule",function(){return M});var n=i("ofXK"),c=i("3Pt+"),r=i("tyNb"),o=i("fXoL"),s=i("8lDW"),a=i("JqCM"),l=i("QJFE");const b=function(){return{icon:"question",title:"\u662f\u5426\u786e\u8ba4\u5220\u9664\uff1f",confirmButtonText:"\u786e\u8ba4",cancelButtonText:"\u53d6\u6d88",showCancelButton:!0,animation:!1,showCloseButton:!0}};function d(t,e){if(1&t){const t=o.Pb();o.Ob(0,"li",12),o.Ob(1,"a",13),o.ac("click",function(){o.qc(t);const i=e.$implicit;return o.ec(2).doAuthorize(i)}),o.yc(2),o.Nb(),o.Ob(3,"span",14),o.Ob(4,"button",15),o.ac("confirm",function(){o.qc(t);const i=e.$implicit;return o.ec(2).delAccount(i)}),o.Wb(5,16),o.dc(),o.Ob(6,"svg",17),o.Jb(7,"path",18),o.Nb(),o.Ub(),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=e.$implicit;o.xb(2),o.zc(t),o.xb(2),o.jc("swal",o.mc(2,b))}}function u(t,e){if(1&t){const t=o.Pb();o.Ob(0,"div"),o.Ob(1,"h4"),o.Sb(2,5),o.Nb(),o.Ob(3,"div",6),o.wc(4,d,8,3,"li",7),o.Nb(),o.Ob(5,"button",8),o.ac("click",function(){return o.qc(t),o.ec().doAuthorize()}),o.Sb(6,9),o.Nb(),o.Ob(7,"a",10),o.Sb(8,11),o.Nb(),o.Nb()}if(2&t){const t=o.ec();o.xb(4),o.jc("ngForOf",t.accounts)}}let h=(()=>{class t{constructor(t,e,i){this.authService=t,this.router=e,this.spinner=i,this.loginModel={username:"",password:""},this.accounts=[],this.showAccountPanel=!1,this.spinner.show(),this.accounts=this.authService.loggedAccounts(),this.accounts.length<1?location.href=this.authService.getAuthorizeUrl(this.authService.redirectUrl):(this.spinner.hide(),this.showAccountPanel=!0)}doAuthorize(t=""){this.spinner.show(),location.href=this.authService.getAuthorizeUrl(this.authService.redirectUrl,t)}delAccount(t){this.authService.delAccount(t),this.accounts=this.authService.loggedAccounts()}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(s.a),o.Ib(r.f),o.Ib(a.c))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-login"]],decls:5,vars:1,consts:function(){let t,e,i,n;return t=$localize`:␟a32c605573883f2ecc05f4670ac2819d80827b86␟3534256569610633327:选择账户`,e=$localize`:␟7ce53d53cbead1cc198c7a6509071b565c6e5690␟5605937061539126007:使用其他账户`,i=$localize`:␟c6a564e7f80ae6d03b06bd27532d94cc7703ff77␟2571824514132400882: 返回 `,n=$localize`:␟1abd0ca6ac5c54bc9555106278a6273b05f8c281␟2196603311437332928:${"\ufffd#6\ufffd"}:START_TAG__SVG_SVG:${"\ufffd#7\ufffd"}:START_TAG__SVG_PATH:${"\ufffd/#7\ufffd"}:CLOSE_TAG__SVG_PATH:${"\ufffd/#6\ufffd"}:CLOSE_TAG__SVG_SVG:`,[[1,"container"],[1,"row"],[1,"col-md-6","col-sm-12","bg-white","border-left","border-right","pt-4","px-4",2,"margin","auto","min-height","100vh"],[4,"ngIf"],["size","default","color","#fff","type","ball-beat"],t,[1,"list-group","list-group-flush"],["class","list-group-item d-flex justify-content-between align-items-center pr-0",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","mt-3","btn-block",3,"click"],e,["routerLink","/",1,"btn","btn-light","btn-block","border","mt-3"],i,[1,"list-group-item","d-flex","justify-content-between","align-items-center","pr-0"],["href","javascript:void(0)",3,"click"],[1,"badge-pill"],["type","button",1,"btn","btn-link","text-dark","btn-sm",3,"swal","confirm"],n,["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"]]},template:function(t,e){1&t&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"div",2),o.wc(3,u,9,1,"div",3),o.Nb(),o.Nb(),o.Nb(),o.Jb(4,"ngx-spinner",4)),2&t&&(o.xb(3),o.jc("ngIf",e.showAccountPanel))},directives:[n.k,a.a,n.j,r.h,l.a],styles:[""]}),t})(),f=(()=>{class t{constructor(t,e,i,n){this.router=t,this.route=e,this.authService=i,this.spinner=n,this.queryParams={},this.spinner.show(),location.hash.substr(1).split("&").forEach(t=>{var e=t.split("=");this.queryParams[e[0]]=e[1]}),this.queryParams.access_token?(this.queryParams.state&&(this.authService.redirectUrl=this.queryParams.state),this.route.navigateByUrl("/auth2/signin?access_token="+this.queryParams.access_token)):(this.spinner.hide(),this.route.navigateByUrl("/"))}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(r.a),o.Ib(r.f),o.Ib(s.a),o.Ib(a.c))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-authcallback"]],decls:1,vars:0,consts:[["size","default","color","#fff","type","ball-beat"]],template:function(t,e){1&t&&o.Jb(0,"ngx-spinner",0)},directives:[a.a],styles:[""]}),t})();var g=i("xfLO"),p=i("5eHb");function m(t,e){if(1&t&&(o.Ob(0,"li",22),o.Ob(1,"div",23),o.Jb(2,"input",24),o.Ob(3,"label",25),o.yc(4),o.Nb(),o.Nb(),o.Ob(5,"div",26),o.Ob(6,"small"),o.yc(7),o.Nb(),o.Nb(),o.Nb()),2&t){const t=e.$implicit;o.xb(2),o.lc("id","scopes_",t.value,""),o.kc("value",t.value),o.jc("disabled",t.required),o.xb(1),o.lc("for","scopes_",t.value,""),o.xb(1),o.zc(t.displayName),o.xb(3),o.zc(t.description)}}function v(t,e){if(1&t&&(o.Ob(0,"li",22),o.Ob(1,"div",23),o.Jb(2,"input",24),o.Ob(3,"label",25),o.yc(4),o.Nb(),o.Nb(),o.Ob(5,"div",26),o.Ob(6,"small"),o.yc(7),o.Nb(),o.Nb(),o.Nb()),2&t){const t=e.$implicit;o.xb(2),o.lc("id","scopes_",t.value,""),o.kc("value",t.value),o.jc("disabled",t.required),o.xb(1),o.lc("for","scopes_",t.value,""),o.xb(1),o.zc(t.displayName),o.xb(3),o.zc(t.description)}}function O(t,e){if(1&t&&(o.Ob(0,"div",15),o.Ob(1,"h6"),o.yc(2,"\u670d\u52a1"),o.Nb(),o.Ob(3,"ul",16),o.wc(4,v,8,6,"li",17),o.Nb(),o.Nb()),2&t){const t=o.ec(2);o.xb(4),o.jc("ngForOf",t.data.apiScopes)}}function w(t,e){if(1&t){const t=o.Pb();o.Ob(0,"div",2),o.Ob(1,"div",3),o.Ob(2,"div",4),o.Ob(3,"div",5),o.Ob(4,"div",6),o.Ob(5,"div",7),o.Jb(6,"img",8),o.Nb(),o.Ob(7,"h6",9),o.yc(8),o.Nb(),o.Ob(9,"div",10),o.Ob(10,"small"),o.yc(11),o.Nb(),o.Nb(),o.Nb(),o.Ob(12,"div",11),o.Ob(13,"h2",12),o.dc(),o.Ob(14,"svg",13),o.Jb(15,"path",14),o.Nb(),o.Nb(),o.cc(),o.Ob(16,"small"),o.yc(17,"\u8bf7\u6c42\u4f60\u7684\u6388\u6743"),o.Nb(),o.Nb(),o.Ob(18,"div",6),o.Ob(19,"div",7),o.Jb(20,"img",8),o.Nb(),o.Ob(21,"h6",9),o.yc(22),o.Nb(),o.Nb(),o.Nb(),o.Ob(23,"div",15),o.Ob(24,"h6"),o.yc(25,"\u4e2a\u4eba\u4fe1\u606f"),o.Nb(),o.Ob(26,"ul",16),o.wc(27,m,8,6,"li",17),o.Nb(),o.Nb(),o.wc(28,O,5,1,"div",18),o.Ob(29,"div",19),o.Ob(30,"button",20),o.ac("click",function(){return o.qc(t),o.ec().Consent()}),o.yc(31,"\u786e\u8ba4\u6388\u6743"),o.Nb(),o.Ob(32,"a",21),o.yc(33,"\u53d6\u6d88"),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=o.ec();o.xb(6),o.jc("src",t.data.clientLogoUrl,o.sc),o.xb(2),o.Ac(" ",t.data.clientName," "),o.xb(3),o.zc(t.data.clientUrl),o.xb(9),o.jc("src",null==t.data.tenant?null:t.data.tenant.logoUri,o.sc),o.xb(2),o.zc(null==t.data.tenant?null:t.data.tenant.name),o.xb(5),o.jc("ngForOf",t.data.identityScopes),o.xb(1),o.jc("ngIf",t.data.apiScopes&&t.data.apiScopes.length>0)}}let N=(()=>{class t{constructor(t,e,i,n){this.route=t,this.oauthapp=e,this.spinner=i,this.toastr=n,this.data={},this.returnUrl="",this.onLoading=!1,this.spinner.show(),this.onLoading=!0,this.route.queryParams.subscribe(t=>{this.returnUrl=t.returnUrl,this.oauthapp.preConsent(this.returnUrl).subscribe(t=>{this.spinner.hide(),this.onLoading=!1,200==t.code?this.data=t.data:this.toastr.error(t.codeName,t.message,{timeOut:800,progressBar:!1})})})}Consent(){var t=this.data.identityScopes.filter(t=>t.checked).map(t=>t.value),e=this.data.apiScopes.filter(t=>t.checked).map(t=>t.value),i=t.concat(e);this.spinner.show(),this.oauthapp.Consent(this.returnUrl,i).subscribe(t=>{if(200!=t.code)return this.toastr.error(t.message,t.codeName,{timeOut:800,progressBar:!1}),void this.spinner.hide();location.href=this.returnUrl})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(r.a),o.Ib(g.a),o.Ib(a.c),o.Ib(p.b))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-consent"]],decls:2,vars:1,consts:[["size","default","color","#fff","type","ball-beat"],["class","container-fluid",4,"ngIf"],[1,"container-fluid"],[1,"row"],[1,"col-md-4","col-sm-12","offset-md-4","border-left","border-right","bg-white",2,"min-height","100vh"],[1,"d-flex","flex-row","my-4"],[1,"flex-fill","w-100","text-center"],[1,"client-logo"],["width","64px",1,"border","bg-white","p-1","rounded-circle",3,"src"],[1,"mt-2"],[1,"text-muted"],[1,"flex-fill","w-100","text-center","text-muted","align-content-center"],[1,"mt-3"],["width","1em","height","1em","viewBox","0 0 16 16","fill","currentColor","xmlns","http://www.w3.org/2000/svg",1,"bi","bi-arrow-left-right"],["fill-rule","evenodd","d","M1 11.5a.5.5 0 0 0 .5.5h11.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 11H1.5a.5.5 0 0 0-.5.5zm14-7a.5.5 0 0 1-.5.5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H14.5a.5.5 0 0 1 .5.5z"],[1,"form-group"],[1,"list-group","list-group-flush"],["class","list-group-item",4,"ngFor","ngForOf"],["class","form-group",4,"ngIf"],[1,"form-group","mt-5"],["type","button",1,"btn","btn-primary","btn-block","my-3",3,"click"],["routerLink","/",1,"btn","btn-light","btn-block","border"],[1,"list-group-item"],[1,"form-check"],["type","checkbox","name","ScopesConsented","checked","checked",1,"form-check-input",3,"id","value","disabled"],[1,"form-check-label",3,"for"],[1,"consent-description"]],template:function(t,e){1&t&&(o.Jb(0,"ngx-spinner",0),o.wc(1,w,34,7,"div",1)),2&t&&(o.xb(1),o.jc("ngIf",!e.onLoading))},directives:[a.a,n.k,n.j,r.h],styles:[""]}),t})();var x=i("AytR");const y=function(){return{icon:"question",title:"\u662f\u5426\u786e\u8ba4\u5220\u9664\uff1f",confirmButtonText:"\u786e\u8ba4",cancelButtonText:"\u53d6\u6d88",showCancelButton:!0,animation:!1,showCloseButton:!0}};function S(t,e){if(1&t){const t=o.Pb();o.Ob(0,"li",10),o.Ob(1,"a",11),o.ac("click",function(){o.qc(t);const i=e.$implicit;return o.ec(2).setLoginHint(i)}),o.yc(2),o.Nb(),o.Ob(3,"span",12),o.Ob(4,"button",13),o.ac("confirm",function(){o.qc(t);const i=e.$implicit;return o.ec(2).delAccount(i)}),o.Wb(5,14),o.dc(),o.Ob(6,"svg",15),o.Jb(7,"path",16),o.Nb(),o.Ub(),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=e.$implicit;o.xb(2),o.zc(t),o.xb(2),o.jc("swal",o.mc(2,y))}}function k(t,e){if(1&t){const t=o.Pb();o.Ob(0,"div",2),o.Ob(1,"div",3),o.Ob(2,"div",4),o.Ob(3,"div"),o.Ob(4,"h4"),o.Sb(5,5),o.Nb(),o.Ob(6,"div",6),o.wc(7,S,8,3,"li",7),o.Nb(),o.Ob(8,"button",8),o.ac("click",function(){return o.qc(t),o.ec().signInWithNewAccount()}),o.Sb(9,9),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=o.ec();o.xb(7),o.jc("ngForOf",t.accounts)}}function A(t,e){if(1&t){const t=o.Pb();o.Wb(0,17,1),o.Ob(1,"button",37),o.ac("click",function(){return o.qc(t),o.ec(2).signInAccounts()}),o.dc(),o.Ob(2,"svg",38),o.Jb(3,"path",39),o.Nb(),o.Nb(),o.Ub()}}const _=function(t,e){return{"is-valid":t,"is-invalid":e}};function I(t,e){if(1&t){const t=o.Pb();o.Ob(0,"div",22),o.Ob(1,"label",40),o.Sb(2,41),o.Nb(),o.Ob(3,"input",42,43),o.ac("ngModelChange",function(e){return o.qc(t),o.ec(2).loginModel.username=e}),o.Nb(),o.Ob(5,"small",44),o.Sb(6,45),o.Nb(),o.Ob(7,"div",27),o.Sb(8,46),o.Nb(),o.Nb()}if(2&t){const t=o.pc(4),e=o.ec(2);o.xb(3),o.jc("ngClass",o.nc(3,_,t.valid,t.invalid&&t.dirty))("ngModel",e.loginModel.username),o.xb(4),o.jc("hidden",t.valid)}}function z(t,e){if(1&t&&(o.Ob(0,"div",47),o.Jb(1,"img",48),o.Nb(),o.Ob(2,"div",49),o.Ob(3,"h4"),o.yc(4),o.Nb(),o.Nb()),2&t){const t=o.ec(2);o.xb(4),o.zc(t.loginModel.username)}}function U(t,e){if(1&t){const t=o.Pb();o.Ob(0,"a",53),o.ac("click",function(){o.qc(t);const i=e.$implicit;return o.ec(3).doExternalLogin(i)}),o.yc(1),o.Nb()}if(2&t){const t=e.$implicit;o.xb(1),o.zc(t)}}function T(t,e){if(1&t&&(o.Ob(0,"div",50),o.Ob(1,"small",51),o.yc(2,"\u5176\u4ed6\u767b\u5f55 - "),o.Nb(),o.wc(3,U,2,1,"a",52),o.Nb()),2&t){const t=o.ec(2);o.xb(3),o.jc("ngForOf",t.logins)}}function $(t,e){if(1&t){const t=o.Pb();o.Ob(0,"div",2),o.Ob(1,"div",3),o.Ob(2,"div",4),o.Ob(3,"h4"),o.Wb(4,17),o.wc(5,A,4,0,"button",18),o.Ub(),o.Nb(),o.Ob(6,"form",null,19),o.wc(8,I,9,6,"div",20),o.wc(9,z,5,1,"ng-template",null,21,o.xc),o.Ob(11,"div",22),o.Ob(12,"label",23),o.Sb(13,24),o.Nb(),o.Ob(14,"input",25,26),o.ac("ngModelChange",function(e){return o.qc(t),o.ec().loginModel.password=e})("keyup",function(e){return o.qc(t),o.ec().keyUp(e)}),o.Nb(),o.Ob(16,"div",27),o.Sb(17,28),o.Nb(),o.Nb(),o.Ob(18,"section",29),o.Ob(19,"div",30),o.Ob(20,"div",31),o.Ob(21,"button",32),o.ac("click",function(){return o.qc(t),o.ec().login()}),o.Sb(22,33),o.Nb(),o.Ob(23,"a",34),o.Sb(24,35),o.Nb(),o.wc(25,T,4,1,"div",36),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()}if(2&t){const t=o.pc(7),e=o.pc(10),i=o.pc(15),n=o.ec();o.xb(5),o.jc("ngIf",n.accounts.length>0),o.xb(3),o.jc("ngIf",!n.loginHintFlag)("ngIfElse",e),o.xb(6),o.jc("ngClass",o.nc(9,_,i.valid,i.invalid&&i.dirty))("ngModel",n.loginModel.password),o.xb(2),o.jc("hidden",i.valid),o.xb(5),o.jc("disabled",!t.form.valid),o.xb(2),o.jc("href",n.backUrl,o.sc),o.xb(2),o.jc("ngIf",!n.loginHintFlag)}}let L=(()=>{class t{constructor(t,e,i,n,c){this.route=t,this.router=e,this.authService=i,this.toastr=n,this.spinner=c,this.accounts=[],this.showAccountPanel=!1,this.showSignInPanel=!0,this.backUrl="",this.loginModel={username:"",password:""},this.returnUrl="",this.logins=[],this.loginHintFlag=!1,this.externalLoginUrl=x.a.identity.server+"/Authing/ExternalLogin",this.externalLoginReturnUrl="",this.getExternalLogins(),this.route.queryParams.subscribe(t=>{if(t.ReturnUrl){this.returnUrl=t.ReturnUrl,this.externalLoginReturnUrl=encodeURIComponent(t.ReturnUrl);try{var e=this.returnUrl.split("&").filter(t=>"loginHint"==t.split("=")[0])[0].split("=")[1];this.loginModel.username=e,this.loginModel.username&&(this.loginHintFlag=!0)}catch(i){}try{this.backUrl=decodeURIComponent(this.returnUrl.split("&").filter(t=>"redirect_uri"==t.split("=")[0])[0].split("=")[1])}catch(i){this.backUrl="/auth2/login"}}else t.access_token?this.signInByAccessToken(t.access_token):this.toastr.error("ReturnUrl is null!");this.accounts=this.authService.loggedAccounts()})}setLoginHint(t){this.loginModel.username=t,this.loginHintFlag=!0,this.showSignInPanel=!0,this.showAccountPanel=!1}signInWithNewAccount(){this.loginModel.username="",this.loginHintFlag=!1,this.showSignInPanel=!0,this.showAccountPanel=!1}signInAccounts(){this.showSignInPanel=!1,this.showAccountPanel=!0}delAccount(t){this.authService.delAccount(t),this.accounts=this.authService.loggedAccounts(),this.accounts.length<1&&(this.loginHintFlag=!1,this.loginModel.username="",this.loginModel.password="",this.showSignInPanel=!0,this.showAccountPanel=!1)}getExternalLogins(){this.authService.externalLogins().subscribe(t=>{this.logins=t.data})}doExternalLogin(t){this.spinner.show(),location.href=`${this.externalLoginUrl}?provider=${t}&returnUrl=${this.externalLoginReturnUrl}`}signInByAccessToken(t){this.spinner.show(),this.authService.loginByAccesstoken(t).add(()=>{if(this.authService.isLoggedIn){let t=this.authService.redirectUrl?this.router.parseUrl(this.authService.redirectUrl):"/";this.router.navigateByUrl(t,{queryParamsHandling:"preserve",preserveFragment:!0}),this.spinner.hide()}}).unsubscribe()}keyUp(t){if(13==t.keyCode){if(!this.loginModel.username||!this.loginModel.password)return;this.login()}}login(){this.spinner.show(),this.authService.signIn(this.loginModel.username,this.loginModel.password,this.returnUrl).subscribe(t=>{200==t.code&&1==t.data.succeeded?(this.authService.addAccount(this.loginModel.username),setTimeout(()=>{location.href=this.returnUrl},200)):(this.spinner.hide(),this.toastr.error("\u767b\u9646\u5931\u8d25\uff0c\u8d26\u53f7\u6216\u5bc6\u7801\u9519\u8bef","error"))})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(r.a),o.Ib(r.f),o.Ib(s.a),o.Ib(p.b),o.Ib(a.c))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-signin"]],decls:3,vars:2,consts:function(){let t,e,i,n,c,r,o,s,a,l,b;return t=$localize`:␟a32c605573883f2ecc05f4670ac2819d80827b86␟3534256569610633327:选择账户`,e=$localize`:␟7ce53d53cbead1cc198c7a6509071b565c6e5690␟5605937061539126007:使用其他账户`,i=$localize`:␟1cd957c88b2ec950e4ac50d0e6dd9f4f2f0d41a8␟3235147381651556501:${"\ufffd#6\ufffd"}:START_TAG__SVG_SVG:${"\ufffd#7\ufffd"}:START_TAG__SVG_PATH:${"\ufffd/#7\ufffd"}:CLOSE_TAG__SVG_PATH:${"\ufffd/#6\ufffd"}:CLOSE_TAG__SVG_SVG:`,n=$localize`:␟125849fb67b2f0af5ab31d4577126fcd52c4dcb6␟6971624281171557374:密码`,c=$localize`:␟49b4213f881402c9d8c814290025246f9f6e8a9c␟8943156472912178739:password is required`,r=$localize`:␟4da7c62228fbb3b416e53b8347175b7c46d56e39␟8160267814243826092: 登陆 `,o=$localize`:␟bb8ff84eb42e6fd0c1fae0b95a9698b3ecdd60d7␟3176755235166645712: 返回 `,s=$localize`:␟a0c376f56961837b2b54f472b4bee92c86345f0f␟3545037901468276059: 登陆 ${"\ufffd*5:1\ufffd\ufffd#1:1\ufffd"}:START_TAG_BUTTON:${"\ufffd#2:1\ufffd"}:START_TAG__SVG_SVG:${"\ufffd#3:1\ufffd"}:START_TAG__SVG_PATH:${"\ufffd/#3:1\ufffd"}:CLOSE_TAG__SVG_PATH:${"\ufffd/#2:1\ufffd"}:CLOSE_TAG__SVG_SVG:${"\ufffd/#1:1\ufffd\ufffd/*5:1\ufffd"}:CLOSE_TAG_BUTTON:`,a=$localize`:␟0115e0ed1b079ec138ed51b29c8e203921fb272b␟6363998355026114303:账号`,l=$localize`:␟ee82ca7d2108fb5cb3913a37a26714b36018a2ca␟4180909983048484744:请输入您的邮箱账号/手机号`,b=$localize`:␟cfea8a7e63b5e3b4f40909271c5e83879ff04b5e␟3569211035626562623:username is required`,[["class","container",4,"ngIf"],["size","default","color","#fff","type","ball-beat"],[1,"container"],[1,"row"],[1,"col-md-6","col-sm-12","bg-white","border-left","border-right","pt-4","px-4",2,"margin","auto","min-height","100vh"],t,[1,"list-group","list-group-flush"],["class","list-group-item d-flex justify-content-between align-items-center pr-0",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-primary","mt-3","btn-block",3,"click"],e,[1,"list-group-item","d-flex","justify-content-between","align-items-center","pr-0"],["href","javascript:void(0)",3,"click"],[1,"badge-pill"],["type","button",1,"btn","btn-link","text-dark","btn-sm",3,"swal","confirm"],i,["xmlns","http://www.w3.org/2000/svg","width","28","height","28","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-x"],["d","M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"],s,["class","btn btn-sm border float-right",3,"click",4,"ngIf"],["loginForm","ngForm"],["class","form-group",4,"ngIf","ngIfElse"],["templateName",""],[1,"form-group"],["for","password"],n,["id","password","type","password","name","password","required","",1,"form-control",3,"ngClass","ngModel","ngModelChange","keyup"],["password","ngModel"],[1,"invalid-feedback",3,"hidden"],c,[1,"d-flex"],[1,"flex-fill"],[2,"position","relative"],["type","button",1,"btn","btn-primary","btn-block","mt-3",3,"disabled","click"],r,[1,"btn","btn-light","border","btn-block","mt-3",3,"href"],o,["class","pt-3",4,"ngIf"],[1,"btn","btn-sm","border","float-right",3,"click"],["xmlns","http://www.w3.org/2000/svg","width","16","height","16","fill","currentColor","viewBox","0 0 16 16",1,"bi","bi-ui-radios-grid"],["d","M3.5 15a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm9-9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5zm0 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zM16 3.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm-9 9a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0zm5.5 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7zm-9-11a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 2a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z"],["for","username"],a,["id","username","type","text","name","username","required","",1,"form-control",3,"ngClass","ngModel","ngModelChange"],["username","ngModel"],[1,"form-text","text-muted"],l,b,[1,"text-center"],["src","assets/user.png","width","64px",1,"border","p-1","rounded-circle","shadow","my-3"],[1,"form-group","text-center","pt-3","text-muted"],[1,"pt-3"],[1,"text-muted",2,"margin-top",".8rem"],["href","javascript:void(0)","class","btn btn-light border btn-sm m-2",3,"click",4,"ngFor","ngForOf"],["href","javascript:void(0)",1,"btn","btn-light","border","btn-sm","m-2",3,"click"]]},template:function(t,e){1&t&&(o.wc(0,k,10,1,"div",0),o.wc(1,$,26,12,"div",0),o.Jb(2,"ngx-spinner",1)),2&t&&(o.jc("ngIf",e.showAccountPanel),o.xb(1),o.jc("ngIf",e.showSignInPanel))},directives:[n.k,a.a,n.j,l.a,c.h,c.d,c.e,c.a,c.g,n.i,c.c,c.f],styles:[""]}),t})();var P=i("tk/3");const j=[{path:"",redirectTo:"signin"},{path:"login",component:h},{path:"signin",component:L},{path:"signin-callback",component:f},{path:"error",component:(()=>{class t{constructor(t,e){this.route=t,this.http=e,this.errorId="",this.data={},t.queryParams.subscribe(t=>{this.errorId=t.errorId,this.getErrorReport()})}getErrorReport(){this.http.get(`${x.a.identity.sso_server}/api/authing/ErrorReport?errorId=${this.errorId}`).subscribe(t=>{this.data=t.data})}}return t.\u0275fac=function(e){return new(e||t)(o.Ib(r.a),o.Ib(P.b))},t.\u0275cmp=o.Cb({type:t,selectors:[["app-error"]],decls:20,vars:7,consts:function(){let t;return t=$localize`:␟7c180ca29987c30365d00e24d798ff9004bc26a4␟7581476335968291359:返回首页`,[[1,"container"],[1,"row"],[1,"col"],[1,"card","my-3"],[1,"card-header"],[1,"card-body"],[1,"card-footer"],[1,"text-muted","float-right"],["routerLink","/",1,"btn","btn-primary","btn-block"],t]},template:function(t,e){1&t&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"div",2),o.Ob(3,"div",3),o.Ob(4,"div",4),o.yc(5),o.Nb(),o.Ob(6,"div",5),o.Ob(7,"h6"),o.yc(8),o.Nb(),o.Ob(9,"p"),o.yc(10),o.Nb(),o.Jb(11,"hr"),o.Ob(12,"pre"),o.yc(13),o.fc(14,"json"),o.Nb(),o.Nb(),o.Ob(15,"div",6),o.Ob(16,"small",7),o.yc(17),o.Nb(),o.Nb(),o.Nb(),o.Ob(18,"a",8),o.Sb(19,9),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&t&&(o.xb(5),o.Ac(" ",e.data.clientId," "),o.xb(3),o.zc(e.data.error),o.xb(2),o.zc(e.data.errorDescription),o.xb(3),o.zc(o.gc(14,5,e.data)),o.xb(4),o.Ac("requestId:",e.data.requestId,""))},directives:[r.h],pipes:[n.e],styles:[""]}),t})()},{path:"consent",component:N}];let C=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[r.i.forChild(j)],r.i]}),t})(),M=(()=>{class t{}return t.\u0275mod=o.Gb({type:t}),t.\u0275inj=o.Fb({factory:function(e){return new(e||t)},imports:[[n.b,c.b,C,a.b,l.b.forRoot()]]}),t})()}}]);