import { Box, Card, CardBody, HStack, Heading, Image } from "@chakra-ui/react";


import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";

interface Props {
  game: Game;
}
const GameCard = ({ game }: Props) => {
  return (
    <Box
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .15s ease-in",
      }}
    >
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <HStack justify="space-between" marginBottom={3}>
            <PlatformIcons
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <CriticScore score={game.metacritic} />
          </HStack>
          <HStack justifyContent="space-between" alignItems="top">
            <Link to={`/games/${game.slug}`}>
              <Heading fontSize="2xl">{game.name}</Heading>
            </Link>
            <Emoji rating={game.rating_top} />
          </HStack>
        </CardBody>
      </Card>
    </Box>
  );
};

export default GameCard;
