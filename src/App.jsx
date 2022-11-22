import { useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MainMenu from './component/menu/MainMenu';
import About from "./pages/About"
import Contact from "./pages/Contact"
import Product from "./pages/Product"
import SparePart from "./pages/SparePart"
import PageNotFound from "./pages/404/PageNotFound";



const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100vw;
  min-width: 300px;
  width: 100%;
  max-height: 100vh;
  background-color: ${({ theme }) => theme.bgLighter};
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  background-color: ${({ theme }) => theme.bgLighter};

  @media (max-width: 500px) {
    padding: 10px 20px;
    flex-direction: column;
    /* align-items: center; */
    justify-content: center;
  }
`;


function App() {
  

  const [darkMode, setDarkMode] = useState(true);
  const [open, setOpen] = useState(false);

  return (
    <>
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Container>
        <BrowserRouter>
          <MainMenu />
          <BodyWrapper>
          <Suspense fallback={<h1>..loading</h1>}>
            <Routes>
              <Route path="/">
                <Route index element={<About />} />
                <Route path="/about" element={<About />} />
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

export default App
