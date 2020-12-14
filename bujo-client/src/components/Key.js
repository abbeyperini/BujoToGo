import React from 'react';
import { ReactComponent as KeyIcon } from '../images/key.svg';
import { ReactComponent as Bullet } from '../images/basicIcons/bullet.svg';
import { ReactComponent as Note } from '../images/basicIcons/dash.svg';
import { ReactComponent as Event } from '../images/basicIcons/o.svg';
import { ReactComponent as X } from '../images/basicIcons/x.svg';
import { ReactComponent as MigrateF } from '../images/basicIcons/arrowR.svg';
import { ReactComponent as MigrateB } from '../images/basicIcons/arrowL.svg';

function Key() {
    return(
        <div className="main-block">
            <div className="key-heading"><KeyIcon className="key-heading_bullet"/> <h1>Key</h1></div>
            <ul className="key-container">
                <li className="key-item"> <Bullet className="key-item_bullet"/> <p>task</p></li>
                <li className="key-item"> <Event className="key-item_bullet"/> <p>event</p></li>
                <li className="key-item"> <X className="key-item_bullet"/> <p>completed</p></li>
                <li className="key-item"> <Note className="key-item_bullet"/> <p>note</p></li>
                <li className="key-item"> <MigrateF className="key-item_bullet"/> <p>migrate forward in time</p></li>
                <li className="key-item"> <MigrateB className="key-item_bullet"/> <p>migrate backward in time</p></li>
            </ul>
        </div>
    )
}

export default Key;