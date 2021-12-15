import React, { FC } from 'react';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import PutLine from '../PutLine/PutLine';
import styled from 'styled-components';

type props = {
    user: string;
    address: string;
    dir: string;
    content: string;
}

const mainFont = 'monospace';
const CommandIndicator = styled.span`
    color: pink;
    font-family: ${mainFont};
`;

const Oneline: FC<props> = ({ user, address, dir, content }) => {
    return (
        <div>
            <Breadcrumb
                user={user}
                address={address}
                dir={dir}
            />
            <PutLine
                content={content}
            />
        </div>
    );
}

export default Oneline;
