import React from 'react'
import cpm from "./cpmFooter"
import { useTranslation } from "react-i18next";
function Footer() {
  const {t} =useTranslation()
  return (
    <cpm.Wraper>
      <cpm.Txt>{t("footerData")}</cpm.Txt> 
      <cpm.ImageWrpaer>

        <cpm.Image  src='whitelogo.png'/>

        
      </cpm.ImageWrpaer>
      <cpm.Txt>{t("contactInfo")}</cpm.Txt> 
      </cpm.Wraper>
  )
}

export default Footer