// import genres from "../genresData";
import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenre = () => useData<Genre>("/genres");
// const useGenre = () => ({ data: genres, loading: false, error: null });

export default useGenre;
