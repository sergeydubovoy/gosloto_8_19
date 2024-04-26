import { SHOW_RESULT_TEXT } from "shared/constants/constants";
import MagicWand from "assets/magic-wand.svg";
import { ButtonProps } from "./Button.interfaces";
import { StyledButton } from "./Button.styles";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  disabled,
  isRandomButton,
}) => (
  <StyledButton
    onClick={onClick}
    disabled={disabled}
    isRandomButton={isRandomButton}
  >
    {isRandomButton && <img src={MagicWand} />}
    {!isRandomButton && SHOW_RESULT_TEXT}
  </StyledButton>
);
