import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { v4 as uuid } from "uuid";

type Props = {
  title: string;
  className?: string;
  data: any;
};

const SliderTypeOne: React.FC<Props> = ({ title, className, data }) => {
  return (
    <div className={`wrapper ${className ?? ""}`}>
      <div
        style={{ fontSize: "22px" }}
        className="container flex justify-between text-white ml-10 mb-4"
      >
        <h2 style={{ fontSize: "22px", fontWeight: "300" }}>{title}</h2>
        <h3>
          Hepsini Göster
          <NavigateNextIcon style={{ fontSize: "30px" }} />
        </h3>
      </div>
      <Swiper
        spaceBetween={30}
        modules={[Navigation]}
        slidesPerView={6}
        navigation
        loop
      >
        {data &&
          data.map((item: any) => (
            <SwiperSlide className="hover-zoom" key={uuid()}>
              <div>
                <img
                  className="thumbnail"
                  src={`https://image.tmdb.org/t/p/w300_and_h450_bestv2${item.poster_path}`}
                  alt=""
                />
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default SliderTypeOne;
