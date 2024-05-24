import { Badge } from "@chakra-ui/react";

type Props = {
  score?: number;
};

const CriticScore = ({ score }: Props) => {
  if (score === undefined) {
    return 0; // or return a default element if you prefer
  }

  let color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge fontSize="14px" paddingX={2} borderRadius="4px" colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
