import { HStack, Image } from "@chakra-ui/react";

import ColorSwitch from "./ColorSwitch";
import logo from "../assets/logo/logo.webp";
import Search from "./Search";

interface Props {
  onSearch: (searchText: string) => void;
}

const Navigation = ({ onSearch }: Props) => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        <Search onSearch={onSearch} />
        <ColorSwitch />
      </HStack>
    </>
  );
};

export default Navigation;
