import styled from "styled-components";
import Colors from "../../theme/theme.colors";

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: ${Colors.background.dark};
  padding: 10px 15px;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 2px 2px #00000040;
  color: ${Colors.text.white};
  font-weight: 600;
  transition: all 0.5s ease;

  &:hover {
    cursor: pointer;
    background-color: #000000;
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  margin-right: 8px;
`;
