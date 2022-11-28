import React from "react";
import styled from "styled-components";
import Heroimag from "./Heroimag";
import Typo from "./Typo";
import Prodct from "./Prodct";
import cpm from "./aboutCpm";

function About({ language }) {
  

  return (
    <>
      <cpm.Wraper>
        <Heroimag />
        <Typo />
        <cpm.Hr/>
        <Prodct />
      </cpm.Wraper>
    </>
  );
}

export default About;
