import React from "react";
import { Icaracters } from "../../interfaces/Character";
import { useQuery, gql } from "@apollo/client";
import {
  Container,
  Name,
  Img,
  DivInfo,
  Title,
  Info,
  DivDetails,
  Residents,
  DivImg,
} from "./styles";

const LocationDetailsQuery = (id: number) => {
  return gql`
      query {
          location(id: ${id}) {
              name
              type
              dimension
              residents {
                  id
              }
          }
      }
  `;
};

const CharacterDetail: React.FC<Icaracters> = ({ image, name, locationId }) => {
  const { data } = useQuery(LocationDetailsQuery(locationId));
  const arrayInfo = [
    { id: 0, title: "ABOUT", info: name, residents: "" },
    {
      id: 1,
      title: "ORIGIN",
      info: "Earth",
      residents: "",
    },
    {
      id: 2,
      title: "LOCATION",
      info: data ? data.location.name : "",
      residents: data ? data.location.residents.length : "",
    },
  ];

  return (
    <Container>
      <DivImg>
        <Img src={image} />
        <Name>{name}</Name>
      </DivImg>

      <DivInfo>
        {arrayInfo.map((item, index) => (
          <DivDetails key={index}>
            <Title>{item.title}</Title>
            <Info>{item.info}</Info>
            <Residents>{item.residents}</Residents>
          </DivDetails>
        ))}
      </DivInfo>
    </Container>
  );
};

export default CharacterDetail;
