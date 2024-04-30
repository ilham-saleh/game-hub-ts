import { Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";

import { Game } from "../hooks/useGames";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  console.log(game.released)
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <HStack justify="space-between" marginBottom={3}>
          <PlatformIcons
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
