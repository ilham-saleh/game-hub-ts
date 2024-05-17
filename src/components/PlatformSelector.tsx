// Current code implementation handling platfom using Zustand without props
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";
import useLookUpPlatform from "../hooks/useLookupPlatform";
import useGameStore from "../zustand/useGameStore";

const PlatformSelector = () => {
  const { data: platforms } = usePlatforms();
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
  const setPlatfromId = useGameStore((s) => s.setPlatformId);
  const platform = useLookUpPlatform(selectedPlatformId);

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || "Platforms"}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => setPlatfromId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;

// Previous code implementation handling platform query with props
// import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// import { BsChevronDown } from "react-icons/bs";
// import usePlatforms, { Platform } from "../hooks/usePlatforms";
// import useLookUpPlatform from "../hooks/useLookupPlatform";

// interface Props {
//   onSelectPlatform: (platform: Platform) => void;
//   selectedPlatformId?: number;
// }

// const PlatformSelector = ({ onSelectPlatform, selectedPlatformId }: Props) => {
//   const { data: platforms } = usePlatforms();
//   const platform = useLookUpPlatform(selectedPlatformId);

//   return (
//     <Menu>
//       <MenuButton as={Button} rightIcon={<BsChevronDown />}>
//         {platform?.name || "Platforms"}
//       </MenuButton>
//       <MenuList>
//         {platforms?.results.map((platform) => (
//           <MenuItem
//             key={platform.id}
//             onClick={() => onSelectPlatform(platform)}
//           >
//             {platform.name}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// };

// export default PlatformSelector;
