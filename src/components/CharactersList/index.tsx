import React, { useState } from "react";
import { Icaracters } from "../../interfaces/Character";
import { Iprops } from "../../interfaces/CharactersList";
import CharacterDetail from "../CharacterDetail";
import { useQuery, gql } from "@apollo/client";
import {
  Card,
  CardImg,
  CardName,
  CardNameDiv,
  ModalCard,
  CardDescription,
  ButtonClose,
} from "./styles";

const CharacterDetails = (id: number) => {
  return gql`
      query {
          character(id: ${id}) {
              name
              species
              status
              gender
              image
              location {
                  id
              }
              origin {
                  id
              }
          }
      }
  `;
};

const CharactersList: React.FC<Iprops> = ({ props }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [id, setId] = useState<number | undefined>();
  const { data } = useQuery(CharacterDetails(id as number));
  const getCharacterData = (id: number) => {
    setId(id);
    setIsVisible(true);
  };

  return (
    <>
      {props.map((character: Icaracters) => (
        <>
          <ModalCard isOpen={isVisible} onRequestClose={() => !isVisible}>
            <ButtonClose onClick={() => setIsVisible(false)}>Close</ButtonClose>
            <CharacterDetail
              {...character}
              locationId={data ? data.character.location.id : undefined}
              originId={data ? data.character.origin.id    : undefined}
            />
          </ModalCard>
          <Card
            key={character.id}
            onClick={() => getCharacterData(character.id)}
          >
            <CardImg src={character.image} alt="" />
            <CardNameDiv>
              <CardName>
                {character.name && character.name.substr(0, 18)}
                {character.name && character.name.length > 18 ? "..." : ""}
              </CardName>
              <CardDescription>Alien</CardDescription>
            </CardNameDiv>
          </Card>
        </>
      ))}
    </>
  );
};

export default CharactersList;
