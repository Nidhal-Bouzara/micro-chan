import Terminal from '../../Components/Terminal/Terminal';
import { Background, Navigation, Exit, Minimize, Expand, PageTitle} from './Components';

const Chat = () => {

    return (
        <Background>
            <Navigation>
                <Exit />
                <Minimize />
                <Expand />
                <PageTitle>
                    Welcome to Micro Chan 😺
                </PageTitle>
            </Navigation>
            <Terminal />
        </Background>
    );
}

export default Chat;
