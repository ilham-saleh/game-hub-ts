import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { Game } from "../entities/Game";


const useGame = (id: string | number) =>
  useQuery<Game, Error>({
    queryKey: ["game", id],
    queryFn: () => apiClient.get<Game>(`/games/${id}`).then((res) => res.data),
  });

export default useGame;
