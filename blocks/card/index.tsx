import styled from "styled-components";

//component
import { Card1 } from "./card1";

export const EssentialStyle = styled(Card1)`
  --bgColor: white;
`;

type Props = { title: string; logoOption: string };

const logoFinder = (option: string) => {
  if (option === "a") return "card_travel";
  if (option === "b") return "chat";
  if (option === "c") return "create";
  return "battery_charging_full";
};

export const Essential1: React.FunctionComponent<Props> = props => (
  <EssentialStyle logo={logoFinder(props.logoOption)} {...props} />
);
