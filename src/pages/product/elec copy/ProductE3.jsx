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
      <h1>E3</h1>
      <cpm.SliderWraper>
        <cpm.CpmSlider {...settings}>
          <cpm.SliderImage src={"/assets/product/E3/1.jpg"} />
          
          
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
     <table  class="table ke-zeroborder" cellpadding="1" cellspacing="1"> <tr > <td colspan="3" > Model </td> <td colspan="2" > CPD15S </td> <td colspan="2" > CPD18S </td> </tr> <tr > <td rowspan="14" > Features </td> <td colspan="2" > Power type </td> <td colspan="4" > Battery </td> </tr> <tr > <td colspan="2" > Rated load（kg） </td> <td colspan="2" > 1500 </td> <td colspan="2" > 1800 </td> </tr> <tr > <td colspan="2" > Load center distance（mm） </td> <td colspan="4" > 500 </td> </tr> <tr > <td colspan="2" > Lift height（mm） </td> <td colspan="4" > 3000 </td> </tr> <tr > <td colspan="2" > Free lift height（mm） </td> <td colspan="4" > 120 </td> </tr> <tr > <td > Fork size </td> <td > L×W×T（mm） </td> <td colspan="4" > 1070×100×40 </td> </tr> <tr > <td > Mast tilt angle </td> <td > Front/Rear </td> <td colspan="4" > 6°/10° </td> </tr> <tr > <td colspan="2" > Minimum turning radius（mm） </td> <td colspan="4" > 1930 </td> </tr> <tr > <td colspan="2" > Minimum right angle stacking aisle width（mm） </td> <td colspan="4" > 3507 </td> </tr> <tr > <td colspan="2" > Minimum right angle aisle width（mm） </td> <td colspan="4" > 2130 </td> </tr> <tr > <td colspan="2" > Minimum ground clearance（mm） </td> <td colspan="4" > 100 </td> </tr> <tr > <td colspan="2" > Height of overhead guard（mm） </td> <td colspan="4" > 2060 </td> </tr> <tr > <td colspan="2" > Height form seat to overhead guard（mm） </td> <td colspan="4" > 1020 </td> </tr> <tr > <td colspan="2" > Overhang (FR)（mm） </td> <td colspan="4" > 407 </td> </tr> <tr > <td rowspan="7" > Performance </td> <td rowspan="2" > <br /> Maximum travel speed </td> <td > Full load（km/h） </td> <td colspan="4" > 13 </td> </tr> <tr > <td > No load（km/h） </td> <td colspan="4" > 14 </td> </tr> <tr > <td rowspan="2" > <br /> Maximum lift speed </td> <td > Full load（mm/s） </td> <td > 240 </td> <td > 300 </td> <td > 240 </td> <td > 300 </td> </tr> <tr > <td > No load（mm/s） </td> <td colspan="4" > 400 </td> </tr> <tr > <td rowspan="2" > <br /> Maximum lowering speed </td> <td > Full load（mm/s） </td> <td colspan="4" > 410 </td> </tr> <tr > <td > No load（mm/s） </td> <td colspan="4" > 450 </td> </tr> <tr > <td colspan="2" > Maximum gradeability（%） </td> <td colspan="4" > 15 </td> </tr> <tr > <td rowspan="4" > Dimensions </td> <td > Overall length </td> <td > Without forks（mm） </td> <td colspan="4" > 2130 </td> </tr> <tr > <td colspan="2" > Overall width（mm） </td> <td colspan="4" > 1128 </td> </tr> <tr > <td colspan="2" > <br /> Mast height at maximum lift (with backrest)（mm） </td> <td colspan="4" > 4035 </td> </tr> <tr > <td colspan="2" > Mast lowered height（mm） </td> <td colspan="4" > 1990 </td> </tr> <tr > <td rowspan="11" > Power </td> <td rowspan="2" > Tires </td> <td > Front wheel </td> <td colspan="4" > 21×8-9-16PR </td> </tr> <tr > <td > Rear wheel </td> <td colspan="4" > 16×6-8-16PR </td> </tr> <tr > <td colspan="2" > Wheelbase（mm） </td> <td colspan="4" > 1415 </td> </tr> <tr > <td > Tread </td> <td > Front wheel/rear wheel（mm） </td> <td colspan="4" > 928/958 </td> </tr> <tr > <td > Self weight </td> <td > Without load（kg） </td> <td colspan="2" > 3000 </td> <td colspan="2" > 3150 </td> </tr> <tr > <td > Battery </td> <td > Voltage/capacity（V/Ah） </td> <td colspan="2" > 48/400 </td> <td colspan="2" > 48/500 </td> </tr> <tr > <td rowspan="2" > Motor </td> <td > Traveling（KW） </td> <td > 8 </td> <td > 8 </td> <td > 8 </td> <td > 8 </td> </tr> <tr > <td > Lifting（KW） </td> <td > 7.5 </td> <td > 10.6 </td> <td > 7.5 </td> <td > 10.6 </td> </tr> <tr > <td colspan="2" > Way of control </td> <td > BC </td> <td > AC </td> <td > BC </td> <td > AC </td> </tr> <tr > <td colspan="2" > Operating pressure（Mpa） </td> <td > 15.5 </td> <td > 15.5 </td> <td > 15.5 </td> <td > 15.5 </td> </tr> <tr > <td colspan="2" > Maximum drawbar pull（KN） </td> <td colspan="4" > 13 </td> </tr> </table>
      </>
    );
  };
  