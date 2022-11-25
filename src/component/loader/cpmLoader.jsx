import styled from "styled-components";
const  Container= styled.div`
 display: flex;
 flex-direction: column;
 align-items: center;
 border: 1px solid rgba(255,255,255,.8);
 border-radius: 10px;
 padding: 0.5em 0.5em 0.5em;
 position: fixed;
 z-index: 1000;
 top: 50%;
 left: 50%;
 gap: .5em;
 background-color:rgba(150,150,150,.9);;




 

`;
const  TXT= styled.p`
color: #000000

`;



export default {Container,TXT}