

import { Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";

interface Game {
  id: number;
  name: string;
}

interface FetchGameRes {
  count: number;
  results: Game[];
}

const GameGrid = () => {
  const { games, error } = useGames();

  console.log(games);
  return (
    <div>
      <Text>{error && <p>{error}</p>}</Text>
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default GameGrid;
