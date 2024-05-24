import { Image, SimpleGrid, Spinner, Text } from "@chakra-ui/react";
import useScreenshot from "../hooks/useScreenshot";

interface Props {
  gameId: number;
}

const Screenshots = ({ gameId }: Props) => {
  const { data, isLoading, error } = useScreenshot(gameId);
  console.log("Screenshots", data);

  if (isLoading) return <Spinner />;
  if (error) throw error;

  if (!data?.results.length) return <Text>No images available</Text>;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginY={5}>
      {data.results.map((file) => (
        <Image key={file.id} src={file.image} />
      ))}
    </SimpleGrid>
  );
};

export default Screenshots;
