import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";
import useTrailers from "../hooks/useTrailers";
import PlatformIcons from "./PlatformIcons";
import CriticScore from "./CriticScore";
import Emoji from "./Emoji";
import { useState } from "react";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const { data: trailersData } = useTrailers(game.id);
  const previewUrl = trailersData?.results?.[0]?.data?.max;
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Box
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      position="relative"
      overflow="hidden"
      borderRadius={10}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform .20s ease-in",
      }}
    >
      <Card height="300px">
        <Box position="relative" height="300px">
          {previewUrl && isHovered ? (
            <video
              src={previewUrl}
              autoPlay
              muted
              loop
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          ) : (
            <Image
              src={game.background_image}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
            />
          )}
        </Box>
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
        {isHovered && (
          <Box
            position="absolute"
            top="0"
            left="0"
            width="100%"
            height="100%"
            backgroundColor="rgba(0, 0, 0, 0.8)"
            color="white"
            zIndex="2"
            padding="10px"
            borderRadius="10px"
            overflow="auto"
            transition="opacity 0.15s ease-in"
          >
            <Link to={`/games/${game.id}`}>
              <Heading fontSize="xl" marginBottom={3}>
                {game.name}
              </Heading>
            </Link>
            <Text fontWeight="bold">Genres:</Text>
            <Text>{game.genres.map((genre) => genre.name).join(", ")}</Text>
            <Text fontWeight="bold" marginTop={2}>
              Release Date:
            </Text>
            <Text>{game.released}</Text>
          </Box>
        )}
      </Card>
    </Box>
  );
};

export default GameCard;
