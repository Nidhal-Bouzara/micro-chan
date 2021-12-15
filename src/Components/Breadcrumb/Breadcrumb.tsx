import React, { FC } from 'react';
import { Line, User, At, Location, Dir } from './Components';

type props = {
    user: string;
    address: string;
    dir: string;
}

const Breadcrumb: FC<props> = ({ user, address, dir }) => {
    return (
        <Line>
            <User>{user}</User>
            <At>@</At>
            <Location>{address}</Location>
            <span>:</span>
            <Dir>&nbsp;{dir}&nbsp;</Dir>
        </Line>
    );
}

export default Breadcrumb;
