import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import { staticData } from './data';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App graphData={staticData} />, div);
});
