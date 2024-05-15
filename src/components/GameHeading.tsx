import { GameQuery } from "../App";
import { Heading } from "@chakra-ui/react";
import useLookUpPlatform from "../hooks/useLookupPlatform";
import useLookupGenre from "../hooks/useLookupGenre";

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const genre = useLookupGenre(gameQuery.genreId);
  const platform = useLookUpPlatform(gameQuery.platformId);

  const heading = `${platform?.name || ""} ${genre?.name || ""} Games`;

  return (
    <Heading as="h1" marginY={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default GameHeading;
