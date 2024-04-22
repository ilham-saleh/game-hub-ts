import useGenre from "../hooks/useGenre";

type Props = {};

const GenreList = (props: Props) => {
  const { genres, loading, error } = useGenre();

  return (
    <div>
      {genres.map((genre) => (
        <p>{genre.name}</p>
      ))}
    </div>
  );
};

export default GenreList;
