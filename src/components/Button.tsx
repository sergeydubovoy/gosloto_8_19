import styled from "styled-components";

const SHOW_RESULT_TEXT = "Показать результат";

export const Button: React.FC = () => (
  <StyledButton>{SHOW_RESULT_TEXT}</StyledButton>
);

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
