import React from 'react';

import Aux from '../../hoc/Aux2';
import classes from './Layout.css';

const layout = (props) => {

    return (
        <Aux>
            <p>Toolbar Sidedrawer</p>
            <main>{props.children}</main>
        </Aux>
    );
}

export default layout;

