import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const LoginContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoginHeadLine = styled.p`
  size: 1.3rem;
  font-weight: 600;
  color: ${Colors.text.dark};
  margin-bottom: 20px;
`;

export const LoginContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;
`;

export const LoginSubtitle = styled.p`
  width: 100%;
  border-bottom: 1px solid #6c757d;
  margin-top: 20px;
  margin-bottom: 20px;
  padding-bottom: 20px;
  text-align: center;
  color: ${Colors.text.dark};
  size: 1rem;
  font-weight: 500;
`;

export const LoginInputContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;

  & p:nth-child(1) {
    font-weight: 600;
    margin-bottom: 5px;
  }
`;
