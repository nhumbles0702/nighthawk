import React, { Component } from 'react';

import Deck from './Deck/Deck';
import Aux from '../../hoc/Aux2';

class DeckManager extends Component {

    state = {
        deck: [
            {
                hints: [
                    {
                        clueType: "number",
                        target: 2,
                        isTarget: false
                    }
                ],
                selected: false
            },
            {
                hints: [
                    {
                        clueType: "number",
                        target: 2,
                        isTarget: false
                    }
                ],
                selected: false
            },
            {
                hints: [
                    {
                        clueType: "number",
                        target: 2,
                        isTarget: false
                    }
                ],
                selected: false
            },
            {
                hints: [
                    {
                        clueType: "number",
                        target: 2,
                        isTarget: false
                    }
                ],
                selected: false
            },
            {
                hints: [
                    {
                        clueType: "number",
                        target: 2,
                        isTarget: false
                    }
                ],
                selected: false
            }
        ]

    }


    selectHandler = (pos) => {
        
    }

    render() {

        
    const testStyle = {
        position: 'fixed',
        bottom: '0',
        width: '100%'
    };
        return (
            <Aux>
            {/* Placeholder for modal */}
            <Deck cards={this.state.deck} clicked={this.selectHandler}/>
            <div style={testStyle}>Build Controls</div>
            </Aux>
        )
    }
}

export default DeckManager;