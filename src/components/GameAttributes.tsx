import { SimpleGrid, Text } from "@chakra-ui/react";
import { Game } from "../entities/Game";
import AttributesDefinition from "./AttributesDefinition";
import CriticScore from "./CriticScore";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <AttributesDefinition term="Platforms">
        {game?.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </AttributesDefinition>
      <AttributesDefinition term="Metascore">
        <CriticScore score={game?.metacritic} />
      </AttributesDefinition>
      <AttributesDefinition term="Genres">
        {game?.genres.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </AttributesDefinition>

      <AttributesDefinition term="Publishers">
        {game?.publishers.map(({ id, name }) => (
          <Text key={id}>{name}</Text>
        ))}
      </AttributesDefinition>
    </SimpleGrid>
  );
};

export default GameAttributes;
