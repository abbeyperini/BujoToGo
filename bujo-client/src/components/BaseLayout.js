import React from 'react';
import Footer from './Footer';
import Header from './Header';

function BaseLayout(props) {
    return(
        <div className="base">
            <Header/>
                <main>
                    {props.children}
                </main>
            <Footer/>
        </div>
    )
}

export default BaseLayout;