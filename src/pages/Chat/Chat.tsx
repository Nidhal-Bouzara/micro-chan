import React from 'react';
import { Background, Navigation, Exit, Minimize, Expand, PageTitle } from './Components';

const Chat = () => {

    return (
        <Background>
            <Navigation>
                <Exit />
                <Minimize />
                <Expand />
                <PageTitle>
                    user@micro-chat
                </PageTitle>
            </Navigation>
        </Background>
    );
}

export default Chat;
