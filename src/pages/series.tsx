import SliderTypeOne from "@/components/SliderTypeOne";
import MainSlider from "@/components/home/MainSlider";
import React from "react";

const series = () => {
  return (
    <>
      <MainSlider />;
      <SliderTypeOne className="mt-2 mb-6" title={"ÖNE ÇIKANLAR"} />
      <SliderTypeOne className="mt-2 mb-6" title={"Romantik"} />
    </>
  );
};

export default series;
