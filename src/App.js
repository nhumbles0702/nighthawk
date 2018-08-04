import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import DeckManager from '../src/components/DeckManager/DeckManager';

class App extends Component {
  render() {
    return (
      <div>
      <Layout>
        <DeckManager />
      </Layout>
      </div>
    );
  }
}

export default App;
