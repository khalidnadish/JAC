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
export default function Prodct() {
  const { t } = useTranslation();
  const Dezel=["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"]
  // const Dezel1=[{prod.D1.aboutPic}, "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"]

  return (
    <>
      <cpm.CardWrapper>
        {/* <TableVeiw/> */}
        <cpm.SectionTitle>{t("dezel")}</cpm.SectionTitle>
          {
            Dezel.map((el,idx)=>{
              const Dimage=`/assets/product/${el}/1.jpg`
              const Dtitle=`${el}.subtitle`
              // "/assets/product/D1/1.jpg"
              return (
              <>
                <MyCard
                  key={idx}
                  image={ Dimage}
                  // title={t(Dtitle)}
                  subtitle={t(Dtitle)}
                  description={t("dezel")}
                  hrefLink={`/product/d1/6?model=${prod.D1.name}`}
                />
              </>
            );})
          }      
     



        {/* <MyCard
          image={prod.D1.aboutPic}
          title={t("D1.title")}
          subtitle={t("D1.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d1/6?model=${prod.D1.name}`}
        />
        <MyCard
         image={prod.D2.aboutPic}
          title={t("D2.title")}
          subtitle={t("D2.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d2/7?model=${prod.D2.name}` }
        />
        <MyCard
         image={prod.D3.aboutPic}
          title={t("D3.title")}
          subtitle={t("D3.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d3/3?model=${prod.D3.name}` }
        />
        <MyCard
         image={prod.D4.aboutPic}
          title={t("D4.title")}
          subtitle={t("D4.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d4/7?model=${prod.D4.name}`}
        />
        <MyCard
          image={prod.D5.aboutPic}
          title={t("D5.title")}
          subtitle={t("D5.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d5/3?model=${prod.D5.name}` }
        />
        <MyCard
          image={prod.D6.aboutPic}
          title={t("D6.title")}
          subtitle={t("D6.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d6/7?model=${prod.D6.name}` }
        />
        <MyCard
         image={prod.D7.aboutPic}
          title={t("D7.title")}
          subtitle={t("D7.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d7/4?model=${prod.D7.name}` }
        />
        <MyCard
         image={prod.D8.aboutPic}
          title={t("D8.title")}
          subtitle={t("D8.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d8/4?model=${prod.D8.name}` }
        />
        <MyCard
          image={prod.D9.aboutPic}
          title={t("D9.title")}
          subtitle={t("D.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d9/4?model=${prod.D9.name}` }
        />
        <MyCard
          image={prod.D10.aboutPic}
          title={t("D10.title")}
          subtitle={t("D.subtitle")}
          description={t("dezel")}
          hrefLink={`/product/d10/1?model=${prod.D10.name}` }
         />
         */}
  {/* ------------------------------------------------------------------- */}
        <cpm.SectionTitle>{t("electric")}</cpm.SectionTitle>
        <MyCard
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
        />

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
