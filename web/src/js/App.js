import React, { Component } from 'react';
import GrommetApp from 'grommet/components/App';
import PreICO from './components/PreICO';

import '../scss/index.scss';

export default class App extends Component {
  render() {
    return (
      <GrommetApp centered={false} inline={true}>
        <PreICO proxy="https://mainnet.infura.io/" />
      </GrommetApp>
    );
  }
}