import styled from "styled-components";
import Slider from "react-slick";
import { Link } from "react-router-dom";
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
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const SliderWraper = styled.div`
  margin: auto;
  width: 80%;
  padding: 0;
  border-radius: 28px;
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
  font-size: 1rem;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
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
  position:absolute;
  top:-10px;
  right:-15px;
  padding: 0.5rem .5rem;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #000;
  font-family: ${({ lng }) => (lng === "ar" ? "tr" : "Segoe UI")};
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;
/* -------------------------- */
const LinkTxt = styled(Link)`
display: flex;
padding: 0;
margin:0;


`;



/* --------------------------------------- */
const BackArrow = styled.div`
display: flex;
align-items: center;
justify-content: center;
  
  position:absolute;
  left:-20px;
  padding: .4rem .5rem;
  border-radius: 4px;
  font-size: 1rem;
  background-color: #777777;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

/* ---------------------------------------------------- */
const CpmSlider = styled(Slider)`
  border-radius: 18px;
  padding: 5px;
  background-color: #ccc;
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
 
 
font-size: 1rem;
@media (max-width: 500px) {
  font-size: .6rem;
  }
`;




const SliderImage = styled.img`
border-radius:8px;
/* margin: 5px; */
max-width: 50%;
width: 80%;
height: auto;
  
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
LinkTxt

};
