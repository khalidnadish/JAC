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
      <h1>E6</h1>
      <cpm.SliderWraper>
        <cpm.CpmSlider {...settings}>
          <cpm.SliderImage src={"/assets/product/E6/1.jpg"} />
          <cpm.SliderImage src={"/assets/product/E6/2.jpg"} />
          <cpm.SliderImage src={"/assets/product/E6/3.jpg"} />
          <cpm.SliderImage src={"/assets/product/E6/4.jpg"} />
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
  <table  class="table ke-zeroborder" cellpadding="1" cellspacing="1"> <tr > <td colspan="3" > Model </td> <td colspan="2" > CPD20S </td> <td colspan="2" > CPD25S </td> </tr> <tr > <td rowspan="14" > Features </td> <td colspan="2" > Power type </td> <td colspan="4" > Battery </td> </tr> <tr > <td colspan="2" > Rated load（kg） </td> <td colspan="2" > 2000 </td> <td colspan="2" > 2500 </td> </tr> <tr > <td colspan="2" > Load center distance（mm） </td> <td colspan="4" > 500 </td> </tr> <tr > <td colspan="2" > Lift height（mm） </td> <td colspan="4" > 3000 </td> </tr> <tr > <td colspan="2" > Free lift height（mm） </td> <td colspan="4" > 150 </td> </tr> <tr > <td > Fork size </td> <td > L×W×T（mm） </td> <td colspan="4" > 1070×120×40 </td> </tr> <tr > <td > Mast tilt angle </td> <td > Front/Rear </td> <td colspan="4" > 6°/10° </td> </tr> <tr > <td colspan="2" > Minimum turning radius（mm） </td> <td colspan="4" > 2060 </td> </tr> <tr > <td colspan="2" > Minimum right angle stacking aisle width（mm） </td> <td colspan="4" > 3691 </td> </tr> <tr > <td colspan="2" > Minimum right angle aisle width（mm） </td> <td colspan="4" > 2260 </td> </tr> <tr > <td colspan="2" > Minimum ground clearance（mm） </td> <td colspan="4" > 100 </td> </tr> <tr > <td colspan="2" > Height of overhead guard（mm） </td> <td colspan="4" > 2060 </td> </tr> <tr > <td colspan="2" > Height form seat to overhead guard（mm） </td> <td colspan="4" > 1020 </td> </tr> <tr > <td colspan="2" > Overhang (FR)（mm） </td> <td colspan="4" > 431 </td> </tr> <tr > <td rowspan="7" > Performance </td> <td rowspan="2" > <br /> Maximum travel speed </td> <td > Full load（km/h） </td> <td colspan="4" > 13 </td> </tr> <tr > <td > No load（km/h） </td> <td colspan="4" > 14 </td> </tr> <tr > <td rowspan="2" > <br /> Maximum lift speed </td> <td > Full load（mm/s） </td> <td colspan="4" > 280 </td> </tr> <tr > <td > No load（mm/s） </td> <td colspan="4" > 430 </td> </tr> <tr > <td rowspan="2" > <br /> Maximum lowering speed </td> <td > Full load（mm/s） </td> <td colspan="4" > 430 </td> </tr> <tr > <td > No load（mm/s） </td> <td colspan="4" > 320 </td> </tr> <tr > <td colspan="2" > Maximum gradeability（%） </td> <td colspan="4" > 15 </td> </tr> <tr > <td rowspan="4" > Dimensions </td> <td > Overall length </td> <td > Without forks（mm） </td> <td colspan="4" > 2331 </td> </tr> <tr > <td colspan="2" > Overall width（mm） </td> <td colspan="4" > 1160 </td> </tr> <tr > <td colspan="2" > <br /> Mast height at maximum lift (with backrest)（mm） </td> <td colspan="4" > 4280 </td> </tr> <tr > <td colspan="2" > Mast lowered height（mm） </td> <td colspan="4" > 1985 </td> </tr> <tr > <td rowspan="11" > Power </td> <td rowspan="2" > Tires </td> <td > Front wheel </td> <td colspan="4" > 23×9-10-18PR </td> </tr> <tr > <td > Rear wheel </td> <td colspan="4" > 18×7-8-14PR </td> </tr> <tr > <td colspan="2" > Wheelbase（mm） </td> <td colspan="4" > 1520 </td> </tr> <tr > <td > Tread </td> <td > Front wheel/rear wheel（mm） </td> <td colspan="4" > 960/960 </td> </tr> <tr > <td > Self weight </td> <td > Without load（kg） </td> <td colspan="2" > 3740 </td> <td colspan="2" > 4100 </td> </tr> <tr > <td > Battery </td> <td > Voltage/capacity（V/Ah） </td> <td colspan="2" > 48/600 </td> <td colspan="2" > 48/630 </td> </tr> <tr > <td rowspan="2" > Motor </td> <td > Traveling（KW） </td> <td > 11 </td> <td > 11 </td> <td > 11 </td> <td > 11 </td> </tr> <tr > <td > Lifting（KW） </td> <td > 8.6 </td> <td > 15 </td> <td > 8.6 </td> <td > 15 </td> </tr> <tr > <td colspan="2" > Way of control </td> <td > BC </td> <td > AC </td> <td > BC </td> <td > AC </td> </tr> <tr > <td colspan="2" > Operating pressure（Mpa） </td> <td > 15.5 </td> <td > 15.5 </td> <td > 15.5 </td> <td > 15.5 </td> </tr> <tr > <td colspan="2" > Maximum drawbar pull（KN） </td> <td colspan="4" > 13 </td> </tr> </table>
      </>
    );
  };
  