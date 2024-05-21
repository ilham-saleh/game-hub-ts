import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner, Text } from "@chakra-ui/react";

const GameDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: game, isLoading, error } = useGame(slug!); // ! mark means this slug is always not a null

  if (isLoading) <Spinner />;

  if (error) throw error;

  return (
    <>
      <Heading>{game?.name}</Heading>
      <Text>{game?.description_raw}</Text>
    </>
  );
};

export default GameDetail;
