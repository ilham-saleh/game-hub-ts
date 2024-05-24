import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { ScreenshotResponse } from "../entities/Screenshot";

const useScreenshot = (gameId: number) =>
  useQuery<ScreenshotResponse>({
    queryKey: ["screenshot", gameId],
    queryFn: () =>
      apiClient
        .get<ScreenshotResponse>(`/games/${gameId}/screenshots`)
        .then((res) => res.data),
  });

export default useScreenshot;
