import styled from "styled-components";
import MagicWand from "../assets/magic-wand.svg";

export const RandomButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => (
  <StyledButton onClick={onClick}>
    <img src={MagicWand} />
  </StyledButton>
);

const StyledButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 10px;
  width: 40px;
  height: 40px;
  background: rgba(0, 0, 0, 0.1);
  border: none;
  border-radius: 50%;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(250, 250, 50, 0.3);
  }

  &:active {
    background: rgba(250, 250, 50, 1);
  }
`;
