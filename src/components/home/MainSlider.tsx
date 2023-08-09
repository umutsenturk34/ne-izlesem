import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoIcon from "@mui/icons-material/Info";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import IosShareIcon from "@mui/icons-material/IosShare";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

const MainSlider = () => {
  return (
    <Swiper
      className="main-slider"
      spaceBetween={0}
      modules={[Navigation, Pagination]}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <div className="slide">
          <div className="carousel">
            <img
              style={{
                color: "transparent",
                aspectRatio: "16/9",
                objectFit: "cover",
              }}
              src="https://img-puhutv.mncdn.com/media/23-08/07/lezzet_rotasi_bol_4_spotlight_v1-1691397351.jpg"
              alt=""
            />
          </div>
          <div className="carousel">
            <div className="info absolute left-12 top-1/4 text-white mt-14">
              <h2 className="py-1 text-4xl font-bold">Lezzet Rotası</h2>
              <h2 className="pb-3 text-2xl font-bold">1.Sezon 4.Bölüm</h2>
              <p style={{ color: " #B4B4B4" }} className=" pb-2 text-xl">
                Yeme - İçme - Gezi - Sohbet - 2023
              </p>
              <p style={{ fontSize: "18px", maxWidth: "700px" }}>
                Şef Ekin Eylem Ulaş'ın sunduğu Lezzet Rotası'nın yeni bölümüne
                ekranların sevilen ismi Açelya Akkoyun konuk oluyor.
              </p>
              <div className="carousel flex  mt-8  gap-2">
                <button className="bg-white p-2 text-black flex items-center">
                  <PlayArrowIcon className="mr-2 ml-2" />
                  <span className="mr-3 text-lg font-bold">Şimdi İzle</span>
                </button>
                <div>
                  <button className="btn-hover p-2 text-white flex items-center">
                    <InfoIcon className="mr-2 ml-2" />
                    <span className="mr-3 text-lg font-bold">
                      Detaylı Bilgi
                    </span>
                  </button>
                </div>
                <div>
                  <button className="btn-hover p-2 text-white flex items-center">
                    <AddCircleOutlineIcon className="mr-2 ml-2" />
                    <span className="mr-3 text-lg font-bold">Listeme Ekle</span>
                  </button>
                </div>
                <div>
                  <button className="btn-hover p-2 text-white flex items-center">
                    <IosShareIcon className="mr-2 ml-2" />
                    <span className="mr-3 text-lg font-bold">Paylaş</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide">
          <div className="carousel">
            <img
              style={{
                color: "transparent",
                aspectRatio: "16/9",
                objectFit: "cover",
              }}
              src="https://img-puhutv.mncdn.com/media/23-08/07/lezzet_rotasi_bol_4_spotlight_v1-1691397351.jpg"
              alt=""
            />
          </div>
          <div className="carousel">
            <div className="info absolute left-12 top-1/4 text-white mt-14">
              <h2 className="py-1 text-4xl font-bold">Lezzet Rotası</h2>
              <h2 className="pb-3 text-2xl font-bold">1.Sezon 4.Bölüm</h2>
              <p style={{ color: " #B4B4B4" }} className=" pb-2 text-xl">
                Yeme - İçme - Gezi - Sohbet - 2023
              </p>
              <p style={{ fontSize: "18px", maxWidth: "700px" }}>
                Şef Ekin Eylem Ulaş'ın sunduğu Lezzet Rotası'nın yeni bölümüne
                ekranların sevilen ismi Açelya Akkoyun konuk oluyor.
              </p>
              <div className="carousel flex  mt-8  gap-2">
                <button className="bg-white p-2 text-black flex items-center">
                  <PlayArrowIcon className="mr-2 ml-2" />
                  <span className="mr-3 text-lg font-bold">Şimdi İzle</span>
                </button>
                <div>
                  <button className="btn-hover p-2 text-white flex items-center">
                    <InfoIcon className="mr-2 ml-2" />
                    <span className="mr-3 text-lg font-bold">
                      Detaylı Bilgi
                    </span>
                  </button>
                </div>
                <div>
                  <button className="btn-hover p-2 text-white flex items-center">
                    <AddCircleOutlineIcon className="mr-2 ml-2" />
                    <span className="mr-3 text-lg font-bold">Listeme Ekle</span>
                  </button>
                </div>
                <div>
                  <button className="btn-hover p-2 text-white flex items-center">
                    <IosShareIcon className="mr-2 ml-2" />
                    <span className="mr-3 text-lg font-bold">Paylaş</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default MainSlider;
