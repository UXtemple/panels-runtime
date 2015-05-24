import * as PanelsRouter from 'panels-router';
import * as PanelsStore from 'panels-store';
import * as PanelsTypes from 'panels-types';
import { Flux } from 'flummox';

export default class PanelsFlux extends Flux {
  constructor() {
    super();

    this.createActions('router', PanelsRouter.Actions);
    this.createStore('router', PanelsRouter.Store, this);
    this.history = PanelsRouter.history(this);

    this.createActions('panels', PanelsStore.Actions);
    this.createStore('panels', PanelsStore.Store, this);

    this.createActions('types', PanelsTypes.Actions);
    this.createStore('types', PanelsTypes.Store, this);
  }
}
