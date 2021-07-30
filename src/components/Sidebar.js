import {
  MdFavorite,
  MdFavoriteBorder,
  MdMessage,
  MdShare,
} from "react-icons/md";
import styled from "styled-components/macro";
import tw from "twin.macro";
import { useState } from "react";

const Sidebar = (props) => {
  return (
    <Container>
      <CountButton favorite count={props.likes} />
      <CountButton comment count={props.comments} />
      <CountButton share count={props.shares} />
    </Container>
  );
};

const Container = styled.aside`
  ${tw`absolute top-1/2 right-6 flex flex-col space-y-4`}
`;

const CountButton = styled(({ favorite, comment, share, count, ...props }) => {
  const [added, setAdded] = useState(false);
  const [_count, setCount] = useState(count);
  const toggleFav = () => {
    !added ? setCount(count + 1) : setCount(count);
    setAdded(!added);
  };
  return (
    <div {...props}>
      <button onClick={favorite && toggleFav}>
        {favorite ? (
          added ? (
            <MdFavorite />
          ) : (
            <MdFavoriteBorder />
          )
        ) : comment ? (
          <MdMessage />
        ) : share ? (
          <MdShare />
        ) : null}
      </button>
      <small>{_count}</small>
    </div>
  );
})`
  ${tw`flex flex-col items-center`}
  svg {
    ${tw`text-2xl`}
  }
`;

export default Sidebar;
