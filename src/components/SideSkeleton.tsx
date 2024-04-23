import {
  Box,
  HStack,
  Skeleton,
  SkeletonCircle,
  SkeletonText,
  Stack,
} from "@chakra-ui/react";

const SideSkeleton = () => {
  return (
    <Stack marginY={1}>
      <HStack>
        <SkeletonCircle size="10" borderRadius={8} />
        <Skeleton height="20px" width="100%" borderRadius={5} />
      </HStack>
    </Stack>
  );
};

export default SideSkeleton;
