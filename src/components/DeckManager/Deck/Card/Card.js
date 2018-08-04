import React from 'react';

import classes from '../Card/Card.css';

const card = (props) => {

    let cardPos = props.pos

    let attachedClasses = [classes.Card, classes["Card" + cardPos]]

    return (
        <div className={attachedClasses.join(' ')}>f</div>
    )
}

export default card;