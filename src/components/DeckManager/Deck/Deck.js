import React from 'react';

import Card from './Card/Card';
import Aux from '../../../hoc/Aux2'
import classes from '../Deck/Deck.css';


const deck = (props) => {

    let transformedCards = (props.cards).map((cardHintsArr, i) => {
        return <Card 
            hints={cardHintsArr} 
            selected={props.cards[i].selected} 
            key={"card" +  i.toString()} 
            pos={i.toString()} 
            clicked={props.clicked}
        />
    })
   


    return (
        <div className={classes.Deck} id="Deck">
            {transformedCards}
        </div>
    )
}

export default deck;