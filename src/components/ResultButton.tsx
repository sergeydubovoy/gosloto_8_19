import { SHOW_RESULT_TEXT } from "shared/constants/constants";
import styled from "styled-components";

export const ResultButton: React.FC<{
  onClick: () => void;
  disabled: boolean;
}> = ({ onClick, disabled }) => (
  <StyledButton onClick={onClick} disabled={disabled}>
    {SHOW_RESULT_TEXT}
  </StyledButton>
);

const StyledButton = styled.button`
  padding: 10px 20px;
  max-width: 300px;
  border: 1px solid #dddddd;
  border-radius: 30px;
  background: transparent;
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
