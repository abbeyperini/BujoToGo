import React from 'react';
import Footer from './Footer';
import Header from './Header';

function BaseLayout(props) {
    return(
        <div>
            <Header/>
                <main>
                    {props.children}
                </main>
            <Footer/>
        </div>
    )
}

export default BaseLayout;