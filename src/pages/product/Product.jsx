import React, { useState } from "react";
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
import { FaGasPump } from "react-icons/fa";
import { GiForklift, GiElectric, GiFuelTank } from "react-icons/gi";
import { t } from "i18next";

export default function Prodct() {
  const [toggleProduct, setToggleProduct] = useState(0);

  return (
    <>
      <cpm.Container>
        <BtnControl setToggleProduct={setToggleProduct} />

        <cpm.CardWrapper>
          {toggleProduct === 0 && (
            <>
              <DeselProduct /> <ElectricProduct />
            </>
          )}
          {toggleProduct === 1 && <DeselProduct />}
          {toggleProduct === 2 && <ElectricProduct />}
        </cpm.CardWrapper>
      </cpm.Container>
    </>
  );
}

const BtnControl = ({ setToggleProduct }) => {
  return (
    <>
      <cpm.SelecttionWraper>
        <cpm.BtnSelect onClick={() => setToggleProduct((pre) => 0)}>
          <FaGasPump />
          <GiElectric />
        </cpm.BtnSelect>
        <cpm.BtnSelect onClick={() => setToggleProduct((pre) => 1)}>
          <FaGasPump />
          {t("deselF")}
        </cpm.BtnSelect>
        <cpm.BtnSelect onClick={() => setToggleProduct((pre) => 2)}>
          <GiElectric />
          {t("electF")}{" "}
        </cpm.BtnSelect>
      </cpm.SelecttionWraper>
    </>
  );
};
const DeselProduct = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* --------------Loop For Desel Product ---------------------- */}
      <cpm.SectionTitle>{t("dezel")}</cpm.SectionTitle>
      {diselProduct.map((el, idx) => {
        const Dimage = `/assets/product/${el}/1.jpg`;
        const Dtitle = `${el}.subtitle`;
        return (
          <React.Fragment key={el.id}>
            <MyCard
              image={el.Image}
              subtitle={el.name}
              hrefLink={`/product/${el.directory}/${el.imageCount}?model=${el.name}&typex=1`}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};
const ElectricProduct = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* --------------Loop For Electric Product ---------------------- */}
      <cpm.SectionTitle>{t("electric")}</cpm.SectionTitle>
      {electricProduct.map((el, idx) => {
        const Dimage = `/assets/product/${el}/1.jpg`;
        const Dtitle = `${el}.subtitle`;
        return (
          <React.Fragment key={el.id}>
            <MyCard
              image={el.Image}
              subtitle={el.name}
              hrefLink={`/product/${el.directory}/${el.imageCount}?model=${el.name}&typex=2`}
            />
          </React.Fragment>
        );
      })}
    </>
  );
};

const MyCard = ({ image, title, subtitle, description, hrefLink }) => {
  const { t } = useTranslation();
  return (
    <>
      <Card sx={{ maxWidth: 350, minWidth: 350 }}>
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
          <Button
            size="small"
            variant="contained"
            fullWidth
            color="warning"
            component={Link}
            to={hrefLink}
          >
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
