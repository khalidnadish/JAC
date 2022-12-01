import React from "react";
import cpm from "./aboutCpm";

function Heroimag() {
  return (
    <>
      <cpm.ImageWraper>
        {/* <cpm.Image  src="/banner.webp" /> */}
        <cpm.Image  src="/banner.jpg" />
        {/* <cpm.Image  src="/heroImage.webp" /> */}
      </cpm.ImageWraper>
    </>
  );
}

export default Heroimag;
