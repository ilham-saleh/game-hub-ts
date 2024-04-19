import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";

const ColorSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} />
      <Text>{colorMode === "dark" ? "Dark Mode" : "Light Mode"}</Text>
    </HStack>
  );
};

export default ColorSwitch;
