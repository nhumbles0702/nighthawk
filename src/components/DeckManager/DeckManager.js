import React, { Component } from 'react';

import Deck from './Deck/Deck';

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

    render() {
        return (
            <Deck cards={this.state.deck}/>
        )
    }
}

export default DeckManager;