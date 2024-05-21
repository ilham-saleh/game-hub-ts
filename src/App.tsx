// Previous code implementation using Props to handle GameQuery interface defined in App.tsx

// import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
// import Navigation from "./components/Navigation";
// import GameGrid from "./components/GameGrid";
// import GenreList from "./components/GenreList";
// import { useState } from "react";
// import PlatformSelector from "./components/PlatformSelector";
// import SortSelector from "./components/SortSelector";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Heading from "./components/GameHeading";

// export interface GameQuery {
//   searchText?: string;
//   genreId?: number;
//   platformId: number;
//   sortOrder: string;
// }

// function App() {
//   const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

//   return (
//     <Grid
//       gridTemplateAreas={{
//         base: `"nav" "main"`,
//         lg: `"nav nav"
//         "aside main"`,
//       }}
//       templateColumns={{
//         base: "1fr",
//         lg: "200px 1fr",
//       }}
//     >
//       <GridItem area="nav">
//         <Navigation
//           onSearch={(searchText) => setGameQuery({ ...gameQuery, searchText })}
//         />
//       </GridItem>
//       <Show above="lg">
//         <GridItem area="aside" paddingX={5}>
//           <GenreList
//             selectedGenreId={gameQuery.genreId}
//             onSelectGenre={(genre) =>
//               setGameQuery({ ...gameQuery, genreId: genre.id })
//             }
//           />
//         </GridItem>
//       </Show>
//       <GridItem area="main">
//         <Box paddingLeft={2}>
//           <Heading gameQuery={gameQuery} />
//           <HStack spacing={5} marginBottom={2}>
//             <PlatformSelector
//               selectedPlatformId={gameQuery.platformId}
//               onSelectPlatform={(platform) =>
//                 setGameQuery({ ...gameQuery, platformId: platform.id })
//               }
//             />
//             <SortSelector
//               sortOrder={gameQuery.sortOrder}
//               onSelectSortOrder={(sortOrder) =>
//                 setGameQuery({ ...gameQuery, sortOrder })
//               }
//             />
//           </HStack>
//         </Box>
//         <GameGrid gameQuery={gameQuery} />
//       </GridItem>
//       <ToastContainer />
//     </Grid>
//   );
// }

// export default App;
