import SliderTypeOne from "@/components/SliderTypeOne";
import MainSlider from "@/components/home/MainSlider";
import SliderTypeVideo from "@/components/SliderTypeVideo";

export default function Home() {
  return (
    <>
      <MainSlider />;
      <SliderTypeOne className="mt-2 mb-6" title={"ÖNE ÇIKANLAR"} />
      <SliderTypeVideo className="mt-2 mb-6" title={"YENİ FRAGMANLAR"} />
    </>
  );
}
