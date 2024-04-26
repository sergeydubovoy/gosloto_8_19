import styled from "styled-components";

export const StyledButton = styled.button<{ isRandomButton?: boolean }>`
  position: ${(props) => (props.isRandomButton ? "absolute" : "static")};
  padding: ${(props) => (props.isRandomButton ? "10px" : "10px 20px")};
  max-width: ${(props) => (props.isRandomButton ? "40px" : "300px")};
  height: ${(props) => (props.isRandomButton ? "40px" : "auto")};
  top: ${(props) => (props.isRandomButton ? "10px" : "")};
  right: ${(props) => (props.isRandomButton ? "10px" : "")};
  border: 1px solid #dddddd;
  border-radius: ${(props) => (props.isRandomButton ? "50%" : "30px")};
  background: ${(props) =>
    props.isRandomButton ? "rgba(140, 140, 140, 0.1)" : "transparent"};
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: rgba(250, 250, 50, 0.3);
  }

  &:active {
    background: rgba(250, 250, 50, 1);
  }

  ${(props) =>
    props.disabled &&
    `
    cursor: not-allowed;
    opacity: 0.5;
  `}
`;
