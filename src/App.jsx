import { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route ,Outlet} from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainMenu from "./component/menu/MainMenu";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import ProductId from "./pages/product/ProductId";
import SparePart from "./pages/SparePart";
import PageNotFound from "./pages/404/PageNotFound";
import cookie from "js-cookie";
import Product from "./pages/product/Product";
import ProductD1 from "./pages/product/ProductD1";
import ProductD2 from "./pages/product/ProductD2";
import ProductD3 from "./pages/product/ProductD3";
import ProductD4 from "./pages/product/ProductD4";
import ProductD5 from "./pages/product/ProductD5";
import ProductD6 from "./pages/product/ProductD6";
import ProductD7 from "./pages/product/ProductD7";
import ProductD8 from "./pages/product/ProductD8";
import ProductD9 from "./pages/product/ProductD9";
import ProductD10 from "./pages/product/ProductD10";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  max-width: 100vw;
  min-width: 300px;
  width: 100%;
  max-height: 100vh;
  height: 100%;
  background-color: ${({ theme }) => theme.bgLighter};
 z-index: 0;
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  color: ${({ theme }) => theme.text};
  position: absolute;
  top:80px;
  background-color: ${({ theme }) => theme.bgLighter};
  padding: 10px 20px;
  z-index:1;
  @media (max-width: 500px) {
    padding: 10px 20px;
    flex-direction: column;
    justify-content: center;
    top:80px;
  }
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
        <Container>
          <BrowserRouter>
            <MainMenu  setLangDirection={setLangDirection} language={language} setLanguage={setLanguage}/>
            <BodyWrapper>
              <Suspense fallback={<h1>..loading</h1>}>
                <Routes>
                  <Route path="/">
                    <Route index element={<About   />} />
                    <Route path="about" element={<About   />} />
                    <Route path="contact" element={<Contact />} />
                      <Route path="product" element={<Product />} />
                         
                              <Route path="product/productd1" element={<ProductD1 />} />
                              <Route path="product/productd2" element={<ProductD2 />} />
                              <Route path="product/productd3" element={<ProductD3 />} />
                              <Route path="product/productd4" element={<ProductD4 />} />
                              <Route path="product/productd5" element={<ProductD5 />} />
                              <Route path="product/productd6" element={<ProductD6 />} />
                              <Route path="product/productd7" element={<ProductD7 />} />
                              <Route path="product/productd8" element={<ProductD8 />} />
                              <Route path="product/productd9" element={<ProductD9 />} />
                              <Route path="product/productd10" element={<ProductD10 />} />
                        
                      
                     
                    <Route path="product/:id" element={<ProductId />} />
                    <Route path="parePart" element={<SparePart />} />
                    <Route path="*" element={<PageNotFound />} />
                  </Route>
                </Routes>
              </Suspense>
              
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
