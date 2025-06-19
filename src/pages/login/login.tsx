import Header from "../../components/header/header.component";
import {
  LoginContainer,
  LoginContent,
  LoginHeadLine,
  LoginSubtitle,
} from "./login.styles";

function LoginPage() {
  return (
    <>
      <Header />

      <LoginContainer>
        <LoginHeadLine>Entre com a sua conta</LoginHeadLine>
        <LoginContent>
          <LoginSubtitle>ou entre com o seu e-mail</LoginSubtitle>
        </LoginContent>
      </LoginContainer>
    </>
  );
}

export default LoginPage;
