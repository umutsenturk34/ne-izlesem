import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

type Props = {
  title: string;
  className?: string;
};

const SliderTypeVideo: React.FC<Props> = ({ title, className }) => {
  const data = [
    {
      title: "Ya Çok Seversen",
      ımgurl:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
      details: "6.Bölüm Fragman",
      number: "2dk.",
      description:
        "Hayatını yurt dışında geçiren Ateş, babasının ölümü sebebiyle yıllar önce terk ettiği İstanbul’a geri dönmek zorunda kalır. Yolu ailesini bulmak için dolandırıcılık yapan sahte gelin Leyla ile kesişir.",
      video:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
    },
    {
      title: "Ya Çok Seversen",
      ımgurl:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
      details: "6.Bölüm Fragman",
      number: "2dk.",
      description:
        "Hayatını yurt dışında geçiren Ateş, babasının ölümü sebebiyle yıllar önce terk ettiği İstanbul’a geri dönmek zorunda kalır. Yolu ailesini bulmak için dolandırıcılık yapan sahte gelin Leyla ile kesişir.",
      video:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
    },
    {
      title: "Ya Çok Seversen",
      ımgurl:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
      details: "6.Bölüm Fragman",
      number: "2dk.",
      description:
        "Hayatını yurt dışında geçiren Ateş, babasının ölümü sebebiyle yıllar önce terk ettiği İstanbul’a geri dönmek zorunda kalır. Yolu ailesini bulmak için dolandırıcılık yapan sahte gelin Leyla ile kesişir.",
      video:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
    },
    {
      title: "Ya Çok Seversen",
      ımgurl:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
      details: "6.Bölüm Fragman",
      number: "2dk.",
      description:
        "Hayatını yurt dışında geçiren Ateş, babasının ölümü sebebiyle yıllar önce terk ettiği İstanbul’a geri dönmek zorunda kalır. Yolu ailesini bulmak için dolandırıcılık yapan sahte gelin Leyla ile kesişir.",
      video:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
    },
    {
      title: "Ya Çok Seversen",
      ımgurl:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
      details: "6.Bölüm Fragman",
      number: "2dk.",
      description:
        "Hayatını yurt dışında geçiren Ateş, babasının ölümü sebebiyle yıllar önce terk ettiği İstanbul’a geri dönmek zorunda kalır. Yolu ailesini bulmak için dolandırıcılık yapan sahte gelin Leyla ile kesişir.",
      video:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
    },
    {
      title: "Ya Çok Seversen",
      ımgurl:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
      details: "6.Bölüm Fragman",
      number: "2dk.",
      description:
        "Hayatını yurt dışında geçiren Ateş, babasının ölümü sebebiyle yıllar önce terk ettiği İstanbul’a geri dönmek zorunda kalır. Yolu ailesini bulmak için dolandırıcılık yapan sahte gelin Leyla ile kesişir.",
      video:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
    },
    {
      title: "Ya Çok Seversen",
      ımgurl:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
      details: "6.Bölüm Fragman",
      number: "2dk.",

      description:
        "Hayatını yurt dışında geçiren Ateş, babasının ölümü sebebiyle yıllar önce terk ettiği İstanbul’a geri dönmek zorunda kalır. Yolu ailesini bulmak için dolandırıcılık yapan sahte gelin Leyla ile kesişir.",
      video:
        "https://img-puhutv.mncdn.com/mnresize/432/618/media/23-08/07/yacokseversen_fragman_thumb6puhu-daily.jpg",
    },
  ];
  return (
    <div className={`wrapper ${className ?? ""}`}>
      <div
        style={{ fontSize: "22px" }}
        className="container flex justify-between text-white ml-10 mb-4"
      >
        <h2 style={{ fontSize: "22px", fontWeight: "300" }}>{title}</h2>
      </div>
      <Swiper
        spaceBetween={30}
        modules={[Navigation]}
        slidesPerView={4}
        navigation
        loop
      >
        {data.map((item) => (
          <>
            <SwiperSlide className="hover">
              <div className="rounded-lg shadow-md p-4">
                <a href="">
                  <div className="container">
                    <div className="ss">
                      <div className="img">
                        <img className="resim" src={item.ımgurl} alt="" />
                        <h3 style={{ color: "white" }} className="baslik">
                          {item.title}
                        </h3>
                      </div>
                      <div className="aciklama">
                        <h3>{item.details}</h3>
                        <span>{item.number}</span>
                        <p className="description">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </SwiperSlide>
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderTypeVideo;
