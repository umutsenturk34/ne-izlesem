import SliderTypeOne from "@/components/SliderTypeOne";
import MainSlider from "@/components/home/MainSlider";
import React, { useState, useEffect } from "react";

import { moviesservice } from "./services/services";

const movies = () => {
  const [commentData, setCommentData] = useState([]);

  const loadData = async () => {
    try {
      const movies = await moviesservice.getMovies();
      setCommentData(movies.results);
      console.log(movies);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    loadData();
  }, []);

  return (
    <>
      <MainSlider />;
      <SliderTypeOne
        className="mt-2 mb-6"
        title={"ÖNE ÇIKANLAR"}
        data={commentData}
      />
      <SliderTypeOne className="mt-2 mb-6" title={"Dram"} data={commentData} />
    </>
  );
};

export default movies;
