import styled from "styled-components";
const Wraper= styled.div`
padding: 1rem;
margin-top: 50px;
/* height: 300px; */
width: 100%;
background-color: #a8a8a84c;;
border-top: 1px solid;
border-width: 2px;
border-color: rgba(255,255,255,.3);
box-shadow: 1px 1px 5px #555;
`;
const ImageWrpaer = styled.div`
display: flex;
align-items: center;
justify-content: center;
width: 100%;
height: 100px;
/* background-image:url("./whitelogo.png"); */
`;
const Image = styled.img`

width: 100px;
height: auto;

`;

const Txt = styled.p`
padding: 2rem;
font-size:1.1rem
`;
export  default {Wraper,Txt,ImageWrpaer,Image}
