import { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainMenu from "./component/menu/MainMenu";
import About from "./pages/about/About";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import SparePart from "./pages/SparePart";
import PageNotFound from "./pages/404/PageNotFound";
import cookie from "js-cookie";
import i18n from "./i18n";

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
                    <Route path="/about" element={<About   />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/parePart" element={<SparePart />} />
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
