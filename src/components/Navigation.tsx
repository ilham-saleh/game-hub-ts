import { HStack, Image } from "@chakra-ui/react";

import ColorSwitch from "./ColorSwitch";
import logo from "../assets/logo/logo.webp";
import Search from "./Search";
import { Link } from "react-router-dom";

// interface Props {
//   onSearch: (searchText: string) => void;
// }

// { onSearch }: Props
const Navigation = () => {
  return (
    <>
      <HStack justifyContent="space-between" padding="10px">
        <Link to="/">
          <Image src={logo} boxSize="60px" objectFit="cover" />
        </Link>
        {/* onSearch={onSearch} */}
        <Search />
        <ColorSwitch />
      </HStack>
    </>
  );
};

export default Navigation;
