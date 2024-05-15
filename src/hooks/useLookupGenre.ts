import useGenre from "./useGenre";

const useLookupGenre = (id?: number) => {
  const { data: genres } = useGenre();
  const genre = genres?.results.find((g) => g.id === id);

  return genre;
};

export default useLookupGenre;
