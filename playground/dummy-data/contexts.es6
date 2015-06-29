import { createRedux } from 'redux';
import i from 'seamless-immutable';

const ADD = 'USEPANELS:ADD';
const SUBSTRACT = 'USEPANELS:SUBSTRACT';

function counter(state = 0, {type, number}) {
  switch (type) {
    case ADD: return state + number;
    case SUBSTRACT: return state - number;
    default: return state;
  }
}

const usePanelsContext = createRedux({counter});

export default i({
  'usepanels.com.dev:3000': usePanelsContext
});
