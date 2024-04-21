import styled from "styled-components";
import MagicWand from "../assets/magic-wand.svg";

export const MagicButton: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <StyledButton onClick={onClick}>
    <img src={MagicWand} />
  </StyledButton>
);

const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  border: none;
  border-radius: 50%;
  background: url(../);
  outline: none;

  &:hover {
    background: rgba(250, 250, 50, 0.3);
  }
`;
