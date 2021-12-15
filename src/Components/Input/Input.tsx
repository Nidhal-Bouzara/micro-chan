import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import Prompt from '../Prompt/Prompt';
import styled from 'styled-components';

const InputContainer = styled.div`
    height: 100%;
    margin-top: 2px;
`;

const Input = () => {
    const cli = useAppSelector(state => state.cli);
    return (
        <InputContainer>
            <Breadcrumb
                user={cli.user}
                address={cli.address}
                dir={cli.dir}
            />
            <br />
            <Prompt />
        </InputContainer>
    );
}

export default Input;
