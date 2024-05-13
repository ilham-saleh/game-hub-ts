import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchingResponse } from "../services/api-client";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () => apiClient.get<FetchingResponse<Genre>>("/genres").then((res) => res.data),
  });

// // import genres from "../genresData";
// import useData from "./useData";

// export interface Genre {
//   id: number;
//   name: string;
//   image_background: string;
// }

// const useGenre = () => useData<Genre>("/genres");
// // const useGenre = () => ({ data: genres, loading: false, error: null });

export default useGenre;
