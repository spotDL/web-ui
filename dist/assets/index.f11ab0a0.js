import{o as i,c as u,a,b as g,d as H,r as y,e as se,f,g as p,h as ae,v as re,I as D,i as ce,w as le,j as de,k as ie,l as V,m as E,u as F,t as w,n as L,p as ue,q as _e,s as he,F as M,x as C,y as me,z as pe,A as fe,B as ve}from"./vendor.4a0a0af1.js";const ge=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))e(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&e(l)}).observe(document,{childList:!0,subtree:!0});function c(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function e(n){if(n.ep)return;n.ep=!0;const r=c(n);fetch(n.href,r)}};ge();var N="/assets/spotdl.fecdfd79.svg",$=(t,o)=>{const c=t.__vccOpts||t;for(const[e,n]of o)c[e]=n;return c};const be={components:{},setup(){return{}}},we={class:"p-10 footer bg-neutral text-neutral-content"},ye=a("div",null,[a("img",{src:N,width:"50",height:"50",viewBox:"0 0 24 24"}),a("p",null,[g("spotdl"),a("br"),g("Open Source Music Downloader")])],-1),$e=H('<div><span class="footer-title">Social</span><div class="grid grid-flow-col gap-4"><a href="https://github.com/spotDL/spotdl-v4" target="_blank"><svg width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg></a><a href="https://discord.gg/xCa23pwJWY" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" class="fill-current" viewBox="0 0 16 16"><path d="M13.545 2.907a13.227 13.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z"></path></svg></a></div></div>',1),ke=[ye,$e];function xe(t,o,c,e,n,r){return i(),u("footer",we,ke)}var Le=$(be,[["render",xe]]);const k=y(""),j=y("light"),P=y("dark");function Q(t=!0,o="",c,e){function n(b){j.value=b,v()}function r(b){P.value=b,v()}function l(){return window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function s(b){k.value=b,v()}function m(){k==="dark"?k.value="light":k==="light"&&(k.value="dark"),v()}function v(){document.documentElement.setAttribute("data-theme",k.value==="dark"?P.value:j.value)}return k.value!=="light"&&k.value!=="dark"&&(t&&s(l()),(o==="light"||o==="dark")&&(k.value=o)),c&&n(c),e&&r(e),v(),{currentTheme:k,setLightAlias:n,setDarkAlias:r,getSystemTheme:l,setTheme:s,switchTheme:m}}const De={name:"App",components:{Footer:Le},setup(){const t=Q();return se(()=>{t.setLightAlias("emerald"),t.setDarkAlias("forest")}),{themeMgr:t}}},Ie={class:"bg-base-300 absolute w-full top-0"};function Se(t,o,c,e,n,r){const l=f("router-view"),s=f("Footer");return i(),u("div",Ie,[p(l),p(s)])}var Me=$(De,[["render",Se]]);const K={BACKEND:"http://localhost:8800",PORT:"",baseURL:""};console.log("using config",K);const R=ae.create({baseURL:K.BACKEND});var q={search(t){return R.get("/api/songs/search?query="+t)},open(t){return R.get("api/song/url?url="+t)},download(t,o){return R.post("/api/downloader/download/url?url="+t+"&sessionID="+o)},downloadFileURL(t,o){return R.defaults.baseURL+"/api/downloader/download/file?file="+t+"&sessionID="+o}};const W=y(""),U=y(),I=y(!1),A=y(!1),T=y("");function B(){function t(n){return o(n)||c(n)}function o(n){return n!==""}function c(n){return!!n.includes("://open.spotify.com/track/")}function e(n){console.log("Searching for:",n),U.value=[],I.value=!0,W.value=n,A.value=!1,T.value="",q.search(n).then(r=>{console.log("Received Data:",r.data),r.status===200?(U.value=r.data,I.value=!1):(console.log("Error:",r),I.value=!1,A.value=!0,T.value=r.toString())}).catch(r=>{console.log("Other Error:",r.message),I.value=!1,A.value=!0,T.value=r.message})}return{searchTerm:W,isSearching:I,results:U,error:A,errorValue:T,searchFor:e,isValid:t,isValidSearch:o,isValidURL:c}}const z=re(),h=y([]);function S(){function t(d,_=!0){h.value.push(d),_&&s(d)}function o(d){q.open(d).then(_=>{console.log("Received Response:",_),_.status===200?(console.log("Opened Song:",_.data),t(_.data)):console.log("Error:",_)}).catch(_=>{console.log("Other Error:",_.message)})}function c(d){h.value=h.value.filter(_=>_.song_id!==d.song_id)}function e(){return h.value.length}function n(){return h.value.filter(d=>d.web_status==="downloaded").length}function r(){return n()===0||e()===0?0:n()/e()*100}function l(d){return h.value.find(_=>_.song_id===d.song_id)!==void 0}function s(d){te(d),q.download(d.url,z).then(_=>{console.log("Received Response:",_),_.status===200?(console.log("Download Complete:",_.data),ee(d,q.downloadFileURL(_.data,z)),oe(d)):(console.log("Error:",_),ne(d))}).catch(_=>{console.log("Other Error:",_.message)})}function m(){h.value.forEach((d,_,oo)=>{s(d)})}function v(d){return h.value[x(d)].web_status==="downloaded"}function b(d){return h.value[x(d)].web_status==="downloading"}function Y(d){return h.value[x(d)].web_status}function x(d){return h.value.findIndex(_=>_.song_id===d.song_id)}function ee(d,_){h.value[x(d)].web_download_url=_}function te(d){h.value[x(d)].web_status="downloading"}function oe(d){h.value[x(d)].web_status="downloaded"}function ne(d){h.value[x(d)].web_status="error"}return{downloadQueue:h,queue:t,fromURL:o,queueLength:e,downloadedLength:n,downloadedProgress:r,remove:c,download:s,downloadAll:m,inQueue:l,status:Y,isDownloaded:v,isDownloading:b}}const Ce={components:{Icon:D},setup(){const t=B(),o=S(),c=["All Eyes On Me - Bo Burnham","https://open.spotify.com/track/4vfN00PlILRXy5dcXHQE9M?si=e4d9e7c044dd4a8f","Lil Wayne","Drive - Miley Cyrus","Sofia - TMG","Lightning Crashes - Live"],e=y(c[0]),n=setInterval(()=>{c.push(c.shift()),e.value=c[0]},6e3);ce(()=>{clearInterval(n)});function r(s){if(t.isValidURL(s))o.fromURL(s),l({name:"Download"});else if(t.isValidSearch(s)){let m={name:"Search",params:{query:s}};t.isValidSearch(s)&&l(m)}}function l(s){O.push(s)}return{lookUp:r,searchTerm:t.searchTerm,isValidURL:t.isValidURL,placeHolder:e}}},Re={class:"flex flex-row items-center space-x-4 w-full"},qe=["placeholder"],Ae=g(" \u200B ");function Te(t,o,c,e,n,r){const l=f("Icon");return i(),u("div",Re,[le(a("input",{type:"text",placeholder:e.placeHolder,class:"input input-bordered w-full text-base-content","onUpdate:modelValue":o[0]||(o[0]=s=>e.searchTerm=s),onKeyup:o[1]||(o[1]=ie(s=>e.lookUp(e.searchTerm),["enter"]))},null,40,qe),[[de,e.searchTerm]]),a("button",{class:"btn btn-square btn-primary",onClick:o[2]||(o[2]=s=>e.lookUp(e.searchTerm))},[Ae,e.isValidURL(e.searchTerm)?(i(),V(l,{key:0,icon:"clarity:download-line",class:"h-6 w-6"})):(i(),V(l,{key:1,icon:"clarity:search-line",class:"h-6 w-6"}))])])}var Z=$(Ce,[["render",Te]]);const Ve={components:{Icon:D,SearchInput:Z},setup(){return{themeMgr:Q()}}},Ee={class:"hero min-h-screen"},Ne={key:0,class:"flex justify-end absolute top-0 right-0"},Ue=["checked"],Be={class:"block text-center justify-center hero-content"},Oe=H('<div class="bg-cover bg-no-repeat bg-center" data-v-2acc2008><img src="'+N+'" class="mb-5 w-32 center" data-v-2acc2008></div><div class="max-w-lg" data-v-2acc2008><h1 class="mb-5 text-5xl font-bold text-base-content" data-v-2acc2008>spotdl</h1><p class="mb-5 text-base-content" data-v-2acc2008> Download any song and never have to worry about metadata. </p></div>',2);function He(t,o,c,e,n,r){const l=f("SearchInput");return i(),u("div",Ee,[(i(),u("div",Ne,[a("input",{type:"checkbox",class:"toggle m-5",onChange:o[0]||(o[0]=s=>e.themeMgr.setTheme(s.target.checked?"light":"dark")),checked:e.themeMgr.currentTheme.value==="dark"?!1:"checked"},null,40,Ue)])),a("div",Be,[Oe,p(l)])])}var Fe=$(Ve,[["render",He],["__scopeId","data-v-2acc2008"]]);const je={components:{Hero:Fe},setup(){return E(()=>{window.scroll(0,0)}),{}}};function Pe(t,o,c,e,n,r){const l=f("Hero");return i(),V(l)}var Qe=$(je,[["render",Pe]]);const Ke={components:{Icon:D,SearchInput:Z},setup(){const t=S(),o=F();function c(e){O.push(e)}return{goto:c,route:o,dm:t}}},G=t=>(_e("data-v-2ef7e407"),t=t(),he(),t),We={class:"navbar m-2 shadow-lg bg-neutral text-neutral-content rounded-box"},ze=G(()=>a("div",{class:"bg-cover bg-no-repeat bg-center"},[a("img",{src:N,class:"py-2 pr-2 w-10 center"})],-1)),Ze=G(()=>a("button",{class:"text-lg font-bold"},"spotdl",-1)),Ge=[ze,Ze],Xe={class:"hidden sm:flex px-2 mx-2 navbar-center w-96 space-x-4"},Je={class:"navbar-end"},Ye={class:"indicator"},et={key:0,class:"indicator-item indicator-top indicator-end badge badge-secondary"},tt=g(" \u200B "),ot={class:"sm:hidden px-2 mx-2"};function nt(t,o,c,e,n,r){const l=f("SearchInput"),s=f("Icon");return i(),u("div",null,[a("div",We,[a("button",{class:"px-2 mx-2 navbar-start",onClick:o[0]||(o[0]=m=>e.goto({name:"Home"}))},Ge),a("div",Xe,[p(l,{class:"w-full"})]),a("div",Je,[a("div",Ye,[e.dm.queueLength()>0?(i(),u("div",et,w(e.dm.queueLength()),1)):L("",!0),a("button",{class:ue(["btn btn-square",e.route.name==="Download"?"btn-primary":"btn-ghost"]),onClick:o[1]||(o[1]=m=>e.goto({name:"Download"}))},[tt,p(s,{icon:"clarity:download-cloud-line",class:"h-6 w-6"})],2)])])]),a("div",ot,[p(l,{class:"w-full"})])])}var X=$(Ke,[["render",nt],["__scopeId","data-v-2ef7e407"]]);const st={components:{Icon:D},props:["data","error"],emits:["download"],setup(t,o){const c=B(),e=S();return{data:t.data,error:t.error,errorValue:c.errorValue,loading:c.isSearching,download:n=>o.emit("download",n),dm:e}}},at={class:"min-h-screen m-2"},rt={key:0,class:"hero min-h-screen"},ct={key:0,class:"btn btn-sm btn-ghost loading"},lt={key:1,class:"alert alert-error"},dt={class:"flex-1"},it=a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",class:"w-6 h-6 mx-2 stroke-current"},[a("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"})],-1),ut={class:"aspect-square md:max-h-fit"},_t=["src"],ht={class:"card-body"},mt={class:"card-title"},pt={key:0,class:"badge mx-0.5 badge-error"},ft={key:0},vt=a("br",null,null,-1),gt=a("p",null,[a("br")],-1),bt={class:"card-actions absolute bottom-0 right-0 m-2"},wt=["href"],yt=g(" \u200B "),$t={key:0,class:"btn btn-primary btn-square"},kt=g(" \u200B "),xt=["onClick"],Lt=g(" \u200B ");function Dt(t,o,c,e,n,r){const l=f("Icon");return i(),u("div",at,[e.loading||e.error?(i(),u("div",rt,[e.loading?(i(),u("button",ct," LOADING ")):L("",!0),e.error?(i(),u("div",lt,[a("div",dt,[it,a("label",null,"Error: "+w(e.errorValue),1)])])):L("",!0)])):(i(!0),u(M,{key:1},C(e.data,(s,m)=>(i(),u("div",{key:m,class:"card md:card-side card-bordered my-2 shadow-lg card-compact bg-base-100"},[a("figure",ut,[a("img",{src:s.cover_url,class:"object-contain aspect-square md:max-h-40"},null,8,_t)]),a("div",ht,[a("h2",mt,[g(w(s.name)+" - "+w(s.artist)+" ",1),s.explicit?(i(),u("div",pt," Explicit ")):L("",!0)]),a("h3",null,[(i(!0),u(M,null,C(s.artists,(v,b)=>(i(),u("a",{key:b},[b!==0?(i(),u("a",ft," \u2022 ")):L("",!0),g(" "+w(v),1)]))),128))]),a("h3",null,w(s.album_name),1),vt,gt,a("div",bt,[a("a",{class:"btn btn-ghost btn-square",href:s.url,target:"_blank"},[yt,p(l,{icon:"clarity:link-line",class:"h-6 w-6"})],8,wt),e.dm.inQueue(s)?(i(),u("button",$t,[kt,p(l,{icon:"clarity:check-line",class:"h-6 w-6"})])):(i(),u("button",{key:1,class:"btn btn-primary btn-square",onClick:v=>e.download(s)},[Lt,p(l,{icon:"clarity:download-line",class:"h-6 w-6"})],8,xt))])])]))),128))])}var It=$(st,[["render",Dt]]);const St={components:{Navbar:X,SearchList:It},setup(){E(()=>{window.scroll(0,0)});const t=F(),o=B(),c=S();return me(()=>t.params.query,()=>{t.params.query&&o.searchFor(t.params.query)},{deep:!0}),o.searchFor(t.params.query),{sm:o,dm:c}}};function Mt(t,o,c,e,n,r){const l=f("Navbar"),s=f("SearchList");return i(),u("div",null,[p(l),p(s,{data:e.sm.results,error:e.sm.error,onDownload:o[0]||(o[0]=m=>e.dm.queue(m))},null,8,["data","error"])])}var Ct=$(St,[["render",Mt]]);const Rt={components:{Icon:D},props:{data:Object},setup(t,o){const c=S();function e(n){const r=document.createElement("a");r.href=n,r.download=n.split("/").pop(),document.body.appendChild(r),r.click(),document.body.removeChild(r)}return{dm:c,download:e}}},qt={class:"min-h-screen m-2"},At={class:"carousel carousel-end bg-base-200 rounded-box shadow-lg"},Tt=["src"],Vt={class:"w-full mt-2 border stats border-base-300 shadow-lg"},Et={class:"stat"},Nt={class:"stat-value"},Ut=a("div",{class:"stat-title"},"Songs Downloaded/Queued",-1),Bt={class:"stat-desc"},Ot=["value"],Ht={class:"card card-bordered my-2 shadow-lg card-compact bg-base-100"},Ft={class:"card-title"},jt={key:0,class:"badge"},Pt={class:"stat-figure text-primary flex space-x-2"},Qt=["onClick"],Kt=g(" \u200B "),Wt=["onClick"],zt=g(" \u200B "),Zt={key:1,class:"btn btn-square btn-ghost loading"};function Gt(t,o,c,e,n,r){const l=f("Icon");return i(),u("div",qt,[a("div",At,[(i(!0),u(M,null,C(e.dm.downloadQueue.value,(s,m)=>(i(),u("div",{key:m,class:"carousel-item h-48"},[a("img",{src:s.cover_url},null,8,Tt)]))),128))]),a("div",Vt,[a("div",Et,[a("div",Nt,w(e.dm.downloadedLength())+"/"+w(e.dm.queueLength()),1),Ut,a("div",Bt,[a("progress",{value:e.dm.downloadedProgress(),max:"100",class:"progress progress-secondary"},null,8,Ot)])])]),a("div",Ht,[(i(!0),u(M,null,C(e.dm.downloadQueue.value,(s,m)=>(i(),u("div",{key:m,class:"card-body grid grid-rows-1"},[a("h2",Ft,[g(w(s.name)+" - "+w(s.artist)+" ",1),e.dm.isDownloading(s)?(i(),u("div",jt,"Downloading")):L("",!0)]),a("p",null,w(s.album_name),1),a("div",Pt,[a("button",{class:"btn btn-error btn-outline btn-square",onClick:v=>e.dm.remove(s)},[Kt,p(l,{icon:"clarity:trash-line",class:"h-6 w-6"})],8,Qt),e.dm.isDownloaded(s)?(i(),u("a",{key:0,class:"btn btn-square btn-ghost",href:"javascript:;",onClick:v=>e.download(s.web_download_url),download:""},[zt,p(l,{icon:"clarity:download-line",class:"h-6 w-6"})],8,Wt)):(i(),u("button",Zt," \u200B "))])]))),128))])])}var Xt=$(Rt,[["render",Gt]]);const Jt={components:{Navbar:X,DownloadList:Xt},setup(){return E(()=>{window.scroll(0,0)}),{}}};function Yt(t,o,c,e,n,r){const l=f("Navbar"),s=f("DownloadList");return i(),u("div",null,[p(l),p(s)])}var eo=$(Jt,[["render",Yt]]);const to=[{path:"/",name:"Home",component:Qe},{path:"/search/:query",name:"Search",component:Ct},{path:"/download",name:"Download",component:eo}],O=pe({history:fe(),routes:to});const J=ve(Me);J.use(O);J.mount("#app");
