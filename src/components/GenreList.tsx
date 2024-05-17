// Current Code implementation using Zustand to handle Genre Query without props

import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import SideSkeleton from "./SideSkeleton";
import useGameStore from "../zustand/useGameStore";

const GenreList = () => {
  const { data, isLoading } = useGenre();
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
  const setGenreId = useGameStore((s) => s.setGenreId);

  const numOfSkeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {isLoading && (
          <ListItem>
            {numOfSkeletons.map((genreSkeleton) => (
              <SideSkeleton key={genreSkeleton} />
            ))}
          </ListItem>
        )}
        {data?.results.map((genre) => (
          <ListItem key={genre.id} marginY="5px">
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                src={genre.image_background}
                objectFit="cover"
              />
              <Button
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setGenreId(genre.id)}
                variant="link"
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;

// Previous Code implementation Genre Query using props
// import {
//   Button,
//   HStack,
//   Heading,
//   Image,
//   List,
//   ListItem,
// } from "@chakra-ui/react";
// import useGenre, { Genre } from "../hooks/useGenre";
// import SideSkeleton from "./SideSkeleton";

// type Props = {
//   onSelectGenre: (genre: Genre) => void;
//   selectedGenreId?: number
// };

// const GenreList = ({ selectedGenreId, onSelectGenre }: Props) => {
//   const { data, isLoading } = useGenre();

//   const numOfSkeletons = [
//     1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//   ];

//   return (
//     <>
//       <Heading fontSize="2xl" marginBottom={3}>
//         Genres
//       </Heading>
//       <List>
//         {isLoading && (
//           <ListItem>
//             {numOfSkeletons.map((genreSkeleton) => (
//               <SideSkeleton key={genreSkeleton} />
//             ))}
//           </ListItem>
//         )}
//         {data?.results.map((genre) => (
//           <ListItem key={genre.id} marginY="5px">
//             <HStack>
//               <Image
//                 boxSize="32px"
//                 borderRadius={8}
//                 src={genre.image_background}
//                 objectFit="cover"
//               />
//               <Button
//                 fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
//                 onClick={() => onSelectGenre(genre)}
//                 variant="link"
//                 fontSize="lg"
//                 whiteSpace="normal"
//                 textAlign="left"
//               >
//                 {genre.name}
//               </Button>
//             </HStack>
//           </ListItem>
//         ))}
//       </List>
//     </>
//   );
// };

// export default GenreList;
