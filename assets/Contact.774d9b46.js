import{s as a,U as o,S as d,j as n,F as i,e as r}from"./index.4e3cfc23.js";const l=a.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px;
  /* flex-direction: column; */
  margin: auto;
  border: 0.5px solid  rgba(255, 255, 255, 0.3);
  padding: 1rem;
  border-radius: 8px;
  vertical-align: bottom;
  margin-top: 1rem;
  max-width: 500px;
  width: 100%;
`,p=a.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: end;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 0.8rem;
  border-radius: 8px;
 
  width: ${({width:e})=>e};
`,c=a.label``,s=a.input`
  outline: none;
 
  width: 100%;
`,h=a.p`
  text-align: ${({lng:e})=>e==="ar"?"right":"left"};
  margin-top: 1.5em;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: ${({lng:e})=>e==="ar"?"tr":"Segoe UI"};
`,u=a.button`
display: flex;
align-items: center;
justify-content: center;
gap: .5rem;
  width: 50%;
  height: 30px;
  outline: none;
  background-color: blanchedalmond;
  border-radius: 8px;
  box-shadow: 1px 1px 5px #555;
  background-color: #32a852;
  color: white;
  font-family:"cb"
  
  
`,x=a.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`,m=a.div`
  width: 100%;
  background-color: #f79335;
  color: black;
  border-radius: 8px;
`,g=a.input`
  
  border-bottom: 1px solid ${({theme:e})=>e.soft};
  color: black;
  background-color: white;

  outline: none;
  padding: 5px;
  width: 100%;
  margin-top: 15px;
`,b=a.textarea`
  
  border-bottom: 1px solid ${({theme:e})=>e.soft};
  color: black;
  background-color: white;
  resize: vertical;
  outline: none;
  padding: 5px;
  width: 100%;
  margin-top: 15px;
`,t={Txt:h,Wraper:l,Input:s,CardWrapper:x,SectionTitle:m,InputWraper:p,LabelTxt:c,SendBtn:u,Input1:g,Inputarea:b};function f(e){return o({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M20 4H6c-1.103 0-2 .897-2 2v5h2V8l6.4 4.8a1.001 1.001 0 0 0 1.2 0L20 8v9h-8v2h8c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-7 6.75L6.666 6h12.668L13 10.75z"}},{tag:"path",attr:{d:"M2 12h7v2H2zm2 3h6v2H4zm3 3h4v2H7z"}}]})(e)}function I(){const{t:e}=d();return n(i,{children:r(t.Wraper,{children:[r(t.InputWraper,{width:"100%",children:[r(t.LabelTxt,{children:[e("email")," *"]}),n(t.Input1,{})]}),r(t.InputWraper,{width:"100%",children:[r(t.LabelTxt,{children:[e("name")," *"]}),n(t.Input1,{})]}),r(t.InputWraper,{width:"100%",children:[n(t.LabelTxt,{children:e("company")}),n(t.Input1,{})]}),r(t.InputWraper,{width:"48%",children:[r(t.LabelTxt,{children:[e("phone")," *"]}),n(t.Input1,{})]}),r(t.InputWraper,{width:"48%",children:[n(t.LabelTxt,{children:e("whatsApp")}),n(t.Input1,{})]}),r(t.InputWraper,{width:"100%",children:[n(t.LabelTxt,{children:e("msg")}),n(t.Inputarea,{rows:"4"})]}),r(t.SendBtn,{children:[n(i,{children:e("sendBtn")}),n(f,{size:"1.5rem"})]})]})})}export{I as default};
