import React from 'react';

function BaseLayout(props) {
    return(
        <div>
            <h1>This will be a menu!</h1>
            <main>
                {props.children}
            </main>
            <h3>This will be a footer!</h3>
        </div>
    )
}

export default BaseLayout;