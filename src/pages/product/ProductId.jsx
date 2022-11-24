import React from "react";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import cpm from "./productCpm"
import { useTranslation } from "react-i18next";
import {useParams,useSearchParams} from "react-router-dom"




function ProductId({locDir="d",Pid="6"}) {
  const [search,setSearchParams] =useSearchParams()
  const modelx = search.get('model')
    const { t } = useTranslation();
    const PX=useParams()
    
    console.log(PX.filesNO,PX.id,modelx)
  
/* ----------create file names in array------------------------------------------------------------ */
// const locWork = locDir.toUpperCase();
const locWork = (PX.id).toUpperCase();
Pid=PX.filesNO
const workFile = [];
for (let index = 1; index < parseInt(Pid) + 1; index++) {
  workFile.push(`/assets/product/${locWork}/${index}.jpg`);
}
/* ------------------------------------------------------------------ */


    // console.log(locWork,workFile)
  
  return (
    <>
    
    <cpm.ProdctPageWraper>
    <SliderShow imageFiles={workFile}/>



      <cpm.SectionTitle>{t("detailBtn")}{modelx}</cpm.SectionTitle>
      <cpm.TableWraper>
      <TableVeiw />
      
      </cpm.TableWraper>
      </cpm.ProdctPageWraper>
    </>
  );
}


export default ProductId


const SliderShow=({imageFiles}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    centerMode:true,
    autoplay: true,
    centerPadding:"0px",
    pauseOnHover: true,
    swipeToSlide: true,
  };
  
  return (
    <>
      <cpm.SliderWraper>
        <cpm.CpmSlider {...settings}>
          {imageFiles.map((el, idx) => (
            <cpm.SliderImage key={idx} src={el} />
          ))}
        </cpm.CpmSlider>
        {/* ---------------------------- */}
      </cpm.SliderWraper>
    </>
  );
}





const TableVeiw = () => {
    return (
      <>
       
      </>
    );
  };
  