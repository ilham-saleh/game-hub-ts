import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Box, Heading, Spinner, Text } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";
import GameAttributes from "../components/GameAttributes";

const GameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { data: game, isLoading, error } = useGame(slug!); // Non-null assertion since slug should be defined
  console.log(game);

  if (isLoading) <Spinner />;

  if (error) throw error;

  // const textLimit = 300;

  // const description = game?.description_raw || "";
  // const isLongText = description.length > textLimit;
  // const showDescription = isExpanded
  //   ? description
  //   : description.substring(0, 300);

  if (!game) return <Text>No game found.</Text>;

  return (
    <Box paddingX={4}>
      <Heading>{game?.name}</Heading>
      <ExpandableText>
        {game?.description_raw || "No description available"}
      </ExpandableText>

      <GameAttributes game={game} />
    </Box>
  );
};

export default GameDetail;
