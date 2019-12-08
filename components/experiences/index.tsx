import styled from "styled-components";
import { lighten } from "polished";

import { H1, H3, H4, H5, Text } from "../../blocks";

import { JobDescription } from "./jobDescription";

export const Experiences: React.FunctionComponent<Props> = () => (
  <Container>
    <ContentContainer>
      <Title1 />
      <JobDescriptionContainer>
        <SubTitle>Education</SubTitle>
        <JobDescription />
        <JobDescription />
        <JobDescription />
      </JobDescriptionContainer>
      <Bar />
      <JobDescriptionContainer>
        <SubTitle>Professional Experience</SubTitle>
        <JobDescription />
        <JobDescription />
      </JobDescriptionContainer>
    </ContentContainer>
  </Container>
);

const Title1 = () => (
  <TitleContainer>
    <Title>Experiences</Title>
    <Quote>
      “Protons give an atom its identity, electrons its personality.”
    </Quote>
    <Quote>- Bill Bryson, A short history of nearly everything</Quote>
    <Bar />
  </TitleContainer>
);

const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Container = styled.div`
  background-color: ${lighten(0.75, "#222650")};
  padding: 5rem 3rem;
`;

const Quote = styled(Text)`
  font-size: 1.2em;
  line-height: 0.5;
`;

const Title = styled(H1)`
  color: var(--color3);
  font-size: 5rem;
  font-weight: 300;
`;

const TitleContainer = styled.div`
  margin: auto 0;
  text-align: center;
`;

const Bar = styled.div`
  margin: 3rem 0;
  border-bottom: 1px solid #727878;
  opacity: 0.2;
`;

const JobDescriptionContainer = styled.div``;

const SubTitle = styled(H3)`
  color: var(--color3);
  font-size: 3rem;
  font-weight: 300;
`;

const JobTitle = styled(H4)`
  font-weight: 900;
  font-size: 2rem;
  margin-right: 1rem;
`;

const Date = styled(Text)``;

const SmallDiscription = styled(H5)`
  font-weight: 900;
  font-size: 1.5rem;
`;

const LargeDiscription = styled(Text)`
  margin-bottom: 0;
`;

const Place = styled(Text)`
  margin: 0;
  color: var(--color3);
`;

const ContainerJobTitle = styled.div`
  display: flex;
`;

const ContainerJob = styled.div`
  margin-top: 2rem;
`;

type Props = {};
