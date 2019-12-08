import styled from "styled-components";

//components
import { Nav } from "../nav";
import { Content } from "./content";

type Props = {};

export const Header: React.FunctionComponent<Props> = () => (
  <Container>
    <BackgroundPhoto src="/dennis3.jpg" alt="background photo" />
    <Nav />
    <Content />
  </Container>
);

const Container = styled.header`
  position: relative;
  height: 50vh;
  display: flex;
  @media (min-width: 993px) {
    height: 100vh;
  }
`;

const BackgroundPhoto = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: -1;
`;
