import React from 'react'
 
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import cpm from './aboutCpm'
import { useTranslation } from "react-i18next";

export default function Prodct() {
  const {t} =useTranslation()
 
  return (
    <>
      <cpm.CardWrapper>
      <cpm.SectionTitle>{t("dezel")}</cpm.SectionTitle>
        <MyCard  image={"/assets/product/H-153243-1-5.jpg"} title={t("D1.title")} subtitle={t("D1.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153245-1-6.jpg"} title={t("D2.title")} subtitle={t("D2.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153247-1-7.jpg"} title={t("D3.title")} subtitle={t("D3.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153259-1-8.jpg"} title={t("D4.title")} subtitle={t("D4.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153273-1-9.jpg"} title={t("D5.title")} subtitle={t("D5.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153243-1-5.jpg"} title={t("D6.title")} subtitle={t("D6.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153245-1-6.jpg"} title={t("D7.title")} subtitle={t("D7.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153247-1-7.jpg"} title={t("D8.title")} subtitle={t("D8.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153259-1-8.jpg"} title={t("D9.title")} subtitle={t("D.subtitle")}  description={t("m84.description")} />
        <cpm.SectionTitle>{t("electric")}</cpm.SectionTitle>
        <MyCard  image={"/assets/product/H-153273-1-9.jpg"} title={t("E1.title")} subtitle={t("E1.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153243-1-5.jpg"} title={t("E2.title")} subtitle={t("E2.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153245-1-6.jpg"} title={t("E3.title")} subtitle={t("E3.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153247-1-7.jpg"} title={t("E4.title")} subtitle={t("E4.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153259-1-8.jpg"} title={t("E5.title")} subtitle={t("E5.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153273-1-9.jpg"} title={t("E6.title")} subtitle={t("E6.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153273-1-9.jpg"} title={t("E7.title")} subtitle={t("E7.subtitle")} description={t("m84.description")} />
        {/* <MyCard  image={"/assets/product/H-153243-1-5.jpg"}/> */}
        
      </cpm.CardWrapper>
    </>
  );
}




 

const MyCard =({image,title,subtitle,description}) => {
  const {t} =useTranslation()
  return(<>

<Card sx={{ maxWidth: 300 ,minWidth:300 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image}
          alt="green iguana"
          sx={{ padding: "1em 1em 0 1em", objectFit: "contain" }}
        />
        <CardContent>
          <Typography gutterBottom  textAlign={"center"} variant="h6" component="div"  sx={{fontFamily:"tb"}}>
            {title}
          </Typography>
          <Typography variant="body2" textAlign={"center"} color="text.secondary"  sx={{fontFamily:"tb"}}>
          {subtitle}
          </Typography>
          {/* <Typography variant="body2" textAlign={"left"} color="text.secondary">
          {description}
          </Typography> */}
          
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant='contained' fullWidth color="warning" >
        <Typography variant="body2" textAlign={"left"} color="text.secondary" sx={{fontFamily:"tb"}}>
        {t("morebtn")}
          </Typography>
      
        </Button>
      </CardActions>
    </Card>


</>)}