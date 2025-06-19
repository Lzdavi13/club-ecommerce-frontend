import { CustomButtonContainer, IconContainer } from "./custom-button.styles";
import type { ButtonHTMLAttributes, ReactNode } from "react";

interface CustomButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  startIcon?: ReactNode;
}

function CustomButton({ children, startIcon, ...rest }: CustomButtonProps) {
  return (
    <CustomButtonContainer {...rest}>
      {startIcon && <IconContainer>{startIcon}</IconContainer>}

      {children}
    </CustomButtonContainer>
  );
}

export default CustomButton;
