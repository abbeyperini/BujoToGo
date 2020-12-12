import React, { Component } from 'react';

export default function(ComposedComponent) {
    
    class Authenticate extends Component {
        constructor(props) {
            super(props)

            if (!localStorage.getItem('isAuthenticated')) {
                this.props.history.push('/index')
            }
        }
        
        render() {
            return <ComposedComponent {...this.props} />
        }
    }

    return Authenticate
}