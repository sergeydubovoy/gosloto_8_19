import styled from "styled-components";
import { SHOW_RESULT_TEXT } from "../shared/constants/constants";

export const ResultButton: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => <StyledButton onClick={onClick}>{SHOW_RESULT_TEXT}</StyledButton>;

const StyledButton = styled.button`
  padding: 10px 20px;
  max-width: 300px;
  border: 1px solid #dddddd;
  border-radius: 30px;
  background: transparent;
  outline: none;

  &:hover {
    background: rgba(250, 250, 50, 0.3);
  }
`;
