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
import i18n from "../../i18n";

// const pages = menuItem.map((el) => el.name);

// console.log(langx);


// console.log(pages);

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

  return (
    <AppBar position="sticky" color="warning" sx={{zIndex:100}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* ---------------------Moobilmenu Box Menu ---------------------- */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", sm: "none" } }}>
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
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem
                  component={Link}
                  to={page.link}
                  key={page.id}
                  onClick={handleCloseNavMenu}
                 
                >
                  <Typography textAlign="left" sx={{ fontFamily:"cb" }}>{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          {/* ---------------------logo Box ---------------------- */}
          <LOGO />
          {/* --------------------Desk top -menu Box Menu ---------------------- */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "flex" },
              justifyContent: "center",
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
          </Box>

          {/* ---------------------Language Box ---------------------- */}
          <Language
            language={language}
            setLanguage={setLanguage}
            setLangDirection={setLangDirection}
           
          
          />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default MainMenu;
/* ------------------------------------------------------ */
const LOGO = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          // backgroundColor: "darkblue",
          width: { xs: "100%", sm: "15%" },
          my: 2,
        }}
      >
        <img src={"/logo.png"} width={"100"} loading={"lazy"} />
      </Box>
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
          width: "15%",
          
          
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
          width: "fit-content",
          border: ".5px solid rgba(255,255,255,0.4)",
          padding: "3px",
          borderRadius: "4px",
        }}
       
      >




        <img src={`/${language}.svg`} width={"30"} loading={"lazy"} />
        </Box>
      </Box>
    </>
  );
};
