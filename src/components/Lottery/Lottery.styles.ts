import styled from "styled-components";
import * as colors from "shared/styles/colors";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 20px 20px 40px 20px;
  max-width: 600px;
  height: auto;
  background: ${colors.backgroundColor};
  border-radius: 14px;
`;

export const TiketNumber = styled.h1`
  width: 100%;
  font-size: 24px;
  font-weight: 700;
  text-align: left;
`;

export const ResultMessage = styled.p<{ result: boolean }>`
  color: ${(props) =>
    props.result === true ? colors.winColor : colors.loseColor};
`;
