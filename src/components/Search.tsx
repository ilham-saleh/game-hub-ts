// Current implementation with Zustand to handle queries without Props
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameStore from "../zustand/useGameStore";
import { useNavigate } from "react-router-dom";

const Search = () => {
  const ref = useRef<HTMLInputElement>(null);
  const { setSearchText } = useGameStore();
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigate("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="fill"
          boxShadow="base"
        />
      </InputGroup>
    </form>
  );
};

export default Search;

// Previous version without using Zustand but GameQuery defined in App.tsx and useState with props

// import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
// import { ChangeEvent, useState, FormEvent } from "react";
// import { BsSearch } from "react-icons/bs";

// interface Props {
//   onSearch: (searchtext: string) => void;
// }

// const Search = ({ onSearch }: Props) => {
//   const [seacrhText, setSerchText] = useState("");

//   const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
//     setSerchText(event.target.value);
//   };

//   const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
//     event.preventDefault();
//     onSearch(seacrhText);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <InputGroup>
//         <InputLeftElement children={<BsSearch />} />
//         <Input
//           onChange={handleChange}
//           value={seacrhText}
//           borderRadius={20}
//           placeholder="Search games..."
//           variant="fill"
//           boxShadow="base"
//         />
//       </InputGroup>
//     </form>
//   );
// };

// export default Search;
