import { useQuery } from "@tanstack/react-query";
import { TrailersResponse } from "../entities/Trailer";
import apiClient from "../services/api-client";

const useTrailers = (gameId: number) =>
  useQuery<TrailersResponse>({
    queryKey: ["trailer", gameId],
    queryFn: () =>
      apiClient.get<TrailersResponse>(`/games/${gameId}/movies`).then((res) => res.data),
  });

export default useTrailers;
