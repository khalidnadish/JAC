import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cpm from "../productCpm"
import prod from "../product.json";

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
      <h1>D9</h1>
      <cpm.SliderWraper>
        <cpm.CpmSlider {...settings}>
          <cpm.SliderImage src={"/assets/product/D9/1.jpg"} />
          <cpm.SliderImage src={"/assets/product/D9/2.jpg"} />
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
      <table  cellPadding="1" cellSpacing="1"> <tr > <td > Model </td> <td > CPCD90H </td> </tr> <tr > <td > Rated Load Capacity </td> <td > 9000kg </td> </tr> <tr > <td > Engine </td> <td > Engine from ISUZU, PERKINS, and other Chinese supplier </td> </tr> <tr > <td > Gearbox </td> <td > Hydraulic/automatic (TCM technology) </td> </tr> <tr > <td > Standard Mast </td> <td > 2-stage mast (3m) </td> </tr> <tr > <td > Container Mast (Optional) </td> <td > 2-stage or 3-stage full free mast (3m-6m) </td> </tr> <tr > <td > Tyre </td> <td > Pneumatic tyre (Standard), solid tyre (Optional) </td> </tr> <tr > <td > Side Shifter (Optional) </td> <td > Integrated type side shifter, CASCADE side shifter </td> </tr> </table>
    
      </>
    );
  };
  