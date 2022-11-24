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
      <h1>D4</h1>
      <cpm.SliderWraper>
        <cpm.CpmSlider {...settings}>
          <cpm.SliderImage src={"/assets/product/D4/1.jpg"} />
          <cpm.SliderImage src={"/assets/product/D4/2.jpg"} />
          <cpm.SliderImage src={"/assets/product/D4/3.jpg"} />
          <cpm.SliderImage src={"/assets/product/D4/4.jpg"} />
          <cpm.SliderImage src={"/assets/product/D4/5.jpg"} />
          <cpm.SliderImage src={"/assets/product/D4/6.jpg"} />
          <cpm.SliderImage src={"/assets/product/D4/7.jpg"} />
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
     <table cellpadding="1" cellspacing="1"> <tr > <td colspan="3"    nowrap=""> Model </td> <td    nowrap=""> CPCD30H </td> <td    nowrap=""> CPCD35H </td> </tr> <tr > <td rowspan="14"  > Features </td> <td colspan="2"    nowrap=""> Power type </td> <td colspan="2"    nowrap=""> Diesel </td> </tr> <tr > <td colspan="2"    nowrap=""> Rated load（kg） </td> <td    nowrap=""> 3000 </td> <td    nowrap=""> 3500 </td> </tr> <tr > <td colspan="2"    nowrap=""> Load center distance（mm） </td> <td colspan="2"    nowrap=""> 500 </td> </tr> <tr > <td colspan="2"    nowrap=""> Lift height（mm） </td> <td colspan="2"    nowrap=""> 3000 </td> </tr> <tr > <td colspan="2"    nowrap=""> Free lift height（mm） </td> <td colspan="2"    nowrap=""> 155 </td> </tr> <tr > <td    nowrap=""> Fork size </td> <td    nowrap=""> L×W×T（mm） </td> <td    nowrap=""> 1070×125×45 </td> <td    nowrap=""> 1070×125×50 </td> </tr> <tr > <td    nowrap=""> Mast tilt angle </td> <td    nowrap=""> Front/Rear </td> <td colspan="2"    nowrap=""> 8°/10° </td> </tr> <tr > <td colspan="2"    nowrap=""> Minimum turning radius（mm） </td> <td    nowrap=""> 2550 </td> <td    nowrap=""> 2570 </td> </tr> <tr > <td colspan="2"    nowrap=""> Minimum right angle stacking aisle width（mm） </td> <td    nowrap=""> 4025 </td> <td    nowrap=""> 3570 </td> </tr> <tr > <td colspan="2"    nowrap=""> Minimum right angle aisle width（mm） </td> <td    nowrap=""> 2750 </td> <td    nowrap=""> 2770 </td> </tr> <tr > <td rowspan="2"  > Minimum ground clearance </td> <td    nowrap=""> Frame center(no load)（mm） </td> <td colspan="2"    nowrap=""> 140 </td> </tr> <tr > <td    nowrap=""> Mast Bottom（no load）（mm） </td> <td colspan="2"    nowrap=""> 130 </td> </tr> <tr > <td colspan="2"    nowrap=""> Height of overhead guard（mm） </td> <td colspan="2"    nowrap=""> 2090 </td> </tr> <tr > <td colspan="2"    nowrap=""> Overhang (FR)（mm） </td> <td    nowrap=""> 475 </td> <td    nowrap=""> 485 </td> </tr> <tr > <td rowspan="6"  > Performance </td> <td rowspan="2"  > <br /> Maximum travel speed </td> <td    nowrap=""> Full load（km/h） </td> <td    nowrap=""> 19 </td> <td    nowrap=""> 19 </td> </tr> <tr > <td    nowrap=""> No load（km/h） </td> <td    nowrap=""> 19 </td> <td    nowrap=""> 20 </td> </tr> <tr > <td rowspan="2"  > <br /> Maximum lift speed </td> <td    nowrap=""> Full load（mm/s） </td> <td    nowrap=""> 560 </td> <td    nowrap=""> 430 </td> </tr> <tr > <td    nowrap=""> No load（mm/s） </td> <td    nowrap=""> 570 </td> <td    nowrap=""> 450 </td> </tr> <tr > <td    nowrap=""> Maximum drawbar pull </td> <td    nowrap=""> Full load（KN） </td> <td    nowrap=""> 20 </td> <td    nowrap=""> 28 </td> </tr> <tr > <td colspan="2"    nowrap=""> Maximum gradeability（%） </td> <td colspan="2"    nowrap=""> 15 </td> </tr> <tr > <td rowspan="4"  > Dimensions </td> <td    nowrap=""> Overall length </td> <td    nowrap=""> Without forks（mm） </td> <td    nowrap=""> 2765 </td> <td    nowrap=""> 2810 </td> </tr> <tr > <td colspan="2"    nowrap=""> Overall width（mm） </td> <td colspan="2"    nowrap=""> 1230 </td> </tr> <tr > <td colspan="2"    nowrap=""> Mast height at maximum lift (with backrest)（mm） </td> <td    nowrap=""> 4260 </td> <td    nowrap=""> 4260 </td> </tr> <tr > <td colspan="2"    nowrap=""> Mast lowered height（mm） </td> <td    nowrap=""> 2075 </td> <td    nowrap=""> 2075 </td> </tr> <tr > <td rowspan="5"  > Chassis </td> <td rowspan="2"   nowrap=""> Tires </td> <td    nowrap=""> Front wheel </td> <td colspan="2"    nowrap=""> 28×9-15-14PR </td> </tr> <tr > <td    nowrap=""> Rear wheel </td> <td colspan="2"    nowrap=""> 6.50-10-10PR </td> </tr> <tr > <td colspan="2"    nowrap=""> Wheelbase（mm） </td> <td colspan="2"    nowrap=""> 1760 </td> </tr> <tr > <td    nowrap=""> Tread </td> <td    nowrap=""> Front wheel/rear wheel（mm） </td> <td colspan="2"    nowrap=""> 1000/970 </td> </tr> <tr > <td    nowrap=""> Self weight </td> <td    nowrap=""> Without load（Kg） </td> <td    nowrap=""> 4140 </td> <td    nowrap=""> 4600 </td> </tr> <tr > <td rowspan="10"   nowrap=""> Drive </td> <td    nowrap=""> Battery </td> <td    nowrap=""> Voltage/capacity（V/Ah） </td> <td colspan="2"    nowrap=""> 12/80 </td> </tr> <tr > <td rowspan="6"   nowrap=""> Engine </td> <td    nowrap=""> Model </td> <td colspan="2"   > 4D27G31<br /> Xinchang </td> </tr> <tr > <td    nowrap=""> Rated output（kw/r.p.m） </td> <td colspan="2"    nowrap=""> 36.8/2500 </td> </tr> <tr > <td    nowrap=""> Rated torque（Nm/r.p.m） </td> <td colspan="2"    nowrap=""> 156/1700-1900 </td> </tr> <tr > <td    nowrap=""> Bore x stroke（mm） </td> <td colspan="2"    nowrap=""> 90×105 </td> </tr> <tr > <td    nowrap=""> Number of cylinders </td> <td colspan="2"    nowrap=""> 4 </td> </tr> <tr > <td    nowrap=""> Displacement（L） </td> <td colspan="2"    nowrap=""> 2.67 </td> </tr> <tr > <td colspan="2"    nowrap=""> Fuel tank capacity（L） </td> <td colspan="2"    nowrap=""> 55 </td> </tr> <tr > <td colspan="2"    nowrap=""> Transmissions (FWD/RWD) </td> <td colspan="2"   > 1/1 manual shift </td> </tr> <tr > <td colspan="2"    nowrap=""> Operating pressure（Mpa） </td> <td colspan="2"    nowrap=""> 18.5 </td> </tr> <tr > <td rowspan="6"  > Supplement </td> <td colspan="2"    nowrap=""> Tire type (FR/RR) </td> <td colspan="2"    nowrap=""> Pneumatic </td> </tr> <tr > <td colspan="2"    nowrap=""> Number of wheels (FR/RR)（pcs） </td> <td colspan="2"    nowrap=""> 2/2 </td> </tr> <tr > <td colspan="2"    nowrap=""> Lowering speed (full load)（mm/s） </td> <td    nowrap=""> 460 </td> <td    nowrap=""> 330 </td> </tr> <tr > <td colspan="2"    nowrap=""> Lowering speed (no load)（mm/s） </td> <td    nowrap=""> 430 </td> <td    nowrap=""> 330 </td> </tr> <tr > <td colspan="2"    nowrap=""> Axle load distribution (full load) (FR/RR)（kg） </td> <td   nowrap=""> 6426/714 </td> <td    nowrap=""> 7260/840 </td> </tr> <tr > <td colspan="2"    nowrap=""> Axle load distribution (no load) (FR/RR)（kg） </td> <td   nowrap=""> 1656/2484 </td> <td    nowrap=""> 1720/2880 </td> </tr> </table>
      </>
    );
  };
  