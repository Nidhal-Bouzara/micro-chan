import styled from 'styled-components';

const mainColor = '#5EFFFD';
const locationColor = '#FD9873';
const dirColor = '#FFA7B1';
const mainFont = 'monospace';

export const Line = styled.div`
    display: inline-flex;
`;
export const User = styled.span`
    color: ${mainColor};
    font-family: ${mainFont};
`;
export const At = styled.span`
    color: white;
    font-family: ${mainFont};
`;
export const Location = styled.span`
    color: ${locationColor};
    font-family: ${mainFont};
`;
export const Dir = styled.span`
    color: ${dirColor};
    font-family: ${mainFont};
`;
