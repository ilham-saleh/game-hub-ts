import { HStack, Image } from "@chakra-ui/react";

import ColorSwitch from "./ColorSwitch";
import logo from "../assets/logo/logo.webp";
import Search from "./Search";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// { onSearch }: Props
const Navigation = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Image src={logo} boxSize="60px" />
        {/* onSearch={onSearch} */}
        <Search />
        <ColorSwitch />
      </HStack>
    </>
  );
};

export default Navigation;
