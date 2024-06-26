// Current implementation to handle SortOrders query using Zustand without Props
import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGameStore from "../zustand/useGameStore";

const SortSelector = () => {
  const sortOrder = useGameStore((s) => s.gameQuery.sortOrder);
  const setSortOrder = useGameStore((s) => s.setSortOrder);

  const sortOrders = [
    {
      value: "",
      label: "Relevance",
    },
    {
      value: "-added",
      label: "Date added",
    },
    {
      value: "name",
      label: "Name",
    },
    {
      value: "-released",
      label: "Release Date",
    },
    {
      value: "-metracritic",
      label: "Popularity",
    },
    {
      value: "-rating",
      label: "Average Rating",
    },
  ];

  const currentSortOrder = sortOrders.find(
    (order) => order.value === sortOrder
  );

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Sort By: {currentSortOrder?.label || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((sortOrder) => (
          <MenuItem
            onClick={() => setSortOrder(sortOrder.value)}
            key={sortOrder.value}
            value={sortOrder.value}
          >
            {sortOrder.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;

// Previous code implementation to handle sortOrders with props

// import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
// import { BsChevronDown } from "react-icons/bs";

// interface Props {
//   onSelectSortOrder: (sortOrder: string) => void;
//   sortOrder: string;
// }

// const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {
//   const sortOrders = [
//     {
//       value: "",
//       label: "Relevance",
//     },
//     {
//       value: "-added",
//       label: "Date added",
//     },
//     {
//       value: "name",
//       label: "Name",
//     },
//     {
//       value: "-released",
//       label: "Release Date",
//     },
//     {
//       value: "-metracritic",
//       label: "Popularity",
//     },
//     {
//       value: "-rating",
//       label: "Average Rating",
//     },
//   ];

//   const currentSortOrder = sortOrders.find(
//     (order) => order.value === sortOrder
//   );

//   return (
//     <Menu>
//       <MenuButton as={Button} rightIcon={<BsChevronDown />}>
//         Sort By: {currentSortOrder?.label || "Relevance"}
//       </MenuButton>
//       <MenuList>
//         {sortOrders.map((sortOrder) => (
//           <MenuItem
//             onClick={() => onSelectSortOrder(sortOrder.value)}
//             key={sortOrder.value}
//             value={sortOrder.value}
//           >
//             {sortOrder.label}
//           </MenuItem>
//         ))}
//       </MenuList>
//     </Menu>
//   );
// };

// export default SortSelector;
