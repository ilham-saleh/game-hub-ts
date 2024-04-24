import { Button, HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";
import SideSkeleton from "./SideSkeleton";

type Props = {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

const GenreList = ({ selectedGenre, onSelectGenre }: Props) => {
  const { data, loading } = useGenre();

  const numOfSkeletons = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];

  return (
    <List>
      {loading && (
        <ListItem>
          {numOfSkeletons.map((genreSkeleton) => (
            <SideSkeleton key={genreSkeleton} />
          ))}
        </ListItem>
      )}
      {data.map((genre) => (
        <ListItem key={genre.id} marginY="5px">
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={genre.image_background}
              objectFit="cover"
            />
            <Button
              fontWeight={genre.id === selectedGenre?.id ? "bold" : "normal"}
              onClick={() => onSelectGenre(genre)}
              variant="link"
              fontSize="lg"
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
