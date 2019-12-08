import styled from "styled-components";

//components
import { Essential1 } from "../../blocks";

type Props = { title: string; logo: string };

export const Card: React.FunctionComponent<Props> = ({
  title,
  children,
  logo
}) => (
  <Container>
    <Essential1 logoOption={logo} title={title}>
      {children}
    </Essential1>
  </Container>
);

export const Container = styled.div`
  margin-bottom: 5rem;
  @media (min-width: 600px) {
    padding: 0 var(--spacingS);
  }
  @media (min-width: 993px) {
    flex-basis: 50%;
    padding: 0 var(--spacingL);
  }
`;
