import React from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import cpm from "./productCpm";
import { useTranslation } from "react-i18next";
import prod from "../product/product.json";
import diselProduct from "./Dproduct.json";
import electricProduct from "./Eproduct.json";
export default function Prodct() {
  const { t } = useTranslation();


  return (
    <>
      <cpm.CardWrapper>
{/* --------------Loop For Desel Product ---------------------- */}
        <cpm.SectionTitle>{t("dezel")}</cpm.SectionTitle>
          {
            diselProduct.map((el,idx)=>{
              const Dimage=`/assets/product/${el}/1.jpg`
              const Dtitle=`${el}.subtitle`
              return (
              <React.Fragment key={el.id}>
                <MyCard
                  image={ el.Image }
                  subtitle={ el.name}
                  hrefLink={`/product/${el.directory}/${el.imageCount}?model=${el.name}`}
                />
              </React.Fragment>
            );})
          }      
 {/* --------------Loop For Electric Product ---------------------- */}    
 <cpm.SectionTitle>{t("electric")}</cpm.SectionTitle>
          {
            electricProduct.map((el,idx)=>{
              const Dimage=`/assets/product/${el}/1.jpg`
              const Dtitle=`${el}.subtitle`
      
              return (
              <React.Fragment key={el.id}>
                <MyCard
                  image={ el.Image }
                  subtitle={ el.name}
                  hrefLink={`/product/${el.directory}/${el.imageCount}?model=${el.name}`}
                />
              </React.Fragment>
            );})
          }      



        {/* <MyCard
          image={prod.D1.aboutPic}
          title={t("D1.title")}
          subtitle={t("D1.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d1/6?model=${prod.D1.name}`}
        />
       
  {/* ------------------------------------------------------------------- */}
        
        {/* <MyCard
          image={prod.E1.aboutPic}
          title={t("E1.title")}
          subtitle={t("E1.subtitle")}
          description={t("electric")}
          hrefLink={"producte1" }
        />
        <MyCard
          image={prod.E2.aboutPic}
          title={t("E2.title")}
          subtitle={t("E2.subtitle")}
          description={t("electric")}
          hrefLink={"producte2" }
        />
        <MyCard
          image={prod.E3.aboutPic}
          title={t("E3.title")}
          subtitle={t("E3.subtitle")}
          description={t("electric")}
          hrefLink={"producte3" }
        />
        <MyCard
         image={prod.E4.aboutPic}
          title={t("E4.title")}
          subtitle={t("E4.subtitle")}
          description={t("electric")}
          hrefLink={"producte4" }
        />
        <MyCard
          image={prod.E5.aboutPic}
          title={t("E5.title")}
          subtitle={t("E5.subtitle")}
          description={t("electric")}
          hrefLink={"producte5" }
        />
        <MyCard
         image={prod.E6.aboutPic}
          title={t("E6.title")}
          subtitle={t("E6.subtitle")}
          description={t("electric")}
          hrefLink={"producte6" }
        />
        <MyCard
         image={prod.E7.aboutPic}
          title={t("E7.title")}
          subtitle={t("E7.subtitle")}
          description={t("electric")}
          hrefLink={"producte7" }
        />
        <MyCard
          image={prod.E8.aboutPic}
          title={t("E8.title")}
          subtitle={t("E8.subtitle")}
          description={t("electric")}
          hrefLink={"producte8" }
        />
        <MyCard
           image={prod.E9.aboutPic}
          title={t("E9.title")}
          subtitle={t("E9.subtitle")}
          description={t("electric")}
          hrefLink={"producte9" }
        />
        <MyCard
         image={prod.E10.aboutPic}
          title={t("E10.title")}
          subtitle={t("E10.subtitle")}
          description={t("electric")}
          hrefLink={"producte10" }
        /> */}

        {/* <MyCard  image={"/assets/product/H-153243-1-5.jpg"}/> */}
      </cpm.CardWrapper>
    
    </>
  );
}

const MyCard = ({ image, title, subtitle, description ,hrefLink}) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ maxWidth: 300, minWidth: 300 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={image}
            alt="green iguana"
            sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
          />
          
          <CardContent>
         
            <Typography
              variant="body2"
              textAlign={"center"}
              color="text.secondary"
              sx={{ fontFamily: "tb" }}
            >
              {subtitle}
            </Typography>
         
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" variant="contained" fullWidth color="warning"    component={Link} to={hrefLink}>
            <Typography
              variant="body2"
              textAlign={"left"}
              color="text.secondary"
              sx={{ fontFamily: "tb" }}
            >
              {t("detailBtn")}
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};
