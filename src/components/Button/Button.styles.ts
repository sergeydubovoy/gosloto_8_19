import styled from "styled-components";
import * as colors from "shared/styles/colors";

export const StyledButton = styled.button<{ isRandomButton?: boolean }>`
  position: ${(props) => (props.isRandomButton ? "absolute" : "static")};
  padding: ${(props) => (props.isRandomButton ? "10px" : "10px 20px")};
  max-width: ${(props) => (props.isRandomButton ? "40px" : "300px")};
  height: ${(props) => (props.isRandomButton ? "40px" : "auto")};
  top: ${(props) => (props.isRandomButton ? "10px" : "")};
  right: ${(props) => (props.isRandomButton ? "10px" : "")};
  border: ${`1px solid ${colors.borderColor}`};
  border-radius: ${(props) => (props.isRandomButton ? "50%" : "30px")};
  background: ${(props) =>
    props.isRandomButton
      ? `${colors.buttonBackgroundColor}`
      : `${colors.transparentColor}`};
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${colors.hoverColor};
  }

  &:active {
    background: ${colors.activeColor};
  }

  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;
