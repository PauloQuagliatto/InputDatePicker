import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.functional-icon {
        display: flex;
        align-items: center;
        cursor: pointer;

        border-radius: 50%;

        transition: 0.2s ease;
        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export default GlobalStyle;
