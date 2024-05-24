import useTrailers from "../hooks/useTrailers";
import { Spinner, Text } from "@chakra-ui/react";

interface Props {
  id: number;
}

const GameTrailer = ({ id }: Props) => {
  const { data, error, isLoading } = useTrailers(id);
  console.log(data?.results);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  if (!data?.results.length) return <Text>No trailers available</Text>;

  const trailer = data.results[0];

  return (
    <video width="100%" poster={trailer.preview} controls>
      <source src={trailer.data.max} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default GameTrailer;
