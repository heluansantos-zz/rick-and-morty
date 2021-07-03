import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Icaracters } from "../../interfaces/Character";
import { Card, CardImg, CardName } from "./styles";

const CHARACTERS_QUERY = gql`
  query Characters {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

const CharactersList = () => {
  const { loading, error, data } = useQuery(CHARACTERS_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.characters.results.map((character: Icaracters) => (
    <Card key={character.id}>
      <CardImg src={character.image} alt="" />
      <CardName>{character.name}</CardName>
    </Card>
  ));
};

export default CharactersList;
