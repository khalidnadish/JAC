import React from 'react'
import cpm from "./cpmContact"
import {BiMailSend} from "react-icons/bi"

import { useTranslation } from "react-i18next";
function Contact() {
  const {t} =useTranslation()
  return (
    <>
      <cpm.Wraper>
        {/* -------------------------------------------------- */}
        <cpm.InputWraper width={"100%"}>
          <cpm.LabelTxt>{t("email")} *</cpm.LabelTxt>
          <cpm.Input />
        </cpm.InputWraper>
        {/* -------------------------------------------------- */}
        <cpm.InputWraper width={"100%"}>
          <cpm.LabelTxt>{t("name")} *</cpm.LabelTxt>
          <cpm.Input />
        </cpm.InputWraper>
        {/* -------------------------------------------------- */}
        <cpm.InputWraper width={"100%"}>
          <cpm.LabelTxt>{t("company")}</cpm.LabelTxt>
          <cpm.Input />
        </cpm.InputWraper>
        {/* -------------------------------------------------- */}

        <cpm.InputWraper width={"48%"}>
          <cpm.LabelTxt>{t("phone")} *</cpm.LabelTxt>
          <cpm.Input />
        </cpm.InputWraper>
        {/* -------------------------------------------------- */}
        <cpm.InputWraper width={"48%"}>
          <cpm.LabelTxt>{t("whatsApp")}</cpm.LabelTxt>
          <cpm.Input />
        </cpm.InputWraper>
        {/* -------------------------------------------------- */}
        <cpm.InputWraper width={"100%"}>
          <cpm.LabelTxt>{t("msg")}</cpm.LabelTxt>
          <cpm.Input />
        </cpm.InputWraper>
        <cpm.SendBtn>
          <>{t("sendBtn")}</>
          <BiMailSend size={"1.5rem"} />
        </cpm.SendBtn>
      </cpm.Wraper>
    </>
  );
}








export default Contact
