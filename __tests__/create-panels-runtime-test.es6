import assert from 'assert';
import createPanelsRuntime from '../create-panels-runtime';

global.location = {
  href: ''
};
global.window = {
  addEventListener: function() {},
  location: global.location,
  document: {
    title: ''
  }
}

describe('createPanelsRuntime', () => {
  let runtime;
  beforeEach(() => runtime = createPanelsRuntime());

  describe('redux', () => {
    it('has a redux instance', () => {
      assert(typeof runtime.redux.dispatch === 'function', 'has a dispatch function');
      assert(typeof runtime.redux.getState === 'function', 'has a getState function');
      assert(typeof runtime.redux.subscribe === 'function', 'has a subscribe function');
    });

    xit('allows for data to be initialised');
  })

  describe('App', () => {
    it('has an App component', () => assert(runtime.App.prototype.render, 'has a render method'));
    xit('renders a Panels component');
    xit('it provides a redux context to the rendered component');
  });

  describe('browser\'s history', () => {
    xit('manages it');
    xit('it provides a way to stop dealing with the router\'s history');
  });

  describe('document title', () => {
    xit('sets it when the router\'s URI changes');
    xit('it provides a way to stop dealing with title updates');
  });
 });
