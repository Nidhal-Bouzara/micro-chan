import styled from 'styled-components';


let primaryColor = '#5EFFFD';
let mainFont = 'monospace';
export const Background = styled.section`
    background-color: black;
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
`;

export const Navigation = styled.header`
    padding: 1rem 2rem;
    display: flex;
    align-items: center;
    border-bottom: 1.5px solid white;
`;

export const Exit = styled.div`
    height: 2rem;
    width: 2rem;
    border: 2px solid white;
    display: flex;
    border-radius: 50%;
    justify-content: center;
    align-items: center;
    transition: .1s ease;
    cursor: pointer;

    ::before {
        content: '';
        display: block;
        width: 2px;
        height: 1rem;
        background-color: white;
        transform: rotate(45deg);
        transition: .1s ease;
        cursor: pointer;
        position: absolute;
    }

    ::after {
        content: '';
        display: block;
        width: 2px;
        height: 1rem;
        background-color: white;
        transform: rotate(-45deg);
        transition: .1s ease;
        cursor: pointer;
    }

    :hover {
        border-color: ${primaryColor};
        ::before {
            background-color: ${primaryColor};
        }
        ::after {
            background-color: ${primaryColor};
        }
    }
`;

export const Minimize = styled.div`
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
    margin-left: 1rem;
    ::before {
        content: '';
        display: block;
        height: 2px;
        width: 1rem;
        background-color: white;
    }
`;

export const Expand = styled.div`
    width: 2rem;
    height: 2rem;
    display: grid;
    place-content: center;
    margin-left: 1rem;
    ::before {
        content: '';
        display: block;
        height: .8rem;
        width: .8rem;
        border: 2px solid white;
    }
`;

export const PageTitle = styled.h1`
    font-family: ${mainFont};
    color: white;
    font-size: 1rem;
    margin: 0;
    margin-left: 2rem;
    font-weight: 400;
`;