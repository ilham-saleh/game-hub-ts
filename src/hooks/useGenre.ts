import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchingResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";

const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: () =>
      apiClient.get<FetchingResponse<Genre>>("/genres").then((res) => res.data),
    staleTime: 24 * 60 * 60 * 1000,
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
