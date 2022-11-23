import React from 'react'
import { useTranslation } from "react-i18next";
function About() {
  const {t} =useTranslation()
  return (
    <div> <p>{t("aboutMeBtn")}</p></div>
  )
}

export default About