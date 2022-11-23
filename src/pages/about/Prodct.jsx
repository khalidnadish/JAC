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
        <MyCard  image={"/assets/product/H-153243-1-5.jpg"} title={t("h84.title")} subtitle={t("m84.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153245-1-6.jpg"} title={t("h45.title")} subtitle={t("h45.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153247-1-7.jpg"} title={t("h47.title")} subtitle={t("h47.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153259-1-8.jpg"} title={t("h59.title")} subtitle={t("h59.subtitle")} description={t("m84.description")} />
        <MyCard  image={"/assets/product/H-153273-1-9.jpg"} title={t("h73.title")} subtitle={t("h73.subtitle")} description={t("m84.description")} />
        {/* <MyCard  image={"/assets/product/H-153243-1-5.jpg"}/> */}
        
      </cpm.CardWrapper>
    </>
  );
}




 

const MyCard =({image,title,subtitle,description}) => {
  const {t} =useTranslation()
  return(<>

<Card sx={{ maxWidth: 300 }}>
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