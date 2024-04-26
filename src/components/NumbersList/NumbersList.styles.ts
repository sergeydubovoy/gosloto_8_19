import styled from "styled-components";

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
    props.active ? "4px solid #ffffff" : "1px solid #dddddd"};
  border-radius: ${(props) => (props.active ? "16px" : "8px")};
  background: ${(props) =>
    props.active ? "rgba(250, 250, 50, 1)" : "transparent"};
  cursor: pointer;
  box-sizing: border-box;
  transition: all 0.2s ease;

  &:hover {
    background: ${(props) =>
      props.active ? "rgba(250, 250, 50, 1)" : "rgba(250, 250, 50, 0.3)"};
  }

  &:active {
    background: rgba(250, 250, 50, 1);
    border-radius: 8px;
    border: 4px solid #ffffff;
  }

  @media (max-width: 768px) {
    width: 44px;
    height: 44px;
    border-radius: ${(props) => (props.active ? "8px" : "4px")};
  }
`;
