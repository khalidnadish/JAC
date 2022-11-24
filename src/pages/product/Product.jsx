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

  return (
    <>
      <cpm.CardWrapper>
        {/* <TableVeiw/> */}
        <cpm.SectionTitle>{t("dezel")}</cpm.SectionTitle>
        <MyCard
          image={prod.D1.aboutPic}
          title={t("D1.title")}
          subtitle={t("D1.subtitle")}
          description={t("dezel")}
          hrefLink={"productd1" }
        />
        <MyCard
         image={prod.D2.aboutPic}
          title={t("D2.title")}
          subtitle={t("D2.subtitle")}
          description={t("dezel")}
          hrefLink={"productd2" }
        />
        <MyCard
         image={prod.D3.aboutPic}
          title={t("D3.title")}
          subtitle={t("D3.subtitle")}
          description={t("dezel")}
          hrefLink={"productd3" }
        />
        <MyCard
         image={prod.D4.aboutPic}
          title={t("D4.title")}
          subtitle={t("D4.subtitle")}
          description={t("dezel")}
          hrefLink={"productd4" }
        />
        <MyCard
          image={prod.D5.aboutPic}
          title={t("D5.title")}
          subtitle={t("D5.subtitle")}
          description={t("dezel")}
          hrefLink={"productd5" }
        />
        <MyCard
          image={prod.D6.aboutPic}
          title={t("D6.title")}
          subtitle={t("D6.subtitle")}
          description={t("dezel")}
          hrefLink={"productd6" }
        />
        <MyCard
         image={prod.D7.aboutPic}
          title={t("D7.title")}
          subtitle={t("D7.subtitle")}
          description={t("dezel")}
          hrefLink={"productd7" }
        />
        <MyCard
         image={prod.D8.aboutPic}
          title={t("D8.title")}
          subtitle={t("D8.subtitle")}
          description={t("dezel")}
          hrefLink={"productd8" }
        />
        <MyCard
          image={prod.D9.aboutPic}
          title={t("D9.title")}
          subtitle={t("D.subtitle")}
          description={t("dezel")}
          hrefLink={"productd9" }
        />
        <MyCard
          image={prod.D10.aboutPic}
          title={t("D10.title")}
          subtitle={t("D.subtitle")}
          description={t("dezel")}
          hrefLink={"productd10" }
         />
        
  {/* ------------------------------------------------------------------- */}
        <cpm.SectionTitle>{t("electric")}</cpm.SectionTitle>
        <MyCard
          image={prod.E1.aboutPic}
          title={t("E1.title")}
          subtitle={t("E1.subtitle")}
          description={t("electric")}
          hrefLink={"productd10" }
        />
        <MyCard
          image={prod.E2.aboutPic}
          title={t("E2.title")}
          subtitle={t("E2.subtitle")}
          description={t("electric")}
        />
        <MyCard
          image={prod.E3.aboutPic}
          title={t("E3.title")}
          subtitle={t("E3.subtitle")}
          description={t("electric")}
        />
        <MyCard
         image={prod.E4.aboutPic}
          title={t("E4.title")}
          subtitle={t("E4.subtitle")}
          description={t("electric")}
        />
        <MyCard
          image={prod.E5.aboutPic}
          title={t("E5.title")}
          subtitle={t("E5.subtitle")}
          description={t("electric")}
        />
        <MyCard
         image={prod.E6.aboutPic}
          title={t("E6.title")}
          subtitle={t("E6.subtitle")}
          description={t("electric")}
        />
        <MyCard
         image={prod.E7.aboutPic}
          title={t("E7.title")}
          subtitle={t("E7.subtitle")}
          description={t("electric")}
        />
        <MyCard
          image={prod.E8.aboutPic}
          title={t("E8.title")}
          subtitle={t("E8.subtitle")}
          description={t("electric")}
        />
        <MyCard
           image={prod.E9.aboutPic}
          title={t("E9.title")}
          subtitle={t("E9.subtitle")}
          description={t("electric")}
        />
        <MyCard
         image={prod.E10.aboutPic}
          title={t("E10.title")}
          subtitle={t("E10.subtitle")}
          description={t("electric")}
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
            {/* <Chip label={description}/> */}
            {/* <Typography
              gutterBottom
              textAlign={"center"}
              variant="h6"
              component="div"
              sx={{ fontFamily: "tb" }}
            >
              {title}
            </Typography> */}
            <Typography
              variant="body2"
              textAlign={"center"}
              color="text.secondary"
              sx={{ fontFamily: "tb" }}
            >
              {subtitle}
            </Typography>
            {/* <Typography variant="body2" textAlign={"left"} color="text.secondary">
          {description}
          </Typography> */}
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
