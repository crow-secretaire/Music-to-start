import{n as a,o as s,c as e,w as l,a as t,i as n,b as d,I as r,d as o,F as c,r as i,e as u,S as f,f as _,t as p,g as m}from"./index.02bf0a0e.js";import{_ as g}from"./plugin-vue_export-helper.21dcd24c.js";import{r as b}from"./uni-app.es.4c8469d1.js";import{s as h}from"./url.29c160a7.js";var x=g({name:"search",data:()=>({}),methods:{tz(){a({url:"../../pages/ss/ss"})}}},[["render",function(a,o,c,i,u,f){const _=n,p=d,m=r;return s(),e(p,null,{default:l((()=>[t(p,{class:"sr"},{default:l((()=>[t(p,{class:"mage"},{default:l((()=>[t(_,{src:"/assets/fangdajing.b1cc90a0.png",mode:""})])),_:1}),t(m,{type:"text",placeholder:"搜索歌曲",onClick:f.tz},null,8,["onClick"])])),_:1})])),_:1})}],["__scopeId","data-v-8123ec0a"]]);var k=g({data:()=>({title:!1,bangd:[],lunbo:[]}),onLoad(){},methods:{tiaoz(s){a({url:`../elenco/elenco?id=${s}`})}},created(){h("/toplist/detail").then((a=>{for(var s=0;s<4;s++)a.data.list[s],this.bangd.push(a.data.list[s])})),h("/banner").then((a=>{this.lunbo=a.data.banners}))}},[["render",function(a,r,g,h,k,v){const j=b(u("search"),x),y=n,z=m,C=f,I=d;return s(),o(c,null,[t(j),t(C,{"indicator-dots":!0,autoplay:!0,interval:3e3,duration:1e3,class:"sw"},{default:l((()=>[(s(!0),o(c,null,i(k.lunbo,(a=>(s(),e(z,{key:a.id},{default:l((()=>[t(y,{src:a.imageUrl,mode:"scaleToFill",class:"img"},null,8,["src"])])),_:2},1024)))),128))])),_:1}),(s(!0),o(c,null,i(k.bangd,(a=>(s(),e(I,{class:"flex conu",key:a.id,onClick:s=>v.tiaoz(a.id)},{default:l((()=>[t(I,{class:"flex_1"},{default:l((()=>[t(y,{src:a.coverImgUrl,mode:""},null,8,["src"]),t(I,{class:"flex_1_text"},{default:l((()=>[_(" 每天更新 ")])),_:1})])),_:2},1024),t(I,{class:"flex_2"},{default:l((()=>[(s(!0),o(c,null,i(a.tracks,((a,t)=>(s(),e(I,{class:"flex_2_text",key:a.id},{default:l((()=>[_(p(t)+". "+p(a.first)+" -- "+p(a.second),1)])),_:2},1024)))),128))])),_:2},1024)])),_:2},1032,["onClick"])))),128))],64)}],["__scopeId","data-v-52cf0fe2"]]);export{k as default};
