import React, { useRef, useState } from 'react';
import { command, addToHistory, clearHistory, accessAddress, login, logout } from '../../redux/cliSlice';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { PromptInput, Pointer, Form } from './Components';

const Prompt = () => {
    const [Command, setCommand] = useState('');
    const AppDispatch = useAppDispatch();
    const cli = useAppSelector(state => state.cli);
    const prompt = useRef<HTMLTextAreaElement>(null);

    function handleChange (event: React.ChangeEvent<HTMLTextAreaElement>) {
        setCommand(event.target.value)        
    }

    function handleSubmit (event: React.KeyboardEvent) {
        event.preventDefault();
        let cmd = Command.slice(0, -1);
        if (event.key === 'Enter') {
            if (cmd === 'clear') {
                AppDispatch(clearHistory());
                setCommand('');
            } else {
                if (cmd.indexOf('micro') === 0) {
                    let arrayOfCmd = cmd.split(' ');
                    let lengthOfCmd = arrayOfCmd.length;

                    // micro chat
                    if (arrayOfCmd[1] === 'chat' && lengthOfCmd === 2) {
                        AppDispatch(accessAddress('micro-chat'));

                    // micro chan
                    } else if (arrayOfCmd[1] === 'chan' && lengthOfCmd === 2) {
                        AppDispatch(accessAddress('micro-chan'));
                    }

                    // logout
                    if (arrayOfCmd[1] === 'logout' && lengthOfCmd === 2)  {
                        AppDispatch(logout());
                    }

                    // login
                    if (arrayOfCmd[1] === 'login' && lengthOfCmd === 3) {
                        AppDispatch(login(arrayOfCmd[2]));
                    }
                }
                AppDispatch(command(cmd));
                AppDispatch(addToHistory({
                    address: cli.address,
                    dir: cli.dir,
                    user: cli.user,
                    content: cmd,
                }));
                setCommand('');
            }
        }
    }


    return (
        <React.Fragment>
            <Form>
                <Pointer>$</Pointer>
                <PromptInput ref={prompt} onChange={handleChange} onKeyUp={handleSubmit} value={Command} />
            </Form>
        </React.Fragment>
    );
}

export default Prompt;
