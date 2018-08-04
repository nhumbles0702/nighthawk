import React from 'react';

import Aux from '../../hoc/Aux2';
import classes from './Layout.css';

const layout = (props) => {
    return (
        <Aux>
            <p>Toolbar</p>
            <p>Sidedrawer</p>
            <main>{props.children}</main>
            <p>Build Controls</p>
            
        </Aux>
    );
}

export default layout;

