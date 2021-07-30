import { MdMusicNote } from "react-icons/md";
import Ticker from "react-ticker";
import styled from "styled-components/macro";
import tw from "twin.macro";

const MusicTicker = (props) => {
  return (
    <Container>
      <MusicNoteIcon />
      <Ticker mode="smooth">
        {({ index }) => (
          <>
            <Title>{props.title}</Title>
          </>
        )}
      </Ticker>
    </Container>
  );
};

const Container = styled.div`
  ${tw`mt-1`}
  .ticker {
    ${tw`relative ml-6 bottom-4`}
  }
`;

const MusicNoteIcon = styled(MdMusicNote)`
  ${tw`relative mr-2`}
`;

const Title = styled.p`
  ${tw`text-xs`}
`;

export default MusicTicker;
