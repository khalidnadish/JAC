import React from "react";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions, Chip } from "@mui/material";
import cpm from "./aboutCpm";
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
          // title={t("D1.title")}
          subtitle={prod.D1.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D2.aboutPic}
          title={t("D2.title")}
          subtitle={prod.D2.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D3.aboutPic}
          title={t("D3.title")}
          subtitle={prod.D3.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D4.aboutPic}
          title={t("D4.title")}
          subtitle={prod.D4.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D5.aboutPic}
          title={t("D5.title")}
          subtitle={prod.D5.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D6.aboutPic}
          title={t("D6.title")}
          subtitle={prod.D6.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D7.aboutPic}
          title={t("D7.title")}
          subtitle={prod.D7.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D8.aboutPic}
          title={t("D8.title")}
          subtitle={prod.D8.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D9.aboutPic}
          title={t("D9.title")}
          subtitle={prod.D9.name}
          description={t("dezel")}
        />
        <MyCard
          image={prod.D10.aboutPic}
          title={t("D10.title")}
          subtitle={prod.D10.name}
          description={t("dezel")}
        />
        {/* ------------------------------------------------------------------- */}
        <cpm.SectionTitle>{t("electric")}</cpm.SectionTitle>
        <MyCard
          image={prod.E1.aboutPic}
          title={t("E1.title")}
          subtitle={prod.E1.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E2.aboutPic}
          title={t("E2.title")}
          subtitle={prod.E2.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E3.aboutPic}
          title={t("E3.title")}
          subtitle={prod.E3.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E4.aboutPic}
          title={t("E4.title")}
          subtitle={prod.E4.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E5.aboutPic}
          title={t("E5.title")}
          subtitle={prod.E5.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E6.aboutPic}
          title={t("E6.title")}
          subtitle={prod.E6.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E7.aboutPic}
          title={t("E7.title")}
          subtitle={prod.E7.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E8.aboutPic}
          title={t("E8.title")}
          subtitle={prod.E8.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E9.aboutPic}
          title={t("E9.title")}
          subtitle={prod.E9.name}
          description={t("electric")}
        />
        <MyCard
          image={prod.E10.aboutPic}
          title={t("E10.title")}
          subtitle={prod.E10.name}
          description={t("electric")}
        />

        {/* <MyCard  image={"/assets/product/H-153243-1-5.jpg"}/> */}
      </cpm.CardWrapper>
    </>
  );
}

const MyCard = ({ image, title, subtitle, description }) => {
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
          <Button size="small" variant="contained" fullWidth color="warning">
            <Typography
              variant="body2"
              textAlign={"left"}
              color="text.secondary"
              sx={{ fontFamily: "tb" }}
            >
              {t("morebtn")}
            </Typography>
          </Button>
        </CardActions>
      </Card>
    </>
  );
};

const TableVeiw = () => {
  return (
    <>
      <table
        style={{
          width: "100%",
          padding: "0",
          // background:"#999",
          margin: "5px 0 9pt",
          borderSpacing: "1px",
          borderCollapse: "separate",
          border: "1px solid",
        }}
      >
        <tbody>
          <tr>
            <td colspan="3" nowrap="">
              {" "}
              Model{" "}
            </td>
            <td nowrap=""> CPCD20H </td>
            <td nowrap=""> CPCD25H </td>
          </tr>{" "}
          <tr>
            {" "}
            <td rowspan="14"> Features </td>
            <td colspan="2" nowrap="">
              {" "}
              Power type{" "}
            </td>
            <td colspan="2" nowrap="">
              {" "}
              Diesel{" "}
            </td>
          </tr>{" "}
          <tr>
            <td colspan="2" nowrap="">
              {" "}
              Rated load（kg）{" "}
            </td>
            <td nowrap=""> 2000 </td> <td nowrap=""> 2500 </td>{" "}
          </tr>
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Load center distance（mm）{" "}
            </td>
            <td colspan="2" nowrap="">
              {" "}
              500{" "}
            </td>
          </tr>{" "}
          <tr>
            <td colspan="2" nowrap="">
              {" "}
              Lift height（mm）{" "}
            </td>
            <td colspan="2" nowrap="">
              {" "}
              3000{" "}
            </td>
          </tr>{" "}
          <tr>
            <td colspan="2" nowrap="">
              {" "}
              Free lift height（mm）{" "}
            </td>
            <td colspan="2" nowrap="">
              {" "}
              140{" "}
            </td>
          </tr>{" "}
          <tr>
            <td nowrap=""> Fork size </td>
            <td nowrap=""> L×W×T（mm） </td>
            <td colspan="2" nowrap="">
              {" "}
              1070×122×40{" "}
            </td>
          </tr>{" "}
          <tr>
            <td nowrap=""> Mast tilt angle </td>
            <td nowrap=""> Front/Rear </td>
            <td colspan="2" nowrap="">
              {" "}
              6°/12°{" "}
            </td>
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Minimum turning radius（mm）{" "}
            </td>
            <td nowrap=""> 2170 </td> <td nowrap=""> 2230 </td>
          </tr>{" "}
          <tr>
            <td colspan="2" nowrap="">
              {" "}
              Minimum right angle stacking aisle width（mm）{" "}
            </td>
            <td nowrap=""> 3635 </td>
            <td nowrap=""> 3695 </td>
          </tr>{" "}
          <tr>
            <td colspan="2" nowrap="">
              {" "}
              Minimum right angle aisle width（mm）{" "}
            </td>
            <td nowrap=""> 2370 </td>
            <td nowrap=""> 2430 </td>
          </tr>{" "}
          <tr>
            <td rowspan="2"> Minimum ground clearance </td>
            <td nowrap=""> Frame center(no load)（mm） </td>
            <td colspan="2" nowrap="">
              {" "}
              115{" "}
            </td>
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Mast Bottom（no load）（mm） </td>
            <td colspan="2" nowrap="">
              {" "}
              110{" "}
            </td>
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Height of overhead guard（mm）{" "}
            </td>
            <td colspan="2" nowrap="">
              {" "}
              2070{" "}
            </td>
          </tr>{" "}
          <tr>
            <td colspan="2" nowrap="">
              {" "}
              Overhang (FR)（mm）{" "}
            </td>
            <td colspan="2" nowrap="">
              {" "}
              465{" "}
            </td>
          </tr>{" "}
          <tr>
            <td rowspan="6"> Performance </td>
            <td rowspan="2"> Maximum travel speed </td>
            <td nowrap=""> Full load（km/h） </td>
            <td colspan="2" nowrap="">
              {" "}
              18{" "}
            </td>
          </tr>{" "}
          <tr>
            <td nowrap=""> No load（km/h） </td>
            <td colspan="2" nowrap="">
              {" "}
              18{" "}
            </td>
          </tr>{" "}
          <tr>
            {" "}
            <td rowspan="2"> Maximum lift speed </td>
            <td nowrap=""> Full load（mm/s） </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              500{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> No load（mm/s） </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              700{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Maximum drawbar pull </td>{" "}
            <td nowrap=""> Full load（KN） </td> <td nowrap=""> 11.7 </td>{" "}
            <td nowrap=""> 11.4 </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Maximum gradeability（%）{" "}
            </td>{" "}
            <td nowrap=""> 20 </td> <td nowrap=""> 18 </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td rowspan="4"> Dimensions </td>{" "}
            <td nowrap=""> Overall length </td>{" "}
            <td nowrap=""> Without forks（mm） </td> <td nowrap=""> 2485 </td>{" "}
            <td nowrap=""> 2560 </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Overall width（mm）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              1160{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Mast height at maximum lift (with backrest)（mm）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              4030{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Mast lowered height（mm）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              1995{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td rowspan="5"> Chassis </td>{" "}
            <td rowspan="2" nowrap="">
              {" "}
              Tires{" "}
            </td>{" "}
            <td nowrap=""> Front wheel </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              7.00-12-12PR{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Rear wheel </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              6.00-9-10PR{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Wheelbase（mm）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              1600{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Tread </td>{" "}
            <td nowrap=""> Front wheel/rear wheel（mm） </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              970/970{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Self weight </td>{" "}
            <td nowrap=""> Without load（Kg） </td> <td nowrap=""> 3300 </td>{" "}
            <td nowrap=""> 3660 </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td rowspan="10" nowrap="">
              {" "}
              Drive{" "}
            </td>{" "}
            <td nowrap=""> Battery </td>{" "}
            <td nowrap=""> Voltage/capacity（V/Ah） </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              12/80{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td rowspan="6" nowrap="">
              {" "}
              Engine{" "}
            </td>{" "}
            <td nowrap=""> Model </td> <td colspan="2"> 4D27G31 Xinchang </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Rated output（kw/r.p.m） </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              36.8/2500{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Rated torque（Nm/r.p.m） </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              156/1700-1900{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Bore x stroke（mm） </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              90×105{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Number of cylinders </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              4{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td nowrap=""> Displacement（L） </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              2.67{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Fuel tank capacity（L）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              55{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Transmissions (FWD/RWD){" "}
            </td>{" "}
            <td colspan="2"> 1/1 manual shift </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Operating pressure（Mpa）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              18.5{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td rowspan="6"> Supplement </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              Tire type (FR/RR){" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              Pneumatic{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Number of wheels (FR/RR)（pcs）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              2/2{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Lowering speed (full load)（mm/s）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              450{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Lowering speed (no load)（mm/s）{" "}
            </td>{" "}
            <td colspan="2" nowrap="">
              {" "}
              500{" "}
            </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Axle load distribution (full load) (FR/RR)（kg）{" "}
            </td>{" "}
            <td nowrap=""> 4770/530 </td> <td nowrap=""> 5544/616 </td>{" "}
          </tr>{" "}
          <tr>
            {" "}
            <td colspan="2" nowrap="">
              {" "}
              Axle load distribution (no load) (FR/RR)（kg）{" "}
            </td>{" "}
            <td nowrap=""> 1320/1980 </td> <td nowrap=""> 1464/2196 </td>{" "}
          </tr>{" "}
        </tbody>
      </table>
    </>
  );
};
