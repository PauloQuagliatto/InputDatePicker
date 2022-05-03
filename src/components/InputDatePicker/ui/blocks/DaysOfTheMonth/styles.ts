import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  grid-template-rows: auto;
  grid-gap: 0.2rem;

  justify-content: center;
  align-items: center;
`;

export default Container;
