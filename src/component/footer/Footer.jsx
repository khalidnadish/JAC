import React from "react";
import cpm from "./cpmFooter";
import { useTranslation } from "react-i18next";
function Footer() {
  const { t } = useTranslation();
  return (
    <cpm.Wraper>
      <cpm.Agncy>
        <cpm.Linemsg1>الوكيل والموزع جدة / منطقة مكة المكرمة</cpm.Linemsg1>
        <cpm.Txt>{t("footerData")}</cpm.Txt>
        <cpm.ImageWrpaer>
          <cpm.Image src="whitelogo.png" />
        </cpm.ImageWrpaer>
        <cpm.Txt>{t("contactInfo")}</cpm.Txt>
      </cpm.Agncy>
      <cpm.SubAgncy>

        
        <cpm.Linemsg2>الشركاء الموزعين</cpm.Linemsg2>
        <cpm.Txt> القصيم الدليمة </cpm.Txt>
        <cpm.Txt> موسسة ابراهيم صالح الحربي للنقليات  جوال 0555150806 -- 0505150806</cpm.Txt>
        
        <hr/>
        
        <cpm.Hr />
        <cpm.Txt> الرياض </cpm.Txt>
        <cpm.Txt>  موسسة قمم القصور للمقاولات العامة 
        جوال / 0542329273 </cpm.Txt>
        
       


        
      
      </cpm.SubAgncy>
    </cpm.Wraper>
  );
}

export default Footer;
