import React from "react";
import serviceskew from "../../../assets/serviceskew.png";
import HeroBg from "../../../assets/herobg.svg";

const Section2 = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${HeroBg})`,
        backgroundSize: "cover",
        clipPath: "polygon(0 9%, 100% 24%, 100% 100%, 0 88%)",
      }}
      className="pt-[4rem] wfull grd gridcols-[20%_80%] bg[#0030AB] textcenter p4 mxauto w-screen"
    >
      <div className="py-[2rem] w-full max-w-[1200px] grid grid-cols-[25%_75%] text-center p4 mx-auto justify-items-stretch">
        <div className="h-full w-full">
          <img
            src={serviceskew}
            alt=""
            className="w-full max-w-[250px] h-[350px]"
          />
        </div>
        <div className="m-auto">
          <div className="w-[80%] grid grid-cols-1 justify-items-start">
            <h2 className="text-[#F8FAFC] text-center mx-auto text-3xl font-[600]">
              Monetization Opportunities
            </h2>
            <div className="text-center text-[#F8FAFC] text-xs leading-[36px] font-[400]">
              Monetizing your content is a great way to turn your passion into a
              career. We offer a variety of monetization opportunities,
              including sponsored posts, affiliate marketing, and merchandise
              sales, to help you earn revenue from your content.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
