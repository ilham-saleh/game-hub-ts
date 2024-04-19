import { HStack, Image } from "@chakra-ui/react";

import ColorSwitch from "./ColorSwitch";
import logo from "../assets/logo/logo.webp";

const Navigation = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <ColorSwitch />
      </HStack>
    </>
  );
};

export default Navigation;
