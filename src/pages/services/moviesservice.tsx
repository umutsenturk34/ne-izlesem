import { generateApiEndpoint } from "@/utils";

import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMWQyZTc3YjAxMzhhMGQ3OGFkMDI0Mjg3NDA3M2E4NCIsInN1YiI6IjY0ZDMzNTBjZDEwMGI2MDBmZjA4NzQ3ZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.f3pcbNgyUZzMooPrDPL2vViy6msoDsbaWznJEiEpqtI ",
  },
};
/**
 * GET:'movies/popular'
 */
export async function getMovies() {
  const endpoint = generateApiEndpoint("3/movie/popular");
  const response = await axios.get(endpoint, config);
  return response.data;
}
