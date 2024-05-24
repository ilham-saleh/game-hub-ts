import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const textLimit = 300;

  if (children.length <= textLimit) {
    return <Text>{children}</Text>;
  }

  const summary = isExpanded
    ? children
    : children.substring(0, textLimit) + "...";

  return (
    <Text>
      {summary}
      <Button
        size="xs"
        colorScheme="yellow"
        fontWeight="bold"
        ml={1}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Show less" : "Show more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
