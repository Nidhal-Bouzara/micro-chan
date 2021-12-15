import styled from 'styled-components';

const mainFont = 'monospace';

export const Form = styled.form`
    width: 100vw;
    height: 100%;
    position: relative;
`;

export const PromptInput = styled.textarea`
    border: 0;
    background-color: transparent;
    font-family: ${mainFont};
    color: white;
    font-size: .9rem;
    outline: none;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    :focus {
        outline: none;
    }
`;

export const Pointer = styled.span`
    color: white;
    font-family: ${mainFont};
    font-size: 1rem;
    position: relative;
    right: 1rem;
`;