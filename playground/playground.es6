import * as DUMMY_DATA from './dummy-data';
import * as PanelsApp from '../index';
import FluxComponent from 'flummox/component';
import PanelsContainer from '../panels/container';
import React from 'react';

const flux = new PanelsApp.Flux();

window.Playground = {
  flux,
  PanelsApp,
  getPanelsStore() { return flux.getStore('panels') },
  getTypesStore() { return flux.getStore('types') }
};

console.log('Welcome to panels-app playground.');
console.log('https://app.usepanels.com');
console.log('Playground module', Playground);

flux.getActions('panels').load(DUMMY_DATA.PANELS);
flux.getActions('types').load(DUMMY_DATA.TYPES);
flux.getActions('router').navigate(location.href);

React.render(
  <FluxComponent flux={flux}>
    <PanelsContainer />
  </FluxComponent>,
  document.getElementById('playground-container')
);
