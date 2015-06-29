import assert from 'assert';
import Panel from '../component';

describe('Panel', () => {
  xit('subscribes to next panel (after) from the router');
  xit('subscribes to the context (redux) from contexts');
  xit('subscribes to the Type (the component to render) from types');

  describe('with a redux context', () => {
    xit('renders a redux Provider component');
    xit('renders a Type component inside the redux Provider component');
    xit('the Type gets the app\'s redux context');
  });

  describe('without a redux context', () => {
    xit('renders a Type component');
  })

  describe('Type props', () => {
    xit('doesn\'t pass the dispatch prop');
    xit('sets the panel\'s data as props');
    xit('after (so that it can react to flow changes)');
  });

  describe('Type child context', () => {
    xit('isActive');
    xit('navigate');
  });

  describe('expected props', () => {
    xit('context');
    xit('panel');
  });

  describe('optional props', () => {
    xit('after');
    xit('redux');
  })
});
