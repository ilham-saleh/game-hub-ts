import { useParams } from "react-router-dom";
import useGame from "../hooks/useGame";
import { Heading, Spinner } from "@chakra-ui/react";
import ExpandableText from "../components/ExpandableText";

const GameDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  // const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const { data: game, isLoading, error } = useGame(slug!); // Non-null assertion since slug should be defined

  if (isLoading) <Spinner />;

  if (error) throw error;

  // const textLimit = 300;

  // const description = game?.description_raw || "";
  // const isLongText = description.length > textLimit;
  // const showDescription = isExpanded
  //   ? description
  //   : description.substring(0, 300);

  return (
    <>
      <Heading>{game?.name}</Heading>
      <ExpandableText>
        {game?.description_raw || "No description available"}
      </ExpandableText>
    </>
  );
};

export default GameDetail;
