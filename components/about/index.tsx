//components
import { Card } from "./essentials";
import { Title } from "../title";

//style
import S from "./style";

type Props = {};

export const About: React.FunctionComponent<Props> = () => (
  <S>
    <S.ContentContainer>
      <Title title="Over Mij">I am a fantastic Teacher and a superman</Title>
      <S.AboutMeContainer>
        <S.Photo src="/dennis2.jpeg"></S.Photo>
        <S.StoryAboutMe>
          Dennis Stassen MSc. | In 2018 I obtained my master’s degree.... in and
          after graduation I have been mainly working in the ..... I held
          different positions in several companies with a strong focus on
          processes on the interface between development and manufacturing. I
          executed but also led technology transfers, process optimisation
          studies, validation projects and troubleshooting activities. In
          addition, I became an experienced project manager and was a CMC leader
          atand a project manager at ...
        </S.StoryAboutMe>
      </S.AboutMeContainer>
      <S.CardsContainer>
        <Card title="super lieve lach" logo="a">
          Freedom of expression and no templates, plugins, or other nonsense.
          Build your digital products API-first and exactly how you envision
          them.
        </Card>
        <Card title="super lieve lach" logo="b">
          Freedom of expression and no templates, plugins, or other nonsense.
          Build your digital products API-first and exactly how you envision
          them.
        </Card>{" "}
        <Card title="super lieve lach" logo="c">
          Freedom of expression and no templates, plugins, or other nonsense.
          Build your digital products API-first and exactly how you envision
          them.
        </Card>{" "}
        <Card title="super lieve lach" logo="d">
          Freedom of expression and no templates, plugins, or other nonsense.
          Build your digital products API-first and exactly how you envision
          them.
        </Card>
      </S.CardsContainer>
    </S.ContentContainer>
  </S>
);
