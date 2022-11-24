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
      <h1>D6</h1>
      <cpm.SliderWraper>
        <cpm.CpmSlider {...settings}>
          <cpm.SliderImage src={"/assets/product/D6/1.jpg"} />
          <cpm.SliderImage src={"/assets/product/D6/2.jpg"} />
          <cpm.SliderImage src={"/assets/product/D6/3.jpg"} />
          <cpm.SliderImage src={"/assets/product/D6/4.jpg"} />
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
   <table  class="table ke-zeroborder" cellpadding="1" cellspacing="1"> <tr > <td colspan="3"  nowrap=""> Model </td> <td  nowrap=""> CPCD40H </td> <td  nowrap=""> CPCD45H </td> </tr> <tr > <td rowspan="14" > Features </td> <td colspan="2"  nowrap=""> Power type </td> <td colspan="2"  nowrap=""> Diesel </td> </tr> <tr > <td colspan="2"  nowrap=""> Rated load（kg） </td> <td  nowrap=""> 4000 </td> <td  nowrap=""> 4500 </td> </tr> <tr > <td colspan="2"  nowrap=""> Load center distance（mm） </td> <td colspan="2"  nowrap=""> 500 </td> </tr> <tr > <td colspan="2"  nowrap=""> Lift height（mm） </td> <td colspan="2"  nowrap=""> 3000 </td> </tr> <tr > <td colspan="2"  nowrap=""> Free lift height（mm） </td> <td  nowrap=""> 135 </td> <td  nowrap=""> 150 </td> </tr> <tr > <td  nowrap=""> Fork size </td> <td  nowrap=""> L×W×T（mm） </td> <td colspan="2"  nowrap=""> 1070×150×50 </td> </tr> <tr > <td  nowrap=""> Mast tilt angle </td> <td  nowrap=""> Front/Rear </td> <td colspan="2"  nowrap=""> 6°/12° </td> </tr> <tr > <td colspan="2"  nowrap=""> Minimum turning radius（mm） </td> <td  nowrap=""> 2835 </td> <td  nowrap=""> 2750 </td> </tr> <tr > <td colspan="2"  nowrap=""> Minimum right angle stacking aisle width（mm） </td> <td  nowrap=""> 4325 </td> <td  nowrap=""> 4695 </td> </tr> <tr > <td colspan="2"  nowrap=""> Minimum right angle aisle width（mm） </td> <td  nowrap=""> 3035 </td> <td  nowrap=""> 2612 </td> </tr> <tr > <td rowspan="2" > Minimum ground clearance </td> <td  nowrap=""> Frame center(no load)（mm） </td> <td  nowrap=""> 212 </td> <td  nowrap=""> 200 </td> </tr> <tr > <td  nowrap=""> Mast Bottom（no load）（mm） </td> <td  nowrap=""> 138 </td> <td  nowrap=""> 150 </td> </tr> <tr > <td colspan="2"  nowrap=""> Height of overhead guard（mm） </td> <td  nowrap=""> 2140 </td> <td  nowrap=""> 2265 </td> </tr> <tr > <td colspan="2"  nowrap=""> Overhang (FR)（mm） </td> <td  nowrap=""> 490 </td> <td  nowrap=""> 547 </td> </tr> <tr > <td rowspan="6" > Performance </td> <td rowspan="2" > <br /> Maximum travel speed </td> <td  nowrap=""> Full load（km/h） </td> <td  nowrap=""> 19.5 </td> <td  nowrap=""> 19 </td> </tr> <tr > <td  nowrap=""> No load（km/h） </td> <td  nowrap=""> 19.6 </td> <td  nowrap=""> 21 </td> </tr> <tr > <td rowspan="2" > <br /> Maximum lift speed </td> <td  nowrap=""> Full load（mm/s） </td> <td  nowrap=""> 430 </td> <td  nowrap=""> 500 </td> </tr> <tr > <td  nowrap=""> No load（mm/s） </td> <td  nowrap=""> 490 </td> <td  nowrap=""> 530 </td> </tr> <tr > <td  nowrap=""> Maximum drawbar pull </td> <td  nowrap=""> Full load（KN） </td> <td  nowrap=""> 21.8 </td> <td  nowrap=""> 40 </td> </tr> <tr > <td colspan="2"  nowrap=""> Maximum gradeability（%） </td> <td  nowrap=""> 15 </td> <td  nowrap=""> 20 </td> </tr> <tr > <td rowspan="4" > Dimensions </td> <td  nowrap=""> Overall length </td> <td  nowrap=""> Without forks（mm） </td> <td  nowrap=""> 2950 </td> <td  nowrap=""> 3102 </td> </tr> <tr > <td colspan="2"  nowrap=""> Overall width（mm） </td> <td  nowrap=""> 1435 </td> <td  nowrap=""> 1480 </td> </tr> <tr > <td colspan="2"  nowrap=""> Mast height at maximum lift (with backrest)（mm） </td> <td  nowrap=""> 4260 </td> <td  nowrap=""> 4230 </td> </tr> <tr > <td colspan="2"  nowrap=""> Mast lowered height（mm） </td> <td  nowrap=""> 2125 </td> <td  nowrap=""> 2265 </td> </tr> <tr > <td rowspan="5" > Chassis </td> <td rowspan="2"  nowrap=""> Tires </td> <td  nowrap=""> Front wheel </td> <td  nowrap=""> 250-15-16PR </td> <td  nowrap=""> 2-300-15-20PR </td> </tr> <tr > <td  nowrap=""> Rear wheel </td> <td  nowrap=""> 6.50-10-10PR </td> <td  nowrap=""> 2-7.00-12-12PR </td> </tr> <tr > <td colspan="2"  nowrap=""> Wheelbase（mm） </td> <td  nowrap=""> 1900 </td> <td  nowrap=""> 2000 </td> </tr> <tr > <td  nowrap=""> Tread </td> <td  nowrap=""> Front wheel/rear wheel（mm） </td> <td  nowrap=""> 1160/1065 </td> <td  nowrap=""> 1182/1202 </td> </tr> <tr > <td  nowrap=""> Self weight </td> <td  nowrap=""> Without load（Kg） </td> <td  nowrap=""> 5200 </td> <td  nowrap=""> 6550 </td> </tr> <tr > <td rowspan="10"  nowrap=""> Drive </td> <td  nowrap=""> Battery </td> <td  nowrap=""> Voltage/capacity（V/Ah） </td> <td  nowrap=""> 12/80 </td> <td  nowrap=""> 24/160 </td> </tr> <tr > <td rowspan="6"  nowrap=""> Engine </td> <td  nowrap=""> Model </td> <td > 4D32G31<br /> Xinchang </td> <td > 4DX23<br /> Xichai </td> </tr> <tr > <td  nowrap=""> Rated output（kw/r.p.m） </td> <td  nowrap=""> 36.8/2500 </td> <td  nowrap=""> 60/2200 </td> </tr> <tr > <td  nowrap=""> Rated torque（Nm/r.p.m） </td> <td  nowrap=""> 186/1600-1800 </td> <td  nowrap=""> 320/1400-1700 </td> </tr> <tr > <td  nowrap=""> Bore x stroke（mm） </td> <td  nowrap=""> 98×105 </td> <td  nowrap=""> 102×118 </td> </tr> <tr > <td  nowrap=""> Number of cylinders </td> <td colspan="2"  nowrap=""> 4 </td> </tr> <tr > <td  nowrap=""> Displacement（L） </td> <td  nowrap=""> 3.17 </td> <td  nowrap=""> 3.857 </td> </tr> <tr > <td colspan="2"  nowrap=""> Fuel tank capacity（L） </td> <td  nowrap=""> 66 </td> <td  nowrap=""> 90 </td> </tr> <tr > <td colspan="2"  nowrap=""> Transmissions (FWD/RWD) </td> <td > 1/1 <br /> manual shift </td> <td > 2/1<br /> manual shift </td> </tr> <tr > <td colspan="2"  nowrap=""> Operating pressure（Mpa） </td> <td  nowrap=""> 18.5 </td> <td  nowrap=""> 19.5 </td> </tr> <tr > <td rowspan="6" > Supplement </td> <td colspan="2"  nowrap=""> Tire type (FR/RR) </td> <td colspan="2"  nowrap=""> Pneumatic </td> </tr> <tr > <td colspan="2"  nowrap=""> Number of wheels (FR/RR)（pcs） </td> <td colspan="2"  nowrap=""> 2/2 </td> </tr> <tr > <td colspan="2"  nowrap=""> Lowering speed (full load)（mm/s） </td> <td  nowrap=""> 480 </td> <td  nowrap=""> 520 </td> </tr> <tr > <td colspan="2"  nowrap=""> Lowering speed (no load)（mm/s） </td> <td  nowrap=""> 450 </td> <td  nowrap=""> 510 </td> </tr> <tr > <td colspan="2"  nowrap=""> Axle load distribution (full load) (FR/RR)（kg） </td> <td  nowrap=""> 8280/920 </td> <td  nowrap=""> 10340/960 </td> </tr> <tr > <td colspan="2"  nowrap=""> Axle load distribution (no load) (FR/RR)（kg） </td> <td  nowrap=""> 2080/3120 </td> <td  nowrap=""> 2700/3540 </td> </tr> </table>
      </>
    );
  };
  