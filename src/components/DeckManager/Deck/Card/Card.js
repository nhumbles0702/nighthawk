import React from 'react';

import classes from '../Card/Card.css';

const card = (props) => {

    let cardPos = props.pos

    let attachedClasses = [
        classes.Card, 
        classes["Card" + cardPos]
    ]

    if (props.selected) {
        attachedClasses.push(classes['Selected'])
    }

    return (
        <div className={attachedClasses.join(' ')} onClick={props.clicked(cardPos)}></div>
    )
}

export default card;