import styled from "styled-components";
import Slider from "react-slick";

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

/* ---------------------------------------------- */
const SectionTitle = styled.div`
  width: 100%;
  background-color: #f79335;
  color: black;
  border-radius: 8px;
`;

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
  TableWraper

};
