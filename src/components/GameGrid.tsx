import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";

const GameGrid = () => {
  const { games, error, loading } = useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <div>
      <Text>{error && <p>{error}</p>}</Text>
      {loading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
          spacing={10}
          padding={3}
        >
          {skeletons.map((skeleton) => (
            <CardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid
        spacing={10}
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding={3}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
