import styled from "styled-components/macro";
import tw from "twin.macro";
import { SiDiscogs } from "react-icons/si";
import MusicTicker from "./MusicTicker";

const Footer = (props) => {
  return (
    <Container>
      <TextGroup>
        <TikTokID>@{props.channel}</TikTokID>
        <Description>{props.description}</Description>
        <MusicTicker title={props.music} />
      </TextGroup>
      <VinylIcon />
    </Container>
  );
};

const Container = styled.div`
  ${tw`relative text-white bottom-24 p-5 flex items-center`}
`;

const TextGroup = styled.div`
  ${tw`flex flex-col flex-1 mr-4`}
`;

const TikTokID = styled.b`
  ${tw`text-base font-bold`}
`;

const Description = styled.div`
  ${tw`text-xs`}
`;

const VinylIcon = styled(SiDiscogs)`
  ${tw`animate-spin-slow text-3xl`}
`;

export default Footer;
