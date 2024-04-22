import useGenre from "../hooks/useGenre";

type Props = {};

const GenreList = () => {
  const { data, loading, error } = useGenre();

  return (
    <div>
      {data.map((genre) => (
        <p>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenreList;
