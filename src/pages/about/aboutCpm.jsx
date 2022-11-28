import styled from "styled-components";

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
  width: 100%;
  /* background-color: red; */
  @media (max-width: 500px) {
    flex-direction: column;
    justify-content: center;
   
  }
 

`;
/* ---------------------------------------------- */
const SectionTitle= styled.div`
/* width: 80%; */
background-color: #f79335;
color: black;
padding: 0 1rem;
border-radius: 4px;
`;

const Hr = styled.hr`
  margin-top: 1rem;
  margin-bottom: 1rem;
  border-color: rgba(255,255,255,.3);
`;
export default { Txt, Wraper, ImageWraper, Image, CardWrapper,SectionTitle,Hr };
