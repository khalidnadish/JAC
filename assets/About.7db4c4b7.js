import{s as o,j as e,F as s,S as n,p as F,e as r}from"./index.4e3cfc23.js";import{C as m,a as g,b,c as f,d as h}from"./CardActionArea.f9f4cf36.js";import{B as x}from"./Box.fc78f840.js";import"./createSvgIcon.0ce0ef88.js";const D=o.div``,T=o.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  overflow: auto;
  width: 100%;
  /* height: 10%; */
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 7px;
  border-radius: 8px;
`,k=o.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`,j=o.p`
  text-align: ${({lng:t})=>t==="ar"?"right":"left"};
  margin-top: 1.5em;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: ${({lng:t})=>t==="ar"?"tr":"Segoe UI"};
`,P=o.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
  /* background-color: red; */
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
   
  }
 

`,S=o.div`
/* width: 80%; */
background-color: #f79335;
color: black;
padding: 0 1rem;
border-radius: 4px;
`,y=o.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-color: rgba(255,255,255,.3);
`,a={Txt:j,Wraper:D,ImageWraper:T,Image:k,CardWrapper:P,SectionTitle:S,Hr:y};function C(){return e(s,{children:e(a.ImageWraper,{children:e(a.Image,{src:"/banner.jpg"})})})}function W(){const{t}=n(),c=F.language;return r("div",{children:[" ",e(a.Txt,{lng:c,children:t("about")})]})}const w={id:1,aboutPic:"/assets/product/D1/1.jpg",name:"(1-1.8T Forklift Truck, H Series)"},v={id:2,aboutPic:"/assets/product/D2/1.jpg",name:"(2-2.5T Forklift Truck, H Series)"},H={id:3,aboutPic:"/assets/product/D3/1.jpg",name:"(2-2.5T Forklift Truck, J Series)"},I={id:4,aboutPic:"/assets/product/D4/1.jpg",name:"(3-3.5T Forklift Truck, H Series)"},J={id:5,aboutPic:"/assets/product/D5/1.jpg",name:"(3-3.5T Forklift Truck, J Series)"},A={id:6,aboutPic:"/assets/product/D6/1.jpg",name:"(4-4.5T Forklift Truck, H Series)"},B={id:7,aboutPic:"/assets/product/D7/1.jpg",name:"(5-7T Forklift Truck, H Series)"},M={id:8,aboutPic:"/assets/product/D8/1.jpg",name:"(5-12T Internal Combustion Counterweight Forklift Truck, J Series)"},U={id:9,aboutPic:"/assets/product/D9/1.jpg",name:"(8-10T Forklift Truck, H Series)"},$={id:10,aboutPic:"/assets/product/D10/1.jpg",name:"(16T Forklift Truck)"},G={id:1,aboutPic:"/assets/product/E1/1.jpg",name:"(1-1.8T Four Wheel Forklift, H Series)"},L={id:2,aboutPic:"/assets/product/E2/1.jpg",name:"(1-1.8T Four Wheel Forklift, J Series)"},V={id:3,aboutPic:"/assets/product/E3/1.jpg",name:"(1-1.8T Four Wheel Forklift, S Series)"},q={id:4,aboutPic:"/assets/product/E4/1.jpg",name:"(1.6-2T 3-Wheel Counterbalance Battery Forklift)"},z={id:5,aboutPic:"/assets/product/E5/1.jpg",name:"(2-2.5T Four Wheel Forklift, J Series)"},K={id:6,aboutPic:"/assets/product/E6/1.jpg",name:"(2-2.5T Four Wheel Forklift,S Series)"},N={id:7,aboutPic:"/assets/product/E7/1.jpg",name:"(2-3T Four Wheel Forklift, JE Series)"},O={id:8,aboutPic:"/assets/product/E8/1.jpg",name:"(3-3.5T Four Wheel Forklift, J Series)"},Q={id:9,aboutPic:"/assets/product/E9/1.jpg",name:"(3-5T Four Wheel Forklift, HE Series)"},R={id:10,aboutPic:"/assets/product/E10/1.jpg",name:"(4-6T Four Wheel Forklift, S Series)"},i={D1:w,D2:v,D3:H,D4:I,D5:J,D6:A,D7:B,D8:M,D9:U,D10:$,E1:G,E2:L,E3:V,E4:q,E5:z,E6:K,E7:N,E8:O,E9:Q,E10:R};function X(){const{t}=n();return e(s,{children:r(a.CardWrapper,{children:[e(p,{image:i.D1.aboutPic,subtitle:i.D1.name,description:t("deselF")}),e(p,{image:i.D2.aboutPic,title:t("D2.title"),subtitle:i.D2.name,description:t("deselF")}),e(p,{image:i.D3.aboutPic,title:t("D3.title"),subtitle:i.D3.name,description:t("deselF")}),e(u,{image:i.E1.aboutPic,title:t("E1.title"),subtitle:i.E1.name,description:t("electF"),borderColor:"red"}),e(u,{image:i.E2.aboutPic,title:t("E2.title"),subtitle:i.E2.name,description:t("electF")}),e(u,{image:i.E3.aboutPic,title:t("E3.title"),subtitle:i.E3.name,description:t("electF")})]})})}const u=({image:t,title:c,subtitle:d,description:l,borderColor:E})=>(n(),e(s,{children:e(m,{sx:{maxWidth:{xs:"85%",md:"25%"},minWidth:{xs:"85%",md:"25%"}},children:r(g,{children:[e(b,{component:"img",height:"140",image:t,alt:"green iguana",sx:{padding:"1em 1em 0 1em",objectFit:"contain"}}),e(f,{sx:{p:0},children:r(x,{sx:{backgroundColor:"rgba(25,25,25,.4)",width:"100%",height:"50px",display:"flex",alignItems:"center",justifyContent:"space-evenly",color:"#fff",gap:"15px",padding:".5rem"},children:[e(h,{variant:"filled",color:"error",label:l,sx:{fontFamily:"tb"}}),d]})})]})})})),p=({image:t,title:c,subtitle:d,description:l,borderColor:E})=>(n(),e(s,{children:e(m,{sx:{maxWidth:{xs:"85%",md:"25%"},minWidth:{xs:"85%",md:"25%"}},children:r(g,{children:[e(b,{component:"img",height:"140",image:t,alt:"green iguana",sx:{padding:"1em 1em 0 1em",objectFit:"contain"}}),e(f,{sx:{p:0},children:r(x,{sx:{backgroundColor:"rgba(25,25,25,.7)",width:"100%",height:"50px",display:"flex",alignItems:"center",justifyContent:"space-evenly",color:"#fff",gap:"15px",padding:".5rem"},children:[e(h,{variant:"filled",color:"primary",label:l,sx:{fontFamily:"tb"}}),d]})})]})})}));function te({language:t}){return e(s,{children:r(a.Wraper,{children:[e(C,{}),e(W,{}),e(a.Hr,{}),e(X,{})]})})}export{te as default};
