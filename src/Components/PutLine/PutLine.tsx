import React, { FC } from 'react';
import styled from 'styled-components';

type props = {
    content: string;
}
const mainFont = 'monospace';

const Output = styled.span`
    color: white;
    font-family: ${mainFont};
    font-size: .9rem;
`;

const PutLine: FC<props> = ({ content }) => {

    return (
        <Output>
            {content}
        </Output>
    );
}

export default PutLine;
