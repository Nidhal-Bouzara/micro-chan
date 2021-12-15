import styled from 'styled-components';
const terminalFont = 'monospace';

export const CLI = styled.main`
    padding: 1rem 2rem;
    color: white;
    font-family: ${terminalFont};
    position: relative;
    height: 100vh;
    cursor: text;
    overflow-y: scroll;
`;

