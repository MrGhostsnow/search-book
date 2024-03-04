import {
  ContainerSearchSection,
  Input,
  InputSection,
  ButtonSearch,
} from "./styles";

const SearchSection = () => {
  return (
    <ContainerSearchSection>
      <InputSection>
        <Input />
        <ButtonSearch>Search</ButtonSearch>
      </InputSection>
    </ContainerSearchSection>
  );
};

export default SearchSection;
