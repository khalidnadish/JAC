import React, { useState } from "react";
import { Link } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import menuItem from "./enMenu.json";
import armenuItem from "./arMenu.json";
import styled from "styled-components";
import i18n from "../../i18n";
const LogoWraper = styled.div`
max-width: 300px;
width:100px;
height: 70px;
position: relative;;
background-image: url("/Wb2.png");
background-repeat: no-repeat;
background-size: cover;
/* border:1px solid; */
border-radius: 8px;
/* margin: 0 10px 0 30px; */
/* padding: 1rem; */
`;


const LogoTxtA = styled.p`

position: absolute;
bottom:5px;
left:100px;

 
font-size:.9rem;
font-family: "tb";
@media (max-width: 500px) {
  font-size:.7rem;
  }

`;
const LogoTxtE = styled.p`
position: absolute;
bottom:17px;
left:110px;
 
font-size:.9rem;
font-family: "tb";
@media (max-width: 500px) {
  font-size:.7rem;
  }


`;


function MainMenu({ setLangDirection,language, setLanguage }) {
  let pages = menuItem;
  
  if (language === "ar") {
     pages = armenuItem;
  } else {
     pages = menuItem;
  }
  console.log(language);
  const [anchorElNav, setAnchorElNav] = useState(null);
 
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

const lang=()=>{
  setLanguage(pre=>pre === "ar" ? "en" : "ar");
  if (language === "ar") {
    i18n.changeLanguage("ar");
    setLangDirection("rtl");
  } else {
    i18n.changeLanguage("en");
    setLangDirection("ltr");
  }
  handleCloseNavMenu()
}
  
  return (
    <AppBar position="sticky" color="warning" sx={{zIndex:100 }}>
      <Container maxWidth="xl" sx={{display:"flex",justifyContent:"space-between",}}>
        <Toolbar disableGutters >
          {/* ---------------------Moobilmenu Box Menu ---------------------- */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" }}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                padding: 0,
                margin: 0,
                
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={page.link}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                  sx={{display:"flex",justifyContent:"end"}}
                 
                >
                  <Typography textAlign="left" sx={{ fontFamily:"cb" }}>{page.name}</Typography>
                </MenuItem>
              ))}
              <MenuItem  sx={{display:"flex",justifyContent:"center"}}  onClick={lang}>
              
              <img src={`/${language}.svg`} width={"25"} loading={"lazy"} />
              </MenuItem>
               
            </Menu>
          </Box>


          
          {/* ---------------------logo Box ---------------------- */}
          
          {/* --------------------Desk top -menu Box Menu ---------------------- */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "space-evenly",
              alignItems: "center",
              gap: "1rem",
              direction:language==="ar"? "rtl":"ltr"
            }}
          >
            {pages.map((page) => (
              // <Link to={page.link} underline={"none"}>
              <Button
                component={Link}
                to={page.link}
                key={page.id}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" ,fontFamily:"cb"}}
              >
                {page.name}
              </Button>




              // </Link>
            ))}
            <Button  sx={{display:"flex",justifyContent:"center"}}  onClick={lang}>
              
              <img src={`/${language}.svg`} width={"25"} loading={"lazy"} />
              </Button>
              
          </Box>

          {/* ---------------------Language Box ---------------------- */}
          {/* <Language
            language={language}
            setLanguage={setLanguage}
            setLangDirection={setLangDirection}
           
          
          /> */}
        </Toolbar>
        <LOGO />
      </Container>
    </AppBar>
  );
}
export default MainMenu;
/* ------------------------------------------------------ */
const LOGO = () => {
  return (
    <>

<LogoWraper>


  
</LogoWraper>
<LogoTxtA>موسسة سعيد الخريمي التجارية</LogoTxtA> 
<LogoTxtE>   Saeed Alkhuraimi Trading Est </LogoTxtE>

      
    </>
  );
};
/* ------------------------------------------------------ */
const Language = ({ language, setLanguage, setLangDirection }) => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexGrow: 1,
          width: "30px",
        }}
        onClick={() => {
          setLanguage(pre=>pre === "ar" ? "en" : "ar");

          if (language === "ar") {
            i18n.changeLanguage("ar");
            setLangDirection("rtl");
          } else {
            i18n.changeLanguage("en");
            setLangDirection("ltr");
          }
        }}
      >

<Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
          border: ".5px solid rgba(255,255,255,0.4)",
          padding: "2px",
          borderRadius: "4px",
        }}
       
      >
        <img src={`/${language}.svg`} width={"25"} loading={"lazy"} />
        </Box>
      </Box>
    </>
  );
};


