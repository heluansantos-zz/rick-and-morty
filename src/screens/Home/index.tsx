import React,{ useState } from "react";
import { useQuery, gql } from "@apollo/client";
import BackImage from "../../assets/Background.png";
import {
  Container,
  Search,
  Logo,
  DivSearch,
  ButtonSearch,
  DivList,
  Error,
} from "./styles";
import CharactersList from "../../components/CharactersList";

const Home: React.FC = () => {
  const [query, setQuery] = useState("");

  const SearchCharacters = (name: string) => {
    return gql`
      query {
        characters(filter: { name: "${name}" }) {
          results {
            id
            name
            image
            status
            species
          }
        }
      }
    `
};

const { error, data } = useQuery(SearchCharacters(query));
  if(error) {
    return <Error>Error: {error}</Error>
  }
  const { characters = {} } = data || {};
  const { results = [] } = characters;

  return (
    <Container style={{ backgroundImage: `url(${BackImage})` }}>
      <Logo />
      <DivSearch>
        <Search 
          type="text"
          onChange={(e) => setQuery(e.target.value)}
        />
        <ButtonSearch>Search</ButtonSearch>
      </DivSearch>
      <DivList>
        <CharactersList props={results}/>
      </DivList>
    </Container>
  );
};

export default Home;
