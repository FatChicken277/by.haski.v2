import{_ as R,r as t,i as M,j as P,b as c,e as i,t as b,g as U,F as z,k as B,o as v,p as H,l as O}from"./index-475ff92f.js";const S="/assets/overlay-efadfa35.mp4",C={content:["./index.html","./src/**/*.{vue,js,ts,jsx,tsx}"],theme:{extend:{},screens:{sm:"640px",md:"768px",lg:"1024px",xl:"1280px"}},plugins:[]};const x=l=>(H("data-v-6c4a0a2f"),l=l(),O(),l),F={class:"h-[100dvh]"},N={key:0,class:"absolute top-0 z-[15] flex h-[100dvh] w-[100dvw] items-center justify-center bg-black"},$=x(()=>i("video",{class:"z-5 absolute h-full w-full object-cover",src:S,muted:"",autoplay:"",loop:"",preload:"auto",playsinline:""},null,-1)),D=["src"],Q=x(()=>i("div",{id:"logo",class:"absolute h-full w-full"},null,-1)),q={class:"relative hidden md:z-10 md:grid md:h-full md:grid-flow-col md:py-20"},A=["onMouseover"],G={class:"mt-auto hidden group-hover:block md:text-[5rem] xl:text-[7rem]"},J=13,K={__name:"Home",setup(l){const a=t("videos/lowres/Video01.mp4"),n=t([]),m=t([]),w=t(0),_=t(0),g=t(!1);let f=0,r=0,p={1:{low:"videos/lowres/Video01.mp4",high:"videos/Video01.mp4"},2:{low:"videos/lowres/Video02.mp4",high:"videos/Video02.mp4"},3:{low:"videos/lowres/Video03.mp4",high:"videos/Video03.mp4"},4:{low:"videos/lowres/Video04.mp4",high:"videos/Video04.mp4"},5:{low:"videos/lowres/Video05.mp4",high:"videos/Video05.mp4"},6:{low:"videos/lowres/Video06.mp4",high:"videos/Video06.mp4"},7:{low:"videos/lowres/Video07.mp4",high:"videos/Video07.mp4"},8:{low:"videos/lowres/Video08.mp4",high:"videos/Video08.mp4"},9:{low:"videos/lowres/Video09.mp4",high:"videos/Video09.mp4"},10:{low:"videos/lowres/Video10.mp4",high:"videos/Video10.mp4"},11:{low:"videos/lowres/Video11.mp4",high:"videos/Video11.mp4"},12:{low:"videos/lowres/Video12.mp4",high:"videos/Video12.mp4"},13:{low:"videos/lowres/Video13.mp4",high:"videos/Video13.mp4"}};async function V(e){const h=await(await fetch(e)).blob(),d=URL.createObjectURL(h);let s=document.createElement("video");return s.style.display="none",s.preload="auto",s.src=d,document.body.appendChild(s),s.load(),await new Promise((L,E)=>{s.addEventListener("loadeddata",()=>{w.value++,_.value=Math.round(w.value/J*100),L(d)}),s.addEventListener("error",()=>{E()})})}async function j(){const e=Object.values(p).map(o=>V(o.low));return Promise.all(e)}async function k(){const e=Object.values(p).map(o=>V(o.high));return Promise.all(e)}M(async()=>{try{n.value=await j(),k().then(e=>{m.value=e,g.value=!0})}catch{}});function u(e){g.value?a.value=m.value[e]||n.value[e]:a.value=n.value[e]}function y(){clearInterval(f)}function I(){y(),u(r),f=setInterval(()=>{r=(r+1)%Object.keys(p).length,u(r)},3e3)}return P(()=>{const e=window.matchMedia(`(max-width: ${C.theme.screens.md})`),o=()=>{e.matches?I():y()};return e.addEventListener("change",o),o(),()=>{e.removeEventListener("change",o)}}),(e,o)=>(v(),c("div",F,[n.value.length!==13?(v(),c("div",N,[i("h1",null,"Loading: "+b(_.value)+"%",1)])):U("",!0),$,(v(),c("video",{id:"video",class:"absolute h-full w-full object-cover",src:a.value,type:"video/mp4",autoplay:"",muted:"",loop:"",playsinline:"",preload:"auto",key:a.value},null,8,D)),Q,i("div",q,[(v(),c(z,null,B(13,(h,d)=>i("div",{key:d,onMouseover:s=>u(d),class:"group flex justify-center"},[i("h1",G,b(h),1)],40,A)),64))])]))}},W=R(K,[["__scopeId","data-v-6c4a0a2f"]]);export{W as default};
