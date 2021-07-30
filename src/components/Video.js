import { useRef, useState } from "react";
import styled from "styled-components/macro";
import tw from "twin.macro";
import Footer from "./Footer";
import Sidebar from "./Sidebar";

const Video = (props) => {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const playVideo = () => {
    playing ? videoRef.current.pause() : videoRef.current.play();
    setPlaying(!playing);
  };
  return (
    <Container>
      <Player loop onClick={playVideo} ref={videoRef} src={props.url} />
      <Footer channel={props.channel} description={props.description} music={props.music} />
      <Sidebar likes={props.likes} comments={props.comments} shares={props.shares} />
    </Container>
  );
};

const Container = styled.div`
  ${tw`relative h-full w-full rounded-xl snap-start my-2`}
`;

const Player = styled.video`
  ${tw`object-fill h-full w-full rounded-xl`}
`;

export default Video;
