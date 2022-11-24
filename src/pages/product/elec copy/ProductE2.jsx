import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cpm from "../productCpm"

import { useTranslation } from "react-i18next";

function ProductId() {
    const { t } = useTranslation();
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode:true,
        autoplay: true,
        centerPadding:"0px",
        // lazyLoad: true,
        pauseOnHover: true,
        swipeToSlide: true,
        // fade: true
        
      };
  return (
    <>
    <cpm.ProdctPageWraper>
      <h1>E2</h1>
      <cpm.SliderWraper>
        <cpm.CpmSlider {...settings}>
          <cpm.SliderImage src={"/assets/product/E2/1.jpg"} />
          <cpm.SliderImage src={"/assets/product/E2/2.jpg"} />
          <cpm.SliderImage src={"/assets/product/E2/3.jpg"} />
          
        </cpm.CpmSlider>
    {/* ---------------------------- */}
      </cpm.SliderWraper>
      <cpm.SectionTitle>{t("detailBtn")}</cpm.SectionTitle>
      <cpm.TableWraper>
      <TableVeiw />
      </cpm.TableWraper>
      </cpm.ProdctPageWraper>
    </>
  );
}

export default ProductId




const TableVeiw = () => {
    return (
      <>
   <table  class="table ke-zeroborder" cellpadding="1" cellspacing="1"> <tr > <td colspan="3" > Model </td> <td colspan="2" > CPD13J </td> <td colspan="2" > CPD16J </td> <td colspan="2" > CPD18J </td> </tr> <tr > <td rowspan="14" > Features </td> <td colspan="2" > Power type </td> <td colspan="6" > Battery </td> </tr> <tr > <td colspan="2" > Rated load（kg） </td> <td colspan="2" > 1300 </td> <td colspan="2" > 1600 </td> <td colspan="2" > 1800 </td> </tr> <tr > <td colspan="2" > Load center distance（mm） </td> <td colspan="6" > 500 </td> </tr> <tr > <td colspan="2" > Lift height（mm） </td> <td colspan="6" > 3000 </td> </tr> <tr > <td colspan="2" > Free lift height（mm） </td> <td colspan="6" > 120 </td> </tr> <tr > <td > Fork size </td> <td > L×W×T（mm） </td> <td colspan="6" > 1070×122×40 </td> </tr> <tr > <td > Mast tilt angle </td> <td > Front/Rear </td> <td colspan="6" > 6°/10° </td> </tr> <tr > <td colspan="2" > Minimum turning radius（mm） </td> <td colspan="2" > 1990 </td> <td colspan="2" > 2030 </td> <td colspan="2" > 2030 </td> </tr> <tr > <td colspan="2" > Minimum right angle stacking aisle width（mm） </td> <td colspan="2" > 3397 </td> <td colspan="2" > 3437 </td> <td colspan="2" > 3437 </td> </tr> <tr > <td colspan="2" > Minimum right angle aisle width（mm） </td> <td colspan="2" > 2190 </td> <td colspan="2" > 2230 </td> <td colspan="2" > 2230 </td> </tr> <tr > <td colspan="2" > Minimum ground clearance（mm） </td> <td colspan="6" > 93 </td> </tr> <tr > <td colspan="2" > Height of overhead guard（mm） </td> <td colspan="6" > 2132 </td> </tr> <tr > <td colspan="2" > Height form seat to overhead guard（mm） </td> <td colspan="6" > 1020 </td> </tr> <tr > <td colspan="2" > Overhang (FR)（mm） </td> <td colspan="6" > 407 </td> </tr> <tr > <td rowspan="7" > Performance </td> <td rowspan="2" > <br /> Maximum travel speed </td> <td > Full load（km/h） </td> <td colspan="6" > 12 </td> </tr> <tr > <td > No load（km/h） </td> <td colspan="6" > 13 </td> </tr> <tr > <td rowspan="2" > <br /> Maximum lift speed </td> <td > Full load（mm/s） </td> <td > 260 </td> <td > 300 </td> <td > 240 </td> <td > 300 </td> <td > 240 </td> <td > 280 </td> </tr> <tr > <td > No load（mm/s） </td> <td colspan="6" > 400 </td> </tr> <tr > <td rowspan="2" > <br /> Maximum lowering speed </td> <td > Full load（mm/s） </td> <td colspan="6" > 460 </td> </tr> <tr > <td > No load（mm/s） </td> <td colspan="6" > 430 </td> </tr> <tr > <td colspan="2" > Maximum gradeability（%） </td> <td > 15 </td> <td > 15 </td> <td > 15 </td> <td > 15 </td> <td > 15 </td> <td > 15 </td> </tr> <tr > <td rowspan="4" > Dimensions </td> <td > Overall length </td> <td > Without forks（mm） </td> <td colspan="2" > 2158 </td> <td colspan="2" > 2220 </td> <td colspan="2" > 2220 </td> </tr> <tr > <td colspan="2" > Overall width（mm） </td> <td colspan="2" > 1072 </td> <td colspan="2" > 1072 </td> <td colspan="2" > 1072 </td> </tr> <tr > <td colspan="2" > <br /> Mast height at maximum lift (with backrest)（mm） </td> <td colspan="2" > 3930 </td> <td colspan="2" > 3930 </td> <td colspan="2" > 3930 </td> </tr> <tr > <td colspan="2" > Mast lowered height（mm） </td> <td colspan="6" > 1990 </td> </tr> <tr > <td rowspan="11" > Power </td> <td rowspan="2" > Tires </td> <td > Front wheel </td> <td colspan="6" > 6.00-9-10PR </td> </tr> <tr > <td > Rear wheel </td> <td colspan="6" > 5.00-8-10PR </td> </tr> <tr > <td colspan="2" > Wheelbase（mm） </td> <td colspan="6" > 1370 </td> </tr> <tr > <td > Tread </td> <td > Front wheel/rear wheel（mm） </td> <td colspan="6" > 894/920 </td> </tr> <tr > <td > Self weight </td> <td > Without load（kg） </td> <td colspan="2" > 2840 </td> <td colspan="2" > 3000 </td> <td colspan="2" > 3120 </td> </tr> <tr > <td > Battery </td> <td > Voltage/capacity（V/Ah） </td> <td colspan="6" > 48/400 </td> </tr> <tr > <td rowspan="2" > Motor </td> <td > Traveling（KW） </td> <td colspan="6" > 8 </td> </tr> <tr > <td > Lifting（KW） </td> <td   nowrap=""> 7.5 </td> <td   nowrap=""> 10 </td> <td   nowrap=""> 7.5 </td> <td   nowrap=""> 10 </td> <td   nowrap=""> 7.5 </td> <td   nowrap=""> 10 </td> </tr> <tr > <td colspan="2" > Way of control </td> <td > BC </td> <td > AC </td> <td > BC </td> <td > AC </td> <td > BC </td> <td > AC </td> </tr> <tr > <td colspan="2" > Operating pressure（Mpa） </td> <td colspan="6" > 15.5 </td> </tr> <tr > <td colspan="2" > Maximum drawbar pull（KN） </td> <td colspan="6" > 13 </td> </tr> </table>
      </>
    );
  };
  