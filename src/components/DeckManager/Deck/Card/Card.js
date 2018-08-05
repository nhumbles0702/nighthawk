import React from 'react';

import classes from '../Card/Card.css';

const card = (props) => {

    let cardPos = props.pos

    let attachedClasses = [classes.Card, classes["Card" + cardPos]]

    return (
        <div className={attachedClasses.join(' ')} onClick={props.clicked}>E</div>
    )
}

export default card;