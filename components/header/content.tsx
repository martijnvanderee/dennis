import styled from "styled-components";

//style
import { H1, H4 } from "../../blocks";

export const Content = () => (
  <Container>
    <Title>Dennis Stassen </Title>
    <Bar></Bar>
    <SubTitle>Enorme Koning van beroep</SubTitle>
  </Container>
);

const Title = styled(H1)`
  font-size: 3rem;
  letter-spacing: 0.2rem;
  font-weight: 900;
  color: white;
  @media (min-width: 993px) {
    font-size: 6rem;
  }
`;

const SubTitle = styled(H4)`
  color: white;
`;

const Bar = styled.div`
  border: 1px rgba(0, 0, 0, 0.2) solid;
`;

const Container = styled.div`
  margin: auto;
  width: 400px;
  height: 100px;
  text-align: center;
  color: white;
  @media (min-width: 993px) {
    width: 600px;
  }
`;
