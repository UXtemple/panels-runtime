import { createRedux } from 'redux';
import { provide } from 'redux/react';
import { Actions as routerActions, getters as routerGetters, history as routerHistory, reducer as router } from 'panels-router';
import { getters as storeGetters, reducer as store } from 'panels-store';
import { reducer as contexts } from 'panels-contexts';
import { reducer as types } from 'panels-types';
import Panels from './panels';
import React, { Component } from 'react';

export default function createPanelsRuntime(initialData = {}) {
  const redux = createRedux({
    contexts,
    router,
    store,
    types
  }, initialData);

  const historyUnsubscribe = routerHistory(redux, uri => redux.dispatch(routerActions.navigate(uri)));

  let lastUri;
  const titleUnsubscribe = redux.subscribe(() => {
    const state = redux.getState();
    const currentUri = routerGetters.last(state.router);

    if (currentUri !== lastUri) {
      lastUri = currentUri;
      try {
        window.document.title = storeGetters.find(state.store, currentUri.uri).title;
      } catch(err) {
        console.error(err);
      }
    }
  });

  @provide(redux)
  class App {
    render() {
      return <Panels />;
    }
  }

  redux.dispatch(routerActions.navigate(location.href));

  return {
    App,
    historyUnsubscribe,
    redux,
    titleUnsubscribe
  };
}
