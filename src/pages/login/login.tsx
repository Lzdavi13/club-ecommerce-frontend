import CustomButton from "../../components/custom-button/custom-button.component";
import CustomInput from "../../components/custom-input/custom-input.component";
import Header from "../../components/header/header.component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginInputContainer,
  LoginSubtitle,
} from "./login.styles";
import { BsGoogle } from "react-icons/bs";
import { FiLogIn } from "react-icons/fi";

function LoginPage() {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginContent>
          <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
          <CustomButton startIcon={<BsGoogle size={18} />}>
            Entrar com o Google
          </CustomButton>
          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>

          <LoginInputContainer>
            <CustomInput placeholder="Digite seu e-mail" />
          </LoginInputContainer>

          <LoginInputContainer>
            <CustomInput placeholder="Digite sua senha" />
          </LoginInputContainer>

          <CustomButton startIcon={<FiLogIn size={18} />}>Entrar</CustomButton>
        </LoginContent>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
