import {
  ContainerSearchSection,
  Input,
  InputSection,
  ButtonSearch,
} from "./styles";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchSection: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchTerm(newValue);
  };

  const handleSearch = () => {
    onSearch(searchTerm);
  };
  return (
    <ContainerSearchSection>
      <InputSection>
        <Input
          type="text"
          placeholder="Pesquise por filmes"
          value={searchTerm}
          onChange={handleInputChange}
        />
        <ButtonSearch onClick={handleSearch}>Search</ButtonSearch>
      </InputSection>
    </ContainerSearchSection>
  );
};

export default SearchSection;
