import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Input from '../Input/Input';
import Oneline from '../Oneline/Oneline';
import { CLI } from './Components';

const Terminal = () => {
    const cli = useAppSelector(state => state.cli);

    return (
        <CLI>
            {
                cli.history.map((item, index) => {
                    return (
                        <Oneline 
                            key={index}
                            user={item.user}
                            address={item.address}
                            dir={item.dir}
                            content={item.content}
                        />
                    )
                })
            }
            <Input />
        </CLI>
    );
}

export default Terminal;
