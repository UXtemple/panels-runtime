import i from 'seamless-immutable';

export default i({
  'usepanels.com.dev:3000': {
    panels: {
      '/': {
        app: 'usepanels.com.dev:3000',
        path: '/',
        title: 'Use Panels',
        typeName: 'Home'
      },
      '/more-stuff': {
        app: 'usepanels.com.dev:3000',
        path: '/more-stuff',
        title: 'More stuff',
        typeName: 'MoreStuff'
      }
    }
  },
  'runtime.usepanels.com.dev:3000': {
    panels: {
      '/': {
        app: 'runtime.usepanels.com.dev:3000',
        path: '/',
        title: 'Panels runtime',
        typeName: 'Home'
      }
    }
  }
});
