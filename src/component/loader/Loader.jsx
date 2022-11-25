import { Box, CircularProgress, Stack } from "@mui/material";
import React from "react";
import cpm from "./cpmLoader"
import { useTranslation } from "react-i18next";
function Loader() {
  const {t} =useTranslation()
  return (
    <cpm.Container >
      <CircularProgress color="warning" />
      <cpm.TXT>{t("loading")}</cpm.TXT>
    </cpm.Container>
  );
}

export default Loader;
