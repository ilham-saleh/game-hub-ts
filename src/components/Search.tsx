import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { ChangeEvent, useState, FormEvent } from "react";
import { BsSearch } from "react-icons/bs";

interface Props {
  onSearch: (searchtext: string) => void;
}

const Search = ({ onSearch }: Props) => {
  const [seacrhText, setSerchText] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSerchText(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(seacrhText);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          onChange={handleChange}
          value={seacrhText}
          borderRadius={20}
          placeholder="Search games..."
          variant="fill"
        />
      </InputGroup>
    </form>
  );
};

export default Search;
