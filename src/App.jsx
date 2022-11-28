import { useState, lazy, Suspense, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "./component/loader/Loader";

import CssBaseline from "@mui/material/CssBaseline";
import { FiPhoneCall } from "react-icons/fi";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";


const MainMenu = lazy(() => import("./component/menu/MainMenu"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const ProductId = lazy(() => import("./pages/product/ProductId"));
const SparePart = lazy(() => import("./pages/SparePart"));
const PageNotFound = lazy(() => import("./pages/404/PageNotFound"));
const Product = lazy(() => import("./pages/product/Product"));
const Footer = lazy(() => import("./component/footer/Footer"));

import cpm from "./cpmApp";

function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [langDirection, setLangDirection] = useState("rtl");
  const [language, setLanguage] = useState("en");
  const [load, setLoad] = useState(false);

  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 200);
  }, []);

  useEffect(() => {
    document.body.dir = langDirection;
    // i18n.changeLanguage("ar");
  }, [language]);
  return (
    <>
      {load ? (
        <LoadingApp load={load} />
      ) : (
        <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
            <CssBaseline />
            <CallMe />
            <cpm.Container>
            {/* <Suspense fallback={<Loader />}> */}
              <BrowserRouter>
                <cpm.BodyWrapper>
                  <MainMenu
                    setLangDirection={setLangDirection}
                    language={language}
                    setLanguage={setLanguage}
                  />
                  <Suspense fallback={<Loader />}>
                    <Routes>
                      <Route path="/">
                        <Route index element={<About />} />
                        <Route path="about" element={<About />} />
                        <Route path="contact" element={<Contact />} />
                        <Route path="product" element={<Product />} />
                        <Route
                          path="product/:id/:filesNO"
                          element={<ProductId />}
                        />
                        <Route path="parePart" element={<SparePart />} />
                        <Route path="*" element={<PageNotFound />} />
                      </Route>
                    </Routes>
                  </Suspense>
                  <Footer />
                </cpm.BodyWrapper>
              </BrowserRouter>
        {/* </Suspense> */}
            </cpm.Container>
          </ThemeProvider>
      )}
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
const CallMe = () => {
  return (
    <>
      <cpm.CallBtn>
        <FiPhoneCall size={"1.3rem"} color="white" />
      </cpm.CallBtn>
    </>
  );
};

const LoadingApp = ({ load }) => {
  return (
    <>
      <div className="mainloader">
        <cpm.LoaderWraper>
          <ClimbingBoxLoader size={25} color={"#F37A24"} loading={load} />
        </cpm.LoaderWraper>
        <cpm.LogoTxtA>موسسة سعيد الخريمي التجارية</cpm.LogoTxtA>
        <cpm.LogoTxtE> Saeed Alkhuraimi Trading Est </cpm.LogoTxtE>
      </div>
    </>
  );
};
