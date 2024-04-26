import styled from "styled-components";
import * as colors from "shared/styles/colors";

export const Wrapper = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 2px;
`;

export const Number = styled.li<{ active: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 60px;
  border: ${(props) =>
    props.active
      ? `4px solid ${colors.activeBorderColor}`
      : `1px solid ${colors.borderColor}`};
  border-radius: ${(props) => (props.active ? "16px" : "8px")};
  background: ${(props) =>
    props.active ? `${colors.activeColor}` : `${colors.transparentColor}`};
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.active ? `${colors.activeColor}` : `${colors.hoverColor}`};
  }

  &:active {
    background: ${colors.activeColor};
    border-radius: 8px;
    border: ${`4px solid ${colors.activeBorderColor}`};
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: ${(props) => (props.active ? "8px" : "4px")};
  }
`;
