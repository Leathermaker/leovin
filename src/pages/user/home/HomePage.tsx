import { AnalyticSection, Home} from "./components";
import { AboutCompany } from "./subComponents";
import { VideoSection } from "./videoSection";
import { OurProducts } from "./ourproducts";
// import WideScreenHandler from "../../../components/WideScreenHandler";
import React from "react";

const HomePage: React.FC = () => {
  return (
    <>
     {/* <WideScreenHandler> */}

      <Home />
      <AnalyticSection/>
      <OurProducts/>
      {/* <OurServices/> */}
      <AboutCompany/>
      <VideoSection/>

     {/* </WideScreenHandler> */}
    </>
  );
};

export default HomePage;
