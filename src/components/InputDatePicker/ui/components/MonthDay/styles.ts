import styled from "styled-components";

interface IProps {
  isSelected: boolean;
}

const Container = styled.span<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.isSelected) {
      return "background-color: black; color: white;";
    }
  }}
`;

export default Container;
