import styled from "styled-components";
import Colors from "../../theme/theme.colors";

interface CategoryItemContainerProps{
  backgroundImage: string
}

export const CategoryItemContainer = styled.div<CategoryItemContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 15px;
  width: 100%;
  height: 100%;
  background-image: ${(props) => `url("${props.backgroundImage}")`};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-blend-mode: color;
  background-color: #0000004d;
  border-radius: 10px;
  box-shadow: 2px 2px ${Colors.primary};
`;

export const CategoryName = styled.div`
  color: ${Colors.text.white};
  text-align: center;
  background-color: #E9ECEF73;
  padding: 10px 30px;
  border-radius: 10px;
  border: 1px solid ${Colors.primary};
  box-shadow: 0px 4px 4px #000000;
  transition: all 0.5s ease;

  &:hover{
    cursor: pointer;
    background-color: #e9ecef;
  }

  & p:nth-child(1){
    font-weight: 600;
  }
`;