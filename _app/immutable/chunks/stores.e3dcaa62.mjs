import{w as n}from"./index.2cb50596.mjs";const m=function(e){return!window.matchMedia("(prefers-color-scheme: dark)").matches},o=function(e){return Object.fromEntries(Object.entries(e).map(([t,i])=>[t,i.default]))},l=function(e,t){const i=window.localStorage.getItem(e);if(i===null)return t;const a=JSON.parse(i);let r={};for(const s of Object.keys(t))a[s]!==void 0?r[s]=a[s]:r[s]=t[s];return r},c={subdivisions:{default:1,title:"Subdivisions",argument:"sd",min:0,max:10,step:1},vertexSize:{default:.15,title:"Vertex Size",argument:"vs",min:.05,max:1,step:.001},edgeThickness:{default:.05,title:"Edge Thickness",argument:"et",min:.01,max:.5,step:.01}},d=n(l("domeSettings",o(c)));d.subscribe(e=>{window.localStorage.setItem("domeSettings",JSON.stringify(e))});const u={autoRotate:{default:!0},axisOverlay:{default:!1},lightMode:{default:m()},selectedDomeSetting:{default:Object.keys(c)[0]}},g=n(l("viewerSettings",o(u)));g.subscribe(e=>{window.localStorage.setItem("viewerSettings",JSON.stringify(e))});const S=n({});export{d as a,c as b,S as d,g as v};
