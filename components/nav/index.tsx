//style
import S from "./style";
import { LinkButton1 } from "../../blocks";

//hooks
import { useScroll } from "../../hooks/useScroll";

type Props = {};

export const Nav: React.FunctionComponent<Props> = () => {
  const { isScrollTop } = useScroll();

  return (
    <S isScrollTop={isScrollTop}>
      <div> Logo </div>
      <S.Navbar>
        <S.NavLinks>
          <Link name="Home" />
          <Link name="Over Mij" />
          <Link name="Mijn CV" />
          <Link name="Huiswerk Begeleiding" />
        </S.NavLinks>
        <ContactButton />
        <LinkedInButton />
      </S.Navbar>
    </S>
  );
};

type Props1 = { name: string };

const Link: React.FunctionComponent<Props1> = ({ name }) => (
  <S.Hover>
    <S.NavLink>{name}</S.NavLink>
  </S.Hover>
);

const ContactButton = () => (
  <S.Hover>
    <LinkButton1>Contact</LinkButton1>
  </S.Hover>
);

const LinkedInButton = () => (
  <S.Hover>
    <S.I className="fab fa-linkedin" />
  </S.Hover>
);
