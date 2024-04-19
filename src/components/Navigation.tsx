import { Text, HStack, Image } from "@chakra-ui/react";

import logo from "../assets/logo/logo.webp";

const Navigation = () => {
  return (
    <>
      <HStack>
        <Image src={logo} boxSize="60px" />
        <Text>Navbar</Text>
      </HStack>
    </>
  );
};

export default Navigation;
