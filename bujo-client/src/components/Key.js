import React from 'react';
import { ReactComponent as KeyIcon } from '../images/key.svg';
import { ReactComponent as Bullet } from '../images/basicIcons/bullet.svg';
import { ReactComponent as Note } from '../images/basicIcons/dash.svg';
import { ReactComponent as Event } from '../images/basicIcons/o.svg';
import { ReactComponent as X } from '../images/basicIcons/x.svg';
import { ReactComponent as MigrateForward } from '../images/basicIcons/arrowR.svg';
import { ReactComponent as MigrateBackward } from '../images/basicIcons/arrowL.svg';

function Key(props) {
    return(
        <ul>
            <li><KeyIcon /> <h1>Key</h1></li>
            <li><p>task</p> <Bullet /></li>
            <li><p>event</p> <Event /></li>
            <li><p>completed</p> <X /></li>
            <li><p>migrate bullet forward in time</p> <MigrateForward /></li>
            <li><p>migrate bullet backward in time</p> <MigrateBackward /></li>
            <li><p>note</p> <Note /></li>
        </ul>
    )
}

export default Key;