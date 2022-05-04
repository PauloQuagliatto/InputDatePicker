import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  padding: 4px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: white;

  border-radius: 4px;

  &:focus-within {
    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.25);
  }

  input {
    width: 100%;
    height: 15px;

    font-size: 12px;
    border: none;
    border-radius: 4px;

    &:focus {
      outline: none;
    }
  }

  .functional-icon {
    color: #f20715;
  }
`;

export default Container;
