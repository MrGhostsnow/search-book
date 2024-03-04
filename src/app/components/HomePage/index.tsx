import { ContainerHomePage, Label, LabelSection } from "./styles";

import SearchSection from "../SearchSection";

const HomePage = () => {
  return (
    <ContainerHomePage>
      <LabelSection>
        <Label>
          Thousands of books just a click away
          <br />
          Enter the title you are looking for
        </Label>
      </LabelSection>
      <SearchSection />
    </ContainerHomePage>
  );
};

export default HomePage;
