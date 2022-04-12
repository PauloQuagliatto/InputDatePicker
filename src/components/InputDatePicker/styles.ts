import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 500px;
  
  .input-wrapper {
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

      border-radius: 4px;

      &:focus {
        outline: none;
      }
    }

    .functional-icon {
      color: #F20715;
    }
  }

  .calendar-wrapper {
    position: absolute;
    top: 110%;
    z-index: 1;

    padding: 8px;
    background-color: white;

    border-radius: 6px;

    box-shadow: 0px 0px 8px 3px rgba(0, 0, 0, 0.25);

    .calendar-header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  }
`;

export default Container;
