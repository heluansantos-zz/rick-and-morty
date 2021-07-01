import React, { useContext } from "react";
import { Container } from "./styles";
import { HomeContext } from "../../context/Context";
import { useEffect } from "react";

const Home: React.FC = () => {
  const { getData } = useContext(HomeContext);
  useEffect(() => {
    getData();
  });
  return (
    <Container>
      <h2>Homee</h2>
    </Container>
  );
};

export default Home;
