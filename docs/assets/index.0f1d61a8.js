import{j as p,f as h,m,r as a,R as b,a as f,b as x,d as q,B as w,c as v,e as F,H as T,L as d,g as C,h as l,i as O,k as R}from"./vendor.f771682a.js";const j=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const u of s)if(u.type==="childList")for(const o of u.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const u={};return s.integrity&&(u.integrity=s.integrity),s.referrerpolicy&&(u.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?u.credentials="include":s.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function i(s){if(s.ep)return;s.ep=!0;const u=n(s);fetch(s.href,u)}};j();const e=p.exports.jsx,c=p.exports.jsxs,B=p.exports.Fragment;let A=h([1,2,3,4,5]),M=A.pipe(m(r=>r*r));const E=()=>{const[r,t]=a.exports.useState(0);return a.exports.useEffect(()=>{let n=M.subscribe(i=>{t(i),console.log(i)});return()=>n.unsubscribe()},[]),c("div",{className:"App",children:[e("h1",{children:"Map"}),e("h2",{children:"Square numbers"}),c("p",{children:["Current number is: ",r]}),e(b,{gist:"sanchezg7/67348492327935f5c43fe0c2e4218f83"})]})};let L=h([1,2,3,4,5]),D=L.pipe(f(r=>r>2),m(r=>r*r));const g=()=>{const[r,t]=a.exports.useState(0);return a.exports.useEffect(()=>{let n=D.subscribe(i=>{t(i),console.log(i)});return()=>n.unsubscribe()},[]),c("div",{className:"App",children:[e("h1",{children:"Map & Filter"}),e("h2",{children:"Use case: Square numbers when greater than 2"}),c("p",{children:["Current number is: ",r]}),e(b,{gist:"sanchezg7/070ce9c4f9d98107b18455379d01923c"})]})};g.defaultProps={};g.propTypes={};let P=h([1,2,3,4,5]),$=P.pipe(f(r=>r>2),x(r=>h([r]).pipe(q(1e3*r))),m(r=>r*r));const N=()=>{const[r,t]=a.exports.useState(0);return a.exports.useEffect(()=>{let n=$.subscribe(i=>{t(i),console.log(i)});return()=>n.unsubscribe()},[]),c("div",{className:"App",children:[e("h1",{children:"Map & Filter & MergeMap"}),e("h2",{children:"Squared Numbers when greater than two and with respective delay"}),c("p",{children:["Current number is: ",r]}),e(b,{gist:"sanchezg7/e5639790c8261abbe1e4a6ce7a079e8a"})]})};N.defaultProps={};N.propTypes={};const k=async r=>{const{message:t}=await fetch("https://dog.ceo/api/breeds/list").then(n=>n.json());return t.filter(n=>n.includes(r))},z=(r,t)=>{a.exports.useEffect(()=>{let n=r.subscribe(i=>{t(i)});return()=>n.unsubscribe()},[r,t])};let y=new w(""),H=y.pipe(f(r=>r.length>1),v(750),F(),x(r=>h(k(r))));const S=()=>{const[r,t]=a.exports.useState([]);z(H,t);const[n,i]=a.exports.useState("");return c("div",{className:"App",children:[e("h1",{children:"Search for Dog Breed"}),e("input",{type:"text",placeholder:"Dog Breed...",value:n,onChange:u=>{const o=u.target.value;i(o),y.next(o)}}),e("p",{children:"Results:"}),e("div",{children:JSON.stringify(r,null,2)})]})};S.defaultProps={};S.propTypes={};const W=()=>(a.exports.useEffect(()=>{},[]),c("div",{className:"App",children:[e("h1",{children:"rxjs-sample-tutorial"}),c("div",{style:{display:"flex",flexDirection:"column"},children:[e(d,{to:"/squareNumbers",children:"Square Numbers"}),e(d,{to:"/squareNumbers/withFilter",children:"Square Numbers with Filter"}),e(d,{to:"/squareNumbers/withFilter/withTimer",children:"Squared numbers with filter with timer"})]})]})),J=()=>e("div",{children:"Sorry, nothing here."});function U(){return e(B,{children:c(T,{hashType:"slash",children:[e("div",{className:"App-header",children:e(d,{to:"/",children:"RxJS Counter"})}),c(C,{children:[e(l,{path:"/",element:e(W,{})}),e(l,{path:"/squareNumbers",element:e(E,{})}),e(l,{path:"/squareNumbers/withFilter",element:e(g,{})}),e(l,{path:"/squareNumbers/withFilter/withTimer",element:e(N,{})}),e(l,{element:e(J,{}),default:!0}),e(l,{path:"/dog",element:e(S,{})})]})]})})}O.render(e(R.StrictMode,{children:e(U,{})}),document.getElementById("root"));