import{s as r,S as a,e as n,j as e}from"./index.4e3cfc23.js";const i=r.div`
padding: 1rem;
margin-top: 50px;
/* height: 300px; */
width: 100%;
background-color: #a8a8a84c;;
border-top: 1px solid;
border-width: 2px;
border-color: rgba(255,255,255,.3);
box-shadow: 1px 1px 5px #555;
`,s=r.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100px;
/* background-image:url("./whitelogo.png"); */
`,d=r.img`

width: 100px;
height: auto;

`,p=r.p`
padding: 2rem;
font-size:1.1rem
`,t={Wraper:i,Txt:p,ImageWrpaer:s,Image:d};function g(){const{t:o}=a();return n(t.Wraper,{children:[e(t.Txt,{children:o("footerData")}),e(t.ImageWrpaer,{children:e(t.Image,{src:"whitelogo.png"})}),e(t.Txt,{children:o("contactInfo")})]})}export{g as default};
