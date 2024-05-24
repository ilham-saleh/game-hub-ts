// Current implementation to handle gameQuery to render games using Zustand with no props
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import CardSkeleton from "./CardSkeleton";
import React from "react";
import { Link } from "react-router-dom";
import GameHeading from "./GameHeading";
// import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
    useGames();

  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  // const fetchedGamesCount =
  //   data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

  return (
    <div>
      <GameHeading />
      {isLoading && (
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
      {/* <InfiniteScroll
        dataLength={fetchedGamesCount}
        hasMore={!!hasNextPage}
        next={() => fetchNextPage()}
        loader={<Spinner />}
      > */}
      <SimpleGrid
        spacing={4}
        columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
        padding={3}
      >
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {/* </InfiniteScroll> */}
      <Box marginBlock={2} display="flex" justifyContent="center">
        {hasNextPage && (
          <Button onClick={() => fetchNextPage()}>
            {isFetchingNextPage ? "Loading..." : "Load More"}
          </Button>
        )}
      </Box>
    </div>
  );
};

export default GameGrid;

// Previous implementation to handle gameQuery to render games with props

// import { Box, Button, SimpleGrid } from "@chakra-ui/react";
// import useGames from "../hooks/useGames";
// import GameCard from "./GameCard";
// import CardSkeleton from "./CardSkeleton";
// import { GameQuery } from "../App";
// import React from "react";
// // import InfiniteScroll from "react-infinite-scroll-component";

// interface Props {
//   gameQuery: GameQuery;
// }

// const GameGrid = ({ gameQuery }: Props) => {
//   const { data, isLoading, isFetchingNextPage, fetchNextPage, hasNextPage } =
//     useGames(gameQuery);

//   const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   // const fetchedGamesCount =
//   //   data?.pages.reduce((total, page) => total + page.results.length, 0) || 0;

//   return (
//     <div>
//       {isLoading && (
//         <SimpleGrid
//           columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
//           spacing={10}
//           padding={6}
//         >
//           {skeletons.map((skeleton) => (
//             <CardSkeleton key={skeleton} />
//           ))}
//         </SimpleGrid>
//       )}
//       {/* <InfiniteScroll
//         dataLength={fetchedGamesCount}
//         hasMore={!!hasNextPage}
//         next={() => fetchNextPage()}
//         loader={<Spinner />}
//       > */}
//       <SimpleGrid
//         spacing={4}
//         columns={{ sm: 1, md: 2, lg: 3, xl: 4, "2xl": 5 }}
//         padding={3}
//       >
//         {data?.pages.map((page, index) => (
//           <React.Fragment key={index}>
//             {page.results.map((game) => (
//               <GameCard key={game.id} game={game} />
//             ))}
//           </React.Fragment>
//         ))}
//       </SimpleGrid>
//       {/* </InfiniteScroll> */}
//       <Box marginBlock={2} display="flex" justifyContent="center">
//         {hasNextPage && (
//           <Button onClick={() => fetchNextPage()}>
//             {isFetchingNextPage ? "Loading..." : "Load More"}
//           </Button>
//         )}
//       </Box>
//     </div>
//   );
// };

// export default GameGrid;
