import * as DUMMY_DATA from './dummy-data';
import * as PanelsRuntime from '../index';
import React from 'react';
import ReactDOM from 'react-dom';

const instance = PanelsRuntime.createPanelsRuntime(DUMMY_DATA);

window.Playground = {
  instance,
  PanelsRuntime
};

const { App } = instance;

ReactDOM.render(<App />, document.getElementById('playground-container'));

console.log('Welcome to panels-runtime playground.');
console.log('https://github.com/UXtemple/panels-runtime');
console.log('Playground module', window.Playground);
