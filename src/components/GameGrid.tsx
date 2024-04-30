import { SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery }: Props) => {
  const { data, loading } = useGames(gameQuery);

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <div>
      {loading && (
        <SimpleGrid
          columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
          spacing={10}
          padding={6}
        >
          {skeletons.map((skeleton) => (
            <CardSkeleton key={skeleton} />
          ))}
        </SimpleGrid>
      )}
      <SimpleGrid
        spacing={4}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        padding={3}
      >
        {data.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
};

export default GameGrid;
