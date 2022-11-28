import { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route ,Outlet} from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainMenu from "./component/menu/MainMenu";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import ProductId from "./pages/product/ProductId";
import SparePart from "./pages/SparePart";
import PageNotFound from "./pages/404/PageNotFound";
import cookie from "js-cookie";
import Product from "./pages/product/Product";
import Loader from "./component/loader/Loader";
import Footer from "./component/footer/Footer";
import CssBaseline from '@mui/material/CssBaseline';
 
import { FiPhoneCall } from 'react-icons/fi';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  position: relative;
  
  min-width: 300px;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  /* margin:auto; */
  background-color: ${({ theme }) => theme.bgLighter};
  
 z-index: 0;
`;

const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({ theme }) => theme.text};
  position: absolute;
 
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px 10px;
  z-index:1;
  @media (max-width: 500px) {
    /* padding: 10px 20px; */
    flex-direction: column;
    justify-content: center;
    background-color:"green";
    /* top:80px; */
  }
`;







const CallBtn = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content:center;
  align-items: center;
  position: fixed;
  bottom:15px;
  left:15px;
  max-width: 60px;
  max-height: 60px;
  width: 100%;
  height: 100%;
  border:2px solid #fff;
  
  border-radius: 50px!important;
  box-shadow: 1px 1px 5px #555;
  background-color: #32a852;
  cursor: pointer !important;
 z-index: 40;
`;


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [langDirection, setLangDirection] = useState("rtl");
  const [language, setLanguage] = useState("en");
  useEffect(() => {
    document.body.dir = langDirection;
    // i18n.changeLanguage("ar");
  }, [language]);
  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <CssBaseline />
        <CallMe/>
        <Container>
          {/* <Loader/> */}
          <BrowserRouter>
            <BodyWrapper>
            <MainMenu  setLangDirection={setLangDirection} language={language} setLanguage={setLanguage}/>
              <Suspense fallback={<Loader/>}>
                <Routes>
                  <Route path="/">
                    <Route index element={<About   />} />
                    <Route path="about" element={<About   />} />
                    <Route path="contact" element={<Contact />} />
                      <Route path="product" element={<Product />} />
                    <Route path="product/:id/:filesNO" element={<ProductId />} />
                    <Route path="parePart" element={<SparePart />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Route>
                </Routes>
              </Suspense>
            <Footer />
              
         
            </BodyWrapper>
          </BrowserRouter>
        </Container>
      </ThemeProvider>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  );
}

export default App;
const  CallMe=() => {return(<>

<CallBtn><FiPhoneCall size={"1.3rem"} color="white"/></CallBtn>

</>)}