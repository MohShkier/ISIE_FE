import HeaderSwiper from "../Header/Swiper";
import OurClient from "../OurClients/ourClient";
import ProductSection from "../OurProductSection/OurProductSection";
import { useState, useEffect } from "react";
import axios from "axios"
function Home() {


  return (
    <>
     <HeaderSwiper/>
`      <ProductSection/>
    </>
  );
}

export default Home;
