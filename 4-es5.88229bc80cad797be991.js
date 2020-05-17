function _classCallCheck(n,l){if(!(n instanceof l))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,l){for(var e=0;e<l.length;e++){var t=l[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(n,t.key,t)}}function _createClass(n,l,e){return l&&_defineProperties(n.prototype,l),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[4,98,99],{"2g2N":function(n,l,e){"use strict";e.d(l,"a",(function(){return i}));var t=e("mrSG"),u=e("8Y7J"),o=e("sZkV"),i=function(){var n=function(){function n(l){_classCallCheck(this,n),this.toastController=l}return _createClass(n,[{key:"simpleToast",value:function(n){return t.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastController.create({message:n,duration:2e3});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}},{key:"coolToast",value:function(n){return t.a(this,void 0,void 0,regeneratorRuntime.mark((function l(){return regeneratorRuntime.wrap((function(l){for(;;)switch(l.prev=l.next){case 0:return l.next=2,this.toastController.create({message:n,position:"top",buttons:[{side:"start",icon:"star",text:"un texto v:",handler:function(){console.log("toast icon clicked")}},{text:"OK",role:"cancel",handler:function(){console.log("Cancel clicked")}}]});case 2:l.sent.present();case 3:case"end":return l.stop()}}),l,this)})))}}]),n}();return n.ngInjectableDef=u.Jb({factory:function(){return new n(u.Kb(o.Ib))},token:n,providedIn:"root"}),n}()},LMfe:function(n,l,e){"use strict";e.d(l,"a",(function(){return o}));var t=e("8Y7J"),u=e("IheW"),o=function(){var n=function(){function n(l){_classCallCheck(this,n),this.http=l,this.uri="http://ec2-3-93-216-228.compute-1.amazonaws.com:8080/catalog/"}return _createClass(n,[{key:"getCubesList",value:function(){return this.http.get(this.uri+"cubes")}},{key:"getStates",value:function(){return this.http.get(this.uri+"states")}},{key:"getCitiesByState",value:function(n){return this.http.get(this.uri+"citiesByState/"+n)}}]),n}();return n.ngInjectableDef=t.Jb({factory:function(){return new n(t.Kb(u.c))},token:n,providedIn:"root"}),n}()},Vnxm:function(n,l,e){"use strict";e.r(l);var t=e("8Y7J"),u=function n(){_classCallCheck(this,n)},o=e("pMnS"),i=e("MKJQ"),r=e("sZkV"),s=e("s7LF"),a=e("SVse"),c=e("mrSG"),b=e("ZsRS"),h=e("LMfe"),p=e("XYLo"),d=e("qfBg"),g=function(){function n(l,e,t,u){_classCallCheck(this,n),this.solvesApi=l,this.catalogsApi=e,this.popoverController=t,this.userApi=u,this.selectedCube="3x3x3",this.cubesList=[],this.order="time",this.selectedTourney="Global"}return _createClass(n,[{key:"ngOnInit",value:function(){}},{key:"ionViewWillEnter",value:function(){var n=this;this.catalogsApi.getCubesList().subscribe((function(l){n.cubesList=l})),this.solvesApi.getByCubeAndUser(this.selectedCube,this.userApi.currentUser.id,this.order).subscribe((function(l){n.solves=l}))}},{key:"optionsPopover",value:function(n,l){return c.a(this,void 0,void 0,regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.popoverController.create({component:p.a,event:n,componentProps:{solveId:l},translucent:!0});case 2:return t=e.sent,e.next=5,t.present();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e,this)})))}},{key:"orderByTime",value:function(){this.order="time",this.ionViewWillEnter()}},{key:"orderByDate",value:function(){this.order="date",this.ionViewWillEnter()}},{key:"changeCube",value:function(){this.ionViewWillEnter()}}]),n}(),f=t.nb({encapsulation:0,styles:[["ion-card[_ngcontent-%COMP%]{background-color:var(--ion-color-dark)}ion-button.options-button[_ngcontent-%COMP%]{--border-color:transparent}span.date[_ngcontent-%COMP%]{font-size:.85em!important;color:var(--ion-color-medium)!important}.solve-info[_ngcontent-%COMP%]{font-size:1.2em;color:var(--ion-color-dark)}.center-horizontally[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.stretch-vertically[_ngcontent-%COMP%]{margin-top:-.5em;height:2em}.select-tourney[_ngcontent-%COMP%]{font-size:1em}ion-select[_ngcontent-%COMP%]{min-width:3em;max-width:50em;font-weight:700;text-align:center;font-size:1em}ion-content[_ngcontent-%COMP%], ion-segment[_ngcontent-%COMP%]{--background:var(--ion-color-dark-tint)}ion-segment-button[_ngcontent-%COMP%]{--indicator-color:var(--ion-color-medium);--color:var(--ion-color-light);--color-checked:var(--ion-color-medium)}"]],data:{}});function m(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,i.hb,i.B)),t.ob(1,49152,null,0,r.ib,[t.h,t.k,t.x],{value:[0,"value"]},null),(n()(),t.Eb(2,0,["",""]))],(function(n,l){n(l,1,0,l.context.$implicit)}),(function(n,l){n(l,2,0,l.context.$implicit)}))}function v(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,37,"ion-card",[],null,null,null,i.P,i.e)),t.ob(1,49152,null,0,r.j,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,35,"ion-card-content",[],null,null,null,i.L,i.f)),t.ob(3,49152,null,0,r.k,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,33,"ion-grid",[],null,null,null,i.U,i.n)),t.ob(5,49152,null,0,r.x,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,31,"ion-row",[["class","ion-align-items-center"]],null,null,null,i.eb,i.x)),t.ob(7,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,3,"ion-col",[["size","2"]],null,null,null,i.Q,i.j)),t.ob(9,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.pb(10,0,null,0,1,"h5",[],null,null,null,null,null)),(n()(),t.Eb(11,null,["",""])),(n()(),t.pb(12,0,null,0,11,"ion-col",[],null,null,null,i.Q,i.j)),t.ob(13,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(n()(),t.pb(14,0,null,0,5,"ion-item",[["color","dark"],["lines","none"]],null,null,null,i.Z,i.s)),t.ob(15,49152,null,0,r.E,[t.h,t.k,t.x],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),t.pb(16,0,null,0,3,"p",[],null,null,null,null,null)),(n()(),t.Eb(17,null,[" "," "])),(n()(),t.pb(18,0,null,null,1,"span",[["class","date"]],null,null,null,null,null)),(n()(),t.Eb(19,null,["",""])),(n()(),t.pb(20,0,null,0,3,"ion-item",[["color","dark"],["lines","none"]],null,null,null,i.Z,i.s)),t.ob(21,49152,null,0,r.E,[t.h,t.k,t.x],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),t.pb(22,0,null,0,1,"p",[],null,null,null,null,null)),(n()(),t.Eb(23,null,[" "," "])),(n()(),t.pb(24,0,null,0,13,"ion-col",[["size","2"]],null,null,null,i.Q,i.j)),t.ob(25,49152,null,0,r.q,[t.h,t.k,t.x],{size:[0,"size"]},null),(n()(),t.pb(26,0,null,0,11,"ion-row",[],null,null,null,i.eb,i.x)),t.ob(27,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(n()(),t.pb(28,0,null,0,1,"ion-col",[],null,null,null,i.Q,i.j)),t.ob(29,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(n()(),t.pb(30,0,null,0,5,"ion-col",[],null,null,null,i.Q,i.j)),t.ob(31,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(n()(),t.pb(32,0,null,0,3,"ion-button",[["class","options-button"],["fill","outline"],["shape","round"],["size","small"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.optionsPopover(e,n.context.$implicit.id)&&t),t}),i.J,i.c)),t.ob(33,49152,null,0,r.h,[t.h,t.k,t.x],{fill:[0,"fill"],shape:[1,"shape"],size:[2,"size"]},null),(n()(),t.pb(34,0,null,0,1,"ion-icon",[["color","light"],["name","ellipsis-vertical-outline"]],null,null,null,i.W,i.p)),t.ob(35,49152,null,0,r.z,[t.h,t.k,t.x],{color:[0,"color"],name:[1,"name"]},null),(n()(),t.pb(36,0,null,0,1,"ion-col",[],null,null,null,i.Q,i.j)),t.ob(37,49152,null,0,r.q,[t.h,t.k,t.x],null,null)],(function(n,l){n(l,9,0,"2"),n(l,15,0,"dark","none"),n(l,21,0,"dark","none"),n(l,25,0,"2"),n(l,33,0,"outline","round","small"),n(l,35,0,"light","ellipsis-vertical-outline")}),(function(n,l){n(l,11,0,l.context.$implicit.id),n(l,17,0,l.context.$implicit.timeStr),n(l,19,0,l.context.$implicit.date),n(l,23,0,l.context.$implicit.scramble)}))}function k(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,52,"ion-content",[],null,null,null,i.R,i.k)),t.ob(1,49152,null,0,r.r,[t.h,t.k,t.x],null,null),(n()(),t.pb(2,0,null,0,34,"ion-card",[["class","header-card"]],null,null,null,i.P,i.e)),t.ob(3,49152,null,0,r.j,[t.h,t.k,t.x],null,null),(n()(),t.pb(4,0,null,0,32,"ion-grid",[],null,null,null,i.U,i.n)),t.ob(5,49152,null,0,r.x,[t.h,t.k,t.x],null,null),(n()(),t.pb(6,0,null,0,14,"ion-row",[],null,null,null,i.eb,i.x)),t.ob(7,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(n()(),t.pb(8,0,null,0,12,"ion-col",[["class","center-horizontally"]],null,null,null,i.Q,i.j)),t.ob(9,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(n()(),t.pb(10,0,null,0,10,"ion-item",[["class","stretch-vertically"],["color","dark"],["lines","none"]],null,null,null,i.Z,i.s)),t.ob(11,49152,null,0,r.E,[t.h,t.k,t.x],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),t.pb(12,0,null,0,8,"ion-select",[["id","cube-selector"],["placeholder","Categor\xeda"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ab(n,13)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ab(n,13)._handleChangeEvent(e.target)&&u),"ionChange"===l&&(u=!1!==o.changeCube()&&u),"ngModelChange"===l&&(u=!1!==(o.selectedCube=e)&&u),u}),i.ib,i.A)),t.ob(13,16384,null,0,r.Gb,[t.k],null,null),t.Bb(1024,null,s.d,(function(n){return[n]}),[r.Gb]),t.ob(15,671744,null,0,s.g,[[8,null],[8,null],[8,null],[6,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,s.e,null,[s.g]),t.ob(17,16384,null,0,s.f,[[4,s.e]],null,null),t.ob(18,49152,null,0,r.hb,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),(n()(),t.eb(16777216,null,0,1,null,m)),t.ob(20,278528,null,0,a.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(n()(),t.pb(21,0,null,0,15,"ion-row",[],null,null,null,i.eb,i.x)),t.ob(22,49152,null,0,r.db,[t.h,t.k,t.x],null,null),(n()(),t.pb(23,0,null,0,13,"ion-col",[["class","center-horizontally"]],null,null,null,i.Q,i.j)),t.ob(24,49152,null,0,r.q,[t.h,t.k,t.x],null,null),(n()(),t.pb(25,0,null,0,11,"ion-item",[["class","stretch-vertically"],["color","dark"],["lines","none"]],null,null,null,i.Z,i.s)),t.ob(26,49152,null,0,r.E,[t.h,t.k,t.x],{color:[0,"color"],lines:[1,"lines"]},null),(n()(),t.pb(27,0,null,0,9,"ion-select",[["class","select-tourney"],["placeholder","Torneo"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0,o=n.component;return"ionBlur"===l&&(u=!1!==t.Ab(n,28)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ab(n,28)._handleChangeEvent(e.target)&&u),"ngModelChange"===l&&(u=!1!==(o.selectedTourney=e)&&u),u}),i.ib,i.A)),t.ob(28,16384,null,0,r.Gb,[t.k],null,null),t.Bb(1024,null,s.d,(function(n){return[n]}),[r.Gb]),t.ob(30,671744,null,0,s.g,[[8,null],[8,null],[8,null],[6,s.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,s.e,null,[s.g]),t.ob(32,16384,null,0,s.f,[[4,s.e]],null,null),t.ob(33,49152,null,0,r.hb,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),(n()(),t.pb(34,0,null,0,2,"ion-select-option",[],null,null,null,i.hb,i.B)),t.ob(35,49152,null,0,r.ib,[t.h,t.k,t.x],null,null),(n()(),t.Eb(-1,0,["Global"])),(n()(),t.pb(37,0,null,0,13,"ion-toolbar",[],null,null,null,i.nb,i.G)),t.ob(38,49152,null,0,r.wb,[t.h,t.k,t.x],null,null),(n()(),t.pb(39,0,null,0,11,"ion-segment",[["mode","md"],["value","time"]],null,[[null,"ionBlur"],[null,"ionChange"]],(function(n,l,e){var u=!0;return"ionBlur"===l&&(u=!1!==t.Ab(n,42)._handleBlurEvent(e.target)&&u),"ionChange"===l&&(u=!1!==t.Ab(n,42)._handleChangeEvent(e.target)&&u),u}),i.gb,i.y)),t.Bb(5120,null,s.d,(function(n){return[n]}),[r.Gb]),t.ob(41,49152,null,0,r.fb,[t.h,t.k,t.x],{mode:[0,"mode"],value:[1,"value"]},null),t.ob(42,16384,null,0,r.Gb,[t.k],null,null),(n()(),t.pb(43,0,null,0,3,"ion-segment-button",[["value","time"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.orderByTime()&&t),t}),i.fb,i.z)),t.ob(44,49152,null,0,r.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(n()(),t.pb(45,0,null,0,1,"ion-icon",[["name","hourglass-outline"]],null,null,null,i.W,i.p)),t.ob(46,49152,null,0,r.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.pb(47,0,null,0,3,"ion-segment-button",[["value","date"]],null,[[null,"click"]],(function(n,l,e){var t=!0;return"click"===l&&(t=!1!==n.component.orderByDate()&&t),t}),i.fb,i.z)),t.ob(48,49152,null,0,r.gb,[t.h,t.k,t.x],{value:[0,"value"]},null),(n()(),t.pb(49,0,null,0,1,"ion-icon",[["name","calendar-outline"]],null,null,null,i.W,i.p)),t.ob(50,49152,null,0,r.z,[t.h,t.k,t.x],{name:[0,"name"]},null),(n()(),t.eb(16777216,null,0,1,null,v)),t.ob(52,278528,null,0,a.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(n,l){var e=l.component;n(l,11,0,"dark","none"),n(l,15,0,e.selectedCube),n(l,18,0,"Categor\xeda"),n(l,20,0,e.cubesList),n(l,26,0,"dark","none"),n(l,30,0,e.selectedTourney),n(l,33,0,"Torneo"),n(l,41,0,"md","time"),n(l,44,0,"time"),n(l,46,0,"hourglass-outline"),n(l,48,0,"date"),n(l,50,0,"calendar-outline"),n(l,52,0,e.solves)}),(function(n,l){n(l,12,0,t.Ab(l,17).ngClassUntouched,t.Ab(l,17).ngClassTouched,t.Ab(l,17).ngClassPristine,t.Ab(l,17).ngClassDirty,t.Ab(l,17).ngClassValid,t.Ab(l,17).ngClassInvalid,t.Ab(l,17).ngClassPending),n(l,27,0,t.Ab(l,32).ngClassUntouched,t.Ab(l,32).ngClassTouched,t.Ab(l,32).ngClassPristine,t.Ab(l,32).ngClassDirty,t.Ab(l,32).ngClassValid,t.Ab(l,32).ngClassInvalid,t.Ab(l,32).ngClassPending)}))}var C=t.lb("app-times",g,(function(n){return t.Fb(0,[(n()(),t.pb(0,0,null,null,1,"app-times",[],null,null,null,k,f)),t.ob(1,114688,null,0,g,[b.a,h.a,r.Eb,d.a],null,null)],(function(n,l){n(l,1,0)}),null)}),{},{},[]),y=e("iInd"),x=function n(){_classCallCheck(this,n)};e.d(l,"TimesPageModuleNgFactory",(function(){return w}));var w=t.mb(u,[],(function(n){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,C]],[3,t.j],t.v]),t.yb(4608,a.l,a.k,[t.s,[2,a.u]]),t.yb(4608,s.i,s.i,[]),t.yb(4608,r.a,r.a,[t.x,t.g]),t.yb(4608,r.Ab,r.Ab,[r.a,t.j,t.p]),t.yb(4608,r.Eb,r.Eb,[r.a,t.j,t.p]),t.yb(1073742336,a.b,a.b,[]),t.yb(1073742336,s.h,s.h,[]),t.yb(1073742336,s.a,s.a,[]),t.yb(1073742336,r.yb,r.yb,[]),t.yb(1073742336,y.o,y.o,[[2,y.t],[2,y.m]]),t.yb(1073742336,x,x,[]),t.yb(1073742336,u,u,[]),t.yb(1024,y.k,(function(){return[[{path:"",component:g}]]}),[])])}))},ZsRS:function(n,l,e){"use strict";e.d(l,"a",(function(){return o}));var t=e("8Y7J"),u=e("IheW"),o=function(){var n=function(){function n(l){_classCallCheck(this,n),this.http=l,this.uri="http://ec2-3-93-216-228.compute-1.amazonaws.com:8080/api/v1/solve/",this.header={headers:{"Content-Type":"application/json"}}}return _createClass(n,[{key:"getBestSolve",value:function(n,l){return this.http.get(this.uri+"bestbyUserAndCube/"+n+","+l)}},{key:"getByCubeAndUser",value:function(n,l,e){return this.http.get(this.uri+"byUser/"+l+"/cube/"+n+"?order="+e)}}]),n}();return n.ngInjectableDef=t.Jb({factory:function(){return new n(t.Kb(u.c))},token:n,providedIn:"root"}),n}()},qfBg:function(n,l,e){"use strict";e.d(l,"a",(function(){return r}));var t=e("2g2N"),u=e("8Y7J"),o=e("IheW"),i=e("iInd"),r=function(){var n=function(){function n(l,e,t){_classCallCheck(this,n),this.http=l,this.toastService=e,this.router=t,this.uri="http://ec2-3-93-216-228.compute-1.amazonaws.com:8080/api/v1/user/",this.currentUser={id:1,name:"",lastname:"",nickname:"",email:"",wcaId:"",stateId:0,cityId:0,birthday:"",image:"",password:"",roles:[]},this.header={headers:{"Content-Type":"application/json"}},this.response={entity:{},status:"",responsetext:""}}return _createClass(n,[{key:"saveUser",value:function(n){return this.http.post(this.uri+"registration",JSON.stringify(n),this.header)}},{key:"getUser",value:function(n){return this.http.get(this.uri+n)}},{key:"authenticate",value:function(n,l){var e=this;this.http.post(this.uri+"authenticate",JSON.stringify({username:n,password:l}),this.header).subscribe((function(n){e.response=n,"SUCCESS"===e.response.status?(e.currentUser=e.response.entity,e.router.navigateByUrl("/home")):e.toastService.simpleToast(e.response.responsetext)}))}}]),n}();return n.ngInjectableDef=u.Jb({factory:function(){return new n(u.Kb(o.c),u.Kb(t.a),u.Kb(i.m))},token:n,providedIn:"root"}),n}()}}]);