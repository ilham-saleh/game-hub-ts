import { useInfiniteQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { FetchingResponse } from "../services/api-client";
import useGameStore from "../zustand/useGameStore";
import { Game } from "../entities/Game";


const useGames = () => {
  const { gameQuery } = useGameStore();

  return useInfiniteQuery<FetchingResponse<Game>, Error>({
    queryKey: ["games", gameQuery],
    queryFn: ({ pageParam = 1 }) =>
      apiClient
        .get<FetchingResponse<Game>>("/games", {
          params: {
            // _start: (pageParam - 1) * pageQuery.pageSize,
            // _limit: pageQuery.pageSize,
            genres: gameQuery.genreId,
            parent_platforms: gameQuery.platformId,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText,
            page: pageParam,
          },
        })
        .then((res) => res.data),
    keepPreviousData: true,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  });
};

// const useGames = (gameQuery: GameQuery) =>
//   useData<Game>(
//     "/games",
//     {
//       params: {
//         genres: gameQuery.genre?.id,
//         platforms: gameQuery.platform?.id,
//         ordering: gameQuery.sortOrder,
//         search: gameQuery.searchText,
//       },
//     },
//     [gameQuery]
//   );

export default useGames;
