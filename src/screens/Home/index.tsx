import React from "react";
import BackImage from "../../assets/Background.png";
import {
  Container,
  Search,
  Logo,
  DivSearch,
  ButtonSearch,
  DivList,
} from "./styles";
import CharactersList from "../../components/CharactersList";

const Home: React.FC = (e) => {return (
    <Container style={{ backgroundImage: `url(${BackImage})`}}>
      <Logo />
      <DivSearch>
            <Search />
            <ButtonSearch>Search</ButtonSearch>
      </DivSearch>
      <DivList>
        <CharactersList />
      </DivList>
    </Container>
  );
};

export default Home;
