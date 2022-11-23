import React from 'react'
import { useTranslation } from "react-i18next";
import i18n from '../../i18n';
import cpm from  "./aboutCpm"


function Typo() {
    const {t} =useTranslation()
      const crntLanguage=i18n.language
  return (
    <div> <cpm.Txt lng={crntLanguage}>{t("about")}</cpm.Txt></div>
  )
}

export default Typo