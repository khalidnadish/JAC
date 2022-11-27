import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
const Container = styled.div`
margin-top: 1rem;
`;

const Wraper = styled.div``;

/* ------------------------------------------- */
const ImageWraper = styled.div`
  display: flex;
  align-items: end;
  justify-content: flex-end;
  overflow: auto;
  width: 100%;
  /* height: 10%; */
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding: 7px;
  border-radius: 8px;
`;
/* ------------------------------------------- */
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
`;
/* ------------------------------------------- */
const Txt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  margin-top: 1.5em;
  padding: 1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
`;
/* ------------------------------------------- */
const CardWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  width: 98%;
  @media (max-width: 500px) {
    flex-direction: column;
    
  }
`;

const SliderWraper = styled.div`
  margin: auto;
  width: 80%;
  padding: 0;
  /* border-radius: 28px; */
`;

/* ----------------___________------------------------------ */
const SectionTitle = styled.div`
display: flex;
align-items: center;
justify-content: center;
position: relative;
  width: 80%;
  /* padding:0 .5rem; */
  background-color: #474442;
  border: 1px solid #6d6b6a;
  color: #dddddd;
  border-radius: 6px;
`;
/* *************************************************** */
const ModelTxt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  /* margin-top: 1.5em; */
  padding: .5rem;
  font-size: .8rem;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
  @media (max-width: 500px) {
    font-size: .7rem;
  }
`;


/* *************************************************** */
const LTxt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  /* margin-top: 1.5em; */
  padding: .5rem;
  font-size: 1rem;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
`;

/* *************************************************** */
const RTxt = styled.p`
  text-align: ${({ lng }) => (lng === "ar" ? "right" : "left")};
  /* position:absolute;
  top:-10px;
  right:-15px; */
  padding: .2rem .5rem;
  border-radius: 4px;
  font-size: .9rem;
  background-color: #098123;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  @media (max-width: 500px) {
    font-size: .7rem;
  }
`;
/* -------------------------- */
const LinkTxt = styled(Link)`
display: flex;
padding: 0;
margin:0;


`;

const VerticalDiv= styled.div`
display: flex;
align-items: center;
justify-content: space-between;
width: 80%;
gap: 1em;
`;

/* --------------------------------------- */
const BackArrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
  
  /* position:absolute;
  left:0px; */
  padding: .4rem .5rem;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #777777;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

/* ---------------------------------------------------- */
const CpmSlider = styled(Slider)`
  /* border-radius: 18px; */
  padding: 5px;
  
  background-color: #9c9c9c;
`;






const ProdctPageWraper= styled.div`
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
gap:1rem;
width: 100%;
`;

const TableWraper= styled.div`
 
 /* max-width: 90vw !important;  */
 display: flex;
 align-items: center;
 justify-content: center;
 width: 100%;
 /* background-color:red; */
 padding: 1rem;
font-size: 1rem;
margin-top: 1rem;
overflow: auto;
@media (max-width: 500px) {
  font-size: .6rem;
  overflow: auto;
  }
`;




const SliderImage = styled.img`
border-radius:8px;
/* margin: 5px; */
max-width: 50%;
width: 80%;
height: auto;
  
`;
const SelecttionWraper = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
gap:1rem;
width: 100%;
margin-bottom: 1rem;
padding:0 10%;
`;


const BtnSelect = styled.div`
display: flex;
justify-content: space-evenly;
align-items: center;
padding:1rem;
border-radius: 4px;
background-color: #6d6c6c;
color: #e4e4e4;
width: 100%;
font-size: 1.2rem;
height: 55px;
cursor: pointer;
`;


export default {
  Txt,
  Wraper,
  ImageWraper,
  Image,
  CardWrapper,
  SectionTitle,
  SliderWraper,
  CpmSlider,
  SliderImage,
  ProdctPageWraper,
  TableWraper,
  // SectionTxt,
  ModelTxt,
  RTxt,
LTxt,
BackArrow,
LinkTxt,
Container,
SelecttionWraper,
BtnSelect,
VerticalDiv

};
