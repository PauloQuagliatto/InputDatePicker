import styled from "styled-components";

interface IProps {
  isSelected: boolean;
}

const Container = styled.span<IProps>`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) => {
    if (props.isSelected) {
      return "background-color: black; color: white;";
    }
  }}

  cursor: pointer;
  &:hover {
    background-color: red;
  }
`;

export default Container;
