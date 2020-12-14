import React from 'react';
import Header from './Header';

function BaseLayout(props) {
    return(
        <div className="base">
            <Header/>
                <main>
                    {props.children}
                </main>
        </div>
    )
}

export default BaseLayout;