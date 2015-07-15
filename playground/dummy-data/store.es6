import i from 'seamless-immutable';

export default i({
  'usepanels.com.dev:3000': {
    panels: {
      '/': {
        app: 'usepanels.com.dev:3000',
        appData: {
          backgroundImage: 'https://static.guim.co.uk/sys-images/Guardian/Pix/pictures/2014/4/11/1397210130748/Spring-Lamb.-Image-shot-2-011.jpg',
          backgroundSize: 'cover'
        },
        path: '/',
        title: 'Use Panels',
        typeName: 'Home'
      },
      '/more-stuff': {
        app: 'usepanels.com.dev:3000',
        appData: {
          backgroundImage: 'http://i.imgur.com/ycJ6kxQ.jpg',
          backgroundSize: 'cover'
        },
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
        appData: {
          backgroundColor: 'fuchsia'
        },
        path: '/',
        title: 'Panels runtime',
        typeName: 'Home'
      }
    }
  }
});
