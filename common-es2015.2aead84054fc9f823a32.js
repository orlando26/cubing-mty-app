(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"6i10":function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));const t={bubbles:{dur:1e3,circles:9,fn:(l,n,e)=>{const t=`${l*n/e-l}ms`,u=2*Math.PI*n/e;return{r:5,style:{top:`${9*Math.sin(u)}px`,left:`${9*Math.cos(u)}px`,"animation-delay":t}}}},circles:{dur:1e3,circles:8,fn:(l,n,e)=>{const t=n/e,u=`${l*t-l}ms`,o=2*Math.PI*t;return{r:5,style:{top:`${9*Math.sin(o)}px`,left:`${9*Math.cos(o)}px`,"animation-delay":u}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(l,n)=>({r:6,style:{left:`${9-9*n}px`,"animation-delay":-110*n+"ms"}})},lines:{dur:1e3,lines:12,fn:(l,n,e)=>({y1:17,y2:29,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${l*n/e-l}ms`}})},"lines-small":{dur:1e3,lines:12,fn:(l,n,e)=>({y1:12,y2:20,style:{transform:`rotate(${30*n+(n<6?180:-180)}deg)`,"animation-delay":`${l*n/e-l}ms`}})}}},FLtV:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),r=e("MKJQ"),i=e("sZkV"),c=e("s7LF"),s=e("SVse"),a=e("IheW");let b=(()=>{class l{constructor(l){this.http=l,this.uri="http://ec2-3-93-216-228.compute-1.amazonaws.com:8080/api/v1/scramble/"}getScramble(l){return this.http.get(this.uri+l)}}return l.ngInjectableDef=t.Jb({factory:function(){return new l(t.Kb(a.c))},token:l,providedIn:"root"}),l})();var d=e("LMfe");class p{constructor(l,n){this.catalogsApi=l,this.scrambleApi=n,this.time="00.00.00",this.cubesList=[],this.contentBg="yellow-bg",this.text1="Best: N/A\nAVG 5: N/A\nAVG 12: N/A\nAVG 50: N/A",this.text2="Worst: N/A\nAVG 100: N/A\nAVG 1000: N/A\nSolves: N/A",this.scramble={sequence:[],rawSequence:"",scramblerId:""},this.selectedCube="3x3x3"}ngOnInit(){this.catalogsApi.getCubesList().subscribe(l=>{this.cubesList=l})}ionViewWillEnter(){this.nextScramble()}nextScramble(){this.scrambleApi.getScramble(this.selectedCube).subscribe(l=>{this.scramble=l})}startTimer(){this.nextScramble();const l=performance.now();this.timer=setInterval(()=>{const n=performance.now()-l,e=Math.floor(n/1e3%60),t=Math.floor(n/1e3/60%60),u=Math.floor(n%1e3);this.time=(t<10?"0"+t:t)+":"+(e<10?"0"+e:e)+"."+(u<100?u<10?"00"+u:"0"+u:u)},10)}ready(){console.log("ready..."),document.body.style.setProperty("--my-var","var(--ion-color-success)")}stopTimer(){console.log("stop..."),document.body.style.setProperty("--my-var","var(--ion-color-danger)"),clearInterval(this.timer),this.nextScramble()}}var h=t.nb({encapsulation:0,styles:[[".green-bg[_ngcontent-%COMP%]{--background:var(--ion-color-success)}.red-bg[_ngcontent-%COMP%]{--background:var(--ion-color-danger)}.yellow-bg[_ngcontent-%COMP%]{--background:var(--ion-color-warning)}.white-bg[_ngcontent-%COMP%]{background-color:#fff}"]],data:{}});function m(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,2,"ion-select-option",[],null,null,null,r.hb,r.B)),t.ob(1,49152,null,0,i.ib,[t.h,t.k,t.x],{value:[0,"value"]},null),(l()(),t.Eb(2,0,["",""]))],(function(l,n){l(n,1,0,n.context.$implicit)}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function g(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,17,"ion-header",[["class","ion-no-border"]],null,null,null,r.V,r.o)),t.ob(1,49152,null,0,i.y,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,15,"ion-toolbar",[["color","dark"]],null,null,null,r.nb,r.G)),t.ob(3,49152,null,0,i.wb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(4,0,null,0,13,"ion-item",[["color","dark"]],null,null,null,r.Z,r.s)),t.ob(5,49152,null,0,i.E,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(6,0,null,0,2,"ion-label",[],null,null,null,r.ab,r.t)),t.ob(7,49152,null,0,i.K,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["Cube"])),(l()(),t.pb(9,0,null,0,8,"ion-select",[["placeholder","3x3x3"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ionChange"],[null,"ngModelChange"],[null,"ionBlur"]],(function(l,n,e){var u=!0,o=l.component;return"ionBlur"===n&&(u=!1!==t.Ab(l,10)._handleBlurEvent(e.target)&&u),"ionChange"===n&&(u=!1!==t.Ab(l,10)._handleChangeEvent(e.target)&&u),"ionChange"===n&&(u=!1!==o.nextScramble()&&u),"ngModelChange"===n&&(u=!1!==(o.selectedCube=e)&&u),u}),r.ib,r.A)),t.ob(10,16384,null,0,i.Gb,[t.k],null,null),t.Bb(1024,null,c.d,(function(l){return[l]}),[i.Gb]),t.ob(12,671744,null,0,c.g,[[8,null],[8,null],[8,null],[6,c.d]],{model:[0,"model"]},{update:"ngModelChange"}),t.Bb(2048,null,c.e,null,[c.g]),t.ob(14,16384,null,0,c.f,[[4,c.e]],null,null),t.ob(15,49152,null,0,i.hb,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),(l()(),t.eb(16777216,null,0,1,null,m)),t.ob(17,278528,null,0,s.i,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null),(l()(),t.pb(18,0,null,null,26,"ion-content",[["style","--background:var(--my-var)"]],null,[[null,"click"],[null,"press"],[null,"pressup"]],(function(l,n,e){var t=!0,u=l.component;return"click"===n&&(t=!1!==u.stopTimer()&&t),"press"===n&&(t=!1!==u.ready()&&t),"pressup"===n&&(t=!1!==u.startTimer()&&t),t}),r.R,r.k)),t.ob(19,49152,null,0,i.r,[t.h,t.k,t.x],null,null),(l()(),t.pb(20,0,null,0,24,"div",[["style","margin: auto;margin-top: 15vh; width: 80%;text-align: center;color: var(--ion-color-light);"]],null,null,null,null,null)),(l()(),t.pb(21,0,null,null,1,"h1",[["style","font-size: 2.5em;"]],null,null,null,null,null)),(l()(),t.Eb(22,null,["",""])),(l()(),t.pb(23,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),t.Eb(24,null,["",""])),(l()(),t.pb(25,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.pb(26,0,null,null,18,"ion-grid",[],null,null,null,r.U,r.n)),t.ob(27,49152,null,0,i.x,[t.h,t.k,t.x],null,null),(l()(),t.pb(28,0,null,0,16,"ion-row",[],null,null,null,r.eb,r.x)),t.ob(29,49152,null,0,i.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(30,0,null,0,4,"ion-col",[],null,null,null,r.Q,r.j)),t.ob(31,49152,null,0,i.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(32,0,null,0,2,"ion-button",[["color","dark"]],null,null,null,r.J,r.c)),t.ob(33,49152,null,0,i.h,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Eb(-1,0,["+2"])),(l()(),t.pb(35,0,null,0,4,"ion-col",[],null,null,null,r.Q,r.j)),t.ob(36,49152,null,0,i.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(37,0,null,0,2,"ion-button",[["color","dark"]],null,null,null,r.J,r.c)),t.ob(38,49152,null,0,i.h,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Eb(-1,0,["DNF"])),(l()(),t.pb(40,0,null,0,4,"ion-col",[],null,null,null,r.Q,r.j)),t.ob(41,49152,null,0,i.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(42,0,null,0,2,"ion-button",[["color","dark"]],null,null,null,r.J,r.c)),t.ob(43,49152,null,0,i.h,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.Eb(-1,0,["Delete"])),(l()(),t.pb(45,0,null,null,15,"ion-footer",[["style","font-size: small;"]],null,null,null,r.T,r.m)),t.ob(46,49152,null,0,i.w,[t.h,t.k,t.x],null,null),(l()(),t.pb(47,0,null,0,13,"ion-toolbar",[["color","dark"]],null,null,null,r.nb,r.G)),t.ob(48,49152,null,0,i.wb,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(49,0,null,0,11,"ion-grid",[],null,null,null,r.U,r.n)),t.ob(50,49152,null,0,i.x,[t.h,t.k,t.x],null,null),(l()(),t.pb(51,0,null,0,9,"ion-row",[],null,null,null,r.eb,r.x)),t.ob(52,49152,null,0,i.db,[t.h,t.k,t.x],null,null),(l()(),t.pb(53,0,null,0,3,"ion-col",[],null,null,null,r.Q,r.j)),t.ob(54,49152,null,0,i.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(55,0,null,0,1,"pre",[["style","text-align: start;"]],null,null,null,null,null)),(l()(),t.Eb(56,null,["",""])),(l()(),t.pb(57,0,null,0,3,"ion-col",[],null,null,null,r.Q,r.j)),t.ob(58,49152,null,0,i.q,[t.h,t.k,t.x],null,null),(l()(),t.pb(59,0,null,0,1,"pre",[["style","text-align: end;"]],null,null,null,null,null)),(l()(),t.Eb(60,null,["",""]))],(function(l,n){var e=n.component;l(n,3,0,"dark"),l(n,5,0,"dark"),l(n,12,0,e.selectedCube),l(n,15,0,"3x3x3"),l(n,17,0,e.cubesList),l(n,33,0,"dark"),l(n,38,0,"dark"),l(n,43,0,"dark"),l(n,48,0,"dark")}),(function(l,n){var e=n.component;l(n,9,0,t.Ab(n,14).ngClassUntouched,t.Ab(n,14).ngClassTouched,t.Ab(n,14).ngClassPristine,t.Ab(n,14).ngClassDirty,t.Ab(n,14).ngClassValid,t.Ab(n,14).ngClassInvalid,t.Ab(n,14).ngClassPending),l(n,22,0,e.time),l(n,24,0,e.scramble.rawSequence),l(n,56,0,e.text1),l(n,60,0,e.text2)}))}function f(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-cubing",[],null,null,null,g,h)),t.ob(1,114688,null,0,p,[d.a,b],null,null)],(function(l,n){l(n,1,0)}),null)}var y=t.lb("app-cubing",p,f,{},{},[]),x=e("iInd");class k{}e.d(n,"CubingPageModuleNgFactory",(function(){return v}));var v=t.mb(u,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,y]],[3,t.j],t.v]),t.yb(4608,s.l,s.k,[t.s,[2,s.u]]),t.yb(4608,c.i,c.i,[]),t.yb(4608,i.a,i.a,[t.x,t.g]),t.yb(4608,i.Ab,i.Ab,[i.a,t.j,t.p]),t.yb(4608,i.Eb,i.Eb,[i.a,t.j,t.p]),t.yb(1073742336,s.b,s.b,[]),t.yb(1073742336,c.h,c.h,[]),t.yb(1073742336,c.a,c.a,[]),t.yb(1073742336,i.yb,i.yb,[]),t.yb(1073742336,x.o,x.o,[[2,x.t],[2,x.m]]),t.yb(1073742336,k,k,[]),t.yb(1073742336,u,u,[]),t.yb(1024,x.k,(function(){return[[{path:"",component:p}]]}),[])])}))},KwJk:function(l,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return t})),e.d(n,"d",(function(){return i}));const t=(l,n)=>null!==n.closest(l),u=l=>"string"==typeof l&&l.length>0?{"ion-color":!0,[`ion-color-${l}`]:!0}:void 0,o=l=>{const n={};return(l=>void 0!==l?(Array.isArray(l)?l:l.split(" ")).filter(l=>null!=l).map(l=>l.trim()).filter(l=>""!==l):[])(l).forEach(l=>n[l]=!0),n},r=/^[a-z][a-z0-9+\-.]*:/,i=async(l,n,e)=>{if(null!=l&&"#"!==l[0]&&!r.test(l)){const t=document.querySelector("ion-router");if(t)return null!=n&&n.preventDefault(),t.push(l,e)}return!1}},NqGI:function(l,n,e){"use strict";e.d(n,"a",(function(){return t})),e.d(n,"b",(function(){return u}));const t=async(l,n,e,t,u)=>{if(l)return l.attachViewToDom(n,e,u,t);if("string"!=typeof e&&!(e instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof e?n.ownerDocument&&n.ownerDocument.createElement(e):e;return t&&t.forEach(l=>o.classList.add(l)),u&&Object.assign(o,u),n.appendChild(o),o.componentOnReady&&await o.componentOnReady(),o},u=(l,n)=>{if(n){if(l)return l.removeViewFromDom(n.parentElement,n);n.remove()}return Promise.resolve()}},Uwmq:function(l,n,e){"use strict";e.d(n,"a",(function(){return t}));const t=l=>{try{if("string"!=typeof l||""===l)return l;const n=document.createDocumentFragment(),e=document.createElement("div");n.appendChild(e),e.innerHTML=l,i.forEach(l=>{const e=n.querySelectorAll(l);for(let t=e.length-1;t>=0;t--){const l=e[t];l.parentNode?l.parentNode.removeChild(l):n.removeChild(l);const r=o(l);for(let n=0;n<r.length;n++)u(r[n])}});const t=o(n);for(let l=0;l<t.length;l++)u(t[l]);const r=document.createElement("div");r.appendChild(n);const c=r.querySelector("div");return null!==c?c.innerHTML:r.innerHTML}catch(n){return console.error(n),""}},u=l=>{if(l.nodeType&&1!==l.nodeType)return;for(let e=l.attributes.length-1;e>=0;e--){const n=l.attributes.item(e),t=n.name;if(!r.includes(t.toLowerCase())){l.removeAttribute(t);continue}const u=n.value;null!=u&&u.toLowerCase().includes("javascript:")&&l.removeAttribute(t)}const n=o(l);for(let e=0;e<n.length;e++)u(n[e])},o=l=>null!=l.children?l.children:l.childNodes,r=["class","id","href","src","name","slot"],i=["script","style","iframe","meta","link","object","embed"]},c3IR:function(l,n,e){"use strict";e.r(n);var t=e("8Y7J");class u{}var o=e("pMnS"),r=e("MKJQ"),i=e("sZkV");class c{constructor(){}ngOnInit(){}}var s=t.nb({encapsulation:0,styles:[[""]],data:{}});function a(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,6,"ion-header",[],null,null,null,r.V,r.o)),t.ob(1,49152,null,0,i.y,[t.h,t.k,t.x],null,null),(l()(),t.pb(2,0,null,0,4,"ion-toolbar",[],null,null,null,r.nb,r.G)),t.ob(3,49152,null,0,i.wb,[t.h,t.k,t.x],null,null),(l()(),t.pb(4,0,null,0,2,"ion-title",[],null,null,null,r.mb,r.F)),t.ob(5,49152,null,0,i.ub,[t.h,t.k,t.x],null,null),(l()(),t.Eb(-1,0,["records"])),(l()(),t.pb(7,0,null,null,1,"ion-content",[],null,null,null,r.R,r.k)),t.ob(8,49152,null,0,i.r,[t.h,t.k,t.x],null,null)],null,null)}function b(l){return t.Fb(0,[(l()(),t.pb(0,0,null,null,1,"app-records",[],null,null,null,a,s)),t.ob(1,114688,null,0,c,[],null,null)],(function(l,n){l(n,1,0)}),null)}var d=t.lb("app-records",c,b,{},{},[]),p=e("SVse"),h=e("s7LF"),m=e("iInd");class g{}e.d(n,"RecordsPageModuleNgFactory",(function(){return f}));var f=t.mb(u,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[o.a,d]],[3,t.j],t.v]),t.yb(4608,p.l,p.k,[t.s,[2,p.u]]),t.yb(4608,h.i,h.i,[]),t.yb(4608,i.a,i.a,[t.x,t.g]),t.yb(4608,i.Ab,i.Ab,[i.a,t.j,t.p]),t.yb(4608,i.Eb,i.Eb,[i.a,t.j,t.p]),t.yb(1073742336,p.b,p.b,[]),t.yb(1073742336,h.h,h.h,[]),t.yb(1073742336,h.a,h.a,[]),t.yb(1073742336,i.yb,i.yb,[]),t.yb(1073742336,m.o,m.o,[[2,m.t],[2,m.m]]),t.yb(1073742336,g,g,[]),t.yb(1073742336,u,u,[]),t.yb(1024,m.k,(function(){return[[{path:"",component:c}]]}),[])])}))},fzvj:function(l,n,e){"use strict";e.d(n,"a",(function(){return u})),e.d(n,"b",(function(){return o})),e.d(n,"c",(function(){return r})),e.d(n,"d",(function(){return t}));const t=()=>{const l=window.TapticEngine;l&&l.selection()},u=()=>{const l=window.TapticEngine;l&&l.gestureSelectionStart()},o=()=>{const l=window.TapticEngine;l&&l.gestureSelectionChanged()},r=()=>{const l=window.TapticEngine;l&&l.gestureSelectionEnd()}}}]);